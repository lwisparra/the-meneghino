! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/app/plugins/emergence-year-2", n(n.s = 9)
}([function(t, e, n) {
    (function(e) {
        var n = "Expected a function",
            r = NaN,
            i = "[object Symbol]",
            o = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            a = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            f = parseInt,
            l = "object" == typeof e && e && e.Object === Object && e,
            s = "object" == typeof self && self && self.Object === Object && self,
            d = l || s || Function("return this")(),
            h = Object.prototype.toString,
            v = Math.max,
            p = Math.min,
            y = function() {
                return d.Date.now()
            };

        function b(t, e, r) {
            var i, o, u, a, c, f, l = 0,
                s = !1,
                d = !1,
                h = !0;
            if ("function" != typeof t) throw new TypeError(n);

            function b(e) {
                var n = i,
                    r = o;
                return i = o = void 0, l = e, a = t.apply(r, n)
            }

            function w(t) {
                var n = t - f;
                return void 0 === f || n >= e || n < 0 || d && t - l >= u
            }

            function j() {
                var t = y();
                if (w(t)) return O(t);
                c = setTimeout(j, function(t) {
                    var n = e - (t - f);
                    return d ? p(n, u - (t - l)) : n
                }(t))
            }

            function O(t) {
                return c = void 0, h && i ? b(t) : (i = o = void 0, a)
            }

            function x() {
                var t = y(),
                    n = w(t);
                if (i = arguments, o = this, f = t, n) {
                    if (void 0 === c) return function(t) {
                        return l = t, c = setTimeout(j, e), s ? b(t) : a
                    }(f);
                    if (d) return c = setTimeout(j, e), b(f)
                }
                return void 0 === c && (c = setTimeout(j, e)), a
            }
            return e = m(e) || 0, g(r) && (s = !!r.leading, u = (d = "maxWait" in r) ? v(m(r.maxWait) || 0, e) : u, h = "trailing" in r ? !!r.trailing : h), x.cancel = function() {
                void 0 !== c && clearTimeout(c), l = 0, i = f = o = c = void 0
            }, x.flush = function() {
                return void 0 === c ? a : O(y())
            }, x
        }

        function g(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function m(t) {
            if ("number" == typeof t) return t;
            if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && h.call(t) == i
            }(t)) return r;
            if (g(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = g(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(o, "");
            var n = a.test(t);
            return n || c.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? r : +t
        }
        t.exports = function(t, e, r) {
            var i = !0,
                o = !0;
            if ("function" != typeof t) throw new TypeError(n);
            return g(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o), b(t, e, {
                leading: i,
                maxWait: e,
                trailing: o
            })
        }
    }).call(this, n(7))
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {}, function(t, e, n) {
    "use strict";
    n.r(e);
    n(1), n(2), n(3), n(4), n(5), n(6);
    var r = n(0),
        i = n.n(r);
    n(8);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    var u, a, c = function() {
        function t(e, n) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), e && (this.el = e, this.trigger = n, this.handleIntersection = this.handleIntersection.bind(this), this.handleScroll = i()(this.handleScroll.bind(this), 250, {
                leading: !0,
                trailing: !0
            }), this.observer = new IntersectionObserver(this.handleIntersection, {
                threshold: [1, 0]
            }))
        }
        var e, n, r;
        return e = t, (n = [{
            key: "mount",
            value: function() {
                this.el && this.trigger && (this.observer.observe(this.trigger), window.addEventListener("scroll", this.handleScroll))
            }
        }, {
            key: "handleIntersection",
            value: function(t) {
                var e = t[0];
                this.el.setAttribute("data-year2header-hidden", e.isIntersecting)
            }
        }, {
            key: "handleScroll",
            value: function(t) {
                var e = window.pageYOffset;
                this.el.setAttribute("data-year2header-shrink", e > 100)
            }
        }]) && o(e.prototype, n), r && o(e, r), t
    }();
    u = document.querySelector("[data-year2header]"), a = document.querySelector("[data-year2header-trigger]"), new c(u, a).mount()
}]);