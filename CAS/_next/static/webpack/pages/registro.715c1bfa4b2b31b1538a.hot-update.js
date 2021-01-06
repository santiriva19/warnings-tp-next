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

          if (response.status === 204) {
            console.log('Error 204');
          } else {
            try {
              console.log("Se eliminó");
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
            width: '80%',
            borderRadius: 15
          },
          children: arrayImagesRoute.map(function (img) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvZGFzaGJvYXJkL0Nhcm91c2VsL1NsaWRlci5qcyJdLCJuYW1lcyI6WyJTbGlkZXIiLCJwcm9wcyIsImNvb2tpZXMiLCJDb29raWVzIiwidG9rZW4iLCJnZXQiLCJ2YXJpYXIiLCJzZXRNb3N0cmFyIiwic3BsaXQiLCJ0b2Rhc0ZvdG9zIiwidXNlU3RhdGUiLCJhcnJheUltYWdlc1JvdXRlIiwic2V0QXJyYXlJbWFnZXNSb3V0ZSIsImNhcmdvIiwic2V0Q2FyZ28iLCJpbWFnZXMiLCJ1c2VFZmZlY3QiLCJhcnJheUhlbHBlciIsIm1hcCIsInMiLCJkaXIiLCJheCIsImF4aW9zIiwicG9zdCIsImhlYWRlcnMiLCJib2R5Iiwia2V5IiwicHVzaCIsImRvQXhpb3MiLCJkaXJlY2Npb24iLCJhbGwiLCJ0aGVuIiwic3ByZWFkIiwicmVzcG9uc2VzIiwiaSIsImxlbmd0aCIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9ycyIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5MZWZ0IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUMsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFDRDtBQUFBOztBQUFBOztBQUNFLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyx3REFBSixFQUFoQjtBQUNBLE1BQUlDLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVksWUFBWixDQUFaOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQ2Y7QUFDRUwsU0FBSyxDQUFDTSxVQUFOLENBQWlCLEtBQWpCO0FBQ0QsR0FIRDs7QUFJQSxNQUFJ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aUJBQU8sRUFBSTNDLE1BQXpJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBTUUscUVBQUMscURBQUQ7QUFDRSxlQUFLLEVBQUU7QUFDTDRDLGtCQUFNLEVBQUUsS0FESDtBQUVMQyxpQkFBSyxFQUFFLEtBRkY7QUFHTEMsd0JBQVksRUFBRztBQUhWLFdBRFQ7QUFBQSxvQkFPR3pDLGdCQUFnQixDQUFDTyxHQUFqQixDQUFxQixVQUFBbUMsR0FBRyxFQUFFO0FBQ3pCLGdDQUFPO0FBQUssaUJBQUcsRUFBRUE7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0QsV0FGQTtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBdUJELEdBeEJELE1BeUJJO0FBQ0YsV0FBTyxJQUFQO0FBQ0Q7QUFHRjs7R0E3R1NyRCxNOztLQUFBQSxNO0FBOEdLQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Ryby43MTVjMWJmYTRiMmIzMWIxNTM4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcclxuaW1wb3J0IExvYWRpbmdWaWV3IGZyb20gJy4uLy4uL0xvYWRpbmcvTG9hZGluZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xyXG5cclxuIGZ1bmN0aW9uIFNsaWRlcihwcm9wcykgXHJcbntcclxuICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKSBcclxuICBsZXQgdG9rZW4gPSBjb29raWVzLmdldCgndXNlcl90b2tlbicpICAgICAgICAgICAgXHJcblxyXG4gIGNvbnN0IHZhcmlhciA9ICgpID0+XHJcbiAge1xyXG4gICAgcHJvcHMuc2V0TW9zdHJhcihmYWxzZSlcclxuICB9XHJcbiAgbGV0IHNwbGl0ID0gcHJvcHMudG9kYXNGb3Rvcy5zcGxpdCgnLCcpXHJcbiAgY29uc3QgW2FycmF5SW1hZ2VzUm91dGUsIHNldEFycmF5SW1hZ2VzUm91dGVdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2NhcmdvLCBzZXRDYXJnb10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICB2YXIgaW1hZ2VzID0gW11cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgYXJyYXlIZWxwZXIgPSBbXVxyXG5cclxuICAgIHNwbGl0Lm1hcCgocyk9PntcclxuICAgICAgY29uc3QgZGlyID0gYGh0dHA6Ly8xMC4xNTEuMjMzLjE1MjozNTU1L25vZGUvdmlkZW8vYXBpL2dldC1maWxlMi8ke3N9YFxyXG4gICAgICBjb25zdCBheCA9IGF4aW9zLnBvc3QoZGlyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyd1c2VyX3Rva2VuJzogdG9rZW59LCBcclxuICAgICAgICAgICAgICAgICAgICBib2R5IDogXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5IDogXCJob2xhYnJpXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICBhcnJheUhlbHBlci5wdXNoKGF4KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgaWYoY2FyZ28pe1xyXG4gICAgICBkb0F4aW9zKGFycmF5SGVscGVyKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGRvQXhpb3MgPSAoZGlyZWNjaW9uKSA9PiB7XHJcbiAgICBheGlvcy5hbGwoZGlyZWNjaW9uKS50aGVuKGF4aW9zLnNwcmVhZCgoLi4ucmVzcG9uc2VzKSA9PiB7XHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPGRpcmVjY2lvbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaW1hZ2VzLnB1c2gocmVzcG9uc2VzW2ldLmRhdGEpXHJcbiAgICAgICAgaWYoaSA9PT0gZGlyZWNjaW9uLmxlbmd0aC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goICdodHRwOi8vMTAuMTUxLjIzMy4xNTI6MzU1NS9ub2RlL3ZpZGVvL2FwaS91cGRhdGUvJyApO1xyXG4gICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgMjA0JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRyeVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlIGVsaW1pbsOzXCIpXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgY2F0Y2goZXJyKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSkpXHJcbiAgICAuY2F0Y2goZXJyb3JzID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgfSlcclxuICAgIC5maW5hbGx5KCgpPT57XHJcbiAgICAgIGlmKGNhcmdvKXtcclxuICAgICAgICBzZXRBcnJheUltYWdlc1JvdXRlKGltYWdlcylcclxuICAgICAgICBzZXRDYXJnbyhmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgfVxyXG4gIFxyXG5cclxuXHJcbiAgaWYoYXJyYXlJbWFnZXNSb3V0ZSAhPT0gW10pe1xyXG4gICAgcmV0dXJuICggIGNhcmdvID8gPExvYWRpbmdWaWV3Lz4gOlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWUgPSBcInZlckZvdG9zRGl2XCJcclxuICAgICAgICAgIGlkID0gJ3ZlckZvdG9zRGl2J1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YSBzdHlsZSA9IHt7Y29sb3IgOiBcIndoaXRlXCIsIGZvbnRTaXplOjQyLCB0ZXh0QWxpZ24gOiAncmlnaHQnLCBtYXJnaW5MZWZ0OiAnODElJywgZm9udEZhbWlseTogJ1F1aWNrc2FuZCcsIGZvbnRXZWlnaHQ6IDYwMH19IG9uQ2xpY2sgPSB7dmFyaWFyfSA+eDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzIDogMTVcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FycmF5SW1hZ2VzUm91dGUubWFwKGltZz0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPXtpbWd9Lz5cclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbiAgICBcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==