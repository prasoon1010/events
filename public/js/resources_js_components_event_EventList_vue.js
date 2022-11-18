"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_event_EventList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/EventList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/EventList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EventList',
  components: {},
  data: function data() {
    return {
      events: [],
      uri: '/api/events',
      params: {
        filter: '',
        per_page: 10
      }
    };
  },
  watch: {
    params: {
      handler: function handler() {
        this.fetchData();
      },
      deep: true
    }
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    deleteEvent: function deleteEvent(id) {
      var _this = this;
      this.axios["delete"]("".concat(this.uri, "/").concat(id)).then(function (response) {
        var i = _this.events.map(function (data) {
          return data.id;
        }).indexOf(id);
        _this.events.splice(i, 1);
      });
    },
    fetchData: function fetchData() {
      var _this2 = this;
      this.axios.get(this.uri, {
        params: this.params
      }).then(function (response) {
        var data = response.data.data;
        _this2.events = data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/EventList.vue?vue&type=template&id=211b2408&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/EventList.vue?vue&type=template&id=211b2408& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "form-inline col-3"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.params.filter,
      expression: "params.filter"
    }],
    staticClass: "form-control form-select form-select-sm mb-2",
    attrs: {
      name: "filter",
      placeholder: "Filter Data"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.params, "filter", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v("Filter Data")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "upcoming"
    }
  }, [_vm._v("Upcoming")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "finished"
    }
  }, [_vm._v("Finished")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "running"
    }
  }, [_vm._v("Running")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "within_7"
    }
  }, [_vm._v("Within 7 Days")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "before_7"
    }
  }, [_vm._v("Before 7 Days")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-9 mb-2 text-end"
  }, [_c("router-link", {
    staticClass: "btn btn-success btn-sm",
    attrs: {
      to: {
        name: "event-add"
      }
    }
  }, [_vm._v("Create")])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    staticClass: "text-center"
  }, [_vm._v("Events List")]), _vm._v(" "), _c("table", {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _vm.events.length ? _c("tbody", _vm._l(_vm.events, function (event) {
    return _c("tr", {
      key: event.id
    }, [_c("td", [_vm._v(_vm._s(event.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s("".concat(event.start_date, " to ").concat(event.end_date)))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge rounded-pill bg-success"
    }, [_vm._v(_vm._s(event.status))])]), _vm._v(" "), _c("td", [_c("div", {
      staticClass: "btn-group",
      attrs: {
        role: "group"
      }
    }, [_c("router-link", {
      staticClass: "btn btn-info btn-sm",
      attrs: {
        to: {
          name: "event-edit",
          params: {
            id: event.id
          }
        }
      }
    }, [_vm._v("Edit")]), _vm._v("  \n                        "), _c("button", {
      staticClass: "btn btn-danger btn-sm",
      on: {
        click: function click($event) {
          return _vm.deleteEvent(event.id);
        }
      }
    }, [_vm._v("Delete")])], 1)])]);
  }), 0) : _c("tbody", [_vm._m(1)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th", [_vm._v("Start/End Date")]), _vm._v(" "), _c("th", [_vm._v("Status")]), _vm._v(" "), _c("th", [_vm._v("Actions")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("tr", [_c("td", {
    staticClass: "text-center",
    attrs: {
      colspan: "4"
    }
  }, [_vm._v("No Data Available")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/event/EventList.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/event/EventList.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EventList_vue_vue_type_template_id_211b2408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventList.vue?vue&type=template&id=211b2408& */ "./resources/js/components/event/EventList.vue?vue&type=template&id=211b2408&");
/* harmony import */ var _EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventList.vue?vue&type=script&lang=js& */ "./resources/js/components/event/EventList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventList_vue_vue_type_template_id_211b2408___WEBPACK_IMPORTED_MODULE_0__.render,
  _EventList_vue_vue_type_template_id_211b2408___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/event/EventList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/event/EventList.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/event/EventList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/EventList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/event/EventList.vue?vue&type=template&id=211b2408&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/event/EventList.vue?vue&type=template&id=211b2408& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_211b2408___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_211b2408___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_211b2408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EventList.vue?vue&type=template&id=211b2408& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/EventList.vue?vue&type=template&id=211b2408&");


/***/ })

}]);