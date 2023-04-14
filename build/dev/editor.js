/*! builder: @ewizardjs/dev-builder - version: 4.4.5  framework: ewizardjs - version: 5.9.1 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["editor"] = factory(); else root["Content"] = root["Content"] || {}, 
    root["Content"]["editor"] = factory();
})(window, (function() {
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
        return __webpack_require__(__webpack_require__.s = "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/entry-editor.js");
    }({
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/compound-manifest.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.requiredBlocks = {};
            exports.blockManifest = {
                components: []
            };
            exports.componentManifest = {
                components: [ {
                    id: "wiz-text",
                    name: {
                        eng: "Text"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-text/icon.png")
                }, {
                    id: "wiz-image",
                    name: {
                        eng: "Image"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-image/icon.png")
                }, {
                    id: "wiz-bg-bubble",
                    name: {
                        eng: "Bubble"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-bubble/icon.png")
                }, {
                    id: "wiz-bg-button",
                    name: {
                        eng: "Button"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-button/icon.png")
                }, {
                    id: "wiz-bg-close-popup-button",
                    name: {
                        eng: "Close popup-slide button"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-close-popup-button/icon.png")
                }, {
                    id: "wiz-bg-container",
                    name: {
                        eng: "Container"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-container/icon.png")
                }, {
                    id: "wiz-bg-bar-graph",
                    name: {
                        eng: "Bar Graph"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-bar-graph/icon.png")
                }, {
                    id: "wiz-bg-line-graph",
                    name: {
                        eng: "Line Graph"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-line-graph/icon.png")
                }, {
                    id: "wiz-bg-navigation-bar",
                    name: {
                        eng: "Navigation Bar"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-navigation-bar/icon.png")
                }, {
                    id: "wiz-bg-popup",
                    name: {
                        eng: "Popup"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-popup/icon.png")
                }, {
                    id: "wiz-bg-ribbon",
                    name: {
                        eng: "Ribbon dropdown"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-ribbon/icon.png")
                }, {
                    id: "wiz-bg-sidebar",
                    name: {
                        eng: "Sidebar"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-sidebar/icon.png")
                }, {
                    id: "wiz-bg-sliding-content",
                    name: {
                        eng: "Sliding Content"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-sliding-content/icon.png")
                }, {
                    id: "wiz-bg-smpc",
                    name: {
                        eng: "SMPC Button"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-smpc/icon.png")
                }, {
                    id: "wiz-bg-study-design",
                    name: {
                        eng: "Study Design Button"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-study-design/icon.png")
                }, {
                    id: "wiz-bg-tab-group",
                    name: {
                        eng: "Tab Group"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-tab-group/icon.png")
                }, {
                    id: "wiz-bg-navigation-arrows",
                    name: {
                        eng: "Navigation Arrows"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-navigation-arrows/icon.png")
                }, {
                    id: "wiz-bg-grid-container",
                    name: {
                        eng: "Grid Container"
                    },
                    model: {},
                    icon: __webpack_require__("./node_modules/wiz-bg-grid-container/icon.png")
                } ],
                ignore: []
            };
            exports.blockThemesManifest = {
                components: []
            };
            exports.componentsThemesManifest = {
                components: []
            };
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/entry-editor.js": function(module, exports, __webpack_require__) {
            "use strict";
            __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/public-path.js");
            var _path = __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/path-browserify/index.js");
            var packageJson = _interopRequireWildcard(__webpack_require__("./package.json"));
            var _utils = __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/utils.js");
            var _clone = _interopRequireDefault(__webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/clone/clone.js"));
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _getRequireWildcardCache(nodeInterop) {
                if (typeof WeakMap !== "function") return null;
                var cacheBabelInterop = new WeakMap;
                var cacheNodeInterop = new WeakMap;
                return (_getRequireWildcardCache = function(nodeInterop) {
                    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
                })(nodeInterop);
            }
            function _interopRequireWildcard(obj, nodeInterop) {
                if (!nodeInterop && obj && obj.__esModule) {
                    return obj;
                }
                if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
                    return {
                        default: obj
                    };
                }
                var cache = _getRequireWildcardCache(nodeInterop);
                if (cache && cache.has(obj)) {
                    return cache.get(obj);
                }
                var newObj = {};
                var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var key in obj) {
                    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                        if (desc && (desc.get || desc.set)) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
                newObj.default = obj;
                if (cache) {
                    cache.set(obj, newObj);
                }
                return newObj;
            }
            window.__components = window.__components || [];
            window.__localBlocks = [];
            window.__blocks = [];
            window.__blocksList = [];
            window.__blocksGroups = [];
            window.__blocksFilters = [];
            window.__brandsList = [];
            window.__componentsList = [];
            window.__modulesList = [];
            window.__componentsFileProps = {};
            window.__installedComponents = {};
            if (true) {
                if (false) {}
                if (false) {}
                if (false) {}
                if (true) {
                    const manifest = __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/compound-manifest.js");
                    window.__componentsList = window.__componentsList.concat(manifest.componentManifest.components);
                }
                if (false) {}
                if ({
                    "wiz-bg-bar-graph": [],
                    "wiz-bg-bubble": [ "arrow", "background-image" ],
                    "wiz-bg-button": [],
                    "wiz-bg-close-popup-button": [],
                    "wiz-bg-container": [],
                    "wiz-bg-grid-container": [],
                    "wiz-bg-line-graph": [ "graph-image" ],
                    "wiz-bg-navigation-arrows": [ "arrow-left", "arrow-right" ],
                    "wiz-bg-navigation-bar": [],
                    "wiz-bg-popup": [],
                    "wiz-bg-references": [ "logo-src", "icon", "active-icon" ],
                    "wiz-bg-ribbon": [ "open-icon-image", "close-icon-image" ],
                    "wiz-bg-sidebar": [],
                    "wiz-bg-sitemap": [ "icon", "active-icon" ],
                    "wiz-bg-sliding-content": [],
                    "wiz-bg-smpc": [ "open-pdf", "icon", "active-icon" ],
                    "wiz-bg-study-design": [ "open-pdf", "icon", "active-icon" ],
                    "wiz-bg-tab-group": [],
                    "wiz-block": [ "module-source" ],
                    "wiz-button": [],
                    "wiz-container": [],
                    "wiz-image": [ "src" ],
                    "wiz-indicators": [ "left-arrow-image", "rigth-arrow-image" ],
                    "wiz-text": [],
                    "wiz-references-button": [ "image-src" ]
                }) {
                    window.__componentsFileProps = {
                        "wiz-bg-bar-graph": [],
                        "wiz-bg-bubble": [ "arrow", "background-image" ],
                        "wiz-bg-button": [],
                        "wiz-bg-close-popup-button": [],
                        "wiz-bg-container": [],
                        "wiz-bg-grid-container": [],
                        "wiz-bg-line-graph": [ "graph-image" ],
                        "wiz-bg-navigation-arrows": [ "arrow-left", "arrow-right" ],
                        "wiz-bg-navigation-bar": [],
                        "wiz-bg-popup": [],
                        "wiz-bg-references": [ "logo-src", "icon", "active-icon" ],
                        "wiz-bg-ribbon": [ "open-icon-image", "close-icon-image" ],
                        "wiz-bg-sidebar": [],
                        "wiz-bg-sitemap": [ "icon", "active-icon" ],
                        "wiz-bg-sliding-content": [],
                        "wiz-bg-smpc": [ "open-pdf", "icon", "active-icon" ],
                        "wiz-bg-study-design": [ "open-pdf", "icon", "active-icon" ],
                        "wiz-bg-tab-group": [],
                        "wiz-block": [ "module-source" ],
                        "wiz-button": [],
                        "wiz-container": [],
                        "wiz-image": [ "src" ],
                        "wiz-indicators": [ "left-arrow-image", "rigth-arrow-image" ],
                        "wiz-text": [],
                        "wiz-references-button": [ "image-src" ]
                    };
                }
                if (window.__modulesList) {
                    window.__modulesList.forEach(requireBlock);
                }
                /marker-components-start/;
                const blocksList = {};
                /marker-components-end/;
            } else {}
            if (packageJson) {
                window.__installedComponents = getInstalledComponents();
            }
            function requireBlock(_ref) {
                let {id: id} = _ref;
                /marker-blocks-start/;
                const block = blocksList[id];
                /marker-blocks-end/;
                if (block.methods) {
                    replaceMethods(block);
                }
                window.__blocks.push(block);
            }
            function replaceMethods(block) {
                Object.keys(block.methods).forEach((method => {
                    const methodFunction = block.methods[method];
                    block.methods[method] = function() {
                        console.error(`Methods are not supported in Block content type`);
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        return methodFunction.call(this, args);
                    };
                }));
            }
            function getInstalledComponents() {
                return Object.keys(packageJson.dependencies || {}).reduce((function(data, key) {
                    data[key] = {
                        path: "./node_modules/" + key
                    };
                    return data;
                }), {});
            }
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/public-path.js": function(module, exports, __webpack_require__) {
            "use strict";
            __webpack_require__.p = window.__publicPath || "./";
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/utils.js": function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.getCurrentTheme = getCurrentTheme;
            exports.setPropManifestToWindow = setPropManifestToWindow;
            function getCurrentTheme(settings) {
                if (settings.getCurrentTheme) {
                    return settings.getCurrentTheme();
                }
                return settings.getRawByPath("theme", "");
            }
            function setPropManifestToWindow(manifest, prop, windowProp) {
                const propExist = manifest[prop] !== undefined;
                if (propExist) {
                    window[windowProp] = window[windowProp].concat(manifest[prop]);
                }
                window[windowProp] = window[windowProp].concat([]);
            }
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/base64-js/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (var i = 0, len = code.length; i < len; ++i) {
                lookup[i] = code[i];
                revLookup[code.charCodeAt(i)] = i;
            }
            revLookup["-".charCodeAt(0)] = 62;
            revLookup["_".charCodeAt(0)] = 63;
            function getLens(b64) {
                var len = b64.length;
                if (len % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var validLen = b64.indexOf("=");
                if (validLen === -1) validLen = len;
                var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
                return [ validLen, placeHoldersLen ];
            }
            function byteLength(b64) {
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function _byteLength(b64, validLen, placeHoldersLen) {
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function toByteArray(b64) {
                var tmp;
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                var curByte = 0;
                var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
                var i;
                for (i = 0; i < len; i += 4) {
                    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                    arr[curByte++] = tmp >> 16 & 255;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 2) {
                    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 1) {
                    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                return arr;
            }
            function tripletToBase64(num) {
                return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
            }
            function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for (var i = start; i < end; i += 3) {
                    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
                    output.push(tripletToBase64(tmp));
                }
                return output.join("");
            }
            function fromByteArray(uint8) {
                var tmp;
                var len = uint8.length;
                var extraBytes = len % 3;
                var parts = [];
                var maxChunkLength = 16383;
                for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
                }
                if (extraBytes === 1) {
                    tmp = uint8[len - 1];
                    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
                } else if (extraBytes === 2) {
                    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
                }
                return parts.join("");
            }
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/clone/clone.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(Buffer) {
                var clone = function() {
                    "use strict";
                    function _instanceof(obj, type) {
                        return type != null && obj instanceof type;
                    }
                    var nativeMap;
                    try {
                        nativeMap = Map;
                    } catch (_) {
                        nativeMap = function() {};
                    }
                    var nativeSet;
                    try {
                        nativeSet = Set;
                    } catch (_) {
                        nativeSet = function() {};
                    }
                    var nativePromise;
                    try {
                        nativePromise = Promise;
                    } catch (_) {
                        nativePromise = function() {};
                    }
                    function clone(parent, circular, depth, prototype, includeNonEnumerable) {
                        if (typeof circular === "object") {
                            depth = circular.depth;
                            prototype = circular.prototype;
                            includeNonEnumerable = circular.includeNonEnumerable;
                            circular = circular.circular;
                        }
                        var allParents = [];
                        var allChildren = [];
                        var useBuffer = typeof Buffer != "undefined";
                        if (typeof circular == "undefined") circular = true;
                        if (typeof depth == "undefined") depth = Infinity;
                        function _clone(parent, depth) {
                            if (parent === null) return null;
                            if (depth === 0) return parent;
                            var child;
                            var proto;
                            if (typeof parent != "object") {
                                return parent;
                            }
                            if (_instanceof(parent, nativeMap)) {
                                child = new nativeMap;
                            } else if (_instanceof(parent, nativeSet)) {
                                child = new nativeSet;
                            } else if (_instanceof(parent, nativePromise)) {
                                child = new nativePromise((function(resolve, reject) {
                                    parent.then((function(value) {
                                        resolve(_clone(value, depth - 1));
                                    }), (function(err) {
                                        reject(_clone(err, depth - 1));
                                    }));
                                }));
                            } else if (clone.__isArray(parent)) {
                                child = [];
                            } else if (clone.__isRegExp(parent)) {
                                child = new RegExp(parent.source, __getRegExpFlags(parent));
                                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
                            } else if (clone.__isDate(parent)) {
                                child = new Date(parent.getTime());
                            } else if (useBuffer && Buffer.isBuffer(parent)) {
                                if (Buffer.allocUnsafe) {
                                    child = Buffer.allocUnsafe(parent.length);
                                } else {
                                    child = new Buffer(parent.length);
                                }
                                parent.copy(child);
                                return child;
                            } else if (_instanceof(parent, Error)) {
                                child = Object.create(parent);
                            } else {
                                if (typeof prototype == "undefined") {
                                    proto = Object.getPrototypeOf(parent);
                                    child = Object.create(proto);
                                } else {
                                    child = Object.create(prototype);
                                    proto = prototype;
                                }
                            }
                            if (circular) {
                                var index = allParents.indexOf(parent);
                                if (index != -1) {
                                    return allChildren[index];
                                }
                                allParents.push(parent);
                                allChildren.push(child);
                            }
                            if (_instanceof(parent, nativeMap)) {
                                parent.forEach((function(value, key) {
                                    var keyChild = _clone(key, depth - 1);
                                    var valueChild = _clone(value, depth - 1);
                                    child.set(keyChild, valueChild);
                                }));
                            }
                            if (_instanceof(parent, nativeSet)) {
                                parent.forEach((function(value) {
                                    var entryChild = _clone(value, depth - 1);
                                    child.add(entryChild);
                                }));
                            }
                            for (var i in parent) {
                                var attrs;
                                if (proto) {
                                    attrs = Object.getOwnPropertyDescriptor(proto, i);
                                }
                                if (attrs && attrs.set == null) {
                                    continue;
                                }
                                child[i] = _clone(parent[i], depth - 1);
                            }
                            if (Object.getOwnPropertySymbols) {
                                var symbols = Object.getOwnPropertySymbols(parent);
                                for (var i = 0; i < symbols.length; i++) {
                                    var symbol = symbols[i];
                                    var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
                                    if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                                        continue;
                                    }
                                    child[symbol] = _clone(parent[symbol], depth - 1);
                                    if (!descriptor.enumerable) {
                                        Object.defineProperty(child, symbol, {
                                            enumerable: false
                                        });
                                    }
                                }
                            }
                            if (includeNonEnumerable) {
                                var allPropertyNames = Object.getOwnPropertyNames(parent);
                                for (var i = 0; i < allPropertyNames.length; i++) {
                                    var propertyName = allPropertyNames[i];
                                    var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
                                    if (descriptor && descriptor.enumerable) {
                                        continue;
                                    }
                                    child[propertyName] = _clone(parent[propertyName], depth - 1);
                                    Object.defineProperty(child, propertyName, {
                                        enumerable: false
                                    });
                                }
                            }
                            return child;
                        }
                        return _clone(parent, depth);
                    }
                    clone.clonePrototype = function clonePrototype(parent) {
                        if (parent === null) return null;
                        var c = function() {};
                        c.prototype = parent;
                        return new c;
                    };
                    function __objToStr(o) {
                        return Object.prototype.toString.call(o);
                    }
                    clone.__objToStr = __objToStr;
                    function __isDate(o) {
                        return typeof o === "object" && __objToStr(o) === "[object Date]";
                    }
                    clone.__isDate = __isDate;
                    function __isArray(o) {
                        return typeof o === "object" && __objToStr(o) === "[object Array]";
                    }
                    clone.__isArray = __isArray;
                    function __isRegExp(o) {
                        return typeof o === "object" && __objToStr(o) === "[object RegExp]";
                    }
                    clone.__isRegExp = __isRegExp;
                    function __getRegExpFlags(re) {
                        var flags = "";
                        if (re.global) flags += "g";
                        if (re.ignoreCase) flags += "i";
                        if (re.multiline) flags += "m";
                        return flags;
                    }
                    clone.__getRegExpFlags = __getRegExpFlags;
                    return clone;
                }();
                if (true && module.exports) {
                    module.exports = clone;
                }
            }).call(this, __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer);
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/ieee754/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            exports.read = function(buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & (1 << -nBits) - 1;
                s >>= -nBits;
                nBits += eLen;
                for (;nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for (;nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                if (e === 0) {
                    e = 1 - eBias;
                } else if (e === eMax) {
                    return m ? NaN : (s ? -1 : 1) * Infinity;
                } else {
                    m = m + Math.pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };
            exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                } else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    } else {
                        value += rt * Math.pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * Math.pow(2, mLen);
                        e = e + eBias;
                    } else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }
                for (;mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
                e = e << mLen | m;
                eLen += mLen;
                for (;eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
                buffer[offset + i - d] |= s * 128;
            };
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/isarray/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            var toString = {}.toString;
            module.exports = Array.isArray || function(arr) {
                return toString.call(arr) == "[object Array]";
            };
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/node-libs-browser/node_modules/buffer/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(global) {
                var base64 = __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/base64-js/index.js");
                var ieee754 = __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/ieee754/index.js");
                var isArray = __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/isarray/index.js");
                exports.Buffer = Buffer;
                exports.SlowBuffer = SlowBuffer;
                exports.INSPECT_MAX_BYTES = 50;
                Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
                exports.kMaxLength = kMaxLength();
                function typedArraySupport() {
                    try {
                        var arr = new Uint8Array(1);
                        arr.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42;
                            }
                        };
                        return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0;
                    } catch (e) {
                        return false;
                    }
                }
                function kMaxLength() {
                    return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                }
                function createBuffer(that, length) {
                    if (kMaxLength() < length) {
                        throw new RangeError("Invalid typed array length");
                    }
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        that = new Uint8Array(length);
                        that.__proto__ = Buffer.prototype;
                    } else {
                        if (that === null) {
                            that = new Buffer(length);
                        }
                        that.length = length;
                    }
                    return that;
                }
                function Buffer(arg, encodingOrOffset, length) {
                    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                        return new Buffer(arg, encodingOrOffset, length);
                    }
                    if (typeof arg === "number") {
                        if (typeof encodingOrOffset === "string") {
                            throw new Error("If encoding is specified then the first argument must be a string");
                        }
                        return allocUnsafe(this, arg);
                    }
                    return from(this, arg, encodingOrOffset, length);
                }
                Buffer.poolSize = 8192;
                Buffer._augment = function(arr) {
                    arr.__proto__ = Buffer.prototype;
                    return arr;
                };
                function from(that, value, encodingOrOffset, length) {
                    if (typeof value === "number") {
                        throw new TypeError('"value" argument must not be a number');
                    }
                    if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
                        return fromArrayBuffer(that, value, encodingOrOffset, length);
                    }
                    if (typeof value === "string") {
                        return fromString(that, value, encodingOrOffset);
                    }
                    return fromObject(that, value);
                }
                Buffer.from = function(value, encodingOrOffset, length) {
                    return from(null, value, encodingOrOffset, length);
                };
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    Buffer.prototype.__proto__ = Uint8Array.prototype;
                    Buffer.__proto__ = Uint8Array;
                    if (typeof Symbol !== "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
                        Object.defineProperty(Buffer, Symbol.species, {
                            value: null,
                            configurable: true
                        });
                    }
                }
                function assertSize(size) {
                    if (typeof size !== "number") {
                        throw new TypeError('"size" argument must be a number');
                    } else if (size < 0) {
                        throw new RangeError('"size" argument must not be negative');
                    }
                }
                function alloc(that, size, fill, encoding) {
                    assertSize(size);
                    if (size <= 0) {
                        return createBuffer(that, size);
                    }
                    if (fill !== undefined) {
                        return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
                    }
                    return createBuffer(that, size);
                }
                Buffer.alloc = function(size, fill, encoding) {
                    return alloc(null, size, fill, encoding);
                };
                function allocUnsafe(that, size) {
                    assertSize(size);
                    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                    if (!Buffer.TYPED_ARRAY_SUPPORT) {
                        for (var i = 0; i < size; ++i) {
                            that[i] = 0;
                        }
                    }
                    return that;
                }
                Buffer.allocUnsafe = function(size) {
                    return allocUnsafe(null, size);
                };
                Buffer.allocUnsafeSlow = function(size) {
                    return allocUnsafe(null, size);
                };
                function fromString(that, string, encoding) {
                    if (typeof encoding !== "string" || encoding === "") {
                        encoding = "utf8";
                    }
                    if (!Buffer.isEncoding(encoding)) {
                        throw new TypeError('"encoding" must be a valid string encoding');
                    }
                    var length = byteLength(string, encoding) | 0;
                    that = createBuffer(that, length);
                    var actual = that.write(string, encoding);
                    if (actual !== length) {
                        that = that.slice(0, actual);
                    }
                    return that;
                }
                function fromArrayLike(that, array) {
                    var length = array.length < 0 ? 0 : checked(array.length) | 0;
                    that = createBuffer(that, length);
                    for (var i = 0; i < length; i += 1) {
                        that[i] = array[i] & 255;
                    }
                    return that;
                }
                function fromArrayBuffer(that, array, byteOffset, length) {
                    array.byteLength;
                    if (byteOffset < 0 || array.byteLength < byteOffset) {
                        throw new RangeError("'offset' is out of bounds");
                    }
                    if (array.byteLength < byteOffset + (length || 0)) {
                        throw new RangeError("'length' is out of bounds");
                    }
                    if (byteOffset === undefined && length === undefined) {
                        array = new Uint8Array(array);
                    } else if (length === undefined) {
                        array = new Uint8Array(array, byteOffset);
                    } else {
                        array = new Uint8Array(array, byteOffset, length);
                    }
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        that = array;
                        that.__proto__ = Buffer.prototype;
                    } else {
                        that = fromArrayLike(that, array);
                    }
                    return that;
                }
                function fromObject(that, obj) {
                    if (Buffer.isBuffer(obj)) {
                        var len = checked(obj.length) | 0;
                        that = createBuffer(that, len);
                        if (that.length === 0) {
                            return that;
                        }
                        obj.copy(that, 0, 0, len);
                        return that;
                    }
                    if (obj) {
                        if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
                            if (typeof obj.length !== "number" || isnan(obj.length)) {
                                return createBuffer(that, 0);
                            }
                            return fromArrayLike(that, obj);
                        }
                        if (obj.type === "Buffer" && isArray(obj.data)) {
                            return fromArrayLike(that, obj.data);
                        }
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
                }
                function checked(length) {
                    if (length >= kMaxLength()) {
                        throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + kMaxLength().toString(16) + " bytes");
                    }
                    return length | 0;
                }
                function SlowBuffer(length) {
                    if (+length != length) {
                        length = 0;
                    }
                    return Buffer.alloc(+length);
                }
                Buffer.isBuffer = function isBuffer(b) {
                    return !!(b != null && b._isBuffer);
                };
                Buffer.compare = function compare(a, b) {
                    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                        throw new TypeError("Arguments must be Buffers");
                    }
                    if (a === b) return 0;
                    var x = a.length;
                    var y = b.length;
                    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                        if (a[i] !== b[i]) {
                            x = a[i];
                            y = b[i];
                            break;
                        }
                    }
                    if (x < y) return -1;
                    if (y < x) return 1;
                    return 0;
                };
                Buffer.isEncoding = function isEncoding(encoding) {
                    switch (String(encoding).toLowerCase()) {
                      case "hex":
                      case "utf8":
                      case "utf-8":
                      case "ascii":
                      case "latin1":
                      case "binary":
                      case "base64":
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return true;

                      default:
                        return false;
                    }
                };
                Buffer.concat = function concat(list, length) {
                    if (!isArray(list)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    if (list.length === 0) {
                        return Buffer.alloc(0);
                    }
                    var i;
                    if (length === undefined) {
                        length = 0;
                        for (i = 0; i < list.length; ++i) {
                            length += list[i].length;
                        }
                    }
                    var buffer = Buffer.allocUnsafe(length);
                    var pos = 0;
                    for (i = 0; i < list.length; ++i) {
                        var buf = list[i];
                        if (!Buffer.isBuffer(buf)) {
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        }
                        buf.copy(buffer, pos);
                        pos += buf.length;
                    }
                    return buffer;
                };
                function byteLength(string, encoding) {
                    if (Buffer.isBuffer(string)) {
                        return string.length;
                    }
                    if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                        return string.byteLength;
                    }
                    if (typeof string !== "string") {
                        string = "" + string;
                    }
                    var len = string.length;
                    if (len === 0) return 0;
                    var loweredCase = false;
                    for (;;) {
                        switch (encoding) {
                          case "ascii":
                          case "latin1":
                          case "binary":
                            return len;

                          case "utf8":
                          case "utf-8":
                          case undefined:
                            return utf8ToBytes(string).length;

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return len * 2;

                          case "hex":
                            return len >>> 1;

                          case "base64":
                            return base64ToBytes(string).length;

                          default:
                            if (loweredCase) return utf8ToBytes(string).length;
                            encoding = ("" + encoding).toLowerCase();
                            loweredCase = true;
                        }
                    }
                }
                Buffer.byteLength = byteLength;
                function slowToString(encoding, start, end) {
                    var loweredCase = false;
                    if (start === undefined || start < 0) {
                        start = 0;
                    }
                    if (start > this.length) {
                        return "";
                    }
                    if (end === undefined || end > this.length) {
                        end = this.length;
                    }
                    if (end <= 0) {
                        return "";
                    }
                    end >>>= 0;
                    start >>>= 0;
                    if (end <= start) {
                        return "";
                    }
                    if (!encoding) encoding = "utf8";
                    while (true) {
                        switch (encoding) {
                          case "hex":
                            return hexSlice(this, start, end);

                          case "utf8":
                          case "utf-8":
                            return utf8Slice(this, start, end);

                          case "ascii":
                            return asciiSlice(this, start, end);

                          case "latin1":
                          case "binary":
                            return latin1Slice(this, start, end);

                          case "base64":
                            return base64Slice(this, start, end);

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return utf16leSlice(this, start, end);

                          default:
                            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                            encoding = (encoding + "").toLowerCase();
                            loweredCase = true;
                        }
                    }
                }
                Buffer.prototype._isBuffer = true;
                function swap(b, n, m) {
                    var i = b[n];
                    b[n] = b[m];
                    b[m] = i;
                }
                Buffer.prototype.swap16 = function swap16() {
                    var len = this.length;
                    if (len % 2 !== 0) {
                        throw new RangeError("Buffer size must be a multiple of 16-bits");
                    }
                    for (var i = 0; i < len; i += 2) {
                        swap(this, i, i + 1);
                    }
                    return this;
                };
                Buffer.prototype.swap32 = function swap32() {
                    var len = this.length;
                    if (len % 4 !== 0) {
                        throw new RangeError("Buffer size must be a multiple of 32-bits");
                    }
                    for (var i = 0; i < len; i += 4) {
                        swap(this, i, i + 3);
                        swap(this, i + 1, i + 2);
                    }
                    return this;
                };
                Buffer.prototype.swap64 = function swap64() {
                    var len = this.length;
                    if (len % 8 !== 0) {
                        throw new RangeError("Buffer size must be a multiple of 64-bits");
                    }
                    for (var i = 0; i < len; i += 8) {
                        swap(this, i, i + 7);
                        swap(this, i + 1, i + 6);
                        swap(this, i + 2, i + 5);
                        swap(this, i + 3, i + 4);
                    }
                    return this;
                };
                Buffer.prototype.toString = function toString() {
                    var length = this.length | 0;
                    if (length === 0) return "";
                    if (arguments.length === 0) return utf8Slice(this, 0, length);
                    return slowToString.apply(this, arguments);
                };
                Buffer.prototype.equals = function equals(b) {
                    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                    if (this === b) return true;
                    return Buffer.compare(this, b) === 0;
                };
                Buffer.prototype.inspect = function inspect() {
                    var str = "";
                    var max = exports.INSPECT_MAX_BYTES;
                    if (this.length > 0) {
                        str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                        if (this.length > max) str += " ... ";
                    }
                    return "<Buffer " + str + ">";
                };
                Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                    if (!Buffer.isBuffer(target)) {
                        throw new TypeError("Argument must be a Buffer");
                    }
                    if (start === undefined) {
                        start = 0;
                    }
                    if (end === undefined) {
                        end = target ? target.length : 0;
                    }
                    if (thisStart === undefined) {
                        thisStart = 0;
                    }
                    if (thisEnd === undefined) {
                        thisEnd = this.length;
                    }
                    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                        throw new RangeError("out of range index");
                    }
                    if (thisStart >= thisEnd && start >= end) {
                        return 0;
                    }
                    if (thisStart >= thisEnd) {
                        return -1;
                    }
                    if (start >= end) {
                        return 1;
                    }
                    start >>>= 0;
                    end >>>= 0;
                    thisStart >>>= 0;
                    thisEnd >>>= 0;
                    if (this === target) return 0;
                    var x = thisEnd - thisStart;
                    var y = end - start;
                    var len = Math.min(x, y);
                    var thisCopy = this.slice(thisStart, thisEnd);
                    var targetCopy = target.slice(start, end);
                    for (var i = 0; i < len; ++i) {
                        if (thisCopy[i] !== targetCopy[i]) {
                            x = thisCopy[i];
                            y = targetCopy[i];
                            break;
                        }
                    }
                    if (x < y) return -1;
                    if (y < x) return 1;
                    return 0;
                };
                function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                    if (buffer.length === 0) return -1;
                    if (typeof byteOffset === "string") {
                        encoding = byteOffset;
                        byteOffset = 0;
                    } else if (byteOffset > 2147483647) {
                        byteOffset = 2147483647;
                    } else if (byteOffset < -2147483648) {
                        byteOffset = -2147483648;
                    }
                    byteOffset = +byteOffset;
                    if (isNaN(byteOffset)) {
                        byteOffset = dir ? 0 : buffer.length - 1;
                    }
                    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                    if (byteOffset >= buffer.length) {
                        if (dir) return -1; else byteOffset = buffer.length - 1;
                    } else if (byteOffset < 0) {
                        if (dir) byteOffset = 0; else return -1;
                    }
                    if (typeof val === "string") {
                        val = Buffer.from(val, encoding);
                    }
                    if (Buffer.isBuffer(val)) {
                        if (val.length === 0) {
                            return -1;
                        }
                        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                    } else if (typeof val === "number") {
                        val = val & 255;
                        if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
                            if (dir) {
                                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                            } else {
                                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                            }
                        }
                        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
                    }
                    throw new TypeError("val must be string, number or Buffer");
                }
                function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                    var indexSize = 1;
                    var arrLength = arr.length;
                    var valLength = val.length;
                    if (encoding !== undefined) {
                        encoding = String(encoding).toLowerCase();
                        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                            if (arr.length < 2 || val.length < 2) {
                                return -1;
                            }
                            indexSize = 2;
                            arrLength /= 2;
                            valLength /= 2;
                            byteOffset /= 2;
                        }
                    }
                    function read(buf, i) {
                        if (indexSize === 1) {
                            return buf[i];
                        } else {
                            return buf.readUInt16BE(i * indexSize);
                        }
                    }
                    var i;
                    if (dir) {
                        var foundIndex = -1;
                        for (i = byteOffset; i < arrLength; i++) {
                            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                                if (foundIndex === -1) foundIndex = i;
                                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                            } else {
                                if (foundIndex !== -1) i -= i - foundIndex;
                                foundIndex = -1;
                            }
                        }
                    } else {
                        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                        for (i = byteOffset; i >= 0; i--) {
                            var found = true;
                            for (var j = 0; j < valLength; j++) {
                                if (read(arr, i + j) !== read(val, j)) {
                                    found = false;
                                    break;
                                }
                            }
                            if (found) return i;
                        }
                    }
                    return -1;
                }
                Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                    return this.indexOf(val, byteOffset, encoding) !== -1;
                };
                Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
                };
                Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
                };
                function hexWrite(buf, string, offset, length) {
                    offset = Number(offset) || 0;
                    var remaining = buf.length - offset;
                    if (!length) {
                        length = remaining;
                    } else {
                        length = Number(length);
                        if (length > remaining) {
                            length = remaining;
                        }
                    }
                    var strLen = string.length;
                    if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
                    if (length > strLen / 2) {
                        length = strLen / 2;
                    }
                    for (var i = 0; i < length; ++i) {
                        var parsed = parseInt(string.substr(i * 2, 2), 16);
                        if (isNaN(parsed)) return i;
                        buf[offset + i] = parsed;
                    }
                    return i;
                }
                function utf8Write(buf, string, offset, length) {
                    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
                }
                function asciiWrite(buf, string, offset, length) {
                    return blitBuffer(asciiToBytes(string), buf, offset, length);
                }
                function latin1Write(buf, string, offset, length) {
                    return asciiWrite(buf, string, offset, length);
                }
                function base64Write(buf, string, offset, length) {
                    return blitBuffer(base64ToBytes(string), buf, offset, length);
                }
                function ucs2Write(buf, string, offset, length) {
                    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
                }
                Buffer.prototype.write = function write(string, offset, length, encoding) {
                    if (offset === undefined) {
                        encoding = "utf8";
                        length = this.length;
                        offset = 0;
                    } else if (length === undefined && typeof offset === "string") {
                        encoding = offset;
                        length = this.length;
                        offset = 0;
                    } else if (isFinite(offset)) {
                        offset = offset | 0;
                        if (isFinite(length)) {
                            length = length | 0;
                            if (encoding === undefined) encoding = "utf8";
                        } else {
                            encoding = length;
                            length = undefined;
                        }
                    } else {
                        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    }
                    var remaining = this.length - offset;
                    if (length === undefined || length > remaining) length = remaining;
                    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                        throw new RangeError("Attempt to write outside buffer bounds");
                    }
                    if (!encoding) encoding = "utf8";
                    var loweredCase = false;
                    for (;;) {
                        switch (encoding) {
                          case "hex":
                            return hexWrite(this, string, offset, length);

                          case "utf8":
                          case "utf-8":
                            return utf8Write(this, string, offset, length);

                          case "ascii":
                            return asciiWrite(this, string, offset, length);

                          case "latin1":
                          case "binary":
                            return latin1Write(this, string, offset, length);

                          case "base64":
                            return base64Write(this, string, offset, length);

                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return ucs2Write(this, string, offset, length);

                          default:
                            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                            encoding = ("" + encoding).toLowerCase();
                            loweredCase = true;
                        }
                    }
                };
                Buffer.prototype.toJSON = function toJSON() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    };
                };
                function base64Slice(buf, start, end) {
                    if (start === 0 && end === buf.length) {
                        return base64.fromByteArray(buf);
                    } else {
                        return base64.fromByteArray(buf.slice(start, end));
                    }
                }
                function utf8Slice(buf, start, end) {
                    end = Math.min(buf.length, end);
                    var res = [];
                    var i = start;
                    while (i < end) {
                        var firstByte = buf[i];
                        var codePoint = null;
                        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                        if (i + bytesPerSequence <= end) {
                            var secondByte, thirdByte, fourthByte, tempCodePoint;
                            switch (bytesPerSequence) {
                              case 1:
                                if (firstByte < 128) {
                                    codePoint = firstByte;
                                }
                                break;

                              case 2:
                                secondByte = buf[i + 1];
                                if ((secondByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                    if (tempCodePoint > 127) {
                                        codePoint = tempCodePoint;
                                    }
                                }
                                break;

                              case 3:
                                secondByte = buf[i + 1];
                                thirdByte = buf[i + 2];
                                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                    if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                        codePoint = tempCodePoint;
                                    }
                                }
                                break;

                              case 4:
                                secondByte = buf[i + 1];
                                thirdByte = buf[i + 2];
                                fourthByte = buf[i + 3];
                                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                    if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                        codePoint = tempCodePoint;
                                    }
                                }
                            }
                        }
                        if (codePoint === null) {
                            codePoint = 65533;
                            bytesPerSequence = 1;
                        } else if (codePoint > 65535) {
                            codePoint -= 65536;
                            res.push(codePoint >>> 10 & 1023 | 55296);
                            codePoint = 56320 | codePoint & 1023;
                        }
                        res.push(codePoint);
                        i += bytesPerSequence;
                    }
                    return decodeCodePointsArray(res);
                }
                var MAX_ARGUMENTS_LENGTH = 4096;
                function decodeCodePointsArray(codePoints) {
                    var len = codePoints.length;
                    if (len <= MAX_ARGUMENTS_LENGTH) {
                        return String.fromCharCode.apply(String, codePoints);
                    }
                    var res = "";
                    var i = 0;
                    while (i < len) {
                        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                    }
                    return res;
                }
                function asciiSlice(buf, start, end) {
                    var ret = "";
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i) {
                        ret += String.fromCharCode(buf[i] & 127);
                    }
                    return ret;
                }
                function latin1Slice(buf, start, end) {
                    var ret = "";
                    end = Math.min(buf.length, end);
                    for (var i = start; i < end; ++i) {
                        ret += String.fromCharCode(buf[i]);
                    }
                    return ret;
                }
                function hexSlice(buf, start, end) {
                    var len = buf.length;
                    if (!start || start < 0) start = 0;
                    if (!end || end < 0 || end > len) end = len;
                    var out = "";
                    for (var i = start; i < end; ++i) {
                        out += toHex(buf[i]);
                    }
                    return out;
                }
                function utf16leSlice(buf, start, end) {
                    var bytes = buf.slice(start, end);
                    var res = "";
                    for (var i = 0; i < bytes.length; i += 2) {
                        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                    }
                    return res;
                }
                Buffer.prototype.slice = function slice(start, end) {
                    var len = this.length;
                    start = ~~start;
                    end = end === undefined ? len : ~~end;
                    if (start < 0) {
                        start += len;
                        if (start < 0) start = 0;
                    } else if (start > len) {
                        start = len;
                    }
                    if (end < 0) {
                        end += len;
                        if (end < 0) end = 0;
                    } else if (end > len) {
                        end = len;
                    }
                    if (end < start) end = start;
                    var newBuf;
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        newBuf = this.subarray(start, end);
                        newBuf.__proto__ = Buffer.prototype;
                    } else {
                        var sliceLen = end - start;
                        newBuf = new Buffer(sliceLen, undefined);
                        for (var i = 0; i < sliceLen; ++i) {
                            newBuf[i] = this[i + start];
                        }
                    }
                    return newBuf;
                };
                function checkOffset(offset, ext, length) {
                    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
                }
                Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) checkOffset(offset, byteLength, this.length);
                    var val = this[offset];
                    var mul = 1;
                    var i = 0;
                    while (++i < byteLength && (mul *= 256)) {
                        val += this[offset + i] * mul;
                    }
                    return val;
                };
                Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) {
                        checkOffset(offset, byteLength, this.length);
                    }
                    var val = this[offset + --byteLength];
                    var mul = 1;
                    while (byteLength > 0 && (mul *= 256)) {
                        val += this[offset + --byteLength] * mul;
                    }
                    return val;
                };
                Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 1, this.length);
                    return this[offset];
                };
                Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    return this[offset] | this[offset + 1] << 8;
                };
                Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    return this[offset] << 8 | this[offset + 1];
                };
                Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
                };
                Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
                };
                Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) checkOffset(offset, byteLength, this.length);
                    var val = this[offset];
                    var mul = 1;
                    var i = 0;
                    while (++i < byteLength && (mul *= 256)) {
                        val += this[offset + i] * mul;
                    }
                    mul *= 128;
                    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                    return val;
                };
                Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) checkOffset(offset, byteLength, this.length);
                    var i = byteLength;
                    var mul = 1;
                    var val = this[offset + --i];
                    while (i > 0 && (mul *= 256)) {
                        val += this[offset + --i] * mul;
                    }
                    mul *= 128;
                    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                    return val;
                };
                Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 1, this.length);
                    if (!(this[offset] & 128)) return this[offset];
                    return (255 - this[offset] + 1) * -1;
                };
                Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    var val = this[offset] | this[offset + 1] << 8;
                    return val & 32768 ? val | 4294901760 : val;
                };
                Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 2, this.length);
                    var val = this[offset + 1] | this[offset] << 8;
                    return val & 32768 ? val | 4294901760 : val;
                };
                Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
                };
                Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
                };
                Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return ieee754.read(this, offset, true, 23, 4);
                };
                Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 4, this.length);
                    return ieee754.read(this, offset, false, 23, 4);
                };
                Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 8, this.length);
                    return ieee754.read(this, offset, true, 52, 8);
                };
                Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                    if (!noAssert) checkOffset(offset, 8, this.length);
                    return ieee754.read(this, offset, false, 52, 8);
                };
                function checkInt(buf, value, offset, ext, max, min) {
                    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                    if (offset + ext > buf.length) throw new RangeError("Index out of range");
                }
                Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                        checkInt(this, value, offset, byteLength, maxBytes, 0);
                    }
                    var mul = 1;
                    var i = 0;
                    this[offset] = value & 255;
                    while (++i < byteLength && (mul *= 256)) {
                        this[offset + i] = value / mul & 255;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    byteLength = byteLength | 0;
                    if (!noAssert) {
                        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                        checkInt(this, value, offset, byteLength, maxBytes, 0);
                    }
                    var i = byteLength - 1;
                    var mul = 1;
                    this[offset + i] = value & 255;
                    while (--i >= 0 && (mul *= 256)) {
                        this[offset + i] = value / mul & 255;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                    this[offset] = value & 255;
                    return offset + 1;
                };
                function objectWriteUInt16(buf, value, offset, littleEndian) {
                    if (value < 0) value = 65535 + value + 1;
                    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                        buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                    }
                }
                Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = value & 255;
                        this[offset + 1] = value >>> 8;
                    } else {
                        objectWriteUInt16(this, value, offset, true);
                    }
                    return offset + 2;
                };
                Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = value >>> 8;
                        this[offset + 1] = value & 255;
                    } else {
                        objectWriteUInt16(this, value, offset, false);
                    }
                    return offset + 2;
                };
                function objectWriteUInt32(buf, value, offset, littleEndian) {
                    if (value < 0) value = 4294967295 + value + 1;
                    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
                    }
                }
                Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset + 3] = value >>> 24;
                        this[offset + 2] = value >>> 16;
                        this[offset + 1] = value >>> 8;
                        this[offset] = value & 255;
                    } else {
                        objectWriteUInt32(this, value, offset, true);
                    }
                    return offset + 4;
                };
                Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = value >>> 24;
                        this[offset + 1] = value >>> 16;
                        this[offset + 2] = value >>> 8;
                        this[offset + 3] = value & 255;
                    } else {
                        objectWriteUInt32(this, value, offset, false);
                    }
                    return offset + 4;
                };
                Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) {
                        var limit = Math.pow(2, 8 * byteLength - 1);
                        checkInt(this, value, offset, byteLength, limit - 1, -limit);
                    }
                    var i = 0;
                    var mul = 1;
                    var sub = 0;
                    this[offset] = value & 255;
                    while (++i < byteLength && (mul *= 256)) {
                        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                            sub = 1;
                        }
                        this[offset + i] = (value / mul >> 0) - sub & 255;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) {
                        var limit = Math.pow(2, 8 * byteLength - 1);
                        checkInt(this, value, offset, byteLength, limit - 1, -limit);
                    }
                    var i = byteLength - 1;
                    var mul = 1;
                    var sub = 0;
                    this[offset + i] = value & 255;
                    while (--i >= 0 && (mul *= 256)) {
                        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                            sub = 1;
                        }
                        this[offset + i] = (value / mul >> 0) - sub & 255;
                    }
                    return offset + byteLength;
                };
                Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                    if (value < 0) value = 255 + value + 1;
                    this[offset] = value & 255;
                    return offset + 1;
                };
                Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = value & 255;
                        this[offset + 1] = value >>> 8;
                    } else {
                        objectWriteUInt16(this, value, offset, true);
                    }
                    return offset + 2;
                };
                Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = value >>> 8;
                        this[offset + 1] = value & 255;
                    } else {
                        objectWriteUInt16(this, value, offset, false);
                    }
                    return offset + 2;
                };
                Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = value & 255;
                        this[offset + 1] = value >>> 8;
                        this[offset + 2] = value >>> 16;
                        this[offset + 3] = value >>> 24;
                    } else {
                        objectWriteUInt32(this, value, offset, true);
                    }
                    return offset + 4;
                };
                Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                    value = +value;
                    offset = offset | 0;
                    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                    if (value < 0) value = 4294967295 + value + 1;
                    if (Buffer.TYPED_ARRAY_SUPPORT) {
                        this[offset] = value >>> 24;
                        this[offset + 1] = value >>> 16;
                        this[offset + 2] = value >>> 8;
                        this[offset + 3] = value & 255;
                    } else {
                        objectWriteUInt32(this, value, offset, false);
                    }
                    return offset + 4;
                };
                function checkIEEE754(buf, value, offset, ext, max, min) {
                    if (offset + ext > buf.length) throw new RangeError("Index out of range");
                    if (offset < 0) throw new RangeError("Index out of range");
                }
                function writeFloat(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
                    }
                    ieee754.write(buf, value, offset, littleEndian, 23, 4);
                    return offset + 4;
                }
                Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                    return writeFloat(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                    return writeFloat(this, value, offset, false, noAssert);
                };
                function writeDouble(buf, value, offset, littleEndian, noAssert) {
                    if (!noAssert) {
                        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
                    }
                    ieee754.write(buf, value, offset, littleEndian, 52, 8);
                    return offset + 8;
                }
                Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                    return writeDouble(this, value, offset, true, noAssert);
                };
                Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                    return writeDouble(this, value, offset, false, noAssert);
                };
                Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                    if (!start) start = 0;
                    if (!end && end !== 0) end = this.length;
                    if (targetStart >= target.length) targetStart = target.length;
                    if (!targetStart) targetStart = 0;
                    if (end > 0 && end < start) end = start;
                    if (end === start) return 0;
                    if (target.length === 0 || this.length === 0) return 0;
                    if (targetStart < 0) {
                        throw new RangeError("targetStart out of bounds");
                    }
                    if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (end < 0) throw new RangeError("sourceEnd out of bounds");
                    if (end > this.length) end = this.length;
                    if (target.length - targetStart < end - start) {
                        end = target.length - targetStart + start;
                    }
                    var len = end - start;
                    var i;
                    if (this === target && start < targetStart && targetStart < end) {
                        for (i = len - 1; i >= 0; --i) {
                            target[i + targetStart] = this[i + start];
                        }
                    } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
                        for (i = 0; i < len; ++i) {
                            target[i + targetStart] = this[i + start];
                        }
                    } else {
                        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                    }
                    return len;
                };
                Buffer.prototype.fill = function fill(val, start, end, encoding) {
                    if (typeof val === "string") {
                        if (typeof start === "string") {
                            encoding = start;
                            start = 0;
                            end = this.length;
                        } else if (typeof end === "string") {
                            encoding = end;
                            end = this.length;
                        }
                        if (val.length === 1) {
                            var code = val.charCodeAt(0);
                            if (code < 256) {
                                val = code;
                            }
                        }
                        if (encoding !== undefined && typeof encoding !== "string") {
                            throw new TypeError("encoding must be a string");
                        }
                        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
                            throw new TypeError("Unknown encoding: " + encoding);
                        }
                    } else if (typeof val === "number") {
                        val = val & 255;
                    }
                    if (start < 0 || this.length < start || this.length < end) {
                        throw new RangeError("Out of range index");
                    }
                    if (end <= start) {
                        return this;
                    }
                    start = start >>> 0;
                    end = end === undefined ? this.length : end >>> 0;
                    if (!val) val = 0;
                    var i;
                    if (typeof val === "number") {
                        for (i = start; i < end; ++i) {
                            this[i] = val;
                        }
                    } else {
                        var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
                        var len = bytes.length;
                        for (i = 0; i < end - start; ++i) {
                            this[i + start] = bytes[i % len];
                        }
                    }
                    return this;
                };
                var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
                function base64clean(str) {
                    str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                    if (str.length < 2) return "";
                    while (str.length % 4 !== 0) {
                        str = str + "=";
                    }
                    return str;
                }
                function stringtrim(str) {
                    if (str.trim) return str.trim();
                    return str.replace(/^\s+|\s+$/g, "");
                }
                function toHex(n) {
                    if (n < 16) return "0" + n.toString(16);
                    return n.toString(16);
                }
                function utf8ToBytes(string, units) {
                    units = units || Infinity;
                    var codePoint;
                    var length = string.length;
                    var leadSurrogate = null;
                    var bytes = [];
                    for (var i = 0; i < length; ++i) {
                        codePoint = string.charCodeAt(i);
                        if (codePoint > 55295 && codePoint < 57344) {
                            if (!leadSurrogate) {
                                if (codePoint > 56319) {
                                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                    continue;
                                } else if (i + 1 === length) {
                                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                    continue;
                                }
                                leadSurrogate = codePoint;
                                continue;
                            }
                            if (codePoint < 56320) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                leadSurrogate = codePoint;
                                continue;
                            }
                            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                        } else if (leadSurrogate) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                        }
                        leadSurrogate = null;
                        if (codePoint < 128) {
                            if ((units -= 1) < 0) break;
                            bytes.push(codePoint);
                        } else if (codePoint < 2048) {
                            if ((units -= 2) < 0) break;
                            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                        } else if (codePoint < 65536) {
                            if ((units -= 3) < 0) break;
                            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                        } else if (codePoint < 1114112) {
                            if ((units -= 4) < 0) break;
                            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                        } else {
                            throw new Error("Invalid code point");
                        }
                    }
                    return bytes;
                }
                function asciiToBytes(str) {
                    var byteArray = [];
                    for (var i = 0; i < str.length; ++i) {
                        byteArray.push(str.charCodeAt(i) & 255);
                    }
                    return byteArray;
                }
                function utf16leToBytes(str, units) {
                    var c, hi, lo;
                    var byteArray = [];
                    for (var i = 0; i < str.length; ++i) {
                        if ((units -= 2) < 0) break;
                        c = str.charCodeAt(i);
                        hi = c >> 8;
                        lo = c % 256;
                        byteArray.push(lo);
                        byteArray.push(hi);
                    }
                    return byteArray;
                }
                function base64ToBytes(str) {
                    return base64.toByteArray(base64clean(str));
                }
                function blitBuffer(src, dst, offset, length) {
                    for (var i = 0; i < length; ++i) {
                        if (i + offset >= dst.length || i >= src.length) break;
                        dst[i + offset] = src[i];
                    }
                    return i;
                }
                function isnan(val) {
                    return val !== val;
                }
            }).call(this, __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/webpack/buildin/global.js"));
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/path-browserify/index.js": function(module, exports, __webpack_require__) {
            "use strict";
            (function(process) {
                function normalizeArray(parts, allowAboveRoot) {
                    var up = 0;
                    for (var i = parts.length - 1; i >= 0; i--) {
                        var last = parts[i];
                        if (last === ".") {
                            parts.splice(i, 1);
                        } else if (last === "..") {
                            parts.splice(i, 1);
                            up++;
                        } else if (up) {
                            parts.splice(i, 1);
                            up--;
                        }
                    }
                    if (allowAboveRoot) {
                        for (;up--; up) {
                            parts.unshift("..");
                        }
                    }
                    return parts;
                }
                exports.resolve = function() {
                    var resolvedPath = "", resolvedAbsolute = false;
                    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                        var path = i >= 0 ? arguments[i] : process.cwd();
                        if (typeof path !== "string") {
                            throw new TypeError("Arguments to path.resolve must be strings");
                        } else if (!path) {
                            continue;
                        }
                        resolvedPath = path + "/" + resolvedPath;
                        resolvedAbsolute = path.charAt(0) === "/";
                    }
                    resolvedPath = normalizeArray(filter(resolvedPath.split("/"), (function(p) {
                        return !!p;
                    })), !resolvedAbsolute).join("/");
                    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
                };
                exports.normalize = function(path) {
                    var isAbsolute = exports.isAbsolute(path), trailingSlash = substr(path, -1) === "/";
                    path = normalizeArray(filter(path.split("/"), (function(p) {
                        return !!p;
                    })), !isAbsolute).join("/");
                    if (!path && !isAbsolute) {
                        path = ".";
                    }
                    if (path && trailingSlash) {
                        path += "/";
                    }
                    return (isAbsolute ? "/" : "") + path;
                };
                exports.isAbsolute = function(path) {
                    return path.charAt(0) === "/";
                };
                exports.join = function() {
                    var paths = Array.prototype.slice.call(arguments, 0);
                    return exports.normalize(filter(paths, (function(p, index) {
                        if (typeof p !== "string") {
                            throw new TypeError("Arguments to path.join must be strings");
                        }
                        return p;
                    })).join("/"));
                };
                exports.relative = function(from, to) {
                    from = exports.resolve(from).substr(1);
                    to = exports.resolve(to).substr(1);
                    function trim(arr) {
                        var start = 0;
                        for (;start < arr.length; start++) {
                            if (arr[start] !== "") break;
                        }
                        var end = arr.length - 1;
                        for (;end >= 0; end--) {
                            if (arr[end] !== "") break;
                        }
                        if (start > end) return [];
                        return arr.slice(start, end - start + 1);
                    }
                    var fromParts = trim(from.split("/"));
                    var toParts = trim(to.split("/"));
                    var length = Math.min(fromParts.length, toParts.length);
                    var samePartsLength = length;
                    for (var i = 0; i < length; i++) {
                        if (fromParts[i] !== toParts[i]) {
                            samePartsLength = i;
                            break;
                        }
                    }
                    var outputParts = [];
                    for (var i = samePartsLength; i < fromParts.length; i++) {
                        outputParts.push("..");
                    }
                    outputParts = outputParts.concat(toParts.slice(samePartsLength));
                    return outputParts.join("/");
                };
                exports.sep = "/";
                exports.delimiter = ":";
                exports.dirname = function(path) {
                    if (typeof path !== "string") path = path + "";
                    if (path.length === 0) return ".";
                    var code = path.charCodeAt(0);
                    var hasRoot = code === 47;
                    var end = -1;
                    var matchedSlash = true;
                    for (var i = path.length - 1; i >= 1; --i) {
                        code = path.charCodeAt(i);
                        if (code === 47) {
                            if (!matchedSlash) {
                                end = i;
                                break;
                            }
                        } else {
                            matchedSlash = false;
                        }
                    }
                    if (end === -1) return hasRoot ? "/" : ".";
                    if (hasRoot && end === 1) {
                        return "/";
                    }
                    return path.slice(0, end);
                };
                function basename(path) {
                    if (typeof path !== "string") path = path + "";
                    var start = 0;
                    var end = -1;
                    var matchedSlash = true;
                    var i;
                    for (i = path.length - 1; i >= 0; --i) {
                        if (path.charCodeAt(i) === 47) {
                            if (!matchedSlash) {
                                start = i + 1;
                                break;
                            }
                        } else if (end === -1) {
                            matchedSlash = false;
                            end = i + 1;
                        }
                    }
                    if (end === -1) return "";
                    return path.slice(start, end);
                }
                exports.basename = function(path, ext) {
                    var f = basename(path);
                    if (ext && f.substr(-1 * ext.length) === ext) {
                        f = f.substr(0, f.length - ext.length);
                    }
                    return f;
                };
                exports.extname = function(path) {
                    if (typeof path !== "string") path = path + "";
                    var startDot = -1;
                    var startPart = 0;
                    var end = -1;
                    var matchedSlash = true;
                    var preDotState = 0;
                    for (var i = path.length - 1; i >= 0; --i) {
                        var code = path.charCodeAt(i);
                        if (code === 47) {
                            if (!matchedSlash) {
                                startPart = i + 1;
                                break;
                            }
                            continue;
                        }
                        if (end === -1) {
                            matchedSlash = false;
                            end = i + 1;
                        }
                        if (code === 46) {
                            if (startDot === -1) startDot = i; else if (preDotState !== 1) preDotState = 1;
                        } else if (startDot !== -1) {
                            preDotState = -1;
                        }
                    }
                    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
                        return "";
                    }
                    return path.slice(startDot, end);
                };
                function filter(xs, f) {
                    if (xs.filter) return xs.filter(f);
                    var res = [];
                    for (var i = 0; i < xs.length; i++) {
                        if (f(xs[i], i, xs)) res.push(xs[i]);
                    }
                    return res;
                }
                var substr = "ab".substr(-1) === "b" ? function(str, start, len) {
                    return str.substr(start, len);
                } : function(str, start, len) {
                    if (start < 0) start = str.length + start;
                    return str.substr(start, len);
                };
            }).call(this, __webpack_require__("../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/process/browser.js"));
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/process/browser.js": function(module, exports, __webpack_require__) {
            "use strict";
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return [];
            };
            process.binding = function(name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
                return "/";
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
                return 0;
            };
        },
        "../../../../../../../../Users/r.dolid/AppData/Roaming/npm/node_modules/ewizard-cli/node_modules/webpack/buildin/global.js": function(module, exports, __webpack_require__) {
            "use strict";
            var g;
            g = function() {
                return this;
            }();
            try {
                g = g || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") g = window;
            }
            module.exports = g;
        },
        "./node_modules/wiz-bg-bar-graph/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-bar-graph/icon.png";
        },
        "./node_modules/wiz-bg-bubble/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-bubble/icon.png";
        },
        "./node_modules/wiz-bg-button/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-button/icon.png";
        },
        "./node_modules/wiz-bg-close-popup-button/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-close-popup-button/icon.png";
        },
        "./node_modules/wiz-bg-container/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-container/icon.png";
        },
        "./node_modules/wiz-bg-grid-container/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-grid-container/icon.png";
        },
        "./node_modules/wiz-bg-line-graph/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-line-graph/icon.png";
        },
        "./node_modules/wiz-bg-navigation-arrows/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-navigation-arrows/icon.png";
        },
        "./node_modules/wiz-bg-navigation-bar/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-navigation-bar/icon.png";
        },
        "./node_modules/wiz-bg-popup/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-popup/icon.png";
        },
        "./node_modules/wiz-bg-ribbon/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-ribbon/icon.png";
        },
        "./node_modules/wiz-bg-sidebar/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-sidebar/icon.png";
        },
        "./node_modules/wiz-bg-sliding-content/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-sliding-content/icon.png";
        },
        "./node_modules/wiz-bg-smpc/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-smpc/icon.png";
        },
        "./node_modules/wiz-bg-study-design/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-study-design/icon.png";
        },
        "./node_modules/wiz-bg-tab-group/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-bg-tab-group/icon.png";
        },
        "./node_modules/wiz-image/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-image/icon.png";
        },
        "./node_modules/wiz-text/icon.png": function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__.p + "node_modules/wiz-text/icon.png";
        },
        "./package.json": function(module, exports) {
            module.exports = {
                name: "global-iva-template",
                version: "0.0.1",
                description: "global-iva-template",
                main: "./build/dev/app.js",
                scripts: {
                    arc: "wiz i && wiz archive"
                },
                author: "IVA Team",
                license: "ISC",
                dependencies: {
                    ewizardjs: "git+https://git@git.qapint.com/ewizardjs/ewizardjs.git#5.9.1",
                    npm: "^7.24.2",
                    "vue-i18n": "~7.2.0",
                    vuex: "~3.1.0",
                    "wiz-accordion": "git+ssh://git@git.qapint.com:ewizardjs/edetailer/components/wiz-accordion.git#v2.0.5",
                    "wiz-bg-bar-graph": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-bar-graph.git#v0.0.1",
                    "wiz-bg-bubble": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-bubble.git#v0.0.1",
                    "wiz-bg-button": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-button.git#1.0.0",
                    "wiz-bg-close-popup-button": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-close-popup-button.git#0.0.5",
                    "wiz-bg-container": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-container.git#v0.0.2",
                    "wiz-bg-grid-container": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-grid-container.git#v0.0.2",
                    "wiz-bg-line-graph": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-line-graph.git#v0.0.1",
                    "wiz-bg-navigation-arrows": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-navigation-arrows.git#v0.0.1",
                    "wiz-bg-navigation-bar": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-navigation-bar.git#v0.0.3",
                    "wiz-bg-popup": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-popup.git#v0.0.2",
                    "wiz-bg-references": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-references.git#v0.0.8",
                    "wiz-bg-ribbon": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-ribbon.git#v0.0.2",
                    "wiz-bg-sidebar": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-sidebar.git#v0.0.2",
                    "wiz-bg-sitemap": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-sitemap.git#v0.0.6",
                    "wiz-bg-sliding-content": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-sliding-content.git#0.0.2",
                    "wiz-bg-smpc": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-smpc.git#v0.0.1",
                    "wiz-bg-study-design": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-study-design.git#feature/hotfix",
                    "wiz-bg-tab-group": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/components/wiz/wiz-bg-tab-group.git#v0.0.1",
                    "wiz-block": "git+https://git.qapint.com/ewizardjs/edetailer/components/wiz-block.git#1.0.1",
                    "wiz-button": "git+https://git@git.qapint.com/ewizardjs/edetailer/components/wiz-button.git#3.0.4",
                    "wiz-container": "git+https://git@git.qapint.com/ewizardjs/edetailer/components/wiz-container.git#1.0.2",
                    "wiz-image": "git+https://git@git.qapint.com/ewizardjs/edetailer/components/wiz-image.git#1.4.4",
                    "wiz-indicators": "git+https://git.qapint.com/ewizardjs/edetailer/components/wiz-indicators.git#v1.1.2",
                    "wiz-text": "git+https://git@git.qapint.com/ewizardjs/edetailer/components/wiz-text.git#2.0.1"
                },
                devDependencies: {
                    "babel-eslint": "^10.1.0",
                    "eslint-config-airbnb-base": "^14.2.1",
                    "eslint-config-dcf": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/tools/eslint-config-dcf.git#v0.0.2",
                    "eslint-plugin-import": "^2.24.2",
                    "eslint-plugin-vue": "^7.17.0",
                    eslint: "^7.32.0",
                    "stylelint-config-dcf": "git+ssh://git@git.qapint.com:dcf/Biogen/edetailing/tools/stylelint-config-dcf.git#v0.0.2",
                    "stylelint-config-recommended-scss": "^4.3.0",
                    "stylelint-config-standard": "^22.0.0",
                    "stylelint-order": "^4.1.0",
                    "stylelint-scss": "^3.20.1",
                    stylelint: "^13.13.1"
                }
            };
        }
    });
}));