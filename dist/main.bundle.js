/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.ts":
/*!*********************!*\
  !*** ./src/ball.ts ***!
  \*********************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.ts\");\n\r\nvar Ball = /** @class */ (function () {\r\n    function Ball(x, y, color) {\r\n        this.tabX = x;\r\n        this.tabY = y;\r\n        this.color = color;\r\n        this.selected = false;\r\n    }\r\n    Ball.prototype.addToStack = function () {\r\n        var ball = document.createElement(\"div\");\r\n        ball.className = \"ball ballStack\";\r\n        ball.style.backgroundColor = _init__WEBPACK_IMPORTED_MODULE_0__[\"colorValues\"][this.color];\r\n        _init__WEBPACK_IMPORTED_MODULE_0__[\"nextBallsPanel\"].appendChild(ball);\r\n    };\r\n    Ball.prototype.generateBall = function (boardCell) {\r\n        var ball = document.createElement(\"div\");\r\n        ball.className = \"ball ballUnselect\";\r\n        ball.style.backgroundColor = _init__WEBPACK_IMPORTED_MODULE_0__[\"colorValues\"][this.color];\r\n        boardCell.appendChild(ball);\r\n    };\r\n    return Ball;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/ball.ts?");

/***/ }),

/***/ "./src/boardCell.ts":
/*!**************************!*\
  !*** ./src/boardCell.ts ***!
  \**************************/
/*! exports provided: BoardCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoardCell\", function() { return BoardCell; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.ts\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ \"./src/events.ts\");\n\r\n\r\nvar BoardCell = /** @class */ (function () {\r\n    function BoardCell(x, y) {\r\n        this.tabX = x;\r\n        this.tabY = y;\r\n    }\r\n    BoardCell.prototype.generateCell = function (boardRow) {\r\n        this.cell = document.createElement(\"div\");\r\n        this.cell.className = \"boardCell\";\r\n        Object(_events__WEBPACK_IMPORTED_MODULE_1__[\"addBoardEvents\"])(this.cell);\r\n        boardRow.appendChild(this.cell);\r\n    };\r\n    BoardCell.prototype.removeBall = function () {\r\n        if (this.cell.firstChild) {\r\n            this.cell.removeChild(this.cell.children[0]);\r\n            _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][this.tabY][this.tabX] = null;\r\n        }\r\n    };\r\n    return BoardCell;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/boardCell.ts?");

/***/ }),

/***/ "./src/events.ts":
/*!***********************!*\
  !*** ./src/events.ts ***!
  \***********************/
/*! exports provided: addBoardEvents, checkWin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBoardEvents\", function() { return addBoardEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkWin\", function() { return checkWin; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.ts\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/ball.ts\");\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ \"./src/init.ts\");\n\r\n\r\n\r\nvar selectX = null;\r\nvar selectY = null;\r\nvar ballSelected = false;\r\nvar targetFounded = false;\r\nvar scorePanelValue = 0;\r\nfunction addBoardEvents(boardCell) {\r\n    boardCell.addEventListener(\"click\", function (e) {\r\n        var clickX = null;\r\n        var clickY = null;\r\n        for (var y = 0; y < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; y++) {\r\n            for (var x = 0; x < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; x++) {\r\n                if (_main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][y][x] == e.currentTarget) {\r\n                    clickX = x;\r\n                    clickY = y;\r\n                    break;\r\n                }\r\n            }\r\n            if (clickX != null && clickY != null)\r\n                break;\r\n        }\r\n        if (_main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][clickY][clickX] != null) {\r\n            _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].forEach(function (row) {\r\n                row.forEach(function (cell) {\r\n                    if (cell.hasChildNodes()) {\r\n                        cell.children[0].classList.add(\"ballUnselect\");\r\n                        cell.children[0].classList.remove(\"ballSelect\");\r\n                    }\r\n                });\r\n            });\r\n            if (selectX == clickX && selectY == clickY) {\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][selectY][selectX].selected = false;\r\n                ballSelected = false;\r\n                selectX = null;\r\n                selectY = null;\r\n            }\r\n            else {\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][clickY][clickX].children[0].classList.remove(\"ballUnselect\");\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][clickY][clickX].children[0].classList.add(\"ballSelect\");\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][clickY][clickX].selected = true;\r\n                ballSelected = true;\r\n                selectX = clickX;\r\n                selectY = clickY;\r\n            }\r\n        }\r\n        else {\r\n            if (ballSelected && targetFounded) {\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].forEach(function (row) {\r\n                    row.forEach(function (cell) {\r\n                        if (cell.hasChildNodes()) {\r\n                            cell.children[0].classList.add(\"ballUnselect\");\r\n                            cell.children[0].classList.remove(\"ballSelect\");\r\n                        }\r\n                    });\r\n                });\r\n                for (var y = 0; y < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; y++) {\r\n                    for (var x = 0; x < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; x++) {\r\n                        _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][y][x].classList.remove(\"boardPath\");\r\n                    }\r\n                }\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][selectY][selectX].selected = false;\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][clickY][clickX] = _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][selectY][selectX];\r\n                var ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"Ball\"](clickX, clickY, _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][selectY][selectX].color);\r\n                ball.generateBall(_main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][clickY][clickX]);\r\n                var selectColor = _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][selectY][selectX].color;\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"boardCells\"][selectY][selectX].removeBall();\r\n                ballSelected = false;\r\n                if (!checkWin(clickX, clickY, selectColor))\r\n                    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"generateBalls\"])(3);\r\n                selectX = null;\r\n                selectY = null;\r\n            }\r\n        }\r\n    });\r\n    boardCell.addEventListener(\"mouseenter\", function (e) {\r\n        for (var y = 0; y < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; y++) {\r\n            for (var x = 0; x < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; x++) {\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][y][x].classList.remove(\"boardPath\");\r\n            }\r\n        }\r\n        var hoverDiv = null;\r\n        for (var y = 0; y < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; y++) {\r\n            for (var x = 0; x < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; x++) {\r\n                if (_main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][y][x] == e.currentTarget) {\r\n                    hoverDiv = _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][y][x];\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        if (ballSelected && !hoverDiv.hasChildNodes()) {\r\n            var hoverX = null;\r\n            var hoverY = null;\r\n            for (var y = 0; y < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; y++) {\r\n                for (var x = 0; x < _main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"].length; x++) {\r\n                    if (_main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][y][x] == e.currentTarget) {\r\n                        hoverX = x;\r\n                        hoverY = y;\r\n                        break;\r\n                    }\r\n                }\r\n                if (hoverX != null && hoverY != null)\r\n                    break;\r\n            }\r\n            var mapTab = [];\r\n            var mapHTMLTab = [];\r\n            for (var y = 0; y < _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"].length; y++) {\r\n                mapTab.push([]);\r\n                mapHTMLTab.push([]);\r\n                for (var x = 0; x < _main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"].length; x++) {\r\n                    if (y == selectY && x == selectX) {\r\n                        mapTab[y][x] = \"S\";\r\n                    }\r\n                    else if (y == hoverY && x == hoverX) {\r\n                        mapTab[y][x] = \"M\";\r\n                    }\r\n                    else if (_main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][y][x] != null) {\r\n                        mapTab[y][x] = \"X\";\r\n                    }\r\n                    else {\r\n                        mapTab[y][x] = \"0\";\r\n                    }\r\n                    mapHTMLTab[y].push([]);\r\n                }\r\n            }\r\n            mapHTMLTab[selectY][selectX].push(_main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][selectY][selectX]);\r\n            var mapX = [selectX];\r\n            var mapY = [selectY];\r\n            var nextMapX = [];\r\n            var nextMapY = [];\r\n            var counter = 1;\r\n            targetFounded = false;\r\n            while (!targetFounded) {\r\n                for (var i = 0; i < mapX.length; i++) {\r\n                    if (mapY[i] - 1 >= 0) {\r\n                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i], mapY[i] - 1)) {\r\n                            break;\r\n                        }\r\n                    }\r\n                    if (mapX[i] + 1 < _init__WEBPACK_IMPORTED_MODULE_2__[\"boardSize\"]) {\r\n                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i] + 1, mapY[i])) {\r\n                            break;\r\n                        }\r\n                    }\r\n                    if (mapY[i] + 1 < _init__WEBPACK_IMPORTED_MODULE_2__[\"boardSize\"]) {\r\n                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i], mapY[i] + 1)) {\r\n                            break;\r\n                        }\r\n                    }\r\n                    if (mapX[i] - 1 >= 0) {\r\n                        if (checkPath(mapHTMLTab, mapTab, counter, nextMapX, nextMapY, mapX[i], mapY[i], mapX[i] - 1, mapY[i])) {\r\n                            break;\r\n                        }\r\n                    }\r\n                }\r\n                if (nextMapX.length == 0) {\r\n                    break;\r\n                }\r\n                mapX = nextMapX;\r\n                mapY = nextMapY;\r\n                nextMapX = [];\r\n                nextMapY = [];\r\n                counter++;\r\n            }\r\n            mapHTMLTab[hoverY][hoverX].forEach(function (element) {\r\n                element.classList.add(\"boardPath\");\r\n            });\r\n        }\r\n    });\r\n}\r\nfunction checkPath(mapHTMLTab, mapTab, counter, mapX, mapY, startX, startY, checkX, checkY) {\r\n    if (mapTab[checkY][checkX] == \"0\") {\r\n        mapTab[checkY][checkX] = counter.toString();\r\n        for (var i = 0; i < mapHTMLTab[startY][startX].length; i++) {\r\n            mapHTMLTab[checkY][checkX].push(mapHTMLTab[startY][startX][i]);\r\n        }\r\n        mapHTMLTab[checkY][checkX].push(_main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][checkY][checkX]);\r\n        mapX.push(checkX);\r\n        mapY.push(checkY);\r\n    }\r\n    else if (mapTab[checkY][checkX] == \"M\") {\r\n        for (var i = 0; i < mapHTMLTab[startY][startX].length; i++) {\r\n            mapHTMLTab[checkY][checkX].push(mapHTMLTab[startY][startX][i]);\r\n        }\r\n        mapHTMLTab[checkY][checkX].push(_main__WEBPACK_IMPORTED_MODULE_0__[\"boardTab\"][checkY][checkX]);\r\n        targetFounded = true;\r\n    }\r\n    return targetFounded;\r\n}\r\nfunction checkWin(x, y, selectColor) {\r\n    var directions = [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }, { x: -1, y: 1 }, { x: -1, y: 0 }, { x: -1, y: -1 }];\r\n    var counters = [0, 0, 0, 0, 0, 0, 0, 0];\r\n    for (var i = 0; i < directions.length; i++) {\r\n        var counter = 0;\r\n        while (true) {\r\n            counter++;\r\n            if (x + directions[i].x * counter >= 0 && x + directions[i].x * counter < _init__WEBPACK_IMPORTED_MODULE_2__[\"boardSize\"] && y + directions[i].y * counter >= 0 && y + directions[i].y * counter < _init__WEBPACK_IMPORTED_MODULE_2__[\"boardSize\"]) {\r\n                if (_main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][y + directions[i].y * counter][x + directions[i].x * counter] != null) {\r\n                    if (_main__WEBPACK_IMPORTED_MODULE_0__[\"ballsTab\"][y + directions[i].y * counter][x + directions[i].x * counter].color == selectColor) {\r\n                        counters[i]++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                else {\r\n                    break;\r\n                }\r\n            }\r\n            else {\r\n                break;\r\n            }\r\n        }\r\n    }\r\n    var win = false;\r\n    counters.forEach(function (counter, index) {\r\n        if (counter + counters[(index + 4) % counters.length] >= 4) {\r\n            for (var i = 0; i < counter + 1; i++) {\r\n                console.log(\"1: \", y + directions[index].y * i, x + directions[index].x * i);\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"boardCells\"][y + directions[index].y * i][x + directions[index].x * i].removeBall();\r\n            }\r\n            for (var i = 0; i < counters[(index + 4) % counters.length] + 1; i++) {\r\n                console.log(\"2: \", y + directions[(index + 4) % directions.length].y * i, x + directions[(index + 4) % directions.length].x * i);\r\n                _main__WEBPACK_IMPORTED_MODULE_0__[\"boardCells\"][y + directions[(index + 4) % directions.length].y * i][x + directions[(index + 4) % directions.length].x * i].removeBall();\r\n            }\r\n            win = true;\r\n            scorePanelValue += (counter + counters[(index + 4) % counters.length] + 1) / 2;\r\n            _init__WEBPACK_IMPORTED_MODULE_2__[\"scorePanel\"].innerText = scorePanelValue.toString();\r\n        }\r\n    });\r\n    return win;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/events.ts?");

/***/ }),

/***/ "./src/init.ts":
/*!*********************!*\
  !*** ./src/init.ts ***!
  \*********************/
/*! exports provided: leftPanel, nextBallsPanel, scorePanel, rightPanel, Colors, colorValues, boardSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leftPanel\", function() { return leftPanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextBallsPanel\", function() { return nextBallsPanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scorePanel\", function() { return scorePanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rightPanel\", function() { return rightPanel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colors\", function() { return Colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorValues\", function() { return colorValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardSize\", function() { return boardSize; });\nvar leftPanel = document.getElementById(\"leftContainer\");\r\nvar nextBallsPanel = document.getElementById(\"nextBalls\");\r\nvar scorePanel = document.getElementById(\"score\");\r\nvar rightPanel = document.getElementById(\"rightContainer\");\r\nvar Colors;\r\n(function (Colors) {\r\n    Colors[Colors[\"Gray\"] = 0] = \"Gray\";\r\n    Colors[Colors[\"Pink\"] = 1] = \"Pink\";\r\n    Colors[Colors[\"Yellow\"] = 2] = \"Yellow\";\r\n    Colors[Colors[\"Green\"] = 3] = \"Green\";\r\n    Colors[Colors[\"Blue\"] = 4] = \"Blue\";\r\n    Colors[Colors[\"Red\"] = 5] = \"Red\";\r\n    Colors[Colors[\"Purple\"] = 6] = \"Purple\";\r\n})(Colors || (Colors = {}));\r\n;\r\nvar colorValues = [\"#777777\", \"#dd57aa\", \"#ddce57\", \"#8ddd57\", \"#578bdd\", \"#dd5757\", \"#a757dd\"];\r\nvar boardSize = 9;\r\n// export enum Colors { Black = \"#000000\", Pink = \"#dd57aa\", Yellow = \"#ddce57\", Green = \"#8ddd57\", Blue = \"#578bdd\", Red = \"#dd5757\", Purple = \"#a757dd\" };\r\n// export let colorsTab: any[] = []\r\n// for (let enumMember in Colors) {\r\n//     colorsTab.push(enumMember);\r\n//     console.log(Colors[\"Black\"])\r\n// }\r\n// Object.values(Colors).filter(x => typeof x === 'string'); export let colorValues: any[] = colorsTab\r\n// export const colorValues: any[] = [\"#000000\", \"#dd57aa\", \"#ddce57\", \"#8ddd57\", \"#578bdd\", \"#dd5757\", \"#a757dd\"]\r\n\n\n//# sourceURL=webpack:///./src/init.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: boardTab, boardCells, ballsTab, generateStackBalls, generateBalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardTab\", function() { return boardTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"boardCells\", function() { return boardCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballsTab\", function() { return ballsTab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateStackBalls\", function() { return generateStackBalls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateBalls\", function() { return generateBalls; });\n/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ \"./src/init.ts\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball */ \"./src/ball.ts\");\n/* harmony import */ var _boardCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardCell */ \"./src/boardCell.ts\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ \"./src/events.ts\");\n\r\n\r\n\r\n\r\nvar boardTab = [];\r\nvar boardCells = [];\r\nvar ballsTab = [];\r\nvar ballStack = [];\r\nfor (var i = 0; i < _init__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"]; i++) {\r\n    boardTab.push([]);\r\n    boardCells.push([]);\r\n    ballsTab.push([]);\r\n}\r\nfunction generateBoard() {\r\n    for (var y = 0; y < _init__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"]; y++) {\r\n        var boardRow = document.createElement(\"div\");\r\n        boardRow.className = \"boardRow\";\r\n        for (var x = 0; x < _init__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"]; x++) {\r\n            var boardCell = new _boardCell__WEBPACK_IMPORTED_MODULE_2__[\"BoardCell\"](x, y);\r\n            boardCell.generateCell(boardRow);\r\n            boardTab[y][x] = boardCell.cell;\r\n            boardCells[y][x] = boardCell;\r\n            ballsTab[y][x] = null;\r\n        }\r\n        _init__WEBPACK_IMPORTED_MODULE_0__[\"rightPanel\"].appendChild(boardRow);\r\n    }\r\n}\r\nfunction generateStackBalls(count) {\r\n    while (_init__WEBPACK_IMPORTED_MODULE_0__[\"nextBallsPanel\"].firstChild) {\r\n        _init__WEBPACK_IMPORTED_MODULE_0__[\"nextBallsPanel\"].removeChild(_init__WEBPACK_IMPORTED_MODULE_0__[\"nextBallsPanel\"].firstChild);\r\n    }\r\n    for (var i = 0; i < count; i++) {\r\n        var ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"Ball\"](-1, -1, Math.floor(Math.random() * _init__WEBPACK_IMPORTED_MODULE_0__[\"colorValues\"].length));\r\n        ball.addToStack();\r\n        ballStack.push(ball);\r\n    }\r\n}\r\nfunction generateBalls(count) {\r\n    var x;\r\n    var y;\r\n    for (var i = 0; i < count; i++) {\r\n        do {\r\n            x = Math.floor(Math.random() * _init__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"]);\r\n            y = Math.floor(Math.random() * _init__WEBPACK_IMPORTED_MODULE_0__[\"boardSize\"]);\r\n        } while (ballsTab[y][x] != null);\r\n        var ball = ballStack.shift();\r\n        ball.tabX = x;\r\n        ball.tabY = y;\r\n        ball.generateBall(boardTab[y][x]);\r\n        ballsTab[y][x] = ball;\r\n        Object(_events__WEBPACK_IMPORTED_MODULE_3__[\"checkWin\"])(x, y, ballsTab[y][x].color);\r\n    }\r\n    generateStackBalls(count);\r\n}\r\ngenerateBoard();\r\ngenerateStackBalls(3);\r\ngenerateBalls(3);\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });