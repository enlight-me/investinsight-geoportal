# InvestInsight Geoportal
Web based Geoportal for mapping investment oppurtunities in Algeria.

Project Setup
============

Clone this GitHub repository. 
``` 
git clone https://github.com/enlight-me/investinsight-geoportal.git
```

Install dependiencies and compile React.js web application.

```
cd investinsight-geoportal
npm install
npm run gulp
npm start
```
The Geoportal is available at ```http://localhost:3001```

To stop the developement server :
```
npm stop
```

To deploy to github pages :
```
export NODE_OPTIONS=--max_old_space_size=8192
npm run build
npm run deploy
```

Terria Map
==========

This is a complete website built using the TerriaJS library. See the [TerriaJS README](https://github.com/TerriaJS/TerriaJS) for information about TerriaJS, and getting started using this repository.
