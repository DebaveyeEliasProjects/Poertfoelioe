webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getProjectData, getFourProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectData", function() { return getProjectData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFourProjects", function() { return getFourProjects; });
/* harmony import */ var F_Repositories_Poertfoelioe_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_Repositories_Poertfoelioe_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_Repositories_Poertfoelioe_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_Repositories_Poertfoelioe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ 1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ 3);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);





var getProjectData = /*#__PURE__*/function () {
  var _ref = Object(F_Repositories_Poertfoelioe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_Repositories_Poertfoelioe_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var files, sendProps, newProps;
    return F_Repositories_Poertfoelioe_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            files = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readdirSync('projects');
            console.log(files);
            sendProps = [];
            files.forEach(function (element) {
              var data = {
                title: "",
                description: "",
                coverImage: "",
                link: "",
                publishDate: undefined
              }; // console.log(element);

              var markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join('projects', element)).toString();
              var x = gray_matter__WEBPACK_IMPORTED_MODULE_3___default()(markdownWithMeta).data;
              data.title = x.title;
              data.description = x.description;
              data.coverImage = x.coverImage;
              data.publishDate = Date.parse(x.publishDate);
              data.link = element.replace(".md", ""); // console.log(data);

              sendProps.push(data); // console.log(sendProps);
            });
            newProps = sendProps.sort(function (a, b) {
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(b.publishDate) - new Date(a.publishDate);
            });
            return _context.abrupt("return", newProps);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getProjectData() {
    return _ref.apply(this, arguments);
  };
}();
var getFourProjects = /*#__PURE__*/function () {
  var _ref2 = Object(F_Repositories_Poertfoelioe_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/F_Repositories_Poertfoelioe_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var files, sendProps, toSend;
    return F_Repositories_Poertfoelioe_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            files = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readdirSync('projects'); // console.log(files)

            _context2.next = 3;
            return getProjectData();

          case 3:
            sendProps = _context2.sent;
            toSend = sendProps.slice(0, 4);
            return _context2.abrupt("return", toSend);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFourProjects() {
    return _ref2.apply(this, arguments);
  };
}();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyJdLCJuYW1lcyI6WyJnZXRQcm9qZWN0RGF0YSIsImZpbGVzIiwiZnMiLCJyZWFkZGlyU3luYyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kUHJvcHMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY292ZXJJbWFnZSIsImxpbmsiLCJwdWJsaXNoRGF0ZSIsInVuZGVmaW5lZCIsIm1hcmtkb3duV2l0aE1ldGEiLCJyZWFkRmlsZVN5bmMiLCJwYXRoIiwiam9pbiIsInRvU3RyaW5nIiwieCIsIm1hdHRlciIsIkRhdGUiLCJwYXJzZSIsInJlcGxhY2UiLCJwdXNoIiwibmV3UHJvcHMiLCJzb3J0IiwiYSIsImIiLCJnZXRGb3VyUHJvamVjdHMiLCJ0b1NlbmQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsY0FBYztBQUFBLDhRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkMsaUJBRHNCLEdBQ2RDLHlDQUFFLENBQUNDLFdBQUgsQ0FBZSxVQUFmLENBRGM7QUFFNUJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUlJSyxxQkFOd0IsR0FNWixFQU5ZO0FBUTVCTCxpQkFBSyxDQUFDTSxPQUFOLENBQWMsVUFBQUMsT0FBTyxFQUFJO0FBQ3ZCLGtCQUFJQyxJQUFJLEdBQUc7QUFDVEMscUJBQUssRUFBRSxFQURFO0FBRVRDLDJCQUFXLEVBQUUsRUFGSjtBQUdUQywwQkFBVSxFQUFFLEVBSEg7QUFJVEMsb0JBQUksRUFBRSxFQUpHO0FBS1RDLDJCQUFXLEVBQUVDO0FBTEosZUFBWCxDQUR1QixDQVF2Qjs7QUFDQSxrQkFBTUMsZ0JBQWdCLEdBQUdkLHlDQUFFLENBQUNlLFlBQUgsQ0FBZ0JDLDJDQUFJLENBQUNDLElBQUwsQ0FBVSxVQUFWLEVBQXNCWCxPQUF0QixDQUFoQixFQUFnRFksUUFBaEQsRUFBekI7QUFDQSxrQkFBTUMsQ0FBQyxHQUFHQyxrREFBTSxDQUFDTixnQkFBRCxDQUFOLENBQXlCUCxJQUFuQztBQUNBQSxrQkFBSSxDQUFDQyxLQUFMLEdBQWFXLENBQUMsQ0FBQ1gsS0FBZjtBQUNBRCxrQkFBSSxDQUFDRSxXQUFMLEdBQW1CVSxDQUFDLENBQUNWLFdBQXJCO0FBQ0FGLGtCQUFJLENBQUNHLFVBQUwsR0FBa0JTLENBQUMsQ0FBQ1QsVUFBcEI7QUFDQUgsa0JBQUksQ0FBQ0ssV0FBTCxHQUFtQlMsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsQ0FBQ1AsV0FBYixDQUFuQjtBQUNBTCxrQkFBSSxDQUFDSSxJQUFMLEdBQVlMLE9BQU8sQ0FBQ2lCLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBc0IsRUFBdEIsQ0FBWixDQWZ1QixDQWdCdkI7O0FBQ0FuQix1QkFBUyxDQUFDb0IsSUFBVixDQUFlakIsSUFBZixFQWpCdUIsQ0FrQnZCO0FBQ0QsYUFuQkQ7QUFvQklrQixvQkE1QndCLEdBNEJickIsU0FBUyxDQUFDc0IsSUFBVixDQUFlLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQ3pDO0FBQ0E7QUFDQSxxQkFBTyxJQUFJUCxJQUFKLENBQVNPLENBQUMsQ0FBQ2hCLFdBQVgsSUFBMEIsSUFBSVMsSUFBSixDQUFTTSxDQUFDLENBQUNmLFdBQVgsQ0FBakM7QUFDRCxhQUpjLENBNUJhO0FBQUEsNkNBaUNyQmEsUUFqQ3FCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWQzQixjQUFjO0FBQUE7QUFBQTtBQUFBLEdBQXBCO0FBcUNBLElBQU0rQixlQUFlO0FBQUEsK1FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCOUIsaUJBRHVCLEdBQ2ZDLHlDQUFFLENBQUNDLFdBQUgsQ0FBZSxVQUFmLENBRGUsRUFFN0I7O0FBRjZCO0FBQUEsbUJBTVBILGNBQWMsRUFOUDs7QUFBQTtBQU16Qk0scUJBTnlCO0FBUXpCMEIsa0JBUnlCLEdBUWhCMUIsU0FBUyxDQUFDMkIsS0FBVixDQUFnQixDQUFoQixFQUFrQixDQUFsQixDQVJnQjtBQUFBLDhDQVd0QkQsTUFYc0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkQsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZGQ3NTFmOWUyZDJjNTE4NWRkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiOyBcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCdwcm9qZWN0cycpO1xyXG4gIGNvbnNvbGUubG9nKGZpbGVzKVxyXG5cclxuICBcclxuXHJcbiAgbGV0IHNlbmRQcm9wcyA9IFtdXHJcblxyXG4gIGZpbGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBjb3ZlckltYWdlOiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIlwiLFxyXG4gICAgICBwdWJsaXNoRGF0ZTogdW5kZWZpbmVkXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgIGNvbnN0IG1hcmtkb3duV2l0aE1ldGEgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKCdwcm9qZWN0cycsIGVsZW1lbnQpKS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgeCA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhKS5kYXRhO1xyXG4gICAgZGF0YS50aXRsZSA9IHgudGl0bGU7XHJcbiAgICBkYXRhLmRlc2NyaXB0aW9uID0geC5kZXNjcmlwdGlvbjtcclxuICAgIGRhdGEuY292ZXJJbWFnZSA9IHguY292ZXJJbWFnZTtcclxuICAgIGRhdGEucHVibGlzaERhdGUgPSBEYXRlLnBhcnNlKHgucHVibGlzaERhdGUpO1xyXG4gICAgZGF0YS5saW5rID0gZWxlbWVudC5yZXBsYWNlKFwiLm1kXCIsXCJcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHNlbmRQcm9wcy5wdXNoKGRhdGEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc2VuZFByb3BzKTtcclxuICB9KTtcclxuICBsZXQgbmV3UHJvcHMgPSBzZW5kUHJvcHMuc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgLy8gVHVybiB5b3VyIHN0cmluZ3MgaW50byBkYXRlcywgYW5kIHRoZW4gc3VidHJhY3QgdGhlbVxyXG4gICAgLy8gdG8gZ2V0IGEgdmFsdWUgdGhhdCBpcyBlaXRoZXIgbmVnYXRpdmUsIHBvc2l0aXZlLCBvciB6ZXJvLlxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGIucHVibGlzaERhdGUpIC0gbmV3IERhdGUoYS5wdWJsaXNoRGF0ZSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIG5ld1Byb3BzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZvdXJQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBmaWxlcyA9IGZzLnJlYWRkaXJTeW5jKCdwcm9qZWN0cycpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGZpbGVzKVxyXG5cclxuICBcclxuXHJcbiAgbGV0IHNlbmRQcm9wcyA9IGF3YWl0IGdldFByb2plY3REYXRhKCk7XHJcblxyXG4gIGxldCB0b1NlbmQgPSBzZW5kUHJvcHMuc2xpY2UoMCw0KVxyXG5cclxuICBcclxuICByZXR1cm4gdG9TZW5kO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==