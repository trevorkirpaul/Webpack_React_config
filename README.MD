# React Boilerplate using Webpack

I'm creating this as a part of me 'deep-dive' into Webpack.

I've always used CRA for my personal React projects even though I learned how to use Webpack early on. This repo is just a reference to my learning process so I have a base to look at for future projects. It's not exactly a boilerplate in the normal sense.

It definitely won't be on the level of CRA but I did feel the need to get more immersed with Webpack. It's pretty awesome and will definitely come in handy with non React projects.

# Dev/Workspace Setup

This project was created with eslint and prettier formatting on save hooks. If you would like to have the same eslint setup then add `.eslint.rc` to your project root directory and use these workspace settings in vscode.

```javascript
// .eslint.rc
{
  "extends": "fbjs"
}
```

```javascript
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "javascript.format.enable": false,
  "prettier.eslintIntegration": true
}
```

You can find the list of packages I used [here](https://www.npmjs.com/package/eslint-config-fbjs).

```bash
yarn add --dev \
  eslint-config-fbjs \
  eslint-plugin-babel \
  eslint-plugin-flowtype \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-relay \
  eslint \
  babel-eslint
```
