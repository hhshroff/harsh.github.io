/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var u = (e, t) => () => (t || e((t = {
		exports: {}
	}).exports, t), t.exports);
	var Mi = u(() => {
		window.tram = function(e) {
			function t(l, m) {
				var b = new v.Bare;
				return b.init(l, m)
			}

			function r(l) {
				return l.replace(/[A-Z]/g, function(m) {
					return "-" + m.toLowerCase()
				})
			}

			function n(l) {
				var m = parseInt(l.slice(1), 16),
					b = m >> 16 & 255,
					w = m >> 8 & 255,
					T = 255 & m;
				return [b, w, T]
			}

			function i(l, m, b) {
				return "#" + (1 << 24 | l << 16 | m << 8 | b).toString(16).slice(1)
			}

			function o() {}

			function a(l, m) {
				d("Type warning: Expected: [" + l + "] Got: [" + typeof m + "] " + m)
			}

			function s(l, m, b) {
				d("Units do not match [" + l + "]: " + m + ", " + b)
			}

			function c(l, m, b) {
				if (m !== void 0 && (b = m), l === void 0) return b;
				var w = b;
				return ze.test(l) || !Ue.test(l) ? w = parseInt(l, 10) : Ue.test(l) && (w = 1e3 * parseFloat(l)), 0 > w && (w = 0), w === w ? w : b
			}

			function d(l) {
				fe.debug && window && window.console.warn(l)
			}

			function E(l) {
				for (var m = -1, b = l ? l.length : 0, w = []; ++m < b;) {
					var T = l[m];
					T && w.push(T)
				}
				return w
			}
			var f = function(l, m, b) {
					function w(ae) {
						return typeof ae == "object"
					}

					function T(ae) {
						return typeof ae == "function"
					}

					function C() {}

					function Z(ae, Ee) {
						function H() {
							var De = new le;
							return T(De.init) && De.init.apply(De, arguments), De
						}

						function le() {}
						Ee === b && (Ee = ae, ae = Object), H.Bare = le;
						var de, Se = C[l] = ae[l],
							ot = le[l] = H[l] = new C;
						return ot.constructor = H, H.mixin = function(De) {
							return le[l] = H[l] = Z(H, De)[l], H
						}, H.open = function(De) {
							if (de = {}, T(De) ? de = De.call(H, ot, Se, H, ae) : w(De) && (de = De), w(de))
								for (var Tr in de) m.call(de, Tr) && (ot[Tr] = de[Tr]);
							return T(ot.init) || (ot.init = ae), H
						}, H.open(Ee)
					}
					return Z
				}("prototype", {}.hasOwnProperty),
				_ = {
					ease: ["ease", function(l, m, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return m + b * (-2.75 * C * T + 11 * T * T + -15.5 * C + 8 * T + .25 * l)
					}],
					"ease-in": ["ease-in", function(l, m, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return m + b * (-1 * C * T + 3 * T * T + -3 * C + 2 * T)
					}],
					"ease-out": ["ease-out", function(l, m, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return m + b * (.3 * C * T + -1.6 * T * T + 2.2 * C + -1.8 * T + 1.9 * l)
					}],
					"ease-in-out": ["ease-in-out", function(l, m, b, w) {
						var T = (l /= w) * l,
							C = T * l;
						return m + b * (2 * C * T + -5 * T * T + 2 * C + 2 * T)
					}],
					linear: ["linear", function(l, m, b, w) {
						return b * l / w + m
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, m, b, w) {
						return b * (l /= w) * l + m
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, m, b, w) {
						return -b * (l /= w) * (l - 2) + m
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, m, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l + m : -b / 2 * (--l * (l - 2) - 1) + m
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, m, b, w) {
						return b * (l /= w) * l * l + m
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, m, b, w) {
						return b * ((l = l / w - 1) * l * l + 1) + m
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, m, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l * l + m : b / 2 * ((l -= 2) * l * l + 2) + m
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, m, b, w) {
						return b * (l /= w) * l * l * l + m
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, m, b, w) {
						return -b * ((l = l / w - 1) * l * l * l - 1) + m
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, m, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l * l * l + m : -b / 2 * ((l -= 2) * l * l * l - 2) + m
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, m, b, w) {
						return b * (l /= w) * l * l * l * l + m
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, m, b, w) {
						return b * ((l = l / w - 1) * l * l * l * l + 1) + m
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, m, b, w) {
						return (l /= w / 2) < 1 ? b / 2 * l * l * l * l * l + m : b / 2 * ((l -= 2) * l * l * l * l + 2) + m
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, m, b, w) {
						return -b * Math.cos(l / w * (Math.PI / 2)) + b + m
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, m, b, w) {
						return b * Math.sin(l / w * (Math.PI / 2)) + m
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, m, b, w) {
						return -b / 2 * (Math.cos(Math.PI * l / w) - 1) + m
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, m, b, w) {
						return l === 0 ? m : b * Math.pow(2, 10 * (l / w - 1)) + m
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, m, b, w) {
						return l === w ? m + b : b * (-Math.pow(2, -10 * l / w) + 1) + m
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, m, b, w) {
						return l === 0 ? m : l === w ? m + b : (l /= w / 2) < 1 ? b / 2 * Math.pow(2, 10 * (l - 1)) + m : b / 2 * (-Math.pow(2, -10 * --l) + 2) + m
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, m, b, w) {
						return -b * (Math.sqrt(1 - (l /= w) * l) - 1) + m
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, m, b, w) {
						return b * Math.sqrt(1 - (l = l / w - 1) * l) + m
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, m, b, w) {
						return (l /= w / 2) < 1 ? -b / 2 * (Math.sqrt(1 - l * l) - 1) + m : b / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + m
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, m, b, w, T) {
						return T === void 0 && (T = 1.70158), b * (l /= w) * l * ((T + 1) * l - T) + m
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, m, b, w, T) {
						return T === void 0 && (T = 1.70158), b * ((l = l / w - 1) * l * ((T + 1) * l + T) + 1) + m
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, m, b, w, T) {
						return T === void 0 && (T = 1.70158), (l /= w / 2) < 1 ? b / 2 * l * l * (((T *= 1.525) + 1) * l - T) + m : b / 2 * ((l -= 2) * l * (((T *= 1.525) + 1) * l + T) + 2) + m
					}]
				},
				p = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				g = document,
				O = window,
				R = "bkwld-tram",
				A = /[\-\.0-9]/g,
				x = /[A-Z]/,
				S = "number",
				L = /^(rgb|#)/,
				q = /(em|cm|mm|in|pt|pc|px)$/,
				P = /(em|cm|mm|in|pt|pc|px|%)$/,
				V = /(deg|rad|turn)$/,
				j = "unitless",
				Q = /(all|none) 0s ease 0s/,
				oe = /^(width|height)$/,
				re = " ",
				X = g.createElement("a"),
				I = ["Webkit", "Moz", "O", "ms"],
				D = ["-webkit-", "-moz-", "-o-", "-ms-"],
				F = function(l) {
					if (l in X.style) return {
						dom: l,
						css: l
					};
					var m, b, w = "",
						T = l.split("-");
					for (m = 0; m < T.length; m++) w += T[m].charAt(0).toUpperCase() + T[m].slice(1);
					for (m = 0; m < I.length; m++)
						if (b = I[m] + w, b in X.style) return {
							dom: b,
							css: D[m] + l
						}
				},
				G = t.support = {
					bind: Function.prototype.bind,
					transform: F("transform"),
					transition: F("transition"),
					backface: F("backface-visibility"),
					timing: F("transition-timing-function")
				};
			if (G.transition) {
				var $ = G.timing.dom;
				if (X.style[$] = _["ease-in-back"][0], !X.style[$])
					for (var ne in p) _[ne][0] = p[ne]
			}
			var M = t.frame = function() {
					var l = O.requestAnimationFrame || O.webkitRequestAnimationFrame || O.mozRequestAnimationFrame || O.oRequestAnimationFrame || O.msRequestAnimationFrame;
					return l && G.bind ? l.bind(O) : function(m) {
						O.setTimeout(m, 16)
					}
				}(),
				U = t.now = function() {
					var l = O.performance,
						m = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
					return m && G.bind ? m.bind(l) : Date.now || function() {
						return +new Date
					}
				}(),
				K = f(function(l) {
					function m(te, pe) {
						var Ie = E(("" + te).split(re)),
							he = Ie[0];
						pe = pe || {};
						var Me = k[he];
						if (!Me) return d("Unsupported property: " + he);
						if (!pe.weak || !this.props[he]) {
							var Qe = Me[0],
								Ve = this.props[he];
							return Ve || (Ve = this.props[he] = new Qe.Bare), Ve.init(this.$el, Ie, Me, pe), Ve
						}
					}

					function b(te, pe, Ie) {
						if (te) {
							var he = typeof te;
							if (pe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), he == "number" && pe) return this.timer = new J({
								duration: te,
								context: this,
								complete: C
							}), void(this.active = !0);
							if (he == "string" && pe) {
								switch (te) {
									case "hide":
										H.call(this);
										break;
									case "stop":
										Z.call(this);
										break;
									case "redraw":
										le.call(this);
										break;
									default:
										m.call(this, te, Ie && Ie[1])
								}
								return C.call(this)
							}
							if (he == "function") return void te.call(this, this);
							if (he == "object") {
								var Me = 0;
								ot.call(this, te, function(Ae, hy) {
									Ae.span > Me && (Me = Ae.span), Ae.stop(), Ae.animate(hy)
								}, function(Ae) {
									"wait" in Ae && (Me = c(Ae.wait, 0))
								}), Se.call(this), Me > 0 && (this.timer = new J({
									duration: Me,
									context: this
								}), this.active = !0, pe && (this.timer.complete = C));
								var Qe = this,
									Ve = !1,
									un = {};
								M(function() {
									ot.call(Qe, te, function(Ae) {
										Ae.active && (Ve = !0, un[Ae.name] = Ae.nextStyle)
									}), Ve && Qe.$el.css(un)
								})
							}
						}
					}

					function w(te) {
						te = c(te, 0), this.active ? this.queue.push({
							options: te
						}) : (this.timer = new J({
							duration: te,
							context: this,
							complete: C
						}), this.active = !0)
					}

					function T(te) {
						return this.active ? (this.queue.push({
							options: te,
							args: arguments
						}), void(this.timer.complete = C)) : d("No active transition timer. Use start() or wait() before then().")
					}

					function C() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var te = this.queue.shift();
							b.call(this, te.options, !0, te.args)
						}
					}

					function Z(te) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var pe;
						typeof te == "string" ? (pe = {}, pe[te] = 1) : pe = typeof te == "object" && te != null ? te : this.props, ot.call(this, pe, De), Se.call(this)
					}

					function ae(te) {
						Z.call(this, te), ot.call(this, te, Tr, py)
					}

					function Ee(te) {
						typeof te != "string" && (te = "block"), this.el.style.display = te
					}

					function H() {
						Z.call(this), this.el.style.display = "none"
					}

					function le() {
						this.el.offsetHeight
					}

					function de() {
						Z.call(this), e.removeData(this.el, R), this.$el = this.el = null
					}

					function Se() {
						var te, pe, Ie = [];
						this.upstream && Ie.push(this.upstream);
						for (te in this.props) pe = this.props[te], pe.active && Ie.push(pe.string);
						Ie = Ie.join(","), this.style !== Ie && (this.style = Ie, this.el.style[G.transition.dom] = Ie)
					}

					function ot(te, pe, Ie) {
						var he, Me, Qe, Ve, un = pe !== De,
							Ae = {};
						for (he in te) Qe = te[he], he in ve ? (Ae.transform || (Ae.transform = {}), Ae.transform[he] = Qe) : (x.test(he) && (he = r(he)), he in k ? Ae[he] = Qe : (Ve || (Ve = {}), Ve[he] = Qe));
						for (he in Ae) {
							if (Qe = Ae[he], Me = this.props[he], !Me) {
								if (!un) continue;
								Me = m.call(this, he)
							}
							pe.call(this, Me, Qe)
						}
						Ie && Ve && Ie.call(this, Ve)
					}

					function De(te) {
						te.stop()
					}

					function Tr(te, pe) {
						te.set(pe)
					}

					function py(te) {
						this.$el.css(te)
					}

					function Ye(te, pe) {
						l[te] = function() {
							return this.children ? vy.call(this, pe, arguments) : (this.el && pe.apply(this, arguments), this)
						}
					}

					function vy(te, pe) {
						var Ie, he = this.children.length;
						for (Ie = 0; he > Ie; Ie++) te.apply(this.children[Ie], pe);
						return this
					}
					l.init = function(te) {
						if (this.$el = e(te), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, fe.keepInherited && !fe.fallback) {
							var pe = W(this.el, "transition");
							pe && !Q.test(pe) && (this.upstream = pe)
						}
						G.backface && fe.hideBackface && h(this.el, G.backface.css, "hidden")
					}, Ye("add", m), Ye("start", b), Ye("wait", w), Ye("then", T), Ye("next", C), Ye("stop", Z), Ye("set", ae), Ye("show", Ee), Ye("hide", H), Ye("redraw", le), Ye("destroy", de)
				}),
				v = f(K, function(l) {
					function m(b, w) {
						var T = e.data(b, R) || e.data(b, R, new K.Bare);
						return T.el || T.init(b), w ? T.start(w) : T
					}
					l.init = function(b, w) {
						var T = e(b);
						if (!T.length) return this;
						if (T.length === 1) return m(T[0], w);
						var C = [];
						return T.each(function(Z, ae) {
							C.push(m(ae, w))
						}), this.children = C, this
					}
				}),
				y = f(function(l) {
					function m() {
						var C = this.get();
						this.update("auto");
						var Z = this.get();
						return this.update(C), Z
					}

					function b(C, Z, ae) {
						return Z !== void 0 && (ae = Z), C in _ ? C : ae
					}

					function w(C) {
						var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
						return (Z ? i(Z[1], Z[2], Z[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var T = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					l.init = function(C, Z, ae, Ee) {
						this.$el = C, this.el = C[0];
						var H = Z[0];
						ae[2] && (H = ae[2]), z[H] && (H = z[H]), this.name = H, this.type = ae[1], this.duration = c(Z[1], this.duration, T.duration), this.ease = b(Z[2], this.ease, T.ease), this.delay = c(Z[3], this.delay, T.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = oe.test(this.name), this.unit = Ee.unit || this.unit || fe.defaultUnit, this.angle = Ee.angle || this.angle || fe.defaultAngle, fe.fallback || Ee.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + _[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
					}, l.set = function(C) {
						C = this.convert(C, this.type), this.update(C), this.redraw()
					}, l.transition = function(C) {
						this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = m.call(this))), this.nextStyle = C
					}, l.fallback = function(C) {
						var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
						C = this.convert(C, this.type), this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)), C == "auto" && (C = m.call(this))), this.tween = new Y({
							from: Z,
							to: C,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.get = function() {
						return W(this.el, this.name)
					}, l.update = function(C) {
						h(this.el, this.name, C)
					}, l.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, h(this.el, this.name, this.get()));
						var C = this.tween;
						C && C.context && C.destroy()
					}, l.convert = function(C, Z) {
						if (C == "auto" && this.auto) return C;
						var ae, Ee = typeof C == "number",
							H = typeof C == "string";
						switch (Z) {
							case S:
								if (Ee) return C;
								if (H && C.replace(A, "") === "") return +C;
								ae = "number(unitless)";
								break;
							case L:
								if (H) {
									if (C === "" && this.original) return this.original;
									if (Z.test(C)) return C.charAt(0) == "#" && C.length == 7 ? C : w(C)
								}
								ae = "hex or rgb string";
								break;
							case q:
								if (Ee) return C + this.unit;
								if (H && Z.test(C)) return C;
								ae = "number(px) or string(unit)";
								break;
							case P:
								if (Ee) return C + this.unit;
								if (H && Z.test(C)) return C;
								ae = "number(px) or string(unit or %)";
								break;
							case V:
								if (Ee) return C + this.angle;
								if (H && Z.test(C)) return C;
								ae = "number(deg) or string(angle)";
								break;
							case j:
								if (Ee || H && P.test(C)) return C;
								ae = "number(unitless) or string(unit or %)"
						}
						return a(ae, C), C
					}, l.redraw = function() {
						this.el.offsetHeight
					}
				}),
				B = f(y, function(l, m) {
					l.init = function() {
						m.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), L))
					}
				}),
				ee = f(y, function(l, m) {
					l.init = function() {
						m.init.apply(this, arguments), this.animate = this.fallback
					}, l.get = function() {
						return this.$el[this.name]()
					}, l.update = function(b) {
						this.$el[this.name](b)
					}
				}),
				ie = f(y, function(l, m) {
					function b(w, T) {
						var C, Z, ae, Ee, H;
						for (C in w) Ee = ve[C], ae = Ee[0], Z = Ee[1] || C, H = this.convert(w[C], ae), T.call(this, Z, H, ae)
					}
					l.init = function() {
						m.init.apply(this, arguments), this.current || (this.current = {}, ve.perspective && fe.perspective && (this.current.perspective = fe.perspective, h(this.el, this.name, this.style(this.current)), this.redraw()))
					}, l.set = function(w) {
						b.call(this, w, function(T, C) {
							this.current[T] = C
						}), h(this.el, this.name, this.style(this.current)), this.redraw()
					}, l.transition = function(w) {
						var T = this.values(w);
						this.tween = new Oe({
							current: this.current,
							values: T,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var C, Z = {};
						for (C in this.current) Z[C] = C in T ? T[C] : this.current[C];
						this.active = !0, this.nextStyle = this.style(Z)
					}, l.fallback = function(w) {
						var T = this.values(w);
						this.tween = new Oe({
							current: this.current,
							values: T,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.update = function() {
						h(this.el, this.name, this.style(this.current))
					}, l.style = function(w) {
						var T, C = "";
						for (T in w) C += T + "(" + w[T] + ") ";
						return C
					}, l.values = function(w) {
						var T, C = {};
						return b.call(this, w, function(Z, ae, Ee) {
							C[Z] = ae, this.current[Z] === void 0 && (T = 0, ~Z.indexOf("scale") && (T = 1), this.current[Z] = this.convert(T, Ee))
						}), C
					}
				}),
				Y = f(function(l) {
					function m(H) {
						ae.push(H) === 1 && M(b)
					}

					function b() {
						var H, le, de, Se = ae.length;
						if (Se)
							for (M(b), le = U(), H = Se; H--;) de = ae[H], de && de.render(le)
					}

					function w(H) {
						var le, de = e.inArray(H, ae);
						de >= 0 && (le = ae.slice(de + 1), ae.length = de, le.length && (ae = ae.concat(le)))
					}

					function T(H) {
						return Math.round(H * Ee) / Ee
					}

					function C(H, le, de) {
						return i(H[0] + de * (le[0] - H[0]), H[1] + de * (le[1] - H[1]), H[2] + de * (le[2] - H[2]))
					}
					var Z = {
						ease: _.ease[1],
						from: 0,
						to: 1
					};
					l.init = function(H) {
						this.duration = H.duration || 0, this.delay = H.delay || 0;
						var le = H.ease || Z.ease;
						_[le] && (le = _[le][1]), typeof le != "function" && (le = Z.ease), this.ease = le, this.update = H.update || o, this.complete = H.complete || o, this.context = H.context || this, this.name = H.name;
						var de = H.from,
							Se = H.to;
						de === void 0 && (de = Z.from), Se === void 0 && (Se = Z.to), this.unit = H.unit || "", typeof de == "number" && typeof Se == "number" ? (this.begin = de, this.change = Se - de) : this.format(Se, de), this.value = this.begin + this.unit, this.start = U(), H.autoplay !== !1 && this.play()
					}, l.play = function() {
						this.active || (this.start || (this.start = U()), this.active = !0, m(this))
					}, l.stop = function() {
						this.active && (this.active = !1, w(this))
					}, l.render = function(H) {
						var le, de = H - this.start;
						if (this.delay) {
							if (de <= this.delay) return;
							de -= this.delay
						}
						if (de < this.duration) {
							var Se = this.ease(de, 0, 1, this.duration);
							return le = this.startRGB ? C(this.startRGB, this.endRGB, Se) : T(this.begin + Se * this.change), this.value = le + this.unit, void this.update.call(this.context, this.value)
						}
						le = this.endHex || this.begin + this.change, this.value = le + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, l.format = function(H, le) {
						if (le += "", H += "", H.charAt(0) == "#") return this.startRGB = n(le), this.endRGB = n(H), this.endHex = H, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var de = le.replace(A, ""),
								Se = H.replace(A, "");
							de !== Se && s("tween", le, H), this.unit = de
						}
						le = parseFloat(le), H = parseFloat(H), this.begin = this.value = le, this.change = H - le
					}, l.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = o
					};
					var ae = [],
						Ee = 1e3
				}),
				J = f(Y, function(l) {
					l.init = function(m) {
						this.duration = m.duration || 0, this.complete = m.complete || o, this.context = m.context, this.play()
					}, l.render = function(m) {
						var b = m - this.start;
						b < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				Oe = f(Y, function(l, m) {
					l.init = function(b) {
						this.context = b.context, this.update = b.update, this.tweens = [], this.current = b.current;
						var w, T;
						for (w in b.values) T = b.values[w], this.current[w] !== T && this.tweens.push(new Y({
							name: w,
							from: this.current[w],
							to: T,
							duration: b.duration,
							delay: b.delay,
							ease: b.ease,
							autoplay: !1
						}));
						this.play()
					}, l.render = function(b) {
						var w, T, C = this.tweens.length,
							Z = !1;
						for (w = C; w--;) T = this.tweens[w], T.context && (T.render(b), this.current[T.name] = T.value, Z = !0);
						return Z ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, l.destroy = function() {
						if (m.destroy.call(this), this.tweens) {
							var b, w = this.tweens.length;
							for (b = w; b--;) this.tweens[b].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				fe = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !G.transition,
					agentTests: []
				};
			t.fallback = function(l) {
				if (!G.transition) return fe.fallback = !0;
				fe.agentTests.push("(" + l + ")");
				var m = new RegExp(fe.agentTests.join("|"), "i");
				fe.fallback = m.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
				return new Y(l)
			}, t.delay = function(l, m, b) {
				return new J({
					complete: m,
					duration: l,
					context: b
				})
			}, e.fn.tram = function(l) {
				return t.call(null, this, l)
			};
			var h = e.style,
				W = e.css,
				z = {
					transform: G.transform && G.transform.css
				},
				k = {
					color: [B, L],
					background: [B, L, "background-color"],
					"outline-color": [B, L],
					"border-color": [B, L],
					"border-top-color": [B, L],
					"border-right-color": [B, L],
					"border-bottom-color": [B, L],
					"border-left-color": [B, L],
					"border-width": [y, q],
					"border-top-width": [y, q],
					"border-right-width": [y, q],
					"border-bottom-width": [y, q],
					"border-left-width": [y, q],
					"border-spacing": [y, q],
					"letter-spacing": [y, q],
					margin: [y, q],
					"margin-top": [y, q],
					"margin-right": [y, q],
					"margin-bottom": [y, q],
					"margin-left": [y, q],
					padding: [y, q],
					"padding-top": [y, q],
					"padding-right": [y, q],
					"padding-bottom": [y, q],
					"padding-left": [y, q],
					"outline-width": [y, q],
					opacity: [y, S],
					top: [y, P],
					right: [y, P],
					bottom: [y, P],
					left: [y, P],
					"font-size": [y, P],
					"text-indent": [y, P],
					"word-spacing": [y, P],
					width: [y, P],
					"min-width": [y, P],
					"max-width": [y, P],
					height: [y, P],
					"min-height": [y, P],
					"max-height": [y, P],
					"line-height": [y, j],
					"scroll-top": [ee, S, "scrollTop"],
					"scroll-left": [ee, S, "scrollLeft"]
				},
				ve = {};
			G.transform && (k.transform = [ie], ve = {
				x: [P, "translateX"],
				y: [P, "translateY"],
				rotate: [V],
				rotateX: [V],
				rotateY: [V],
				scale: [S],
				scaleX: [S],
				scaleY: [S],
				skew: [V],
				skewX: [V],
				skewY: [V]
			}), G.transform && G.backface && (ve.z = [P, "translateZ"], ve.rotateZ = [V], ve.scaleZ = [S], ve.perspective = [q]);
			var ze = /ms/,
				Ue = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var bs = u((hW, Os) => {
		var gy = window.$,
			Ey = Mi() && gy.tram;
		Os.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				o = r.push,
				a = r.slice,
				s = r.concat,
				c = n.toString,
				d = n.hasOwnProperty,
				E = r.forEach,
				f = r.map,
				_ = r.reduce,
				p = r.reduceRight,
				g = r.filter,
				O = r.every,
				R = r.some,
				A = r.indexOf,
				x = r.lastIndexOf,
				S = Array.isArray,
				L = Object.keys,
				q = i.bind,
				P = e.each = e.forEach = function(I, D, F) {
					if (I == null) return I;
					if (E && I.forEach === E) I.forEach(D, F);
					else if (I.length === +I.length) {
						for (var G = 0, $ = I.length; G < $; G++)
							if (D.call(F, I[G], G, I) === t) return
					} else
						for (var ne = e.keys(I), G = 0, $ = ne.length; G < $; G++)
							if (D.call(F, I[ne[G]], ne[G], I) === t) return;
					return I
				};
			e.map = e.collect = function(I, D, F) {
				var G = [];
				return I == null ? G : f && I.map === f ? I.map(D, F) : (P(I, function($, ne, M) {
					G.push(D.call(F, $, ne, M))
				}), G)
			}, e.find = e.detect = function(I, D, F) {
				var G;
				return V(I, function($, ne, M) {
					if (D.call(F, $, ne, M)) return G = $, !0
				}), G
			}, e.filter = e.select = function(I, D, F) {
				var G = [];
				return I == null ? G : g && I.filter === g ? I.filter(D, F) : (P(I, function($, ne, M) {
					D.call(F, $, ne, M) && G.push($)
				}), G)
			};
			var V = e.some = e.any = function(I, D, F) {
				D || (D = e.identity);
				var G = !1;
				return I == null ? G : R && I.some === R ? I.some(D, F) : (P(I, function($, ne, M) {
					if (G || (G = D.call(F, $, ne, M))) return t
				}), !!G)
			};
			e.contains = e.include = function(I, D) {
				return I == null ? !1 : A && I.indexOf === A ? I.indexOf(D) != -1 : V(I, function(F) {
					return F === D
				})
			}, e.delay = function(I, D) {
				var F = a.call(arguments, 2);
				return setTimeout(function() {
					return I.apply(null, F)
				}, D)
			}, e.defer = function(I) {
				return e.delay.apply(e, [I, 1].concat(a.call(arguments, 1)))
			}, e.throttle = function(I) {
				var D, F, G;
				return function() {
					D || (D = !0, F = arguments, G = this, Ey.frame(function() {
						D = !1, I.apply(G, F)
					}))
				}
			}, e.debounce = function(I, D, F) {
				var G, $, ne, M, U, K = function() {
					var v = e.now() - M;
					v < D ? G = setTimeout(K, D - v) : (G = null, F || (U = I.apply(ne, $), ne = $ = null))
				};
				return function() {
					ne = this, $ = arguments, M = e.now();
					var v = F && !G;
					return G || (G = setTimeout(K, D)), v && (U = I.apply(ne, $), ne = $ = null), U
				}
			}, e.defaults = function(I) {
				if (!e.isObject(I)) return I;
				for (var D = 1, F = arguments.length; D < F; D++) {
					var G = arguments[D];
					for (var $ in G) I[$] === void 0 && (I[$] = G[$])
				}
				return I
			}, e.keys = function(I) {
				if (!e.isObject(I)) return [];
				if (L) return L(I);
				var D = [];
				for (var F in I) e.has(I, F) && D.push(F);
				return D
			}, e.has = function(I, D) {
				return d.call(I, D)
			}, e.isObject = function(I) {
				return I === Object(I)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var j = /(.)^/,
				Q = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				oe = /\\|'|\r|\n|\u2028|\u2029/g,
				re = function(I) {
					return "\\" + Q[I]
				},
				X = /^\s*(\w|\$)+\s*$/;
			return e.template = function(I, D, F) {
				!D && F && (D = F), D = e.defaults({}, D, e.templateSettings);
				var G = RegExp([(D.escape || j).source, (D.interpolate || j).source, (D.evaluate || j).source].join("|") + "|$", "g"),
					$ = 0,
					ne = "__p+='";
				I.replace(G, function(v, y, B, ee, ie) {
					return ne += I.slice($, ie).replace(oe, re), $ = ie + v.length, y ? ne += `'+
    ((__t=(` + y + `))==null?'':_.escape(__t))+
    '` : B ? ne += `'+
    ((__t=(` + B + `))==null?'':__t)+
    '` : ee && (ne += `';
    ` + ee + `
    __p+='`), v
				}), ne += `';
    `;
				var M = D.variable;
				if (M) {
					if (!X.test(M)) throw new Error("variable is not a bare identifier: " + M)
				} else ne = `with(obj||{}){
    ` + ne + `}
    `, M = "obj";
				ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` + ne + `return __p;
    `;
				var U;
				try {
					U = new Function(D.variable || "obj", "_", ne)
				} catch (v) {
					throw v.source = ne, v
				}
				var K = function(v) {
					return U.call(this, v, e)
				};
				return K.source = "function(" + M + `){
    ` + ne + "}", K
			}, e
		}()
	});
	var ke = u((gW, qs) => {
		var ge = {},
			kt = {},
			jt = [],
			Gi = window.Webflow || [],
			It = window.jQuery,
			Ze = It(window),
			_y = It(document),
			at = It.isFunction,
			$e = ge._ = bs(),
			As = ge.tram = Mi() && It.tram,
			ln = !1,
			Xi = !1;
		As.config.hideBackface = !1;
		As.config.keepInherited = !0;
		ge.define = function(e, t, r) {
			kt[e] && Rs(kt[e]);
			var n = kt[e] = t(It, $e, r) || {};
			return ws(n), n
		};
		ge.require = function(e) {
			return kt[e]
		};

		function ws(e) {
			ge.env() && (at(e.design) && Ze.on("__wf_design", e.design), at(e.preview) && Ze.on("__wf_preview", e.preview)), at(e.destroy) && Ze.on("__wf_destroy", e.destroy), e.ready && at(e.ready) && my(e)
		}

		function my(e) {
			if (ln) {
				e.ready();
				return
			}
			$e.contains(jt, e.ready) || jt.push(e.ready)
		}

		function Rs(e) {
			at(e.design) && Ze.off("__wf_design", e.design), at(e.preview) && Ze.off("__wf_preview", e.preview), at(e.destroy) && Ze.off("__wf_destroy", e.destroy), e.ready && at(e.ready) && yy(e)
		}

		function yy(e) {
			jt = $e.filter(jt, function(t) {
				return t !== e.ready
			})
		}
		ge.push = function(e) {
			if (ln) {
				at(e) && e();
				return
			}
			Gi.push(e)
		};
		ge.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var cn = navigator.userAgent.toLowerCase(),
			Cs = ge.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			Iy = ge.env.chrome = /chrome/.test(cn) && /Google/.test(navigator.vendor) && parseInt(cn.match(/chrome\/(\d+)\./)[1], 10),
			Ty = ge.env.ios = /(ipod|iphone|ipad)/.test(cn);
		ge.env.safari = /safari/.test(cn) && !Iy && !Ty;
		var Fi;
		Cs && _y.on("touchstart mousedown", function(e) {
			Fi = e.target
		});
		ge.validClick = Cs ? function(e) {
			return e === Fi || It.contains(e, Fi)
		} : function() {
			return !0
		};
		var xs = "resize.webflow orientationchange.webflow load.webflow",
			Oy = "scroll.webflow " + xs;
		ge.resize = Ui(Ze, xs);
		ge.scroll = Ui(Ze, Oy);
		ge.redraw = Ui();

		function Ui(e, t) {
			var r = [],
				n = {};
			return n.up = $e.throttle(function(i) {
				$e.each(r, function(o) {
					o(i)
				})
			}), e && t && e.on(t, n.up), n.on = function(i) {
				typeof i == "function" && ($e.contains(r, i) || r.push(i))
			}, n.off = function(i) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = $e.filter(r, function(o) {
					return o !== i
				})
			}, n
		}
		ge.location = function(e) {
			window.location = e
		};
		ge.env() && (ge.location = function() {});
		ge.ready = function() {
			ln = !0, Xi ? by() : $e.each(jt, Ss), $e.each(Gi, Ss), ge.resize.up()
		};

		function Ss(e) {
			at(e) && e()
		}

		function by() {
			Xi = !1, $e.each(kt, ws)
		}
		var qt;
		ge.load = function(e) {
			qt.then(e)
		};

		function Ns() {
			qt && (qt.reject(), Ze.off("load", qt.resolve)), qt = new It.Deferred, Ze.on("load", qt.resolve)
		}
		ge.destroy = function(e) {
			e = e || {}, Xi = !0, Ze.triggerHandler("__wf_destroy"), e.domready != null && (ln = e.domready), $e.each(kt, Rs), ge.resize.off(), ge.scroll.off(), ge.redraw.off(), jt = [], Gi = [], qt.state() === "pending" && Ns()
		};
		It(ge.ready);
		Ns();
		qs.exports = window.Webflow = ge
	});
	var Ds = u((EW, Ps) => {
		var Ls = ke();
		Ls.define("brand", Ps.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				i = e("body"),
				o = ".w-webflow-badge",
				a = window.location,
				s = /PhantomJS/i.test(navigator.userAgent),
				c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				d;
			t.ready = function() {
				var p = n.attr("data-wf-status"),
					g = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(g) && a.hostname !== g && (p = !0), p && !s && (d = d || f(), _(), setTimeout(_, 500), e(r).off(c, E).on(c, E))
			};

			function E() {
				var p = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(d).attr("style", p ? "display: none !important;" : "")
			}

			function f() {
				return null, null
			}

			function _() {
				var p = i.children(o),
					g = p.length && p.get(0) === d,
					O = Ls.env("editor");
				if (g) {
					O && p.remove();
					return
				}
				p.length && p.remove(), O || i.append(d)
			}
			return t
		})
	});
	var Fs = u((_W, Ms) => {
		var Vi = ke();
		Vi.define("edit", Ms.exports = function(e, t, r) {
			if (r = r || {}, (Vi.env("test") || Vi.env("frame")) && !r.fixture && !Sy()) return {
				exit: 1
			};
			var n = {},
				i = e(window),
				o = e(document.documentElement),
				a = document.location,
				s = "hashchange",
				c, d = r.load || _,
				E = !1;
			try {
				E = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			E ? d() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && d() : i.on(s, f).triggerHandler(s);

			function f() {
				c || /\?edit/.test(a.hash) && d()
			}

			function _() {
				c = !0, window.WebflowEditor = !0, i.off(s, f), x(function(L) {
					e.ajax({
						url: A("https://editor-api.webflow.com/api/editor/view"),
						data: {
							siteId: o.attr("data-wf-site")
						},
						xhrFields: {
							withCredentials: !0
						},
						dataType: "json",
						crossDomain: !0,
						success: p(L)
					})
				})
			}

			function p(L) {
				return function(q) {
					if (!q) {
						console.error("Could not load editor data");
						return
					}
					q.thirdPartyCookiesSupported = L, g(R(q.bugReporterScriptPath), function() {
						g(R(q.scriptPath), function() {
							window.WebflowEditor(q)
						})
					})
				}
			}

			function g(L, q) {
				e.ajax({
					type: "GET",
					url: L,
					dataType: "script",
					cache: !0
				}).then(q, O)
			}

			function O(L, q, P) {
				throw console.error("Could not load editor script: " + q), P
			}

			function R(L) {
				return L.indexOf("//") >= 0 ? L : A("https://editor-api.webflow.com" + L)
			}

			function A(L) {
				return L.replace(/([^:])\/\//g, "$1/")
			}

			function x(L) {
				var q = window.document.createElement("iframe");
				q.src = "https://webflow.com/site/third-party-cookie-check.html", q.style.display = "none", q.sandbox = "allow-scripts allow-same-origin";
				var P = function(V) {
					V.data === "WF_third_party_cookies_unsupported" ? (S(q, P), L(!1)) : V.data === "WF_third_party_cookies_supported" && (S(q, P), L(!0))
				};
				q.onerror = function() {
					S(q, P), L(!1)
				}, window.addEventListener("message", P, !1), window.document.body.appendChild(q)
			}

			function S(L, q) {
				window.removeEventListener("message", q, !1), L.remove()
			}
			return n
		});

		function Sy() {
			try {
				return window.top.__Cypress__
			} catch {
				return !1
			}
		}
	});
	var Xs = u((mW, Gs) => {
		var Ay = ke();
		Ay.define("focus-visible", Gs.exports = function() {
			function e(r) {
				var n = !0,
					i = !1,
					o = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function s(S) {
					return !!(S && S !== document && S.nodeName !== "HTML" && S.nodeName !== "BODY" && "classList" in S && "contains" in S.classList)
				}

				function c(S) {
					var L = S.type,
						q = S.tagName;
					return !!(q === "INPUT" && a[L] && !S.readOnly || q === "TEXTAREA" && !S.readOnly || S.isContentEditable)
				}

				function d(S) {
					S.getAttribute("data-wf-focus-visible") || S.setAttribute("data-wf-focus-visible", "true")
				}

				function E(S) {
					S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible")
				}

				function f(S) {
					S.metaKey || S.altKey || S.ctrlKey || (s(r.activeElement) && d(r.activeElement), n = !0)
				}

				function _() {
					n = !1
				}

				function p(S) {
					s(S.target) && (n || c(S.target)) && d(S.target)
				}

				function g(S) {
					s(S.target) && S.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
						i = !1
					}, 100), E(S.target))
				}

				function O() {
					document.visibilityState === "hidden" && (i && (n = !0), R())
				}

				function R() {
					document.addEventListener("mousemove", x), document.addEventListener("mousedown", x), document.addEventListener("mouseup", x), document.addEventListener("pointermove", x), document.addEventListener("pointerdown", x), document.addEventListener("pointerup", x), document.addEventListener("touchmove", x), document.addEventListener("touchstart", x), document.addEventListener("touchend", x)
				}

				function A() {
					document.removeEventListener("mousemove", x), document.removeEventListener("mousedown", x), document.removeEventListener("mouseup", x), document.removeEventListener("pointermove", x), document.removeEventListener("pointerdown", x), document.removeEventListener("pointerup", x), document.removeEventListener("touchmove", x), document.removeEventListener("touchstart", x), document.removeEventListener("touchend", x)
				}

				function x(S) {
					S.target.nodeName && S.target.nodeName.toLowerCase() === "html" || (n = !1, A())
				}
				document.addEventListener("keydown", f, !0), document.addEventListener("mousedown", _, !0), document.addEventListener("pointerdown", _, !0), document.addEventListener("touchstart", _, !0), document.addEventListener("visibilitychange", O, !0), R(), r.addEventListener("focus", p, !0), r.addEventListener("blur", g, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var Ws = u((yW, Vs) => {
		var Us = ke();
		Us.define("focus", Vs.exports = function() {
			var e = [],
				t = !1;

			function r(a) {
				t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
			}

			function n(a) {
				var s = a.target,
					c = s.tagName;
				return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
			}

			function i(a) {
				n(a) && (t = !0, setTimeout(() => {
					for (t = !1, a.target.focus(); e.length > 0;) {
						var s = e.pop();
						s.target.dispatchEvent(new MouseEvent(s.type, s))
					}
				}, 0))
			}

			function o() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Us.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: o
			}
		})
	});
	var ks = u((IW, Hs) => {
		"use strict";
		var Wi = window.jQuery,
			st = {},
			fn = [],
			Bs = ".w-ix",
			dn = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, Wi(t).triggerHandler(st.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, Wi(t).triggerHandler(st.types.OUTRO))
				}
			};
		st.triggers = {};
		st.types = {
			INTRO: "w-ix-intro" + Bs,
			OUTRO: "w-ix-outro" + Bs
		};
		st.init = function() {
			for (var e = fn.length, t = 0; t < e; t++) {
				var r = fn[t];
				r[0](0, r[1])
			}
			fn = [], Wi.extend(st.triggers, dn)
		};
		st.async = function() {
			for (var e in dn) {
				var t = dn[e];
				dn.hasOwnProperty(e) && (st.triggers[e] = function(r, n) {
					fn.push([t, n])
				})
			}
		};
		st.async();
		Hs.exports = st
	});
	var Hi = u((TW, zs) => {
		"use strict";
		var Bi = ks();

		function js(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var wy = window.jQuery,
			pn = {},
			Ks = ".w-ix",
			Ry = {
				reset: function(e, t) {
					Bi.triggers.reset(e, t)
				},
				intro: function(e, t) {
					Bi.triggers.intro(e, t), js(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					Bi.triggers.outro(e, t), js(t, "COMPONENT_INACTIVE")
				}
			};
		pn.triggers = {};
		pn.types = {
			INTRO: "w-ix-intro" + Ks,
			OUTRO: "w-ix-outro" + Ks
		};
		wy.extend(pn.triggers, Ry);
		zs.exports = pn
	});
	var Ys = u((OW, gt) => {
		function ki(e) {
			return gt.exports = ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, gt.exports.__esModule = !0, gt.exports.default = gt.exports, ki(e)
		}
		gt.exports = ki, gt.exports.__esModule = !0, gt.exports.default = gt.exports
	});
	var Kt = u((bW, Or) => {
		var Cy = Ys().default;

		function Qs(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (Qs = function(i) {
				return i ? r : t
			})(e)
		}

		function xy(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || Cy(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var r = Qs(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
					var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
				} return n.default = e, r && r.set(e, n), n
		}
		Or.exports = xy, Or.exports.__esModule = !0, Or.exports.default = Or.exports
	});
	var ut = u((SW, br) => {
		function Ny(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		br.exports = Ny, br.exports.__esModule = !0, br.exports.default = br.exports
	});
	var ye = u((AW, $s) => {
		var vn = function(e) {
			return e && e.Math == Math && e
		};
		$s.exports = vn(typeof globalThis == "object" && globalThis) || vn(typeof window == "object" && window) || vn(typeof self == "object" && self) || vn(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var zt = u((wW, Zs) => {
		Zs.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var Lt = u((RW, Js) => {
		var qy = zt();
		Js.exports = !qy(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var hn = u((CW, eu) => {
		var Sr = Function.prototype.call;
		eu.exports = Sr.bind ? Sr.bind(Sr) : function() {
			return Sr.apply(Sr, arguments)
		}
	});
	var iu = u(nu => {
		"use strict";
		var tu = {}.propertyIsEnumerable,
			ru = Object.getOwnPropertyDescriptor,
			Ly = ru && !tu.call({
				1: 2
			}, 1);
		nu.f = Ly ? function(t) {
			var r = ru(this, t);
			return !!r && r.enumerable
		} : tu
	});
	var ji = u((NW, ou) => {
		ou.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var Je = u((qW, su) => {
		var au = Function.prototype,
			Ki = au.bind,
			zi = au.call,
			Py = Ki && Ki.bind(zi);
		su.exports = Ki ? function(e) {
			return e && Py(zi, e)
		} : function(e) {
			return e && function() {
				return zi.apply(e, arguments)
			}
		}
	});
	var lu = u((LW, cu) => {
		var uu = Je(),
			Dy = uu({}.toString),
			My = uu("".slice);
		cu.exports = function(e) {
			return My(Dy(e), 8, -1)
		}
	});
	var du = u((PW, fu) => {
		var Fy = ye(),
			Gy = Je(),
			Xy = zt(),
			Uy = lu(),
			Yi = Fy.Object,
			Vy = Gy("".split);
		fu.exports = Xy(function() {
			return !Yi("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return Uy(e) == "String" ? Vy(e, "") : Yi(e)
		} : Yi
	});
	var Qi = u((DW, pu) => {
		var Wy = ye(),
			By = Wy.TypeError;
		pu.exports = function(e) {
			if (e == null) throw By("Can't call method on " + e);
			return e
		}
	});
	var Ar = u((MW, vu) => {
		var Hy = du(),
			ky = Qi();
		vu.exports = function(e) {
			return Hy(ky(e))
		}
	});
	var ct = u((FW, hu) => {
		hu.exports = function(e) {
			return typeof e == "function"
		}
	});
	var Yt = u((GW, gu) => {
		var jy = ct();
		gu.exports = function(e) {
			return typeof e == "object" ? e !== null : jy(e)
		}
	});
	var wr = u((XW, Eu) => {
		var $i = ye(),
			Ky = ct(),
			zy = function(e) {
				return Ky(e) ? e : void 0
			};
		Eu.exports = function(e, t) {
			return arguments.length < 2 ? zy($i[e]) : $i[e] && $i[e][t]
		}
	});
	var mu = u((UW, _u) => {
		var Yy = Je();
		_u.exports = Yy({}.isPrototypeOf)
	});
	var Iu = u((VW, yu) => {
		var Qy = wr();
		yu.exports = Qy("navigator", "userAgent") || ""
	});
	var Ru = u((WW, wu) => {
		var Au = ye(),
			Zi = Iu(),
			Tu = Au.process,
			Ou = Au.Deno,
			bu = Tu && Tu.versions || Ou && Ou.version,
			Su = bu && bu.v8,
			et, gn;
		Su && (et = Su.split("."), gn = et[0] > 0 && et[0] < 4 ? 1 : +(et[0] + et[1]));
		!gn && Zi && (et = Zi.match(/Edge\/(\d+)/), (!et || et[1] >= 74) && (et = Zi.match(/Chrome\/(\d+)/), et && (gn = +et[1])));
		wu.exports = gn
	});
	var Ji = u((BW, xu) => {
		var Cu = Ru(),
			$y = zt();
		xu.exports = !!Object.getOwnPropertySymbols && !$y(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Cu && Cu < 41
		})
	});
	var eo = u((HW, Nu) => {
		var Zy = Ji();
		Nu.exports = Zy && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var to = u((kW, qu) => {
		var Jy = ye(),
			eI = wr(),
			tI = ct(),
			rI = mu(),
			nI = eo(),
			iI = Jy.Object;
		qu.exports = nI ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = eI("Symbol");
			return tI(t) && rI(t.prototype, iI(e))
		}
	});
	var Pu = u((jW, Lu) => {
		var oI = ye(),
			aI = oI.String;
		Lu.exports = function(e) {
			try {
				return aI(e)
			} catch {
				return "Object"
			}
		}
	});
	var Mu = u((KW, Du) => {
		var sI = ye(),
			uI = ct(),
			cI = Pu(),
			lI = sI.TypeError;
		Du.exports = function(e) {
			if (uI(e)) return e;
			throw lI(cI(e) + " is not a function")
		}
	});
	var Gu = u((zW, Fu) => {
		var fI = Mu();
		Fu.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : fI(r)
		}
	});
	var Uu = u((YW, Xu) => {
		var dI = ye(),
			ro = hn(),
			no = ct(),
			io = Yt(),
			pI = dI.TypeError;
		Xu.exports = function(e, t) {
			var r, n;
			if (t === "string" && no(r = e.toString) && !io(n = ro(r, e)) || no(r = e.valueOf) && !io(n = ro(r, e)) || t !== "string" && no(r = e.toString) && !io(n = ro(r, e))) return n;
			throw pI("Can't convert object to primitive value")
		}
	});
	var Wu = u((QW, Vu) => {
		Vu.exports = !1
	});
	var En = u(($W, Hu) => {
		var Bu = ye(),
			vI = Object.defineProperty;
		Hu.exports = function(e, t) {
			try {
				vI(Bu, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				Bu[e] = t
			}
			return t
		}
	});
	var _n = u((ZW, ju) => {
		var hI = ye(),
			gI = En(),
			ku = "__core-js_shared__",
			EI = hI[ku] || gI(ku, {});
		ju.exports = EI
	});
	var oo = u((JW, zu) => {
		var _I = Wu(),
			Ku = _n();
		(zu.exports = function(e, t) {
			return Ku[e] || (Ku[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: _I ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var Qu = u((eB, Yu) => {
		var mI = ye(),
			yI = Qi(),
			II = mI.Object;
		Yu.exports = function(e) {
			return II(yI(e))
		}
	});
	var Tt = u((tB, $u) => {
		var TI = Je(),
			OI = Qu(),
			bI = TI({}.hasOwnProperty);
		$u.exports = Object.hasOwn || function(t, r) {
			return bI(OI(t), r)
		}
	});
	var ao = u((rB, Zu) => {
		var SI = Je(),
			AI = 0,
			wI = Math.random(),
			RI = SI(1 .toString);
		Zu.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + RI(++AI + wI, 36)
		}
	});
	var so = u((nB, nc) => {
		var CI = ye(),
			xI = oo(),
			Ju = Tt(),
			NI = ao(),
			ec = Ji(),
			rc = eo(),
			Qt = xI("wks"),
			Pt = CI.Symbol,
			tc = Pt && Pt.for,
			qI = rc ? Pt : Pt && Pt.withoutSetter || NI;
		nc.exports = function(e) {
			if (!Ju(Qt, e) || !(ec || typeof Qt[e] == "string")) {
				var t = "Symbol." + e;
				ec && Ju(Pt, e) ? Qt[e] = Pt[e] : rc && tc ? Qt[e] = tc(t) : Qt[e] = qI(t)
			}
			return Qt[e]
		}
	});
	var sc = u((iB, ac) => {
		var LI = ye(),
			PI = hn(),
			ic = Yt(),
			oc = to(),
			DI = Gu(),
			MI = Uu(),
			FI = so(),
			GI = LI.TypeError,
			XI = FI("toPrimitive");
		ac.exports = function(e, t) {
			if (!ic(e) || oc(e)) return e;
			var r = DI(e, XI),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = PI(r, e, t), !ic(n) || oc(n)) return n;
				throw GI("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), MI(e, t)
		}
	});
	var uo = u((oB, uc) => {
		var UI = sc(),
			VI = to();
		uc.exports = function(e) {
			var t = UI(e, "string");
			return VI(t) ? t : t + ""
		}
	});
	var lo = u((aB, lc) => {
		var WI = ye(),
			cc = Yt(),
			co = WI.document,
			BI = cc(co) && cc(co.createElement);
		lc.exports = function(e) {
			return BI ? co.createElement(e) : {}
		}
	});
	var fo = u((sB, fc) => {
		var HI = Lt(),
			kI = zt(),
			jI = lo();
		fc.exports = !HI && !kI(function() {
			return Object.defineProperty(jI("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var po = u(pc => {
		var KI = Lt(),
			zI = hn(),
			YI = iu(),
			QI = ji(),
			$I = Ar(),
			ZI = uo(),
			JI = Tt(),
			eT = fo(),
			dc = Object.getOwnPropertyDescriptor;
		pc.f = KI ? dc : function(t, r) {
			if (t = $I(t), r = ZI(r), eT) try {
				return dc(t, r)
			} catch {}
			if (JI(t, r)) return QI(!zI(YI.f, t, r), t[r])
		}
	});
	var Rr = u((cB, hc) => {
		var vc = ye(),
			tT = Yt(),
			rT = vc.String,
			nT = vc.TypeError;
		hc.exports = function(e) {
			if (tT(e)) return e;
			throw nT(rT(e) + " is not an object")
		}
	});
	var Cr = u(_c => {
		var iT = ye(),
			oT = Lt(),
			aT = fo(),
			gc = Rr(),
			sT = uo(),
			uT = iT.TypeError,
			Ec = Object.defineProperty;
		_c.f = oT ? Ec : function(t, r, n) {
			if (gc(t), r = sT(r), gc(n), aT) try {
				return Ec(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw uT("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var mn = u((fB, mc) => {
		var cT = Lt(),
			lT = Cr(),
			fT = ji();
		mc.exports = cT ? function(e, t, r) {
			return lT.f(e, t, fT(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var ho = u((dB, yc) => {
		var dT = Je(),
			pT = ct(),
			vo = _n(),
			vT = dT(Function.toString);
		pT(vo.inspectSource) || (vo.inspectSource = function(e) {
			return vT(e)
		});
		yc.exports = vo.inspectSource
	});
	var Oc = u((pB, Tc) => {
		var hT = ye(),
			gT = ct(),
			ET = ho(),
			Ic = hT.WeakMap;
		Tc.exports = gT(Ic) && /native code/.test(ET(Ic))
	});
	var go = u((vB, Sc) => {
		var _T = oo(),
			mT = ao(),
			bc = _T("keys");
		Sc.exports = function(e) {
			return bc[e] || (bc[e] = mT(e))
		}
	});
	var yn = u((hB, Ac) => {
		Ac.exports = {}
	});
	var qc = u((gB, Nc) => {
		var yT = Oc(),
			xc = ye(),
			Eo = Je(),
			IT = Yt(),
			TT = mn(),
			_o = Tt(),
			mo = _n(),
			OT = go(),
			bT = yn(),
			wc = "Object already initialized",
			Io = xc.TypeError,
			ST = xc.WeakMap,
			In, xr, Tn, AT = function(e) {
				return Tn(e) ? xr(e) : In(e, {})
			},
			wT = function(e) {
				return function(t) {
					var r;
					if (!IT(t) || (r = xr(t)).type !== e) throw Io("Incompatible receiver, " + e + " required");
					return r
				}
			};
		yT || mo.state ? (Ot = mo.state || (mo.state = new ST), Rc = Eo(Ot.get), yo = Eo(Ot.has), Cc = Eo(Ot.set), In = function(e, t) {
			if (yo(Ot, e)) throw new Io(wc);
			return t.facade = e, Cc(Ot, e, t), t
		}, xr = function(e) {
			return Rc(Ot, e) || {}
		}, Tn = function(e) {
			return yo(Ot, e)
		}) : (Dt = OT("state"), bT[Dt] = !0, In = function(e, t) {
			if (_o(e, Dt)) throw new Io(wc);
			return t.facade = e, TT(e, Dt, t), t
		}, xr = function(e) {
			return _o(e, Dt) ? e[Dt] : {}
		}, Tn = function(e) {
			return _o(e, Dt)
		});
		var Ot, Rc, yo, Cc, Dt;
		Nc.exports = {
			set: In,
			get: xr,
			has: Tn,
			enforce: AT,
			getterFor: wT
		}
	});
	var Dc = u((EB, Pc) => {
		var To = Lt(),
			RT = Tt(),
			Lc = Function.prototype,
			CT = To && Object.getOwnPropertyDescriptor,
			Oo = RT(Lc, "name"),
			xT = Oo && function() {}.name === "something",
			NT = Oo && (!To || To && CT(Lc, "name").configurable);
		Pc.exports = {
			EXISTS: Oo,
			PROPER: xT,
			CONFIGURABLE: NT
		}
	});
	var Uc = u((_B, Xc) => {
		var qT = ye(),
			Mc = ct(),
			LT = Tt(),
			Fc = mn(),
			PT = En(),
			DT = ho(),
			Gc = qc(),
			MT = Dc().CONFIGURABLE,
			FT = Gc.get,
			GT = Gc.enforce,
			XT = String(String).split("String");
		(Xc.exports = function(e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				o = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				c;
			if (Mc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!LT(r, "name") || MT && r.name !== s) && Fc(r, "name", s), c = GT(r), c.source || (c.source = XT.join(typeof s == "string" ? s : ""))), e === qT) {
				o ? e[t] = r : PT(t, r);
				return
			} else i ? !a && e[t] && (o = !0) : delete e[t];
			o ? e[t] = r : Fc(e, t, r)
		})(Function.prototype, "toString", function() {
			return Mc(this) && FT(this).source || DT(this)
		})
	});
	var bo = u((mB, Vc) => {
		var UT = Math.ceil,
			VT = Math.floor;
		Vc.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? VT : UT)(t)
		}
	});
	var Bc = u((yB, Wc) => {
		var WT = bo(),
			BT = Math.max,
			HT = Math.min;
		Wc.exports = function(e, t) {
			var r = WT(e);
			return r < 0 ? BT(r + t, 0) : HT(r, t)
		}
	});
	var kc = u((IB, Hc) => {
		var kT = bo(),
			jT = Math.min;
		Hc.exports = function(e) {
			return e > 0 ? jT(kT(e), 9007199254740991) : 0
		}
	});
	var Kc = u((TB, jc) => {
		var KT = kc();
		jc.exports = function(e) {
			return KT(e.length)
		}
	});
	var So = u((OB, Yc) => {
		var zT = Ar(),
			YT = Bc(),
			QT = Kc(),
			zc = function(e) {
				return function(t, r, n) {
					var i = zT(t),
						o = QT(i),
						a = YT(n, o),
						s;
					if (e && r != r) {
						for (; o > a;)
							if (s = i[a++], s != s) return !0
					} else
						for (; o > a; a++)
							if ((e || a in i) && i[a] === r) return e || a || 0;
					return !e && -1
				}
			};
		Yc.exports = {
			includes: zc(!0),
			indexOf: zc(!1)
		}
	});
	var wo = u((bB, $c) => {
		var $T = Je(),
			Ao = Tt(),
			ZT = Ar(),
			JT = So().indexOf,
			eO = yn(),
			Qc = $T([].push);
		$c.exports = function(e, t) {
			var r = ZT(e),
				n = 0,
				i = [],
				o;
			for (o in r) !Ao(eO, o) && Ao(r, o) && Qc(i, o);
			for (; t.length > n;) Ao(r, o = t[n++]) && (~JT(i, o) || Qc(i, o));
			return i
		}
	});
	var On = u((SB, Zc) => {
		Zc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var el = u(Jc => {
		var tO = wo(),
			rO = On(),
			nO = rO.concat("length", "prototype");
		Jc.f = Object.getOwnPropertyNames || function(t) {
			return tO(t, nO)
		}
	});
	var rl = u(tl => {
		tl.f = Object.getOwnPropertySymbols
	});
	var il = u((RB, nl) => {
		var iO = wr(),
			oO = Je(),
			aO = el(),
			sO = rl(),
			uO = Rr(),
			cO = oO([].concat);
		nl.exports = iO("Reflect", "ownKeys") || function(t) {
			var r = aO.f(uO(t)),
				n = sO.f;
			return n ? cO(r, n(t)) : r
		}
	});
	var al = u((CB, ol) => {
		var lO = Tt(),
			fO = il(),
			dO = po(),
			pO = Cr();
		ol.exports = function(e, t) {
			for (var r = fO(t), n = pO.f, i = dO.f, o = 0; o < r.length; o++) {
				var a = r[o];
				lO(e, a) || n(e, a, i(t, a))
			}
		}
	});
	var ul = u((xB, sl) => {
		var vO = zt(),
			hO = ct(),
			gO = /#|\.prototype\./,
			Nr = function(e, t) {
				var r = _O[EO(e)];
				return r == yO ? !0 : r == mO ? !1 : hO(t) ? vO(t) : !!t
			},
			EO = Nr.normalize = function(e) {
				return String(e).replace(gO, ".").toLowerCase()
			},
			_O = Nr.data = {},
			mO = Nr.NATIVE = "N",
			yO = Nr.POLYFILL = "P";
		sl.exports = Nr
	});
	var ll = u((NB, cl) => {
		var Ro = ye(),
			IO = po().f,
			TO = mn(),
			OO = Uc(),
			bO = En(),
			SO = al(),
			AO = ul();
		cl.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				o, a, s, c, d, E;
			if (n ? a = Ro : i ? a = Ro[r] || bO(r, {}) : a = (Ro[r] || {}).prototype, a)
				for (s in t) {
					if (d = t[s], e.noTargetGet ? (E = IO(a, s), c = E && E.value) : c = a[s], o = AO(n ? s : r + (i ? "." : "#") + s, e.forced), !o && c !== void 0) {
						if (typeof d == typeof c) continue;
						SO(d, c)
					}(e.sham || c && c.sham) && TO(d, "sham", !0), OO(a, s, d, e)
				}
		}
	});
	var dl = u((qB, fl) => {
		var wO = wo(),
			RO = On();
		fl.exports = Object.keys || function(t) {
			return wO(t, RO)
		}
	});
	var vl = u((LB, pl) => {
		var CO = Lt(),
			xO = Cr(),
			NO = Rr(),
			qO = Ar(),
			LO = dl();
		pl.exports = CO ? Object.defineProperties : function(t, r) {
			NO(t);
			for (var n = qO(r), i = LO(r), o = i.length, a = 0, s; o > a;) xO.f(t, s = i[a++], n[s]);
			return t
		}
	});
	var gl = u((PB, hl) => {
		var PO = wr();
		hl.exports = PO("document", "documentElement")
	});
	var bl = u((DB, Ol) => {
		var DO = Rr(),
			MO = vl(),
			El = On(),
			FO = yn(),
			GO = gl(),
			XO = lo(),
			UO = go(),
			_l = ">",
			ml = "<",
			xo = "prototype",
			No = "script",
			Il = UO("IE_PROTO"),
			Co = function() {},
			Tl = function(e) {
				return ml + No + _l + e + ml + "/" + No + _l
			},
			yl = function(e) {
				e.write(Tl("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			VO = function() {
				var e = XO("iframe"),
					t = "java" + No + ":",
					r;
				return e.style.display = "none", GO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Tl("document.F=Object")), r.close(), r.F
			},
			bn, Sn = function() {
				try {
					bn = new ActiveXObject("htmlfile")
				} catch {}
				Sn = typeof document < "u" ? document.domain && bn ? yl(bn) : VO() : yl(bn);
				for (var e = El.length; e--;) delete Sn[xo][El[e]];
				return Sn()
			};
		FO[Il] = !0;
		Ol.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (Co[xo] = DO(t), n = new Co, Co[xo] = null, n[Il] = t) : n = Sn(), r === void 0 ? n : MO(n, r)
		}
	});
	var Al = u((MB, Sl) => {
		var WO = so(),
			BO = bl(),
			HO = Cr(),
			qo = WO("unscopables"),
			Lo = Array.prototype;
		Lo[qo] == null && HO.f(Lo, qo, {
			configurable: !0,
			value: BO(null)
		});
		Sl.exports = function(e) {
			Lo[qo][e] = !0
		}
	});
	var wl = u(() => {
		"use strict";
		var kO = ll(),
			jO = So().includes,
			KO = Al();
		kO({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return jO(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		KO("includes")
	});
	var Cl = u((XB, Rl) => {
		var zO = ye(),
			YO = Je();
		Rl.exports = function(e, t) {
			return YO(zO[e].prototype[t])
		}
	});
	var Nl = u((UB, xl) => {
		wl();
		var QO = Cl();
		xl.exports = QO("Array", "includes")
	});
	var Ll = u((VB, ql) => {
		var $O = Nl();
		ql.exports = $O
	});
	var Dl = u((WB, Pl) => {
		var ZO = Ll();
		Pl.exports = ZO
	});
	var Po = u((BB, Ml) => {
		var JO = typeof global == "object" && global && global.Object === Object && global;
		Ml.exports = JO
	});
	var tt = u((HB, Fl) => {
		var eb = Po(),
			tb = typeof self == "object" && self && self.Object === Object && self,
			rb = eb || tb || Function("return this")();
		Fl.exports = rb
	});
	var $t = u((kB, Gl) => {
		var nb = tt(),
			ib = nb.Symbol;
		Gl.exports = ib
	});
	var Wl = u((jB, Vl) => {
		var Xl = $t(),
			Ul = Object.prototype,
			ob = Ul.hasOwnProperty,
			ab = Ul.toString,
			qr = Xl ? Xl.toStringTag : void 0;

		function sb(e) {
			var t = ob.call(e, qr),
				r = e[qr];
			try {
				e[qr] = void 0;
				var n = !0
			} catch {}
			var i = ab.call(e);
			return n && (t ? e[qr] = r : delete e[qr]), i
		}
		Vl.exports = sb
	});
	var Hl = u((KB, Bl) => {
		var ub = Object.prototype,
			cb = ub.toString;

		function lb(e) {
			return cb.call(e)
		}
		Bl.exports = lb
	});
	var bt = u((zB, Kl) => {
		var kl = $t(),
			fb = Wl(),
			db = Hl(),
			pb = "[object Null]",
			vb = "[object Undefined]",
			jl = kl ? kl.toStringTag : void 0;

		function hb(e) {
			return e == null ? e === void 0 ? vb : pb : jl && jl in Object(e) ? fb(e) : db(e)
		}
		Kl.exports = hb
	});
	var Do = u((YB, zl) => {
		function gb(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		zl.exports = gb
	});
	var Mo = u((QB, Yl) => {
		var Eb = Do(),
			_b = Eb(Object.getPrototypeOf, Object);
		Yl.exports = _b
	});
	var Et = u(($B, Ql) => {
		function mb(e) {
			return e != null && typeof e == "object"
		}
		Ql.exports = mb
	});
	var Fo = u((ZB, Zl) => {
		var yb = bt(),
			Ib = Mo(),
			Tb = Et(),
			Ob = "[object Object]",
			bb = Function.prototype,
			Sb = Object.prototype,
			$l = bb.toString,
			Ab = Sb.hasOwnProperty,
			wb = $l.call(Object);

		function Rb(e) {
			if (!Tb(e) || yb(e) != Ob) return !1;
			var t = Ib(e);
			if (t === null) return !0;
			var r = Ab.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && $l.call(r) == wb
		}
		Zl.exports = Rb
	});
	var Jl = u(Go => {
		"use strict";
		Object.defineProperty(Go, "__esModule", {
			value: !0
		});
		Go.default = Cb;

		function Cb(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var ef = u((Uo, Xo) => {
		"use strict";
		Object.defineProperty(Uo, "__esModule", {
			value: !0
		});
		var xb = Jl(),
			Nb = qb(xb);

		function qb(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var Zt;
		typeof self < "u" ? Zt = self : typeof window < "u" ? Zt = window : typeof global < "u" ? Zt = global : typeof Xo < "u" ? Zt = Xo : Zt = Function("return this")();
		var Lb = (0, Nb.default)(Zt);
		Uo.default = Lb
	});
	var Vo = u(Lr => {
		"use strict";
		Lr.__esModule = !0;
		Lr.ActionTypes = void 0;
		Lr.default = of;
		var Pb = Fo(),
			Db = nf(Pb),
			Mb = ef(),
			tf = nf(Mb);

		function nf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var rf = Lr.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function of(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(of)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				o = t,
				a = [],
				s = a,
				c = !1;

			function d() {
				s === a && (s = a.slice())
			}

			function E() {
				return o
			}

			function f(O) {
				if (typeof O != "function") throw new Error("Expected listener to be a function.");
				var R = !0;
				return d(), s.push(O),
					function() {
						if (R) {
							R = !1, d();
							var x = s.indexOf(O);
							s.splice(x, 1)
						}
					}
			}

			function _(O) {
				if (!(0, Db.default)(O)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof O.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (c) throw new Error("Reducers may not dispatch actions.");
				try {
					c = !0, o = i(o, O)
				} finally {
					c = !1
				}
				for (var R = a = s, A = 0; A < R.length; A++) R[A]();
				return O
			}

			function p(O) {
				if (typeof O != "function") throw new Error("Expected the nextReducer to be a function.");
				i = O, _({
					type: rf.INIT
				})
			}

			function g() {
				var O, R = f;
				return O = {
					subscribe: function(x) {
						if (typeof x != "object") throw new TypeError("Expected the observer to be an object.");

						function S() {
							x.next && x.next(E())
						}
						S();
						var L = R(S);
						return {
							unsubscribe: L
						}
					}
				}, O[tf.default] = function() {
					return this
				}, O
			}
			return _({
				type: rf.INIT
			}), n = {
				dispatch: _,
				subscribe: f,
				getState: E,
				replaceReducer: p
			}, n[tf.default] = g, n
		}
	});
	var Bo = u(Wo => {
		"use strict";
		Wo.__esModule = !0;
		Wo.default = Fb;

		function Fb(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var uf = u(Ho => {
		"use strict";
		Ho.__esModule = !0;
		Ho.default = Wb;
		var af = Vo(),
			Gb = Fo(),
			rH = sf(Gb),
			Xb = Bo(),
			nH = sf(Xb);

		function sf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function Ub(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function Vb(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: af.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: i
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + af.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function Wb(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i])
			}
			var o = Object.keys(r);
			if (!1) var a;
			var s;
			try {
				Vb(r)
			} catch (c) {
				s = c
			}
			return function() {
				var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					E = arguments[1];
				if (s) throw s;
				if (!1) var f;
				for (var _ = !1, p = {}, g = 0; g < o.length; g++) {
					var O = o[g],
						R = r[O],
						A = d[O],
						x = R(A, E);
					if (typeof x > "u") {
						var S = Ub(O, E);
						throw new Error(S)
					}
					p[O] = x, _ = _ || x !== A
				}
				return _ ? p : d
			}
		}
	});
	var lf = u(ko => {
		"use strict";
		ko.__esModule = !0;
		ko.default = Bb;

		function cf(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function Bb(e, t) {
			if (typeof e == "function") return cf(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var o = r[i],
					a = e[o];
				typeof a == "function" && (n[o] = cf(a, t))
			}
			return n
		}
	});
	var Ko = u(jo => {
		"use strict";
		jo.__esModule = !0;
		jo.default = Hb;

		function Hb() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(o) {
				return o
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				i = t.slice(0, -1);
			return function() {
				return i.reduceRight(function(o, a) {
					return a(o)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var ff = u(zo => {
		"use strict";
		zo.__esModule = !0;
		var kb = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		zo.default = Yb;
		var jb = Ko(),
			Kb = zb(jb);

		function zb(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function Yb() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(i, o, a) {
					var s = n(i, o, a),
						c = s.dispatch,
						d = [],
						E = {
							getState: s.getState,
							dispatch: function(_) {
								return c(_)
							}
						};
					return d = t.map(function(f) {
						return f(E)
					}), c = Kb.default.apply(void 0, d)(s.dispatch), kb({}, s, {
						dispatch: c
					})
				}
			}
		}
	});
	var Yo = u(je => {
		"use strict";
		je.__esModule = !0;
		je.compose = je.applyMiddleware = je.bindActionCreators = je.combineReducers = je.createStore = void 0;
		var Qb = Vo(),
			$b = Jt(Qb),
			Zb = uf(),
			Jb = Jt(Zb),
			eS = lf(),
			tS = Jt(eS),
			rS = ff(),
			nS = Jt(rS),
			iS = Ko(),
			oS = Jt(iS),
			aS = Bo(),
			uH = Jt(aS);

		function Jt(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		je.createStore = $b.default;
		je.combineReducers = Jb.default;
		je.bindActionCreators = tS.default;
		je.applyMiddleware = nS.default;
		je.compose = oS.default
	});
	var df = u(xe => {
		"use strict";
		Object.defineProperty(xe, "__esModule", {
			value: !0
		});
		xe.QuickEffectIds = xe.QuickEffectDirectionConsts = xe.EventTypeConsts = xe.EventLimitAffectedElements = xe.EventContinuousMouseAxes = xe.EventBasedOn = xe.EventAppliesTo = void 0;
		var sS = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		};
		xe.EventTypeConsts = sS;
		var uS = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		};
		xe.EventAppliesTo = uS;
		var cS = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		};
		xe.EventBasedOn = cS;
		var lS = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		};
		xe.EventContinuousMouseAxes = lS;
		var fS = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		};
		xe.EventLimitAffectedElements = fS;
		var dS = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		};
		xe.QuickEffectIds = dS;
		var pS = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		};
		xe.QuickEffectDirectionConsts = pS
	});
	var Qo = u(er => {
		"use strict";
		Object.defineProperty(er, "__esModule", {
			value: !0
		});
		er.ActionTypeConsts = er.ActionAppliesTo = void 0;
		var vS = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		};
		er.ActionTypeConsts = vS;
		var hS = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		};
		er.ActionAppliesTo = hS
	});
	var pf = u(An => {
		"use strict";
		Object.defineProperty(An, "__esModule", {
			value: !0
		});
		An.InteractionTypeConsts = void 0;
		var gS = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		};
		An.InteractionTypeConsts = gS
	});
	var vf = u(wn => {
		"use strict";
		Object.defineProperty(wn, "__esModule", {
			value: !0
		});
		wn.ReducedMotionTypes = void 0;
		var ES = Qo(),
			{
				TRANSFORM_MOVE: _S,
				TRANSFORM_SCALE: mS,
				TRANSFORM_ROTATE: yS,
				TRANSFORM_SKEW: IS,
				STYLE_SIZE: TS,
				STYLE_FILTER: OS,
				STYLE_FONT_VARIATION: bS
			} = ES.ActionTypeConsts,
			SS = {
				[_S]: !0,
				[mS]: !0,
				[yS]: !0,
				[IS]: !0,
				[TS]: !0,
				[OS]: !0,
				[bS]: !0
			};
		wn.ReducedMotionTypes = SS
	});
	var hf = u(ue => {
		"use strict";
		Object.defineProperty(ue, "__esModule", {
			value: !0
		});
		ue.IX2_VIEWPORT_WIDTH_CHANGED = ue.IX2_TEST_FRAME_RENDERED = ue.IX2_STOP_REQUESTED = ue.IX2_SESSION_STOPPED = ue.IX2_SESSION_STARTED = ue.IX2_SESSION_INITIALIZED = ue.IX2_RAW_DATA_IMPORTED = ue.IX2_PREVIEW_REQUESTED = ue.IX2_PLAYBACK_REQUESTED = ue.IX2_PARAMETER_CHANGED = ue.IX2_MEDIA_QUERIES_DEFINED = ue.IX2_INSTANCE_STARTED = ue.IX2_INSTANCE_REMOVED = ue.IX2_INSTANCE_ADDED = ue.IX2_EVENT_STATE_CHANGED = ue.IX2_EVENT_LISTENER_ADDED = ue.IX2_ELEMENT_STATE_CHANGED = ue.IX2_CLEAR_REQUESTED = ue.IX2_ANIMATION_FRAME_CHANGED = ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
		var AS = "IX2_RAW_DATA_IMPORTED";
		ue.IX2_RAW_DATA_IMPORTED = AS;
		var wS = "IX2_SESSION_INITIALIZED";
		ue.IX2_SESSION_INITIALIZED = wS;
		var RS = "IX2_SESSION_STARTED";
		ue.IX2_SESSION_STARTED = RS;
		var CS = "IX2_SESSION_STOPPED";
		ue.IX2_SESSION_STOPPED = CS;
		var xS = "IX2_PREVIEW_REQUESTED";
		ue.IX2_PREVIEW_REQUESTED = xS;
		var NS = "IX2_PLAYBACK_REQUESTED";
		ue.IX2_PLAYBACK_REQUESTED = NS;
		var qS = "IX2_STOP_REQUESTED";
		ue.IX2_STOP_REQUESTED = qS;
		var LS = "IX2_CLEAR_REQUESTED";
		ue.IX2_CLEAR_REQUESTED = LS;
		var PS = "IX2_EVENT_LISTENER_ADDED";
		ue.IX2_EVENT_LISTENER_ADDED = PS;
		var DS = "IX2_EVENT_STATE_CHANGED";
		ue.IX2_EVENT_STATE_CHANGED = DS;
		var MS = "IX2_ANIMATION_FRAME_CHANGED";
		ue.IX2_ANIMATION_FRAME_CHANGED = MS;
		var FS = "IX2_PARAMETER_CHANGED";
		ue.IX2_PARAMETER_CHANGED = FS;
		var GS = "IX2_INSTANCE_ADDED";
		ue.IX2_INSTANCE_ADDED = GS;
		var XS = "IX2_INSTANCE_STARTED";
		ue.IX2_INSTANCE_STARTED = XS;
		var US = "IX2_INSTANCE_REMOVED";
		ue.IX2_INSTANCE_REMOVED = US;
		var VS = "IX2_ELEMENT_STATE_CHANGED";
		ue.IX2_ELEMENT_STATE_CHANGED = VS;
		var WS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
		ue.IX2_ACTION_LIST_PLAYBACK_CHANGED = WS;
		var BS = "IX2_VIEWPORT_WIDTH_CHANGED";
		ue.IX2_VIEWPORT_WIDTH_CHANGED = BS;
		var HS = "IX2_MEDIA_QUERIES_DEFINED";
		ue.IX2_MEDIA_QUERIES_DEFINED = HS;
		var kS = "IX2_TEST_FRAME_RENDERED";
		ue.IX2_TEST_FRAME_RENDERED = kS
	});
	var gf = u(N => {
		"use strict";
		Object.defineProperty(N, "__esModule", {
			value: !0
		});
		N.W_MOD_JS = N.W_MOD_IX = N.WILL_CHANGE = N.WIDTH = N.WF_PAGE = N.TRANSLATE_Z = N.TRANSLATE_Y = N.TRANSLATE_X = N.TRANSLATE_3D = N.TRANSFORM = N.SKEW_Y = N.SKEW_X = N.SKEW = N.SIBLINGS = N.SCALE_Z = N.SCALE_Y = N.SCALE_X = N.SCALE_3D = N.ROTATE_Z = N.ROTATE_Y = N.ROTATE_X = N.RENDER_TRANSFORM = N.RENDER_STYLE = N.RENDER_PLUGIN = N.RENDER_GENERAL = N.PRESERVE_3D = N.PLAIN_OBJECT = N.PARENT = N.OPACITY = N.IX2_ID_DELIMITER = N.IMMEDIATE_CHILDREN = N.HTML_ELEMENT = N.HEIGHT = N.FONT_VARIATION_SETTINGS = N.FLEX = N.FILTER = N.DISPLAY = N.CONFIG_Z_VALUE = N.CONFIG_Z_UNIT = N.CONFIG_Y_VALUE = N.CONFIG_Y_UNIT = N.CONFIG_X_VALUE = N.CONFIG_X_UNIT = N.CONFIG_VALUE = N.CONFIG_UNIT = N.COMMA_DELIMITER = N.COLOR = N.COLON_DELIMITER = N.CHILDREN = N.BOUNDARY_SELECTOR = N.BORDER_COLOR = N.BAR_DELIMITER = N.BACKGROUND_COLOR = N.BACKGROUND = N.AUTO = N.ABSTRACT_NODE = void 0;
		var jS = "|";
		N.IX2_ID_DELIMITER = jS;
		var KS = "data-wf-page";
		N.WF_PAGE = KS;
		var zS = "w-mod-js";
		N.W_MOD_JS = zS;
		var YS = "w-mod-ix";
		N.W_MOD_IX = YS;
		var QS = ".w-dyn-item";
		N.BOUNDARY_SELECTOR = QS;
		var $S = "xValue";
		N.CONFIG_X_VALUE = $S;
		var ZS = "yValue";
		N.CONFIG_Y_VALUE = ZS;
		var JS = "zValue";
		N.CONFIG_Z_VALUE = JS;
		var eA = "value";
		N.CONFIG_VALUE = eA;
		var tA = "xUnit";
		N.CONFIG_X_UNIT = tA;
		var rA = "yUnit";
		N.CONFIG_Y_UNIT = rA;
		var nA = "zUnit";
		N.CONFIG_Z_UNIT = nA;
		var iA = "unit";
		N.CONFIG_UNIT = iA;
		var oA = "transform";
		N.TRANSFORM = oA;
		var aA = "translateX";
		N.TRANSLATE_X = aA;
		var sA = "translateY";
		N.TRANSLATE_Y = sA;
		var uA = "translateZ";
		N.TRANSLATE_Z = uA;
		var cA = "translate3d";
		N.TRANSLATE_3D = cA;
		var lA = "scaleX";
		N.SCALE_X = lA;
		var fA = "scaleY";
		N.SCALE_Y = fA;
		var dA = "scaleZ";
		N.SCALE_Z = dA;
		var pA = "scale3d";
		N.SCALE_3D = pA;
		var vA = "rotateX";
		N.ROTATE_X = vA;
		var hA = "rotateY";
		N.ROTATE_Y = hA;
		var gA = "rotateZ";
		N.ROTATE_Z = gA;
		var EA = "skew";
		N.SKEW = EA;
		var _A = "skewX";
		N.SKEW_X = _A;
		var mA = "skewY";
		N.SKEW_Y = mA;
		var yA = "opacity";
		N.OPACITY = yA;
		var IA = "filter";
		N.FILTER = IA;
		var TA = "font-variation-settings";
		N.FONT_VARIATION_SETTINGS = TA;
		var OA = "width";
		N.WIDTH = OA;
		var bA = "height";
		N.HEIGHT = bA;
		var SA = "backgroundColor";
		N.BACKGROUND_COLOR = SA;
		var AA = "background";
		N.BACKGROUND = AA;
		var wA = "borderColor";
		N.BORDER_COLOR = wA;
		var RA = "color";
		N.COLOR = RA;
		var CA = "display";
		N.DISPLAY = CA;
		var xA = "flex";
		N.FLEX = xA;
		var NA = "willChange";
		N.WILL_CHANGE = NA;
		var qA = "AUTO";
		N.AUTO = qA;
		var LA = ",";
		N.COMMA_DELIMITER = LA;
		var PA = ":";
		N.COLON_DELIMITER = PA;
		var DA = "|";
		N.BAR_DELIMITER = DA;
		var MA = "CHILDREN";
		N.CHILDREN = MA;
		var FA = "IMMEDIATE_CHILDREN";
		N.IMMEDIATE_CHILDREN = FA;
		var GA = "SIBLINGS";
		N.SIBLINGS = GA;
		var XA = "PARENT";
		N.PARENT = XA;
		var UA = "preserve-3d";
		N.PRESERVE_3D = UA;
		var VA = "HTML_ELEMENT";
		N.HTML_ELEMENT = VA;
		var WA = "PLAIN_OBJECT";
		N.PLAIN_OBJECT = WA;
		var BA = "ABSTRACT_NODE";
		N.ABSTRACT_NODE = BA;
		var HA = "RENDER_TRANSFORM";
		N.RENDER_TRANSFORM = HA;
		var kA = "RENDER_GENERAL";
		N.RENDER_GENERAL = kA;
		var jA = "RENDER_STYLE";
		N.RENDER_STYLE = jA;
		var KA = "RENDER_PLUGIN";
		N.RENDER_PLUGIN = KA
	});
	var We = u(we => {
		"use strict";
		var Ef = Kt().default;
		Object.defineProperty(we, "__esModule", {
			value: !0
		});
		var Rn = {
			IX2EngineActionTypes: !0,
			IX2EngineConstants: !0
		};
		we.IX2EngineConstants = we.IX2EngineActionTypes = void 0;
		var $o = df();
		Object.keys($o).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === $o[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return $o[e]
				}
			})
		});
		var Zo = Qo();
		Object.keys(Zo).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === Zo[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return Zo[e]
				}
			})
		});
		var Jo = pf();
		Object.keys(Jo).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === Jo[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return Jo[e]
				}
			})
		});
		var ea = vf();
		Object.keys(ea).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in we && we[e] === ea[e] || Object.defineProperty(we, e, {
				enumerable: !0,
				get: function() {
					return ea[e]
				}
			})
		});
		var zA = Ef(hf());
		we.IX2EngineActionTypes = zA;
		var YA = Ef(gf());
		we.IX2EngineConstants = YA
	});
	var _f = u(Cn => {
		"use strict";
		Object.defineProperty(Cn, "__esModule", {
			value: !0
		});
		Cn.ixData = void 0;
		var QA = We(),
			{
				IX2_RAW_DATA_IMPORTED: $A
			} = QA.IX2EngineActionTypes,
			ZA = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case $A:
						return t.payload.ixData || Object.freeze({});
					default:
						return e
				}
			};
		Cn.ixData = ZA
	});
	var Pr = u((_H, _t) => {
		function ta() {
			return _t.exports = ta = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			}, _t.exports.__esModule = !0, _t.exports.default = _t.exports, ta.apply(this, arguments)
		}
		_t.exports = ta, _t.exports.__esModule = !0, _t.exports.default = _t.exports
	});
	var tr = u(Te => {
		"use strict";
		Object.defineProperty(Te, "__esModule", {
			value: !0
		});
		var JA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		Te.clone = Nn;
		Te.addLast = If;
		Te.addFirst = Tf;
		Te.removeLast = Of;
		Te.removeFirst = bf;
		Te.insert = Sf;
		Te.removeAt = Af;
		Te.replaceAt = wf;
		Te.getIn = qn;
		Te.set = Ln;
		Te.setIn = Pn;
		Te.update = Cf;
		Te.updateIn = xf;
		Te.merge = Nf;
		Te.mergeDeep = qf;
		Te.mergeIn = Lf;
		Te.omit = Pf;
		Te.addDefaults = Df;
		var mf = "INVALID_ARGS";

		function yf(e) {
			throw new Error(e)
		}

		function ra(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var ew = {}.hasOwnProperty;

		function Nn(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = ra(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i]
			}
			return r
		}

		function Be(e, t, r) {
			var n = r;
			n == null && yf(mf);
			for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
			for (var c = 0; c < a.length; c++) {
				var d = a[c];
				if (d != null) {
					var E = ra(d);
					if (E.length)
						for (var f = 0; f <= E.length; f++) {
							var _ = E[f];
							if (!(e && n[_] !== void 0)) {
								var p = d[_];
								t && xn(n[_]) && xn(p) && (p = Be(e, t, n[_], p)), !(p === void 0 || p === n[_]) && (i || (i = !0, n = Nn(n)), n[_] = p)
							}
						}
				}
			}
			return n
		}

		function xn(e) {
			var t = typeof e > "u" ? "undefined" : JA(e);
			return e != null && (t === "object" || t === "function")
		}

		function If(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function Tf(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function Of(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function bf(e) {
			return e.length ? e.slice(1) : e
		}

		function Sf(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function Af(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function wf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
			return i[t] = r, i
		}

		function qn(e, t) {
			if (!Array.isArray(t) && yf(mf), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (r = r?.[i], r === void 0) return r
				}
				return r
			}
		}

		function Ln(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ?? n;
			if (i[t] === r) return i;
			var o = Nn(i);
			return o[t] = r, o
		}

		function Rf(e, t, r, n) {
			var i = void 0,
				o = t[n];
			if (n === t.length - 1) i = r;
			else {
				var a = xn(e) && xn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
				i = Rf(a, t, r, n + 1)
			}
			return Ln(e, o, i)
		}

		function Pn(e, t, r) {
			return t.length ? Rf(e, t, r, 0) : r
		}

		function Cf(e, t, r) {
			var n = e?.[t],
				i = r(n);
			return Ln(e, t, i)
		}

		function xf(e, t, r) {
			var n = qn(e, t),
				i = r(n);
			return Pn(e, t, i)
		}

		function Nf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Be(!1, !1, e, t, r, n, i, o)
		}

		function qf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Be(!1, !0, e, t, r, n, i, o)
		}

		function Lf(e, t, r, n, i, o, a) {
			var s = qn(e, t);
			s == null && (s = {});
			for (var c = void 0, d = arguments.length, E = Array(d > 7 ? d - 7 : 0), f = 7; f < d; f++) E[f - 7] = arguments[f];
			return E.length ? c = Be.call.apply(Be, [null, !1, !1, s, r, n, i, o, a].concat(E)) : c = Be(!1, !1, s, r, n, i, o, a), Pn(e, t, c)
		}

		function Pf(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (ew.call(e, r[i])) {
					n = !0;
					break
				} if (!n) return e;
			for (var o = {}, a = ra(e), s = 0; s < a.length; s++) {
				var c = a[s];
				r.indexOf(c) >= 0 || (o[c] = e[c])
			}
			return o
		}

		function Df(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) s[c - 6] = arguments[c];
			return s.length ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Be(!0, !1, e, t, r, n, i, o)
		}
		var tw = {
			clone: Nn,
			addLast: If,
			addFirst: Tf,
			removeLast: Of,
			removeFirst: bf,
			insert: Sf,
			removeAt: Af,
			replaceAt: wf,
			getIn: qn,
			set: Ln,
			setIn: Pn,
			update: Cf,
			updateIn: xf,
			merge: Nf,
			mergeDeep: qf,
			mergeIn: Lf,
			omit: Pf,
			addDefaults: Df
		};
		Te.default = tw
	});
	var Ff = u(Dn => {
		"use strict";
		var rw = ut().default;
		Object.defineProperty(Dn, "__esModule", {
			value: !0
		});
		Dn.ixRequest = void 0;
		var nw = rw(Pr()),
			iw = We(),
			ow = tr(),
			{
				IX2_PREVIEW_REQUESTED: aw,
				IX2_PLAYBACK_REQUESTED: sw,
				IX2_STOP_REQUESTED: uw,
				IX2_CLEAR_REQUESTED: cw
			} = iw.IX2EngineActionTypes,
			lw = {
				preview: {},
				playback: {},
				stop: {},
				clear: {}
			},
			Mf = Object.create(null, {
				[aw]: {
					value: "preview"
				},
				[sw]: {
					value: "playback"
				},
				[uw]: {
					value: "stop"
				},
				[cw]: {
					value: "clear"
				}
			}),
			fw = (e = lw, t) => {
				if (t.type in Mf) {
					let r = [Mf[t.type]];
					return (0, ow.setIn)(e, [r], (0, nw.default)({}, t.payload))
				}
				return e
			};
		Dn.ixRequest = fw
	});
	var Xf = u(Mn => {
		"use strict";
		Object.defineProperty(Mn, "__esModule", {
			value: !0
		});
		Mn.ixSession = void 0;
		var dw = We(),
			lt = tr(),
			{
				IX2_SESSION_INITIALIZED: pw,
				IX2_SESSION_STARTED: vw,
				IX2_TEST_FRAME_RENDERED: hw,
				IX2_SESSION_STOPPED: gw,
				IX2_EVENT_LISTENER_ADDED: Ew,
				IX2_EVENT_STATE_CHANGED: _w,
				IX2_ANIMATION_FRAME_CHANGED: mw,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: yw,
				IX2_VIEWPORT_WIDTH_CHANGED: Iw,
				IX2_MEDIA_QUERIES_DEFINED: Tw
			} = dw.IX2EngineActionTypes,
			Gf = {
				active: !1,
				tick: 0,
				eventListeners: [],
				eventState: {},
				playbackState: {},
				viewportWidth: 0,
				mediaQueryKey: null,
				hasBoundaryNodes: !1,
				hasDefinedMediaQueries: !1,
				reducedMotion: !1
			},
			Ow = 20,
			bw = (e = Gf, t) => {
				switch (t.type) {
					case pw: {
						let {
							hasBoundaryNodes: r,
							reducedMotion: n
						} = t.payload;
						return (0, lt.merge)(e, {
							hasBoundaryNodes: r,
							reducedMotion: n
						})
					}
					case vw:
						return (0, lt.set)(e, "active", !0);
					case hw: {
						let {
							payload: {
								step: r = Ow
							}
						} = t;
						return (0, lt.set)(e, "tick", e.tick + r)
					}
					case gw:
						return Gf;
					case mw: {
						let {
							payload: {
								now: r
							}
						} = t;
						return (0, lt.set)(e, "tick", r)
					}
					case Ew: {
						let r = (0, lt.addLast)(e.eventListeners, t.payload);
						return (0, lt.set)(e, "eventListeners", r)
					}
					case _w: {
						let {
							stateKey: r,
							newState: n
						} = t.payload;
						return (0, lt.setIn)(e, ["eventState", r], n)
					}
					case yw: {
						let {
							actionListId: r,
							isPlaying: n
						} = t.payload;
						return (0, lt.setIn)(e, ["playbackState", r], n)
					}
					case Iw: {
						let {
							width: r,
							mediaQueries: n
						} = t.payload, i = n.length, o = null;
						for (let a = 0; a < i; a++) {
							let {
								key: s,
								min: c,
								max: d
							} = n[a];
							if (r >= c && r <= d) {
								o = s;
								break
							}
						}
						return (0, lt.merge)(e, {
							viewportWidth: r,
							mediaQueryKey: o
						})
					}
					case Tw:
						return (0, lt.set)(e, "hasDefinedMediaQueries", !0);
					default:
						return e
				}
			};
		Mn.ixSession = bw
	});
	var Vf = u((TH, Uf) => {
		function Sw() {
			this.__data__ = [], this.size = 0
		}
		Uf.exports = Sw
	});
	var Fn = u((OH, Wf) => {
		function Aw(e, t) {
			return e === t || e !== e && t !== t
		}
		Wf.exports = Aw
	});
	var Dr = u((bH, Bf) => {
		var ww = Fn();

		function Rw(e, t) {
			for (var r = e.length; r--;)
				if (ww(e[r][0], t)) return r;
			return -1
		}
		Bf.exports = Rw
	});
	var kf = u((SH, Hf) => {
		var Cw = Dr(),
			xw = Array.prototype,
			Nw = xw.splice;

		function qw(e) {
			var t = this.__data__,
				r = Cw(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : Nw.call(t, r, 1), --this.size, !0
		}
		Hf.exports = qw
	});
	var Kf = u((AH, jf) => {
		var Lw = Dr();

		function Pw(e) {
			var t = this.__data__,
				r = Lw(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		jf.exports = Pw
	});
	var Yf = u((wH, zf) => {
		var Dw = Dr();

		function Mw(e) {
			return Dw(this.__data__, e) > -1
		}
		zf.exports = Mw
	});
	var $f = u((RH, Qf) => {
		var Fw = Dr();

		function Gw(e, t) {
			var r = this.__data__,
				n = Fw(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		Qf.exports = Gw
	});
	var Mr = u((CH, Zf) => {
		var Xw = Vf(),
			Uw = kf(),
			Vw = Kf(),
			Ww = Yf(),
			Bw = $f();

		function rr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		rr.prototype.clear = Xw;
		rr.prototype.delete = Uw;
		rr.prototype.get = Vw;
		rr.prototype.has = Ww;
		rr.prototype.set = Bw;
		Zf.exports = rr
	});
	var ed = u((xH, Jf) => {
		var Hw = Mr();

		function kw() {
			this.__data__ = new Hw, this.size = 0
		}
		Jf.exports = kw
	});
	var rd = u((NH, td) => {
		function jw(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		td.exports = jw
	});
	var id = u((qH, nd) => {
		function Kw(e) {
			return this.__data__.get(e)
		}
		nd.exports = Kw
	});
	var ad = u((LH, od) => {
		function zw(e) {
			return this.__data__.has(e)
		}
		od.exports = zw
	});
	var ft = u((PH, sd) => {
		function Yw(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		sd.exports = Yw
	});
	var na = u((DH, ud) => {
		var Qw = bt(),
			$w = ft(),
			Zw = "[object AsyncFunction]",
			Jw = "[object Function]",
			e0 = "[object GeneratorFunction]",
			t0 = "[object Proxy]";

		function r0(e) {
			if (!$w(e)) return !1;
			var t = Qw(e);
			return t == Jw || t == e0 || t == Zw || t == t0
		}
		ud.exports = r0
	});
	var ld = u((MH, cd) => {
		var n0 = tt(),
			i0 = n0["__core-js_shared__"];
		cd.exports = i0
	});
	var pd = u((FH, dd) => {
		var ia = ld(),
			fd = function() {
				var e = /[^.]+$/.exec(ia && ia.keys && ia.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function o0(e) {
			return !!fd && fd in e
		}
		dd.exports = o0
	});
	var oa = u((GH, vd) => {
		var a0 = Function.prototype,
			s0 = a0.toString;

		function u0(e) {
			if (e != null) {
				try {
					return s0.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		vd.exports = u0
	});
	var gd = u((XH, hd) => {
		var c0 = na(),
			l0 = pd(),
			f0 = ft(),
			d0 = oa(),
			p0 = /[\\^$.*+?()[\]{}|]/g,
			v0 = /^\[object .+?Constructor\]$/,
			h0 = Function.prototype,
			g0 = Object.prototype,
			E0 = h0.toString,
			_0 = g0.hasOwnProperty,
			m0 = RegExp("^" + E0.call(_0).replace(p0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function y0(e) {
			if (!f0(e) || l0(e)) return !1;
			var t = c0(e) ? m0 : v0;
			return t.test(d0(e))
		}
		hd.exports = y0
	});
	var _d = u((UH, Ed) => {
		function I0(e, t) {
			return e?.[t]
		}
		Ed.exports = I0
	});
	var St = u((VH, md) => {
		var T0 = gd(),
			O0 = _d();

		function b0(e, t) {
			var r = O0(e, t);
			return T0(r) ? r : void 0
		}
		md.exports = b0
	});
	var Gn = u((WH, yd) => {
		var S0 = St(),
			A0 = tt(),
			w0 = S0(A0, "Map");
		yd.exports = w0
	});
	var Fr = u((BH, Id) => {
		var R0 = St(),
			C0 = R0(Object, "create");
		Id.exports = C0
	});
	var bd = u((HH, Od) => {
		var Td = Fr();

		function x0() {
			this.__data__ = Td ? Td(null) : {}, this.size = 0
		}
		Od.exports = x0
	});
	var Ad = u((kH, Sd) => {
		function N0(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		Sd.exports = N0
	});
	var Rd = u((jH, wd) => {
		var q0 = Fr(),
			L0 = "__lodash_hash_undefined__",
			P0 = Object.prototype,
			D0 = P0.hasOwnProperty;

		function M0(e) {
			var t = this.__data__;
			if (q0) {
				var r = t[e];
				return r === L0 ? void 0 : r
			}
			return D0.call(t, e) ? t[e] : void 0
		}
		wd.exports = M0
	});
	var xd = u((KH, Cd) => {
		var F0 = Fr(),
			G0 = Object.prototype,
			X0 = G0.hasOwnProperty;

		function U0(e) {
			var t = this.__data__;
			return F0 ? t[e] !== void 0 : X0.call(t, e)
		}
		Cd.exports = U0
	});
	var qd = u((zH, Nd) => {
		var V0 = Fr(),
			W0 = "__lodash_hash_undefined__";

		function B0(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = V0 && t === void 0 ? W0 : t, this
		}
		Nd.exports = B0
	});
	var Pd = u((YH, Ld) => {
		var H0 = bd(),
			k0 = Ad(),
			j0 = Rd(),
			K0 = xd(),
			z0 = qd();

		function nr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		nr.prototype.clear = H0;
		nr.prototype.delete = k0;
		nr.prototype.get = j0;
		nr.prototype.has = K0;
		nr.prototype.set = z0;
		Ld.exports = nr
	});
	var Fd = u((QH, Md) => {
		var Dd = Pd(),
			Y0 = Mr(),
			Q0 = Gn();

		function $0() {
			this.size = 0, this.__data__ = {
				hash: new Dd,
				map: new(Q0 || Y0),
				string: new Dd
			}
		}
		Md.exports = $0
	});
	var Xd = u(($H, Gd) => {
		function Z0(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		Gd.exports = Z0
	});
	var Gr = u((ZH, Ud) => {
		var J0 = Xd();

		function eR(e, t) {
			var r = e.__data__;
			return J0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		Ud.exports = eR
	});
	var Wd = u((JH, Vd) => {
		var tR = Gr();

		function rR(e) {
			var t = tR(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		Vd.exports = rR
	});
	var Hd = u((ek, Bd) => {
		var nR = Gr();

		function iR(e) {
			return nR(this, e).get(e)
		}
		Bd.exports = iR
	});
	var jd = u((tk, kd) => {
		var oR = Gr();

		function aR(e) {
			return oR(this, e).has(e)
		}
		kd.exports = aR
	});
	var zd = u((rk, Kd) => {
		var sR = Gr();

		function uR(e, t) {
			var r = sR(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		Kd.exports = uR
	});
	var Xn = u((nk, Yd) => {
		var cR = Fd(),
			lR = Wd(),
			fR = Hd(),
			dR = jd(),
			pR = zd();

		function ir(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		ir.prototype.clear = cR;
		ir.prototype.delete = lR;
		ir.prototype.get = fR;
		ir.prototype.has = dR;
		ir.prototype.set = pR;
		Yd.exports = ir
	});
	var $d = u((ik, Qd) => {
		var vR = Mr(),
			hR = Gn(),
			gR = Xn(),
			ER = 200;

		function _R(e, t) {
			var r = this.__data__;
			if (r instanceof vR) {
				var n = r.__data__;
				if (!hR || n.length < ER - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new gR(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		Qd.exports = _R
	});
	var aa = u((ok, Zd) => {
		var mR = Mr(),
			yR = ed(),
			IR = rd(),
			TR = id(),
			OR = ad(),
			bR = $d();

		function or(e) {
			var t = this.__data__ = new mR(e);
			this.size = t.size
		}
		or.prototype.clear = yR;
		or.prototype.delete = IR;
		or.prototype.get = TR;
		or.prototype.has = OR;
		or.prototype.set = bR;
		Zd.exports = or
	});
	var ep = u((ak, Jd) => {
		var SR = "__lodash_hash_undefined__";

		function AR(e) {
			return this.__data__.set(e, SR), this
		}
		Jd.exports = AR
	});
	var rp = u((sk, tp) => {
		function wR(e) {
			return this.__data__.has(e)
		}
		tp.exports = wR
	});
	var ip = u((uk, np) => {
		var RR = Xn(),
			CR = ep(),
			xR = rp();

		function Un(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new RR; ++t < r;) this.add(e[t])
		}
		Un.prototype.add = Un.prototype.push = CR;
		Un.prototype.has = xR;
		np.exports = Un
	});
	var ap = u((ck, op) => {
		function NR(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		op.exports = NR
	});
	var up = u((lk, sp) => {
		function qR(e, t) {
			return e.has(t)
		}
		sp.exports = qR
	});
	var sa = u((fk, cp) => {
		var LR = ip(),
			PR = ap(),
			DR = up(),
			MR = 1,
			FR = 2;

		function GR(e, t, r, n, i, o) {
			var a = r & MR,
				s = e.length,
				c = t.length;
			if (s != c && !(a && c > s)) return !1;
			var d = o.get(e),
				E = o.get(t);
			if (d && E) return d == t && E == e;
			var f = -1,
				_ = !0,
				p = r & FR ? new LR : void 0;
			for (o.set(e, t), o.set(t, e); ++f < s;) {
				var g = e[f],
					O = t[f];
				if (n) var R = a ? n(O, g, f, t, e, o) : n(g, O, f, e, t, o);
				if (R !== void 0) {
					if (R) continue;
					_ = !1;
					break
				}
				if (p) {
					if (!PR(t, function(A, x) {
							if (!DR(p, x) && (g === A || i(g, A, r, n, o))) return p.push(x)
						})) {
						_ = !1;
						break
					}
				} else if (!(g === O || i(g, O, r, n, o))) {
					_ = !1;
					break
				}
			}
			return o.delete(e), o.delete(t), _
		}
		cp.exports = GR
	});
	var fp = u((dk, lp) => {
		var XR = tt(),
			UR = XR.Uint8Array;
		lp.exports = UR
	});
	var pp = u((pk, dp) => {
		function VR(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, i) {
				r[++t] = [i, n]
			}), r
		}
		dp.exports = VR
	});
	var hp = u((vk, vp) => {
		function WR(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		vp.exports = WR
	});
	var yp = u((hk, mp) => {
		var gp = $t(),
			Ep = fp(),
			BR = Fn(),
			HR = sa(),
			kR = pp(),
			jR = hp(),
			KR = 1,
			zR = 2,
			YR = "[object Boolean]",
			QR = "[object Date]",
			$R = "[object Error]",
			ZR = "[object Map]",
			JR = "[object Number]",
			eC = "[object RegExp]",
			tC = "[object Set]",
			rC = "[object String]",
			nC = "[object Symbol]",
			iC = "[object ArrayBuffer]",
			oC = "[object DataView]",
			_p = gp ? gp.prototype : void 0,
			ua = _p ? _p.valueOf : void 0;

		function aC(e, t, r, n, i, o, a) {
			switch (r) {
				case oC:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case iC:
					return !(e.byteLength != t.byteLength || !o(new Ep(e), new Ep(t)));
				case YR:
				case QR:
				case JR:
					return BR(+e, +t);
				case $R:
					return e.name == t.name && e.message == t.message;
				case eC:
				case rC:
					return e == t + "";
				case ZR:
					var s = kR;
				case tC:
					var c = n & KR;
					if (s || (s = jR), e.size != t.size && !c) return !1;
					var d = a.get(e);
					if (d) return d == t;
					n |= zR, a.set(e, t);
					var E = HR(s(e), s(t), n, i, o, a);
					return a.delete(e), E;
				case nC:
					if (ua) return ua.call(e) == ua.call(t)
			}
			return !1
		}
		mp.exports = aC
	});
	var Vn = u((gk, Ip) => {
		function sC(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
			return e
		}
		Ip.exports = sC
	});
	var Ne = u((Ek, Tp) => {
		var uC = Array.isArray;
		Tp.exports = uC
	});
	var ca = u((_k, Op) => {
		var cC = Vn(),
			lC = Ne();

		function fC(e, t, r) {
			var n = t(e);
			return lC(e) ? n : cC(n, r(e))
		}
		Op.exports = fC
	});
	var Sp = u((mk, bp) => {
		function dC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
				var a = e[r];
				t(a, r, e) && (o[i++] = a)
			}
			return o
		}
		bp.exports = dC
	});
	var la = u((yk, Ap) => {
		function pC() {
			return []
		}
		Ap.exports = pC
	});
	var fa = u((Ik, Rp) => {
		var vC = Sp(),
			hC = la(),
			gC = Object.prototype,
			EC = gC.propertyIsEnumerable,
			wp = Object.getOwnPropertySymbols,
			_C = wp ? function(e) {
				return e == null ? [] : (e = Object(e), vC(wp(e), function(t) {
					return EC.call(e, t)
				}))
			} : hC;
		Rp.exports = _C
	});
	var xp = u((Tk, Cp) => {
		function mC(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		Cp.exports = mC
	});
	var qp = u((Ok, Np) => {
		var yC = bt(),
			IC = Et(),
			TC = "[object Arguments]";

		function OC(e) {
			return IC(e) && yC(e) == TC
		}
		Np.exports = OC
	});
	var Xr = u((bk, Dp) => {
		var Lp = qp(),
			bC = Et(),
			Pp = Object.prototype,
			SC = Pp.hasOwnProperty,
			AC = Pp.propertyIsEnumerable,
			wC = Lp(function() {
				return arguments
			}()) ? Lp : function(e) {
				return bC(e) && SC.call(e, "callee") && !AC.call(e, "callee")
			};
		Dp.exports = wC
	});
	var Fp = u((Sk, Mp) => {
		function RC() {
			return !1
		}
		Mp.exports = RC
	});
	var Wn = u((Ur, ar) => {
		var CC = tt(),
			xC = Fp(),
			Up = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
			Gp = Up && typeof ar == "object" && ar && !ar.nodeType && ar,
			NC = Gp && Gp.exports === Up,
			Xp = NC ? CC.Buffer : void 0,
			qC = Xp ? Xp.isBuffer : void 0,
			LC = qC || xC;
		ar.exports = LC
	});
	var Bn = u((Ak, Vp) => {
		var PC = 9007199254740991,
			DC = /^(?:0|[1-9]\d*)$/;

		function MC(e, t) {
			var r = typeof e;
			return t = t ?? PC, !!t && (r == "number" || r != "symbol" && DC.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		Vp.exports = MC
	});
	var Hn = u((wk, Wp) => {
		var FC = 9007199254740991;

		function GC(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= FC
		}
		Wp.exports = GC
	});
	var Hp = u((Rk, Bp) => {
		var XC = bt(),
			UC = Hn(),
			VC = Et(),
			WC = "[object Arguments]",
			BC = "[object Array]",
			HC = "[object Boolean]",
			kC = "[object Date]",
			jC = "[object Error]",
			KC = "[object Function]",
			zC = "[object Map]",
			YC = "[object Number]",
			QC = "[object Object]",
			$C = "[object RegExp]",
			ZC = "[object Set]",
			JC = "[object String]",
			ex = "[object WeakMap]",
			tx = "[object ArrayBuffer]",
			rx = "[object DataView]",
			nx = "[object Float32Array]",
			ix = "[object Float64Array]",
			ox = "[object Int8Array]",
			ax = "[object Int16Array]",
			sx = "[object Int32Array]",
			ux = "[object Uint8Array]",
			cx = "[object Uint8ClampedArray]",
			lx = "[object Uint16Array]",
			fx = "[object Uint32Array]",
			me = {};
		me[nx] = me[ix] = me[ox] = me[ax] = me[sx] = me[ux] = me[cx] = me[lx] = me[fx] = !0;
		me[WC] = me[BC] = me[tx] = me[HC] = me[rx] = me[kC] = me[jC] = me[KC] = me[zC] = me[YC] = me[QC] = me[$C] = me[ZC] = me[JC] = me[ex] = !1;

		function dx(e) {
			return VC(e) && UC(e.length) && !!me[XC(e)]
		}
		Bp.exports = dx
	});
	var jp = u((Ck, kp) => {
		function px(e) {
			return function(t) {
				return e(t)
			}
		}
		kp.exports = px
	});
	var zp = u((Vr, sr) => {
		var vx = Po(),
			Kp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
			Wr = Kp && typeof sr == "object" && sr && !sr.nodeType && sr,
			hx = Wr && Wr.exports === Kp,
			da = hx && vx.process,
			gx = function() {
				try {
					var e = Wr && Wr.require && Wr.require("util").types;
					return e || da && da.binding && da.binding("util")
				} catch {}
			}();
		sr.exports = gx
	});
	var kn = u((xk, $p) => {
		var Ex = Hp(),
			_x = jp(),
			Yp = zp(),
			Qp = Yp && Yp.isTypedArray,
			mx = Qp ? _x(Qp) : Ex;
		$p.exports = mx
	});
	var pa = u((Nk, Zp) => {
		var yx = xp(),
			Ix = Xr(),
			Tx = Ne(),
			Ox = Wn(),
			bx = Bn(),
			Sx = kn(),
			Ax = Object.prototype,
			wx = Ax.hasOwnProperty;

		function Rx(e, t) {
			var r = Tx(e),
				n = !r && Ix(e),
				i = !r && !n && Ox(e),
				o = !r && !n && !i && Sx(e),
				a = r || n || i || o,
				s = a ? yx(e.length, String) : [],
				c = s.length;
			for (var d in e)(t || wx.call(e, d)) && !(a && (d == "length" || i && (d == "offset" || d == "parent") || o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || bx(d, c))) && s.push(d);
			return s
		}
		Zp.exports = Rx
	});
	var jn = u((qk, Jp) => {
		var Cx = Object.prototype;

		function xx(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || Cx;
			return e === r
		}
		Jp.exports = xx
	});
	var tv = u((Lk, ev) => {
		var Nx = Do(),
			qx = Nx(Object.keys, Object);
		ev.exports = qx
	});
	var Kn = u((Pk, rv) => {
		var Lx = jn(),
			Px = tv(),
			Dx = Object.prototype,
			Mx = Dx.hasOwnProperty;

		function Fx(e) {
			if (!Lx(e)) return Px(e);
			var t = [];
			for (var r in Object(e)) Mx.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		rv.exports = Fx
	});
	var Mt = u((Dk, nv) => {
		var Gx = na(),
			Xx = Hn();

		function Ux(e) {
			return e != null && Xx(e.length) && !Gx(e)
		}
		nv.exports = Ux
	});
	var Br = u((Mk, iv) => {
		var Vx = pa(),
			Wx = Kn(),
			Bx = Mt();

		function Hx(e) {
			return Bx(e) ? Vx(e) : Wx(e)
		}
		iv.exports = Hx
	});
	var av = u((Fk, ov) => {
		var kx = ca(),
			jx = fa(),
			Kx = Br();

		function zx(e) {
			return kx(e, Kx, jx)
		}
		ov.exports = zx
	});
	var cv = u((Gk, uv) => {
		var sv = av(),
			Yx = 1,
			Qx = Object.prototype,
			$x = Qx.hasOwnProperty;

		function Zx(e, t, r, n, i, o) {
			var a = r & Yx,
				s = sv(e),
				c = s.length,
				d = sv(t),
				E = d.length;
			if (c != E && !a) return !1;
			for (var f = c; f--;) {
				var _ = s[f];
				if (!(a ? _ in t : $x.call(t, _))) return !1
			}
			var p = o.get(e),
				g = o.get(t);
			if (p && g) return p == t && g == e;
			var O = !0;
			o.set(e, t), o.set(t, e);
			for (var R = a; ++f < c;) {
				_ = s[f];
				var A = e[_],
					x = t[_];
				if (n) var S = a ? n(x, A, _, t, e, o) : n(A, x, _, e, t, o);
				if (!(S === void 0 ? A === x || i(A, x, r, n, o) : S)) {
					O = !1;
					break
				}
				R || (R = _ == "constructor")
			}
			if (O && !R) {
				var L = e.constructor,
					q = t.constructor;
				L != q && "constructor" in e && "constructor" in t && !(typeof L == "function" && L instanceof L && typeof q == "function" && q instanceof q) && (O = !1)
			}
			return o.delete(e), o.delete(t), O
		}
		uv.exports = Zx
	});
	var fv = u((Xk, lv) => {
		var Jx = St(),
			eN = tt(),
			tN = Jx(eN, "DataView");
		lv.exports = tN
	});
	var pv = u((Uk, dv) => {
		var rN = St(),
			nN = tt(),
			iN = rN(nN, "Promise");
		dv.exports = iN
	});
	var hv = u((Vk, vv) => {
		var oN = St(),
			aN = tt(),
			sN = oN(aN, "Set");
		vv.exports = sN
	});
	var va = u((Wk, gv) => {
		var uN = St(),
			cN = tt(),
			lN = uN(cN, "WeakMap");
		gv.exports = lN
	});
	var zn = u((Bk, Ov) => {
		var ha = fv(),
			ga = Gn(),
			Ea = pv(),
			_a = hv(),
			ma = va(),
			Tv = bt(),
			ur = oa(),
			Ev = "[object Map]",
			fN = "[object Object]",
			_v = "[object Promise]",
			mv = "[object Set]",
			yv = "[object WeakMap]",
			Iv = "[object DataView]",
			dN = ur(ha),
			pN = ur(ga),
			vN = ur(Ea),
			hN = ur(_a),
			gN = ur(ma),
			Ft = Tv;
		(ha && Ft(new ha(new ArrayBuffer(1))) != Iv || ga && Ft(new ga) != Ev || Ea && Ft(Ea.resolve()) != _v || _a && Ft(new _a) != mv || ma && Ft(new ma) != yv) && (Ft = function(e) {
			var t = Tv(e),
				r = t == fN ? e.constructor : void 0,
				n = r ? ur(r) : "";
			if (n) switch (n) {
				case dN:
					return Iv;
				case pN:
					return Ev;
				case vN:
					return _v;
				case hN:
					return mv;
				case gN:
					return yv
			}
			return t
		});
		Ov.exports = Ft
	});
	var Nv = u((Hk, xv) => {
		var ya = aa(),
			EN = sa(),
			_N = yp(),
			mN = cv(),
			bv = zn(),
			Sv = Ne(),
			Av = Wn(),
			yN = kn(),
			IN = 1,
			wv = "[object Arguments]",
			Rv = "[object Array]",
			Yn = "[object Object]",
			TN = Object.prototype,
			Cv = TN.hasOwnProperty;

		function ON(e, t, r, n, i, o) {
			var a = Sv(e),
				s = Sv(t),
				c = a ? Rv : bv(e),
				d = s ? Rv : bv(t);
			c = c == wv ? Yn : c, d = d == wv ? Yn : d;
			var E = c == Yn,
				f = d == Yn,
				_ = c == d;
			if (_ && Av(e)) {
				if (!Av(t)) return !1;
				a = !0, E = !1
			}
			if (_ && !E) return o || (o = new ya), a || yN(e) ? EN(e, t, r, n, i, o) : _N(e, t, c, r, n, i, o);
			if (!(r & IN)) {
				var p = E && Cv.call(e, "__wrapped__"),
					g = f && Cv.call(t, "__wrapped__");
				if (p || g) {
					var O = p ? e.value() : e,
						R = g ? t.value() : t;
					return o || (o = new ya), i(O, R, r, n, o)
				}
			}
			return _ ? (o || (o = new ya), mN(e, t, r, n, i, o)) : !1
		}
		xv.exports = ON
	});
	var Ia = u((kk, Pv) => {
		var bN = Nv(),
			qv = Et();

		function Lv(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || !qv(e) && !qv(t) ? e !== e && t !== t : bN(e, t, r, n, Lv, i)
		}
		Pv.exports = Lv
	});
	var Mv = u((jk, Dv) => {
		var SN = aa(),
			AN = Ia(),
			wN = 1,
			RN = 2;

		function CN(e, t, r, n) {
			var i = r.length,
				o = i,
				a = !n;
			if (e == null) return !o;
			for (e = Object(e); i--;) {
				var s = r[i];
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
			}
			for (; ++i < o;) {
				s = r[i];
				var c = s[0],
					d = e[c],
					E = s[1];
				if (a && s[2]) {
					if (d === void 0 && !(c in e)) return !1
				} else {
					var f = new SN;
					if (n) var _ = n(d, E, c, e, t, f);
					if (!(_ === void 0 ? AN(E, d, wN | RN, n, f) : _)) return !1
				}
			}
			return !0
		}
		Dv.exports = CN
	});
	var Ta = u((Kk, Fv) => {
		var xN = ft();

		function NN(e) {
			return e === e && !xN(e)
		}
		Fv.exports = NN
	});
	var Xv = u((zk, Gv) => {
		var qN = Ta(),
			LN = Br();

		function PN(e) {
			for (var t = LN(e), r = t.length; r--;) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, qN(i)]
			}
			return t
		}
		Gv.exports = PN
	});
	var Oa = u((Yk, Uv) => {
		function DN(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		Uv.exports = DN
	});
	var Wv = u((Qk, Vv) => {
		var MN = Mv(),
			FN = Xv(),
			GN = Oa();

		function XN(e) {
			var t = FN(e);
			return t.length == 1 && t[0][2] ? GN(t[0][0], t[0][1]) : function(r) {
				return r === e || MN(r, e, t)
			}
		}
		Vv.exports = XN
	});
	var Hr = u(($k, Bv) => {
		var UN = bt(),
			VN = Et(),
			WN = "[object Symbol]";

		function BN(e) {
			return typeof e == "symbol" || VN(e) && UN(e) == WN
		}
		Bv.exports = BN
	});
	var Qn = u((Zk, Hv) => {
		var HN = Ne(),
			kN = Hr(),
			jN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			KN = /^\w*$/;

		function zN(e, t) {
			if (HN(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || kN(e) ? !0 : KN.test(e) || !jN.test(e) || t != null && e in Object(t)
		}
		Hv.exports = zN
	});
	var Kv = u((Jk, jv) => {
		var kv = Xn(),
			YN = "Expected a function";

		function ba(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(YN);
			var r = function() {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					o = r.cache;
				if (o.has(i)) return o.get(i);
				var a = e.apply(this, n);
				return r.cache = o.set(i, a) || o, a
			};
			return r.cache = new(ba.Cache || kv), r
		}
		ba.Cache = kv;
		jv.exports = ba
	});
	var Yv = u((e5, zv) => {
		var QN = Kv(),
			$N = 500;

		function ZN(e) {
			var t = QN(e, function(n) {
					return r.size === $N && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		zv.exports = ZN
	});
	var $v = u((t5, Qv) => {
		var JN = Yv(),
			eq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			tq = /\\(\\)?/g,
			rq = JN(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(eq, function(r, n, i, o) {
					t.push(i ? o.replace(tq, "$1") : n || r)
				}), t
			});
		Qv.exports = rq
	});
	var Sa = u((r5, Zv) => {
		function nq(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
			return i
		}
		Zv.exports = nq
	});
	var ih = u((n5, nh) => {
		var Jv = $t(),
			iq = Sa(),
			oq = Ne(),
			aq = Hr(),
			sq = 1 / 0,
			eh = Jv ? Jv.prototype : void 0,
			th = eh ? eh.toString : void 0;

		function rh(e) {
			if (typeof e == "string") return e;
			if (oq(e)) return iq(e, rh) + "";
			if (aq(e)) return th ? th.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -sq ? "-0" : t
		}
		nh.exports = rh
	});
	var ah = u((i5, oh) => {
		var uq = ih();

		function cq(e) {
			return e == null ? "" : uq(e)
		}
		oh.exports = cq
	});
	var kr = u((o5, sh) => {
		var lq = Ne(),
			fq = Qn(),
			dq = $v(),
			pq = ah();

		function vq(e, t) {
			return lq(e) ? e : fq(e, t) ? [e] : dq(pq(e))
		}
		sh.exports = vq
	});
	var cr = u((a5, uh) => {
		var hq = Hr(),
			gq = 1 / 0;

		function Eq(e) {
			if (typeof e == "string" || hq(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -gq ? "-0" : t
		}
		uh.exports = Eq
	});
	var $n = u((s5, ch) => {
		var _q = kr(),
			mq = cr();

		function yq(e, t) {
			t = _q(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[mq(t[r++])];
			return r && r == n ? e : void 0
		}
		ch.exports = yq
	});
	var Zn = u((u5, lh) => {
		var Iq = $n();

		function Tq(e, t, r) {
			var n = e == null ? void 0 : Iq(e, t);
			return n === void 0 ? r : n
		}
		lh.exports = Tq
	});
	var dh = u((c5, fh) => {
		function Oq(e, t) {
			return e != null && t in Object(e)
		}
		fh.exports = Oq
	});
	var vh = u((l5, ph) => {
		var bq = kr(),
			Sq = Xr(),
			Aq = Ne(),
			wq = Bn(),
			Rq = Hn(),
			Cq = cr();

		function xq(e, t, r) {
			t = bq(t, e);
			for (var n = -1, i = t.length, o = !1; ++n < i;) {
				var a = Cq(t[n]);
				if (!(o = e != null && r(e, a))) break;
				e = e[a]
			}
			return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && Rq(i) && wq(a, i) && (Aq(e) || Sq(e)))
		}
		ph.exports = xq
	});
	var gh = u((f5, hh) => {
		var Nq = dh(),
			qq = vh();

		function Lq(e, t) {
			return e != null && qq(e, t, Nq)
		}
		hh.exports = Lq
	});
	var _h = u((d5, Eh) => {
		var Pq = Ia(),
			Dq = Zn(),
			Mq = gh(),
			Fq = Qn(),
			Gq = Ta(),
			Xq = Oa(),
			Uq = cr(),
			Vq = 1,
			Wq = 2;

		function Bq(e, t) {
			return Fq(e) && Gq(t) ? Xq(Uq(e), t) : function(r) {
				var n = Dq(r, e);
				return n === void 0 && n === t ? Mq(r, e) : Pq(t, n, Vq | Wq)
			}
		}
		Eh.exports = Bq
	});
	var Jn = u((p5, mh) => {
		function Hq(e) {
			return e
		}
		mh.exports = Hq
	});
	var Aa = u((v5, yh) => {
		function kq(e) {
			return function(t) {
				return t?.[e]
			}
		}
		yh.exports = kq
	});
	var Th = u((h5, Ih) => {
		var jq = $n();

		function Kq(e) {
			return function(t) {
				return jq(t, e)
			}
		}
		Ih.exports = Kq
	});
	var bh = u((g5, Oh) => {
		var zq = Aa(),
			Yq = Th(),
			Qq = Qn(),
			$q = cr();

		function Zq(e) {
			return Qq(e) ? zq($q(e)) : Yq(e)
		}
		Oh.exports = Zq
	});
	var At = u((E5, Sh) => {
		var Jq = Wv(),
			eL = _h(),
			tL = Jn(),
			rL = Ne(),
			nL = bh();

		function iL(e) {
			return typeof e == "function" ? e : e == null ? tL : typeof e == "object" ? rL(e) ? eL(e[0], e[1]) : Jq(e) : nL(e)
		}
		Sh.exports = iL
	});
	var wa = u((_5, Ah) => {
		var oL = At(),
			aL = Mt(),
			sL = Br();

		function uL(e) {
			return function(t, r, n) {
				var i = Object(t);
				if (!aL(t)) {
					var o = oL(r, 3);
					t = sL(t), r = function(s) {
						return o(i[s], s, i)
					}
				}
				var a = e(t, r, n);
				return a > -1 ? i[o ? t[a] : a] : void 0
			}
		}
		Ah.exports = uL
	});
	var Ra = u((m5, wh) => {
		function cL(e, t, r, n) {
			for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
				if (t(e[o], o, e)) return o;
			return -1
		}
		wh.exports = cL
	});
	var Ch = u((y5, Rh) => {
		var lL = /\s/;

		function fL(e) {
			for (var t = e.length; t-- && lL.test(e.charAt(t)););
			return t
		}
		Rh.exports = fL
	});
	var Nh = u((I5, xh) => {
		var dL = Ch(),
			pL = /^\s+/;

		function vL(e) {
			return e && e.slice(0, dL(e) + 1).replace(pL, "")
		}
		xh.exports = vL
	});
	var ei = u((T5, Ph) => {
		var hL = Nh(),
			qh = ft(),
			gL = Hr(),
			Lh = 0 / 0,
			EL = /^[-+]0x[0-9a-f]+$/i,
			_L = /^0b[01]+$/i,
			mL = /^0o[0-7]+$/i,
			yL = parseInt;

		function IL(e) {
			if (typeof e == "number") return e;
			if (gL(e)) return Lh;
			if (qh(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = qh(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = hL(e);
			var r = _L.test(e);
			return r || mL.test(e) ? yL(e.slice(2), r ? 2 : 8) : EL.test(e) ? Lh : +e
		}
		Ph.exports = IL
	});
	var Fh = u((O5, Mh) => {
		var TL = ei(),
			Dh = 1 / 0,
			OL = 17976931348623157e292;

		function bL(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = TL(e), e === Dh || e === -Dh) {
				var t = e < 0 ? -1 : 1;
				return t * OL
			}
			return e === e ? e : 0
		}
		Mh.exports = bL
	});
	var Ca = u((b5, Gh) => {
		var SL = Fh();

		function AL(e) {
			var t = SL(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		Gh.exports = AL
	});
	var Uh = u((S5, Xh) => {
		var wL = Ra(),
			RL = At(),
			CL = Ca(),
			xL = Math.max;

		function NL(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : CL(r);
			return i < 0 && (i = xL(n + i, 0)), wL(e, RL(t, 3), i)
		}
		Xh.exports = NL
	});
	var xa = u((A5, Vh) => {
		var qL = wa(),
			LL = Uh(),
			PL = qL(LL);
		Vh.exports = PL
	});
	var ri = u(Fe => {
		"use strict";
		var DL = ut().default;
		Object.defineProperty(Fe, "__esModule", {
			value: !0
		});
		Fe.withBrowser = Fe.TRANSFORM_STYLE_PREFIXED = Fe.TRANSFORM_PREFIXED = Fe.IS_BROWSER_ENV = Fe.FLEX_PREFIXED = Fe.ELEMENT_MATCHES = void 0;
		var ML = DL(xa()),
			Bh = typeof window < "u";
		Fe.IS_BROWSER_ENV = Bh;
		var ti = (e, t) => Bh ? e() : t;
		Fe.withBrowser = ti;
		var FL = ti(() => (0, ML.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
		Fe.ELEMENT_MATCHES = FL;
		var GL = ti(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i];
					if (e.style.display = o, e.style.display === o) return o
				}
				return r
			} catch {
				return r
			}
		}, "flex");
		Fe.FLEX_PREFIXED = GL;
		var Hh = ti(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i] + r;
					if (e.style[o] !== void 0) return o
				}
			}
			return "transform"
		}, "transform");
		Fe.TRANSFORM_PREFIXED = Hh;
		var Wh = Hh.split("transform")[0],
			XL = Wh ? Wh + "TransformStyle" : "transformStyle";
		Fe.TRANSFORM_STYLE_PREFIXED = XL
	});
	var Na = u((R5, Yh) => {
		var UL = 4,
			VL = .001,
			WL = 1e-7,
			BL = 10,
			jr = 11,
			ni = 1 / (jr - 1),
			HL = typeof Float32Array == "function";

		function kh(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function jh(e, t) {
			return 3 * t - 6 * e
		}

		function Kh(e) {
			return 3 * e
		}

		function ii(e, t, r) {
			return ((kh(t, r) * e + jh(t, r)) * e + Kh(t)) * e
		}

		function zh(e, t, r) {
			return 3 * kh(t, r) * e * e + 2 * jh(t, r) * e + Kh(t)
		}

		function kL(e, t, r, n, i) {
			var o, a, s = 0;
			do a = t + (r - t) / 2, o = ii(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > WL && ++s < BL);
			return a
		}

		function jL(e, t, r, n) {
			for (var i = 0; i < UL; ++i) {
				var o = zh(t, r, n);
				if (o === 0) return t;
				var a = ii(t, r, n) - e;
				t -= a / o
			}
			return t
		}
		Yh.exports = function(t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var o = HL ? new Float32Array(jr) : new Array(jr);
			if (t !== r || n !== i)
				for (var a = 0; a < jr; ++a) o[a] = ii(a * ni, t, n);

			function s(c) {
				for (var d = 0, E = 1, f = jr - 1; E !== f && o[E] <= c; ++E) d += ni;
				--E;
				var _ = (c - o[E]) / (o[E + 1] - o[E]),
					p = d + _ * ni,
					g = zh(p, t, n);
				return g >= VL ? jL(c, p, t, n) : g === 0 ? p : kL(c, d, d + ni, t, n)
			}
			return function(d) {
				return t === r && n === i ? d : d === 0 ? 0 : d === 1 ? 1 : ii(s(d), r, i)
			}
		}
	});
	var qa = u(se => {
		"use strict";
		var KL = ut().default;
		Object.defineProperty(se, "__esModule", {
			value: !0
		});
		se.bounce = CP;
		se.bouncePast = xP;
		se.easeOut = se.easeInOut = se.easeIn = se.ease = void 0;
		se.inBack = yP;
		se.inCirc = gP;
		se.inCubic = tP;
		se.inElastic = OP;
		se.inExpo = pP;
		se.inOutBack = TP;
		se.inOutCirc = _P;
		se.inOutCubic = nP;
		se.inOutElastic = SP;
		se.inOutExpo = hP;
		se.inOutQuad = eP;
		se.inOutQuart = aP;
		se.inOutQuint = cP;
		se.inOutSine = dP;
		se.inQuad = ZL;
		se.inQuart = iP;
		se.inQuint = sP;
		se.inSine = lP;
		se.outBack = IP;
		se.outBounce = mP;
		se.outCirc = EP;
		se.outCubic = rP;
		se.outElastic = bP;
		se.outExpo = vP;
		se.outQuad = JL;
		se.outQuart = oP;
		se.outQuint = uP;
		se.outSine = fP;
		se.swingFrom = wP;
		se.swingFromTo = AP;
		se.swingTo = RP;
		var oi = KL(Na()),
			mt = 1.70158,
			zL = (0, oi.default)(.25, .1, .25, 1);
		se.ease = zL;
		var YL = (0, oi.default)(.42, 0, 1, 1);
		se.easeIn = YL;
		var QL = (0, oi.default)(0, 0, .58, 1);
		se.easeOut = QL;
		var $L = (0, oi.default)(.42, 0, .58, 1);
		se.easeInOut = $L;

		function ZL(e) {
			return Math.pow(e, 2)
		}

		function JL(e) {
			return -(Math.pow(e - 1, 2) - 1)
		}

		function eP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
		}

		function tP(e) {
			return Math.pow(e, 3)
		}

		function rP(e) {
			return Math.pow(e - 1, 3) + 1
		}

		function nP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
		}

		function iP(e) {
			return Math.pow(e, 4)
		}

		function oP(e) {
			return -(Math.pow(e - 1, 4) - 1)
		}

		function aP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
		}

		function sP(e) {
			return Math.pow(e, 5)
		}

		function uP(e) {
			return Math.pow(e - 1, 5) + 1
		}

		function cP(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
		}

		function lP(e) {
			return -Math.cos(e * (Math.PI / 2)) + 1
		}

		function fP(e) {
			return Math.sin(e * (Math.PI / 2))
		}

		function dP(e) {
			return -.5 * (Math.cos(Math.PI * e) - 1)
		}

		function pP(e) {
			return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
		}

		function vP(e) {
			return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
		}

		function hP(e) {
			return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
		}

		function gP(e) {
			return -(Math.sqrt(1 - e * e) - 1)
		}

		function EP(e) {
			return Math.sqrt(1 - Math.pow(e - 1, 2))
		}

		function _P(e) {
			return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
		}

		function mP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function yP(e) {
			let t = mt;
			return e * e * ((t + 1) * e - t)
		}

		function IP(e) {
			let t = mt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function TP(e) {
			let t = mt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function OP(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
		}

		function bP(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
		}

		function SP(e) {
			let t = mt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
		}

		function AP(e) {
			let t = mt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function wP(e) {
			let t = mt;
			return e * e * ((t + 1) * e - t)
		}

		function RP(e) {
			let t = mt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function CP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function xP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
		}
	});
	var Pa = u(Kr => {
		"use strict";
		var NP = ut().default,
			qP = Kt().default;
		Object.defineProperty(Kr, "__esModule", {
			value: !0
		});
		Kr.applyEasing = DP;
		Kr.createBezierEasing = PP;
		Kr.optimizeFloat = La;
		var Qh = qP(qa()),
			LP = NP(Na());

		function La(e, t = 5, r = 10) {
			let n = Math.pow(r, t),
				i = Number(Math.round(e * n) / n);
			return Math.abs(i) > 1e-4 ? i : 0
		}

		function PP(e) {
			return (0, LP.default)(...e)
		}

		function DP(e, t, r) {
			return t === 0 ? 0 : t === 1 ? 1 : La(r ? t > 0 ? r(t) : t : t > 0 && e && Qh[e] ? Qh[e](t) : t)
		}
	});
	var eg = u(lr => {
		"use strict";
		Object.defineProperty(lr, "__esModule", {
			value: !0
		});
		lr.createElementState = Jh;
		lr.ixElements = void 0;
		lr.mergeActionState = Da;
		var ai = tr(),
			Zh = We(),
			{
				HTML_ELEMENT: N5,
				PLAIN_OBJECT: MP,
				ABSTRACT_NODE: q5,
				CONFIG_X_VALUE: FP,
				CONFIG_Y_VALUE: GP,
				CONFIG_Z_VALUE: XP,
				CONFIG_VALUE: UP,
				CONFIG_X_UNIT: VP,
				CONFIG_Y_UNIT: WP,
				CONFIG_Z_UNIT: BP,
				CONFIG_UNIT: HP
			} = Zh.IX2EngineConstants,
			{
				IX2_SESSION_STOPPED: kP,
				IX2_INSTANCE_ADDED: jP,
				IX2_ELEMENT_STATE_CHANGED: KP
			} = Zh.IX2EngineActionTypes,
			$h = {},
			zP = "refState",
			YP = (e = $h, t = {}) => {
				switch (t.type) {
					case kP:
						return $h;
					case jP: {
						let {
							elementId: r,
							element: n,
							origin: i,
							actionItem: o,
							refType: a
						} = t.payload, {
							actionTypeId: s
						} = o, c = e;
						return (0, ai.getIn)(c, [r, n]) !== n && (c = Jh(c, n, a, r, o)), Da(c, r, s, i, o)
					}
					case KP: {
						let {
							elementId: r,
							actionTypeId: n,
							current: i,
							actionItem: o
						} = t.payload;
						return Da(e, r, n, i, o)
					}
					default:
						return e
				}
			};
		lr.ixElements = YP;

		function Jh(e, t, r, n, i) {
			let o = r === MP ? (0, ai.getIn)(i, ["config", "target", "objectId"]) : null;
			return (0, ai.mergeIn)(e, [n], {
				id: n,
				ref: t,
				refId: o,
				refType: r
			})
		}

		function Da(e, t, r, n, i) {
			let o = $P(i),
				a = [t, zP, r];
			return (0, ai.mergeIn)(e, a, n, o)
		}
		var QP = [
			[FP, VP],
			[GP, WP],
			[XP, BP],
			[UP, HP]
		];

		function $P(e) {
			let {
				config: t
			} = e;
			return QP.reduce((r, n) => {
				let i = n[0],
					o = n[1],
					a = t[i],
					s = t[o];
				return a != null && s != null && (r[o] = s), r
			}, {})
		}
	});
	var tg = u(qe => {
		"use strict";
		Object.defineProperty(qe, "__esModule", {
			value: !0
		});
		qe.renderPlugin = qe.getPluginOrigin = qe.getPluginDuration = qe.getPluginDestination = qe.getPluginConfig = qe.createPluginInstance = qe.clearPlugin = void 0;
		var ZP = e => e.value;
		qe.getPluginConfig = ZP;
		var JP = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		qe.getPluginDuration = JP;
		var eD = e => e || {
			value: 0
		};
		qe.getPluginOrigin = eD;
		var tD = e => ({
			value: e.value
		});
		qe.getPluginDestination = tD;
		var rD = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		qe.createPluginInstance = rD;
		var nD = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		qe.renderPlugin = nD;
		var iD = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		qe.clearPlugin = iD
	});
	var Ma = u(Ce => {
		"use strict";
		Object.defineProperty(Ce, "__esModule", {
			value: !0
		});
		Ce.getPluginOrigin = Ce.getPluginDuration = Ce.getPluginDestination = Ce.getPluginConfig = Ce.createPluginInstance = Ce.clearPlugin = void 0;
		Ce.isPluginType = sD;
		Ce.renderPlugin = void 0;
		var Gt = tg(),
			rg = We(),
			oD = ri(),
			aD = {
				[rg.ActionTypeConsts.PLUGIN_LOTTIE]: {
					getConfig: Gt.getPluginConfig,
					getOrigin: Gt.getPluginOrigin,
					getDuration: Gt.getPluginDuration,
					getDestination: Gt.getPluginDestination,
					createInstance: Gt.createPluginInstance,
					render: Gt.renderPlugin,
					clear: Gt.clearPlugin
				}
			};

		function sD(e) {
			return e === rg.ActionTypeConsts.PLUGIN_LOTTIE
		}
		var Xt = e => t => {
				if (!oD.IS_BROWSER_ENV) return () => null;
				let r = aD[t];
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
				let n = r[e];
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
				return n
			},
			uD = Xt("getConfig");
		Ce.getPluginConfig = uD;
		var cD = Xt("getOrigin");
		Ce.getPluginOrigin = cD;
		var lD = Xt("getDuration");
		Ce.getPluginDuration = lD;
		var fD = Xt("getDestination");
		Ce.getPluginDestination = fD;
		var dD = Xt("createInstance");
		Ce.createPluginInstance = dD;
		var pD = Xt("render");
		Ce.renderPlugin = pD;
		var vD = Xt("clear");
		Ce.clearPlugin = vD
	});
	var ig = u((M5, ng) => {
		function hD(e, t) {
			return e == null || e !== e ? t : e
		}
		ng.exports = hD
	});
	var ag = u((F5, og) => {
		function gD(e, t, r, n) {
			var i = -1,
				o = e == null ? 0 : e.length;
			for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
			return r
		}
		og.exports = gD
	});
	var ug = u((G5, sg) => {
		function ED(e) {
			return function(t, r, n) {
				for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
					var c = a[e ? s : ++i];
					if (r(o[c], c, o) === !1) break
				}
				return t
			}
		}
		sg.exports = ED
	});
	var lg = u((X5, cg) => {
		var _D = ug(),
			mD = _D();
		cg.exports = mD
	});
	var Fa = u((U5, fg) => {
		var yD = lg(),
			ID = Br();

		function TD(e, t) {
			return e && yD(e, t, ID)
		}
		fg.exports = TD
	});
	var pg = u((V5, dg) => {
		var OD = Mt();

		function bD(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!OD(r)) return e(r, n);
				for (var i = r.length, o = t ? i : -1, a = Object(r);
					(t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
				return r
			}
		}
		dg.exports = bD
	});
	var Ga = u((W5, vg) => {
		var SD = Fa(),
			AD = pg(),
			wD = AD(SD);
		vg.exports = wD
	});
	var gg = u((B5, hg) => {
		function RD(e, t, r, n, i) {
			return i(e, function(o, a, s) {
				r = n ? (n = !1, o) : t(r, o, a, s)
			}), r
		}
		hg.exports = RD
	});
	var _g = u((H5, Eg) => {
		var CD = ag(),
			xD = Ga(),
			ND = At(),
			qD = gg(),
			LD = Ne();

		function PD(e, t, r) {
			var n = LD(e) ? CD : qD,
				i = arguments.length < 3;
			return n(e, ND(t, 4), r, i, xD)
		}
		Eg.exports = PD
	});
	var yg = u((k5, mg) => {
		var DD = Ra(),
			MD = At(),
			FD = Ca(),
			GD = Math.max,
			XD = Math.min;

		function UD(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && (i = FD(r), i = r < 0 ? GD(n + i, 0) : XD(i, n - 1)), DD(e, MD(t, 3), i, !0)
		}
		mg.exports = UD
	});
	var Tg = u((j5, Ig) => {
		var VD = wa(),
			WD = yg(),
			BD = VD(WD);
		Ig.exports = BD
	});
	var bg = u(si => {
		"use strict";
		Object.defineProperty(si, "__esModule", {
			value: !0
		});
		si.default = void 0;
		var HD = Object.prototype.hasOwnProperty;

		function Og(e, t) {
			return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
		}

		function kD(e, t) {
			if (Og(e, t)) return !0;
			if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
			let r = Object.keys(e),
				n = Object.keys(t);
			if (r.length !== n.length) return !1;
			for (let i = 0; i < r.length; i++)
				if (!HD.call(t, r[i]) || !Og(e[r[i]], t[r[i]])) return !1;
			return !0
		}
		var jD = kD;
		si.default = jD
	});
	var kg = u(_e => {
		"use strict";
		var li = ut().default;
		Object.defineProperty(_e, "__esModule", {
			value: !0
		});
		_e.cleanupHTMLElement = BM;
		_e.clearAllStyles = WM;
		_e.getActionListProgress = kM;
		_e.getAffectedElements = Ha;
		_e.getComputedStyle = EM;
		_e.getDestinationValues = bM;
		_e.getElementId = pM;
		_e.getInstanceId = fM;
		_e.getInstanceOrigin = yM;
		_e.getItemConfigByKey = void 0;
		_e.getMaxDurationItemIndex = Hg;
		_e.getNamespacedParameterId = zM;
		_e.getRenderType = Vg;
		_e.getStyleProp = SM;
		_e.mediaQueriesEqual = QM;
		_e.observeStore = gM;
		_e.reduceListToGroup = jM;
		_e.reifyState = vM;
		_e.renderHTMLElement = AM;
		Object.defineProperty(_e, "shallowEqual", {
			enumerable: !0,
			get: function() {
				return Pg.default
			}
		});
		_e.shouldAllowMediaQuery = YM;
		_e.shouldNamespaceEventParameter = KM;
		_e.stringifyTarget = $M;
		var wt = li(ig()),
			Ua = li(_g()),
			Xa = li(Tg()),
			Sg = tr(),
			Ut = We(),
			Pg = li(bg()),
			KD = Pa(),
			vt = Ma(),
			Ge = ri(),
			{
				BACKGROUND: zD,
				TRANSFORM: YD,
				TRANSLATE_3D: QD,
				SCALE_3D: $D,
				ROTATE_X: ZD,
				ROTATE_Y: JD,
				ROTATE_Z: eM,
				SKEW: tM,
				PRESERVE_3D: rM,
				FLEX: nM,
				OPACITY: ui,
				FILTER: zr,
				FONT_VARIATION_SETTINGS: Yr,
				WIDTH: dt,
				HEIGHT: pt,
				BACKGROUND_COLOR: Dg,
				BORDER_COLOR: iM,
				COLOR: oM,
				CHILDREN: Ag,
				IMMEDIATE_CHILDREN: aM,
				SIBLINGS: wg,
				PARENT: sM,
				DISPLAY: ci,
				WILL_CHANGE: fr,
				AUTO: Rt,
				COMMA_DELIMITER: Qr,
				COLON_DELIMITER: uM,
				BAR_DELIMITER: Rg,
				RENDER_TRANSFORM: Mg,
				RENDER_GENERAL: Va,
				RENDER_STYLE: Wa,
				RENDER_PLUGIN: Fg
			} = Ut.IX2EngineConstants,
			{
				TRANSFORM_MOVE: dr,
				TRANSFORM_SCALE: pr,
				TRANSFORM_ROTATE: vr,
				TRANSFORM_SKEW: $r,
				STYLE_OPACITY: Gg,
				STYLE_FILTER: Zr,
				STYLE_FONT_VARIATION: Jr,
				STYLE_SIZE: hr,
				STYLE_BACKGROUND_COLOR: gr,
				STYLE_BORDER: Er,
				STYLE_TEXT_COLOR: _r,
				GENERAL_DISPLAY: fi
			} = Ut.ActionTypeConsts,
			cM = "OBJECT_VALUE",
			Xg = e => e.trim(),
			Ba = Object.freeze({
				[gr]: Dg,
				[Er]: iM,
				[_r]: oM
			}),
			Ug = Object.freeze({
				[Ge.TRANSFORM_PREFIXED]: YD,
				[Dg]: zD,
				[ui]: ui,
				[zr]: zr,
				[dt]: dt,
				[pt]: pt,
				[Yr]: Yr
			}),
			Cg = {},
			lM = 1;

		function fM() {
			return "i" + lM++
		}
		var dM = 1;

		function pM(e, t) {
			for (let r in e) {
				let n = e[r];
				if (n && n.ref === t) return n.id
			}
			return "e" + dM++
		}

		function vM({
			events: e,
			actionLists: t,
			site: r
		} = {}) {
			let n = (0, Ua.default)(e, (a, s) => {
					let {
						eventTypeId: c
					} = s;
					return a[c] || (a[c] = {}), a[c][s.id] = s, a
				}, {}),
				i = r && r.mediaQueries,
				o = [];
			return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
				ixData: {
					events: e,
					actionLists: t,
					eventTypeMap: n,
					mediaQueries: i,
					mediaQueryKeys: o
				}
			}
		}
		var hM = (e, t) => e === t;

		function gM({
			store: e,
			select: t,
			onChange: r,
			comparator: n = hM
		}) {
			let {
				getState: i,
				subscribe: o
			} = e, a = o(c), s = t(i());

			function c() {
				let d = t(i());
				if (d == null) {
					a();
					return
				}
				n(d, s) || (s = d, r(s, e))
			}
			return a
		}

		function xg(e) {
			let t = typeof e;
			if (t === "string") return {
				id: e
			};
			if (e != null && t === "object") {
				let {
					id: r,
					objectId: n,
					selector: i,
					selectorGuids: o,
					appliesTo: a,
					useEventTarget: s
				} = e;
				return {
					id: r,
					objectId: n,
					selector: i,
					selectorGuids: o,
					appliesTo: a,
					useEventTarget: s
				}
			}
			return {}
		}

		function Ha({
			config: e,
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: i
		}) {
			var o, a, s;
			if (!i) throw new Error("IX2 missing elementApi");
			let {
				targets: c
			} = e;
			if (Array.isArray(c) && c.length > 0) return c.reduce((F, G) => F.concat(Ha({
				config: {
					target: G
				},
				event: t,
				eventTarget: r,
				elementRoot: n,
				elementApi: i
			})), []);
			let {
				getValidDocument: d,
				getQuerySelector: E,
				queryDocument: f,
				getChildElements: _,
				getSiblingElements: p,
				matchSelector: g,
				elementContains: O,
				isSiblingNode: R
			} = i, {
				target: A
			} = e;
			if (!A) return [];
			let {
				id: x,
				objectId: S,
				selector: L,
				selectorGuids: q,
				appliesTo: P,
				useEventTarget: V
			} = xg(A);
			if (S) return [Cg[S] || (Cg[S] = {})];
			if (P === Ut.EventAppliesTo.PAGE) {
				let F = d(x);
				return F ? [F] : []
			}
			let Q = ((o = t == null || (a = t.action) === null || a === void 0 || (s = a.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && o !== void 0 ? o : {})[x || L] || {},
				oe = !!(Q.id || Q.selector),
				re, X, I, D = t && E(xg(t.target));
			if (oe ? (re = Q.limitAffectedElements, X = D, I = E(Q)) : X = I = E({
					id: x,
					selector: L,
					selectorGuids: q
				}), t && V) {
				let F = r && (I || V === !0) ? [r] : f(D);
				if (I) {
					if (V === sM) return f(I).filter(G => F.some($ => O(G, $)));
					if (V === Ag) return f(I).filter(G => F.some($ => O($, G)));
					if (V === wg) return f(I).filter(G => F.some($ => R($, G)))
				}
				return F
			}
			return X == null || I == null ? [] : Ge.IS_BROWSER_ENV && n ? f(I).filter(F => n.contains(F)) : re === Ag ? f(X, I) : re === aM ? _(f(X)).filter(g(I)) : re === wg ? p(f(X)).filter(g(I)) : f(I)
		}

		function EM({
			element: e,
			actionItem: t
		}) {
			if (!Ge.IS_BROWSER_ENV) return {};
			let {
				actionTypeId: r
			} = t;
			switch (r) {
				case hr:
				case gr:
				case Er:
				case _r:
				case fi:
					return window.getComputedStyle(e);
				default:
					return {}
			}
		}
		var Ng = /px/,
			_M = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = wM[n.type]), r), e || {}),
			mM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = RM[n.type] || n.defaultValue || 0), r), e || {});

		function yM(e, t = {}, r = {}, n, i) {
			let {
				getStyle: o
			} = i, {
				actionTypeId: a
			} = n;
			if ((0, vt.isPluginType)(a)) return (0, vt.getPluginOrigin)(a)(t[a]);
			switch (n.actionTypeId) {
				case dr:
				case pr:
				case vr:
				case $r:
					return t[n.actionTypeId] || ka[n.actionTypeId];
				case Zr:
					return _M(t[n.actionTypeId], n.config.filters);
				case Jr:
					return mM(t[n.actionTypeId], n.config.fontVariations);
				case Gg:
					return {
						value: (0, wt.default)(parseFloat(o(e, ui)), 1)
					};
				case hr: {
					let s = o(e, dt),
						c = o(e, pt),
						d, E;
					return n.config.widthUnit === Rt ? d = Ng.test(s) ? parseFloat(s) : parseFloat(r.width) : d = (0, wt.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === Rt ? E = Ng.test(c) ? parseFloat(c) : parseFloat(r.height) : E = (0, wt.default)(parseFloat(c), parseFloat(r.height)), {
						widthValue: d,
						heightValue: E
					}
				}
				case gr:
				case Er:
				case _r:
					return XM({
						element: e,
						actionTypeId: n.actionTypeId,
						computedStyle: r,
						getStyle: o
					});
				case fi:
					return {
						value: (0, wt.default)(o(e, ci), r.display)
					};
				case cM:
					return t[n.actionTypeId] || {
						value: 0
					};
				default:
					return
			}
		}
		var IM = (e, t) => (t && (e[t.type] = t.value || 0), e),
			TM = (e, t) => (t && (e[t.type] = t.value || 0), e),
			OM = (e, t, r) => {
				if ((0, vt.isPluginType)(e)) return (0, vt.getPluginConfig)(e)(r, t);
				switch (e) {
					case Zr: {
						let n = (0, Xa.default)(r.filters, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
					case Jr: {
						let n = (0, Xa.default)(r.fontVariations, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
					default:
						return r[t]
				}
			};
		_e.getItemConfigByKey = OM;

		function bM({
			element: e,
			actionItem: t,
			elementApi: r
		}) {
			if ((0, vt.isPluginType)(t.actionTypeId)) return (0, vt.getPluginDestination)(t.actionTypeId)(t.config);
			switch (t.actionTypeId) {
				case dr:
				case pr:
				case vr:
				case $r: {
					let {
						xValue: n,
						yValue: i,
						zValue: o
					} = t.config;
					return {
						xValue: n,
						yValue: i,
						zValue: o
					}
				}
				case hr: {
					let {
						getStyle: n,
						setStyle: i,
						getProperty: o
					} = r, {
						widthUnit: a,
						heightUnit: s
					} = t.config, {
						widthValue: c,
						heightValue: d
					} = t.config;
					if (!Ge.IS_BROWSER_ENV) return {
						widthValue: c,
						heightValue: d
					};
					if (a === Rt) {
						let E = n(e, dt);
						i(e, dt, ""), c = o(e, "offsetWidth"), i(e, dt, E)
					}
					if (s === Rt) {
						let E = n(e, pt);
						i(e, pt, ""), d = o(e, "offsetHeight"), i(e, pt, E)
					}
					return {
						widthValue: c,
						heightValue: d
					}
				}
				case gr:
				case Er:
				case _r: {
					let {
						rValue: n,
						gValue: i,
						bValue: o,
						aValue: a
					} = t.config;
					return {
						rValue: n,
						gValue: i,
						bValue: o,
						aValue: a
					}
				}
				case Zr:
					return t.config.filters.reduce(IM, {});
				case Jr:
					return t.config.fontVariations.reduce(TM, {});
				default: {
					let {
						value: n
					} = t.config;
					return {
						value: n
					}
				}
			}
		}

		function Vg(e) {
			if (/^TRANSFORM_/.test(e)) return Mg;
			if (/^STYLE_/.test(e)) return Wa;
			if (/^GENERAL_/.test(e)) return Va;
			if (/^PLUGIN_/.test(e)) return Fg
		}

		function SM(e, t) {
			return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null
		}

		function AM(e, t, r, n, i, o, a, s, c) {
			switch (s) {
				case Mg:
					return NM(e, t, r, i, a);
				case Wa:
					return UM(e, t, r, i, o, a);
				case Va:
					return VM(e, i, a);
				case Fg: {
					let {
						actionTypeId: d
					} = i;
					if ((0, vt.isPluginType)(d)) return (0, vt.renderPlugin)(d)(c, t, i)
				}
			}
		}
		var ka = {
				[dr]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[pr]: Object.freeze({
					xValue: 1,
					yValue: 1,
					zValue: 1
				}),
				[vr]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[$r]: Object.freeze({
					xValue: 0,
					yValue: 0
				})
			},
			wM = Object.freeze({
				blur: 0,
				"hue-rotate": 0,
				invert: 0,
				grayscale: 0,
				saturate: 100,
				sepia: 0,
				contrast: 100,
				brightness: 100
			}),
			RM = Object.freeze({
				wght: 0,
				opsz: 0,
				wdth: 0,
				slnt: 0
			}),
			CM = (e, t) => {
				let r = (0, Xa.default)(t.filters, ({
					type: n
				}) => n === e);
				if (r && r.unit) return r.unit;
				switch (e) {
					case "blur":
						return "px";
					case "hue-rotate":
						return "deg";
					default:
						return "%"
				}
			},
			xM = Object.keys(ka);

		function NM(e, t, r, n, i) {
			let o = xM.map(s => {
					let c = ka[s],
						{
							xValue: d = c.xValue,
							yValue: E = c.yValue,
							zValue: f = c.zValue,
							xUnit: _ = "",
							yUnit: p = "",
							zUnit: g = ""
						} = t[s] || {};
					switch (s) {
						case dr:
							return `${QD}(${d}${_}, ${E}${p}, ${f}${g})`;
						case pr:
							return `${$D}(${d}${_}, ${E}${p}, ${f}${g})`;
						case vr:
							return `${ZD}(${d}${_}) ${JD}(${E}${p}) ${eM}(${f}${g})`;
						case $r:
							return `${tM}(${d}${_}, ${E}${p})`;
						default:
							return ""
					}
				}).join(" "),
				{
					setStyle: a
				} = i;
			Vt(e, Ge.TRANSFORM_PREFIXED, i), a(e, Ge.TRANSFORM_PREFIXED, o), PM(n, r) && a(e, Ge.TRANSFORM_STYLE_PREFIXED, rM)
		}

		function qM(e, t, r, n) {
			let i = (0, Ua.default)(t, (a, s, c) => `${a} ${c}(${s}${CM(c,r)})`, ""),
				{
					setStyle: o
				} = n;
			Vt(e, zr, n), o(e, zr, i)
		}

		function LM(e, t, r, n) {
			let i = (0, Ua.default)(t, (a, s, c) => (a.push(`"${c}" ${s}`), a), []).join(", "),
				{
					setStyle: o
				} = n;
			Vt(e, Yr, n), o(e, Yr, i)
		}

		function PM({
			actionTypeId: e
		}, {
			xValue: t,
			yValue: r,
			zValue: n
		}) {
			return e === dr && n !== void 0 || e === pr && n !== void 0 || e === vr && (t !== void 0 || r !== void 0)
		}
		var DM = "\\(([^)]+)\\)",
			MM = /^rgb/,
			FM = RegExp(`rgba?${DM}`);

		function GM(e, t) {
			let r = e.exec(t);
			return r ? r[1] : ""
		}

		function XM({
			element: e,
			actionTypeId: t,
			computedStyle: r,
			getStyle: n
		}) {
			let i = Ba[t],
				o = n(e, i),
				a = MM.test(o) ? o : r[i],
				s = GM(FM, a).split(Qr);
			return {
				rValue: (0, wt.default)(parseInt(s[0], 10), 255),
				gValue: (0, wt.default)(parseInt(s[1], 10), 255),
				bValue: (0, wt.default)(parseInt(s[2], 10), 255),
				aValue: (0, wt.default)(parseFloat(s[3]), 1)
			}
		}

		function UM(e, t, r, n, i, o) {
			let {
				setStyle: a
			} = o;
			switch (n.actionTypeId) {
				case hr: {
					let {
						widthUnit: s = "",
						heightUnit: c = ""
					} = n.config, {
						widthValue: d,
						heightValue: E
					} = r;
					d !== void 0 && (s === Rt && (s = "px"), Vt(e, dt, o), a(e, dt, d + s)), E !== void 0 && (c === Rt && (c = "px"), Vt(e, pt, o), a(e, pt, E + c));
					break
				}
				case Zr: {
					qM(e, r, n.config, o);
					break
				}
				case Jr: {
					LM(e, r, n.config, o);
					break
				}
				case gr:
				case Er:
				case _r: {
					let s = Ba[n.actionTypeId],
						c = Math.round(r.rValue),
						d = Math.round(r.gValue),
						E = Math.round(r.bValue),
						f = r.aValue;
					Vt(e, s, o), a(e, s, f >= 1 ? `rgb(${c},${d},${E})` : `rgba(${c},${d},${E},${f})`);
					break
				}
				default: {
					let {
						unit: s = ""
					} = n.config;
					Vt(e, i, o), a(e, i, r.value + s);
					break
				}
			}
		}

		function VM(e, t, r) {
			let {
				setStyle: n
			} = r;
			switch (t.actionTypeId) {
				case fi: {
					let {
						value: i
					} = t.config;
					i === nM && Ge.IS_BROWSER_ENV ? n(e, ci, Ge.FLEX_PREFIXED) : n(e, ci, i);
					return
				}
			}
		}

		function Vt(e, t, r) {
			if (!Ge.IS_BROWSER_ENV) return;
			let n = Ug[t];
			if (!n) return;
			let {
				getStyle: i,
				setStyle: o
			} = r, a = i(e, fr);
			if (!a) {
				o(e, fr, n);
				return
			}
			let s = a.split(Qr).map(Xg);
			s.indexOf(n) === -1 && o(e, fr, s.concat(n).join(Qr))
		}

		function Wg(e, t, r) {
			if (!Ge.IS_BROWSER_ENV) return;
			let n = Ug[t];
			if (!n) return;
			let {
				getStyle: i,
				setStyle: o
			} = r, a = i(e, fr);
			!a || a.indexOf(n) === -1 || o(e, fr, a.split(Qr).map(Xg).filter(s => s !== n).join(Qr))
		}

		function WM({
			store: e,
			elementApi: t
		}) {
			let {
				ixData: r
			} = e.getState(), {
				events: n = {},
				actionLists: i = {}
			} = r;
			Object.keys(n).forEach(o => {
				let a = n[o],
					{
						config: s
					} = a.action,
					{
						actionListId: c
					} = s,
					d = i[c];
				d && qg({
					actionList: d,
					event: a,
					elementApi: t
				})
			}), Object.keys(i).forEach(o => {
				qg({
					actionList: i[o],
					elementApi: t
				})
			})
		}

		function qg({
			actionList: e = {},
			event: t,
			elementApi: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: i
			} = e;
			n && n.forEach(o => {
				Lg({
					actionGroup: o,
					event: t,
					elementApi: r
				})
			}), i && i.forEach(o => {
				let {
					continuousActionGroups: a
				} = o;
				a.forEach(s => {
					Lg({
						actionGroup: s,
						event: t,
						elementApi: r
					})
				})
			})
		}

		function Lg({
			actionGroup: e,
			event: t,
			elementApi: r
		}) {
			let {
				actionItems: n
			} = e;
			n.forEach(({
				actionTypeId: i,
				config: o
			}) => {
				let a;
				(0, vt.isPluginType)(i) ? a = (0, vt.clearPlugin)(i): a = Bg({
					effect: HM,
					actionTypeId: i,
					elementApi: r
				}), Ha({
					config: o,
					event: t,
					elementApi: r
				}).forEach(a)
			})
		}

		function BM(e, t, r) {
			let {
				setStyle: n,
				getStyle: i
			} = r, {
				actionTypeId: o
			} = t;
			if (o === hr) {
				let {
					config: a
				} = t;
				a.widthUnit === Rt && n(e, dt, ""), a.heightUnit === Rt && n(e, pt, "")
			}
			i(e, fr) && Bg({
				effect: Wg,
				actionTypeId: o,
				elementApi: r
			})(e)
		}
		var Bg = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case dr:
				case pr:
				case vr:
				case $r:
					e(n, Ge.TRANSFORM_PREFIXED, r);
					break;
				case Zr:
					e(n, zr, r);
					break;
				case Jr:
					e(n, Yr, r);
					break;
				case Gg:
					e(n, ui, r);
					break;
				case hr:
					e(n, dt, r), e(n, pt, r);
					break;
				case gr:
				case Er:
				case _r:
					e(n, Ba[t], r);
					break;
				case fi:
					e(n, ci, r);
					break
			}
		};

		function HM(e, t, r) {
			let {
				setStyle: n
			} = r;
			Wg(e, t, r), n(e, t, ""), t === Ge.TRANSFORM_PREFIXED && n(e, Ge.TRANSFORM_STYLE_PREFIXED, "")
		}

		function Hg(e) {
			let t = 0,
				r = 0;
			return e.forEach((n, i) => {
				let {
					config: o
				} = n, a = o.delay + o.duration;
				a >= t && (t = a, r = i)
			}), r
		}

		function kM(e, t) {
			let {
				actionItemGroups: r,
				useFirstGroupAsInitialState: n
			} = e, {
				actionItem: i,
				verboseTimeElapsed: o = 0
			} = t, a = 0, s = 0;
			return r.forEach((c, d) => {
				if (n && d === 0) return;
				let {
					actionItems: E
				} = c, f = E[Hg(E)], {
					config: _,
					actionTypeId: p
				} = f;
				i.id === f.id && (s = a + o);
				let g = Vg(p) === Va ? 0 : _.duration;
				a += _.delay + g
			}), a > 0 ? (0, KD.optimizeFloat)(s / a) : 0
		}

		function jM({
			actionList: e,
			actionItemId: t,
			rawData: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: i
			} = e, o = [], a = s => (o.push((0, Sg.mergeIn)(s, ["config"], {
				delay: 0,
				duration: 0
			})), s.id === t);
			return n && n.some(({
				actionItems: s
			}) => s.some(a)), i && i.some(s => {
				let {
					continuousActionGroups: c
				} = s;
				return c.some(({
					actionItems: d
				}) => d.some(a))
			}), (0, Sg.setIn)(r, ["actionLists"], {
				[e.id]: {
					id: e.id,
					actionItemGroups: [{
						actionItems: o
					}]
				}
			})
		}

		function KM(e, {
			basedOn: t
		}) {
			return e === Ut.EventTypeConsts.SCROLLING_IN_VIEW && (t === Ut.EventBasedOn.ELEMENT || t == null) || e === Ut.EventTypeConsts.MOUSE_MOVE && t === Ut.EventBasedOn.ELEMENT
		}

		function zM(e, t) {
			return e + uM + t
		}

		function YM(e, t) {
			return t == null ? !0 : e.indexOf(t) !== -1
		}

		function QM(e, t) {
			return (0, Pg.default)(e && e.sort(), t && t.sort())
		}

		function $M(e) {
			if (typeof e == "string") return e;
			let {
				id: t = "",
				selector: r = "",
				useEventTarget: n = ""
			} = e;
			return t + Rg + r + Rg + n
		}
	});
	var Wt = u(Xe => {
		"use strict";
		var mr = Kt().default;
		Object.defineProperty(Xe, "__esModule", {
			value: !0
		});
		Xe.IX2VanillaUtils = Xe.IX2VanillaPlugins = Xe.IX2ElementsReducer = Xe.IX2Easings = Xe.IX2EasingUtils = Xe.IX2BrowserSupport = void 0;
		var ZM = mr(ri());
		Xe.IX2BrowserSupport = ZM;
		var JM = mr(qa());
		Xe.IX2Easings = JM;
		var e1 = mr(Pa());
		Xe.IX2EasingUtils = e1;
		var t1 = mr(eg());
		Xe.IX2ElementsReducer = t1;
		var r1 = mr(Ma());
		Xe.IX2VanillaPlugins = r1;
		var n1 = mr(kg());
		Xe.IX2VanillaUtils = n1
	});
	var Yg = u(pi => {
		"use strict";
		Object.defineProperty(pi, "__esModule", {
			value: !0
		});
		pi.ixInstances = void 0;
		var jg = We(),
			Kg = Wt(),
			yr = tr(),
			{
				IX2_RAW_DATA_IMPORTED: i1,
				IX2_SESSION_STOPPED: o1,
				IX2_INSTANCE_ADDED: a1,
				IX2_INSTANCE_STARTED: s1,
				IX2_INSTANCE_REMOVED: u1,
				IX2_ANIMATION_FRAME_CHANGED: c1
			} = jg.IX2EngineActionTypes,
			{
				optimizeFloat: di,
				applyEasing: zg,
				createBezierEasing: l1
			} = Kg.IX2EasingUtils,
			{
				RENDER_GENERAL: f1
			} = jg.IX2EngineConstants,
			{
				getItemConfigByKey: ja,
				getRenderType: d1,
				getStyleProp: p1
			} = Kg.IX2VanillaUtils,
			v1 = (e, t) => {
				let {
					position: r,
					parameterId: n,
					actionGroups: i,
					destinationKeys: o,
					smoothing: a,
					restingValue: s,
					actionTypeId: c,
					customEasingFn: d,
					skipMotion: E,
					skipToValue: f
				} = e, {
					parameters: _
				} = t.payload, p = Math.max(1 - a, .01), g = _[n];
				g == null && (p = 1, g = s);
				let O = Math.max(g, 0) || 0,
					R = di(O - r),
					A = E ? f : di(r + R * p),
					x = A * 100;
				if (A === r && e.current) return e;
				let S, L, q, P;
				for (let j = 0, {
						length: Q
					} = i; j < Q; j++) {
					let {
						keyframe: oe,
						actionItems: re
					} = i[j];
					if (j === 0 && (S = re[0]), x >= oe) {
						S = re[0];
						let X = i[j + 1],
							I = X && x !== oe;
						L = I ? X.actionItems[0] : null, I && (q = oe / 100, P = (X.keyframe - oe) / 100)
					}
				}
				let V = {};
				if (S && !L)
					for (let j = 0, {
							length: Q
						} = o; j < Q; j++) {
						let oe = o[j];
						V[oe] = ja(c, oe, S.config)
					} else if (S && L && q !== void 0 && P !== void 0) {
						let j = (A - q) / P,
							Q = S.config.easing,
							oe = zg(Q, j, d);
						for (let re = 0, {
								length: X
							} = o; re < X; re++) {
							let I = o[re],
								D = ja(c, I, S.config),
								$ = (ja(c, I, L.config) - D) * oe + D;
							V[I] = $
						}
					} return (0, yr.merge)(e, {
					position: A,
					current: V
				})
			},
			h1 = (e, t) => {
				let {
					active: r,
					origin: n,
					start: i,
					immediate: o,
					renderType: a,
					verbose: s,
					actionItem: c,
					destination: d,
					destinationKeys: E,
					pluginDuration: f,
					instanceDelay: _,
					customEasingFn: p,
					skipMotion: g
				} = e, O = c.config.easing, {
					duration: R,
					delay: A
				} = c.config;
				f != null && (R = f), A = _ ?? A, a === f1 ? R = 0 : (o || g) && (R = A = 0);
				let {
					now: x
				} = t.payload;
				if (r && n) {
					let S = x - (i + A);
					if (s) {
						let j = x - i,
							Q = R + A,
							oe = di(Math.min(Math.max(0, j / Q), 1));
						e = (0, yr.set)(e, "verboseTimeElapsed", Q * oe)
					}
					if (S < 0) return e;
					let L = di(Math.min(Math.max(0, S / R), 1)),
						q = zg(O, L, p),
						P = {},
						V = null;
					return E.length && (V = E.reduce((j, Q) => {
						let oe = d[Q],
							re = parseFloat(n[Q]) || 0,
							I = (parseFloat(oe) - re) * q + re;
						return j[Q] = I, j
					}, {})), P.current = V, P.position = L, L === 1 && (P.active = !1, P.complete = !0), (0, yr.merge)(e, P)
				}
				return e
			},
			g1 = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case i1:
						return t.payload.ixInstances || Object.freeze({});
					case o1:
						return Object.freeze({});
					case a1: {
						let {
							instanceId: r,
							elementId: n,
							actionItem: i,
							eventId: o,
							eventTarget: a,
							eventStateKey: s,
							actionListId: c,
							groupIndex: d,
							isCarrier: E,
							origin: f,
							destination: _,
							immediate: p,
							verbose: g,
							continuous: O,
							parameterId: R,
							actionGroups: A,
							smoothing: x,
							restingValue: S,
							pluginInstance: L,
							pluginDuration: q,
							instanceDelay: P,
							skipMotion: V,
							skipToValue: j
						} = t.payload, {
							actionTypeId: Q
						} = i, oe = d1(Q), re = p1(oe, Q), X = Object.keys(_).filter(D => _[D] != null), {
							easing: I
						} = i.config;
						return (0, yr.set)(e, r, {
							id: r,
							elementId: n,
							active: !1,
							position: 0,
							start: 0,
							origin: f,
							destination: _,
							destinationKeys: X,
							immediate: p,
							verbose: g,
							current: null,
							actionItem: i,
							actionTypeId: Q,
							eventId: o,
							eventTarget: a,
							eventStateKey: s,
							actionListId: c,
							groupIndex: d,
							renderType: oe,
							isCarrier: E,
							styleProp: re,
							continuous: O,
							parameterId: R,
							actionGroups: A,
							smoothing: x,
							restingValue: S,
							pluginInstance: L,
							pluginDuration: q,
							instanceDelay: P,
							skipMotion: V,
							skipToValue: j,
							customEasingFn: Array.isArray(I) && I.length === 4 ? l1(I) : void 0
						})
					}
					case s1: {
						let {
							instanceId: r,
							time: n
						} = t.payload;
						return (0, yr.mergeIn)(e, [r], {
							active: !0,
							complete: !1,
							start: n
						})
					}
					case u1: {
						let {
							instanceId: r
						} = t.payload;
						if (!e[r]) return e;
						let n = {},
							i = Object.keys(e),
							{
								length: o
							} = i;
						for (let a = 0; a < o; a++) {
							let s = i[a];
							s !== r && (n[s] = e[s])
						}
						return n
					}
					case c1: {
						let r = e,
							n = Object.keys(e),
							{
								length: i
							} = n;
						for (let o = 0; o < i; o++) {
							let a = n[o],
								s = e[a],
								c = s.continuous ? v1 : h1;
							r = (0, yr.set)(r, a, c(s, t))
						}
						return r
					}
					default:
						return e
				}
			};
		pi.ixInstances = g1
	});
	var Qg = u(vi => {
		"use strict";
		Object.defineProperty(vi, "__esModule", {
			value: !0
		});
		vi.ixParameters = void 0;
		var E1 = We(),
			{
				IX2_RAW_DATA_IMPORTED: _1,
				IX2_SESSION_STOPPED: m1,
				IX2_PARAMETER_CHANGED: y1
			} = E1.IX2EngineActionTypes,
			I1 = (e = {}, t) => {
				switch (t.type) {
					case _1:
						return t.payload.ixParameters || {};
					case m1:
						return {};
					case y1: {
						let {
							key: r,
							value: n
						} = t.payload;
						return e[r] = n, e
					}
					default:
						return e
				}
			};
		vi.ixParameters = I1
	});
	var $g = u(hi => {
		"use strict";
		Object.defineProperty(hi, "__esModule", {
			value: !0
		});
		hi.default = void 0;
		var T1 = Yo(),
			O1 = _f(),
			b1 = Ff(),
			S1 = Xf(),
			A1 = Wt(),
			w1 = Yg(),
			R1 = Qg(),
			{
				ixElements: C1
			} = A1.IX2ElementsReducer,
			x1 = (0, T1.combineReducers)({
				ixData: O1.ixData,
				ixRequest: b1.ixRequest,
				ixSession: S1.ixSession,
				ixElements: C1,
				ixInstances: w1.ixInstances,
				ixParameters: R1.ixParameters
			});
		hi.default = x1
	});
	var Zg = u((J5, en) => {
		function N1(e, t) {
			if (e == null) return {};
			var r = {},
				n = Object.keys(e),
				i, o;
			for (o = 0; o < n.length; o++) i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
			return r
		}
		en.exports = N1, en.exports.__esModule = !0, en.exports.default = en.exports
	});
	var eE = u((ej, Jg) => {
		var q1 = bt(),
			L1 = Ne(),
			P1 = Et(),
			D1 = "[object String]";

		function M1(e) {
			return typeof e == "string" || !L1(e) && P1(e) && q1(e) == D1
		}
		Jg.exports = M1
	});
	var rE = u((tj, tE) => {
		var F1 = Aa(),
			G1 = F1("length");
		tE.exports = G1
	});
	var iE = u((rj, nE) => {
		var X1 = "\\ud800-\\udfff",
			U1 = "\\u0300-\\u036f",
			V1 = "\\ufe20-\\ufe2f",
			W1 = "\\u20d0-\\u20ff",
			B1 = U1 + V1 + W1,
			H1 = "\\ufe0e\\ufe0f",
			k1 = "\\u200d",
			j1 = RegExp("[" + k1 + X1 + B1 + H1 + "]");

		function K1(e) {
			return j1.test(e)
		}
		nE.exports = K1
	});
	var pE = u((nj, dE) => {
		var aE = "\\ud800-\\udfff",
			z1 = "\\u0300-\\u036f",
			Y1 = "\\ufe20-\\ufe2f",
			Q1 = "\\u20d0-\\u20ff",
			$1 = z1 + Y1 + Q1,
			Z1 = "\\ufe0e\\ufe0f",
			J1 = "[" + aE + "]",
			Ka = "[" + $1 + "]",
			za = "\\ud83c[\\udffb-\\udfff]",
			eF = "(?:" + Ka + "|" + za + ")",
			sE = "[^" + aE + "]",
			uE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			cE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			tF = "\\u200d",
			lE = eF + "?",
			fE = "[" + Z1 + "]?",
			rF = "(?:" + tF + "(?:" + [sE, uE, cE].join("|") + ")" + fE + lE + ")*",
			nF = fE + lE + rF,
			iF = "(?:" + [sE + Ka + "?", Ka, uE, cE, J1].join("|") + ")",
			oE = RegExp(za + "(?=" + za + ")|" + iF + nF, "g");

		function oF(e) {
			for (var t = oE.lastIndex = 0; oE.test(e);) ++t;
			return t
		}
		dE.exports = oF
	});
	var hE = u((ij, vE) => {
		var aF = rE(),
			sF = iE(),
			uF = pE();

		function cF(e) {
			return sF(e) ? uF(e) : aF(e)
		}
		vE.exports = cF
	});
	var EE = u((oj, gE) => {
		var lF = Kn(),
			fF = zn(),
			dF = Mt(),
			pF = eE(),
			vF = hE(),
			hF = "[object Map]",
			gF = "[object Set]";

		function EF(e) {
			if (e == null) return 0;
			if (dF(e)) return pF(e) ? vF(e) : e.length;
			var t = fF(e);
			return t == hF || t == gF ? e.size : lF(e).length
		}
		gE.exports = EF
	});
	var mE = u((aj, _E) => {
		var _F = "Expected a function";

		function mF(e) {
			if (typeof e != "function") throw new TypeError(_F);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		_E.exports = mF
	});
	var Ya = u((sj, yE) => {
		var yF = St(),
			IF = function() {
				try {
					var e = yF(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		yE.exports = IF
	});
	var Qa = u((uj, TE) => {
		var IE = Ya();

		function TF(e, t, r) {
			t == "__proto__" && IE ? IE(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		TE.exports = TF
	});
	var bE = u((cj, OE) => {
		var OF = Qa(),
			bF = Fn(),
			SF = Object.prototype,
			AF = SF.hasOwnProperty;

		function wF(e, t, r) {
			var n = e[t];
			(!(AF.call(e, t) && bF(n, r)) || r === void 0 && !(t in e)) && OF(e, t, r)
		}
		OE.exports = wF
	});
	var wE = u((lj, AE) => {
		var RF = bE(),
			CF = kr(),
			xF = Bn(),
			SE = ft(),
			NF = cr();

		function qF(e, t, r, n) {
			if (!SE(e)) return e;
			t = CF(t, e);
			for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
				var c = NF(t[i]),
					d = r;
				if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
				if (i != a) {
					var E = s[c];
					d = n ? n(E, c, s) : void 0, d === void 0 && (d = SE(E) ? E : xF(t[i + 1]) ? [] : {})
				}
				RF(s, c, d), s = s[c]
			}
			return e
		}
		AE.exports = qF
	});
	var CE = u((fj, RE) => {
		var LF = $n(),
			PF = wE(),
			DF = kr();

		function MF(e, t, r) {
			for (var n = -1, i = t.length, o = {}; ++n < i;) {
				var a = t[n],
					s = LF(e, a);
				r(s, a) && PF(o, DF(a, e), s)
			}
			return o
		}
		RE.exports = MF
	});
	var NE = u((dj, xE) => {
		var FF = Vn(),
			GF = Mo(),
			XF = fa(),
			UF = la(),
			VF = Object.getOwnPropertySymbols,
			WF = VF ? function(e) {
				for (var t = []; e;) FF(t, XF(e)), e = GF(e);
				return t
			} : UF;
		xE.exports = WF
	});
	var LE = u((pj, qE) => {
		function BF(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		qE.exports = BF
	});
	var DE = u((vj, PE) => {
		var HF = ft(),
			kF = jn(),
			jF = LE(),
			KF = Object.prototype,
			zF = KF.hasOwnProperty;

		function YF(e) {
			if (!HF(e)) return jF(e);
			var t = kF(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !zF.call(e, n)) || r.push(n);
			return r
		}
		PE.exports = YF
	});
	var FE = u((hj, ME) => {
		var QF = pa(),
			$F = DE(),
			ZF = Mt();

		function JF(e) {
			return ZF(e) ? QF(e, !0) : $F(e)
		}
		ME.exports = JF
	});
	var XE = u((gj, GE) => {
		var e2 = ca(),
			t2 = NE(),
			r2 = FE();

		function n2(e) {
			return e2(e, r2, t2)
		}
		GE.exports = n2
	});
	var VE = u((Ej, UE) => {
		var i2 = Sa(),
			o2 = At(),
			a2 = CE(),
			s2 = XE();

		function u2(e, t) {
			if (e == null) return {};
			var r = i2(s2(e), function(n) {
				return [n]
			});
			return t = o2(t), a2(e, r, function(n, i) {
				return t(n, i[0])
			})
		}
		UE.exports = u2
	});
	var BE = u((_j, WE) => {
		var c2 = At(),
			l2 = mE(),
			f2 = VE();

		function d2(e, t) {
			return f2(e, l2(c2(t)))
		}
		WE.exports = d2
	});
	var kE = u((mj, HE) => {
		var p2 = Kn(),
			v2 = zn(),
			h2 = Xr(),
			g2 = Ne(),
			E2 = Mt(),
			_2 = Wn(),
			m2 = jn(),
			y2 = kn(),
			I2 = "[object Map]",
			T2 = "[object Set]",
			O2 = Object.prototype,
			b2 = O2.hasOwnProperty;

		function S2(e) {
			if (e == null) return !0;
			if (E2(e) && (g2(e) || typeof e == "string" || typeof e.splice == "function" || _2(e) || y2(e) || h2(e))) return !e.length;
			var t = v2(e);
			if (t == I2 || t == T2) return !e.size;
			if (m2(e)) return !p2(e).length;
			for (var r in e)
				if (b2.call(e, r)) return !1;
			return !0
		}
		HE.exports = S2
	});
	var KE = u((yj, jE) => {
		var A2 = Qa(),
			w2 = Fa(),
			R2 = At();

		function C2(e, t) {
			var r = {};
			return t = R2(t, 3), w2(e, function(n, i, o) {
				A2(r, i, t(n, i, o))
			}), r
		}
		jE.exports = C2
	});
	var YE = u((Ij, zE) => {
		function x2(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		zE.exports = x2
	});
	var $E = u((Tj, QE) => {
		var N2 = Jn();

		function q2(e) {
			return typeof e == "function" ? e : N2
		}
		QE.exports = q2
	});
	var JE = u((Oj, ZE) => {
		var L2 = YE(),
			P2 = Ga(),
			D2 = $E(),
			M2 = Ne();

		function F2(e, t) {
			var r = M2(e) ? L2 : P2;
			return r(e, D2(t))
		}
		ZE.exports = F2
	});
	var t_ = u((bj, e_) => {
		var G2 = tt(),
			X2 = function() {
				return G2.Date.now()
			};
		e_.exports = X2
	});
	var i_ = u((Sj, n_) => {
		var U2 = ft(),
			$a = t_(),
			r_ = ei(),
			V2 = "Expected a function",
			W2 = Math.max,
			B2 = Math.min;

		function H2(e, t, r) {
			var n, i, o, a, s, c, d = 0,
				E = !1,
				f = !1,
				_ = !0;
			if (typeof e != "function") throw new TypeError(V2);
			t = r_(t) || 0, U2(r) && (E = !!r.leading, f = "maxWait" in r, o = f ? W2(r_(r.maxWait) || 0, t) : o, _ = "trailing" in r ? !!r.trailing : _);

			function p(P) {
				var V = n,
					j = i;
				return n = i = void 0, d = P, a = e.apply(j, V), a
			}

			function g(P) {
				return d = P, s = setTimeout(A, t), E ? p(P) : a
			}

			function O(P) {
				var V = P - c,
					j = P - d,
					Q = t - V;
				return f ? B2(Q, o - j) : Q
			}

			function R(P) {
				var V = P - c,
					j = P - d;
				return c === void 0 || V >= t || V < 0 || f && j >= o
			}

			function A() {
				var P = $a();
				if (R(P)) return x(P);
				s = setTimeout(A, O(P))
			}

			function x(P) {
				return s = void 0, _ && n ? p(P) : (n = i = void 0, a)
			}

			function S() {
				s !== void 0 && clearTimeout(s), d = 0, n = c = i = s = void 0
			}

			function L() {
				return s === void 0 ? a : x($a())
			}

			function q() {
				var P = $a(),
					V = R(P);
				if (n = arguments, i = this, c = P, V) {
					if (s === void 0) return g(c);
					if (f) return clearTimeout(s), s = setTimeout(A, t), p(c)
				}
				return s === void 0 && (s = setTimeout(A, t)), a
			}
			return q.cancel = S, q.flush = L, q
		}
		n_.exports = H2
	});
	var a_ = u((Aj, o_) => {
		var k2 = i_(),
			j2 = ft(),
			K2 = "Expected a function";

		function z2(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(K2);
			return j2(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), k2(e, t, {
				leading: n,
				maxWait: t,
				trailing: i
			})
		}
		o_.exports = z2
	});
	var gi = u(ce => {
		"use strict";
		var Y2 = ut().default;
		Object.defineProperty(ce, "__esModule", {
			value: !0
		});
		ce.viewportWidthChanged = ce.testFrameRendered = ce.stopRequested = ce.sessionStopped = ce.sessionStarted = ce.sessionInitialized = ce.rawDataImported = ce.previewRequested = ce.playbackRequested = ce.parameterChanged = ce.mediaQueriesDefined = ce.instanceStarted = ce.instanceRemoved = ce.instanceAdded = ce.eventStateChanged = ce.eventListenerAdded = ce.elementStateChanged = ce.clearRequested = ce.animationFrameChanged = ce.actionListPlaybackChanged = void 0;
		var s_ = Y2(Pr()),
			u_ = We(),
			Q2 = Wt(),
			{
				IX2_RAW_DATA_IMPORTED: $2,
				IX2_SESSION_INITIALIZED: Z2,
				IX2_SESSION_STARTED: J2,
				IX2_SESSION_STOPPED: eG,
				IX2_PREVIEW_REQUESTED: tG,
				IX2_PLAYBACK_REQUESTED: rG,
				IX2_STOP_REQUESTED: nG,
				IX2_CLEAR_REQUESTED: iG,
				IX2_EVENT_LISTENER_ADDED: oG,
				IX2_TEST_FRAME_RENDERED: aG,
				IX2_EVENT_STATE_CHANGED: sG,
				IX2_ANIMATION_FRAME_CHANGED: uG,
				IX2_PARAMETER_CHANGED: cG,
				IX2_INSTANCE_ADDED: lG,
				IX2_INSTANCE_STARTED: fG,
				IX2_INSTANCE_REMOVED: dG,
				IX2_ELEMENT_STATE_CHANGED: pG,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: vG,
				IX2_VIEWPORT_WIDTH_CHANGED: hG,
				IX2_MEDIA_QUERIES_DEFINED: gG
			} = u_.IX2EngineActionTypes,
			{
				reifyState: EG
			} = Q2.IX2VanillaUtils,
			_G = e => ({
				type: $2,
				payload: (0, s_.default)({}, EG(e))
			});
		ce.rawDataImported = _G;
		var mG = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: Z2,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		});
		ce.sessionInitialized = mG;
		var yG = () => ({
			type: J2
		});
		ce.sessionStarted = yG;
		var IG = () => ({
			type: eG
		});
		ce.sessionStopped = IG;
		var TG = ({
			rawData: e,
			defer: t
		}) => ({
			type: tG,
			payload: {
				defer: t,
				rawData: e
			}
		});
		ce.previewRequested = TG;
		var OG = ({
			actionTypeId: e = u_.ActionTypeConsts.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: i,
			immediate: o,
			testManual: a,
			verbose: s,
			rawData: c
		}) => ({
			type: rG,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: i,
				immediate: o,
				verbose: s,
				rawData: c
			}
		});
		ce.playbackRequested = OG;
		var bG = e => ({
			type: nG,
			payload: {
				actionListId: e
			}
		});
		ce.stopRequested = bG;
		var SG = () => ({
			type: iG
		});
		ce.clearRequested = SG;
		var AG = (e, t) => ({
			type: oG,
			payload: {
				target: e,
				listenerParams: t
			}
		});
		ce.eventListenerAdded = AG;
		var wG = (e = 1) => ({
			type: aG,
			payload: {
				step: e
			}
		});
		ce.testFrameRendered = wG;
		var RG = (e, t) => ({
			type: sG,
			payload: {
				stateKey: e,
				newState: t
			}
		});
		ce.eventStateChanged = RG;
		var CG = (e, t) => ({
			type: uG,
			payload: {
				now: e,
				parameters: t
			}
		});
		ce.animationFrameChanged = CG;
		var xG = (e, t) => ({
			type: cG,
			payload: {
				key: e,
				value: t
			}
		});
		ce.parameterChanged = xG;
		var NG = e => ({
			type: lG,
			payload: (0, s_.default)({}, e)
		});
		ce.instanceAdded = NG;
		var qG = (e, t) => ({
			type: fG,
			payload: {
				instanceId: e,
				time: t
			}
		});
		ce.instanceStarted = qG;
		var LG = e => ({
			type: dG,
			payload: {
				instanceId: e
			}
		});
		ce.instanceRemoved = LG;
		var PG = (e, t, r, n) => ({
			type: pG,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		});
		ce.elementStateChanged = PG;
		var DG = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: vG,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		});
		ce.actionListPlaybackChanged = DG;
		var MG = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: hG,
			payload: {
				width: e,
				mediaQueries: t
			}
		});
		ce.viewportWidthChanged = MG;
		var FG = () => ({
			type: gG
		});
		ce.mediaQueriesDefined = FG
	});
	var f_ = u(Le => {
		"use strict";
		Object.defineProperty(Le, "__esModule", {
			value: !0
		});
		Le.elementContains = YG;
		Le.getChildElements = $G;
		Le.getClosestElement = void 0;
		Le.getProperty = HG;
		Le.getQuerySelector = jG;
		Le.getRefType = eX;
		Le.getSiblingElements = ZG;
		Le.getStyle = BG;
		Le.getValidDocument = KG;
		Le.isSiblingNode = QG;
		Le.matchSelector = kG;
		Le.queryDocument = zG;
		Le.setStyle = WG;
		var GG = Wt(),
			XG = We(),
			{
				ELEMENT_MATCHES: Za
			} = GG.IX2BrowserSupport,
			{
				IX2_ID_DELIMITER: c_,
				HTML_ELEMENT: UG,
				PLAIN_OBJECT: VG,
				WF_PAGE: l_
			} = XG.IX2EngineConstants;

		function WG(e, t, r) {
			e.style[t] = r
		}

		function BG(e, t) {
			return e.style[t]
		}

		function HG(e, t) {
			return e[t]
		}

		function kG(e) {
			return t => t[Za](e)
		}

		function jG({
			id: e,
			selector: t
		}) {
			if (e) {
				let r = e;
				if (e.indexOf(c_) !== -1) {
					let n = e.split(c_),
						i = n[0];
					if (r = n[1], i !== document.documentElement.getAttribute(l_)) return null
				}
				return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
			}
			return t
		}

		function KG(e) {
			return e == null || e === document.documentElement.getAttribute(l_) ? document : null
		}

		function zG(e, t) {
			return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
		}

		function YG(e, t) {
			return e.contains(t)
		}

		function QG(e, t) {
			return e !== t && e.parentNode === t.parentNode
		}

		function $G(e) {
			let t = [];
			for (let r = 0, {
					length: n
				} = e || []; r < n; r++) {
				let {
					children: i
				} = e[r], {
					length: o
				} = i;
				if (o)
					for (let a = 0; a < o; a++) t.push(i[a])
			}
			return t
		}

		function ZG(e = []) {
			let t = [],
				r = [];
			for (let n = 0, {
					length: i
				} = e; n < i; n++) {
				let {
					parentNode: o
				} = e[n];
				if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
				r.push(o);
				let a = o.firstElementChild;
				for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
			}
			return t
		}
		var JG = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[Za] && r[Za](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		};
		Le.getClosestElement = JG;

		function eX(e) {
			return e != null && typeof e == "object" ? e instanceof Element ? UG : VG : null
		}
	});
	var Ja = u((Cj, p_) => {
		var tX = ft(),
			d_ = Object.create,
			rX = function() {
				function e() {}
				return function(t) {
					if (!tX(t)) return {};
					if (d_) return d_(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		p_.exports = rX
	});
	var Ei = u((xj, v_) => {
		function nX() {}
		v_.exports = nX
	});
	var mi = u((Nj, h_) => {
		var iX = Ja(),
			oX = Ei();

		function _i(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		_i.prototype = iX(oX.prototype);
		_i.prototype.constructor = _i;
		h_.exports = _i
	});
	var m_ = u((qj, __) => {
		var g_ = $t(),
			aX = Xr(),
			sX = Ne(),
			E_ = g_ ? g_.isConcatSpreadable : void 0;

		function uX(e) {
			return sX(e) || aX(e) || !!(E_ && e && e[E_])
		}
		__.exports = uX
	});
	var T_ = u((Lj, I_) => {
		var cX = Vn(),
			lX = m_();

		function y_(e, t, r, n, i) {
			var o = -1,
				a = e.length;
			for (r || (r = lX), i || (i = []); ++o < a;) {
				var s = e[o];
				t > 0 && r(s) ? t > 1 ? y_(s, t - 1, r, n, i) : cX(i, s) : n || (i[i.length] = s)
			}
			return i
		}
		I_.exports = y_
	});
	var b_ = u((Pj, O_) => {
		var fX = T_();

		function dX(e) {
			var t = e == null ? 0 : e.length;
			return t ? fX(e, 1) : []
		}
		O_.exports = dX
	});
	var A_ = u((Dj, S_) => {
		function pX(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		S_.exports = pX
	});
	var C_ = u((Mj, R_) => {
		var vX = A_(),
			w_ = Math.max;

		function hX(e, t, r) {
			return t = w_(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, i = -1, o = w_(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
					i = -1;
					for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
					return s[t] = r(a), vX(e, this, s)
				}
		}
		R_.exports = hX
	});
	var N_ = u((Fj, x_) => {
		function gX(e) {
			return function() {
				return e
			}
		}
		x_.exports = gX
	});
	var P_ = u((Gj, L_) => {
		var EX = N_(),
			q_ = Ya(),
			_X = Jn(),
			mX = q_ ? function(e, t) {
				return q_(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: EX(t),
					writable: !0
				})
			} : _X;
		L_.exports = mX
	});
	var M_ = u((Xj, D_) => {
		var yX = 800,
			IX = 16,
			TX = Date.now;

		function OX(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = TX(),
					i = IX - (n - r);
				if (r = n, i > 0) {
					if (++t >= yX) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		D_.exports = OX
	});
	var G_ = u((Uj, F_) => {
		var bX = P_(),
			SX = M_(),
			AX = SX(bX);
		F_.exports = AX
	});
	var U_ = u((Vj, X_) => {
		var wX = b_(),
			RX = C_(),
			CX = G_();

		function xX(e) {
			return CX(RX(e, void 0, wX), e + "")
		}
		X_.exports = xX
	});
	var B_ = u((Wj, W_) => {
		var V_ = va(),
			NX = V_ && new V_;
		W_.exports = NX
	});
	var k_ = u((Bj, H_) => {
		function qX() {}
		H_.exports = qX
	});
	var es = u((Hj, K_) => {
		var j_ = B_(),
			LX = k_(),
			PX = j_ ? function(e) {
				return j_.get(e)
			} : LX;
		K_.exports = PX
	});
	var Y_ = u((kj, z_) => {
		var DX = {};
		z_.exports = DX
	});
	var ts = u((jj, $_) => {
		var Q_ = Y_(),
			MX = Object.prototype,
			FX = MX.hasOwnProperty;

		function GX(e) {
			for (var t = e.name + "", r = Q_[t], n = FX.call(Q_, t) ? r.length : 0; n--;) {
				var i = r[n],
					o = i.func;
				if (o == null || o == e) return i.name
			}
			return t
		}
		$_.exports = GX
	});
	var Ii = u((Kj, Z_) => {
		var XX = Ja(),
			UX = Ei(),
			VX = 4294967295;

		function yi(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = VX, this.__views__ = []
		}
		yi.prototype = XX(UX.prototype);
		yi.prototype.constructor = yi;
		Z_.exports = yi
	});
	var em = u((zj, J_) => {
		function WX(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		J_.exports = WX
	});
	var rm = u((Yj, tm) => {
		var BX = Ii(),
			HX = mi(),
			kX = em();

		function jX(e) {
			if (e instanceof BX) return e.clone();
			var t = new HX(e.__wrapped__, e.__chain__);
			return t.__actions__ = kX(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		tm.exports = jX
	});
	var om = u((Qj, im) => {
		var KX = Ii(),
			nm = mi(),
			zX = Ei(),
			YX = Ne(),
			QX = Et(),
			$X = rm(),
			ZX = Object.prototype,
			JX = ZX.hasOwnProperty;

		function Ti(e) {
			if (QX(e) && !YX(e) && !(e instanceof KX)) {
				if (e instanceof nm) return e;
				if (JX.call(e, "__wrapped__")) return $X(e)
			}
			return new nm(e)
		}
		Ti.prototype = zX.prototype;
		Ti.prototype.constructor = Ti;
		im.exports = Ti
	});
	var sm = u(($j, am) => {
		var eU = Ii(),
			tU = es(),
			rU = ts(),
			nU = om();

		function iU(e) {
			var t = rU(e),
				r = nU[t];
			if (typeof r != "function" || !(t in eU.prototype)) return !1;
			if (e === r) return !0;
			var n = tU(r);
			return !!n && e === n[0]
		}
		am.exports = iU
	});
	var fm = u((Zj, lm) => {
		var um = mi(),
			oU = U_(),
			aU = es(),
			rs = ts(),
			sU = Ne(),
			cm = sm(),
			uU = "Expected a function",
			cU = 8,
			lU = 32,
			fU = 128,
			dU = 256;

		function pU(e) {
			return oU(function(t) {
				var r = t.length,
					n = r,
					i = um.prototype.thru;
				for (e && t.reverse(); n--;) {
					var o = t[n];
					if (typeof o != "function") throw new TypeError(uU);
					if (i && !a && rs(o) == "wrapper") var a = new um([], !0)
				}
				for (n = a ? n : r; ++n < r;) {
					o = t[n];
					var s = rs(o),
						c = s == "wrapper" ? aU(o) : void 0;
					c && cm(c[0]) && c[1] == (fU | cU | lU | dU) && !c[4].length && c[9] == 1 ? a = a[rs(c[0])].apply(a, c[3]) : a = o.length == 1 && cm(o) ? a[s]() : a.thru(o)
				}
				return function() {
					var d = arguments,
						E = d[0];
					if (a && d.length == 1 && sU(E)) return a.plant(E).value();
					for (var f = 0, _ = r ? t[f].apply(this, d) : E; ++f < r;) _ = t[f].call(this, _);
					return _
				}
			})
		}
		lm.exports = pU
	});
	var pm = u((Jj, dm) => {
		var vU = fm(),
			hU = vU();
		dm.exports = hU
	});
	var hm = u((eK, vm) => {
		function gU(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		vm.exports = gU
	});
	var Em = u((tK, gm) => {
		var EU = hm(),
			ns = ei();

		function _U(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ns(r), r = r === r ? r : 0), t !== void 0 && (t = ns(t), t = t === t ? t : 0), EU(ns(e), t, r)
		}
		gm.exports = _U
	});
	var Dm = u(wi => {
		"use strict";
		var Ai = ut().default;
		Object.defineProperty(wi, "__esModule", {
			value: !0
		});
		wi.default = void 0;
		var Ke = Ai(Pr()),
			mU = Ai(pm()),
			yU = Ai(Zn()),
			IU = Ai(Em()),
			Bt = We(),
			is = us(),
			Oi = gi(),
			TU = Wt(),
			{
				MOUSE_CLICK: OU,
				MOUSE_SECOND_CLICK: bU,
				MOUSE_DOWN: SU,
				MOUSE_UP: AU,
				MOUSE_OVER: wU,
				MOUSE_OUT: RU,
				DROPDOWN_CLOSE: CU,
				DROPDOWN_OPEN: xU,
				SLIDER_ACTIVE: NU,
				SLIDER_INACTIVE: qU,
				TAB_ACTIVE: LU,
				TAB_INACTIVE: PU,
				NAVBAR_CLOSE: DU,
				NAVBAR_OPEN: MU,
				MOUSE_MOVE: FU,
				PAGE_SCROLL_DOWN: Am,
				SCROLL_INTO_VIEW: wm,
				SCROLL_OUT_OF_VIEW: GU,
				PAGE_SCROLL_UP: XU,
				SCROLLING_IN_VIEW: UU,
				PAGE_FINISH: Rm,
				ECOMMERCE_CART_CLOSE: VU,
				ECOMMERCE_CART_OPEN: WU,
				PAGE_START: Cm,
				PAGE_SCROLL: BU
			} = Bt.EventTypeConsts,
			os = "COMPONENT_ACTIVE",
			xm = "COMPONENT_INACTIVE",
			{
				COLON_DELIMITER: _m
			} = Bt.IX2EngineConstants,
			{
				getNamespacedParameterId: mm
			} = TU.IX2VanillaUtils,
			Nm = e => t => typeof t == "object" && e(t) ? !0 : t,
			rn = Nm(({
				element: e,
				nativeEvent: t
			}) => e === t.target),
			HU = Nm(({
				element: e,
				nativeEvent: t
			}) => e.contains(t.target)),
			ht = (0, mU.default)([rn, HU]),
			qm = (e, t) => {
				if (t) {
					let {
						ixData: r
					} = e.getState(), {
						events: n
					} = r, i = n[t];
					if (i && !jU[i.eventTypeId]) return i
				}
				return null
			},
			kU = ({
				store: e,
				event: t
			}) => {
				let {
					action: r
				} = t, {
					autoStopEventId: n
				} = r.config;
				return !!qm(e, n)
			},
			He = ({
				store: e,
				event: t,
				element: r,
				eventStateKey: n
			}, i) => {
				let {
					action: o,
					id: a
				} = t, {
					actionListId: s,
					autoStopEventId: c
				} = o.config, d = qm(e, c);
				return d && (0, is.stopActionGroup)({
					store: e,
					eventId: c,
					eventTarget: r,
					eventStateKey: c + _m + n.split(_m)[1],
					actionListId: (0, yU.default)(d, "action.config.actionListId")
				}), (0, is.stopActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: s
				}), (0, is.startActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: s
				}), i
			},
			rt = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
			nn = {
				handler: rt(ht, He)
			},
			Lm = (0, Ke.default)({}, nn, {
				types: [os, xm].join(" ")
			}),
			as = [{
				target: window,
				types: "resize orientationchange",
				throttle: !0
			}, {
				target: document,
				types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
				throttle: !0
			}],
			ym = "mouseover mouseout",
			ss = {
				types: as
			},
			jU = {
				PAGE_START: Cm,
				PAGE_FINISH: Rm
			},
			tn = (() => {
				let e = window.pageXOffset !== void 0,
					r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
				return () => ({
					scrollLeft: e ? window.pageXOffset : r.scrollLeft,
					scrollTop: e ? window.pageYOffset : r.scrollTop,
					stiffScrollTop: (0, IU.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
					scrollWidth: r.scrollWidth,
					scrollHeight: r.scrollHeight,
					clientWidth: r.clientWidth,
					clientHeight: r.clientHeight,
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight
				})
			})(),
			KU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
			zU = ({
				element: e,
				nativeEvent: t
			}) => {
				let {
					type: r,
					target: n,
					relatedTarget: i
				} = t, o = e.contains(n);
				if (r === "mouseover" && o) return !0;
				let a = e.contains(i);
				return !!(r === "mouseout" && o && a)
			},
			YU = e => {
				let {
					element: t,
					event: {
						config: r
					}
				} = e, {
					clientWidth: n,
					clientHeight: i
				} = tn(), o = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
				return KU(t.getBoundingClientRect(), {
					left: 0,
					top: c,
					right: n,
					bottom: i - c
				})
			},
			Pm = e => (t, r) => {
				let {
					type: n
				} = t.nativeEvent, i = [os, xm].indexOf(n) !== -1 ? n === os : r.isActive, o = (0, Ke.default)({}, r, {
					isActive: i
				});
				return (!r || o.isActive !== r.isActive) && e(t, o) || o
			},
			Im = e => (t, r) => {
				let n = {
					elementHovered: zU(t)
				};
				return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
			},
			QU = e => (t, r) => {
				let n = (0, Ke.default)({}, r, {
					elementVisible: YU(t)
				});
				return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
			},
			Tm = e => (t, r = {}) => {
				let {
					stiffScrollTop: n,
					scrollHeight: i,
					innerHeight: o
				} = tn(), {
					event: {
						config: a,
						eventTypeId: s
					}
				} = t, {
					scrollOffsetValue: c,
					scrollOffsetUnit: d
				} = a, E = d === "PX", f = i - o, _ = Number((n / f).toFixed(2));
				if (r && r.percentTop === _) return r;
				let p = (E ? c : o * (c || 0) / 100) / f,
					g, O, R = 0;
				r && (g = _ > r.percentTop, O = r.scrollingDown !== g, R = O ? _ : r.anchorTop);
				let A = s === Am ? _ >= R + p : _ <= R - p,
					x = (0, Ke.default)({}, r, {
						percentTop: _,
						inBounds: A,
						anchorTop: R,
						scrollingDown: g
					});
				return r && A && (O || x.inBounds !== r.inBounds) && e(t, x) || x
			},
			$U = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
			ZU = e => (t, r) => {
				let n = {
					finished: document.readyState === "complete"
				};
				return n.finished && !(r && r.finshed) && e(t), n
			},
			JU = e => (t, r) => {
				let n = {
					started: !0
				};
				return r || e(t), n
			},
			Om = e => (t, r = {
				clickCount: 0
			}) => {
				let n = {
					clickCount: r.clickCount % 2 + 1
				};
				return n.clickCount !== r.clickCount && e(t, n) || n
			},
			bi = (e = !0) => (0, Ke.default)({}, Lm, {
				handler: rt(e ? ht : rn, Pm((t, r) => r.isActive ? nn.handler(t, r) : r))
			}),
			Si = (e = !0) => (0, Ke.default)({}, Lm, {
				handler: rt(e ? ht : rn, Pm((t, r) => r.isActive ? r : nn.handler(t, r)))
			}),
			bm = (0, Ke.default)({}, ss, {
				handler: QU((e, t) => {
					let {
						elementVisible: r
					} = t, {
						event: n,
						store: i
					} = e, {
						ixData: o
					} = i.getState(), {
						events: a
					} = o;
					return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === wm === r ? (He(e), (0, Ke.default)({}, t, {
						triggered: !0
					})) : t
				})
			}),
			Sm = .05,
			eV = {
				[NU]: bi(),
				[qU]: Si(),
				[xU]: bi(),
				[CU]: Si(),
				[MU]: bi(!1),
				[DU]: Si(!1),
				[LU]: bi(),
				[PU]: Si(),
				[WU]: {
					types: "ecommerce-cart-open",
					handler: rt(ht, He)
				},
				[VU]: {
					types: "ecommerce-cart-close",
					handler: rt(ht, He)
				},
				[OU]: {
					types: "click",
					handler: rt(ht, Om((e, {
						clickCount: t
					}) => {
						kU(e) ? t === 1 && He(e) : He(e)
					}))
				},
				[bU]: {
					types: "click",
					handler: rt(ht, Om((e, {
						clickCount: t
					}) => {
						t === 2 && He(e)
					}))
				},
				[SU]: (0, Ke.default)({}, nn, {
					types: "mousedown"
				}),
				[AU]: (0, Ke.default)({}, nn, {
					types: "mouseup"
				}),
				[wU]: {
					types: ym,
					handler: rt(ht, Im((e, t) => {
						t.elementHovered && He(e)
					}))
				},
				[RU]: {
					types: ym,
					handler: rt(ht, Im((e, t) => {
						t.elementHovered || He(e)
					}))
				},
				[FU]: {
					types: "mousemove mouseout scroll",
					handler: ({
						store: e,
						element: t,
						eventConfig: r,
						nativeEvent: n,
						eventStateKey: i
					}, o = {
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0
					}) => {
						let {
							basedOn: a,
							selectedAxis: s,
							continuousParameterGroupId: c,
							reverse: d,
							restingState: E = 0
						} = r, {
							clientX: f = o.clientX,
							clientY: _ = o.clientY,
							pageX: p = o.pageX,
							pageY: g = o.pageY
						} = n, O = s === "X_AXIS", R = n.type === "mouseout", A = E / 100, x = c, S = !1;
						switch (a) {
							case Bt.EventBasedOn.VIEWPORT: {
								A = O ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
								break
							}
							case Bt.EventBasedOn.PAGE: {
								let {
									scrollLeft: L,
									scrollTop: q,
									scrollWidth: P,
									scrollHeight: V
								} = tn();
								A = O ? Math.min(L + p, P) / P : Math.min(q + g, V) / V;
								break
							}
							case Bt.EventBasedOn.ELEMENT:
							default: {
								x = mm(i, c);
								let L = n.type.indexOf("mouse") === 0;
								if (L && ht({
										element: t,
										nativeEvent: n
									}) !== !0) break;
								let q = t.getBoundingClientRect(),
									{
										left: P,
										top: V,
										width: j,
										height: Q
									} = q;
								if (!L && !$U({
										left: f,
										top: _
									}, q)) break;
								S = !0, A = O ? (f - P) / j : (_ - V) / Q;
								break
							}
						}
						return R && (A > 1 - Sm || A < Sm) && (A = Math.round(A)), (a !== Bt.EventBasedOn.ELEMENT || S || S !== o.elementHovered) && (A = d ? 1 - A : A, e.dispatch((0, Oi.parameterChanged)(x, A))), {
							elementHovered: S,
							clientX: f,
							clientY: _,
							pageX: p,
							pageY: g
						}
					}
				},
				[BU]: {
					types: as,
					handler: ({
						store: e,
						eventConfig: t
					}) => {
						let {
							continuousParameterGroupId: r,
							reverse: n
						} = t, {
							scrollTop: i,
							scrollHeight: o,
							clientHeight: a
						} = tn(), s = i / (o - a);
						s = n ? 1 - s : s, e.dispatch((0, Oi.parameterChanged)(r, s))
					}
				},
				[UU]: {
					types: as,
					handler: ({
						element: e,
						store: t,
						eventConfig: r,
						eventStateKey: n
					}, i = {
						scrollPercent: 0
					}) => {
						let {
							scrollLeft: o,
							scrollTop: a,
							scrollWidth: s,
							scrollHeight: c,
							clientHeight: d
						} = tn(), {
							basedOn: E,
							selectedAxis: f,
							continuousParameterGroupId: _,
							startsEntering: p,
							startsExiting: g,
							addEndOffset: O,
							addStartOffset: R,
							addOffsetValue: A = 0,
							endOffsetValue: x = 0
						} = r, S = f === "X_AXIS";
						if (E === Bt.EventBasedOn.VIEWPORT) {
							let L = S ? o / s : a / c;
							return L !== i.scrollPercent && t.dispatch((0, Oi.parameterChanged)(_, L)), {
								scrollPercent: L
							}
						} else {
							let L = mm(n, _),
								q = e.getBoundingClientRect(),
								P = (R ? A : 0) / 100,
								V = (O ? x : 0) / 100;
							P = p ? P : 1 - P, V = g ? V : 1 - V;
							let j = q.top + Math.min(q.height * P, d),
								oe = q.top + q.height * V - j,
								re = Math.min(d + oe, c),
								I = Math.min(Math.max(0, d - j), re) / re;
							return I !== i.scrollPercent && t.dispatch((0, Oi.parameterChanged)(L, I)), {
								scrollPercent: I
							}
						}
					}
				},
				[wm]: bm,
				[GU]: bm,
				[Am]: (0, Ke.default)({}, ss, {
					handler: Tm((e, t) => {
						t.scrollingDown && He(e)
					})
				}),
				[XU]: (0, Ke.default)({}, ss, {
					handler: Tm((e, t) => {
						t.scrollingDown || He(e)
					})
				}),
				[Rm]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: rt(rn, ZU(He))
				},
				[Cm]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: rt(rn, JU(He))
				}
			};
		wi.default = eV
	});
	var us = u(xt => {
		"use strict";
		var it = ut().default,
			tV = Kt().default;
		Object.defineProperty(xt, "__esModule", {
			value: !0
		});
		xt.observeRequests = xV;
		xt.startActionGroup = hs;
		xt.startEngine = Ni;
		xt.stopActionGroup = vs;
		xt.stopAllActionGroups = Hm;
		xt.stopEngine = qi;
		var rV = it(Pr()),
			nV = it(Zg()),
			iV = it(xa()),
			Ct = it(Zn()),
			oV = it(EE()),
			aV = it(BE()),
			sV = it(kE()),
			uV = it(KE()),
			on = it(JE()),
			cV = it(a_()),
			nt = We(),
			Gm = Wt(),
			be = gi(),
			Re = tV(f_()),
			lV = it(Dm()),
			fV = ["store", "computedStyle"],
			dV = Object.keys(nt.QuickEffectIds),
			cs = e => dV.includes(e),
			{
				COLON_DELIMITER: ls,
				BOUNDARY_SELECTOR: Ri,
				HTML_ELEMENT: Xm,
				RENDER_GENERAL: pV,
				W_MOD_IX: Mm
			} = nt.IX2EngineConstants,
			{
				getAffectedElements: Ci,
				getElementId: vV,
				getDestinationValues: fs,
				observeStore: Ht,
				getInstanceId: hV,
				renderHTMLElement: gV,
				clearAllStyles: Um,
				getMaxDurationItemIndex: EV,
				getComputedStyle: _V,
				getInstanceOrigin: mV,
				reduceListToGroup: yV,
				shouldNamespaceEventParameter: IV,
				getNamespacedParameterId: TV,
				shouldAllowMediaQuery: xi,
				cleanupHTMLElement: OV,
				stringifyTarget: bV,
				mediaQueriesEqual: SV,
				shallowEqual: AV
			} = Gm.IX2VanillaUtils,
			{
				isPluginType: ds,
				createPluginInstance: ps,
				getPluginDuration: wV
			} = Gm.IX2VanillaPlugins,
			Fm = navigator.userAgent,
			RV = Fm.match(/iPad/i) || Fm.match(/iPhone/),
			CV = 12;

		function xV(e) {
			Ht({
				store: e,
				select: ({
					ixRequest: t
				}) => t.preview,
				onChange: LV
			}), Ht({
				store: e,
				select: ({
					ixRequest: t
				}) => t.playback,
				onChange: PV
			}), Ht({
				store: e,
				select: ({
					ixRequest: t
				}) => t.stop,
				onChange: DV
			}), Ht({
				store: e,
				select: ({
					ixRequest: t
				}) => t.clear,
				onChange: MV
			})
		}

		function NV(e) {
			Ht({
				store: e,
				select: ({
					ixSession: t
				}) => t.mediaQueryKey,
				onChange: () => {
					qi(e), Um({
						store: e,
						elementApi: Re
					}), Ni({
						store: e,
						allowEvents: !0
					}), Vm()
				}
			})
		}

		function qV(e, t) {
			let r = Ht({
				store: e,
				select: ({
					ixSession: n
				}) => n.tick,
				onChange: n => {
					t(n), r()
				}
			})
		}

		function LV({
			rawData: e,
			defer: t
		}, r) {
			let n = () => {
				Ni({
					store: r,
					rawData: e,
					allowEvents: !0
				}), Vm()
			};
			t ? setTimeout(n, 0) : n()
		}

		function Vm() {
			document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
		}

		function PV(e, t) {
			let {
				actionTypeId: r,
				actionListId: n,
				actionItemId: i,
				eventId: o,
				allowEvents: a,
				immediate: s,
				testManual: c,
				verbose: d = !0
			} = e, {
				rawData: E
			} = e;
			if (n && i && E && s) {
				let f = E.actionLists[n];
				f && (E = yV({
					actionList: f,
					actionItemId: i,
					rawData: E
				}))
			}
			if (Ni({
					store: t,
					rawData: E,
					allowEvents: a,
					testManual: c
				}), n && r === nt.ActionTypeConsts.GENERAL_START_ACTION || cs(r)) {
				vs({
					store: t,
					actionListId: n
				}), Bm({
					store: t,
					actionListId: n,
					eventId: o
				});
				let f = hs({
					store: t,
					eventId: o,
					actionListId: n,
					immediate: s,
					verbose: d
				});
				d && f && t.dispatch((0, be.actionListPlaybackChanged)({
					actionListId: n,
					isPlaying: !s
				}))
			}
		}

		function DV({
			actionListId: e
		}, t) {
			e ? vs({
				store: t,
				actionListId: e
			}) : Hm({
				store: t
			}), qi(t)
		}

		function MV(e, t) {
			qi(t), Um({
				store: t,
				elementApi: Re
			})
		}

		function Ni({
			store: e,
			rawData: t,
			allowEvents: r,
			testManual: n
		}) {
			let {
				ixSession: i
			} = e.getState();
			t && e.dispatch((0, be.rawDataImported)(t)), i.active || (e.dispatch((0, be.sessionInitialized)({
				hasBoundaryNodes: !!document.querySelector(Ri),
				reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
			})), r && (WV(e), FV(), e.getState().ixSession.hasDefinedMediaQueries && NV(e)), e.dispatch((0, be.sessionStarted)()), GV(e, n))
		}

		function FV() {
			let {
				documentElement: e
			} = document;
			e.className.indexOf(Mm) === -1 && (e.className += ` ${Mm}`)
		}

		function GV(e, t) {
			let r = n => {
				let {
					ixSession: i,
					ixParameters: o
				} = e.getState();
				i.active && (e.dispatch((0, be.animationFrameChanged)(n, o)), t ? qV(e, r) : requestAnimationFrame(r))
			};
			r(window.performance.now())
		}

		function qi(e) {
			let {
				ixSession: t
			} = e.getState();
			if (t.active) {
				let {
					eventListeners: r
				} = t;
				r.forEach(XV), e.dispatch((0, be.sessionStopped)())
			}
		}

		function XV({
			target: e,
			listenerParams: t
		}) {
			e.removeEventListener.apply(e, t)
		}

		function UV({
			store: e,
			eventStateKey: t,
			eventTarget: r,
			eventId: n,
			eventConfig: i,
			actionListId: o,
			parameterGroup: a,
			smoothing: s,
			restingValue: c
		}) {
			let {
				ixData: d,
				ixSession: E
			} = e.getState(), {
				events: f
			} = d, _ = f[n], {
				eventTypeId: p
			} = _, g = {}, O = {}, R = [], {
				continuousActionGroups: A
			} = a, {
				id: x
			} = a;
			IV(p, i) && (x = TV(t, x));
			let S = E.hasBoundaryNodes && r ? Re.getClosestElement(r, Ri) : null;
			A.forEach(L => {
				let {
					keyframe: q,
					actionItems: P
				} = L;
				P.forEach(V => {
					let {
						actionTypeId: j
					} = V, {
						target: Q
					} = V.config;
					if (!Q) return;
					let oe = Q.boundaryMode ? S : null,
						re = bV(Q) + ls + j;
					if (O[re] = VV(O[re], q, V), !g[re]) {
						g[re] = !0;
						let {
							config: X
						} = V;
						Ci({
							config: X,
							event: _,
							eventTarget: r,
							elementRoot: oe,
							elementApi: Re
						}).forEach(I => {
							R.push({
								element: I,
								key: re
							})
						})
					}
				})
			}), R.forEach(({
				element: L,
				key: q
			}) => {
				let P = O[q],
					V = (0, Ct.default)(P, "[0].actionItems[0]", {}),
					{
						actionTypeId: j
					} = V,
					Q = ds(j) ? ps(j)(L, V) : null,
					oe = fs({
						element: L,
						actionItem: V,
						elementApi: Re
					}, Q);
				gs({
					store: e,
					element: L,
					eventId: n,
					actionListId: o,
					actionItem: V,
					destination: oe,
					continuous: !0,
					parameterId: x,
					actionGroups: P,
					smoothing: s,
					restingValue: c,
					pluginInstance: Q
				})
			})
		}

		function VV(e = [], t, r) {
			let n = [...e],
				i;
			return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
				keyframe: t,
				actionItems: []
			})), n[i].actionItems.push(r), n
		}

		function WV(e) {
			let {
				ixData: t
			} = e.getState(), {
				eventTypeMap: r
			} = t;
			Wm(e), (0, on.default)(r, (i, o) => {
				let a = lV.default[o];
				if (!a) {
					console.warn(`IX2 event type not configured: ${o}`);
					return
				}
				zV({
					logic: a,
					store: e,
					events: i
				})
			});
			let {
				ixSession: n
			} = e.getState();
			n.eventListeners.length && HV(e)
		}
		var BV = ["resize", "orientationchange"];

		function HV(e) {
			let t = () => {
				Wm(e)
			};
			BV.forEach(r => {
				window.addEventListener(r, t), e.dispatch((0, be.eventListenerAdded)(window, [r, t]))
			}), t()
		}

		function Wm(e) {
			let {
				ixSession: t,
				ixData: r
			} = e.getState(), n = window.innerWidth;
			if (n !== t.viewportWidth) {
				let {
					mediaQueries: i
				} = r;
				e.dispatch((0, be.viewportWidthChanged)({
					width: n,
					mediaQueries: i
				}))
			}
		}
		var kV = (e, t) => (0, aV.default)((0, uV.default)(e, t), sV.default),
			jV = (e, t) => {
				(0, on.default)(e, (r, n) => {
					r.forEach((i, o) => {
						let a = n + ls + o;
						t(i, n, a)
					})
				})
			},
			KV = e => {
				let t = {
					target: e.target,
					targets: e.targets
				};
				return Ci({
					config: t,
					elementApi: Re
				})
			};

		function zV({
			logic: e,
			store: t,
			events: r
		}) {
			YV(r);
			let {
				types: n,
				handler: i
			} = e, {
				ixData: o
			} = t.getState(), {
				actionLists: a
			} = o, s = kV(r, KV);
			if (!(0, oV.default)(s)) return;
			(0, on.default)(s, (f, _) => {
				let p = r[_],
					{
						action: g,
						id: O,
						mediaQueries: R = o.mediaQueryKeys
					} = p,
					{
						actionListId: A
					} = g.config;
				SV(R, o.mediaQueryKeys) || t.dispatch((0, be.mediaQueriesDefined)()), g.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(p.config) ? p.config : [p.config]).forEach(S => {
					let {
						continuousParameterGroupId: L
					} = S, q = (0, Ct.default)(a, `${A}.continuousParameterGroups`, []), P = (0, iV.default)(q, ({
						id: Q
					}) => Q === L), V = (S.smoothing || 0) / 100, j = (S.restingState || 0) / 100;
					P && f.forEach((Q, oe) => {
						let re = O + ls + oe;
						UV({
							store: t,
							eventStateKey: re,
							eventTarget: Q,
							eventId: O,
							eventConfig: S,
							actionListId: A,
							parameterGroup: P,
							smoothing: V,
							restingValue: j
						})
					})
				}), (g.actionTypeId === nt.ActionTypeConsts.GENERAL_START_ACTION || cs(g.actionTypeId)) && Bm({
					store: t,
					actionListId: A,
					eventId: O
				})
			});
			let c = f => {
					let {
						ixSession: _
					} = t.getState();
					jV(s, (p, g, O) => {
						let R = r[g],
							A = _.eventState[O],
							{
								action: x,
								mediaQueries: S = o.mediaQueryKeys
							} = R;
						if (!xi(S, _.mediaQueryKey)) return;
						let L = (q = {}) => {
							let P = i({
								store: t,
								element: p,
								event: R,
								eventConfig: q,
								nativeEvent: f,
								eventStateKey: O
							}, A);
							AV(P, A) || t.dispatch((0, be.eventStateChanged)(O, P))
						};
						x.actionTypeId === nt.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(L) : L()
					})
				},
				d = (0, cV.default)(c, CV),
				E = ({
					target: f = document,
					types: _,
					throttle: p
				}) => {
					_.split(" ").filter(Boolean).forEach(g => {
						let O = p ? d : c;
						f.addEventListener(g, O), t.dispatch((0, be.eventListenerAdded)(f, [g, O]))
					})
				};
			Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
		}

		function YV(e) {
			if (!RV) return;
			let t = {},
				r = "";
			for (let n in e) {
				let {
					eventTypeId: i,
					target: o
				} = e[n], a = Re.getQuerySelector(o);
				t[a] || (i === nt.EventTypeConsts.MOUSE_CLICK || i === nt.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
			}
			if (r) {
				let n = document.createElement("style");
				n.textContent = r, document.body.appendChild(n)
			}
		}

		function Bm({
			store: e,
			actionListId: t,
			eventId: r
		}) {
			let {
				ixData: n,
				ixSession: i
			} = e.getState(), {
				actionLists: o,
				events: a
			} = n, s = a[r], c = o[t];
			if (c && c.useFirstGroupAsInitialState) {
				let d = (0, Ct.default)(c, "actionItemGroups[0].actionItems", []),
					E = (0, Ct.default)(s, "mediaQueries", n.mediaQueryKeys);
				if (!xi(E, i.mediaQueryKey)) return;
				d.forEach(f => {
					var _;
					let {
						config: p,
						actionTypeId: g
					} = f, O = (p == null || (_ = p.target) === null || _ === void 0 ? void 0 : _.useEventTarget) === !0 ? {
						target: s.target,
						targets: s.targets
					} : p, R = Ci({
						config: O,
						event: s,
						elementApi: Re
					}), A = ds(g);
					R.forEach(x => {
						let S = A ? ps(g)(x, f) : null;
						gs({
							destination: fs({
								element: x,
								actionItem: f,
								elementApi: Re
							}, S),
							immediate: !0,
							store: e,
							element: x,
							eventId: r,
							actionItem: f,
							actionListId: t,
							pluginInstance: S
						})
					})
				})
			}
		}

		function Hm({
			store: e
		}) {
			let {
				ixInstances: t
			} = e.getState();
			(0, on.default)(t, r => {
				if (!r.continuous) {
					let {
						actionListId: n,
						verbose: i
					} = r;
					Es(r, e), i && e.dispatch((0, be.actionListPlaybackChanged)({
						actionListId: n,
						isPlaying: !1
					}))
				}
			})
		}

		function vs({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: i
		}) {
			let {
				ixInstances: o,
				ixSession: a
			} = e.getState(), s = a.hasBoundaryNodes && r ? Re.getClosestElement(r, Ri) : null;
			(0, on.default)(o, c => {
				let d = (0, Ct.default)(c, "actionItem.config.target.boundaryMode"),
					E = n ? c.eventStateKey === n : !0;
				if (c.actionListId === i && c.eventId === t && E) {
					if (s && d && !Re.elementContains(s, c.element)) return;
					Es(c, e), c.verbose && e.dispatch((0, be.actionListPlaybackChanged)({
						actionListId: i,
						isPlaying: !1
					}))
				}
			})
		}

		function hs({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: i,
			groupIndex: o = 0,
			immediate: a,
			verbose: s
		}) {
			var c;
			let {
				ixData: d,
				ixSession: E
			} = e.getState(), {
				events: f
			} = d, _ = f[t] || {}, {
				mediaQueries: p = d.mediaQueryKeys
			} = _, g = (0, Ct.default)(d, `actionLists.${i}`, {}), {
				actionItemGroups: O,
				useFirstGroupAsInitialState: R
			} = g;
			if (!O || !O.length) return !1;
			o >= O.length && (0, Ct.default)(_, "config.loop") && (o = 0), o === 0 && R && o++;
			let x = (o === 0 || o === 1 && R) && cs((c = _.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? _.config.delay : void 0,
				S = (0, Ct.default)(O, [o, "actionItems"], []);
			if (!S.length || !xi(p, E.mediaQueryKey)) return !1;
			let L = E.hasBoundaryNodes && r ? Re.getClosestElement(r, Ri) : null,
				q = EV(S),
				P = !1;
			return S.forEach((V, j) => {
				let {
					config: Q,
					actionTypeId: oe
				} = V, re = ds(oe), {
					target: X
				} = Q;
				if (!X) return;
				let I = X.boundaryMode ? L : null;
				Ci({
					config: Q,
					event: _,
					eventTarget: r,
					elementRoot: I,
					elementApi: Re
				}).forEach((F, G) => {
					let $ = re ? ps(oe)(F, V) : null,
						ne = re ? wV(oe)(F, V) : null;
					P = !0;
					let M = q === j && G === 0,
						U = _V({
							element: F,
							actionItem: V
						}),
						K = fs({
							element: F,
							actionItem: V,
							elementApi: Re
						}, $);
					gs({
						store: e,
						element: F,
						actionItem: V,
						eventId: t,
						eventTarget: r,
						eventStateKey: n,
						actionListId: i,
						groupIndex: o,
						isCarrier: M,
						computedStyle: U,
						destination: K,
						immediate: a,
						verbose: s,
						pluginInstance: $,
						pluginDuration: ne,
						instanceDelay: x
					})
				})
			}), P
		}

		function gs(e) {
			var t;
			let {
				store: r,
				computedStyle: n
			} = e, i = (0, nV.default)(e, fV), {
				element: o,
				actionItem: a,
				immediate: s,
				pluginInstance: c,
				continuous: d,
				restingValue: E,
				eventId: f
			} = i, _ = !d, p = hV(), {
				ixElements: g,
				ixSession: O,
				ixData: R
			} = r.getState(), A = vV(g, o), {
				refState: x
			} = g[A] || {}, S = Re.getRefType(o), L = O.reducedMotion && nt.ReducedMotionTypes[a.actionTypeId], q;
			if (L && d) switch ((t = R.events[f]) === null || t === void 0 ? void 0 : t.eventTypeId) {
				case nt.EventTypeConsts.MOUSE_MOVE:
				case nt.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
					q = E;
					break;
				default:
					q = .5;
					break
			}
			let P = mV(o, x, n, a, Re, c);
			if (r.dispatch((0, be.instanceAdded)((0, rV.default)({
					instanceId: p,
					elementId: A,
					origin: P,
					refType: S,
					skipMotion: L,
					skipToValue: q
				}, i))), km(document.body, "ix2-animation-started", p), s) {
				QV(r, p);
				return
			}
			Ht({
				store: r,
				select: ({
					ixInstances: V
				}) => V[p],
				onChange: jm
			}), _ && r.dispatch((0, be.instanceStarted)(p, O.tick))
		}

		function Es(e, t) {
			km(document.body, "ix2-animation-stopping", {
				instanceId: e.id,
				state: t.getState()
			});
			let {
				elementId: r,
				actionItem: n
			} = e, {
				ixElements: i
			} = t.getState(), {
				ref: o,
				refType: a
			} = i[r] || {};
			a === Xm && OV(o, n, Re), t.dispatch((0, be.instanceRemoved)(e.id))
		}

		function km(e, t, r) {
			let n = document.createEvent("CustomEvent");
			n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
		}

		function QV(e, t) {
			let {
				ixParameters: r
			} = e.getState();
			e.dispatch((0, be.instanceStarted)(t, 0)), e.dispatch((0, be.animationFrameChanged)(performance.now(), r));
			let {
				ixInstances: n
			} = e.getState();
			jm(n[t], e)
		}

		function jm(e, t) {
			let {
				active: r,
				continuous: n,
				complete: i,
				elementId: o,
				actionItem: a,
				actionTypeId: s,
				renderType: c,
				current: d,
				groupIndex: E,
				eventId: f,
				eventTarget: _,
				eventStateKey: p,
				actionListId: g,
				isCarrier: O,
				styleProp: R,
				verbose: A,
				pluginInstance: x
			} = e, {
				ixData: S,
				ixSession: L
			} = t.getState(), {
				events: q
			} = S, P = q[f] || {}, {
				mediaQueries: V = S.mediaQueryKeys
			} = P;
			if (xi(V, L.mediaQueryKey) && (n || r || i)) {
				if (d || c === pV && i) {
					t.dispatch((0, be.elementStateChanged)(o, s, d, a));
					let {
						ixElements: j
					} = t.getState(), {
						ref: Q,
						refType: oe,
						refState: re
					} = j[o] || {}, X = re && re[s];
					switch (oe) {
						case Xm: {
							gV(Q, re, X, f, a, R, Re, c, x);
							break
						}
					}
				}
				if (i) {
					if (O) {
						let j = hs({
							store: t,
							eventId: f,
							eventTarget: _,
							eventStateKey: p,
							actionListId: g,
							groupIndex: E + 1,
							verbose: A
						});
						A && !j && t.dispatch((0, be.actionListPlaybackChanged)({
							actionListId: g,
							isPlaying: !1
						}))
					}
					Es(e, t)
				}
			}
		}
	});
	var zm = u(yt => {
		"use strict";
		var $V = Kt().default,
			ZV = ut().default;
		Object.defineProperty(yt, "__esModule", {
			value: !0
		});
		yt.actions = void 0;
		yt.destroy = Km;
		yt.init = nW;
		yt.setEnv = rW;
		yt.store = void 0;
		Dl();
		var JV = Yo(),
			eW = ZV($g()),
			_s = us(),
			tW = $V(gi());
		yt.actions = tW;
		var Li = (0, JV.createStore)(eW.default);
		yt.store = Li;

		function rW(e) {
			e() && (0, _s.observeRequests)(Li)
		}

		function nW(e) {
			Km(), (0, _s.startEngine)({
				store: Li,
				rawData: e,
				allowEvents: !0
			})
		}

		function Km() {
			(0, _s.stopEngine)(Li)
		}
	});
	var Zm = u((oK, $m) => {
		var Ym = ke(),
			Qm = zm();
		Qm.setEnv(Ym.env);
		Ym.define("ix2", $m.exports = function() {
			return Qm
		})
	});
	var ey = u((aK, Jm) => {
		var Ir = ke();
		Ir.define("links", Jm.exports = function(e, t) {
			var r = {},
				n = e(window),
				i, o = Ir.env(),
				a = window.location,
				s = document.createElement("a"),
				c = "w--current",
				d = /index\.(html|php)$/,
				E = /\/$/,
				f, _;
			r.ready = r.design = r.preview = p;

			function p() {
				i = o && Ir.env("design"), _ = Ir.env("slug") || a.pathname || "", Ir.scroll.off(O), f = [];
				for (var A = document.links, x = 0; x < A.length; ++x) g(A[x]);
				f.length && (Ir.scroll.on(O), O())
			}

			function g(A) {
				var x = i && A.getAttribute("href-disabled") || A.getAttribute("href");
				if (s.href = x, !(x.indexOf(":") >= 0)) {
					var S = e(A);
					if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
						if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
						var L = e(s.hash);
						L.length && f.push({
							link: S,
							sec: L,
							active: !1
						});
						return
					}
					if (!(x === "#" || x === "")) {
						var q = s.href === a.href || x === _ || d.test(x) && E.test(_);
						R(S, c, q)
					}
				}
			}

			function O() {
				var A = n.scrollTop(),
					x = n.height();
				t.each(f, function(S) {
					var L = S.link,
						q = S.sec,
						P = q.offset().top,
						V = q.outerHeight(),
						j = x * .5,
						Q = q.is(":visible") && P + V - j >= A && P + j <= A + x;
					S.active !== Q && (S.active = Q, R(L, c, Q))
				})
			}

			function R(A, x, S) {
				var L = A.hasClass(x);
				S && L || !S && !L || (S ? A.addClass(x) : A.removeClass(x))
			}
			return r
		})
	});
	var ry = u((sK, ty) => {
		var Pi = ke();
		Pi.define("scroll", ty.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = g() ? null : window.history,
				i = e(window),
				o = e(document),
				a = e(document.body),
				s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(X) {
					window.setTimeout(X, 15)
				},
				c = Pi.env("editor") ? ".w-editor-body" : "body",
				d = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
				E = 'a[href="#"]',
				f = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
				_ = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				p = document.createElement("style");
			p.appendChild(document.createTextNode(_));

			function g() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var O = /^#[a-zA-Z0-9][\w:.-]*$/;

			function R(X) {
				return O.test(X.hash) && X.host + X.pathname === r.host + r.pathname
			}
			let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function x() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches
			}

			function S(X, I) {
				var D;
				switch (I) {
					case "add":
						D = X.attr("tabindex"), D ? X.attr("data-wf-tabindex-swap", D) : X.attr("tabindex", "-1");
						break;
					case "remove":
						D = X.attr("data-wf-tabindex-swap"), D ? (X.attr("tabindex", D), X.removeAttr("data-wf-tabindex-swap")) : X.removeAttr("tabindex");
						break
				}
				X.toggleClass("wf-force-outline-none", I === "add")
			}

			function L(X) {
				var I = X.currentTarget;
				if (!(Pi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(I.className))) {
					var D = R(I) ? I.hash : "";
					if (D !== "") {
						var F = e(D);
						F.length && (X && (X.preventDefault(), X.stopPropagation()), q(D, X), window.setTimeout(function() {
							P(F, function() {
								S(F, "add"), F.get(0).focus({
									preventScroll: !0
								}), S(F, "remove")
							})
						}, X ? 0 : 300))
					}
				}
			}

			function q(X) {
				if (r.hash !== X && n && n.pushState && !(Pi.env.chrome && r.protocol === "file:")) {
					var I = n.state && n.state.hash;
					I !== X && n.pushState({
						hash: X
					}, "", X)
				}
			}

			function P(X, I) {
				var D = i.scrollTop(),
					F = V(X);
				if (D !== F) {
					var G = j(X, D, F),
						$ = Date.now(),
						ne = function() {
							var M = Date.now() - $;
							window.scroll(0, Q(D, F, M, G)), M <= G ? s(ne) : typeof I == "function" && I()
						};
					s(ne)
				}
			}

			function V(X) {
				var I = e(d),
					D = I.css("position") === "fixed" ? I.outerHeight() : 0,
					F = X.offset().top - D;
				if (X.data("scroll") === "mid") {
					var G = i.height() - D,
						$ = X.outerHeight();
					$ < G && (F -= Math.round((G - $) / 2))
				}
				return F
			}

			function j(X, I, D) {
				if (x()) return 0;
				var F = 1;
				return a.add(X).each(function(G, $) {
					var ne = parseFloat($.getAttribute("data-scroll-time"));
					!isNaN(ne) && ne >= 0 && (F = ne)
				}), (472.143 * Math.log(Math.abs(I - D) + 125) - 2e3) * F
			}

			function Q(X, I, D, F) {
				return D > F ? I : X + (I - X) * oe(D / F)
			}

			function oe(X) {
				return X < .5 ? 4 * X * X * X : (X - 1) * (2 * X - 2) * (2 * X - 2) + 1
			}

			function re() {
				var {
					WF_CLICK_EMPTY: X,
					WF_CLICK_SCROLL: I
				} = t;
				o.on(I, f, L), o.on(X, E, function(D) {
					D.preventDefault()
				}), document.head.insertBefore(p, document.head.firstChild)
			}
			return {
				ready: re
			}
		})
	});
	var iy = u((uK, ny) => {
		var iW = ke();
		iW.define("touch", ny.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(o) {
				return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
			};

			function n(o) {
				var a = !1,
					s = !1,
					c = Math.min(Math.round(window.innerWidth * .04), 40),
					d, E;
				o.addEventListener("touchstart", f, !1), o.addEventListener("touchmove", _, !1), o.addEventListener("touchend", p, !1), o.addEventListener("touchcancel", g, !1), o.addEventListener("mousedown", f, !1), o.addEventListener("mousemove", _, !1), o.addEventListener("mouseup", p, !1), o.addEventListener("mouseout", g, !1);

				function f(R) {
					var A = R.touches;
					A && A.length > 1 || (a = !0, A ? (s = !0, d = A[0].clientX) : d = R.clientX, E = d)
				}

				function _(R) {
					if (a) {
						if (s && R.type === "mousemove") {
							R.preventDefault(), R.stopPropagation();
							return
						}
						var A = R.touches,
							x = A ? A[0].clientX : R.clientX,
							S = x - E;
						E = x, Math.abs(S) > c && r && String(r()) === "" && (i("swipe", R, {
							direction: S > 0 ? "right" : "left"
						}), g())
					}
				}

				function p(R) {
					if (a && (a = !1, s && R.type === "mouseup")) {
						R.preventDefault(), R.stopPropagation(), s = !1;
						return
					}
				}

				function g() {
					a = !1
				}

				function O() {
					o.removeEventListener("touchstart", f, !1), o.removeEventListener("touchmove", _, !1), o.removeEventListener("touchend", p, !1), o.removeEventListener("touchcancel", g, !1), o.removeEventListener("mousedown", f, !1), o.removeEventListener("mousemove", _, !1), o.removeEventListener("mouseup", p, !1), o.removeEventListener("mouseout", g, !1), o = null
				}
				this.destroy = O
			}

			function i(o, a, s) {
				var c = e.Event(o, {
					originalEvent: a
				});
				e(a.target).trigger(c, s)
			}
			return t.instance = t.init(document), t
		})
	});
	var oy = u(ms => {
		"use strict";
		Object.defineProperty(ms, "__esModule", {
			value: !0
		});
		ms.default = oW;

		function oW(e, t, r, n, i, o, a, s, c, d, E, f, _) {
			return function(p) {
				e(p);
				var g = p.form,
					O = {
						name: g.attr("data-name") || g.attr("name") || "Untitled Form",
						pageId: g.attr("data-wf-page-id") || "",
						elementId: g.attr("data-wf-element-id") || "",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(g.html()),
						trackingCookies: n()
					};
				let R = g.attr("data-wf-flow");
				R && (O.wfFlow = R), i(p);
				var A = o(g, O.fields);
				if (A) return a(A);
				if (O.fileUploads = s(g), c(p), !d) {
					E(p);
					return
				}
				f.ajax({
					url: _,
					type: "POST",
					data: O,
					dataType: "json",
					crossDomain: !0
				}).done(function(x) {
					x && x.code === 200 && (p.success = !0), E(p)
				}).fail(function() {
					E(p)
				})
			}
		}
	});
	var sy = u((lK, ay) => {
		var Di = ke();
		Di.define("forms", ay.exports = function(e, t) {
			var r = {},
				n = e(document),
				i, o = window.location,
				a = window.XDomainRequest && !window.atob,
				s = ".w-form",
				c, d = /e(-)?mail/i,
				E = /^\S+@\S+$/,
				f = window.alert,
				_ = Di.env(),
				p, g, O, R = /list-manage[1-9]?.com/i,
				A = t.debounce(function() {
					f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				x(), !_ && !p && L()
			};

			function x() {
				c = e("html").attr("data-wf-site"), g = "https://webflow.com/api/v1/form/" + c, a && g.indexOf("https://webflow.com") >= 0 && (g = g.replace("https://webflow.com", "https://formdata.webflow.com")), O = `${g}/signFile`, i = e(s + " form"), i.length && i.each(S)
			}

			function S(M, U) {
				var K = e(U),
					v = e.data(U, s);
				v || (v = e.data(U, s, {
					form: K
				})), q(v);
				var y = K.closest("div.w-form");
				v.done = y.find("> .w-form-done"), v.fail = y.find("> .w-form-fail"), v.fileUploads = y.find(".w-file-upload"), v.fileUploads.each(function(ie) {
					G(ie, v)
				});
				var B = v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
				v.done.attr("aria-label") || v.form.attr("aria-label", B), v.done.attr("tabindex", "-1"), v.done.attr("role", "region"), v.done.attr("aria-label") || v.done.attr("aria-label", B + " success"), v.fail.attr("tabindex", "-1"), v.fail.attr("role", "region"), v.fail.attr("aria-label") || v.fail.attr("aria-label", B + " failure");
				var ee = v.action = K.attr("action");
				if (v.handler = null, v.redirect = K.attr("data-redirect"), R.test(ee)) {
					v.handler = I;
					return
				}
				if (!ee) {
					if (c) {
						v.handler = (() => {
							let ie = oy().default;
							return ie(q, o, Di, oe, F, V, f, j, P, c, D, e, g)
						})();
						return
					}
					A()
				}
			}

			function L() {
				p = !0, n.on("submit", s + " form", function(ie) {
					var Y = e.data(this, s);
					Y.handler && (Y.evt = ie, Y.handler(Y))
				});
				let M = ".w-checkbox-input",
					U = ".w-radio-input",
					K = "w--redirected-checked",
					v = "w--redirected-focus",
					y = "w--redirected-focus-visible",
					B = ":focus-visible, [data-wf-focus-visible]",
					ee = [
						["checkbox", M],
						["radio", U]
					];
				n.on("change", s + ' form input[type="checkbox"]:not(' + M + ")", ie => {
					e(ie.target).siblings(M).toggleClass(K)
				}), n.on("change", s + ' form input[type="radio"]', ie => {
					e(`input[name="${ie.target.name}"]:not(${M})`).map((J, Oe) => e(Oe).siblings(U).removeClass(K));
					let Y = e(ie.target);
					Y.hasClass("w-radio-input") || Y.siblings(U).addClass(K)
				}), ee.forEach(([ie, Y]) => {
					n.on("focus", s + ` form input[type="${ie}"]:not(` + Y + ")", J => {
						e(J.target).siblings(Y).addClass(v), e(J.target).filter(B).siblings(Y).addClass(y)
					}), n.on("blur", s + ` form input[type="${ie}"]:not(` + Y + ")", J => {
						e(J.target).siblings(Y).removeClass(`${v} ${y}`)
					})
				})
			}

			function q(M) {
				var U = M.btn = M.form.find(':input[type="submit"]');
				M.wait = M.btn.attr("data-wait") || null, M.success = !1, U.prop("disabled", !1), M.label && U.val(M.label)
			}

			function P(M) {
				var U = M.btn,
					K = M.wait;
				U.prop("disabled", !0), K && (M.label = U.val(), U.val(K))
			}

			function V(M, U) {
				var K = null;
				return U = U || {}, M.find(':input:not([type="submit"]):not([type="file"])').each(function(v, y) {
					var B = e(y),
						ee = B.attr("type"),
						ie = B.attr("data-name") || B.attr("name") || "Field " + (v + 1),
						Y = B.val();
					if (ee === "checkbox") Y = B.is(":checked");
					else if (ee === "radio") {
						if (U[ie] === null || typeof U[ie] == "string") return;
						Y = M.find('input[name="' + B.attr("name") + '"]:checked').val() || null
					}
					typeof Y == "string" && (Y = e.trim(Y)), U[ie] = Y, K = K || re(B, ee, ie, Y)
				}), K
			}

			function j(M) {
				var U = {};
				return M.find(':input[type="file"]').each(function(K, v) {
					var y = e(v),
						B = y.attr("data-name") || y.attr("name") || "File " + (K + 1),
						ee = y.attr("data-value");
					typeof ee == "string" && (ee = e.trim(ee)), U[B] = ee
				}), U
			}
			let Q = {
				_mkto_trk: "marketo"
			};

			function oe() {
				return document.cookie.split("; ").reduce(function(U, K) {
					let v = K.split("="),
						y = v[0];
					if (y in Q) {
						let B = Q[y],
							ee = v.slice(1).join("=");
						U[B] = ee
					}
					return U
				}, {})
			}

			function re(M, U, K, v) {
				var y = null;
				return U === "password" ? y = "Passwords cannot be submitted." : M.attr("required") ? v ? d.test(M.attr("type")) && (E.test(v) || (y = "Please enter a valid email address for: " + K)) : y = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !v && (y = "Please confirm you\u2019re not a robot."), y
			}

			function X(M) {
				F(M), D(M)
			}

			function I(M) {
				q(M);
				var U = M.form,
					K = {};
				if (/^https/.test(o.href) && !/^https/.test(M.action)) {
					U.attr("method", "post");
					return
				}
				F(M);
				var v = V(U, K);
				if (v) return f(v);
				P(M);
				var y;
				t.each(K, function(Y, J) {
					d.test(J) && (K.EMAIL = Y), /^((full[ _-]?)?name)$/i.test(J) && (y = Y), /^(first[ _-]?name)$/i.test(J) && (K.FNAME = Y), /^(last[ _-]?name)$/i.test(J) && (K.LNAME = Y)
				}), y && !K.FNAME && (y = y.split(" "), K.FNAME = y[0], K.LNAME = K.LNAME || y[1]);
				var B = M.action.replace("/post?", "/post-json?") + "&c=?",
					ee = B.indexOf("u=") + 2;
				ee = B.substring(ee, B.indexOf("&", ee));
				var ie = B.indexOf("id=") + 3;
				ie = B.substring(ie, B.indexOf("&", ie)), K["b_" + ee + "_" + ie] = "", e.ajax({
					url: B,
					data: K,
					dataType: "jsonp"
				}).done(function(Y) {
					M.success = Y.result === "success" || /already/.test(Y.msg), M.success || console.info("MailChimp error: " + Y.msg), D(M)
				}).fail(function() {
					D(M)
				})
			}

			function D(M) {
				var U = M.form,
					K = M.redirect,
					v = M.success;
				if (v && K) {
					Di.location(K);
					return
				}
				M.done.toggle(v), M.fail.toggle(!v), v ? M.done.focus() : M.fail.focus(), U.toggle(!v), q(M)
			}

			function F(M) {
				M.evt && M.evt.preventDefault(), M.evt = null
			}

			function G(M, U) {
				if (!U.fileUploads || !U.fileUploads[M]) return;
				var K, v = e(U.fileUploads[M]),
					y = v.find("> .w-file-upload-default"),
					B = v.find("> .w-file-upload-uploading"),
					ee = v.find("> .w-file-upload-success"),
					ie = v.find("> .w-file-upload-error"),
					Y = y.find(".w-file-upload-input"),
					J = y.find(".w-file-upload-label"),
					Oe = J.children(),
					fe = ie.find(".w-file-upload-error-msg"),
					h = ee.find(".w-file-upload-file"),
					W = ee.find(".w-file-remove-link"),
					z = h.find(".w-file-upload-file-name"),
					k = fe.attr("data-w-size-error"),
					ve = fe.attr("data-w-type-error"),
					ze = fe.attr("data-w-generic-error");
				if (_ || J.on("click keydown", function(T) {
						T.type === "keydown" && T.which !== 13 && T.which !== 32 || (T.preventDefault(), Y.click())
					}), J.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), _) Y.on("click", function(T) {
					T.preventDefault()
				}), J.on("click", function(T) {
					T.preventDefault()
				}), Oe.on("click", function(T) {
					T.preventDefault()
				});
				else {
					W.on("click keydown", function(T) {
						if (T.type === "keydown") {
							if (T.which !== 13 && T.which !== 32) return;
							T.preventDefault()
						}
						Y.removeAttr("data-value"), Y.val(""), z.html(""), y.toggle(!0), ee.toggle(!1), J.focus()
					}), Y.on("change", function(T) {
						K = T.target && T.target.files && T.target.files[0], K && (y.toggle(!1), ie.toggle(!1), B.toggle(!0), B.focus(), z.text(K.name), w() || P(U), U.fileUploads[M].uploading = !0, $(K, m))
					});
					var Ue = J.outerHeight();
					Y.height(Ue), Y.width(1)
				}

				function l(T) {
					var C = T.responseJSON && T.responseJSON.msg,
						Z = ze;
					typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0 ? Z = ve : typeof C == "string" && C.indexOf("MaxFileSizeError") === 0 && (Z = k), fe.text(Z), Y.removeAttr("data-value"), Y.val(""), B.toggle(!1), y.toggle(!0), ie.toggle(!0), ie.focus(), U.fileUploads[M].uploading = !1, w() || q(U)
				}

				function m(T, C) {
					if (T) return l(T);
					var Z = C.fileName,
						ae = C.postData,
						Ee = C.fileId,
						H = C.s3Url;
					Y.attr("data-value", Ee), ne(H, ae, K, Z, b)
				}

				function b(T) {
					if (T) return l(T);
					B.toggle(!1), ee.css("display", "inline-block"), ee.focus(), U.fileUploads[M].uploading = !1, w() || q(U)
				}

				function w() {
					var T = U.fileUploads && U.fileUploads.toArray() || [];
					return T.some(function(C) {
						return C.uploading
					})
				}
			}

			function $(M, U) {
				var K = new URLSearchParams({
					name: M.name,
					size: M.size
				});
				e.ajax({
					type: "GET",
					url: `${O}?${K}`,
					crossDomain: !0
				}).done(function(v) {
					U(null, v)
				}).fail(function(v) {
					U(v)
				})
			}

			function ne(M, U, K, v, y) {
				var B = new FormData;
				for (var ee in U) B.append(ee, U[ee]);
				B.append("file", K, v), e.ajax({
					type: "POST",
					url: M,
					data: B,
					processData: !1,
					contentType: !1
				}).done(function() {
					y(null)
				}).fail(function(ie) {
					y(ie)
				})
			}
			return r
		})
	});
	var ly = u((fK, cy) => {
		var ys = ke(),
			uy = "w-condition-invisible",
			aW = "." + uy;

		function sW(e) {
			return e.filter(function(t) {
				return !sn(t)
			})
		}

		function sn(e) {
			return !!(e.$el && e.$el.closest(aW).length)
		}

		function Is(e, t) {
			for (var r = e; r >= 0; r--)
				if (!sn(t[r])) return r;
			return -1
		}

		function Ts(e, t) {
			for (var r = e; r <= t.length - 1; r++)
				if (!sn(t[r])) return r;
			return -1
		}

		function uW(e, t) {
			return Is(e - 1, t) === -1
		}

		function cW(e, t) {
			return Ts(e + 1, t) === -1
		}

		function an(e, t) {
			e.attr("aria-label") || e.attr("aria-label", t)
		}

		function lW(e, t, r, n) {
			var i = r.tram,
				o = Array.isArray,
				a = "w-lightbox",
				s = a + "-",
				c = /(^|\s+)/g,
				d = [],
				E, f, _, p = [];

			function g(v, y) {
				return d = o(v) ? v : [v], f || g.build(), sW(d).length > 1 && (f.items = f.empty, d.forEach(function(B, ee) {
					var ie = U("thumbnail"),
						Y = U("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(ie);
					an(Y, `show item ${ee+1} of ${d.length}`), sn(B) && Y.addClass(uy), f.items = f.items.add(Y), oe(B.thumbnailUrl || B.url, function(J) {
						J.prop("width") > J.prop("height") ? G(J, "wide") : G(J, "tall"), ie.append(G(J, "thumbnail-image"))
					})
				}), f.strip.empty().append(f.items), G(f.content, "group")), i($(f.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
					opacity: 1
				}), G(f.html, "noscroll"), g.show(y || 0)
			}
			g.build = function() {
				return g.destroy(), f = {
					html: r(t.documentElement),
					empty: r()
				}, f.arrowLeft = U("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.arrowRight = U("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), f.close = U("control close").attr("role", "button"), an(f.arrowLeft, "previous image"), an(f.arrowRight, "next image"), an(f.close, "close lightbox"), f.spinner = U("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), f.strip = U("strip").attr("role", "tablist"), _ = new I(f.spinner, D("hide")), f.content = U("content").append(f.spinner, f.arrowLeft, f.arrowRight, f.close), f.container = U("container").append(f.content, f.strip), f.lightbox = U("backdrop hide").append(f.container), f.strip.on("click", F("item"), S), f.content.on("swipe", L).on("click", F("left"), R).on("click", F("right"), A).on("click", F("close"), x).on("click", F("image, caption"), A), f.container.on("click", F("view"), x).on("dragstart", F("img"), P), f.lightbox.on("keydown", V).on("focusin", q), r(n).append(f.lightbox), g
			}, g.destroy = function() {
				f && ($(f.html, "noscroll"), f.lightbox.remove(), f = void 0)
			}, g.show = function(v) {
				if (v !== E) {
					var y = d[v];
					if (!y) return g.hide();
					if (sn(y)) {
						if (v < E) {
							var B = Is(v - 1, d);
							v = B > -1 ? B : v
						} else {
							var ee = Ts(v + 1, d);
							v = ee > -1 ? ee : v
						}
						y = d[v]
					}
					var ie = E;
					E = v, f.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), _.show();
					var Y = y.html && K(y.width, y.height) || y.url;
					return oe(Y, function(J) {
						if (v !== E) return;
						var Oe = U("figure", "figure").append(G(J, "image")),
							fe = U("frame").append(Oe),
							h = U("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(fe),
							W, z;
						y.html && (W = r(y.html), z = W.is("iframe"), z && W.on("load", k), Oe.append(G(W, "embed"))), y.caption && Oe.append(U("caption", "figcaption").text(y.caption)), f.spinner.before(h), z || k();

						function k() {
							if (f.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), _.hide(), v !== E) {
								h.remove();
								return
							}
							let ve = uW(v, d);
							ne(f.arrowLeft, "inactive", ve), M(f.arrowLeft, ve), ve && f.arrowLeft.is(":focus") && f.arrowRight.focus();
							let ze = cW(v, d);
							if (ne(f.arrowRight, "inactive", ze), M(f.arrowRight, ze), ze && f.arrowRight.is(":focus") && f.arrowLeft.focus(), f.view ? (i(f.view).add("opacity .3s").start({
									opacity: 0
								}).then(re(f.view)), i(h).add("opacity .3s").add("transform .3s").set({
									x: v > ie ? "80px" : "-80px"
								}).start({
									opacity: 1,
									x: 0
								})) : h.css("opacity", 1), f.view = h, f.view.prop("tabIndex", 0), f.items) {
								$(f.items, "active"), f.items.removeAttr("aria-selected");
								var Ue = f.items.eq(v);
								G(Ue, "active"), Ue.attr("aria-selected", !0), X(Ue)
							}
						}
					}), f.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), p.length === 0 && (r("body").children().each(function() {
						r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (p.push({
							node: r(this),
							hidden: r(this).attr("aria-hidden"),
							tabIndex: r(this).attr("tabIndex")
						}), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
					}), f.close.focus()), g
				}
			}, g.hide = function() {
				return i(f.lightbox).add("opacity .3s").start({
					opacity: 0
				}).then(Q), g
			}, g.prev = function() {
				var v = Is(E - 1, d);
				v > -1 && g.show(v)
			}, g.next = function() {
				var v = Ts(E + 1, d);
				v > -1 && g.show(v)
			};

			function O(v) {
				return function(y) {
					this === y.target && (y.stopPropagation(), y.preventDefault(), v())
				}
			}
			var R = O(g.prev),
				A = O(g.next),
				x = O(g.hide),
				S = function(v) {
					var y = r(this).index();
					v.preventDefault(), g.show(y)
				},
				L = function(v, y) {
					v.preventDefault(), y.direction === "left" ? g.next() : y.direction === "right" && g.prev()
				},
				q = function() {
					this.focus()
				};

			function P(v) {
				v.preventDefault()
			}

			function V(v) {
				var y = v.keyCode;
				y === 27 || j(y, "close") ? g.hide() : y === 37 || j(y, "left") ? g.prev() : y === 39 || j(y, "right") ? g.next() : j(y, "item") && r(":focus").click()
			}

			function j(v, y) {
				if (v !== 13 && v !== 32) return !1;
				var B = r(":focus").attr("class"),
					ee = D(y).trim();
				return B.includes(ee)
			}

			function Q() {
				f && (f.strip.scrollLeft(0).empty(), $(f.html, "noscroll"), G(f.lightbox, "hide"), f.view && f.view.remove(), $(f.content, "group"), G(f.arrowLeft, "inactive"), G(f.arrowRight, "inactive"), E = f.view = void 0, p.forEach(function(v) {
					var y = v.node;
					y && (v.hidden ? y.attr("aria-hidden", v.hidden) : y.removeAttr("aria-hidden"), v.tabIndex ? y.attr("tabIndex", v.tabIndex) : y.removeAttr("tabIndex"))
				}), p = [], r(".active-lightbox").removeClass("active-lightbox").focus())
			}

			function oe(v, y) {
				var B = U("img", "img");
				return B.one("load", function() {
					y(B)
				}), B.attr("src", v), B
			}

			function re(v) {
				return function() {
					v.remove()
				}
			}

			function X(v) {
				var y = v.get(0),
					B = f.strip.get(0),
					ee = y.offsetLeft,
					ie = y.clientWidth,
					Y = B.scrollLeft,
					J = B.clientWidth,
					Oe = B.scrollWidth - J,
					fe;
				ee < Y ? fe = Math.max(0, ee + ie - J) : ee + ie > J + Y && (fe = Math.min(ee, Oe)), fe != null && i(f.strip).add("scroll-left 500ms").start({
					"scroll-left": fe
				})
			}

			function I(v, y, B) {
				this.$element = v, this.className = y, this.delay = B || 200, this.hide()
			}
			I.prototype.show = function() {
				var v = this;
				v.timeoutId || (v.timeoutId = setTimeout(function() {
					v.$element.removeClass(v.className), delete v.timeoutId
				}, v.delay))
			}, I.prototype.hide = function() {
				var v = this;
				if (v.timeoutId) {
					clearTimeout(v.timeoutId), delete v.timeoutId;
					return
				}
				v.$element.addClass(v.className)
			};

			function D(v, y) {
				return v.replace(c, (y ? " ." : " ") + s)
			}

			function F(v) {
				return D(v, !0)
			}

			function G(v, y) {
				return v.addClass(D(y))
			}

			function $(v, y) {
				return v.removeClass(D(y))
			}

			function ne(v, y, B) {
				return v.toggleClass(D(y), B)
			}

			function M(v, y) {
				return v.attr("aria-hidden", y).attr("tabIndex", y ? -1 : 0)
			}

			function U(v, y) {
				return G(r(t.createElement(y || "div")), v)
			}

			function K(v, y) {
				var B = '<svg xmlns="http://www.w3.org/2000/svg" width="' + v + '" height="' + y + '"/>';
				return "data:image/svg+xml;charset=utf-8," + encodeURI(B)
			}
			return function() {
				var v = e.navigator.userAgent,
					y = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
					B = v.match(y),
					ee = v.indexOf("Android ") > -1 && v.indexOf("Chrome") === -1;
				if (!ee && (!B || B[2] > 7)) return;
				var ie = t.createElement("style");
				t.head.appendChild(ie), e.addEventListener("resize", Y, !0);

				function Y() {
					var J = e.innerHeight,
						Oe = e.innerWidth,
						fe = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + J + "px}.w-lightbox-view {width:" + Oe + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * J + "px}.w-lightbox-image {max-width:" + Oe + "px;max-height:" + J + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * J + "px}.w-lightbox-strip {padding: 0 " + .01 * J + "px}.w-lightbox-item {width:" + .1 * J + "px;padding:" + .02 * J + "px " + .01 * J + "px}.w-lightbox-thumbnail {height:" + .1 * J + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * J + "px}.w-lightbox-content {margin-top:" + .02 * J + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * J + "px}.w-lightbox-image {max-width:" + .96 * Oe + "px;max-height:" + .96 * J + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * Oe + "px;max-height:" + .84 * J + "px}}";
					ie.textContent = fe
				}
				Y()
			}(), g
		}
		ys.define("lightbox", cy.exports = function(e) {
			var t = {},
				r = ys.env(),
				n = lW(window, document, e, r ? "#lightbox-mountpoint" : "body"),
				i = e(document),
				o, a, s = ".w-lightbox",
				c;
			t.ready = t.design = t.preview = d;

			function d() {
				a = r && ys.env("design"), n.destroy(), c = {}, o = i.find(s), o.webflowLightBox(), o.each(function() {
					an(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
				})
			}
			jQuery.fn.extend({
				webflowLightBox: function() {
					var p = this;
					e.each(p, function(g, O) {
						var R = e.data(O, s);
						R || (R = e.data(O, s, {
							el: e(O),
							mode: "images",
							images: [],
							embed: ""
						})), R.el.off(s), E(R), a ? R.el.on("setting" + s, E.bind(null, R)) : R.el.on("click" + s, f(R)).on("click" + s, function(A) {
							A.preventDefault()
						})
					})
				}
			});

			function E(p) {
				var g = p.el.children(".w-json").html(),
					O, R;
				if (!g) {
					p.items = [];
					return
				}
				try {
					g = JSON.parse(g)
				} catch (A) {
					console.error("Malformed lightbox JSON configuration.", A)
				}
				_(g), g.items.forEach(function(A) {
					A.$el = p.el
				}), O = g.group, O ? (R = c[O], R || (R = c[O] = []), p.items = R, g.items.length && (p.index = R.length, R.push.apply(R, g.items))) : (p.items = g.items, p.index = 0)
			}

			function f(p) {
				return function() {
					p.items.length && n(p.items, p.index || 0)
				}
			}

			function _(p) {
				p.images && (p.images.forEach(function(g) {
					g.type = "image"
				}), p.items = p.images), p.embed && (p.embed.type = "video", p.items = [p.embed]), p.groupId && (p.group = p.groupId)
			}
			return t
		})
	});
	var dy = u((dK, fy) => {
		var Nt = ke(),
			fW = Hi(),
			Pe = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		Nt.define("navbar", fy.exports = function(e, t) {
			var r = {},
				n = e.tram,
				i = e(window),
				o = e(document),
				a = t.debounce,
				s, c, d, E, f = Nt.env(),
				_ = '<div class="w-nav-overlay" data-wf-ignore />',
				p = ".w-nav",
				g = "w--open",
				O = "w--nav-dropdown-open",
				R = "w--nav-dropdown-toggle-open",
				A = "w--nav-dropdown-list-open",
				x = "w--nav-link-open",
				S = fW.triggers,
				L = e();
			r.ready = r.design = r.preview = q, r.destroy = function() {
				L = e(), P(), c && c.length && c.each(oe)
			};

			function q() {
				d = f && Nt.env("design"), E = Nt.env("editor"), s = e(document.body), c = o.find(p), c.length && (c.each(Q), P(), V())
			}

			function P() {
				Nt.resize.off(j)
			}

			function V() {
				Nt.resize.on(j)
			}

			function j() {
				c.each(y)
			}

			function Q(h, W) {
				var z = e(W),
					k = e.data(W, p);
				k || (k = e.data(W, p, {
					open: !1,
					el: z,
					config: {},
					selectedIdx: -1
				})), k.menu = z.find(".w-nav-menu"), k.links = k.menu.find(".w-nav-link"), k.dropdowns = k.menu.find(".w-dropdown"), k.dropdownToggle = k.menu.find(".w-dropdown-toggle"), k.dropdownList = k.menu.find(".w-dropdown-list"), k.button = z.find(".w-nav-button"), k.container = z.find(".w-container"), k.overlayContainerId = "w-nav-overlay-" + h, k.outside = K(k);
				var ve = z.find(".w-nav-brand");
				ve && ve.attr("href") === "/" && ve.attr("aria-label") == null && ve.attr("aria-label", "home"), k.button.attr("style", "-webkit-user-select: text;"), k.button.attr("aria-label") == null && k.button.attr("aria-label", "menu"), k.button.attr("role", "button"), k.button.attr("tabindex", "0"), k.button.attr("aria-controls", k.overlayContainerId), k.button.attr("aria-haspopup", "menu"), k.button.attr("aria-expanded", "false"), k.el.off(p), k.button.off(p), k.menu.off(p), I(k), d ? (re(k), k.el.on("setting" + p, D(k))) : (X(k), k.button.on("click" + p, M(k)), k.menu.on("click" + p, "a", U(k)), k.button.on("keydown" + p, F(k)), k.el.on("keydown" + p, G(k))), y(h, W)
			}

			function oe(h, W) {
				var z = e.data(W, p);
				z && (re(z), e.removeData(W, p))
			}

			function re(h) {
				h.overlay && (fe(h, !0), h.overlay.remove(), h.overlay = null)
			}

			function X(h) {
				h.overlay || (h.overlay = e(_).appendTo(h.el), h.overlay.attr("id", h.overlayContainerId), h.parent = h.menu.parent(), fe(h, !0))
			}

			function I(h) {
				var W = {},
					z = h.config || {},
					k = W.animation = h.el.attr("data-animation") || "default";
				W.animOver = /^over/.test(k), W.animDirect = /left$/.test(k) ? -1 : 1, z.animation !== k && h.open && t.defer(ne, h), W.easing = h.el.attr("data-easing") || "ease", W.easing2 = h.el.attr("data-easing2") || "ease";
				var ve = h.el.attr("data-duration");
				W.duration = ve != null ? Number(ve) : 400, W.docHeight = h.el.attr("data-doc-height"), h.config = W
			}

			function D(h) {
				return function(W, z) {
					z = z || {};
					var k = i.width();
					I(h), z.open === !0 && J(h, !0), z.open === !1 && fe(h, !0), h.open && t.defer(function() {
						k !== i.width() && ne(h)
					})
				}
			}

			function F(h) {
				return function(W) {
					switch (W.keyCode) {
						case Pe.SPACE:
						case Pe.ENTER:
							return M(h)(), W.preventDefault(), W.stopPropagation();
						case Pe.ESCAPE:
							return fe(h), W.preventDefault(), W.stopPropagation();
						case Pe.ARROW_RIGHT:
						case Pe.ARROW_DOWN:
						case Pe.HOME:
						case Pe.END:
							return h.open ? (W.keyCode === Pe.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, $(h), W.preventDefault(), W.stopPropagation()) : (W.preventDefault(), W.stopPropagation())
					}
				}
			}

			function G(h) {
				return function(W) {
					if (h.open) switch (h.selectedIdx = h.links.index(document.activeElement), W.keyCode) {
						case Pe.HOME:
						case Pe.END:
							return W.keyCode === Pe.END ? h.selectedIdx = h.links.length - 1 : h.selectedIdx = 0, $(h), W.preventDefault(), W.stopPropagation();
						case Pe.ESCAPE:
							return fe(h), h.button.focus(), W.preventDefault(), W.stopPropagation();
						case Pe.ARROW_LEFT:
						case Pe.ARROW_UP:
							return h.selectedIdx = Math.max(-1, h.selectedIdx - 1), $(h), W.preventDefault(), W.stopPropagation();
						case Pe.ARROW_RIGHT:
						case Pe.ARROW_DOWN:
							return h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1), $(h), W.preventDefault(), W.stopPropagation()
					}
				}
			}

			function $(h) {
				if (h.links[h.selectedIdx]) {
					var W = h.links[h.selectedIdx];
					W.focus(), U(W)
				}
			}

			function ne(h) {
				h.open && (fe(h, !0), J(h, !0))
			}

			function M(h) {
				return a(function() {
					h.open ? fe(h) : J(h)
				})
			}

			function U(h) {
				return function(W) {
					var z = e(this),
						k = z.attr("href");
					if (!Nt.validClick(W.currentTarget)) {
						W.preventDefault();
						return
					}
					k && k.indexOf("#") === 0 && h.open && fe(h)
				}
			}

			function K(h) {
				return h.outside && o.off("click" + p, h.outside),
					function(W) {
						var z = e(W.target);
						E && z.closest(".w-editor-bem-EditorOverlay").length || v(h, z)
					}
			}
			var v = a(function(h, W) {
				if (h.open) {
					var z = W.closest(".w-nav-menu");
					h.menu.is(z) || fe(h)
				}
			});

			function y(h, W) {
				var z = e.data(W, p),
					k = z.collapsed = z.button.css("display") !== "none";
				if (z.open && !k && !d && fe(z, !0), z.container.length) {
					var ve = ee(z);
					z.links.each(ve), z.dropdowns.each(ve)
				}
				z.open && Oe(z)
			}
			var B = "max-width";

			function ee(h) {
				var W = h.container.css(B);
				return W === "none" && (W = ""),
					function(z, k) {
						k = e(k), k.css(B, ""), k.css(B) === "none" && k.css(B, W)
					}
			}

			function ie(h, W) {
				W.setAttribute("data-nav-menu-open", "")
			}

			function Y(h, W) {
				W.removeAttribute("data-nav-menu-open")
			}

			function J(h, W) {
				if (h.open) return;
				h.open = !0, h.menu.each(ie), h.links.addClass(x), h.dropdowns.addClass(O), h.dropdownToggle.addClass(R), h.dropdownList.addClass(A), h.button.addClass(g);
				var z = h.config,
					k = z.animation;
				(k === "none" || !n.support.transform || z.duration <= 0) && (W = !0);
				var ve = Oe(h),
					ze = h.menu.outerHeight(!0),
					Ue = h.menu.outerWidth(!0),
					l = h.el.height(),
					m = h.el[0];
				if (y(0, m), S.intro(0, m), Nt.redraw.up(), d || o.on("click" + p, h.outside), W) {
					T();
					return
				}
				var b = "transform " + z.duration + "ms " + z.easing;
				if (h.overlay && (L = h.menu.prev(), h.overlay.show().append(h.menu)), z.animOver) {
					n(h.menu).add(b).set({
						x: z.animDirect * Ue,
						height: ve
					}).start({
						x: 0
					}).then(T), h.overlay && h.overlay.width(Ue);
					return
				}
				var w = l + ze;
				n(h.menu).add(b).set({
					y: -w
				}).start({
					y: 0
				}).then(T);

				function T() {
					h.button.attr("aria-expanded", "true")
				}
			}

			function Oe(h) {
				var W = h.config,
					z = W.docHeight ? o.height() : s.height();
				return W.animOver ? h.menu.height(z) : h.el.css("position") !== "fixed" && (z -= h.el.outerHeight(!0)), h.overlay && h.overlay.height(z), z
			}

			function fe(h, W) {
				if (!h.open) return;
				h.open = !1, h.button.removeClass(g);
				var z = h.config;
				if ((z.animation === "none" || !n.support.transform || z.duration <= 0) && (W = !0), S.outro(0, h.el[0]), o.off("click" + p, h.outside), W) {
					n(h.menu).stop(), m();
					return
				}
				var k = "transform " + z.duration + "ms " + z.easing2,
					ve = h.menu.outerHeight(!0),
					ze = h.menu.outerWidth(!0),
					Ue = h.el.height();
				if (z.animOver) {
					n(h.menu).add(k).start({
						x: ze * z.animDirect
					}).then(m);
					return
				}
				var l = Ue + ve;
				n(h.menu).add(k).start({
					y: -l
				}).then(m);

				function m() {
					h.menu.height(""), n(h.menu).set({
						x: 0,
						y: 0
					}), h.menu.each(Y), h.links.removeClass(x), h.dropdowns.removeClass(O), h.dropdownToggle.removeClass(R), h.dropdownList.removeClass(A), h.overlay && h.overlay.children().length && (L.length ? h.menu.insertAfter(L) : h.menu.prependTo(h.parent), h.overlay.attr("style", "").hide()), h.el.triggerHandler("w-close"), h.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	Ds();
	Fs();
	Xs();
	Ws();
	Hi();
	Zm();
	ey();
	ry();
	iy();
	sy();
	ly();
	dy();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e-3": {
			"id": "e-3",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-5",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-2"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597656969684
		},
		"e-4": {
			"id": "e-4",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-5"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".link",
				"originalId": "6459063c2e0aa635af7c1181|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".link",
				"originalId": "6459063c2e0aa635af7c1181|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597668426206
		},
		"e-5": {
			"id": "e-5",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-4",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-4"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".link",
				"originalId": "6459063c2e0aa635af7c1181|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".link",
				"originalId": "6459063c2e0aa635af7c1181|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597668426207
		},
		"e-6": {
			"id": "e-6",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-7"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597678890411
		},
		"e-7": {
			"id": "e-7",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-6"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597678890411
		},
		"e-10": {
			"id": "e-10",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-11"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".project-item",
				"originalId": "6459063c2e0aa635af7c1181|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-item",
				"originalId": "6459063c2e0aa635af7c1181|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597685480525
		},
		"e-11": {
			"id": "e-11",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-10"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".project-item",
				"originalId": "6459063c2e0aa635af7c1181|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-item",
				"originalId": "6459063c2e0aa635af7c1181|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597685480526
		},
		"e-14": {
			"id": "e-14",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-15"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".nav-link",
				"originalId": "6459063c2e0aa635af7c1181|bed729f5-ef26-ecb5-ce96-7096039fcd12",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".nav-link",
				"originalId": "6459063c2e0aa635af7c1181|bed729f5-ef26-ecb5-ce96-7096039fcd12",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597740634437
		},
		"e-15": {
			"id": "e-15",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-14"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".nav-link",
				"originalId": "6459063c2e0aa635af7c1181|bed729f5-ef26-ecb5-ce96-7096039fcd12",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".nav-link",
				"originalId": "6459063c2e0aa635af7c1181|bed729f5-ef26-ecb5-ce96-7096039fcd12",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1597740634438
		},
		"e-17": {
			"id": "e-17",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}],
			"createdOn": 1597765384390
		},
		"e-44": {
			"id": "e-44",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-22",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".skill-panel",
				"originalId": "6459063c2e0aa628777c1184|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".skill-panel",
				"originalId": "6459063c2e0aa628777c1184|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-22-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1598535640219
		},
		"e-48": {
			"id": "e-48",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-49"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".instagram-content",
				"originalId": "6459063c2e0aa628777c1184|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".instagram-content",
				"originalId": "6459063c2e0aa628777c1184|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598625875340
		},
		"e-49": {
			"id": "e-49",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-27",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-48"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".instagram-content",
				"originalId": "6459063c2e0aa628777c1184|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".instagram-content",
				"originalId": "6459063c2e0aa628777c1184|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598625875342
		},
		"e-52": {
			"id": "e-52",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-53"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598881389717
		},
		"e-53": {
			"id": "e-53",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-52"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598881389720
		},
		"e-54": {
			"id": "e-54",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-30",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-55"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598881971485
		},
		"e-56": {
			"id": "e-56",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1598883525798
		},
		"e-57": {
			"id": "e-57",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-58"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598883763781
		},
		"e-58": {
			"id": "e-58",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-57"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598883763821
		},
		"e-61": {
			"id": "e-61",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-62"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598884005050
		},
		"e-62": {
			"id": "e-62",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-61"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598884005089
		},
		"e-66": {
			"id": "e-66",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-32",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-67"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598886914390
		},
		"e-70": {
			"id": "e-70",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1598888846062
		},
		"e-71": {
			"id": "e-71",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-72"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598888859123
		},
		"e-72": {
			"id": "e-72",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-71"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598888859126
		},
		"e-73": {
			"id": "e-73",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_SCROLL",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-31",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd8721804f9b2",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-31-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1598889647646
		},
		"e-75": {
			"id": "e-75",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-76"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598955482641
		},
		"e-76": {
			"id": "e-76",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-75"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598955482645
		},
		"e-77": {
			"id": "e-77",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1598955496332
		},
		"e-78": {
			"id": "e-78",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-11",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-11-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-11-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1598955506178
		},
		"e-79": {
			"id": "e-79",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_SCROLL_UP",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-80"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598955535283
		},
		"e-80": {
			"id": "e-80",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_SCROLL_DOWN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-79"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6446e8134dbcd84a9f04f9b1",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598955535286
		},
		"e-96": {
			"id": "e-96",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-97"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".post-item",
				"originalId": "6459063c2e0aa66f697c1186|26d29e72-2966-c052-f3fb-cf221fb4942f",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".post-item",
				"originalId": "6459063c2e0aa66f697c1186|26d29e72-2966-c052-f3fb-cf221fb4942f",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598968970419
		},
		"e-97": {
			"id": "e-97",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-96"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".post-item",
				"originalId": "6459063c2e0aa66f697c1186|26d29e72-2966-c052-f3fb-cf221fb4942f",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".post-item",
				"originalId": "6459063c2e0aa66f697c1186|26d29e72-2966-c052-f3fb-cf221fb4942f",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1598968970423
		},
		"e-111": {
			"id": "e-111",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1598976591801
		},
		"e-136": {
			"id": "e-136",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-137"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".insta-content",
				"originalId": "6459063c2e0aa628777c1184|418bb44c-4439-0238-84f8-29dd865eae73",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".insta-content",
				"originalId": "6459063c2e0aa628777c1184|418bb44c-4439-0238-84f8-29dd865eae73",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599140872410
		},
		"e-137": {
			"id": "e-137",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-27",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-136"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".insta-content",
				"originalId": "6459063c2e0aa628777c1184|418bb44c-4439-0238-84f8-29dd865eae73",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".insta-content",
				"originalId": "6459063c2e0aa628777c1184|418bb44c-4439-0238-84f8-29dd865eae73",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599140872413
		},
		"e-138": {
			"id": "e-138",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-36",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"selector": ".insta-content",
				"originalId": "6459063c2e0aa628777c1184|50b51607-829b-abb6-529d-5019aeef85c4",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".insta-content",
				"originalId": "6459063c2e0aa628777c1184|50b51607-829b-abb6-529d-5019aeef85c4",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-36-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-36-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1599140940406
		},
		"e-241": {
			"id": "e-241",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-242"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491182824
		},
		"e-242": {
			"id": "e-242",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-241"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491182824
		},
		"e-243": {
			"id": "e-243",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-244"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|0421ca99-f121-2ab4-1770-40008572f6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|0421ca99-f121-2ab4-1770-40008572f6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491391497
		},
		"e-245": {
			"id": "e-245",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-246"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|b045dbb9-9d76-6475-2822-953f74d62c9f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|b045dbb9-9d76-6475-2822-953f74d62c9f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491397964
		},
		"e-247": {
			"id": "e-247",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-248"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|c7ede1a4-3a93-24be-f31c-72c67c6d4259",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|c7ede1a4-3a93-24be-f31c-72c67c6d4259",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491414672
		},
		"e-249": {
			"id": "e-249",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-250"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|473fb9b0-5fb0-e163-ca45-79a2de7aa271",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|473fb9b0-5fb0-e163-ca45-79a2de7aa271",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491422930
		},
		"e-253": {
			"id": "e-253",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-254"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|13f8cb45-605a-f22a-5ec2-0fd31296d88e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|13f8cb45-605a-f22a-5ec2-0fd31296d88e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491436992
		},
		"e-255": {
			"id": "e-255",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-256"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|b835d8c3-d34c-b72a-0f96-72bcbd9980a0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|b835d8c3-d34c-b72a-0f96-72bcbd9980a0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491443686
		},
		"e-257": {
			"id": "e-257",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-258"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|5be8af71-e51d-6657-8e2a-ad2ab0d69d43",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|5be8af71-e51d-6657-8e2a-ad2ab0d69d43",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491450391
		},
		"e-259": {
			"id": "e-259",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-260"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|1e7518aa-e895-994a-bccc-2fa1fbe7e2e3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|1e7518aa-e895-994a-bccc-2fa1fbe7e2e3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491463174
		},
		"e-261": {
			"id": "e-261",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-262"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|2ae9310b-62f4-7acf-96a2-cfb63a524ac5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|2ae9310b-62f4-7acf-96a2-cfb63a524ac5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491468909
		},
		"e-263": {
			"id": "e-263",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-264"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|8953bb65-ec6a-fa8d-2a65-989fe046821d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|8953bb65-ec6a-fa8d-2a65-989fe046821d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491474872
		},
		"e-265": {
			"id": "e-265",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-266"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|ea438f59-7b0a-018a-2a5f-d127feb4896b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|ea438f59-7b0a-018a-2a5f-d127feb4896b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491479945
		},
		"e-269": {
			"id": "e-269",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-270"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|0e78452f-bdab-7657-a0f9-33a96cbf0dbe",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|0e78452f-bdab-7657-a0f9-33a96cbf0dbe",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491502031
		},
		"e-295": {
			"id": "e-295",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-296"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491670848
		},
		"e-296": {
			"id": "e-296",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-295"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491670848
		},
		"e-299": {
			"id": "e-299",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1599491670848
		},
		"e-300": {
			"id": "e-300",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-301"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa631727c1187|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491670848
		},
		"e-301": {
			"id": "e-301",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-300"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa631727c1187|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491670848
		},
		"e-322": {
			"id": "e-322",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-323"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491770402
		},
		"e-323": {
			"id": "e-323",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-322"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491770402
		},
		"e-326": {
			"id": "e-326",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1599491770402
		},
		"e-327": {
			"id": "e-327",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-328"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491770402
		},
		"e-328": {
			"id": "e-328",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-327"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491770402
		},
		"e-335": {
			"id": "e-335",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-336"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b|13f8cb45-605a-f22a-5ec2-0fd31296d88e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b|13f8cb45-605a-f22a-5ec2-0fd31296d88e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599491770402
		},
		"e-345": {
			"id": "e-345",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-346"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".category-acronym",
				"originalId": "6459063c2e0aa635af7c1181|3120f182-d5a1-3427-75e4-ac4b41d54a4f",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".category-acronym",
				"originalId": "6459063c2e0aa635af7c1181|3120f182-d5a1-3427-75e4-ac4b41d54a4f",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1599566650964
		},
		"e-351": {
			"id": "e-351",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-352"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1600701904782
		},
		"e-352": {
			"id": "e-352",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-351"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1600701904799
		},
		"e-353": {
			"id": "e-353",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1600701937076
		},
		"e-356": {
			"id": "e-356",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1600702062720
		},
		"e-357": {
			"id": "e-357",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-358"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".licensing-card",
				"originalId": "6459063c2e0aa686877c118b|b8aa41b4-d53e-73d8-d43e-ea324ea22163",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".licensing-card",
				"originalId": "6459063c2e0aa686877c118b|b8aa41b4-d53e-73d8-d43e-ea324ea22163",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1604868307386
		},
		"e-359": {
			"id": "e-359",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-360"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b|04301f2e-76c4-ab68-7f6b-a8f3ab5b801f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b|04301f2e-76c4-ab68-7f6b-a8f3ab5b801f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1604868321830
		},
		"e-361": {
			"id": "e-361",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-362"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|32967b20-7e59-b07f-7197-75486cc3cef6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|32967b20-7e59-b07f-7197-75486cc3cef6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1604868457686
		},
		"e-367": {
			"id": "e-367",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-368"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|554ccfea-8217-66b2-994b-da65f46200c2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|554ccfea-8217-66b2-994b-da65f46200c2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1604868982315
		},
		"e-380": {
			"id": "e-380",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-40",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["medium", "small", "tiny"],
			"target": {
				"selector": ".project-item-style-2",
				"originalId": "6459063c2e0aa614b87c118c|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-item-style-2",
				"originalId": "6459063c2e0aa614b87c118c|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			}],
			"config": [{
				"continuousParameterGroupId": "a-40-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1604874227081
		},
		"e-381": {
			"id": "e-381",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-41",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-382"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|03767250-4747-1a37-7919-5f91ac141cc1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|03767250-4747-1a37-7919-5f91ac141cc1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1674658549392
		},
		"e-385": {
			"id": "e-385",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-44",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-44-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 95,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-44-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 95,
				"restingState": 50
			}],
			"createdOn": 1682686821693
		},
		"e-394": {
			"id": "e-394",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-45",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-395"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682723140913
		},
		"e-448": {
			"id": "e-448",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-3",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-449"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".footer-link",
				"originalId": "99bc6bd0-837d-9882-425d-1889465cdbcf",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".footer-link",
				"originalId": "99bc6bd0-837d-9882-425d-1889465cdbcf",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682775383933
		},
		"e-449": {
			"id": "e-449",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-4",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-448"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".footer-link",
				"originalId": "99bc6bd0-837d-9882-425d-1889465cdbcf",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".footer-link",
				"originalId": "99bc6bd0-837d-9882-425d-1889465cdbcf",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682775383936
		},
		"e-450": {
			"id": "e-450",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-451"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "99bc6bd0-837d-9882-425d-1889465cdbcd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "99bc6bd0-837d-9882-425d-1889465cdbcd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682775437889
		},
		"e-452": {
			"id": "e-452",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-47",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-453"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682776209145
		},
		"e-453": {
			"id": "e-453",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-48",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-452"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682776209151
		},
		"e-456": {
			"id": "e-456",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-457"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".link",
				"originalId": "b4dfb46b-28cb-c5d8-5d7b-54676e754f5e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"id": "b4dfb46b-28cb-c5d8-5d7b-54676e754f5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682783073895
		},
		"e-462": {
			"id": "e-462",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-49",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-463"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "4dd8c8ec-1b5d-05d3-dd9a-96cf51a80cb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "4dd8c8ec-1b5d-05d3-dd9a-96cf51a80cb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682783472607
		},
		"e-463": {
			"id": "e-463",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-50",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-462"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "4dd8c8ec-1b5d-05d3-dd9a-96cf51a80cb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "4dd8c8ec-1b5d-05d3-dd9a-96cf51a80cb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682783472619
		},
		"e-464": {
			"id": "e-464",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-51",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|c9c35157-659a-a397-42da-e25eae7ba11f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|c9c35157-659a-a397-42da-e25eae7ba11f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-51-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1682784336707
		},
		"e-465": {
			"id": "e-465",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-51",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|9b6220f3-086b-7a61-a696-108d3ed4ba62",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|9b6220f3-086b-7a61-a696-108d3ed4ba62",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-51-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1682784516813
		},
		"e-466": {
			"id": "e-466",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-51",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|f30264b6-074d-16c3-3e74-dce62f7d26b2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|f30264b6-074d-16c3-3e74-dce62f7d26b2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-51-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1682784580045
		},
		"e-467": {
			"id": "e-467",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-468"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|f30264b6-074d-16c3-3e74-dce62f7d26b4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|f30264b6-074d-16c3-3e74-dce62f7d26b4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682784607933
		},
		"e-469": {
			"id": "e-469",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-470"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96015",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96015",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682785277125
		},
		"e-471": {
			"id": "e-471",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-472"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa631727c1187|4f27ca08-0fda-cecf-ef60-797126c7be85",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187|4f27ca08-0fda-cecf-ef60-797126c7be85",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682785547881
		},
		"e-473": {
			"id": "e-473",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-474"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".utility-page-wrap",
				"originalId": "6459063c2e0aa63e097c1182|5f4d0766ea16b9eae5a8cfddaN",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".utility-page-wrap",
				"originalId": "6459063c2e0aa63e097c1182|5f4d0766ea16b9eae5a8cfddaN",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682793079002
		},
		"e-475": {
			"id": "e-475",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-52",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-476"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".next-project-link",
				"originalId": "6459063c2e0aa664f77c1189|2782f212-4a53-4cfa-492e-e03a2fd2f58c",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".next-project-link",
				"originalId": "6459063c2e0aa664f77c1189|2782f212-4a53-4cfa-492e-e03a2fd2f58c",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682794128792
		},
		"e-476": {
			"id": "e-476",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-53",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-475"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".next-project-link",
				"originalId": "6459063c2e0aa664f77c1189|2782f212-4a53-4cfa-492e-e03a2fd2f58c",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".next-project-link",
				"originalId": "6459063c2e0aa664f77c1189|2782f212-4a53-4cfa-492e-e03a2fd2f58c",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682794128794
		},
		"e-479": {
			"id": "e-479",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-480"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".project-grid-content",
				"originalId": "6459063c2e0aa664f77c1189|fe7ffcb7-f360-286d-0f0f-8ffafcc7ce68",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-grid-content",
				"originalId": "6459063c2e0aa664f77c1189|fe7ffcb7-f360-286d-0f0f-8ffafcc7ce68",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682864561198
		},
		"e-481": {
			"id": "e-481",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-482"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9ce",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9ce",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-483": {
			"id": "e-483",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-484"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-485": {
			"id": "e-485",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-486"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-487": {
			"id": "e-487",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-488"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-489": {
			"id": "e-489",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-490"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-491": {
			"id": "e-491",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-492"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9d8",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-493": {
			"id": "e-493",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-494"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9da",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9da",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-495": {
			"id": "e-495",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-496"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9dc",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9dc",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-497": {
			"id": "e-497",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-498"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9e0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-499": {
			"id": "e-499",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-500"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-501": {
			"id": "e-501",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-502"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9e5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9e5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-503": {
			"id": "e-503",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-504"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9ea",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9ea",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-505": {
			"id": "e-505",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-506"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9ec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d|e77866d1-010c-08fb-6b04-561b98b0d9ec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682871243071
		},
		"e-507": {
			"id": "e-507",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-54",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-508"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682872477821
		},
		"e-511": {
			"id": "e-511",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-512"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".project-image-grid-item",
				"originalId": "6459063c2e0aa664f77c1189|9b3a42ab-3476-4413-ad4b-27f5b6ad3dbd",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-image-grid-item",
				"originalId": "6459063c2e0aa664f77c1189|9b3a42ab-3476-4413-ad4b-27f5b6ad3dbd",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682890843508
		},
		"e-513": {
			"id": "e-513",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-514"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189|6cbb0718-0bf1-1f76-0b13-292e885b41c5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189|6cbb0718-0bf1-1f76-0b13-292e885b41c5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682890859085
		},
		"e-515": {
			"id": "e-515",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "PAGE_START",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-516"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682892179856
		},
		"e-516": {
			"id": "e-516",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-515"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682892179856
		},
		"e-519": {
			"id": "e-519",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-15",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-15-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-15-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "VIEWPORT",
				"reverse": false,
				"smoothing": 50,
				"restingState": 50
			}],
			"createdOn": 1682892179856
		},
		"e-520": {
			"id": "e-520",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-521"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682892179856
		},
		"e-521": {
			"id": "e-521",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-520"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a|05953480-8571-f84b-7200-0618e2b06cbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682892179856
		},
		"e-522": {
			"id": "e-522",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-523"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".instruction-item",
				"originalId": "6459063c2e0aa6a1b37c118a|1e97aa5c-246f-bb59-fb60-13d8e97efa2b",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".instruction-item",
				"originalId": "6459063c2e0aa6a1b37c118a|1e97aa5c-246f-bb59-fb60-13d8e97efa2b",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682892988831
		},
		"e-524": {
			"id": "e-524",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-49",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-525"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6b7dc550-b224-cb24-28d4-90dc56923720",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6b7dc550-b224-cb24-28d4-90dc56923720",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682932581519
		},
		"e-525": {
			"id": "e-525",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-50",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-524"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6b7dc550-b224-cb24-28d4-90dc56923720",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6b7dc550-b224-cb24-28d4-90dc56923720",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682932581519
		},
		"e-526": {
			"id": "e-526",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-527"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".project-item-content-holder",
				"originalId": "6459063c2e0aa635af7c1181|d15eb2fa-6d33-3a72-4674-01fc4814144e",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-item-content-holder",
				"originalId": "6459063c2e0aa635af7c1181|d15eb2fa-6d33-3a72-4674-01fc4814144e",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682935878420
		},
		"e-528": {
			"id": "e-528",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-529"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".project-item-title",
				"originalId": "6459063c2e0aa635af7c1181|804825c8-8eb4-541e-6bd5-f129a6f07a40",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-item-title",
				"originalId": "6459063c2e0aa635af7c1181|804825c8-8eb4-541e-6bd5-f129a6f07a40",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1682935992413
		},
		"e-531": {
			"id": "e-531",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-530"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683560367047
		},
		"e-532": {
			"id": "e-532",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-56",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|c50d35a4-afc5-52b4-4df2-051165d5d057",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|c50d35a4-afc5-52b4-4df2-051165d5d057",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-56-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-56-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}],
			"createdOn": 1683578262358
		},
		"e-533": {
			"id": "e-533",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-57",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-534"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|c50d35a4-afc5-52b4-4df2-051165d5d057",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|c50d35a4-afc5-52b4-4df2-051165d5d057",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683578376432
		},
		"e-534": {
			"id": "e-534",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-58",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-533"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|c50d35a4-afc5-52b4-4df2-051165d5d057",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|c50d35a4-afc5-52b4-4df2-051165d5d057",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683578376435
		},
		"e-535": {
			"id": "e-535",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-59",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-536"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683578754705
		},
		"e-537": {
			"id": "e-537",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_MOVE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-60",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-60-p",
				"selectedAxis": "X_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}, {
				"continuousParameterGroupId": "a-60-p-2",
				"selectedAxis": "Y_AXIS",
				"basedOn": "ELEMENT",
				"reverse": false,
				"smoothing": 90,
				"restingState": 50
			}],
			"createdOn": 1683579137000
		},
		"e-538": {
			"id": "e-538",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-61",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-539"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683579744656
		},
		"e-539": {
			"id": "e-539",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-62",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-538"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683579744658
		},
		"e-542": {
			"id": "e-542",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-43",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-543"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|feaaad3a-5701-20d1-95b7-ad90a8770f0c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|feaaad3a-5701-20d1-95b7-ad90a8770f0c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683580096425
		},
		"e-547": {
			"id": "e-547",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-546"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683625290342
		},
		"e-549": {
			"id": "e-549",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-548"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683629398365
		},
		"e-551": {
			"id": "e-551",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-550"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683629425253
		},
		"e-553": {
			"id": "e-553",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-552"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683629443223
		},
		"e-555": {
			"id": "e-555",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-554"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683629460920
		},
		"e-557": {
			"id": "e-557",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-556"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683629471676
		},
		"e-559": {
			"id": "e-559",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-558"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683629482853
		},
		"e-561": {
			"id": "e-561",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-560"
				}
			},
			"mediaQueries": ["main"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683629493739
		},
		"e-562": {
			"id": "e-562",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-65",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181|e7900c2b-f352-bc3f-9059-0de98acb9930",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181|e7900c2b-f352-bc3f-9059-0de98acb9930",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-65-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1683630436750
		},
		"e-563": {
			"id": "e-563",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-66",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-564"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".project-item",
				"originalId": "6459063c2e0aa635af7c1181|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".project-item",
				"originalId": "6459063c2e0aa635af7c1181|bc835b08-adcf-9322-7277-95514d102f86",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683647322053
		},
		"e-565": {
			"id": "e-565",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-67",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-566"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189|d8019052-bc6d-5eda-e625-2caaa9954a4f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189|d8019052-bc6d-5eda-e625-2caaa9954a4f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683648035486
		},
		"e-568": {
			"id": "e-568",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-45",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-567"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683648260699
		},
		"e-569": {
			"id": "e-569",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-68",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-570"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189|2455e615-1945-37c6-ad17-867aa6af55e4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189|2455e615-1945-37c6-ad17-867aa6af55e4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683648328457
		},
		"e-571": {
			"id": "e-571",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-69",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-572"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189|042f6ff2-5734-8569-e63a-65d42bc4a2d0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189|042f6ff2-5734-8569-e63a-65d42bc4a2d0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683648348398
		},
		"e-573": {
			"id": "e-573",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-574"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189|eec2cb76-4601-0b42-f403-54316ddb34f4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189|eec2cb76-4601-0b42-f403-54316ddb34f4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683648430149
		},
		"e-576": {
			"id": "e-576",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-575"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683648746496
		},
		"e-578": {
			"id": "e-578",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-577"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa635af7c1181",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683659328721
		},
		"e-579": {
			"id": "e-579",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-580"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "ac2cc3cd-f83c-9e17-55d3-1dcffcf64bb1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "ac2cc3cd-f83c-9e17-55d3-1dcffcf64bb1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683665377136
		},
		"e-581": {
			"id": "e-581",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-71",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "11576921-6174-120d-dc56-73299d94491f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "11576921-6174-120d-dc56-73299d94491f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-71-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": false,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1683666646494
		},
		"e-583": {
			"id": "e-583",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-582"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683666840216
		},
		"e-585": {
			"id": "e-585",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-584"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683666862676
		},
		"e-587": {
			"id": "e-587",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-586"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683666875377
		},
		"e-589": {
			"id": "e-589",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-588"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683666894379
		},
		"e-591": {
			"id": "e-591",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-590"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683666910961
		},
		"e-593": {
			"id": "e-593",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-592"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683666923310
		},
		"e-595": {
			"id": "e-595",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-594"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa664f77c1189",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683728583730
		},
		"e-597": {
			"id": "e-597",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-596"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa63e097c1182",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683728603819
		},
		"e-599": {
			"id": "e-599",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-598"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa61f757c1183",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683728618944
		},
		"e-601": {
			"id": "e-601",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-600"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa6a1b37c118a",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683728632026
		},
		"e-603": {
			"id": "e-603",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-602"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa686877c118b",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683728647648
		},
		"e-605": {
			"id": "e-605",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-604"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa631727c1187",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683728660562
		},
		"e-607": {
			"id": "e-607",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "PAGE_FINISH",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-606"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6459063c2e0aa67b3a7c118d",
				"appliesTo": "PAGE",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1683728670628
		}
	},
	"actionLists": {
		"a-5": {
			"id": "a-5",
			"title": "Show Hero content on Load",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-5-n-20",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".container.nav-container",
							"selectorGuids": ["e03d17b1-1158-a795-02c0-056108d09a31", "dd0557b3-67c9-0059-d111-963fe1919bb1"]
						},
						"yValue": -20,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-23",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".container.nav-container",
							"selectorGuids": ["e03d17b1-1158-a795-02c0-056108d09a31", "dd0557b3-67c9-0059-d111-963fe1919bb1"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-5-n-25",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".container.nav-container",
							"selectorGuids": ["e03d17b1-1158-a795-02c0-056108d09a31", "dd0557b3-67c9-0059-d111-963fe1919bb1"]
						},
						"xValue": 0.95,
						"yValue": 0.95,
						"locked": true
					}
				}, {
					"id": "a-5-n-28",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-description",
							"selectorGuids": ["760b6689-f24e-4d71-5faa-3e85a329a1c6"]
						},
						"xValue": null,
						"yValue": 30,
						"xUnit": "px",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-29",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-description",
							"selectorGuids": ["760b6689-f24e-4d71-5faa-3e85a329a1c6"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-5-n-36",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".links-holder",
							"selectorGuids": ["4e624a3f-b301-fd0b-d835-77315ad40e34"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-5-n-42",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-line-parent-text-holder",
							"selectorGuids": ["0126a298-2533-b4bd-1acf-1764513a4b1f"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-5-n-44",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-line-main-holder.right-to-left",
							"selectorGuids": ["4b64aa96-da25-df52-e229-7f364b585117", "39ccedb9-21a6-b47a-7a72-57cfeb466fdd"]
						},
						"xValue": 150,
						"xUnit": "vw",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-46",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-line-main-holder.left-to-right",
							"selectorGuids": ["4b64aa96-da25-df52-e229-7f364b585117", "2775ffbc-0f26-2a6b-7e89-391d5d8aaa76"]
						},
						"xValue": -150,
						"xUnit": "vw",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-5-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-5-n-21",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1010,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"selector": ".container.nav-container",
							"selectorGuids": ["e03d17b1-1158-a795-02c0-056108d09a31", "dd0557b3-67c9-0059-d111-963fe1919bb1"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-24",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1010,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"selector": ".container.nav-container",
							"selectorGuids": ["e03d17b1-1158-a795-02c0-056108d09a31", "dd0557b3-67c9-0059-d111-963fe1919bb1"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-5-n-26",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1010,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"selector": ".container.nav-container",
							"selectorGuids": ["e03d17b1-1158-a795-02c0-056108d09a31", "dd0557b3-67c9-0059-d111-963fe1919bb1"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-5-n-37",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1700,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".links-holder",
							"selectorGuids": ["4e624a3f-b301-fd0b-d835-77315ad40e34"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-5-n-45",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 2000,
						"easing": "ease",
						"duration": 2000,
						"target": {
							"selector": ".hero-line-main-holder.right-to-left",
							"selectorGuids": ["4b64aa96-da25-df52-e229-7f364b585117", "39ccedb9-21a6-b47a-7a72-57cfeb466fdd"]
						},
						"xValue": 0,
						"xUnit": "vw",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-47",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 2000,
						"easing": "ease",
						"duration": 2000,
						"target": {
							"selector": ".hero-line-main-holder.left-to-right",
							"selectorGuids": ["4b64aa96-da25-df52-e229-7f364b585117", "2775ffbc-0f26-2a6b-7e89-391d5d8aaa76"]
						},
						"xValue": 0,
						"xUnit": "vw",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-30",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 2000,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"selector": ".hero-description",
							"selectorGuids": ["760b6689-f24e-4d71-5faa-3e85a329a1c6"]
						},
						"xValue": null,
						"yValue": 0,
						"xUnit": "px",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-5-n-31",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 2000,
						"easing": "ease",
						"duration": 1000,
						"target": {
							"selector": ".hero-description",
							"selectorGuids": ["760b6689-f24e-4d71-5faa-3e85a329a1c6"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-5-n-43",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 3000,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".hero-line-parent-text-holder",
							"selectorGuids": ["0126a298-2533-b4bd-1acf-1764513a4b1f"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1597657002522
		},
		"a-3": {
			"id": "a-3",
			"title": "Link Display Text Animated",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-3-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-3-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"xValue": 0,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-3-n-7",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-3-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text-anim-holder",
							"selectorGuids": ["f7e59585-18f6-95af-9284-947ad7119a72"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-3-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text-anim-holder",
							"selectorGuids": ["f7e59585-18f6-95af-9284-947ad7119a72"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-3-n-8",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-3-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-3-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"xValue": -30,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1597668431110
		},
		"a-4": {
			"id": "a-4",
			"title": "Hide Link Animation Text",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-4-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-4-n-3",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-4-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text.main-link-text",
							"selectorGuids": ["a7c007a2-ed21-0617-a59e-d84915837a79", "211b6841-1866-49aa-6193-c7c7257f54c9"]
						},
						"xValue": 0,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-4-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".link-text-anim-holder",
							"selectorGuids": ["f7e59585-18f6-95af-9284-947ad7119a72"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1597668431110
		},
		"a-6": {
			"id": "a-6",
			"title": "Page On Loading",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-6-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".fixed-nav",
							"selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-6-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".animonload-right",
							"selectorGuids": ["629e1b24-8b66-bc31-e380-491b4e30774d"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-6-n-5",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".animonload-right",
							"selectorGuids": ["629e1b24-8b66-bc31-e380-491b4e30774d"]
						},
						"value": "block"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1597678893336
		},
		"a-19": {
			"id": "a-19",
			"title": "Page Load Done",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-19-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".fixed-nav",
							"selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-19-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 800,
						"target": {
							"selector": ".animonload-right",
							"selectorGuids": ["629e1b24-8b66-bc31-e380-491b4e30774d"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1597678893336
		},
		"a-9": {
			"id": "a-9",
			"title": "Project Item Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-images-secondary",
							"selectorGuids": ["dfd123f9-018f-d0f3-42b8-c0b2541ab391"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-9-n-7",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-thumb",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-images-secondary",
							"selectorGuids": ["dfd123f9-018f-d0f3-42b8-c0b2541ab391"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-9-n-8",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "inOutSine",
						"duration": 2000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-thumb",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc"]
						},
						"xValue": 1.1,
						"yValue": 1.1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1597685484841
		},
		"a-10": {
			"id": "a-10",
			"title": "Project Item Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-images-secondary",
							"selectorGuids": ["dfd123f9-018f-d0f3-42b8-c0b2541ab391"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-10-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "inOutSine",
						"duration": 1000,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-thumb",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1597685484841
		},
		"a-12": {
			"id": "a-12",
			"title": "Display Icon On Nav Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-12-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {},
						"xValue": -10,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-12-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": -20,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {},
						"xValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-12-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1597740637889
		},
		"a-13": {
			"id": "a-13",
			"title": "Hide Icon On Nav Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-13-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {},
						"xValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-13-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": -10,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-13-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1597740637889
		},
		"a-15": {
			"id": "a-15",
			"title": "Lets Talk Mouse Track on Move",
			"continuousParameterGroups": [{
				"id": "a-15-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-15-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".lets-talk-link",
								"selectorGuids": ["16756986-f152-7b29-873a-9771e452d116"]
							},
							"xValue": -20,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-15-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".lets-talk-link",
								"selectorGuids": ["16756986-f152-7b29-873a-9771e452d116"]
							},
							"xValue": 20,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-15-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-15-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".lets-talk-link",
								"selectorGuids": ["16756986-f152-7b29-873a-9771e452d116"]
							},
							"yValue": -20,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-15-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".lets-talk-link",
								"selectorGuids": ["16756986-f152-7b29-873a-9771e452d116"]
							},
							"yValue": 20,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1597765389234
		},
		"a-22": {
			"id": "a-22",
			"title": "Gray Text On Scroll",
			"continuousParameterGroups": [{
				"id": "a-22-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-22-n",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
							},
							"value": 0.2,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 36,
					"actionItems": [{
						"id": "a-22-n-4",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
							},
							"value": 0.2,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 50,
					"actionItems": [{
						"id": "a-22-n-3",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
							},
							"value": 1,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 64,
					"actionItems": [{
						"id": "a-22-n-5",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
							},
							"value": 0.2,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-22-n-2",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
							},
							"value": 0.2,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1598535643789
		},
		"a-26": {
			"id": "a-26",
			"title": "Display Instagram Description Text",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-26-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 0.95,
						"yValue": 0.95,
						"locked": true
					}
				}, {
					"id": "a-26-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-26-n-3",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-26-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1598625878269
		},
		"a-27": {
			"id": "a-27",
			"title": "Hide Instagram Description Text",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-27-n-3",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": 0.95,
						"yValue": 0.95,
						"locked": true
					}
				}, {
					"id": "a-27-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1598625878269
		},
		"a-30": {
			"id": "a-30",
			"title": "Load Blog Post Details",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-30-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-3",
					"actionTypeId": "STYLE_FILTER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"filters": [{
							"type": "blur",
							"filterId": "452e",
							"value": 100,
							"unit": "px"
						}]
					}
				}, {
					"id": "a-30-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-30-n-7",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 1.2,
						"yValue": 1.2,
						"locked": true
					}
				}, {
					"id": "a-30-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-30-n-4",
					"actionTypeId": "STYLE_FILTER",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {},
						"filters": [{
							"type": "blur",
							"filterId": "452e",
							"value": 0,
							"unit": "px"
						}]
					}
				}, {
					"id": "a-30-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-30-n-8",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1500,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-30-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-12",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1000,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}, {
					"id": "a-30-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 800,
						"easing": "inOutCubic",
						"duration": 1000,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1598881975105
		},
		"a-32": {
			"id": "a-32",
			"title": "Load Project Details",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-32-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-case-study-panel",
							"selectorGuids": ["efa99dd0-a588-c9b1-5d4b-6af3871324ec"]
						},
						"yValue": 20,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-case-study-panel",
							"selectorGuids": ["efa99dd0-a588-c9b1-5d4b-6af3871324ec"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-32-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-title",
							"selectorGuids": ["625ed9f9-2663-302b-fd1d-2b2e7ec2e6d5"]
						},
						"yValue": 20,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-title",
							"selectorGuids": ["625ed9f9-2663-302b-fd1d-2b2e7ec2e6d5"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-32-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-summary",
							"selectorGuids": ["1452a533-ef00-5648-355e-fc962facc534"]
						},
						"yValue": 20,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-summary",
							"selectorGuids": ["1452a533-ef00-5648-355e-fc962facc534"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-32-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".main-proj-image",
							"selectorGuids": ["8453b946-d37a-2cad-b0b3-b87bb521a24e"]
						},
						"yValue": 30,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-16",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".main-proj-image",
							"selectorGuids": ["8453b946-d37a-2cad-b0b3-b87bb521a24e"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-32-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".project-case-study-panel",
							"selectorGuids": ["efa99dd0-a588-c9b1-5d4b-6af3871324ec"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".project-case-study-panel",
							"selectorGuids": ["efa99dd0-a588-c9b1-5d4b-6af3871324ec"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-32-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 600,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".project-title",
							"selectorGuids": ["625ed9f9-2663-302b-fd1d-2b2e7ec2e6d5"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 600,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".project-title",
							"selectorGuids": ["625ed9f9-2663-302b-fd1d-2b2e7ec2e6d5"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-32-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 900,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".project-summary",
							"selectorGuids": ["1452a533-ef00-5648-355e-fc962facc534"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 900,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".project-summary",
							"selectorGuids": ["1452a533-ef00-5648-355e-fc962facc534"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-32-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 900,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".main-proj-image",
							"selectorGuids": ["8453b946-d37a-2cad-b0b3-b87bb521a24e"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-32-n-18",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 900,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".main-proj-image",
							"selectorGuids": ["8453b946-d37a-2cad-b0b3-b87bb521a24e"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1598881975105
		},
		"a-31": {
			"id": "a-31",
			"title": "Update Progress Bar On Header",
			"continuousParameterGroups": [{
				"id": "a-31-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-31-n",
						"actionTypeId": "STYLE_SIZE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {},
							"widthValue": 0,
							"widthUnit": "%",
							"heightUnit": "PX",
							"locked": false
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-31-n-2",
						"actionTypeId": "STYLE_SIZE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {},
							"widthValue": 100,
							"widthUnit": "%",
							"heightUnit": "PX",
							"locked": false
						}
					}]
				}]
			}],
			"createdOn": 1598886809031
		},
		"a-11": {
			"id": "a-11",
			"title": "Display Project Image On Item Hover",
			"continuousParameterGroups": [{
				"id": "a-11-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-11-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"xValue": 0,
							"xUnit": "VW",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-11-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"xValue": 100,
							"xUnit": "VW",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-11-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-11-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"yValue": 0,
							"xUnit": "VW",
							"yUnit": "VH",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-11-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"yValue": 100,
							"xUnit": "VW",
							"yUnit": "VH",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1597686493768
		},
		"a-7": {
			"id": "a-7",
			"title": "Show Nav On Scroll",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-7-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".fixed-nav",
							"selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1597680042366
		},
		"a-8": {
			"id": "a-8",
			"title": "Hide Nav On Scroll",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-8-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".fixed-nav",
							"selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
						},
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1597680042366
		},
		"a-33": {
			"id": "a-33",
			"title": "Post Item Animate On Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-33-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-33-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-33-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"yValue": -50,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-33-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1598968973228
		},
		"a-34": {
			"id": "a-34",
			"title": "Post Item Animate On Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-34-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-34-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1598968973228
		},
		"a-36": {
			"id": "a-36",
			"title": "Skew Element On Mouse Over",
			"continuousParameterGroups": [{
				"id": "a-36-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-36-n",
						"actionTypeId": "TRANSFORM_SKEW",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|50b51607-829b-abb6-529d-5019aeef85c4"
							},
							"xValue": -2,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "DEG"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-36-n-2",
						"actionTypeId": "TRANSFORM_SKEW",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|50b51607-829b-abb6-529d-5019aeef85c4"
							},
							"xValue": 2,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "DEG"
						}
					}]
				}]
			}, {
				"id": "a-36-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-36-n-3",
						"actionTypeId": "TRANSFORM_SKEW",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|50b51607-829b-abb6-529d-5019aeef85c4"
							},
							"yValue": 2,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "DEG"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-36-n-4",
						"actionTypeId": "TRANSFORM_SKEW",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": true,
								"id": "6459063c2e0aa628777c1184|50b51607-829b-abb6-529d-5019aeef85c4"
							},
							"yValue": -2,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "DEG"
						}
					}]
				}]
			}],
			"createdOn": 1599140943353
		},
		"a-20": {
			"id": "a-20",
			"title": "Display Gif Animation On Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-20-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-20-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"xValue": 0.85,
						"yValue": 0.85,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-20-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-20-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1598457639127
		},
		"a-21": {
			"id": "a-21",
			"title": "Hide Gif Animation On Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-21-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-21-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 300,
						"target": {},
						"xValue": 0.85,
						"yValue": 0.85,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1598457639127
		},
		"a-37": {
			"id": "a-37",
			"title": "Fade Move In Element On Scroll into View",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-37-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-37-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
						},
						"yValue": 20,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-37-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-37-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1599490134104
		},
		"a-38": {
			"id": "a-38",
			"title": "Fade In Slow - On Scroll into VIew",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-38-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|e74ed22c-3155-00fa-e7e3-df8b5875d506"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-38-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|e74ed22c-3155-00fa-e7e3-df8b5875d506"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1599490304692
		},
		"a-40": {
			"id": "a-40",
			"title": "Display Project Image On Scroll 2",
			"continuousParameterGroups": [{
				"id": "a-40-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 40,
					"actionItems": [{
						"id": "a-40-n",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-40-n-4",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"zValue": -10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "DEG"
						}
					}]
				}, {
					"keyframe": 50,
					"actionItems": [{
						"id": "a-40-n-3",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-40-n-5",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"zValue": 0,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "DEG"
						}
					}]
				}, {
					"keyframe": 60,
					"actionItems": [{
						"id": "a-40-n-2",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"value": 0,
							"unit": ""
						}
					}, {
						"id": "a-40-n-6",
						"actionTypeId": "TRANSFORM_ROTATE",
						"config": {
							"delay": 0,
							"easing": "ease",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".project-item-image-holder",
								"selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
							},
							"zValue": 10,
							"xUnit": "DEG",
							"yUnit": "DEG",
							"zUnit": "DEG"
						}
					}]
				}]
			}],
			"createdOn": 1604872638815
		},
		"a-41": {
			"id": "a-41",
			"title": "Buy This Template - Fade In",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-41-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|03767250-4747-1a37-7919-5f91ac141cc1"
						},
						"xValue": null,
						"yValue": 20,
						"xUnit": "px",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-41-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|03767250-4747-1a37-7919-5f91ac141cc1"
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-41-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1000,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|03767250-4747-1a37-7919-5f91ac141cc1"
						},
						"xValue": null,
						"yValue": 0,
						"xUnit": "px",
						"yUnit": "px",
						"zUnit": "PX"
					}
				}, {
					"id": "a-41-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1000,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|03767250-4747-1a37-7919-5f91ac141cc1"
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1674658552143
		},
		"a-44": {
			"id": "a-44",
			"title": "Hero Text Follow Mouse",
			"continuousParameterGroups": [{
				"id": "a-44-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-44-n-5",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-picture-holder",
								"selectorGuids": ["540a0fc1-fcc4-4c18-b0eb-176ef0bd2de3"]
							},
							"xValue": -40,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-44-n-7",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-content",
								"selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
							},
							"xValue": 20,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-44-n-6",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-picture-holder",
								"selectorGuids": ["540a0fc1-fcc4-4c18-b0eb-176ef0bd2de3"]
							},
							"xValue": 40,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}, {
						"id": "a-44-n-8",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-content",
								"selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
							},
							"xValue": -20,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-44-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-44-n-9",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-picture-holder",
								"selectorGuids": ["540a0fc1-fcc4-4c18-b0eb-176ef0bd2de3"]
							},
							"yValue": -20,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-44-n-11",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-content",
								"selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
							},
							"yValue": 10,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-44-n-10",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-picture-holder",
								"selectorGuids": ["540a0fc1-fcc4-4c18-b0eb-176ef0bd2de3"]
							},
							"yValue": 20,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}, {
						"id": "a-44-n-12",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-content",
								"selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
							},
							"yValue": -10,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1682686833360
		},
		"a-45": {
			"id": "a-45",
			"title": "Project Thumb Change Infinit",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-45-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-item-thumb._2",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc", "0a604c65-970c-890f-1ecf-38529a9f708a"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-45-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".project-item-thumb._3",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc", "63eca573-214b-eb1c-7c31-4ea82f769e49"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-45-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 200,
						"target": {
							"selector": ".project-item-thumb._2",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc", "0a604c65-970c-890f-1ecf-38529a9f708a"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-45-n-5",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 200,
						"target": {
							"selector": ".project-item-thumb._3",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc", "63eca573-214b-eb1c-7c31-4ea82f769e49"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-45-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 200,
						"target": {
							"selector": ".project-item-thumb._3",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc", "63eca573-214b-eb1c-7c31-4ea82f769e49"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-45-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 400,
						"easing": "ease",
						"duration": 0,
						"target": {
							"selector": ".project-item-thumb._2",
							"selectorGuids": ["0c97a6f5-2c2e-03d9-8c58-7163617319fc", "0a604c65-970c-890f-1ecf-38529a9f708a"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1682723147157
		},
		"a-47": {
			"id": "a-47",
			"title": "Lets Talk Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-47-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lets-talk-background",
							"selectorGuids": ["0b71e2b5-ee76-27a8-ae9e-033db84d1fe7"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-47-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lets-talk-background",
							"selectorGuids": ["0b71e2b5-ee76-27a8-ae9e-033db84d1fe7"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-47-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lets-talk-background",
							"selectorGuids": ["0b71e2b5-ee76-27a8-ae9e-033db84d1fe7"]
						},
						"xValue": 50,
						"yValue": 50,
						"locked": true
					}
				}, {
					"id": "a-47-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lets-talk-background",
							"selectorGuids": ["0b71e2b5-ee76-27a8-ae9e-033db84d1fe7"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1682776215189
		},
		"a-48": {
			"id": "a-48",
			"title": "Lets Talk Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-48-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lets-talk-background",
							"selectorGuids": ["0b71e2b5-ee76-27a8-ae9e-033db84d1fe7"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-48-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".lets-talk-background",
							"selectorGuids": ["0b71e2b5-ee76-27a8-ae9e-033db84d1fe7"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1682776215189
		},
		"a-49": {
			"id": "a-49",
			"title": "Profile Image Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-49-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nev-profile-pic",
							"selectorGuids": ["77ba2428-b3b2-c8b7-d749-a1a59ee6d151"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-49-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nev-profile-pic",
							"selectorGuids": ["77ba2428-b3b2-c8b7-d749-a1a59ee6d151"]
						},
						"value": 0.8,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1682783475815
		},
		"a-50": {
			"id": "a-50",
			"title": "Profile Image Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-50-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 300,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".nev-profile-pic",
							"selectorGuids": ["77ba2428-b3b2-c8b7-d749-a1a59ee6d151"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1682783475815
		},
		"a-51": {
			"id": "a-51",
			"title": "Reveal the Text and Hide the Bg",
			"continuousParameterGroups": [{
				"id": "a-51-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-51-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".section-text-bg",
								"selectorGuids": ["547d1f35-4b68-ba85-94e4-b55cb11e283b"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 75,
					"actionItems": [{
						"id": "a-51-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".section-text-bg",
								"selectorGuids": ["547d1f35-4b68-ba85-94e4-b55cb11e283b"]
							},
							"yValue": 100,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1682784339419
		},
		"a-52": {
			"id": "a-52",
			"title": "See Next Project On Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-52-n-3",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {},
						"widthValue": 0,
						"widthUnit": "%",
						"heightUnit": "PX",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-52-n-4",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 500,
						"target": {},
						"widthValue": 100,
						"widthUnit": "%",
						"heightUnit": "PX",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1682794131913
		},
		"a-53": {
			"id": "a-53",
			"title": "See Next Project - Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-53-n-3",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 500,
						"target": {},
						"widthValue": 0,
						"widthUnit": "%",
						"heightUnit": "PX",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1682794131913
		},
		"a-54": {
			"id": "a-54",
			"title": "Display Contact Form",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-54-n-5",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019"
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-54-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-54-n-9",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".contact-section",
							"selectorGuids": ["05b4d394-e67d-3478-7f4a-a7eb6548c14d"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-54-n-7",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 100,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019"
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-54-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 100,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": true,
							"id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-54-n-10",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 300,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".contact-section",
							"selectorGuids": ["05b4d394-e67d-3478-7f4a-a7eb6548c14d"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1682872486216
		},
		"a-55": {
			"id": "a-55",
			"title": "Link Text Anim Scroll Infinit",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-55-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".link-text-anim-holder",
							"selectorGuids": ["f7e59585-18f6-95af-9284-947ad7119a72"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-55-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".link-text-anim-holder",
							"selectorGuids": ["f7e59585-18f6-95af-9284-947ad7119a72"]
						},
						"xValue": -50,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-55-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".link-text-anim-holder",
							"selectorGuids": ["f7e59585-18f6-95af-9284-947ad7119a72"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683560371159
		},
		"a-56": {
			"id": "a-56",
			"title": "Move Picture Cursor",
			"continuousParameterGroups": [{
				"id": "a-56-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-56-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".cursor",
								"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
							},
							"xValue": 0,
							"xUnit": "vw",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-56-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".cursor",
								"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
							},
							"xValue": 100,
							"xUnit": "vw",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-56-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-56-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".cursor",
								"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
							},
							"xValue": null,
							"yValue": 0,
							"xUnit": "px",
							"yUnit": "vh",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-56-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".cursor",
								"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
							},
							"yValue": 100,
							"xUnit": "PX",
							"yUnit": "vh",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1683578265879
		},
		"a-57": {
			"id": "a-57",
			"title": "Display Hero Cursor On Hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-57-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".cursor",
							"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-57-n-2",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".cursor",
							"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
						},
						"xValue": 0.3,
						"yValue": 0.3,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-57-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".cursor",
							"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-57-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".cursor",
							"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683578378873
		},
		"a-58": {
			"id": "a-58",
			"title": "Hide Hero Cursor On Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-58-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".cursor",
							"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-58-n-4",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".cursor",
							"selectorGuids": ["8b727e41-1f3b-47d1-1524-283c4aacc833"]
						},
						"xValue": 0.3,
						"yValue": 0.3,
						"locked": true
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1683578378873
		},
		"a-59": {
			"id": "a-59",
			"title": "Display Cursor on Picture Click",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-59-n",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".cursor-holder",
							"selectorGuids": ["88b27edc-7a4b-c466-fe7d-8cfe2c26202c"]
						},
						"xValue": 0.3,
						"yValue": 0.3,
						"locked": true
					}
				}, {
					"id": "a-59-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".cursor-holder",
							"selectorGuids": ["88b27edc-7a4b-c466-fe7d-8cfe2c26202c"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-59-n-5",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724"
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-59-n-7",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724"
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-59-n-10",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".brand",
							"selectorGuids": ["331ea415-6515-e7cc-dc16-7e3d97a04e18"]
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-59-n-11",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".brand",
							"selectorGuids": ["331ea415-6515-e7cc-dc16-7e3d97a04e18"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-59-n-14",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".me-link",
							"selectorGuids": ["ec7afbe3-8854-04d3-9234-6a02b8e7d914"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-59-n-16",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".me-link",
							"selectorGuids": ["ec7afbe3-8854-04d3-9234-6a02b8e7d914"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-59-n-3",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".cursor-holder",
							"selectorGuids": ["88b27edc-7a4b-c466-fe7d-8cfe2c26202c"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-59-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"selector": ".cursor-holder",
							"selectorGuids": ["88b27edc-7a4b-c466-fe7d-8cfe2c26202c"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-59-n-6",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724"
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-59-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724"
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-59-n-12",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".brand",
							"selectorGuids": ["331ea415-6515-e7cc-dc16-7e3d97a04e18"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-59-n-13",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 700,
						"target": {
							"selector": ".brand",
							"selectorGuids": ["331ea415-6515-e7cc-dc16-7e3d97a04e18"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-59-n-15",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {
							"selector": ".me-link",
							"selectorGuids": ["ec7afbe3-8854-04d3-9234-6a02b8e7d914"]
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-59-n-17",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 600,
						"target": {
							"selector": ".me-link",
							"selectorGuids": ["ec7afbe3-8854-04d3-9234-6a02b8e7d914"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-59-n-9",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": true,
							"id": "6459063c2e0aa635af7c1181|9b89b9ec-db9a-ee41-f8f2-c722c3501724"
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683578759355
		},
		"a-60": {
			"id": "a-60",
			"title": "Click Me Follow",
			"continuousParameterGroups": [{
				"id": "a-60-p",
				"type": "MOUSE_X",
				"parameterLabel": "Mouse X",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-60-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".picture-click-me",
								"selectorGuids": ["e11080de-3004-7188-c7b9-b54076bda4ee"]
							},
							"xValue": -10,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-60-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".picture-click-me",
								"selectorGuids": ["e11080de-3004-7188-c7b9-b54076bda4ee"]
							},
							"xValue": 10,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}, {
				"id": "a-60-p-2",
				"type": "MOUSE_Y",
				"parameterLabel": "Mouse Y",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-60-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".picture-click-me",
								"selectorGuids": ["e11080de-3004-7188-c7b9-b54076bda4ee"]
							},
							"yValue": -10,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-60-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".picture-click-me",
								"selectorGuids": ["e11080de-3004-7188-c7b9-b54076bda4ee"]
							},
							"yValue": 10,
							"xUnit": "PX",
							"yUnit": "px",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1683579139490
		},
		"a-61": {
			"id": "a-61",
			"title": "Display Hero Click Me Overlay text",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-61-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-image-overlay",
							"selectorGuids": ["38027d84-bf06-3c5f-a162-cfd31b9daf20"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-61-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".picture-click-me",
							"selectorGuids": ["e11080de-3004-7188-c7b9-b54076bda4ee"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-61-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-image-overlay",
							"selectorGuids": ["38027d84-bf06-3c5f-a162-cfd31b9daf20"]
						},
						"value": 0.5,
						"unit": ""
					}
				}, {
					"id": "a-61-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".picture-click-me",
							"selectorGuids": ["e11080de-3004-7188-c7b9-b54076bda4ee"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683579748094
		},
		"a-62": {
			"id": "a-62",
			"title": "Hide Hero Click Me Overlay On Hover Out",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-62-n-3",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-image-overlay",
							"selectorGuids": ["38027d84-bf06-3c5f-a162-cfd31b9daf20"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-62-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".picture-click-me",
							"selectorGuids": ["e11080de-3004-7188-c7b9-b54076bda4ee"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1683579748094
		},
		"a-43": {
			"id": "a-43",
			"title": "Hero Name Animation",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-43-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._4",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d6f3a4c0-8464-a197-7691-0cd1c0df8684"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-14",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._4",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d6f3a4c0-8464-a197-7691-0cd1c0df8684"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._5",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "fff15e60-7f19-ee8f-3ec8-0e58f6c66ec7"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-18",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._5",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "fff15e60-7f19-ee8f-3ec8-0e58f6c66ec7"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-21",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._6",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "67c3424a-b4dd-9d6c-682a-6448ddd93b4c"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-22",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._6",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "67c3424a-b4dd-9d6c-682a-6448ddd93b4c"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-25",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._7",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d3301cab-8523-60f2-1d41-b0d54c829b2d"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-26",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._7",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d3301cab-8523-60f2-1d41-b0d54c829b2d"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-29",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._8",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "e4c134b1-2746-9ba6-4faf-0db24547b2a2"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-30",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._8",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "e4c134b1-2746-9ba6-4faf-0db24547b2a2"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-33",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._9",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "606e8e91-ec42-8989-006c-19f2d300e7c7"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-34",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._9",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "606e8e91-ec42-8989-006c-19f2d300e7c7"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-37",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._10",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "290500f4-9997-2dae-c753-8d1cc3769d1b"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-38",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._10",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "290500f4-9997-2dae-c753-8d1cc3769d1b"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._1",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "288cb156-8ce3-f369-a73c-1977dc00c823"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._1",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "288cb156-8ce3-f369-a73c-1977dc00c823"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-6",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._2",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "14b041e3-0b18-15aa-cb8c-6a25c2f2520b"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._2",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "14b041e3-0b18-15aa-cb8c-6a25c2f2520b"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._3",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "213da242-85f0-db24-e3ec-2c2499311986"]
						},
						"xValue": 2,
						"yValue": 0,
						"zValue": 3,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-10",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._3",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "213da242-85f0-db24-e3ec-2c2499311986"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-66",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "SIBLINGS",
							"selector": ".hero-text-content.hero-text-full-color",
							"selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf", "a8fdf8c2-272b-74c5-3a5e-2b5c4af5cd2a"]
						},
						"value": 0,
						"unit": ""
					}
				}, {
					"id": "a-43-n-68",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".picture-circle",
							"selectorGuids": ["502856d5-c7d6-ce1f-37fe-a82b7534719c"]
						},
						"xValue": 0,
						"yValue": 0,
						"locked": true
					}
				}, {
					"id": "a-43-n-70",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-picture-container",
							"selectorGuids": ["837d9dab-54c3-8b82-2463-8e146ecf6cdc"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-43-n-62",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._1",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "288cb156-8ce3-f369-a73c-1977dc00c823"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-64",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._2",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "14b041e3-0b18-15aa-cb8c-6a25c2f2520b"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-65",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._3",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "213da242-85f0-db24-e3ec-2c2499311986"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-50",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._4",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d6f3a4c0-8464-a197-7691-0cd1c0df8684"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-51",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._5",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "fff15e60-7f19-ee8f-3ec8-0e58f6c66ec7"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-53",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._6",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "67c3424a-b4dd-9d6c-682a-6448ddd93b4c"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-55",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._7",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d3301cab-8523-60f2-1d41-b0d54c829b2d"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-57",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._8",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "e4c134b1-2746-9ba6-4faf-0db24547b2a2"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-59",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._9",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "606e8e91-ec42-8989-006c-19f2d300e7c7"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}, {
					"id": "a-43-n-61",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1400,
						"easing": "",
						"duration": 0,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._10",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "290500f4-9997-2dae-c753-8d1cc3769d1b"]
						},
						"xValue": 0.9,
						"yValue": 0.9,
						"locked": true
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-43-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._1",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "288cb156-8ce3-f369-a73c-1977dc00c823"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-42",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._1",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "288cb156-8ce3-f369-a73c-1977dc00c823"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-4",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._1",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "288cb156-8ce3-f369-a73c-1977dc00c823"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 150,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._2",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "14b041e3-0b18-15aa-cb8c-6a25c2f2520b"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-44",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 150,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._2",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "14b041e3-0b18-15aa-cb8c-6a25c2f2520b"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-8",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 150,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._2",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "14b041e3-0b18-15aa-cb8c-6a25c2f2520b"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 300,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._3",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "213da242-85f0-db24-e3ec-2c2499311986"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-46",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 300,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._3",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "213da242-85f0-db24-e3ec-2c2499311986"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-12",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 300,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._3",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "213da242-85f0-db24-e3ec-2c2499311986"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 450,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._4",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d6f3a4c0-8464-a197-7691-0cd1c0df8684"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-47",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 450,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._4",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d6f3a4c0-8464-a197-7691-0cd1c0df8684"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-16",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 450,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._4",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d6f3a4c0-8464-a197-7691-0cd1c0df8684"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-19",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 600,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._5",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "fff15e60-7f19-ee8f-3ec8-0e58f6c66ec7"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-48",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 600,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._5",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "fff15e60-7f19-ee8f-3ec8-0e58f6c66ec7"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-20",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 600,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._5",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "fff15e60-7f19-ee8f-3ec8-0e58f6c66ec7"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-23",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 750,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._6",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "67c3424a-b4dd-9d6c-682a-6448ddd93b4c"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-52",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 750,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._6",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "67c3424a-b4dd-9d6c-682a-6448ddd93b4c"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-24",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 750,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._6",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "67c3424a-b4dd-9d6c-682a-6448ddd93b4c"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-27",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 900,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._7",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d3301cab-8523-60f2-1d41-b0d54c829b2d"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-54",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 900,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._7",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d3301cab-8523-60f2-1d41-b0d54c829b2d"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-28",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 900,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._7",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "d3301cab-8523-60f2-1d41-b0d54c829b2d"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-31",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1050,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._8",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "e4c134b1-2746-9ba6-4faf-0db24547b2a2"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-56",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1050,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._8",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "e4c134b1-2746-9ba6-4faf-0db24547b2a2"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-32",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1050,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._8",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "e4c134b1-2746-9ba6-4faf-0db24547b2a2"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-35",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1200,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._9",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "606e8e91-ec42-8989-006c-19f2d300e7c7"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vw"
					}
				}, {
					"id": "a-43-n-58",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1200,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._9",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "606e8e91-ec42-8989-006c-19f2d300e7c7"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-36",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1200,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._9",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "606e8e91-ec42-8989-006c-19f2d300e7c7"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-39",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 1350,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._10",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "290500f4-9997-2dae-c753-8d1cc3769d1b"]
						},
						"xValue": 0,
						"yValue": 0,
						"zValue": 0,
						"xUnit": "vw",
						"yUnit": "vh",
						"zUnit": "vh"
					}
				}, {
					"id": "a-43-n-60",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 1350,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._10",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "290500f4-9997-2dae-c753-8d1cc3769d1b"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-40",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1350,
						"easing": "inOutQuad",
						"duration": 750,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".hero-text._10",
							"selectorGuids": ["6ed345e3-1c8a-ccab-0c67-2e03c75ff5f4", "290500f4-9997-2dae-c753-8d1cc3769d1b"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-67",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 1500,
						"easing": "ease",
						"duration": 700,
						"target": {
							"useEventTarget": "SIBLINGS",
							"selector": ".hero-text-content.hero-text-full-color",
							"selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf", "a8fdf8c2-272b-74c5-3a5e-2b5c4af5cd2a"]
						},
						"value": 1,
						"unit": ""
					}
				}, {
					"id": "a-43-n-69",
					"actionTypeId": "TRANSFORM_SCALE",
					"config": {
						"delay": 2200,
						"easing": "outSine",
						"duration": 1000,
						"target": {
							"selector": ".picture-circle",
							"selectorGuids": ["502856d5-c7d6-ce1f-37fe-a82b7534719c"]
						},
						"xValue": 1,
						"yValue": 1,
						"locked": true
					}
				}, {
					"id": "a-43-n-71",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 3200,
						"easing": "ease",
						"duration": 300,
						"target": {
							"selector": ".hero-picture-container",
							"selectorGuids": ["837d9dab-54c3-8b82-2463-8e146ecf6cdc"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-43-n-73",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 0,
						"target": {
							"selector": ".picture-circle",
							"selectorGuids": ["502856d5-c7d6-ce1f-37fe-a82b7534719c"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1682685178429
		},
		"a-64": {
			"id": "a-64",
			"title": "Hero Line Infinit Scroll",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-64-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-line-text-holder._1",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ec2933b4-84e3-e10b-5b15-0fdd3759bc6d"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-line-text-holder._2",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "a62845a3-0adf-c485-2cc1-780a5ac54c4c"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-11",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-line-text-holder._1-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "90cbf782-6bf7-c2f9-7f53-6b7ce0ca53bf"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-12",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".hero-line-text-holder._2-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ed6348ff-2bfa-9553-98ad-9188b484f1f3"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-64-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._1",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ec2933b4-84e3-e10b-5b15-0fdd3759bc6d"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-4",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._2",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "a62845a3-0adf-c485-2cc1-780a5ac54c4c"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._1-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "90cbf782-6bf7-c2f9-7f53-6b7ce0ca53bf"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-14",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._2-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ed6348ff-2bfa-9553-98ad-9188b484f1f3"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-64-n-5",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._1",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ec2933b4-84e3-e10b-5b15-0fdd3759bc6d"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-6",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._2",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "a62845a3-0adf-c485-2cc1-780a5ac54c4c"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._1-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "90cbf782-6bf7-c2f9-7f53-6b7ce0ca53bf"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-16",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._2-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ed6348ff-2bfa-9553-98ad-9188b484f1f3"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-64-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._1",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ec2933b4-84e3-e10b-5b15-0fdd3759bc6d"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._2",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "a62845a3-0adf-c485-2cc1-780a5ac54c4c"]
						},
						"xValue": -200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._1-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "90cbf782-6bf7-c2f9-7f53-6b7ce0ca53bf"]
						},
						"xValue": 200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-18",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 20000,
						"target": {
							"selector": ".hero-line-text-holder._2-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ed6348ff-2bfa-9553-98ad-9188b484f1f3"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-64-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._1",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ec2933b4-84e3-e10b-5b15-0fdd3759bc6d"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-10",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._2",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "a62845a3-0adf-c485-2cc1-780a5ac54c4c"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-19",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._1-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "90cbf782-6bf7-c2f9-7f53-6b7ce0ca53bf"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-64-n-20",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hero-line-text-holder._2-reverse",
							"selectorGuids": ["9756c019-a710-bd0b-5213-489256873ecf", "ed6348ff-2bfa-9553-98ad-9188b484f1f3"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683625293382
		},
		"a-65": {
			"id": "a-65",
			"title": "Hide Hero Section On Scroll",
			"continuousParameterGroups": [{
				"id": "a-65-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-65-n",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-container",
								"selectorGuids": ["3eee0775-8d00-9992-7308-e75e539d7df2"]
							},
							"xValue": 1,
							"yValue": 1,
							"locked": true
						}
					}, {
						"id": "a-65-n-3",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".section-text-bg",
								"selectorGuids": ["547d1f35-4b68-ba85-94e4-b55cb11e283b"]
							},
							"yValue": 100,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-65-n-5",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-main-content",
								"selectorGuids": ["750a3d13-160f-6a5b-b4f2-be39a05596e3"]
							},
							"yValue": 0,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 60,
					"actionItems": [{
						"id": "a-65-n-4",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".section-text-bg",
								"selectorGuids": ["547d1f35-4b68-ba85-94e4-b55cb11e283b"]
							},
							"yValue": 20,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}, {
						"id": "a-65-n-2",
						"actionTypeId": "TRANSFORM_SCALE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-container",
								"selectorGuids": ["3eee0775-8d00-9992-7308-e75e539d7df2"]
							},
							"xValue": 0.85,
							"yValue": 0.85,
							"locked": true
						}
					}]
				}, {
					"keyframe": 65,
					"actionItems": [{
						"id": "a-65-n-6",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"selector": ".hero-text-main-content",
								"selectorGuids": ["750a3d13-160f-6a5b-b4f2-be39a05596e3"]
							},
							"yValue": -50,
							"xUnit": "PX",
							"yUnit": "%",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1683630440565
		},
		"a-66": {
			"id": "a-66",
			"title": "Project Item Display Images On Scroll",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-66-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-all-image-holder",
							"selectorGuids": ["8d661947-dcf9-1f32-5b4c-0f4daf67356e"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "%",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-66-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "ease",
						"duration": 1200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-item-all-image-holder",
							"selectorGuids": ["8d661947-dcf9-1f32-5b4c-0f4daf67356e"]
						},
						"heightValue": 100,
						"widthUnit": "PX",
						"heightUnit": "%",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683647324690
		},
		"a-67": {
			"id": "a-67",
			"title": "#1 Display Proj Details Thumb Image Grid",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-67-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-details-thumb",
							"selectorGuids": ["08fc6e75-ed9d-235c-f6ed-c4a3a8b52014"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-67-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "inOutSine",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-details-thumb",
							"selectorGuids": ["08fc6e75-ed9d-235c-f6ed-c4a3a8b52014"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683648038269
		},
		"a-68": {
			"id": "a-68",
			"title": "#2 Display Proj Details Thumb Image Grid 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-68-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-details-thumb",
							"selectorGuids": ["08fc6e75-ed9d-235c-f6ed-c4a3a8b52014"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-68-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 250,
						"easing": "inOutSine",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-details-thumb",
							"selectorGuids": ["08fc6e75-ed9d-235c-f6ed-c4a3a8b52014"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683648038269
		},
		"a-69": {
			"id": "a-69",
			"title": "#3 Display Proj Details Thumb Image Grid",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-69-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-details-thumb",
							"selectorGuids": ["08fc6e75-ed9d-235c-f6ed-c4a3a8b52014"]
						},
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-69-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 500,
						"easing": "inOutSine",
						"duration": 700,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".project-details-thumb",
							"selectorGuids": ["08fc6e75-ed9d-235c-f6ed-c4a3a8b52014"]
						},
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "%",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683648038269
		},
		"a-70": {
			"id": "a-70",
			"title": "Lets Chat Icon Rotation",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-70-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-3",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-6",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-5",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-4",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-13",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-14",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": 60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-7",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-10",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": -60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-8",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-11",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-9",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-12",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-15",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-16",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-17",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 300,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-18",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": 60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-19",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-20",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-21",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-22",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-23",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": -100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-24",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-25",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-26",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-27",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": -200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-28",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": -60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-29",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": -200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-30",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-31",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": -200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-32",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-33",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-34",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-35",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": 200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-36",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": 60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-37",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": -200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-38",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-39",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": -200,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-40",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-41",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-42",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-43",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-44",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-45",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": -300,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-46",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": -60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-47",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": -300,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-48",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-49",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-50",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-51",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-52",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-53",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": 100,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-54",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": 60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-55",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": -300,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-56",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-57",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-58",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-59",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-60",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-61",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-62",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-63",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": -400,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-64",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 1500,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": -60,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-65",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-66",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._1",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "138274bd-b442-f89e-2226-343322c30dad"]
						},
						"yValue": -40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-67",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-68",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._2",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "d4f4ae38-2525-4940-1cc3-0ca5e9f159fc"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-69",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-70",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._3",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "095844c3-a5a6-1648-0bd5-6b8f9020ca48"]
						},
						"yValue": 40,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-70-n-71",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"xValue": 0,
						"xUnit": "%",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"id": "a-70-n-72",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".lets-talk-icon._4",
							"selectorGuids": ["56b7166b-9c9e-35c0-5c60-8b06de2371e7", "6cc961c7-11ac-63de-d9a2-f6a1c6306fa5"]
						},
						"yValue": 0,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "DEG"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1683659341394
		},
		"a-71": {
			"id": "a-71",
			"title": "Location Text Move On Scroll",
			"continuousParameterGroups": [{
				"id": "a-71-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-71-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".location-text-holder._1",
								"selectorGuids": ["9420d14a-8096-bfa6-2ed4-0cf5e0caebde", "2e479367-5650-daff-9881-1f460bdee944"]
							},
							"xValue": 0,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-71-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".location-text-holder._1",
								"selectorGuids": ["9420d14a-8096-bfa6-2ed4-0cf5e0caebde", "2e479367-5650-daff-9881-1f460bdee944"]
							},
							"xValue": -60,
							"xUnit": "%",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1683666650486
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});