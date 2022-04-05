# Mini CSS Extract Plugin with MF Bug 

Try to reproduce the Bug with MF and Mini CSS Extract Plugin

## 1. Steps to reproduce

```bash
npx midgard-yarn
cd pacakges/shared-app
yarn build
cd ../main-app
yarn build
```

It will enter an infinite loop