const fs = require('fs');
const path = require('path');

// Create a mapping of PNG filenames to WebP imports
const createImageMapping = () => {
  const webpDir = './src/assets/webp/';
  const assetsDir = './src/assets/';
  
  const mapping = {};
  
  // Get all PNG files
  const pngFiles = fs.readdirSync(assetsDir).filter(file => file.endsWith('.png'));
  
  pngFiles.forEach(pngFile => {
    const filename = pngFile.replace('.png', '');
    const webpFile = `${filename}.webp`;
    const webpPath = path.join(webpDir, webpFile);
    
    if (fs.existsSync(webpPath)) {
      // Map the PNG filename to the WebP import path
      mapping[filename] = `../assets/webp/${webpFile}`;
    }
  });
  
  return mapping;
};

// Function to update figma imports in a file
const updateFileImports = (filePath, imageMapping) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Find all figma:asset imports
  const figmaImportRegex = /import\s+(\w+)\s+from\s+"figma:asset\/([^"]+)\.png";/g;
  
  content = content.replace(figmaImportRegex, (match, varName, assetId) => {
    if (imageMapping[assetId]) {
      hasChanges = true;
      console.log(`  ✅ Updated ${varName}: ${assetId}.png → WebP`);
      return `import ${varName} from "${imageMapping[assetId]}";`;
    }
    return match; // Keep original if no WebP version found
  });
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
};

// Function to recursively find and update files
const updateAllFiles = (dir, imageMapping) => {
  const files = fs.readdirSync(dir);
  let totalUpdated = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      totalUpdated += updateAllFiles(filePath, imageMapping);
    } else if ((file.endsWith('.tsx') || file.endsWith('.ts')) && !file.endsWith('.d.ts')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('figma:asset') && content.includes('.png')) {
        console.log(`📝 Processing: ${filePath}`);
        if (updateFileImports(filePath, imageMapping)) {
          totalUpdated++;
        }
      }
    }
  });
  
  return totalUpdated;
};

// Main execution
console.log('🔄 Updating image imports to use WebP...');

const imageMapping = createImageMapping();
console.log(`📊 Found ${Object.keys(imageMapping).length} WebP mappings`);

if (Object.keys(imageMapping).length === 0) {
  console.log('❌ No WebP images found. Make sure to run the conversion script first.');
  process.exit(1);
}

const updatedFiles = updateAllFiles('./src', imageMapping);

console.log('');
console.log('🎉 Import update complete!');
console.log(`📈 Updated ${updatedFiles} files`);
console.log('');
console.log('💡 Next steps:');
console.log('   1. Test the application');
console.log('   2. Remove old PNG files if everything works');
console.log('   3. Deploy optimized version');

module.exports = { updateAllFiles, createImageMapping };