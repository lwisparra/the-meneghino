/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function(a, b, c, d) {
    var e = {
        exports: {}
    };
    e.exports;
    (function() {
        var f = a.fbq;
        f.execStart = a.performance && a.performance.now && a.performance.now();
        if (! function() {
            var b = a.postMessage || function() {};
            if (!f) {
                b({
                    action: "FB_LOG",
                    logType: "Facebook Pixel Error",
                    logMessage: "Pixel code is not installed correctly on this page"
                }, "*");
                "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
                return !1
            }
            return !0
        }()) return;
        var g = typeof Symbol === "function" && typeof(typeof Symbol === "function" ? Symbol.iterator : "@@iterator") === "symbol" ? function(a) {
                return typeof a
            } : function(a) {
                return a && typeof Symbol === "function" && a.constructor === Symbol && a !== (typeof Symbol === "function" ? Symbol.prototype : "@@prototype") ? "symbol" : typeof a
            },
            h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1;
                        d.configurable = !0;
                        "value" in d && (d.writable = !0);
                        Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    c && a(b.prototype, c);
                    d && a(b, d);
                    return b
                }
            }();

        function i(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            } else return Array.from(a)
        }

        function j(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function(a) {
            f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
            return f.__fbeventsResolvedModules[a]
        }, f.fbIsModuleLoaded = function(a) {
            return !!f.__fbeventsModules[a]
        }, f.ensureModuleRegistered = function(b, a) {
            f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a)
        });
        f.ensureModuleRegistered("SignalsFBEventsBaseEvent", function() {
            return function(g, b, c, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsUtils"),
                        b = a.map,
                        c = a.keys;
                    a = function() {
                        function a(b) {
                            j(this, a), this._regKey = 0, this._subscriptions = {}, this._coerceArgs = b || null
                        }
                        h(a, [{
                            key: "listen",
                            value: function(a) {
                                var b = this,
                                    c = "" + this._regKey++;
                                this._subscriptions[c] = a;
                                return function() {
                                    delete b._subscriptions[c]
                                }
                            }
                        }, {
                            key: "listenOnce",
                            value: function(a) {
                                var b = null,
                                    c = function() {
                                        b && b();
                                        b = null;
                                        return a.apply(void 0, arguments)
                                    };
                                b = this.listen(c);
                                return b
                            }
                        }, {
                            key: "trigger",
                            value: function() {
                                var a = this;
                                for (var d = arguments.length, e = Array(d), f = 0; f < d; f++) e[f] = arguments[f];
                                return b(c(this._subscriptions), function(b) {
                                    var c;
                                    return (c = a._subscriptions)[b].apply(c, e)
                                })
                            }
                        }, {
                            key: "triggerWeakly",
                            value: function() {
                                var a = this._coerceArgs != null ? this._coerceArgs.apply(this, arguments) : null;
                                return a == null ? [] : this.trigger.apply(this, i(a))
                            }
                        }]);
                        return a
                    }();
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsCoercePixelID", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsLogging"),
                        b = a.logUserError;
                    a = f.getFbeventsModules("SignalsFBEventsUtils");
                    var c = a.isSafeInteger;

                    function d(a) {
                        if (typeof a === "number") {
                            if (!c(a)) {
                                b({
                                    pixelID: a.toString(),
                                    type: "INVALID_PIXEL_ID"
                                });
                                return null
                            }
                            return a.toString()
                        }
                        if (typeof a === "string") {
                            var d = /^[1-9][0-9]{0,25}$/;
                            if (!d.test(a)) {
                                b({
                                    pixelID: a,
                                    type: "INVALID_PIXEL_ID"
                                });
                                return null
                            }
                            return a
                        }
                        if (a === void 0) {
                            b({
                                pixelID: "undefined",
                                type: "INVALID_PIXEL_ID"
                            });
                            return null
                        }
                        if (a === null) {
                            b({
                                pixelID: "null",
                                type: "INVALID_PIXEL_ID"
                            });
                            return null
                        }
                        b({
                            pixelID: "unknown",
                            type: "INVALID_PIXEL_ID"
                        });
                        return null
                    }
                    e.exports = d
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsGetIwlUrl", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("signalsFBEventsGetTier");
                    e.exports = function(b, c) {
                        c = a(c);
                        c = c == null ? "www.facebook.com" : "www." + c + ".facebook.com";
                        return "https://" + c + "/signals/iwl.js?pixel_id=" + b
                    }
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsGetTier", function() {
            return function(f, g, h, i) {
                var j = {
                    exports: {}
                };
                j.exports;
                (function() {
                    "use strict";
                    var a = /^https:\/\/www\.([A-Za-z0-9\.]+)\.facebook\.com\/tr\/?$/,
                        b = ["https://www.facebook.com/tr", "https://www.facebook.com/tr/"];
                    j.exports = function(c) {
                        if (b.indexOf(c) !== -1) return null;
                        var d = a.exec(c);
                        if (d == null) throw new Error("Malformed tier: " + c);
                        return d[1]
                    }
                })();
                return j.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsIWLBootStrapEvent", function() {
            return function(h, i, j, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
                        b = f.getFbeventsModules("signalsFBEventsCoercePixelID");

                    function c() {
                        for (var a = arguments.length, c = Array(a), d = 0; d < a; d++) c[d] = arguments[d];
                        var e = c[0];
                        if (e == null || (typeof e === "undefined" ? "undefined" : g(e)) !== "object") return null;
                        var f = e.graphToken,
                            h = e.pixelID,
                            i = b(h);
                        return f != null && typeof f === "string" && i != null ? [{
                            graphToken: f,
                            pixelID: i
                        }] : null
                    }
                    a = new a(c);
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsLogging", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsUtils"),
                        b = a.isInstanceOf,
                        c = f.getFbeventsModules("SignalsParamList"),
                        d = f.getFbeventsModules("signalsFBEventsSendFormPOST"),
                        h = !1;

                    function i() {
                        h = !0
                    }
                    var j = !0;

                    function k() {
                        j = !1
                    }
                    var l = "console",
                        m = "warn";

                    function n(a) {
                        g[l] && g[l][m] && g[l][m](a)
                    }
                    var o = !1;

                    function p() {
                        o = !0
                    }

                    function q(a) {
                        if (o) return;
                        n("[Facebook Pixel] - " + a)
                    }
                    var r = "Facebook Pixel Error",
                        s = g.postMessage ? g.postMessage.bind(g) : function() {},
                        t = {};

                    function u(a) {
                        switch (a.type) {
                            case "FBQ_NO_METHOD_NAME":
                                return "You must provide an argument to fbq().";
                            case "INVALID_FBQ_METHOD":
                                var b = a.method;
                                return "\"fbq('" + b + "', ...);\" is not a valid fbq command.";
                            case "INVALID_PIXEL_ID":
                                b = a.pixelID;
                                return "Invalid PixelID: " + b + ".";
                            case "DUPLICATE_PIXEL_ID":
                                b = a.pixelID;
                                return "Duplicate Pixel ID: " + b + ".";
                            case "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":
                                b = a.metadataValue;
                                var c = a.pixelID;
                                return "Trying to set argument " + b + " for uninitialized Pixel ID " + c + ".";
                            case "CONFLICTING_VERSIONS":
                                return "Multiple pixels with conflicting versions were detected on this page.";
                            case "MULTIPLE_PIXELS":
                                return "Multiple pixels were detected on this page.";
                            case "UNSUPPORTED_METADATA_ARGUMENT":
                                b = a.metadata;
                                return "Unsupported metadata argument: " + b + ".";
                            case "REQUIRED_PARAM_MISSING":
                                c = a.param;
                                b = a.eventName;
                                return "Required parameter '" + c + "' is missing for event '" + b + "'.";
                            case "INVALID_PARAM":
                                c = a.param;
                                b = a.eventName;
                                return "Parameter '" + c + "' is invalid for event '" + b + "'.";
                            case "NO_EVENT_NAME":
                                return 'Missing event name. Track events must be logged with an event name fbq("track", eventName)';
                            case "NONSTANDARD_EVENT":
                                c = a.eventName;
                                return "You are sending a non-standard event '" + c + "'. The preferred way to send these events is using trackCustom. See 'https://developers.facebook.com/docs/ads-for-websites/pixel-events/#events' for more information.";
                            case "NEGATIVE_EVENT_PARAM":
                                b = a.param;
                                c = a.eventName;
                                return "Parameter '" + b + "' is negative for event '" + c + "'.";
                            case "PII_INVALID_TYPE":
                                b = a.key_type;
                                c = a.key_val;
                                return "An invalid " + b + " was specified for '" + c + "'. This data will not be sent with any events for this Pixel.";
                            case "PII_UNHASHED_PII":
                                b = a.key;
                                return "The value for the '" + b + "' key appeared to be PII. This data will not be sent with any events for this Pixel.";
                            case "INVALID_CONSENT_ACTION":
                                c = a.action;
                                return "\"fbq('" + c + "', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'revoke' and 'grant'.";
                            case "INVALID_JSON_LD":
                                b = a.jsonLd;
                                return "Unable to parse JSON-LD tag. Malformed JSON found: '" + b + "'.";
                            case "SITE_CODELESS_OPT_OUT":
                                c = a.pixelID;
                                return "Unable to open Codeless events interface for pixel as the site has opted out. Pixel ID: " + c + ".";
                            case "PIXEL_NOT_INITIALIZED":
                                b = a.pixelID;
                                return "Pixel " + b + " not found";
                            default:
                                x(new Error("INVALID_USER_ERROR - " + a.type + " - " + JSON.stringify(a)));
                                return "Invalid User Error."
                        }
                    }

                    function v(a, e) {
                        try {
                            var f = Math.random(),
                                h = g.fbq && g.fbq._releaseSegment ? g.fbq._releaseSegment : "unknown";
                            if (j && f < .01 || h === "canary") {
                                f = new c(null);
                                f.append("p", "pixel");
                                f.append("v", g.fbq && g.fbq.version ? g.fbq.version : "unknown");
                                f.append("e", a.toString());
                                b(a, Error) && (f.append("f", a.fileName), f.append("s", a.stackTrace || a.stack));
                                f.append("ue", e ? "1" : "0");
                                f.append("rs", h);
                                d(f, "https://connect.facebook.net/log/error")
                            }
                        } catch (a) {}
                    }

                    function w(a) {
                        var b = JSON.stringify(a);
                        if (!Object.prototype.hasOwnProperty.call(t, b)) t[b] = !0;
                        else return;
                        b = u(a);
                        q(b);
                        s({
                            action: "FB_LOG",
                            logMessage: b,
                            logType: r
                        }, "*");
                        v(new Error(b), !0)
                    }

                    function x(a) {
                        v(a, !1), h && q(a.toString())
                    }
                    a = {
                        consoleWarn: n,
                        disableAllLogging: p,
                        disableSampling: k,
                        enableVerboseDebugLogging: i,
                        logError: x,
                        logUserError: w
                    };
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsNetworkConfig", function() {
            return function(f, g, h, i) {
                var j = {
                    exports: {}
                };
                j.exports;
                (function() {
                    "use strict";
                    var a = {
                        ENDPOINT: "https://www.facebook.com/tr/"
                    };
                    j.exports = a
                })();
                return j.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsPlugin", function() {
            return function(f, g, h, i) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = function a(b) {
                        j(this, a), this.__fbEventsPlugin = 1, this.plugin = b, this.__fbEventsPlugin = 1
                    };
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsSendFormPOST", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
                        b = f.getFbeventsModules("SignalsFBEventsUtils"),
                        c = b.listenOnce;

                    function d(b, d) {
                        b.replaceEntry("rqm", "formPOST");
                        var e = "fb" + Math.random().toString().replace(".", ""),
                            f = h.createElement("form");
                        f.method = "post";
                        f.action = d != null ? d : a.ENDPOINT;
                        f.target = e;
                        f.acceptCharset = "utf-8";
                        f.style.display = "none";
                        d = !!(g.attachEvent && !g.addEventListener);
                        var i = h.createElement("iframe");
                        d && (i.name = e);
                        i.src = "about:blank";
                        i.id = e;
                        i.name = e;
                        f.appendChild(i);
                        c(i, "load", function() {
                            b.each(function(a, b) {
                                var c = h.createElement("input");
                                c.name = decodeURIComponent(a);
                                c.value = b;
                                f.appendChild(c)
                            }), c(i, "load", function() {
                                f.parentNode && f.parentNode.removeChild(f)
                            }), f.submit()
                        });
                        h.body != null && h.body.appendChild(f);
                        return !0
                    }
                    e.exports = d
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsUtils", function() {
            return function(f, i, c, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = Object.prototype.toString,
                        b = !("addEventListener" in i);

                    function c(a, b) {
                        return b != null && a instanceof b
                    }

                    function d(b) {
                        return Array.isArray ? Array.isArray(b) : a.call(b) === "[object Array]"
                    }

                    function f(a) {
                        return typeof a === "number" || typeof a === "string" && /^\d+$/.test(a)
                    }
                    var k = Number.isInteger || function(a) {
                        return typeof a === "number" && isFinite(a) && Math.floor(a) === a
                    };

                    function l(a) {
                        return k(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER
                    }

                    function m(a, c, d) {
                        var e = b ? "on" + c : c;
                        c = b ? a.attachEvent : a.addEventListener;
                        var f = b ? a.detachEvent : a.removeEventListener,
                            g = function b() {
                                f && f.call(a, e, b, !1), d()
                            };
                        c && c.call(a, e, g, !1)
                    }
                    var n = Object.prototype.hasOwnProperty,
                        o = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        q = p.length;

                    function r(a) {
                        if (Object.keys) return Object.keys(a);
                        if ((typeof a === "undefined" ? "undefined" : g(a)) !== "object" && (typeof a !== "function" || a === null)) throw new TypeError("Object.keys called on non-object");
                        var b = [];
                        for (var c in a) n.call(a, c) && b.push(c);
                        if (o)
                            for (var d = 0; d < q; d++) n.call(a, p[d]) && b.push(p[d]);
                        return b
                    }

                    function s(a, b) {
                        if (Array.prototype.map) return Array.prototype.map.call(a, b);
                        if (a == null) throw new TypeError(" array is null or not defined");
                        a = Object(a);
                        var c = a.length >>> 0;
                        if (typeof b !== "function") throw new TypeError(b + " is not a function");
                        var d = new Array(c),
                            e = 0;
                        while (e < c) {
                            var f;
                            e in a && (f = a[e], f = b(null, f, e, a), d[e] = f);
                            e++
                        }
                        return d
                    }

                    function t(a, b, c) {
                        if (Array.prototype.reduce) return Array.prototype.reduce.call(a, b, c);
                        if (a == null) throw new TypeError(" array is null or not defined");
                        if (typeof b !== "function") throw new TypeError(b + " is not a function");
                        var d = Object(a),
                            e = d.length >>> 0,
                            f = 0;
                        if (c != null) c = c;
                        else {
                            while (f < e && !(f in d)) f++;
                            if (f >= e) throw new TypeError("Reduce of empty array with no initial value");
                            c = d[f++]
                        }
                        while (f < e) f in d && (c = b(c, d[f], f, a)), f++;
                        return c
                    }

                    function u(a) {
                        if (this == null) throw new TypeError("Array.prototype.some called on null or undefined");
                        if (Array.prototype.some) return Array.prototype.some.call(this, a);
                        if (typeof a !== "function") throw new TypeError();
                        var b = Object(this),
                            c = b.length >>> 0,
                            d = arguments.length >= 2 ? arguments[1] : void 0;
                        for (var e = 0; e < c; e++)
                            if (e in b && a.call(d, b[e], e, b)) return !0;
                        return !1
                    }

                    function v(a) {
                        return r(a).length === 0
                    }

                    function w(a) {
                        if (this === void 0 || this === null) throw new TypeError();
                        var b = Object(this),
                            c = b.length >>> 0;
                        if (typeof a !== "function") throw new TypeError();
                        var d = [],
                            e = arguments.length >= 2 ? arguments[1] : void 0;
                        for (var f = 0; f < c; f++)
                            if (f in b) {
                                var g = b[f];
                                a.call(e, g, f, b) && d.push(g)
                            }
                        return d
                    }

                    function x(a, b) {
                        try {
                            return b(a)
                        } catch (a) {
                            if (a instanceof TypeError)
                                if (y.test(a)) return null;
                                else if (z.test(a)) return void 0;
                            throw a
                        }
                    }
                    var y = /^null | null$|^[^(]* null /i,
                        z = /^undefined | undefined$|^[^(]* undefined /i;
                    x["default"] = x;
                    var A = function() {
                        function a(b) {
                            j(this, a), this.items = b || []
                        }
                        h(a, [{
                            key: "has",
                            value: function(a) {
                                return u.call(this.items, function(b) {
                                    return b === a
                                })
                            }
                        }, {
                            key: "add",
                            value: function(a) {
                                this.items.push(a)
                            }
                        }]);
                        return a
                    }();

                    function B(a) {
                        return a
                    }

                    function C(a, b) {
                        return a == null || b == null ? !1 : a.indexOf(b) >= 0
                    }
                    A = {
                        FBSet: A,
                        castTo: B,
                        each: function(a, b) {
                            s.call(this, a, b)
                        },
                        filter: function(a, b) {
                            return w.call(a, b)
                        },
                        idx: x,
                        isArray: d,
                        isEmptyObject: v,
                        isInstanceOf: c,
                        isInteger: k,
                        isNumber: f,
                        isSafeInteger: l,
                        keys: r,
                        listenOnce: m,
                        map: s,
                        reduce: t,
                        some: function(a, b) {
                            return u.call(a, b)
                        },
                        stringIncludes: C
                    };
                    e.exports = A
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsParamList", function() {
            return function(f, i, c, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = "deep",
                        b = "shallow";

                    function c(a) {
                        return JSON === void 0 || JSON === null || !JSON.stringify ? Object.prototype.toString.call(a) : JSON.stringify(a)
                    }

                    function d(a) {
                        if (a === null || a === void 0) return !0;
                        a = typeof a === "undefined" ? "undefined" : g(a);
                        return a === "number" || a === "boolean" || a === "string"
                    }
                    var f = function() {
                        function e(a) {
                            j(this, e), this._params = [], this._piiTranslator = a
                        }
                        h(e, [{
                            key: "containsKey",
                            value: function(a) {
                                for (var b = 0; b < this._params.length; b++)
                                    if (this._params[b].name === a) return !0;
                                return !1
                            }
                        }, {
                            key: "get",
                            value: function(a) {
                                a = a;
                                for (var b = 0; b < this._params.length; b++)
                                    if (this._params[b].name === a) return this._params[b].value;
                                return null
                            }
                        }, {
                            key: "getAllParams",
                            value: function() {
                                return this._params
                            }
                        }, {
                            key: "replaceEntry",
                            value: function(a, b) {
                                var c = 0;
                                while (c < this._params.length) this._params[c].name === a ? this._params.splice(c, 1) : c++;
                                this.append(a, b)
                            }
                        }, {
                            key: "addRange",
                            value: function(a) {
                                var c = this;
                                a.each(function(a, d) {
                                    return c._append({
                                        name: a,
                                        value: d
                                    }, b, !1)
                                })
                            }
                        }, {
                            key: "append",
                            value: function(b, c) {
                                var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                                this._append({
                                    name: encodeURIComponent(b),
                                    value: c
                                }, a, d);
                                return this
                            }
                        }, {
                            key: "appendHash",
                            value: function(b) {
                                var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                                for (var d in b) Object.prototype.hasOwnProperty.call(b, d) && this._append({
                                    name: encodeURIComponent(d),
                                    value: b[d]
                                }, a, c);
                                return this
                            }
                        }, {
                            key: "_append",
                            value: function(b, e, f) {
                                var g = b.name;
                                b = b.value;
                                d(b) ? this._appendPrimitive(g, b, f) : e === a ? this._appendObject(g, b, f) : this._appendPrimitive(g, c(b), f)
                            }
                        }, {
                            key: "_translateValue",
                            value: function(a, b, c) {
                                if (typeof b === "boolean") return b ? "true" : "false";
                                if (!c) return "" + b;
                                if (!this._piiTranslator) throw new Error();
                                return this._piiTranslator(a, "" + b)
                            }
                        }, {
                            key: "_appendPrimitive",
                            value: function(a, b, c) {
                                if (b != null) {
                                    b = this._translateValue(a, b, c);
                                    b != null && this._params.push({
                                        name: a,
                                        value: b
                                    })
                                }
                            }
                        }, {
                            key: "_appendObject",
                            value: function(a, c, d) {
                                var e = null;
                                for (var f in c)
                                    if (Object.prototype.hasOwnProperty.call(c, f)) {
                                        var g = a + "[" + encodeURIComponent(f) + "]";
                                        try {
                                            this._append({
                                                name: g,
                                                value: c[f]
                                            }, b, d)
                                        } catch (a) {
                                            e == null && (e = a)
                                        }
                                    }
                                if (e != null) throw e
                            }
                        }, {
                            key: "each",
                            value: function(a) {
                                for (var b = 0; b < this._params.length; b++) {
                                    var c = this._params[b],
                                        d = c.name;
                                    c = c.value;
                                    a(d, c)
                                }
                            }
                        }, {
                            key: "toQueryString",
                            value: function() {
                                var a = [];
                                this.each(function(b, c) {
                                    a.push(b + "=" + encodeURIComponent(c))
                                });
                                return a.join("&")
                            }
                        }, {
                            key: "toFormData",
                            value: function() {
                                var a = new FormData();
                                this.each(function(b, c) {
                                    a.append(b, c)
                                });
                                return a
                            }
                        }], [{
                            key: "fromHash",
                            value: function(a, b) {
                                return new e(b).appendHash(a)
                            }
                        }]);
                        return e
                    }();
                    e.exports = f
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEvents.plugins.iwlbootstrapper", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),
                        b = f.getFbeventsModules("SignalsFBEventsLogging"),
                        c = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
                        d = f.getFbeventsModules("SignalsFBEventsPlugin"),
                        i = f.getFbeventsModules("signalsFBEventsGetIwlUrl"),
                        j = f.getFbeventsModules("signalsFBEventsGetTier"),
                        k = b.logUserError,
                        l = /^https:\/\/.*\.facebook\.com$/i,
                        m = "FACEBOOK_IWL_CONFIG_STORAGE_KEY",
                        n = g.sessionStorage ? g.sessionStorage : {
                            getItem: function(a) {
                                return null
                            },
                            removeItem: function(a) {},
                            setItem: function(a, b) {}
                        };
                    e.exports = new d(function(b, d) {
                        function e(a, b) {
                            var d = h.createElement("script");
                            d.async = !0;
                            d.onload = function() {
                                if (!g.FacebookIWL || !g.FacebookIWL.init) return;
                                var a = j(c.ENDPOINT);
                                a != null && g.FacebookIWL.set && g.FacebookIWL.set("tier", a);
                                b()
                            };
                            g.FacebookIWLSessionEnd = function() {
                                n.removeItem(m), g.close()
                            };
                            d.src = i(a, c.ENDPOINT);
                            h.body && h.body.appendChild(d)
                        }
                        var o = !1,
                            p = function(a) {
                                return !!(d && d.pixelsByID && Object.prototype.hasOwnProperty.call(d.pixelsByID, a))
                            };

                        function q() {
                            if (o) return;
                            var a = n.getItem(m);
                            if (!a) return;
                            a = JSON.parse(a);
                            var b = a.pixelID,
                                c = a.graphToken,
                                d = a.sessionStartTime;
                            o = !0;
                            e(b, function() {
                                var a = p(b) ? b : null;
                                g.FacebookIWL.init(a, c, d)
                            })
                        }

                        function r(a) {
                            if (o) return;
                            e(a, function() {
                                return g.FacebookIWL.showConfirmModal(a)
                            })
                        }

                        function s(a, b, c) {
                            n.setItem(m, JSON.stringify({
                                graphToken: a,
                                pixelID: b,
                                sessionStartTime: c
                            })), q()
                        }
                        a.listen(function(a) {
                            var b = a.graphToken;
                            a = a.pixelID;
                            s(b, a);
                            g.FacebookIWLSessionEnd = function() {
                                return n.removeItem(m)
                            }
                        });

                        function b(a) {
                            var b = a.data,
                                c = b.graphToken,
                                e = b.msg_type,
                                f = b.pixelID;
                            b = b.sessionStartTime;
                            if (d && d.pixelsByID && d.pixelsByID[f] && d.pixelsByID[f].codeless === "false") {
                                k({
                                    pixelID: f,
                                    type: "SITE_CODELESS_OPT_OUT"
                                });
                                return
                            }
                            if (n.getItem(m) || !l.test(a.origin) || !(a.data && (e === "FACEBOOK_IWL_BOOTSTRAP" || e === "FACEBOOK_IWL_CONFIRM_DOMAIN"))) return;
                            switch (e) {
                                case "FACEBOOK_IWL_BOOTSTRAP":
                                    a.source.postMessage("FACEBOOK_IWL_BOOTSTRAP_ACK", a.origin);
                                    s(c, f, b);
                                    break;
                                case "FACEBOOK_IWL_CONFIRM_DOMAIN":
                                    a.source.postMessage("FACEBOOK_IWL_CONFIRM_DOMAIN_ACK", a.origin);
                                    r(f);
                                    break
                            }
                        }
                        if (n.getItem(m)) {
                            q();
                            return
                        }
                        g.opener && g.addEventListener("message", b)
                    })
                })();
                return e.exports
            }(a, b, c, d)
        });
        e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.iwlbootstrapper");
        f.registerPlugin && f.registerPlugin("fbevents.plugins.iwlbootstrapper", e.exports);
        f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper", function() {
            return e.exports
        })
    })()
})(window, document, location, history);
(function(a, b, c, d) {
    var e = {
        exports: {}
    };
    e.exports;
    (function() {
        var f = a.fbq;
        f.execStart = a.performance && a.performance.now && a.performance.now();
        if (! function() {
            var b = a.postMessage || function() {};
            if (!f) {
                b({
                    action: "FB_LOG",
                    logType: "Facebook Pixel Error",
                    logMessage: "Pixel code is not installed correctly on this page"
                }, "*");
                "error" in console && console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");
                return !1
            }
            return !0
        }()) return;
        var g = function() {
                function a(a, b) {
                    var c = [],
                        d = !0,
                        e = !1,
                        f = void 0;
                    try {
                        for (var a = a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](), g; !(d = (g = a.next()).done); d = !0) {
                            c.push(g.value);
                            if (b && c.length === b) break
                        }
                    } catch (a) {
                        e = !0, f = a
                    } finally {
                        try {
                            !d && a["return"] && a["return"]()
                        } finally {
                            if (e) throw f
                        }
                    }
                    return c
                }
                return function(b, c) {
                    if (Array.isArray(b)) return b;
                    else if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(b)) return a(b, c);
                    else throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            h = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1;
                        d.configurable = !0;
                        "value" in d && (d.writable = !0);
                        Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) {
                    c && a(b.prototype, c);
                    d && a(b, d);
                    return b
                }
            }(),
            i = typeof Symbol === "function" && typeof(typeof Symbol === "function" ? Symbol.iterator : "@@iterator") === "symbol" ? function(a) {
                return typeof a
            } : function(a) {
                return a && typeof Symbol === "function" && a.constructor === Symbol && a !== (typeof Symbol === "function" ? Symbol.prototype : "@@prototype") ? "symbol" : typeof a
            };

        function j(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
        }
        f.__fbeventsModules || (f.__fbeventsModules = {}, f.__fbeventsResolvedModules = {}, f.getFbeventsModules = function(a) {
            f.__fbeventsResolvedModules[a] || (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
            return f.__fbeventsResolvedModules[a]
        }, f.fbIsModuleLoaded = function(a) {
            return !!f.__fbeventsModules[a]
        }, f.ensureModuleRegistered = function(b, a) {
            f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a)
        });
        f.ensureModuleRegistered("sha256_with_dependencies_new", function() {
            return function(f, g, h, i) {
                var j = {
                    exports: {}
                };
                j.exports;
                (function() {
                    "use strict";

                    function a(a) {
                        var b = "",
                            c = void 0,
                            d;
                        for (var e = 0; e < a.length; e++) c = a.charCodeAt(e), d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0, c >= 55296 && c <= 56319 && d >= 56320 && d <= 57343 && (c = 65536 + ((c & 1023) << 10) + (d & 1023), e++), c <= 127 ? b += String.fromCharCode(c) : c <= 2047 ? b += String.fromCharCode(192 | c >>> 6 & 31, 128 | c & 63) : c <= 65535 ? b += String.fromCharCode(224 | c >>> 12 & 15, 128 | c >>> 6 & 63, 128 | c & 63) : c <= 2097151 && (b += String.fromCharCode(240 | c >>> 18 & 7, 128 | c >>> 12 & 63, 128 | c >>> 6 & 63, 128 | c & 63));
                        return b
                    }

                    function b(a, b) {
                        return b >>> a | b << 32 - a
                    }

                    function c(a, b, c) {
                        return a & b ^ ~a & c
                    }

                    function d(a, b, c) {
                        return a & b ^ a & c ^ b & c
                    }

                    function e(a) {
                        return b(2, a) ^ b(13, a) ^ b(22, a)
                    }

                    function f(a) {
                        return b(6, a) ^ b(11, a) ^ b(25, a)
                    }

                    function g(a) {
                        return b(7, a) ^ b(18, a) ^ a >>> 3
                    }

                    function h(a) {
                        return b(17, a) ^ b(19, a) ^ a >>> 10
                    }

                    function i(a, b) {
                        return a[b & 15] += h(a[b + 14 & 15]) + a[b + 9 & 15] + g(a[b + 1 & 15])
                    }
                    var k = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                        l = new Array(8),
                        m = new Array(2),
                        n = new Array(64),
                        o = new Array(16),
                        p = "0123456789abcdef";

                    function q(a, b) {
                        var c = (a & 65535) + (b & 65535);
                        a = (a >> 16) + (b >> 16) + (c >> 16);
                        return a << 16 | c & 65535
                    }

                    function r() {
                        m[0] = m[1] = 0, l[0] = 1779033703, l[1] = 3144134277, l[2] = 1013904242, l[3] = 2773480762, l[4] = 1359893119, l[5] = 2600822924, l[6] = 528734635, l[7] = 1541459225
                    }

                    function s() {
                        var a = void 0,
                            b = void 0,
                            g = void 0,
                            h = void 0,
                            j = void 0,
                            m = void 0,
                            p = void 0,
                            r = void 0,
                            s = void 0,
                            t = void 0;
                        g = l[0];
                        h = l[1];
                        j = l[2];
                        m = l[3];
                        p = l[4];
                        r = l[5];
                        s = l[6];
                        t = l[7];
                        for (var u = 0; u < 16; u++) o[u] = n[(u << 2) + 3] | n[(u << 2) + 2] << 8 | n[(u << 2) + 1] << 16 | n[u << 2] << 24;
                        for (var u = 0; u < 64; u++) a = t + f(p) + c(p, r, s) + k[u], u < 16 ? a += o[u] : a += i(o, u), b = e(g) + d(g, h, j), t = s, s = r, r = p, p = q(m, a), m = j, j = h, h = g, g = q(a, b);
                        l[0] += g;
                        l[1] += h;
                        l[2] += j;
                        l[3] += m;
                        l[4] += p;
                        l[5] += r;
                        l[6] += s;
                        l[7] += t
                    }

                    function t(a, b) {
                        var c = void 0,
                            d, e = 0;
                        d = m[0] >> 3 & 63;
                        var f = b & 63;
                        (m[0] += b << 3) < b << 3 && m[1]++;
                        m[1] += b >> 29;
                        for (c = 0; c + 63 < b; c += 64) {
                            for (var g = d; g < 64; g++) n[g] = a.charCodeAt(e++);
                            s();
                            d = 0
                        }
                        for (var g = 0; g < f; g++) n[g] = a.charCodeAt(e++)
                    }

                    function u() {
                        var a = m[0] >> 3 & 63;
                        n[a++] = 128;
                        if (a <= 56)
                            for (var b = a; b < 56; b++) n[b] = 0;
                        else {
                            for (var b = a; b < 64; b++) n[b] = 0;
                            s();
                            for (var a = 0; a < 56; a++) n[a] = 0
                        }
                        n[56] = m[1] >>> 24 & 255;
                        n[57] = m[1] >>> 16 & 255;
                        n[58] = m[1] >>> 8 & 255;
                        n[59] = m[1] & 255;
                        n[60] = m[0] >>> 24 & 255;
                        n[61] = m[0] >>> 16 & 255;
                        n[62] = m[0] >>> 8 & 255;
                        n[63] = m[0] & 255;
                        s()
                    }

                    function v() {
                        var a = "";
                        for (var b = 0; b < 8; b++)
                            for (var c = 28; c >= 0; c -= 4) a += p.charAt(l[b] >>> c & 15);
                        return a
                    }

                    function w(a) {
                        var b = 0;
                        for (var c = 0; c < 8; c++)
                            for (var d = 28; d >= 0; d -= 4) a[b++] = p.charCodeAt(l[c] >>> d & 15)
                    }

                    function x(a, b) {
                        r();
                        t(a, a.length);
                        u();
                        if (b) w(b);
                        else return v()
                    }

                    function y(b) {
                        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                            d = arguments[2];
                        if (b === null || b === void 0) return null;
                        var e = b;
                        c && (e = a(b));
                        return x(e, d)
                    }
                    j.exports = y
                })();
                return j.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsLogging", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsUtils"),
                        b = a.isInstanceOf,
                        c = f.getFbeventsModules("SignalsParamList"),
                        d = f.getFbeventsModules("signalsFBEventsSendFormPOST"),
                        h = !1;

                    function i() {
                        h = !0
                    }
                    var j = !0;

                    function k() {
                        j = !1
                    }
                    var l = "console",
                        m = "warn";

                    function n(a) {
                        g[l] && g[l][m] && g[l][m](a)
                    }
                    var o = !1;

                    function p() {
                        o = !0
                    }

                    function q(a) {
                        if (o) return;
                        n("[Facebook Pixel] - " + a)
                    }
                    var r = "Facebook Pixel Error",
                        s = g.postMessage ? g.postMessage.bind(g) : function() {},
                        t = {};

                    function u(a) {
                        switch (a.type) {
                            case "FBQ_NO_METHOD_NAME":
                                return "You must provide an argument to fbq().";
                            case "INVALID_FBQ_METHOD":
                                var b = a.method;
                                return "\"fbq('" + b + "', ...);\" is not a valid fbq command.";
                            case "INVALID_PIXEL_ID":
                                b = a.pixelID;
                                return "Invalid PixelID: " + b + ".";
                            case "DUPLICATE_PIXEL_ID":
                                b = a.pixelID;
                                return "Duplicate Pixel ID: " + b + ".";
                            case "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":
                                b = a.metadataValue;
                                var c = a.pixelID;
                                return "Trying to set argument " + b + " for uninitialized Pixel ID " + c + ".";
                            case "CONFLICTING_VERSIONS":
                                return "Multiple pixels with conflicting versions were detected on this page.";
                            case "MULTIPLE_PIXELS":
                                return "Multiple pixels were detected on this page.";
                            case "UNSUPPORTED_METADATA_ARGUMENT":
                                b = a.metadata;
                                return "Unsupported metadata argument: " + b + ".";
                            case "REQUIRED_PARAM_MISSING":
                                c = a.param;
                                b = a.eventName;
                                return "Required parameter '" + c + "' is missing for event '" + b + "'.";
                            case "INVALID_PARAM":
                                c = a.param;
                                b = a.eventName;
                                return "Parameter '" + c + "' is invalid for event '" + b + "'.";
                            case "NO_EVENT_NAME":
                                return 'Missing event name. Track events must be logged with an event name fbq("track", eventName)';
                            case "NONSTANDARD_EVENT":
                                c = a.eventName;
                                return "You are sending a non-standard event '" + c + "'. The preferred way to send these events is using trackCustom. See 'https://developers.facebook.com/docs/ads-for-websites/pixel-events/#events' for more information.";
                            case "NEGATIVE_EVENT_PARAM":
                                b = a.param;
                                c = a.eventName;
                                return "Parameter '" + b + "' is negative for event '" + c + "'.";
                            case "PII_INVALID_TYPE":
                                b = a.key_type;
                                c = a.key_val;
                                return "An invalid " + b + " was specified for '" + c + "'. This data will not be sent with any events for this Pixel.";
                            case "PII_UNHASHED_PII":
                                b = a.key;
                                return "The value for the '" + b + "' key appeared to be PII. This data will not be sent with any events for this Pixel.";
                            case "INVALID_CONSENT_ACTION":
                                c = a.action;
                                return "\"fbq('" + c + "', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'revoke' and 'grant'.";
                            case "INVALID_JSON_LD":
                                b = a.jsonLd;
                                return "Unable to parse JSON-LD tag. Malformed JSON found: '" + b + "'.";
                            case "SITE_CODELESS_OPT_OUT":
                                c = a.pixelID;
                                return "Unable to open Codeless events interface for pixel as the site has opted out. Pixel ID: " + c + ".";
                            case "PIXEL_NOT_INITIALIZED":
                                b = a.pixelID;
                                return "Pixel " + b + " not found";
                            default:
                                x(new Error("INVALID_USER_ERROR - " + a.type + " - " + JSON.stringify(a)));
                                return "Invalid User Error."
                        }
                    }

                    function v(a, e) {
                        try {
                            var f = Math.random(),
                                h = g.fbq && g.fbq._releaseSegment ? g.fbq._releaseSegment : "unknown";
                            if (j && f < .01 || h === "canary") {
                                f = new c(null);
                                f.append("p", "pixel");
                                f.append("v", g.fbq && g.fbq.version ? g.fbq.version : "unknown");
                                f.append("e", a.toString());
                                b(a, Error) && (f.append("f", a.fileName), f.append("s", a.stackTrace || a.stack));
                                f.append("ue", e ? "1" : "0");
                                f.append("rs", h);
                                d(f, "https://connect.facebook.net/log/error")
                            }
                        } catch (a) {}
                    }

                    function w(a) {
                        var b = JSON.stringify(a);
                        if (!Object.prototype.hasOwnProperty.call(t, b)) t[b] = !0;
                        else return;
                        b = u(a);
                        q(b);
                        s({
                            action: "FB_LOG",
                            logMessage: b,
                            logType: r
                        }, "*");
                        v(new Error(b), !0)
                    }

                    function x(a) {
                        v(a, !1), h && q(a.toString())
                    }
                    a = {
                        consoleWarn: n,
                        disableAllLogging: p,
                        disableSampling: k,
                        enableVerboseDebugLogging: i,
                        logError: x,
                        logUserError: w
                    };
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsNetworkConfig", function() {
            return function(f, g, h, i) {
                var j = {
                    exports: {}
                };
                j.exports;
                (function() {
                    "use strict";
                    var a = {
                        ENDPOINT: "https://www.facebook.com/tr/"
                    };
                    j.exports = a
                })();
                return j.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsPlugin", function() {
            return function(f, g, h, i) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = function a(b) {
                        j(this, a), this.__fbEventsPlugin = 1, this.plugin = b, this.__fbEventsPlugin = 1
                    };
                    e.exports = a
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("signalsFBEventsSendFormPOST", function() {
            return function(g, h, i, j) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
                        b = f.getFbeventsModules("SignalsFBEventsUtils"),
                        c = b.listenOnce;

                    function d(b, d) {
                        b.replaceEntry("rqm", "formPOST");
                        var e = "fb" + Math.random().toString().replace(".", ""),
                            f = h.createElement("form");
                        f.method = "post";
                        f.action = d != null ? d : a.ENDPOINT;
                        f.target = e;
                        f.acceptCharset = "utf-8";
                        f.style.display = "none";
                        d = !!(g.attachEvent && !g.addEventListener);
                        var i = h.createElement("iframe");
                        d && (i.name = e);
                        i.src = "about:blank";
                        i.id = e;
                        i.name = e;
                        f.appendChild(i);
                        c(i, "load", function() {
                            b.each(function(a, b) {
                                var c = h.createElement("input");
                                c.name = decodeURIComponent(a);
                                c.value = b;
                                f.appendChild(c)
                            }), c(i, "load", function() {
                                f.parentNode && f.parentNode.removeChild(f)
                            }), f.submit()
                        });
                        h.body != null && h.body.appendChild(f);
                        return !0
                    }
                    e.exports = d
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEventsUtils", function() {
            return function(f, g, c, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = Object.prototype.toString,
                        b = !("addEventListener" in g);

                    function c(a, b) {
                        return b != null && a instanceof b
                    }

                    function d(b) {
                        return Array.isArray ? Array.isArray(b) : a.call(b) === "[object Array]"
                    }

                    function f(a) {
                        return typeof a === "number" || typeof a === "string" && /^\d+$/.test(a)
                    }
                    var k = Number.isInteger || function(a) {
                        return typeof a === "number" && isFinite(a) && Math.floor(a) === a
                    };

                    function l(a) {
                        return k(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER
                    }

                    function m(a, c, d) {
                        var e = b ? "on" + c : c;
                        c = b ? a.attachEvent : a.addEventListener;
                        var f = b ? a.detachEvent : a.removeEventListener,
                            g = function b() {
                                f && f.call(a, e, b, !1), d()
                            };
                        c && c.call(a, e, g, !1)
                    }
                    var n = Object.prototype.hasOwnProperty,
                        o = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        p = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        q = p.length;

                    function r(a) {
                        if (Object.keys) return Object.keys(a);
                        if ((typeof a === "undefined" ? "undefined" : i(a)) !== "object" && (typeof a !== "function" || a === null)) throw new TypeError("Object.keys called on non-object");
                        var b = [];
                        for (var c in a) n.call(a, c) && b.push(c);
                        if (o)
                            for (var d = 0; d < q; d++) n.call(a, p[d]) && b.push(p[d]);
                        return b
                    }

                    function s(a, b) {
                        if (Array.prototype.map) return Array.prototype.map.call(a, b);
                        if (a == null) throw new TypeError(" array is null or not defined");
                        a = Object(a);
                        var c = a.length >>> 0;
                        if (typeof b !== "function") throw new TypeError(b + " is not a function");
                        var d = new Array(c),
                            e = 0;
                        while (e < c) {
                            var f;
                            e in a && (f = a[e], f = b(null, f, e, a), d[e] = f);
                            e++
                        }
                        return d
                    }

                    function t(a, b, c) {
                        if (Array.prototype.reduce) return Array.prototype.reduce.call(a, b, c);
                        if (a == null) throw new TypeError(" array is null or not defined");
                        if (typeof b !== "function") throw new TypeError(b + " is not a function");
                        var d = Object(a),
                            e = d.length >>> 0,
                            f = 0;
                        if (c != null) c = c;
                        else {
                            while (f < e && !(f in d)) f++;
                            if (f >= e) throw new TypeError("Reduce of empty array with no initial value");
                            c = d[f++]
                        }
                        while (f < e) f in d && (c = b(c, d[f], f, a)), f++;
                        return c
                    }

                    function u(a) {
                        if (this == null) throw new TypeError("Array.prototype.some called on null or undefined");
                        if (Array.prototype.some) return Array.prototype.some.call(this, a);
                        if (typeof a !== "function") throw new TypeError();
                        var b = Object(this),
                            c = b.length >>> 0,
                            d = arguments.length >= 2 ? arguments[1] : void 0;
                        for (var e = 0; e < c; e++)
                            if (e in b && a.call(d, b[e], e, b)) return !0;
                        return !1
                    }

                    function v(a) {
                        return r(a).length === 0
                    }

                    function w(a) {
                        if (this === void 0 || this === null) throw new TypeError();
                        var b = Object(this),
                            c = b.length >>> 0;
                        if (typeof a !== "function") throw new TypeError();
                        var d = [],
                            e = arguments.length >= 2 ? arguments[1] : void 0;
                        for (var f = 0; f < c; f++)
                            if (f in b) {
                                var g = b[f];
                                a.call(e, g, f, b) && d.push(g)
                            }
                        return d
                    }

                    function x(a, b) {
                        try {
                            return b(a)
                        } catch (a) {
                            if (a instanceof TypeError)
                                if (y.test(a)) return null;
                                else if (z.test(a)) return void 0;
                            throw a
                        }
                    }
                    var y = /^null | null$|^[^(]* null /i,
                        z = /^undefined | undefined$|^[^(]* undefined /i;
                    x["default"] = x;
                    var A = function() {
                        function a(b) {
                            j(this, a), this.items = b || []
                        }
                        h(a, [{
                            key: "has",
                            value: function(a) {
                                return u.call(this.items, function(b) {
                                    return b === a
                                })
                            }
                        }, {
                            key: "add",
                            value: function(a) {
                                this.items.push(a)
                            }
                        }]);
                        return a
                    }();

                    function B(a) {
                        return a
                    }

                    function C(a, b) {
                        return a == null || b == null ? !1 : a.indexOf(b) >= 0
                    }
                    A = {
                        FBSet: A,
                        castTo: B,
                        each: function(a, b) {
                            s.call(this, a, b)
                        },
                        filter: function(a, b) {
                            return w.call(a, b)
                        },
                        idx: x,
                        isArray: d,
                        isEmptyObject: v,
                        isInstanceOf: c,
                        isInteger: k,
                        isNumber: f,
                        isSafeInteger: l,
                        keys: r,
                        listenOnce: m,
                        map: s,
                        reduce: t,
                        some: function(a, b) {
                            return u.call(a, b)
                        },
                        stringIncludes: C
                    };
                    e.exports = A
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsParamList", function() {
            return function(f, g, c, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = "deep",
                        b = "shallow";

                    function c(a) {
                        return JSON === void 0 || JSON === null || !JSON.stringify ? Object.prototype.toString.call(a) : JSON.stringify(a)
                    }

                    function d(a) {
                        if (a === null || a === void 0) return !0;
                        a = typeof a === "undefined" ? "undefined" : i(a);
                        return a === "number" || a === "boolean" || a === "string"
                    }
                    var f = function() {
                        function e(a) {
                            j(this, e), this._params = [], this._piiTranslator = a
                        }
                        h(e, [{
                            key: "containsKey",
                            value: function(a) {
                                for (var b = 0; b < this._params.length; b++)
                                    if (this._params[b].name === a) return !0;
                                return !1
                            }
                        }, {
                            key: "get",
                            value: function(a) {
                                a = a;
                                for (var b = 0; b < this._params.length; b++)
                                    if (this._params[b].name === a) return this._params[b].value;
                                return null
                            }
                        }, {
                            key: "getAllParams",
                            value: function() {
                                return this._params
                            }
                        }, {
                            key: "replaceEntry",
                            value: function(a, b) {
                                var c = 0;
                                while (c < this._params.length) this._params[c].name === a ? this._params.splice(c, 1) : c++;
                                this.append(a, b)
                            }
                        }, {
                            key: "addRange",
                            value: function(a) {
                                var c = this;
                                a.each(function(a, d) {
                                    return c._append({
                                        name: a,
                                        value: d
                                    }, b, !1)
                                })
                            }
                        }, {
                            key: "append",
                            value: function(b, c) {
                                var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                                this._append({
                                    name: encodeURIComponent(b),
                                    value: c
                                }, a, d);
                                return this
                            }
                        }, {
                            key: "appendHash",
                            value: function(b) {
                                var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                                for (var d in b) Object.prototype.hasOwnProperty.call(b, d) && this._append({
                                    name: encodeURIComponent(d),
                                    value: b[d]
                                }, a, c);
                                return this
                            }
                        }, {
                            key: "_append",
                            value: function(b, e, f) {
                                var g = b.name;
                                b = b.value;
                                d(b) ? this._appendPrimitive(g, b, f) : e === a ? this._appendObject(g, b, f) : this._appendPrimitive(g, c(b), f)
                            }
                        }, {
                            key: "_translateValue",
                            value: function(a, b, c) {
                                if (typeof b === "boolean") return b ? "true" : "false";
                                if (!c) return "" + b;
                                if (!this._piiTranslator) throw new Error();
                                return this._piiTranslator(a, "" + b)
                            }
                        }, {
                            key: "_appendPrimitive",
                            value: function(a, b, c) {
                                if (b != null) {
                                    b = this._translateValue(a, b, c);
                                    b != null && this._params.push({
                                        name: a,
                                        value: b
                                    })
                                }
                            }
                        }, {
                            key: "_appendObject",
                            value: function(a, c, d) {
                                var e = null;
                                for (var f in c)
                                    if (Object.prototype.hasOwnProperty.call(c, f)) {
                                        var g = a + "[" + encodeURIComponent(f) + "]";
                                        try {
                                            this._append({
                                                name: g,
                                                value: c[f]
                                            }, b, d)
                                        } catch (a) {
                                            e == null && (e = a)
                                        }
                                    }
                                if (e != null) throw e
                            }
                        }, {
                            key: "each",
                            value: function(a) {
                                for (var b = 0; b < this._params.length; b++) {
                                    var c = this._params[b],
                                        d = c.name;
                                    c = c.value;
                                    a(d, c)
                                }
                            }
                        }, {
                            key: "toQueryString",
                            value: function() {
                                var a = [];
                                this.each(function(b, c) {
                                    a.push(b + "=" + encodeURIComponent(c))
                                });
                                return a.join("&")
                            }
                        }, {
                            key: "toFormData",
                            value: function() {
                                var a = new FormData();
                                this.each(function(b, c) {
                                    a.append(b, c)
                                });
                                return a
                            }
                        }], [{
                            key: "fromHash",
                            value: function(a, b) {
                                return new e(b).appendHash(a)
                            }
                        }]);
                        return e
                    }();
                    e.exports = f
                })();
                return e.exports
            }(a, b, c, d)
        });
        f.ensureModuleRegistered("SignalsFBEvents.plugins.identity", function() {
            return function(h, i, j, d) {
                var e = {
                    exports: {}
                };
                e.exports;
                (function() {
                    "use strict";
                    var a = f.getFbeventsModules("SignalsFBEventsLogging"),
                        b = a.logUserError;
                    a = f.getFbeventsModules("SignalsFBEventsPlugin");
                    var c = f.getFbeventsModules("SignalsFBEventsUtils");
                    c = c.FBSet;
                    var d = f.getFbeventsModules("sha256_with_dependencies_new"),
                        h = /^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/,
                        i = /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,
                        j = /^\s+|\s+$/g;
                    Object.prototype.hasOwnProperty;
                    var k = new c(["uid"]);

                    function l(a) {
                        return !!a && i.test(a)
                    }

                    function m(a) {
                        return a.replace(j, "")
                    }

                    function n(a) {
                        return a.toLowerCase()
                    }

                    function o(a, c) {
                        if (a === "em" || a === "email") {
                            var d = typeof c === "string" ? m(n(c)) : "";
                            if (d == null || d === "") return null;
                            if (!l(d)) {
                                b({
                                    key_type: "email address",
                                    key_val: a,
                                    type: "PII_INVALID_TYPE"
                                });
                                throw new Error()
                            }
                            return d
                        }
                        return c
                    }

                    function p(a, c) {
                        if (c == null) return null;
                        var e = /\[(.*)\]/.exec(a);
                        if (e == null) throw new Error();
                        e = g(e, 2);
                        e = e[1];
                        if (k.has(e)) {
                            if (l(c)) {
                                b({
                                    key: a,
                                    type: "PII_UNHASHED_PII"
                                });
                                throw new Error()
                            }
                            return c
                        }
                        if (h.test(c)) return c.toLowerCase();
                        a = o(e, c);
                        return a != null ? d(a) : null
                    }
                    c = new a(function(a) {
                        a.piiTranslator = p
                    });
                    c.piiTranslator = p;
                    e.exports = c
                })();
                return e.exports
            }(a, b, c, d)
        });
        e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.identity");
        f.registerPlugin && f.registerPlugin("fbevents.plugins.identity", e.exports);
        f.ensureModuleRegistered("fbevents.plugins.identity", function() {
            return e.exports
        })
    })()
})(window, document, location, history);