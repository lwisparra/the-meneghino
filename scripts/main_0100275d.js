! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/app/themes/emergence/dist/", t(t.s = 15)
}([function(e, t) {
    e.exports = jQuery
}, function(e, t, n) {
    ! function(t, n) {
        e.exports = n()
    }(0, function() {
        "use strict";

        function e(e) {
            for (var t = e.length, n = [], i = 0; i < t; i += 1) n.push(e[i]);
            return n
        }

        function t(e) {
            return e instanceof Element ? e : "string" == typeof e ? document.querySelector(e) : null
        }

        function n(t, n) {
            return void 0 === n && (n = document), "string" == typeof t ? e(n.querySelectorAll(t)) : t instanceof NodeList ? e(t) : t instanceof Array ? t : []
        }

        function i(e) {
            return "scrollama__debug-step--" + e.id + "-" + e.i
        }

        function a(e) {
            return "scrollama__debug-offset--" + e.id
        }

        function s(e) {
            var t = e.id,
                n = e.i,
                a = i({
                    id: t,
                    i: n
                }),
                s = document.createElement("div");
            s.setAttribute("id", a + "_above"), s.setAttribute("class", "scrollama__debug-step"), s.style.position = "fixed", s.style.left = "0", s.style.width = "100%", s.style.backgroundImage = "repeating-linear-gradient(45deg, green 0, green 2px, white 0, white 40px)", s.style.border = "2px solid green", s.style.opacity = "0.33", s.style.zIndex = "9999", s.style.display = "none", document.body.appendChild(s);
            var o = document.createElement("div");
            o.setAttribute("id", a + "_below"), o.setAttribute("class", "scrollama__debug-step"), o.style.position = "fixed", o.style.left = "0", o.style.width = "100%", o.style.backgroundImage = "repeating-linear-gradient(135deg, orange 0, orange 2px, white 0, white 40px)", o.style.border = "2px solid orange", o.style.opacity = "0.33", o.style.zIndex = "9999", o.style.display = "none", document.body.appendChild(o)
        }

        function o(e) {
            var t = e.id,
                n = e.offsetVal,
                i = e.stepClass,
                s = document.createElement("div");
            s.setAttribute("id", a({
                id: t
            })), s.setAttribute("class", "scrollama__debug-offset"), s.style.position = "fixed", s.style.left = "0", s.style.width = "100%", s.style.height = "0px", s.style.borderTop = "2px dashed black", s.style.zIndex = "9999";
            var o = document.createElement("p");
            o.innerText = '".' + i + '" trigger: ' + n, o.style.fontSize = "12px", o.style.fontFamily = "monospace", o.style.color = "black", o.style.margin = "0", o.style.padding = "6px", s.appendChild(o), document.body.appendChild(s)
        }

        function r(e) {
            var t = e.id,
                n = e.offsetVal,
                i = e.stepEl,
                a = i[0].getAttribute("class");
            i.forEach(function(e, n) {
                return s({
                    id: t,
                    i: n
                })
            }), o({
                id: t,
                offsetVal: n,
                stepClass: a
            })
        }

        function l(e) {
            var t = e.id,
                n = e.offsetMargin,
                i = (e.offsetVal, a({
                    id: t
                }));
            document.querySelector("#" + i).style.top = n + "px"
        }

        function c(e) {
            var t = e.id,
                n = e.h,
                a = e.i,
                s = e.offsetMargin,
                o = i({
                    id: t,
                    i: a
                }),
                r = document.querySelector("#" + o + "_above");
            r.style.height = n + "px", r.style.top = s - n + "px";
            var l = document.querySelector("#" + o + "_below");
            l.style.height = n + "px", l.style.top = s + "px"
        }

        function u(e) {
            var t = e.id,
                n = e.stepOffsetHeight,
                i = e.offsetMargin;
            e.offsetVal;
            n.forEach(function(e, n) {
                return c({
                    id: t,
                    h: e,
                    i: n,
                    offsetMargin: i
                })
            }), l({
                id: t,
                offsetMargin: i
            })
        }

        function d(e) {
            var t = e.id,
                n = e.index,
                a = e.state,
                s = i({
                    id: t,
                    i: n
                }),
                o = document.querySelector("#" + s + "_above"),
                r = document.querySelector("#" + s + "_below"),
                l = "enter" === a ? "block" : "none";
            o && (o.style.display = l), r && (r.style.display = l)
        }

        function h() {
            function e() {
                var e = "abcdefghijklmnopqrstuv",
                    t = e.length,
                    n = (new Date).getTime();
                return "" + [0, 0, 0].map(function(n) {
                    return e[Math.floor(Math.random() * t)]
                }).join("") + n
            }

            function i(e) {
                var t = 0;
                if (e.offsetParent)
                    do {
                        t += e.offsetTop, e = e.offsetParent
                    } while (e);
                return t < 0 ? 0 : t
            }

            function a() {
                var e = document.body,
                    t = document.documentElement;
                return Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
            }

            function s(e) {
                return +e.getAttribute("data-scrollama-index")
            }

            function o() {
                window.pageYOffset > oe ? re = "down" : window.pageYOffset < oe && (re = "up"), oe = window.pageYOffset
            }

            function l() {
                U = window.innerHeight, Y = a(), K = D ? D.getBoundingClientRect() : null, V = H * U, X = z ? z.map(function(e) {
                    return e.offsetHeight
                }) : [], Z = z ? z.map(i) : [], G && Q && R(), J && u({
                    id: W,
                    stepOffsetHeight: X,
                    offsetMargin: V,
                    offsetVal: H
                })
            }

            function c(e) {
                e && !G ? (Q && R(), G = !0) : e || (N.top && N.top.disconnect(), N.bottom && N.bottom.disconnect(), N.stepAbove && N.stepAbove.forEach(function(e) {
                    return e.disconnect()
                }), N.stepBelow && N.stepBelow.forEach(function(e) {
                    return e.disconnect()
                }), N.stepProgress && N.stepProgress.forEach(function(e) {
                    return e.disconnect()
                }), N.viewportAbove && N.viewportAbove.forEach(function(e) {
                    return e.disconnect()
                }), N.viewportBelow && N.viewportBelow.forEach(function(e) {
                    return e.disconnect()
                }), G = !1)
            }

            function h(e) {
                for (var t = Math.ceil(e / te), n = [], i = 1 / t, a = 0; a < t; a++) n.push(a * i);
                return n
            }

            function p(e, t) {
                if ("above" === t)
                    for (var n = 0; n < e; n++) {
                        var i = ae[n];
                        "enter" === i.state && m(z[n], "down"), "up" === i.direction && (f(z[n], "down", !1), m(z[n], "down"))
                    } else if ("below" === t)
                    for (var a = ae.length - 1; a > e; a--) {
                        var s = ae[a];
                        "enter" === s.state && m(z[a], "up"), "down" === s.direction && (f(z[a], "up", !1), m(z[a], "up"))
                    }
            }

            function f(e, t) {
                void 0 === t && (t = !0);
                var n = s(e),
                    i = {
                        element: e,
                        index: n,
                        direction: re
                    };
                ae[n].direction = re, ae[n].state = "enter", ne && t && "down" === re && p(n, "above"), ne && t && "up" === re && p(n, "below"), F.stepEnter && "function" == typeof F.stepEnter && !le[n] && (F.stepEnter(i, ae), J && d({
                    id: W,
                    index: n,
                    state: "enter"
                }), ie && (le[n] = !0)), ee && ("down" === re ? g(e, 0) : g(e, 1))
            }

            function m(e) {
                var t = s(e),
                    n = {
                        element: e,
                        index: t,
                        direction: re
                    };
                ae[t].direction = re, ae[t].state = "exit", ee && ("down" === re ? g(e, 1) : g(e, 0)), F.stepExit && "function" == typeof F.stepExit && (F.stepExit(n, ae), J && d({
                    id: W,
                    index: t,
                    state: "exit"
                }))
            }

            function g(e, t) {
                var n = s(e),
                    i = {
                        element: e,
                        index: n,
                        progress: t
                    };
                F.stepProgress && "function" == typeof F.stepProgress && F.stepProgress(i)
            }

            function y() {
                var e = {
                    direction: re
                };
                se.direction = re, se.state = "enter", F.containerEnter && "function" == typeof F.containerEnter && F.containerEnter(e)
            }

            function v() {
                var e = {
                    direction: re
                };
                se.direction = re, se.state = "exit", F.containerExit && "function" == typeof F.containerExit && F.containerExit(e)
            }

            function b(e) {
                o(), e.forEach(function(e) {
                    var t = e.isIntersecting,
                        n = e.boundingClientRect,
                        i = e.target,
                        a = n.bottom,
                        o = n.height,
                        r = a - V,
                        l = s(i),
                        c = ae[l];
                    r >= -j && (t && "down" === re && "enter" !== c.state ? f(i, re) : t || "up" !== re || "enter" !== c.state ? !t && r >= o && "down" === re && "enter" === c.state && m(i, re) : m(i, re))
                })
            }

            function w(e) {
                o(), e.forEach(function(e) {
                    var t = e.isIntersecting,
                        n = e.boundingClientRect,
                        i = e.target,
                        a = n.bottom,
                        o = n.height,
                        r = a - V,
                        l = s(i),
                        c = ae[l];
                    r >= -j && r < o && t && "up" === re && "enter" !== c.state ? f(i, re) : r <= j && !t && "down" === re && "enter" === c.state && m(i, re)
                })
            }

            function x(e) {
                o(), e.forEach(function(e) {
                    var t = e.isIntersecting,
                        n = e.target,
                        i = s(n),
                        a = ae[i];
                    t && "down" === re && "enter" !== a.state && "down" !== a.direction && (f(n, "down"), m(n, "down"))
                })
            }

            function k(e) {
                o(), e.forEach(function(e) {
                    var t = e.isIntersecting,
                        n = e.target,
                        i = s(n),
                        a = ae[i];
                    t && "up" === re && "enter" !== a.state && "up" !== a.direction && (f(n, "up"), m(n, "up"))
                })
            }

            function E(e) {
                o(), e.forEach(function(e) {
                    var t = e.isIntersecting,
                        n = e.intersectionRatio,
                        i = e.boundingClientRect,
                        a = e.target,
                        s = i.bottom,
                        o = s - V;
                    t && o >= -j && g(a, +n.toFixed(3))
                })
            }

            function C(e) {
                o();
                var t = e[0],
                    n = t.isIntersecting,
                    i = t.boundingClientRect;
                i.top;
                i.bottom > -j && (n ? y(re) : "enter" === se.state && v(re))
            }

            function P(e) {
                o();
                var t = e[0],
                    n = t.isIntersecting;
                t.boundingClientRect.top < j && (n ? y(re) : "enter" === se.state && v(re))
            }

            function T() {
                N.top && N.top.unobserve(B);
                var e = {
                    root: null,
                    rootMargin: U + "px 0px -" + U + "px 0px",
                    threshold: 0
                };
                N.top = new IntersectionObserver(C, e), N.top.observe(B)
            }

            function S() {
                N.bottom && N.bottom.unobserve(B);
                var e = {
                    root: null,
                    rootMargin: "-" + K.height + "px 0px " + K.height + "px 0px",
                    threshold: 0
                };
                N.bottom = new IntersectionObserver(P, e), N.bottom.observe(B)
            }

            function A() {
                N.stepAbove && N.stepAbove.forEach(function(e) {
                    return e.disconnect()
                }), N.stepAbove = z.map(function(e, t) {
                    var n = X[t],
                        i = -U + V,
                        a = n + "px 0px " + i + "px 0px",
                        s = {
                            root: null,
                            rootMargin: a,
                            threshold: 0
                        },
                        o = new IntersectionObserver(b, s);
                    return o.observe(e), o
                })
            }

            function _() {
                N.stepBelow && N.stepBelow.forEach(function(e) {
                    return e.disconnect()
                }), N.stepBelow = z.map(function(e, t) {
                    var n = -V,
                        i = Y - U + X[t] + V,
                        a = n + "px 0px " + i + "px 0px",
                        s = {
                            root: null,
                            rootMargin: a,
                            threshold: 0
                        },
                        o = new IntersectionObserver(w, s);
                    return o.observe(e), o
                })
            }

            function M() {
                N.viewportAbove && N.viewportAbove.forEach(function(e) {
                    return e.disconnect()
                }), N.viewportAbove = z.map(function(e, t) {
                    var n = Z[t],
                        i = -(U - V + X[t]),
                        a = n + "px 0px " + i + "px 0px",
                        s = {
                            root: null,
                            rootMargin: a,
                            threshold: 0
                        },
                        o = new IntersectionObserver(x, s);
                    return o.observe(e), o
                })
            }

            function L() {
                N.viewportBelow && N.viewportBelow.forEach(function(e) {
                    return e.disconnect()
                }), N.viewportBelow = z.map(function(e, t) {
                    var n = -(V + X[t]),
                        i = Y - Z[t] - X[t] - V,
                        a = n + "px 0px " + i + "px 0px",
                        s = {
                            root: null,
                            rootMargin: a,
                            threshold: 0
                        },
                        o = new IntersectionObserver(k, s);
                    return o.observe(e), o
                })
            }

            function O() {
                N.stepProgress && N.stepProgress.forEach(function(e) {
                    return e.disconnect()
                }), N.stepProgress = z.map(function(e, t) {
                    var n = X[t] - V,
                        i = -U + V,
                        a = n + "px 0px " + i + "px 0px",
                        s = h(X[t]),
                        o = {
                            root: null,
                            rootMargin: a,
                            threshold: s
                        },
                        r = new IntersectionObserver(E, o);
                    return r.observe(e), r
                })
            }

            function R() {
                M(), L(), A(), _(), ee && O(), B && D && (T(), S())
            }

            function I() {
                z.forEach(function(e, t) {
                    return e.setAttribute("data-scrollama-index", t)
                })
            }

            function $() {
                ae = z.map(function() {
                    return {
                        direction: null,
                        state: null
                    }
                }), se = {
                    direction: null,
                    state: null
                }
            }

            function q() {
                J && r({
                    id: W,
                    stepEl: z,
                    offsetVal: H
                })
            }
            var j = 1,
                F = {},
                N = {},
                B = null,
                D = null,
                z = null,
                W = null,
                H = 0,
                V = 0,
                U = 0,
                Y = 0,
                X = null,
                Z = null,
                K = null,
                Q = !1,
                G = !1,
                J = !1,
                ee = !1,
                te = 0,
                ne = !1,
                ie = !1,
                ae = null,
                se = null,
                oe = -1,
                re = null,
                le = [],
                ce = {};
            return ce.setup = function(i) {
                var a = i.container,
                    s = i.graphic,
                    o = i.step,
                    r = i.offset;
                void 0 === r && (r = .5);
                var u = i.progress;
                void 0 === u && (u = !1);
                var d = i.threshold;
                void 0 === d && (d = 4);
                var h = i.debug;
                void 0 === h && (h = !1);
                var p = i.order;
                void 0 === p && (p = !0);
                var f = i.once;
                return void 0 === f && (f = !1), W = e(), z = n(o), B = a ? t(a) : null, D = s ? t(s) : null, z.length ? (J = h, ee = u, ne = p, ie = f, ce.offsetTrigger(r), te = Math.max(1, +d), Q = !0, q(), I(), $(), l(), c(!0), ce) : (console.error("scrollama error: no step elements"), ce)
            }, ce.resize = function() {
                return l(), ce
            }, ce.enable = function() {
                return c(!0), ce
            }, ce.disable = function() {
                return c(!1), ce
            }, ce.destroy = function() {
                c(!1), Object.keys(F).forEach(function(e) {
                    return F[e] = null
                }), Object.keys(N).forEach(function(e) {
                    return N[e] = null
                })
            }, ce.offsetTrigger = function(e) {
                return e && (isNaN(e), !0) ? (H = Math.min(Math.max(0, e), 1), ce) : H
            }, ce.onStepEnter = function(e) {
                return F.stepEnter = e, ce
            }, ce.onStepExit = function(e) {
                return F.stepExit = e, ce
            }, ce.onStepProgress = function(e) {
                return F.stepProgress = e, ce
            }, ce.onContainerEnter = function(e) {
                return F.containerEnter = e, ce
            }, ce.onContainerExit = function(e) {
                return F.containerExit = e, ce
            }, ce
        }
        return h
    })
}, function(e, t, n) {
    (function(t) {
        function n(e, t, n) {
            function i(t) {
                var n = m,
                    i = g;
                return m = g = void 0, C = t, v = e.apply(i, n)
            }

            function s(e) {
                return C = e, b = setTimeout(u, t), P ? i(e) : v
            }

            function o(e) {
                var n = e - w,
                    i = e - C,
                    a = t - n;
                return T ? k(a, y - i) : a
            }

            function c(e) {
                var n = e - w,
                    i = e - C;
                return void 0 === w || n >= t || n < 0 || T && i >= y
            }

            function u() {
                var e = E();
                if (c(e)) return d(e);
                b = setTimeout(u, o(e))
            }

            function d(e) {
                return b = void 0, S && m ? i(e) : (m = g = void 0, v)
            }

            function h() {
                void 0 !== b && clearTimeout(b), C = 0, m = w = g = b = void 0
            }

            function p() {
                return void 0 === b ? v : d(E())
            }

            function f() {
                var e = E(),
                    n = c(e);
                if (m = arguments, g = this, w = e, n) {
                    if (void 0 === b) return s(w);
                    if (T) return b = setTimeout(u, t), i(w)
                }
                return void 0 === b && (b = setTimeout(u, t)), v
            }
            var m, g, y, v, b, w, C = 0,
                P = !1,
                T = !1,
                S = !0;
            if ("function" != typeof e) throw new TypeError(l);
            return t = r(t) || 0, a(n) && (P = !!n.leading, T = "maxWait" in n, y = T ? x(r(n.maxWait) || 0, t) : y, S = "trailing" in n ? !!n.trailing : S), f.cancel = h, f.flush = p, f
        }

        function i(e, t, i) {
            var s = !0,
                o = !0;
            if ("function" != typeof e) throw new TypeError(l);
            return a(i) && (s = "leading" in i ? !!i.leading : s, o = "trailing" in i ? !!i.trailing : o), n(e, t, {
                leading: s,
                maxWait: t,
                trailing: o
            })
        }

        function a(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function s(e) {
            return !!e && "object" == typeof e
        }

        function o(e) {
            return "symbol" == typeof e || s(e) && w.call(e) == u
        }

        function r(e) {
            if ("number" == typeof e) return e;
            if (o(e)) return c;
            if (a(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = a(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(d, "");
            var n = p.test(e);
            return n || f.test(e) ? m(e.slice(2), n ? 2 : 8) : h.test(e) ? c : +e
        }
        var l = "Expected a function",
            c = NaN,
            u = "[object Symbol]",
            d = /^\s+|\s+$/g,
            h = /^[-+]0x[0-9a-f]+$/i,
            p = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            m = parseInt,
            g = "object" == typeof t && t && t.Object === Object && t,
            y = "object" == typeof self && self && self.Object === Object && self,
            v = g || y || Function("return this")(),
            b = Object.prototype,
            w = b.toString,
            x = Math.max,
            k = Math.min,
            E = function() {
                return v.Date.now()
            };
        e.exports = i
    }).call(t, n(3))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, , function(e, t, n) {
    "use strict";
    var i = n(2),
        a = n.n(i),
        s = function(e) {
            e && (this.el = e, this.image = this.el.querySelector("img"), this.video = this.el.querySelector("video"), this.handleMouseOver = a()(this.handleMouseOver.bind(this), 50, {
                leading: !0,
                trailing: !1
            }))
        };
    s.prototype.setup = function() {
        this.el && (this.el.setAttribute("data-mask-explorer", ""), this.image && this.image.setAttribute("data-mask-explorer-child", ""), this.video && this.video.setAttribute("data-mask-explorer-child", ""), this.el.addEventListener("mousemove", this.handleMouseOver))
    }, s.prototype.handleMouseOver = function(e) {
        if (this.el) {
            var t = {
                x: e.offsetX || e.layerX,
                y: e.offsetY || e.layerY
            };
            if (this.image) {
                var n = (1 - t.x / (this.el.getBoundingClientRect().width / 2)) * ((this.image.getBoundingClientRect().width - this.el.getBoundingClientRect().width) / 2),
                    i = (1 - t.y / (this.el.getBoundingClientRect().height / 2)) * ((this.image.getBoundingClientRect().height - this.el.getBoundingClientRect().height) / 2);
                this.image.style.transform = "translate(" + n + "px, " + i + "px)"
            }
            if (this.video) {
                var a = (1 - t.x / (this.el.getBoundingClientRect().width / 2)) * ((this.video.getBoundingClientRect().width - this.el.getBoundingClientRect().width) / 2),
                    s = (1 - t.y / (this.el.getBoundingClientRect().height / 2)) * ((this.video.getBoundingClientRect().height - this.el.getBoundingClientRect().height) / 2);
                this.video.style.transform = "translate(" + a + "px, " + s + "px)"
            }
        }
    }, s.prototype.destroy = function() {
        this.el.removeEventListener("mousemove", this.handleMouseOver)
    }, t.a = s
}, , function(e, t, n) {
    "use strict";
    var i = function(e, t, n) {
        e && (this.container = e, this.selector = t, this.exclusionList = n || [], this.inputs = [].slice.call(e.querySelectorAll("input, textarea")), this.filterExcludedClasses = this.filterExcludedClasses.bind(this), this.handleInputFocus = this.handleInputFocus.bind(this), this.handleInputBlur = this.handleInputBlur.bind(this))
    };
    i.prototype.setup = function() {
        var e = this;
        this.container && (this.inputs = this.inputs.filter(this.filterExcludedClasses), this.inputs.forEach(function(t) {
            t.addEventListener("focus", e.handleInputFocus), t.addEventListener("blur", e.handleInputBlur)
        }))
    }, i.prototype.handleInputFocus = function(e) {
        var t = e.target,
            n = this.selector ? t.closest(this.selector) : t.parentNode;
        n && n.setAttribute("data-em-contactlabels-focus", "")
    }, i.prototype.handleInputBlur = function(e) {
        var t = e.target,
            n = this.selector ? t.closest(this.selector) : t.parentNode;
        n && n.removeAttribute("data-em-contactlabels-focus")
    }, i.prototype.filterExcludedClasses = function(e) {
        for (var t = this, n = this.selector ? e.closest(this.selector) : e.parentNode, i = 0, a = this.exclusionList.length; i < a; i += 1) {
            if (e.classList.contains(t.exclusionList[i])) return !1;
            if (n && n.classList.contains(t.exclusionList[i])) return !1
        }
        return !0
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = n(5),
        a = function(e) {
            this.el = e, this.poster = e.querySelector(".vr-player__poster"), this.iframe = e.querySelector("iframe"), this.explorer = new i.a(this.poster), this.handleClick = this.handleClick.bind(this)
        };
    a.prototype.setup = function() {
        this.loadYTAPI(), this.el.setAttribute("data-vrplayer", "inactive"), this.el.addEventListener("click", this.handleClick), this.explorer.setup()
    }, a.prototype.loadYTAPI = function() {
        var e = this;
        if (!document.querySelector(".youtube-api-script")) {
            var t = document.createElement("script");
            t.src = "https://www.youtube.com/iframe_api", t.className = "youtube-api-script";
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n), window.onYouTubeIframeAPIReady = function() {
                e.player = new window.YT.Player(e.iframe)
            }
        }
    }, a.prototype.handleClick = function() {
        window.Foundation && !window.Foundation.MediaQuery.atLeast("medium") || "active" !== this.el.getAttribute("data-vrplayer") && (this.player.playVideo(), this.el.setAttribute("data-vrplayer", "active"), this.explorer.destroy())
    }, t.a = a
}, function(e, t, n) {
    "use strict";
    var i = n(1),
        a = n.n(i),
        s = function(e, t, n) {
            this.el = e, this.parent = t, this.container = n, this.el && this.parent && this.container && (this.scroller = a()(), this.handleStepEnter = this.handleStepEnter.bind(this), this.handleStepExit = this.handleStepExit.bind(this))
        };
    s.prototype.setup = function() {
        this.el && this.parent && this.container && (this.container.setAttribute("data-share-fixed", !1), this.scroller.setup({
            step: [this.parent],
            offset: 1
        }).onStepEnter(this.handleStepEnter).onStepExit(this.handleStepExit))
    }, s.prototype.handleStepEnter = function() {
        this.container.setAttribute("data-share-fixed", !0)
    }, s.prototype.handleStepExit = function() {
        this.container.setAttribute("data-share-fixed", !1)
    }, t.a = s
}, function(e, t, n) {
    (function(t, n, i) {
        ! function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";

            function e() {
                if (this.enabled) {
                    var e = this.player.elements.buttons.fullscreen;
                    m.is.element(e) && m.toggleState(e, this.active), m.dispatchEvent(this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), S.isIos || m.trapFocus.call(this.player, this.target, this.active)
                }
            }

            function a() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t ? this.scrollPosition = {
                    x: window.scrollX || 0,
                    y: window.scrollY || 0
                } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = t ? "hidden" : "", m.toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, t), e.call(this)
            }

            function s(e) {
                switch (e) {
                    case "hd2160":
                        return 2160;
                    case 2160:
                        return "hd2160";
                    case "hd1440":
                        return 1440;
                    case 1440:
                        return "hd1440";
                    case "hd1080":
                        return 1080;
                    case 1080:
                        return "hd1080";
                    case "hd720":
                        return 720;
                    case 720:
                        return "hd720";
                    case "large":
                        return 480;
                    case 480:
                        return "large";
                    case "medium":
                        return 360;
                    case 360:
                        return "medium";
                    case "small":
                        return 240;
                    case 240:
                        return "small";
                    default:
                        return "default"
                }
            }
            "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
            var o, r, l = (function(e, t) {
                    var n;
                    n = function() {
                        function e(e, t) {
                            if (e) {
                                var n = r[e];
                                if (o[e] = t, n)
                                    for (; n.length;) n[0](e, t), n.splice(0, 1)
                            }
                        }

                        function t(e, t) {
                            e.call && (e = {
                                success: e
                            }), t.length ? (e.error || a)(t) : (e.success || a)(e)
                        }

                        function n(e, t, i, s) {
                            var o, r, l = document,
                                c = i.async,
                                u = (i.numRetries || 0) + 1,
                                d = i.before || a,
                                h = e.replace(/^(css|img)!/, "");
                            s = s || 0, /(^css!|\.css$)/.test(e) ? (o = !0, (r = l.createElement("link")).rel = "stylesheet", r.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(e) ? (r = l.createElement("img")).src = h : ((r = l.createElement("script")).src = e, r.async = void 0 === c || c), r.onload = r.onerror = r.onbeforeload = function(a) {
                                var l = a.type[0];
                                if (o && "hideFocus" in r) try {
                                    r.sheet.cssText.length || (l = "e")
                                } catch (a) {
                                    l = "e"
                                }
                                if ("e" == l && (s += 1) < u) return n(e, t, i, s);
                                t(e, l, a.defaultPrevented)
                            }, !1 !== d(e, r) && l.head.appendChild(r)
                        }

                        function i(i, a, o) {
                            var r, l;
                            if (a && a.trim && (r = a), l = (r ? o : a) || {}, r) {
                                if (r in s) throw "LoadJS";
                                s[r] = !0
                            }! function(e, t, i) {
                                var a, s, o = (e = e.push ? e : [e]).length,
                                    r = o,
                                    l = [];
                                for (a = function(e, n, i) {
                                    if ("e" == n && l.push(e), "b" == n) {
                                        if (!i) return;
                                        l.push(e)
                                    }--o || t(l)
                                }, s = 0; s < r; s++) n(e[s], a, i)
                            }(i, function(n) {
                                t(l, n), e(r, n)
                            }, l)
                        }
                        var a = function() {},
                            s = {},
                            o = {},
                            r = {};
                        return i.ready = function(e, n) {
                            return function(e, t) {
                                var n, i, a, s = [],
                                    l = (e = e.push ? e : [e]).length,
                                    c = l;
                                for (n = function(e, n) {
                                    n.length && s.push(e), --c || t(s)
                                }; l--;) i = e[l], (a = o[i]) ? n(i, a) : (r[i] = r[i] || []).push(n)
                            }(e, function(e) {
                                t(n, e)
                            }), i
                        }, i.done = function(t) {
                            e(t, [])
                        }, i.reset = function() {
                            s = {}, o = {}, r = {}
                        }, i.isDefined = function(e) {
                            return e in s
                        }, i
                    }, e.exports = n()
                }(o = {
                    exports: {}
                }, o.exports), o.exports),
                c = {
                    html5: "html5",
                    youtube: "youtube",
                    vimeo: "vimeo"
                },
                u = {
                    audio: "audio",
                    video: "video"
                },
                d = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                h = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                p = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                f = function() {
                    return function(e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return function(e, t) {
                            var n = [],
                                i = !0,
                                a = !1,
                                s = void 0;
                            try {
                                for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                            } catch (e) {
                                a = !0, s = e
                            } finally {
                                try {
                                    !i && r.return && r.return()
                                } finally {
                                    if (a) throw s
                                }
                            }
                            return n
                        }(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                m = {
                    is: {
                        plyr: function(e) {
                            return this.instanceof(e, window.Plyr)
                        },
                        object: function(e) {
                            return this.getConstructor(e) === Object
                        },
                        number: function(e) {
                            return this.getConstructor(e) === Number && !Number.isNaN(e)
                        },
                        string: function(e) {
                            return this.getConstructor(e) === String
                        },
                        boolean: function(e) {
                            return this.getConstructor(e) === Boolean
                        },
                        function: function(e) {
                            return this.getConstructor(e) === Function
                        },
                        array: function(e) {
                            return !this.nullOrUndefined(e) && Array.isArray(e)
                        },
                        weakMap: function(e) {
                            return this.instanceof(e, window.WeakMap)
                        },
                        nodeList: function(e) {
                            return this.instanceof(e, window.NodeList)
                        },
                        element: function(e) {
                            return this.instanceof(e, window.Element)
                        },
                        textNode: function(e) {
                            return this.getConstructor(e) === Text
                        },
                        event: function(e) {
                            return this.instanceof(e, window.Event)
                        },
                        cue: function(e) {
                            return this.instanceof(e, window.TextTrackCue) || this.instanceof(e, window.VTTCue)
                        },
                        track: function(e) {
                            return this.instanceof(e, TextTrack) || !this.nullOrUndefined(e) && this.string(e.kind)
                        },
                        url: function(e) {
                            return !this.nullOrUndefined(e) && /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)
                        },
                        nullOrUndefined: function(e) {
                            return null === e || void 0 === e
                        },
                        empty: function(e) {
                            return this.nullOrUndefined(e) || (this.string(e) || this.array(e) || this.nodeList(e)) && !e.length || this.object(e) && !Object.keys(e).length
                        },
                        instanceof: function(e, t) {
                            return Boolean(e && t && e instanceof t)
                        },
                        getConstructor: function(e) {
                            return this.nullOrUndefined(e) ? null : e.constructor
                        }
                    },
                    getBrowser: function() {
                        return {
                            isIE: !!document.documentMode,
                            isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
                            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
                            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
                        }
                    },
                    fetch: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
                        return new Promise(function(n, i) {
                            try {
                                var a = new XMLHttpRequest;
                                if (!("withCredentials" in a)) return;
                                a.addEventListener("load", function() {
                                    if ("text" === t) try {
                                        n(JSON.parse(a.responseText))
                                    } catch (e) {
                                        n(a.responseText)
                                    } else n(a.response)
                                }), a.addEventListener("error", function() {
                                    throw new Error(a.statusText)
                                }), a.open("GET", e, !0), a.responseType = t, a.send()
                            } catch (e) {
                                i(e)
                            }
                        })
                    },
                    loadScript: function(e) {
                        return new Promise(function(t, n) {
                            l(e, {
                                success: t,
                                error: n
                            })
                        })
                    },
                    loadSprite: function(e, t) {
                        function n(e) {
                            i && a() || (this.innerHTML = e, document.body.insertBefore(this, document.body.childNodes[0]))
                        }
                        if (m.is.string(e)) {
                            var i = m.is.string(t),
                                a = function() {
                                    return document.querySelectorAll("#" + t).length
                                };
                            if (!i || !a()) {
                                var s = document.createElement("div");
                                if (m.toggleHidden(s, !0), i && s.setAttribute("id", t), g.storage) {
                                    var o = window.localStorage.getItem("cache-" + t);
                                    if (null !== o) {
                                        var r = JSON.parse(o);
                                        return void n.call(s, r.content)
                                    }
                                }
                                m.fetch(e).then(function(e) {
                                    m.is.empty(e) || (g.storage && window.localStorage.setItem("cache-" + t, JSON.stringify({
                                        content: e
                                    })), n.call(s, e))
                                }).catch(function() {})
                            }
                        }
                    },
                    generateId: function(e) {
                        return e + "-" + Math.floor(1e4 * Math.random())
                    },
                    wrap: function(e, t) {
                        var n = e.length ? e : [e];
                        Array.from(n).reverse().forEach(function(e, n) {
                            var i = n > 0 ? t.cloneNode(!0) : t,
                                a = e.parentNode,
                                s = e.nextSibling;
                            i.appendChild(e), s ? a.insertBefore(i, s) : a.appendChild(i)
                        })
                    },
                    createElement: function(e, t, n) {
                        var i = document.createElement(e);
                        return m.is.object(t) && m.setAttributes(i, t), m.is.string(n) && (i.textContent = n), i
                    },
                    insertAfter: function(e, t) {
                        t.parentNode.insertBefore(e, t.nextSibling)
                    },
                    insertElement: function(e, t, n, i) {
                        t.appendChild(m.createElement(e, n, i))
                    },
                    removeElement: function(e) {
                        m.is.nodeList(e) || m.is.array(e) ? Array.from(e).forEach(m.removeElement) : m.is.element(e) && m.is.element(e.parentNode) && e.parentNode.removeChild(e)
                    },
                    emptyElement: function(e) {
                        for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
                    },
                    replaceElement: function(e, t) {
                        return m.is.element(t) && m.is.element(t.parentNode) && m.is.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
                    },
                    setAttributes: function(e, t) {
                        m.is.element(e) && !m.is.empty(t) && Object.entries(t).forEach(function(t) {
                            var n = f(t, 2),
                                i = n[0],
                                a = n[1];
                            e.setAttribute(i, a)
                        })
                    },
                    getAttributesFromSelector: function(e, t) {
                        if (!m.is.string(e) || m.is.empty(e)) return {};
                        var n = {},
                            i = t;
                        return e.split(",").forEach(function(e) {
                            var t = e.trim(),
                                a = t.replace(".", ""),
                                s = t.replace(/[[\]]/g, "").split("="),
                                o = s[0],
                                r = s.length > 1 ? s[1].replace(/["']/g, "") : "";
                            switch (t.charAt(0)) {
                                case ".":
                                    m.is.object(i) && m.is.string(i.class) && (i.class += " " + a), n.class = a;
                                    break;
                                case "#":
                                    n.id = t.replace("#", "");
                                    break;
                                case "[":
                                    n[o] = r
                            }
                        }), n
                    },
                    toggleHidden: function(e, t) {
                        if (m.is.element(e)) {
                            var n = t;
                            m.is.boolean(n) || (n = !e.hasAttribute("hidden")), n ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
                        }
                    },
                    toggleClass: function(e, t, n) {
                        if (m.is.element(e)) {
                            var i = e.classList.contains(t);
                            return e.classList[n ? "add" : "remove"](t), n && !i || !n && i
                        }
                        return null
                    },
                    hasClass: function(e, t) {
                        return m.is.element(e) && e.classList.contains(t)
                    },
                    matches: function(e, t) {
                        var n = {
                            Element: Element
                        };
                        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function() {
                            return Array.from(document.querySelectorAll(t)).includes(this)
                        }).call(e, t)
                    },
                    getElements: function(e) {
                        return this.elements.container.querySelectorAll(e)
                    },
                    getElement: function(e) {
                        return this.elements.container.querySelector(e)
                    },
                    getFocusElement: function() {
                        var e = document.activeElement;
                        return e = e && e !== document.body ? document.querySelector(":focus") : null
                    },
                    trapFocus: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (m.is.element(e)) {
                            var n = m.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
                                i = n[0],
                                a = n[n.length - 1],
                                s = function(e) {
                                    if ("Tab" === e.key && 9 === e.keyCode) {
                                        var t = m.getFocusElement();
                                        t !== a || e.shiftKey ? t === i && e.shiftKey && (a.focus(), e.preventDefault()) : (i.focus(), e.preventDefault())
                                    }
                                };
                            t ? m.on(this.elements.container, "keydown", s, !1) : m.off(this.elements.container, "keydown", s, !1)
                        }
                    },
                    toggleListener: function(e, t, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        if (!m.is.empty(e) && !m.is.empty(t) && m.is.function(n))
                            if (m.is.nodeList(e) || m.is.array(e)) Array.from(e).forEach(function(e) {
                                e instanceof Node && m.toggleListener.call(null, e, t, n, i, a, s)
                            });
                            else {
                                var o = t.split(" "),
                                    r = s;
                                g.passiveListeners && (r = {
                                    passive: a,
                                    capture: s
                                }), o.forEach(function(t) {
                                    e[i ? "addEventListener" : "removeEventListener"](t, n, r)
                                })
                            }
                    },
                    on: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments[2],
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        m.toggleListener(e, t, n, !0, i, a)
                    },
                    off: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments[2],
                            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        m.toggleListener(e, t, n, !1, i, a)
                    },
                    dispatchEvent: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        if (m.is.element(e) && !m.is.empty(t)) {
                            var a = new CustomEvent(t, {
                                bubbles: n,
                                detail: Object.assign({}, i, {
                                    plyr: m.is.plyr(this) ? this : null
                                })
                            });
                            e.dispatchEvent(a)
                        }
                    },
                    toggleState: function(e, t) {
                        if (m.is.array(e) || m.is.nodeList(e)) Array.from(e).forEach(function(e) {
                            return m.toggleState(e, t)
                        });
                        else if (m.is.element(e)) {
                            var n = "true" === e.getAttribute("aria-pressed"),
                                i = m.is.boolean(t) ? t : !n;
                            e.setAttribute("aria-pressed", i)
                        }
                    },
                    format: function(e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        return m.is.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function(e, t) {
                            return m.is.string(n[t]) ? n[t] : ""
                        })
                    },
                    getPercentage: function(e, t) {
                        return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
                    },
                    getHours: function(e) {
                        return parseInt(e / 60 / 60 % 60, 10)
                    },
                    getMinutes: function(e) {
                        return parseInt(e / 60 % 60, 10)
                    },
                    getSeconds: function(e) {
                        return parseInt(e % 60, 10)
                    },
                    formatTime: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (!m.is.number(e)) return this.formatTime(null, t, n);
                        var i = function(e) {
                                return ("0" + e).slice(-2)
                            },
                            a = this.getHours(e),
                            s = this.getMinutes(e),
                            o = this.getSeconds(e);
                        return t || a > 0 ? a += ":" : a = "", (n ? "-" : "") + a + i(s) + ":" + i(o)
                    },
                    replaceAll: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), n.toString())
                    },
                    toTitleCase: function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(e) {
                            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                        })
                    },
                    toPascalCase: function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                        return e = m.replaceAll(e, "-", " "), e = m.replaceAll(e, "_", " "), e = m.toTitleCase(e), m.replaceAll(e, " ", "")
                    },
                    toCamelCase: function() {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                        return (e = m.toPascalCase(e)).charAt(0).toLowerCase() + e.slice(1)
                    },
                    extend: function() {
                        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        if (!n.length) return e;
                        var a = n.shift();
                        return m.is.object(a) ? (Object.keys(a).forEach(function(t) {
                            m.is.object(a[t]) ? (Object.keys(e).includes(t) || Object.assign(e, p({}, t, {})), m.extend(e[t], a[t])) : Object.assign(e, p({}, t, a[t]))
                        }), m.extend.apply(m, [e].concat(function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }(n)))) : e
                    },
                    dedupe: function(e) {
                        return m.is.array(e) ? e.filter(function(t, n) {
                            return e.indexOf(t) === n
                        }) : e
                    },
                    closest: function(e, t) {
                        return m.is.array(e) && e.length ? e.reduce(function(e, n) {
                            return Math.abs(n - t) < Math.abs(e - t) ? n : e
                        }) : null
                    },
                    getProviderByUrl: function(e) {
                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? c.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? c.vimeo : null
                    },
                    parseYouTubeId: function(e) {
                        return m.is.empty(e) ? null : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e
                    },
                    parseVimeoId: function(e) {
                        return m.is.empty(e) ? null : m.is.number(Number(e)) ? e : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e
                    },
                    parseUrl: function(e) {
                        var t = document.createElement("a");
                        return t.href = e, t
                    },
                    getUrlParams: function(e) {
                        var t = e;
                        return (e.startsWith("http://") || e.startsWith("https://")) && (t = this.parseUrl(e).search), this.is.empty(t) ? null : t.slice(t.indexOf("?") + 1).split("&").reduce(function(e, t) {
                            var n = t.split("="),
                                i = f(n, 2),
                                a = i[0],
                                s = i[1];
                            return Object.assign(e, p({}, a, decodeURIComponent(s)))
                        }, {})
                    },
                    buildUrlParams: function(e) {
                        return m.is.object(e) ? Object.keys(e).map(function(t) {
                            return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                        }).join("&") : ""
                    },
                    stripHTML: function(e) {
                        var t = document.createDocumentFragment(),
                            n = document.createElement("div");
                        return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                    },
                    getAspectRatio: function(e, t) {
                        var n = function e(t, n) {
                            return 0 === n ? t : e(n, t % n)
                        }(e, t);
                        return e / n + ":" + t / n
                    },
                    get transitionEndEvent() {
                        var e = document.createElement("span"),
                            t = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            },
                            n = Object.keys(t).find(function(t) {
                                return void 0 !== e.style[t]
                            });
                        return !!m.is.string(n) && t[n]
                    },
                    repaint: function(e) {
                        setTimeout(function() {
                            m.toggleHidden(e, !0), e.offsetHeight, m.toggleHidden(e, !1)
                        }, 0)
                    }
                },
                g = {
                    audio: "canPlayType" in document.createElement("audio"),
                    video: "canPlayType" in document.createElement("video"),
                    check: function(e, t, n) {
                        var i = !1,
                            a = !1,
                            s = m.getBrowser(),
                            o = s.isIPhone && n && g.playsinline;
                        switch (t + ":" + e) {
                            case "html5:video":
                                a = (i = g.video) && g.rangeInput && (!s.isIPhone || o);
                                break;
                            case "html5:audio":
                                a = (i = g.audio) && g.rangeInput;
                                break;
                            case "youtube:video":
                            case "vimeo:video":
                                i = !0, a = g.rangeInput && (!s.isIPhone || o);
                                break;
                            default:
                                a = (i = g.audio && g.video) && g.rangeInput
                        }
                        return {
                            api: i,
                            ui: a
                        }
                    },
                    pip: !m.getBrowser().isIPhone && m.is.function(m.createElement("video").webkitSetPresentationMode),
                    airplay: m.is.function(window.WebKitPlaybackTargetAvailabilityEvent),
                    playsinline: "playsInline" in document.createElement("video"),
                    mime: function(e) {
                        var t = this.media;
                        try {
                            if (!this.isHTML5 || !m.is.function(t.canPlayType)) return !1;
                            if (e.includes("codecs=")) return t.canPlayType(e).replace(/no/, "");
                            if (this.isVideo) switch (e) {
                                case "video/webm":
                                    return t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "");
                                case "video/mp4":
                                    return t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "");
                                case "video/ogg":
                                    return t.canPlayType('video/ogg; codecs="theora"').replace(/no/, "");
                                default:
                                    return !1
                            } else if (this.isAudio) switch (e) {
                                case "audio/mpeg":
                                    return t.canPlayType("audio/mpeg;").replace(/no/, "");
                                case "audio/ogg":
                                    return t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "");
                                case "audio/wav":
                                    return t.canPlayType('audio/wav; codecs="1"').replace(/no/, "");
                                default:
                                    return !1
                            }
                        } catch (e) {
                            return !1
                        }
                        return !1
                    },
                    textTracks: "textTracks" in document.createElement("video"),
                    passiveListeners: function() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    return e = !0, null
                                }
                            });
                            window.addEventListener("test", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    rangeInput: (r = document.createElement("input"), r.type = "range", "range" === r.type),
                    touch: "ontouchstart" in document.documentElement,
                    transitions: !1 !== m.transitionEndEvent,
                    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
                },
                y = {
                    getSources: function() {
                        return this.isHTML5 ? this.media.querySelectorAll("source") : null
                    },
                    getQualityOptions: function() {
                        if (!this.isHTML5) return null;
                        var e = y.getSources.call(this);
                        if (m.is.empty(e)) return null;
                        var t = Array.from(e).filter(function(e) {
                            return !m.is.empty(e.getAttribute("size"))
                        });
                        return m.is.empty(t) ? null : m.dedupe(t.map(function(e) {
                            return Number(e.getAttribute("size"))
                        }))
                    },
                    extend: function() {
                        if (this.isHTML5) {
                            var e = this;
                            Object.defineProperty(e.media, "quality", {
                                get: function() {
                                    var t = y.getSources.call(e);
                                    if (m.is.empty(t)) return null;
                                    var n = Array.from(t).filter(function(t) {
                                        return t.getAttribute("src") === e.source
                                    });
                                    return m.is.empty(n) ? null : Number(n[0].getAttribute("size"))
                                },
                                set: function(t) {
                                    var n = y.getSources.call(e);
                                    if (!m.is.empty(n)) {
                                        var i = Array.from(n).filter(function(e) {
                                            return Number(e.getAttribute("size")) === t
                                        });
                                        if (!m.is.empty(i)) {
                                            var a = i.filter(function(t) {
                                                return g.mime.call(e, t.getAttribute("type"))
                                            });
                                            if (!m.is.empty(a)) {
                                                m.dispatchEvent.call(e, e.media, "qualityrequested", !1, {
                                                    quality: t
                                                });
                                                var s = e.currentTime,
                                                    o = e.playing;
                                                e.media.src = a[0].getAttribute("src"), e.media.load(), o && e.play(), e.currentTime = s, m.dispatchEvent.call(e, e.media, "qualitychange", !1, {
                                                    quality: t
                                                })
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    },
                    cancelRequests: function() {
                        this.isHTML5 && (m.removeElement(y.getSources()), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
                    }
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (m.is.empty(e) || m.is.empty(t) || !Object.keys(t.i18n).includes(e)) return "";
                    var n = t.i18n[e],
                        i = {
                            "{seektime}": t.seekTime,
                            "{title}": t.title
                        };
                    return Object.entries(i).forEach(function(e) {
                        var t = f(e, 2),
                            i = t[0],
                            a = t[1];
                        n = m.replaceAll(n, i, a)
                    }), n
                },
                b = m.getBrowser(),
                w = {
                    addStyleHook: function() {
                        m.toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), !0), m.toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
                    },
                    toggleNativeControls: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
                    },
                    build: function() {
                        var e = this;
                        if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void w.toggleNativeControls.call(this, !0);
                        m.is.element(this.elements.controls) || (k.inject.call(this), this.listeners.controls()), w.toggleNativeControls.call(this), E.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, w.updateVolume.call(this), w.timeUpdate.call(this), w.checkPlaying.call(this), m.toggleClass(this.elements.container, this.config.classNames.pip.supported, g.pip && this.isHTML5 && this.isVideo), m.toggleClass(this.elements.container, this.config.classNames.airplay.supported, g.airplay && this.isHTML5), m.toggleClass(this.elements.container, this.config.classNames.isIos, b.isIos), m.toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function() {
                            m.dispatchEvent.call(e, e.media, "ready")
                        }, 0), w.setTitle.call(this), w.setPoster.call(this)
                    },
                    setTitle: function() {
                        var e = v("play", this.config);
                        if (m.is.string(this.config.title) && !m.is.empty(this.config.title) && (e += ", " + this.config.title, this.elements.container.setAttribute("aria-label", this.config.title)), m.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function(t) {
                            t.setAttribute("aria-label", e)
                        }), this.isEmbed) {
                            var t = m.getElement.call(this, "iframe");
                            if (!m.is.element(t)) return;
                            var n = m.is.empty(this.config.title) ? "video" : this.config.title,
                                i = v("frameTitle", this.config);
                            t.setAttribute("title", i.replace("{title}", n))
                        }
                    },
                    setPoster: function() {
                        if (m.is.element(this.elements.poster) && !m.is.empty(this.poster)) {
                            var e = this.poster.split(",");
                            this.elements.poster.style.backgroundImage = e.map(function(e) {
                                return "url('" + e + "')"
                            }).join(",")
                        }
                    },
                    checkPlaying: function(e) {
                        m.toggleClass(this.elements.container, this.config.classNames.playing, this.playing), m.toggleClass(this.elements.container, this.config.classNames.paused, this.paused), m.toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped), m.toggleState(this.elements.buttons.play, this.playing), m.is.event(e) && "timeupdate" === e.type || this.toggleControls(!this.playing)
                    },
                    checkLoading: function(e) {
                        var t = this;
                        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
                            m.toggleClass(t.elements.container, t.config.classNames.loading, t.loading), t.toggleControls(t.loading)
                        }, this.loading ? 250 : 0)
                    },
                    checkFailed: function() {
                        var e = this;
                        this.failed = 3 === this.media.networkState, this.failed && (m.toggleClass(this.elements.container, this.config.classNames.loading, !1), m.toggleClass(this.elements.container, this.config.classNames.error, !0)), clearTimeout(this.timers.failed), this.timers.loading = setTimeout(function() {
                            m.toggleClass(e.elements.container, e.config.classNames.loading, e.loading), e.toggleControls(e.loading)
                        }, this.loading ? 250 : 0)
                    },
                    updateVolume: function() {
                        this.supported.ui && (m.is.element(this.elements.inputs.volume) && w.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), m.is.element(this.elements.buttons.mute) && m.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume))
                    },
                    setRange: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        m.is.element(e) && (e.value = t, k.updateRangeFill.call(this, e))
                    },
                    setProgress: function(e, t) {
                        var n = m.is.number(t) ? t : 0,
                            i = m.is.element(e) ? e : this.elements.display.buffer;
                        if (m.is.element(i)) {
                            i.value = n;
                            var a = i.getElementsByTagName("span")[0];
                            m.is.element(a) && (a.childNodes[0].nodeValue = n)
                        }
                    },
                    updateProgress: function(e) {
                        if (this.supported.ui && m.is.event(e)) {
                            var t = 0;
                            if (e) switch (e.type) {
                                case "timeupdate":
                                case "seeking":
                                    t = m.getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && w.setRange.call(this, this.elements.inputs.seek, t);
                                    break;
                                case "playing":
                                case "progress":
                                    w.setProgress.call(this, this.elements.display.buffer, 100 * this.buffered)
                            }
                        }
                    },
                    updateTimeDisplay: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (m.is.element(e) && m.is.number(t)) {
                            var i = m.getHours(this.duration) > 0;
                            e.textContent = m.formatTime(t, i, n)
                        }
                    },
                    timeUpdate: function(e) {
                        var t = !m.is.element(this.elements.display.duration) && this.config.invertTime;
                        w.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || w.updateProgress.call(this, e)
                    },
                    durationUpdate: function() {
                        if (this.supported.ui) {
                            var e = m.is.element(this.elements.display.duration);
                            !e && this.config.displayDuration && this.paused && w.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && w.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), k.updateSeekTooltip.call(this)
                        }
                    }
                },
                x = m.getBrowser(),
                k = {
                    updateRangeFill: function(e) {
                        var t = m.is.event(e) ? e.target : e;
                        m.is.element(t) && "range" === t.getAttribute("type") && (t.setAttribute("aria-valuenow", t.value), x.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%"))
                    },
                    getIconUrl: function() {
                        var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || x.isIE && !window.svg4everybody;
                        return {
                            url: this.config.iconUrl,
                            cors: e
                        }
                    },
                    findElements: function() {
                        try {
                            return this.elements.controls = m.getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                                play: m.getElements.call(this, this.config.selectors.buttons.play),
                                pause: m.getElement.call(this, this.config.selectors.buttons.pause),
                                restart: m.getElement.call(this, this.config.selectors.buttons.restart),
                                rewind: m.getElement.call(this, this.config.selectors.buttons.rewind),
                                fastForward: m.getElement.call(this, this.config.selectors.buttons.fastForward),
                                mute: m.getElement.call(this, this.config.selectors.buttons.mute),
                                pip: m.getElement.call(this, this.config.selectors.buttons.pip),
                                airplay: m.getElement.call(this, this.config.selectors.buttons.airplay),
                                settings: m.getElement.call(this, this.config.selectors.buttons.settings),
                                captions: m.getElement.call(this, this.config.selectors.buttons.captions),
                                fullscreen: m.getElement.call(this, this.config.selectors.buttons.fullscreen)
                            }, this.elements.progress = m.getElement.call(this, this.config.selectors.progress), this.elements.inputs = {
                                seek: m.getElement.call(this, this.config.selectors.inputs.seek),
                                volume: m.getElement.call(this, this.config.selectors.inputs.volume)
                            }, this.elements.display = {
                                buffer: m.getElement.call(this, this.config.selectors.display.buffer),
                                currentTime: m.getElement.call(this, this.config.selectors.display.currentTime),
                                duration: m.getElement.call(this, this.config.selectors.display.duration)
                            }, m.is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
                        } catch (e) {
                            return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                        }
                    },
                    createIcon: function(e, t) {
                        var n = k.getIconUrl.call(this),
                            i = (n.cors ? "" : n.url) + "#" + this.config.iconPrefix,
                            a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        m.setAttributes(a, m.extend(t, {
                            role: "presentation",
                            focusable: "false"
                        }));
                        var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                            o = i + "-" + e;
                        return "href" in s ? s.setAttributeNS("http://www.w3.org/1999/xlink", "href", o) : s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(s), a
                    },
                    createLabel: function(e, t) {
                        var n = v(e, this.config),
                            i = Object.assign({}, t);
                        switch (e) {
                            case "pip":
                                n = "PIP";
                                break;
                            case "airplay":
                                n = "AirPlay"
                        }
                        return "class" in i ? i.class += " " + this.config.classNames.hidden : i.class = this.config.classNames.hidden, m.createElement("span", i, n)
                    },
                    createBadge: function(e) {
                        if (m.is.empty(e)) return null;
                        var t = m.createElement("span", {
                            class: this.config.classNames.menu.value
                        });
                        return t.appendChild(m.createElement("span", {
                            class: this.config.classNames.menu.badge
                        }, e)), t
                    },
                    createButton: function(e, t) {
                        var n = m.createElement("button"),
                            i = Object.assign({}, t),
                            a = m.toCamelCase(e),
                            s = !1,
                            o = void 0,
                            r = void 0,
                            l = void 0,
                            c = void 0;
                        switch ("type" in i || (i.type = "button"), "class" in i ? i.class.includes(this.config.classNames.control) && (i.class += " " + this.config.classNames.control) : i.class = this.config.classNames.control, e) {
                            case "play":
                                s = !0, o = "play", l = "pause", r = "play", c = "pause";
                                break;
                            case "mute":
                                s = !0, o = "mute", l = "unmute", r = "volume", c = "muted";
                                break;
                            case "captions":
                                s = !0, o = "enableCaptions", l = "disableCaptions", r = "captions-off", c = "captions-on";
                                break;
                            case "fullscreen":
                                s = !0, o = "enterFullscreen", l = "exitFullscreen", r = "enter-fullscreen", c = "exit-fullscreen";
                                break;
                            case "play-large":
                                i.class += " " + this.config.classNames.control + "--overlaid", a = "play", o = "play", r = "play";
                                break;
                            default:
                                o = a, r = e
                        }
                        return s ? (n.appendChild(k.createIcon.call(this, c, {
                            class: "icon--pressed"
                        })), n.appendChild(k.createIcon.call(this, r, {
                            class: "icon--not-pressed"
                        })), n.appendChild(k.createLabel.call(this, l, {
                            class: "label--pressed"
                        })), n.appendChild(k.createLabel.call(this, o, {
                            class: "label--not-pressed"
                        })), i["aria-pressed"] = !1) : (n.appendChild(k.createIcon.call(this, r)), n.appendChild(k.createLabel.call(this, o))), m.extend(i, m.getAttributesFromSelector(this.config.selectors.buttons[a], i)), m.setAttributes(n, i), "play" === a ? (m.is.array(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(n)) : this.elements.buttons[a] = n, n
                    },
                    createRange: function(e, t) {
                        var n = m.createElement("label", {
                                for: t.id,
                                id: t.id + "-label",
                                class: this.config.classNames.hidden
                            }, v(e, this.config)),
                            i = m.createElement("input", m.extend(m.getAttributesFromSelector(this.config.selectors.inputs[e]), {
                                type: "range",
                                min: 0,
                                max: 100,
                                step: .01,
                                value: 0,
                                autocomplete: "off",
                                role: "slider",
                                "aria-labelledby": t.id + "-label",
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": 0
                            }, t));
                        return this.elements.inputs[e] = i, k.updateRangeFill.call(this, i), {
                            label: n,
                            input: i
                        }
                    },
                    createProgress: function(e, t) {
                        var n = m.createElement("progress", m.extend(m.getAttributesFromSelector(this.config.selectors.display[e]), {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: "presentation",
                            "aria-hidden": !0
                        }, t));
                        if ("volume" !== e) {
                            n.appendChild(m.createElement("span", null, "0"));
                            var i = "";
                            switch (e) {
                                case "played":
                                    i = v("played", this.config);
                                    break;
                                case "buffer":
                                    i = v("buffered", this.config)
                            }
                            n.textContent = "% " + i.toLowerCase()
                        }
                        return this.elements.display[e] = n, n
                    },
                    createTime: function(e) {
                        var t = m.getAttributesFromSelector(this.config.selectors.display[e]),
                            n = m.createElement("div", m.extend(t, {
                                class: "plyr__time " + t.class,
                                "aria-label": v(e, this.config)
                            }), "00:00");
                        return this.elements.display[e] = n, n
                    },
                    createMenuItem: function(e, t, n, i) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                            o = m.createElement("li"),
                            r = m.createElement("label", {
                                class: this.config.classNames.control
                            }),
                            l = m.createElement("input", m.extend(m.getAttributesFromSelector(this.config.selectors.inputs[n]), {
                                type: "radio",
                                name: "plyr-" + n,
                                value: e,
                                checked: s,
                                class: "plyr__sr-only"
                            })),
                            c = m.createElement("span", {
                                hidden: ""
                            });
                        r.appendChild(l), r.appendChild(c), r.insertAdjacentHTML("beforeend", i), m.is.element(a) && r.appendChild(a), o.appendChild(r), t.appendChild(o)
                    },
                    updateSeekTooltip: function(e) {
                        var t = this;
                        if (this.config.tooltips.seek && m.is.element(this.elements.inputs.seek) && m.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
                            var n = 0,
                                i = this.elements.inputs.seek.getBoundingClientRect(),
                                a = this.config.classNames.tooltip + "--visible",
                                s = function(e) {
                                    m.toggleClass(t.elements.display.seekTooltip, a, e)
                                };
                            if (this.touch) s(!1);
                            else {
                                if (m.is.event(e)) n = 100 / i.width * (e.pageX - i.left);
                                else {
                                    if (!m.hasClass(this.elements.display.seekTooltip, a)) return;
                                    n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                                }
                                n < 0 ? n = 0 : n > 100 && (n = 100), w.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = n + "%", m.is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && s("mouseenter" === e.type)
                            }
                        }
                    },
                    toggleTab: function(e, t) {
                        m.toggleHidden(this.elements.settings.tabs[e], !t)
                    },
                    setQualityMenu: function(e) {
                        var t = this;
                        if (m.is.element(this.elements.settings.panes.quality)) {
                            var n = this.elements.settings.panes.quality.querySelector("ul");
                            m.is.array(e) && (this.options.quality = e.filter(function(e) {
                                return t.config.quality.options.includes(e)
                            }));
                            var i = !m.is.empty(this.options.quality) && this.options.quality.length > 1;
                            k.toggleTab.call(this, "quality", i), k.checkMenu.call(this), i && (m.emptyElement(n), this.options.quality.sort(function(e, n) {
                                var i = t.config.quality.options;
                                return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                            }).forEach(function(e) {
                                var i = k.getLabel.call(t, "quality", e);
                                k.createMenuItem.call(t, e, n, "quality", i, function(e) {
                                    var n = "";
                                    switch (e) {
                                        case 2160:
                                            n = "4K";
                                            break;
                                        case 1440:
                                        case 1080:
                                        case 720:
                                            n = "HD";
                                            break;
                                        case 576:
                                        case 480:
                                            n = "SD"
                                    }
                                    return n.length ? k.createBadge.call(t, n) : null
                                }(e))
                            }), k.updateSetting.call(this, "quality", n))
                        }
                    },
                    getLabel: function(e, t) {
                        switch (e) {
                            case "speed":
                                return 1 === t ? v("normal", this.config) : t + "&times;";
                            case "quality":
                                return m.is.number(t) ? t + "p" : m.toTitleCase(t);
                            case "captions":
                                return E.getLabel.call(this);
                            default:
                                return null
                        }
                    },
                    updateSetting: function(e, t, n) {
                        var i = this.elements.settings.panes[e],
                            a = null,
                            s = t;
                        switch (e) {
                            case "captions":
                                a = this.captions.active ? this.options.captions.length > 2 || !this.options.captions.some(function(e) {
                                    return "enabled" === e
                                }) ? this.captions.language : "enabled" : "";
                                break;
                            default:
                                if (a = m.is.empty(n) ? this[e] : n, m.is.empty(a) && (a = this.config[e].default), !m.is.empty(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '" + a + "' for " + e);
                                if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '" + a + "' for " + e)
                        }
                        if (m.is.element(s) || (s = i && i.querySelector("ul")), m.is.element(s)) {
                            this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = k.getLabel.call(this, e, a);
                            var o = s && s.querySelector('input[value="' + a + '"]');
                            m.is.element(o) && (o.checked = !0)
                        }
                    },
                    setCaptionsMenu: function() {
                        var e = this,
                            t = this.elements.settings.panes.captions.querySelector("ul"),
                            n = E.getTracks.call(this).length;
                        if (k.toggleTab.call(this, "captions", n), m.emptyElement(t), k.checkMenu.call(this), n) {
                            var i = E.getTracks.call(this).map(function(t) {
                                return {
                                    language: m.is.empty(t.language) ? "enabled" : t.language,
                                    label: E.getLabel.call(e, t)
                                }
                            });
                            i.unshift({
                                language: "",
                                label: v("disabled", this.config)
                            }), i.forEach(function(n) {
                                k.createMenuItem.call(e, n.language, t, "language", n.label, "enabled" !== n.language ? k.createBadge.call(e, n.language.toUpperCase()) : null, n.language.toLowerCase() === e.captions.language.toLowerCase())
                            }), this.options.captions = i.map(function(e) {
                                return e.language
                            }), k.updateSetting.call(this, "captions", t)
                        }
                    },
                    setSpeedMenu: function(e) {
                        var t = this;
                        if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && m.is.element(this.elements.settings.panes.speed)) {
                            m.is.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function(e) {
                                return t.config.speed.options.includes(e)
                            });
                            var n = !m.is.empty(this.options.speed) && this.options.speed.length > 1;
                            if (k.toggleTab.call(this, "speed", n), k.checkMenu.call(this), n) {
                                var i = this.elements.settings.panes.speed.querySelector("ul");
                                m.emptyElement(i), this.options.speed.forEach(function(e) {
                                    var n = k.getLabel.call(t, "speed", e);
                                    k.createMenuItem.call(t, e, i, "speed", n)
                                }), k.updateSetting.call(this, "speed", i)
                            }
                        }
                    },
                    checkMenu: function() {
                        var e = this.elements.settings.tabs,
                            t = !m.is.empty(e) && Object.values(e).some(function(e) {
                                return !e.hidden
                            });
                        m.toggleHidden(this.elements.settings.menu, !t)
                    },
                    toggleMenu: function(e) {
                        var t = this.elements.settings.form,
                            n = this.elements.buttons.settings;
                        if (m.is.element(t) && m.is.element(n)) {
                            var i = m.is.boolean(e) ? e : m.is.element(t) && t.hasAttribute("hidden");
                            if (m.is.event(e)) {
                                var a = m.is.element(t) && t.contains(e.target),
                                    s = e.target === this.elements.buttons.settings;
                                if (a || !a && !s && i) return;
                                s && e.stopPropagation()
                            }
                            m.is.element(n) && n.setAttribute("aria-expanded", i), m.is.element(t) && (m.toggleHidden(t, !i), m.toggleClass(this.elements.container, this.config.classNames.menu.open, i), i ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1))
                        }
                    },
                    getTabSize: function(e) {
                        var t = e.cloneNode(!0);
                        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function(e) {
                            var t = e.getAttribute("name");
                            e.setAttribute("name", t + "-clone")
                        }), e.parentNode.appendChild(t);
                        var n = t.scrollWidth,
                            i = t.scrollHeight;
                        return m.removeElement(t), {
                            width: n,
                            height: i
                        }
                    },
                    showTab: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = this.elements.settings.menu,
                            n = document.getElementById(e);
                        if (m.is.element(n) && "tabpanel" === n.getAttribute("role")) {
                            var i = t.querySelector('[role="tabpanel"]:not([hidden])'),
                                a = i.parentNode;
                            if (Array.from(t.querySelectorAll('[aria-controls="' + i.getAttribute("id") + '"]')).forEach(function(e) {
                                e.setAttribute("aria-expanded", !1)
                            }), g.transitions && !g.reducedMotion) {
                                a.style.width = i.scrollWidth + "px", a.style.height = i.scrollHeight + "px";
                                var s = k.getTabSize.call(this, n);
                                m.on(a, m.transitionEndEvent, function e(t) {
                                    t.target === a && ["width", "height"].includes(t.propertyName) && (a.style.width = "", a.style.height = "", m.off(a, m.transitionEndEvent, e))
                                }), a.style.width = s.width + "px", a.style.height = s.height + "px"
                            }
                            m.toggleHidden(i, !0), i.setAttribute("tabindex", -1), m.toggleHidden(n, !1);
                            var o = m.getElements.call(this, '[aria-controls="' + e + '"]');
                            Array.from(o).forEach(function(e) {
                                e.setAttribute("aria-expanded", !0)
                            }), n.removeAttribute("tabindex"), n.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus()
                        }
                    },
                    create: function(e) {
                        var t = this;
                        if (m.is.empty(this.config.controls)) return null;
                        var n = m.createElement("div", m.getAttributesFromSelector(this.config.selectors.controls.wrapper));
                        if (this.config.controls.includes("restart") && n.appendChild(k.createButton.call(this, "restart")), this.config.controls.includes("rewind") && n.appendChild(k.createButton.call(this, "rewind")), this.config.controls.includes("play") && n.appendChild(k.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && n.appendChild(k.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
                            var i = m.createElement("div", m.getAttributesFromSelector(this.config.selectors.progress)),
                                a = k.createRange.call(this, "seek", {
                                    id: "plyr-seek-" + e.id
                                });
                            if (i.appendChild(a.label), i.appendChild(a.input), i.appendChild(k.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
                                var s = m.createElement("span", {
                                    role: "tooltip",
                                    class: this.config.classNames.tooltip
                                }, "00:00");
                                i.appendChild(s), this.elements.display.seekTooltip = s
                            }
                            this.elements.progress = i, n.appendChild(this.elements.progress)
                        }
                        if (this.config.controls.includes("current-time") && n.appendChild(k.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && n.appendChild(k.createTime.call(this, "duration")), this.config.controls.includes("mute") && n.appendChild(k.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
                            var o = m.createElement("div", {
                                    class: "plyr__volume"
                                }),
                                r = {
                                    max: 1,
                                    step: .05,
                                    value: this.config.volume
                                },
                                l = k.createRange.call(this, "volume", m.extend(r, {
                                    id: "plyr-volume-" + e.id
                                }));
                            o.appendChild(l.label), o.appendChild(l.input), this.elements.volume = o, n.appendChild(o)
                        }
                        if (this.config.controls.includes("captions") && n.appendChild(k.createButton.call(this, "captions")), this.config.controls.includes("settings") && !m.is.empty(this.config.settings)) {
                            var c = m.createElement("div", {
                                class: "plyr__menu",
                                hidden: ""
                            });
                            c.appendChild(k.createButton.call(this, "settings", {
                                id: "plyr-settings-toggle-" + e.id,
                                "aria-haspopup": !0,
                                "aria-controls": "plyr-settings-" + e.id,
                                "aria-expanded": !1
                            }));
                            var u = m.createElement("form", {
                                    class: "plyr__menu__container",
                                    id: "plyr-settings-" + e.id,
                                    hidden: "",
                                    "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                                    role: "tablist",
                                    tabindex: -1
                                }),
                                d = m.createElement("div"),
                                h = m.createElement("div", {
                                    id: "plyr-settings-" + e.id + "-home",
                                    "aria-labelled-by": "plyr-settings-toggle-" + e.id,
                                    role: "tabpanel"
                                }),
                                p = m.createElement("ul", {
                                    role: "tablist"
                                });
                            this.config.settings.forEach(function(n) {
                                var i = m.createElement("li", {
                                        role: "tab",
                                        hidden: ""
                                    }),
                                    a = m.createElement("button", m.extend(m.getAttributesFromSelector(t.config.selectors.buttons.settings), {
                                        type: "button",
                                        class: t.config.classNames.control + " " + t.config.classNames.control + "--forward",
                                        id: "plyr-settings-" + e.id + "-" + n + "-tab",
                                        "aria-haspopup": !0,
                                        "aria-controls": "plyr-settings-" + e.id + "-" + n,
                                        "aria-expanded": !1
                                    }), v(n, t.config)),
                                    s = m.createElement("span", {
                                        class: t.config.classNames.menu.value
                                    });
                                s.innerHTML = e[n], a.appendChild(s), i.appendChild(a), p.appendChild(i), t.elements.settings.tabs[n] = i
                            }), h.appendChild(p), d.appendChild(h), this.config.settings.forEach(function(n) {
                                var i = m.createElement("div", {
                                        id: "plyr-settings-" + e.id + "-" + n,
                                        hidden: "",
                                        "aria-labelled-by": "plyr-settings-" + e.id + "-" + n + "-tab",
                                        role: "tabpanel",
                                        tabindex: -1
                                    }),
                                    a = m.createElement("button", {
                                        type: "button",
                                        class: t.config.classNames.control + " " + t.config.classNames.control + "--back",
                                        "aria-haspopup": !0,
                                        "aria-controls": "plyr-settings-" + e.id + "-home",
                                        "aria-expanded": !1
                                    }, v(n, t.config));
                                i.appendChild(a);
                                var s = m.createElement("ul");
                                i.appendChild(s), d.appendChild(i), t.elements.settings.panes[n] = i
                            }), u.appendChild(d), c.appendChild(u), n.appendChild(c), this.elements.settings.form = u, this.elements.settings.menu = c
                        }
                        return this.config.controls.includes("pip") && g.pip && n.appendChild(k.createButton.call(this, "pip")), this.config.controls.includes("airplay") && g.airplay && n.appendChild(k.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && n.appendChild(k.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(k.createButton.call(this, "play-large")), this.elements.controls = n, this.isHTML5 && k.setQualityMenu.call(this, y.getQualityOptions.call(this)), k.setSpeedMenu.call(this), n
                    },
                    inject: function() {
                        var e = this;
                        if (this.config.loadSprite) {
                            var t = k.getIconUrl.call(this);
                            t.cors && m.loadSprite(t.url, "sprite-plyr")
                        }
                        this.id = Math.floor(1e4 * Math.random());
                        var n = null;
                        this.elements.controls = null;
                        var i = {
                                id: this.id,
                                seektime: this.config.seekTime,
                                title: this.config.title
                            },
                            a = !0;
                        m.is.string(this.config.controls) || m.is.element(this.config.controls) ? n = this.config.controls : m.is.function(this.config.controls) ? n = this.config.controls.call(this, i) : (n = k.create.call(this, {
                            id: this.id,
                            seektime: this.config.seekTime,
                            speed: this.speed,
                            quality: this.quality,
                            captions: E.getLabel.call(this)
                        }), a = !1);
                        var s = function(e) {
                            var t = e;
                            return Object.entries(i).forEach(function(e) {
                                var n = f(e, 2),
                                    i = n[0],
                                    a = n[1];
                                t = m.replaceAll(t, "{" + i + "}", a)
                            }), t
                        };
                        a && (m.is.string(this.config.controls) ? n = s(n) : m.is.element(n) && (n.innerHTML = s(n.innerHTML)));
                        var o = void 0;
                        if (m.is.string(this.config.selectors.controls.container) && (o = document.querySelector(this.config.selectors.controls.container)), m.is.element(o) || (o = this.elements.container), m.is.element(n) ? o.appendChild(n) : n && o.insertAdjacentHTML("beforeend", n), m.is.element(this.elements.controls) || k.findElements.call(this), window.navigator.userAgent.includes("Edge") && m.repaint(o), this.config.tooltips.controls) {
                            var r = m.getElements.call(this, [this.config.selectors.controls.wrapper, " ", this.config.selectors.labels, " .", this.config.classNames.hidden].join(""));
                            Array.from(r).forEach(function(t) {
                                m.toggleClass(t, e.config.classNames.hidden, !1), m.toggleClass(t, e.config.classNames.tooltip, !0), t.setAttribute("role", "tooltip")
                            })
                        }
                    }
                },
                E = {
                    setup: function() {
                        if (this.supported.ui) {
                            var e = this.storage.get("language");
                            if (m.is.empty(e) || (this.captions.language = e), m.is.empty(this.captions.language) && (this.captions.language = this.config.captions.language.toLowerCase()), !m.is.boolean(this.captions.active)) {
                                var t = this.storage.get("captions");
                                m.is.boolean(t) ? this.captions.active = t : this.captions.active = this.config.captions.active
                            }
                            if (!this.isVideo || this.isYouTube || this.isHTML5 && !g.textTracks) m.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && k.setCaptionsMenu.call(this);
                            else {
                                m.is.element(this.elements.captions) || (this.elements.captions = m.createElement("div", m.getAttributesFromSelector(this.config.selectors.captions)), m.insertAfter(this.elements.captions, this.elements.wrapper)), m.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !m.is.empty(E.getTracks.call(this)));
                                var n = E.getTracks.call(this);
                                if (!m.is.empty(n)) {
                                    if (m.getBrowser().isIE && window.URL) {
                                        var i = this.media.querySelectorAll("track");
                                        Array.from(i).forEach(function(e) {
                                            var t = e.getAttribute("src"),
                                                n = m.parseUrl(t);
                                            n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && m.fetch(t, "blob").then(function(t) {
                                                e.setAttribute("src", window.URL.createObjectURL(t))
                                            }).catch(function() {
                                                m.removeElement(e)
                                            })
                                        })
                                    }
                                    E.setLanguage.call(this), E.show.call(this), m.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && k.setCaptionsMenu.call(this)
                                }
                            }
                        }
                    },
                    setLanguage: function() {
                        var e = this;
                        if (this.isHTML5 && this.isVideo) {
                            E.getTracks.call(this).forEach(function(t) {
                                m.on(t, "cuechange", function(t) {
                                    return E.setCue.call(e, t)
                                }), t.mode = "hidden"
                            });
                            var t = E.getCurrentTrack.call(this);
                            m.is.track(t) && Array.from(t.activeCues || []).length && E.setCue.call(this, t)
                        } else this.isVimeo && this.captions.active && this.embed.enableTextTrack(this.language)
                    },
                    getTracks: function() {
                        return m.is.nullOrUndefined(this.media) ? [] : Array.from(this.media.textTracks || []).filter(function(e) {
                            return ["captions", "subtitles"].includes(e.kind)
                        })
                    },
                    getCurrentTrack: function() {
                        var e = this,
                            t = E.getTracks.call(this);
                        if (!t.length) return null;
                        var n = t.find(function(t) {
                            return t.language.toLowerCase() === e.language
                        });
                        return n || (n = m.getElement.call(this, "track[default]")), n || (n = f(t, 1)[0]), n
                    },
                    getLabel: function(e) {
                        var t = e;
                        return !m.is.track(t) && g.textTracks && this.captions.active && (t = E.getCurrentTrack.call(this)), m.is.track(t) ? m.is.empty(t.label) ? m.is.empty(t.language) ? v("enabled", this.config) : e.language.toUpperCase() : t.label : v("disabled", this.config)
                    },
                    setCue: function(e) {
                        var t = m.is.event(e) ? e.target : e,
                            n = t.activeCues,
                            i = n.length && n[0];
                        t === E.getCurrentTrack.call(this) && (m.is.cue(i) ? E.setText.call(this, i.getCueAsHTML()) : E.setText.call(this, null), m.dispatchEvent.call(this, this.media, "cuechange"))
                    },
                    setText: function(e) {
                        if (this.supported.ui)
                            if (m.is.element(this.elements.captions)) {
                                var t = m.createElement("span");
                                m.emptyElement(this.elements.captions);
                                var n = m.is.nullOrUndefined(e) ? "" : e;
                                m.is.string(n) ? t.textContent = n.trim() : t.appendChild(n), this.elements.captions.appendChild(t)
                            } else this.debug.warn("No captions element to render to")
                    },
                    show: function() {
                        var e = this.storage.get("captions");
                        m.is.boolean(e) ? this.captions.active = e : e = this.config.captions.active, e && (m.toggleClass(this.elements.container, this.config.classNames.captions.active, !0), m.toggleState(this.elements.buttons.captions, !0))
                    }
                },
                C = function() {},
                P = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        d(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
                    }
                    return h(e, [{
                        key: "log",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.log, console) : C
                        }
                    }, {
                        key: "warn",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.warn, console) : C
                        }
                    }, {
                        key: "error",
                        get: function() {
                            return this.enabled ? Function.prototype.bind.call(console.error, console) : C
                        }
                    }]), e
                }(),
                T = {
                    enabled: !0,
                    title: "",
                    debug: !1,
                    autoplay: !1,
                    autopause: !0,
                    seekTime: 10,
                    volume: 1,
                    muted: !1,
                    duration: null,
                    displayDuration: !0,
                    invertTime: !0,
                    toggleInvert: !0,
                    ratio: "16:9",
                    clickToPlay: !0,
                    hideControls: !0,
                    resetOnEnd: !1,
                    disableContextMenu: !0,
                    loadSprite: !0,
                    iconPrefix: "plyr",
                    iconUrl: "https://cdn.plyr.io/3.3.6/plyr.svg",
                    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                    quality: {
                        default: 576,
                        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, "default"]
                    },
                    loop: {
                        active: !1
                    },
                    speed: {
                        selected: 1,
                        options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
                    },
                    keyboard: {
                        focused: !0,
                        global: !1
                    },
                    tooltips: {
                        controls: !1,
                        seek: !0
                    },
                    captions: {
                        active: !1,
                        language: (navigator.language || navigator.userLanguage).split("-")[0]
                    },
                    fullscreen: {
                        enabled: !0,
                        fallback: !0,
                        iosNative: !1
                    },
                    storage: {
                        enabled: !0,
                        key: "plyr"
                    },
                    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                    settings: ["captions", "quality", "speed"],
                    i18n: {
                        restart: "Restart",
                        rewind: "Rewind {seektime}s",
                        play: "Play",
                        pause: "Pause",
                        fastForward: "Forward {seektime}s",
                        seek: "Seek",
                        played: "Played",
                        buffered: "Buffered",
                        currentTime: "Current time",
                        duration: "Duration",
                        volume: "Volume",
                        mute: "Mute",
                        unmute: "Unmute",
                        enableCaptions: "Enable captions",
                        disableCaptions: "Disable captions",
                        enterFullscreen: "Enter fullscreen",
                        exitFullscreen: "Exit fullscreen",
                        frameTitle: "Player for {title}",
                        captions: "Captions",
                        settings: "Settings",
                        speed: "Speed",
                        normal: "Normal",
                        quality: "Quality",
                        loop: "Loop",
                        start: "Start",
                        end: "End",
                        all: "All",
                        reset: "Reset",
                        disabled: "Disabled",
                        enabled: "Enabled",
                        advertisement: "Ad"
                    },
                    urls: {
                        vimeo: {
                            sdk: "https://player.vimeo.com/api/player.js",
                            iframe: "https://player.vimeo.com/video/{0}?{1}",
                            api: "https://vimeo.com/api/v2/video/{0}.json"
                        },
                        youtube: {
                            sdk: "https://www.youtube.com/iframe_api",
                            api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet",
                            poster: "https://img.youtube.com/vi/{0}/maxresdefault.jpg,https://img.youtube.com/vi/{0}/hqdefault.jpg"
                        },
                        googleIMA: {
                            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                        }
                    },
                    listeners: {
                        seek: null,
                        play: null,
                        pause: null,
                        restart: null,
                        rewind: null,
                        fastForward: null,
                        mute: null,
                        volume: null,
                        captions: null,
                        fullscreen: null,
                        pip: null,
                        airplay: null,
                        speed: null,
                        quality: null,
                        loop: null,
                        language: null
                    },
                    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                    selectors: {
                        editable: "input, textarea, select, [contenteditable]",
                        container: ".plyr",
                        controls: {
                            container: null,
                            wrapper: ".plyr__controls"
                        },
                        labels: "[data-plyr]",
                        buttons: {
                            play: '[data-plyr="play"]',
                            pause: '[data-plyr="pause"]',
                            restart: '[data-plyr="restart"]',
                            rewind: '[data-plyr="rewind"]',
                            fastForward: '[data-plyr="fast-forward"]',
                            mute: '[data-plyr="mute"]',
                            captions: '[data-plyr="captions"]',
                            fullscreen: '[data-plyr="fullscreen"]',
                            pip: '[data-plyr="pip"]',
                            airplay: '[data-plyr="airplay"]',
                            settings: '[data-plyr="settings"]',
                            loop: '[data-plyr="loop"]'
                        },
                        inputs: {
                            seek: '[data-plyr="seek"]',
                            volume: '[data-plyr="volume"]',
                            speed: '[data-plyr="speed"]',
                            language: '[data-plyr="language"]',
                            quality: '[data-plyr="quality"]'
                        },
                        display: {
                            currentTime: ".plyr__time--current",
                            duration: ".plyr__time--duration",
                            buffer: ".plyr__progress--buffer",
                            played: ".plyr__progress--played",
                            loop: ".plyr__progress--loop",
                            volume: ".plyr__volume--display"
                        },
                        progress: ".plyr__progress",
                        captions: ".plyr__captions",
                        menu: {
                            quality: ".js-plyr__menu__list--quality"
                        }
                    },
                    classNames: {
                        type: "plyr--{0}",
                        provider: "plyr--{0}",
                        video: "plyr__video-wrapper",
                        embed: "plyr__video-embed",
                        embedContainer: "plyr__video-embed__container",
                        poster: "plyr__poster",
                        ads: "plyr__ads",
                        control: "plyr__control",
                        playing: "plyr--playing",
                        paused: "plyr--paused",
                        stopped: "plyr--stopped",
                        loading: "plyr--loading",
                        error: "plyr--has-error",
                        hover: "plyr--hover",
                        tooltip: "plyr__tooltip",
                        cues: "plyr__cues",
                        hidden: "plyr__sr-only",
                        hideControls: "plyr--hide-controls",
                        isIos: "plyr--is-ios",
                        isTouch: "plyr--is-touch",
                        uiSupported: "plyr--full-ui",
                        noTransition: "plyr--no-transition",
                        menu: {
                            value: "plyr__menu__value",
                            badge: "plyr__badge",
                            open: "plyr--menu-open"
                        },
                        captions: {
                            enabled: "plyr--captions-enabled",
                            active: "plyr--captions-active"
                        },
                        fullscreen: {
                            enabled: "plyr--fullscreen-enabled",
                            fallback: "plyr--fullscreen-fallback"
                        },
                        pip: {
                            supported: "plyr--pip-supported",
                            active: "plyr--pip-active"
                        },
                        airplay: {
                            supported: "plyr--airplay-supported",
                            active: "plyr--airplay-active"
                        },
                        tabFocus: "plyr__tab-focus"
                    },
                    attributes: {
                        embed: {
                            provider: "data-plyr-provider",
                            id: "data-plyr-embed-id"
                        }
                    },
                    keys: {
                        google: null
                    },
                    ads: {
                        enabled: !1,
                        publisherId: ""
                    }
                },
                S = m.getBrowser(),
                A = function() {
                    function t(n) {
                        var i = this;
                        d(this, t), this.player = n, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
                            x: 0,
                            y: 0
                        }, m.on(document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function() {
                            e.call(i)
                        }), m.on(this.player.elements.container, "dblclick", function(e) {
                            m.is.element(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle()
                        }), this.update()
                    }
                    return h(t, [{
                        key: "update",
                        value: function() {
                            this.enabled ? this.player.debug.log((t.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), m.toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                        }
                    }, {
                        key: "enter",
                        value: function() {
                            this.enabled && (S.isIos && this.player.config.fullscreen.iosNative ? this.player.playing && this.target.webkitEnterFullscreen() : t.native ? this.prefix ? m.is.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : a.call(this, !0))
                        }
                    }, {
                        key: "exit",
                        value: function() {
                            if (this.enabled)
                                if (S.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
                                else if (t.native)
                                    if (this.prefix) {
                                        if (!m.is.empty(this.prefix)) {
                                            var e = "moz" === this.prefix ? "Cancel" : "Exit";
                                            document["" + this.prefix + e + this.property]()
                                        }
                                    } else(document.cancelFullScreen || document.exitFullscreen).call(document);
                                else a.call(this, !1)
                        }
                    }, {
                        key: "toggle",
                        value: function() {
                            this.active ? this.exit() : this.enter()
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return (t.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                        }
                    }, {
                        key: "active",
                        get: function() {
                            return !!this.enabled && (t.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : m.hasClass(this.target, this.player.config.classNames.fullscreen.fallback))
                        }
                    }, {
                        key: "target",
                        get: function() {
                            return S.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
                        }
                    }], [{
                        key: "native",
                        get: function() {
                            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                        }
                    }, {
                        key: "prefix",
                        get: function() {
                            if (m.is.function(document.exitFullscreen)) return "";
                            var e = "";
                            return ["webkit", "moz", "ms"].some(function(t) {
                                return !(!m.is.function(document[t + "ExitFullscreen"]) && !m.is.function(document[t + "CancelFullScreen"]) || (e = t, 0))
                            }), e
                        }
                    }, {
                        key: "property",
                        get: function() {
                            return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                        }
                    }]), t
                }(),
                _ = m.getBrowser(),
                M = function() {
                    function e(t) {
                        d(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this)
                    }
                    return h(e, [{
                        key: "handleKey",
                        value: function(e) {
                            var t = this,
                                n = e.keyCode ? e.keyCode : e.which,
                                i = "keydown" === e.type,
                                a = i && n === this.lastKey;
                            if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && m.is.number(n))
                                if (i) {
                                    var s = m.getFocusElement();
                                    if (m.is.element(s) && m.matches(s, this.player.config.selectors.editable)) return;
                                    switch ([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                                        case 48:
                                        case 49:
                                        case 50:
                                        case 51:
                                        case 52:
                                        case 53:
                                        case 54:
                                        case 55:
                                        case 56:
                                        case 57:
                                            a || (t.player.currentTime = t.player.duration / 10 * (n - 48));
                                            break;
                                        case 32:
                                        case 75:
                                            a || this.player.togglePlay();
                                            break;
                                        case 38:
                                            this.player.increaseVolume(.1);
                                            break;
                                        case 40:
                                            this.player.decreaseVolume(.1);
                                            break;
                                        case 77:
                                            a || (this.player.muted = !this.player.muted);
                                            break;
                                        case 39:
                                            this.player.forward();
                                            break;
                                        case 37:
                                            this.player.rewind();
                                            break;
                                        case 70:
                                            this.player.fullscreen.toggle();
                                            break;
                                        case 67:
                                            a || this.player.toggleCaptions();
                                            break;
                                        case 76:
                                            this.player.loop = !this.player.loop
                                    }!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === n && this.player.fullscreen.toggle(), this.lastKey = n
                                } else this.lastKey = null
                        }
                    }, {
                        key: "toggleMenu",
                        value: function(e) {
                            k.toggleMenu.call(this.player, e)
                        }
                    }, {
                        key: "firstTouch",
                        value: function() {
                            this.player.touch = !0, m.toggleClass(this.player.elements.container, this.player.config.classNames.isTouch, !0), m.off(document.body, "touchstart", this.firstTouch)
                        }
                    }, {
                        key: "global",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            this.player.config.keyboard.global && m.toggleListener(window, "keydown keyup", this.handleKey, e, !1), m.toggleListener(document.body, "click", this.toggleMenu, e), m.on(document.body, "touchstart", this.firstTouch)
                        }
                    }, {
                        key: "container",
                        value: function() {
                            var e = this;
                            !this.player.config.keyboard.global && this.player.config.keyboard.focused && m.on(this.player.elements.container, "keydown keyup", this.handleKey, !1), m.on(this.player.elements.container, "focusout", function(t) {
                                m.toggleClass(t.target, e.player.config.classNames.tabFocus, !1)
                            }), m.on(this.player.elements.container, "keydown", function(t) {
                                9 === t.keyCode && setTimeout(function() {
                                    m.toggleClass(m.getFocusElement(), e.player.config.classNames.tabFocus, !0)
                                }, 0)
                            }), this.player.config.hideControls && m.on(this.player.elements.container, "mouseenter mouseleave mousemove touchstart touchend touchmove enterfullscreen exitfullscreen", function(t) {
                                e.player.toggleControls(t)
                            })
                        }
                    }, {
                        key: "media",
                        value: function() {
                            var e = this;
                            if (m.on(this.player.media, "timeupdate seeking", function(t) {
                                return w.timeUpdate.call(e.player, t)
                            }), m.on(this.player.media, "durationchange loadeddata loadedmetadata", function(t) {
                                return w.durationUpdate.call(e.player, t)
                            }), m.on(this.player.media, "loadeddata", function() {
                                m.toggleHidden(e.player.elements.volume, !e.player.hasAudio), m.toggleHidden(e.player.elements.buttons.mute, !e.player.hasAudio)
                            }), m.on(this.player.media, "ended", function() {
                                e.player.isHTML5 && e.player.isVideo && e.player.config.resetOnEnd && e.player.restart()
                            }), m.on(this.player.media, "progress playing", function(t) {
                                return w.updateProgress.call(e.player, t)
                            }), m.on(this.player.media, "volumechange", function(t) {
                                return w.updateVolume.call(e.player, t)
                            }), m.on(this.player.media, "playing play pause ended emptied timeupdate", function(t) {
                                return w.checkPlaying.call(e.player, t)
                            }), m.on(this.player.media, "waiting canplay seeked playing", function(t) {
                                return w.checkLoading.call(e.player, t)
                            }), m.on(this.player.media, "playing", function() {
                                e.player.ads && e.player.ads.enabled && !e.player.ads.initialized && e.player.ads.managerPromise.then(function() {
                                    return e.player.ads.play()
                                }).catch(function() {
                                    return e.player.play()
                                })
                            }), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
                                var t = m.getElement.call(this.player, "." + this.player.config.classNames.video);
                                if (!m.is.element(t)) return;
                                m.on(t, "click", function() {
                                    e.player.config.hideControls && e.player.touch && !e.player.paused || (e.player.paused ? e.player.play() : e.player.ended ? (e.player.restart(), e.player.play()) : e.player.pause())
                                })
                            }
                            this.player.supported.ui && this.player.config.disableContextMenu && m.on(this.player.elements.wrapper, "contextmenu", function(e) {
                                e.preventDefault()
                            }, !1), m.on(this.player.media, "volumechange", function() {
                                e.player.storage.set({
                                    volume: e.player.volume,
                                    muted: e.player.muted
                                })
                            }), m.on(this.player.media, "ratechange", function() {
                                k.updateSetting.call(e.player, "speed"), e.player.storage.set({
                                    speed: e.player.speed
                                })
                            }), m.on(this.player.media, "qualityrequested", function(t) {
                                e.player.storage.set({
                                    quality: t.detail.quality
                                })
                            }), m.on(this.player.media, "qualitychange", function(t) {
                                k.updateSetting.call(e.player, "quality", null, t.detail.quality)
                            }), m.on(this.player.media, "languagechange", function() {
                                k.updateSetting.call(e.player, "captions"), e.player.storage.set({
                                    language: e.player.language
                                })
                            }), m.on(this.player.media, "captionsenabled captionsdisabled", function() {
                                k.updateSetting.call(e.player, "captions"), e.player.storage.set({
                                    captions: e.player.captions.active
                                })
                            }), m.on(this.player.media, this.player.config.events.concat(["keyup", "keydown"]).join(" "), function(t) {
                                var n = {};
                                "error" === t.type && (n = e.player.media.error), m.dispatchEvent.call(e.player, e.player.elements.container, t.type, !0, n)
                            })
                        }
                    }, {
                        key: "controls",
                        value: function() {
                            var e = this,
                                t = _.isIE ? "change" : "input",
                                n = function(t, n, i) {
                                    var a = e.player.config.listeners[i],
                                        s = !0;
                                    m.is.function(a) && (s = a.call(e.player, t)), s && m.is.function(n) && n.call(e.player, t)
                                },
                                i = function(t, i, a, s) {
                                    var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                                        r = e.player.config.listeners[s],
                                        l = m.is.function(r);
                                    m.on(t, i, function(e) {
                                        return n(e, a, s)
                                    }, o && !l)
                                };
                            i(this.player.elements.buttons.play, "click", this.player.togglePlay, "play"), i(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), i(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), i(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), i(this.player.elements.buttons.mute, "click", function() {
                                e.player.muted = !e.player.muted
                            }, "mute"), i(this.player.elements.buttons.captions, "click", this.player.toggleCaptions), i(this.player.elements.buttons.fullscreen, "click", function() {
                                e.player.fullscreen.toggle()
                            }, "fullscreen"), i(this.player.elements.buttons.pip, "click", function() {
                                e.player.pip = "toggle"
                            }, "pip"), i(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), i(this.player.elements.buttons.settings, "click", function(t) {
                                k.toggleMenu.call(e.player, t)
                            }), i(this.player.elements.settings.form, "click", function(t) {
                                t.stopPropagation();
                                var i = function() {
                                    var t = "plyr-settings-" + e.player.id + "-home";
                                    k.showTab.call(e.player, t)
                                };
                                if (m.matches(t.target, e.player.config.selectors.inputs.language)) n(t, function() {
                                    e.player.language = t.target.value, i()
                                }, "language");
                                else if (m.matches(t.target, e.player.config.selectors.inputs.quality)) n(t, function() {
                                    e.player.quality = t.target.value, i()
                                }, "quality");
                                else if (m.matches(t.target, e.player.config.selectors.inputs.speed)) n(t, function() {
                                    e.player.speed = parseFloat(t.target.value), i()
                                }, "speed");
                                else {
                                    var a = t.target;
                                    k.showTab.call(e.player, a.getAttribute("aria-controls"))
                                }
                            }), i(this.player.elements.inputs.seek, t, function(t) {
                                e.player.currentTime = t.target.value / t.target.max * e.player.duration
                            }, "seek"), this.player.config.toggleInvert && !m.is.element(this.player.elements.display.duration) && i(this.player.elements.display.currentTime, "click", function() {
                                0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, w.timeUpdate.call(e.player))
                            }), i(this.player.elements.inputs.volume, t, function(t) {
                                e.player.volume = t.target.value
                            }, "volume"), _.isWebkit && i(m.getElements.call(this.player, 'input[type="range"]'), "input", function(t) {
                                k.updateRangeFill.call(e.player, t.target)
                            }), i(this.player.elements.progress, "mouseenter mouseleave mousemove", function(t) {
                                return k.updateSeekTooltip.call(e.player, t)
                            }), this.player.config.hideControls && (i(this.player.elements.controls, "mouseenter mouseleave", function(t) {
                                e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type
                            }), i(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function(t) {
                                e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
                            }), i(this.player.elements.controls, "focusin focusout", function(t) {
                                e.player.toggleControls(t)
                            })), i(this.player.elements.inputs.volume, "wheel", function(t) {
                                var n = t.webkitDirectionInvertedFromDevice,
                                    i = 0;
                                (t.deltaY < 0 || t.deltaX > 0) && (n ? (e.player.decreaseVolume(.02), i = -1) : (e.player.increaseVolume(.02), i = 1)), (t.deltaY > 0 || t.deltaX < 0) && (n ? (e.player.increaseVolume(.02), i = 1) : (e.player.decreaseVolume(.02), i = -1)), (1 === i && e.player.media.volume < 1 || -1 === i && e.player.media.volume > 0) && t.preventDefault()
                            }, "volume", !1)
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.global(!1)
                        }
                    }]), e
                }(),
                L = {
                    setup: function() {
                        var e = this;
                        m.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), L.setAspectRatio.call(this), m.is.object(window.Vimeo) ? L.ready.call(this) : m.loadScript(this.config.urls.vimeo.sdk).then(function() {
                            L.ready.call(e)
                        }).catch(function(t) {
                            e.debug.warn("Vimeo API failed to load", t)
                        })
                    },
                    setAspectRatio: function(e) {
                        var t = m.is.string(e) ? e.split(":") : this.config.ratio.split(":"),
                            n = 100 / t[0] * t[1];
                        if (this.elements.wrapper.style.paddingBottom = n + "%", this.supported.ui) {
                            var i = (240 - n) / 4.8;
                            this.media.style.transform = "translateY(-" + i + "%)"
                        }
                    },
                    ready: function() {
                        var e = this,
                            t = this,
                            n = {
                                loop: t.config.loop.active,
                                autoplay: t.autoplay,
                                byline: !1,
                                portrait: !1,
                                title: !1,
                                speed: !0,
                                transparent: 0,
                                gesture: "media",
                                playsinline: !this.config.fullscreen.iosNative
                            },
                            i = m.buildUrlParams(n),
                            a = t.media.getAttribute("src");
                        m.is.empty(a) && (a = t.media.getAttribute(t.config.attributes.embed.id));
                        var s = m.parseVimeoId(a),
                            o = m.createElement("iframe"),
                            r = m.format(t.config.urls.vimeo.iframe, s, i);
                        o.setAttribute("src", r), o.setAttribute("allowfullscreen", ""), o.setAttribute("allowtransparency", ""), o.setAttribute("allow", "autoplay");
                        var l = m.createElement("div", {
                            class: t.config.classNames.embedContainer
                        });
                        l.appendChild(o), t.media = m.replaceElement(l, t.media), m.fetch(m.format(t.config.urls.vimeo.api, s), "json").then(function(e) {
                            if (!m.is.empty(e)) {
                                var n = new URL(e[0].thumbnail_large);
                                n.pathname = n.pathname.split("_")[0] + ".jpg", t.media.setAttribute("poster", n.href), w.setPoster.call(t)
                            }
                        }), t.embed = new window.Vimeo.Player(o, {
                            autopause: t.config.autopause,
                            muted: t.muted
                        }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                            t.embed.play().then(function() {
                                t.media.paused = !1
                            })
                        }, t.media.pause = function() {
                            t.embed.pause().then(function() {
                                t.media.paused = !0
                            })
                        }, t.media.stop = function() {
                            t.pause(), t.currentTime = 0
                        };
                        var c = t.media.currentTime;
                        Object.defineProperty(t.media, "currentTime", {
                            get: function() {
                                return c
                            },
                            set: function(e) {
                                var n = t.media.paused;
                                t.media.seeking = !0, m.dispatchEvent.call(t, t.media, "seeking"), t.embed.setCurrentTime(e).catch(function() {}), n && t.pause()
                            }
                        });
                        var u = t.config.speed.selected;
                        Object.defineProperty(t.media, "playbackRate", {
                            get: function() {
                                return u
                            },
                            set: function(e) {
                                t.embed.setPlaybackRate(e).then(function() {
                                    u = e, m.dispatchEvent.call(t, t.media, "ratechange")
                                }).catch(function(e) {
                                    "Error" === e.name && k.setSpeedMenu.call(t, [])
                                })
                            }
                        });
                        var d = t.config.volume;
                        Object.defineProperty(t.media, "volume", {
                            get: function() {
                                return d
                            },
                            set: function(e) {
                                t.embed.setVolume(e).then(function() {
                                    d = e, m.dispatchEvent.call(t, t.media, "volumechange")
                                })
                            }
                        });
                        var h = t.config.muted;
                        Object.defineProperty(t.media, "muted", {
                            get: function() {
                                return h
                            },
                            set: function(e) {
                                var n = !!m.is.boolean(e) && e;
                                t.embed.setVolume(n ? 0 : t.config.volume).then(function() {
                                    h = n, m.dispatchEvent.call(t, t.media, "volumechange")
                                })
                            }
                        });
                        var p = t.config.loop;
                        Object.defineProperty(t.media, "loop", {
                            get: function() {
                                return p
                            },
                            set: function(e) {
                                var n = m.is.boolean(e) ? e : t.config.loop.active;
                                t.embed.setLoop(n).then(function() {
                                    p = n
                                })
                            }
                        });
                        var f = void 0;
                        t.embed.getVideoUrl().then(function(e) {
                            f = e
                        }).catch(function(t) {
                            e.debug.warn(t)
                        }), Object.defineProperty(t.media, "currentSrc", {
                            get: function() {
                                return f
                            }
                        }), Object.defineProperty(t.media, "ended", {
                            get: function() {
                                return t.currentTime === t.duration
                            }
                        }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function(t) {
                            var n = m.getAspectRatio(t[0], t[1]);
                            L.setAspectRatio.call(e, n)
                        }), t.embed.setAutopause(t.config.autopause).then(function(e) {
                            t.config.autopause = e
                        }), t.embed.getVideoTitle().then(function(n) {
                            t.config.title = n, w.setTitle.call(e)
                        }), t.embed.getCurrentTime().then(function(e) {
                            c = e, m.dispatchEvent.call(t, t.media, "timeupdate")
                        }), t.embed.getDuration().then(function(e) {
                            t.media.duration = e, m.dispatchEvent.call(t, t.media, "durationchange")
                        }), t.embed.getTextTracks().then(function(e) {
                            t.media.textTracks = e, E.setup.call(t)
                        }), t.embed.on("cuechange", function(e) {
                            var n = null;
                            e.cues.length && (n = m.stripHTML(e.cues[0].text)), E.setText.call(t, n)
                        }), t.embed.on("loaded", function() {
                            m.is.element(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                        }), t.embed.on("play", function() {
                            t.media.paused && m.dispatchEvent.call(t, t.media, "play"), t.media.paused = !1, m.dispatchEvent.call(t, t.media, "playing")
                        }), t.embed.on("pause", function() {
                            t.media.paused = !0, m.dispatchEvent.call(t, t.media, "pause")
                        }), t.embed.on("timeupdate", function(e) {
                            t.media.seeking = !1, c = e.seconds, m.dispatchEvent.call(t, t.media, "timeupdate")
                        }), t.embed.on("progress", function(e) {
                            t.media.buffered = e.percent, m.dispatchEvent.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && m.dispatchEvent.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function(e) {
                                e !== t.media.duration && (t.media.duration = e, m.dispatchEvent.call(t, t.media, "durationchange"))
                            })
                        }), t.embed.on("seeked", function() {
                            t.media.seeking = !1, m.dispatchEvent.call(t, t.media, "seeked"), m.dispatchEvent.call(t, t.media, "play")
                        }), t.embed.on("ended", function() {
                            t.media.paused = !0, m.dispatchEvent.call(t, t.media, "ended")
                        }), t.embed.on("error", function(e) {
                            t.media.error = e, m.dispatchEvent.call(t, t.media, "error")
                        }), setTimeout(function() {
                            return w.build.call(t)
                        }, 0)
                    }
                },
                O = {
                    setup: function() {
                        var e = this;
                        m.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), O.setAspectRatio.call(this), m.is.object(window.YT) && m.is.function(window.YT.Player) ? O.ready.call(this) : (m.loadScript(this.config.urls.youtube.sdk).catch(function(t) {
                            e.debug.warn("YouTube API failed to load", t)
                        }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function() {
                            O.ready.call(e)
                        }), window.onYouTubeIframeAPIReady = function() {
                            window.onYouTubeReadyCallbacks.forEach(function(e) {
                                e()
                            })
                        })
                    },
                    getTitle: function(e) {
                        var t = this;
                        if (m.is.function(this.embed.getVideoData)) {
                            var n = this.embed.getVideoData().title;
                            if (m.is.empty(n)) return this.config.title = n, void w.setTitle.call(this)
                        }
                        var i = this.config.keys.google;
                        if (m.is.string(i) && !m.is.empty(i)) {
                            var a = m.format(this.config.urls.youtube.api, e, i);
                            m.fetch(a).then(function(e) {
                                m.is.object(e) && (t.config.title = e.items[0].snippet.title, w.setTitle.call(t))
                            }).catch(function() {})
                        }
                    },
                    setAspectRatio: function() {
                        var e = this.config.ratio.split(":");
                        this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%"
                    },
                    ready: function() {
                        var e = this,
                            t = e.media.getAttribute("id");
                        if (m.is.empty(t) || !t.startsWith("youtube-")) {
                            var n = e.media.getAttribute("src");
                            m.is.empty(n) && (n = e.media.getAttribute(this.config.attributes.embed.id));
                            var i = m.parseYouTubeId(n),
                                a = m.generateId(e.provider),
                                o = m.createElement("div", {
                                    id: a
                                });
                            e.media = m.replaceElement(o, e.media), e.media.setAttribute("poster", m.format(e.config.urls.youtube.poster, i)), e.embed = new window.YT.Player(a, {
                                videoId: i,
                                playerVars: {
                                    autoplay: e.config.autoplay ? 1 : 0,
                                    controls: e.supported.ui ? 0 : 1,
                                    rel: 0,
                                    showinfo: 0,
                                    iv_load_policy: 3,
                                    modestbranding: 1,
                                    disablekb: 1,
                                    playsinline: 1,
                                    widget_referrer: window ? window.location.href : null,
                                    cc_load_policy: e.captions.active ? 1 : 0,
                                    cc_lang_pref: e.config.captions.language
                                },
                                events: {
                                    onError: function(t) {
                                        if (!m.is.object(e.media.error)) {
                                            var n = {
                                                code: t.data
                                            };
                                            switch (t.data) {
                                                case 2:
                                                    n.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";
                                                    break;
                                                case 5:
                                                    n.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                                                    break;
                                                case 100:
                                                    n.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";
                                                    break;
                                                case 101:
                                                case 150:
                                                    n.message = "The owner of the requested video does not allow it to be played in embedded players.";
                                                    break;
                                                default:
                                                    n.message = "An unknown error occured"
                                            }
                                            e.media.error = n, m.dispatchEvent.call(e, e.media, "error")
                                        }
                                    },
                                    onPlaybackQualityChange: function() {
                                        m.dispatchEvent.call(e, e.media, "qualitychange", !1, {
                                            quality: e.media.quality
                                        })
                                    },
                                    onPlaybackRateChange: function(t) {
                                        var n = t.target;
                                        e.media.playbackRate = n.getPlaybackRate(), m.dispatchEvent.call(e, e.media, "ratechange")
                                    },
                                    onReady: function(t) {
                                        var n = t.target;
                                        O.getTitle.call(e, i), e.media.play = function() {
                                            n.playVideo()
                                        }, e.media.pause = function() {
                                            n.pauseVideo()
                                        }, e.media.stop = function() {
                                            n.stopVideo()
                                        }, e.media.duration = n.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                            get: function() {
                                                return Number(n.getCurrentTime())
                                            },
                                            set: function(t) {
                                                var i = e.media.paused;
                                                e.media.seeking = !0, m.dispatchEvent.call(e, e.media, "seeking"), n.seekTo(t), i && e.pause()
                                            }
                                        }), Object.defineProperty(e.media, "playbackRate", {
                                            get: function() {
                                                return n.getPlaybackRate()
                                            },
                                            set: function(e) {
                                                n.setPlaybackRate(e)
                                            }
                                        }), Object.defineProperty(e.media, "quality", {
                                            get: function() {
                                                return s(n.getPlaybackQuality())
                                            },
                                            set: function(t) {
                                                var i = t;
                                                n.setPlaybackQuality(s(i)), m.dispatchEvent.call(e, e.media, "qualityrequested", !1, {
                                                    quality: i
                                                })
                                            }
                                        });
                                        var a = e.config.volume;
                                        Object.defineProperty(e.media, "volume", {
                                            get: function() {
                                                return a
                                            },
                                            set: function(t) {
                                                a = t, n.setVolume(100 * a), m.dispatchEvent.call(e, e.media, "volumechange")
                                            }
                                        });
                                        var o = e.config.muted;
                                        Object.defineProperty(e.media, "muted", {
                                            get: function() {
                                                return o
                                            },
                                            set: function(t) {
                                                var i = m.is.boolean(t) ? t : o;
                                                o = i, n[i ? "mute" : "unMute"](), m.dispatchEvent.call(e, e.media, "volumechange")
                                            }
                                        }), Object.defineProperty(e.media, "currentSrc", {
                                            get: function() {
                                                return n.getVideoUrl()
                                            }
                                        }), Object.defineProperty(e.media, "ended", {
                                            get: function() {
                                                return e.currentTime === e.duration
                                            }
                                        }), e.options.speed = n.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), m.dispatchEvent.call(e, e.media, "timeupdate"), m.dispatchEvent.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function() {
                                            e.media.buffered = n.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && m.dispatchEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), m.dispatchEvent.call(e, e.media, "canplaythrough"))
                                        }, 200), setTimeout(function() {
                                            return w.build.call(e)
                                        }, 50)
                                    },
                                    onStateChange: function(t) {
                                        var n, i = t.target;
                                        switch (clearInterval(e.timers.playing), t.data) {
                                            case -1:
                                                m.dispatchEvent.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), m.dispatchEvent.call(e, e.media, "progress");
                                                break;
                                            case 0:
                                                e.media.paused = !0, e.media.loop ? (i.stopVideo(), i.playVideo()) : m.dispatchEvent.call(e, e.media, "ended");
                                                break;
                                            case 1:
                                                e.media.seeking && m.dispatchEvent.call(e, e.media, "seeked"), e.media.seeking = !1, e.media.paused && m.dispatchEvent.call(e, e.media, "play"), e.media.paused = !1, m.dispatchEvent.call(e, e.media, "playing"), e.timers.playing = setInterval(function() {
                                                    m.dispatchEvent.call(e, e.media, "timeupdate")
                                                }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), m.dispatchEvent.call(e, e.media, "durationchange")), k.setQualityMenu.call(e, (n = i.getAvailableQualityLevels(), m.is.empty(n) ? n : m.dedupe(n.map(function(e) {
                                                    return s(e)
                                                }))));
                                                break;
                                            case 2:
                                                e.media.paused = !0, m.dispatchEvent.call(e, e.media, "pause")
                                        }
                                        m.dispatchEvent.call(e, e.elements.container, "statechange", !1, {
                                            code: t.data
                                        })
                                    }
                                }
                            })
                        }
                    }
                },
                R = {
                    setup: function() {
                        if (this.media)
                            if (m.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), m.toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && m.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = m.createElement("div", {
                                class: this.config.classNames.video
                            }), m.wrap(this.media, this.elements.wrapper), this.elements.poster = m.createElement("div", {
                                class: this.config.classNames.poster
                            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isEmbed) switch (this.provider) {
                                case "youtube":
                                    O.setup.call(this);
                                    break;
                                case "vimeo":
                                    L.setup.call(this)
                            } else this.isHTML5 && y.extend.call(this);
                        else this.debug.warn("No media element found!")
                    }
                },
                I = function() {
                    function e(t) {
                        var n = this;
                        d(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(e, t) {
                            n.on("loaded", e), n.on("error", t)
                        }), this.load()
                    }
                    return h(e, [{
                        key: "load",
                        value: function() {
                            var e = this;
                            this.enabled && (m.is.object(window.google) && m.is.object(window.google.ima) ? this.ready() : m.loadScript(this.player.config.urls.googleIMA.sdk).then(function() {
                                e.ready()
                            }).catch(function() {
                                e.trigger("error", new Error("Google IMA SDK failed to load"))
                            }))
                        }
                    }, {
                        key: "ready",
                        value: function() {
                            var e = this;
                            this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function() {
                                e.clearSafetyTimer("onAdsManagerLoaded()")
                            }), this.listeners(), this.setupIMA()
                        }
                    }, {
                        key: "setupIMA",
                        value: function() {
                            this.elements.container = m.createElement("div", {
                                class: this.player.config.classNames.ads
                            }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
                        }
                    }, {
                        key: "requestAds",
                        value: function() {
                            var e = this,
                                t = this.player.elements.container;
                            try {
                                this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t) {
                                    return e.onAdsManagerLoaded(t)
                                }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
                                    return e.onAdError(t)
                                }, !1);
                                var n = new google.ima.AdsRequest;
                                n.adTagUrl = this.tagUrl, n.linearAdSlotWidth = t.offsetWidth, n.linearAdSlotHeight = t.offsetHeight, n.nonLinearAdSlotWidth = t.offsetWidth, n.nonLinearAdSlotHeight = t.offsetHeight, n.forceNonLinearFullSlot = !1, n.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(n)
                            } catch (e) {
                                this.onAdError(e)
                            }
                        }
                    }, {
                        key: "pollCountdown",
                        value: function() {
                            var e = this;
                            if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                            this.countdownTimer = setInterval(function() {
                                var t = m.formatTime(Math.max(e.manager.getRemainingTime(), 0)),
                                    n = v("advertisement", e.player.config) + " - " + t;
                                e.elements.container.setAttribute("data-badge-text", n)
                            }, 100)
                        }
                    }, {
                        key: "onAdsManagerLoaded",
                        value: function(e) {
                            var t = this,
                                n = new google.ima.AdsRenderingSettings;
                            n.restoreCustomPlaybackStateOnAdBreakComplete = !0, n.enablePreloading = !0, this.manager = e.getAdsManager(this.player, n), this.cuePoints = this.manager.getCuePoints(), m.is.empty(this.cuePoints) || this.cuePoints.forEach(function(e) {
                                if (0 !== e && -1 !== e && e < t.player.duration) {
                                    var n = t.player.elements.progress;
                                    if (m.is.element(n)) {
                                        var i = 100 / t.player.duration * e,
                                            a = m.createElement("span", {
                                                class: t.player.config.classNames.cues
                                            });
                                        a.style.left = i.toString() + "%", n.appendChild(a)
                                    }
                                }
                            }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                                return t.onAdError(e)
                            }), Object.keys(google.ima.AdEvent.Type).forEach(function(e) {
                                t.manager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
                                    return t.onAdEvent(e)
                                })
                            }), this.trigger("loaded")
                        }
                    }, {
                        key: "onAdEvent",
                        value: function(e) {
                            var t = this,
                                n = this.player.elements.container,
                                i = e.getAd(),
                                a = function(e) {
                                    var n = "ads" + e.replace(/_/g, "").toLowerCase();
                                    m.dispatchEvent.call(t.player, t.player.media, n)
                                };
                            switch (e.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    this.trigger("loaded"), a(e.type), this.pollCountdown(!0), i.isLinear() || (i.width = n.offsetWidth, i.height = n.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    a(e.type), this.loadAds();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    a(e.type), this.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    a(e.type), this.pollCountdown(), this.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                case google.ima.AdEvent.Type.MIDPOINT:
                                case google.ima.AdEvent.Type.COMPLETE:
                                case google.ima.AdEvent.Type.IMPRESSION:
                                case google.ima.AdEvent.Type.CLICK:
                                    a(e.type)
                            }
                        }
                    }, {
                        key: "onAdError",
                        value: function(e) {
                            this.cancel(), this.player.debug.warn("Ads error", e)
                        }
                    }, {
                        key: "listeners",
                        value: function() {
                            var e = this,
                                t = this.player.elements.container,
                                n = void 0;
                            this.player.on("ended", function() {
                                e.loader.contentComplete()
                            }), this.player.on("seeking", function() {
                                return n = e.player.currentTime
                            }), this.player.on("seeked", function() {
                                var t = e.player.currentTime;
                                m.is.empty(e.cuePoints) || e.cuePoints.forEach(function(i, a) {
                                    n < i && i < t && (e.manager.discardAdBreak(), e.cuePoints.splice(a, 1))
                                })
                            }), window.addEventListener("resize", function() {
                                e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                            })
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this,
                                t = this.player.elements.container;
                            this.managerPromise || this.resumeContent(), this.managerPromise.then(function() {
                                e.elements.displayContainer.initialize();
                                try {
                                    e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                                } catch (t) {
                                    e.onAdError(t)
                                }
                            }).catch(function() {})
                        }
                    }, {
                        key: "resumeContent",
                        value: function() {
                            this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
                        }
                    }, {
                        key: "pauseContent",
                        value: function() {
                            this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                        }
                    }, {
                        key: "loadAds",
                        value: function() {
                            var e = this;
                            this.managerPromise.then(function() {
                                e.manager && e.manager.destroy(), e.managerPromise = new Promise(function(t) {
                                    e.on("loaded", t), e.player.debug.log(e.manager)
                                }), e.requestAds()
                            }).catch(function() {})
                        }
                    }, {
                        key: "trigger",
                        value: function(e) {
                            for (var t = this, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            var s = this.events[e];
                            m.is.array(s) && s.forEach(function(e) {
                                m.is.function(e) && e.apply(t, i)
                            })
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            return m.is.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                        }
                    }, {
                        key: "startSafetyTimer",
                        value: function(e, t) {
                            var n = this;
                            this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function() {
                                n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                            }, e)
                        }
                    }, {
                        key: "clearSafetyTimer",
                        value: function(e) {
                            m.is.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return this.player.isVideo && this.player.config.ads.enabled && !m.is.empty(this.publisherId)
                        }
                    }, {
                        key: "tagUrl",
                        get: function() {
                            var e = {
                                AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                                AV_CHANNELID: "5a0458dc28a06145e4519d21",
                                AV_URL: location.hostname,
                                cb: Date.now(),
                                AV_WIDTH: 640,
                                AV_HEIGHT: 480,
                                AV_CDIM2: this.publisherId
                            };
                            return "https://go.aniview.com/api/adserver6/vast/?" + m.buildUrlParams(e)
                        }
                    }]), e
                }(),
                $ = {
                    insertElements: function(e, t) {
                        var n = this;
                        m.is.string(t) ? m.insertElement(e, this.media, {
                            src: t
                        }) : m.is.array(t) && t.forEach(function(t) {
                            m.insertElement(e, n.media, t)
                        })
                    },
                    change: function(e) {
                        var t = this;
                        m.is.object(e) && "sources" in e && e.sources.length ? (y.cancelRequests.call(this), this.destroy.call(this, function() {
                            switch (t.options.quality = [], m.removeElement(t.media), t.media = null, m.is.element(t.elements.container) && t.elements.container.removeAttribute("class"), t.type = e.type, t.provider = m.is.empty(e.sources[0].provider) ? c.html5 : e.sources[0].provider, t.supported = g.check(t.type, t.provider, t.config.playsinline), t.provider + ":" + t.type) {
                                case "html5:video":
                                    t.media = m.createElement("video");
                                    break;
                                case "html5:audio":
                                    t.media = m.createElement("audio");
                                    break;
                                case "youtube:video":
                                case "vimeo:video":
                                    t.media = m.createElement("div", {
                                        src: e.sources[0].src
                                    })
                            }
                            t.elements.container.appendChild(t.media), m.is.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), m.is.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), w.addStyleHook.call(t), t.isHTML5 && $.insertElements.call(t, "source", e.sources), t.config.title = e.title, R.setup.call(t), t.isHTML5 && ("tracks" in e && $.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && w.build.call(t), t.fullscreen.update()
                        }, !0)) : this.debug.warn("Invalid source format")
                    }
                },
                q = function() {
                    function e(t) {
                        d(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
                    }
                    return h(e, [{
                        key: "get",
                        value: function(t) {
                            if (!e.supported) return null;
                            var n = window.localStorage.getItem(this.key);
                            if (m.is.empty(n)) return null;
                            var i = JSON.parse(n);
                            return m.is.string(t) && t.length ? i[t] : i
                        }
                    }, {
                        key: "set",
                        value: function(t) {
                            if (e.supported && this.enabled && m.is.object(t)) {
                                var n = this.get();
                                m.is.empty(n) && (n = {}), m.extend(n, t), window.localStorage.setItem(this.key, JSON.stringify(n))
                            }
                        }
                    }], [{
                        key: "supported",
                        get: function() {
                            try {
                                return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
                            } catch (e) {
                                return !1
                            }
                        }
                    }]), e
                }();
            return function() {
                function e(t, a) {
                    var s = this;
                    if (d(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = g.touch, this.media = t, m.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (n && this.media instanceof i || m.is.nodeList(this.media) || m.is.array(this.media)) && (this.media = this.media[0]), this.config = m.extend({}, T, a || {}, function() {
                        try {
                            return JSON.parse(s.media.getAttribute("data-plyr-config"))
                        } catch (e) {
                            return {}
                        }
                    }()), this.elements = {
                        container: null,
                        buttons: {},
                        display: {},
                        progress: {},
                        inputs: {},
                        settings: {
                            menu: null,
                            panes: {},
                            tabs: {}
                        },
                        captions: null
                    }, this.captions = {
                        active: null,
                        currentTrack: null
                    }, this.fullscreen = {
                        active: !1
                    }, this.options = {
                        speed: [],
                        quality: [],
                        captions: []
                    }, this.debug = new P(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", g), !m.is.nullOrUndefined(this.media) && m.is.element(this.media))
                        if (this.media.plyr) this.debug.warn("Target already setup");
                        else if (this.config.enabled)
                            if (g.check().api) {
                                var o = this.media.cloneNode(!0);
                                o.autoplay = !1, this.elements.original = o;
                                var r = this.media.tagName.toLowerCase(),
                                    l = null,
                                    h = null,
                                    p = null;
                                switch (r) {
                                    case "div":
                                        if (l = this.media.querySelector("iframe"), m.is.element(l)) {
                                            if (h = l.getAttribute("src"), this.provider = m.getProviderByUrl(h), this.elements.container = this.media, this.media = l, this.elements.container.className = "", p = m.getUrlParams(h), !m.is.empty(p)) {
                                                var f = ["1", "true"];
                                                f.includes(p.autoplay) && (this.config.autoplay = !0), f.includes(p.loop) && (this.config.loop.active = !0), this.isYouTube ? this.config.playsinline = f.includes(p.playsinline) : this.config.playsinline = !0
                                            }
                                        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                        if (m.is.empty(this.provider) || !Object.keys(c).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                        this.type = u.video;
                                        break;
                                    case "video":
                                    case "audio":
                                        this.type = r, this.provider = c.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                        break;
                                    default:
                                        return void this.debug.error("Setup failed: unsupported type")
                                }
                                this.supported = g.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.listeners = new M(this), this.storage = new q(this), this.media.plyr = this, m.is.element(this.elements.container) || (this.elements.container = m.createElement("div"), m.wrap(this.media, this.elements.container)), this.elements.container.setAttribute("tabindex", 0), w.addStyleHook.call(this), R.setup.call(this), this.config.debug && m.on(this.elements.container, this.config.events.join(" "), function(e) {
                                    s.debug.log("event: " + e.type)
                                }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && w.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new A(this), this.ads = new I(this), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support")
                            } else this.debug.error("Setup failed: no support");
                        else this.debug.error("Setup failed: disabled by config");
                    else this.debug.error("Setup failed: no suitable element passed")
                }
                return h(e, [{
                    key: "play",
                    value: function() {
                        return m.is.function(this.media.play) ? this.media.play() : null
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.playing && m.is.function(this.media.pause) && this.media.pause()
                    }
                }, {
                    key: "togglePlay",
                    value: function(e) {
                        (m.is.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.isHTML5 ? (this.pause(), this.restart()) : m.is.function(this.media.stop) && this.media.stop()
                    }
                }, {
                    key: "restart",
                    value: function() {
                        this.currentTime = 0
                    }
                }, {
                    key: "rewind",
                    value: function(e) {
                        this.currentTime = this.currentTime - (m.is.number(e) ? e : this.config.seekTime)
                    }
                }, {
                    key: "forward",
                    value: function(e) {
                        this.currentTime = this.currentTime + (m.is.number(e) ? e : this.config.seekTime)
                    }
                }, {
                    key: "increaseVolume",
                    value: function(e) {
                        var t = this.media.muted ? 0 : this.volume;
                        this.volume = t + (m.is.number(e) ? e : 1)
                    }
                }, {
                    key: "decreaseVolume",
                    value: function(e) {
                        var t = this.media.muted ? 0 : this.volume;
                        this.volume = t - (m.is.number(e) ? e : 1)
                    }
                }, {
                    key: "toggleCaptions",
                    value: function(e) {
                        if (this.supported.ui) {
                            var t = m.is.boolean(e) ? e : !this.elements.container.classList.contains(this.config.classNames.captions.active);
                            this.captions.active !== t && (this.captions.active = t, m.toggleState(this.elements.buttons.captions, this.captions.active), m.toggleClass(this.elements.container, this.config.classNames.captions.active, this.captions.active), m.dispatchEvent.call(this, this.media, this.captions.active ? "captionsenabled" : "captionsdisabled"))
                        }
                    }
                }, {
                    key: "airplay",
                    value: function() {
                        g.airplay && this.media.webkitShowPlaybackTargetPicker()
                    }
                }, {
                    key: "toggleControls",
                    value: function(e) {
                        var t = this;
                        if (m.is.element(this.elements.controls) && this.supported.ui && !this.isAudio) {
                            var n = 0,
                                i = e,
                                a = !1;
                            if (m.is.boolean(e) || (m.is.event(e) ? (a = "enterfullscreen" === e.type, i = ["touchstart", "touchmove", "mouseenter", "mousemove", "focusin"].includes(e.type), ["touchmove", "touchend", "mousemove"].includes(e.type) && (n = 2e3), this.touch || "focusin" !== e.type || (n = 3e3, m.toggleClass(this.elements.controls, this.config.classNames.noTransition, !0))) : i = m.hasClass(this.elements.container, this.config.classNames.hideControls)), clearTimeout(this.timers.controls), i || this.paused || this.loading) {
                                if (m.toggleClass(this.elements.container, this.config.classNames.hideControls, !1) && m.dispatchEvent.call(this, this.media, "controlsshown"), this.paused || this.loading) return;
                                this.touch && (n = 3e3)
                            }
                            i && !this.playing || (this.timers.controls = setTimeout(function() {
                                m.is.element(t.elements.controls) && (!t.elements.controls.pressed && !t.elements.controls.hover || a) && (m.hasClass(t.elements.container, t.config.classNames.hideControls) || m.toggleClass(t.elements.controls, t.config.classNames.noTransition, !1), m.toggleClass(t.elements.container, t.config.classNames.hideControls, t.config.hideControls) && (m.dispatchEvent.call(t, t.media, "controlshidden"), t.config.controls.includes("settings") && !m.is.empty(t.config.settings) && k.toggleMenu.call(t, !1)))
                            }, n))
                        }
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        m.on(this.elements.container, e, t)
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        m.off(this.elements.container, e, t)
                    }
                }, {
                    key: "destroy",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (this.ready) {
                            var i = function() {
                                document.body.style.overflow = "", t.embed = null, n ? (Object.keys(t.elements).length && (m.removeElement(t.elements.buttons.play), m.removeElement(t.elements.captions), m.removeElement(t.elements.controls), m.removeElement(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), m.is.function(e) && e()) : (t.listeners.clear(), m.replaceElement(t.elements.original, t.elements.container), m.dispatchEvent.call(t, t.elements.original, "destroyed", !0), m.is.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function() {
                                    t.elements = null, t.media = null
                                }, 200))
                            };
                            switch (this.stop(), this.provider + ":" + this.type) {
                                case "html5:video":
                                case "html5:audio":
                                    clearTimeout(this.timers.loading), w.toggleNativeControls.call(this, !0), i();
                                    break;
                                case "youtube:video":
                                    clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && m.is.function(this.embed.destroy) && this.embed.destroy(), i();
                                    break;
                                case "vimeo:video":
                                    null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200)
                            }
                        }
                    }
                }, {
                    key: "supports",
                    value: function(e) {
                        return g.mime.call(this, e)
                    }
                }, {
                    key: "isHTML5",
                    get: function() {
                        return Boolean(this.provider === c.html5)
                    }
                }, {
                    key: "isEmbed",
                    get: function() {
                        return Boolean(this.isYouTube || this.isVimeo)
                    }
                }, {
                    key: "isYouTube",
                    get: function() {
                        return Boolean(this.provider === c.youtube)
                    }
                }, {
                    key: "isVimeo",
                    get: function() {
                        return Boolean(this.provider === c.vimeo)
                    }
                }, {
                    key: "isVideo",
                    get: function() {
                        return Boolean(this.type === u.video)
                    }
                }, {
                    key: "isAudio",
                    get: function() {
                        return Boolean(this.type === u.audio)
                    }
                }, {
                    key: "playing",
                    get: function() {
                        return Boolean(this.ready && !this.paused && !this.ended)
                    }
                }, {
                    key: "paused",
                    get: function() {
                        return Boolean(this.media.paused)
                    }
                }, {
                    key: "stopped",
                    get: function() {
                        return Boolean(this.paused && 0 === this.currentTime)
                    }
                }, {
                    key: "ended",
                    get: function() {
                        return Boolean(this.media.ended)
                    }
                }, {
                    key: "currentTime",
                    set: function(e) {
                        var t = 0;
                        m.is.number(e) && (t = e), t < 0 ? t = 0 : t > this.duration && (t = this.duration), this.media.currentTime = t, this.debug.log("Seeking to " + this.currentTime + " seconds")
                    },
                    get: function() {
                        return Number(this.media.currentTime)
                    }
                }, {
                    key: "buffered",
                    get: function() {
                        var e = this.media.buffered;
                        return m.is.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                    }
                }, {
                    key: "seeking",
                    get: function() {
                        return Boolean(this.media.seeking)
                    }
                }, {
                    key: "duration",
                    get: function() {
                        var e = parseFloat(this.config.duration),
                            t = this.media ? Number(this.media.duration) : 0;
                        return Number.isNaN(e) ? t : e
                    }
                }, {
                    key: "volume",
                    set: function(e) {
                        var t = e;
                        m.is.string(t) && (t = Number(t)), m.is.number(t) || (t = this.storage.get("volume")), m.is.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !m.is.empty(e) && this.muted && t > 0 && (this.muted = !1)
                    },
                    get: function() {
                        return Number(this.media.volume)
                    }
                }, {
                    key: "muted",
                    set: function(e) {
                        var t = e;
                        m.is.boolean(t) || (t = this.storage.get("muted")), m.is.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                    },
                    get: function() {
                        return Boolean(this.media.muted)
                    }
                }, {
                    key: "hasAudio",
                    get: function() {
                        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                    }
                }, {
                    key: "speed",
                    set: function(e) {
                        var t = null;
                        m.is.number(e) && (t = e), m.is.number(t) || (t = this.storage.get("speed")), m.is.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")")
                    },
                    get: function() {
                        return Number(this.media.playbackRate)
                    }
                }, {
                    key: "quality",
                    set: function(e) {
                        var t = null;
                        if (m.is.empty(e) || (t = Number(e)), m.is.number(t) && 0 !== t || (t = this.storage.get("quality")), m.is.number(t) || (t = this.config.quality.selected), m.is.number(t) || (t = this.config.quality.default), this.options.quality.length) {
                            if (!this.options.quality.includes(t)) {
                                var n = m.closest(this.options.quality, t);
                                this.debug.warn("Unsupported quality option: " + t + ", using " + n + " instead"), t = n
                            }
                            this.config.quality.selected = t, this.media.quality = t
                        }
                    },
                    get: function() {
                        return this.media.quality
                    }
                }, {
                    key: "loop",
                    set: function(e) {
                        var t = m.is.boolean(e) ? e : this.config.loop.active;
                        this.config.loop.active = t, this.media.loop = t
                    },
                    get: function() {
                        return Boolean(this.media.loop)
                    }
                }, {
                    key: "source",
                    set: function(e) {
                        $.change.call(this, e)
                    },
                    get: function() {
                        return this.media.currentSrc
                    }
                }, {
                    key: "poster",
                    set: function(e) {
                        this.isVideo ? m.is.string(e) && (this.media.setAttribute("poster", e), w.setPoster.call(this)) : this.debug.warn("Poster can only be set for video")
                    },
                    get: function() {
                        return this.isVideo ? this.media.getAttribute("poster") : null
                    }
                }, {
                    key: "autoplay",
                    set: function(e) {
                        var t = m.is.boolean(e) ? e : this.config.autoplay;
                        this.config.autoplay = t
                    },
                    get: function() {
                        return Boolean(this.config.autoplay)
                    }
                }, {
                    key: "language",
                    set: function(e) {
                        if (m.is.string(e))
                            if (m.is.empty(e)) this.toggleCaptions(!1);
                            else {
                                var t = e.toLowerCase();
                                this.options.captions.includes(t) ? (this.toggleCaptions(!0), "enabled" !== t && this.language !== t && (this.captions.language = t, E.setText.call(this, null), E.setLanguage.call(this), m.dispatchEvent.call(this, this.media, "languagechange"))) : this.debug.warn("Unsupported language option: " + t)
                            }
                    },
                    get: function() {
                        return this.captions.language
                    }
                }, {
                    key: "pip",
                    set: function(e) {
                        var t = "inline";
                        if (g.pip) {
                            var n = m.is.boolean(e) ? e : this.pip === t;
                            this.media.webkitSetPresentationMode(n ? "picture-in-picture" : t)
                        }
                    },
                    get: function() {
                        return g.pip ? this.media.webkitPresentationMode : null
                    }
                }], [{
                    key: "supported",
                    value: function(e, t, n) {
                        return g.check(e, t, n)
                    }
                }, {
                    key: "loadSprite",
                    value: function(e, t) {
                        return m.loadSprite(e, t)
                    }
                }, {
                    key: "setup",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = null;
                        return m.is.string(t) ? i = Array.from(document.querySelectorAll(t)) : m.is.nodeList(t) ? i = Array.from(t) : m.is.array(t) && (i = t.filter(function(e) {
                            return m.is.element(e)
                        })), m.is.empty(i) ? null : i.map(function(t) {
                            return new e(t, n)
                        })
                    }
                }]), e
            }()
        })
    }).call(t, n(3), n(0), n(0))
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        var t = {};
        return "string" != typeof e ? t : (e = e.trim().slice(1, -1)) ? t = e.split("&").reduce(function(e, t) {
            var n = t.replace(/\+/g, " ").split("="),
                i = n[0],
                a = n[1];
            return i = decodeURIComponent(i), a = void 0 === a ? null : decodeURIComponent(a), e.hasOwnProperty(i) ? Array.isArray(e[i]) ? e[i].push(a) : e[i] = [e[i], a] : e[i] = a, e
        }, {}) : t
    }
    n.d(t, "a", function() {
        return r
    });
    var a = n(0),
        s = n.n(a),
        o = window.matchMedia || function() {
            var e = window.styleMedia || window.media;
            if (!e) {
                var t = document.createElement("style"),
                    n = document.getElementsByTagName("script")[0],
                    i = null;
                t.type = "text/css", t.id = "matchmediajs-test", n && n.parentNode && n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
                    matchMedium: function(e) {
                        var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                        return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width
                    }
                }
            }
            return function(t) {
                return {
                    matches: e.matchMedium(t || "all"),
                    media: t || "all"
                }
            }
        }(),
        r = {
            queries: [],
            current: "",
            _init: function() {
                var e = this;
                s()("meta.foundation-mq").length || s()('<meta class="foundation-mq">').appendTo(document.head);
                var t, n = s()(".foundation-mq").css("font-family");
                t = i(n);
                for (var a in t) t.hasOwnProperty(a) && e.queries.push({
                    name: a,
                    value: "only screen and (min-width: " + t[a] + ")"
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function(e) {
                var t = this.get(e);
                return !!t && o(t).matches
            },
            is: function(e) {
                return e = e.trim().split(" "), e.length > 1 && "only" === e[1] ? e[0] === this._getCurrentSize() : this.atLeast(e[0])
            },
            get: function(e) {
                var t = this;
                for (var n in t.queries)
                    if (t.queries.hasOwnProperty(n)) {
                        var i = t.queries[n];
                        if (e === i.name) return i.value
                    }
                return null
            },
            _getCurrentSize: function() {
                for (var e, t = this, n = 0; n < this.queries.length; n++) {
                    var i = t.queries[n];
                    o(i.value).matches && (e = i)
                }
                return "object" == typeof e ? e.name : e
            },
            _watcher: function() {
                var e = this;
                s()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function() {
                    var t = e._getCurrentSize(),
                        n = e.current;
                    t !== n && (e.current = t, s()(window).trigger("changed.zf.mediaquery", [t, n]))
                })
            }
        }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.a = {
            init: function() {},
            finalize: function() {
                setTimeout(function() {
                    e("html").addClass("home--visible")
                }, 100)
            }
        }
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        e && (this.container = e, this.anchors = [].slice.call(e.querySelectorAll("[data-em-tabs-anchor]")), this.tabs = [].slice.call(e.querySelectorAll("[data-em-tabs-content]")), this.handleAnchorClick = this.handleAnchorClick.bind(this))
    };
    i.prototype.setup = function() {
        var e = this;
        if (this.container) {
            var t = window.location.hash.replace("#", ""),
                n = this.anchors[0];
            this.anchors.forEach(function(i) {
                i.addEventListener("click", e.handleAnchorClick), t && t === i.href.split("#")[1] && (n = i)
            }), this.select(n)
        }
    }, i.prototype.select = function(e) {
        var t = e.href.split("#")[1];
        this.anchors.forEach(function(t) {
            if (t.href !== e.href) return void t.setAttribute("data-em-tabs-anchor", "hidden");
            t.setAttribute("data-em-tabs-anchor", "visible")
        }), this.tabs.forEach(function(e) {
            if (e.id !== t) return void e.setAttribute("data-em-tabs-content", "hidden");
            e.setAttribute("data-em-tabs-content", "visible")
        })
    }, i.prototype.handleAnchorClick = function(e) {
        e.preventDefault(), this.select(e.target)
    }, t.a = i
}, function(e, t, n) {
    n(16), e.exports = n(53)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
        function(e, t) {
            var i = n(0),
                a = (n.n(i), n(17)),
                s = n(12),
                o = n(19),
                r = n(21),
                l = n(30),
                c = n(31),
                u = n(13),
                d = n(32),
                h = n(36),
                p = n(37),
                f = n(51),
                m = n(52);
            a.a.MediaQuery = s.a, a.a.addToJquery(e);
            var g = new o.a({
                common: r.a,
                home: l.a,
                singleIssue: u.a,
                aboutUs: h.a,
                singleStory: p.a,
                explore: d.a,
                contact: c.a,
                login: f.a,
                settings: m.a
            });
            t(document).ready(function() {
                e(document).foundation(), g.loadEvents()
            })
        }.call(t, n(0), n(0))
}, function(e, t, n) {
    "use strict";

    function i(e) {
        if (void 0 === Function.prototype.name) {
            var t = /function\s([^(]{1,})\(/,
                n = t.exec(e.toString());
            return n && n.length > 1 ? n[1].trim() : ""
        }
        return void 0 === e.prototype ? e.constructor.name : e.prototype.constructor.name
    }

    function a(e) {
        return "true" === e || "false" !== e && (isNaN(1 * e) ? e : parseFloat(e))
    }

    function s(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    n.d(t, "a", function() {
        return u
    });
    var o = n(0),
        r = n.n(o),
        l = n(18),
        c = n(12),
        u = {
            version: "6.4.3",
            _plugins: {},
            _uuids: [],
            plugin: function(e, t) {
                var n = t || i(e),
                    a = s(n);
                this._plugins[a] = this[n] = e
            },
            registerPlugin: function(e, t) {
                var n = t ? s(t) : i(e.constructor).toLowerCase();
                e.uuid = Object(l.a)(6, n), e.$element.attr("data-" + n) || e.$element.attr("data-" + n, e.uuid), e.$element.data("zfPlugin") || e.$element.data("zfPlugin", e), e.$element.trigger("init.zf." + n), this._uuids.push(e.uuid)
            },
            unregisterPlugin: function(e) {
                var t = s(i(e.$element.data("zfPlugin").constructor));
                this._uuids.splice(this._uuids.indexOf(e.uuid), 1), e.$element.removeAttr("data-" + t).removeData("zfPlugin").trigger("destroyed.zf." + t);
                for (var n in e) e[n] = null
            },
            reInit: function(e) {
                var t = e instanceof r.a;
                try {
                    if (t) e.each(function() {
                        r()(this).data("zfPlugin")._init()
                    });
                    else {
                        var n = typeof e,
                            i = this;
                        ({
                            object: function(e) {
                                e.forEach(function(e) {
                                    e = s(e), r()("[data-" + e + "]").foundation("_init")
                                })
                            },
                            string: function() {
                                e = s(e), r()("[data-" + e + "]").foundation("_init")
                            },
                            undefined: function() {
                                this.object(Object.keys(i._plugins))
                            }
                        })[n](e)
                    }
                } catch (e) {
                    console.error(e)
                } finally {
                    return e
                }
            },
            reflow: function(e, t) {
                void 0 === t ? t = Object.keys(this._plugins) : "string" == typeof t && (t = [t]);
                var n = this;
                r.a.each(t, function(t, i) {
                    var s = n._plugins[i];
                    r()(e).find("[data-" + i + "]").addBack("[data-" + i + "]").each(function() {
                        var e = r()(this),
                            t = {};
                        if (e.data("zfPlugin")) return void console.warn("Tried to initialize " + i + " on an element that already has a Foundation plugin.");
                        e.attr("data-options") && e.attr("data-options").split(";").forEach(function(e, n) {
                            var i = e.split(":").map(function(e) {
                                return e.trim()
                            });
                            i[0] && (t[i[0]] = a(i[1]))
                        });
                        try {
                            e.data("zfPlugin", new s(r()(this), t))
                        } catch (e) {
                            console.error(e)
                        } finally {
                            return
                        }
                    })
                })
            },
            getFnName: i,
            addToJquery: function(e) {
                var t = function(t) {
                    var n = typeof t,
                        a = e(".no-js");
                    if (a.length && a.removeClass("no-js"), "undefined" === n) c.a._init(), u.reflow(this);
                    else {
                        if ("string" !== n) throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                        var s = Array.prototype.slice.call(arguments, 1),
                            o = this.data("zfPlugin");
                        if (void 0 === o || void 0 === o[t]) throw new ReferenceError("We're sorry, '" + t + "' is not an available method for " + (o ? i(o) : "this element") + ".");
                        1 === this.length ? o[t].apply(o, s) : this.each(function(n, i) {
                            o[t].apply(e(i).data("zfPlugin"), s)
                        })
                    }
                    return this
                };
                return e.fn.foundation = t, e
            }
        };
    u.util = {
        throttle: function(e, t) {
            var n = null;
            return function() {
                var i = this,
                    a = arguments;
                null === n && (n = setTimeout(function() {
                    e.apply(i, a), n = null
                }, t))
            }
        }
    }, window.Foundation = u,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var e = ["webkit", "moz"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) {
                var n = e[t];
                window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var i = 0;
                window.requestAnimationFrame = function(e) {
                    var t = Date.now(),
                        n = Math.max(i + 16, t);
                    return setTimeout(function() {
                        e(i = n)
                    }, n - t)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = function() {},
            a = function() {
                return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
        return this.prototype && (i.prototype = this.prototype), a.prototype = new i, a
    })
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return e = e || 6, Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1) + (t ? "-" + t : "")
    }
    n.d(t, "a", function() {
        return i
    });
    var a = n(0);
    n.n(a)
}, function(e, t, n) {
    "use strict";
    var i = n(20),
        a = function(e) {
            this.routes = e
        };
    a.prototype.fire = function(e, t, n) {
        void 0 === t && (t = "init"), "" !== e && this.routes[e] && "function" == typeof this.routes[e][t] && this.routes[e][t](n)
    }, a.prototype.loadEvents = function() {
        var e = this;
        this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(i.a).forEach(function(t) {
            e.fire(t), e.fire(t, "finalize")
        }), this.fire("common", "finalize")
    }, t.a = a
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        return "" + e.charAt(0).toLowerCase() + e.replace(/[\W_]/g, "|").split("|").map(function(e) {
            return "" + e.charAt(0).toUpperCase() + e.slice(1)
        }).join("").slice(1)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(22),
        a = n(23),
        s = n(24),
        o = n(25),
        r = n(26),
        l = n(27),
        c = n(28);
    t.a = {
        init: function() {
            Object(i.a)(), new s.a(document.querySelectorAll("[data-scroll-transitions-container]")).init(), new c.a([].slice.call(document.querySelectorAll("[data-lazyload]"))).setup(), new a.a(document.querySelector(".site-footer"), document.querySelector("[data-footer-measurer]")).setup(), new l.a([].slice.call(document.querySelectorAll("[data-will-autoplay]"))).setup(), new o.a(document.querySelector("[data-em-modal]")).setup(), new r.a(document.querySelector("[data-newsletterpopup]")).setup()
        },
        finalize: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        a = n.n(i),
        s = n(2),
        o = n.n(s);
    t.a = function() {
        var e = a()("html"),
            t = a()("body"),
            n = a()(".site-header"),
            i = a()(".site__navigation-toggle"),
            s = a()(window),
            r = t.hasClass("home") || t.hasClass("single-issue"),
            l = 0;
        r && (i.addClass("site__navigation-toggle--white"), l = t.find(".issue-feature").height(), l = 0);
        var c = o()(function() {
            var e = s.scrollTop(),
                t = "small" === window.Foundation.MediaQuery.current,
                o = 0;
            r && !t ? o = s.height() - 80 : r && t ? (o = s.height() + l + 80, o = s.height() - 40) : o = 160, e > o ? n.addClass("site-header--shrink") : n.removeClass("site-header--shrink"), r && (e > o ? i.removeClass("site__navigation-toggle--white") : i.addClass("site__navigation-toggle--white")), t && s.height > a()(document).height() && (e > a()(document).height() - 1 * s.height() ? n.addClass("site-header--hidden") : n.removeClass("site-header--hidden"))
        }, 100);
        s.on("scroll", c), a()(document).on("click", ".site__navigation-toggle", function() {
            e.toggleClass("side-nav--open")
        }).on("click", ".site__overlay", function() {
            e.removeClass("side-nav--open")
        })
    }
}, function(e, t, n) {
    "use strict";
    var i = n(2),
        a = n.n(i),
        s = function(e, t) {
            e && (this.el = e, this.spacer = t, this.handleScroll = a()(this.handleScroll.bind(this), 250, {
                trailing: !0
            }))
        };
    s.prototype.setup = function() {
        this.el && (this.el.setAttribute("data-footer-hidden", "true"), window.addEventListener("scroll", this.handleScroll))
    }, s.prototype.handleScroll = function() {
        var e = window.scrollY;
        this.el.setAttribute("data-footer-hidden", e < 50)
    }, t.a = s
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var i = n(0),
            a = (n.n(i), n(1)),
            s = n.n(a),
            o = function(e) {
                this.el = e, this.scroller = s()(), this.counter = 0, this.animationDelay = 150, this.els = document.querySelectorAll("[data-scroll-transition]"), this.timer
            };
        o.prototype.init = function() {
            var t = this;
            this.els.length < 1 || this.scroller.setup({
                step: "[data-scroll-transition]",
                offset: .75,
                threshold: 5,
                once: !0
            }).onStepEnter(function(n) {
                var i = n.element;
                setTimeout(function() {
                    e(i).addClass("scroll-transition--visible")
                }, t.counter * t.animationDelay), t.counter++, clearTimeout(t.timer), t.timer = setTimeout(function() {
                    t.counter = 0
                }, 500)
            })
        }, t.a = o
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        e && (this.container = e, this.trigger = e.querySelector("[data-em-modal-trigger]"), this.content = e.querySelector("[data-em-modal-content]"), this.handleTriggerClick = this.handleTriggerClick.bind(this), this.handleContainerMouseEnter = this.handleContainerMouseEnter.bind(this), this.handleContainerMouseLeave = this.handleContainerMouseLeave.bind(this))
    };
    i.prototype.setup = function() {
        this.container && this.trigger && this.content && (this.container.addEventListener("mouseenter", this.handleContainerMouseEnter), this.container.addEventListener("mouseleave", this.handleContainerMouseLeave))
    }, i.prototype.toggle = function(e) {
        var t = this.container.getAttribute("data-em-modal"),
            n = "open" === t ? "close" : "open";
        if (e && (n = e), this.container.setAttribute("data-em-modal", n), window.Foundation && window.Foundation.MediaQuery.atLeast("medium")) {
            var i = this.trigger.getBoundingClientRect();
            this.content.style.right = window.innerWidth - i.right + i.width + "px"
        }
        window.Foundation && window.Foundation.MediaQuery.is("small only") && (this.content.style.right = "")
    }, i.prototype.handleTriggerClick = function() {
        this.toggle()
    }, i.prototype.handleContainerMouseEnter = function() {
        this.toggle("open")
    }, i.prototype.handleContainerMouseLeave = function() {
        this.toggle("close")
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        e && (this.el = e, this.overlay = e.querySelector("[data-newsletterpopup-overlay]"), this.button = e.querySelector("[data-newsletterpopup-button]"), this.delay = window.parseInt(e.getAttribute("data-newsletterpopup-delay"), 10), this.delay = 1e3 * this.delay, this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.handleTransitionEnd = this.handleTransitionEnd.bind(this))
    };
    i.prototype.setup = function() {
        this.el && window.localStorage && "shown" !== window.localStorage.getItem("em-newsletter-popup") && (this.overlay.addEventListener("click", this.hide), this.button.addEventListener("click", this.hide), window.addEventListener("keydown", this.handleKeyPress), window.setTimeout(this.show, this.delay))
    }, i.prototype.show = function() {
        this.el.setAttribute("data-newsletterpopup", "shown"), window.localStorage.setItem("em-newsletter-popup", "shown")
    }, i.prototype.hide = function() {
        "shown" === this.el.getAttribute("data-newsletterpopup") && (this.overlay.addEventListener("transitionend", this.handleTransitionEnd), this.el.setAttribute("data-newsletterpopup", "will-hide"), this.overlay.removeEventListener("click", this.hide), window.removeEventListener("keydown", this.handleKeyPress))
    }, i.prototype.handleKeyPress = function(e) {
        var t = e.key;
        "Escape" !== t && "Esc" !== t || this.hide()
    }, i.prototype.handleTransitionEnd = function() {
        this.el.setAttribute("data-newsletterpopup", "hidden"), this.overlay.removeEventListener("transitionend", this.handleTransitionEnd), this.el.parentNode && this.el.parentNode.removeChild(this.el)
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        this.els = e, this.observer = new IntersectionObserver(this.handleIntersection.bind(this))
    };
    i.prototype.setup = function() {
        var e = this;
        if (!this.els) return void(this.observer = null);
        this.els.forEach(function(t) {
            e.observer.observe(t)
        })
    }, i.prototype.handleIntersection = function(e) {
        e.forEach(function(e) {
            var t = e.intersectionRatio,
                n = e.target,
                i = n.currentTime > 0 && !n.paused,
                a = n.readyState >= 2;
            if (t > 0 && !i) return void n.play();
            a && i && (t <= 0 || t > 1) && n.pause()
        })
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = n(29),
        a = n.n(i),
        s = function(e) {
            this.els = e, this.counter = 0, this.animationDelay = 350, this.timer = null, this.handleShow = this.handleShow.bind(this), this.handleSet = this.handleSet.bind(this), this.handleEnter = this.handleEnter.bind(this)
        };
    s.prototype.setup = function() {
        !this.els || this.els.length < 1 || (this.els.forEach(function(e) {
            var t = e.closest("[data-lazyload-card]");
            e.setAttribute("data-lazyload", "will-load"), t && (t.querySelector(".card__figure").style.paddingTop = parseInt(e.getAttribute("height"), 10) / parseInt(e.getAttribute("width"), 10) * 100 + "%")
        }), this.loader = new a.a({
            threshold: 300,
            load_delay: 150,
            elements_selector: null,
            callback_enter: this.handleEnter,
            callback_load: this.handleSet
        }, this.els), this.observer = new IntersectionObserver(this.handleShow, {
            threshold: [1]
        }), window.EMLazyLoader = this.loader)
    }, s.prototype.handleSet = function(e) {
        e.setAttribute("data-lazyload", "loaded"), this.observer.observe(e)
    }, s.prototype.handleEnter = function(e) {
        var t = this;
        if (e.setAttribute("data-lazyload", "loading"), "IMG" !== e.nodeName && ("DIV" === e.nodeName && this.handleSet(e), "VIDEO" === e.nodeName)) {
            var n = e.readyState > 2,
                i = window.Foundation && window.Foundation.MediaQuery.atLeast("medium");
            if (n || !i) return void this.handleSet(e);
            e.addEventListener("loadedmetadata", function() {
                t.handleSet(e)
            }, {
                once: !0
            })
        }
    }, s.prototype.handleShow = function(e) {
        var t = this;
        e.forEach(function(e) {
            if (!(e.intersectionRatio < 0 && e.intersectionRatio > 1)) {
                var n = e.target.closest("[data-lazyload-card]");
                n && (t.counter += 1, setTimeout(function() {
                    n.setAttribute("data-lazyload-card", "show")
                }, t.counter * t.animationDelay), clearTimeout(t.timer), t.timer = setTimeout(function() {
                    t.counter = 0
                }, 500)), t.observer.unobserve(e.target)
            }
        })
    }, t.a = s
}, function(e, t, n) {
    var i, a, s = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    ! function(s, r) {
        "object" === o(t) && void 0 !== e ? e.exports = r() : (i = r, void 0 !== (a = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = a))
    }(0, function() {
        "use strict";

        function e(e) {
            return e.filter(function(e) {
                return !r(e)
            })
        }

        function t(e, t, n) {
            !n && r(e) || (v(t.callback_enter, e), ["IMG", "IFRAME", "VIDEO"].indexOf(e.tagName) > -1 && (w(e, t), g(e, t.class_loading)), d(e, t), o(e), v(t.callback_set, e))
        }
        var n = function(e) {
                var t = {
                    elements_selector: "img",
                    container: document,
                    threshold: 300,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    callback_load: null,
                    callback_error: null,
                    callback_set: null,
                    callback_enter: null
                };
                return s({}, t, e)
            },
            i = function(e, t) {
                return e.getAttribute("data-" + t)
            },
            a = function(e, t, n) {
                return e.setAttribute("data-" + t, n)
            },
            o = function(e) {
                return a(e, "was-processed", "true")
            },
            r = function(e) {
                return "true" === i(e, "was-processed")
            },
            l = function(e, t) {
                var n, i = new e(t);
                try {
                    n = new CustomEvent("LazyLoad::Initialized", {
                        detail: {
                            instance: i
                        }
                    })
                } catch (e) {
                    (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                        instance: i
                    })
                }
                window.dispatchEvent(n)
            },
            c = function(e, t, n) {
                for (var a, s = 0; a = e.children[s]; s += 1)
                    if ("SOURCE" === a.tagName) {
                        var o = i(a, n);
                        o && a.setAttribute(t, o)
                    }
            },
            u = function(e, t, n) {
                n && e.setAttribute(t, n)
            },
            d = function(e, t) {
                var n = t.data_sizes,
                    a = t.data_srcset,
                    s = t.data_src,
                    o = i(e, s);
                switch (e.tagName) {
                    case "IMG":
                        var r = e.parentNode;
                        r && "PICTURE" === r.tagName && c(r, "srcset", a);
                        var l = i(e, n);
                        u(e, "sizes", l);
                        var d = i(e, a);
                        u(e, "srcset", d), u(e, "src", o);
                        break;
                    case "IFRAME":
                        u(e, "src", o);
                        break;
                    case "VIDEO":
                        c(e, "src", s), u(e, "src", o);
                        break;
                    default:
                        o && (e.style.backgroundImage = 'url("' + o + '")')
                }
            },
            h = !("onscroll" in window) || /glebot/.test(navigator.userAgent),
            p = "undefined" != typeof window,
            f = p && "IntersectionObserver" in window,
            m = p && "classList" in document.createElement("p"),
            g = function(e, t) {
                m ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
            },
            y = function(e, t) {
                m ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
            },
            v = function(e, t) {
                e && e(t)
            },
            b = function(e, t, n) {
                e.removeEventListener("load", t), e.removeEventListener("error", n)
            },
            w = function(e, t) {
                var n = function n(a) {
                        x(a, !0, t), b(e, n, i)
                    },
                    i = function i(a) {
                        x(a, !1, t), b(e, n, i)
                    };
                e.addEventListener("load", n), e.addEventListener("error", i)
            },
            x = function(e, t, n) {
                var i = e.target;
                y(i, n.class_loading), g(i, t ? n.class_loaded : n.class_error), v(t ? n.callback_load : n.callback_error, i)
            },
            k = function(e) {
                return e.isIntersecting || e.intersectionRatio > 0
            },
            E = function(e) {
                return {
                    root: e.container === document ? null : e.container,
                    rootMargin: e.threshold + "px"
                }
            },
            C = function(e, t) {
                this._settings = n(e), this._setObserver(), this.update(t)
            };
        C.prototype = {
            _setObserver: function() {
                var t = this;
                f && (this._observer = new IntersectionObserver(function(n) {
                    n.forEach(function(e) {
                        if (k(e)) {
                            var n = e.target;
                            t.load(n), t._observer.unobserve(n)
                        }
                    }), t._elements = e(t._elements)
                }, E(this._settings)))
            },
            loadAll: function() {
                var t = this;
                this._elements.forEach(function(e) {
                    t.load(e)
                }), this._elements = e(this._elements)
            },
            update: function(t) {
                var n = this,
                    i = this._settings,
                    a = t || i.container.querySelectorAll(i.elements_selector);
                this._elements = e(Array.prototype.slice.call(a)), !h && this._observer ? this._elements.forEach(function(e) {
                    n._observer.observe(e)
                }) : this.loadAll()
            },
            destroy: function() {
                var t = this;
                this._observer && (e(this._elements).forEach(function(e) {
                    t._observer.unobserve(e)
                }), this._observer = null), this._elements = null, this._settings = null
            },
            load: function(e, n) {
                t(e, this._settings, n)
            }
        };
        var P = window.lazyLoadOptions;
        return p && P && function(e, t) {
            if (t.length)
                for (var n, i = 0; n = t[i]; i += 1) l(e, n);
            else l(e, t)
        }(C, P), C
    })
}, function(e, t, n) {
    "use strict";
    var i = n(13);
    t.a = i.a
}, function(e, t, n) {
    "use strict";
    var i = n(14),
        a = n(7);
    t.a = {
        init: function() {
            [].slice.call(document.querySelectorAll("[data-em-tabs]")).forEach(function(e) {
                new i.a(e).setup()
            }), new a.a(document.querySelector("[data-em-contactlabels]"), ".contact-forms__input").setup()
        },
        finalize: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var i = n(14),
        a = n(33),
        s = n(34),
        o = n(35);
    t.a = {
        init: function() {
            [].slice.call(document.querySelectorAll("[data-em-tabs]")).forEach(function(e) {
                new i.a(e).setup()
            }), new a.a(document.querySelector(".explore-block__items"), [].slice.call(document.querySelectorAll(".explore-block__item"))).setup(), new s.a(document.querySelector("[data-em-textchanger]")).setup(), new o.a(document.querySelector("[data-em-categoryfilter]")).setup()
        },
        finalize: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var i = function(e, t) {
        this.list = e, this.children = t, this.handleMouseEnter = this.handleMouseEnter.bind(this), this.handleMouseExit = this.handleMouseExit.bind(this)
    };
    i.prototype.setup = function() {
        var e = this;
        this.children.forEach(function(t) {
            t.addEventListener("mouseenter", e.handleMouseEnter), t.addEventListener("mouseleave", e.handleMouseExit)
        })
    }, i.prototype.handleMouseEnter = function() {
        this.list.classList.add("explore-block__items--hovered")
    }, i.prototype.handleMouseExit = function() {
        this.list.classList.remove("explore-block__items--hovered")
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        e && (this.container = e, this.changed = e.querySelector("[data-em-textchanger-changed]"), this.changers = [].slice.call(e.querySelectorAll("[data-em-textchanger-changer]")), this.handleChangerClick = this.handleChangerClick.bind(this))
    };
    i.prototype.setup = function() {
        var e = this;
        this.changers.forEach(function(t) {
            t.addEventListener("click", e.handleChangerClick)
        })
    }, i.prototype.handleChangerClick = function(e) {
        e.preventDefault(), this.changed.innerHTML = e.target.getAttribute("data-em-textchanger-changer")
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        e && (this.container = e, this.filters = [].slice.call(e.querySelectorAll("[data-em-categoryfilter-filter]")), this.filtered = e.querySelector("[data-em-categoryfilter-filtered]"), this.handleFilterClick = this.handleFilterClick.bind(this))
    };
    i.prototype.setup = function() {
        var e = this;
        this.filters.forEach(function(t) {
            t.addEventListener("click", e.handleFilterClick)
        }), this.select("")
    }, i.prototype.select = function(e) {
        this.container.setAttribute("data-em-categoryfilter", e), this.filters.forEach(function(t) {
            if (t.getAttribute("data-em-categoryfilter-filter") !== e) return void t.setAttribute("data-em-tabs-anchor", "hidden");
            t.setAttribute("data-em-tabs-anchor", "visible")
        })
    }, i.prototype.handleFilterClick = function(e) {
        e.preventDefault(), this.select(e.target.getAttribute("data-em-categoryfilter-filter"))
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    t.a = {
        init: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        a = n.n(i),
        s = n(38),
        o = n(39),
        r = n(40),
        l = n(41),
        c = n(43),
        u = n(8),
        d = n(44),
        h = n(9),
        p = n(45),
        f = n(46),
        m = n(47),
        g = n(48);
    t.a = {
        init: function() {
            this.common(), a()("body").hasClass("em-custom-template") && 0 === a()('[data-template-hook="use-default"]').length || this.defaultStory()
        },
        common: function() {
            [].slice.call(document.querySelectorAll("[data-player]")).forEach(function(e) {
                var t = new g.a(e);
                return t.setup(), t
            }), new c.a([].slice.call(document.querySelectorAll("[data-story-save]")), [].slice.call(document.querySelectorAll("[data-story-unsave]"))).setup(), new d.a(document.querySelector('[data-drawer="credits"]', !0)).setup(), new d.a(document.querySelector('[data-drawer="footnotes"]', !0)).setup(), new r.a(document.querySelector("[data-subscriptions]")).setup(), new h.a(document.querySelector(".story__share"), document.querySelector(".story__content"), document.querySelector(".story")).setup()
        },
        defaultStory: function() {
            new p.a(document.querySelector(".share")).setup(), new s.a(document.querySelector(".story__content"), document.querySelector(".story")).setup(), new o.a(document.querySelector("[data-story-gradient]")).setup(), [].slice.call(document.querySelectorAll("[data-vrplayer]")).forEach(function(e) {
                var t = new u.a(e);
                return t.setup(), t
            }), [].slice.call(document.querySelectorAll('[data-player="video"]')).forEach(function(e) {
                new m.a(e).setup()
            }), [].slice.call(document.querySelectorAll("[data-media-parallax]")).forEach(function(e) {
                new f.a(e).setup()
            }), new l.a([].slice.call(document.querySelectorAll('[data-fancybox="gallery"]')), document.querySelector('[data-media-cta="fancybox"]')).setup()
        },
        finalize: function() {
            setTimeout(function() {
                a()("html").addClass("single-story--visible")
            }, 100)
        }
    }
}, function(e, t, n) {
    "use strict";
    var i = n(1),
        a = n.n(i),
        s = function(e, t) {
            this.el = e, this.container = t, this.scroller = a()(), this.bar = this.generatedBar(), this.handleStepProgress = this.handleStepProgress.bind(this)
        };
    s.prototype.setup = function() {
        this.scroller.setup({
            step: [this.el],
            offset: 1,
            progress: !0
        }).onStepProgress(this.handleStepProgress), this.container.appendChild(this.bar)
    }, s.prototype.handleStepProgress = function(e) {
        this.bar.value = e.progress
    }, s.prototype.generatedBar = function() {
        var e = document.createElement("progress");
        return e.className = "story-progress", e.max = 1, e.value = 0, e
    }, t.a = s
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var i = n(1),
            a = n.n(i),
            s = function(e) {
                e && (this.el = e, this.colours = e.getAttribute("data-story-gradient").split(","), this.colours = this.colours.filter(function(e) {
                    return e
                }), this.scroller = a()(), this.handleStepProgress = this.handleStepProgress.bind(this))
            };
        s.prototype.setup = function() {
            var t = this;
            if (this.el) {
                this.el.style.backgroundColor = "transparent", this.el.style.position = "relative", this.el.style.zIndex = 1, this.els = this.colours.map(this.backgroundEl), this.container = document.createElement("div"), this.container.className = "story-gradient", this.els.forEach(function(e) {
                    t.container.appendChild(e)
                });
                e(this.el).parent().get(0).appendChild(this.container), this.scroller.setup({
                    step: [this.el],
                    offset: 1,
                    progress: !0
                }).onStepProgress(this.handleStepProgress)
            }
        }, s.prototype.backgroundEl = function(e, t) {
            var n = document.createElement("b");
            return n.className = "story-gradient__step story-gradient__step--" + t, n.style.backgroundColor = e, n.style.opacity = 0 === t ? 1 : 0, n
        }, s.prototype.handleStepProgress = function(e) {
            var t = e.progress,
                n = Math.floor(t * this.els.length);
            0 !== n && this.els[n] && (this.els[n].style.opacity = t * this.els.length - n)
        }, t.a = s
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        e && (this.container = e, this.button = e.querySelector("[data-subscriptions-toggle]"), this.handleButtonClick = this.handleButtonClick.bind(this))
    };
    i.prototype.setup = function() {
        this.container && this.button.addEventListener("click", this.handleButtonClick)
    }, i.prototype.handleButtonClick = function() {
        var e = this.container.getAttribute("data-subscriptions");
        this.container.setAttribute("data-subscriptions", "hidden" === e ? "visible" : "hidden")
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        a = n.n(i),
        s = n(42),
        o = (n.n(s), function(e, t) {
            this.images = e, this.button = t, this.handleCTAButtonClick = this.handleCTAButtonClick.bind(this)
        });
    o.prototype.setup = function() {
        !this.images || this.images.length < 1 || (a()(this.images).fancybox({
            loop: !0,
            hash: !1,
            touch: {
                vertical: !1
            },
            margin: [80, 20],
            buttons: ["close"],
            transitionEffect: "fade",
            transitionDuration: 1500,
            btnTpl: {
                close: this.closeTpl(),
                arrowLeft: this.arrowLeftTpl(),
                arrowRight: this.arrowRightTpl()
            },
            baseTpl: this.baseTpl(),
            onInit: this.handleFancyboxInit,
            beforeClose: this.handleClose,
            caption: this.caption
        }), a()(document).on("click", ".fancybox-toggle-description", this.handleDescriptionClick), this.button && this.button.addEventListener("click", this.handleCTAButtonClick))
    }, o.prototype.handleFancyboxInit = function(e) {
        var t = a()(".story-title__text").text().trim(),
            n = document.createElement("h1");
        n.className = "fancybox-title", n.innerHTML = t, e.$refs.title = n, e.$refs.inner.append(n), e.$refs.stage.on("mousemove", function(e) {
            var t = a.a.fancybox.getInstance(),
                n = t.$refs.stage,
                i = n.find(".fancybox-image-wrap"),
                s = n.find(".fancybox-image"),
                o = n.width(),
                r = n.height(),
                l = s.width(),
                c = s.height();
            if (!(t.isScaledDown() || o > l && r > c)) {
                var u = e.pageX,
                    d = e.pageY,
                    h = l - o,
                    p = c - r,
                    f = n.offset().left,
                    m = n.offset().top,
                    g = u - f,
                    y = d - m,
                    v = -g / o * h,
                    b = -y / r * p;
                i.css({
                    transform: "translate(" + v + "px ," + b + "px)"
                })
            }
        })
    }, o.prototype.handleCTAButtonClick = function(e) {
        e.preventDefault();
        var t = new Event("click", {
            cancelable: !0
        });
        this.images[0].dispatchEvent(t)
    }, o.prototype.handleClose = function() {
        a()(".fancybox-container").removeClass("fancybox-show-description")
    }, o.prototype.handleDescriptionClick = function() {
        a()(".fancybox-container").toggleClass("fancybox-show-description")
    }, o.prototype.caption = function() {
        return this.dataset.caption ? this.dataset.caption : "&nbsp;"
    }, o.prototype.closeTpl = function() {
        return '\n      <button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">\n        <svg class="svg-icon-close-dims"><use xlink:href="#icon-close" /></svg>\n      </button>'
    }, o.prototype.arrowLeftTpl = function() {
        return '\n        <button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">\n        <svg class="svg-icon-arrow-left-dims"><use xlink:href="#icon-arrow-left" /></svg>\n      </button>'
    }, o.prototype.arrowRightTpl = function() {
        return '\n        <button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">\n        <svg class="svg-icon-arrow-right-dims"><use xlink:href="#icon-arrow-right" /></svg>\n      </button>'
    }, o.prototype.baseTpl = function() {
        return '\n      <div class="fancybox-container fancybox-container-gallery" role="dialog" tabindex="-1">\n        <div class="fancybox-bg"></div>\n        <div class="fancybox-inner">\n          <div class="fancybox-info">\n            <span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>\n        </div>\n        <div class="fancybox-stage">\n          <div class="fancybox-caption-wrapper"><div class="fancybox-caption"></div></div>\n        </div>\n        <div class="fancybox-toolbar">{{buttons}}</div>\n          <div class="fancybox-nav">\n            {{arrows}}\n            <button class="fancybox-toggle-description">\n              <svg class="svg-icon-media-description-dims">\n                <use xlink:href="#icon-media-description" />\n              </svg>\n            </button>\n          </div>\n        </div>\n      </div>\n    '
    }, t.a = o
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, t, n, i) {
            "use strict";

            function a(e) {
                var t = n(e.currentTarget),
                    i = e.data ? e.data.options : {},
                    a = t.attr("data-fancybox") || "",
                    s = 0,
                    o = [];
                e.isDefaultPrevented() || (e.preventDefault(), a ? (o = i.selector ? n(i.selector) : e.data ? e.data.items : [], o = o.length ? o.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]'), (s = o.index(t)) < 0 && (s = 0)) : o = [t], n.fancybox.open(o, i, s))
            }
            if (n) {
                if (n.fn.fancybox) return void("console" in e && console.log("fancyBox already initialized"));
                var s = {
                        loop: !1,
                        margin: [44, 0],
                        gutter: 50,
                        keyboard: !0,
                        arrows: !0,
                        infobar: !0,
                        toolbar: !0,
                        buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
                        idleTime: 3,
                        smallBtn: "auto",
                        protect: !1,
                        modal: !1,
                        image: {
                            preload: "auto"
                        },
                        ajax: {
                            settings: {
                                data: {
                                    fancybox: !0
                                }
                            }
                        },
                        iframe: {
                            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                            preload: !0,
                            css: {},
                            attr: {
                                scrolling: "auto"
                            }
                        },
                        defaultType: "image",
                        animationEffect: "zoom",
                        animationDuration: 500,
                        zoomOpacity: "auto",
                        transitionEffect: "fade",
                        transitionDuration: 366,
                        slideClass: "",
                        baseClass: "",
                        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                        spinnerTpl: '<div class="fancybox-loading"></div>',
                        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                        btnTpl: {
                            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
                            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
                            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                            smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
                            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
                            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'
                        },
                        parentEl: "body",
                        autoFocus: !1,
                        backFocus: !0,
                        trapFocus: !0,
                        fullScreen: {
                            autoStart: !1
                        },
                        touch: {
                            vertical: !0,
                            momentum: !0
                        },
                        hash: null,
                        media: {},
                        slideShow: {
                            autoStart: !1,
                            speed: 4e3
                        },
                        thumbs: {
                            autoStart: !1,
                            hideOnClose: !0,
                            parentEl: ".fancybox-container",
                            axis: "y"
                        },
                        onInit: n.noop,
                        beforeLoad: n.noop,
                        afterLoad: n.noop,
                        beforeShow: n.noop,
                        afterShow: n.noop,
                        beforeClose: n.noop,
                        afterClose: n.noop,
                        onActivate: n.noop,
                        onDeactivate: n.noop,
                        clickContent: function(e, t) {
                            return "image" === e.type && "zoom"
                        },
                        clickSlide: "close",
                        clickOutside: "close",
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                        mobile: {
                            margin: 0,
                            clickContent: function(e, t) {
                                return "image" === e.type && "toggleControls"
                            },
                            clickSlide: function(e, t) {
                                return "image" === e.type ? "toggleControls" : "close"
                            },
                            dblclickContent: function(e, t) {
                                return "image" === e.type && "zoom"
                            },
                            dblclickSlide: function(e, t) {
                                return "image" === e.type && "zoom"
                            }
                        },
                        lang: "en",
                        i18n: {
                            en: {
                                CLOSE: "Close",
                                NEXT: "Next",
                                PREV: "Previous",
                                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                PLAY_START: "Start slideshow",
                                PLAY_STOP: "Pause slideshow",
                                FULL_SCREEN: "Full screen",
                                THUMBS: "Thumbnails",
                                DOWNLOAD: "Download",
                                SHARE: "Share",
                                ZOOM: "Zoom"
                            },
                            de: {
                                CLOSE: "Schliessen",
                                NEXT: "Weiter",
                                PREV: "Zurück",
                                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                                PLAY_START: "Diaschau starten",
                                PLAY_STOP: "Diaschau beenden",
                                FULL_SCREEN: "Vollbild",
                                THUMBS: "Vorschaubilder",
                                DOWNLOAD: "Herunterladen",
                                SHARE: "Teilen",
                                ZOOM: "Maßstab"
                            }
                        }
                    },
                    o = n(e),
                    r = n(t),
                    l = 0,
                    c = function(e) {
                        return e && e.hasOwnProperty && e instanceof n
                    },
                    u = function() {
                        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                            return e.setTimeout(t, 1e3 / 60)
                        }
                    }(),
                    d = function() {
                        var e, n = t.createElement("fakeelement"),
                            i = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            };
                        for (e in i)
                            if (void 0 !== n.style[e]) return i[e];
                        return "transitionend"
                    }(),
                    h = function(e) {
                        return e && e.length && e[0].offsetHeight
                    },
                    p = function(e, i, a) {
                        var s = this;
                        s.opts = n.extend(!0, {
                            index: a
                        }, n.fancybox.defaults, i || {}), n.fancybox.isMobile && (s.opts = n.extend(!0, {}, s.opts, s.opts.mobile)), i && n.isArray(i.buttons) && (s.opts.buttons = i.buttons), s.id = s.opts.id || ++l, s.group = [], s.currIndex = parseInt(s.opts.index, 10) || 0, s.prevIndex = null, s.prevPos = null, s.currPos = 0, s.firstRun = null, s.createGroup(e), s.group.length && (s.$lastFocus = n(t.activeElement).blur(), s.slides = {}, s.init())
                    };
                n.extend(p.prototype, {
                    init: function() {
                        var i, a, s, o = this,
                            l = o.group[o.currIndex],
                            c = l.opts,
                            u = n.fancybox.scrollbarWidth;
                        o.scrollTop = r.scrollTop(), o.scrollLeft = r.scrollLeft(), n.fancybox.getInstance() || (n("body").addClass("fancybox-active"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !e.MSStream ? "image" !== l.type && n("body").css("top", -1 * n("body").scrollTop()).addClass("fancybox-iosfix") : !n.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (void 0 === u && (i = n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"), u = n.fancybox.scrollbarWidth = i[0].offsetWidth - i[0].clientWidth, i.remove()), n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + u + "px; }</style>"), n("body").addClass("compensate-for-scrollbar"))), s = "", n.each(c.buttons, function(e, t) {
                            s += c.btnTpl[t] || ""
                        }), a = n(o.translate(o, c.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", c.btnTpl.arrowLeft + c.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass("fancybox-is-hidden").addClass(c.baseClass).data("FancyBox", o).appendTo(c.parentEl), o.$refs = {
                            container: a
                        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(e) {
                            o.$refs[e] = a.find(".fancybox-" + e)
                        }), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                    },
                    translate: function(e, t) {
                        var n = e.opts.i18n[e.opts.lang];
                        return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                            var i = n[t];
                            return void 0 === i ? e : i
                        })
                    },
                    createGroup: function(e) {
                        var t = this,
                            i = n.makeArray(e);
                        n.each(i, function(e, i) {
                            var a, s, o, r, l = {},
                                c = {};
                            n.isPlainObject(i) ? (l = i, c = i.opts || i) : "object" === n.type(i) && n(i).length ? (a = n(i), c = a.data(), c = n.extend({}, c, c.options || {}), c.$orig = a, l.src = c.src || a.attr("href"), l.type || l.src || (l.type = "inline", l.src = i)) : l = {
                                type: "html",
                                src: i + ""
                            }, l.opts = n.extend(!0, {}, t.opts, c), n.isArray(c.buttons) && (l.opts.buttons = c.buttons), s = l.type || l.opts.type, o = l.src || "", !s && o && (o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === o.charAt(0) && (s = "inline")), s ? l.type = s : t.trigger("objectNeedsType", l), l.index = t.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")), l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, "function" === n.type(l.opts.caption) && (l.opts.caption = l.opts.caption.apply(i, [t, l])), "function" === n.type(t.opts.caption) && (l.opts.caption = t.opts.caption.apply(i, [t, l])), l.opts.caption instanceof n || (l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + ""), "ajax" === s && (r = o.split(/\s+/, 2), r.length > 1 && (l.src = r.shift(), l.opts.filter = r.shift())), "auto" == l.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (l.opts.toolbar = !1, l.opts.smallBtn = !0) : l.opts.smallBtn = !1), "pdf" === s && (l.type = "iframe", l.opts.iframe.preload = !1), l.opts.modal && (l.opts = n.extend(!0, l.opts, {
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1
                            })), t.group.push(l)
                        })
                    },
                    addEvents: function() {
                        var i = this;
                        i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                            e.stopPropagation(), e.preventDefault(), i.close(e)
                        }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(e) {
                            e.stopPropagation(), e.preventDefault(), i.previous()
                        }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(e) {
                            e.stopPropagation(), e.preventDefault(), i.next()
                        }).on("click.fb", "[data-fancybox-zoom]", function(e) {
                            i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                        }), o.on("orientationchange.fb resize.fb", function(e) {
                            e && e.originalEvent && "resize" === e.originalEvent.type ? u(function() {
                                i.update()
                            }) : (i.$refs.stage.hide(), setTimeout(function() {
                                i.$refs.stage.show(), i.update()
                            }, 600))
                        }), r.on("focusin.fb", function(e) {
                            var a = n.fancybox ? n.fancybox.getInstance() : null;
                            a.isClosing || !a.current || !a.current.opts.trapFocus || n(e.target).hasClass("fancybox-container") || n(e.target).is(t) || a && "fixed" !== n(e.target).css("position") && !a.$refs.container.has(e.target).length && (e.stopPropagation(), a.focus(), o.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                        }), r.on("keydown.fb", function(e) {
                            var t = i.current,
                                a = e.keyCode || e.which;
                            if (t && t.opts.keyboard && !n(e.target).is("input") && !n(e.target).is("textarea")) return 8 === a || 27 === a ? (e.preventDefault(), void i.close(e)) : 37 === a || 38 === a ? (e.preventDefault(), void i.previous()) : 39 === a || 40 === a ? (e.preventDefault(), void i.next()) : void i.trigger("afterKeydown", e, a)
                        }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
                            i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                        }), i.idleInterval = e.setInterval(function() {
                            ++i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                        }, 1e3))
                    },
                    removeEvents: function() {
                        var t = this;
                        o.off("orientationchange.fb resize.fb"), r.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), t.idleInterval = null)
                    },
                    previous: function(e) {
                        return this.jumpTo(this.currPos - 1, e)
                    },
                    next: function(e) {
                        return this.jumpTo(this.currPos + 1, e)
                    },
                    jumpTo: function(e, t, i) {
                        var a, s, o, r, l, c, u, d = this,
                            p = d.group.length;
                        if (!(d.isSliding || d.isClosing || d.isAnimating && d.firstRun)) {
                            if (e = parseInt(e, 10), !(s = d.current ? d.current.opts.loop : d.opts.loop) && (e < 0 || e >= p)) return !1;
                            if (a = d.firstRun = null === d.firstRun, !(p < 2 && !a && d.isSliding)) {
                                if (r = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, o = d.createSlide(e), p > 1 && ((s || o.index > 0) && d.createSlide(e - 1), (s || o.index < p - 1) && d.createSlide(e + 1)), d.current = o, d.currIndex = o.index, d.currPos = o.pos, d.trigger("beforeShow", a), d.updateControls(), c = n.fancybox.getTranslate(o.$slide), o.isMoved = (0 !== c.left || 0 !== c.top) && !o.$slide.hasClass("fancybox-animated"), o.forcedDuration = void 0, n.isNumeric(t) ? o.forcedDuration = t : t = o.opts[a ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), a) return o.opts.animationEffect && t && d.$refs.container.css("transition-duration", t + "ms"), d.$refs.container.removeClass("fancybox-is-hidden"), h(d.$refs.container), d.$refs.container.addClass("fancybox-is-open"), o.$slide.addClass("fancybox-slide--current"), d.loadSlide(o), void d.preload();
                                n.each(d.slides, function(e, t) {
                                    n.fancybox.stop(t.$slide)
                                }), o.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), o.isMoved ? (l = Math.round(o.$slide.width()), n.each(d.slides, function(e, i) {
                                    var a = i.pos - o.pos;
                                    n.fancybox.animate(i.$slide, {
                                        top: 0,
                                        left: a * l + a * i.opts.gutter
                                    }, t, function() {
                                        i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), i.pos === d.currPos && (o.isMoved = !1, d.complete())
                                    })
                                })) : d.$refs.stage.children().removeAttr("style"), o.isLoaded ? d.revealContent(o) : d.loadSlide(o), d.preload(), r.pos !== o.pos && (u = "fancybox-slide--" + (r.pos > o.pos ? "next" : "previous"), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), r.isComplete = !1, t && (o.isMoved || o.opts.transitionEffect) && (o.isMoved ? r.$slide.addClass(u) : (u = "fancybox-animated " + u + " fancybox-fx-" + o.opts.transitionEffect, n.fancybox.animate(r.$slide, u, t, function() {
                                    r.$slide.removeClass(u).removeAttr("style")
                                }))))
                            }
                        }
                    },
                    createSlide: function(e) {
                        var t, i, a = this;
                        return i = e % a.group.length, i = i < 0 ? a.group.length + i : i, !a.slides[e] && a.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(a.$refs.stage), a.slides[e] = n.extend(!0, {}, a.group[i], {
                            pos: e,
                            $slide: t,
                            isLoaded: !1
                        }), a.updateSlide(a.slides[e])), a.slides[e]
                    },
                    scaleToActual: function(e, t, i) {
                        var a, s, o, r, l, c = this,
                            u = c.current,
                            d = u.$content,
                            h = parseInt(u.$slide.width(), 10),
                            p = parseInt(u.$slide.height(), 10),
                            f = u.width,
                            m = u.height;
                        "image" != u.type || u.hasError || !d || c.isAnimating || (n.fancybox.stop(d), c.isAnimating = !0, e = void 0 === e ? .5 * h : e, t = void 0 === t ? .5 * p : t, a = n.fancybox.getTranslate(d), r = f / a.width, l = m / a.height, s = .5 * h - .5 * f, o = .5 * p - .5 * m, f > h && (s = a.left * r - (e * r - e), s > 0 && (s = 0), s < h - f && (s = h - f)), m > p && (o = a.top * l - (t * l - t), o > 0 && (o = 0), o < p - m && (o = p - m)), c.updateCursor(f, m), n.fancybox.animate(d, {
                            top: o,
                            left: s,
                            scaleX: r,
                            scaleY: l
                        }, i || 330, function() {
                            c.isAnimating = !1
                        }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                    },
                    scaleToFit: function(e) {
                        var t, i = this,
                            a = i.current,
                            s = a.$content;
                        "image" != a.type || a.hasError || !s || i.isAnimating || (n.fancybox.stop(s), i.isAnimating = !0, t = i.getFitPos(a), i.updateCursor(t.width, t.height), n.fancybox.animate(s, {
                            top: t.top,
                            left: t.left,
                            scaleX: t.width / s.width(),
                            scaleY: t.height / s.height()
                        }, e || 330, function() {
                            i.isAnimating = !1
                        }))
                    },
                    getFitPos: function(e) {
                        var t, i, a, s, o, r = this,
                            l = e.$content,
                            c = e.width,
                            u = e.height,
                            d = e.opts.margin;
                        return !(!l || !l.length || !c && !u) && ("number" === n.type(d) && (d = [d, d]), 2 == d.length && (d = [d[0], d[1], d[0], d[1]]), t = parseInt(r.$refs.stage.width(), 10) - (d[1] + d[3]), i = parseInt(r.$refs.stage.height(), 10) - (d[0] + d[2]), a = Math.min(1, t / c, i / u), s = Math.floor(a * c), o = Math.floor(a * u), {
                            top: Math.floor(.5 * (i - o)) + d[0],
                            left: Math.floor(.5 * (t - s)) + d[3],
                            width: s,
                            height: o
                        })
                    },
                    update: function() {
                        var e = this;
                        n.each(e.slides, function(t, n) {
                            e.updateSlide(n)
                        })
                    },
                    updateSlide: function(e) {
                        var t = this,
                            i = e.$content;
                        i && (e.width || e.height) && (t.isAnimating = !1, n.fancybox.stop(i), n.fancybox.setTranslate(i, t.getFitPos(e)), e.pos === t.currPos && t.updateCursor()), e.$slide.trigger("refresh"), t.trigger("onUpdate", e)
                    },
                    updateCursor: function(e, t) {
                        var n, i = this,
                            a = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                        i.current && !i.isClosing && (i.isZoomable() ? (a.addClass("fancybox-is-zoomable"), n = void 0 !== e && void 0 !== t ? e < i.current.width && t < i.current.height : i.isScaledDown(), n ? a.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && a.addClass("fancybox-can-drag"))
                    },
                    isZoomable: function() {
                        var e, t = this,
                            i = t.current;
                        if (i && !t.isClosing) return !!("image" === i.type && i.isLoaded && !i.hasError && ("zoom" === i.opts.clickContent || n.isFunction(i.opts.clickContent) && "zoom" === i.opts.clickContent(i)) && (e = t.getFitPos(i), i.width > e.width || i.height > e.height))
                    },
                    isScaledDown: function() {
                        var e = this,
                            t = e.current,
                            i = t.$content,
                            a = !1;
                        return i && (a = n.fancybox.getTranslate(i), a = a.width < t.width || a.height < t.height), a
                    },
                    canPan: function() {
                        var e = this,
                            t = e.current,
                            n = t.$content,
                            i = !1;
                        return n && (i = e.getFitPos(t), i = Math.abs(n.width() - i.width) > 1 || Math.abs(n.height() - i.height) > 1), i
                    },
                    loadSlide: function(e) {
                        var t, i, a, s = this;
                        if (!e.isLoading && !e.isLoaded) {
                            switch (e.isLoading = !0, s.trigger("beforeLoad", e), t = e.type, i = e.$slide, i.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(e.opts.slideClass), t) {
                                case "image":
                                    s.setImage(e);
                                    break;
                                case "iframe":
                                    s.setIframe(e);
                                    break;
                                case "html":
                                    s.setContent(e, e.src || e.content);
                                    break;
                                case "inline":
                                    n(e.src).length ? s.setContent(e, n(e.src)) : s.setError(e);
                                    break;
                                case "ajax":
                                    s.showLoading(e), a = n.ajax(n.extend({}, e.opts.ajax.settings, {
                                        url: e.src,
                                        success: function(t, n) {
                                            "success" === n && s.setContent(e, t)
                                        },
                                        error: function(t, n) {
                                            t && "abort" !== n && s.setError(e)
                                        }
                                    })), i.one("onReset", function() {
                                        a.abort()
                                    });
                                    break;
                                default:
                                    s.setError(e)
                            }
                            return !0
                        }
                    },
                    setImage: function(t) {
                        var i, a, s, o, r = this,
                            l = t.opts.srcset || t.opts.image.srcset;
                        if (l) {
                            s = e.devicePixelRatio || 1, o = e.innerWidth * s, a = l.split(",").map(function(e) {
                                var t = {};
                                return e.trim().split(/\s+/).forEach(function(e, n) {
                                    var i = parseInt(e.substring(0, e.length - 1), 10);
                                    if (0 === n) return t.url = e;
                                    i && (t.value = i, t.postfix = e[e.length - 1])
                                }), t
                            }), a.sort(function(e, t) {
                                return e.value - t.value
                            });
                            for (var c = 0; c < a.length; c++) {
                                var u = a[c];
                                if ("w" === u.postfix && u.value >= o || "x" === u.postfix && u.value >= s) {
                                    i = u;
                                    break
                                }
                            }!i && a.length && (i = a[a.length - 1]), i && (t.src = i.url, t.width && t.height && "w" == i.postfix && (t.height = t.width / t.height * i.value, t.width = i.value))
                        }
                        t.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = n("<img />").one("error", function() {
                            n(this).remove(), t.$ghost = null, r.setBigImage(t)
                        }).one("load", function() {
                            r.afterLoad(t), r.setBigImage(t)
                        }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : r.setBigImage(t)
                    },
                    setBigImage: function(e) {
                        var t = this,
                            i = n("<img />");
                        e.$image = i.one("error", function() {
                            t.setError(e)
                        }).one("load", function() {
                            clearTimeout(e.timouts), e.timouts = null, t.isClosing || (e.width = this.naturalWidth, e.height = this.naturalHeight, e.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset), t.hideLoading(e), e.$ghost ? e.timouts = setTimeout(function() {
                                e.timouts = null, e.$ghost.hide()
                            }, Math.min(300, Math.max(1e3, e.height / 1600))) : t.afterLoad(e))
                        }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error ? i.trigger("error") : e.timouts = setTimeout(function() {
                            i[0].complete || e.hasError || t.showLoading(e)
                        }, 100)
                    },
                    setIframe: function(e) {
                        var t, i = this,
                            a = e.opts.iframe,
                            s = e.$slide;
                        e.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s), t = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(e.$content), a.preload ? (i.showLoading(e), t.on("load.fb error.fb", function(t) {
                            this.isReady = 1, e.$slide.trigger("refresh"), i.afterLoad(e)
                        }), s.on("refresh.fb", function() {
                            var n, i, s, o = e.$content,
                                r = a.css.width,
                                l = a.css.height;
                            if (1 === t[0].isReady) {
                                try {
                                    i = t.contents(), s = i.find("body")
                                } catch (e) {}
                                s && s.length && (void 0 === r && (n = t[0].contentWindow.document.documentElement.scrollWidth, r = Math.ceil(s.outerWidth(!0) + (o.width() - n)), r += o.outerWidth() - o.innerWidth()), void 0 === l && (l = Math.ceil(s.outerHeight(!0)), l += o.outerHeight() - o.innerHeight()), r && o.width(r), l && o.height(l)), o.removeClass("fancybox-is-hidden")
                            }
                        })) : this.afterLoad(e), t.attr("src", e.src), !0 === e.opts.smallBtn && e.$content.prepend(i.translate(e, e.opts.btnTpl.smallBtn)), s.one("onReset", function() {
                            try {
                                n(this).find("iframe").hide().attr("src", "//about:blank")
                            } catch (e) {}
                            n(this).empty(), e.isLoaded = !1
                        })
                    },
                    setContent: function(e, t) {
                        var i = this;
                        i.isClosing || (i.hideLoading(e), e.$slide.empty(), c(t) && t.parent().length ? (t.parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = n("<div></div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && (t = n("<div>").append(n.trim(t)).contents(), 3 === t[0].nodeType && (t = n("<div>").html(t))), e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
                            e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (n(this).empty(), e.isLoaded = !1)
                        }), e.$content = n(t).appendTo(e.$slide), this.afterLoad(e))
                    },
                    setError: function(e) {
                        e.hasError = !0, e.$slide.removeClass("fancybox-slide--" + e.type), this.setContent(e, this.translate(e, e.opts.errorTpl))
                    },
                    showLoading: function(e) {
                        var t = this;
                        (e = e || t.current) && !e.$spinner && (e.$spinner = n(t.opts.spinnerTpl).appendTo(e.$slide))
                    },
                    hideLoading: function(e) {
                        var t = this;
                        (e = e || t.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
                    },
                    afterLoad: function(e) {
                        var t = this;
                        t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), e.opts.smallBtn && !e.$smallBtn && (e.$smallBtn = n(t.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content.filter("div,form").first())), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                            return 2 == e.button && e.preventDefault(), !0
                        }), "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.revealContent(e))
                    },
                    revealContent: function(e) {
                        var t, i, a, s, o, r = this,
                            l = e.$slide,
                            c = !1;
                        return t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"], a = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(void 0 === e.forcedDuration ? a : e.forcedDuration, 10), !e.isMoved && e.pos === r.currPos && a || (t = !1), "zoom" !== t || e.pos === r.currPos && a && "image" === e.type && !e.hasError && (c = r.getThumbPos(e)) || (t = "fade"), "zoom" === t ? (o = r.getFitPos(e), o.scaleX = o.width / c.width, o.scaleY = o.height / c.height, delete o.width, delete o.height, s = e.opts.zoomOpacity, "auto" == s && (s = Math.abs(e.width / e.height - c.width / c.height) > .1), s && (c.opacity = .1, o.opacity = 1), n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), c), h(e.$content), void n.fancybox.animate(e.$content, o, a, function() {
                            r.complete()
                        })) : (r.updateSlide(e), t ? (n.fancybox.stop(l), i = "fancybox-animated fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-fx-" + t, l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i), e.$content.removeClass("fancybox-is-hidden"), h(l), void n.fancybox.animate(l, "fancybox-slide--current", a, function(t) {
                            l.removeClass(i).removeAttr("style"), e.pos === r.currPos && r.complete()
                        }, !0)) : (h(l), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === r.currPos && r.complete())))
                    },
                    getThumbPos: function(i) {
                        var a, s = this,
                            o = !1,
                            r = i.opts.$thumb,
                            l = r ? r.offset() : 0;
                        return l && r[0].ownerDocument === t && function(t) {
                            for (var i = t[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement;) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), i = i.parentElement;
                            return s.every(function(e) {
                                var t = Math.min(a.right, e.right) - Math.max(a.left, e.left),
                                    n = Math.min(a.bottom, e.bottom) - Math.max(a.top, e.top);
                                return t > 0 && n > 0
                            }) && a.bottom > 0 && a.right > 0 && a.left < n(e).width() && a.top < n(e).height()
                        }(r) && (a = s.$refs.stage.offset(), o = {
                            top: l.top - a.top + parseFloat(r.css("border-top-width") || 0),
                            left: l.left - a.left + parseFloat(r.css("border-left-width") || 0),
                            width: r.width(),
                            height: r.height(),
                            scaleX: 1,
                            scaleY: 1
                        }), o
                    },
                    complete: function() {
                        var e = this,
                            i = e.current,
                            a = {};
                        i.isMoved || !i.isLoaded || i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), h(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function(t, i) {
                            i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? a[i.pos] = i : i && (n.fancybox.stop(i.$slide), i.$slide.off().remove())
                        }), e.slides = a, e.updateCursor(), e.trigger("afterShow"), (n(t.activeElement).is("[disabled]") || i.opts.autoFocus && "image" != i.type && "iframe" !== i.type) && e.focus())
                    },
                    preload: function() {
                        var e, t, n = this;
                        n.group.length < 2 || (e = n.slides[n.currPos + 1], t = n.slides[n.currPos - 1], e && "image" === e.type && n.loadSlide(e), t && "image" === t.type && n.loadSlide(t))
                    },
                    focus: function() {
                        var e, t = this.current;
                        this.isClosing || (t && t.isComplete && (e = t.$slide.find("input[autofocus]:enabled:visible:first"), e.length || (e = t.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), e = e && e.length ? e : this.$refs.container, e.focus())
                    },
                    activate: function() {
                        var e = this;
                        n(".fancybox-container").each(function() {
                            var t = n(this).data("FancyBox");
                            t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                        }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                    },
                    close: function(e, t) {
                        var i, a, s, o, r, l, c = this,
                            p = c.current,
                            f = function() {
                                c.cleanUp(e)
                            };
                        return !c.isClosing && (c.isClosing = !0, !1 === c.trigger("beforeClose", e) ? (c.isClosing = !1, u(function() {
                            c.update()
                        }), !1) : (c.removeEvents(), p.timouts && clearTimeout(p.timouts), s = p.$content, i = p.opts.animationEffect, a = n.isNumeric(t) ? t : i ? p.opts.animationDuration : 0, p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), p.$slide.siblings().trigger("onReset").remove(), a && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), c.hideLoading(p), c.hideControls(), c.updateCursor(), "zoom" !== i || !0 !== e && s && a && "image" === p.type && !p.hasError && (l = c.getThumbPos(p)) || (i = "fade"), "zoom" === i ? (n.fancybox.stop(s), r = n.fancybox.getTranslate(s), r.width = r.width * r.scaleX, r.height = r.height * r.scaleY, o = p.opts.zoomOpacity, "auto" == o && (o = Math.abs(p.width / p.height - l.width / l.height) > .1), o && (l.opacity = 0), r.scaleX = r.width / l.width, r.scaleY = r.height / l.height, r.width = l.width, r.height = l.height, n.fancybox.setTranslate(p.$content, r), h(p.$content), n.fancybox.animate(p.$content, l, a, f), !0) : (i && a ? !0 === e ? setTimeout(f, a) : n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, a, f) : f(), !0)))
                    },
                    cleanUp: function(e) {
                        var i, a, s = this,
                            r = n("body");
                        s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.$lastFocus && s.current.opts.backFocus && s.$lastFocus.focus(), s.current = null, i = n.fancybox.getInstance(), i ? i.activate() : (o.scrollTop(s.scrollTop).scrollLeft(s.scrollLeft), r.removeClass("fancybox-active compensate-for-scrollbar"), r.hasClass("fancybox-iosfix") && (a = parseInt(t.body.style.top, 10), r.removeClass("fancybox-iosfix").css("top", "").scrollTop(-1 * a)), n("#fancybox-style-noscroll").remove())
                    },
                    trigger: function(e, t) {
                        var i, a = Array.prototype.slice.call(arguments, 1),
                            s = this,
                            o = t && t.opts ? t : s.current;
                        if (o ? a.unshift(o) : o = s, a.unshift(s), n.isFunction(o.opts[e]) && (i = o.opts[e].apply(o, a)), !1 === i) return i;
                        "afterClose" !== e && s.$refs ? s.$refs.container.trigger(e + ".fb", a) : r.trigger(e + ".fb", a)
                    },
                    updateControls: function(e) {
                        var t = this,
                            n = t.current,
                            i = n.index,
                            a = n.opts.caption,
                            s = t.$refs.container,
                            o = t.$refs.caption;
                        n.$slide.trigger("refresh"), t.$caption = a && a.length ? o.html(a) : null, t.isHiddenControls || t.isIdle || t.showControls(), s.find("[data-fancybox-count]").html(t.group.length), s.find("[data-fancybox-index]").html(i + 1), s.find("[data-fancybox-prev]").prop("disabled", !n.opts.loop && i <= 0), s.find("[data-fancybox-next]").prop("disabled", !n.opts.loop && i >= t.group.length - 1), "image" === n.type ? s.find("[data-fancybox-download]").attr("href", n.opts.image.src || n.src).show() : s.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
                    },
                    hideControls: function() {
                        this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
                    },
                    showControls: function() {
                        var e = this,
                            t = e.current ? e.current.opts : e.opts,
                            n = e.$refs.container;
                        e.isHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal), e.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
                    },
                    toggleControls: function() {
                        this.isHiddenControls ? this.showControls() : this.hideControls()
                    }
                }), n.fancybox = {
                    version: "3.2.5",
                    defaults: s,
                    getInstance: function(e) {
                        var t = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                            i = Array.prototype.slice.call(arguments, 1);
                        return t instanceof p && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), t)
                    },
                    open: function(e, t, n) {
                        return new p(e, t, n)
                    },
                    close: function(e) {
                        var t = this.getInstance();
                        t && (t.close(), !0 === e && this.close())
                    },
                    destroy: function() {
                        this.close(!0), r.off("click.fb-start")
                    },
                    isMobile: void 0 !== t.createTouch && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: function() {
                        var n = t.createElement("div");
                        return e.getComputedStyle && e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
                    }(),
                    getTranslate: function(e) {
                        var t;
                        if (!e || !e.length) return !1;
                        if (t = e.eq(0).css("transform"), t && -1 !== t.indexOf("matrix") ? (t = t.split("(")[1], t = t.split(")")[0], t = t.split(",")) : t = [], t.length) t = t.length > 10 ? [t[13], t[12], t[0], t[5]] : [t[5], t[4], t[0], t[3]], t = t.map(parseFloat);
                        else {
                            t = [0, 0, 1, 1];
                            var n = /\.*translate\((.*)px,(.*)px\)/i,
                                i = n.exec(e.eq(0).attr("style"));
                            i && (t[0] = parseFloat(i[2]), t[1] = parseFloat(i[1]))
                        }
                        return {
                            top: t[0],
                            left: t[1],
                            scaleX: t[2],
                            scaleY: t[3],
                            opacity: parseFloat(e.css("opacity")),
                            width: e.width(),
                            height: e.height()
                        }
                    },
                    setTranslate: function(e, t) {
                        var n = "",
                            i = {};
                        if (e && t) return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY && (n = (n.length ? n + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), n.length && (i.transform = n), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.width && (i.width = t.width), void 0 !== t.height && (i.height = t.height), e.css(i)
                    },
                    animate: function(e, t, i, a, s) {
                        n.isFunction(i) && (a = i, i = null), n.isPlainObject(t) || e.removeAttr("style"), e.on(d, function(i) {
                            (!i || !i.originalEvent || e.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (n.fancybox.stop(e), n.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && (e.css("transition-duration", ""), t.width = Math.round(e.width() * t.scaleX), t.height = Math.round(e.height() * t.scaleY), t.scaleX = 1, t.scaleY = 1, n.fancybox.setTranslate(e, t)) : !0 !== s && e.removeClass(t), n.isFunction(a) && a(i))
                        }), n.isNumeric(i) && e.css("transition-duration", i + "ms"), n.isPlainObject(t) ? n.fancybox.setTranslate(e, t) : e.addClass(t), t.scaleX && e.hasClass("fancybox-image-wrap") && e.parent().addClass("fancybox-is-scaling"), e.data("timer", setTimeout(function() {
                            e.trigger("transitionend")
                        }, i + 16))
                    },
                    stop: function(e) {
                        clearTimeout(e.data("timer")), e.off("transitionend").css("transition-duration", ""), e.hasClass("fancybox-image-wrap") && e.parent().removeClass("fancybox-is-scaling")
                    }
                }, n.fn.fancybox = function(e) {
                    var t;
                    return e = e || {}, t = e.selector || !1, t ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
                        options: e
                    }, a) : this.off("click.fb-start").on("click.fb-start", {
                        items: this,
                        options: e
                    }, a), this
                }, r.on("click.fb-start", "[data-fancybox]", a)
            }
        }(window, document, e || t),
            function(e) {
                "use strict";
                var t = function(t, n, i) {
                        if (t) return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(n, function(e, n) {
                            t = t.replace("$" + e, n || "")
                        }), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t
                    },
                    n = {
                        youtube: {
                            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                            params: {
                                autoplay: 1,
                                autohide: 1,
                                fs: 1,
                                rel: 0,
                                hd: 1,
                                wmode: "transparent",
                                enablejsapi: 1,
                                html5: 1
                            },
                            paramPlace: 8,
                            type: "iframe",
                            url: "//www.youtube.com/embed/$4",
                            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
                        },
                        vimeo: {
                            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                            params: {
                                autoplay: 1,
                                hd: 1,
                                show_title: 1,
                                show_byline: 1,
                                show_portrait: 0,
                                fullscreen: 1,
                                api: 1
                            },
                            paramPlace: 3,
                            type: "iframe",
                            url: "//player.vimeo.com/video/$2"
                        },
                        metacafe: {
                            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                            type: "iframe",
                            url: "//www.metacafe.com/embed/$1/?ap=1"
                        },
                        dailymotion: {
                            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                            params: {
                                additionalInfos: 0,
                                autoStart: 1
                            },
                            type: "iframe",
                            url: "//www.dailymotion.com/embed/video/$1"
                        },
                        vine: {
                            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                            type: "iframe",
                            url: "//vine.co/v/$1/embed/simple"
                        },
                        instagram: {
                            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                            type: "image",
                            url: "//$1/p/$2/media/?size=l"
                        },
                        gmap_place: {
                            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                            type: "iframe",
                            url: function(e) {
                                return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                            }
                        },
                        gmap_search: {
                            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                            type: "iframe",
                            url: function(e) {
                                return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                            }
                        }
                    };
                e(document).on("objectNeedsType.fb", function(i, a, s) {
                    var o, r, l, c, u, d, h = s.src || "",
                        p = !1;
                    o = e.extend(!0, {}, n, s.opts.media), e.each(o, function(n, i) {
                        if (l = h.match(i.matcher)) {
                            if (p = i.type, d = {}, i.paramPlace && l[i.paramPlace]) {
                                u = l[i.paramPlace], "?" == u[0] && (u = u.substring(1)), u = u.split("&");
                                for (var a = 0; a < u.length; ++a) {
                                    var o = u[a].split("=", 2);
                                    2 == o.length && (d[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                                }
                            }
                            return c = e.extend(!0, {}, i.params, s.opts[n], d), h = "function" === e.type(i.url) ? i.url.call(this, l, c, s) : t(i.url, l, c), r = "function" === e.type(i.thumb) ? i.thumb.call(this, l, c, s) : t(i.thumb, l), "vimeo" === n && (h = h.replace("&%23", "#")), !1
                        }
                    }), p ? (s.src = h, s.type = p, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = r), "iframe" === p && (e.extend(!0, s.opts, {
                        iframe: {
                            preload: !1,
                            attr: {
                                scrolling: "no"
                            }
                        }
                    }), s.contentProvider = void 0, s.opts.slideClass += " fancybox-slide--video")) : h && (s.type = s.opts.defaultType)
                })
            }(e || t),
            function(e, t, n) {
                "use strict";
                var i = function() {
                        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                            return e.setTimeout(t, 1e3 / 60)
                        }
                    }(),
                    a = function() {
                        return e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
                            e.clearTimeout(t)
                        }
                    }(),
                    s = function(t) {
                        var n = [];
                        t = t.originalEvent || t || e.e, t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
                        for (var i in t) t[i].pageX ? n.push({
                            x: t[i].pageX,
                            y: t[i].pageY
                        }) : t[i].clientX && n.push({
                            x: t[i].clientX,
                            y: t[i].clientY
                        });
                        return n
                    },
                    o = function(e, t, n) {
                        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
                    },
                    r = function(e) {
                        if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea') || n.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
                        for (var t = 0, i = e[0].attributes, a = i.length; t < a; t++)
                            if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
                        return !1
                    },
                    l = function(t) {
                        var n = e.getComputedStyle(t)["overflow-y"],
                            i = e.getComputedStyle(t)["overflow-x"],
                            a = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight,
                            s = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth;
                        return a || s
                    },
                    c = function(e) {
                        for (var t = !1;;) {
                            if (t = l(e.get(0))) break;
                            if (e = e.parent(), !e.length || e.hasClass("fancybox-stage") || e.is("body")) break
                        }
                        return t
                    },
                    u = function(e) {
                        var t = this;
                        t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(t, "ontouchstart"))
                    };
                u.prototype.destroy = function() {
                    this.$container.off(".fb.touch")
                }, u.prototype.ontouchstart = function(i) {
                    var a = this,
                        l = n(i.target),
                        u = a.instance,
                        d = u.current,
                        h = d.$content,
                        p = "touchstart" == i.type;
                    if (p && a.$container.off("mousedown.fb.touch"), !d || a.instance.isAnimating || a.instance.isClosing) return i.stopPropagation(), void i.preventDefault();
                    if ((!i.originalEvent || 2 != i.originalEvent.button) && l.length && !r(l) && !r(l.parent()) && !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (a.startPoints = s(i), a.startPoints && !(a.startPoints.length > 1 && u.isSliding))) {
                        if (a.$target = l, a.$content = h, a.canTap = !0, a.opts = d.opts.touch, n(t).off(".fb.touch"), n(t).on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(a, "ontouchend")), n(t).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(a, "ontouchmove")), !a.opts && !u.canPan() || !l.is(a.$stage) && !a.$stage.find(l).length) return void(l.is("img") && i.preventDefault());
                        i.stopPropagation(), n.fancybox.isMobile && (c(a.$target) || c(a.$target.parent())) || i.preventDefault(), a.canvasWidth = Math.round(d.$slide[0].clientWidth), a.canvasHeight = Math.round(d.$slide[0].clientHeight), a.startTime = (new Date).getTime(), a.distanceX = a.distanceY = a.distance = 0, a.isPanning = !1, a.isSwiping = !1, a.isZooming = !1, a.sliderStartPos = a.sliderLastPos || {
                            top: 0,
                            left: 0
                        }, a.contentStartPos = n.fancybox.getTranslate(a.$content), a.contentLastPos = null, 1 !== a.startPoints.length || a.isZooming || (a.canTap = !u.isSliding, "image" === d.type && (a.contentStartPos.width > a.canvasWidth + 1 || a.contentStartPos.height > a.canvasHeight + 1) ? (n.fancybox.stop(a.$content), a.$content.css("transition-duration", "0ms"), a.isPanning = !0) : a.isSwiping = !0, a.$container.addClass("fancybox-controls--isGrabbing")), 2 !== a.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (a.isZooming = !0, a.isSwiping = !1, a.isPanning = !1, n.fancybox.stop(a.$content), a.$content.css("transition-duration", "0ms"), a.centerPointStartX = .5 * (a.startPoints[0].x + a.startPoints[1].x) - n(e).scrollLeft(), a.centerPointStartY = .5 * (a.startPoints[0].y + a.startPoints[1].y) - n(e).scrollTop(), a.percentageOfImageAtPinchPointX = (a.centerPointStartX - a.contentStartPos.left) / a.contentStartPos.width, a.percentageOfImageAtPinchPointY = (a.centerPointStartY - a.contentStartPos.top) / a.contentStartPos.height, a.startDistanceBetweenFingers = o(a.startPoints[0], a.startPoints[1]))
                    }
                }, u.prototype.ontouchmove = function(e) {
                    var t = this;
                    if (t.newPoints = s(e), n.fancybox.isMobile && (c(t.$target) || c(t.$target.parent()))) return e.stopPropagation(), void(t.canTap = !1);
                    if ((t.opts || t.instance.canPan()) && t.newPoints && t.newPoints.length && (t.distanceX = o(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = o(t.newPoints[0], t.startPoints[0], "y"), t.distance = o(t.newPoints[0], t.startPoints[0]), t.distance > 0)) {
                        if (!t.$target.is(t.$stage) && !t.$stage.find(t.$target).length) return;
                        e.stopPropagation(), e.preventDefault(), t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()
                    }
                }, u.prototype.onSwipe = function() {
                    var t, s = this,
                        o = s.isSwiping,
                        r = s.sliderStartPos.left || 0;
                    !0 === o ? Math.abs(s.distance) > 10 && (s.canTap = !1, s.instance.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : s.instance.isSliding || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(e).width() > 800 ? s.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), s.isSwiping = t > 45 && t < 135 ? "y" : "x"), s.instance.isSliding = s.isSwiping, s.startPoints = s.newPoints, n.each(s.instance.slides, function(e, t) {
                        n.fancybox.stop(t.$slide), t.$slide.css("transition-duration", "0ms"), t.inTransition = !1, t.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(t.$slide).left)
                    }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()) : ("x" == o && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? r += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? r -= Math.pow(-s.distanceX, .8) : r += s.distanceX), s.sliderLastPos = {
                        top: "x" == o ? 0 : s.sliderStartPos.top + s.distanceY,
                        left: r
                    }, s.requestId && (a(s.requestId), s.requestId = null), s.requestId = i(function() {
                        s.sliderLastPos && (n.each(s.instance.slides, function(e, t) {
                            var i = t.pos - s.instance.currPos;
                            n.fancybox.setTranslate(t.$slide, {
                                top: s.sliderLastPos.top,
                                left: s.sliderLastPos.left + i * s.canvasWidth + i * t.opts.gutter
                            })
                        }), s.$container.addClass("fancybox-is-sliding"))
                    }))
                }, u.prototype.onPan = function() {
                    var e, t, s, o = this;
                    o.canTap = !1, e = o.contentStartPos.width > o.canvasWidth ? o.contentStartPos.left + o.distanceX : o.contentStartPos.left, t = o.contentStartPos.top + o.distanceY, s = o.limitMovement(e, t, o.contentStartPos.width, o.contentStartPos.height), s.scaleX = o.contentStartPos.scaleX, s.scaleY = o.contentStartPos.scaleY, o.contentLastPos = s, o.requestId && (a(o.requestId), o.requestId = null), o.requestId = i(function() {
                        n.fancybox.setTranslate(o.$content, o.contentLastPos)
                    })
                }, u.prototype.limitMovement = function(e, t, n, i) {
                    var a, s, o, r, l = this,
                        c = l.canvasWidth,
                        u = l.canvasHeight,
                        d = l.contentStartPos.left,
                        h = l.contentStartPos.top,
                        p = l.distanceX,
                        f = l.distanceY;
                    return a = Math.max(0, .5 * c - .5 * n), s = Math.max(0, .5 * u - .5 * i), o = Math.min(c - n, .5 * c - .5 * n), r = Math.min(u - i, .5 * u - .5 * i), n > c && (p > 0 && e > a && (e = a - 1 + Math.pow(-a + d + p, .8) || 0), p < 0 && e < o && (e = o + 1 - Math.pow(o - d - p, .8) || 0)), i > u && (f > 0 && t > s && (t = s - 1 + Math.pow(-s + h + f, .8) || 0), f < 0 && t < r && (t = r + 1 - Math.pow(r - h - f, .8) || 0)), {
                        top: t,
                        left: e
                    }
                }, u.prototype.limitPosition = function(e, t, n, i) {
                    var a = this,
                        s = a.canvasWidth,
                        o = a.canvasHeight;
                    return n > s ? (e = e > 0 ? 0 : e, e = e < s - n ? s - n : e) : e = Math.max(0, s / 2 - n / 2), i > o ? (t = t > 0 ? 0 : t, t = t < o - i ? o - i : t) : t = Math.max(0, o / 2 - i / 2), {
                        top: t,
                        left: e
                    }
                }, u.prototype.onZoom = function() {
                    var t = this,
                        s = t.contentStartPos.width,
                        r = t.contentStartPos.height,
                        l = t.contentStartPos.left,
                        c = t.contentStartPos.top,
                        u = o(t.newPoints[0], t.newPoints[1]),
                        d = u / t.startDistanceBetweenFingers,
                        h = Math.floor(s * d),
                        p = Math.floor(r * d),
                        f = (s - h) * t.percentageOfImageAtPinchPointX,
                        m = (r - p) * t.percentageOfImageAtPinchPointY,
                        g = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(),
                        y = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(),
                        v = g - t.centerPointStartX,
                        b = y - t.centerPointStartY,
                        w = l + (f + v),
                        x = c + (m + b),
                        k = {
                            top: x,
                            left: w,
                            scaleX: t.contentStartPos.scaleX * d,
                            scaleY: t.contentStartPos.scaleY * d
                        };
                    t.canTap = !1, t.newWidth = h, t.newHeight = p, t.contentLastPos = k, t.requestId && (a(t.requestId), t.requestId = null), t.requestId = i(function() {
                        n.fancybox.setTranslate(t.$content, t.contentLastPos)
                    })
                }, u.prototype.ontouchend = function(e) {
                    var i = this,
                        o = Math.max((new Date).getTime() - i.startTime, 1),
                        r = i.isSwiping,
                        l = i.isPanning,
                        c = i.isZooming;
                    if (i.endPoints = s(e), i.$container.removeClass("fancybox-controls--isGrabbing"), n(t).off(".fb.touch"), i.requestId && (a(i.requestId), i.requestId = null), i.isSwiping = !1, i.isPanning = !1, i.isZooming = !1, i.canTap) return i.onTap(e);
                    i.speed = 366, i.velocityX = i.distanceX / o * .5, i.velocityY = i.distanceY / o * .5, i.speedX = Math.max(.5 * i.speed, Math.min(1.5 * i.speed, 1 / Math.abs(i.velocityX) * i.speed)), l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(r)
                }, u.prototype.endSwiping = function(e) {
                    var t = this,
                        i = !1;
                    t.instance.isSliding = !1, t.sliderLastPos = null, "y" == e && Math.abs(t.distanceY) > 50 ? (n.fancybox.animate(t.instance.current.$slide, {
                        top: t.sliderStartPos.top + t.distanceY + 150 * t.velocityY,
                        opacity: 0
                    }, 150), i = t.instance.close(!0, 300)) : "x" == e && t.distanceX > 50 && t.instance.group.length > 1 ? i = t.instance.previous(t.speedX) : "x" == e && t.distanceX < -50 && t.instance.group.length > 1 && (i = t.instance.next(t.speedX)), !1 !== i || "x" != e && "y" != e || t.instance.jumpTo(t.instance.current.index, 150), t.$container.removeClass("fancybox-is-sliding")
                }, u.prototype.endPanning = function() {
                    var e, t, i, a = this;
                    a.contentLastPos && (!1 === a.opts.momentum ? (e = a.contentLastPos.left, t = a.contentLastPos.top) : (e = a.contentLastPos.left + a.velocityX * a.speed, t = a.contentLastPos.top + a.velocityY * a.speed), i = a.limitPosition(e, t, a.contentStartPos.width, a.contentStartPos.height), i.width = a.contentStartPos.width, i.height = a.contentStartPos.height, n.fancybox.animate(a.$content, i, 330))
                }, u.prototype.endZooming = function() {
                    var e, t, i, a, s = this,
                        o = s.instance.current,
                        r = s.newWidth,
                        l = s.newHeight;
                    s.contentLastPos && (e = s.contentLastPos.left, t = s.contentLastPos.top, a = {
                        top: t,
                        left: e,
                        width: r,
                        height: l,
                        scaleX: 1,
                        scaleY: 1
                    }, n.fancybox.setTranslate(s.$content, a), r < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : r > o.width || l > o.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (i = s.limitPosition(e, t, r, l), n.fancybox.setTranslate(s.content, n.fancybox.getTranslate(s.$content)), n.fancybox.animate(s.$content, i, 150)))
                }, u.prototype.onTap = function(e) {
                    var t, i = this,
                        a = n(e.target),
                        o = i.instance,
                        r = o.current,
                        l = e && s(e) || i.startPoints,
                        c = l[0] ? l[0].x - i.$stage.offset().left : 0,
                        u = l[0] ? l[0].y - i.$stage.offset().top : 0,
                        d = function(t) {
                            var a = r.opts[t];
                            if (n.isFunction(a) && (a = a.apply(o, [r, e])), a) switch (a) {
                                case "close":
                                    o.close(i.startEvent);
                                    break;
                                case "toggleControls":
                                    o.toggleControls(!0);
                                    break;
                                case "next":
                                    o.next();
                                    break;
                                case "nextOrClose":
                                    o.group.length > 1 ? o.next() : o.close(i.startEvent);
                                    break;
                                case "zoom":
                                    "image" == r.type && (r.isLoaded || r.$ghost) && (o.canPan() ? o.scaleToFit() : o.isScaledDown() ? o.scaleToActual(c, u) : o.group.length < 2 && o.close(i.startEvent))
                            }
                        };
                    if (!(e.originalEvent && 2 == e.originalEvent.button || o.isSliding || c > a[0].clientWidth + a.offset().left)) {
                        if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
                        else if (a.is(".fancybox-slide")) t = "Slide";
                        else {
                            if (!o.current.$content || !o.current.$content.has(e.target).length) return;
                            t = "Content"
                        }
                        if (i.tapped) {
                            if (clearTimeout(i.tapped), i.tapped = null, Math.abs(c - i.tapX) > 50 || Math.abs(u - i.tapY) > 50 || o.isSliding) return this;
                            d("dblclick" + t)
                        } else i.tapX = c, i.tapY = u, r.opts["dblclick" + t] && r.opts["dblclick" + t] !== r.opts["click" + t] ? i.tapped = setTimeout(function() {
                            i.tapped = null, d("click" + t)
                        }, 300) : d("click" + t);
                        return this
                    }
                }, n(t).on("onActivate.fb", function(e, t) {
                    t && !t.Guestures && (t.Guestures = new u(t))
                }), n(t).on("beforeClose.fb", function(e, t) {
                    t && t.Guestures && t.Guestures.destroy()
                })
            }(window, document, e || t),
            function(e, t) {
                "use strict";
                t.extend(!0, t.fancybox.defaults, {
                    btnTpl: {
                        slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
                    },
                    slideShow: {
                        autoStart: !1,
                        speed: 3e3
                    }
                });
                var n = function(e) {
                    this.instance = e, this.init()
                };
                t.extend(n.prototype, {
                    timer: null,
                    isActive: !1,
                    $button: null,
                    init: function() {
                        var e = this;
                        e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                            e.toggle()
                        }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide()
                    },
                    set: function(e) {
                        var t = this;
                        t.instance && t.instance.current && (!0 === e || t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                            t.isActive && t.instance.jumpTo((t.instance.currIndex + 1) % t.instance.group.length)
                        }, t.instance.current.opts.slideShow.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
                    },
                    clear: function() {
                        var e = this;
                        clearTimeout(e.timer), e.timer = null
                    },
                    start: function() {
                        var e = this,
                            t = e.instance.current;
                        t && (e.isActive = !0, e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.set(!0))
                    },
                    stop: function() {
                        var e = this,
                            t = e.instance.current;
                        e.clear(), e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1
                    },
                    toggle: function() {
                        var e = this;
                        e.isActive ? e.stop() : e.start()
                    }
                }), t(e).on({
                    "onInit.fb": function(e, t) {
                        t && !t.SlideShow && (t.SlideShow = new n(t))
                    },
                    "beforeShow.fb": function(e, t, n, i) {
                        var a = t && t.SlideShow;
                        i ? a && n.opts.slideShow.autoStart && a.start() : a && a.isActive && a.clear()
                    },
                    "afterShow.fb": function(e, t, n) {
                        var i = t && t.SlideShow;
                        i && i.isActive && i.set()
                    },
                    "afterKeydown.fb": function(n, i, a, s, o) {
                        var r = i && i.SlideShow;
                        !r || !a.opts.slideShow || 80 !== o && 32 !== o || t(e.activeElement).is("button,a,input") || (s.preventDefault(), r.toggle())
                    },
                    "beforeClose.fb onDeactivate.fb": function(e, t) {
                        var n = t && t.SlideShow;
                        n && n.stop()
                    }
                }), t(e).on("visibilitychange", function() {
                    var n = t.fancybox.getInstance(),
                        i = n && n.SlideShow;
                    i && i.isActive && (e.hidden ? i.clear() : i.set())
                })
            }(document, e || t),
            function(e, t) {
                "use strict";
                var n = function() {
                    var t, n, i, a = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                        ],
                        s = {};
                    for (n = 0; n < a.length; n++)
                        if ((t = a[n]) && t[1] in e) {
                            for (i = 0; i < t.length; i++) s[a[0][i]] = t[i];
                            return s
                        }
                    return !1
                }();
                if (!n) return void(t && t.fancybox && (t.fancybox.defaults.btnTpl.fullScreen = !1));
                var i = {
                    request: function(t) {
                        t = t || e.documentElement, t[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
                    },
                    exit: function() {
                        e[n.exitFullscreen]()
                    },
                    toggle: function(t) {
                        t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
                    },
                    isFullscreen: function() {
                        return Boolean(e[n.fullscreenElement])
                    },
                    enabled: function() {
                        return Boolean(e[n.fullscreenEnabled])
                    }
                };
                t.extend(!0, t.fancybox.defaults, {
                    btnTpl: {
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'
                    },
                    fullScreen: {
                        autoStart: !1
                    }
                }), t(e).on({
                    "onInit.fb": function(e, t) {
                        var n;
                        t && t.group[t.currIndex].opts.fullScreen ? (n = t.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                            e.stopPropagation(), e.preventDefault(), i.toggle(n[0])
                        }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(n[0]), t.FullScreen = i) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
                    },
                    "afterKeydown.fb": function(e, t, n, i, a) {
                        t && t.FullScreen && 70 === a && (i.preventDefault(), t.FullScreen.toggle(t.$refs.container[0]))
                    },
                    "beforeClose.fb": function(e) {
                        e && e.FullScreen && i.exit()
                    }
                }), t(e).on(n.fullscreenchange, function() {
                    var e = i.isFullscreen(),
                        n = t.fancybox.getInstance();
                    n && (n.current && "image" === n.current.type && n.isAnimating && (n.current.$content.css("transition", "none"), n.isAnimating = !1, n.update(!0, !0, 0)), n.trigger("onFullscreenChange", e), n.$refs.container.toggleClass("fancybox-is-fullscreen", e))
                })
            }(document, e || t),
            function(e, t) {
                "use strict";
                t.fancybox.defaults = t.extend(!0, {
                    btnTpl: {
                        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    }
                }, t.fancybox.defaults);
                var n = function(e) {
                    this.init(e)
                };
                t.extend(n.prototype, {
                    $button: null,
                    $grid: null,
                    $list: null,
                    isVisible: !1,
                    isActive: !1,
                    init: function(e) {
                        var t = this;
                        t.instance = e, e.Thumbs = t;
                        var n = e.group[0],
                            i = e.group[1];
                        t.opts = e.group[e.currIndex].opts.thumbs, t.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"), t.opts && n && i && ("image" == n.type || n.opts.thumb || n.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (t.$button.show().on("click", function() {
                            t.toggle()
                        }), t.isActive = !0) : t.$button.hide()
                    },
                    create: function() {
                        var e, n, i = this,
                            a = i.instance,
                            s = i.opts.parentEl;
                        i.$grid = t('<div class="fancybox-thumbs fancybox-thumbs-' + i.opts.axis + '"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)), e = "<ul>", t.each(a.group, function(t, i) {
                            n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null), n || "image" !== i.type || (n = i.src), n && n.length && (e += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
                        }), e += "</ul>", i.$list = t(e).appendTo(i.$grid).on("click", "li", function() {
                            a.jumpTo(t(this).data("index"))
                        }), i.$list.find("img").hide().one("load", function() {
                            var e, n, i, a, s = t(this).parent().removeClass("fancybox-thumbs-loading"),
                                o = s.outerWidth(),
                                r = s.outerHeight();
                            e = this.naturalWidth || this.width, n = this.naturalHeight || this.height, i = e / o, a = n / r, i >= 1 && a >= 1 && (i > a ? (e /= a, n = r) : (e = o, n /= i)), t(this).css({
                                width: Math.floor(e),
                                height: Math.floor(n),
                                "margin-top": n > r ? Math.floor(.3 * r - .3 * n) : Math.floor(.5 * r - .5 * n),
                                "margin-left": Math.floor(.5 * o - .5 * e)
                            }).show()
                        }).each(function() {
                            this.src = t(this).data("src")
                        }), "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right")) + a.group.length * i.$list.children().eq(0).outerWidth(!0) + "px")
                    },
                    focus: function(e) {
                        var t, n, i = this,
                            a = i.$list;
                        i.instance.current && (t = a.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = t.position(), "y" === i.opts.axis && (n.top < 0 || n.top > a.height() - t.outerHeight()) ? a.stop().animate({
                            scrollTop: a.scrollTop() + n.top
                        }, e) : "x" === i.opts.axis && (n.left < a.parent().scrollLeft() || n.left > a.parent().scrollLeft() + (a.parent().width() - t.outerWidth())) && a.parent().stop().animate({
                            scrollLeft: n.left
                        }, e))
                    },
                    update: function() {
                        this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
                    },
                    hide: function() {
                        this.isVisible = !1, this.update()
                    },
                    show: function() {
                        this.isVisible = !0, this.update()
                    },
                    toggle: function() {
                        this.isVisible = !this.isVisible, this.update()
                    }
                }), t(e).on({
                    "onInit.fb": function(e, t) {
                        var i;
                        t && !t.Thumbs && (i = new n(t), i.isActive && !0 === i.opts.autoStart && i.show())
                    },
                    "beforeShow.fb": function(e, t, n, i) {
                        var a = t && t.Thumbs;
                        a && a.isVisible && a.focus(i ? 0 : 250)
                    },
                    "afterKeydown.fb": function(e, t, n, i, a) {
                        var s = t && t.Thumbs;
                        s && s.isActive && 71 === a && (i.preventDefault(), s.toggle())
                    },
                    "beforeClose.fb": function(e, t) {
                        var n = t && t.Thumbs;
                        n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
                    }
                })
            }(document, e),
            function(e, t) {
                "use strict";

                function n(e) {
                    var t = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#x2F;",
                        "`": "&#x60;",
                        "=": "&#x3D;"
                    };
                    return String(e).replace(/[&<>"'`=\/]/g, function(e) {
                        return t[e]
                    })
                }
                t.extend(!0, t.fancybox.defaults, {
                    btnTpl: {
                        share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
                    },
                    share: {
                        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a href="https://www.facebook.com/sharer/sharer.php?u={{src}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#3b5998"><path d="M27.6 3h-23.2c-.8 0-1.4.6-1.4 1.4v23.1c0 .9.6 1.5 1.4 1.5h12.5v-10.1h-3.4v-3.9h3.4v-2.9c0-3.4 2.1-5.2 5-5.2 1.4 0 2.7.1 3 .2v3.5h-2.1c-1.6 0-1.9.8-1.9 1.9v2.5h3.9l-.5 3.9h-3.4v10.1h6.6c.8 0 1.4-.6 1.4-1.4v-23.2c.1-.8-.5-1.4-1.3-1.4z"></path></svg><span>Facebook</span></a><a href="https://www.pinterest.com/pin/create/button/?url={{src}}&amp;description={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#c92228"><path d="M16 3c-7.2 0-13 5.8-13 13 0 5.5 3.4 10.2 8.3 12.1-.1-1-.2-2.6 0-3.7.2-1 1.5-6.5 1.5-6.5s-.4-.8-.4-1.9c0-1.8 1-3.2 2.4-3.2 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1.1 4.3-.3 1.3.6 2.3 1.9 2.3 2.3 0 4.1-2.4 4.1-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.9 2.8-5.9 5.6 0 1.1.4 2.3 1 3 .1.1.1.2.1.4-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.6-.8-2.6-3.1-2.6-5 0-4.1 3-7.9 8.6-7.9 4.5 0 8 3.2 8 7.5 0 4.5-2.8 8.1-6.7 8.1-1.3 0-2.6-.7-3-1.5 0 0-.7 2.5-.8 3.1-.3 1.1-1.1 2.5-1.6 3.4 1.2.4 2.5.6 3.8.6 7.2 0 13-5.8 13-13 0-7.1-5.8-12.9-13-12.9z"></path></svg><span>Pinterest</span></a><a href="https://twitter.com/intent/tweet?url={{src}}&amp;text={{descr}}" target="_blank" class="fancybox-share_button"><svg version="1.1" viewBox="0 0 32 32" fill="#1da1f2"><path d="M30 7.3c-1 .5-2.1.8-3.3.9 1.2-.7 2.1-1.8 2.5-3.2-1.1.7-2.3 1.1-3.6 1.4-1-1.1-2.5-1.8-4.2-1.8-3.2 0-5.7 2.6-5.7 5.7 0 .5.1.9.1 1.3-4.8-.2-9-2.5-11.8-6-.5.9-.8 1.9-.8 3 0 2 1 3.8 2.6 4.8-.9 0-1.8-.3-2.6-.7v.1c0 2.8 2 5.1 4.6 5.6-.5.1-1 .2-1.5.2-.4 0-.7 0-1.1-.1.7 2.3 2.9 3.9 5.4 4-2 1.5-4.4 2.5-7.1 2.5-.5 0-.9 0-1.4-.1 2.5 1.6 5.6 2.6 8.8 2.6 10.6 0 16.3-8.8 16.3-16.3v-.7c1.1-1 2-2 2.8-3.2z"></path></svg><span>Twitter</span></a></p><p><input type="text" value="{{src_raw}}" onfocus="this.select()" /></p></div>'
                    }
                }), t(e).on("click", "[data-fancybox-share]", function() {
                    var e, i, a = t.fancybox.getInstance();
                    a && (e = !1 === a.current.opts.hash ? a.current.src : window.location, i = a.current.opts.share.tpl.replace(/\{\{src\}\}/g, encodeURIComponent(e)).replace(/\{\{src_raw\}\}/g, n(e)).replace(/\{\{descr\}\}/g, a.$caption ? encodeURIComponent(a.$caption.text()) : ""), t.fancybox.open({
                        src: a.translate(a, i),
                        type: "html",
                        opts: {
                            animationEffect: "fade",
                            animationDuration: 250
                        }
                    }))
                })
            }(document, e || t),
            function(e, t, n) {
                "use strict";

                function i() {
                    var e = t.location.hash.substr(1),
                        n = e.split("-"),
                        i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1,
                        a = n.join("-");
                    return i < 1 && (i = 1), {
                        hash: e,
                        index: i,
                        gallery: a
                    }
                }

                function a(e) {
                    var t;
                    "" !== e.gallery && (t = n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1), t.length || (t = n("#" + n.escapeSelector(e.gallery))), t.length && (o = !1, t.trigger("click")))
                }

                function s(e) {
                    var t;
                    return !!e && (t = e.current ? e.current.opts : e.opts, t.hash || (t.$orig ? t.$orig.data("fancybox") : ""))
                }
                n.escapeSelector || (n.escapeSelector = function(e) {
                    return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    })
                });
                var o = !0,
                    r = null,
                    l = null;
                n(function() {
                    !1 !== n.fancybox.defaults.hash && (n(e).on({
                        "onInit.fb": function(e, t) {
                            var n, a;
                            !1 !== t.group[t.currIndex].opts.hash && (n = i(), (a = s(t)) && n.gallery && a == n.gallery && (t.currIndex = n.index - 1))
                        },
                        "beforeShow.fb": function(n, i, a) {
                            var c;
                            a && !1 !== a.opts.hash && (c = s(i)) && "" !== c && (t.location.hash.indexOf(c) < 0 && (i.opts.origHash = t.location.hash), r = c + (i.group.length > 1 ? "-" + (a.index + 1) : ""), "replaceState" in t.history ? (l && clearTimeout(l), l = setTimeout(function() {
                                t.history[o ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + r), l = null, o = !1
                            }, 300)) : t.location.hash = r)
                        },
                        "beforeClose.fb": function(i, a, o) {
                            var c, u;
                            l && clearTimeout(l), !1 !== o.opts.hash && (c = s(a), u = a && a.opts.origHash ? a.opts.origHash : "", c && "" !== c && ("replaceState" in history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + u) : (t.location.hash = u, n(t).scrollTop(a.scrollTop).scrollLeft(a.scrollLeft))), r = null)
                        }
                    }), n(t).on("hashchange.fb", function() {
                        var e = i();
                        n.fancybox.getInstance() ? !r || r === e.gallery + "-" + e.index || 1 === e.index && r == e.gallery || (r = null, n.fancybox.close()) : "" !== e.gallery && a(e)
                    }), setTimeout(function() {
                        a(i())
                    }, 50))
                })
            }(document, window, e || t)
    }).call(t, n(0), n(0))
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        a = n.n(i),
        s = function(e, t) {
            this.saveEls = e, this.unsaveEls = t, this.save = this.save.bind(this), this.unsave = this.unsave.bind(this)
        };
    s.prototype.setup = function() {
        var e = this;
        this.saveEls && this.saveEls.forEach(function(t) {
            t.addEventListener("click", e.save), t.appendChild(e.generatedSaveNotification())
        }), this.unsaveEls && this.unsaveEls.forEach(function(t) {
            t.addEventListener("click", e.unsave)
        })
    }, s.prototype.save = function(e) {
        var t = a()(e.target.closest("button")),
            n = t.data("storyid"),
            i = t.find("[data-saved-story-notification]");
        t.toggleClass("is-saved").addClass("saved-label").one("mouseleave", function() {
            t.one("transitionend", function() {
                t.removeClass("saved-label")
            })
        }), t.hasClass("is-saved") || t.attr("data-saved-story-notification") && t.attr("data-saved-story-notification").indexOf("show") > -1 ? i.attr("data-saved-story-notification", "show").one("transitionend", function() {
            var e = document.querySelector("[data-saved-story]").getBoundingClientRect(),
                t = i.get(0).getBoundingClientRect(),
                n = {
                    x: e.left + e.width - (t.left + t.width / 3),
                    y: e.top + e.height - (t.top + t.height / .95)
                };
            i.attr("data-saved-story-notification", "show move").css("transform", "scale(1) translate(" + n.x + "px, " + n.y + "px)")
        }) : i.attr("data-saved-story-notification", "reset").css("transform", ""), this.sendRequest(n), e.preventDefault()
    }, s.prototype.positionNotification = function() {}, s.prototype.unsave = function(e) {
        var t = a()(e.target.closest("button")),
            n = t.data("storyid");
        e.preventDefault(), this.sendRequest(n, function(e) {
            e.success && t.parents(".cards__item").fadeOut(function() {
                a()(this).remove(), a()(".cards__item").length < 1 && a()("[data-saved-stories-empty]").get(0).setAttribute("data-saved-stories-empty", "show")
            })
        })
    }, s.prototype.sendRequest = function(e, t) {
        a.a.post({
            url: app_vars.ajax_url,
            data: {
                action: "toggle_saved_story",
                story_id: e,
                app_nonce: app_vars.app_nonce
            },
            success: t
        })
    }, s.prototype.generatedSaveNotification = function() {
        var e = document.createElement("b");
        return e.setAttribute("data-saved-story-notification", ""), e
    }, t.a = s
}, function(e, t, n) {
    "use strict";
    var i = function(e) {
        e && (this.el = e, this.drawer = this.el.querySelector("[data-drawer-content]"), this.button = this.el.querySelector("[data-drawer-button]"), this.children = [].slice.call(this.el.querySelectorAll("[data-drawer-item]")), this.toggleDrawer = this.toggleDrawer.bind(this))
    };
    i.prototype.setup = function() {
        this.el && (this.el.dataset.drawerActive = !0, this.button.addEventListener("click", this.toggleDrawer))
    }, i.prototype.toggleDrawer = function() {
        this.el.dataset.drawerOpen = "true" !== this.el.dataset.drawerOpen
    }, t.a = i
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = function(e) {
            e && (this.container = e, this.popupShares = [].slice.call(e.querySelectorAll("[data-share]")), this.handlePopupClick = this.handlePopupClick.bind(this))
        };
        n.prototype.setup = function() {
            var e = this;
            this.container && this.popupShares.forEach(function(t) {
                t.addEventListener("click", e.handlePopupClick)
            })
        }, n.prototype.handlePopupClick = function(t) {
            var n = t.target;
            "a" !== n.nodeName.toLowerCase() && (n = e(n).closest("a").get(0)), t.preventDefault(), window.open(n.href, "Emergence Magazine", "height=350, width=600")
        }, t.a = n
    }).call(t, n(0))
}, function(e, t, n) {
    "use strict";
    var i = n(1),
        a = n.n(i),
        s = function(e) {
            this.el = e, this.video = e.querySelector("video"), this.image = e.querySelector("img"), this.handleProgress = this.handleProgress.bind(this)
        };
    s.prototype.setup = function() {
        if (this.el) {
            a()().setup({
                step: [this.el],
                offset: .5,
                threshold: 1,
                progress: !0
            }).onStepProgress(this.handleProgress), this.video && this.video.setAttribute("data-media-parallax-child", ""), this.image && this.image.setAttribute("data-media-parallax-child", "")
        }
    }, s.prototype.handleProgress = function(e) {
        var t = e.progress,
            n = -20 * t;
        this.video && (this.video.style.transform = "translateY(" + n + "vh)"), this.image && (this.image.style.transform = "translateY(" + n + "vh)")
    }, t.a = s
}, function(e, t, n) {
    "use strict";
    var i = n(2),
        a = n.n(i),
        s = function(e) {
            this.el = e, this.sources = [].slice.call(e.querySelectorAll("source")).sort(function(e, t) {
                return parseInt(e.getAttribute("size"), 10) - parseInt(t.getAttribute("size"), 10)
            }).filter(function(e) {
                return "360" !== e.getAttribute("size")
            }), this.handleResize = a()(this.handleResize.bind(this), 500)
        };
    s.prototype.setup = function() {
        !this.el || this.sources.length < 1 || null !== this.el.getAttribute("data-will-autoplay") && window.Foundation && window.Foundation.MediaQuery && (window.addEventListener("resize", this.handleResize), window.Foundation.MediaQuery.atLeast("medium") && this.handleResize())
    }, s.prototype.handleResize = function() {
        if (window.Foundation.MediaQuery.atLeast("large") && this.sources.length > 1) return this.el.src = this.sources[1].src, void window.removeEventListener("resize", this.handleResize);
        window.Foundation.MediaQuery.atLeast("medium") && (this.el.src = this.sources[0].src)
    }, t.a = s
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        a = n.n(i),
        s = n(10),
        o = n.n(s),
        r = n(1),
        l = n.n(r),
        c = n(49),
        u = function(e) {
            e && (this.mediacontainer = e, this.mediaPositioner = ".media-player__positioner", this.mediaParent = a()(this.mediacontainer).closest(".media-player").get(0), this.mediaType = e.dataset.player, this.autoFullscreen = e.dataset.playerFullscreen, this.autoplay = e.getAttribute("data-will-autoplay"), this.setupTopBar = this.setupTopBarListener.bind(this), this.fixTopBar = this.fixTopBar.bind(this), this.unfixTopBar = this.unfixTopBar.bind(this), this.handlePlayerClick = this.handlePlayerClick.bind(this))
        };
    u.prototype.setup = function() {
        var e = this;
        if (this.mediacontainer && null === this.autoplay) {
            var t = ["play", "current-time", "duration", "progress"];
            "podcast" !== this.mediaType && "audio" !== this.mediaType && t.push("mute", "settings", "fullscreen"), this.player = new o.a(this.mediacontainer, {
                controls: t,
                settings: ["quality", "captions"],
                loadSprite: !1,
                iconPrefix: "icon-media",
                storage: {
                    enabled: !1
                },
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                }
            }), (window.localStorage && window.localStorage.plyr || window.localStorage && null === window.localStorage.plyr) && (window.localStorage.plyr = ""), "small" !== window.Foundation.MediaQuery.current && (this.waveform = new c.a(this.mediacontainer, this.mediaPositioner, this.player)), this.player.on("play", function() {
                a()(e.mediacontainer).parents(".media-player").removeClass("media-player--inactive"), window.Foundation && "small" === window.Foundation.MediaQuery.current && "video" === e.mediaType && e.player.fullscreen.enter()
            }), a()(this.mediacontainer).parents(".media-player").on("click", ".media-player__button", this.handlePlayerClick), "audio" === this.mediaType && a()(this.mediacontainer).closest(".media-player").next('[data-media-cta="audio"]').on("click", function(t) {
                e.isInitialized ? e.player.play() : e.handlePlayerClick(t), e.fixTopBar()
            }), a()(document).on("click", ".story-audio__button", function(t) {
                e.isInitialized ? e.player.play() : e.handlePlayerClick(t), e.fixTopBar()
            }).on("click", ".media-player__hide", function() {
                e.unfixTopBar(), e.player.pause()
            }), "podcast" === this.mediaType && "small" !== window.Foundation.MediaQuery.current && this.waveform.preload()
        }
    }, u.prototype.handlePlayerClick = function(e) {
        window.Foundation && "s" !== window.Foundation.MediaQuery.current && "video" === this.mediaType && a()(e.currentTarget).parents(".media-player").removeClass("media-player--inactive"), "podcast" !== this.mediaType && "audio" !== this.mediaType || this.setupTopBarListener(), "podcast" === this.mediaType && "small" !== window.Foundation.MediaQuery.current && this.waveform.setup();
        var t = this.mediacontainer.closest(".block-single-image-video__asset");
        t && t.classList.add("block-single-image-video__asset--openvideo"), this.player.play(), window.Foundation && "small" === window.Foundation.MediaQuery.current && "video" === this.mediaType && this.player.fullscreen.enter(), "video" === this.mediaType && this.autoFullscreen && this.player.fullscreen.enter(), this.isInitialized = !0
    }, u.prototype.preloadWaveSpectrum = function() {
        var e = this;
        story_vars.podcast_has_json && a.a.get({
            url: app_vars.ajax_url,
            data: {
                action: "get_audio_json",
                podcast_id: story_vars.podcast_id,
                app_nonce: app_vars.app_nonce
            },
            success: function(t) {
                e.waveSpectrum = t
            }
        })
    }, u.prototype.setupTopBarListener = function() {
        var e = this,
            t = l()(),
            n = l()();
        "podcast" === this.mediaType && t.setup({
            step: this.mediaPositioner,
            offset: 0,
            threshold: 1
        }).onStepEnter(function(t) {
            "up" === t.direction && e.unfixTopBar()
        }).onStepExit(function(t) {
            "down" === t.direction && e.fixTopBar()
        }), n.setup({
            step: ".story__content",
            offset: 0,
            threshold: 1
        }).onStepEnter(function(t) {
            "up" === t.direction && e.fixTopBar()
        }).onStepExit(function(t) {
            "down" === t.direction && e.unfixTopBar(!0)
        })
    }, u.prototype.fixTopBar = function() {
        a()(".media-player-fixed").removeClass("media-player-fixed"), a()("html").addClass("media-player-fixed"), a()(this.mediaParent).addClass("media-player-fixed"), a()(this.mediaPositioner).children(".plyr").slideUp(0).slideDown()
    }, u.prototype.unfixTopBar = function(e) {
        e ? a()(this.mediaPositioner).children(".plyr").slideUp() : (a()("html").removeClass("media-player-fixed"), a()(this.mediaParent).removeClass("media-player-fixed"))
    }, t.a = u
}, function(e, t, n) {
    "use strict";
    var i = n(0),
        a = n.n(i),
        s = n(50),
        o = n.n(s),
        r = function(e, t, n) {
            this.container = e, this.positioner = t, this.player = n
        };
    r.prototype.setup = function() {
        var e = this;
        if (window.AudioContext || window.webkitAudioContext) {
            var t = a()('<div class="waveform"></div>'),
                n = a()('<div class="plyr__progressing"></div>');
            n.append(t), a()(this.positioner).addClass("waveform--initialized").find(".plyr__controls").append(n), this.spectrum = o.a.create({
                container: ".waveform",
                waveColor: "rgba(255,255,255,0.5)",
                progressColor: "white",
                barHeight: 1,
                barWidth: 2,
                cursorWidth: 0,
                height: 200,
                responsive: !0,
                interact: !1,
                backend: !0 === window.story_vars.podcast_has_json ? "MediaElement" : "WebAudio"
            }), story_vars.podcast_has_json && this.waveSpectrum ? this.loadSpectrum(this.waveSpectrum) : this.loadSpectrum(), t.on("click", function(n) {
                var i = n.offsetX / t.width();
                e.player.currentTime = i * e.player.duration
            }), this.player.on("timeupdate", function() {
                e.spectrum.seekTo(e.player.currentTime / e.player.duration)
            }), story_vars.podcast_has_json || this.spectrum.on("ready", function() {
                a.a.post({
                    url: app_vars.ajax_url,
                    data: {
                        action: "save_audio_json",
                        audio_json: e.spectrum.exportPCM(1024, 1e3, !0),
                        podcast_id: story_vars.podcast_id,
                        app_nonce: app_vars.app_nonce
                    }
                })
            })
        }
    }, r.prototype.loadSpectrum = function(e) {
        this.spectrum.load(a()(this.container).children("source").attr("src"), e)
    }, r.prototype.preload = function() {
        var e = this;
        story_vars.podcast_has_json && a.a.get({
            url: app_vars.ajax_url,
            data: {
                action: "get_audio_json",
                podcast_id: story_vars.podcast_id,
                app_nonce: app_vars.app_nonce
            },
            success: function(t) {
                e.waveSpectrum = t
            }
        })
    }, t.a = r
}, function(e, t, n) {
    ! function(t, n) {
        e.exports = n()
    }("undefined" != typeof self && self, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var a = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 4)
        }([function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(5);
            Object.defineProperty(t, "ajax", {
                enumerable: !0,
                get: function() {
                    return i(a).default
                }
            });
            var s = n(6);
            Object.defineProperty(t, "getId", {
                enumerable: !0,
                get: function() {
                    return i(s).default
                }
            });
            var o = n(7);
            Object.defineProperty(t, "max", {
                enumerable: !0,
                get: function() {
                    return i(o).default
                }
            });
            var r = n(8);
            Object.defineProperty(t, "min", {
                enumerable: !0,
                get: function() {
                    return i(r).default
                }
            });
            var l = n(1);
            Object.defineProperty(t, "Observer", {
                enumerable: !0,
                get: function() {
                    return i(l).default
                }
            });
            var c = n(9);
            Object.defineProperty(t, "extend", {
                enumerable: !0,
                get: function() {
                    return i(c).default
                }
            });
            var u = n(10);
            Object.defineProperty(t, "style", {
                enumerable: !0,
                get: function() {
                    return i(u).default
                }
            });
            var d = n(2);
            Object.defineProperty(t, "requestAnimationFrame", {
                enumerable: !0,
                get: function() {
                    return i(d).default
                }
            });
            var h = n(11);
            Object.defineProperty(t, "frame", {
                enumerable: !0,
                get: function() {
                    return i(h).default
                }
            });
            var p = n(12);
            Object.defineProperty(t, "debounce", {
                enumerable: !0,
                get: function() {
                    return i(p).default
                }
            })
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e() {
                        i(this, e), this.handlers = null
                    }
                    return a(e, [{
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            this.handlers || (this.handlers = {});
                            var i = this.handlers[e];
                            return i || (i = this.handlers[e] = []), i.push(t), {
                                name: e,
                                callback: t,
                                un: function(e, t) {
                                    return n.un(e, t)
                                }
                            }
                        }
                    }, {
                        key: "un",
                        value: function(e, t) {
                            if (this.handlers) {
                                var n = this.handlers[e],
                                    i = void 0;
                                if (n)
                                    if (t)
                                        for (i = n.length - 1; i >= 0; i--) n[i] == t && n.splice(i, 1);
                                    else n.length = 0
                            }
                        }
                    }, {
                        key: "unAll",
                        value: function() {
                            this.handlers = null
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            var n = this,
                                i = function i() {
                                    for (var a = arguments.length, s = Array(a), o = 0; o < a; o++) s[o] = arguments[o];
                                    t.apply(n, s), setTimeout(function() {
                                        n.un(e, i)
                                    }, 0)
                                };
                            return this.on(e, i)
                        }
                    }, {
                        key: "fireEvent",
                        value: function(e) {
                            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                            if (this.handlers) {
                                var a = this.handlers[e];
                                a && a.forEach(function(e) {
                                    e.apply(void 0, n)
                                })
                            }
                        }
                    }]), e
                }();
            t.default = s, e.exports = t.default
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
                return setTimeout(e, 1e3 / 60)
            }).bind(window), e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                l = n(0),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(l),
                u = "playing",
                d = "paused",
                h = "finished",
                p = function(e) {
                    function t(e) {
                        var n, o;
                        a(this, t);
                        var r = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return r.audioContext = null, r.offlineAudioContext = null, r.stateBehaviors = (n = {}, i(n, u, {
                            init: function() {
                                this.addOnAudioProcess()
                            },
                            getPlayedPercents: function() {
                                var e = this.getDuration();
                                return this.getCurrentTime() / e || 0
                            },
                            getCurrentTime: function() {
                                return this.startPosition + this.getPlayedTime()
                            }
                        }), i(n, d, {
                            init: function() {
                                this.removeOnAudioProcess()
                            },
                            getPlayedPercents: function() {
                                var e = this.getDuration();
                                return this.getCurrentTime() / e || 0
                            },
                            getCurrentTime: function() {
                                return this.startPosition
                            }
                        }), i(n, h, {
                            init: function() {
                                this.removeOnAudioProcess(), this.fireEvent("finish")
                            },
                            getPlayedPercents: function() {
                                return 1
                            },
                            getCurrentTime: function() {
                                return this.getDuration()
                            }
                        }), n), r.params = e, r.ac = e.audioContext || r.getAudioContext(), r.lastPlay = r.ac.currentTime, r.startPosition = 0, r.scheduledPause = null, r.states = (o = {}, i(o, u, Object.create(r.stateBehaviors[u])), i(o, d, Object.create(r.stateBehaviors[d])), i(o, h, Object.create(r.stateBehaviors[h])), o), r.analyser = null, r.buffer = null, r.filters = [], r.gainNode = null, r.mergedPeaks = null, r.offlineAc = null, r.peaks = null, r.playbackRate = 1, r.analyser = null, r.scriptNode = null, r.source = null, r.splitPeaks = [], r.state = null, r.explicitDuration = null, r
                    }
                    return o(t, e), r(t, [{
                        key: "supportsWebAudio",
                        value: function() {
                            return !(!window.AudioContext && !window.webkitAudioContext)
                        }
                    }, {
                        key: "getAudioContext",
                        value: function() {
                            return window.WaveSurferAudioContext || (window.WaveSurferAudioContext = new(window.AudioContext || window.webkitAudioContext)), window.WaveSurferAudioContext
                        }
                    }, {
                        key: "getOfflineAudioContext",
                        value: function(e) {
                            return window.WaveSurferOfflineAudioContext || (window.WaveSurferOfflineAudioContext = new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 2, e)), window.WaveSurferOfflineAudioContext
                        }
                    }]), r(t, [{
                        key: "init",
                        value: function() {
                            this.createVolumeNode(), this.createScriptNode(), this.createAnalyserNode(), this.setState(d), this.setPlaybackRate(this.params.audioRate), this.setLength(0)
                        }
                    }, {
                        key: "disconnectFilters",
                        value: function() {
                            this.filters && (this.filters.forEach(function(e) {
                                e && e.disconnect()
                            }), this.filters = null, this.analyser.connect(this.gainNode))
                        }
                    }, {
                        key: "setState",
                        value: function(e) {
                            this.state !== this.states[e] && (this.state = this.states[e], this.state.init.call(this))
                        }
                    }, {
                        key: "setFilter",
                        value: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this.setFilters(t)
                        }
                    }, {
                        key: "setFilters",
                        value: function(e) {
                            this.disconnectFilters(), e && e.length && (this.filters = e, this.analyser.disconnect(), e.reduce(function(e, t) {
                                return e.connect(t), t
                            }, this.analyser).connect(this.gainNode))
                        }
                    }, {
                        key: "createScriptNode",
                        value: function() {
                            this.ac.createScriptProcessor ? this.scriptNode = this.ac.createScriptProcessor(t.scriptBufferSize) : this.scriptNode = this.ac.createJavaScriptNode(t.scriptBufferSize), this.scriptNode.connect(this.ac.destination)
                        }
                    }, {
                        key: "addOnAudioProcess",
                        value: function() {
                            var e = this;
                            this.scriptNode.onaudioprocess = function() {
                                var t = e.getCurrentTime();
                                t >= e.getDuration() ? (e.setState(h), e.fireEvent("pause")) : t >= e.scheduledPause ? e.pause() : e.state === e.states[u] && e.fireEvent("audioprocess", t)
                            }
                        }
                    }, {
                        key: "removeOnAudioProcess",
                        value: function() {
                            this.scriptNode.onaudioprocess = null
                        }
                    }, {
                        key: "createAnalyserNode",
                        value: function() {
                            this.analyser = this.ac.createAnalyser(), this.analyser.connect(this.gainNode)
                        }
                    }, {
                        key: "createVolumeNode",
                        value: function() {
                            this.ac.createGain ? this.gainNode = this.ac.createGain() : this.gainNode = this.ac.createGainNode(), this.gainNode.connect(this.ac.destination)
                        }
                    }, {
                        key: "setSinkId",
                        value: function(e) {
                            if (e) {
                                var t = new window.Audio;
                                if (!t.setSinkId) return Promise.reject(new Error("setSinkId is not supported in your browser"));
                                t.autoplay = !0;
                                var n = this.ac.createMediaStreamDestination();
                                return this.gainNode.disconnect(), this.gainNode.connect(n), t.src = URL.createObjectURL(n.stream), t.setSinkId(e)
                            }
                            return Promise.reject(new Error("Invalid deviceId: " + e))
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.gainNode.gain.setValueAtTime(e, this.ac.currentTime)
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.gainNode.gain.value
                        }
                    }, {
                        key: "decodeArrayBuffer",
                        value: function(e, t, n) {
                            this.offlineAc || (this.offlineAc = this.getOfflineAudioContext(this.ac ? this.ac.sampleRate : 44100)), this.offlineAc.decodeAudioData(e, function(e) {
                                return t(e)
                            }, n)
                        }
                    }, {
                        key: "setPeaks",
                        value: function(e, t) {
                            this.explicitDuration = t, this.peaks = e
                        }
                    }, {
                        key: "setLength",
                        value: function(e) {
                            if (!this.mergedPeaks || e != 2 * this.mergedPeaks.length - 1 + 2) {
                                this.splitPeaks = [], this.mergedPeaks = [];
                                var t = this.buffer ? this.buffer.numberOfChannels : 1,
                                    n = void 0;
                                for (n = 0; n < t; n++) this.splitPeaks[n] = [], this.splitPeaks[n][2 * (e - 1)] = 0, this.splitPeaks[n][2 * (e - 1) + 1] = 0;
                                this.mergedPeaks[2 * (e - 1)] = 0, this.mergedPeaks[2 * (e - 1) + 1] = 0
                            }
                        }
                    }, {
                        key: "getPeaks",
                        value: function(e, t, n) {
                            if (this.peaks) return this.peaks;
                            if (t = t || 0, n = n || e - 1, this.setLength(e), !this.buffer.length) {
                                var i = this.createBuffer(1, 4096, this.sampleRate);
                                this.buffer = i.buffer
                            }
                            var a = this.buffer.length / e,
                                s = ~~(a / 10) || 1,
                                o = this.buffer.numberOfChannels,
                                r = void 0;
                            for (r = 0; r < o; r++) {
                                var l = this.splitPeaks[r],
                                    c = this.buffer.getChannelData(r),
                                    u = void 0;
                                for (u = t; u <= n; u++) {
                                    var d = ~~(u * a),
                                        h = ~~(d + a),
                                        p = 0,
                                        f = 0,
                                        m = void 0;
                                    for (m = d; m < h; m += s) {
                                        var g = c[m];
                                        g > f && (f = g), g < p && (p = g)
                                    }
                                    l[2 * u] = f, l[2 * u + 1] = p, (0 == r || f > this.mergedPeaks[2 * u]) && (this.mergedPeaks[2 * u] = f), (0 == r || p < this.mergedPeaks[2 * u + 1]) && (this.mergedPeaks[2 * u + 1] = p)
                                }
                            }
                            return this.params.splitChannels ? this.splitPeaks : this.mergedPeaks
                        }
                    }, {
                        key: "getPlayedPercents",
                        value: function() {
                            return this.state.getPlayedPercents.call(this)
                        }
                    }, {
                        key: "disconnectSource",
                        value: function() {
                            this.source && this.source.disconnect()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.isPaused() || this.pause(), this.unAll(), this.buffer = null, this.disconnectFilters(), this.disconnectSource(), this.gainNode.disconnect(), this.scriptNode.disconnect(), this.analyser.disconnect(), this.params.closeAudioContext && ("function" == typeof this.ac.close && "closed" != this.ac.state && this.ac.close(), this.ac = null, this.params.audioContext ? this.params.audioContext = null : window.WaveSurferAudioContext = null, window.WaveSurferOfflineAudioContext = null)
                        }
                    }, {
                        key: "load",
                        value: function(e) {
                            this.startPosition = 0, this.lastPlay = this.ac.currentTime, this.buffer = e, this.createSource()
                        }
                    }, {
                        key: "createSource",
                        value: function() {
                            this.disconnectSource(), this.source = this.ac.createBufferSource(), this.source.start = this.source.start || this.source.noteGrainOn, this.source.stop = this.source.stop || this.source.noteOff, this.source.playbackRate.setValueAtTime(this.playbackRate, this.ac.currentTime), this.source.buffer = this.buffer, this.source.connect(this.analyser)
                        }
                    }, {
                        key: "isPaused",
                        value: function() {
                            return this.state !== this.states[u]
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.buffer ? this.buffer.duration : this.explicitDuration ? this.explicitDuration : 0
                        }
                    }, {
                        key: "seekTo",
                        value: function(e, t) {
                            if (this.buffer) return this.scheduledPause = null, null == e && (e = this.getCurrentTime()) >= this.getDuration() && (e = 0), null == t && (t = this.getDuration()), this.startPosition = e, this.lastPlay = this.ac.currentTime, this.state === this.states[h] && this.setState(d), {
                                start: e,
                                end: t
                            }
                        }
                    }, {
                        key: "getPlayedTime",
                        value: function() {
                            return (this.ac.currentTime - this.lastPlay) * this.playbackRate
                        }
                    }, {
                        key: "play",
                        value: function(e, t) {
                            if (this.buffer) {
                                this.createSource();
                                var n = this.seekTo(e, t);
                                e = n.start, t = n.end, this.scheduledPause = t, this.source.start(0, e, t - e), "suspended" == this.ac.state && this.ac.resume && this.ac.resume(), this.setState(u), this.fireEvent("play")
                            }
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.scheduledPause = null, this.startPosition += this.getPlayedTime(), this.source && this.source.stop(0), this.setState(d), this.fireEvent("pause")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.state.getCurrentTime.call(this)
                        }
                    }, {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.playbackRate
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            e = e || 1, this.isPaused() ? this.playbackRate = e : (this.pause(), this.playbackRate = e, this.play())
                        }
                    }]), t
                }(c.Observer);
            p.scriptBufferSize = 256, t.default = p, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                l = n(0),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(l),
                u = n(13),
                d = i(u),
                h = n(3),
                p = i(h),
                f = n(15),
                m = i(f),
                g = n(16),
                y = i(g),
                v = (function() {
                    function e(t, n) {
                        o(this, e)
                    }
                    r(e, [{
                        key: "create",
                        value: function(e) {}
                    }]), r(e, [{
                        key: "init",
                        value: function() {}
                    }, {
                        key: "destroy",
                        value: function() {}
                    }])
                }(), function(e) {
                    function t(e) {
                        var n;
                        o(this, t);
                        var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        if (i.defaultParams = {
                            audioContext: null,
                            audioRate: 1,
                            autoCenter: !0,
                            backend: "WebAudio",
                            barHeight: 1,
                            barGap: null,
                            container: null,
                            cursorColor: "#333",
                            cursorWidth: 1,
                            dragSelection: !0,
                            fillParent: !0,
                            forceDecode: !1,
                            height: 128,
                            hideScrollbar: !1,
                            interact: !0,
                            loopSelection: !0,
                            maxCanvasWidth: 4e3,
                            mediaContainer: null,
                            mediaControls: !1,
                            mediaType: "audio",
                            minPxPerSec: 20,
                            normalize: !1,
                            partialRender: !1,
                            pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
                            plugins: [],
                            progressColor: "#555",
                            removeMediaElementOnDestroy: !0,
                            renderer: d.default,
                            responsive: !1,
                            scrollParent: !1,
                            skipLength: 2,
                            splitChannels: !1,
                            waveColor: "#999"
                        }, i.backends = {
                            MediaElement: m.default,
                            WebAudio: p.default
                        }, i.util = c, i.params = c.extend({}, i.defaultParams, e), i.container = "string" == typeof e.container ? document.querySelector(i.params.container) : i.params.container, !i.container) throw new Error("Container element not found");
                        if (null == i.params.mediaContainer ? i.mediaContainer = i.container : "string" == typeof i.params.mediaContainer ? i.mediaContainer = document.querySelector(i.params.mediaContainer) : i.mediaContainer = i.params.mediaContainer, !i.mediaContainer) throw new Error("Media Container element not found");
                        if (i.params.maxCanvasWidth <= 1) throw new Error("maxCanvasWidth must be greater than 1");
                        if (i.params.maxCanvasWidth % 2 == 1) throw new Error("maxCanvasWidth must be an even number");
                        if (i.savedVolume = 0, i.isMuted = !1, i.tmpEvents = [], i.currentAjax = null, i.arraybuffer = null, i.drawer = null, i.backend = null, i.peakCache = null, "function" != typeof i.params.renderer) throw new Error("Renderer parameter is invalid");
                        i.Drawer = i.params.renderer, i.Backend = i.backends[i.params.backend], i.initialisedPluginList = {}, i.isDestroyed = !1, i.isReady = !1;
                        var s = 0;
                        return i._onResize = c.debounce(function() {
                            s == i.drawer.wrapper.clientWidth || i.params.scrollParent || (s = i.drawer.wrapper.clientWidth, i.drawer.fireEvent("redraw"))
                        }, "number" == typeof i.params.responsive ? i.params.responsive : 100), n = i, a(i, n)
                    }
                    return s(t, e), r(t, null, [{
                        key: "create",
                        value: function(e) {
                            return new t(e).init()
                        }
                    }]), r(t, [{
                        key: "init",
                        value: function() {
                            return this.registerPlugins(this.params.plugins), this.createDrawer(), this.createBackend(), this.createPeakCache(), this
                        }
                    }, {
                        key: "registerPlugins",
                        value: function(e) {
                            var t = this;
                            return e.forEach(function(e) {
                                return t.addPlugin(e)
                            }), e.forEach(function(e) {
                                e.deferInit || t.initPlugin(e.name)
                            }), this.fireEvent("plugins-registered", e), this
                        }
                    }, {
                        key: "addPlugin",
                        value: function(e) {
                            var t = this;
                            if (!e.name) throw new Error("Plugin does not have a name!");
                            if (!e.instance) throw new Error("Plugin " + e.name + " does not have an instance property!");
                            e.staticProps && Object.keys(e.staticProps).forEach(function(n) {
                                t[n] = e.staticProps[n]
                            });
                            var n = e.instance;
                            return Object.getOwnPropertyNames(c.Observer.prototype).forEach(function(e) {
                                n.prototype[e] = c.Observer.prototype[e]
                            }), this[e.name] = new n(e.params || {}, this), this.fireEvent("plugin-added", e.name), this
                        }
                    }, {
                        key: "initPlugin",
                        value: function(e) {
                            if (!this[e]) throw new Error("Plugin " + e + " has not been added yet!");
                            return this.initialisedPluginList[e] && this.destroyPlugin(e), this[e].init(), this.initialisedPluginList[e] = !0, this.fireEvent("plugin-initialised", e), this
                        }
                    }, {
                        key: "destroyPlugin",
                        value: function(e) {
                            if (!this[e]) throw new Error("Plugin " + e + " has not been added yet and cannot be destroyed!");
                            if (!this.initialisedPluginList[e]) throw new Error("Plugin " + e + " is not active and cannot be destroyed!");
                            if ("function" != typeof this[e].destroy) throw new Error("Plugin " + e + " does not have a destroy function!");
                            return this[e].destroy(), delete this.initialisedPluginList[e], this.fireEvent("plugin-destroyed", e), this
                        }
                    }, {
                        key: "destroyAllPlugins",
                        value: function() {
                            var e = this;
                            Object.keys(this.initialisedPluginList).forEach(function(t) {
                                return e.destroyPlugin(t)
                            })
                        }
                    }, {
                        key: "createDrawer",
                        value: function() {
                            var e = this;
                            this.drawer = new this.Drawer(this.container, this.params), this.drawer.init(), this.fireEvent("drawer-created", this.drawer), !1 !== this.params.responsive && (window.addEventListener("resize", this._onResize, !0), window.addEventListener("orientationchange", this._onResize, !0)), this.drawer.on("redraw", function() {
                                e.drawBuffer(), e.drawer.progress(e.backend.getPlayedPercents())
                            }), this.drawer.on("click", function(t, n) {
                                setTimeout(function() {
                                    return e.seekTo(n)
                                }, 0)
                            }), this.drawer.on("scroll", function(t) {
                                e.params.partialRender && e.drawBuffer(), e.fireEvent("scroll", t)
                            })
                        }
                    }, {
                        key: "createBackend",
                        value: function() {
                            var e = this;
                            this.backend && this.backend.destroy(), "AudioElement" == this.params.backend && (this.params.backend = "MediaElement"), "WebAudio" != this.params.backend || this.Backend.prototype.supportsWebAudio.call(null) || (this.params.backend = "MediaElement"), this.backend = new this.Backend(this.params), this.backend.init(), this.fireEvent("backend-created", this.backend), this.backend.on("finish", function() {
                                return e.fireEvent("finish")
                            }), this.backend.on("play", function() {
                                return e.fireEvent("play")
                            }), this.backend.on("pause", function() {
                                return e.fireEvent("pause")
                            }), this.backend.on("audioprocess", function(t) {
                                e.drawer.progress(e.backend.getPlayedPercents()), e.fireEvent("audioprocess", t)
                            })
                        }
                    }, {
                        key: "createPeakCache",
                        value: function() {
                            this.params.partialRender && (this.peakCache = new y.default)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.backend.getDuration()
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.backend.getCurrentTime()
                        }
                    }, {
                        key: "setCurrentTime",
                        value: function(e) {
                            this.getDuration() >= e ? this.seekTo(1) : this.seekTo(e / this.getDuration())
                        }
                    }, {
                        key: "play",
                        value: function(e, t) {
                            var n = this;
                            return this.fireEvent("interaction", function() {
                                return n.play(e, t)
                            }), this.backend.play(e, t)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            if (!this.backend.isPaused()) return this.backend.pause()
                        }
                    }, {
                        key: "playPause",
                        value: function() {
                            return this.backend.isPaused() ? this.play() : this.pause()
                        }
                    }, {
                        key: "isPlaying",
                        value: function() {
                            return !this.backend.isPaused()
                        }
                    }, {
                        key: "skipBackward",
                        value: function(e) {
                            this.skip(-e || -this.params.skipLength)
                        }
                    }, {
                        key: "skipForward",
                        value: function(e) {
                            this.skip(e || this.params.skipLength)
                        }
                    }, {
                        key: "skip",
                        value: function(e) {
                            var t = this.getDuration() || 1,
                                n = this.getCurrentTime() || 0;
                            n = Math.max(0, Math.min(t, n + (e || 0))), this.seekAndCenter(n / t)
                        }
                    }, {
                        key: "seekAndCenter",
                        value: function(e) {
                            this.seekTo(e), this.drawer.recenter(e)
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            var t = this;
                            if ("number" != typeof e || !isFinite(e) || e < 0 || e > 1) return console.error("Error calling wavesurfer.seekTo, parameter must be a number between 0 and 1!");
                            this.fireEvent("interaction", function() {
                                return t.seekTo(e)
                            });
                            var n = this.backend.isPaused();
                            n || this.backend.pause();
                            var i = this.params.scrollParent;
                            this.params.scrollParent = !1, this.backend.seekTo(e * this.getDuration()), this.drawer.progress(e), n || this.backend.play(), this.params.scrollParent = i, this.fireEvent("seek", e)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.pause(), this.seekTo(0), this.drawer.progress(0)
                        }
                    }, {
                        key: "setSinkId",
                        value: function(e) {
                            return this.backend.setSinkId(e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.backend.setVolume(e)
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.backend.getVolume()
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.backend.setPlaybackRate(e)
                        }
                    }, {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.backend.getPlaybackRate()
                        }
                    }, {
                        key: "toggleMute",
                        value: function() {
                            this.setMute(!this.isMuted)
                        }
                    }, {
                        key: "setMute",
                        value: function(e) {
                            e !== this.isMuted && (e ? (this.savedVolume = this.backend.getVolume(), this.backend.setVolume(0), this.isMuted = !0) : (this.backend.setVolume(this.savedVolume), this.isMuted = !1))
                        }
                    }, {
                        key: "getMute",
                        value: function() {
                            return this.isMuted
                        }
                    }, {
                        key: "getFilters",
                        value: function() {
                            return this.backend.filters || []
                        }
                    }, {
                        key: "toggleScroll",
                        value: function() {
                            this.params.scrollParent = !this.params.scrollParent, this.drawBuffer()
                        }
                    }, {
                        key: "toggleInteraction",
                        value: function() {
                            this.params.interact = !this.params.interact
                        }
                    }, {
                        key: "getWaveColor",
                        value: function() {
                            return this.params.waveColor
                        }
                    }, {
                        key: "setWaveColor",
                        value: function(e) {
                            this.params.waveColor = e, this.drawBuffer()
                        }
                    }, {
                        key: "getProgressColor",
                        value: function() {
                            return this.params.progressColor
                        }
                    }, {
                        key: "setProgressColor",
                        value: function(e) {
                            this.params.progressColor = e, this.drawBuffer()
                        }
                    }, {
                        key: "getCursorColor",
                        value: function() {
                            return this.params.cursorColor
                        }
                    }, {
                        key: "setCursorColor",
                        value: function(e) {
                            this.params.cursorColor = e, this.drawer.updateCursor()
                        }
                    }, {
                        key: "getHeight",
                        value: function() {
                            return this.params.height
                        }
                    }, {
                        key: "setHeight",
                        value: function(e) {
                            this.params.height = e, this.drawer.setHeight(e * this.params.pixelRatio), this.drawBuffer()
                        }
                    }, {
                        key: "drawBuffer",
                        value: function() {
                            var e = Math.round(this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio),
                                t = this.drawer.getWidth(),
                                n = e,
                                i = this.drawer.getScrollX(),
                                a = Math.max(i + t, n);
                            this.params.fillParent && (!this.params.scrollParent || e < t) && (n = t, i = 0, a = n);
                            var s = void 0;
                            if (this.params.partialRender) {
                                var o = this.peakCache.addRangeToPeakCache(n, i, a),
                                    r = void 0;
                                for (r = 0; r < o.length; r++) s = this.backend.getPeaks(n, o[r][0], o[r][1]), this.drawer.drawPeaks(s, n, o[r][0], o[r][1])
                            } else s = this.backend.getPeaks(n, i, a), this.drawer.drawPeaks(s, n, i, a);
                            this.fireEvent("redraw", s, n)
                        }
                    }, {
                        key: "zoom",
                        value: function(e) {
                            e ? (this.params.minPxPerSec = e, this.params.scrollParent = !0) : (this.params.minPxPerSec = this.defaultParams.minPxPerSec, this.params.scrollParent = !1), this.drawBuffer(), this.drawer.progress(this.backend.getPlayedPercents()), this.drawer.recenter(this.getCurrentTime() / this.getDuration()), this.fireEvent("zoom", e)
                        }
                    }, {
                        key: "loadArrayBuffer",
                        value: function(e) {
                            var t = this;
                            this.decodeArrayBuffer(e, function(e) {
                                t.isDestroyed || t.loadDecodedBuffer(e)
                            })
                        }
                    }, {
                        key: "loadDecodedBuffer",
                        value: function(e) {
                            this.backend.load(e), this.drawBuffer(), this.fireEvent("ready"), this.isReady = !0
                        }
                    }, {
                        key: "loadBlob",
                        value: function(e) {
                            var t = this,
                                n = new FileReader;
                            n.addEventListener("progress", function(e) {
                                return t.onProgress(e)
                            }), n.addEventListener("load", function(e) {
                                return t.loadArrayBuffer(e.target.result)
                            }), n.addEventListener("error", function() {
                                return t.fireEvent("error", "Error reading file")
                            }), n.readAsArrayBuffer(e), this.empty()
                        }
                    }, {
                        key: "load",
                        value: function(e, t, n, i) {
                            if (this.empty(), n) {
                                var a = {
                                        "Preload is not 'auto', 'none' or 'metadata'": -1 === ["auto", "metadata", "none"].indexOf(n),
                                        "Peaks are not provided": !t,
                                        "Backend is not of type MediaElement": "MediaElement" !== this.params.backend,
                                        "Url is not of type string": "string" != typeof e
                                    },
                                    s = Object.keys(a).filter(function(e) {
                                        return a[e]
                                    });
                                s.length && (console.warn("Preload parameter of wavesurfer.load will be ignored because:\n\t- " + s.join("\n\t- ")), n = null)
                            }
                            switch (this.params.backend) {
                                case "WebAudio":
                                    return this.loadBuffer(e, t, i);
                                case "MediaElement":
                                    return this.loadMediaElement(e, t, n, i)
                            }
                        }
                    }, {
                        key: "loadBuffer",
                        value: function(e, t, n) {
                            var i = this,
                                a = function(t) {
                                    return t && i.tmpEvents.push(i.once("ready", t)), i.getArrayBuffer(e, function(e) {
                                        return i.loadArrayBuffer(e)
                                    })
                                };
                            if (!t) return a();
                            this.backend.setPeaks(t, n), this.drawBuffer(), this.tmpEvents.push(this.once("interaction", a))
                        }
                    }, {
                        key: "loadMediaElement",
                        value: function(e, t, n, i) {
                            var a = this,
                                s = e;
                            if ("string" == typeof e) this.backend.load(s, this.mediaContainer, t, n);
                            else {
                                var o = e;
                                this.backend.loadElt(o, t), s = o.src
                            }
                            this.tmpEvents.push(this.backend.once("canplay", function() {
                                a.drawBuffer(), a.fireEvent("ready"), a.isReady = !0
                            }), this.backend.once("error", function(e) {
                                return a.fireEvent("error", e)
                            })), t && this.backend.setPeaks(t, i), t && !this.params.forceDecode || !this.backend.supportsWebAudio() || this.getArrayBuffer(s, function(e) {
                                a.decodeArrayBuffer(e, function(e) {
                                    a.backend.buffer = e, a.backend.setPeaks(null), a.drawBuffer(), a.fireEvent("waveform-ready")
                                })
                            })
                        }
                    }, {
                        key: "decodeArrayBuffer",
                        value: function(e, t) {
                            var n = this;
                            this.arraybuffer = e, this.backend.decodeArrayBuffer(e, function(i) {
                                n.isDestroyed || n.arraybuffer != e || (t(i), n.arraybuffer = null)
                            }, function() {
                                return n.fireEvent("error", "Error decoding audiobuffer")
                            })
                        }
                    }, {
                        key: "getArrayBuffer",
                        value: function(e, t) {
                            var n = this,
                                i = c.ajax({
                                    url: e,
                                    responseType: "arraybuffer"
                                });
                            return this.currentAjax = i, this.tmpEvents.push(i.on("progress", function(e) {
                                n.onProgress(e)
                            }), i.on("success", function(e, i) {
                                t(e), n.currentAjax = null
                            }), i.on("error", function(e) {
                                n.fireEvent("error", "XHR error: " + e.target.statusText), n.currentAjax = null
                            })), i
                        }
                    }, {
                        key: "onProgress",
                        value: function(e) {
                            var t = void 0;
                            t = e.lengthComputable ? e.loaded / e.total : e.loaded / (e.loaded + 1e6), this.fireEvent("loading", Math.round(100 * t), e.target)
                        }
                    }, {
                        key: "exportPCM",
                        value: function(e, t, n, i) {
                            e = e || 1024, i = i || 0, t = t || 1e4, n = n || !1;
                            var a = this.backend.getPeaks(e, i),
                                s = [].map.call(a, function(e) {
                                    return Math.round(e * t) / t
                                }),
                                o = JSON.stringify(s);
                            return n || window.open("data:application/json;charset=utf-8," + encodeURIComponent(o)), o
                        }
                    }, {
                        key: "exportImage",
                        value: function(e, t) {
                            return e || (e = "image/png"), t || (t = 1), this.drawer.getImage(e, t)
                        }
                    }, {
                        key: "cancelAjax",
                        value: function() {
                            this.currentAjax && (this.currentAjax.xhr.abort(), this.currentAjax = null)
                        }
                    }, {
                        key: "clearTmpEvents",
                        value: function() {
                            this.tmpEvents.forEach(function(e) {
                                return e.un()
                            })
                        }
                    }, {
                        key: "empty",
                        value: function() {
                            this.backend.isPaused() || (this.stop(), this.backend.disconnectSource()), this.cancelAjax(), this.clearTmpEvents(), this.drawer.progress(0), this.drawer.setWidth(0), this.drawer.drawPeaks({
                                length: this.drawer.getWidth()
                            }, 0)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyAllPlugins(), this.fireEvent("destroy"), this.cancelAjax(), this.clearTmpEvents(), this.unAll(), !1 !== this.params.responsive && (window.removeEventListener("resize", this._onResize, !0), window.removeEventListener("orientationchange", this._onResize, !0)), this.backend.destroy(), this.drawer.destroy(), this.isDestroyed = !0, this.arraybuffer = null
                        }
                    }]), t
                }(c.Observer));
            v.util = c, t.default = v, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                var t = new s.default,
                    n = new XMLHttpRequest,
                    i = !1;
                return n.open(e.method || "GET", e.url, !0), n.responseType = e.responseType || "json", n.addEventListener("progress", function(e) {
                    t.fireEvent("progress", e), e.lengthComputable && e.loaded == e.total && (i = !0)
                }), n.addEventListener("load", function(e) {
                    i || t.fireEvent("progress", e), t.fireEvent("load", e), 200 == n.status || 206 == n.status ? t.fireEvent("success", n.response, e) : t.fireEvent("error", e)
                }), n.addEventListener("error", function(e) {
                    return t.fireEvent("error", e)
                }), n.send(), t.xhr = n, t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i;
            var a = n(1),
                s = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(a);
            e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i() {
                return "wavesurfer_" + Math.random().toString(32).substring(2)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                var t = -1 / 0;
                return Object.keys(e).forEach(function(n) {
                    e[n] > t && (t = e[n])
                }), t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                var t = Number(1 / 0);
                return Object.keys(e).forEach(function(n) {
                    e[n] < t && (t = e[n])
                }), t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return n.forEach(function(t) {
                    Object.keys(t).forEach(function(n) {
                        e[n] = t[n]
                    })
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                return Object.keys(t).forEach(function(n) {
                    e.style[n] !== t[n] && (e.style[n] = t[n])
                }), e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e) {
                return function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return (0, s.default)(function() {
                        return e.apply(void 0, n)
                    })
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i;
            var a = n(2),
                s = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(a);
            e.exports = t.default
        }, function(e, t) {
            e.exports = function(e, t, n) {
                function i() {
                    var c = Date.now() - r;
                    c < t && c >= 0 ? a = setTimeout(i, t - c) : (a = null, n || (l = e.apply(o, s), o = s = null))
                }
                var a, s, o, r, l;
                null == t && (t = 100);
                var c = function() {
                    o = this, s = arguments, r = Date.now();
                    var c = n && !a;
                    return a || (a = setTimeout(i, t)), c && (l = e.apply(o, s), o = s = null), l
                };
                return c.clear = function() {
                    a && (clearTimeout(a), a = null)
                }, c.flush = function() {
                    a && (l = e.apply(o, s), o = s = null, clearTimeout(a), a = null)
                }, c
            }
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                r = n(14),
                l = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(r),
                c = n(0),
                u = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(c),
                d = function(e) {
                    function t(e, n) {
                        i(this, t);
                        var s = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                        return s.maxCanvasWidth = n.maxCanvasWidth, s.maxCanvasElementWidth = Math.round(n.maxCanvasWidth / n.pixelRatio), s.hasProgressCanvas = n.waveColor != n.progressColor, s.halfPixel = .5 / n.pixelRatio, s.canvases = [], s.progressWave = null, s
                    }
                    return s(t, e), o(t, [{
                        key: "init",
                        value: function() {
                            this.createWrapper(), this.createElements()
                        }
                    }, {
                        key: "createElements",
                        value: function() {
                            this.progressWave = this.wrapper.appendChild(this.style(document.createElement("wave"), {
                                position: "absolute",
                                zIndex: 3,
                                left: 0,
                                top: 0,
                                bottom: 0,
                                overflow: "hidden",
                                width: "0",
                                display: "none",
                                boxSizing: "border-box",
                                borderRightStyle: "solid",
                                pointerEvents: "none"
                            })), this.addCanvas(), this.updateCursor()
                        }
                    }, {
                        key: "updateCursor",
                        value: function() {
                            this.style(this.progressWave, {
                                borderRightWidth: this.params.cursorWidth + "px",
                                borderRightColor: this.params.cursorColor
                            })
                        }
                    }, {
                        key: "updateSize",
                        value: function() {
                            for (var e = this, t = Math.round(this.width / this.params.pixelRatio), n = Math.ceil(t / this.maxCanvasElementWidth); this.canvases.length < n;) this.addCanvas();
                            for (; this.canvases.length > n;) this.removeCanvas();
                            this.canvases.forEach(function(t, n) {
                                var i = e.maxCanvasWidth + 2 * Math.ceil(e.params.pixelRatio / 2);
                                n == e.canvases.length - 1 && (i = e.width - e.maxCanvasWidth * (e.canvases.length - 1)), e.updateDimensions(t, i, e.height), e.clearWaveForEntry(t)
                            })
                        }
                    }, {
                        key: "addCanvas",
                        value: function() {
                            var e = {},
                                t = this.maxCanvasElementWidth * this.canvases.length;
                            e.wave = this.wrapper.appendChild(this.style(document.createElement("canvas"), {
                                position: "absolute",
                                zIndex: 2,
                                left: t + "px",
                                top: 0,
                                bottom: 0,
                                height: "100%",
                                pointerEvents: "none"
                            })), e.waveCtx = e.wave.getContext("2d"), this.hasProgressCanvas && (e.progress = this.progressWave.appendChild(this.style(document.createElement("canvas"), {
                                position: "absolute",
                                left: t + "px",
                                top: 0,
                                bottom: 0,
                                height: "100%"
                            })), e.progressCtx = e.progress.getContext("2d")), this.canvases.push(e)
                        }
                    }, {
                        key: "removeCanvas",
                        value: function() {
                            var e = this.canvases.pop();
                            e.wave.parentElement.removeChild(e.wave), this.hasProgressCanvas && e.progress.parentElement.removeChild(e.progress)
                        }
                    }, {
                        key: "updateDimensions",
                        value: function(e, t, n) {
                            var i = Math.round(t / this.params.pixelRatio),
                                a = Math.round(this.width / this.params.pixelRatio);
                            e.start = e.waveCtx.canvas.offsetLeft / a || 0, e.end = e.start + i / a, e.waveCtx.canvas.width = t, e.waveCtx.canvas.height = n, this.style(e.waveCtx.canvas, {
                                width: i + "px"
                            }), this.style(this.progressWave, {
                                display: "block"
                            }), this.hasProgressCanvas && (e.progressCtx.canvas.width = t, e.progressCtx.canvas.height = n, this.style(e.progressCtx.canvas, {
                                width: i + "px"
                            }))
                        }
                    }, {
                        key: "clearWave",
                        value: function() {
                            var e = this;
                            this.canvases.forEach(function(t) {
                                return e.clearWaveForEntry(t)
                            })
                        }
                    }, {
                        key: "clearWaveForEntry",
                        value: function(e) {
                            e.waveCtx.clearRect(0, 0, e.waveCtx.canvas.width, e.waveCtx.canvas.height), this.hasProgressCanvas && e.progressCtx.clearRect(0, 0, e.progressCtx.canvas.width, e.progressCtx.canvas.height)
                        }
                    }, {
                        key: "drawBars",
                        value: function(e, t, n, i) {
                            var a = this;
                            return this.prepareDraw(e, t, n, i, function(e) {
                                var t = e.absmax,
                                    s = e.hasMinVals,
                                    o = (e.height, e.offsetY),
                                    r = e.halfH,
                                    l = e.peaks;
                                if (void 0 !== n) {
                                    var c = s ? 2 : 1,
                                        u = l.length / c,
                                        d = a.params.barWidth * a.params.pixelRatio,
                                        h = null === a.params.barGap ? Math.max(a.params.pixelRatio, ~~(d / 2)) : Math.max(a.params.pixelRatio, a.params.barGap * a.params.pixelRatio),
                                        p = d + h,
                                        f = u / a.width,
                                        m = n,
                                        g = i,
                                        y = void 0;
                                    for (y = m; y < g; y += p) {
                                        var v = l[Math.floor(y * f * c)] || 0,
                                            b = Math.round(v / t * r);
                                        a.fillRect(y + a.halfPixel, r - b + o, d + a.halfPixel, 2 * b)
                                    }
                                }
                            })
                        }
                    }, {
                        key: "drawWave",
                        value: function(e, t, n, i) {
                            var a = this;
                            return this.prepareDraw(e, t, n, i, function(e) {
                                var t = e.absmax,
                                    s = e.hasMinVals,
                                    o = (e.height, e.offsetY),
                                    r = e.halfH,
                                    l = e.peaks;
                                if (!s) {
                                    var c = [],
                                        u = l.length,
                                        d = void 0;
                                    for (d = 0; d < u; d++) c[2 * d] = l[d], c[2 * d + 1] = -l[d];
                                    l = c
                                }
                                void 0 !== n && a.drawLine(l, t, r, o, n, i), a.fillRect(0, r + o - a.halfPixel, a.width, a.halfPixel)
                            })
                        }
                    }, {
                        key: "drawLine",
                        value: function(e, t, n, i, a, s) {
                            var o = this;
                            this.canvases.forEach(function(r) {
                                o.setFillStyles(r), o.drawLineToContext(r, r.waveCtx, e, t, n, i, a, s), o.drawLineToContext(r, r.progressCtx, e, t, n, i, a, s)
                            })
                        }
                    }, {
                        key: "drawLineToContext",
                        value: function(e, t, n, i, a, s, o, r) {
                            if (t) {
                                var l = n.length / 2,
                                    c = this.params.fillParent && this.width != l ? this.width / l : 1,
                                    u = Math.round(l * e.start),
                                    d = Math.round(l * e.end) + 1;
                                if (!(u > r || d < o)) {
                                    var h = Math.min(u, o),
                                        p = Math.max(d, r),
                                        f = void 0,
                                        m = void 0;
                                    for (t.beginPath(), t.moveTo((h - u) * c + this.halfPixel, a + s), f = h; f < p; f++) {
                                        var g = n[2 * f] || 0,
                                            y = Math.round(g / i * a);
                                        t.lineTo((f - u) * c + this.halfPixel, a - y + s)
                                    }
                                    for (m = p - 1; m >= h; m--) {
                                        var v = n[2 * m + 1] || 0,
                                            b = Math.round(v / i * a);
                                        t.lineTo((m - u) * c + this.halfPixel, a - b + s)
                                    }
                                    t.closePath(), t.fill()
                                }
                            }
                        }
                    }, {
                        key: "fillRect",
                        value: function(e, t, n, i) {
                            var a = Math.floor(e / this.maxCanvasWidth),
                                s = Math.min(Math.ceil((e + n) / this.maxCanvasWidth) + 1, this.canvases.length),
                                o = void 0;
                            for (o = a; o < s; o++) {
                                var r = this.canvases[o],
                                    l = o * this.maxCanvasWidth,
                                    c = {
                                        x1: Math.max(e, o * this.maxCanvasWidth),
                                        y1: t,
                                        x2: Math.min(e + n, o * this.maxCanvasWidth + r.waveCtx.canvas.width),
                                        y2: t + i
                                    };
                                c.x1 < c.x2 && (this.setFillStyles(r), this.fillRectToContext(r.waveCtx, c.x1 - l, c.y1, c.x2 - c.x1, c.y2 - c.y1), this.fillRectToContext(r.progressCtx, c.x1 - l, c.y1, c.x2 - c.x1, c.y2 - c.y1))
                            }
                        }
                    }, {
                        key: "prepareDraw",
                        value: function(e, t, n, i, a) {
                            var s = this;
                            return u.frame(function() {
                                if (e[0] instanceof Array) {
                                    var o = e;
                                    if (s.params.splitChannels) return s.setHeight(o.length * s.params.height * s.params.pixelRatio), o.forEach(function(e, t) {
                                        return s.prepareDraw(e, t, n, i, a)
                                    });
                                    e = o[0]
                                }
                                var r = 1 / s.params.barHeight;
                                if (s.params.normalize) {
                                    var l = u.max(e),
                                        c = u.min(e);
                                    r = -c > l ? -c : l
                                }
                                var d = [].some.call(e, function(e) {
                                        return e < 0
                                    }),
                                    h = s.params.height * s.params.pixelRatio;
                                return a({
                                    absmax: r,
                                    hasMinVals: d,
                                    height: h,
                                    offsetY: h * t || 0,
                                    halfH: h / 2,
                                    peaks: e
                                })
                            })()
                        }
                    }, {
                        key: "fillRectToContext",
                        value: function(e, t, n, i, a) {
                            e && e.fillRect(t, n, i, a)
                        }
                    }, {
                        key: "setFillStyles",
                        value: function(e) {
                            e.waveCtx.fillStyle = this.params.waveColor, this.hasProgressCanvas && (e.progressCtx.fillStyle = this.params.progressColor)
                        }
                    }, {
                        key: "getImage",
                        value: function(e, t) {
                            var n = this.canvases.map(function(n) {
                                return n.wave.toDataURL(e, t)
                            });
                            return n.length > 1 ? n : n[0]
                        }
                    }, {
                        key: "updateProgress",
                        value: function(e) {
                            this.style(this.progressWave, {
                                width: e + "px"
                            })
                        }
                    }]), t
                }(l.default);
            t.default = d, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                r = n(0),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(r),
                c = function(e) {
                    function t(e, n) {
                        i(this, t);
                        var s = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return s.container = e, s.params = n, s.width = 0, s.height = n.height * s.params.pixelRatio, s.lastPos = 0, s.wrapper = null, s
                    }
                    return s(t, e), o(t, [{
                        key: "style",
                        value: function(e, t) {
                            return l.style(e, t)
                        }
                    }, {
                        key: "createWrapper",
                        value: function() {
                            this.wrapper = this.container.appendChild(document.createElement("wave")), this.style(this.wrapper, {
                                display: "block",
                                position: "relative",
                                userSelect: "none",
                                webkitUserSelect: "none",
                                height: this.params.height + "px"
                            }), (this.params.fillParent || this.params.scrollParent) && this.style(this.wrapper, {
                                width: "100%",
                                overflowX: this.params.hideScrollbar ? "hidden" : "auto",
                                overflowY: "hidden"
                            }), this.setupWrapperEvents()
                        }
                    }, {
                        key: "handleEvent",
                        value: function(e, t) {
                            !t && e.preventDefault();
                            var n = e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
                                i = this.wrapper.getBoundingClientRect(),
                                a = this.width,
                                s = this.getWidth(),
                                o = void 0;
                            return !this.params.fillParent && a < s ? (o = (n - i.left) * this.params.pixelRatio / a || 0) > 1 && (o = 1) : o = (n - i.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth || 0, o
                        }
                    }, {
                        key: "setupWrapperEvents",
                        value: function() {
                            var e = this;
                            this.wrapper.addEventListener("click", function(t) {
                                var n = e.wrapper.offsetHeight - e.wrapper.clientHeight;
                                if (0 != n) {
                                    var i = e.wrapper.getBoundingClientRect();
                                    if (t.clientY >= i.bottom - n) return
                                }
                                e.params.interact && e.fireEvent("click", t, e.handleEvent(t))
                            }), this.wrapper.addEventListener("scroll", function(t) {
                                return e.fireEvent("scroll", t)
                            })
                        }
                    }, {
                        key: "drawPeaks",
                        value: function(e, t, n, i) {
                            this.setWidth(t) || this.clearWave(), this.params.barWidth ? this.drawBars(e, 0, n, i) : this.drawWave(e, 0, n, i)
                        }
                    }, {
                        key: "resetScroll",
                        value: function() {
                            null !== this.wrapper && (this.wrapper.scrollLeft = 0)
                        }
                    }, {
                        key: "recenter",
                        value: function(e) {
                            var t = this.wrapper.scrollWidth * e;
                            this.recenterOnPosition(t, !0)
                        }
                    }, {
                        key: "recenterOnPosition",
                        value: function(e, t) {
                            var n = this.wrapper.scrollLeft,
                                i = ~~(this.wrapper.clientWidth / 2),
                                a = this.wrapper.scrollWidth - this.wrapper.clientWidth,
                                s = e - i,
                                o = s - n;
                            0 != a && (!t && -i <= o && o < i && (o = Math.max(-5, Math.min(5, o)), s = n + o), (s = Math.max(0, Math.min(a, s))) != n && (this.wrapper.scrollLeft = s))
                        }
                    }, {
                        key: "getScrollX",
                        value: function() {
                            return Math.round(this.wrapper.scrollLeft * this.params.pixelRatio)
                        }
                    }, {
                        key: "getWidth",
                        value: function() {
                            return Math.round(this.container.clientWidth * this.params.pixelRatio)
                        }
                    }, {
                        key: "setWidth",
                        value: function(e) {
                            return this.width != e && (this.width = e, this.params.fillParent || this.params.scrollParent ? this.style(this.wrapper, {
                                width: ""
                            }) : this.style(this.wrapper, {
                                width: ~~(this.width / this.params.pixelRatio) + "px"
                            }), this.updateSize(), !0)
                        }
                    }, {
                        key: "setHeight",
                        value: function(e) {
                            return e != this.height && (this.height = e, this.style(this.wrapper, {
                                height: ~~(this.height / this.params.pixelRatio) + "px"
                            }), this.updateSize(), !0)
                        }
                    }, {
                        key: "progress",
                        value: function(e) {
                            var t = 1 / this.params.pixelRatio,
                                n = Math.round(e * this.width) * t;
                            if (n < this.lastPos || n - this.lastPos >= t) {
                                if (this.lastPos = n, this.params.scrollParent && this.params.autoCenter) {
                                    var i = ~~(this.wrapper.scrollWidth * e);
                                    this.recenterOnPosition(i)
                                }
                                this.updateProgress(n)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.unAll(), this.wrapper && (this.wrapper.parentNode == this.container && this.container.removeChild(this.wrapper), this.wrapper = null)
                        }
                    }, {
                        key: "updateCursor",
                        value: function() {}
                    }, {
                        key: "updateSize",
                        value: function() {}
                    }, {
                        key: "drawBars",
                        value: function(e, t, n, i) {}
                    }, {
                        key: "drawWave",
                        value: function(e, t, n, i) {}
                    }, {
                        key: "clearWave",
                        value: function() {}
                    }, {
                        key: "updateProgress",
                        value: function(e) {}
                    }]), t
                }(l.Observer);
            t.default = c, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                r = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === a) {
                        var s = Object.getPrototypeOf(t);
                        return null === s ? void 0 : e(s, n, i)
                    }
                    if ("value" in a) return a.value;
                    var o = a.get;
                    return void 0 !== o ? o.call(i) : void 0
                },
                l = n(3),
                c = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(l),
                u = n(0),
                d = (function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    t.default = e
                }(u), function(e) {
                    function t(e) {
                        i(this, t);
                        var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.params = e, n.media = {
                            currentTime: 0,
                            duration: 0,
                            paused: !0,
                            playbackRate: 1,
                            play: function() {},
                            pause: function() {},
                            volume: 0
                        }, n.mediaType = e.mediaType.toLowerCase(), n.elementPosition = e.elementPosition, n.peaks = null, n.playbackRate = 1, n.volume = 1, n.buffer = null, n.onPlayEnd = null, n
                    }
                    return s(t, e), o(t, [{
                        key: "init",
                        value: function() {
                            this.setPlaybackRate(this.params.audioRate), this.createTimer()
                        }
                    }, {
                        key: "createTimer",
                        value: function() {
                            var e = this,
                                t = function t() {
                                    e.isPaused() || (e.fireEvent("audioprocess", e.getCurrentTime()), (window.requestAnimationFrame || window.webkitRequestAnimationFrame)(t))
                                };
                            this.on("play", t), this.on("pause", function() {
                                e.fireEvent("audioprocess", e.getCurrentTime())
                            })
                        }
                    }, {
                        key: "load",
                        value: function(e, t, n, i) {
                            var a = document.createElement(this.mediaType);
                            a.controls = this.params.mediaControls, a.autoplay = this.params.autoplay || !1, a.preload = null == i ? "auto" : i, a.src = e, a.style.width = "100%";
                            var s = t.querySelector(this.mediaType);
                            s && t.removeChild(s), t.appendChild(a), this._load(a, n)
                        }
                    }, {
                        key: "loadElt",
                        value: function(e, t) {
                            e.controls = this.params.mediaControls, e.autoplay = this.params.autoplay || !1, this._load(e, t)
                        }
                    }, {
                        key: "_load",
                        value: function(e, t) {
                            var n = this;
                            "function" == typeof e.load && e.load(), e.addEventListener("error", function() {
                                n.fireEvent("error", "Error loading media element")
                            }), e.addEventListener("canplay", function() {
                                n.fireEvent("canplay")
                            }), e.addEventListener("ended", function() {
                                n.fireEvent("finish")
                            }), e.addEventListener("play", function() {
                                n.fireEvent("play")
                            }), e.addEventListener("pause", function() {
                                n.fireEvent("pause")
                            }), this.media = e, this.peaks = t, this.onPlayEnd = null, this.buffer = null, this.setPlaybackRate(this.playbackRate), this.setVolume(this.volume)
                        }
                    }, {
                        key: "isPaused",
                        value: function() {
                            return !this.media || this.media.paused
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            if (this.explicitDuration) return this.explicitDuration;
                            var e = (this.buffer || this.media).duration;
                            return e >= 1 / 0 && (e = this.media.seekable.end(0)), e
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.media && this.media.currentTime
                        }
                    }, {
                        key: "getPlayedPercents",
                        value: function() {
                            return this.getCurrentTime() / this.getDuration() || 0
                        }
                    }, {
                        key: "getPlaybackRate",
                        value: function() {
                            return this.playbackRate || this.media.playbackRate
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.playbackRate = e || 1, this.media.playbackRate = this.playbackRate
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            null != e && (this.media.currentTime = e), this.clearPlayEnd()
                        }
                    }, {
                        key: "play",
                        value: function(e, t) {
                            this.seekTo(e);
                            var n = this.media.play();
                            return t && this.setPlayEnd(t), n
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var e = void 0;
                            return this.media && (e = this.media.pause()), this.clearPlayEnd(), e
                        }
                    }, {
                        key: "setPlayEnd",
                        value: function(e) {
                            var t = this;
                            this._onPlayEnd = function(n) {
                                n >= e && (t.pause(), t.seekTo(e))
                            }, this.on("audioprocess", this._onPlayEnd)
                        }
                    }, {
                        key: "clearPlayEnd",
                        value: function() {
                            this._onPlayEnd && (this.un("audioprocess", this._onPlayEnd), this._onPlayEnd = null)
                        }
                    }, {
                        key: "getPeaks",
                        value: function(e, n, i) {
                            return this.buffer ? r(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getPeaks", this).call(this, e, n, i) : this.peaks || []
                        }
                    }, {
                        key: "setSinkId",
                        value: function(e) {
                            return e ? this.media.setSinkId ? this.media.setSinkId(e) : Promise.reject(new Error("setSinkId is not supported in your browser")) : Promise.reject(new Error("Invalid deviceId: " + e))
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.volume || this.media.volume
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.volume = e, this.media.volume = this.volume
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.pause(), this.unAll(), this.params.removeMediaElementOnDestroy && this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media), this.media = null
                        }
                    }]), t
                }(c.default));
            t.default = d, e.exports = t.default
        }, function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e() {
                        i(this, e), this.clearPeakCache()
                    }
                    return a(e, [{
                        key: "clearPeakCache",
                        value: function() {
                            this.peakCacheRanges = [], this.peakCacheLength = -1
                        }
                    }, {
                        key: "addRangeToPeakCache",
                        value: function(e, t, n) {
                            e != this.peakCacheLength && (this.clearPeakCache(), this.peakCacheLength = e);
                            for (var i = [], a = 0; a < this.peakCacheRanges.length && this.peakCacheRanges[a] < t;) a++;
                            for (a % 2 == 0 && i.push(t); a < this.peakCacheRanges.length && this.peakCacheRanges[a] <= n;) i.push(this.peakCacheRanges[a]), a++;
                            a % 2 == 0 && i.push(n), i = i.filter(function(e, t, n) {
                                return 0 == t ? e != n[t + 1] : t == n.length - 1 ? e != n[t - 1] : e != n[t - 1] && e != n[t + 1]
                            }), this.peakCacheRanges = this.peakCacheRanges.concat(i), this.peakCacheRanges = this.peakCacheRanges.sort(function(e, t) {
                                return e - t
                            }).filter(function(e, t, n) {
                                return 0 == t ? e != n[t + 1] : t == n.length - 1 ? e != n[t - 1] : e != n[t - 1] && e != n[t + 1]
                            });
                            var s = [];
                            for (a = 0; a < i.length; a += 2) s.push([i[a], i[a + 1]]);
                            return s
                        }
                    }, {
                        key: "getCacheRanges",
                        value: function() {
                            var e = [],
                                t = void 0;
                            for (t = 0; t < this.peakCacheRanges.length; t += 2) e.push([this.peakCacheRanges[t], this.peakCacheRanges[t + 1]]);
                            return e
                        }
                    }]), e
                }();
            t.default = s, e.exports = t.default
        }])
    })
}, function(e, t, n) {
    "use strict";
    var i = n(7);
    t.a = {
        init: function() {
            new i.a(document.querySelector("[data-em-contactlabels]"), "p, li", ["login-remember"]).setup()
        },
        finalize: function() {}
    }
}, function(e, t, n) {
    "use strict";
    var i = n(7);
    t.a = {
        init: function() {
            new i.a(document.querySelector("[data-em-contactlabels]"), ".wppb-form-field").setup()
        },
        finalize: function() {}
    }
}, function(e, t) {}]);