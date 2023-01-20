"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* reexport safe */ _todo_functionalities_js__WEBPACK_IMPORTED_MODULE_2__.addTodo),
/* harmony export */   "removeTodo": () => (/* reexport safe */ _todo_functionalities_js__WEBPACK_IMPORTED_MODULE_2__.removeTodo)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_loader.js */ "./src/todo_loader.js");
/* harmony import */ var _todo_functionalities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_functionalities.js */ "./src/todo_functionalities.js");



(0,_todo_loader_js__WEBPACK_IMPORTED_MODULE_1__["default"])();



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = localStorage.getItem('todos');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "todos": () => (/* binding */ todos)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


// eslint-disable-next-line import/no-mutable-exports
let todos = JSON.parse(_storage_js__WEBPACK_IMPORTED_MODULE_0__["default"]) || [];
class Todo {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }

  add() {
    const { id, description, completed } = this;
    const newTodo = { id, description, completed };
    todos.push(newTodo);
  }

  static remove(id) {
    todos = todos.filter((todo) => Number(todo.id) !== +id);
  }

  static saveTolocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/todo_functionalities.js":
/*!*************************************!*\
  !*** ./src/todo_functionalities.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _todo_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_loader.js */ "./src/todo_loader.js");



const form = document.querySelector('#form');
const todolist = document.querySelector('.todolist');

const addTodo = (id, desc) => {
  const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](id, desc);
  todo.add();
  _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTolocalStorage();
  (0,_todo_loader_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value: todoDesc } = document.querySelector('#todo');
  const id = _todo_js__WEBPACK_IMPORTED_MODULE_0__.todos.length;
  addTodo(id, todoDesc);
  form.reset();
});

const updateIndex = () => {
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach((todo, index) => { todo.id = index; });
  _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTolocalStorage();
};

const editTodo = (target) => {
  const { id } = target.parentElement.parentElement;
  target.addEventListener('focusout', () => {
    target.parentElement.parentElement.classList.remove('yellow_color');
    const newDesc = target.value;
    _todo_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach((todo) => { if (Number(todo.id) === +id) todo.description = newDesc; });
    _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTolocalStorage();
  });
};

const removeTodo = (id) => {
  _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].remove(id);
  _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTolocalStorage();
  (0,_todo_loader_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  updateIndex();
};

todolist.addEventListener('click', (e) => {
  const { target } = e;
  if (target.type === 'text') {
    editTodo(target);
    target.parentElement.parentElement.classList.add('yellow_color');
  }

  if (target.type === 'submit') {
    const { id } = target.parentElement;
    removeTodo(id);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todolist);



/***/ }),

/***/ "./src/todo_loader.js":
/*!****************************!*\
  !*** ./src/todo_loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


const todolistContainer = document.querySelector('.todolist');

const loadTodo = () => {
  todolistContainer.innerHTML = '';
  _todo_js__WEBPACK_IMPORTED_MODULE_0__.todos.forEach((el) => {
    const todo = document.createElement('li');
    todo.id = el.id;
    todo.innerHTML = `
            <div>
              <input type="checkbox" name="checkbox" id="checkbox">
              <input type="text" value="${el.description}">
            </div>
            <button class="material-symbols-outlined"> delete </button> `;

    todolistContainer.appendChild(todo);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTodo);

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!********************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: whitesmoke;\n}\n\n* {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\n.hide {\n  display: none !important;\n}\n\n.container {\n  max-width: 500px;\n  margin-inline: auto;\n  margin-top: 50px;\n  box-shadow: 0 11px 75px -3px rgba(0, 0, 0, 0.63);\n  -webkit-box-shadow: 0 11px 75px -3px rgba(0, 0, 0, 0.63);\n  -moz-box-shadow: 0 11px 75px -3px rgba(0, 0, 0, 0.63);\n}\n\n.todo_header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 15px;\n}\n\n.todo_form {\n  position: relative;\n  padding: 5px 15px;\n}\n\n.todo {\n  width: 100%;\n  border: none;\n  padding: 15px 0;\n  outline: 0;\n  font-style: italic;\n}\n\n.icon_enter {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n\n.todolist {\n  padding: 0;\n}\n\n.todolist > li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  border-bottom: 1px solid gray;\n}\n\n.todolist > li > div {\n  display: flex;\n}\n\n.todolist > li > div > input[type=text] {\n  padding: 20px;\n  outline: 0;\n  border: 0;\n  width: 240px;\n  margin-left: 15px;\n  background-color: transparent;\n}\n\n.todolist > li > button {\n  background: none;\n  border: 0;\n  outline: 0;\n}\n\n.yellow_color {\n  background-color: rgba(253, 253, 172, 0.837);\n}\n\n.clear_btn {\n  padding: 30px;\n  font-size: 15px;\n  color: black;\n  outline: 0;\n  border: 0;\n  background-color: bisque;\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;AAC9B;;AAIA;EACE,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,gDAAgD;EAChD,wDAAwD;EACxD,qDAAqD;AACvD;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,UAAU;EACV,SAAS;EACT,wBAAwB;EACxB,kBAAkB;AACpB","sourcesContent":["body {\n  background-color: whitesmoke;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;&display=swap');\n\n* {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\n.hide {\n  display: none !important;\n}\n\n.container {\n  max-width: 500px;\n  margin-inline: auto;\n  margin-top: 50px;\n  box-shadow: 0 11px 75px -3px rgba(0, 0, 0, 0.63);\n  -webkit-box-shadow: 0 11px 75px -3px rgba(0, 0, 0, 0.63);\n  -moz-box-shadow: 0 11px 75px -3px rgba(0, 0, 0, 0.63);\n}\n\n.todo_header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 15px;\n}\n\n.todo_form {\n  position: relative;\n  padding: 5px 15px;\n}\n\n.todo {\n  width: 100%;\n  border: none;\n  padding: 15px 0;\n  outline: 0;\n  font-style: italic;\n}\n\n.icon_enter {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n\n.todolist {\n  padding: 0;\n}\n\n.todolist > li {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 15px;\n  border-bottom: 1px solid gray;\n}\n\n.todolist > li > div {\n  display: flex;\n}\n\n.todolist > li > div > input[type=text] {\n  padding: 20px;\n  outline: 0;\n  border: 0;\n  width: 240px;\n  margin-left: 15px;\n  background-color: transparent;\n}\n\n.todolist > li > button {\n  background: none;\n  border: 0;\n  outline: 0;\n}\n\n.yellow_color {\n  background-color: rgba(253, 253, 172, 0.837);\n}\n\n.clear_btn {\n  padding: 30px;\n  font-size: 15px;\n  color: black;\n  outline: 0;\n  border: 0;\n  background-color: bisque;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/api.js ***!
  \************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*******************************************************************!*\
  !*** ../../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*******************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "../../../node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!***************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \***************************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!*****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \*****************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!*****************************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!**********************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!****************************************************************************!*\
  !*** ../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \****************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9fZnVuY3Rpb25hbGl0aWVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb19sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/YjI3MiIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRUb2RvIGZyb20gJy4vdG9kb19sb2FkZXIuanMnO1xuXG5sb2FkVG9kbygpO1xuXG5leHBvcnQgeyBhZGRUb2RvLCByZW1vdmVUb2RvIH0gZnJvbSAnLi90b2RvX2Z1bmN0aW9uYWxpdGllcy5qcyc7IiwiY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuZXhwb3J0IGRlZmF1bHQgZGF0YTsiLCJpbXBvcnQgZGF0YSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHRvZG9zID0gSlNPTi5wYXJzZShkYXRhKSB8fCBbXTtcbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihpZCwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgY29uc3QgeyBpZCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCB9ID0gdGhpcztcbiAgICBjb25zdCBuZXdUb2RvID0geyBpZCwgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCB9O1xuICAgIHRvZG9zLnB1c2gobmV3VG9kbyk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlKGlkKSB7XG4gICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IE51bWJlcih0b2RvLmlkKSAhPT0gK2lkKTtcbiAgfVxuXG4gIHN0YXRpYyBzYXZlVG9sb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuZXhwb3J0IHsgdG9kb3MgfTsiLCJpbXBvcnQgVG9kbywgeyB0b2RvcyB9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgbG9hZFRvZG8gZnJvbSAnLi90b2RvX2xvYWRlci5qcyc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybScpO1xuY29uc3QgdG9kb2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2xpc3QnKTtcblxuY29uc3QgYWRkVG9kbyA9IChpZCwgZGVzYykgPT4ge1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG8oaWQsIGRlc2MpO1xuICB0b2RvLmFkZCgpO1xuICBUb2RvLnNhdmVUb2xvY2FsU3RvcmFnZSgpO1xuICBsb2FkVG9kbygpO1xufTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgdmFsdWU6IHRvZG9EZXNjIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpO1xuICBjb25zdCBpZCA9IHRvZG9zLmxlbmd0aDtcbiAgYWRkVG9kbyhpZCwgdG9kb0Rlc2MpO1xuICBmb3JtLnJlc2V0KCk7XG59KTtcblxuY29uc3QgdXBkYXRlSW5kZXggPSAoKSA9PiB7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7IHRvZG8uaWQgPSBpbmRleDsgfSk7XG4gIFRvZG8uc2F2ZVRvbG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCBlZGl0VG9kbyA9ICh0YXJnZXQpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgneWVsbG93X2NvbG9yJyk7XG4gICAgY29uc3QgbmV3RGVzYyA9IHRhcmdldC52YWx1ZTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7IGlmIChOdW1iZXIodG9kby5pZCkgPT09ICtpZCkgdG9kby5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7IH0pO1xuICAgIFRvZG8uc2F2ZVRvbG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVG9kbyA9IChpZCkgPT4ge1xuICBUb2RvLnJlbW92ZShpZCk7XG4gIFRvZG8uc2F2ZVRvbG9jYWxTdG9yYWdlKCk7XG4gIGxvYWRUb2RvKCk7XG4gIHVwZGF0ZUluZGV4KCk7XG59O1xuXG50b2RvbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICBpZiAodGFyZ2V0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGVkaXRUb2RvKHRhcmdldCk7XG4gICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd5ZWxsb3dfY29sb3InKTtcbiAgfVxuXG4gIGlmICh0YXJnZXQudHlwZSA9PT0gJ3N1Ym1pdCcpIHtcbiAgICBjb25zdCB7IGlkIH0gPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICByZW1vdmVUb2RvKGlkKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9saXN0O1xuZXhwb3J0IHsgYWRkVG9kbywgcmVtb3ZlVG9kbyB9O1xuIiwiaW1wb3J0IHsgdG9kb3MgfSBmcm9tICcuL3RvZG8uanMnO1xuXG5jb25zdCB0b2RvbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xuXG5jb25zdCBsb2FkVG9kbyA9ICgpID0+IHtcbiAgdG9kb2xpc3RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHRvZG9zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdG9kby5pZCA9IGVsLmlkO1xuICAgIHRvZG8uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke2VsLmRlc2NyaXB0aW9ufVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPiBkZWxldGUgPC9idXR0b24+IGA7XG5cbiAgICB0b2RvbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVG9kbzsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwOzcwMDsmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMTFweCA3NXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMXB4IDc1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDExcHggNzVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC42Myk7XFxufVxcblxcbi50b2RvX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHggMTVweDtcXG59XFxuXFxuLnRvZG9fZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuLnRvZG8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaWNvbl9lbnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMTVweDtcXG59XFxuXFxuLnRvZG9saXN0IHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi50b2RvbGlzdCA+IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnRvZG9saXN0ID4gbGkgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG9saXN0ID4gbGkgPiBkaXYgPiBpbnB1dFt0eXBlPXRleHRdIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRvZG9saXN0ID4gbGkgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi55ZWxsb3dfY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsIDI1MywgMTcyLCAwLjgzNyk7XFxufVxcblxcbi5jbGVhcl9idG4ge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBSUE7RUFDRSxTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0VBQ2hELHdEQUF3RDtFQUN4RCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzUwMDs3MDA7JmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgYm94LXNoYWRvdzogMCAxMXB4IDc1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDExcHggNzVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC42Myk7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMTFweCA3NXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcXG59XFxuXFxuLnRvZG9faGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweCAxNXB4O1xcbn1cXG5cXG4udG9kb19mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbn1cXG5cXG4udG9kbyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIG91dGxpbmU6IDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5pY29uX2VudGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4udG9kb2xpc3Qge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRvZG9saXN0ID4gbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbn1cXG5cXG4udG9kb2xpc3QgPiBsaSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kb2xpc3QgPiBsaSA+IGRpdiA+IGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMjQwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udG9kb2xpc3QgPiBsaSA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLnllbGxvd19jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMjUzLCAxNzIsIDAuODM3KTtcXG59XFxuXFxuLmNsZWFyX2J0biB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9