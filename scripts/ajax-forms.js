! function i(s, a, c) {
    function u(e, t) {
        if (!a[e]) {
            if (!s[e]) {
                var r = !1;
                if (!t && r) return r(e, !0);
                if (l) return l(e, !0);
                var o = new Error("Cannot find module '" + e + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var n = a[e] = {
                exports: {}
            };
            s[e][0].call(n.exports, function(t) {
                return u(s[e][1][t] || t)
            }, n, n.exports, i, s, a, c)
        }
        return a[e].exports
    }
    for (var l = !1, t = 0; t < c.length; t++) u(c[t]);
    return u
}({
    1: [function(t, e, r) {
        "use strict";

        function o(t) {
            this.objectName = t
        }
        o.prototype.get = function(t, e) {
            return void 0 !== window[this.objectName] ? window[this.objectName][t] : e
        }, o.prototype.set = function(t, e) {
            window[this.objectName] || (window[this.objectName] = {}), window[this.objectName][t] = e
        }, e.exports = o
    }, {}],
    2: [function(t, e, r) {
        "use strict";

        function o(t) {
            return t.innerHTML ? t.innerHTML : t.value
        }

        function n(t, e) {
            t.innerHTML ? t.innerHTML = e : t.value = e
        }

        function i(t) {
            this.form = t, this.button = t.querySelector('input[type="submit"], button[type="submit"]'), this.loadingInterval = 0, this.character = "·", this.button && (this.originalButton = this.button.cloneNode(!0))
        }
        i.prototype.setCharacter = function(t) {
            this.character = t
        }, i.prototype.start = function() {
            if (this.button) {
                var t = this.button.getAttribute("data-loading-text");
                if (t) return void n(this.button, t);
                var e = window.getComputedStyle(this.button);
                this.button.style.width = e.width, n(this.button, this.character), this.loadingInterval = window.setInterval(this.tick.bind(this), 500)
            } else this.form.style.opacity = "0.5";
            this.form.classList && this.form.classList.add("mc4wp-loading")
        }, i.prototype.tick = function() {
            var t = o(this.button),
                e = this.character;
            n(this.button, 5 <= t.length ? e : t + " " + e)
        }, i.prototype.stop = function() {
            if (this.button) {
                this.button.style.width = this.originalButton.style.width;
                var t = o(this.originalButton);
                n(this.button, t), window.clearInterval(this.loadingInterval)
            } else this.form.style.opacity = "";
            this.form.classList && this.form.classList.remove("mc4wp-loading")
        }, e.exports = i
    }, {}],
    3: [function(t, e, r) {
        "use strict";
        var o = t("./_config.js"),
            s = t("./_form-loader.js"),
            a = !1,
            c = new o("mc4wp_ajax_vars");
        c.get("ready") || window.mc4wp.forms.on("submit", function(t, e) {
            if (!(t.element.getAttribute("class").indexOf("mc4wp-ajax") < 0)) {
                document.activeElement && "INPUT" === document.activeElement.tagName && document.activeElement.blur();
                try {
                    ! function(r) {
                        var e = new s(r.element),
                            t = c.get("loading_character");

                        function o() {
                            a = !0;
                            var t = new XMLHttpRequest;
                            t.onreadystatechange = function() {
                                if (4 == this.readyState)
                                    if (e.stop(), a = !1, 200 <= this.status && this.status < 400) {
                                        try {
                                            var t = JSON.parse(this.responseText)
                                        } catch (t) {
                                            return console.log('MailChimp for WordPress: failed to parse AJAX response.\n\nError: "' + t + '"'), void r.setResponse('<div class="mc4wp-alert mc4wp-error"><p>' + c.get("error_text") + "</p></div>")
                                        }
                                        n(t)
                                    } else console.log(this.responseText)
                            }, t.open("POST", c.get("ajax_url"), !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(r.getSerializedData()), t = null
                        }

                        function n(t) {
                            if (i("submitted", [r, null]), t.error) r.setResponse(t.error.message), i("error", [r, t.error.errors]);
                            else {
                                var e = r.getData();
                                i("success", [r, e]), i(t.data.event, [r, e]), "updated_subscriber" === t.data.event && i("subscribed", [r, e, !0]), t.data.hide_fields && (r.element.querySelector(".mc4wp-form-fields").style.display = "none"), r.setResponse(t.data.message), r.element.reset(), t.data.redirect_to && (window.location.href = t.data.redirect_to)
                            }
                        }

                        function i(t, e) {
                            window.mc4wp.forms.trigger(t, e), window.mc4wp.forms.trigger(e[0].id + "." + t, e)
                        }
                        t && e.setCharacter(t), a || (r.setResponse(""), e.start(), o())
                    }(t)
                } catch (t) {
                    return console.error(t), !0
                }
                return e.returnValue = !1, e.preventDefault(), !1
            }
        }), c.set("ready", !0)
    }, {
        "./_config.js": 1,
        "./_form-loader.js": 2
    }]
}, {}, [3]);
//# sourceMappingURL=ajax-forms.min.js.map