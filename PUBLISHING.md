# Publishing to GitHub Packages

To publish this module to GitHub Packages, follow these steps:

## 1. Set up authentication

1. Create a personal access token on GitHub:
   - Go to Settings > Developer settings > Personal access tokens > Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name like "npm-publish"
   - Select the `write:packages` scope
   - Generate the token and copy it

2. Set the token as an environment variable:
   ```bash
   export GITHUB_TOKEN=your_github_token_here
   ```

## 2. Configure the repository

In your module directory, run:
```bash
git remote add origin https://github.com/krishna9358/my-test-module.git
git branch -M master
git push -u origin master
```

## 3. Publish the package

Run:
```bash
npm publish
```

Your package will now be available at `https://npm.pkg.github.com/@krishna9358/my-test-module`

## 4. Using the package in other projects

To use this package in other projects:

1. Set the GITHUB_TOKEN environment variable:
   ```bash
   export GITHUB_TOKEN=your_github_token_here
   ```

2. Create a `.npmrc` file in the root of your project with:
   ```
   @krishna9358:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

3. Install the package:
   ```bash
   npm install @krishna9358/my-test-module
   ```

4. Use it in your code:
   ```javascript
   const mathUtils = require('@krishna9358/my-test-module');
   
   console.log(mathUtils.add(2, 3)); // 5
   ```