webpackHotUpdate_N_E("pages/index",{

/***/ "./src/Components/login/modal-login.js":
/*!*********************************************!*\
  !*** ./src/Components/login/modal-login.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalLogin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Api_Call_Api_call_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Api-Call/Api-call-function */ "./src/Components/Api-Call/Api-call-function.js");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var react_clear_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-clear-cache */ "./node_modules/react-clear-cache/dist/index.es.js");


var _jsxFileName = "C:\\Users\\rivadeneiradelgado.5.TPCO\\Documents\\Proyectos\\warnings-tp-next-2\\src\\Components\\login\\modal-login.js",
    _s = $RefreshSig$();

 // import Fondo from '../../assets/img/fondoInicio4.png';
// import Logo from 'https:/logini.blogs.es/6f44dd/google-2015-1/450_1000.jpg';








function ModalLogin() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      eliminaDatosPrevios = _useState[0],
      setEliminaDatosP = _useState[1];

  var _useClearCacheCtx = Object(react_clear_cache__WEBPACK_IMPORTED_MODULE_8__["useClearCacheCtx"])(),
      isLatestVersion = _useClearCacheCtx.isLatestVersion,
      emptyCacheStorage = _useClearCacheCtx.emptyCacheStorage;

  var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_7__["default"]();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    cookies.remove("user_token");
    sessionStorage.removeItem("ccms");
    sessionStorage.removeItem("encriptado");
    sessionStorage.removeItem("tiempoDeEntrada");
    setEliminaDatosP(true);
  }, []); // const [ ccms, setCcms ] = useState('rivadeneiradelgado.5');

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      ccms = _useState2[0],
      setCcms = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      pass = _useState3[0],
      setPass = _useState3[1]; // const [ pass, setPass ] = useSta}te('craJ9yin');


  var _FetchFunction = Object(_Api_Call_Api_call_function__WEBPACK_IMPORTED_MODULE_6__["default"])('apiVerifiPermisoUsuario', ccms),
      data = _FetchFunction.data,
      loading = _FetchFunction.loading; // const [ pass, setPass ] = useState('');


  var handleSubmit = function handleSubmit(evt) {
    var numeroDeError = "";
    var tokenCifrado = '';
    evt.preventDefault();
    var credentials = {
      username: ccms,
      password: pass,
      typeAut: 3
    };
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('https://ccmsautomated.teleperformance.co/login', credentials).then(function (res) {
      console.log(res.data, "data");
      numeroDeError = res.data.error.codError + "";

      if (numeroDeError === "0") {
        var token = "";
        var dataFromApi = null;
        dataFromApi = loading ? '' : data.datos;

        if (data.error === 'Invalid token') {// console.log("Error en la conexión")
        } else {
          token = loading ? "" : data.token;
        }

        if (!(dataFromApi === undefined) || !(dataFromApi === 'nodata') && token !== "") {
          if (token === "") {
            alert('Error en la conexión');
          } else {
            var _tokenCifrado = md5__WEBPACK_IMPORTED_MODULE_5___default()(token);

            sessionStorage.setItem('ccms', ccms);
            sessionStorage.setItem("encriptado", _tokenCifrado);
            sessionStorage.setItem("tiempoDeEntrada", new Date().getTime());
            cookies.set('user_token', token);

            if (sessionStorage.getItem("link") === undefined || sessionStorage.length === 0 || sessionStorage.getItem("link") === null) {
              window.location.href = "/CWS/dashboard";
            } else {
              window.location.href = "/CWS/" + sessionStorage.getItem("link");
            }
          }
        } else {
          alert("Lo sentimos no tiene permisos para acceder");
        }
      } else {
        alert("Contraseña o usuario incorrecto");
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: styles.cuerpo,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "containerComplement",
      style: styles.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        style: {
          marginBottom: '4%'
        },
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLock"],
        size: "3x",
        color: "#8F2A92"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "textos",
        children: "S\xF3lo personal autorizado"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        placeholder: "Username.5",
        type: "text",
        className: "customInputs",
        value: ccms,
        onChange: function onChange(e) {
          return setCcms(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        id: "passText",
        style: {
          marginTop: '4%'
        },
        placeholder: "Password",
        type: "password",
        value: pass,
        className: "customInputs",
        onChange: function onChange(e) {
          return setPass(e.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "customButtons",
          onClick: handleSubmit,
          children: "Ingresar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 9
  }, this);
}

_s(ModalLogin, "OHFMvQzXGNnS2TRKMG7woBUEM64=", false, function () {
  return [react_clear_cache__WEBPACK_IMPORTED_MODULE_8__["useClearCacheCtx"]];
});

_c = ModalLogin;
var styles = {
  cuerpo: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(https://i.ibb.co/CMcNDcz/fondo-Inicio4.png)',
    backgroundSize: 'cover'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA'
  },
  customInputs: {
    fontFamily: 'quicksand',
    textAlign: 'center'
  }
};

var _c;

$RefreshReg$(_c, "ModalLogin");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvbG9naW4vbW9kYWwtbG9naW4uanMiXSwibmFtZXMiOlsiTW9kYWxMb2dpbiIsInVzZVN0YXRlIiwiZWxpbWluYURhdG9zUHJldmlvcyIsInNldEVsaW1pbmFEYXRvc1AiLCJ1c2VDbGVhckNhY2hlQ3R4IiwiaXNMYXRlc3RWZXJzaW9uIiwiZW1wdHlDYWNoZVN0b3JhZ2UiLCJjb29raWVzIiwiQ29va2llcyIsInVzZUVmZmVjdCIsInJlbW92ZSIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImNjbXMiLCJzZXRDY21zIiwicGFzcyIsInNldFBhc3MiLCJGZXRjaEZ1bmN0aW9uIiwiZGF0YSIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJldnQiLCJudW1lcm9EZUVycm9yIiwidG9rZW5DaWZyYWRvIiwicHJldmVudERlZmF1bHQiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0eXBlQXV0IiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvZEVycm9yIiwidG9rZW4iLCJkYXRhRnJvbUFwaSIsImRhdG9zIiwidW5kZWZpbmVkIiwiYWxlcnQiLCJtZDUiLCJzZXRJdGVtIiwiRGF0ZSIsImdldFRpbWUiLCJzZXQiLCJnZXRJdGVtIiwibGVuZ3RoIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3R5bGVzIiwiY3VlcnBvIiwiY29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwiZmFMb2NrIiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwiY3VzdG9tSW5wdXRzIiwiZm9udEZhbWls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QUlMQyxtQkFBZSxFQUFHLGlEQUpiO0FBS0xDLGtCQUFjLEVBQUc7QUFMWixHQUZFO0FBU1hYLFdBQVMsRUFBRztBQUNSTyxXQUFPLEVBQUUsTUFERDtBQUVSSyxpQkFBYSxFQUFHLFFBRlI7QUFHUkMsa0JBQWMsRUFBRSxRQUhSO0FBSVJDLGNBQVUsRUFBRyxRQUpMO0FBS1JDLG1CQUFlLEVBQUc7QUFMVixHQVREO0FBZ0JYQyxjQUFZLEVBQUU7QUFDVkMsY0FBVSxFQUFHLFdBREg7QUFFVkMsYUFBUyxFQUFHO0FBRkY7QUFoQkgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOWMzYzNjMjU1MGNmZjZkYjQxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBGb25kbyBmcm9tICcuLi8uLi9hc3NldHMvaW1nL2ZvbmRvSW5pY2lvNC5wbmcnO1xyXG4vLyBpbXBvcnQgTG9nbyBmcm9tICdodHRwczovbG9naW5pLmJsb2dzLmVzLzZmNDRkZC9nb29nbGUtMjAxNS0xLzQ1MF8xMDAwLmpwZyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IHsgZmFMb2NrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBtZDUgZnJvbSAnbWQ1J1xyXG5pbXBvcnQgRmV0Y2hGdW5jdGlvbiBmcm9tICcuLi9BcGktQ2FsbC9BcGktY2FsbC1mdW5jdGlvbic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQgeyBDbGVhckNhY2hlUHJvdmlkZXIsIHVzZUNsZWFyQ2FjaGVDdHggfSBmcm9tICdyZWFjdC1jbGVhci1jYWNoZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxMb2dpbiAgKCkgXHJcbntcclxuICAgIGNvbnN0IFtlbGltaW5hRGF0b3NQcmV2aW9zLCBzZXRFbGltaW5hRGF0b3NQXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgeyBpc0xhdGVzdFZlcnNpb24sIGVtcHR5Q2FjaGVTdG9yYWdlIH0gPSB1c2VDbGVhckNhY2hlQ3R4KCk7XHJcblxyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKClcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgY29va2llcy5yZW1vdmUoXCJ1c2VyX3Rva2VuXCIpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJjY21zXCIpXHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImVuY3JpcHRhZG9cIilcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidGllbXBvRGVFbnRyYWRhXCIpXHJcbiAgICAgICAgc2V0RWxpbWluYURhdG9zUCh0cnVlKVxyXG4gICAgfSwgW10gKVxyXG5cclxuICAgIC8vIGNvbnN0IFsgY2Ntcywgc2V0Q2NtcyBdID0gdXNlU3RhdGUoJ3JpdmFkZW5laXJhZGVsZ2Fkby41Jyk7XHJcbiAgICBjb25zdCBbIGNjbXMsIHNldENjbXMgXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFsgcGFzcywgc2V0UGFzcyBdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgLy8gY29uc3QgWyBwYXNzLCBzZXRQYXNzIF0gPSB1c2VTdGF9dGUoJ2NyYUo5eWluJyk7XHJcbiAgICBjb25zdCB7ZGF0YSxsb2FkaW5nfSA9IEZldGNoRnVuY3Rpb24oJ2FwaVZlcmlmaVBlcm1pc29Vc3VhcmlvJywgY2NtcykgIFxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgWyBwYXNzLCBzZXRQYXNzIF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZ0KSA9PiBcclxuICAgIHtcclxuICAgICAgICBsZXQgbnVtZXJvRGVFcnJvcj1cIlwiO1xyXG4gICAgICAgIGxldCB0b2tlbkNpZnJhZG8gPSAnJztcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBjY21zLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogIHBhc3MsIFxyXG4gICAgICAgICAgICB0eXBlQXV0IDogM1xyXG4gICAgICAgIH1cclxuICAgICAgICBheGlvcy5wb3N0KCdodHRwczovL2NjbXNhdXRvbWF0ZWQudGVsZXBlcmZvcm1hbmNlLmNvL2xvZ2luJywgIGNyZWRlbnRpYWxzIClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgXCJkYXRhXCIpXHJcbiAgICAgICAgICAgIG51bWVyb0RlRXJyb3IgPSByZXMuZGF0YS5lcnJvci5jb2RFcnJvcitcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYobnVtZXJvRGVFcnJvcj09PVwiMFwiKVxyXG4gICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFGcm9tQXBpID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRhdGFGcm9tQXBpID0gbG9hZGluZyA/ICcnIDogZGF0YS5kYXRvcztcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuZXJyb3IgPT09ICdJbnZhbGlkIHRva2VuJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVycm9yIGVuIGxhIGNvbmV4acOzblwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gbG9hZGluZyA/IFwiXCIgOiBkYXRhLnRva2VuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCEgKGRhdGFGcm9tQXBpID09PSB1bmRlZmluZWQpIHx8ICEoZGF0YUZyb21BcGkgPT09ICdub2RhdGEnKSAmJiB0b2tlbiAhPT0gXCJcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4gPT09XCJcIilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvciBlbiBsYSBjb25leGnDs24nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW5DaWZyYWRvID0gbWQ1KHRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdjY21zJywgY2NtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImVuY3JpcHRhZG9cIiwgdG9rZW5DaWZyYWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGllbXBvRGVFbnRyYWRhXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29raWVzLnNldCgndXNlcl90b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibGlua1wiKSA9PT0gdW5kZWZpbmVkIHx8IHNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCB8fCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibGlua1wiKSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9DV1MvZGFzaGJvYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvQ1dTL1wiK3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsaW5rXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTG8gc2VudGltb3Mgbm8gdGllbmUgcGVybWlzb3MgcGFyYSBhY2NlZGVyXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvbnRyYXNlw7FhIG8gdXN1YXJpbyBpbmNvcnJlY3RvXCIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBzdHlsZSA9e3N0eWxlcy5jdWVycG99PlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPVwibG9nb0luaWNpb1wiIHNyYyA9IFwiaHR0cHM6Ly9pLmliYi5jby9DTWNORGN6L2ZvbmRvLUluaWNpbzQucG5nXCIgLz4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBcImNvbnRhaW5lckNvbXBsZW1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlID0ge3ttYXJnaW5Cb3R0b20gOiAnNCUnfX0gaWNvbj17ZmFMb2NrfSBzaXplPVwiM3hcIiBjb2xvcj1cIiM4RjJBOTJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZSA9IFwidGV4dG9zXCIgPlPDs2xvIHBlcnNvbmFsIGF1dG9yaXphZG88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlVzZXJuYW1lLjVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b21JbnB1dHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgY2NtcyB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDY21zKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3NUZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7bWFyZ2luVG9wOic0JSd9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0geyBwYXNzIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tSW5wdXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b21CdXR0b25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IFxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgXHJcbiAgICBjdWVycG8gOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIHdpZHRoIDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodCA6ICcxMDB2aCcsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlIDogJ3VybChodHRwczovL2kuaWJiLmNvL0NNY05EY3ovZm9uZG8tSW5pY2lvNC5wbmcpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZSA6ICdjb3ZlcicsXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyIDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uIDogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXMgOiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiAnI0VBRUFFQScsXHJcbiAgICB9LFxyXG4gICAgY3VzdG9tSW5wdXRzOiB7XHJcbiAgICAgICAgZm9udEZhbWlseSA6ICdxdWlja3NhbmQnLCBcclxuICAgICAgICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9