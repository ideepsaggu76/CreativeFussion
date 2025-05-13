// Simple script to deploy to GitHub Pages using CommonJS
const ghpages = require('gh-pages');
const path = require('path');

// GitHub repository URL
const repoUrl = 'https://github.com/ideepsaggu76/CreativeFussion.git';

console.log('Starting deployment to GitHub Pages...');

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: repoUrl,
    message: 'Auto-generated deployment commit',
    user: {
      name: 'ideepsaggu76',
      email: 'ideepsaggu@icloud.com'
    }
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      return;
    }
    console.log('Successfully deployed to GitHub Pages!');
    console.log('Your site will be available at: https://ideepsaggu76.github.io/CreativeFussion/');
  }
); 