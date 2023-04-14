/*! builder: @ewizardjs/dev-builder - version: 4.4.5  framework: ewizardjs - version: 5.9.1 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("Content")["app"]); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["index"] = factory(require("Content")["app"]); else root["Content"] = root["Content"] || {}, 
    root["Content"]["index"] = factory(root["Content"]["app"]);
})(window, (function(__WEBPACK_EXTERNAL_MODULE__app__) {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./node_modules/ewizardjs/entries/index.js");
    }({
        "./app": function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__app__;
        },
        "./node_modules/ewizardjs/entries/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var _app = _interopRequireDefault(__webpack_require__("./app"));
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    }))), keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                        _defineProperty(target, key, source[key]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    }));
                }
                return target;
            }
            function _defineProperty(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            window.ewizardjs = {
                initApp: _app.default
            };
            if (true) {
                const PUBLIC_PATH = /{publicPath}/g;
                function transformLocalization(localization) {
                    return Object.entries(localization).reduce(((transformedLocalization, _ref) => {
                        let [key, value] = _ref;
                        transformedLocalization[key] = typeof value === "string" ? value.replace(PUBLIC_PATH, "") : value;
                        return transformedLocalization;
                    }), {});
                }
                function transformReferences(references) {
                    return Object.entries(references).reduce(((transformedReferences, _ref2) => {
                        let [key, value] = _ref2;
                        transformedReferences[key] = _objectSpread(_objectSpread({}, value), {}, {
                            name: value.name.replace(PUBLIC_PATH, "")
                        });
                        return transformedReferences;
                    }), {});
                }
                function extendVue(vueApp, state) {
                    var _state$references;
                    const {Vue: Vue, components: components, references: references} = vueApp;
                    Vue.prototype.$getComponentType = function() {
                        return this.$options.__componentType || "component";
                    };
                    const currentLocale = Vue.prototype.$settings.getRaw().localization.current;
                    if (references && state !== null && state !== void 0 && (_state$references = state.references) !== null && _state$references !== void 0 && _state$references[currentLocale]) {
                        references.references = transformReferences(state.references[currentLocale]);
                    }
                    extendSlides(Vue, components, state);
                }
                function extendSlides(Vue, slides, state) {
                    if (state.components) {
                        slides.forEach((slide => {
                            extendSlide(slide.slideId, slide, state, Vue);
                        }));
                    }
                }
                const editableComponent = {
                    name: "v-slide",
                    computed: {
                        template() {
                            var _this$component, _this$component$templ;
                            return (_this$component = this.component) === null || _this$component === void 0 ? void 0 : (_this$component$templ = _this$component.template) === null || _this$component$templ === void 0 ? void 0 : _this$component$templ.replace(PUBLIC_PATH, "");
                        },
                        component() {
                            var _this$state;
                            return ((_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.components) && this.state.components[this.slideId];
                        }
                    },
                    created() {
                        var _this$component2, _this$component3;
                        if (!this.$root.$i18n.missing) {
                            this.$root.$i18n.missing = () => "";
                        }
                        const currentLocale = this.$settings.getRaw().localization.current;
                        const commonI18n = (_this$component2 = this.component) === null || _this$component2 === void 0 ? void 0 : _this$component2.commonI18n;
                        if (commonI18n) {
                            this.$root.$i18n.locale = currentLocale;
                            Object.entries(commonI18n).forEach((_ref3 => {
                                let [locale, messages = {}] = _ref3;
                                this.$root.$i18n.mergeLocaleMessage(locale, transformLocalization(messages));
                            }));
                        }
                        const i18n = (_this$component3 = this.component) === null || _this$component3 === void 0 ? void 0 : _this$component3.i18n;
                        if (i18n) {
                            Object.entries(i18n).forEach((_ref4 => {
                                let [locale, messages = {}] = _ref4;
                                this.$i18n.mergeLocaleMessage(locale, transformLocalization(messages));
                            }));
                        }
                    }
                };
                function extendSlide(slideId, slideComponent, state, Vue) {
                    const editorSlideMixin = {
                        computed: {
                            slideId() {
                                if (this.$getComponentType() === "slide") {
                                    return this.$navigator.structure.currentSubslide || this.$navigator.getCurrentSlide().slide;
                                }
                                return slideId;
                            },
                            state() {
                                return state;
                            }
                        }
                    };
                    if (Array.isArray(slideComponent.mixins)) {
                        slideComponent.mixins.push(editorSlideMixin, editableComponent);
                    } else {
                        slideComponent.mixins = [ editorSlideMixin, editableComponent ];
                    }
                    const __baseRenderer = slideComponent.render;
                    slideComponent.render = function() {
                        return this.template ? Vue.compile(this.template).render.call(this) : __baseRenderer.call(this);
                    };
                }
                function appendScript(src) {
                    const script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = src;
                    document.body.appendChild(script);
                }
                try {
                    appendScript("./build/dev/templates.js");
                } catch {
                    window.Templates = [];
                }
                try {
                    appendScript("./build/dev/state.js");
                } catch {
                    window.__contentState = undefined;
                }
                window.addEventListener("load", (() => {
                    var _window, _window2, _window2$Templates, _state$getters;
                    const state = ((_window = window) === null || _window === void 0 ? void 0 : _window.__contentState) || undefined;
                    const templatedComponents = ((_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$Templates = _window2.Templates) === null || _window2$Templates === void 0 ? void 0 : _window2$Templates.templates) || [];
                    (0, _app.default)(undefined, {
                        templatedComponents: templatedComponents,
                        structure: state === null || state === void 0 ? void 0 : (_state$getters = state.getters) === null || _state$getters === void 0 ? void 0 : _state$getters.structure
                    }).then((vueApp => {
                        const {Vue: Vue, navigator: navigator} = vueApp;
                        if (state) {
                            var _navigator$navigation;
                            extendVue(vueApp, state);
                            if (navigator !== null && navigator !== void 0 && (_navigator$navigation = navigator.navigation) !== null && _navigator$navigation !== void 0 && _navigator$navigation.vueRouter) {
                                extendSlides(Vue, navigator.navigation.vueRouter.getTemplatedComponents(), state);
                            }
                        }
                        const app = vueApp.create("#app");
                        window.ewizardjs.navigator = app.$navigator;
                        window.ewizardjs.monitoring = app.$options.externalMonitoringAPI;
                        window.ewizardjs.structure = app.$structure;
                        window.ewizardjs.settings = app.$settings;
                    }));
                }));
            } else {}
        }
    });
}));