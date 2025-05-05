// Simple script to check GitHub Pages configuration
const fs = require('fs');
const path = require('path');

console.log('GitHub Pages Deployment Check');
console.log('============================');

// Check for essential files
const files = [
  { path: path.join(__dirname, '../build/index.html'), name: 'Build index.html' },
  { path: path.join(__dirname, '../build/.nojekyll'), name: '.nojekyll file' },
  { path: path.join(__dirname, '../build/CNAME'), name: 'CNAME file' },
  { path: path.join(__dirname, '../CNAME'), name: 'Root CNAME file' }
];

files.forEach(file => {
  const exists = fs.existsSync(file.path);
  console.log(`${file.name}: ${exists ? '✅ Found' : '❌ Missing'}`);
  
  if (exists && file.path.includes('CNAME')) {
    const content = fs.readFileSync(file.path, 'utf8').trim();
    console.log(`  - Content: "${content}"`);
  }
});

// Check svelte.config.js
const svelteConfigPath = path.join(__dirname, '../svelte.config.js');
if (fs.existsSync(svelteConfigPath)) {
  console.log('\nSvelte Config: ✅ Found');
  const content = fs.readFileSync(svelteConfigPath, 'utf8');
  
  // Check for key configurations
  console.log('  - fallback option:', content.includes('fallback: \'index.html\'') ? '✅ Found' : '❌ Missing');
  console.log('  - base path:', content.includes('base: \'\'') ? '✅ Empty (good for custom domain)' : '❌ Not empty or missing');
}

console.log('\nRecommendations:');
console.log('1. Ensure GitHub Pages is configured to deploy from the correct branch');
console.log('2. Verify DNS settings for your custom domain (harrietduo.fr)');
console.log('3. Check GitHub repository settings to ensure Pages is enabled');
console.log('4. Try accessing the site with and without www prefix');
