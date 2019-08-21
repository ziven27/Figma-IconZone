(function() {
	'use strict';

	function e(e, t) {
		return t = {
			exports: {}
		}, e(t, t.exports), t.exports
	}

	function t() {}

	function n() {
		n.init.call(this)
	}

	function r(e) {
		return void 0 === e._maxListeners ? n.defaultMaxListeners : e._maxListeners
	}

	function a(e, t, n) {
		if (t) e.call(n);
		else
			for (var r = e.length, a = f(e, r), o = 0; o < r; ++o) a[o].call(n)
	}

	function o(e, t, n, r) {
		if (t) e.call(n, r);
		else
			for (var a = e.length, o = f(e, a), s = 0; s < a; ++s) o[s].call(n, r)
	}

	function s(e, t, n, r, a) {
		if (t) e.call(n, r, a);
		else
			for (var o = e.length, s = f(e, o), l = 0; l < o; ++l) s[l].call(n, r, a)
	}

	function l(e, t, n, r, a, o) {
		if (t) e.call(n, r, a, o);
		else
			for (var s = e.length, l = f(e, s), d = 0; d < s; ++d) l[d].call(n, r, a, o)
	}

	function d(e, t, n, r) {
		if (t) e.apply(n, r);
		else
			for (var a = e.length, o = f(e, a), s = 0; s < a; ++s) o[s].apply(n, r)
	}

	function c(e, n, a, o) {
		var i, s, l;
		if ('function' != typeof a) throw new TypeError('"listener" argument must be a function');
		if (s = e._events, s ? (s.newListener && (e.emit('newListener', n, a.listener ? a.listener : a), s = e._events), l = s[n]) : (s = e._events = new t, e._eventsCount = 0), !l) l = s[n] = a, ++e._eventsCount;
		else if ('function' == typeof l ? l = s[n] = o ? [a, l] : [l, a] : o ? l.unshift(a) : l.push(a), !l.warned && (i = r(e), i && 0 < i && l.length > i)) {
			l.warned = !0;
			var d = new Error('Possible EventEmitter memory leak detected. ' + l.length + ' ' + n + ' listeners added. Use emitter.setMaxListeners() to increase limit');
			d.name = 'MaxListenersExceededWarning', d.emitter = e, d.type = n, d.count = l.length, p(d)
		}
		return e
	}

	function p(t) {
		'function' == typeof console.warn ? console.warn(t) : console.log(t)
	}

	function u(e, t, n) {
		function r() {
			e.removeListener(t, r), a || (a = !0, n.apply(e, arguments))
		}
		var a = !1;
		return r.listener = n, r
	}

	function m(e) {
		var t = this._events;
		if (t) {
			var n = t[e];
			if ('function' == typeof n) return 1;
			if (n) return n.length
		}
		return 0
	}

	function h(e, t) {
		for (var r = t, a = r + 1, o = e.length; a < o; r += 1, a += 1) e[r] = e[a];
		e.pop()
	}

	function f(e, t) {
		for (var n = Array(t); t--;) n[t] = e[t];
		return n
	}

	function y(e) {
		for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
		return t
	}

	function b() {
		throw new Error('setTimeout has not been defined')
	}

	function x() {
		throw new Error('clearTimeout has not been defined')
	}

	function k(e) {
		if (Yd === setTimeout) return setTimeout(e, 0);
		if ((Yd === b || !Yd) && setTimeout) return Yd = setTimeout, setTimeout(e, 0);
		try {
			return Yd(e, 0)
		} catch (t) {
			try {
				return Yd.call(null, e, 0)
			} catch (t) {
				return Yd.call(this, e, 0)
			}
		}
	}

	function S(e) {
		if ($d === clearTimeout) return clearTimeout(e);
		if (($d === x || !$d) && clearTimeout) return $d = clearTimeout, clearTimeout(e);
		try {
			return $d(e)
		} catch (t) {
			try {
				return $d.call(null, e)
			} catch (t) {
				return $d.call(this, e)
			}
		}
	}

	function w() {
		Xd && Zd && (Xd = !1, Zd.length ? Kd = Zd.concat(Kd) : Qd = -1, Kd.length && T())
	}

	function T() {
		if (!Xd) {
			var e = k(w);
			Xd = !0;
			for (var t = Kd.length; t;) {
				for (Zd = Kd, Kd = []; ++Qd < t;) Zd && Zd[Qd].run();
				Qd = -1, t = Kd.length
			}
			Zd = null, Xd = !1, S(e)
		}
	}

	function C(e) {
		var t = Array(arguments.length - 1);
		if (1 < arguments.length)
			for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		Kd.push(new E(e, t)), 1 !== Kd.length || Xd || k(T)
	}

	function E(e, t) {
		this.fun = e, this.array = t
	}

	function A() {}

	function O(e) {
		if (!Y(e)) {
			for (var t = [], n = 0; n < arguments.length; n++) t.push(L(arguments[n]));
			return t.join(' ')
		}
		for (var n = 1, r = arguments, a = r.length, o = (e + '').replace(lc, function(e) {
				if ('%%' === e) return '%';
				if (n >= a) return e;
				switch (e) {
					case '%s':
						return r[n++] + '';
					case '%d':
						return +r[n++];
					case '%j':
						try {
							return JSON.stringify(r[n++])
						} catch (e) {
							return '[Circular]'
						}
					default:
						return e;
				}
			}), i = r[n]; n < a; i = r[++n]) o += j(i) || !X(i) ? ' ' + i : ' ' + L(i);
		return o
	}

	function P(e, t) {
		if ($(global.process)) return function() {
			return P(e, t).apply(this, arguments)
		};
		if (!0 === nc.noDeprecation) return e;
		var n = !1;
		return function() {
			if (!n) {
				if (nc.throwDeprecation) throw new Error(t);
				else nc.traceDeprecation ? console.trace(t) : console.error(t);
				n = !0
			}
			return e.apply(this, arguments)
		}
	}

	function L(e, t) {
		var n = {
			seen: [],
			stylize: D
		};
		return 3 <= arguments.length && (n.depth = arguments[2]), 4 <= arguments.length && (n.colors = arguments[3]), W(t) ? n.showHidden = t : t && re(n, t), $(n.showHidden) && (n.showHidden = !1), $(n.depth) && (n.depth = 2), $(n.colors) && (n.colors = !1), $(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = q), I(n, e, n.depth)
	}

	function q(e, t) {
		var n = L.styles[t];
		return n ? '\x1B[' + L.colors[n][0] + 'm' + e + '\x1B[' + L.colors[n][1] + 'm' : e
	}

	function D(e) {
		return e
	}

	function B(e) {
		var t = {};
		return e.forEach(function(e) {
			t[e] = !0
		}), t
	}

	function I(e, t, r) {
		if (e.customInspect && t && J(t.inspect) && t.inspect !== L && !(t.constructor && t.constructor.prototype === t)) {
			var a = t.inspect(r, e);
			return Y(a) || (a = I(e, a, r)), a
		}
		var o = z(e, t);
		if (o) return o;
		var i = Object.keys(t),
			s = B(i);
		if (e.showHidden && (i = Object.getOwnPropertyNames(t)), Z(t) && (0 <= i.indexOf('message') || 0 <= i.indexOf('description'))) return _(t);
		if (0 === i.length) {
			if (J(t)) {
				var l = t.name ? ': ' + t.name : '';
				return e.stylize('[Function' + l + ']', 'special')
			}
			if (K(t)) return e.stylize(RegExp.prototype.toString.call(t), 'regexp');
			if (Q(t)) return e.stylize(Date.prototype.toString.call(t), 'date');
			if (Z(t)) return _(t)
		}
		var d = '',
			c = !1,
			p = ['{', '}'];
		if (V(t) && (c = !0, p = ['[', ']']), J(t)) {
			var u = t.name ? ': ' + t.name : '';
			d = ' [Function' + u + ']'
		}
		if (K(t) && (d = ' ' + RegExp.prototype.toString.call(t)), Q(t) && (d = ' ' + Date.prototype.toUTCString.call(t)), Z(t) && (d = ' ' + _(t)), 0 === i.length && (!c || 0 == t.length)) return p[0] + d + p[1];
		if (0 > r) return K(t) ? e.stylize(RegExp.prototype.toString.call(t), 'regexp') : e.stylize('[Object]', 'special');
		e.seen.push(t);
		var n;
		return n = c ? M(e, t, r, s, i) : i.map(function(n) {
			return G(e, t, r, s, n, c)
		}), e.seen.pop(), U(n, d, p)
	}

	function z(e, t) {
		if ($(t)) return e.stylize('undefined', 'undefined');
		if (Y(t)) {
			var n = '\'' + JSON.stringify(t).replace(/^"|"$/g, '').replace(/'/g, '\\\'').replace(/\\"/g, '"') + '\'';
			return e.stylize(n, 'string')
		}
		return H(t) ? e.stylize('' + t, 'number') : W(t) ? e.stylize('' + t, 'boolean') : j(t) ? e.stylize('null', 'null') : void 0
	}

	function _(e) {
		return '[' + Error.prototype.toString.call(e) + ']'
	}

	function M(e, t, n, r, a) {
		for (var o = [], s = 0, i = t.length; s < i; ++s) ae(t, s + '') ? o.push(G(e, t, n, r, s + '', !0)) : o.push('');
		return a.forEach(function(a) {
			a.match(/^\d+$/) || o.push(G(e, t, n, r, a, !0))
		}), o
	}

	function G(e, t, n, r, a, o) {
		var i, s, l;
		if (l = Object.getOwnPropertyDescriptor(t, a) || {
				value: t[a]
			}, l.get ? l.set ? s = e.stylize('[Getter/Setter]', 'special') : s = e.stylize('[Getter]', 'special') : l.set && (s = e.stylize('[Setter]', 'special')), ae(r, a) || (i = '[' + a + ']'), s || (0 > e.seen.indexOf(l.value) ? (s = j(n) ? I(e, l.value, null) : I(e, l.value, n - 1), -1 < s.indexOf('\n') && (o ? s = s.split('\n').map(function(e) {
				return '  ' + e
			}).join('\n').substr(2) : s = '\n' + s.split('\n').map(function(e) {
				return '   ' + e
			}).join('\n'))) : s = e.stylize('[Circular]', 'special')), $(i)) {
			if (o && a.match(/^\d+$/)) return s;
			i = JSON.stringify('' + a), i.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = e.stylize(i, 'name')) : (i = i.replace(/'/g, '\\\'').replace(/\\"/g, '"').replace(/(^"|"$)/g, '\''), i = e.stylize(i, 'string'))
		}
		return i + ': ' + s
	}

	function U(e, t, n) {
		var r = 0,
			a = e.reduce(function(e, t) {
				return r++, 0 <= t.indexOf('\n') && r++, e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
			}, 0);
		return 60 < a ? n[0] + ('' === t ? '' : t + '\n ') + ' ' + e.join(',\n  ') + ' ' + n[1] : n[0] + t + ' ' + e.join(', ') + ' ' + n[1]
	}

	function V(e) {
		return Array.isArray(e)
	}

	function W(e) {
		return 'boolean' == typeof e
	}

	function j(e) {
		return null === e
	}

	function H(e) {
		return 'number' == typeof e
	}

	function Y(e) {
		return 'string' == typeof e
	}

	function $(e) {
		return void 0 === e
	}

	function K(e) {
		return X(e) && '[object RegExp]' === te(e)
	}

	function X(e) {
		return 'object' == typeof e && null !== e
	}

	function Q(e) {
		return X(e) && '[object Date]' === te(e)
	}

	function Z(t) {
		return X(t) && ('[object Error]' === te(t) || t instanceof Error)
	}

	function J(e) {
		return 'function' == typeof e
	}

	function te(e) {
		return Object.prototype.toString.call(e)
	}

	function re(e, t) {
		if (!t || !X(t)) return e;
		for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
		return e
	}

	function ae(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}

	function oe() {
		gc = !0;
		for (var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', t = 0, n = e.length; t < n; ++t) pc[t] = e[t], uc[e.charCodeAt(t)] = t;
		uc[45] = 62, uc[95] = 63
	}

	function ie(e) {
		gc || oe();
		var t = e.length,
			n, r, a, o, i, s;
		if (0 < t % 4) throw new Error('Invalid string. Length must be a multiple of 4');
		i = '=' === e[t - 2] ? 2 : '=' === e[t - 1] ? 1 : 0, s = new mc(3 * t / 4 - i), a = 0 < i ? t - 4 : t;
		var l = 0;
		for (n = 0, r = 0; n < a; n += 4, r += 3) o = uc[e.charCodeAt(n)] << 18 | uc[e.charCodeAt(n + 1)] << 12 | uc[e.charCodeAt(n + 2)] << 6 | uc[e.charCodeAt(n + 3)], s[l++] = 255 & o >> 16, s[l++] = 255 & o >> 8, s[l++] = 255 & o;
		return 2 === i ? (o = uc[e.charCodeAt(n)] << 2 | uc[e.charCodeAt(n + 1)] >> 4, s[l++] = 255 & o) : 1 === i && (o = uc[e.charCodeAt(n)] << 10 | uc[e.charCodeAt(n + 1)] << 4 | uc[e.charCodeAt(n + 2)] >> 2, s[l++] = 255 & o >> 8, s[l++] = 255 & o), s
	}

	function se(e) {
		return pc[63 & e >> 18] + pc[63 & e >> 12] + pc[63 & e >> 6] + pc[63 & e]
	}

	function de(e, t, n) {
		for (var r = [], a = t, o; a < n; a += 3) o = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], r.push(se(o));
		return r.join('')
	}

	function ce(e) {
		gc || oe();
		for (var t = e.length, n = t % 3, r = '', a = [], o = 16383, s = 0, i = t - n, l; s < i; s += o) a.push(de(e, s, s + o > i ? i : s + o));
		return 1 == n ? (l = e[t - 1], r += pc[l >> 2], r += pc[63 & l << 4], r += '==') : 2 == n && (l = (e[t - 2] << 8) + e[t - 1], r += pc[l >> 10], r += pc[63 & l >> 4], r += pc[63 & l << 2], r += '='), a.push(r), a.join('')
	}

	function pe(t, n, r, a, o) {
		var l = 8 * o - a - 1,
			c = (1 << l) - 1,
			p = c >> 1,
			u = -7,
			g = r ? o - 1 : 0,
			i = r ? -1 : 1,
			d = t[n + g],
			s, e;
		for (g += i, s = d & (1 << -u) - 1, d >>= -u, u += l; 0 < u; s = 256 * s + t[n + g], g += i, u -= 8);
		for (e = s & (1 << -u) - 1, s >>= -u, u += a; 0 < u; e = 256 * e + t[n + g], g += i, u -= 8);
		if (0 === s) s = 1 - p;
		else {
			if (s === c) return e ? NaN : (d ? -1 : 1) * Infinity;
			e += Wd(2, a), s -= p
		}
		return (d ? -1 : 1) * e * Wd(2, s - a)
	}

	function ue(t, n, r, a, o, l) {
		var p = 8 * l - o - 1,
			u = (1 << p) - 1,
			g = u >> 1,
			h = 23 === o ? 5.960464477539063e-8 - 6.617444900424222e-24 : 0,
			f = a ? 0 : l - 1,
			i = a ? 1 : -1,
			d = 0 > n || 0 === n && 0 > 1 / n ? 1 : 0,
			s, y, m;
		for (n = Vd(n), isNaN(n) || n === Infinity ? (y = isNaN(n) ? 1 : 0, s = u) : (s = Fd(Math.log(n) / Math.LN2), 1 > n * (m = Wd(2, -s)) && (s--, m *= 2), n += 1 <= s + g ? h / m : h * Wd(2, 1 - g), 2 <= n * m && (s++, m /= 2), s + g >= u ? (y = 0, s = u) : 1 <= s + g ? (y = (n * m - 1) * Wd(2, o), s += g) : (y = n * Wd(2, g - 1) * Wd(2, o), s = 0)); 8 <= o; t[r + f] = 255 & y, f += i, y /= 256, o -= 8);
		for (s = s << o | y, p += o; 0 < p; t[r + f] = 255 & s, f += i, s /= 256, p -= 8);
		t[r + f - i] |= 128 * d
	}

	function me() {
		return fe.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
	}

	function he(e, t) {
		if (me() < t) throw new RangeError('Invalid typed array length');
		return fe.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = fe.prototype) : (null === e && (e = new fe(t)), e.length = t), e
	}

	function fe(e, t, n) {
		if (!fe.TYPED_ARRAY_SUPPORT && !(this instanceof fe)) return new fe(e, t, n);
		if ('number' == typeof e) {
			if ('string' == typeof t) throw new Error('If encoding is specified then the first argument must be a string');
			return ke(this, e)
		}
		return ye(this, e, t, n)
	}

	function ye(e, t, n, r) {
		if ('number' == typeof t) throw new TypeError('"value" argument must not be a number');
		return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer ? ve(e, t, n, r) : 'string' == typeof t ? Se(e, t, n) : Te(e, t)
	}

	function be(e) {
		if ('number' != typeof e) throw new TypeError('"size" argument must be a number');
		else if (0 > e) throw new RangeError('"size" argument must not be negative')
	}

	function xe(e, t, n, r) {
		return be(t), 0 >= t ? he(e, t) : void 0 === n ? he(e, t) : 'string' == typeof r ? he(e, t).fill(n, r) : he(e, t).fill(n)
	}

	function ke(e, t) {
		if (be(t), e = he(e, 0 > t ? 0 : 0 | Ce(t)), !fe.TYPED_ARRAY_SUPPORT)
			for (var n = 0; n < t; ++n) e[n] = 0;
		return e
	}

	function Se(e, t, n) {
		if (('string' != typeof n || '' === n) && (n = 'utf8'), !fe.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
		var r = 0 | Ae(t, n);
		e = he(e, r);
		var a = e.write(t, n);
		return a !== r && (e = e.slice(0, a)), e
	}

	function we(e, t) {
		var n = 0 > t.length ? 0 : 0 | Ce(t.length);
		e = he(e, n);
		for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
		return e
	}

	function ve(e, t, n, r) {
		if (t.byteLength, 0 > n || t.byteLength < n) throw new RangeError('\'offset\' is out of bounds');
		if (t.byteLength < n + (r || 0)) throw new RangeError('\'length\' is out of bounds');
		return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), fe.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = fe.prototype) : e = we(e, t), e
	}

	function Te(e, t) {
		if (Ee(t)) {
			var n = 0 | Ce(t.length);
			return (e = he(e, n), 0 === e.length) ? e : (t.copy(e, 0, 0, n), e)
		}
		if (t) {
			if ('undefined' != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || 'length' in t) return 'number' != typeof t.length || dt(t.length) ? he(e, 0) : we(e, t);
			if ('Buffer' === t.type && fc(t.data)) return we(e, t.data)
		}
		throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function Ce(e) {
		if (e >= me()) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + me().toString(16) + ' bytes');
		return 0 | e
	}

	function Ee(e) {
		return !!(null != e && e._isBuffer)
	}

	function Ae(e, t) {
		if (Ee(e)) return e.length;
		if ('undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
		'string' != typeof e && (e = '' + e);
		var n = e.length;
		if (0 === n) return 0;
		for (var r = !1;;) switch (t) {
			case 'ascii':
			case 'latin1':
			case 'binary':
				return n;
			case 'utf8':
			case 'utf-8':
			case void 0:
				return nt(e).length;
			case 'ucs2':
			case 'ucs-2':
			case 'utf16le':
			case 'utf-16le':
				return 2 * n;
			case 'hex':
				return n >>> 1;
			case 'base64':
				return ot(e).length;
			default:
				if (r) return nt(e).length;
				t = ('' + t).toLowerCase(), r = !0;
		}
	}

	function Oe(e, t, n) {
		var r = !1;
		if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return '';
		if ((void 0 === n || n > this.length) && (n = this.length), 0 >= n) return '';
		if (n >>>= 0, t >>>= 0, n <= t) return '';
		for (e || (e = 'utf8');;) switch (e) {
			case 'hex':
				return Fe(this, t, n);
			case 'utf8':
			case 'utf-8':
				return Ge(this, t, n);
			case 'ascii':
				return Ve(this, t, n);
			case 'latin1':
			case 'binary':
				return We(this, t, n);
			case 'base64':
				return Me(this, t, n);
			case 'ucs2':
			case 'ucs-2':
			case 'utf16le':
			case 'utf-16le':
				return je(this, t, n);
			default:
				if (r) throw new TypeError('Unknown encoding: ' + e);
				e = (e + '').toLowerCase(), r = !0;
		}
	}

	function Pe(e, t, n) {
		var r = e[t];
		e[t] = e[n], e[n] = r
	}

	function Le(e, t, n, r, a) {
		if (0 === e.length) return -1;
		if ('string' == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n = +n, isNaN(n) && (n = a ? 0 : e.length - 1), 0 > n && (n = e.length + n), n >= e.length) {
			if (a) return -1;
			n = e.length - 1
		} else if (0 > n)
			if (a) n = 0;
			else return -1;
		if ('string' == typeof t && (t = fe.from(t, r)), Ee(t)) return 0 === t.length ? -1 : qe(e, t, n, r, a);
		if ('number' == typeof t) return t &= 255, fe.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : qe(e, [t], n, r, a);
		throw new TypeError('val must be string, number or Buffer')
	}

	function qe(e, t, n, r, a) {
		function o(e, t) {
			return 1 == s ? e[t] : e.readUInt16BE(t * s)
		}
		var s = 1,
			l = e.length,
			d = t.length;
		if (void 0 !== r && (r = (r + '').toLowerCase(), 'ucs2' === r || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
			if (2 > e.length || 2 > t.length) return -1;
			s = 2, l /= 2, d /= 2, n /= 2
		}
		var c;
		if (a) {
			var i = -1;
			for (c = n; c < l; c++)
				if (o(e, c) !== o(t, -1 == i ? 0 : c - i)) - 1 != i && (c -= c - i), i = -1;
				else if (-1 == i && (i = c), c - i + 1 === d) return i * s
		} else
			for (n + d > l && (n = l - d), c = n; 0 <= c; c--) {
				for (var p = !0, u = 0; u < d; u++)
					if (o(e, c + u) !== o(t, u)) {
						p = !1;
						break
					}
				if (p) return c
			}
		return -1
	}

	function De(e, t, n, r) {
		n = +n || 0;
		var a = e.length - n;
		r ? (r = +r, r > a && (r = a)) : r = a;
		var o = t.length;
		if (0 != o % 2) throw new TypeError('Invalid hex string');
		r > o / 2 && (r = o / 2);
		for (var s = 0, i; s < r; ++s) {
			if (i = parseInt(t.substr(2 * s, 2), 16), isNaN(i)) return s;
			e[n + s] = i
		}
		return s
	}

	function Ne(e, t, n, r) {
		return st(nt(t, e.length - n), e, n, r)
	}

	function Be(e, t, n, r) {
		return st(rt(t), e, n, r)
	}

	function Ie(e, t, n, r) {
		return Be(e, t, n, r)
	}

	function ze(e, t, n, r) {
		return st(ot(t), e, n, r)
	}

	function _e(e, t, n, r) {
		return st(at(t, e.length - n), e, n, r)
	}

	function Me(e, t, n) {
		return 0 === t && n === e.length ? ce(e) : ce(e.slice(t, n))
	}

	function Ge(e, t, n) {
		n = Ud(e.length, n);
		for (var r = [], a = t; a < n;) {
			var o = e[a],
				i = null,
				s = 239 < o ? 4 : 223 < o ? 3 : 191 < o ? 2 : 1;
			if (a + s <= n) {
				var l, d, c, p;
				1 == s ? 128 > o && (i = o) : 2 == s ? (l = e[a + 1], 128 == (192 & l) && (p = (31 & o) << 6 | 63 & l, 127 < p && (i = p))) : 3 == s ? (l = e[a + 1], d = e[a + 2], 128 == (192 & l) && 128 == (192 & d) && (p = (15 & o) << 12 | (63 & l) << 6 | 63 & d, 2047 < p && (55296 > p || 57343 < p) && (i = p))) : 4 == s ? (l = e[a + 1], d = e[a + 2], c = e[a + 3], 128 == (192 & l) && 128 == (192 & d) && 128 == (192 & c) && (p = (15 & o) << 18 | (63 & l) << 12 | (63 & d) << 6 | 63 & c, 65535 < p && 1114112 > p && (i = p))) : void 0
			}
			null === i ? (i = 65533, s = 1) : 65535 < i && (i -= 65536, r.push(55296 | 1023 & i >>> 10), i = 56320 | 1023 & i), r.push(i), a += s
		}
		return Ue(r)
	}

	function Ue(e) {
		var t = e.length;
		if (t <= yc) return Gd.apply(String, e);
		for (var n = '', r = 0; r < t;) n += Gd.apply(String, e.slice(r, r += yc));
		return n
	}

	function Ve(e, t, n) {
		var r = '';
		n = Ud(e.length, n);
		for (var a = t; a < n; ++a) r += Gd(127 & e[a]);
		return r
	}

	function We(e, t, n) {
		var r = '';
		n = Ud(e.length, n);
		for (var a = t; a < n; ++a) r += Gd(e[a]);
		return r
	}

	function Fe(e, t, n) {
		var r = e.length;
		(!t || 0 > t) && (t = 0), (!n || 0 > n || n > r) && (n = r);
		for (var a = '', o = t; o < n; ++o) a += tt(e[o]);
		return a
	}

	function je(e, t, n) {
		for (var r = e.slice(t, n), a = '', o = 0; o < r.length; o += 2) a += Gd(r[o] + 256 * r[o + 1]);
		return a
	}

	function He(e, t, n) {
		if (0 != e % 1 || 0 > e) throw new RangeError('offset is not uint');
		if (e + t > n) throw new RangeError('Trying to access beyond buffer length')
	}

	function Ye(e, t, n, r, a, o) {
		if (!Ee(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
		if (t > a || t < o) throw new RangeError('"value" argument is out of bounds');
		if (n + r > e.length) throw new RangeError('Index out of range')
	}

	function $e(e, t, n, r) {
		0 > t && (t = 65535 + t + 1);
		for (var a = 0, o = Ud(e.length - n, 2); a < o; ++a) e[n + a] = (t & 255 << 8 * (r ? a : 1 - a)) >>> 8 * (r ? a : 1 - a)
	}

	function Ke(e, t, n, r) {
		0 > t && (t = 4294967295 + t + 1);
		for (var a = 0, o = Ud(e.length - n, 4); a < o; ++a) e[n + a] = 255 & t >>> 8 * (r ? a : 3 - a)
	}

	function Xe(e, t, n, r) {
		if (n + r > e.length) throw new RangeError('Index out of range');
		if (0 > n) throw new RangeError('Index out of range')
	}

	function Qe(e, t, n, r, a) {
		return a || Xe(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), ue(e, t, n, r, 23, 4), n + 4
	}

	function Ze(e, t, n, r, a) {
		return a || Xe(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), ue(e, t, n, r, 52, 8), n + 8
	}

	function Je(e) {
		if (e = et(e).replace(bc, ''), 2 > e.length) return '';
		for (; 0 != e.length % 4;) e += '=';
		return e
	}

	function et(e) {
		return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
	}

	function tt(e) {
		return 16 > e ? '0' + e.toString(16) : e.toString(16)
	}

	function nt(e, t) {
		t = t || Infinity;
		for (var n = e.length, r = null, a = [], o = 0, i; o < n; ++o) {
			if (i = e.charCodeAt(o), 55295 < i && 57344 > i) {
				if (!r) {
					if (56319 < i) {
						-1 < (t -= 3) && a.push(239, 191, 189);
						continue
					} else if (o + 1 === n) {
						-1 < (t -= 3) && a.push(239, 191, 189);
						continue
					}
					r = i;
					continue
				}
				if (56320 > i) {
					-1 < (t -= 3) && a.push(239, 191, 189), r = i;
					continue
				}
				i = (r - 55296 << 10 | i - 56320) + 65536
			} else r && -1 < (t -= 3) && a.push(239, 191, 189);
			if (r = null, 128 > i) {
				if (0 > (t -= 1)) break;
				a.push(i)
			} else if (2048 > i) {
				if (0 > (t -= 2)) break;
				a.push(192 | i >> 6, 128 | 63 & i)
			} else if (65536 > i) {
				if (0 > (t -= 3)) break;
				a.push(224 | i >> 12, 128 | 63 & i >> 6, 128 | 63 & i)
			} else if (1114112 > i) {
				if (0 > (t -= 4)) break;
				a.push(240 | i >> 18, 128 | 63 & i >> 12, 128 | 63 & i >> 6, 128 | 63 & i)
			} else throw new Error('Invalid code point')
		}
		return a
	}

	function rt(e) {
		for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
		return t
	}

	function at(e, t) {
		for (var n = [], r = 0, a, o, i; r < e.length && !(0 > (t -= 2)); ++r) a = e.charCodeAt(r), o = a >> 8, i = a % 256, n.push(i), n.push(o);
		return n
	}

	function ot(e) {
		return ie(Je(e))
	}

	function st(e, t, n, r) {
		for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a) t[a + n] = e[a];
		return a
	}

	function dt(e) {
		return e !== e
	}

	function ct(e) {
		return !!e.constructor && 'function' == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
	}

	function pt(e) {
		return 'function' == typeof e.readFloatLE && 'function' == typeof e.slice && ct(e.slice(0, 0))
	}

	function ut() {
		this.head = null, this.tail = null, this.length = 0
	}

	function mt(e) {
		if (e && !xc(e)) throw new Error('Unknown encoding: ' + e)
	}

	function ht(e) {
		switch (this.encoding = (e || 'utf8').toLowerCase().replace(/[-_]/, ''), mt(e), this.encoding) {
			case 'utf8':
				this.surrogateSize = 3;
				break;
			case 'ucs2':
			case 'utf16le':
				this.surrogateSize = 2, this.detectIncompleteChar = yt;
				break;
			case 'base64':
				this.surrogateSize = 3, this.detectIncompleteChar = bt;
				break;
			default:
				return void(this.write = ft);
		}
		this.charBuffer = new fe(6), this.charReceived = 0, this.charLength = 0
	}

	function ft(e) {
		return e.toString(this.encoding)
	}

	function yt(e) {
		this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
	}

	function bt(e) {
		this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
	}

	function xt(e, t, n) {
		return 'function' == typeof e.prependListener ? e.prependListener(t, n) : void(e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n))
	}

	function kt(e, t) {
		return e.listeners(t).length
	}

	function St(e, t) {
		e = e || {}, this.objectMode = !!e.objectMode, t instanceof hn && (this.objectMode = this.objectMode || !!e.readableObjectMode);
		var n = e.highWaterMark,
			r = this.objectMode ? 16 : 16384;
		this.highWaterMark = n || 0 === n ? n : r, this.highWaterMark = ~~this.highWaterMark, this.buffer = new ut, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.defaultEncoding = e.defaultEncoding || 'utf8', this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (this.decoder = new ht(e.encoding), this.encoding = e.encoding)
	}

	function wt(e) {
		return this instanceof wt ? void(this._readableState = new St(e, this), this.readable = !0, e && 'function' == typeof e.read && (this._read = e.read), n.call(this)) : new wt(e)
	}

	function vt(t, n, r, a, o) {
		var i = At(n, r);
		if (i) t.emit('error', i);
		else if (null === r) n.reading = !1, Ot(t, n);
		else if (!(n.objectMode || r && 0 < r.length)) o || (n.reading = !1);
		else if (n.ended && !o) {
			var s = new Error('stream.push() after EOF');
			t.emit('error', s)
		} else if (n.endEmitted && o) {
			var e = new Error('stream.unshift() after end event');
			t.emit('error', e)
		} else {
			var l;
			!n.decoder || o || a || (r = n.decoder.write(r), l = !n.objectMode && 0 === r.length), o || (n.reading = !1), l || (n.flowing && 0 === n.length && !n.sync ? (t.emit('data', r), t.read(0)) : (n.length += n.objectMode ? 1 : r.length, o ? n.buffer.unshift(r) : n.buffer.push(r), n.needReadable && Pt(t))), Rt(t, n)
		}
		return Tt(n)
	}

	function Tt(e) {
		return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
	}

	function Ct(e) {
		return e >= vc ? e = vc : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
	}

	function Et(e, t) {
		return 0 >= e || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e === e ? (e > t.highWaterMark && (t.highWaterMark = Ct(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)) : t.flowing && t.length ? t.buffer.head.data.length : t.length
	}

	function At(e, t) {
		var n = null;
		return Buffer.isBuffer(t) || 'string' == typeof t || null === t || void 0 === t || e.objectMode || (n = new TypeError('Invalid non-string/buffer chunk')), n
	}

	function Ot(e, t) {
		if (!t.ended) {
			if (t.decoder) {
				var n = t.decoder.end();
				n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
			}
			t.ended = !0, Pt(e)
		}
	}

	function Pt(e) {
		var t = e._readableState;
		t.needReadable = !1, t.emittedReadable || (wc('emitReadable', t.flowing), t.emittedReadable = !0, t.sync ? C(qt, e) : qt(e))
	}

	function qt(e) {
		wc('emit readable'), e.emit('readable'), _t(e)
	}

	function Rt(e, t) {
		t.readingMore || (t.readingMore = !0, C(Dt, e, t))
	}

	function Dt(e, t) {
		for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (wc('maybeReadMore read 0'), e.read(0), n !== t.length);) n = t.length;
		t.readingMore = !1
	}

	function Nt(e) {
		return function() {
			var t = e._readableState;
			wc('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && e.listeners('data').length && (t.flowing = !0, _t(e))
		}
	}

	function Bt(e) {
		wc('readable nexttick read 0'), e.read(0)
	}

	function It(e, t) {
		t.resumeScheduled || (t.resumeScheduled = !0, C(zt, e, t))
	}

	function zt(e, t) {
		t.reading || (wc('resume read 0'), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit('resume'), _t(e), t.flowing && !t.reading && e.read(0)
	}

	function _t(e) {
		var t = e._readableState;
		for (wc('flow', t.flowing); t.flowing && null !== e.read(););
	}

	function Mt(e, t) {
		if (0 === t.length) return null;
		var r;
		return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join('') : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = Ut(e, t.buffer, t.decoder), r
	}

	function Ut(e, t, n) {
		var r;
		return e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : e === t.head.data.length ? r = t.shift() : r = n ? Vt(e, t) : Wt(e, t), r
	}

	function Vt(e, t) {
		var n = t.head,
			r = 1,
			a = n.data;
		for (e -= a.length; n = n.next;) {
			var o = n.data,
				i = e > o.length ? o.length : e;
			if (a += i === o.length ? o : o.slice(0, e), e -= i, 0 === e) {
				i === o.length ? (++r, t.head = n.next ? n.next : t.tail = null) : (t.head = n, n.data = o.slice(i));
				break
			}++r
		}
		return t.length -= r, a
	}

	function Wt(e, t) {
		var n = Buffer.allocUnsafe(e),
			r = t.head,
			a = 1;
		for (r.data.copy(n), e -= r.data.length; r = r.next;) {
			var o = r.data,
				i = e > o.length ? o.length : e;
			if (o.copy(n, n.length - e, 0, i), e -= i, 0 === e) {
				i === o.length ? (++a, t.head = r.next ? r.next : t.tail = null) : (t.head = r, r.data = o.slice(i));
				break
			}++a
		}
		return t.length -= a, n
	}

	function Ft(e) {
		var t = e._readableState;
		if (0 < t.length) throw new Error('"endReadable()" called on non-empty stream');
		t.endEmitted || (t.ended = !0, C(jt, t, e))
	}

	function jt(e, t) {
		e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit('end'))
	}

	function Ht(e, t) {
		for (var n = 0, r = e.length; n < r; n++) t(e[n], n)
	}

	function Yt(e, t) {
		for (var n = 0, r = e.length; n < r; n++)
			if (e[n] === t) return n;
		return -1
	}

	function $t() {}

	function Kt(e, t, n) {
		this.chunk = e, this.encoding = t, this.callback = n, this.next = null
	}

	function Xt(e, t) {
		Object.defineProperty(this, 'buffer', {
			get: P(function() {
				return this.getBuffer()
			}, '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.')
		}), e = e || {}, this.objectMode = !!e.objectMode, t instanceof hn && (this.objectMode = this.objectMode || !!e.writableObjectMode);
		var n = e.highWaterMark,
			r = this.objectMode ? 16 : 16384;
		this.highWaterMark = n || 0 === n ? n : r, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
		var a = !1 === e.decodeStrings;
		this.decodeStrings = !a, this.defaultEncoding = e.defaultEncoding || 'utf8', this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
			on(t, e)
		}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new gn(this)
	}

	function Qt(e) {
		return this instanceof Qt || this instanceof hn ? void(this._writableState = new Xt(e, this), this.writable = !0, e && ('function' == typeof e.write && (this._write = e.write), 'function' == typeof e.writev && (this._writev = e.writev)), n.call(this)) : new Qt(e)
	}

	function Zt(e, t) {
		var n = new Error('write after end');
		e.emit('error', n), C(t, n)
	}

	function Jt(e, t, n, r) {
		var a = !0,
			o = !1;
		return null === n ? o = new TypeError('May not write null values to stream') : !fe.isBuffer(n) && 'string' != typeof n && void 0 !== n && !t.objectMode && (o = new TypeError('Invalid non-string/buffer chunk')), o && (e.emit('error', o), C(r, o), a = !1), a
	}

	function en(e, t, n) {
		return e.objectMode || !1 === e.decodeStrings || 'string' != typeof t || (t = fe.from(t, n)), t
	}

	function tn(e, t, n, r, a) {
		n = en(t, n, r), fe.isBuffer(n) && (r = 'buffer');
		var o = t.objectMode ? 1 : n.length;
		t.length += o;
		var i = t.length < t.highWaterMark;
		if (i || (t.needDrain = !0), t.writing || t.corked) {
			var s = t.lastBufferedRequest;
			t.lastBufferedRequest = new Kt(n, r, a), s ? s.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
		} else nn(e, t, !1, o, n, r, a);
		return i
	}

	function nn(e, t, n, r, a, o, i) {
		t.writelen = r, t.writecb = i, t.writing = !0, t.sync = !0, n ? e._writev(a, t.onwrite) : e._write(a, o, t.onwrite), t.sync = !1
	}

	function rn(e, t, n, r, a) {
		--t.pendingcb, n ? C(a, r) : a(r), e._writableState.errorEmitted = !0, e.emit('error', r)
	}

	function an(e) {
		e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
	}

	function on(e, t) {
		var n = e._writableState,
			r = n.sync,
			a = n.writecb;
		if (an(n), t) rn(e, n, r, t, a);
		else {
			var o = cn(n);
			o || n.corked || n.bufferProcessing || !n.bufferedRequest || dn(e, n), r ? C(sn, e, n, o, a) : sn(e, n, o, a)
		}
	}

	function sn(e, t, n, r) {
		n || ln(e, t), t.pendingcb--, r(), un(e, t)
	}

	function ln(e, t) {
		0 === t.length && t.needDrain && (t.needDrain = !1, e.emit('drain'))
	}

	function dn(e, t) {
		t.bufferProcessing = !0;
		var n = t.bufferedRequest;
		if (e._writev && n && n.next) {
			var r = t.bufferedRequestCount,
				a = Array(r),
				o = t.corkedRequestsFree;
			o.entry = n;
			for (var i = 0; n;) a[i] = n, n = n.next, i += 1;
			nn(e, t, !0, t.length, a, '', o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new gn(t)
		} else {
			for (; n;) {
				var s = n.chunk,
					l = n.encoding,
					d = n.callback,
					c = t.objectMode ? 1 : s.length;
				if (nn(e, t, !1, c, s, l, d), n = n.next, t.writing) break
			}
			null === n && (t.lastBufferedRequest = null)
		}
		t.bufferedRequestCount = 0, t.bufferedRequest = n, t.bufferProcessing = !1
	}

	function cn(e) {
		return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
	}

	function pn(e, t) {
		t.prefinished || (t.prefinished = !0, e.emit('prefinish'))
	}

	function un(e, t) {
		var n = cn(t);
		return n && (0 === t.pendingcb ? (pn(e, t), t.finished = !0, e.emit('finish')) : pn(e, t)), n
	}

	function mn(e, t, n) {
		t.ending = !0, un(e, t), n && (t.finished ? C(n) : e.once('finish', n)), t.ended = !0, e.writable = !1
	}

	function gn(e) {
		var t = this;
		this.next = null, this.entry = null, this.finish = function(n) {
			var r = t.entry;
			for (t.entry = null; r;) {
				var a = r.callback;
				e.pendingcb--, a(n), r = r.next
			}
			e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t
		}
	}

	function hn(e) {
		return this instanceof hn ? void(wt.call(this, e), Qt.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once('end', fn)) : new hn(e)
	}

	function fn() {
		this.allowHalfOpen || this._writableState.ended || C(yn, this)
	}

	function yn(e) {
		e.end()
	}

	function bn(e) {
		this.afterTransform = function(t, n) {
			return xn(e, t, n)
		}, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null, this.writeencoding = null
	}

	function xn(e, t, n) {
		var r = e._transformState;
		r.transforming = !1;
		var a = r.writecb;
		if (!a) return e.emit('error', new Error('no writecb in Transform class'));
		r.writechunk = null, r.writecb = null, null !== n && void 0 !== n && e.push(n), a(t);
		var o = e._readableState;
		o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
	}

	function kn(e) {
		if (!(this instanceof kn)) return new kn(e);
		hn.call(this, e), this._transformState = new bn(this);
		var t = this;
		this._readableState.needReadable = !0, this._readableState.sync = !1, e && ('function' == typeof e.transform && (this._transform = e.transform), 'function' == typeof e.flush && (this._flush = e.flush)), this.once('prefinish', function() {
			'function' == typeof this._flush ? this._flush(function(e) {
				Sn(t, e)
			}) : Sn(t)
		})
	}

	function Sn(e, t) {
		if (t) return e.emit('error', t);
		var n = e._writableState,
			r = e._transformState;
		if (n.length) throw new Error('Calling transform done when ws.length != 0');
		if (r.transforming) throw new Error('Calling transform done when still transforming');
		return e.push(null)
	}

	function wn(e) {
		return this instanceof wn ? void kn.call(this, e) : new wn(e)
	}

	function vn() {
		n.call(this)
	}

	function Tn(e) {
		return Object.keys(e).sort().reduce(function(t, n) {
			return t[e[n]] = '&' + n + ';', t
		}, {})
	}

	function Cn(e) {
		var t = [],
			n = [];
		return Object.keys(e).forEach(function(e) {
			1 === e.length ? t.push('\\' + e) : n.push(e)
		}), n.unshift('[' + t.join('') + ']'), new RegExp(n.join('|'), 'g')
	}

	function En(e) {
		return '&#x' + e.charCodeAt(0).toString(16).toUpperCase() + ';'
	}

	function An(e) {
		var t = e.charCodeAt(0),
			n = e.charCodeAt(1);
		return '&#x' + (1024 * (t - 55296) + n - 56320 + 65536).toString(16).toUpperCase() + ';'
	}

	function On(e, t) {
		function n(t) {
			return e[t]
		}
		return function(e) {
			return e.replace(t, n).replace(DX, An).replace(RX, En)
		}
	}

	function Pn(e) {
		var t = Object.keys(e).join('|'),
			n = qn(e);
		t += '|#[xX][\\da-fA-F]+|#\\d+';
		var r = new RegExp('&(?:' + t + ');', 'g');
		return function(e) {
			return (e + '').replace(r, n)
		}
	}

	function Ln(e, t) {
		return e < t ? 1 : -1
	}

	function qn(e) {
		return function(t) {
			return '#' === t.charAt(1) ? 'X' === t.charAt(2) || 'x' === t.charAt(2) ? MZ(parseInt(t.substr(3), 16)) : MZ(parseInt(t.substr(2), 10)) : e[t.slice(1, -1)]
		}
	}

	function Rn(e) {
		return Array.isArray(e) ? e.map(Rn).join('') : YZ(e) || e.type === Oc.CDATA ? Rn(e.children) : e.type === Oc.Text ? e.data : ''
	}

	function Dn(e, t, n, r) {
		for (var a = [], o = 0, i = t.length, s; o < i && !(e(t[o]) && (a.push(t[o]), 0 >= --r)) && (s = t[o].children, !(n && s && 0 < s.length && (s = Dn(e, s, n, r), a = a.concat(s), r -= s.length, 0 >= r))); o++);
		return a
	}

	function Nn(e, t) {
		for (var n = null, r = 0, a = t.length; r < a && !n; r++)
			if (!QZ(t[r])) continue;
			else e(t[r]) ? n = t[r] : 0 < t[r].children.length && (n = Nn(e, t[r].children));
		return n
	}

	function Bn(e, t) {
		for (var n = 0, r = t.length; n < r; n++)
			if (QZ(t[n]) && (e(t[n]) || 0 < t[n].children.length && Bn(e, t[n].children))) return !0;
		return !1
	}

	function In(e, t) {
		for (var n = [], r = 0, a = t.length; r < a; r++) QZ(t[r]) && (e(t[r]) && n.push(t[r]), 0 < t[r].children.length && (n = n.concat(In(e, t[r].children))));
		return n
	}

	function zn(e, t, n) {
		var r = '0x' + t - 65536;
		return r != r || n ? t : 0 > r ? Gd(r + 65536) : Gd(55296 | r >> 10, 56320 | 1023 & r)
	}

	function _n(e) {
		return e.replace(oJ, zn)
	}

	function Mn(e) {
		return ' ' === e || '\n' === e || '\t' === e || '\f' === e || '\r' === e
	}

	function Gn(e, t, n) {
		function r() {
			var e = t.match(aJ)[0];
			return t = t.substr(e.length), _n(e)
		}

		function a(e) {
			for (; Mn(t.charAt(e));) e++;
			t = t.substr(e)
		}
		var o = [],
			i = !1,
			s, l, d, c;
		for (a(0);
			'' !== t;)
			if (l = t.charAt(0), Mn(l)) i = !0, a(1);
			else if (l in lJ) o.push({
			type: lJ[l]
		}), i = !1, a(1);
		else if (',' === l) {
			if (0 === o.length) throw new SyntaxError('empty sub-selector');
			e.push(o), o = [], i = !1, a(1)
		} else if (i && (0 < o.length && o.push({
				type: 'descendant'
			}), i = !1), '*' === l) t = t.substr(1), o.push({
			type: 'universal'
		});
		else if (l in dJ) t = t.substr(1), o.push({
			type: 'attribute',
			name: dJ[l][0],
			action: dJ[l][1],
			value: r(),
			ignoreCase: !1
		});
		else if ('[' === l) {
			if (t = t.substr(1), s = t.match(iJ), !s) throw new SyntaxError('Malformed attribute selector: ' + t);
			t = t.substr(s[0].length), d = _n(s[1]), (!n || ('lowerCaseAttributeNames' in n ? n.lowerCaseAttributeNames : !n.xmlMode)) && (d = d.toLowerCase()), o.push({
				type: 'attribute',
				name: d,
				action: sJ[s[2]],
				value: _n(s[4] || s[5] || ''),
				ignoreCase: !!s[6]
			})
		} else if (':' === l) {
			if (':' === t.charAt(1)) {
				t = t.substr(2), o.push({
					type: 'pseudo-element',
					name: r().toLowerCase()
				});
				continue
			}
			if (t = t.substr(1), d = r().toLowerCase(), s = null, '(' === t.charAt(0))
				if (d in cJ) {
					c = t.charAt(1);
					var p = c in uJ;
					if (t = t.substr(p + 1), s = [], t = Gn(s, t, n), p)
						if (t.charAt(0) !== c) throw new SyntaxError('unmatched quotes in :' + d);
						else t = t.substr(1);
					if (')' !== t.charAt(0)) throw new SyntaxError('missing closing parenthesis in :' + d + ' ' + t);
					t = t.substr(1)
				} else {
					for (var u = 1, m = 1; 0 < m && u < t.length; u++) '(' === t.charAt(u) ? m++ : ')' === t.charAt(u) && m--;
					if (m) throw new SyntaxError('parenthesis not matched');
					s = t.substr(1, u - 2), t = t.substr(u), d in pJ && (c = s.charAt(0), c === s.slice(-1) && c in uJ && (s = s.slice(1, -1)), s = _n(s))
				}
			o.push({
				type: 'pseudo',
				name: d,
				data: s
			})
		} else if (aJ.test(t)) d = r(), (!n || ('lowerCaseTags' in n ? n.lowerCaseTags : !n.xmlMode)) && (d = d.toLowerCase()), o.push({
			type: 'tag',
			name: d
		});
		else return o.length && 'descendant' === o[o.length - 1].type && o.pop(), Un(e, o), t;
		return Un(e, o), t
	}

	function Un(e, t) {
		if (0 < e.length && 0 === t.length) throw new SyntaxError('empty sub-selector');
		e.push(t)
	}

	function Vn(e) {
		var t = TJ[e.type];
		if (t === TJ.attribute) t = EJ[e.action], t === EJ.equals && 'id' === e.name && (t = 9), e.ignoreCase && (t >>= 1);
		else if (t === TJ.pseudo)
			if (!e.data) t = 3;
			else if ('has' === e.name || 'contains' === e.name) t = 0;
		else if ('matches' === e.name || 'not' === e.name) {
			t = 0;
			for (var n = 0; n < e.data.length; n++)
				if (1 === e.data[n].length) {
					var r = Vn(e.data[n][0]);
					if (0 === r) {
						t = 0;
						break
					}
					r > t && (t = r)
				}
			1 < e.data.length && 0 < t && (t -= 1)
		} else t = 1;
		return t
	}

	function Wn(e) {
		function t(t, n) {
			return 'function' == typeof e.equals ? e.equals(t, n) : t === n
		}

		function n(e, t) {
			var n = {
				name: e,
				value: t
			};
			return function(e) {
				return o(e, n)
			}
		}

		function r(t) {
			return function(n) {
				return !!e.getParent(n) && t(n)
			}
		}
		var a = PJ(e),
			o = a.rules.equals,
			i = {
				contains: function(t, n) {
					return function(r) {
						return t(r) && 0 <= e.getText(r).indexOf(n)
					}
				},
				icontains: function(t, n) {
					var r = n.toLowerCase();
					return function(n) {
						return t(n) && 0 <= e.getText(n).toLowerCase().indexOf(r)
					}
				},
				"nth-child": function(t, n) {
					var a = IJ(n);
					return a === _J ? a : a === zJ ? r(t) : function(n) {
						for (var r = e.getSiblings(n), o = 0, i = 0; o < r.length; o++)
							if (e.isTag(r[o]))
								if (r[o] === n) break;
								else i++;
						return a(i) && t(n)
					}
				},
				"nth-last-child": function(t, n) {
					var a = IJ(n);
					return a === _J ? a : a === zJ ? r(t) : function(n) {
						for (var r = e.getSiblings(n), o = 0, s = r.length - 1; 0 <= s; s--)
							if (e.isTag(r[s]))
								if (r[s] === n) break;
								else o++;
						return a(o) && t(n)
					}
				},
				"nth-of-type": function(t, n) {
					var a = IJ(n);
					return a === _J ? a : a === zJ ? r(t) : function(n) {
						for (var r = e.getSiblings(n), o = 0, s = 0; s < r.length; s++)
							if (e.isTag(r[s])) {
								if (r[s] === n) break;
								e.getName(r[s]) === e.getName(n) && o++
							}
						return a(o) && t(n)
					}
				},
				"nth-last-of-type": function(t, n) {
					var a = IJ(n);
					return a === _J ? a : a === zJ ? r(t) : function(n) {
						for (var r = e.getSiblings(n), o = 0, s = r.length - 1; 0 <= s; s--)
							if (e.isTag(r[s])) {
								if (r[s] === n) break;
								e.getName(r[s]) === e.getName(n) && o++
							}
						return a(o) && t(n)
					}
				},
				root: function(t) {
					return function(n) {
						return !e.getParent(n) && t(n)
					}
				},
				scope: function(e, n, r, a) {
					return a && 0 !== a.length ? 1 === a.length ? function(n) {
						return t(a[0], n) && e(n)
					} : function(t) {
						return 0 <= a.indexOf(t) && e(t)
					} : i.root(e)
				},
				checkbox: n('type', 'checkbox'),
				file: n('type', 'file'),
				password: n('type', 'password'),
				radio: n('type', 'radio'),
				reset: n('type', 'reset'),
				image: n('type', 'image'),
				submit: n('type', 'submit')
			};
		return i
	}

	function Fn(e) {
		function t(t) {
			for (var n = 0; t && n < t.length; n++)
				if (e.isTag(t[n])) return t[n]
		}
		var n = {
			empty: function(t) {
				return !e.getChildren(t).some(function(t) {
					return e.isTag(t) || 'text' === t.type
				})
			},
			"first-child": function(n) {
				return t(e.getSiblings(n)) === n
			},
			"last-child": function(t) {
				for (var n = e.getSiblings(t), r = n.length - 1; 0 <= r; r--) {
					if (n[r] === t) return !0;
					if (e.isTag(n[r])) break
				}
				return !1
			},
			"first-of-type": function(t) {
				for (var n = e.getSiblings(t), r = 0; r < n.length; r++)
					if (e.isTag(n[r])) {
						if (n[r] === t) return !0;
						if (e.getName(n[r]) === e.getName(t)) break
					}
				return !1
			},
			"last-of-type": function(t) {
				for (var n = e.getSiblings(t), r = n.length - 1; 0 <= r; r--)
					if (e.isTag(n[r])) {
						if (n[r] === t) return !0;
						if (e.getName(n[r]) === e.getName(t)) break
					}
				return !1
			},
			"only-of-type": function(t) {
				for (var n = e.getSiblings(t), r = 0, a = n.length; r < a; r++)
					if (e.isTag(n[r])) {
						if (n[r] === t) continue;
						if (e.getName(n[r]) === e.getName(t)) return !1
					}
				return !0
			},
			"only-child": function(t) {
				for (var n = e.getSiblings(t), r = 0; r < n.length; r++)
					if (e.isTag(n[r]) && n[r] !== t) return !1;
				return !0
			},
			link: function(t) {
				return e.hasAttrib(t, 'href')
			},
			visited: _J,
			selected: function(t) {
				if (e.hasAttrib(t, 'selected')) return !0;
				if ('option' !== e.getName(t)) return !1;
				var n = e.getParent(t);
				if (!n || 'select' !== e.getName(n) || e.hasAttrib(n, 'multiple')) return !1;
				for (var r = e.getChildren(n), a = !1, o = 0; o < r.length; o++)
					if (e.isTag(r[o]))
						if (r[o] === t) a = !0;
						else {
							if (!a) return !1;
							if (e.hasAttrib(r[o], 'selected')) return !1
						}
				return a
			},
			disabled: function(t) {
				return e.hasAttrib(t, 'disabled')
			},
			enabled: function(t) {
				return !e.hasAttrib(t, 'disabled')
			},
			checked: function(t) {
				return e.hasAttrib(t, 'checked') || n.selected(t)
			},
			required: function(t) {
				return e.hasAttrib(t, 'required')
			},
			optional: function(t) {
				return !e.hasAttrib(t, 'required')
			},
			parent: function(e) {
				return !n.empty(e)
			},
			header: function(t) {
				var n = e.getName(t);
				return 'h1' === n || 'h2' === n || 'h3' === n || 'h4' === n || 'h5' === n || 'h6' === n
			},
			button: function(t) {
				var n = e.getName(t);
				return 'button' === n || 'input' === n && 'button' === e.getAttributeValue(t, 'type')
			},
			input: function(t) {
				var n = e.getName(t);
				return 'input' === n || 'textarea' === n || 'select' === n || 'button' === n
			},
			text: function(t) {
				var n;
				return 'input' === e.getName(t) && (!(n = e.getAttributeValue(t, 'type')) || 'text' === n.toLowerCase())
			}
		};
		return n
	}

	function jn(e, t, n) {
		if (null === n) {
			if (1 < e.length && 'scope' !== t) throw new Error('pseudo-selector :' + t + ' requires an argument');
		} else if (1 === e.length) throw new Error('pseudo-selector :' + t + ' doesn\'t have any arguments')
	}

	function Hn(e) {
		return e === tJ ? HJ : UJ(e)
	}

	function Yn(e) {
		return function(t, n, r) {
			r = r || {}, r.adapter = r.adapter || tJ;
			var a = Hn(r.adapter);
			return 'function' != typeof t && (t = a.compileUnsafe(t, r, n)), t.shouldTestNextSiblings && (n = Kn(r && r.context || n, r.adapter)), n = Array.isArray(n) ? r.adapter.removeSubsets(n) : r.adapter.getChildren(n), e(t, n, r)
		}
	}

	function $n(e, t) {
		var n = t.getSiblings(e);
		if (!Array.isArray(n)) return [];
		for (n = n.slice(0); n.shift() !== e;);
		return n
	}

	function Kn(e, t) {
		Array.isArray(e) || (e = [e]);
		for (var n = e.slice(0), r = 0, a = e.length, o; r < a; r++) o = $n(n[r], t), n.push.apply(n, o);
		return n
	}

	function Xn(e, t, n) {
		return YJ(e, t, n)
	}

	function Qn(e) {
		if (!e) throw new TypeError('Expected implementation');
		var t = KJ.filter(function(t) {
			return 'function' != typeof e[t]
		});
		if (t.length) {
			var n = '(' + t.join(', ') + ')';
			throw new Error('Expected functions ' + n + ' to be implemented')
		}
	}

	function Zn(e, t) {
		for (var n = t.length, r, a, o; - 1 < --n;) {
			for (r = a = t[n], t[n] = null, o = !0; a;) {
				if (-1 < t.indexOf(a)) {
					o = !1, t.splice(n, 1);
					break
				}
				a = e.getParent(a)
			}
			o && (t[n] = r)
		}
		return t
	}

	function Jn(e, t, n) {
		return n.some(function(n) {
			return !!e.isTag(n) && (t(n) || e.existsOne(t, e.getChildren(n)))
		})
	}

	function er(e, t) {
		var n = e.getParent(t);
		return n && e.getChildren(n)
	}

	function tr(e, t, n) {
		return void 0 !== e.getAttributeValue(t, n)
	}

	function nr(e, t, n) {
		for (var r = null, a = 0, o = n.length; a < o && !r; a++)
			if (t(n[a])) r = n[a];
			else {
				var i = e.getChildren(n[a]);
				i && 0 < i.length && (r = e.findOne(t, i))
			}
		return r
	}

	function rr(e, t, n) {
		for (var r = [], a = 0, o = n.length; a < o; a++)
			if (e.isTag(n[a])) {
				t(n[a]) && r.push(n[a]);
				var i = e.getChildren(n[a]);
				i && (r = r.concat(e.findAll(t, i)))
			}
		return r
	}

	function ar(e) {
		return {
			prev: null,
			next: null,
			data: e
		}
	}

	function ir(e, t, n) {
		var r;
		return null == une ? r = {
			prev: t,
			next: n,
			cursor: e.cursor
		} : (r = une, une = une.cursor, r.prev = t, r.next = n, r.cursor = e.cursor), e.cursor = r, r
	}

	function sr(e) {
		var t = e.cursor;
		e.cursor = t.cursor, t.prev = null, t.next = null, t.cursor = une, une = t
	}

	function lr(e, t) {
		function n(e, t) {
			return r.slice(e, t).map(function(t, n) {
				for (var r = e + n + 1 + ''; r.length < d;) r = ' ' + r;
				return r + ' |' + t
			}).join('\n')
		}
		var r = e.source.split(/\r\n?|\n|\f/),
			a = e.line,
			o = e.column,
			s = Md(1, a - t) - 1,
			l = Ud(a + t, r.length + 1),
			d = Md(4, (l + '').length) + 1,
			c = 0;
		o += (kne.length - 1) * (r[a - 1].substr(0, o - 1).match(/\t/g) || []).length, o > yne && (c = o - xne + 3, o = xne - 2);
		for (var p = s; p <= l; p++) 0 <= p && p < r.length && (r[p] = r[p].replace(/\t/g, kne), r[p] = (0 < c && r[p].length > c ? '\u2026' : '') + r[p].substr(c, yne - 2) + (r[p].length > c + yne - 1 ? '\u2026' : ''));
		return [n(s, a), Array(o + d + 2).join('-') + '^', n(a, l)].filter(Boolean).join('\n')
	}

	function dr(e) {
		return 48 <= e && 57 >= e || 65 <= e && 70 >= e || 97 <= e && 102 >= e
	}

	function cr(e) {
		return 48 <= e && 57 >= e
	}

	function ur(e, t, n) {
		return n === Yne || n === $ne || n === Kne ? n === Kne && t + 1 < e.length && e.charCodeAt(t + 1) === Yne ? 2 : 1 : 0
	}

	function mr(e, t, n, r) {
		if (n - t !== r.length) return !1;
		if (0 > t || n > e.length) return !1;
		for (var a = t; a < n; a++) {
			var o = e.charCodeAt(a),
				i = r.charCodeAt(a - t);
			if (65 <= o && 90 >= o && (o |= 32), o !== i) return !1
		}
		return !0
	}

	function gr(e, t) {
		for (; t < e.length; t++) {
			var n = e.charCodeAt(t);
			if (48 > n || 57 < n) break
		}
		return t
	}

	function hr(e, t) {
		for (var n = 0, r; 7 > n && t + n < e.length; n++)
			if (r = e.charCodeAt(t + n), !(6 !== n && dr(r))) {
				0 < n && (t += n - 1 + ur(e, t + n, r), (r === Xne || r === Hne) && t++);
				break
			}
		return t
	}

	function fr(e, t) {
		var n = t.length,
			r = nre(t),
			a = e.lines,
			o = e.startLine,
			s = e.columns,
			l = e.startColumn;
		(null === a || a.length < n + 1) && (a = new Hre(Md(n + 1024, Wre)), s = new Hre(a.length));
		for (var d = r, i; d < n; d++) i = t.charCodeAt(d), a[d] = o, s[d] = l++, (i === Ere || i === F || i === N) && (i === F && d + 1 < n && t.charCodeAt(d + 1) === Ere && (d++, a[d] = o, s[d] = l), o++, l = 1);
		a[d] = o, s[d] = l, e.linesAnsColumnsComputed = !0, e.lines = a, e.columns = s
	}

	function yr(e, t, n) {
		var r = t.length,
			a = e.offsetAndType,
			o = e.balance,
			i = 0,
			s = 0,
			l = n,
			d = 0,
			c = 0,
			p = 0,
			u = 0;
		for ((null === a || a.length < r + 1) && (a = new Hre(r + 1024), o = new Hre(r + 1024)); l < r;) {
			var m = t.charCodeAt(l),
				g = 128 > m ? tre[m] : hre;
			switch (o[i] = r, g) {
				case gre:
					l = ire(t, l + 1);
					break;
				case xre:
					switch (m) {
						case c:
							for (u = p & Fre, p = o[u], c = p >> jre, o[i] = u, o[u++] = i; u < i; u++) o[u] === r && (o[u] = i);
							break;
						case Ure:
							o[i] = p, c = Vre, p = c << jre | i;
							break;
						case Mre:
							o[i] = p, c = Gre, p = c << jre | i;
							break;
						case zre:
							o[i] = p, c = _re, p = c << jre | i;
					}
					if (m === R && s === Are) {
						g = bre, l = sre(t, l + 1), i--;
						break
					}
					if (m === Ore && (s === Pre || s === Lre) && l + 1 < r && are(t.charCodeAt(l + 1))) {
						g = fre, l = dre(t, l + 2, !1), i--;
						break
					}
					if (m === Dre && s === Rre && l + 2 < r && t.charCodeAt(l + 1) === Lre && t.charCodeAt(l + 2) === Lre) {
						g = kre, l += 3, i--;
						break
					}
					if (m === Lre && s === Lre && l + 1 < r && t.charCodeAt(l + 1) === qre) {
						g = Sre, l += 2, i--;
						break
					}
					if (m === zre && s === hre) {
						++l, i--, o[i] = o[i + 1], p--, 4 == l - d && rre(t, d, l, 'url(') ? (d = ire(t, l), m = t.charCodeAt(d), m !== zre && m !== _re && m !== Bre && m !== Ire ? (a[i++] = Tre << jre | l, o[i] = r, d !== l && (a[i++] = gre << jre | d, o[i] = r), g = Cre, l = ure(t, d)) : g = Tre) : g = vre;
						break
					}
					g = m, ++l;
					break;
				case fre:
					l = dre(t, l + 1, s !== Ore), (s === Ore || s === Lre || s === Pre) && i--;
					break;
				case yre:
					l = lre(t, l + 1, m);
					break;
				default:
					d = l, l = cre(t, l), s === Lre && (i--, s = 0 == i ? 0 : a[i - 1] >> jre), s === Nre && (i--, g = wre);
			}
			a[i++] = g << jre | l, s = g
		}
		for (a[i] = l, o[i] = r, o[r] = r; 0 !== p;) u = p & Fre, p = o[u], o[u] = r;
		e.offsetAndType = a, e.tokenCount = i, e.balance = o
	}

	function br(e, t) {
		return e && e.type === t
	}

	function xr(e) {
		return 0 === e.min && 0 === e.max ? '*' : 0 === e.min && 1 === e.max ? '?' : 1 === e.min && 0 === e.max ? e.comma ? '#' : '+' : 1 === e.min && 1 === e.max ? '' : (e.comma ? '#' : '') + '{' + e.min + (e.min === e.max ? '' : ',' + (0 === e.max ? '' : e.max)) + '}'
	}

	function kr(e, t, n) {
		var r = '';
		return (e.explicit || t) && (r += '[' + (br(e.terms[0], 'Comma') ? '' : ' ')), r += e.terms.map(function(e) {
			return vr(e, t, n)
		}).join(' ' === e.combinator ? ' ' : ' ' + e.combinator + ' '), (e.explicit || t) && (r += ' ]'), r
	}

	function Sr(e, t, n) {
		return e.terms.length ? '( ' + kr(e, t, n) + ' )' : '()'
	}

	function vr(e, t, n) {
		var r;
		switch (e.type) {
			case 'Group':
				r = kr(e, t, n) + (e.disallowEmpty ? '!' : '') + xr(e.multiplier);
				break;
			case 'Keyword':
				r = e.name;
				break;
			case 'Function':
				r = e.name + Sr(e.children, t, n);
				break;
			case 'Parentheses':
				r = Sr(e.children, t, n);
				break;
			case 'Type':
				r = '<' + e.name + '>';
				break;
			case 'Property':
				r = '<\'' + e.name + '\'>';
				break;
			case 'Combinator':
			case 'Slash':
			case 'Percent':
			case 'String':
			case 'Comma':
				r = e.value;
				break;
			default:
				throw new Error('Unknown node type `' + e.type + '`');
		}
		return 'function' == typeof n && (r = n(r, e)), r
	}

	function Tr(e, t) {
		var n = e && e.loc && e.loc[t];
		return n ? {
			offset: n.offset,
			line: n.line,
			column: n.column
		} : null
	}

	function Cr(e, t) {
		return 2 <= e.length - t && e.charCodeAt(t) === eae && e.charCodeAt(t + 1) === eae
	}

	function Er(e, t) {
		if (e.charCodeAt(t) === eae) {
			var n = e.indexOf('-', t + 2);
			if (-1 !== n) return e.substring(t, n + 1)
		}
		return ''
	}

	function Ar(e) {
		if ('Function' !== e.data.type) return !1;
		var t = tae.keyword(e.data.name);
		return 'calc' === t.name && ('' === t.vendor || '-moz-' === t.vendor || '-webkit-' === t.vendor)
	}

	function Lr(e) {
		return function(t) {
			return t.data.type === e
		}
	}

	function qr(e) {
		return function(t) {
			return Ar(t) || 'Dimension' === t.data.type && e.hasOwnProperty(t.data.unit.toLowerCase())
		}
	}

	function Rr(e) {
		return function(t) {
			return Ar(t) || 'Dimension' === t.data.type && e.hasOwnProperty(t.data.unit.toLowerCase()) || 'Number' === t.data.type && 0 === +t.data.value
		}
	}

	function Dr(e) {
		for (var t = e.pos + 1, n; t < e.str.length && (n = e.str.charCodeAt(t), n === lae || n === iae || n === sae || n === dae || n === oae); t++);
		return e.substringToPos(t)
	}

	function Nr(e) {
		for (var t = e.pos, n; t < e.str.length && (n = e.str.charCodeAt(t), !(128 <= n || 0 === Bae[n])); t++);
		return e.pos === t && Yr(e, e.pos, 'Expect a keyword'), e.substringToPos(t)
	}

	function Br(e) {
		for (var t = e.pos, n; t < e.str.length && (n = e.str.charCodeAt(t), !(48 > n || 57 < n)); t++);
		return e.pos === t && Yr(e, e.pos, 'Expect a number'), e.substringToPos(t)
	}

	function Ir(e) {
		var t = e.str.indexOf('\'', e.pos + 1);
		return -1 === t && Yr(e, e.str.length, 'Expect a quote'), e.substringToPos(t + 1)
	}

	function zr(e, t) {
		var n = null,
			r = null;
		return e.eat(Eae), n = Br(e), e.charCode() === xae ? (e.pos++, e.charCode() !== Oae && (r = Br(e))) : r = n, e.eat(Oae), {
			comma: t,
			min: +n,
			max: r ? +r : 0
		}
	}

	function _r(e) {
		switch (e.charCode()) {
			case yae:
				return e.pos++, qae;
			case bae:
				return e.pos++, Rae;
			case vae:
				return e.pos++, Nae;
			case pae:
				return e.pos++, e.charCode() === Eae ? zr(e, !0) : Dae;
			case Eae:
				return zr(e, !1);
		}
		return Lae
	}

	function Mr(e, t) {
		var n = _r(e);
		return n === Lae ? t : {
			type: 'Group',
			terms: [t],
			combinator: '|',
			disallowEmpty: !1,
			multiplier: n,
			explicit: !1
		}
	}

	function Gr(e) {
		var t;
		return e.eat(Sae), e.eat(gae), t = Nr(e), e.eat(gae), e.eat(wae), Mr(e, {
			type: 'Property',
			name: t
		})
	}

	function Ur(e) {
		var t;
		return e.eat(Sae), t = Nr(e), e.charCode() === hae && e.nextCharCode() === fae && (e.pos += 2, t += '()'), e.eat(wae), Mr(e, {
			type: 'Type',
			name: t
		})
	}

	function Vr(e) {
		var t = null,
			n;
		return n = Nr(e), e.charCode() === hae ? (e.pos++, t = Fr(e), e.eat(fae), Mr(e, {
			type: 'Function',
			name: n,
			children: t
		})) : Mr(e, {
			type: 'Keyword',
			name: n
		})
	}

	function Wr(e, t) {
		function n(e, t) {
			return {
				type: 'Group',
				terms: e,
				combinator: t,
				disallowEmpty: !1,
				multiplier: Lae,
				explicit: !1
			}
		}
		for (t = Object.keys(t).sort(function(e, t) {
				return Pae[e] - Pae[t]
			}); 0 < t.length;) {
			for (var r = t.shift(), a = 0, o = 0, i; a < e.length; a++) i = e[a], 'Combinator' === i.type && (i.value === r ? (-1 == o && (o = a - 1), e.splice(a, 1), a--) : (-1 != o && 1 < a - o && (e.splice(o, a - o, n(e.slice(o, a), r)), a = o + 1), o = -1)); - 1 != o && t.length && e.splice(o, a - o, n(e.slice(o, a), r))
		}
		return r
	}

	function Fr(e) {
		for (var t = [], n = {}, r = null, a = e.pos, o; o = Hr(e);) 'Spaces' !== o.type && ('Combinator' === o.type ? ((null == r || 'Combinator' === r.type) && Yr(e, a, 'Unexpected combinator'), n[o.value] = !0) : null != r && 'Combinator' !== r.type && (n[' '] = !0, t.push({
			type: 'Combinator',
			value: ' '
		})), t.push(o), r = o, a = e.pos);
		return null !== r && 'Combinator' === r.type && Yr(e, e.pos - a, 'Unexpected combinator'), {
			type: 'Group',
			terms: t,
			combinator: Wr(t, n) || ' ',
			disallowEmpty: !1,
			multiplier: Lae,
			explicit: !1
		}
	}

	function jr(e) {
		var t;
		return e.eat(Tae), t = Fr(e), e.eat(Cae), t.explicit = !0, t.multiplier = _r(e), e.charCode() === cae && (e.pos++, t.disallowEmpty = !0), t
	}

	function Hr(e) {
		var t = e.charCode();
		if (128 > t && 1 === Bae[t]) return Vr(e);
		switch (t) {
			case Tae:
				return jr(e);
			case Sae:
				return e.nextCharCode() === gae ? Gr(e) : Ur(e);
			case Aae:
				return {
					type: 'Combinator',
					value: e.substringToPos(e.nextCharCode() === Aae ? e.pos + 2 : e.pos + 1)
				};
			case mae:
				return e.pos++, e.eat(mae), {
					type: 'Combinator',
					value: '&&'
				};
			case xae:
				return e.pos++, {
					type: 'Comma',
					value: ','
				};
			case kae:
				return e.pos++, {
					type: 'Slash',
					value: '/'
				};
			case uae:
				return e.pos++, {
					type: 'Percent',
					value: '%'
				};
			case hae:
				e.pos++;
				var n = Fr(e);
				return e.eat(fae), {
					type: 'Parentheses',
					children: n
				};
			case gae:
				return {
					type: 'String',
					value: Ir(e)
				};
			case dae:
			case oae:
			case iae:
			case lae:
			case sae:
				return {
					type: 'Spaces',
					value: Dr(e)
				};
		}
	}

	function Yr(e, t, n) {
		throw new aae(n || 'Unexpected input', e.str, t)
	}

	function $r(e) {
		var t = new Iae(e),
			n = Fr(t);
		return t.pos !== e.length && Yr(t, t.pos), 1 === n.terms.length && 'Group' === n.terms[0].type && (n = n.terms[0]), n
	}

	function Kr(e) {
		for (; null !== e && ('WhiteSpace' === e.data.type || 'Comment' === e.data.type);) e = e.next;
		return e
	}

	function Xr(e, t) {
		var n = t.type || t.syntax.type;
		'Group' === n ? e.push.apply(e, t.match) : e.push(t)
	}

	function Qr() {
		return {
			type: this.syntax.type,
			name: this.syntax.name,
			match: this.match,
			node: this.node
		}
	}

	function Zr(e, t, n, r) {
		return e ? {
			badNode: e,
			lastNode: null,
			next: null,
			match: null
		} : {
			badNode: null,
			lastNode: t,
			next: n,
			match: r
		}
	}

	function Jr(e, t, n) {
		var r = [],
			a = t.multiplier || Mae,
			o = a.min,
			s = 0 === a.max ? Infinity : a.max,
			l = 0,
			d = null,
			c = null,
			p, u, m;
		mismatch: for (; l < s;) {
			switch (n = Kr(n), p = [], t.combinator) {
				case '|':
					for (var g = 0; g < t.terms.length; g++) {
						var i = t.terms[g],
							h = ea(e, i, n);
						if (h.match) {
							Xr(p, h.match), n = h.next;
							break
						} else if (h.badNode) {
							c = h.badNode;
							break mismatch
						} else h.lastNode && (d = h.lastNode)
					}
					if (0 === p.length) break mismatch;
					break;
				case ' ':
					for (var f = n, y = null, b = !1, x = !1, g = 0; g < t.terms.length; g++) {
						var i = t.terms[g],
							h = ea(e, i, n);
						if (h.match) {
							if ('Comma' === i.type && 0 !== g && !b) {
								d = n && n.data, n = f;
								break mismatch
							}
							if (h.next !== n) {
								if (x) {
									d = n && n.data, n = f;
									break mismatch
								}
								b = 'Comma' !== i.type, y = i
							}
							Xr(p, h.match), n = Kr(h.next)
						} else if (h.badNode) {
							c = h.badNode;
							break mismatch
						} else {
							if (h.lastNode && (d = h.lastNode), 'Comma' === i.type && 0 !== g && g !== t.terms.length - 1) {
								b && (x = !0);
								continue
							}
							d = h.lastNode || n && n.data, n = f;
							break mismatch
						}
					}
					if (!y && t.disallowEmpty) {
						d = n && n.data, n = f;
						break mismatch
					}
					if (y && 'Comma' === y.type && 'Comma' !== i.type) {
						d = n && n.data, n = f;
						break mismatch
					}
					break;
				case '&&':
					for (var f = n, y = null, k = t.terms.slice(); k.length;) {
						for (var S = !1, w = 0, g = 0; g < k.length; g++) {
							var i = k[g],
								h = ea(e, i, n);
							if (h.match) {
								if (h.next !== n) y = i;
								else {
									w++;
									continue
								}
								S = !0, k.splice(g--, 1), Xr(p, h.match), n = Kr(h.next);
								break
							} else if (h.badNode) {
								c = h.badNode;
								break mismatch
							} else h.lastNode && (d = h.lastNode)
						}
						if (!S) {
							if (w === k.length) break;
							d = n && n.data, n = f;
							break mismatch
						}
					}
					if (!y && t.disallowEmpty) {
						d = n && n.data, n = f;
						break mismatch
					}
					break;
				case '||':
					for (var f = n, y = null, k = t.terms.slice(); k.length;) {
						for (var S = !1, w = 0, g = 0; g < k.length; g++) {
							var i = k[g],
								h = ea(e, i, n);
							if (h.match) {
								if (h.next !== n) y = i;
								else {
									w++;
									continue
								}
								S = !0, k.splice(g--, 1), Xr(p, h.match), n = Kr(h.next);
								break
							} else if (h.badNode) {
								c = h.badNode;
								break mismatch
							} else h.lastNode && (d = h.lastNode)
						}
						if (!S) break
					}
					if (!y && (w !== k.length || t.disallowEmpty)) {
						d = n && n.data, n = f;
						break mismatch
					}
			}
			if (r.push.apply(r, p), l++, !n) break;
			if (a.comma) {
				if (m && u === r.length) break mismatch;
				if (n = Kr(n), null !== n && 'Operator' === n.data.type && ',' === n.data.value) r.push({
					syntax: t,
					match: [{
						type: 'ASTNode',
						node: n.data,
						childrenMatch: null
					}]
				}), u = r.length, m = n, n = n.next;
				else {
					d = null === n ? null : n.data;
					break mismatch
				}
			}
		}
		return m && u === r.length && (n = m, r.pop()), Zr(c, d, n, l < o ? null : {
			syntax: t,
			match: r,
			toJSON: Qr
		})
	}

	function ea(e, t, n) {
		var r = null,
			a = null,
			o = null;
		switch (t.type) {
			case 'Group':
				return Jr(e, t, n);
			case 'Function':
				if (!n || 'Function' !== n.data.type) break;
				var i = tae.keyword(n.data.name),
					s = t.name.toLowerCase();
				if (s !== i.vendor + i.name) break;
				var l = ea(e, t.children, n.data.children.head);
				if (!l.match || l.next) {
					r = l.badNode || l.lastNode || (l.next ? l.next.data : null) || n.data;
					break
				}
				o = [{
					type: 'ASTNode',
					node: n.data,
					childrenMatch: l.match.match
				}], n = n.next;
				break;
			case 'Parentheses':
				if (!n || 'Parentheses' !== n.data.type) break;
				var l = ea(e, t.children, n.data.children.head);
				if (!l.match || l.next) {
					r = l.badNode || l.lastNode || (l.next ? l.next.data : null) || n.data;
					break
				}
				o = [{
					type: 'ASTNode',
					node: n.data,
					childrenMatch: l.match.match
				}], n = l.next;
				break;
			case 'Type':
				var d = e.getType(t.name);
				if (!d) throw new Error('Unknown syntax type `' + t.name + '`');
				var l = d.match(n);
				if (!l.match) {
					r = l && l.badNode, a = l && l.lastNode || n && n.data;
					break
				}
				n = l.next, Xr(o = [], l.match), 0 === o.length && (o = null);
				break;
			case 'Property':
				var c = e.getProperty(t.name);
				if (!c) throw new Error('Unknown property `' + t.name + '`');
				var l = c.match(n);
				if (!l.match) {
					r = l && l.badNode, a = l && l.lastNode || n && n.data;
					break
				}
				n = l.next, Xr(o = [], l.match), 0 === o.length && (o = null);
				break;
			case 'Keyword':
				if (!n) break;
				if ('Identifier' === n.data.type) {
					var i = tae.keyword(n.data.name),
						p = i.name,
						s = t.name.toLowerCase();
					if (-1 !== p.indexOf('\\') && (p = p.replace(/\\[09].*$/, '')), s !== i.vendor + p) break
				} else if ('Number' !== n.data.type || n.data.value !== t.name) break;
				o = [{
					type: 'ASTNode',
					node: n.data,
					childrenMatch: null
				}], n = n.next;
				break;
			case 'Slash':
			case 'Comma':
				if (!n || 'Operator' !== n.data.type || n.data.value !== t.value) break;
				o = [{
					type: 'ASTNode',
					node: n.data,
					childrenMatch: null
				}], n = n.next;
				break;
			case 'String':
				if (!n || 'String' !== n.data.type) break;
				o = [{
					type: 'ASTNode',
					node: n.data,
					childrenMatch: null
				}], n = n.next;
				break;
			case 'ASTNode':
				return n && t.match(n) && (o = {
					type: 'ASTNode',
					node: n.data,
					childrenMatch: null
				}, n = n.next), Zr(r, a, n, o);
			default:
				throw new Error('Not implemented yet node type: ' + t.type);
		}
		return Zr(r, a, n, null === o ? null : {
			syntax: t,
			match: o,
			toJSON: Qr
		})
	}

	function ta(e) {
		function t(r) {
			if ('ASTNode' === r.type) {
				if (r.node === e) return n = [], !0;
				if (r.childrenMatch)
					for (var a = 0; a < r.childrenMatch.length; a++)
						if (t(r.childrenMatch[a])) return !0
			} else
				for (var a = 0; a < r.match.length; a++)
					if (t(r.match[a])) return ('Type' === r.syntax.type || 'Property' === r.syntax.type || 'Keyword' === r.syntax.type) && n.unshift(r.syntax), !0;
			return !1
		}
		var n = null;
		return null !== this.matched && t(this.matched), n
	}

	function na(e, t, n) {
		var r = ta.call(e, t);
		return null !== r && r.some(n)
	}

	function ra(e) {
		return 'ASTNode' === e.type ? e.node : 0 === e.match.length ? null : ra(e.match[0])
	}

	function aa(e) {
		return 'ASTNode' === e.type ? e.node : 0 === e.match.length ? null : aa(e.match[e.match.length - 1])
	}

	function oa(e) {
		return 'number' == typeof e && isFinite(e) && Fd(e) === e && 0 <= e
	}

	function ia(e) {
		return !!e && oa(e.offset) && oa(e.line) && oa(e.column)
	}

	function sa(e, t) {
		return function(n, r) {
			if (!n || n.constructor !== Object) return r(n, 'Type of node should be an Object');
			for (var a in n) {
				var o = !0;
				if (!1 !== Wae.call(n, a)) {
					if ('type' == a) n.type !== e && r(n, 'Wrong node type `' + n.type + '`, expected `' + e + '`');
					else if ('loc' == a) {
						if (null === n.loc) continue;
						else if (n.loc && n.loc.constructor === Object)
							if ('string' != typeof n.loc.source) a += '.source';
							else if (!ia(n.loc.start)) a += '.start';
						else if (!ia(n.loc.end)) a += '.end';
						else continue;
						o = !1
					} else if (t.hasOwnProperty(a))
						for (var s = 0, o = !1, i; !o && s < t[a].length; s++) i = t[a][s], i === String ? o = 'string' == typeof n[a] : i === Boolean ? o = 'boolean' == typeof n[a] : null === i ? o = null === n[a] : 'string' == typeof i ? o = n[a] && n[a].type === i : Array.isArray(i) && (o = n[a] instanceof hne);
					else r(n, 'Unknown field `' + a + '` for ' + e + ' node type');
					o || r(n, 'Bad value for `' + e + '.' + a + '`')
				}
			}
			for (var a in t) Wae.call(t, a) && !1 === Wae.call(n, a) && r(n, 'Field `' + e + '.' + a + '` is missed')
		}
	}

	function la(e, t) {
		var n = t.structure,
			r = {
				type: String,
				loc: !0
			},
			a = {
				type: '"' + e + '"'
			};
		for (var o in n)
			if (!1 !== Wae.call(n, o)) {
				for (var s = [], l = r[o] = Array.isArray(n[o]) ? n[o].slice() : [n[o]], d = 0, i; d < l.length; d++)
					if (i = l[d], i === String || i === Boolean) s.push(i.name);
					else if (null === i) s.push('null');
				else if ('string' == typeof i) s.push('<' + i + '>');
				else if (Array.isArray(i)) s.push('List');
				else throw new Error('Wrong value `' + i + '` in `' + e + '.' + o + '` structure definition');
				a[o] = s.join(' | ')
			}
		return {
			docs: a,
			check: sa(e, r)
		}
	}

	function da(e, t) {
		var n = {};
		for (var r in e) e[r].syntax && (n[r] = t ? e[r].syntax : Kre(e[r].syntax));
		return n
	}

	function ca(e) {
		return e && e.data
	}

	function pa(e) {
		var t = !1;
		return this.syntax.walk(e, function(e) {
			'Function' === e.type && 'var' === e.name.toLowerCase() && (t = !0)
		}), t
	}

	function ua(e) {
		return 'Identifier' === e.type && /^\\[09]/.test(e.name)
	}

	function ma(e) {
		for (; null !== e;) {
			if ('WhiteSpace' !== e.data.type && 'Comment' !== e.data.type && !ua(e.data)) return !1;
			e = e.next
		}
		return !0
	}

	function ga(e, t) {
		return {
			matched: e,
			error: t,
			getTrace: Uae.getTrace,
			isType: Uae.isType,
			isProperty: Uae.isProperty,
			isKeyword: Uae.isKeyword
		}
	}

	function ha(e, t, n) {
		var r;
		return n && 'Value' === n.type ? pa.call(e, n) ? ga(null, new Error('Matching for a value with var() is not supported')) : (r = Gae(e, e.valueCommonSyntax, n.children.head), !r.match && (r = t.match(n.children.head), !r.match)) ? ga(null, new jae('Mismatch', e, t.syntax, n, r.badNode || ca(r.next) || n)) : ('ASTNode' === r.match.type ? r.match = {
			syntax: {
				type: t.type,
				name: t.name
			},
			match: [r.match]
		} : 'Group' === r.match.syntax.type && (r.match.syntax = {
			type: t.type,
			name: t.name
		}), r.next && !ma(r.next) ? ga(null, new jae('Uncomplete match', e, t.syntax, n, r.badNode || ca(r.next) || n)) : ga(r.match, null)) : ga(null, new Error('Not a Value node'))
	}

	function fa(e) {
		return function() {
			return this[e]()
		}
	}

	function ya(e) {
		var t = {
			context: {},
			scope: {},
			atrule: {},
			pseudo: {}
		};
		if (e.parseContext)
			for (var n in e.parseContext) switch (typeof e.parseContext[n]) {
				case 'function':
					t.context[n] = e.parseContext[n];
					break;
				case 'string':
					t.context[n] = fa(e.parseContext[n]);
			}
		if (e.scope)
			for (var n in e.scope) t.scope[n] = e.scope[n];
		if (e.atrule)
			for (var n in e.atrule) {
				var r = e.atrule[n];
				r.parse && (t.atrule[n] = r.parse)
			}
		if (e.pseudo)
			for (var n in e.pseudo) {
				var a = e.pseudo[n];
				a.parse && (t.pseudo[n] = a.parse)
			}
		if (e.node)
			for (var n in e.node) t[n] = e.node[n].parse;
		return t
	}

	function ba(e) {
		return 0 > e ? (-e << 1) + 1 : (e << 1) + 0
	}

	function xa(e) {
		var t = e >> 1;
		return 1 == (1 & e) ? -t : t
	}

	function ka() {
		this._array = [], this._set = moe ? new Map : Object.create(null)
	}

	function Sa(e, t) {
		var n = e.generatedLine,
			r = t.generatedLine,
			a = e.generatedColumn,
			o = t.generatedColumn;
		return r > n || r == n && o >= a || 0 >= poe.compareByGeneratedPositionsInflated(e, t)
	}

	function wa() {
		this._array = [], this._sorted = !0, this._last = {
			generatedLine: -1,
			generatedColumn: 0
		}
	}

	function va(e) {
		e || (e = {}), this._file = poe.getArg(e, 'file', null), this._sourceRoot = poe.getArg(e, 'sourceRoot', null), this._skipValidation = poe.getArg(e, 'skipValidation', !1), this._sources = new hoe, this._names = new hoe, this._mappings = new foe, this._sourcesContents = null
	}

	function Ta(e, t, n) {
		var r = e[t];
		e[t] = e[n], e[n] = r
	}

	function Ca(e, t) {
		return zd(e + Math.random() * (t - e))
	}

	function Ea(e, t, n, a) {
		if (n < a) {
			var r = Ca(n, a),
				o = n - 1;
			Ta(e, r, a);
			for (var i = e[a], s = n; s < a; s++) 0 >= t(e[s], i) && (o += 1, Ta(e, o, s));
			Ta(e, o + 1, s);
			var l = o + 1;
			Ea(e, t, n, l - 1), Ea(e, t, l + 1, a)
		}
	}

	function Aa(e) {
		var t = e;
		return 'string' == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, ''))), null == t.sections ? new Oa(t) : new La(t)
	}

	function Oa(e) {
		var t = e;
		'string' == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, '')));
		var n = poe.getArg(t, 'version'),
			r = poe.getArg(t, 'sources'),
			a = poe.getArg(t, 'names', []),
			o = poe.getArg(t, 'sourceRoot', null),
			i = poe.getArg(t, 'sourcesContent', null),
			s = poe.getArg(t, 'mappings'),
			l = poe.getArg(t, 'file', null);
		if (n != this._version) throw new Error('Unsupported version: ' + n);
		r = r.map(String).map(poe.normalize).map(function(e) {
			return o && poe.isAbsolute(o) && poe.isAbsolute(e) ? poe.relative(o, e) : e
		}), this._names = xoe.fromArray(a.map(String), !0), this._sources = xoe.fromArray(r, !0), this.sourceRoot = o, this.sourcesContent = i, this._mappings = s, this.file = l
	}

	function Pa() {
		this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null
	}

	function La(e) {
		var t = e;
		'string' == typeof e && (t = JSON.parse(e.replace(/^\)\]\}'/, '')));
		var n = poe.getArg(t, 'version'),
			r = poe.getArg(t, 'sections');
		if (n != this._version) throw new Error('Unsupported version: ' + n);
		this._sources = new xoe, this._names = new xoe;
		var a = {
			line: -1,
			column: 0
		};
		this._sections = r.map(function(e) {
			if (e.url) throw new Error('Support for url field in sections not implemented.');
			var t = poe.getArg(e, 'offset'),
				n = poe.getArg(t, 'line'),
				r = poe.getArg(t, 'column');
			if (n < a.line || n === a.line && r < a.column) throw new Error('Section offsets must be ordered and non-overlapping.');
			return a = t, {
				generatedOffset: {
					generatedLine: n + 1,
					generatedColumn: r + 1
				},
				consumer: new Aa(poe.getArg(e, 'map'))
			}
		})
	}

	function qa(e, t, n, r, a) {
		this.children = [], this.sourceContents = {}, this.line = null == e ? null : e, this.column = null == t ? null : t, this.source = null == n ? null : n, this.name = null == a ? null : a, this[voe] = !0, null != r && this.add(r)
	}

	function Ra(e, t) {
		for (var n = t.children, r = n.head; null !== r;) this.generate(e, r.data, r, n), r = r.next
	}

	function Da(e, t) {
		for (var n = t.children, r = n.head; null !== r;) r.prev && e(','), this.generate(e, r.data, r, n), r = r.next
	}

	function Na(e) {
		var t = {
			generate: function(t, n, r, a) {
				if (qoe.call(e, n.type)) e[n.type].call(this, t, n, r, a);
				else throw new Error('Unknown node type: ' + n.type)
			},
			each: Ra,
			eachComma: Da
		};
		return function(e, n) {
			if ('function' != typeof n) {
				var r = [];
				return t.generate(function(e) {
					r.push(e)
				}, e), r.join('')
			}
			t.generate(n, e)
		}
	}

	function Ba(e) {
		var t = {
			generate: function(t, n, r, a) {
				if (qoe.call(e, n.type)) {
					var o = [];
					e[n.type].call(this, function(e) {
						o.push(e)
					}, n, r, a), t({
						node: n,
						value: o
					})
				} else throw new Error('Unknown node type: ' + n.type)
			},
			each: Ra,
			eachComma: Da
		};
		return function(e, n, r) {
			function a(e) {
				for (var t = 0; t < e.length; t++) 10 === e.charCodeAt(t) ? (s++, l = 0) : l++;
				return e
			}

			function o(e, t) {
				var d = e.value;
				if (n(e.node, t, s, l), 'string' == typeof d) t += a(d);
				else
					for (var c = 0; c < d.length; c++) 'string' == typeof d[c] ? t += a(d[c]) : t = o(d[c], t);
				return r(e.node, t, s, l), t
			}
			'function' != typeof n && (n = Roe), 'function' != typeof r && (r = Roe);
			var i = [],
				s = 1,
				l = 0;
			return t.generate(function() {
				i.push.apply(i, arguments)
			}, e), o(i[0], '')
		}
	}

	function Ia(e) {
		var t = {};
		if (e.node)
			for (var n in e.node) {
				var r = e.node[n];
				t[n] = r.generate
			}
		return t
	}

	function za(e, t, n) {
		switch (e.type) {
			case 'StyleSheet':
				var r = this.stylesheet;
				this.stylesheet = e, e.children.each(za, this), this.stylesheet = r;
				break;
			case 'Atrule':
				if (null !== e.block) {
					var a = this.atrule;
					this.atrule = e, za.call(this, e.block), this.atrule = a
				}
				this.fn(e, t, n);
				break;
			case 'Rule':
				this.fn(e, t, n);
				var o = this.rule;
				this.rule = e, za.call(this, e.block), this.rule = o;
				break;
			case 'Block':
				var i = this.block;
				this.block = e, e.children.each(za, this), this.block = i;
		}
	}

	function _a(e, t, n) {
		switch (e.type) {
			case 'StyleSheet':
				var r = this.stylesheet;
				this.stylesheet = e, e.children.eachRight(_a, this), this.stylesheet = r;
				break;
			case 'Atrule':
				if (null !== e.block) {
					var a = this.atrule;
					this.atrule = e, _a.call(this, e.block), this.atrule = a
				}
				this.fn(e, t, n);
				break;
			case 'Rule':
				var o = this.rule;
				this.rule = e, _a.call(this, e.block), this.rule = o, this.fn(e, t, n);
				break;
			case 'Block':
				var i = this.block;
				this.block = e, e.children.eachRight(_a, this), this.block = i;
		}
	}

	function Ma(e) {
		switch (e.type) {
			case 'StyleSheet':
				var t = this.stylesheet;
				this.stylesheet = e, e.children.each(Ma, this), this.stylesheet = t;
				break;
			case 'Atrule':
				if (null !== e.block) {
					var n = this.atrule;
					this.atrule = e, Ma.call(this, e.block), this.atrule = n
				}
				break;
			case 'Rule':
				var r = this.rule;
				this.rule = e, null !== e.block && Ma.call(this, e.block), this.rule = r;
				break;
			case 'Block':
				e.children.each(function(e, t, n) {
					'Declaration' === e.type ? this.fn(e, t, n) : Ma.call(this, e)
				}, this);
		}
	}

	function Ga(e, t) {
		var n = t.structure,
			r = [];
		for (var a in n)
			if (!1 !== Boe.call(n, a)) {
				var o = n[a],
					s = {
						name: a,
						type: !1,
						nullable: !1
					};
				Array.isArray(n[a]) || (o = [n[a]]);
				for (var l = 0, i; l < o.length; l++) i = o[l], null === i ? s.nullable = !0 : 'string' == typeof i ? s.type = 'node' : Array.isArray(i) && (s.type = 'list');
				s.type && r.push(s)
			}
		return r.length ? {
			context: t.walkContext,
			fields: r
		} : null
	}

	function Ua(e) {
		var t = {};
		if (e.node)
			for (var n in e.node)
				if (Boe.call(e.node, n)) {
					var r = e.node[n];
					if (r.structure) {
						var a = Ga(n, r);
						null !== a && (t[n] = a)
					} else throw new Error('Missed `structure` field in `' + n + '` node type definition')
				}
		return t
	}

	function Va(e, t) {
		return {
			fn: t,
			root: e,
			stylesheet: null,
			atrule: null,
			atrulePrelude: null,
			rule: null,
			selector: null,
			block: null,
			declaration: null,
			function: null
		}
	}

	function Wa(e) {
		return e && e.constructor === Object
	}

	function Fa(e) {
		if (Wa(e)) {
			var t = {};
			for (var n in e) _oe.call(e, n) && (t[n] = e[n]);
			return t
		}
		return e
	}

	function ja(e, t) {
		for (var n in t) _oe.call(t, n) && (Wa(e[n]) ? ja(e[n], Fa(t[n])) : e[n] = Fa(t[n]))
	}

	function Ha(e, t, n) {
		for (var r in n)
			if (!1 !== _oe.call(n, r))
				if (!0 === n[r]) r in t && _oe.call(t, r) && (e[r] = Fa(t[r]));
				else if (n[r])
			if (Wa(n[r])) {
				var a = {};
				ja(a, e[r]), ja(a, t[r]), e[r] = a
			} else if (Array.isArray(n[r])) {
			var a = {},
				o = n[r].reduce(function(e, t) {
					return e[t] = !0, e
				}, {});
			for (var i in e[r]) _oe.call(e[r], i) && (a[i] = {}, e[r] && e[r][i] && Ha(a[i], e[r][i], o));
			for (var i in t[r]) _oe.call(t[r], i) && (a[i] || (a[i] = {}), t[r] && t[r][i] && Ha(a[i], t[r][i], o));
			e[r] = a
		}
		return e
	}

	function Ya(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function $a(e) {
		var t = roe(e),
			n = Ioe(e),
			r = Doe(e),
			a = Noe(n),
			o = {
				List: hne,
				Tokenizer: $re,
				Lexer: Xae,
				property: tae.property,
				keyword: tae.keyword,
				grammar: Qae,
				lexer: null,
				createLexer: function(e) {
					return new Xae(e, o, o.lexer.structure)
				},
				parse: t,
				walk: n.walk,
				walkUp: n.walkUp,
				walkRules: n.walkRules,
				walkRulesRight: n.walkRulesRight,
				walkDeclarations: n.walkDeclarations,
				translate: r.translate,
				translateWithSourceMap: r.translateWithSourceMap,
				translateMarkup: r.translateMarkup,
				clone: zoe,
				fromPlainObject: a.fromPlainObject,
				toPlainObject: a.toPlainObject,
				createSyntax: function(e) {
					return $a(Goe({}, e))
				},
				fork: function(t) {
					var n = Goe({}, e);
					return $a('function' == typeof t ? t(n, Ya) : Goe(n, t))
				}
			};
		return o.lexer = new Xae({
			generic: !0,
			types: e.types,
			properties: e.properties,
			node: e.node
		}, o), o
	}

	function Ka(e) {
		return e.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
	}

	function Xa(e, t) {
		for (var n in t) n in e ? t[n].syntax ? e[n].syntax = t[n].syntax : delete e[n] : t[n].syntax && (e[n] = t[n])
	}

	function Qa(e, t) {
		var n = e.tokenStart;
		for ((e.source.charCodeAt(n) === yse || e.source.charCodeAt(n) === bse) && (t && e.error(), n++); n < e.tokenEnd; n++) mse(e.source.charCodeAt(n)) || e.error('Unexpected input', n)
	}

	function Za(e) {
		return this.Raw(e, wse, vse, !1, !0)
	}

	function Ja() {
		for (var e = 1, t; t = this.scanner.lookupType(e); e++) {
			if (t === Tse) return !0;
			if (t === vse || t === Sse) return !1
		}
		return !this.tolerant && void(this.scanner.skip(e), this.scanner.eat(Tse))
	}

	function eo() {
		this.scanner.eof && this.scanner.error('Unexpected end of input');
		var e = this.scanner.tokenStart,
			t = !1,
			n = !0;
		return this.scanner.tokenType === Lse ? (t = !0, n = !1, this.scanner.next()) : this.scanner.tokenType !== Ise && this.scanner.eat(Ase), this.scanner.tokenType === Ise ? this.scanner.lookupType(1) === Rse ? t && this.scanner.error('Identifier is expected', this.scanner.tokenEnd) : (this.scanner.next(), this.scanner.eat(Ase)) : t && this.scanner.error('Vertical line is expected'), n && this.scanner.tokenType === qse && (this.scanner.next(), this.scanner.eat(Ase)), {
			type: 'Identifier',
			loc: this.getLocation(e, this.scanner.tokenStart),
			name: this.scanner.substrToCursor(e)
		}
	}

	function to() {
		var e = this.scanner.tokenStart,
			t = this.scanner.tokenType;
		return t !== Rse && t !== zse && t !== Bse && t !== Pse && t !== Lse && t !== Ise && this.scanner.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected'), t === Rse ? this.scanner.next() : (this.scanner.next(), this.scanner.eat(Rse)), this.scanner.substrToCursor(e)
	}

	function no(e) {
		return this.Raw(e, 0, 0, !1, !0)
	}

	function ro() {
		return this.tolerantParse(this.Rule, no)
	}

	function ao(e) {
		return this.Raw(e, 0, Vse, !0, !0)
	}

	function oo() {
		var e = this.tolerantParse(this.Declaration, ao);
		return this.scanner.tokenType === Vse && this.scanner.next(), e
	}

	function io(e) {
		return 2 <= e.length && e.charCodeAt(0) === xle && e.charCodeAt(1) === xle
	}

	function so() {
		var e = this.scanner.tokenStart,
			t = 0;
		switch (this.scanner.tokenType) {
			case yle:
			case ble:
			case vle:
			case Tle:
				t = 1;
				break;
			case fle:
				t = this.scanner.lookupType(1) === fle ? 2 : 1;
		}
		return this.scanner.lookupType(t) === xle && t++, t && this.scanner.skip(t), this.scanner.eat(mle), this.scanner.substrToCursor(e)
	}

	function lo(e) {
		e.eat(hle), e.skipSC();
		var t = e.consume(mle);
		return 'important' === t || t
	}

	function co(e) {
		return this.Raw(e, 0, Ple, !0, !0)
	}

	function po(e) {
		var t = e.getTokenValue(),
			n = t.indexOf('\\');
		return 0 < n ? (e.tokenStart += n, t.substring(0, n)) : (e.next(), t)
	}

	function uo(e, t) {
		if (!Ble(e.source.charCodeAt(e.tokenStart)))
			if (t) e.error('Unexpected input', e.tokenStart);
			else return;
		for (var n = e.tokenStart + 1, r; n < e.tokenEnd; n++)
			if (r = e.source.charCodeAt(n), !Ble(r)) return void(e.tokenStart = n);
		e.next()
	}

	function mo(e) {
		for (var t = e.consumeNonWS(Rde), n = 0, r; n < t.length; n++) r = t.charCodeAt(n), Lde(r) || r === Nde || e.error('Unsigned number is expected', e.tokenStart - t.length + n);
		return 0 === +t && e.error('Zero number is not allowed', e.tokenStart - t.length), t
	}

	function go(e) {
		return this.Raw(e, _de, 0, !1, !0)
	}

	function ho(e) {
		return this.Raw(e, 0, 0, !1, !1)
	}

	function fo() {
		this.scanner.tokenType !== Qde && this.scanner.tokenType !== Zde && this.scanner.error('Identifier or asterisk is expected'), this.scanner.next()
	}

	function yo(e) {
		for (var t = e.tokenStart + 1, n; t < e.tokenEnd; t++)
			if (n = e.source.charCodeAt(t), n === lce || n === oce) return e.tokenStart = t, !1;
		return !0
	}

	function bo(e) {
		var t = e.tokenStart + 1,
			n = 0;
		scan: {
			if (e.tokenType !== ace) e.next();
			else if (e.source.charCodeAt(e.tokenStart) !== lce && yo(e)) e.next();
			else if (e.source.charCodeAt(e.tokenStart) !== ice) break scan;e.tokenType === ice && e.next(),
			e.tokenType === ace && e.next(),
			e.tokenType === rce && e.next(),
			e.tokenStart === t && e.error('Unexpected input', t)
		}
		for (var r = t, a = !1, o; r < e.tokenStart; r++) o = e.source.charCodeAt(r), !1 === tce(o) && (o !== ice || a) && e.error('Unexpected input', r), o === ice ? (0 == n && e.error('Unexpected input', r), a = !0, n = 0) : (n++, 6 < n && e.error('Too long hex sequence', r));
		if (0 == n && e.error('Unexpected input', r - 1), !a)
			for (; 6 > n && !e.eof && e.tokenType === dce; e.next()) n++
	}

	function xo(e) {
		for (var t = 0, n;
			(n = e.lookupType(t)) && (n === bce || n === xce); t++);
		if (e.lookupValue(t, 'alpha(') || e.lookupValue(t, 'chroma(') || e.lookupValue(t, 'dropshadow(')) {
			if (e.lookupType(t) !== kce) return !1;
		} else if (!1 === e.lookupValue(t, 'progid') || e.lookupType(t + 1) !== Sce) return !1;
		return !0
	}

	function ko() {
		return new hne().appendData(this.Raw(this.scanner.currentToken, 0, 0, !1, !1))
	}

	function So() {
		var e = 0;
		return this.scanner.skipSC(), this.scanner.tokenType === wpe ? e = 1 : this.scanner.tokenType === Cpe && this.scanner.lookupType(1) === wpe && (e = 2), 0 != e && this.scanner.lookupNonWSType(e) === Epe ? new hne().appendData(this.Declaration()) : wo.call(this)
	}

	function wo() {
		var e = new hne,
			t = null,
			n;
		this.scanner.skipSC();
		scan: for (; !this.scanner.eof;) {
			switch (this.scanner.tokenType) {
				case kpe:
					t = this.WhiteSpace();
					continue;
				case Spe:
					this.scanner.next();
					continue;
				case vpe:
					n = this.Function(ko, this.scope.AtrulePrelude);
					break;
				case wpe:
					n = this.Identifier();
					break;
				case Tpe:
					n = this.Parentheses(So, this.scope.AtrulePrelude);
					break;
				default:
					break scan;
			}
			null !== t && (e.appendData(t), t = null), e.appendData(n)
		}
		return e
	}

	function vo(e, t) {
		for (var n = 0; 4 > n; n += 1) {
			if (e[n] < t[n]) return -1;
			if (e[n] > t[n]) return 1
		}
		return 0
	}

	function To(e, t) {
		var n = Dpe(e),
			r = Dpe(t);
		return vo(n, r)
	}

	function Co(e, t) {
		return To(e.item.data, t.item.data)
	}

	function Eo() {
		if ('undefined' == typeof jpe) {
			var e = new ArrayBuffer(2),
				t = new Uint8Array(e),
				n = new Uint16Array(e);
			if (t[0] = 1, t[1] = 2, 258 === n[0]) jpe = 'BE';
			else if (513 === n[0]) jpe = 'LE';
			else throw new Error('unable to figure out endianess')
		}
		return jpe
	}

	function Ao() {
		return 'undefined' == typeof global.location ? '' : global.location.hostname
	}

	function Oo() {
		return []
	}

	function Po() {
		return 0
	}

	function Lo() {
		return Id
	}

	function qo() {
		return Id
	}

	function Ro() {
		return []
	}

	function Do() {
		return 'Browser'
	}

	function No() {
		return 'undefined' == typeof global.navigator ? '' : global.navigator.appVersion
	}

	function Bo() {}

	function Io() {}

	function zo() {
		return '/tmp'
	}

	function _o(e) {
		this.config = e ? Object.assign({}, Kpe, e) : Kpe;
		var t = this.config.indent;
		'number' != typeof t || isNaN(t) ? 'string' != typeof t && (this.config.indent = '    ') : this.config.indent = 0 > t ? '\t' : ' '.repeat(t), this.config.pretty && (this.config.doctypeEnd += Ype, this.config.procInstEnd += Ype, this.config.commentEnd += Ype, this.config.cdataEnd += Ype, this.config.tagShortEnd += Ype, this.config.tagOpenEnd += Ype, this.config.tagCloseEnd += Ype, this.config.textEnd += Ype), this.indentLevel = 0, this.textContext = null
	}

	function Mo(e, t, n, r) {
		function a(e) {
			return e.content = e.content.filter(function(e) {
				r && e.content && a(e);
				for (var o = !0, s = 0, i; o && s < n.length; s++) i = n[s], i.active && !1 === i.fn(e, i.params, t) && (o = !1);
				return !r && e.content && a(e), o
			}), e
		}
		return a(e)
	}

	function Go(e, t, n) {
		return n.forEach(function(n) {
			n.active && (e = n.fn(e, n.params, t))
		}), e
	}

	function Uo(e) {
		return {
			prev: null,
			next: null,
			data: e
		}
	}

	function Vo(e, t, n) {
		var r;
		return null === aue ? r = {
			prev: t,
			next: n,
			cursor: e.cursor
		} : (r = aue, aue = aue.cursor, r.prev = t, r.next = n, r.cursor = e.cursor), e.cursor = r, r
	}

	function Wo(e) {
		var t = e.cursor;
		e.cursor = t.cursor, t.prev = null, t.next = null, t.cursor = aue, aue = t
	}

	function Fo(e, t) {
		function n(e, t) {
			return r.slice(e, t).map(function(t, n) {
				for (var r = e + n + 1 + ''; r.length < d;) r = ' ' + r;
				return r + ' |' + t
			}).join('\n')
		}
		var r = e.source.split(/\r\n?|\n|\f/),
			a = e.line,
			o = e.column,
			s = Md(1, a - t) - 1,
			l = Ud(a + t, r.length + 1),
			d = Md(4, (l + '').length) + 1,
			c = 0;
		o += (cue.length - 1) * (r[a - 1].substr(0, o - 1).match(/\t/g) || []).length, o > lue && (c = o - due + 3, o = due - 2);
		for (var p = s; p <= l; p++) 0 <= p && p < r.length && (r[p] = r[p].replace(/\t/g, cue), r[p] = (0 < c && r[p].length > c ? '\u2026' : '') + r[p].substr(c, lue - 2) + (r[p].length > c + lue - 1 ? '\u2026' : ''));
		return [n(s, a), Array(o + d + 2).join('-') + '^', n(a, l)].filter(Boolean).join('\n')
	}

	function jo(e) {
		return 48 <= e && 57 >= e || 65 <= e && 70 >= e || 97 <= e && 102 >= e
	}

	function Ho(e) {
		return 48 <= e && 57 >= e
	}

	function Yo(e) {
		return e === Vue || e === _ue || $o(e)
	}

	function $o(e) {
		return e === Uue || e === Mue || e === Gue
	}

	function Ko(e, t, n) {
		return $o(n) ? n === Uue && t + 1 < e.length && e.charCodeAt(t + 1) === Mue ? 2 : 1 : 0
	}

	function Xo(e, t) {
		for (; t < e.length && Ho(e.charCodeAt(t));) t++;
		return t
	}

	function Qo(e, t) {
		for (var n = 0, r; 7 > n && t + n < e.length; n++)
			if (r = e.charCodeAt(t + n), !(6 !== n && jo(r))) {
				0 < n && (t += n - 1 + Ko(e, t + n, r), (r === Vue || r === _ue) && t++);
				break
			}
		return t
	}

	function Zo(e, t) {
		var n = t.length,
			r = $ue(t),
			a = e.lines,
			o = e.startLine,
			s = e.columns,
			l = e.startColumn;
		(null === a || a.length < n + 1) && (a = new Gme(Md(n + 1024, zme)), s = new Gme(a.length));
		for (var d = r, i; d < n; d++) i = t.charCodeAt(d), a[d] = o, s[d] = l++, (i === yme || i === xme || i === bme) && (i === xme && d + 1 < n && t.charCodeAt(d + 1) === yme && (d++, a[d] = o, s[d] = l), o++, l = 1);
		a[d] = o, s[d] = l, e.linesAnsColumnsComputed = !0, e.lines = a, e.columns = s
	}

	function Jo(e, t, n) {
		var r = t.length,
			a = e.offsetAndType,
			o = e.balance,
			i = 0,
			s = 0,
			l = n,
			d = 0,
			c = 0,
			p = 0,
			u = 0;
		for ((null === a || a.length < r + 1) && (a = new Gme(r + 1024), o = new Gme(r + 1024)); l < r;) {
			var m = t.charCodeAt(l),
				g = 128 > m ? Yue[m] : ime;
			switch (o[i] = r, g) {
				case ome:
					l = Zue(t, l + 1);
					break;
				case cme:
					switch (m) {
						case c:
							for (u = p & _me, p = o[u], c = p >> Mme, o[i] = u, o[u++] = i; u < i; u++) o[u] === r && (o[u] = i);
							break;
						case Bme:
							o[i] = p, c = Ime, p = c << Mme | i;
							break;
						case Dme:
							o[i] = p, c = Nme, p = c << Mme | i;
							break;
						case qme:
							o[i] = p, c = Rme, p = c << Mme | i;
					}
					if (m === kme && s === Sme) {
						g = dme, l = Jue(t, l + 1), i--;
						break
					}
					if (m === wme && (s === vme || s === Tme) && l + 1 < r && Xue(t.charCodeAt(l + 1))) {
						g = sme, l = tme(t, l + 2, !1), i--;
						break
					}
					if (m === Ame && s === Eme && l + 2 < r && t.charCodeAt(l + 1) === Tme && t.charCodeAt(l + 2) === Tme) {
						g = pme, l += 3, i--;
						break
					}
					if (m === Tme && s === Tme && l + 1 < r && t.charCodeAt(l + 1) === Cme) {
						g = ume, l += 2, i--;
						break
					}
					if (m === qme && s === ime) {
						++l, i--, o[i] = o[i + 1], p--, 4 == l - d && Kue(t, d, l, 'url(') ? (d = Zue(t, l), m = t.charCodeAt(d), m !== qme && m !== Rme && m !== Pme && m !== Lme ? (a[i++] = hme << Mme | l, o[i] = r, d !== l && (a[i++] = ome << Mme | d, o[i] = r), g = fme, l = rme(t, d)) : g = hme) : g = gme;
						break
					}
					g = m, ++l;
					break;
				case sme:
					l = tme(t, l + 1, s !== wme), (s === wme || s === Tme || s === vme) && i--;
					break;
				case lme:
					l = eme(t, l + 1, m);
					break;
				default:
					d = l, l = nme(t, l), s === Tme && (i--, s = 0 == i ? 0 : a[i - 1] >> Mme), s === Ome && (i--, g = mme);
			}
			a[i++] = g << Mme | l, s = g
		}
		for (a[i] = l, o[i] = r, o[r] = r; 0 !== p;) u = p & _me, p = o[u], o[u] = r;
		e.offsetAndType = a, e.tokenCount = i, e.balance = o
	}

	function ei(e) {
		return e
	}

	function ti(e) {
		return 0 === e.min && 0 === e.max ? '*' : 0 === e.min && 1 === e.max ? '?' : 1 === e.min && 0 === e.max ? e.comma ? '#' : '+' : 1 === e.min && 1 === e.max ? '' : (e.comma ? '#' : '') + (e.min === e.max ? '{' + e.min + '}' : '{' + e.min + ',' + (0 === e.max ? '' : e.max) + '}')
	}

	function ri(e, t, n) {
		var r = e.terms.map(function(e) {
			return ai(e, t, n)
		}).join(' ' === e.combinator ? ' ' : ' ' + e.combinator + ' ');
		return (e.explicit || t) && (r = (',' === r[0] ? '[' : '[ ') + r + ' ]'), r
	}

	function ai(e, t, n) {
		var r;
		switch (e.type) {
			case 'Group':
				r = ri(e, t, n) + (e.disallowEmpty ? '!' : '');
				break;
			case 'Multiplier':
				return ai(e.term, t, n) + n(ti(e), e);
			case 'Type':
				r = '<' + e.name + '>';
				break;
			case 'Property':
				r = '<\'' + e.name + '\'>';
				break;
			case 'Keyword':
				r = e.name;
				break;
			case 'AtKeyword':
				r = '@' + e.name;
				break;
			case 'Function':
				r = e.name + '(';
				break;
			case 'String':
			case 'Token':
				r = e.value;
				break;
			case 'Comma':
				r = ',';
				break;
			default:
				throw new Error('Unknown node type `' + e.type + '`');
		}
		return n(r, e)
	}

	function oi(e) {
		for (var t = e.tokens, n = e.longestMatch, r = n < t.length ? t[n].node : null, a = 0, o = 0, s = '', l = 0; l < t.length; l++) l === n && (a = s.length), null !== r && t[l].node === r && (l <= n ? o++ : o = 0), s += t[l].value;
		return null === r && (a = s.length), {
			node: r,
			css: s,
			mismatchOffset: a,
			last: null === r || 1 < o
		}
	}

	function si(e, t) {
		var n = e && e.loc && e.loc[t];
		return n ? {
			offset: n.offset,
			line: n.line,
			column: n.column
		} : null
	}

	function li(e, t) {
		return t = t || 0, 2 <= e.length - t && e.charCodeAt(t) === $me && e.charCodeAt(t + 1) === $me
	}

	function di(e, t) {
		if (t = t || 0, 3 <= e.length - t && e.charCodeAt(t) === $me && e.charCodeAt(t + 1) !== $me) {
			var n = e.indexOf('-', t + 2);
			if (-1 !== n) return e.substring(t, n + 1)
		}
		return ''
	}

	function ci(e, t, n) {
		var r = 1,
			a;
		do a = n(r++); while (null !== a && a.node !== e.node);
		if (null === a) return !1;
		for (; t() !== a;);
		return !0
	}

	function ui(e, t, n) {
		if (null === e) return !1;
		var r = e.value.toLowerCase();
		return 'calc(' !== r && '-moz-calc(' !== r && '-webkit-calc(' !== r ? !1 : ci(e, t, n)
	}

	function mi(e) {
		return /^[-+]?(\d+|\d*\.\d+)([eE][-+]?\d+)?$/.test(e)
	}

	function gi(e, t) {
		var n = e.charCodeAt(0);
		return Qme(e, n === rge || n === age ? 1 : 0, t)
	}

	function hi(e, t) {
		var n = e.charCodeAt(t);
		return 128 > n && ege[n] !== tge && n !== age ? t : Xme(e, t + 1)
	}

	function fi(e) {
		return function(t, n) {
			return null === t || t.node.type !== e ? !1 : (n(), !0)
		}
	}

	function yi(e) {
		return function(t, n, r) {
			if (ui(t, n, r)) return !0;
			if (null === t) return !1;
			var a = gi(t.value, !0);
			if (0 === a) return !1;
			if (!e) {
				var o = hi(t.value, a);
				if (o === a || o !== t.value.length) return !1
			} else if (!e.hasOwnProperty(t.value.substr(a).toLowerCase())) return !1;
			return n(), !0
		}
	}

	function bi(e) {
		var t = yi(e);
		return function(e, n, r) {
			return !!t(e, n, r) || (null === e || 0 !== +e.value ? !1 : (n(), !0))
		}
	}

	function ki(e) {
		return e.substringToPos(e.findWsEnd(e.pos + 1))
	}

	function Si(e) {
		for (var t = e.pos, n; t < e.str.length && (n = e.str.charCodeAt(t), !(128 <= n || 0 === Nge[n])); t++);
		return e.pos === t && e.error('Expect a keyword'), e.substringToPos(t)
	}

	function wi(e) {
		for (var t = e.pos, n; t < e.str.length && (n = e.str.charCodeAt(t), !(48 > n || 57 < n)); t++);
		return e.pos === t && e.error('Expect a number'), e.substringToPos(t)
	}

	function vi(e) {
		var t = e.str.indexOf('\'', e.pos + 1);
		return -1 === t && (e.pos = e.str.length, e.error('Expect an apostrophe')), e.substringToPos(t + 1)
	}

	function Ti(e) {
		var t = null,
			n = null;
		return e.eat(qge), t = wi(e), e.charCode() === Tge ? (e.pos++, e.charCode() !== Dge && (n = wi(e))) : n = t, e.eat(Dge), {
			min: +t,
			max: n ? +n : 0
		}
	}

	function Ci(e) {
		var t = null,
			n = !1;
		switch (e.charCode()) {
			case wge:
				e.pos++, t = {
					min: 0,
					max: 0
				};
				break;
			case vge:
				e.pos++, t = {
					min: 1,
					max: 0
				};
				break;
			case Age:
				e.pos++, t = {
					min: 0,
					max: 1
				};
				break;
			case yge:
				e.pos++, n = !0, t = e.charCode() === qge ? Ti(e) : {
					min: 1,
					max: 0
				};
				break;
			case qge:
				t = Ti(e);
				break;
			default:
				return null;
		}
		return {
			type: 'Multiplier',
			comma: n,
			min: t.min,
			max: t.max,
			term: null
		}
	}

	function Ei(e, t) {
		var n = Ci(e);
		return null === n ? t : (n.term = t, n)
	}

	function Ai(e) {
		var t = e.peek();
		return '' === t ? null : {
			type: 'Token',
			value: t
		}
	}

	function Oi(e) {
		var t;
		return e.eat(Cge), e.eat(xge), t = Si(e), e.eat(xge), e.eat(Ege), Ei(e, {
			type: 'Property',
			name: t
		})
	}

	function Li(e) {
		var t;
		return e.eat(Cge), t = Si(e), e.charCode() === kge && e.nextCharCode() === Sge && (e.pos += 2, t += '()'), e.eat(Ege), Ei(e, {
			type: 'Type',
			name: t
		})
	}

	function qi(e) {
		var t;
		return t = Si(e), e.charCode() === kge ? (e.pos++, {
			type: 'Function',
			name: t
		}) : Ei(e, {
			type: 'Keyword',
			name: t
		})
	}

	function Ri(e, t) {
		function n(e, t) {
			return {
				type: 'Group',
				terms: e,
				combinator: t,
				disallowEmpty: !1,
				explicit: !1
			}
		}
		for (t = Object.keys(t).sort(function(e, t) {
				return Bge[e] - Bge[t]
			}); 0 < t.length;) {
			for (var r = t.shift(), a = 0, o = 0, i; a < e.length; a++) i = e[a], 'Combinator' === i.type && (i.value === r ? (-1 == o && (o = a - 1), e.splice(a, 1), a--) : (-1 != o && 1 < a - o && (e.splice(o, a - o, n(e.slice(o, a), r)), a = o + 1), o = -1)); - 1 != o && t.length && e.splice(o, a - o, n(e.slice(o, a), r))
		}
		return r
	}

	function Di(e) {
		for (var t = [], n = {}, r = null, a = e.pos, o; o = Bi(e);) 'Spaces' !== o.type && ('Combinator' === o.type ? ((null == r || 'Combinator' === r.type) && (e.pos = a, e.error('Unexpected combinator')), n[o.value] = !0) : null != r && 'Combinator' !== r.type && (n[' '] = !0, t.push({
			type: 'Combinator',
			value: ' '
		})), t.push(o), r = o, a = e.pos);
		return null !== r && 'Combinator' === r.type && (e.pos -= a, e.error('Unexpected combinator')), {
			type: 'Group',
			terms: t,
			combinator: Ri(t, n) || ' ',
			disallowEmpty: !1,
			explicit: !1
		}
	}

	function Ni(e) {
		var t;
		return e.eat(Pge), t = Di(e), e.eat(Lge), t.explicit = !0, e.charCode() === fge && (e.pos++, t.disallowEmpty = !0), t
	}

	function Bi(e) {
		var t = e.charCode();
		if (128 > t && 1 === Nge[t]) return qi(e);
		switch (t) {
			case Lge:
				break;
			case Pge:
				return Ei(e, Ni(e));
			case Cge:
				return e.nextCharCode() === xge ? Oi(e) : Li(e);
			case Rge:
				return {
					type: 'Combinator',
					value: e.substringToPos(e.nextCharCode() === Rge ? e.pos + 2 : e.pos + 1)
				};
			case bge:
				return e.pos++, e.eat(bge), {
					type: 'Combinator',
					value: '&&'
				};
			case Tge:
				return e.pos++, {
					type: 'Comma'
				};
			case xge:
				return Ei(e, {
					type: 'String',
					value: vi(e)
				});
			case hge:
			case pge:
			case uge:
			case gge:
			case mge:
				return {
					type: 'Spaces',
					value: ki(e)
				};
			case Oge:
				return t = e.nextCharCode(), 128 > t && 1 === Nge[t] ? (e.pos++, {
					type: 'AtKeyword',
					name: Si(e)
				}) : Ai(e);
			case wge:
			case vge:
			case Age:
			case yge:
			case fge:
				break;
			case qge:
				if (t = e.nextCharCode(), 48 > t || 57 < t) return Ai(e);
				break;
			default:
				return Ai(e);
		}
	}

	function Ii(e) {
		var t = new cge(e),
			n = Di(t);
		return t.pos !== e.length && t.error('Unexpected input'), 1 === n.terms.length && 'Group' === n.terms[0].type && (n = n.terms[0]), n
	}

	function zi(e) {
		return 'function' == typeof e ? e : zge
	}

	function _i(e, t, n) {
		return t === Gge && n === Uge ? e : e === Gge && t === Gge && n === Gge ? e : ('If' === e.type && e.else === Uge && t === Gge && (t = e.then, e = e.match), {
			type: 'If',
			match: e,
			then: t,
			else: n
		})
	}

	function Mi(e) {
		return 2 < e.length && e.charCodeAt(e.length - 2) === Wge && e.charCodeAt(e.length - 1) === Fge
	}

	function Gi(e) {
		return 'Keyword' === e.type || 'AtKeyword' === e.type || 'Function' === e.type || 'Type' === e.type && Mi(e.name)
	}

	function Ui(e, t, n) {
		switch (e) {
			case ' ':
				for (var r = Gge, a = t.length - 1, o; 0 <= a; a--) o = t[a], r = _i(o, r, Uge);;
				return r;
			case '|':
				for (var r = Uge, i = null, a = t.length - 1, o; 0 <= a; a--) {
					if (o = t[a], Gi(o) && (null == i && 0 < a && Gi(t[a - 1]) && (i = Object.create(null), r = _i({
							type: 'Enum',
							map: i
						}, Gge, r)), null !== i)) {
						var s = (Mi(o.name) ? o.name.slice(0, -1) : o.name).toLowerCase();
						if (!1 == s in i) {
							i[s] = o;
							continue
						}
					}
					i = null, r = _i(o, Gge, r)
				};
				return r;
			case '&&':
				if (5 < t.length) return {
					type: 'MatchOnce',
					terms: t,
					all: !0
				};
				for (var r = Uge, a = t.length - 1; 0 <= a; a--) {
					var o = t[a],
						l;
					l = 1 < t.length ? Ui(e, t.filter(function(e) {
						return e !== o
					}), !1) : Gge, r = _i(o, l, r)
				};
				return r;
			case '||':
				if (5 < t.length) return {
					type: 'MatchOnce',
					terms: t,
					all: !1
				};
				for (var r = n ? Gge : Uge, a = t.length - 1; 0 <= a; a--) {
					var o = t[a],
						l;
					l = 1 < t.length ? Ui(e, t.filter(function(e) {
						return e !== o
					}), !0) : Gge, r = _i(o, l, r)
				};
				return r;
		}
	}

	function Vi(e) {
		var t = Gge,
			n = Wi(e.term);
		if (0 === e.max) n = _i(n, Vge, Uge), t = _i(n, null, Uge), t.then = _i(Gge, Gge, t), e.comma && (t.then.else = _i({
			type: 'Comma',
			syntax: e
		}, t, Uge));
		else
			for (var r = e.min || 1; r <= e.max; r++) e.comma && t !== Gge && (t = _i({
				type: 'Comma',
				syntax: e
			}, t, Uge)), t = _i(n, _i(Gge, Gge, t), Uge);
		if (0 === e.min) t = _i(Gge, Gge, t);
		else
			for (var r = 0; r < e.min - 1; r++) e.comma && t !== Gge && (t = _i({
				type: 'Comma',
				syntax: e
			}, t, Uge)), t = _i(n, t, Uge);
		return t
	}

	function Wi(e) {
		if ('function' == typeof e) return {
			type: 'Generic',
			fn: e
		};
		switch (e.type) {
			case 'Group':
				var t = Ui(e.combinator, e.terms.map(Wi), !1);
				return e.disallowEmpty && (t = _i(t, Vge, Uge)), t;
			case 'Multiplier':
				return Vi(e);
			case 'Type':
			case 'Property':
				return {
					type: e.type,
					name: e.name,
					syntax: e
				};
			case 'Keyword':
				return {
					type: e.type,
					name: e.name.toLowerCase(),
					syntax: e
				};
			case 'AtKeyword':
				return {
					type: e.type,
					name: '@' + e.name.toLowerCase(),
					syntax: e
				};
			case 'Function':
				return {
					type: e.type,
					name: e.name.toLowerCase() + '(',
					syntax: e
				};
			case 'String':
				return 3 === e.value.length ? {
					type: 'Token',
					value: e.value.charAt(1),
					syntax: e
				} : {
					type: e.type,
					value: e.value,
					syntax: e
				};
			case 'Token':
				return {
					type: e.type,
					value: e.value,
					syntax: e
				};
			case 'Comma':
				return {
					type: e.type,
					syntax: e
				};
			default:
				throw new Error('Unknown node type:', e.type);
		}
	}

	function Fi(e, t) {
		for (var n = []; e;) n.unshift(t(e)), e = e.prev;
		return n
	}

	function ji(e) {
		return null === e || (e = e.value.charAt(e.value.length - 1), ',' === e || '(' === e || '[' === e || '/' === e)
	}

	function Hi(e) {
		return null === e || (e = e.value.charAt(0), ')' === e || ']' === e || '/' === e)
	}

	function Yi(e, t, n) {
		function r() {
			do y++, b = y < e.length ? e[y] : null; while (null !== b && !/\S/.test(b.value))
		}

		function a(t) {
			var n = y + t;
			return n < e.length ? e[n] : null
		}

		function o(e) {
			p = {
				nextSyntax: e,
				matchStack: h,
				syntaxStack: c,
				prev: p
			}
		}

		function i(e) {
			u = {
				nextSyntax: e,
				matchStack: h,
				syntaxStack: c,
				thenStack: p,
				tokenCursor: y,
				token: b,
				prev: u
			}
		}

		function s() {
			return h = {
				type: Xge,
				syntax: t.syntax,
				token: b,
				prev: h
			}, r(), y > f && (f = y), h.token
		}

		function l() {
			c = {
				syntax: t,
				prev: c
			}, h = {
				type: Qge,
				syntax: t.syntax,
				token: h.token,
				prev: h
			}
		}

		function d() {
			h = h.type === Qge ? h.prev : {
				type: Zge,
				syntax: c.syntax,
				token: h.token,
				prev: h
			}, c = c.prev
		}
		var c = null,
			p = null,
			u = null,
			m = 0,
			g = Jge,
			h = {
				type: 'Stub',
				syntax: null,
				token: null,
				tokenCursor: -1,
				prev: null
			},
			f = 0,
			y = -1,
			b = null;
		for (r();;) {
			if (++m == nhe) {
				console.warn('[csstree-match] BREAK after ' + nhe + ' iterations'), g = the;
				break
			}
			if (t === Yge) {
				if (null === p) {
					if (null !== b && (y !== e.length - 1 || '\\0' !== b.value && '\\9' !== b.value)) {
						t = $ge;
						continue
					}
					g = Jge;
					break
				}
				if (t = p.nextSyntax, t === Kge)
					if (p.matchStack.token === h.token) {
						t = $ge;
						continue
					} else t = Yge;
				for (; null !== c && p.syntaxStack !== c;) d();
				p = p.prev;
				continue
			}
			if (t === $ge) {
				if (null === u) {
					g = ehe;
					break
				}
				t = u.nextSyntax, p = u.thenStack, c = u.syntaxStack, h = u.matchStack, y = u.tokenCursor, b = u.token, u = u.prev;
				continue
			}
			switch (t.type) {
				case 'MatchGraph':
					t = t.match;
					break;
				case 'If':
					t.else !== $ge && i(t.else), t.then !== Yge && o(t.then), t = t.match;
					break;
				case 'MatchOnce':
					t = {
						type: 'MatchOnceBuffer',
						terms: t.terms,
						all: t.all,
						matchStack: h,
						index: 0,
						mask: 0
					};
					break;
				case 'MatchOnceBuffer':
					if (t.index === t.terms.length)
						if (t.matchStack === h) {
							if (0 === t.mask || t.all) {
								t = $ge;
								break
							}
							t = Yge;
							break
						} else t.index = 0, t.matchStack = h;
					for (; t.index < t.terms.length; t.index++)
						if (0 == (t.mask & 1 << t.index)) {
							i(t), o({
								type: 'AddMatchOnce',
								buffer: t
							}), t = t.terms[t.index++];
							break
						}
					break;
				case 'AddMatchOnce':
					t = t.buffer;
					var x = t.mask | 1 << t.index - 1;
					if (x == (1 << t.terms.length) - 1) {
						t = Yge;
						continue
					}
					t = {
						type: 'MatchOnceBuffer',
						terms: t.terms,
						all: t.all,
						matchStack: t.matchStack,
						index: t.index,
						mask: x
					};
					break;
				case 'Enum':
					var k = null === b ? '' : b.value.toLowerCase(); - 1 !== k.indexOf('\\') && (k = k.replace(/\\[09].*$/, '')), t = Hge.call(t.map, k) ? t.map[k] : $ge;
					break;
				case 'Generic':
					t = t.fn(b, s, a) ? Yge : $ge;
					break;
				case 'Type':
				case 'Property':
					l();
					var S = 'Type' === t.type ? 'types' : 'properties';
					if (t = Hge.call(n, S) && n[S][t.name] ? n[S][t.name].match : void 0, !t) throw new Error('Bad syntax reference: ' + ('Type' === c.syntax.type ? '<' + c.syntax.name + '>' : '<\'' + c.syntax.name + '\'>'));
					break;
				case 'Keyword':
					var k = t.name;
					if (null !== b) {
						var w = b.value;
						if (-1 !== w.indexOf('\\') && (w = w.replace(/\\[09].*$/, '')), w.toLowerCase() === k) {
							s(), t = Yge;
							break
						}
					}
					t = $ge;
					break;
				case 'AtKeyword':
				case 'Function':
					if (null !== b && b.value.toLowerCase() === t.name) {
						s(), t = Yge;
						break
					}
					t = $ge;
					break;
				case 'Token':
					if (null !== b && b.value === t.value) {
						s(), t = Yge;
						break
					}
					t = $ge;
					break;
				case 'Comma':
					null !== b && ',' === b.value ? ji(h.token) ? t = $ge : (s(), t = Hi(b) ? $ge : Yge) : t = ji(h.token) || Hi(b) ? Yge : $ge;
					break;
				default:
					throw new Error('Unknown node type: ' + t.type);
			}
		}
		if (rhe += m, g == Jge)
			for (; null !== c;) d();
		else h = null;
		return {
			tokens: e,
			reason: g,
			iterations: m,
			match: h,
			longestMatch: f
		}
	}

	function $i(e) {
		function t(e) {
			return null !== e && ('Type' === e.type || 'Property' === e.type || 'Keyword' === e.type)
		}

		function n(a) {
			if (Array.isArray(a.match)) {
				for (var o = 0; o < a.match.length; o++)
					if (n(a.match[o])) return t(a.syntax) && r.unshift(a.syntax), !0;
			} else if (a.node === e) return r = t(a.syntax) ? [a.syntax] : [], !0;
			return !1
		}
		var r = null;
		return null !== this.matched && n(this.matched), r
	}

	function Ki(e, t, n) {
		var r = $i.call(e, t);
		return null !== r && r.some(n)
	}

	function Qi(e) {
		return 'node' in e ? e.node : Qi(e.match[0])
	}

	function Zi(e) {
		return 'node' in e ? e.node : Zi(e.match[e.match.length - 1])
	}

	function Ji(e) {
		return 'number' == typeof e && isFinite(e) && Fd(e) === e && 0 <= e
	}

	function es(e) {
		return !!e && Ji(e.offset) && Ji(e.line) && Ji(e.column)
	}

	function ts(e, t) {
		return function(n, r) {
			if (!n || n.constructor !== Object) return r(n, 'Type of node should be an Object');
			for (var a in n) {
				var o = !0;
				if (!1 !== ihe.call(n, a)) {
					if ('type' == a) n.type !== e && r(n, 'Wrong node type `' + n.type + '`, expected `' + e + '`');
					else if ('loc' == a) {
						if (null === n.loc) continue;
						else if (n.loc && n.loc.constructor === Object)
							if ('string' != typeof n.loc.source) a += '.source';
							else if (!es(n.loc.start)) a += '.start';
						else if (!es(n.loc.end)) a += '.end';
						else continue;
						o = !1
					} else if (t.hasOwnProperty(a))
						for (var s = 0, o = !1, i; !o && s < t[a].length; s++) i = t[a][s], i === String ? o = 'string' == typeof n[a] : i === Boolean ? o = 'boolean' == typeof n[a] : null === i ? o = null === n[a] : 'string' == typeof i ? o = n[a] && n[a].type === i : Array.isArray(i) && (o = n[a] instanceof iue);
					else r(n, 'Unknown field `' + a + '` for ' + e + ' node type');
					o || r(n, 'Bad value for `' + e + '.' + a + '`')
				}
			}
			for (var a in t) ihe.call(t, a) && !1 === ihe.call(n, a) && r(n, 'Field `' + e + '.' + a + '` is missed')
		}
	}

	function ns(e, t) {
		var n = t.structure,
			r = {
				type: String,
				loc: !0
			},
			a = {
				type: '"' + e + '"'
			};
		for (var o in n)
			if (!1 !== ihe.call(n, o)) {
				for (var s = [], l = r[o] = Array.isArray(n[o]) ? n[o].slice() : [n[o]], d = 0, i; d < l.length; d++)
					if (i = l[d], i === String || i === Boolean) s.push(i.name);
					else if (null === i) s.push('null');
				else if ('string' == typeof i) s.push('<' + i + '>');
				else if (Array.isArray(i)) s.push('List');
				else throw new Error('Wrong value `' + i + '` in `' + e + '.' + o + '` structure definition');
				a[o] = s.join(' | ')
			}
		return {
			docs: a,
			check: ts(e, r)
		}
	}

	function rs(e, t) {
		var n = {};
		for (var r in e) e[r].syntax && (n[r] = t ? e[r].syntax : Wme(e[r].syntax));
		return n
	}

	function as(e) {
		var t = !1;
		return this.syntax.walk(e, function(e) {
			'Function' === e.type && 'var' === e.name.toLowerCase() && (t = !0)
		}), t
	}

	function is(e, t, n) {
		return {
			matched: e,
			iterations: n,
			error: t,
			getTrace: ahe.getTrace,
			isType: ahe.isType,
			isProperty: ahe.isProperty,
			isKeyword: ahe.isKeyword
		}
	}

	function ss(e, t, n, r) {
		if (!n) return is(null, new Error('Node is undefined'));
		if (as.call(e, n)) return is(null, new Error('Matching for a tree with var() is not supported'));
		var a = e.syntax.generate(n, Mge),
			o;
		return r && (o = che(a, e.valueCommonSyntax, e)), r && o.match || (o = che(a, t.match, e), !!o.match) ? is(o.match, null, o.iterations) : is(null, new lhe(o.reason, e, t.syntax, n, o), o.iterations)
	}

	function ls(e) {
		return function() {
			return this[e]()
		}
	}

	function ds(e) {
		var t = {
			context: {},
			scope: {},
			atrule: {},
			pseudo: {}
		};
		if (e.parseContext)
			for (var n in e.parseContext) switch (typeof e.parseContext[n]) {
				case 'function':
					t.context[n] = e.parseContext[n];
					break;
				case 'string':
					t.context[n] = ls(e.parseContext[n]);
			}
		if (e.scope)
			for (var n in e.scope) t.scope[n] = e.scope[n];
		if (e.atrule)
			for (var n in e.atrule) {
				var r = e.atrule[n];
				r.parse && (t.atrule[n] = r.parse)
			}
		if (e.pseudo)
			for (var n in e.pseudo) {
				var a = e.pseudo[n];
				a.parse && (t.pseudo[n] = a.parse)
			}
		if (e.node)
			for (var n in e.node) t[n] = e.node[n].parse;
		return t
	}

	function cs(e, t) {
		var n = e.children,
			r = null;
		'function' == typeof t ? n.forEach(function(e) {
			null != r && t.call(this, r), this.node(e), r = e
		}, this) : n.forEach(this.node, this)
	}

	function ps(e) {
		return 'function' == typeof e ? e : Lhe
	}

	function us(e, t) {
		return function(n, r, a) {
			n.type === t && e.call(this, n, r, a)
		}
	}

	function ms(e, t) {
		var n = t.structure,
			r = [];
		for (var a in n)
			if (!1 !== Phe.call(n, a)) {
				var o = n[a],
					s = {
						name: a,
						type: !1,
						nullable: !1
					};
				Array.isArray(n[a]) || (o = [n[a]]);
				for (var l = 0, i; l < o.length; l++) i = o[l], null === i ? s.nullable = !0 : 'string' == typeof i ? s.type = 'node' : Array.isArray(i) && (s.type = 'list');
				s.type && r.push(s)
			}
		return r.length ? {
			context: t.walkContext,
			fields: r
		} : null
	}

	function gs(e) {
		var t = {};
		for (var n in e.node)
			if (Phe.call(e.node, n)) {
				var r = e.node[n];
				if (!r.structure) throw new Error('Missed `structure` field in `' + n + '` node type definition');
				t[n] = ms(n, r)
			}
		return t
	}

	function hs(e, t) {
		var n = t ? e.fields.slice().reverse() : e.fields,
			r = n.map(function(e) {
				var n = 'node.' + e.name,
					r;
				return r = 'list' === e.type ? t ? n + '.forEachRight(walk);' : n + '.forEach(walk);' : 'walk(' + n + ');', e.nullable && (r = 'if (' + n + ') {\n    ' + r + '}'), r
			});
		return e.context && (r = [].concat('var old = context.' + e.context + ';', 'context.' + e.context + ' = node;', r, 'context.' + e.context + ' = old;')), new Function('node', 'context', 'walk', r.join('\n'))
	}

	function fs(e) {
		return {
			Atrule: {
				StyleSheet: e.StyleSheet,
				Atrule: e.Atrule,
				Rule: e.Rule,
				Block: e.Block
			},
			Rule: {
				StyleSheet: e.StyleSheet,
				Atrule: e.Atrule,
				Rule: e.Rule,
				Block: e.Block
			},
			Declaration: {
				StyleSheet: e.StyleSheet,
				Atrule: e.Atrule,
				Rule: e.Rule,
				Block: e.Block
			}
		}
	}

	function ys(e) {
		return e && e.constructor === Object
	}

	function bs(e) {
		if (ys(e)) {
			var t = {};
			for (var n in e) Dhe.call(e, n) && (t[n] = e[n]);
			return t
		}
		return e
	}

	function xs(e, t) {
		for (var n in t) Dhe.call(t, n) && (ys(e[n]) ? xs(e[n], bs(t[n])) : e[n] = bs(t[n]))
	}

	function ks(e, t, n) {
		for (var r in n)
			if (!1 !== Dhe.call(n, r))
				if (!0 === n[r]) r in t && Dhe.call(t, r) && (e[r] = bs(t[r]));
				else if (n[r])
			if (ys(n[r])) {
				var a = {};
				xs(a, e[r]), xs(a, t[r]), e[r] = a
			} else if (Array.isArray(n[r])) {
			var a = {},
				o = n[r].reduce(function(e, t) {
					return e[t] = !0, e
				}, {});
			for (var i in e[r]) Dhe.call(e[r], i) && (a[i] = {}, e[r] && e[r][i] && ks(a[i], e[r][i], o));
			for (var i in t[r]) Dhe.call(t[r], i) && (a[i] || (a[i] = {}), t[r] && t[r][i] && ks(a[i], t[r][i], o));
			e[r] = a
		}
		return e
	}

	function Ss(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function ws(e) {
		var t = whe(e),
			n = qhe(e),
			r = Ahe(e),
			a = Ohe(n),
			o = {
				List: iue,
				Tokenizer: Vme,
				Lexer: hhe,
				vendorPrefix: Kme.vendorPrefix,
				keyword: Kme.keyword,
				property: Kme.property,
				isCustomProperty: Kme.isCustomProperty,
				grammar: fhe,
				lexer: null,
				createLexer: function(e) {
					return new hhe(e, o, o.lexer.structure)
				},
				parse: t,
				walk: n,
				generate: r,
				clone: Rhe,
				fromPlainObject: a.fromPlainObject,
				toPlainObject: a.toPlainObject,
				createSyntax: function(e) {
					return ws(Bhe({}, e))
				},
				fork: function(t) {
					var n = Bhe({}, e);
					return ws('function' == typeof t ? t(n, Ss) : Bhe(n, t))
				}
			};
		return o.lexer = new hhe({
			generic: !0,
			types: e.types,
			properties: e.properties,
			node: e.node
		}, o), o
	}

	function vs(e, t) {
		var n = {};
		for (var r in e) n[r] = e[r].syntax;
		for (var r in t) r in e ? t[r].syntax ? n[r] = t[r].syntax : delete n[r] : t[r].syntax && (n[r] = t[r].syntax);
		return n
	}

	function Ts(e, t) {
		var n = e.tokenStart;
		for ((e.source.charCodeAt(n) === Yhe || e.source.charCodeAt(n) === $he) && (t && e.error(), n++); n < e.tokenEnd; n++) Whe(e.source.charCodeAt(n)) || e.error('Unexpected input', n)
	}

	function Cs(e) {
		return this.Raw(e, Zhe, Jhe, !1, !0)
	}

	function Es() {
		for (var e = 1, t; t = this.scanner.lookupType(e); e++) {
			if (t === efe) return !0;
			if (t === Jhe || t === Qhe) return !1
		}
		return !1
	}

	function As() {
		this.scanner.eof && this.scanner.error('Unexpected end of input');
		var e = this.scanner.tokenStart,
			t = !1,
			n = !0;
		return this.scanner.tokenType === dfe ? (t = !0, n = !1, this.scanner.next()) : this.scanner.tokenType !== hfe && this.scanner.eat(ife), this.scanner.tokenType === hfe ? this.scanner.lookupType(1) === pfe ? t && this.scanner.error('Identifier is expected', this.scanner.tokenEnd) : (this.scanner.next(), this.scanner.eat(ife)) : t && this.scanner.error('Vertical line is expected'), n && this.scanner.tokenType === cfe && (this.scanner.next(), this.scanner.eat(ife)), {
			type: 'Identifier',
			loc: this.getLocation(e, this.scanner.tokenStart),
			name: this.scanner.substrToCursor(e)
		}
	}

	function Os() {
		var e = this.scanner.tokenStart,
			t = this.scanner.tokenType;
		return t !== pfe && t !== ffe && t !== gfe && t !== lfe && t !== dfe && t !== hfe && this.scanner.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected'), t === pfe ? this.scanner.next() : (this.scanner.next(), this.scanner.eat(pfe)), this.scanner.substrToCursor(e)
	}

	function Ps(e) {
		return this.Raw(e, 0, 0, !1, !0)
	}

	function Ls() {
		return this.parseWithFallback(this.Rule, Ps)
	}

	function qs(e) {
		return this.Raw(e, 0, Sfe, !0, !0)
	}

	function Rs() {
		if (this.scanner.tokenType === Sfe) return qs.call(this, this.scanner.currentToken);
		var e = this.parseWithFallback(this.Declaration, qs);
		return this.scanner.tokenType === Sfe && this.scanner.next(), e
	}

	function Ds(e) {
		return this.Raw(e, $fe, Jfe, !1, !0)
	}

	function Ns(e) {
		return this.Raw(e, $fe, Jfe, !1, !1)
	}

	function Bs() {
		var e = this.scanner.currentToken,
			t = this.Value();
		return 'Raw' !== t.type && !1 === this.scanner.eof && this.scanner.tokenType !== Jfe && this.scanner.tokenType !== $fe && !1 === this.scanner.isBalanceEdge(e) && this.scanner.error(), t
	}

	function Is() {
		var e = this.scanner.tokenStart,
			t = 0;
		switch (this.scanner.tokenType) {
			case Xfe:
			case Qfe:
			case eye:
			case tye:
				t = 1;
				break;
			case Kfe:
				t = this.scanner.lookupType(1) === Kfe ? 2 : 1;
		}
		return this.scanner.lookupType(t) === Zfe && t++, t && this.scanner.skip(t), this.scanner.eat(Hfe), this.scanner.substrToCursor(e)
	}

	function zs(e) {
		e.eat($fe), e.skipSC();
		var t = e.consume(Hfe);
		return 'important' === t || t
	}

	function _s(e) {
		return this.Raw(e, 0, iye, !0, !0)
	}

	function Ms(e) {
		var t = e.getTokenValue(),
			n = t.indexOf('\\');
		return 0 < n ? (e.tokenStart += n, t.substring(0, n)) : (e.next(), t)
	}

	function Gs(e, t) {
		if (!uye(e.source.charCodeAt(e.tokenStart)))
			if (t) e.error('Unexpected input', e.tokenStart);
			else return;
		for (var n = e.tokenStart + 1, r; n < e.tokenEnd; n++)
			if (r = e.source.charCodeAt(n), !uye(r)) return void(e.tokenStart = n);
		e.next()
	}

	function Us(e) {
		for (var t = e.consumeNonWS(dbe), n = 0, r; n < t.length; n++) r = t.charCodeAt(n), sbe(r) || r === pbe || e.error('Unsigned number is expected', e.tokenStart - t.length + n);
		return 0 === +t && e.error('Zero number is not allowed', e.tokenStart - t.length), t
	}

	function Vs(e) {
		return this.Raw(e, hbe, 0, !1, !0)
	}

	function Ws() {
		var e = this.SelectorList();
		return 'Raw' !== e.type && !1 === this.scanner.eof && this.scanner.tokenType !== hbe && this.scanner.error(), e
	}

	function Fs(e) {
		return this.Raw(e, 0, 0, !1, !1)
	}

	function js() {
		this.scanner.tokenType !== Obe && this.scanner.tokenType !== Pbe && this.scanner.error('Identifier or asterisk is expected'), this.scanner.next()
	}

	function Hs(e) {
		for (var t = e.tokenStart + 1, n; t < e.tokenEnd; t++)
			if (n = e.source.charCodeAt(t), n === _be || n === Ibe) return e.tokenStart = t, !1;
		return !0
	}

	function Ys(e) {
		var t = e.tokenStart + 1,
			n = 0;
		scan: {
			if (e.tokenType !== Bbe) e.next();
			else if (e.source.charCodeAt(e.tokenStart) !== _be && Hs(e)) e.next();
			else if (e.source.charCodeAt(e.tokenStart) !== zbe) break scan;e.tokenType === zbe && e.next(),
			e.tokenType === Bbe && e.next(),
			e.tokenType === Nbe && e.next(),
			e.tokenStart === t && e.error('Unexpected input', t)
		}
		for (var r = t, a = !1, o; r < e.tokenStart; r++) o = e.source.charCodeAt(r), !1 === Rbe(o) && (o !== zbe || a) && e.error('Unexpected input', r), o === zbe ? (0 == n && e.error('Unexpected input', r), a = !0, n = 0) : (n++, 6 < n && e.error('Too long hex sequence', r));
		if (0 == n && e.error('Unexpected input', r - 1), !a)
			for (; 6 > n && !e.eof && e.tokenType === Mbe; e.next()) n++
	}

	function $s() {
		return this.createSingleNodeList(this.Raw(this.scanner.currentToken, 0, 0, !1, !1))
	}

	function Ks() {
		var e = 0;
		return this.scanner.skipSC(), this.scanner.tokenType === Wxe ? e = 1 : this.scanner.tokenType === Hxe && this.scanner.lookupType(1) === Wxe && (e = 2), 0 != e && this.scanner.lookupNonWSType(e) === Yxe ? this.createSingleNodeList(this.Declaration()) : Xs.call(this)
	}

	function Xs() {
		var e = this.createList(),
			t = null,
			n;
		this.scanner.skipSC();
		scan: for (; !this.scanner.eof;) {
			switch (this.scanner.tokenType) {
				case Uxe:
					t = this.WhiteSpace();
					continue;
				case Vxe:
					this.scanner.next();
					continue;
				case Fxe:
					n = this.Function($s, this.scope.AtrulePrelude);
					break;
				case Wxe:
					n = this.Identifier();
					break;
				case jxe:
					n = this.Parentheses(Ks, this.scope.AtrulePrelude);
					break;
				default:
					break scan;
			}
			null !== t && (e.push(t), t = null), e.push(n)
		}
		return e
	}

	function Qs(e, t) {
		var n = Object.create(null);
		if (!Array.isArray(e)) return null;
		for (var r = 0, a; r < e.length; r++) a = e[r], t && (a = a.toLowerCase()), n[a] = !0;
		return n
	}

	function Zs(e) {
		if (!e) return null;
		var t = Qs(e.tags, !0),
			n = Qs(e.ids),
			r = Qs(e.classes);
		return null === t && null === n && null === r ? null : {
			tags: t,
			ids: n,
			classes: r
		}
	}

	function Js(e, t) {
		return e.children.each(function(n, r, a) {
			var o = !1;
			rke(n, function(n) {
				if (null === this.selector || this.selector === e) switch (n.type) {
					case 'SelectorList':
						(null === this['function'] || 'not' !== this['function'].name.toLowerCase()) && Js(n, t) && (o = !0);
						break;
					case 'ClassSelector':
						null === t.whitelist || null === t.whitelist.classes || nke.call(t.whitelist.classes, n.name) || (o = !0), null !== t.blacklist && null !== t.blacklist.classes && nke.call(t.blacklist.classes, n.name) && (o = !0);
						break;
					case 'IdSelector':
						null === t.whitelist || null === t.whitelist.ids || nke.call(t.whitelist.ids, n.name) || (o = !0), null !== t.blacklist && null !== t.blacklist.ids && nke.call(t.blacklist.ids, n.name) && (o = !0);
						break;
					case 'TypeSelector':
						'*' !== n.name.charAt(n.name.length - 1) && (null !== t.whitelist && null !== t.whitelist.tags && !nke.call(t.whitelist.tags, n.name.toLowerCase()) && (o = !0), null !== t.blacklist && null !== t.blacklist.tags && nke.call(t.blacklist.tags, n.name.toLowerCase()) && (o = !0));
				}
			}), o && a.remove(r)
		}), e.children.isEmpty()
	}

	function tl(e) {
		if ('' !== e && '-' !== e) return e = e.replace(dke, 'a'), !cke.test(e)
	}

	function nl(e, t) {
		var n = t.prev,
			r = t.next;
		null === r ? null !== n && 'WhiteSpace' === n.data.type && e.remove(n) : 'WhiteSpace' === r.data.type && (null === n || 'WhiteSpace' === n.data.type) && e.remove(r), e.remove(t)
	}

	function rl(e, t) {
		var n = t && null !== t.prev && yke.hasOwnProperty(t.prev.data.type) ? fke : hke;
		return e = (e + '').replace(n, '$1$2$3'), ('' === e || '-' === e) && (e = '0'), e
	}

	function al(e, n, r) {
		return 0 > r && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? e + 6 * (n - e) * r : r < 1 / 2 ? n : r < 2 / 3 ? e + 6 * ((n - e) * (2 / 3 - r)) : e
	}

	function ol(e, t, n, o) {
		var a, r, i;
		if (0 === t) a = r = i = n;
		else {
			var s = 0.5 > n ? n * (1 + t) : n + t - n * t,
				l = 2 * n - s;
			a = al(l, s, e + 1 / 3), r = al(l, s, e), i = al(l, s, e - 1 / 3)
		}
		return [zd(255 * a), zd(255 * r), zd(255 * i), o]
	}

	function il(e) {
		return e = e.toString(16), 1 === e.length ? '0' + e : e
	}

	function sl(e, t, n) {
		for (var r = e.head, a = [], o = !1; null !== r;) {
			var i = r.data,
				s = i.type;
			switch (s) {
				case 'Number':
				case 'Percentage':
					if (o) return;
					o = !0, a.push({
						type: s,
						value: +i.value
					});
					break;
				case 'Operator':
					if (',' === i.value) {
						if (!o) return;
						o = !1
					} else if (o || '+' !== i.value) return;
					break;
				default:
					return;
			}
			r = r.next
		}
		if (a.length === t) {
			if (4 === a.length) {
				if ('Number' !== a[3].type) return;
				a[3].type = 'Alpha'
			}
			if (!n) {
				if ('Number' !== a[0].type || 'Percentage' !== a[1].type || 'Percentage' !== a[2].type) return;
				a[0].type = 'Angle'
			} else if (a[0].type !== a[1].type || a[0].type !== a[2].type) return;
			return a.map(function(e) {
				var t = Md(0, e.value);
				switch (e.type) {
					case 'Number':
						t = Ud(t, 255);
						break;
					case 'Percentage':
						if (t = Ud(t, 100) / 100, !n) return t;
						t = 255 * t;
						break;
					case 'Angle':
						return (t % 360 + 360) % 360 / 360;
					case 'Alpha':
						return Ud(t, 1);
				}
				return zd(t)
			})
		}
	}

	function dl(e, t) {
		var n = e.value.toLowerCase();
		6 === n.length && n[0] === n[1] && n[2] === n[3] && n[4] === n[5] && (n = n[0] + n[2] + n[4]), Ake[n] ? t.data = {
			type: 'Identifier',
			loc: e.loc,
			name: Ake[n]
		} : e.value = n
	}

	function cl() {
		this.seed = 0, this.map = Object.create(null)
	}

	function pl(e, t, n, r) {
		var a = t.data,
			o = Wke(a.name).basename,
			i = a.name.toLowerCase() + '/' + (a.prelude ? a.prelude.id : null);
		Fke.call(e, o) || (e[o] = Object.create(null)), r && delete e[o][i], Fke.call(e[o], i) || (e[o][i] = new Vke), e[o][i].append(n.remove(t))
	}

	function ul(e, t) {
		var n = Object.create(null),
			r = null;
		for (var a in e.children.each(function(e, a, o) {
				if ('Atrule' === e.type) {
					var i = Wke(e.name).basename;
					switch (i) {
						case 'keyframes':
							return void pl(n, a, o, !0);
						case 'media':
							if (t.forceMediaMerge) return void pl(n, a, o, !1);
					}
					null == r && 'charset' !== i && 'import' !== i && (r = a)
				} else null == r && (r = a)
			}), n)
			for (var o in n[a]) e.children.insertList(n[a][o], 'media' == a ? null : r)
	}

	function ml(e) {
		return 'Atrule' === e.type && 'media' === e.name
	}

	function hl(e, t, n) {
		if (ml(e)) {
			var r = t.prev && t.prev.data;
			!r || !ml(r) || e.prelude && r.prelude && e.prelude.id === r.prelude.id && (r.block.children.appendList(e.block.children), n.remove(t))
		}
	}

	function fl(e, t) {
		for (var n = e.head; null !== n;) {
			for (var r = t.head; null !== r;) {
				if (n.data.compareMarker === r.data.compareMarker) return !0;
				r = r.next
			}
			n = n.next
		}
		return !1
	}

	function yl(e) {
		switch (e.type) {
			case 'Rule':
				return fl(e.prelude.children, this);
			case 'Atrule':
				if (e.block) return e.block.children.some(yl, this);
				break;
			case 'Declaration':
				return !1;
		}
		return !0
	}

	function bl(e, t, n) {
		var r = e.prelude.children,
			a = e.block.children;
		n.prevUntil(t.prev, function(o) {
			if ('Rule' !== o.type) return $ke.unsafeToSkipNode.call(r, o);
			var i = o.prelude.children,
				s = o.block.children;
			if (e.pseudoSignature === o.pseudoSignature) {
				if ($ke.isEqualSelectors(i, r)) return s.appendList(a), n.remove(t), !0;
				if ($ke.isEqualDeclarations(a, s)) return $ke.addSelectors(i, r), n.remove(t), !0
			}
			return $ke.hasSimilarSelectors(r, i)
		})
	}

	function xl(e, t, n) {
		for (var r = e.prelude.children, a; r.head !== r.tail;) a = new Qke, a.insert(r.remove(r.head)), n.insert(n.createItem({
			type: 'Rule',
			loc: e.loc,
			prelude: {
				type: 'SelectorList',
				loc: e.prelude.loc,
				children: a
			},
			block: {
				type: 'Block',
				loc: e.block.loc,
				children: e.block.children.copy()
			},
			pseudoSignature: e.pseudoSignature
		}), t)
	}

	function kl(e) {
		this.name = e, this.loc = null, this.iehack = void 0, this.sides = {
			top: null,
			right: null,
			bottom: null,
			left: null
		}
	}

	function Sl(e, t, n, r) {
		var a = e.block.children,
			o = e.prelude.children.first().id;
		return e.block.children.eachRight(function(e, i) {
			var s = e.property;
			if (pSe.hasOwnProperty(s)) {
				var l = pSe[s],
					d, c;
				return (!r || o === r) && l in t && (c = aSe, d = t[l]), d && d.add(s, e) || (c = rSe, d = new kl(l), !!d.add(s, e)) ? void(t[l] = d, n.push({
					operation: c,
					block: a,
					item: i,
					shorthand: d
				}), r = o) : void(r = null)
			}
		}), r
	}

	function wl(e, t) {
		e.forEach(function(e) {
			var n = e.shorthand;
			n.isOkToMinimize() && (e.operation === rSe ? e.item.data = t(n.getDeclaration()) : e.block.remove(e.item))
		})
	}

	function vl(e, t, n) {
		var r = mSe(e).basename;
		if ('background' === r) return e + ':' + fSe(t.value);
		var a = t.id,
			o = n[a];
		if (!o) {
			switch (t.value.type) {
				case 'Value':
					var i = '',
						s = '',
						l = {},
						d = !1;
					t.value.children.each(function e(t) {
						switch (t.type) {
							case 'Value':
							case 'Brackets':
							case 'Parentheses':
								t.children.each(e);
								break;
							case 'Raw':
								d = !0;
								break;
							case 'Identifier':
								var n = t.name;
								i || (i = gSe(n).vendor), /\\[09]/.test(n) && (s = RegExp.lastMatch), 'cursor' === r ? -1 === kSe.indexOf(n) && (l[n] = !0) : 'position' === r ? -1 === SSe.indexOf(n) && (l[n] = !0) : xSe.hasOwnProperty(r) && xSe[r].test(n) && (l[n] = !0);
								break;
							case 'Function':
								var n = t.name;
								if (i || (i = gSe(n).vendor), 'rect' === n) {
									var a = t.children.some(function(e) {
										return 'Operator' === e.type && ',' === e.value
									});
									a || (n = 'rect-backward')
								}
								l[n + '()'] = !0, t.children.each(e);
								break;
							case 'Dimension':
								var o = t.unit;
								'rem' === o || 'vw' === o || 'vh' === o || 'vmin' === o || 'vmax' === o || 'vm' === o ? l[o] = !0 : void 0;
						}
					}), o = d ? '!' + ySe++ : '!' + Object.keys(l).sort() + '|' + s + i;
					break;
				case 'Raw':
					o = '!' + t.value.value;
					break;
				default:
					o = fSe(t.value);
			}
			n[a] = o
		}
		return e + o
	}

	function Tl(e, t, n) {
		var r = mSe(t.property);
		if (wSe.hasOwnProperty(r.basename))
			for (var a = wSe[r.basename], o = 0; o < a.length; o++) {
				var i = vl(r.prefix + a[o], t, n),
					s = e.hasOwnProperty(i) ? e[i] : null;
				if (s && (!t.important || s.item.data.important)) return s
			}
	}

	function Cl(e, t, n, r, a) {
		var o = e.block.children;
		o.eachRight(function(e, t) {
			var n = e.property,
				i = vl(n, e, a),
				s = r[i];
			if (s && !bSe.hasOwnProperty(n)) e.important && !s.item.data.important ? (r[i] = {
				block: o,
				item: t
			}, s.block.remove(s.item)) : o.remove(t);
			else {
				var s = Tl(r, e, a);
				s ? o.remove(t) : (e.fingerprint = i, r[i] = {
					block: o,
					item: t
				})
			}
		}), o.isEmpty() && n.remove(t)
	}

	function El(e, t, n) {
		var r = e.prelude.children,
			a = e.block.children,
			o = r.first().compareMarker,
			i = {};
		n.nextUntil(t.next, function(t, s) {
			if ('Rule' !== t.type) return $ke.unsafeToSkipNode.call(r, t);
			if (e.pseudoSignature !== t.pseudoSignature) return !0;
			var l = t.prelude.children.head,
				d = t.block.children,
				c = l.data.compareMarker;
			if (c in i) return !0;
			if (r.head === r.tail && r.first().id === l.data.id) return a.appendList(d), void n.remove(s);
			if ($ke.isEqualDeclarations(a, d)) {
				var p = l.data.id;
				return r.some(function(e, t) {
					var n = e.id;
					return p < n ? (r.insert(l, t), !0) : t.next ? void 0 : (r.insert(l), !0)
				}), void n.remove(s)
			}
			return c === o || void(i[c] = !0)
		})
	}

	function Al(e) {
		var t = 0;
		return e.each(function(e) {
			t += e.id.length + 1
		}), t - 1
	}

	function Ol(e) {
		for (var t = 0, n = 0; n < e.length; n++) t += e[n].length;
		return t + e.length - 1
	}

	function Pl(e, t, n) {
		var r = null !== this.block && this.block.avoidRulesMerge,
			a = e.prelude.children,
			o = e.block,
			i = Object.create(null),
			s = !0,
			l = !0;
		n.prevUntil(t.prev, function(d, c) {
			if ('Rule' !== d.type) return $ke.unsafeToSkipNode.call(a, d);
			var p = d.prelude.children,
				u = d.block;
			if (e.pseudoSignature !== d.pseudoSignature) return !0;
			if (l = !p.some(function(e) {
					return e.compareMarker in i
				}), !l && !s) return !0;
			if (s && $ke.isEqualSelectors(p, a)) return u.children.appendList(o.children), n.remove(t), !0;
			var m = $ke.compareDeclarations(o.children, u.children);
			if (m.eq.length) {
				if (!m.ne1.length && !m.ne2.length) return l && ($ke.addSelectors(a, p), n.remove(c)), !0;
				if (!r)
					if (m.ne1.length && !m.ne2.length) {
						var g = Al(a),
							h = Ol(m.eq);
						s && g < h && ($ke.addSelectors(p, a), o.children = new ESe().fromArray(m.ne1))
					} else if (!m.ne1.length && m.ne2.length) {
					var g = Al(p),
						h = Ol(m.eq);
					l && g < h && ($ke.addSelectors(a, p), u.children = new ESe().fromArray(m.ne2))
				} else {
					var f = {
							type: 'SelectorList',
							loc: null,
							children: $ke.addSelectors(p.copy(), a)
						},
						y = Al(f.children) + 2,
						h = Ol(m.eq);
					if (l && h >= y) {
						var b = {
							type: 'Rule',
							loc: null,
							prelude: f,
							block: {
								type: 'Block',
								loc: null,
								children: new ESe().fromArray(m.eq)
							},
							pseudoSignature: e.pseudoSignature
						};
						return o.children = new ESe().fromArray(m.ne1), u.children = new ESe().fromArray(m.ne2.concat(m.ne2overrided)), n.insert(n.createItem(b), c), !0
					}
				}
			}
			s && (s = !p.some(function(e) {
				return a.some(function(t) {
					return t.compareMarker === e.compareMarker
				})
			})), p.each(function(e) {
				i[e.compareMarker] = !0
			})
		})
	}

	function ql(e, t) {
		var n = new LSe,
			r = !1,
			a;
		return e.nextUntil(e.head, function(e, o, i) {
			return 'Comment' === e.type ? t && '!' === e.value.charAt(0) ? r || a || (i.remove(o), void(a = e)) : void i.remove(o) : void('WhiteSpace' !== e.type && (r = !0), n.insert(i.remove(o)))
		}), {
			comment: a,
			stylesheet: {
				type: 'StyleSheet',
				loc: null,
				children: n
			}
		}
	}

	function Rl(e, t, n, r) {
		r.logger('Compress block #' + n, null, !0);
		var a = 1;
		return 'StyleSheet' === e.type && (e.firstAtrulesAllowed = t, e.id = a++), RSe(e, {
			visit: 'Atrule',
			enter: function(e) {
				null !== e.block && (e.block.id = a++)
			}
		}), r.logger('init', e), ike(e, r), r.logger('clean', e), qke(e, r), r.logger('replace', e), r.restructuring && PSe(e, r), e
	}

	function Dl(e) {
		var t = 'comments' in e ? e.comments : 'exclamation';
		return 'boolean' == typeof t ? t = !!t && 'exclamation' : 'exclamation' !== t && 'first-exclamation' !== t && (t = !1), t
	}

	function Nl(e) {
		return 'restructure' in e ? e.restructure : !('restructuring' in e) || e.restructuring
	}

	function Bl(e) {
		return new LSe().appendData({
			type: 'Rule',
			loc: null,
			prelude: {
				type: 'SelectorList',
				loc: null,
				children: new LSe().appendData({
					type: 'Selector',
					loc: null,
					children: new LSe().appendData({
						type: 'TypeSelector',
						loc: null,
						name: 'x'
					})
				})
			},
			block: e
		})
	}

	function Il(e, t, n, r) {
		return t.debug && console.error('## ' + e + ' done in %d ms\n', Date.now() - n), r
	}

	function zl(e) {
		var t;
		return function(n, r) {
			var a = n;
			if (r && (a = '[' + ((Date.now() - t) / 1e3).toFixed(3) + 's] ' + a), 1 < e && r) {
				var o = mwe(r);
				2 === e && 256 < o.length && (o = o.substr(0, 256) + '...'), a += '\n  ' + o + '\n'
			}
			console.error(a), t = Date.now()
		}
	}

	function _l(e) {
		var t = {};
		for (var n in e) t[n] = e[n];
		return t
	}

	function Ml(e) {
		return e = _l(e), 'function' != typeof e.logger && e.debug && (e.logger = zl(e.debug)), e
	}

	function Gl(e, t, n) {
		Array.isArray(n) || (n = [n]), n.forEach(function(n) {
			n(e, t)
		})
	}

	function Ul(e, t, n) {
		n = n || {};
		var r = n.filename || '<unknown>',
			a = Il('parsing', n, Date.now(), uwe(t, {
				context: e,
				filename: r,
				positions: !!n.sourceMap
			})),
			o;
		n.beforeCompress && Il('beforeCompress', n, Date.now(), Gl(a, n, n.beforeCompress));
		var i = Il('compress', n, Date.now(), DSe(a, Ml(n)));
		return n.afterCompress && Il('afterCompress', n, Date.now(), Gl(i, n, n.afterCompress)), o = n.sourceMap ? Il('generate(sourceMap: true)', n, Date.now(), function() {
			var e = mwe(i.ast, {
				sourceMap: !0
			});
			return e.map._file = r, e.map.setSourceContent(r, t), e
		}()) : Il('generate', n, Date.now(), {
			css: mwe(i.ast),
			map: null
		}), o
	}

	function Vl(e) {
		var t = {};
		for (var n in e) t[n] = e[n];
		return t
	}

	function Wl(e) {
		function t(e, n) {
			for (var r = 0, a; r < e.content.length; r++) a = e.content[r], a.content && t(a, n), a.isElem('style') && !a.isEmpty() ? n.push(a) : a.isElem() && a.hasAttr('style') && n.push(a);
			return n
		}
		return t(e, [])
	}

	function Fl(e, t) {
		return !1 == 'usage' in e || e.usage && !1 == t in e.usage || !!(e.usage && e.usage[t])
	}

	function jl(e, t) {
		function n(e, t) {
			for (var a = 0, o; a < e.content.length; a++) o = e.content[a], o.content && n(o, t), o.isElem('script') && (r = !1), o.isElem() && (t.tags[o.elem] = !0, o.hasAttr('id') && (t.ids[o.attr('id').value] = !0), o.hasAttr('class') && o.attr('class').value.replace(/^\s+|\s+$/g, '').split(/\s+/).forEach(function(e) {
				t.classes[e] = !0
			}), o.attrs && Object.keys(o.attrs).some(function(e) {
				return /^on/i.test(e)
			}) && (r = !1));
			return t
		}
		var r = !0,
			a = {},
			o = !1,
			i = n(e, {
				ids: Object.create(null),
				classes: Object.create(null),
				tags: Object.create(null)
			});
		for (var s in !r && t.usage && t.usage.force && (r = !0), i) Fl(t, s) && (a[s] = Object.keys(i[s]), o = !0);
		return r && o ? a : null
	}

	function Hl() {
		return '(?:' + Array.prototype.join.call(arguments, '|') + ')'
	}

	function g(e) {
		if (!e) return [0];
		e[e.length - 1]++;
		for (var t = e.length - 1; 0 < t; t--) e[t] > qwe && (e[t] = 0, void 0 !== e[t - 1] && e[t - 1]++);
		return e[0] > qwe && (e[0] = 0, e.unshift(0)), e
	}

	function Yl(e, t) {
		var n = t.prefix;
		return n + e.map((e) => Lwe[e]).join('')
	}

	function $l(e, t) {
		return e.content.forEach(function(n) {
			n.hasAttr('id') || n.isElem('style') ? (t.push(n), n.parentNode = e) : !n.isEmpty() && (n.content = $l(n, t))
		}), t
	}

	function Kl(e) {
		return '#' + ('00000' + (e[0] << 16 | e[1] << 8 | e[2]).toString(16)).slice(-6).toUpperCase()
	}

	function Xl(e, t) {
		var r = {};
		for (var a in e) t.hasOwnProperty(a) && -1 < sve.indexOf(a) && e[a].name === t[a].name && e[a].value === t[a].value && e[a].prefix === t[a].prefix && e[a].local === t[a].local && (r[a] = e[a]);
		return !!Object.keys(r).length && r
	}

	function Ql(e) {
		return e.isElem(uve) && e.hasAttr('attributeName', this) || !e.isEmpty() && e.content.some(Ql, this)
	}

	function Zl(e) {
		return e.isElem('switch') && !e.isEmpty() && !e.content.some((e) => e.hasAttr('systemLanguage') || e.hasAttr('requiredFeatures') || e.hasAttr('requiredExtensions'))
	}

	function Jl(e) {
		var t = [0, 0],
			n = [0, 0],
			r;
		return e.forEach(function(a, o) {
			var i = a.instruction,
				s = a.data;
			s ? (-1 < 'mcslqta'.indexOf(i) ? (t[0] += s[s.length - 2], t[1] += s[s.length - 1], 'm' === i && (n[0] = t[0], n[1] = t[1], r = a)) : 'h' === i ? t[0] += s[0] : 'v' === i && (t[1] += s[0]), 'M' === i ? (0 < o && (i = 'm'), s[0] -= t[0], s[1] -= t[1], n[0] = t[0] += s[0], n[1] = t[1] += s[1], r = a) : -1 < 'LT'.indexOf(i) ? (i = i.toLowerCase(), s[0] -= t[0], s[1] -= t[1], t[0] += s[0], t[1] += s[1]) : 'C' === i ? (i = 'c', s[0] -= t[0], s[1] -= t[1], s[2] -= t[0], s[3] -= t[1], s[4] -= t[0], s[5] -= t[1], t[0] += s[4], t[1] += s[5]) : -1 < 'SQ'.indexOf(i) ? (i = i.toLowerCase(), s[0] -= t[0], s[1] -= t[1], s[2] -= t[0], s[3] -= t[1], t[0] += s[2], t[1] += s[3]) : 'A' === i ? (i = 'a', s[5] -= t[0], s[6] -= t[1], t[0] += s[5], t[1] += s[6]) : 'H' === i ? (i = 'h', s[0] -= t[0], t[0] += s[0]) : 'V' === i && (i = 'v', s[0] -= t[1], t[1] += s[0]), a.instruction = i, a.data = s, a.coords = t.slice(-2)) : 'z' == i && (r && (a.coords = r.coords), t[0] = n[0], t[1] = n[1]), a.base = 0 < o ? e[o - 1].coords : [0, 0]
		}), e
	}

	function ed(e, t) {
		var n = hd.bind(null, t),
			r = [0, 0],
			a = [0, 0],
			o = {};
		return e = e.filter(function(e, s, l) {
			var d = e.instruction,
				c = e.data,
				p = l[s + 1];
			if (c) {
				var u = c,
					m;
				if ('s' === d && (u = [0, 0].concat(c), -1 < 'cs'.indexOf(o.instruction))) {
					var g = o.data,
						h = g.length;
					u[0] = g[h - 2] - g[h - 4], u[1] = g[h - 1] - g[h - 3]
				}
				if (t.makeArcs && ('c' == d || 's' == d) && nd(u) && (m = pd(u))) {
					var f = kve([m.radius])[0],
						y = gd(u, m),
						b = 0 < u[5] * u[0] - u[4] * u[1] ? 1 : 0,
						x = {
							instruction: 'a',
							data: [f, f, 0, 0, b, u[4], u[5]],
							coords: e.coords.slice(),
							base: e.base
						},
						k = [x],
						S = [m.center[0] - u[4], m.center[1] - u[5]],
						w = {
							center: S,
							radius: m.radius
						},
						v = [e],
						T = 0,
						C = '',
						E;
					if ('c' == o.instruction && nd(o.data) && md(o.data, m) || 'a' == o.instruction && o.sdata && md(o.sdata, m)) {
						v.unshift(o), x.base = o.base, x.data[5] = x.coords[0] - x.base[0], x.data[6] = x.coords[1] - x.base[1];
						var A = 'a' == o.instruction ? o.sdata : o.data;
						y += gd(A, {
							center: [A[4] + S[0], A[5] + S[1]],
							radius: m.radius
						}), y > Bd && (x.data[3] = 1), T = 1
					}
					for (var O = s, P;
						(p = l[++O]) && ~'cs'.indexOf(p.instruction) && (P = p.data, 's' == p.instruction && (E = sd({
							instruction: 's',
							data: p.data.slice()
						}, l[O - 1].data), P = E.data, E.data = P.slice(0, 2), C = n([E])), nd(P) && ud(P, w)) && (y += gd(P, w), !(1e-3 < y - 2 * Bd));) {
						if (y > Bd && (x.data[3] = 1), v.push(p), 1e-3 < 2 * Bd - y) x.coords = p.coords, x.data[5] = x.coords[0] - x.base[0], x.data[6] = x.coords[1] - x.base[1];
						else {
							x.data[5] = 2 * (w.center[0] - P[4]), x.data[6] = 2 * (w.center[1] - P[5]), x.coords = [x.base[0] + x.data[5], x.base[1] + x.data[6]], x = {
								instruction: 'a',
								data: [f, f, 0, 0, b, p.coords[0] - x.coords[0], p.coords[1] - x.coords[1]],
								coords: p.coords,
								base: x.coords
							}, k.push(x), O++;
							break
						}
						S[0] -= P[4], S[1] -= P[5]
					}
					if ((n(k) + C).length < n(v).length) {
						if (l[O] && 's' == l[O].instruction && sd(l[O], l[O - 1].data), T) {
							var L = k.shift();
							kve(L.data), r[0] += L.data[5] - o.data[o.data.length - 2], r[1] += L.data[6] - o.data[o.data.length - 1], o.instruction = 'a', o.data = L.data, e.base = o.coords = L.coords
						}
						if (x = k.shift(), 1 == v.length ? e.sdata = u.slice() : 0 < v.length - 1 - T && l.splice.apply(l, [s + 1, v.length - 1 - T].concat(k)), !x) return !1;
						d = 'a', c = x.data, e.coords = x.coords
					}
				}
				if (!1 !== Sve) {
					if (-1 < 'mltqsc'.indexOf(d))
						for (var q = c.length; q--;) c[q] += e.base[q % 2] - r[q % 2];
					else 'h' == d ? c[0] += e.base[0] - r[0] : 'v' == d ? c[0] += e.base[1] - r[1] : 'a' == d && (c[5] += e.base[0] - r[0], c[6] += e.base[1] - r[1]);
					kve(c), 'h' == d ? r[0] += c[0] : 'v' == d ? r[1] += c[0] : (r[0] += c[c.length - 2], r[1] += c[c.length - 1]), kve(r), 'm' == d.toLowerCase() && (a[0] = r[0], a[1] = r[1])
				}
				if (t.straightCurves && ('c' === d && id(c) || 's' === d && id(u) ? (p && 's' == p.instruction && sd(p, c), d = 'l', c = c.slice(-2)) : 'q' === d && id(c) ? (p && 't' == p.instruction && sd(p, c), d = 'l', c = c.slice(-2)) : 't' === d && 'q' !== o.instruction && 't' !== o.instruction ? (d = 'l', c = c.slice(-2)) : 'a' === d && (0 === c[0] || 0 === c[1]) && (d = 'l', c = c.slice(-2))), t.lineShorthands && 'l' === d && (0 === c[1] ? (d = 'h', c.pop()) : 0 === c[0] && (d = 'v', c.shift())), t.collapseRepeated && !Cve && -1 < 'mhv'.indexOf(d) && o.instruction && d == o.instruction.toLowerCase() && ('h' != d && 'v' != d || 0 <= o.data[0] == 0 <= e.data[0])) return o.data[0] += c[0], 'h' != d && 'v' != d && (o.data[1] += c[1]), o.coords = e.coords, l[s] = o, !1;
				if (t.curveSmoothShorthands && o.instruction && ('c' === d ? 'c' === o.instruction && c[0] === -(o.data[2] - o.data[4]) && c[1] === -(o.data[3] - o.data[5]) ? (d = 's', c = c.slice(2)) : 's' === o.instruction && c[0] === -(o.data[0] - o.data[2]) && c[1] === -(o.data[1] - o.data[3]) ? (d = 's', c = c.slice(2)) : -1 === 'cs'.indexOf(o.instruction) && 0 === c[0] && 0 === c[1] && (d = 's', c = c.slice(2)) : 'q' === d && ('q' === o.instruction && c[0] === o.data[2] - o.data[0] && c[1] === o.data[3] - o.data[1] ? (d = 't', c = c.slice(2)) : 't' === o.instruction && c[2] === o.data[0] && c[3] === o.data[1] && (d = 't', c = c.slice(2)))), t.removeUseless) {
					if (-1 < 'lhvqtcs'.indexOf(d) && c.every(function(e) {
							return 0 === e
						})) return l[s] = o, !1;
					if ('a' === d && 0 === c[5] && 0 === c[6]) return l[s] = o, !1
				}
				e.instruction = d, e.data = c, o = e
			} else {
				if (r[0] = a[0], r[1] = a[1], 'z' == o.instruction) return !1;
				o = e
			}
			return !0
		}), e
	}

	function td(e, t) {
		var n = e[0];
		return e = e.filter(function(e, r) {
			if (0 == r) return !0;
			if (!e.data) return n = e, !0;
			var a = e.instruction,
				o = e.data,
				s = o && o.slice(0);
			if (-1 < 'mltqsc'.indexOf(a))
				for (var l = s.length; l--;) s[l] += e.base[l % 2];
			else 'h' == a ? s[0] += e.base[0] : 'v' == a ? s[0] += e.base[1] : 'a' == a && (s[5] += e.base[0], s[6] += e.base[1]);
			kve(s);
			var i = xve(s, t),
				d = xve(o, t);
			return i.length < d.length && !(t.negativeExtraSpace && a == n.instruction && 96 < n.instruction.charCodeAt(0) && i.length == d.length - 1 && (0 > o[0] || /^0\./.test(o[0]) && n.data[n.data.length - 1] % 1)) && (e.instruction = a.toUpperCase(), e.data = s), n = e, !0
		}), e
	}

	function nd(e) {
		var t = rd([0, 0, e[2], e[3], e[0], e[1], e[4], e[5]]);
		return t && e[2] < t[0] == 0 > t[0] && e[3] < t[1] == 0 > t[1] && e[4] < t[0] == t[0] < e[0] && e[5] < t[1] == t[1] < e[1]
	}

	function rd(e) {
		var t = e[1] - e[3],
			n = e[2] - e[0],
			r = e[0] * e[3] - e[2] * e[1],
			a = e[5] - e[7],
			o = e[6] - e[4],
			i = e[4] * e[7] - e[5] * e[6],
			s = t * o - a * n;
		if (s) {
			var l = [(n * i - o * r) / s, (t * i - a * r) / -s];
			if (!isNaN(l[0]) && !isNaN(l[1]) && isFinite(l[0]) && isFinite(l[1])) return l
		}
	}

	function ad(e) {
		for (var t = e.length; 0 < t--;)
			if (e[t].toFixed(Sve) != e[t]) {
				var n = +e[t].toFixed(Sve - 1);
				e[t] = +Vd(n - e[t]).toFixed(Sve + 1) >= wve ? +e[t].toFixed(Sve) : n
			}
		return e
	}

	function od(e) {
		for (var t = e.length; 0 < t--;) e[t] = zd(e[t]);
		return e
	}

	function id(e) {
		var t = e.length - 2,
			n = -e[t + 1],
			r = e[t],
			a = 1 / (n * n + r * r);
		if (1 >= t || !isFinite(a)) return !1;
		for (; 0 <= (t -= 2);)
			if (Pd(Wd(n * e[t] + r * e[t + 1], 2) * a) > wve) return !1;
		return !0
	}

	function sd(e, t) {
		switch (e.instruction) {
			case 's':
				e.instruction = 'c';
				break;
			case 't':
				e.instruction = 'q';
		}
		return e.data.unshift(t[t.length - 2] - t[t.length - 4], t[t.length - 1] - t[t.length - 3]), e
	}

	function ld(e, t) {
		return Pd(Wd(e[0] - t[0], 2) + Wd(e[1] - t[1], 2))
	}

	function cd(e, n) {
		var t = n * n,
			r = t * n,
			a = 1 - n,
			o = a * a;
		return [3 * o * n * e[0] + 3 * a * t * e[2] + r * e[4], 3 * o * n * e[1] + 3 * a * t * e[3] + r * e[5]]
	}

	function pd(e) {
		var t = cd(e, 1 / 2),
			n = [t[0] / 2, t[1] / 2],
			r = [(t[0] + e[4]) / 2, (t[1] + e[5]) / 2],
			a = rd([n[0], n[1], n[0] + n[1], n[1] - n[0], r[0], r[1], r[0] + (r[1] - t[1]), r[1] - (r[0] - t[0])]),
			o = a && ld([0, 0], a),
			i = Ud(vve * wve, Tve * o / 100);
		if (a && [0.25, 0.75].every(function(t) {
				return Vd(ld(cd(e, t), a) - o) <= i
			})) return {
			center: a,
			radius: o
		}
	}

	function ud(e, t) {
		var n = Ud(vve * wve, Tve * t.radius / 100);
		return [0, 0.25, 0.5, 0.75, 1].every(function(r) {
			return Vd(ld(cd(e, r), t.center) - t.radius) <= n
		})
	}

	function md(e, t) {
		return ud(e, {
			center: [t.center[0] + e[4], t.center[1] + e[5]],
			radius: t.radius
		})
	}

	function gd(e, t) {
		var n = -t.center[0],
			r = -t.center[1],
			a = e[4] - t.center[0],
			o = e[5] - t.center[1];
		return Dd((n * a + r * o) / Pd((n * n + r * r) * (a * a + o * o)))
	}

	function hd(e, t) {
		return t.reduce(function(t, n) {
			return t + n.instruction + (n.data ? xve(kve(n.data.slice()), e) : '')
		}, '')
	}

	function fd(e, t, n) {
		var r = Ave(e.attr(t).value);
		n = yd(r, n), n.collapseIntoOne && 1 < r.length && (r = [Ove(r)]), n.convertToShorts ? r = kd(r, n) : r.forEach(vd), n.removeUseless && (r = Sd(r)), r.length ? e.attr(t).value = wd(r, n) : e.removeAttr(t)
	}

	function yd(e, t) {
		var n = e.reduce(bd, []),
			r = t.transformPrecision;
		return t = Object.assign({}, t), n.length && (t.transformPrecision = Ud(t.transformPrecision, Md.apply(Math, n.map(xd)) || t.transformPrecision), r = Md.apply(Math, n.map(function(e) {
			return (e + '').replace(/\D+/g, '').length
		}))), 'degPrecision' in t || (t.degPrecision = Md(0, Ud(t.floatPrecision, r - 2))), qve = 1 <= t.floatPrecision && 20 > t.floatPrecision ? Cd.bind(this, t.floatPrecision) : Td, Lve = 1 <= t.degPrecision && 20 > t.floatPrecision ? Cd.bind(this, t.degPrecision) : Td, Rve = 1 <= t.transformPrecision && 20 > t.floatPrecision ? Cd.bind(this, t.transformPrecision) : Td, t
	}

	function bd(e, t) {
		return 'matrix' == t.name ? e.concat(t.data.slice(0, 4)) : e
	}

	function xd(e) {
		return (e += '').slice(e.indexOf('.')).length - 1
	}

	function kd(e, t) {
		for (var n = 0, r; n < e.length; n++) {
			if (r = e[n], t.matrixToTransform && 'matrix' === r.name) {
				var a = Pve(r, t);
				a != r && wd(a, t).length <= wd([r], t).length && e.splice.apply(e, [n, 1].concat(a)), r = e[n]
			}
			vd(r), t.shortTranslate && 'translate' === r.name && 2 === r.data.length && !r.data[1] && r.data.pop(), t.shortScale && 'scale' === r.name && 2 === r.data.length && r.data[0] === r.data[1] && r.data.pop(), t.shortRotate && e[n - 2] && 'translate' === e[n - 2].name && 'rotate' === e[n - 1].name && 'translate' === e[n].name && e[n - 2].data[0] === -e[n].data[0] && e[n - 2].data[1] === -e[n].data[1] && (e.splice(n - 2, 3, {
				name: 'rotate',
				data: [e[n - 1].data[0], e[n - 2].data[0], e[n - 2].data[1]]
			}), n -= 2, r = e[n])
		}
		return e
	}

	function Sd(e) {
		return e.filter(function(e) {
			return (!(-1 < ['translate', 'rotate', 'skewX', 'skewY'].indexOf(e.name)) || 1 != e.data.length && 'rotate' != e.name || e.data[0]) && ('translate' != e.name || e.data[0] || e.data[1]) && ('scale' != e.name || 1 != e.data[0] || !(2 > e.data.length) && 1 != e.data[1]) && ('matrix' != e.name || 1 != e.data[0] || 1 != e.data[3] || e.data[1] || e.data[2] || e.data[4] || e.data[5])
		})
	}

	function wd(e, t) {
		var n = '';
		return e.forEach(function(e) {
			vd(e), n += (n && ' ') + e.name + '(' + Eve(e.data, t) + ')'
		}), n
	}

	function vd(e) {
		switch (e.name) {
			case 'translate':
				e.data = qve(e.data);
				break;
			case 'rotate':
				e.data = Lve(e.data.slice(0, 1)).concat(qve(e.data.slice(1)));
				break;
			case 'skewX':
			case 'skewY':
				e.data = Lve(e.data);
				break;
			case 'scale':
				e.data = Rve(e.data);
				break;
			case 'matrix':
				e.data = Rve(e.data.slice(0, 4)).concat(qve(e.data.slice(4)));
		}
		return e
	}

	function Td(e) {
		return e.map(Math.round)
	}

	function Cd(e, t) {
		for (var n = t.length, r = +Wd(.1, e).toFixed(e); n--;)
			if (t[n].toFixed(e) != t[n]) {
				var a = +t[n].toFixed(e - 1);
				t[n] = +Vd(a - t[n]).toFixed(e + 1) >= r ? +t[n].toFixed(e) : a
			}
		return t
	}

	function Ed(e) {
		function t(e, t) {
			for (const r of Object.keys(t)) e[r] = n(t[r]);
			return e
		}

		function n(e) {
			if ('object' != typeof e || null === e) return e;
			if (r.has(e)) return r.get(e);
			let a;
			if (e.constructor === QJ) a = new QJ({}, e.parentNode), r.set(e, a), e.parentNode && (a.parentNode = n(e.parentNode)), t(a, e);
			else if (e.constructor === pne || e.constructor === zpe || e.constructor === Object || e.constructor === Array) a = new e.constructor, r.set(e, a), t(a, e);
			else if (e.constructor === Map) {
				a = new Map, r.set(e, a);
				for (const [t, r] of e) a.set(n(t), n(r))
			} else if (e.constructor === Set) {
				a = new Set, r.set(e, a);
				for (const t of e) a.add(n(t))
			} else throw Error('unexpected type');
			return a
		}
		const r = new Map;
		return n(e)
	}

	function Ad(e) {
		const t = e.content.filter((e) => e.isElem('svg'))[0];
		if (!t) return {};
		if (t.hasAttr('width') && t.hasAttr('height')) return {
			width: parseFloat(t.attr('width').value),
			height: parseFloat(t.attr('height').value)
		};
		if (t.hasAttr('viewBox')) {
			const e = t.attr('viewBox').value.split(/(?:,\s*|\s+)/);
			return {
				width: parseFloat(e[2]),
				height: parseFloat(e[3])
			}
		}
		return {}
	}

	function* Od(e) {
		Object.keys(e.plugins).forEach((t) => {
			_ve[t].active = e.plugins[t]
		});
		const t = +e.floatPrecision;
		for (const n of Object.values(_ve)) n.params && 'floatPrecision' in n.params && (n.params.floatPrecision = t);
		const n = Ed(Gve);
		for (let t, r; void 0 == t || t.length != r;) r = t && t.length, Zpe(n, {
			input: 'string'
		}, Mve), t = Qpe(n, {
			indent: '  ',
			pretty: e.pretty
		}).data, yield {
			data: t,
			dimensions: Ad(n)
		}
	}
	var Pd = Math.sqrt,
		Ld = Math.tan,
		qd = Math.asin,
		Rd = Math.sin,
		Dd = Math.acos,
		Nd = Math.cos,
		Bd = Math.PI,
		Id = Number.MAX_VALUE,
		zd = Math.round,
		_d = Number.isNaN,
		Md = Math.max,
		Gd = String.fromCharCode,
		Ud = Math.min,
		Vd = Math.abs,
		Wd = Math.pow,
		Fd = Math.floor,
		jd = document,
		self=document;

		console.log('document', document);

	self.global = jd;

	var Hd;
	t.prototype = Object.create(null), n.EventEmitter = n, n.usingDomains = !1, n.prototype.domain = void 0, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.init = function() {
		this.domain = null, n.usingDomains && Hd.active && !(this instanceof Hd.Domain) && (this.domain = Hd.active), this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new t, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
	}, n.prototype.setMaxListeners = function(e) {
		if ('number' != typeof e || 0 > e || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
		return this._maxListeners = e, this
	}, n.prototype.getMaxListeners = function() {
		return r(this)
	}, n.prototype.emit = function(e) {
		var t = 'error' === e,
			n, r, c, p, u, i, m;
		if (i = this._events, i) t = t && null == i.error;
		else if (!t) return !1;
		if (m = this.domain, t) {
			if (n = arguments[1], m) n || (n = new Error('Uncaught, unspecified "error" event')), n.domainEmitter = this, n.domain = m, n.domainThrown = !1, m.emit('error', n);
			else if (n instanceof Error) throw n;
			else {
				var g = new Error('Uncaught, unspecified "error" event. (' + n + ')');
				throw g.context = n, g
			}
			return !1
		}
		if (r = i[e], !r) return !1;
		var h = 'function' == typeof r;
		switch (c = arguments.length, c) {
			case 1:
				a(r, h, this);
				break;
			case 2:
				o(r, h, this, arguments[1]);
				break;
			case 3:
				s(r, h, this, arguments[1], arguments[2]);
				break;
			case 4:
				l(r, h, this, arguments[1], arguments[2], arguments[3]);
				break;
			default:
				for (p = Array(c - 1), u = 1; u < c; u++) p[u - 1] = arguments[u];
				d(r, h, this, p);
		}
		return !1, !0
	}, n.prototype.addListener = function(e, t) {
		return c(this, e, t, !1)
	}, n.prototype.on = n.prototype.addListener, n.prototype.prependListener = function(e, t) {
		return c(this, e, t, !0)
	}, n.prototype.once = function(e, t) {
		if ('function' != typeof t) throw new TypeError('"listener" argument must be a function');
		return this.on(e, u(this, e, t)), this
	}, n.prototype.prependOnceListener = function(e, t) {
		if ('function' != typeof t) throw new TypeError('"listener" argument must be a function');
		return this.prependListener(e, u(this, e, t)), this
	}, n.prototype.removeListener = function(e, n) {
		var r, a, o, s, i;
		if ('function' != typeof n) throw new TypeError('"listener" argument must be a function');
		if (a = this._events, !a) return this;
		if (r = a[e], !r) return this;
		if (r === n || r.listener && r.listener === n) 0 == --this._eventsCount ? this._events = new t : (delete a[e], a.removeListener && this.emit('removeListener', e, r.listener || n));
		else if ('function' != typeof r) {
			for (o = -1, s = r.length; 0 < s--;)
				if (r[s] === n || r[s].listener && r[s].listener === n) {
					i = r[s].listener, o = s;
					break
				}
			if (0 > o) return this;
			if (1 === r.length) {
				if (r[0] = void 0, 0 == --this._eventsCount) return this._events = new t, this;
				delete a[e]
			} else h(r, o);
			a.removeListener && this.emit('removeListener', e, i || n)
		}
		return this
	}, n.prototype.removeAllListeners = function(e) {
		var n, r;
		if (r = this._events, !r) return this;
		if (!r.removeListener) return 0 === arguments.length ? (this._events = new t, this._eventsCount = 0) : r[e] && (0 == --this._eventsCount ? this._events = new t : delete r[e]), this;
		if (0 === arguments.length) {
			for (var a = Object.keys(r), o = 0, i; o < a.length; ++o) i = a[o], 'removeListener' === i || this.removeAllListeners(i);
			return this.removeAllListeners('removeListener'), this._events = new t, this._eventsCount = 0, this
		}
		if (n = r[e], 'function' == typeof n) this.removeListener(e, n);
		else if (n)
			do this.removeListener(e, n[n.length - 1]); while (n[0]);
		return this
	}, n.prototype.listeners = function(e) {
		var t = this._events,
			n, r;
		return t ? (n = t[e], r = n ? 'function' == typeof n ? [n.listener || n] : y(n) : []) : r = [], r
	}, n.listenerCount = function(e, t) {
		return 'function' == typeof e.listenerCount ? e.listenerCount(t) : m.call(e, t)
	}, n.prototype.listenerCount = m, n.prototype.eventNames = function() {
		return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : []
	};
	var Yd = b,
		$d = x;
	'function' == typeof global.setTimeout && (Yd = setTimeout), 'function' == typeof global.clearTimeout && ($d = clearTimeout);
	var Kd = [],
		Xd = !1,
		Qd = -1,
		Zd;
	E.prototype.run = function() {
		this.fun.apply(null, this.array)
	};
	var Jd = global.performance || {},
		ec = Jd.now || Jd.mozNow || Jd.msNow || Jd.oNow || Jd.webkitNow || function() {
			return new Date().getTime()
		},
		tc = new Date,
		nc = {
			nextTick: C,
			title: 'browser',
			browser: !0,
			env: {},
			argv: [],
			version: '',
			versions: {},
			on: A,
			addListener: A,
			once: A,
			off: A,
			removeListener: A,
			removeAllListeners: A,
			emit: A,
			binding: function() {
				throw new Error('process.binding is not supported')
			},
			cwd: function() {
				return '/'
			},
			chdir: function() {
				throw new Error('process.chdir is not supported')
			},
			umask: function() {
				return 0
			},
			hrtime: function(e) {
				var t = 1e-3 * ec.call(Jd),
					n = Fd(t),
					r = Fd(1e9 * (t % 1));
				return e && (n -= e[0], r -= e[1], 0 > r && (n--, r += 1e9)), [n, r]
			},
			platform: 'browser',
			release: {},
			config: {},
			uptime: function() {
				var e = new Date;
				return (e - tc) / 1e3
			}
		},
		rc;
	rc = 'function' == typeof Object.create ? function(e, t) {
		e.super_ = t, e.prototype = Object.create(t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		})
	} : function(e, t) {
		e.super_ = t;
		var n = function() {};
		n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
	};
	var oc = rc,
		lc = /%[sdj%]/g,
		dc = {},
		cc;
	L.colors = {
		bold: [1, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		white: [37, 39],
		grey: [90, 39],
		black: [30, 39],
		blue: [34, 39],
		cyan: [36, 39],
		green: [32, 39],
		magenta: [35, 39],
		red: [31, 39],
		yellow: [33, 39]
	}, L.styles = {
		special: 'cyan',
		number: 'yellow',
		boolean: 'yellow',
		undefined: 'grey',
		null: 'bold',
		string: 'green',
		date: 'magenta',
		regexp: 'red'
	};
	var pc = [],
		uc = [],
		mc = 'undefined' == typeof Uint8Array ? Array : Uint8Array,
		gc = !1,
		hc = {}.toString,
		fc = Array.isArray || function(e) {
			return '[object Array]' == hc.call(e)
		};
	fe.TYPED_ARRAY_SUPPORT = void 0 === global.TYPED_ARRAY_SUPPORT || global.TYPED_ARRAY_SUPPORT;
	me();
	fe.poolSize = 8192, fe._augment = function(e) {
		return e.__proto__ = fe.prototype, e
	}, fe.from = function(e, t, n) {
		return ye(null, e, t, n)
	}, fe.TYPED_ARRAY_SUPPORT && (fe.prototype.__proto__ = Uint8Array.prototype, fe.__proto__ = Uint8Array), fe.alloc = function(e, t, n) {
		return xe(null, e, t, n)
	}, fe.allocUnsafe = function(e) {
		return ke(null, e)
	}, fe.allocUnsafeSlow = function(e) {
		return ke(null, e)
	}, fe.isBuffer = function(e) {
		return null != e && (!!e._isBuffer || ct(e) || pt(e))
	}, fe.compare = function(e, t) {
		if (!Ee(e) || !Ee(t)) throw new TypeError('Arguments must be Buffers');
		if (e === t) return 0;
		for (var n = e.length, r = t.length, a = 0, o = Ud(n, r); a < o; ++a)
			if (e[a] !== t[a]) {
				n = e[a], r = t[a];
				break
			}
		return n < r ? -1 : r < n ? 1 : 0
	}, fe.isEncoding = function(e) {
		switch ((e + '').toLowerCase()) {
			case 'hex':
			case 'utf8':
			case 'utf-8':
			case 'ascii':
			case 'latin1':
			case 'binary':
			case 'base64':
			case 'ucs2':
			case 'ucs-2':
			case 'utf16le':
			case 'utf-16le':
				return !0;
			default:
				return !1;
		}
	}, fe.concat = function(e, t) {
		if (!fc(e)) throw new TypeError('"list" argument must be an Array of Buffers');
		if (0 === e.length) return fe.alloc(0);
		var n;
		if (void 0 === t)
			for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
		var r = fe.allocUnsafe(t),
			a = 0;
		for (n = 0; n < e.length; ++n) {
			var o = e[n];
			if (!Ee(o)) throw new TypeError('"list" argument must be an Array of Buffers');
			o.copy(r, a), a += o.length
		}
		return r
	}, fe.byteLength = Ae, fe.prototype._isBuffer = !0, fe.prototype.swap16 = function() {
		var e = this.length;
		if (0 != e % 2) throw new RangeError('Buffer size must be a multiple of 16-bits');
		for (var t = 0; t < e; t += 2) Pe(this, t, t + 1);
		return this
	}, fe.prototype.swap32 = function() {
		var e = this.length;
		if (0 != e % 4) throw new RangeError('Buffer size must be a multiple of 32-bits');
		for (var t = 0; t < e; t += 4) Pe(this, t, t + 3), Pe(this, t + 1, t + 2);
		return this
	}, fe.prototype.swap64 = function() {
		var e = this.length;
		if (0 != e % 8) throw new RangeError('Buffer size must be a multiple of 64-bits');
		for (var t = 0; t < e; t += 8) Pe(this, t, t + 7), Pe(this, t + 1, t + 6), Pe(this, t + 2, t + 5), Pe(this, t + 3, t + 4);
		return this
	}, fe.prototype.toString = function() {
		var e = 0 | this.length;
		return 0 == e ? '' : 0 === arguments.length ? Ge(this, 0, e) : Oe.apply(this, arguments)
	}, fe.prototype.equals = function(e) {
		if (!Ee(e)) throw new TypeError('Argument must be a Buffer');
		return this === e || 0 === fe.compare(this, e)
	}, fe.prototype.inspect = function() {
		var e = '',
			t = 50;
		return 0 < this.length && (e = this.toString('hex', 0, t).match(/.{2}/g).join(' '), this.length > t && (e += ' ... ')), '<Buffer ' + e + '>'
	}, fe.prototype.compare = function(e, t, n, r, a) {
		if (!Ee(e)) throw new TypeError('Argument must be a Buffer');
		if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === a && (a = this.length), 0 > t || n > e.length || 0 > r || a > this.length) throw new RangeError('out of range index');
		if (r >= a && t >= n) return 0;
		if (r >= a) return -1;
		if (t >= n) return 1;
		if (t >>>= 0, n >>>= 0, r >>>= 0, a >>>= 0, this === e) return 0;
		for (var o = a - r, s = n - t, l = Ud(o, s), d = this.slice(r, a), c = e.slice(t, n), p = 0; p < l; ++p)
			if (d[p] !== c[p]) {
				o = d[p], s = c[p];
				break
			}
		return o < s ? -1 : s < o ? 1 : 0
	}, fe.prototype.includes = function(e, t, n) {
		return -1 !== this.indexOf(e, t, n)
	}, fe.prototype.indexOf = function(e, t, n) {
		return Le(this, e, t, n, !0)
	}, fe.prototype.lastIndexOf = function(e, t, n) {
		return Le(this, e, t, n, !1)
	}, fe.prototype.write = function(e, t, n, r) {
		if (void 0 === t) r = 'utf8', n = this.length, t = 0;
		else if (void 0 === n && 'string' == typeof t) r = t, n = this.length, t = 0;
		else if (isFinite(t)) t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = 'utf8')) : (r = n, n = void 0);
		else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
		var a = this.length - t;
		if ((void 0 === n || n > a) && (n = a), 0 < e.length && (0 > n || 0 > t) || t > this.length) throw new RangeError('Attempt to write outside buffer bounds');
		r || (r = 'utf8');
		for (var o = !1;;) switch (r) {
			case 'hex':
				return De(this, e, t, n);
			case 'utf8':
			case 'utf-8':
				return Ne(this, e, t, n);
			case 'ascii':
				return Be(this, e, t, n);
			case 'latin1':
			case 'binary':
				return Ie(this, e, t, n);
			case 'base64':
				return ze(this, e, t, n);
			case 'ucs2':
			case 'ucs-2':
			case 'utf16le':
			case 'utf-16le':
				return _e(this, e, t, n);
			default:
				if (o) throw new TypeError('Unknown encoding: ' + r);
				r = ('' + r).toLowerCase(), o = !0;
		}
	}, fe.prototype.toJSON = function() {
		return {
			type: 'Buffer',
			data: Array.prototype.slice.call(this._arr || this, 0)
		}
	};
	var yc = 4096;
	fe.prototype.slice = function(e, t) {
		var n = this.length;
		e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), t < e && (t = e);
		var r;
		if (fe.TYPED_ARRAY_SUPPORT) r = this.subarray(e, t), r.__proto__ = fe.prototype;
		else {
			var a = t - e;
			r = new fe(a, void 0);
			for (var o = 0; o < a; ++o) r[o] = this[o + e]
		}
		return r
	}, fe.prototype.readUIntLE = function(e, t, n) {
		e |= 0, t |= 0, n || He(e, t, this.length);
		for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
		return r
	}, fe.prototype.readUIntBE = function(e, t, n) {
		e |= 0, t |= 0, n || He(e, t, this.length);
		for (var r = this[e + --t], a = 1; 0 < t && (a *= 256);) r += this[e + --t] * a;
		return r
	}, fe.prototype.readUInt8 = function(e, t) {
		return t || He(e, 1, this.length), this[e]
	}, fe.prototype.readUInt16LE = function(e, t) {
		return t || He(e, 2, this.length), this[e] | this[e + 1] << 8
	}, fe.prototype.readUInt16BE = function(e, t) {
		return t || He(e, 2, this.length), this[e] << 8 | this[e + 1]
	}, fe.prototype.readUInt32LE = function(e, t) {
		return t || He(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
	}, fe.prototype.readUInt32BE = function(e, t) {
		return t || He(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
	}, fe.prototype.readIntLE = function(e, t, n) {
		e |= 0, t |= 0, n || He(e, t, this.length);
		for (var r = this[e], a = 1, o = 0; ++o < t && (a *= 256);) r += this[e + o] * a;
		return a *= 128, r >= a && (r -= Wd(2, 8 * t)), r
	}, fe.prototype.readIntBE = function(e, t, n) {
		e |= 0, t |= 0, n || He(e, t, this.length);
		for (var r = t, a = 1, o = this[e + --r]; 0 < r && (a *= 256);) o += this[e + --r] * a;
		return a *= 128, o >= a && (o -= Wd(2, 8 * t)), o
	}, fe.prototype.readInt8 = function(e, t) {
		return t || He(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
	}, fe.prototype.readInt16LE = function(e, t) {
		t || He(e, 2, this.length);
		var n = this[e] | this[e + 1] << 8;
		return 32768 & n ? 4294901760 | n : n
	}, fe.prototype.readInt16BE = function(e, t) {
		t || He(e, 2, this.length);
		var n = this[e + 1] | this[e] << 8;
		return 32768 & n ? 4294901760 | n : n
	}, fe.prototype.readInt32LE = function(e, t) {
		return t || He(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
	}, fe.prototype.readInt32BE = function(e, t) {
		return t || He(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
	}, fe.prototype.readFloatLE = function(e, t) {
		return t || He(e, 4, this.length), pe(this, e, !0, 23, 4)
	}, fe.prototype.readFloatBE = function(e, t) {
		return t || He(e, 4, this.length), pe(this, e, !1, 23, 4)
	}, fe.prototype.readDoubleLE = function(e, t) {
		return t || He(e, 8, this.length), pe(this, e, !0, 52, 8)
	}, fe.prototype.readDoubleBE = function(e, t) {
		return t || He(e, 8, this.length), pe(this, e, !1, 52, 8)
	}, fe.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t |= 0, n |= 0, !r) {
			var a = Wd(2, 8 * n) - 1;
			Ye(this, e, t, n, a, 0)
		}
		var o = 1,
			s = 0;
		for (this[t] = 255 & e; ++s < n && (o *= 256);) this[t + s] = 255 & e / o;
		return t + n
	}, fe.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t |= 0, n |= 0, !r) {
			var a = Wd(2, 8 * n) - 1;
			Ye(this, e, t, n, a, 0)
		}
		var o = n - 1,
			i = 1;
		for (this[t + o] = 255 & e; 0 <= --o && (i *= 256);) this[t + o] = 255 & e / i;
		return t + n
	}, fe.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 1, 255, 0), fe.TYPED_ARRAY_SUPPORT || (e = Fd(e)), this[t] = 255 & e, t + 1
	}, fe.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 2, 65535, 0), fe.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : $e(this, e, t, !0), t + 2
	}, fe.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 2, 65535, 0), fe.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : $e(this, e, t, !1), t + 2
	}, fe.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 4, 4294967295, 0), fe.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : Ke(this, e, t, !0), t + 4
	}, fe.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 4, 4294967295, 0), fe.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Ke(this, e, t, !1), t + 4
	}, fe.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t |= 0, !r) {
			var a = Wd(2, 8 * n - 1);
			Ye(this, e, t, n, a - 1, -a)
		}
		var o = 0,
			i = 1,
			s = 0;
		for (this[t] = 255 & e; ++o < n && (i *= 256);) 0 > e && 0 == s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = 255 & (e / i >> 0) - s;
		return t + n
	}, fe.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t |= 0, !r) {
			var a = Wd(2, 8 * n - 1);
			Ye(this, e, t, n, a - 1, -a)
		}
		var o = n - 1,
			i = 1,
			s = 0;
		for (this[t + o] = 255 & e; 0 <= --o && (i *= 256);) 0 > e && 0 == s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = 255 & (e / i >> 0) - s;
		return t + n
	}, fe.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 1, 127, -128), fe.TYPED_ARRAY_SUPPORT || (e = Fd(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1
	}, fe.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 2, 32767, -32768), fe.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : $e(this, e, t, !0), t + 2
	}, fe.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 2, 32767, -32768), fe.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : $e(this, e, t, !1), t + 2
	}, fe.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 4, 2147483647, -2147483648), fe.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : Ke(this, e, t, !0), t + 4
	}, fe.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t |= 0, n || Ye(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), fe.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : Ke(this, e, t, !1), t + 4
	}, fe.prototype.writeFloatLE = function(e, t, n) {
		return Qe(this, e, t, !0, n)
	}, fe.prototype.writeFloatBE = function(e, t, n) {
		return Qe(this, e, t, !1, n)
	}, fe.prototype.writeDoubleLE = function(e, t, n) {
		return Ze(this, e, t, !0, n)
	}, fe.prototype.writeDoubleBE = function(e, t, n) {
		return Ze(this, e, t, !1, n)
	}, fe.prototype.copy = function(e, t, n, r) {
		if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), 0 < r && r < n && (r = n), r === n) return 0;
		if (0 === e.length || 0 === this.length) return 0;
		if (0 > t) throw new RangeError('targetStart out of bounds');
		if (0 > n || n >= this.length) throw new RangeError('sourceStart out of bounds');
		if (0 > r) throw new RangeError('sourceEnd out of bounds');
		r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
		var a = r - n,
			o;
		if (this === e && n < t && t < r)
			for (o = a - 1; 0 <= o; --o) e[o + t] = this[o + n];
		else if (1e3 > a || !fe.TYPED_ARRAY_SUPPORT)
			for (o = 0; o < a; ++o) e[o + t] = this[o + n];
		else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
		return a
	}, fe.prototype.fill = function(e, t, n, r) {
		if ('string' == typeof e) {
			if ('string' == typeof t ? (r = t, t = 0, n = this.length) : 'string' == typeof n && (r = n, n = this.length), 1 === e.length) {
				var a = e.charCodeAt(0);
				256 > a && (e = a)
			}
			if (void 0 !== r && 'string' != typeof r) throw new TypeError('encoding must be a string');
			if ('string' == typeof r && !fe.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r)
		} else 'number' == typeof e && (e &= 255);
		if (0 > t || this.length < t || this.length < n) throw new RangeError('Out of range index');
		if (n <= t) return this;
		t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
		var o;
		if ('number' == typeof e)
			for (o = t; o < n; ++o) this[o] = e;
		else {
			var i = Ee(e) ? e : nt(new fe(e, r).toString()),
				s = i.length;
			for (o = 0; o < n - t; ++o) this[o + t] = i[o % s]
		}
		return this
	};
	var bc = /[^+\/0-9A-Za-z-_]/g;
	ut.prototype.push = function(e) {
		var t = {
			data: e,
			next: null
		};
		0 < this.length ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
	}, ut.prototype.unshift = function(e) {
		var t = {
			data: e,
			next: this.head
		};
		0 === this.length && (this.tail = t), this.head = t, ++this.length
	}, ut.prototype.shift = function() {
		if (0 !== this.length) {
			var e = this.head.data;
			return this.head = 1 === this.length ? this.tail = null : this.head.next, --this.length, e
		}
	}, ut.prototype.clear = function() {
		this.head = this.tail = null, this.length = 0
	}, ut.prototype.join = function(e) {
		if (0 === this.length) return '';
		for (var t = this.head, n = '' + t.data; t = t.next;) n += e + t.data;
		return n
	}, ut.prototype.concat = function(e) {
		if (0 === this.length) return fe.alloc(0);
		if (1 === this.length) return this.head.data;
		for (var t = fe.allocUnsafe(e >>> 0), n = this.head, r = 0; n;) n.data.copy(t, r), r += n.data.length, n = n.next;
		return t
	};
	var xc = fe.isEncoding || function(e) {
		switch (e && e.toLowerCase()) {
			case 'hex':
			case 'utf8':
			case 'utf-8':
			case 'ascii':
			case 'binary':
			case 'base64':
			case 'ucs2':
			case 'ucs-2':
			case 'utf16le':
			case 'utf-16le':
			case 'raw':
				return !0;
			default:
				return !1;
		}
	};
	ht.prototype.write = function(e) {
		for (var t = '', n; this.charLength;) {
			if (n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length, e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return '';
			e = e.slice(n, e.length), t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
			var r = t.charCodeAt(t.length - 1);
			if (55296 <= r && 56319 >= r) {
				this.charLength += this.surrogateSize, t = '';
				continue
			}
			if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
			break
		}
		this.detectIncompleteChar(e);
		var a = e.length;
		this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, a), a -= this.charReceived), t += e.toString(this.encoding, 0, a);
		var a = t.length - 1,
			r = t.charCodeAt(a);
		if (55296 <= r && 56319 >= r) {
			var o = this.surrogateSize;
			return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, a)
		}
		return t
	}, ht.prototype.detectIncompleteChar = function(e) {
		for (var t = 3 <= e.length ? 3 : e.length, n; 0 < t; t--) {
			if (n = e[e.length - t], 1 == t && 6 == n >> 5) {
				this.charLength = 2;
				break
			}
			if (2 >= t && 14 == n >> 4) {
				this.charLength = 3;
				break
			}
			if (3 >= t && 30 == n >> 3) {
				this.charLength = 4;
				break
			}
		}
		this.charReceived = t
	}, ht.prototype.end = function(e) {
		var t = '';
		if (e && e.length && (t = this.write(e)), this.charReceived) {
			var n = this.charReceived,
				r = this.charBuffer,
				a = this.encoding;
			t += r.slice(0, n).toString(a)
		}
		return t
	};
	var kc = Object.freeze({
		StringDecoder: ht
	});
	'use strict', wt.ReadableState = St;
	var wc = function(e) {
		if ($(cc) && (cc = nc.env.NODE_DEBUG || ''), e = e.toUpperCase(), !dc[e])
			if (new RegExp('\\b' + e + '\\b', 'i').test(cc)) {
				dc[e] = function() {
					var t = O.apply(null, arguments);
					console.error('%s %d: %s', e, 0, t)
				}
			} else dc[e] = function() {};
		return dc[e]
	}('stream');
	oc(wt, n), wt.prototype.push = function(e, t) {
		var n = this._readableState;
		return n.objectMode || 'string' != typeof e || (t = t || n.defaultEncoding, t !== n.encoding && (e = Buffer.from(e, t), t = '')), vt(this, n, e, t, !1)
	}, wt.prototype.unshift = function(e) {
		var t = this._readableState;
		return vt(this, t, e, '', !0)
	}, wt.prototype.isPaused = function() {
		return !1 === this._readableState.flowing
	}, wt.prototype.setEncoding = function(e) {
		return this._readableState.decoder = new ht(e), this._readableState.encoding = e, this
	};
	var vc = 8388608;
	wt.prototype.read = function(e) {
		wc('read', e), e = parseInt(e, 10);
		var t = this._readableState,
			n = e;
		if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return wc('read: emitReadable', t.length, t.ended), 0 === t.length && t.ended ? Ft(this) : Pt(this), null;
		if (e = Et(e, t), 0 === e && t.ended) return 0 === t.length && Ft(this), null;
		var r = t.needReadable;
		wc('need readable', r), (0 === t.length || t.length - e < t.highWaterMark) && (r = !0, wc('length less than watermark', r)), t.ended || t.reading ? (r = !1, wc('reading or ended', r)) : r && (wc('do read'), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, !t.reading && (e = Et(n, t)));
		var a;
		return a = 0 < e ? Mt(e, t) : null, null === a ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (!t.ended && (t.needReadable = !0), n !== e && t.ended && Ft(this)), null !== a && this.emit('data', a), a
	}, wt.prototype._read = function() {
		this.emit('error', new Error('not implemented'))
	}, wt.prototype.pipe = function(e, t) {
		function n(e) {
			wc('onunpipe'), e === c && a()
		}

		function r() {
			wc('onend'), e.end()
		}

		function a() {
			wc('cleanup'), e.removeListener('close', s), e.removeListener('finish', l), e.removeListener('drain', g), e.removeListener('error', i), e.removeListener('unpipe', n), c.removeListener('end', r), c.removeListener('end', a), c.removeListener('data', o), h = !0, p.awaitDrain && (!e._writableState || e._writableState.needDrain) && g()
		}

		function o(t) {
			wc('ondata'), f = !1;
			var n = e.write(t);
			!1 !== n || f || ((1 === p.pipesCount && p.pipes === e || 1 < p.pipesCount && -1 !== Yt(p.pipes, e)) && !h && (wc('false write response, pause', c._readableState.awaitDrain), c._readableState.awaitDrain++, f = !0), c.pause())
		}

		function i(t) {
			wc('onerror', t), d(), e.removeListener('error', i), 0 === kt(e, 'error') && e.emit('error', t)
		}

		function s() {
			e.removeListener('finish', l), d()
		}

		function l() {
			wc('onfinish'), e.removeListener('close', s), d()
		}

		function d() {
			wc('unpipe'), c.unpipe(e)
		}
		var c = this,
			p = this._readableState;
		switch (p.pipesCount) {
			case 0:
				p.pipes = e;
				break;
			case 1:
				p.pipes = [p.pipes, e];
				break;
			default:
				p.pipes.push(e);
		}
		p.pipesCount += 1, wc('pipe count=%d opts=%j', p.pipesCount, t);
		var u = !t || !1 !== t.end,
			m = u ? r : a;
		p.endEmitted ? C(m) : c.once('end', m), e.on('unpipe', n);
		var g = Nt(c);
		e.on('drain', g);
		var h = !1,
			f = !1;
		return c.on('data', o), xt(e, 'error', i), e.once('close', s), e.once('finish', l), e.emit('pipe', c), p.flowing || (wc('pipe resume'), c.resume()), e
	}, wt.prototype.unpipe = function(e) {
		var t = this._readableState;
		if (0 === t.pipesCount) return this;
		if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit('unpipe', this), this);
		if (!e) {
			var n = t.pipes,
				r = t.pipesCount;
			t.pipes = null, t.pipesCount = 0, t.flowing = !1;
			for (var a = 0; a < r; a++) n[a].emit('unpipe', this);
			return this
		}
		var o = Yt(t.pipes, e);
		return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this), this)
	}, wt.prototype.on = function(e, t) {
		var r = n.prototype.on.call(this, e, t);
		if ('data' === e) !1 !== this._readableState.flowing && this.resume();
		else if ('readable' === e) {
			var a = this._readableState;
			a.endEmitted || a.readableListening || (a.readableListening = a.needReadable = !0, a.emittedReadable = !1, a.reading ? a.length && Pt(this, a) : C(Bt, this))
		}
		return r
	}, wt.prototype.addListener = wt.prototype.on, wt.prototype.resume = function() {
		var e = this._readableState;
		return e.flowing || (wc('resume'), e.flowing = !0, It(this, e)), this
	}, wt.prototype.pause = function() {
		return wc('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (wc('pause'), this._readableState.flowing = !1, this.emit('pause')), this
	}, wt.prototype.wrap = function(e) {
		var t = this._readableState,
			r = !1,
			n = this;
		for (var a in e.on('end', function() {
				if (wc('wrapped end'), t.decoder && !t.ended) {
					var e = t.decoder.end();
					e && e.length && n.push(e)
				}
				n.push(null)
			}), e.on('data', function(a) {
				if ((wc('wrapped data'), t.decoder && (a = t.decoder.write(a)), !(t.objectMode && (null === a || void 0 === a))) && (t.objectMode || a && a.length)) {
					var o = n.push(a);
					o || (r = !0, e.pause())
				}
			}), e) void 0 === this[a] && 'function' == typeof e[a] && (this[a] = function(t) {
			return function() {
				return e[t].apply(e, arguments)
			}
		}(a));
		return Ht(['error', 'close', 'destroy', 'pause', 'resume'], function(t) {
			e.on(t, n.emit.bind(n, t))
		}), n._read = function(t) {
			wc('wrapped _read', t), r && (r = !1, e.resume())
		}, n
	}, wt._fromList = Mt, Qt.WritableState = Xt, oc(Qt, n), Xt.prototype.getBuffer = function() {
		for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
		return t
	}, Qt.prototype.pipe = function() {
		this.emit('error', new Error('Cannot pipe, not readable'))
	}, Qt.prototype.write = function(e, t, n) {
		var r = this._writableState,
			a = !1;
		return 'function' == typeof t && (n = t, t = null), fe.isBuffer(e) ? t = 'buffer' : !t && (t = r.defaultEncoding), 'function' != typeof n && (n = $t), r.ended ? Zt(this, n) : Jt(this, r, e, n) && (r.pendingcb++, a = tn(this, r, e, t, n)), a
	}, Qt.prototype.cork = function() {
		var e = this._writableState;
		e.corked++
	}, Qt.prototype.uncork = function() {
		var e = this._writableState;
		e.corked && (e.corked--, !e.writing && !e.corked && !e.finished && !e.bufferProcessing && e.bufferedRequest && dn(this, e))
	}, Qt.prototype.setDefaultEncoding = function(e) {
		if ('string' == typeof e && (e = e.toLowerCase()), !(-1 < ['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((e + '').toLowerCase()))) throw new TypeError('Unknown encoding: ' + e);
		return this._writableState.defaultEncoding = e, this
	}, Qt.prototype._write = function(e, t, n) {
		n(new Error('not implemented'))
	}, Qt.prototype._writev = null, Qt.prototype.end = function(e, t, n) {
		var r = this._writableState;
		'function' == typeof e ? (n = e, e = null, t = null) : 'function' == typeof t && (n = t, t = null), null !== e && void 0 !== e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || mn(this, r, n)
	}, oc(hn, wt);
	for (var Tc = Object.keys(Qt.prototype), Cc = 0, v; Cc < Tc.length; Cc++) v = Tc[Cc], hn.prototype[v] || (hn.prototype[v] = Qt.prototype[v]);
	oc(kn, hn), kn.prototype.push = function(e, t) {
		return this._transformState.needTransform = !1, hn.prototype.push.call(this, e, t)
	}, kn.prototype._transform = function() {
		throw new Error('Not implemented')
	}, kn.prototype._write = function(e, t, n) {
		var r = this._transformState;
		if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
			var a = this._readableState;
			(r.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
		}
	}, kn.prototype._read = function() {
		var e = this._transformState;
		null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0
	}, oc(wn, kn), wn.prototype._transform = function(e, t, n) {
		n(null, e)
	}, oc(vn, n), vn.Readable = wt, vn.Writable = Qt, vn.Duplex = hn, vn.Transform = kn, vn.PassThrough = wn, vn.Stream = vn, vn.prototype.pipe = function(e, t) {
		function r(t) {
			e.writable && !1 === e.write(t) && d.pause && d.pause()
		}

		function a() {
			d.readable && d.resume && d.resume()
		}

		function o() {
			c || (c = !0, e.end())
		}

		function i() {
			c || (c = !0, 'function' == typeof e.destroy && e.destroy())
		}

		function s(e) {
			if (l(), 0 === n.listenerCount(this, 'error')) throw e
		}

		function l() {
			d.removeListener('data', r), e.removeListener('drain', a), d.removeListener('end', o), d.removeListener('close', i), d.removeListener('error', s), e.removeListener('error', s), d.removeListener('end', l), d.removeListener('close', l), e.removeListener('close', l)
		}
		var d = this;
		d.on('data', r), e.on('drain', a), e._isStdio || t && !1 === t.end || (d.on('end', o), d.on('close', i));
		var c = !1;
		return d.on('error', s), e.on('error', s), d.on('end', l), d.on('close', l), e.on('close', l), e.emit('pipe', d), e
	};
	var Ec = Object.freeze({
			default: vn,
			Readable: wt,
			Writable: Qt,
			Duplex: hn,
			Transform: kn,
			PassThrough: wn,
			Stream: vn
		}),
		Ac = e(function(e, t) {
			(function(t) {
				function e(n, a) {
					if (!(this instanceof e)) return new e(n, a);
					var o = this;
					r(o), o.q = o.c = '', o.bufferCheckPosition = t.MAX_BUFFER_LENGTH, o.opt = a || {}, o.opt.lowercase = o.opt.lowercase || o.opt.lowercasetags, o.looseCase = o.opt.lowercase ? 'toLowerCase' : 'toUpperCase', o.tags = [], o.closed = o.closedRoot = o.sawRoot = !1, o.tag = o.error = null, o.strict = !!n, o.noscript = !!(n || o.opt.noscript), o.state = U.BEGIN, o.strictEntities = o.opt.strictEntities, o.ENTITIES = o.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), o.attribList = [], o.opt.xmlns && (o.ns = Object.create(I)), o.trackPosition = !1 !== o.opt.position, o.trackPosition && (o.position = o.line = o.column = 0), i(o, 'onready')
				}

				function n(e) {
					for (var n = Md(t.MAX_BUFFER_LENGTH, 10), r = 0, a = 0, o = P.length, i; a < o; a++) {
						if (i = e[P[a]].length, i > n) switch (P[a]) {
							case 'textNode':
								c(e);
								break;
							case 'cdata':
								g(e, 'oncdata', e.cdata), e.cdata = '';
								break;
							case 'script':
								g(e, 'onscript', e.script), e.script = '';
								break;
							default:
								f(e, 'Max buffer length exceeded: ' + P[a]);
						}
						r = Md(r, i)
					}
					var s = t.MAX_BUFFER_LENGTH - r;
					e.bufferCheckPosition = s + e.position
				}

				function r(e) {
					for (var t = 0, n = P.length; t < n; t++) e[P[t]] = ''
				}

				function a(e) {
					c(e), '' !== e.cdata && (g(e, 'oncdata', e.cdata), e.cdata = ''), '' !== e.script && (g(e, 'onscript', e.script), e.script = '')
				}

				function o(t, n) {
					if (!(this instanceof o)) return new o(t, n);
					L.apply(this), this._parser = new e(t, n), this.writable = !0, this.readable = !0;
					var r = this;
					this._parser.onend = function() {
						r.emit('end')
					}, this._parser.onerror = function(e) {
						r.emit('error', e), r._parser.error = null
					}, this._decoder = null, q.forEach(function(e) {
						Object.defineProperty(r, 'on' + e, {
							get: function() {
								return r._parser['on' + e]
							},
							set: function(t) {
								return t ? void r.on(e, t) : (r.removeAllListeners(e), r._parser['on' + e] = t, t)
							},
							enumerable: !0,
							configurable: !1
						})
					})
				}

				function l(e) {
					return ' ' === e || '\n' === e || '\r' === e || '\t' === e
				}

				function d(e) {
					return '"' === e || '\'' === e
				}

				function p(e) {
					return '>' === e || l(e)
				}

				function u(e, t) {
					return e.test(t)
				}

				function m(e, t) {
					return !u(e, t)
				}

				function i(e, t, n) {
					e[t] && e[t](n)
				}

				function g(e, t, n) {
					e.textNode && c(e), i(e, t, n)
				}

				function c(e) {
					e.textNode = h(e.opt, e.textNode), e.textNode && i(e, 'ontext', e.textNode), e.textNode = ''
				}

				function h(e, t) {
					return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, ' ')), t
				}

				function f(e, t) {
					return c(e), e.trackPosition && (t += '\nLine: ' + e.line + '\nColumn: ' + e.column + '\nChar: ' + e.c), t = new Error(t), e.error = t, i(e, 'onerror', t), e
				}

				function y(t) {
					return t.sawRoot && !t.closedRoot && b(t, 'Unclosed root tag'), t.state !== U.BEGIN && t.state !== U.BEGIN_WHITESPACE && t.state !== U.TEXT && f(t, 'Unexpected end'), c(t), t.c = '', t.closed = !0, i(t, 'onend'), e.call(t, t.strict, t.opt), t
				}

				function b(t, n) {
					if ('object' != typeof t || !(t instanceof e)) throw new Error('bad call to strictFail');
					t.strict && f(t, n)
				}

				function x(e) {
					e.strict || (e.tagName = e.tagName[e.looseCase]());
					var t = e.tags[e.tags.length - 1] || e,
						n = e.tag = {
							name: e.tagName,
							attributes: {}
						};
					e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, g(e, 'onopentagstart', n)
				}

				function k(e, t) {
					var n = e.indexOf(':'),
						r = 0 > n ? ['', e] : e.split(':'),
						a = r[0],
						o = r[1];
					return t && 'xmlns' === e && (a = 'xmlns', o = ''), {
						prefix: a,
						local: o
					}
				}

				function w(e) {
					if (e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName)) return void(e.attribName = e.attribValue = '');
					if (e.opt.xmlns) {
						var t = k(e.attribName, !0),
							n = t.prefix,
							r = t.local;
						if ('xmlns' === n)
							if ('xml' === r && e.attribValue !== N) b(e, 'xml: prefix must be bound to ' + N + '\nActual: ' + e.attribValue);
							else if ('xmlns' === r && e.attribValue !== B) b(e, 'xmlns: prefix must be bound to ' + B + '\nActual: ' + e.attribValue);
						else {
							var a = e.tag,
								o = e.tags[e.tags.length - 1] || e;
							a.ns === o.ns && (a.ns = Object.create(o.ns)), a.ns[r] = e.attribValue
						}
						e.attribList.push([e.attribName, e.attribValue])
					} else e.tag.attributes[e.attribName] = e.attribValue, g(e, 'onattribute', {
						name: e.attribName,
						value: e.attribValue
					});
					e.attribName = e.attribValue = ''
				}

				function v(e, t) {
					if (e.opt.xmlns) {
						var n = e.tag,
							r = k(e.tagName);
						n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || '', n.prefix && !n.uri && (b(e, 'Unbound namespace prefix: ' + JSON.stringify(e.tagName)), n.uri = r.prefix);
						var o = e.tags[e.tags.length - 1] || e;
						n.ns && o.ns !== n.ns && Object.keys(n.ns).forEach(function(t) {
							g(e, 'onopennamespace', {
								prefix: t,
								uri: n.ns[t]
							})
						});
						for (var s = 0, i = e.attribList.length; s < i; s++) {
							var l = e.attribList[s],
								d = l[0],
								c = l[1],
								p = k(d, !0),
								u = p.prefix,
								m = p.local,
								h = '' === u ? '' : n.ns[u] || '',
								f = {
									name: d,
									value: c,
									prefix: u,
									local: m,
									uri: h
								};
							u && 'xmlns' !== u && !h && (b(e, 'Unbound namespace prefix: ' + JSON.stringify(u)), f.uri = u), e.tag.attributes[d] = f, g(e, 'onattribute', f)
						}
						e.attribList.length = 0
					}
					e.tag.isSelfClosing = !!t, e.sawRoot = !0, e.tags.push(e.tag), g(e, 'onopentag', e.tag), t || (e.state = e.noscript || 'script' !== e.tagName.toLowerCase() ? U.TEXT : U.SCRIPT, e.tag = null, e.tagName = ''), e.attribName = e.attribValue = '', e.attribList.length = 0
				}

				function T(e) {
					if (!e.tagName) return b(e, 'Weird empty close tag.'), e.textNode += '</>', void(e.state = U.TEXT);
					if (e.script) {
						if ('script' !== e.tagName) return e.script += '</' + e.tagName + '>', e.tagName = '', void(e.state = U.SCRIPT);
						g(e, 'onscript', e.script), e.script = ''
					}
					var n = e.tags.length,
						t = e.tagName;
					e.strict || (t = t[e.looseCase]());
					for (var r = t, a; n-- && (a = e.tags[n], a.name !== r);) b(e, 'Unexpected close tag');
					if (0 > n) return b(e, 'Unmatched closing tag: ' + e.tagName), e.textNode += '</' + e.tagName + '>', void(e.state = U.TEXT);
					e.tagName = t;
					for (var o = e.tags.length, i; o-- > n;) {
						i = e.tag = e.tags.pop(), e.tagName = e.tag.name, g(e, 'onclosetag', e.tagName);
						var s = e.tags[e.tags.length - 1] || e;
						e.opt.xmlns && i.ns !== s.ns && Object.keys(i.ns).forEach(function(t) {
							var r = i.ns[t];
							g(e, 'onclosenamespace', {
								prefix: t,
								uri: r
							})
						})
					}
					0 === n && (e.closedRoot = !0), e.tagName = e.attribValue = e.attribName = '', e.attribList.length = 0, e.state = U.TEXT
				}

				function C(e) {
					var t = e.entity,
						n = t.toLowerCase(),
						r = '',
						a;
					return e.ENTITIES[t] ? e.ENTITIES[t] : e.ENTITIES[n] ? e.ENTITIES[n] : (t = n, '#' === t.charAt(0) && ('x' === t.charAt(1) ? (t = t.slice(2), a = parseInt(t, 16), r = a.toString(16)) : (t = t.slice(1), a = parseInt(t, 10), r = a.toString(10))), t = t.replace(/^0+/, ''), isNaN(a) || r.toLowerCase() !== t ? (b(e, 'Invalid character entity'), '&' + e.entity + ';') : O(a))
				}

				function E(e, t) {
					'<' === t ? (e.state = U.OPEN_WAKA, e.startTagPosition = e.position) : !l(t) && (b(e, 'Non-whitespace before first tag.'), e.textNode = t, e.state = U.TEXT)
				}

				function A(e, t) {
					var n = '';
					return t < e.length && (n = e.charAt(t)), n
				}
				var O = String.fromCodePoint;
				t.parser = function(t, n) {
					return new e(t, n)
				}, t.SAXParser = e, t.SAXStream = o, t.createStream = function(e, t) {
					return new o(e, t)
				}, t.MAX_BUFFER_LENGTH = 65536;
				var P = ['comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype', 'procInstName', 'procInstBody', 'entity', 'attribName', 'attribValue', 'cdata', 'script'];
				t.EVENTS = ['text', 'processinginstruction', 'sgmldeclaration', 'doctype', 'comment', 'opentagstart', 'attribute', 'opentag', 'closetag', 'opencdata', 'cdata', 'closecdata', 'error', 'end', 'ready', 'script', 'opennamespace', 'closenamespace'], Object.create || (Object.create = function(e) {
					function t() {}
					t.prototype = e;
					var n = new t;
					return n
				}), Object.keys || (Object.keys = function(e) {
					var t = [];
					for (var n in e) e.hasOwnProperty(n) && t.push(n);
					return t
				}), e.prototype = {
					end: function() {
						y(this)
					},
					write: function(e) {
						var t = this;
						if (this.error) throw this.error;
						if (t.closed) return f(t, 'Cannot write after close. Assign an onready handler.');
						if (null === e) return y(t);
						'object' == typeof e && (e = e.toString());
						for (var r = 0, a = ''; a = A(e, r++), t.c = a, !!a;) switch (t.trackPosition && (t.position++, '\n' === a ? (t.line++, t.column = 0) : t.column++), t.state) {
							case U.BEGIN:
								if (t.state = U.BEGIN_WHITESPACE, '\uFEFF' === a) continue;
								E(t, a);
								continue;
							case U.BEGIN_WHITESPACE:
								E(t, a);
								continue;
							case U.TEXT:
								if (t.sawRoot && !t.closedRoot) {
									for (var o = r - 1; a && '<' !== a && '&' !== a;) a = A(e, r++), a && t.trackPosition && (t.position++, '\n' === a ? (t.line++, t.column = 0) : t.column++);
									t.textNode += e.substring(o, r - 1)
								}
								'<' !== a || t.sawRoot && t.closedRoot && !t.strict ? (!l(a) && (!t.sawRoot || t.closedRoot) && b(t, 'Text data outside of root node.'), '&' === a ? t.state = U.TEXT_ENTITY : t.textNode += a) : (t.state = U.OPEN_WAKA, t.startTagPosition = t.position);
								continue;
							case U.SCRIPT:
								'<' === a ? t.state = U.SCRIPT_ENDING : t.script += a;
								continue;
							case U.SCRIPT_ENDING:
								'/' === a ? t.state = U.CLOSE_TAG : (t.script += '<' + a, t.state = U.SCRIPT);
								continue;
							case U.OPEN_WAKA:
								if ('!' === a) t.state = U.SGML_DECL, t.sgmlDecl = '';
								else if (l(a));
								else if (u(z, a)) t.state = U.OPEN_TAG, t.tagName = a;
								else if ('/' === a) t.state = U.CLOSE_TAG, t.tagName = '';
								else if ('?' === a) t.state = U.PROC_INST, t.procInstName = t.procInstBody = '';
								else {
									if (b(t, 'Unencoded <'), t.startTagPosition + 1 < t.position) {
										var i = t.position - t.startTagPosition;
										a = Array(i).join(' ') + a
									}
									t.textNode += '<' + a, t.state = U.TEXT
								}
								continue;
							case U.SGML_DECL:
								(t.sgmlDecl + a).toUpperCase() === R ? (g(t, 'onopencdata'), t.state = U.CDATA, t.sgmlDecl = '', t.cdata = '') : '--' === t.sgmlDecl + a ? (t.state = U.COMMENT, t.comment = '', t.sgmlDecl = '') : (t.sgmlDecl + a).toUpperCase() === D ? (t.state = U.DOCTYPE, (t.doctype || t.sawRoot) && b(t, 'Inappropriately located doctype declaration'), t.doctype = '', t.sgmlDecl = '') : '>' === a ? (g(t, 'onsgmldeclaration', t.sgmlDecl), t.sgmlDecl = '', t.state = U.TEXT) : d(a) ? (t.state = U.SGML_DECL_QUOTED, t.sgmlDecl += a) : t.sgmlDecl += a;
								continue;
							case U.SGML_DECL_QUOTED:
								a === t.q && (t.state = U.SGML_DECL, t.q = ''), t.sgmlDecl += a;
								continue;
							case U.DOCTYPE:
								'>' === a ? (t.state = U.TEXT, g(t, 'ondoctype', t.doctype), t.doctype = !0) : (t.doctype += a, '[' === a ? t.state = U.DOCTYPE_DTD : d(a) && (t.state = U.DOCTYPE_QUOTED, t.q = a));
								continue;
							case U.DOCTYPE_QUOTED:
								t.doctype += a, a === t.q && (t.q = '', t.state = U.DOCTYPE);
								continue;
							case U.DOCTYPE_DTD:
								t.doctype += a, ']' === a ? t.state = U.DOCTYPE : d(a) && (t.state = U.DOCTYPE_DTD_QUOTED, t.q = a);
								continue;
							case U.DOCTYPE_DTD_QUOTED:
								t.doctype += a, a === t.q && (t.state = U.DOCTYPE_DTD, t.q = '');
								continue;
							case U.COMMENT:
								'-' === a ? t.state = U.COMMENT_ENDING : t.comment += a;
								continue;
							case U.COMMENT_ENDING:
								'-' === a ? (t.state = U.COMMENT_ENDED, t.comment = h(t.opt, t.comment), t.comment && g(t, 'oncomment', t.comment), t.comment = '') : (t.comment += '-' + a, t.state = U.COMMENT);
								continue;
							case U.COMMENT_ENDED:
								'>' === a ? t.state = U.TEXT : (b(t, 'Malformed comment'), t.comment += '--' + a, t.state = U.COMMENT);
								continue;
							case U.CDATA:
								']' === a ? t.state = U.CDATA_ENDING : t.cdata += a;
								continue;
							case U.CDATA_ENDING:
								']' === a ? t.state = U.CDATA_ENDING_2 : (t.cdata += ']' + a, t.state = U.CDATA);
								continue;
							case U.CDATA_ENDING_2:
								'>' === a ? (t.cdata && g(t, 'oncdata', t.cdata), g(t, 'onclosecdata'), t.cdata = '', t.state = U.TEXT) : ']' === a ? t.cdata += ']' : (t.cdata += ']]' + a, t.state = U.CDATA);
								continue;
							case U.PROC_INST:
								'?' === a ? t.state = U.PROC_INST_ENDING : l(a) ? t.state = U.PROC_INST_BODY : t.procInstName += a;
								continue;
							case U.PROC_INST_BODY:
								if (!t.procInstBody && l(a)) continue;
								else '?' === a ? t.state = U.PROC_INST_ENDING : t.procInstBody += a;
								continue;
							case U.PROC_INST_ENDING:
								'>' === a ? (g(t, 'onprocessinginstruction', {
									name: t.procInstName,
									body: t.procInstBody
								}), t.procInstName = t.procInstBody = '', t.state = U.TEXT) : (t.procInstBody += '?' + a, t.state = U.PROC_INST_BODY);
								continue;
							case U.OPEN_TAG:
								u(_, a) ? t.tagName += a : (x(t), '>' === a ? v(t) : '/' === a ? t.state = U.OPEN_TAG_SLASH : (!l(a) && b(t, 'Invalid character in tag name'), t.state = U.ATTRIB));
								continue;
							case U.OPEN_TAG_SLASH:
								'>' === a ? (v(t, !0), T(t)) : (b(t, 'Forward-slash in opening tag not followed by >'), t.state = U.ATTRIB);
								continue;
							case U.ATTRIB:
								if (l(a)) continue;
								else '>' === a ? v(t) : '/' === a ? t.state = U.OPEN_TAG_SLASH : u(z, a) ? (t.attribName = a, t.attribValue = '', t.state = U.ATTRIB_NAME) : b(t, 'Invalid attribute name');
								continue;
							case U.ATTRIB_NAME:
								'=' === a ? t.state = U.ATTRIB_VALUE : '>' === a ? (b(t, 'Attribute without value'), t.attribValue = t.attribName, w(t), v(t)) : l(a) ? t.state = U.ATTRIB_NAME_SAW_WHITE : u(_, a) ? t.attribName += a : b(t, 'Invalid attribute name');
								continue;
							case U.ATTRIB_NAME_SAW_WHITE:
								if ('=' === a) t.state = U.ATTRIB_VALUE;
								else if (l(a)) continue;
								else b(t, 'Attribute without value'), t.tag.attributes[t.attribName] = '', t.attribValue = '', g(t, 'onattribute', {
									name: t.attribName,
									value: ''
								}), t.attribName = '', '>' === a ? v(t) : u(z, a) ? (t.attribName = a, t.state = U.ATTRIB_NAME) : (b(t, 'Invalid attribute name'), t.state = U.ATTRIB);
								continue;
							case U.ATTRIB_VALUE:
								if (l(a)) continue;
								else d(a) ? (t.q = a, t.state = U.ATTRIB_VALUE_QUOTED) : (b(t, 'Unquoted attribute value'), t.state = U.ATTRIB_VALUE_UNQUOTED, t.attribValue = a);
								continue;
							case U.ATTRIB_VALUE_QUOTED:
								if (a !== t.q) {
									'&' === a ? t.state = U.ATTRIB_VALUE_ENTITY_Q : t.attribValue += a;
									continue
								}
								w(t), t.q = '', t.state = U.ATTRIB_VALUE_CLOSED;
								continue;
							case U.ATTRIB_VALUE_CLOSED:
								l(a) ? t.state = U.ATTRIB : '>' === a ? v(t) : '/' === a ? t.state = U.OPEN_TAG_SLASH : u(z, a) ? (b(t, 'No whitespace between attributes'), t.attribName = a, t.attribValue = '', t.state = U.ATTRIB_NAME) : b(t, 'Invalid attribute name');
								continue;
							case U.ATTRIB_VALUE_UNQUOTED:
								if (!p(a)) {
									'&' === a ? t.state = U.ATTRIB_VALUE_ENTITY_U : t.attribValue += a;
									continue
								}
								w(t), '>' === a ? v(t) : t.state = U.ATTRIB;
								continue;
							case U.CLOSE_TAG:
								if (!!t.tagName) '>' === a ? T(t) : u(_, a) ? t.tagName += a : t.script ? (t.script += '</' + t.tagName, t.tagName = '', t.state = U.SCRIPT) : (l(a) || b(t, 'Invalid tagname in closing tag'), t.state = U.CLOSE_TAG_SAW_WHITE);
								else if (l(a)) continue;
								else m(z, a) ? t.script ? (t.script += '</' + a, t.state = U.SCRIPT) : b(t, 'Invalid tagname in closing tag.') : t.tagName = a;
								continue;
							case U.CLOSE_TAG_SAW_WHITE:
								if (l(a)) continue;
								'>' === a ? T(t) : b(t, 'Invalid characters in closing tag');
								continue;
							case U.TEXT_ENTITY:
							case U.ATTRIB_VALUE_ENTITY_Q:
							case U.ATTRIB_VALUE_ENTITY_U:
								var s, k;
								switch (t.state) {
									case U.TEXT_ENTITY:
										s = U.TEXT, k = 'textNode';
										break;
									case U.ATTRIB_VALUE_ENTITY_Q:
										s = U.ATTRIB_VALUE_QUOTED, k = 'attribValue';
										break;
									case U.ATTRIB_VALUE_ENTITY_U:
										s = U.ATTRIB_VALUE_UNQUOTED, k = 'attribValue';
								}
								';' === a ? (t[k] += C(t), t.entity = '', t.state = s) : u(t.entity.length ? G : M, a) ? t.entity += a : (b(t, 'Invalid character in entity name'), t[k] += '&' + t.entity + a, t.entity = '', t.state = s);
								continue;
							default:
								throw new Error(t, 'Unknown state: ' + t.state);
						}
						return t.position >= t.bufferCheckPosition && n(t), t
					},
					resume: function() {
						return this.error = null, this
					},
					close: function() {
						return this.write(null)
					},
					flush: function() {
						a(this)
					}
				};
				var L;
				try {
					L = (Ec && vn || Ec).Stream
				} catch (e) {
					L = function() {}
				}
				var q = t.EVENTS.filter(function(e) {
					return 'error' !== e && 'end' !== e
				});
				o.prototype = Object.create(L.prototype, {
					constructor: {
						value: o
					}
				}), o.prototype.write = function(e) {
					if ('function' == typeof Buffer && 'function' == typeof Buffer.isBuffer && Buffer.isBuffer(e)) {
						if (!this._decoder) {
							var t = kc.StringDecoder;
							this._decoder = new t('utf8')
						}
						e = this._decoder.write(e)
					}
					return this._parser.write(e.toString()), this.emit('data', e), !0
				}, o.prototype.end = function(e) {
					return e && e.length && this.write(e), this._parser.end(), !0
				}, o.prototype.on = function(e, t) {
					var n = this;
					return n._parser['on' + e] || -1 === q.indexOf(e) || (n._parser['on' + e] = function() {
						var t = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
						t.splice(0, 0, e), n.emit.apply(n, t)
					}), L.prototype.on.call(n, e, t)
				};
				var R = '[CDATA[',
					D = 'DOCTYPE',
					N = 'http://www.w3.org/XML/1998/namespace',
					B = 'http://www.w3.org/2000/xmlns/',
					I = {
						xml: N,
						xmlns: B
					},
					z = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
					_ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
					M = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
					G = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
					U = 0;
				for (var S in t.STATE = {
						BEGIN: U++,
						BEGIN_WHITESPACE: U++,
						TEXT: U++,
						TEXT_ENTITY: U++,
						OPEN_WAKA: U++,
						SGML_DECL: U++,
						SGML_DECL_QUOTED: U++,
						DOCTYPE: U++,
						DOCTYPE_QUOTED: U++,
						DOCTYPE_DTD: U++,
						DOCTYPE_DTD_QUOTED: U++,
						COMMENT_STARTING: U++,
						COMMENT: U++,
						COMMENT_ENDING: U++,
						COMMENT_ENDED: U++,
						CDATA: U++,
						CDATA_ENDING: U++,
						CDATA_ENDING_2: U++,
						PROC_INST: U++,
						PROC_INST_BODY: U++,
						PROC_INST_ENDING: U++,
						OPEN_TAG: U++,
						OPEN_TAG_SLASH: U++,
						ATTRIB: U++,
						ATTRIB_NAME: U++,
						ATTRIB_NAME_SAW_WHITE: U++,
						ATTRIB_VALUE: U++,
						ATTRIB_VALUE_QUOTED: U++,
						ATTRIB_VALUE_CLOSED: U++,
						ATTRIB_VALUE_UNQUOTED: U++,
						ATTRIB_VALUE_ENTITY_Q: U++,
						ATTRIB_VALUE_ENTITY_U: U++,
						CLOSE_TAG: U++,
						CLOSE_TAG_SAW_WHITE: U++,
						SCRIPT: U++,
						SCRIPT_ENDING: U++
					}, t.XML_ENTITIES = {
						amp: '&',
						gt: '>',
						lt: '<',
						quot: '"',
						apos: '\''
					}, t.ENTITIES = {
						amp: '&',
						gt: '>',
						lt: '<',
						quot: '"',
						apos: '\'',
						AElig: 198,
						Aacute: 193,
						Acirc: 194,
						Agrave: 192,
						Aring: 197,
						Atilde: 195,
						Auml: 196,
						Ccedil: 199,
						ETH: 208,
						Eacute: 201,
						Ecirc: 202,
						Egrave: 200,
						Euml: 203,
						Iacute: 205,
						Icirc: 206,
						Igrave: 204,
						Iuml: 207,
						Ntilde: 209,
						Oacute: 211,
						Ocirc: 212,
						Ograve: 210,
						Oslash: 216,
						Otilde: 213,
						Ouml: 214,
						THORN: 222,
						Uacute: 218,
						Ucirc: 219,
						Ugrave: 217,
						Uuml: 220,
						Yacute: 221,
						aacute: 225,
						acirc: 226,
						aelig: 230,
						agrave: 224,
						aring: 229,
						atilde: 227,
						auml: 228,
						ccedil: 231,
						eacute: 233,
						ecirc: 234,
						egrave: 232,
						eth: 240,
						euml: 235,
						iacute: 237,
						icirc: 238,
						igrave: 236,
						iuml: 239,
						ntilde: 241,
						oacute: 243,
						ocirc: 244,
						ograve: 242,
						oslash: 248,
						otilde: 245,
						ouml: 246,
						szlig: 223,
						thorn: 254,
						uacute: 250,
						ucirc: 251,
						ugrave: 249,
						uuml: 252,
						yacute: 253,
						yuml: 255,
						copy: 169,
						reg: 174,
						nbsp: 160,
						iexcl: 161,
						cent: 162,
						pound: 163,
						curren: 164,
						yen: 165,
						brvbar: 166,
						sect: 167,
						uml: 168,
						ordf: 170,
						laquo: 171,
						not: 172,
						shy: 173,
						macr: 175,
						deg: 176,
						plusmn: 177,
						sup1: 185,
						sup2: 178,
						sup3: 179,
						acute: 180,
						micro: 181,
						para: 182,
						middot: 183,
						cedil: 184,
						ordm: 186,
						raquo: 187,
						frac14: 188,
						frac12: 189,
						frac34: 190,
						iquest: 191,
						times: 215,
						divide: 247,
						OElig: 338,
						oelig: 339,
						Scaron: 352,
						scaron: 353,
						Yuml: 376,
						fnof: 402,
						circ: 710,
						tilde: 732,
						Alpha: 913,
						Beta: 914,
						Gamma: 915,
						Delta: 916,
						Epsilon: 917,
						Zeta: 918,
						Eta: 919,
						Theta: 920,
						Iota: 921,
						Kappa: 922,
						Lambda: 923,
						Mu: 924,
						Nu: 925,
						Xi: 926,
						Omicron: 927,
						Pi: 928,
						Rho: 929,
						Sigma: 931,
						Tau: 932,
						Upsilon: 933,
						Phi: 934,
						Chi: 935,
						Psi: 936,
						Omega: 937,
						alpha: 945,
						beta: 946,
						gamma: 947,
						delta: 948,
						epsilon: 949,
						zeta: 950,
						eta: 951,
						theta: 952,
						iota: 953,
						kappa: 954,
						lambda: 955,
						mu: 956,
						nu: 957,
						xi: 958,
						omicron: 959,
						pi: 960,
						rho: 961,
						sigmaf: 962,
						sigma: 963,
						tau: 964,
						upsilon: 965,
						phi: 966,
						chi: 967,
						psi: 968,
						omega: 969,
						thetasym: 977,
						upsih: 978,
						piv: 982,
						ensp: 8194,
						emsp: 8195,
						thinsp: 8201,
						zwnj: 8204,
						zwj: 8205,
						lrm: 8206,
						rlm: 8207,
						ndash: 8211,
						mdash: 8212,
						lsquo: 8216,
						rsquo: 8217,
						sbquo: 8218,
						ldquo: 8220,
						rdquo: 8221,
						bdquo: 8222,
						dagger: 8224,
						Dagger: 8225,
						bull: 8226,
						hellip: 8230,
						permil: 8240,
						prime: 8242,
						Prime: 8243,
						lsaquo: 8249,
						rsaquo: 8250,
						oline: 8254,
						frasl: 8260,
						euro: 8364,
						image: 8465,
						weierp: 8472,
						real: 8476,
						trade: 8482,
						alefsym: 8501,
						larr: 8592,
						uarr: 8593,
						rarr: 8594,
						darr: 8595,
						harr: 8596,
						crarr: 8629,
						lArr: 8656,
						uArr: 8657,
						rArr: 8658,
						dArr: 8659,
						hArr: 8660,
						forall: 8704,
						part: 8706,
						exist: 8707,
						empty: 8709,
						nabla: 8711,
						isin: 8712,
						notin: 8713,
						ni: 8715,
						prod: 8719,
						sum: 8721,
						minus: 8722,
						lowast: 8727,
						radic: 8730,
						prop: 8733,
						infin: 8734,
						ang: 8736,
						and: 8743,
						or: 8744,
						cap: 8745,
						cup: 8746,
						int: 8747,
						there4: 8756,
						sim: 8764,
						cong: 8773,
						asymp: 8776,
						ne: 8800,
						equiv: 8801,
						le: 8804,
						ge: 8805,
						sub: 8834,
						sup: 8835,
						nsub: 8836,
						sube: 8838,
						supe: 8839,
						oplus: 8853,
						otimes: 8855,
						perp: 8869,
						sdot: 8901,
						lceil: 8968,
						rceil: 8969,
						lfloor: 8970,
						rfloor: 8971,
						lang: 9001,
						rang: 9002,
						loz: 9674,
						spades: 9824,
						clubs: 9827,
						hearts: 9829,
						diams: 9830
					}, Object.keys(t.ENTITIES).forEach(function(n) {
						var r = t.ENTITIES[n],
							a = 'number' == typeof r ? Gd(r) : r;
						t.ENTITIES[n] = a
					}), t.STATE) t.STATE[t.STATE[S]] = S;
				U = t.STATE, O || function() {
					var e = function() {
						var e = [],
							t = -1,
							n = arguments.length,
							r, a;
						if (!n) return '';
						for (var o = '', i; ++t < n;) {
							if (i = +arguments[t], !isFinite(i) || 0 > i || 1114111 < i || Fd(i) !== i) throw RangeError('Invalid code point: ' + i);
							65535 >= i ? e.push(i) : (i -= 65536, r = (i >> 10) + 55296, a = i % 1024 + 56320, e.push(r, a)), (t + 1 === n || e.length > 16384) && (o += Gd.apply(null, e), e.length = 0)
						}
						return o
					};
					Object.defineProperty ? Object.defineProperty(String, 'fromCodePoint', {
						value: e,
						configurable: !0,
						writable: !0
					}) : O = e
				}()
			})(t)
		}),
		Oc = {
			Text: 'text',
			Directive: 'directive',
			Comment: 'comment',
			Script: 'script',
			Style: 'style',
			Tag: 'tag',
			CDATA: 'cdata',
			Doctype: 'doctype',
			isTag: function(e) {
				return 'tag' === e.type || 'script' === e.type || 'style' === e.type
			}
		},
		Pc = {
			Text: 'text',
			Directive: 'directive',
			Comment: 'comment',
			Script: 'script',
			Style: 'style',
			Tag: 'tag',
			CDATA: 'cdata',
			isTag: function(e) {
				return 'tag' === e.type || 'script' === e.type || 'style' === e.type
			}
		},
		Lc = '&',
		qc = '\'',
		Rc = '>',
		Dc = '<',
		Nc = '"',
		Bc = {
			amp: Lc,
			apos: qc,
			gt: Rc,
			lt: Dc,
			quot: Nc
		},
		Ic = Object.freeze({
			amp: Lc,
			apos: qc,
			gt: Rc,
			lt: Dc,
			quot: Nc,
			default: Bc
		}),
		zc = '\xC1',
		_c = '\xE1',
		Mc = '\u0102',
		Gc = '\u0103',
		Uc = '\u223E',
		Vc = '\u223F',
		Wc = '\u223E\u0333',
		Fc = '\xC2',
		jc = '\xE2',
		Hc = '\xB4',
		Yc = '\u0410',
		$c = '\u0430',
		Kc = '\xC6',
		Xc = '\xE6',
		Qc = '\u2061',
		Zc = '\uD835\uDD04',
		Jc = '\uD835\uDD1E',
		ep = '\xC0',
		tp = '\xE0',
		np = '\u2135',
		rp = '\u2135',
		op = '\u0391',
		ip = '\u03B1',
		sp = '\u0100',
		lp = '\u0101',
		dp = '\u2A3F',
		cp = '&',
		pp = '&',
		up = '\u2A55',
		gp = '\u2A53',
		hp = '\u2227',
		fp = '\u2A5C',
		yp = '\u2A58',
		bp = '\u2A5A',
		xp = '\u2220',
		kp = '\u29A4',
		Sp = '\u2220',
		vp = '\u29A8',
		Tp = '\u29A9',
		Cp = '\u29AA',
		Ep = '\u29AB',
		Ap = '\u29AC',
		Op = '\u29AD',
		Pp = '\u29AE',
		Lp = '\u29AF',
		qp = '\u2221',
		Rp = '\u221F',
		Dp = '\u22BE',
		Np = '\u299D',
		Bp = '\u2222',
		Ip = '\xC5',
		zp = '\u237C',
		_p = '\u0104',
		Mp = '\u0105',
		Gp = '\uD835\uDD38',
		Up = '\uD835\uDD52',
		Vp = '\u2A6F',
		Wp = '\u2248',
		Fp = '\u2A70',
		jp = '\u224A',
		Hp = '\u224B',
		Yp = '\'',
		$p = '\u2061',
		Kp = '\u2248',
		Xp = '\u224A',
		Qp = '\xC5',
		Zp = '\xE5',
		Jp = '\uD835\uDC9C',
		eu = '\uD835\uDCB6',
		tu = '\u2254',
		ru = '*',
		au = '\u2248',
		ou = '\u224D',
		iu = '\xC3',
		su = '\xE3',
		lu = '\xC4',
		du = '\xE4',
		cu = '\u2233',
		pu = '\u2A11',
		uu = '\u224C',
		gu = '\u03F6',
		hu = '\u2035',
		fu = '\u223D',
		yu = '\u22CD',
		bu = '\u2216',
		xu = '\u2AE7',
		ku = '\u22BD',
		Su = '\u2305',
		wu = '\u2306',
		vu = '\u2305',
		Tu = '\u23B5',
		Cu = '\u23B6',
		Eu = '\u224C',
		Au = '\u0411',
		Ou = '\u0431',
		Pu = '\u201E',
		Lu = '\u2235',
		qu = '\u2235',
		Ru = '\u2235',
		Du = '\u29B0',
		Bu = '\u03F6',
		Iu = '\u212C',
		zu = '\u212C',
		_u = '\u0392',
		Gu = '\u03B2',
		Uu = '\u2136',
		Vu = '\u226C',
		Wu = '\uD835\uDD05',
		Fu = '\uD835\uDD1F',
		ju = '\u22C2',
		Hu = '\u25EF',
		Yu = '\u22C3',
		$u = '\u2A00',
		Ku = '\u2A01',
		Xu = '\u2A02',
		Qu = '\u2A06',
		Zu = '\u2605',
		Ju = '\u25BD',
		em = '\u25B3',
		tm = '\u2A04',
		nm = '\u22C1',
		rm = '\u22C0',
		am = '\u290D',
		om = '\u29EB',
		im = '\u25AA',
		sm = '\u25B4',
		lm = '\u25BE',
		dm = '\u25C2',
		cm = '\u25B8',
		um = '\u2423',
		mm = '\u2592',
		gm = '\u2591',
		hm = '\u2593',
		fm = '\u2588',
		ym = '=\u20E5',
		bm = '\u2261\u20E5',
		xm = '\u2AED',
		km = '\u2310',
		Sm = '\uD835\uDD39',
		wm = '\uD835\uDD53',
		vm = '\u22A5',
		Tm = '\u22A5',
		Cm = '\u22C8',
		Em = '\u29C9',
		Am = '\u2510',
		Om = '\u2555',
		Pm = '\u2556',
		Lm = '\u2557',
		qm = '\u250C',
		Rm = '\u2552',
		Dm = '\u2553',
		Nm = '\u2554',
		Bm = '\u2500',
		zm = '\u2550',
		_m = '\u252C',
		Mm = '\u2564',
		Gm = '\u2565',
		Um = '\u2566',
		Vm = '\u2534',
		Wm = '\u2567',
		Fm = '\u2568',
		jm = '\u2569',
		Hm = '\u229F',
		Ym = '\u229E',
		$m = '\u22A0',
		Km = '\u2518',
		Xm = '\u255B',
		Qm = '\u255C',
		Zm = '\u255D',
		Jm = '\u2514',
		tg = '\u2558',
		ng = '\u2559',
		rg = '\u255A',
		ag = '\u2502',
		og = '\u2551',
		ig = '\u253C',
		sg = '\u256A',
		dg = '\u256B',
		cg = '\u256C',
		pg = '\u2524',
		ug = '\u2561',
		mg = '\u2562',
		hg = '\u2563',
		fg = '\u251C',
		yg = '\u255E',
		bg = '\u255F',
		xg = '\u2560',
		kg = '\u2035',
		Sg = '\u02D8',
		wg = '\u02D8',
		vg = '\xA6',
		Tg = '\uD835\uDCB7',
		Cg = '\u212C',
		Eg = '\u204F',
		Ag = '\u223D',
		Og = '\u22CD',
		Pg = '\u29C5',
		Lg = '\\',
		qg = '\u27C8',
		Rg = '\u2022',
		Dg = '\u2022',
		Ng = '\u224E',
		Bg = '\u2AAE',
		Ig = '\u224F',
		zg = '\u224E',
		_g = '\u224F',
		Mg = '\u0106',
		Ug = '\u0107',
		Vg = '\u2A44',
		Wg = '\u2A49',
		Fg = '\u2A4B',
		jg = '\u2229',
		Hg = '\u22D2',
		Yg = '\u2A47',
		$g = '\u2A40',
		Kg = '\u2145',
		Xg = '\u2229\uFE00',
		Qg = '\u2041',
		Zg = '\u02C7',
		Jg = '\u212D',
		eh = '\u2A4D',
		th = '\u010C',
		nh = '\u010D',
		rh = '\xC7',
		ah = '\xE7',
		oh = '\u0108',
		ih = '\u0109',
		sh = '\u2230',
		lh = '\u2A4C',
		dh = '\u2A50',
		ch = '\u010A',
		ph = '\u010B',
		uh = '\xB8',
		mh = '\xB8',
		gh = '\u29B2',
		hh = '\xA2',
		fh = '\xB7',
		yh = '\xB7',
		bh = '\uD835\uDD20',
		xh = '\u212D',
		kh = '\u0427',
		Sh = '\u0447',
		wh = '\u2713',
		vh = '\u2713',
		Th = '\u03A7',
		Ch = '\u03C7',
		Eh = '\u02C6',
		Ah = '\u2257',
		Oh = '\u21BA',
		Ph = '\u21BB',
		Lh = '\u229B',
		qh = '\u229A',
		Rh = '\u229D',
		Dh = '\u2299',
		Nh = '\xAE',
		Bh = '\u24C8',
		Ih = '\u2296',
		zh = '\u2295',
		_h = '\u2297',
		Mh = '\u25CB',
		Gh = '\u29C3',
		Uh = '\u2257',
		Vh = '\u2A10',
		Wh = '\u2AEF',
		Fh = '\u29C2',
		jh = '\u2232',
		Hh = '\u201D',
		Yh = '\u2019',
		$h = '\u2663',
		Kh = '\u2663',
		Xh = ':',
		Qh = '\u2237',
		Zh = '\u2A74',
		Jh = '\u2254',
		ef = '\u2254',
		tf = ',',
		nf = '@',
		rf = '\u2201',
		of = '\u2218',
		sf = '\u2201',
		lf = '\u2102',
		df = '\u2245',
		cf = '\u2A6D',
		pf = '\u2261',
		uf = '\u222E',
		mf = '\u222F',
		gf = '\u222E',
		hf = '\uD835\uDD54',
		ff = '\u2102',
		yf = '\u2210',
		bf = '\u2210',
		xf = '\xA9',
		kf = '\xA9',
		Sf = '\u2117',
		wf = '\u2233',
		vf = '\u21B5',
		Tf = '\u2717',
		Cf = '\u2A2F',
		Ef = '\uD835\uDC9E',
		Af = '\uD835\uDCB8',
		Of = '\u2ACF',
		Pf = '\u2AD1',
		Lf = '\u2AD0',
		qf = '\u2AD2',
		Rf = '\u22EF',
		Df = '\u2938',
		Nf = '\u2935',
		Bf = '\u22DE',
		If = '\u22DF',
		zf = '\u21B6',
		_f = '\u293D',
		Mf = '\u2A48',
		Gf = '\u2A46',
		Uf = '\u224D',
		Vf = '\u222A',
		Wf = '\u22D3',
		Ff = '\u2A4A',
		jf = '\u228D',
		Hf = '\u2A45',
		Yf = '\u222A\uFE00',
		$f = '\u21B7',
		Kf = '\u293C',
		Xf = '\u22DE',
		Qf = '\u22DF',
		Zf = '\u22CE',
		Jf = '\u22CF',
		ey = '\xA4',
		ty = '\u21B6',
		ny = '\u21B7',
		ry = '\u22CE',
		ay = '\u22CF',
		oy = '\u2232',
		iy = '\u2231',
		sy = '\u232D',
		ly = '\u2020',
		dy = '\u2021',
		cy = '\u2138',
		py = '\u2193',
		uy = '\u21A1',
		my = '\u21D3',
		gy = '\u2010',
		hy = '\u2AE4',
		fy = '\u22A3',
		yy = '\u290F',
		by = '\u02DD',
		xy = '\u010E',
		ky = '\u010F',
		Sy = '\u0414',
		wy = '\u0434',
		vy = '\u2021',
		Ty = '\u21CA',
		Cy = '\u2145',
		Ey = '\u2146',
		Ay = '\u2911',
		Oy = '\u2A77',
		Py = '\xB0',
		Ly = '\u2207',
		qy = '\u0394',
		Ry = '\u03B4',
		Dy = '\u29B1',
		Ny = '\u297F',
		By = '\uD835\uDD07',
		Iy = '\uD835\uDD21',
		zy = '\u2965',
		_y = '\u21C3',
		My = '\u21C2',
		Gy = '\xB4',
		Uy = '\u02D9',
		Vy = '\u02DD',
		Wy = '`',
		Fy = '\u02DC',
		jy = '\u22C4',
		Hy = '\u22C4',
		Yy = '\u22C4',
		$y = '\u2666',
		Ky = '\u2666',
		Xy = '\xA8',
		Qy = '\u2146',
		Zy = '\u03DD',
		Jy = '\u22F2',
		eb = '\xF7',
		tb = '\xF7',
		nb = '\u22C7',
		rb = '\u22C7',
		ab = '\u0402',
		ob = '\u0452',
		ib = '\u231E',
		sb = '\u230D',
		lb = '$',
		db = '\uD835\uDD3B',
		cb = '\uD835\uDD55',
		pb = '\xA8',
		ub = '\u02D9',
		mb = '\u20DC',
		gb = '\u2250',
		hb = '\u2251',
		fb = '\u2250',
		yb = '\u2238',
		bb = '\u2214',
		xb = '\u22A1',
		kb = '\u2306',
		Sb = '\u222F',
		wb = '\xA8',
		vb = '\u21D3',
		Tb = '\u21D0',
		Cb = '\u21D4',
		Eb = '\u2AE4',
		Ab = '\u27F8',
		Ob = '\u27FA',
		Pb = '\u27F9',
		Lb = '\u21D2',
		qb = '\u22A8',
		Rb = '\u21D1',
		Db = '\u21D5',
		Nb = '\u2225',
		Bb = '\u2913',
		Ib = '\u2193',
		zb = '\u2193',
		_b = '\u21D3',
		Mb = '\u21F5',
		Gb = '\u0311',
		Ub = '\u21CA',
		Vb = '\u21C3',
		Wb = '\u21C2',
		Fb = '\u2950',
		jb = '\u295E',
		Hb = '\u2956',
		Yb = '\u21BD',
		$b = '\u295F',
		Kb = '\u2957',
		Xb = '\u21C1',
		Qb = '\u21A7',
		Zb = '\u22A4',
		Jb = '\u2910',
		ex = '\u231F',
		tx = '\u230C',
		nx = '\uD835\uDC9F',
		ax = '\uD835\uDCB9',
		ox = '\u0405',
		ix = '\u0455',
		sx = '\u29F6',
		lx = '\u0110',
		dx = '\u0111',
		cx = '\u22F1',
		px = '\u25BF',
		ux = '\u25BE',
		mx = '\u21F5',
		gx = '\u296F',
		hx = '\u29A6',
		fx = '\u040F',
		yx = '\u045F',
		bx = '\u27FF',
		xx = '\xC9',
		kx = '\xE9',
		Sx = '\u2A6E',
		wx = '\u011A',
		vx = '\u011B',
		Tx = '\xCA',
		Cx = '\xEA',
		Ex = '\u2256',
		Ax = '\u2255',
		Ox = '\u042D',
		Px = '\u044D',
		Lx = '\u2A77',
		qx = '\u0116',
		Rx = '\u0117',
		Dx = '\u2251',
		Nx = '\u2147',
		Bx = '\u2252',
		Ix = '\uD835\uDD08',
		zx = '\uD835\uDD22',
		_x = '\u2A9A',
		Mx = '\xC8',
		Gx = '\xE8',
		Ux = '\u2A96',
		Vx = '\u2A98',
		Wx = '\u2A99',
		Fx = '\u2208',
		jx = '\u23E7',
		Hx = '\u2113',
		Yx = '\u2A95',
		$x = '\u2A97',
		Kx = '\u0112',
		Xx = '\u0113',
		Qx = '\u2205',
		Zx = '\u2205',
		Jx = '\u25FB',
		ek = '\u2205',
		tk = '\u25AB',
		nk = '\u2004',
		rk = '\u2005',
		ak = '\u2003',
		ok = '\u014A',
		ik = '\u014B',
		sk = '\u2002',
		lk = '\u0118',
		dk = '\u0119',
		ck = '\uD835\uDD3C',
		pk = '\uD835\uDD56',
		uk = '\u22D5',
		mk = '\u29E3',
		gk = '\u2A71',
		hk = '\u03B5',
		fk = '\u0395',
		yk = '\u03B5',
		bk = '\u03F5',
		xk = '\u2256',
		kk = '\u2255',
		Sk = '\u2242',
		wk = '\u2A96',
		vk = '\u2A95',
		Tk = '\u2A75',
		Ck = '=',
		Ek = '\u2242',
		Ak = '\u225F',
		Ok = '\u21CC',
		Pk = '\u2261',
		Lk = '\u2A78',
		qk = '\u29E5',
		Rk = '\u2971',
		Dk = '\u2253',
		Nk = '\u212F',
		Bk = '\u2130',
		Ik = '\u2250',
		zk = '\u2A73',
		_k = '\u2242',
		Mk = '\u0397',
		Gk = '\u03B7',
		Uk = '\xD0',
		Vk = '\xF0',
		Wk = '\xCB',
		Fk = '\xEB',
		jk = '\u20AC',
		Hk = '!',
		Yk = '\u2203',
		$k = '\u2203',
		Kk = '\u2130',
		Xk = '\u2147',
		Qk = '\u2147',
		Zk = '\u2252',
		Jk = '\u0424',
		eS = '\u0444',
		tS = '\u2640',
		nS = '\uFB03',
		rS = '\uFB00',
		aS = '\uFB04',
		iS = '\uD835\uDD09',
		sS = '\uD835\uDD23',
		lS = '\uFB01',
		dS = '\u25FC',
		cS = '\u25AA',
		pS = 'fj',
		uS = '\u266D',
		mS = '\uFB02',
		gS = '\u25B1',
		hS = '\u0192',
		fS = '\uD835\uDD3D',
		yS = '\uD835\uDD57',
		bS = '\u2200',
		xS = '\u2200',
		kS = '\u22D4',
		SS = '\u2AD9',
		wS = '\u2131',
		vS = '\u2A0D',
		TS = '\xBD',
		CS = '\u2153',
		ES = '\xBC',
		AS = '\u2155',
		OS = '\u2159',
		PS = '\u215B',
		LS = '\u2154',
		qS = '\u2156',
		RS = '\xBE',
		DS = '\u2157',
		NS = '\u215C',
		BS = '\u2158',
		IS = '\u215A',
		zS = '\u215D',
		_S = '\u215E',
		MS = '\u2044',
		GS = '\u2322',
		US = '\uD835\uDCBB',
		VS = '\u2131',
		WS = '\u01F5',
		FS = '\u0393',
		jS = '\u03B3',
		HS = '\u03DC',
		YS = '\u03DD',
		$S = '\u2A86',
		KS = '\u011E',
		XS = '\u011F',
		QS = '\u0122',
		ZS = '\u011C',
		JS = '\u011D',
		ew = '\u0413',
		tw = '\u0433',
		nw = '\u0120',
		rw = '\u0121',
		aw = '\u2265',
		ow = '\u2267',
		iw = '\u2A8C',
		sw = '\u22DB',
		lw = '\u2265',
		dw = '\u2267',
		cw = '\u2A7E',
		pw = '\u2AA9',
		uw = '\u2A7E',
		mw = '\u2A80',
		gw = '\u2A82',
		hw = '\u2A84',
		fw = '\u22DB\uFE00',
		yw = '\u2A94',
		bw = '\uD835\uDD0A',
		xw = '\uD835\uDD24',
		kw = '\u226B',
		Sw = '\u22D9',
		ww = '\u22D9',
		vw = '\u2137',
		Tw = '\u0403',
		Cw = '\u0453',
		Ew = '\u2AA5',
		Aw = '\u2277',
		Ow = '\u2A92',
		Pw = '\u2AA4',
		Lw = '\u2A8A',
		qw = '\u2A8A',
		Rw = '\u2A88',
		Dw = '\u2269',
		Nw = '\u2A88',
		Bw = '\u2269',
		Iw = '\u22E7',
		zw = '\uD835\uDD3E',
		_w = '\uD835\uDD58',
		Mw = '`',
		Gw = '\u2265',
		Uw = '\u22DB',
		Vw = '\u2267',
		Ww = '\u2AA2',
		Fw = '\u2277',
		jw = '\u2A7E',
		Hw = '\u2273',
		Yw = '\uD835\uDCA2',
		$w = '\u210A',
		Kw = '\u2273',
		Xw = '\u2A8E',
		Qw = '\u2A90',
		Zw = '\u2AA7',
		Jw = '\u2A7A',
		ev = '>',
		tv = '>',
		nv = '\u226B',
		rv = '\u22D7',
		av = '\u2995',
		ov = '\u2A7C',
		iv = '\u2A86',
		sv = '\u2978',
		lv = '\u22D7',
		dv = '\u22DB',
		cv = '\u2A8C',
		pv = '\u2277',
		uv = '\u2273',
		mv = '\u2269\uFE00',
		gv = '\u2269\uFE00',
		hv = '\u02C7',
		fv = '\u200A',
		yv = '\xBD',
		bv = '\u210B',
		xv = '\u042A',
		kv = '\u044A',
		Sv = '\u2948',
		wv = '\u2194',
		vv = '\u21D4',
		Tv = '\u21AD',
		Cv = '^',
		Ev = '\u210F',
		Av = '\u0124',
		Ov = '\u0125',
		Pv = '\u2665',
		Lv = '\u2665',
		qv = '\u2026',
		Rv = '\u22B9',
		Dv = '\uD835\uDD25',
		Nv = '\u210C',
		Bv = '\u210B',
		Iv = '\u2925',
		zv = '\u2926',
		_v = '\u21FF',
		Mv = '\u223B',
		Gv = '\u21A9',
		Uv = '\u21AA',
		Vv = '\uD835\uDD59',
		Wv = '\u210D',
		Fv = '\u2015',
		jv = '\u2500',
		Hv = '\uD835\uDCBD',
		Yv = '\u210B',
		$v = '\u210F',
		Kv = '\u0126',
		Xv = '\u0127',
		Qv = '\u224E',
		Zv = '\u224F',
		Jv = '\u2043',
		eT = '\u2010',
		tT = '\xCD',
		nT = '\xED',
		rT = '\u2063',
		aT = '\xCE',
		oT = '\xEE',
		iT = '\u0418',
		sT = '\u0438',
		lT = '\u0130',
		dT = '\u0415',
		cT = '\u0435',
		pT = '\xA1',
		uT = '\u21D4',
		mT = '\uD835\uDD26',
		gT = '\u2111',
		hT = '\xCC',
		fT = '\xEC',
		yT = '\u2148',
		bT = '\u2A0C',
		xT = '\u222D',
		kT = '\u29DC',
		ST = '\u2129',
		wT = '\u0132',
		vT = '\u0133',
		TT = '\u012A',
		CT = '\u012B',
		ET = '\u2111',
		AT = '\u2148',
		OT = '\u2110',
		PT = '\u2111',
		qT = '\u0131',
		RT = '\u2111',
		DT = '\u22B7',
		NT = '\u01B5',
		BT = '\u21D2',
		IT = '\u2105',
		zT = '\u221E',
		_T = '\u29DD',
		MT = '\u0131',
		UT = '\u22BA',
		VT = '\u222B',
		WT = '\u222C',
		FT = '\u2124',
		jT = '\u222B',
		HT = '\u22BA',
		YT = '\u22C2',
		$T = '\u2A17',
		KT = '\u2A3C',
		XT = '\u2063',
		QT = '\u2062',
		ZT = '\u0401',
		JT = '\u0451',
		eC = '\u012E',
		tC = '\u012F',
		nC = '\uD835\uDD40',
		rC = '\uD835\uDD5A',
		aC = '\u0399',
		oC = '\u03B9',
		iC = '\u2A3C',
		sC = '\xBF',
		lC = '\uD835\uDCBE',
		dC = '\u2110',
		cC = '\u2208',
		pC = '\u22F5',
		uC = '\u22F9',
		mC = '\u22F4',
		gC = '\u22F3',
		hC = '\u2208',
		fC = '\u2062',
		yC = '\u0128',
		bC = '\u0129',
		xC = '\u0406',
		kC = '\u0456',
		SC = '\xCF',
		wC = '\xEF',
		vC = '\u0134',
		TC = '\u0135',
		CC = '\u0419',
		EC = '\u0439',
		AC = '\uD835\uDD0D',
		OC = '\uD835\uDD27',
		PC = '\u0237',
		LC = '\uD835\uDD41',
		qC = '\uD835\uDD5B',
		RC = '\uD835\uDCA5',
		DC = '\uD835\uDCBF',
		NC = '\u0408',
		BC = '\u0458',
		IC = '\u0404',
		zC = '\u0454',
		_C = '\u039A',
		MC = '\u03BA',
		GC = '\u03F0',
		UC = '\u0136',
		VC = '\u0137',
		WC = '\u041A',
		FC = '\u043A',
		jC = '\uD835\uDD0E',
		HC = '\uD835\uDD28',
		YC = '\u0138',
		$C = '\u0425',
		KC = '\u0445',
		XC = '\u040C',
		QC = '\u045C',
		ZC = '\uD835\uDD42',
		JC = '\uD835\uDD5C',
		eE = '\uD835\uDCA6',
		tE = '\uD835\uDCC0',
		nE = '\u21DA',
		rE = '\u0139',
		aE = '\u013A',
		oE = '\u29B4',
		iE = '\u2112',
		sE = '\u039B',
		dE = '\u03BB',
		cE = '\u27E8',
		pE = '\u27EA',
		uE = '\u2991',
		mE = '\u27E8',
		hE = '\u2A85',
		fE = '\u2112',
		yE = '\xAB',
		bE = '\u21E4',
		xE = '\u291F',
		kE = '\u2190',
		SE = '\u219E',
		wE = '\u21D0',
		vE = '\u291D',
		TE = '\u21A9',
		CE = '\u21AB',
		EE = '\u2939',
		AE = '\u2973',
		OE = '\u21A2',
		PE = '\u2919',
		LE = '\u291B',
		qE = '\u2AAB',
		RE = '\u2AAD',
		DE = '\u2AAD\uFE00',
		NE = '\u290C',
		BE = '\u290E',
		IE = '\u2772',
		zE = '{',
		_E = '[',
		ME = '\u298B',
		GE = '\u298F',
		UE = '\u298D',
		VE = '\u013D',
		WE = '\u013E',
		FE = '\u013B',
		jE = '\u013C',
		HE = '\u2308',
		YE = '{',
		$E = '\u041B',
		KE = '\u043B',
		XE = '\u2936',
		QE = '\u201C',
		ZE = '\u201E',
		JE = '\u2967',
		eA = '\u294B',
		tA = '\u21B2',
		nA = '\u2264',
		rA = '\u2266',
		aA = '\u27E8',
		oA = '\u21E4',
		iA = '\u2190',
		sA = '\u2190',
		lA = '\u21D0',
		dA = '\u21C6',
		cA = '\u21A2',
		pA = '\u2308',
		uA = '\u27E6',
		mA = '\u2961',
		gA = '\u2959',
		hA = '\u21C3',
		fA = '\u230A',
		yA = '\u21BD',
		bA = '\u21BC',
		xA = '\u21C7',
		kA = '\u2194',
		SA = '\u2194',
		wA = '\u21D4',
		vA = '\u21C6',
		TA = '\u21CB',
		CA = '\u21AD',
		EA = '\u294E',
		AA = '\u21A4',
		OA = '\u22A3',
		PA = '\u295A',
		LA = '\u22CB',
		qA = '\u29CF',
		RA = '\u22B2',
		DA = '\u22B4',
		NA = '\u2951',
		BA = '\u2960',
		IA = '\u2958',
		zA = '\u21BF',
		_A = '\u2952',
		MA = '\u21BC',
		GA = '\u2A8B',
		UA = '\u22DA',
		VA = '\u2264',
		WA = '\u2266',
		FA = '\u2A7D',
		jA = '\u2AA8',
		HA = '\u2A7D',
		YA = '\u2A7F',
		$A = '\u2A81',
		KA = '\u2A83',
		XA = '\u22DA\uFE00',
		QA = '\u2A93',
		ZA = '\u2A85',
		JA = '\u22D6',
		eO = '\u22DA',
		tO = '\u2A8B',
		nO = '\u22DA',
		rO = '\u2266',
		aO = '\u2276',
		oO = '\u2276',
		iO = '\u2AA1',
		sO = '\u2272',
		lO = '\u2A7D',
		dO = '\u2272',
		cO = '\u297C',
		pO = '\u230A',
		uO = '\uD835\uDD0F',
		mO = '\uD835\uDD29',
		gO = '\u2276',
		hO = '\u2A91',
		fO = '\u2962',
		yO = '\u21BD',
		bO = '\u21BC',
		xO = '\u296A',
		kO = '\u2584',
		SO = '\u0409',
		wO = '\u0459',
		vO = '\u21C7',
		TO = '\u226A',
		CO = '\u22D8',
		EO = '\u231E',
		AO = '\u21DA',
		OO = '\u296B',
		PO = '\u25FA',
		LO = '\u013F',
		qO = '\u0140',
		RO = '\u23B0',
		DO = '\u23B0',
		NO = '\u2A89',
		BO = '\u2A89',
		IO = '\u2A87',
		zO = '\u2268',
		_O = '\u2A87',
		MO = '\u2268',
		GO = '\u22E6',
		UO = '\u27EC',
		VO = '\u21FD',
		WO = '\u27E6',
		FO = '\u27F5',
		jO = '\u27F5',
		HO = '\u27F8',
		YO = '\u27F7',
		$O = '\u27F7',
		KO = '\u27FA',
		XO = '\u27FC',
		QO = '\u27F6',
		ZO = '\u27F6',
		JO = '\u27F9',
		eP = '\u21AB',
		tP = '\u21AC',
		nP = '\u2985',
		rP = '\uD835\uDD43',
		aP = '\uD835\uDD5D',
		oP = '\u2A2D',
		iP = '\u2A34',
		sP = '\u2217',
		lP = '_',
		dP = '\u2199',
		cP = '\u2198',
		pP = '\u25CA',
		uP = '\u25CA',
		mP = '\u29EB',
		gP = '(',
		hP = '\u2993',
		fP = '\u21C6',
		yP = '\u231F',
		bP = '\u21CB',
		xP = '\u296D',
		kP = '\u200E',
		SP = '\u22BF',
		wP = '\u2039',
		vP = '\uD835\uDCC1',
		TP = '\u2112',
		CP = '\u21B0',
		EP = '\u21B0',
		AP = '\u2272',
		OP = '\u2A8D',
		PP = '\u2A8F',
		LP = '[',
		qP = '\u2018',
		RP = '\u201A',
		DP = '\u0141',
		NP = '\u0142',
		BP = '\u2AA6',
		IP = '\u2A79',
		zP = '<',
		_P = '<',
		MP = '\u226A',
		GP = '\u22D6',
		UP = '\u22CB',
		VP = '\u22C9',
		WP = '\u2976',
		FP = '\u2A7B',
		jP = '\u25C3',
		HP = '\u22B4',
		YP = '\u25C2',
		$P = '\u2996',
		KP = '\u294A',
		XP = '\u2966',
		QP = '\u2268\uFE00',
		ZP = '\u2268\uFE00',
		JP = '\xAF',
		eL = '\u2642',
		tL = '\u2720',
		nL = '\u2720',
		rL = '\u21A6',
		aL = '\u21A6',
		oL = '\u21A7',
		iL = '\u21A4',
		sL = '\u21A5',
		lL = '\u25AE',
		dL = '\u2A29',
		cL = '\u041C',
		pL = '\u043C',
		uL = '\u2014',
		mL = '\u223A',
		gL = '\u2221',
		hL = '\u205F',
		fL = '\u2133',
		yL = '\uD835\uDD10',
		bL = '\uD835\uDD2A',
		xL = '\u2127',
		kL = '\xB5',
		SL = '*',
		wL = '\u2AF0',
		vL = '\u2223',
		TL = '\xB7',
		CL = '\u229F',
		EL = '\u2212',
		AL = '\u2238',
		OL = '\u2A2A',
		PL = '\u2213',
		LL = '\u2ADB',
		qL = '\u2026',
		RL = '\u2213',
		DL = '\u22A7',
		NL = '\uD835\uDD44',
		BL = '\uD835\uDD5E',
		IL = '\u2213',
		zL = '\uD835\uDCC2',
		_L = '\u2133',
		ML = '\u223E',
		GL = '\u039C',
		UL = '\u03BC',
		VL = '\u22B8',
		WL = '\u22B8',
		FL = '\u2207',
		jL = '\u0143',
		HL = '\u0144',
		YL = '\u2220\u20D2',
		$L = '\u2249',
		KL = '\u2A70\u0338',
		XL = '\u224B\u0338',
		QL = '\u0149',
		ZL = '\u2249',
		JL = '\u266E',
		eq = '\u2115',
		tq = '\u266E',
		nq = '\xA0',
		rq = '\u224E\u0338',
		aq = '\u224F\u0338',
		oq = '\u2A43',
		iq = '\u0147',
		sq = '\u0148',
		lq = '\u0145',
		dq = '\u0146',
		cq = '\u2247',
		pq = '\u2A6D\u0338',
		uq = '\u2A42',
		mq = '\u041D',
		gq = '\u043D',
		hq = '\u2013',
		fq = '\u2924',
		yq = '\u2197',
		bq = '\u21D7',
		xq = '\u2197',
		kq = '\u2260',
		Sq = '\u2250\u0338',
		wq = '\u200B',
		vq = '\u200B',
		Tq = '\u200B',
		Cq = '\u200B',
		Eq = '\u2262',
		Aq = '\u2928',
		Oq = '\u2242\u0338',
		Pq = '\u226B',
		Lq = '\u226A',
		qq = '\n',
		Rq = '\u2204',
		Dq = '\u2204',
		Nq = '\uD835\uDD11',
		Bq = '\uD835\uDD2B',
		Iq = '\u2267\u0338',
		zq = '\u2271',
		_q = '\u2271',
		Mq = '\u2267\u0338',
		Gq = '\u2A7E\u0338',
		Uq = '\u2A7E\u0338',
		Vq = '\u22D9\u0338',
		Wq = '\u2275',
		Fq = '\u226B\u20D2',
		jq = '\u226F',
		Hq = '\u226F',
		Yq = '\u226B\u0338',
		$q = '\u21AE',
		Kq = '\u21CE',
		Xq = '\u2AF2',
		Qq = '\u220B',
		Zq = '\u22FC',
		Jq = '\u22FA',
		eR = '\u220B',
		tR = '\u040A',
		nR = '\u045A',
		rR = '\u219A',
		aR = '\u21CD',
		oR = '\u2025',
		iR = '\u2266\u0338',
		sR = '\u2270',
		lR = '\u219A',
		dR = '\u21CD',
		cR = '\u21AE',
		pR = '\u21CE',
		uR = '\u2270',
		mR = '\u2266\u0338',
		gR = '\u2A7D\u0338',
		hR = '\u2A7D\u0338',
		fR = '\u226E',
		yR = '\u22D8\u0338',
		bR = '\u2274',
		xR = '\u226A\u20D2',
		kR = '\u226E',
		SR = '\u22EA',
		wR = '\u22EC',
		vR = '\u226A\u0338',
		TR = '\u2224',
		CR = '\u2060',
		ER = '\xA0',
		AR = '\uD835\uDD5F',
		OR = '\u2115',
		PR = '\u2AEC',
		LR = '\xAC',
		qR = '\u2262',
		RR = '\u226D',
		DR = '\u2226',
		NR = '\u2209',
		BR = '\u2260',
		IR = '\u2242\u0338',
		zR = '\u2204',
		_R = '\u226F',
		MR = '\u2271',
		GR = '\u2267\u0338',
		UR = '\u226B\u0338',
		VR = '\u2279',
		WR = '\u2A7E\u0338',
		FR = '\u2275',
		jR = '\u224E\u0338',
		HR = '\u224F\u0338',
		YR = '\u2209',
		$R = '\u22F5\u0338',
		KR = '\u22F9\u0338',
		XR = '\u2209',
		QR = '\u22F7',
		ZR = '\u22F6',
		JR = '\u29CF\u0338',
		eD = '\u22EA',
		tD = '\u22EC',
		nD = '\u226E',
		rD = '\u2270',
		aD = '\u2278',
		oD = '\u226A\u0338',
		iD = '\u2A7D\u0338',
		sD = '\u2274',
		lD = '\u2AA2\u0338',
		dD = '\u2AA1\u0338',
		cD = '\u220C',
		pD = '\u220C',
		uD = '\u22FE',
		mD = '\u22FD',
		gD = '\u2280',
		hD = '\u2AAF\u0338',
		fD = '\u22E0',
		yD = '\u220C',
		bD = '\u29D0\u0338',
		xD = '\u22EB',
		kD = '\u22ED',
		SD = '\u228F\u0338',
		wD = '\u22E2',
		vD = '\u2290\u0338',
		TD = '\u22E3',
		CD = '\u2282\u20D2',
		ED = '\u2288',
		AD = '\u2281',
		OD = '\u2AB0\u0338',
		PD = '\u22E1',
		LD = '\u227F\u0338',
		qD = '\u2283\u20D2',
		RD = '\u2289',
		ND = '\u2241',
		BD = '\u2244',
		ID = '\u2247',
		zD = '\u2249',
		_D = '\u2224',
		MD = '\u2226',
		GD = '\u2226',
		UD = '\u2AFD\u20E5',
		VD = '\u2202\u0338',
		WD = '\u2A14',
		FD = '\u2280',
		jD = '\u22E0',
		HD = '\u2280',
		YD = '\u2AAF\u0338',
		$D = '\u2AAF\u0338',
		KD = '\u2933\u0338',
		XD = '\u219B',
		QD = '\u21CF',
		ZD = '\u219D\u0338',
		JD = '\u219B',
		eN = '\u21CF',
		tN = '\u22EB',
		nN = '\u22ED',
		rN = '\u2281',
		aN = '\u22E1',
		oN = '\u2AB0\u0338',
		iN = '\uD835\uDCA9',
		sN = '\uD835\uDCC3',
		lN = '\u2224',
		dN = '\u2226',
		cN = '\u2241',
		pN = '\u2244',
		uN = '\u2244',
		mN = '\u2224',
		gN = '\u2226',
		hN = '\u22E2',
		fN = '\u22E3',
		yN = '\u2284',
		bN = '\u2AC5\u0338',
		xN = '\u2288',
		kN = '\u2282\u20D2',
		SN = '\u2288',
		wN = '\u2AC5\u0338',
		vN = '\u2281',
		TN = '\u2AB0\u0338',
		CN = '\u2285',
		EN = '\u2AC6\u0338',
		AN = '\u2289',
		ON = '\u2283\u20D2',
		PN = '\u2289',
		LN = '\u2AC6\u0338',
		qN = '\u2279',
		RN = '\xD1',
		DN = '\xF1',
		NN = '\u2278',
		BN = '\u22EA',
		IN = '\u22EC',
		zN = '\u22EB',
		_N = '\u22ED',
		MN = '\u039D',
		GN = '\u03BD',
		UN = '#',
		VN = '\u2116',
		WN = '\u2007',
		FN = '\u224D\u20D2',
		jN = '\u22AC',
		HN = '\u22AD',
		YN = '\u22AE',
		$N = '\u22AF',
		KN = '\u2265\u20D2',
		XN = '>\u20D2',
		QN = '\u2904',
		ZN = '\u29DE',
		JN = '\u2902',
		eB = '\u2264\u20D2',
		tB = '<\u20D2',
		nB = '\u22B4\u20D2',
		rB = '\u2903',
		aB = '\u22B5\u20D2',
		oB = '\u223C\u20D2',
		iB = '\u2923',
		sB = '\u2196',
		lB = '\u21D6',
		dB = '\u2196',
		cB = '\u2927',
		pB = '\xD3',
		uB = '\xF3',
		mB = '\u229B',
		gB = '\xD4',
		hB = '\xF4',
		fB = '\u229A',
		yB = '\u041E',
		bB = '\u043E',
		xB = '\u229D',
		kB = '\u0150',
		SB = '\u0151',
		wB = '\u2A38',
		vB = '\u2299',
		TB = '\u29BC',
		CB = '\u0152',
		EB = '\u0153',
		AB = '\u29BF',
		OB = '\uD835\uDD12',
		PB = '\uD835\uDD2C',
		LB = '\u02DB',
		qB = '\xD2',
		RB = '\xF2',
		DB = '\u29C1',
		NB = '\u29B5',
		BB = '\u03A9',
		IB = '\u222E',
		zB = '\u21BA',
		_B = '\u29BE',
		MB = '\u29BB',
		GB = '\u203E',
		UB = '\u29C0',
		VB = '\u014C',
		WB = '\u014D',
		FB = '\u03A9',
		jB = '\u03C9',
		HB = '\u039F',
		YB = '\u03BF',
		$B = '\u29B6',
		KB = '\u2296',
		XB = '\uD835\uDD46',
		QB = '\uD835\uDD60',
		ZB = '\u29B7',
		JB = '\u201C',
		eI = '\u2018',
		tI = '\u29B9',
		nI = '\u2295',
		rI = '\u21BB',
		aI = '\u2A54',
		oI = '\u2228',
		iI = '\u2A5D',
		sI = '\u2134',
		lI = '\u2134',
		dI = '\xAA',
		cI = '\xBA',
		pI = '\u22B6',
		uI = '\u2A56',
		mI = '\u2A57',
		gI = '\u2A5B',
		hI = '\u24C8',
		fI = '\uD835\uDCAA',
		yI = '\u2134',
		bI = '\xD8',
		xI = '\xF8',
		kI = '\u2298',
		SI = '\xD5',
		wI = '\xF5',
		vI = '\u2A36',
		TI = '\u2A37',
		CI = '\u2297',
		EI = '\xD6',
		AI = '\xF6',
		OI = '\u233D',
		PI = '\u203E',
		LI = '\u23DE',
		qI = '\u23B4',
		RI = '\u23DC',
		DI = '\xB6',
		NI = '\u2225',
		BI = '\u2225',
		II = '\u2AF3',
		zI = '\u2AFD',
		_I = '\u2202',
		MI = '\u2202',
		GI = '\u041F',
		UI = '\u043F',
		VI = '%',
		WI = '.',
		FI = '\u2030',
		jI = '\u22A5',
		HI = '\u2031',
		YI = '\uD835\uDD13',
		$I = '\uD835\uDD2D',
		KI = '\u03A6',
		XI = '\u03C6',
		QI = '\u03D5',
		ZI = '\u2133',
		JI = '\u260E',
		ez = '\u03A0',
		tz = '\u03C0',
		nz = '\u22D4',
		rz = '\u03D6',
		az = '\u210F',
		oz = '\u210E',
		iz = '\u210F',
		sz = '\u2A23',
		lz = '\u229E',
		dz = '\u2A22',
		cz = '+',
		pz = '\u2214',
		uz = '\u2A25',
		mz = '\u2A72',
		gz = '\xB1',
		hz = '\xB1',
		fz = '\u2A26',
		yz = '\u2A27',
		bz = '\xB1',
		xz = '\u210C',
		kz = '\u2A15',
		Sz = '\uD835\uDD61',
		wz = '\u2119',
		vz = '\xA3',
		Tz = '\u2AB7',
		Cz = '\u2ABB',
		Ez = '\u227A',
		Az = '\u227C',
		Oz = '\u2AB7',
		Pz = '\u227A',
		Lz = '\u227C',
		qz = '\u227A',
		Rz = '\u2AAF',
		Dz = '\u227C',
		Nz = '\u227E',
		Bz = '\u2AAF',
		Iz = '\u2AB9',
		zz = '\u2AB5',
		_z = '\u22E8',
		Mz = '\u2AAF',
		Gz = '\u2AB3',
		Uz = '\u227E',
		Vz = '\u2032',
		Wz = '\u2033',
		Fz = '\u2119',
		jz = '\u2AB9',
		Hz = '\u2AB5',
		Yz = '\u22E8',
		$z = '\u220F',
		Kz = '\u220F',
		Xz = '\u232E',
		Qz = '\u2312',
		Zz = '\u2313',
		Jz = '\u221D',
		e_ = '\u221D',
		t_ = '\u2237',
		n_ = '\u221D',
		r_ = '\u227E',
		a_ = '\u22B0',
		o_ = '\uD835\uDCAB',
		i_ = '\uD835\uDCC5',
		s_ = '\u03A8',
		l_ = '\u03C8',
		d_ = '\u2008',
		c_ = '\uD835\uDD14',
		p_ = '\uD835\uDD2E',
		u_ = '\u2A0C',
		m_ = '\uD835\uDD62',
		g_ = '\u211A',
		h_ = '\u2057',
		f_ = '\uD835\uDCAC',
		y_ = '\uD835\uDCC6',
		b_ = '\u210D',
		x_ = '\u2A16',
		k_ = '?',
		S_ = '\u225F',
		w_ = '"',
		v_ = '"',
		T_ = '\u21DB',
		C_ = '\u223D\u0331',
		E_ = '\u0154',
		A_ = '\u0155',
		O_ = '\u221A',
		P_ = '\u29B3',
		L_ = '\u27E9',
		q_ = '\u27EB',
		R_ = '\u2992',
		D_ = '\u29A5',
		N_ = '\u27E9',
		B_ = '\xBB',
		I_ = '\u2975',
		z_ = '\u21E5',
		__ = '\u2920',
		M_ = '\u2933',
		G_ = '\u2192',
		U_ = '\u21A0',
		V_ = '\u21D2',
		W_ = '\u291E',
		F_ = '\u21AA',
		j_ = '\u21AC',
		H_ = '\u2945',
		Y_ = '\u2974',
		$_ = '\u2916',
		K_ = '\u21A3',
		X_ = '\u219D',
		Q_ = '\u291A',
		Z_ = '\u291C',
		J_ = '\u2236',
		eM = '\u211A',
		tM = '\u290D',
		nM = '\u290F',
		rM = '\u2910',
		aM = '\u2773',
		oM = '}',
		iM = ']',
		sM = '\u298C',
		lM = '\u298E',
		dM = '\u2990',
		cM = '\u0158',
		pM = '\u0159',
		uM = '\u0156',
		mM = '\u0157',
		gM = '\u2309',
		hM = '}',
		fM = '\u0420',
		yM = '\u0440',
		bM = '\u2937',
		xM = '\u2969',
		kM = '\u201D',
		SM = '\u201D',
		wM = '\u21B3',
		vM = '\u211C',
		TM = '\u211B',
		CM = '\u211C',
		EM = '\u211D',
		AM = '\u211C',
		OM = '\u25AD',
		PM = '\xAE',
		LM = '\xAE',
		qM = '\u220B',
		RM = '\u21CB',
		DM = '\u296F',
		NM = '\u297D',
		BM = '\u230B',
		IM = '\uD835\uDD2F',
		zM = '\u211C',
		_M = '\u2964',
		MM = '\u21C1',
		GM = '\u21C0',
		UM = '\u296C',
		VM = '\u03A1',
		WM = '\u03C1',
		FM = '\u03F1',
		jM = '\u27E9',
		HM = '\u21E5',
		YM = '\u2192',
		$M = '\u2192',
		KM = '\u21D2',
		XM = '\u21C4',
		QM = '\u21A3',
		ZM = '\u2309',
		JM = '\u27E7',
		eG = '\u295D',
		tG = '\u2955',
		nG = '\u21C2',
		rG = '\u230B',
		aG = '\u21C1',
		oG = '\u21C0',
		iG = '\u21C4',
		sG = '\u21CC',
		lG = '\u21C9',
		dG = '\u219D',
		cG = '\u21A6',
		pG = '\u22A2',
		uG = '\u295B',
		mG = '\u22CC',
		gG = '\u29D0',
		hG = '\u22B3',
		fG = '\u22B5',
		yG = '\u294F',
		bG = '\u295C',
		xG = '\u2954',
		kG = '\u21BE',
		SG = '\u2953',
		wG = '\u21C0',
		vG = '\u02DA',
		TG = '\u2253',
		CG = '\u21C4',
		EG = '\u21CC',
		AG = '\u200F',
		OG = '\u23B1',
		PG = '\u23B1',
		LG = '\u2AEE',
		qG = '\u27ED',
		RG = '\u21FE',
		DG = '\u27E7',
		NG = '\u2986',
		BG = '\uD835\uDD63',
		IG = '\u211D',
		zG = '\u2A2E',
		_G = '\u2A35',
		MG = '\u2970',
		GG = ')',
		UG = '\u2994',
		VG = '\u2A12',
		WG = '\u21C9',
		FG = '\u21DB',
		jG = '\u203A',
		HG = '\uD835\uDCC7',
		YG = '\u211B',
		$G = '\u21B1',
		KG = '\u21B1',
		XG = ']',
		QG = '\u2019',
		ZG = '\u2019',
		JG = '\u22CC',
		eU = '\u22CA',
		tU = '\u25B9',
		nU = '\u22B5',
		rU = '\u25B8',
		aU = '\u29CE',
		oU = '\u29F4',
		iU = '\u2968',
		sU = '\u211E',
		lU = '\u015A',
		dU = '\u015B',
		cU = '\u201A',
		pU = '\u2AB8',
		uU = '\u0160',
		mU = '\u0161',
		gU = '\u2ABC',
		hU = '\u227B',
		fU = '\u227D',
		yU = '\u2AB0',
		bU = '\u2AB4',
		xU = '\u015E',
		kU = '\u015F',
		SU = '\u015C',
		wU = '\u015D',
		vU = '\u2ABA',
		TU = '\u2AB6',
		CU = '\u22E9',
		EU = '\u2A13',
		AU = '\u227F',
		OU = '\u0421',
		PU = '\u0441',
		LU = '\u22A1',
		qU = '\u22C5',
		RU = '\u2A66',
		DU = '\u2925',
		NU = '\u2198',
		BU = '\u21D8',
		IU = '\u2198',
		zU = '\xA7',
		_U = ';',
		MU = '\u2929',
		GU = '\u2216',
		UU = '\u2216',
		VU = '\u2736',
		WU = '\uD835\uDD16',
		FU = '\uD835\uDD30',
		jU = '\u2322',
		HU = '\u266F',
		YU = '\u0429',
		$U = '\u0449',
		KU = '\u0428',
		XU = '\u0448',
		QU = '\u2193',
		ZU = '\u2190',
		JU = '\u2223',
		eV = '\u2225',
		tV = '\u2192',
		nV = '\u2191',
		rV = '\xAD',
		aV = '\u03A3',
		oV = '\u03C3',
		iV = '\u03C2',
		sV = '\u03C2',
		lV = '\u223C',
		dV = '\u2A6A',
		cV = '\u2243',
		pV = '\u2243',
		uV = '\u2A9E',
		mV = '\u2AA0',
		gV = '\u2A9D',
		hV = '\u2A9F',
		fV = '\u2246',
		yV = '\u2A24',
		bV = '\u2972',
		xV = '\u2190',
		kV = '\u2218',
		SV = '\u2216',
		wV = '\u2A33',
		vV = '\u29E4',
		TV = '\u2223',
		CV = '\u2323',
		EV = '\u2AAA',
		AV = '\u2AAC',
		OV = '\u2AAC\uFE00',
		PV = '\u042C',
		LV = '\u044C',
		qV = '\u233F',
		RV = '\u29C4',
		DV = '/',
		NV = '\uD835\uDD4A',
		BV = '\uD835\uDD64',
		IV = '\u2660',
		zV = '\u2660',
		_V = '\u2225',
		MV = '\u2293',
		GV = '\u2293\uFE00',
		UV = '\u2294',
		VV = '\u2294\uFE00',
		WV = '\u221A',
		FV = '\u228F',
		jV = '\u2291',
		HV = '\u228F',
		YV = '\u2291',
		$V = '\u2290',
		KV = '\u2292',
		XV = '\u2290',
		QV = '\u2292',
		ZV = '\u25A1',
		JV = '\u25A1',
		eW = '\u2293',
		tW = '\u228F',
		nW = '\u2291',
		rW = '\u2290',
		aW = '\u2292',
		oW = '\u2294',
		iW = '\u25AA',
		sW = '\u25A1',
		lW = '\u25AA',
		dW = '\u2192',
		cW = '\uD835\uDCAE',
		pW = '\uD835\uDCC8',
		uW = '\u2216',
		mW = '\u2323',
		gW = '\u22C6',
		hW = '\u22C6',
		fW = '\u2606',
		yW = '\u2605',
		bW = '\u03F5',
		xW = '\u03D5',
		kW = '\xAF',
		SW = '\u2282',
		wW = '\u22D0',
		vW = '\u2ABD',
		TW = '\u2AC5',
		CW = '\u2286',
		EW = '\u2AC3',
		AW = '\u2AC1',
		OW = '\u2ACB',
		PW = '\u228A',
		LW = '\u2ABF',
		qW = '\u2979',
		RW = '\u2282',
		DW = '\u22D0',
		NW = '\u2286',
		BW = '\u2AC5',
		IW = '\u2286',
		zW = '\u228A',
		_W = '\u2ACB',
		MW = '\u2AC7',
		GW = '\u2AD5',
		UW = '\u2AD3',
		VW = '\u2AB8',
		WW = '\u227B',
		FW = '\u227D',
		jW = '\u227B',
		HW = '\u2AB0',
		YW = '\u227D',
		$W = '\u227F',
		KW = '\u2AB0',
		XW = '\u2ABA',
		QW = '\u2AB6',
		ZW = '\u22E9',
		JW = '\u227F',
		eF = '\u220B',
		tF = '\u2211',
		nF = '\u2211',
		rF = '\u266A',
		aF = '\xB9',
		oF = '\xB2',
		iF = '\xB3',
		sF = '\u2283',
		lF = '\u22D1',
		dF = '\u2ABE',
		cF = '\u2AD8',
		pF = '\u2AC6',
		uF = '\u2287',
		mF = '\u2AC4',
		gF = '\u2283',
		hF = '\u2287',
		fF = '\u27C9',
		yF = '\u2AD7',
		bF = '\u297B',
		xF = '\u2AC2',
		kF = '\u2ACC',
		SF = '\u228B',
		wF = '\u2AC0',
		vF = '\u2283',
		TF = '\u22D1',
		CF = '\u2287',
		EF = '\u2AC6',
		AF = '\u228B',
		OF = '\u2ACC',
		PF = '\u2AC8',
		LF = '\u2AD4',
		qF = '\u2AD6',
		RF = '\u2926',
		DF = '\u2199',
		NF = '\u21D9',
		BF = '\u2199',
		IF = '\u292A',
		zF = '\xDF',
		_F = '\t',
		MF = '\u2316',
		GF = '\u03A4',
		UF = '\u03C4',
		VF = '\u23B4',
		WF = '\u0164',
		FF = '\u0165',
		jF = '\u0162',
		HF = '\u0163',
		YF = '\u0422',
		$F = '\u0442',
		KF = '\u20DB',
		XF = '\u2315',
		QF = '\uD835\uDD17',
		ZF = '\uD835\uDD31',
		JF = '\u2234',
		ej = '\u2234',
		tj = '\u2234',
		nj = '\u0398',
		rj = '\u03B8',
		aj = '\u03D1',
		oj = '\u03D1',
		ij = '\u2248',
		sj = '\u223C',
		lj = '\u205F\u200A',
		dj = '\u2009',
		cj = '\u2009',
		pj = '\u2248',
		uj = '\u223C',
		mj = '\xDE',
		gj = '\xFE',
		hj = '\u02DC',
		fj = '\u223C',
		yj = '\u2243',
		bj = '\u2245',
		xj = '\u2248',
		kj = '\u2A31',
		Sj = '\u22A0',
		wj = '\xD7',
		vj = '\u2A30',
		Tj = '\u222D',
		Cj = '\u2928',
		Ej = '\u2336',
		Aj = '\u2AF1',
		Oj = '\u22A4',
		Pj = '\uD835\uDD4B',
		Lj = '\uD835\uDD65',
		qj = '\u2ADA',
		Rj = '\u2929',
		Dj = '\u2034',
		Nj = '\u2122',
		Bj = '\u2122',
		Ij = '\u25B5',
		zj = '\u25BF',
		_j = '\u25C3',
		Mj = '\u22B4',
		Gj = '\u225C',
		Uj = '\u25B9',
		Vj = '\u22B5',
		Wj = '\u25EC',
		Fj = '\u225C',
		jj = '\u2A3A',
		Hj = '\u20DB',
		Yj = '\u2A39',
		$j = '\u29CD',
		Kj = '\u2A3B',
		Xj = '\u23E2',
		Qj = '\uD835\uDCAF',
		Zj = '\uD835\uDCC9',
		Jj = '\u0426',
		eH = '\u0446',
		tH = '\u040B',
		nH = '\u045B',
		rH = '\u0166',
		aH = '\u0167',
		oH = '\u226C',
		iH = '\u219E',
		sH = '\u21A0',
		lH = '\xDA',
		dH = '\xFA',
		cH = '\u2191',
		pH = '\u219F',
		uH = '\u21D1',
		mH = '\u2949',
		gH = '\u040E',
		hH = '\u045E',
		fH = '\u016C',
		yH = '\u016D',
		bH = '\xDB',
		xH = '\xFB',
		kH = '\u0423',
		SH = '\u0443',
		wH = '\u21C5',
		vH = '\u0170',
		TH = '\u0171',
		CH = '\u296E',
		EH = '\u297E',
		AH = '\uD835\uDD18',
		OH = '\uD835\uDD32',
		PH = '\xD9',
		LH = '\xF9',
		qH = '\u2963',
		RH = '\u21BF',
		DH = '\u21BE',
		NH = '\u2580',
		BH = '\u231C',
		IH = '\u231C',
		zH = '\u230F',
		_H = '\u25F8',
		MH = '\u016A',
		GH = '\u016B',
		UH = '\xA8',
		VH = '_',
		WH = '\u23DF',
		FH = '\u23B5',
		jH = '\u23DD',
		HH = '\u22C3',
		YH = '\u228E',
		$H = '\u0172',
		KH = '\u0173',
		XH = '\uD835\uDD4C',
		QH = '\uD835\uDD66',
		ZH = '\u2912',
		JH = '\u2191',
		eY = '\u2191',
		tY = '\u21D1',
		nY = '\u21C5',
		rY = '\u2195',
		aY = '\u2195',
		oY = '\u21D5',
		iY = '\u296E',
		sY = '\u21BF',
		lY = '\u21BE',
		dY = '\u228E',
		cY = '\u2196',
		pY = '\u2197',
		uY = '\u03C5',
		mY = '\u03D2',
		gY = '\u03D2',
		hY = '\u03A5',
		fY = '\u03C5',
		yY = '\u21A5',
		bY = '\u22A5',
		xY = '\u21C8',
		kY = '\u231D',
		SY = '\u231D',
		wY = '\u230E',
		vY = '\u016E',
		TY = '\u016F',
		CY = '\u25F9',
		EY = '\uD835\uDCB0',
		AY = '\uD835\uDCCA',
		OY = '\u22F0',
		PY = '\u0168',
		LY = '\u0169',
		qY = '\u25B5',
		RY = '\u25B4',
		DY = '\u21C8',
		NY = '\xDC',
		BY = '\xFC',
		IY = '\u29A7',
		zY = '\u299C',
		_Y = '\u03F5',
		MY = '\u03F0',
		GY = '\u2205',
		UY = '\u03D5',
		VY = '\u03D6',
		WY = '\u221D',
		FY = '\u2195',
		jY = '\u21D5',
		HY = '\u03F1',
		YY = '\u03C2',
		$Y = '\u228A\uFE00',
		KY = '\u2ACB\uFE00',
		XY = '\u228B\uFE00',
		QY = '\u2ACC\uFE00',
		ZY = '\u03D1',
		JY = '\u22B2',
		e$ = '\u22B3',
		t$ = '\u2AE8',
		n$ = '\u2AEB',
		r$ = '\u2AE9',
		a$ = '\u0412',
		o$ = '\u0432',
		i$ = '\u22A2',
		s$ = '\u22A8',
		l$ = '\u22A9',
		d$ = '\u22AB',
		c$ = '\u2AE6',
		p$ = '\u22BB',
		u$ = '\u2228',
		m$ = '\u22C1',
		g$ = '\u225A',
		h$ = '\u22EE',
		f$ = '|',
		y$ = '\u2016',
		b$ = '|',
		x$ = '\u2016',
		k$ = '\u2223',
		S$ = '|',
		w$ = '\u2758',
		v$ = '\u2240',
		T$ = '\u200A',
		C$ = '\uD835\uDD19',
		E$ = '\uD835\uDD33',
		A$ = '\u22B2',
		O$ = '\u2282\u20D2',
		P$ = '\u2283\u20D2',
		L$ = '\uD835\uDD4D',
		q$ = '\uD835\uDD67',
		R$ = '\u221D',
		D$ = '\u22B3',
		N$ = '\uD835\uDCB1',
		B$ = '\uD835\uDCCB',
		I$ = '\u2ACB\uFE00',
		z$ = '\u228A\uFE00',
		_$ = '\u2ACC\uFE00',
		M$ = '\u228B\uFE00',
		G$ = '\u22AA',
		U$ = '\u299A',
		V$ = '\u0174',
		W$ = '\u0175',
		F$ = '\u2A5F',
		j$ = '\u2227',
		H$ = '\u22C0',
		Y$ = '\u2259',
		$$ = '\u2118',
		K$ = '\uD835\uDD1A',
		X$ = '\uD835\uDD34',
		Q$ = '\uD835\uDD4E',
		Z$ = '\uD835\uDD68',
		J$ = '\u2118',
		eK = '\u2240',
		tK = '\u2240',
		nK = '\uD835\uDCB2',
		rK = '\uD835\uDCCC',
		aK = '\u22C2',
		oK = '\u25EF',
		iK = '\u22C3',
		sK = '\u25BD',
		lK = '\uD835\uDD1B',
		dK = '\uD835\uDD35',
		cK = '\u27F7',
		pK = '\u27FA',
		uK = '\u039E',
		mK = '\u03BE',
		gK = '\u27F5',
		hK = '\u27F8',
		fK = '\u27FC',
		yK = '\u22FB',
		bK = '\u2A00',
		xK = '\uD835\uDD4F',
		kK = '\uD835\uDD69',
		SK = '\u2A01',
		wK = '\u2A02',
		vK = '\u27F6',
		TK = '\u27F9',
		CK = '\uD835\uDCB3',
		EK = '\uD835\uDCCD',
		AK = '\u2A06',
		OK = '\u2A04',
		PK = '\u25B3',
		LK = '\u22C1',
		qK = '\u22C0',
		RK = '\xDD',
		DK = '\xFD',
		NK = '\u042F',
		BK = '\u044F',
		IK = '\u0176',
		zK = '\u0177',
		_K = '\u042B',
		MK = '\u044B',
		GK = '\xA5',
		UK = '\uD835\uDD1C',
		VK = '\uD835\uDD36',
		WK = '\u0407',
		FK = '\u0457',
		jK = '\uD835\uDD50',
		HK = '\uD835\uDD6A',
		YK = '\uD835\uDCB4',
		$K = '\uD835\uDCCE',
		KK = '\u042E',
		XK = '\u044E',
		QK = '\xFF',
		ZK = '\u0178',
		JK = '\u0179',
		eX = '\u017A',
		tX = '\u017D',
		nX = '\u017E',
		rX = '\u0417',
		aX = '\u0437',
		oX = '\u017B',
		iX = '\u017C',
		sX = '\u2128',
		lX = '\u200B',
		dX = '\u0396',
		cX = '\u03B6',
		pX = '\uD835\uDD37',
		uX = '\u2128',
		mX = '\u0416',
		gX = '\u0436',
		hX = '\u21DD',
		fX = '\uD835\uDD6B',
		yX = '\u2124',
		bX = '\uD835\uDCB5',
		xX = '\uD835\uDCCF',
		kX = '\u200D',
		SX = '\u200C',
		wX = {
			Aacute: zc,
			aacute: _c,
			Abreve: Mc,
			abreve: Gc,
			ac: Uc,
			acd: Vc,
			acE: Wc,
			Acirc: Fc,
			acirc: jc,
			acute: Hc,
			Acy: Yc,
			acy: $c,
			AElig: Kc,
			aelig: Xc,
			af: Qc,
			Afr: Zc,
			afr: Jc,
			Agrave: ep,
			agrave: tp,
			alefsym: np,
			aleph: rp,
			Alpha: op,
			alpha: ip,
			Amacr: sp,
			amacr: lp,
			amalg: dp,
			amp: cp,
			AMP: pp,
			andand: up,
			And: gp,
			and: hp,
			andd: fp,
			andslope: yp,
			andv: bp,
			ang: xp,
			ange: kp,
			angle: Sp,
			angmsdaa: vp,
			angmsdab: Tp,
			angmsdac: Cp,
			angmsdad: Ep,
			angmsdae: Ap,
			angmsdaf: Op,
			angmsdag: Pp,
			angmsdah: Lp,
			angmsd: qp,
			angrt: Rp,
			angrtvb: Dp,
			angrtvbd: Np,
			angsph: Bp,
			angst: Ip,
			angzarr: zp,
			Aogon: _p,
			aogon: Mp,
			Aopf: Gp,
			aopf: Up,
			apacir: Vp,
			ap: Wp,
			apE: Fp,
			ape: jp,
			apid: Hp,
			apos: Yp,
			ApplyFunction: $p,
			approx: Kp,
			approxeq: Xp,
			Aring: Qp,
			aring: Zp,
			Ascr: Jp,
			ascr: eu,
			Assign: tu,
			ast: ru,
			asymp: au,
			asympeq: ou,
			Atilde: iu,
			atilde: su,
			Auml: lu,
			auml: du,
			awconint: cu,
			awint: pu,
			backcong: uu,
			backepsilon: gu,
			backprime: hu,
			backsim: fu,
			backsimeq: yu,
			Backslash: bu,
			Barv: xu,
			barvee: ku,
			barwed: Su,
			Barwed: wu,
			barwedge: vu,
			bbrk: Tu,
			bbrktbrk: Cu,
			bcong: Eu,
			Bcy: Au,
			bcy: Ou,
			bdquo: Pu,
			becaus: Lu,
			because: qu,
			Because: Ru,
			bemptyv: Du,
			bepsi: Bu,
			bernou: Iu,
			Bernoullis: zu,
			Beta: _u,
			beta: Gu,
			beth: Uu,
			between: Vu,
			Bfr: Wu,
			bfr: Fu,
			bigcap: ju,
			bigcirc: Hu,
			bigcup: Yu,
			bigodot: $u,
			bigoplus: Ku,
			bigotimes: Xu,
			bigsqcup: Qu,
			bigstar: Zu,
			bigtriangledown: Ju,
			bigtriangleup: em,
			biguplus: tm,
			bigvee: nm,
			bigwedge: rm,
			bkarow: am,
			blacklozenge: om,
			blacksquare: im,
			blacktriangle: sm,
			blacktriangledown: lm,
			blacktriangleleft: dm,
			blacktriangleright: cm,
			blank: um,
			blk12: mm,
			blk14: gm,
			blk34: hm,
			block: fm,
			bne: ym,
			bnequiv: bm,
			bNot: xm,
			bnot: km,
			Bopf: Sm,
			bopf: wm,
			bot: vm,
			bottom: Tm,
			bowtie: Cm,
			boxbox: Em,
			boxdl: Am,
			boxdL: Om,
			boxDl: Pm,
			boxDL: Lm,
			boxdr: qm,
			boxdR: Rm,
			boxDr: Dm,
			boxDR: Nm,
			boxh: Bm,
			boxH: zm,
			boxhd: _m,
			boxHd: Mm,
			boxhD: Gm,
			boxHD: Um,
			boxhu: Vm,
			boxHu: Wm,
			boxhU: Fm,
			boxHU: jm,
			boxminus: Hm,
			boxplus: Ym,
			boxtimes: $m,
			boxul: Km,
			boxuL: Xm,
			boxUl: Qm,
			boxUL: Zm,
			boxur: Jm,
			boxuR: tg,
			boxUr: ng,
			boxUR: rg,
			boxv: ag,
			boxV: og,
			boxvh: ig,
			boxvH: sg,
			boxVh: dg,
			boxVH: cg,
			boxvl: pg,
			boxvL: ug,
			boxVl: mg,
			boxVL: hg,
			boxvr: fg,
			boxvR: yg,
			boxVr: bg,
			boxVR: xg,
			bprime: kg,
			breve: Sg,
			Breve: wg,
			brvbar: vg,
			bscr: Tg,
			Bscr: Cg,
			bsemi: Eg,
			bsim: Ag,
			bsime: Og,
			bsolb: Pg,
			bsol: Lg,
			bsolhsub: qg,
			bull: Rg,
			bullet: Dg,
			bump: Ng,
			bumpE: Bg,
			bumpe: Ig,
			Bumpeq: zg,
			bumpeq: _g,
			Cacute: Mg,
			cacute: Ug,
			capand: Vg,
			capbrcup: Wg,
			capcap: Fg,
			cap: jg,
			Cap: Hg,
			capcup: Yg,
			capdot: $g,
			CapitalDifferentialD: Kg,
			caps: Xg,
			caret: Qg,
			caron: Zg,
			Cayleys: Jg,
			ccaps: eh,
			Ccaron: th,
			ccaron: nh,
			Ccedil: rh,
			ccedil: ah,
			Ccirc: oh,
			ccirc: ih,
			Cconint: sh,
			ccups: lh,
			ccupssm: dh,
			Cdot: ch,
			cdot: ph,
			cedil: uh,
			Cedilla: mh,
			cemptyv: gh,
			cent: hh,
			centerdot: fh,
			CenterDot: yh,
			cfr: bh,
			Cfr: xh,
			CHcy: kh,
			chcy: Sh,
			check: wh,
			checkmark: vh,
			Chi: Th,
			chi: Ch,
			circ: Eh,
			circeq: Ah,
			circlearrowleft: Oh,
			circlearrowright: Ph,
			circledast: Lh,
			circledcirc: qh,
			circleddash: Rh,
			CircleDot: Dh,
			circledR: Nh,
			circledS: Bh,
			CircleMinus: Ih,
			CirclePlus: zh,
			CircleTimes: _h,
			cir: Mh,
			cirE: Gh,
			cire: Uh,
			cirfnint: Vh,
			cirmid: Wh,
			cirscir: Fh,
			ClockwiseContourIntegral: jh,
			CloseCurlyDoubleQuote: Hh,
			CloseCurlyQuote: Yh,
			clubs: $h,
			clubsuit: Kh,
			colon: Xh,
			Colon: Qh,
			Colone: Zh,
			colone: Jh,
			coloneq: ef,
			comma: tf,
			commat: nf,
			comp: rf,
			compfn: of ,
			complement: sf,
			complexes: lf,
			cong: df,
			congdot: cf,
			Congruent: pf,
			conint: uf,
			Conint: mf,
			ContourIntegral: gf,
			copf: hf,
			Copf: ff,
			coprod: yf,
			Coproduct: bf,
			copy: xf,
			COPY: kf,
			copysr: Sf,
			CounterClockwiseContourIntegral: wf,
			crarr: vf,
			cross: Tf,
			Cross: Cf,
			Cscr: Ef,
			cscr: Af,
			csub: Of,
			csube: Pf,
			csup: Lf,
			csupe: qf,
			ctdot: Rf,
			cudarrl: Df,
			cudarrr: Nf,
			cuepr: Bf,
			cuesc: If,
			cularr: zf,
			cularrp: _f,
			cupbrcap: Mf,
			cupcap: Gf,
			CupCap: Uf,
			cup: Vf,
			Cup: Wf,
			cupcup: Ff,
			cupdot: jf,
			cupor: Hf,
			cups: Yf,
			curarr: $f,
			curarrm: Kf,
			curlyeqprec: Xf,
			curlyeqsucc: Qf,
			curlyvee: Zf,
			curlywedge: Jf,
			curren: ey,
			curvearrowleft: ty,
			curvearrowright: ny,
			cuvee: ry,
			cuwed: ay,
			cwconint: oy,
			cwint: iy,
			cylcty: sy,
			dagger: ly,
			Dagger: dy,
			daleth: cy,
			darr: py,
			Darr: uy,
			dArr: my,
			dash: gy,
			Dashv: hy,
			dashv: fy,
			dbkarow: yy,
			dblac: by,
			Dcaron: xy,
			dcaron: ky,
			Dcy: Sy,
			dcy: wy,
			ddagger: vy,
			ddarr: Ty,
			DD: Cy,
			dd: Ey,
			DDotrahd: Ay,
			ddotseq: Oy,
			deg: Py,
			Del: Ly,
			Delta: qy,
			delta: Ry,
			demptyv: Dy,
			dfisht: Ny,
			Dfr: By,
			dfr: Iy,
			dHar: zy,
			dharl: _y,
			dharr: My,
			DiacriticalAcute: Gy,
			DiacriticalDot: Uy,
			DiacriticalDoubleAcute: Vy,
			DiacriticalGrave: Wy,
			DiacriticalTilde: Fy,
			diam: jy,
			diamond: Hy,
			Diamond: Yy,
			diamondsuit: $y,
			diams: Ky,
			die: Xy,
			DifferentialD: Qy,
			digamma: Zy,
			disin: Jy,
			div: eb,
			divide: tb,
			divideontimes: nb,
			divonx: rb,
			DJcy: ab,
			djcy: ob,
			dlcorn: ib,
			dlcrop: sb,
			dollar: lb,
			Dopf: db,
			dopf: cb,
			Dot: pb,
			dot: ub,
			DotDot: mb,
			doteq: gb,
			doteqdot: hb,
			DotEqual: fb,
			dotminus: yb,
			dotplus: bb,
			dotsquare: xb,
			doublebarwedge: kb,
			DoubleContourIntegral: Sb,
			DoubleDot: wb,
			DoubleDownArrow: vb,
			DoubleLeftArrow: Tb,
			DoubleLeftRightArrow: Cb,
			DoubleLeftTee: Eb,
			DoubleLongLeftArrow: Ab,
			DoubleLongLeftRightArrow: Ob,
			DoubleLongRightArrow: Pb,
			DoubleRightArrow: Lb,
			DoubleRightTee: qb,
			DoubleUpArrow: Rb,
			DoubleUpDownArrow: Db,
			DoubleVerticalBar: Nb,
			DownArrowBar: Bb,
			downarrow: Ib,
			DownArrow: zb,
			Downarrow: _b,
			DownArrowUpArrow: Mb,
			DownBreve: Gb,
			downdownarrows: Ub,
			downharpoonleft: Vb,
			downharpoonright: Wb,
			DownLeftRightVector: Fb,
			DownLeftTeeVector: jb,
			DownLeftVectorBar: Hb,
			DownLeftVector: Yb,
			DownRightTeeVector: $b,
			DownRightVectorBar: Kb,
			DownRightVector: Xb,
			DownTeeArrow: Qb,
			DownTee: Zb,
			drbkarow: Jb,
			drcorn: ex,
			drcrop: tx,
			Dscr: nx,
			dscr: ax,
			DScy: ox,
			dscy: ix,
			dsol: sx,
			Dstrok: lx,
			dstrok: dx,
			dtdot: cx,
			dtri: px,
			dtrif: ux,
			duarr: mx,
			duhar: gx,
			dwangle: hx,
			DZcy: fx,
			dzcy: yx,
			dzigrarr: bx,
			Eacute: xx,
			eacute: kx,
			easter: Sx,
			Ecaron: wx,
			ecaron: vx,
			Ecirc: Tx,
			ecirc: Cx,
			ecir: Ex,
			ecolon: Ax,
			Ecy: Ox,
			ecy: Px,
			eDDot: Lx,
			Edot: qx,
			edot: Rx,
			eDot: Dx,
			ee: Nx,
			efDot: Bx,
			Efr: Ix,
			efr: zx,
			eg: _x,
			Egrave: Mx,
			egrave: Gx,
			egs: Ux,
			egsdot: Vx,
			el: Wx,
			Element: Fx,
			elinters: jx,
			ell: Hx,
			els: Yx,
			elsdot: $x,
			Emacr: Kx,
			emacr: Xx,
			empty: Qx,
			emptyset: Zx,
			EmptySmallSquare: Jx,
			emptyv: ek,
			EmptyVerySmallSquare: tk,
			emsp13: nk,
			emsp14: rk,
			emsp: ak,
			ENG: ok,
			eng: ik,
			ensp: sk,
			Eogon: lk,
			eogon: dk,
			Eopf: ck,
			eopf: pk,
			epar: uk,
			eparsl: mk,
			eplus: gk,
			epsi: hk,
			Epsilon: fk,
			epsilon: yk,
			epsiv: bk,
			eqcirc: xk,
			eqcolon: kk,
			eqsim: Sk,
			eqslantgtr: wk,
			eqslantless: vk,
			Equal: Tk,
			equals: Ck,
			EqualTilde: Ek,
			equest: Ak,
			Equilibrium: Ok,
			equiv: Pk,
			equivDD: Lk,
			eqvparsl: qk,
			erarr: Rk,
			erDot: Dk,
			escr: Nk,
			Escr: Bk,
			esdot: Ik,
			Esim: zk,
			esim: _k,
			Eta: Mk,
			eta: Gk,
			ETH: Uk,
			eth: Vk,
			Euml: Wk,
			euml: Fk,
			euro: jk,
			excl: Hk,
			exist: Yk,
			Exists: $k,
			expectation: Kk,
			exponentiale: Xk,
			ExponentialE: Qk,
			fallingdotseq: Zk,
			Fcy: Jk,
			fcy: eS,
			female: tS,
			ffilig: nS,
			fflig: rS,
			ffllig: aS,
			Ffr: iS,
			ffr: sS,
			filig: lS,
			FilledSmallSquare: dS,
			FilledVerySmallSquare: cS,
			fjlig: pS,
			flat: uS,
			fllig: mS,
			fltns: gS,
			fnof: hS,
			Fopf: fS,
			fopf: yS,
			forall: bS,
			ForAll: xS,
			fork: kS,
			forkv: SS,
			Fouriertrf: wS,
			fpartint: vS,
			frac12: TS,
			frac13: CS,
			frac14: ES,
			frac15: AS,
			frac16: OS,
			frac18: PS,
			frac23: LS,
			frac25: qS,
			frac34: RS,
			frac35: DS,
			frac38: NS,
			frac45: BS,
			frac56: IS,
			frac58: zS,
			frac78: _S,
			frasl: MS,
			frown: GS,
			fscr: US,
			Fscr: VS,
			gacute: WS,
			Gamma: FS,
			gamma: jS,
			Gammad: HS,
			gammad: YS,
			gap: $S,
			Gbreve: KS,
			gbreve: XS,
			Gcedil: QS,
			Gcirc: ZS,
			gcirc: JS,
			Gcy: ew,
			gcy: tw,
			Gdot: nw,
			gdot: rw,
			ge: aw,
			gE: ow,
			gEl: iw,
			gel: sw,
			geq: lw,
			geqq: dw,
			geqslant: cw,
			gescc: pw,
			ges: uw,
			gesdot: mw,
			gesdoto: gw,
			gesdotol: hw,
			gesl: fw,
			gesles: yw,
			Gfr: bw,
			gfr: xw,
			gg: kw,
			Gg: Sw,
			ggg: ww,
			gimel: vw,
			GJcy: Tw,
			gjcy: Cw,
			gla: Ew,
			gl: Aw,
			glE: Ow,
			glj: Pw,
			gnap: Lw,
			gnapprox: qw,
			gne: Rw,
			gnE: Dw,
			gneq: Nw,
			gneqq: Bw,
			gnsim: Iw,
			Gopf: zw,
			gopf: _w,
			grave: Mw,
			GreaterEqual: Gw,
			GreaterEqualLess: Uw,
			GreaterFullEqual: Vw,
			GreaterGreater: Ww,
			GreaterLess: Fw,
			GreaterSlantEqual: jw,
			GreaterTilde: Hw,
			Gscr: Yw,
			gscr: $w,
			gsim: Kw,
			gsime: Xw,
			gsiml: Qw,
			gtcc: Zw,
			gtcir: Jw,
			gt: ev,
			GT: tv,
			Gt: nv,
			gtdot: rv,
			gtlPar: av,
			gtquest: ov,
			gtrapprox: iv,
			gtrarr: sv,
			gtrdot: lv,
			gtreqless: dv,
			gtreqqless: cv,
			gtrless: pv,
			gtrsim: uv,
			gvertneqq: mv,
			gvnE: gv,
			Hacek: hv,
			hairsp: fv,
			half: yv,
			hamilt: bv,
			HARDcy: xv,
			hardcy: kv,
			harrcir: Sv,
			harr: wv,
			hArr: vv,
			harrw: Tv,
			Hat: Cv,
			hbar: Ev,
			Hcirc: Av,
			hcirc: Ov,
			hearts: Pv,
			heartsuit: Lv,
			hellip: qv,
			hercon: Rv,
			hfr: Dv,
			Hfr: Nv,
			HilbertSpace: Bv,
			hksearow: Iv,
			hkswarow: zv,
			hoarr: _v,
			homtht: Mv,
			hookleftarrow: Gv,
			hookrightarrow: Uv,
			hopf: Vv,
			Hopf: Wv,
			horbar: Fv,
			HorizontalLine: jv,
			hscr: Hv,
			Hscr: Yv,
			hslash: $v,
			Hstrok: Kv,
			hstrok: Xv,
			HumpDownHump: Qv,
			HumpEqual: Zv,
			hybull: Jv,
			hyphen: eT,
			Iacute: tT,
			iacute: nT,
			ic: rT,
			Icirc: aT,
			icirc: oT,
			Icy: iT,
			icy: sT,
			Idot: lT,
			IEcy: dT,
			iecy: cT,
			iexcl: pT,
			iff: uT,
			ifr: mT,
			Ifr: gT,
			Igrave: hT,
			igrave: fT,
			ii: yT,
			iiiint: bT,
			iiint: xT,
			iinfin: kT,
			iiota: ST,
			IJlig: wT,
			ijlig: vT,
			Imacr: TT,
			imacr: CT,
			image: ET,
			ImaginaryI: AT,
			imagline: OT,
			imagpart: PT,
			imath: qT,
			Im: RT,
			imof: DT,
			imped: NT,
			Implies: BT,
			incare: IT,
			infin: zT,
			infintie: _T,
			inodot: MT,
			intcal: UT,
			int: VT,
			Int: WT,
			integers: FT,
			Integral: jT,
			intercal: HT,
			Intersection: YT,
			intlarhk: $T,
			intprod: KT,
			InvisibleComma: XT,
			InvisibleTimes: QT,
			IOcy: ZT,
			iocy: JT,
			Iogon: eC,
			iogon: tC,
			Iopf: nC,
			iopf: rC,
			Iota: aC,
			iota: oC,
			iprod: iC,
			iquest: sC,
			iscr: lC,
			Iscr: dC,
			isin: cC,
			isindot: pC,
			isinE: uC,
			isins: mC,
			isinsv: gC,
			isinv: hC,
			it: fC,
			Itilde: yC,
			itilde: bC,
			Iukcy: xC,
			iukcy: kC,
			Iuml: SC,
			iuml: wC,
			Jcirc: vC,
			jcirc: TC,
			Jcy: CC,
			jcy: EC,
			Jfr: AC,
			jfr: OC,
			jmath: PC,
			Jopf: LC,
			jopf: qC,
			Jscr: RC,
			jscr: DC,
			Jsercy: NC,
			jsercy: BC,
			Jukcy: IC,
			jukcy: zC,
			Kappa: _C,
			kappa: MC,
			kappav: GC,
			Kcedil: UC,
			kcedil: VC,
			Kcy: WC,
			kcy: FC,
			Kfr: jC,
			kfr: HC,
			kgreen: YC,
			KHcy: $C,
			khcy: KC,
			KJcy: XC,
			kjcy: QC,
			Kopf: ZC,
			kopf: JC,
			Kscr: eE,
			kscr: tE,
			lAarr: nE,
			Lacute: rE,
			lacute: aE,
			laemptyv: oE,
			lagran: iE,
			Lambda: sE,
			lambda: dE,
			lang: cE,
			Lang: pE,
			langd: uE,
			langle: mE,
			lap: hE,
			Laplacetrf: fE,
			laquo: yE,
			larrb: bE,
			larrbfs: xE,
			larr: kE,
			Larr: SE,
			lArr: wE,
			larrfs: vE,
			larrhk: TE,
			larrlp: CE,
			larrpl: EE,
			larrsim: AE,
			larrtl: OE,
			latail: PE,
			lAtail: LE,
			lat: qE,
			late: RE,
			lates: DE,
			lbarr: NE,
			lBarr: BE,
			lbbrk: IE,
			lbrace: zE,
			lbrack: _E,
			lbrke: ME,
			lbrksld: GE,
			lbrkslu: UE,
			Lcaron: VE,
			lcaron: WE,
			Lcedil: FE,
			lcedil: jE,
			lceil: HE,
			lcub: YE,
			Lcy: $E,
			lcy: KE,
			ldca: XE,
			ldquo: QE,
			ldquor: ZE,
			ldrdhar: JE,
			ldrushar: eA,
			ldsh: tA,
			le: nA,
			lE: rA,
			LeftAngleBracket: aA,
			LeftArrowBar: oA,
			leftarrow: iA,
			LeftArrow: sA,
			Leftarrow: lA,
			LeftArrowRightArrow: dA,
			leftarrowtail: cA,
			LeftCeiling: pA,
			LeftDoubleBracket: uA,
			LeftDownTeeVector: mA,
			LeftDownVectorBar: gA,
			LeftDownVector: hA,
			LeftFloor: fA,
			leftharpoondown: yA,
			leftharpoonup: bA,
			leftleftarrows: xA,
			leftrightarrow: kA,
			LeftRightArrow: SA,
			Leftrightarrow: wA,
			leftrightarrows: vA,
			leftrightharpoons: TA,
			leftrightsquigarrow: CA,
			LeftRightVector: EA,
			LeftTeeArrow: AA,
			LeftTee: OA,
			LeftTeeVector: PA,
			leftthreetimes: LA,
			LeftTriangleBar: qA,
			LeftTriangle: RA,
			LeftTriangleEqual: DA,
			LeftUpDownVector: NA,
			LeftUpTeeVector: BA,
			LeftUpVectorBar: IA,
			LeftUpVector: zA,
			LeftVectorBar: _A,
			LeftVector: MA,
			lEg: GA,
			leg: UA,
			leq: VA,
			leqq: WA,
			leqslant: FA,
			lescc: jA,
			les: HA,
			lesdot: YA,
			lesdoto: $A,
			lesdotor: KA,
			lesg: XA,
			lesges: QA,
			lessapprox: ZA,
			lessdot: JA,
			lesseqgtr: eO,
			lesseqqgtr: tO,
			LessEqualGreater: nO,
			LessFullEqual: rO,
			LessGreater: aO,
			lessgtr: oO,
			LessLess: iO,
			lesssim: sO,
			LessSlantEqual: lO,
			LessTilde: dO,
			lfisht: cO,
			lfloor: pO,
			Lfr: uO,
			lfr: mO,
			lg: gO,
			lgE: hO,
			lHar: fO,
			lhard: yO,
			lharu: bO,
			lharul: xO,
			lhblk: kO,
			LJcy: SO,
			ljcy: wO,
			llarr: vO,
			ll: TO,
			Ll: CO,
			llcorner: EO,
			Lleftarrow: AO,
			llhard: OO,
			lltri: PO,
			Lmidot: LO,
			lmidot: qO,
			lmoustache: RO,
			lmoust: DO,
			lnap: NO,
			lnapprox: BO,
			lne: IO,
			lnE: zO,
			lneq: _O,
			lneqq: MO,
			lnsim: GO,
			loang: UO,
			loarr: VO,
			lobrk: WO,
			longleftarrow: FO,
			LongLeftArrow: jO,
			Longleftarrow: HO,
			longleftrightarrow: YO,
			LongLeftRightArrow: $O,
			Longleftrightarrow: KO,
			longmapsto: XO,
			longrightarrow: QO,
			LongRightArrow: ZO,
			Longrightarrow: JO,
			looparrowleft: eP,
			looparrowright: tP,
			lopar: nP,
			Lopf: rP,
			lopf: aP,
			loplus: oP,
			lotimes: iP,
			lowast: sP,
			lowbar: lP,
			LowerLeftArrow: dP,
			LowerRightArrow: cP,
			loz: pP,
			lozenge: uP,
			lozf: mP,
			lpar: gP,
			lparlt: hP,
			lrarr: fP,
			lrcorner: yP,
			lrhar: bP,
			lrhard: xP,
			lrm: kP,
			lrtri: SP,
			lsaquo: wP,
			lscr: vP,
			Lscr: TP,
			lsh: CP,
			Lsh: EP,
			lsim: AP,
			lsime: OP,
			lsimg: PP,
			lsqb: LP,
			lsquo: qP,
			lsquor: RP,
			Lstrok: DP,
			lstrok: NP,
			ltcc: BP,
			ltcir: IP,
			lt: zP,
			LT: _P,
			Lt: MP,
			ltdot: GP,
			lthree: UP,
			ltimes: VP,
			ltlarr: WP,
			ltquest: FP,
			ltri: jP,
			ltrie: HP,
			ltrif: YP,
			ltrPar: $P,
			lurdshar: KP,
			luruhar: XP,
			lvertneqq: QP,
			lvnE: ZP,
			macr: JP,
			male: eL,
			malt: tL,
			maltese: nL,
			map: rL,
			mapsto: aL,
			mapstodown: oL,
			mapstoleft: iL,
			mapstoup: sL,
			marker: lL,
			mcomma: dL,
			Mcy: cL,
			mcy: pL,
			mdash: uL,
			mDDot: mL,
			measuredangle: gL,
			MediumSpace: hL,
			Mellintrf: fL,
			Mfr: yL,
			mfr: bL,
			mho: xL,
			micro: kL,
			midast: SL,
			midcir: wL,
			mid: vL,
			middot: TL,
			minusb: CL,
			minus: EL,
			minusd: AL,
			minusdu: OL,
			MinusPlus: PL,
			mlcp: LL,
			mldr: qL,
			mnplus: RL,
			models: DL,
			Mopf: NL,
			mopf: BL,
			mp: IL,
			mscr: zL,
			Mscr: _L,
			mstpos: ML,
			Mu: GL,
			mu: UL,
			multimap: VL,
			mumap: WL,
			nabla: FL,
			Nacute: jL,
			nacute: HL,
			nang: YL,
			nap: $L,
			napE: KL,
			napid: XL,
			napos: QL,
			napprox: ZL,
			natural: JL,
			naturals: eq,
			natur: tq,
			nbsp: nq,
			nbump: rq,
			nbumpe: aq,
			ncap: oq,
			Ncaron: iq,
			ncaron: sq,
			Ncedil: lq,
			ncedil: dq,
			ncong: cq,
			ncongdot: pq,
			ncup: uq,
			Ncy: mq,
			ncy: gq,
			ndash: hq,
			nearhk: fq,
			nearr: yq,
			neArr: bq,
			nearrow: xq,
			ne: kq,
			nedot: Sq,
			NegativeMediumSpace: wq,
			NegativeThickSpace: vq,
			NegativeThinSpace: Tq,
			NegativeVeryThinSpace: Cq,
			nequiv: Eq,
			nesear: Aq,
			nesim: Oq,
			NestedGreaterGreater: Pq,
			NestedLessLess: Lq,
			NewLine: qq,
			nexist: Rq,
			nexists: Dq,
			Nfr: Nq,
			nfr: Bq,
			ngE: Iq,
			nge: zq,
			ngeq: _q,
			ngeqq: Mq,
			ngeqslant: Gq,
			nges: Uq,
			nGg: Vq,
			ngsim: Wq,
			nGt: Fq,
			ngt: jq,
			ngtr: Hq,
			nGtv: Yq,
			nharr: $q,
			nhArr: Kq,
			nhpar: Xq,
			ni: Qq,
			nis: Zq,
			nisd: Jq,
			niv: eR,
			NJcy: tR,
			njcy: nR,
			nlarr: rR,
			nlArr: aR,
			nldr: oR,
			nlE: iR,
			nle: sR,
			nleftarrow: lR,
			nLeftarrow: dR,
			nleftrightarrow: cR,
			nLeftrightarrow: pR,
			nleq: uR,
			nleqq: mR,
			nleqslant: gR,
			nles: hR,
			nless: fR,
			nLl: yR,
			nlsim: bR,
			nLt: xR,
			nlt: kR,
			nltri: SR,
			nltrie: wR,
			nLtv: vR,
			nmid: TR,
			NoBreak: CR,
			NonBreakingSpace: ER,
			nopf: AR,
			Nopf: OR,
			Not: PR,
			not: LR,
			NotCongruent: qR,
			NotCupCap: RR,
			NotDoubleVerticalBar: DR,
			NotElement: NR,
			NotEqual: BR,
			NotEqualTilde: IR,
			NotExists: zR,
			NotGreater: _R,
			NotGreaterEqual: MR,
			NotGreaterFullEqual: GR,
			NotGreaterGreater: UR,
			NotGreaterLess: VR,
			NotGreaterSlantEqual: WR,
			NotGreaterTilde: FR,
			NotHumpDownHump: jR,
			NotHumpEqual: HR,
			notin: YR,
			notindot: $R,
			notinE: KR,
			notinva: XR,
			notinvb: QR,
			notinvc: ZR,
			NotLeftTriangleBar: JR,
			NotLeftTriangle: eD,
			NotLeftTriangleEqual: tD,
			NotLess: nD,
			NotLessEqual: rD,
			NotLessGreater: aD,
			NotLessLess: oD,
			NotLessSlantEqual: iD,
			NotLessTilde: sD,
			NotNestedGreaterGreater: lD,
			NotNestedLessLess: dD,
			notni: cD,
			notniva: pD,
			notnivb: uD,
			notnivc: mD,
			NotPrecedes: gD,
			NotPrecedesEqual: hD,
			NotPrecedesSlantEqual: fD,
			NotReverseElement: yD,
			NotRightTriangleBar: bD,
			NotRightTriangle: xD,
			NotRightTriangleEqual: kD,
			NotSquareSubset: SD,
			NotSquareSubsetEqual: wD,
			NotSquareSuperset: vD,
			NotSquareSupersetEqual: TD,
			NotSubset: CD,
			NotSubsetEqual: ED,
			NotSucceeds: AD,
			NotSucceedsEqual: OD,
			NotSucceedsSlantEqual: PD,
			NotSucceedsTilde: LD,
			NotSuperset: qD,
			NotSupersetEqual: RD,
			NotTilde: ND,
			NotTildeEqual: BD,
			NotTildeFullEqual: ID,
			NotTildeTilde: zD,
			NotVerticalBar: _D,
			nparallel: MD,
			npar: GD,
			nparsl: UD,
			npart: VD,
			npolint: WD,
			npr: FD,
			nprcue: jD,
			nprec: HD,
			npreceq: YD,
			npre: $D,
			nrarrc: KD,
			nrarr: XD,
			nrArr: QD,
			nrarrw: ZD,
			nrightarrow: JD,
			nRightarrow: eN,
			nrtri: tN,
			nrtrie: nN,
			nsc: rN,
			nsccue: aN,
			nsce: oN,
			Nscr: iN,
			nscr: sN,
			nshortmid: lN,
			nshortparallel: dN,
			nsim: cN,
			nsime: pN,
			nsimeq: uN,
			nsmid: mN,
			nspar: gN,
			nsqsube: hN,
			nsqsupe: fN,
			nsub: yN,
			nsubE: bN,
			nsube: xN,
			nsubset: kN,
			nsubseteq: SN,
			nsubseteqq: wN,
			nsucc: vN,
			nsucceq: TN,
			nsup: CN,
			nsupE: EN,
			nsupe: AN,
			nsupset: ON,
			nsupseteq: PN,
			nsupseteqq: LN,
			ntgl: qN,
			Ntilde: RN,
			ntilde: DN,
			ntlg: NN,
			ntriangleleft: BN,
			ntrianglelefteq: IN,
			ntriangleright: zN,
			ntrianglerighteq: _N,
			Nu: MN,
			nu: GN,
			num: UN,
			numero: VN,
			numsp: WN,
			nvap: FN,
			nvdash: jN,
			nvDash: HN,
			nVdash: YN,
			nVDash: $N,
			nvge: KN,
			nvgt: XN,
			nvHarr: QN,
			nvinfin: ZN,
			nvlArr: JN,
			nvle: eB,
			nvlt: tB,
			nvltrie: nB,
			nvrArr: rB,
			nvrtrie: aB,
			nvsim: oB,
			nwarhk: iB,
			nwarr: sB,
			nwArr: lB,
			nwarrow: dB,
			nwnear: cB,
			Oacute: pB,
			oacute: uB,
			oast: mB,
			Ocirc: gB,
			ocirc: hB,
			ocir: fB,
			Ocy: yB,
			ocy: bB,
			odash: xB,
			Odblac: kB,
			odblac: SB,
			odiv: wB,
			odot: vB,
			odsold: TB,
			OElig: CB,
			oelig: EB,
			ofcir: AB,
			Ofr: OB,
			ofr: PB,
			ogon: LB,
			Ograve: qB,
			ograve: RB,
			ogt: DB,
			ohbar: NB,
			ohm: BB,
			oint: IB,
			olarr: zB,
			olcir: _B,
			olcross: MB,
			oline: GB,
			olt: UB,
			Omacr: VB,
			omacr: WB,
			Omega: FB,
			omega: jB,
			Omicron: HB,
			omicron: YB,
			omid: $B,
			ominus: KB,
			Oopf: XB,
			oopf: QB,
			opar: ZB,
			OpenCurlyDoubleQuote: JB,
			OpenCurlyQuote: eI,
			operp: tI,
			oplus: nI,
			orarr: rI,
			Or: aI,
			or: oI,
			ord: iI,
			order: sI,
			orderof: lI,
			ordf: dI,
			ordm: cI,
			origof: pI,
			oror: uI,
			orslope: mI,
			orv: gI,
			oS: hI,
			Oscr: fI,
			oscr: yI,
			Oslash: bI,
			oslash: xI,
			osol: kI,
			Otilde: SI,
			otilde: wI,
			otimesas: vI,
			Otimes: TI,
			otimes: CI,
			Ouml: EI,
			ouml: AI,
			ovbar: OI,
			OverBar: PI,
			OverBrace: LI,
			OverBracket: qI,
			OverParenthesis: RI,
			para: DI,
			parallel: NI,
			par: BI,
			parsim: II,
			parsl: zI,
			part: _I,
			PartialD: MI,
			Pcy: GI,
			pcy: UI,
			percnt: VI,
			period: WI,
			permil: FI,
			perp: jI,
			pertenk: HI,
			Pfr: YI,
			pfr: $I,
			Phi: KI,
			phi: XI,
			phiv: QI,
			phmmat: ZI,
			phone: JI,
			Pi: ez,
			pi: tz,
			pitchfork: nz,
			piv: rz,
			planck: az,
			planckh: oz,
			plankv: iz,
			plusacir: sz,
			plusb: lz,
			pluscir: dz,
			plus: cz,
			plusdo: pz,
			plusdu: uz,
			pluse: mz,
			PlusMinus: gz,
			plusmn: hz,
			plussim: fz,
			plustwo: yz,
			pm: bz,
			Poincareplane: xz,
			pointint: kz,
			popf: Sz,
			Popf: wz,
			pound: vz,
			prap: Tz,
			Pr: Cz,
			pr: Ez,
			prcue: Az,
			precapprox: Oz,
			prec: Pz,
			preccurlyeq: Lz,
			Precedes: qz,
			PrecedesEqual: Rz,
			PrecedesSlantEqual: Dz,
			PrecedesTilde: Nz,
			preceq: Bz,
			precnapprox: Iz,
			precneqq: zz,
			precnsim: _z,
			pre: Mz,
			prE: Gz,
			precsim: Uz,
			prime: Vz,
			Prime: Wz,
			primes: Fz,
			prnap: jz,
			prnE: Hz,
			prnsim: Yz,
			prod: $z,
			Product: Kz,
			profalar: Xz,
			profline: Qz,
			profsurf: Zz,
			prop: Jz,
			Proportional: e_,
			Proportion: t_,
			propto: n_,
			prsim: r_,
			prurel: a_,
			Pscr: o_,
			pscr: i_,
			Psi: s_,
			psi: l_,
			puncsp: d_,
			Qfr: c_,
			qfr: p_,
			qint: u_,
			qopf: m_,
			Qopf: g_,
			qprime: h_,
			Qscr: f_,
			qscr: y_,
			quaternions: b_,
			quatint: x_,
			quest: k_,
			questeq: S_,
			quot: w_,
			QUOT: v_,
			rAarr: T_,
			race: C_,
			Racute: E_,
			racute: A_,
			radic: O_,
			raemptyv: P_,
			rang: L_,
			Rang: q_,
			rangd: R_,
			range: D_,
			rangle: N_,
			raquo: B_,
			rarrap: I_,
			rarrb: z_,
			rarrbfs: __,
			rarrc: M_,
			rarr: G_,
			Rarr: U_,
			rArr: V_,
			rarrfs: W_,
			rarrhk: F_,
			rarrlp: j_,
			rarrpl: H_,
			rarrsim: Y_,
			Rarrtl: $_,
			rarrtl: K_,
			rarrw: X_,
			ratail: Q_,
			rAtail: Z_,
			ratio: J_,
			rationals: eM,
			rbarr: tM,
			rBarr: nM,
			RBarr: rM,
			rbbrk: aM,
			rbrace: oM,
			rbrack: iM,
			rbrke: sM,
			rbrksld: lM,
			rbrkslu: dM,
			Rcaron: cM,
			rcaron: pM,
			Rcedil: uM,
			rcedil: mM,
			rceil: gM,
			rcub: hM,
			Rcy: fM,
			rcy: yM,
			rdca: bM,
			rdldhar: xM,
			rdquo: kM,
			rdquor: SM,
			rdsh: wM,
			real: vM,
			realine: TM,
			realpart: CM,
			reals: EM,
			Re: AM,
			rect: OM,
			reg: PM,
			REG: LM,
			ReverseElement: qM,
			ReverseEquilibrium: RM,
			ReverseUpEquilibrium: DM,
			rfisht: NM,
			rfloor: BM,
			rfr: IM,
			Rfr: zM,
			rHar: _M,
			rhard: MM,
			rharu: GM,
			rharul: UM,
			Rho: VM,
			rho: WM,
			rhov: FM,
			RightAngleBracket: jM,
			RightArrowBar: HM,
			rightarrow: YM,
			RightArrow: $M,
			Rightarrow: KM,
			RightArrowLeftArrow: XM,
			rightarrowtail: QM,
			RightCeiling: ZM,
			RightDoubleBracket: JM,
			RightDownTeeVector: eG,
			RightDownVectorBar: tG,
			RightDownVector: nG,
			RightFloor: rG,
			rightharpoondown: aG,
			rightharpoonup: oG,
			rightleftarrows: iG,
			rightleftharpoons: sG,
			rightrightarrows: lG,
			rightsquigarrow: dG,
			RightTeeArrow: cG,
			RightTee: pG,
			RightTeeVector: uG,
			rightthreetimes: mG,
			RightTriangleBar: gG,
			RightTriangle: hG,
			RightTriangleEqual: fG,
			RightUpDownVector: yG,
			RightUpTeeVector: bG,
			RightUpVectorBar: xG,
			RightUpVector: kG,
			RightVectorBar: SG,
			RightVector: wG,
			ring: vG,
			risingdotseq: TG,
			rlarr: CG,
			rlhar: EG,
			rlm: AG,
			rmoustache: OG,
			rmoust: PG,
			rnmid: LG,
			roang: qG,
			roarr: RG,
			robrk: DG,
			ropar: NG,
			ropf: BG,
			Ropf: IG,
			roplus: zG,
			rotimes: _G,
			RoundImplies: MG,
			rpar: GG,
			rpargt: UG,
			rppolint: VG,
			rrarr: WG,
			Rrightarrow: FG,
			rsaquo: jG,
			rscr: HG,
			Rscr: YG,
			rsh: $G,
			Rsh: KG,
			rsqb: XG,
			rsquo: QG,
			rsquor: ZG,
			rthree: JG,
			rtimes: eU,
			rtri: tU,
			rtrie: nU,
			rtrif: rU,
			rtriltri: aU,
			RuleDelayed: oU,
			ruluhar: iU,
			rx: sU,
			Sacute: lU,
			sacute: dU,
			sbquo: cU,
			scap: pU,
			Scaron: uU,
			scaron: mU,
			Sc: gU,
			sc: hU,
			sccue: fU,
			sce: yU,
			scE: bU,
			Scedil: xU,
			scedil: kU,
			Scirc: SU,
			scirc: wU,
			scnap: vU,
			scnE: TU,
			scnsim: CU,
			scpolint: EU,
			scsim: AU,
			Scy: OU,
			scy: PU,
			sdotb: LU,
			sdot: qU,
			sdote: RU,
			searhk: DU,
			searr: NU,
			seArr: BU,
			searrow: IU,
			sect: zU,
			semi: _U,
			seswar: MU,
			setminus: GU,
			setmn: UU,
			sext: VU,
			Sfr: WU,
			sfr: FU,
			sfrown: jU,
			sharp: HU,
			SHCHcy: YU,
			shchcy: $U,
			SHcy: KU,
			shcy: XU,
			ShortDownArrow: QU,
			ShortLeftArrow: ZU,
			shortmid: JU,
			shortparallel: eV,
			ShortRightArrow: tV,
			ShortUpArrow: nV,
			shy: rV,
			Sigma: aV,
			sigma: oV,
			sigmaf: iV,
			sigmav: sV,
			sim: lV,
			simdot: dV,
			sime: cV,
			simeq: pV,
			simg: uV,
			simgE: mV,
			siml: gV,
			simlE: hV,
			simne: fV,
			simplus: yV,
			simrarr: bV,
			slarr: xV,
			SmallCircle: kV,
			smallsetminus: SV,
			smashp: wV,
			smeparsl: vV,
			smid: TV,
			smile: CV,
			smt: EV,
			smte: AV,
			smtes: OV,
			SOFTcy: PV,
			softcy: LV,
			solbar: qV,
			solb: RV,
			sol: DV,
			Sopf: NV,
			sopf: BV,
			spades: IV,
			spadesuit: zV,
			spar: _V,
			sqcap: MV,
			sqcaps: GV,
			sqcup: UV,
			sqcups: VV,
			Sqrt: WV,
			sqsub: FV,
			sqsube: jV,
			sqsubset: HV,
			sqsubseteq: YV,
			sqsup: $V,
			sqsupe: KV,
			sqsupset: XV,
			sqsupseteq: QV,
			square: ZV,
			Square: JV,
			SquareIntersection: eW,
			SquareSubset: tW,
			SquareSubsetEqual: nW,
			SquareSuperset: rW,
			SquareSupersetEqual: aW,
			SquareUnion: oW,
			squarf: iW,
			squ: sW,
			squf: lW,
			srarr: dW,
			Sscr: cW,
			sscr: pW,
			ssetmn: uW,
			ssmile: mW,
			sstarf: gW,
			Star: hW,
			star: fW,
			starf: yW,
			straightepsilon: bW,
			straightphi: xW,
			strns: kW,
			sub: SW,
			Sub: wW,
			subdot: vW,
			subE: TW,
			sube: CW,
			subedot: EW,
			submult: AW,
			subnE: OW,
			subne: PW,
			subplus: LW,
			subrarr: qW,
			subset: RW,
			Subset: DW,
			subseteq: NW,
			subseteqq: BW,
			SubsetEqual: IW,
			subsetneq: zW,
			subsetneqq: _W,
			subsim: MW,
			subsub: GW,
			subsup: UW,
			succapprox: VW,
			succ: WW,
			succcurlyeq: FW,
			Succeeds: jW,
			SucceedsEqual: HW,
			SucceedsSlantEqual: YW,
			SucceedsTilde: $W,
			succeq: KW,
			succnapprox: XW,
			succneqq: QW,
			succnsim: ZW,
			succsim: JW,
			SuchThat: eF,
			sum: tF,
			Sum: nF,
			sung: rF,
			sup1: aF,
			sup2: oF,
			sup3: iF,
			sup: sF,
			Sup: lF,
			supdot: dF,
			supdsub: cF,
			supE: pF,
			supe: uF,
			supedot: mF,
			Superset: gF,
			SupersetEqual: hF,
			suphsol: fF,
			suphsub: yF,
			suplarr: bF,
			supmult: xF,
			supnE: kF,
			supne: SF,
			supplus: wF,
			supset: vF,
			Supset: TF,
			supseteq: CF,
			supseteqq: EF,
			supsetneq: AF,
			supsetneqq: OF,
			supsim: PF,
			supsub: LF,
			supsup: qF,
			swarhk: RF,
			swarr: DF,
			swArr: NF,
			swarrow: BF,
			swnwar: IF,
			szlig: zF,
			Tab: _F,
			target: MF,
			Tau: GF,
			tau: UF,
			tbrk: VF,
			Tcaron: WF,
			tcaron: FF,
			Tcedil: jF,
			tcedil: HF,
			Tcy: YF,
			tcy: $F,
			tdot: KF,
			telrec: XF,
			Tfr: QF,
			tfr: ZF,
			there4: JF,
			therefore: ej,
			Therefore: tj,
			Theta: nj,
			theta: rj,
			thetasym: aj,
			thetav: oj,
			thickapprox: ij,
			thicksim: sj,
			ThickSpace: lj,
			ThinSpace: dj,
			thinsp: cj,
			thkap: pj,
			thksim: uj,
			THORN: mj,
			thorn: gj,
			tilde: hj,
			Tilde: fj,
			TildeEqual: yj,
			TildeFullEqual: bj,
			TildeTilde: xj,
			timesbar: kj,
			timesb: Sj,
			times: wj,
			timesd: vj,
			tint: Tj,
			toea: Cj,
			topbot: Ej,
			topcir: Aj,
			top: Oj,
			Topf: Pj,
			topf: Lj,
			topfork: qj,
			tosa: Rj,
			tprime: Dj,
			trade: Nj,
			TRADE: Bj,
			triangle: Ij,
			triangledown: zj,
			triangleleft: _j,
			trianglelefteq: Mj,
			triangleq: Gj,
			triangleright: Uj,
			trianglerighteq: Vj,
			tridot: Wj,
			trie: Fj,
			triminus: jj,
			TripleDot: Hj,
			triplus: Yj,
			trisb: $j,
			tritime: Kj,
			trpezium: Xj,
			Tscr: Qj,
			tscr: Zj,
			TScy: Jj,
			tscy: eH,
			TSHcy: tH,
			tshcy: nH,
			Tstrok: rH,
			tstrok: aH,
			twixt: oH,
			twoheadleftarrow: iH,
			twoheadrightarrow: sH,
			Uacute: lH,
			uacute: dH,
			uarr: cH,
			Uarr: pH,
			uArr: uH,
			Uarrocir: mH,
			Ubrcy: gH,
			ubrcy: hH,
			Ubreve: fH,
			ubreve: yH,
			Ucirc: bH,
			ucirc: xH,
			Ucy: kH,
			ucy: SH,
			udarr: wH,
			Udblac: vH,
			udblac: TH,
			udhar: CH,
			ufisht: EH,
			Ufr: AH,
			ufr: OH,
			Ugrave: PH,
			ugrave: LH,
			uHar: qH,
			uharl: RH,
			uharr: DH,
			uhblk: NH,
			ulcorn: BH,
			ulcorner: IH,
			ulcrop: zH,
			ultri: _H,
			Umacr: MH,
			umacr: GH,
			uml: UH,
			UnderBar: VH,
			UnderBrace: WH,
			UnderBracket: FH,
			UnderParenthesis: jH,
			Union: HH,
			UnionPlus: YH,
			Uogon: $H,
			uogon: KH,
			Uopf: XH,
			uopf: QH,
			UpArrowBar: ZH,
			uparrow: JH,
			UpArrow: eY,
			Uparrow: tY,
			UpArrowDownArrow: nY,
			updownarrow: rY,
			UpDownArrow: aY,
			Updownarrow: oY,
			UpEquilibrium: iY,
			upharpoonleft: sY,
			upharpoonright: lY,
			uplus: dY,
			UpperLeftArrow: cY,
			UpperRightArrow: pY,
			upsi: uY,
			Upsi: mY,
			upsih: gY,
			Upsilon: hY,
			upsilon: fY,
			UpTeeArrow: yY,
			UpTee: bY,
			upuparrows: xY,
			urcorn: kY,
			urcorner: SY,
			urcrop: wY,
			Uring: vY,
			uring: TY,
			urtri: CY,
			Uscr: EY,
			uscr: AY,
			utdot: OY,
			Utilde: PY,
			utilde: LY,
			utri: qY,
			utrif: RY,
			uuarr: DY,
			Uuml: NY,
			uuml: BY,
			uwangle: IY,
			vangrt: zY,
			varepsilon: _Y,
			varkappa: MY,
			varnothing: GY,
			varphi: UY,
			varpi: VY,
			varpropto: WY,
			varr: FY,
			vArr: jY,
			varrho: HY,
			varsigma: YY,
			varsubsetneq: $Y,
			varsubsetneqq: KY,
			varsupsetneq: XY,
			varsupsetneqq: QY,
			vartheta: ZY,
			vartriangleleft: JY,
			vartriangleright: e$,
			vBar: t$,
			Vbar: n$,
			vBarv: r$,
			Vcy: a$,
			vcy: o$,
			vdash: i$,
			vDash: s$,
			Vdash: l$,
			VDash: d$,
			Vdashl: c$,
			veebar: p$,
			vee: u$,
			Vee: m$,
			veeeq: g$,
			vellip: h$,
			verbar: f$,
			Verbar: y$,
			vert: b$,
			Vert: x$,
			VerticalBar: k$,
			VerticalLine: S$,
			VerticalSeparator: w$,
			VerticalTilde: v$,
			VeryThinSpace: T$,
			Vfr: C$,
			vfr: E$,
			vltri: A$,
			vnsub: O$,
			vnsup: P$,
			Vopf: L$,
			vopf: q$,
			vprop: R$,
			vrtri: D$,
			Vscr: N$,
			vscr: B$,
			vsubnE: I$,
			vsubne: z$,
			vsupnE: _$,
			vsupne: M$,
			Vvdash: G$,
			vzigzag: U$,
			Wcirc: V$,
			wcirc: W$,
			wedbar: F$,
			wedge: j$,
			Wedge: H$,
			wedgeq: Y$,
			weierp: $$,
			Wfr: K$,
			wfr: X$,
			Wopf: Q$,
			wopf: Z$,
			wp: J$,
			wr: eK,
			wreath: tK,
			Wscr: nK,
			wscr: rK,
			xcap: aK,
			xcirc: oK,
			xcup: iK,
			xdtri: sK,
			Xfr: lK,
			xfr: dK,
			xharr: cK,
			xhArr: pK,
			Xi: uK,
			xi: mK,
			xlarr: gK,
			xlArr: hK,
			xmap: fK,
			xnis: yK,
			xodot: bK,
			Xopf: xK,
			xopf: kK,
			xoplus: SK,
			xotime: wK,
			xrarr: vK,
			xrArr: TK,
			Xscr: CK,
			xscr: EK,
			xsqcup: AK,
			xuplus: OK,
			xutri: PK,
			xvee: LK,
			xwedge: qK,
			Yacute: RK,
			yacute: DK,
			YAcy: NK,
			yacy: BK,
			Ycirc: IK,
			ycirc: zK,
			Ycy: _K,
			ycy: MK,
			yen: GK,
			Yfr: UK,
			yfr: VK,
			YIcy: WK,
			yicy: FK,
			Yopf: jK,
			yopf: HK,
			Yscr: YK,
			yscr: $K,
			YUcy: KK,
			yucy: XK,
			yuml: QK,
			Yuml: ZK,
			Zacute: JK,
			zacute: eX,
			Zcaron: tX,
			zcaron: nX,
			Zcy: rX,
			zcy: aX,
			Zdot: oX,
			zdot: iX,
			zeetrf: sX,
			ZeroWidthSpace: lX,
			Zeta: dX,
			zeta: cX,
			zfr: pX,
			Zfr: uX,
			ZHcy: mX,
			zhcy: gX,
			zigrarr: hX,
			zopf: fX,
			Zopf: yX,
			Zscr: bX,
			zscr: xX,
			zwj: kX,
			zwnj: SX,
			in: '\u2208',
			Map: '\u2905'
		},
		vX = Object.freeze({
			Aacute: zc,
			aacute: _c,
			Abreve: Mc,
			abreve: Gc,
			ac: Uc,
			acd: Vc,
			acE: Wc,
			Acirc: Fc,
			acirc: jc,
			acute: Hc,
			Acy: Yc,
			acy: $c,
			AElig: Kc,
			aelig: Xc,
			af: Qc,
			Afr: Zc,
			afr: Jc,
			Agrave: ep,
			agrave: tp,
			alefsym: np,
			aleph: rp,
			Alpha: op,
			alpha: ip,
			Amacr: sp,
			amacr: lp,
			amalg: dp,
			amp: cp,
			AMP: pp,
			andand: up,
			And: gp,
			and: hp,
			andd: fp,
			andslope: yp,
			andv: bp,
			ang: xp,
			ange: kp,
			angle: Sp,
			angmsdaa: vp,
			angmsdab: Tp,
			angmsdac: Cp,
			angmsdad: Ep,
			angmsdae: Ap,
			angmsdaf: Op,
			angmsdag: Pp,
			angmsdah: Lp,
			angmsd: qp,
			angrt: Rp,
			angrtvb: Dp,
			angrtvbd: Np,
			angsph: Bp,
			angst: Ip,
			angzarr: zp,
			Aogon: _p,
			aogon: Mp,
			Aopf: Gp,
			aopf: Up,
			apacir: Vp,
			ap: Wp,
			apE: Fp,
			ape: jp,
			apid: Hp,
			apos: Yp,
			ApplyFunction: $p,
			approx: Kp,
			approxeq: Xp,
			Aring: Qp,
			aring: Zp,
			Ascr: Jp,
			ascr: eu,
			Assign: tu,
			ast: ru,
			asymp: au,
			asympeq: ou,
			Atilde: iu,
			atilde: su,
			Auml: lu,
			auml: du,
			awconint: cu,
			awint: pu,
			backcong: uu,
			backepsilon: gu,
			backprime: hu,
			backsim: fu,
			backsimeq: yu,
			Backslash: bu,
			Barv: xu,
			barvee: ku,
			barwed: Su,
			Barwed: wu,
			barwedge: vu,
			bbrk: Tu,
			bbrktbrk: Cu,
			bcong: Eu,
			Bcy: Au,
			bcy: Ou,
			bdquo: Pu,
			becaus: Lu,
			because: qu,
			Because: Ru,
			bemptyv: Du,
			bepsi: Bu,
			bernou: Iu,
			Bernoullis: zu,
			Beta: _u,
			beta: Gu,
			beth: Uu,
			between: Vu,
			Bfr: Wu,
			bfr: Fu,
			bigcap: ju,
			bigcirc: Hu,
			bigcup: Yu,
			bigodot: $u,
			bigoplus: Ku,
			bigotimes: Xu,
			bigsqcup: Qu,
			bigstar: Zu,
			bigtriangledown: Ju,
			bigtriangleup: em,
			biguplus: tm,
			bigvee: nm,
			bigwedge: rm,
			bkarow: am,
			blacklozenge: om,
			blacksquare: im,
			blacktriangle: sm,
			blacktriangledown: lm,
			blacktriangleleft: dm,
			blacktriangleright: cm,
			blank: um,
			blk12: mm,
			blk14: gm,
			blk34: hm,
			block: fm,
			bne: ym,
			bnequiv: bm,
			bNot: xm,
			bnot: km,
			Bopf: Sm,
			bopf: wm,
			bot: vm,
			bottom: Tm,
			bowtie: Cm,
			boxbox: Em,
			boxdl: Am,
			boxdL: Om,
			boxDl: Pm,
			boxDL: Lm,
			boxdr: qm,
			boxdR: Rm,
			boxDr: Dm,
			boxDR: Nm,
			boxh: Bm,
			boxH: zm,
			boxhd: _m,
			boxHd: Mm,
			boxhD: Gm,
			boxHD: Um,
			boxhu: Vm,
			boxHu: Wm,
			boxhU: Fm,
			boxHU: jm,
			boxminus: Hm,
			boxplus: Ym,
			boxtimes: $m,
			boxul: Km,
			boxuL: Xm,
			boxUl: Qm,
			boxUL: Zm,
			boxur: Jm,
			boxuR: tg,
			boxUr: ng,
			boxUR: rg,
			boxv: ag,
			boxV: og,
			boxvh: ig,
			boxvH: sg,
			boxVh: dg,
			boxVH: cg,
			boxvl: pg,
			boxvL: ug,
			boxVl: mg,
			boxVL: hg,
			boxvr: fg,
			boxvR: yg,
			boxVr: bg,
			boxVR: xg,
			bprime: kg,
			breve: Sg,
			Breve: wg,
			brvbar: vg,
			bscr: Tg,
			Bscr: Cg,
			bsemi: Eg,
			bsim: Ag,
			bsime: Og,
			bsolb: Pg,
			bsol: Lg,
			bsolhsub: qg,
			bull: Rg,
			bullet: Dg,
			bump: Ng,
			bumpE: Bg,
			bumpe: Ig,
			Bumpeq: zg,
			bumpeq: _g,
			Cacute: Mg,
			cacute: Ug,
			capand: Vg,
			capbrcup: Wg,
			capcap: Fg,
			cap: jg,
			Cap: Hg,
			capcup: Yg,
			capdot: $g,
			CapitalDifferentialD: Kg,
			caps: Xg,
			caret: Qg,
			caron: Zg,
			Cayleys: Jg,
			ccaps: eh,
			Ccaron: th,
			ccaron: nh,
			Ccedil: rh,
			ccedil: ah,
			Ccirc: oh,
			ccirc: ih,
			Cconint: sh,
			ccups: lh,
			ccupssm: dh,
			Cdot: ch,
			cdot: ph,
			cedil: uh,
			Cedilla: mh,
			cemptyv: gh,
			cent: hh,
			centerdot: fh,
			CenterDot: yh,
			cfr: bh,
			Cfr: xh,
			CHcy: kh,
			chcy: Sh,
			check: wh,
			checkmark: vh,
			Chi: Th,
			chi: Ch,
			circ: Eh,
			circeq: Ah,
			circlearrowleft: Oh,
			circlearrowright: Ph,
			circledast: Lh,
			circledcirc: qh,
			circleddash: Rh,
			CircleDot: Dh,
			circledR: Nh,
			circledS: Bh,
			CircleMinus: Ih,
			CirclePlus: zh,
			CircleTimes: _h,
			cir: Mh,
			cirE: Gh,
			cire: Uh,
			cirfnint: Vh,
			cirmid: Wh,
			cirscir: Fh,
			ClockwiseContourIntegral: jh,
			CloseCurlyDoubleQuote: Hh,
			CloseCurlyQuote: Yh,
			clubs: $h,
			clubsuit: Kh,
			colon: Xh,
			Colon: Qh,
			Colone: Zh,
			colone: Jh,
			coloneq: ef,
			comma: tf,
			commat: nf,
			comp: rf,
			compfn: of ,
			complement: sf,
			complexes: lf,
			cong: df,
			congdot: cf,
			Congruent: pf,
			conint: uf,
			Conint: mf,
			ContourIntegral: gf,
			copf: hf,
			Copf: ff,
			coprod: yf,
			Coproduct: bf,
			copy: xf,
			COPY: kf,
			copysr: Sf,
			CounterClockwiseContourIntegral: wf,
			crarr: vf,
			cross: Tf,
			Cross: Cf,
			Cscr: Ef,
			cscr: Af,
			csub: Of,
			csube: Pf,
			csup: Lf,
			csupe: qf,
			ctdot: Rf,
			cudarrl: Df,
			cudarrr: Nf,
			cuepr: Bf,
			cuesc: If,
			cularr: zf,
			cularrp: _f,
			cupbrcap: Mf,
			cupcap: Gf,
			CupCap: Uf,
			cup: Vf,
			Cup: Wf,
			cupcup: Ff,
			cupdot: jf,
			cupor: Hf,
			cups: Yf,
			curarr: $f,
			curarrm: Kf,
			curlyeqprec: Xf,
			curlyeqsucc: Qf,
			curlyvee: Zf,
			curlywedge: Jf,
			curren: ey,
			curvearrowleft: ty,
			curvearrowright: ny,
			cuvee: ry,
			cuwed: ay,
			cwconint: oy,
			cwint: iy,
			cylcty: sy,
			dagger: ly,
			Dagger: dy,
			daleth: cy,
			darr: py,
			Darr: uy,
			dArr: my,
			dash: gy,
			Dashv: hy,
			dashv: fy,
			dbkarow: yy,
			dblac: by,
			Dcaron: xy,
			dcaron: ky,
			Dcy: Sy,
			dcy: wy,
			ddagger: vy,
			ddarr: Ty,
			DD: Cy,
			dd: Ey,
			DDotrahd: Ay,
			ddotseq: Oy,
			deg: Py,
			Del: Ly,
			Delta: qy,
			delta: Ry,
			demptyv: Dy,
			dfisht: Ny,
			Dfr: By,
			dfr: Iy,
			dHar: zy,
			dharl: _y,
			dharr: My,
			DiacriticalAcute: Gy,
			DiacriticalDot: Uy,
			DiacriticalDoubleAcute: Vy,
			DiacriticalGrave: Wy,
			DiacriticalTilde: Fy,
			diam: jy,
			diamond: Hy,
			Diamond: Yy,
			diamondsuit: $y,
			diams: Ky,
			die: Xy,
			DifferentialD: Qy,
			digamma: Zy,
			disin: Jy,
			div: eb,
			divide: tb,
			divideontimes: nb,
			divonx: rb,
			DJcy: ab,
			djcy: ob,
			dlcorn: ib,
			dlcrop: sb,
			dollar: lb,
			Dopf: db,
			dopf: cb,
			Dot: pb,
			dot: ub,
			DotDot: mb,
			doteq: gb,
			doteqdot: hb,
			DotEqual: fb,
			dotminus: yb,
			dotplus: bb,
			dotsquare: xb,
			doublebarwedge: kb,
			DoubleContourIntegral: Sb,
			DoubleDot: wb,
			DoubleDownArrow: vb,
			DoubleLeftArrow: Tb,
			DoubleLeftRightArrow: Cb,
			DoubleLeftTee: Eb,
			DoubleLongLeftArrow: Ab,
			DoubleLongLeftRightArrow: Ob,
			DoubleLongRightArrow: Pb,
			DoubleRightArrow: Lb,
			DoubleRightTee: qb,
			DoubleUpArrow: Rb,
			DoubleUpDownArrow: Db,
			DoubleVerticalBar: Nb,
			DownArrowBar: Bb,
			downarrow: Ib,
			DownArrow: zb,
			Downarrow: _b,
			DownArrowUpArrow: Mb,
			DownBreve: Gb,
			downdownarrows: Ub,
			downharpoonleft: Vb,
			downharpoonright: Wb,
			DownLeftRightVector: Fb,
			DownLeftTeeVector: jb,
			DownLeftVectorBar: Hb,
			DownLeftVector: Yb,
			DownRightTeeVector: $b,
			DownRightVectorBar: Kb,
			DownRightVector: Xb,
			DownTeeArrow: Qb,
			DownTee: Zb,
			drbkarow: Jb,
			drcorn: ex,
			drcrop: tx,
			Dscr: nx,
			dscr: ax,
			DScy: ox,
			dscy: ix,
			dsol: sx,
			Dstrok: lx,
			dstrok: dx,
			dtdot: cx,
			dtri: px,
			dtrif: ux,
			duarr: mx,
			duhar: gx,
			dwangle: hx,
			DZcy: fx,
			dzcy: yx,
			dzigrarr: bx,
			Eacute: xx,
			eacute: kx,
			easter: Sx,
			Ecaron: wx,
			ecaron: vx,
			Ecirc: Tx,
			ecirc: Cx,
			ecir: Ex,
			ecolon: Ax,
			Ecy: Ox,
			ecy: Px,
			eDDot: Lx,
			Edot: qx,
			edot: Rx,
			eDot: Dx,
			ee: Nx,
			efDot: Bx,
			Efr: Ix,
			efr: zx,
			eg: _x,
			Egrave: Mx,
			egrave: Gx,
			egs: Ux,
			egsdot: Vx,
			el: Wx,
			Element: Fx,
			elinters: jx,
			ell: Hx,
			els: Yx,
			elsdot: $x,
			Emacr: Kx,
			emacr: Xx,
			empty: Qx,
			emptyset: Zx,
			EmptySmallSquare: Jx,
			emptyv: ek,
			EmptyVerySmallSquare: tk,
			emsp13: nk,
			emsp14: rk,
			emsp: ak,
			ENG: ok,
			eng: ik,
			ensp: sk,
			Eogon: lk,
			eogon: dk,
			Eopf: ck,
			eopf: pk,
			epar: uk,
			eparsl: mk,
			eplus: gk,
			epsi: hk,
			Epsilon: fk,
			epsilon: yk,
			epsiv: bk,
			eqcirc: xk,
			eqcolon: kk,
			eqsim: Sk,
			eqslantgtr: wk,
			eqslantless: vk,
			Equal: Tk,
			equals: Ck,
			EqualTilde: Ek,
			equest: Ak,
			Equilibrium: Ok,
			equiv: Pk,
			equivDD: Lk,
			eqvparsl: qk,
			erarr: Rk,
			erDot: Dk,
			escr: Nk,
			Escr: Bk,
			esdot: Ik,
			Esim: zk,
			esim: _k,
			Eta: Mk,
			eta: Gk,
			ETH: Uk,
			eth: Vk,
			Euml: Wk,
			euml: Fk,
			euro: jk,
			excl: Hk,
			exist: Yk,
			Exists: $k,
			expectation: Kk,
			exponentiale: Xk,
			ExponentialE: Qk,
			fallingdotseq: Zk,
			Fcy: Jk,
			fcy: eS,
			female: tS,
			ffilig: nS,
			fflig: rS,
			ffllig: aS,
			Ffr: iS,
			ffr: sS,
			filig: lS,
			FilledSmallSquare: dS,
			FilledVerySmallSquare: cS,
			fjlig: pS,
			flat: uS,
			fllig: mS,
			fltns: gS,
			fnof: hS,
			Fopf: fS,
			fopf: yS,
			forall: bS,
			ForAll: xS,
			fork: kS,
			forkv: SS,
			Fouriertrf: wS,
			fpartint: vS,
			frac12: TS,
			frac13: CS,
			frac14: ES,
			frac15: AS,
			frac16: OS,
			frac18: PS,
			frac23: LS,
			frac25: qS,
			frac34: RS,
			frac35: DS,
			frac38: NS,
			frac45: BS,
			frac56: IS,
			frac58: zS,
			frac78: _S,
			frasl: MS,
			frown: GS,
			fscr: US,
			Fscr: VS,
			gacute: WS,
			Gamma: FS,
			gamma: jS,
			Gammad: HS,
			gammad: YS,
			gap: $S,
			Gbreve: KS,
			gbreve: XS,
			Gcedil: QS,
			Gcirc: ZS,
			gcirc: JS,
			Gcy: ew,
			gcy: tw,
			Gdot: nw,
			gdot: rw,
			ge: aw,
			gE: ow,
			gEl: iw,
			gel: sw,
			geq: lw,
			geqq: dw,
			geqslant: cw,
			gescc: pw,
			ges: uw,
			gesdot: mw,
			gesdoto: gw,
			gesdotol: hw,
			gesl: fw,
			gesles: yw,
			Gfr: bw,
			gfr: xw,
			gg: kw,
			Gg: Sw,
			ggg: ww,
			gimel: vw,
			GJcy: Tw,
			gjcy: Cw,
			gla: Ew,
			gl: Aw,
			glE: Ow,
			glj: Pw,
			gnap: Lw,
			gnapprox: qw,
			gne: Rw,
			gnE: Dw,
			gneq: Nw,
			gneqq: Bw,
			gnsim: Iw,
			Gopf: zw,
			gopf: _w,
			grave: Mw,
			GreaterEqual: Gw,
			GreaterEqualLess: Uw,
			GreaterFullEqual: Vw,
			GreaterGreater: Ww,
			GreaterLess: Fw,
			GreaterSlantEqual: jw,
			GreaterTilde: Hw,
			Gscr: Yw,
			gscr: $w,
			gsim: Kw,
			gsime: Xw,
			gsiml: Qw,
			gtcc: Zw,
			gtcir: Jw,
			gt: ev,
			GT: tv,
			Gt: nv,
			gtdot: rv,
			gtlPar: av,
			gtquest: ov,
			gtrapprox: iv,
			gtrarr: sv,
			gtrdot: lv,
			gtreqless: dv,
			gtreqqless: cv,
			gtrless: pv,
			gtrsim: uv,
			gvertneqq: mv,
			gvnE: gv,
			Hacek: hv,
			hairsp: fv,
			half: yv,
			hamilt: bv,
			HARDcy: xv,
			hardcy: kv,
			harrcir: Sv,
			harr: wv,
			hArr: vv,
			harrw: Tv,
			Hat: Cv,
			hbar: Ev,
			Hcirc: Av,
			hcirc: Ov,
			hearts: Pv,
			heartsuit: Lv,
			hellip: qv,
			hercon: Rv,
			hfr: Dv,
			Hfr: Nv,
			HilbertSpace: Bv,
			hksearow: Iv,
			hkswarow: zv,
			hoarr: _v,
			homtht: Mv,
			hookleftarrow: Gv,
			hookrightarrow: Uv,
			hopf: Vv,
			Hopf: Wv,
			horbar: Fv,
			HorizontalLine: jv,
			hscr: Hv,
			Hscr: Yv,
			hslash: $v,
			Hstrok: Kv,
			hstrok: Xv,
			HumpDownHump: Qv,
			HumpEqual: Zv,
			hybull: Jv,
			hyphen: eT,
			Iacute: tT,
			iacute: nT,
			ic: rT,
			Icirc: aT,
			icirc: oT,
			Icy: iT,
			icy: sT,
			Idot: lT,
			IEcy: dT,
			iecy: cT,
			iexcl: pT,
			iff: uT,
			ifr: mT,
			Ifr: gT,
			Igrave: hT,
			igrave: fT,
			ii: yT,
			iiiint: bT,
			iiint: xT,
			iinfin: kT,
			iiota: ST,
			IJlig: wT,
			ijlig: vT,
			Imacr: TT,
			imacr: CT,
			image: ET,
			ImaginaryI: AT,
			imagline: OT,
			imagpart: PT,
			imath: qT,
			Im: RT,
			imof: DT,
			imped: NT,
			Implies: BT,
			incare: IT,
			infin: zT,
			infintie: _T,
			inodot: MT,
			intcal: UT,
			int: VT,
			Int: WT,
			integers: FT,
			Integral: jT,
			intercal: HT,
			Intersection: YT,
			intlarhk: $T,
			intprod: KT,
			InvisibleComma: XT,
			InvisibleTimes: QT,
			IOcy: ZT,
			iocy: JT,
			Iogon: eC,
			iogon: tC,
			Iopf: nC,
			iopf: rC,
			Iota: aC,
			iota: oC,
			iprod: iC,
			iquest: sC,
			iscr: lC,
			Iscr: dC,
			isin: cC,
			isindot: pC,
			isinE: uC,
			isins: mC,
			isinsv: gC,
			isinv: hC,
			it: fC,
			Itilde: yC,
			itilde: bC,
			Iukcy: xC,
			iukcy: kC,
			Iuml: SC,
			iuml: wC,
			Jcirc: vC,
			jcirc: TC,
			Jcy: CC,
			jcy: EC,
			Jfr: AC,
			jfr: OC,
			jmath: PC,
			Jopf: LC,
			jopf: qC,
			Jscr: RC,
			jscr: DC,
			Jsercy: NC,
			jsercy: BC,
			Jukcy: IC,
			jukcy: zC,
			Kappa: _C,
			kappa: MC,
			kappav: GC,
			Kcedil: UC,
			kcedil: VC,
			Kcy: WC,
			kcy: FC,
			Kfr: jC,
			kfr: HC,
			kgreen: YC,
			KHcy: $C,
			khcy: KC,
			KJcy: XC,
			kjcy: QC,
			Kopf: ZC,
			kopf: JC,
			Kscr: eE,
			kscr: tE,
			lAarr: nE,
			Lacute: rE,
			lacute: aE,
			laemptyv: oE,
			lagran: iE,
			Lambda: sE,
			lambda: dE,
			lang: cE,
			Lang: pE,
			langd: uE,
			langle: mE,
			lap: hE,
			Laplacetrf: fE,
			laquo: yE,
			larrb: bE,
			larrbfs: xE,
			larr: kE,
			Larr: SE,
			lArr: wE,
			larrfs: vE,
			larrhk: TE,
			larrlp: CE,
			larrpl: EE,
			larrsim: AE,
			larrtl: OE,
			latail: PE,
			lAtail: LE,
			lat: qE,
			late: RE,
			lates: DE,
			lbarr: NE,
			lBarr: BE,
			lbbrk: IE,
			lbrace: zE,
			lbrack: _E,
			lbrke: ME,
			lbrksld: GE,
			lbrkslu: UE,
			Lcaron: VE,
			lcaron: WE,
			Lcedil: FE,
			lcedil: jE,
			lceil: HE,
			lcub: YE,
			Lcy: $E,
			lcy: KE,
			ldca: XE,
			ldquo: QE,
			ldquor: ZE,
			ldrdhar: JE,
			ldrushar: eA,
			ldsh: tA,
			le: nA,
			lE: rA,
			LeftAngleBracket: aA,
			LeftArrowBar: oA,
			leftarrow: iA,
			LeftArrow: sA,
			Leftarrow: lA,
			LeftArrowRightArrow: dA,
			leftarrowtail: cA,
			LeftCeiling: pA,
			LeftDoubleBracket: uA,
			LeftDownTeeVector: mA,
			LeftDownVectorBar: gA,
			LeftDownVector: hA,
			LeftFloor: fA,
			leftharpoondown: yA,
			leftharpoonup: bA,
			leftleftarrows: xA,
			leftrightarrow: kA,
			LeftRightArrow: SA,
			Leftrightarrow: wA,
			leftrightarrows: vA,
			leftrightharpoons: TA,
			leftrightsquigarrow: CA,
			LeftRightVector: EA,
			LeftTeeArrow: AA,
			LeftTee: OA,
			LeftTeeVector: PA,
			leftthreetimes: LA,
			LeftTriangleBar: qA,
			LeftTriangle: RA,
			LeftTriangleEqual: DA,
			LeftUpDownVector: NA,
			LeftUpTeeVector: BA,
			LeftUpVectorBar: IA,
			LeftUpVector: zA,
			LeftVectorBar: _A,
			LeftVector: MA,
			lEg: GA,
			leg: UA,
			leq: VA,
			leqq: WA,
			leqslant: FA,
			lescc: jA,
			les: HA,
			lesdot: YA,
			lesdoto: $A,
			lesdotor: KA,
			lesg: XA,
			lesges: QA,
			lessapprox: ZA,
			lessdot: JA,
			lesseqgtr: eO,
			lesseqqgtr: tO,
			LessEqualGreater: nO,
			LessFullEqual: rO,
			LessGreater: aO,
			lessgtr: oO,
			LessLess: iO,
			lesssim: sO,
			LessSlantEqual: lO,
			LessTilde: dO,
			lfisht: cO,
			lfloor: pO,
			Lfr: uO,
			lfr: mO,
			lg: gO,
			lgE: hO,
			lHar: fO,
			lhard: yO,
			lharu: bO,
			lharul: xO,
			lhblk: kO,
			LJcy: SO,
			ljcy: wO,
			llarr: vO,
			ll: TO,
			Ll: CO,
			llcorner: EO,
			Lleftarrow: AO,
			llhard: OO,
			lltri: PO,
			Lmidot: LO,
			lmidot: qO,
			lmoustache: RO,
			lmoust: DO,
			lnap: NO,
			lnapprox: BO,
			lne: IO,
			lnE: zO,
			lneq: _O,
			lneqq: MO,
			lnsim: GO,
			loang: UO,
			loarr: VO,
			lobrk: WO,
			longleftarrow: FO,
			LongLeftArrow: jO,
			Longleftarrow: HO,
			longleftrightarrow: YO,
			LongLeftRightArrow: $O,
			Longleftrightarrow: KO,
			longmapsto: XO,
			longrightarrow: QO,
			LongRightArrow: ZO,
			Longrightarrow: JO,
			looparrowleft: eP,
			looparrowright: tP,
			lopar: nP,
			Lopf: rP,
			lopf: aP,
			loplus: oP,
			lotimes: iP,
			lowast: sP,
			lowbar: lP,
			LowerLeftArrow: dP,
			LowerRightArrow: cP,
			loz: pP,
			lozenge: uP,
			lozf: mP,
			lpar: gP,
			lparlt: hP,
			lrarr: fP,
			lrcorner: yP,
			lrhar: bP,
			lrhard: xP,
			lrm: kP,
			lrtri: SP,
			lsaquo: wP,
			lscr: vP,
			Lscr: TP,
			lsh: CP,
			Lsh: EP,
			lsim: AP,
			lsime: OP,
			lsimg: PP,
			lsqb: LP,
			lsquo: qP,
			lsquor: RP,
			Lstrok: DP,
			lstrok: NP,
			ltcc: BP,
			ltcir: IP,
			lt: zP,
			LT: _P,
			Lt: MP,
			ltdot: GP,
			lthree: UP,
			ltimes: VP,
			ltlarr: WP,
			ltquest: FP,
			ltri: jP,
			ltrie: HP,
			ltrif: YP,
			ltrPar: $P,
			lurdshar: KP,
			luruhar: XP,
			lvertneqq: QP,
			lvnE: ZP,
			macr: JP,
			male: eL,
			malt: tL,
			maltese: nL,
			map: rL,
			mapsto: aL,
			mapstodown: oL,
			mapstoleft: iL,
			mapstoup: sL,
			marker: lL,
			mcomma: dL,
			Mcy: cL,
			mcy: pL,
			mdash: uL,
			mDDot: mL,
			measuredangle: gL,
			MediumSpace: hL,
			Mellintrf: fL,
			Mfr: yL,
			mfr: bL,
			mho: xL,
			micro: kL,
			midast: SL,
			midcir: wL,
			mid: vL,
			middot: TL,
			minusb: CL,
			minus: EL,
			minusd: AL,
			minusdu: OL,
			MinusPlus: PL,
			mlcp: LL,
			mldr: qL,
			mnplus: RL,
			models: DL,
			Mopf: NL,
			mopf: BL,
			mp: IL,
			mscr: zL,
			Mscr: _L,
			mstpos: ML,
			Mu: GL,
			mu: UL,
			multimap: VL,
			mumap: WL,
			nabla: FL,
			Nacute: jL,
			nacute: HL,
			nang: YL,
			nap: $L,
			napE: KL,
			napid: XL,
			napos: QL,
			napprox: ZL,
			natural: JL,
			naturals: eq,
			natur: tq,
			nbsp: nq,
			nbump: rq,
			nbumpe: aq,
			ncap: oq,
			Ncaron: iq,
			ncaron: sq,
			Ncedil: lq,
			ncedil: dq,
			ncong: cq,
			ncongdot: pq,
			ncup: uq,
			Ncy: mq,
			ncy: gq,
			ndash: hq,
			nearhk: fq,
			nearr: yq,
			neArr: bq,
			nearrow: xq,
			ne: kq,
			nedot: Sq,
			NegativeMediumSpace: wq,
			NegativeThickSpace: vq,
			NegativeThinSpace: Tq,
			NegativeVeryThinSpace: Cq,
			nequiv: Eq,
			nesear: Aq,
			nesim: Oq,
			NestedGreaterGreater: Pq,
			NestedLessLess: Lq,
			NewLine: qq,
			nexist: Rq,
			nexists: Dq,
			Nfr: Nq,
			nfr: Bq,
			ngE: Iq,
			nge: zq,
			ngeq: _q,
			ngeqq: Mq,
			ngeqslant: Gq,
			nges: Uq,
			nGg: Vq,
			ngsim: Wq,
			nGt: Fq,
			ngt: jq,
			ngtr: Hq,
			nGtv: Yq,
			nharr: $q,
			nhArr: Kq,
			nhpar: Xq,
			ni: Qq,
			nis: Zq,
			nisd: Jq,
			niv: eR,
			NJcy: tR,
			njcy: nR,
			nlarr: rR,
			nlArr: aR,
			nldr: oR,
			nlE: iR,
			nle: sR,
			nleftarrow: lR,
			nLeftarrow: dR,
			nleftrightarrow: cR,
			nLeftrightarrow: pR,
			nleq: uR,
			nleqq: mR,
			nleqslant: gR,
			nles: hR,
			nless: fR,
			nLl: yR,
			nlsim: bR,
			nLt: xR,
			nlt: kR,
			nltri: SR,
			nltrie: wR,
			nLtv: vR,
			nmid: TR,
			NoBreak: CR,
			NonBreakingSpace: ER,
			nopf: AR,
			Nopf: OR,
			Not: PR,
			not: LR,
			NotCongruent: qR,
			NotCupCap: RR,
			NotDoubleVerticalBar: DR,
			NotElement: NR,
			NotEqual: BR,
			NotEqualTilde: IR,
			NotExists: zR,
			NotGreater: _R,
			NotGreaterEqual: MR,
			NotGreaterFullEqual: GR,
			NotGreaterGreater: UR,
			NotGreaterLess: VR,
			NotGreaterSlantEqual: WR,
			NotGreaterTilde: FR,
			NotHumpDownHump: jR,
			NotHumpEqual: HR,
			notin: YR,
			notindot: $R,
			notinE: KR,
			notinva: XR,
			notinvb: QR,
			notinvc: ZR,
			NotLeftTriangleBar: JR,
			NotLeftTriangle: eD,
			NotLeftTriangleEqual: tD,
			NotLess: nD,
			NotLessEqual: rD,
			NotLessGreater: aD,
			NotLessLess: oD,
			NotLessSlantEqual: iD,
			NotLessTilde: sD,
			NotNestedGreaterGreater: lD,
			NotNestedLessLess: dD,
			notni: cD,
			notniva: pD,
			notnivb: uD,
			notnivc: mD,
			NotPrecedes: gD,
			NotPrecedesEqual: hD,
			NotPrecedesSlantEqual: fD,
			NotReverseElement: yD,
			NotRightTriangleBar: bD,
			NotRightTriangle: xD,
			NotRightTriangleEqual: kD,
			NotSquareSubset: SD,
			NotSquareSubsetEqual: wD,
			NotSquareSuperset: vD,
			NotSquareSupersetEqual: TD,
			NotSubset: CD,
			NotSubsetEqual: ED,
			NotSucceeds: AD,
			NotSucceedsEqual: OD,
			NotSucceedsSlantEqual: PD,
			NotSucceedsTilde: LD,
			NotSuperset: qD,
			NotSupersetEqual: RD,
			NotTilde: ND,
			NotTildeEqual: BD,
			NotTildeFullEqual: ID,
			NotTildeTilde: zD,
			NotVerticalBar: _D,
			nparallel: MD,
			npar: GD,
			nparsl: UD,
			npart: VD,
			npolint: WD,
			npr: FD,
			nprcue: jD,
			nprec: HD,
			npreceq: YD,
			npre: $D,
			nrarrc: KD,
			nrarr: XD,
			nrArr: QD,
			nrarrw: ZD,
			nrightarrow: JD,
			nRightarrow: eN,
			nrtri: tN,
			nrtrie: nN,
			nsc: rN,
			nsccue: aN,
			nsce: oN,
			Nscr: iN,
			nscr: sN,
			nshortmid: lN,
			nshortparallel: dN,
			nsim: cN,
			nsime: pN,
			nsimeq: uN,
			nsmid: mN,
			nspar: gN,
			nsqsube: hN,
			nsqsupe: fN,
			nsub: yN,
			nsubE: bN,
			nsube: xN,
			nsubset: kN,
			nsubseteq: SN,
			nsubseteqq: wN,
			nsucc: vN,
			nsucceq: TN,
			nsup: CN,
			nsupE: EN,
			nsupe: AN,
			nsupset: ON,
			nsupseteq: PN,
			nsupseteqq: LN,
			ntgl: qN,
			Ntilde: RN,
			ntilde: DN,
			ntlg: NN,
			ntriangleleft: BN,
			ntrianglelefteq: IN,
			ntriangleright: zN,
			ntrianglerighteq: _N,
			Nu: MN,
			nu: GN,
			num: UN,
			numero: VN,
			numsp: WN,
			nvap: FN,
			nvdash: jN,
			nvDash: HN,
			nVdash: YN,
			nVDash: $N,
			nvge: KN,
			nvgt: XN,
			nvHarr: QN,
			nvinfin: ZN,
			nvlArr: JN,
			nvle: eB,
			nvlt: tB,
			nvltrie: nB,
			nvrArr: rB,
			nvrtrie: aB,
			nvsim: oB,
			nwarhk: iB,
			nwarr: sB,
			nwArr: lB,
			nwarrow: dB,
			nwnear: cB,
			Oacute: pB,
			oacute: uB,
			oast: mB,
			Ocirc: gB,
			ocirc: hB,
			ocir: fB,
			Ocy: yB,
			ocy: bB,
			odash: xB,
			Odblac: kB,
			odblac: SB,
			odiv: wB,
			odot: vB,
			odsold: TB,
			OElig: CB,
			oelig: EB,
			ofcir: AB,
			Ofr: OB,
			ofr: PB,
			ogon: LB,
			Ograve: qB,
			ograve: RB,
			ogt: DB,
			ohbar: NB,
			ohm: BB,
			oint: IB,
			olarr: zB,
			olcir: _B,
			olcross: MB,
			oline: GB,
			olt: UB,
			Omacr: VB,
			omacr: WB,
			Omega: FB,
			omega: jB,
			Omicron: HB,
			omicron: YB,
			omid: $B,
			ominus: KB,
			Oopf: XB,
			oopf: QB,
			opar: ZB,
			OpenCurlyDoubleQuote: JB,
			OpenCurlyQuote: eI,
			operp: tI,
			oplus: nI,
			orarr: rI,
			Or: aI,
			or: oI,
			ord: iI,
			order: sI,
			orderof: lI,
			ordf: dI,
			ordm: cI,
			origof: pI,
			oror: uI,
			orslope: mI,
			orv: gI,
			oS: hI,
			Oscr: fI,
			oscr: yI,
			Oslash: bI,
			oslash: xI,
			osol: kI,
			Otilde: SI,
			otilde: wI,
			otimesas: vI,
			Otimes: TI,
			otimes: CI,
			Ouml: EI,
			ouml: AI,
			ovbar: OI,
			OverBar: PI,
			OverBrace: LI,
			OverBracket: qI,
			OverParenthesis: RI,
			para: DI,
			parallel: NI,
			par: BI,
			parsim: II,
			parsl: zI,
			part: _I,
			PartialD: MI,
			Pcy: GI,
			pcy: UI,
			percnt: VI,
			period: WI,
			permil: FI,
			perp: jI,
			pertenk: HI,
			Pfr: YI,
			pfr: $I,
			Phi: KI,
			phi: XI,
			phiv: QI,
			phmmat: ZI,
			phone: JI,
			Pi: ez,
			pi: tz,
			pitchfork: nz,
			piv: rz,
			planck: az,
			planckh: oz,
			plankv: iz,
			plusacir: sz,
			plusb: lz,
			pluscir: dz,
			plus: cz,
			plusdo: pz,
			plusdu: uz,
			pluse: mz,
			PlusMinus: gz,
			plusmn: hz,
			plussim: fz,
			plustwo: yz,
			pm: bz,
			Poincareplane: xz,
			pointint: kz,
			popf: Sz,
			Popf: wz,
			pound: vz,
			prap: Tz,
			Pr: Cz,
			pr: Ez,
			prcue: Az,
			precapprox: Oz,
			prec: Pz,
			preccurlyeq: Lz,
			Precedes: qz,
			PrecedesEqual: Rz,
			PrecedesSlantEqual: Dz,
			PrecedesTilde: Nz,
			preceq: Bz,
			precnapprox: Iz,
			precneqq: zz,
			precnsim: _z,
			pre: Mz,
			prE: Gz,
			precsim: Uz,
			prime: Vz,
			Prime: Wz,
			primes: Fz,
			prnap: jz,
			prnE: Hz,
			prnsim: Yz,
			prod: $z,
			Product: Kz,
			profalar: Xz,
			profline: Qz,
			profsurf: Zz,
			prop: Jz,
			Proportional: e_,
			Proportion: t_,
			propto: n_,
			prsim: r_,
			prurel: a_,
			Pscr: o_,
			pscr: i_,
			Psi: s_,
			psi: l_,
			puncsp: d_,
			Qfr: c_,
			qfr: p_,
			qint: u_,
			qopf: m_,
			Qopf: g_,
			qprime: h_,
			Qscr: f_,
			qscr: y_,
			quaternions: b_,
			quatint: x_,
			quest: k_,
			questeq: S_,
			quot: w_,
			QUOT: v_,
			rAarr: T_,
			race: C_,
			Racute: E_,
			racute: A_,
			radic: O_,
			raemptyv: P_,
			rang: L_,
			Rang: q_,
			rangd: R_,
			range: D_,
			rangle: N_,
			raquo: B_,
			rarrap: I_,
			rarrb: z_,
			rarrbfs: __,
			rarrc: M_,
			rarr: G_,
			Rarr: U_,
			rArr: V_,
			rarrfs: W_,
			rarrhk: F_,
			rarrlp: j_,
			rarrpl: H_,
			rarrsim: Y_,
			Rarrtl: $_,
			rarrtl: K_,
			rarrw: X_,
			ratail: Q_,
			rAtail: Z_,
			ratio: J_,
			rationals: eM,
			rbarr: tM,
			rBarr: nM,
			RBarr: rM,
			rbbrk: aM,
			rbrace: oM,
			rbrack: iM,
			rbrke: sM,
			rbrksld: lM,
			rbrkslu: dM,
			Rcaron: cM,
			rcaron: pM,
			Rcedil: uM,
			rcedil: mM,
			rceil: gM,
			rcub: hM,
			Rcy: fM,
			rcy: yM,
			rdca: bM,
			rdldhar: xM,
			rdquo: kM,
			rdquor: SM,
			rdsh: wM,
			real: vM,
			realine: TM,
			realpart: CM,
			reals: EM,
			Re: AM,
			rect: OM,
			reg: PM,
			REG: LM,
			ReverseElement: qM,
			ReverseEquilibrium: RM,
			ReverseUpEquilibrium: DM,
			rfisht: NM,
			rfloor: BM,
			rfr: IM,
			Rfr: zM,
			rHar: _M,
			rhard: MM,
			rharu: GM,
			rharul: UM,
			Rho: VM,
			rho: WM,
			rhov: FM,
			RightAngleBracket: jM,
			RightArrowBar: HM,
			rightarrow: YM,
			RightArrow: $M,
			Rightarrow: KM,
			RightArrowLeftArrow: XM,
			rightarrowtail: QM,
			RightCeiling: ZM,
			RightDoubleBracket: JM,
			RightDownTeeVector: eG,
			RightDownVectorBar: tG,
			RightDownVector: nG,
			RightFloor: rG,
			rightharpoondown: aG,
			rightharpoonup: oG,
			rightleftarrows: iG,
			rightleftharpoons: sG,
			rightrightarrows: lG,
			rightsquigarrow: dG,
			RightTeeArrow: cG,
			RightTee: pG,
			RightTeeVector: uG,
			rightthreetimes: mG,
			RightTriangleBar: gG,
			RightTriangle: hG,
			RightTriangleEqual: fG,
			RightUpDownVector: yG,
			RightUpTeeVector: bG,
			RightUpVectorBar: xG,
			RightUpVector: kG,
			RightVectorBar: SG,
			RightVector: wG,
			ring: vG,
			risingdotseq: TG,
			rlarr: CG,
			rlhar: EG,
			rlm: AG,
			rmoustache: OG,
			rmoust: PG,
			rnmid: LG,
			roang: qG,
			roarr: RG,
			robrk: DG,
			ropar: NG,
			ropf: BG,
			Ropf: IG,
			roplus: zG,
			rotimes: _G,
			RoundImplies: MG,
			rpar: GG,
			rpargt: UG,
			rppolint: VG,
			rrarr: WG,
			Rrightarrow: FG,
			rsaquo: jG,
			rscr: HG,
			Rscr: YG,
			rsh: $G,
			Rsh: KG,
			rsqb: XG,
			rsquo: QG,
			rsquor: ZG,
			rthree: JG,
			rtimes: eU,
			rtri: tU,
			rtrie: nU,
			rtrif: rU,
			rtriltri: aU,
			RuleDelayed: oU,
			ruluhar: iU,
			rx: sU,
			Sacute: lU,
			sacute: dU,
			sbquo: cU,
			scap: pU,
			Scaron: uU,
			scaron: mU,
			Sc: gU,
			sc: hU,
			sccue: fU,
			sce: yU,
			scE: bU,
			Scedil: xU,
			scedil: kU,
			Scirc: SU,
			scirc: wU,
			scnap: vU,
			scnE: TU,
			scnsim: CU,
			scpolint: EU,
			scsim: AU,
			Scy: OU,
			scy: PU,
			sdotb: LU,
			sdot: qU,
			sdote: RU,
			searhk: DU,
			searr: NU,
			seArr: BU,
			searrow: IU,
			sect: zU,
			semi: _U,
			seswar: MU,
			setminus: GU,
			setmn: UU,
			sext: VU,
			Sfr: WU,
			sfr: FU,
			sfrown: jU,
			sharp: HU,
			SHCHcy: YU,
			shchcy: $U,
			SHcy: KU,
			shcy: XU,
			ShortDownArrow: QU,
			ShortLeftArrow: ZU,
			shortmid: JU,
			shortparallel: eV,
			ShortRightArrow: tV,
			ShortUpArrow: nV,
			shy: rV,
			Sigma: aV,
			sigma: oV,
			sigmaf: iV,
			sigmav: sV,
			sim: lV,
			simdot: dV,
			sime: cV,
			simeq: pV,
			simg: uV,
			simgE: mV,
			siml: gV,
			simlE: hV,
			simne: fV,
			simplus: yV,
			simrarr: bV,
			slarr: xV,
			SmallCircle: kV,
			smallsetminus: SV,
			smashp: wV,
			smeparsl: vV,
			smid: TV,
			smile: CV,
			smt: EV,
			smte: AV,
			smtes: OV,
			SOFTcy: PV,
			softcy: LV,
			solbar: qV,
			solb: RV,
			sol: DV,
			Sopf: NV,
			sopf: BV,
			spades: IV,
			spadesuit: zV,
			spar: _V,
			sqcap: MV,
			sqcaps: GV,
			sqcup: UV,
			sqcups: VV,
			Sqrt: WV,
			sqsub: FV,
			sqsube: jV,
			sqsubset: HV,
			sqsubseteq: YV,
			sqsup: $V,
			sqsupe: KV,
			sqsupset: XV,
			sqsupseteq: QV,
			square: ZV,
			Square: JV,
			SquareIntersection: eW,
			SquareSubset: tW,
			SquareSubsetEqual: nW,
			SquareSuperset: rW,
			SquareSupersetEqual: aW,
			SquareUnion: oW,
			squarf: iW,
			squ: sW,
			squf: lW,
			srarr: dW,
			Sscr: cW,
			sscr: pW,
			ssetmn: uW,
			ssmile: mW,
			sstarf: gW,
			Star: hW,
			star: fW,
			starf: yW,
			straightepsilon: bW,
			straightphi: xW,
			strns: kW,
			sub: SW,
			Sub: wW,
			subdot: vW,
			subE: TW,
			sube: CW,
			subedot: EW,
			submult: AW,
			subnE: OW,
			subne: PW,
			subplus: LW,
			subrarr: qW,
			subset: RW,
			Subset: DW,
			subseteq: NW,
			subseteqq: BW,
			SubsetEqual: IW,
			subsetneq: zW,
			subsetneqq: _W,
			subsim: MW,
			subsub: GW,
			subsup: UW,
			succapprox: VW,
			succ: WW,
			succcurlyeq: FW,
			Succeeds: jW,
			SucceedsEqual: HW,
			SucceedsSlantEqual: YW,
			SucceedsTilde: $W,
			succeq: KW,
			succnapprox: XW,
			succneqq: QW,
			succnsim: ZW,
			succsim: JW,
			SuchThat: eF,
			sum: tF,
			Sum: nF,
			sung: rF,
			sup1: aF,
			sup2: oF,
			sup3: iF,
			sup: sF,
			Sup: lF,
			supdot: dF,
			supdsub: cF,
			supE: pF,
			supe: uF,
			supedot: mF,
			Superset: gF,
			SupersetEqual: hF,
			suphsol: fF,
			suphsub: yF,
			suplarr: bF,
			supmult: xF,
			supnE: kF,
			supne: SF,
			supplus: wF,
			supset: vF,
			Supset: TF,
			supseteq: CF,
			supseteqq: EF,
			supsetneq: AF,
			supsetneqq: OF,
			supsim: PF,
			supsub: LF,
			supsup: qF,
			swarhk: RF,
			swarr: DF,
			swArr: NF,
			swarrow: BF,
			swnwar: IF,
			szlig: zF,
			Tab: _F,
			target: MF,
			Tau: GF,
			tau: UF,
			tbrk: VF,
			Tcaron: WF,
			tcaron: FF,
			Tcedil: jF,
			tcedil: HF,
			Tcy: YF,
			tcy: $F,
			tdot: KF,
			telrec: XF,
			Tfr: QF,
			tfr: ZF,
			there4: JF,
			therefore: ej,
			Therefore: tj,
			Theta: nj,
			theta: rj,
			thetasym: aj,
			thetav: oj,
			thickapprox: ij,
			thicksim: sj,
			ThickSpace: lj,
			ThinSpace: dj,
			thinsp: cj,
			thkap: pj,
			thksim: uj,
			THORN: mj,
			thorn: gj,
			tilde: hj,
			Tilde: fj,
			TildeEqual: yj,
			TildeFullEqual: bj,
			TildeTilde: xj,
			timesbar: kj,
			timesb: Sj,
			times: wj,
			timesd: vj,
			tint: Tj,
			toea: Cj,
			topbot: Ej,
			topcir: Aj,
			top: Oj,
			Topf: Pj,
			topf: Lj,
			topfork: qj,
			tosa: Rj,
			tprime: Dj,
			trade: Nj,
			TRADE: Bj,
			triangle: Ij,
			triangledown: zj,
			triangleleft: _j,
			trianglelefteq: Mj,
			triangleq: Gj,
			triangleright: Uj,
			trianglerighteq: Vj,
			tridot: Wj,
			trie: Fj,
			triminus: jj,
			TripleDot: Hj,
			triplus: Yj,
			trisb: $j,
			tritime: Kj,
			trpezium: Xj,
			Tscr: Qj,
			tscr: Zj,
			TScy: Jj,
			tscy: eH,
			TSHcy: tH,
			tshcy: nH,
			Tstrok: rH,
			tstrok: aH,
			twixt: oH,
			twoheadleftarrow: iH,
			twoheadrightarrow: sH,
			Uacute: lH,
			uacute: dH,
			uarr: cH,
			Uarr: pH,
			uArr: uH,
			Uarrocir: mH,
			Ubrcy: gH,
			ubrcy: hH,
			Ubreve: fH,
			ubreve: yH,
			Ucirc: bH,
			ucirc: xH,
			Ucy: kH,
			ucy: SH,
			udarr: wH,
			Udblac: vH,
			udblac: TH,
			udhar: CH,
			ufisht: EH,
			Ufr: AH,
			ufr: OH,
			Ugrave: PH,
			ugrave: LH,
			uHar: qH,
			uharl: RH,
			uharr: DH,
			uhblk: NH,
			ulcorn: BH,
			ulcorner: IH,
			ulcrop: zH,
			ultri: _H,
			Umacr: MH,
			umacr: GH,
			uml: UH,
			UnderBar: VH,
			UnderBrace: WH,
			UnderBracket: FH,
			UnderParenthesis: jH,
			Union: HH,
			UnionPlus: YH,
			Uogon: $H,
			uogon: KH,
			Uopf: XH,
			uopf: QH,
			UpArrowBar: ZH,
			uparrow: JH,
			UpArrow: eY,
			Uparrow: tY,
			UpArrowDownArrow: nY,
			updownarrow: rY,
			UpDownArrow: aY,
			Updownarrow: oY,
			UpEquilibrium: iY,
			upharpoonleft: sY,
			upharpoonright: lY,
			uplus: dY,
			UpperLeftArrow: cY,
			UpperRightArrow: pY,
			upsi: uY,
			Upsi: mY,
			upsih: gY,
			Upsilon: hY,
			upsilon: fY,
			UpTeeArrow: yY,
			UpTee: bY,
			upuparrows: xY,
			urcorn: kY,
			urcorner: SY,
			urcrop: wY,
			Uring: vY,
			uring: TY,
			urtri: CY,
			Uscr: EY,
			uscr: AY,
			utdot: OY,
			Utilde: PY,
			utilde: LY,
			utri: qY,
			utrif: RY,
			uuarr: DY,
			Uuml: NY,
			uuml: BY,
			uwangle: IY,
			vangrt: zY,
			varepsilon: _Y,
			varkappa: MY,
			varnothing: GY,
			varphi: UY,
			varpi: VY,
			varpropto: WY,
			varr: FY,
			vArr: jY,
			varrho: HY,
			varsigma: YY,
			varsubsetneq: $Y,
			varsubsetneqq: KY,
			varsupsetneq: XY,
			varsupsetneqq: QY,
			vartheta: ZY,
			vartriangleleft: JY,
			vartriangleright: e$,
			vBar: t$,
			Vbar: n$,
			vBarv: r$,
			Vcy: a$,
			vcy: o$,
			vdash: i$,
			vDash: s$,
			Vdash: l$,
			VDash: d$,
			Vdashl: c$,
			veebar: p$,
			vee: u$,
			Vee: m$,
			veeeq: g$,
			vellip: h$,
			verbar: f$,
			Verbar: y$,
			vert: b$,
			Vert: x$,
			VerticalBar: k$,
			VerticalLine: S$,
			VerticalSeparator: w$,
			VerticalTilde: v$,
			VeryThinSpace: T$,
			Vfr: C$,
			vfr: E$,
			vltri: A$,
			vnsub: O$,
			vnsup: P$,
			Vopf: L$,
			vopf: q$,
			vprop: R$,
			vrtri: D$,
			Vscr: N$,
			vscr: B$,
			vsubnE: I$,
			vsubne: z$,
			vsupnE: _$,
			vsupne: M$,
			Vvdash: G$,
			vzigzag: U$,
			Wcirc: V$,
			wcirc: W$,
			wedbar: F$,
			wedge: j$,
			Wedge: H$,
			wedgeq: Y$,
			weierp: $$,
			Wfr: K$,
			wfr: X$,
			Wopf: Q$,
			wopf: Z$,
			wp: J$,
			wr: eK,
			wreath: tK,
			Wscr: nK,
			wscr: rK,
			xcap: aK,
			xcirc: oK,
			xcup: iK,
			xdtri: sK,
			Xfr: lK,
			xfr: dK,
			xharr: cK,
			xhArr: pK,
			Xi: uK,
			xi: mK,
			xlarr: gK,
			xlArr: hK,
			xmap: fK,
			xnis: yK,
			xodot: bK,
			Xopf: xK,
			xopf: kK,
			xoplus: SK,
			xotime: wK,
			xrarr: vK,
			xrArr: TK,
			Xscr: CK,
			xscr: EK,
			xsqcup: AK,
			xuplus: OK,
			xutri: PK,
			xvee: LK,
			xwedge: qK,
			Yacute: RK,
			yacute: DK,
			YAcy: NK,
			yacy: BK,
			Ycirc: IK,
			ycirc: zK,
			Ycy: _K,
			ycy: MK,
			yen: GK,
			Yfr: UK,
			yfr: VK,
			YIcy: WK,
			yicy: FK,
			Yopf: jK,
			yopf: HK,
			Yscr: YK,
			yscr: $K,
			YUcy: KK,
			yucy: XK,
			yuml: QK,
			Yuml: ZK,
			Zacute: JK,
			zacute: eX,
			Zcaron: tX,
			zcaron: nX,
			Zcy: rX,
			zcy: aX,
			Zdot: oX,
			zdot: iX,
			zeetrf: sX,
			ZeroWidthSpace: lX,
			Zeta: dX,
			zeta: cX,
			zfr: pX,
			Zfr: uX,
			ZHcy: mX,
			zhcy: gX,
			zigrarr: hX,
			zopf: fX,
			Zopf: yX,
			Zscr: bX,
			zscr: xX,
			zwj: kX,
			zwnj: SX,
			default: wX
		}),
		TX = Ic && Bc || Ic,
		CX = vX && wX || vX,
		EX = Tn(TX),
		AX = Cn(EX),
		OX = On(EX, AX),
		PX = Tn(CX),
		LX = Cn(PX),
		qX = On(PX, LX),
		RX = /[^\0-\x7F]/g,
		DX = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
		NX = Cn(EX),
		BX = {
			XML: OX,
			HTML: qX,
			escape: function(e) {
				return e.replace(NX, En).replace(DX, An).replace(RX, En)
			}
		},
		IX = '\xC1',
		zX = '\xE1',
		_X = '\xC2',
		MX = '\xE2',
		GX = '\xB4',
		UX = '\xC6',
		VX = '\xE6',
		WX = '\xC0',
		FX = '\xE0',
		jX = '&',
		HX = '&',
		YX = '\xC5',
		$X = '\xE5',
		KX = '\xC3',
		XX = '\xE3',
		QX = '\xC4',
		ZX = '\xE4',
		JX = '\xA6',
		eQ = '\xC7',
		tQ = '\xE7',
		nQ = '\xB8',
		rQ = '\xA2',
		aQ = '\xA9',
		oQ = '\xA9',
		iQ = '\xA4',
		sQ = '\xB0',
		lQ = '\xF7',
		dQ = '\xC9',
		cQ = '\xE9',
		pQ = '\xCA',
		uQ = '\xEA',
		mQ = '\xC8',
		gQ = '\xE8',
		hQ = '\xD0',
		fQ = '\xF0',
		yQ = '\xCB',
		bQ = '\xEB',
		xQ = '\xBD',
		kQ = '\xBC',
		SQ = '\xBE',
		wQ = '>',
		vQ = '>',
		TQ = '\xCD',
		CQ = '\xED',
		EQ = '\xCE',
		AQ = '\xEE',
		OQ = '\xA1',
		PQ = '\xCC',
		LQ = '\xEC',
		qQ = '\xBF',
		RQ = '\xCF',
		DQ = '\xEF',
		NQ = '\xAB',
		BQ = '<',
		IQ = '<',
		zQ = '\xAF',
		_Q = '\xB5',
		MQ = '\xB7',
		GQ = '\xA0',
		UQ = '\xAC',
		VQ = '\xD1',
		WQ = '\xF1',
		FQ = '\xD3',
		jQ = '\xF3',
		HQ = '\xD4',
		YQ = '\xF4',
		$Q = '\xD2',
		KQ = '\xF2',
		XQ = '\xAA',
		QQ = '\xBA',
		ZQ = '\xD8',
		JQ = '\xF8',
		eZ = '\xD5',
		tZ = '\xF5',
		nZ = '\xD6',
		rZ = '\xF6',
		aZ = '\xB6',
		oZ = '\xB1',
		iZ = '\xA3',
		sZ = '"',
		lZ = '"',
		dZ = '\xBB',
		cZ = '\xAE',
		pZ = '\xAE',
		uZ = '\xA7',
		mZ = '\xAD',
		gZ = '\xB9',
		hZ = '\xB2',
		fZ = '\xB3',
		yZ = '\xDF',
		bZ = '\xDE',
		xZ = '\xFE',
		kZ = '\xD7',
		SZ = '\xDA',
		wZ = '\xFA',
		vZ = '\xDB',
		TZ = '\xFB',
		CZ = '\xD9',
		EZ = '\xF9',
		AZ = '\xA8',
		OZ = '\xDC',
		PZ = '\xFC',
		LZ = '\xDD',
		qZ = '\xFD',
		RZ = '\xA5',
		DZ = '\xFF',
		NZ = {
			Aacute: IX,
			aacute: zX,
			Acirc: _X,
			acirc: MX,
			acute: GX,
			AElig: UX,
			aelig: VX,
			Agrave: WX,
			agrave: FX,
			amp: jX,
			AMP: HX,
			Aring: YX,
			aring: $X,
			Atilde: KX,
			atilde: XX,
			Auml: QX,
			auml: ZX,
			brvbar: JX,
			Ccedil: eQ,
			ccedil: tQ,
			cedil: nQ,
			cent: rQ,
			copy: aQ,
			COPY: oQ,
			curren: iQ,
			deg: sQ,
			divide: lQ,
			Eacute: dQ,
			eacute: cQ,
			Ecirc: pQ,
			ecirc: uQ,
			Egrave: mQ,
			egrave: gQ,
			ETH: hQ,
			eth: fQ,
			Euml: yQ,
			euml: bQ,
			frac12: xQ,
			frac14: kQ,
			frac34: SQ,
			gt: wQ,
			GT: vQ,
			Iacute: TQ,
			iacute: CQ,
			Icirc: EQ,
			icirc: AQ,
			iexcl: OQ,
			Igrave: PQ,
			igrave: LQ,
			iquest: qQ,
			Iuml: RQ,
			iuml: DQ,
			laquo: NQ,
			lt: BQ,
			LT: IQ,
			macr: zQ,
			micro: _Q,
			middot: MQ,
			nbsp: GQ,
			not: UQ,
			Ntilde: VQ,
			ntilde: WQ,
			Oacute: FQ,
			oacute: jQ,
			Ocirc: HQ,
			ocirc: YQ,
			Ograve: $Q,
			ograve: KQ,
			ordf: XQ,
			ordm: QQ,
			Oslash: ZQ,
			oslash: JQ,
			Otilde: eZ,
			otilde: tZ,
			Ouml: nZ,
			ouml: rZ,
			para: aZ,
			plusmn: oZ,
			pound: iZ,
			quot: sZ,
			QUOT: lZ,
			raquo: dZ,
			reg: cZ,
			REG: pZ,
			sect: uZ,
			shy: mZ,
			sup1: gZ,
			sup2: hZ,
			sup3: fZ,
			szlig: yZ,
			THORN: bZ,
			thorn: xZ,
			times: kZ,
			Uacute: SZ,
			uacute: wZ,
			Ucirc: vZ,
			ucirc: TZ,
			Ugrave: CZ,
			ugrave: EZ,
			uml: AZ,
			Uuml: OZ,
			uuml: PZ,
			Yacute: LZ,
			yacute: qZ,
			yen: RZ,
			yuml: DZ
		},
		BZ = Object.freeze({
			Aacute: IX,
			aacute: zX,
			Acirc: _X,
			acirc: MX,
			acute: GX,
			AElig: UX,
			aelig: VX,
			Agrave: WX,
			agrave: FX,
			amp: jX,
			AMP: HX,
			Aring: YX,
			aring: $X,
			Atilde: KX,
			atilde: XX,
			Auml: QX,
			auml: ZX,
			brvbar: JX,
			Ccedil: eQ,
			ccedil: tQ,
			cedil: nQ,
			cent: rQ,
			copy: aQ,
			COPY: oQ,
			curren: iQ,
			deg: sQ,
			divide: lQ,
			Eacute: dQ,
			eacute: cQ,
			Ecirc: pQ,
			ecirc: uQ,
			Egrave: mQ,
			egrave: gQ,
			ETH: hQ,
			eth: fQ,
			Euml: yQ,
			euml: bQ,
			frac12: xQ,
			frac14: kQ,
			frac34: SQ,
			gt: wQ,
			GT: vQ,
			Iacute: TQ,
			iacute: CQ,
			Icirc: EQ,
			icirc: AQ,
			iexcl: OQ,
			Igrave: PQ,
			igrave: LQ,
			iquest: qQ,
			Iuml: RQ,
			iuml: DQ,
			laquo: NQ,
			lt: BQ,
			LT: IQ,
			macr: zQ,
			micro: _Q,
			middot: MQ,
			nbsp: GQ,
			not: UQ,
			Ntilde: VQ,
			ntilde: WQ,
			Oacute: FQ,
			oacute: jQ,
			Ocirc: HQ,
			ocirc: YQ,
			Ograve: $Q,
			ograve: KQ,
			ordf: XQ,
			ordm: QQ,
			Oslash: ZQ,
			oslash: JQ,
			Otilde: eZ,
			otilde: tZ,
			Ouml: nZ,
			ouml: rZ,
			para: aZ,
			plusmn: oZ,
			pound: iZ,
			quot: sZ,
			QUOT: lZ,
			raquo: dZ,
			reg: cZ,
			REG: pZ,
			sect: uZ,
			shy: mZ,
			sup1: gZ,
			sup2: hZ,
			sup3: fZ,
			szlig: yZ,
			THORN: bZ,
			thorn: xZ,
			times: kZ,
			Uacute: SZ,
			uacute: wZ,
			Ucirc: vZ,
			ucirc: TZ,
			Ugrave: CZ,
			ugrave: EZ,
			uml: AZ,
			Uuml: OZ,
			uuml: PZ,
			Yacute: LZ,
			yacute: qZ,
			yen: RZ,
			yuml: DZ,
			default: NZ
		}),
		IZ = {
			0: 65533,
			128: 8364,
			130: 8218,
			131: 402,
			132: 8222,
			133: 8230,
			134: 8224,
			135: 8225,
			136: 710,
			137: 8240,
			138: 352,
			139: 8249,
			140: 338,
			142: 381,
			145: 8216,
			146: 8217,
			147: 8220,
			148: 8221,
			149: 8226,
			150: 8211,
			151: 8212,
			152: 732,
			153: 8482,
			154: 353,
			155: 8250,
			156: 339,
			158: 382,
			159: 376
		},
		zZ = Object.freeze({
			default: IZ
		}),
		_Z = zZ && IZ || zZ,
		MZ = function(e) {
			if (55296 <= e && 57343 >= e || 1114111 < e) return '\uFFFD';
			e in _Z && (e = _Z[e]);
			var t = '';
			return 65535 < e && (e -= 65536, t += Gd(55296 | 1023 & e >>> 10), e = 56320 | 1023 & e), t += Gd(e), t
		},
		GZ = BZ && NZ || BZ,
		UZ = Pn(TX),
		VZ = Pn(CX),
		WZ = function() {
			function e(e) {
				return ';' !== e.substr(-1) && (e += ';'), i(e)
			}
			for (var t = Object.keys(GZ).sort(Ln), n = Object.keys(CX).sort(Ln), r = 0, a = 0; r < n.length; r++) t[a] === n[r] ? (n[r] += ';?', a++) : n[r] += ';';
			var o = new RegExp('&(?:' + n.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)', 'g'),
				i = qn(CX);
			return function(t) {
				return (t + '').replace(o, e)
			}
		}(),
		FZ = {
			XML: UZ,
			HTML: WZ,
			HTMLStrict: VZ
		},
		jZ = e(function(e, t) {
			t.decode = function(e, t) {
				return (!t || 0 >= t ? FZ.XML : FZ.HTML)(e)
			}, t.decodeStrict = function(e, t) {
				return (!t || 0 >= t ? FZ.XML : FZ.HTMLStrict)(e)
			}, t.encode = function(e, t) {
				return (!t || 0 >= t ? BX.XML : BX.HTML)(e)
			}, t.encodeXML = BX.XML, t.encodeHTML4 = t.encodeHTML5 = t.encodeHTML = BX.HTML, t.decodeXML = t.decodeXMLStrict = FZ.XML, t.decodeHTML4 = t.decodeHTML5 = t.decodeHTML = FZ.HTML, t.decodeHTML4Strict = t.decodeHTML5Strict = t.decodeHTMLStrict = FZ.HTMLStrict, t.escape = BX.escape
		}),
		HZ = e(function(e) {
			function t(e, t) {
				if (e) {
					var n = '',
						r;
					for (var a in e) r = e[a], n && (n += ' '), n += !r && i[a] ? a : a + '="' + (t.decodeEntities ? jZ.encodeXML(r) : r) + '"';
					return n
				}
			}

			function n(e, n) {
				'svg' === e.name && (n = {
					decodeEntities: n.decodeEntities,
					xmlMode: !0
				});
				var r = '<' + e.name,
					a = t(e.attribs, n);
				return a && (r += ' ' + a), n.xmlMode && (!e.children || 0 === e.children.length) ? r += '/>' : (r += '>', e.children && (r += c(e.children, n)), (!d[e.name] || n.xmlMode) && (r += '</' + e.name + '>')), r
			}

			function r(e) {
				return '<' + e.data + '>'
			}

			function a(e, t) {
				var n = e.data || '';
				return t.decodeEntities && !(e.parent && e.parent.name in l) && (n = jZ.encodeXML(n)), n
			}

			function o(e) {
				return '<![CDATA[' + e.children[0].data + ']]>'
			}

			function s(e) {
				return '<!--' + e.data + '-->'
			}
			var i = {
					__proto__: null,
					allowfullscreen: !0,
					async: !0,
					autofocus: !0,
					autoplay: !0,
					checked: !0,
					controls: !0,
					default: !0,
					defer: !0,
					disabled: !0,
					hidden: !0,
					ismap: !0,
					loop: !0,
					multiple: !0,
					muted: !0,
					open: !0,
					readonly: !0,
					required: !0,
					reversed: !0,
					scoped: !0,
					seamless: !0,
					selected: !0,
					typemustmatch: !0
				},
				l = {
					__proto__: null,
					style: !0,
					script: !0,
					xmp: !0,
					iframe: !0,
					noembed: !0,
					noframes: !0,
					plaintext: !0,
					noscript: !0
				},
				d = {
					__proto__: null,
					area: !0,
					base: !0,
					basefont: !0,
					br: !0,
					col: !0,
					command: !0,
					embed: !0,
					frame: !0,
					hr: !0,
					img: !0,
					input: !0,
					isindex: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0
				},
				c = e.exports = function(e, t) {
					Array.isArray(e) || e.cheerio || (e = [e]), t = t || {};
					for (var l = '', d = 0, i; d < e.length; d++) i = e[d], l += 'root' === i.type ? c(i.children, t) : Pc.isTag(i) ? n(i, t) : i.type === Pc.Directive ? r(i) : i.type === Pc.Comment ? s(i) : i.type === Pc.CDATA ? o(i) : a(i, t);
					return l
				}
		}),
		YZ = Oc.isTag,
		$Z = {
			getInnerHTML: function(e, t) {
				return e.children ? e.children.map(function(e) {
					return HZ(e, t)
				}).join('') : ''
			},
			getOuterHTML: HZ,
			getText: Rn
		},
		KZ = e(function(e, t) {
			var n = t.getChildren = function(e) {
					return e.children
				},
				r = t.getParent = function(e) {
					return e.parent
				};
			t.getSiblings = function(e) {
				var t = r(e);
				return t ? n(t) : [e]
			}, t.getAttributeValue = function(e, t) {
				return e.attribs && e.attribs[t]
			}, t.hasAttrib = function(e, t) {
				return !!e.attribs && hasOwnProperty.call(e.attribs, t)
			}, t.getName = function(e) {
				return e.name
			}
		}),
		XZ = {
			removeElement: function(e) {
				if (e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e.parent) {
					var t = e.parent.children;
					t.splice(t.lastIndexOf(e), 1)
				}
			},
			replaceElement: function(e, t) {
				var n = t.prev = e.prev;
				n && (n.next = t);
				var r = t.next = e.next;
				r && (r.prev = t);
				var a = t.parent = e.parent;
				if (a) {
					var o = a.children;
					o[o.lastIndexOf(e)] = t
				}
			},
			appendChild: function(e, t) {
				if (t.parent = e, 1 !== e.children.push(t)) {
					var n = e.children[e.children.length - 2];
					n.next = t, t.prev = n, t.next = null
				}
			},
			append: function(e, t) {
				var n = e.parent,
					r = e.next;
				if (t.next = r, t.prev = e, e.next = t, t.parent = n, !r) n && n.children.push(t);
				else if (r.prev = t, n) {
					var a = n.children;
					a.splice(a.lastIndexOf(r), 0, t)
				}
			},
			prepend: function(e, t) {
				var n = e.parent;
				if (n) {
					var r = n.children;
					r.splice(r.lastIndexOf(e), 0, t)
				}
				e.prev && (e.prev.next = t), t.parent = n, t.prev = e.prev, t.next = e, e.prev = t
			}
		},
		QZ = Oc.isTag,
		ZZ = {
			filter: function(e, t, n, r) {
				return Array.isArray(t) || (t = [t]), 'number' == typeof r && isFinite(r) || (r = Infinity), Dn(e, t, !1 !== n, r)
			},
			find: Dn,
			findOneChild: function(e, t) {
				for (var n = 0, r = t.length; n < r; n++)
					if (e(t[n])) return t[n];
				return null
			},
			findOne: Nn,
			existsOne: Bn,
			findAll: In
		},
		JZ = e(function(e, t) {
			function n(e, t) {
				return 'function' == typeof t ? function(n) {
					return n.attribs && t(n.attribs[e])
				} : function(n) {
					return n.attribs && n.attribs[e] === t
				}
			}

			function r(e, t) {
				return function(n) {
					return e(n) || t(n)
				}
			}
			var a = t.isTag = Oc.isTag;
			t.testElement = function(e, t) {
				for (var n in e)
					if (!e.hasOwnProperty(n));
					else if ('tag_name' == n) {
					if (!a(t) || !e.tag_name(t.name)) return !1;
				} else if ('tag_type' == n) {
					if (!e.tag_type(t.type)) return !1;
				} else if ('tag_contains' == n) {
					if (a(t) || !e.tag_contains(t.data)) return !1;
				} else if (!t.attribs || !e[n](t.attribs[n])) return !1;
				return !0
			};
			var o = {
				tag_name: function(e) {
					return 'function' == typeof e ? function(t) {
						return a(t) && e(t.name)
					} : '*' === e ? a : function(t) {
						return a(t) && t.name === e
					}
				},
				tag_type: function(e) {
					return 'function' == typeof e ? function(t) {
						return e(t.type)
					} : function(t) {
						return t.type === e
					}
				},
				tag_contains: function(e) {
					return 'function' == typeof e ? function(t) {
						return !a(t) && e(t.data)
					} : function(t) {
						return !a(t) && t.data === e
					}
				}
			};
			t.getElements = function(e, t, a, i) {
				var s = Object.keys(e).map(function(t) {
					var r = e[t];
					return t in o ? o[t](r) : n(t, r)
				});
				return 0 === s.length ? [] : this.filter(s.reduce(r), t, a, i)
			}, t.getElementById = function(e, t, r) {
				return Array.isArray(t) || (t = [t]), this.findOne(n('id', e), t, !1 !== r)
			}, t.getElementsByTagName = function(e, t, n, r) {
				return this.filter(o.tag_name(e), t, n, r)
			}, t.getElementsByTagType = function(e, t, n, r) {
				return this.filter(o.tag_type(e), t, n, r)
			}
		}),
		eJ = e(function(e, t) {
			t.removeSubsets = function(e) {
				for (var t = e.length, n, r, a; - 1 < --t;) {
					for (n = r = e[t], e[t] = null, a = !0; r;) {
						if (-1 < e.indexOf(r)) {
							a = !1, e.splice(t, 1);
							break
						}
						r = r.parent
					}
					a && (e[t] = n)
				}
				return e
			};
			var n = {
					DISCONNECTED: 1,
					PRECEDING: 2,
					FOLLOWING: 4,
					CONTAINS: 8,
					CONTAINED_BY: 16
				},
				r = t.compareDocumentPosition = function(e, t) {
					var r = [],
						a = [],
						o, i, s, l, d, c;
					if (e === t) return 0;
					for (o = e; o;) r.unshift(o), o = o.parent;
					for (o = t; o;) a.unshift(o), o = o.parent;
					for (c = 0; r[c] === a[c];) c++;
					return 0 === c ? n.DISCONNECTED : (i = r[c - 1], s = i.children, l = r[c], d = a[c], s.indexOf(l) > s.indexOf(d) ? i === t ? n.FOLLOWING | n.CONTAINED_BY : n.FOLLOWING : i === e ? n.PRECEDING | n.CONTAINS : n.PRECEDING)
				};
			t.uniqueSort = function(e) {
				var t = e.length,
					a, o;
				for (e = e.slice(); - 1 < --t;) a = e[t], o = e.indexOf(a), -1 < o && o < t && e.splice(t, 1);
				return e.sort(function(e, t) {
					var a = r(e, t);
					return a & n.PRECEDING ? -1 : a & n.FOLLOWING ? 1 : 0
				}), e
			}
		}),
		tJ = e(function(e) {
			var t = e.exports;
			[$Z, KZ, XZ, ZZ, JZ, eJ].forEach(function(e) {
				Object.keys(e).forEach(function(n) {
					t[n] = e[n].bind(t)
				})
			})
		}),
		nJ = {
			trueFunc: function() {
				return !0
			},
			falseFunc: function() {
				return !1
			}
		};
	var rJ = function(e, t) {
			var n = [];
			if (e = Gn(n, e + '', t), '' !== e) throw new SyntaxError('Unmatched selector: ' + e);
			return n
		},
		aJ = /^(?:\\.|[\w\-\u00c0-\uFFFF])+/,
		oJ = /\\([\da-f]{1,6}\s?|(\s)|.)/ig,
		iJ = /^\s*((?:\\.|[\w\u00c0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])(.*?)\3|(#?(?:\\.|[\w\u00c0-\uFFFF\-])*)|)|)\s*(i)?\]/,
		sJ = {
			__proto__: null,
			undefined: 'exists',
			"": 'equals',
			"~": 'element',
			"^": 'start',
			$: 'end',
			"*": 'any',
			"!": 'not',
			"|": 'hyphen'
		},
		lJ = {
			__proto__: null,
			">": 'child',
			"<": 'parent',
			"~": 'sibling',
			"+": 'adjacent'
		},
		dJ = {
			__proto__: null,
			"#": ['id', 'equals'],
			".": ['class', 'element']
		},
		cJ = {
			__proto__: null,
			has: !0,
			not: !0,
			matches: !0
		},
		pJ = {
			__proto__: null,
			contains: !0,
			icontains: !0
		},
		uJ = {
			__proto__: null,
			'"': !0,
			"'": !0
		},
		mJ = 50,
		gJ = 30,
		hJ = 1,
		fJ = 0,
		yJ = -1,
		bJ = -1,
		xJ = -1,
		kJ = -1,
		SJ = -1,
		wJ = {
			universal: mJ,
			tag: gJ,
			attribute: hJ,
			pseudo: fJ,
			descendant: yJ,
			child: bJ,
			parent: xJ,
			sibling: kJ,
			adjacent: SJ
		},
		vJ = Object.freeze({
			universal: mJ,
			tag: gJ,
			attribute: hJ,
			pseudo: fJ,
			descendant: yJ,
			child: bJ,
			parent: xJ,
			sibling: kJ,
			adjacent: SJ,
			default: wJ
		}),
		TJ = vJ && wJ || vJ,
		CJ = function(e) {
			for (var t = e.map(Vn), n = 1, r; n < e.length; n++)
				if (r = t[n], !(0 > r))
					for (var a = n - 1, o; 0 <= a && r < t[a]; a--) o = e[a + 1], e[a + 1] = e[a], e[a] = o, t[a + 1] = t[a], t[a] = r
		},
		EJ = {
			__proto__: null,
			exists: 10,
			equals: 8,
			not: 7,
			start: 6,
			end: 6,
			any: 5,
			hyphen: 4,
			element: 4
		},
		AJ = nJ.falseFunc,
		OJ = /[-[\]{}()*+?.,\\^$|#\s]/g,
		PJ = function(e) {
			var t = {
				__proto__: null,
				equals: function(t, n) {
					var r = n.name,
						a = n.value;
					return n.ignoreCase ? (a = a.toLowerCase(), function(n) {
						var o = e.getAttributeValue(n, r);
						return null != o && o.toLowerCase() === a && t(n)
					}) : function(n) {
						return e.getAttributeValue(n, r) === a && t(n)
					}
				},
				hyphen: function(t, n) {
					var r = n.name,
						a = n.value,
						o = a.length;
					return n.ignoreCase ? (a = a.toLowerCase(), function(n) {
						var i = e.getAttributeValue(n, r);
						return null != i && (i.length === o || '-' === i.charAt(o)) && i.substr(0, o).toLowerCase() === a && t(n)
					}) : function(n) {
						var i = e.getAttributeValue(n, r);
						return null != i && i.substr(0, o) === a && (i.length === o || '-' === i.charAt(o)) && t(n)
					}
				},
				element: function(t, n) {
					var r = n.name,
						a = n.value;
					if (/\s/.test(a)) return AJ;
					a = a.replace(OJ, '\\$&');
					var o = '(?:^|\\s)' + a + '(?:$|\\s)',
						i = n.ignoreCase ? 'i' : '',
						s = new RegExp(o, i);
					return function(n) {
						var a = e.getAttributeValue(n, r);
						return null != a && s.test(a) && t(n)
					}
				},
				exists: function(t, n) {
					var r = n.name;
					return function(n) {
						return e.hasAttrib(n, r) && t(n)
					}
				},
				start: function(t, n) {
					var r = n.name,
						a = n.value,
						o = a.length;
					return 0 === o ? AJ : n.ignoreCase ? (a = a.toLowerCase(), function(n) {
						var i = e.getAttributeValue(n, r);
						return null != i && i.substr(0, o).toLowerCase() === a && t(n)
					}) : function(n) {
						var i = e.getAttributeValue(n, r);
						return null != i && i.substr(0, o) === a && t(n)
					}
				},
				end: function(t, n) {
					var r = n.name,
						a = n.value,
						o = -a.length;
					return 0 == o ? AJ : n.ignoreCase ? (a = a.toLowerCase(), function(n) {
						var i = e.getAttributeValue(n, r);
						return null != i && i.substr(o).toLowerCase() === a && t(n)
					}) : function(n) {
						var i = e.getAttributeValue(n, r);
						return null != i && i.substr(o) === a && t(n)
					}
				},
				any: function(t, n) {
					var r = n.name,
						a = n.value;
					if ('' === a) return AJ;
					if (n.ignoreCase) {
						var o = new RegExp(a.replace(OJ, '\\$&'), 'i');
						return function(n) {
							var a = e.getAttributeValue(n, r);
							return null != a && o.test(a) && t(n)
						}
					}
					return function(n) {
						var o = e.getAttributeValue(n, r);
						return null != o && 0 <= o.indexOf(a) && t(n)
					}
				},
				not: function(t, n) {
					var r = n.name,
						a = n.value;
					return '' === a ? function(n) {
						return !!e.getAttributeValue(n, r) && t(n)
					} : n.ignoreCase ? (a = a.toLowerCase(), function(n) {
						var o = e.getAttributeValue(n, r);
						return null != o && o.toLowerCase() !== a && t(n)
					}) : function(n) {
						return e.getAttributeValue(n, r) !== a && t(n)
					}
				}
			};
			return {
				compile: function(e, n, r) {
					if (r && r.strict && (n.ignoreCase || 'not' === n.action)) throw new Error('Unsupported attribute selector');
					return t[n.action](e, n)
				},
				rules: t
			}
		},
		LJ = function(e, t) {
			return {
				__proto__: null,
				attribute: PJ(e).compile,
				pseudo: t.compile,
				tag: function(t, n) {
					var r = n.name;
					return function(n) {
						return e.getName(n) === r && t(n)
					}
				},
				descendant: function(t) {
					return function(n) {
						for (var r = !1; !r && (n = e.getParent(n));) r = t(n);
						return r
					}
				},
				_flexibleDescendant: function(t) {
					return function(n) {
						for (var r = t(n); !r && (n = e.getParent(n));) r = t(n);
						return r
					}
				},
				parent: function(t, n, r) {
					function a(n) {
						return e.isTag(n) && t(n)
					}
					if (r && r.strict) throw new Error('Parent selector isn\'t part of CSS3');
					return function(t) {
						return e.getChildren(t).some(a)
					}
				},
				child: function(t) {
					return function(n) {
						var r = e.getParent(n);
						return !!r && t(r)
					}
				},
				sibling: function(t) {
					return function(n) {
						for (var r = e.getSiblings(n), a = 0; a < r.length; a++)
							if (e.isTag(r[a])) {
								if (r[a] === n) break;
								if (t(r[a])) return !0
							}
						return !1
					}
				},
				adjacent: function(t) {
					return function(n) {
						for (var r = e.getSiblings(n), a = 0, o; a < r.length; a++)
							if (e.isTag(r[a])) {
								if (r[a] === n) break;
								o = r[a]
							}
						return !!o && t(o)
					}
				},
				universal: function(e) {
					return e
				}
			}
		},
		qJ = function(e) {
			if (e = e.trim().toLowerCase(), 'even' === e) return [2, 0];
			if ('odd' === e) return [2, 1];
			var t = e.match(RJ);
			if (!t) throw new SyntaxError('n-th rule couldn\'t be parsed (\'' + e + '\')');
			var n;
			return t[1] ? (n = parseInt(t[1], 10), isNaN(n) && ('-' === t[1].charAt(0) ? n = -1 : n = 1)) : n = 0, [n, t[3] ? parseInt((t[2] || '') + t[3], 10) : 0]
		},
		RJ = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/,
		DJ = function(e) {
			var t = e[0],
				n = e[1] - 1;
			if (0 > n && 0 >= t) return BJ;
			if (-1 === t) return function(e) {
				return e <= n
			};
			if (0 === t) return function(e) {
				return e === n
			};
			if (1 === t) return 0 > n ? NJ : function(e) {
				return e >= n
			};
			var r = n % t;
			return (0 > r && (r += t), 1 < t) ? function(e) {
				return e >= n && e % t === r
			} : (t *= -1, function(e) {
				return e <= n && e % t === r
			})
		},
		NJ = nJ.trueFunc,
		BJ = nJ.falseFunc,
		IJ = function(e) {
			return DJ(qJ(e))
		};
	IJ.parse = qJ, IJ.compile = DJ;
	var zJ = nJ.trueFunc,
		_J = nJ.falseFunc,
		MJ = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/,
		GJ = function(e) {
			var t = Fn(e),
				n = Wn(e);
			return {
				compile: function(e, r, a, o) {
					var i = r.name,
						s = r.data;
					if (a && a.strict && !MJ.test(i)) throw new Error(':' + i + ' isn\'t part of CSS3');
					if ('function' == typeof n[i]) return jn(n[i], i, s), n[i](e, s, a, o);
					if ('function' == typeof t[i]) {
						var l = t[i];
						return jn(l, i, s), e === zJ ? l : function(t) {
							return l(t, s) && e(t)
						}
					}
					throw new Error('unmatched pseudo-class :' + i)
				},
				filters: n,
				pseudos: t
			}
		},
		UJ = function(t) {
			function e(e, t, a) {
				var o = r(e, t, a);
				return n(o)
			}

			function n(e) {
				return function(n) {
					return t.isTag(n) && e(n)
				}
			}

			function r(e, t, n) {
				var r = rJ(e, t);
				return i(r, t, n)
			}

			function a(e) {
				return 'pseudo' === e.type && ('scope' === e.name || Array.isArray(e.data) && e.data.some(function(e) {
					return e.some(a)
				}))
			}

			function o(e, n) {
				var r = !!n && !!n.length && n.every(function(n) {
					return n === y || !!t.getParent(n)
				});
				e.forEach(function(e) {
					if (0 < e.length && s(e[0]) && 'descendant' !== e[0].type);
					else if (r && !a(e)) e.unshift(g);
					else return;
					e.unshift(f)
				})
			}

			function i(e, t, n) {
				e = e.filter(function(e) {
					return 0 < e.length
				}), e.forEach(CJ);
				var r = Array.isArray(n);
				n = t && t.context || n, n && !r && (n = [n]), o(e, n);
				var a = !1,
					i = e.map(function(e) {
						if (e[0] && e[1] && 'scope' === e[0].name) {
							var o = e[1].type;
							r && 'descendant' === o ? e[1] = h : ('adjacent' === o || 'sibling' === o) && (a = !0)
						}
						return l(e, t, n)
					}).reduce(d, WJ);
				return i.shouldTestNextSiblings = a, i
			}

			function s(e) {
				return 0 > TJ[e.type]
			}

			function l(e, t, n) {
				return e.reduce(function(e, r) {
					return e === WJ ? e : m[r.type](e, r, t, n)
				}, t && t.rootFunc || VJ)
			}

			function d(e, t) {
				return t === WJ || e === VJ ? e : e === WJ || t === VJ ? t : function(n) {
					return e(n) || t(n)
				}
			}

			function c(e) {
				return e.some(s)
			}
			var p = GJ(t),
				u = p.filters,
				m = LJ(t, p),
				g = {
					type: 'descendant'
				},
				h = {
					type: '_flexibleDescendant'
				},
				f = {
					type: 'pseudo',
					name: 'scope'
				},
				y = {};
			return u.not = function(e, t, n, r) {
				var a = {
					xmlMode: !!(n && n.xmlMode),
					strict: !!(n && n.strict)
				};
				if (a.strict && (1 < t.length || t.some(c))) throw new Error('complex selectors in :not aren\'t allowed in strict mode');
				var o = i(t, a, r);
				return o === WJ ? e : o === VJ ? WJ : function(t) {
					return !o(t) && e(t)
				}
			}, u.has = function(e, r, a) {
				var o = {
						xmlMode: !!(a && a.xmlMode),
						strict: !!(a && a.strict)
					},
					s = r.some(c) ? [y] : null,
					l = i(r, o, s);
				return l === WJ ? WJ : l === VJ ? function(n) {
					return t.getChildren(n).some(t.isTag) && e(n)
				} : (l = n(l), s ? function(n) {
					return e(n) && (s[0] = n, t.existsOne(l, t.getChildren(n)))
				} : function(n) {
					return e(n) && t.existsOne(l, t.getChildren(n))
				})
			}, u.matches = function(e, t, n, r) {
				var a = {
					xmlMode: !!(n && n.xmlMode),
					strict: !!(n && n.strict),
					rootFunc: e
				};
				return i(t, a, r)
			}, e.compileToken = i, e.compileUnsafe = r, e.Pseudos = p, e
		},
		VJ = nJ.trueFunc,
		WJ = nJ.falseFunc;
	var FJ = Xn,
		jJ = nJ.falseFunc,
		HJ = UJ(tJ),
		YJ = Yn(function(e, t, n) {
			return e !== jJ && t && 0 !== t.length ? n.adapter.findAll(e, t) : []
		}),
		$J = Yn(function(e, t, n) {
			return e !== jJ && t && 0 !== t.length ? n.adapter.findOne(e, t) : null
		});
	Xn.compile = HJ, Xn.filters = HJ.Pseudos.filters, Xn.pseudos = HJ.Pseudos.pseudos, Xn.selectAll = YJ, Xn.selectOne = $J, Xn.is = function(e, t, n) {
		n = n || {}, n.adapter = n.adapter || tJ;
		var r = Hn(n.adapter);
		return ('function' == typeof t ? t : r(t, n))(e)
	}, Xn.parse = HJ, Xn.iterate = YJ, Xn._compileUnsafe = HJ.compileUnsafe, Xn._compileToken = HJ.compileToken, 'use strict';
	var KJ = ['isTag', 'getAttributeValue', 'getChildren', 'getName', 'getParent', 'getText'];
	var XJ = function(e) {
			Qn(e);
			var t = {};
			return Object.assign(t, {
				removeSubsets: function(e) {
					return Zn(t, e)
				},
				existsOne: function(e, n) {
					return Jn(t, e, n)
				},
				getSiblings: function(e) {
					return er(t, e)
				},
				hasAttrib: function(e, n) {
					return tr(t, e, n)
				},
				findOne: function(e, n) {
					return nr(t, e, n)
				},
				findAll: function(e, n) {
					return rr(t, e, n)
				}
			}, e), t
		}({
			isTag: function(e) {
				return e.isElem()
			},
			getParent: function(e) {
				return e.parentNode || null
			},
			getChildren: function(e) {
				return e.content || []
			},
			getName: function(e) {
				return e.elem
			},
			getText: function(e) {
				return e.content[0].text || e.content[0].cdata || ''
			},
			getAttributeValue: function(e, t) {
				return e.hasAttr(t) ? e.attr(t).value : null
			}
		}),
		QJ = e(function(e) {
			var t = {
					xmlMode: !0,
					adapter: XJ
				},
				n = e.exports = function(e, t) {
					Object.assign(this, e), t && Object.defineProperty(this, 'parentNode', {
						writable: !0,
						value: t
					})
				};
			n.prototype.clone = function() {
				var e = this,
					t = {};
				Object.keys(e).forEach(function(n) {
					'content' !== n && (t[n] = e[n])
				}), t = JSON.parse(JSON.stringify(t));
				var r = new n(t, !!e.parentNode);
				return e.content && (r.content = e.content.map(function(e) {
					var t = e.clone();
					return t.parentNode = r, t
				})), r
			}, n.prototype.isElem = function(e) {
				return e ? Array.isArray(e) ? !!this.elem && -1 < e.indexOf(this.elem) : !!this.elem && this.elem === e : !!this.elem
			}, n.prototype.renameElem = function(e) {
				return e && 'string' == typeof e && (this.elem = this.local = e), this
			}, n.prototype.isEmpty = function() {
				return !this.content || !this.content.length
			}, n.prototype.closestElem = function(e) {
				for (var t = this;
					(t = t.parentNode) && !t.isElem(e););
				return t
			}, n.prototype.spliceContent = function(e, t, n) {
				return 2 > arguments.length ? [] : (Array.isArray(n) || (n = Array.apply(null, arguments).slice(2)), n.forEach(function(e) {
					e.parentNode = this
				}, this), this.content.splice.apply(this.content, [e, t].concat(n)))
			}, n.prototype.hasAttr = function(e, t) {
				return this.attrs && Object.keys(this.attrs).length && (arguments.length ? void 0 === t ? !!this.attrs[e] : !!this.attrs[e] && this.attrs[e].value === t.toString() : !!this.attrs)
			}, n.prototype.hasAttrLocal = function(e, t) {
				function n(t) {
					return t.local === e
				}

				function r(n) {
					return n.local === e && t == n.value
				}

				function a(n) {
					return n.local === e && t.test(n.value)
				}

				function o(n) {
					return n.local === e && t(n.value)
				}
				if (!this.attrs || !Object.keys(this.attrs).length) return !1;
				if (!arguments.length) return !!this.attrs;
				var i;
				switch (null != t && t.constructor && t.constructor.name) {
					case 'Number':
					case 'String':
						i = r;
						break;
					case 'RegExp':
						i = a;
						break;
					case 'Function':
						i = o;
						break;
					default:
						i = n;
				}
				return this.someAttr(i)
			}, n.prototype.attr = function(e, t) {
				return this.hasAttr() && arguments.length ? void 0 === t ? this.attrs[e] : this.hasAttr(e, t) ? this.attrs[e] : void 0 : void 0
			}, n.prototype.computedAttr = function(e, t) {
				if (arguments.length) {
					for (var n = this; n && (!n.hasAttr(e) || !n.attr(e).value); n = n.parentNode);
					return null == t ? n && n.hasAttr(e) ? n.attrs[e].value : void 0 : !!n && n.hasAttr(e, t)
				}
			}, n.prototype.removeAttr = function(e, t, n) {
				return !!arguments.length && (Array.isArray(e) && e.forEach(this.removeAttr, this), !!this.hasAttr(e)) && (!n && t && this.attrs[e].value !== t ? !1 : (delete this.attrs[e], Object.keys(this.attrs).length || delete this.attrs, !0))
			}, n.prototype.addAttr = function(e) {
				return (e = e || {}, void 0 !== e.name && void 0 !== e.prefix && void 0 !== e.local) && (this.attrs = this.attrs || {}, this.attrs[e.name] = e, 'class' === e.name && this.class.hasClass(), 'style' === e.name && this.style.hasStyle(), this.attrs[e.name])
			}, n.prototype.eachAttr = function(e, t) {
				if (!this.hasAttr()) return !1;
				for (var n in this.attrs) e.call(t, this.attrs[n]);
				return !0
			}, n.prototype.someAttr = function(e, t) {
				if (!this.hasAttr()) return !1;
				for (var n in this.attrs)
					if (e.call(t, this.attrs[n])) return !0;
				return !1
			}, n.prototype.querySelectorAll = function(e) {
				var n = FJ(e, this, t);
				return 0 < n.length ? n : null
			}, n.prototype.querySelector = function(e) {
				return FJ.selectOne(e, this, t)
			}, n.prototype.matches = function(e) {
				return FJ.is(this, e, t)
			}
		});
	var ZJ = Object.prototype.toString,
		JJ = function(e) {
			var t = ZJ.call(e),
				n = '[object Arguments]' === t;
			return n || (n = '[object Array]' !== t && null !== e && 'object' == typeof e && 'number' == typeof e.length && 0 <= e.length && '[object Function]' === ZJ.call(e.callee)), n
		};
	var eee = Object.prototype.hasOwnProperty,
		tee = Object.prototype.toString,
		nee = Array.prototype.slice,
		ree = Object.prototype.propertyIsEnumerable,
		aee = !ree.call({
			toString: null
		}, 'toString'),
		oee = ree.call(function() {}, 'prototype'),
		iee = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
		see = function(e) {
			var t = e.constructor;
			return t && t.prototype === e
		},
		lee = {
			$applicationCache: !0,
			$console: !0,
			$external: !0,
			$frame: !0,
			$frameElement: !0,
			$frames: !0,
			$innerHeight: !0,
			$innerWidth: !0,
			$outerHeight: !0,
			$outerWidth: !0,
			$pageXOffset: !0,
			$pageYOffset: !0,
			$parent: !0,
			$scrollLeft: !0,
			$scrollTop: !0,
			$scrollX: !0,
			$scrollY: !0,
			$self: !0,
			$webkitIndexedDB: !0,
			$webkitStorageInfo: !0,
			$window: !0
		},
		dee = function() {
			if ('undefined' == typeof window) return !1;
			for (var e in window) try {
				if (!lee['$' + e] && eee.call(window, e) && null !== window[e] && 'object' == typeof window[e]) try {
					see(window[e])
				} catch (t) {
					return !0
				}
			} catch (t) {
				return !0
			}
			return !1
		}(),
		cee = function(e) {
			if ('undefined' == typeof window || !dee) return see(e);
			try {
				return see(e)
			} catch (t) {
				return !1
			}
		},
		pee = function(e) {
			var t = null !== e && 'object' == typeof e,
				n = '[object Function]' === tee.call(e),
				r = JJ(e),
				a = t && '[object String]' === tee.call(e),
				o = [];
			if (!t && !n && !r) throw new TypeError('Object.keys called on a non-object');
			if (a && 0 < e.length && !eee.call(e, 0))
				for (var s = 0; s < e.length; ++s) o.push(s + '');
			if (r && 0 < e.length)
				for (var i = 0; i < e.length; ++i) o.push(i + '');
			else
				for (var l in e) !(oee && n && 'prototype' == l) && eee.call(e, l) && o.push(l + '');
			if (aee)
				for (var d = cee(e), c = 0; c < iee.length; ++c) !(d && 'constructor' === iee[c]) && eee.call(e, iee[c]) && o.push(iee[c]);
			return o
		};
	pee.shim = function() {
		if (Object.keys) {
			var e = function() {
				return 2 === (Object.keys(arguments) || '').length
			}(1, 2);
			if (!e) {
				var t = Object.keys;
				Object.keys = function(e) {
					return JJ(e) ? t(nee.call(e)) : t(e)
				}
			}
		} else Object.keys = pee;
		return Object.keys || pee
	};
	var uee = Object.prototype.hasOwnProperty,
		mee = Object.prototype.toString,
		gee = function(e, t, n) {
			if ('[object Function]' !== mee.call(t)) throw new TypeError('iterator must be a function');
			var r = e.length;
			if (r === +r)
				for (var a = 0; a < r; a++) t.call(n, e[a], a, e);
			else
				for (var o in e) uee.call(e, o) && t.call(n, e[o], o, e)
		};
	var hee = 'function' == typeof Symbol && 'symbol' == typeof Symbol(),
		fee = Object.prototype.toString,
		yee = function(e) {
			return 'function' == typeof e && '[object Function]' === fee.call(e)
		},
		bee = Object.defineProperty && function() {
			var e = {};
			try {
				for (var t in Object.defineProperty(e, 'x', {
						enumerable: !1,
						value: e
					}), e) return !1;
				return e.x === e
			} catch (t) {
				return !1
			}
		}(),
		xee = function(e, t, n, r) {
			(!(t in e) || yee(r) && r()) && (bee ? Object.defineProperty(e, t, {
				configurable: !0,
				enumerable: !1,
				value: n,
				writable: !0
			}) : e[t] = n)
		},
		kee = function(e, t) {
			var n = 2 < arguments.length ? arguments[2] : {},
				r = pee(t);
			hee && (r = r.concat(Object.getOwnPropertySymbols(t))), gee(r, function(r) {
				xee(e, r, t[r], n[r])
			})
		};
	kee.supportsDescriptors = !!bee;
	var See = kee;
	var wee = Array.prototype.slice,
		Tee = Object.prototype.toString;
	var Cee = Function.prototype.bind || function(e) {
		var t = this;
		if ('function' != typeof t || Tee.call(t) !== '[object Function]') throw new TypeError('Function.prototype.bind called on incompatible ' + t);
		for (var n = wee.call(arguments, 1), r = function() {
				if (this instanceof i) {
					var r = t.apply(this, n.concat(wee.call(arguments)));
					return Object(r) === r ? r : this
				}
				return t.apply(e, n.concat(wee.call(arguments)))
			}, a = Md(0, t.length - n.length), o = [], s = 0, i; s < a; s++) o.push('$' + s);
		if (i = Function('binder', 'return function (' + o.join(',') + '){ return binder.apply(this,arguments); }')(r), t.prototype) {
			var l = function() {};
			l.prototype = t.prototype, i.prototype = new l, l.prototype = null
		}
		return i
	};
	var Eee = Cee.call(Function.call, Object.prototype.hasOwnProperty),
		Aee = function(e) {
			return null === e || 'function' != typeof e && 'object' != typeof e
		};
	var Oee = Function.prototype.toString,
		Pee = /^\s*class\b/,
		Lee = function(e) {
			try {
				var t = Oee.call(e);
				return Pee.test(t)
			} catch (t) {
				return !1
			}
		},
		qee = function(e) {
			try {
				return !Lee(e) && (Oee.call(e), !0)
			} catch (t) {
				return !1
			}
		},
		Ree = Object.prototype.toString,
		Dee = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
		Nee = function(e) {
			if (!e) return !1;
			if ('function' != typeof e && 'object' != typeof e) return !1;
			if ('function' == typeof e && !e.prototype) return !0;
			if (Dee) return qee(e);
			if (Lee(e)) return !1;
			var t = Ree.call(e);
			return t === '[object Function]' || t === '[object GeneratorFunction]'
		};
	var Bee = Date.prototype.getDay,
		Iee = function(e) {
			try {
				return Bee.call(e), !0
			} catch (t) {
				return !1
			}
		},
		zee = Object.prototype.toString,
		_ee = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
		Mee = function(e) {
			return 'object' != typeof e || null === e ? !1 : _ee ? Iee(e) : zee.call(e) === '[object Date]'
		},
		Gee = e(function(e) {
			var t = Object.prototype.toString,
				n = 'function' == typeof Symbol && 'symbol' == typeof Symbol();
			if (n) {
				var r = Symbol.prototype.toString,
					a = /^Symbol\(.*\)$/,
					o = function(e) {
						return 'symbol' == typeof e.valueOf() && a.test(r.call(e))
					};
				e.exports = function(e) {
					if ('symbol' == typeof e) return !0;
					if ('[object Symbol]' !== t.call(e)) return !1;
					try {
						return o(e)
					} catch (t) {
						return !1
					}
				}
			} else e.exports = function() {
				return !1
			}
		});
	var Uee = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
		Wee = function(e, t) {
			if ('undefined' == typeof e || null === e) throw new TypeError('Cannot call method on ' + e);
			if ('string' != typeof t || 'number' !== t && 'string' !== t) throw new TypeError('hint must be "string" or "number"');
			var n = 'string' === t ? ['toString', 'valueOf'] : ['valueOf', 'toString'],
				r, a, o;
			for (o = 0; o < n.length; ++o)
				if (r = e[n[o]], Nee(r) && (a = r.call(e), Aee(a))) return a;
			throw new TypeError('No default value')
		},
		Fee = function(e, t) {
			var n = e[t];
			if (null !== n && 'undefined' != typeof n) {
				if (!Nee(n)) throw new TypeError(n + ' returned for property ' + t + ' of object ' + e + ' is not a function');
				return n
			}
		},
		jee = function(e, t) {
			if (Aee(e)) return e;
			var n = 'default';
			1 < arguments.length && (t === String ? n = 'string' : t === Number && (n = 'number'));
			var r;
			if (Uee && (Symbol.toPrimitive ? r = Fee(e, Symbol.toPrimitive) : Gee(e) && (r = Symbol.prototype.valueOf)), 'undefined' != typeof r) {
				var a = r.call(e, n);
				if (Aee(a)) return a;
				throw new TypeError('unable to convert exotic object to primitive')
			}
			return 'default' == n && (Mee(e) || Gee(e)) && (n = 'string'), Wee(e, 'default' == n ? 'number' : n)
		};
	var Hee = Object.getOwnPropertyDescriptor ? function() {
			return Object.getOwnPropertyDescriptor(arguments, 'callee').get
		}() : function() {
			throw new TypeError
		},
		Yee = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator,
		$ee = Object.getPrototypeOf || function(e) {
			return e.__proto__
		},
		Kee = ute ? $ee(ute) : pte,
		Xee = mte ? mte.constructor : pte,
		Qee = gte ? $ee(gte) : pte,
		Zee = gte ? gte() : pte,
		Jee = 'undefined' == typeof Uint8Array ? pte : $ee(Uint8Array),
		ete = {
			"$ %Array%": Array,
			"$ %ArrayBuffer%": 'undefined' == typeof ArrayBuffer ? pte : ArrayBuffer,
			"$ %ArrayBufferPrototype%": 'undefined' == typeof ArrayBuffer ? pte : ArrayBuffer.prototype,
			"$ %ArrayIteratorPrototype%": Yee ? $ee([][Symbol.iterator]()) : pte,
			"$ %ArrayPrototype%": Array.prototype,
			"$ %ArrayProto_entries%": Array.prototype.entries,
			"$ %ArrayProto_forEach%": Array.prototype.forEach,
			"$ %ArrayProto_keys%": Array.prototype.keys,
			"$ %ArrayProto_values%": Array.prototype.values,
			"$ %AsyncFromSyncIteratorPrototype%": pte,
			"$ %AsyncFunction%": Xee,
			"$ %AsyncFunctionPrototype%": Xee ? Xee.prototype : pte,
			"$ %AsyncGenerator%": gte ? $ee(Zee) : pte,
			"$ %AsyncGeneratorFunction%": Qee,
			"$ %AsyncGeneratorPrototype%": Qee ? Qee.prototype : pte,
			"$ %AsyncIteratorPrototype%": Zee && Yee && Symbol.asyncIterator ? Zee[Symbol.asyncIterator]() : pte,
			"$ %Atomics%": 'undefined' == typeof Atomics ? pte : Atomics,
			"$ %Boolean%": Boolean,
			"$ %BooleanPrototype%": Boolean.prototype,
			"$ %DataView%": 'undefined' == typeof DataView ? pte : DataView,
			"$ %DataViewPrototype%": 'undefined' == typeof DataView ? pte : DataView.prototype,
			"$ %Date%": Date,
			"$ %DatePrototype%": Date.prototype,
			"$ %decodeURI%": decodeURI,
			"$ %decodeURIComponent%": decodeURIComponent,
			"$ %encodeURI%": encodeURI,
			"$ %encodeURIComponent%": encodeURIComponent,
			"$ %Error%": Error,
			"$ %ErrorPrototype%": Error.prototype,
			"$ %eval%": eval,
			"$ %EvalError%": EvalError,
			"$ %EvalErrorPrototype%": EvalError.prototype,
			"$ %Float32Array%": 'undefined' == typeof Float32Array ? pte : Float32Array,
			"$ %Float32ArrayPrototype%": 'undefined' == typeof Float32Array ? pte : Float32Array.prototype,
			"$ %Float64Array%": 'undefined' == typeof Float64Array ? pte : Float64Array,
			"$ %Float64ArrayPrototype%": 'undefined' == typeof Float64Array ? pte : Float64Array.prototype,
			"$ %Function%": Function,
			"$ %FunctionPrototype%": Function.prototype,
			"$ %Generator%": ute ? $ee(ute()) : pte,
			"$ %GeneratorFunction%": Kee,
			"$ %GeneratorPrototype%": Kee ? Kee.prototype : pte,
			"$ %Int8Array%": 'undefined' == typeof Int8Array ? pte : Int8Array,
			"$ %Int8ArrayPrototype%": 'undefined' == typeof Int8Array ? pte : Int8Array.prototype,
			"$ %Int16Array%": 'undefined' == typeof Int16Array ? pte : Int16Array,
			"$ %Int16ArrayPrototype%": 'undefined' == typeof Int16Array ? pte : Int8Array.prototype,
			"$ %Int32Array%": 'undefined' == typeof Int32Array ? pte : Int32Array,
			"$ %Int32ArrayPrototype%": 'undefined' == typeof Int32Array ? pte : Int32Array.prototype,
			"$ %isFinite%": isFinite,
			"$ %isNaN%": isNaN,
			"$ %IteratorPrototype%": Yee ? $ee($ee([][Symbol.iterator]())) : pte,
			"$ %JSON%": JSON,
			"$ %JSONParse%": JSON.parse,
			"$ %Map%": 'undefined' == typeof Map ? pte : Map,
			"$ %MapIteratorPrototype%": 'undefined' != typeof Map && Yee ? $ee(new Map()[Symbol.iterator]()) : pte,
			"$ %MapPrototype%": 'undefined' == typeof Map ? pte : Map.prototype,
			"$ %Math%": Math,
			"$ %Number%": Number,
			"$ %NumberPrototype%": Number.prototype,
			"$ %Object%": Object,
			"$ %ObjectPrototype%": Object.prototype,
			"$ %ObjProto_toString%": Object.prototype.toString,
			"$ %ObjProto_valueOf%": Object.prototype.valueOf,
			"$ %parseFloat%": parseFloat,
			"$ %parseInt%": parseInt,
			"$ %Promise%": 'undefined' == typeof Promise ? pte : Promise,
			"$ %PromisePrototype%": 'undefined' == typeof Promise ? pte : Promise.prototype,
			"$ %PromiseProto_then%": 'undefined' == typeof Promise ? pte : Promise.prototype.then,
			"$ %Promise_all%": 'undefined' == typeof Promise ? pte : Promise.all,
			"$ %Promise_reject%": 'undefined' == typeof Promise ? pte : Promise.reject,
			"$ %Promise_resolve%": 'undefined' == typeof Promise ? pte : Promise.resolve,
			"$ %Proxy%": 'undefined' == typeof Proxy ? pte : Proxy,
			"$ %RangeError%": RangeError,
			"$ %RangeErrorPrototype%": RangeError.prototype,
			"$ %ReferenceError%": ReferenceError,
			"$ %ReferenceErrorPrototype%": ReferenceError.prototype,
			"$ %Reflect%": 'undefined' == typeof Reflect ? pte : Reflect,
			"$ %RegExp%": RegExp,
			"$ %RegExpPrototype%": RegExp.prototype,
			"$ %Set%": 'undefined' == typeof Set ? pte : Set,
			"$ %SetIteratorPrototype%": 'undefined' != typeof Set && Yee ? $ee(new Set()[Symbol.iterator]()) : pte,
			"$ %SetPrototype%": 'undefined' == typeof Set ? pte : Set.prototype,
			"$ %SharedArrayBuffer%": 'undefined' == typeof SharedArrayBuffer ? pte : SharedArrayBuffer,
			"$ %SharedArrayBufferPrototype%": 'undefined' == typeof SharedArrayBuffer ? pte : SharedArrayBuffer.prototype,
			"$ %String%": String,
			"$ %StringIteratorPrototype%": Yee ? $ee('' [Symbol.iterator]()) : pte,
			"$ %StringPrototype%": String.prototype,
			"$ %Symbol%": Yee ? Symbol : pte,
			"$ %SymbolPrototype%": Yee ? Symbol.prototype : pte,
			"$ %SyntaxError%": SyntaxError,
			"$ %SyntaxErrorPrototype%": SyntaxError.prototype,
			"$ %ThrowTypeError%": Hee,
			"$ %TypedArray%": Jee,
			"$ %TypedArrayPrototype%": Jee ? Jee.prototype : pte,
			"$ %TypeError%": TypeError,
			"$ %TypeErrorPrototype%": TypeError.prototype,
			"$ %Uint8Array%": 'undefined' == typeof Uint8Array ? pte : Uint8Array,
			"$ %Uint8ArrayPrototype%": 'undefined' == typeof Uint8Array ? pte : Uint8Array.prototype,
			"$ %Uint8ClampedArray%": 'undefined' == typeof Uint8ClampedArray ? pte : Uint8ClampedArray,
			"$ %Uint8ClampedArrayPrototype%": 'undefined' == typeof Uint8ClampedArray ? pte : Uint8ClampedArray.prototype,
			"$ %Uint16Array%": 'undefined' == typeof Uint16Array ? pte : Uint16Array,
			"$ %Uint16ArrayPrototype%": 'undefined' == typeof Uint16Array ? pte : Uint16Array.prototype,
			"$ %Uint32Array%": 'undefined' == typeof Uint32Array ? pte : Uint32Array,
			"$ %Uint32ArrayPrototype%": 'undefined' == typeof Uint32Array ? pte : Uint32Array.prototype,
			"$ %URIError%": URIError,
			"$ %URIErrorPrototype%": URIError.prototype,
			"$ %WeakMap%": 'undefined' == typeof WeakMap ? pte : WeakMap,
			"$ %WeakMapPrototype%": 'undefined' == typeof WeakMap ? pte : WeakMap.prototype,
			"$ %WeakSet%": 'undefined' == typeof WeakSet ? pte : WeakSet,
			"$ %WeakSetPrototype%": 'undefined' == typeof WeakSet ? pte : WeakSet.prototype
		},
		tte = function(e, t) {
			if (1 < arguments.length && 'boolean' != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
			var n = '$ ' + e;
			if (!(n in ete)) throw new SyntaxError('intrinsic ' + e + ' does not exist!');
			if ('undefined' == typeof ete[n] && !t) throw new TypeError('intrinsic ' + e + ' exists, but is not available. Please file an issue!');
			return ete[n]
		},
		nte = _d || function(e) {
			return e !== e
		},
		rte = _d || function(e) {
			return e !== e
		},
		ate = Number.isFinite || function(e) {
			return 'number' == typeof e && !rte(e) && e !== Infinity && e !== -Infinity
		},
		ote = Cee.call(Function.call, Object.prototype.hasOwnProperty),
		ite = Object.assign,
		ste = function(e, t) {
			if (ite) return ite(e, t);
			for (var n in t) ote(t, n) && (e[n] = t[n]);
			return e
		},
		lte = function(e) {
			return 0 <= e ? 1 : -1
		},
		dte = function(e, t) {
			var n = e % t;
			return Fd(0 <= n ? n : n + t)
		},
		cte = function(e) {
			return null === e || 'function' != typeof e && 'object' != typeof e
		},
		pte, ute, mte, gte;
	var hte = Object.prototype.toString,
		fte = {
			"[[DefaultValue]]": function(e, t) {
				var n = t || ('[object Date]' === hte.call(e) ? String : Number);
				if (n === String || n === Number) {
					var r = n === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'],
						a, o;
					for (o = 0; o < r.length; ++o)
						if (Nee(e[r[o]]) && (a = e[r[o]](), Aee(a))) return a;
					throw new TypeError('No default value')
				}
				throw new TypeError('invalid [[DefaultValue]] hint supplied')
			}
		};
	var yte = tte('%Object%'),
		bte = tte('%TypeError%'),
		xte = tte('%String%'),
		kte = {
			ToPrimitive: function(e, t) {
				return Aee(e) ? e : fte['[[DefaultValue]]'](e, t)
			},
			ToBoolean: function(e) {
				return !!e
			},
			ToNumber: function(e) {
				return +e
			},
			ToInteger: function(e) {
				var t = this.ToNumber(e);
				return nte(t) ? 0 : 0 !== t && ate(t) ? lte(t) * Fd(Vd(t)) : t
			},
			ToInt32: function(e) {
				return this.ToNumber(e) >> 0
			},
			ToUint32: function(e) {
				return this.ToNumber(e) >>> 0
			},
			ToUint16: function(e) {
				var t = this.ToNumber(e);
				if (nte(t) || 0 === t || !ate(t)) return 0;
				var n = lte(t) * Fd(Vd(t));
				return dte(n, 65536)
			},
			ToString: function(e) {
				return xte(e)
			},
			ToObject: function(e) {
				return this.CheckObjectCoercible(e), yte(e)
			},
			CheckObjectCoercible: function(e, t) {
				if (null == e) throw new bte(t || 'Cannot call method on ' + e);
				return e
			},
			IsCallable: Nee,
			SameValue: function(e, t) {
				return e === t ? 0 !== e || 1 / e == 1 / t : nte(e) && nte(t)
			},
			Type: function(e) {
				return null === e ? 'Null' : 'undefined' == typeof e ? 'Undefined' : 'function' == typeof e || 'object' == typeof e ? 'Object' : 'number' == typeof e ? 'Number' : 'boolean' == typeof e ? 'Boolean' : 'string' == typeof e ? 'String' : void 0
			},
			IsPropertyDescriptor: function(e) {
				if ('Object' !== this.Type(e)) return !1;
				var t = {
					"[[Configurable]]": !0,
					"[[Enumerable]]": !0,
					"[[Get]]": !0,
					"[[Set]]": !0,
					"[[Value]]": !0,
					"[[Writable]]": !0
				};
				for (var n in e)
					if (Eee(e, n) && !t[n]) return !1;
				var r = Eee(e, '[[Value]]'),
					a = Eee(e, '[[Get]]') || Eee(e, '[[Set]]');
				if (r && a) throw new bte('Property Descriptors may not be both accessor and data descriptors');
				return !0
			},
			IsAccessorDescriptor: function(e) {
				if ('undefined' == typeof e) return !1;
				if (!this.IsPropertyDescriptor(e)) throw new bte('Desc must be a Property Descriptor');
				return Eee(e, '[[Get]]') || Eee(e, '[[Set]]')
			},
			IsDataDescriptor: function(e) {
				if ('undefined' == typeof e) return !1;
				if (!this.IsPropertyDescriptor(e)) throw new bte('Desc must be a Property Descriptor');
				return Eee(e, '[[Value]]') || Eee(e, '[[Writable]]')
			},
			IsGenericDescriptor: function(e) {
				if ('undefined' == typeof e) return !1;
				if (!this.IsPropertyDescriptor(e)) throw new bte('Desc must be a Property Descriptor');
				return this.IsAccessorDescriptor(e) || this.IsDataDescriptor(e) ? !1 : !0
			},
			FromPropertyDescriptor: function(e) {
				if ('undefined' == typeof e) return e;
				if (!this.IsPropertyDescriptor(e)) throw new bte('Desc must be a Property Descriptor');
				if (this.IsDataDescriptor(e)) return {
					value: e['[[Value]]'],
					writable: !!e['[[Writable]]'],
					enumerable: !!e['[[Enumerable]]'],
					configurable: !!e['[[Configurable]]']
				};
				if (this.IsAccessorDescriptor(e)) return {
					get: e['[[Get]]'],
					set: e['[[Set]]'],
					enumerable: !!e['[[Enumerable]]'],
					configurable: !!e['[[Configurable]]']
				};
				throw new bte('FromPropertyDescriptor must be called with a fully populated Property Descriptor')
			},
			ToPropertyDescriptor: function(e) {
				if ('Object' !== this.Type(e)) throw new bte('ToPropertyDescriptor requires an object');
				var t = {};
				if (Eee(e, 'enumerable') && (t['[[Enumerable]]'] = this.ToBoolean(e.enumerable)), Eee(e, 'configurable') && (t['[[Configurable]]'] = this.ToBoolean(e.configurable)), Eee(e, 'value') && (t['[[Value]]'] = e.value), Eee(e, 'writable') && (t['[[Writable]]'] = this.ToBoolean(e.writable)), Eee(e, 'get')) {
					var n = e.get;
					if ('undefined' != typeof n && !this.IsCallable(n)) throw new TypeError('getter must be a function');
					t['[[Get]]'] = n
				}
				if (Eee(e, 'set')) {
					var r = e.set;
					if ('undefined' != typeof r && !this.IsCallable(r)) throw new bte('setter must be a function');
					t['[[Set]]'] = r
				}
				if ((Eee(t, '[[Get]]') || Eee(t, '[[Set]]')) && (Eee(t, '[[Value]]') || Eee(t, '[[Writable]]'))) throw new bte('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
				return t
			}
		};
	var Ste = RegExp.prototype.exec,
		wte = Object.getOwnPropertyDescriptor,
		vte = function(e) {
			try {
				var t = e.lastIndex;
				return e.lastIndex = 0, Ste.call(e), !0
			} catch (t) {
				return !1
			} finally {
				e.lastIndex = t
			}
		},
		Tte = Object.prototype.toString,
		Cte = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
		Ete = function(e) {
			if (!e || 'object' != typeof e) return !1;
			if (!Cte) return Tte.call(e) === '[object RegExp]';
			var t = wte(e, 'lastIndex'),
				n = t && Eee(t, 'value');
			return !!n && vte(e)
		};
	var Ate = tte('%TypeError%'),
		Ote = tte('%SyntaxError%'),
		Pte = tte('%Array%'),
		Lte = tte('%String%'),
		qte = tte('%Object%'),
		Rte = tte('%Number%'),
		Dte = tte('%Symbol%', !0),
		Nte = tte('%RegExp%'),
		Bte = !!Dte,
		Ite = Rte.MAX_SAFE_INTEGER || 9007199254740991,
		zte = parseInt,
		_te = Cee.call(Function.call, Pte.prototype.slice),
		Mte = Cee.call(Function.call, Lte.prototype.slice),
		Gte = Cee.call(Function.call, Nte.prototype.test, /^0b[01]+$/i),
		Ute = Cee.call(Function.call, Nte.prototype.test, /^0o[0-7]+$/i),
		Vte = Cee.call(Function.call, Nte.prototype.exec),
		Wte = new Nte('[' + '\x85\u200B\uFFFE' + ']', 'g'),
		Fte = Cee.call(Function.call, Nte.prototype.test, Wte),
		jte = /^[-+]0x[0-9a-f]+$/i,
		Hte = Cee.call(Function.call, Nte.prototype.test, jte),
		Yte = Cee.call(Function.call, Lte.prototype.charCodeAt),
		$te = Cee.call(Function.call, Object.prototype.toString),
		Kte = Fd,
		Xte = Vd,
		Qte = Object.create,
		Zte = qte.getOwnPropertyDescriptor,
		Jte = qte.isExtensible,
		ene = /(^[	\n\v\f\r   ᠎             　\u2028\u2029﻿]+)|([	\n\v\f\r   ᠎             　\u2028\u2029﻿]+$)/g,
		tne = Cee.call(Function.call, Lte.prototype.replace),
		nne = function(e) {
			return tne(e, ene, '')
		},
		rne = ste(ste({}, kte), {
			Call: function(e, t) {
				var n = 2 < arguments.length ? arguments[2] : [];
				if (!this.IsCallable(e)) throw new Ate(e + ' is not a function');
				return e.apply(t, n)
			},
			ToPrimitive: jee,
			ToNumber: function(e) {
				var t = cte(e) ? e : jee(e, Rte);
				if ('symbol' == typeof t) throw new Ate('Cannot convert a Symbol value to a number');
				if ('string' == typeof t) {
					if (Gte(t)) return this.ToNumber(zte(Mte(t, 2), 2));
					if (Ute(t)) return this.ToNumber(zte(Mte(t, 2), 8));
					if (Fte(t) || Hte(t)) return NaN;
					var n = nne(t);
					if (n !== t) return this.ToNumber(n)
				}
				return Rte(t)
			},
			ToInt16: function(e) {
				var t = this.ToUint16(e);
				return 32768 <= t ? t - 65536 : t
			},
			ToInt8: function(e) {
				var t = this.ToUint8(e);
				return 128 <= t ? t - 256 : t
			},
			ToUint8: function(e) {
				var t = this.ToNumber(e);
				if (nte(t) || 0 === t || !ate(t)) return 0;
				var n = lte(t) * Kte(Xte(t));
				return dte(n, 256)
			},
			ToUint8Clamp: function(e) {
				var t = this.ToNumber(e);
				if (nte(t) || 0 >= t) return 0;
				if (255 <= t) return 255;
				var n = Kte(e);
				return n + 0.5 < t ? n + 1 : t < n + 0.5 ? n : 0 == n % 2 ? n : n + 1
			},
			ToString: function(e) {
				if ('symbol' == typeof e) throw new Ate('Cannot convert a Symbol value to a string');
				return Lte(e)
			},
			ToObject: function(e) {
				return this.RequireObjectCoercible(e), qte(e)
			},
			ToPropertyKey: function(e) {
				var t = this.ToPrimitive(e, Lte);
				return 'symbol' == typeof t ? t : this.ToString(t)
			},
			ToLength: function(e) {
				var t = this.ToInteger(e);
				return 0 >= t ? 0 : t > Ite ? Ite : t
			},
			CanonicalNumericIndexString: function(e) {
				if ('[object String]' !== $te(e)) throw new Ate('must be a string');
				if ('-0' === e) return -0;
				var t = this.ToNumber(e);
				return this.SameValue(this.ToString(t), e) ? t : void 0
			},
			RequireObjectCoercible: kte.CheckObjectCoercible,
			IsArray: Pte.isArray || function(e) {
				return '[object Array]' === $te(e)
			},
			IsConstructor: function(e) {
				return 'function' == typeof e && !!e.prototype
			},
			IsExtensible: Object.preventExtensions ? function(e) {
				return !cte(e) && Jte(e)
			} : function() {
				return !0
			},
			IsInteger: function(e) {
				if ('number' != typeof e || nte(e) || !ate(e)) return !1;
				var t = Xte(e);
				return Kte(t) === t
			},
			IsPropertyKey: function(e) {
				return 'string' == typeof e || 'symbol' == typeof e
			},
			IsRegExp: function(e) {
				if (!e || 'object' != typeof e) return !1;
				if (Bte) {
					var t = e[Dte.match];
					if ('undefined' != typeof t) return kte.ToBoolean(t)
				}
				return Ete(e)
			},
			SameValueZero: function(e, t) {
				return e === t || nte(e) && nte(t)
			},
			GetV: function(e, t) {
				if (!this.IsPropertyKey(t)) throw new Ate('Assertion failed: IsPropertyKey(P) is not true');
				var n = this.ToObject(e);
				return n[t]
			},
			GetMethod: function(e, t) {
				if (!this.IsPropertyKey(t)) throw new Ate('Assertion failed: IsPropertyKey(P) is not true');
				var n = this.GetV(e, t);
				if (null != n) {
					if (!this.IsCallable(n)) throw new Ate(t + 'is not a function');
					return n
				}
			},
			Get: function(e, t) {
				if ('Object' !== this.Type(e)) throw new Ate('Assertion failed: Type(O) is not Object');
				if (!this.IsPropertyKey(t)) throw new Ate('Assertion failed: IsPropertyKey(P) is not true');
				return e[t]
			},
			Type: function(e) {
				return 'symbol' == typeof e ? 'Symbol' : kte.Type(e)
			},
			SpeciesConstructor: function(e, t) {
				if ('Object' !== this.Type(e)) throw new Ate('Assertion failed: Type(O) is not Object');
				var n = e.constructor;
				if ('undefined' == typeof n) return t;
				if ('Object' !== this.Type(n)) throw new Ate('O.constructor is not an Object');
				var r = Bte && Dte.species ? n[Dte.species] : void 0;
				if (null == r) return t;
				if (this.IsConstructor(r)) return r;
				throw new Ate('no constructor found')
			},
			CompletePropertyDescriptor: function(e) {
				if (!this.IsPropertyDescriptor(e)) throw new Ate('Desc must be a Property Descriptor');
				return this.IsGenericDescriptor(e) || this.IsDataDescriptor(e) ? (!Eee(e, '[[Value]]') && (e['[[Value]]'] = void 0), !Eee(e, '[[Writable]]') && (e['[[Writable]]'] = !1)) : (!Eee(e, '[[Get]]') && (e['[[Get]]'] = void 0), !Eee(e, '[[Set]]') && (e['[[Set]]'] = void 0)), Eee(e, '[[Enumerable]]') || (e['[[Enumerable]]'] = !1), Eee(e, '[[Configurable]]') || (e['[[Configurable]]'] = !1), e
			},
			Set: function(e, t, n, r) {
				if ('Object' !== this.Type(e)) throw new Ate('O must be an Object');
				if (!this.IsPropertyKey(t)) throw new Ate('P must be a Property Key');
				if ('Boolean' !== this.Type(r)) throw new Ate('Throw must be a Boolean');
				if (r) return e[t] = n, !0;
				try {
					e[t] = n
				} catch (t) {
					return !1
				}
			},
			HasOwnProperty: function(e, t) {
				if ('Object' !== this.Type(e)) throw new Ate('O must be an Object');
				if (!this.IsPropertyKey(t)) throw new Ate('P must be a Property Key');
				return Eee(e, t)
			},
			HasProperty: function(e, t) {
				if ('Object' !== this.Type(e)) throw new Ate('O must be an Object');
				if (!this.IsPropertyKey(t)) throw new Ate('P must be a Property Key');
				return t in e
			},
			IsConcatSpreadable: function(e) {
				if ('Object' !== this.Type(e)) return !1;
				if (Bte && 'symbol' == typeof Dte.isConcatSpreadable) {
					var t = this.Get(e, Symbol.isConcatSpreadable);
					if ('undefined' != typeof t) return this.ToBoolean(t)
				}
				return this.IsArray(e)
			},
			Invoke: function(e, t) {
				if (!this.IsPropertyKey(t)) throw new Ate('P must be a Property Key');
				var n = _te(arguments, 2),
					r = this.GetV(e, t);
				return this.Call(r, e, n)
			},
			GetIterator: function(e, t) {
				if (!Bte) throw new SyntaxError('ES.GetIterator depends on native iterator support.');
				var n = t;
				2 > arguments.length && (n = this.GetMethod(e, Dte.iterator));
				var r = this.Call(n, e);
				if ('Object' !== this.Type(r)) throw new Ate('iterator must return an object');
				return r
			},
			IteratorNext: function(e, t) {
				var n = this.Invoke(e, 'next', 2 > arguments.length ? [] : [t]);
				if ('Object' !== this.Type(n)) throw new Ate('iterator next must return an object');
				return n
			},
			IteratorComplete: function(e) {
				if ('Object' !== this.Type(e)) throw new Ate('Assertion failed: Type(iterResult) is not Object');
				return this.ToBoolean(this.Get(e, 'done'))
			},
			IteratorValue: function(e) {
				if ('Object' !== this.Type(e)) throw new Ate('Assertion failed: Type(iterResult) is not Object');
				return this.Get(e, 'value')
			},
			IteratorStep: function(e) {
				var t = this.IteratorNext(e),
					n = this.IteratorComplete(t);
				return !0 !== n && t
			},
			IteratorClose: function(e, t) {
				if ('Object' !== this.Type(e)) throw new Ate('Assertion failed: Type(iterator) is not Object');
				if (!this.IsCallable(t)) throw new Ate('Assertion failed: completion is not a thunk for a Completion Record');
				var n = t,
					r = this.GetMethod(e, 'return');
				if ('undefined' == typeof r) return n();
				var a;
				try {
					var o = this.Call(r, e, [])
				} catch (t) {
					throw a = n(), n = null, t
				}
				if (a = n(), n = null, 'Object' !== this.Type(o)) throw new Ate('iterator .return must return an object');
				return a
			},
			CreateIterResultObject: function(e, t) {
				if ('Boolean' !== this.Type(t)) throw new Ate('Assertion failed: Type(done) is not Boolean');
				return {
					value: e,
					done: t
				}
			},
			RegExpExec: function(e, t) {
				if ('Object' !== this.Type(e)) throw new Ate('R must be an Object');
				if ('String' !== this.Type(t)) throw new Ate('S must be a String');
				var n = this.Get(e, 'exec');
				if (this.IsCallable(n)) {
					var r = this.Call(n, e, [t]);
					if (null === r || 'Object' === this.Type(r)) return r;
					throw new Ate('"exec" method must return `null` or an Object')
				}
				return Vte(e, t)
			},
			ArraySpeciesCreate: function(e, t) {
				if (!this.IsInteger(t) || 0 > t) throw new Ate('Assertion failed: length must be an integer >= 0');
				var n = 0 === t ? 0 : t,
					r = this.IsArray(e),
					a;
				if (r && (a = this.Get(e, 'constructor'), 'Object' === this.Type(a) && Bte && Dte.species && (a = this.Get(a, Dte.species), null === a && (a = void 0))), 'undefined' == typeof a) return Pte(n);
				if (!this.IsConstructor(a)) throw new Ate('C must be a constructor');
				return new a(n)
			},
			CreateDataProperty: function(e, t, n) {
				if ('Object' !== this.Type(e)) throw new Ate('Assertion failed: Type(O) is not Object');
				if (!this.IsPropertyKey(t)) throw new Ate('Assertion failed: IsPropertyKey(P) is not true');
				var r = Zte(e, t),
					a = r || 'function' != typeof Jte || Jte(e),
					o = r && (!r.writable || !r.configurable);
				if (o || !a) return !1;
				return Object.defineProperty(e, t, {
					configurable: !0,
					enumerable: !0,
					value: n,
					writable: !0
				}), !0
			},
			CreateDataPropertyOrThrow: function(e, t, n) {
				if ('Object' !== this.Type(e)) throw new Ate('Assertion failed: Type(O) is not Object');
				if (!this.IsPropertyKey(t)) throw new Ate('Assertion failed: IsPropertyKey(P) is not true');
				var r = this.CreateDataProperty(e, t, n);
				if (!r) throw new Ate('unable to create data property');
				return r
			},
			ObjectCreate: function(e, t) {
				if (null !== e && 'Object' !== this.Type(e)) throw new Ate('Assertion failed: proto must be null or an object');
				var n = 2 > arguments.length ? [] : t;
				if (0 < n.length) throw new Ote('es-abstract does not yet support internal slots');
				if (null === e && !Qte) throw new Ote('native Object.create support is required to create null objects');
				return Qte(e)
			},
			AdvanceStringIndex: function(e, t, n) {
				if ('String' !== this.Type(e)) throw new Ate('S must be a String');
				if (!this.IsInteger(t) || 0 > t || t > Ite) throw new Ate('Assertion failed: length must be an integer >= 0 and <= 2**53');
				if ('Boolean' !== this.Type(n)) throw new Ate('Assertion failed: unicode must be a Boolean');
				if (!n) return t + 1;
				var r = e.length;
				if (t + 1 >= r) return t + 1;
				var a = Yte(e, t);
				if (55296 > a || 56319 < a) return t + 1;
				var o = Yte(e, t + 1);
				return 56320 > o || 57343 < o ? t + 1 : t + 2
			}
		});
	delete rne.CheckObjectCoercible;
	var ane = ste(ste({}, rne), {
		SameValueNonNumber: function(e, t) {
			if ('number' == typeof e || typeof e != typeof t) throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
			return this.SameValue(e, t)
		}
	});
	var one = Cee.call(Function.call, Object.prototype.propertyIsEnumerable),
		ine = function(e) {
			var t = ane.RequireObjectCoercible(e),
				n = [];
			for (var r in t) Eee(t, r) && one(t, r) && n.push(t[r]);
			return n
		};
	var sne = function() {
		return 'function' == typeof Object.values ? Object.values : ine
	};
	var dne = sne();
	See(dne, {
		getPolyfill: sne,
		implementation: ine,
		shim: function() {
			var e = sne();
			return See(Object, {
				values: e
			}, {
				values: function() {
					return Object.values !== e
				}
			}), e
		}
	});
	'use strict', Object.values || dne.shim();
	var cne = function(e) {
		this.parentNode = e, this.classNames = new Set, this.classAttr = null
	};
	cne.prototype.hasClass = function() {
		this.classAttr = {
			name: 'class',
			value: null
		}, this.addClassHandler()
	}, cne.prototype.addClassHandler = function() {
		Object.defineProperty(this.parentNode.attrs, 'class', {
			get: this.getClassAttr.bind(this),
			set: this.setClassAttr.bind(this),
			enumerable: !0,
			configurable: !0
		}), this.addClassValueHandler()
	}, cne.prototype.addClassValueHandler = function() {
		Object.defineProperty(this.classAttr, 'value', {
			get: this.getClassValue.bind(this),
			set: this.setClassValue.bind(this),
			enumerable: !0,
			configurable: !0
		})
	}, cne.prototype.getClassAttr = function() {
		return this.classAttr
	}, cne.prototype.setClassAttr = function(e) {
		this.setClassValue(e.value), this.classAttr = e, this.addClassValueHandler()
	}, cne.prototype.getClassValue = function() {
		var e = Array.from(this.classNames);
		return e.join(' ')
	}, cne.prototype.setClassValue = function(e) {
		if ('undefined' == typeof e) return void this.classNames.clear();
		var t = e.split(' ');
		this.classNames = new Set(t)
	}, cne.prototype.add = function() {
		this.hasClass(), Object.values(arguments).forEach(this._addSingle.bind(this))
	}, cne.prototype._addSingle = function(e) {
		this.classNames.add(e)
	}, cne.prototype.remove = function() {
		this.hasClass(), Object.values(arguments).forEach(this._removeSingle.bind(this))
	}, cne.prototype._removeSingle = function(e) {
		this.classNames.delete(e)
	}, cne.prototype.item = function(e) {
		var t = Array.from(this.classNames);
		return t[e]
	}, cne.prototype.toggle = function(e, t) {
		(this.contains(e) || !1 === t) && this.classNames.delete(e), this.classNames.add(e)
	}, cne.prototype.contains = function(e) {
		return this.classNames.has(e)
	};
	var pne = cne;
	var une = null,
		mne = function() {
			this.cursor = null, this.head = null, this.tail = null
		};
	mne.createItem = ar, mne.prototype.createItem = ar, mne.prototype.getSize = function() {
		for (var e = 0, t = this.head; t;) e++, t = t.next;
		return e
	}, mne.prototype.fromArray = function(e) {
		var t = null;
		this.head = null;
		for (var n = 0, r; n < e.length; n++) r = ar(e[n]), null == t ? this.head = r : t.next = r, r.prev = t, t = r;
		return this.tail = t, this
	}, mne.prototype.toArray = function() {
		for (var e = this.head, t = []; e;) t.push(e.data), e = e.next;
		return t
	}, mne.prototype.toJSON = mne.prototype.toArray, mne.prototype.isEmpty = function() {
		return null === this.head
	}, mne.prototype.first = function() {
		return this.head && this.head.data
	}, mne.prototype.last = function() {
		return this.tail && this.tail.data
	}, mne.prototype.each = function(e, t) {
		var n;
		void 0 === t && (t = this);
		for (var r = ir(this, null, this.head); null !== r.next;) n = r.next, r.next = n.next, e.call(t, n.data, n, this);
		sr(this)
	}, mne.prototype.eachRight = function(e, t) {
		var n;
		void 0 === t && (t = this);
		for (var r = ir(this, this.tail, null); null !== r.prev;) n = r.prev, r.prev = n.prev, e.call(t, n.data, n, this);
		sr(this)
	}, mne.prototype.nextUntil = function(e, t, n) {
		if (null !== e) {
			var r;
			void 0 === n && (n = this);
			for (var a = ir(this, null, e); null !== a.next && (r = a.next, a.next = r.next, !t.call(n, r.data, r, this)););
			sr(this)
		}
	}, mne.prototype.prevUntil = function(e, t, n) {
		if (null !== e) {
			var r;
			void 0 === n && (n = this);
			for (var a = ir(this, e, null); null !== a.prev && (r = a.prev, a.prev = r.prev, !t.call(n, r.data, r, this)););
			sr(this)
		}
	}, mne.prototype.some = function(e, t) {
		var n = this.head;
		for (void 0 === t && (t = this); null !== n;) {
			if (e.call(t, n.data, n, this)) return !0;
			n = n.next
		}
		return !1
	}, mne.prototype.map = function(e, t) {
		var n = [],
			r = this.head;
		for (void 0 === t && (t = this); null !== r;) n.push(e.call(t, r.data, r, this)), r = r.next;
		return n
	}, mne.prototype.clear = function() {
		this.head = null, this.tail = null
	}, mne.prototype.copy = function() {
		for (var e = new mne, t = this.head; null !== t;) e.insert(ar(t.data)), t = t.next;
		return e
	}, mne.prototype.updateCursors = function(e, t, n, r) {
		for (var a = this.cursor; null !== a;) a.prev === e && (a.prev = t), a.next === n && (a.next = r), a = a.cursor
	}, mne.prototype.prepend = function(e) {
		return this.updateCursors(null, e, this.head, e), null === this.head ? this.tail = e : (this.head.prev = e, e.next = this.head), this.head = e, this
	}, mne.prototype.prependData = function(e) {
		return this.prepend(ar(e))
	}, mne.prototype.append = function(e) {
		return this.updateCursors(this.tail, e, null, e), null === this.tail ? this.head = e : (this.tail.next = e, e.prev = this.tail), this.tail = e, this
	}, mne.prototype.appendData = function(e) {
		return this.append(ar(e))
	}, mne.prototype.insert = function(e, t) {
		if (void 0 === t || null === t) this.append(e);
		else if (this.updateCursors(t.prev, e, t, e), null === t.prev) {
			if (this.head !== t) throw new Error('before doesn\'t belong to list');
			this.head = e, t.prev = e, e.next = t, this.updateCursors(null, e)
		} else t.prev.next = e, e.prev = t.prev, t.prev = e, e.next = t
	}, mne.prototype.insertData = function(e, t) {
		this.insert(ar(e), t)
	}, mne.prototype.remove = function(e) {
		if (this.updateCursors(e, e.prev, e, e.next), null !== e.prev) e.prev.next = e.next;
		else {
			if (this.head !== e) throw new Error('item doesn\'t belong to list');
			this.head = e.next
		}
		if (null !== e.next) e.next.prev = e.prev;
		else {
			if (this.tail !== e) throw new Error('item doesn\'t belong to list');
			this.tail = e.prev
		}
		return e.prev = null, e.next = null, e
	}, mne.prototype.appendList = function(e) {
		null === e.head || (this.updateCursors(this.tail, e.tail, null, e.head), null === this.tail ? this.head = e.head : (this.tail.next = e.head, e.head.prev = this.tail), this.tail = e.tail, e.head = null, e.tail = null)
	}, mne.prototype.insertList = function(e, t) {
		if (void 0 !== t && null !== t) {
			if (null === e.head) return;
			this.updateCursors(t.prev, e.tail, t, e.head), null === t.prev ? this.head = e.head : (t.prev.next = e.head, e.head.prev = t.prev), t.prev = e.tail, e.tail.next = t, e.head = null, e.tail = null
		} else this.appendList(e)
	}, mne.prototype.replace = function(e, t) {
		'head' in t ? this.insertList(t, e) : this.insert(t, e), this.remove(e)
	};
	var hne = mne,
		fne = function(e, t) {
			var n = Object.create(SyntaxError.prototype),
				r = new Error;
			return n.name = e, n.message = t, Object.defineProperty(n, 'stack', {
				get: function() {
					return (r.stack || '').replace(/^(.+\n){1,3}/, e + ': ' + t + '\n')
				}
			}), n
		};
	var yne = 100,
		xne = 60,
		kne = '    ',
		Sne = function(e, t, n, r, a) {
			var o = fne('CssSyntaxError', e);
			return o.source = t, o.offset = n, o.line = r, o.column = a, o.sourceFragment = function(e) {
				return lr(o, isNaN(e) ? 0 : e)
			}, Object.defineProperty(o, 'formattedMessage', {
				get: function() {
					return 'Parse error: ' + o.message + '\n' + lr(o, 2)
				}
			}), o.parseError = {
				offset: n,
				line: r,
				column: a
			}, o
		};
	for (var wne = 1, vne = 2, Tne = 3, Cne = 4, Ene = 6, Ane = 9, One = 10, Pne = 12, Lne = 13, qne = 32, Rne = {
			WhiteSpace: wne,
			Identifier: vne,
			Number: Tne,
			String: Cne,
			Comment: 5,
			Punctuator: Ene,
			CDO: 7,
			CDC: 8,
			Atrule: 14,
			Function: 15,
			Url: 16,
			Raw: 17,
			ExclamationMark: 33,
			QuotationMark: 34,
			NumberSign: 35,
			DollarSign: 36,
			PercentSign: 37,
			Ampersand: 38,
			Apostrophe: 39,
			LeftParenthesis: 40,
			RightParenthesis: 41,
			Asterisk: 42,
			PlusSign: 43,
			Comma: 44,
			HyphenMinus: 45,
			FullStop: 46,
			Solidus: 47,
			Colon: 58,
			Semicolon: 59,
			LessThanSign: 60,
			EqualsSign: 61,
			GreaterThanSign: 62,
			QuestionMark: 63,
			CommercialAt: 64,
			LeftSquareBracket: 91,
			Backslash: 92,
			RightSquareBracket: 93,
			CircumflexAccent: 94,
			LowLine: 95,
			GraveAccent: 96,
			LeftCurlyBracket: 123,
			VerticalLine: 124,
			RightCurlyBracket: 125,
			Tilde: 126
		}, Dne = Object.keys(Rne).reduce(function(e, t) {
			return e[Rne[t]] = t, e
		}, {}), Nne = 'undefined' == typeof Uint32Array ? Array : Uint32Array, Bne = new Nne(128), Ine = new Nne(128), zne = new Nne(128), _ne = 0; _ne < Bne.length; _ne++) Bne[_ne] = vne;
	[Rne.ExclamationMark, Rne.QuotationMark, Rne.NumberSign, Rne.DollarSign, Rne.PercentSign, Rne.Ampersand, Rne.Apostrophe, Rne.LeftParenthesis, Rne.RightParenthesis, Rne.Asterisk, Rne.PlusSign, Rne.Comma, Rne.HyphenMinus, Rne.FullStop, Rne.Solidus, Rne.Colon, Rne.Semicolon, Rne.LessThanSign, Rne.EqualsSign, Rne.GreaterThanSign, Rne.QuestionMark, Rne.CommercialAt, Rne.LeftSquareBracket, Rne.RightSquareBracket, Rne.CircumflexAccent, Rne.GraveAccent, Rne.LeftCurlyBracket, Rne.VerticalLine, Rne.RightCurlyBracket, Rne.Tilde].forEach(function(e) {
		Bne[+e] = Ene, Ine[+e] = Ene
	});
	for (var _ne = 48; 57 >= _ne; _ne++) Bne[_ne] = Tne;
	Bne[qne] = wne, Bne[Ane] = wne, Bne[One] = wne, Bne[Lne] = wne, Bne[Pne] = wne, Bne[Rne.Apostrophe] = Cne, Bne[Rne.QuotationMark] = Cne, zne[qne] = 1, zne[Ane] = 1, zne[One] = 1, zne[Lne] = 1, zne[Pne] = 1, zne[Rne.Apostrophe] = 1, zne[Rne.QuotationMark] = 1, zne[Rne.LeftParenthesis] = 1, zne[Rne.RightParenthesis] = 1, Ine[qne] = Ene, Ine[Ane] = Ene, Ine[One] = Ene, Ine[Lne] = Ene, Ine[Pne] = Ene, Ine[Rne.HyphenMinus] = 0;
	var i = {
		TYPE: Rne,
		NAME: Dne,
		SYMBOL_TYPE: Bne,
		PUNCTUATION: Ine,
		STOP_URL_RAW: zne
	};
	var Mne = i.PUNCTUATION,
		Gne = i.STOP_URL_RAW,
		Une = i.TYPE,
		Vne = Une.FullStop,
		Wne = Une.PlusSign,
		Fne = Une.HyphenMinus,
		jne = Une.Punctuator,
		Hne = 9,
		Yne = 10,
		$ne = 12,
		Kne = 13,
		Xne = 32,
		Qne = 92,
		Zne = {
			firstCharOffset: function(e) {
				return 65279 === e.charCodeAt(0) || 65534 === e.charCodeAt(0) ? 1 : 0
			},
			isHex: dr,
			isNumber: cr,
			isNewline: ur,
			cmpChar: function(e, t, n) {
				var r = e.charCodeAt(t);
				return 65 <= r && 90 >= r && (r |= 32), r === n
			},
			cmpStr: mr,
			endsWith: function(e, t) {
				return mr(e, e.length - t.length, e.length, t)
			},
			findLastNonSpaceLocation: function(e) {
				for (var t = e.source.length - 1, n; 0 <= t && (n = e.source.charCodeAt(t), n === Xne || n === Hne || n === Kne || n === Yne || n === $ne); t--);
				return e.getLocation(t + 1)
			},
			findWhiteSpaceEnd: function(e, t) {
				for (; t < e.length; t++) {
					var n = e.charCodeAt(t);
					if (n !== Xne && n !== Hne && n !== Kne && n !== Yne && n !== $ne) break
				}
				return t
			},
			findCommentEnd: function(e, t) {
				var n = e.indexOf('*/', t);
				return -1 === n ? e.length : n + 2
			},
			findStringEnd: function(e, t, n) {
				for (; t < e.length; t++) {
					var r = e.charCodeAt(t);
					if (r === Qne) t++;
					else if (r === n) {
						t++;
						break
					}
				}
				return t
			},
			findDecimalNumberEnd: gr,
			findNumberEnd: function(e, t, n) {
				var r;
				return t = gr(e, t), n && t + 1 < e.length && e.charCodeAt(t) === Vne && (r = e.charCodeAt(t + 1), cr(r) && (t = gr(e, t + 1))), t + 1 < e.length && (32 | e.charCodeAt(t)) == 101 && (r = e.charCodeAt(t + 1), (r === Wne || r === Fne) && t + 2 < e.length && (r = e.charCodeAt(t + 2)), cr(r) && (t = gr(e, t + 2))), t
			},
			findEscaseEnd: hr,
			findIdentifierEnd: function(e, t) {
				for (; t < e.length; t++) {
					var n = e.charCodeAt(t);
					if (n === Qne) t = hr(e, t + 1);
					else if (128 > n && Mne[n] === jne) break
				}
				return t
			},
			findUrlRawEnd: function(e, t) {
				for (; t < e.length; t++) {
					var n = e.charCodeAt(t);
					if (n === Qne) t = hr(e, t + 1);
					else if (128 > n && 1 === Gne[n]) break
				}
				return t
			}
		};
	var Jne = i.TYPE,
		ere = i.NAME,
		tre = i.SYMBOL_TYPE,
		nre = Zne.firstCharOffset,
		rre = Zne.cmpStr,
		are = Zne.isNumber,
		ore = Zne.findLastNonSpaceLocation,
		ire = Zne.findWhiteSpaceEnd,
		sre = Zne.findCommentEnd,
		lre = Zne.findStringEnd,
		dre = Zne.findNumberEnd,
		cre = Zne.findIdentifierEnd,
		ure = Zne.findUrlRawEnd,
		mre = 0,
		gre = Jne.WhiteSpace,
		hre = Jne.Identifier,
		fre = Jne.Number,
		yre = Jne.String,
		bre = Jne.Comment,
		xre = Jne.Punctuator,
		kre = Jne.CDO,
		Sre = Jne.CDC,
		wre = Jne.Atrule,
		vre = Jne.Function,
		Tre = Jne.Url,
		Cre = Jne.Raw,
		Ere = 10,
		N = 12,
		F = 13,
		R = Jne.Asterisk,
		Are = Jne.Solidus,
		Ore = Jne.FullStop,
		Pre = Jne.PlusSign,
		Lre = Jne.HyphenMinus,
		qre = Jne.GreaterThanSign,
		Rre = Jne.LessThanSign,
		Dre = Jne.ExclamationMark,
		Nre = Jne.CommercialAt,
		Bre = Jne.QuotationMark,
		Ire = Jne.Apostrophe,
		zre = Jne.LeftParenthesis,
		_re = Jne.RightParenthesis,
		Mre = Jne.LeftCurlyBracket,
		Gre = Jne.RightCurlyBracket,
		Ure = Jne.LeftSquareBracket,
		Vre = Jne.RightSquareBracket,
		Wre = 16384,
		Fre = 16777215,
		jre = 24,
		Hre = 'undefined' == typeof Uint32Array ? Array : Uint32Array,
		Yre = function(e, t, n, r) {
			this.offsetAndType = null, this.balance = null, this.lines = null, this.columns = null, this.setSource(e, t, n, r)
		};
	Yre.prototype = {
		setSource: function(e, t, n, r) {
			var a = (e || '') + '',
				o = nre(a);
			this.source = a, this.firstCharOffset = o, this.startOffset = 'undefined' == typeof t ? 0 : t, this.startLine = 'undefined' == typeof n ? 1 : n, this.startColumn = 'undefined' == typeof r ? 1 : r, this.linesAnsColumnsComputed = !1, this.eof = !1, this.currentToken = -1, this.tokenType = 0, this.tokenStart = o, this.tokenEnd = o, yr(this, a, o), this.next()
		},
		lookupType: function(e) {
			return e += this.currentToken, e < this.tokenCount ? this.offsetAndType[e] >> jre : mre
		},
		lookupNonWSType: function(e) {
			e += this.currentToken;
			for (var t; e < this.tokenCount; e++)
				if (t = this.offsetAndType[e] >> jre, t !== gre) return t;
			return mre
		},
		lookupValue: function(e, t) {
			return e += this.currentToken, !!(e < this.tokenCount) && rre(this.source, this.offsetAndType[e - 1] & Fre, this.offsetAndType[e] & Fre, t)
		},
		getTokenStart: function(e) {
			return e === this.currentToken ? this.tokenStart : 0 < e ? e < this.tokenCount ? this.offsetAndType[e - 1] & Fre : this.offsetAndType[this.tokenCount] & Fre : this.firstCharOffset
		},
		getOffsetExcludeWS: function() {
			return 0 < this.currentToken && this.offsetAndType[this.currentToken - 1] >> jre === gre ? 1 < this.currentToken ? this.offsetAndType[this.currentToken - 2] & Fre : this.firstCharOffset : this.tokenStart
		},
		getRawLength: function(e, t, n, r) {
			var a = e,
				o;
			loop: for (; a < this.tokenCount; a++) {
				if (o = this.balance[a], o < e) break loop;
				switch (this.offsetAndType[a] >> jre) {
					case t:
						break loop;
					case n:
						r && a++;
						break loop;
					default:
						this.balance[o] === a && (a = o);
				}
			}
			return a - this.currentToken
		},
		getTokenValue: function() {
			return this.source.substring(this.tokenStart, this.tokenEnd)
		},
		substrToCursor: function(e) {
			return this.source.substring(e, this.tokenStart)
		},
		skipWS: function() {
			for (var e = this.currentToken, t = 0; e < this.tokenCount && this.offsetAndType[e] >> jre === gre; e++, t++);
			0 < t && this.skip(t)
		},
		skipSC: function() {
			for (; this.tokenType === gre || this.tokenType === bre;) this.next()
		},
		skip: function(e) {
			var t = this.currentToken + e;
			t < this.tokenCount ? (this.currentToken = t, this.tokenStart = this.offsetAndType[t - 1] & Fre, t = this.offsetAndType[t], this.tokenType = t >> jre, this.tokenEnd = t & Fre) : (this.currentToken = this.tokenCount, this.next())
		},
		next: function() {
			var e = this.currentToken + 1;
			e < this.tokenCount ? (this.currentToken = e, this.tokenStart = this.tokenEnd, e = this.offsetAndType[e], this.tokenType = e >> jre, this.tokenEnd = e & Fre) : (this.currentToken = this.tokenCount, this.eof = !0, this.tokenType = mre, this.tokenStart = this.tokenEnd = this.source.length)
		},
		eat: function(e) {
			if (this.tokenType !== e) {
				var t = this.tokenStart,
					n = ere[e] + ' is expected';
				e === hre ? (this.tokenType === vre || this.tokenType === Tre) && (t = this.tokenEnd - 1, n += ' but function found') : this.source.charCodeAt(this.tokenStart) === e && ++t, this.error(n, t)
			}
			this.next()
		},
		eatNonWS: function(e) {
			this.skipWS(), this.eat(e)
		},
		consume: function(e) {
			var t = this.getTokenValue();
			return this.eat(e), t
		},
		consumeFunctionName: function() {
			var e = this.source.substring(this.tokenStart, this.tokenEnd - 1);
			return this.eat(vre), e
		},
		consumeNonWS: function(e) {
			return this.skipWS(), this.consume(e)
		},
		expectIdentifier: function(e) {
			(this.tokenType !== hre || !1 === rre(this.source, this.tokenStart, this.tokenEnd, e)) && this.error('Identifier `' + e + '` is expected'), this.next()
		},
		getLocation: function(e, t) {
			return this.linesAnsColumnsComputed || fr(this, this.source), {
				source: t,
				offset: this.startOffset + e,
				line: this.lines[e],
				column: this.columns[e]
			}
		},
		getLocationRange: function(e, t, n) {
			return this.linesAnsColumnsComputed || fr(this, this.source), {
				source: n,
				start: {
					offset: this.startOffset + e,
					line: this.lines[e],
					column: this.columns[e]
				},
				end: {
					offset: this.startOffset + t,
					line: this.lines[t],
					column: this.columns[t]
				}
			}
		},
		error: function(e, t) {
			var n = 'undefined' != typeof t && t < this.source.length ? this.getLocation(t) : this.eof ? ore(this) : this.getLocation(this.tokenStart);
			throw new Sne(e || 'Unexpected input', this.source, n.offset, n.line, n.column)
		},
		dump: function() {
			var e = 0;
			return Array.prototype.slice.call(this.offsetAndType, 0, this.tokenCount).map(function(t, n) {
				var r = e,
					a = t & Fre;
				return e = a, {
					idx: n,
					type: ere[t >> jre],
					chunk: this.source.substring(r, a),
					balance: this.balance[n]
				}
			}, this)
		}
	}, Yre.CssSyntaxError = Sne, Object.keys(i).forEach(function(e) {
		Yre[e] = i[e]
	}), Object.keys(Zne).forEach(function(e) {
		Yre[e] = Zne[e]
	}), new Yre('\n\r\r\n\f<!---->//""\'\'/*\r\n\f*/1a;.\\31\t+2{url(a);func();+1.2e3 -.4e-5 .6e+7}').getLocation();
	var $re = Yre;
	var Kre = vr;
	var Xre = {
		SyntaxReferenceError: function(e, t) {
			var n = fne('SyntaxReferenceError', e + ' `' + t + '`');
			return n.reference = t, n
		},
		MatchError: function(e, t, n, r, a) {
			var o = fne('SyntaxMatchError', e),
				i = -1,
				s = Tr(a, 'start'),
				l = Tr(a, 'end'),
				d = t.syntax.translateMarkup(r, function(e, t) {
					e === a && (i = t.length)
				});
			return -1 === i && (i = d.length), o.rawMessage = e, o.syntax = n ? Kre(n) : '<generic>', o.css = d, o.mismatchOffset = i, o.loc = {
				source: a && a.loc && a.loc.source || '<unknown>',
				start: s,
				end: l
			}, o.line = s ? s.line : void 0, o.column = s ? s.column : void 0, o.offset = s ? s.offset : void 0, o.message = e + '\n  syntax: ' + o.syntax + '\n   value: ' + (o.css || '<empty string>') + '\n  --------' + Array(o.mismatchOffset + 1).join('-') + '^', o
		}
	};
	var Qre = Object.prototype.hasOwnProperty,
		Zre = Object.create(null),
		Jre = Object.create(null),
		eae = 45,
		tae = {
			keyword: function(e) {
				if (Qre.call(Zre, e)) return Zre[e];
				var t = e.toLowerCase();
				if (Qre.call(Zre, t)) return Zre[e] = Zre[t];
				var n = Cr(t, 0) ? '' : Er(t, 0);
				return Zre[e] = Object.freeze({
					vendor: n,
					prefix: n,
					name: t.substr(n.length)
				})
			},
			property: function(e) {
				if (Qre.call(Jre, e)) return Jre[e];
				var t = e,
					n = e[0];
				'/' === n ? n = '/' === e[1] ? '//' : '/' : '_' !== n && '*' !== n && '$' !== n && '#' !== n && '+' !== n && (n = '');
				var r = Cr(t, n.length);
				if (!r && (t = t.toLowerCase(), Qre.call(Jre, t))) return Jre[e] = Jre[t];
				var a = r ? '' : Er(t, n.length);
				return Jre[e] = Object.freeze({
					hack: n,
					vendor: a,
					prefix: n + a,
					name: t.substr(n.length + a.length),
					custom: r
				})
			}
		};
	var nae = {
		angle: Rr({
			deg: !0,
			grad: !0,
			rad: !0,
			turn: !0
		}),
		"attr()": function(e) {
			return 'Function' === e.data.type && 'attr' === e.data.name.toLowerCase()
		},
		"custom-ident": function(e) {
			if ('Identifier' !== e.data.type) return !1;
			var t = e.data.name.toLowerCase();
			return 'unset' === t || 'initial' === t || 'inherit' === t ? !1 : 'default' !== t
		},
		decibel: qr({
			db: !0
		}),
		dimension: Lr('Dimension'),
		frequency: qr({
			hz: !0,
			khz: !0
		}),
		flex: qr({
			fr: !0
		}),
		"hex-color": function(e) {
			if ('HexColor' !== e.data.type) return !1;
			var t = e.data.value;
			return /^[0-9a-fA-F]{3,8}$/.test(t) && (3 === t.length || 4 === t.length || 6 === t.length || 8 === t.length)
		},
		"id-selector": Lr('IdSelector'),
		ident: Lr('Identifier'),
		integer: function(e) {
			return Ar(e) || 'Number' === e.data.type && -1 === e.data.value.indexOf('.')
		},
		length: Rr({
			px: !0,
			mm: !0,
			cm: !0,
			in: !0,
			pt: !0,
			pc: !0,
			q: !0,
			em: !0,
			ex: !0,
			ch: !0,
			rem: !0,
			vh: !0,
			vw: !0,
			vmin: !0,
			vmax: !0,
			vm: !0
		}),
		number: function(e) {
			return Ar(e) || 'Number' === e.data.type
		},
		"number-zero-one": function(e) {
			if (Ar(e) || 'Number' === e.data.type) {
				var t = +e.data.value;
				return 0 <= t && 1 >= t
			}
			return !1
		},
		"number-one-or-greater": function(e) {
			return (Ar(e) || 'Number' === e.data.type) && 1 <= +e.data.value
		},
		percentage: function(e) {
			return Ar(e) || 'Percentage' === e.data.type
		},
		"positive-integer": function(e) {
			return Ar(e) || 'Number' === e.data.type && -1 === e.data.value.indexOf('.') && '-' !== e.data.value.charAt(0)
		},
		resolution: qr({
			dpi: !0,
			dpcm: !0,
			dppx: !0,
			x: !0
		}),
		semitones: qr({
			st: !0
		}),
		string: Lr('String'),
		time: qr({
			s: !0,
			ms: !0
		}),
		"unicode-range": Lr('UnicodeRange'),
		url: Lr('Url'),
		progid: Lr('Raw'),
		expression: function(e) {
			return 'Function' === e.data.type && 'expression' === e.data.name.toLowerCase()
		}
	};
	var rae = {
		SyntaxParseError: function(e, t, n) {
			var r = fne('SyntaxParseError', e);
			return r.rawMessage = e, r.syntax = t, r.offset = n, r.message = r.rawMessage + '\n  ' + r.syntax + '\n--' + Array((r.offset || r.syntax.length) + 1).join('-') + '^', r
		}
	};
	var aae = rae.SyntaxParseError,
		oae = 9,
		iae = 10,
		sae = 12,
		lae = 13,
		dae = 32,
		cae = 33,
		pae = 35,
		uae = 37,
		mae = 38,
		gae = 39,
		hae = 40,
		fae = 41,
		yae = 42,
		bae = 43,
		xae = 44,
		kae = 47,
		Sae = 60,
		wae = 62,
		vae = 63,
		Tae = 91,
		Cae = 93,
		Eae = 123,
		Aae = 124,
		Oae = 125,
		Pae = {
			" ": 1,
			"&&": 2,
			"||": 3,
			"|": 4
		},
		Lae = {
			comma: !1,
			min: 1,
			max: 1
		},
		qae = {
			comma: !1,
			min: 0,
			max: 0
		},
		Rae = {
			comma: !1,
			min: 1,
			max: 0
		},
		Dae = {
			comma: !0,
			min: 1,
			max: 0
		},
		Nae = {
			comma: !1,
			min: 0,
			max: 1
		},
		Bae = function() {
			for (var e = 'function' == typeof Uint32Array ? new Uint32Array(128) : Array(128), t = 0; 128 > t; t++) e[t] = /[a-zA-Z0-9\-]/.test(Gd(t)) ? 1 : 0;
			return e
		}(),
		Iae = function(e) {
			this.str = e, this.pos = 0
		};
	Iae.prototype = {
		charCode: function() {
			return this.pos < this.str.length ? this.str.charCodeAt(this.pos) : 0
		},
		nextCharCode: function() {
			return this.pos + 1 < this.str.length ? this.str.charCodeAt(this.pos + 1) : 0
		},
		substringToPos: function(e) {
			return this.str.substring(this.pos, this.pos = e)
		},
		eat: function(e) {
			this.charCode() !== e && Yr(this, this.pos, 'Expect `' + Gd(e) + '`'), this.pos++
		}
	}, $r('[a&&<b>#|<\'c\'>*||e(){2,} f{2} /,(% g#{1,2})]!');
	var zae = $r;
	var _ae = function e(t, n, r) {
		switch (t.type) {
			case 'Group':
				t.terms.forEach(function(t) {
					e(t, n, r)
				});
				break;
			case 'Function':
			case 'Parentheses':
				e(t.children, n, r);
				break;
			case 'Keyword':
			case 'Type':
			case 'Property':
			case 'Combinator':
			case 'Comma':
			case 'Slash':
			case 'String':
			case 'Percent':
				break;
			default:
				throw new Error('Unknown type: ' + t.type);
		}
		n.call(r, t)
	};
	var Mae = {
			comma: !1,
			min: 1,
			max: 1
		},
		Gae = ea,
		Uae = {
			getTrace: ta,
			isType: function(e, t) {
				return na(this, e, function(e) {
					return 'Type' === e.type && e.name === t
				})
			},
			isProperty: function(e, t) {
				return na(this, e, function(e) {
					return 'Property' === e.type && e.name === t
				})
			},
			isKeyword: function(e) {
				return na(this, e, function(e) {
					return 'Keyword' === e.type
				})
			}
		},
		Vae = {
			matchFragments: function(e, t, n, r, a) {
				function o(n) {
					if ('ASTNode' !== n.type) {
						if (n.syntax.type === r && n.syntax.name === a) {
							var s = ra(n),
								l = aa(n);
							e.syntax.walk(t, function(e, t, n) {
								if (e === s) {
									var r = new hne,
										a = null;
									do {
										if (r.appendData(t.data), t.data === l) break;
										t = t.next
									} while (null !== t);
									null !== s.loc && null !== l.loc && (a = {
										source: s.loc.source,
										start: s.loc.start,
										end: l.loc.end
									}), i.push({
										parent: n,
										loc: a,
										nodes: r
									})
								}
							})
						}
						n.match.forEach(o)
					}
				}
				var i = [];
				return null !== n.matched && o(n.matched), i
			}
		},
		Wae = Object.prototype.hasOwnProperty;
	var Fae = Xre.SyntaxReferenceError,
		jae = Xre.MatchError,
		Hae = {
			getStructureFromConfig: function(e) {
				var t = {};
				if (e.node)
					for (var n in e.node)
						if (Wae.call(e.node, n)) {
							var r = e.node[n];
							if (r.structure) t[n] = la(n, r);
							else throw new Error('Missed `structure` field in `' + n + '` node type definition')
						}
				return t
			}
		}.getStructureFromConfig,
		Yae = zae('inherit | initial | unset'),
		$ae = zae('inherit | initial | unset | <expression>'),
		Kae = function(e, t, n) {
			if (this.valueCommonSyntax = Yae, this.syntax = t, this.generic = !1, this.properties = {}, this.types = {}, this.structure = n || Hae(e), e) {
				if (e.generic)
					for (var r in this.generic = !0, nae) this.addType_(r, nae[r]);
				if (e.types)
					for (var r in e.types) this.addType_(r, e.types[r]);
				if (e.properties)
					for (var r in e.properties) this.addProperty_(r, e.properties[r])
			}
		};
	Kae.prototype = {
		structure: {},
		checkStructure: function(e) {
			function t(e, t) {
				r.push({
					node: e,
					message: t
				})
			}
			var n = this.structure,
				r = [];
			return this.syntax.walk(e, function(e) {
				n.hasOwnProperty(e.type) ? n[e.type].check(e, t) : t(e, 'Unknown node type `' + e.type + '`')
			}), !!r.length && r
		},
		createDescriptor: function(e, t, n) {
			var r = this,
				a = {
					type: t,
					name: n,
					syntax: null,
					match: null
				};
			return 'function' == typeof e ? (e = {
				type: 'ASTNode',
				match: e
			}, a.match = function(t) {
				return Gae(r, e, t)
			}) : ('string' == typeof e ? Object.defineProperty(a, 'syntax', {
				get: function() {
					return Object.defineProperty(a, 'syntax', {
						value: zae(e)
					}), a.syntax
				}
			}) : a.syntax = e, a.match = function(e) {
				return Gae(r, a.syntax, e)
			}), a
		},
		addProperty_: function(e, t) {
			this.properties[e] = this.createDescriptor(t, 'Property', e)
		},
		addType_: function(e, t) {
			this.types[e] = this.createDescriptor(t, 'Type', e), t === nae.expression && (this.valueCommonSyntax = $ae)
		},
		matchDeclaration: function(e) {
			return 'Declaration' === e.type ? this.matchProperty(e.property, e.value) : ga(null, new Error('Not a Declaration node'))
		},
		matchProperty: function(e, t) {
			var n = tae.property(e);
			if (n.custom) return ga(null, new Error('Lexer matching doesn\'t applicable for custom properties'));
			var r = n.vendor ? this.getProperty(n.vendor + n.name) || this.getProperty(n.name) : this.getProperty(n.name);
			return r ? ha(this, r, t) : ga(null, new Fae('Unknown property', e))
		},
		matchType: function(e, t) {
			var n = this.getType(e);
			return n ? ha(this, n, t) : ga(null, new Fae('Unknown type', e))
		},
		findValueFragments: function(e, t, n, r) {
			return Vae.matchFragments(this, t, this.matchProperty(e, t), n, r)
		},
		findDeclarationValueFragments: function(e, t, n) {
			return Vae.matchFragments(this, e.value, this.matchDeclaration(e), t, n)
		},
		findAllFragments: function(e, t, n) {
			var r = [];
			return this.syntax.walkDeclarations(e, function(e) {
				r.push.apply(r, this.findDeclarationValueFragments(e, t, n))
			}.bind(this)), r
		},
		getProperty: function(e) {
			return this.properties.hasOwnProperty(e) ? this.properties[e] : null
		},
		getType: function(e) {
			return this.types.hasOwnProperty(e) ? this.types[e] : null
		},
		validate: function() {
			function e(r, a, o, i) {
				return o.hasOwnProperty(a) ? o[a] : void(o[a] = !1, null !== i.syntax && _ae(i.syntax, function(i) {
					if ('Type' === i.type || 'Property' === i.type) {
						var s = 'Type' === i.type ? r.types : r.properties,
							l = 'Type' === i.type ? t : n;
						(!s.hasOwnProperty(i.name) || e(r, i.name, l, s[i.name])) && (o[a] = !0)
					}
				}, this))
			}
			var t = {},
				n = {};
			for (var r in this.types) e(this, r, t, this.types[r]);
			for (var r in this.properties) e(this, r, n, this.properties[r]);
			return t = Object.keys(t).filter(function(e) {
				return t[e]
			}), n = Object.keys(n).filter(function(e) {
				return n[e]
			}), t.length || n.length ? {
				types: t,
				properties: n
			} : null
		},
		dump: function(e) {
			return {
				generic: this.generic,
				types: da(this.types, e),
				properties: da(this.properties, e)
			}
		},
		toString: function() {
			return JSON.stringify(this.dump())
		}
	};
	var Xae = Kae,
		Qae = {
			SyntaxParseError: rae.SyntaxParseError,
			parse: zae,
			translate: Kre,
			walk: _ae
		},
		Zae = $re.TYPE,
		Jae = Zae.WhiteSpace,
		eoe = Zae.Comment,
		toe = function(e) {
			var t = new hne,
				n = null,
				r = {
					recognizer: e,
					space: null,
					ignoreWS: !1,
					ignoreWSAfter: !1
				};
			for (this.scanner.skipSC(); !this.scanner.eof;) {
				switch (this.scanner.tokenType) {
					case eoe:
						this.scanner.next();
						continue;
					case Jae:
						r.ignoreWS ? this.scanner.next() : r.space = this.WhiteSpace();
						continue;
				}
				if (n = e.getNode.call(this, r), void 0 === n) break;
				null !== r.space && (t.appendData(r.space), r.space = null), t.appendData(n), r.ignoreWSAfter ? (r.ignoreWSAfter = !1, r.ignoreWS = !0) : r.ignoreWS = !1
			}
			return t
		};
	var noe = function() {},
		roe = function(e) {
			var t = {
				scanner: new $re,
				filename: '<unknown>',
				needPositions: !1,
				tolerant: !1,
				onParseError: noe,
				parseAtrulePrelude: !0,
				parseRulePrelude: !0,
				parseValue: !0,
				parseCustomProperty: !1,
				readSequence: toe,
				tolerantParse: function(e, t) {
					if (this.tolerant) {
						var n = this.scanner.currentToken;
						try {
							return e.call(this)
						} catch (a) {
							var r = t.call(this, n);
							return this.onParseError(a, r), r
						}
					} else return e.call(this)
				},
				getLocation: function(e, t) {
					return this.needPositions ? this.scanner.getLocationRange(e, t, this.filename) : null
				},
				getLocationFromList: function(e) {
					return this.needPositions ? this.scanner.getLocationRange(null === e.head ? this.scanner.tokenStart : e.first().loc.start.offset - this.scanner.startOffset, null === e.head ? this.scanner.tokenStart : e.last().loc.end.offset - this.scanner.startOffset, this.filename) : null
				}
			};
			for (var n in e = ya(e || {}), e) t[n] = e[n];
			return function(e, n) {
				n = n || {};
				var r = n.context || 'default',
					a;
				if (t.scanner.setSource(e, n.offset, n.line, n.column), t.filename = n.filename || '<unknown>', t.needPositions = !!n.positions, t.tolerant = !!n.tolerant, t.onParseError = 'function' == typeof n.onParseError ? n.onParseError : noe, t.parseAtrulePrelude = !('parseAtrulePrelude' in n) || !!n.parseAtrulePrelude, t.parseRulePrelude = !('parseRulePrelude' in n) || !!n.parseRulePrelude, t.parseValue = !('parseValue' in n) || !!n.parseValue, t.parseCustomProperty = !!('parseCustomProperty' in n) && !!n.parseCustomProperty, !t.context.hasOwnProperty(r)) throw new Error('Unknown context `' + r + '`');
				return a = t.context[r].call(t, n), t.scanner.eof || t.scanner.error(), a
			}
		},
		aoe = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'],
		ooe = {
			encode: function(e) {
				if (0 <= e && e < aoe.length) return aoe[e];
				throw new TypeError('Must be between 0 and 63: ' + e)
			},
			decode: function(e) {
				var t = 65,
					n = 97,
					r = 48;
				return t <= e && e <= 90 ? e - t : n <= e && e <= 122 ? e - n + 26 : r <= e && e <= 57 ? e - r + 52 : e == 43 ? 62 : e == 47 ? 63 : -1
			}
		},
		ioe = 5,
		soe = 1 << ioe,
		loe = soe - 1,
		doe = soe,
		coe = {
			encode: function(e) {
				var t = '',
					n = ba(e),
					r;
				do r = n & loe, n >>>= ioe, 0 < n && (r |= doe), t += ooe.encode(r); while (0 < n);
				return t
			},
			decode: function(e, t, n) {
				var r = e.length,
					a = 0,
					o = 0,
					i, s;
				do {
					if (t >= r) throw new Error('Expected more digits in base 64 VLQ value.');
					if (s = ooe.decode(e.charCodeAt(t++)), -1 === s) throw new Error('Invalid base64 digit: ' + e.charAt(t - 1));
					i = !!(s & doe), s &= loe, a += s << o, o += ioe
				} while (i);
				n.value = xa(a), n.rest = t
			}
		},
		poe = e(function(e, t) {
			function n(e) {
				var t = e.match(l);
				return t ? {
					scheme: t[1],
					auth: t[2],
					host: t[3],
					port: t[4],
					path: t[5]
				} : null
			}

			function r(e) {
				var t = '';
				return e.scheme && (t += e.scheme + ':'), t += '//', e.auth && (t += e.auth + '@'), e.host && (t += e.host), e.port && (t += ':' + e.port), e.path && (t += e.path), t
			}

			function a(e) {
				var a = e,
					o = n(e);
				if (o) {
					if (!o.path) return e;
					a = o.path
				}
				for (var s = t.isAbsolute(a), l = a.split(/\/+/), d = 0, c = l.length - 1, i; 0 <= c; c--) i = l[c], '.' === i ? l.splice(c, 1) : '..' === i ? d++ : 0 < d && ('' === i ? (l.splice(c + 1, d), d = 0) : (l.splice(c, 2), d--));
				return a = l.join('/'), '' === a && (a = s ? '/' : '.'), o ? (o.path = a, r(o)) : a
			}

			function o(e) {
				return e
			}

			function i(e) {
				if (!e) return !1;
				var t = e.length;
				if (9 > t) return !1;
				if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) return !1;
				for (var n = t - 10; 0 <= n; n--)
					if (36 !== e.charCodeAt(n)) return !1;
				return !0
			}

			function s(e, t) {
				return e === t ? 0 : e > t ? 1 : -1
			}
			t.getArg = function(e, t, n) {
				if (t in e) return e[t];
				if (3 === arguments.length) return n;
				throw new Error('"' + t + '" is a required argument.')
			};
			var l = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
				d = /^data:.+\,.+$/;
			t.urlParse = n, t.urlGenerate = r, t.normalize = a, t.join = function(e, t) {
				'' === e && (e = '.'), '' === t && (t = '.');
				var o = n(t),
					i = n(e);
				if (i && (e = i.path || '/'), o && !o.scheme) return i && (o.scheme = i.scheme), r(o);
				if (o || t.match(d)) return t;
				if (i && !i.host && !i.path) return i.host = t, r(i);
				var s = '/' === t.charAt(0) ? t : a(e.replace(/\/+$/, '') + '/' + t);
				return i ? (i.path = s, r(i)) : s
			}, t.isAbsolute = function(e) {
				return '/' === e.charAt(0) || !!e.match(l)
			}, t.relative = function(e, t) {
				'' === e && (e = '.'), e = e.replace(/\/$/, '');
				for (var n = 0, r; 0 !== t.indexOf(e + '/');) {
					if (r = e.lastIndexOf('/'), 0 > r) return t;
					if (e = e.slice(0, r), e.match(/^([^\/]+:\/)?\/*$/)) return t;
					++n
				}
				return Array(n + 1).join('../') + t.substr(e.length + 1)
			};
			var c = function() {
				var e = Object.create(null);
				return !('__proto__' in e)
			}();
			t.toSetString = c ? o : function(e) {
				return i(e) ? '$' + e : e
			}, t.fromSetString = c ? o : function(e) {
				return i(e) ? e.slice(1) : e
			}, t.compareByOriginalPositions = function(e, t, n) {
				var r = e.source - t.source;
				return 0 == r ? (r = e.originalLine - t.originalLine, 0 != r) ? r : (r = e.originalColumn - t.originalColumn, 0 != r || n) ? r : (r = e.generatedColumn - t.generatedColumn, 0 != r) ? r : (r = e.generatedLine - t.generatedLine, 0 == r ? e.name - t.name : r) : r
			}, t.compareByGeneratedPositionsDeflated = function(e, t, n) {
				var r = e.generatedLine - t.generatedLine;
				return 0 == r ? (r = e.generatedColumn - t.generatedColumn, 0 != r || n) ? r : (r = e.source - t.source, 0 != r) ? r : (r = e.originalLine - t.originalLine, 0 != r) ? r : (r = e.originalColumn - t.originalColumn, 0 == r ? e.name - t.name : r) : r
			}, t.compareByGeneratedPositionsInflated = function(e, t) {
				var n = e.generatedLine - t.generatedLine;
				return 0 == n ? (n = e.generatedColumn - t.generatedColumn, 0 != n) ? n : (n = s(e.source, t.source), 0 !== n) ? n : (n = e.originalLine - t.originalLine, 0 !== n) ? n : (n = e.originalColumn - t.originalColumn, 0 === n ? s(e.name, t.name) : n) : n
			}
		}),
		uoe = Object.prototype.hasOwnProperty,
		moe = 'undefined' != typeof Map;
	ka.fromArray = function(e, t) {
		for (var n = new ka, r = 0, a = e.length; r < a; r++) n.add(e[r], t);
		return n
	}, ka.prototype.size = function() {
		return moe ? this._set.size : Object.getOwnPropertyNames(this._set).length
	}, ka.prototype.add = function(e, t) {
		var n = moe ? e : poe.toSetString(e),
			r = moe ? this.has(e) : uoe.call(this._set, n),
			a = this._array.length;
		(!r || t) && this._array.push(e), r || (moe ? this._set.set(e, a) : this._set[n] = a)
	}, ka.prototype.has = function(e) {
		if (moe) return this._set.has(e);
		var t = poe.toSetString(e);
		return uoe.call(this._set, t)
	}, ka.prototype.indexOf = function(e) {
		if (moe) {
			var t = this._set.get(e);
			if (0 <= t) return t
		} else {
			var n = poe.toSetString(e);
			if (uoe.call(this._set, n)) return this._set[n]
		}
		throw new Error('"' + e + '" is not in the set.')
	}, ka.prototype.at = function(e) {
		if (0 <= e && e < this._array.length) return this._array[e];
		throw new Error('No element indexed by ' + e)
	}, ka.prototype.toArray = function() {
		return this._array.slice()
	};
	var goe = {
		ArraySet: ka
	};
	wa.prototype.unsortedForEach = function(e, t) {
		this._array.forEach(e, t)
	}, wa.prototype.add = function(e) {
		Sa(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = !1, this._array.push(e))
	}, wa.prototype.toArray = function() {
		return this._sorted || (this._array.sort(poe.compareByGeneratedPositionsInflated), this._sorted = !0), this._array
	};
	var hoe = goe.ArraySet,
		foe = {
			MappingList: wa
		}.MappingList;
	va.prototype._version = 3, va.fromSourceMap = function(e) {
		var t = e.sourceRoot,
			n = new va({
				file: e.file,
				sourceRoot: t
			});
		return e.eachMapping(function(e) {
			var r = {
				generated: {
					line: e.generatedLine,
					column: e.generatedColumn
				}
			};
			null != e.source && (r.source = e.source, null != t && (r.source = poe.relative(t, r.source)), r.original = {
				line: e.originalLine,
				column: e.originalColumn
			}, null != e.name && (r.name = e.name)), n.addMapping(r)
		}), e.sources.forEach(function(t) {
			var r = e.sourceContentFor(t);
			null != r && n.setSourceContent(t, r)
		}), n
	}, va.prototype.addMapping = function(e) {
		var t = poe.getArg(e, 'generated'),
			n = poe.getArg(e, 'original', null),
			r = poe.getArg(e, 'source', null),
			a = poe.getArg(e, 'name', null);
		this._skipValidation || this._validateMapping(t, n, r, a), null != r && (r += '', !this._sources.has(r) && this._sources.add(r)), null != a && (a += '', !this._names.has(a) && this._names.add(a)), this._mappings.add({
			generatedLine: t.line,
			generatedColumn: t.column,
			originalLine: null != n && n.line,
			originalColumn: null != n && n.column,
			source: r,
			name: a
		})
	}, va.prototype.setSourceContent = function(e, t) {
		var n = e;
		null != this._sourceRoot && (n = poe.relative(this._sourceRoot, n)), null == t ? this._sourcesContents && (delete this._sourcesContents[poe.toSetString(n)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null)) : (!this._sourcesContents && (this._sourcesContents = Object.create(null)), this._sourcesContents[poe.toSetString(n)] = t)
	}, va.prototype.applySourceMap = function(e, t, n) {
		var r = t;
		if (null == t) {
			if (null == e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
			r = e.file
		}
		var a = this._sourceRoot;
		null != a && (r = poe.relative(a, r));
		var o = new hoe,
			i = new hoe;
		this._mappings.unsortedForEach(function(t) {
			if (t.source === r && null != t.originalLine) {
				var s = e.originalPositionFor({
					line: t.originalLine,
					column: t.originalColumn
				});
				null != s.source && (t.source = s.source, null != n && (t.source = poe.join(n, t.source)), null != a && (t.source = poe.relative(a, t.source)), t.originalLine = s.line, t.originalColumn = s.column, null != s.name && (t.name = s.name))
			}
			var l = t.source;
			null == l || o.has(l) || o.add(l);
			var d = t.name;
			null == d || i.has(d) || i.add(d)
		}, this), this._sources = o, this._names = i, e.sources.forEach(function(t) {
			var r = e.sourceContentFor(t);
			null != r && (null != n && (t = poe.join(n, t)), null != a && (t = poe.relative(a, t)), this.setSourceContent(t, r))
		}, this)
	}, va.prototype._validateMapping = function(e, t, n, r) {
		if (t && 'number' != typeof t.line && 'number' != typeof t.column) throw new Error('original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.');
		if (!(e && 'line' in e && 'column' in e && 0 < e.line && 0 <= e.column && !t && !n && !r) && !(e && 'line' in e && 'column' in e && t && 'line' in t && 'column' in t && 0 < e.line && 0 <= e.column && 0 < t.line && 0 <= t.column && n)) throw new Error('Invalid mapping: ' + JSON.stringify({
			generated: e,
			source: n,
			original: t,
			name: r
		}))
	}, va.prototype._serializeMappings = function() {
		for (var e = 0, t = 1, n = 0, r = 0, a = 0, o = 0, s = '', l = this._mappings.toArray(), d = 0, i = l.length, c, p, u, m; d < i; d++) {
			if (p = l[d], c = '', p.generatedLine !== t)
				for (e = 0; p.generatedLine !== t;) c += ';', t++;
			else if (0 < d) {
				if (!poe.compareByGeneratedPositionsInflated(p, l[d - 1])) continue;
				c += ','
			}
			c += coe.encode(p.generatedColumn - e), e = p.generatedColumn, null != p.source && (m = this._sources.indexOf(p.source), c += coe.encode(m - o), o = m, c += coe.encode(p.originalLine - 1 - r), r = p.originalLine - 1, c += coe.encode(p.originalColumn - n), n = p.originalColumn, null != p.name && (u = this._names.indexOf(p.name), c += coe.encode(u - a), a = u)), s += c
		}
		return s
	}, va.prototype._generateSourcesContent = function(e, t) {
		return e.map(function(e) {
			if (!this._sourcesContents) return null;
			null != t && (e = poe.relative(t, e));
			var n = poe.toSetString(e);
			return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null
		}, this)
	}, va.prototype.toJSON = function() {
		var e = {
			version: this._version,
			sources: this._sources.toArray(),
			names: this._names.toArray(),
			mappings: this._serializeMappings()
		};
		return null != this._file && (e.file = this._file), null != this._sourceRoot && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e
	}, va.prototype.toString = function() {
		return JSON.stringify(this.toJSON())
	};
	var yoe = {
			SourceMapGenerator: va
		},
		boe = e(function(e, t) {
			function n(e, r, a, o, i, s) {
				var l = Fd((r - e) / 2) + e,
					d = i(a, o[l], !0);
				return 0 === d ? l : 0 < d ? 1 < r - l ? n(l, r, a, o, i, s) : s == t.LEAST_UPPER_BOUND ? r < o.length ? r : -1 : l : 1 < l - e ? n(e, l, a, o, i, s) : s == t.LEAST_UPPER_BOUND ? l : 0 > e ? -1 : e
			}
			t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2, t.search = function(e, r, a, o) {
				if (0 === r.length) return -1;
				var i = n(-1, r.length, e, r, a, o || t.GREATEST_LOWER_BOUND);
				if (0 > i) return -1;
				for (; 0 <= i - 1 && 0 === a(r[i], r[i - 1], !0);) --i;
				return i
			}
		}),
		xoe = goe.ArraySet,
		koe = {
			quickSort: function(e, t) {
				Ea(e, t, 0, e.length - 1)
			}
		}.quickSort;
	Aa.fromSourceMap = function(e) {
		return Oa.fromSourceMap(e)
	}, Aa.prototype._version = 3, Aa.prototype.__generatedMappings = null, Object.defineProperty(Aa.prototype, '_generatedMappings', {
		get: function() {
			return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings
		}
	}), Aa.prototype.__originalMappings = null, Object.defineProperty(Aa.prototype, '_originalMappings', {
		get: function() {
			return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings
		}
	}), Aa.prototype._charIsMappingSeparator = function(e, t) {
		var n = e.charAt(t);
		return ';' === n || ',' === n
	}, Aa.prototype._parseMappings = function() {
		throw new Error('Subclasses must implement _parseMappings')
	}, Aa.GENERATED_ORDER = 1, Aa.ORIGINAL_ORDER = 2, Aa.GREATEST_LOWER_BOUND = 1, Aa.LEAST_UPPER_BOUND = 2, Aa.prototype.eachMapping = function(e, t, n) {
		var r = n || Aa.GENERATED_ORDER,
			a;
		switch (r) {
			case Aa.GENERATED_ORDER:
				a = this._generatedMappings;
				break;
			case Aa.ORIGINAL_ORDER:
				a = this._originalMappings;
				break;
			default:
				throw new Error('Unknown order of iteration.');
		}
		var o = this.sourceRoot;
		a.map(function(e) {
			var t = null === e.source ? null : this._sources.at(e.source);
			return null != t && null != o && (t = poe.join(o, t)), {
				source: t,
				generatedLine: e.generatedLine,
				generatedColumn: e.generatedColumn,
				originalLine: e.originalLine,
				originalColumn: e.originalColumn,
				name: null === e.name ? null : this._names.at(e.name)
			}
		}, this).forEach(e, t || null)
	}, Aa.prototype.allGeneratedPositionsFor = function(e) {
		var t = poe.getArg(e, 'line'),
			n = {
				source: poe.getArg(e, 'source'),
				originalLine: t,
				originalColumn: poe.getArg(e, 'column', 0)
			};
		if (null != this.sourceRoot && (n.source = poe.relative(this.sourceRoot, n.source)), !this._sources.has(n.source)) return [];
		n.source = this._sources.indexOf(n.source);
		var r = [],
			a = this._findMapping(n, this._originalMappings, 'originalLine', 'originalColumn', poe.compareByOriginalPositions, boe.LEAST_UPPER_BOUND);
		if (0 <= a) {
			var o = this._originalMappings[a];
			if (void 0 === e.column)
				for (var i = o.originalLine; o && o.originalLine === i;) r.push({
					line: poe.getArg(o, 'generatedLine', null),
					column: poe.getArg(o, 'generatedColumn', null),
					lastColumn: poe.getArg(o, 'lastGeneratedColumn', null)
				}), o = this._originalMappings[++a];
			else
				for (var s = o.originalColumn; o && o.originalLine === t && o.originalColumn == s;) r.push({
					line: poe.getArg(o, 'generatedLine', null),
					column: poe.getArg(o, 'generatedColumn', null),
					lastColumn: poe.getArg(o, 'lastGeneratedColumn', null)
				}), o = this._originalMappings[++a]
		}
		return r
	};
	Oa.prototype = Object.create(Aa.prototype), Oa.prototype.consumer = Aa, Oa.fromSourceMap = function(e) {
		var t = Object.create(Oa.prototype),
			n = t._names = xoe.fromArray(e._names.toArray(), !0),
			r = t._sources = xoe.fromArray(e._sources.toArray(), !0);
		t.sourceRoot = e._sourceRoot, t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot), t.file = e._file;
		for (var a = e._mappings.toArray().slice(), o = t.__generatedMappings = [], s = t.__originalMappings = [], l = 0, i = a.length; l < i; l++) {
			var d = a[l],
				c = new Pa;
			c.generatedLine = d.generatedLine, c.generatedColumn = d.generatedColumn, d.source && (c.source = r.indexOf(d.source), c.originalLine = d.originalLine, c.originalColumn = d.originalColumn, d.name && (c.name = n.indexOf(d.name)), s.push(c)), o.push(c)
		}
		return koe(t.__originalMappings, poe.compareByOriginalPositions), t
	}, Oa.prototype._version = 3, Object.defineProperty(Oa.prototype, 'sources', {
		get: function() {
			return this._sources.toArray().map(function(e) {
				return null == this.sourceRoot ? e : poe.join(this.sourceRoot, e)
			}, this)
		}
	}), Oa.prototype._parseMappings = function(e) {
		for (var t = 1, n = 0, r = 0, a = 0, o = 0, i = 0, s = e.length, l = 0, d = {}, c = {}, p = [], u = [], m, g, h, f, y; l < s;)
			if (';' === e.charAt(l)) t++, l++, n = 0;
			else if (',' === e.charAt(l)) l++;
		else {
			for (m = new Pa, m.generatedLine = t, f = l; f < s && !this._charIsMappingSeparator(e, f); f++);
			if (g = e.slice(l, f), h = d[g], h) l += g.length;
			else {
				for (h = []; l < f;) coe.decode(e, l, c), y = c.value, l = c.rest, h.push(y);
				if (2 === h.length) throw new Error('Found a source, but no line and column');
				if (3 === h.length) throw new Error('Found a source and line, but no column');
				d[g] = h
			}
			m.generatedColumn = n + h[0], n = m.generatedColumn, 1 < h.length && (m.source = o + h[1], o += h[1], m.originalLine = r + h[2], r = m.originalLine, m.originalLine += 1, m.originalColumn = a + h[3], a = m.originalColumn, 4 < h.length && (m.name = i + h[4], i += h[4])), u.push(m), 'number' == typeof m.originalLine && p.push(m)
		}
		koe(u, poe.compareByGeneratedPositionsDeflated), this.__generatedMappings = u, koe(p, poe.compareByOriginalPositions), this.__originalMappings = p
	}, Oa.prototype._findMapping = function(e, t, n, r, a, o) {
		if (0 >= e[n]) throw new TypeError('Line must be greater than or equal to 1, got ' + e[n]);
		if (0 > e[r]) throw new TypeError('Column must be greater than or equal to 0, got ' + e[r]);
		return boe.search(e, t, a, o)
	}, Oa.prototype.computeColumnSpans = function() {
		for (var e = 0, t; e < this._generatedMappings.length; ++e) {
			if (t = this._generatedMappings[e], e + 1 < this._generatedMappings.length) {
				var n = this._generatedMappings[e + 1];
				if (t.generatedLine === n.generatedLine) {
					t.lastGeneratedColumn = n.generatedColumn - 1;
					continue
				}
			}
			t.lastGeneratedColumn = Infinity
		}
	}, Oa.prototype.originalPositionFor = function(e) {
		var t = {
				generatedLine: poe.getArg(e, 'line'),
				generatedColumn: poe.getArg(e, 'column')
			},
			n = this._findMapping(t, this._generatedMappings, 'generatedLine', 'generatedColumn', poe.compareByGeneratedPositionsDeflated, poe.getArg(e, 'bias', Aa.GREATEST_LOWER_BOUND));
		if (0 <= n) {
			var r = this._generatedMappings[n];
			if (r.generatedLine === t.generatedLine) {
				var a = poe.getArg(r, 'source', null);
				null !== a && (a = this._sources.at(a), null != this.sourceRoot && (a = poe.join(this.sourceRoot, a)));
				var o = poe.getArg(r, 'name', null);
				return null !== o && (o = this._names.at(o)), {
					source: a,
					line: poe.getArg(r, 'originalLine', null),
					column: poe.getArg(r, 'originalColumn', null),
					name: o
				}
			}
		}
		return {
			source: null,
			line: null,
			column: null,
			name: null
		}
	}, Oa.prototype.hasContentsOfAllSources = function() {
		return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
			return null == e
		})
	}, Oa.prototype.sourceContentFor = function(e, t) {
		if (!this.sourcesContent) return null;
		if (null != this.sourceRoot && (e = poe.relative(this.sourceRoot, e)), this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
		var n;
		if (null != this.sourceRoot && (n = poe.urlParse(this.sourceRoot))) {
			var r = e.replace(/^file:\/\//, '');
			if ('file' == n.scheme && this._sources.has(r)) return this.sourcesContent[this._sources.indexOf(r)];
			if ((!n.path || '/' == n.path) && this._sources.has('/' + e)) return this.sourcesContent[this._sources.indexOf('/' + e)]
		}
		if (t) return null;
		throw new Error('"' + e + '" is not in the SourceMap.')
	}, Oa.prototype.generatedPositionFor = function(e) {
		var t = poe.getArg(e, 'source');
		if (null != this.sourceRoot && (t = poe.relative(this.sourceRoot, t)), !this._sources.has(t)) return {
			line: null,
			column: null,
			lastColumn: null
		};
		t = this._sources.indexOf(t);
		var n = {
				source: t,
				originalLine: poe.getArg(e, 'line'),
				originalColumn: poe.getArg(e, 'column')
			},
			r = this._findMapping(n, this._originalMappings, 'originalLine', 'originalColumn', poe.compareByOriginalPositions, poe.getArg(e, 'bias', Aa.GREATEST_LOWER_BOUND));
		if (0 <= r) {
			var a = this._originalMappings[r];
			if (a.source === n.source) return {
				line: poe.getArg(a, 'generatedLine', null),
				column: poe.getArg(a, 'generatedColumn', null),
				lastColumn: poe.getArg(a, 'lastGeneratedColumn', null)
			}
		}
		return {
			line: null,
			column: null,
			lastColumn: null
		}
	};
	La.prototype = Object.create(Aa.prototype), La.prototype.constructor = Aa, La.prototype._version = 3, Object.defineProperty(La.prototype, 'sources', {
		get: function() {
			for (var e = [], t = 0; t < this._sections.length; t++)
				for (var n = 0; n < this._sections[t].consumer.sources.length; n++) e.push(this._sections[t].consumer.sources[n]);
			return e
		}
	}), La.prototype.originalPositionFor = function(e) {
		var t = {
				generatedLine: poe.getArg(e, 'line'),
				generatedColumn: poe.getArg(e, 'column')
			},
			n = boe.search(t, this._sections, function(e, t) {
				var n = e.generatedLine - t.generatedOffset.generatedLine;
				return n ? n : e.generatedColumn - t.generatedOffset.generatedColumn
			}),
			r = this._sections[n];
		return r ? r.consumer.originalPositionFor({
			line: t.generatedLine - (r.generatedOffset.generatedLine - 1),
			column: t.generatedColumn - (r.generatedOffset.generatedLine === t.generatedLine ? r.generatedOffset.generatedColumn - 1 : 0),
			bias: e.bias
		}) : {
			source: null,
			line: null,
			column: null,
			name: null
		}
	}, La.prototype.hasContentsOfAllSources = function() {
		return this._sections.every(function(e) {
			return e.consumer.hasContentsOfAllSources()
		})
	}, La.prototype.sourceContentFor = function(e, t) {
		for (var n = 0; n < this._sections.length; n++) {
			var r = this._sections[n],
				a = r.consumer.sourceContentFor(e, !0);
			if (a) return a
		}
		if (t) return null;
		throw new Error('"' + e + '" is not in the SourceMap.')
	}, La.prototype.generatedPositionFor = function(e) {
		for (var t = 0, n; t < this._sections.length; t++)
			if (n = this._sections[t], -1 !== n.consumer.sources.indexOf(poe.getArg(e, 'source'))) {
				var r = n.consumer.generatedPositionFor(e);
				if (r) {
					var a = {
						line: r.line + (n.generatedOffset.generatedLine - 1),
						column: r.column + (n.generatedOffset.generatedLine === r.line ? n.generatedOffset.generatedColumn - 1 : 0)
					};
					return a
				}
			}
		return {
			line: null,
			column: null
		}
	}, La.prototype._parseMappings = function() {
		this.__generatedMappings = [], this.__originalMappings = [];
		for (var e = 0; e < this._sections.length; e++)
			for (var t = this._sections[e], n = t.consumer._generatedMappings, r = 0; r < n.length; r++) {
				var a = n[r],
					o = t.consumer._sources.at(a.source);
				null !== t.consumer.sourceRoot && (o = poe.join(t.consumer.sourceRoot, o)), this._sources.add(o), o = this._sources.indexOf(o);
				var i = t.consumer._names.at(a.name);
				this._names.add(i), i = this._names.indexOf(i);
				var s = {
					source: o,
					generatedLine: a.generatedLine + (t.generatedOffset.generatedLine - 1),
					generatedColumn: a.generatedColumn + (t.generatedOffset.generatedLine === a.generatedLine ? t.generatedOffset.generatedColumn - 1 : 0),
					originalLine: a.originalLine,
					originalColumn: a.originalColumn,
					name: i
				};
				this.__generatedMappings.push(s), 'number' == typeof s.originalLine && this.__originalMappings.push(s)
			}
		koe(this.__generatedMappings, poe.compareByGeneratedPositionsDeflated), koe(this.__originalMappings, poe.compareByOriginalPositions)
	};
	var Soe = yoe.SourceMapGenerator,
		woe = /(\r?\n)/,
		voe = '$$$isSourceNode$$$';
	qa.fromStringWithSourceMap = function(e, t, n) {
		function r(e, t) {
			if (null === e || void 0 === e.source) a.add(t);
			else {
				var r = n ? poe.join(n, e.source) : e.source;
				a.add(new qa(e.originalLine, e.originalColumn, r, t, e.name))
			}
		}
		var a = new qa,
			o = e.split(woe),
			i = 0,
			s = function() {
				function e() {
					return i < o.length ? o[i++] : void 0
				}
				var t = e(),
					n = e() || '';
				return t + n
			},
			l = 1,
			d = 0,
			c = null;
		return t.eachMapping(function(e) {
			if (null != c)
				if (l < e.generatedLine) r(c, s()), l++, d = 0;
				else {
					var t = o[i],
						n = t.substr(0, e.generatedColumn - d);
					return o[i] = t.substr(e.generatedColumn - d), d = e.generatedColumn, r(c, n), void(c = e)
				}
			for (; l < e.generatedLine;) a.add(s()), l++;
			if (d < e.generatedColumn) {
				var t = o[i];
				a.add(t.substr(0, e.generatedColumn)), o[i] = t.substr(e.generatedColumn), d = e.generatedColumn
			}
			c = e
		}, this), i < o.length && (c && r(c, s()), a.add(o.splice(i).join(''))), t.sources.forEach(function(e) {
			var r = t.sourceContentFor(e);
			null != r && (null != n && (e = poe.join(n, e)), a.setSourceContent(e, r))
		}), a
	}, qa.prototype.add = function(e) {
		if (Array.isArray(e)) e.forEach(function(e) {
			this.add(e)
		}, this);
		else if (e[voe] || 'string' == typeof e) e && this.children.push(e);
		else throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + e);
		return this
	}, qa.prototype.prepend = function(e) {
		if (Array.isArray(e))
			for (var t = e.length - 1; 0 <= t; t--) this.prepend(e[t]);
		else if (e[voe] || 'string' == typeof e) this.children.unshift(e);
		else throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + e);
		return this
	}, qa.prototype.walk = function(e) {
		for (var t = 0, n = this.children.length, r; t < n; t++) r = this.children[t], r[voe] ? r.walk(e) : '' !== r && e(r, {
			source: this.source,
			line: this.line,
			column: this.column,
			name: this.name
		})
	}, qa.prototype.join = function(e) {
		var t = this.children.length,
			n, r;
		if (0 < t) {
			for (n = [], r = 0; r < t - 1; r++) n.push(this.children[r]), n.push(e);
			n.push(this.children[r]), this.children = n
		}
		return this
	}, qa.prototype.replaceRight = function(e, t) {
		var n = this.children[this.children.length - 1];
		return n[voe] ? n.replaceRight(e, t) : 'string' == typeof n ? this.children[this.children.length - 1] = n.replace(e, t) : this.children.push(''.replace(e, t)), this
	}, qa.prototype.setSourceContent = function(e, t) {
		this.sourceContents[poe.toSetString(e)] = t
	}, qa.prototype.walkSourceContents = function(e) {
		for (var t = 0, n = this.children.length; t < n; t++) this.children[t][voe] && this.children[t].walkSourceContents(e);
		for (var r = Object.keys(this.sourceContents), t = 0, n = r.length; t < n; t++) e(poe.fromSetString(r[t]), this.sourceContents[r[t]])
	}, qa.prototype.toString = function() {
		var e = '';
		return this.walk(function(t) {
			e += t
		}), e
	}, qa.prototype.toStringWithSourceMap = function(e) {
		var t = {
				code: '',
				line: 1,
				column: 0
			},
			n = new Soe(e),
			r = !1,
			a = null,
			o = null,
			i = null,
			s = null;
		return this.walk(function(e, l) {
			t.code += e, null !== l.source && null !== l.line && null !== l.column ? ((a !== l.source || o !== l.line || i !== l.column || s !== l.name) && n.addMapping({
				source: l.source,
				original: {
					line: l.line,
					column: l.column
				},
				generated: {
					line: t.line,
					column: t.column
				},
				name: l.name
			}), a = l.source, o = l.line, i = l.column, s = l.name, r = !0) : r && (n.addMapping({
				generated: {
					line: t.line,
					column: t.column
				}
			}), a = null, r = !1);
			for (var d = 0, c = e.length; d < c; d++) e.charCodeAt(d) === 10 ? (t.line++, t.column = 0, d + 1 === c ? (a = null, r = !1) : r && n.addMapping({
				source: l.source,
				original: {
					line: l.line,
					column: l.column
				},
				generated: {
					line: t.line,
					column: t.column
				},
				name: l.name
			})) : t.column++
		}), this.walkSourceContents(function(e, t) {
			n.setSourceContent(e, t)
		}), {
			code: t.code,
			map: n
		}
	};
	var Toe = yoe.SourceMapGenerator,
		Coe = {
			SourceMapConsumer: Aa,
			BasicSourceMapConsumer: Oa,
			IndexedSourceMapConsumer: La
		}.SourceMapConsumer,
		Eoe = {
			SourceNode: qa
		}.SourceNode,
		Aoe = {
			SourceMapGenerator: Toe,
			SourceMapConsumer: Coe,
			SourceNode: Eoe
		};
	var Ooe = Aoe.SourceMapGenerator,
		Poe = {
			Atrule: !0,
			Selector: !0,
			Declaration: !0
		},
		Loe = function(e, t) {
			var n = new Ooe,
				r = {
					line: 1,
					column: 0
				},
				a = {
					line: 0,
					column: 0
				},
				o = !1,
				i = {
					line: 1,
					column: 0
				},
				s = {
					generated: i
				},
				l = e(t, function(e, t, l, d) {
					if (e.loc && e.loc.start && Poe.hasOwnProperty(e.type)) {
						var c = e.loc.start.line,
							p = e.loc.start.column - 1;
						(a.line !== c || a.column !== p) && (a.line = c, a.column = p, r.line = l, r.column = d, o && (o = !1, (r.line !== i.line || r.column !== i.column) && n.addMapping(s)), o = !0, n.addMapping({
							source: e.loc.source,
							original: a,
							generated: r
						}))
					}
				}, function(e, t, n, r) {
					o && Poe.hasOwnProperty(e.type) && (i.line = n, i.column = r)
				});
			return o && n.addMapping(s), {
				css: l,
				map: n
			}
		};
	var qoe = Object.prototype.hasOwnProperty,
		Roe = function() {},
		Doe = function(e) {
			var t = Ia(e),
				n = Ba(t);
			return {
				translate: Na(t),
				translateWithSourceMap: function(e) {
					return Loe(n, e)
				},
				translateMarkup: n
			}
		};
	Doe.createGenerator = Na, Doe.createMarkupGenerator = Ba, Doe.sourceMap = Loe;
	var Noe = function(e) {
		var t = e.walk,
			n = e.walkUp;
		return {
			fromPlainObject: function(e) {
				return t(e, function(e) {
					e.children && !1 == e.children instanceof hne && (e.children = new hne().fromArray(e.children))
				}), e
			},
			toPlainObject: function(e) {
				return n(e, function(e) {
					e.children && e.children instanceof hne && (e.children = e.children.toArray())
				}), e
			}
		}
	};
	var Boe = Object.prototype.hasOwnProperty,
		Ioe = function(e) {
			var t = Ua(e),
				n = {};
			for (var r in t)
				if (Boe.call(t, r)) {
					var e = t[r];
					n[r] = Function('node', 'context', 'walk', (e.context ? 'var old = context.' + e.context + ';\ncontext.' + e.context + ' = node;\n' : '') + e.fields.map(function(e) {
						var t = 'list' === e.type ? 'node.' + e.name + '.each(walk);' : 'walk(node.' + e.name + ');';
						return e.nullable && (t = 'if (node.' + e.name + ') {\n    ' + t + '}'), t
					}).join('\n') + (e.context ? '\ncontext.' + e.context + ' = old;' : ''))
				}
			return {
				walk: function(e, t) {
					function r(e, o, i) {
						t.call(a, e, o, i), n.hasOwnProperty(e.type) && n[e.type](e, a, r)
					}
					var a = Va(e, t);
					r(e)
				},
				walkUp: function(e, t) {
					function r(e, o, i) {
						n.hasOwnProperty(e.type) && n[e.type](e, a, r), t.call(a, e, o, i)
					}
					var a = Va(e, t);
					r(e)
				},
				walkRules: function(e, t) {
					za.call(Va(e, t), e)
				},
				walkRulesRight: function(e, t) {
					_a.call(Va(e, t), e)
				},
				walkDeclarations: function(e, t) {
					Ma.call(Va(e, t), e)
				}
			}
		};
	var zoe = function e(t) {
			var n = {};
			for (var r in t) {
				var a = t[r];
				a && (Array.isArray(a) ? a = a.slice(0) : a instanceof hne ? a = new hne().fromArray(a.map(e)) : a.constructor === Object && (a = e(a))), n[r] = a
			}
			return n
		},
		_oe = Object.prototype.hasOwnProperty,
		Moe = {
			generic: !0,
			types: {},
			properties: {},
			parseContext: {},
			scope: {},
			atrule: ['parse'],
			pseudo: ['parse'],
			node: ['name', 'structure', 'parse', 'generate', 'walkContext']
		},
		Goe = function(e, t) {
			return Ha(e, t, Moe)
		},
		Uoe = {
			syntax: 'initial | inherit | unset | revert',
			media: 'noPracticalMedia',
			inherited: !1,
			animationType: 'eachOfShorthandPropertiesExceptUnicodeBiDiAndDirection',
			percentages: 'no',
			groups: ['CSS Miscellaneous'],
			initial: 'noPracticalInitialValue',
			appliesto: 'allElements',
			computed: 'asSpecifiedAppliesToEachProperty',
			order: 'uniqueOrder',
			status: 'standard'
		},
		Voe = {
			syntax: '<single-animation>#',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Animations'],
			initial: ['animation-name', 'animation-duration', 'animation-timing-function', 'animation-delay', 'animation-iteration-count', 'animation-direction', 'animation-fill-mode', 'animation-play-state'],
			appliesto: 'allElementsAndPseudos',
			computed: ['animation-name', 'animation-duration', 'animation-timing-function', 'animation-delay', 'animation-direction', 'animation-iteration-count', 'animation-fill-mode', 'animation-play-state'],
			order: 'orderOfAppearance',
			status: 'standard'
		},
		Woe = {
			syntax: 'auto | none',
			media: 'all',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Basic User Interface'],
			initial: 'auto',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'perGrammar',
			status: 'experimental'
		},
		Foe = {
			syntax: '<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards',
			media: 'aural',
			inherited: !0,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Speech'],
			initial: 'center',
			appliesto: 'allElements',
			computed: 'normalizedAngle',
			order: 'orderOfAppearance',
			status: 'obsolete'
		},
		joe = {
			syntax: '[ <bg-layer> , ]* <final-bg-layer>',
			media: 'visual',
			inherited: !1,
			animationType: ['background-color', 'background-image', 'background-clip', 'background-position', 'background-size', 'background-repeat', 'background-attachment'],
			percentages: ['background-position', 'background-size'],
			groups: ['CSS Backgrounds and Borders'],
			initial: ['background-image', 'background-position', 'background-size', 'background-repeat', 'background-origin', 'background-clip', 'background-attachment', 'background-color'],
			appliesto: 'allElements',
			computed: ['background-image', 'background-position', 'background-size', 'background-repeat', 'background-origin', 'background-clip', 'background-attachment', 'background-color'],
			order: 'orderOfAppearance',
			alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
			status: 'standard'
		},
		Hoe = {
			syntax: '<br-width> || <br-style> || <color>',
			media: 'visual',
			inherited: !1,
			animationType: ['border-color', 'border-style', 'border-width'],
			percentages: 'no',
			groups: ['CSS Backgrounds and Borders'],
			initial: ['border-width', 'border-style', 'border-color'],
			appliesto: 'allElements',
			computed: ['border-width', 'border-style', 'border-color'],
			order: 'orderOfAppearance',
			alsoAppliesTo: ['::first-letter'],
			status: 'standard'
		},
		Yoe = {
			syntax: '<length> | <percentage> | auto',
			media: 'visual',
			inherited: !1,
			animationType: 'lpc',
			percentages: 'referToContainingBlockHeight',
			groups: ['CSS Positioning'],
			initial: 'auto',
			appliesto: 'positionedElements',
			computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
			order: 'uniqueOrder',
			status: 'standard'
		},
		$oe = {
			syntax: 'none | left | right | both | inline-start | inline-end',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Positioning'],
			initial: 'none',
			appliesto: 'blockLevelElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		Koe = {
			syntax: '<shape> | auto',
			media: 'visual',
			inherited: !1,
			animationType: 'rectangle',
			percentages: 'no',
			groups: ['CSS Masking'],
			initial: 'auto',
			appliesto: 'absolutelyPositionedElements',
			computed: 'autoOrRectangle',
			order: 'uniqueOrder',
			status: 'standard'
		},
		Xoe = {
			syntax: '<color>',
			media: 'visual',
			inherited: !0,
			animationType: 'color',
			percentages: 'no',
			groups: ['CSS Color'],
			initial: 'variesFromBrowserToBrowser',
			appliesto: 'allElements',
			computed: 'translucentValuesRGBAOtherwiseRGB',
			order: 'uniqueOrder',
			alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
			status: 'standard'
		},
		Qoe = {
			syntax: '<\'column-width\'> || <\'column-count\'>',
			media: 'visual',
			inherited: !1,
			animationType: ['column-width', 'column-count'],
			percentages: 'no',
			groups: ['CSS Columns'],
			initial: ['column-width', 'column-count'],
			appliesto: 'blockContainersExceptTableWrappers',
			computed: ['column-width', 'column-count'],
			order: 'perGrammar',
			status: 'standard'
		},
		Zoe = {
			syntax: 'none | strict | content | [ size || layout || style || paint ]',
			media: 'all',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Containment'],
			initial: 'none',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'perGrammar',
			status: 'experimental'
		},
		Joe = {
			syntax: 'normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?',
			media: 'all',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Generated Content'],
			initial: 'normal',
			appliesto: 'beforeAndAfterPseudos',
			computed: 'normalOnElementsForPseudosNoneAbsoluteURIStringOrAsSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		eie = {
			syntax: '[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]',
			media: ['visual', 'interactive'],
			inherited: !0,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Basic User Interface'],
			initial: 'auto',
			appliesto: 'allElements',
			computed: 'asSpecifiedURLsAbsolute',
			order: 'uniqueOrder',
			status: 'standard'
		},
		tie = {
			syntax: 'ltr | rtl',
			media: 'visual',
			inherited: !0,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Writing Modes'],
			initial: 'ltr',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		nie = {
			syntax: '[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>',
			media: 'all',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Display'],
			initial: 'inline',
			appliesto: 'allElements',
			computed: 'asSpecifiedExceptPositionedFloatingAndRootElementsKeywordMaybeDifferent',
			order: 'uniqueOrder',
			status: 'standard'
		},
		rie = {
			syntax: 'none | <filter-function-list>',
			media: 'visual',
			inherited: !1,
			animationType: 'filterList',
			percentages: 'no',
			groups: ['Filter Effects'],
			initial: 'none',
			appliesto: 'allElementsSVGContainerElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		aie = {
			syntax: 'none | [ <\'flex-grow\'> <\'flex-shrink\'>? || <\'flex-basis\'> ]',
			media: 'visual',
			inherited: !1,
			animationType: ['flex-grow', 'flex-shrink', 'flex-basis'],
			percentages: 'no',
			groups: ['CSS Flexible Box Layout'],
			initial: ['flex-grow', 'flex-shrink', 'flex-basis'],
			appliesto: 'flexItemsAndInFlowPseudos',
			computed: ['flex-grow', 'flex-shrink', 'flex-basis'],
			order: 'orderOfAppearance',
			status: 'standard'
		},
		oie = {
			syntax: 'left | right | none | inline-start | inline-end',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Positioning'],
			initial: 'none',
			appliesto: 'allElementsNoEffectIfDisplayNone',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		iie = {
			syntax: '[ [ <\'font-style\'> || <font-variant-css21> || <\'font-weight\'> || <\'font-stretch\'> ]? <\'font-size\'> [ / <\'line-height\'> ]? <\'font-family\'> ] | caption | icon | menu | message-box | small-caption | status-bar',
			media: 'visual',
			inherited: !0,
			animationType: ['font-style', 'font-variant', 'font-weight', 'font-stretch', 'font-size', 'line-height', 'font-family'],
			percentages: ['font-size', 'line-height'],
			groups: ['CSS Fonts'],
			initial: ['font-style', 'font-variant', 'font-weight', 'font-stretch', 'font-size', 'line-height', 'font-family'],
			appliesto: 'allElements',
			computed: ['font-style', 'font-variant', 'font-weight', 'font-stretch', 'font-size', 'line-height', 'font-family'],
			order: 'orderOfAppearance',
			alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
			status: 'standard'
		},
		sie = {
			syntax: '<\'row-gap\'> <\'column-gap\'>?',
			media: 'visual',
			inherited: !1,
			animationType: ['row-gap', 'column-gap'],
			percentages: 'no',
			groups: ['CSS Box Alignment'],
			initial: ['row-gap', 'column-gap'],
			appliesto: 'gridContainers',
			computed: ['row-gap', 'column-gap'],
			order: 'uniqueOrder',
			status: 'standard'
		},
		lie = {
			syntax: '<\'grid-template\'> | <\'grid-template-rows\'> / [ auto-flow && dense? ] <\'grid-auto-columns\'>? | [ auto-flow && dense? ] <\'grid-auto-rows\'>? / <\'grid-template-columns\'>',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: ['grid-template-rows', 'grid-template-columns', 'grid-auto-rows', 'grid-auto-columns'],
			groups: ['CSS Grid Layout'],
			initial: ['grid-template-rows', 'grid-template-columns', 'grid-template-areas', 'grid-auto-rows', 'grid-auto-columns', 'grid-auto-flow', 'grid-column-gap', 'grid-row-gap', 'column-gap', 'row-gap'],
			appliesto: 'gridContainers',
			computed: ['grid-template-rows', 'grid-template-columns', 'grid-template-areas', 'grid-auto-rows', 'grid-auto-columns', 'grid-auto-flow', 'grid-column-gap', 'grid-row-gap', 'column-gap', 'row-gap'],
			order: 'uniqueOrder',
			status: 'standard'
		},
		cie = {
			syntax: '[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto',
			media: 'visual',
			inherited: !1,
			animationType: 'lpc',
			percentages: 'regardingHeightOfGeneratedBoxContainingBlockPercentagesRelativeToContainingBlock',
			groups: ['CSS Box Model'],
			initial: 'auto',
			appliesto: 'allElementsButNonReplacedAndTableColumns',
			computed: 'percentageAutoOrAbsoluteLength',
			order: 'uniqueOrder',
			status: 'standard'
		},
		pie = {
			syntax: 'none | manual | auto',
			media: 'visual',
			inherited: !0,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Text'],
			initial: 'manual',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		uie = {
			syntax: 'auto | isolate',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['Compositing and Blending'],
			initial: 'auto',
			appliesto: 'allElementsSVGContainerGraphicsAndGraphicsReferencingElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		mie = {
			syntax: '<length> | <percentage> | auto',
			media: 'visual',
			inherited: !1,
			animationType: 'lpc',
			percentages: 'referToWidthOfContainingBlock',
			groups: ['CSS Positioning'],
			initial: 'auto',
			appliesto: 'positionedElements',
			computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
			order: 'uniqueOrder',
			status: 'standard'
		},
		gie = {
			syntax: '[ <length> | <percentage> | auto ]{1,4}',
			media: 'visual',
			inherited: !1,
			animationType: 'length',
			percentages: 'referToWidthOfContainingBlock',
			groups: ['CSS Box Model'],
			initial: ['margin-bottom', 'margin-left', 'margin-right', 'margin-top'],
			appliesto: 'allElementsExceptTableDisplayTypes',
			computed: ['margin-bottom', 'margin-left', 'margin-right', 'margin-top'],
			order: 'uniqueOrder',
			alsoAppliesTo: ['::first-letter'],
			status: 'standard'
		},
		hie = {
			syntax: '<mask-layer>#',
			media: 'visual',
			inherited: !1,
			animationType: ['mask-image', 'mask-mode', 'mask-repeat', 'mask-position', 'mask-clip', 'mask-origin', 'mask-size', 'mask-composite'],
			percentages: ['mask-position'],
			groups: ['CSS Masking'],
			initial: ['mask-image', 'mask-mode', 'mask-repeat', 'mask-position', 'mask-clip', 'mask-origin', 'mask-size', 'mask-composite'],
			appliesto: 'allElementsSVGContainerElements',
			computed: ['mask-image', 'mask-mode', 'mask-repeat', 'mask-position', 'mask-clip', 'mask-origin', 'mask-size', 'mask-composite'],
			order: 'perGrammar',
			stacking: !0,
			status: 'standard'
		},
		fie = {
			syntax: '[ <\'offset-position\'>? [ <\'offset-path\'> [ <\'offset-distance\'> || <\'offset-rotate\'> ]? ]? ]! [ / <\'offset-anchor\'> ]?',
			media: 'visual',
			inherited: !1,
			animationType: ['offset-position', 'offset-path', 'offset-distance', 'offset-anchor', 'offset-rotate'],
			percentages: ['offset-position', 'offset-distance', 'offset-anchor'],
			groups: ['CSS Motion'],
			initial: ['offset-position', 'offset-path', 'offset-distance', 'offset-anchor', 'offset-rotate'],
			appliesto: 'transformableElements',
			computed: ['offset-position', 'offset-path', 'offset-distance', 'offset-anchor', 'offset-rotate'],
			order: 'perGrammar',
			stacking: !0,
			status: 'experimental'
		},
		yie = {
			syntax: '<number>',
			media: 'visual',
			inherited: !1,
			animationType: 'number',
			percentages: 'no',
			groups: ['CSS Color'],
			initial: '1.0',
			appliesto: 'allElements',
			computed: 'specifiedValueClipped0To1',
			order: 'uniqueOrder',
			alsoAppliesTo: ['::placeholder'],
			status: 'standard'
		},
		bie = {
			syntax: '<integer>',
			media: 'visual',
			inherited: !1,
			animationType: 'integer',
			percentages: 'no',
			groups: ['CSS Flexible Box Layout'],
			initial: '0',
			appliesto: 'flexItemsAndAbsolutelyPositionedFlexContainerChildren',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		xie = {
			syntax: '<integer>',
			media: 'visual',
			inherited: !0,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Fragmentation'],
			initial: '2',
			appliesto: 'blockContainerElements',
			computed: 'asSpecified',
			order: 'perGrammar',
			status: 'standard'
		},
		kie = {
			syntax: '[ <\'outline-color\'> || <\'outline-style\'> || <\'outline-width\'> ]',
			media: ['visual', 'interactive'],
			inherited: !1,
			animationType: ['outline-color', 'outline-width', 'outline-style'],
			percentages: 'no',
			groups: ['CSS Basic User Interface'],
			initial: ['outline-color', 'outline-style', 'outline-width'],
			appliesto: 'allElements',
			computed: ['outline-color', 'outline-width', 'outline-style'],
			order: 'orderOfAppearance',
			status: 'standard'
		},
		Sie = {
			syntax: '[ visible | hidden | clip | scroll | auto ]{1,2}',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Overflow'],
			initial: 'visible',
			appliesto: 'blockContainersFlexContainersGridContainers',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		wie = {
			syntax: '[ <length> | <percentage> ]{1,4}',
			media: 'visual',
			inherited: !1,
			animationType: 'length',
			percentages: 'referToWidthOfContainingBlock',
			groups: ['CSS Box Model'],
			initial: ['padding-bottom', 'padding-left', 'padding-right', 'padding-top'],
			appliesto: 'allElementsExceptInternalTableDisplayTypes',
			computed: ['padding-bottom', 'padding-left', 'padding-right', 'padding-top'],
			order: 'uniqueOrder',
			alsoAppliesTo: ['::first-letter'],
			status: 'standard'
		},
		vie = {
			syntax: 'none | <length>',
			media: 'visual',
			inherited: !1,
			animationType: 'length',
			percentages: 'no',
			groups: ['CSS Transforms'],
			initial: 'none',
			appliesto: 'transformableElements',
			computed: 'absoluteLengthOrNone',
			order: 'uniqueOrder',
			stacking: !0,
			status: 'standard'
		},
		Tie = {
			syntax: 'static | relative | absolute | sticky | fixed',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Positioning'],
			initial: 'static',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			stacking: !0,
			status: 'standard'
		},
		Cie = {
			syntax: 'none | [ <string> <string> ]+',
			media: 'visual',
			inherited: !0,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Generated Content'],
			initial: 'dependsOnUserAgent',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		Eie = {
			syntax: 'none | both | horizontal | vertical',
			media: 'visual',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Basic User Interface'],
			initial: 'none',
			appliesto: 'elementsWithOverflowNotVisibleAndReplacedElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		Aie = {
			syntax: '<length> | <percentage> | auto',
			media: 'visual',
			inherited: !1,
			animationType: 'lpc',
			percentages: 'referToWidthOfContainingBlock',
			groups: ['CSS Positioning'],
			initial: 'auto',
			appliesto: 'positionedElements',
			computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
			order: 'uniqueOrder',
			status: 'standard'
		},
		Oie = {
			syntax: 'none | [ x | y | z | <number>{3} ]? && <angle>',
			media: 'visual',
			inherited: !1,
			animationType: 'transform',
			percentages: 'no',
			groups: ['CSS Transforms'],
			initial: 'none',
			appliesto: 'transformableElements',
			computed: 'asSpecified',
			order: 'perGrammar',
			stacking: !0,
			status: 'standard'
		},
		Pie = {
			syntax: 'none | <number>{1,3}',
			media: 'visual',
			inherited: !1,
			animationType: 'transform',
			percentages: 'no',
			groups: ['CSS Transforms'],
			initial: 'none',
			appliesto: 'transformableElements',
			computed: 'asSpecified',
			order: 'perGrammar',
			stacking: !0,
			status: 'standard'
		},
		Lie = {
			syntax: '<length> | <percentage> | auto',
			media: 'visual',
			inherited: !1,
			animationType: 'lpc',
			percentages: 'referToContainingBlockHeight',
			groups: ['CSS Positioning'],
			initial: 'auto',
			appliesto: 'positionedElements',
			computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
			order: 'uniqueOrder',
			status: 'standard'
		},
		qie = {
			syntax: 'none | <transform-list>',
			media: 'visual',
			inherited: !1,
			animationType: 'transform',
			percentages: 'referToSizeOfBoundingBox',
			groups: ['CSS Transforms'],
			initial: 'none',
			appliesto: 'transformableElements',
			computed: 'asSpecifiedRelativeToAbsoluteLengths',
			order: 'uniqueOrder',
			stacking: !0,
			status: 'standard'
		},
		Rie = {
			syntax: '<single-transition>#',
			media: 'interactive',
			inherited: !1,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Transitions'],
			initial: ['transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function'],
			appliesto: 'allElementsAndPseudos',
			computed: ['transition-delay', 'transition-duration', 'transition-property', 'transition-timing-function'],
			order: 'orderOfAppearance',
			status: 'standard'
		},
		Die = {
			syntax: 'none | <length-percentage> [ <length-percentage> <length>? ]?',
			media: 'visual',
			inherited: !1,
			animationType: 'transform',
			percentages: 'referToSizeOfBoundingBox',
			groups: ['CSS Transforms'],
			initial: 'none',
			appliesto: 'transformableElements',
			computed: 'asSpecifiedRelativeToAbsoluteLengths',
			order: 'perGrammar',
			stacking: !0,
			status: 'standard'
		},
		Nie = {
			syntax: 'visible | hidden | collapse',
			media: 'visual',
			inherited: !0,
			animationType: 'visibility',
			percentages: 'no',
			groups: ['CSS Box Model'],
			initial: 'visible',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'standard'
		},
		Bie = {
			syntax: '<integer>',
			media: 'visual',
			inherited: !0,
			animationType: 'discrete',
			percentages: 'no',
			groups: ['CSS Fragmentation'],
			initial: '2',
			appliesto: 'blockContainerElements',
			computed: 'asSpecified',
			order: 'perGrammar',
			status: 'standard'
		},
		Iie = {
			syntax: '[ <length> | <percentage> ] && [ border-box | content-box ]? | available | min-content | max-content | fit-content | auto',
			media: 'visual',
			inherited: !1,
			animationType: 'lpc',
			percentages: 'referToWidthOfContainingBlock',
			groups: ['CSS Box Model'],
			initial: 'auto',
			appliesto: 'allElementsButNonReplacedAndTableRows',
			computed: 'percentageAutoOrAbsoluteLength',
			order: 'lengthOrPercentageBeforeKeywordIfBothPresent',
			status: 'standard'
		},
		zie = {
			syntax: 'normal | reset | <number> | <percentage>',
			media: 'visual',
			inherited: !1,
			animationType: 'integer',
			percentages: 'no',
			groups: ['Microsoft Extensions'],
			initial: 'normal',
			appliesto: 'allElements',
			computed: 'asSpecified',
			order: 'uniqueOrder',
			status: 'nonstandard'
		},
		_ie = {
			all: Uoe,
			animation: Voe,
			appearance: Woe,
			azimuth: Foe,
			background: joe,
			border: Hoe,
			bottom: Yoe,
			clear: $oe,
			clip: Koe,
			color: Xoe,
			columns: Qoe,
			contain: Zoe,
			content: Joe,
			cursor: eie,
			direction: tie,
			display: nie,
			filter: rie,
			flex: aie,
			float: oie,
			font: iie,
			gap: sie,
			grid: lie,
			height: cie,
			hyphens: pie,
			isolation: uie,
			left: mie,
			margin: gie,
			mask: hie,
			offset: fie,
			opacity: yie,
			order: bie,
			orphans: xie,
			outline: kie,
			overflow: Sie,
			padding: wie,
			perspective: vie,
			position: Tie,
			quotes: Cie,
			resize: Eie,
			right: Aie,
			rotate: Oie,
			scale: Pie,
			top: Lie,
			transform: qie,
			transition: Rie,
			translate: Die,
			visibility: Nie,
			widows: Bie,
			width: Iie,
			zoom: zie,
			"--*": {
				syntax: '<declaration-value>',
				media: 'all',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Variables'],
				initial: 'seeProse',
				appliesto: 'allElements',
				computed: 'asSpecifiedWithVarsSubstituted',
				order: 'perGrammar',
				status: 'experimental'
			},
			"-ms-accelerator": {
				syntax: 'false | true',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'false',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-block-progression": {
				syntax: 'tb | rl | bt | lr',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'tb',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zoom-chaining": {
				syntax: 'none | chained',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'none',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zooming": {
				syntax: 'none | zoom',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'zoomForTheTopLevelNoneForTheRest',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zoom-limit": {
				syntax: '<\'-ms-content-zoom-limit-min\'> <\'-ms-content-zoom-limit-max\'>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: ['-ms-content-zoom-limit-max', '-ms-content-zoom-limit-min'],
				groups: ['Microsoft Extensions'],
				initial: ['-ms-content-zoom-limit-max', '-ms-content-zoom-limit-min'],
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: ['-ms-content-zoom-limit-max', '-ms-content-zoom-limit-min'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zoom-limit-max": {
				syntax: '<percentage>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'maxZoomFactor',
				groups: ['Microsoft Extensions'],
				initial: '400%',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zoom-limit-min": {
				syntax: '<percentage>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'minZoomFactor',
				groups: ['Microsoft Extensions'],
				initial: '100%',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zoom-snap": {
				syntax: '<\'-ms-content-zoom-snap-type\'> || <\'-ms-content-zoom-snap-points\'>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: ['-ms-content-zoom-snap-type', '-ms-content-zoom-snap-points'],
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: ['-ms-content-zoom-snap-type', '-ms-content-zoom-snap-points'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zoom-snap-points": {
				syntax: 'snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'snapInterval(0%, 100%)',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-content-zoom-snap-type": {
				syntax: 'none | proximity | mandatory',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'none',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-filter": {
				syntax: '<string>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: '""',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-flow-from": {
				syntax: '[ none | <custom-ident> ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'none',
				appliesto: 'nonReplacedElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-flow-into": {
				syntax: '[ none | <custom-ident> ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'none',
				appliesto: 'iframeElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-high-contrast-adjust": {
				syntax: 'auto | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-hyphenate-limit-chars": {
				syntax: 'auto | <integer>{1,3}',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-hyphenate-limit-lines": {
				syntax: 'no-limit | <integer>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'no-limit',
				appliesto: 'blockContainerElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-hyphenate-limit-zone": {
				syntax: '<percentage> | <length>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'referToLineBoxWidth',
				groups: ['Microsoft Extensions'],
				initial: '0',
				appliesto: 'blockContainerElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-ime-align": {
				syntax: 'auto | after',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-overflow-style": {
				syntax: 'auto | none | scrollbar | -ms-autohiding-scrollbar',
				media: 'interactive',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'auto',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-3dlight-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'dependsOnUserAgent',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-arrow-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'ButtonText',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-base-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'dependsOnUserAgent',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-darkshadow-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'ThreeDDarkShadow',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-face-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'ThreeDFace',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-highlight-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'ThreeDHighlight',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-shadow-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'ThreeDDarkShadow',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scrollbar-track-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'Scrollbar',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-chaining": {
				syntax: 'chained | none',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'chained',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-limit": {
				syntax: '<\'-ms-scroll-limit-x-min\'> <\'-ms-scroll-limit-y-min\'> <\'-ms-scroll-limit-x-max\'> <\'-ms-scroll-limit-y-max\'>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: ['-ms-scroll-limit-x-min', '-ms-scroll-limit-y-min', '-ms-scroll-limit-x-max', '-ms-scroll-limit-y-max'],
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: ['-ms-scroll-limit-x-min', '-ms-scroll-limit-y-min', '-ms-scroll-limit-x-max', '-ms-scroll-limit-y-max'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-limit-x-max": {
				syntax: 'auto | <length>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'auto',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-limit-x-min": {
				syntax: '<length>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: '0',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-limit-y-max": {
				syntax: 'auto | <length>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'auto',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-limit-y-min": {
				syntax: '<length>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: '0',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-rails": {
				syntax: 'none | railed',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'railed',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-snap-points-x": {
				syntax: 'snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'snapInterval(0px, 100%)',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-snap-points-y": {
				syntax: 'snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'snapInterval(0px, 100%)',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-snap-type": {
				syntax: 'none | proximity | mandatory',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'none',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-snap-x": {
				syntax: '<\'-ms-scroll-snap-type\'> <\'-ms-scroll-snap-points-x\'>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: ['-ms-scroll-snap-type', '-ms-scroll-snap-points-x'],
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: ['-ms-scroll-snap-type', '-ms-scroll-snap-points-x'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-snap-y": {
				syntax: '<\'-ms-scroll-snap-type\'> <\'-ms-scroll-snap-points-y\'>',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: ['-ms-scroll-snap-type', '-ms-scroll-snap-points-y'],
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: ['-ms-scroll-snap-type', '-ms-scroll-snap-points-y'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-scroll-translation": {
				syntax: 'none | vertical-to-horizontal',
				media: 'interactive',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-text-autospace": {
				syntax: 'none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-touch-select": {
				syntax: 'grippers | none',
				media: 'interactive',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'grippers',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-user-select": {
				syntax: 'none | element | text',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'text',
				appliesto: 'nonReplacedElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-wrap-flow": {
				syntax: 'auto | both | start | end | maximum | clear',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'auto',
				appliesto: 'blockLevelElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-wrap-margin": {
				syntax: '<length>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: '0',
				appliesto: 'exclusionElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-ms-wrap-through": {
				syntax: 'wrap | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Microsoft Extensions'],
				initial: 'wrap',
				appliesto: 'blockLevelElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-appearance": {
				syntax: 'none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: 'noneButOverriddenInUserAgentCSS',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-binding": {
				syntax: '<url> | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElementsExceptGeneratedContentOrPseudoElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-border-bottom-colors": {
				syntax: '<color>+ | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-border-left-colors": {
				syntax: '<color>+ | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-border-right-colors": {
				syntax: '<color>+ | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-border-top-colors": {
				syntax: '<color>+ | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-context-properties": {
				syntax: 'none | [ fill | fill-opacity | stroke | stroke-opacity ]#',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElementsThatCanReferenceImages',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-float-edge": {
				syntax: 'border-box | content-box | margin-box | padding-box',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'content-box',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-force-broken-image-icon": {
				syntax: '<integer>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: '0',
				appliesto: 'images',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-image-region": {
				syntax: '<shape> | auto',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'auto',
				appliesto: 'xulImageElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-orient": {
				syntax: 'inline | block | horizontal | vertical',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'inline',
				appliesto: 'anyElementEffectOnProgressAndMeter',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-outline-radius": {
				syntax: '<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?',
				media: 'visual',
				inherited: !1,
				animationType: ['-moz-outline-radius-topleft', '-moz-outline-radius-topright', '-moz-outline-radius-bottomright', '-moz-outline-radius-bottomleft'],
				percentages: ['-moz-outline-radius-topleft', '-moz-outline-radius-topright', '-moz-outline-radius-bottomright', '-moz-outline-radius-bottomleft'],
				groups: ['Mozilla Extensions'],
				initial: ['-moz-outline-radius-topleft', '-moz-outline-radius-topright', '-moz-outline-radius-bottomright', '-moz-outline-radius-bottomleft'],
				appliesto: 'allElements',
				computed: ['-moz-outline-radius-topleft', '-moz-outline-radius-topright', '-moz-outline-radius-bottomright', '-moz-outline-radius-bottomleft'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-outline-radius-bottomleft": {
				syntax: '<outline-radius>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['Mozilla Extensions'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-outline-radius-bottomright": {
				syntax: '<outline-radius>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['Mozilla Extensions'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-outline-radius-topleft": {
				syntax: '<outline-radius>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['Mozilla Extensions'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-outline-radius-topright": {
				syntax: '<outline-radius>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['Mozilla Extensions'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-stack-sizing": {
				syntax: 'ignore | stretch-to-fit',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'stretch-to-fit',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-text-blink": {
				syntax: 'none | blink',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-user-focus": {
				syntax: 'ignore | normal | select-after | select-before | select-menu | select-same | select-all | none',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-user-input": {
				syntax: 'auto | none | enabled | disabled',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-user-modify": {
				syntax: 'read-only | read-write | write-only',
				media: 'interactive',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'read-only',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-window-dragging": {
				syntax: 'drag | no-drag',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'drag',
				appliesto: 'allElementsCreatingNativeWindows',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-moz-window-shadow": {
				syntax: 'default | menu | tooltip | sheet | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'default',
				appliesto: 'allElementsCreatingNativeWindows',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-appearance": {
				syntax: 'none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'noneButOverriddenInUserAgentCSS',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-border-before": {
				syntax: '<\'border-width\'> || <\'border-style\'> || <\'color\'>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: ['-webkit-border-before-width'],
				groups: ['WebKit Extensions'],
				initial: ['border-width', 'border-style', 'color'],
				appliesto: 'allElements',
				computed: ['border-width', 'border-style', 'color'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-border-before-color": {
				syntax: '<\'color\'>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-border-before-style": {
				syntax: '<\'border-style\'>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-border-before-width": {
				syntax: '<\'border-width\'>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['WebKit Extensions'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthZeroIfBorderStyleNoneOrHidden',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-box-reflect": {
				syntax: '[ above | below | right | left ]? <length>? <image>?',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-mask": {
				syntax: '[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: ['-webkit-mask-image', '-webkit-mask-repeat', '-webkit-mask-attachment', '-webkit-mask-position', '-webkit-mask-origin', '-webkit-mask-clip'],
				appliesto: 'allElements',
				computed: ['-webkit-mask-image', '-webkit-mask-repeat', '-webkit-mask-attachment', '-webkit-mask-position', '-webkit-mask-origin', '-webkit-mask-clip'],
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-mask-attachment": {
				syntax: '<attachment>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'scroll',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-clip": {
				syntax: '[ <box> | border | padding | content | text ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'border',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-composite": {
				syntax: '<composite-style>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'source-over',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-image": {
				syntax: '<mask-reference>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'absoluteURIOrNone',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-origin": {
				syntax: '[ <box> | border | padding | content ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'padding',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-position": {
				syntax: '<position>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToSizeOfElement',
				groups: ['WebKit Extensions'],
				initial: '0% 0%',
				appliesto: 'allElements',
				computed: 'absoluteLengthOrPercentage',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-position-x": {
				syntax: '[ <length-percentage> | left | center | right ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToSizeOfElement',
				groups: ['WebKit Extensions'],
				initial: '0%',
				appliesto: 'allElements',
				computed: 'absoluteLengthOrPercentage',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-position-y": {
				syntax: '[ <length-percentage> | top | center | bottom ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToSizeOfElement',
				groups: ['WebKit Extensions'],
				initial: '0%',
				appliesto: 'allElements',
				computed: 'absoluteLengthOrPercentage',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-repeat": {
				syntax: '<repeat-style>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'repeat',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-repeat-x": {
				syntax: 'repeat | no-repeat | space | round',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'repeat',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-repeat-y": {
				syntax: 'repeat | no-repeat | space | round',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'repeat',
				appliesto: 'allElements',
				computed: 'absoluteLengthOrPercentage',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-mask-size": {
				syntax: '<bg-size>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'relativeToBackgroundPositioningArea',
				groups: ['WebKit Extensions'],
				initial: 'auto auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-overflow-scrolling": {
				syntax: 'auto | touch',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'auto',
				appliesto: 'scrollingBoxes',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'nonstandard'
			},
			"-webkit-tap-highlight-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'black',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-text-fill-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'color',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-text-stroke": {
				syntax: '<length> || <color>',
				media: 'visual',
				inherited: !0,
				animationType: ['-webkit-text-stroke-width', '-webkit-text-stroke-color'],
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: ['-webkit-text-stroke-width', '-webkit-text-stroke-color'],
				appliesto: 'allElements',
				computed: ['-webkit-text-stroke-width', '-webkit-text-stroke-color'],
				order: 'canonicalOrder',
				status: 'nonstandard'
			},
			"-webkit-text-stroke-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !0,
				animationType: 'color',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-text-stroke-width": {
				syntax: '<length>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'absoluteLength',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-touch-callout": {
				syntax: 'default | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'default',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"-webkit-user-modify": {
				syntax: 'read-only | read-write | read-write-plaintext-only',
				media: 'interactive',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['WebKit Extensions'],
				initial: 'read-only',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"align-content": {
				syntax: 'normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: 'normal',
				appliesto: 'multilineFlexContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"align-items": {
				syntax: 'normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"align-self": {
				syntax: 'auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: 'auto',
				appliesto: 'flexItemsGridItemsAndAbsolutelyPositionedBoxes',
				computed: 'autoOnAbsolutelyPositionedElementsValueOfAlignItemsOnParent',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-delay": {
				syntax: '<time>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: '0s',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-direction": {
				syntax: '<single-animation-direction>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: 'normal',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-duration": {
				syntax: '<time>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: '0s',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-fill-mode": {
				syntax: '<single-animation-fill-mode>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: 'none',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-iteration-count": {
				syntax: '<single-animation-iteration-count>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: '1',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-name": {
				syntax: '[ none | <keyframes-name> ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: 'none',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-play-state": {
				syntax: '<single-animation-play-state>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: 'running',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"animation-timing-function": {
				syntax: '<single-timing-function>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Animations'],
				initial: 'ease',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"backdrop-filter": {
				syntax: 'none | <filter-function-list>',
				media: 'visual',
				inherited: !1,
				animationType: 'filterList',
				percentages: 'no',
				groups: ['Filter Effects'],
				initial: 'none',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"backface-visibility": {
				syntax: 'visible | hidden',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Transforms'],
				initial: 'visible',
				appliesto: 'transformableElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"background-attachment": {
				syntax: '<attachment>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'scroll',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-blend-mode": {
				syntax: '<blend-mode>#',
				media: 'none',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Compositing and Blending'],
				initial: 'normal',
				appliesto: 'allElementsSVGContainerGraphicsAndGraphicsReferencingElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-clip": {
				syntax: '<box>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'border-box',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'transparent',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-image": {
				syntax: '<bg-image>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecifiedURLsAbsolute',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-origin": {
				syntax: '<box>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'padding-box',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-position": {
				syntax: '<bg-position>#',
				media: 'visual',
				inherited: !1,
				animationType: 'repeatableListOfSimpleListOfLpc',
				percentages: 'referToSizeOfBackgroundPositioningAreaMinusBackgroundImageSize',
				groups: ['CSS Backgrounds and Borders'],
				initial: '0% 0%',
				appliesto: 'allElements',
				computed: 'listEachItemTwoKeywordsOriginOffsets',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-position-x": {
				syntax: '[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToWidthOfBackgroundPositioningAreaMinusBackgroundImageHeight',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'left',
				appliesto: 'allElements',
				computed: 'listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"background-position-y": {
				syntax: '[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToHeightOfBackgroundPositioningAreaMinusBackgroundImageHeight',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'top',
				appliesto: 'allElements',
				computed: 'listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"background-repeat": {
				syntax: '<repeat-style>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'repeat',
				appliesto: 'allElements',
				computed: 'listEachItemHasTwoKeywordsOnePerDimension',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"background-size": {
				syntax: '<bg-size>#',
				media: 'visual',
				inherited: !1,
				animationType: 'repeatableListOfSimpleListOfLpc',
				percentages: 'relativeToBackgroundPositioningArea',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'auto auto',
				appliesto: 'allElements',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"block-overflow": {
				syntax: 'clip | ellipsis | <string>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Overflow'],
				initial: 'clip',
				appliesto: 'blockContainers',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"block-size": {
				syntax: '<\'width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'blockSizeOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'auto',
				appliesto: 'sameAsWidthAndHeight',
				computed: 'sameAsWidthAndHeight',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-end": {
				syntax: '<\'border-width\'> || <\'border-style\'> || <\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: ['border-width', 'border-style', 'color'],
				appliesto: 'allElements',
				computed: ['border-width', 'border-style', 'border-block-end-color'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-end-color": {
				syntax: '<\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-end-style": {
				syntax: '<\'border-style\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-end-width": {
				syntax: '<\'border-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthZeroIfBorderStyleNoneOrHidden',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-start": {
				syntax: '<\'border-width\'> || <\'border-style\'> || <\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: ['border-width', 'border-style', 'color'],
				appliesto: 'allElements',
				computed: ['border-width', 'border-style', 'border-block-start-color'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-start-color": {
				syntax: '<\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-start-style": {
				syntax: '<\'border-style\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-block-start-width": {
				syntax: '<\'border-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthZeroIfBorderStyleNoneOrHidden',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-bottom": {
				syntax: '<br-width> || <br-style> || <color>',
				media: 'visual',
				inherited: !1,
				animationType: ['border-bottom-color', 'border-bottom-style', 'border-bottom-width'],
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-bottom-width', 'border-bottom-style', 'border-bottom-color'],
				appliesto: 'allElements',
				computed: ['border-bottom-width', 'border-bottom-style', 'border-bottom-color'],
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-bottom-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-bottom-left-radius": {
				syntax: '<length-percentage>{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['CSS Backgrounds and Borders'],
				initial: '0',
				appliesto: 'allElementsUAsNotRequiredWhenCollapse',
				computed: 'twoAbsoluteLengthOrPercentages',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-bottom-right-radius": {
				syntax: '<length-percentage>{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['CSS Backgrounds and Borders'],
				initial: '0',
				appliesto: 'allElementsUAsNotRequiredWhenCollapse',
				computed: 'twoAbsoluteLengthOrPercentages',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-bottom-style": {
				syntax: '<br-style>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-bottom-width": {
				syntax: '<br-width>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthOr0IfBorderBottomStyleNoneOrHidden',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-collapse": {
				syntax: 'collapse | separate',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Table'],
				initial: 'separate',
				appliesto: 'tableElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-color": {
				syntax: '<color>{1,4}',
				media: 'visual',
				inherited: !1,
				animationType: ['border-bottom-color', 'border-left-color', 'border-right-color', 'border-top-color'],
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'],
				appliesto: 'allElements',
				computed: ['border-bottom-color', 'border-left-color', 'border-right-color', 'border-top-color'],
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-image": {
				syntax: '<\'border-image-source\'> || <\'border-image-slice\'> [ / <\'border-image-width\'> | / <\'border-image-width\'>? / <\'border-image-outset\'> ]? || <\'border-image-repeat\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: ['border-image-slice', 'border-image-width'],
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset', 'border-image-repeat'],
				appliesto: 'allElementsExceptTableElementsWhenCollapse',
				computed: ['border-image-outset', 'border-image-repeat', 'border-image-slice', 'border-image-source', 'border-image-width'],
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-image-outset": {
				syntax: '[ <length> | <number> ]{1,4}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: '0',
				appliesto: 'allElementsExceptTableElementsWhenCollapse',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-image-repeat": {
				syntax: '[ stretch | repeat | round | space ]{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'stretch',
				appliesto: 'allElementsExceptTableElementsWhenCollapse',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-image-slice": {
				syntax: '<number-percentage>{1,4} && fill?',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToSizeOfBorderImage',
				groups: ['CSS Backgrounds and Borders'],
				initial: '100%',
				appliesto: 'allElementsExceptTableElementsWhenCollapse',
				computed: 'oneToFourPercentagesOrAbsoluteLengthsPlusFill',
				order: 'percentagesOrLengthsFollowedByFill',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-image-source": {
				syntax: 'none | <image>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'none',
				appliesto: 'allElementsExceptTableElementsWhenCollapse',
				computed: 'noneOrImageWithAbsoluteURI',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-image-width": {
				syntax: '[ <length-percentage> | <number> | auto ]{1,4}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToWidthOrHeightOfBorderImageArea',
				groups: ['CSS Backgrounds and Borders'],
				initial: '1',
				appliesto: 'allElementsExceptTableElementsWhenCollapse',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-inline-end": {
				syntax: '<\'border-width\'> || <\'border-style\'> || <\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: ['border-width', 'border-style', 'color'],
				appliesto: 'allElements',
				computed: ['border-width', 'border-style', 'border-inline-end-color'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-inline-end-color": {
				syntax: '<\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-inline-end-style": {
				syntax: '<\'border-style\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-inline-end-width": {
				syntax: '<\'border-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthZeroIfBorderStyleNoneOrHidden',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-inline-start": {
				syntax: '<\'border-width\'> || <\'border-style\'> || <\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: ['border-width', 'border-style', 'color'],
				appliesto: 'allElements',
				computed: ['border-width', 'border-style', 'border-inline-start-color'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-inline-start-color": {
				syntax: '<\'color\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-inline-start-style": {
				syntax: '<\'border-style\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Logical Properties'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-inline-start-width": {
				syntax: '<\'border-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthZeroIfBorderStyleNoneOrHidden',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-left": {
				syntax: '<br-width> || <br-style> || <color>',
				media: 'visual',
				inherited: !1,
				animationType: ['border-left-color', 'border-left-style', 'border-left-width'],
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-left-width', 'border-left-style', 'border-left-color'],
				appliesto: 'allElements',
				computed: ['border-left-width', 'border-left-style', 'border-left-color'],
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-left-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-left-style": {
				syntax: '<br-style>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-left-width": {
				syntax: '<br-width>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthOr0IfBorderLeftStyleNoneOrHidden',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-radius": {
				syntax: '<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?',
				media: 'visual',
				inherited: !1,
				animationType: ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'],
				percentages: 'referToDimensionOfBorderBox',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-top-left-radius', 'border-top-right-radius', 'border-bottom-right-radius', 'border-bottom-left-radius'],
				appliesto: 'allElementsUAsNotRequiredWhenCollapse',
				computed: ['border-bottom-left-radius', 'border-bottom-right-radius', 'border-top-left-radius', 'border-top-right-radius'],
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-right": {
				syntax: '<br-width> || <br-style> || <color>',
				media: 'visual',
				inherited: !1,
				animationType: ['border-right-color', 'border-right-style', 'border-right-width'],
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-right-width', 'border-right-style', 'border-right-color'],
				appliesto: 'allElements',
				computed: ['border-right-width', 'border-right-style', 'border-right-color'],
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-right-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-right-style": {
				syntax: '<br-style>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-right-width": {
				syntax: '<br-width>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthOr0IfBorderRightStyleNoneOrHidden',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-spacing": {
				syntax: '<length> <length>?',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Table'],
				initial: '0',
				appliesto: 'tableElements',
				computed: 'twoAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"border-style": {
				syntax: '<br-style>{1,4}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style'],
				appliesto: 'allElements',
				computed: ['border-bottom-style', 'border-left-style', 'border-right-style', 'border-top-style'],
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-top": {
				syntax: '<br-width> || <br-style> || <color>',
				media: 'visual',
				inherited: !1,
				animationType: ['border-top-color', 'border-top-style', 'border-top-width'],
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-top-width', 'border-top-style', 'border-top-color'],
				appliesto: 'allElements',
				computed: ['border-top-width', 'border-top-style', 'border-top-color'],
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-top-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-top-left-radius": {
				syntax: '<length-percentage>{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['CSS Backgrounds and Borders'],
				initial: '0',
				appliesto: 'allElementsUAsNotRequiredWhenCollapse',
				computed: 'twoAbsoluteLengthOrPercentages',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-top-right-radius": {
				syntax: '<length-percentage>{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfBorderBox',
				groups: ['CSS Backgrounds and Borders'],
				initial: '0',
				appliesto: 'allElementsUAsNotRequiredWhenCollapse',
				computed: 'twoAbsoluteLengthOrPercentages',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-top-style": {
				syntax: '<br-style>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-top-width": {
				syntax: '<br-width>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLengthOr0IfBorderTopStyleNoneOrHidden',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"border-width": {
				syntax: '<br-width>{1,4}',
				media: 'visual',
				inherited: !1,
				animationType: ['border-bottom-width', 'border-left-width', 'border-right-width', 'border-top-width'],
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: ['border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
				appliesto: 'allElements',
				computed: ['border-bottom-width', 'border-left-width', 'border-right-width', 'border-top-width'],
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"box-align": {
				syntax: 'start | center | end | baseline | stretch',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: 'stretch',
				appliesto: 'elementsWithDisplayBoxOrInlineBox',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-decoration-break": {
				syntax: 'slice | clone',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fragmentation'],
				initial: 'slice',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"box-direction": {
				syntax: 'normal | reverse | inherit',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: 'normal',
				appliesto: 'elementsWithDisplayBoxOrInlineBox',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-flex": {
				syntax: '<number>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: '0',
				appliesto: 'directChildrenOfElementsWithDisplayMozBoxMozInlineBox',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-flex-group": {
				syntax: '<integer>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: '1',
				appliesto: 'inFlowChildrenOfBoxElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-lines": {
				syntax: 'single | multiple',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: 'single',
				appliesto: 'boxElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-ordinal-group": {
				syntax: '<integer>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: '1',
				appliesto: 'childrenOfBoxElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-orient": {
				syntax: 'horizontal | vertical | inline-axis | block-axis | inherit',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: 'inlineAxisHorizontalInXUL',
				appliesto: 'elementsWithDisplayBoxOrInlineBox',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-pack": {
				syntax: 'start | center | end | justify',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions', 'WebKit Extensions'],
				initial: 'start',
				appliesto: 'elementsWithDisplayMozBoxMozInlineBox',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"box-shadow": {
				syntax: 'none | <shadow>#',
				media: 'visual',
				inherited: !1,
				animationType: 'shadowList',
				percentages: 'no',
				groups: ['CSS Backgrounds and Borders'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'absoluteLengthsSpecifiedColorAsSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"box-sizing": {
				syntax: 'content-box | border-box',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'content-box',
				appliesto: 'allElementsAcceptingWidthOrHeight',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"break-after": {
				syntax: 'auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region',
				media: 'paged',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fragmentation'],
				initial: 'auto',
				appliesto: 'blockLevelElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"break-before": {
				syntax: 'auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region',
				media: 'paged',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fragmentation'],
				initial: 'auto',
				appliesto: 'blockLevelElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"break-inside": {
				syntax: 'auto | avoid | avoid-page | avoid-column | avoid-region',
				media: 'paged',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fragmentation'],
				initial: 'auto',
				appliesto: 'blockLevelElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"caption-side": {
				syntax: 'top | bottom | block-start | block-end | inline-start | inline-end',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Table'],
				initial: 'top',
				appliesto: 'tableCaptionElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"caret-color": {
				syntax: 'auto | <color>',
				media: 'interactive',
				inherited: !0,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asAutoOrColor',
				order: 'perGrammar',
				status: 'standard'
			},
			"clip-path": {
				syntax: '<clip-source> | [ <basic-shape> || <geometry-box> ] | none',
				media: 'visual',
				inherited: !1,
				animationType: 'basicShapeOtherwiseNo',
				percentages: 'referToReferenceBoxWhenSpecifiedOtherwiseBorderBox',
				groups: ['CSS Masking'],
				initial: 'none',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecifiedURLsAbsolute',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"color-adjust": {
				syntax: 'economy | exact',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Color'],
				initial: 'economy',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-count": {
				syntax: '<integer> | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'integer',
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: 'auto',
				appliesto: 'blockContainersExceptTableWrappers',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-fill": {
				syntax: 'auto | balance | balance-all',
				media: 'visualInContinuousMediaNoEffectInOverflowColumns',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: 'balance',
				appliesto: 'multicolElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-gap": {
				syntax: 'normal | <length-percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Box Alignment'],
				initial: 'normal',
				appliesto: 'multiColumnElementsFlexContainersGridContainers',
				computed: 'asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-rule": {
				syntax: '<\'column-rule-width\'> || <\'column-rule-style\'> || <\'column-rule-color\'>',
				media: 'visual',
				inherited: !1,
				animationType: ['column-rule-color', 'column-rule-style', 'column-rule-width'],
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: ['column-rule-width', 'column-rule-style', 'column-rule-color'],
				appliesto: 'multicolElements',
				computed: ['column-rule-color', 'column-rule-style', 'column-rule-width'],
				order: 'perGrammar',
				status: 'standard'
			},
			"column-rule-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: 'currentcolor',
				appliesto: 'multicolElements',
				computed: 'computedColor',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-rule-style": {
				syntax: '<\'border-style\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: 'none',
				appliesto: 'multicolElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-rule-width": {
				syntax: '<\'border-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: 'medium',
				appliesto: 'multicolElements',
				computed: 'absoluteLength0IfColumnRuleStyleNoneOrHidden',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-span": {
				syntax: 'none | all',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: 'none',
				appliesto: 'inFlowBlockLevelElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"column-width": {
				syntax: '<length> | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Columns'],
				initial: 'auto',
				appliesto: 'blockContainersExceptTableWrappers',
				computed: 'absoluteLengthZeroOrLarger',
				order: 'perGrammar',
				status: 'standard'
			},
			"counter-increment": {
				syntax: '[ <custom-ident> <integer>? ]+ | none',
				media: 'all',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Counter Styles'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"counter-reset": {
				syntax: '[ <custom-ident> <integer>? ]+ | none',
				media: 'all',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Counter Styles'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"empty-cells": {
				syntax: 'show | hide',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Table'],
				initial: 'show',
				appliesto: 'tableCellElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"flex-basis": {
				syntax: 'content | <\'width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToFlexContainersInnerMainSize',
				groups: ['CSS Flexible Box Layout'],
				initial: 'auto',
				appliesto: 'flexItemsAndInFlowPseudos',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'lengthOrPercentageBeforeKeywordIfBothPresent',
				status: 'standard'
			},
			"flex-direction": {
				syntax: 'row | row-reverse | column | column-reverse',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: 'row',
				appliesto: 'flexContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"flex-flow": {
				syntax: '<\'flex-direction\'> || <\'flex-wrap\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: ['flex-direction', 'flex-wrap'],
				appliesto: 'flexContainers',
				computed: ['flex-direction', 'flex-wrap'],
				order: 'orderOfAppearance',
				status: 'standard'
			},
			"flex-grow": {
				syntax: '<number>',
				media: 'visual',
				inherited: !1,
				animationType: 'number',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: '0',
				appliesto: 'flexItemsAndInFlowPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"flex-shrink": {
				syntax: '<number>',
				media: 'visual',
				inherited: !1,
				animationType: 'number',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: '1',
				appliesto: 'flexItemsAndInFlowPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"flex-wrap": {
				syntax: 'nowrap | wrap | wrap-reverse',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: 'nowrap',
				appliesto: 'flexContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"font-family": {
				syntax: '[ <family-name> | <generic-family> ]#',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'dependsOnUserAgent',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-feature-settings": {
				syntax: 'normal | <feature-tag-value>#',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-kerning": {
				syntax: 'auto | normal | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-language-override": {
				syntax: 'normal | <string>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-optical-sizing": {
				syntax: 'auto | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variation-settings": {
				syntax: 'normal | [ <string> <number> ]#',
				media: 'visual',
				inherited: !0,
				animationType: 'transform',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'experimental'
			},
			"font-size": {
				syntax: '<absolute-size> | <relative-size> | <length-percentage>',
				media: 'visual',
				inherited: !0,
				animationType: 'length',
				percentages: 'referToParentElementsFontSize',
				groups: ['CSS Fonts'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-size-adjust": {
				syntax: 'none | <number>',
				media: 'visual',
				inherited: !0,
				animationType: 'number',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-stretch": {
				syntax: '<font-stretch-absolute>',
				media: 'visual',
				inherited: !0,
				animationType: 'fontStretch',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-style": {
				syntax: 'normal | italic | oblique <angle>?',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-synthesis": {
				syntax: 'none | [ weight || style ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'weight style',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variant": {
				syntax: 'normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variant-alternates": {
				syntax: 'normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variant-caps": {
				syntax: 'normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variant-east-asian": {
				syntax: 'normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variant-ligatures": {
				syntax: 'normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variant-numeric": {
				syntax: 'normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-variant-position": {
				syntax: 'normal | sub | super',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"font-weight": {
				syntax: '<font-weight-absolute> | bolder | lighter',
				media: 'visual',
				inherited: !0,
				animationType: 'fontWeight',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'keywordOrNumericalValueBolderLighterTransformedToRealValue',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"grid-area": {
				syntax: '<grid-line> [ / <grid-line> ]{0,3}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: ['grid-row-start', 'grid-column-start', 'grid-row-end', 'grid-column-end'],
				appliesto: 'gridItemsAndBoxesWithinGridContainer',
				computed: ['grid-row-start', 'grid-column-start', 'grid-row-end', 'grid-column-end'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-auto-columns": {
				syntax: '<track-size>+',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Grid Layout'],
				initial: 'auto',
				appliesto: 'gridContainers',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-auto-flow": {
				syntax: '[ row | column ] || dense',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: 'row',
				appliesto: 'gridContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-auto-rows": {
				syntax: '<track-size>+',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Grid Layout'],
				initial: 'auto',
				appliesto: 'gridContainers',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-column": {
				syntax: '<grid-line> [ / <grid-line> ]?',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: ['grid-column-start', 'grid-column-end'],
				appliesto: 'gridItemsAndBoxesWithinGridContainer',
				computed: ['grid-column-start', 'grid-column-end'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-column-end": {
				syntax: '<grid-line>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: 'auto',
				appliesto: 'gridItemsAndBoxesWithinGridContainer',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-column-gap": {
				syntax: '<length-percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Grid Layout'],
				initial: '0',
				appliesto: 'gridContainers',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				status: 'obsolete'
			},
			"grid-column-start": {
				syntax: '<grid-line>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: 'auto',
				appliesto: 'gridItemsAndBoxesWithinGridContainer',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-gap": {
				syntax: '<\'grid-row-gap\'> <\'grid-column-gap\'>?',
				media: 'visual',
				inherited: !1,
				animationType: ['grid-row-gap', 'grid-column-gap'],
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: ['grid-row-gap', 'grid-column-gap'],
				appliesto: 'gridContainers',
				computed: ['grid-row-gap', 'grid-column-gap'],
				order: 'uniqueOrder',
				status: 'obsolete'
			},
			"grid-row": {
				syntax: '<grid-line> [ / <grid-line> ]?',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: ['grid-row-start', 'grid-row-end'],
				appliesto: 'gridItemsAndBoxesWithinGridContainer',
				computed: ['grid-row-start', 'grid-row-end'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-row-end": {
				syntax: '<grid-line>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: 'auto',
				appliesto: 'gridItemsAndBoxesWithinGridContainer',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-row-gap": {
				syntax: '<length-percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Grid Layout'],
				initial: '0',
				appliesto: 'gridContainers',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				status: 'obsolete'
			},
			"grid-row-start": {
				syntax: '<grid-line>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: 'auto',
				appliesto: 'gridItemsAndBoxesWithinGridContainer',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-template": {
				syntax: 'none | [ <\'grid-template-rows\'> / <\'grid-template-columns\'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: ['grid-template-columns', 'grid-template-rows'],
				groups: ['CSS Grid Layout'],
				initial: ['grid-template-columns', 'grid-template-rows', 'grid-template-areas'],
				appliesto: 'gridContainers',
				computed: ['grid-template-columns', 'grid-template-rows', 'grid-template-areas'],
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-template-areas": {
				syntax: 'none | <string>+',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Grid Layout'],
				initial: 'none',
				appliesto: 'gridContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-template-columns": {
				syntax: 'none | <track-list> | <auto-track-list>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Grid Layout'],
				initial: 'none',
				appliesto: 'gridContainers',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"grid-template-rows": {
				syntax: 'none | <track-list> | <auto-track-list>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Grid Layout'],
				initial: 'none',
				appliesto: 'gridContainers',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"hanging-punctuation": {
				syntax: 'none | [ first || [ force-end | allow-end ] || last ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"image-orientation": {
				syntax: 'from-image | <angle> | [ <angle>? flip ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Images'],
				initial: '0deg',
				appliesto: 'allElements',
				computed: 'angleRoundedToNextQuarter',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"image-rendering": {
				syntax: 'auto | crisp-edges | pixelated',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Images'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"image-resolution": {
				syntax: '[ from-image || <resolution> ] && snap?',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Images'],
				initial: '1dppx',
				appliesto: 'allElements',
				computed: 'asSpecifiedWithExceptionOfResolution',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"ime-mode": {
				syntax: 'auto | normal | active | inactive | disabled',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'auto',
				appliesto: 'textFields',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'obsolete'
			},
			"initial-letter": {
				syntax: 'normal | [ <number> <integer>? ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Inline'],
				initial: 'normal',
				appliesto: 'firstLetterPseudoElementsAndInlineLevelFirstChildren',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"initial-letter-align": {
				syntax: '[ auto | alphabetic | hanging | ideographic ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Inline'],
				initial: 'auto',
				appliesto: 'firstLetterPseudoElementsAndInlineLevelFirstChildren',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"inline-size": {
				syntax: '<\'width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'inlineSizeOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'auto',
				appliesto: 'sameAsWidthAndHeight',
				computed: 'sameAsWidthAndHeight',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"justify-content": {
				syntax: 'normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: 'normal',
				appliesto: 'flexContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"justify-items": {
				syntax: 'normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Box Alignment'],
				initial: 'legacy',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"justify-self": {
				syntax: 'auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Box Alignment'],
				initial: 'auto',
				appliesto: 'blockLevelBoxesAndAbsolutelyPositionedBoxesAndGridItems',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"letter-spacing": {
				syntax: 'normal | <length>',
				media: 'visual',
				inherited: !0,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'optimumValueOfAbsoluteLengthOrNormal',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line'],
				status: 'standard'
			},
			"line-break": {
				syntax: 'auto | loose | normal | strict',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"line-clamp": {
				syntax: 'none | <integer>',
				media: 'visual',
				inherited: !1,
				animationType: 'integer',
				percentages: 'no',
				groups: ['CSS Overflow'],
				initial: 'none',
				appliesto: 'blockContainersExceptMultiColumnContainers',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"line-height": {
				syntax: 'normal | <number> | <length> | <percentage>',
				media: 'visual',
				inherited: !0,
				animationType: 'numberOrLength',
				percentages: 'referToElementFontSize',
				groups: ['CSS Fonts'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'absoluteLengthOrAsSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"line-height-step": {
				syntax: '<length>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Fonts'],
				initial: '0',
				appliesto: 'blockContainerElements',
				computed: 'absoluteLength',
				order: 'perGrammar',
				status: 'experimental'
			},
			"list-style": {
				syntax: '<\'list-style-type\'> || <\'list-style-position\'> || <\'list-style-image\'>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Lists and Counters'],
				initial: ['list-style-type', 'list-style-position', 'list-style-image'],
				appliesto: 'listItems',
				computed: ['list-style-image', 'list-style-position', 'list-style-type'],
				order: 'orderOfAppearance',
				status: 'standard'
			},
			"list-style-image": {
				syntax: '<url> | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Lists and Counters'],
				initial: 'none',
				appliesto: 'listItems',
				computed: 'noneOrImageWithAbsoluteURI',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"list-style-position": {
				syntax: 'inside | outside',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Lists and Counters'],
				initial: 'outside',
				appliesto: 'listItems',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"list-style-type": {
				syntax: '<counter-style> | <string> | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Lists and Counters'],
				initial: 'disc',
				appliesto: 'listItems',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"margin-block-end": {
				syntax: '<\'margin-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'dependsOnLayoutModel',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsMargin',
				computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"margin-block-start": {
				syntax: '<\'margin-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'dependsOnLayoutModel',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsMargin',
				computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"margin-bottom": {
				syntax: '<length> | <percentage> | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"margin-inline-end": {
				syntax: '<\'margin-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'dependsOnLayoutModel',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsMargin',
				computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"margin-inline-start": {
				syntax: '<\'margin-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'dependsOnLayoutModel',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsMargin',
				computed: 'lengthAbsolutePercentageAsSpecifiedOtherwiseAuto',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"margin-left": {
				syntax: '<length> | <percentage> | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"margin-right": {
				syntax: '<length> | <percentage> | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"margin-top": {
				syntax: '<length> | <percentage> | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"mask-border": {
				syntax: '<\'mask-border-source\'> || <\'mask-border-slice\'> [ / <\'mask-border-width\'>? [ / <\'mask-border-outset\'> ]? ]? || <\'mask-border-repeat\'> || <\'mask-border-mode\'>',
				media: 'visual',
				inherited: !1,
				animationType: ['mask-border-mode', 'mask-border-outset', 'mask-border-repeat', 'mask-border-slice', 'mask-border-source', 'mask-border-width'],
				percentages: ['mask-border-slice', 'mask-border-width'],
				groups: ['CSS Masking'],
				initial: ['mask-border-mode', 'mask-border-outset', 'mask-border-repeat', 'mask-border-slice', 'mask-border-source', 'mask-border-width'],
				appliesto: 'allElementsSVGContainerElements',
				computed: ['mask-border-mode', 'mask-border-outset', 'mask-border-repeat', 'mask-border-slice', 'mask-border-source', 'mask-border-width'],
				order: 'perGrammar',
				stacking: !0,
				status: 'experimental'
			},
			"mask-border-mode": {
				syntax: 'luminance | alpha',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'alpha',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"mask-border-outset": {
				syntax: '[ <length> | <number> ]{1,4}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: '0',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'perGrammar',
				status: 'experimental'
			},
			"mask-border-repeat": {
				syntax: '[ stretch | repeat | round | space ]{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'stretch',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"mask-border-slice": {
				syntax: '<number-percentage>{1,4} fill?',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'referToSizeOfMaskBorderImage',
				groups: ['CSS Masking'],
				initial: '0',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"mask-border-source": {
				syntax: 'none | <image>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'none',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecifiedURLsAbsolute',
				order: 'perGrammar',
				status: 'experimental'
			},
			"mask-border-width": {
				syntax: '[ <length-percentage> | <number> | auto ]{1,4}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'relativeToMaskBorderImageArea',
				groups: ['CSS Masking'],
				initial: 'auto',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'perGrammar',
				status: 'experimental'
			},
			"mask-clip": {
				syntax: '[ <geometry-box> | no-clip ]#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'border-box',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-composite": {
				syntax: '<compositing-operator>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'add',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-image": {
				syntax: '<mask-reference>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'none',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecifiedURLsAbsolute',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-mode": {
				syntax: '<masking-mode>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'match-source',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-origin": {
				syntax: '<geometry-box>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'border-box',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-position": {
				syntax: '<position>#',
				media: 'visual',
				inherited: !1,
				animationType: 'repeatableListOfSimpleListOfLpc',
				percentages: 'referToSizeOfMaskPaintingArea',
				groups: ['CSS Masking'],
				initial: 'center',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'consistsOfTwoKeywordsForOriginAndOffsets',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-repeat": {
				syntax: '<repeat-style>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'no-repeat',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'consistsOfTwoDimensionKeywords',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-size": {
				syntax: '<bg-size>#',
				media: 'visual',
				inherited: !1,
				animationType: 'repeatableListOfSimpleListOfLpc',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'auto',
				appliesto: 'allElementsSVGContainerElements',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'perGrammar',
				status: 'standard'
			},
			"mask-type": {
				syntax: 'luminance | alpha',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Masking'],
				initial: 'luminance',
				appliesto: 'maskElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'standard'
			},
			"max-block-size": {
				syntax: '<\'max-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'blockSizeOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsWidthAndHeight',
				computed: 'sameAsMaxWidthAndMaxHeight',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"max-height": {
				syntax: '<length> | <percentage> | none | max-content | min-content | fit-content | fill-available',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'regardingHeightOfGeneratedBoxContainingBlockPercentagesNone',
				groups: ['CSS Box Model'],
				initial: 'none',
				appliesto: 'allElementsButNonReplacedAndTableColumns',
				computed: 'percentageAsSpecifiedAbsoluteLengthOrNone',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"max-inline-size": {
				syntax: '<\'max-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'inlineSizeOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsWidthAndHeight',
				computed: 'sameAsMaxWidthAndMaxHeight',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"max-lines": {
				syntax: 'none | <integer>',
				media: 'visual',
				inherited: !1,
				animationType: 'integer',
				percentages: 'no',
				groups: ['CSS Overflow'],
				initial: 'none',
				appliesto: 'blockContainersExceptMultiColumnContainers',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"max-width": {
				syntax: '<length> | <percentage> | none | max-content | min-content | fit-content | fill-available',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: 'none',
				appliesto: 'allElementsButNonReplacedAndTableRows',
				computed: 'percentageAsSpecifiedAbsoluteLengthOrNone',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"min-block-size": {
				syntax: '<\'min-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'blockSizeOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsWidthAndHeight',
				computed: 'sameAsMinWidthAndMinHeight',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"min-height": {
				syntax: '<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'regardingHeightOfGeneratedBoxContainingBlockPercentages0',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsButNonReplacedAndTableColumns',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"min-inline-size": {
				syntax: '<\'min-width\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'inlineSizeOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'sameAsWidthAndHeight',
				computed: 'sameAsMinWidthAndMinHeight',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"min-width": {
				syntax: '<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsButNonReplacedAndTableRows',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"mix-blend-mode": {
				syntax: '<blend-mode>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Compositing and Blending'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				stacking: !0,
				status: 'standard'
			},
			"object-fit": {
				syntax: 'fill | contain | cover | none | scale-down',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Images'],
				initial: 'fill',
				appliesto: 'replacedElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"object-position": {
				syntax: '<position>',
				media: 'visual',
				inherited: !0,
				animationType: 'repeatableListOfSimpleListOfLpc',
				percentages: 'referToWidthAndHeightOfElement',
				groups: ['CSS Images'],
				initial: '50% 50%',
				appliesto: 'replacedElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"offset-anchor": {
				syntax: 'auto | <position>',
				media: 'visual',
				inherited: !1,
				animationType: 'position',
				percentages: 'relativeToWidthAndHeight',
				groups: ['CSS Motion'],
				initial: 'auto',
				appliesto: 'transformableElements',
				computed: 'forLengthAbsoluteValueOtherwisePercentage',
				order: 'perGrammar',
				status: 'experimental'
			},
			"offset-block-end": {
				syntax: '<\'left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalHeightOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'auto',
				appliesto: 'positionedElements',
				computed: 'sameAsBoxOffsets',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"offset-block-start": {
				syntax: '<\'left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalHeightOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'auto',
				appliesto: 'positionedElements',
				computed: 'sameAsBoxOffsets',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"offset-inline-end": {
				syntax: '<\'left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'auto',
				appliesto: 'positionedElements',
				computed: 'sameAsBoxOffsets',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"offset-inline-start": {
				syntax: '<\'left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: 'auto',
				appliesto: 'positionedElements',
				computed: 'sameAsBoxOffsets',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"offset-distance": {
				syntax: '<length-percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToTotalPathLength',
				groups: ['CSS Motion'],
				initial: '0',
				appliesto: 'transformableElements',
				computed: 'forLengthAbsoluteValueOtherwisePercentage',
				order: 'perGrammar',
				status: 'experimental'
			},
			"offset-path": {
				syntax: 'none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]',
				media: 'visual',
				inherited: !1,
				animationType: 'angleOrBasicShapeOrPath',
				percentages: 'no',
				groups: ['CSS Motion'],
				initial: 'none',
				appliesto: 'transformableElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				stacking: !0,
				status: 'experimental'
			},
			"offset-position": {
				syntax: 'auto | <position>',
				media: 'visual',
				inherited: !1,
				animationType: 'position',
				percentages: 'referToSizeOfContainingBlock',
				groups: ['CSS Motion'],
				initial: 'auto',
				appliesto: 'transformableElements',
				computed: 'forLengthAbsoluteValueOtherwisePercentage',
				order: 'perGrammar',
				status: 'experimental'
			},
			"offset-rotate": {
				syntax: '[ auto | reverse ] || <angle>',
				media: 'visual',
				inherited: !1,
				animationType: 'angle',
				percentages: 'no',
				groups: ['CSS Motion'],
				initial: 'auto',
				appliesto: 'transformableElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"outline-color": {
				syntax: '<color> | invert',
				media: ['visual', 'interactive'],
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'invertOrCurrentColor',
				appliesto: 'allElements',
				computed: 'invertForTranslucentColorRGBAOtherwiseRGB',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"outline-offset": {
				syntax: '<length>',
				media: ['visual', 'interactive'],
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"outline-style": {
				syntax: 'auto | <br-style>',
				media: ['visual', 'interactive'],
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"outline-width": {
				syntax: '<br-width>',
				media: ['visual', 'interactive'],
				inherited: !1,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'medium',
				appliesto: 'allElements',
				computed: 'absoluteLength0ForNone',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"overflow-anchor": {
				syntax: 'auto | none',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Scroll Anchoring'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"overflow-block": {
				syntax: '<\'overflow\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Overflow'],
				initial: 'auto',
				appliesto: 'blockContainersFlexContainersGridContainers',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"overflow-clip-box": {
				syntax: 'padding-box | content-box',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Mozilla Extensions'],
				initial: 'padding-box',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"overflow-inline": {
				syntax: '<\'overflow\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Overflow'],
				initial: 'auto',
				appliesto: 'blockContainersFlexContainersGridContainers',
				computed: 'asSpecified',
				order: 'perGrammar',
				status: 'experimental'
			},
			"overflow-wrap": {
				syntax: 'normal | break-word',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"overflow-x": {
				syntax: 'visible | hidden | clip | scroll | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Overflow'],
				initial: 'visible',
				appliesto: 'blockContainersFlexContainersGridContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"overflow-y": {
				syntax: 'visible | hidden | clip | scroll | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Overflow'],
				initial: 'visible',
				appliesto: 'blockContainersFlexContainersGridContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"overscroll-behavior": {
				syntax: '[ contain | none | auto ]{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Box Model'],
				initial: 'auto',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"overscroll-behavior-x": {
				syntax: 'contain | none | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Box Model'],
				initial: 'auto',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"overscroll-behavior-y": {
				syntax: 'contain | none | auto',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Box Model'],
				initial: 'auto',
				appliesto: 'nonReplacedBlockAndInlineBlockElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"padding-block-end": {
				syntax: '<\'padding-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"padding-block-start": {
				syntax: '<\'padding-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"padding-bottom": {
				syntax: '<length> | <percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptInternalTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"padding-inline-end": {
				syntax: '<\'padding-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"padding-inline-start": {
				syntax: '<\'padding-left\'>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'logicalWidthOfContainingBlock',
				groups: ['CSS Logical Properties'],
				initial: '0',
				appliesto: 'allElements',
				computed: 'asLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"padding-left": {
				syntax: '<length> | <percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptInternalTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"padding-right": {
				syntax: '<length> | <percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptInternalTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"padding-top": {
				syntax: '<length> | <percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Box Model'],
				initial: '0',
				appliesto: 'allElementsExceptInternalTableDisplayTypes',
				computed: 'percentageAsSpecifiedOrAbsoluteLength',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter'],
				status: 'standard'
			},
			"page-break-after": {
				syntax: 'auto | always | avoid | left | right | recto | verso',
				media: ['visual', 'paged'],
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Pages'],
				initial: 'auto',
				appliesto: 'blockElementsInNormalFlow',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"page-break-before": {
				syntax: 'auto | always | avoid | left | right | recto | verso',
				media: ['visual', 'paged'],
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Pages'],
				initial: 'auto',
				appliesto: 'blockElementsInNormalFlow',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"page-break-inside": {
				syntax: 'auto | avoid',
				media: ['visual', 'paged'],
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Pages'],
				initial: 'auto',
				appliesto: 'blockElementsInNormalFlow',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"paint-order": {
				syntax: 'normal | [ fill || stroke || markers ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'normal',
				appliesto: 'textElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"perspective-origin": {
				syntax: '<position>',
				media: 'visual',
				inherited: !1,
				animationType: 'simpleListOfLpc',
				percentages: 'referToSizeOfBoundingBox',
				groups: ['CSS Transforms'],
				initial: '50% 50%',
				appliesto: 'transformableElements',
				computed: 'forLengthAbsoluteValueOtherwisePercentage',
				order: 'oneOrTwoValuesLengthAbsoluteKeywordsPercentages',
				status: 'standard'
			},
			"place-content": {
				syntax: '<\'align-content\'> <\'justify-content\'>?',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Flexible Box Layout'],
				initial: 'normal',
				appliesto: 'multilineFlexContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"pointer-events": {
				syntax: 'auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Pointer Events'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"row-gap": {
				syntax: 'normal | <length-percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToDimensionOfContentArea',
				groups: ['CSS Box Alignment'],
				initial: 'normal',
				appliesto: 'multiColumnElementsFlexContainersGridContainers',
				computed: 'asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn',
				order: 'perGrammar',
				status: 'standard'
			},
			"ruby-align": {
				syntax: 'start | center | space-between | space-around',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Ruby'],
				initial: 'space-around',
				appliesto: 'rubyBasesAnnotationsBaseAnnotationContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"ruby-merge": {
				syntax: 'separate | collapse | auto',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Ruby'],
				initial: 'separate',
				appliesto: 'rubyAnnotationsContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"ruby-position": {
				syntax: 'over | under | inter-character',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Ruby'],
				initial: 'over',
				appliesto: 'rubyAnnotationsContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"scroll-behavior": {
				syntax: 'auto | smooth',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSSOM View'],
				initial: 'auto',
				appliesto: 'scrollingBoxes',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"scroll-snap-coordinate": {
				syntax: 'none | <position>#',
				media: 'interactive',
				inherited: !1,
				animationType: 'position',
				percentages: 'referToBorderBox',
				groups: ['CSS Scroll Snap'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"scroll-snap-destination": {
				syntax: '<position>',
				media: 'interactive',
				inherited: !1,
				animationType: 'position',
				percentages: 'relativeToScrollContainerPaddingBoxAxis',
				groups: ['CSS Scroll Snap'],
				initial: '0px 0px',
				appliesto: 'scrollContainers',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"scroll-snap-points-x": {
				syntax: 'none | repeat( <length-percentage> )',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'relativeToScrollContainerPaddingBoxAxis',
				groups: ['CSS Scroll Snap'],
				initial: 'none',
				appliesto: 'scrollContainers',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'obsolete'
			},
			"scroll-snap-points-y": {
				syntax: 'none | repeat( <length-percentage> )',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'relativeToScrollContainerPaddingBoxAxis',
				groups: ['CSS Scroll Snap'],
				initial: 'none',
				appliesto: 'scrollContainers',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'obsolete'
			},
			"scroll-snap-type": {
				syntax: 'none | mandatory | proximity',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Scroll Snap'],
				initial: 'none',
				appliesto: 'scrollContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"scroll-snap-type-x": {
				syntax: 'none | mandatory | proximity',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Scroll Snap'],
				initial: 'none',
				appliesto: 'scrollContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"scroll-snap-type-y": {
				syntax: 'none | mandatory | proximity',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Scroll Snap'],
				initial: 'none',
				appliesto: 'scrollContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"shape-image-threshold": {
				syntax: '<number>',
				media: 'visual',
				inherited: !1,
				animationType: 'number',
				percentages: 'no',
				groups: ['CSS Shapes'],
				initial: '0.0',
				appliesto: 'floats',
				computed: 'specifiedValueNumberClipped0To1',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"shape-margin": {
				syntax: '<length-percentage>',
				media: 'visual',
				inherited: !1,
				animationType: 'lpc',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Shapes'],
				initial: '0',
				appliesto: 'floats',
				computed: 'asSpecifiedRelativeToAbsoluteLengths',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"shape-outside": {
				syntax: 'none | <shape-box> || <basic-shape> | <image>',
				media: 'visual',
				inherited: !1,
				animationType: 'basicShapeOtherwiseNo',
				percentages: 'no',
				groups: ['CSS Shapes'],
				initial: 'none',
				appliesto: 'floats',
				computed: 'asDefinedForBasicShapeWithAbsoluteURIOtherwiseAsSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"tab-size": {
				syntax: '<integer> | <length>',
				media: 'visual',
				inherited: !0,
				animationType: 'length',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: '8',
				appliesto: 'blockContainers',
				computed: 'specifiedIntegerOrAbsoluteLength',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"table-layout": {
				syntax: 'auto | fixed',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Table'],
				initial: 'auto',
				appliesto: 'tableElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-align": {
				syntax: 'start | end | left | right | center | justify | match-parent',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'startOrNamelessValueIfLTRRightIfRTL',
				appliesto: 'blockContainers',
				computed: 'asSpecifiedExceptMatchParent',
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::placeholder'],
				status: 'standard'
			},
			"text-align-last": {
				syntax: 'auto | start | end | left | right | center | justify',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'auto',
				appliesto: 'blockContainers',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-combine-upright": {
				syntax: 'none | all | [ digits <integer>? ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Writing Modes'],
				initial: 'none',
				appliesto: 'nonReplacedInlineElements',
				computed: 'keywordPlusIntegerIfDigits',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-decoration": {
				syntax: '<\'text-decoration-line\'> || <\'text-decoration-style\'> || <\'text-decoration-color\'>',
				media: 'visual',
				inherited: !1,
				animationType: ['text-decoration-color', 'text-decoration-style', 'text-decoration-line'],
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: ['text-decoration-color', 'text-decoration-style', 'text-decoration-line'],
				appliesto: 'allElements',
				computed: ['text-decoration-line', 'text-decoration-style', 'text-decoration-color'],
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"text-decoration-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"text-decoration-line": {
				syntax: 'none | [ underline || overline || line-through || blink ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"text-decoration-skip": {
				syntax: 'none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'objects',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'experimental'
			},
			"text-decoration-skip-ink": {
				syntax: 'auto | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'experimental'
			},
			"text-decoration-style": {
				syntax: 'solid | double | dotted | dashed | wavy',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'solid',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"text-emphasis": {
				syntax: '<\'text-emphasis-style\'> || <\'text-emphasis-color\'>',
				media: 'visual',
				inherited: !1,
				animationType: ['text-emphasis-color', 'text-emphasis-style'],
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: ['text-emphasis-style', 'text-emphasis-color'],
				appliesto: 'allElements',
				computed: ['text-emphasis-style', 'text-emphasis-color'],
				order: 'orderOfAppearance',
				status: 'standard'
			},
			"text-emphasis-color": {
				syntax: '<color>',
				media: 'visual',
				inherited: !1,
				animationType: 'color',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'currentcolor',
				appliesto: 'allElements',
				computed: 'computedColor',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-emphasis-position": {
				syntax: '[ over | under ] && [ right | left ]',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'over right',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-emphasis-style": {
				syntax: 'none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-indent": {
				syntax: '<length-percentage> && hanging? && each-line?',
				media: 'visual',
				inherited: !0,
				animationType: 'lpc',
				percentages: 'referToWidthOfContainingBlock',
				groups: ['CSS Text'],
				initial: '0',
				appliesto: 'blockContainers',
				computed: 'percentageOrAbsoluteLengthPlusKeywords',
				order: 'lengthOrPercentageBeforeKeywords',
				status: 'standard'
			},
			"text-justify": {
				syntax: 'auto | inter-character | inter-word | none',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'auto',
				appliesto: 'inlineLevelAndTableCellElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-orientation": {
				syntax: 'mixed | upright | sideways',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Writing Modes'],
				initial: 'mixed',
				appliesto: 'allElementsExceptTableRowGroupsRowsColumnGroupsAndColumns',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-overflow": {
				syntax: '[ clip | ellipsis | <string> ]{1,2}',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'clip',
				appliesto: 'blockContainerElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::placeholder'],
				status: 'standard'
			},
			"text-rendering": {
				syntax: 'auto | optimizeSpeed | optimizeLegibility | geometricPrecision',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Miscellaneous'],
				initial: 'auto',
				appliesto: 'textElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"text-shadow": {
				syntax: 'none | <shadow-t>#',
				media: 'visual',
				inherited: !0,
				animationType: 'shadowList',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'colorPlusThreeAbsoluteLengths',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"text-size-adjust": {
				syntax: 'none | auto | <percentage>',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'referToSizeOfFont',
				groups: ['CSS Text'],
				initial: 'autoForSmartphoneBrowsersSupportingInflation',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'experimental'
			},
			"text-transform": {
				syntax: 'none | capitalize | uppercase | lowercase | full-width',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'none',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"text-underline-position": {
				syntax: 'auto | [ under || [ left | right ] ]',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text Decoration'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'orderOfAppearance',
				status: 'standard'
			},
			"touch-action": {
				syntax: 'auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['Pointer Events'],
				initial: 'auto',
				appliesto: 'allElementsExceptNonReplacedInlineElementsTableRowsColumnsRowColumnGroups',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"transform-box": {
				syntax: 'border-box | fill-box | view-box',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Transforms'],
				initial: 'border-box ',
				appliesto: 'transformableElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"transform-origin": {
				syntax: '[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?',
				media: 'visual',
				inherited: !1,
				animationType: 'simpleListOfLpc',
				percentages: 'referToSizeOfBoundingBox',
				groups: ['CSS Transforms'],
				initial: '50% 50% 0',
				appliesto: 'transformableElements',
				computed: 'forLengthAbsoluteValueOtherwisePercentage',
				order: 'oneOrTwoValuesLengthAbsoluteKeywordsPercentages',
				status: 'standard'
			},
			"transform-style": {
				syntax: 'flat | preserve-3d',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Transforms'],
				initial: 'flat',
				appliesto: 'transformableElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				stacking: !0,
				status: 'standard'
			},
			"transition-delay": {
				syntax: '<time>#',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Transitions'],
				initial: '0s',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"transition-duration": {
				syntax: '<time>#',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Transitions'],
				initial: '0s',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"transition-property": {
				syntax: 'none | <single-transition-property>#',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Transitions'],
				initial: 'all',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"transition-timing-function": {
				syntax: '<single-transition-timing-function>#',
				media: 'interactive',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Transitions'],
				initial: 'ease',
				appliesto: 'allElementsAndPseudos',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"unicode-bidi": {
				syntax: 'normal | embed | isolate | bidi-override | isolate-override | plaintext',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Writing Modes'],
				initial: 'normal',
				appliesto: 'allElementsSomeValuesNoEffectOnNonInlineElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"user-select": {
				syntax: 'auto | text | none | contain | all',
				media: 'visual',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Basic User Interface'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'nonstandard'
			},
			"vertical-align": {
				syntax: 'baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>',
				media: 'visual',
				inherited: !1,
				animationType: 'length',
				percentages: 'referToLineHeight',
				groups: ['CSS Table'],
				initial: 'baseline',
				appliesto: 'inlineLevelAndTableCellElements',
				computed: 'absoluteLengthOrKeyword',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"white-space": {
				syntax: 'normal | pre | nowrap | pre-wrap | pre-line',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"will-change": {
				syntax: 'auto | <animateable-feature>#',
				media: 'all',
				inherited: !1,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Will Change'],
				initial: 'auto',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"word-break": {
				syntax: 'normal | break-all | keep-all | break-word',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"word-spacing": {
				syntax: 'normal | <length-percentage>',
				media: 'visual',
				inherited: !0,
				animationType: 'length',
				percentages: 'referToWidthOfAffectedGlyph',
				groups: ['CSS Text'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'optimumMinAndMaxValueOfAbsoluteLengthPercentageOrNormal',
				order: 'uniqueOrder',
				alsoAppliesTo: ['::first-letter', '::first-line', '::placeholder'],
				status: 'standard'
			},
			"word-wrap": {
				syntax: 'normal | break-word',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Text'],
				initial: 'normal',
				appliesto: 'allElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"writing-mode": {
				syntax: 'horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr',
				media: 'visual',
				inherited: !0,
				animationType: 'discrete',
				percentages: 'no',
				groups: ['CSS Writing Modes'],
				initial: 'horizontal-tb',
				appliesto: 'allElementsExceptTableRowColumnGroupsTableRowsColumns',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				status: 'standard'
			},
			"z-index": {
				syntax: 'auto | <integer>',
				media: 'visual',
				inherited: !1,
				animationType: 'integer',
				percentages: 'no',
				groups: ['CSS Positioning'],
				initial: 'auto',
				appliesto: 'positionedElements',
				computed: 'asSpecified',
				order: 'uniqueOrder',
				stacking: !0,
				status: 'standard'
			}
		},
		Mie = Object.freeze({
			all: Uoe,
			animation: Voe,
			appearance: Woe,
			azimuth: Foe,
			background: joe,
			border: Hoe,
			bottom: Yoe,
			clear: $oe,
			clip: Koe,
			color: Xoe,
			columns: Qoe,
			contain: Zoe,
			content: Joe,
			cursor: eie,
			direction: tie,
			display: nie,
			filter: rie,
			flex: aie,
			float: oie,
			font: iie,
			gap: sie,
			grid: lie,
			height: cie,
			hyphens: pie,
			isolation: uie,
			left: mie,
			margin: gie,
			mask: hie,
			offset: fie,
			opacity: yie,
			order: bie,
			orphans: xie,
			outline: kie,
			overflow: Sie,
			padding: wie,
			perspective: vie,
			position: Tie,
			quotes: Cie,
			resize: Eie,
			right: Aie,
			rotate: Oie,
			scale: Pie,
			top: Lie,
			transform: qie,
			transition: Rie,
			translate: Die,
			visibility: Nie,
			widows: Bie,
			width: Iie,
			zoom: zie,
			default: _ie
		}),
		Gie = {
			syntax: 'scroll | fixed | local'
		},
		Uie = {
			syntax: 'border-box | padding-box | content-box'
		},
		Vie = {
			syntax: '<rgb()> | <rgba()> | <hsl()> | <hsla()> | <hex-color> | <named-color> | currentcolor | <deprecated-system-color>'
		},
		Wie = {
			syntax: '<linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()>'
		},
		Fie = {
			syntax: '<number> | <angle>'
		},
		jie = {
			syntax: '<url> | <image()> | <image-set()> | <element()> | <cross-fade()> | <gradient>'
		},
		Hie = {
			syntax: '<an-plus-b> | even | odd'
		},
		Yie = {
			syntax: '[ [ left | center | right ] || [ top | center | bottom ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]? | [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ] ]'
		},
		$ie = {
			syntax: 'open-quote | close-quote | no-open-quote | no-close-quote'
		},
		Kie = {
			syntax: 'inset? && <length>{2,4} && <color>?'
		},
		Xie = {
			syntax: 'rect(<top>, <right>, <bottom>, <left>)'
		},
		Qie = {
			syntax: 'closest-side | farthest-side | closest-corner | farthest-corner | <length> | <length-percentage>{2}'
		},
		Zie = {
			syntax: '<string> | <image> | <custom-ident>'
		},
		Jie = {
			syntax: '<target-counter()> | <target-counters()> | <target-text()>'
		},
		ese = {
			attachment: Gie,
			box: Uie,
			color: Vie,
			gradient: Wie,
			hue: Fie,
			image: jie,
			nth: Hie,
			position: Yie,
			quote: $ie,
			shadow: Kie,
			shape: Xie,
			size: Qie,
			symbol: Zie,
			target: Jie,
			"absolute-size": {
				syntax: 'xx-small | x-small | small | medium | large | x-large | xx-large'
			},
			"alpha-value": {
				syntax: '<number> | <percentage>'
			},
			"angle-percentage": {
				syntax: '<angle> | <percentage>'
			},
			"animateable-feature": {
				syntax: 'scroll-position | contents | <custom-ident>'
			},
			"attr()": {
				syntax: 'attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )'
			},
			"attr-matcher": {
				syntax: '[ \'~\' | \'|\' | \'^\' | \'$\' | \'*\' ]? \'=\''
			},
			"attr-modifier": {
				syntax: 'i'
			},
			"attribute-selector": {
				syntax: '\'[\' <wq-name> \']\' | \'[\' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? \']\''
			},
			"auto-repeat": {
				syntax: 'repeat( [ auto-fill | auto-fit ] , [ <line-names>? <fixed-size> ]+ <line-names>? )'
			},
			"auto-track-list": {
				syntax: '[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>? <auto-repeat>\n[ <line-names>? [ <fixed-size> | <fixed-repeat> ] ]* <line-names>?'
			},
			"baseline-position": {
				syntax: '[ first | last ]? baseline'
			},
			"basic-shape": {
				syntax: '<inset()> | <circle()> | <ellipse()> | <polygon()>'
			},
			"bg-image": {
				syntax: 'none | <image>'
			},
			"bg-layer": {
				syntax: '<bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>'
			},
			"bg-position": {
				syntax: '[ [ left | center | right | top | bottom | <length-percentage> ] | [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ] | [ center | [ left | right ] <length-percentage>? ] && [ center | [ top | bottom ] <length-percentage>? ] ]'
			},
			"bg-size": {
				syntax: '[ <length-percentage> | auto ]{1,2} | cover | contain'
			},
			"blur()": {
				syntax: 'blur( <length> )'
			},
			"blend-mode": {
				syntax: 'normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity'
			},
			"br-style": {
				syntax: 'none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset'
			},
			"br-width": {
				syntax: '<length> | thin | medium | thick'
			},
			"brightness()": {
				syntax: 'brightness( <number-percentage> )'
			},
			"calc()": {
				syntax: 'calc( <calc-sum> )'
			},
			"calc-sum": {
				syntax: '<calc-product> [ [ \'+\' | \'-\' ] <calc-product> ]*'
			},
			"calc-product": {
				syntax: '<calc-value> [ \'*\' <calc-value> | \'/\' <number> ]*'
			},
			"calc-value": {
				syntax: '<number> | <dimension> | <percentage> | ( <calc-sum> )'
			},
			"cf-final-image": {
				syntax: '<image> | <color>'
			},
			"cf-mixing-image": {
				syntax: '<percentage>? && <image>'
			},
			"circle()": {
				syntax: 'circle( [ <shape-radius> ]? [ at <position> ]? )'
			},
			"class-selector": {
				syntax: '\'.\' <ident-token>'
			},
			"clip-source": {
				syntax: '<url>'
			},
			"color-stop": {
				syntax: '<color> <length-percentage>?'
			},
			"color-stop-list": {
				syntax: '<color-stop>#{2,}'
			},
			"common-lig-values": {
				syntax: '[ common-ligatures | no-common-ligatures ]'
			},
			"composite-style": {
				syntax: 'clear | copy | source-over | source-in | source-out | source-atop | destination-over | destination-in | destination-out | destination-atop | xor'
			},
			"compositing-operator": {
				syntax: 'add | subtract | intersect | exclude'
			},
			"compound-selector": {
				syntax: '[ <type-selector>? <subclass-selector>* [ <pseudo-element-selector> <pseudo-class-selector>* ]* ]!'
			},
			"compound-selector-list": {
				syntax: '<compound-selector>#'
			},
			"contextual-alt-values": {
				syntax: '[ contextual | no-contextual ]'
			},
			"content-distribution": {
				syntax: 'space-between | space-around | space-evenly | stretch'
			},
			"content-list": {
				syntax: '[ <string> | contents | <image> | <quote> | <target> | <leader()> ]+'
			},
			"content-position": {
				syntax: 'center | start | end | flex-start | flex-end'
			},
			"content-replacement": {
				syntax: '<image>'
			},
			"contrast()": {
				syntax: 'contrast( [ <number-percentage> ] )'
			},
			"counter-style": {
				syntax: '<counter-style-name> | symbols()'
			},
			"counter-style-name": {
				syntax: '<custom-ident>'
			},
			"cross-fade()": {
				syntax: 'cross-fade( <cf-mixing-image> , <cf-final-image>? )'
			},
			"cubic-bezier-timing-function": {
				syntax: 'ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)'
			},
			"deprecated-system-color": {
				syntax: 'ActiveBorder | ActiveCaption | AppWorkspace | Background | ButtonFace | ButtonHighlight | ButtonShadow | ButtonText | CaptionText | GrayText | Highlight | HighlightText | InactiveBorder | InactiveCaption | InactiveCaptionText | InfoBackground | InfoText | Menu | MenuText | Scrollbar | ThreeDDarkShadow | ThreeDFace | ThreeDHighlight | ThreeDLightShadow | ThreeDShadow | Window | WindowFrame | WindowText'
			},
			"discretionary-lig-values": {
				syntax: '[ discretionary-ligatures | no-discretionary-ligatures ]'
			},
			"display-box": {
				syntax: 'contents | none'
			},
			"display-inside": {
				syntax: 'flow | flow-root | table | flex | grid | subgrid | ruby'
			},
			"display-internal": {
				syntax: 'table-row-group | table-header-group | table-footer-group | table-row | table-cell | table-column-group | table-column | table-caption | ruby-base | ruby-text | ruby-base-container | ruby-text-container'
			},
			"display-legacy": {
				syntax: 'inline-block | inline-list-item | inline-table | inline-flex | inline-grid'
			},
			"display-listitem": {
				syntax: '<display-outside>? && [ flow | flow-root ]? && list-item'
			},
			"display-outside": {
				syntax: 'block | inline | run-in'
			},
			"drop-shadow()": {
				syntax: 'drop-shadow( <length>{2,3} <color>? )'
			},
			"east-asian-variant-values": {
				syntax: '[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ]'
			},
			"east-asian-width-values": {
				syntax: '[ full-width | proportional-width ]'
			},
			"element()": {
				syntax: 'element( <id-selector> )'
			},
			"ellipse()": {
				syntax: 'ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )'
			},
			"ending-shape": {
				syntax: 'circle | ellipse'
			},
			"explicit-track-list": {
				syntax: '[ <line-names>? <track-size> ]+ <line-names>?'
			},
			"family-name": {
				syntax: '<string> | <custom-ident>+'
			},
			"feature-tag-value": {
				syntax: '<string> [ <integer> | on | off ]?'
			},
			"feature-type": {
				syntax: '@stylistic | @historical-forms | @styleset | @character-variant | @swash | @ornaments | @annotation'
			},
			"feature-value-block": {
				syntax: '<feature-type> {\n  <feature-value-declaration-list>\n}'
			},
			"feature-value-block-list": {
				syntax: '<feature-value-block>+'
			},
			"feature-value-declaration": {
				syntax: '<custom-ident>: <integer>+;'
			},
			"feature-value-declaration-list": {
				syntax: '<feature-value-declaration>'
			},
			"feature-value-name": {
				syntax: '<custom-ident>'
			},
			"fill-rule": {
				syntax: 'nonzero | evenodd'
			},
			"filter-function": {
				syntax: '<blur()> | <brightness()> | <contrast()> | <drop-shadow()> | <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <saturate()> | <sepia()>'
			},
			"filter-function-list": {
				syntax: '[ <filter-function> | <url> ]+'
			},
			"final-bg-layer": {
				syntax: '<\'background-color\'> || <bg-image> || <bg-position> [ / <bg-size> ]? || <repeat-style> || <attachment> || <box> || <box>'
			},
			"fit-content()": {
				syntax: 'fit-content( [ <length> | <percentage> ] )'
			},
			"fixed-breadth": {
				syntax: '<length-percentage>'
			},
			"fixed-repeat": {
				syntax: 'repeat( [ <positive-integer> ] , [ <line-names>? <fixed-size> ]+ <line-names>? )'
			},
			"fixed-size": {
				syntax: '<fixed-breadth> | minmax( <fixed-breadth> , <track-breadth> ) | minmax( <inflexible-breadth> , <fixed-breadth> )'
			},
			"font-stretch-absolute": {
				syntax: 'normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | <percentage>'
			},
			"font-variant-css21": {
				syntax: '[ normal | small-caps ]'
			},
			"font-weight-absolute": {
				syntax: 'normal | bold | <number>'
			},
			"frames-timing-function": {
				syntax: 'frames(<integer>)'
			},
			"frequency-percentage": {
				syntax: '<frequency> | <percentage>'
			},
			"general-enclosed": {
				syntax: '[ <function-token> <any-value> ) ] | ( <ident> <any-value> )'
			},
			"generic-family": {
				syntax: 'serif | sans-serif | cursive | fantasy | monospace'
			},
			"generic-name": {
				syntax: 'serif | sans-serif | cursive | fantasy | monospace'
			},
			"geometry-box": {
				syntax: '<shape-box> | fill-box | stroke-box | view-box'
			},
			"grayscale()": {
				syntax: 'grayscale( <number-percentage> )'
			},
			"grid-line": {
				syntax: 'auto | <custom-ident> | [ <integer> && <custom-ident>? ] | [ span && [ <integer> || <custom-ident> ] ]'
			},
			"historical-lig-values": {
				syntax: '[ historical-ligatures | no-historical-ligatures ]'
			},
			"hsl()": {
				syntax: 'hsl( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsl( <hue>, <percentage>, <percentage>, <alpha-value>? )'
			},
			"hsla()": {
				syntax: 'hsla( <hue> <percentage> <percentage> [ / <alpha-value> ]? ) | hsla( <hue>, <percentage>, <percentage>, <alpha-value>? )'
			},
			"hue-rotate()": {
				syntax: 'hue-rotate( <angle> )'
			},
			"id-selector": {
				syntax: '<hash-token>'
			},
			"image()": {
				syntax: 'image( [ [ <image> | <string> ]? , <color>? ]! )'
			},
			"image-set()": {
				syntax: 'image-set( <image-set-option># )'
			},
			"image-set-option": {
				syntax: '[ <image> | <string> ] <resolution>'
			},
			"inflexible-breadth": {
				syntax: '<length> | <percentage> | min-content | max-content | auto'
			},
			"inset()": {
				syntax: 'inset( <length-percentage>{1,4} [ round <border-radius> ]? )'
			},
			"invert()": {
				syntax: 'invert( <number-percentage> )'
			},
			"keyframes-name": {
				syntax: '<custom-ident> | <string>'
			},
			"keyframe-block": {
				syntax: '<keyframe-selector># {\n  <declaration-list>\n}'
			},
			"keyframe-block-list": {
				syntax: '<keyframe-block>+'
			},
			"keyframe-selector": {
				syntax: 'from | to | <percentage>'
			},
			"leader()": {
				syntax: 'leader( <leader-type> )'
			},
			"leader-type": {
				syntax: 'dotted | solid | space | <string>'
			},
			"length-percentage": {
				syntax: '<length> | <percentage>'
			},
			"line-names": {
				syntax: '\'[\' <custom-ident>* \']\''
			},
			"line-name-list": {
				syntax: '[ <line-names> | <name-repeat> ]+'
			},
			"linear-gradient()": {
				syntax: 'linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )'
			},
			"mask-layer": {
				syntax: '<mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || <geometry-box> || [ <geometry-box> | no-clip ] || <compositing-operator> || <masking-mode>'
			},
			"mask-position": {
				syntax: '[ <length-percentage> | left | center | right ] [ <length-percentage> | top | center | bottom ]?'
			},
			"mask-reference": {
				syntax: 'none | <image> | <mask-source>'
			},
			"mask-source": {
				syntax: '<url>'
			},
			"masking-mode": {
				syntax: 'alpha | luminance | match-source'
			},
			"matrix()": {
				syntax: 'matrix( <number> [, <number> ]{5,5} )'
			},
			"matrix3d()": {
				syntax: 'matrix3d( <number> [, <number> ]{15,15} )'
			},
			"media-and": {
				syntax: '<media-in-parens> [ and <media-in-parens> ]+'
			},
			"media-condition": {
				syntax: '<media-not> | <media-and> | <media-or> | <media-in-parens>'
			},
			"media-condition-without-or": {
				syntax: '<media-not> | <media-and> | <media-in-parens>'
			},
			"media-feature": {
				syntax: '( [ <mf-plain> | <mf-boolean> | <mf-range> ] )'
			},
			"media-in-parens": {
				syntax: '( <media-condition> ) | <media-feature> | <general-enclosed>'
			},
			"media-not": {
				syntax: 'not <media-in-parens>'
			},
			"media-or": {
				syntax: '<media-in-parens> [ or <media-in-parens> ]+'
			},
			"media-query": {
				syntax: '<media-condition> | [ not | only ]? <media-type> [ and <media-condition-without-or> ]?'
			},
			"media-query-list": {
				syntax: '<media-query>#'
			},
			"media-type": {
				syntax: '<ident>'
			},
			"mf-boolean": {
				syntax: '<mf-name>'
			},
			"mf-name": {
				syntax: '<ident>'
			},
			"mf-plain": {
				syntax: '<mf-name> : <mf-value>'
			},
			"mf-range": {
				syntax: '<mf-name> [ \'<\' | \'>\' ]? \'=\'? <mf-value>\n| <mf-value> [ \'<\' | \'>\' ]? \'=\'? <mf-name>\n| <mf-value> \'<\' \'=\'? <mf-name> \'<\' \'=\'? <mf-value>\n| <mf-value> \'>\' \'=\'? <mf-name> \'>\' \'=\'? <mf-value>'
			},
			"mf-value": {
				syntax: '<number> | <dimension> | <ident> | <ratio>'
			},
			"minmax()": {
				syntax: 'minmax( [ <length> | <percentage> | <flex> | min-content | max-content | auto ] , [ <length> | <percentage> | <flex> | min-content | max-content | auto ] )'
			},
			"named-color": {
				syntax: 'transparent | aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen'
			},
			"namespace-prefix": {
				syntax: '<ident>'
			},
			"ns-prefix": {
				syntax: '[ <ident-token> | \'*\' ]? \'|\''
			},
			"number-percentage": {
				syntax: '<number> | <percentage>'
			},
			"numeric-figure-values": {
				syntax: '[ lining-nums | oldstyle-nums ]'
			},
			"numeric-fraction-values": {
				syntax: '[ diagonal-fractions | stacked-fractions ]'
			},
			"numeric-spacing-values": {
				syntax: '[ proportional-nums | tabular-nums ]'
			},
			"opacity()": {
				syntax: 'opacity( [ <number-percentage> ] )'
			},
			"overflow-position": {
				syntax: 'unsafe | safe'
			},
			"outline-radius": {
				syntax: '<length> | <percentage>'
			},
			"page-body": {
				syntax: '<declaration>? [ ; <page-body> ]? | <page-margin-box> <page-body>'
			},
			"page-margin-box": {
				syntax: '<page-margin-box-type> {\n  <declaration-list>\n}'
			},
			"page-margin-box-type": {
				syntax: '@top-left-corner | @top-left | @top-center | @top-right | @top-right-corner | @bottom-left-corner | @bottom-left | @bottom-center | @bottom-right | @bottom-right-corner | @left-top | @left-middle | @left-bottom | @right-top | @right-middle | @right-bottom'
			},
			"page-selector-list": {
				syntax: '[ <page-selector># ]?'
			},
			"page-selector": {
				syntax: '<pseudo-page>+ | <ident> <pseudo-page>*'
			},
			"perspective()": {
				syntax: 'perspective( <length> )'
			},
			"polygon()": {
				syntax: 'polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )'
			},
			"pseudo-class-selector": {
				syntax: '\':\' <ident-token> | \':\' <function-token> <any-value> \')\''
			},
			"pseudo-element-selector": {
				syntax: '\':\' <pseudo-class-selector>'
			},
			"pseudo-page": {
				syntax: ': [ left | right | first | blank ]'
			},
			"radial-gradient()": {
				syntax: 'radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )'
			},
			"relative-size": {
				syntax: 'larger | smaller'
			},
			"repeat-style": {
				syntax: 'repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}'
			},
			"repeating-linear-gradient()": {
				syntax: 'repeating-linear-gradient( [ <angle> | to <side-or-corner> ]? , <color-stop-list> )'
			},
			"repeating-radial-gradient()": {
				syntax: 'repeating-radial-gradient( [ <ending-shape> || <size> ]? [ at <position> ]? , <color-stop-list> )'
			},
			"rgb()": {
				syntax: 'rgb( <percentage>{3} [ / <alpha-value> ]? ) | rgb( <number>{3} [ / <alpha-value> ]? ) | rgb( <percentage>#{3} , <alpha-value>? ) | rgb( <number>#{3} , <alpha-value>? )'
			},
			"rgba()": {
				syntax: 'rgba( <percentage>{3} [ / <alpha-value> ]? ) | rgba( <number>{3} [ / <alpha-value> ]? ) | rgba( <percentage>#{3} , <alpha-value>? ) | rgba( <number>#{3} , <alpha-value>? )'
			},
			"rotate()": {
				syntax: 'rotate( <angle> )'
			},
			"rotate3d()": {
				syntax: 'rotate3d( <number> , <number> , <number> , <angle> )'
			},
			"rotateX()": {
				syntax: 'rotateX( <angle> )'
			},
			"rotateY()": {
				syntax: 'rotateY( <angle> )'
			},
			"rotateZ()": {
				syntax: 'rotateZ( <angle> )'
			},
			"saturate()": {
				syntax: 'saturate( <number-percentage> )'
			},
			"scale()": {
				syntax: 'scale( <number> [, <number> ]? )'
			},
			"scale3d()": {
				syntax: 'scale3d( <number> , <number> , <number> )'
			},
			"scaleX()": {
				syntax: 'scaleX( <number> )'
			},
			"scaleY()": {
				syntax: 'scaleY( <number> )'
			},
			"scaleZ()": {
				syntax: 'scaleZ( <number> )'
			},
			"self-position": {
				syntax: 'center | start | end | self-start | self-end | flex-start | flex-end'
			},
			"shape-radius": {
				syntax: '<length-percentage> | closest-side | farthest-side'
			},
			"skew()": {
				syntax: 'skew( <angle> [, <angle> ]? )'
			},
			"skewX()": {
				syntax: 'skewX( <angle> )'
			},
			"skewY()": {
				syntax: 'skewY( <angle> )'
			},
			"sepia()": {
				syntax: 'sepia( <number-percentage> )'
			},
			"shadow-t": {
				syntax: '[ <length>{2,3} && <color>? ]'
			},
			"shape-box": {
				syntax: '<box> | margin-box'
			},
			"side-or-corner": {
				syntax: '[ left | right ] || [ top | bottom ]'
			},
			"single-animation": {
				syntax: '<time> || <single-timing-function> || <time> || <single-animation-iteration-count> || <single-animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> || [ none | <keyframes-name> ]'
			},
			"single-animation-direction": {
				syntax: 'normal | reverse | alternate | alternate-reverse'
			},
			"single-animation-fill-mode": {
				syntax: 'none | forwards | backwards | both'
			},
			"single-animation-iteration-count": {
				syntax: 'infinite | <number>'
			},
			"single-animation-play-state": {
				syntax: 'running | paused'
			},
			"single-timing-function": {
				syntax: 'linear | <cubic-bezier-timing-function> | <step-timing-function> | <frames-timing-function>'
			},
			"single-transition": {
				syntax: '[ none | <single-transition-property> ] || <time> || <single-transition-timing-function> || <time>'
			},
			"single-transition-timing-function": {
				syntax: '<single-timing-function>'
			},
			"single-transition-property": {
				syntax: 'all | <custom-ident>'
			},
			"step-timing-function": {
				syntax: 'step-start | step-end | steps(<integer>[, [ start | end ] ]?)'
			},
			"subclass-selector": {
				syntax: '<id-selector> | <class-selector> | <attribute-selector> | <pseudo-class-selector>'
			},
			"target-counter()": {
				syntax: 'target-counter( [ <string> | <url> ] , <custom-ident> , <counter-style>? )'
			},
			"target-counters()": {
				syntax: 'target-counters( [ <string> | <url> ] , <custom-ident> , <string> , <counter-style>? )'
			},
			"target-text()": {
				syntax: 'target-text( [ <string> | <url> ] , [ content | before | after | first-letter ]? )'
			},
			"time-percentage": {
				syntax: '<time> | <percentage>'
			},
			"track-breadth": {
				syntax: '<length-percentage> | <flex> | min-content | max-content | auto'
			},
			"track-list": {
				syntax: '[ <line-names>? [ <track-size> | <track-repeat> ] ]+ <line-names>?'
			},
			"track-repeat": {
				syntax: 'repeat( [ <positive-integer> ] , [ <line-names>? <track-size> ]+ <line-names>? )'
			},
			"track-size": {
				syntax: '<track-breadth> | minmax( <inflexible-breadth> , <track-breadth> ) | fit-content( [ <length> | <percentage> ] )'
			},
			"transform-function": {
				syntax: '<matrix()> | <translate()> | <translateX()> | <translateY()> | <scale()> | <scaleX()> | <scaleY()> | <rotate()> | <skew()> | <skewX()> | <skewY()> | <matrix3d()> | <translate3d()> | <translateZ()> | <scale3d()> | <scaleZ()> | <rotate3d()> | <rotateX()> | <rotateY()> | <rotateZ()> | <perspective()>'
			},
			"transform-list": {
				syntax: '<transform-function>+'
			},
			"translate()": {
				syntax: 'translate( <length-percentage> [, <length-percentage> ]? )'
			},
			"translate3d()": {
				syntax: 'translate3d( <length-percentage> , <length-percentage> , <length> )'
			},
			"translateX()": {
				syntax: 'translateX( <length-percentage> )'
			},
			"translateY()": {
				syntax: 'translateY( <length-percentage> )'
			},
			"translateZ()": {
				syntax: 'translateZ( <length> )'
			},
			"type-or-unit": {
				syntax: 'string | integer | color | url | integer | number | length | angle | time | frequency | em | ex | px | rem | vw | vh | vmin | vmax | mm | q | cm | in | pt | pc | deg | grad | rad | ms | s | Hz | kHz | %'
			},
			"type-selector": {
				syntax: '<wq-name> | <ns-prefix>? \'*\''
			},
			"var()": {
				syntax: 'var( <custom-property-name> [, <declaration-value> ]? )'
			},
			"viewport-length": {
				syntax: 'auto | <length-percentage>'
			},
			"wq-name": {
				syntax: '<ns-prefix>? <ident-token>'
			}
		},
		tse = Object.freeze({
			attachment: Gie,
			box: Uie,
			color: Vie,
			gradient: Wie,
			hue: Fie,
			image: jie,
			nth: Hie,
			position: Yie,
			quote: $ie,
			shadow: Kie,
			shape: Xie,
			size: Qie,
			symbol: Zie,
			target: Jie,
			default: ese
		}),
		nse = {
			"--*": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"-moz-background-clip": {
				comment: 'deprecated syntax in old Firefox, https://developer.mozilla.org/en/docs/Web/CSS/background-clip',
				syntax: 'padding | border'
			},
			"-moz-border-radius-bottomleft": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius',
				syntax: '<\'border-bottom-left-radius\'>'
			},
			"-moz-border-radius-bottomright": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius',
				syntax: '<\'border-bottom-right-radius\'>'
			},
			"-moz-border-radius-topleft": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius',
				syntax: '<\'border-top-left-radius\'>'
			},
			"-moz-border-radius-topright": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius',
				syntax: '<\'border-bottom-right-radius\'>'
			},
			"-moz-osx-font-smoothing": {
				comment: 'misssed old syntax https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth',
				syntax: 'auto | unset | grayscale'
			},
			"-moz-user-select": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
				syntax: 'none | text | all | -moz-none'
			},
			"-ms-filter": {
				comment: 'added missed syntax https://blogs.msdn.microsoft.com/ie/2009/02/19/the-css-corner-using-filters-in-ie8/',
				syntax: '<string>'
			},
			"-ms-flex-align": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align',
				syntax: 'start | end | center | baseline | stretch'
			},
			"-ms-flex-item-align": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align',
				syntax: 'auto | start | end | center | baseline | stretch'
			},
			"-ms-flex-line-pack": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-line-pack',
				syntax: 'start | end | center | justify | distribute | stretch'
			},
			"-ms-flex-negative": {
				comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
				syntax: '<\'flex-shrink\'>'
			},
			"-ms-flex-pack": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-pack',
				syntax: 'start | end | center | justify | distribute'
			},
			"-ms-flex-order": {
				comment: 'misssed old syntax implemented in IE; https://msdn.microsoft.com/en-us/library/jj127303(v=vs.85).aspx',
				syntax: '<integer>'
			},
			"-ms-flex-positive": {
				comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
				syntax: '<\'flex-grow\'>'
			},
			"-ms-flex-preferred-size": {
				comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
				syntax: '<\'flex-basis\'>'
			},
			"-ms-interpolation-mode": {
				comment: 'https://msdn.microsoft.com/en-us/library/ff521095(v=vs.85).aspx',
				syntax: 'nearest-neighbor | bicubic'
			},
			"-ms-grid-column-align": {
				comment: 'add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466338.aspx',
				syntax: 'start | end | center | stretch'
			},
			"-ms-grid-row-align": {
				comment: 'add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466348.aspx',
				syntax: 'start | end | center | stretch'
			},
			"-ms-high-contrast-adjust": {
				comment: 'https://msdn.microsoft.com/en-us/library/hh771863(v=vs.85).aspx',
				syntax: 'auto | none'
			},
			"-ms-user-select": {
				comment: 'https://msdn.microsoft.com/en-us/library/hh781492(v=vs.85).aspx',
				syntax: 'none | element | text'
			},
			"-webkit-appearance": {
				comment: 'webkit specific keywords',
				references: ['http://css-infos.net/property/-webkit-appearance'],
				syntax: 'none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox | listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield'
			},
			"-webkit-background-clip": {
				comment: 'https://developer.mozilla.org/en/docs/Web/CSS/background-clip',
				syntax: '[ <box> | border | padding | content | text ]#'
			},
			"-webkit-column-break-after": {
				comment: 'added, http://help.dottoro.com/lcrthhhv.php',
				syntax: 'always | auto | avoid'
			},
			"-webkit-column-break-before": {
				comment: 'added, http://help.dottoro.com/lcxquvkf.php',
				syntax: 'always | auto | avoid'
			},
			"-webkit-column-break-inside": {
				comment: 'added, http://help.dottoro.com/lclhnthl.php',
				syntax: 'always | auto | avoid'
			},
			"-webkit-font-smoothing": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth',
				syntax: 'none | antialiased | subpixel-antialiased'
			},
			"-webkit-line-clamp": {
				comment: 'non-standard and deprecated but may still using by some sites',
				syntax: '<positive-integer>'
			},
			"-webkit-mask-box-image": {
				comment: 'missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image',
				syntax: '[ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?'
			},
			"-webkit-mask-clip": {
				comment: 'change type to <-webkit-mask-clip-style> since it differ from <mask-clip>, extra space between [ and ,',
				syntax: '<-webkit-mask-clip-style> [, <-webkit-mask-clip-style> ]*'
			},
			"-webkit-overflow-scrolling": {
				comment: 'missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling',
				syntax: 'auto | touch'
			},
			"-webkit-print-color-adjust": {
				comment: 'missed',
				references: ['https://developer.mozilla.org/en/docs/Web/CSS/-webkit-print-color-adjust'],
				syntax: 'economy | exact'
			},
			"-webkit-text-security": {
				comment: 'missed; http://help.dottoro.com/lcbkewgt.php',
				syntax: 'none | circle | disc | square'
			},
			"-webkit-user-drag": {
				comment: 'missed; http://help.dottoro.com/lcbixvwm.php',
				syntax: 'none | element | auto'
			},
			"-webkit-user-select": {
				comment: 'auto is supported by old webkit, https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
				syntax: 'auto | none | text | all'
			},
			"alignment-baseline": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#AlignmentBaselineProperty'],
				syntax: 'auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical'
			},
			"baseline-shift": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#BaselineShiftProperty'],
				syntax: 'baseline | sub | super | <svg-length>'
			},
			behavior: {
				comment: 'added old IE property https://msdn.microsoft.com/en-us/library/ms530723(v=vs.85).aspx',
				syntax: '<url>+'
			},
			"clip-rule": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/masking.html#ClipRuleProperty'],
				syntax: 'nonzero | evenodd'
			},
			cue: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<\'cue-before\'> <\'cue-after\'>?'
			},
			"cue-after": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<url> <decibel>? | none'
			},
			"cue-before": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<url> <decibel>? | none'
			},
			cursor: {
				comment: 'added legacy keywords: hand, -webkit-grab. -webkit-grabbing, -webkit-zoom-in, -webkit-zoom-out, -moz-grab, -moz-grabbing, -moz-zoom-in, -moz-zoom-out',
				refenrences: ['https://www.sitepoint.com/css3-cursor-styles/'],
				syntax: '[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]'
			},
			display: {
				comment: 'extended with -ms-flexbox',
				syntax: 'none | inline | block | list-item | inline-list-item | inline-block | inline-table | table | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group | flex | inline-flex | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | -ms-flexbox | -ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box'
			},
			position: {
				comment: 'extended with -webkit-sticky',
				syntax: 'static | relative | absolute | sticky | fixed | -webkit-sticky'
			},
			"dominant-baseline": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#DominantBaselineProperty'],
				syntax: 'auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge'
			},
			"image-rendering": {
				comment: 'extended with <-non-standart-image-rendering>, added SVG keywords optimizeSpeed and optimizeQuality',
				references: ['https://developer.mozilla.org/en/docs/Web/CSS/image-rendering', 'https://www.w3.org/TR/SVG/painting.html#ImageRenderingProperty'],
				syntax: 'auto | crisp-edges | pixelated | optimizeSpeed | optimizeQuality | <-non-standart-image-rendering>'
			},
			fill: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
				syntax: '<paint>'
			},
			"fill-opacity": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
				syntax: '<number-zero-one>'
			},
			"fill-rule": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
				syntax: 'nonzero | evenodd'
			},
			filter: {
				comment: 'extend with IE legacy syntaxes',
				syntax: 'none | <filter-function-list> | <-ms-filter>'
			},
			font: {
				comment: 'extend with non-standart fonts',
				syntax: '[ [ <\'font-style\'> || <font-variant-css21> || <\'font-weight\'> || <\'font-stretch\'> ]? <\'font-size\'> [ / <\'line-height\'> ]? <\'font-family\'> ] | caption | icon | menu | message-box | small-caption | status-bar | <-non-standart-font>'
			},
			"glyph-orientation-horizontal": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#GlyphOrientationHorizontalProperty'],
				syntax: '<angle>'
			},
			"glyph-orientation-vertical": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#GlyphOrientationVerticalProperty'],
				syntax: '<angle>'
			},
			kerning: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#KerningProperty'],
				syntax: 'auto | <svg-length>'
			},
			"letter-spacing": {
				comment: 'fix syntax <length> -> <length-percentage>',
				references: ['https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing'],
				syntax: 'normal | <length-percentage>'
			},
			marker: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"marker-end": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"marker-mid": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"marker-start": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"max-width": {
				comment: 'extend by non-standart width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/max-width',
				syntax: '<length> | <percentage> | none | max-content | min-content | fit-content | fill-available | <-non-standart-width>'
			},
			"min-width": {
				comment: 'extend by non-standart width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width',
				syntax: '<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available | <-non-standart-width>'
			},
			opacity: {
				comment: 'strict to 0..1 <number> -> <number-zero-one>',
				syntax: '<number-zero-one>'
			},
			pause: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<\'pause-before\'> <\'pause-after\'>?'
			},
			"pause-after": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			"pause-before": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			rest: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<\'rest-before\'> <\'rest-after\'>?'
			},
			"rest-after": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			"rest-before": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			"shape-rendering": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#ShapeRenderingPropert'],
				syntax: 'auto | optimizeSpeed | crispEdges | geometricPrecision'
			},
			src: {
				comment: 'added @font-face\'s src property https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src',
				syntax: '[ <url> format( <string># )? | local( <family-name> ) ]#'
			},
			speak: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'auto | none | normal'
			},
			"speak-as": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'normal | spell-out || digits || [ literal-punctuation | no-punctuation ]'
			},
			stroke: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<paint>'
			},
			"stroke-dasharray": {
				comment: 'added SVG property; a list of comma and/or white space separated <length>s and <percentage>s',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: 'none | [ <svg-length>+ ]#'
			},
			"stroke-dashoffset": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<svg-length>'
			},
			"stroke-linecap": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: 'butt | round | square'
			},
			"stroke-linejoin": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: 'miter | round | bevel'
			},
			"stroke-miterlimit": {
				comment: 'added SVG property (<miterlimit> = <number-one-or-greater>) ',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<number-one-or-greater>'
			},
			"stroke-opacity": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<number-zero-one>'
			},
			"stroke-width": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<svg-length>'
			},
			"text-anchor": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#TextAlignmentProperties'],
				syntax: 'start | middle | end'
			},
			"transform-origin": {
				comment: 'move first group to the end since less collecting',
				syntax: '[ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>? | [ <length-percentage> | left | center | right | top | bottom ]'
			},
			"unicode-bidi": {
				comment: 'added prefixed keywords https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi',
				syntax: 'normal | embed | isolate | bidi-override | isolate-override | plaintext | -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate'
			},
			"unicode-range": {
				comment: 'added missed property https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face/unicode-range',
				syntax: '<unicode-range>#'
			},
			"voice-balance": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<number> | left | center | right | leftwards | rightwards'
			},
			"voice-duration": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'auto | <time>'
			},
			"voice-family": {
				comment: '<name> -> <family-name>, https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '[ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve'
			},
			"voice-pitch": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]'
			},
			"voice-range": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]'
			},
			"voice-rate": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '[ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>'
			},
			"voice-stress": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'normal | strong | moderate | none | reduced'
			},
			"voice-volume": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'silent | [ [ x-soft | soft | medium | loud | x-loud ] || <decibel> ]'
			},
			"word-break": {
				comment: 'extend with non-standart keywords',
				syntax: 'normal | break-all | keep-all | <-non-standart-word-break>'
			},
			"writing-mode": {
				comment: 'extend with SVG keywords',
				syntax: 'horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr | <svg-writing-mode>'
			},
			zoom: {
				comment: 'missed, not in DB, https://developer.mozilla.org/en-US/docs/Web/CSS/zoom',
				syntax: 'normal | reset | <number> | <percentage>'
			}
		},
		rse = {
			"-legacy-gradient()": {
				comment: 'added collection of legacy gradient syntaxes',
				syntax: '<-webkit-gradient()> | <-legacy-linear-gradient()> | <-legacy-repeating-linear-gradient()> | <-legacy-radial-gradient()> | <-legacy-repeating-radial-gradient()>'
			},
			"-legacy-linear-gradient()": {
				comment: 'like standart syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
				syntax: '-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -ms-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )'
			},
			"-legacy-repeating-linear-gradient()": {
				comment: 'like standart syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
				syntax: '-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -ms-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )'
			},
			"-legacy-linear-gradient-arguments": {
				comment: 'like standart syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
				syntax: '[ <angle> | <side-or-corner> ]? , <color-stop-list>'
			},
			"-legacy-radial-gradient()": {
				comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
				syntax: '-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -ms-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )'
			},
			"-legacy-repeating-radial-gradient()": {
				comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
				syntax: '-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -ms-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )'
			},
			"-legacy-radial-gradient-arguments": {
				comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
				syntax: '[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>'
			},
			"-legacy-radial-gradient-size": {
				comment: 'before standart it contains 2 extra keywords (`contain` and `cover`) https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltsize',
				syntax: 'closest-side | closest-corner | farthest-side | farthest-corner | contain | cover'
			},
			"-legacy-radial-gradient-shape": {
				comment: 'define to duoble sure it doesn\'t extends in future https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltshape',
				syntax: 'circle | ellipse'
			},
			"-non-standart-font": {
				comment: 'non standart fonts',
				preferences: ['https://webkit.org/blog/3709/using-the-system-font-in-web-content/'],
				syntax: '-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body'
			},
			"-non-standart-color": {
				comment: 'non standart colors',
				references: ['http://cssdot.ru/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA_CSS/color-i305.html', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Mozilla_Color_Preference_Extensions'],
				syntax: '-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text'
			},
			"-non-standart-image-rendering": {
				comment: 'non-standart keywords http://phrogz.net/tmp/canvas_image_zoom.html',
				syntax: 'optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast'
			},
			"-non-standart-width": {
				comment: 'non-standart keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width',
				syntax: 'min-intrinsic | intrinsic | -moz-min-content | -moz-max-content | -webkit-min-content | -webkit-max-content'
			},
			"-non-standart-word-break": {
				comment: 'non-standart keywords https://css-tricks.com/almanac/properties/w/word-break/',
				syntax: 'break-word'
			},
			"-webkit-image-set()": {
				comment: 'added alias',
				syntax: '<image-set()>'
			},
			"-webkit-gradient()": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/ - TODO: simplify when after match algorithm improvement ( [, point, radius | , point] -> [, radius]? , point )',
				syntax: '-webkit-gradient( <-webkit-gradient-type>, <-webkit-gradient-point> [, <-webkit-gradient-point> | , <-webkit-gradient-radius>, <-webkit-gradient-point> ] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop()>]* )'
			},
			"-webkit-gradient-color-stop()": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: 'from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )'
			},
			"-webkit-gradient-point": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: ' [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]'
			},
			"-webkit-gradient-radius": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: '<length> | <percentage>'
			},
			"-webkit-gradient-type": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: 'linear | radial'
			},
			"-webkit-mask-box-repeat": {
				comment: 'missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image',
				syntax: 'repeat | stretch | round'
			},
			"-webkit-mask-clip-style": {
				comment: 'missed; there is no enough information about `-webkit-mask-clip` property, but looks like all those keywords are working',
				syntax: 'border | border-box | padding | padding-box | content | content-box | text'
			},
			"-ms-filter": {
				syntax: '[ <progid> | FlipH | FlipV ]+'
			},
			age: {
				comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
				syntax: 'child | young | old'
			},
			"attr()": {
				comment: 'drop it since it\'s a generic',
				syntax: null
			},
			"border-radius": {
				comment: 'missed, https://drafts.csswg.org/css-backgrounds-3/#the-border-radius',
				syntax: '<length-percentage>{1,2}'
			},
			bottom: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			"content-list": {
				comment: 'missed -> https://drafts.csswg.org/css-content/#typedef-content-list (document-url, <target> and leader() is omitted util stabilization)',
				syntax: '[ <string> | contents | <url> | <quote> | <attr()> | counter( <ident>, <\'list-style-type\'>? ) ]+'
			},
			"inset()": {
				comment: 'changed <border-radius> to <\'border-radius\'>',
				syntax: 'inset( <length-percentage>{1,4} [ round <\'border-radius\'> ]? )'
			},
			"generic-voice": {
				comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
				syntax: '[ <age>? <gender> <integer>? ]'
			},
			gender: {
				comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
				syntax: 'male | female | neutral'
			},
			"generic-family": {
				comment: 'added -apple-system',
				references: ['https://webkit.org/blog/3709/using-the-system-font-in-web-content/'],
				syntax: 'serif | sans-serif | cursive | fantasy | monospace | -apple-system'
			},
			gradient: {
				comment: 'added -webkit-gradient() since may to be used for legacy support',
				syntax: '<-legacy-gradient()> | <linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()>'
			},
			left: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			"mask-image": {
				comment: 'missed; https://drafts.fxtf.org/css-masking-1/#the-mask-image',
				syntax: '<mask-reference>#'
			},
			"matrix()": {
				comment: 'redundant max',
				syntax: 'matrix( <number> [, <number> ]{5} )'
			},
			"matrix3d()": {
				comment: 'redundant max',
				syntax: 'matrix3d( <number> [, <number> ]{15} )'
			},
			"name-repeat": {
				comment: 'missed, and looks like obsolete, keep it as is since other property syntaxes should be changed too; https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#typedef-name-repeat',
				syntax: 'repeat( [ <positive-integer> | auto-fill ], <line-names>+)'
			},
			"named-color": {
				comment: 'replaced <ident> to list of colors according to https://www.w3.org/TR/css-color-4/#named-colors',
				syntax: 'transparent | aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen | <-non-standart-color>'
			},
			"outline-radius": {
				comment: 'missed, looks like it\'s a similar to <border-radius> https://developer.mozilla.org/en/docs/Web/CSS/-moz-outline-radius',
				syntax: '<border-radius>'
			},
			paint: {
				comment: 'simplified SVG syntax (omit <icccolor>, replace <funciri> for <url>) https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint',
				syntax: 'none | currentColor | <color> | <url> [ none | currentColor | <color> ]?'
			},
			"path()": {
				comment: 'missed, `motion` property was renamed, but left it as is for now; path() syntax was get from last draft https://drafts.fxtf.org/motion-1/#funcdef-offset-path-path',
				syntax: 'path( <string> )'
			},
			position: {
				comment: 'rewrite syntax (TODO: make match work with original syntax)',
				syntax: '[ center && [ left | right | top | bottom ] <length-percentage>? ] | [ [ left | right ] <length-percentage>? ] && [ [ top | bottom ] <length-percentage>? ] | [ [ left | center | right | <length-percentage> ] || [ top | center | bottom | <length-percentage> ] ]'
			},
			right: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			shape: {
				comment: 'missed spaces in function body and add backwards compatible syntax',
				syntax: 'rect( [ [ <top>, <right>, <bottom>, <left> ] | [ <top> <right> <bottom> <left> ] ] )'
			},
			"single-transition": {
				comment: 'moved <single-transition-timing-function> in the beginning to avoid wrong match to <single-transition-property>',
				syntax: '<single-transition-timing-function> || [ none | <single-transition-property> ] || <time> || <time>'
			},
			"svg-length": {
				comment: 'All coordinates and lengths in SVG can be specified with or without a unit identifier',
				references: ['https://www.w3.org/TR/SVG11/coords.html#Units'],
				syntax: '<percentage> | <length> | <number>'
			},
			"svg-writing-mode": {
				comment: 'SVG specific keywords (deprecated for CSS)',
				references: ['https://developer.mozilla.org/en/docs/Web/CSS/writing-mode', 'https://www.w3.org/TR/SVG/text.html#WritingModeProperty'],
				syntax: 'lr-tb | rl-tb | tb-rl | lr | rl | tb'
			},
			top: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			x: {
				comment: 'missed; not sure we should add it, but no others except `cursor` is using it so it\'s ok for now; https://drafts.csswg.org/css-ui-3/#cursor',
				syntax: '<number>'
			},
			y: {
				comment: 'missed; not sure we should add it, but no others except `cursor` is using so it\'s ok for now; https://drafts.csswg.org/css-ui-3/#cursor',
				syntax: '<number>'
			},
			"var()": {
				comment: 'drop it since it\'s a generic (also syntax is incorrect and can\'t be parsed)',
				syntax: null
			},
			"an-plus-b": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-type": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-block": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-declaration": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-block-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-declaration-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"general-enclosed": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"keyframe-block": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"keyframe-block-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"mf-plain": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"mf-range": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"mf-value": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-and": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-condition": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-not": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-or": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-in-parens": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-feature": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-condition-without-or": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-query": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-query-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			nth: {
				comment: 'syntax has <an-plus-b> that doesn\'t support currently, drop for now',
				syntax: null
			},
			"page-selector": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-selector-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-body": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-margin-box": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-margin-box-type": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"pseudo-page": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			}
		},
		ase = {
			properties: nse,
			syntaxes: rse
		},
		ose = Object.freeze({
			properties: nse,
			syntaxes: rse,
			default: ase
		}),
		ise = Mie && _ie || Mie,
		sse = tse && ese || tse,
		lse = ose && ase || ose,
		dse = {
			properties: {},
			types: {}
		};
	for (var cse in Xa(ise, lse.properties), Xa(sse, lse.syntaxes), ise) dse.properties[cse] = Ka(ise[cse].syntax);
	for (var cse in sse) dse.types[cse] = Ka(sse[cse].syntax);
	var pse = dse,
		use = $re.cmpChar,
		mse = $re.isNumber,
		gse = $re.TYPE,
		hse = gse.Identifier,
		fse = gse.Number,
		yse = gse.PlusSign,
		bse = gse.HyphenMinus,
		xse = {
			name: 'AnPlusB',
			structure: {
				a: [String, null],
				b: [String, null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = e,
					n = '',
					r = null,
					o = null;
				if ((this.scanner.tokenType === fse || this.scanner.tokenType === yse) && (Qa(this.scanner, !1), n = this.scanner.getTokenValue(), this.scanner.next(), t = this.scanner.tokenStart), this.scanner.tokenType === hse) {
					var i = this.scanner.tokenStart;
					use(this.scanner.source, i, bse) && ('' === n ? (n = '-', i++) : this.scanner.error('Unexpected hyphen minus')), use(this.scanner.source, i, 110) || this.scanner.error(), r = '' === n ? '1' : '+' === n ? '+1' : '-' === n ? '-1' : n;
					var s = this.scanner.tokenEnd - i;
					1 < s ? (this.scanner.source.charCodeAt(i + 1) !== bse && this.scanner.error('Unexpected input', i + 1), 2 < s ? this.scanner.tokenStart = i + 2 : (this.scanner.next(), this.scanner.skipSC()), Qa(this.scanner, !0), o = '-' + this.scanner.getTokenValue(), this.scanner.next(), t = this.scanner.tokenStart) : (n = '', this.scanner.next(), t = this.scanner.tokenStart, this.scanner.skipSC(), (this.scanner.tokenType === bse || this.scanner.tokenType === yse) && (n = this.scanner.getTokenValue(), this.scanner.next(), this.scanner.skipSC()), this.scanner.tokenType === fse ? (Qa(this.scanner, '' !== n), !mse(this.scanner.source.charCodeAt(this.scanner.tokenStart)) && (n = this.scanner.source.charAt(this.scanner.tokenStart), this.scanner.tokenStart++), '' === n ? this.scanner.error() : '+' === n && (n = ''), o = n + this.scanner.getTokenValue(), this.scanner.next(), t = this.scanner.tokenStart) : n && this.scanner.eat(fse))
				} else('' === n || '+' === n) && this.scanner.error('Number or identifier is expected', this.scanner.tokenStart + (this.scanner.tokenType === yse || this.scanner.tokenType === bse)), o = n;
				return {
					type: 'AnPlusB',
					loc: this.getLocation(e, t),
					a: r,
					b: o
				}
			},
			generate: function(e, t) {
				var n = null !== t.a && void 0 !== t.a,
					r = null !== t.b && void 0 !== t.b;
				n ? (e('+1' === t.a ? '+n' : '1' === t.a ? 'n' : '-1' === t.a ? '-n' : t.a + 'n'), r && (r = t.b + '', '-' === r.charAt(0) || '+' === r.charAt(0) ? (e(r.charAt(0)), e(r.substr(1))) : (e('+'), e(r)))) : e(t.b + '')
			}
		},
		kse = $re.TYPE,
		Sse = kse.Atrule,
		wse = kse.Semicolon,
		vse = kse.LeftCurlyBracket,
		Tse = kse.RightCurlyBracket,
		Cse = {
			name: 'Atrule',
			structure: {
				name: String,
				prelude: ['AtrulePrelude', 'Raw', null],
				block: ['Block', null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n = null,
					r, a;
				if (this.scanner.eat(Sse), r = this.scanner.substrToCursor(e + 1), a = r.toLowerCase(), this.scanner.skipSC(), !1 === this.scanner.eof && this.scanner.tokenType !== vse && this.scanner.tokenType !== wse) {
					if (this.parseAtrulePrelude) {
						var o = this.scanner.currentToken;
						t = this.tolerantParse(this.AtrulePrelude.bind(this, r), Za), this.tolerant && !this.scanner.eof && 'Raw' !== t.type && this.scanner.tokenType !== vse && this.scanner.tokenType !== wse && (t = Za.call(this, o)), 'AtrulePrelude' === t.type && null === t.children.head && (t = null)
					} else t = Za.call(this, this.scanner.currentToken);
					this.scanner.skipSC()
				}
				if (this.atrule.hasOwnProperty(a)) 'function' == typeof this.atrule[a].block ? (this.scanner.tokenType !== vse && this.scanner.error('Curly bracket is expected'), n = this.atrule[a].block.call(this)) : (!this.tolerant || !this.scanner.eof) && this.scanner.eat(wse);
				else switch (this.scanner.tokenType) {
					case wse:
						this.scanner.next();
						break;
					case vse:
						n = this.Block(Ja.call(this));
						break;
					default:
						this.tolerant || this.scanner.error('Semicolon or block is expected');
				}
				return {
					type: 'Atrule',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: r,
					prelude: t,
					block: n
				}
			},
			generate: function(e, t) {
				e('@'), e(t.name), null !== t.prelude && (e(' '), this.generate(e, t.prelude)), t.block ? this.generate(e, t.block) : e(';')
			},
			walkContext: 'atrule'
		},
		Ese = $re.TYPE,
		Ase = Ese.Identifier,
		Ose = Ese.String,
		Pse = Ese.DollarSign,
		Lse = Ese.Asterisk,
		qse = Ese.Colon,
		Rse = Ese.EqualsSign,
		Dse = Ese.LeftSquareBracket,
		Nse = Ese.RightSquareBracket,
		Bse = Ese.CircumflexAccent,
		Ise = Ese.VerticalLine,
		zse = Ese.Tilde,
		_se = {
			name: 'AttributeSelector',
			structure: {
				name: 'Identifier',
				matcher: [String, null],
				value: ['String', 'Identifier', null],
				flags: [String, null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n = null,
					r = null,
					a;
				return this.scanner.eat(Dse), this.scanner.skipSC(), a = eo.call(this), this.scanner.skipSC(), this.scanner.tokenType !== Nse && (this.scanner.tokenType !== Ase && (t = to.call(this), this.scanner.skipSC(), n = this.scanner.tokenType === Ose ? this.String() : this.Identifier(), this.scanner.skipSC()), this.scanner.tokenType === Ase && (r = this.scanner.getTokenValue(), this.scanner.next(), this.scanner.skipSC())), this.scanner.eat(Nse), {
					type: 'AttributeSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: a,
					matcher: t,
					value: n,
					flags: r
				}
			},
			generate: function(e, t) {
				var n = ' ';
				e('['), this.generate(e, t.name), null !== t.matcher && (e(t.matcher), null !== t.value && (this.generate(e, t.value), 'String' === t.value.type && (n = ''))), null !== t.flags && (e(n), e(t.flags)), e(']')
			}
		},
		Mse = $re.TYPE,
		Gse = Mse.WhiteSpace,
		Use = Mse.Comment,
		Vse = Mse.Semicolon,
		Wse = Mse.Atrule,
		Fse = Mse.LeftCurlyBracket,
		jse = Mse.RightCurlyBracket,
		Hse = $re.TYPE,
		Yse = Hse.LeftSquareBracket,
		$se = Hse.RightSquareBracket,
		Kse = $re.TYPE.CDC,
		Xse = $re.TYPE.CDO,
		Qse = $re.TYPE,
		Zse = Qse.Identifier,
		Jse = Qse.FullStop,
		ele = {
			name: 'ClassSelector',
			structure: {
				name: String
			},
			parse: function() {
				return this.scanner.eat(Jse), {
					type: 'ClassSelector',
					loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
					name: this.scanner.consume(Zse)
				}
			},
			generate: function(e, t) {
				e('.'), e(t.name)
			}
		},
		tle = $re.TYPE,
		rle = tle.PlusSign,
		ale = tle.Solidus,
		ole = tle.GreaterThanSign,
		ile = tle.Tilde,
		sle = {
			name: 'Combinator',
			structure: {
				name: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				switch (this.scanner.tokenType) {
					case ole:
					case rle:
					case ile:
						this.scanner.next();
						break;
					case ale:
						this.scanner.next(), this.scanner.expectIdentifier('deep'), this.scanner.eat(ale);
						break;
					default:
						this.scanner.error('Combinator is expected');
				}
				return {
					type: 'Combinator',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e, t) {
				e(t.name)
			}
		},
		lle = $re.TYPE,
		dle = lle.Asterisk,
		cle = lle.Solidus,
		ple = {
			name: 'Comment',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = this.scanner.tokenEnd;
				return 2 <= t - e + 2 && this.scanner.source.charCodeAt(t - 2) === dle && this.scanner.source.charCodeAt(t - 1) === cle && (t -= 2), this.scanner.next(), {
					type: 'Comment',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.source.substring(e + 2, t)
				}
			},
			generate: function(e, t) {
				e('/*'), e(t.value), e('*/')
			}
		},
		ule = $re.TYPE,
		mle = ule.Identifier,
		gle = ule.Colon,
		hle = ule.ExclamationMark,
		fle = ule.Solidus,
		yle = ule.Asterisk,
		ble = ule.DollarSign,
		xle = ule.HyphenMinus,
		kle = ule.Semicolon,
		Sle = ule.RightCurlyBracket,
		wle = ule.RightParenthesis,
		vle = ule.PlusSign,
		Tle = ule.NumberSign,
		Cle = {
			name: 'Declaration',
			structure: {
				important: [Boolean, String],
				property: String,
				value: ['Value', 'Raw']
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = so.call(this),
					n = !1,
					r;
				return this.scanner.skipSC(), this.scanner.eat(gle), r = (io(t) ? this.parseCustomProperty : this.parseValue) ? this.Value(t) : this.Raw(this.scanner.currentToken, hle, kle, !1, !1), this.scanner.tokenType === hle && (n = lo(this.scanner), this.scanner.skipSC()), this.scanner.eof || this.scanner.tokenType === kle || this.scanner.tokenType === wle || this.scanner.tokenType === Sle || this.scanner.error(), {
					type: 'Declaration',
					loc: this.getLocation(e, this.scanner.tokenStart),
					important: n,
					property: t,
					value: r
				}
			},
			generate: function(e, t, n) {
				e(t.property), e(':'), this.generate(e, t.value), t.important && e(!0 === t.important ? '!important' : '!' + t.important), n && n.next && e(';')
			},
			walkContext: 'declaration'
		},
		Ele = $re.TYPE,
		Ale = Ele.WhiteSpace,
		Ole = Ele.Comment,
		Ple = Ele.Semicolon,
		Lle = $re.TYPE.Number,
		qle = {
			name: 'Dimension',
			structure: {
				value: String,
				unit: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = this.scanner.consume(Lle),
					n = po(this.scanner);
				return {
					type: 'Dimension',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: t,
					unit: n
				}
			},
			generate: function(e, t) {
				e(t.value), e(t.unit)
			}
		},
		Rle = $re.TYPE,
		Dle = Rle.RightParenthesis,
		Nle = {
			name: 'Function',
			structure: {
				name: String,
				children: [
					[]
				]
			},
			parse: function(e, t) {
				var n = this.scanner.tokenStart,
					r = this.scanner.consumeFunctionName(),
					a = r.toLowerCase(),
					o;
				return o = t.hasOwnProperty(a) ? t[a].call(this, t) : e.call(this, t), this.scanner.eat(Dle), {
					type: 'Function',
					loc: this.getLocation(n, this.scanner.tokenStart),
					name: r,
					children: o
				}
			},
			generate: function(e, t) {
				e(t.name), e('('), this.each(e, t), e(')')
			},
			walkContext: 'function'
		},
		Ble = $re.isHex,
		Ile = $re.TYPE,
		zle = Ile.Identifier,
		_le = Ile.Number,
		Mle = Ile.NumberSign,
		Gle = {
			name: 'HexColor',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				this.scanner.eat(Mle);
				scan: switch (this.scanner.tokenType) {
					case _le:
						uo(this.scanner, !0), this.scanner.tokenType === zle && uo(this.scanner, !1);
						break;
					case zle:
						uo(this.scanner, !0);
						break;
					default:
						this.scanner.error('Number or identifier is expected');
				}
				return {
					type: 'HexColor',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.substrToCursor(e + 1)
				}
			},
			generate: function(e, t) {
				e('#'), e(t.value)
			}
		},
		Ule = $re.TYPE,
		Vle = Ule.Identifier,
		Wle = {
			name: 'Identifier',
			structure: {
				name: String
			},
			parse: function() {
				return {
					type: 'Identifier',
					loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
					name: this.scanner.consume(Vle)
				}
			},
			generate: function(e, t) {
				e(t.name)
			}
		},
		Fle = $re.TYPE,
		jle = Fle.Identifier,
		Hle = Fle.NumberSign,
		Yle = {
			name: 'IdSelector',
			structure: {
				name: String
			},
			parse: function() {
				return this.scanner.eat(Hle), {
					type: 'IdSelector',
					loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
					name: this.scanner.consume(jle)
				}
			},
			generate: function(e, t) {
				e('#'), e(t.name)
			}
		},
		$le = $re.TYPE,
		Kle = $le.Identifier,
		Xle = $le.Number,
		Qle = $le.LeftParenthesis,
		Zle = $le.RightParenthesis,
		Jle = $le.Colon,
		ede = $le.Solidus,
		tde = {
			name: 'MediaFeature',
			structure: {
				name: String,
				value: ['Identifier', 'Number', 'Dimension', 'Ratio', null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n;
				if (this.scanner.eat(Qle), this.scanner.skipSC(), n = this.scanner.consume(Kle), this.scanner.skipSC(), this.scanner.tokenType !== Zle) {
					switch (this.scanner.eat(Jle), this.scanner.skipSC(), this.scanner.tokenType) {
						case Xle:
							t = this.scanner.lookupType(1) === Kle ? this.Dimension() : this.scanner.lookupNonWSType(1) === ede ? this.Ratio() : this.Number();
							break;
						case Kle:
							t = this.Identifier();
							break;
						default:
							this.scanner.error('Number, dimension, ratio or identifier is expected');
					}
					this.scanner.skipSC()
				}
				return this.scanner.eat(Zle), {
					type: 'MediaFeature',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: n,
					value: t
				}
			},
			generate: function(e, t) {
				e('('), e(t.name), null !== t.value && (e(':'), this.generate(e, t.value)), e(')')
			}
		},
		nde = $re.TYPE,
		rde = nde.WhiteSpace,
		ade = nde.Comment,
		ode = nde.Identifier,
		ide = nde.LeftParenthesis,
		sde = $re.TYPE.Comma,
		lde = $re.TYPE.Number,
		dde = {
			name: 'Number',
			structure: {
				value: String
			},
			parse: function() {
				return {
					type: 'Number',
					loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
					value: this.scanner.consume(lde)
				}
			},
			generate: function(e, t) {
				e(t.value)
			}
		},
		cde = {
			name: 'Operator',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				return this.scanner.next(), {
					type: 'Operator',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e, t) {
				e(t.value)
			}
		},
		pde = $re.TYPE,
		ude = pde.LeftParenthesis,
		mde = pde.RightParenthesis,
		gde = $re.TYPE,
		hde = gde.Number,
		fde = gde.PercentSign,
		yde = {
			name: 'Percentage',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = this.scanner.consume(hde);
				return this.scanner.eat(fde), {
					type: 'Percentage',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: t
				}
			},
			generate: function(e, t) {
				e(t.value), e('%')
			}
		},
		bde = $re.TYPE,
		xde = bde.Identifier,
		kde = bde.Function,
		Sde = bde.Colon,
		wde = bde.RightParenthesis,
		vde = {
			name: 'PseudoClassSelector',
			structure: {
				name: String,
				children: [
					['Raw'], null
				]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n, r;
				return this.scanner.eat(Sde), this.scanner.tokenType === kde ? (n = this.scanner.consumeFunctionName(), r = n.toLowerCase(), this.pseudo.hasOwnProperty(r) ? (this.scanner.skipSC(), t = this.pseudo[r].call(this), this.scanner.skipSC()) : t = new hne().appendData(this.Raw(this.scanner.currentToken, 0, 0, !1, !1)), this.scanner.eat(wde)) : n = this.scanner.consume(xde), {
					type: 'PseudoClassSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: n,
					children: t
				}
			},
			generate: function(e, t) {
				e(':'), e(t.name), null !== t.children && (e('('), this.each(e, t), e(')'))
			},
			walkContext: 'function'
		},
		Tde = $re.TYPE,
		Cde = Tde.Identifier,
		Ede = Tde.Function,
		Ade = Tde.Colon,
		Ode = Tde.RightParenthesis,
		Pde = {
			name: 'PseudoElementSelector',
			structure: {
				name: String,
				children: [
					['Raw'], null
				]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n, r;
				return this.scanner.eat(Ade), this.scanner.eat(Ade), this.scanner.tokenType === Ede ? (n = this.scanner.consumeFunctionName(), r = n.toLowerCase(), this.pseudo.hasOwnProperty(r) ? (this.scanner.skipSC(), t = this.pseudo[r].call(this), this.scanner.skipSC()) : t = new hne().appendData(this.Raw(this.scanner.currentToken, 0, 0, !1, !1)), this.scanner.eat(Ode)) : n = this.scanner.consume(Cde), {
					type: 'PseudoElementSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: n,
					children: t
				}
			},
			generate: function(e, t) {
				e('::'), e(t.name), null !== t.children && (e('('), this.each(e, t), e(')'))
			},
			walkContext: 'function'
		},
		Lde = $re.isNumber,
		qde = $re.TYPE,
		Rde = qde.Number,
		Dde = qde.Solidus,
		Nde = qde.FullStop,
		Bde = {
			name: 'Ratio',
			structure: {
				left: String,
				right: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = mo(this.scanner),
					n;
				return this.scanner.eatNonWS(Dde), n = mo(this.scanner), {
					type: 'Ratio',
					loc: this.getLocation(e, this.scanner.tokenStart),
					left: t,
					right: n
				}
			},
			generate: function(e, t) {
				e(t.left), e('/'), e(t.right)
			}
		},
		Ide = {
			name: 'Raw',
			structure: {
				value: String
			},
			parse: function(e, t, n, r, a) {
				var o = this.scanner.getTokenStart(e),
					i;
				return this.scanner.skip(this.scanner.getRawLength(e, t, n, r)), i = a && this.scanner.tokenStart > o ? this.scanner.getOffsetExcludeWS() : this.scanner.tokenStart, {
					type: 'Raw',
					loc: this.getLocation(o, i),
					value: this.scanner.source.substring(o, i)
				}
			},
			generate: function(e, t) {
				e(t.value)
			}
		},
		zde = $re.TYPE,
		_de = zde.LeftCurlyBracket,
		Mde = $re.TYPE,
		Gde = Mde.Comma,
		Ude = $re.TYPE.String,
		Vde = {
			name: 'String',
			structure: {
				value: String
			},
			parse: function() {
				return {
					type: 'String',
					loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
					value: this.scanner.consume(Ude)
				}
			},
			generate: function(e, t) {
				e(t.value)
			}
		},
		Wde = $re.TYPE,
		Fde = Wde.WhiteSpace,
		jde = Wde.Comment,
		Hde = Wde.ExclamationMark,
		Yde = Wde.Atrule,
		$de = Wde.CDO,
		Kde = Wde.CDC,
		Xde = $re.TYPE,
		Qde = Xde.Identifier,
		Zde = Xde.Asterisk,
		Jde = Xde.VerticalLine,
		ece = {
			name: 'TypeSelector',
			structure: {
				name: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				return this.scanner.tokenType === Jde ? (this.scanner.next(), fo.call(this)) : (fo.call(this), this.scanner.tokenType === Jde && (this.scanner.next(), fo.call(this))), {
					type: 'TypeSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e, t) {
				e(t.name)
			}
		},
		tce = $re.isHex,
		nce = $re.TYPE,
		rce = nce.Identifier,
		ace = nce.Number,
		oce = nce.PlusSign,
		ice = nce.HyphenMinus,
		lce = nce.FullStop,
		dce = nce.QuestionMark,
		cce = {
			name: 'UnicodeRange',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				return this.scanner.next(), bo(this.scanner), {
					type: 'UnicodeRange',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e, t) {
				e(t.value)
			}
		},
		pce = $re.TYPE,
		uce = pce.String,
		mce = pce.Url,
		gce = pce.Raw,
		hce = pce.RightParenthesis,
		fce = $re.endsWith,
		yce = $re.TYPE,
		bce = yce.WhiteSpace,
		xce = yce.Comment,
		kce = yce.Function,
		Sce = yce.Colon,
		wce = yce.Semicolon,
		vce = yce.ExclamationMark,
		Tce = $re.TYPE.WhiteSpace,
		Cce = Object.freeze({
			type: 'WhiteSpace',
			loc: null,
			value: ' '
		}),
		Ece = {
			name: 'WhiteSpace',
			structure: {
				value: String
			},
			parse: function() {
				return this.scanner.eat(Tce), Cce
			},
			generate: function(e, t) {
				e(t.value)
			}
		},
		Ace = {
			AnPlusB: xse,
			Atrule: Cse,
			AtrulePrelude: {
				name: 'AtrulePrelude',
				structure: {
					children: [
						[]
					]
				},
				parse: function(e) {
					var t = null;
					return null !== e && (e = e.toLowerCase()), this.atrule.hasOwnProperty(e) ? 'function' == typeof this.atrule[e].prelude && (t = this.atrule[e].prelude.call(this)) : (this.scanner.skipSC(), t = this.readSequence(this.scope.AtrulePrelude)), null === t && (t = new hne), {
						type: 'AtrulePrelude',
						loc: this.getLocationFromList(t),
						children: t
					}
				},
				generate: function(e, t) {
					this.each(e, t)
				},
				walkContext: 'atrulePrelude'
			},
			AttributeSelector: _se,
			Block: {
				name: 'Block',
				structure: {
					children: [
						['Atrule', 'Rule', 'Declaration']
					]
				},
				parse: function(e) {
					var t = e ? oo : ro,
						n = this.scanner.tokenStart,
						r = new hne;
					this.scanner.eat(Fse);
					scan: for (; !this.scanner.eof;) switch (this.scanner.tokenType) {
						case jse:
							break scan;
						case Gse:
						case Use:
							this.scanner.next();
							break;
						case Wse:
							r.appendData(this.tolerantParse(this.Atrule, no));
							break;
						default:
							r.appendData(t.call(this));
					}
					return this.tolerant && this.scanner.eof || this.scanner.eat(jse), {
						type: 'Block',
						loc: this.getLocation(n, this.scanner.tokenStart),
						children: r
					}
				},
				generate: function(e, t) {
					e('{'), this.each(e, t), e('}')
				},
				walkContext: 'block'
			},
			Brackets: {
				name: 'Brackets',
				structure: {
					children: [
						[]
					]
				},
				parse: function(e, t) {
					var n = this.scanner.tokenStart,
						r = null;
					return this.scanner.eat(Yse), r = e.call(this, t), this.scanner.eat($se), {
						type: 'Brackets',
						loc: this.getLocation(n, this.scanner.tokenStart),
						children: r
					}
				},
				generate: function(e, t) {
					e('['), this.each(e, t), e(']')
				}
			},
			CDC: {
				name: 'CDC',
				structure: [],
				parse: function() {
					var e = this.scanner.tokenStart;
					return this.scanner.eat(Kse), {
						type: 'CDC',
						loc: this.getLocation(e, this.scanner.tokenStart)
					}
				},
				generate: function(e) {
					e('-->')
				}
			},
			CDO: {
				name: 'CDO',
				structure: [],
				parse: function() {
					var e = this.scanner.tokenStart;
					return this.scanner.eat(Xse), {
						type: 'CDO',
						loc: this.getLocation(e, this.scanner.tokenStart)
					}
				},
				generate: function(e) {
					e('<!--')
				}
			},
			ClassSelector: ele,
			Combinator: sle,
			Comment: ple,
			Declaration: Cle,
			DeclarationList: {
				name: 'DeclarationList',
				structure: {
					children: [
						['Declaration']
					]
				},
				parse: function() {
					var e = new hne;
					scan: for (; !this.scanner.eof;) switch (this.scanner.tokenType) {
						case Ale:
						case Ole:
						case Ple:
							this.scanner.next();
							break;
						default:
							e.appendData(this.tolerantParse(this.Declaration, co));
					}
					return {
						type: 'DeclarationList',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e, t) {
					this.each(e, t)
				}
			},
			Dimension: qle,
			Function: Nle,
			HexColor: Gle,
			Identifier: Wle,
			IdSelector: Yle,
			MediaFeature: tde,
			MediaQuery: {
				name: 'MediaQuery',
				structure: {
					children: [
						['Identifier', 'MediaFeature', 'WhiteSpace']
					]
				},
				parse: function() {
					this.scanner.skipSC();
					var e = new hne,
						t = null,
						n = null;
					scan: for (; !this.scanner.eof;) {
						switch (this.scanner.tokenType) {
							case ade:
								this.scanner.next();
								continue;
							case rde:
								n = this.WhiteSpace();
								continue;
							case ode:
								t = this.Identifier();
								break;
							case ide:
								t = this.MediaFeature();
								break;
							default:
								break scan;
						}
						null !== n && (e.appendData(n), n = null), e.appendData(t)
					}
					return null === t && this.scanner.error('Identifier or parenthesis is expected'), {
						type: 'MediaQuery',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e, t) {
					this.each(e, t)
				}
			},
			MediaQueryList: {
				name: 'MediaQueryList',
				structure: {
					children: [
						['MediaQuery']
					]
				},
				parse: function(e) {
					var t = new hne;
					for (this.scanner.skipSC(); !this.scanner.eof && (t.appendData(this.MediaQuery(e)), this.scanner.tokenType === sde);) this.scanner.next();
					return {
						type: 'MediaQueryList',
						loc: this.getLocationFromList(t),
						children: t
					}
				},
				generate: function(e, t) {
					this.eachComma(e, t)
				}
			},
			Nth: {
				name: 'Nth',
				structure: {
					nth: ['AnPlusB', 'Identifier'],
					selector: ['SelectorList', null]
				},
				parse: function(e) {
					this.scanner.skipSC();
					var t = this.scanner.tokenStart,
						n = t,
						r = null,
						a;
					return a = this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even') ? this.Identifier() : this.AnPlusB(), this.scanner.skipSC(), e && this.scanner.lookupValue(0, 'of') ? (this.scanner.next(), r = this.SelectorList(), this.needPositions && (n = r.children.last().loc.end.offset)) : this.needPositions && (n = a.loc.end.offset), {
						type: 'Nth',
						loc: this.getLocation(t, n),
						nth: a,
						selector: r
					}
				},
				generate: function(e, t) {
					this.generate(e, t.nth), null !== t.selector && (e(' of '), this.generate(e, t.selector))
				}
			},
			Number: dde,
			Operator: cde,
			Parentheses: {
				name: 'Parentheses',
				structure: {
					children: [
						[]
					]
				},
				parse: function(e, t) {
					var n = this.scanner.tokenStart,
						r = null;
					return this.scanner.eat(ude), r = e.call(this, t), this.scanner.eat(mde), {
						type: 'Parentheses',
						loc: this.getLocation(n, this.scanner.tokenStart),
						children: r
					}
				},
				generate: function(e, t) {
					e('('), this.each(e, t), e(')')
				}
			},
			Percentage: yde,
			PseudoClassSelector: vde,
			PseudoElementSelector: Pde,
			Ratio: Bde,
			Raw: Ide,
			Rule: {
				name: 'Rule',
				structure: {
					prelude: ['SelectorList', 'Raw'],
					block: ['Block']
				},
				parse: function() {
					var e = this.scanner.currentToken,
						t = this.scanner.tokenStart,
						n, r;
					return this.parseRulePrelude ? (n = this.tolerantParse(this.SelectorList, go), this.tolerant && !this.scanner.eof && 'Raw' !== n.type && this.scanner.tokenType !== _de && (n = go.call(this, e))) : n = go.call(this, e), r = this.Block(!0), {
						type: 'Rule',
						loc: this.getLocation(t, this.scanner.tokenStart),
						prelude: n,
						block: r
					}
				},
				generate: function(e, t) {
					this.generate(e, t.prelude), this.generate(e, t.block)
				},
				walkContext: 'rule'
			},
			Selector: {
				name: 'Selector',
				structure: {
					children: [
						['TypeSelector', 'IdSelector', 'ClassSelector', 'AttributeSelector', 'PseudoClassSelector', 'PseudoElementSelector', 'Combinator', 'WhiteSpace']
					]
				},
				parse: function() {
					var e = this.readSequence(this.scope.Selector);
					return e.isEmpty() && this.scanner.error('Selector is expected'), {
						type: 'Selector',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e, t) {
					this.each(e, t)
				}
			},
			SelectorList: {
				name: 'SelectorList',
				structure: {
					children: [
						['Selector', 'Raw']
					]
				},
				parse: function() {
					for (var e = new hne; !this.scanner.eof;) {
						if (e.appendData(this.Selector()), this.scanner.tokenType === Gde) {
							this.scanner.next();
							continue
						}
						break
					}
					return {
						type: 'SelectorList',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e, t) {
					this.eachComma(e, t)
				},
				walkContext: 'selector'
			},
			String: Vde,
			StyleSheet: {
				name: 'StyleSheet',
				structure: {
					children: [
						['Comment', 'Atrule', 'Rule', 'Raw']
					]
				},
				parse: function() {
					var e = this.scanner.tokenStart,
						t = new hne,
						n;
					scan: for (; !this.scanner.eof;) {
						switch (this.scanner.tokenType) {
							case Fde:
								this.scanner.next();
								continue;
							case jde:
								if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== Hde) {
									this.scanner.next();
									continue
								}
								n = this.Comment();
								break;
							case $de:
								n = this.CDO();
								break;
							case Kde:
								n = this.CDC();
								break;
							case Yde:
								n = this.Atrule();
								break;
							default:
								n = this.tolerantParse(this.Rule, ho);
						}
						t.appendData(n)
					}
					return {
						type: 'StyleSheet',
						loc: this.getLocation(e, this.scanner.tokenStart),
						children: t
					}
				},
				generate: function(e, t) {
					this.each(e, t)
				},
				walkContext: 'stylesheet'
			},
			TypeSelector: ece,
			UnicodeRange: cce,
			Url: {
				name: 'Url',
				structure: {
					value: ['String', 'Raw']
				},
				parse: function() {
					var e = this.scanner.tokenStart,
						t;
					switch (this.scanner.eat(mce), this.scanner.skipSC(), this.scanner.tokenType) {
						case uce:
							t = this.String();
							break;
						case gce:
							t = this.Raw(this.scanner.currentToken, 0, gce, !0, !1);
							break;
						default:
							this.scanner.error('String or Raw is expected');
					}
					return this.scanner.skipSC(), this.scanner.eat(hce), {
						type: 'Url',
						loc: this.getLocation(e, this.scanner.tokenStart),
						value: t
					}
				},
				generate: function(e, t) {
					e('url'), e('('), this.generate(e, t.value), e(')')
				}
			},
			Value: {
				name: 'Value',
				structure: {
					children: [
						[]
					]
				},
				parse: function(e) {
					if (null !== e && fce(e, 'filter') && xo(this.scanner)) return this.scanner.skipSC(), this.Raw(this.scanner.currentToken, vce, wce, !1, !1);
					var t = this.scanner.tokenStart,
						n = this.readSequence(this.scope.Value);
					return {
						type: 'Value',
						loc: this.getLocation(t, this.scanner.tokenStart),
						children: n
					}
				},
				generate: function(e, t) {
					this.each(e, t)
				}
			},
			WhiteSpace: Ece
		},
		Oce = {
			generic: !0,
			types: pse.types,
			properties: pse.properties,
			node: Ace
		},
		Pce = $re.cmpChar,
		Lce = $re.TYPE,
		qce = Lce.Identifier,
		Rce = Lce.String,
		Dce = Lce.Number,
		Nce = Lce.Function,
		Bce = Lce.Url,
		Ice = Lce.NumberSign,
		zce = Lce.LeftParenthesis,
		_ce = Lce.LeftSquareBracket,
		Mce = Lce.PlusSign,
		Gce = Lce.HyphenMinus,
		Uce = Lce.Comma,
		Vce = Lce.Solidus,
		Wce = Lce.Asterisk,
		Fce = Lce.PercentSign,
		jce = Lce.Backslash,
		Hce = function(e) {
			switch (this.scanner.tokenType) {
				case Ice:
					return this.HexColor();
				case Uce:
					return e.space = null, e.ignoreWSAfter = !0, this.Operator();
				case Vce:
				case Wce:
				case Mce:
				case Gce:
					return this.Operator();
				case zce:
					return this.Parentheses(this.readSequence, e.recognizer);
				case _ce:
					return this.Brackets(this.readSequence, e.recognizer);
				case Rce:
					return this.String();
				case Dce:
					switch (this.scanner.lookupType(1)) {
						case Fce:
							return this.Percentage();
						case qce:
							return Pce(this.scanner.source, this.scanner.tokenEnd, jce) ? this.Number() : this.Dimension();
						default:
							return this.Number();
					}
				case Nce:
					return this.Function(this.readSequence, e.recognizer);
				case Bce:
					return this.Url();
				case qce:
					return Pce(this.scanner.source, this.scanner.tokenStart, 117) && Pce(this.scanner.source, this.scanner.tokenStart + 1, Mce) ? this.UnicodeRange() : this.Identifier();
			}
		},
		Yce = $re.TYPE,
		$ce = Yce.Identifier,
		Kce = Yce.Number,
		Xce = Yce.NumberSign,
		Qce = Yce.LeftSquareBracket,
		Zce = Yce.PlusSign,
		Jce = Yce.Solidus,
		epe = Yce.Asterisk,
		tpe = Yce.FullStop,
		npe = Yce.Colon,
		rpe = Yce.GreaterThanSign,
		ope = Yce.VerticalLine,
		ipe = Yce.Tilde,
		spe = function() {
			this.scanner.skipSC();
			var e = this.IdSelector();
			return this.scanner.skipSC(), new hne().appendData(e)
		},
		lpe = $re.TYPE,
		dpe = lpe.Identifier,
		cpe = lpe.Comma,
		ppe = lpe.Semicolon,
		upe = lpe.HyphenMinus,
		mpe = lpe.ExclamationMark,
		gpe = $re.TYPE,
		hpe = gpe.String,
		fpe = gpe.Identifier,
		ype = gpe.Url,
		bpe = gpe.LeftParenthesis,
		xpe = $re.TYPE,
		kpe = xpe.WhiteSpace,
		Spe = xpe.Comment,
		wpe = xpe.Identifier,
		vpe = xpe.Function,
		Tpe = xpe.LeftParenthesis,
		Cpe = xpe.HyphenMinus,
		Epe = xpe.Colon,
		Ape = {
			parse: function() {
				return new hne().appendData(this.SelectorList())
			}
		},
		Ope = {
			parse: function() {
				return new hne().appendData(this.Nth(!0))
			}
		},
		Ppe = {
			parse: function() {
				return new hne().appendData(this.Nth(!1))
			}
		},
		Lpe = {
			create: function(e) {
				return $a(Goe({}, e))
			}
		}.create(function() {
			for (var e = {}, t = 0, n; t < arguments.length; t++)
				for (var r in n = arguments[t], n) e[r] = n[r];
			return e
		}(Oce, {
			parseContext: {
				default: 'StyleSheet',
				stylesheet: 'StyleSheet',
				atrule: 'Atrule',
				atrulePrelude: function(e) {
					return this.AtrulePrelude(e.atrule ? e.atrule + '' : null)
				},
				mediaQueryList: 'MediaQueryList',
				mediaQuery: 'MediaQuery',
				rule: 'Rule',
				selectorList: 'SelectorList',
				selector: 'Selector',
				block: function() {
					return this.Block(!0)
				},
				declarationList: 'DeclarationList',
				declaration: 'Declaration',
				value: function(e) {
					return this.Value(e.property ? e.property + '' : null)
				}
			},
			scope: {
				AtrulePrelude: {
					getNode: Hce
				},
				Selector: {
					getNode: function(e) {
						switch (this.scanner.tokenType) {
							case Zce:
							case rpe:
							case ipe:
								return e.space = null, e.ignoreWSAfter = !0, this.Combinator();
							case Jce:
								return this.Combinator();
							case tpe:
								return this.ClassSelector();
							case Qce:
								return this.AttributeSelector();
							case Xce:
								return this.IdSelector();
							case npe:
								return this.scanner.lookupType(1) === npe ? this.PseudoElementSelector() : this.PseudoClassSelector();
							case $ce:
							case epe:
							case ope:
								return this.TypeSelector();
							case Kce:
								return this.Percentage();
						}
					}
				},
				Value: {
					getNode: Hce,
					"-moz-element": spe,
					element: spe,
					expression: function() {
						return new hne().appendData(this.Raw(this.scanner.currentToken, 0, 0, !1, !1))
					},
					var: function() {
						var e = new hne;
						this.scanner.skipSC();
						var t = this.scanner.tokenStart;
						return this.scanner.eat(upe), this.scanner.source.charCodeAt(this.scanner.tokenStart) !== upe && this.scanner.error('HyphenMinus is expected'), this.scanner.eat(dpe), e.appendData({
							type: 'Identifier',
							loc: this.getLocation(t, this.scanner.tokenStart),
							name: this.scanner.substrToCursor(t)
						}), this.scanner.skipSC(), this.scanner.tokenType === cpe && (e.appendData(this.Operator()), e.appendData(this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.currentToken, mpe, ppe, !1, !1))), e
					}
				}
			},
			atrule: {
				"font-face": {
					parse: {
						prelude: null,
						block: function() {
							return this.Block(!0)
						}
					}
				},
				import: {
					parse: {
						prelude: function() {
							var e = new hne;
							switch (this.scanner.skipSC(), this.scanner.tokenType) {
								case hpe:
									e.appendData(this.String());
									break;
								case ype:
									e.appendData(this.Url());
									break;
								default:
									this.scanner.error('String or url() is expected');
							}
							return (this.scanner.lookupNonWSType(0) === fpe || this.scanner.lookupNonWSType(0) === bpe) && (e.appendData(this.WhiteSpace()), e.appendData(this.MediaQueryList())), e
						},
						block: null
					}
				},
				media: {
					parse: {
						prelude: function() {
							return new hne().appendData(this.MediaQueryList())
						},
						block: function() {
							return this.Block(!1)
						}
					}
				},
				page: {
					parse: {
						prelude: function() {
							return new hne().appendData(this.SelectorList())
						},
						block: function() {
							return this.Block(!0)
						}
					}
				},
				supports: {
					parse: {
						prelude: function() {
							var e = wo.call(this);
							return e.isEmpty() && this.scanner.error('Condition is expected'), e
						},
						block: function() {
							return this.Block(!1)
						}
					}
				}
			},
			pseudo: {
				dir: {
					parse: function() {
						return new hne().appendData(this.Identifier())
					}
				},
				has: {
					parse: function() {
						return new hne().appendData(this.SelectorList())
					}
				},
				lang: {
					parse: function() {
						return new hne().appendData(this.Identifier())
					}
				},
				matches: Ape,
				not: Ape,
				"nth-child": Ope,
				"nth-last-child": Ope,
				"nth-last-of-type": Ppe,
				"nth-of-type": Ppe,
				slotted: {
					parse: function() {
						return new hne().appendData(this.Selector())
					}
				}
			},
			node: Ace
		}, {
			node: Ace
		}));
	var qpe = Lpe,
		Rpe = e(function(e) {
			(function(t, n) {
				e.exports = n()
			})(jd, function() {
				function e(e, t) {
					'function' != typeof t && (t = function(e, t) {
						return (e + '').localeCompare(t)
					});
					var r = e.length;
					if (1 >= r) return e;
					for (var a = Array(r), o = 1; o < r; o *= 2) {
						n(e, t, o, a);
						var i = e;
						e = a, a = i
					}
					return e
				}
				var t = function(t, n) {
					return e(t.slice(), n)
				};
				t.inplace = function(t, r) {
					var a = e(t, r);
					return a !== t && n(a, null, t.length, t), t
				};
				var n = function(t, n, a, o) {
					var s = t.length,
						d = 0,
						i, l, r, e, c;
					for (i = 0; i < s; i += 2 * a)
						for (l = i + a, r = l + a, l > s && (l = s), r > s && (r = s), e = i, c = l;;)
							if (e < l && c < r) o[d++] = 0 >= n(t[e], t[c]) ? t[e++] : t[c++];
							else if (e < l) o[d++] = t[e++];
					else if (c < r) o[d++] = t[c++];
					else break
				};
				return t
			})
		}),
		Dpe = function(e) {
			var t = 0,
				n = 0,
				r = 0;
			return e.children.each(function e(a) {
				switch (a.type) {
					case 'SelectorList':
					case 'Selector':
						a.children.each(e);
						break;
					case 'IdSelector':
						t++;
						break;
					case 'ClassSelector':
					case 'AttributeSelector':
						n++;
						break;
					case 'PseudoClassSelector':
						switch (a.name.toLowerCase()) {
							case 'not':
								a.children.each(e);
								break;
							case 'before':
							case 'after':
							case 'first-line':
							case 'first-letter':
								r++;
								break;
							default:
								n++;
						}
						break;
					case 'PseudoElementSelector':
						r++;
						break;
					case 'TypeSelector':
						'*' !== a.name.charAt(a.name.length - 1) && r++;
				}
			}), [t, n, r]
		};
	var Npe = qpe.List,
		Bpe = {
			flattenToSelectors: function(e) {
				var t = [];
				return qpe.walkRules(e, function(e) {
					if ('Rule' === e.type) {
						var n = this.atrule;
						e.prelude.children.each(function(r, a) {
							var o = {
								item: a,
								atrule: n,
								rule: e,
								pseudos: []
							};
							r.children.each(function(e, t, n) {
								('PseudoClassSelector' === e.type || 'PseudoElementSelector' === e.type) && o.pseudos.push({
									item: t,
									list: n
								})
							}), t.push(o)
						})
					}
				}), t
			},
			filterByMqs: function(e, t) {
				return e.filter(function(e) {
					if (null === e.atrule) return ~t.indexOf('');
					var n = e.atrule.name,
						r = n;
					if (e.atrule.expression && 'MediaQueryList' === e.atrule.expression.children.first().type) {
						var a = qpe.translate(e.atrule.expression);
						r = [n, a].join(' ')
					}
					return ~t.indexOf(r)
				})
			},
			filterByPseudos: function(e, t) {
				return e.filter(function(e) {
					var n = qpe.translate({
						type: 'Selector',
						children: new Npe().fromArray(e.pseudos.map(function(e) {
							return e.item.data
						}))
					});
					return ~t.indexOf(n)
				})
			},
			cleanPseudos: function(e) {
				e.forEach(function(e) {
					e.pseudos.forEach(function(e) {
						e.list.remove(e.item)
					})
				})
			},
			compareSpecificity: vo,
			compareSimpleSelectorNode: To,
			sortSelectors: function(e) {
				return Rpe(e, Co)
			},
			csstreeToStyleDeclaration: function(e) {
				var t = e.property,
					n = qpe.translate(e.value),
					r = e.important ? 'important' : '';
				return {
					name: t,
					value: n,
					priority: r
				}
			},
			getCssStr: function(e) {
				return e.content[0].text || e.content[0].cdata || []
			},
			setCssStr: function(e, t) {
				return e.content[0].cdata ? (e.content[0].cdata = t, e.content[0].cdata) : (e.content[0].text = t, e.content[0].text)
			}
		};
	var Ipe = function(e) {
		this.parentNode = e, this.properties = new Map, this.hasSynced = !1, this.styleAttr = null, this.styleValue = null, this.parseError = !1
	};
	Ipe.prototype.hasStyle = function() {
		this.addStyleHandler()
	}, Ipe.prototype.addStyleHandler = function() {
		this.styleAttr = {
			name: 'style',
			value: null
		}, Object.defineProperty(this.parentNode.attrs, 'style', {
			get: this.getStyleAttr.bind(this),
			set: this.setStyleAttr.bind(this),
			enumerable: !0,
			configurable: !0
		}), this.addStyleValueHandler()
	}, Ipe.prototype.addStyleValueHandler = function() {
		Object.defineProperty(this.styleAttr, 'value', {
			get: this.getStyleValue.bind(this),
			set: this.setStyleValue.bind(this),
			enumerable: !0,
			configurable: !0
		})
	}, Ipe.prototype.getStyleAttr = function() {
		return this.styleAttr
	}, Ipe.prototype.setStyleAttr = function(e) {
		this.setStyleValue(e.value), this.styleAttr = e, this.addStyleValueHandler(), this.hasSynced = !1
	}, Ipe.prototype.getStyleValue = function() {
		return this.getCssText()
	}, Ipe.prototype.setStyleValue = function(e) {
		this.properties.clear(), this.styleValue = e, this.hasSynced = !1
	}, Ipe.prototype._loadCssText = function() {
		if (!this.hasSynced && (this.hasSynced = !0, this.styleValue && 0 !== this.styleValue.length)) {
			var e = this.styleValue,
				t = {};
			try {
				t = qpe.parse(e, {
					context: 'declarationList',
					parseValue: !1
				})
			} catch (e) {
				return void(this.parseError = e)
			}
			this.parseError = !1;
			var n = this;
			t.children.each(function(e) {
				var t = Bpe.csstreeToStyleDeclaration(e);
				n.setProperty(t.name, t.value, t.priority)
			})
		}
	}, Ipe.prototype.getCssText = function() {
		var e = this.getProperties();
		if (this.parseError) return this.styleValue;
		var t = [];
		return e.forEach(function(e, n) {
			var r = 'important' === e.priority ? '!important' : '';
			t.push(n.trim() + ':' + e.value.trim() + r)
		}), t.join(';')
	}, Ipe.prototype._handleParseError = function() {
		this.parseError && console.warn('Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr(\'style\').value. Error details: ' + this.parseError)
	}, Ipe.prototype._getProperty = function(e) {
		if ('undefined' == typeof e) throw Error('1 argument required, but only 0 present.');
		var t = this.getProperties();
		this._handleParseError();
		var n = t.get(e.trim());
		return n
	}, Ipe.prototype.getPropertyPriority = function(e) {
		var t = this._getProperty(e);
		return t ? t.priority : ''
	}, Ipe.prototype.getPropertyValue = function(e) {
		var t = this._getProperty(e);
		return t ? t.value : null
	}, Ipe.prototype.item = function(e) {
		if ('undefined' == typeof e) throw Error('1 argument required, but only 0 present.');
		var t = this.getProperties();
		return this._handleParseError(), Array.from(t.keys())[e]
	}, Ipe.prototype.getProperties = function() {
		return this._loadCssText(), this.properties
	}, Ipe.prototype.removeProperty = function(e) {
		if ('undefined' == typeof e) throw Error('1 argument required, but only 0 present.');
		this.hasStyle();
		var t = this.getProperties();
		this._handleParseError();
		var n = this.getPropertyValue(e);
		return t.delete(e.trim()), n
	}, Ipe.prototype.setProperty = function(e, t, n) {
		if ('undefined' == typeof e) throw Error('propertyName argument required, but only not present.');
		this.hasStyle();
		var r = this.getProperties();
		this._handleParseError();
		var a = {
			value: t.trim(),
			priority: n.trim()
		};
		return r.set(e.trim(), a), a
	};
	var zpe = Ipe;
	var _pe = /<!ENTITY\s+(\S+)\s+(?:'([^\']+)'|"([^\"]+)")\s*>/g,
		Mpe = {
			strict: !0,
			trim: !1,
			normalize: !0,
			lowercase: !0,
			xmlns: !0,
			position: !0
		},
		Gpe = function(e, t) {
			function n(e) {
				return e = new QJ(e, i), (i.content = i.content || []).push(e), e
			}

			function r(e) {
				if (!e.content) return e;
				for (var t = e.content[0], n = e.content[e.content.length - 1]; t && t.content && !t.text;) t = t.content[0];
				for (t && t.text && (t.text = t.text.replace(/^\s+/, '')); n && n.content && !n.text;) n = n.content[n.content.length - 1];
				return n && n.text && (n.text = n.text.replace(/\s+$/, '')), e
			}
			var a = Ac.parser(Mpe.strict, Mpe),
				o = new QJ({
					elem: '#document',
					content: []
				}),
				i = o,
				s = [o],
				l = null,
				d = !1;
			a.ondoctype = function(t) {
				n({
					doctype: t
				});
				var r = t.indexOf('['),
					o;
				if (0 <= r)
					for (_pe.lastIndex = r; null != (o = _pe.exec(e));) a.ENTITIES[o[1]] = o[2] || o[3]
			}, a.onprocessinginstruction = function(e) {
				n({
					processinginstruction: e
				})
			}, a.oncomment = function(e) {
				n({
					comment: e.trim()
				})
			}, a.oncdata = function(e) {
				n({
					cdata: e
				})
			}, a.onopentag = function(e) {
				var t = {
					elem: e.name,
					prefix: e.prefix,
					local: e.local,
					attrs: {}
				};
				if (t.class = new pne(t), t.style = new zpe(t), Object.keys(e.attributes).length)
					for (var r in e.attributes) 'class' == r && t.class.hasClass(), 'style' == r && t.style.hasStyle(), t.attrs[r] = {
						name: r,
						value: e.attributes[r].value,
						prefix: e.attributes[r].prefix,
						local: e.attributes[r].local
					};
				t = n(t), i = t, 'text' != e.name || e.prefix || (l = i), s.push(t)
			}, a.ontext = function(e) {
				(/\S/.test(e) || l) && (!l && (e = e.trim()), n({
					text: e
				}))
			}, a.onclosetag = function() {
				var e = s.pop();
				e == l && (r(l), l = null), i = s[s.length - 1]
			}, a.onerror = function(t) {
				if (t.message = 'Error in parsing SVG: ' + t.message, 0 > t.message.indexOf('Unexpected end')) throw t
			}, a.onend = function() {
				this.error ? t({
					error: this.error.message
				}) : t(o)
			};
			try {
				a.write(e)
			} catch (n) {
				t({
					error: n.message
				}), d = !0
			}
			d || a.close()
		},
		Upe = zo,
		Vpe = '\n',
		Wpe = {
			EOL: Vpe,
			tmpdir: Upe,
			tmpDir: zo,
			networkInterfaces: Bo,
			getNetworkInterfaces: Io,
			release: No,
			type: Do,
			cpus: Ro,
			totalmem: qo,
			freemem: Lo,
			uptime: Po,
			loadavg: Oo,
			hostname: Ao,
			endianness: Eo
		},
		Fpe = Object.freeze({
			endianness: Eo,
			hostname: Ao,
			loadavg: Oo,
			uptime: Po,
			freemem: Lo,
			totalmem: qo,
			cpus: Ro,
			type: Do,
			release: No,
			networkInterfaces: Bo,
			getNetworkInterfaces: Io,
			arch: function() {
				return 'javascript'
			},
			platform: function() {
				return 'browser'
			},
			tmpDir: zo,
			tmpdir: Upe,
			EOL: Vpe,
			default: Wpe
		}),
		jpe;
	var Hpe = {
		elemsGroups: {
			animation: ['animate', 'animateColor', 'animateMotion', 'animateTransform', 'set'],
			descriptive: ['desc', 'metadata', 'title'],
			shape: ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect'],
			structural: ['defs', 'g', 'svg', 'symbol', 'use'],
			paintServer: ['solidColor', 'linearGradient', 'radialGradient', 'meshGradient', 'pattern', 'hatch'],
			nonRendering: ['linearGradient', 'radialGradient', 'pattern', 'clipPath', 'mask', 'marker', 'symbol', 'filter', 'solidColor'],
			container: ['a', 'defs', 'g', 'marker', 'mask', 'missing-glyph', 'pattern', 'svg', 'switch', 'symbol', 'foreignObject'],
			textContent: ['altGlyph', 'altGlyphDef', 'altGlyphItem', 'glyph', 'glyphRef', 'textPath', 'text', 'tref', 'tspan'],
			textContentChild: ['altGlyph', 'textPath', 'tref', 'tspan'],
			lightSource: ['feDiffuseLighting', 'feSpecularLighting', 'feDistantLight', 'fePointLight', 'feSpotLight'],
			filterPrimitive: ['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feFlood', 'feGaussianBlur', 'feImage', 'feMerge', 'feMorphology', 'feOffset', 'feSpecularLighting', 'feTile', 'feTurbulence']
		},
		pathElems: ['path', 'glyph', 'missing-glyph'],
		attrsGroups: {
			animationAddition: ['additive', 'accumulate'],
			animationAttributeTarget: ['attributeType', 'attributeName'],
			animationEvent: ['onbegin', 'onend', 'onrepeat', 'onload'],
			animationTiming: ['begin', 'dur', 'end', 'min', 'max', 'restart', 'repeatCount', 'repeatDur', 'fill'],
			animationValue: ['calcMode', 'values', 'keyTimes', 'keySplines', 'from', 'to', 'by'],
			conditionalProcessing: ['requiredFeatures', 'requiredExtensions', 'systemLanguage'],
			core: ['id', 'tabindex', 'xml:base', 'xml:lang', 'xml:space'],
			graphicalEvent: ['onfocusin', 'onfocusout', 'onactivate', 'onclick', 'onmousedown', 'onmouseup', 'onmouseover', 'onmousemove', 'onmouseout', 'onload'],
			presentation: ['alignment-baseline', 'baseline-shift', 'buffered-rendering', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cursor', 'direction', 'display', 'dominant-baseline', 'enable-background', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'image-rendering', 'kerning', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'mask', 'opacity', 'overflow', 'pointer-events', 'shape-rendering', 'solid-color', 'solid-opacity', 'stop-color', 'stop-opacity', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'paint-order', 'text-anchor', 'text-decoration', 'text-overflow', 'white-space', 'text-rendering', 'unicode-bidi', 'vector-effect', 'viewport-fill', 'viewport-fill-opacity', 'visibility', 'white-space', 'word-spacing', 'writing-mode'],
			xlink: ['xlink:href', 'xlink:show', 'xlink:actuate', 'xlink:type', 'xlink:role', 'xlink:arcrole', 'xlink:title'],
			documentEvent: ['onunload', 'onabort', 'onerror', 'onresize', 'onscroll', 'onzoom'],
			filterPrimitive: ['x', 'y', 'width', 'height', 'result'],
			transferFunction: ['type', 'tableValues', 'slope', 'intercept', 'amplitude', 'exponent', 'offset']
		},
		attrsGroupsDefaults: {
			core: {
				"xml:space": 'preserve'
			},
			filterPrimitive: {
				x: '0',
				y: '0',
				width: '100%',
				height: '100%'
			},
			presentation: {
				clip: 'auto',
				"clip-path": 'none',
				"clip-rule": 'nonzero',
				mask: 'none',
				opacity: '1',
				"solid-color": '#000',
				"solid-opacity": '1',
				"stop-color": '#000',
				"stop-opacity": '1',
				"fill-opacity": '1',
				"fill-rule": 'nonzero',
				fill: '#000',
				stroke: 'none',
				"stroke-width": '1',
				"stroke-linecap": 'butt',
				"stroke-linejoin": 'miter',
				"stroke-miterlimit": '4',
				"stroke-dasharray": 'none',
				"stroke-dashoffset": '0',
				"stroke-opacity": '1',
				"paint-order": 'normal',
				"vector-effect": 'none',
				"viewport-fill": 'none',
				"viewport-fill-opacity": '1',
				display: 'inline',
				visibility: 'visible',
				"marker-start": 'none',
				"marker-mid": 'none',
				"marker-end": 'none',
				"color-interpolation": 'sRGB',
				"color-interpolation-filters": 'linearRGB',
				"color-rendering": 'auto',
				"shape-rendering": 'auto',
				"text-rendering": 'auto',
				"image-rendering": 'auto',
				"buffered-rendering": 'auto',
				"font-style": 'normal',
				"font-variant": 'normal',
				"font-weight": 'normal',
				"font-stretch": 'normal',
				"font-size": 'medium',
				"font-size-adjust": 'none',
				kerning: 'auto',
				"letter-spacing": 'normal',
				"word-spacing": 'normal',
				"text-decoration": 'none',
				"text-anchor": 'start',
				"text-overflow": 'clip',
				"writing-mode": 'lr-tb',
				"glyph-orientation-vertical": 'auto',
				"glyph-orientation-horizontal": '0deg',
				direction: 'ltr',
				"unicode-bidi": 'normal',
				"dominant-baseline": 'auto',
				"alignment-baseline": 'baseline',
				"baseline-shift": 'baseline'
			},
			transferFunction: {
				slope: '1',
				intercept: '0',
				amplitude: '1',
				exponent: '1',
				offset: '0'
			}
		},
		elems: {
			a: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'target'],
				defaults: {
					target: '_self'
				},
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			altGlyph: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'x', 'y', 'dx', 'dy', 'glyphRef', 'format', 'rotate']
			},
			altGlyphDef: {
				attrsGroups: ['core'],
				content: ['glyphRef']
			},
			altGlyphItem: {
				attrsGroups: ['core'],
				content: ['glyphRef', 'altGlyphItem']
			},
			animate: {
				attrsGroups: ['conditionalProcessing', 'core', 'animationAddition', 'animationAttributeTarget', 'animationEvent', 'animationTiming', 'animationValue', 'presentation', 'xlink'],
				attrs: ['externalResourcesRequired'],
				contentGroups: ['descriptive']
			},
			animateColor: {
				attrsGroups: ['conditionalProcessing', 'core', 'animationEvent', 'xlink', 'animationAttributeTarget', 'animationTiming', 'animationValue', 'animationAddition', 'presentation'],
				attrs: ['externalResourcesRequired'],
				contentGroups: ['descriptive']
			},
			animateMotion: {
				attrsGroups: ['conditionalProcessing', 'core', 'animationEvent', 'xlink', 'animationTiming', 'animationValue', 'animationAddition'],
				attrs: ['externalResourcesRequired', 'path', 'keyPoints', 'rotate', 'origin'],
				defaults: {
					rotate: '0'
				},
				contentGroups: ['descriptive'],
				content: ['mpath']
			},
			animateTransform: {
				attrsGroups: ['conditionalProcessing', 'core', 'animationEvent', 'xlink', 'animationAttributeTarget', 'animationTiming', 'animationValue', 'animationAddition'],
				attrs: ['externalResourcesRequired', 'type'],
				contentGroups: ['descriptive']
			},
			circle: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'cx', 'cy', 'r'],
				defaults: {
					cx: '0',
					cy: '0'
				},
				contentGroups: ['animation', 'descriptive']
			},
			clipPath: {
				attrsGroups: ['conditionalProcessing', 'core', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'clipPathUnits'],
				defaults: {
					clipPathUnits: 'userSpaceOnUse'
				},
				contentGroups: ['animation', 'descriptive', 'shape'],
				content: ['text', 'use']
			},
			"color-profile": {
				attrsGroups: ['core', 'xlink'],
				attrs: ['local', 'name', 'rendering-intent'],
				defaults: {
					name: 'sRGB',
					"rendering-intent": 'auto'
				},
				contentGroups: ['descriptive']
			},
			cursor: {
				attrsGroups: ['core', 'conditionalProcessing', 'xlink'],
				attrs: ['externalResourcesRequired', 'x', 'y'],
				defaults: {
					x: '0',
					y: '0'
				},
				contentGroups: ['descriptive']
			},
			defs: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform'],
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			desc: {
				attrsGroups: ['core'],
				attrs: ['class', 'style']
			},
			ellipse: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'cx', 'cy', 'rx', 'ry'],
				defaults: {
					cx: '0',
					cy: '0'
				},
				contentGroups: ['animation', 'descriptive']
			},
			feBlend: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'in2', 'mode'],
				defaults: {
					mode: 'normal'
				},
				content: ['animate', 'set']
			},
			feColorMatrix: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'type', 'values'],
				defaults: {
					type: 'matrix'
				},
				content: ['animate', 'set']
			},
			feComponentTransfer: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in'],
				content: ['feFuncA', 'feFuncB', 'feFuncG', 'feFuncR']
			},
			feComposite: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'in2', 'operator', 'k1', 'k2', 'k3', 'k4'],
				defaults: {
					operator: 'over',
					k1: '0',
					k2: '0',
					k3: '0',
					k4: '0'
				},
				content: ['animate', 'set']
			},
			feConvolveMatrix: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'order', 'kernelMatrix', 'divisor', 'bias', 'targetX', 'targetY', 'edgeMode', 'kernelUnitLength', 'preserveAlpha'],
				defaults: {
					order: '3',
					bias: '0',
					edgeMode: 'duplicate',
					preserveAlpha: 'false'
				},
				content: ['animate', 'set']
			},
			feDiffuseLighting: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'surfaceScale', 'diffuseConstant', 'kernelUnitLength'],
				defaults: {
					surfaceScale: '1',
					diffuseConstant: '1'
				},
				contentGroups: ['descriptive'],
				content: ['feDistantLight', 'fePointLight', 'feSpotLight']
			},
			feDisplacementMap: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'in2', 'scale', 'xChannelSelector', 'yChannelSelector'],
				defaults: {
					scale: '0',
					xChannelSelector: 'A',
					yChannelSelector: 'A'
				},
				content: ['animate', 'set']
			},
			feDistantLight: {
				attrsGroups: ['core'],
				attrs: ['azimuth', 'elevation'],
				defaults: {
					azimuth: '0',
					elevation: '0'
				},
				content: ['animate', 'set']
			},
			feFlood: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style'],
				content: ['animate', 'animateColor', 'set']
			},
			feFuncA: {
				attrsGroups: ['core', 'transferFunction'],
				content: ['set', 'animate']
			},
			feFuncB: {
				attrsGroups: ['core', 'transferFunction'],
				content: ['set', 'animate']
			},
			feFuncG: {
				attrsGroups: ['core', 'transferFunction'],
				content: ['set', 'animate']
			},
			feFuncR: {
				attrsGroups: ['core', 'transferFunction'],
				content: ['set', 'animate']
			},
			feGaussianBlur: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'stdDeviation'],
				defaults: {
					stdDeviation: '0'
				},
				content: ['set', 'animate']
			},
			feImage: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'preserveAspectRatio', 'href', 'xlink:href'],
				defaults: {
					preserveAspectRatio: 'xMidYMid meet'
				},
				content: ['animate', 'animateTransform', 'set']
			},
			feMerge: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style'],
				content: ['feMergeNode']
			},
			feMergeNode: {
				attrsGroups: ['core'],
				attrs: ['in'],
				content: ['animate', 'set']
			},
			feMorphology: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'operator', 'radius'],
				defaults: {
					operator: 'erode',
					radius: '0'
				},
				content: ['animate', 'set']
			},
			feOffset: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'dx', 'dy'],
				defaults: {
					dx: '0',
					dy: '0'
				},
				content: ['animate', 'set']
			},
			fePointLight: {
				attrsGroups: ['core'],
				attrs: ['x', 'y', 'z'],
				defaults: {
					x: '0',
					y: '0',
					z: '0'
				},
				content: ['animate', 'set']
			},
			feSpecularLighting: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in', 'surfaceScale', 'specularConstant', 'specularExponent', 'kernelUnitLength'],
				defaults: {
					surfaceScale: '1',
					specularConstant: '1',
					specularExponent: '1'
				},
				contentGroups: ['descriptive', 'lightSource']
			},
			feSpotLight: {
				attrsGroups: ['core'],
				attrs: ['x', 'y', 'z', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'limitingConeAngle'],
				defaults: {
					x: '0',
					y: '0',
					z: '0',
					pointsAtX: '0',
					pointsAtY: '0',
					pointsAtZ: '0',
					specularExponent: '1'
				},
				content: ['animate', 'set']
			},
			feTile: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'in'],
				content: ['animate', 'set']
			},
			feTurbulence: {
				attrsGroups: ['core', 'presentation', 'filterPrimitive'],
				attrs: ['class', 'style', 'baseFrequency', 'numOctaves', 'seed', 'stitchTiles', 'type'],
				defaults: {
					baseFrequency: '0',
					numOctaves: '1',
					seed: '0',
					stitchTiles: 'noStitch',
					type: 'turbulence'
				},
				content: ['animate', 'set']
			},
			filter: {
				attrsGroups: ['core', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'x', 'y', 'width', 'height', 'filterRes', 'filterUnits', 'primitiveUnits', 'href', 'xlink:href'],
				defaults: {
					primitiveUnits: 'userSpaceOnUse',
					x: '-10%',
					y: '-10%',
					width: '120%',
					height: '120%'
				},
				contentGroups: ['descriptive', 'filterPrimitive'],
				content: ['animate', 'set']
			},
			font: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'horiz-origin-x', 'horiz-origin-y', 'horiz-adv-x', 'vert-origin-x', 'vert-origin-y', 'vert-adv-y'],
				defaults: {
					"horiz-origin-x": '0',
					"horiz-origin-y": '0'
				},
				contentGroups: ['descriptive'],
				content: ['font-face', 'glyph', 'hkern', 'missing-glyph', 'vkern']
			},
			"font-face": {
				attrsGroups: ['core'],
				attrs: ['font-family', 'font-style', 'font-variant', 'font-weight', 'font-stretch', 'font-size', 'unicode-range', 'units-per-em', 'panose-1', 'stemv', 'stemh', 'slope', 'cap-height', 'x-height', 'accent-height', 'ascent', 'descent', 'widths', 'bbox', 'ideographic', 'alphabetic', 'mathematical', 'hanging', 'v-ideographic', 'v-alphabetic', 'v-mathematical', 'v-hanging', 'underline-position', 'underline-thickness', 'strikethrough-position', 'strikethrough-thickness', 'overline-position', 'overline-thickness'],
				defaults: {
					"font-style": 'all',
					"font-variant": 'normal',
					"font-weight": 'all',
					"font-stretch": 'normal',
					"unicode-range": 'U+0-10FFFF',
					"units-per-em": '1000',
					"panose-1": '0 0 0 0 0 0 0 0 0 0',
					slope: '0'
				},
				contentGroups: ['descriptive'],
				content: ['font-face-src']
			},
			"font-face-format": {
				attrsGroups: ['core'],
				attrs: ['string']
			},
			"font-face-name": {
				attrsGroups: ['core'],
				attrs: ['name']
			},
			"font-face-src": {
				attrsGroups: ['core'],
				content: ['font-face-name', 'font-face-uri']
			},
			"font-face-uri": {
				attrsGroups: ['core', 'xlink'],
				attrs: ['href', 'xlink:href'],
				content: ['font-face-format']
			},
			foreignObject: {
				attrsGroups: ['core', 'conditionalProcessing', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'x', 'y', 'width', 'height'],
				defaults: {
					x: 0,
					y: 0
				}
			},
			g: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform'],
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			glyph: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style', 'd', 'horiz-adv-x', 'vert-origin-x', 'vert-origin-y', 'vert-adv-y', 'unicode', 'glyph-name', 'orientation', 'arabic-form', 'lang'],
				defaults: {
					"arabic-form": 'initial'
				},
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			glyphRef: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style', 'd', 'horiz-adv-x', 'vert-origin-x', 'vert-origin-y', 'vert-adv-y'],
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			hatch: {
				attrsGroups: ['core', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'x', 'y', 'pitch', 'rotate', 'hatchUnits', 'hatchContentUnits', 'transform'],
				defaults: {
					hatchUnits: 'objectBoundingBox',
					hatchContentUnits: 'userSpaceOnUse',
					x: '0',
					y: '0',
					pitch: '0',
					rotate: '0'
				},
				contentGroups: ['animation', 'descriptive'],
				content: ['hatchPath']
			},
			hatchPath: {
				attrsGroups: ['core', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'd', 'offset'],
				defaults: {
					offset: '0'
				},
				contentGroups: ['animation', 'descriptive']
			},
			hkern: {
				attrsGroups: ['core'],
				attrs: ['u1', 'g1', 'u2', 'g2', 'k']
			},
			image: {
				attrsGroups: ['core', 'conditionalProcessing', 'graphicalEvent', 'xlink', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'preserveAspectRatio', 'transform', 'x', 'y', 'width', 'height', 'href', 'xlink:href'],
				defaults: {
					x: '0',
					y: '0',
					preserveAspectRatio: 'xMidYMid meet'
				},
				contentGroups: ['animation', 'descriptive']
			},
			line: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'x1', 'y1', 'x2', 'y2'],
				defaults: {
					x1: '0',
					y1: '0',
					x2: '0',
					y2: '0'
				},
				contentGroups: ['animation', 'descriptive']
			},
			linearGradient: {
				attrsGroups: ['core', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'x1', 'y1', 'x2', 'y2', 'gradientUnits', 'gradientTransform', 'spreadMethod', 'href', 'xlink:href'],
				defaults: {
					x1: '0',
					y1: '0',
					x2: '100%',
					y2: '0',
					spreadMethod: 'pad'
				},
				contentGroups: ['descriptive'],
				content: ['animate', 'animateTransform', 'set', 'stop']
			},
			marker: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'viewBox', 'preserveAspectRatio', 'refX', 'refY', 'markerUnits', 'markerWidth', 'markerHeight', 'orient'],
				defaults: {
					markerUnits: 'strokeWidth',
					refX: '0',
					refY: '0',
					markerWidth: '3',
					markerHeight: '3'
				},
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			mask: {
				attrsGroups: ['conditionalProcessing', 'core', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'x', 'y', 'width', 'height', 'maskUnits', 'maskContentUnits'],
				defaults: {
					maskUnits: 'objectBoundingBox',
					maskContentUnits: 'userSpaceOnUse',
					x: '-10%',
					y: '-10%',
					width: '120%',
					height: '120%'
				},
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			metadata: {
				attrsGroups: ['core']
			},
			"missing-glyph": {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style', 'd', 'horiz-adv-x', 'vert-origin-x', 'vert-origin-y', 'vert-adv-y'],
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			mpath: {
				attrsGroups: ['core', 'xlink'],
				attrs: ['externalResourcesRequired', 'href', 'xlink:href'],
				contentGroups: ['descriptive']
			},
			path: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'd', 'pathLength'],
				contentGroups: ['animation', 'descriptive']
			},
			pattern: {
				attrsGroups: ['conditionalProcessing', 'core', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'viewBox', 'preserveAspectRatio', 'x', 'y', 'width', 'height', 'patternUnits', 'patternContentUnits', 'patternTransform', 'href', 'xlink:href'],
				defaults: {
					patternUnits: 'objectBoundingBox',
					patternContentUnits: 'userSpaceOnUse',
					x: '0',
					y: '0',
					width: '0',
					height: '0',
					preserveAspectRatio: 'xMidYMid meet'
				},
				contentGroups: ['animation', 'descriptive', 'paintServer', 'shape', 'structural'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			polygon: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'points'],
				contentGroups: ['animation', 'descriptive']
			},
			polyline: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'points'],
				contentGroups: ['animation', 'descriptive']
			},
			radialGradient: {
				attrsGroups: ['core', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'cx', 'cy', 'r', 'fx', 'fy', 'fr', 'gradientUnits', 'gradientTransform', 'spreadMethod', 'href', 'xlink:href'],
				defaults: {
					gradientUnits: 'objectBoundingBox',
					cx: '50%',
					cy: '50%',
					r: '50%'
				},
				contentGroups: ['descriptive'],
				content: ['animate', 'animateTransform', 'set', 'stop']
			},
			meshGradient: {
				attrsGroups: ['core', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'x', 'y', 'gradientUnits', 'transform'],
				contentGroups: ['descriptive', 'paintServer', 'animation'],
				content: ['meshRow']
			},
			meshRow: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style'],
				contentGroups: ['descriptive'],
				content: ['meshPatch']
			},
			meshPatch: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style'],
				contentGroups: ['descriptive'],
				content: ['stop']
			},
			rect: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'x', 'y', 'width', 'height', 'rx', 'ry'],
				defaults: {
					x: '0',
					y: '0'
				},
				contentGroups: ['animation', 'descriptive']
			},
			script: {
				attrsGroups: ['core', 'xlink'],
				attrs: ['externalResourcesRequired', 'type', 'href', 'xlink:href']
			},
			set: {
				attrsGroups: ['conditionalProcessing', 'core', 'animation', 'xlink', 'animationAttributeTarget', 'animationTiming'],
				attrs: ['externalResourcesRequired', 'to'],
				contentGroups: ['descriptive']
			},
			solidColor: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style'],
				contentGroups: ['paintServer']
			},
			stop: {
				attrsGroups: ['core', 'presentation'],
				attrs: ['class', 'style', 'offset', 'path'],
				content: ['animate', 'animateColor', 'set']
			},
			style: {
				attrsGroups: ['core'],
				attrs: ['type', 'media', 'title'],
				defaults: {
					type: 'text/css'
				}
			},
			svg: {
				attrsGroups: ['conditionalProcessing', 'core', 'documentEvent', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'x', 'y', 'width', 'height', 'viewBox', 'preserveAspectRatio', 'zoomAndPan', 'version', 'baseProfile', 'contentScriptType', 'contentStyleType'],
				defaults: {
					x: '0',
					y: '0',
					width: '100%',
					height: '100%',
					preserveAspectRatio: 'xMidYMid meet',
					zoomAndPan: 'magnify',
					version: '1.1',
					baseProfile: 'none',
					contentScriptType: 'application/ecmascript',
					contentStyleType: 'text/css'
				},
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			switch: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform'],
				contentGroups: ['animation', 'descriptive', 'shape'],
				content: ['a', 'foreignObject', 'g', 'image', 'svg', 'switch', 'text', 'use']
			},
			symbol: {
				attrsGroups: ['core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'preserveAspectRatio', 'viewBox', 'refX', 'refY'],
				defaults: {
					refX: 0,
					refY: 0
				},
				contentGroups: ['animation', 'descriptive', 'shape', 'structural', 'paintServer'],
				content: ['a', 'altGlyphDef', 'clipPath', 'color-profile', 'cursor', 'filter', 'font', 'font-face', 'foreignObject', 'image', 'marker', 'mask', 'pattern', 'script', 'style', 'switch', 'text', 'view']
			},
			text: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'lengthAdjust', 'x', 'y', 'dx', 'dy', 'rotate', 'textLength'],
				defaults: {
					x: '0',
					y: '0',
					lengthAdjust: 'spacing'
				},
				contentGroups: ['animation', 'descriptive', 'textContentChild'],
				content: ['a']
			},
			textPath: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'href', 'xlink:href', 'startOffset', 'method', 'spacing', 'd'],
				defaults: {
					startOffset: '0',
					method: 'align',
					spacing: 'exact'
				},
				contentGroups: ['descriptive'],
				content: ['a', 'altGlyph', 'animate', 'animateColor', 'set', 'tref', 'tspan']
			},
			title: {
				attrsGroups: ['core'],
				attrs: ['class', 'style']
			},
			tref: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'href', 'xlink:href'],
				contentGroups: ['descriptive'],
				content: ['animate', 'animateColor', 'set']
			},
			tspan: {
				attrsGroups: ['conditionalProcessing', 'core', 'graphicalEvent', 'presentation'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'x', 'y', 'dx', 'dy', 'rotate', 'textLength', 'lengthAdjust'],
				contentGroups: ['descriptive'],
				content: ['a', 'altGlyph', 'animate', 'animateColor', 'set', 'tref', 'tspan']
			},
			use: {
				attrsGroups: ['core', 'conditionalProcessing', 'graphicalEvent', 'presentation', 'xlink'],
				attrs: ['class', 'style', 'externalResourcesRequired', 'transform', 'x', 'y', 'width', 'height', 'href', 'xlink:href'],
				defaults: {
					x: '0',
					y: '0'
				},
				contentGroups: ['animation', 'descriptive']
			},
			view: {
				attrsGroups: ['core'],
				attrs: ['externalResourcesRequired', 'viewBox', 'preserveAspectRatio', 'zoomAndPan', 'viewTarget'],
				contentGroups: ['descriptive']
			},
			vkern: {
				attrsGroups: ['core'],
				attrs: ['u1', 'g1', 'u2', 'g2', 'k']
			}
		},
		editorNamespaces: ['http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd', 'http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd', 'http://www.inkscape.org/namespaces/inkscape', 'http://www.bohemiancoding.com/sketch/ns', 'http://ns.adobe.com/AdobeIllustrator/10.0/', 'http://ns.adobe.com/Graphs/1.0/', 'http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/', 'http://ns.adobe.com/Variables/1.0/', 'http://ns.adobe.com/SaveForWeb/1.0/', 'http://ns.adobe.com/Extensibility/1.0/', 'http://ns.adobe.com/Flows/1.0/', 'http://ns.adobe.com/ImageReplacement/1.0/', 'http://ns.adobe.com/GenericCustomNamespace/1.0/', 'http://ns.adobe.com/XPath/1.0/'],
		referencesProps: ['clip-path', 'color-profile', 'fill', 'filter', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke', 'style'],
		inheritableAttrs: ['clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cursor', 'direction', 'fill', 'fill-opacity', 'fill-rule', 'font', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'image-rendering', 'kerning', 'letter-spacing', 'marker', 'marker-end', 'marker-mid', 'marker-start', 'pointer-events', 'shape-rendering', 'stroke', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-rendering', 'transform', 'visibility', 'white-space', 'word-spacing', 'writing-mode'],
		colorsNames: {
			aliceblue: '#f0f8ff',
			antiquewhite: '#faebd7',
			aqua: '#0ff',
			aquamarine: '#7fffd4',
			azure: '#f0ffff',
			beige: '#f5f5dc',
			bisque: '#ffe4c4',
			black: '#000',
			blanchedalmond: '#ffebcd',
			blue: '#00f',
			blueviolet: '#8a2be2',
			brown: '#a52a2a',
			burlywood: '#deb887',
			cadetblue: '#5f9ea0',
			chartreuse: '#7fff00',
			chocolate: '#d2691e',
			coral: '#ff7f50',
			cornflowerblue: '#6495ed',
			cornsilk: '#fff8dc',
			crimson: '#dc143c',
			cyan: '#0ff',
			darkblue: '#00008b',
			darkcyan: '#008b8b',
			darkgoldenrod: '#b8860b',
			darkgray: '#a9a9a9',
			darkgreen: '#006400',
			darkgrey: '#a9a9a9',
			darkkhaki: '#bdb76b',
			darkmagenta: '#8b008b',
			darkolivegreen: '#556b2f',
			darkorange: '#ff8c00',
			darkorchid: '#9932cc',
			darkred: '#8b0000',
			darksalmon: '#e9967a',
			darkseagreen: '#8fbc8f',
			darkslateblue: '#483d8b',
			darkslategray: '#2f4f4f',
			darkslategrey: '#2f4f4f',
			darkturquoise: '#00ced1',
			darkviolet: '#9400d3',
			deeppink: '#ff1493',
			deepskyblue: '#00bfff',
			dimgray: '#696969',
			dimgrey: '#696969',
			dodgerblue: '#1e90ff',
			firebrick: '#b22222',
			floralwhite: '#fffaf0',
			forestgreen: '#228b22',
			fuchsia: '#f0f',
			gainsboro: '#dcdcdc',
			ghostwhite: '#f8f8ff',
			gold: '#ffd700',
			goldenrod: '#daa520',
			gray: '#808080',
			green: '#008000',
			greenyellow: '#adff2f',
			grey: '#808080',
			honeydew: '#f0fff0',
			hotpink: '#ff69b4',
			indianred: '#cd5c5c',
			indigo: '#4b0082',
			ivory: '#fffff0',
			khaki: '#f0e68c',
			lavender: '#e6e6fa',
			lavenderblush: '#fff0f5',
			lawngreen: '#7cfc00',
			lemonchiffon: '#fffacd',
			lightblue: '#add8e6',
			lightcoral: '#f08080',
			lightcyan: '#e0ffff',
			lightgoldenrodyellow: '#fafad2',
			lightgray: '#d3d3d3',
			lightgreen: '#90ee90',
			lightgrey: '#d3d3d3',
			lightpink: '#ffb6c1',
			lightsalmon: '#ffa07a',
			lightseagreen: '#20b2aa',
			lightskyblue: '#87cefa',
			lightslategray: '#789',
			lightslategrey: '#789',
			lightsteelblue: '#b0c4de',
			lightyellow: '#ffffe0',
			lime: '#0f0',
			limegreen: '#32cd32',
			linen: '#faf0e6',
			magenta: '#f0f',
			maroon: '#800000',
			mediumaquamarine: '#66cdaa',
			mediumblue: '#0000cd',
			mediumorchid: '#ba55d3',
			mediumpurple: '#9370db',
			mediumseagreen: '#3cb371',
			mediumslateblue: '#7b68ee',
			mediumspringgreen: '#00fa9a',
			mediumturquoise: '#48d1cc',
			mediumvioletred: '#c71585',
			midnightblue: '#191970',
			mintcream: '#f5fffa',
			mistyrose: '#ffe4e1',
			moccasin: '#ffe4b5',
			navajowhite: '#ffdead',
			navy: '#000080',
			oldlace: '#fdf5e6',
			olive: '#808000',
			olivedrab: '#6b8e23',
			orange: '#ffa500',
			orangered: '#ff4500',
			orchid: '#da70d6',
			palegoldenrod: '#eee8aa',
			palegreen: '#98fb98',
			paleturquoise: '#afeeee',
			palevioletred: '#db7093',
			papayawhip: '#ffefd5',
			peachpuff: '#ffdab9',
			peru: '#cd853f',
			pink: '#ffc0cb',
			plum: '#dda0dd',
			powderblue: '#b0e0e6',
			purple: '#800080',
			rebeccapurple: '#639',
			red: '#f00',
			rosybrown: '#bc8f8f',
			royalblue: '#4169e1',
			saddlebrown: '#8b4513',
			salmon: '#fa8072',
			sandybrown: '#f4a460',
			seagreen: '#2e8b57',
			seashell: '#fff5ee',
			sienna: '#a0522d',
			silver: '#c0c0c0',
			skyblue: '#87ceeb',
			slateblue: '#6a5acd',
			slategray: '#708090',
			slategrey: '#708090',
			snow: '#fffafa',
			springgreen: '#00ff7f',
			steelblue: '#4682b4',
			tan: '#d2b48c',
			teal: '#008080',
			thistle: '#d8bfd8',
			tomato: '#ff6347',
			turquoise: '#40e0d0',
			violet: '#ee82ee',
			wheat: '#f5deb3',
			white: '#fff',
			whitesmoke: '#f5f5f5',
			yellow: '#ff0',
			yellowgreen: '#9acd32'
		},
		colorsShortNames: {
			"#f0ffff": 'azure',
			"#f5f5dc": 'beige',
			"#ffe4c4": 'bisque',
			"#a52a2a": 'brown',
			"#ff7f50": 'coral',
			"#ffd700": 'gold',
			"#808080": 'gray',
			"#008000": 'green',
			"#4b0082": 'indigo',
			"#fffff0": 'ivory',
			"#f0e68c": 'khaki',
			"#faf0e6": 'linen',
			"#800000": 'maroon',
			"#000080": 'navy',
			"#808000": 'olive',
			"#ffa500": 'orange',
			"#da70d6": 'orchid',
			"#cd853f": 'peru',
			"#ffc0cb": 'pink',
			"#dda0dd": 'plum',
			"#800080": 'purple',
			"#f00": 'red',
			"#ff0000": 'red',
			"#fa8072": 'salmon',
			"#a0522d": 'sienna',
			"#c0c0c0": 'silver',
			"#fffafa": 'snow',
			"#d2b48c": 'tan',
			"#008080": 'teal',
			"#ff6347": 'tomato',
			"#ee82ee": 'violet',
			"#f5deb3": 'wheat'
		},
		colorsProps: ['color', 'fill', 'stroke', 'stop-color', 'flood-color', 'lighting-color']
	};
	var Ype = (Fpe && Wpe || Fpe).EOL,
		$pe = Hpe.elemsGroups.textContent.concat('title'),
		Kpe = {
			doctypeStart: '<!DOCTYPE',
			doctypeEnd: '>',
			procInstStart: '<?',
			procInstEnd: '?>',
			tagOpenStart: '<',
			tagOpenEnd: '>',
			tagCloseStart: '</',
			tagCloseEnd: '>',
			tagShortStart: '<',
			tagShortEnd: '/>',
			attrStart: '="',
			attrEnd: '"',
			commentStart: '<!--',
			commentEnd: '-->',
			cdataStart: '<![CDATA[',
			cdataEnd: ']]>',
			textStart: '',
			textEnd: '',
			indent: 4,
			regEntities: /[&'"<>]/g,
			regValEntities: /[&"<>]/g,
			encodeEntity: function(e) {
				return Xpe[e]
			},
			pretty: !1,
			useShortTags: !0
		},
		Xpe = {
			"&": '&amp;',
			"'": '&apos;',
			'"': '&quot;',
			">": '&gt;',
			"<": '&lt;'
		},
		Qpe = function(e, t) {
			return new _o(t).convert(e)
		};
	_o.prototype.convert = function(e) {
		var t = '';
		return e.content && (this.indentLevel++, e.content.forEach(function(e) {
			e.elem ? t += this.createElem(e) : e.text ? t += this.createText(e.text) : e.doctype ? t += this.createDoctype(e.doctype) : e.processinginstruction ? t += this.createProcInst(e.processinginstruction) : e.comment ? t += this.createComment(e.comment) : e.cdata && (t += this.createCDATA(e.cdata))
		}, this)), this.indentLevel--, {
			data: t,
			info: {
				width: this.width,
				height: this.height
			}
		}
	}, _o.prototype.createIndent = function() {
		var e = '';
		return this.config.pretty && !this.textContext && (e = this.config.indent.repeat(this.indentLevel - 1)), e
	}, _o.prototype.createDoctype = function(e) {
		return this.config.doctypeStart + e + this.config.doctypeEnd
	}, _o.prototype.createProcInst = function(e) {
		return this.config.procInstStart + e.name + ' ' + e.body + this.config.procInstEnd
	}, _o.prototype.createComment = function(e) {
		return this.config.commentStart + e + this.config.commentEnd
	}, _o.prototype.createCDATA = function(e) {
		return this.createIndent() + this.config.cdataStart + e + this.config.cdataEnd
	}, _o.prototype.createElem = function(e) {
		if (e.isElem('svg') && e.hasAttr('width') && e.hasAttr('height') && (this.width = e.attr('width').value, this.height = e.attr('height').value), e.isEmpty()) return this.config.useShortTags ? this.createIndent() + this.config.tagShortStart + e.elem + this.createAttrs(e) + this.config.tagShortEnd : this.createIndent() + this.config.tagShortStart + e.elem + this.createAttrs(e) + this.config.tagOpenEnd + this.config.tagCloseStart + e.elem + this.config.tagCloseEnd;
		var t = this.config.tagOpenStart,
			n = this.config.tagOpenEnd,
			r = this.config.tagCloseStart,
			a = this.config.tagCloseEnd,
			o = this.createIndent(),
			i = '',
			s = '',
			l = '';
		return this.textContext ? (t = Kpe.tagOpenStart, n = Kpe.tagOpenEnd, r = Kpe.tagCloseStart, a = Kpe.tagCloseEnd, o = '') : e.isElem($pe) && (this.config.pretty && (i += o + this.config.indent), this.textContext = e), s += this.convert(e).data, this.textContext == e && (this.textContext = null, this.config.pretty && (l = Ype)), o + t + e.elem + this.createAttrs(e) + n + i + s + l + this.createIndent() + r + e.elem + a
	}, _o.prototype.createAttrs = function(e) {
		var t = '';
		return e.eachAttr(function(e) {
			t += void 0 === e.value ? ' ' + e.name : ' ' + e.name + this.config.attrStart + (e.value + '').replace(this.config.regValEntities, this.config.encodeEntity) + this.config.attrEnd
		}, this), t
	}, _o.prototype.createText = function(e) {
		return this.createIndent() + this.config.textStart + e.replace(this.config.regEntities, this.config.encodeEntity) + (this.textContext ? '' : this.config.textEnd)
	}, 'use strict';
	var Zpe = function(e, t, n) {
		return n.forEach(function(n) {
			switch (n[0].type) {
				case 'perItem':
					e = Mo(e, t, n);
					break;
				case 'perItemReverse':
					e = Mo(e, t, n, !0);
					break;
				case 'full':
					e = Go(e, t, n);
			}
		}), e
	};
	var Jpe = Hpe.editorNamespaces,
		eue = [];
	var tue = /(\S)\r?\n(\S)/g,
		nue = /\r?\n/g,
		rue = /\s{2,}/g;
	var aue = null,
		oue = function() {
			this.cursor = null, this.head = null, this.tail = null
		};
	oue.createItem = Uo, oue.prototype.createItem = Uo, oue.prototype.updateCursors = function(e, t, n, r) {
		for (var a = this.cursor; null !== a;) a.prev === e && (a.prev = t), a.next === n && (a.next = r), a = a.cursor
	}, oue.prototype.getSize = function() {
		for (var e = 0, t = this.head; t;) e++, t = t.next;
		return e
	}, oue.prototype.fromArray = function(e) {
		var t = null;
		this.head = null;
		for (var n = 0, r; n < e.length; n++) r = Uo(e[n]), null == t ? this.head = r : t.next = r, r.prev = t, t = r;
		return this.tail = t, this
	}, oue.prototype.toArray = function() {
		for (var e = this.head, t = []; e;) t.push(e.data), e = e.next;
		return t
	}, oue.prototype.toJSON = oue.prototype.toArray, oue.prototype.isEmpty = function() {
		return null === this.head
	}, oue.prototype.first = function() {
		return this.head && this.head.data
	}, oue.prototype.last = function() {
		return this.tail && this.tail.data
	}, oue.prototype.each = function(e, t) {
		var n;
		void 0 === t && (t = this);
		for (var r = Vo(this, null, this.head); null !== r.next;) n = r.next, r.next = n.next, e.call(t, n.data, n, this);
		Wo(this)
	}, oue.prototype.forEach = oue.prototype.each, oue.prototype.eachRight = function(e, t) {
		var n;
		void 0 === t && (t = this);
		for (var r = Vo(this, this.tail, null); null !== r.prev;) n = r.prev, r.prev = n.prev, e.call(t, n.data, n, this);
		Wo(this)
	}, oue.prototype.forEachRight = oue.prototype.eachRight, oue.prototype.nextUntil = function(e, t, n) {
		if (null !== e) {
			var r;
			void 0 === n && (n = this);
			for (var a = Vo(this, null, e); null !== a.next && (r = a.next, a.next = r.next, !t.call(n, r.data, r, this)););
			Wo(this)
		}
	}, oue.prototype.prevUntil = function(e, t, n) {
		if (null !== e) {
			var r;
			void 0 === n && (n = this);
			for (var a = Vo(this, e, null); null !== a.prev && (r = a.prev, a.prev = r.prev, !t.call(n, r.data, r, this)););
			Wo(this)
		}
	}, oue.prototype.some = function(e, t) {
		var n = this.head;
		for (void 0 === t && (t = this); null !== n;) {
			if (e.call(t, n.data, n, this)) return !0;
			n = n.next
		}
		return !1
	}, oue.prototype.map = function(e, t) {
		var n = new oue,
			r = this.head;
		for (void 0 === t && (t = this); null !== r;) n.appendData(e.call(t, r.data, r, this)), r = r.next;
		return n
	}, oue.prototype.filter = function(e, t) {
		var n = new oue,
			r = this.head;
		for (void 0 === t && (t = this); null !== r;) e.call(t, r.data, r, this) && n.appendData(r.data), r = r.next;
		return n
	}, oue.prototype.clear = function() {
		this.head = null, this.tail = null
	}, oue.prototype.copy = function() {
		for (var e = new oue, t = this.head; null !== t;) e.insert(Uo(t.data)), t = t.next;
		return e
	}, oue.prototype.prepend = function(e) {
		return this.updateCursors(null, e, this.head, e), null === this.head ? this.tail = e : (this.head.prev = e, e.next = this.head), this.head = e, this
	}, oue.prototype.prependData = function(e) {
		return this.prepend(Uo(e))
	}, oue.prototype.append = function(e) {
		return this.insert(e)
	}, oue.prototype.appendData = function(e) {
		return this.insert(Uo(e))
	}, oue.prototype.insert = function(e, t) {
		if (void 0 === t || null === t) this.updateCursors(this.tail, e, null, e), null === this.tail ? this.head = e : (this.tail.next = e, e.prev = this.tail), this.tail = e;
		else if (this.updateCursors(t.prev, e, t, e), null === t.prev) {
			if (this.head !== t) throw new Error('before doesn\'t belong to list');
			this.head = e, t.prev = e, e.next = t, this.updateCursors(null, e)
		} else t.prev.next = e, e.prev = t.prev, t.prev = e, e.next = t;
		return this
	}, oue.prototype.insertData = function(e, t) {
		return this.insert(Uo(e), t)
	}, oue.prototype.remove = function(e) {
		if (this.updateCursors(e, e.prev, e, e.next), null !== e.prev) e.prev.next = e.next;
		else {
			if (this.head !== e) throw new Error('item doesn\'t belong to list');
			this.head = e.next
		}
		if (null !== e.next) e.next.prev = e.prev;
		else {
			if (this.tail !== e) throw new Error('item doesn\'t belong to list');
			this.tail = e.prev
		}
		return e.prev = null, e.next = null, e
	}, oue.prototype.push = function(e) {
		this.insert(Uo(e))
	}, oue.prototype.pop = function() {
		if (null !== this.tail) return this.remove(this.tail)
	}, oue.prototype.unshift = function(e) {
		this.prepend(Uo(e))
	}, oue.prototype.shift = function() {
		if (null !== this.head) return this.remove(this.head)
	}, oue.prototype.prependList = function(e) {
		return this.insertList(e, this.head)
	}, oue.prototype.appendList = function(e) {
		return this.insertList(e)
	}, oue.prototype.insertList = function(e, t) {
		return null === e.head ? this : (void 0 !== t && null !== t ? (this.updateCursors(t.prev, e.tail, t, e.head), null === t.prev ? this.head = e.head : (t.prev.next = e.head, e.head.prev = t.prev), t.prev = e.tail, e.tail.next = t) : (this.updateCursors(this.tail, e.tail, null, e.head), null === this.tail ? this.head = e.head : (this.tail.next = e.head, e.head.prev = this.tail), this.tail = e.tail), e.head = null, e.tail = null, this)
	}, oue.prototype.replace = function(e, t) {
		'head' in t ? this.insertList(t, e) : this.insert(t, e), this.remove(e)
	};
	var iue = oue,
		sue = function(e, t) {
			var n = Object.create(SyntaxError.prototype),
				r = new Error;
			return n.name = e, n.message = t, Object.defineProperty(n, 'stack', {
				get: function() {
					return (r.stack || '').replace(/^(.+\n){1,3}/, e + ': ' + t + '\n')
				}
			}), n
		};
	var lue = 100,
		due = 60,
		cue = '    ',
		pue = function(e, t, n, r, a) {
			var o = sue('CssSyntaxError', e);
			return o.source = t, o.offset = n, o.line = r, o.column = a, o.sourceFragment = function(e) {
				return Fo(o, isNaN(e) ? 0 : e)
			}, Object.defineProperty(o, 'formattedMessage', {
				get: function() {
					return 'Parse error: ' + o.message + '\n' + Fo(o, 2)
				}
			}), o.parseError = {
				offset: n,
				line: r,
				column: a
			}, o
		};
	for (var uue = 1, mue = 2, gue = 3, fue = 4, yue = 6, bue = 9, xue = 10, kue = 12, Sue = 13, wue = 32, vue = {
			WhiteSpace: uue,
			Identifier: mue,
			Number: gue,
			String: fue,
			Comment: 5,
			Punctuator: yue,
			CDO: 7,
			CDC: 8,
			AtKeyword: 14,
			Function: 15,
			Url: 16,
			Raw: 17,
			ExclamationMark: 33,
			QuotationMark: 34,
			NumberSign: 35,
			DollarSign: 36,
			PercentSign: 37,
			Ampersand: 38,
			Apostrophe: 39,
			LeftParenthesis: 40,
			RightParenthesis: 41,
			Asterisk: 42,
			PlusSign: 43,
			Comma: 44,
			HyphenMinus: 45,
			FullStop: 46,
			Solidus: 47,
			Colon: 58,
			Semicolon: 59,
			LessThanSign: 60,
			EqualsSign: 61,
			GreaterThanSign: 62,
			QuestionMark: 63,
			CommercialAt: 64,
			LeftSquareBracket: 91,
			Backslash: 92,
			RightSquareBracket: 93,
			CircumflexAccent: 94,
			LowLine: 95,
			GraveAccent: 96,
			LeftCurlyBracket: 123,
			VerticalLine: 124,
			RightCurlyBracket: 125,
			Tilde: 126
		}, Tue = Object.keys(vue).reduce(function(e, t) {
			return e[vue[t]] = t, e
		}, {}), Cue = 'undefined' == typeof Uint32Array ? Array : Uint32Array, Eue = new Cue(128), Aue = new Cue(128), Oue = new Cue(128), Pue = 0; Pue < Eue.length; Pue++) Eue[Pue] = mue;
	[vue.ExclamationMark, vue.QuotationMark, vue.NumberSign, vue.DollarSign, vue.PercentSign, vue.Ampersand, vue.Apostrophe, vue.LeftParenthesis, vue.RightParenthesis, vue.Asterisk, vue.PlusSign, vue.Comma, vue.HyphenMinus, vue.FullStop, vue.Solidus, vue.Colon, vue.Semicolon, vue.LessThanSign, vue.EqualsSign, vue.GreaterThanSign, vue.QuestionMark, vue.CommercialAt, vue.LeftSquareBracket, vue.RightSquareBracket, vue.CircumflexAccent, vue.GraveAccent, vue.LeftCurlyBracket, vue.VerticalLine, vue.RightCurlyBracket, vue.Tilde].forEach(function(e) {
		Eue[+e] = yue, Aue[+e] = yue
	});
	for (var Pue = 48; 57 >= Pue; Pue++) Eue[Pue] = gue;
	Eue[wue] = uue, Eue[bue] = uue, Eue[xue] = uue, Eue[Sue] = uue, Eue[kue] = uue, Eue[vue.Apostrophe] = fue, Eue[vue.QuotationMark] = fue, Oue[wue] = 1, Oue[bue] = 1, Oue[xue] = 1, Oue[Sue] = 1, Oue[kue] = 1, Oue[vue.Apostrophe] = 1, Oue[vue.QuotationMark] = 1, Oue[vue.LeftParenthesis] = 1, Oue[vue.RightParenthesis] = 1, Aue[wue] = yue, Aue[bue] = yue, Aue[xue] = yue, Aue[Sue] = yue, Aue[kue] = yue, Aue[vue.HyphenMinus] = 0;
	var Lue = {
		TYPE: vue,
		NAME: Tue,
		SYMBOL_TYPE: Eue,
		PUNCTUATION: Aue,
		STOP_URL_RAW: Oue
	};
	var que = Lue.PUNCTUATION,
		Rue = Lue.STOP_URL_RAW,
		Due = Lue.TYPE,
		Nue = Due.FullStop,
		Bue = Due.PlusSign,
		Iue = Due.HyphenMinus,
		zue = Due.Punctuator,
		_ue = 9,
		Mue = 10,
		Gue = 12,
		Uue = 13,
		Vue = 32,
		Wue = 92,
		Fue = {
			firstCharOffset: function(e) {
				return 65279 === e.charCodeAt(0) || 65534 === e.charCodeAt(0) ? 1 : 0
			},
			isHex: jo,
			isNumber: Ho,
			isWhiteSpace: Yo,
			isNewline: $o,
			getNewlineLength: Ko,
			cmpChar: function(e, t, n) {
				var r = e.charCodeAt(t);
				return 65 <= r && 90 >= r && (r |= 32), r === n
			},
			cmpStr: function(e, t, n, r) {
				if (n - t !== r.length) return !1;
				if (0 > t || n > e.length) return !1;
				for (var a = t; a < n; a++) {
					var o = e.charCodeAt(a),
						i = r.charCodeAt(a - t);
					if (65 <= o && 90 >= o && (o |= 32), o !== i) return !1
				}
				return !0
			},
			findWhiteSpaceStart: function(e, t) {
				for (; 0 <= t && Yo(e.charCodeAt(t));) t--;
				return t + 1
			},
			findWhiteSpaceEnd: function(e, t) {
				for (; t < e.length && Yo(e.charCodeAt(t));) t++;
				return t
			},
			findCommentEnd: function(e, t) {
				var n = e.indexOf('*/', t);
				return -1 === n ? e.length : n + 2
			},
			findStringEnd: function(e, t, n) {
				for (; t < e.length; t++) {
					var r = e.charCodeAt(t);
					if (r === Wue) t++;
					else if (r === n) {
						t++;
						break
					}
				}
				return t
			},
			findDecimalNumberEnd: Xo,
			findNumberEnd: function(e, t, n) {
				var r;
				return t = Xo(e, t), n && t + 1 < e.length && e.charCodeAt(t) === Nue && (r = e.charCodeAt(t + 1), Ho(r) && (t = Xo(e, t + 1))), t + 1 < e.length && (32 | e.charCodeAt(t)) == 101 && (r = e.charCodeAt(t + 1), (r === Bue || r === Iue) && t + 2 < e.length && (r = e.charCodeAt(t + 2)), Ho(r) && (t = Xo(e, t + 2))), t
			},
			findEscapeEnd: Qo,
			findIdentifierEnd: function(e, t) {
				for (; t < e.length; t++) {
					var n = e.charCodeAt(t);
					if (n === Wue) t = Qo(e, t + 1);
					else if (128 > n && que[n] === zue) break
				}
				return t
			},
			findUrlRawEnd: function(e, t) {
				for (; t < e.length; t++) {
					var n = e.charCodeAt(t);
					if (n === Wue) t = Qo(e, t + 1);
					else if (128 > n && 1 === Rue[n]) break
				}
				return t
			}
		};
	var jue = Lue.TYPE,
		Hue = Lue.NAME,
		Yue = Lue.SYMBOL_TYPE,
		$ue = Fue.firstCharOffset,
		Kue = Fue.cmpStr,
		Xue = Fue.isNumber,
		Que = Fue.findWhiteSpaceStart,
		Zue = Fue.findWhiteSpaceEnd,
		Jue = Fue.findCommentEnd,
		eme = Fue.findStringEnd,
		tme = Fue.findNumberEnd,
		nme = Fue.findIdentifierEnd,
		rme = Fue.findUrlRawEnd,
		ame = 0,
		ome = jue.WhiteSpace,
		ime = jue.Identifier,
		sme = jue.Number,
		lme = jue.String,
		dme = jue.Comment,
		cme = jue.Punctuator,
		pme = jue.CDO,
		ume = jue.CDC,
		mme = jue.AtKeyword,
		gme = jue.Function,
		hme = jue.Url,
		fme = jue.Raw,
		yme = 10,
		bme = 12,
		xme = 13,
		kme = jue.Asterisk,
		Sme = jue.Solidus,
		wme = jue.FullStop,
		vme = jue.PlusSign,
		Tme = jue.HyphenMinus,
		Cme = jue.GreaterThanSign,
		Eme = jue.LessThanSign,
		Ame = jue.ExclamationMark,
		Ome = jue.CommercialAt,
		Pme = jue.QuotationMark,
		Lme = jue.Apostrophe,
		qme = jue.LeftParenthesis,
		Rme = jue.RightParenthesis,
		Dme = jue.LeftCurlyBracket,
		Nme = jue.RightCurlyBracket,
		Bme = jue.LeftSquareBracket,
		Ime = jue.RightSquareBracket,
		zme = 16384,
		_me = 16777215,
		Mme = 24,
		Gme = 'undefined' == typeof Uint32Array ? Array : Uint32Array,
		Ume = function(e, t, n, r) {
			this.offsetAndType = null, this.balance = null, this.lines = null, this.columns = null, this.setSource(e, t, n, r)
		};
	Ume.prototype = {
		setSource: function(e, t, n, r) {
			var a = (e || '') + '',
				o = $ue(a);
			this.source = a, this.firstCharOffset = o, this.startOffset = 'undefined' == typeof t ? 0 : t, this.startLine = 'undefined' == typeof n ? 1 : n, this.startColumn = 'undefined' == typeof r ? 1 : r, this.linesAnsColumnsComputed = !1, this.eof = !1, this.currentToken = -1, this.tokenType = 0, this.tokenStart = o, this.tokenEnd = o, Jo(this, a, o), this.next()
		},
		lookupType: function(e) {
			return e += this.currentToken, e < this.tokenCount ? this.offsetAndType[e] >> Mme : ame
		},
		lookupNonWSType: function(e) {
			e += this.currentToken;
			for (var t; e < this.tokenCount; e++)
				if (t = this.offsetAndType[e] >> Mme, t !== ome) return t;
			return ame
		},
		lookupValue: function(e, t) {
			return e += this.currentToken, !!(e < this.tokenCount) && Kue(this.source, this.offsetAndType[e - 1] & _me, this.offsetAndType[e] & _me, t)
		},
		getTokenStart: function(e) {
			return e === this.currentToken ? this.tokenStart : 0 < e ? e < this.tokenCount ? this.offsetAndType[e - 1] & _me : this.offsetAndType[this.tokenCount] & _me : this.firstCharOffset
		},
		getOffsetExcludeWS: function() {
			return 0 < this.currentToken && this.offsetAndType[this.currentToken - 1] >> Mme === ome ? 1 < this.currentToken ? this.offsetAndType[this.currentToken - 2] & _me : this.firstCharOffset : this.tokenStart
		},
		getRawLength: function(e, t, n, r) {
			var a = e,
				o;
			loop: for (; a < this.tokenCount; a++) {
				if (o = this.balance[a], o < e) break loop;
				switch (this.offsetAndType[a] >> Mme) {
					case t:
						break loop;
					case n:
						r && a++;
						break loop;
					default:
						this.balance[o] === a && (a = o);
				}
			}
			return a - this.currentToken
		},
		isBalanceEdge: function(e) {
			var t = this.balance[this.currentToken];
			return t < e
		},
		getTokenValue: function() {
			return this.source.substring(this.tokenStart, this.tokenEnd)
		},
		substrToCursor: function(e) {
			return this.source.substring(e, this.tokenStart)
		},
		skipWS: function() {
			for (var e = this.currentToken, t = 0; e < this.tokenCount && this.offsetAndType[e] >> Mme === ome; e++, t++);
			0 < t && this.skip(t)
		},
		skipSC: function() {
			for (; this.tokenType === ome || this.tokenType === dme;) this.next()
		},
		skip: function(e) {
			var t = this.currentToken + e;
			t < this.tokenCount ? (this.currentToken = t, this.tokenStart = this.offsetAndType[t - 1] & _me, t = this.offsetAndType[t], this.tokenType = t >> Mme, this.tokenEnd = t & _me) : (this.currentToken = this.tokenCount, this.next())
		},
		next: function() {
			var e = this.currentToken + 1;
			e < this.tokenCount ? (this.currentToken = e, this.tokenStart = this.tokenEnd, e = this.offsetAndType[e], this.tokenType = e >> Mme, this.tokenEnd = e & _me) : (this.currentToken = this.tokenCount, this.eof = !0, this.tokenType = ame, this.tokenStart = this.tokenEnd = this.source.length)
		},
		eat: function(e) {
			if (this.tokenType !== e) {
				var t = this.tokenStart,
					n = Hue[e] + ' is expected';
				e === ime ? (this.tokenType === gme || this.tokenType === hme) && (t = this.tokenEnd - 1, n += ' but function found') : this.source.charCodeAt(this.tokenStart) === e && ++t, this.error(n, t)
			}
			this.next()
		},
		eatNonWS: function(e) {
			this.skipWS(), this.eat(e)
		},
		consume: function(e) {
			var t = this.getTokenValue();
			return this.eat(e), t
		},
		consumeFunctionName: function() {
			var e = this.source.substring(this.tokenStart, this.tokenEnd - 1);
			return this.eat(gme), e
		},
		consumeNonWS: function(e) {
			return this.skipWS(), this.consume(e)
		},
		expectIdentifier: function(e) {
			(this.tokenType !== ime || !1 === Kue(this.source, this.tokenStart, this.tokenEnd, e)) && this.error('Identifier `' + e + '` is expected'), this.next()
		},
		getLocation: function(e, t) {
			return this.linesAnsColumnsComputed || Zo(this, this.source), {
				source: t,
				offset: this.startOffset + e,
				line: this.lines[e],
				column: this.columns[e]
			}
		},
		getLocationRange: function(e, t, n) {
			return this.linesAnsColumnsComputed || Zo(this, this.source), {
				source: n,
				start: {
					offset: this.startOffset + e,
					line: this.lines[e],
					column: this.columns[e]
				},
				end: {
					offset: this.startOffset + t,
					line: this.lines[t],
					column: this.columns[t]
				}
			}
		},
		error: function(e, t) {
			var n = 'undefined' != typeof t && t < this.source.length ? this.getLocation(t) : this.eof ? this.getLocation(Que(this.source, this.source.length - 1)) : this.getLocation(this.tokenStart);
			throw new pue(e || 'Unexpected input', this.source, n.offset, n.line, n.column)
		},
		dump: function() {
			var e = 0;
			return Array.prototype.slice.call(this.offsetAndType, 0, this.tokenCount).map(function(t, n) {
				var r = e,
					a = t & _me;
				return e = a, {
					idx: n,
					type: Hue[t >> Mme],
					chunk: this.source.substring(r, a),
					balance: this.balance[n]
				}
			}, this)
		}
	}, Ume.CssSyntaxError = pue, Object.keys(Lue).forEach(function(e) {
		Ume[e] = Lue[e]
	}), Object.keys(Fue).forEach(function(e) {
		Ume[e] = Fue[e]
	}), new Ume('\n\r\r\n\f<!---->//""\'\'/*\r\n\f*/1a;.\\31\t+2{url(a);func();+1.2e3 -.4e-5 .6e+7}').getLocation();
	var Vme = Ume,
		Wme = function(e, t) {
			var n = ei,
				r = !1;
			return 'function' == typeof t ? n = t : t && (r = !!t.forceBraces, 'function' == typeof t.decorate && (n = t.decorate)), ai(e, r, n)
		};
	var Fme = {
		SyntaxReferenceError: function(e, t) {
			var n = sue('SyntaxReferenceError', e + (t ? ' `' + t + '`' : ''));
			return n.reference = t, n
		},
		MatchError: function(e, t, n, r, a) {
			var o = sue('SyntaxMatchError', e),
				i = oi(a),
				s = i.mismatchOffset || 0,
				l = i.node || r,
				d = si(l, 'end'),
				c = i.last ? d : si(l, 'start'),
				p = i.css;
			return o.rawMessage = e, o.syntax = n ? Wme(n) : '<generic>', o.css = p, o.mismatchOffset = s, o.loc = {
				source: l && l.loc && l.loc.source || '<unknown>',
				start: c,
				end: d
			}, o.line = c ? c.line : void 0, o.column = c ? c.column : void 0, o.offset = c ? c.offset : void 0, o.message = e + '\n  syntax: ' + o.syntax + '\n   value: ' + (o.css || '<empty string>') + '\n  --------' + Array(o.mismatchOffset + 1).join('-') + '^', o
		}
	};
	var jme = Object.prototype.hasOwnProperty,
		Hme = Object.create(null),
		Yme = Object.create(null),
		$me = 45,
		Kme = {
			keyword: function(e) {
				if (jme.call(Hme, e)) return Hme[e];
				var t = e.toLowerCase();
				if (jme.call(Hme, t)) return Hme[e] = Hme[t];
				var n = li(t, 0),
					r = n ? '' : di(t, 0);
				return Hme[e] = Object.freeze({
					basename: t.substr(r.length),
					name: t,
					vendor: r,
					prefix: r,
					custom: n
				})
			},
			property: function(e) {
				if (jme.call(Yme, e)) return Yme[e];
				var t = e,
					n = e[0];
				'/' === n ? n = '/' === e[1] ? '//' : '/' : '_' !== n && '*' !== n && '$' !== n && '#' !== n && '+' !== n && (n = '');
				var r = li(t, n.length);
				if (!r && (t = t.toLowerCase(), jme.call(Yme, t))) return Yme[e] = Yme[t];
				var a = r ? '' : di(t, n.length),
					o = t.substr(0, n.length + a.length);
				return Yme[e] = Object.freeze({
					basename: t.substr(o.length),
					name: t.substr(n.length),
					hack: n,
					vendor: a,
					prefix: o,
					custom: r
				})
			},
			isCustomProperty: li,
			vendorPrefix: di
		},
		Xme = Fue.findIdentifierEnd,
		Qme = Fue.findNumberEnd,
		Zme = Fue.findDecimalNumberEnd,
		Jme = Fue.isHex,
		ege = Lue.SYMBOL_TYPE,
		tge = Lue.TYPE.Identifier,
		rge = Lue.TYPE.PlusSign,
		age = Lue.TYPE.HyphenMinus,
		oge = Lue.TYPE.NumberSign,
		ige = {
			angle: bi({
				deg: !0,
				grad: !0,
				rad: !0,
				turn: !0
			}),
			"attr()": function(e, t, n) {
				return null === e || 'attr(' !== e.value.toLowerCase() ? !1 : ci(e, t, n)
			},
			"custom-ident": function(e, t) {
				if (null === e) return !1;
				var n = hi(e.value, 0);
				if (n !== e.value.length) return !1;
				var r = e.value.toLowerCase();
				return 'unset' === r || 'initial' === r || 'inherit' === r ? !1 : 'default' !== r && (t(), !0)
			},
			decibel: yi({
				db: !0
			}),
			dimension: yi(),
			frequency: yi({
				hz: !0,
				khz: !0
			}),
			flex: yi({
				fr: !0
			}),
			"hex-color": function(e, t) {
				if (null === e || e.value.charCodeAt(0) !== oge) return !1;
				var n = e.value.length - 1;
				if (3 != n && 4 != n && 6 != n && 8 != n) return !1;
				for (var r = 1; r < n; r++)
					if (!Jme(e.value.charCodeAt(r))) return !1;
				return t(), !0
			},
			"id-selector": function(e, t) {
				return null !== e && e.value.charCodeAt(0) === oge && hi(e.value, 1) === e.value.length && (t(), !0)
			},
			ident: fi('Identifier'),
			integer: function(e, t, n) {
				if (ui(e, t, n)) return !0;
				if (null === e) return !1;
				var r = gi(e.value, !1);
				return r === e.value.length && (t(), !0)
			},
			length: bi({
				px: !0,
				mm: !0,
				cm: !0,
				in: !0,
				pt: !0,
				pc: !0,
				q: !0,
				em: !0,
				ex: !0,
				ch: !0,
				rem: !0,
				vh: !0,
				vw: !0,
				vmin: !0,
				vmax: !0,
				vm: !0
			}),
			number: function(e, t, n) {
				if (ui(e, t, n)) return !0;
				if (null === e) return !1;
				var r = gi(e.value, !0);
				return r === e.value.length && (t(), !0)
			},
			"number-zero-one": function(e, t, n) {
				if (ui(e, t, n)) return !0;
				if (null === e || !mi(e.value)) return !1;
				var r = +e.value;
				return 0 > r || 1 < r ? !1 : (t(), !0)
			},
			"number-one-or-greater": function(e, t, n) {
				if (ui(e, t, n)) return !0;
				if (null === e || !mi(e.value)) return !1;
				var r = +e.value;
				return !(1 > r) && (t(), !0)
			},
			percentage: yi({
				"%": !0
			}),
			"positive-integer": function(e, t, n) {
				if (ui(e, t, n)) return !0;
				if (null === e) return !1;
				var r = Zme(e.value, 0);
				return r !== e.value.length || e.value.charCodeAt(0) === age ? !1 : (t(), !0)
			},
			resolution: yi({
				dpi: !0,
				dpcm: !0,
				dppx: !0,
				x: !0
			}),
			semitones: yi({
				st: !0
			}),
			string: fi('String'),
			time: yi({
				s: !0,
				ms: !0
			}),
			"unicode-range": fi('UnicodeRange'),
			url: function(e, t, n) {
				return null === e || 'url(' !== e.value.toLowerCase() ? !1 : ci(e, t, n)
			},
			progid: fi('Raw'),
			expression: function(e, t, n) {
				return null === e || 'expression(' !== e.value.toLowerCase() ? !1 : ci(e, t, n)
			}
		},
		sge = {
			SyntaxParseError: function(e, t, n) {
				var r = sue('SyntaxParseError', e);
				return r.input = t, r.offset = n, r.rawMessage = e, r.message = r.rawMessage + '\n  ' + r.input + '\n--' + Array((r.offset || r.input.length) + 1).join('-') + '^', r
			}
		},
		lge = sge.SyntaxParseError,
		dge = function(e) {
			this.str = e, this.pos = 0
		};
	dge.prototype = {
		charCodeAt: function(e) {
			return e < this.str.length ? this.str.charCodeAt(e) : 0
		},
		charCode: function() {
			return this.charCodeAt(this.pos)
		},
		nextCharCode: function() {
			return this.charCodeAt(this.pos + 1)
		},
		nextNonWsCode: function(e) {
			return this.charCodeAt(this.findWsEnd(e))
		},
		findWsEnd: function(e) {
			for (; e < this.str.length; e++) {
				var t = this.str.charCodeAt(e);
				if (t !== 13 && t !== 10 && t !== 12 && t !== 32 && t !== 9) break
			}
			return e
		},
		substringToPos: function(e) {
			return this.str.substring(this.pos, this.pos = e)
		},
		eat: function(e) {
			this.charCode() !== e && this.error('Expect `' + Gd(e) + '`'), this.pos++
		},
		peek: function() {
			return this.pos < this.str.length ? this.str.charAt(this.pos++) : ''
		},
		error: function(e) {
			throw new lge(e, this.str, this.pos)
		}
	};
	var cge = dge,
		pge = 9,
		uge = 10,
		mge = 12,
		gge = 13,
		hge = 32,
		fge = 33,
		yge = 35,
		bge = 38,
		xge = 39,
		kge = 40,
		Sge = 41,
		wge = 42,
		vge = 43,
		Tge = 44,
		Cge = 60,
		Ege = 62,
		Age = 63,
		Oge = 64,
		Pge = 91,
		Lge = 93,
		qge = 123,
		Rge = 124,
		Dge = 125,
		Nge = function(e) {
			for (var t = 'function' == typeof Uint32Array ? new Uint32Array(128) : Array(128), n = 0; 128 > n; n++) t[n] = e(Gd(n)) ? 1 : 0;
			return t
		}(function(e) {
			return /[a-zA-Z0-9\-]/.test(e)
		}),
		Bge = {
			" ": 1,
			"&&": 2,
			"||": 3,
			"|": 4
		};
	Ii('[a&&<b>#|<\'c\'>*||e() f{2} /,(% g#{1,2} h{2,})]!');
	var Ige = Ii;
	var zge = function() {},
		_ge = function(e, t, n) {
			function r(e) {
				switch (a.call(n, e), e.type) {
					case 'Group':
						e.terms.forEach(r);
						break;
					case 'Multiplier':
						r(e.term);
						break;
					case 'Type':
					case 'Property':
					case 'Keyword':
					case 'AtKeyword':
					case 'Function':
					case 'String':
					case 'Token':
					case 'Comma':
						break;
					default:
						throw new Error('Unknown type: ' + e.type);
				}
				o.call(n, e)
			}
			var a = zge,
				o = zge;
			if ('function' == typeof t ? a = t : t && (a = zi(t.enter), o = zi(t.leave)), a === zge && o === zge) throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
			r(e, n)
		},
		Mge = {
			decorator: function(e) {
				var t = null,
					n = null,
					r = [];
				return {
					children: e.children,
					node: function(n) {
						var r = t;
						t = n, e.node.call(this, n), t = r
					},
					chunk: function(e) {
						if (0 < r.length) switch (t.type) {
							case 'Dimension':
							case 'HexColor':
							case 'IdSelector':
							case 'Percentage':
								if (n.node === t) return void(n.value += e);
								break;
							case 'Function':
							case 'PseudoClassSelector':
							case 'PseudoElementSelector':
							case 'Url':
								if ('(' === e) return void(n.value += e);
								break;
							case 'Atrule':
								if (n.node === t && '@' === n.value) return void(n.value += e);
						}
						r.push(n = {
							value: e,
							node: t
						})
					},
					result: function() {
						return r
					}
				}
			}
		},
		Gge = {
			type: 'Match'
		},
		Uge = {
			type: 'Mismatch'
		},
		Vge = {
			type: 'DisallowEmpty'
		},
		Wge = 40,
		Fge = 41,
		jge = {
			MATCH: Gge,
			MISMATCH: Uge,
			DISALLOW_EMPTY: Vge,
			buildMatchGraph: function(e, t) {
				return 'string' == typeof e && (e = Ige(e)), {
					type: 'MatchGraph',
					match: Wi(e),
					syntax: t || null,
					source: e
				}
			}
		};
	var Hge = Object.prototype.hasOwnProperty,
		Yge = jge.MATCH,
		$ge = jge.MISMATCH,
		Kge = jge.DISALLOW_EMPTY,
		Xge = 1,
		Qge = 2,
		Zge = 3,
		Jge = 'Match',
		ehe = 'Mismatch',
		the = 'Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)',
		nhe = 1e4,
		rhe = 0,
		ahe = {
			getTrace: $i,
			isType: function(e, t) {
				return Ki(this, e, function(e) {
					return 'Type' === e.type && e.name === t
				})
			},
			isProperty: function(e, t) {
				return Ki(this, e, function(e) {
					return 'Property' === e.type && e.name === t
				})
			},
			isKeyword: function(e) {
				return Ki(this, e, function(e) {
					return 'Keyword' === e.type
				})
			}
		},
		ohe = {
			matchFragments: function(e, t, n, r, a) {
				function o(n) {
					if (null !== n.syntax && n.syntax.type === r && n.syntax.name === a) {
						var s = Qi(n),
							l = Zi(n);
						e.syntax.walk(t, function(e, t, n) {
							if (e === s) {
								var r = new iue;
								do {
									if (r.appendData(t.data), t.data === l) break;
									t = t.next
								} while (null !== t);
								i.push({
									parent: n,
									nodes: r
								})
							}
						})
					}
					Array.isArray(n.match) && n.match.forEach(o)
				}
				var i = [];
				return null !== n.matched && o(n.matched), i
			}
		},
		ihe = Object.prototype.hasOwnProperty;
	var she = Fme.SyntaxReferenceError,
		lhe = Fme.MatchError,
		dhe = jge.buildMatchGraph,
		che = {
			matchAsList: function(e, t, n) {
				var r = Yi(e, t, n || {});
				return null !== r.match && (r.match = Fi(r.match, function(e) {
					return e.type === Qge || e.type === Zge ? {
						type: e.type,
						syntax: e.syntax
					} : {
						syntax: e.syntax,
						token: e.token && e.token.value,
						node: e.token && e.token.node
					}
				}).slice(1)), r
			},
			matchAsTree: function(e, t, n) {
				var r = Yi(e, t, n || {});
				if (null === r.match) return r;
				for (var a = r.match, o = r.match = {
						syntax: t.syntax || null,
						match: []
					}, i = [o], s = null, l = null; null !== a;) l = a.prev, a.prev = s, s = a, a = l;
				for (a = s.prev; null !== a && null !== a.syntax;) {
					var d = a;
					switch (d.type) {
						case Qge:
							o.match.push(o = {
								syntax: d.syntax,
								match: []
							}), i.push(o);
							break;
						case Zge:
							i.pop(), o = i[i.length - 1];
							break;
						default:
							o.match.push({
								syntax: d.syntax || null,
								token: d.token.value,
								node: d.token.node
							});
					}
					a = a.prev
				}
				return r
			},
			getTotalIterationCount: function() {
				return rhe
			}
		}.matchAsTree,
		phe = {
			getStructureFromConfig: function(e) {
				var t = {};
				if (e.node)
					for (var n in e.node)
						if (ihe.call(e.node, n)) {
							var r = e.node[n];
							if (r.structure) t[n] = ns(n, r);
							else throw new Error('Missed `structure` field in `' + n + '` node type definition')
						}
				return t
			}
		}.getStructureFromConfig,
		uhe = dhe(Ige('inherit | initial | unset')),
		mhe = dhe(Ige('inherit | initial | unset | <expression>')),
		ghe = function(e, t, n) {
			if (this.valueCommonSyntax = uhe, this.syntax = t, this.generic = !1, this.properties = {}, this.types = {}, this.structure = n || phe(e), e) {
				if (e.generic)
					for (var r in this.generic = !0, ige) this.addType_(r, ige[r]);
				if (e.types)
					for (var r in e.types) this.addType_(r, e.types[r]);
				if (e.properties)
					for (var r in e.properties) this.addProperty_(r, e.properties[r])
			}
		};
	ghe.prototype = {
		structure: {},
		checkStructure: function(e) {
			function t(e, t) {
				r.push({
					node: e,
					message: t
				})
			}
			var n = this.structure,
				r = [];
			return this.syntax.walk(e, function(e) {
				n.hasOwnProperty(e.type) ? n[e.type].check(e, t) : t(e, 'Unknown node type `' + e.type + '`')
			}), !!r.length && r
		},
		createDescriptor: function(e, t, n) {
			var r = {
					type: t,
					name: n
				},
				a = {
					type: t,
					name: n,
					syntax: null,
					match: null
				};
			return 'function' == typeof e ? a.match = dhe(e, r) : ('string' == typeof e ? Object.defineProperty(a, 'syntax', {
				get: function() {
					return Object.defineProperty(a, 'syntax', {
						value: Ige(e)
					}), a.syntax
				}
			}) : a.syntax = e, Object.defineProperty(a, 'match', {
				get: function() {
					return Object.defineProperty(a, 'match', {
						value: dhe(a.syntax, r)
					}), a.match
				}
			})), a
		},
		addProperty_: function(e, t) {
			this.properties[e] = this.createDescriptor(t, 'Property', e)
		},
		addType_: function(e, t) {
			this.types[e] = this.createDescriptor(t, 'Type', e), t === ige.expression && (this.valueCommonSyntax = mhe)
		},
		matchDeclaration: function(e) {
			return 'Declaration' === e.type ? this.matchProperty(e.property, e.value) : is(null, new Error('Not a Declaration node'))
		},
		matchProperty: function(e, t) {
			var n = Kme.property(e);
			if (n.custom) return is(null, new Error('Lexer matching doesn\'t applicable for custom properties'));
			var r = n.vendor ? this.getProperty(n.name) || this.getProperty(n.basename) : this.getProperty(n.name);
			return r ? ss(this, r, t, !0) : is(null, new she('Unknown property', e))
		},
		matchType: function(e, t) {
			var n = this.getType(e);
			return n ? ss(this, n, t, !1) : is(null, new she('Unknown type', e))
		},
		match: function(e, t) {
			return e && e.type ? (e.match || (e = this.createDescriptor(e)), ss(this, e, t, !1)) : is(null, new she('Bad syntax'))
		},
		findValueFragments: function(e, t, n, r) {
			return ohe.matchFragments(this, t, this.matchProperty(e, t), n, r)
		},
		findDeclarationValueFragments: function(e, t, n) {
			return ohe.matchFragments(this, e.value, this.matchDeclaration(e), t, n)
		},
		findAllFragments: function(e, t, n) {
			var r = [];
			return this.syntax.walk(e, {
				visit: 'Declaration',
				enter: function(e) {
					r.push.apply(r, this.findDeclarationValueFragments(e, t, n))
				}.bind(this)
			}), r
		},
		getProperty: function(e) {
			return this.properties.hasOwnProperty(e) ? this.properties[e] : null
		},
		getType: function(e) {
			return this.types.hasOwnProperty(e) ? this.types[e] : null
		},
		validate: function() {
			function e(r, a, o, i) {
				return o.hasOwnProperty(a) ? o[a] : void(o[a] = !1, null !== i.syntax && _ge(i.syntax, function(i) {
					if ('Type' === i.type || 'Property' === i.type) {
						var s = 'Type' === i.type ? r.types : r.properties,
							l = 'Type' === i.type ? t : n;
						(!s.hasOwnProperty(i.name) || e(r, i.name, l, s[i.name])) && (o[a] = !0)
					}
				}, this))
			}
			var t = {},
				n = {};
			for (var r in this.types) e(this, r, t, this.types[r]);
			for (var r in this.properties) e(this, r, n, this.properties[r]);
			return t = Object.keys(t).filter(function(e) {
				return t[e]
			}), n = Object.keys(n).filter(function(e) {
				return n[e]
			}), t.length || n.length ? {
				types: t,
				properties: n
			} : null
		},
		dump: function(e) {
			return {
				generic: this.generic,
				types: rs(this.types, e),
				properties: rs(this.properties, e)
			}
		},
		toString: function() {
			return JSON.stringify(this.dump())
		}
	};
	var hhe = ghe,
		fhe = {
			SyntaxParseError: sge.SyntaxParseError,
			parse: Ige,
			generate: Wme,
			walk: _ge
		},
		yhe = Vme.TYPE,
		bhe = yhe.WhiteSpace,
		xhe = yhe.Comment,
		khe = function(e) {
			var t = this.createList(),
				n = null,
				r = {
					recognizer: e,
					space: null,
					ignoreWS: !1,
					ignoreWSAfter: !1
				};
			for (this.scanner.skipSC(); !this.scanner.eof;) {
				switch (this.scanner.tokenType) {
					case xhe:
						this.scanner.next();
						continue;
					case bhe:
						r.ignoreWS ? this.scanner.next() : r.space = this.WhiteSpace();
						continue;
				}
				if (n = e.getNode.call(this, r), void 0 === n) break;
				null !== r.space && (t.push(r.space), r.space = null), t.push(n), r.ignoreWSAfter ? (r.ignoreWSAfter = !1, r.ignoreWS = !0) : r.ignoreWS = !1
			}
			return t
		};
	var She = function() {},
		whe = function(e) {
			var t = {
				scanner: new Vme,
				filename: '<unknown>',
				needPositions: !1,
				onParseError: She,
				onParseErrorThrow: !1,
				parseAtrulePrelude: !0,
				parseRulePrelude: !0,
				parseValue: !0,
				parseCustomProperty: !1,
				readSequence: khe,
				createList: function() {
					return new iue
				},
				createSingleNodeList: function(e) {
					return new iue().appendData(e)
				},
				getFirstListNode: function(e) {
					return e && e.first()
				},
				getLastListNode: function(e) {
					return e.last()
				},
				parseWithFallback: function(e, t) {
					var n = this.scanner.currentToken;
					try {
						return e.call(this)
					} catch (a) {
						if (this.onParseErrorThrow) throw a;
						var r = t.call(this, n);
						return this.onParseErrorThrow = !0, this.onParseError(a, r), this.onParseErrorThrow = !1, r
					}
				},
				getLocation: function(e, t) {
					return this.needPositions ? this.scanner.getLocationRange(e, t, this.filename) : null
				},
				getLocationFromList: function(e) {
					if (this.needPositions) {
						var t = this.getFirstListNode(e),
							n = this.getLastListNode(e);
						return this.scanner.getLocationRange(null === t ? this.scanner.tokenStart : t.loc.start.offset - this.scanner.startOffset, null === n ? this.scanner.tokenStart : n.loc.end.offset - this.scanner.startOffset, this.filename)
					}
					return null
				}
			};
			for (var n in e = ds(e || {}), e) t[n] = e[n];
			return function(e, n) {
				n = n || {};
				var r = n.context || 'default',
					a;
				if (t.scanner.setSource(e, n.offset, n.line, n.column), t.filename = n.filename || '<unknown>', t.needPositions = !!n.positions, t.onParseError = 'function' == typeof n.onParseError ? n.onParseError : She, t.onParseErrorThrow = !1, t.parseAtrulePrelude = !('parseAtrulePrelude' in n) || !!n.parseAtrulePrelude, t.parseRulePrelude = !('parseRulePrelude' in n) || !!n.parseRulePrelude, t.parseValue = !('parseValue' in n) || !!n.parseValue, t.parseCustomProperty = !!('parseCustomProperty' in n) && !!n.parseCustomProperty, !t.context.hasOwnProperty(r)) throw new Error('Unknown context `' + r + '`');
				return a = t.context[r].call(t, n), t.scanner.eof || t.scanner.error(), a
			}
		};
	var vhe = Aoe.SourceMapGenerator,
		The = {
			Atrule: !0,
			Selector: !0,
			Declaration: !0
		},
		Che = function(e) {
			var t = new vhe,
				n = 1,
				r = 0,
				a = {
					line: 1,
					column: 0
				},
				o = {
					line: 0,
					column: 0
				},
				i = !1,
				s = {
					line: 1,
					column: 0
				},
				l = {
					generated: s
				},
				d = e.node;
			e.node = function(e) {
				if (e.loc && e.loc.start && The.hasOwnProperty(e.type)) {
					var c = e.loc.start.line,
						p = e.loc.start.column - 1;
					(o.line !== c || o.column !== p) && (o.line = c, o.column = p, a.line = n, a.column = r, i && (i = !1, (a.line !== s.line || a.column !== s.column) && t.addMapping(l)), i = !0, t.addMapping({
						source: e.loc.source,
						original: o,
						generated: a
					}))
				}
				d.call(this, e), i && The.hasOwnProperty(e.type) && (s.line = n, s.column = r)
			};
			var c = e.chunk;
			e.chunk = function(e) {
				for (var t = 0; t < e.length; t++) 10 === e.charCodeAt(t) ? (n++, r = 0) : r++;
				c(e)
			};
			var p = e.result;
			return e.result = function() {
				return i && t.addMapping(l), {
					css: p(),
					map: t
				}
			}, e
		};
	var Ehe = Object.prototype.hasOwnProperty,
		Ahe = function(e) {
			function t(e) {
				if (Ehe.call(n, e.type)) n[e.type].call(this, e);
				else throw new Error('Unknown node type: ' + e.type)
			}
			var n = {};
			if (e.node)
				for (var r in e.node) n[r] = e.node[r].generate;
			return function(e, n) {
				var r = '',
					a = {
						children: cs,
						node: t,
						chunk: function(e) {
							r += e
						},
						result: function() {
							return r
						}
					};
				return n && ('function' == typeof n.decorator && (a = n.decorator(a)), n.sourceMap && (a = Che(a))), a.node(e), a.result()
			}
		},
		Ohe = function(e) {
			return {
				fromPlainObject: function(t) {
					return e(t, {
						enter: function(e) {
							e.children && !1 == e.children instanceof iue && (e.children = new iue().fromArray(e.children))
						}
					}), t
				},
				toPlainObject: function(t) {
					return e(t, {
						leave: function(e) {
							e.children && e.children instanceof iue && (e.children = e.children.toArray())
						}
					}), t
				}
			}
		};
	var Phe = Object.prototype.hasOwnProperty,
		Lhe = function() {},
		qhe = function(e) {
			var t = gs(e),
				n = {},
				r = {};
			for (var a in t) Phe.call(t, a) && null !== t[a] && (n[a] = hs(t[a], !1), r[a] = hs(t[a], !0));
			var o = fs(n),
				i = fs(r);
			return function(e, a) {
				function s(e, t, n) {
					l.call(p, e, t, n), c.hasOwnProperty(e.type) && c[e.type](e, p, s), d.call(p, e, t, n)
				}
				var l = Lhe,
					d = Lhe,
					c = n,
					p = {
						root: e,
						stylesheet: null,
						atrule: null,
						atrulePrelude: null,
						rule: null,
						selector: null,
						block: null,
						declaration: null,
						function: null
					};
				if ('function' == typeof a) l = a;
				else if (a && (l = ps(a.enter), d = ps(a.leave), a.reverse && (c = r), a.visit)) {
					if (o.hasOwnProperty(a.visit)) c = a.reverse ? i[a.visit] : o[a.visit];
					else if (!t.hasOwnProperty(a.visit)) throw new Error('Bad value `' + a.visit + '` for `visit` option (should be: ' + Object.keys(t).join(', ') + ')');
					l = us(l, a.visit), d = us(d, a.visit)
				}
				if (l === Lhe && d === Lhe) throw new Error('Neither `enter` nor `leave` walker handler is set or both aren\'t a function');
				if (a.reverse) {
					var u = l;
					l = d, d = u
				}
				s(e)
			}
		};
	var Rhe = function e(t) {
			var n = {};
			for (var r in t) {
				var a = t[r];
				a && (Array.isArray(a) || a instanceof iue ? a = a.map(e) : a.constructor === Object && (a = e(a))), n[r] = a
			}
			return n
		},
		Dhe = Object.prototype.hasOwnProperty,
		Nhe = {
			generic: !0,
			types: {},
			properties: {},
			parseContext: {},
			scope: {},
			atrule: ['parse'],
			pseudo: ['parse'],
			node: ['name', 'structure', 'parse', 'generate', 'walkContext']
		},
		Bhe = function(e, t) {
			return ks(e, t, Nhe)
		},
		Ihe = {
			"--*": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"-moz-background-clip": {
				comment: 'deprecated syntax in old Firefox, https://developer.mozilla.org/en/docs/Web/CSS/background-clip',
				syntax: 'padding | border'
			},
			"-moz-border-radius-bottomleft": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius',
				syntax: '<\'border-bottom-left-radius\'>'
			},
			"-moz-border-radius-bottomright": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius',
				syntax: '<\'border-bottom-right-radius\'>'
			},
			"-moz-border-radius-topleft": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius',
				syntax: '<\'border-top-left-radius\'>'
			},
			"-moz-border-radius-topright": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius',
				syntax: '<\'border-bottom-right-radius\'>'
			},
			"-moz-osx-font-smoothing": {
				comment: 'misssed old syntax https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth',
				syntax: 'auto | grayscale'
			},
			"-moz-user-select": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
				syntax: 'none | text | all | -moz-none'
			},
			"-ms-flex-align": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align',
				syntax: 'start | end | center | baseline | stretch'
			},
			"-ms-flex-item-align": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-align',
				syntax: 'auto | start | end | center | baseline | stretch'
			},
			"-ms-flex-line-pack": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-line-pack',
				syntax: 'start | end | center | justify | distribute | stretch'
			},
			"-ms-flex-negative": {
				comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
				syntax: '<\'flex-shrink\'>'
			},
			"-ms-flex-pack": {
				comment: 'misssed old syntax implemented in IE, https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/#flex-pack',
				syntax: 'start | end | center | justify | distribute'
			},
			"-ms-flex-order": {
				comment: 'misssed old syntax implemented in IE; https://msdn.microsoft.com/en-us/library/jj127303(v=vs.85).aspx',
				syntax: '<integer>'
			},
			"-ms-flex-positive": {
				comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
				syntax: '<\'flex-grow\'>'
			},
			"-ms-flex-preferred-size": {
				comment: 'misssed old syntax implemented in IE; TODO: find references for comfirmation',
				syntax: '<\'flex-basis\'>'
			},
			"-ms-interpolation-mode": {
				comment: 'https://msdn.microsoft.com/en-us/library/ff521095(v=vs.85).aspx',
				syntax: 'nearest-neighbor | bicubic'
			},
			"-ms-grid-column-align": {
				comment: 'add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466338.aspx',
				syntax: 'start | end | center | stretch'
			},
			"-ms-grid-row-align": {
				comment: 'add this property first since it uses as fallback for flexbox, https://msdn.microsoft.com/en-us/library/windows/apps/hh466348.aspx',
				syntax: 'start | end | center | stretch'
			},
			"-webkit-appearance": {
				comment: 'webkit specific keywords',
				references: ['http://css-infos.net/property/-webkit-appearance'],
				syntax: 'none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox | listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | push-button | radio | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield'
			},
			"-webkit-background-clip": {
				comment: 'https://developer.mozilla.org/en/docs/Web/CSS/background-clip',
				syntax: '[ <box> | border | padding | content | text ]#'
			},
			"-webkit-column-break-after": {
				comment: 'added, http://help.dottoro.com/lcrthhhv.php',
				syntax: 'always | auto | avoid'
			},
			"-webkit-column-break-before": {
				comment: 'added, http://help.dottoro.com/lcxquvkf.php',
				syntax: 'always | auto | avoid'
			},
			"-webkit-column-break-inside": {
				comment: 'added, http://help.dottoro.com/lclhnthl.php',
				syntax: 'always | auto | avoid'
			},
			"-webkit-font-smoothing": {
				comment: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth',
				syntax: 'auto | none | antialiased | subpixel-antialiased'
			},
			"-webkit-line-clamp": {
				comment: 'non-standard and deprecated but may still using by some sites',
				syntax: '<positive-integer>'
			},
			"-webkit-mask-box-image": {
				comment: 'missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image',
				syntax: '[ <url> | <gradient> | none ] [ <length-percentage>{4} <-webkit-mask-box-repeat>{2} ]?'
			},
			"-webkit-mask-clip": {
				comment: 'change type to <-webkit-mask-clip-style> since it differ from <mask-clip>, extra space between [ and ,',
				syntax: '<-webkit-mask-clip-style> [, <-webkit-mask-clip-style> ]*'
			},
			"-webkit-print-color-adjust": {
				comment: 'missed',
				references: ['https://developer.mozilla.org/en/docs/Web/CSS/-webkit-print-color-adjust'],
				syntax: 'economy | exact'
			},
			"-webkit-text-security": {
				comment: 'missed; http://help.dottoro.com/lcbkewgt.php',
				syntax: 'none | circle | disc | square'
			},
			"-webkit-user-drag": {
				comment: 'missed; http://help.dottoro.com/lcbixvwm.php',
				syntax: 'none | element | auto'
			},
			"-webkit-user-select": {
				comment: 'auto is supported by old webkit, https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
				syntax: 'auto | none | text | all'
			},
			"alignment-baseline": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#AlignmentBaselineProperty'],
				syntax: 'auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical'
			},
			"baseline-shift": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#BaselineShiftProperty'],
				syntax: 'baseline | sub | super | <svg-length>'
			},
			behavior: {
				comment: 'added old IE property https://msdn.microsoft.com/en-us/library/ms530723(v=vs.85).aspx',
				syntax: '<url>+'
			},
			"clip-rule": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/masking.html#ClipRuleProperty'],
				syntax: 'nonzero | evenodd'
			},
			cue: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<\'cue-before\'> <\'cue-after\'>?'
			},
			"cue-after": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<url> <decibel>? | none'
			},
			"cue-before": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<url> <decibel>? | none'
			},
			cursor: {
				comment: 'added legacy keywords: hand, -webkit-grab. -webkit-grabbing, -webkit-zoom-in, -webkit-zoom-out, -moz-grab, -moz-grabbing, -moz-zoom-in, -moz-zoom-out',
				refenrences: ['https://www.sitepoint.com/css3-cursor-styles/'],
				syntax: '[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing | hand | -webkit-grab | -webkit-grabbing | -webkit-zoom-in | -webkit-zoom-out | -moz-grab | -moz-grabbing | -moz-zoom-in | -moz-zoom-out ] ]'
			},
			display: {
				comment: 'extended with -ms-flexbox',
				syntax: 'none | inline | block | list-item | inline-list-item | inline-block | inline-table | table | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group | flex | inline-flex | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | -ms-flexbox | -ms-inline-flexbox | -ms-grid | -ms-inline-grid | -webkit-flex | -webkit-inline-flex | -webkit-box | -webkit-inline-box | -moz-inline-stack | -moz-box | -moz-inline-box'
			},
			position: {
				comment: 'extended with -webkit-sticky',
				syntax: 'static | relative | absolute | sticky | fixed | -webkit-sticky'
			},
			"dominant-baseline": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#DominantBaselineProperty'],
				syntax: 'auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge'
			},
			"image-rendering": {
				comment: 'extended with <-non-standard-image-rendering>, added SVG keywords optimizeSpeed and optimizeQuality',
				references: ['https://developer.mozilla.org/en/docs/Web/CSS/image-rendering', 'https://www.w3.org/TR/SVG/painting.html#ImageRenderingProperty'],
				syntax: 'auto | crisp-edges | pixelated | optimizeSpeed | optimizeQuality | <-non-standard-image-rendering>'
			},
			fill: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
				syntax: '<paint>'
			},
			"fill-opacity": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
				syntax: '<number-zero-one>'
			},
			"fill-rule": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#FillProperty'],
				syntax: 'nonzero | evenodd'
			},
			filter: {
				comment: 'extend with IE legacy syntaxes',
				syntax: 'none | <filter-function-list> | <-ms-filter>'
			},
			font: {
				comment: 'extend with non-standard fonts',
				syntax: '[ [ <\'font-style\'> || <font-variant-css21> || <\'font-weight\'> || <\'font-stretch\'> ]? <\'font-size\'> [ / <\'line-height\'> ]? <\'font-family\'> ] | caption | icon | menu | message-box | small-caption | status-bar | <-non-standard-font>'
			},
			"glyph-orientation-horizontal": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#GlyphOrientationHorizontalProperty'],
				syntax: '<angle>'
			},
			"glyph-orientation-vertical": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#GlyphOrientationVerticalProperty'],
				syntax: '<angle>'
			},
			kerning: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#KerningProperty'],
				syntax: 'auto | <svg-length>'
			},
			"letter-spacing": {
				comment: 'fix syntax <length> -> <length-percentage>',
				references: ['https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/letter-spacing'],
				syntax: 'normal | <length-percentage>'
			},
			"line-height-step": {
				comment: 'fix extra spaces around',
				syntax: 'none | <length>'
			},
			marker: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"marker-end": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"marker-mid": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"marker-start": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#MarkerProperties'],
				syntax: 'none | <url>'
			},
			"max-width": {
				comment: 'extend by non-standard width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/max-width',
				syntax: '<length> | <percentage> | none | max-content | min-content | fit-content | fill-available | <-non-standard-width>'
			},
			"min-width": {
				comment: 'extend by non-standard width keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width',
				syntax: '<length> | <percentage> | auto | max-content | min-content | fit-content | fill-available | <-non-standard-width>'
			},
			opacity: {
				comment: 'strict to 0..1 <number> -> <number-zero-one>',
				syntax: '<number-zero-one>'
			},
			overflow: {
				comment: 'extend by vendor keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow',
				syntax: 'visible | hidden | scroll | auto | <-non-standard-overflow>'
			},
			pause: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<\'pause-before\'> <\'pause-after\'>?'
			},
			"pause-after": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			"pause-before": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			rest: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<\'rest-before\'> <\'rest-after\'>?'
			},
			"rest-after": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			"rest-before": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<time> | none | x-weak | weak | medium | strong | x-strong'
			},
			"shape-rendering": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#ShapeRenderingPropert'],
				syntax: 'auto | optimizeSpeed | crispEdges | geometricPrecision'
			},
			src: {
				comment: 'added @font-face\'s src property https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src',
				syntax: '[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#'
			},
			speak: {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'auto | none | normal'
			},
			"speak-as": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'normal | spell-out || digits || [ literal-punctuation | no-punctuation ]'
			},
			stroke: {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<paint>'
			},
			"stroke-dasharray": {
				comment: 'added SVG property; a list of comma and/or white space separated <length>s and <percentage>s',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: 'none | [ <svg-length>+ ]#'
			},
			"stroke-dashoffset": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<svg-length>'
			},
			"stroke-linecap": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: 'butt | round | square'
			},
			"stroke-linejoin": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: 'miter | round | bevel'
			},
			"stroke-miterlimit": {
				comment: 'added SVG property (<miterlimit> = <number-one-or-greater>) ',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<number-one-or-greater>'
			},
			"stroke-opacity": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<number-zero-one>'
			},
			"stroke-width": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/painting.html#StrokeProperties'],
				syntax: '<svg-length>'
			},
			"text-anchor": {
				comment: 'added SVG property',
				references: ['https://www.w3.org/TR/SVG/text.html#TextAlignmentProperties'],
				syntax: 'start | middle | end'
			},
			"transform-origin": {
				comment: 'move first group to the end since less collecting',
				syntax: '[ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>? | [ <length-percentage> | left | center | right | top | bottom ]'
			},
			"unicode-bidi": {
				comment: 'added prefixed keywords https://developer.mozilla.org/en-US/docs/Web/CSS/unicode-bidi',
				syntax: 'normal | embed | isolate | bidi-override | isolate-override | plaintext | -moz-isolate | -moz-isolate-override | -moz-plaintext | -webkit-isolate'
			},
			"unicode-range": {
				comment: 'added missed property https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face/unicode-range',
				syntax: '<unicode-range>#'
			},
			"voice-balance": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<number> | left | center | right | leftwards | rightwards'
			},
			"voice-duration": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'auto | <time>'
			},
			"voice-family": {
				comment: '<name> -> <family-name>, https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '[ [ <family-name> | <generic-voice> ] , ]* [ <family-name> | <generic-voice> ] | preserve'
			},
			"voice-pitch": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]'
			},
			"voice-range": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '<frequency> && absolute | [ [ x-low | low | medium | high | x-high ] || [ <frequency> | <semitones> | <percentage> ] ]'
			},
			"voice-rate": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: '[ normal | x-slow | slow | medium | fast | x-fast ] || <percentage>'
			},
			"voice-stress": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'normal | strong | moderate | none | reduced'
			},
			"voice-volume": {
				comment: 'https://www.w3.org/TR/css3-speech/#property-index',
				syntax: 'silent | [ [ x-soft | soft | medium | loud | x-loud ] || <decibel> ]'
			},
			"word-break": {
				comment: 'extend with non-standard keywords',
				syntax: 'normal | break-all | keep-all | <-non-standard-word-break>'
			},
			"writing-mode": {
				comment: 'extend with SVG keywords',
				syntax: 'horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr | <svg-writing-mode>'
			}
		},
		zhe = {
			"-legacy-gradient": {
				comment: 'added collection of legacy gradient syntaxes',
				syntax: '<-webkit-gradient()> | <-legacy-linear-gradient> | <-legacy-repeating-linear-gradient> | <-legacy-radial-gradient> | <-legacy-repeating-radial-gradient>'
			},
			"-legacy-linear-gradient": {
				comment: 'like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
				syntax: '-moz-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-linear-gradient( <-legacy-linear-gradient-arguments> )'
			},
			"-legacy-repeating-linear-gradient": {
				comment: 'like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
				syntax: '-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> ) | -o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )'
			},
			"-legacy-linear-gradient-arguments": {
				comment: 'like standard syntax but w/o `to` keyword https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient',
				syntax: '[ <angle> | <side-or-corner> ]? , <color-stop-list>'
			},
			"-legacy-radial-gradient": {
				comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
				syntax: '-moz-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-radial-gradient( <-legacy-radial-gradient-arguments> )'
			},
			"-legacy-repeating-radial-gradient": {
				comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
				syntax: '-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> ) | -o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )'
			},
			"-legacy-radial-gradient-arguments": {
				comment: 'deprecated syntax that implemented by some browsers https://www.w3.org/TR/2011/WD-css3-images-20110908/#radial-gradients',
				syntax: '[ <position> , ]? [ [ [ <-legacy-radial-gradient-shape> || <-legacy-radial-gradient-size> ] | [ <length> | <percentage> ]{2} ] , ]? <color-stop-list>'
			},
			"-legacy-radial-gradient-size": {
				comment: 'before a standard it contains 2 extra keywords (`contain` and `cover`) https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltsize',
				syntax: 'closest-side | closest-corner | farthest-side | farthest-corner | contain | cover'
			},
			"-legacy-radial-gradient-shape": {
				comment: 'define to duoble sure it doesn\'t extends in future https://www.w3.org/TR/2011/WD-css3-images-20110908/#ltshape',
				syntax: 'circle | ellipse'
			},
			"-non-standard-font": {
				comment: 'non standard fonts',
				preferences: ['https://webkit.org/blog/3709/using-the-system-font-in-web-content/'],
				syntax: '-apple-system-body | -apple-system-headline | -apple-system-subheadline | -apple-system-caption1 | -apple-system-caption2 | -apple-system-footnote | -apple-system-short-body | -apple-system-short-headline | -apple-system-short-subheadline | -apple-system-short-caption1 | -apple-system-short-footnote | -apple-system-tall-body'
			},
			"-non-standard-color": {
				comment: 'non standard colors',
				references: ['http://cssdot.ru/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA_CSS/color-i305.html', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Mozilla_Color_Preference_Extensions'],
				syntax: '-moz-ButtonDefault | -moz-ButtonHoverFace | -moz-ButtonHoverText | -moz-CellHighlight | -moz-CellHighlightText | -moz-Combobox | -moz-ComboboxText | -moz-Dialog | -moz-DialogText | -moz-dragtargetzone | -moz-EvenTreeRow | -moz-Field | -moz-FieldText | -moz-html-CellHighlight | -moz-html-CellHighlightText | -moz-mac-accentdarkestshadow | -moz-mac-accentdarkshadow | -moz-mac-accentface | -moz-mac-accentlightesthighlight | -moz-mac-accentlightshadow | -moz-mac-accentregularhighlight | -moz-mac-accentregularshadow | -moz-mac-chrome-active | -moz-mac-chrome-inactive | -moz-mac-focusring | -moz-mac-menuselect | -moz-mac-menushadow | -moz-mac-menutextselect | -moz-MenuHover | -moz-MenuHoverText | -moz-MenuBarText | -moz-MenuBarHoverText | -moz-nativehyperlinktext | -moz-OddTreeRow | -moz-win-communicationstext | -moz-win-mediatext | -moz-activehyperlinktext | -moz-default-background-color | -moz-default-color | -moz-hyperlinktext | -moz-visitedhyperlinktext | -webkit-activelink | -webkit-focus-ring-color | -webkit-link | -webkit-text'
			},
			"-non-standard-image-rendering": {
				comment: 'non-standard keywords http://phrogz.net/tmp/canvas_image_zoom.html',
				syntax: 'optimize-contrast | -moz-crisp-edges | -o-crisp-edges | -webkit-optimize-contrast'
			},
			"-non-standard-overflow": {
				comment: 'non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/overflow',
				syntax: '-moz-scrollbars-none | -moz-scrollbars-horizontal | -moz-scrollbars-vertical | -moz-hidden-unscrollable'
			},
			"-non-standard-width": {
				comment: 'non-standard keywords https://developer.mozilla.org/en-US/docs/Web/CSS/width',
				syntax: 'min-intrinsic | intrinsic | -moz-min-content | -moz-max-content | -webkit-min-content | -webkit-max-content'
			},
			"-non-standard-word-break": {
				comment: 'non-standard keywords https://css-tricks.com/almanac/properties/w/word-break/',
				syntax: 'break-word'
			},
			"-webkit-gradient()": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/ - TODO: simplify when after match algorithm improvement ( [, point, radius | , point] -> [, radius]? , point )',
				syntax: '-webkit-gradient( <-webkit-gradient-type>, <-webkit-gradient-point> [, <-webkit-gradient-point> | , <-webkit-gradient-radius>, <-webkit-gradient-point> ] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )'
			},
			"-webkit-gradient-color-stop": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: 'from( <color> ) | color-stop( [ <number-zero-one> | <percentage> ] , <color> ) | to( <color> )'
			},
			"-webkit-gradient-point": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: '[ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]'
			},
			"-webkit-gradient-radius": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: '<length> | <percentage>'
			},
			"-webkit-gradient-type": {
				comment: 'first Apple proposal gradient syntax https://webkit.org/blog/175/introducing-css-gradients/',
				syntax: 'linear | radial'
			},
			"-webkit-mask-box-repeat": {
				comment: 'missed; https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-mask-box-image',
				syntax: 'repeat | stretch | round'
			},
			"-webkit-mask-clip-style": {
				comment: 'missed; there is no enough information about `-webkit-mask-clip` property, but looks like all those keywords are working',
				syntax: 'border | border-box | padding | padding-box | content | content-box | text'
			},
			"-ms-filter": {
				syntax: '[ <progid> | FlipH | FlipV ]+'
			},
			age: {
				comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
				syntax: 'child | young | old'
			},
			"attr()": {
				comment: 'drop it since it\'s a generic',
				syntax: null
			},
			"border-radius": {
				comment: 'missed, https://drafts.csswg.org/css-backgrounds-3/#the-border-radius',
				syntax: '<length-percentage>{1,2}'
			},
			bottom: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			"content-list": {
				comment: 'missed -> https://drafts.csswg.org/css-content/#typedef-content-list (document-url, <target> and leader() is omitted util stabilization)',
				syntax: '[ <string> | contents | <url> | <quote> | <attr()> | counter( <ident>, <\'list-style-type\'>? ) ]+'
			},
			"inset()": {
				comment: 'changed <border-radius> to <\'border-radius\'>',
				syntax: 'inset( <length-percentage>{1,4} [ round <\'border-radius\'> ]? )'
			},
			"generic-voice": {
				comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
				syntax: '[ <age>? <gender> <integer>? ]'
			},
			gender: {
				comment: 'https://www.w3.org/TR/css3-speech/#voice-family',
				syntax: 'male | female | neutral'
			},
			"generic-family": {
				comment: 'added -apple-system',
				references: ['https://webkit.org/blog/3709/using-the-system-font-in-web-content/'],
				syntax: 'serif | sans-serif | cursive | fantasy | monospace | -apple-system'
			},
			gradient: {
				comment: 'added -webkit-gradient() since may to be used for legacy support',
				syntax: '<-legacy-gradient> | <linear-gradient()> | <repeating-linear-gradient()> | <radial-gradient()> | <repeating-radial-gradient()>'
			},
			left: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			"mask-image": {
				comment: 'missed; https://drafts.fxtf.org/css-masking-1/#the-mask-image',
				syntax: '<mask-reference>#'
			},
			"matrix()": {
				comment: 'redundant max',
				syntax: 'matrix( <number> [, <number> ]{5} )'
			},
			"matrix3d()": {
				comment: 'redundant max',
				syntax: 'matrix3d( <number> [, <number> ]{15} )'
			},
			"name-repeat": {
				comment: 'missed, and looks like obsolete, keep it as is since other property syntaxes should be changed too; https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#typedef-name-repeat',
				syntax: 'repeat( [ <positive-integer> | auto-fill ], <line-names>+)'
			},
			"named-color": {
				comment: 'replaced <ident> to list of colors according to https://www.w3.org/TR/css-color-4/#named-colors',
				syntax: 'transparent | aliceblue | antiquewhite | aqua | aquamarine | azure | beige | bisque | black | blanchedalmond | blue | blueviolet | brown | burlywood | cadetblue | chartreuse | chocolate | coral | cornflowerblue | cornsilk | crimson | cyan | darkblue | darkcyan | darkgoldenrod | darkgray | darkgreen | darkgrey | darkkhaki | darkmagenta | darkolivegreen | darkorange | darkorchid | darkred | darksalmon | darkseagreen | darkslateblue | darkslategray | darkslategrey | darkturquoise | darkviolet | deeppink | deepskyblue | dimgray | dimgrey | dodgerblue | firebrick | floralwhite | forestgreen | fuchsia | gainsboro | ghostwhite | gold | goldenrod | gray | green | greenyellow | grey | honeydew | hotpink | indianred | indigo | ivory | khaki | lavender | lavenderblush | lawngreen | lemonchiffon | lightblue | lightcoral | lightcyan | lightgoldenrodyellow | lightgray | lightgreen | lightgrey | lightpink | lightsalmon | lightseagreen | lightskyblue | lightslategray | lightslategrey | lightsteelblue | lightyellow | lime | limegreen | linen | magenta | maroon | mediumaquamarine | mediumblue | mediumorchid | mediumpurple | mediumseagreen | mediumslateblue | mediumspringgreen | mediumturquoise | mediumvioletred | midnightblue | mintcream | mistyrose | moccasin | navajowhite | navy | oldlace | olive | olivedrab | orange | orangered | orchid | palegoldenrod | palegreen | paleturquoise | palevioletred | papayawhip | peachpuff | peru | pink | plum | powderblue | purple | rebeccapurple | red | rosybrown | royalblue | saddlebrown | salmon | sandybrown | seagreen | seashell | sienna | silver | skyblue | slateblue | slategray | slategrey | snow | springgreen | steelblue | tan | teal | thistle | tomato | turquoise | violet | wheat | white | whitesmoke | yellow | yellowgreen | <-non-standard-color>'
			},
			"outline-radius": {
				comment: 'missed, looks like it\'s a similar to <border-radius> https://developer.mozilla.org/en/docs/Web/CSS/-moz-outline-radius',
				syntax: '<border-radius>'
			},
			paint: {
				comment: 'simplified SVG syntax (omit <icccolor>, replace <funciri> for <url>) https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint',
				syntax: 'none | currentColor | <color> | <url> [ none | currentColor | <color> ]?'
			},
			"path()": {
				comment: 'missed, `motion` property was renamed, but left it as is for now; path() syntax was get from last draft https://drafts.fxtf.org/motion-1/#funcdef-offset-path-path',
				syntax: 'path( <string> )'
			},
			right: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			shape: {
				comment: 'missed spaces in function body and add backwards compatible syntax',
				syntax: 'rect( [ [ <top>, <right>, <bottom>, <left> ] | [ <top> <right> <bottom> <left> ] ] )'
			},
			"single-transition": {
				comment: 'moved <single-transition-timing-function> in the beginning to avoid wrong match to <single-transition-property>',
				syntax: '<single-transition-timing-function> || [ none | <single-transition-property> ] || <time> || <time>'
			},
			"svg-length": {
				comment: 'All coordinates and lengths in SVG can be specified with or without a unit identifier',
				references: ['https://www.w3.org/TR/SVG11/coords.html#Units'],
				syntax: '<percentage> | <length> | <number>'
			},
			"svg-writing-mode": {
				comment: 'SVG specific keywords (deprecated for CSS)',
				references: ['https://developer.mozilla.org/en/docs/Web/CSS/writing-mode', 'https://www.w3.org/TR/SVG/text.html#WritingModeProperty'],
				syntax: 'lr-tb | rl-tb | tb-rl | lr | rl | tb'
			},
			top: {
				comment: 'missed; not sure we should add it, but no others except `shape` is using it so it\'s ok for now; https://drafts.fxtf.org/css-masking-1/#funcdef-clip-rect',
				syntax: '<length> | auto'
			},
			x: {
				comment: 'missed; not sure we should add it, but no others except `cursor` is using it so it\'s ok for now; https://drafts.csswg.org/css-ui-3/#cursor',
				syntax: '<number>'
			},
			y: {
				comment: 'missed; not sure we should add it, but no others except `cursor` is using so it\'s ok for now; https://drafts.csswg.org/css-ui-3/#cursor',
				syntax: '<number>'
			},
			"var()": {
				comment: 'drop it since it\'s a generic (also syntax is incorrect and can\'t be parsed)',
				syntax: null
			},
			"an-plus-b": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-type": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-block": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-declaration": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-block-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"feature-value-declaration-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"general-enclosed": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"keyframe-block": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"keyframe-block-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"mf-plain": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"mf-range": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"mf-value": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-and": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-condition": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-not": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-or": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-in-parens": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-feature": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-condition-without-or": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-query": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"media-query-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			nth: {
				comment: 'syntax has <an-plus-b> that doesn\'t support currently, drop for now',
				syntax: null
			},
			"page-selector": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-selector-list": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-body": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-margin-box": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"page-margin-box-type": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			},
			"pseudo-page": {
				comment: 'syntax is incorrect and can\'t be parsed, drop for now',
				syntax: null
			}
		},
		_he = {
			properties: Ihe,
			syntaxes: zhe
		},
		Mhe = Object.freeze({
			properties: Ihe,
			syntaxes: zhe,
			default: _he
		}),
		Ghe = Mhe && _he || Mhe,
		Uhe = {
			properties: vs(ise, Ghe.properties),
			types: vs(sse, Ghe.syntaxes)
		},
		Vhe = Vme.cmpChar,
		Whe = Vme.isNumber,
		Fhe = Vme.TYPE,
		jhe = Fhe.Identifier,
		Hhe = Fhe.Number,
		Yhe = Fhe.PlusSign,
		$he = Fhe.HyphenMinus,
		Khe = {
			name: 'AnPlusB',
			structure: {
				a: [String, null],
				b: [String, null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = e,
					n = '',
					r = null,
					o = null;
				if ((this.scanner.tokenType === Hhe || this.scanner.tokenType === Yhe) && (Ts(this.scanner, !1), n = this.scanner.getTokenValue(), this.scanner.next(), t = this.scanner.tokenStart), this.scanner.tokenType === jhe) {
					var i = this.scanner.tokenStart;
					Vhe(this.scanner.source, i, $he) && ('' === n ? (n = '-', i++) : this.scanner.error('Unexpected hyphen minus')), Vhe(this.scanner.source, i, 110) || this.scanner.error(), r = '' === n ? '1' : '+' === n ? '+1' : '-' === n ? '-1' : n;
					var s = this.scanner.tokenEnd - i;
					1 < s ? (this.scanner.source.charCodeAt(i + 1) !== $he && this.scanner.error('Unexpected input', i + 1), 2 < s ? this.scanner.tokenStart = i + 2 : (this.scanner.next(), this.scanner.skipSC()), Ts(this.scanner, !0), o = '-' + this.scanner.getTokenValue(), this.scanner.next(), t = this.scanner.tokenStart) : (n = '', this.scanner.next(), t = this.scanner.tokenStart, this.scanner.skipSC(), (this.scanner.tokenType === $he || this.scanner.tokenType === Yhe) && (n = this.scanner.getTokenValue(), this.scanner.next(), this.scanner.skipSC()), this.scanner.tokenType === Hhe ? (Ts(this.scanner, '' !== n), !Whe(this.scanner.source.charCodeAt(this.scanner.tokenStart)) && (n = this.scanner.source.charAt(this.scanner.tokenStart), this.scanner.tokenStart++), '' === n ? this.scanner.error() : '+' === n && (n = ''), o = n + this.scanner.getTokenValue(), this.scanner.next(), t = this.scanner.tokenStart) : n && this.scanner.eat(Hhe))
				} else('' === n || '+' === n) && this.scanner.error('Number or identifier is expected', this.scanner.tokenStart + (this.scanner.tokenType === Yhe || this.scanner.tokenType === $he)), o = n;
				return {
					type: 'AnPlusB',
					loc: this.getLocation(e, t),
					a: r,
					b: o
				}
			},
			generate: function(e) {
				var t = null !== e.a && void 0 !== e.a,
					n = null !== e.b && void 0 !== e.b;
				t ? (this.chunk('+1' === e.a ? '+n' : '1' === e.a ? 'n' : '-1' === e.a ? '-n' : e.a + 'n'), n && (n = e.b + '', '-' === n.charAt(0) || '+' === n.charAt(0) ? (this.chunk(n.charAt(0)), this.chunk(n.substr(1))) : (this.chunk('+'), this.chunk(n)))) : this.chunk(e.b + '')
			}
		},
		Xhe = Vme.TYPE,
		Qhe = Xhe.AtKeyword,
		Zhe = Xhe.Semicolon,
		Jhe = Xhe.LeftCurlyBracket,
		efe = Xhe.RightCurlyBracket,
		tfe = {
			name: 'Atrule',
			structure: {
				name: String,
				prelude: ['AtrulePrelude', 'Raw', null],
				block: ['Block', null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n = null,
					r, a;
				switch (this.scanner.eat(Qhe), r = this.scanner.substrToCursor(e + 1), a = r.toLowerCase(), this.scanner.skipSC(), !1 === this.scanner.eof && this.scanner.tokenType !== Jhe && this.scanner.tokenType !== Zhe && (this.parseAtrulePrelude ? (t = this.parseWithFallback(this.AtrulePrelude.bind(this, r), Cs), 'AtrulePrelude' === t.type && null === t.children.head && (t = null)) : t = Cs.call(this, this.scanner.currentToken), this.scanner.skipSC()), this.scanner.tokenType) {
					case Zhe:
						this.scanner.next();
						break;
					case Jhe:
						n = this.atrule.hasOwnProperty(a) && 'function' == typeof this.atrule[a].block ? this.atrule[a].block.call(this) : this.Block(Es.call(this));
				}
				return {
					type: 'Atrule',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: r,
					prelude: t,
					block: n
				}
			},
			generate: function(e) {
				this.chunk('@'), this.chunk(e.name), null !== e.prelude && (this.chunk(' '), this.node(e.prelude)), e.block ? this.node(e.block) : this.chunk(';')
			},
			walkContext: 'atrule'
		},
		nfe = Vme.TYPE,
		rfe = nfe.Semicolon,
		afe = nfe.LeftCurlyBracket,
		ofe = Vme.TYPE,
		ife = ofe.Identifier,
		sfe = ofe.String,
		lfe = ofe.DollarSign,
		dfe = ofe.Asterisk,
		cfe = ofe.Colon,
		pfe = ofe.EqualsSign,
		ufe = ofe.LeftSquareBracket,
		mfe = ofe.RightSquareBracket,
		gfe = ofe.CircumflexAccent,
		hfe = ofe.VerticalLine,
		ffe = ofe.Tilde,
		yfe = {
			name: 'AttributeSelector',
			structure: {
				name: 'Identifier',
				matcher: [String, null],
				value: ['String', 'Identifier', null],
				flags: [String, null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n = null,
					r = null,
					a;
				return this.scanner.eat(ufe), this.scanner.skipSC(), a = As.call(this), this.scanner.skipSC(), this.scanner.tokenType !== mfe && (this.scanner.tokenType !== ife && (t = Os.call(this), this.scanner.skipSC(), n = this.scanner.tokenType === sfe ? this.String() : this.Identifier(), this.scanner.skipSC()), this.scanner.tokenType === ife && (r = this.scanner.getTokenValue(), this.scanner.next(), this.scanner.skipSC())), this.scanner.eat(mfe), {
					type: 'AttributeSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: a,
					matcher: t,
					value: n,
					flags: r
				}
			},
			generate: function(e) {
				var t = ' ';
				this.chunk('['), this.node(e.name), null !== e.matcher && (this.chunk(e.matcher), null !== e.value && (this.node(e.value), 'String' === e.value.type && (t = ''))), null !== e.flags && (this.chunk(t), this.chunk(e.flags)), this.chunk(']')
			}
		},
		bfe = Vme.TYPE,
		xfe = bfe.WhiteSpace,
		kfe = bfe.Comment,
		Sfe = bfe.Semicolon,
		wfe = bfe.AtKeyword,
		vfe = bfe.LeftCurlyBracket,
		Tfe = bfe.RightCurlyBracket,
		Cfe = Vme.TYPE,
		Efe = Cfe.LeftSquareBracket,
		Afe = Cfe.RightSquareBracket,
		Ofe = Vme.TYPE.CDC,
		Pfe = Vme.TYPE.CDO,
		Lfe = Vme.TYPE,
		qfe = Lfe.Identifier,
		Rfe = Lfe.FullStop,
		Dfe = {
			name: 'ClassSelector',
			structure: {
				name: String
			},
			parse: function() {
				return this.scanner.eat(Rfe), {
					type: 'ClassSelector',
					loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
					name: this.scanner.consume(qfe)
				}
			},
			generate: function(e) {
				this.chunk('.'), this.chunk(e.name)
			}
		},
		Nfe = Vme.TYPE,
		Bfe = Nfe.PlusSign,
		Ife = Nfe.Solidus,
		zfe = Nfe.GreaterThanSign,
		_fe = Nfe.Tilde,
		Mfe = {
			name: 'Combinator',
			structure: {
				name: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				switch (this.scanner.tokenType) {
					case zfe:
					case Bfe:
					case _fe:
						this.scanner.next();
						break;
					case Ife:
						this.scanner.next(), this.scanner.expectIdentifier('deep'), this.scanner.eat(Ife);
						break;
					default:
						this.scanner.error('Combinator is expected');
				}
				return {
					type: 'Combinator',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e) {
				this.chunk(e.name)
			}
		},
		Gfe = Vme.TYPE,
		Ufe = Gfe.Asterisk,
		Vfe = Gfe.Solidus,
		Wfe = {
			name: 'Comment',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = this.scanner.tokenEnd;
				return 2 <= t - e + 2 && this.scanner.source.charCodeAt(t - 2) === Ufe && this.scanner.source.charCodeAt(t - 1) === Vfe && (t -= 2), this.scanner.next(), {
					type: 'Comment',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.source.substring(e + 2, t)
				}
			},
			generate: function(e) {
				this.chunk('/*'), this.chunk(e.value), this.chunk('*/')
			}
		},
		Ffe = Kme.isCustomProperty,
		jfe = Vme.TYPE,
		Hfe = jfe.Identifier,
		Yfe = jfe.Colon,
		$fe = jfe.ExclamationMark,
		Kfe = jfe.Solidus,
		Xfe = jfe.Asterisk,
		Qfe = jfe.DollarSign,
		Zfe = jfe.HyphenMinus,
		Jfe = jfe.Semicolon,
		eye = jfe.PlusSign,
		tye = jfe.NumberSign,
		nye = {
			name: 'Declaration',
			structure: {
				important: [Boolean, String],
				property: String,
				value: ['Value', 'Raw']
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = this.scanner.currentToken,
					n = Is.call(this),
					r = Ffe(n),
					a = r ? this.parseCustomProperty : this.parseValue,
					o = r ? Ns : Ds,
					i = !1,
					s;
				return this.scanner.skipSC(), this.scanner.eat(Yfe), r || this.scanner.skipSC(), s = a ? this.parseWithFallback(Bs, o) : o.call(this, this.scanner.currentToken), this.scanner.tokenType === $fe && (i = zs(this.scanner), this.scanner.skipSC()), !1 === this.scanner.eof && this.scanner.tokenType !== Jfe && !1 === this.scanner.isBalanceEdge(t) && this.scanner.error(), {
					type: 'Declaration',
					loc: this.getLocation(e, this.scanner.tokenStart),
					important: i,
					property: n,
					value: s
				}
			},
			generate: function(e) {
				this.chunk(e.property), this.chunk(':'), this.node(e.value), e.important && this.chunk(!0 === e.important ? '!important' : '!' + e.important)
			},
			walkContext: 'declaration'
		},
		rye = Vme.TYPE,
		aye = rye.WhiteSpace,
		oye = rye.Comment,
		iye = rye.Semicolon,
		sye = Vme.TYPE.Number,
		lye = {
			name: 'Dimension',
			structure: {
				value: String,
				unit: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = this.scanner.consume(sye),
					n = Ms(this.scanner);
				return {
					type: 'Dimension',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: t,
					unit: n
				}
			},
			generate: function(e) {
				this.chunk(e.value), this.chunk(e.unit)
			}
		},
		dye = Vme.TYPE,
		cye = dye.RightParenthesis,
		pye = {
			name: 'Function',
			structure: {
				name: String,
				children: [
					[]
				]
			},
			parse: function(e, t) {
				var n = this.scanner.tokenStart,
					r = this.scanner.consumeFunctionName(),
					a = r.toLowerCase(),
					o;
				return o = t.hasOwnProperty(a) ? t[a].call(this, t) : e.call(this, t), this.scanner.eof || this.scanner.eat(cye), {
					type: 'Function',
					loc: this.getLocation(n, this.scanner.tokenStart),
					name: r,
					children: o
				}
			},
			generate: function(e) {
				this.chunk(e.name), this.chunk('('), this.children(e), this.chunk(')')
			},
			walkContext: 'function'
		},
		uye = Vme.isHex,
		mye = Vme.TYPE,
		gye = mye.Identifier,
		hye = mye.Number,
		fye = mye.NumberSign,
		yye = {
			name: 'HexColor',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				this.scanner.eat(fye);
				scan: switch (this.scanner.tokenType) {
					case hye:
						Gs(this.scanner, !0), this.scanner.tokenType === gye && Gs(this.scanner, !1);
						break;
					case gye:
						Gs(this.scanner, !0);
						break;
					default:
						this.scanner.error('Number or identifier is expected');
				}
				return {
					type: 'HexColor',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.substrToCursor(e + 1)
				}
			},
			generate: function(e) {
				this.chunk('#'), this.chunk(e.value)
			}
		},
		bye = Vme.TYPE,
		xye = bye.Identifier,
		kye = {
			name: 'Identifier',
			structure: {
				name: String
			},
			parse: function() {
				return {
					type: 'Identifier',
					loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
					name: this.scanner.consume(xye)
				}
			},
			generate: function(e) {
				this.chunk(e.name)
			}
		},
		Sye = Vme.TYPE,
		wye = Sye.Identifier,
		vye = Sye.NumberSign,
		Tye = {
			name: 'IdSelector',
			structure: {
				name: String
			},
			parse: function() {
				return this.scanner.eat(vye), {
					type: 'IdSelector',
					loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd),
					name: this.scanner.consume(wye)
				}
			},
			generate: function(e) {
				this.chunk('#'), this.chunk(e.name)
			}
		},
		Cye = Vme.TYPE,
		Eye = Cye.Identifier,
		Aye = Cye.Number,
		Oye = Cye.LeftParenthesis,
		Pye = Cye.RightParenthesis,
		Lye = Cye.Colon,
		qye = Cye.Solidus,
		Rye = {
			name: 'MediaFeature',
			structure: {
				name: String,
				value: ['Identifier', 'Number', 'Dimension', 'Ratio', null]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n;
				if (this.scanner.eat(Oye), this.scanner.skipSC(), n = this.scanner.consume(Eye), this.scanner.skipSC(), this.scanner.tokenType !== Pye) {
					switch (this.scanner.eat(Lye), this.scanner.skipSC(), this.scanner.tokenType) {
						case Aye:
							t = this.scanner.lookupType(1) === Eye ? this.Dimension() : this.scanner.lookupNonWSType(1) === qye ? this.Ratio() : this.Number();
							break;
						case Eye:
							t = this.Identifier();
							break;
						default:
							this.scanner.error('Number, dimension, ratio or identifier is expected');
					}
					this.scanner.skipSC()
				}
				return this.scanner.eat(Pye), {
					type: 'MediaFeature',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: n,
					value: t
				}
			},
			generate: function(e) {
				this.chunk('('), this.chunk(e.name), null !== e.value && (this.chunk(':'), this.node(e.value)), this.chunk(')')
			}
		},
		Dye = Vme.TYPE,
		Nye = Dye.WhiteSpace,
		Bye = Dye.Comment,
		Iye = Dye.Identifier,
		zye = Dye.LeftParenthesis,
		_ye = Vme.TYPE.Comma,
		Mye = Vme.TYPE.Number,
		Gye = {
			name: 'Number',
			structure: {
				value: String
			},
			parse: function() {
				return {
					type: 'Number',
					loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
					value: this.scanner.consume(Mye)
				}
			},
			generate: function(e) {
				this.chunk(e.value)
			}
		},
		Uye = {
			name: 'Operator',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				return this.scanner.next(), {
					type: 'Operator',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e) {
				this.chunk(e.value)
			}
		},
		Vye = Vme.TYPE,
		Wye = Vye.LeftParenthesis,
		Fye = Vye.RightParenthesis,
		jye = Vme.TYPE,
		Hye = jye.Number,
		Yye = jye.PercentSign,
		$ye = {
			name: 'Percentage',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = this.scanner.consume(Hye);
				return this.scanner.eat(Yye), {
					type: 'Percentage',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: t
				}
			},
			generate: function(e) {
				this.chunk(e.value), this.chunk('%')
			}
		},
		Kye = Vme.TYPE,
		Xye = Kye.Identifier,
		Qye = Kye.Function,
		Zye = Kye.Colon,
		Jye = Kye.RightParenthesis,
		ebe = {
			name: 'PseudoClassSelector',
			structure: {
				name: String,
				children: [
					['Raw'], null
				]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n, r;
				return this.scanner.eat(Zye), this.scanner.tokenType === Qye ? (n = this.scanner.consumeFunctionName(), r = n.toLowerCase(), this.pseudo.hasOwnProperty(r) ? (this.scanner.skipSC(), t = this.pseudo[r].call(this), this.scanner.skipSC()) : (t = this.createList(), t.push(this.Raw(this.scanner.currentToken, 0, 0, !1, !1))), this.scanner.eat(Jye)) : n = this.scanner.consume(Xye), {
					type: 'PseudoClassSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: n,
					children: t
				}
			},
			generate: function(e) {
				this.chunk(':'), this.chunk(e.name), null !== e.children && (this.chunk('('), this.children(e), this.chunk(')'))
			},
			walkContext: 'function'
		},
		tbe = Vme.TYPE,
		nbe = tbe.Identifier,
		rbe = tbe.Function,
		abe = tbe.Colon,
		obe = tbe.RightParenthesis,
		ibe = {
			name: 'PseudoElementSelector',
			structure: {
				name: String,
				children: [
					['Raw'], null
				]
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = null,
					n, r;
				return this.scanner.eat(abe), this.scanner.eat(abe), this.scanner.tokenType === rbe ? (n = this.scanner.consumeFunctionName(), r = n.toLowerCase(), this.pseudo.hasOwnProperty(r) ? (this.scanner.skipSC(), t = this.pseudo[r].call(this), this.scanner.skipSC()) : (t = this.createList(), t.push(this.Raw(this.scanner.currentToken, 0, 0, !1, !1))), this.scanner.eat(obe)) : n = this.scanner.consume(nbe), {
					type: 'PseudoElementSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: n,
					children: t
				}
			},
			generate: function(e) {
				this.chunk('::'), this.chunk(e.name), null !== e.children && (this.chunk('('), this.children(e), this.chunk(')'))
			},
			walkContext: 'function'
		},
		sbe = Vme.isNumber,
		lbe = Vme.TYPE,
		dbe = lbe.Number,
		cbe = lbe.Solidus,
		pbe = lbe.FullStop,
		ube = {
			name: 'Ratio',
			structure: {
				left: String,
				right: String
			},
			parse: function() {
				var e = this.scanner.tokenStart,
					t = Us(this.scanner),
					n;
				return this.scanner.eatNonWS(cbe), n = Us(this.scanner), {
					type: 'Ratio',
					loc: this.getLocation(e, this.scanner.tokenStart),
					left: t,
					right: n
				}
			},
			generate: function(e) {
				this.chunk(e.left), this.chunk('/'), this.chunk(e.right)
			}
		},
		mbe = {
			name: 'Raw',
			structure: {
				value: String
			},
			parse: function(e, t, n, r, a) {
				var o = this.scanner.getTokenStart(e),
					i;
				return this.scanner.skip(this.scanner.getRawLength(e, t, n, r)), i = a && this.scanner.tokenStart > o ? this.scanner.getOffsetExcludeWS() : this.scanner.tokenStart, {
					type: 'Raw',
					loc: this.getLocation(o, i),
					value: this.scanner.source.substring(o, i)
				}
			},
			generate: function(e) {
				this.chunk(e.value)
			}
		},
		gbe = Vme.TYPE,
		hbe = gbe.LeftCurlyBracket,
		fbe = Vme.TYPE,
		ybe = fbe.Comma,
		bbe = Vme.TYPE.String,
		xbe = {
			name: 'String',
			structure: {
				value: String
			},
			parse: function() {
				return {
					type: 'String',
					loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd),
					value: this.scanner.consume(bbe)
				}
			},
			generate: function(e) {
				this.chunk(e.value)
			}
		},
		kbe = Vme.TYPE,
		Sbe = kbe.WhiteSpace,
		wbe = kbe.Comment,
		vbe = kbe.ExclamationMark,
		Tbe = kbe.AtKeyword,
		Cbe = kbe.CDO,
		Ebe = kbe.CDC,
		Abe = Vme.TYPE,
		Obe = Abe.Identifier,
		Pbe = Abe.Asterisk,
		Lbe = Abe.VerticalLine,
		qbe = {
			name: 'TypeSelector',
			structure: {
				name: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				return this.scanner.tokenType === Lbe ? (this.scanner.next(), js.call(this)) : (js.call(this), this.scanner.tokenType === Lbe && (this.scanner.next(), js.call(this))), {
					type: 'TypeSelector',
					loc: this.getLocation(e, this.scanner.tokenStart),
					name: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e) {
				this.chunk(e.name)
			}
		},
		Rbe = Vme.isHex,
		Dbe = Vme.TYPE,
		Nbe = Dbe.Identifier,
		Bbe = Dbe.Number,
		Ibe = Dbe.PlusSign,
		zbe = Dbe.HyphenMinus,
		_be = Dbe.FullStop,
		Mbe = Dbe.QuestionMark,
		Gbe = {
			name: 'UnicodeRange',
			structure: {
				value: String
			},
			parse: function() {
				var e = this.scanner.tokenStart;
				return this.scanner.next(), Ys(this.scanner), {
					type: 'UnicodeRange',
					loc: this.getLocation(e, this.scanner.tokenStart),
					value: this.scanner.substrToCursor(e)
				}
			},
			generate: function(e) {
				this.chunk(e.value)
			}
		},
		Ube = Vme.TYPE,
		Vbe = Ube.String,
		Wbe = Ube.Url,
		Fbe = Ube.Raw,
		jbe = Ube.RightParenthesis,
		Hbe = Vme.TYPE.WhiteSpace,
		Ybe = Object.freeze({
			type: 'WhiteSpace',
			loc: null,
			value: ' '
		}),
		$be = {
			name: 'WhiteSpace',
			structure: {
				value: String
			},
			parse: function() {
				return this.scanner.eat(Hbe), Ybe
			},
			generate: function(e) {
				this.chunk(e.value)
			}
		},
		Kbe = {
			AnPlusB: Khe,
			Atrule: tfe,
			AtrulePrelude: {
				name: 'AtrulePrelude',
				structure: {
					children: [
						[]
					]
				},
				parse: function(e) {
					var t = null;
					return null !== e && (e = e.toLowerCase()), this.scanner.skipSC(), t = this.atrule.hasOwnProperty(e) && 'function' == typeof this.atrule[e].prelude ? this.atrule[e].prelude.call(this) : this.readSequence(this.scope.AtrulePrelude), this.scanner.skipSC(), !0 !== this.scanner.eof && this.scanner.tokenType !== afe && this.scanner.tokenType !== rfe && this.scanner.error('Semicolon or block is expected'), null === t && (t = this.createList()), {
						type: 'AtrulePrelude',
						loc: this.getLocationFromList(t),
						children: t
					}
				},
				generate: function(e) {
					this.children(e)
				},
				walkContext: 'atrulePrelude'
			},
			AttributeSelector: yfe,
			Block: {
				name: 'Block',
				structure: {
					children: [
						['Atrule', 'Rule', 'Declaration']
					]
				},
				parse: function(e) {
					var t = e ? Rs : Ls,
						n = this.scanner.tokenStart,
						r = this.createList();
					this.scanner.eat(vfe);
					scan: for (; !this.scanner.eof;) switch (this.scanner.tokenType) {
						case Tfe:
							break scan;
						case xfe:
						case kfe:
							this.scanner.next();
							break;
						case wfe:
							r.push(this.parseWithFallback(this.Atrule, Ps));
							break;
						default:
							r.push(t.call(this));
					}
					return this.scanner.eof || this.scanner.eat(Tfe), {
						type: 'Block',
						loc: this.getLocation(n, this.scanner.tokenStart),
						children: r
					}
				},
				generate: function(e) {
					this.chunk('{'), this.children(e, function(e) {
						'Declaration' === e.type && this.chunk(';')
					}), this.chunk('}')
				},
				walkContext: 'block'
			},
			Brackets: {
				name: 'Brackets',
				structure: {
					children: [
						[]
					]
				},
				parse: function(e, t) {
					var n = this.scanner.tokenStart,
						r = null;
					return this.scanner.eat(Efe), r = e.call(this, t), this.scanner.eof || this.scanner.eat(Afe), {
						type: 'Brackets',
						loc: this.getLocation(n, this.scanner.tokenStart),
						children: r
					}
				},
				generate: function(e) {
					this.chunk('['), this.children(e), this.chunk(']')
				}
			},
			CDC: {
				name: 'CDC',
				structure: [],
				parse: function() {
					var e = this.scanner.tokenStart;
					return this.scanner.eat(Ofe), {
						type: 'CDC',
						loc: this.getLocation(e, this.scanner.tokenStart)
					}
				},
				generate: function() {
					this.chunk('-->')
				}
			},
			CDO: {
				name: 'CDO',
				structure: [],
				parse: function() {
					var e = this.scanner.tokenStart;
					return this.scanner.eat(Pfe), {
						type: 'CDO',
						loc: this.getLocation(e, this.scanner.tokenStart)
					}
				},
				generate: function() {
					this.chunk('<!--')
				}
			},
			ClassSelector: Dfe,
			Combinator: Mfe,
			Comment: Wfe,
			Declaration: nye,
			DeclarationList: {
				name: 'DeclarationList',
				structure: {
					children: [
						['Declaration']
					]
				},
				parse: function() {
					var e = this.createList();
					scan: for (; !this.scanner.eof;) switch (this.scanner.tokenType) {
						case aye:
						case oye:
						case iye:
							this.scanner.next();
							break;
						default:
							e.push(this.parseWithFallback(this.Declaration, _s));
					}
					return {
						type: 'DeclarationList',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e) {
					this.children(e, function(e) {
						'Declaration' === e.type && this.chunk(';')
					})
				}
			},
			Dimension: lye,
			Function: pye,
			HexColor: yye,
			Identifier: kye,
			IdSelector: Tye,
			MediaFeature: Rye,
			MediaQuery: {
				name: 'MediaQuery',
				structure: {
					children: [
						['Identifier', 'MediaFeature', 'WhiteSpace']
					]
				},
				parse: function() {
					this.scanner.skipSC();
					var e = this.createList(),
						t = null,
						n = null;
					scan: for (; !this.scanner.eof;) {
						switch (this.scanner.tokenType) {
							case Bye:
								this.scanner.next();
								continue;
							case Nye:
								n = this.WhiteSpace();
								continue;
							case Iye:
								t = this.Identifier();
								break;
							case zye:
								t = this.MediaFeature();
								break;
							default:
								break scan;
						}
						null !== n && (e.push(n), n = null), e.push(t)
					}
					return null === t && this.scanner.error('Identifier or parenthesis is expected'), {
						type: 'MediaQuery',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e) {
					this.children(e)
				}
			},
			MediaQueryList: {
				name: 'MediaQueryList',
				structure: {
					children: [
						['MediaQuery']
					]
				},
				parse: function(e) {
					var t = this.createList();
					for (this.scanner.skipSC(); !this.scanner.eof && (t.push(this.MediaQuery(e)), this.scanner.tokenType === _ye);) this.scanner.next();
					return {
						type: 'MediaQueryList',
						loc: this.getLocationFromList(t),
						children: t
					}
				},
				generate: function(e) {
					this.children(e, function() {
						this.chunk(',')
					})
				}
			},
			Nth: {
				name: 'Nth',
				structure: {
					nth: ['AnPlusB', 'Identifier'],
					selector: ['SelectorList', null]
				},
				parse: function(e) {
					this.scanner.skipSC();
					var t = this.scanner.tokenStart,
						n = t,
						r = null,
						a;
					return a = this.scanner.lookupValue(0, 'odd') || this.scanner.lookupValue(0, 'even') ? this.Identifier() : this.AnPlusB(), this.scanner.skipSC(), e && this.scanner.lookupValue(0, 'of') ? (this.scanner.next(), r = this.SelectorList(), this.needPositions && (n = this.getLastListNode(r.children).loc.end.offset)) : this.needPositions && (n = a.loc.end.offset), {
						type: 'Nth',
						loc: this.getLocation(t, n),
						nth: a,
						selector: r
					}
				},
				generate: function(e) {
					this.node(e.nth), null !== e.selector && (this.chunk(' of '), this.node(e.selector))
				}
			},
			Number: Gye,
			Operator: Uye,
			Parentheses: {
				name: 'Parentheses',
				structure: {
					children: [
						[]
					]
				},
				parse: function(e, t) {
					var n = this.scanner.tokenStart,
						r = null;
					return this.scanner.eat(Wye), r = e.call(this, t), this.scanner.eof || this.scanner.eat(Fye), {
						type: 'Parentheses',
						loc: this.getLocation(n, this.scanner.tokenStart),
						children: r
					}
				},
				generate: function(e) {
					this.chunk('('), this.children(e), this.chunk(')')
				}
			},
			Percentage: $ye,
			PseudoClassSelector: ebe,
			PseudoElementSelector: ibe,
			Ratio: ube,
			Raw: mbe,
			Rule: {
				name: 'Rule',
				structure: {
					prelude: ['SelectorList', 'Raw'],
					block: ['Block']
				},
				parse: function() {
					var e = this.scanner.currentToken,
						t = this.scanner.tokenStart,
						n, r;
					return n = this.parseRulePrelude ? this.parseWithFallback(Ws, Vs) : Vs.call(this, e), r = this.Block(!0), {
						type: 'Rule',
						loc: this.getLocation(t, this.scanner.tokenStart),
						prelude: n,
						block: r
					}
				},
				generate: function(e) {
					this.node(e.prelude), this.node(e.block)
				},
				walkContext: 'rule'
			},
			Selector: {
				name: 'Selector',
				structure: {
					children: [
						['TypeSelector', 'IdSelector', 'ClassSelector', 'AttributeSelector', 'PseudoClassSelector', 'PseudoElementSelector', 'Combinator', 'WhiteSpace']
					]
				},
				parse: function() {
					var e = this.readSequence(this.scope.Selector);
					return null === this.getFirstListNode(e) && this.scanner.error('Selector is expected'), {
						type: 'Selector',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e) {
					this.children(e)
				}
			},
			SelectorList: {
				name: 'SelectorList',
				structure: {
					children: [
						['Selector', 'Raw']
					]
				},
				parse: function() {
					for (var e = this.createList(); !this.scanner.eof;) {
						if (e.push(this.Selector()), this.scanner.tokenType === ybe) {
							this.scanner.next();
							continue
						}
						break
					}
					return {
						type: 'SelectorList',
						loc: this.getLocationFromList(e),
						children: e
					}
				},
				generate: function(e) {
					this.children(e, function() {
						this.chunk(',')
					})
				},
				walkContext: 'selector'
			},
			String: xbe,
			StyleSheet: {
				name: 'StyleSheet',
				structure: {
					children: [
						['Comment', 'CDO', 'CDC', 'Atrule', 'Rule', 'Raw']
					]
				},
				parse: function() {
					var e = this.scanner.tokenStart,
						t = this.createList(),
						n;
					scan: for (; !this.scanner.eof;) {
						switch (this.scanner.tokenType) {
							case Sbe:
								this.scanner.next();
								continue;
							case wbe:
								if (this.scanner.source.charCodeAt(this.scanner.tokenStart + 2) !== vbe) {
									this.scanner.next();
									continue
								}
								n = this.Comment();
								break;
							case Cbe:
								n = this.CDO();
								break;
							case Ebe:
								n = this.CDC();
								break;
							case Tbe:
								n = this.parseWithFallback(this.Atrule, Fs);
								break;
							default:
								n = this.parseWithFallback(this.Rule, Fs);
						}
						t.push(n)
					}
					return {
						type: 'StyleSheet',
						loc: this.getLocation(e, this.scanner.tokenStart),
						children: t
					}
				},
				generate: function(e) {
					this.children(e)
				},
				walkContext: 'stylesheet'
			},
			TypeSelector: qbe,
			UnicodeRange: Gbe,
			Url: {
				name: 'Url',
				structure: {
					value: ['String', 'Raw']
				},
				parse: function() {
					var e = this.scanner.tokenStart,
						t;
					switch (this.scanner.eat(Wbe), this.scanner.skipSC(), this.scanner.tokenType) {
						case Vbe:
							t = this.String();
							break;
						case Fbe:
							t = this.Raw(this.scanner.currentToken, 0, Fbe, !0, !1);
							break;
						default:
							this.scanner.error('String or Raw is expected');
					}
					return this.scanner.skipSC(), this.scanner.eat(jbe), {
						type: 'Url',
						loc: this.getLocation(e, this.scanner.tokenStart),
						value: t
					}
				},
				generate: function(e) {
					this.chunk('url'), this.chunk('('), this.node(e.value), this.chunk(')')
				}
			},
			Value: {
				name: 'Value',
				structure: {
					children: [
						[]
					]
				},
				parse: function() {
					var e = this.scanner.tokenStart,
						t = this.readSequence(this.scope.Value);
					return {
						type: 'Value',
						loc: this.getLocation(e, this.scanner.tokenStart),
						children: t
					}
				},
				generate: function(e) {
					this.children(e)
				}
			},
			WhiteSpace: $be
		},
		Xbe = {
			generic: !0,
			types: Uhe.types,
			properties: Uhe.properties,
			node: Kbe
		},
		Qbe = Vme.cmpChar,
		Zbe = Vme.TYPE,
		Jbe = Zbe.Identifier,
		exe = Zbe.String,
		txe = Zbe.Number,
		nxe = Zbe.Function,
		rxe = Zbe.Url,
		axe = Zbe.NumberSign,
		oxe = Zbe.LeftParenthesis,
		ixe = Zbe.LeftSquareBracket,
		sxe = Zbe.PlusSign,
		lxe = Zbe.HyphenMinus,
		dxe = Zbe.Comma,
		cxe = Zbe.Solidus,
		pxe = Zbe.Asterisk,
		uxe = Zbe.PercentSign,
		mxe = Zbe.Backslash,
		gxe = function(e) {
			switch (this.scanner.tokenType) {
				case axe:
					return this.HexColor();
				case dxe:
					return e.space = null, e.ignoreWSAfter = !0, this.Operator();
				case cxe:
				case pxe:
				case sxe:
				case lxe:
					return this.Operator();
				case oxe:
					return this.Parentheses(this.readSequence, e.recognizer);
				case ixe:
					return this.Brackets(this.readSequence, e.recognizer);
				case exe:
					return this.String();
				case txe:
					switch (this.scanner.lookupType(1)) {
						case uxe:
							return this.Percentage();
						case Jbe:
							return Qbe(this.scanner.source, this.scanner.tokenEnd, mxe) ? this.Number() : this.Dimension();
						default:
							return this.Number();
					}
				case nxe:
					return this.Function(this.readSequence, e.recognizer);
				case rxe:
					return this.Url();
				case Jbe:
					return Qbe(this.scanner.source, this.scanner.tokenStart, 117) && Qbe(this.scanner.source, this.scanner.tokenStart + 1, sxe) ? this.UnicodeRange() : this.Identifier();
			}
		},
		hxe = Vme.TYPE,
		fxe = hxe.Identifier,
		yxe = hxe.Number,
		bxe = hxe.NumberSign,
		xxe = hxe.LeftSquareBracket,
		kxe = hxe.PlusSign,
		Sxe = hxe.Solidus,
		wxe = hxe.Asterisk,
		vxe = hxe.FullStop,
		Txe = hxe.Colon,
		Cxe = hxe.GreaterThanSign,
		Exe = hxe.VerticalLine,
		Axe = hxe.Tilde,
		Oxe = function() {
			this.scanner.skipSC();
			var e = this.createSingleNodeList(this.IdSelector());
			return this.scanner.skipSC(), e
		},
		Pxe = Vme.TYPE,
		Lxe = Pxe.Identifier,
		qxe = Pxe.Comma,
		Rxe = Pxe.Semicolon,
		Dxe = Pxe.HyphenMinus,
		Nxe = Pxe.ExclamationMark,
		Bxe = Vme.TYPE,
		Ixe = Bxe.String,
		zxe = Bxe.Identifier,
		_xe = Bxe.Url,
		Mxe = Bxe.LeftParenthesis,
		Gxe = Vme.TYPE,
		Uxe = Gxe.WhiteSpace,
		Vxe = Gxe.Comment,
		Wxe = Gxe.Identifier,
		Fxe = Gxe.Function,
		jxe = Gxe.LeftParenthesis,
		Hxe = Gxe.HyphenMinus,
		Yxe = Gxe.Colon,
		$xe = {
			parse: function() {
				return this.createSingleNodeList(this.SelectorList())
			}
		},
		Kxe = {
			parse: function() {
				return this.createSingleNodeList(this.Nth(!0))
			}
		},
		Xxe = {
			parse: function() {
				return this.createSingleNodeList(this.Nth(!1))
			}
		},
		Qxe = {
			create: function(e) {
				return ws(Bhe({}, e))
			}
		}.create(function() {
			for (var e = {}, t = 0, n; t < arguments.length; t++)
				for (var r in n = arguments[t], n) e[r] = n[r];
			return e
		}(Xbe, {
			parseContext: {
				default: 'StyleSheet',
				stylesheet: 'StyleSheet',
				atrule: 'Atrule',
				atrulePrelude: function(e) {
					return this.AtrulePrelude(e.atrule ? e.atrule + '' : null)
				},
				mediaQueryList: 'MediaQueryList',
				mediaQuery: 'MediaQuery',
				rule: 'Rule',
				selectorList: 'SelectorList',
				selector: 'Selector',
				block: function() {
					return this.Block(!0)
				},
				declarationList: 'DeclarationList',
				declaration: 'Declaration',
				value: 'Value'
			},
			scope: {
				AtrulePrelude: {
					getNode: gxe
				},
				Selector: {
					getNode: function(e) {
						switch (this.scanner.tokenType) {
							case kxe:
							case Cxe:
							case Axe:
								return e.space = null, e.ignoreWSAfter = !0, this.Combinator();
							case Sxe:
								return this.Combinator();
							case vxe:
								return this.ClassSelector();
							case xxe:
								return this.AttributeSelector();
							case bxe:
								return this.IdSelector();
							case Txe:
								return this.scanner.lookupType(1) === Txe ? this.PseudoElementSelector() : this.PseudoClassSelector();
							case fxe:
							case wxe:
							case Exe:
								return this.TypeSelector();
							case yxe:
								return this.Percentage();
						}
					}
				},
				Value: {
					getNode: gxe,
					"-moz-element": Oxe,
					element: Oxe,
					expression: function() {
						return this.createSingleNodeList(this.Raw(this.scanner.currentToken, 0, 0, !1, !1))
					},
					var: function() {
						var e = this.createList();
						this.scanner.skipSC();
						var t = this.scanner.tokenStart;
						return this.scanner.eat(Dxe), this.scanner.source.charCodeAt(this.scanner.tokenStart) !== Dxe && this.scanner.error('HyphenMinus is expected'), this.scanner.eat(Lxe), e.push({
							type: 'Identifier',
							loc: this.getLocation(t, this.scanner.tokenStart),
							name: this.scanner.substrToCursor(t)
						}), this.scanner.skipSC(), this.scanner.tokenType === qxe && (e.push(this.Operator()), e.push(this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.currentToken, Nxe, Rxe, !1, !1))), e
					}
				}
			},
			atrule: {
				"font-face": {
					parse: {
						prelude: null,
						block: function() {
							return this.Block(!0)
						}
					}
				},
				import: {
					parse: {
						prelude: function() {
							var e = this.createList();
							switch (this.scanner.skipSC(), this.scanner.tokenType) {
								case Ixe:
									e.push(this.String());
									break;
								case _xe:
									e.push(this.Url());
									break;
								default:
									this.scanner.error('String or url() is expected');
							}
							return (this.scanner.lookupNonWSType(0) === zxe || this.scanner.lookupNonWSType(0) === Mxe) && (e.push(this.WhiteSpace()), e.push(this.MediaQueryList())), e
						},
						block: null
					}
				},
				media: {
					parse: {
						prelude: function() {
							return this.createSingleNodeList(this.MediaQueryList())
						},
						block: function() {
							return this.Block(!1)
						}
					}
				},
				page: {
					parse: {
						prelude: function() {
							return this.createSingleNodeList(this.SelectorList())
						},
						block: function() {
							return this.Block(!0)
						}
					}
				},
				supports: {
					parse: {
						prelude: function() {
							var e = Xs.call(this);
							return null === this.getFirstListNode(e) && this.scanner.error('Condition is expected'), e
						},
						block: function() {
							return this.Block(!1)
						}
					}
				}
			},
			pseudo: {
				dir: {
					parse: function() {
						return this.createSingleNodeList(this.Identifier())
					}
				},
				has: {
					parse: function() {
						return this.createSingleNodeList(this.SelectorList())
					}
				},
				lang: {
					parse: function() {
						return this.createSingleNodeList(this.Identifier())
					}
				},
				matches: $xe,
				not: $xe,
				"nth-child": Kxe,
				"nth-last-child": Kxe,
				"nth-last-of-type": Xxe,
				"nth-of-type": Xxe,
				slotted: {
					parse: function() {
						return this.createSingleNodeList(this.Selector())
					}
				}
			},
			node: Kbe
		}, {
			node: Kbe
		}));
	var Zxe = Qxe,
		Jxe = Object.prototype.hasOwnProperty,
		eke = {
			buildIndex: function(e) {
				var t = !1;
				if (e.scopes && Array.isArray(e.scopes)) {
					t = Object.create(null);
					for (var n = 0, r; n < e.scopes.length; n++) {
						if (r = e.scopes[n], !r || !Array.isArray(r)) throw new Error('Wrong usage format');
						for (var a = 0, o; a < r.length; a++) {
							if (o = r[a], Jxe.call(t, o)) throw new Error('Class can\'t be used for several scopes: ' + o);
							t[o] = n + 1
						}
					}
				}
				return {
					whitelist: Zs(e),
					blacklist: Zs(e.blacklist),
					scopes: t
				}
			}
		},
		tke = Zxe.keyword,
		nke = Object.prototype.hasOwnProperty,
		rke = Zxe.walk,
		ake = Zxe.walk,
		oke = {
			Atrule: function(e, t, n) {
				if (e.block && (null !== this.stylesheet && (this.stylesheet.firstAtrulesAllowed = !1), e.block.children.isEmpty())) return void n.remove(t);
				switch (e.name) {
					case 'charset':
						if (!e.prelude || e.prelude.children.isEmpty()) return void n.remove(t);
						if (t.prev) return void n.remove(t);
						break;
					case 'import':
						if (null === this.stylesheet || !this.stylesheet.firstAtrulesAllowed) return void n.remove(t);
						n.prevUntil(t.prev, function(e) {
							if ('Atrule' !== e.type || 'import' !== e.name && 'charset' !== e.name) return this.root.firstAtrulesAllowed = !1, n.remove(t), !0
						}, this);
						break;
					default:
						var r = tke(e.name).basename;
						('keyframes' === r || 'media' === r || 'supports' === r) && (!e.prelude || e.prelude.children.isEmpty()) && n.remove(t);
				}
			},
			Rule: function(e, t, n, r) {
				var a = r.usage;
				a && (null !== a.whitelist || null !== a.blacklist) && Js(e.prelude, a), (e.prelude.children.isEmpty() || e.block.children.isEmpty()) && n.remove(t)
			},
			Declaration: function(e, t, n) {
				e.value.children && e.value.children.isEmpty() && n.remove(t)
			},
			TypeSelector: function(e, t, n) {
				var r = t.data.name;
				if ('*' === r) {
					var a = t.next && t.next.data.type;
					('IdSelector' === a || 'ClassSelector' === a || 'AttributeSelector' === a || 'PseudoClassSelector' === a || 'PseudoElementSelector' === a) && n.remove(t)
				}
			},
			Comment: function(e, t, n) {
				n.remove(t)
			},
			Operator: function(e, t, n) {
				'+' === e.value || '-' === e.value || (null !== t.prev && 'WhiteSpace' === t.prev.data.type && n.remove(t.prev), null !== t.next && 'WhiteSpace' === t.next.data.type && n.remove(t.next))
			},
			WhiteSpace: function(e, t, n) {
				return null === t.next || null === t.prev ? void n.remove(t) : 'WhiteSpace' === t.prev.data.type ? void n.remove(t) : null !== this.stylesheet && this.stylesheet.children === n || null !== this.block && this.block.children === n ? void n.remove(t) : void 0
			}
		},
		ike = function(e, t) {
			ake(e, {
				leave: function(e, n, r) {
					oke.hasOwnProperty(e.type) && oke[e.type].call(this, e, n, r, t)
				}
			})
		},
		ske = function(e) {
			e.block.children.each(function(e) {
				e.prelude.children.each(function(e) {
					e.children.each(function(e, t) {
						'Percentage' === e.type && '100' === e.value ? t.data = {
							type: 'TypeSelector',
							loc: e.loc,
							name: 'to'
						} : 'TypeSelector' === e.type && 'from' === e.name && (t.data = {
							type: 'Percentage',
							loc: e.loc,
							value: '0'
						})
					})
				})
			})
		},
		lke = Zxe.keyword,
		dke = /\\([0-9A-Fa-f]{1,6})(\r\n|[ \t\n\f\r])?|\\./g,
		cke = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/,
		pke = Zxe.List,
		uke = function(e) {
			e.children.each(function(e, t, n) {
				'Identifier' === e.type && 'none' === e.name.toLowerCase() && (n.head === n.tail ? t.data = {
					type: 'Number',
					loc: e.loc,
					value: '0'
				} : nl(n, t))
			})
		},
		mke = Zxe.property,
		gke = {
			font: function(e) {
				var t = e.children;
				t.eachRight(function(e, t) {
					if ('Identifier' === e.type)
						if ('bold' === e.name) t.data = {
							type: 'Number',
							loc: e.loc,
							value: '700'
						};
						else if ('normal' === e.name) {
						var n = t.prev;
						n && 'Operator' === n.data.type && '/' === n.data.value && this.remove(n), this.remove(t)
					} else if ('medium' === e.name) {
						var r = t.next;
						r && 'Operator' === r.data.type || this.remove(t)
					}
				}), t.each(function(e, t) {
					'WhiteSpace' !== e.type || t.prev && t.next && 'WhiteSpace' !== t.next.data.type || this.remove(t)
				}), t.isEmpty() && t.insert(t.createItem({
					type: 'Identifier',
					name: 'normal'
				}))
			},
			"font-weight": function(e) {
				var t = e.children.head.data;
				if ('Identifier' === t.type) switch (t.name) {
					case 'normal':
						e.children.head.data = {
							type: 'Number',
							loc: t.loc,
							value: '400'
						};
						break;
					case 'bold':
						e.children.head.data = {
							type: 'Number',
							loc: t.loc,
							value: '700'
						};
				}
			},
			background: function(e) {
				function t() {
					if (a.length) return a[a.length - 1].type
				}

				function n() {
					'WhiteSpace' === t() && a.pop(), a.length || a.unshift({
						type: 'Number',
						loc: null,
						value: '0'
					}, {
						type: 'WhiteSpace',
						value: ' '
					}, {
						type: 'Number',
						loc: null,
						value: '0'
					}), r.push.apply(r, a), a = []
				}
				var r = [],
					a = [];
				e.children.each(function(e) {
					return 'Operator' === e.type && ',' === e.value ? (n(), void r.push(e)) : void('Identifier' === e.type && ('transparent' === e.name || 'none' === e.name || 'repeat' === e.name || 'scroll' === e.name) || 'WhiteSpace' === e.type && (!a.length || 'WhiteSpace' === t()) || a.push(e))
				}), n(), e.children = new pke().fromArray(r)
			},
			border: uke,
			outline: uke
		},
		hke = /^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/,
		fke = /^([\+\-])?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/,
		yke = {
			Dimension: !0,
			HexColor: !0,
			Identifier: !0,
			Number: !0,
			Raw: !0,
			UnicodeRange: !0
		},
		bke = function(e, t) {
			e.value = rl(e.value, t)
		};
	bke.pack = rl;
	var xke = bke.pack,
		kke = {
			px: !0,
			mm: !0,
			cm: !0,
			in: !0,
			pt: !0,
			pc: !0,
			em: !0,
			ex: !0,
			ch: !0,
			rem: !0,
			vh: !0,
			vw: !0,
			vmin: !0,
			vmax: !0,
			vm: !0
		},
		Ske = bke.pack,
		wke = {
			margin: !0,
			"margin-top": !0,
			"margin-left": !0,
			"margin-bottom": !0,
			"margin-right": !0,
			padding: !0,
			"padding-top": !0,
			"padding-left": !0,
			"padding-bottom": !0,
			"padding-right": !0,
			top: !0,
			left: !0,
			bottom: !0,
			right: !0,
			"background-position": !0,
			"background-position-x": !0,
			"background-position-y": !0,
			"background-size": !0,
			border: !0,
			"border-width": !0,
			"border-top-width": !0,
			"border-left-width": !0,
			"border-bottom-width": !0,
			"border-right-width": !0,
			"border-image-width": !0,
			"border-radius": !0,
			"border-bottom-left-radius": !0,
			"border-bottom-right-radius": !0,
			"border-top-left-radius": !0,
			"border-top-right-radius": !0
		},
		vke = /^((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?|\\[^\n\r\f0-9a-fA-F])|[^"'\(\)\\\s [\b]\v-])*$/i,
		Tke = Zxe.lexer,
		Cke = bke.pack,
		Eke = {
			aliceblue: 'f0f8ff',
			antiquewhite: 'faebd7',
			aqua: '0ff',
			aquamarine: '7fffd4',
			azure: 'f0ffff',
			beige: 'f5f5dc',
			bisque: 'ffe4c4',
			black: '000',
			blanchedalmond: 'ffebcd',
			blue: '00f',
			blueviolet: '8a2be2',
			brown: 'a52a2a',
			burlywood: 'deb887',
			cadetblue: '5f9ea0',
			chartreuse: '7fff00',
			chocolate: 'd2691e',
			coral: 'ff7f50',
			cornflowerblue: '6495ed',
			cornsilk: 'fff8dc',
			crimson: 'dc143c',
			cyan: '0ff',
			darkblue: '00008b',
			darkcyan: '008b8b',
			darkgoldenrod: 'b8860b',
			darkgray: 'a9a9a9',
			darkgrey: 'a9a9a9',
			darkgreen: '006400',
			darkkhaki: 'bdb76b',
			darkmagenta: '8b008b',
			darkolivegreen: '556b2f',
			darkorange: 'ff8c00',
			darkorchid: '9932cc',
			darkred: '8b0000',
			darksalmon: 'e9967a',
			darkseagreen: '8fbc8f',
			darkslateblue: '483d8b',
			darkslategray: '2f4f4f',
			darkslategrey: '2f4f4f',
			darkturquoise: '00ced1',
			darkviolet: '9400d3',
			deeppink: 'ff1493',
			deepskyblue: '00bfff',
			dimgray: '696969',
			dimgrey: '696969',
			dodgerblue: '1e90ff',
			firebrick: 'b22222',
			floralwhite: 'fffaf0',
			forestgreen: '228b22',
			fuchsia: 'f0f',
			gainsboro: 'dcdcdc',
			ghostwhite: 'f8f8ff',
			gold: 'ffd700',
			goldenrod: 'daa520',
			gray: '808080',
			grey: '808080',
			green: '008000',
			greenyellow: 'adff2f',
			honeydew: 'f0fff0',
			hotpink: 'ff69b4',
			indianred: 'cd5c5c',
			indigo: '4b0082',
			ivory: 'fffff0',
			khaki: 'f0e68c',
			lavender: 'e6e6fa',
			lavenderblush: 'fff0f5',
			lawngreen: '7cfc00',
			lemonchiffon: 'fffacd',
			lightblue: 'add8e6',
			lightcoral: 'f08080',
			lightcyan: 'e0ffff',
			lightgoldenrodyellow: 'fafad2',
			lightgray: 'd3d3d3',
			lightgrey: 'd3d3d3',
			lightgreen: '90ee90',
			lightpink: 'ffb6c1',
			lightsalmon: 'ffa07a',
			lightseagreen: '20b2aa',
			lightskyblue: '87cefa',
			lightslategray: '789',
			lightslategrey: '789',
			lightsteelblue: 'b0c4de',
			lightyellow: 'ffffe0',
			lime: '0f0',
			limegreen: '32cd32',
			linen: 'faf0e6',
			magenta: 'f0f',
			maroon: '800000',
			mediumaquamarine: '66cdaa',
			mediumblue: '0000cd',
			mediumorchid: 'ba55d3',
			mediumpurple: '9370db',
			mediumseagreen: '3cb371',
			mediumslateblue: '7b68ee',
			mediumspringgreen: '00fa9a',
			mediumturquoise: '48d1cc',
			mediumvioletred: 'c71585',
			midnightblue: '191970',
			mintcream: 'f5fffa',
			mistyrose: 'ffe4e1',
			moccasin: 'ffe4b5',
			navajowhite: 'ffdead',
			navy: '000080',
			oldlace: 'fdf5e6',
			olive: '808000',
			olivedrab: '6b8e23',
			orange: 'ffa500',
			orangered: 'ff4500',
			orchid: 'da70d6',
			palegoldenrod: 'eee8aa',
			palegreen: '98fb98',
			paleturquoise: 'afeeee',
			palevioletred: 'db7093',
			papayawhip: 'ffefd5',
			peachpuff: 'ffdab9',
			peru: 'cd853f',
			pink: 'ffc0cb',
			plum: 'dda0dd',
			powderblue: 'b0e0e6',
			purple: '800080',
			rebeccapurple: '639',
			red: 'f00',
			rosybrown: 'bc8f8f',
			royalblue: '4169e1',
			saddlebrown: '8b4513',
			salmon: 'fa8072',
			sandybrown: 'f4a460',
			seagreen: '2e8b57',
			seashell: 'fff5ee',
			sienna: 'a0522d',
			silver: 'c0c0c0',
			skyblue: '87ceeb',
			slateblue: '6a5acd',
			slategray: '708090',
			slategrey: '708090',
			snow: 'fffafa',
			springgreen: '00ff7f',
			steelblue: '4682b4',
			tan: 'd2b48c',
			teal: '008080',
			thistle: 'd8bfd8',
			tomato: 'ff6347',
			turquoise: '40e0d0',
			violet: 'ee82ee',
			wheat: 'f5deb3',
			white: 'fff',
			whitesmoke: 'f5f5f5',
			yellow: 'ff0',
			yellowgreen: '9acd32'
		},
		Ake = {
			800000: 'maroon',
			800080: 'purple',
			808000: 'olive',
			808080: 'gray',
			"00ffff": 'cyan',
			f0ffff: 'azure',
			f5f5dc: 'beige',
			ffe4c4: 'bisque',
			"000000": 'black',
			"0000ff": 'blue',
			a52a2a: 'brown',
			ff7f50: 'coral',
			ffd700: 'gold',
			"008000": 'green',
			"4b0082": 'indigo',
			fffff0: 'ivory',
			f0e68c: 'khaki',
			"00ff00": 'lime',
			faf0e6: 'linen',
			"000080": 'navy',
			ffa500: 'orange',
			da70d6: 'orchid',
			cd853f: 'peru',
			ffc0cb: 'pink',
			dda0dd: 'plum',
			f00: 'red',
			ff0000: 'red',
			fa8072: 'salmon',
			a0522d: 'sienna',
			c0c0c0: 'silver',
			fffafa: 'snow',
			d2b48c: 'tan',
			"008080": 'teal',
			ff6347: 'tomato',
			ee82ee: 'violet',
			f5deb3: 'wheat',
			ffffff: 'white',
			ffff00: 'yellow'
		},
		Oke = {
			compressFunction: function(e, t, n) {
				var r = e.name,
					a;
				if ('rgba' === r || 'hsla' === r) {
					if (a = sl(e.children, 4, 'rgba' == r), !a) return;
					if ('hsla' === r && (a = ol.apply(null, a), e.name = 'rgba'), 0 === a[3]) {
						var o = this['function'] && this['function'].name;
						if (0 === a[0] && 0 === a[1] && 0 === a[2] || !/^(?:to|from|color-stop)$|gradient$/i.test(o)) return void(t.data = {
							type: 'Identifier',
							loc: e.loc,
							name: 'transparent'
						})
					}
					if (1 !== a[3]) return void e.children.each(function(e, t, n) {
						return 'Operator' === e.type ? void(',' !== e.value && n.remove(t)) : void(t.data = {
							type: 'Number',
							loc: e.loc,
							value: Cke(a.shift(), null)
						})
					});
					r = 'rgb'
				}
				if ('hsl' === r) {
					if (a = a || sl(e.children, 3, !1), !a) return;
					a = ol.apply(null, a), r = 'rgb'
				}
				if ('rgb' === r) {
					if (a = a || sl(e.children, 3, !0), !a) return;
					var i = t.next;
					i && 'WhiteSpace' !== i.data.type && n.insert(n.createItem({
						type: 'WhiteSpace',
						value: ' '
					}), i), t.data = {
						type: 'HexColor',
						loc: e.loc,
						value: il(a[0]) + il(a[1]) + il(a[2])
					}, dl(t.data, t)
				}
			},
			compressIdent: function(e, t) {
				if (null !== this.declaration) {
					var n = e.name.toLowerCase();
					if (Eke.hasOwnProperty(n) && Tke.matchDeclaration(this.declaration).isType(e, 'color')) {
						var r = Eke[n];
						r.length + 1 <= n.length ? t.data = {
							type: 'HexColor',
							loc: e.loc,
							value: r
						} : ('grey' === n && (n = 'gray'), e.name = n)
					}
				}
			},
			compressHex: dl
		},
		Pke = Zxe.walk,
		Lke = {
			Atrule: function(e) {
				'keyframes' === lke(e.name).basename && ske(e)
			},
			AttributeSelector: function(e) {
				var t = e.value;
				if (t && 'String' === t.type) {
					var n = t.value.replace(/^(.)(.*)\1$/, '$2');
					tl(n) && (e.value = {
						type: 'Identifier',
						loc: t.loc,
						name: n
					})
				}
			},
			Value: function(e) {
				if (this.declaration) {
					var t = mke(this.declaration.property);
					gke.hasOwnProperty(t.basename) && gke[t.basename](e)
				}
			},
			Dimension: function(e, t) {
				var n = xke(e.value, t);
				if (e.value = n, '0' === n && null !== this.declaration && null === this.atrulePrelude) {
					var r = e.unit.toLowerCase();
					if (!kke.hasOwnProperty(r)) return;
					if ('-ms-flex' === this.declaration.property || 'flex' === this.declaration.property) return;
					if (this['function'] && 'calc' === this['function'].name) return;
					t.data = {
						type: 'Number',
						loc: e.loc,
						value: n
					}
				}
			},
			Percentage: function(e, t) {
				var n = Ske(e.value, t),
					r = null === this.declaration ? null : this.declaration.property;
				e.value = n, null !== r && wke.hasOwnProperty(r) && '0' === n && (t.data = {
					type: 'Number',
					loc: e.loc,
					value: n
				})
			},
			Number: bke,
			String: function(e) {
				var t = e.value;
				t = t.replace(/\\(\r\n|\r|\n|\f)/g, ''), e.value = t
			},
			Url: function(e) {
				var t = e.value;
				if ('String' === t.type) {
					var n = t.value[0],
						r = t.value.substr(1, t.value.length - 2);
					r = r.replace(/\\\\/g, '/'), vke.test(r) ? e.value = {
						type: 'Raw',
						loc: e.value.loc,
						value: r
					} : e.value.value = -1 === r.indexOf('"') ? '"' + r + '"' : n + r + n
				}
			},
			HexColor: Oke.compressHex,
			Identifier: Oke.compressIdent,
			Function: Oke.compressFunction
		},
		qke = function(e) {
			Pke(e, {
				leave: function(e, t, n) {
					Lke.hasOwnProperty(e.type) && Lke[e.type].call(this, e, t, n)
				}
			})
		},
		Rke = Zxe.generate;
	cl.prototype.resolve = function(e) {
		var t = this.map[e];
		return t || (t = ++this.seed, this.map[e] = t), t
	};
	var Dke = function() {
			var e = new cl;
			return function(t) {
				var n = Rke(t);
				return t.id = e.resolve(n), t.length = n.length, t.fingerprint = null, t
			}
		},
		Nke = Zxe.generate,
		Bke = {
			"first-letter": !0,
			"first-line": !0,
			after: !0,
			before: !0
		},
		Ike = {
			link: !0,
			visited: !0,
			hover: !0,
			active: !0,
			"first-letter": !0,
			"first-line": !0,
			after: !0,
			before: !0
		},
		zke = function(e, t) {
			var n = Object.create(null),
				r = !1;
			e.prelude.children.each(function(e) {
				var a = '*',
					o = 0;
				e.children.each(function(i) {
					switch (i.type) {
						case 'ClassSelector':
							if (t && t.scopes) {
								var s = t.scopes[i.name] || 0;
								if (0 != o && s !== o) throw new Error('Selector can\'t has classes from different scopes: ' + Nke(e));
								o = s
							}
							break;
						case 'PseudoClassSelector':
							var l = i.name.toLowerCase();
							Ike.hasOwnProperty(l) || (n[l] = !0, r = !0);
							break;
						case 'PseudoElementSelector':
							var l = i.name.toLowerCase();
							Bke.hasOwnProperty(l) || (n[l] = !0, r = !0);
							break;
						case 'TypeSelector':
							a = i.name.toLowerCase();
							break;
						case 'AttributeSelector':
							i.flags && (n['[' + i.flags.toLowerCase() + ']'] = !0, r = !0);
							break;
						case 'WhiteSpace':
						case 'Combinator':
							a = '*';
					}
				}), e.compareMarker = Dpe(e).toString(), e.id = null, e.id = Nke(e), o && (e.compareMarker += ':' + o), '*' !== a && (e.compareMarker += ',' + a)
			}), e.pseudoSignature = r && Object.keys(n).sort().join(',')
		},
		_ke = Zxe.keyword,
		Mke = Zxe.walk,
		Gke = Zxe.generate,
		Uke = function(e, t) {
			var n = Dke();
			return Mke(e, {
				visit: 'Rule',
				enter: function(e) {
					e.block.children.each(n), zke(e, t.usage)
				}
			}), Mke(e, {
				visit: 'Atrule',
				enter: function(e) {
					e.prelude && (e.prelude.id = null, e.prelude.id = Gke(e.prelude)), 'keyframes' === _ke(e.name).basename && (e.block.avoidRulesMerge = !0, e.block.children.each(function(e) {
						e.prelude.children.each(function(e) {
							e.compareMarker = e.id
						})
					}))
				}
			}), {
				declaration: n
			}
		},
		Vke = Zxe.List,
		Wke = Zxe.keyword,
		Fke = Object.prototype.hasOwnProperty,
		jke = Zxe.walk,
		Hke = function(e, t) {
			ul(e, t), jke(e, {
				visit: 'Atrule',
				reverse: !0,
				enter: hl
			})
		},
		Yke = Object.prototype.hasOwnProperty,
		$ke = {
			isEqualSelectors: function(e, t) {
				for (var n = e.head, r = t.head; null !== n && null !== r && n.data.id === r.data.id;) n = n.next, r = r.next;
				return null === n && null === r
			},
			isEqualDeclarations: function(e, t) {
				for (var n = e.head, r = t.head; null !== n && null !== r && n.data.id === r.data.id;) n = n.next, r = r.next;
				return null === n && null === r
			},
			compareDeclarations: function(e, t) {
				for (var n = {
						eq: [],
						ne1: [],
						ne2: [],
						ne2overrided: []
					}, r = Object.create(null), a = Object.create(null), o = t.head; o; o = o.next) a[o.data.id] = !0;
				for (var o = e.head, i; o; o = o.next) i = o.data, i.fingerprint && (r[i.fingerprint] = i.important), a[i.id] ? (a[i.id] = !1, n.eq.push(i)) : n.ne1.push(i);
				for (var o = t.head, i; o; o = o.next) i = o.data, a[i.id] && (Yke.call(r, i.fingerprint) && +r[i.fingerprint] >= +i.important ? n.ne2overrided.push(i) : n.ne2.push(i));
				return n
			},
			addSelectors: function(e, t) {
				return t.each(function(t) {
					for (var n = t.id, r = e.head, a; r;) {
						if (a = r.data.id, a === n) return;
						if (a > n) break;
						r = r.next
					}
					e.insert(e.createItem(t), r)
				}), e
			},
			hasSimilarSelectors: fl,
			unsafeToSkipNode: yl
		},
		Kke = Zxe.walk,
		Xke = function(e) {
			Kke(e, {
				visit: 'Rule',
				enter: bl
			})
		},
		Qke = Zxe.List,
		Zke = Zxe.walk,
		Jke = function(e) {
			Zke(e, {
				visit: 'Rule',
				reverse: !0,
				enter: xl
			})
		},
		eSe = Zxe.List,
		tSe = Zxe.generate,
		nSe = Zxe.walk,
		rSe = 1,
		aSe = 2,
		oSe = 0,
		iSe = 1,
		sSe = 2,
		lSe = 3,
		dSe = ['top', 'right', 'bottom', 'left'],
		cSe = {
			"margin-top": 'top',
			"margin-right": 'right',
			"margin-bottom": 'bottom',
			"margin-left": 'left',
			"padding-top": 'top',
			"padding-right": 'right',
			"padding-bottom": 'bottom',
			"padding-left": 'left',
			"border-top-color": 'top',
			"border-right-color": 'right',
			"border-bottom-color": 'bottom',
			"border-left-color": 'left',
			"border-top-width": 'top',
			"border-right-width": 'right',
			"border-bottom-width": 'bottom',
			"border-left-width": 'left',
			"border-top-style": 'top',
			"border-right-style": 'right',
			"border-bottom-style": 'bottom',
			"border-left-style": 'left'
		},
		pSe = {
			margin: 'margin',
			"margin-top": 'margin',
			"margin-right": 'margin',
			"margin-bottom": 'margin',
			"margin-left": 'margin',
			padding: 'padding',
			"padding-top": 'padding',
			"padding-right": 'padding',
			"padding-bottom": 'padding',
			"padding-left": 'padding',
			"border-color": 'border-color',
			"border-top-color": 'border-color',
			"border-right-color": 'border-color',
			"border-bottom-color": 'border-color',
			"border-left-color": 'border-color',
			"border-width": 'border-width',
			"border-top-width": 'border-width',
			"border-right-width": 'border-width',
			"border-bottom-width": 'border-width',
			"border-left-width": 'border-width',
			"border-style": 'border-style',
			"border-top-style": 'border-style',
			"border-right-style": 'border-style',
			"border-bottom-style": 'border-style',
			"border-left-style": 'border-style'
		};
	kl.prototype.getValueSequence = function(e, t) {
		var n = [],
			r = '',
			a = e.value.children.some(function(t) {
				var a = !1;
				switch (t.type) {
					case 'Identifier':
						switch (t.name) {
							case '\\0':
							case '\\9':
								return void(r = t.name);
							case 'inherit':
							case 'initial':
							case 'unset':
							case 'revert':
								a = t.name;
						}
						break;
					case 'Dimension':
						switch (t.unit) {
							case 'rem':
							case 'vw':
							case 'vh':
							case 'vmin':
							case 'vmax':
							case 'vm':
								a = t.unit;
						}
						break;
					case 'HexColor':
					case 'Number':
					case 'Percentage':
						break;
					case 'Function':
						a = t.name;
						break;
					case 'WhiteSpace':
						return !1;
					default:
						return !0;
				}
				n.push({
					node: t,
					special: a,
					important: e.important
				})
			});
		return a || n.length > t ? !1 : 'string' == typeof this.iehack && this.iehack !== r ? !1 : (this.iehack = r, n)
	}, kl.prototype.canOverride = function(e, t) {
		var n = this.sides[e];
		return !n || t.important && !n.important
	}, kl.prototype.add = function(e, t) {
		return !! function() {
			var n = this.sides,
				r = cSe[e];
			if (r) {
				if (!1 == r in n) return !1;
				var a = this.getValueSequence(t, 1);
				if (!a || !a.length) return !1;
				for (var o in n)
					if (null !== n[o] && n[o].special !== a[0].special) return !1;
				return !this.canOverride(r, a[0]) || (n[r] = a[0], !0)
			}
			if (e === this.name) {
				var a = this.getValueSequence(t, 4);
				if (!a || !a.length) return !1;
				switch (a.length) {
					case 1:
						a[iSe] = a[oSe], a[sSe] = a[oSe], a[lSe] = a[oSe];
						break;
					case 2:
						a[sSe] = a[oSe], a[lSe] = a[iSe];
						break;
					case 3:
						a[lSe] = a[iSe];
				}
				for (var s = 0; 4 > s; s++)
					for (var o in n)
						if (null !== n[o] && n[o].special !== a[s].special) return !1;
				for (var s = 0; 4 > s; s++) this.canOverride(dSe[s], a[s]) && (n[dSe[s]] = a[s]);
				return !0
			}
		}.call(this) && (this.loc || (this.loc = t.loc), !0)
	}, kl.prototype.isOkToMinimize = function() {
		var e = this.sides.top,
			t = this.sides.right,
			n = this.sides.bottom,
			r = this.sides.left;
		if (e && t && n && r) {
			var a = e.important + t.important + n.important + r.important;
			return 0 === a || 4 === a
		}
		return !1
	}, kl.prototype.getValue = function() {
		var e = new eSe,
			t = this.sides,
			n = [t.top, t.right, t.bottom, t.left],
			r = [tSe(t.top.node), tSe(t.right.node), tSe(t.bottom.node), tSe(t.left.node)];
		r[lSe] === r[iSe] && (n.pop(), r[sSe] === r[oSe] && (n.pop(), r[iSe] === r[oSe] && n.pop()));
		for (var a = 0; a < n.length; a++) a && e.appendData({
			type: 'WhiteSpace',
			value: ' '
		}), e.appendData(n[a].node);
		return this.iehack && (e.appendData({
			type: 'WhiteSpace',
			value: ' '
		}), e.appendData({
			type: 'Identifier',
			loc: null,
			name: this.iehack
		})), {
			type: 'Value',
			loc: null,
			children: e
		}
	}, kl.prototype.getDeclaration = function() {
		return {
			type: 'Declaration',
			loc: this.loc,
			important: this.sides.top.important,
			property: this.name,
			value: this.getValue()
		}
	};
	var uSe = function(e, t) {
			var n = {},
				r = [];
			nSe(e, {
				visit: 'Rule',
				reverse: !0,
				enter: function(e) {
					var t = this.block || this.stylesheet,
						a = (e.pseudoSignature || '') + '|' + e.prelude.children.first().id,
						o, i;
					n.hasOwnProperty(t.id) ? o = n[t.id] : (o = {
						lastShortSelector: null
					}, n[t.id] = o), o.hasOwnProperty(a) ? i = o[a] : (i = {}, o[a] = i), o.lastShortSelector = Sl.call(this, e, i, r, o.lastShortSelector)
				}
			}), wl(r, t.declaration)
		},
		mSe = Zxe.property,
		gSe = Zxe.keyword,
		hSe = Zxe.walk,
		fSe = Zxe.generate,
		ySe = 1,
		bSe = {
			src: 1
		},
		xSe = {
			display: /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,
			"text-align": /^(start|end|match-parent|justify-all)$/i
		},
		kSe = ['auto', 'crosshair', 'default', 'move', 'text', 'wait', 'help', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'pointer', 'progress', 'not-allowed', 'no-drop', 'vertical-text', 'all-scroll', 'col-resize', 'row-resize'],
		SSe = ['static', 'relative', 'absolute', 'fixed'],
		wSe = {
			"border-width": ['border'],
			"border-style": ['border'],
			"border-color": ['border'],
			"border-top": ['border'],
			"border-right": ['border'],
			"border-bottom": ['border'],
			"border-left": ['border'],
			"border-top-width": ['border-top', 'border-width', 'border'],
			"border-right-width": ['border-right', 'border-width', 'border'],
			"border-bottom-width": ['border-bottom', 'border-width', 'border'],
			"border-left-width": ['border-left', 'border-width', 'border'],
			"border-top-style": ['border-top', 'border-style', 'border'],
			"border-right-style": ['border-right', 'border-style', 'border'],
			"border-bottom-style": ['border-bottom', 'border-style', 'border'],
			"border-left-style": ['border-left', 'border-style', 'border'],
			"border-top-color": ['border-top', 'border-color', 'border'],
			"border-right-color": ['border-right', 'border-color', 'border'],
			"border-bottom-color": ['border-bottom', 'border-color', 'border'],
			"border-left-color": ['border-left', 'border-color', 'border'],
			"margin-top": ['margin'],
			"margin-right": ['margin'],
			"margin-bottom": ['margin'],
			"margin-left": ['margin'],
			"padding-top": ['padding'],
			"padding-right": ['padding'],
			"padding-bottom": ['padding'],
			"padding-left": ['padding'],
			"font-style": ['font'],
			"font-variant": ['font'],
			"font-weight": ['font'],
			"font-size": ['font'],
			"font-family": ['font'],
			"list-style-type": ['list-style'],
			"list-style-position": ['list-style'],
			"list-style-image": ['list-style']
		},
		vSe = function(e) {
			var t = {},
				n = Object.create(null);
			hSe(e, {
				visit: 'Rule',
				reverse: !0,
				enter: function(e, r, a) {
					var o = this.block || this.stylesheet,
						i = (e.pseudoSignature || '') + '|' + e.prelude.children.first().id,
						s, l;
					t.hasOwnProperty(o.id) ? s = t[o.id] : (s = {}, t[o.id] = s), s.hasOwnProperty(i) ? l = s[i] : (l = {}, s[i] = l), Cl.call(this, e, r, a, l, n)
				}
			})
		},
		TSe = Zxe.walk,
		CSe = function(e) {
			TSe(e, {
				visit: 'Rule',
				enter: El
			})
		},
		ESe = Zxe.List,
		ASe = Zxe.walk,
		OSe = function(e) {
			ASe(e, {
				visit: 'Rule',
				reverse: !0,
				enter: Pl
			})
		},
		PSe = function(e, t) {
			var n = Uke(e, t);
			t.logger('prepare', e), Hke(e, t), t.logger('mergeAtrule', e), Xke(e), t.logger('initialMergeRuleset', e), Jke(e), t.logger('disjoinRuleset', e), uSe(e, n), t.logger('restructShorthand', e), vSe(e), t.logger('restructBlock', e), CSe(e), t.logger('mergeRuleset', e), OSe(e), t.logger('restructRuleset', e)
		},
		LSe = Zxe.List,
		qSe = Zxe.clone,
		RSe = Zxe.walk,
		DSe = function(e, t) {
			e = e || {
				type: 'StyleSheet',
				loc: null,
				children: new LSe
			}, t = t || {};
			var n = {
					logger: 'function' == typeof t.logger ? t.logger : function() {},
					restructuring: Nl(t),
					forceMediaMerge: !!t.forceMediaMerge,
					usage: !!t.usage && eke.buildIndex(t.usage)
				},
				r = Dl(t),
				a = !0,
				o = new LSe,
				i = 1,
				s, l, d;
			t.clone && (e = qSe(e)), 'StyleSheet' === e.type ? (s = e.children, e.children = o) : s = Bl(e);
			do {
				if (l = ql(s, !!r), Rl(l.stylesheet, a, i++, n), d = l.stylesheet.children, l.comment && (!o.isEmpty() && o.insert(LSe.createItem({
						type: 'Raw',
						value: '\n'
					})), o.insert(LSe.createItem(l.comment)), !d.isEmpty() && o.insert(LSe.createItem({
						type: 'Raw',
						value: '\n'
					}))), a && !d.isEmpty()) {
					var c = d.last();
					('Atrule' !== c.type || 'import' !== c.name && 'charset' !== c.name) && (a = !1)
				}
				'exclamation' !== r && (r = !1), o.appendList(d)
			} while (!s.isEmpty());
			return {
				ast: e
			}
		},
		NSe = [
			['csso@3.5.1', 'E:\\wamp\\www\\GitHub\\svgomg']
		],
		BSe = !0,
		ISe = 'csso@3.5.1',
		zSe = 'csso@3.5.1',
		_Se = !1,
		MSe = 'sha512-vrqULLffYU1Q2tLdJvaCYbONStnfkfimRxXNaGjxMldI0C7JPBC4rB1RyjhfdZ4m1frm8pM9uRPKH3d2knZ8gg==',
		GSe = '/csso',
		USe = {
			"mdn-data": '1.1.4',
			"source-map": '0.5.7'
		},
		VSe = {
			type: 'version',
			registry: !0,
			raw: 'csso@3.5.1',
			name: 'csso',
			escapedName: 'csso',
			rawSpec: '3.5.1',
			saveSpec: null,
			fetchSpec: '3.5.1'
		},
		WSe = ['/svgo'],
		FSe = 'https://registry.npmjs.org/csso/-/csso-3.5.1.tgz',
		jSe = '3.5.1',
		HSe = 'E:\\wamp\\www\\GitHub\\svgomg',
		YSe = {
			name: 'Sergey Kryzhanovsky',
			email: 'skryzhanovsky@ya.ru',
			url: 'https://github.com/afelix'
		},
		$Se = {
			url: 'https://github.com/css/csso/issues'
		},
		KSe = {
			"css-tree": '1.0.0-alpha.29'
		},
		XSe = 'CSS minifier with structural optimisations',
		QSe = {
			browserify: '^13.0.0',
			coveralls: '^2.11.6',
			eslint: '^2.2.0',
			istanbul: '^0.4.2',
			jscs: '~3.0.7',
			mocha: '^3.5.3',
			"package-json-versionify": '^1.0.4',
			"source-map": '^0.5.6',
			"uglify-js": '^2.6.1'
		},
		ZSe = {
			node: '>=0.10.0'
		},
		JSe = {
			env: {
				node: !0,
				mocha: !0,
				es6: !0
			},
			rules: {
				"no-duplicate-case": 2,
				"no-undef": 2,
				"no-unused-vars": [2, {
					vars: 'all',
					args: 'after-used'
				}]
			}
		},
		ewe = ['dist/csso-browser.js', 'lib', 'HISTORY.md', 'LICENSE', 'README.md'],
		twe = 'https://github.com/css/csso',
		nwe = ['css', 'compress', 'minifier', 'minify', 'optimise', 'optimisation', 'csstree'],
		rwe = 'MIT',
		awe = './lib/index',
		owe = [{
			name: 'Roman Dvornov',
			email: 'rdvornov@gmail.com'
		}],
		iwe = 'csso',
		swe = {
			type: 'git',
			url: 'git+https://github.com/css/csso.git'
		},
		lwe = {
			browserify: 'browserify -t package-json-versionify --standalone csso lib/index.js | uglifyjs --compress --mangle -o dist/csso-browser.js',
			codestyle: 'jscs lib test && eslint lib test',
			"codestyle-and-test": 'npm run codestyle && npm test',
			coverage: 'istanbul cover _mocha -- -R dot',
			coveralls: 'istanbul cover _mocha --report lcovonly -- -R dot && cat ./coverage/lcov.info | coveralls',
			"gh-pages": 'git clone --depth=1 -b gh-pages https://github.com/css/csso.git .gh-pages && npm run browserify && cp dist/csso-browser.js .gh-pages/ && cd .gh-pages && git commit -am "update" && git push && cd .. && rm -rf .gh-pages',
			hydrogen: 'node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/csso --stat -o /dev/null',
			postpublish: 'npm run gh-pages',
			prepublish: 'npm run browserify',
			test: 'mocha --reporter dot',
			travis: 'npm run codestyle-and-test && npm run coveralls'
		},
		dwe = '3.5.1',
		cwe = {
			_args: NSe,
			_development: BSe,
			_from: ISe,
			_id: zSe,
			_inBundle: _Se,
			_integrity: MSe,
			_location: GSe,
			_phantomChildren: USe,
			_requested: VSe,
			_requiredBy: WSe,
			_resolved: FSe,
			_spec: jSe,
			_where: HSe,
			author: YSe,
			bugs: $Se,
			dependencies: KSe,
			description: XSe,
			devDependencies: QSe,
			engines: ZSe,
			eslintConfig: JSe,
			files: ewe,
			homepage: twe,
			keywords: nwe,
			license: rwe,
			main: awe,
			maintainers: owe,
			name: iwe,
			repository: swe,
			scripts: lwe,
			version: dwe
		},
		pwe = Object.freeze({
			_args: NSe,
			_development: BSe,
			_from: ISe,
			_id: zSe,
			_inBundle: _Se,
			_integrity: MSe,
			_location: GSe,
			_phantomChildren: USe,
			_requested: VSe,
			_requiredBy: WSe,
			_resolved: FSe,
			_spec: jSe,
			_where: HSe,
			author: YSe,
			bugs: $Se,
			dependencies: KSe,
			description: XSe,
			devDependencies: QSe,
			engines: ZSe,
			eslintConfig: JSe,
			files: ewe,
			homepage: twe,
			keywords: nwe,
			license: rwe,
			main: awe,
			maintainers: owe,
			name: iwe,
			repository: swe,
			scripts: lwe,
			version: dwe,
			default: cwe
		}),
		uwe = Zxe.parse,
		mwe = Zxe.generate,
		gwe = {
			version: (pwe && cwe || pwe).version,
			minify: function(e, t) {
				return Ul('stylesheet', e, t)
			},
			minifyBlock: function(e, t) {
				return Ul('declarationList', e, t)
			},
			compress: DSe,
			syntax: Zxe
		};
	var hwe = Hpe.attrsGroups.presentation,
		fwe = '\\\\(?:[0-9a-f]{1,6}\\s?|\\r\\n|.)',
		ywe = '\\s*(' + Hl('[^:;\\\\]', fwe) + '*?)\\s*',
		bwe = '\'(?:[^\'\\n\\r\\\\]|' + fwe + ')*?(?:\'|$)',
		xwe = '"(?:[^"\\n\\r\\\\]|' + fwe + ')*?(?:"|$)',
		kwe = new RegExp('^' + Hl(bwe, xwe) + '$'),
		Swe = '\\(' + Hl('[^\'"()\\\\]+', fwe, bwe, xwe) + '*?\\)',
		wwe = '\\s*(' + Hl('[^\'"();\\\\]+?', fwe, bwe, xwe, Swe, '[^;]*?') + '*?)',
		vwe = new RegExp(ywe + ':' + wwe + '\\s*(?:;\\s*|$)', 'ig'),
		Twe = new RegExp(Hl(fwe, bwe, xwe, '/\\*[^]*?\\*/'), 'ig');
	var Cwe = new Set(Hpe.referencesProps),
		Ewe = /\burl\(("|')?#(.+?)\1\)/,
		Awe = /^#(.+?)$/,
		Owe = /(\w+)\./,
		Pwe = ['style', 'script'],
		Lwe = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
		qwe = Lwe.length - 1;
	var Rwe = Hpe.elemsGroups.nonRendering,
		Dwe = e(function(e, t) {
			t.encodeSVGDatauri = function(e, t) {
				var n = 'data:image/svg+xml';
				return t && 'base64' !== t ? 'enc' === t ? e = n + ',' + encodeURIComponent(e) : 'unenc' === t && (e = n + ',' + e) : (n += ';base64,', e = n + new Buffer(e).toString('base64')), e
			}, t.decodeSVGDatauri = function(e) {
				var t = /data:image\/svg\+xml(;charset=[^;,]*)?(;base64)?,(.*)/,
					n = t.exec(e);
				if (!n) return e;
				var r = n[3];
				return n[2] ? e = new Buffer(r, 'base64').toString('utf8') : '%' === r.charAt(0) ? e = decodeURIComponent(r) : '<' === r.charAt(0) && (e = r), e
			}, t.intersectArrays = function(e, t) {
				return e.filter(function(e) {
					return -1 < t.indexOf(e)
				})
			}, t.cleanupOutData = function(e, t) {
				var r = '',
					a, o;
				return e.forEach(function(e, s) {
					a = ' ', 0 === s && (a = ''), t.leadingZero && (e = n(e)), t.negativeExtraSpace && (0 > e || 46 == (e + '').charCodeAt(0) && 0 != o % 1) && (a = ''), o = e, r += a + e
				}), r
			};
			var n = t.removeLeadingZero = function(e) {
				var t = e.toString();
				return 0 < e && 1 > e && 48 == t.charCodeAt(0) ? t = t.slice(1) : -1 < e && 0 > e && 48 == t.charCodeAt(1) && (t = t.charAt(0) + t.slice(2)), t
			}
		});
	var Nwe = /^([\-+]?\d*\.?\d+([eE][\-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/,
		Bwe = Dwe.removeLeadingZero,
		Iwe = {
			cm: 96 / 2.54,
			mm: 96 / 25.4,
			in: 96,
			pt: 4 / 3,
			pc: 16
		};
	var zwe = /^([\-+]?\d*\.?\d+([eE][\-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/,
		_we = /\s+,?\s*|,\s*/,
		Mwe = Dwe.removeLeadingZero,
		Gwe = {
			cm: 96 / 2.54,
			mm: 96 / 25.4,
			in: 96,
			pt: 4 / 3,
			pc: 16
		};
	var Uwe = /^rgb\(\s*([+-]?(?:\d*\.\d+|\d+\.?)%?)\s*,\s*([+-]?(?:\d*\.\d+|\d+\.?)%?)\s*,\s*([+-]?(?:\d*\.\d+|\d+\.?)%?)\s*\)$/,
		Vwe = /^\#(([a-fA-F0-9])\2){3}$/,
		Wwe = /\bnone\b/i;
	var Fwe = Hpe.elems,
		jwe = Hpe.attrsGroups,
		Hwe = Hpe.elemsGroups,
		Ywe = Hpe.attrsGroupsDefaults,
		$we = Hpe.inheritableAttrs;
	for (var Kwe in Fwe) Kwe = Fwe[Kwe], Kwe.attrsGroups && (Kwe.attrs = Kwe.attrs || [], Kwe.attrsGroups.forEach(function(e) {
		Kwe.attrs = Kwe.attrs.concat(jwe[e]);
		var t = Ywe[e];
		if (t)
			for (var n in Kwe.defaults = Kwe.defaults || {}, t) Kwe.defaults[n] = t[n]
	})), Kwe.contentGroups && (Kwe.content = Kwe.content || [], Kwe.contentGroups.forEach(function(e) {
		Kwe.content = Kwe.content.concat(Hwe[e])
	}));
	var Xwe = Hpe.inheritableAttrs,
		Qwe = Hpe.attrsGroups,
		Zwe = ['display', 'opacity'];
	var Jwe = Hpe.elemsGroups.shape,
		eve = /^stroke/,
		tve = /^fill-/,
		nve = ['style', 'script'];
	var rve = ['svg', 'pattern', 'symbol'];
	var ave = /M\s*(?:[-+]?(?:\d*\.\d+|\d+(?:\.|(?!\.)))([eE][-+]?\d+)?(?!\d)\s*,?\s*){2}\D*\d/i;
	var ove = {
			value: 0
		},
		ive = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
	var sve = Hpe.inheritableAttrs,
		lve = Hpe.pathElems;
	var dve = Hpe.pathElems.concat(['g', 'text']),
		cve = Hpe.referencesProps;
	var pve = Hpe.inheritableAttrs,
		uve = Hpe.elemsGroups.animation,
		mve = e(function(e, t) {
			function n(e) {
				if ('matrix' === e.name) return e.data;
				var t;
				switch (e.name) {
					case 'translate':
						t = [1, 0, 0, 1, e.data[0], e.data[1] || 0];
						break;
					case 'scale':
						t = [e.data[0], 0, 0, e.data[1] || e.data[0], 0, 0];
						break;
					case 'rotate':
						var n = s.cos(e.data[0]),
							r = s.sin(e.data[0]),
							a = e.data[1] || 0,
							o = e.data[2] || 0;
						t = [n, r, -r, n, (1 - n) * a + r * o, (1 - n) * o - r * a];
						break;
					case 'skewX':
						t = [1, 0, s.tan(e.data[0]), 1, 0, 0];
						break;
					case 'skewY':
						t = [1, s.tan(e.data[0]), 0, 1, 0, 0];
				}
				return t
			}

			function r(e, t) {
				return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
			}
			var a = /matrix|translate|scale|rotate|skewX|skewY/,
				o = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
				i = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
			t.transform2js = function(e) {
				var t = [],
					n;
				return e.split(o).forEach(function(e) {
					var r;
					if (e)
						if (a.test(e)) t.push(n = {
							name: e
						});
						else
							for (; r = i.exec(e);) r = +r, n.data ? n.data.push(r) : n.data = [r]
				}), n && n.data ? t : []
			}, t.transformsMultiply = function(e) {
				return e = e.map(function(e) {
					return 'matrix' === e.name ? e.data : n(e)
				}), e = {
					name: 'matrix',
					data: 0 < e.length ? e.reduce(r) : []
				}, e
			};
			var s = t.mth = {
				rad: function(e) {
					return e * Bd / 180
				},
				deg: function(e) {
					return 180 * e / Bd
				},
				cos: function(e) {
					return Nd(this.rad(e))
				},
				acos: function(e, t) {
					return +this.deg(Dd(e)).toFixed(t)
				},
				sin: function(e) {
					return Rd(this.rad(e))
				},
				asin: function(e, t) {
					return +this.deg(qd(e)).toFixed(t)
				},
				tan: function(e) {
					return Ld(this.rad(e))
				},
				atan: function(e, t) {
					return +this.deg(Math.atan(e)).toFixed(t)
				}
			};
			t.matrixToTransform = function(e, t) {
				var n = t.floatPrecision,
					r = e.data,
					a = [],
					o = +Pd(r[0] * r[0] + r[1] * r[1]).toFixed(t.transformPrecision),
					i = +((r[0] * r[3] - r[1] * r[2]) / o).toFixed(t.transformPrecision),
					l = r[0] * r[2] + r[1] * r[3],
					d = r[0] * r[1] + r[2] * r[3],
					c = d || +(o == i);
				if ((r[4] || r[5]) && a.push({
						name: 'translate',
						data: r.slice(4, r[5] ? 6 : 5)
					}), !r[1] && r[2]) a.push({
					name: 'skewX',
					data: [s.atan(r[2] / i, n)]
				});
				else if (r[1] && !r[2]) a.push({
					name: 'skewY',
					data: [s.atan(r[1] / r[0], n)]
				}), o = r[0], i = r[3];
				else if (!l || 1 == o && 1 == i || !c) {
					c || (o = (0 > r[0] ? -1 : 1) * Pd(r[0] * r[0] + r[2] * r[2]), i = (0 > r[3] ? -1 : 1) * Pd(r[1] * r[1] + r[3] * r[3]), a.push({
						name: 'scale',
						data: [o, i]
					}));
					var p = [s.acos(r[0] / o, n) * (0 > r[1] * i ? -1 : 1)];
					if (p[0] && a.push({
							name: 'rotate',
							data: p
						}), d && l && a.push({
							name: 'skewX',
							data: [s.atan(l / (o * o), n)]
						}), p[0] && (r[4] || r[5])) {
						a.shift();
						var u = r[0] / o,
							m = r[1] / (c ? o : i),
							g = r[4] * (c || i),
							h = r[5] * (c || o),
							f = (Wd(1 - u, 2) + Wd(m, 2)) * (c || o * i);
						p.push(((1 - u) * g - m * h) / f), p.push(((1 - u) * h + m * g) / f)
					}
				} else if (r[1] || r[2]) return e;
				return (c && (1 != o || 1 != i) || !a.length) && a.push({
					name: 'scale',
					data: o == i ? [o] : [o, i]
				}), a
			}, t.transformArc = function(e, t) {
				var n = e[0],
					a = e[1],
					o = e[2] * Bd / 180,
					i = Nd(o),
					s = Rd(o),
					l = Wd(e[5] * i + e[6] * s, 2) / (4 * n * n) + Wd(e[6] * i - e[5] * s, 2) / (4 * a * a);
				1 < l && (l = Pd(l), n *= l, a *= l);
				var d = [n * i, n * s, -a * s, a * i, 0, 0],
					c = r(t, d),
					p = c[2] * c[2] + c[3] * c[3],
					u = c[0] * c[0] + c[1] * c[1] + p,
					m = Pd((Wd(c[0] - c[3], 2) + Wd(c[1] + c[2], 2)) * (Wd(c[0] + c[3], 2) + Wd(c[1] - c[2], 2)));
				if (!m) e[0] = e[1] = Pd(u / 2), e[2] = 0;
				else {
					var g = (u + m) / 2,
						h = (u - m) / 2,
						f = 1e-6 < Vd(g - p),
						y = (f ? g : h) - p,
						x = c[0] * c[2] + c[1] * c[3],
						k = c[0] * y + c[2] * x,
						S = c[1] * y + c[3] * x;
					e[0] = Pd(g), e[1] = Pd(h), e[2] = 180 * (((f ? 0 > S : 0 < k) ? -1 : 1) * Dd((f ? k : S) / Pd(k * k + S * S))) / Bd
				}
				return 0 > t[0] != 0 > t[3] && (e[4] = 1 - e[4]), e
			}
		}),
		gve = e(function(e, t) {
			function n(e, t, n) {
				return [e[0] * t + e[2] * n + e[4], e[1] * t + e[3] * n + e[5]]
			}

			function r(e, t, n, r, a) {
				var o = 1 - e;
				return o * o * o * t + 3 * o * o * e * n + 3 * o * e * e * r + e * e * e * a
			}

			function a(e, t, n, r) {
				var o = [-1, -1],
					i = -e + 2 * t - n,
					s = -Pd(-e * (n - r) + t * t - t * (n + r) + n * n),
					l = -e + 3 * t - 3 * n + r;
				return 0 !== l && (o[0] = (i + s) / l, o[1] = (i - s) / l), o
			}

			function o(e, t, n, r) {
				var a = 1 - e;
				return a * a * t + 2 * a * e * n + e * e * r
			}

			function i(e, n, r) {
				var a = -1,
					t = e - 2 * n + r;
				return 0 !== t && (a = (e - n) / t), a
			}

			function s(e) {
				var t, n;
				return e = e.reduce(function(e, r) {
					return t && r.data && r.instruction == t.instruction ? 'M' == r.instruction ? (t.data = r.data, t.coords = r.coords) : t = e[n] = {
						instruction: t.instruction,
						data: t.data.concat(r.data),
						coords: r.coords,
						base: t.base
					} : (e.push(r), t = r, n = e.length - 1), e
				}, []), e
			}

			function l(e, t) {
				return e[0] = t[t.length - 2], e[1] = t[t.length - 1], e
			}

			function d(e, t) {
				if (2 == e.length) {
					var n = e[1],
						r = e[0],
						a = p(e[1]),
						o = u(r, n);
					0 < m(a, o) ? l(t, g(o, n)) : (l(t, a), e.shift())
				} else {
					var n = e[2],
						r = e[1],
						i = e[0],
						o = u(r, n),
						s = u(i, n),
						a = p(n),
						d = g(o, s),
						c = g(s, o);
					if (0 < m(d, a)) 0 < m(o, a) ? (l(t, d), e.shift()) : (l(t, a), e.splice(0, 2));
					else if (0 < m(c, a)) 0 < m(s, a) ? (l(t, c), e.splice(1, 1)) : (l(t, a), e.splice(0, 2));
					else return !0
				}
				return !1
			}

			function p(e) {
				return [-e[0], -e[1]]
			}

			function u(e, t) {
				return [e[0] - t[0], e[1] - t[1]]
			}

			function m(e, t) {
				return e[0] * t[0] + e[1] * t[1]
			}

			function g(e, t) {
				var n = [-e[1], e[0]];
				return 0 > m(n, p(t)) ? p(n) : n
			}

			function c(e, t, n, r) {
				function a(e, t) {
					return e + l[t % 2]
				}

				function o(t, n) {
					(!t.length || n[1] > t[t.maxY][1]) && (t.maxY = t.length, e.maxY = e.length ? Md(n[1], e.maxY) : n[1]), (!t.length || n[0] > t[t.maxX][0]) && (t.maxX = t.length, e.maxX = e.length ? Md(n[0], e.maxX) : n[0]), (!t.length || n[1] < t[t.minY][1]) && (t.minY = t.length, e.minY = e.length ? Ud(n[1], e.minY) : n[1]), (!t.length || n[0] < t[t.minX][0]) && (t.minX = t.length, e.minX = e.length ? Ud(n[0], e.minX) : n[0]), t.push(n)
				}
				var i = e.length && e[e.length - 1],
					s = n && r[n - 1],
					l = i.length && i[i.length - 1],
					d = t.data,
					c = l;
				switch (t.instruction) {
					case 'M':
						e.push(i = []);
						break;
					case 'H':
						o(i, [d[0], l[1]]);
						break;
					case 'V':
						o(i, [l[0], d[0]]);
						break;
					case 'Q':
						o(i, d.slice(0, 2)), L = [d[2] - d[0], d[3] - d[1]];
						break;
					case 'T':
						('Q' == s.instruction || 'T' == s.instruction) && (c = [l[0] + L[0], l[1] + L[1]], o(i, c), L = [d[0] - c[0], d[1] - c[1]]);
						break;
					case 'C':
						o(i, [.5 * (l[0] + d[0]), .5 * (l[1] + d[1])]), o(i, [.5 * (d[0] + d[2]), .5 * (d[1] + d[3])]), o(i, [.5 * (d[2] + d[4]), .5 * (d[3] + d[5])]), L = [d[4] - d[2], d[5] - d[3]];
						break;
					case 'S':
						('C' == s.instruction || 'S' == s.instruction) && (o(i, [l[0] + .5 * L[0], l[1] + .5 * L[1]]), c = [l[0] + L[0], l[1] + L[1]]), o(i, [.5 * (c[0] + d[0]), .5 * (c[1] + d[1])]), o(i, [.5 * (d[0] + d[2]), .5 * (d[1] + d[3])]), L = [d[2] - d[0], d[3] - d[1]];
						break;
					case 'A':
						for (var p = y.apply(0, l.concat(d)), u;
							(u = p.splice(0, 6).map(a)).length;) o(i, [.5 * (l[0] + u[0]), .5 * (l[1] + u[1])]), o(i, [.5 * (u[0] + u[2]), .5 * (u[1] + u[3])]), o(i, [.5 * (u[2] + u[4]), .5 * (u[3] + u[5])]), p.length && o(i, l = u.slice(-2));
				}
				return d && 2 <= d.length && o(i, d.slice(-2)), e
			}

			function h(e) {
				e.sort(function(e, t) {
					return e[0] == t[0] ? e[1] - t[1] : e[0] - t[0]
				});
				for (var t = [], n = 0, r = 0, a = 0; a < e.length; a++) {
					for (; 2 <= t.length && 0 >= f(t[t.length - 2], t[t.length - 1], e[a]);) t.pop();
					e[a][1] < e[n][1] && (n = a, r = t.length), t.push(e[a])
				}
				for (var o = [], i = e.length - 1, s = 0, a = e.length; a--;) {
					for (; 2 <= o.length && 0 >= f(o[o.length - 2], o[o.length - 1], e[a]);) o.pop();
					e[a][1] > e[i][1] && (i = a, s = o.length), o.push(e[a])
				}
				o.pop(), t.pop();
				var l = t.concat(o);
				return l.minX = 0, l.maxX = t.length, l.minY = r, l.maxY = (t.length + s) % l.length, l
			}

			function f(e, t, n) {
				return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
			}

			function y(e, r, a, o, s, l, d, c, p, u) {
				var g = 120 * Bd / 180,
					f = Bd / 180 * (+s || 0),
					b = [],
					S = function(e, t, n) {
						return e * Nd(n) - t * Rd(n)
					},
					w = function(e, t, n) {
						return e * Rd(n) + t * Nd(n)
					};
				if (!u) {
					e = S(e, r, -f), r = w(e, r, -f), c = S(c, p, -f), p = w(c, p, -f);
					var v = (e - c) / 2,
						x = (r - p) / 2,
						T = v * v / (a * a) + x * x / (o * o);
					1 < T && (T = Pd(T), a = T * a, o = T * o);
					var h = a * a,
						C = o * o,
						E = (l == d ? -1 : 1) * Pd(Vd((h * C - h * x * x - C * v * v) / (h * x * x + C * v * v))),
						k = E * a * x / o + (e + c) / 2,
						A = E * -o * v / a + (r + p) / 2,
						O = qd(((r - A) / o).toFixed(9)),
						P = qd(((p - A) / o).toFixed(9));
					O = e < k ? Bd - O : O, P = c < k ? Bd - P : P, 0 > O && (O = 2 * Bd + O), 0 > P && (P = 2 * Bd + P), d && O > P && (O -= 2 * Bd), !d && P > O && (P -= 2 * Bd)
				} else O = u[0], P = u[1], k = u[2], A = u[3];
				var L = P - O;
				if (Vd(L) > g) {
					var q = P,
						R = c,
						D = p;
					P = O + g * (d && P > O ? 1 : -1), c = k + a * Nd(P), p = A + o * Rd(P), b = y(c, p, a, o, s, 0, d, R, D, [P, q, k, A])
				}
				L = P - O;
				var N = Nd(O),
					B = Rd(O),
					I = Nd(P),
					z = Rd(P),
					_ = Ld(L / 4),
					t = 4 / 3 * a * _,
					M = 4 / 3 * o * _,
					G = [-t * B, M * N, c + t * z - e, p - M * I - r, c - e, p - r];
				if (u) return G.concat(b);
				b = G.concat(b);
				for (var m = [], U = 0, i = b.length; U < i; U++) m[U] = U % 2 ? w(b[U - 1], b[U], f) : S(b[U], b[U + 1], f);
				return m
			}
			var b = Number.NEGATIVE_INFINITY,
				k = Number.POSITIVE_INFINITY,
				x = /([MmLlHhVvCcSsQqTtAaZz])\s*/,
				S = /[-+]?(?:\d*\.\d+|\d+\.?)([eE][-+]?\d+)?/g,
				w = /[-+]?(\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/,
				v = mve.transform2js,
				T = mve.transformsMultiply,
				C = mve.transformArc,
				E = Hpe.referencesProps,
				A = Hpe.attrsGroupsDefaults.presentation['stroke-width'],
				O = Dwe.cleanupOutData,
				P = Dwe.removeLeadingZero,
				L;
			t.path2js = function(e) {
				if (e.pathJS) return e.pathJS;
				var t = {
						H: 1,
						V: 1,
						M: 2,
						L: 2,
						T: 2,
						Q: 4,
						S: 4,
						C: 6,
						A: 7,
						h: 1,
						v: 1,
						m: 2,
						l: 2,
						t: 2,
						q: 4,
						s: 4,
						c: 6,
						a: 7
					},
					n = [],
					r = !1,
					a;
				return e.attr('d').value.split(x).forEach(function(e) {
					if (e) {
						if (!r)
							if ('M' == e || 'm' == e) r = !0;
							else return;
						if (x.test(e)) a = e, ('Z' == a || 'z' == a) && n.push({
							instruction: 'z'
						});
						else {
							if (e = e.match(S), !e) return;
							e = e.map(Number), ('M' == a || 'm' == a) && (n.push({
								instruction: 0 == n.length ? 'M' : a,
								data: e.splice(0, 2)
							}), a = 'M' == a ? 'L' : 'l');
							for (var o = t[a]; e.length;) n.push({
								instruction: a,
								data: e.splice(0, o)
							})
						}
					}
				}), n.length && 'm' == n[0].instruction && (n[0].instruction = 'M'), e.pathJS = n, n
			};
			var q = t.relative2absolute = function(e) {
				var t = [0, 0],
					n = [0, 0],
					r;
				return e.map(function(e) {
					var a = e.instruction,
						o = e.data && e.data.slice();
					if ('M' == a) l(t, o), l(n, o);
					else if (-1 < 'mlcsqt'.indexOf(a)) {
						for (r = 0; r < o.length; r++) o[r] += t[r % 2];
						l(t, o), 'm' == a && l(n, o)
					} else 'a' == a ? (o[5] += t[0], o[6] += t[1], l(t, o)) : 'h' == a ? (o[0] += t[0], t[0] = o[0]) : 'v' == a ? (o[0] += t[1], t[1] = o[0]) : -1 < 'MZLCSQTA'.indexOf(a) ? l(t, o) : 'H' == a ? t[0] = o[0] : 'V' == a ? t[1] = o[0] : 'z' == a && l(t, n);
					return 'z' == a ? {
						instruction: 'z'
					} : {
						instruction: a.toUpperCase(),
						data: o
					}
				})
			};
			t.applyTransforms = function(e, t, r) {
				if (!e.hasAttr('transform') || !e.attr('transform').value || e.someAttr(function(e) {
						return ~E.indexOf(e.name) && ~e.value.indexOf('url(')
					})) return t;
				var o = T(v(e.attr('transform').value)),
					a = e.computedAttr('stroke'),
					i = e.computedAttr('id'),
					s = r.transformPrecision,
					d, c;
				if (a && 'none' != a) {
					if (!r.applyTransformsStroked || (o.data[0] != o.data[3] || o.data[1] != -o.data[2]) && (o.data[0] != -o.data[3] || o.data[1] != o.data[2])) return t;
					if (i) {
						var p = e,
							u = !1;
						do p.hasAttr('stroke-width') && (u = !0); while (!p.hasAttr('id', i) && !u && (p = p.parentNode));
						if (!u) return t
					}
					if (c = +Pd(o.data[0] * o.data[0] + o.data[1] * o.data[1]).toFixed(s), 1 !== c) {
						var m = e.computedAttr('stroke-width') || A;
						e.hasAttr('stroke-width') ? e.attrs['stroke-width'].value = e.attrs['stroke-width'].value.trim().replace(w, function(e) {
							return P(e * c)
						}) : e.addAttr({
							name: 'stroke-width',
							prefix: '',
							local: 'stroke-width',
							value: m.replace(w, function(e) {
								return P(e * c)
							})
						})
					}
				} else if (i) return t;
				return t.forEach(function(e) {
					if (e.data)
						if ('h' === e.instruction ? (e.instruction = 'l', e.data[1] = 0) : 'v' === e.instruction && (e.instruction = 'l', e.data[1] = e.data[0], e.data[0] = 0), 'M' === e.instruction && (0 !== o.data[4] || 0 !== o.data[5])) d = n(o.data, e.data[0], e.data[1]), l(e.data, d), l(e.coords, d), o.data[4] = 0, o.data[5] = 0;
						else {
							if ('a' == e.instruction) {
								if (C(e.data, o.data), 80 < Vd(e.data[2])) {
									var t = e.data[0],
										r = e.data[2];
									e.data[0] = e.data[1], e.data[1] = t, e.data[2] = r + (0 < r ? -90 : 90)
								}
								d = n(o.data, e.data[5], e.data[6]), e.data[5] = d[0], e.data[6] = d[1]
							} else
								for (var a = 0; a < e.data.length; a += 2) d = n(o.data, e.data[a], e.data[a + 1]), e.data[a] = d[0], e.data[a + 1] = d[1];
							e.coords[0] = e.base[0] + e.data[e.data.length - 2], e.coords[1] = e.base[1] + e.data[e.data.length - 1]
						}
				}), e.removeAttr('transform'), t
			}, t.computeCubicBoundingBox = function(e, n, o, s, l, d, c, p) {
				var u = k,
					m = k,
					g = b,
					h = b,
					f, S, t, x, y;
				for (e < u && (u = e), e > g && (g = e), c < u && (u = c), c > g && (g = c), f = a(e, o, l, c), y = 0; y < f.length; y++) S = f[y], 0 <= S && 1 >= S && (t = r(S, e, o, l, c), t < u && (u = t), t > g && (g = t));
				for (n < m && (m = n), n > h && (h = n), p < m && (m = p), p > h && (h = p), f = a(n, s, d, p), y = 0; y < f.length; y++) S = f[y], 0 <= S && 1 >= S && (x = r(S, n, s, d, p), x < m && (m = x), x > h && (h = x));
				return {
					minx: u,
					miny: m,
					maxx: g,
					maxy: h
				}
			}, t.computeQuadraticBoundingBox = function(e, n, r, a, s, l) {
				var d = k,
					c = k,
					p = b,
					u = b,
					m, t, g;
				return e < d && (d = e), e > p && (p = e), s < d && (d = s), s > p && (p = s), m = i(e, r, s), 0 <= m && 1 >= m && (t = o(m, e, r, s), t < d && (d = t), t > p && (p = t)), n < c && (c = n), n > u && (u = n), l < c && (c = l), l > u && (u = l), m = i(n, a, l), 0 <= m && 1 >= m && (g = o(m, n, a, l), g < c && (c = g), g > u && (u = g)), {
					minx: d,
					miny: c,
					maxx: p,
					maxy: u
				}
			}, t.js2path = function(e, t, n) {
				e.pathJS = t, n.collapseRepeated && (t = s(t)), e.attr('d').value = t.reduce(function(e, t) {
					return e += t.instruction + (t.data ? O(t.data, n) : '')
				}, '')
			}, t.intersects = function(e, t) {
				function n(e, t, n) {
					return u(r(e, n), r(t, p(n)))
				}

				function r(e, t) {
					for (var n = 0 <= t[1] ? 0 > t[0] ? e.maxY : e.maxX : 0 > t[0] ? e.minX : e.minY, r = -Infinity, a;
						(a = m(e[n], t)) > r;) r = a, n = ++n % e.length;
					return e[(n || e.length) - 1]
				}
				if (3 > e.length || 3 > t.length) return !1;
				var a = q(e).reduce(c, []),
					o = q(t).reduce(c, []);
				if (a.maxX <= o.minX || o.maxX <= a.minX || a.maxY <= o.minY || o.maxY <= a.minY || a.every(function(e) {
						return o.every(function(t) {
							return e[e.maxX][0] <= t[t.minX][0] || t[t.maxX][0] <= e[e.minX][0] || e[e.maxY][1] <= t[t.minY][1] || t[t.maxY][1] <= e[e.minY][1]
						})
					})) return !1;
				var i = a.map(h),
					s = o.map(h);
				return i.some(function(e) {
					return !(3 > e.length) && s.some(function(t) {
						if (3 > t.length) return !1;
						for (var r = [n(e, t, [1, 0])], a = p(r[0]), o = 1e4;;) {
							if (0 == o--) return console.error('Error: infinite loop while processing mergePaths plugin.'), !0;
							if (r.push(n(e, t, a)), 0 >= m(a, r[r.length - 1])) return !1;
							if (d(r, a)) return !0
						}
					})
				})
			}
		});
	var hve = Hpe.pathElems,
		fve = gve.path2js,
		yve = gve.js2path,
		bve = gve.applyTransforms,
		xve = Dwe.cleanupOutData,
		kve, Sve, wve, vve, Tve, Cve;
	var Eve = Dwe.cleanupOutData,
		Ave = mve.transform2js,
		Ove = mve.transformsMultiply,
		Pve = mve.matrixToTransform,
		Lve, qve, Rve;
	var Dve = Hpe.elemsGroups.container;
	var Nve = gve.path2js,
		Bve = gve.js2path,
		Ive = gve.intersects;
	var zve = /^(Created with|Created using)/;
	const _ve = {
			removeDoctype: {
				type: 'perItem',
				active: !0,
				description: 'removes doctype declaration',
				fn: function(e) {
					if (e.doctype) return !1
				}
			},
			removeXMLProcInst: {
				type: 'perItem',
				active: !0,
				description: 'removes XML processing instructions',
				fn: function(e) {
					return !(e.processinginstruction && 'xml' === e.processinginstruction.name)
				}
			},
			removeComments: {
				type: 'perItem',
				active: !0,
				description: 'removes comments',
				fn: function(e) {
					if (e.comment && '!' !== e.comment.charAt(0)) return !1
				}
			},
			removeMetadata: {
				type: 'perItem',
				active: !0,
				description: 'removes <metadata>',
				fn: function(e) {
					return !e.isElem('metadata')
				}
			},
			removeXMLNS: {
				type: 'perItem',
				active: !1,
				description: 'removes xmlns attribute (for inline svg, disabled by default)',
				fn: function(e) {
					e.isElem('svg') && e.hasAttr('xmlns') && e.removeAttr('xmlns')
				}
			},
			removeEditorsNSData: {
				type: 'perItem',
				active: !0,
				description: 'removes editors namespaces, elements and attributes',
				params: {
					additionalNamespaces: []
				},
				fn: function(e, t) {
					if (Array.isArray(t.additionalNamespaces) && (Jpe = Jpe.concat(t.additionalNamespaces)), e.elem && (e.isElem('svg') && e.eachAttr(function(t) {
							'xmlns' === t.prefix && -1 < Jpe.indexOf(t.value) && (eue.push(t.local), e.removeAttr(t.name))
						}), e.eachAttr(function(t) {
							-1 < eue.indexOf(t.prefix) && e.removeAttr(t.name)
						}), -1 < eue.indexOf(e.prefix))) return !1
				}
			},
			cleanupAttrs: {
				type: 'perItem',
				active: !0,
				description: 'cleanups attributes from newlines, trailing and repeating spaces',
				params: {
					newlines: !0,
					trim: !0,
					spaces: !0
				},
				fn: function(e, t) {
					e.isElem() && e.eachAttr(function(e) {
						t.newlines && (e.value = e.value.replace(tue, function(e, t, n) {
							return t + ' ' + n
						}), e.value = e.value.replace(nue, '')), t.trim && (e.value = e.value.trim()), t.spaces && (e.value = e.value.replace(rue, ' '))
					})
				}
			},
			inlineStyles: {
				type: 'full',
				active: !0,
				params: {
					onlyMatchedOnce: !0,
					removeMatchedSelectors: !0,
					useMqs: ['', 'screen'],
					usePseudos: ['']
				},
				description: 'inline styles (additional options)',
				fn: function(e, t) {
					var n = e.querySelectorAll('style');
					if (null === n) return e;
					var r = [],
						a = [];
					for (var o of n)
						if (!(o.isEmpty() || o.closestElem('foreignObject'))) {
							var i = Bpe.getCssStr(o),
								s = {};
							try {
								s = qpe.parse(i, {
									parseValue: !1,
									parseCustomProperty: !1
								})
							} catch (e) {
								continue
							}
							r.push({
								styleEl: o,
								cssAst: s
							}), a = a.concat(Bpe.flattenToSelectors(s))
						}
					var l = Bpe.filterByMqs(a, t.useMqs),
						d = Bpe.filterByPseudos(l, t.usePseudos);
					Bpe.cleanPseudos(d);
					var c = Bpe.sortSelectors(d).reverse(),
						p, u;
					for (p of c) {
						var m = qpe.translate(p.item.data),
							g = null;
						try {
							g = e.querySelectorAll(m)
						} catch (e) {
							if (e.constructor === SyntaxError) continue;
							throw e
						}
						null !== g && (p.selectedEls = g)
					}
					for (p of c)
						if (p.selectedEls && !(t.onlyMatchedOnce && null !== p.selectedEls && 1 < p.selectedEls.length)) {
							for (u of p.selectedEls) null !== p.rule && qpe.walkDeclarations(p.rule, function(e) {
								var t = Bpe.csstreeToStyleDeclaration(e);
								null !== u.style.getPropertyValue(t.name) && u.style.getPropertyPriority(t.name) >= t.priority || u.style.setProperty(t.name, t.value, t.priority)
							});
							t.removeMatchedSelectors && null !== p.selectedEls && 0 < p.selectedEls.length && p.rule.prelude.children.remove(p.item)
						}
					if (!t.removeMatchedSelectors) return e;
					for (p of c)
						if (p.selectedEls && !(t.onlyMatchedOnce && null !== p.selectedEls && 1 < p.selectedEls.length))
							for (u of p.selectedEls) {
								var h = p.item.data.children.first();
								'ClassSelector' === h.type && u.class.remove(h.name), 'undefined' == typeof u.class.item(0) && u.removeAttr('class'), 'IdSelector' === h.type && u.removeAttr('id', h.name)
							}
					for (var f of r) {
						if (qpe.walkRules(f.cssAst, function(e, t, n) {
								return 'Atrule' === e.type && null !== e.block && e.block.children.isEmpty() ? void n.remove(t) : void('Rule' === e.type && e.prelude.children.isEmpty() && n.remove(t))
							}), f.cssAst.children.isEmpty()) {
							var y = f.styleEl.parentNode;
							if (y.spliceContent(y.content.indexOf(f.styleEl), 1), 'defs' === y.elem && 0 === y.content.length) {
								var b = y.parentNode;
								b.spliceContent(b.content.indexOf(y), 1)
							}
							continue
						}
						Bpe.setCssStr(f.styleEl, qpe.translate(f.cssAst))
					}
					return e
				}
			},
			minifyStyles: {
				type: 'full',
				active: !0,
				description: 'minifies styles and removes unused styles based on usage data',
				params: {
					usage: {
						force: !1,
						ids: !0,
						classes: !0,
						tags: !0
					}
				},
				fn: function(e, t) {
					t = t || {};
					var n = Vl(t),
						r = Vl(t),
						a = Wl(e);
					return n.usage = jl(e, t), r.usage = null, a.forEach(function(e) {
						if (e.isElem('style')) {
							var t = e.content[0].text || e.content[0].cdata || [],
								a = 0 <= t.indexOf('>') || 0 <= t.indexOf('<') ? 'cdata' : 'text';
							e.content[0][a] = gwe.minify(t, n).css
						} else {
							var o = e.attr('style').value;
							e.attr('style').value = gwe.minifyBlock(o, r).css
						}
					}), e
				}
			},
			convertStyleToAttrs: {
				type: 'perItem',
				active: !0,
				description: 'converts style to attributes',
				fn: function(e) {
					if (e.elem && e.hasAttr('style')) {
						var t = e.attr('style').value,
							n = [],
							r = {};
						t = t.replace(Twe, function(e) {
							return '/' == e[0] ? '' : '\\' == e[0] && /[-g-z]/i.test(e[1]) ? e[1] : e
						}), vwe.lastIndex = 0;
						for (var a; a = vwe.exec(t);) n.push([a[1], a[2]]);
						n.length && (n = n.filter(function(e) {
							if (e[0]) {
								var t = e[0].toLowerCase(),
									n = e[1];
								if (kwe.test(n) && (n = n.slice(1, -1)), -1 < hwe.indexOf(t)) return r[t] = {
									name: t,
									value: n,
									local: t,
									prefix: ''
								}, !1
							}
							return !0
						}), Object.assign(e.attrs, r), n.length ? e.attr('style').value = n.map(function(e) {
							return e.join(':')
						}).join(';') : e.removeAttr('style'))
					}
				}
			},
			cleanupIDs: {
				type: 'full',
				active: !0,
				description: 'removes unused IDs and minifies used',
				params: {
					remove: !0,
					minify: !0,
					prefix: '',
					preserve: [],
					force: !1
				},
				fn: function(e, t) {
					function n(e) {
						for (var s = 0, i; s < e.content.length && !o; s++) {
							if (i = e.content[s], !t.force) {
								if (i.isElem(Pwe)) {
									o = !0;
									continue
								}
								if (i.isElem('defs') && i.parentNode.isElem('svg')) {
									for (var l = !0, d = s + 1; d < e.content.length; d++)
										if (e.content[d].isElem()) {
											l = !1;
											break
										}
									if (l) break
								}
							}
							i.isElem() && i.eachAttr(function(e) {
								var t, n;
								if ('id' === e.name) return t = e.value, void(r.has(t) ? i.removeAttr('id') : r.set(t, i));
								if (Cwe.has(e.name) && (n = e.value.match(Ewe)) ? t = n[2] : ('href' === e.local && (n = e.value.match(Awe)) || 'begin' === e.name && (n = e.value.match(Owe))) && (t = n[1]), t) {
									var o = a.get(t) || [];
									o.push(e), a.set(t, o)
								}
							}), i.content && n(i)
						}
						return e
					}
					var r = new Map,
						a = new Map,
						o = !1,
						i = new Set(Array.isArray(t.preserve) ? t.preserve : t.preserve ? [t.preserve] : []),
						s = '#',
						l = '.',
						d, c;
					if (e = n(e), o) return e;
					for (var p of a) {
						var u = p[0];
						if (r.has(u)) {
							if (t.minify && !i.has(u)) {
								c = Yl(d = g(d), t), r.get(u).attr('id').value = c;
								for (var m of p[1]) m.value = m.value.includes(s) ? m.value.replace(s + u, s + c) : m.value.replace(u + l, c + l)
							}
							r.delete(u)
						}
					}
					if (t.remove)
						for (var h of r) i.has(h[0]) || h[1].removeAttr('id');
					return e
				}
			},
			removeRasterImages: {
				type: 'perItem',
				active: !1,
				description: 'removes raster images (disabled by default)',
				fn: function(e) {
					if (e.isElem('image') && e.hasAttrLocal('href', /(\.|image\/)(jpg|png|gif)/)) return !1
				}
			},
			removeUselessDefs: {
				type: 'perItem',
				active: !0,
				description: 'removes elements in <defs> without id',
				fn: function(e) {
					if (e.isElem('defs')) {
						if (e.content && (e.content = $l(e, [])), e.isEmpty()) return !1;
					} else if (e.isElem(Rwe) && !e.hasAttr('id')) return !1
				}
			},
			cleanupNumericValues: {
				type: 'perItem',
				active: !0,
				description: 'rounds numeric values to the fixed precision, removes default \u2018px\u2019 units',
				params: {
					floatPrecision: 3,
					leadingZero: !0,
					defaultPx: !0,
					convertToPx: !0
				},
				fn: function(e, t) {
					if (e.isElem()) {
						var n = t.floatPrecision;
						if (e.hasAttr('viewBox')) {
							var r = e.attr('viewBox').value.split(/[ ,]/g);
							e.attr('viewBox').value = r.map(function(e) {
								var t = +e;
								return isNaN(t) ? e : +t.toFixed(n)
							}).join(' ')
						}
						e.eachAttr(function(e) {
							var r = e.value.match(Nwe);
							if (r) {
								var a = +(+r[1]).toFixed(n),
									o = r[3] || '';
								if (t.convertToPx && o && o in Iwe) {
									var i = +(Iwe[o] * r[1]).toFixed(n);
									(i + '').length < r[0].length && (a = i, o = 'px')
								}
								t.leadingZero && (a = Bwe(a)), t.defaultPx && 'px' === o && (o = ''), e.value = a + o
							}
						})
					}
				}
			},
			cleanupListOfValues: {
				type: 'perItem',
				active: !1,
				description: 'rounds list of values to the fixed precision',
				params: {
					floatPrecision: 3,
					leadingZero: !0,
					defaultPx: !0,
					convertToPx: !0
				},
				fn: function(e, t) {
					function n(e) {
						var n = e.value,
							r = n.split(_we),
							a = [],
							o, i, s, l, d;
						r.forEach(function(e) {
							if (s = e.match(zwe), l = e.match(/new/), s) {
								if (o = +(+s[1]).toFixed(t.floatPrecision), i = s[3] || '', t.convertToPx && i && i in Gwe) {
									var n = +(Gwe[i] * s[1]).toFixed(t.floatPrecision);
									(n + '').length < s[0].length && (o = n, i = 'px')
								}
								t.leadingZero && (o = Mwe(o)), t.defaultPx && 'px' === i && (i = ''), a.push(o + i)
							} else l && a.push('new')
						}), d = a.join(' '), e.value = d
					}
					e.hasAttr('points') && n(e.attrs.points), e.hasAttr('enable-background') && n(e.attrs['enable-background']), e.hasAttr('viewBox') && n(e.attrs.viewBox), e.hasAttr('stroke-dasharray') && n(e.attrs['stroke-dasharray']), e.hasAttr('dx') && n(e.attrs.dx), e.hasAttr('dy') && n(e.attrs.dy), e.hasAttr('x') && n(e.attrs.x), e.hasAttr('y') && n(e.attrs.y)
				}
			},
			convertColors: {
				type: 'perItem',
				active: !0,
				description: 'converts colors: rgb() to #rrggbb and #rrggbb to #rgb',
				params: {
					currentColor: !1,
					names2hex: !0,
					rgb2hex: !0,
					shorthex: !0,
					shortname: !0
				},
				fn: function(e, t) {
					e.elem && e.eachAttr(function(e) {
						if (-1 < Hpe.colorsProps.indexOf(e.name)) {
							var n = e.value,
								r;
							if (t.currentColor && (r = 'string' == typeof t.currentColor ? n === t.currentColor : t.currentColor.exec ? t.currentColor.exec(n) : !n.match(Wwe), r && (n = 'currentColor')), t.names2hex && n.toLowerCase() in Hpe.colorsNames && (n = Hpe.colorsNames[n.toLowerCase()]), t.rgb2hex && (r = n.match(Uwe)) && (r = r.slice(1, 4).map(function(e) {
									return -1 < e.indexOf('%') && (e = zd(2.55 * parseFloat(e))), Md(0, Ud(e, 255))
								}), n = Kl(r)), t.shorthex && (r = n.match(Vwe)) && (n = '#' + r[0][1] + r[0][3] + r[0][5]), t.shortname) {
								var a = n.toLowerCase();
								a in Hpe.colorsShortNames && (n = Hpe.colorsShortNames[a])
							}
							e.value = n
						}
					})
				}
			},
			removeUnknownsAndDefaults: {
				type: 'perItem',
				active: !0,
				description: 'removes unknown elements content and attributes, removes attrs with default values',
				params: {
					unknownContent: !0,
					unknownAttrs: !0,
					defaultAttrs: !0,
					uselessOverrides: !0,
					keepDataAttrs: !0,
					keepAriaAttrs: !0
				},
				fn: function(e, t) {
					if (e.isElem() && !e.prefix) {
						var n = e.elem;
						t.unknownContent && !e.isEmpty() && Fwe[n] && 'foreignObject' !== n && e.content.forEach(function(t, r) {
							!t.isElem() || t.prefix || (!Fwe[n].content || -1 !== Fwe[n].content.indexOf(t.elem)) && (Fwe[n].content || Fwe[t.elem]) || e.content.splice(r, 1)
						}), Fwe[n] && Fwe[n].attrs && e.eachAttr(function(r) {
							'xmlns' !== r.name && ('xml' === r.prefix || !r.prefix) && (!t.keepDataAttrs || 0 != r.name.indexOf('data-')) && (!t.keepAriaAttrs || 0 != r.name.indexOf('aria-')) && (t.unknownAttrs && -1 === Fwe[n].attrs.indexOf(r.name) || t.defaultAttrs && Fwe[n].defaults && Fwe[n].defaults[r.name] === r.value && (0 > $we.indexOf(r.name) || !e.parentNode.computedAttr(r.name)) || t.uselessOverrides && 'transform' !== r.name && -1 < $we.indexOf(r.name) && e.parentNode.computedAttr(r.name, r.value)) && e.removeAttr(r.name)
						})
					}
				}
			},
			removeNonInheritableGroupAttrs: {
				type: 'perItem',
				active: !0,
				description: 'removes non-inheritable group\u2019s presentational attributes',
				fn: function(e) {
					e.isElem('g') && e.eachAttr(function(t) {
						~Qwe.presentation.indexOf(t.name) && ~Qwe.graphicalEvent.indexOf(t.name) && ~Qwe.core.indexOf(t.name) && ~Qwe.conditionalProcessing.indexOf(t.name) && !~Zwe.indexOf(t.name) && !~Xwe.indexOf(t.name) && e.removeAttr(t.name)
					})
				}
			},
			removeUselessStrokeAndFill: {
				type: 'perItem',
				active: !0,
				description: 'removes useless stroke and fill attributes',
				params: {
					stroke: !0,
					fill: !0,
					removeNone: !1,
					hasStyleOrScript: !1
				},
				fn: function(e, t) {
					if (e.isElem(nve) && (t.hasStyleOrScript = !0), !t.hasStyleOrScript && e.isElem(Jwe) && !e.computedAttr('id')) {
						var n = t.stroke && e.computedAttr('stroke'),
							r = t.fill && !e.computedAttr('fill', 'none');
						if (t.stroke && (!n || 'none' == n || e.computedAttr('stroke-opacity', '0') || e.computedAttr('stroke-width', '0'))) {
							var a = e.parentNode.computedAttr('stroke');
							e.eachAttr(function(t) {
								eve.test(t.name) && e.removeAttr(t.name)
							}), a && 'none' != a && e.addAttr({
								name: 'stroke',
								value: 'none',
								prefix: '',
								local: 'stroke'
							})
						}
						if (t.fill && (!r || e.computedAttr('fill-opacity', '0')) && (e.eachAttr(function(t) {
								tve.test(t.name) && e.removeAttr(t.name)
							}), r && (e.hasAttr('fill') ? e.attr('fill').value = 'none' : e.addAttr({
								name: 'fill',
								value: 'none',
								prefix: '',
								local: 'fill'
							}))), t.removeNone && (!n || e.hasAttr('stroke') && 'none' == e.attr('stroke').value) && (!r || e.hasAttr('fill') && 'none' == e.attr('fill').value)) return !1
					}
				}
			},
			removeViewBox: {
				type: 'perItem',
				active: !0,
				description: 'removes viewBox attribute when possible',
				fn: function(e) {
					if (e.isElem(rve) && e.hasAttr('viewBox') && e.hasAttr('width') && e.hasAttr('height')) {
						var t = e.attr('viewBox').value.split(/[ ,]+/g);
						'0' === t[0] && '0' === t[1] && e.attr('width').value.replace(/px$/, '') === t[2] && e.attr('height').value.replace(/px$/, '') === t[3] && e.removeAttr('viewBox')
					}
				}
			},
			cleanupEnableBackground: {
				type: 'full',
				active: !0,
				description: 'remove or cleanup enable-background attribute when possible',
				fn: function(e) {
					function t(e) {
						if (e.isElem(i) && e.hasAttr('enable-background') && e.hasAttr('width') && e.hasAttr('height')) {
							var t = e.attr('enable-background').value.match(a);
							t && e.attr('width').value === t[1] && e.attr('height').value === t[3] && (e.isElem('svg') ? e.removeAttr('enable-background') : e.attr('enable-background').value = 'new')
						}
					}

					function n(e) {
						e.isElem('filter') && (o = !0)
					}

					function r(e, t) {
						return e.content.forEach(function(e) {
							t(e), e.content && r(e, t)
						}), e
					}
					var a = /^new\s0\s0\s([\-+]?\d*\.?\d+([eE][\-+]?\d+)?)\s([\-+]?\d*\.?\d+([eE][\-+]?\d+)?)$/,
						o = !1,
						i = ['svg', 'mask', 'pattern'],
						s = r(e, function(e) {
							t(e), o || n(e)
						});
					return o ? s : r(s, function(e) {
						e.removeAttr('enable-background')
					})
				}
			},
			removeHiddenElems: {
				type: 'perItem',
				active: !0,
				description: 'removes hidden elements (zero sized, with absent attributes)',
				params: {
					displayNone: !0,
					opacity0: !0,
					circleR0: !0,
					ellipseRX0: !0,
					ellipseRY0: !0,
					rectWidth0: !0,
					rectHeight0: !0,
					patternWidth0: !0,
					patternHeight0: !0,
					imageWidth0: !0,
					imageHeight0: !0,
					pathEmptyD: !0,
					polylineEmptyPoints: !0,
					polygonEmptyPoints: !0
				},
				fn: function(e, t) {
					if (e.elem) {
						if (t.displayNone && e.hasAttr('display', 'none')) return !1;
						if (t.opacity0 && e.hasAttr('opacity', '0')) return !1;
						if (t.circleR0 && e.isElem('circle') && e.isEmpty() && e.hasAttr('r', '0')) return !1;
						if (t.ellipseRX0 && e.isElem('ellipse') && e.isEmpty() && e.hasAttr('rx', '0')) return !1;
						if (t.ellipseRY0 && e.isElem('ellipse') && e.isEmpty() && e.hasAttr('ry', '0')) return !1;
						if (t.rectWidth0 && e.isElem('rect') && e.isEmpty() && e.hasAttr('width', '0')) return !1;
						if (t.rectHeight0 && t.rectWidth0 && e.isElem('rect') && e.isEmpty() && e.hasAttr('height', '0')) return !1;
						if (t.patternWidth0 && e.isElem('pattern') && e.hasAttr('width', '0')) return !1;
						if (t.patternHeight0 && e.isElem('pattern') && e.hasAttr('height', '0')) return !1;
						if (t.imageWidth0 && e.isElem('image') && e.hasAttr('width', '0')) return !1;
						if (t.imageHeight0 && e.isElem('image') && e.hasAttr('height', '0')) return !1;
						if (t.pathEmptyD && e.isElem('path') && (!e.hasAttr('d') || !ave.test(e.attr('d').value))) return !1;
						if (t.polylineEmptyPoints && e.isElem('polyline') && !e.hasAttr('points')) return !1;
						if (t.polygonEmptyPoints && e.isElem('polygon') && !e.hasAttr('points')) return !1
					}
				}
			},
			removeEmptyText: {
				type: 'perItem',
				active: !0,
				description: 'removes empty <text> elements',
				params: {
					text: !0,
					tspan: !0,
					tref: !0
				},
				fn: function(e, t) {
					return t.text && e.isElem('text') && e.isEmpty() ? !1 : t.tspan && e.isElem('tspan') && e.isEmpty() ? !1 : t.tref && e.isElem('tref') && !e.hasAttrLocal('href') ? !1 : void 0
				}
			},
			convertShapeToPath: {
				type: 'perItem',
				active: !0,
				description: 'converts basic shapes to more compact path form',
				params: {
					convertArcs: !1
				},
				fn: function(e, t) {
					var n = t && t.convertArcs;
					if (e.isElem('rect') && e.hasAttr('width') && e.hasAttr('height') && !e.hasAttr('rx') && !e.hasAttr('ry')) {
						var a = +(e.attr('x') || ove).value,
							o = +(e.attr('y') || ove).value,
							i = +e.attr('width').value,
							s = +e.attr('height').value;
						if (isNaN(a - o + i - s)) return;
						e.addAttr({
							name: 'd',
							value: 'M' + a + ' ' + o + 'H' + (a + i) + 'V' + (o + s) + 'H' + a + 'z',
							prefix: '',
							local: 'd'
						}), e.renameElem('path').removeAttr(['x', 'y', 'width', 'height'])
					} else if (e.isElem('line')) {
						var l = +(e.attr('x1') || ove).value,
							d = +(e.attr('y1') || ove).value,
							c = +(e.attr('x2') || ove).value,
							p = +(e.attr('y2') || ove).value;
						if (isNaN(l - d + c - p)) return;
						e.addAttr({
							name: 'd',
							value: 'M' + l + ' ' + d + 'L' + c + ' ' + p,
							prefix: '',
							local: 'd'
						}), e.renameElem('path').removeAttr(['x1', 'y1', 'x2', 'y2'])
					} else if ((e.isElem('polyline') || e.isElem('polygon')) && e.hasAttr('points')) {
						var u = (e.attr('points').value.match(ive) || []).map(Number);
						if (4 > u.length) return !1;
						e.addAttr({
							name: 'd',
							value: 'M' + u.slice(0, 2).join(' ') + 'L' + u.slice(2).join(' ') + (e.isElem('polygon') ? 'z' : ''),
							prefix: '',
							local: 'd'
						}), e.renameElem('path').removeAttr('points')
					} else if (e.isElem('circle') && n) {
						var m = +(e.attr('cx') || ove).value,
							g = +(e.attr('cy') || ove).value,
							h = +(e.attr('r') || ove).value;
						if (isNaN(m - g + h)) return;
						e.addAttr({
							name: 'd',
							value: 'M' + m + ' ' + (g - h) + 'A' + h + ' ' + h + ' 0 1 0 ' + m + ' ' + (g + h) + 'A' + h + ' ' + h + ' 0 1 0 ' + m + ' ' + (g - h) + 'Z',
							prefix: '',
							local: 'd'
						}), e.renameElem('path').removeAttr(['cx', 'cy', 'r'])
					} else if (e.isElem('ellipse') && n) {
						var r = +(e.attr('cx') || ove).value,
							f = +(e.attr('cy') || ove).value,
							y = +(e.attr('rx') || ove).value,
							b = +(e.attr('ry') || ove).value;
						if (isNaN(r - f + y - b)) return;
						e.addAttr({
							name: 'd',
							value: 'M' + r + ' ' + (f - b) + 'A' + y + ' ' + b + ' 0 1 0 ' + r + ' ' + (f + b) + 'A' + y + ' ' + b + ' 0 1 0 ' + r + ' ' + (f - b) + 'Z',
							prefix: '',
							local: 'd'
						}), e.renameElem('path').removeAttr(['cx', 'cy', 'rx', 'ry'])
					}
				}
			},
			moveElemsAttrsToGroup: {
				type: 'perItemReverse',
				active: !0,
				description: 'moves elements attributes to the existing group wrapper',
				fn: function(e) {
					if (e.isElem('g') && !e.isEmpty() && 1 < e.content.length) {
						var t = {},
							n = !1,
							r = e.hasAttr('clip-path') || e.hasAttr('mask'),
							a = e.content.every(function(e) {
								if (e.isElem() && e.hasAttr()) {
									if (e.hasAttr('class')) return !1;
									if (!Object.keys(t).length) t = e.attrs;
									else if (t = Xl(t, e.attrs), !t) return !1;
									return !0
								}
							}),
							o = e.content.every(function(e) {
								return e.isElem(lve)
							});
						a && e.content.forEach(function(a) {
							for (var i in t)(o || r) && 'transform' == i || (a.removeAttr(i), 'transform' == i ? !n && (e.hasAttr('transform') ? e.attr('transform').value += ' ' + t[i].value : e.addAttr(t[i]), n = !0) : e.addAttr(t[i]))
						})
					}
				}
			},
			moveGroupAttrsToElems: {
				type: 'perItem',
				active: !0,
				description: 'moves some group attributes to the content elements',
				fn: function(e) {
					e.isElem('g') && e.hasAttr('transform') && !e.isEmpty() && !e.someAttr(function(e) {
						return ~cve.indexOf(e.name) && ~e.value.indexOf('url(')
					}) && e.content.every(function(e) {
						return e.isElem(dve) && !e.hasAttr('id')
					}) && (e.content.forEach(function(t) {
						var n = e.attr('transform');
						t.hasAttr('transform') ? t.attr('transform').value = n.value + ' ' + t.attr('transform').value : t.addAttr({
							name: n.name,
							local: n.local,
							prefix: n.prefix,
							value: n.value
						})
					}), e.removeAttr('transform'))
				}
			},
			collapseGroups: {
				type: 'perItemReverse',
				active: !0,
				description: 'collapses useless groups',
				fn: function(e) {
					e.isElem() && (!e.isElem('switch') || Zl(e)) && !e.isEmpty() && e.content.forEach(function(t, n) {
						if (t.isElem('g') && !t.isEmpty()) {
							if (t.hasAttr() && 1 === t.content.length) {
								var r = t.content[0];
								!r.isElem() || r.hasAttr('id') || t.hasAttr('class') && r.hasAttr('class') || (t.hasAttr('clip-path') || t.hasAttr('mask')) && (!r.isElem('g') || t.hasAttr('transform') || r.hasAttr('transform')) || t.eachAttr(function(e) {
									if (!t.content.some(Ql, e.name)) {
										if (!r.hasAttr(e.name)) r.addAttr(e);
										else if ('transform' == e.name) r.attr(e.name).value = e.value + ' ' + r.attr(e.name).value;
										else if (0 > pve.indexOf(e.name) && !r.hasAttr(e.name, e.value)) return;
										t.removeAttr(e.name)
									}
								})
							}
							t.hasAttr() || t.content.some(function(e) {
								return e.isElem(uve)
							}) || e.spliceContent(n, 1, t.content)
						} else Zl(t) && e.spliceContent(n, 1, t.content)
					})
				}
			},
			convertPathData: {
				type: 'perItem',
				active: !0,
				description: 'optimizes path data: writes in shorter form, applies transformations',
				params: {
					applyTransforms: !0,
					applyTransformsStroked: !0,
					makeArcs: {
						threshold: 2.5,
						tolerance: 0.5
					},
					straightCurves: !0,
					lineShorthands: !0,
					curveSmoothShorthands: !0,
					floatPrecision: 3,
					transformPrecision: 5,
					removeUseless: !0,
					collapseRepeated: !0,
					utilizeAbsolute: !0,
					leadingZero: !0,
					negativeExtraSpace: !0
				},
				fn: function(e, t) {
					if (e.isElem(hve) && e.hasAttr('d')) {
						Sve = t.floatPrecision, wve = !1 === Sve ? 0.01 : +Wd(.1, Sve).toFixed(Sve), kve = 0 < Sve && 20 > Sve ? ad : od, t.makeArcs && (vve = t.makeArcs.threshold, Tve = t.makeArcs.tolerance), Cve = e.hasAttr('marker-mid');
						var n = fve(e);
						n.length && (Jl(n), t.applyTransforms && (n = bve(e, n, t)), n = ed(n, t), t.utilizeAbsolute && (n = td(n, t)), yve(e, n, t))
					}
				}
			},
			convertTransform: {
				type: 'perItem',
				active: !0,
				description: 'collapses multiple transformations and optimizes it',
				params: {
					convertToShorts: !0,
					floatPrecision: 3,
					transformPrecision: 5,
					matrixToTransform: !0,
					shortTranslate: !0,
					shortScale: !0,
					shortRotate: !0,
					removeUseless: !0,
					collapseIntoOne: !0,
					leadingZero: !0,
					negativeExtraSpace: !1
				},
				fn: function(e, t) {
					e.elem && (e.hasAttr('transform') && fd(e, 'transform', t), e.hasAttr('gradientTransform') && fd(e, 'gradientTransform', t), e.hasAttr('patternTransform') && fd(e, 'patternTransform', t))
				}
			},
			removeEmptyAttrs: {
				type: 'perItem',
				active: !0,
				description: 'removes empty attributes',
				fn: function(e) {
					e.elem && e.eachAttr(function(t) {
						'' === t.value && e.removeAttr(t.name)
					})
				}
			},
			removeEmptyContainers: {
				type: 'perItemReverse',
				active: !0,
				description: 'removes empty container elements',
				fn: function(e) {
					return !e.isElem(Dve) || e.isElem('svg') || !e.isEmpty() || e.isElem('pattern') && e.hasAttrLocal('href')
				}
			},
			mergePaths: {
				type: 'perItem',
				active: !0,
				description: 'merges multiple paths in one if possible',
				params: {
					collapseRepeated: !0,
					leadingZero: !0,
					negativeExtraSpace: !0
				},
				fn: function(e, t) {
					if (e.isElem() && !e.isEmpty()) {
						var n = null,
							r = null;
						e.content = e.content.filter(function(e) {
							if (n && n.isElem('path') && n.isEmpty() && n.hasAttr('d') && e.isElem('path') && e.isEmpty() && e.hasAttr('d')) {
								r || (r = Object.keys(n.attrs));
								var a = Object.keys(e.attrs),
									o = r.length == a.length && a.every(function(t) {
										return 'd' == t || n.hasAttr(t) && n.attr(t).value == e.attr(t).value
									}),
									i = Nve(n),
									s = Nve(e);
								if (o && !Ive(i, s)) return Bve(n, i.concat(s), t), !1
							}
							return n = e, r = null, !0
						})
					}
				}
			},
			removeUnusedNS: {
				type: 'full',
				active: !0,
				description: 'removes unused namespaces declaration',
				fn: function(e) {
					function t(e) {
						var t = r.indexOf(e); - 1 < t && r.splice(t, 1)
					}

					function n(e) {
						for (var o = 0, i = e.content.length, s; o < i;) s = e.content[o], s.isElem('svg') ? (s.eachAttr(function(e) {
							'xmlns' === e.prefix && e.local && r.push(e.local)
						}), r.length && (a = s)) : r.length && (s.prefix && t(s.prefix), s.eachAttr(function(e) {
							t(e.prefix)
						})), r.length && s.content && n(s), o++;
						return e
					}
					var r = [],
						a;
					return e = n(e), r.length && r.forEach(function(e) {
						a.removeAttr('xmlns:' + e)
					}), e
				}
			},
			sortAttrs: {
				type: 'perItem',
				active: !1,
				description: 'sorts element attributes (disabled by default)',
				params: {
					order: ['id', 'width', 'height', 'x', 'x1', 'x2', 'y', 'y1', 'y2', 'cx', 'cy', 'r', 'fill', 'stroke', 'marker', 'd', 'points']
				},
				fn: function(e, t) {
					var n = [],
						r = {},
						o = t.order.length + 1;
					e.elem && (e.eachAttr(function(e) {
						n.push(e)
					}), n.sort(function(e, n) {
						if (e.prefix != n.prefix) return 'xmlns' == e.prefix ? -1 : 'xmlns' == n.prefix ? 1 : e.prefix < n.prefix ? -1 : 1;
						for (var r = o, a = o, s = 0; s < t.order.length; s++) e.name == t.order[s] ? r = s : 0 === e.name.indexOf(t.order[s] + '-') && (r = s + .5), n.name == t.order[s] ? a = s : 0 === n.name.indexOf(t.order[s] + '-') && (a = s + .5);
						return r == a ? e.name < n.name ? -1 : 1 : r - a
					}), n.forEach(function(e) {
						r[e.name] = e
					}), e.attrs = r)
				}
			},
			removeTitle: {
				type: 'perItem',
				active: !0,
				description: 'removes <title>',
				fn: function(e) {
					return !e.isElem('title')
				}
			},
			removeDesc: {
				type: 'perItem',
				active: !0,
				params: {
					removeAny: !0
				},
				description: 'removes <desc>',
				fn: function(e, t) {
					return !e.isElem('desc') || !(t.removeAny || e.isEmpty() || zve.test(e.content[0].text))
				}
			},
			removeDimensions: {
				type: 'perItem',
				active: !1,
				description: 'removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)',
				fn: function(e) {
					e.isElem('svg') && e.hasAttr('viewBox') && (e.removeAttr('width'), e.removeAttr('height'))
				}
			},
			removeStyleElement: {
				type: 'perItem',
				active: !1,
				description: 'removes <style> element (disabled by default)',
				fn: function(e) {
					return !e.isElem('style')
				}
			},
			removeScriptElement: {
				type: 'perItem',
				active: !1,
				description: 'removes <script> elements (disabled by default)',
				fn: function(e) {
					return !e.isElem('script')
				}
			}
		},
		Mve = function(e) {
			return e.map((e) => [e]).reduce((e, t) => {
				const n = e[e.length - 1];
				return n && t[0].type === n[0].type ? n.push(t[0]) : e.push(t), e
			}, [])
		}(Object.values(_ve));
	let Gve, Uve;
	const Vve = {
		load({
			data: e
		}) {
			if (Gpe(e, (e) => Gve = e), Gve.error) throw Error(Gve.error);
			return Ad(Gve)
		},
		process({
			settings: e
		}) {
			return Uve = Od(e), Uve.next().value
		},
		nextPass() {
			return Uve.next().value
		}
	};

	console.log('12321', document, window);
	self.svgo = (t) => {
		try {
			return {
				id: t.id,
				result: Vve[t.action](t)
			}
		} catch (n) {
			return {
				id: t.id,
				error: n.message
			}
		}
	}
})();
console.log('234234', document, window);