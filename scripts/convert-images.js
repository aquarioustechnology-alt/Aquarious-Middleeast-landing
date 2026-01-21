/**
 * Image Optimization Script
 * Converts all PNG and JPG images to WebP format with high quality
 * Also updates all code references from .png/.jpg to .webp
 * 
 * Usage:
 * 1. Install sharp: npm install sharp --save-dev
 * 2. Run: node scripts/convert-images.js
 */

const fs = require('fs');
const path = require('path');

// Files and directories to update references in
const componentsDir = path.join(__dirname, '..', 'components');
const appDir = path.join(__dirname, '..', 'app');

function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

function updateReferences(convertedFiles) {
  const codeFiles = [...getAllFiles(componentsDir), ...getAllFiles(appDir)];
  let totalUpdates = 0;
  
  console.log(`\nUpdating references in ${codeFiles.length} code files...`);
  
  for (const codeFile of codeFiles) {
    let content = fs.readFileSync(codeFile, 'utf8');
    let originalContent = content;
    let updates = 0;
    
    for (const { original, webp } of convertedFiles) {
      // Create regex to match the file reference
      const originalFilename = path.basename(original);
      const webpFilename = path.basename(webp);
      
      // Match patterns like "/images/filename.png" or "/images/filename.jpg"
      const regex = new RegExp(originalFilename.replace('.', '\\.'), 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, webpFilename);
        updates += matches.length;
      }
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(codeFile, content, 'utf8');
      console.log(`  Updated ${path.relative(path.join(__dirname, '..'), codeFile)} (${updates} references)`);
      totalUpdates += updates;
    }
  }
  
  return totalUpdates;
}

async function convertImages() {
  // Dynamically import sharp (ES module)
  const sharp = (await import('sharp')).default;
  
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  const files = fs.readdirSync(imagesDir);
  
  const imageExtensions = ['.png', '.jpg', '.jpeg'];
  const imagesToConvert = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  });
  
  console.log(`Found ${imagesToConvert.length} images to convert...\n`);
  
  let converted = 0;
  let skipped = 0;
  let totalSaved = 0;
  const convertedFiles = [];
  
  for (const file of imagesToConvert) {
    const inputPath = path.join(imagesDir, file);
    const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(imagesDir, outputName);
    
    // Skip if WebP already exists (and we're not the hero-right-side.webp that already exists)
    if (fs.existsSync(outputPath) && file !== 'hero-right-side.webp') {
      console.log(`⏭️  Skipping ${file} (WebP already exists)`);
      skipped++;
      continue;
    }
    
    try {
      const inputStats = fs.statSync(inputPath);
      const inputSize = inputStats.size;
      
      // Convert to WebP with 90% quality (high quality, good compression)
      await sharp(inputPath)
        .webp({ quality: 90 })
        .toFile(outputPath);
      
      const outputStats = fs.statSync(outputPath);
      const outputSize = outputStats.size;
      const saved = inputSize - outputSize;
      const savedPercent = ((saved / inputSize) * 100).toFixed(1);
      
      totalSaved += saved;
      converted++;
      convertedFiles.push({ original: inputPath, webp: outputPath });
      
      console.log(`✅ ${file} → ${outputName}`);
      console.log(`   ${(inputSize / 1024).toFixed(1)}KB → ${(outputSize / 1024).toFixed(1)}KB (saved ${savedPercent}%)\n`);
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error.message);
    }
  }
  
  console.log('\n--- Conversion Summary ---');
  console.log(`Converted: ${converted} images`);
  console.log(`Skipped: ${skipped} images`);
  console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  
  // Update code references
  if (convertedFiles.length > 0) {
    const totalUpdates = updateReferences(convertedFiles);
    console.log(`\n--- Code Updates ---`);
    console.log(`Total references updated: ${totalUpdates}`);
  }
  
  console.log('\n✨ Done! Remember to:');
  console.log('1. Test the site to ensure all images load correctly');
  console.log('2. Optionally delete the original PNG/JPG files to save space');
  console.log('3. Rebuild and deploy');
}

convertImages().catch(console.error);
