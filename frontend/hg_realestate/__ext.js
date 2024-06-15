
/* ==== INCLUDE: /js/blocks.js ==== */

LazyLoad = function(a) {
    function h(b, c) {
        var e,
            d = a.createElement(b);
        for (e in c)
            c.hasOwnProperty(e) && d.setAttribute(e, c[e]);
        return d
    }
    function i(a) {
        var c,
            g,
            b = d[a];
        b && (c = b.callback, g = b.urls, g.shift(), e = 0, g.length || (c && c.call(b.context, b.obj), d[a] = null, f[a].length && k(a)))
    }
    function j() {
        var c = navigator.userAgent;
        b = {
            async: a.createElement("script").async === !0
        },
        (b.webkit = /AppleWebKit\//.test(c)) || (b.ie = /MSIE|Trident/.test(c)) || (b.opera = /Opera/.test(c)) || (b.gecko = /Gecko\//.test(c)) || (b.unknown = !0)
    }
    function k(e, g, k, n, o) {
        var s,
            t,
            u,
            v,
            w,
            x,
            p = function() {
                i(e)
            },
            q = "css" === e,
            r = [];
        if (b || j(), g)
            if (g = "string" == typeof g ? [g] : g.concat(), q || b.async || b.gecko || b.opera)
                f[e].push({
                    urls: g,
                    callback: k,
                    obj: n,
                    context: o
                });
            else
                for (s = 0, t = g.length; s < t; ++s)
                    f[e].push({
                        urls: [g[s]],
                        callback: s === t - 1 ? k : null,
                        obj: n,
                        context: o
                    });
        if (!d[e] && (v = d[e] = f[e].shift())) {
            for (c || (c = a.head || a.getElementsByTagName("head")[0]), w = v.urls.concat(), s = 0, t = w.length; s < t; ++s)
                x = w[s],
                q ? u = b.gecko ? h("style") : h("link", {
                    href: x,
                    rel: "stylesheet"
                }) : (u = h("script", {
                    src: x
                }), u.async = !1),
                u.className = "lazyload",
                u.setAttribute("charset", "utf-8"),
                b.ie && !q && "onreadystatechange" in u && !("draggable" in u) ? u.onreadystatechange = function() {
                    /loaded|complete/.test(u.readyState) && (u.onreadystatechange = null, p())
                } : q && (b.gecko || b.webkit) ? b.webkit ? (v.urls[s] = u.href, m()) : (u.innerHTML = '@import "' + x + '";', l(u)) : u.onload = u.onerror = p,
                r.push(u);
            for (s = 0, t = r.length; s < t; ++s)
                c.appendChild(r[s])
        }
    }
    function l(a) {
        var b;
        try {
            b = !!a.sheet.cssRules
        } catch (c) {
            return e += 1, void (e < 200 ? setTimeout(function() {
                l(a)
            }, 50) : b && i("css"))
        }
        i("css")
    }
    function m() {
        var b,
            a = d.css;
        if (a) {
            for (b = g.length; --b >= 0;)
                if (g[b].href === a.urls[0]) {
                    i("css");
                    break
                }
            e += 1,
            a && (e < 200 ? setTimeout(m, 50) : i("css"))
        }
    }
    var b,
        c,
        d = {},
        e = 0,
        f = {
            css: [],
            js: []
        },
        g = a.styleSheets;
    return {
        css: function(a, b, c, d) {
            k("css", a, b, c, d)
        },
        js: function(a, b, c, d) {
            k("js", a, b, c, d)
        }
    }
}(this.document);

window.nanoid = (t=21) => {
    let e = "",
        r = crypto.getRandomValues(new Uint8Array(t));
    for (; t--;) {
        let n = 63 & r[t];
        e += n < 36 ? n.toString(36) : n < 62 ? (n - 26).toString(36).toUpperCase() : n < 63 ? "_" : "-"
    }
    return e
};

!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).TypeIt = t()
}(this, (function() {
    "use strict";
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        })(t)
    }
    var t = {
            strings: [],
            speed: 100,
            cursor: !0,
            cursorChar: "|",
            cursorSpeed: 1e3,
            deleteSpeed: null,
            lifeLike: !0,
            breakLines: !0,
            startDelay: 250,
            startDelete: !1,
            nextStringDelay: 750,
            loop: !1,
            loopDelay: 750,
            html: !0,
            waitUntilVisible: !1,
            beforeString: function() {},
            afterString: function() {},
            beforeStep: function() {},
            afterStep: function() {},
            afterComplete: function() {}
        },
        e = function(n) {
            return n.map((function(n) {
                return void 0 === n[1] && n.push(null), void 0 === n[2] && n.push({}), n
            }))
        },
        r = function(n, t) {
            return Object.assign({}, n, t)
        },
        i = function(n) {
            return Array.isArray(n)
        },
        o = function(n, t) {
            return n[2] = r(n[2], t) || t, n
        },
        u = function(n, t) {
            return i(n[0]) ? n.map((function(n) {
                return o(n, t)
            })) : o(n, t)
        },
        c = function(n, t, e, r) {
            r = r || !1,
            e = e || {};
            var o = !i(n),
                c = n.length;
            return (n = o ? new Array(n).fill(0) : n).map((function(n, i) {
                if (o)
                    return t;
                var a = [t, n, e];
                return r && (0 === i && (a = u(a, {
                    isFirst: !0
                })), i + 1 === c && (a = u(a, {
                    isLast: !0
                }))), a
            }))
        };
    function a(n) {
        this.insert = function(n, e) {
            t.splice(n, 0, e)
        },
        this.add = function(n, u, a) {
            return n = i(n) ? n : [n, null], a = a || !1, u = u || 1, i(n[0]) || (n = c(u, n)), n = e(n).map((function(n) {
                return n[2] = r(n[2], {
                    id: o
                }), o++, n
            })), t = a ? n.concat(t) : t.concat(n), this
        },
        this.set = function(n, e) {
            t[n] = e
        },
        this.reset = function() {
            t = t.map((function(n) {
                return n[2].executed = !1, n
            }))
        },
        this.getItems = function() {
            return (t = e(t)).filter((function(n) {
                return !n[2].executed
            }))
        },
        this.setMeta = function(n, e) {
            var i = t.findIndex((function(t) {
                return t[2].id === n
            }));
            t[i][2] = r(t[i][2], e)
        };
        var t = [],
            o = 0;
        this.add(n)
    }
    var f = function(n) {
            return Array.from(n)
        },
        s = function(n) {
            var t = [];
            return t.concat.apply(t, n)
        },
        l = function(n) {
            var t = document.implementation.createHTMLDocument("");
            return t.body.innerHTML = n, t.body
        },
        d = function n(t, e, r) {
            e = e || null,
            r = void 0 !== r && r;
            var i = f(t.childNodes).map((function(t) {
                return 3 === (e = t).nodeType || "BR" === e.tagName ? t : n(t);
                var e
            }));
            return i = s(i), e && (i = i.filter((function(n) {
                return !e.contains(n)
            }))), r ? i.reverse() : i
        },
        p = function(n) {
            return "BODY" === n.tagName
        },
        h = function(n, t) {
            t = t || null;
            var e = n instanceof HTMLElement;
            return {
                node: t,
                isTopLevelText: (!t || p(t.parentNode)) && !e,
                isHTMLElement: e,
                content: n
            }
        };
    function v(n) {
        var t,
            e = l(n);
        return t = d(e).map((function(n) {
            return n.nodeValue ? f(n.nodeValue).map((function(t) {
                return h(t, n)
            })) : h(n)
        })), s(t)
    }
    function y(n, t) {
        return (t = void 0 === t || t) ? v(n) : f(n).map((function(n) {
            return h(n)
        }))
    }
    var m = function(n) {
            return document.createElement(n)
        },
        g = function(n, t) {
            var e = m("style");
            e.id = t || "",
            e.appendChild(document.createTextNode(n)),
            document.head.appendChild(e)
        },
        b = function(n) {
            return i(n) || (n = [n / 2, n / 2]), {
                before: n[0],
                after: n[1],
                total: n[0] + n[1]
            }
        },
        S = function(n, t) {
            return Math.abs(Math.random() * (n + t - (n - t)) + (n - t))
        };
    var N = function(n) {
            return ["textarea", "input"].indexOf(n.tagName.toLowerCase()) > -1
        },
        T = function(n, t) {
            var e = t.querySelectorAll("*");
            return [t].concat(f(e).reverse()).find((function(t) {
                return t.cloneNode().outerHTML === n.outerHTML
            }))
        },
        L = function(n, t, e, r) {
            e = e || null;
            var i = t.isHTMLElement,
                o = i ? t.content : document.createTextNode(t.content);
            if (N(n))
                n.value = "".concat(n.value).concat(t.content);
            else {
                if (!t.isTopLevelText && !i) {
                    var u = t.node.parentNode,
                        c = T(u.cloneNode(), n);
                    if (function(n, t) {
                        if (!n)
                            return !1;
                        var e = n.nextSibling;
                        return !e || e.isEqualNode(t)
                    }(c, e))
                        n = c;
                    else if ((o = u.cloneNode()).innerText = t.content, !p(u.parentNode)) {
                        for (var a = u.parentNode, f = a.cloneNode(), s = T(f, n); !s && !p(a);)
                            f.innerHTML = o.outerHTML,
                            o = f,
                            f = a.parentNode.cloneNode(),
                            a = a.parentNode,
                            s = T(f, n);
                        n = s || n
                    }
                }
                var l = d(n, e, !0)[r - 1],
                    h = l ? l.parentNode : n;
                h.insertBefore(o, h.contains(e) ? e : null)
            }
        },
        M = function(n) {
            var t;
            return null == n || null === (t = n.parentNode) || void 0 === t ? void 0 : t.removeChild(n)
        };
    var x = function(n, t, e) {
            var r,
                i = "string" == typeof n,
                o = !1,
                u = -1 * n;
            return i && (u = (r = "END" === n.toUpperCase()) ? -1 : 1, o = r ? t + u > 0 : t + u < e.length), {
                isString: i,
                numberOfSteps: u,
                canKeepMoving: o
            }
        },
        w = function(n) {
            var t,
                e = ["font", "lineHeight", "color"],
                r = m("SPAN"),
                i = (t = n, window.getComputedStyle(t, null));
            for (var o in i)
                e.indexOf(o) > -1 && i[o] && (r.style[o] = i[o]);
            return r.style.cssText
        };
    function D(n, t, e) {
        return e ? t ? t(n) : n : (n && n.then || (n = Promise.resolve(n)), t ? n.then(t) : n)
    }
    function H(n) {
        return function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            try {
                return Promise.resolve(n.apply(this, t))
            } catch (n) {
                return Promise.reject(n)
            }
        }
    }
    function E() {}
    function C(n, t) {
        if (!t)
            return n && n.then ? n.then(E) : Promise.resolve()
    }
    function A(n, t) {
        var e = n();
        return e && e.then ? e.then(t) : t(e)
    }
    function k(n, t, e) {
        if (!n.s) {
            if (e instanceof O) {
                if (!e.s)
                    return void (e.o = k.bind(null, n, t));
                1 & t && (t = e.s),
                e = e.v
            }
            if (e && e.then)
                return void e.then(k.bind(null, n, t), k.bind(null, n, 2));
            n.s = t,
            n.v = e;
            var r = n.o;
            r && r(n)
        }
    }
    var O = function() {
        function n() {}
        return n.prototype.then = function(t, e) {
            var r = new n,
                i = this.s;
            if (i) {
                var o = 1 & i ? t : e;
                if (o) {
                    try {
                        k(r, 1, o(this.v))
                    } catch (n) {
                        k(r, 2, n)
                    }
                    return r
                }
                return this
            }
            return this.o = function(n) {
                try {
                    var i = n.v;
                    1 & n.s ? k(r, 1, t ? t(i) : i) : e ? k(r, 1, e(i)) : k(r, 2, i)
                } catch (n) {
                    k(r, 2, n)
                }
            }, r
        }, n
    }();
    function P(n, t) {
        return n && n.then ? n.then(t) : t(n)
    }
    return function(e, o) {
        var u = this,
            s = this;
        o = o || {};
        var p = function(n, t, e) {
                return n = i(n[0]) ? n : [n], an.add(n, t), function(n) {
                    var t = (n = n || {}).delay;
                    t && an.add([U, t])
                }(e), s
            },
            T = function(t) {
                return t = "object" === n(t) ? t : {}, [[Q, t, {
                    force: !0
                }], [Q, en, {
                    force: !0
                }]]
            },
            z = function() {
                return X ? f(W.value) : d(W, fn, !0)
            },
            B = function(n, t) {
                t = t || 1;
                var e = en.nextStringDelay;
                an.insert(n, [U, e.before]),
                an.insert(n + t + 1, [U, e.after])
            },
            I = H((function() {
                if (fn) {
                    var n = "[data-typeit-id='".concat(cn, "'] .ti-cursor");
                    g("@keyframes blink-".concat(cn, " { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ").concat(n, " { animation: blink-").concat(cn, " ").concat(en.cursorSpeed / 1e3, "s infinite; } ").concat(n, ".with-delay { animation-delay: 500ms; } ").concat(n, ".disabled { animation: none; }"), cn),
                    W.appendChild(fn);
                    var t = "loaded" === document.fonts.status;
                    return D(t || document.fonts.ready, (function(n) {
                        var t = fn.getBoundingClientRect().width / 2;
                        fn.style.margin = "0 -".concat(t + 2, "px 0 -").concat(t - 2, "px")
                    }), t)
                }
            })),
            R = function(n) {
                fn && (fn.classList.toggle("disabled", n), fn.classList.toggle("with-delay", !n))
            },
            q = H((function(n, t) {
                return $.push(setTimeout(n, t)), D()
            })),
            j = H((function(n) {
                var t = _;
                return D(t && F(_), (function(t) {
                    return an.reset(), an.set(0, [U, n.before]), C(G(!0))
                }), !t)
            })),
            V = H((function() {
                tn.started = !0;
                var n,
                    t = an.getItems();
                return P(function(n, t) {
                    try {
                        var e = n()
                    } catch (n) {
                        return t(n)
                    }
                    return e && e.then ? e.then(void 0, t) : e
                }((function() {
                    return P(function(n, t, e) {
                        var r,
                            i,
                            o = -1;
                        return function u(c) {
                            try {
                                for (; ++o < n.length && (!e || !e());)
                                    if ((c = t(o)) && c.then) {
                                        if (!((a = c) instanceof O && 1 & a.s))
                                            return void c.then(u, i || (i = k.bind(null, r = new O, 2)));
                                        c = c.v
                                    }
                                r ? k(r, 1, c) : r = c
                            } catch (n) {
                                k(r || (r = new O), 2, n)
                            }
                            var a
                        }(), r
                    }(t, (function(e) {
                        if (tn.frozen || tn.destroyed)
                            throw "";
                        var r,
                            i,
                            o,
                            c,
                            a = t[e],
                            f = a[2];
                        return n = [a, u], f.freezeCursor && R(!0), r = en.speed, i = en.deleteSpeed, o = en.lifeLike, c = (i = null !== i ? i : r / 3) / 2, Z = o ? [S(r, r / 2), S(i, c)] : [r, i], A((function() {
                            var t;
                            if (null == f ? void 0 : f.isFirst)
                                return C((t = en).beforeString.apply(t, n))
                        }), (function() {
                            var t;
                            return D((t = en).beforeStep.apply(t, n), (function() {
                                return D(a[0].call(u, a[1], f), (function() {
                                    return A((function() {
                                        var t,
                                            e;
                                        if (null === (t = a[2]) || void 0 === t ? void 0 : t.isLast)
                                            return C((e = en).afterString.apply(e, n))
                                    }), (function() {
                                        var t;
                                        return D((t = en).afterStep.apply(t, n), (function() {
                                            an.setMeta(f.id, {
                                                executed: !0
                                            }),
                                            R(!1)
                                        }))
                                    }))
                                }))
                            }))
                        }))
                    }), (function() {
                        return !1
                    })), (function(t) {
                        var e;
                        return tn.completed = !0, D((e = en).afterComplete.apply(e, n), (function() {
                            if (!en.loop)
                                throw "";
                            var n = en.loopDelay;
                            q((function() {
                                return D(j(n), (function() {
                                    V()
                                }))
                            }), n.after)
                        }))
                    }))
                }), E), (function(n) {
                    return u
                }))
            })),
            U = function(n) {
                return new Promise((function(t) {
                    q((function() {
                        return t()
                    }), n || 0)
                }))
            },
            F = function n(t) {
                var e = z(),
                    r = x(t, _, e);
                return _ += r.numberOfSteps, new Promise((function(t) {
                    q(H((function() {
                        return function(n, t, e, r) {
                            if (e) {
                                var i = r,
                                    o = t[(i = i > t.length ? t.length : i) - 1];
                                (n = o ? o.parentNode : n).insertBefore(e, o || null)
                            }
                        }(W, z(), fn, _), A((function() {
                            if (r.isString && r.canKeepMoving)
                                return C(n(r.numberOfSteps > 0 ? "START" : "END"))
                        }), (function() {
                            return t()
                        }))
                    })), Z[0])
                }))
            },
            K = function(n) {
                return new Promise((function(t) {
                    q((function() {
                        return L(W, n, fn, _), t()
                    }), Z[0])
                }))
            },
            Q = H((function(n) {
                en = r(en, n)
            })),
            Y = H((function() {
                X ? W.value = "" : z().forEach((function(n) {
                    M(n)
                }))
            })),
            G = function n(t) {
                return t = !0 === t, new Promise((function(e) {
                    q(H((function() {
                        var r = !1,
                            i = z();
                        return i.length && (X ? W.value = W.value.slice(0, -1) : M(i[_])), f(W.querySelectorAll("*")).forEach((function(n) {
                            if (!n.innerHTML && "BR" !== n.tagName) {
                                for (var t = n; 1 === t.parentNode.childNodes.length && t.parentNode.childNodes[0].isEqualNode(t);)
                                    t = t.parentNode;
                                M(t)
                            }
                        })), A((function() {
                            if (t && i.length - 1 > 0)
                                return D(n(!0), (function() {
                                    return r = !0, e()
                                }))
                        }), (function(n) {
                            return r ? n : e()
                        }))
                    })), Z[1])
                }))
            };
        this.break = function(n) {
            return p([K, h(m("BR"))], 1, n)
        },
        this.delete = function(n, t) {
            var e = T(t);
            return p([e[0]].concat([].concat(Array(Math.abs(n) || 1)).fill().map((function() {
                return [G, !n, nn]
            })), [e[1]]), 1, t)
        },
        this.empty = function() {
            return p(Y, 1, arguments)
        },
        this.exec = function(n, t) {
            var e = T(t);
            return p([e[0], [n, null], e[1]], 1, t)
        },
        this.move = function(n, t) {
            var e = x(n, _, z()),
                r = T(t),
                i = e.isString ? n : Math.sign(n);
            return p([r[0]].concat([].concat(Array(Math.abs(n) || 1)).fill().map((function() {
                return [F, i, nn]
            })), [r[1]]), 1, t)
        },
        this.options = function(n) {
            return p([Q, n], 1, n)
        },
        this.pause = function(n, t) {
            return p([U, n], 1, t)
        },
        this.type = function(n, t) {
            var e = T(t),
                r = y(n, en.html),
                i = [e[0]].concat(c(r, K, nn, !0), [e[1]]);
            return p(i, 1, t)
        },
        this.is = function(n) {
            return tn[n]
        },
        this.destroy = function(n) {
            n = void 0 === n || n,
            $.forEach((function(n) {
                clearTimeout(n)
            })),
            $ = [],
            n && M(fn),
            tn.destroyed = !0
        },
        this.freeze = function() {
            tn.frozen = !0
        },
        this.unfreeze = function() {
            tn.frozen = !1,
            V()
        },
        this.reset = function() {
            for (var n in !this.is("destroyed") && this.destroy(), an.reset(), _ = 0, tn)
                tn[n] = !1;
            return X ? W.value = "" : W.innerHTML = "", this
        },
        this.go = function() {
            return tn.started ? this : (I(), en.waitUntilVisible ? (function(n, t) {
                new IntersectionObserver((function(e, r) {
                    e.forEach((function(e) {
                        e.isIntersecting && (t(), r.unobserve(n))
                    }))
                }), {
                    threshold: 1
                }).observe(n)
            }(W, V.bind(this)), this) : (V(), this))
        },
        this.getQueue = function() {
            return an
        },
        this.getOptions = function() {
            return en
        },
        this.getElement = function() {
            return W
        };
        var J,
            W = "string" == typeof (J = e) ? document.querySelector(J) : J,
            X = N(W),
            Z = [],
            $ = [],
            _ = 0,
            nn = {
                freezeCursor: !0
            },
            tn = {
                started: !1,
                completed: !1,
                frozen: !1,
                destroyed: !1
            },
            en = r(t, o);
        en = r(en, {
            html: !X && en.html,
            nextStringDelay: b(en.nextStringDelay),
            loopDelay: b(en.loopDelay)
        });
        var rn,
            on,
            un,
            cn = Math.random().toString().substring(2, 9),
            an = new a([U, en.startDelay]);
        W.setAttribute("data-typeit-id", cn),
        g("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}[data-typeit-id]"),
        en.strings = (un = en.strings, rn = i(un) ? un : [un], (on = function(n) {
            return n.innerHTML.replace(/<\!--.*?-->/g, "").trim()
        }(W)) ? (W.innerHTML = "", en.startDelete ? (v(on).forEach((function(n) {
            L(W, n, fn, _)
        })), an.add([G, !0]), B(1), rn) : [on.trim()].concat(rn)) : rn);
        var fn = function() {
            if (X || !en.cursor)
                return null;
            var n = m("span");
            return n.innerHTML = l(en.cursorChar).innerHTML, n.className = "ti-cursor", n.style.cssText = "display:inline;".concat(w(W)), n
        }();
        en.strings.length && function() {
            var n = en.strings.filter((function(n) {
                return !!n
            }));
            n.forEach((function(t, e) {
                var r = y(t, en.html);
                an.add(c(r, K, nn, !0));
                var i = an.getItems().length;
                if (e + 1 !== n.length) {
                    if (en.breakLines) {
                        var o = h(m("BR"));
                        return an.add([K, o, nn]), void B(i)
                    }
                    an.add(c(r, G, nn)),
                    B(i, t.length)
                }
            }))
        }()
    }
}));

!function() {
    "use strict";
    function o() {
        var o = window,
            t = document;
        if (!("scrollBehavior" in t.documentElement.style && !0 !== o.__forceSmoothScrollPolyfill__)) {
            var l,
                e = o.HTMLElement || o.Element,
                r = 468,
                i = {
                    scroll: o.scroll || o.scrollTo,
                    scrollBy: o.scrollBy,
                    elementScroll: e.prototype.scroll || n,
                    scrollIntoView: e.prototype.scrollIntoView
                },
                s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now,
                c = (l = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);
            o.scroll = o.scrollTo = function() {
                void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? h.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : i.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset))
            },
            o.scrollBy = function() {
                void 0 !== arguments[0] && (f(arguments[0]) ? i.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset)))
            },
            e.prototype.scroll = e.prototype.scrollTo = function() {
                if (void 0 !== arguments[0])
                    if (!0 !== f(arguments[0])) {
                        var o = arguments[0].left,
                            t = arguments[0].top;
                        h.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t)
                    } else {
                        if ("number" == typeof arguments[0] && void 0 === arguments[1])
                            throw new SyntaxError("Value could not be converted");
                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                    }
            },
            e.prototype.scrollBy = function() {
                void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
            },
            e.prototype.scrollIntoView = function() {
                if (!0 !== f(arguments[0])) {
                    var l = function(o) {
                            for (; o !== t.body && !1 === (e = p(l = o, "Y") && a(l, "Y"), r = p(l, "X") && a(l, "X"), e || r);)
                                o = o.parentNode || o.host;
                            var l,
                                e,
                                r;
                            return o
                        }(this),
                        e = l.getBoundingClientRect(),
                        r = this.getBoundingClientRect();
                    l !== t.body ? (h.call(this, l, l.scrollLeft + r.left - e.left, l.scrollTop + r.top - e.top), "fixed" !== o.getComputedStyle(l).position && o.scrollBy({
                        left: e.left,
                        top: e.top,
                        behavior: "smooth"
                    })) : o.scrollBy({
                        left: r.left,
                        top: r.top,
                        behavior: "smooth"
                    })
                } else
                    i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
            }
        }
        function n(o, t) {
            this.scrollLeft = o,
            this.scrollTop = t
        }
        function f(o) {
            if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior)
                return !0;
            if ("object" == typeof o && "smooth" === o.behavior)
                return !1;
            throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.")
        }
        function p(o, t) {
            return "Y" === t ? o.clientHeight + c < o.scrollHeight : "X" === t ? o.clientWidth + c < o.scrollWidth : void 0
        }
        function a(t, l) {
            var e = o.getComputedStyle(t, null)["overflow" + l];
            return "auto" === e || "scroll" === e
        }
        function d(t) {
            var l,
                e,
                i,
                c,
                n = (s() - t.startTime) / r;
            c = n = n > 1 ? 1 : n,
            l = .5 * (1 - Math.cos(Math.PI * c)),
            e = t.startX + (t.x - t.startX) * l,
            i = t.startY + (t.y - t.startY) * l,
            t.method.call(t.scrollable, e, i),
            e === t.x && i === t.y || o.requestAnimationFrame(d.bind(o, t))
        }
        function h(l, e, r) {
            var c,
                f,
                p,
                a,
                h = s();
            l === t.body ? (c = o, f = o.scrollX || o.pageXOffset, p = o.scrollY || o.pageYOffset, a = i.scroll) : (c = l, f = l.scrollLeft, p = l.scrollTop, a = n),
            d({
                scrollable: c,
                method: a,
                startTime: h,
                startX: f,
                startY: p,
                x: e,
                y: r
            })
        }
    }
    "object" == typeof exports && "undefined" != typeof module ? module.exports = {
        polyfill: o
    } : o()
}();
/**
 * @popperjs/core v2.4.4 - MIT License
 */

"use strict";
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).Popper = {})
}(this, (function(e) {
    function t(e) {
        return {
            width: (e = e.getBoundingClientRect()).width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }
    function n(e) {
        return "[object Window]" !== e.toString() ? (e = e.ownerDocument) ? e.defaultView : window : e
    }
    function r(e) {
        return {
            scrollLeft: (e = n(e)).pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function o(e) {
        return e instanceof n(e).Element || e instanceof Element
    }
    function i(e) {
        return e instanceof n(e).HTMLElement || e instanceof HTMLElement
    }
    function a(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }
    function s(e) {
        return (o(e) ? e.ownerDocument : e.document).documentElement
    }
    function f(e) {
        return t(s(e)).left + r(e).scrollLeft
    }
    function c(e) {
        return n(e).getComputedStyle(e)
    }
    function p(e) {
        return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    }
    function l(e, o, c) {
        void 0 === c && (c = !1);
        var l = s(o);
        e = t(e);
        var u = i(o),
            d = {
                scrollLeft: 0,
                scrollTop: 0
            },
            m = {
                x: 0,
                y: 0
            };
        return (u || !u && !c) && (("body" !== a(o) || p(l)) && (d = o !== n(o) && i(o) ? {
            scrollLeft: o.scrollLeft,
            scrollTop: o.scrollTop
        } : r(o)), i(o) ? ((m = t(o)).x += o.clientLeft, m.y += o.clientTop) : l && (m.x = f(l))), {
            x: e.left + d.scrollLeft - m.x,
            y: e.top + d.scrollTop - m.y,
            width: e.width,
            height: e.height
        }
    }
    function u(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function d(e) {
        return "html" === a(e) ? e : e.assignedSlot || e.parentNode || e.host || s(e)
    }
    function m(e, t) {
        void 0 === t && (t = []);
        var r = function e(t) {
            return 0 <= ["html", "body", "#document"].indexOf(a(t)) ? t.ownerDocument.body : i(t) && p(t) ? t : e(d(t))
        }(e);
        e = "body" === a(r);
        var o = n(r);
        return r = e ? [o].concat(o.visualViewport || [], p(r) ? r : []) : r, t = t.concat(r), e ? t : t.concat(m(d(r)))
    }
    function h(e) {
        if (!i(e) || "fixed" === c(e).position)
            return null;
        if (e = e.offsetParent) {
            var t = s(e);
            if ("body" === a(e) && "static" === c(e).position && "static" !== c(t).position)
                return t
        }
        return e
    }
    function g(e) {
        for (var t = n(e), r = h(e); r && 0 <= ["table", "td", "th"].indexOf(a(r)) && "static" === c(r).position;)
            r = h(r);
        if (r && "body" === a(r) && "static" === c(r).position)
            return t;
        if (!r)
            e:
            {
                for (e = d(e); i(e) && 0 > ["html", "body"].indexOf(a(e));) {
                    if ("none" !== (r = c(e)).transform || "none" !== r.perspective || r.willChange && "auto" !== r.willChange) {
                        r = e;
                        break e
                    }
                    e = e.parentNode
                }
                r = null
            }return r || t
    }
    function b(e) {
        var t = new Map,
            n = new Set,
            r = [];
        return e.forEach((function(e) {
            t.set(e.name, e)
        })), e.forEach((function(e) {
            n.has(e.name) || function e(o) {
                n.add(o.name),
                [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
                    n.has(r) || (r = t.get(r)) && e(r)
                })),
                r.push(o)
            }(e)
        })), r
    }
    function v(e) {
        var t;
        return function() {
            return t || (t = new Promise((function(n) {
                Promise.resolve().then((function() {
                    t = void 0,
                    n(e())
                }))
            }))), t
        }
    }
    function y(e) {
        return e.split("-")[0]
    }
    function O(e, t) {
        var n = !(!t.getRootNode || !t.getRootNode().host);
        if (e.contains(t))
            return !0;
        if (n)
            do {
                if (t && e.isSameNode(t))
                    return !0;
                t = t.parentNode || t.host
            } while (t);
        return !1
    }
    function x(e) {
        return Object.assign(Object.assign({}, e), {}, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }
    function w(e, o) {
        if ("viewport" === o) {
            o = n(e);
            var a = s(e);
            o = o.visualViewport;
            var p = a.clientWidth;
            a = a.clientHeight;
            var l = 0,
                u = 0;
            o && (p = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = o.offsetLeft, u = o.offsetTop)),
            e = x(e = {
                width: p,
                height: a,
                x: l + f(e),
                y: u
            })
        } else
            i(o) ? ((e = t(o)).top += o.clientTop, e.left += o.clientLeft, e.bottom = e.top + o.clientHeight, e.right = e.left + o.clientWidth, e.width = o.clientWidth, e.height = o.clientHeight, e.x = e.left, e.y = e.top) : (u = s(e), e = s(u), l = r(u), o = u.ownerDocument.body, p = Math.max(e.scrollWidth, e.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Math.max(e.scrollHeight, e.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -l.scrollLeft + f(u), l = -l.scrollTop, "rtl" === c(o || e).direction && (u += Math.max(e.clientWidth, o ? o.clientWidth : 0) - p), e = x({
                width: p,
                height: a,
                x: u,
                y: l
            }));
        return e
    }
    function j(e, t, n) {
        return t = "clippingParents" === t ? function(e) {
            var t = m(d(e)),
                n = 0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e) ? g(e) : e;
            return o(n) ? t.filter((function(e) {
                return o(e) && O(e, n) && "body" !== a(e)
            })) : []
        }(e) : [].concat(t), (n = (n = [].concat(t, [n])).reduce((function(t, n) {
            return n = w(e, n), t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
        }), w(e, n[0]))).width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n
    }
    function M(e) {
        return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
    }
    function E(e) {
        var t = e.reference,
            n = e.element,
            r = (e = e.placement) ? y(e) : null;
        e = e ? e.split("-")[1] : null;
        var o = t.x + t.width / 2 - n.width / 2,
            i = t.y + t.height / 2 - n.height / 2;
        switch (r) {
        case "top":
            o = {
                x: o,
                y: t.y - n.height
            };
            break;
        case "bottom":
            o = {
                x: o,
                y: t.y + t.height
            };
            break;
        case "right":
            o = {
                x: t.x + t.width,
                y: i
            };
            break;
        case "left":
            o = {
                x: t.x - n.width,
                y: i
            };
            break;
        default:
            o = {
                x: t.x,
                y: t.y
            }
        }
        if (null != (r = r ? M(r) : null))
            switch (i = "y" === r ? "height" : "width", e) {
            case "start":
                o[r] = Math.floor(o[r]) - Math.floor(t[i] / 2 - n[i] / 2);
                break;
            case "end":
                o[r] = Math.floor(o[r]) + Math.ceil(t[i] / 2 - n[i] / 2)
            }
        return o
    }
    function D(e) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), e)
    }
    function P(e, t) {
        return t.reduce((function(t, n) {
            return t[n] = e, t
        }), {})
    }
    function k(e, n) {
        void 0 === n && (n = {});
        var r = n;
        n = void 0 === (n = r.placement) ? e.placement : n;
        var i = r.boundary,
            a = void 0 === i ? "clippingParents" : i,
            f = void 0 === (i = r.rootBoundary) ? "viewport" : i;
        i = void 0 === (i = r.elementContext) ? "popper" : i;
        var c = r.altBoundary,
            p = void 0 !== c && c;
        r = D("number" != typeof (r = void 0 === (r = r.padding) ? 0 : r) ? r : P(r, q));
        var l = e.elements.reference;
        c = e.rects.popper,
        a = j(o(p = e.elements[p ? "popper" === i ? "reference" : "popper" : i]) ? p : p.contextElement || s(e.elements.popper), a, f),
        p = E({
            reference: f = t(l),
            element: c,
            strategy: "absolute",
            placement: n
        }),
        c = x(Object.assign(Object.assign({}, c), p)),
        f = "popper" === i ? c : f;
        var u = {
            top: a.top - f.top + r.top,
            bottom: f.bottom - a.bottom + r.bottom,
            left: a.left - f.left + r.left,
            right: f.right - a.right + r.right
        };
        if (e = e.modifiersData.offset, "popper" === i && e) {
            var d = e[n];
            Object.keys(u).forEach((function(e) {
                var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
                    n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
                u[e] += d[n] * t
            }))
        }
        return u
    }
    function L() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return !t.some((function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        }))
    }
    function B(e) {
        void 0 === e && (e = {});
        var t = e.defaultModifiers,
            n = void 0 === t ? [] : t,
            r = void 0 === (e = e.defaultOptions) ? V : e;
        return function(e, t, i) {
            function a() {
                f.forEach((function(e) {
                    return e()
                })),
                f = []
            }
            void 0 === i && (i = r);
            var s = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign(Object.assign({}, V), r),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                f = [],
                c = !1,
                p = {
                    state: s,
                    setOptions: function(i) {
                        return a(), s.options = Object.assign(Object.assign(Object.assign({}, r), s.options), i), s.scrollParents = {
                            reference: o(e) ? m(e) : e.contextElement ? m(e.contextElement) : [],
                            popper: m(t)
                        }, i = function(e) {
                            var t = b(e);
                            return N.reduce((function(e, n) {
                                return e.concat(t.filter((function(e) {
                                    return e.phase === n
                                })))
                            }), [])
                        }(function(e) {
                            var t = e.reduce((function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
                                    options: Object.assign(Object.assign({}, n.options), t.options),
                                    data: Object.assign(Object.assign({}, n.data), t.data)
                                }) : t, e
                            }), {});
                            return Object.keys(t).map((function(e) {
                                return t[e]
                            }))
                        }([].concat(n, s.options.modifiers))), s.orderedModifiers = i.filter((function(e) {
                            return e.enabled
                        })), s.orderedModifiers.forEach((function(e) {
                            var t = e.name,
                                n = e.options;
                            n = void 0 === n ? {} : n,
                            "function" == typeof (e = e.effect) && (t = e({
                                state: s,
                                name: t,
                                instance: p,
                                options: n
                            }), f.push(t || function() {}))
                        })), p.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var e = s.elements,
                                t = e.reference;
                            if (L(t, e = e.popper))
                                for (s.rects = {
                                    reference: l(t, g(e), "fixed" === s.options.strategy),
                                    popper: u(e)
                                }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function(e) {
                                    return s.modifiersData[e.name] = Object.assign({}, e.data)
                                })), t = 0; t < s.orderedModifiers.length; t++)
                                    if (!0 === s.reset)
                                        s.reset = !1,
                                        t = -1;
                                    else {
                                        var n = s.orderedModifiers[t];
                                        e = n.fn;
                                        var r = n.options;
                                        r = void 0 === r ? {} : r,
                                        n = n.name,
                                        "function" == typeof e && (s = e({
                                            state: s,
                                            options: r,
                                            name: n,
                                            instance: p
                                        }) || s)
                                    }
                        }
                    },
                    update: v((function() {
                        return new Promise((function(e) {
                            p.forceUpdate(),
                            e(s)
                        }))
                    })),
                    destroy: function() {
                        a(),
                        c = !0
                    }
                };
            return L(e, t) ? (p.setOptions(i).then((function(e) {
                !c && i.onFirstUpdate && i.onFirstUpdate(e)
            })), p) : p
        }
    }
    function W(e) {
        var t,
            r = e.popper,
            o = e.popperRect,
            i = e.placement,
            a = e.offsets,
            f = e.position,
            c = e.gpuAcceleration,
            p = e.adaptive,
            l = window.devicePixelRatio || 1;
        e = Math.round(a.x * l) / l || 0,
        l = Math.round(a.y * l) / l || 0;
        var u = a.hasOwnProperty("x");
        a = a.hasOwnProperty("y");
        var d,
            m = "left",
            h = "top",
            b = window;
        if (p) {
            var v = g(r);
            v === n(r) && (v = s(r)),
            "top" === i && (h = "bottom", l -= v.clientHeight - o.height, l *= c ? 1 : -1),
            "left" === i && (m = "right", e -= v.clientWidth - o.width, e *= c ? 1 : -1)
        }
        return r = Object.assign({
            position: f
        }, p && _), c ? Object.assign(Object.assign({}, r), {}, ((d = {})[h] = a ? "0" : "", d[m] = u ? "0" : "", d.transform = 2 > (b.devicePixelRatio || 1) ? "translate(" + e + "px, " + l + "px)" : "translate3d(" + e + "px, " + l + "px, 0)", d)) : Object.assign(Object.assign({}, r), {}, ((t = {})[h] = a ? l + "px" : "", t[m] = u ? e + "px" : "", t.transform = "", t))
    }
    function A(e) {
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return U[e]
        }))
    }
    function H(e) {
        return e.replace(/start|end/g, (function(e) {
            return z[e]
        }))
    }
    function T(e, t, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x
        }
    }
    function R(e) {
        return ["top", "right", "bottom", "left"].some((function(t) {
            return 0 <= e[t]
        }))
    }
    var q = ["top", "bottom", "right", "left"],
        C = q.reduce((function(e, t) {
            return e.concat([t + "-start", t + "-end"])
        }), []),
        S = [].concat(q, ["auto"]).reduce((function(e, t) {
            return e.concat([t, t + "-start", t + "-end"])
        }), []),
        N = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
        V = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        },
        I = {
            passive: !0
        },
        _ = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        },
        U = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        },
        z = {
            start: "end",
            end: "start"
        },
        F = [{
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(e) {
                var t = e.state,
                    r = e.instance,
                    o = (e = e.options).scroll,
                    i = void 0 === o || o,
                    a = void 0 === (e = e.resize) || e,
                    s = n(t.elements.popper),
                    f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return i && f.forEach((function(e) {
                    e.addEventListener("scroll", r.update, I)
                })), a && s.addEventListener("resize", r.update, I), function() {
                    i && f.forEach((function(e) {
                        e.removeEventListener("scroll", r.update, I)
                    })),
                    a && s.removeEventListener("resize", r.update, I)
                }
            },
            data: {}
        }, {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state;
                t.modifiersData[e.name] = E({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        }, {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                e = void 0 === (e = n.gpuAcceleration) || e,
                n = void 0 === (n = n.adaptive) || n,
                e = {
                    placement: y(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: e
                },
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), W(Object.assign(Object.assign({}, e), {}, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: n
                })))),
                null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), W(Object.assign(Object.assign({}, e), {}, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1
                })))),
                t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        }, {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function(e) {
                    var n = t.styles[e] || {},
                        r = t.attributes[e] || {},
                        o = t.elements[e];
                    i(o) && a(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                        var t = r[e];
                        !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                    })))
                }))
            },
            effect: function(e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
                    Object.keys(t.elements).forEach((function(e) {
                        var r = t.elements[e],
                            o = t.attributes[e] || {};
                        e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                            return e[t] = "", e
                        }), {}),
                        i(r) && a(r) && (Object.assign(r.style, e), Object.keys(o).forEach((function(e) {
                            r.removeAttribute(e)
                        })))
                    }))
                }
            },
            requires: ["computeStyles"]
        }, {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state,
                    n = e.name,
                    r = void 0 === (e = e.options.offset) ? [0, 0] : e,
                    o = (e = S.reduce((function(e, n) {
                        var o = t.rects,
                            i = y(n),
                            a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
                            s = "function" == typeof r ? r(Object.assign(Object.assign({}, o), {}, {
                                placement: n
                            })) : r;
                        return o = (o = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? {
                            x: s,
                            y: o
                        } : {
                            x: o,
                            y: s
                        }, e[n] = i, e
                    }), {}))[t.placement],
                    i = o.x;
                o = o.y,
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += o),
                t.modifiersData[n] = e
            }
        }, {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                if (e = e.name, !t.modifiersData[e]._skip) {
                    var r = n.mainAxis;
                    r = void 0 === r || r;
                    var o = n.altAxis;
                    o = void 0 === o || o;
                    var i = n.fallbackPlacements,
                        a = n.padding,
                        s = n.boundary,
                        f = n.rootBoundary,
                        c = n.altBoundary,
                        p = n.flipVariations,
                        l = void 0 === p || p,
                        u = n.allowedAutoPlacements;
                    p = y(n = t.options.placement),
                    i = i || (p !== n && l ? function(e) {
                        if ("auto" === y(e))
                            return [];
                        var t = A(e);
                        return [H(e), t, H(t)]
                    }(n) : [A(n)]);
                    var d = [n].concat(i).reduce((function(e, n) {
                        return e.concat("auto" === y(n) ? function(e, t) {
                            void 0 === t && (t = {});
                            var n = t.boundary,
                                r = t.rootBoundary,
                                o = t.padding,
                                i = t.flipVariations,
                                a = t.allowedAutoPlacements,
                                s = void 0 === a ? S : a,
                                f = t.placement.split("-")[1];
                            0 === (i = (t = f ? i ? C : C.filter((function(e) {
                                return e.split("-")[1] === f
                            })) : q).filter((function(e) {
                                return 0 <= s.indexOf(e)
                            }))).length && (i = t);
                            var c = i.reduce((function(t, i) {
                                return t[i] = k(e, {
                                    placement: i,
                                    boundary: n,
                                    rootBoundary: r,
                                    padding: o
                                })[y(i)], t
                            }), {});
                            return Object.keys(c).sort((function(e, t) {
                                return c[e] - c[t]
                            }))
                        }(t, {
                            placement: n,
                            boundary: s,
                            rootBoundary: f,
                            padding: a,
                            flipVariations: l,
                            allowedAutoPlacements: u
                        }) : n)
                    }), []);
                    n = t.rects.reference,
                    i = t.rects.popper;
                    var m = new Map;
                    p = !0;
                    for (var h = d[0], g = 0; g < d.length; g++) {
                        var b = d[g],
                            v = y(b),
                            O = "start" === b.split("-")[1],
                            x = 0 <= ["top", "bottom"].indexOf(v),
                            w = x ? "width" : "height",
                            j = k(t, {
                                placement: b,
                                boundary: s,
                                rootBoundary: f,
                                altBoundary: c,
                                padding: a
                            });
                        if (O = x ? O ? "right" : "left" : O ? "bottom" : "top", n[w] > i[w] && (O = A(O)), w = A(O), x = [], r && x.push(0 >= j[v]), o && x.push(0 >= j[O], 0 >= j[w]), x.every((function(e) {
                            return e
                        }))) {
                            h = b,
                            p = !1;
                            break
                        }
                        m.set(b, x)
                    }
                    if (p)
                        for (r = function(e) {
                            var t = d.find((function(t) {
                                if (t = m.get(t))
                                    return t.slice(0, e).every((function(e) {
                                        return e
                                    }))
                            }));
                            if (t)
                                return h = t, "break"
                        }, o = l ? 3 : 1; 0 < o && "break" !== r(o); o--)
                            ;
                    t.placement !== h && (t.modifiersData[e]._skip = !0, t.placement = h, t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        }, {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options;
                e = e.name;
                var r = n.mainAxis,
                    o = void 0 === r || r;
                r = void 0 !== (r = n.altAxis) && r;
                var i = n.tether;
                i = void 0 === i || i;
                var a = n.tetherOffset,
                    s = void 0 === a ? 0 : a;
                n = k(t, {
                    boundary: n.boundary,
                    rootBoundary: n.rootBoundary,
                    padding: n.padding,
                    altBoundary: n.altBoundary
                }),
                a = y(t.placement);
                var f = t.placement.split("-")[1],
                    c = !f,
                    p = M(a);
                a = "x" === p ? "y" : "x";
                var l = t.modifiersData.popperOffsets,
                    d = t.rects.reference,
                    m = t.rects.popper,
                    h = "function" == typeof s ? s(Object.assign(Object.assign({}, t.rects), {}, {
                        placement: t.placement
                    })) : s;
                if (s = {
                    x: 0,
                    y: 0
                }, l) {
                    if (o) {
                        var b = "y" === p ? "top" : "left",
                            v = "y" === p ? "bottom" : "right",
                            O = "y" === p ? "height" : "width";
                        o = l[p];
                        var x = l[p] + n[b],
                            w = l[p] - n[v],
                            j = i ? -m[O] / 2 : 0,
                            E = "start" === f ? d[O] : m[O];
                        f = "start" === f ? -m[O] : -d[O],
                        m = t.elements.arrow,
                        m = i && m ? u(m) : {
                            width: 0,
                            height: 0
                        };
                        var D = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        };
                        b = D[b],
                        v = D[v],
                        m = Math.max(0, Math.min(d[O], m[O])),
                        E = c ? d[O] / 2 - j - m - b - h : E - m - b - h,
                        c = c ? -d[O] / 2 + j + m + v + h : f + m + v + h,
                        h = t.elements.arrow && g(t.elements.arrow),
                        d = t.modifiersData.offset ? t.modifiersData.offset[t.placement][p] : 0,
                        h = l[p] + E - d - (h ? "y" === p ? h.clientTop || 0 : h.clientLeft || 0 : 0),
                        c = l[p] + c - d,
                        i = Math.max(i ? Math.min(x, h) : x, Math.min(o, i ? Math.max(w, c) : w)),
                        l[p] = i,
                        s[p] = i - o
                    }
                    r && (r = l[a], i = Math.max(r + n["x" === p ? "top" : "left"], Math.min(r, r - n["x" === p ? "bottom" : "right"])), l[a] = i, s[a] = i - r),
                    t.modifiersData[e] = s
                }
            },
            requiresIfExists: ["offset"]
        }, {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t,
                    n = e.state;
                e = e.name;
                var r = n.elements.arrow,
                    o = n.modifiersData.popperOffsets,
                    i = y(n.placement),
                    a = M(i);
                if (i = 0 <= ["left", "right"].indexOf(i) ? "height" : "width", r && o) {
                    var s = n.modifiersData[e + "#persistent"].padding,
                        f = u(r),
                        c = "y" === a ? "top" : "left",
                        p = "y" === a ? "bottom" : "right",
                        l = n.rects.reference[i] + n.rects.reference[a] - o[a] - n.rects.popper[i];
                    o = o[a] - n.rects.reference[a],
                    l = (r = (r = g(r)) ? "y" === a ? r.clientHeight || 0 : r.clientWidth || 0 : 0) / 2 - f[i] / 2 + (l / 2 - o / 2),
                    i = Math.max(s[c], Math.min(l, r - f[i] - s[p])),
                    n.modifiersData[e] = ((t = {})[a] = i, t.centerOffset = i - l, t)
                }
            },
            effect: function(e) {
                var t = e.state,
                    n = e.options;
                e = e.name;
                var r = n.element;
                if (r = void 0 === r ? "[data-popper-arrow]" : r, n = void 0 === (n = n.padding) ? 0 : n, null != r) {
                    if ("string" == typeof r && !(r = t.elements.popper.querySelector(r)))
                        return;
                    O(t.elements.popper, r) && (t.elements.arrow = r, t.modifiersData[e + "#persistent"] = {
                        padding: D("number" != typeof n ? n : P(n, q))
                    })
                }
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        }, {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state;
                e = e.name;
                var n = t.rects.reference,
                    r = t.rects.popper,
                    o = t.modifiersData.preventOverflow,
                    i = k(t, {
                        elementContext: "reference"
                    }),
                    a = k(t, {
                        altBoundary: !0
                    });
                n = T(i, n),
                r = T(a, r, o),
                o = R(n),
                a = R(r),
                t.modifiersData[e] = {
                    referenceClippingOffsets: n,
                    popperEscapeOffsets: r,
                    isReferenceHidden: o,
                    hasPopperEscaped: a
                },
                t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
                    "data-popper-reference-hidden": o,
                    "data-popper-escaped": a
                })
            }
        }],
        X = B({
            defaultModifiers: F
        });
    e.createPopper = X,
    e.defaultModifiers = F,
    e.detectOverflow = k,
    e.popperGenerator = B,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));
;

window.mrp_open_new_window = function(url, width, height, name) {

    function optimalWindowHeight(desired)
    {
        if (desired && desired < screen.availHeight) {
            return desired;
        }

        var h = 500;
        if (screen.availHeight > 600) {
            h = 700;
        }
        if (screen.availHeight > 800) {
            h = 800;
        }
        return h;
    }

    if (!height) {
        height = optimalWindowHeight();
    }

    var left = parseInt((screen.availWidth / 2) - (width / 2));
    var top = parseInt((screen.availHeight / 2) - (height / 2));

    if (!name) {
        name = "" + parseInt((Math.random() * 100000));
    }
    var w = window.open(url, name, "width=" + width + ",height=" + height +
    ",scrollbars=1,location=1,left=" + left + ",top=" + top + ",screenX=" + left + ",screenY=" + top);

    if (w == null) {
        alert("Please enable popups in your browser");
    }
    else {
        w.focus();
    }

    return w;
};

// DOMParser patch for IOS Safari
(function(DOMParser) {
    "use strict";

    var proto = DOMParser.prototype,
        nativeParse = proto.parseFromString;

    // Firefox/Opera/IE throw errors on unsupported types
    try {
        // WebKit returns null on unsupported types
        if ((new DOMParser()).parseFromString("", "text/html")) {
            // text/html parsing is natively supported
            return;
        }
    } catch (ex) {}

    proto.parseFromString = function(markup, type) {
        if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
            var doc = document.implementation.createHTMLDocument("");
            if (markup.toLowerCase().indexOf('<!doctype') > -1) {
                doc.documentElement.innerHTML = markup;
            } else {
                doc.body.innerHTML = markup;
            }
            return doc;
        } else {
            return nativeParse.apply(this, arguments);
        }
    };
}(DOMParser));

function get_if_exist(obj) {
    if (!obj) {
        return undefined;
    }
    return arguments.length == 1 || (obj[arguments[1]] && get_if_exist.apply(this, [obj[arguments[1]]].concat([].slice.call(arguments, 2))));
}

const _G = {
    reinitHandlers: [],
    isMobile: () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
}

;
(function() {
    _G.visibilityService = (function() {

        const options = {
            threshold: [0, 0.1, 0.2, 0.4, 0.6, 0.8]
        }

        const observer = new IntersectionObserver(entries => {
            (entries || []).forEach(entry => {
                if (typeof entry.target.__visibility === 'function') {

                    const isLikelyMobile = window.innerWidth < window.innerHeight
                    const defaultVisibilityRatio = isLikelyMobile ? 0.01 : 0.2;

                    const ratio = getComputedStyle(entry.target)
                    .getPropertyValue('--visibility-ratio') || defaultVisibilityRatio;

                    if (entry.intersectionRatio >= ratio /* && !document.querySelector('html').classList.contains('editing') */
                    ) {
                        entry.target.__visibility(entry)
                    }
                }
            })
        }, options)

        const observe = (el, callback) => {
            el.__visibility = callback
            observer.observe(el)
        }

        const unobserve = (el) => {
            observer.unobserve(el)
        }

        return {
            observe,
            unobserve,
        }
    })()
})()


function _initBlocks() {
    for (let m of (window.block_code_modules || [])) {
        try {
            m && m.init && m.init(m.id, m)
        } catch (err) {
            console.log('Error initing module', m.id, err)
        }
    }
}

function _destroyBlocks() {
    for (let m of (window.block_code_modules || [])) {
        try {
            m && m.destroy && m.destroy()
        } catch (err) {
            console.log('Error destroying module', m.id, err)
        }
    }
}

_G.parallaxService = (function() {

    const BASE_SPEED = 0.7

    let stopped = false
    const elements = []
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target._parallaxVisible = entry.isIntersecting
            recalc(entry.target)
        })
    }, {

    })// blank options

    window.addEventListener('scroll', (ev) => {
        requestAnimationFrame(() => {
            recalcAll()
        })

    }, {
        passive: true
    })

    const calcShift = (elem) => {
        /*
                * calculates a number -1..0..1 where 0 is dead center of the element in viewport
                * -1 is when the element touches with its top the top edge of the viewport
                * 1 is when the element touches with its bottom the bottom edge of the viewport
                *
                * */
        const rect = elem.parentElement.getBoundingClientRect()
        const bgRect = elem.getBoundingClientRect()
        const elemFreeHeight = window.innerHeight - rect.height
        const bgFreeHeight = window.innerHeight - bgRect.height
        const shapeCenterY = rect.top + (rect.height / 2)
        const viewportCenterY = window.innerHeight / 2
        const delta = viewportCenterY - shapeCenterY
        // adjusting speed is necessary for containers that are shorter than
        // viewport height and have bg element with some spare space top and
        // bottom to allow for differential scroll speeds. If these conditions
        // are not met, we fall back to the base speed. Otherwise, we calculate the
        // ideal speed based on the amount of spare image space and size of
        // container. The idea is that the top of bg image reach the top
        // of the viewport at exactly the same time as the container to avoid exposing
        // any areas uncovered by the image.
        const shouldAdjustSpeed = bgRect.height < window.innerHeight
        && rect.height < window.innerHeight
        && bgRect.height >= rect.height

        const baseSpeed = shouldAdjustSpeed
        ? bgFreeHeight / elemFreeHeight
        : BASE_SPEED

        const translateValue = (1 - baseSpeed) * delta
        // console.log( delta, acceleration, adjustedRatio,  translateValue )

        return translateValue.toFixed(4)
    }

    const recalcAll = () => {
        if (stopped) {
            return
        }
        elements.forEach(elem => {
            recalc(elem)
        })
    }

    const recalc = (elem) => {
        if (stopped) {
            return
        }
        if (elem._parallaxVisible) {
            elem.style.transform = 'translate(0,' + calcShift(elem) + 'px)' +
            (elem.classList.contains('blur') ? ' scale(1.1)' : '')
        }
    }

    const add = (elem) => {
        if (!elem) {
            return
        }
        elem._parallaxVisible = false
        elements.push(elem)
        observer.observe(elem)
        recalc(elem)
    }

    const remove = (elem) => {
        const index = elements.indexOf(elem)
        if (index !== -1) {
            elements.splice(index, 1)
        }
        observer.unobserve(elem)
    }

    const setStopped = (flag) => {
        stopped = flag
    }

    const refresh = () => {
        recalcAll()
    }

    const cleanup = () => {
        // cleanup potentially stale elements, i.e. detached from DOM
        // may happen after a block was re-inserted in the editor
        elements.slice().filter(elem => {
            if (!document.body.contains(elem)) {
                remove(elem)
            }
        })
    }

    return {
        setStopped,
        refresh,
        add,
        remove,
        cleanup,
    }
})()

_G.fxService = (function() {

    let queue = []
    let revealLaunched = null

    function cleanupFastScrolled() {
        // const snapshot = queue.map( el => {
        //     let rect = el.getBoundingClientRect()
        //     let top = rect.top
        //     let bottom = rect.bottom
        //     return {
        //         el,
        //         top,
        //         bottom,
        //         scrolledOutOfView: bottom < 0,
        //     }
        // })
        // console.log( 'REVEAL', snapshot )
        while (queue.length > 0) {
            let el = queue.at(0)
            if (!el) {
                break;
            }
            let rect = el.getBoundingClientRect()
            if (rect.bottom < 0) {
                queue.shift().classList.remove('fx')
            }
            else {
                break;
            }
        }
    }

    function revealStaggered() {
        if (revealLaunched !== null) {
            return
        }
        if (queue.length === 0) {
            return
        }
        revealLaunched = setInterval(() => {
            if (queue.length === 0) {
                clearInterval(revealLaunched)
                revealLaunched = null
                return
            }
            cleanupFastScrolled()
            queue.shift().classList.remove('fx')
        }, 100)
    }

    function initElem(el) {
        if (!el || el.__fx_inited) {
            return
        }

        if (el.closest('.managed-fx')) {
            return
        }

        el.__fx_inited = true
        _G.visibilityService.observe(el, result => {

            if (!el.classList.contains('fx')) {
                return // probably already revealed
            }
            queue.push(el)
            revealStaggered()
            _G.visibilityService.unobserve(el)
        })
    }

    function init() {
        document.querySelectorAll('.fx').forEach(initElem)
    }

    return {
        init,
        initElem
    }
})()


document.addEventListener('DOMContentLoaded', () => {

    if (window.customOnLoads) {
        window.customOnLoads.forEach(f => {
            try {
                if (typeof f === 'function') {
                    f()
                }
            }
            catch (ex) {
                console.error('ERROR: failed to run customOnLoad: ', ex);
            }
        })
    }

    function initVideo(v) {
        if (v.__videoInited) {
            return
        }
        v.__videoInited = true
        v.addEventListener('pause', () => {
            v.__paused = true
        })
        _G.visibilityService.observe(v, result => {
            if (result.isIntersecting) {
                if (v.__paused) {
                    return
                }
                v.muted = true
                v.play()
                if (v.getAttribute("data-speed")) {
                    v.playbackRate = parseFloat(v.getAttribute("data-speed"))
                }



            }
        })
    }
    // if( document.querySelector('html').classList.contains('editing') ) {
    //v.pause()
    // }

    _G.fxService.init()
    _G.reinitHandlers.push(id => {
        document.getElementById(id).querySelectorAll('.fx').forEach(el => {
            _G.fxService.initElem(el)
        })
        document.querySelectorAll('video[data-autoplay="true"]').forEach(initVideo)
    })


    document.querySelectorAll('.with-scroll-parallax').forEach(elem => {
        _G.parallaxService.add(elem)
    })
    document.querySelectorAll('.with-smart-bg.with-bg-video video').forEach((v => {
        v.muted = true
        v.play()
    }))

    document.querySelectorAll('video.video[data-autoplay="true"]').forEach(initVideo)

    document.addEventListener('editor.on', () => {
    })

    _G.quickMessage = (msg, options={}) => {
        const m = document.createElement('div')
        m.classList.add('quick-message')
        if (options.error) {
            m.classList.add('error')
        }
        m.style.opacity = '0'
        m.innerText = msg
        document.body.appendChild(m)
        setTimeout(() => {
            m.style.opacity = '1'
        }, 10)
        setTimeout(() => {
            m.style.opacity = '0'
            m.addEventListener('transitionend', () => {
                m.remove()
            }, {
                once: true
            })
        }, 3000)
        m.addEventListener('click', ev => {
            m.style.opacity = '0'
            m.addEventListener('transitionend', () => {
                m.remove()
            }, {
                once: true
            })
        }, {
            once: true
        })
    }

    _G.applyRipple = function(event, button) {

        const circle = document.createElement("span")
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`
        const rect = button.getBoundingClientRect()
        circle.style.left = `${event.clientX - (rect.left + radius)}px`
        circle.style.top = `${event.clientY - (rect.top + radius)}px`
        circle.classList.add("ripple")

        const ripple = button.getElementsByClassName("ripple")[0]
        if (ripple) {
            ripple.remove()
        }

        button.appendChild(circle)

        circle.addEventListener('animationend', () => {
            circle.remove()
        }, {
            once: true
        })
    }

    _G.createFragment = htmlStr => {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    }

    function scrollToBlock(id) {
        console.log('will scroll to ', id)
        const elem = document.querySelector(id)
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            })
            history.pushState({}, '', id)

        }
    }
    // window.location.hash = id

    document.addEventListener('click', event => {
        if (event.target && (event.target.matches('.block-layout .button') || event.target.matches('.block-layout .button *'))) {
            const button = event.target.closest('.button')
            if (button) {
                _G.applyRipple(event, button)
                if (button.tagName === 'BUTTON') {
                    const form = button.closest('form')
                    if (form && form.getAttribute('action') &&
                    form.getAttribute('action').indexOf('#bid_') === 0) {
                        event.stopPropagation()
                        event.preventDefault()
                        scrollToBlock(form.getAttribute('action'))
                    }
                }
            }
        }
        if (event.target && (event.target.matches('.block-layout a') || event.target.matches('.block-layout a *'))) {
            const link = event.target.closest('a')
            if (link && link.getAttribute('href') && link.getAttribute('href').indexOf('#bid_') === 0) {
                event.stopPropagation()
                event.preventDefault()
                scrollToBlock(link.getAttribute('href'))
            }
        }
    })
})

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}

function openTranslate(toLang) {
    toLang = toLang || "en";
    window.open("https://" + window.location.hostname.replaceAll("-", "--")
    .replaceAll(".", "-") + ".translate.goog" + window.location.pathname +
    "?_x_tr_sl=auto&_x_tr_tl=" + toLang + "&_x_tr_hl=en&_x_tr_pto=wapp' target='_blank'>Translate Page")
}

function mrp_basic_auth_logout(safelocation) {
    const c = '';
    var a,
        b = "You should be logged out now.";
    try {
        a = document.execCommand("ClearAuthenticationCache", 'false')
    } catch (d) {
    }
    a || ((a = window.XMLHttpRequest ? new window.XMLHttpRequest : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : void 0) ?
    (a.open("HEAD", c || location.href, !0, "logout", (new Date).getTime().toString()), a.send(""), a = 1) : a = void 0);
    a || (b = "Your browser is too old or too weird to support log out functionality. Close all windows and restart the browser.");
    // alert(b)
    document.body.innerHTML = '';
    setTimeout(() => {
        const url = window.location.href;
        const fake = btoa('logout:logout')// history.replaceState({}, '', url + '?t' + Date.now() );
        window.location = safelocation || 'https://private-office.myrealpage.com'








    }, // fetch( url, {
    //     headers: {
    //         'Authorization': 'Basic fake'
    //     }
    // })
    // .finally( () => {
    //
    // });
    1000)
}

/* ==== INCLUDE: /js/responsive-containers-mod.js ==== */

/*
MIT Licensed.
Copyright (c) 2011 Andy Hume (http://andyhume.net, andyhume@gmail.com).
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function(win) {

    if (window.responsiveContainersLoaded) {
        return;
    }

    window.responsiveContainersLoaded = true;

    var doc = win.document,
        els = [],
        check_data_attributes = true,
        loaded = false;


    if (window.mrp_v2_ready) {
        window.mrp_v2_ready(function() {
            _gmrp.$(document).on("mrp.responsify.containers mrp.popup.close",
            function(e) {
                //console.log( "mrp.ajax-idx.show" );
                for (var i = 0; i < els.length; ++i) {
                    delete els[i].cq_rules;
                }
                els = [];
                //var b = new Date().getTime();
                findContainerQueries();
                applyRules();

            }
            );
        });
    }
    //console.log( ( new Date().getTime() - b  ) + "ms" );

    function add(elements, query, value, class_name) {
        var split_value = /([0-9]*)(px|em)/.exec(value);
        for (var i = 0, j = elements.length; i < j; ++i) {
            var el = elements[i];
            el.cq_rules = el.cq_rules || [];
            el.cq_rules.push([null, query, split_value[1], split_value[2], class_name]);
            els.push(el);
        }
        if (loaded) {
            // if we're not 'loaded' yet, domLoaded will run applyRules() for us.
            applyRules();
        }
    }

    function ignoreDataAttributes() {
        check_data_attributes = false;
    }

    function findContainerQueries() {
        if (check_data_attributes) {
            // Find data-squery attributes.
            var nodes = [];
            if (doc.querySelectorAll) {
                var nodes = doc.querySelectorAll("[data-squery]");
            } else {
                // If no query selectors.
                var e = doc.getElementsByTagName("*");
                for (var i = 0, j = e.length; i < j; ++i) {
                    if (e[i].getAttribute("data-squery")) {
                        nodes.push(e[i]);
                    }
                }
            }
            // Parse the data-squery attribute and store resulting rules on the element.
            for (var i = 0, j = nodes.length; i < j; ++i) {
                var el = nodes[i];
                if (el.cq_rules && el.cq_rules.length > 0) {
                    continue;
                }
                var cq_rules = [];
                var raw_rules = el.getAttribute("data-squery").split(" ");
                for (var k = 0, l = raw_rules.length; k < l; ++k) {
                    var rule = /(.*):([0-9]*)(px|em)=(.*)/.exec(raw_rules[k]);
                    if (rule) {
                        cq_rules.push(rule);
                    }
                }
                el.cq_rules = el.cq_rules || [];
                el.cq_rules = el.cq_rules.concat(cq_rules);
                els.push(el);
            }
        }
    }

    function applyRules() {
        // For each element, apply the rules to the class name.
        console.log("els:", els.length);
        for (var i = 0, j = els.length; i < j; ++i) {
            el = els[i];
            console.log("els.cq_rules:", el.cq_rules.length);
            for (var k = 0, l = el.cq_rules.length; k < l; ++k) {
                var rule = el.cq_rules[k];

                // Get a target width value in pixels.
                var width = parseInt(rule[2]);
                if (rule[3] === "em") {
                    width = emsToPixels(parseFloat(rule[2]), el);
                }

                // Calculate the width of the target without the class added.
                var defaultWidth = getDefaultWidth(el, rule[4]);
                // Test current width against target width and add/remove class values.
                if (compareFunction[rule[1]](defaultWidth, width)) {
                    window._gmrp && _gmrp.$ && _gmrp.$(document).trigger("mrp.resp.container.change", "+" + rule[4]);
                    if (el.className.indexOf(rule[4]) < 0) {
                        el.className += " " + rule[4];
                    }
                } else {
                    window._gmrp && _gmrp.$ && _gmrp.$(document).trigger("mrp.resp.container.change", "-" + rule[4]);
                    var class_name = el.className.replace(new RegExp('(^| )' + rule[4] + '( |$)'), '$1');
                    class_name = class_name.replace(/ $/, '');
                    el.className = class_name;
                }
            }
        }
    }

    var compareFunction = {
        "min-width": function(a, b) {
            return a > b;
        },
        "max-width": function(a, b) {
            return a < b;
        }
    }

    function contentReady() {
        if (loaded) {
            return;
        }
        loaded = true;
        findContainerQueries();
        applyRules();
        if (win.addEventListener) {
            win.addEventListener("resize", applyRules, false);

        }
        // Allow for resizing text after the page has loaded.
        var current_em = emsToPixels(1, doc.body);
        win.setInterval(function() {
            var new_em = emsToPixels(1, doc.body);
            if (new_em !== current_em) {
                applyRules();
                current_em = new_em;
            }
        }, 2000);
    }

    function memoize(f) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            f.memoize = f.memoize || {};
            return (args in f.memoize) ? f.memoize[args] : f.memoize[args] = f.apply(this, args);
        };
    }

    var emsToPixels = memoize(function(em, scope) {
        var test = doc.createElement("div");
        test.style.fontSize = "1em";
        test.style.margin = "0";
        test.style.padding = "0";
        test.style.border = "none";
        test.style.width = "1em";
        scope.appendChild(test);
        var val = test.offsetWidth;
        scope.removeChild(test);
        return Math.round(val * em);
    });

    var getDefaultWidth = function(el, class_name) {
        if (true) {
            // we don't need to be fancy, simple width is ok, all the resp containers are flexible
            return el.offsetWidth;
        }
        //console.log( "hit width", el );
        var test = el.cloneNode(true);
        test.className = (" " + test.className + " ").replace(" " + class_name + " ", " ");
        test.style.height = 0;
        test.style.visibility = "hidden";
        test.style.overflow = "hidden";
        test.style.clear = "both";
        var parent = el.parentNode;
        parent.insertBefore(test, el);
        var val = test.offsetWidth;
        parent.removeChild(test);
        return val;
    }

    if (window.addEventListener) {
        console.log("installing mrpRescanResponsifyContainers listener");
        window.addEventListener("mrpRescanResponsifyContainers", function() {
            console.log("mrpRescanResponsifyContainers");
            findContainerQueries();
            applyRules();
        }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent("mrpRescanResponsifyContainers", function() {
            findContainerQueries();
            applyRules();
        });
    }

    if (/loaded|complete|interactive/.test(doc.readyState)) {
        contentReady();
    }
    else if (doc.addEventListener) {
        doc.addEventListener("DOMContentLoaded", contentReady, false);
        // or
        win.addEventListener("load", contentReady, false);
    }

    else // If old IE
    if (doc.attachEvent) {
        doc.attachEvent("onreadystatechange", contentReady);
        // or
        win.attachEvent("onload", contentReady);
    }


    win["SelectorQueries"] = {
        "add": add,
        "ignoreDataAttributes": ignoreDataAttributes
    }

})(this);

/* ==== INCLUDE: /js/blocks/menu200c.js ==== */

document.addEventListener('DOMContentLoaded', ev => {

    document.body.addEventListener('mouseover', ev => {

        if (document.querySelector('html').classList.contains('editing')) {
            return
        }
        if (!ev.target.matches('.hmenu2 li.has-submenu, .hmenu2 li.has-submenu > *')) {
            return
        }
        const el = ev.target.closest('li')
        ev.preventDefault()
        ev.stopPropagation()

        document.querySelectorAll('.hmenu2 li.open').forEach(open => {
            if (open.contains(el)) {
                return
            }
            open.classList.remove('open')
            open.classList.remove('visible')
        })
        if (el.classList.contains('open')) {
            // toggle
            el.classList.remove('open');
            el.classList.remove('visible');
            return;
        }
        // open -> does display: block which acquires dimension for popper
        el.classList.add('open')
        setTimeout(() => {
            // then we fade it in
            el.classList.add('visible')
        }, 100)

        if (el.__popper) {
            el.__popper.update()
            return
        }

        console.log('placement', el.closest('ul').classList.contains('mrp-menu-level-0') ? 'bottom-start' : 'right-start')

        el.__popper = Popper.createPopper(el, el.querySelector('ul'), {
            placement: el.closest('ul').classList.contains('mrp-menu-level-0') ? 'bottom-start' : 'right-start',
        })
    })

})
/*!
 * Mmenu Light
 * mmenujs.com/mmenu-light
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 *
 * MODIFIED with new class names
 */

!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var s = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    },
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var s in t)
                n.d(i, s, function(e) {
                    return t[e]
                }.bind(null, s));
        return i
    },
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    },
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    n.p = "",
    n(n.s = 0)
}([function(t, e, n) {
    "use strict";
    n.r(e);
    var i = function() {
            function t(t) {
                var e = this;
                this.listener = function(t) {
                    (t.matches ? e.matchFns : e.unmatchFns).forEach((function(t) {
                        t()
                    }))
                },
                this.toggler = window.matchMedia(t),
                this.toggler.addListener(this.listener),
                this.matchFns = [],
                this.unmatchFns = []
            }
            return t.prototype.add = function(t, e) {
                this.matchFns.push(t),
                this.unmatchFns.push(e),
                (this.toggler.matches ? t : e)()
            }, t
        }(),
        s = function(t) {
            return Array.prototype.slice.call(t)
        },
        o = function(t, e) {
            return s((e || document).querySelectorAll(t))
        },
        r = ("ontouchstart" in window || navigator.msMaxTouchPoints, navigator.userAgent.indexOf("MSIE") > -1 || navigator.appVersion.indexOf("Trident/") > -1),
        a = "mm2-spn",
        c = function() {
            function t(t, e, n, i, s) {
                this.node = t,
                this.title = e,
                this.slidingSubmenus = i,
                this.selectedClass = n,
                this.node.classList.add(a),
                r && (this.slidingSubmenus = !1),
                this.node.classList.add(a + "--" + s),
                this.node.classList.add(a + "--" + (this.slidingSubmenus ? "navbar" : "vertical")),
                this._setSelectedl(),
                this._initAnchors()
            }
            return Object.defineProperty(t.prototype, "prefix", {
                get: function() {
                    return a
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.openPanel = function(t) {
                var e = t.parentElement;
                if (this.slidingSubmenus) {
                    var n = t.dataset.mmSpnTitle;
                    e === this.node ? this.node.classList.add(a + "--main") : (this.node.classList.remove(a + "--main"), n || s(e.children).forEach((function(t) {
                        t.matches("a, span") && (n = t.textContent)
                    }))),
                    n || (n = this.title),
                    this.node.dataset.mmSpnTitle = n,
                    o(".mm2-spn--open", this.node).forEach((function(t) {
                        t.classList.remove(a + "--open"),
                        t.classList.remove(a + "--parent")
                    })),
                    t.classList.add(a + "--open"),
                    t.classList.remove(a + "--parent");
                    for (var i = t.parentElement.closest("ul"); i;)
                        i.classList.add(a + "--open"),
                        i.classList.add(a + "--parent"),
                        i = i.parentElement.closest("ul")
                } else {
                    var r = t.matches(".mm2-spn--open");
                    r ? e.classList.remove(a + "--open-parent") : e.classList.add(a + "--open-parent"),
                    t.classList[r ? "remove" : "add"](a + "--open");
                    for (var c = t.parentElement.closest("ul"); c;)
                        c.classList.add(a + "--open"),
                        c = c.parentElement.closest("ul")
                }
            }, t.prototype._setSelectedl = function() {
                var t = o("." + this.selectedClass, this.node),
                    e = t[t.length - 1],
                    n = null;
                e && (n = e.closest("ul")),
                n || (n = this.node.querySelector("ul")),
                this.openPanel(n)
            }, t.prototype._initAnchors = function() {
                var t = this;
                this.node.addEventListener("click", (function(e) {
                    var n = e.target,
                        i = !1;
                    (i = (i = (i = i || function(t) {
                        return !!t.matches("a")
                    }(n)) || function(e) {
                        var n;
                        return !!(n = e.closest("span") ? e.parentElement : !!e.closest("li") && e) && (s(n.children).forEach((function(e) {
                                e.matches("ul") && t.openPanel(e)
                            })), !0)
                    }(n)) || function(e) {
                        var n = o(".mm2-spn--open", e),
                            i = n[n.length - 1];
                        if (i) {
                            var s = i.parentElement.closest("ul");
                            if (s)
                                return t.openPanel(s), !0
                        }
                        return !1
                    }(n)) && e.stopImmediatePropagation()
                }))
            }, t
        }(),
        d = function() {
            function t(t, e) {
                var n = this;
                void 0 === t && (t = null),
                this.wrapper = document.createElement("div"),
                this.wrapper.classList.add("mm2-ocd"),
                this.wrapper.classList.add("mm2-ocd--" + e),
                this.content = document.createElement("div"),
                this.content.classList.add("mm2-ocd__content"),
                this.wrapper.append(this.content),
                this.backdrop = document.createElement("div"),
                this.backdrop.classList.add("mm2-ocd__backdrop"),
                this.wrapper.append(this.backdrop),
                document.body.append(this.wrapper),
                t && this.content.append(t);
                var i = function(t) {
                    n.close(),
                    t.stopImmediatePropagation()
                };
                this.backdrop.addEventListener("touchstart", i, {
                    passive: !0
                }),
                this.backdrop.addEventListener("mousedown", i, {
                    passive: !0
                })
            }
            return Object.defineProperty(t.prototype, "prefix", {
                get: function() {
                    return "mm2-ocd"
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.open = function() {
                this.wrapper.classList.add("mm2-ocd--open"),
                document.querySelector('html').classList.add("mm2-ocd-opened")
            }, t.prototype.close = function() {
                this.wrapper.classList.remove("mm2-ocd--open"),
                document.querySelector('html').classList.remove("mm2-ocd-opened")
            }, t
        }(),
        l = function() {
            function t(t, e) {
                void 0 === e && (e = "all"),
                this.menu = t,
                this.toggler = new i(e)
            }
            return t.prototype.navigation = function(t) {
                var e = this;
                if (!this.navigator) {
                    var n = (t = t || {}).title,
                        i = void 0 === n ? "Menu" : n,
                        s = t.selectedClass,
                        o = void 0 === s ? "Selected" : s,
                        r = t.slidingSubmenus,
                        a = void 0 === r || r,
                        d = t.theme,
                        l = void 0 === d ? "light" : d;
                    this.navigator = new c(this.menu, i, o, a, l),
                    this.toggler.add((function() {
                        return e.menu.classList.add(e.navigator.prefix)
                    }), (function() {
                        return e.menu.classList.remove(e.navigator.prefix)
                    }))
                }
                return this.navigator
            }, t.prototype.offcanvas = function(t) {
                var e = this;
                if (!this.drawer) {
                    var n = (t = t || {}).position,
                        i = void 0 === n ? "left" : n;
                    this.drawer = new d(null, i);
                    var s = document.createComment("original menu location");
                    this.menu.after(s),
                    this.toggler.add((function() {
                        e.drawer.content.append(e.menu)
                    }), (function() {
                        e.drawer.close(),
                        s.after(e.menu)
                    }))
                }
                return this.drawer
            }, t
        }();
    e.default = l;
    window.MmenuLight2 = l
}]);

;
(function() {

    const menus = {}

    const init = (id) => {
        // re-entrant

        if (id) {
            // re-init
            // first destroy all existing (after apply in-place changes) constructs
            document.querySelectorAll('[data-rel="' + id + '"]').forEach(existing => {

            })
        }

        document.querySelectorAll('.vmenu200c').forEach((el, index) => {
            if (el.classList.contains('inited')) {
                return
            }
            el.classList.add('inited')

            const blockId = el.closest('.block-layout').getAttribute('id')



            const menu = new MmenuLight2(el, 'all')
            const navigation = menu.navigation({
                selected: 'selected',
                slidingSubmenus: 'true' === el.getAttribute('data-slide'),
                theme: 'true' === el.getAttribute('data-dark') ? 'dark' : 'light',
                title: ''
            })

            const drawer = menu.offcanvas({
                position: 'right' === el.getAttribute('data-position') ? 'right' : 'left',
            })

            drawer.wrapper.setAttribute('data-rel', blockId)

            el.classList.remove('initial')
            // if id was given to us in init(id), then we are reiniting
            if (id && index === 0) {
                menus[blockId] = []
            }
            if (!menus[blockId]) {
                // array for potentially multiple per block
                menus[blockId] = []
            }
            menus[blockId].push({
                navigation,
                drawer
            })
        })
    }

    document.addEventListener('DOMContentLoaded', () => {
        init()
        _G.reinitHandlers.push(init)

        document.addEventListener('editor.on', () => {
            Reflect.ownKeys(menus).forEach(m => {
                const handlers = menus[m]
                handlers.forEach(h => {
                    try {
                        h.drawer.close()
                    }
                    catch (e) {}
                })
            })
        })

        document.addEventListener('keydown', ev => {
            if (ev.key === 'Escape') {
                Reflect.ownKeys(menus).forEach(m => {
                    const handlers = menus[m]
                    handlers.forEach(h => {
                        try {
                            h.drawer.close()
                        }
                        catch (e) {}
                    })
                })
            }
        })

        window.addEventListener('hashchange', ev => {
            Reflect.ownKeys(menus).forEach(m => {
                const handlers = menus[m]
                handlers.forEach(h => {
                    try {
                        h.drawer.close()
                    }
                    catch (e) {}
                })
            })
        })

        document.addEventListener('click', ev => {
            if (ev.target.className === 'close-button') {
                Reflect.ownKeys(menus).forEach(m => {
                    const handlers = menus[m]
                    handlers.forEach(h => {
                        try {
                            h.drawer.close()
                        }
                        catch (e) {}
                    })
                })
            }
        })

        document.addEventListener('click', ev => {
            if (ev.target && ev.target &&
            ev.target.closest('.vmenu-opener2')) {

                if (document.querySelector('html').classList.contains('editing')) {
                    return
                }
                const blockId = ev.target.closest('.block-layout').getAttribute('id')
                const index = parseInt(ev.target.closest('.vmenu-opener2').getAttribute('data-index')) || 0
                const handlers = menus[blockId]
                if (Array.isArray(handlers) && handlers[index]) {
                    handlers[index].drawer.open()
                    if (handlers[index].navigation.slidingSubmenus) {
                        handlers[index].navigation.openPanel(handlers[index].navigation.node.querySelector('ul'))
                    }
                    handlers[index].drawer.content.querySelector('.vmenu200c').focus()
                }
            }
        })
    })
})()



document.addEventListener('DOMContentLoaded', function() {

    function initBlock(id) {
        const block = document.getElementById(id)
        if (block.querySelector('.fixed-menu')) {
            init(block.querySelector('.fixed-menu'))
        }
    }

    function isMenuVisible(el) {
        var rect = el.getBoundingClientRect();

        if (rect.top < 0) {
            return false;
        }
        else {
            return true;
        }
    }

    function floatMenu(el) {
        // if( el.querySelector('.fixed' ).classList.contains( 'floating')) {
        //     return
        // }
        if (document.querySelector('html').classList.contains('editing')) {
            return unfloatMenu(el)
        }
        el.querySelector('.fixed').style.opacity = '1'// el.querySelector('.fixed' ).classList.add( 'floating' )
        el.classList.add('fixed-on')
    }

    function unfloatMenu(el) {
        // if( !el.querySelector('.fixed' ).classList.contains( 'floating')) {
        //     return
        // }
        // el.querySelector('.fixed' ).classList.remove( 'floating' )
        el.classList.remove('fixed-on')
    }

    function init(el) {
        if (!el || !el.querySelector('.fixed')) {
            return
        }

        window.addEventListener('scroll', function() {
            isMenuVisible(el) ? unfloatMenu(el) : floatMenu(el)
        }, {
            passive: true
        })


        if (!isMenuVisible(el)) {
            floatMenu(el)
        }

        document.addEventListener('editor.on', function() {
            unfloatMenu(el)
        })
        document.addEventListener('editor.off', function() {
            if (!isMenuVisible(el)) {
                floatMenu(el)
            }
        })
    }

    document.querySelectorAll('.fixed-menu').forEach(function(el) {
        init(el)
    })

    _G.reinitHandlers.push(initBlock)
})





;
/* ==== INCLUDE: /js/blocks/banner-slides.js ==== */
/* banner-slides */
(function() {



    document.addEventListener('DOMContentLoaded', () => {

        function fireFx(slide) {
            if (slide) {
                slide.querySelectorAll('.fx').forEach(fx => {
                    fx.classList.remove('fx')
                    fx.classList.add('had-fx')
                })
            }
        }

        function pickleFx(el) {
            if (el) {
                el.querySelectorAll('.had-fx').forEach(hadFx => {
                    if (hadFx.closest('.active')) {
                        return
                    }
                    hadFx.classList.add('fx')
                })
            }
        }

        const intersectionObserver = new IntersectionObserver(entries => {

            //console.log( 'intersection observer', entries )

            if (document.querySelector('html').classList.contains('editing')) {
                return
            }

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fireFx(entry.target.querySelector('.banner-slide'))
                    entry.target.removeAttribute('data-stopped')
                }
                else {
                    entry.target.setAttribute('data-stopped', '')
                }
            })
        })

        function getNextSibling(elem, selector) {

            // Get the next sibling element
            let sibling = elem.nextElementSibling;

            // If the sibling matches our selector, use it
            // If not, jump to the next sibling and continue the loop
            while (sibling) {
                if (sibling.matches(selector))
                    return sibling;
                sibling = sibling.nextElementSibling
            }
            return sibling
        }

        function getPreviousSibling(elem, selector) {

            // Get the next sibling element
            let sibling = elem.previousElementSibling;

            // If the sibling matches our selector, use it
            // If not, jump to the next sibling and continue the loop
            while (sibling) {
                if (sibling.matches(selector))
                    return sibling;
                sibling = sibling.previousElementSibling
            }
            return sibling
        }

        function resetVideoAndPlay(video) {
            if (video && video.getAttribute('data-autoplay') === 'true' &&
            !document.querySelector('html').classList.contains('editing')
            ) {
                video.currentTime = 0.01
                video.muted = true
                video.play()
            }
        }

        function pauseVideo(video) {
            if (video && video.getAttribute('data-autoplay') === 'true') {
                video.currentTime = 0.01
                video.muted = true
                video.pause()
            }
        }



        function next(el, manual) {
            if (!manual && document.querySelector('html').classList.contains('editing')) {
                scheduleNext(el)
                return
            }
            if (!manual && el.getAttribute('data-stopped')) {
                scheduleNext(el)
                return
            }
            const active = el.querySelector('.banner-slide.active')
            if (!active) {
                console.warn('no active slide found')
                return
            }
            // either next sibling or first slide
            const next = getNextSibling(active, '.banner-slide') || el.querySelector('.banner-slide')// setTimeout(() => {
            gotoSlide(el, next)

        }
        // }, 10 )

        function prev(el, manual) {
            const active = el.querySelector('.banner-slide.active')
            if (!active) {
                console.warn('no active slide found')
                return
            }
            let previous = getPreviousSibling(active, '.banner-slide')
            if (!previous) {
                const slides = el.querySelectorAll('.banner-slide')
                previous = slides[slides.length - 1]
            }

            if (previous) {
                gotoSlide(el, previous)
            }
        }

        function gotoSlide(el, slide) {
            const active = el.querySelector('.banner-slide.active')
            if (!active) {
                console.warn('no active slide found')
                return
            }
            fireFx(slide);
            slide.querySelectorAll('video').forEach(video => {
                resetVideoAndPlay(video)
            })
            slide.classList.add('active')
            active.classList.remove('active')

            const index = slide.getAttribute('data-index')

            el.querySelectorAll('.banner-slide-nav .nav-bullet').forEach(bullet => {
                const rel = bullet.getAttribute('data-rel')
                if (rel === index) {
                    bullet.classList.add('active')
                }
                else {
                    bullet.classList.remove('active')
                }
            })
            scheduleNext(el)
            const transition = parseInt(el.getAttribute('data-transition-ms'))
            if (!isNaN(transition)) {
                setTimeout(() => {
                    pickleFx(el);
                }, transition || 10)
            }
        }

        function scheduleNext(el) {
            if (el.__timer) {
                clearTimeout(el.__timer)
                el.__timer = 0
            }
            const _interval = parseInt(el.getAttribute('data-rotate-sec'))
            const interval = isNaN(_interval) ? 5000 : _interval
            if (interval > 0) {
                const timer = setTimeout(() => {
                    el.__timer = 0
                    next(el)
                }, interval * 1000)
                el.__timer = timer
            }
        }

        const init = () => {
            document.querySelectorAll('.banner-slides-container').forEach((el) => {

                if (el.classList.contains('inited')) {
                    return
                }

                el.setAttribute('data-stopped', '')

                el.querySelectorAll('.banner-slide').forEach((slide, index) => {

                    // initial pause video
                    slide.querySelectorAll('video').forEach(video => {
                        if (index > 0) {
                            pauseVideo(video)
                        }
                    })
                    // assign indexes
                    slide.setAttribute('data-index', index + '')
                    if (index === 0) {
                        slide.classList.add('active')
                        slide.querySelectorAll('video').forEach(video => {

                        })
                    }

                    // transition end events
                    slide.addEventListener('transitionend', () => {
                        if (!slide.classList.contains('active')) {
                            slide.querySelectorAll('video').forEach(video => {
                                pauseVideo(video)
                            })
                        }
                    })
                })

                const transitionMs = parseInt(el.getAttribute('data-transition-ms'))
                if (!isNaN(transitionMs)) {
                    el.style.setProperty('--transition-ms', transitionMs + 'ms')
                }

                // el stop slides on hover
                el.addEventListener('mouseenter', () => {
                    el.setAttribute('data-stopped', 'true')
                    el.classList.add('interactive')
                })
                el.addEventListener('mouseleave', () => {
                    el.setAttribute('data-stopped', '')
                    el.classList.remove('interactive')
                })
                // prev and next
                el.querySelectorAll('.banner-slide-prev').forEach(button => {
                    button.addEventListener('click', () => {
                        prev(el, true)
                    })
                })
                el.querySelectorAll('.banner-slide-next').forEach(button => {
                    button.addEventListener('click', () => {
                        next(el, true)
                    })
                })

                const totalSlides = el.querySelectorAll('.banner-slide').length
                if (totalSlides > 1) {
                    el.querySelectorAll('.banner-slide-nav').forEach(nav => {
                        for (let i = 0; i < totalSlides; ++i) {
                            const bullet = document.createElement('div')
                            bullet.classList.add('nav-bullet')
                            if (i === 0) {
                                bullet.classList.add('active')
                            }
                            bullet.setAttribute('data-rel', i + '')
                            nav.appendChild(bullet)

                            bullet.addEventListener('click', () => {
                                const slide = el.querySelector('.banner-slide[data-index="' + i + '"]')
                                if (slide && !slide.classList.contains('active')) {
                                    // console.log( 'is slide active', slide.classList.contains('active'))
                                    gotoSlide(el, slide)
                                }
                            })
                        }
                    })
                    scheduleNext(el)
                }
                else {
                    // only one slide
                    el.querySelectorAll('.banner-slide-prev').forEach(button => {
                        button.style.display = 'none'
                    })
                    el.querySelectorAll('.banner-slide-next').forEach(button => {
                        button.style.display = 'none'
                    })
                    el.querySelectorAll('.banner-slide-nav').forEach(container => {
                        container.style.display = 'none'
                    })
                }

                el.classList.add('inited')

                intersectionObserver.observe(el)
            })
        }

        init()

        _G.reinitHandlers.push(init)
    })
})();

/* ==== INCLUDE: /js/blocks/omnibox-v2_1.js ==== */

;
(function() {

    function Typeahead(el, accountId) {

        if (el.__typeahead) {
            // already inited
            return
        }

        el.__typeahead = true

        const MIN_CHARS_MSG = 'Enter at least 3 characters...'
        // const typeaheadURL = el.getAttribute('data-typeahead')
        const typeaheadURL = '/wps/rest/api/' + accountId + '/typeahead?'

        el.getAttribute('data-with-ticker') === 'true' && (function() {

            const text = el.getAttribute('placeholder') || ''
            if (!text) {
                return
            }

            const ticker = document.createElement('div')
            ticker.style.position = 'absolute'
            ticker.style.width = ticker.style.height = '0'
            ticker.style.overflow = 'hidden'
            ticker.setAttribute('data-ticker', text)
            ticker.innerText = ''
            el.setAttribute('placeholder', '')
            const typing = window.TypeIt && new window.TypeIt(ticker, {
                //waitUntilVisible: true,
                cursor: '',
                speed: 50,
                afterStep: (step, queue, instance) => {
                    el.setAttribute('placeholder', ticker.textContent)
                }
            })
            _G.visibilityService.observe(el, result => {
                if (result.isIntersecting && !document.querySelector('html').classList.contains('editing')) {
                    typing.pause(1000).type(text).go()
                    _G.visibilityService.unobserve(el)
                }
            })

        })()

        const popup = document.createElement("div")
        popup.setAttribute("class", "typeahead elevation8")
        el.parentElement.appendChild(popup)

        const popper = Popper.createPopper(el, popup, {
            placement: 'bottom-start',
            modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
            ],
        })

        const doFetch = debounce((val, onData, onError) => {

            const soldCheckbox = el.form.querySelector('input[name=solds]')
            const isForSolds = soldCheckbox && soldCheckbox.checked || false
            const listingType = isForSolds ? 'AUTO_SOLD' :
            (el.form.querySelector('input[name=listingType]').value || 'AUTO')


            fetch(typeaheadURL + 'listingType' + encodeURIComponent(listingType) +
            '&q=' + encodeURIComponent(val))
            .then(response => response.json())
            .then(json => {
                onData(json)
            })
            .catch(err => {
                onError(err)
            })
        }, 300)

        const createTypeaheadMessage = msg => {
            popup.innerHTML = ''
            const out = document.createElement('div')
            out.setAttribute('class', 'message')
            out.innerText = msg
            popup.appendChild(out)
            showTypeahead()
        }

        const createTypeaheadEntry = row => {
            const out = document.createElement('div')
            out.setAttribute('class', 'entry')
            out.setAttribute('data-value', row[0])
            out.setAttribute('data-label', row[1])

            out.addEventListener('mouseenter', () => {
                focusEntry(out)
            })
            out.innerText = row[1]
            return out
        }

        const createTypeahead = data => {
            popup.innerHTML = ''
            if (data.length === 0) {
                return createTypeaheadMessage('Hm, nothing found...')
            }
            data.forEach(record => {
                popup.appendChild(createTypeaheadEntry(record))
            })
            if (!popup.classList.contains('visible')) {
                showTypeahead()
            }
            focusFirst()
        }

        const showTypeahead = () => {
            popup.classList.add('visible')
            popper.forceUpdate()
        }

        const hideTypeahead = () => {
            popup.classList.remove('visible')
        }

        const currentSelection = () => {
            return popup.querySelector('.focused')
        }

        const focusFirst = () => {
            const first = popup.firstElementChild
            if (first && first.classList.contains('entry')) {
                return first.classList.add('focused')
            }
        }

        const focusNext = () => {
            const current = currentSelection()
            if (!current) {
                focusFirst()
            } else {
                current.classList.remove('focused')
                const next = current.nextElementSibling
                if (!next) {
                    focusFirst()
                } else if (next.classList.contains('entry')) {
                    next.classList.add('focused')
                }
            }
        }

        const focusPrev = () => {
            const current = currentSelection()
            if (!current) {
                return
            }
            current.classList.remove('focused')
            const prev = current.previousElementSibling
            if (!prev) {
                const last = popup.lastElementChild
                if (last && last.classList.contains('entry')) {
                    last.classList.add('focused')
                }
            } else if (prev.classList.contains('entry')) {
                prev.classList.add('focused')
            }
        }

        const focusEntry = entry => {
            const current = currentSelection()
            current && current.classList.remove('focused')
            entry.classList.add('focused')
        }

        const isValueAddressOrMlsNum = value => {
            return value && (value.startsWith('addr:') || value.startsWith('mls:'))
        }

        const selectItem = item => {
            if (!item || !item.classList.contains('entry')) {
                return
            }

            el.value = ''

            const label = item.getAttribute('data-label')
            const value = item.getAttribute('data-value')
            const isAddressOrMlsNum = isValueAddressOrMlsNum(value)

            const data = {
                label,
                value,
                isAddressOrMlsNum,
            }
            listeners.forEach(l => {
                try {
                    l(data)
                } catch (e) {
                    console.warn('WARNING: error in listener', e)
                }
            })

            item.remove()
        }
        // event handling

        popup.addEventListener('click', ev => {
            if (ev.target && ev.target.classList.contains('entry')) {
                selectItem(ev.target)
                hideTypeahead()// setTimeout(() => {
                el.focus()

            }
        })// }, 100)

        const processKey = ev => {
            if (ev.key === 'Escape') {
                el.value = ''
                return hideTypeahead()
            } else if (ev.key === 'ArrowDown') {
                ev.preventDefault()
                if (popup.classList.contains('visible')) {
                    focusNext()
                } else {
                    if (popup.querySelectorAll('.entry').length === 0) {
                        return createTypeaheadMessage(MIN_CHARS_MSG)
                    }
                    showTypeahead()
                }
            } else if (ev.key === 'ArrowUp') {
                ev.preventDefault()
                focusPrev()
            } else if (ev.key === 'Enter') {
                ev.preventDefault()
                ev.stopPropagation()
                if (!popup.classList.contains('visible')) {
                    // popup is not visible, submit the form
                    return ev.target.form.submit()
                }
                const sel = currentSelection()
                if (sel) {
                    selectItem(sel)
                    hideTypeahead()
                }
                else {
                    return ev.target.form.submit()
                }
            }
        }
        el.addEventListener('keydown', processKey)

        const submitButton = el.closest('form').querySelector('[type=submit]')
        if (submitButton) {
            submitButton.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopPropagation();
                if (!popup.classList.contains('visible') && el.value) {
                    // popup is not visible, submit the form
                    // if no suggestion was found (perhaps, due to latency)
                    // but the text was entered, assume it was an MLS number
                    const mlsNum = document.createElement('div')
                    mlsNum.setAttribute('data-value', 'mls:' + el.value)
                    mlsNum.setAttribute('data-label', el.value)
                    mlsNum.classList.add('entry')
                    selectItem(mlsNum)
                    hideTypeahead()
                    return ev.target.closest('[type=submit]').form.submit()
                }
                const sel = currentSelection()
                if (sel) {
                    selectItem(sel)
                    hideTypeahead()
                }
                else if (el.value) {
                    // if no suggestion was found (perhaps, due to latency)
                    // but the text was entered, assume it was an MLS number
                    const mlsNum = document.createElement('div')
                    mlsNum.setAttribute('data-value', 'mls:' + el.value)
                    mlsNum.setAttribute('data-label', el.value)
                    mlsNum.classList.add('entry')
                    selectItem(mlsNum)
                    hideTypeahead()
                }
                return ev.target.closest('[type=submit]').form.submit()
            })
        }

        const processInput = ev => {

            const val = ev.target.value
            if (val && val.length > 2) {
                doFetch(val, data => {
                    createTypeahead(data)
                }, err => {
                    console.log('err', err)
                })
            } else {
                createTypeaheadMessage(MIN_CHARS_MSG)

            }
        }//hideTypeahead()

        el.addEventListener('input', processInput)

        const click = ev => {
            if (!popup.classList.contains('visible') && popup.children.length > 0) {
                popup.classList.add('visible')
                popper.forceUpdate()
            }
        }
        el.addEventListener('mousedown', click)


        const clickAway = ev => {
            if (ev.target && ev.target.contains(el)) {
                return
            }
            if (ev.target && ev.target.contains(popup)) {
                return
            }
            if (ev.target && ev.target.closest('.typeahead')) {
                return
            }
            if (ev.target && ev.target.closest('[type=submit]')) {
                return
            }
            hideTypeahead()
        }
        document.querySelector('html').addEventListener('mousedown', clickAway)
        // exported

        const listeners = []

        function onSelect(callback) {
            callback && (typeof callback === 'function') && listeners.push(callback)
        }

        function destroy() {
            el.__typeahead = false
            popper.destroy()
            el.removeEventListener('keydown', processKey)
            el.removeEventListener('input', processInput)
            el.removeEventListener('mousedown', click)
            document.removeEventListener('mousedown', clickAway)
        }

        return {
            destroy,
            onSelect,
        }
    }

    function Selections(el) {

        let selections = []

        el.querySelectorAll('input[type=hidden]').forEach(preset => {
            const name = preset.getAttribute('name')
            const value = preset.getAttribute('value')
            const label = preset.getAttribute('data-label')

            selections.push({
                name,
                value,
                label
            })

            preset.remove()
        })

        const render = () => {
            el.innerHTML = ''
            selections.forEach(s => {
                const pill = document.createElement('span')
                pill.classList.add('selection-pill')
                const cancel = document.createElement('img')
                cancel.src = 'data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3e%3cpath d=\'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z\'/%3e%3c/svg%3e'
                cancel.setAttribute('aria-role', 'button')
                cancel.classList.add('cancel')
                cancel.innerText = '×'
                pill.appendChild(cancel)

                cancel.addEventListener('click', ev => {
                    ev.preventDefault()
                    remove(s.name, s.value)
                })
                const label = document.createElement('span')
                label.classList.add('label')
                label.innerText = s.label
                pill.appendChild(label)

                const hidden = document.createElement('input')
                hidden.setAttribute('type', 'hidden')
                hidden.setAttribute('name', s.name)
                hidden.setAttribute('value', s.value)
                el.appendChild(hidden)
                el.appendChild(pill)
            })

            if (selections.length > 3) {
                const pill = document.createElement('span')
                pill.classList.add('selection-pill', 'clear-all')
                const cancel = document.createElement('img')
                cancel.src = 'data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3e%3cpath d=\'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z\'/%3e%3c/svg%3e'
                cancel.setAttribute('aria-role', 'button')
                cancel.classList.add('cancel')
                cancel.innerText = '×'
                pill.appendChild(cancel)

                pill.addEventListener('click', ev => {
                    ev.preventDefault()
                    clear()
                })
                const label = document.createElement('span')
                label.classList.add('label')
                label.innerText = 'Clear all'
                pill.appendChild(label)

                el.appendChild(pill)
            }
        }

        const clear = () => {
            selections = []
            render()
        }

        const clearNonMlsOrAddress = () => {
            selections = selections.filter(s => {
                return s.name === 'omni' && s.isAddressOrMlsNum === true
            })
        }

        const find = (name, value) => {
            return selections.find(s => (
            s.name === name && s.value === value
            ))
        }

        const add = (name, data) => {
            if (find(name, data.value)) {
                return
            }
            let label = data.label
            if (data.isAddressOrMlsNum === true) {
                label = label.replace(/,.+$/, '')
            }
            selections.push({
                name,
                ...data,
                label,
            })
            render()
        }

        const remove = (name, value=null) => {
            selections = selections.filter(s => {
                return !(s.name === name && (value === null ? true : s.value === value))
            })
            render()
        }

        const change = (data, multipleOk=false) => {

            if (data.value === null) {
                selections = selections.filter(s => {
                    return s.name !== data.name
                })
                return render()
            }

            const found = selections.find(s => (s.name === data.name && (multipleOk ? s.value === data.value : true)))
            if (found) {
                found.value = data.value
                found.label = data.label
                render()
            }
            else {
                add(data.name, data)
            }
        }

        const unset = (name, value) => {

        }

        const values = () => {
            return JSON.parse(JSON.stringify(selections))
        }

        render()

        return {
            clear,
            clearNonMlsOrAddress,
            add,
            remove,
            change,
            values,
        }
    }

    let meta
    let metaPromise

    function Metadata(accountId, listingType, context) {
        if (metaPromise) {
            return metaPromise
        }
        if (meta) {
            return Promise.resolve(meta)
        }
        return new Promise((resolve, reject) => {
            const url = '/wps/-/noframe~true/' + context + '/' + accountId + '/idx.browse?ibf_json=true&'

            setTimeout(() => {

                fetch(url + '&listingType=' + encodeURIComponent(listingType))
                .then(response => response.json())
                .then(json => {
                    meta = json
                    metaPromise = null
                    resolve(json)
                })
                .catch(err => {
                    metaPromise = null
                    reject(err)
                })

            }, 0)
        })
    }

    function BaseControl(meta) {
        const out = document.createElement('div')
        out.classList.add('control')
        const heading = document.createElement('div')
        heading.classList.add('heading')
        const title = document.createElement('div')
        title.classList.add('title')
        const expandToggle = document.createElement('div')
        expandToggle.classList.add('toggle')
        const icon = document.createElement('img')
        icon.src = 'data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'%3e %3cpolygon fill=\'var(--ci-primary-color%2c currentColor)\' points=\'440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240\' class=\'ci-primary\'/%3e %3c/svg%3e'
        icon.setAttribute('aria-label', 'Show/Hide control')
        icon.setAttribute('aria-role', 'button')
        icon.setAttribute('alt', 'Show/Hide control')
        expandToggle.appendChild(icon)

        heading.appendChild(title)
        heading.appendChild(expandToggle)

        const contentOuter = document.createElement('div')
        contentOuter.classList.add('content-outer')
        const contentInner = document.createElement('div')
        contentInner.classList.add('content-inner')

        contentOuter.appendChild(contentInner)

        out.appendChild(heading)
        out.appendChild(contentOuter)

        out.querySelector('.title').innerText = meta.label

        heading.addEventListener('click', () => {
            if (heading.classList.contains('fixed')) {
                return
            }
            if (icon.classList.contains('expanded')) {
                icon.classList.remove('expanded')
                contentOuter.style.height = '0px'
            } else {
                icon.classList.add('expanded')
                const h = contentInner.getBoundingClientRect().height
                contentOuter.style.height = h + 'px'
            }



        })// setTimeout(() => {
        //     contentOuter.closest('.control-panel').popper.update()
        // }, 100 )

        return out
    }

    function nFormatter(num, digits) {
        var si = [
        {
            value: 1,
            symbol: ""
        },
        {
            value: 1E3,
            symbol: "K"
        },
        {
            value: 1E6,
            symbol: "M"
        },
        ];
        var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    }

    function PriceControl(meta, values, onChange, onClear) {

        const out = BaseControl(meta)

        const min = 0
        const max = 10000000
        let initialFrom = min
        let initialTo = max

        if (values) {
            const found = values.find(s => s.name === 'ibf_price')
            if (found) {
                const v = found.value
                if (v) {
                    const parsed = v.split("|")
                    initialFrom = parseInt(parsed[0]) || initialFrom
                    initialTo = parseInt(parsed[1]) || initialTo
                }
            }
        }

        const content = out.querySelector('.content-inner')

        const bar = document.createElement('div')
        bar.classList.add('slider')

        const formatter = {
            to: val => {
                return '$' + new Intl.NumberFormat().format(val.toFixed(0))
            },
            from: str => {
                return parseInt(val)
            }
        }


        noUiSlider.create(bar, {
            start: [initialFrom, initialTo],
            connect: true,
            range: {
                'min': [0, 1000],
                // '5%': [1000,1000],
                '5%': [100000, 10000],
                '70%': [1000000, 100000],
                '80%': [2000000, 500000],
                'max': [(initialTo || 10000000)],
            },
            ariaFormat: formatter,
        })

        const labels = document.createElement('div')
        labels.classList.add('labels')

        const from = document.createElement('div')
        from.classList.add('value')
        labels.appendChild(from)

        const to = document.createElement('div')
        to.classList.add('value')
        labels.appendChild(to)

        bar.noUiSlider.on('update', values => {
            const fromVal = parseInt(values[0])
            const toVal = parseInt(values[1])
            if (fromVal === min) {
                from.innerText = 'Any'
            }
            else {
                from.innerText = formatter.to(fromVal)
            }
            if (toVal === max) {
                to.innerText = 'Any'
            }
            else {
                to.innerText = formatter.to(toVal)
            }

            if (fromVal === min && toVal === max) {
                // console.log( 'onChange null' )
                onClear('ibf_price')
            }
            else {
                // console.log( 'onChange', fromVal + '-' + toVal )
                onChange({
                    name: 'ibf_price',
                    value: fromVal + '|' + toVal,
                    // label: 'Price: ' + nFormatter(fromVal,2) + '-' + nFormatter(toVal, 1)
                    label: formatter.to(fromVal) + ' - ' + formatter.to(toVal)
                }, false) // multipleOk=false
            }

        })

        content.appendChild(bar)
        content.appendChild(labels)

        return out
    }

    function MixedOptionsControl(meta, values, onChange, onClear) {
        const out = BaseControl(meta)
        const content = out.querySelector('.content-inner')

        const name = 'ibf_' + meta.name.toLowerCase()

        for (let i = 0; i < meta.groups.length; ++i) {

            const group = meta.groups[i]

            if (i > 0) {
                const subhead = document.createElement('div')
                subhead.classList.add('subhead')
                subhead.innerText = group.label
                content.appendChild(subhead)
            }

            const pane = document.createElement('div')
            pane.classList.add('checkbox-pane')
            content.appendChild(pane)

            for (const option of group.options) {
                const label = document.createElement('label')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('value', option[0])
                const text = document.createElement('span')
                text.innerText = option[1]
                label.appendChild(checkbox)
                label.appendChild(text)
                pane.appendChild(label)

                const found = values.find(v => {
                    return v.name === name && v.value === option[0]
                })
                found && (checkbox.checked = true)

                checkbox.addEventListener('change', ev => {
                    if (ev.target.checked) {
                        onChange({
                            name,
                            label: option[1],
                            value: option[0],
                        }, true)
                    }
                })
            }
        }

        return out
    }

    function SingleOptionControl(meta, values, onChange, onClear) {
        const out = BaseControl(meta)
        const content = out.querySelector('.content-inner')

        const name = 'ibf_' + meta.name.toLowerCase()

        const pane = document.createElement('div')
        pane.classList.add('checkbox-pane')
        content.appendChild(pane)

        for (const option of meta.options) {

            if (!option[0]) {
                continue;
            }
            const label = document.createElement('label')
            const checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'radio')
            checkbox.setAttribute('value', option[0])
            const text = document.createElement('span')
            text.innerText = option[1]
            label.appendChild(checkbox)
            label.appendChild(text)
            pane.appendChild(label)

            const found = values.find(v => {
                return v.name === name && v.value === option[0]
            })
            found && (checkbox.checked = true)

            checkbox.addEventListener('change', ev => {

                pane.querySelectorAll('input[type=radio]').forEach(r => {
                    if (r.getAttribute('value') !== ev.target.value) {
                        r.checked = false
                    }
                })

                if (ev.target.checked) {
                    onChange({
                        name,
                        label: meta.label + ': ' + option[1],
                        value: option[0],
                    }, false)
                }
            })
        }

        return out
    }

    function Control(meta, values, onChange, onClear) {

        if (meta.type === 'PriceControl') {
            return PriceControl(meta, values, onChange, onClear)
        }
        else if (meta.type === 'MixedOptionsControl') {
            return MixedOptionsControl(meta, values, onChange, onClear)
        }
        else if (meta.type === 'SingleOptionControl') {
            return SingleOptionControl(meta, values, onChange, onClear)
        }

        return null
    }

    function ControlPanel(el, metadataFetcher, selections) {
        const what = el.getAttribute('data-omni-trigger');
        if (!what) {
            return
        }

        const popup = document.createElement("div")
        popup.setAttribute("class", "control-panel elevation8")
        el.parentElement.appendChild(popup)
        // popup.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor ultricies interdum. Suspendisse potenti. Sed consectetur, odio eget mattis commodo, metus massa tincidunt sapien, quis tincidunt sapien mi sed ipsum. Suspendisse eleifend sodales nulla, sit amet vehicula mauris bibendum vitae. Integer condimentum suscipit libero ac pharetra. In eget viverra felis. Cras odio nisi, lacinia eget semper ut, dictum vitae odio. Pellentesque at suscipit justo, id sagittis nisl.'

        const popper = Popper.createPopper(el, popup, {
            placement: 'bottom',
            modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 0],
                },
            },
            {
                name: 'flip',
                options: {
                    // flipVariations: false, // true by default
                    // allowedAutoPlacements: ['bottom'],
                    fallbackPlacements: ['bottom'],
                },
            },
            ],
        })

        popup.popper = popper

        window.addEventListener('resize', () => {
            if (!_G.isMobile()) {
                hidePopup()
            }
        }, {
            passive: true
        })

        const showPopup = () => {
            popup.classList.add('visible')
            popup.classList.add('becoming')
            popper.forceUpdate()
            setTimeout(() => {
                popup.classList.remove('becoming')
            }, 10)
        }

        const hidePopup = () => {
            if (!isVisible()) {
                return
            }
            popup.addEventListener('transitionend', () => {
                popup.classList.remove('visible')
                popup.classList.remove('becoming')
            }, {
                once: true
            })
            popup.classList.add('becoming')
        }

        const isVisible = () => {
            return popup.classList.contains('visible')
        }

        const renderProgress = () => {
            const loading = document.createElement('div')
            loading.classList.add('progress')
            const ind = document.createElement('img')
            ind.setAttribute('src', 'data:image/svg+xml,%3c%3fxml version=\'1.0\' encoding=\'UTF-8\'%3f%3e%3c!DOCTYPE svg PUBLIC \'-//W3C//DTD SVG 1.1//EN\' \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\'%3e%3csvg xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' version=\'1.1\' id=\'mdi-refresh-circle\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3e%3cpath d=\'M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M18 11H13L14.81 9.19A3.94 3.94 0 0 0 12 8A4 4 0 1 0 15.86 13H17.91A6 6 0 1 1 12 6A5.91 5.91 0 0 1 16.22 7.78L18 6Z\' /%3e%3c/svg%3e')
            ind.classList.add('indicator')
            loading.appendChild(ind)
            popup.innerHTML = ''
            popup.appendChild(loading)
        }

        const renderError = err => {
            const error = document.createElement('div')
            error.classList.add('error')

            const msg = document.createElement('div')
            msg.classList.add('message')
            msg.innerText = 'Sorry, an unexpected error occurred: '

            const details = document.createElement('div')
            details.classList.add('message')
            details.innerText = err.toString()

            error.appendChild(msg)
            error.appendChild(details)

            const reload = document.createElement('button')
            reload.classList.add('button')
            reload.classList.add('small')
            reload.innerText = 'Try again'

            reload.addEventListener('click', ev => {
                ev.preventDefault()
                hidePopup()
                setTimeout(() => {
                    render()
                }, 200)
            })

            error.appendChild(reload)

            popup.innerHTML = ''
            popup.appendChild(error)
        }

        const renderControls = meta => {

            const filterProp = getComputedStyle(el).getPropertyValue('--OMNI-CONTROLS')
            let filters = []
            if (filterProp) {
                filters = filterProp.split(',')
                filters = filters.map(f => f.trim())
            }
            if (filters.length == 1 && (filters[0] === '' || filters[0] === 'all')) {
                filters = []
            }

            popup.innerHTML = ''
            let numControls = 0
            meta.controls.forEach(c => {
                const skip = filters.length > 0 && filters.find(f => {
                    if (!f)
                        return false
                    if (f.startsWith('-') && f.substring(1) === c.name) {
                        return true // skip
                    }
                    else if (f === c.name) {
                        return false
                    }
                    else {
                        if (filters[0].startsWith('-')) {
                            return false
                        }
                        else {
                            return true
                        }
                    }
                })

                if (skip) {
                    return
                }

                const control = Control(c, selections.values(), selections.change, selections.remove)
                if (control) {
                    popup.appendChild(control)
                    numControls++
                }
            })
            if (numControls === 1) {
                popup.querySelector('.content-outer').style.height = 'auto'
                popup.querySelector('.heading').classList.add('fixed');
            }
        }

        const render = () => {

            let timer = setTimeout(() => {
                renderProgress()
                showPopup()
                popper.forceUpdate()
                timer = null
            }, 300)

            metadataFetcher().then(meta => {
                renderControls(meta)
            }).catch(err => {
                console.error(err)
                renderError(err)
            }).finally(() => {
                if (timer) {
                    clearTimeout(timer)
                    timer = null
                    showPopup()
                }
                else {
                    popper.forceUpdate()
                }
            })
        }


        el.addEventListener('click', () => {
            isVisible() ? hidePopup() : render()
        })

        const clickAway = ev => {
            // const html = document.querySelector('html')
            console.log('clickaway', ev.target)
            if (popup.contains(ev.target)) {
                return
            }
            // if (ev.target && ev.target.closest('.control-panel')) {
            //     return
            // }
            hidePopup()
        }
        document.querySelector('html').addEventListener('mousedown', clickAway)

        const debug = (event) => {
            console.log('fired', event)
        }
        document.addEventListener('touchstart', debug)
        document.addEventListener('touchmove', debug)
        document.addEventListener('touchend', debug)
        document.addEventListener('touchcancel', debug)
    }

    function OmniboxForm(el) {

        if (el.__omniInited) {
            return
        }

        el.__omniInited = true
        el.classList.add('inited')

        const accountId = parseInt(el.getAttribute('data-account')) || 0
        const context = el.getAttribute('data-context') || 'recip'
        const listingType = el.querySelector('input[name=listingType]').value || 'AUTO'

        const isImmediateSearch = el.getAttribute('data-immediate') === 'true'

        const metadataFetcher = () => {
            return Metadata(accountId, listingType, context)
        }// prime the meta
        metadataFetcher()

        const selections = Selections(el.querySelector('[data-rel=selections]'))

        const omniElem = el.querySelector('[data-rel=omni]')
        if (omniElem) {
            const typeahead = Typeahead(omniElem, accountId)
            typeahead.onSelect(data => {
                const toadd = {
                    ...data,
                    label: data.label,
                    value: data.value + '[' + data.label + ']',
                }
                if (data.isAddressOrMlsNum) {
                    selections.clearNonMlsOrAddress()
                    selections.add('omni', toadd)
                } else {
                    selections.add('omni', toadd)
                }

                if (isImmediateSearch) {
                    const submitButton = el.closest('form').querySelector('[type=submit]')
                    if (submitButton) {
                        submitButton.click()
                    }
                }
            })
        }

        const triggers = el.querySelectorAll('[data-omni-trigger]:not([data-omni-trigger=\"\"])').forEach(t => {
            ControlPanel(t, metadataFetcher, selections)
        })

        return {}
    }

    function init() {
        document.querySelectorAll('.omnibox-form').forEach(el => {
            OmniboxForm(el)
        })
    }

    document.addEventListener('DOMContentLoaded', init)

    _G.reinitHandlers.push(init)
})();

/* ==== INCLUDE: /js/blocks/nouislider.14.6.2.min.js ==== */

/*! nouislider - 14.6.2 - 9/16/2020 */
!function(t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
    "use strict";
    var lt = "14.6.2";
    function ut(t) {
        t.parentElement.removeChild(t)
    }
    function a(t) {
        return null != t
    }
    function ct(t) {
        t.preventDefault()
    }
    function o(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }
    function pt(t, e, r) {
        0 < r && (ht(t, e), setTimeout(function() {
            mt(t, e)
        }, r))
    }
    function ft(t) {
        return Math.max(Math.min(t, 100), 0)
    }
    function dt(t) {
        return Array.isArray(t) ? t : [t]
    }
    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0
    }
    function ht(t, e) {
        t.classList && !/\s/.test(e) ? t.classList.add(e) : t.className += " " + e
    }
    function mt(t, e) {
        t.classList && !/\s/.test(e) ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }
    function gt(t) {
        var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (t.compatMode || "");
        return {
            x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }
    function c(t, e) {
        return 100 / (e - t)
    }
    function p(t, e, r) {
        return 100 * e / (t[r + 1] - t[r])
    }
    function f(t, e) {
        for (var r = 1; t >= e[r];)
            r += 1;
        return r
    }
    function r(t, e, r) {
        if (r >= t.slice(-1)[0])
            return 100;
        var n,
            i,
            o = f(r, t),
            s = t[o - 1],
            a = t[o],
            l = e[o - 1],
            u = e[o];
        return l + (i = r, p(n = [s, a], n[0] < 0 ? i + Math.abs(n[0]) : i - n[0], 0) / c(l, u))
    }
    function n(t, e, r, n) {
        if (100 === n)
            return n;
        var i,
            o,
            s = f(n, t),
            a = t[s - 1],
            l = t[s];
        return r ? (l - a) / 2 < n - a ? l : a : e[s - 1] ? t[s - 1] + (i = n - t[s - 1], o = e[s - 1], Math.round(i / o) * o) : n
    }
    function s(t, e, r) {
        var n;
        if ("number" == typeof e && (e = [e]), !Array.isArray(e))
            throw new Error("noUiSlider (" + lt + "): 'range' contains invalid value.");
        if (!o(n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t)) || !o(e[0]))
            throw new Error("noUiSlider (" + lt + "): 'range' value isn't numeric.");
        r.xPct.push(n),
        r.xVal.push(e[0]),
        n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]),
        r.xHighestCompleteStep.push(0)
    }
    function l(t, e, r) {
        if (e)
            if (r.xVal[t] !== r.xVal[t + 1]) {
                r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e, 0) / c(r.xPct[t], r.xPct[t + 1]);
                var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
                    i = Math.ceil(Number(n.toFixed(3)) - 1),
                    o = r.xVal[t] + r.xNumSteps[t] * i;
                r.xHighestCompleteStep[t] = o
            } else
                r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t]
    }
    function i(t, e, r) {
        var n;
        this.xPct = [],
        this.xVal = [],
        this.xSteps = [r || !1],
        this.xNumSteps = [!1],
        this.xHighestCompleteStep = [],
        this.snap = e;
        var i = [];
        for (n in t)
            t.hasOwnProperty(n) && i.push([t[n], n]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function(t, e) {
            return t[0][0] - e[0][0]
        }) : i.sort(function(t, e) {
            return t[0] - e[0]
        }), n = 0; n < i.length; n++)
            s(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++)
            l(n, this.xNumSteps[n], this)
    }
    i.prototype.getDistance = function(t) {
        var e,
            r = [];
        for (e = 0; e < this.xNumSteps.length - 1; e++) {
            var n = this.xNumSteps[e];
            if (n && t / n % 1 != 0)
                throw new Error("noUiSlider (" + lt + "): 'limit', 'margin' and 'padding' of " + this.xPct[e] + "% range must be divisible by step.");
            r[e] = p(this.xVal, t, e)
        }
        return r
    },
    i.prototype.getAbsoluteDistance = function(t, e, r) {
        var n,
            i = 0;
        if (t < this.xPct[this.xPct.length - 1])
            for (; t > this.xPct[i + 1];)
                i++;
        else
            t === this.xPct[this.xPct.length - 1] && (i = this.xPct.length - 2);
        r || t !== this.xPct[i + 1] || i++;
        var o = 1,
            s = e[i],
            a = 0,
            l = 0,
            u = 0,
            c = 0;
        for (n = r ? (t - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i]) : (this.xPct[i + 1] - t) / (this.xPct[i + 1] - this.xPct[i]); 0 < s;)
            a = this.xPct[i + 1 + c] - this.xPct[i + c],
            100 < e[i + c] * o + 100 - 100 * n ? (l = a * n, o = (s - 100 * n) / e[i + c], n = 1) : (l = e[i + c] * a / 100 * o, o = 0),
            r ? (u -= l, 1 <= this.xPct.length + c && c--) : (u += l, 1 <= this.xPct.length - c && c++),
            s = e[i + c] * o;
        return t + u
    },
    i.prototype.toStepping = function(t) {
        return t = r(this.xVal, this.xPct, t)
    },
    i.prototype.fromStepping = function(t) {
        return function(t, e, r) {
            if (100 <= r)
                return t.slice(-1)[0];
            var n,
                i = f(r, e),
                o = t[i - 1],
                s = t[i],
                a = e[i - 1],
                l = e[i];
            return n = [o, s], (r - a) * c(a, l) * (n[1] - n[0]) / 100 + n[0]
        }(this.xVal, this.xPct, t)
    },
    i.prototype.getStep = function(t) {
        return t = n(this.xPct, this.xSteps, this.snap, t)
    },
    i.prototype.getDefaultStep = function(t, e, r) {
        var n = f(t, this.xPct);
        return (100 === t || e && t === this.xPct[n - 1]) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r
    },
    i.prototype.getNearbySteps = function(t) {
        var e = f(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e],
                step: this.xNumSteps[e],
                highestStep: this.xHighestCompleteStep[e]
            }
        }
    },
    i.prototype.countStepDecimals = function() {
        var t = this.xNumSteps.map(e);
        return Math.max.apply(null, t)
    },
    i.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    };
    var u = {
            to: function(t) {
                return void 0 !== t && t.toFixed(2)
            },
            from: Number
        },
        d = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub"
        };
    function h(t) {
        if ("object" == typeof (e = t) && "function" == typeof e.to && "function" == typeof e.from)
            return !0;
        var e;
        throw new Error("noUiSlider (" + lt + "): 'format' requires 'to' and 'from' methods.")
    }
    function m(t, e) {
        if (!o(e))
            throw new Error("noUiSlider (" + lt + "): 'step' is not numeric.");
        t.singleStep = e
    }
    function g(t, e) {
        if (!o(e))
            throw new Error("noUiSlider (" + lt + "): 'keyboardPageMultiplier' is not numeric.");
        t.keyboardPageMultiplier = e
    }
    function v(t, e) {
        if (!o(e))
            throw new Error("noUiSlider (" + lt + "): 'keyboardDefaultStep' is not numeric.");
        t.keyboardDefaultStep = e
    }
    function b(t, e) {
        if ("object" != typeof e || Array.isArray(e))
            throw new Error("noUiSlider (" + lt + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max)
            throw new Error("noUiSlider (" + lt + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max)
            throw new Error("noUiSlider (" + lt + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new i(e, t.snap, t.singleStep)
    }
    function x(t, e) {
        if (e = dt(e), !Array.isArray(e) || !e.length)
            throw new Error("noUiSlider (" + lt + "): 'start' option is incorrect.");
        t.handles = e.length,
        t.start = e
    }
    function S(t, e) {
        if ("boolean" != typeof (t.snap = e))
            throw new Error("noUiSlider (" + lt + "): 'snap' option must be a boolean.")
    }
    function w(t, e) {
        if ("boolean" != typeof (t.animate = e))
            throw new Error("noUiSlider (" + lt + "): 'animate' option must be a boolean.")
    }
    function y(t, e) {
        if ("number" != typeof (t.animationDuration = e))
            throw new Error("noUiSlider (" + lt + "): 'animationDuration' option must be a number.")
    }
    function E(t, e) {
        var r,
            n = [!1];
        if ("lower" === e ? e = [!0, !1] : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e) {
            for (r = 1; r < t.handles; r++)
                n.push(e);
            n.push(!1)
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1)
                throw new Error("noUiSlider (" + lt + "): 'connect' option doesn't match handle count.");
            n = e
        }
        t.connect = n
    }
    function C(t, e) {
        switch (e) {
        case "horizontal":
            t.ort = 0;
            break;
        case "vertical":
            t.ort = 1;
            break;
        default:
            throw new Error("noUiSlider (" + lt + "): 'orientation' option is invalid.")
        }
    }
    function P(t, e) {
        if (!o(e))
            throw new Error("noUiSlider (" + lt + "): 'margin' option must be numeric.");
        0 !== e && (t.margin = t.spectrum.getDistance(e))
    }
    function N(t, e) {
        if (!o(e))
            throw new Error("noUiSlider (" + lt + "): 'limit' option must be numeric.");
        if (t.limit = t.spectrum.getDistance(e), !t.limit || t.handles < 2)
            throw new Error("noUiSlider (" + lt + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }
    function k(t, e) {
        var r;
        if (!o(e) && !Array.isArray(e))
            throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1]))
            throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0; r < t.spectrum.xNumSteps.length - 1; r++)
                if (t.padding[0][r] < 0 || t.padding[1][r] < 0)
                    throw new Error("noUiSlider (" + lt + "): 'padding' option must be a positive number(s).");
            var n = e[0] + e[1],
                i = t.spectrum.xVal[0];
            if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - i))
                throw new Error("noUiSlider (" + lt + "): 'padding' option must not exceed 100% of the range.")
        }
    }
    function U(t, e) {
        switch (e) {
        case "ltr":
            t.dir = 0;
            break;
        case "rtl":
            t.dir = 1;
            break;
        default:
            throw new Error("noUiSlider (" + lt + "): 'direction' option was not recognized.")
        }
    }
    function A(t, e) {
        if ("string" != typeof e)
            throw new Error("noUiSlider (" + lt + "): 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap"),
            n = 0 <= e.indexOf("drag"),
            i = 0 <= e.indexOf("fixed"),
            o = 0 <= e.indexOf("snap"),
            s = 0 <= e.indexOf("hover"),
            a = 0 <= e.indexOf("unconstrained");
        if (i) {
            if (2 !== t.handles)
                throw new Error("noUiSlider (" + lt + "): 'fixed' behaviour must be used with 2 handles");
            P(t, t.start[1] - t.start[0])
        }
        if (a && (t.margin || t.limit))
            throw new Error("noUiSlider (" + lt + "): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = {
            tap: r || o,
            drag: n,
            fixed: i,
            snap: o,
            hover: s,
            unconstrained: a
        }
    }
    function V(t, e) {
        if (!1 !== e)
            if (!0 === e) {
                t.tooltips = [];
                for (var r = 0; r < t.handles; r++)
                    t.tooltips.push(!0)
            } else {
                if (t.tooltips = dt(e), t.tooltips.length !== t.handles)
                    throw new Error("noUiSlider (" + lt + "): must pass a formatter for all handles.");
                t.tooltips.forEach(function(t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to))
                        throw new Error("noUiSlider (" + lt + "): 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }
    function D(t, e) {
        h(t.ariaFormat = e)
    }
    function M(t, e) {
        h(t.format = e)
    }
    function O(t, e) {
        if ("boolean" != typeof (t.keyboardSupport = e))
            throw new Error("noUiSlider (" + lt + "): 'keyboardSupport' option must be a boolean.")
    }
    function L(t, e) {
        t.documentElement = e
    }
    function z(t, e) {
        if ("string" != typeof e && !1 !== e)
            throw new Error("noUiSlider (" + lt + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e
    }
    function H(t, e) {
        if ("object" != typeof e)
            throw new Error("noUiSlider (" + lt + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix)
            for (var r in t.cssClasses = {}, e)
                e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);
        else
            t.cssClasses = e
    }
    function vt(e) {
        var r = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: !0,
                animationDuration: 300,
                ariaFormat: u,
                format: u
            },
            n = {
                step: {
                    r: !1,
                    t: m
                },
                keyboardPageMultiplier: {
                    r: !1,
                    t: g
                },
                keyboardDefaultStep: {
                    r: !1,
                    t: v
                },
                start: {
                    r: !0,
                    t: x
                },
                connect: {
                    r: !0,
                    t: E
                },
                direction: {
                    r: !0,
                    t: U
                },
                snap: {
                    r: !1,
                    t: S
                },
                animate: {
                    r: !1,
                    t: w
                },
                animationDuration: {
                    r: !1,
                    t: y
                },
                range: {
                    r: !0,
                    t: b
                },
                orientation: {
                    r: !1,
                    t: C
                },
                margin: {
                    r: !1,
                    t: P
                },
                limit: {
                    r: !1,
                    t: N
                },
                padding: {
                    r: !1,
                    t: k
                },
                behaviour: {
                    r: !0,
                    t: A
                },
                ariaFormat: {
                    r: !1,
                    t: D
                },
                format: {
                    r: !1,
                    t: M
                },
                tooltips: {
                    r: !1,
                    t: V
                },
                keyboardSupport: {
                    r: !0,
                    t: O
                },
                documentElement: {
                    r: !1,
                    t: L
                },
                cssPrefix: {
                    r: !0,
                    t: z
                },
                cssClasses: {
                    r: !0,
                    t: H
                }
            },
            i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: d,
                keyboardPageMultiplier: 5,
                keyboardDefaultStep: 10
            };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format),
        Object.keys(n).forEach(function(t) {
            if (!a(e[t]) && void 0 === i[t]) {
                if (n[t].r)
                    throw new Error("noUiSlider (" + lt + "): '" + t + "' is required.");
                return !0
            }
            n[t].t(r, a(e[t]) ? e[t] : i[t])
        }),
        r.pips = e.pips;
        var t = document.createElement("div"),
            o = void 0 !== t.style.msTransform,
            s = void 0 !== t.style.transform;
        r.transformRule = s ? "transform" : o ? "msTransform" : "webkitTransform";
        return r.style = [["left", "top"], ["right", "bottom"]][r.dir][r.ort], r
    }
    function j(t, b, o) {
        var l,
            u,
            s,
            c,
            i,
            a,
            e,
            p,
            f = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            d = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {}
                return t
            }(),
            h = t,
            y = b.spectrum,
            x = [],
            S = [],
            m = [],
            g = 0,
            v = {},
            w = t.ownerDocument,
            E = b.documentElement || w.documentElement,
            C = w.body,
            P = -1,
            N = 0,
            k = 1,
            U = 2,
            A = "rtl" === w.dir || 1 === b.ort ? 0 : 100;
        function V(t, e) {
            var r = w.createElement("div");
            return e && ht(r, e), t.appendChild(r), r
        }
        function D(t, e) {
            var r = V(t, b.cssClasses.origin),
                n = V(r, b.cssClasses.handle);
            return V(n, b.cssClasses.touchArea), n.setAttribute("data-handle", e), b.keyboardSupport && (n.setAttribute("tabindex", "0"), n.addEventListener("keydown", function(t) {
                return function(t, e) {
                    if (O() || L(e))
                        return !1;
                    var r = ["Left", "Right"],
                        n = ["Down", "Up"],
                        i = ["PageDown", "PageUp"],
                        o = ["Home", "End"];
                    b.dir && !b.ort ? r.reverse() : b.ort && !b.dir && (n.reverse(), i.reverse());
                    var s,
                        a = t.key.replace("Arrow", ""),
                        l = a === i[0],
                        u = a === i[1],
                        c = a === n[0] || a === r[0] || l,
                        p = a === n[1] || a === r[1] || u,
                        f = a === o[0],
                        d = a === o[1];
                    if (!(c || p || f || d))
                        return !0;
                    if (t.preventDefault(), p || c) {
                        var h = b.keyboardPageMultiplier,
                            m = c ? 0 : 1,
                            g = at(e),
                            v = g[m];
                        if (null === v)
                            return !1;
                        !1 === v && (v = y.getDefaultStep(S[e], c, b.keyboardDefaultStep)),
                        (u || l) && (v *= h),
                        v = Math.max(v, 1e-7),
                        v *= c ? -1 : 1,
                        s = x[e] + v
                    } else
                        s = d ? b.spectrum.xVal[b.spectrum.xVal.length - 1] : b.spectrum.xVal[0];
                    return rt(e, y.toStepping(s), !0, !0), J("slide", e), J("update", e), J("change", e), J("set", e), !1
                }(t, e)
            })), n.setAttribute("role", "slider"), n.setAttribute("aria-orientation", b.ort ? "vertical" : "horizontal"), 0 === e ? ht(n, b.cssClasses.handleLower) : e === b.handles - 1 && ht(n, b.cssClasses.handleUpper), r
        }
        function M(t, e) {
            return !!e && V(t, b.cssClasses.connect)
        }
        function r(t, e) {
            return !!b.tooltips[e] && V(t.firstChild, b.cssClasses.tooltip)
        }
        function O() {
            return h.hasAttribute("disabled")
        }
        function L(t) {
            return u[t].hasAttribute("disabled")
        }
        function z() {
            i && (G("update.tooltips"), i.forEach(function(t) {
                t && ut(t)
            }), i = null)
        }
        function H() {
            z(),
            i = u.map(r),
            $("update.tooltips", function(t, e, r) {
                if (i[e]) {
                    var n = t[e];
                    !0 !== b.tooltips[e] && (n = b.tooltips[e].to(r[e])),
                    i[e].innerHTML = n
                }
            })
        }
        function j(e, i, o) {
            var s = w.createElement("div"),
                a = [];
            a[N] = b.cssClasses.valueNormal,
            a[k] = b.cssClasses.valueLarge,
            a[U] = b.cssClasses.valueSub;
            var l = [];
            l[N] = b.cssClasses.markerNormal,
            l[k] = b.cssClasses.markerLarge,
            l[U] = b.cssClasses.markerSub;
            var u = [b.cssClasses.valueHorizontal, b.cssClasses.valueVertical],
                c = [b.cssClasses.markerHorizontal, b.cssClasses.markerVertical];
            function p(t, e) {
                var r = e === b.cssClasses.value,
                    n = r ? a : l;
                return e + " " + (r ? u : c)[b.ort] + " " + n[t]
            }
            return ht(s, b.cssClasses.pips), ht(s, 0 === b.ort ? b.cssClasses.pipsHorizontal : b.cssClasses.pipsVertical), Object.keys(e).forEach(function(t) {
                !function(t, e, r) {
                    if ((r = i ? i(e, r) : r) !== P) {
                        var n = V(s, !1);
                        n.className = p(r, b.cssClasses.marker),
                        n.style[b.style] = t + "%",
                        N < r && ((n = V(s, !1)).className = p(r, b.cssClasses.value), n.setAttribute("data-value", e), n.style[b.style] = t + "%", n.innerHTML = o.to(e))
                    }
                }(t, e[t][0], e[t][1])
            }), s
        }
        function F() {
            c && (ut(c), c = null)
        }
        function R(t) {
            F();
            var m,
                g,
                v,
                b,
                e,
                r,
                x,
                S,
                w,
                n = t.mode,
                i = t.density || 1,
                o = t.filter || !1,
                s = function(t, e, r) {
                    if ("range" === t || "steps" === t)
                        return y.xVal;
                    if ("count" === t) {
                        if (e < 2)
                            throw new Error("noUiSlider (" + lt + "): 'values' (>= 2) required for mode 'count'.");
                        var n = e - 1,
                            i = 100 / n;
                        for (e = []; n--;)
                            e[n] = n * i;
                        e.push(100),
                        t = "positions"
                    }
                    return "positions" === t ? e.map(function(t) {
                        return y.fromStepping(r ? y.getStep(t) : t)
                    }) : "values" === t ? r ? e.map(function(t) {
                        return y.fromStepping(y.getStep(y.toStepping(t)))
                    }) : e : void 0
                }(n, t.values || !1, t.stepped || !1),
                a = (m = i, g = n, v = s, b = {}, e = y.xVal[0], r = y.xVal[y.xVal.length - 1], S = x = !1, w = 0, (v = v.slice().sort(function(t, e) {
                    return t - e
                }).filter(function(t) {
                    return !this[t] && (this[t] = !0)
                }, {}))[0] !== e && (v.unshift(e), x = !0), v[v.length - 1] !== r && (v.push(r), S = !0), v.forEach(function(t, e) {
                    var r,
                        n,
                        i,
                        o,
                        s,
                        a,
                        l,
                        u,
                        c,
                        p,
                        f = t,
                        d = v[e + 1],
                        h = "steps" === g;
                    if (h && (r = y.xNumSteps[e]), r || (r = d - f), !1 !== f)
                        for (void 0 === d && (d = f), r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                            for (u = (s = (o = y.toStepping(n)) - w) / m, p = s / (c = Math.round(u)), i = 1; i <= c; i += 1)
                                b[(a = w + i * p).toFixed(5)] = [y.fromStepping(a), 0];
                            l = -1 < v.indexOf(n) ? k : h ? U : N,
                            !e && x && n !== d && (l = 0),
                            n === d && S || (b[o.toFixed(5)] = [n, l]),
                            w = o
                        }
                }), b),
                l = t.format || {
                    to: Math.round
                };
            return c = h.appendChild(j(a, o, l))
        }
        function T() {
            var t = l.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][b.ort];
            return 0 === b.ort ? t.width || l[e] : t.height || l[e]
        }
        function B(n, i, o, s) {
            var e = function(t) {
                    return !!(t = function(t, e, r) {
                            var n,
                                i,
                                o = 0 === t.type.indexOf("touch"),
                                s = 0 === t.type.indexOf("mouse"),
                                a = 0 === t.type.indexOf("pointer");
                            0 === t.type.indexOf("MSPointer") && (a = !0);
                            if ("mousedown" === t.type && !t.buttons && !t.touches)
                                return !1;
                            if (o) {
                                var l = function(t) {
                                    return t.target === r || r.contains(t.target) || t.target.shadowRoot && t.target.shadowRoot.contains(r)
                                };
                                if ("touchstart" === t.type) {
                                    var u = Array.prototype.filter.call(t.touches, l);
                                    if (1 < u.length)
                                        return !1;
                                    n = u[0].pageX,
                                    i = u[0].pageY
                                } else {
                                    var c = Array.prototype.find.call(t.changedTouches, l);
                                    if (!c)
                                        return !1;
                                    n = c.pageX,
                                    i = c.pageY
                                }
                            }
                            e = e || gt(w),
                            (s || a) && (n = t.clientX + e.x, i = t.clientY + e.y);
                            return t.pageOffset = e, t.points = [n, i], t.cursor = s || a, t
                        }(t, s.pageOffset, s.target || i)) && (!(O() && !s.doNotReject) && (e = h, r = b.cssClasses.tap, !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !s.doNotReject) && (!(n === f.start && void 0 !== t.buttons && 1 < t.buttons) && ((!s.hover || !t.buttons) && (d || t.preventDefault(), t.calcPoint = t.points[b.ort], void o(t, s))))));
                    var e,
                        r
                },
                r = [];
            return n.split(" ").forEach(function(t) {
                i.addEventListener(t, e, !!d && {
                    passive: !0
                }),
                r.push([t, e])
            }), r
        }
        function q(t) {
            var e,
                r,
                n,
                i,
                o,
                s,
                a = 100 * (t - (e = l, r = b.ort, n = e.getBoundingClientRect(), i = e.ownerDocument, o = i.documentElement, s = gt(i), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (s.x = 0), r ? n.top + s.y - o.clientTop : n.left + s.x - o.clientLeft)) / T();
            return a = ft(a), b.dir ? 100 - a : a
        }
        function X(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && _(t, e)
        }
        function Y(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty)
                return _(t, e);
            var r = (b.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            Z(0 < r, 100 * r / e.baseSize, e.locations, e.handleNumbers)
        }
        function _(t, e) {
            e.handle && (mt(e.handle, b.cssClasses.active), g -= 1),
            e.listeners.forEach(function(t) {
                E.removeEventListener(t[0], t[1])
            }),
            0 === g && (mt(h, b.cssClasses.drag), et(), t.cursor && (C.style.cursor = "", C.removeEventListener("selectstart", ct))),
            e.handleNumbers.forEach(function(t) {
                J("change", t),
                J("set", t),
                J("end", t)
            })
        }
        function I(t, e) {
            if (e.handleNumbers.some(L))
                return !1;
            var r;
            1 === e.handleNumbers.length && (r = u[e.handleNumbers[0]].children[0], g += 1, ht(r, b.cssClasses.active));
            t.stopPropagation();
            var n = [],
                i = B(f.move, E, Y, {
                    target: t.target,
                    handle: r,
                    listeners: n,
                    startCalcPoint: t.calcPoint,
                    baseSize: T(),
                    pageOffset: t.pageOffset,
                    handleNumbers: e.handleNumbers,
                    buttonsProperty: t.buttons,
                    locations: S.slice()
                }),
                o = B(f.end, E, _, {
                    target: t.target,
                    handle: r,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: e.handleNumbers
                }),
                s = B("mouseout", E, X, {
                    target: t.target,
                    handle: r,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: e.handleNumbers
                });
            n.push.apply(n, i.concat(o, s)),
            t.cursor && (C.style.cursor = getComputedStyle(t.target).cursor, 1 < u.length && ht(h, b.cssClasses.drag), C.addEventListener("selectstart", ct, !1)),
            e.handleNumbers.forEach(function(t) {
                J("start", t)
            })
        }
        function n(t) {
            t.stopPropagation();
            var i,
                o,
                s,
                e = q(t.calcPoint),
                r = (i = e, s = !(o = 100), u.forEach(function(t, e) {
                    if (!L(e)) {
                        var r = S[e],
                            n = Math.abs(r - i);
                        (n < o || n <= o && r < i || 100 === n && 100 === o) && (s = e, o = n)
                    }
                }), s);
            if (!1 === r)
                return !1;
            b.events.snap || pt(h, b.cssClasses.tap, b.animationDuration),
            rt(r, e, !0, !0),
            et(),
            J("slide", r, !0),
            J("update", r, !0),
            J("change", r, !0),
            J("set", r, !0),
            b.events.snap && I(t, {
                handleNumbers: [r]
            })
        }
        function W(t) {
            var e = q(t.calcPoint),
                r = y.getStep(e),
                n = y.fromStepping(r);
            Object.keys(v).forEach(function(t) {
                "hover" === t.split(".")[0] && v[t].forEach(function(t) {
                    t.call(a, n)
                })
            })
        }
        function $(t, e) {
            v[t] = v[t] || [],
            v[t].push(e),
            "update" === t.split(".")[0] && u.forEach(function(t, e) {
                J("update", e)
            })
        }
        function G(t) {
            var n = t && t.split(".")[0],
                i = n && t.substring(n.length);
            Object.keys(v).forEach(function(t) {
                var e = t.split(".")[0],
                    r = t.substring(e.length);
                n && n !== e || i && i !== r || delete v[t]
            })
        }
        function J(r, n, i) {
            Object.keys(v).forEach(function(t) {
                var e = t.split(".")[0];
                r === e && v[t].forEach(function(t) {
                    t.call(a, x.map(b.format.to), n, x.slice(), i || !1, S.slice(), a)
                })
            })
        }
        function K(t, e, r, n, i, o) {
            var s;
            return 1 < u.length && !b.events.unconstrained && (n && 0 < e && (s = y.getAbsoluteDistance(t[e - 1], b.margin, 0), r = Math.max(r, s)), i && e < u.length - 1 && (s = y.getAbsoluteDistance(t[e + 1], b.margin, 1), r = Math.min(r, s))), 1 < u.length && b.limit && (n && 0 < e && (s = y.getAbsoluteDistance(t[e - 1], b.limit, 0), r = Math.min(r, s)), i && e < u.length - 1 && (s = y.getAbsoluteDistance(t[e + 1], b.limit, 1), r = Math.max(r, s))), b.padding && (0 === e && (s = y.getAbsoluteDistance(0, b.padding[0], 0), r = Math.max(r, s)), e === u.length - 1 && (s = y.getAbsoluteDistance(100, b.padding[1], 1), r = Math.min(r, s))), !((r = ft(r = y.getStep(r))) === t[e] && !o) && r
        }
        function Q(t, e) {
            var r = b.ort;
            return (r ? e : t) + ", " + (r ? t : e)
        }
        function Z(t, n, r, e) {
            var i = r.slice(),
                o = [!t, t],
                s = [t, !t];
            e = e.slice(),
            t && e.reverse(),
            1 < e.length ? e.forEach(function(t, e) {
                var r = K(i, t, i[t] + n, o[e], s[e], !1);
                !1 === r ? n = 0 : (n = r - i[t], i[t] = r)
            }) : o = s = [!0];
            var a = !1;
            e.forEach(function(t, e) {
                a = rt(t, r[t] + n, o[e], s[e]) || a
            }),
            a && e.forEach(function(t) {
                J("update", t),
                J("slide", t)
            })
        }
        function tt(t, e) {
            return b.dir ? 100 - t - e : t
        }
        function et() {
            m.forEach(function(t) {
                var e = 50 < S[t] ? -1 : 1,
                    r = 3 + (u.length + e * t);
                u[t].style.zIndex = r
            })
        }
        function rt(t, e, r, n, i) {
            return i || (e = K(S, t, e, r, n, !1)), !1 !== e && (function(t, e) {
                S[t] = e,
                x[t] = y.fromStepping(e);
                var r = "translate(" + Q(10 * (tt(e, 0) - A) + "%", "0") + ")";
                u[t].style[b.transformRule] = r,
                nt(t),
                nt(t + 1)
            }(t, e), !0)
        }
        function nt(t) {
            if (s[t]) {
                var e = 0,
                    r = 100;
                0 !== t && (e = S[t - 1]),
                t !== s.length - 1 && (r = S[t]);
                var n = r - e,
                    i = "translate(" + Q(tt(e, n) + "%", "0") + ")",
                    o = "scale(" + Q(n / 100, "1") + ")";
                s[t].style[b.transformRule] = i + " " + o
            }
        }
        function it(t, e) {
            return null === t || !1 === t || void 0 === t ? S[e] : ("number" == typeof t && (t = String(t)), t = b.format.from(t), !1 === (t = y.toStepping(t)) || isNaN(t) ? S[e] : t)
        }
        function ot(t, e, r) {
            var n = dt(t),
                i = void 0 === S[0];
            e = void 0 === e || !!e,
            b.animate && !i && pt(h, b.cssClasses.tap, b.animationDuration),
            m.forEach(function(t) {
                rt(t, it(n[t], t), !0, !1, r)
            });
            for (var o = 1 === m.length ? 0 : 1; o < m.length; ++o)
                m.forEach(function(t) {
                    rt(t, S[t], !0, !0, r)
                });
            et(),
            m.forEach(function(t) {
                J("update", t),
                null !== n[t] && e && J("set", t)
            })
        }
        function st() {
            var t = x.map(b.format.to);
            return 1 === t.length ? t[0] : t
        }
        function at(t) {
            var e = S[t],
                r = y.getNearbySteps(e),
                n = x[t],
                i = r.thisStep.step,
                o = null;
            if (b.snap)
                return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
            !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n),
            o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep,
            100 === e ? i = null : 0 === e && (o = null);
            var s = y.countStepDecimals();
            return null !== i && !1 !== i && (i = Number(i.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, i]
        }
        return ht(e = h, b.cssClasses.target), 0 === b.dir ? ht(e, b.cssClasses.ltr) : ht(e, b.cssClasses.rtl), 0 === b.ort ? ht(e, b.cssClasses.horizontal) : ht(e, b.cssClasses.vertical), ht(e, "rtl" === getComputedStyle(e).direction ? b.cssClasses.textDirectionRtl : b.cssClasses.textDirectionLtr), l = V(e, b.cssClasses.base), function(t, e) {
            var r = V(e, b.cssClasses.connects);
            u = [],
            (s = []).push(M(r, t[0]));
            for (var n = 0; n < b.handles; n++)
                u.push(D(e, n)),
                m[n] = n,
                s.push(M(r, t[n + 1]))
        }(b.connect, l), (p = b.events).fixed || u.forEach(function(t, e) {
            B(f.start, t.children[0], I, {
                handleNumbers: [e]
            })
        }), p.tap && B(f.start, l, n, {}), p.hover && B(f.move, l, W, {
            hover: !0
        }), p.drag && s.forEach(function(t, e) {
            if (!1 !== t && 0 !== e && e !== s.length - 1) {
                var r = u[e - 1],
                    n = u[e],
                    i = [t];
                ht(t, b.cssClasses.draggable),
                p.fixed && (i.push(r.children[0]), i.push(n.children[0])),
                i.forEach(function(t) {
                    B(f.start, t, I, {
                        handles: [r, n],
                        handleNumbers: [e - 1, e]
                    })
                })
            }
        }), ot(b.start), b.pips && R(b.pips), b.tooltips && H(), $("update", function(t, e, s, r, a) {
            m.forEach(function(t) {
                var e = u[t],
                    r = K(S, t, 0, !0, !0, !0),
                    n = K(S, t, 100, !0, !0, !0),
                    i = a[t],
                    o = b.ariaFormat.to(s[t]);
                r = y.fromStepping(r).toFixed(1),
                n = y.fromStepping(n).toFixed(1),
                i = y.fromStepping(i).toFixed(1),
                e.children[0].setAttribute("aria-valuemin", r),
                e.children[0].setAttribute("aria-valuemax", n),
                e.children[0].setAttribute("aria-valuenow", i),
                e.children[0].setAttribute("aria-valuetext", o)
            })
        }), a = {
            destroy: function() {
                for (var t in b.cssClasses)
                    b.cssClasses.hasOwnProperty(t) && mt(h, b.cssClasses[t]);
                for (; h.firstChild;)
                    h.removeChild(h.firstChild);
                delete h.noUiSlider
            },
            steps: function() {
                return m.map(at)
            },
            on: $,
            off: G,
            get: st,
            set: ot,
            setHandle: function(t, e, r, n) {
                if (!(0 <= (t = Number(t)) && t < m.length))
                    throw new Error("noUiSlider (" + lt + "): invalid handle number, got: " + t);
                rt(t, it(e, t), !0, !0, n),
                J("update", t),
                r && J("set", t)
            },
            reset: function(t) {
                ot(b.start, t)
            },
            __moveHandles: function(t, e, r) {
                Z(t, e, S, r)
            },
            options: o,
            updateOptions: function(e, t) {
                var r = st(),
                    n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                n.forEach(function(t) {
                    void 0 !== e[t] && (o[t] = e[t])
                });
                var i = vt(o);
                n.forEach(function(t) {
                    void 0 !== e[t] && (b[t] = i[t])
                }),
                y = i.spectrum,
                b.margin = i.margin,
                b.limit = i.limit,
                b.padding = i.padding,
                b.pips ? R(b.pips) : F(),
                b.tooltips ? H() : z(),
                S = [],
                ot(e.start || r, t)
            },
            target: h,
            removePips: F,
            removeTooltips: z,
            getTooltips: function() {
                return i
            },
            getOrigins: function() {
                return u
            },
            pips: R
        }
    }
    return {
        __spectrum: i,
        version: lt,
        cssClasses: d,
        create: function(t, e) {
            if (!t || !t.nodeName)
                throw new Error("noUiSlider (" + lt + "): create requires a single element, got: " + t);
            if (t.noUiSlider)
                throw new Error("noUiSlider (" + lt + "): Slider was already initialized.");
            var r = j(t, vt(e), e);
            return t.noUiSlider = r
        }
    }
});

/* ==== INCLUDE: /js/blocks/slider.js ==== */

;
(function() {

    function init(el) {
        if ('true' === el.getAttribute('data-inited')) {
            return
        }
        const min = parseInt(el.getAttribute('data-min')) || 0
        const max = parseInt(el.getAttribute('data-max')) || 10000000
        const from = parseInt(el.getAttribute('data-from')) || min
        const to = parseInt(el.getAttribute('data-to')) || max
        const step = parseInt(el.getAttribute('data-step')) || undefined
        const prefix = el.getAttribute('data-prefix') || undefined

        const withTooltips = el.getAttribute('data-tooltips') === 'true'

        const formatter = {
            to: val => {
                return (prefix ? prefix : '') + new Intl.NumberFormat().format(val.toFixed(0))
            },
            from: str => {
                return parseInt(val)
            }
        }

        noUiSlider.create(el, {
            start: [from, to],
            connect: true,
            step,
            range: {
                min,
                max,
            },
            tooltips: withTooltips ? [formatter, formatter] : null,
            ariaFormat: formatter,
        })
        // merged tooltip
        const combinedTooltip = withTooltips ? el.noUiSlider.getTooltips()[1].cloneNode(true) : null
        if (combinedTooltip) {
            el.noUiSlider.getTooltips()[1].parentElement.insertBefore(combinedTooltip,
            el.noUiSlider.getTooltips()[1])
            combinedTooltip.combined = true
            combinedTooltip.style.visibility = 'hidden'
        }

        el.noUiSlider.on('update', (values) => {
            const name = el.getAttribute('data-name')
            if (name) {
                const hidden = el.closest('form').querySelector('[name="' + name + '"]')
                hidden && hidden.setAttribute('value', parseInt(values[0]) + '|' + parseInt(values[1]))
            }

            if (withTooltips) {
                // merge tooltips if necessary

                combinedTooltip.innerText = formatter.to(parseInt(values[0])) + ' - ' + formatter.to(parseInt(values[1]))
                const tooltips = el.noUiSlider.getTooltips()

                const r1 = tooltips[0].getBoundingClientRect()
                const r2 = tooltips[1].getBoundingClientRect()

                if (r1.x + r1.width + 2 > r2.x) {
                    // touching

                    // distance between handles
                    const connectRect = el.querySelector('.noUi-connect').getBoundingClientRect()
                    const combinedRect = combinedTooltip.getBoundingClientRect()

                    combinedTooltip.style.transform = 'translateX(-' + (combinedRect.width / 2 + connectRect.width / 2) + 'px)';

                    tooltips[0].style.visibility = 'hidden'
                    tooltips[1].style.visibility = 'hidden'
                    combinedTooltip.style.visibility = 'visible'
                } else {
                    tooltips[0].style.visibility = 'visible'
                    tooltips[1].style.visibility = 'visible'
                    combinedTooltip.style.visibility = 'hidden'
                }
            }
        })
        //mergeTooltips(el, 10, ' - ' )

        el.setAttribute('data-inited', 'true')

        return el.noUiSlider
    }

    function reinit(id) {
        document.querySelectorAll('#' + id + ' .range-slider').forEach(init)
    }
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.range-slider').forEach(init)
    })

    _G.slider = init

    _G.reinitHandlers.push(reinit)

})()
/* ==== INCLUDE: /js/blocks/maps.js ==== */


window.mapboxJsLoaded = false
window.mapboxCssLoaded = false

function initMaps() {
    _G.maps = []
    // const BG_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAAZUlEQVQ4T+2TQQ7AIAgEl88WnyR+lgbSNGotCT31IEezs+IkEgDFxyGDVfM8EWHDCetbWEKWRX8grN9YasXB/HhEEwGXMpzbx5hH54IOHPIr2MrugjfQpQWSveBadZmLYN8guuAEQo5PBQyQLMoAAAAASUVORK5CYII="
    // const BG_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAL0lEQVQ4T2NkYGD4z0AmYARp/v+fdP2MjIwMo5pJCPXRACMhsEBKB0GAkehiuHIAy842AX0JUPAAAAAASUVORK5CYII="
    const BG_IMG = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAPAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgAI/8QAJRAAAQMEAQQCAwAAAAAAAAAAAQIDBAUGBxEUAAgSExUxISJB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN54ixFYtSxPZUyZZdvSpciiQnXn36UwtxxamEFSlKKNkkkkk/e+iXdZi+zbdwHdFQpVpUKmT2eL6pUOmssuo3KZSfFaUgjYJB0fokdWL+6zFtu40tKlVC6OPPg0iJFkM/HyleDiGUJWnaWiDogjYJHRnuT7k8cX/hW4qDQbi59Wl8b0x+DJb8/GS0tX7LbCRpKVH8n+dB//2Q=="

    const sources = document.querySelectorAll('[data-rel=block-map]')
    const promises = []

    const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
            const map = entry && entry.target && entry.target['__map']
            if (map) {
                try {
                    map.resize()
                }
                catch (e) {
                    console.warn('ERROR in maps', e)
                }
            }
        })
    })

    function addMarker(map, marker) {
        // console.log('to add marker', marker)
        var m = new mapboxgl.Marker({
            color: "#d9534f"
        }).setLngLat([marker.geometry.coordinates[0], marker.geometry.coordinates[1]])

        try {
            m.getElement().setAttribute('data-id', marker.id)
        }
        catch (e) {
            console.error(e)
        }

        if (marker.properties && marker.properties.label) {

            try {
                m.getElement().setAttribute('data-label', marker.properties.label)
            }
            catch (e) {
                console.error(e)
            }

            const popup = new mapboxgl.Popup({
                offset: 25,
                focusAfterOpen: false
            })
            if (marker.properties.link) {
                const link = document.createElement('a')
                link.setAttribute('href', marker.properties.link)
                link.innerText = marker.properties.label
                if (marker.properties.openInNewWindow) {
                    link.setAttribute('target', '_blank')
                }
                popup.setHTML(link.outerHTML)

                m.getElement().classList.add("has-link")
            } else {
                popup.setText(
                `${marker.properties.label}`
                )
            }
            m.setPopup(popup)
        }
        m.addTo(map);
        if (marker.properties && !marker.properties.hideInitially) {
            m.togglePopup();
        }
        return m
    }

    function addMarkers(map, geojson) {

        // console.log( 'to add markers', geojson )
        geojson.__markers = {}
        geojson.__markerDefs = {}
        geojson.features.forEach(f => {
            if (f.geometry && f.geometry.type === 'Point') {
                const marker = addMarker(map, f)
                geojson.__markers[f.id] = marker
                geojson.__markerDefs[f.id] = f
            }
        })
    }


    function hideAllMarkers(geojson) {
        Object.keys(geojson.__markers || {}).forEach(key => {
            const m = geojson.__markers[key]
            const p = m.getPopup()
            if (p && p.isOpen()) {
                // p.remove()
                try {
                    // p.getElement().style.opacity = '0'
                    // setTimeout(() => {
                    m.togglePopup()

                }// }, 200)
                catch (e) {
                    console.error(e)
                }
            }
        })
    }

    function showAllMarkers(geojson) {
        Object.keys(geojson.__markers || {}).forEach(key => {
            const m = geojson.__markers[key]
            const p = m.getPopup()
            if (p && !p.isOpen()) {
                try {
                    m.togglePopup()
                }
                catch (e) {
                    console.error(e)
                }
            }
        })
    }

    function restoreAllMarkers(geojson) {
        Object.keys(geojson.__markers || {}).forEach(key => {
            const m = geojson.__markers[key]
            const p = m.getPopup()
            if (p && !p.isOpen()) {
                try {
                    m.togglePopup()
                }
                catch (e) {
                    console.error(e)
                }
            }
        })
    }


    if (sources.length > 0) {
        promises.push(new Promise((resolve, reject) => {
            if (window.mapboxJsLoaded) {
                window.mapboxJsLoaded = true
                return resolve()
            }
            // LazyLoad.js( "https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js", () => {
            //     resolve()
            // })
            LazyLoad.js("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js", () => {
                resolve()
            })



        }))// LazyLoad.js( "https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.0-beta.1/mapbox-gl.js", () => {
        //     resolve()
        // })
        promises.push(new Promise((resolve, reject) => {
            if (window.mapboxCssLoaded) {
                return resolve()
            }
            // LazyLoad.css( "https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css", () => {
            //     window.mapboxCssLoaded = true
            //     resolve()
            // })
            LazyLoad.css("https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css", () => {
                window.mapboxCssLoaded = true
                resolve()
            })




        }))// LazyLoad.css( "https://api.tiles.mapbox.com/mapbox-gl-js/v2.6.0-beta.1/mapbox-gl.css", () => {
        //     window.mapboxCssLoaded = true
        //     resolve()
        // })
        Promise.all(promises).then(() => {
            sources.forEach(source => {
                try {
                    const jsonSource = source.querySelector('script')
                    if (!jsonSource) {
                        return
                    }
                    const json = JSON.parse(jsonSource.innerHTML)
                    mapboxgl.accessToken = json.key
                    source.innerHTML = ''
                    // this is dumb by mapbox doesn't recognize non-numeric IDs on features
                    let id = 1
                    json.geoJson.features = json.geoJson.features.map(f => ({
                        ...f,
                        id: ++id,
                        state: {
                            hover: false
                        },
                    }))

                    console.log('geojson', json.geoJson)

                    const map = new mapboxgl.Map({
                        container: source,
                        style: 'mapbox://styles/mapbox/streets-v11',
                        center: [json.centerLng, json.centerLat],
                        zoom: json.zoom,
                        pitch: json.pitch,
                        scrollZoom: false,
                        attributionControl: false,
                        trackResize: true,
                        cooperativeGestures: true,
                    })
                    const nav = new mapboxgl.NavigationControl();
                    map.addControl(nav, 'top-left');
                    source['__map'] = map
                    resizeObserver.observe(source)
                    map.on('load', () => {
                        map.loadImage(BG_IMG, (error, image) => {
                            console.log('loaded image', image, error)
                            map.addImage('mrp_label_bg', image, {
                                content: [3, 3, 13, 13],
                                stretchX: [[3, 5], [10, 12]],
                                stretchY: [[3, 5], [8, 13]]
                            })

                            map.addSource('data', {
                                type: 'geojson',
                                data: json.geoJson,
                            })
                            map.addLayer({
                                id: 'line',
                                source: 'data',
                                type: 'line',
                                filter: ['==', ['geometry-type'], 'LineString'],
                                layout: {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                paint: {
                                    'line-color': '#3e81a9',
                                    'line-width': 2,
                                }
                            })
                            map.addLayer({
                                id: 'polygon-fill',
                                source: 'data',
                                type: 'fill',
                                filter: ['==', ['geometry-type'], 'Polygon'],
                                paint: {
                                    'fill-color': '#3e81a9',
                                    'fill-outline-color': '#3e81a9',
                                    // 'fill-opacity': 0.1
                                    'fill-opacity': [
                                    'case',
                                    ['==', ['feature-state', 'hover'], true],
                                    0.3,
                                    0.1
                                    ]
                                }
                            })
                            map.addLayer({
                                id: 'polygon-line',
                                source: 'data',
                                type: 'line',
                                filter: ['==', ['geometry-type'], 'Polygon'],
                                layout: {
                                    'line-cap': 'round',
                                    'line-join': 'round'
                                },
                                paint: {
                                    'line-color': '#3e81a9',
                                    // 'line-width': 2
                                    'line-width': [
                                    'case',
                                    ['==', ['feature-state', 'hover'], true],
                                    5,
                                    2
                                    ]
                                }
                            })
                            map.addLayer({
                                id: 'marker-halo',
                                source: 'data',
                                type: 'circle',
                                filter: ['==', ['geometry-type'], 'Point'],
                                paint: {
                                    'circle-radius': 9,
                                    'circle-opacity': 1,
                                    // 'circle-color': '#fff',
                                    'circle-color': 'transparent' // making transparent
                                },
                            })
                            map.addLayer({
                                id: 'marker',
                                source: 'data',
                                type: 'circle',
                                filter: ['==', ['geometry-type'], 'Point'],
                                paint: {
                                    'circle-radius': 20,
                                    'circle-opacity': 1,
                                    // 'circle-color': '#3e81a9',
                                    'circle-color': 'transparent' // making transparent
                                },
                            })// map.addLayer({
                            //     id: 'marker-label',
                            //     source: 'data',
                            //     type: 'symbol',
                            //     filter: ['all', ['has', 'label'], ['!=', 'label', '']],
                            //     paint: {
                            //         'text-halo-color': '#fff',
                            //         'text-halo-width': 2,
                            //         'text-halo-blur': 2,
                            //         // 'text-color': '#3e81a9',
                            //         'text-color': '#333333',
                            //     },
                            //     layout: {
                            //         'text-field': ['get', 'label'],
                            //         'text-font': [
                            //             'Open Sans Semibold',
                            //         ],
                            //         'text-offset': [0, -3],
                            //         'text-anchor': 'bottom',
                            //         'text-size': 16,
                            //         'text-allow-overlap': true,
                            //         'text-ignore-placement': true,
                            //         'text-variable-anchor': ['bottom', 'top'],
                            //         'text-justify': 'auto',
                            //         'icon-image' : 'mrp_label_bg',
                            //         'icon-text-fit' : 'both',
                            //         'icon-text-fit-padding': [8,8,8,8],
                            //     }
                            // })
                            addMarkers(map, json.geoJson)

                            map.on('click', 'polygon-fill', e => {
                                // console.log( 'click on', e, e.features )
                                if (e.features && e.features[0]) {
                                    const props = e.features[0].properties || {}
                                    if (props.link) {
                                        if (props.openInNewWindow) {
                                            window.open(props.link, '_blank')
                                        }
                                        else {
                                            window.location = props.link
                                        }
                                    }
                                }
                            })
                            let hoverId = -1;
                            map.on('mousemove', 'polygon-fill', e => {
                                // console.log( 'hoverId', hoverId )
                                if (e.features && e.features[0]) {
                                    const props = e.features[0].properties || {}
                                    if (props.link) {
                                        if (hoverId >= 0) {
                                            map.setFeatureState(
                                            {
                                                source: 'data',
                                                id: hoverId
                                            },
                                            {
                                                hover: false
                                            }
                                            )
                                        }
                                        hoverId = e.features[0].id
                                        map.setFeatureState(
                                        {
                                            source: 'data',
                                            id: hoverId
                                        },
                                        {
                                            hover: true
                                        }
                                        )
                                        map.getCanvas().style.cursor = 'pointer'
                                    }
                                }
                            })
                            map.on('mouseleave', 'polygon-fill', e => {
                                // console.log( 'mouse out', e )
                                map.getCanvas().style.cursor = ''
                                if (hoverId >= 0) {
                                    map.setFeatureState(
                                    {
                                        source: 'data',
                                        id: hoverId
                                    },
                                    {
                                        hover: false
                                    }
                                    )
                                    hoverId = -1
                                }

                            })// console.log( 'hoverId', hoverId )
                            map.on('click', e => {

                            })
                            map.on('mouseleave', 'marker', e => {

                            })// let hoverPopup = null;
                            map.on('mouseenter', 'marker', e => {
                                if (e.features && e.features[0]) {
                                    // console.log( 'marker', json.geoJson.__markers[e.features[0].id] )
                                    // if( hoverPopup ) {
                                    //     hoverPopup.remove()
                                    //     hoverPopup = null;
                                    // }
                                    hideAllMarkers(json.geoJson)
                                    const marker = json.geoJson.__markers[e.features[0].id]
                                    if (marker) {
                                        const popup = marker.getPopup()
                                        if (popup && !popup.isOpen()) {
                                            // popup.addTo(map)
                                            // hoverPopup = popup
                                            marker.togglePopup()
                                        }
                                    }
                                }
                            })









                        })
                    })

                }// setTimeout(() => {
                //     map.resize()
                // }, 1000)
                // map.on( 'mouseleave', 'marker', e => {
                //     if( hoverPopup ) {
                //         hoverPopup.remove()
                //         hoverPopup = null;
                //     }
                // })
                //console.log( 'geoJSON', json )
                catch (e) {
                    console.error('Failed to init maps', e)
                }
            })
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMaps()

    _G.reinitHandlers.push(initMaps)
});

/* ==== INCLUDE: /js/blocks/swiper7-bundle.min.js ==== */

/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }
    function t(s={}, a={}) {
        Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }
    class n extends Array {
        constructor(e)
        {
            super(...e || []),
            function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this)
        }
    }
    function l(e=[]) {
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }
    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function d(e, t) {
        const s = r(),
            i = a();
        let l = [];
        if (!t && e instanceof n)
            return e;
        if (!e)
            return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"),
                0 === s.indexOf("<tr") && (e = "tbody"),
                0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
                0 === s.indexOf("<tbody") && (e = "table"),
                0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1)
                    l.push(t.childNodes[e])
            } else
                l = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    const s = [],
                        a = t.querySelectorAll(e);
                    for (let e = 0; e < a.length; e += 1)
                        s.push(a[e]);
                    return s
                }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i)
            l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n)
                return e;
            l = e
        }
        return new n(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
                -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const p = {
        addClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...t)
            })), this
        },
        removeClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...t)
            })), this
        },
        hasClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            return o(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            this.forEach((e => {
                t.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length)
                    this[s].setAttribute(e, t);
                else
                    for (const t in e)
                        this[s][t] = e[t],
                        this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function(...e) {
            let [t, s, a, i] = e;
            function r(e) {
                const t = e.target;
                if (!t)
                    return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), d(t).is(s))
                    a.apply(t, i);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1)
                        d(e[t]).is(s) && a.apply(e[t], i)
                }
            }
            function n(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                a.apply(this, t)
            }
            "function" == typeof e[1] && ([t, a, i] = e, s = void 0),
            i || (i = !1);
            const l = t.split(" ");
            let o;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (s)
                    for (o = 0; o < l.length; o += 1) {
                        const e = l[o];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                        t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                        t.dom7LiveListeners[e].push({
                            listener: a,
                            proxyListener: r
                        }),
                        t.addEventListener(e, r, i)
                    }
                else
                    for (o = 0; o < l.length; o += 1) {
                        const e = l[o];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                        t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                        t.dom7Listeners[e].push({
                            listener: a,
                            proxyListener: n
                        }),
                        t.addEventListener(e, n, i)
                    }
            }
            return this
        },
        off: function(...e) {
            let [t, s, a, i] = e;
            "function" == typeof e[1] && ([t, a, i] = e, s = void 0),
            i || (i = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    let n;
                    if (!s && r.dom7Listeners ? n = r.dom7Listeners[t] : s && r.dom7LiveListeners && (n = r.dom7LiveListeners[t]), n && n.length)
                        for (let e = n.length - 1; e >= 0; e -= 1) {
                            const s = n[e];
                            a && s.listener === a || a && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === a ? (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1)) : a || (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = r(),
                s = e[0].split(" "),
                a = e[1];
            for (let i = 0; i < s.length; i += 1) {
                const r = s[i];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s];
                    if (t.CustomEvent) {
                        const s = new t.CustomEvent(r, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter(((e, t) => t > 0)),
                        i.dispatchEvent(s),
                        i.dom7EventData = [],
                        delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r(),
                    t = a(),
                    s = this[0],
                    i = s.getBoundingClientRect(),
                    n = t.body,
                    l = s.clientTop || n.clientTop || 0,
                    o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop,
                    p = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + p - o
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e)
                            this[a].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1)
                    this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r(),
                s = a(),
                i = this[0];
            let l,
                o;
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            if (e === s)
                return i === s;
            if (e === t)
                return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);)
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            const t = this.length;
            if (e > t - 1)
                return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function(...e) {
            let t;
            const s = a();
            for (let a = 0; a < e.length; a += 1) {
                t = e[a];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const a = s.createElement("div");
                        for (a.innerHTML = t; a.firstChild;)
                            this[e].appendChild(a.firstChild)
                    } else if (t instanceof n)
                        for (let s = 0; s < t.length; s += 1)
                            this[e].appendChild(t[s]);
                    else
                        this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s,
                i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
                        this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                    for (i = 0; i < e.length; i += 1)
                        this[s].insertBefore(e[i], this[s].childNodes[0]);
                else
                    this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1)
                null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;)
                    e ? d(a).is(e) && t.push(a) : t.push(a),
                    a = a.parentNode
            }
            return d(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1)
                    t.push(a[e])
            }
            return d(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1)
                    e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function(e) {
            return d(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function c(e, t=0) {
        return setTimeout(e, t)
    }
    function u() {
        return Date.now()
    }
    function h(e, t="x") {
        const s = r();
        let a,
            i,
            n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }
    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function f(...e) {
        const t = Object(e[0]),
            s = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const r = e[i];
            if (null != r && (a = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const e = Object.keys(Object(r)).filter((e => s.indexOf(e) < 0));
                for (let s = 0, a = e.length; s < a; s += 1) {
                    const a = e[s],
                        i = Object.getOwnPropertyDescriptor(r, a);
                    void 0 !== i && i.enumerable && (m(t[a]) && m(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a]) : !m(t[a]) && m(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a])) : t[a] = r[a])
                }
            }
        }
        var a;
        return t
    }
    function g(e, t, s) {
        e.style.setProperty(t, s)
    }
    function v({swiper: e, targetPosition: t, side: s}) {
        const a = r(),
            i = -e.translate;
        let n,
            l = null;
        const o = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none",
        a.cancelAnimationFrame(e.cssModeFrameID);
        const d = t > i ? "next" : "prev",
            p = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
            c = () => {
                n = (new Date).getTime(),
                null === l && (l = n);
                const r = Math.max(Math.min((n - l) / o, 1), 0),
                    d = .5 - Math.cos(r * Math.PI) / 2;
                let u = i + d * (t - i);
                if (p(u, t) && (u = t), e.wrapperEl.scrollTo({
                    [s]: u
                }), p(u, t))
                    return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        e.wrapperEl.style.overflow = "",
                        e.wrapperEl.scrollTo({
                            [s]: u
                        })
                    })), void a.cancelAnimationFrame(e.cssModeFrameID);
                e.cssModeFrameID = a.requestAnimationFrame(c)
            };
        c()
    }
    let w,
        b,
        x;
    function y() {
        return w || (w = function() {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), w
    }
    function E(e={}) {
        return b || (b = function({userAgent: e}={}) {
            const t = y(),
                s = r(),
                a = s.navigator.platform,
                i = e || s.navigator.userAgent,
                n = {
                    ios: !1,
                    android: !1
                },
                l = s.screen.width,
                o = s.screen.height,
                d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = i.match(/(iPad).*OS\s([\d_]+)/);
            const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !p && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === a;
            let m = "MacIntel" === a;
            return !p && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${o}`) >= 0 && (p = i.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), d && !h && (n.os = "android", n.android = !0), (p || u || c) && (n.os = "ios", n.ios = !0), n
        }(e)), b
    }
    function T() {
        return x || (x = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), x
    }
    Object.keys(p).forEach((e => {
        Object.defineProperty(d.fn, e, {
            value: p[e],
            writable: !0
        })
    }));
    var C = {
        on(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            function i(...s) {
                a.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy,
                t.apply(a, s)
            }
            return i.__emitterProxy = t, a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if ("function" != typeof e)
                return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners)
                return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        },
        emit(...e) {
            const t = this;
            if (!t.eventsListeners)
                return t;
            let s,
                a,
                i;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], a = e.slice(1, e.length), i = t) : (s = e[0].events, a = e[0].data, i = e[0].context || t),
            a.unshift(i);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                    t.apply(i, [e, ...a])
                })),
                t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                    e.apply(i, a)
                }))
            })), t
        }
    };
    function $({swiper: e, runCallbacks: t, direction: s, step: a}) {
        const {activeIndex: i, previousIndex: r} = e;
        let n = s;
        if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${a}`), t && i !== r) {
            if ("reset" === n)
                return void e.emit(`slideResetTransition${a}`);
            e.emit(`slideChangeTransition${a}`),
            "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`)
        }
    }
    function S(e) {
        const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {params: l, touches: o, enabled: p} = t;
        if (!p)
            return;
        if (t.animating && l.preventInteractionOnTransition)
            return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let c = e;
        c.originalEvent && (c = c.originalEvent);
        let h = d(c.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
            return;
        if (n.isTouchEvent = "touchstart" === c.type, !n.isTouchEvent && "which" in c && 3 === c.which)
            return;
        if (!n.isTouchEvent && "button" in c && c.button > 0)
            return;
        if (n.isTouched && n.isMoved)
            return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            f = !(!c.target || !c.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t=this) {
            return function t(s) {
                return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null
            }(t)
        }(m, c.target) : h.closest(m)[0]))
            return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0])
            return;
        o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX,
        o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
        const g = o.currentX,
            v = o.currentY,
            w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w)
                return;
            e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== c.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1),
            s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || c.preventDefault()
        }
        t.emit("touchStart", c)
    }
    function M(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o)
            return;
        let p = e;
        if (p.originalEvent && (p = p.originalEvent), !i.isTouched)
            return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        if (i.isTouchEvent && "touchmove" !== p.type)
            return;
        const c = "touchmove" === p.type && p.targetTouches && (p.targetTouches[0] || p.changedTouches[0]),
            h = "touchmove" === p.type ? c.pageX : p.pageX,
            m = "touchmove" === p.type ? c.pageY : p.pageY;
        if (p.preventedByNestedSwiper)
            return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove)
            return s.allowClick = !1, void (i.isTouched && (Object.assign(n, {
                startX: h,
                startY: m,
                currentX: h,
                currentY: m
            }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                    return i.isTouched = !1, void (i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate())
                return;
        if (i.isTouchEvent && t.activeElement && p.target === t.activeElement && d(p.target).is(i.focusableElements))
            return i.isMoved = !0, void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", p), p.targetTouches && p.targetTouches.length > 1)
            return;
        n.currentX = h,
        n.currentY = m;
        const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        s.allowClick = !1,
        !r.cssMode && p.cancelable && p.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && p.stopPropagation(),
        i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)),
        s.emit("sliderMove", p),
        i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v,
        v *= r.touchRatio,
        l && (v = -v),
        s.swipeDirection = v > 0 ? "prev" : "next",
        i.currentTranslate = v + i.startTranslate;
        let w = !0,
            b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }
    function P(e) {
        const t = this,
            s = t.touchEventsData,
            {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l)
            return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched)
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(),
            p = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target),
            t.emit("tap click", o),
            p < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), c((() => {
            t.destroyed || (t.allowClick = !0)
        })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
            return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode)
            return;
        if (t.params.freeMode && a.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
                currentPos: h
            });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        const g = (h - n[m]) / f,
            v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (p > a.longSwipesMs) {
            if (!a.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)),
            "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), "prev" === t.swipeDirection && t.slideTo(m))
        }
    }
    function k() {
        const e = this,
            {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function z(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }
    function O() {
        const e = this,
            {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
            return;
        let i;
        e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    let I = !1;
    function L() {}
    const A = (e, t) => {
        const s = a(),
            {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e,
            p = !!i.nested,
            c = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[c](r.start, e.onTouchStart, t),
            n[c](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: p
            } : p),
            n[c](r.end, e.onTouchEnd, t),
            r.cancel && n[c](r.cancel, e.onTouchEnd, t)
        } else
            n[c](r.start, e.onTouchStart, !1),
            s[c](r.move, e.onTouchMove, p),
            s[c](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[c]("click", e.onClick, !0),
        i.cssMode && l[c]("scroll", e.onScroll),
        i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0)
    };
    const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function N(e, t) {
        return function(s={}) {
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), f(t, s)) : f(t, s)) : f(t, s)
        }
    }
    const B = {
            eventsEmitter: C,
            update: {
                updateSize: function() {
                    const e = this;
                    let t,
                        s;
                    const a = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth,
                    s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight,
                    0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function() {
                    const e = this;
                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }
                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const a = e.params,
                        {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e,
                        o = e.virtual && a.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        p = i.children(`.${e.params.slideClass}`),
                        c = o ? e.virtual.slides.length : p.length;
                    let u = [];
                    const h = [],
                        m = [];
                    let f = a.slidesOffsetBefore;
                    "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                    let v = a.slidesOffsetAfter;
                    "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
                    const w = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let x = a.spaceBetween,
                        y = -f,
                        E = 0,
                        T = 0;
                    if (void 0 === r)
                        return;
                    "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r),
                    e.virtualSize = -x,
                    n ? p.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : p.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }),
                    a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""), g(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const C = a.grid && a.grid.rows > 1 && e.grid;
                    let $;
                    C && e.grid.initSlides(c);
                    const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                    for (let i = 0; i < c; i += 1) {
                        $ = 0;
                        const n = p.eq(i);
                        if (C && e.grid.updateSlide(i, n, c, t), "none" !== n.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                S && (p[i].style[t("width")] = "");
                                const r = getComputedStyle(n[0]),
                                    l = n[0].style.transform,
                                    o = n[0].style.webkitTransform;
                                if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths)
                                    $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else {
                                    const e = s(r, "width"),
                                        t = s(r, "padding-left"),
                                        a = s(r, "padding-right"),
                                        i = s(r, "margin-left"),
                                        l = s(r, "margin-right"),
                                        o = r.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o)
                                        $ = e + i + l;
                                    else {
                                        const {clientWidth: s, offsetWidth: r} = n[0];
                                        $ = e + t + a + i + l + (r - s)
                                    }
                                }
                                l && (n[0].style.transform = l),
                                o && (n[0].style.webkitTransform = o),
                                a.roundLengths && ($ = Math.floor($))
                            } else
                                $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView,
                                a.roundLengths && ($ = Math.floor($)),
                                p[i] && (p[i].style[t("width")] = `${$}px`);
                            p[i] && (p[i].swiperSlideSize = $),
                            m.push($),
                            a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x),
                            e.virtualSize += $ + x,
                            E = $,
                            T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                        width: `${e.virtualSize + a.spaceBetween}px`
                    }), a.setWrapperSize && i.css({
                        [t("width")]: `${e.virtualSize + a.spaceBetween}px`
                    }), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let i = u[s];
                            a.roundLengths && (i = Math.floor(i)),
                            u[s] <= e.virtualSize - r && t.push(i)
                        }
                        u = t,
                        Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                    }
                    if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                        p.filter(((e, t) => !a.cssMode || t !== p.length - 1)).css({
                            [s]: `${x}px`
                        })
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach((t => {
                            e += t + (a.spaceBetween ? a.spaceBetween : 0)
                        })),
                        e -= a.spaceBetween;
                        const t = e - r;
                        u = u.map((e => e < 0 ? -f : e > t ? t + v : e))
                    }
                    if (a.centerInsufficientSlides) {
                        let e = 0;
                        if (m.forEach((t => {
                            e += t + (a.spaceBetween ? a.spaceBetween : 0)
                        })), e -= a.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            u.forEach(((e, s) => {
                                u[s] = e - t
                            })),
                            h.forEach(((e, s) => {
                                h[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                        slides: p,
                        snapGrid: u,
                        slidesGrid: h,
                        slidesSizesGrid: m
                    }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                        g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)),
                        e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    c !== d && e.emit("slidesLengthChange"),
                    u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                    h.length !== b && e.emit("slidesGridLengthChange"),
                    a.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        s = [],
                        a = t.virtual && t.params.virtual.enabled;
                    let i,
                        r = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)
                            t.visibleSlides.each((e => {
                                s.push(e)
                            }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !a)
                                    break;
                                s.push(n(e))
                            }
                    else
                        s.push(n(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if (void 0 !== s[i]) {
                            const e = s[i].offsetHeight;
                            r = e > r ? e : r
                        }
                    (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1)
                        t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function(e=this && this.translate || 0) {
                    const t = this,
                        s = t.params,
                        {slides: a, rtlTranslate: i, snapGrid: r} = t;
                    if (0 === a.length)
                        return;
                    void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                    let n = -e;
                    i && (n = e),
                    a.removeClass(s.slideVisibleClass),
                    t.visibleSlidesIndexes = [],
                    t.visibleSlides = [];
                    for (let e = 0; e < a.length; e += 1) {
                        const l = a[e];
                        let o = l.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                        const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                            p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                            c = -(n - o),
                            u = c + t.slidesSizesGrid[e];
                        (c >= 0 && c < t.size - 1 || u > 1 && u <= t.size || c <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)),
                        l.progress = i ? -d : d,
                        l.originalProgress = i ? -p : p
                    }
                    t.visibleSlides = d(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        a = t.maxTranslate() - t.minTranslate();
                    let {progress: i, isBeginning: r, isEnd: n} = t;
                    const l = r,
                        o = n;
                    0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1),
                    Object.assign(t, {
                        progress: i,
                        isBeginning: r,
                        isEnd: n
                    }),
                    (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
                    r && !l && t.emit("reachBeginning toEdge"),
                    n && !o && t.emit("reachEnd toEdge"),
                    (l && !r || o && !n) && t.emit("fromEdge"),
                    t.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e,
                        n = e.virtual && s.virtual.enabled;
                    let l;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                    l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
                    l.addClass(s.slideActiveClass),
                    s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)),
                    s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
                    e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
                    let d,
                        p = e;
                    if (void 0 === p) {
                        for (let e = 0; e < a.length; e += 1)
                            void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? p = e : s >= a[e] && s < a[e + 1] && (p = e + 1) : s >= a[e] && (p = e);
                        r.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
                    }
                    if (i.indexOf(s) >= 0)
                        d = i.indexOf(s);
                    else {
                        const e = Math.min(r.slidesPerGroupSkip, p);
                        d = e + Math.floor((p - e) / r.slidesPerGroup)
                    }
                    if (d >= i.length && (d = i.length - 1), p === n)
                        return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const c = parseInt(t.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: c,
                        previousIndex: n,
                        activeIndex: p
                    }),
                    t.emit("activeIndexChange"),
                    t.emit("snapIndexChange"),
                    l !== c && t.emit("realIndexChange"),
                    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        s = t.params,
                        a = d(e).closest(`.${s.slideClass}`)[0];
                    let i,
                        r = !1;
                    if (a)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === a) {
                                r = !0,
                                i = e;
                                break
                            }
                    if (!a || !r)
                        return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
                    t.clickedSlide = a,
                    t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
                    s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
                    const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
                    if (t.virtualTranslate)
                        return s ? -a : a;
                    if (t.cssMode)
                        return a;
                    let r = h(i[0], e);
                    return s && (r = -r), r || 0
                },
                setTranslate: function(e, t) {
                    const s = this,
                        {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
                    let o,
                        d = 0,
                        p = 0;
                    s.isHorizontal() ? d = a ? -e : e : p = e,
                    i.roundLengths && (d = Math.floor(d), p = Math.floor(p)),
                    i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -p : i.virtualTranslate || r.transform(`translate3d(${d}px, ${p}px, 0px)`),
                    s.previousTranslate = s.translate,
                    s.translate = s.isHorizontal() ? d : p;
                    const c = s.maxTranslate() - s.minTranslate();
                    o = 0 === c ? 0 : (e - s.minTranslate()) / c,
                    o !== l && s.updateProgress(e),
                    s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e=0, t=this.params.speed, s=!0, a=!0, i) {
                    const r = this,
                        {params: n, wrapperEl: l} = r;
                    if (r.animating && n.preventInteractionOnTransition)
                        return !1;
                    const o = r.minTranslate(),
                        d = r.maxTranslate();
                    let p;
                    if (p = a && e > o ? o : a && e < d ? d : e, r.updateProgress(p), n.cssMode) {
                        const e = r.isHorizontal();
                        if (0 === t)
                            l[e ? "scrollLeft" : "scrollTop"] = -p;
                        else {
                            if (!r.support.smoothScroll)
                                return v({
                                    swiper: r,
                                    targetPosition: -p,
                                    side: e ? "left" : "top"
                                }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -p,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(p), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e),
                    s.emit("setTransition", e, t)
                },
                transitionStart: function(e=!0, t) {
                    const s = this,
                        {params: a} = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), $({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e=!0, t) {
                    const s = this,
                        {params: a} = s;
                    s.animating = !1,
                    a.cssMode || (s.setTransition(0), $({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e=0, t=this.params.speed, s=!0, a, i) {
                    if ("number" != typeof e && "string" != typeof e)
                        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t))
                            throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let n = e;
                    n < 0 && (n = 0);
                    const {params: l, snapGrid: o, slidesGrid: d, previousIndex: p, activeIndex: c, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
                    if (r.animating && l.preventInteractionOnTransition || !m && !a && !i)
                        return !1;
                    const f = Math.min(r.params.slidesPerGroupSkip, n);
                    let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                    g >= o.length && (g = o.length - 1),
                    (c || l.initialSlide || 0) === (p || 0) && s && r.emit("beforeSlideChangeStart");
                    const w = -o[g];
                    if (r.updateProgress(w), l.normalizeSlideIndex)
                        for (let e = 0; e < d.length; e += 1) {
                            const t = -Math.floor(100 * w),
                                s = Math.floor(100 * d[e]),
                                a = Math.floor(100 * d[e + 1]);
                            void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                        }
                    if (r.initialized && n !== c) {
                        if (!r.allowSlideNext && w < r.translate && w < r.minTranslate())
                            return !1;
                        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (c || 0) !== n)
                            return !1
                    }
                    let b;
                    if (b = n > c ? "next" : n < c ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate)
                        return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
                    if (l.cssMode) {
                        const e = r.isHorizontal(),
                            s = u ? w : -w;
                        if (0 === t) {
                            const t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0),
                            h[e ? "scrollLeft" : "scrollTop"] = s,
                            t && requestAnimationFrame((() => {
                                r.wrapperEl.style.scrollSnapType = "",
                                r._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!r.support.smoothScroll)
                                return v({
                                    swiper: r,
                                    targetPosition: s,
                                    side: e ? "left" : "top"
                                }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e=0, t=this.params.speed, s=!0, a) {
                    const i = this;
                    let r = e;
                    return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
                },
                slideNext: function(e=this.params.speed, t=!0, s) {
                    const a = this,
                        {animating: i, enabled: r, params: n} = a;
                    if (!r)
                        return a;
                    let l = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                    const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                    if (n.loop) {
                        if (i && n.loopPreventsSlide)
                            return !1;
                        a.loopFix(),
                        a._clientLeft = a.$wrapperEl[0].clientLeft
                    }
                    return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
                },
                slidePrev: function(e=this.params.speed, t=!0, s) {
                    const a = this,
                        {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
                    if (!d)
                        return a;
                    if (i.loop) {
                        if (r && i.loopPreventsSlide)
                            return !1;
                        a.loopFix(),
                        a._clientLeft = a.$wrapperEl[0].clientLeft
                    }
                    function p(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const c = p(o ? a.translate : -a.translate),
                        u = n.map((e => p(e)));
                    let h = n[u.indexOf(c) - 1];
                    if (void 0 === h && i.cssMode) {
                        let e;
                        n.forEach(((t, s) => {
                            c >= t && (e = s)
                        })),
                        void 0 !== e && (h = n[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning ? a.slideTo(a.slides.length - 1, e, t, s) : a.slideTo(m, e, t, s)
                },
                slideReset: function(e=this.params.speed, t=!0, s) {
                    return this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function(e=this.params.speed, t=!0, s, a=.5) {
                    const i = this;
                    let r = i.activeIndex;
                    const n = Math.min(i.params.slidesPerGroupSkip, r),
                        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                        o = i.rtlTranslate ? i.translate : -i.translate;
                    if (o >= i.snapGrid[l]) {
                        const e = i.snapGrid[l];
                        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[l - 1];
                        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {params: t, $wrapperEl: s} = e,
                        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i,
                        r = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating)
                            return;
                        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                        t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), c((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), c((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r)
                    } else
                        e.slideTo(r)
                }
            },
            loop: {
                loopCreate: function() {
                    const e = this,
                        t = a(),
                        {params: s, $wrapperEl: i} = e,
                        r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
                    r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let n = r.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let a = 0; a < e; a += 1) {
                                const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                r.append(e)
                            }
                            n = r.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
                    e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
                    e.loopedSlides += s.loopAdditionalSlides,
                    e.loopedSlides > n.length && (e.loopedSlides = n.length);
                    const l = [],
                        o = [];
                    n.each(((t, s) => {
                        const a = d(t);
                        s < e.loopedSlides && o.push(t),
                        s < n.length && s >= n.length - e.loopedSlides && l.push(t),
                        a.attr("data-swiper-slide-index", s)
                    }));
                    for (let e = 0; e < o.length; e += 1)
                        r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let e = l.length - 1; e >= 0; e -= 1)
                        r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
                    let o;
                    e.allowSlidePrev = !0,
                    e.allowSlideNext = !0;
                    const d = -n[t] - e.getTranslate();
                    if (t < a) {
                        o = s.length - 3 * a + t,
                        o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - a) {
                        o = -s.length + t + a,
                        o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = i,
                    e.allowSlideNext = r,
                    e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {$wrapperEl: e, params: t, slides: s} = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                    s.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                        return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move",
                    s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    s.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function() {
                    const e = this,
                        t = a(),
                        {params: s, support: i} = e;
                    e.onTouchStart = S.bind(e),
                    e.onTouchMove = M.bind(e),
                    e.onTouchEnd = P.bind(e),
                    s.cssMode && (e.onScroll = O.bind(e)),
                    e.onClick = z.bind(e),
                    i.touch && !I && (t.addEventListener("touchstart", L), I = !0),
                    A(e, "on")
                },
                detachEvents: function() {
                    A(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {activeIndex: t, initialized: s, loopedSlides: a=0, params: i, $el: r} = e,
                        n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length)
                        return;
                    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l)
                        return;
                    const o = (l in n ? n[l] : void 0) || e.originalParams,
                        d = D(e, i),
                        p = D(e, o),
                        c = i.enabled;
                    d && !p ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && p && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                    const u = o.direction && o.direction !== i.direction,
                        h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(),
                    f(e.params, o);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    c && !m ? e.disable() : !c && m && e.enable(),
                    e.currentBreakpoint = l,
                    e.emit("_beforeBreakpoint", o),
                    h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", o)
                },
                getBreakpoint: function(e, t="window", s) {
                    if (!e || "container" === t && !s)
                        return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {point: r, value: n} = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {isLocked: t, params: s} = e,
                        {slidesOffsetBefore: a} = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else
                        e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                    !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                    t && t !== e.isLocked && (e.isEnd = !1),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this,
                        {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e,
                        l = function(e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((a => {
                                    e[a] && s.push(t + a)
                                })) : "string" == typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !n.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: a
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }], s.containerModifierClass);
                    t.push(...l),
                    i.addClass([...t].join(" ")),
                    e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {$el: e, classNames: t} = this;
                    e.removeClass(t.join(" ")),
                    this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, s, a, i, n) {
                    const l = r();
                    let o;
                    function p() {
                        n && n()
                    }
                    d(e).parent("picture")[0] || e.complete && i ? p() : t ? (o = new l.Image, o.onload = p, o.onerror = p, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : p()
                },
                preloadImages: function() {
                    const e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        X = {};
    class H {
        constructor(...e)
        {
            let t,
                s;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = f({}, s), t && !s.el && (s.el = t), s.el && d(s.el).length > 1) {
                const e = [];
                return d(s.el).each((t => {
                    const a = f({}, s, {
                        el: t
                    });
                    e.push(new H(a))
                })), e
            }
            const a = this;
            a.__swiper__ = !0,
            a.support = y(),
            a.device = E({
                userAgent: s.userAgent
            }),
            a.browser = T(),
            a.eventsListeners = {},
            a.eventsAnyListeners = [],
            a.modules = [...a.__modules__],
            s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
            const i = {};
            a.modules.forEach((e => {
                e({
                    swiper: a,
                    extendParams: N(s, i),
                    on: a.on.bind(a),
                    once: a.once.bind(a),
                    off: a.off.bind(a),
                    emit: a.emit.bind(a)
                })
            }));
            const r = f({}, G, i);
            return a.params = f({}, r, X, s), a.originalParams = f({}, a.params), a.passedParams = f({}, s), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                a.on(e, a.params.on[e])
            })), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = d, Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === a.params.direction,
                isVertical: () => "vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return a.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, a.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), a.emit("_swiper"), a.params.init && a.init(), a
        }
        enable()
        {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable()
        {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t)
        {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
        }
        emitContainerClasses()
        {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e)
        {
            const t = this;
            return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses()
        {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }),
                e.emit("_slideClass", s, a)
            })),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e="current", t=!1)
        {
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e,
                    t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1)
                    a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    i[l] - i[e] < n && (o += 1)
                }
            return o
        }
        update()
        {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0)
        {
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        mount(e)
        {
            const t = this;
            if (t.mounted)
                return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0]))
                return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e),
                e.className = t.params.wrapperClass,
                s.append(e),
                s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }
        init(e)
        {
            const t = this;
            if (t.initialized)
                return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e=!0, t=!0)
        {
            const s = this,
                {params: a, $el: i, $wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e)
        {
            f(X, e)
        }
        static get extendedDefaults()
        {
            return X
        }
        static get defaults()
        {
            return G
        }
        static installModule(e)
        {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t = H.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e)
        {
            return Array.isArray(e) ? (e.forEach((e => H.installModule(e))), H) : (H.installModule(e), H)
        }
    }
    function Y(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)),
                s[a] = n,
                t[a] = n
            }
        })), s
    }
    function W(e="") {
        return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function R(e) {
        const t = this,
            {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1)
                e[t] && s.append(e[t]);
        else
            s.append(e);
        a.loop && t.loopCreate(),
        a.observer || t.update()
    }
    function j(e) {
        const t = this,
            {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1)
                e[t] && a.prepend(e[t]);
            r = i + e.length
        } else
            a.prepend(e);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        t.slideTo(r, 0, !1)
    }
    function _(e, t) {
        const s = this,
            {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0)
            return void s.prependSlide(t);
        if (e >= l)
            return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(),
            d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1)
                t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else
            a.append(t);
        for (let e = 0; e < d.length; e += 1)
            a.append(d[e]);
        i.loop && s.loopCreate(),
        i.observer || s.update(),
        i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }
    function V(e) {
        const t = this,
            {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n,
            l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1)
                n = e[s],
                t.slides[n] && t.slides.eq(n).remove(),
                n < l && (l -= 1);
            l = Math.max(l, 0)
        } else
            n = e,
            t.slides[n] && t.slides.eq(n).remove(),
            n < l && (l -= 1),
            l = Math.max(l, 0);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }
    function q() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1)
            t.push(s);
        e.removeSlide(t)
    }
    function F(e) {
        const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l} = e;
        a("beforeInit", (() => {
            if (s.params.effect !== t)
                return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e)
        })),
        a("setTranslate", (() => {
            s.params.effect === t && i()
        })),
        a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        }))
    }
    function U(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }
    function K({swiper: e, duration: t, transformEl: s, allSlides: a}) {
        const {slides: i, activeIndex: r, $wrapperEl: n} = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t,
                l = !1;
            t = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r),
            t.transitionEnd((() => {
                if (l)
                    return;
                if (!e || e.destroyed)
                    return;
                l = !0,
                e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1)
                    n.trigger(t[e])
            }))
        }
    }
    function Z(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r
    }
    Object.keys(B).forEach((e => {
        Object.keys(B[e]).forEach((t => {
            H.prototype[t] = B[e][t]
        }))
    })),
    H.use([function({swiper: e, on: t, emit: s}) {
        const a = r();
        let i = null;
        const n = () => {
                e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
            },
            l = () => {
                e && !e.destroyed && e.initialized && s("orientationchange")
            };
        t("init", (() => {
            e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                const {width: s, height: a} = e;
                let i = s,
                    r = a;
                t.forEach((({contentBoxSize: t, contentRect: s, target: a}) => {
                    a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize)
                })),
                i === s && r === a || n()
            })), i.observe(e.el)) : (a.addEventListener("resize", n), a.addEventListener("orientationchange", l))
        })),
        t("destroy", (() => {
            i && i.unobserve && e.el && (i.unobserve(e.el), i = null),
            a.removeEventListener("resize", n),
            a.removeEventListener("orientationchange", l)
        }))
    }, function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = [],
            n = r(),
            l = (e, t={}) => {
                const s = new (n.MutationObserver || n.WebkitMutationObserver)((e => {
                    if (1 === e.length)
                        return void a("observerUpdate", e[0]);
                    const t = function() {
                        a("observerUpdate", e[0])
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                }));
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }),
                i.push(s)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        s("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1)
                        l(t[e])
                }
                l(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                l(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })),
        s("destroy", (() => {
            i.forEach((e => {
                e.disconnect()
            })),
            i.splice(0, i.length)
        }))
    }]);
    const J = [function({swiper: e, extendParams: t, on: s}) {
        let a;
        function i(t, s) {
            const a = e.params.virtual;
            if (a.cache && e.virtual.cache[s])
                return e.virtual.cache[s];
            const i = a.renderSlide ? d(a.renderSlide.call(e, t, s)) : d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s), a.cache && (e.virtual.cache[s] = i), i
        }
        function r(t) {
            const {slidesPerView: s, slidesPerGroup: a, centeredSlides: r} = e.params,
                {addSlidesBefore: n, addSlidesAfter: l} = e.params.virtual,
                {from: o, to: d, slides: p, slidesGrid: c, offset: u} = e.virtual;
            e.params.cssMode || e.updateActiveIndex();
            const h = e.activeIndex || 0;
            let m,
                f,
                g;
            m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
            r ? (f = Math.floor(s / 2) + a + l, g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l, g = a + n);
            const v = Math.max((h || 0) - g, 0),
                w = Math.min((h || 0) + f, p.length - 1),
                b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);
            function x() {
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load()
            }
            if (Object.assign(e.virtual, {
                from: v,
                to: w,
                offset: b,
                slidesGrid: e.slidesGrid
            }), o === v && d === w && !t)
                return e.slidesGrid !== c && b !== u && e.slides.css(m, `${b}px`), void e.updateProgress();
            if (e.params.virtual.renderExternal)
                return e.params.virtual.renderExternal.call(e, {
                    offset: b,
                    from: v,
                    to: w,
                    slides: function() {
                        const e = [];
                        for (let t = v; t <= w; t += 1)
                            e.push(p[t]);
                        return e
                    }()
                }), void (e.params.virtual.renderExternalUpdate && x());
            const y = [],
                E = [];
            if (t)
                e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
            else
                for (let t = o; t <= d; t += 1)
                    (t < v || t > w) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
            for (let e = 0; e < p.length; e += 1)
                e >= v && e <= w && (void 0 === d || t ? E.push(e) : (e > d && E.push(e), e < o && y.push(e)));
            E.forEach((t => {
                e.$wrapperEl.append(i(p[t], t))
            })),
            y.sort(((e, t) => t - e)).forEach((t => {
                e.$wrapperEl.prepend(i(p[t], t))
            })),
            e.$wrapperEl.children(".swiper-slide").css(m, `${b}px`),
            x()
        }
        t({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }),
        e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        },
        s("beforeInit", (() => {
            e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || r())
        })),
        s("setTranslate", (() => {
            e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a), a = setTimeout((() => {
                r()
            }), 100)) : r())
        })),
        s("init update resize", (() => {
            e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
        })),
        Object.assign(e.virtual, {
            appendSlide: function(t) {
                if ("object" == typeof t && "length" in t)
                    for (let s = 0; s < t.length; s += 1)
                        t[s] && e.virtual.slides.push(t[s]);
                else
                    e.virtual.slides.push(t);
                r(!0)
            },
            prependSlide: function(t) {
                const s = e.activeIndex;
                let a = s + 1,
                    i = 1;
                if (Array.isArray(t)) {
                    for (let s = 0; s < t.length; s += 1)
                        t[s] && e.virtual.slides.unshift(t[s]);
                    a = s + t.length,
                    i = t.length
                } else
                    e.virtual.slides.unshift(t);
                if (e.params.virtual.cache) {
                    const t = e.virtual.cache,
                        s = {};
                    Object.keys(t).forEach((e => {
                        const a = t[e],
                            r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                        s[parseInt(e, 10) + i] = a
                    })),
                    e.virtual.cache = s
                }
                r(!0),
                e.slideTo(a, 0)
            },
            removeSlide: function(t) {
                if (null == t)
                    return;
                let s = e.activeIndex;
                if (Array.isArray(t))
                    for (let a = t.length - 1; a >= 0; a -= 1)
                        e.virtual.slides.splice(t[a], 1),
                        e.params.virtual.cache && delete e.virtual.cache[t[a]],
                        t[a] < s && (s -= 1),
                        s = Math.max(s, 0);
                else
                    e.virtual.slides.splice(t, 1),
                    e.params.virtual.cache && delete e.virtual.cache[t],
                    t < s && (s -= 1),
                    s = Math.max(s, 0);
                r(!0),
                e.slideTo(s, 0)
            },
            removeAllSlides: function() {
                e.virtual.slides = [],
                e.params.virtual.cache && (e.virtual.cache = {}),
                r(!0),
                e.slideTo(0, 0)
            },
            update: r
        })
    }, function({swiper: e, extendParams: t, on: s, emit: i}) {
        const n = a(),
            l = r();
        function o(t) {
            if (!e.enabled)
                return;
            const {rtlTranslate: s} = e;
            let a = t;
            a.originalEvent && (a = a.originalEvent);
            const r = a.keyCode || a.charCode,
                o = e.params.keyboard.pageUpDown,
                d = o && 33 === r,
                p = o && 34 === r,
                c = 37 === r,
                u = 39 === r,
                h = 38 === r,
                m = 40 === r;
            if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || p))
                return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && c || e.isVertical() && h || d))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (d || p || c || u || h || m)) {
                    let t = !1;
                    if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length)
                        return;
                    const a = e.$el,
                        i = a[0].clientWidth,
                        r = a[0].clientHeight,
                        n = l.innerWidth,
                        o = l.innerHeight,
                        d = e.$el.offset();
                    s && (d.left -= e.$el[0].scrollLeft);
                    const p = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let e = 0; e < p.length; e += 1) {
                        const s = p[e];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                            if (0 === s[0] && 0 === s[1])
                                continue;
                            t = !0
                        }
                    }
                    if (!t)
                        return
                }
                e.isHorizontal() ? ((d || p || c || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((p || u) && !s || (d || c) && s) && e.slideNext(), ((d || c) && !s || (p || u) && s) && e.slidePrev()) : ((d || p || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (p || m) && e.slideNext(), (d || h) && e.slidePrev()),
                i("keyPress", r)
            }
        }
        function p() {
            e.keyboard.enabled || (d(n).on("keydown", o), e.keyboard.enabled = !0)
        }
        function c() {
            e.keyboard.enabled && (d(n).off("keydown", o), e.keyboard.enabled = !1)
        }
        e.keyboard = {
            enabled: !1
        },
        t({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        s("init", (() => {
            e.params.keyboard.enabled && p()
        })),
        s("destroy", (() => {
            e.keyboard.enabled && c()
        })),
        Object.assign(e.keyboard, {
            enable: p,
            disable: c
        })
    }, function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = r();
        let n;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }),
        e.mousewheel = {
            enabled: !1
        };
        let l,
            o = u();
        const p = [];
        function h() {
            e.enabled && (e.mouseEntered = !0)
        }
        function m() {
            e.enabled && (e.mouseEntered = !1)
        }
        function f(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && (!(e.params.mousewheel.thresholdTime && u() - o < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && u() - o < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), a("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), a("scroll", t.raw)), o = (new i.Date).getTime(), !1)))
        }
        function g(t) {
            let s = t,
                i = !0;
            if (!e.enabled)
                return;
            const r = e.params.mousewheel;
            e.params.cssMode && s.preventDefault();
            let o = e.$el;
            if ("container" !== e.params.mousewheel.eventsTarget && (o = d(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges)
                return !0;
            s.originalEvent && (s = s.originalEvent);
            let h = 0;
            const m = e.rtlTranslate ? -1 : 1,
                g = function(e) {
                    let t = 0,
                        s = 0,
                        a = 0,
                        i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    }
                }(s);
            if (r.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                        return !0;
                    h = -g.pixelX * m
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                        return !0;
                    h = -g.pixelY
                }
            else
                h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
            if (0 === h)
                return !0;
            r.invert && (h = -h);
            let v = e.getTranslate() + h * r.sensitivity;
            if (v >= e.minTranslate() && (v = e.minTranslate()), v <= e.maxTranslate() && (v = e.maxTranslate()), i = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()), i && e.params.nested && s.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                const t = {
                        time: u(),
                        delta: Math.abs(h),
                        direction: Math.sign(h)
                    },
                    i = l && t.time < l.time + 500 && t.delta <= l.delta && t.direction === l.direction;
                if (!i) {
                    l = void 0,
                    e.params.loop && e.loopFix();
                    let o = e.getTranslate() + h * r.sensitivity;
                    const d = e.isBeginning,
                        u = e.isEnd;
                    if (o >= e.minTranslate() && (o = e.minTranslate()), o <= e.maxTranslate() && (o = e.maxTranslate()), e.setTransition(0), e.setTranslate(o), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!d && e.isBeginning || !u && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                        clearTimeout(n),
                        n = void 0,
                        p.length >= 15 && p.shift();
                        const s = p.length ? p[p.length - 1] : void 0,
                            a = p[0];
                        if (p.push(t), s && (t.delta > s.delta || t.direction !== s.direction))
                            p.splice(0);
                        else if (p.length >= 15 && t.time - a.time < 500 && a.delta - t.delta >= 1 && t.delta <= 6) {
                            const s = h > 0 ? .8 : .2;
                            l = t,
                            p.splice(0),
                            n = c((() => {
                                e.slideToClosest(e.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        n || (n = c((() => {
                            l = t,
                            p.splice(0),
                            e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (i || a("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), o === e.minTranslate() || o === e.maxTranslate())
                        return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(h),
                    direction: Math.sign(h),
                    raw: t
                };
                p.length >= 2 && p.shift();
                const a = p.length ? p[p.length - 1] : void 0;
                if (p.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function(t) {
                    const s = e.params.mousewheel;
                    if (t.direction < 0) {
                        if (e.isEnd && !e.params.loop && s.releaseOnEdges)
                            return !0
                    } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges)
                        return !0;
                    return !1
                }(s))
                    return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }
        function v(t) {
            let s = e.$el;
            "container" !== e.params.mousewheel.eventsTarget && (s = d(e.params.mousewheel.eventsTarget)),
            s[t]("mouseenter", h),
            s[t]("mouseleave", m),
            s[t]("wheel", g)
        }
        function w() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : !e.mousewheel.enabled && (v("on"), e.mousewheel.enabled = !0, !0)
        }
        function b() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g), !0) : !!e.mousewheel.enabled && (v("off"), e.mousewheel.enabled = !1, !0)
        }
        s("init", (() => {
            !e.params.mousewheel.enabled && e.params.cssMode && b(),
            e.params.mousewheel.enabled && w()
        })),
        s("destroy", (() => {
            e.params.cssMode && w(),
            e.mousewheel.enabled && b()
        })),
        Object.assign(e.mousewheel, {
            enable: w,
            disable: b
        })
    }, function({swiper: e, extendParams: t, on: s, emit: a}) {
        function i(t) {
            let s;
            return t && (s = d(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s
        }
        function r(t, s) {
            const a = e.params.navigation;
            t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }
        function n() {
            if (e.params.loop)
                return;
            const {$nextEl: t, $prevEl: s} = e.navigation;
            r(s, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind)
        }
        function l(t) {
            t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev()
        }
        function o(t) {
            t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext()
        }
        function p() {
            const t = e.params.navigation;
            if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !t.nextEl && !t.prevEl)
                return;
            const s = i(t.nextEl),
                a = i(t.prevEl);
            s && s.length > 0 && s.on("click", o),
            a && a.length > 0 && a.on("click", l),
            Object.assign(e.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }),
            e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass))
        }
        function c() {
            const {$nextEl: t, $prevEl: s} = e.navigation;
            t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)),
            s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }),
        e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        },
        s("init", (() => {
            p(),
            n()
        })),
        s("toEdge fromEdge lock unlock", (() => {
            n()
        })),
        s("destroy", (() => {
            c()
        })),
        s("enable disable", (() => {
            const {$nextEl: t, $prevEl: s} = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
            s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        })),
        s("click", ((t, s) => {
            const {$nextEl: i, $prevEl: r} = e.navigation,
                n = s.target;
            if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n)))
                    return;
                let t;
                i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                a(!0 === t ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass)
            }
        })),
        Object.assign(e.navigation, {
            update: n,
            init: p,
            destroy: c
        })
    }, function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = "swiper-pagination";
        let r;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${i}-bullet`,
                bulletActiveClass: `${i}-bullet-active`,
                modifierClass: `${i}-`,
                currentClass: `${i}-current`,
                totalClass: `${i}-total`,
                hiddenClass: `${i}-hidden`,
                progressbarFillClass: `${i}-progressbar-fill`,
                progressbarOppositeClass: `${i}-progressbar-opposite`,
                clickableClass: `${i}-clickable`,
                lockClass: `${i}-lock`,
                horizontalClass: `${i}-horizontal`,
                verticalClass: `${i}-vertical`
            }
        }),
        e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let n = 0;
        function l() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }
        function o(t, s) {
            const {bulletActiveClass: a} = e.params.pagination;
            t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }
        function p() {
            const t = e.rtl,
                s = e.params.pagination;
            if (l())
                return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                p = e.pagination.$el;
            let c;
            const u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (c = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides), c > u - 1 && (c -= u), c < 0 && "bullets" !== e.params.paginationType && (c = u + c)) : c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const a = e.pagination.bullets;
                let i,
                    l,
                    u;
                if (s.dynamicBullets && (r = a.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), p.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += c - (e.previousIndex - e.loopedSlides || 0), n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), i = Math.max(c - n, 0), l = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (l + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), p.length > 1)
                    a.each((e => {
                        const t = d(e),
                            a = t.index();
                        a === c && t.addClass(s.bulletActiveClass),
                        s.dynamicBullets && (a >= i && a <= l && t.addClass(`${s.bulletActiveClass}-main`), a === i && o(t, "prev"), a === l && o(t, "next"))
                    }));
                else {
                    const t = a.eq(c),
                        r = t.index();
                    if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const t = a.eq(i),
                            n = a.eq(l);
                        for (let e = i; e <= l; e += 1)
                            a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else
                                o(t, "prev"),
                                o(n, "next");
                        else
                            o(t, "prev"),
                            o(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4),
                        n = (r * i - r) / 2 - u * r,
                        l = t ? "right" : "left";
                    a.css(e.isHorizontal() ? l : "top", `${n}px`)
                }
            }
            if ("fraction" === s.type && (p.find(W(s.currentClass)).text(s.formatFractionCurrent(c + 1)), p.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const a = (c + 1) / u;
                let i = 1,
                    r = 1;
                "horizontal" === t ? i = a : r = a,
                p.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (p.html(s.renderCustom(e, c + 1, u)), a("paginationRender", p[0])) : a("paginationUpdate", p[0]),
            e.params.watchOverflow && e.enabled && p[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }
        function c() {
            const t = e.params.pagination;
            if (l())
                return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                i = e.pagination.$el;
            let r = "";
            if ("bullets" === t.type) {
                let a = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && a > s && (a = s);
                for (let s = 0; s < a; s += 1)
                    t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                i.html(r),
                e.pagination.bullets = i.find(W(t.bulletClass))
            }
            "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)),
            "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)),
            "custom" !== t.type && a("paginationRender", e.pagination.$el[0])
        }
        function u() {
            e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el)
                return;
            let s = d(t.el);
            0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter((t => d(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", W(t.bulletClass), (function(t) {
                t.preventDefault();
                let s = d(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides),
                e.slideTo(s)
            })), Object.assign(e.pagination, {
                $el: s,
                el: s[0]
            }), e.enabled || s.addClass(t.lockClass))
        }
        function h() {
            const t = e.params.pagination;
            if (l())
                return;
            const s = e.pagination.$el;
            s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", W(t.bulletClass))
        }
        s("init", (() => {
            u(),
            c(),
            p()
        })),
        s("activeIndexChange", (() => {
            (e.params.loop || void 0 === e.snapIndex) && p()
        })),
        s("snapIndexChange", (() => {
            e.params.loop || p()
        })),
        s("slidesLengthChange", (() => {
            e.params.loop && (c(), p())
        })),
        s("snapGridLengthChange", (() => {
            e.params.loop || (c(), p())
        })),
        s("destroy", (() => {
            h()
        })),
        s("enable disable", (() => {
            const {$el: t} = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        })),
        s("lock unlock", (() => {
            p()
        })),
        s("click", ((t, s) => {
            const i = s.target,
                {$el: r} = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl))
                    return;
                const t = r.hasClass(e.params.pagination.hiddenClass);
                a(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass)
            }
        })),
        Object.assign(e.pagination, {
            render: c,
            update: p,
            init: u,
            destroy: h
        })
    }, function({swiper: e, extendParams: t, on: s, emit: i}) {
        const r = a();
        let n,
            l,
            o,
            p,
            u = !1,
            h = null,
            m = null;
        function f() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t, rtlTranslate: s, progress: a} = e,
                {$dragEl: i, $el: r} = t,
                n = e.params.scrollbar;
            let d = l,
                p = (o - l) * a;
            s ? (p = -p, p > 0 ? (d = l - p, p = 0) : -p + l > o && (d = o + p)) : p < 0 ? (d = l + p, p = 0) : p + l > o && (d = o - p),
            e.isHorizontal() ? (i.transform(`translate3d(${p}px, 0, 0)`), i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${p}px, 0)`), i[0].style.height = `${d}px`),
            n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout((() => {
                r[0].style.opacity = 0,
                r.transition(400)
            }), 1e3))
        }
        function g() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t} = e,
                {$dragEl: s, $el: a} = t;
            s[0].style.width = "",
            s[0].style.height = "",
            o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
            p = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
            l = "auto" === e.params.scrollbar.dragSize ? o * p : parseInt(e.params.scrollbar.dragSize, 10),
            e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`,
            a[0].style.display = p >= 1 ? "none" : "",
            e.params.scrollbar.hide && (a[0].style.opacity = 0),
            e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }
        function v(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }
        function w(t) {
            const {scrollbar: s, rtlTranslate: a} = e,
                {$el: i} = s;
            let r;
            r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l),
            r = Math.max(Math.min(r, 1), 0),
            a && (r = 1 - r);
            const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
            e.updateProgress(d),
            e.setTranslate(d),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        function b(t) {
            const s = e.params.scrollbar,
                {scrollbar: a, $wrapperEl: r} = e,
                {$el: l, $dragEl: o} = a;
            u = !0,
            n = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
            t.preventDefault(),
            t.stopPropagation(),
            r.transition(100),
            o.transition(100),
            w(t),
            clearTimeout(m),
            l.transition(0),
            s.hide && l.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            i("scrollbarDragStart", t)
        }
        function x(t) {
            const {scrollbar: s, $wrapperEl: a} = e,
                {$el: r, $dragEl: n} = s;
            u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, w(t), a.transition(0), r.transition(0), n.transition(0), i("scrollbarDragMove", t))
        }
        function y(t) {
            const s = e.params.scrollbar,
                {scrollbar: a, $wrapperEl: r} = e,
                {$el: n} = a;
            u && (u = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(m), m = c((() => {
                n.css("opacity", 0),
                n.transition(400)
            }), 1e3)), i("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest())
        }
        function E(t) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: n, support: l} = e,
                o = s.$el[0],
                d = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !1,
                    capture: !1
                },
                p = !(!l.passiveListener || !n.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
            if (!o)
                return;
            const c = "on" === t ? "addEventListener" : "removeEventListener";
            l.touch ? (o[c](a.start, b, d), o[c](a.move, x, d), o[c](a.end, y, p)) : (o[c](i.start, b, d), r[c](i.move, x, d), r[c](i.end, y, p))
        }
        function T() {
            const {scrollbar: t, $el: s} = e;
            e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = e.params.scrollbar;
            if (!a.el)
                return;
            let i = d(a.el);
            e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
            let r = i.find(`.${e.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${e.params.scrollbar.dragClass}"></div>`), i.append(r)),
            Object.assign(t, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }),
            a.draggable && e.params.scrollbar.el && E("on"),
            i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }
        function C() {
            e.params.scrollbar.el && E("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }),
        e.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        },
        s("init", (() => {
            T(),
            g(),
            f()
        })),
        s("update resize observerUpdate lock unlock", (() => {
            g()
        })),
        s("setTranslate", (() => {
            f()
        })),
        s("setTransition", ((t, s) => {
            !function(t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(s)
        })),
        s("enable disable", (() => {
            const {$el: t} = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        })),
        s("destroy", (() => {
            C()
        })),
        Object.assign(e.scrollbar, {
            updateSize: g,
            setTranslate: f,
            init: T,
            destroy: C
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            parallax: {
                enabled: !1
            }
        });
        const a = (t, s) => {
                const {rtl: a} = e,
                    i = d(t),
                    r = a ? -1 : 1,
                    n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y");
                const p = i.attr("data-swiper-parallax-scale"),
                    c = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : e.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != c) {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e
                }
                if (null == p)
                    i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                }
            },
            i = () => {
                const {$el: t, slides: s, progress: i, snapGrid: r} = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    a(e, i)
                })),
                s.each(((t, s) => {
                    let n = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)),
                    n = Math.min(Math.max(n, -1), 1),
                    d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        a(e, n)
                    }))
                }))
            };
        s("beforeInit", (() => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        })),
        s("init", (() => {
            e.params.parallax.enabled && i()
        })),
        s("setTranslate", (() => {
            e.params.parallax.enabled && i()
        })),
        s("setTransition", ((t, s) => {
            e.params.parallax.enabled && ((t=e.params.speed) => {
                const {$el: s} = e;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    const s = d(e);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (a = 0),
                    s.transition(a)
                }))
            })(s)
        }))
    }, function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = r();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        e.zoom = {
            enabled: !1
        };
        let n,
            l,
            o,
            p = 1,
            c = !1;
        const u = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            f = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let g = 1;
        function v(e) {
            if (e.targetTouches.length < 2)
                return 1;
            const t = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY,
                a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }
        function w(t) {
            const s = e.support,
                a = e.params.zoom;
            if (l = !1, o = !1, !s.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                    return;
                l = !0,
                u.scaleStart = v(t)
            }
            u.$slideEl && u.$slideEl.length || (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`), 0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), c = !0) : u.$imageEl = void 0
        }
        function b(t) {
            const s = e.support,
                a = e.params.zoom,
                i = e.zoom;
            if (!s.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2)
                    return;
                o = !0,
                u.scaleMove = v(t)
            }
            u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * p : i.scale = u.scaleMove / u.scaleStart * p, i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === t.type && w(t)
        }
        function x(t) {
            const s = e.device,
                a = e.support,
                i = e.params.zoom,
                r = e.zoom;
            if (!a.gestures) {
                if (!l || !o)
                    return;
                if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android)
                    return;
                l = !1,
                o = !1
            }
            u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio), u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, c = !1, 1 === r.scale && (u.$slideEl = void 0))
        }
        function y(t) {
            const s = e.zoom;
            if (!u.$imageEl || 0 === u.$imageEl.length)
                return;
            if (e.allowClick = !1, !m.isTouched || !u.$slideEl)
                return;
            m.isMoved || (m.width = u.$imageEl[0].offsetWidth, m.height = u.$imageEl[0].offsetHeight, m.startX = h(u.$imageWrapEl[0], "x") || 0, m.startY = h(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
            const a = m.width * s.scale,
                i = m.height * s.scale;
            if (!(a < u.slideWidth && i < u.slideHeight)) {
                if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !c) {
                    if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x))
                        return void (m.isTouched = !1);
                    if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y))
                        return void (m.isTouched = !1)
                }
                t.cancelable && t.preventDefault(),
                t.stopPropagation(),
                m.isMoved = !0,
                m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX,
                m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY,
                m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8),
                m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8),
                m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8),
                m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8),
                f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x),
                f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y),
                f.prevTime || (f.prevTime = Date.now()),
                f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2,
                f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2,
                Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0),
                Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0),
                f.prevPositionX = m.touchesCurrent.x,
                f.prevPositionY = m.touchesCurrent.y,
                f.prevTime = Date.now(),
                u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }
        }
        function E() {
            const t = e.zoom;
            u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, p = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0)
        }
        function T(t) {
            const s = e.zoom,
                a = e.params.zoom;
            if (u.$slideEl || (t && t.target && (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)), u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length)
                return;
            let r,
                n,
                l,
                o,
                c,
                h,
                f,
                g,
                v,
                w,
                b,
                x,
                y,
                E,
                T,
                C,
                $,
                S;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"),
            u.$slideEl.addClass(`${a.zoomedSlideClass}`),
            void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y),
            s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            p = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            t ? ($ = u.$slideEl[0].offsetWidth, S = u.$slideEl[0].offsetHeight, l = u.$slideEl.offset().left + i.scrollX, o = u.$slideEl.offset().top + i.scrollY, c = l + $ / 2 - r, h = o + S / 2 - n, v = u.$imageEl[0].offsetWidth, w = u.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, f = c * s.scale, g = h * s.scale, f < y && (f = y), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0),
            u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`),
            u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }
        function C() {
            const t = e.zoom,
                s = e.params.zoom;
            u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex), u.$imageEl = u.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`)),
            u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, p = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass(`${s.zoomedSlideClass}`), u.$slideEl = void 0)
        }
        function $(t) {
            const s = e.zoom;
            s.scale && 1 !== s.scale ? C() : T(t)
        }
        function S() {
            const t = e.support;
            return {
                passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function M() {
            return `.${e.params.slideClass}`
        }
        function P(t) {
            const {passiveListener: s} = S(),
                a = M();
            e.$wrapperEl[t]("gesturestart", a, w, s),
            e.$wrapperEl[t]("gesturechange", a, b, s),
            e.$wrapperEl[t]("gestureend", a, x, s)
        }
        function k() {
            n || (n = !0, P("on"))
        }
        function z() {
            n && (n = !1, P("off"))
        }
        function O() {
            const t = e.zoom;
            if (t.enabled)
                return;
            t.enabled = !0;
            const s = e.support,
                {passiveListener: a, activeListenerWithCapture: i} = S(),
                r = M();
            s.gestures ? (e.$wrapperEl.on(e.touchEvents.start, k, a), e.$wrapperEl.on(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, w, a), e.$wrapperEl.on(e.touchEvents.move, r, b, i), e.$wrapperEl.on(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, x, a)),
            e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
        }
        function I() {
            const t = e.zoom;
            if (!t.enabled)
                return;
            const s = e.support;
            t.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = S(),
                r = M();
            s.gestures ? (e.$wrapperEl.off(e.touchEvents.start, k, a), e.$wrapperEl.off(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, w, a), e.$wrapperEl.off(e.touchEvents.move, r, b, i), e.$wrapperEl.off(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, x, a)),
            e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
        }
        Object.defineProperty(e.zoom, "scale", {
            get: () => g,
            set(e) {
                if (g !== e) {
                    const t = u.$imageEl ? u.$imageEl[0] : void 0,
                        s = u.$slideEl ? u.$slideEl[0] : void 0;
                    a("zoomChange", e, t, s)
                }
                g = e
            }
        }),
        s("init", (() => {
            e.params.zoom.enabled && O()
        })),
        s("destroy", (() => {
            I()
        })),
        s("touchStart", ((t, s) => {
            e.zoom.enabled && function(t) {
                const s = e.device;
                u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }(s)
        })),
        s("touchEnd", ((t, s) => {
            e.zoom.enabled && function() {
                const t = e.zoom;
                if (!u.$imageEl || 0 === u.$imageEl.length)
                    return;
                if (!m.isTouched || !m.isMoved)
                    return m.isTouched = !1, void (m.isMoved = !1);
                m.isTouched = !1,
                m.isMoved = !1;
                let s = 300,
                    a = 300;
                const i = f.x * s,
                    r = m.currentX + i,
                    n = f.y * a,
                    l = m.currentY + n;
                0 !== f.x && (s = Math.abs((r - m.currentX) / f.x)),
                0 !== f.y && (a = Math.abs((l - m.currentY) / f.y));
                const o = Math.max(s, a);
                m.currentX = r,
                m.currentY = l;
                const d = m.width * t.scale,
                    p = m.height * t.scale;
                m.minX = Math.min(u.slideWidth / 2 - d / 2, 0),
                m.maxX = -m.minX,
                m.minY = Math.min(u.slideHeight / 2 - p / 2, 0),
                m.maxY = -m.minY,
                m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX),
                m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY),
                u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }()
        })),
        s("doubleTap", ((t, s) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && $(s)
        })),
        s("transitionEnd", (() => {
            e.zoom.enabled && e.params.zoom.enabled && E()
        })),
        s("slideChange", (() => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E()
        })),
        Object.assign(e.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: C,
            toggle: $
        })
    }, function({swiper: e, extendParams: t, on: s, emit: a}) {
        t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }),
        e.lazy = {};
        let i = !1,
            n = !1;
        function l(t, s=!0) {
            const i = e.params.lazy;
            if (void 0 === t)
                return;
            if (0 === e.slides.length)
                return;
            const r = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
                n = r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
            !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n.push(r[0]),
            0 !== n.length && n.each((t => {
                const n = d(t);
                n.addClass(i.loadingClass);
                const o = n.attr("data-background"),
                    p = n.attr("data-src"),
                    c = n.attr("data-srcset"),
                    u = n.attr("data-sizes"),
                    h = n.parent("picture");
                e.loadImage(n[0], p || o, c, u, !1, (() => {
                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                        if (o ? (n.css("background-image", `url('js/blocks/${o}')`), n.removeAttr("data-background")) : (c && (n.attr("srcset", c), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                        })), p && (n.attr("src", p), n.removeAttr("data-src"))), n.addClass(i.loadedClass).removeClass(i.loadingClass), r.find(`.${i.preloaderClass}`).remove(), e.params.loop && s) {
                            const t = r.attr("data-swiper-slide-index");
                            if (r.hasClass(e.params.slideDuplicateClass)) {
                                l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                            }
                        }
                        a("lazyImageReady", r[0], n[0]),
                        e.params.autoHeight && e.updateAutoHeight()
                    }
                })),
                a("lazyImageLoad", r[0], n[0])
            }))
        }
        function o() {
            const {$wrapperEl: t, params: s, slides: a, activeIndex: i} = e,
                r = e.virtual && s.virtual.enabled,
                o = s.lazy;
            let p = s.slidesPerView;
            function c(e) {
                if (r) {
                    if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)
                        return !0
                } else if (a[e])
                    return !0;
                return !1
            }
            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === p && (p = 0), n || (n = !0), e.params.watchSlidesProgress)
                t.children(`.${s.slideVisibleClass}`).each((e => {
                    l(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
                }));
            else if (p > 1)
                for (let e = i; e < i + p; e += 1)
                    c(e) && l(e);
            else
                l(i);
            if (o.loadPrevNext)
                if (p > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    const e = o.loadPrevNextAmount,
                        t = p,
                        s = Math.min(i + t + Math.max(e, t), a.length),
                        r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + p; e < s; e += 1)
                        c(e) && l(e);
                    for (let e = r; e < i; e += 1)
                        c(e) && l(e)
                } else {
                    const e = t.children(`.${s.slideNextClass}`);
                    e.length > 0 && l(u(e));
                    const a = t.children(`.${s.slidePrevClass}`);
                    a.length > 0 && l(u(a))
                }
        }
        function p() {
            const t = r();
            if (!e || e.destroyed)
                return;
            const s = e.params.lazy.scrollingElement ? d(e.params.lazy.scrollingElement) : d(t),
                a = s[0] === t,
                n = a ? t.innerWidth : s[0].offsetWidth,
                l = a ? t.innerHeight : s[0].offsetHeight,
                c = e.$el.offset(),
                {rtlTranslate: u} = e;
            let h = !1;
            u && (c.left -= e.$el[0].scrollLeft);
            const m = [[c.left, c.top], [c.left + e.width, c.top], [c.left, c.top + e.height], [c.left + e.width, c.top + e.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1])
                        continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (o(), s.off("scroll", p, f)) : i || (i = !0, s.on("scroll", p, f))
        }
        s("beforeInit", (() => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        })),
        s("init", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o())
        })),
        s("scroll", (() => {
            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o()
        })),
        s("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? p() : o())
        })),
        s("transitionStart", (() => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? p() : o())
        })),
        s("transitionEnd", (() => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? p() : o())
        })),
        s("slideChange", (() => {
            const {lazy: t, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = e.params;
            t.enabled && (s || a && (i || 0 === r)) && o()
        })),
        Object.assign(e.lazy, {
            load: o,
            loadInSlide: l
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        function a(e, t) {
            const s = function() {
                let e,
                    t,
                    s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;)
                        s = e + t >> 1,
                        a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a,
                i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }
        function i() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        e.controller = {
            control: void 0
        },
        s("beforeInit", (() => {
            e.controller.control = e.params.controller.control
        })),
        s("update", (() => {
            i()
        })),
        s("resize", (() => {
            i()
        })),
        s("observerUpdate", (() => {
            i()
        })),
        s("setTranslate", ((t, s, a) => {
            e.controller.control && e.controller.setTranslate(s, a)
        })),
        s("setTransition", ((t, s, a) => {
            e.controller.control && e.controller.setTransition(s, a)
        })),
        Object.assign(e.controller, {
            setTranslate: function(t, s) {
                const i = e.controller.control;
                let r,
                    n;
                const l = e.constructor;
                function o(t) {
                    const s = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (!function(t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new a(e.slidesGrid, t.slidesGrid) : new a(e.snapGrid, t.snapGrid))
                    }(t), n = -e.controller.spline.interpolate(-s)),
                    n && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), n = (s - e.minTranslate()) * r + t.minTranslate()),
                    e.params.controller.inverse && (n = t.maxTranslate() - n),
                    t.updateProgress(n),
                    t.setTranslate(n, e),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                if (Array.isArray(i))
                    for (let e = 0; e < i.length; e += 1)
                        i[e] !== s && i[e] instanceof l && o(i[e]);
                else
                    i instanceof l && s !== i && o(i)
            },
            setTransition: function(t, s) {
                const a = e.constructor,
                    i = e.controller.control;
                let r;
                function n(s) {
                    s.setTransition(t, e),
                    0 !== t && (s.transitionStart(), s.params.autoHeight && c((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1)
                        i[r] !== s && i[r] instanceof a && n(i[r]);
                else
                    i instanceof a && s !== i && n(i)
            }
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let a = null;
        function i(e) {
            const t = a;
            0 !== t.length && (t.html(""), t.html(e))
        }
        function r(e) {
            e.attr("tabIndex", "0")
        }
        function n(e) {
            e.attr("tabIndex", "-1")
        }
        function l(e, t) {
            e.attr("role", t)
        }
        function o(e, t) {
            e.attr("aria-roledescription", t)
        }
        function p(e, t) {
            e.attr("aria-label", t)
        }
        function c(e) {
            e.attr("aria-disabled", !0)
        }
        function u(e) {
            e.attr("aria-disabled", !1)
        }
        function h(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode)
                return;
            const s = e.params.a11y,
                a = d(t.target);
            e.navigation && e.navigation.$nextEl && a.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)),
            e.navigation && e.navigation.$prevEl && a.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)),
            e.pagination && a.is(W(e.params.pagination.bulletClass)) && a[0].click()
        }
        function m() {
            if (e.params.loop || e.params.rewind || !e.navigation)
                return;
            const {$nextEl: t, $prevEl: s} = e.navigation;
            s && s.length > 0 && (e.isBeginning ? (c(s), n(s)) : (u(s), r(s))),
            t && t.length > 0 && (e.isEnd ? (c(t), n(t)) : (u(t), r(t)))
        }
        function f() {
            return e.pagination && e.pagination.bullets && e.pagination.bullets.length
        }
        function g() {
            return f() && e.params.pagination.clickable
        }
        const v = (e, t, s) => {
            r(e),
            "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)),
            p(e, s),
            function(e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        };
        function w() {
            const t = e.params.a11y;
            e.$el.append(a);
            const s = e.$el;
            t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage),
            t.containerMessage && p(s, t.containerMessage);
            const i = e.$wrapperEl,
                r = i.attr("id") || `swiper-wrapper-${function(e=16) {return "x".repeat(e).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}(16)}`,
                n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
            var c;
            c = r,
            i.attr("id", c),
            function(e, t) {
                e.attr("aria-live", t)
            }(i, n),
            t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage),
            l(d(e.slides), t.slideRole);
            const u = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
            let m,
                f;
            e.slides.each(((s, a) => {
                const i = d(s),
                    r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                p(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u))
            })),
            e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (f = e.navigation.$prevEl),
            m && m.length && v(m, r, t.nextSlideMessage),
            f && f.length && v(f, r, t.prevSlideMessage),
            g() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h)
        }
        s("beforeInit", (() => {
            a = d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })),
        s("afterInit", (() => {
            e.params.a11y.enabled && (w(), m())
        })),
        s("toEdge", (() => {
            e.params.a11y.enabled && m()
        })),
        s("fromEdge", (() => {
            e.params.a11y.enabled && m()
        })),
        s("paginationUpdate", (() => {
            e.params.a11y.enabled && function() {
                const t = e.params.a11y;
                f() && e.pagination.bullets.each((s => {
                    const a = d(s);
                    e.params.pagination.clickable && (r(a), e.params.pagination.renderBullet || (l(a, "button"), p(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                    a.is(`.${e.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })),
        s("destroy", (() => {
            e.params.a11y.enabled && function() {
                let t,
                    s;
                a && a.length > 0 && a.remove(),
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
                t && t.off("keydown", h),
                s && s.off("keydown", h),
                g() && e.pagination.$el.off("keydown", W(e.params.pagination.bulletClass), h)
            }()
        }))
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let a = !1,
            i = {};
        const n = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            o = (t, s) => {
                const i = r();
                if (!a || !e.params.history.enabled)
                    return;
                let l;
                l = e.params.url ? new URL(e.params.url) : i.location;
                const o = e.slides.eq(s);
                let d = n(o.attr("data-history"));
                if (e.params.history.root.length > 0) {
                    let s = e.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                    d = `${s}/${t}/${d}`
                } else
                    l.pathname.includes(t) || (d = `${t}/${d}`);
                const p = i.history.state;
                p && p.value === d || (e.params.history.replaceState ? i.history.replaceState({
                    value: d
                }, null, d) : i.history.pushState({
                    value: d
                }, null, d))
            },
            d = (t, s, a) => {
                if (s)
                    for (let i = 0, r = e.slides.length; i < r; i += 1) {
                        const r = e.slides.eq(i);
                        if (n(r.attr("data-history")) === s && !r.hasClass(e.params.slideDuplicateClass)) {
                            const s = r.index();
                            e.slideTo(s, t, a)
                        }
                    }
                else
                    e.slideTo(0, t, a)
            },
            p = () => {
                i = l(e.params.url),
                d(e.params.speed, e.paths.value, !1)
            };
        s("init", (() => {
            e.params.history.enabled && (() => {
                const t = r();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState)
                        return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                    a = !0,
                    i = l(e.params.url),
                    (i.key || i.value) && (d(0, i.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", p))
                }
            })()
        })),
        s("destroy", (() => {
            e.params.history.enabled && (() => {
                const t = r();
                e.params.history.replaceState || t.removeEventListener("popstate", p)
            })()
        })),
        s("transitionEnd _freeModeNoMomentumRelease", (() => {
            a && o(e.params.history.key, e.activeIndex)
        })),
        s("slideChange", (() => {
            a && e.params.cssMode && o(e.params.history.key, e.activeIndex)
        }))
    }, function({swiper: e, extendParams: t, emit: s, on: i}) {
        let n = !1;
        const l = a(),
            o = r();
        t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const p = () => {
                s("hashChange");
                const t = l.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === s)
                        return;
                    e.slideTo(s)
                }
            },
            c = () => {
                if (n && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState)
                        o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""),
                        s("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        l.location.hash = a || "",
                        s("hashSet")
                    }
            };
        i("init", (() => {
            e.params.hashNavigation.enabled && (() => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                    return;
                n = !0;
                const t = l.location.hash.replace("#", "");
                if (t) {
                    const s = 0;
                    for (let a = 0, i = e.slides.length; a < i; a += 1) {
                        const i = e.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(e.params.slideDuplicateClass)) {
                            const t = i.index();
                            e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && d(o).on("hashchange", p)
            })()
        })),
        i("destroy", (() => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", p)
        })),
        i("transitionEnd _freeModeNoMomentumRelease", (() => {
            n && c()
        })),
        i("slideChange", (() => {
            n && e.params.cssMode && c()
        }))
    }, function({swiper: e, extendParams: t, on: s, emit: i}) {
        let r;
        function n() {
            const t = e.slides.eq(e.activeIndex);
            let s = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(r),
            r = c((() => {
                let t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")),
                (e.params.cssMode && e.autoplay.running || !1 === t) && n()
            }), s)
        }
        function l() {
            return void 0 === r && (!e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), n(), !0))
        }
        function o() {
            return !!e.autoplay.running && (void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0))
        }
        function d(t) {
            e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].addEventListener(t, u)
            })) : (e.autoplay.paused = !1, n())))
        }
        function p() {
            const t = a();
            "hidden" === t.visibilityState && e.autoplay.running && d(),
            "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1)
        }
        function u(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            })), e.autoplay.paused = !1, e.autoplay.running ? n() : o())
        }
        function h() {
            e.params.autoplay.disableOnInteraction ? o() : d(),
            ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            }))
        }
        function m() {
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, n())
        }
        e.autoplay = {
            running: !1,
            paused: !1
        },
        t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }),
        s("init", (() => {
            if (e.params.autoplay.enabled) {
                l();
                a().addEventListener("visibilitychange", p),
                e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m))
            }
        })),
        s("beforeTransitionStart", ((t, s, a) => {
            e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
        })),
        s("sliderFirstMove", (() => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
        })),
        s("touchEnd", (() => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n()
        })),
        s("destroy", (() => {
            e.$el.off("mouseenter", h),
            e.$el.off("mouseleave", m),
            e.autoplay.running && o();
            a().removeEventListener("visibilitychange", p)
        })),
        Object.assign(e.autoplay, {
            pause: d,
            run: n,
            start: l,
            stop: o
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let a = !1,
            i = !1;
        function r() {
            const t = e.thumbs.swiper;
            if (!t)
                return;
            const s = t.clickedIndex,
                a = t.clickedSlide;
            if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass))
                return;
            if (null == s)
                return;
            let i;
            if (i = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s
            }
            e.slideTo(i)
        }
        function n() {
            const {thumbs: t} = e.params;
            if (a)
                return !1;
            a = !0;
            const s = e.constructor;
            if (t.swiper instanceof s)
                e.thumbs.swiper = t.swiper,
                Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
            else if (m(t.swiper)) {
                const a = Object.assign({}, t.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                e.thumbs.swiper = new s(a),
                i = !0
            }
            return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", r), !0
        }
        function l(t) {
            const s = e.thumbs.swiper;
            if (!s)
                return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
                i = e.params.thumbs.autoScrollOffset,
                r = i && !s.params.loop;
            if (e.realIndex !== s.realIndex || r) {
                let n,
                    l,
                    o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const t = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                    n = void 0 === t ? a : void 0 === a ? t : a - o == o - t ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - t ? a : t,
                    l = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else
                    n = e.realIndex,
                    l = n > e.previousIndex ? "next" : "prev";
                r && (n += "next" === l ? i : -1 * i),
                s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup, s.slideTo(n, t ? 0 : void 0))
            }
            let n = 1;
            const l = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let t = 0; t < n; t += 1)
                    s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t}"]`).addClass(l);
            else
                for (let t = 0; t < n; t += 1)
                    s.slides.eq(e.realIndex + t).addClass(l)
        }
        e.thumbs = {
            swiper: null
        },
        s("beforeInit", (() => {
            const {thumbs: t} = e.params;
            t && t.swiper && (n(), l(!0))
        })),
        s("slideChange update resize observerUpdate", (() => {
            e.thumbs.swiper && l()
        })),
        s("setTransition", ((t, s) => {
            const a = e.thumbs.swiper;
            a && a.setTransition(s)
        })),
        s("beforeDestroy", (() => {
            const t = e.thumbs.swiper;
            t && i && t && t.destroy()
        })),
        Object.assign(e.thumbs, {
            init: n,
            update: l
        })
    }, function({swiper: e, extendParams: t, emit: s, once: a}) {
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(e, {
            freeMode: {
                onTouchMove: function() {
                    const {touchEventsData: t, touches: s} = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: s[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }),
                    t.velocities.push({
                        position: s[e.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function({currentPos: t}) {
                    const {params: i, $wrapperEl: r, rtlTranslate: n, snapGrid: l, touchEventsData: o} = e,
                        d = u() - o.touchStartTime;
                    if (t < -e.minTranslate())
                        e.slideTo(e.activeIndex);
                    else if (t > -e.maxTranslate())
                        e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                    else {
                        if (i.freeMode.momentum) {
                            if (o.velocities.length > 1) {
                                const t = o.velocities.pop(),
                                    s = o.velocities.pop(),
                                    a = t.position - s.position,
                                    r = t.time - s.time;
                                e.velocity = a / r,
                                e.velocity /= 2,
                                Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0),
                                (r > 150 || u() - t.time > 300) && (e.velocity = 0)
                            } else
                                e.velocity = 0;
                            e.velocity *= i.freeMode.momentumVelocityRatio,
                            o.velocities.length = 0;
                            let t = 1e3 * i.freeMode.momentumRatio;
                            const d = e.velocity * t;
                            let p = e.translate + d;
                            n && (p = -p);
                            let c,
                                h = !1;
                            const m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
                            let f;
                            if (p < e.maxTranslate())
                                i.freeMode.momentumBounce ? (p + e.maxTranslate() < -m && (p = e.maxTranslate() - m), c = e.maxTranslate(), h = !0, o.allowMomentumBounce = !0) : p = e.maxTranslate(),
                                i.loop && i.centeredSlides && (f = !0);
                            else if (p > e.minTranslate())
                                i.freeMode.momentumBounce ? (p - e.minTranslate() > m && (p = e.minTranslate() + m), c = e.minTranslate(), h = !0, o.allowMomentumBounce = !0) : p = e.minTranslate(),
                                i.loop && i.centeredSlides && (f = !0);
                            else if (i.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < l.length; e += 1)
                                    if (l[e] > -p) {
                                        t = e;
                                        break
                                    }
                                p = Math.abs(l[t] - p) < Math.abs(l[t - 1] - p) || "next" === e.swipeDirection ? l[t] : l[t - 1],
                                p = -p
                            }
                            if (f && a("transitionEnd", (() => {
                                e.loopFix()
                            })), 0 !== e.velocity) {
                                if (t = n ? Math.abs((-p - e.translate) / e.velocity) : Math.abs((p - e.translate) / e.velocity), i.freeMode.sticky) {
                                    const s = Math.abs((n ? -p : p) - e.translate),
                                        a = e.slidesSizesGrid[e.activeIndex];
                                    t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed
                                }
                            } else if (i.freeMode.sticky)
                                return void e.slideToClosest();
                            i.freeMode.momentumBounce && h ? (e.updateProgress(c), e.setTransition(t), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd((() => {
                                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"), e.setTransition(i.speed), setTimeout((() => {
                                    e.setTranslate(c),
                                    r.transitionEnd((() => {
                                        e && !e.destroyed && e.transitionEnd()
                                    }))
                                }), 0))
                            }))) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(p), e.setTransition(t), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd((() => {
                                e && !e.destroyed && e.transitionEnd()
                            })))) : e.updateProgress(p),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses()
                        } else {
                            if (i.freeMode.sticky)
                                return void e.slideToClosest();
                            i.freeMode && s("_freeModeNoMomentumRelease")
                        }
                        (!i.freeMode.momentum || d >= i.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    }
                }
            }
        })
    }, function({swiper: e, extendParams: t}) {
        let s,
            a,
            i;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        }),
        e.grid = {
            initSlides: t => {
                const {slidesPerView: r} = e.params,
                    {rows: n, fill: l} = e.params.grid;
                a = s / n,
                i = Math.floor(t / n),
                s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n,
                "auto" !== r && "row" === l && (s = Math.max(s, r * n))
            },
            updateSlide: (t, r, n, l) => {
                const {slidesPerGroup: o, spaceBetween: d} = e.params,
                    {rows: p, fill: c} = e.params.grid;
                let u,
                    h,
                    m;
                if ("row" === c && o > 1) {
                    const e = Math.floor(t / (o * p)),
                        a = t - p * o * e,
                        i = 0 === e ? o : Math.min(Math.ceil((n - e * p * o) / p), o);
                    m = Math.floor(a / i),
                    h = a - m * i + e * o,
                    u = h + m * s / p,
                    r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else
                    "column" === c ? (h = Math.floor(t / p), m = t - h * p, (h > i || h === i && m === p - 1) && (m += 1, m >= p && (m = 0, h += 1))) : (m = Math.floor(t / a), h = t - m * a);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            },
            updateWrapperSize: (t, a, i) => {
                const {spaceBetween: r, centeredSlides: n, roundLengths: l} = e.params,
                    {rows: o} = e.params.grid;
                if (e.virtualSize = (t + r) * s, e.virtualSize = Math.ceil(e.virtualSize / o) - r, e.$wrapperEl.css({
                    [i("width")]: `${e.virtualSize + r}px`
                }), n) {
                    a.splice(0, a.length);
                    const t = [];
                    for (let s = 0; s < a.length; s += 1) {
                        let i = a[s];
                        l && (i = Math.floor(i)),
                        a[s] < e.virtualSize + a[0] && t.push(i)
                    }
                    a.push(...t)
                }
            }
        }
    }, function({swiper: e}) {
        Object.assign(e, {
            appendSlide: R.bind(e),
            prependSlide: j.bind(e),
            addSlide: _.bind(e),
            removeSlide: V.bind(e),
            removeAllSlides: q.bind(e)
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        F({
            effect: "fade",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t} = e,
                    s = e.params.fadeEffect;
                for (let a = 0; a < t.length; a += 1) {
                    const t = e.slides.eq(a);
                    let i = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let r = 0;
                    e.isHorizontal() || (r = i, i = 0);
                    const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    U(s, t).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: t => {
                const {transformEl: s} = e.params.fadeEffect;
                (s ? e.slides.find(s) : e.slides).transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }),
        F({
            effect: "cube",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {$el: t, $wrapperEl: s, slides: a, width: i, height: r, rtlTranslate: n, size: l, browser: o} = e,
                    p = e.params.cubeEffect,
                    c = e.isHorizontal(),
                    u = e.virtual && e.params.virtual.enabled;
                let h,
                    m = 0;
                p.shadow && (c ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
                    height: `${i}px`
                })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), t.append(h))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let i = 90 * s,
                        r = Math.floor(i / 360);
                    n && (i = -i, r = Math.floor(-i / 360));
                    const o = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0,
                        f = 0,
                        g = 0;
                    s % 4 == 0 ? (h = 4 * -r * l, g = 0) : (s - 1) % 4 == 0 ? (h = 0, g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l, g = l) : (s - 3) % 4 == 0 && (h = -l, g = 3 * l + 4 * l * r),
                    n && (h = -h),
                    c || (f = h, h = 0);
                    const v = `rotateX(${c ? 0 : -i}deg) rotateY(${c ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                    if (o <= 1 && o > -1 && (m = 90 * s + 90 * o, n && (m = 90 * -s - 90 * o)), t.transform(v), p.slideShadows) {
                        let e = c ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = c ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = d(`<div class="swiper-slide-shadow-${c ? "left" : "top"}"></div>`), t.append(e)),
                        0 === s.length && (s = d(`<div class="swiper-slide-shadow-${c ? "right" : "bottom"}"></div>`), t.append(s)),
                        e.length && (e[0].style.opacity = Math.max(-o, 0)),
                        s.length && (s[0].style.opacity = Math.max(o, 0))
                    }
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                    "transform-origin": `50% 50% -${l / 2}px`
                }), p.shadow)
                    if (c)
                        h.transform(`translate3d(0px, ${i / 2 + p.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                    else {
                        const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = p.shadowScale,
                            a = p.shadowScale / t,
                            i = p.shadowOffset;
                        h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / a}px) rotateX(-90deg)`)
                    }
                const f = o.isSafari || o.isWebView ? -l / 2 : 0;
                s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`)
            },
            setTransition: t => {
                const {$el: s, slides: a} = e;
                a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }),
        F({
            effect: "flip",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t, rtlTranslate: s} = e,
                    a = e.params.flipEffect;
                for (let i = 0; i < t.length; i += 1) {
                    const r = t.eq(i);
                    let n = r[0].progress;
                    e.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                    const l = r[0].swiperSlideOffset;
                    let o = -180 * n,
                        d = 0,
                        p = e.params.cssMode ? -l - e.translate : -l,
                        c = 0;
                    if (e.isHorizontal() ? s && (o = -o) : (c = p, p = 0, d = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length, a.slideShadows) {
                        let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                            s = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = Z(a, r, e.isHorizontal() ? "left" : "top")),
                        0 === s.length && (s = Z(a, r, e.isHorizontal() ? "right" : "bottom")),
                        t.length && (t[0].style.opacity = Math.max(-n, 0)),
                        s.length && (s[0].style.opacity = Math.max(n, 0))
                    }
                    const u = `translate3d(${p}px, ${c}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                    U(a, r).transform(u)
                }
            },
            setTransition: t => {
                const {transformEl: s} = e.params.flipEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }),
        F({
            effect: "coverflow",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {width: t, height: s, slides: a, slidesSizesGrid: i} = e,
                    r = e.params.coverflowEffect,
                    n = e.isHorizontal(),
                    l = e.translate,
                    o = n ? t / 2 - l : s / 2 - l,
                    d = n ? r.rotate : -r.rotate,
                    p = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e),
                        s = i[e],
                        l = (o - t[0].swiperSlideOffset - s / 2) / s * r.modifier;
                    let c = n ? d * l : 0,
                        u = n ? 0 : d * l,
                        h = -p * Math.abs(l),
                        m = r.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * s);
                    let f = n ? 0 : m * l,
                        g = n ? m * l : 0,
                        v = 1 - (1 - r.scale) * Math.abs(l);
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(f) < .001 && (f = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(c) < .001 && (c = 0),
                    Math.abs(u) < .001 && (u = 0),
                    Math.abs(v) < .001 && (v = 0);
                    const w = `translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${c}deg) scale(${v})`;
                    if (U(r, t).transform(w), t[0].style.zIndex = 1 - Math.abs(Math.round(l)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = Z(r, t, n ? "left" : "top")),
                        0 === s.length && (s = Z(r, t, n ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = l > 0 ? l : 0),
                        s.length && (s[0].style.opacity = -l > 0 ? -l : 0)
                    }
                }
            },
            setTransition: t => {
                const {transformEl: s} = e.params.coverflowEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const a = e => "string" == typeof e ? e : `${e}px`;
        F({
            effect: "creative",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t, $wrapperEl: s, slidesSizesGrid: i} = e,
                    r = e.params.creativeEffect,
                    {progressMultiplier: n} = r,
                    l = e.params.centeredSlides;
                if (l) {
                    const t = i[0] / 2 - e.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${t}px))`)
                }
                for (let s = 0; s < t.length; s += 1) {
                    const i = t.eq(s),
                        o = i[0].progress,
                        d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
                    let p = d;
                    l || (p = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const c = i[0].swiperSlideOffset,
                        u = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    e.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0),
                    u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`
                    })),
                    h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })),
                    i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
                    const g = u.join(", "),
                        v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = p < 0 ? `scale(${1 + (1 - f.scale) * p * n})` : `scale(${1 - (1 - f.scale) * p * n})`,
                        b = p < 0 ? 1 + (1 - f.opacity) * p * n : 1 - (1 - f.opacity) * p * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = i.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = Z(r, i)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = U(r, i);
                    y.transform(x).css({
                        opacity: b
                    }),
                    f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: t => {
                const {transformEl: s} = e.params.creativeEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({swiper: e, extendParams: t, on: s}) {
        t({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }),
        F({
            effect: "cards",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t, activeIndex: s} = e,
                    a = e.params.cardsEffect,
                    {startTranslate: i, isTouched: r} = e.touchEventsData,
                    n = e.translate;
                for (let l = 0; l < t.length; l += 1) {
                    const o = t.eq(l),
                        d = o[0].progress,
                        p = Math.min(Math.max(d, -4), 4);
                    let c = o[0].swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
                    e.params.centeredSlides && e.params.cssMode && (c -= t[0].swiperSlideOffset);
                    let u = e.params.cssMode ? -c - e.translate : -c,
                        h = 0;
                    const m = -100 * Math.abs(p);
                    let f = 1,
                        g = -2 * p,
                        v = 8 - .75 * Math.abs(p);
                    const w = (l === s || l === s - 1) && p > 0 && p < 1 && (r || e.params.cssMode) && n < i,
                        b = (l === s || l === s + 1) && p < 0 && p > -1 && (r || e.params.cssMode) && n > i;
                    if (w || b) {
                        const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                        g += -28 * p * e,
                        f += -.5 * e,
                        v += 96 * e,
                        h = -25 * e * Math.abs(p) + "%"
                    }
                    if (u = p < 0 ? `calc(${u}px + (${v * Math.abs(p)}%))` : p > 0 ? `calc(${u}px + (-${v * Math.abs(p)}%))` : `${u}px`, !e.isHorizontal()) {
                        const e = h;
                        h = u,
                        u = e
                    }
                    const x = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${p < 0 ? "" + (1 + (1 - f) * p) : "" + (1 - (1 - f) * p)})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = Z(a, o)),
                        e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
                    U(a, o).transform(x)
                }
            },
            setTransition: t => {
                const {transformEl: s} = e.params.cardsEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }];
    return H.use(J), H
}));
//# sourceMappingURL=swiper-bundle.min.js.map

/* ==== INCLUDE: /js/blocks/swiper-support.js ==== */

// swiper-support.js
;
(function() {

    function isAutoPlayOn(swiper) {
        if (swiper && swiper.params && swiper.params.autoplay) {
            if ((typeof swiper.params.autoplay === 'boolean') ||
            ((typeof swiper.params.autoplay === 'object') &&
            swiper.params.autoplay.enabled)) {

                return true
            }
        }
        return false
    }

    const intersectionObserver = new IntersectionObserver(entries => {

        //console.log( 'intersection observer', entries )

        if (document.querySelector('html').classList.contains('editing')) {
            return
        }

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.removeAttribute('data-stopped')
                const swiper = entry.target.swiper
                if (isAutoPlayOn(swiper)) {
                    swiper.autoplay.start()
                }
            }
            else {
                entry.target.setAttribute('data-stopped', '')// console.log( 'swiper', entry.target.swiper )
                const swiper = entry.target.swiper
                if (isAutoPlayOn(swiper)) {
                    swiper.autoplay.stop()
                }
            }
        })
    })

    document.addEventListener('DOMContentLoaded', () => {

        const swipers = []

        function pauseAllVideosUnder(el, except=[], immediately=false) {
            const runner = () => {

                el.querySelectorAll('video').forEach(v => {
                    if (except && except.find(item => item === v)) {
                        return
                    }
                    // v.autoplay = false
                    // v.removeAttribute('data-autoplay')
                    v.currentTime = 0;
                    v.pause()






                })
            }// v.addEventListener('pause', () => {
            //     console.log( 'video pause', v )
            // })
            // v.addEventListener('ended', () => {
            //     console.log( 'video ended', v )
            // })
            if (immediately) {
                runner()
            }
            else {
                setTimeout(() => {
                    runner()
                }, 1000)
            }
        }

        document.addEventListener('editor.on', () => {
            swipers.forEach(swiper => {
                if (isAutoPlayOn(swiper)) {
                    swiper.autoplay.stop()
                }
            })
        })
        document.addEventListener('editor.off', () => {
            swipers.forEach(swiper => {
                if (isAutoPlayOn(swiper)) {
                    swiper.autoplay.start()
                }
            })
        })

        const init = () => {
            document.querySelectorAll('.swiper-container').forEach(el => {
                if (el.classList.contains('inited')) {
                    return
                }

                el.setAttribute('data-stopped', '')

                const paramsJsonEl = el.querySelector('script[data-rel="swiper-params"]')
                let params = {}
                try {
                    if (paramsJsonEl) {
                        params = JSON.parse(paramsJsonEl.innerText)
                    }
                }
                catch (ex) {
                    console.error('Heads-up: params for swiper failed to parse as JSON: ', ex)
                }

                const block = el.closest('.block-layout')
                const id = block ? block.getAttribute('id') : 'missing'

                pauseAllVideosUnder(el, [], true)

                const swiper = new Swiper(el, {

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination-' + id,
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next-' + id,
                        prevEl: '.swiper-button-prev-' + id,
                    },
                    // And if we need scrollbar
                    scrollbar: {
                        el: '.swiper-scrollbar-' + id,
                    },

                    on: {
                        touchStart: (swiper) => {

                        },
                        transitionStart: (swiper) => {

                        },
                        transitionEnd: (swiper) => {
                            // console.log( 'transition end', swiper )
                            if (swiper.params._originalSpeed) {
                                console.log('reseting speed to ', swiper.params._originalSpeed)
                                swiper.params.speed = swiper.params._originalSpeed
                            }
                        },
                        init: (swiper) => {
                            // console.log( 'init event' )
                            const slide = swiper.slides[swiper.activeIndex]
                            if (slide && slide.querySelector('video')) {
                                slide.querySelectorAll('video').forEach((video) => {
                                    if ('true' === video.getAttribute('data-autoplay')) {
                                        // video.load()
                                        video.muted = true
                                        video.play()
                                    }
                                })
                            }
                        },
                        beforeTransitionStart: (swiper) => {
                            // console.log( 'slide change')
                            const slide = swiper.slides[swiper.activeIndex]
                            const lastRealIndex = swiper._lastRealIndex
                            if (!isNaN(lastRealIndex) && lastRealIndex === swiper.realIndex) {
                                // don't ask... swiper fires two quick events in succession
                                console.log('detected fake changae in swiper slide')
                                return
                            }
                            console.log('active slide: ', swiper.activeIndex, swiper.realIndex, slide.querySelector('source'))
                            swiper._lastRealIndex = swiper.realIndex
                            if (slide && slide.querySelector('video')) {
                                const except = []
                                slide.querySelectorAll('video').forEach((video) => {
                                    if ('true' === video.getAttribute('data-autoplay')) {
                                        // video.load()
                                        video.currentTime = 0
                                        video.muted = true
                                        video.play()
                                        except.push(video)
                                    }
                                })
                                pauseAllVideosUnder(el, except)
                            }
                        }

                    },
                    // loopPreventsSlide: false,
                    navigationSpeed: 300,
                    ...params,
                    init: false,
                })
                swiper.params._originalSpeed = swiper.params.speed
                // el.addEventListener('mousedown', (event) => {
                //     if( event.target.matches('.swiper-button-next') || event.target.matches('.swiper-button-prev') ||
                //         event.target.matches( '.swiper-pagination-bullet') ) {
                //         // console.log( 'setting speed to 300')
                //         swiper.params.speed = swiper.params.navigationSpeed || 300
                //         // swiper.autoplay.stop()
                //     }
                // })
                'touchdown mousedown'.split(' ').forEach(ev => {
                    el.addEventListener(ev, (event) => {
                        if (event.target.matches('.swiper-button-next') || event.target.matches('.swiper-button-prev') ||
                        event.target.matches('.swiper-pagination-bullet')) {
                            // console.log( 'setting speed to 300')
                            swiper.params.speed = swiper.params.navigationSpeed || 300

                        }
                    })
                })// swiper.autoplay.stop()
                'sliderFirstMove'.split(' ').forEach(ev => {
                    swiper.on(ev, (event) => {
                        console.log('got sliderMove', )
                        swiper.params.speed = swiper.params.navigationSpeed || 300
                    })
                })

                'mouseenter'.split(' ').forEach(ev => {
                    el.addEventListener(ev, () => {
                        if (swiper.animating) {
                            const intDistance = parseInt(swiper.translate)
                            const floatDistance = parseFloat(swiper.translate)
                            if (!isNaN(intDistance) && !isNaN(floatDistance)) {
                                // console.log('numbers', intDistance, floatDistance, floatDistance == intDistance)
                                const fakeDistance = intDistance == floatDistance ? (intDistance + 0.1) : intDistance// console.log('fakeDistance', fakeDistance)
                                swiper.setTranslate(fakeDistance)// swiper.el.querySelector('.swiper-wrapper').style.transform = 'translate3d(' +
                                //     fakeDistance + 'px,0,0)'
                                swiper.el.querySelector('.swiper-wrapper').style.transitionDuration = '300ms'
                            }
                        }
                        swiper.el.classList.add('interactive')
                        swiper.el.classList.add('kill-transition')
                        setTimeout(() => {
                            swiper.el.classList.remove('kill-transition')
                        }, 10)

                    })
                })// swiper.el.querySelector('.swiper-wrapper').style.transform = 'none'
                'mouseleave'.split(' ').forEach(ev => {
                    el.addEventListener(ev, () => {
                        swiper.el.classList.remove('interactive')
                    })
                })// el.addEventListener( 'mouseleave', () => {
                //     setTimeout(() => {
                //         if( swiper.params.autoplay ) {
                //             swiper.autoplay.run()
                //         }
                //     }, 100 )
                // })
                if (isAutoPlayOn(swiper)) {
                    swiper.autoplay.stop()
                }
                swipers.push(swiper)
                swiper.init()
                // if( id === 'bid_7280832' ) {
                //     window.swiper = swiper;
                // }

                el.classList.add('inited')

                intersectionObserver.observe(el)
            })
        }
        init()
        _G.reinitHandlers.push(init)
    })
})()



;
/* ==== INCLUDE: /js/blocks/featured-listings.js ==== */
(function() {

    function init(id) {
        if (!id) {
            return
        }
        const b = document.getElementById(id)
        if (!b) {
            return
        }
        const f = b.querySelector('.featured-listings')
        if (!f) {
            return
        }
        if (f && f.__featuredInited) {
            return
        }

        f.__featuredInited = true

        b.querySelectorAll('[data-listing="true"]').forEach(el => {
            const id = el.getAttribute('data-id')
            const ribbonURL = el.getAttribute('data-ribbon')
            if (ribbonURL) {
                ribbon(el, ribbonURL)
            }
        })
    }

    const RIBBONS = {
        'SOLD-BANNER': 'SOLD',
        'LEASED-BANNER': 'LEASED',
        'RENTED-BANNER': 'RENTED',
        'NEW-BANNER': 'NEW LISTING',
        'PENDING-BANNER': 'PENDING',
        'CONTINGENT-BANNER': 'CONTINGENT',
    }

    function ribbon(el, url) {
        fetch(url).then(function(response) {
            response.json().then((json) => {
                //console.log( 'ribbon', json )
                json && json.banner && addRibbon(el, json)
            })
        }).catch(function(err) {
            console.error('ribbon lookup failed', err)
        })
    }

    function addRibbon(el, json) {
        let text = json.text
        if (!text) {
            text = RIBBONS[json.banner]
        }
        if (!text) {
            return
        }

        const ribbon = document.createElement('div')
        ribbon.classList.add('ribbon')
        ribbon.innerText = text

        const color = json.color
        if (color) {
            ribbon.setAttribute('style', '--custom-color: ' + color.replace('0x', '#') + ';')
        }
        ribbon.classList.add(json.banner.toLowerCase())

        el.appendChild(ribbon)
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.featured-listings').forEach(el => {
            const b = el.closest('.block-layout')
            if (b) {
                init(b.getAttribute('id'))
            }
        })

        _G.reinitHandlers.push(init)
    })
})();

/* ==== INCLUDE: /js/blocks/flslider.js ==== */

;
(function() {

    class Fade {
        /**
                 * @param - The selector of the element to which the fade effect is to be applied. If the selector is blank, it applies to panel element. <ko>Fade 효과를 적용할 대상의 선택자. 선택자가 공백이면 패널 엘리먼트에 적용된다.</ko>
                 * @param - Effect amplication scale <ko>효과 증폭도</ko>
                 * @example
                 * flicking.addPlugins(new eg.Flicking.plugins.Fade("p", 1));
                 */
        constructor(selector="", scale=1)
        {
            this.selector = selector;
            this.scale = scale;
            this.onMove = (e) => {
                this.move(e.currentTarget);
            };
        }
        init(flicking)
        {
            flicking.on("move", this.onMove);
            this.move(flicking);
        }
        update(flicking)
        {
            this.move(flicking);
        }
        destroy(flicking)
        {
            flicking.off("move", this.onMove);
        }
        move(flicking)
        {
            const panels = flicking.getVisiblePanels();
            const selector = this.selector;
            const scale = this.scale;
            panels.forEach(panel => {
                const progress = panel.getOutsetProgress();
                const el = panel.getElement();
                const target = selector ? el.querySelector(selector) : el;
                const opacity = Math.min(1, Math.max(0, (1 - Math.abs(progress * scale))));
                target.style.opacity = `${opacity}`;
            });
        }
    }


    const DEFAULT_OPTION = {
        duration: 5000,
        direction: "NEXT",
        stopOnHover: true,
    };
    /**
         * Plugin that allow you to automatically move to the next/previous panel, on a specific time basis
         * @ko 일정 시간마다, 자동으로 다음/이전 패널로 넘어가도록 할 수 있는 플러그인
         * @memberof eg.Flicking.plugins
         */
    class AutoPlay {
        /**
                 * @param options Options for the AutoPlay instance.<ko>AutoPlay 옵션</ko>
                 * @param options.duration Time to wait before moving on to the next panel.<ko>다음 패널로 움직이기까지 대기 시간</ko>
                 * @param options.direction The direction in which the panel moves.<ko>패널이 움직이는 방향</ko>
                 * @param options.stopOnHover Whether to stop when mouse hover upon the element.<ko>엘리먼트에 마우스를 올렸을 때 AutoPlay를 정지할지 여부</ko>
                 * @example
                 * flicking.addPlugins(new eg.Flicking.plugins.AutoPlay(2000, "NEXT"));
                 */
        constructor(options=DEFAULT_OPTION, direction=DEFAULT_OPTION.direction)
        {
            /* Internal Values */
            this.flicking = null;
            this.timerId = 0;
            this.onPlay = (e) => {
                this.play(e.currentTarget);
            };
            this.onStop = () => {
                // console.log( 'clearing timer', this.timerId)
                clearTimeout(this.timerId);
            };
            this.onMouseEnter = () => {
                this.onStop();
            };
            this.onMouseLeave = () => {
                this.play(this.flicking);
            };
            if (typeof options === "number") {
                // Fallback for previous interface
                this.duration = options;
                this.direction = direction;
                this.stopOnHover = DEFAULT_OPTION.stopOnHover;
                return;
            }
            const mergedOptions = Object.assign(Object.assign({}, DEFAULT_OPTION), options);
            const {duration, direction: dir, stopOnHover} = mergedOptions;
            this.duration = duration;
            this.direction = dir;
            this.stopOnHover = stopOnHover;
        }
        init(flicking)
        {
            flicking.on({
                move: this.onStop,
                holdStart: this.onStop,
                select: this.onPlay,
                moveEnd: this.onPlay,
            });
            this.flicking = flicking;
            if (this.stopOnHover) {
                const targetEl = this.flicking.getElement();
                targetEl.addEventListener("mouseenter", this.onMouseEnter, false);
                targetEl.addEventListener("mouseleave", this.onMouseLeave, false);
            }
            this.play(flicking);
        }
        destroy(flicking)
        {
            this.onStop();
            flicking.off("moveStart", this.onStop);
            flicking.off("holdStart", this.onStop);
            flicking.off("moveEnd", this.onPlay);
            flicking.off("select", this.onPlay);
            const targetEl = flicking.getElement();
            targetEl.removeEventListener("mouseenter", this.onMouseEnter, false);
            targetEl.removeEventListener("mouseleave", this.onMouseLeave, false);
            this.flicking = null;
        }
        play(flicking)
        {
            this.onStop();
            this.timerId = window.setTimeout(() => {
                if (document.querySelector('html').classList.contains('editing')) {
                    return this.play(flicking)
                }
                if (flicking && flicking.viewport && flicking.viewport.viewportElement && flicking.viewport.viewportElement.parentElement
                && flicking.viewport.viewportElement.parentElement.hasAttribute('data-stopped')) {
                    return this.play(flicking)
                }
                //console.log( 'flicking current index', flicking.getIndex())
                //console.log( 'panel count', flicking.getVisiblePanels() )

                let visiblePanels = Math.max(1, flicking.getVisiblePanels().length - 2)// console.log( 'visible panels', visiblePanels)
                if (visiblePanels > 1) {
                    const index = flicking.getIndex()
                    const total = flicking.getPanelCount()
                    let nextIndex = index + visiblePanels// console.log( 'play', index, total, nextIndex )
                    if (nextIndex >= total) {
                        nextIndex -= total
                    }
                    // console.log( 'final next', nextIndex)
                    flicking.moveTo(nextIndex)
                }
                else {
                    flicking[this.direction === "NEXT" ? "next" : "prev"]();
                }
                this.play(flicking);
            }, this.duration);

        }
    }
    // console.log( 'initiazing a timer', this.timerId)

    const Pagination = function(container) {
        var length = 0;
        var element;
        var itemTag;
        var items = [];

        return {
            update: function(flicking) {
                var prevLength = length;
                length = flicking.getPanelCount();

                if (prevLength < length) {
                    var fragment = document.createDocumentFragment();
                    for (var i = prevLength; i < length; ++i) {
                        (function(item) {
                            item.className += "pagination-item";
                            items.push(item);
                            item.addEventListener("click", function() {
                                flicking.moveTo(items.indexOf(item));
                                stopAutoPlay(flicking)
                            });
                            fragment.appendChild(item);
                        })(document.createElement(itemTag));
                    }
                    element.appendChild(fragment);
                }
                var selectedElement = element.querySelector(".selected");
                if (selectedElement) {
                    selectedElement.className = selectedElement.className.replace(/\s*selected/g, "");
                }
                items[flicking.getIndex()].className += " selected";
            },
            init: function(flicking) {
                element = typeof container === "object" ? container : document.querySelector(container);
                itemTag = element.nodeName === "UL" ? "li" : "div";

                flicking.on("moveEnd", function(e) {
                    var selectedElement = element.querySelector(".selected");
                    if (selectedElement) {
                        selectedElement.className = selectedElement.className.replace(/\s*selected/g, "");
                    }

                    items[flicking.getIndex()].className += " selected";
                });
                this.update(flicking);
            },
        };
    };
    // END OF PLUGINS


    const stopAutoPlay = (flicking) => {
        flicking && flicking.viewport && flicking.viewport.viewportElement && flicking.viewport.viewportElement.parentElement
        && flicking.viewport.viewportElement.parentElement.setAttribute('data-stopped', '')
    }

    const intersectionObserver = new IntersectionObserver(entries => {

        //console.log( 'intersection observer', entries )

        if (document.querySelector('html').classList.contains('editing')) {
            return
        }

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.removeAttribute('data-stopped')
            }
            else {
                entry.target.setAttribute('data-stopped', '')
            }
        })
    })

    document.addEventListener('DOMContentLoaded', () => {

        const sliders = []


        document.addEventListener('editor.on', () => {
            sliders.forEach(s => {
                s.viewport.viewportElement.parentElement.setAttribute('data-stopped', '')
                s.disableInput()
                setTimeout(() => {
                    s.resize()
                }, 500)
            })
        })
        document.addEventListener('editor.off', () => {
            sliders.forEach(s => {
                s.viewport.viewportElement.parentElement.removeAttribute('data-stopped')
                s.enableInput()
                setTimeout(() => {
                    s.resize()
                }, 500)
            })
        })
        const init = () => {

            // reentrant


            document.querySelectorAll('.flslider-container').forEach(el => {

                if (el.classList.contains('inited')) {
                    return
                }

                // we start out stopped and wait for intersection observer
                el.setAttribute('data-stopped', '')

                const flicking = new eg.Flicking(el, {
                    circular: true,
                    collectStatistics: false,
                    gap: 10,
                    zIndex: 0,
                    autoResize: true,
                    // renderOnlyVisible: true,
                    duration: 1000,
                })

                el.parentElement.addEventListener('mouseenter', () => {
                    el.parentElement.classList.add('fl-hover')
                })
                el.parentElement.addEventListener('mouseleave', () => {
                    el.parentElement.classList.remove('fl-hover')
                })

                const paginationEl = el.parentElement.querySelector('.flslider-pagination')
                if (paginationEl) {
                    flicking.addPlugins(Pagination(paginationEl))
                }

                const navLeftEl = el.parentElement.querySelector('.flslider-nav-left')
                const navRightEl = el.parentElement.querySelector('.flslider-nav-right')
                navLeftEl && navLeftEl.addEventListener('click', () => {
                    stopAutoPlay(flicking)
                    let visiblePanels = Math.max(1, flicking.getVisiblePanels().length - 2)
                    if (visiblePanels > 1) {
                        const index = flicking.getIndex()
                        const total = flicking.getPanelCount()
                        let nextIndex = index - visiblePanels// console.log( 'play', index, total, nextIndex )
                        if (nextIndex < 0) {
                            nextIndex = total - Math.abs(nextIndex)
                        }
                        // console.log( 'final next', nextIndex)
                        flicking.moveTo(nextIndex)
                    }
                    else {
                        flicking.prev()
                    }
                })
                navRightEl && navRightEl.addEventListener('click', () => {
                    stopAutoPlay(flicking)
                    let visiblePanels = Math.max(1, flicking.getVisiblePanels().length - 2)// console.log( 'visible panels', visiblePanels)
                    if (visiblePanels > 1) {
                        const index = flicking.getIndex()
                        const total = flicking.getPanelCount()
                        let nextIndex = index + visiblePanels// console.log( 'play', index, total, nextIndex )
                        if (nextIndex >= total) {
                            nextIndex -= total
                        }
                        // console.log( 'final next', nextIndex)
                        flicking.moveTo(nextIndex)
                    }
                    else {
                        flicking.next()
                    }
                })

                if (el.hasAttribute('data-autoplay')) {
                    const interval = parseInt(el.getAttribute('data-interval')) || 5
                    const autoPlay = new AutoPlay(interval * 1000, 'NEXT')
                    flicking.addPlugins(autoPlay)
                }
                if (el.hasAttribute('data-fade')) {
                    flicking.addPlugins(new Fade('', 1))
                }

                let moving

                flicking.on("moveStart", function(e) {
                    console.log(e)
                    moving = true
                });

                flicking.on("moveEnd", function(e) {
                    moving = false
                    var panel = e.panel;
                    var el = panel.getElement();
                    el.querySelectorAll('video').forEach(v => {
                        if (v.getAttribute('loop') === 'true') {
                            if (!(v.currentTime > 0 && !v.paused && !v.ended && v.readyState > 2)) {
                                v.muted = true
                                v.play()
                            }

                        }
                    })// v.play()
                    console.log(e)
                })

                flicking.on("holdStart", function(e) {
                    setTimeout(() => {
                        stopAutoPlay(flicking)
                    })
                })
                // we want to disable any <a> tags while the panels are moving
                el.querySelectorAll('a').forEach(a => {
                    a.addEventListener('click', ev => {
                        const href = a.getAttribute('href')
                        if (href && moving) {
                            ev.preventDefault()
                            ev.stopPropagation()
                        }
                    })

                })

                sliders.push(flicking)

                el.classList.add('inited')

                intersectionObserver.observe(el)
            })
        }

        init()

        _G.reinitHandlers.push(init)
    })

})()
/* ==== INCLUDE: /js/blocks/flicking-3.4.7.pkgd.js ==== */

/*
Copyright (c) 2015-present NAVER Corp.
name: @egjs/flicking
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-flicking
version: 3.4.7
*/
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : ((t = t || self).eg = t.eg || {}, t.eg.Flicking = e())
}(this, function() {
    "use strict";
    var i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        })(t, e)
    };
    function r(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    function a(t) {
        return void 0 === t
    }
    var t = function() {
        var t = function() {
            function t() {
                this._eventHandler = {},
                this.options = {}
            }
            var e = t.prototype;
            return e.trigger = function(t, e) {
                void 0 === e && (e = {});
                var n = this._eventHandler[t] || [];
                if (!(0 < n.length))
                    return !0;
                n = n.concat(),
                e.eventType = t;
                var i = !1,
                    r = [e],
                    o = 0;
                e.stop = function() {
                    i = !0
                },
                e.currentTarget = this;
                for (var s = arguments.length, a = new Array(2 < s ? s - 2 : 0), l = 2; l < s; l++)
                    a[l - 2] = arguments[l];
                for (1 <= a.length && (r = r.concat(a)), o = 0; n[o]; o++)
                    n[o].apply(this, r);
                return !i
            }, e.once = function(r, o) {
                if ("object" == typeof r && a(o)) {
                    var t,
                        e = r;
                    for (t in e)
                        this.once(t, e[t]);
                    return this
                }
                if ("string" == typeof r && "function" == typeof o) {
                    var s = this;
                    this.on(r, function t() {
                        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                            n[i] = arguments[i];
                        o.apply(s, n),
                        s.off(r, t)
                    })
                }
                return this
            }, e.hasOn = function(t) {
                return !!this._eventHandler[t]
            }, e.on = function(t, e) {
                if ("object" == typeof t && a(e)) {
                    var n,
                        i = t;
                    for (n in i)
                        this.on(n, i[n]);
                    return this
                }
                if ("string" == typeof t && "function" == typeof e) {
                    var r = this._eventHandler[t];
                    a(r) && (this._eventHandler[t] = [], r = this._eventHandler[t]),
                    r.push(e)
                }
                return this
            }, e.off = function(t, e) {
                if (a(t))
                    return this._eventHandler = {}, this;
                if (a(e)) {
                    if ("string" == typeof t)
                        return this._eventHandler[t] = void 0, this;
                    var n,
                        i = t;
                    for (n in i)
                        this.off(n, i[n]);
                    return this
                }
                var r,
                    o,
                    s = this._eventHandler[t];
                if (s)
                    for (r = 0; void 0 !== (o = s[r]); r++)
                        if (o === e) {
                            s = s.splice(r, 1);
                            break
                        }
                return this
            }, t
        }();
        return t.VERSION = "2.1.2", t
    }();
    function o() {
        return (o = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }
    function s(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function l(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var u,
        h = "function" != typeof Object.assign ? function(t) {
            if (null == t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (null != i)
                    for (var r in i)
                        i.hasOwnProperty(r) && (e[r] = i[r])
            }
            return e
        } : Object.assign,
        c = ["", "webkit", "Moz", "MS", "ms", "o"],
        e = "undefined" == typeof document ? {
            style: {}
        } : document.createElement("div"),
        n = "function",
        f = Math.round,
        y = Math.abs,
        b = Date.now;
    function p(t, e) {
        for (var n, i, r = e[0].toUpperCase() + e.slice(1), o = 0; o < c.length;) {
            if ((i = (n = c[o]) ? n + r : e) in t)
                return i;
            o++
        }
    }
    u = "undefined" == typeof window ? {} : window;
    var g = p(e.style, "touchAction"),
        d = void 0 !== g;
    var v = "compute",
        m = "manipulation",
        P = "none",
        x = "pan-x",
        E = "pan-y",
        C = function() {
            if (!d)
                return !1;
            var e = {},
                n = u.CSS && u.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(t) {
                return e[t] = !n || u.CSS.supports("touch-action", t)
            }), e
        }(),
        S = "ontouchstart" in u,
        w = void 0 !== p(u, "PointerEvent"),
        I = S && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        T = "touch",
        A = "mouse",
        M = 25,
        z = 1,
        O = 4,
        R = 8,
        N = 1,
        _ = 2,
        k = 4,
        H = 8,
        D = 16,
        B = _ | k,
        V = H | D,
        L = B | V,
        F = ["x", "y"],
        X = ["clientX", "clientY"];
    function j(t, e, n) {
        var i;
        if (t)
            if (t.forEach)
                t.forEach(e, n);
            else if (void 0 !== t.length)
                for (i = 0; i < t.length;)
                    e.call(n, t[i], i, t),
                    i++;
            else
                for (i in t)
                    t.hasOwnProperty(i) && e.call(n, t[i], i, t)
    }
    function Y(t, e) {
        return typeof t === n ? t.apply(e && e[0] || void 0, e) : t
    }
    function q(t, e) {
        return -1 < t.indexOf(e)
    }
    var G = function() {
        function t(t, e) {
            this.manager = t,
            this.set(e)
        }
        var e = t.prototype;
        return e.set = function(t) {
            t === v && (t = this.compute()),
            d && this.manager.element.style && C[t] && (this.manager.element.style[g] = t),
            this.actions = t.toLowerCase().trim()
        }, e.update = function() {
            this.set(this.manager.options.touchAction)
        }, e.compute = function() {
            var e = [];
            return j(this.manager.recognizers, function(t) {
                Y(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }), function(t) {
                if (q(t, P))
                    return P;
                var e = q(t, x),
                    n = q(t, E);
                return e && n ? P : e || n ? e ? x : E : q(t, m) ? m : "auto"
            }(e.join(" "))
        }, e.preventDefaults = function(t) {
            var e = t.srcEvent,
                n = t.offsetDirection;
            if (this.manager.session.prevented)
                e.preventDefault();
            else {
                var i = this.actions,
                    r = q(i, P) && !C[P],
                    o = q(i, E) && !C[E],
                    s = q(i, x) && !C[x];
                if (r) {
                    var a = 1 === t.pointers.length,
                        l = t.distance < 2,
                        u = t.deltaTime < 250;
                    if (a && l && u)
                        return
                }
                if (!s || !o)
                    return r || o && n & B || s && n & V ? this.preventSrc(e) : void 0
            }
        }, e.preventSrc = function(t) {
            this.manager.session.prevented = !0,
            t.preventDefault()
        }, t
    }();
    function W(t, e) {
        for (; t;) {
            if (t === e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function U(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: f(t[0].clientX),
                y: f(t[0].clientY)
            };
        for (var n = 0, i = 0, r = 0; r < e;)
            n += t[r].clientX,
            i += t[r].clientY,
            r++;
        return {
            x: f(n / e),
            y: f(i / e)
        }
    }
    function J(t) {
        for (var e = [], n = 0; n < t.pointers.length;)
            e[n] = {
                clientX: f(t.pointers[n].clientX),
                clientY: f(t.pointers[n].clientY)
            },
            n++;
        return {
            timeStamp: b(),
            pointers: e,
            center: U(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function Q(t, e, n) {
        n || (n = F);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r)
    }
    function Z(t, e, n) {
        n || (n = F);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }
    function K(t, e) {
        return t === e ? N : y(t) >= y(e) ? t < 0 ? _ : k : e < 0 ? H : D
    }
    function $(t, e, n) {
        return {
            x: e / t || 0,
            y: n / t || 0
        }
    }
    function tt(t, e) {
        var n = t.session,
            i = e.pointers,
            r = i.length;
        n.firstInput || (n.firstInput = J(e)),
        1 < r && !n.firstMultiple ? n.firstMultiple = J(e) : 1 === r && (n.firstMultiple = !1);
        var o,
            s,
            a,
            l,
            u,
            h,
            c = n.firstInput,
            f = n.firstMultiple,
            p = f ? f.center : c.center,
            g = e.center = U(i);
        e.timeStamp = b(),
        e.deltaTime = e.timeStamp - c.timeStamp,
        e.angle = Z(p, g),
        e.distance = Q(p, g),
        o = n,
        a = (s = e).center,
        l = o.offsetDelta || {},
        u = o.prevDelta || {},
        h = o.prevInput || {},
        s.eventType !== z && h.eventType !== O || (u = o.prevDelta = {
            x: h.deltaX || 0,
            y: h.deltaY || 0
        }, l = o.offsetDelta = {
            x: a.x,
            y: a.y
        }),
        s.deltaX = u.x + (a.x - l.x),
        s.deltaY = u.y + (a.y - l.y),
        e.offsetDirection = K(e.deltaX, e.deltaY);
        var d,
            v,
            m,
            P,
            x = $(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = x.x,
        e.overallVelocityY = x.y,
        e.overallVelocity = y(x.x) > y(x.y) ? x.x : x.y,
        e.scale = f ? (d = f.pointers, Q((v = i)[0], v[1], X) / Q(d[0], d[1], X)) : 1,
        e.rotation = f ? (m = f.pointers, Z((P = i)[1], P[0], X) + Z(m[1], m[0], X)) : 0,
        e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
        function(t, e) {
            var n,
                i,
                r,
                o,
                s = t.lastInterval || e,
                a = e.timeStamp - s.timeStamp;
            if (e.eventType !== R && (M < a || void 0 === s.velocity)) {
                var l = e.deltaX - s.deltaX,
                    u = e.deltaY - s.deltaY,
                    h = $(a, l, u);
                i = h.x,
                r = h.y,
                n = y(h.x) > y(h.y) ? h.x : h.y,
                o = K(l, u),
                t.lastInterval = e
            } else
                n = s.velocity,
                i = s.velocityX,
                r = s.velocityY,
                o = s.direction;
            e.velocity = n,
            e.velocityX = i,
            e.velocityY = r,
            e.direction = o
        }(n, e);
        var E = t.element;
        W(e.srcEvent.target, E) && (E = e.srcEvent.target),
        e.target = E
    }
    function et(t, e, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            o = e & z && i - r == 0,
            s = e & (O | R) && i - r == 0;
        n.isFirst = !!o,
        n.isFinal = !!s,
        o && (t.session = {}),
        n.eventType = e,
        tt(t, n),
        t.emit("hammer.input", n),
        t.recognize(n),
        t.session.prevInput = n
    }
    function nt(t) {
        return t.trim().split(/\s+/g)
    }
    function it(e, t, n) {
        j(nt(t), function(t) {
            e.addEventListener(t, n, !1)
        })
    }
    function rt(e, t, n) {
        j(nt(t), function(t) {
            e.removeEventListener(t, n, !1)
        })
    }
    function ot(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || window
    }
    var st = function() {
        function t(e, t) {
            var n = this;
            this.manager = e,
            this.callback = t,
            this.element = e.element,
            this.target = e.options.inputTarget,
            this.domHandler = function(t) {
                Y(e.options.enable, [e]) && n.handler(t)
            },
            this.init()
        }
        var e = t.prototype;
        return e.handler = function() {}, e.init = function() {
            this.evEl && it(this.element, this.evEl, this.domHandler),
            this.evTarget && it(this.target, this.evTarget, this.domHandler),
            this.evWin && it(ot(this.element), this.evWin, this.domHandler)
        }, e.destroy = function() {
            this.evEl && rt(this.element, this.evEl, this.domHandler),
            this.evTarget && rt(this.target, this.evTarget, this.domHandler),
            this.evWin && rt(ot(this.element), this.evWin, this.domHandler)
        }, t
    }();
    function at(t, e, n) {
        if (t.indexOf && !n)
            return t.indexOf(e);
        for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e)
                return i;
            i++
        }
        return -1
    }
    var lt = {
            pointerdown: z,
            pointermove: 2,
            pointerup: O,
            pointercancel: R,
            pointerout: R
        },
        ut = {
            2: T,
            3: "pen",
            4: A,
            5: "kinect"
        },
        ht = "pointerdown",
        ct = "pointermove pointerup pointercancel";
    u.MSPointerEvent && !u.PointerEvent && (ht = "MSPointerDown", ct = "MSPointerMove MSPointerUp MSPointerCancel");
    var ft = function(n) {
        function i() {
            var t,
                e = i.prototype;
            return e.evEl = ht, e.evWin = ct, (t = n.apply(this, arguments) || this).store = t.manager.session.pointerEvents = [], t
        }
        return s(i, n), i.prototype.handler = function(t) {
            var e = this.store,
                n = !1,
                i = t.type.toLowerCase().replace("ms", ""),
                r = lt[i],
                o = ut[t.pointerType] || t.pointerType,
                s = o === T,
                a = at(e, t.pointerId, "pointerId");
            r & z && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : r & (O | R) && (n = !0),
            a < 0 || (e[a] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }), n && e.splice(a, 1))
        }, i
    }(st);
    function pt(t) {
        return Array.prototype.slice.call(t, 0)
    }
    var gt = {
            touchstart: z,
            touchmove: 2,
            touchend: O,
            touchcancel: R
        },
        dt = function(e) {
            function n() {
                var t;
                return n.prototype.evTarget = "touchstart touchmove touchend touchcancel", (t = e.apply(this, arguments) || this).targetIds = {}, t
            }
            return s(n, e), n.prototype.handler = function(t) {
                var e = gt[t.type],
                    n = function(t, e) {
                        var n,
                            i,
                            r = pt(t.touches),
                            o = this.targetIds;
                        if (e & (2 | z) && 1 === r.length)
                            return o[r[0].identifier] = !0, [r, r];
                        var s = pt(t.changedTouches),
                            a = [],
                            l = this.target;
                        if (i = r.filter(function(t) {
                            return W(t.target, l)
                        }), e === z)
                            for (n = 0; n < i.length;)
                                o[i[n].identifier] = !0,
                                n++;
                        n = 0;
                        for (; n < s.length;)
                            o[s[n].identifier] && a.push(s[n]),
                            e & (O | R) && delete o[s[n].identifier],
                            n++;
                        return a.length ? [function(t, n, e) {
                            for (var i = [], r = [], o = 0; o < t.length;) {
                                var s = n ? t[o][n] : t[o];
                                at(r, s) < 0 && i.push(t[o]),
                                r[o] = s,
                                o++
                            }
                            return e && (i = n ? i.sort(function(t, e) {
                                return t[n] > e[n]
                            }) : i.sort()), i
                        }(i.concat(a), "identifier", !0), a] : void 0
                    }.call(this, t, e);
                n && this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: T,
                    srcEvent: t
                })
            }, n
        }(st);
    var vt = {
            mousedown: z,
            mousemove: 2,
            mouseup: O
        },
        mt = function(n) {
            function i() {
                var t,
                    e = i.prototype;
                return e.evEl = "mousedown", e.evWin = "mousemove mouseup", (t = n.apply(this, arguments) || this).pressed = !1, t
            }
            return s(i, n), i.prototype.handler = function(t) {
                var e = vt[t.type];
                e & z && 0 === t.button && (this.pressed = !0),
                2 & e && 1 !== t.which && (e = O),
                this.pressed && (e & O && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: A,
                    srcEvent: t
                }))
            }, i
        }(st),
        Pt = 2500,
        xt = 25;
    function Et(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var n = {
                    x: e.clientX,
                    y: e.clientY
                },
                i = this.lastTouches;
            this.lastTouches.push(n);
            setTimeout(function() {
                var t = i.indexOf(n);
                -1 < t && i.splice(t, 1)
            }, Pt)
        }
    }
    var yt = function() {
        return function(n) {
            function t(t, e) {
                var o;
                return (o = n.call(this, t, e) || this).handler = function(t, e, n) {
                    var i = n.pointerType === T,
                        r = n.pointerType === A;
                    if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                        if (i)
                            (function(t, e) {
                                t & z ? (this.primaryTouch = e.changedPointers[0].identifier, Et.call(this, e)) : t & (O | R) && Et.call(this, e)
                            }).call(l(l(o)), e, n);
                        else if (r && function(t) {
                            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                                var r = this.lastTouches[i],
                                    o = Math.abs(e - r.x),
                                    s = Math.abs(n - r.y);
                                if (o <= xt && s <= xt)
                                    return !0
                            }
                            return !1
                        }.call(l(l(o)), n))
                            return;
                        o.callback(t, e, n)
                    }
                }, o.touch = new dt(o.manager, o.handler), o.mouse = new mt(o.manager, o.handler), o.primaryTouch = null, o.lastTouches = [], o
            }
            return s(t, n), t.prototype.destroy = function() {
                this.touch.destroy(),
                this.mouse.destroy()
            }, t
        }(st)
    }();
    function bt(t, e, n) {
        return !!Array.isArray(t) && (j(t, n[e], n), !0)
    }
    var Ct = 1;
    function St(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
    }
    function wt(t) {
        return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
    }
    var It = function() {
            function t(t) {
                void 0 === t && (t = {}),
                this.options = o({
                    enable: !0
                }, t),
                this.id = Ct++,
                this.manager = null,
                this.state = 1,
                this.simultaneous = {},
                this.requireFail = []
            }
            var e = t.prototype;
            return e.set = function(t) {
                return h(this.options, t), this.manager && this.manager.touchAction.update(), this
            }, e.recognizeWith = function(t) {
                if (bt(t, "recognizeWith", this))
                    return this;
                var e = this.simultaneous;
                return e[(t = St(t, this)).id] || (e[t.id] = t).recognizeWith(this), this
            }, e.dropRecognizeWith = function(t) {
                return bt(t, "dropRecognizeWith", this) || (t = St(t, this), delete this.simultaneous[t.id]), this
            }, e.requireFailure = function(t) {
                if (bt(t, "requireFailure", this))
                    return this;
                var e = this.requireFail;
                return -1 === at(e, t = St(t, this)) && (e.push(t), t.requireFailure(this)), this
            }, e.dropRequireFailure = function(t) {
                if (bt(t, "dropRequireFailure", this))
                    return this;
                t = St(t, this);
                var e = at(this.requireFail, t);
                return -1 < e && this.requireFail.splice(e, 1), this
            }, e.hasRequireFailures = function() {
                return 0 < this.requireFail.length
            }, e.canRecognizeWith = function(t) {
                return !!this.simultaneous[t.id]
            }, e.emit = function(e) {
                var n = this,
                    t = this.state;
                function i(t) {
                    n.manager.emit(t, e)
                }
                t < 8 && i(n.options.event + wt(t)),
                i(n.options.event),
                e.additionalEvent && i(e.additionalEvent),
                8 <= t && i(n.options.event + wt(t))
            }, e.tryEmit = function(t) {
                if (this.canEmit())
                    return this.emit(t);
                this.state = 32
            }, e.canEmit = function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(33 & this.requireFail[t].state))
                        return !1;
                    t++
                }
                return !0
            }, e.recognize = function(t) {
                var e = h({}, t);
                if (!Y(this.options.enable, [this, e]))
                    return this.reset(), void (this.state = 32);
                56 & this.state && (this.state = 1),
                this.state = this.process(e),
                30 & this.state && this.tryEmit(e)
            }, e.process = function(t) {}, e.getTouchAction = function() {}, e.reset = function() {}, t
        }(),
        Tt = {
            domEvents: !1,
            touchAction: v,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
    function At(n, i) {
        var r,
            o = n.element;
        o.style && (j(n.options.cssProps, function(t, e) {
            r = p(o.style, e),
            o.style[r] = i ? (n.oldCssProps[r] = o.style[r], t) : n.oldCssProps[r] || ""
        }), i || (n.oldCssProps = {}))
    }
    var Mt = function() {
            function t(t, e) {
                var n,
                    i = this;
                this.options = h({}, Tt, e || {}),
                this.options.inputTarget = this.options.inputTarget || t,
                this.handlers = {},
                this.session = {},
                this.recognizers = [],
                this.oldCssProps = {},
                this.element = t,
                this.input = new ((n = this).options.inputClass || (w ? ft : I ? dt : S ? yt : mt))(n, et),
                this.touchAction = new G(this, this.options.touchAction),
                At(this, !0),
                j(this.options.recognizers, function(t) {
                    var e = i.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]),
                    t[3] && e.requireFailure(t[3])
                }, this)
            }
            var e = t.prototype;
            return e.set = function(t) {
                return h(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            }, e.stop = function(t) {
                this.session.stopped = t ? 2 : 1
            }, e.recognize = function(t) {
                var e = this.session;
                if (!e.stopped) {
                    var n;
                    this.touchAction.preventDefaults(t);
                    var i = this.recognizers,
                        r = e.curRecognizer;
                    (!r || r && 8 & r.state) && (r = e.curRecognizer = null);
                    for (var o = 0; o < i.length;)
                        n = i[o],
                        2 === e.stopped || r && n !== r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t),
                        !r && 14 & n.state && (r = e.curRecognizer = n),
                        o++
                }
            }, e.get = function(t) {
                if (t instanceof It)
                    return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++)
                    if (e[n].options.event === t)
                        return e[n];
                return null
            }, e.add = function(t) {
                if (bt(t, "add", this))
                    return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), t
            }, e.remove = function(t) {
                if (bt(t, "remove", this))
                    return this;
                var e = this.get(t);
                if (t) {
                    var n = this.recognizers,
                        i = at(n, e);
                    -1 !== i && (n.splice(i, 1), this.touchAction.update())
                }
                return this
            }, e.on = function(t, e) {
                if (void 0 === t || void 0 === e)
                    return this;
                var n = this.handlers;
                return j(nt(t), function(t) {
                    n[t] = n[t] || [],
                    n[t].push(e)
                }), this
            }, e.off = function(t, e) {
                if (void 0 === t)
                    return this;
                var n = this.handlers;
                return j(nt(t), function(t) {
                    e ? n[t] && n[t].splice(at(n[t], e), 1) : delete n[t]
                }), this
            }, e.emit = function(t, e) {
                var n,
                    i,
                    r;
                this.options.domEvents && (n = t, i = e, (r = document.createEvent("Event")).initEvent(n, !0, !0), (r.gesture = i).target.dispatchEvent(r));
                var o = this.handlers[t] && this.handlers[t].slice();
                if (o && o.length) {
                    e.type = t,
                    e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var s = 0; s < o.length;)
                        o[s](e),
                        s++
                }
            }, e.destroy = function() {
                this.element && At(this, !1),
                this.handlers = {},
                this.session = {},
                this.input.destroy(),
                this.element = null
            }, t
        }(),
        zt = function(e) {
            function t(t) {
                return void 0 === t && (t = {}), e.call(this, o({
                    pointers: 1
                }, t)) || this
            }
            s(t, e);
            var n = t.prototype;
            return n.attrTest = function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            }, n.process = function(t) {
                var e = this.state,
                    n = t.eventType,
                    i = 6 & e,
                    r = this.attrTest(t);
                return i && (n & R || !r) ? 16 | e : i || r ? n & O ? 8 | e : 2 & e ? 4 | e : 2 : 32
            }, t
        }(It);
    var Ot = function(i) {
            function t(t) {
                var e;
                return void 0 === t && (t = {}), (e = i.call(this, o({
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: L
                }, t)) || this).pX = null, e.pY = null, e
            }
            s(t, i);
            var e = t.prototype;
            return e.getTouchAction = function() {
                var t = this.options.direction,
                    e = [];
                return t & B && e.push(E), t & V && e.push(x), e
            }, e.directionTest = function(t) {
                var e = this.options,
                    n = !0,
                    i = t.distance,
                    r = t.direction,
                    o = t.deltaX,
                    s = t.deltaY;
                return r & e.direction || (i = e.direction & B ? (r = 0 === o ? N : o < 0 ? _ : k, n = o !== this.pX, Math.abs(t.deltaX)) : (r = 0 === s ? N : s < 0 ? H : D, n = s !== this.pY, Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
            }, e.attrTest = function(t) {
                return zt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
            }, e.emit = function(t) {
                this.pX = t.deltaX,
                this.pY = t.deltaY;
                var e,
                    n = (e = t.direction) === D ? "down" : e === H ? "up" : e === _ ? "left" : e === k ? "right" : "";
                n && (t.additionalEvent = this.options.event + n),
                i.prototype.emit.call(this, t)
            }, t
        }(zt),
        Rt = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        };
    var Nt,
        _t = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var r in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        };
    Nt = "undefined" == typeof window ? {} : window;
    var kt = 1e5,
        Ht = function() {
            if ("undefined" == typeof document)
                return "";
            for (var t = (document.head || document.getElementsByTagName("head")[0]).style, e = ["transform", "webkitTransform", "msTransform", "mozTransform"], n = 0, i = e.length; n < i; n++)
                if (e[n] in t)
                    return e[n];
            return ""
        }();
    function Dt(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++)
            e.push(t[n]);
        return e
    }
    var Bt = Nt.requestAnimationFrame || Nt.webkitRequestAnimationFrame,
        Vt = Nt.cancelAnimationFrame || Nt.webkitCancelAnimationFrame;
    if (Bt && !Vt) {
        var Lt = {},
            Ft = Bt;
        Bt = function(e) {
            var n = Ft(function(t) {
                Lt[n] && e(t)
            });
            return Lt[n] = !0, n
        },
        Vt = function(t) {
            delete Lt[t]
        }
    } else
        Bt && Vt || (Bt = function(t) {
            return Nt.setTimeout(function() {
                t(Nt.performance && Nt.performance.now && Nt.performance.now() || (new Date).getTime())
            }, 16)
        }, Vt = Nt.clearTimeout);
    function Xt(t) {
        return jt(t, function(t) {
            return Wt(t)
        })
    }
    function jt(t, e) {
        var n = {};
        for (var i in t)
            i && (n[i] = e(t[i], i));
        return n
    }
    function Yt(t, e) {
        var n = {};
        for (var i in t)
            i && e(t[i], i) && (n[i] = t[i]);
        return n
    }
    function qt(t, e) {
        for (var n in t)
            if (n && !e(t[n], n))
                return !1;
        return !0
    }
    function Gt(t, n) {
        return qt(t, function(t, e) {
            return t === n[e]
        })
    }
    function Wt(t) {
        return Math.round(t * kt) / kt
    }
    function Ut(t, e, n, i) {
        var r = t,
            o = [n[0] ? e[0] : i ? e[0] - i[0] : e[0], n[1] ? e[1] : i ? e[1] + i[1] : e[1]];
        return r = Math.max(o[0], r), +Wt(r = Math.min(o[1], r))
    }
    function Jt(t, e) {
        return t < e[0] || t > e[1]
    }
    function Qt(t, e, n) {
        return n[1] && t > e[1] || n[0] && t < e[0]
    }
    function Zt(t, e, n, i) {
        var r = t,
            o = e[0],
            s = e[1],
            a = s - o;
        return n[1] && s < t && (r = (r - s) % a + o), n[0] && t < o && (r = (r - o) % a + s), i ? r : +Wt(r)
    }
    function Kt(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }
    var $t = function() {
            function t(t) {
                var e = t.options,
                    n = t.itm,
                    i = t.em,
                    r = t.axm;
                this.options = e,
                this.itm = n,
                this.em = i,
                this.axm = r,
                this.animationEnd = this.animationEnd.bind(this)
            }
            var e = t.prototype;
            return e.getDuration = function(o, t, e) {
                var n,
                    s = this;
                if (void 0 !== e)
                    n = e;
                else {
                    var i = jt(t, function(t, e) {
                        return n = Math.abs(t - o[e]), i = s.options.deceleration, (r = Math.sqrt(n / i * 2)) < 100 ? 0 : r;
                        var n,
                            i,
                            r
                    });
                    n = Object.keys(i).reduce(function(t, e) {
                        return Math.max(t, i[e])
                    }, -1 / 0)
                }
                return Kt(n, this.options.minimumDuration, this.options.maximumDuration)
            }, e.createAnimationParam = function(t, e, n) {
                var i = this.axm.get(),
                    r = t,
                    o = n && n.event || null;
                return {
                    depaPos: i,
                    destPos: r,
                    duration: Kt(e, this.options.minimumDuration, this.options.maximumDuration),
                    delta: this.axm.getDelta(i, r),
                    inputEvent: o,
                    input: n && n.input || null,
                    isTrusted: !!o,
                    done: this.animationEnd
                }
            }, e.grab = function(t, e) {
                if (this._animateParam && t.length) {
                    var n = this.axm.get(t),
                        i = this.axm.map(n, function(t, e) {
                            return Zt(t, e.range, e.circular, !1)
                        });
                    qt(i, function(t, e) {
                        return n[e] === t
                    }) || this.em.triggerChange(i, !1, n, e, !!e),
                    this._animateParam = null,
                    this._raf && (r = this._raf, Vt(r)),
                    this._raf = null,
                    this.em.triggerAnimationEnd(!(!e || !e.event))
                }
                var r
            }, e.getEventInfo = function() {
                return this._animateParam && this._animateParam.input && this._animateParam.inputEvent ? {
                    input: this._animateParam.input,
                    event: this._animateParam.inputEvent
                } : null
            }, e.restore = function(t) {
                var e = this.axm.get(),
                    n = this.axm.map(e, function(t, e) {
                        return Math.min(e.range[1], Math.max(e.range[0], t))
                    });
                this.animateTo(n, this.getDuration(e, n), t)
            }, e.animationEnd = function() {
                var t = this.getEventInfo();
                this._animateParam = null;
                var e = this.axm.filter(this.axm.get(), function(t, e) {
                    return Qt(t, e.range, e.circular)
                });
                0 < Object.keys(e).length && this.setTo(this.axm.map(e, function(t, e) {
                    return Zt(t, e.range, e.circular, !1)
                })),
                this.itm.setInterrupt(!1),
                this.em.triggerAnimationEnd(!!t),
                this.axm.isOutside() ? this.restore(t) : this.finish(!!t)
            }, e.finish = function(t) {
                this._animateParam = null,
                this.itm.setInterrupt(!1),
                this.em.triggerFinish(t)
            }, e.animateLoop = function(s, a) {
                if (s.duration) {
                    this._animateParam = _t({}, s);
                    var l = this._animateParam,
                        u = this,
                        h = l.depaPos,
                        c = 0,
                        f = jt(h, function(t, e) {
                            return t <= l.destPos[e] ? 1 : -1
                        }),
                        p = (new Date).getTime();
                    l.startTime = p,
                    function t() {
                        u._raf = null;
                        var e = (new Date).getTime(),
                            n = u.easing((e - l.startTime) / s.duration),
                            i = jt(h, function(t, e) {
                                return t + l.delta[e] * (n - c)
                            });
                        i = u.axm.map(i, function(t, e, n) {
                            var i = Zt(t, e.range, e.circular, !0);
                            return t !== i && (s.destPos[n] += -f[n] * (e.range[1] - e.range[0]), h[n] += -f[n] * (e.range[1] - e.range[0])), i
                        });
                        var r = !u.em.triggerChange(i, !1, Xt(h));
                        if (h = i, p = e, 1 <= (c = n)) {
                            var o = s.destPos;
                            return Gt(o, u.axm.get(Object.keys(o))) || u.em.triggerChange(o, !0, Xt(h)), void a()
                        }
                        r ? u.finish(!1) : u._raf = Bt(t)
                    }()
                } else
                    this.em.triggerChange(s.destPos, !0),
                    a()
            }, e.getUserControll = function(t) {
                var e = t.setTo();
                return e.destPos = this.axm.get(e.destPos), e.duration = Kt(e.duration, this.options.minimumDuration, this.options.maximumDuration), e
            }, e.animateTo = function(t, e, n) {
                var i = this,
                    r = this.createAnimationParam(t, e, n),
                    o = _t({}, r.depaPos),
                    s = this.em.triggerAnimationStart(r),
                    a = this.getUserControll(r);
                if (!s && this.axm.every(a.destPos, function(t, e) {
                    return Qt(t, e.range, e.circular)
                }) && console.warn("You can't stop the 'animation' event when 'circular' is true."), s && !Gt(a.destPos, o)) {
                    var l = n && n.event || null;
                    this.animateLoop({
                        depaPos: o,
                        destPos: a.destPos,
                        duration: a.duration,
                        delta: this.axm.getDelta(o, a.destPos),
                        isTrusted: !!l,
                        inputEvent: l,
                        input: n && n.input || null
                    }, function() {
                        return i.animationEnd()
                    })
                }
            }, e.easing = function(t) {
                return 1 < t ? 1 : this.options.easing(t)
            }, e.setTo = function(t, e) {
                void 0 === e && (e = 0);
                var n = Object.keys(t);
                this.grab(n);
                var i = this.axm.get(n);
                if (Gt(t, i))
                    return this;
                this.itm.setInterrupt(!0);
                var r = Yt(t, function(t, e) {
                    return i[e] !== t
                });
                return Object.keys(r).length && (Gt(r = this.axm.map(r, function(t, e) {
                    var n = e.range,
                        i = e.circular;
                    return i && (i[0] || i[1]) ? t : Ut(t, n, i)
                }), i) || (0 < e ? this.animateTo(r, e) : (this.em.triggerChange(r), this.finish(!1)))), this
            }, e.setBy = function(n, t) {
                return void 0 === t && (t = 0), this.setTo(jt(this.axm.get(Object.keys(n)), function(t, e) {
                    return t + n[e]
                }), t)
            }, t
        }(),
        te = function() {
            function t(t) {
                this.axes = t
            }
            var e = t.prototype;
            return e.triggerHold = function(t, e) {
                this.axes.trigger("hold", {
                    pos: t,
                    input: e.input || null,
                    inputEvent: e.event || null,
                    isTrusted: !0
                })
            }, e.triggerRelease = function(t) {
                t.setTo = this.createUserControll(t.destPos, t.duration),
                this.axes.trigger("release", t)
            }, e.triggerChange = function(t, e, n, i, r) {
                void 0 === r && (r = !1);
                var o = this.am,
                    s = o.axm,
                    a = o.getEventInfo(),
                    l = s.moveTo(t, e, n),
                    u = i && i.event || a && a.event || null,
                    h = {
                        pos: l.pos,
                        delta: l.delta,
                        holding: r,
                        inputEvent: u,
                        isTrusted: !!u,
                        input: i && i.input || a && a.input || null,
                        set: u ? this.createUserControll(l.pos) : function() {}
                    },
                    c = this.axes.trigger("change", h);
                return u && s.set(h.set().destPos), c
            }, e.triggerAnimationStart = function(t) {
                return t.setTo = this.createUserControll(t.destPos, t.duration), this.axes.trigger("animationStart", t)
            }, e.triggerAnimationEnd = function(t) {
                void 0 === t && (t = !1),
                this.axes.trigger("animationEnd", {
                    isTrusted: t
                })
            }, e.triggerFinish = function(t) {
                void 0 === t && (t = !1),
                this.axes.trigger("finish", {
                    isTrusted: t
                })
            }, e.createUserControll = function(t, e) {
                void 0 === e && (e = 0);
                var n = {
                    destPos: _t({}, t),
                    duration: e
                };
                return function(t, e) {
                    return t && (n.destPos = _t({}, t)), void 0 !== e && (n.duration = e), n
                }
            }, e.setAnimationManager = function(t) {
                this.am = t
            }, e.destroy = function() {
                this.axes.off()
            }, t
        }(),
        ee = function() {
            function t(t) {
                this.options = t,
                this._prevented = !1
            }
            var e = t.prototype;
            return e.isInterrupting = function() {
                return this.options.interruptable || this._prevented
            }, e.isInterrupted = function() {
                return !this.options.interruptable && this._prevented
            }, e.setInterrupt = function(t) {
                !this.options.interruptable && (this._prevented = t)
            }, t
        }(),
        ne = function() {
            function t(t, e) {
                var n = this;
                this.axis = t,
                this.options = e,
                this._complementOptions(),
                this._pos = Object.keys(this.axis).reduce(function(t, e) {
                    return t[e] = n.axis[e].range[0], t
                }, {})
            }
            var e = t.prototype;
            return e._complementOptions = function() {
                var r = this;
                Object.keys(this.axis).forEach(function(i) {
                    r.axis[i] = _t({
                        range: [0, 100],
                        bounce: [0, 0],
                        circular: [!1, !1]
                    }, r.axis[i]),
                    ["bounce", "circular"].forEach(function(t) {
                        var e = r.axis,
                            n = e[i][t];
                        /string|number|boolean/.test(typeof n) && (e[i][t] = [n, n])
                    })
                })
            }, e.getDelta = function(t, e) {
                var n = this.get(t);
                return jt(this.get(e), function(t, e) {
                    return t - n[e]
                })
            }, e.get = function(t) {
                var n = this;
                return t && Array.isArray(t) ? t.reduce(function(t, e) {
                    return e && e in n._pos && (t[e] = n._pos[e]), t
                }, {}) : _t({}, this._pos, t || {})
            }, e.moveTo = function(n, i, r) {
                void 0 === r && (r = this._pos);
                var t = jt(this._pos, function(t, e) {
                    return e in n && e in r ? n[e] - r[e] : 0
                });
                return this.set(this.map(n, function(t, e) {
                    return e ? Zt(t, e.range, e.circular, i) : 0
                })), {
                    pos: _t({}, this._pos),
                    delta: t
                }
            }, e.set = function(t) {
                for (var e in t)
                    e && e in this._pos && (this._pos[e] = t[e])
            }, e.every = function(t, n) {
                var i = this.axis;
                return qt(t, function(t, e) {
                    return n(t, i[e], e)
                })
            }, e.filter = function(t, n) {
                var i = this.axis;
                return Yt(t, function(t, e) {
                    return n(t, i[e], e)
                })
            }, e.map = function(t, n) {
                var i = this.axis;
                return jt(t, function(t, e) {
                    return n(t, i[e], e)
                })
            }, e.isOutside = function(t) {
                return !this.every(t ? this.get(t) : this._pos, function(t, e) {
                    return !Jt(t, e.range)
                })
            }, t
        }(),
        ie = function() {
            function t(t) {
                var e = t.options,
                    n = t.itm,
                    i = t.em,
                    r = t.axm,
                    o = t.am;
                this.isOutside = !1,
                this.moveDistance = null,
                this.isStopped = !1,
                this.options = e,
                this.itm = n,
                this.em = i,
                this.axm = r,
                this.am = o
            }
            var e = t.prototype;
            return e.atOutside = function(t) {
                var s = this;
                if (this.isOutside)
                    return this.axm.map(t, function(t, e) {
                        var n = e.range[0] - e.bounce[0],
                            i = e.range[1] + e.bounce[1];
                        return i < t ? i : t < n ? n : t
                    });
                var a = this.am.easing(1e-5) / 1e-5;
                return this.axm.map(t, function(t, e) {
                    var n = e.range[0],
                        i = e.range[1],
                        r = e.bounce,
                        o = e.circular;
                    return o && (o[0] || o[1]) ? t : t < n ? n - s.am.easing((n - t) / (r[0] * a)) * r[0] : i < t ? i + s.am.easing((t - i) / (r[1] * a)) * r[1] : t
                })
            }, e.get = function(t) {
                return this.axm.get(t.axes)
            }, e.hold = function(t, e) {
                if (!this.itm.isInterrupted() && t.axes.length) {
                    var n = {
                        input: t,
                        event: e
                    };
                    this.isStopped = !1,
                    this.itm.setInterrupt(!0),
                    this.am.grab(t.axes, n),
                    !this.moveDistance && this.em.triggerHold(this.axm.get(), n),
                    this.isOutside = this.axm.isOutside(t.axes),
                    this.moveDistance = this.axm.get(t.axes)
                }
            }, e.change = function(t, e, n) {
                if (!this.isStopped && this.itm.isInterrupting() && !this.axm.every(n, function(t) {
                    return 0 === t
                })) {
                    var i,
                        r = this.moveDistance || this.axm.get(t.axes);
                    i = jt(r, function(t, e) {
                        return t + (n[e] || 0)
                    }),
                    this.moveDistance && (this.moveDistance = i),
                    this.isOutside && this.axm.every(r, function(t, e) {
                        return !Jt(t, e.range)
                    }) && (this.isOutside = !1),
                    r = this.atOutside(r),
                    i = this.atOutside(i),
                    !this.em.triggerChange(i, !1, r, {
                        input: t,
                        event: e
                    }, !0) && (this.isStopped = !0, this.moveDistance = null, this.am.finish(!1))
                }
            }, e.release = function(t, e, n, i) {
                if (!this.isStopped && this.itm.isInterrupting() && this.moveDistance) {
                    var r = this.axm.get(t.axes),
                        o = this.axm.get(),
                        s = this.axm.get(this.axm.map(n, function(t, e, n) {
                            return e.circular && (e.circular[0] || e.circular[1]) ? r[n] + t : Ut(r[n] + t, e.range, e.circular, e.bounce)
                        })),
                        a = this.am.getDuration(s, r, i);
                    0 === a && (s = _t({}, o));
                    var l = {
                        depaPos: o,
                        destPos: s,
                        duration: a,
                        delta: this.axm.getDelta(o, s),
                        inputEvent: e,
                        input: t,
                        isTrusted: !0
                    };
                    this.em.triggerRelease(l),
                    this.moveDistance = null;
                    var u = this.am.getUserControll(l),
                        h = Gt(u.destPos, o),
                        c = {
                            input: t,
                            event: e
                        };
                    h || 0 === u.duration ? (!h && this.em.triggerChange(u.destPos, !1, o, c, !0), this.itm.setInterrupt(!1), this.axm.isOutside() ? this.am.restore(c) : this.em.triggerFinish(!0)) : this.am.animateTo(u.destPos, u.duration, c)
                }
            }, t
        }(),
        re = function(r) {
            function t(t, e, n) {
                void 0 === t && (t = {}),
                void 0 === e && (e = {});
                var i = r.call(this) || this;
                return i.axis = t, i._inputs = [], i.options = _t({
                    easing: function(t) {
                        return 1 - Math.pow(1 - t, 3)
                    },
                    interruptable: !0,
                    maximumDuration: 1 / 0,
                    minimumDuration: 0,
                    deceleration: 6e-4
                }, e), i.itm = new ee(i.options), i.axm = new ne(i.axis, i.options), i.em = new te(i), i.am = new $t(i), i.io = new ie(i), i.em.setAnimationManager(i.am), n && i.em.triggerChange(n), i
            }
            !function(t, e) {
                function n() {
                    this.constructor = t
                }
                Rt(t, e),
                t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }(t, r);
            var e = t.prototype;
            return e.connect = function(t, e) {
                var n;
                if (n = "string" == typeof t ? t.split(" ") : t.concat(), ~this._inputs.indexOf(e) && this.disconnect(e), "hammer" in e) {
                    var i = this._inputs.filter(function(t) {
                        return t.hammer && t.element === e.element
                    });
                    i.length && (e.hammer = i[0].hammer)
                }
                return e.mapAxes(n), e.connect(this.io), this._inputs.push(e), this
            }, e.disconnect = function(t) {
                if (t) {
                    var e = this._inputs.indexOf(t);
                    0 <= e && (this._inputs[e].disconnect(), this._inputs.splice(e, 1))
                } else
                    this._inputs.forEach(function(t) {
                        return t.disconnect()
                    }),
                    this._inputs = [];
                return this
            }, e.get = function(t) {
                return this.axm.get(t)
            }, e.setTo = function(t, e) {
                return void 0 === e && (e = 0), this.am.setTo(t, e), this
            }, e.setBy = function(t, e) {
                return void 0 === e && (e = 0), this.am.setBy(t, e), this
            }, e.isBounceArea = function(t) {
                return this.axm.isOutside(t)
            }, e.destroy = function() {
                this.disconnect(),
                this.em.destroy()
            }, t.VERSION = "2.5.13", t.TRANSFORM = Ht, t.DIRECTION_NONE = N, t.DIRECTION_LEFT = _, t.DIRECTION_RIGHT = k, t.DIRECTION_UP = H, t.DIRECTION_DOWN = D, t.DIRECTION_HORIZONTAL = B, t.DIRECTION_VERTICAL = V, t.DIRECTION_ALL = L, t
        }(t),
        oe = "PointerEvent" in Nt || "MSPointerEvent" in Nt,
        se = "ontouchstart" in Nt,
        ae = "_EGJS_AXES_INPUTTYPE_";
    function le(i, t) {
        return t.reduce(function(t, e, n) {
            return i[n] && (t[i[n]] = e), t
        }, {})
    }
    function ue(t, e, n) {
        return n ? !!(e === L || e & t && n & t) : !!(e & t)
    }
    var he = function() {
            function t(t, e) {
                if (this.axes = [], this.hammer = null, this.element = null, this.panRecognizer = null, void 0 === Mt)
                    throw new Error("The Hammerjs must be loaded before eg.Axes.PanInput.\nhttp://hammerjs.github.io/");
                this.element = function e(t, n) {
                    var i;
                    if (void 0 === n && (n = !1), "string" == typeof t) {
                        if (t.match(/^<([a-z]+)\s*([^>]*)>/)) {
                            var r = document.createElement("div");
                            r.innerHTML = t,
                            i = Dt(r.childNodes)
                        } else
                            i = Dt(document.querySelectorAll(t));
                        n || (i = 1 <= i.length ? i[0] : void 0)
                    } else
                        t === Nt ? i = t : !t.nodeName || 1 !== t.nodeType && 9 !== t.nodeType ? "jQuery" in Nt && t instanceof jQuery || t.constructor.prototype.jquery ? i = n ? t.toArray() : t.get(0) : Array.isArray(t) && (i = t.map(function(t) {
                            return e(t)
                        }), n || (i = 1 <= i.length ? i[0] : void 0)) : i = t;
                    return i
                }(t),
                this.options = _t({
                    inputType: ["touch", "mouse", "pointer"],
                    scale: [1, 1],
                    thresholdAngle: 45,
                    threshold: 0,
                    hammerManagerOptions: {
                        cssProps: {
                            userSelect: "none",
                            touchSelect: "none",
                            touchCallout: "none",
                            userDrag: "none"
                        }
                    }
                }, e),
                this.onHammerInput = this.onHammerInput.bind(this),
                this.onPanmove = this.onPanmove.bind(this),
                this.onPanend = this.onPanend.bind(this)
            }
            var e = t.prototype;
            return e.mapAxes = function(t) {
                var e = !!t[0],
                    n = !!t[1];
                this._direction = e && n ? L : e ? B : n ? V : N,
                this.axes = t
            }, e.connect = function(t) {
                var e = {
                    direction: this._direction,
                    threshold: this.options.threshold
                };
                if (this.hammer)
                    this.removeRecognizer(),
                    this.dettachEvent();
                else {
                    var n = this.element[ae];
                    n || (n = String(Math.round(Math.random() * (new Date).getTime())));
                    var i = function(t) {
                        void 0 === t && (t = []);
                        var e = !1,
                            n = !1,
                            i = !1;
                        return t.forEach(function(t) {
                            switch (t) {
                            case "mouse":
                                n = !0;
                                break;
                            case "touch":
                                e = se;
                                break;
                            case "pointer":
                                i = oe
                            }
                        }), i ? ft : e && n ? yt : e ? dt : n ? mt : null
                    }(this.options.inputType);
                    if (!i)
                        throw new Error("Wrong inputType parameter!");
                    this.hammer = function(t, e) {
                        try {
                            return new Mt(t, _t({}, e))
                        } catch (t) {
                            return null
                        }
                    }(this.element, _t({
                        inputClass: i
                    }, this.options.hammerManagerOptions)),
                    this.element[ae] = n
                }
                return this.panRecognizer = new Ot(e), this.hammer.add(this.panRecognizer), this.attachEvent(t), this
            }, e.disconnect = function() {
                return this.removeRecognizer(), this.hammer && this.dettachEvent(), this._direction = N, this
            }, e.destroy = function() {
                this.disconnect(),
                this.hammer && 0 === this.hammer.recognizers.length && this.hammer.destroy(),
                delete this.element[ae],
                this.element = null,
                this.hammer = null
            }, e.enable = function() {
                return this.hammer && (this.hammer.get("pan").options.enable = !0), this
            }, e.disable = function() {
                return this.hammer && (this.hammer.get("pan").options.enable = !1), this
            }, e.isEnable = function() {
                return !(!this.hammer || !this.hammer.get("pan").options.enable)
            }, e.removeRecognizer = function() {
                this.hammer && this.panRecognizer && (this.hammer.remove(this.panRecognizer), this.panRecognizer = null)
            }, e.onHammerInput = function(t) {
                this.isEnable() && (t.isFirst ? this.observer.hold(this, t) : t.isFinal && this.onPanend(t))
            }, e.onPanmove = function(t) {
                var e = function(t, e) {
                        if (e < 0 || 90 < e)
                            return N;
                        var n = Math.abs(t);
                        return e < n && n < 180 - e ? V : B
                    }(t.angle, this.options.thresholdAngle),
                    n = this.hammer.session.prevInput;
                t.offsetY = n ? (t.offsetX = t.deltaX - n.deltaX, t.deltaY - n.deltaY) : t.offsetX = 0;
                var i = this.getOffset([t.offsetX, t.offsetY], [ue(B, this._direction, e), ue(V, this._direction, e)]),
                    r = i.some(function(t) {
                        return 0 !== t
                    });
                r && (t.srcEvent.preventDefault(), t.srcEvent.stopPropagation()),
                (t.preventSystemEvent = r) && this.observer.change(this, t, le(this.axes, i))
            }, e.onPanend = function(t) {
                var e,
                    n,
                    i,
                    r,
                    o = this.getOffset([Math.abs(t.velocityX) * (t.deltaX < 0 ? -1 : 1), Math.abs(t.velocityY) * (t.deltaY < 0 ? -1 : 1)], [ue(B, this._direction), ue(V, this._direction)]);
                e = o,
                n = this.observer.options.deceleration,
                i = Math.sqrt(e[0] * e[0] + e[1] * e[1]),
                r = Math.abs(i / -n),
                o = [e[0] / 2 * r, e[1] / 2 * r],
                this.observer.release(this, t, le(this.axes, o))
            }, e.attachEvent = function(t) {
                this.observer = t,
                this.hammer.on("hammer.input", this.onHammerInput).on("panstart panmove", this.onPanmove)
            }, e.dettachEvent = function() {
                this.hammer.off("hammer.input", this.onHammerInput).off("panstart panmove", this.onPanmove),
                this.observer = null
            }, e.getOffset = function(t, e) {
                var n = [0, 0],
                    i = this.options.scale;
                return e[0] && (n[0] = t[0] * i[0]), e[1] && (n[1] = t[1] * i[1]), n
            }, t
        }(),
        ce = {
            SNAP: "snap",
            FREE_SCROLL: "freeScroll"
        },
        fe = {
            snap: {
                type: "snap",
                count: 1
            },
            freeScroll: {
                type: "freeScroll"
            }
        },
        pe = "undefined" != typeof document,
        ge = {
            classPrefix: "eg-flick",
            deceleration: .0075,
            horizontal: !0,
            circular: !1,
            infinite: !1,
            infiniteThreshold: 0,
            lastIndex: 1 / 0,
            threshold: 40,
            duration: 100,
            panelEffect: function(t) {
                return 1 - Math.pow(1 - t, 3)
            },
            defaultIndex: 0,
            inputType: ["touch", "mouse"],
            thresholdAngle: 45,
            bounce: 10,
            autoResize: !1,
            adaptive: !1,
            zIndex: 2e3,
            bound: !1,
            overflow: !1,
            hanger: "50%",
            anchor: "50%",
            gap: 0,
            moveType: fe.snap,
            useOffset: !1,
            isEqualSize: !1,
            isConstantSize: !1,
            renderOnlyVisible: !1,
            renderExternal: !1,
            collectStatistics: !0
        },
        de = {
            position: "relative",
            zIndex: ge.zIndex,
            overflow: "hidden"
        },
        ve = {
            width: "100%",
            height: "100%",
            willChange: "transform"
        },
        me = {
            position: "absolute"
        },
        Pe = {
            HOLD_START: "holdStart",
            HOLD_END: "holdEnd",
            MOVE_START: "moveStart",
            MOVE: "move",
            MOVE_END: "moveEnd",
            CHANGE: "change",
            RESTORE: "restore",
            SELECT: "select",
            NEED_PANEL: "needPanel",
            VISIBLE_CHANGE: "visibleChange"
        },
        xe = {
            HOLD: "hold",
            CHANGE: "change",
            RELEASE: "release",
            ANIMATION_END: "animationEnd",
            FINISH: "finish"
        },
        Ee = 0,
        ye = 1,
        be = 2,
        Ce = 3,
        Se = 4,
        we = {
            PREV: "PREV",
            NEXT: "NEXT"
        },
        Ie = {
            prev: !0,
            next: !0,
            moveTo: !0,
            getIndex: !0,
            getAllPanels: !0,
            getCurrentPanel: !0,
            getElement: !0,
            getPanel: !0,
            getPanelCount: !0,
            getStatus: !0,
            getVisiblePanels: !0,
            enableInput: !0,
            disableInput: !0,
            destroy: !0,
            resize: !0,
            setStatus: !0,
            isPlaying: !0
        },
        Te = function() {
            var t = {
                webkitTransform: "-webkit-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                OTransform: "-o-transform",
                transform: "transform"
            };
            if (!pe)
                return {
                    name: t.transform,
                    has3d: !0
                };
            var e = document.documentElement.style,
                n = "";
            for (var i in t)
                i in e && (n = i);
            if (!n)
                throw new Error("Browser doesn't support CSS3 2D Transforms.");
            var r = document.createElement("div");
            document.documentElement.insertBefore(r, null),
            r.style[n] = "translate3d(1px, 1px, 1px)";
            var o = window.getComputedStyle(r).getPropertyValue(t[n]);
            r.parentElement.removeChild(r);
            var s = {
                name: n,
                has3d: 0 < o.length && "none" !== o
            };
            return Te = function() {
                return s
            }, s
        },
        Ae = Te();
    function Me(i) {
        for (var t = [], e = 1; e < arguments.length; e++)
            t[e - 1] = arguments[e];
        return t.forEach(function(n) {
            Object.keys(n).forEach(function(t) {
                var e = n[t];
                i[t] = e
            })
        }), i
    }
    function ze(t) {
        Array.isArray(t) || (t = [t]);
        var n = [];
        return t.forEach(function(t) {
            if (Oe(t)) {
                var e = document.createElement("div");
                for (e.innerHTML = t, n.push.apply(n, He(e.children)); e.firstChild;)
                    e.removeChild(e.firstChild)
            } else
                n.push(t)
        }), n
    }
    function Oe(t) {
        return "string" == typeof t
    }
    function Re(t, e) {
        return t.classList ? t.classList.contains(e) : 0 <= t.className.split(" ").indexOf(e)
    }
    function Ne(e, n) {
        Object.keys(n).forEach(function(t) {
            e.style[t] = n[t]
        })
    }
    function _e(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }
    function ke(t, e, n) {
        return e <= t && t <= n
    }
    function He(t) {
        return [].slice.call(t)
    }
    function De(t, e, n) {
        var i = null != n ? n : e / 2,
            r = /(?:(\+|\-)\s*)?(\d+(?:\.\d+)?(%|px)?)/g;
        if ("number" == typeof t)
            return _e(t, 0, e);
        for (var o = 0, s = 0, a = r.exec(t); null != a;) {
            var l = a[1],
                u = a[2],
                h = a[3],
                c = parseFloat(u);
            if (o <= 0 && (l = l || "+"), !l)
                return i;
            "%" === h && (c = c / 100 * e),
            s += "+" === l ? c : -c,
            ++o,
            a = r.exec(t)
        }
        return 0 === o ? i : _e(s, 0, e)
    }
    function Be(t, e) {
        var n = e[0],
            i = e[1],
            r = e[2];
        return i < t && r - i ? (t - i) / (r - i) : t < i && i - n ? (t - i) / (i - n) : t !== i && r - n ? (t - n) / (r - n) : 0
    }
    function Ve(t, e) {
        for (var n = 0; n < t.length; n += 1) {
            var i = t[n];
            if (i && e(i))
                return n
        }
        return -1
    }
    function Le(t) {
        for (var e = [], n = 0; n < t; n += 1)
            e[n] = n;
        return e
    }
    function Fe(t, e, n, i) {
        var r = i ? n - e + 1 : n - e;
        if (t < e)
            t = n - (i ? (e - t - 1) % r : (e - t) % r);
        else if (n < t) {
            t = e + (i ? (t - n - 1) % r : (t - n) % r)
        }
        return t
    }
    function Xe(t, e) {
        e.className ? t.setAttribute("class", e.className) : t.removeAttribute("class"),
        e.style ? t.setAttribute("style", e.style) : t.removeAttribute("style")
    }
    function je(t, e) {
        var n;
        if (e)
            n = {
                x: 0,
                y: 0,
                width: t.offsetWidth,
                height: t.offsetHeight
            };
        else {
            var i = t.getBoundingClientRect();
            n = {
                x: i.left,
                y: i.top,
                width: i.width,
                height: i.height
            }
        }
        return n
    }
    var Ye = function() {
            function l(t, e, n) {
                this.viewport = n,
                this.prevSibling = null,
                this.nextSibling = null,
                this.clonedPanels = [],
                this.state = {
                    index: e,
                    position: 0,
                    relativeAnchorPosition: 0,
                    size: 0,
                    isClone: !1,
                    isVirtual: !1,
                    cloneIndex: -1,
                    originalStyle: {
                        className: "",
                        style: ""
                    },
                    cachedBbox: null
                },
                this.setElement(t)
            }
            var t = l.prototype;
            return t.resize = function(t) {
                var n = this.state,
                    e = this.viewport.options,
                    i = t || this.getBbox();
                this.state.cachedBbox = i;
                var r = n.size;
                n.size = e.horizontal ? i.width : i.height,
                r !== n.size && (n.relativeAnchorPosition = De(e.anchor, n.size)),
                n.isClone || this.clonedPanels.forEach(function(t) {
                    var e = t.state;
                    e.size = n.size,
                    e.cachedBbox = n.cachedBbox,
                    e.relativeAnchorPosition = n.relativeAnchorPosition
                })
            }, t.unCacheBbox = function() {
                this.state.cachedBbox = null
            }, t.getProgress = function() {
                var t = this.viewport,
                    e = t.options,
                    n = t.panelManager.getPanelCount(),
                    i = t.getScrollAreaSize();
                return (e.circular ? Math.floor(this.getPosition() / i) * n : 0) + this.getIndex() - t.getCurrentProgress()
            }, t.getOutsetProgress = function() {
                var t = this.viewport,
                    e = [-this.getSize(), t.getRelativeHangerPosition() - this.getRelativeAnchorPosition(), t.getSize()];
                return Be(this.getPosition() - t.getCameraPosition(), e)
            }, t.getVisibleRatio = function() {
                var t = this.viewport,
                    e = this.getSize(),
                    n = this.getPosition() - t.getCameraPosition(),
                    i = n + e,
                    r = Math.min(t.getSize(), i) - Math.max(n, 0);
                return 0 <= r ? r / e : 0
            }, t.focus = function(t) {
                var e = this.viewport,
                    n = e.getCurrentPanel();
                if (e.getHangerPosition() !== this.getAnchorPosition() && n) {
                    var i = n.getPosition() === this.getPosition() ? "" : Pe.CHANGE;
                    e.moveTo(this, e.findEstimatedPosition(this), i, null, t)
                }
            }, t.update = function(e, t) {
                void 0 === e && (e = null),
                void 0 === t && (t = !0);
                var n = this.getIdenticalPanels();
                e && n.forEach(function(t) {
                    e(t.getElement())
                }),
                t && (n.forEach(function(t) {
                    t.unCacheBbox()
                }), this.viewport.addVisiblePanel(this), this.viewport.resize())
            }, t.prev = function() {
                var t = this.viewport.options,
                    e = this.prevSibling;
                if (!e)
                    return null;
                var n = this.getIndex(),
                    i = this.getPosition(),
                    r = e.getIndex(),
                    o = e.getPosition(),
                    s = e.getSize(),
                    a = 1 < n - r,
                    l = t.infinite && 0 < n && n < r;
                if (a || l)
                    return null;
                var u = i - s - t.gap,
                    h = e;
                return o !== u && (h = e.clone(e.getCloneIndex(), !0)).setPosition(u), h
            }, t.next = function() {
                var t = this.viewport,
                    e = t.options,
                    n = this.nextSibling,
                    i = t.panelManager.getLastIndex();
                if (!n)
                    return null;
                var r = this.getIndex(),
                    o = this.getPosition(),
                    s = n.getIndex(),
                    a = n.getPosition(),
                    l = 1 < s - r,
                    u = e.infinite && r < i && s < r;
                if (l || u)
                    return null;
                var h = o + this.getSize() + e.gap,
                    c = n;
                return a !== h && (c = n.clone(n.getCloneIndex(), !0)).setPosition(h), c
            }, t.insertBefore = function(t) {
                var e = this.viewport,
                    n = ze(t),
                    i = e.panelManager.firstPanel(),
                    r = this.prevSibling,
                    o = r && i.getIndex() !== this.getIndex() ? Math.max(r.getIndex() + 1, this.getIndex() - n.length) : Math.max(this.getIndex() - n.length, 0);
                return e.insert(o, n)
            }, t.insertAfter = function(t) {
                return this.viewport.insert(this.getIndex() + 1, t)
            }, t.remove = function() {
                return this.viewport.remove(this.getIndex()), this
            }, t.destroy = function(t) {
                if (!t.preserveUI) {
                    var e = this.state.originalStyle;
                    Xe(this.element, e)
                }
                for (var n in this)
                    this[n] = null
            }, t.getElement = function() {
                return this.element
            }, t.getAnchorPosition = function() {
                return this.state.position + this.state.relativeAnchorPosition
            }, t.getRelativeAnchorPosition = function() {
                return this.state.relativeAnchorPosition
            }, t.getIndex = function() {
                return this.state.index
            }, t.getPosition = function() {
                return this.state.position
            }, t.getSize = function() {
                return this.state.size
            }, t.getBbox = function() {
                var t = this.state,
                    e = this.viewport,
                    n = this.element,
                    i = e.options;
                if (n) {
                    if (!t.cachedBbox) {
                        var r = Boolean(n.parentNode),
                            o = e.getCameraElement();
                        r || (o.appendChild(n), e.addVisiblePanel(this)),
                        t.cachedBbox = je(n, i.useOffset),
                        !r && e.options.renderExternal && o.removeChild(n)
                    }
                } else
                    t.cachedBbox = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                return t.cachedBbox
            }, t.isClone = function() {
                return this.state.isClone
            }, t.getOverlappedClass = function(t) {
                for (var e = this.element, n = 0, i = t; n < i.length; n++) {
                    var r = i[n];
                    if (Re(e, r))
                        return r
                }
            }, t.getCloneIndex = function() {
                return this.state.cloneIndex
            }, t.getClonedPanels = function() {
                return this.state.isClone ? this.original.getClonedPanels() : this.clonedPanels
            }, t.getIdenticalPanels = function() {
                return this.state.isClone ? this.original.getIdenticalPanels() : [this].concat(this.clonedPanels)
            }, t.getOriginalPanel = function() {
                return this.state.isClone ? this.original : this
            }, t.setIndex = function(e) {
                this.state.index = e,
                this.clonedPanels.forEach(function(t) {
                    return t.state.index = e
                })
            }, t.setPosition = function(t) {
                return this.state.position = t, this
            }, t.setPositionCSS = function(t) {
                if (void 0 === t && (t = 0), this.element) {
                    var e = this.state,
                        n = e.position,
                        i = this.viewport.options,
                        r = this.element.style,
                        o = i.horizontal ? r.left : r.top,
                        s = n - t + "px";
                    e.isVirtual || o === s || (i.horizontal ? r.left = s : r.top = s)
                }
            }, t.clone = function(t, e, n) {
                void 0 === e && (e = !1);
                var i = this.state,
                    r = this.viewport,
                    o = n;
                !o && this.element && (o = e ? this.element : this.element.cloneNode(!0));
                var s = new l(o, i.index, r),
                    a = s.state;
                return s.original = i.isClone ? this.original : this, a.isClone = !0, a.isVirtual = e, a.cloneIndex = t, a.size = i.size, a.relativeAnchorPosition = i.relativeAnchorPosition, a.originalStyle = i.originalStyle, a.cachedBbox = i.cachedBbox, e ? (s.prevSibling = this.prevSibling, s.nextSibling = this.nextSibling) : this.clonedPanels.push(s), s
            }, t.removeElement = function() {
                if (!this.viewport.options.renderExternal) {
                    var t = this.element;
                    t.parentNode && t.parentNode.removeChild(t)
                }
                this.state.isClone || this.removeClonedPanelsAfter(0)
            }, t.removeClonedPanelsAfter = function(t) {
                var e = this.viewport.options,
                    n = this.clonedPanels.splice(t);
                e.renderExternal || n.forEach(function(t) {
                    t.removeElement()
                })
            }, t.setElement = function(t) {
                if (t) {
                    var e,
                        n,
                        i = this.element;
                    if (t !== i) {
                        var r = this.viewport.options;
                        if (i)
                            r.horizontal ? t.style.left = i.style.left : t.style.top = i.style.top;
                        else {
                            var o = this.state.originalStyle;
                            o.className = t.getAttribute("class"),
                            o.style = t.getAttribute("style")
                        }
                        this.element = t,
                        r.classPrefix && (e = t, n = r.classPrefix + "-panel", e.classList ? e.classList.add(n) : Re(e, n) || (e.className = (e.className + " " + n).replace(/\s{2,}/g, " "))),
                        Ne(this.element, me)
                    }
                }
            }, l
        }(),
        qe = function() {
            function t(t, e) {
                this.cameraElement = t,
                this.panels = [],
                this.clones = [],
                this.range = {
                    min: -1,
                    max: -1
                },
                this.length = 0,
                this.cloneCount = 0,
                this.options = e,
                this.lastIndex = e.lastIndex
            }
            var e = t.prototype;
            return e.firstPanel = function() {
                return this.panels[this.range.min]
            }, e.lastPanel = function() {
                return this.panels[this.range.max]
            }, e.allPanels = function() {
                return this.panels.concat(this.clones.reduce(function(t, e) {
                    return t.concat(e)
                }, []))
            }, e.originalPanels = function() {
                return this.panels
            }, e.clonedPanels = function() {
                return this.clones
            }, e.replacePanels = function(t, e) {
                this.panels = t,
                this.clones = e,
                this.range = {
                    min: Ve(t, function(t) {
                        return Boolean(t)
                    }),
                    max: t.length - 1
                },
                this.length = t.filter(function(t) {
                    return Boolean(t)
                }).length
            }, e.has = function(t) {
                return !!this.panels[t]
            }, e.get = function(t) {
                return this.panels[t]
            }, e.getPanelCount = function() {
                return this.length
            }, e.getLastIndex = function() {
                return this.lastIndex
            }, e.getRange = function() {
                return this.range
            }, e.getCloneCount = function() {
                return this.cloneCount
            }, e.setLastIndex = function(t) {
                this.lastIndex = t;
                var e = this.firstPanel(),
                    n = this.lastPanel();
                if (e && n) {
                    var i = this.range;
                    if (n.getIndex() > t) {
                        var r = this.panels.splice(t + 1);
                        this.length -= r.length;
                        var o = r.filter(function(t) {
                            return !!t
                        })[0].prevSibling;
                        i.max = o ? o.getIndex() : i.min = -1,
                        this.shouldRender() && r.forEach(function(t) {
                            return t.removeElement()
                        })
                    }
                }
            }, e.setCloneCount = function(t) {
                this.cloneCount = t
            }, e.insert = function(n, t) {
                var i = this.panels,
                    e = this.range,
                    r = this.options.circular,
                    o = this.lastIndex,
                    s = this.findFirstPanelFrom(n),
                    a = this.firstPanel(),
                    l = s ? s.getElement() : r && a ? a.getClonedPanels()[0].getElement() : null;
                this.insertNewPanels(t, l);
                var u = t.length;
                if (n > e.max)
                    t.forEach(function(t, e) {
                        i[n + e] = t
                    });
                else {
                    var h = i.slice(n, n + t.length),
                        c = Ve(h, function(t) {
                            return !!t
                        });
                    if (c < 0 && (c = h.length), u = t.length - c, i.splice.apply(i, [n, c].concat(t)), i.length > o + 1) {
                        var f = i.splice(o + 1).filter(function(t) {
                            return Boolean(t)
                        });
                        this.length -= f.length;
                        var p = o - Ve(this.panels.concat().reverse(), function(t) {
                            return !!t
                        });
                        this.panels.splice(p + 1),
                        this.range.max = p,
                        this.shouldRender() && f.forEach(function(t) {
                            return t.removeElement()
                        })
                    }
                }
                if (0 < u && i.slice(n + t.length).forEach(function(t) {
                    t.setIndex(t.getIndex() + u)
                }), this.length += t.length, this.updateIndex(n), r) {
                    this.addNewClones(n, t, t.length - u, s);
                    var g = this.clones,
                        d = this.panels.length;
                    g[0] && g[0].length > o + 1 && g.forEach(function(t) {
                        t.splice(d)
                    })
                }
                return u
            }, e.replace = function(t, e) {
                var n = this.panels,
                    i = this.range,
                    r = this.options.circular,
                    o = this.findFirstPanelFrom(t + e.length),
                    s = this.firstPanel(),
                    a = o ? o.getElement() : r && s ? s.getClonedPanels()[0].getElement() : null;
                this.insertNewPanels(e, a),
                t > i.max && (n[t] = null);
                var l = n.splice.apply(n, [t, e.length].concat(e)),
                    u = l.filter(function(t) {
                        return Boolean(t)
                    }).length;
                return this.length += e.length - u, this.updateIndex(t), r && this.addNewClones(t, e, e.length, o), this.shouldRender() && l.forEach(function(t) {
                    return t && t.removeElement()
                }), l
            }, e.remove = function(e, n) {
                void 0 === n && (n = 1);
                var t = this.options.circular,
                    i = this.panels,
                    r = this.clones;
                n = Math.max(n, 0);
                var o = i.splice(e, n).filter(function(t) {
                    return !!t
                });
                this.shouldRender() && o.forEach(function(t) {
                    return t.removeElement()
                }),
                t && r.forEach(function(t) {
                    t.splice(e, n)
                }),
                i.slice(e).forEach(function(t) {
                    t.setIndex(t.getIndex() - n)
                });
                var s = i.length - 1;
                if (!i[s]) {
                    var a = Ve(i.concat().reverse(), function(t) {
                        return !!t
                    });
                    s = a < 0 ? -1 : s - a,
                    i.splice(s + 1),
                    t && r.forEach(function(t) {
                        t.splice(s + 1)
                    })
                }
                return this.range = {
                    min: Ve(i, function(t) {
                        return !!t
                    }),
                    max: s
                }, this.length -= o.length, this.length <= 0 && (this.clones = [], this.cloneCount = 0), o
            }, e.chainAllPanels = function() {
                var r = this.allPanels().filter(function(t) {
                        return !!t
                    }),
                    t = r.length;
                if (!(t <= 1)) {
                    r.slice(1, r.length - 1).forEach(function(t, e) {
                        var n = r[e],
                            i = r[e + 2];
                        t.prevSibling = n,
                        t.nextSibling = i
                    });
                    var e = r[0],
                        n = r[t - 1];
                    e.prevSibling = null,
                    e.nextSibling = r[1],
                    n.prevSibling = r[t - 2],
                    n.nextSibling = null,
                    this.options.circular && ((e.prevSibling = n).nextSibling = e)
                }
            }, e.insertClones = function(t, n, e, i) {
                void 0 === i && (i = 0);
                var r = this.clones,
                    o = this.lastIndex;
                if (r[t]) {
                    var s = r[t];
                    n >= s.length ? e.forEach(function(t, e) {
                        s[n + e] = t
                    }) : (s.splice.apply(s, [n, i].concat(e)), e.length > o + 1 && e.splice(o + 1))
                } else {
                    var a = [];
                    e.forEach(function(t, e) {
                        a[n + e] = t
                    }),
                    r[t] = a
                }
            }, e.removeClonesAfter = function(e) {
                this.panels.forEach(function(t) {
                    t.removeClonedPanelsAfter(e)
                }),
                this.clones.splice(e)
            }, e.findPanelOf = function(t) {
                for (var e = 0, n = this.allPanels(); e < n.length; e++) {
                    var i = n[e];
                    if (i)
                        if (i.getElement().contains(t))
                            return i
                }
            }, e.findFirstPanelFrom = function(t) {
                for (var e = 0, n = this.panels.slice(t); e < n.length; e++) {
                    var i = n[e];
                    if (i && i.getIndex() >= t && i.getElement().parentNode)
                        return i
                }
            }, e.addNewClones = function(o, s, a, t) {
                for (var l = this, u = this.cameraElement, e = this.getCloneCount(), n = this.lastPanel(), h = n ? n.getClonedPanels() : [], c = t ? t.getClonedPanels() : [], i = function(n) {
                        var t = c[n],
                            e = h[n],
                            i = t ? t.getElement() : e ? e.getElement().nextElementSibling : null,
                            r = s.map(function(t) {
                                var e = t.clone(n);
                                return l.shouldRender() && u.insertBefore(e.getElement(), i), e
                            });
                        f.insertClones(n, o, r, a)
                    }, f = this, r = 0, p = Le(e); r < p.length; r++) {
                    i(p[r])
                }
            }, e.updateIndex = function(t) {
                var e = this.panels,
                    n = this.range,
                    i = e.length - 1;
                i > n.max && (n.max = i),
                (t < n.min || n.min < 0) && (n.min = t)
            }, e.insertNewPanels = function(t, e) {
                if (this.shouldRender()) {
                    var n = document.createDocumentFragment();
                    t.forEach(function(t) {
                        return n.appendChild(t.getElement())
                    }),
                    this.cameraElement.insertBefore(n, e)
                }
            }, e.shouldRender = function() {
                var t = this.options;
                return !t.renderExternal && !t.renderOnlyVisible
            }, t
        }(),
        Ge = function() {
            function t() {
                this.delta = 0,
                this.direction = null,
                this.targetPanel = null,
                this.lastPosition = 0
            }
            var e = t.prototype;
            return e.onEnter = function(t) {
                this.delta = t.delta,
                this.direction = t.direction,
                this.targetPanel = t.targetPanel,
                this.lastPosition = t.lastPosition
            }, e.onExit = function(t) {}, e.onHold = function(t, e) {}, e.onChange = function(t, e) {}, e.onRelease = function(t, e) {}, e.onAnimationEnd = function(t, e) {}, e.onFinish = function(t, e) {}, t
        }(),
        We = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.type = Ee, t.holding = !1, t.playing = !1, t
            }
            r(t, e);
            var n = t.prototype;
            return n.onEnter = function() {
                this.direction = null,
                this.targetPanel = null,
                this.delta = 0,
                this.lastPosition = 0
            }, n.onHold = function(t, e) {
                var n = e.flicking,
                    i = e.viewport,
                    r = e.triggerEvent,
                    o = e.transitTo;
                if (n.getPanelCount() <= 0)
                    return i.options.infinite && i.moveCamera(i.getCameraPosition(), t), void o(Se);
                this.lastPosition = i.getCameraPosition(),
                r(Pe.HOLD_START, t, !0).onSuccess(function() {
                    o(ye)
                }).onStopped(function() {
                    o(Se)
                })
            }, n.onChange = function(t, e) {
                var n = e.triggerEvent,
                    i = e.transitTo;
                n(Pe.MOVE_START, t, !1).onSuccess(function() {
                    i(Ce).onChange(t, e)
                }).onStopped(function() {
                    i(Se)
                })
            }, t
        }(Ge),
        Ue = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.type = ye, t.holding = !0, t.playing = !0, t.releaseEvent = null, t
            }
            r(t, e);
            var n = t.prototype;
            return n.onChange = function(t, e) {
                var n = e.flicking,
                    i = e.triggerEvent,
                    r = e.transitTo,
                    o = n.options.horizontal ? t.inputEvent.offsetX : t.inputEvent.offsetY;
                this.direction = o < 0 ? we.NEXT : we.PREV,
                i(Pe.MOVE_START, t, !0).onSuccess(function() {
                    r(be).onChange(t, e)
                }).onStopped(function() {
                    r(Se)
                })
            }, n.onRelease = function(t, e) {
                var n = e.viewport,
                    i = e.triggerEvent,
                    r = e.transitTo;
                if (i(Pe.HOLD_END, t, !0), 0 !== t.delta.flick)
                    return t.setTo({
                        flick: n.getCameraPosition()
                    }, 0), void r(Ee);
                this.releaseEvent = t
            }, n.onFinish = function(t, e) {
                var n = e.viewport,
                    i = e.triggerEvent;
                if ((0, e.transitTo)(Ee), this.releaseEvent) {
                    var r,
                        o = this.releaseEvent.inputEvent.srcEvent;
                    if ("touchend" === o.type) {
                        var s = o.changedTouches[0];
                        r = document.elementFromPoint(s.clientX, s.clientY)
                    } else
                        r = o.target;
                    var a = n.panelManager.findPanelOf(r),
                        l = n.getCameraPosition();
                    if (a) {
                        var u = a.getPosition();
                        i(Pe.SELECT, null, !0, {
                            direction: l < u ? we.NEXT : u < l ? we.PREV : null,
                            index: a.getIndex(),
                            panel: a
                        })
                    }
                }
            }, t
        }(Ge),
        Je = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.type = be, t.holding = !0, t.playing = !0, t
            }
            r(t, e);
            var n = t.prototype;
            return n.onChange = function(t, e) {
                var n = e.moveCamera,
                    i = e.transitTo;
                t.delta.flick && n(t).onStopped(function() {
                    i(Se)
                })
            }, n.onRelease = function(t, e) {
                var n = e.flicking,
                    i = e.viewport,
                    r = e.triggerEvent,
                    o = e.transitTo,
                    s = e.stopCamera,
                    a = this.delta,
                    l = Math.abs(a),
                    u = n.options,
                    h = u.horizontal,
                    c = i.moveType,
                    f = t.inputEvent,
                    p = h ? f.velocityX : f.velocityY,
                    g = h ? f.deltaX : f.deltaY,
                    d = 1 < Math.abs(p) ? p < 0 : 0 < l ? 0 < a : g < 0,
                    v = i.options.bound ? Math.max(l, Math.abs(g)) : l,
                    m = f.deltaX ? Math.abs(180 * Math.atan(f.deltaY / f.deltaX) / Math.PI) : 90,
                    P = h ? m <= u.thresholdAngle : m > u.thresholdAngle,
                    x = v >= u.threshold && P,
                    E = {
                        viewport: i,
                        axesEvent: t,
                        state: this,
                        swipeDistance: v,
                        isNextDirection: d
                    };
                r(Pe.HOLD_END, t, !0);
                var y = this.targetPanel;
                if (!x && y) {
                    var b = c.findPanelWhenInterrupted(E);
                    return i.moveTo(b.panel, b.destPos, b.eventType, t, b.duration), void o(Ce)
                }
                var C = i.getCurrentPanel(),
                    S = i.getNearestPanel();
                if (!C || !S)
                    return t.stop(), void o(Ee);
                var w = x ? c.findTargetPanel(E) : c.findRestorePanel(E);
                i.moveTo(w.panel, w.destPos, w.eventType, t, w.duration).onSuccess(function() {
                    o(Ce)
                }).onStopped(function() {
                    o(Se),
                    s(t)
                })
            }, t
        }(Ge),
        Qe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.type = Ce, t.holding = !1, t.playing = !0, t
            }
            r(t, e);
            var n = t.prototype;
            return n.onHold = function(t, e) {
                var n = e.viewport,
                    i = e.triggerEvent,
                    r = e.transitTo,
                    o = n.options,
                    s = n.getScrollArea(),
                    a = n.getScrollAreaSize(),
                    l = Math.floor((this.lastPosition + this.delta - s.prev) / a),
                    u = this.targetPanel;
                if (o.circular && 0 !== l && u) {
                    var h = n.panelManager.getCloneCount(),
                        c = u.getPosition(),
                        f = Fe(u.getCloneIndex() - l, -1, h - 1, !0),
                        p = c - l * a,
                        g = u.getIdenticalPanels()[f + 1].clone(f, !0);
                    g.setPosition(p),
                    this.targetPanel = g
                }
                this.delta = 0,
                this.lastPosition = n.getCameraPosition(),
                n.setCurrentPanel(n.getNearestPanel()),
                i(Pe.HOLD_START, t, !0).onSuccess(function() {
                    r(be)
                }).onStopped(function() {
                    r(Se)
                })
            }, n.onChange = function(t, e) {
                var n = e.moveCamera,
                    i = e.transitTo;
                t.delta.flick && n(t).onStopped(function() {
                    i(Se)
                })
            }, n.onFinish = function(t, e) {
                var n = e.flicking,
                    i = e.viewport,
                    r = e.triggerEvent,
                    o = e.transitTo,
                    s = t && t.isTrusted;
                i.options.bound ? i.setCurrentPanel(this.targetPanel) : i.setCurrentPanel(i.getNearestPanel()),
                n.options.adaptive && i.updateAdaptiveSize(),
                o(Ee),
                i.updateCameraPosition(),
                r(Pe.MOVE_END, t, s, {
                    direction: this.direction
                })
            }, t
        }(Ge),
        Ze = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.type = Se, t.holding = !1, t.playing = !0, t
            }
            r(t, e);
            var n = t.prototype;
            return n.onAnimationEnd = function(t, e) {
                (0, e.transitTo)(Ee)
            }, n.onChange = function(t, e) {
                var n = e.viewport,
                    i = e.transitTo;
                t.stop(),
                n.updateAxesPosition(n.getCameraPosition()),
                i(Ee)
            }, n.onRelease = function(t, e) {
                var n = e.transitTo;
                0 === t.delta.flick && n(Ee)
            }, t
        }(Ge),
        Ke = function() {
            function t() {
                var i = this;
                this.state = new We,
                this.transitTo = function(t) {
                    var e = i.state;
                    if (e.type !== t) {
                        var n = void 0;
                        switch (t) {
                        case Ee:
                            n = new We;
                            break;
                        case ye:
                            n = new Ue;
                            break;
                        case be:
                            n = new Je;
                            break;
                        case Ce:
                            n = new Qe;
                            break;
                        case Se:
                            n = new Ze
                        }
                        e.onExit(n),
                        n.onEnter(e),
                        i.state = n
                    }
                    return i.state
                }
            }
            var e = t.prototype;
            return e.fire = function(t, e, n) {
                var i = this.state;
                switch (t) {
                case xe.HOLD:
                    i.onHold(e, n);
                    break;
                case xe.CHANGE:
                    i.onChange(e, n);
                    break;
                case xe.RELEASE:
                    i.onRelease(e, n);
                    break;
                case xe.ANIMATION_END:
                    i.onAnimationEnd(e, n);
                    break;
                case xe.FINISH:
                    i.onFinish(e, n)
                }
            }, e.getState = function() {
                return this.state
            }, t
        }(),
        $e = function(n) {
            function t(t) {
                var e = n.call(this) || this;
                return e.type = ce.SNAP, e.count = t, e
            }
            r(t, n);
            var e = t.prototype;
            return e.findTargetPanel = function(t) {
                var e = t.viewport,
                    n = t.axesEvent,
                    i = t.swipeDistance,
                    r = this.count,
                    o = Math.abs(n.delta.flick),
                    s = e.getCurrentPanel(),
                    a = e.getNearestPanel(),
                    l = this.calcBrinkOfChange(t),
                    u = a.getIndex() === s.getIndex(),
                    h = e.canSetBoundMode() && u,
                    c = !e.isOutOfBound() && (i <= l || h);
                return 1 < r && l < o ? this.findSnappedPanel(t) : c ? this.findAdjacentPanel(t) : {
                    panel: a,
                    duration: e.options.duration,
                    destPos: e.findEstimatedPosition(a),
                    eventType: i <= l || e.isOutOfBound() && u ? Pe.RESTORE : Pe.CHANGE
                }
            }, e.findSnappedPanel = function(t) {
                for (var e = t.axesEvent, n = t.viewport, i = t.state, r = t.isNextDirection, o = Math.abs(e.delta.flick), s = this.calcBrinkOfChange(t), a = this.count, l = n.options, u = n.getScrollAreaSize(), h = l.gap / 2, c = e.destPos.flick + n.getRelativeHangerPosition(), f = n.getNearestPanel(), p = f.getCloneIndex() + 1, g = 0; g < a;) {
                    var d = f.getOriginalPanel(),
                        v = d.getPosition() + p * u,
                        m = d.getSize();
                    if (r && c < v + m + h || !r && v - h < c)
                        break;
                    var P = r ? f.nextSibling : f.prevSibling;
                    if (!P)
                        break;
                    var x = f.getIndex(),
                        E = P.getIndex();
                    (r && E <= x || !r && x <= E) && (p = r ? p + 1 : p - 1),
                    f = P,
                    g += 1
                }
                var y = f.getOriginalPanel().getPosition();
                0 !== p && (f = f.clone(f.getCloneIndex(), !0)).setPosition(y + p * u);
                var b = n.options.duration,
                    C = _e(e.duration, b, b * g);
                return {
                    panel: f,
                    destPos: n.findEstimatedPosition(f),
                    duration: C,
                    eventType: Math.max(o, i.delta) > s ? Pe.CHANGE : Pe.RESTORE
                }
            }, e.findAdjacentPanel = function(t) {
                var e = t.viewport,
                    n = t.isNextDirection,
                    i = e.options,
                    r = e.getCurrentIndex(),
                    o = e.panelManager.get(r),
                    s = e.getHangerPosition(),
                    a = e.getScrollArea(),
                    l = o.getIdenticalPanels()[1],
                    u = i.circular && Math.abs(o.getAnchorPosition() - s) > Math.abs(l.getAnchorPosition() - s) ? l : o,
                    h = u.getPosition(),
                    c = n ? u.nextSibling : u.prevSibling,
                    f = c ? Pe.CHANGE : Pe.RESTORE,
                    p = c || u,
                    g = p.getRelativeAnchorPosition(),
                    d = (i.circular ? n ? h + u.getSize() + g + i.gap : h - (p.getSize() - g) - i.gap : p.getAnchorPosition()) - e.getRelativeHangerPosition();
                return {
                    panel: p,
                    destPos: e.canSetBoundMode() ? _e(d, a.prev, a.next) : d,
                    duration: i.duration,
                    eventType: f
                }
            }, t
        }(function() {
            function t() {}
            var e = t.prototype;
            return e.is = function(t) {
                return t === this.type
            }, e.findRestorePanel = function(t) {
                var e = t.viewport,
                    n = e.options,
                    i = n.circular ? this.findRestorePanelInCircularMode(t) : e.getCurrentPanel();
                return {
                    panel: i,
                    destPos: e.findEstimatedPosition(i),
                    duration: n.duration,
                    eventType: Pe.RESTORE
                }
            }, e.findPanelWhenInterrupted = function(t) {
                var e = t.state,
                    n = t.viewport,
                    i = e.targetPanel;
                return {
                    panel: i,
                    destPos: n.findEstimatedPosition(i),
                    duration: n.options.duration,
                    eventType: ""
                }
            }, e.calcBrinkOfChange = function(t) {
                var e = t.viewport,
                    n = t.isNextDirection,
                    i = e.options,
                    r = e.getCurrentPanel(),
                    o = i.gap / 2,
                    s = r.getRelativeAnchorPosition(),
                    a = n ? r.getSize() - s + o : s + o;
                return a = Math.max(a, i.threshold)
            }, e.findRestorePanelInCircularMode = function(t) {
                var e = t.viewport,
                    n = e.getCurrentPanel().getOriginalPanel(),
                    i = e.getHangerPosition(),
                    r = n.getIdenticalPanels()[1],
                    o = Math.abs(n.getAnchorPosition() - i) > Math.abs(r.getAnchorPosition() - i);
                return !t.isNextDirection && o ? r : n
            }, t
        }()),
        tn = function(c) {
            function t() {
                var t = c.call(this, 1 / 0) || this;
                return t.type = ce.FREE_SCROLL, t
            }
            r(t, c);
            var e = t.prototype;
            return e.findTargetPanel = function(t) {
                var e = t.axesEvent,
                    n = t.state,
                    i = t.viewport,
                    r = e.destPos.flick,
                    o = this.calcBrinkOfChange(t),
                    s = i.getScrollArea(),
                    a = i.getCurrentPanel(),
                    l = i.options;
                if (o < Math.abs(e.delta.flick + n.delta)) {
                    var u = c.prototype.findSnappedPanel.call(this, t);
                    return u.duration = e.duration, u.destPos = r, u.eventType = l.circular || u.panel !== a ? Pe.CHANGE : "", u
                }
                var h = l.circular ? Fe(r, s.prev, s.next, !1) : r;
                return h = _e(h, s.prev, s.next), h += i.getRelativeHangerPosition(), {
                    panel: i.findNearestPanelAt(h),
                    destPos: r,
                    duration: e.duration,
                    eventType: ""
                }
            }, e.findRestorePanel = function(t) {
                return this.findTargetPanel(t)
            }, e.findPanelWhenInterrupted = function(t) {
                var e = t.viewport;
                return {
                    panel: e.getNearestPanel(),
                    destPos: e.getCameraPosition(),
                    duration: 0,
                    eventType: ""
                }
            }, e.calcBrinkOfChange = function(t) {
                var e = t.viewport,
                    n = t.isNextDirection,
                    i = e.options,
                    r = e.getCurrentPanel(),
                    o = i.gap / 2,
                    s = e.stateMachine.getState().lastPosition,
                    a = r.getPosition(),
                    l = s + e.getRelativeHangerPosition(),
                    u = e.getScrollAreaSize(),
                    h = n ? a + r.getSize() - l + o : l - a + o;
                return h = Math.abs(h % u), Math.min(h, u - h)
            }, t
        }($e),
        en = function() {
            function t(t, e, n) {
                var i = this;
                this.plugins = [],
                this.stopCamera = function(t) {
                    t && t.setTo && t.setTo({
                        flick: i.state.position
                    }, 0),
                    i.stateMachine.transitTo(Ee)
                },
                this.flicking = t,
                this.triggerEvent = n,
                this.state = {
                    size: 0,
                    position: 0,
                    panelMaintainRatio: 0,
                    relativeHangerPosition: 0,
                    positionOffset: 0,
                    scrollArea: {
                        prev: 0,
                        next: 0
                    },
                    translate: Ae,
                    infiniteThreshold: 0,
                    checkedIndexes: [],
                    isAdaptiveCached: !1,
                    isViewportGiven: !1,
                    isCameraGiven: !1,
                    originalViewportStyle: {
                        className: null,
                        style: null
                    },
                    originalCameraStyle: {
                        className: null,
                        style: null
                    },
                    cachedBbox: null
                },
                this.options = e,
                this.stateMachine = new Ke,
                this.visiblePanels = [],
                this.panelBboxes = {},
                this.build()
            }
            var e = t.prototype;
            return e.moveTo = function(t, e, n, i, r) {
                var o = this;
                void 0 === r && (r = this.options.duration);
                var s,
                    a = this.state,
                    l = this.stateMachine.getState(),
                    u = a.position,
                    h = !!i && i.isTrusted,
                    c = e === u ? null : u < e ? we.NEXT : we.PREV;
                return (s = n === Pe.CHANGE ? this.triggerEvent(Pe.CHANGE, i, h, {
                    index: t.getIndex(),
                    panel: t,
                    direction: c
                }) : n === Pe.RESTORE ? this.triggerEvent(Pe.RESTORE, i, h) : {
                    onSuccess: function(t) {
                        return t(), this
                    },
                    onStopped: function() {
                        return this
                    }
                }).onSuccess(function() {
                    l.delta = 0,
                    l.lastPosition = o.getCameraPosition(),
                    l.targetPanel = t,
                    l.direction = e === u ? null : u < e ? we.NEXT : we.PREV,
                    e === u && (o.nearestPanel = t, o.currentPanel = t),
                    i && i.setTo ? i.setTo({
                        flick: e
                    }, r) : o.axes.setTo({
                        flick: e
                    }, r)
                }), s
            }, e.moveCamera = function(t, e) {
                var n = this.state,
                    i = this.options,
                    r = n.translate.name,
                    o = n.scrollArea;
                i.circular && !ke(t, o.prev, o.next) && (t = Fe(t, o.prev, o.next, !1)),
                n.position = t,
                this.nearestPanel = this.findNearestPanel();
                var s = this.nearestPanel,
                    a = s ? s.getPosition() : 0;
                if (s) {
                    var l = this.getHangerPosition(),
                        u = s.getPosition(),
                        h = s.getSize(),
                        c = i.gap / 2;
                    n.panelMaintainRatio = (l - u + c) / (h + 2 * c)
                } else
                    n.panelMaintainRatio = 0;
                this.checkNeedPanel(e),
                t += (s ? s.getPosition() : 0) - a,
                n.position = t,
                this.updateVisiblePanels();
                var f = i.renderOnlyVisible ? n.positionOffset : 0,
                    p = (i.horizontal ? [-(t - f), 0] : [0, -(t - f)]).map(function(t) {
                        return Math.round(t) + "px"
                    }).join(", ");
                this.cameraElement.style[r] = n.translate.has3d ? "translate3d(" + p + ", 0px)" : "translate(" + p + ")"
            }, e.unCacheBbox = function() {
                var t = this.state,
                    e = this.options;
                t.cachedBbox = null,
                this.visiblePanels = [];
                var n = this.viewportElement;
                e.horizontal ? n.style.height = "" : n.style.width = "",
                t.isAdaptiveCached = !1,
                this.panelBboxes = {}
            }, e.resize = function() {
                this.updateSize(),
                this.updateOriginalPanelPositions(),
                this.updateAdaptiveSize(),
                this.updateScrollArea(),
                this.updateClonePanels(),
                this.updateCameraPosition(),
                this.updatePlugins()
            }, e.findNearestPanel = function() {
                var t = this.state,
                    e = this.panelManager,
                    n = this.getHangerPosition();
                return this.isOutOfBound() ? t.position <= t.scrollArea.prev ? e.firstPanel() : e.lastPanel() : this.findNearestPanelAt(n)
            }, e.findNearestPanelAt = function(t) {
                for (var e, n = 1 / 0, i = 0, r = this.panelManager.allPanels(); i < r.length; i++) {
                    var o = r[i];
                    if (o) {
                        var s = o.getPosition(),
                            a = s + o.getSize(),
                            l = ke(t, s, a) ? 0 : Math.min(Math.abs(s - t), Math.abs(a - t));
                        if (n < l)
                            break;
                        if (l === n && Math.abs(t - e.getAnchorPosition()) < Math.abs(t - o.getAnchorPosition()))
                            break;
                        n = l,
                        e = o
                    }
                }
                return e
            }, e.findNearestIdenticalPanel = function(t) {
                var i = t,
                    r = 1 / 0,
                    o = this.getHangerPosition();
                return t.getIdenticalPanels().forEach(function(t) {
                    var e = t.getAnchorPosition(),
                        n = Math.abs(e - o);
                    n < r && (i = t, r = n)
                }), i
            }, e.findShortestPositionToPanel = function(t) {
                var e = this.state,
                    n = this.options,
                    i = t.getAnchorPosition(),
                    r = this.getHangerPosition(),
                    o = Math.abs(r - i),
                    s = e.scrollArea.next - e.scrollArea.prev;
                if (n.circular)
                    return o <= s - o ? i - e.relativeHangerPosition : r < i ? i - e.relativeHangerPosition - s : i - e.relativeHangerPosition + s;
                var a = i - e.relativeHangerPosition;
                return this.canSetBoundMode() ? _e(a, e.scrollArea.prev, e.scrollArea.next) : a
            }, e.findEstimatedPosition = function(t) {
                var e = this.getScrollArea(),
                    n = t.getAnchorPosition() - this.getRelativeHangerPosition();
                return n = this.canSetBoundMode() ? _e(n, e.prev, e.next) : n
            }, e.addVisiblePanel = function(t) {
                this.getVisibleIndexOf(t) < 0 && this.visiblePanels.push(t)
            }, e.enable = function() {
                this.panInput.enable()
            }, e.disable = function() {
                this.panInput.disable()
            }, e.insert = function(r, t) {
                var n = this,
                    e = this.panelManager.getLastIndex();
                if (r < 0 || e < r)
                    return [];
                var o = this.state,
                    i = this.options,
                    s = ze(t).map(function(t, e) {
                        return new Ye(t, r + e, n)
                    }).slice(0, e - r + 1);
                if (s.length <= 0)
                    return [];
                var a = this.panelManager.insert(r, s);
                if (this.resizePanels(s), !this.currentPanel) {
                    this.currentPanel = s[0],
                    this.nearestPanel = s[0];
                    var l = s[0],
                        u = this.findEstimatedPosition(l);
                    o.position = u,
                    this.updateAxesPosition(u),
                    o.panelMaintainRatio = (l.getRelativeAnchorPosition() + i.gap / 2) / (l.getSize() + i.gap)
                }
                return this.updateCheckedIndexes({
                    min: r,
                    max: r
                }), o.checkedIndexes.forEach(function(t, e) {
                    var n = t[0],
                        i = t[1];
                    r < n && o.checkedIndexes.splice(e, 1, [n + a, i + a])
                }), this.resize(), s
            }, e.replace = function(n, t) {
                var i = this,
                    e = this.state,
                    r = this.options,
                    o = this.panelManager,
                    s = o.getLastIndex();
                if (n < 0 || s < n)
                    return [];
                var a = ze(t).map(function(t, e) {
                    return new Ye(t, n + e, i)
                }).slice(0, s - n + 1);
                if (a.length <= 0)
                    return [];
                o.replace(n, a).forEach(function(t) {
                    var e = i.getVisibleIndexOf(t);
                    -1 < e && i.visiblePanels.splice(e, 1)
                }),
                this.resizePanels(a);
                var l = this.currentPanel;
                if (!l) {
                    this.currentPanel = a[0],
                    this.nearestPanel = a[0];
                    var u = a[0],
                        h = this.findEstimatedPosition(u);
                    e.position = h,
                    this.updateAxesPosition(h),
                    e.panelMaintainRatio = (u.getRelativeAnchorPosition() + r.gap / 2) / (u.getSize() + r.gap)
                } else
                    ke(l.getIndex(), n, n + a.length - 1) && (this.currentPanel = o.get(l.getIndex()));
                return this.updateCheckedIndexes({
                    min: n,
                    max: n + a.length - 1
                }), this.resize(), a
            }, e.remove = function(t, e) {
                void 0 === e && (e = 1);
                var n = this.state;
                t = Math.max(t, 0);
                var i = this.panelManager,
                    r = this.getCurrentIndex(),
                    o = i.remove(t, e);
                if (ke(r, t, t + e - 1)) {
                    var s = Math.max(t - 1, i.getRange().min);
                    this.currentPanel = i.get(s)
                }
                0 < e && (this.updateCheckedIndexes({
                    min: t - 1,
                    max: t + e
                }), this.visiblePanels = []),
                i.getPanelCount() <= 0 && (this.currentPanel = void 0, this.nearestPanel = void 0),
                this.resize();
                var a = n.scrollArea;
                if (n.position < a.prev || n.position > a.next) {
                    var l = Fe(n.position, a.prev, a.next, !1);
                    this.moveCamera(l),
                    this.updateAxesPosition(l)
                }
                return o
            }, e.updateAdaptiveSize = function() {
                var t = this.state,
                    e = this.options,
                    i = e.horizontal,
                    n = this.getCurrentPanel();
                if (n) {
                    var r = e.adaptive || !t.isAdaptiveCached,
                        o = this.viewportElement.style;
                    if (r) {
                        var s = void 0;
                        if (e.adaptive) {
                            var a = n.getBbox();
                            s = i ? a.height : a.width
                        } else {
                            s = this.panelManager.originalPanels().reduce(function(t, e) {
                                var n = e.getBbox();
                                return Math.max(t, i ? n.height : n.width)
                            }, 0)
                        }
                        if (!t.isAdaptiveCached) {
                            var l = this.updateBbox();
                            s = Math.max(s, i ? l.height : l.width),
                            t.isAdaptiveCached = !0
                        }
                        var u = s + "px";
                        i ? (o.height = u, t.cachedBbox.height = s) : (o.width = u, t.cachedBbox.width = s)
                    }
                }
            }, e.updateCameraPosition = function() {
                var t = this.state,
                    e = this.getCurrentPanel(),
                    n = this.stateMachine.getState(),
                    i = this.moveType.is(ce.FREE_SCROLL),
                    r = this.getRelativeHangerPosition(),
                    o = this.options.gap / 2;
                if (n.holding || n.playing)
                    this.updateVisiblePanels();
                else {
                    var s;
                    if (i) {
                        var a = this.getNearestPanel();
                        s = a ? a.getPosition() - o + (a.getSize() + 2 * o) * t.panelMaintainRatio - r : this.getCameraPosition()
                    } else
                        s = e ? e.getAnchorPosition() - r : this.getCameraPosition();
                    this.canSetBoundMode() && (s = _e(s, t.scrollArea.prev, t.scrollArea.next)),
                    this.updateAxesPosition(s),
                    this.moveCamera(s)
                }
            }, e.updateBbox = function() {
                var t = this.state,
                    e = this.options,
                    n = this.viewportElement;
                return t.cachedBbox || (t.cachedBbox = je(n, e.useOffset)), t.cachedBbox
            }, e.updatePlugins = function() {
                var e = this;
                this.plugins.forEach(function(t) {
                    t.update && t.update(e.flicking)
                })
            }, e.destroy = function(e) {
                var t = this.state,
                    n = this.flicking.getElement(),
                    i = this.viewportElement,
                    r = this.cameraElement,
                    o = this.panelManager.originalPanels();
                if (this.removePlugins(this.plugins), !e.preserveUI && (Xe(i, t.originalViewportStyle), Xe(r, t.originalCameraStyle), !t.isCameraGiven && !this.options.renderExternal)) {
                    var s = t.isViewportGiven ? i : n,
                        a = t.isViewportGiven ? r : i;
                    o.forEach(function(t) {
                        s.appendChild(t.getElement())
                    }),
                    s.removeChild(a)
                }
                for (var l in this.axes.destroy(), this.panInput.destroy(), o.forEach(function(t) {
                    t.destroy(e)
                }), this)
                    this[l] = null
            }, e.restore = function(t) {
                var e = t.panels,
                    n = this.options.defaultIndex,
                    i = this.cameraElement,
                    r = this.panelManager;
                i.innerHTML = e.map(function(t) {
                    return t.html
                }).join(""),
                this.refreshPanels();
                var o = r.originalPanels(),
                    s = [];
                e.forEach(function(t, e) {
                    var n = o[e];
                    n.setIndex(t.index),
                    s[t.index] = n
                }),
                r.replacePanels(s, []),
                r.setCloneCount(0);
                var a = r.getPanelCount();
                this.nearestPanel = 0 < a ? (this.currentPanel = r.get(t.index) || r.get(n) || r.firstPanel(), this.currentPanel) : void (this.currentPanel = void 0),
                this.visiblePanels = s.filter(function(t) {
                    return Boolean(t)
                }),
                this.resize(),
                this.axes.setTo({
                    flick: t.position
                }, 0),
                this.moveCamera(t.position)
            }, e.calcVisiblePanels = function() {
                var t = this.panelManager.allPanels();
                if (this.options.renderOnlyVisible) {
                    var e = this.getCameraPosition(),
                        n = this.getSize(),
                        i = this.nearestPanel,
                        r = function(t, e, n) {
                            for (var i = [], r = t;;) {
                                var o = e(r);
                                if (!o || n(o))
                                    break;
                                i.push(o),
                                r = o
                            }
                            return i
                        },
                        o = this.panelManager.getPanelCount(),
                        s = function(t) {
                            return t.getIndex() + (t.getCloneIndex() + 1) * o
                        },
                        a = r(i, function(t) {
                            var e = t.nextSibling;
                            return e && e.getPosition() >= t.getPosition() ? e : null
                        }, function(t) {
                            return t.getPosition() >= e + n
                        }),
                        l = r(i, function(t) {
                            var e = t.prevSibling;
                            return e && e.getPosition() <= t.getPosition() ? e : null
                        }, function(t) {
                            return t.getPosition() + t.getSize() <= e
                        });
                    return [i].concat(a, l).sort(function(t, e) {
                        return s(t) - s(e)
                    })
                }
                return t.filter(function(t) {
                    var e = t.getOutsetProgress();
                    return -1 < e && e < 1
                })
            }, e.getCurrentPanel = function() {
                return this.currentPanel
            }, e.getCurrentIndex = function() {
                var t = this.currentPanel;
                return t ? t.getIndex() : -1
            }, e.getNearestPanel = function() {
                return this.nearestPanel
            }, e.getCurrentProgress = function() {
                var t = this.stateMachine.getState(),
                    e = t.playing || t.holding ? this.nearestPanel : this.currentPanel,
                    n = this.panelManager;
                if (!e)
                    return NaN;
                var i = this.getScrollArea(),
                    r = i.prev,
                    o = i.next,
                    s = this.getCameraPosition(),
                    a = this.isOutOfBound(),
                    l = e.prevSibling,
                    u = e.nextSibling,
                    h = this.getHangerPosition(),
                    c = e.getAnchorPosition();
                a && l && u && s < o && h - l.getAnchorPosition() < c - h && (u = (e = l).nextSibling, l = e.prevSibling, c = e.getAnchorPosition());
                var f = e.getIndex() + (e.getCloneIndex() + 1) * n.getPanelCount(),
                    p = e.getSize();
                if (a) {
                    var g = this.getRelativeHangerPosition();
                    o + g < c ? h = c + h - g - o : c < r + g && (h = c + h - g - r)
                }
                var d = c <= h,
                    v = this.options.gap,
                    m = c,
                    P = c;
                d ? P = u ? u.getAnchorPosition() : c + p + v : m = l ? l.getAnchorPosition() : c - p - v;
                var x = (h - m) / (P - m);
                return (d ? f : l ? l.getIndex() : f - 1) + x
            }, e.updateAxesPosition = function(t) {
                var e = this.axes;
                e.off(),
                e.setTo({
                    flick: t
                }, 0),
                e.on(this.axesHandlers)
            }, e.getSize = function() {
                return this.state.size
            }, e.getScrollArea = function() {
                return this.state.scrollArea
            }, e.isOutOfBound = function() {
                var t = this.state,
                    e = this.options,
                    n = t.scrollArea;
                return !e.circular && e.bound && (t.position <= n.prev || t.position >= n.next)
            }, e.canSetBoundMode = function() {
                var t = this.options;
                return t.bound && !t.circular
            }, e.getViewportElement = function() {
                return this.viewportElement
            }, e.getCameraElement = function() {
                return this.cameraElement
            }, e.getScrollAreaSize = function() {
                var t = this.state.scrollArea;
                return t.next - t.prev
            }, e.getRelativeHangerPosition = function() {
                return this.state.relativeHangerPosition
            }, e.getHangerPosition = function() {
                return this.state.position + this.state.relativeHangerPosition
            }, e.getCameraPosition = function() {
                return this.state.position
            }, e.getPositionOffset = function() {
                return this.state.positionOffset
            }, e.getCheckedIndexes = function() {
                return this.state.checkedIndexes
            }, e.getVisiblePanels = function() {
                return this.visiblePanels
            }, e.setCurrentPanel = function(t) {
                this.currentPanel = t
            }, e.setLastIndex = function(t) {
                var e = this.currentPanel,
                    n = this.panelManager;
                n.setLastIndex(t),
                e && e.getIndex() > t && (this.currentPanel = n.lastPanel()),
                this.resize()
            }, e.setVisiblePanels = function(t) {
                this.visiblePanels = t
            }, e.connectAxesHandler = function(t) {
                var e = this.axes;
                this.axesHandlers = t,
                e.on(t)
            }, e.addPlugins = function(t) {
                var e = this,
                    n = [].concat(t);
                return n.forEach(function(t) {
                    t.init(e.flicking)
                }), this.plugins = this.plugins.concat(n), this
            }, e.removePlugins = function(t) {
                var n = this,
                    i = this.plugins;
                return [].concat(t).forEach(function(t) {
                    var e = i.indexOf(t);
                    -1 < e && i.splice(e, 1),
                    t.destroy(n.flicking)
                }), this
            }, e.updateCheckedIndexes = function(r) {
                var o = this.state,
                    s = 0;
                o.checkedIndexes.concat().forEach(function(t, e) {
                    var n = t[0],
                        i = t[1];
                    r.min <= i && r.max >= n && (o.checkedIndexes.splice(e - s, 1), s++)
                })
            }, e.appendUncachedPanelElements = function(t) {
                var n = this,
                    i = this.options,
                    r = document.createDocumentFragment();
                if (i.isEqualSize) {
                    var e = this.visiblePanels,
                        o = i.isEqualSize,
                        s = {};
                    this.visiblePanels = [],
                    Object.keys(this.panelBboxes).forEach(function(t) {
                        s[t] = !0
                    }),
                    t.forEach(function(t) {
                        var e = t.getOverlappedClass(o);
                        e && !s[e] ? (i.renderExternal || r.appendChild(t.getElement()), n.visiblePanels.push(t), s[e] = !0) : e || (i.renderExternal || r.appendChild(t.getElement()), n.visiblePanels.push(t))
                    }),
                    e.forEach(function(t) {
                        n.addVisiblePanel(t)
                    })
                } else
                    i.renderExternal || t.forEach(function(t) {
                        return r.appendChild(t.getElement())
                    }),
                    this.visiblePanels = t.filter(function(t) {
                        return Boolean(t)
                    });
                i.renderExternal || this.cameraElement.appendChild(r)
            }, e.updateClonePanels = function() {
                var t = this.panelManager;
                this.options.circular && 0 < t.getPanelCount() && (this.clonePanels(), this.updateClonedPanelPositions()),
                t.chainAllPanels()
            }, e.getVisibleIndexOf = function(e) {
                return Ve(this.visiblePanels, function(t) {
                    return t === e
                })
            }, e.build = function() {
                this.setElements(),
                this.applyCSSValue(),
                this.setMoveType(),
                this.setAxesInstance(),
                this.refreshPanels(),
                this.setDefaultPanel(),
                this.resize(),
                this.moveToDefaultPanel()
            }, e.setElements = function() {
                var t = this.state,
                    e = this.options,
                    n = this.flicking.getElement(),
                    i = e.classPrefix,
                    r = n.children[0],
                    o = r && Re(r, i + "-viewport"),
                    s = o ? r : document.createElement("div"),
                    a = o ? s.children[0] : n.children[0],
                    l = a && Re(a, i + "-camera"),
                    u = l ? a : document.createElement("div");
                l ? t.originalCameraStyle = {
                    className: u.getAttribute("class"),
                    style: u.getAttribute("style")
                } : (u.className = i + "-camera", He(o ? s.children : n.children).forEach(function(t) {
                    u.appendChild(t)
                }));
                o ? t.originalViewportStyle = {
                    className: s.getAttribute("class"),
                    style: s.getAttribute("style")
                } : (s.className = i + "-viewport", n.appendChild(s)),
                l && o || s.appendChild(u),
                this.viewportElement = s,
                this.cameraElement = u,
                t.isViewportGiven = o,
                t.isCameraGiven = l
            }, e.applyCSSValue = function() {
                var t = this.options,
                    e = this.viewportElement,
                    n = this.cameraElement,
                    i = this.viewportElement.style;
                Ne(e, de),
                Ne(n, ve),
                e.style.zIndex = "" + t.zIndex,
                t.horizontal ? (i.minHeight = "100%", i.width = "100%") : (i.minWidth = "100%", i.height = "100%"),
                t.overflow && (i.overflow = "visible"),
                this.panelManager = new qe(this.cameraElement, t)
            }, e.setMoveType = function() {
                var t = this.options.moveType;
                switch (t.type) {
                case ce.SNAP:
                    this.moveType = new $e(t.count);
                    break;
                case ce.FREE_SCROLL:
                    this.moveType = new tn;
                    break;
                default:
                    throw new Error("moveType is not correct!")
                }
            }, e.setAxesInstance = function() {
                var t = this.state,
                    e = this.options,
                    n = t.scrollArea,
                    i = e.horizontal;
                this.axes = new re({
                    flick: {
                        range: [n.prev, n.next],
                        circular: e.circular,
                        bounce: [0, 0]
                    }
                }, {
                    easing: e.panelEffect,
                    deceleration: e.deceleration,
                    interruptable: !0
                }),
                this.panInput = new he(this.viewportElement, {
                    inputType: e.inputType,
                    thresholdAngle: e.thresholdAngle,
                    scale: e.horizontal ? [-1, 0] : [0, -1]
                }),
                this.axes.connect(i ? ["flick", ""] : ["", "flick"], this.panInput)
            }, e.refreshPanels = function() {
                var n = this,
                    t = this.panelManager,
                    e = He(this.cameraElement.children).map(function(t, e) {
                        return new Ye(t, e, n)
                    });
                t.replacePanels(e, []),
                this.visiblePanels = e.filter(function(t) {
                    return Boolean(t)
                })
            }, e.setDefaultPanel = function() {
                var t = this.options,
                    e = this.panelManager,
                    n = this.panelManager.getRange(),
                    i = _e(t.defaultIndex, n.min, n.max);
                this.currentPanel = e.get(i)
            }, e.clonePanels = function() {
                var t = this.state,
                    e = this.options,
                    r = this.panelManager,
                    n = e.gap,
                    i = t.size,
                    o = r.firstPanel(),
                    s = r.lastPanel();
                if (o) {
                    for (var a, l = r.originalPanels(), u = l.concat().reverse(), h = s.getPosition() + s.getSize() - o.getPosition() + n, c = o.getRelativeAnchorPosition(), f = this.getRelativeHangerPosition(), p = (f - c) % h, g = 0, d = 0, v = u; d < v.length; d++) {
                        if ((y = v[d]) && p <= (g += y.getSize() + n)) {
                            a = y;
                            break
                        }
                    }
                    for (var m, P = (i - f + c) % h, x = g = 0, E = l; x < E.length; x++) {
                        var y;
                        if ((y = E[x]) && P <= (g += y.getSize() + n)) {
                            m = y;
                            break
                        }
                    }
                    var b = 0 !== a.getIndex() && a.getIndex() <= m.getIndex(),
                        C = Math.ceil((f + o.getSize() - c) / h) + Math.ceil((i - f + c) / h) - 1 + (b ? 1 : 0),
                        S = r.getCloneCount();
                    if (r.setCloneCount(C), !e.renderExternal)
                        if (S < C)
                            for (var w = function(e) {
                                    var t,
                                        n = l.map(function(t) {
                                            return t.clone(e)
                                        }),
                                        i = document.createDocumentFragment();
                                    n.forEach(function(t) {
                                        return i.appendChild(t.getElement())
                                    }),
                                    I.cameraElement.appendChild(i),
                                    (t = I.visiblePanels).push.apply(t, n.filter(function(t) {
                                        return Boolean(t)
                                    })),
                                    r.insertClones(e, 0, n)
                                }, I = this, T = S; T < C; T++)
                                w(T);
                        else
                            C < S && r.removeClonesAfter(C)
                }
            }, e.moveToDefaultPanel = function() {
                var t = this.state,
                    e = this.panelManager,
                    n = this.options,
                    i = this.panelManager.getRange(),
                    r = _e(n.defaultIndex, i.min, i.max),
                    o = e.get(r),
                    s = 0;
                o && (s = o.getAnchorPosition() - t.relativeHangerPosition, s = this.canSetBoundMode() ? _e(s, t.scrollArea.prev, t.scrollArea.next) : s),
                this.moveCamera(s),
                this.axes.setTo({
                    flick: s
                }, 0)
            }, e.updateSize = function() {
                var t = this.state,
                    e = this.options,
                    n = this.panelManager.originalPanels().filter(function(t) {
                        return Boolean(t)
                    }),
                    i = this.updateBbox(),
                    r = t.size;
                t.size = e.horizontal ? i.width : i.height,
                r !== t.size && (t.relativeHangerPosition = De(e.hanger, t.size), t.infiniteThreshold = De(e.infiniteThreshold, t.size)),
                n.length <= 0 || this.resizePanels(n)
            }, e.updateOriginalPanelPositions = function() {
                var i = this.options.gap,
                    t = this.panelManager,
                    e = t.firstPanel(),
                    n = t.originalPanels();
                if (e) {
                    var r = this.currentPanel,
                        o = this.nearestPanel,
                        s = this.stateMachine.getState(),
                        a = this.state.scrollArea,
                        l = e.getPosition(),
                        u = e;
                    if (o)
                        u = !ke(s.lastPosition + s.delta, a.prev, a.next) ? r : o;
                    else
                        0 < e.getIndex() && (u = r);
                    var h = n.slice(0, u.getIndex() + (u.getCloneIndex() + 1) * n.length).reduce(function(t, e) {
                        return t + e.getSize() + i
                    }, 0);
                    l = u.getPosition() - h,
                    n.forEach(function(t) {
                        var e = l,
                            n = t.getSize();
                        t.setPosition(e),
                        l += n + i
                    }),
                    this.options.renderOnlyVisible || n.forEach(function(t) {
                        return t.setPositionCSS()
                    })
                }
            }, e.updateClonedPanelPositions = function() {
                var t = this.state,
                    e = this.options,
                    n = this.panelManager,
                    i = n.clonedPanels().reduce(function(t, e) {
                        return t.concat(e)
                    }, []).filter(function(t) {
                        return Boolean(t)
                    }),
                    r = t.scrollArea,
                    o = n.firstPanel(),
                    s = n.lastPanel();
                if (o) {
                    for (var a = s.getPosition() + s.getSize() - o.getPosition() + e.gap, l = 0, u = i; l < u.length; l++) {
                        var h = (d = u[l]).getOriginalPanel(),
                            c = a * (d.getCloneIndex() + 1) + h.getPosition();
                        d.setPosition(c)
                    }
                    for (var f = o.getPosition(), p = 0, g = i.concat().reverse(); p < g.length; p++) {
                        var d,
                            v = (d = g[p]).getSize(),
                            m = f - v - e.gap;
                        if (m + v <= r.prev)
                            break;
                        d.setPosition(m),
                        f = m
                    }
                    this.options.renderOnlyVisible || i.forEach(function(t) {
                        t.setPositionCSS()
                    })
                }
            }, e.updateScrollArea = function() {
                var t = this.state,
                    e = this.panelManager,
                    n = this.options,
                    i = this.axes,
                    r = e.firstPanel(),
                    o = e.lastPanel(),
                    s = t.relativeHangerPosition;
                if (r)
                    if (this.canSetBoundMode()) {
                        if ((u = o.getPosition() + o.getSize() - r.getPosition()) >= t.size)
                            t.scrollArea = {
                                prev: r.getPosition(),
                                next: o.getPosition() + o.getSize() - t.size
                            };
                        else {
                            var a = De(n.anchor, u),
                                l = r.getPosition() + _e(a, u - (t.size - s), s);
                            t.scrollArea = {
                                prev: l - s,
                                next: l - s
                            }
                        }
                    } else if (n.circular) {
                        var u = o.getPosition() + o.getSize() - r.getPosition() + n.gap;
                        t.scrollArea = {
                            prev: r.getAnchorPosition() - s,
                            next: u + r.getAnchorPosition() - s
                        }
                    } else
                        t.scrollArea = {
                            prev: r.getAnchorPosition() - s,
                            next: o.getAnchorPosition() - s
                        };
                else
                    t.scrollArea = {
                        prev: 0,
                        next: 0
                    };
                var h,
                    c,
                    f = t.size,
                    p = n.bounce;
                if ((c = p) && c.constructor === Array)
                    h = p.map(function(t) {
                        return De(t, f, ge.bounce)
                    });
                else {
                    var g = De(p, f, ge.bounce);
                    h = [g, g]
                }
                var d = i.axis.flick;
                d.range = [t.scrollArea.prev, t.scrollArea.next],
                d.bounce = h
            }, e.checkNeedPanel = function(t) {
                var e = this.state,
                    n = this.options,
                    i = this.panelManager,
                    r = this.currentPanel,
                    o = this.nearestPanel,
                    s = this.stateMachine.getState();
                if (n.infinite) {
                    var a = n.gap,
                        l = e.infiniteThreshold,
                        u = i.getLastIndex();
                    if (!(u < 0))
                        if (r && o) {
                            for (var h = o.getPosition(), c = s.holding || s.playing ? o : r; c;) {
                                var f = c.getIndex(),
                                    p = c.nextSibling,
                                    g = !(f === (E = i.lastPanel()).getIndex()) && p ? p.getIndex() : u + 1,
                                    d = o.getPosition(),
                                    v = c.getPosition() + c.getSize() - (d - h) + a - l <= e.position + e.size;
                                if (1 < g - f && v && this.triggerNeedPanel({
                                    axesEvent: t,
                                    siblingPanel: c,
                                    direction: we.NEXT,
                                    indexRange: {
                                        min: f + 1,
                                        max: g - 1,
                                        length: g - f - 1
                                    }
                                }), n.circular && f === u && v) {
                                    var m = (x = i.firstPanel()) ? x.getIndex() : -1;
                                    0 < m && this.triggerNeedPanel({
                                        axesEvent: t,
                                        siblingPanel: c,
                                        direction: we.NEXT,
                                        indexRange: {
                                            min: 0,
                                            max: m - 1,
                                            length: m
                                        }
                                    })
                                }
                                var P = i.lastPanel();
                                if (P && f === P.getIndex() || !v)
                                    break;
                                c = c.nextSibling
                            }
                            for (c = o; c;) {
                                var x,
                                    E,
                                    y = e.position,
                                    b = c.getIndex(),
                                    C = c.prevSibling,
                                    S = !(b === (x = i.firstPanel()).getIndex()) && C ? C.getIndex() : -1;
                                d = o.getPosition(),
                                v = y <= c.getPosition() - (d - h) - a + l;
                                if (1 < b - S && v && this.triggerNeedPanel({
                                    axesEvent: t,
                                    siblingPanel: c,
                                    direction: we.PREV,
                                    indexRange: {
                                        min: S + 1,
                                        max: b - 1,
                                        length: b - S - 1
                                    }
                                }), n.circular && 0 === b && v)
                                    if ((E = i.lastPanel()) && E.getIndex() < u) {
                                        var w = E.getIndex();
                                        this.triggerNeedPanel({
                                            axesEvent: t,
                                            siblingPanel: c,
                                            direction: we.PREV,
                                            indexRange: {
                                                min: w + 1,
                                                max: u,
                                                length: u - w
                                            }
                                        })
                                    }
                                var I = i.firstPanel();
                                if (I && b === I.getIndex() || !v)
                                    break;
                                c = c.prevSibling
                            }
                        } else
                            this.triggerNeedPanel({
                                axesEvent: t,
                                siblingPanel: null,
                                direction: null,
                                indexRange: {
                                    min: 0,
                                    max: u,
                                    length: u + 1
                                }
                            })
                }
            }, e.triggerNeedPanel = function(t) {
                var r = this,
                    e = t.axesEvent,
                    o = t.siblingPanel,
                    s = t.direction,
                    a = t.indexRange,
                    l = this.options,
                    n = this.state.checkedIndexes,
                    i = n.some(function(t) {
                        var e = t[0],
                            n = t[1];
                        return e === a.min || n === a.max
                    }),
                    u = this.flicking.hasOn(Pe.NEED_PANEL);
                if (!i && u) {
                    n.push([a.min, a.max]);
                    var h = o ? o.getIndex() : 0,
                        c = !!e && e.isTrusted;
                    this.triggerEvent(Pe.NEED_PANEL, e, c, {
                        index: h,
                        panel: o,
                        direction: s,
                        range: a,
                        fill: function(t) {
                            var e = r.panelManager;
                            if (!o)
                                return r.insert(e.getRange().max + 1, t);
                            var n = ze(t),
                                i = s === we.NEXT ? n.slice(0, a.length) : n.slice(-a.length);
                            return s === we.NEXT ? l.circular && h === e.getLastIndex() ? r.insert(0, i) : o.insertAfter(i) : s === we.PREV ? l.circular && 0 === h ? r.insert(a.max - i.length + 1, i) : o.insertBefore(i) : r.insert(0, i)
                        }
                    })
                }
            }, e.updateVisiblePanels = function() {
                var e = this.state,
                    t = this.options,
                    n = this.panelManager,
                    i = this.stateMachine.getState(),
                    r = this.cameraElement,
                    o = t.renderExternal;
                if (t.renderOnlyVisible)
                    if (this.nearestPanel) {
                        var s = this.visiblePanels,
                            a = this.calcVisiblePanels(),
                            l = this.checkVisiblePanelChange(s, a),
                            u = l.addedPanels,
                            h = l.removedPanels;
                        if (!(u.length <= 0 && h.length <= 0)) {
                            if (i.holding)
                                a.push.apply(a, h);
                            else {
                                var c = a[0].getPosition();
                                e.positionOffset = c
                            }
                            if (a.forEach(function(t) {
                                t.setPositionCSS(e.positionOffset)
                            }), !o) {
                                i.holding || h.forEach(function(t) {
                                    var e = t.getElement();
                                    e.parentNode && r.removeChild(e)
                                });
                                var f = document.createDocumentFragment();
                                u.forEach(function(t) {
                                    f.appendChild(t.getElement())
                                }),
                                r.appendChild(f)
                            }
                            var p = a[0],
                                g = a[a.length - 1],
                                d = function(t) {
                                    return t.getIndex() + (t.getCloneIndex() + 1) * n.getPanelCount()
                                },
                                v = {
                                    min: d(p),
                                    max: d(g)
                                };
                            this.visiblePanels = a,
                            this.flicking.trigger(Pe.VISIBLE_CHANGE, {
                                type: Pe.VISIBLE_CHANGE,
                                range: v
                            })
                        }
                    } else
                        for (this.visiblePanels = []; r.firstChild;)
                            r.removeChild(r.firstChild)
            }, e.checkVisiblePanelChange = function(i, r) {
                var o = i.map(function() {
                        return 0
                    }),
                    s = r.map(function() {
                        return 0
                    });
                return i.forEach(function(n, i) {
                    r.forEach(function(t, e) {
                        n === t && (o[i]++, s[e]++)
                    })
                }), {
                    removedPanels: o.reduce(function(t, e, n) {
                        return 0 === e ? t.concat([i[n]]) : t
                    }, []),
                    addedPanels: s.reduce(function(t, e, n) {
                        return 0 === e ? t.concat([r[n]]) : t
                    }, [])
                }
            }, e.resizePanels = function(t) {
                var e = this.options,
                    n = this.panelBboxes;
                if (!0 !== e.isEqualSize)
                    if (e.isEqualSize) {
                        var i = e.isEqualSize;
                        t.forEach(function(t) {
                            var e = t.getOverlappedClass(i);
                            e ? (t.resize(n[e]), n[e] = t.getBbox()) : t.resize()
                        })
                    } else
                        t.forEach(function(t) {
                            t.resize()
                        });
                else {
                    if (!n.default) {
                        var r = t[0];
                        n.default = r.getBbox()
                    }
                    var o = n.default;
                    t.forEach(function(t) {
                        t.resize(o)
                    })
                }
            }, t
        }(),
        nn = "UA-70842526-24",
        rn = Math.random() * Math.pow(10, 20) / Math.pow(10, 10);
    var on = function(f) {
        function t(t, e) {
            void 0 === e && (e = {});
            var n,
                c = f.call(this) || this;
            if (c.isPanelChangedAtBeforeSync = !1, c.resize = function() {
                var t = c.viewport,
                    e = c.options,
                    n = c.getElement(),
                    i = t.panelManager.allPanels();
                e.isConstantSize || i.forEach(function(t) {
                    return t.unCacheBbox()
                });
                var r = e.renderOnlyVisible && !e.isConstantSize && !0 !== e.isEqualSize,
                    o = n.parentElement,
                    s = o.style.height;
                return o.style.height = o.offsetHeight + "px", t.unCacheBbox(), t.updateBbox(), r && t.appendUncachedPanelElements(i), t.resize(), o.style.height = s, c
            }, c.triggerEvent = function(t, e, n, i) {
                void 0 === i && (i = {});
                var r = c.viewport,
                    o = !0;
                if (r) {
                    var s = r.stateMachine.getState(),
                        a = r.getScrollArea(),
                        l = a.prev,
                        u = a.next,
                        h = Be(r.getCameraPosition(), [l, l, u]);
                    c.options.circular && (h %= 1),
                    o = !f.prototype.trigger.call(c, t, Me({
                        type: t,
                        index: c.getIndex(),
                        panel: c.getCurrentPanel(),
                        direction: s.direction,
                        holding: s.holding,
                        progress: h,
                        axesEvent: e,
                        isTrusted: n
                    }, i))
                }
                return {
                    onSuccess: function(t) {
                        return o || t(), this
                    },
                    onStopped: function(t) {
                        return o && t(), this
                    }
                }
            }, c.moveCamera = function(t) {
                var e = c.viewport,
                    n = e.stateMachine.getState(),
                    i = c.options,
                    r = t.pos.flick,
                    o = e.getCameraPosition();
                if (t.isTrusted && n.holding) {
                    var s = i.horizontal ? t.inputEvent.offsetX : t.inputEvent.offsetY,
                        a = r - o,
                        l = s < 0 === r < o;
                    if (i.circular && l)
                        a = (0 < a ? -1 : 1) * (e.getScrollAreaSize() - Math.abs(a));
                    var u = 0 === a ? n.direction : 0 < a ? we.NEXT : we.PREV;
                    n.direction = u
                }
                return n.delta += t.delta.flick, e.moveCamera(r, t), c.triggerEvent(Pe.MOVE, t, t.isTrusted).onStopped(function() {
                    e.moveCamera(o, t)
                })
            }, Oe(t)) {
                if (!(n = document.querySelector(t)))
                    throw new Error("Base element doesn't exist.")
            } else {
                if (!t.nodeName || 1 !== t.nodeType)
                    throw new Error("Element should be provided in string or HTMLElement.");
                n = t
            }
            c.wrapper = n,
            c.options = Me({}, ge, e);
            var i = c.options,
                r = i.moveType;
            return r in fe && (i.moveType = fe[r]), c.viewport = new en(c, c.options, c.triggerEvent), c.listenInput(), c.listenResize(), c.options.collectStatistics && function(t, e, n) {
                if (pe)
                    try {
                        var i = window.innerWidth,
                            r = window.innerHeight,
                            o = window.screen || {
                                width: i,
                                height: r
                            },
                            s = ["v=1", "t=event", "dl=" + location.href, "ul=" + (navigator.language || "en-us").toLowerCase(), "de=" + (document.charset || document.inputEncoding || document.characterSet || "utf-8"), "dr=" + document.referrer, "dt=" + document.title, "sr=" + o.width + "x" + o.height, "vp=" + i + "x" + r, "ec=" + t, "ea=" + e, "el=" + JSON.stringify(n), "cid=" + rn, "tid=" + nn, "cd1=3.4.7", "z=" + Math.floor(1e7 * Math.random())],
                            a = new XMLHttpRequest;
                        a.open("GET", "https://www.google-analytics.com/collect?" + s.join("&")),
                        a.send()
                    } catch (t) {}
            }("usage", "options", e), c
        }
        r(t, f);
        var e = t.prototype;
        return e.prev = function(t) {
            var e = this.getCurrentPanel(),
                n = this.viewport.stateMachine.getState();
            if (e && n.type === Ee) {
                var i = e.prev();
                i && i.focus(t)
            }
            return this
        }, e.next = function(t) {
            var e = this.getCurrentPanel(),
                n = this.viewport.stateMachine.getState();
            if (e && n.type === Ee) {
                var i = e.next();
                i && i.focus(t)
            }
            return this
        }, e.moveTo = function(t, e) {
            var n = this.viewport,
                i = n.panelManager.get(t),
                r = n.stateMachine.getState();
            if (!i || r.type !== Ee)
                return this;
            var o = i.getAnchorPosition(),
                s = n.getHangerPosition(),
                a = i;
            if (this.options.circular) {
                var l = n.getScrollAreaSize(),
                    u = [o - l, o, o + l].reduce(function(t, e) {
                        return Math.abs(e - s) < Math.abs(t - s) ? e : t
                    }, 1 / 0) - i.getRelativeAnchorPosition(),
                    h = i.getIdenticalPanels(),
                    c = u - o;
                0 < c ? a = h[1] : c < 0 && (a = h[h.length - 1]),
                (a = a.clone(a.getCloneIndex(), !0)).setPosition(u)
            }
            var f = this.getIndex();
            if (s === a.getAnchorPosition() && f === t)
                return this;
            var p = i.getIndex() === n.getCurrentIndex() ? "" : Pe.CHANGE;
            return n.moveTo(a, n.findEstimatedPosition(a), p, null, e), this
        }, e.getIndex = function() {
            return this.viewport.getCurrentIndex()
        }, e.getElement = function() {
            return this.wrapper
        }, e.getCurrentPanel = function() {
            var t = this.viewport.getCurrentPanel();
            return t || null
        }, e.getPanel = function(t) {
            var e = this.viewport.panelManager.get(t);
            return e || null
        }, e.getAllPanels = function(t) {
            var e = this.viewport.panelManager;
            return (t ? e.allPanels() : e.originalPanels()).filter(function(t) {
                return !!t
            })
        }, e.getVisiblePanels = function() {
            return this.viewport.calcVisiblePanels()
        }, e.getPanelCount = function() {
            return this.viewport.panelManager.getPanelCount()
        }, e.getCloneCount = function() {
            return this.viewport.panelManager.getCloneCount()
        }, e.getLastIndex = function() {
            return this.viewport.panelManager.getLastIndex()
        }, e.setLastIndex = function(t) {
            return this.viewport.setLastIndex(t), this
        }, e.isPlaying = function() {
            return this.viewport.stateMachine.getState().playing
        }, e.enableInput = function() {
            return this.viewport.enable(), this
        }, e.disableInput = function() {
            return this.viewport.disable(), this
        }, e.getStatus = function() {
            var t = this.viewport,
                e = t.panelManager.originalPanels().filter(function(t) {
                    return !!t
                }).map(function(t) {
                    return {
                        html: t.getElement().outerHTML,
                        index: t.getIndex()
                    }
                });
            return {
                index: t.getCurrentIndex(),
                panels: e,
                position: t.getCameraPosition()
            }
        }, e.setStatus = function(t) {
            this.viewport.restore(t)
        }, e.addPlugins = function(t) {
            return this.viewport.addPlugins(t), this
        }, e.removePlugins = function(t) {
            return this.viewport.removePlugins(t), this
        }, e.destroy = function(t) {
            for (var e in void 0 === t && (t = {}), this.off(), this.options.autoResize && window.removeEventListener("resize", this.resize), this.viewport.destroy(t), this)
                this[e] = null
        }, e.prepend = function(t) {
            var e = this.viewport,
                n = ze(t),
                i = Math.max(e.panelManager.getRange().min - n.length, 0);
            return e.insert(i, n)
        }, e.append = function(t) {
            var e = this.viewport;
            return e.insert(e.panelManager.getRange().max + 1, t)
        }, e.replace = function(t, e) {
            return this.viewport.replace(t, e)
        }, e.remove = function(t, e) {
            return void 0 === e && (e = 1), this.viewport.remove(t, e)
        }, e.getRenderingIndexes = function(t) {
            var e = this.viewport,
                n = e.getVisiblePanels(),
                i = t.maintained.reduce(function(t, e) {
                    var n = e[0],
                        i = e[1];
                    return t[n] = i, t
                }, {}),
                r = t.prevList.length,
                o = t.list.length,
                s = t.added,
                a = n.map(function(t) {
                    return (e = t).getIndex() + (e.getCloneIndex() + 1) * r;
                    var e
                }),
                l = (a = a.filter(function(t) {
                    return null != i[t % r]
                }).map(function(t) {
                    var e = Math.floor(t / r);
                    return i[t % r] + o * e
                })).concat(s),
                u = e.panelManager.allPanels();
            return e.setVisiblePanels(l.map(function(t) {
                return u[t]
            })), l
        }, e.beforeSync = function(t) {
            var e = this,
                n = t.maintained,
                s = t.added,
                i = t.changed,
                o = t.removed,
                r = this.viewport,
                a = r.panelManager,
                l = this.options.circular,
                u = a.getCloneCount(),
                h = a.clonedPanels(),
                c = r.getVisiblePanels().filter(function(e) {
                    return Ve(o, function(t) {
                        return t === e.getIndex()
                    }) < 0
                });
            if (r.setVisiblePanels(c), s.length <= 0 && o.length <= 0 && i.length <= 0 && u === h.length)
                return this;
            var f = a.originalPanels(),
                p = [],
                g = Le(u).map(function() {
                    return []
                });
            n.forEach(function(t) {
                var e = t[0],
                    n = t[1];
                p[n] = f[e],
                p[n].setIndex(n)
            }),
            s.forEach(function(t) {
                p[t] = new Ye(null, t, e.viewport)
            }),
            l && Le(u).forEach(function(i) {
                var r = h[i],
                    o = g[i];
                n.forEach(function(t) {
                    var e = t[0],
                        n = t[1];
                    o[n] = r ? r[e] : p[n].clone(i, !1),
                    o[n].setIndex(n)
                }),
                s.forEach(function(t) {
                    var e = p[t];
                    o[t] = e.clone(i, !1)
                })
            }),
            s.forEach(function(t) {
                r.updateCheckedIndexes({
                    min: t,
                    max: t
                })
            }),
            o.forEach(function(t) {
                r.updateCheckedIndexes({
                    min: t - 1,
                    max: t + 1
                })
            });
            var d = r.getCheckedIndexes();
            d.forEach(function(t, e) {
                var n = t[0],
                    i = t[1],
                    r = s.filter(function(t) {
                        return t < n && a.has(t)
                    }).length - o.filter(function(t) {
                        return t < n
                    }).length;
                d.splice(e, 1, [n + r, i + r])
            }),
            0 < i.length && n.forEach(function(t) {
                var e = t[1];
                r.updateCheckedIndexes({
                    min: e,
                    max: e
                })
            }),
            a.replacePanels(p, g),
            this.isPanelChangedAtBeforeSync = !0
        }, e.sync = function(t) {
            var i = t.list,
                e = t.maintained,
                n = t.added,
                r = t.changed,
                o = t.removed;
            if (n.length <= 0 && o.length <= 0 && r.length <= 0)
                return this;
            var s = this.viewport,
                a = this.options,
                l = a.renderOnlyVisible,
                u = a.circular,
                h = s.panelManager;
            if (!l) {
                var c = h.getRange(),
                    f = t;
                if (u) {
                    var p = c.max,
                        g = i.length / (h.getCloneCount() + 1) >> 0,
                        d = n.filter(function(t) {
                            return t < g
                        }),
                        v = o.filter(function(t) {
                            return t <= p
                        });
                    f = {
                        added: d,
                        maintained: e.filter(function(t) {
                            return t[0] <= p
                        }),
                        removed: v,
                        changed: r.filter(function(t) {
                            return t[0] <= p
                        })
                    }
                }
                this.beforeSync(f)
            }
            var m = l ? s.getVisiblePanels() : this.getAllPanels(!0);
            return n.forEach(function(t) {
                var e = i[t],
                    n = m[t];
                n.setElement(e),
                n.unCacheBbox()
            }), this.isPanelChangedAtBeforeSync && (s.setVisiblePanels([]), this.isPanelChangedAtBeforeSync = !1), s.resize(), this
        }, e.listenInput = function() {
            var n = this,
                t = n.viewport,
                i = t.stateMachine;
            n.eventContext = {
                flicking: n,
                viewport: n.viewport,
                transitTo: i.transitTo,
                triggerEvent: n.triggerEvent,
                moveCamera: n.moveCamera,
                stopCamera: t.stopCamera
            };
            var r = {},
                e = function(t) {
                    var e = xe[t];
                    r[e] = function(t) {
                        return i.fire(e, t, n.eventContext)
                    }
                };
            for (var o in xe)
                e(o);
            n.viewport.connectAxesHandler(r)
        }, e.listenResize = function() {
            this.options.autoResize && window.addEventListener("resize", this.resize)
        }, t.VERSION = "3.4.7", t.DIRECTION = we, t.EVENTS = Pe, t
    }(t);
    return on.withFlickingMethods = function(t, o) {
        Object.keys(Ie).forEach(function(r) {
            t[r] || (t[r] = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                var n,
                    i = (n = this[o])[r].apply(n, t);
                return i === this[o] ? this : i
            })
        })
    }, on.DEFAULT_OPTIONS = ge, on.MOVE_TYPE = ce, on
});
//# sourceMappingURL=flicking.pkgd.min.js.map

/* ==== INCLUDE: /js/blocks/forms.js ==== */

;
(function() {


    function processSubmitResponse(origForm, html) {

        const targetFormEl = origForm.querySelector('[name=__targetForm]')
        if (!targetFormEl) {
            console.error("Failed to find __targetForm")
            return
        }

        const targetForm = targetFormEl.getAttribute('value')

        const htmlFragment = _G.createFragment(html)

        const newTargetFormEl = htmlFragment.querySelector('[name=__targetForm][value="' + targetForm + '"]')

        if (!newTargetFormEl) {
            console.error("Failed to find targetForm in the returned response")
            return
        }
        const newForm = newTargetFormEl.closest('form')// const newForm = _G.createFragment( html ).querySelector('form')
        newForm.querySelectorAll('.form-error').forEach(el => {
            el.remove()
        })
        origForm.parentElement.replaceChild(newForm, origForm)

        setTimeout(function() {
            const firstError = newForm.querySelector('.control-error')
            if (firstError) {
                const top = firstError.getBoundingClientRect().top
                if (top < 0) {
                    window.scrollTo({
                        top: window.scrollY + top - 100,
                        behavior: 'smooth'
                    })
                }
            }
        }, 50)
    }

    _G.onSubmitForm = (form, customCallback) => {

        let submitting = true

        function submitFeedback(form) {
            setTimeout(() => {

                if (!submitting) {
                    return
                }
                const submit = form.querySelector('[type=submit]')
                if (submit) {
                    // const submitText = submit.innerText;
                    // submit.setAttribute('data-submit-text', submitText )
                    // submit.innerText = 'Sending'
                    submit.classList.add('submitting')
                    submit.setAttribute('disabled', 'disabled')
                }
            }, 100)
        }

        function undoSubmitFeedback(form) {
            // note that we are passing our original form, not the new replaced form
            // so this will only fire if there was a network issue and no form
            // arrived back; otherwise, the new form would have had reset submit anyways
            const submit = form.querySelector('[type=submit]')
            if (submit) {
                // submit.innerText = submit.getAttribute('data-submit-text')
                submit.classList.remove('submitting')
                submit.removeAttribute('disabled')
            }
        }

        let authTk = form.getAttribute('data-tk')
        if (!authTk) {
            // try hidden
            const hidden = form.querySelector('input[name=__sh]')
            if (hidden) {
                authTk = hidden.getAttribute('value')
            }
            if (!authTk) {
                // bail
                console.error('auth token missing')
                return
            }
        }

        const data = new URLSearchParams()
        for (const pair of new FormData(form)) {
            data.append(pair[0], pair[1].toString())
        }
        data.append('__src_url', window.location.href)
        data.append('__sh', authTk)

        submitFeedback(form)

        setTimeout(() => {
            fetch(window.location.href, {
                method: 'post',
                body: data,
                headers: {
                    'X-Requested-With': 'fetch',
                    'X-Form-Submit': 'true',
                    'X-Form-Submit-From': window.location.href,
                }
            }).then(response => {
                if (customCallback) {
                    return customCallback(response)
                }
                const redir = response.headers.get('Location')
                if (redir) {
                    return window.location = redir
                }
                response.text().then(html => {
                    // console.log( 'form html', html )

                    const error = response.headers.get('X-Form-Error')
                    const successURL = response.headers.get('X-Success-URL')
                    const success = response.headers.get('X-Success-Message')

                    if (!error && success && successURL) {
                        window.location = successURL
                        return
                    }

                    processSubmitResponse(form, html)

                    if (error) {
                        _G.quickMessage(error, {
                            error: true
                        });
                    }
                    else if (success) {
                        _G.quickMessage(success)

                        if (window.dataLayer) {
                            window.dataLayer.push({
                                event: 'formSubmitted',
                                formURL: window.location.href,
                                title: document.title,
                                formName: data.get('__formName') || ''
                            })
                        }
                    }
                })
            }).catch(err => {
                console.error("error occurred during form submission", err)
                _G.quickMessage('Error occurred during form submission', {
                    error: true
                });
            }).finally(() => {
                submitting = false
                undoSubmitFeedback(form)
            })
        }, 1000)


        return false;
    }


    function processBlogCommentSubmitResponse(origForm, html) {

        const formID = origForm.getAttribute("id");

        const htmlFragment = _G.createFragment(html)

        const newForm = htmlFragment.querySelector('#' + formID)
        // const successEl = newForm.querySelector(".form-success");
        // if( successEl && successEl.innerText ) {
        //     const message = successEl.innerText;
        //     setTimeout(() => {
        //         _G.quickMessage( message, {
        //
        //         });
        //     }, 100 );
        //     successEl.remove();
        // }

        // const newForm = _G.createFragment( html ).querySelector('form')
        newForm.querySelectorAll('.form-error').forEach(el => {
            el.remove()
        })
        const authTk = newForm.getAttribute("data-tk");
        if (authTk) {
            const authTkEl = document.createElement("input");
            authTkEl.setAttribute("type", "hidden");
            authTkEl.setAttribute("value", authTk);
            newForm.appendChild(authTkEl);
        }
        const srcUrlEl = document.createElement("input");
        srcUrlEl.setAttribute("type", "hidden");
        srcUrlEl.setAttribute("value", window.location.href);
        newForm.appendChild(srcUrlEl);
        origForm.parentElement.replaceChild(newForm, origForm);


        setTimeout(function() {
            const firstError = newForm.querySelector('.control-error')
            if (firstError) {
                const top = firstError.getBoundingClientRect().top
                if (top < 0) {
                    window.scrollTo({
                        top: window.scrollY + top - 100,
                        behavior: 'smooth'
                    })
                }
            }
        }, 50)
    }

    _G.onBlogCommentSubmitForm = (form, customCallback) => {

        let submitting = true

        function submitFeedback(form) {
            setTimeout(() => {

                if (!submitting) {
                    return
                }
                const submit = form.querySelector('[type=submit]')
                if (submit) {
                    // const submitText = submit.innerText;
                    // submit.setAttribute('data-submit-text', submitText )
                    // submit.innerText = 'Sending'
                    submit.classList.add('submitting')
                    submit.setAttribute('disabled', 'disabled')
                }
            }, 100)
        }

        function undoSubmitFeedback(form) {
            // note that we are passing our original form, not the new replaced form
            // so this will only fire if there was a network issue and no form
            // arrived back; otherwise, the new form would have had reset submit anyways
            const submit = form.querySelector('[type=submit]')
            if (submit) {
                // submit.innerText = submit.getAttribute('data-submit-text')
                submit.classList.remove('submitting')
                submit.removeAttribute('disabled')
            }
        }

        let authTk = form.getAttribute('data-tk')
        if (!authTk) {
            // try hidden
            const hidden = form.querySelector('input[name=__sh]')
            if (hidden) {
                authTk = hidden.getAttribute('value')
            }
            if (!authTk) {
                // bail
                console.error('auth token missing')
                return
            }
        }

        const data = new URLSearchParams()
        for (const pair of new FormData(form)) {
            data.append(pair[0], pair[1].toString())
        }
        data.append('__src_url', window.location.href)
        data.append('__sh', authTk)

        submitFeedback(form)

        setTimeout(() => {
            fetch(window.location.href, {
                method: 'post',
                body: data,
                headers: {
                    'X-Requested-With': 'fetch',
                    'X-Form-Submit': 'true',
                    'X-Form-Submit-From': window.location.href,
                }
            }).then(response => {
                if (customCallback) {
                    return customCallback(response)
                }
                const redir = response.headers.get('Location')
                if (redir) {
                    return window.location = redir
                }
                response.text().then(html => {
                    // console.log( 'form html', html )

                    const error = response.headers.get('X-Form-Error')
                    const successURL = response.headers.get('X-Success-URL')
                    const success = true;
                    // const success = "Comment submitted. It will be reviewed and published shortly."

                    if (!error && success && successURL) {
                        window.location = successURL
                        return
                    }

                    processBlogCommentSubmitResponse(form, html)

                    if (error) {
                        _G.quickMessage(error, {
                            error: true
                        });
                    }
                    else {
                        // _G.quickMessage(success)

                        if (window.dataLayer) {
                            window.dataLayer.push({
                                event: 'formSubmitted',
                                formURL: window.location.href,
                                title: document.title,
                                formName: data.get('__formName') || ''
                            })
                        }
                    }
                })
            }).catch(err => {
                console.error("error occurred during form submission", err)
                _G.quickMessage('Error occurred during form submission', {
                    error: true
                });
            }).finally(() => {
                submitting = false
                undoSubmitFeedback(form)
            })
        }, 1000)


        return false;
    }
})()



;
/* ==== INCLUDE: /js/blocks/brand-footer.js ==== */
(function() {

    function hideDelete() {
        const deleteElements = document.querySelectorAll('.myrealpage-footer [data-command="delete"]');

        deleteElements.forEach(function(element) {
            element.style.display = 'none';
        });

        // const moveupElements = document.querySelectorAll('.myrealpage-footer [data-command="moveup"]');
        //
        // moveupElements.forEach(function (element) {
        //     element.style.display = 'none';
        // });
        //
        // const movedownElements = document.querySelectorAll('.myrealpage-footer [data-command="movedown"]');
        //
        // movedownElements.forEach(function (element) {
        //     element.style.display = 'none';
        // });

        const cloneElements = document.querySelectorAll('.myrealpage-footer [data-command="clone"]');

        cloneElements.forEach(function(element) {
            element.style.display = 'none';
        });
    }

    function addRef() {
        const links = document.querySelectorAll(".myrealpage-footer a[href=\"https://myrealpage.com/\"]");
        const hostname = window.location.hostname;
        links.forEach(link => {
            link.setAttribute("href", "https://myrealpage.com/?ref=" + encodeURIComponent(hostname));
        })
    }

    document.addEventListener('DOMContentLoaded', function() {
        hideDelete();
        addRef();
    });
})();
