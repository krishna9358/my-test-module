# Publishing to GitHub Packages

To publish this module to GitHub Packages, follow these steps:

## 1. Update package.json with your GitHub username

Replace `your-github-username` in the package name with your actual GitHub username:
```json
{
  "name": "@your-github-username/my-test-module"
}
```

## 2. Create a GitHub repository

1. Go to https://github.com/new
2. Create a new repository with the same name as your package (e.g., `my-test-module`)
3. Don't initialize with a README, .gitignore, or license as we'll push the existing repository

## 3. Set up authentication

1. Create a personal access token on GitHub:
   - Go to Settings > Developer settings > Personal access tokens > Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name like "npm-publish"
   - Select the `write:packages` scope
   - Generate the token and copy it

2. Create a `.npmrc` file in your home directory (`~/.npmrc`) with:
   ```
   //npm.pkg.github.com/:_authToken=YOUR_COPIED_TOKEN
   ```

## 4. Configure the repository

In your module directory, run:
```bash
git remote add origin https://github.com/your-github-username/my-test-module.git
git branch -M main
git push -u origin main
```

## 5. Publish the package

Run:
```bash
npm publish
```

Your package will now be available at `https://npm.pkg.github.com/@your-github-username/my-test-module`

## 6. Using the package in other projects

To use this package in other projects:

1. Create a `.npmrc` file in the root of your project with:
   ```
   @your-github-username:registry=https://npm.pkg.github.com
   ```

2. Install the package:
   ```bash
   npm install @your-github-username/my-test-module
   ```

3. Use it in your code:
   ```javascript
   const mathUtils = require('@your-github-username/my-test-module');
   
   console.log(mathUtils.add(2, 3)); // 5
   ```