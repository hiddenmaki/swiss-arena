import fs from 'fs';
import path from 'path';

const pagesDir = path.join('d:', 'swiss-arena', 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove <Navbar />
  content = content.replace(/<Navbar \/>\n?\s*/g, '');
  
  // Remove Navbar function block. It's roughly:
  // function Navbar() { ... }
  // We can use a regex to match from "function Navbar()" until the matching closing brace.
  // A simpler way: split by "function Navbar()" and then find the end.
  const navbarStart = content.indexOf('function Navbar() {');
  if (navbarStart !== -1) {
    let braceCount = 0;
    let i = navbarStart;
    let started = false;
    while (i < content.length) {
      if (content[i] === '{') {
        braceCount++;
        started = true;
      } else if (content[i] === '}') {
        braceCount--;
      }
      i++;
      if (started && braceCount === 0) {
        break;
      }
    }
    
    const before = content.substring(0, navbarStart);
    const after = content.substring(i);
    content = before + after;
  }
  
  // Also remove some unused imports if possible, but let's stick to Navbar
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned ${file}`);
}
