# Test guide

## Tool 
Jest 由 Facebook 出品，是目前主流的测试框架
本项目也使用Jest框架进行单元测试。
Jest is Created by Facebook,  It is currently the dominant testing framework
This project also uses the Jest framework for unit testing.

## Config

You can edit the config file [/jest.config.js](/jest.config.js).

```javascript
module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [ "controls/**/*", "util/*", "bll/*"],
  testTimeout: 90000,
};

```

## How to start：

### 1. Install package
```javascript
npm i
```
### 2. Run test

```javascript
npm run test
```
