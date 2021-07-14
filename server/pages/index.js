exports.ids = [2];
exports.modules = {

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("3f747b8f", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("2795d429", content, true, context)
};

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("5cee7c64", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("85f718c0", content, true, context)
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("cd60204a", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Filtercards.vue?vue&type=template&id=ccef094a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.companies && _vm.companies.length > 0)?_c('div',{staticClass:"container",attrs:{"id":"results"}},[_vm._ssrNode("<div class=\"row\" data-v-ccef094a>"+(_vm._ssrList((_vm.companies),function(company,index){return ("<div class=\"col-md-4\" data-v-ccef094a><div class=\"filter-custom-card\" data-v-ccef094a><div class=\"row custom-card-header align-items-center clearfix m-0\" data-v-ccef094a><div class=\"company-details float-left\" data-v-ccef094a><p class=\"company-name mb-0\" data-v-ccef094a>"+_vm._ssrEscape("\n                "+_vm._s(company.industry)+"\n              ")+"</p> <p class=\"company-details mb-0\" data-v-ccef094a>"+_vm._ssrEscape("\n                "+_vm._s(company.company_name)+"\n              ")+"</p></div></div> <div class=\"custom-card-content text-left\" data-v-ccef094a><div class=\"mb-3 employee-title-section\" data-v-ccef094a><p class=\"employee-name mb-0\" data-v-ccef094a>"+_vm._ssrEscape(_vm._s(company.salutation)+" "+_vm._s(company.first_name)+"\n                          "+_vm._s(company.last_name)+"\n                  ")+"</p> <p class=\"employee-position mb-0\" data-v-ccef094a>"+_vm._ssrEscape("\n                     "+_vm._s(company.job_level)+"\n                  ")+"</p></div> <div class=\"employee-details-section\" data-v-ccef094a>"+((!_vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-account mr-2\" data-v-ccef094a></span>"+_vm._ssrEscape(" "+_vm._s(company.job_title)+"\n                  ")+"</p>"):"<!---->")+" "+((!_vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-account-multiple mr-2\" data-v-ccef094a></span>"+_vm._ssrEscape(" "+_vm._s(company.employees)+" \n                  ")+"</p>"):"<!---->")+" "+((!_vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-map-marker mr-2 \" data-v-ccef094a></span>"+_vm._ssrEscape(" "+_vm._s(company.address)+" \n                  ")+"</p>"):"<!---->")+" "+((_vm.isSubscribed && _vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-phone mr-2\" data-v-ccef094a></span>"+_vm._ssrEscape("  "+_vm._s(company.phone)+" \n                  ")+"</p>"):"<!---->")+" "+((_vm.isSubscribed && _vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-trending-up mr-2\" data-v-ccef094a></span>"+_vm._ssrEscape("  "+_vm._s(company.revenue)+" \n                  ")+"</p>"):"<!---->")+" "+((_vm.isSubscribed && _vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-star mr-2\" data-v-ccef094a></span>"+_vm._ssrEscape(" "+_vm._s(company.campaign)+" \n                  ")+"</p>"):"<!---->")+" "+((_vm.isSubscribed && _vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-email mr-2\" data-v-ccef094a></span>"+_vm._ssrEscape(" "+_vm._s(company.email)+" \n                  ")+"</p>"):"<!---->")+" "+((_vm.isSubscribed && _vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-label-variant mr-2\" data-v-ccef094a></span>"+_vm._ssrEscape(" "+_vm._s(company.tag_line)+" \n                  ")+"</p>"):"<!---->")+" "+((!_vm.isSubscribed && _vm.flippedCards.includes(index))?("<p class=\"mb-0 emp-list-item\" data-v-ccef094a><span class=\"mdi mdi-name\" data-v-ccef094a></span>  This part is only available for members \n                  </p>"):"<!---->")+"</div></div> <div class=\"text-right\" data-v-ccef094a><span class=\"show-more-less\" data-v-ccef094a>"+((!_vm.flippedCards.includes(index))?("<span data-v-ccef094a>Show more</span>"):("<span data-v-ccef094a>Show less</span>"))+"</span></div></div></div>")}))+"</div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Filtercards.vue?vue&type=template&id=ccef094a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Filtercards.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Filtercardsvue_type_script_lang_js_ = ({
  props: ['companies'],

  data() {
    return {
      flippedCards: [],
      isSubscribed: true
    };
  },

  methods: {
    togglePopFlip(index) {
      if (this.flippedCards.includes(index)) {
        const pos = this.flippedCards.indexOf(index);
        console.log(pos);

        if (pos > -1) {
          this.flippedCards.splice(pos, 1);
        }
      } else {
        this.flippedCards.push(index);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Filtercards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Filtercardsvue_type_script_lang_js_ = (Filtercardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Filtercards.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Filtercardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ccef094a",
  "8b4a4228"
  
)

/* harmony default export */ var Filtercards = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchCard_vue_vue_type_style_index_0_id_cc153c7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchCard_vue_vue_type_style_index_0_id_cc153c7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchCard_vue_vue_type_style_index_0_id_cc153c7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchCard_vue_vue_type_style_index_0_id_cc153c7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_searchCard_vue_vue_type_style_index_0_id_cc153c7a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-card[data-v-cc153c7a]{background:#fff;border-radius:8px;padding:40px}.search-card .card-title[data-v-cc153c7a]{font-size:20px;font-weight:600;line-height:25px;text-align:left}.card-tab-btn[data-v-cc153c7a]{border:1px solid #c6c6c6;box-sizing:border-box;border-radius:8px;padding:10px 20px;color:#374958;text-decoration:none;cursor:pointer}.card-tab-btn.active[data-v-cc153c7a]{border:1px solid #b3365b;background:#b3365b;color:#fff}.input-group-text-custom[data-v-cc153c7a]{display:flex;align-items:center;padding:.75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;border-radius:.25rem}.custom-input-group[data-v-cc153c7a]{border:1px solid #c6c6c6;border-radius:8px}.custom-input-group .form-control[data-v-cc153c7a]{border:0 solid #c6c6c6;border-radius:8px;border-top-left-radius:0;border-bottom-left-radius:0;padding:1.5rem .75rem}.custom-input-group .form-control[data-v-cc153c7a]:focus{box-shadow:none}.country-buttons a[data-v-cc153c7a]{border-radius:8px;margin-right:8px;padding:8px 16px;font-weight:600;font-size:12px;line-height:15px}.country-buttons a.active[data-v-cc153c7a]{background:rgba(179,54,91,.1);border:1px solid rgba(179,54,91,.5);color:#b3365b}.hr-seperator[data-v-cc153c7a]{border:1px solid #c6c6c6;margin-top:25px;margin-bottom:15px}.score-number[data-v-cc153c7a]{color:#b3365b}.score-section[data-v-cc153c7a]{font-weight:600;font-size:14px;line-height:18px}.btn-search-lg[data-v-cc153c7a]{background:#b3365b;border-radius:8px;padding:.75rem 60px;border:0;line-height:23px;width:100%;font-size:18px;font-style:normal;font-weight:600;color:#e7e7e7}.vue-slider.vue-slider-ltr[data-v-cc153c7a]{margin-top:35px}.popular-heading[data-v-cc153c7a],.popular-item[data-v-cc153c7a]{font-size:14px;line-height:18px;color:#374958}.popular-heading[data-v-cc153c7a]{font-weight:600}.popular-item[data-v-cc153c7a]{font-weight:700;border-bottom:1px solid #c6c6c6;cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSlider_vue_vue_type_style_index_0_id_57216e19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSlider_vue_vue_type_style_index_0_id_57216e19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSlider_vue_vue_type_style_index_0_id_57216e19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSlider_vue_vue_type_style_index_0_id_57216e19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homeSlider_vue_vue_type_style_index_0_id_57216e19_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header-title[data-v-57216e19]{font-size:48px;font-weight:800;line-height:58px}.header-title[data-v-57216e19],.sub-text[data-v-57216e19]{font-style:normal;letter-spacing:0;text-align:left}.sub-text[data-v-57216e19]{font-size:20px;font-weight:400;line-height:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtersection_vue_vue_type_style_index_0_id_77b56396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtersection_vue_vue_type_style_index_0_id_77b56396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtersection_vue_vue_type_style_index_0_id_77b56396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtersection_vue_vue_type_style_index_0_id_77b56396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtersection_vue_vue_type_style_index_0_id_77b56396_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main-filter-section[data-v-77b56396]{background:#b3365b;border-radius:8px;padding:46px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtercards_vue_vue_type_style_index_0_id_ccef094a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtercards_vue_vue_type_style_index_0_id_ccef094a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtercards_vue_vue_type_style_index_0_id_ccef094a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtercards_vue_vue_type_style_index_0_id_ccef094a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Filtercards_vue_vue_type_style_index_0_id_ccef094a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".company-name[data-v-ccef094a]{font-size:14px;font-weight:400;line-height:18px;text-align:left;color:#031c32}.score-red[data-v-ccef094a]{background:#d22237;color:#fff}.score-red[data-v-ccef094a],.score-yellow[data-v-ccef094a]{border-radius:40px;font-size:24px;font-style:normal;font-weight:300;line-height:26px;letter-spacing:0;text-align:center;padding:10px}.score-yellow[data-v-ccef094a]{background:#df772c;color:#000}.company-details[data-v-ccef094a]{font-size:16px;font-weight:700;line-height:20px;text-align:left;color:#031c32;width:73%;max-height:56px;min-height:56px}.filter-custom-card[data-v-ccef094a]{background:#ebcaca;border-radius:8px;margin-bottom:30px}.custom-card-header[data-v-ccef094a]{background:#d9b9ba;border-radius:8px 8px 0 0;padding:16px}.score[data-v-ccef094a]{background:#0c7a85;border-radius:40px;color:#fff;font-size:24px;font-style:normal;font-weight:300;line-height:26px;letter-spacing:0;text-align:center;padding:10px}.employee-name[data-v-ccef094a]{color:#b3365b;font-weight:700;font-size:18px;line-height:23px}.employee-position[data-v-ccef094a]{font-weight:400;font-size:14px;line-height:18px;color:#031c32}.custom-card-content[data-v-ccef094a]{padding:16px}.employee-details-section[data-v-ccef094a]{min-height:80px;max-height:120px}.employee-title-section[data-v-ccef094a]{min-height:41px}.emp-list-item[data-v-ccef094a]{font-weight:400;text-align:left;color:#031c32}.emp-list-item[data-v-ccef094a],.show-more-less[data-v-ccef094a]{font-size:14px;font-style:normal;line-height:18px;letter-spacing:0}.show-more-less[data-v-ccef094a]{font-weight:700;text-align:right;padding:0 16px 16px;display:inline-block}.show-more-less span[data-v-ccef094a]{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(21);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(70);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".main-header nav.navbar{position:absolute;width:100%}.main-slider{min-height:100vh;display:flex;align-items:center;justify-content:center}.main-slider.custom-bg{background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:top}.gradient-bg{background:linear-gradient(246.04deg,#031c32 22.45%,rgba(255,0,0,.3));min-height:100vh;display:flex;align-items:center;justify-content:center;background-size:cover;background-position:100% 100%}.keep-walking{font-size:24px;font-weight:700;line-height:30px}.keep-walking,.you-are-gem{font-style:normal;letter-spacing:0;text-align:left}.you-are-gem{font-size:16px;font-weight:400;line-height:20px}.btn-show-more{background:#b3365b;border-radius:8px;padding:10px 60px;border:0;font-size:18px;font-weight:700;line-height:23px}.most-viewed-heading,.most-viewed-term{font-size:24px;font-style:normal;font-weight:700;line-height:30px;text-align:center}.most-viewed-term{color:#ebcaca!important}.bottom-section{padding-top:80px;padding-bottom:80px}.header-title{font-size:48px;font-weight:800;line-height:58px}.header-title,.sub-text{font-style:normal;letter-spacing:0;text-align:left}.sub-text{font-size:20px;font-weight:400;line-height:30px}body{font-family:Mulish;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;background:#031c32}.search-card{background:#fff;border-radius:8px;padding:40px}.search-card .card-title{font-size:20px;font-weight:600;line-height:25px;text-align:left}.card-tab-btn{display:inline-block;border:1px solid #c6c6c6;box-sizing:border-box;border-radius:8px;padding:10px 20px;color:#374958;text-decoration:none;cursor:pointer}.card-tab-btn:hover{text-decoration:none;color:#374958}.card-tab-btn.active{border:1px solid #b3365b;background:#b3365b;color:#fff}.input-group-text-custom{display:flex;align-items:center;padding:5px 0 0 12px;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;border-radius:.25rem}.input-group-text-custom .mdi.mdi-magnify{font-size:26px}.custom-input-group{border-radius:8px}.custom-input-group .form-control{border-radius:8px!important;padding:1.5rem .75rem 1.5rem 45px;color:#374958!important}.custom-input-group .form-control:focus{box-shadow:none}.country-buttons a{border-radius:10px;margin-right:4px;padding:8px 16px;font-weight:600;font-size:12px;line-height:15px;display:inline-block}.country-buttons a.active{background:rgba(179,54,91,.1);border:1px solid rgba(179,54,91,.5);color:#b3365b}.hr-seperator{border:1px solid #c6c6c6;margin-top:20px;margin-bottom:15px}.score-number{color:#b3365b}.score-section{font-weight:600;font-size:14px;line-height:18px}.btn-search-lg{background:#b3365b;border-radius:8px;padding:.75rem 60px;border:0;line-height:23px;width:100%;font-size:18px;font-style:normal;font-weight:600;color:#e7e7e7}.btn-search-lg:active{transform:scale(.98);box-shadow:3px 2px 22px 1px rgba(0,0,0,.24)}.vue-slider.vue-slider-ltr{margin-top:35px}.popular-heading,.popular-item{font-size:14px;line-height:18px;color:#374958}.popular-heading{font-weight:600}.popular-item{font-weight:700;cursor:pointer}.popular-item a{border-bottom:1px solid #c6c6c6}.navbar-brand{font-size:32px;font-weight:700;line-height:38px;text-align:left}.nav-item a{font-size:16px;font-weight:600;line-height:20px;text-align:left;color:#fff}nav.navbar{position:absolute;width:100%}.bottom-section{text-align:center}.main-filter-section{background:#b3365b;border-radius:8px;padding:32px}.main-filter-section select{background:#ebcaca;border-radius:8px;padding:5px;height:45px}.main-filter-section .form-group label{font-size:16px;font-weight:600;line-height:20px;color:#c6c6c6!important}.vue-slider-process{background-color:#b3365b!important}.vue-slider-dot-handle{border:2px solid #b3365b;transition:box-shadow .3s,border-color .3s}.vue-slider-dot-handle:hover,.vue-slider:hover .vue-slider-dot-handle,.vue-slider:hover .vue-slider-dot-handle:hover,.vue-slider:hover .vue-slider-process{border-color:#b3365b!important}.vue-slider-dot-handle-focus{box-shadow:0 0 0 0!important}.vue-slider-dot{width:11px!important;height:11px!important;cursor:pointer}.vue-slider-dot-tooltip-inner{border-radius:16px 16px;border-color:#b3365b!important;background-color:#b3365b!important;font-size:12px;width:30px;height:26px;padding:4px 0 0}.vue-slider-dot-tooltip-inner-top:after{top:89%;left:50.4%;border-width:10px}.multiselect__element:hover{background-color:#ebcaca!important;color:#b3365b!important}.multiselect__option--highlight{background:#ebcaca!important;outline:none;color:#b3365b!important}.multiselect__option--highlight:after{background:#ebcaca!important;content:none;color:#b3365b!important}.multiselect__option--selected{content:none;background:#ebcaca}.multiselect__input:before{background:#6b8e23}::-webkit-scrollbar{width:5px;height:5px;border-radius:8px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}::-webkit-scrollbar-thumb{background:#f37;width:5px;height:45px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.5)}input[type=checkbox]{border:1px solid #b3365b;outline:1px solid #b3365b;box-sizing:border-box;border-radius:2px;background:#b3365b;outline-style:auto}input:checked{color:#b3365b;background-color:green!important;background:green!important;background:#b3365b}.search-card .input-group.custom-input-group .input-group-prepend{position:absolute;z-index:5}.search-card .input-group.custom-input-group .form-control:focus{border-color:#b3365b!important}.multiselect__tags{padding:10px 40px 3px 12px!important;min-height:48px;border-radius:8px!important;border:1px solid #ced4da!important}.multiselect__input,.multiselect__single{border-radius:8px!important;line-height:24px}.country .multiselect__input,.country .multiselect__single{border-radius:8px!important;line-height:24px;padding:0 0 0 32px}.multiselect__content-wrapper{border-radius:8px!important;margin-top:10px;border:1px solid #e8e8e8!important;max-height:220px!important}.multiselect__content-wrapper .multiselect__element .option__desc>span input[type=checkbox]{top:1px;position:relative}.multiselect__content-wrapper .multiselect__element .option__desc span.option__small{margin-left:10px}.multiselect__select{height:48px}.multiselect__option{min-height:44px}.country .multiselect__placeholder{padding:0 0 0 32px!important}.country .multiselect__placeholder,.multiselect__placeholder{font-size:16px!important;color:#495057!important;margin-bottom:8px!important}.multiselect{min-height:48px}.multiselect__spinner{height:46px;border-radius:8px}.multiselect--active .multiselect__tags{border-color:#b3365b!important}.main-filter-section .multiselect__single{background:#ebcaca!important}.form-control:disabled{background:#ebcaca!important}.multiselect__option--selected.multiselect__option--highlight:after,.multiselect__option--selected:after{content:\"\"!important}.multiselect--active .icon{transform:rotate(180deg)}.country .multiselect:before{content:\"\\F07D9\";z-index:1}.multiselect--active:after,.multiselect:before{display:inline-block;font:normal normal normal 24px/1 \"Material Design Icons\";text-rendering:auto;line-height:inherit;-webkit-font-smoothing:antialiased;position:absolute;top:5px;left:12px;font-size:26px}.main-filter-section .multiselect{background:#ebcaca;border-radius:8px}.main-filter-section .multiselect__tags{background:#ebcaca}.main-filter-section .multiselect--active .multiselect__tags{background:#fff}.show-city{height:110px;box-shadow:0 2px 8px rgba(40,41,61,.08),0 20px 32px rgba(96,97,112,.24)}.close-city a{border-radius:50%!important;padding:2px 7px!important}.city-list{height:110px;padding:10px!important;overflow-y:scroll!important;overflow-x:hidden!important}.city-list a{padding:1px 6px!important}.mdi-check-bold{color:#fff;background:#b3365b;border-radius:100%;height:36px;width:36px;padding:3px 4px;font-size:7px}.close-city{padding:0 5px!important;float:right!important;position:absolute;right:38px;bottom:396px}.header-text-fix{margin-top:70px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-image.fefb14f.jpg";

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2e1e6770&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"main-slider custom-bg\">","</div>",[_vm._ssrNode("<div class=\"gradient-bg w-100\">","</div>",[_vm._ssrNode("<div class=\"container header-text-fix\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-between align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-md-7 my-2\"><h1 class=\"header-title text-left text-white\">\n              Leading experts to\n              find Organisations that<br>\n              suits works\n            </h1> <p class=\"text-white text-left sub-text\">\n              Logipsum provide affordable, high-quality organisation to suit your work and gives you boost to expand your wings.\n            </p></div> "),_vm._ssrNode("<div class=\"col-md-5 my-2\">","</div>",[_vm._ssrNode("<div class=\"search-card\">","</div>",[_vm._ssrNode("<h3 class=\"card-title mb-4\">Search Organisations</h3> "),_vm._ssrNode("<div class=\"input-group custom-input-group mb-3\">","</div>",[_c('multiselect',{attrs:{"options":_vm.products,"multiple":false,"close-on-select":true,"clear-on-select":false,"hideSelected":false,"taggable":false,"placeholder":"Product being promoted","preserve-search":true,"internal-search":false},on:{"search-change":_vm.asyncFindProducts},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
return [(values.length)?_c('span',{staticClass:"multiselect__single"},[_vm._v(_vm._s(values[0]))]):_vm._e()]}},{key:"option",fn:function(props){return [_c('div',{staticClass:"option__desc"},[(_vm.countries_value.includes(props.option))?_c('span',[_c('input',{attrs:{"type":"checkbox","value":"","checked":""}})]):_c('span',[_c('input',{attrs:{"type":"checkbox","value":""}})]),_vm._v(" "),_c('span',{staticClass:"option__small"},[_vm._v(_vm._s(props.option))])])]}}]),model:{value:(_vm.product),callback:function ($$v) {_vm.product=$$v},expression:"product"}},[_vm._v(" "),_vm._v(" "),_c('template',{slot:"selection"},[_c('span',{staticClass:"mdi mdi-magnify"})])],2)],1),_vm._ssrNode(" <div class=\"input-group custom-input-group mb-3\"><div class=\"input-group-prepend\"><span id=\"basic-addon1\" class=\"input-group-text-custom\"><span class=\"mdi mdi-magnify\"></span></span></div> <input type=\"text\" placeholder=\"e.g Ux Designer\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" required=\"required\""+(_vm._ssrAttr("value",(_vm.keyword)))+" class=\"form-control\"></div> "),_vm._ssrNode("<div class=\"input-group custom-input-group mb-3 mag-icon-search\">","</div>",[_c('multiselect',{attrs:{"options":_vm.categories,"multiple":false,"close-on-select":true,"clear-on-select":false,"hideSelected":false,"taggable":false,"placeholder":"Category","preserve-search":true,"internal-search":false},on:{"search-change":_vm.asyncFindCategories},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
var search = ref.search;
var isOpen = ref.isOpen;
return [(values.length)?_c('span',{staticClass:"multiselect__single",staticStyle:{"padding-left":"0px"}},[_vm._v(_vm._s(values[0]))]):_vm._e()]}}]),model:{value:(_vm.category),callback:function ($$v) {_vm.category=$$v},expression:"category"}},[_vm._v(" "),_c('span',{staticClass:"arrow",staticStyle:{"position":"absolute","right":"0","margin":"7px","font-size":"1.4rem"},attrs:{"slot":"caret"},slot:"caret"},[_c('i',{staticClass:"mdi mdi-chevron-down"})])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"input-group custom-input-group mb-3 mag-icon-search\">","</div>",[_c('multiselect',{attrs:{"options":_vm.jobtitles,"multiple":false,"close-on-select":true,"clear-on-select":true,"hideSelected":false,"taggable":false,"placeholder":"Job Title","internal-search":false,"preserve-search":true},on:{"search-change":_vm.asyncFindJobTitles},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
var search = ref.search;
var isOpen = ref.isOpen;
return [(values.length)?_c('span',{staticClass:"multiselect__single",staticStyle:{"padding-left":"0px"}},[_vm._v(_vm._s(values[0]))]):_vm._e()]}}]),model:{value:(_vm.jobtitle),callback:function ($$v) {_vm.jobtitle=$$v},expression:"jobtitle"}},[_vm._v(" "),_c('template',{slot:"noOptions"},[_vm._v(_vm._s(_vm.jobSearchSlotText))]),_vm._v(" "),_c('template',{slot:"noResult"},[_vm._v(_vm._s(_vm.jobSearchSlotText))]),_vm._v(" "),_c('template',{slot:"spinner"},[_vm._v("Searching Please Wait...")]),_vm._v(" "),_c('span',{staticClass:"arrow",staticStyle:{"position":"absolute","right":"0","margin":"7px","font-size":"1.4rem"},attrs:{"slot":"caret"},slot:"caret"},[_c('i',{staticClass:"mdi mdi-chevron-down"})])],2)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"country\">","</div>",[_c('multiselect',{attrs:{"options":_vm.countries,"multiple":true,"internal-search":false,"close-on-select":false,"clear-on-select":false,"hideSelected":false,"taggable":false,"placeholder":"Any Country","preserve-search":true},on:{"search-change":_vm.asyncFind},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
return [(values.length)?_c('span',{staticClass:"multiselect__single"},[_vm._v(_vm._s(values[0]))]):_vm._e()]}},{key:"option",fn:function(props){return [_c('div',{staticClass:"option__desc"},[(_vm.countries_value.includes(props.option))?_c('span',[_c('input',{attrs:{"type":"checkbox","value":"","checked":""}})]):_c('span',[_c('input',{attrs:{"type":"checkbox","value":""}})]),_vm._v(" "),_c('span',{staticClass:"option__small"},[_vm._v(_vm._s(props.option))])])]}}]),model:{value:(_vm.country),callback:function ($$v) {_vm.country=$$v},expression:"country"}},[_vm._v(" "),_vm._v(" "),_c('template',{slot:"selection"},[_c('span',{staticClass:"mdi mdi-magnify"})])],2)],1),_vm._ssrNode(" <div class=\"country-buttons text-left my-4\">"+(_vm._ssrList((_vm.country_groups),function(selectedCountry,index){return ("<a"+(_vm._ssrClass("card-tab-btn",_vm.selectedCountryGroup == selectedCountry ? 'active' : ''))+">"+_vm._ssrEscape(_vm._s(selectedCountry))+"</a>")}))+" "+((_vm.isHidden == true)?("<div id=\"show-city\" class=\"show-city mt-3\"><div class=\"close-city\"><a class=\"btn-dark \">x</a></div> <div class=\"city-list\">"+(_vm._ssrList((_vm.countrylist),function(city,index){return ("<a class=\"card-tab-btn \">"+_vm._ssrEscape("\n                          "+_vm._s(city)+" \n                          ")+((!_vm.country_selected.includes(city))?("<span class=\"mdi mdi-check-bold ml-2\"></span>"):"<!---->")+"</a>")}))+"</div></div>"):"<!---->")+"</div> <button type=\"button\" data-toggle=\"button\""+(_vm._ssrAttr("disabled",_vm.keyword.trim() == ''))+" title=\"Search\" class=\"btn-search-lg text-white my-4\">Search</button>")],2)])],2)])])]),_vm._ssrNode(" "),(_vm.isSearchDone)?_vm._ssrNode("<div class=\"bottom-section\">","</div>",[_vm._ssrNode("<div class=\"filter-section mb-4\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"main-filter-section\">","</div>",[_vm._ssrNode("<div class=\"form-row\">","</div>",[_vm._ssrNode("<div class=\"form-group col-md-2 text-left\">","</div>",[_vm._ssrNode("<label class=\"typo__label\">State</label> "),_c('multiselect',{attrs:{"options":_vm.states,"multiple":false,"preselect-first":true,"placeholder":"Any","close-on-select":true,"clear-on-select":false,"preserve-search":true},on:{"input":_vm.searchByState},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
var search = ref.search;
var isOpen = ref.isOpen;
return [(values.length)?_c('span',{staticClass:"multiselect__single"},[_vm._v(_vm._s(values.join(', ')))]):_vm._e()]}},{key:"option",fn:function(props){return [_c('div',{staticClass:"option__desc"},[_c('span',{staticClass:"option__small",domProps:{"innerHTML":_vm._s(props.option)}})])]}}],null,false,2810589801),model:{value:(_vm.state),callback:function ($$v) {_vm.state=$$v},expression:"state"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group col-md-3 text-left\">","</div>",[_vm._ssrNode("<label class=\"typo__label\">City</label> "),_c('multiselect',{attrs:{"options":_vm.cities,"multiple":false,"preselect-first":true,"placeholder":"Any","close-on-select":true,"clear-on-select":false,"preserve-search":true},on:{"input":_vm.searchByCity},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
var search = ref.search;
var isOpen = ref.isOpen;
return [(values.length)?_c('span',{staticClass:"multiselect__single"},[_vm._v(_vm._s(values.join(', ')))]):_vm._e()]}},{key:"option",fn:function(props){return [_c('div',{staticClass:"option__desc"},[_c('span',{staticClass:"option__small",domProps:{"innerHTML":_vm._s(props.option)}})])]}}],null,false,2810589801),model:{value:(_vm.city),callback:function ($$v) {_vm.city=$$v},expression:"city"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group col-md-3 text-left\">","</div>",[_vm._ssrNode("<label class=\"typo__label\">Company Size</label> "),_c('multiselect',{attrs:{"options":_vm.company_size,"multiple":true,"preselect-first":true,"placeholder":"Any","close-on-select":false,"clear-on-select":false,"preserve-search":true},on:{"input":_vm.searchBySize},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
var search = ref.search;
var isOpen = ref.isOpen;
return [(values.length)?_c('span',{staticClass:"multiselect__single"},[_vm._v(_vm._s(values.join(', ')))]):_vm._e()]}},{key:"option",fn:function(props){return [_c('div',{staticClass:"option__desc"},[(_vm.comapny_value.includes(props.option))?_c('span',[_c('input',{attrs:{"type":"checkbox","value":"","checked":""}})]):_c('span',[_c('input',{attrs:{"type":"checkbox","value":""}})]),_vm._v(" "),_c('span',{staticClass:"option__small",domProps:{"innerHTML":_vm._s(props.option)}})])]}}],null,false,2536218212),model:{value:(_vm.employee),callback:function ($$v) {_vm.employee=$$v},expression:"employee"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"form-group col-md-2 text-left\">","</div>",[_vm._ssrNode("<label for=\"inputPages\">Records</label> "),_c('multiselect',{attrs:{"options":_vm.record_options,"multiple":false,"preselect-first":true,"placeholder":"Any","close-on-select":true,"clear-on-select":false,"preserve-search":true},on:{"input":_vm.search},scopedSlots:_vm._u([{key:"selection",fn:function(ref){
var values = ref.values;
var search = ref.search;
var isOpen = ref.isOpen;
return [(values.length)?_c('span',{staticClass:"multiselect__single"},[_vm._v(_vm._s(values.join(', ')))]):_vm._e()]}},{key:"option",fn:function(props){return undefined}}],null,false,3880730889),model:{value:(_vm.rpp),callback:function ($$v) {_vm.rpp=$$v},expression:"rpp"}})],2)],2)])])]),_vm._ssrNode(" "+((_vm.isSearchDone)?("<div class=\"keep-walking-section mb-4\"><div class=\"container\"><p class=\"keep-walking mb-0 text-white\">Keep Walking</p> <p class=\"you-are-gem mb-0 text-white\">You are the Gem</p></div></div>"):"<!---->")+" "),(_vm.isSearchDone)?_vm._ssrNode("<div class=\"filter-cards-section\">","</div>",[_c('Filtercards',{attrs:{"companies":_vm.companies}})],1):_vm._e(),_vm._ssrNode(" "+((_vm.isSearchDone && _vm.companies && _vm.companies.length > 0 )?("<button class=\"btn-show-more text-white\">Show more</button>"):("<div class=\"text-center text-white\">No Records found</div>"))+" "),(_vm.isSearchDone)?_vm._ssrNode("<div class=\"most-viewed-organisation\">","</div>",[_vm._ssrNode("<div class=\"container mt-5 mb-4\"><p class=\"most-viewed-heading mb-0 text-white\">Most viewed organisation for </p> <p class=\"most-viewed-term mb-0 text-white\">"+_vm._ssrEscape("\n          "+_vm._s(_vm.keyword)+"\n          ")+"</p></div> "),(_vm.isSearchDone)?_vm._ssrNode("<div class=\"filter-cards-section\">","</div>",[_c('Filtercards',{attrs:{"companies":_vm.popular}})],1):_vm._e()],2):_vm._e()],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2e1e6770&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homeSlider.vue?vue&type=template&id=57216e19&scoped=true&
var homeSlidervue_type_template_id_57216e19_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var homeSlidervue_type_template_id_57216e19_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/homeSlider.vue?vue&type=template&id=57216e19&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searchCard.vue?vue&type=template&id=cc153c7a&scoped=true&
var searchCardvue_type_template_id_cc153c7a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-card"},[_vm._ssrNode("<h3 class=\"card-title mb-4\" data-v-cc153c7a>Search Organisations</h3> <div class=\"input-group custom-input-group mb-3\" data-v-cc153c7a><div class=\"input-group-prepend\" data-v-cc153c7a><span id=\"basic-addon1\" class=\"input-group-text-custom\" data-v-cc153c7a>@</span></div> <input type=\"text\" placeholder=\"e.g Ux Designe\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" class=\"form-control\" data-v-cc153c7a></div> <div class=\"input-group custom-input-group mb-4\" data-v-cc153c7a><div class=\"input-group-prepend\" data-v-cc153c7a><span id=\"basic-addon1\" class=\"input-group-text-custom\" data-v-cc153c7a>@</span></div> <input type=\"text\" placeholder=\"e.g Ux Designer\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" class=\"form-control\" data-v-cc153c7a></div> <div class=\"country-buttons text-left mb-4\" data-v-cc153c7a><a class=\"card-tab-btn\" data-v-cc153c7a>North America</a> <a class=\"card-tab-btn active\" data-v-cc153c7a>APAC</a></div> <div class=\"hr-seperator\" data-v-cc153c7a></div> <div class=\"score-section text-left\" data-v-cc153c7a><span data-v-cc153c7a>Score:</span> <span class=\"score-number\" data-v-cc153c7a>0-60</span></div> <button title=\"Search\" class=\"btn-search-lg text-white my-4\" data-v-cc153c7a>Search</button> <div class=\"popular-search-section text-left\" data-v-cc153c7a><span class=\"popular-heading\" data-v-cc153c7a>Popular Searches: </span> <span class=\"popular-item\" data-v-cc153c7a>Director</span>, <span class=\"popular-item\" data-v-cc153c7a>Senior Web Developer</span>,\n    </div>")])}
var searchCardvue_type_template_id_cc153c7a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/searchCard.vue?vue&type=template&id=cc153c7a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/searchCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/antd.css'
/* harmony default export */ var searchCardvue_type_script_lang_js_ = ({
  data() {
    return {
      value: 60
    };
  },

  components: {// VueSlider
  },

  mounted() {}

});
// CONCATENATED MODULE: ./components/searchCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_searchCardvue_type_script_lang_js_ = (searchCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/searchCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_searchCardvue_type_script_lang_js_,
  searchCardvue_type_template_id_cc153c7a_scoped_true_render,
  searchCardvue_type_template_id_cc153c7a_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "cc153c7a",
  "351d6747"
  
)

/* harmony default export */ var searchCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homeSlider.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var homeSlidervue_type_script_lang_js_ = ({
  components: {
    Searchcard: searchCard
  }
});
// CONCATENATED MODULE: ./components/homeSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_homeSlidervue_type_script_lang_js_ = (homeSlidervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/homeSlider.vue



function homeSlider_injectStyles (context) {
  
  var style0 = __webpack_require__(62)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var homeSlider_component = Object(componentNormalizer["a" /* default */])(
  components_homeSlidervue_type_script_lang_js_,
  homeSlidervue_type_template_id_57216e19_scoped_true_render,
  homeSlidervue_type_template_id_57216e19_scoped_true_staticRenderFns,
  false,
  homeSlider_injectStyles,
  "57216e19",
  "c0ca0de2"
  
)

/* harmony default export */ var homeSlider = (homeSlider_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Filtersection.vue?vue&type=template&id=77b56396&scoped=true&
var Filtersectionvue_type_template_id_77b56396_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"main-filter-section\" data-v-77b56396></div>")])}
var Filtersectionvue_type_template_id_77b56396_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Filtersection.vue?vue&type=template&id=77b56396&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Filtersection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Filtersectionvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Filtersection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Filtersectionvue_type_script_lang_js_ = (Filtersectionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Filtersection.vue



function Filtersection_injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Filtersection_component = Object(componentNormalizer["a" /* default */])(
  components_Filtersectionvue_type_script_lang_js_,
  Filtersectionvue_type_template_id_77b56396_scoped_true_render,
  Filtersectionvue_type_template_id_77b56396_scoped_true_staticRenderFns,
  false,
  Filtersection_injectStyles,
  "77b56396",
  "4c07e5a4"
  
)

/* harmony default export */ var Filtersection = (Filtersection_component.exports);
// EXTERNAL MODULE: ./components/Filtercards.vue + 4 modules
var Filtercards = __webpack_require__(59);

// CONCATENATED MODULE: ./api/constants.js
/* harmony default export */ var constants = ({
  COUNTRIES: ["any", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
  PRODUCTS: ["ABM", "BANT", "MQL", "HQL", "Custom Question Programs", "SQL", "Content Syndication", "Webina/Event Registrations", "Install Base"],
  // BASE_URL: "http://127.0.0.1:5000",
  BASE_URL: "http://18.218.36.147/db"
});
// EXTERNAL MODULE: external "vue-multiselect"
var external_vue_multiselect_ = __webpack_require__(52);
var external_vue_multiselect_default = /*#__PURE__*/__webpack_require__.n(external_vue_multiselect_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import FilteredSearch from '../components/filteredSearch.vue'




var VueScrollTo = __webpack_require__(53);

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: 'default',
  components: {
    Homeslider: homeSlider,
    Filtersection: Filtersection,
    Filtercards: Filtercards["default"],
    Multiselect: external_vue_multiselect_default.a
  },

  data() {
    return {
      category: '',
      categories: [],
      const_cat: [],
      jobtitle: '',
      jobtitles: [],
      const_JT: [],
      jobSearchSlotText: 'Loading please Wait . . .',
      showModal: false,
      isSearching: false,
      countrylist: [],
      country_groups: [],
      country_selected: [],
      selectedCountryGroup: [],
      isHidden: false,
      page: 1,
      scrollPosition: 0,
      view: "list",
      sliderMin: 0,
      sliderMax: 100,
      sliderVal: 80,
      sliderPos: null,
      isSearchDone: false,
      hasEqualSize: false,
      isSubscribed: false,
      isStateSelected: false,
      countries: constants.COUNTRIES,
      states: [""],
      cities: [""],
      emps: ["any"],
      companies: [],
      products: constants.PRODUCTS,
      popular: [],
      keywords: [],
      flips: [],
      popflips: [],
      last_id: null,
      type: "keyword",
      rpp: 15,
      country: [],
      product: [],
      new_countryl: [],
      state: "All",
      city: "All",
      keyword: "",
      employee: "Any",
      countries_value: [],
      comapny_value: [],
      company_size: ['Any', '1-99', '100-249', '250-499', '500-999', '1000-4999', '5000-9999', '10000+'],
      record_options: ['15', '50', '80', '100']
    };
  },

  created() {
    this.getKeywords();
    this.updateValues();
    this.loadCountryGroups();
    this.loadCategories();
    this.getJobTitles();
  },

  watch: {
    sliderVal(newVal) {
      const chngedVal = Number((newVal - this.sliderMin) * 100 / (this.sliderMax - this.sliderMin));
      this.sliderPos = this.sliderVal == 0 ? `0px` : `calc(${chngedVal}% + (${3 - chngedVal * 0.15}px))`;
    }

  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },

    async asyncFindCategories(query) {
      var filter = [];

      if (query != "") {
        await this.const_cat.forEach(industry => {
          if (industry != null && industry != "") {
            if (industry.toLowerCase().startsWith(query.toLowerCase())) {
              filter.push(industry);
            }
          }
        });
        this.categories = filter;
      }
    },

    async asyncFindJobTitles(query) {
      var filter = []; // console.log(query.toLowerCase())

      await this.const_JT.forEach(job => {
        if (job.toLowerCase().startsWith(query.toLowerCase())) {
          filter.push(job);
        }
      });
      this.jobtitles = filter;
    },

    async asyncFindProducts(query) {
      var filter = [];
      await constants.PRODUCTS.forEach(product => {
        if (product.toLowerCase().startsWith(query.toLowerCase())) {
          filter.push(product);
        }
      });
      this.products = filter;
    },

    async asyncFind(query) {
      var filter = [];
      await constants.COUNTRIES.forEach(country => {
        if (country.toLowerCase().startsWith(query.toLowerCase())) {
          filter.push(country);
        }
      });
      this.countries = filter;
    },

    async showCountry(selectedCountry) {
      if (this.selectedCountryGroup.includes(selectedCountry)) {
        var index = this.selectedCountryGroup.indexOf(selectedCountry);

        if (index > -1) {
          this.selectedCountryGroup.splice(index, 1);
          this.isHidden = false;
        }
      } else {
        this.selectedCountryGroup.push(selectedCountry);
        this.isHidden = true;
        const res = await this.$axios.$get("/group?country_group=" + selectedCountry);

        if (res.status == 'success') {
          this.countrylist = res.Countries;
        }
      }
    },

    async getJobTitles(query) {
      let res = await this.$axios.$get("/jobtitle"); // let filter =[]
      // await res.Titles.forEach(job=>{
      //   if(job!=null){
      //     if((/[a-zA-Z]/).test(job.charAt(0))){
      //       filter.push(job)
      //     }
      //   }
      // })
      // this.jobtitles= filter;
      // this.const_JT = filter;

      this.jobtitles = res.Titles;
      this.const_JT = res.Titles;
    },

    loadCountryGroups() {
      this.$store.dispatch('default-module/load-countrygroups').then(countryGroups => {
        this.country_groups = countryGroups;
      });
    },

    loadCategories() {
      this.$store.dispatch('default-module/load-categories').then(categories => {
        this.categories = categories.filter(category => category != null && /[a-zA-Z]/.test(job.charAt(0)));
        this.const_cat = categories;
      });
    },

    removeCountry(city) {
      const index = this.country_selected.indexOf(city);

      if (index > -1) {
        this.country_selected.splice(index, 1);
      } else {
        this.country_selected.push(city);
      }
    },

    removeFromSearch() {
      this.country = this.countrylist.filter(item => {
        return !this.country_selected.includes(item);
      });
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    toogleMenu() {
      var menu = document.getElementById("main-navbar");
      menu.classList.toggle("is-active");
    },

    toggleFlip(i) {
      if (this.flips.includes(i)) {
        const indx = this.flips.indexOf(i);
        this.flips.splice(indx, 1);
      } else {
        this.flips.push(i);
        this.addPopularity(this.companies[i].id);
      }
    },

    togglePopFlip(i) {
      if (this.popflips.includes(i)) {
        const indx = this.popflips.indexOf(i);
        this.popflips.splice(indx, 1);
      } else {
        this.popflips.push(i);
      }
    },

    search_keyord(kywrd) {
      this.keyword = kywrd;
      this.search_type = "keyword";
      this.search();
    },

    compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const A = a.score;
      const B = b.score;
      let comparison = 0;

      if (A > B) {
        comparison = -1;
      } else if (A < B) {
        comparison = 1;
      }

      return comparison;
    },

    applyFilter() {
      this.isSearching = true;
      this.showModal = false;
      this.searchBySize();
    },

    updateValues() {
      const chngedVal = Number((this.sliderVal - this.sliderMin) * 100 / (this.sliderMax - this.sliderMin));
      this.sliderPos = this.sliderVal == 0 ? `0px` : `calc(${chngedVal}% + (${3 - chngedVal * 0.15}px))`;
    },

    async addPopularity(id) {
      await this.$axios.$post("/add_popularity", {
        id
      });
    },

    async search() {
      //intial search filter to retrive the companies from the backend
      console.log(this.selectedCountryGroup + "  " + this.selectedCountry);
      this.state = 'All';

      if (this.country[0]) {
        await this.country.forEach(cont => {
          this.new_countryl.push(cont);
        });
      }

      const contrie1 = await this.$axios.$get("/group?country_group=" + this.selectedCountryGroup[0]);

      if (contrie1.status == 'success') {
        if (this.selectedCountryGroup[0]) {
          await contrie1.Countries.forEach(cont => {
            this.new_countryl.push(cont);
          });
        }
      } // this.country = new_countryl


      this.isSearchDone = true;
      this.isSearching = true;
      this.page = 1; //search box parameters

      console.log(this.new_countryl.length);
      let params = {
        score: this.sliderVal,
        keyword: this.keyword,
        search_type: this.type,
        // country: this.country !== "any" ? this.country : "",
        country: this.new_countryl.length != 0 ? this.new_countryl : "",
        state: this.state !== "All" ? this.state : "",
        city: this.city !== "All" ? this.city : "",
        employee: !this.employee.includes("Any") ? this.employee : "1-10000000",
        category: this.category,
        jobtitle: this.jobtitle
      };
      console.log(params); //post the parameters to /search api endpoint to retrive the filterd list of comapnies

      let url = "/search?limit=" + this.rpp + "&page=" + this.page;
      const res = await this.$axios.$post(url, params); // if we get the data succefully check number of companies to update the last_id var and 
      //comapnies list to be filled with retrived data

      if (res.status == 'sucess') {
        if (res.data.length > 0) {
          this.last_id = res.data[res.data.length - 1].id;
        }

        this.companies = res.data.sort(this.compare);
      } //once the backend api response is recived user will be scrolled to a results


      this.isSearching = false;
      VueScrollTo.scrollTo("#results", 200, {
        offset: -50
      }); //popularResult list will be populated with according results of the keyword being searched

      params = {
        keyword: this.keyword,
        search_type: this.type,
        Country: this.country.join(','),
        Industry: this.category,
        JobTitle: this.jobtitle
      };
      const popularResult = await this.$axios.$get("/popular", {
        params
      }); //if successful popular list will be populated

      if (popularResult.status == 'sucess') {
        this.popular = popularResult.data;
      } //if the user input for the country is any then the subfilter of state and city will be filled with all the available cities and states


      if (this.country == "any") {
        console.log("ALL STATES AND CITIES FETCHED");
        const states = await this.$axios.$post("/states");
        const cities = await this.$axios.$post("/cities");
        this.states = states.data;
        this.cities = cities.data;
      } //if user has particular country then that countries sates and cities will be populated
      else {
          let params = {
            country: this.country
          };
          console.log(params);
          this.$axios.$post("/states", params).then(response => {
            this.states = response.data;
          });
          this.$axios.$post("/cities", params).then(response => {
            this.cities = response.data;
          });
        }

      this.hasEqualSize = res.data.length == this.rpp ? true : false;
    },

    async searchBySize() {
      this.isSearching = true;
      this.removeFromSearch();
      this.page = 1;
      let url = "/search?limit=" + this.rpp + "&page=" + this.page;
      const res = await this.$axios.$post(url, {
        score: this.sliderVal,
        limit: this.rpp,
        page: this.page,
        keyword: this.keyword,
        search_type: this.type,
        country: this.country !== "any" ? this.country : "",
        state: this.state !== "All" ? this.state : "",
        city: this.city !== "All" ? this.city : "",
        employee: !this.employee.includes("Any") ? this.employee : "1-10000000",
        category: this.category,
        jobtitle: this.jobtitle
      });

      if (res.status == 'sucess') {
        if (res.data.length > 0) {
          this.last_id = res.data[res.data.length - 1].id;
        }

        this.companies = res.data.sort(this.compare);
      }

      this.hasEqualSize = res.data.length == this.rpp ? true : false;
      this.isSearching = false;
    },

    async searchByState() {
      console.log('asfdadsf');
      this.isSearching = true;
      this.page = 1;
      this.removeFromSearch();
      let url = "/search?limit=" + this.rpp + "&page=" + this.page;
      const res = await this.$axios.$post(url, {
        score: this.sliderVal,
        keyword: this.keyword,
        search_type: this.type,
        // country: this.country !== "any" ? this.country : "",
        country: this.new_countryl.length != 0 ? this.new_countryl : "",
        state: this.state !== "All" ? this.state : "",
        city: this.city !== "All" ? this.city : "",
        employee: !this.employee.includes("Any") ? this.employee : "1-10000000",
        category: this.category,
        jobtitle: this.jobtitle
      });

      if (res.status == 'sucess') {
        if (res.data.length > 0) {
          this.last_id = res.data[res.data.length - 1].id;
        }

        this.companies = res.data.sort(this.compare);
      }

      console.log(this.new_countryl);
      let params = {
        state: this.state !== "any" ? this.state : "",
        country: this.new_countryl
      };
      this.$axios.$post("/cities", params).then(response => {
        this.cities = response.data;
      });
      this.cities.push("All");
      this.city = "All";
      this.hasEqualSize = res.data.length == this.rpp ? true : false;
      this.isSearching = false;
    },

    async searchByCity() {
      this.isSearching = true;
      this.removeFromSearch();
      this.page = 1;
      let url = "/search?limit=" + this.rpp + "&page=" + this.page;
      let param = {
        score: this.sliderVal,
        limit: this.rpp,
        page: this.page,
        keyword: this.keyword,
        search_type: this.type,
        state: this.state !== "All" ? this.state : "",
        country: this.new_countryl.length != 0 ? this.new_countryl : "",
        city: this.city !== "All" ? this.city : "",
        employee: !this.employee.includes("Any") ? this.employee : "1-10000000",
        category: this.category,
        jobtitle: this.jobtitle
      };
      const res = await this.$axios.$post(url, param);

      if (res.status == 'sucess') {
        if (res.data.length > 0) {
          this.last_id = res.data[res.data.length - 1].id;
        }

        this.companies = res.data.sort(this.compare);
      }

      this.hasEqualSize = res.data.length == this.rpp ? true : false;
      this.isSearching = false;
    },

    async fetchMore() {
      this.isSearching = true;
      this.removeFromSearch();
      this.page = this.page + 1;
      let url = "/search?limit=" + this.rpp + "&page=" + this.page;
      let param = {
        lId: this.last_id,
        score: this.sliderVal,
        limit: this.rpp,
        keyword: this.keyword,
        search_type: this.type,
        country: this.country !== "any" ? this.country : "",
        state: this.state !== "All" ? this.state : "",
        city: this.city !== "All" ? this.city : "",
        employee: !this.employee.includes("Any") ? this.employee : "1-10000000",
        category: this.category,
        jobtitle: this.jobtitle
      };
      const res = await this.$axios.$post(url, param);

      if (res.status == 'sucess') {
        if (res.data.length > 0) {
          this.last_id = res.data[res.data.length - 1].id;
          res.data.sort(this.compare).forEach(el => this.companies.push(el));
        }
      }

      this.hasEqualSize = res.data.length == this.rpp ? true : false;
      this.isSearching = false;
    },

    async getKeywords() {
      const res = await this.$axios.$get("/keywords");
      this.keywords = res.data;
    },

    getClass(score) {
      if (score <= 35) {
        return 'is-critical';
      } else if (score > 35 && score <= 60) {
        return 'is-good';
      } else {
        return '';
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(22)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(68)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "1e5d97e3"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/* nuxt-component-imports */
installComponents(pages_component, {Filtercards: __webpack_require__(59).default})


/***/ })

};;
//# sourceMappingURL=index.js.map