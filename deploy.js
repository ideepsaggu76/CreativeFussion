// Simple script to deploy to GitHub Pages without using Git CLI
import ghpages from 'gh-pages';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GitHub repository URL
const repoUrl = 'https://github.com/ideepsaggu76/CreativeFussion.git';

console.log('Starting deployment to GitHub Pages...');

ghpages.publish(
  join(__dirname, 'dist'),
  {
    branch: 'gh-pages',
    repo: repoUrl,
    message: 'Auto-generated commit [ci skip]',
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