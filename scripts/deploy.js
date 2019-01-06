const { execSync } = require('child_process');

const reset = '\x1b[0m';
const cyan = '\x1b[36m';
const green = '\x1b[32m';

const render = progress => {
  console.clear();
  if (progress >= 0) console.log(`${cyan}Deployment process started!${reset}`);

  console.log(`[${progress > 0 ? 'X' : ' '}] Removing old artifacts...`);
  console.log(`[${progress > 1 ? 'X' : ' '}] Building new artifacts...`);
  console.log(`[${progress > 2 ? 'X' : ' '}] Pushing to remote...`);
  console.log(`[${progress > 3 ? 'X' : ' '}] Removing obsolete artifacts...`);
  console.log(`[${progress === 4 ? 'X' : ' '}] ${green}Success!${reset}`);
};

const deploy = async () => {
  const workingDir = { cwd: 'dist/' };

  render(0);
  execSync('rm -rf dist/');

  render(1);
  execSync('yarn build');

  render(2);
  execSync('git init', workingDir);
  execSync('git add -A', workingDir);
  execSync('git commit -m "Manual deploy"', workingDir);
  execSync(
    'git remote add origin git@github.com:WaterCodeMelons/gamification-front.git',
    workingDir,
  );
  execSync('git push -f origin master:gh-pages', {
    stdio: 'ignore',
    ...workingDir,
  });

  render(3);
  execSync('rm -rf dist/');

  render(4);
};

deploy()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
