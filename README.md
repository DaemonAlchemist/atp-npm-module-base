# Purpose
This module provides a quick-start boilerplate for creating an NPM module.

# Setup
```
> npm clone https://github.com/DaemonAlchemist/atp-npm-module.base .
> npm run init
```

# Usage
Building:
```> npm run compile```
Testing:
```> npm test```
Quick testing (no code changes, just test changes):
```> npm run test-quick```
Clean testing (npm install before testing and remove node_modules folder after testing):
```> npm run test-clean```

Push all code changes, create new tag, and publish new NPM version (with and without cleaning):
```
> npm run [major|minor|patch]
> npm run [major|minor|patch]-clean
```

# Features
- Transpiling with Babel
- Testing with Mocha/Chai
- Prebuilt scripts for compiling, testing, tagging, and publishing
