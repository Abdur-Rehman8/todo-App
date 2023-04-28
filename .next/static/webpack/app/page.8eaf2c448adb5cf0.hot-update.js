"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/todo-app.tsx":
/*!**************************!*\
  !*** ./app/todo-app.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ \"(app-client)/./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction TodoApp() {\n    _s();\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            todoText: \"todo 1\",\n            completed: false\n        },\n        {\n            todoText: \"todo 2\",\n            completed: true\n        },\n        {\n            todoText: \"todo 3\",\n            completed: true\n        },\n        {\n            todoText: \"todo 4\",\n            completed: false\n        }\n    ]);\n    const onClickHandler = (meraElm)=>{\n        console.log(\"meraElm\", meraElm);\n        // map runs on array, and returns an array\n        const newTodos = todos.map((todo)=>{\n            console.log(\"todo: \", todo);\n            if (todo.todoText == meraElm.todoText) {\n                todo.completed = !todo.completed; // false he to true krdo, true he to false kardo\n            }\n            return todo;\n        });\n        console.log(newTodos);\n        setTodos(newTodos);\n    };\n    const addTodo = ()=>{\n        const newTodo = {\n            todoText: todo,\n            completed: false\n        };\n        const newTodos = [\n            newTodo,\n            ...todos\n        ];\n        setTodos(newTodos);\n        setTodo(\"\");\n    };\n    const deleteTodo = (deletedTodo)=>{\n        const newTodos = todos.filter((todo)=>{\n            if (todo.todoText == deletedTodo.todoText) return false;\n            return true;\n        });\n        console.log(\"old todos\", todos, \"newtodos\", newTodos);\n        setTodos(newTodos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\",\n                    marginBottom: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Todo App\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 8\n                }, this)\n            }, void 0, false, {\n                fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Add todo\",\n                        value: todo,\n                        onChange: (d)=>{\n                            setTodo(d.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 10\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 10\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addTodo,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_2__.MdDelete, {}, void 0, false, {\n                            fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 34\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: todos.map((eln)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        style: {\n                            color: eln.completed ? \"green\" : \"red\",\n                            fontStyle: \"italic\",\n                            listStyle: \"none\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: eln.completed,\n                                onChange: ()=>onClickHandler(eln)\n                            }, void 0, false, {\n                                fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, this),\n                            eln.todoText,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>deleteTodo(eln),\n                                children: \" Delete\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, eln.todoText, true, {\n                        fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"G:\\\\todo-next\\\\todo-app\\\\app\\\\todo-app.tsx\",\n                lineNumber: 67,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(TodoApp, \"xNzBL8tWCC04LXFQLRJZmVKf8BM=\");\n_c = TodoApp;\nvar _c;\n$RefreshReg$(_c, \"TodoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2FwcC90b2RvLWFwcC50c3g/YTk5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1kRGVsZXRlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvQXBwKCkge1xyXG4gIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW1xyXG4gICAgeyB0b2RvVGV4dDogXCJ0b2RvIDFcIiwgY29tcGxldGVkOiBmYWxzZSB9LFxyXG4gICAgeyB0b2RvVGV4dDogXCJ0b2RvIDJcIiwgY29tcGxldGVkOiB0cnVlIH0sXHJcbiAgICB7IHRvZG9UZXh0OiBcInRvZG8gM1wiLCBjb21wbGV0ZWQ6IHRydWUgfSxcclxuICAgIHsgdG9kb1RleHQ6IFwidG9kbyA0XCIsIGNvbXBsZXRlZDogZmFsc2UgfSxcclxuICBdKTtcclxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChtZXJhRWxtOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibWVyYUVsbVwiLCBtZXJhRWxtKTtcclxuXHJcbiAgICAvLyBtYXAgcnVucyBvbiBhcnJheSwgYW5kIHJldHVybnMgYW4gYXJyYXlcclxuICAgIGNvbnN0IG5ld1RvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidG9kbzogXCIsIHRvZG8pO1xyXG4gICAgICBpZiAodG9kby50b2RvVGV4dCA9PSBtZXJhRWxtLnRvZG9UZXh0KSB7XHJcbiAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7IC8vIGZhbHNlIGhlIHRvIHRydWUga3JkbywgdHJ1ZSBoZSB0byBmYWxzZSBrYXJkb1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cobmV3VG9kb3MpO1xyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvID0geyB0b2RvVGV4dDogdG9kbywgY29tcGxldGVkOiBmYWxzZSB9O1xyXG4gICAgY29uc3QgbmV3VG9kb3MgPSBbbmV3VG9kbywgLi4udG9kb3NdO1xyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gICAgc2V0VG9kbyhcIlwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoZGVsZXRlZFRvZG86YW55KSA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xyXG4gIGlmKHRvZG8udG9kb1RleHQgPT0gZGVsZXRlZFRvZG8udG9kb1RleHQpIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKFwib2xkIHRvZG9zXCIsIHRvZG9zLCBcIm5ld3RvZG9zXCIsbmV3VG9kb3MpXHJcbiAgICBzZXRUb2RvcyhuZXdUb2RvcylcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIlxyXG4gICAgICBcclxuICAgIH19PjxoMj5Ub2RvIEFwcDwvaDI+PC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiXHJcbiAgICB9fT4gIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB0b2RvXCJcclxuICAgICAgICB2YWx1ZT17dG9kb31cclxuICAgICAgICBvbkNoYW5nZT17KGQpID0+IHtcclxuICAgICAgICAgIHNldFRvZG8oZC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+IDxiciAvPlxyXG5cclxuICAgICAgey8qIEFkZCBUb2RvIGJ0biAqL31cclxuICAgICAgPGJ1dHRvbiAgb25DbGljaz17YWRkVG9kb30+PE1kRGVsZXRlLz48L2J1dHRvbj48L2Rpdj5cclxuXHJcbnsvKiB0b2RvcyAqL31cclxuICAgIDx1bCBzdHlsZT17e1xyXG4gICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIlxyXG4gICAgfX0+XHJcbiAgICAgICAge3RvZG9zLm1hcCgoZWxuKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGVsbi5jb21wbGV0ZWQgPyBcImdyZWVuXCIgOiBcInJlZFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxyXG4gICAgICAgICAgICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGtleT17ZWxuLnRvZG9UZXh0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17ZWxuLmNvbXBsZXRlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNsaWNrSGFuZGxlcihlbG4pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAge2Vsbi50b2RvVGV4dH1cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5kZWxldGVUb2RvKGVsbil9PiBEZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk1kRGVsZXRlIiwiVG9kb0FwcCIsInRvZG8iLCJzZXRUb2RvIiwidG9kb3MiLCJzZXRUb2RvcyIsInRvZG9UZXh0IiwiY29tcGxldGVkIiwib25DbGlja0hhbmRsZXIiLCJtZXJhRWxtIiwiY29uc29sZSIsImxvZyIsIm5ld1RvZG9zIiwibWFwIiwiYWRkVG9kbyIsIm5ld1RvZG8iLCJkZWxldGVUb2RvIiwiZGVsZXRlZFRvZG8iLCJmaWx0ZXIiLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZCIsInRhcmdldCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwiZWxuIiwibGkiLCJjb2xvciIsImZvbnRTdHlsZSIsImxpc3RTdHlsZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/todo-app.tsx\n"));

/***/ })

});