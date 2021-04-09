webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./src/Components/dashboard/Resultados/resultados.js":
/*!***********************************************************!*\
  !*** ./src/Components/dashboard/Resultados/resultados.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Api_Call_Api_call_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Api-Call/Api-call-function */ "./src/Components/Api-Call/Api-call-function.js");
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Loading/Loading */ "./src/Components/Loading/Loading.js");


var _jsxFileName = "C:\\Users\\rivadeneiradelgado.5.TPCO\\Documents\\Proyectos\\warnings-tp-next-2\\src\\Components\\dashboard\\Resultados\\resultados.js",
    _s = $RefreshSig$();








function Boxes(props) {
  _s();

  var _this = this;

  var _FetchFunction = Object(_Api_Call_Api_call_function__WEBPACK_IMPORTED_MODULE_5__["default"])('apiRegistros', props.campanaSelected),
      data = _FetchFunction.data,
      loading = _FetchFunction.loading,
      arrayNombresImg = _FetchFunction.arrayNombresImg;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perBolso = _useState[0],
      setPerBolso = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perBotella = _useState2[0],
      setPerBotella = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perLapicero = _useState3[0],
      setPerLapicero = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perCompu = _useState4[0],
      setPerCompu = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perCelu = _useState5[0],
      setPerCelu = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perBook = _useState6[0],
      setPerBook = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perFDP = _useState7[0],
      setPerFDP = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      perMultiPer = _useState8[0],
      setPerMultiPer = _useState8[1];

  var campana = '';
  var contadorBolsoVarGP = 0;
  var contadorBotellaVarGP = 0;
  var contadorLapiceroVarGP = 0;
  var contadorCompuVarGP = 0;
  var contadorCeluVarGP = 0;
  var contadorBooksVarGP = 0;
  var contadorFDPVar = 0;
  var contadorMultiPerVar = 0;
  var percenBolso = 0;
  var percenBotella = 0;
  var percenLapicero = 0;
  var percenCompu = 0;
  var percenCelu = 0;
  var percenBook = 0;
  var percenFDP = 0;
  var percenMultiPer = 0;

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      cargoData = _useState9[0],
      setCargoData = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      cargoInfoDash = _useState10[0],
      setCargoInfoDash = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!loading) {
      // console.log(data)
      setCargoInfoDash(true);
      data.map(function (elemento) {
        if (elemento.objeto !== "") {
          if (elemento.objeto === "Bolso") {
            contadorBolsoVarGP++;
          } else if (elemento.objeto === "Botella") {
            contadorBotellaVarGP++;
          } else if (elemento.objeto === "Lapicero") {
            contadorLapiceroVarGP++;
          } else if (elemento.objeto === "Varios computadores") {
            contadorCompuVarGP++;
          } else if (elemento.objeto === "Celular" || elemento.objeto === "celular") {
            contadorCeluVarGP++;
          } else if (elemento.objeto === "Abandono puesto") {
            contadorFDPVar++;
          } else if (elemento.objeto === "Multiples Personas") {
            contadorMultiPerVar++;
          } else {
            contadorBooksVarGP++;
          }

          setCargoData(false);
        }
      });
      var totalAlerts = contadorBolsoVarGP + contadorBotellaVarGP + contadorLapiceroVarGP + contadorCompuVarGP + contadorCeluVarGP + contadorBooksVarGP + contadorFDPVar + contadorMultiPerVar;
      percenBolso = contadorBolsoVarGP / totalAlerts * 100;
      percenBotella = contadorBotellaVarGP / totalAlerts * 100;
      percenLapicero = contadorLapiceroVarGP / totalAlerts * 100;
      percenCompu = contadorCompuVarGP / totalAlerts * 100;
      percenCelu = contadorCeluVarGP / totalAlerts * 100;
      percenBook = contadorBooksVarGP / totalAlerts * 100;
      percenFDP = contadorFDPVar / totalAlerts * 100;
      percenMultiPer = contadorMultiPerVar / totalAlerts * 100;
      setPerBolso(percenBolso);
      setPerBotella(percenBotella);
      setPerLapicero(percenLapicero);
      setPerCompu(percenCompu);
      setPerCelu(percenCelu);
      setPerBook(percenBook);
      setPerFDP(percenFDP);
      setPerMultiPer(percenMultiPer);
    }
  }, [loading, props]);
  var info = !cargoInfoDash ? [] : [{
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMobile"],
    rate: perCelu.toFixed(1),
    alertName: 'Celular'
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBook"],
    rate: perBook.toFixed(1),
    alertName: 'Libro'
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTintSlash"],
    rate: perBotella.toFixed(1),
    alertName: 'Botella'
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPencilAlt"],
    rate: perLapicero.toFixed(1),
    alertName: 'Lapicero'
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLaptop"],
    rate: perCompu.toFixed(1),
    alertName: 'Computador'
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSuitcaseRolling"],
    rate: perBolso.toFixed(1),
    alertName: 'Bolso'
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPersonBooth"],
    rate: perFDP.toFixed(1),
    alertName: 'Fuera De Puesto'
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUsersSlash"],
    rate: perMultiPer.toFixed(1),
    alertName: 'Múltiples Personas'
  }];

  var boxCointainer = function boxCointainer(valor) {
    return !cargoInfoDash ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "box",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contIconBoxAndTextPerBox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contIconBox",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              className: "iconBoxes",
              size: "4x",
              color: "#454545"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contTextPerBox",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "textoBoxesPer",
              children: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contTextBox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "textoBoxes",
            children: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }, _this) : valor.rate === "NaN" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "box",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contIconBoxAndTextPerBox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contIconBox",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: valor.icon,
              className: "iconBoxes",
              size: "4x",
              color: "#454545"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contTextPerBox",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "textoBoxesPer",
              children: " 0.0%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contTextBox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "textoBoxes",
            children: [" ", valor.alertName, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "box",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contIconBoxAndTextPerBox",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contIconBox",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
              icon: valor.icon,
              className: "iconBoxes",
              size: "4x",
              color: "#454545"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contTextPerBox",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "textoBoxesPer",
              children: [" ", valor.rate, "%"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contTextBox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "textoBoxes",
            children: [" ", valor.alertName, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }, _this);
  };

  return !cargoInfoDash ? '' : loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "box",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "contIconBoxAndTextPerBox",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contIconBox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
            className: "iconBoxes",
            size: "4x",
            color: "#454545"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "contTextPerBox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "textoBoxesPer",
            children: "..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "contTextBox",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "textoBoxes",
          children: "..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 247,
    columnNumber: 13
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    children: info.map(function (alert) {
      console.log(alert);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          marginLeft: '1%'
        },
        children: boxCointainer(alert)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 29
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 13
  }, this);
}

_s(Boxes, "gnEOqKG7cyiEtTUDEvZlTbGiky8=");

_c = Boxes;
/* harmony default export */ __webpack_exports__["default"] = (Boxes);

var _c;

$RefreshReg$(_c, "Boxes");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvZGFzaGJvYXJkL1Jlc3VsdGFkb3MvcmVzdWx0YWRvcy5qcyJdLCJuYW1lcyI6WyJCb3hlcyIsInByb3BzIiwiRmV0Y2hGdW5jdGlvbiIsImNhbXBhbmFTZWxlY3RlZCIsImRhdGEiLCJsb2FkaW5nIiwiYXJyYXlOb21icmVzSW1nIiwidXNlU3RhdGUiLCJwZXJCb2xzbyIsInNldFBlckJvbHNvIiwicGVyQm90ZWxsYSIsInNldFBlckJvdGVsbGEiLCJwZXJMYXBpY2VybyIsInNldFBlckxhcGljZXJvIiwicGVyQ29tcHUiLCJzZXRQZXJDb21wdSIsInBlckNlbHUiLCJzZXRQZXJDZWx1IiwicGVyQm9vayIsInNldFBlckJvb2siLCJwZXJGRFAiLCJzZXRQZXJGRFAiLCJwZXJNdWx0aVBlciIsInNldFBlck11bHRpUGVyIiwiY2FtcGFuYSIsImNvbnRhZG9yQm9sc29WYXJHUCIsImNvbnRhZG9yQm90ZWxsYVZhckdQIiwiY29udGFkb3JMYXBpY2Vyb1ZhckdQIiwiY29udGFkb3JDb21wdVZhckdQIiwiY29udGFkb3JDZWx1VmFyR1AiLCJjb250YWRvckJvb2tzVmFyR1AiLCJjb250YWRvckZEUFZhciIsImNvbnRhZG9yTXVsdGlQZXJWYXIiLCJwZXJjZW5Cb2xzbyIsInBlcmNlbkJvdGVsbGEiLCJwZXJjZW5MYXBpY2VybyIsInBlcmNlbkNvbXB1IiwicGVyY2VuQ2VsdSIsInBlcmNlbkJvb2siLCJwZXJjZW5GRFAiLCJwZXJjZW5NdWx0aVBlciIsImNhcmdvRGF0YSIsInNldENhcmdvRGF0YSIsImNhcmdvSW5mb0Rhc2giLCJzZXRDYXJnb0luZm9EYXNoIiwidXNlRWZmZWN0IiwibWFwIiwiZWxlbWVudG8iLCJvYmpldG8iLCJ0b3RhbEFsZXJ0cyIsImluZm8iLCJpY29uIiwiZmFNb2JpbGUiLCJyYXRlIiwidG9GaXhlZCIsImFsZXJ0TmFtZSIsImZhQm9vayIsImZhVGludFNsYXNoIiwiZmFQZW5jaWxBbHQiLCJmYUxhcHRvcCIsImZhU3VpdGNhc2VSb2xsaW5nIiwiZmFQZXJzb25Cb290aCIsImZhVXNlcnNTbGFzaCIsImJveENvaW50YWluZXIiLCJ2YWxvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFDQTtBQUFBOztBQUFBOztBQUFBLHVCQUM2Q0MsMkVBQWEsQ0FBQyxjQUFELEVBQWlCRCxLQUFLLENBQUNFLGVBQXZCLENBRDFEO0FBQUEsTUFDV0MsSUFEWCxrQkFDV0EsSUFEWDtBQUFBLE1BQ2lCQyxPQURqQixrQkFDaUJBLE9BRGpCO0FBQUEsTUFDMEJDLGVBRDFCLGtCQUMwQkEsZUFEMUI7O0FBQUEsa0JBRW1DQyxzREFBUSxDQUFDLENBQUQsQ0FGM0M7QUFBQSxNQUVXQyxRQUZYO0FBQUEsTUFFb0JDLFdBRnBCOztBQUFBLG1CQUd1Q0Ysc0RBQVEsQ0FBQyxDQUFELENBSC9DO0FBQUEsTUFHV0csVUFIWDtBQUFBLE1BR3NCQyxhQUh0Qjs7QUFBQSxtQkFJeUNKLHNEQUFRLENBQUMsQ0FBRCxDQUpqRDtBQUFBLE1BSVdLLFdBSlg7QUFBQSxNQUl1QkMsY0FKdkI7O0FBQUEsbUJBS21DTixzREFBUSxDQUFDLENBQUQsQ0FMM0M7QUFBQSxNQUtXTyxRQUxYO0FBQUEsTUFLb0JDLFdBTHBCOztBQUFBLG1CQU1pQ1Isc0RBQVEsQ0FBQyxDQUFELENBTnpDO0FBQUEsTUFNV1MsT0FOWDtBQUFBLE1BTW1CQyxVQU5uQjs7QUFBQSxtQkFPaUNWLHNEQUFRLENBQUMsQ0FBRCxDQVB6QztBQUFBLE1BT1dXLE9BUFg7QUFBQSxNQU9tQkMsVUFQbkI7O0FBQUEsbUJBUStCWixzREFBUSxDQUFDLENBQUQsQ0FSdkM7QUFBQSxNQVFXYSxN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ZC40ZDY4MjcxZWMxZjk3MWI1MDc0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhVXNiIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgXHJcbiAgICBmYU1vYmlsZSxcclxuICAgIGZhQm9vayxcclxuICAgIGZhVGludFNsYXNoLFxyXG4gICAgZmFQZW5jaWxBbHQsXHJcbiAgICBmYUxlYWYsXHJcbiAgICBmYUxhcHRvcCxcclxuICAgIGZhU3VpdGNhc2VSb2xsaW5nLFxyXG4gICAgZmFVc2Vyc1NsYXNoLFxyXG4gICAgZmFQZXJzb25Cb290aCxcclxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCBGZXRjaEZ1bmN0aW9uIGZyb20gJy4uLy4uL0FwaS1DYWxsL0FwaS1jYWxsLWZ1bmN0aW9uJztcclxuaW1wb3J0IExvYWRpbmdWaWV3IGZyb20gJy4uLy4uL0xvYWRpbmcvTG9hZGluZydcclxuXHJcblxyXG5mdW5jdGlvbiBCb3hlcyhwcm9wcylcclxue1xyXG4gICAgY29uc3Qge2RhdGEsIGxvYWRpbmcsIGFycmF5Tm9tYnJlc0ltZ30gPSBGZXRjaEZ1bmN0aW9uKCdhcGlSZWdpc3Ryb3MnLCBwcm9wcy5jYW1wYW5hU2VsZWN0ZWQpO1xyXG4gICAgY29uc3QgW3BlckJvbHNvLHNldFBlckJvbHNvXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcGVyQm90ZWxsYSxzZXRQZXJCb3RlbGxhXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCBbcGVyTGFwaWNlcm8sc2V0UGVyTGFwaWNlcm9dID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtwZXJDb21wdSxzZXRQZXJDb21wdV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3BlckNlbHUsc2V0UGVyQ2VsdV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW3BlckJvb2ssc2V0UGVyQm9va10gPSB1c2VTdGF0ZSgwKSAgXHJcbiAgICBjb25zdCBbcGVyRkRQLHNldFBlckZEUF0gPSB1c2VTdGF0ZSgwKSBcclxuICAgIGNvbnN0IFtwZXJNdWx0aVBlcixzZXRQZXJNdWx0aVBlcl0gPSB1c2VTdGF0ZSgwKSBcclxuXHJcbiAgICBsZXQgY2FtcGFuYSA9ICcnXHJcbiAgICB2YXIgY29udGFkb3JCb2xzb1ZhckdQID0gMDtcclxuICAgIHZhciBjb250YWRvckJvdGVsbGFWYXJHUCA9IDA7XHJcbiAgICB2YXIgY29udGFkb3JMYXBpY2Vyb1ZhckdQID0gMDtcclxuICAgIHZhciBjb250YWRvckNvbXB1VmFyR1AgPSAwO1xyXG4gICAgdmFyIGNvbnRhZG9yQ2VsdVZhckdQID0gMDtcclxuICAgIHZhciBjb250YWRvckJvb2tzVmFyR1AgPSAwO1xyXG4gICAgdmFyIGNvbnRhZG9yRkRQVmFyID0gMDtcclxuICAgIHZhciBjb250YWRvck11bHRpUGVyVmFyID0gMDtcclxuXHJcbiAgICBsZXQgcGVyY2VuQm9sc28gPSAwO1xyXG4gICAgbGV0IHBlcmNlbkJvdGVsbGEgPSAwO1xyXG4gICAgbGV0IHBlcmNlbkxhcGljZXJvID0gMDtcclxuICAgIGxldCBwZXJjZW5Db21wdSA9IDA7XHJcbiAgICBsZXQgcGVyY2VuQ2VsdSA9IDA7XHJcbiAgICBsZXQgcGVyY2VuQm9vayA9IDA7XHJcbiAgICBsZXQgcGVyY2VuRkRQID0gMDtcclxuICAgIGxldCBwZXJjZW5NdWx0aVBlciA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0IFtjYXJnb0RhdGEsIHNldENhcmdvRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2NhcmdvSW5mb0Rhc2gsIHNldENhcmdvSW5mb0Rhc2hdID0gdXNlU3RhdGUodHJ1ZSkgICAgXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoIWxvYWRpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBzZXRDYXJnb0luZm9EYXNoKHRydWUpXHJcbiAgICAgICAgICAgIGRhdGEubWFwKGVsZW1lbnRvID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRvLm9iamV0byAhPT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50by5vYmpldG8gPT09IFwiQm9sc29cIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhZG9yQm9sc29WYXJHUCsrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZWxlbWVudG8ub2JqZXRvID09PSBcIkJvdGVsbGFcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhZG9yQm90ZWxsYVZhckdQKytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihlbGVtZW50by5vYmpldG8gPT09IFwiTGFwaWNlcm9cIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhZG9yTGFwaWNlcm9WYXJHUCsrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZWxlbWVudG8ub2JqZXRvID09PSBcIlZhcmlvcyBjb21wdXRhZG9yZXNcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhZG9yQ29tcHVWYXJHUCsrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoZWxlbWVudG8ub2JqZXRvID09PSBcIkNlbHVsYXJcIiB8fCBlbGVtZW50by5vYmpldG8gPT09IFwiY2VsdWxhclwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFkb3JDZWx1VmFyR1ArK1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKGVsZW1lbnRvLm9iamV0byA9PT0gXCJBYmFuZG9ubyBwdWVzdG9cIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhZG9yRkRQVmFyKytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihlbGVtZW50by5vYmpldG8gPT09IFwiTXVsdGlwbGVzIFBlcnNvbmFzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWRvck11bHRpUGVyVmFyKytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFkb3JCb29rc1ZhckdQKytcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FyZ29EYXRhKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICkgXHJcblxyXG4gICAgICAgICAgICB2YXIgdG90YWxBbGVydHMgPSBjb250YWRvckJvbHNvVmFyR1ArY29udGFkb3JCb3RlbGxhVmFyR1ArY29udGFkb3JMYXBpY2Vyb1ZhckdQK2NvbnRhZG9yQ29tcHVWYXJHUCtjb250YWRvckNlbHVWYXJHUCtjb250YWRvckJvb2tzVmFyR1ArY29udGFkb3JGRFBWYXIrY29udGFkb3JNdWx0aVBlclZhcjtcclxuICAgICAgICAgICAgcGVyY2VuQm9sc28gPSAoY29udGFkb3JCb2xzb1ZhckdQL3RvdGFsQWxlcnRzKSAqIDEwMDtcclxuICAgICAgICAgICAgcGVyY2VuQm90ZWxsYSA9IChjb250YWRvckJvdGVsbGFWYXJHUC90b3RhbEFsZXJ0cykgKiAxMDA7XHJcbiAgICAgICAgICAgIHBlcmNlbkxhcGljZXJvID0gKGNvbnRhZG9yTGFwaWNlcm9WYXJHUC90b3RhbEFsZXJ0cykgKiAxMDA7XHJcbiAgICAgICAgICAgIHBlcmNlbkNvbXB1ID0gKGNvbnRhZG9yQ29tcHVWYXJHUC90b3RhbEFsZXJ0cykgKiAxMDA7XHJcbiAgICAgICAgICAgIHBlcmNlbkNlbHUgPSAoY29udGFkb3JDZWx1VmFyR1AvdG90YWxBbGVydHMpICogMTAwO1xyXG4gICAgICAgICAgICBwZXJjZW5Cb29rID0gKGNvbnRhZG9yQm9va3NWYXJHUC90b3RhbEFsZXJ0cykgKiAxMDA7XHJcbiAgICAgICAgICAgIHBlcmNlbkZEUCA9IChjb250YWRvckZEUFZhci90b3RhbEFsZXJ0cykgKiAxMDA7XHJcbiAgICAgICAgICAgIHBlcmNlbk11bHRpUGVyID0gKGNvbnRhZG9yTXVsdGlQZXJWYXIvdG90YWxBbGVydHMpICogMTAwO1xyXG5cclxuICAgICAgICAgICAgc2V0UGVyQm9sc28ocGVyY2VuQm9sc28pO1xyXG4gICAgICAgICAgICBzZXRQZXJCb3RlbGxhKHBlcmNlbkJvdGVsbGEpO1xyXG4gICAgICAgICAgICBzZXRQZXJMYXBpY2VybyhwZXJjZW5MYXBpY2Vybyk7XHJcbiAgICAgICAgICAgIHNldFBlckNvbXB1KHBlcmNlbkNvbXB1KTtcclxuICAgICAgICAgICAgc2V0UGVyQ2VsdShwZXJjZW5DZWx1KTtcclxuICAgICAgICAgICAgc2V0UGVyQm9vayhwZXJjZW5Cb29rKTtcclxuICAgICAgICAgICAgc2V0UGVyRkRQKHBlcmNlbkZEUCk7XHJcbiAgICAgICAgICAgIHNldFBlck11bHRpUGVyKHBlcmNlbk11bHRpUGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICB9LCBbbG9hZGluZywgcHJvcHNdKVxyXG5cclxuICAgICAgICBsZXQgaW5mbyA9ICFjYXJnb0luZm9EYXNoID8gW10gOlxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFNb2JpbGUsXHJcbiAgICAgICAgICAgICAgICByYXRlOiBwZXJDZWx1LnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICBhbGVydE5hbWU6ICdDZWx1bGFyJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYUJvb2ssXHJcbiAgICAgICAgICAgICAgICByYXRlOiBwZXJCb29rLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICBhbGVydE5hbWU6ICdMaWJybydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFUaW50U2xhc2gsXHJcbiAgICAgICAgICAgICAgICByYXRlOiBwZXJCb3RlbGxhLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICBhbGVydE5hbWU6ICdCb3RlbGxhJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiBmYVBlbmNpbEFsdCxcclxuICAgICAgICAgICAgICAgIHJhdGU6IHBlckxhcGljZXJvLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICBhbGVydE5hbWU6ICdMYXBpY2VybydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFMYXB0b3AsXHJcbiAgICAgICAgICAgICAgICByYXRlOiBwZXJDb21wdS50b0ZpeGVkKDEpLFxyXG4gICAgICAgICAgICAgICAgYWxlcnROYW1lOiAnQ29tcHV0YWRvcidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFTdWl0Y2FzZVJvbGxpbmcsXHJcbiAgICAgICAgICAgICAgICByYXRlOiBwZXJCb2xzby50b0ZpeGVkKDEpLFxyXG4gICAgICAgICAgICAgICAgYWxlcnROYW1lOiAnQm9sc28nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGljb246IGZhUGVyc29uQm9vdGgsXHJcbiAgICAgICAgICAgICAgICByYXRlOiBwZXJGRFAudG9GaXhlZCgxKSxcclxuICAgICAgICAgICAgICAgIGFsZXJ0TmFtZTogJ0Z1ZXJhIERlIFB1ZXN0bydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWNvbjogZmFVc2Vyc1NsYXNoICxcclxuICAgICAgICAgICAgICAgIHJhdGU6IHBlck11bHRpUGVyLnRvRml4ZWQoMSksXHJcbiAgICAgICAgICAgICAgICBhbGVydE5hbWU6ICdNw7psdGlwbGVzIFBlcnNvbmFzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgYm94Q29pbnRhaW5lciA9ICh2YWxvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoICFjYXJnb0luZm9EYXNoID8gIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udEljb25Cb3hBbmRUZXh0UGVyQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udEljb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gXCJpY29uQm94ZXNcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiNHhcIiBjb2xvcj1cIiM0NTQ1NDVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRUZXh0UGVyQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0b0JveGVzUGVyXCI+Li4uPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250VGV4dEJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0b0JveGVzXCI+Li4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgIFxyXG4gICAgICAgICAgICA6XHJcblxyXG4gICAgICAgICAgICB2YWxvci5yYXRlID09PSBcIk5hTlwiID8gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250SWNvbkJveEFuZFRleHRQZXJCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250SWNvbkJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXt2YWxvci5pY29ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImljb25Cb3hlc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCI0eFwiIGNvbG9yPVwiIzQ1NDU0NVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFRleHRQZXJCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRvQm94ZXNQZXJcIj4gMC4wJTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFRleHRCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG9Cb3hlc1wiPiB7dmFsb3IuYWxlcnROYW1lfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRJY29uQm94QW5kVGV4dFBlckJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRJY29uQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3ZhbG9yLmljb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiaWNvbkJveGVzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjR4XCIgY29sb3I9XCIjNDU0NTQ1XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250VGV4dFBlckJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG9Cb3hlc1BlclwiPiB7dmFsb3IucmF0ZX0lPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250VGV4dEJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0b0JveGVzXCI+IHt2YWxvci5hbGVydE5hbWV9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKCAhY2FyZ29JbmZvRGFzaCA/ICcnIDogbG9hZGluZyA/IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udEljb25Cb3hBbmRUZXh0UGVyQm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udEljb25Cb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiaWNvbkJveGVzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjR4XCIgY29sb3I9XCIjNDU0NTQ1XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250VGV4dFBlckJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG9Cb3hlc1BlclwiPi4uLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFRleHRCb3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dG9Cb3hlc1wiPi4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICBcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tkaXNwbGF5IDogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudCA6ICdjZW50ZXInLCBmbGV4V3JhcCA6ICd3cmFwJ319PlxyXG4gICAgICAgICAgICAgICAge2luZm8ubWFwKGFsZXJ0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxlcnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3ttYXJnaW5MZWZ0IDogJzElJ319ID57Ym94Q29pbnRhaW5lcihhbGVydCl9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveGVzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=