/*
 * @Description:
 * @Autor: fage
 * @Date: 2022-07-11 15:11:36
 * @LastEditors: lanmeng656 cbf0311@sina.com
 * @LastEditTime: 2022-10-11 17:50:41
 */
"use strict";
const path = require("path");
const mysql = require("./mysql-config");
module.exports = {
  sitename: "CESS Brower",
  wsnode: {
    nodeURL: "wss://polkadot.api.onfinality.io/public-ws", //"ws://localhost:9944"
    keyringOption: { type: "sr25519", ss58Format: 42 },
  },
  host: "substats.cess.cloud",
  port: {
    http: 80,
  },
  publicApi: {
    secret: "MA14BAHJ2JEASL",
  },
  serverIP: "140.143.93.47",
  mysql: mysql("./private/substats-mysql-config.json"),
  cookie: {
    enable: false,
    secret: "3**&2fMNU",
    expires_day: 2,
  },
};
