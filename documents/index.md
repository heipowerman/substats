| 0a. | License                 | Apache 2.0 / GPLv3 / MIT / Unlicense                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0b. | Documentation           | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how to use the product, display and explain the function of each component.                                                                                                                                                   | [README.md](../README.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0c. | Testing Guide           | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided.                                                                                                                                                                                                                       | [testing-guide.md](testing-guide.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1a. | Develop the webservice  | We will use the express.js framework to build the basic back-end services, and install the database link toolkit to achieve stable network communication, database connection and other functions to prepare for upper-layer applications.                                                                                     | [about-framework.md](about-framework.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1b. | Develop the polkadot.js | We will use the polkadot.js API to interact with the PRC nodes of the blockchain network developed based on Substrate. And implement interfaces including block query, transaction query, Account query, Miner query, and new block subscription.                                                                              | Connect to the RPC node<br /> [https://github.com/CESSProject/substats/blob/master/bll/init-polkadot-api.js#L22](https://github.com/CESSProject/substats/blob/master/bll/init-polkadot-api.js#L22)<br /><br />Get block info and transfer<br />[https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L44](https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L44)<br /><br />Get block events by block hash<br />[https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L52](https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L52)<br /><br />Account query<br />[https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38](https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38)<br /><br />Miner query<br />[https://github.com/CESSProject/substats/blob/master/app/timer/get-miners.js#L32](https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38)<br /><br />Subscribe new block header<br />[https://github.com/CESSProject/substats/blob/master/bll/sub.js#L19](https://github.com/CESSProject/substats/blob/master/bll/sub.js#L19) |
| 1c. | Develop the API         | We will define the back-end API specification for the front-end service to call, including the data structure, request parameters, request event processing function, return data format, etc. At the same time, we will implement the construction of the interface layer to meet the custom development needs of developers. | [api-docs.md](api-docs.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1d. | Create the database     | We will build MySQL database service, create Table structure, complete index creation, data structure constraints, and implement MYSQL connection driver through Node.js.                                                                                                                                                      | [about-database.md](about-database.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |


Connect to the RPC node<br />
[https://github.com/CESSProject/substats/blob/master/bll/init-polkadot-api.js#L22](https://github.com/CESSProject/substats/blob/master/bll/init-polkadot-api.js#L22)<br />

Get block info and transfer<br />
[https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L44](https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L44)<br />

Get block events by block hash<br />
[https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L52](https://github.com/CESSProject/substats/blob/master/app/sync-block/index.js#L52)<br />

Account query<br />
[https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38](https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38)<br />

Miner query<br />
[https://github.com/CESSProject/substats/blob/master/app/timer/get-miners.js#L32](https://github.com/CESSProject/substats/blob/master/app/timer/get-accounts.js#L38)<br />

Subscribe new block header<br />
[https://github.com/CESSProject/substats/blob/master/bll/sub.js#L19](https://github.com/CESSProject/substats/blob/master/bll/sub.js#L19)<br />








