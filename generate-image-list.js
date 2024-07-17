const fs = require('fs');
const path = require('path');

const imageDir = 'dist/assets/photos/2024/san-francisco';
const outputFile = 'images.json';

function getImageFiles(dir) {
  try {
    return fs.readdirSync(dir)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
      })
      .map(file => ({
        src: path.join(imageDir, file).replace(/\\/g, '/'),
        alt: path.basename(file, path.extname(file))
      }));
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return [];
  }
}

try {
  const images = getImageFiles(imageDir);
  fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
  console.log(`Generated ${outputFile} with ${images.length} images.`);
} catch (error) {
  console.error(`Error generating image list: ${error.message}`);
  process.exit(1);
}
