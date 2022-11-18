"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_event_Event_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_toastification_dist_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toastification/dist/index.css */ "./node_modules/vue-toastification/dist/index.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      event: {},
      uri: '/api/events',
      id: null,
      msg: []
    };
  },
  watch: {
    event: {
      handler: function handler(newVal) {
        this.validateForm();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.astrickRequiredFields();
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.axios.get("".concat(this.uri, "/").concat(this.$route.params.id, "/edit")).then(function (res) {
        _this.event = res.data;
      });
    }
  },
  methods: {
    validateForm: function validateForm() {
      this.validateName(this.event.name);
      this.validateStartDate(this.event.start_date);
      this.validateEndDate(this.event.end_date);
    },
    validateName: function validateName(name) {
      if (!name) {
        this.msg['name'] = 'Name is Required';
        this.isFormValid = false;
        return;
      }
      this.msg['name'] = null;
    },
    validateStartDate: function validateStartDate(start_date) {
      if (!start_date) {
        this.msg['start_date'] = 'Start Date is Required';
        this.isFormValid = false;
        return;
      }
      var date = new Date();
      var today_date = new Date().toJSON().slice(0, 10);
      if (start_date < today_date) {
        this.msg['start_date'] = 'Start Date must be greater or equal to today';
        this.isFormValid = false;
        return;
      }
      this.msg['start_date'] = null;
    },
    validateEndDate: function validateEndDate(end_date) {
      if (!end_date) {
        this.msg['end_date'] = 'End Date is Required';
        this.isFormValid = false;
        return;
      }
      if (end_date < this.event.start_date) {
        this.msg['end_date'] = 'End Date must be greater than or equal to Start Date';
        this.isFormValid = false;
        return;
      }
      this.msg['end_date'] = null;
    },
    astrickRequiredFields: function astrickRequiredFields() {
      var elements = document.querySelectorAll("#event-form input[required]");
      elements.forEach(function (item) {
        item.previousElementSibling.classList.add('required');
      });
    },
    submitForm: function submitForm() {
      var _this2 = this;
      if (this.msg['name'] || this.msg['start_date'] || this.msg['end_date']) {
        this.$toast.error("Please Fill the form correctly", {
          timeout: 2000
        });
        return;
      }
      if (this.id) {
        this.axios.patch("".concat(this.uri, "/").concat(this.id), this.event).then(function (res) {
          _this2.$toast.success("Event Updated Successfully", {
            timeout: 2000
          });
        })["catch"](function (err) {
          _this2.$toast.error("Something went wrong", {
            timeout: 2000
          });
        });
      } else {
        this.axios.post(this.uri, this.event).then(function (response) {
          _this2.$toast.success("Event Created Successfully", {
            timeout: 2000
          });
          _this2.$router.push({
            name: 'event-list'
          });
        })["catch"](function (err) {
          _this2.$toast.error("Something went wrong", {
            timeout: 2000
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=template&id=2f6d916c&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=template&id=2f6d916c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h3", {
    staticClass: "text-center"
  }, [_vm._v("Create Event")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("form", {
    staticClass: "form-inline",
    attrs: {
      id: "event-form"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", [_vm._v("Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.event.name,
      expression: "event.name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: ""
    },
    domProps: {
      value: _vm.event.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.event, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.msg.name ? _c("span", {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.msg.name))]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", [_vm._v("Start Date")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.event.start_date,
      expression: "event.start_date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      required: ""
    },
    domProps: {
      value: _vm.event.start_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.event, "start_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.msg.start_date ? _c("span", {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.msg.start_date))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", [_vm._v("End Date")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.event.end_date,
      expression: "event.end_date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      required: ""
    },
    domProps: {
      value: _vm.event.end_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.event, "end_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.msg.end_date ? _c("span", {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.msg.end_date))]) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", [_vm._v("Description")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.event.description,
      expression: "event.description"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.event.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.event, "description", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("Create")]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-danger btn-sm",
    attrs: {
      to: {
        name: "event-list"
      }
    }
  }, [_vm._v("Cancel")])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toastification/dist/index.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toastification/dist/index.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Vue-Toastification__container {\n  z-index: 9999;\n  position: fixed;\n  padding: 4px;\n  width: 600px;\n  box-sizing: border-box;\n  display: flex;\n  min-height: 100%;\n  color: #fff;\n  flex-direction: column;\n  pointer-events: none;\n}\n@media only screen and (min-width : 600px) {\n  .Vue-Toastification__container.top-left, .Vue-Toastification__container.top-right, .Vue-Toastification__container.top-center {\n    top: 1em;\n  }\n  .Vue-Toastification__container.bottom-left, .Vue-Toastification__container.bottom-right, .Vue-Toastification__container.bottom-center {\n    bottom: 1em;\n    flex-direction: column-reverse;\n  }\n  .Vue-Toastification__container.top-left, .Vue-Toastification__container.bottom-left {\n    left: 1em;\n  }\n  .Vue-Toastification__container.top-left .Vue-Toastification__toast, .Vue-Toastification__container.bottom-left .Vue-Toastification__toast {\n    margin-right: auto;\n  }\n  @supports not (-moz-appearance: none) {\n    .Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl, .Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl {\n      margin-right: unset;\n      margin-left: auto;\n    }\n  }\n  .Vue-Toastification__container.top-right, .Vue-Toastification__container.bottom-right {\n    right: 1em;\n  }\n  .Vue-Toastification__container.top-right .Vue-Toastification__toast, .Vue-Toastification__container.bottom-right .Vue-Toastification__toast {\n    margin-left: auto;\n  }\n  @supports not (-moz-appearance: none) {\n    .Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl, .Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl {\n      margin-left: unset;\n      margin-right: auto;\n    }\n  }\n  .Vue-Toastification__container.top-center, .Vue-Toastification__container.bottom-center {\n    left: 50%;\n    margin-left: -300px;\n  }\n  .Vue-Toastification__container.top-center .Vue-Toastification__toast, .Vue-Toastification__container.bottom-center .Vue-Toastification__toast {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n@media only screen and (max-width : 600px) {\n  .Vue-Toastification__container {\n    width: 100vw;\n    padding: 0;\n    left: 0;\n    margin: 0;\n  }\n  .Vue-Toastification__container .Vue-Toastification__toast {\n    width: 100%;\n  }\n  .Vue-Toastification__container.top-left, .Vue-Toastification__container.top-right, .Vue-Toastification__container.top-center {\n    top: 0;\n  }\n  .Vue-Toastification__container.bottom-left, .Vue-Toastification__container.bottom-right, .Vue-Toastification__container.bottom-center {\n    bottom: 0;\n    flex-direction: column-reverse;\n  }\n}\n\n.Vue-Toastification__toast {\n  display: inline-flex;\n  position: relative;\n  max-height: 800px;\n  min-height: 64px;\n  box-sizing: border-box;\n  margin-bottom: 1rem;\n  padding: 22px 24px;\n  border-radius: 8px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  justify-content: space-between;\n  font-family: \"Lato\", Helvetica, \"Roboto\", Arial, sans-serif;\n  max-width: 600px;\n  min-width: 326px;\n  pointer-events: auto;\n  overflow: hidden;\n  transform: translateZ(0);\n  direction: ltr;\n}\n.Vue-Toastification__toast--rtl {\n  direction: rtl;\n}\n.Vue-Toastification__toast--default {\n  background-color: #1976d2;\n  color: #fff;\n}\n.Vue-Toastification__toast--info {\n  background-color: #2196f3;\n  color: #fff;\n}\n.Vue-Toastification__toast--success {\n  background-color: #4caf50;\n  color: #fff;\n}\n.Vue-Toastification__toast--error {\n  background-color: #ff5252;\n  color: #fff;\n}\n.Vue-Toastification__toast--warning {\n  background-color: #ffc107;\n  color: #fff;\n}\n@media only screen and (max-width : 600px) {\n  .Vue-Toastification__toast {\n    border-radius: 0px;\n    margin-bottom: 0.5rem;\n  }\n}\n.Vue-Toastification__toast-body {\n  flex: 1;\n  line-height: 24px;\n  font-size: 16px;\n  word-break: break-word;\n  white-space: pre-wrap;\n}\n.Vue-Toastification__toast-component-body {\n  flex: 1;\n}\n.Vue-Toastification__toast.disable-transition {\n  transition: none !important;\n  animation: none !important;\n}\n\n.Vue-Toastification__close-button {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 24px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  padding-left: 10px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  align-items: center;\n  color: #fff;\n  opacity: 0.3;\n  transition: visibility 0s, opacity 0.2s linear;\n}\n.Vue-Toastification__close-button:hover, .Vue-Toastification__close-button:focus {\n  opacity: 1;\n}\n.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover {\n  opacity: 0;\n}\n.Vue-Toastification__toast--rtl .Vue-Toastification__close-button {\n  padding-left: unset;\n  padding-right: 10px;\n}\n\n@keyframes scale-x-frames {\n  0% {\n    transform: scaleX(1);\n  }\n  100% {\n    transform: scaleX(0);\n  }\n}\n.Vue-Toastification__progress-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 5px;\n  z-index: 10000;\n  background-color: rgba(255, 255, 255, 0.7);\n  transform-origin: left;\n  animation: scale-x-frames linear 1 forwards;\n}\n.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar {\n  right: 0;\n  left: unset;\n  transform-origin: right;\n}\n\n.Vue-Toastification__icon {\n  margin: auto 18px auto 0px;\n  background: transparent;\n  outline: none;\n  border: none;\n  padding: 0;\n  transition: 0.3s ease;\n  align-items: center;\n  width: 20px;\n  height: 100%;\n}\n.Vue-Toastification__toast--rtl .Vue-Toastification__icon {\n  margin: auto 0px auto 18px;\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes bounceOutRight {\n  40% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(1000px, 0, 0);\n  }\n}\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n.Vue-Toastification__bounce-enter-active.top-left, .Vue-Toastification__bounce-enter-active.bottom-left {\n  animation-name: bounceInLeft;\n}\n.Vue-Toastification__bounce-enter-active.top-right, .Vue-Toastification__bounce-enter-active.bottom-right {\n  animation-name: bounceInRight;\n}\n.Vue-Toastification__bounce-enter-active.top-center {\n  animation-name: bounceInDown;\n}\n.Vue-Toastification__bounce-enter-active.bottom-center {\n  animation-name: bounceInUp;\n}\n\n.Vue-Toastification__bounce-leave-active.top-left, .Vue-Toastification__bounce-leave-active.bottom-left {\n  animation-name: bounceOutLeft;\n}\n.Vue-Toastification__bounce-leave-active.top-right, .Vue-Toastification__bounce-leave-active.bottom-right {\n  animation-name: bounceOutRight;\n}\n.Vue-Toastification__bounce-leave-active.top-center {\n  animation-name: bounceOutUp;\n}\n.Vue-Toastification__bounce-leave-active.bottom-center {\n  animation-name: bounceOutDown;\n}\n\n.Vue-Toastification__bounce-move {\n  transition-timing-function: ease-in-out;\n  transition-property: all;\n  transition-duration: 400ms;\n}\n\n/* ----------------------------------------------\n * Modified version from Animista\n * Animista is Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n@keyframes fadeOutTop {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeOutLeft {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeOutBottom {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeOutRight {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n}\n@keyframes fadeInLeft {\n  0% {\n    transform: translateX(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeInRight {\n  0% {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeInTop {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeInBottom {\n  0% {\n    transform: translateY(50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.Vue-Toastification__fade-enter-active.top-left, .Vue-Toastification__fade-enter-active.bottom-left {\n  animation-name: fadeInLeft;\n}\n.Vue-Toastification__fade-enter-active.top-right, .Vue-Toastification__fade-enter-active.bottom-right {\n  animation-name: fadeInRight;\n}\n.Vue-Toastification__fade-enter-active.top-center {\n  animation-name: fadeInTop;\n}\n.Vue-Toastification__fade-enter-active.bottom-center {\n  animation-name: fadeInBottom;\n}\n\n.Vue-Toastification__fade-leave-active.top-left, .Vue-Toastification__fade-leave-active.bottom-left {\n  animation-name: fadeOutLeft;\n}\n.Vue-Toastification__fade-leave-active.top-right, .Vue-Toastification__fade-leave-active.bottom-right {\n  animation-name: fadeOutRight;\n}\n.Vue-Toastification__fade-leave-active.top-center {\n  animation-name: fadeOutTop;\n}\n.Vue-Toastification__fade-leave-active.bottom-center {\n  animation-name: fadeOutBottom;\n}\n\n.Vue-Toastification__fade-move {\n  transition-timing-function: ease-in-out;\n  transition-property: all;\n  transition-duration: 400ms;\n}\n\n/* ----------------------------------------------\n * Modified version from Animista\n * Animista is Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n@keyframes slideInBlurredLeft {\n  0% {\n    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);\n    transform-origin: 100% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInBlurredTop {\n  0% {\n    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);\n    transform-origin: 50% 0%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInBlurredRight {\n  0% {\n    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);\n    transform-origin: 0% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideInBlurredBottom {\n  0% {\n    transform: translateY(1000px) scaleY(2.5) scaleX(0.2);\n    transform-origin: 50% 100%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n}\n@keyframes slideOutBlurredTop {\n  0% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 0%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-1000px) scaleY(2) scaleX(0.2);\n    transform-origin: 50% 0%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n}\n@keyframes slideOutBlurredBottom {\n  0% {\n    transform: translateY(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(1000px) scaleY(2) scaleX(0.2);\n    transform-origin: 50% 100%;\n    filter: blur(240px);\n    opacity: 0;\n  }\n}\n@keyframes slideOutBlurredLeft {\n  0% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(-1000px) scaleX(2) scaleY(0.2);\n    transform-origin: 100% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n}\n@keyframes slideOutBlurredRight {\n  0% {\n    transform: translateX(0) scaleY(1) scaleX(1);\n    transform-origin: 50% 50%;\n    filter: blur(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(1000px) scaleX(2) scaleY(0.2);\n    transform-origin: 0% 50%;\n    filter: blur(40px);\n    opacity: 0;\n  }\n}\n.Vue-Toastification__slideBlurred-enter-active.top-left, .Vue-Toastification__slideBlurred-enter-active.bottom-left {\n  animation-name: slideInBlurredLeft;\n}\n.Vue-Toastification__slideBlurred-enter-active.top-right, .Vue-Toastification__slideBlurred-enter-active.bottom-right {\n  animation-name: slideInBlurredRight;\n}\n.Vue-Toastification__slideBlurred-enter-active.top-center {\n  animation-name: slideInBlurredTop;\n}\n.Vue-Toastification__slideBlurred-enter-active.bottom-center {\n  animation-name: slideInBlurredBottom;\n}\n\n.Vue-Toastification__slideBlurred-leave-active.top-left, .Vue-Toastification__slideBlurred-leave-active.bottom-left {\n  animation-name: slideOutBlurredLeft;\n}\n.Vue-Toastification__slideBlurred-leave-active.top-right, .Vue-Toastification__slideBlurred-leave-active.bottom-right {\n  animation-name: slideOutBlurredRight;\n}\n.Vue-Toastification__slideBlurred-leave-active.top-center {\n  animation-name: slideOutBlurredTop;\n}\n.Vue-Toastification__slideBlurred-leave-active.bottom-center {\n  animation-name: slideOutBlurredBottom;\n}\n\n.Vue-Toastification__slideBlurred-move {\n  transition-timing-function: ease-in-out;\n  transition-property: all;\n  transition-duration: 400ms;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.required::after{\r\n    content: ' *';\r\n    color: red;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/vue-toastification/dist/index.css":
/*!********************************************************!*\
  !*** ./node_modules/vue-toastification/dist/index.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./index.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-toastification/dist/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_2f6d916c_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_2f6d916c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_2f6d916c_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/event/Event.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/event/Event.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Event_vue_vue_type_template_id_2f6d916c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event.vue?vue&type=template&id=2f6d916c& */ "./resources/js/components/event/Event.vue?vue&type=template&id=2f6d916c&");
/* harmony import */ var _Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event.vue?vue&type=script&lang=js& */ "./resources/js/components/event/Event.vue?vue&type=script&lang=js&");
/* harmony import */ var _Event_vue_vue_type_style_index_0_id_2f6d916c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css& */ "./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Event_vue_vue_type_template_id_2f6d916c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Event_vue_vue_type_template_id_2f6d916c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/event/Event.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/event/Event.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/event/Event.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/event/Event.vue?vue&type=template&id=2f6d916c&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/event/Event.vue?vue&type=template&id=2f6d916c& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_2f6d916c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_2f6d916c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_2f6d916c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=template&id=2f6d916c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=template&id=2f6d916c&");


/***/ }),

/***/ "./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_style_index_0_id_2f6d916c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/event/Event.vue?vue&type=style&index=0&id=2f6d916c&lang=css&");


/***/ })

}]);