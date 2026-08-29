// Script to download all RoV hero images from Cloudinary CDN
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'public', 'heroes');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const IMG_BASE = 'https://res.cloudinary.com/dtzdhbllb/image/upload';

const HERO_IMG_MAP = {
  "Azzen'Ka":    "AzzenKa",
  "D'Arcy":      "Darcy",
  "Diaochan":    "Diao_Chan",
  "Eland'orr":   "Elandorr",
  "Kil'Groth":   "Kil_Groth",
  "Tel'Annas":   "Tel_Annas",
  "Wukong":      "Wu_Kong",
  "The Flash":   null, // already saved locally
  "Jinnar":      "Jinna",
  "Lu Bu":       "Lu_Bu",
  "Wonder Woman":"Wonder_Woman",
  "Bolt Baron":  "Bolt_Baron",
  "Y'bneth":     "Y_bneth",
  "TeeMee":      "Teemee",
};

const HERO_IMG_OVERRIDE = {
  'Flowborn':     'https://res.cloudinary.com/dtzdhbllb/image/upload/v1775747198/Flowborn.png',
  'Flowborn Mid': 'https://res.cloudinary.com/dtzdhbllb/image/upload/v1777620554/Flowborn_mid.jpg',
  'Flowborn (Mage)': 'https://res.cloudinary.com/dtzdhbllb/image/upload/v1777620554/Flowborn_mid.jpg',
  'Flowborn (Marksman)': 'https://res.cloudinary.com/dtzdhbllb/image/upload/v1775747198/Flowborn.png',
  'Iggy':        'https://res.cloudinary.com/dtzdhbllb/image/upload/v1779828886/iggy.jpg',
  'Riktor':      'https://res.cloudinary.com/dtzdhbllb/image/upload/v1779828977/riktor.jpg',
  'Sinestrea':   'https://res.cloudinary.com/dtzdhbllb/image/upload/v1779829012/sinestrea.jpg',
  'Tamyn':       'https://res.cloudinary.com/dtzdhbllb/image/upload/v1783002370/Tamyn.jpg',
};

const ALL_HEROES = [
  'Airi','Aleister','Alice','Allain','Amily','Annette','Aoi','Arduin','Arum','Astrid',
  'Ata','Aya',"Azzen'Ka",'Baldum','Bijan','Billow','Biron','Bolt Baron','Bonnie','Bright',
  'Butterfly','Capheny','Celica','Charlotte','Chaugnar','Cresht',"D'Arcy",'Dextra',
  'Diaochan','Dirak','Dolia','Dyadia','Edras',"Eland'orr",'Elsu','Enzo','Erin','Errol',
  'Fennik','Florentino','Flowborn','Flowborn Mid','Gildur','Goverra','Grakk','Hayate',
  'Heino','Helen','Iggy','Ignis','Ilumia','Ishar','Jinnar','Kahlii','Kaine','Keera',
  "Kil'Groth",'Kriknak','Krixi','Krizzix','Lauriel','Laville','Liliana','Lindis','Lorion',
  'Lu Bu','Lumburr','Maloch','Marja','Max','Mganga','Mina','Ming','Mortos','Moren',
  'Murad','Nakroth','Natalya','Omega','Omen','Ormarr','Paine','Preyta','Qi','Quillen',
  'Raz','Riktor','Rouie','Rourke','Roxie','Ryoma','Sephera','Sinestrea','Skud','Slimz',
  'Stuart','Superman','Taara','Tachi','Tamyn','TeeMee','Teeri',"Tel'Annas",'Thane',
  'The Flash','Toro','Tulen','Valhein','Veera','Veres','Violet','Volkath','Wiro','Wisp',
  'Wonder Woman','Wukong','Xeniel',"Y'bneth",'Yan','Yena','Yorn','Yue','Zanis','Zata',
  'Zephys','Zill','Zip','Zuka',
  // Additional heroes
  'Arduin','Ryoma','Charlotte','Tamyn','Edras','Mortos','Dolia','Dyadia','Kaine','Bolt Baron',
  'Goverra','Heino','Bonnie','Mganga','Flowborn (Mage)','Flowborn (Marksman)','Celica',
  'Erin','Dextra','Ata',
];

// Deduplicate
const HEROES = [...new Set(ALL_HEROES)];

function getUrl(name) {
  if (HERO_IMG_OVERRIDE[name]) return HERO_IMG_OVERRIDE[name];
  if (name === 'The Flash') return null; // skip, already have it
  const filename = HERO_IMG_MAP[name] ?? name;
  return `${IMG_BASE}/${filename}.jpg`;
}

function getSavePath(name) {
  // Sanitize filename
  const safe = name.replace(/[^a-zA-Z0-9\-_\.() ]/g, '_').replace(/ /g, '_');
  const ext = HERO_IMG_OVERRIDE[name]?.endsWith('.png') ? '.png' : '.jpg';
  return path.join(OUTPUT_DIR, safe + ext);
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) {
      console.log(`  ⏭️  skip (exists): ${path.basename(dest)}`);
      return resolve();
    }
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        console.log(`  ❌ ${res.statusCode}: ${path.basename(dest)}`);
        return resolve();
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.log(`  ❌ error: ${path.basename(dest)} - ${err.message}`);
      resolve();
    });
  });
}

async function main() {
  console.log(`\n🚀 Downloading ${HEROES.length} hero images to public/heroes/\n`);
  for (const name of HEROES) {
    const url = getUrl(name);
    if (!url) { console.log(`  ⏭️  skip: ${name} (local)`); continue; }
    const dest = getSavePath(name);
    process.stdout.write(`  ⬇️  ${name}... `);
    await download(url, dest);
    if (fs.existsSync(dest) && !fs.existsSync(dest + '.failed')) {
      console.log(`✅`);
    }
  }
  console.log('\n✅ Done! All images saved to public/heroes/');
}

main().catch(console.error);
