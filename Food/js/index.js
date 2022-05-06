/*! For license information please see index.js.LICENSE.txt */
(() => {
	"use strict";
	var e = {
		765: e => {
			e.exports = function () {
				const e = document.querySelectorAll("#gender .calculating__choose-item"),
					t = document.querySelector("#female"), n = document.querySelector("#male"),
					o = document.querySelectorAll(".calculating__choose_medium input"),
					s = document.querySelector("#height"), c = document.querySelector("#weight"),
					a = document.querySelector("#age"), r = document.querySelectorAll(".calculating__choose_big div"),
					l = document.querySelector("#result-kal");
				let i = localStorage.getItem("currentActivity");

				function d() {
					n.classList.contains("calculating__choose-item_active") ? c.value && a.value && s.value && i && (l.textContent = Math.round((88.36 + 13.4 * +c.value + 4.8 * +s.value - 5.7 * +a.value) * i) + " ккал") : t.classList.contains("calculating__choose-item_active") ? c.value && a.value && s.value && i && (l.textContent = Math.round((447.6 + 9.2 * +c.value + 3.1 * +s.value - 4.3 * +a.value) * i) + " ккал") : l.textContent = "Введите все данные!"
				}

				l.textContent = "Введите все данные", function (e, t) {
					if (document.querySelectorAll(".calculating__choose-item").forEach((e => {
						e.classList.remove(t), e.getAttribute("id") === localStorage.getItem("gender") && e.classList.add(t)
					})), localStorage.currentActivity) {
						let e = Math.round((localStorage.currentActivity - 1.2) / .175);
						r[e].classList.add(t)
					}
				}(0, "calculating__choose-item_active"), e.forEach((t => t.addEventListener("click", (() => {
					e.forEach((e => e.classList.remove("calculating__choose-item_active"))), t.classList.add("calculating__choose-item_active"), localStorage.setItem("gender", t.id), d()
				})))), o.forEach((e => e.addEventListener("input", (() => {
					"" === e.value || Number.isNaN(+e.value) ? (e.classList.remove("calculating__choose-item_active"), e.value = "", l.textContent = "Введите все данные в числах!") : (e.classList.add("calculating__choose-item_active"), d())
				})))), r.forEach(((e, t) => e.addEventListener("click", (() => {
					r.forEach((e => e.classList.remove("calculating__choose-item_active"))), e.classList.add("calculating__choose-item_active"), i = (1.2 + .175 * t).toFixed(3), localStorage.setItem("currentActivity", i), d()
				}))))
			}
		}, 682: e => {
			e.exports = function () {
				class e {
					constructor(e, t, n, o, s, c, a, ...r) {
						this.name = e, this.img = t, this.alt = n, this.info = o, this.price = s, this.classes = r, this.element = c, this.parent = document.querySelector(a), this.transfer = .7, this.changeToUAH()
					}

					madeCart() {
						const e = document.createElement(this.element);
						0 === this.classes.length && this.classes.push("menu__item"), this.classes.forEach((t => e.classList.add(t))), e.innerHTML = `\n            <img src=${this.img} alt=${this.alt}>\n            <h3 class="menu__item-subtitle">${this.name}</h3>\n            <div class="menu__item-descr">${this.info}</div>\n            <div class="menu__item-divider"></div>\n            <div class = "menu__item-price">\n                <div class="menu__item-cost"> Цена: </div>\n                <div class="menu__item-total"><span>${this.price}</span> грн/день </div>\n            </div>\n        `, this.parent.append(e)
					}

					changeToUAH() {
						this.price = (this.price * this.transfer).toFixed(2)
					}
				}

				axios.get("http://localhost:3000/menu").then((t => {
					t.data.forEach((({name: t, img: n, alt: o, info: s, price: c}) => {
						new e(t, n, o, s, c, "div", ".menu .container").madeCart()
					}))
				}))
			}
		}, 286: e => {
			e.exports = function () {
				const e = document.querySelectorAll("form");

				function t(e) {
					const t = document.querySelector(".modal__dialog");
					t.classList.add("hide"), openModal();
					const n = document.createElement("div");
					n.classList.add("modal__dialog"), n.innerHTML = `\n        <div class="modal__content">\n            <div class="modal__close" data-close>×</div>\n            <div class="modal__title">${e}</div>\n        </div>\n    `, document.querySelector(".modal").append(n), setTimeout((() => {
						n.remove(), t.classList.add("show"), t.classList.remove("hide"), closeModal()
					}), 4e3)
				}

				e.forEach((e => {
					var n;
					(n = e).addEventListener("submit", (e => {
						e.preventDefault();
						const o = document.createElement("img");
						o.src = "img/spinner.svg", o.style.cssText = "\n            display: block;\n            margin: 0 auto;\n        ", n.insertAdjacentElement("afterend", o);
						const s = new FormData(n);
						(async (e, t) => {
							const n = await fetch("http://localhost:3000/requests", {
								method: "POST",
								headers: {"Content-type": "application/json"},
								body: t
							});
							return await n.json()
						})(0, JSON.stringify(Object.fromEntries(s.entries()))).then((e => {
							console.log(e), t("Передача данных прошла успешно! Мы с вами свяжемся!"), setTimeout((() => {
								o.remove()
							}), 3e3)
						})).catch((() => {
							t("Что-то пошло не так, попробуйте ещё раз:)")
						})).finally((() => {
							n.reset()
						}))
					}))
				}))
			}
		}, 105: e => {
			e.exports = function () {
				const e = document.querySelectorAll("[data-modal]"), t = document.querySelector(".modal");

				function n() {
					t.classList.add("show"), t.classList.remove("hidden"), document.body.style.overflow = "hidden", clearInterval(s)
				}

				function o() {
					t.classList.add("hidden"), t.classList.remove("show"), document.body.style.overflow = ""
				}

				e.forEach((e => {
					e.addEventListener("click", n)
				})), t.addEventListener("click", (e => {
					e.target !== t && "" !== e.target.getAttribute("data-close") || o()
				})), document.addEventListener("keydown", (e => {
					"Escape" === e.code && t.classList.contains("show") && o()
				}));
				const s = setTimeout(n, 8e3);
				window.addEventListener("scroll", (function e() {
					window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 && (n(), window.removeEventListener("scroll", e))
				}))
			}
		}, 964: e => {
			e.exports = function () {
				const e = document.querySelectorAll(".offer__slide"), t = document.querySelector(".offer__slider"),
					n = document.querySelector("#total"), o = document.querySelector("#current"),
					s = document.querySelector(".offer__slider-prev"),
					c = document.querySelector(".offer__slider-next"),
					a = document.querySelector(".offer__slider-wrapper"),
					r = document.querySelector(".offer__slider-inner"), l = window.getComputedStyle(a).width;
				let i = 1, d = 0;

				function u(e, t) {
					e.textContent = t < 10 ? `0${t}` : `${t}`
				}

				r.style.width = 100 * e.length + "%", r.style.display = "flex", r.style.transition = ".45s all", a.style.overflow = "hidden", e.forEach((e => {
					e.style.width = l
				})), u(o, i), u(n, e.length);
				const m = document.createElement("div");
				m.style.height = "25px", m.style.margin = "0 auto", m.style.top = "20px", m.cssText = "\n    position: 'absolute';\n    display: flex;\n    margin-left = '15%';\n    margin-right = '15%';\n\t", e.forEach((() => {
					const e = document.createElement("button");
					e.classList.add("dot-button"), e.style.width = "25px", e.style.height = "10px", e.style.border = "none", e.style.borderRadius = "18%", e.style.backgroundColor = "lightgrey", e.style.margin = "10px", e.style.transform = "translateY(-40px)", e.style.opacity = "0.8", m.append(e)
				})), t.append(m);
				const h = document.querySelectorAll(".dot-button");

				function v() {
					r.style.transform = `translateX(-${d}px`, i = d / parseInt(l) + 1, h.forEach((e => {
						e.style.backgroundColor = "grey"
					})), h[i - 1].style.backgroundColor = "white", u(o, i)
				}

				h.forEach(((e, t, n) => {
					e.style.backgroundColor = "grey", e.addEventListener("click", (() => {
						d = parseInt(l) * t, r.style.transform = `translateX(-${d}px`, n.forEach((e => {
							e.style.backgroundColor = "grey"
						})), e.style.backgroundColor = "white", u(o, t + 1)
					}))
				})), h[i - 1].style.backgroundColor = "white", c.addEventListener("click", (() => {
					d === parseInt(l) * (e.length - 1) ? d = 0 : d += parseInt(l), v()
				})), s.addEventListener("click", (() => {
					0 === d ? d = parseInt(l) * (e.length - 1) : d -= parseInt(l), v()
				}))
			}
		}, 871: e => {
			e.exports = function () {
				const e = document.querySelectorAll(".tabheader__item"), t = document.querySelectorAll(".tabcontent"),
					n = document.querySelector(".tabheader__items");

				function o() {
					t.forEach((e => {
						e.classList.add("hide", "fade"), e.classList.remove("show")
					})), e.forEach((e => {
						e.classList.remove("tabheader__item_active")
					}))
				}

				function s(n = 0) {
					t[n].classList.add("show"), t[n].classList.remove("hide"), e[n].classList.add("tabheader__item_active")
				}

				o(), s(), n.addEventListener("click", (t => {
					t.target && t.target.classList.contains("tabheader__item") && e.forEach(((e, n) => {
						t.target === e && (o(), s(n))
					}))
				}))
			}
		}, 103: e => {
			e.exports = function () {
				function e(e) {
					return e < 10 ? `0${e}` : e
				}

				!function (t) {
					const n = document.querySelector(".timer"), o = n.querySelector("#days"),
						s = n.querySelector("#hours"), c = n.querySelector("#minutes"), a = n.querySelector("#seconds"),
						r = setInterval(l, 1e3);

					function l() {
						const t = function () {
							let e, t, n, o;
							const s = Date.parse("2022-05-29") - new Date;
							return s <= 0 ? (e = 0, t = 0, n = 0, o = 0) : (e = Math.floor(s / 864e5), t = Math.floor(s / 36e5 % 24), n = Math.floor(s / 6e4 % 60), o = Math.floor(s / 1e3 % 60)), {
								total: s,
								days: e,
								hours: t,
								minutes: n,
								seconds: o
							}
						}();
						t.total > 0 ? (o.innerText = e(t.days), s.innerText = e(t.hours), c.innerText = e(t.minutes), a.innerText = e(t.seconds)) : (clearInterval(r), o.innerText = "00", s.innerText = "00", c.innerText = "00", a.innerText = "00", o.parentElement.style.backgroundColor = "red", s.parentElement.style.backgroundColor = "red", c.parentElement.style.backgroundColor = "red", a.parentElement.style.backgroundColor = "red")
					}

					l()
				}()
			}
		}
	}, t = {};

	function n(o) {
		var s = t[o];
		if (void 0 !== s) return s.exports;
		var c = t[o] = {exports: {}};
		return e[o](c, c.exports, n), c.exports
	}

	document.addEventListener("DOMContentLoaded", (() => {
		n(871)(), n(103)(), n(682)(), n(286)(), n(105)(), n(964)(), n(765)()
	}))
})();
//# sourceMappingURL=index.js.map