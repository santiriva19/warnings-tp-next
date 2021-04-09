webpackHotUpdate_N_E("pages/registro",{

/***/ "./src/Components/dashboard/Carousel/Slider.js":
/*!*****************************************************!*\
  !*** ./src/Components/dashboard/Carousel/Slider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
/* harmony import */ var _Loading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Loading/Loading */ "./src/Components/Loading/Loading.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");


var _jsxFileName = "C:\\Users\\rivadeneiradelgado.5.TPCO\\Documents\\Proyectos\\warnings-tp-next-2\\src\\Components\\dashboard\\Carousel\\Slider.js",
    _s = $RefreshSig$();







function Slider(props) {
  _s();

  var _this = this;

  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var token = cookies.get('user_token');

  var variar = function variar() {
    props.setMostrar(false);
  };

  var split = props.todasFotos.split(',');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      arrayImagesRoute = _useState[0],
      setArrayImagesRoute = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      cargo = _useState2[0],
      setCargo = _useState2[1];

  var images = [];
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var arrayHelper = [];
    split.map(function (s) {
      var dir = "http://10.151.233.152:3555/node/video/api/get-file2/".concat(s);
      var ax = axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(dir, {
        headers: {
          'user_token': token
        },
        body: {
          key: "holabri"
        }
      });
      arrayHelper.push(ax);
    });

    if (cargo) {
      doAxios(arrayHelper);
    }
  });

  var doAxios = function doAxios(direccion) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.all(direccion).then(axios__WEBPACK_IMPORTED_MODULE_4___default.a.spread(function () {
      for (var _len = arguments.length, responses = new Array(_len), _key = 0; _key < _len; _key++) {
        responses[_key] = arguments[_key];
      }

      for (var i = 0; i < direccion.length; i++) {
        images.push(responses[i].data);

        if (i === direccion.length - 1) {
          var response = fetch('http://10.151.233.152:3555/node/video/api/update/');

          if (response.status === 204) {// console.log('Error 204')
          } else {
              try {// console.log("Se eliminó")
              } catch (err) {
                console.log(err);
              }
            }
        }
      }
    }))["catch"](function (errors) {
      console.log(errors);
    })["finally"](function () {
      if (cargo) {
        setArrayImagesRoute(images);
        setCargo(false);
      }
    });
  };

  if (arrayImagesRoute !== []) {
    return cargo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "verFotosDiv",
        id: "verFotosDiv",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          style: {
            color: "white",
            fontSize: 42,
            textAlign: 'right',
            marginLeft: '81%',
            fontFamily: 'Quicksand',
            fontWeight: 600
          },
          onClick: variar,
          children: "x"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(nuka_carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: {
            height: '70%',
            width: '43%',
            borderRadius: 15
          },
          children: arrayImagesRoute.map(function (img) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              style: {
                width: '100%'
              },
              src: img
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }, this);
  } else {
    return null;
  }
}

_s(Slider, "MbABPDagwXgncWwDf0WfHfY3A9k=");

_c = Slider;
/* harmony default export */ __webpack_exports__["default"] = (Slider);

var _c;

$RefreshReg$(_c, "Slider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvZGFzaGJvYXJkL0Nhcm91c2VsL1NsaWRlci5qcyJdLCJuYW1lcyI6WyJTbGlkZXIiLCJwcm9wcyIsImNvb2tpZXMiLCJDb29raWVzIiwidG9rZW4iLCJnZXQiLCJ2YXJpYXIiLCJzZXRNb3N0cmFyIiwic3BsaXQiLCJ0b2Rhc0ZvdG9zIiwidXNlU3RhdGUiLCJhcnJheUltYWdlc1JvdXRlIiwic2V0QXJyYXlJbWFnZXNSb3V0ZSIsImNhcmdvIiwic2V0Q2FyZ28iLCJpbWFnZXMiLCJ1c2VFZmZlY3QiLCJhcnJheUhlbHBlciIsIm1hcCIsInMiLCJkaXIiLCJheCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJib2R5Iiwia2V5IiwicHVzaCIsImRvQXhpb3MiLCJkaXJlY2Npb24iLCJhbGwiLCJ0aGVuIiwic3ByZWFkIiwicmVzcG9uc2VzIiwiaSIsImxlbmd0aCIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUMsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFDRDtBQUFBOztBQUFBOztBQUNFLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksWUFBWixDQUFaOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQ2Y7QUFDRUwsU0FBSyxDQUFDTSxVQUFOLENBQWlCLEtBQWpCO0FBQ0QsR0FIRDs7QUFJQSxNQUFJ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QU1FLHFFQUFDLHFEQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQ0w0QyxrQkFBTSxFQUFFLEtBREg7QUFFTEMsaUJBQUssRUFBRSxLQUZGO0FBR0xDLHdCQUFZLEVBQUc7QUFIVixXQURUO0FBQUEsb0JBT0d6QyxnQkFBZ0IsQ0FBQ08sR0FBakIsQ0FBcUIsVUFBQW1DLEdBQUcsRUFBRTtBQUN6QixnQ0FBTztBQUFLLG1CQUFLLEVBQUk7QUFBQ0YscUJBQUssRUFBRTtBQUFSLGVBQWQ7QUFBK0IsaUJBQUcsRUFBRUU7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELFdBRkE7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXVCRCxHQXhCRCxNQXlCSTtBQUNGLFdBQU8sSUFBUDtBQUNEO0FBR0Y7O0dBN0dTckQsTTs7S0FBQUEsTTtBQThHS0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cm8uZWFhN2EyYzEyZmJiMDY3NDJiNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XHJcbmltcG9ydCBMb2FkaW5nVmlldyBmcm9tICcuLi8uLi9Mb2FkaW5nL0xvYWRpbmcnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAndW5pdmVyc2FsLWNvb2tpZSdcclxuXHJcbiBmdW5jdGlvbiBTbGlkZXIocHJvcHMpIFxyXG57XHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCkgXHJcbiAgbGV0IHRva2VuID0gY29va2llcy5nZXQoJ3VzZXJfdG9rZW4nKSAgICAgICAgICAgIFxyXG5cclxuICBjb25zdCB2YXJpYXIgPSAoKSA9PlxyXG4gIHtcclxuICAgIHByb3BzLnNldE1vc3RyYXIoZmFsc2UpXHJcbiAgfVxyXG4gIGxldCBzcGxpdCA9IHByb3BzLnRvZGFzRm90b3Muc3BsaXQoJywnKVxyXG4gIGNvbnN0IFthcnJheUltYWdlc1JvdXRlLCBzZXRBcnJheUltYWdlc1JvdXRlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjYXJnbywgc2V0Q2FyZ29dID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdmFyIGltYWdlcyA9IFtdXHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgbGV0IGFycmF5SGVscGVyID0gW11cclxuXHJcbiAgICBzcGxpdC5tYXAoKHMpPT57XHJcbiAgICAgIGNvbnN0IGRpciA9IGBodHRwOi8vMTAuMTUxLjIzMy4xNTI6MzU1NS9ub2RlL3ZpZGVvL2FwaS9nZXQtZmlsZTIvJHtzfWBcclxuICAgICAgY29uc3QgYXggPSBheGlvcy5wb3N0KGRpciwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsndXNlcl90b2tlbic6IHRva2VufSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSA6IFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleSA6IFwiaG9sYWJyaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICBcclxuICAgICAgYXJyYXlIZWxwZXIucHVzaChheClcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGlmKGNhcmdvKXtcclxuICAgICAgZG9BeGlvcyhhcnJheUhlbHBlcilcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBkb0F4aW9zID0gKGRpcmVjY2lvbikgPT4ge1xyXG4gICAgYXhpb3MuYWxsKGRpcmVjY2lvbikudGhlbihheGlvcy5zcHJlYWQoKC4uLnJlc3BvbnNlcykgPT4ge1xyXG4gICAgICBmb3IodmFyIGk9MDsgaTxkaXJlY2Npb24ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGltYWdlcy5wdXNoKHJlc3BvbnNlc1tpXS5kYXRhKVxyXG4gICAgICAgIGlmKGkgPT09IGRpcmVjY2lvbi5sZW5ndGgtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGZldGNoKCAnaHR0cDovLzEwLjE1MS4yMzMuMTUyOjM1NTUvbm9kZS92aWRlby9hcGkvdXBkYXRlLycgKTtcclxuICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0Vycm9yIDIwNCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZSBlbGltaW7Ds1wiKVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGNhdGNoKGVycilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pKVxyXG4gICAgLmNhdGNoKGVycm9ycyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcclxuICAgIH0pXHJcbiAgICAuZmluYWxseSgoKT0+e1xyXG4gICAgICBpZihjYXJnbyl7XHJcbiAgICAgICAgc2V0QXJyYXlJbWFnZXNSb3V0ZShpbWFnZXMpXHJcbiAgICAgICAgc2V0Q2FyZ28oZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuXHJcblxyXG4gIGlmKGFycmF5SW1hZ2VzUm91dGUgIT09IFtdKXtcclxuICAgIHJldHVybiAoICBjYXJnbyA/IDxMb2FkaW5nVmlldy8+IDpcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lID0gXCJ2ZXJGb3Rvc0RpdlwiXHJcbiAgICAgICAgICBpZCA9ICd2ZXJGb3Rvc0RpdidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGEgc3R5bGUgPSB7e2NvbG9yIDogXCJ3aGl0ZVwiLCBmb250U2l6ZTo0MiwgdGV4dEFsaWduIDogJ3JpZ2h0JywgbWFyZ2luTGVmdDogJzgxJScsIGZvbnRGYW1pbHk6ICdRdWlja3NhbmQnLCBmb250V2VpZ2h0OiA2MDB9fSBvbkNsaWNrID0ge3Zhcmlhcn0gPng8L2E+XHJcblxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNzAlJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNDMlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cyA6IDE1XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHthcnJheUltYWdlc1JvdXRlLm1hcChpbWc9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHN0eWxlID0ge3t3aWR0aDogJzEwMCUnfX0gc3JjPXtpbWd9Lz5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgICBcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==