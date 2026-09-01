const fs = require('fs');
const files = [
  'src/pages/Tierlist.tsx',
  'src/pages/PatchNotes.tsx',
  'src/pages/Landing.tsx',
  'src/pages/HeroCatalog.tsx',
  'src/pages/Fanart.tsx',
  'src/pages/Esports.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<span className="text-\\[#666\\]">(MAKER|NOTES|TOOLS|GALLERY|GAME MODES|HEROES|NEWS)<\/span>/g, '<span className="text-[#dc2626]">$1</span>');
  fs.writeFileSync(file, content);
});
console.log('Replaced successfully.');
