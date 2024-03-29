;
var MonsterInsights = function() {
        var t = [],
            a = '';
        this.setLastClicked = function(e, n, i) {
            e = typeof e !== 'undefined' ? e : [];
            n = typeof n !== 'undefined' ? n : [];
            i = typeof i !== 'undefined' ? i : !1;
            t.valuesArray = e;
            t.fieldsArray = n
        };
        this.getLastClicked = function() {
            return t
        };
        this.setInternalAsOutboundCategory = function(e) {
            a = e
        };
        this.getInternalAsOutboundCategory = function() {
            return a
        };
        this.sendEvent = function(t) {
            e([], t)
        };

        function s() {
            if (window.monsterinsights_debug_mode) {
                return !0
            } else {
                return !1
            }
        };

        function e(e, n) {
            e = typeof e !== 'undefined' ? e : [];
            n = typeof n !== 'undefined' ? n : {};
            __gaTracker('send', n);
            t.valuesArray = e;
            t.fieldsArray = n;
            t.tracked = !0;
            i('Tracked: ' + e.type);
            i(t)
        };

        function n(e) {
            e = typeof e !== 'undefined' ? e : [];
            t.valuesArray = e;
            t.fieldsArray = [];
            t.tracked = !1;
            i('Not Tracked: ' + e.exit);
            i(t)
        };

        function i(e) {
            if (s()) {
                console.dir(e)
            }
        };

        function o(e) {
            return e.replace(/^\s+|\s+$/gm, '')
        };

        function f() {
            var n = 0,
                e = document.domain,
                i = e.split('.'),
                t = '_gd' + (new Date()).getTime();
            while (n < (i.length - 1) && document.cookie.indexOf(t + '=' + t) == -1) {
                e = i.slice(-1 - (++n)).join('.');
                document.cookie = t + '=' + t + ';domain=' + e + ';'
            };
            document.cookie = t + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + e + ';';
            return e
        };

        function u(e) {
            e = e.toString();
            e = e.substring(0, (e.indexOf('#') == -1) ? e.length : e.indexOf('#'));
            e = e.substring(0, (e.indexOf('?') == -1) ? e.length : e.indexOf('?'));
            e = e.substring(e.lastIndexOf('/') + 1, e.length);
            if (e.length > 0 && e.indexOf('.') !== -1) {
                e = e.substring(e.indexOf('.') + 1);
                return e
            } else {
                return ''
            }
        };

        function h() {
            return typeof(__gaTracker) !== 'undefined' && __gaTracker && __gaTracker.hasOwnProperty('loaded') && __gaTracker.loaded == !0
        };

        function y(e) {
            return e.which == 1 || e.which == 2 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
        };

        function c() {
            var e = [];
            if (typeof monsterinsights_frontend.download_extensions == 'string') {
                e = monsterinsights_frontend.download_extensions.split(',')
            };
            return e
        };

        function d() {
            var e = [];
            if (typeof monsterinsights_frontend.inbound_paths == 'string') {
                e = JSON.parse(monsterinsights_frontend.inbound_paths)
            };
            return e
        };

        function b(e) {
            if (e.which == 1) {
                return 'event.which=1'
            } else if (e.which == 2) {
                return 'event.which=2'
            } else if (e.metaKey) {
                return 'metaKey'
            } else if (e.ctrlKey) {
                return 'ctrlKey'
            } else if (e.shiftKey) {
                return 'shiftKey'
            } else if (e.altKey) {
                return 'altKey'
            } else {
                return ''
            }
        };

        function m(e) {
            var h = c(),
                i = d(),
                t = 'unknown',
                g = e.href,
                v = u(e.href),
                p = f(),
                s = e.hostname,
                r = e.protocol,
                y = e.pathname;
            g = g.toString();
            var l, b, m = e.getAttribute('data-vars-ga-category');
            if (m) {
                return m
            };
            if (g.match(/^javascript\:/i)) {
                t = 'internal'
            } else if (r && r.length > 0 && (o(r) == 'tel' || o(r) == 'tel:')) {
                t = 'tel'
            } else if (r && r.length > 0 && (o(r) == 'mailto' || o(r) == 'mailto:')) {
                t = 'mailto'
            } else if (s && p && s.length > 0 && p.length > 0 && !s.endsWith(p)) {
                t = 'external'
            } else if (y && JSON.stringify(i) != '{}' && y.length > 0) {
                var w = i.length;
                for (var n = 0; n < w; n++) {
                    if (i[n].path && i[n].label && i[n].path.length > 0 && i[n].label.length > 0 && y.startsWith(i[n].path)) {
                        t = 'internal-as-outbound';
                        a = 'outbound-link-' + i[n].label;
                        break
                    }
                }
            } else if (s && window.monsterinsights_experimental_mode && s.length > 0 && document.domain.length > 0 && s !== document.domain) {
                t = 'cross-hostname'
            };
            if (v && (t === 'unknown' || 'external' === t) && h.length > 0 && v.length > 0) {
                for (l = 0, b = h.length; l < b; ++l) {
                    if (h[l].length > 0 && (g.endsWith(h[l]) || h[l] == v)) {
                        t = 'download';
                        break
                    }
                }
            };
            if (t === 'unknown') {
                t = 'internal'
            };
            return t
        };

        function w(e, t) {
            var n = (e.target && !e.target.match(/^_(self|parent|top)$/i)) ? e.target : !1;
            if (t.ctrlKey || t.shiftKey || t.metaKey || t.which == 2) {
                n = '_blank'
            };
            return n
        };

        function g(e) {
            if (e.getAttribute('data-vars-ga-label') && e.getAttribute('data-vars-ga-label').replace(/\n/ig, '')) {
                return e.getAttribute('data-vars-ga-label').replace(/\n/ig, '')
            } else if (e.title && e.title.replace(/\n/ig, '')) {
                return e.title.replace(/\n/ig, '')
            } else if (e.innerText && e.innerText.replace(/\n/ig, '')) {
                return e.innerText.replace(/\n/ig, '')
            } else if (e.getAttribute('aria-label') && e.getAttribute('aria-label').replace(/\n/ig, '')) {
                return e.getAttribute('aria-label').replace(/\n/ig, '')
            } else if (e.alt && e.alt.replace(/\n/ig, '')) {
                return e.alt.replace(/\n/ig, '')
            } else if (e.textContent && e.textContent.replace(/\n/ig, '')) {
                return e.textContent.replace(/\n/ig, '')
            } else {
                return undefined
            }
        };

        function x(e) {
            var i = e.children,
                a = 0,
                r, n;
            for (var t = 0; t < i.length; t++) {
                r = i[t];
                n = g(r);
                if (n) {
                    return n
                };
                if (a == 99) {
                    return undefined
                };
                a++
            };
            return undefined
        };

        function v(i) {
            var o = i.srcElement || i.target,
                t = [],
                l;
            t.el = o;
            t.ga_loaded = h();
            t.click_type = b(i);
            if (!h() || !y(i)) {
                t.exit = 'loaded';
                n(t);
                return
            }
            while (o && (typeof o.tagName == 'undefined' || o.tagName.toLowerCase() != 'a' || !o.href)) {
                o = o.parentNode
            };
            if (o && o.href && !o.hasAttribute('xlink:href')) {
                var v = o.href,
                    E = u(o.href),
                    D = c(),
                    I = d(),
                    M = monsterinsights_frontend.home_url,
                    S = f(),
                    r = m(o),
                    C = w(o, i),
                    p = o.getAttribute('data-vars-ga-action'),
                    k = o.getAttribute('data-vars-ga-label');
                t.el = o;
                t.el_href = o.href;
                t.el_protocol = o.protocol;
                t.el_hostname = o.hostname;
                t.el_port = o.port;
                t.el_pathname = o.pathname;
                t.el_search = o.search;
                t.el_hash = o.hash;
                t.el_host = o.host;
                t.debug_mode = s();
                t.download_extensions = D;
                t.inbound_paths = I;
                t.home_url = M;
                t.link = v;
                t.extension = E;
                t.type = r;
                t.target = C;
                t.title = g(o);
                if (!t.label && !t.title) {
                    t.title = x(o)
                };
                if (r !== 'internal' && r !== 'javascript') {
                    var A = !1,
                        T = function() {
                            if (A) {
                                return
                            };
                            A = !0;
                            window.location.href = v
                        },
                        L = function() {
                            t.exit = 'external';
                            n(t)
                        },
                        O = function() {
                            t.exit = 'internal-as-outbound';
                            n(t)
                        },
                        K = function() {
                            t.exit = 'cross-hostname';
                            n(t)
                        };
                    if (C || r == 'mailto' || r == 'tel') {
                        if (r == 'download') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'download',
                                eventAction: p || v,
                                eventLabel: k || t.title,
                            };
                            e(t, l)
                        } else if (r == 'tel') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'tel',
                                eventAction: p || v,
                                eventLabel: k || t.title.replace('tel:', ''),
                            };
                            e(t, l)
                        } else if (r == 'mailto') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'mailto',
                                eventAction: p || v,
                                eventLabel: k || t.title.replace('mailto:', ''),
                            };
                            e(t, l)
                        } else if (r == 'internal-as-outbound') {
                            l = {
                                hitType: 'event',
                                eventCategory: a,
                                eventAction: p || v,
                                eventLabel: k || t.title,
                            };
                            e(t, l)
                        } else if (r == 'external') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'outbound-link',
                                eventAction: p || v,
                                eventLabel: k || t.title,
                            };
                            e(t, l)
                        } else if (r == 'cross-hostname') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'cross-hostname',
                                eventAction: p || v,
                                eventLabel: k || t.title,
                            };
                            e(t, l)
                        } else {
                            if (r && r != 'internal') {
                                l = {
                                    hitType: 'event',
                                    eventCategory: r,
                                    eventAction: p || v,
                                    eventLabel: k || t.title,
                                };
                                e(t, l)
                            } else {
                                t.exit = 'type';
                                n(t)
                            }
                        }
                    } else {
                        if (r != 'cross-hostname' && r != 'external' && r != 'internal-as-outbound') {
                            if (!i.defaultPrevented) {
                                if (i.preventDefault) {
                                    i.preventDefault()
                                } else {
                                    i.returnValue = !1
                                }
                            }
                        };
                        if (r == 'download') {
                            l = {
                                hitType: 'event',
                                eventCategory: 'download',
                                eventAction: p || v,
                                eventLabel: k || t.title,
                                hitCallback: T,
                            };
                            e(t, l)
                        } else if (r == 'internal-as-outbound') {
                            window.onbeforeunload = function(n) {
                                if (!i.defaultPrevented) {
                                    if (i.preventDefault) {
                                        i.preventDefault()
                                    } else {
                                        i.returnValue = !1
                                    }
                                };
                                l = {
                                    hitType: 'event',
                                    eventCategory: a,
                                    eventAction: p || v,
                                    eventLabel: k || t.title,
                                    hitCallback: T,
                                };
                                if (navigator.sendBeacon) {
                                    l.transport = 'beacon'
                                };
                                e(t, l);
                                setTimeout(T, 1000)
                            }
                        } else if (r == 'external') {
                            window.onbeforeunload = function(n) {
                                if (!i.defaultPrevented) {
                                    if (i.preventDefault) {
                                        i.preventDefault()
                                    } else {
                                        i.returnValue = !1
                                    }
                                };
                                l = {
                                    hitType: 'event',
                                    eventCategory: 'outbound-link',
                                    eventAction: p || v,
                                    eventLabel: k || t.title,
                                    hitCallback: T,
                                };
                                if (navigator.sendBeacon) {
                                    l.transport = 'beacon'
                                };
                                e(t, l);
                                setTimeout(T, 1000)
                            }
                        } else if (r == 'cross-hostname') {
                            window.onbeforeunload = function(n) {
                                if (!i.defaultPrevented) {
                                    if (i.preventDefault) {
                                        i.preventDefault()
                                    } else {
                                        i.returnValue = !1
                                    }
                                };
                                l = {
                                    hitType: 'event',
                                    eventCategory: 'cross-hostname',
                                    eventAction: p || v,
                                    eventLabel: k || t.title,
                                    hitCallback: T,
                                };
                                if (navigator.sendBeacon) {
                                    l.transport = 'beacon'
                                };
                                e(t, l);
                                setTimeout(T, 1000)
                            }
                        } else {
                            if (r && r !== 'internal') {
                                l = {
                                    hitType: 'event',
                                    eventCategory: r,
                                    eventAction: p || v,
                                    eventLabel: k || t.title,
                                    hitCallback: T,
                                };
                                e(t, l)
                            } else {
                                t.exit = 'type';
                                n(t)
                            }
                        };
                        if (r != 'external' && r != 'cross-hostname' && r != 'internal-as-outbound') {
                            setTimeout(T, 1000)
                        } else {
                            if (r == 'external') {
                                setTimeout(L, 1100)
                            } else if (r == 'cross-hostname') {
                                setTimeout(K, 1100)
                            } else {
                                setTimeout(O, 1100)
                            }
                        }
                    }
                } else {
                    t.exit = 'internal';
                    n(t)
                }
            } else {
                t.exit = 'notlink';
                n(t)
            }
        };
        var l = window.location.hash;

        function p() {
            if (monsterinsights_frontend.hash_tracking === 'true' && l != window.location.hash) {
                l = window.location.hash;
                __gaTracker('set', 'page', location.pathname + location.search + location.hash);
                __gaTracker('send', 'pageview');
                i('Hash change to: ' + location.pathname + location.search + location.hash)
            } else {
                i('Hash change to (untracked): ' + location.pathname + location.search + location.hash)
            }
        };
        var r = window;
        if (r.addEventListener) {
            r.addEventListener('load', function() {
                document.body.addEventListener('click', v, !1)
            }, !1);
            window.addEventListener('hashchange', p, !1)
        } else {
            if (r.attachEvent) {
                r.attachEvent('onload', function() {
                    document.body.attachEvent('onclick', v)
                });
                window.attachEvent('onhashchange', p)
            }
        };
        if (typeof String.prototype.endsWith !== 'function') {
            String.prototype.endsWith = function(e) {
                return this.indexOf(e, this.length - e.length) !== -1
            }
        };
        if (typeof String.prototype.startsWith !== 'function') {
            String.prototype.startsWith = function(e) {
                return this.indexOf(e) === 0
            }
        };
        if (typeof Array.prototype.lastIndexOf !== 'function') {
            Array.prototype.lastIndexOf = function(e) {
                'use strict';
                if (this === void 0 || this === null) {
                    throw new TypeError()
                };
                var t, n, a = Object(this),
                    i = a.length >>> 0;
                if (i === 0) {
                    return -1
                };
                t = i - 1;
                if (arguments.length > 1) {
                    t = Number(arguments[1]);
                    if (t != t) {
                        t = 0
                    } else if (t != 0 && t != (1 / 0) && t != -(1 / 0)) {
                        t = (t > 0 || -1) * Math.floor(Math.abs(t))
                    }
                };
                for (n = t >= 0 ? Math.min(t, i - 1) : i - Math.abs(t); n >= 0; n--) {
                    if (n in a && a[n] === e) {
                        return n
                    }
                };
                return -1
            }
        }
    },
    MonsterInsightsObject = new MonsterInsights();