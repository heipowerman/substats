# About the framework

## 主要构成 Main Struction

系统主要分成三大部分：
The system including:

- 定时任务服务
- 后端API服务
- 前端UI渲染

- Scheduled task service
- Back-end API service
- Front-end UI rendering

![系统架构图](./img/syste-framework.png)

定时任务服务负责从链上获取数据，然后加工处理并保存到数据库中，后端API服务负责把数据聚合后发送给前端进行展示。为什么要把数据同步到数据库？这是由于链提供的是最基础的API，无法完全满足对数据查询业务的需要，比如：想要查询一个Account所有的历史交易记录，或者通过交易哈希查询一笔交易的状态，就无法通过链的API直接查询得到，如果把区块数据全部同步到本地数据库，就可以通过聚合完成这些查询。
The scheduled task service can retrieve data from the chain，then processed and stored data in the database.The back-end API service collects data and sends it to the front end.Because the blockchain provides basic API, it cannot fully meet the extension function, so the data needs to be synchronized to the database.For example, if you want to query all the historical transaction records of an Account, or query the status of a transaction through transaction hash, the API of the chain cannot be queried directly.If all the block data is synchronized to the local database, the query can be completed through aggregation.

## 介绍 Introduction

### 1. 定时任务服务 Scheduled task service

定时任务是基于Node.js开发的针对调度程序，主要功能为实时同步链上数据到数据库，使用 [polkadot.js](https://polkadot.js.org/docs/) 连接链RPC接口，通过对数据读取、加工整理后存入数据库。
Scheduled task service is based on Node.Js for the scheduler. The main function is real-time synchronization chain data to the database, using [polkadot. Js] (https://polkadot.js.org/docs/) link RPC interface, through reading and processing the data, it is stored in the database.

包括以下定时服务
- 区块同步服务
- 交易记录同步服务
- Events同步服务
- 矿工列表同步服务
- Account列表同步服务
- 交易量统计服务

Including:
- Block synchronization service
- Transaction record synchronization service
- Events synchronization service
- Miner list synchronization service
- Account list synchronization service
- Transaction volume statistics service


API服务程序位于 /app 目录下
The API service program is located in /app directory

技术栈如下：
Technology stack：

- Node.js
- Polkadot.js
- Mysql
- ORM

### 后端API服务 Back-end API service

API服务是基于Node.js开发的web服务端系统，主要功能是为前端提供HTTP和Websocket接口，用于数据查询、数据处理、区块更新等。包括：
API service is a web server system developed based on Node.js.The main function is to provide HTTP and Websocket interface for the front end for data query, data processing, block update, including:
- 区块链桥接器
- 数据库连接器
- HTTP web服务
- Websocket服务

- Blockchain bridge
- Database connector
- HTTP web service
- Websocket service

API服务程序位于根目录下
The API service program is located in the root directory

技术栈如下：
Technology stack：

- Node.js
- Server:Express websocket
- Database:Mysql
- Polkadot
- Jest

### 前端UI系统 Front-end UI rendering

前端UI系统主要功能是读取后台API服务的数据并进行渲染与展示，使用Ract.js前端框架和Antd UI组件库
The main function of the front-end UI system is to read the data of the background API service, render and display.It uses the Ract.js front-end framework and the Antd UI component library

API服务程序位于 /ui 目录下
The API service program is located in /ui directory

技术栈如下：
Technology stack：

- React
- Ant-design
- Ant-design/charts
- React-router-dom
- Styled-components
- Reduxjs/toolkit
- craco




