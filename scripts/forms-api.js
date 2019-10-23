! function() {
    var i = void 0;
    ! function o(a, s, c) {
        function l(t, e) {
            if (!s[t]) {
                if (!a[t]) {
                    var r = !1;
                    if (!e && r) return r(t, !0);
                    if (u) return u(t, !0);
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var i = s[t] = {
                    exports: {}
                };
                a[t][0].call(i.exports, function(e) {
                    return l(a[t][1][e] || e)
                }, i, i.exports, o, a, s, c)
            }
            return s[t].exports
        }
        for (var u = !1, e = 0; e < c.length; e++) l(c[e]);
        return l
    }({
        1: [function(e, t, r) {
            "use strict";
            var n, i = (n = e("./forms/conditional-elements.js")) && n.__esModule ? n : {
                default: n
            };
            var o = window.mc4wp || {},
                a = e("gator"),
                s = e("./forms/forms.js"),
                c = window.mc4wp_forms_config || {},
                l = e("./misc/scroll-to-element.js");
            var u, f, d, m, h, p, g = a(document.body);
            if (g.on("submit", ".mc4wp-form", function(e) {
                var t = s.getByElement(e.target || e.srcElement);
                e.defaultPrevented || s.trigger(t.id + ".submit", [t, e]), e.defaultPrevented || s.trigger("submit", [t, e])
            }), g.on("focus", ".mc4wp-form", function(e) {
                var t = s.getByElement(e.target || e.srcElement);
                t.started || (s.trigger(t.id + ".started", [t, e]), s.trigger("started", [t, e]), t.started = !0)
            }), g.on("change", ".mc4wp-form", function(e) {
                var t = s.getByElement(e.target || e.srcElement);
                s.trigger("change", [t, e]), s.trigger(t.id + ".change", [t, e])
            }), i.default.init(), o.listeners) {
                for (var v = o.listeners, y = 0; y < v.length; y++) s.on(v[y].event, v[y].callback);
                delete o.listeners
            }
            if (o.forms = s, c.submitted_form) {
                var b = c.submitted_form,
                    w = document.getElementById(b.element_id),
                    E = s.getByElement(w);
                u = E, f = b.event, d = b.errors, m = b.data, h = Date.now(), p = document.body.clientHeight, d && u.setData(m), window.scrollY <= 10 && c.auto_scroll && l(u.element), window.addEventListener("load", function() {
                    s.trigger(u.id + ".submitted", [u]), s.trigger("submitted", [u]), d ? (s.trigger(u.id + ".error", [u, d]), s.trigger("error", [u, d])) : (s.trigger(u.id + ".success", [u, m]), s.trigger("success", [u, m]), s.trigger(u.id + "." + f, [u, m]), s.trigger(f, [u, m]), "updated_subscriber" === f && (s.trigger(u.id + ".subscribed", [u, m, !0]), s.trigger("subscribed", [u, m, !0])));
                    var e = Date.now() - h;
                    c.auto_scroll && 1e3 < e && e < 2e3 && document.body.clientHeight !== p && l(u.element)
                })
            }
            window.mc4wp = o
        }, {
            "./forms/conditional-elements.js": 2,
            "./forms/forms.js": 4,
            "./misc/scroll-to-element.js": 5,
            gator: 7
        }],
        2: [function(e, t, r) {
            "use strict";

            function n(e) {
                for (var t = !!e.getAttribute("data-show-if"), r = t ? e.getAttribute("data-show-if").split(":") : e.getAttribute("data-hide-if").split(":"), n = r[0], i = (1 < r.length ? r[1] : "*").split("|"), o = function(e, t) {
                    for (var r = [], n = e.querySelectorAll('input[name="' + t + '"], select[name="' + t + '"], textarea[name="' + t + '"]'), i = 0; i < n.length; i++) {
                        var o = n[i],
                            a = o.getAttribute("type");
                        ("radio" !== a && "checkbox" !== a || o.checked) && r.push(o.value)
                    }
                    return r
                }(function(e) {
                    for (var t = e; t.parentElement;)
                        if ("FORM" === (t = t.parentElement).tagName) return t;
                    return null
                }(e), n), a = !1, s = 0; s < o.length; s++) {
                    var c = o[s];
                    if (a = -1 < i.indexOf(c) || -1 < i.indexOf("*") && 0 < c.length) break
                }
                e.style.display = t ? a ? "" : "none" : a ? "none" : "";
                var l = e.querySelectorAll("input, select, textarea");
                [].forEach.call(l, function(e) {
                    (a || t) && e.getAttribute("data-was-required") && (e.required = !0, e.removeAttribute("data-was-required")), a && t || !e.required || (e.setAttribute("data-was-required", "true"), e.required = !1)
                })
            }

            function i() {
                var e = document.querySelectorAll(".mc4wp-form [data-show-if], .mc4wp-form [data-hide-if]");
                [].forEach.call(e, n)
            }

            function o(e) {
                if (e.target && e.target.form && !(e.target.form.className.indexOf("mc4wp-form") < 0)) {
                    var t = e.target.form.querySelectorAll("[data-show-if], [data-hide-if]");
                    [].forEach.call(t, n)
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var a = {
                init: function() {
                    document.addEventListener("keyup", o, !0), document.addEventListener("change", o, !0), document.addEventListener("mc4wp-refresh", i, !0), window.addEventListener("load", i), i()
                }
            };
            r.default = a
        }, {}],
        3: [function(e, t, r) {
            "use strict";

            function n(e, t) {
                this.id = e, this.element = t || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
            }
            var i = e("form-serialize"),
                o = e("populate.js");
            n.prototype.setData = function(e) {
                try {
                    o(this.element, e)
                } catch (e) {
                    console.error(e)
                }
            }, n.prototype.getData = function() {
                return i(this.element, {
                    hash: !0,
                    empty: !0
                })
            }, n.prototype.getSerializedData = function() {
                return i(this.element, {
                    hash: !1,
                    empty: !0
                })
            }, n.prototype.setResponse = function(e) {
                this.element.querySelector(".mc4wp-response").innerHTML = e
            }, n.prototype.reset = function() {
                this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
            }, t.exports = n
        }, {
            "form-serialize": 6,
            "populate.js": 8
        }],
        4: [function(e, t, r) {
            "use strict";
            var n = e("./form.js"),
                i = [],
                o = {};

            function a(e, t) {
                o[e] = o[e] || [], o[e].forEach(function(e) {
                    return e.apply(null, t)
                })
            }

            function s(e, t) {
                t = t || parseInt(e.getAttribute("data-id")) || 0;
                var r = new n(t, e);
                return i.push(r), r
            }
            t.exports = {
                all: function() {
                    return i
                },
                get: function(e) {
                    e = parseInt(e);
                    for (var t = 0; t < i.length; t++)
                        if (i[t].id === e) return i[t];
                    return s(document.querySelector(".mc4wp-form-" + e), e)
                },
                getByElement: function(e) {
                    for (var t = e.form || e, r = 0; r < i.length; r++)
                        if (i[r].element === t) return i[r];
                    return s(t)
                },
                on: function(e, t) {
                    o[e] = o[e] || [], o[e].push(t)
                },
                off: function(e, t) {
                    o[e] = o[e] || [], o[e] = o[e].filter(function(e) {
                        return e !== t
                    })
                },
                trigger: function(e, t) {
                    "submit" === e || 0 < e.indexOf(".submit") ? a(e, t) : window.setTimeout(function() {
                        a(e, t)
                    }, 1)
                }
            }
        }, {
            "./form.js": 3
        }],
        5: [function(e, t, r) {
            "use strict";
            t.exports = function(e) {
                var t = window.pageXOffset || document.documentElement.scrollLeft,
                    r = function(e) {
                        var t = document.body,
                            r = document.documentElement,
                            n = e.getBoundingClientRect(),
                            i = r.clientHeight,
                            o = Math.max(t.scrollHeight, t.offsetHeight, r.clientHeight, r.scrollHeight, r.offsetHeight),
                            a = n.bottom - i / 2 - n.height / 2,
                            s = o - i;
                        return Math.min(a + window.pageYOffset, s)
                    }(e);
                window.scrollTo(t, r)
            }
        }, {}],
        6: [function(e, t, r) {
            var g = /^(?:submit|button|image|reset|file)$/i,
                v = /^(?:input|select|textarea|keygen)/i,
                i = /(\[[^\[\]]*\])/g;

            function y(e, t, r) {
                if (t.match(i)) {
                    ! function e(t, r, n) {
                        if (0 === r.length) return t = n;
                        var i = r.shift(),
                            o = i.match(/^\[(.+?)\]$/);
                        if ("[]" === i) return t = t || [], Array.isArray(t) ? t.push(e(null, r, n)) : (t._values = t._values || [], t._values.push(e(null, r, n))), t;
                        if (o) {
                            var a = o[1],
                                s = +a;
                            isNaN(s) ? (t = t || {})[a] = e(t[a], r, n) : (t = t || [])[s] = e(t[s], r, n)
                        } else t[i] = e(t[i], r, n);
                        return t
                    }(e, function(e) {
                        var t = [],
                            r = new RegExp(i),
                            n = /^([^\[\]]*)/.exec(e);
                        for (n[1] && t.push(n[1]); null !== (n = r.exec(e));) t.push(n[1]);
                        return t
                    }(t), r)
                } else {
                    var n = e[t];
                    n ? (Array.isArray(n) || (e[t] = [n]), e[t].push(r)) : e[t] = r
                }
                return e
            }

            function b(e, t, r) {
                return r = r.replace(/(\r)?\n/g, "\r\n"), r = (r = encodeURIComponent(r)).replace(/%20/g, "+"), e + (e ? "&" : "") + encodeURIComponent(t) + "=" + r
            }
            t.exports = function(e, t) {
                "object" != typeof t ? t = {
                    hash: !!t
                } : void 0 === t.hash && (t.hash = !0);
                for (var r = t.hash ? {} : "", n = t.serializer || (t.hash ? y : b), i = e && e.elements ? e.elements : [], o = Object.create(null), a = 0; a < i.length; ++a) {
                    var s = i[a];
                    if ((t.disabled || !s.disabled) && s.name && (v.test(s.nodeName) && !g.test(s.type))) {
                        var c = s.name,
                            l = s.value;
                        if ("checkbox" !== s.type && "radio" !== s.type || s.checked || (l = void 0), t.empty) {
                            if ("checkbox" !== s.type || s.checked || (l = ""), "radio" === s.type && (o[s.name] || s.checked ? s.checked && (o[s.name] = !0) : o[s.name] = !1), null == l && "radio" == s.type) continue
                        } else if (!l) continue;
                        if ("select-multiple" !== s.type) r = n(r, c, l);
                        else {
                            l = [];
                            for (var u = s.options, f = !1, d = 0; d < u.length; ++d) {
                                var m = u[d],
                                    h = t.empty && !m.value,
                                    p = m.value || h;
                                m.selected && p && (f = !0, r = t.hash && "[]" !== c.slice(c.length - 2) ? n(r, c + "[]", m.value) : n(r, c, m.value))
                            }!f && t.empty && (r = n(r, c, ""))
                        }
                    }
                }
                if (t.empty)
                    for (var c in o) o[c] || (r = n(r, c, ""));
                return r
            }
        }, {}],
        7: [function(e, t, r) {
            function f(e, t, r) {
                return "_root" == t ? r : e !== r ? function(e) {
                    return i || (i = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : m.matchesSelector)
                }(e).call(e, t) ? e : e.parentNode ? (h++, f(e.parentNode, t, r)) : void 0 : void 0
            }

            function d(e, t, r, n) {
                if (p[e.id])
                    if (t)
                        if (n || r)
                            if (n) {
                                if (p[e.id][t][r])
                                    for (var i = 0; i < p[e.id][t][r].length; i++)
                                        if (p[e.id][t][r][i] === n) {
                                            p[e.id][t][r].splice(i, 1);
                                            break
                                        }
                            } else delete p[e.id][t][r];
                        else p[e.id][t] = {};
                    else
                        for (var o in p[e.id]) p[e.id].hasOwnProperty(o) && (p[e.id][o] = {})
            }

            function n(e, t, r, n) {
                if (this.element) {
                    e instanceof Array || (e = [e]), r || "function" != typeof t || (r = t, t = "_root");
                    var i, o, a, s, c, l = this.id;
                    for (i = 0; i < e.length; i++) n ? d(this, e[i], t, r) : (p[l] && p[l][e[i]] || m.addEvent(this, e[i], u(e[i])), o = this, a = e[i], s = t, c = r, p[o.id] || (p[o.id] = {}), p[o.id][a] || (p[o.id][a] = {}), p[o.id][a][s] || (p[o.id][a][s] = []), p[o.id][a][s].push(c));
                    return this
                }

                function u(t) {
                    return function(e) {
                        ! function(e, t, r) {
                            if (p[e][r]) {
                                var n, i, o = t.target || t.srcElement,
                                    a = {},
                                    s = 0,
                                    c = 0;
                                for (n in h = 0, p[e][r]) p[e][r].hasOwnProperty(n) && (i = f(o, n, g[e].element)) && m.matchesEvent(r, g[e].element, i, "_root" == n, t) && (h++, p[e][r][n].match = i, a[h] = p[e][r][n]);
                                for (t.stopPropagation = function() {
                                    t.cancelBubble = !0
                                }, s = 0; s <= h; s++)
                                    if (a[s])
                                        for (c = 0; c < a[s].length; c++) {
                                            if (!1 === a[s][c].call(a[s].match, t)) return m.cancel(t);
                                            if (t.cancelBubble) return
                                        }
                            }
                        }(l, e, t)
                    }
                }
            }

            function m(e, t) {
                if (!(this instanceof m)) {
                    for (var r in g)
                        if (g[r].element === e) return g[r];
                    return g[++o] = new m(e, o), g[o]
                }
                this.element = e, this.id = t
            }
            var i, h, o, p, g;
            o = h = 0, p = {}, g = {}, m.prototype.on = function(e, t, r) {
                return n.call(this, e, t, r)
            }, m.prototype.off = function(e, t, r) {
                return n.call(this, e, t, r, !0)
            }, m.matchesSelector = function() {}, m.cancel = function(e) {
                e.preventDefault(), e.stopPropagation()
            }, m.addEvent = function(e, t, r) {
                var n = "blur" == t || "focus" == t;
                e.element.addEventListener(t, r, n)
            }, m.matchesEvent = function() {
                return !0
            }, void 0 !== t && t.exports && (t.exports = m), window.Gator = m
        }, {}],
        8: [function(e, t, r) {
            var n, u;
            n = this, u = function(e, t, r) {
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var i = n,
                            o = t[n];
                        if (void 0 === o && (o = ""), null === o && (o = ""), void 0 !== r && (i = r + "[" + n + "]"), o.constructor === Array) i += "[]";
                        else if ("object" == typeof o) {
                            u(e, o, i);
                            continue
                        }
                        var a = e.elements.namedItem(i);
                        if (a) switch (a.type || a[0].type) {
                            default: a.value = o;
                                break;
                            case "radio":
                            case "checkbox":
                                for (var s = 0; s < a.length; s++) a[s].checked = -1 < o.indexOf(a[s].value);
                                break;
                            case "select-multiple":
                                for (var c = o.constructor == Array ? o : [o], l = 0; l < a.options.length; l++) a.options[l].selected |= -1 < c.indexOf(a.options[l].value);
                                break;
                            case "select":
                            case "select-one":
                                a.value = o.toString() || o;
                                break;
                            case "date":
                                a.value = new Date(o).toISOString().split("T")[0]
                        }
                    }
            }, "function" == typeof i && "object" == typeof i.amd && i.amd ? i(function() {
                return u
            }) : void 0 !== t && t.exports ? t.exports = u : n.populate = u
        }, {}]
    }, {}, [1])
}();
//# sourceMappingURL=forms-api.min.js.map