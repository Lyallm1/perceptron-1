/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dynamic-canvas/canvas/canvas.ts":
/*!*********************************************!*\
  !*** ./src/dynamic-canvas/canvas/canvas.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\r\n    canvasElement;\r\n    width;\r\n    height;\r\n    shapes = [];\r\n    constructor(container, { width = 800, height = 600, backgroundColor = 'white' } = {}) {\r\n        this.width = width;\r\n        this.height = height;\r\n        this.canvasElement = document.createElement('canvas');\r\n        this.canvasElement.width = width;\r\n        this.canvasElement.height = height;\r\n        this.canvasElement.style.backgroundColor = backgroundColor;\r\n        if (container === null)\r\n            throw Error('Invalid container element: null');\r\n        container.appendChild(this.canvasElement);\r\n    }\r\n    get context() {\r\n        const context = this.canvasElement.getContext('2d');\r\n        if (context === null)\r\n            throw new Error('Could not get 2D context of Canvas element');\r\n        return context;\r\n    }\r\n    removeShapes() {\r\n        this.shapes = [];\r\n    }\r\n    addShape(shape) {\r\n        this.shapes.push(shape);\r\n    }\r\n    draw() {\r\n        this.context.clearRect(0, 0, this.width, this.height);\r\n        this.shapes.forEach((shape) => { shape.draw(this.context); });\r\n    }\r\n    addEventListener(type, eventListener) {\r\n        this.canvasElement.addEventListener(type, eventListener);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/dynamic-canvas/canvas/canvas.ts?");

/***/ }),

/***/ "./src/dynamic-canvas/shapes/ball.ts":
/*!*******************************************!*\
  !*** ./src/dynamic-canvas/shapes/ball.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ball\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ \"./src/dynamic-canvas/shapes/shape.ts\");\n\r\nclass Ball extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {\r\n    color;\r\n    stroke;\r\n    radius;\r\n    constructor(radius, position, color = 'blue', stroke = 'red') {\r\n        super(position);\r\n        this.color = color;\r\n        this.stroke = stroke;\r\n        this.radius = radius;\r\n    }\r\n    draw(context) {\r\n        context.beginPath();\r\n        context.fillStyle = this.stroke;\r\n        context.arc(this.position.x, this.position.y, this.radius + 2, 0, Math.PI * 2);\r\n        context.fill();\r\n        context.beginPath();\r\n        context.fillStyle = this.color;\r\n        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);\r\n        context.fill();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/dynamic-canvas/shapes/ball.ts?");

/***/ }),

/***/ "./src/dynamic-canvas/shapes/line.ts":
/*!*******************************************!*\
  !*** ./src/dynamic-canvas/shapes/line.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Line\": () => (/* binding */ Line)\n/* harmony export */ });\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ \"./src/dynamic-canvas/shapes/shape.ts\");\n\r\nclass Line extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {\r\n    start;\r\n    end;\r\n    color;\r\n    constructor(start, end, color = 'black') {\r\n        super(start);\r\n        this.start = start;\r\n        this.end = end;\r\n        this.color = color;\r\n        this.start = start;\r\n        this.end = end;\r\n    }\r\n    draw(context) {\r\n        context.beginPath();\r\n        context.strokeStyle = this.color;\r\n        context.lineWidth = 3;\r\n        context.moveTo(this.start.x, this.start.y);\r\n        context.lineTo(this.end.x, this.end.y);\r\n        context.stroke();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/dynamic-canvas/shapes/line.ts?");

/***/ }),

/***/ "./src/dynamic-canvas/shapes/shape.ts":
/*!********************************************!*\
  !*** ./src/dynamic-canvas/shapes/shape.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Shape\": () => (/* binding */ Shape)\n/* harmony export */ });\nclass Shape {\r\n    position;\r\n    constructor(position) {\r\n        this.position = position;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/dynamic-canvas/shapes/shape.ts?");

/***/ }),

/***/ "./src/dynamic-canvas/shapes/text.ts":
/*!*******************************************!*\
  !*** ./src/dynamic-canvas/shapes/text.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Text\": () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ \"./src/dynamic-canvas/shapes/shape.ts\");\n\r\nclass Text extends _shape__WEBPACK_IMPORTED_MODULE_0__.Shape {\r\n    position;\r\n    text;\r\n    size;\r\n    color;\r\n    constructor(position, text, size = '14px', color = 'black') {\r\n        super(position);\r\n        this.position = position;\r\n        this.text = text;\r\n        this.size = size;\r\n        this.color = color;\r\n    }\r\n    draw(context) {\r\n        context.font = this.size + ' sans-serif';\r\n        context.fillStyle = this.color;\r\n        context.fillText(this.text, this.position.x, this.position.y);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/dynamic-canvas/shapes/text.ts?");

/***/ }),

/***/ "./src/dynamic-canvas/vector/vector.ts":
/*!*********************************************!*\
  !*** ./src/dynamic-canvas/vector/vector.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector)\n/* harmony export */ });\nclass Vector {\r\n    x;\r\n    y;\r\n    static create() {\r\n        return new Vector(0, 0);\r\n    }\r\n    /** Calculates the dot product or skalar product of the given Vectors */\r\n    static dotProduct(a, b) {\r\n        return a.x * b.x + a.y * b.y;\r\n    }\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    /** Returns a new instance of the Vector with the same x and y values */\r\n    copy() {\r\n        return new Vector(this.x, this.y);\r\n    }\r\n    /** Calculates the magnitude of the vector */\r\n    get magnitude() {\r\n        return Math.sqrt(Vector.dotProduct(this, this));\r\n    }\r\n    /** Calculates the angle in radians between this Vector and the horizon unit Vector(1, 0) */\r\n    get angle() {\r\n        const absoluteAngle = Math.acos(this.x / this.magnitude);\r\n        const vectorBelowHorizon = this.y > 0;\r\n        if (vectorBelowHorizon)\r\n            return 2 * Math.PI - absoluteAngle;\r\n        return absoluteAngle;\r\n    }\r\n    /** Adds the given Vector to this Vector */\r\n    add(additor) {\r\n        this.x += additor.x;\r\n        this.y += additor.y;\r\n        return this;\r\n    }\r\n    /** Multiplies this Vector with the given multiplier */\r\n    multiply(multiplier) {\r\n        this.x *= multiplier;\r\n        this.y *= multiplier;\r\n        return this;\r\n    }\r\n    /** Substracts the given Vector from this Vector */\r\n    substract(substractor) {\r\n        return this.add(substractor.multiply(-1));\r\n    }\r\n    /** Divides this Vector by the given divisor */\r\n    divide(divisor) {\r\n        if (divisor === 0)\r\n            throw new Error('Cannot normalize a vector with magnitude 0');\r\n        return this.multiply(1 / divisor);\r\n    }\r\n    /** Normalizes this Vector to a unit vector (with magnitude 1) by changing the x and y value while maintaining the angle */\r\n    normalize() {\r\n        return this.divide(this.magnitude);\r\n    }\r\n    /** Compares x and y values of the given Vector to this Vector */\r\n    equals(other) {\r\n        return this.x === other.x && this.y === other.y;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/dynamic-canvas/vector/vector.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _neural_network_neuron_perceptron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neural-network/neuron/perceptron */ \"./src/neural-network/neuron/perceptron.ts\");\n/* harmony import */ var _dynamic_canvas_canvas_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-canvas/canvas/canvas */ \"./src/dynamic-canvas/canvas/canvas.ts\");\n/* harmony import */ var _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dynamic-canvas/vector/vector */ \"./src/dynamic-canvas/vector/vector.ts\");\n/* harmony import */ var _dynamic_canvas_shapes_ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamic-canvas/shapes/ball */ \"./src/dynamic-canvas/shapes/ball.ts\");\n/* harmony import */ var _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-canvas/shapes/line */ \"./src/dynamic-canvas/shapes/line.ts\");\n/* harmony import */ var _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-canvas/shapes/text */ \"./src/dynamic-canvas/shapes/text.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet perceptron = new _neural_network_neuron_perceptron__WEBPACK_IMPORTED_MODULE_0__.Perceptron(2, 0.001);\r\nlet m = 0.5;\r\nlet b = 0.5;\r\nlet interval;\r\nfunction f(x) {\r\n    return m * x + b;\r\n}\r\nconst canvas = new _dynamic_canvas_canvas_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas(document.getElementById('graph'), { width: 800, height: 800 });\r\nconst perceptronVisualization = new _dynamic_canvas_canvas_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas(document.getElementById('perceptron'), { width: 400, height: 300 });\r\nconst lossVisualization = new _dynamic_canvas_canvas_canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas(document.getElementById('loss'), { width: 400, height: 300 });\r\nlet lossHistory = [];\r\nfunction drawGraph(trainingData) {\r\n    const halfWidth = canvas.width / 2;\r\n    const halfHeight = canvas.height / 2;\r\n    canvas.removeShapes();\r\n    canvas.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(halfWidth, 0), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(halfWidth, canvas.width), 'grey'));\r\n    canvas.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(0, halfHeight), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(canvas.height, halfWidth), 'grey'));\r\n    canvas.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(halfWidth + 10, 20), '-1', '20px', 'grey'));\r\n    canvas.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(halfWidth + 10, canvas.height - 5), '1', '20px', 'grey'));\r\n    canvas.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(5, halfHeight + 20), '-1', '20px', 'grey'));\r\n    canvas.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(canvas.width - 20, halfHeight + 20), '1', '20px', 'grey'));\r\n    trainingData.map(data => new _dynamic_canvas_shapes_ball__WEBPACK_IMPORTED_MODULE_3__.Ball(3, new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(data.values[0] * halfWidth + halfWidth, data.values[1] * halfHeight + halfHeight), data.label === 1 ? 'gold' : 'lightblue', data.error ? 'red' : 'green')).forEach(ball => canvas.addShape(ball));\r\n    canvas.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(0, perceptron.status.f(-1) * halfHeight + halfHeight), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(canvas.height, perceptron.status.f(1) * halfHeight + halfHeight)));\r\n    canvas.draw();\r\n}\r\nfunction drawPerceptron(p, x, y) {\r\n    perceptronVisualization.removeShapes();\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(15, 56), 'x', '24px'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(15, 156), 'y', '24px'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_ball__WEBPACK_IMPORTED_MODULE_3__.Ball(25, new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(60, 50), 'white', 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_ball__WEBPACK_IMPORTED_MODULE_3__.Ball(25, new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(60, 150), 'white', 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_ball__WEBPACK_IMPORTED_MODULE_3__.Ball(25, new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(60, 250), 'white', 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(83, 60), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(190, 145), 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(85, 150), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(185, 150), 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(83, 240), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(190, 155), 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(125, 86), p.status.weights[0].toFixed(3)));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(115, 145), p.status.weights[1].toFixed(3)));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(125, 225), p.status.biasWeight.toFixed(3)));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_ball__WEBPACK_IMPORTED_MODULE_3__.Ball(25, new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(210, 150), 'white', 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(235, 150), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(325, 150), 'black'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(125, 290), `y = ${p.status.m.toFixed(2)}x + ${p.status.b.toFixed(2)}`, '30px'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(55, 255), '1'));\r\n    perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(50, 290), 'bias', '12px'));\r\n    if (x && y) {\r\n        perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(45, 55), x.toFixed(2)));\r\n        perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(45, 155), y.toFixed(2)));\r\n        const weightedSum = x * p.status.weights[0] + y * p.status.weights[1] + p.status.biasWeight;\r\n        perceptronVisualization.addShape(new _dynamic_canvas_shapes_text__WEBPACK_IMPORTED_MODULE_5__.Text(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(195, 155), weightedSum.toFixed(2)));\r\n        perceptronVisualization.addShape(new _dynamic_canvas_shapes_ball__WEBPACK_IMPORTED_MODULE_3__.Ball(25, new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(350, 150), weightedSum > 0 ? 'gold' : 'lightblue', 'none'));\r\n    }\r\n    perceptronVisualization.draw();\r\n}\r\ncanvas.addEventListener('mousemove', (e) => {\r\n    const graphContainer = document.getElementById('graph');\r\n    const x = (e.clientX - graphContainer.offsetLeft + window.scrollX) / 400 - 1;\r\n    const y = (e.clientY - graphContainer.offsetTop + window.scrollY) / 400 - 1;\r\n    drawPerceptron(perceptron, x, y);\r\n});\r\nfunction drawLossHistory(h) {\r\n    lossVisualization.removeShapes();\r\n    const w = 350 / h.length;\r\n    const m = Math.max(...h);\r\n    lossVisualization.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(25, 25), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(25, 275), 'grey'));\r\n    lossVisualization.addShape(new _dynamic_canvas_shapes_line__WEBPACK_IMPORTED_MODULE_4__.Line(new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(25, 275), new _dynamic_canvas_vector_vector__WEBPACK_IMPORTED_MODULE_2__.Vector(375, 275), 'grey'));\r\n    lossVisualization.draw();\r\n    const ctx = lossVisualization.context;\r\n    ctx.beginPath();\r\n    h.forEach((l, i) => {\r\n        const x = 25 + w * i;\r\n        const y = 275 - l / m * 250;\r\n        ctx.fillStyle = 'grey';\r\n        ctx.fillText(l + '', x - 3, y - 5);\r\n        if (i === 0)\r\n            ctx.moveTo(x, y);\r\n        else {\r\n            ctx.lineTo(x, y);\r\n            ctx.moveTo(x, y);\r\n        }\r\n    });\r\n    ctx.lineCap = 'round';\r\n    ctx.strokeStyle = 'black';\r\n    ctx.stroke();\r\n}\r\nfunction setM(event) {\r\n    m = Number(event.target?.value);\r\n}\r\nfunction setB(event) {\r\n    b = Number(event.target?.value);\r\n}\r\nfunction startTraining() {\r\n    if (interval) {\r\n        clearInterval(interval);\r\n        interval = null;\r\n    }\r\n    perceptron = new _neural_network_neuron_perceptron__WEBPACK_IMPORTED_MODULE_0__.Perceptron(2, 0.001);\r\n    const trainingData = new Array(500).fill(0).map(_ => {\r\n        const x = Math.random() * 2 - 1;\r\n        const y = Math.random() * 2 - 1; // TODO: use utils\r\n        const label = (y > f(x) ? 1 : -1);\r\n        return { values: [x, y], label, error: 1 };\r\n    });\r\n    lossHistory = [];\r\n    interval = setInterval(() => {\r\n        if (!trainingData.find(data => data.error)) {\r\n            console.log(`Training completed: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)} (expected ${f(1) - f(0)} * x + ${f(0)})`);\r\n            clearInterval(interval);\r\n            return;\r\n        }\r\n        lossHistory.push(perceptron.train(trainingData));\r\n        console.log(`Thinking: ${perceptron.status.m.toFixed(2)} * x + ${perceptron.status.b.toFixed(2)}`);\r\n        drawGraph(trainingData);\r\n        drawPerceptron(perceptron, 0, 0);\r\n        drawLossHistory(lossHistory);\r\n    }, 300);\r\n}\r\ndocument.getElementById('m')?.addEventListener('change', setM);\r\ndocument.getElementById('b')?.addEventListener('change', setB);\r\ndocument.getElementById('train-button')?.addEventListener('click', startTraining);\r\nwindow.addEventListener('load', startTraining);\r\n\n\n//# sourceURL=webpack://perceptron/./src/index.ts?");

/***/ }),

/***/ "./src/neural-network/activation.ts":
/*!******************************************!*\
  !*** ./src/neural-network/activation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"relu\": () => (/* binding */ relu),\n/* harmony export */   \"sigmoid\": () => (/* binding */ sigmoid),\n/* harmony export */   \"sign\": () => (/* binding */ sign)\n/* harmony export */ });\nfunction sign(value) {\r\n    return value >= 0 ? 1 : -1;\r\n}\r\nfunction sigmoid(value) {\r\n    return 1 / (1 + Math.exp(value));\r\n}\r\nfunction relu(value) {\r\n    return Math.max(value, 0);\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/neural-network/activation.ts?");

/***/ }),

/***/ "./src/neural-network/neuron/perceptron.ts":
/*!*************************************************!*\
  !*** ./src/neural-network/neuron/perceptron.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Perceptron\": () => (/* binding */ Perceptron)\n/* harmony export */ });\n/* harmony import */ var _activation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../activation */ \"./src/neural-network/activation.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/neural-network/utils.ts\");\n\r\n\r\nclass Perceptron {\r\n    learningRate;\r\n    weights;\r\n    biasWeight;\r\n    constructor(numberOfInputs, learningRate = 0.01) {\r\n        this.learningRate = learningRate;\r\n        this.weights = new Array(numberOfInputs).fill(0).map(_utils__WEBPACK_IMPORTED_MODULE_1__.randomValue);\r\n        this.biasWeight = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.randomValue)();\r\n    }\r\n    /** Guesses the output for the given inputs */\r\n    guess(inputs) {\r\n        let sum = inputs.reduce((sum, input, index) => sum + input * this.weights[index], 0);\r\n        sum += this.biasWeight;\r\n        const guess = (0,_activation__WEBPACK_IMPORTED_MODULE_0__.sign)(sum);\r\n        return guess;\r\n    }\r\n    /** Returns the linear function this perceptron represents (y = mx + b) */\r\n    get f() {\r\n        return (x) => this.m * x + this.b;\r\n    }\r\n    /** Returns the m part of the linear function this perceptron represents (y = mx + b) */\r\n    get m() {\r\n        return -this.weights[0] / this.weights[1];\r\n    }\r\n    /** Returns the b part of the linear function this perceptron represents (y = mx + b) */\r\n    get b() {\r\n        return -this.biasWeight / this.weights[1];\r\n    }\r\n    /** Trains the perceptron with the given training data once */\r\n    train(trainingData) {\r\n        const data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.shuffle)(trainingData);\r\n        let loss = 0.0;\r\n        data.forEach(datum => {\r\n            const guess = this.guess(datum.values);\r\n            const error = datum.label - guess;\r\n            datum.error = error;\r\n            this.weights = this.weights.map((weight, index) => weight + error * datum.values[index] * this.learningRate);\r\n            this.biasWeight = this.biasWeight + error * this.learningRate;\r\n            loss += Math.abs(error / 2);\r\n        });\r\n        return loss;\r\n    }\r\n    /** Returns the internal values of the perceptron */\r\n    get status() {\r\n        return {\r\n            weights: this.weights,\r\n            biasWeight: this.biasWeight,\r\n            f: this.f,\r\n            m: this.m,\r\n            b: this.b,\r\n        };\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/neural-network/neuron/perceptron.ts?");

/***/ }),

/***/ "./src/neural-network/utils.ts":
/*!*************************************!*\
  !*** ./src/neural-network/utils.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomValue\": () => (/* binding */ randomValue),\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle)\n/* harmony export */ });\n/** Returns a random value between -1 an 1 */\r\nfunction randomValue() {\r\n    return Math.random() * 2 - 1;\r\n}\r\n/** Returns a shuffled copy of an array */\r\nfunction shuffle(array) {\r\n    const newArray = [...array];\r\n    for (let i = newArray.length - 1; i > 0; i--) {\r\n        const j = Math.floor(Math.random() * (i + 1));\r\n        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];\r\n    }\r\n    return newArray;\r\n}\r\n\n\n//# sourceURL=webpack://perceptron/./src/neural-network/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;