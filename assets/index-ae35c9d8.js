(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
function os(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
const ee = {},
  _t = [],
  Fe = () => {},
  Ko = () => !1,
  Do = /^on[^a-z]/,
  mn = (e) => Do.test(e),
  is = (e) => e.startsWith("onUpdate:"),
  le = Object.assign,
  ls = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Wo = Object.prototype.hasOwnProperty,
  D = (e, t) => Wo.call(e, t),
  N = Array.isArray,
  bt = (e) => bn(e) === "[object Map]",
  Or = (e) => bn(e) === "[object Set]",
  k = (e) => typeof e == "function",
  oe = (e) => typeof e == "string",
  _n = (e) => typeof e == "symbol",
  te = (e) => e !== null && typeof e == "object",
  Sr = (e) => (te(e) || k(e)) && k(e.then) && k(e.catch),
  Ar = Object.prototype.toString,
  bn = (e) => Ar.call(e),
  zo = (e) => bn(e).slice(8, -1),
  Fr = (e) => bn(e) === "[object Object]",
  cs = (e) =>
    oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  rn = os(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  yn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  qo = /-(\w)/g,
  ke = yn((e) => e.replace(qo, (t, n) => (n ? n.toUpperCase() : ""))),
  Vo = /\B([A-Z])/g,
  Ot = yn((e) => e.replace(Vo, "-$1").toLowerCase()),
  vn = yn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Tn = yn((e) => (e ? `on${vn(e)}` : "")),
  ut = (e, t) => !Object.is(e, t),
  In = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  un = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Qo = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Ts;
const Un = () =>
  Ts ||
  (Ts =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function St(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = oe(s) ? Zo(s) : St(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (oe(e) || te(e)) return e;
}
const Yo = /;(?![^(]*\))/g,
  Jo = /:([^]+)/,
  Xo = /\/\*[^]*?\*\//g;
function Zo(e) {
  const t = {};
  return (
    e
      .replace(Xo, "")
      .split(Yo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Jo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function us(e) {
  let t = "";
  if (oe(e)) t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const s = us(e[n]);
      s && (t += s + " ");
    }
  else if (te(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Go =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ei = os(Go);
function Tr(e) {
  return !!e || e === "";
}
const fn = (e) =>
    oe(e)
      ? e
      : e == null
      ? ""
      : N(e) || (te(e) && (e.toString === Ar || !k(e.toString)))
      ? JSON.stringify(e, Ir, 2)
      : String(e),
  Ir = (e, t) =>
    t && t.__v_isRef
      ? Ir(e, t.value)
      : bt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : Or(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : te(t) && !N(t) && !Fr(t)
      ? String(t)
      : t;
let ye;
class Mr {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ye),
      !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ye;
      try {
        return (ye = this), t();
      } finally {
        ye = n;
      }
    }
  }
  on() {
    ye = this;
  }
  off() {
    ye = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Lr(e) {
  return new Mr(e);
}
function ti(e, t = ye) {
  t && t.active && t.effects.push(e);
}
function jr() {
  return ye;
}
function ni(e) {
  ye && ye.cleanups.push(e);
}
const fs = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  Nr = (e) => (e.w & tt) > 0,
  $r = (e) => (e.n & tt) > 0,
  si = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= tt;
  },
  ri = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const r = t[s];
        Nr(r) && !$r(r) ? r.delete(e) : (t[n++] = r),
          (r.w &= ~tt),
          (r.n &= ~tt);
      }
      t.length = n;
    }
  },
  an = new WeakMap();
let Lt = 0,
  tt = 1;
const Kn = 30;
let Se;
const lt = Symbol(""),
  Dn = Symbol("");
class as {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      ti(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = Se,
      n = Ze;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = Se),
        (Se = this),
        (Ze = !0),
        (tt = 1 << ++Lt),
        Lt <= Kn ? si(this) : Is(this),
        this.fn()
      );
    } finally {
      Lt <= Kn && ri(this),
        (tt = 1 << --Lt),
        (Se = this.parent),
        (Ze = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Se === this
      ? (this.deferStop = !0)
      : this.active &&
        (Is(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Is(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Ze = !0;
const Br = [];
function At() {
  Br.push(Ze), (Ze = !1);
}
function Ft() {
  const e = Br.pop();
  Ze = e === void 0 ? !0 : e;
}
function me(e, t, n) {
  if (Ze && Se) {
    let s = an.get(e);
    s || an.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = fs())), kr(r);
  }
}
function kr(e, t) {
  let n = !1;
  Lt <= Kn ? $r(e) || ((e.n |= tt), (n = !Nr(e))) : (n = !e.has(Se)),
    n && (e.add(Se), Se.deps.push(e));
}
function De(e, t, n, s, r, o) {
  const i = an.get(e);
  if (!i) return;
  let c = [];
  if (t === "clear") c = [...i.values()];
  else if (n === "length" && N(e)) {
    const l = Number(s);
    i.forEach((a, d) => {
      (d === "length" || (!_n(d) && d >= l)) && c.push(a);
    });
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case "add":
        N(e)
          ? cs(n) && c.push(i.get("length"))
          : (c.push(i.get(lt)), bt(e) && c.push(i.get(Dn)));
        break;
      case "delete":
        N(e) || (c.push(i.get(lt)), bt(e) && c.push(i.get(Dn)));
        break;
      case "set":
        bt(e) && c.push(i.get(lt));
        break;
    }
  if (c.length === 1) c[0] && Wn(c[0]);
  else {
    const l = [];
    for (const a of c) a && l.push(...a);
    Wn(fs(l));
  }
}
function Wn(e, t) {
  const n = N(e) ? e : [...e];
  for (const s of n) s.computed && Ms(s);
  for (const s of n) s.computed || Ms(s);
}
function Ms(e, t) {
  (e !== Se || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function oi(e, t) {
  var n;
  return (n = an.get(e)) == null ? void 0 : n.get(t);
}
const ii = os("__proto__,__v_isRef,__isVue"),
  Hr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(_n)
  ),
  Ls = li();
function li() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = W(this);
        for (let o = 0, i = this.length; o < i; o++) me(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(W)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        At();
        const s = W(this)[t].apply(this, n);
        return Ft(), s;
      };
    }),
    e
  );
}
function ci(e) {
  const t = W(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class Ur {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._shallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw" && s === (r ? (o ? Ei : zr) : o ? Wr : Dr).get(t))
      return t;
    const i = N(t);
    if (!r) {
      if (i && D(Ls, n)) return Reflect.get(Ls, n, s);
      if (n === "hasOwnProperty") return ci;
    }
    const c = Reflect.get(t, n, s);
    return (_n(n) ? Hr.has(n) : ii(n)) || (r || me(t, "get", n), o)
      ? c
      : se(c)
      ? i && cs(n)
        ? c
        : c.value
      : te(c)
      ? r
        ? Vr(c)
        : Jt(c)
      : c;
  }
}
class Kr extends Ur {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (xt(o) && se(o) && !se(s)) return !1;
    if (
      !this._shallow &&
      (!dn(s) && !xt(s) && ((o = W(o)), (s = W(s))), !N(t) && se(o) && !se(s))
    )
      return (o.value = s), !0;
    const i = N(t) && cs(n) ? Number(n) < t.length : D(t, n),
      c = Reflect.set(t, n, s, r);
    return (
      t === W(r) && (i ? ut(s, o) && De(t, "set", n, s) : De(t, "add", n, s)), c
    );
  }
  deleteProperty(t, n) {
    const s = D(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && De(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!_n(n) || !Hr.has(n)) && me(t, "has", n), s;
  }
  ownKeys(t) {
    return me(t, "iterate", N(t) ? "length" : lt), Reflect.ownKeys(t);
  }
}
class ui extends Ur {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const fi = new Kr(),
  ai = new ui(),
  di = new Kr(!0),
  ds = (e) => e,
  En = (e) => Reflect.getPrototypeOf(e);
function Zt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = W(e),
    o = W(t);
  n || (ut(t, o) && me(r, "get", t), me(r, "get", o));
  const { has: i } = En(r),
    c = s ? ds : n ? gs : Kt;
  if (i.call(r, t)) return c(e.get(t));
  if (i.call(r, o)) return c(e.get(o));
  e !== r && e.get(t);
}
function Gt(e, t = !1) {
  const n = this.__v_raw,
    s = W(n),
    r = W(e);
  return (
    t || (ut(e, r) && me(s, "has", e), me(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function en(e, t = !1) {
  return (
    (e = e.__v_raw), !t && me(W(e), "iterate", lt), Reflect.get(e, "size", e)
  );
}
function js(e) {
  e = W(e);
  const t = W(this);
  return En(t).has.call(t, e) || (t.add(e), De(t, "add", e, e)), this;
}
function Ns(e, t) {
  t = W(t);
  const n = W(this),
    { has: s, get: r } = En(n);
  let o = s.call(n, e);
  o || ((e = W(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? ut(t, i) && De(n, "set", e, t) : De(n, "add", e, t), this
  );
}
function $s(e) {
  const t = W(this),
    { has: n, get: s } = En(t);
  let r = n.call(t, e);
  r || ((e = W(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && De(t, "delete", e, void 0), o;
}
function Bs() {
  const e = W(this),
    t = e.size !== 0,
    n = e.clear();
  return t && De(e, "clear", void 0, void 0), n;
}
function tn(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      c = W(i),
      l = t ? ds : e ? gs : Kt;
    return (
      !e && me(c, "iterate", lt), i.forEach((a, d) => s.call(r, l(a), l(d), o))
    );
  };
}
function nn(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = W(r),
      i = bt(o),
      c = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      a = r[e](...s),
      d = n ? ds : t ? gs : Kt;
    return (
      !t && me(o, "iterate", l ? Dn : lt),
      {
        next() {
          const { value: p, done: g } = a.next();
          return g
            ? { value: p, done: g }
            : { value: c ? [d(p[0]), d(p[1])] : d(p), done: g };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function qe(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function hi() {
  const e = {
      get(o) {
        return Zt(this, o);
      },
      get size() {
        return en(this);
      },
      has: Gt,
      add: js,
      set: Ns,
      delete: $s,
      clear: Bs,
      forEach: tn(!1, !1),
    },
    t = {
      get(o) {
        return Zt(this, o, !1, !0);
      },
      get size() {
        return en(this);
      },
      has: Gt,
      add: js,
      set: Ns,
      delete: $s,
      clear: Bs,
      forEach: tn(!1, !0),
    },
    n = {
      get(o) {
        return Zt(this, o, !0);
      },
      get size() {
        return en(this, !0);
      },
      has(o) {
        return Gt.call(this, o, !0);
      },
      add: qe("add"),
      set: qe("set"),
      delete: qe("delete"),
      clear: qe("clear"),
      forEach: tn(!0, !1),
    },
    s = {
      get(o) {
        return Zt(this, o, !0, !0);
      },
      get size() {
        return en(this, !0);
      },
      has(o) {
        return Gt.call(this, o, !0);
      },
      add: qe("add"),
      set: qe("set"),
      delete: qe("delete"),
      clear: qe("clear"),
      forEach: tn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = nn(o, !1, !1)),
        (n[o] = nn(o, !0, !1)),
        (t[o] = nn(o, !1, !0)),
        (s[o] = nn(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [pi, gi, mi, _i] = hi();
function hs(e, t) {
  const n = t ? (e ? _i : mi) : e ? gi : pi;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(D(n, r) && r in s ? n : s, r, o);
}
const bi = { get: hs(!1, !1) },
  yi = { get: hs(!1, !0) },
  vi = { get: hs(!0, !1) },
  Dr = new WeakMap(),
  Wr = new WeakMap(),
  zr = new WeakMap(),
  Ei = new WeakMap();
function xi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function wi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xi(zo(e));
}
function Jt(e) {
  return xt(e) ? e : ps(e, !1, fi, bi, Dr);
}
function qr(e) {
  return ps(e, !1, di, yi, Wr);
}
function Vr(e) {
  return ps(e, !0, ai, vi, zr);
}
function ps(e, t, n, s, r) {
  if (!te(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = wi(e);
  if (i === 0) return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return r.set(e, c), c;
}
function Ge(e) {
  return xt(e) ? Ge(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
function dn(e) {
  return !!(e && e.__v_isShallow);
}
function Qr(e) {
  return Ge(e) || xt(e);
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function xn(e) {
  return un(e, "__v_skip", !0), e;
}
const Kt = (e) => (te(e) ? Jt(e) : e),
  gs = (e) => (te(e) ? Vr(e) : e);
function Yr(e) {
  Ze && Se && ((e = W(e)), kr(e.dep || (e.dep = fs())));
}
function Jr(e, t) {
  e = W(e);
  const n = e.dep;
  n && Wn(n);
}
function se(e) {
  return !!(e && e.__v_isRef === !0);
}
function ms(e) {
  return Xr(e, !1);
}
function Ri(e) {
  return Xr(e, !0);
}
function Xr(e, t) {
  return se(e) ? e : new Ci(e, t);
}
class Ci {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : W(t)),
      (this._value = n ? t : Kt(t));
  }
  get value() {
    return Yr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || dn(t) || xt(t);
    (t = n ? t : W(t)),
      ut(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Kt(t)), Jr(this));
  }
}
function yt(e) {
  return se(e) ? e.value : e;
}
const Pi = {
  get: (e, t, n) => yt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return se(r) && !se(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Zr(e) {
  return Ge(e) ? e : new Proxy(e, Pi);
}
function Oi(e) {
  const t = N(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Ai(e, n);
  return t;
}
class Si {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return oi(W(this._object), this._key);
  }
}
function Ai(e, t, n) {
  const s = e[t];
  return se(s) ? s : new Si(e, t, n);
}
class Fi {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new as(t, () => {
        this._dirty || ((this._dirty = !0), Jr(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = W(this);
    return (
      Yr(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
function Ti(e, t, n = !1) {
  let s, r;
  const o = k(e);
  return (
    o ? ((s = e), (r = Fe)) : ((s = e.get), (r = e.set)),
    new Fi(s, r, o || !r, n)
  );
}
function et(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    wn(o, t, n);
  }
  return r;
}
function Te(e, t, n, s) {
  if (k(e)) {
    const o = et(e, t, n, s);
    return (
      o &&
        Sr(o) &&
        o.catch((i) => {
          wn(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(Te(e[o], t, n, s));
  return r;
}
function wn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      c = n;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let d = 0; d < a.length; d++) if (a[d](e, i, c) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      et(l, null, 10, [e, i, c]);
      return;
    }
  }
  Ii(e, n, r, s);
}
function Ii(e, t, n, s = !0) {
  console.error(e);
}
let Dt = !1,
  zn = !1;
const de = [];
let $e = 0;
const vt = [];
let Ke = null,
  ot = 0;
const Gr = Promise.resolve();
let _s = null;
function bs(e) {
  const t = _s || Gr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mi(e) {
  let t = $e + 1,
    n = de.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = de[s],
      o = Wt(r);
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function ys(e) {
  (!de.length || !de.includes(e, Dt && e.allowRecurse ? $e + 1 : $e)) &&
    (e.id == null ? de.push(e) : de.splice(Mi(e.id), 0, e), eo());
}
function eo() {
  !Dt && !zn && ((zn = !0), (_s = Gr.then(no)));
}
function Li(e) {
  const t = de.indexOf(e);
  t > $e && de.splice(t, 1);
}
function ji(e) {
  N(e)
    ? vt.push(...e)
    : (!Ke || !Ke.includes(e, e.allowRecurse ? ot + 1 : ot)) && vt.push(e),
    eo();
}
function ks(e, t = Dt ? $e + 1 : 0) {
  for (; t < de.length; t++) {
    const n = de[t];
    n && n.pre && (de.splice(t, 1), t--, n());
  }
}
function to(e) {
  if (vt.length) {
    const t = [...new Set(vt)];
    if (((vt.length = 0), Ke)) {
      Ke.push(...t);
      return;
    }
    for (Ke = t, Ke.sort((n, s) => Wt(n) - Wt(s)), ot = 0; ot < Ke.length; ot++)
      Ke[ot]();
    (Ke = null), (ot = 0);
  }
}
const Wt = (e) => (e.id == null ? 1 / 0 : e.id),
  Ni = (e, t) => {
    const n = Wt(e) - Wt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function no(e) {
  (zn = !1), (Dt = !0), de.sort(Ni);
  const t = Fe;
  try {
    for ($e = 0; $e < de.length; $e++) {
      const n = de[$e];
      n && n.active !== !1 && et(n, null, 14);
    }
  } finally {
    ($e = 0),
      (de.length = 0),
      to(),
      (Dt = !1),
      (_s = null),
      (de.length || vt.length) && no();
  }
}
function $i(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const d = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: p, trim: g } = s[d] || ee;
    g && (r = n.map((y) => (oe(y) ? y.trim() : y))), p && (r = n.map(Qo));
  }
  let c,
    l = s[(c = Tn(t))] || s[(c = Tn(ke(t)))];
  !l && o && (l = s[(c = Tn(Ot(t)))]), l && Te(l, e, 6, r);
  const a = s[c + "Once"];
  if (a) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[c]) return;
    (e.emitted[c] = !0), Te(a, e, 6, r);
  }
}
function so(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    c = !1;
  if (!k(e)) {
    const l = (a) => {
      const d = so(a, t, !0);
      d && ((c = !0), le(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !c
    ? (te(e) && s.set(e, null), null)
    : (N(o) ? o.forEach((l) => (i[l] = null)) : le(i, o),
      te(e) && s.set(e, i),
      i);
}
function Rn(e, t) {
  return !e || !mn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      D(e, t[0].toLowerCase() + t.slice(1)) || D(e, Ot(t)) || D(e, t));
}
let Re = null,
  ro = null;
function hn(e) {
  const t = Re;
  return (Re = e), (ro = (e && e.type.__scopeId) || null), t;
}
function Bi(e, t = Re, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && Xs(-1);
    const o = hn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      hn(o), s._d && Xs(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Mn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: c,
    attrs: l,
    emit: a,
    render: d,
    renderCache: p,
    data: g,
    setupState: y,
    ctx: O,
    inheritAttrs: A,
  } = e;
  let $, T;
  const L = hn(e);
  try {
    if (n.shapeFlag & 4) {
      const j = r || s;
      ($ = Ne(d.call(j, j, p, o, y, g, O))), (T = l);
    } else {
      const j = t;
      ($ = Ne(
        j.length > 1 ? j(o, { attrs: l, slots: c, emit: a }) : j(o, null)
      )),
        (T = t.props ? l : ki(l));
    }
  } catch (j) {
    (Bt.length = 0), wn(j, e, 1), ($ = ve(qt));
  }
  let U = $;
  if (T && A !== !1) {
    const j = Object.keys(T),
      { shapeFlag: X } = U;
    j.length && X & 7 && (i && j.some(is) && (T = Hi(T, i)), (U = wt(U, T)));
  }
  return (
    n.dirs && ((U = wt(U)), (U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (U.transition = n.transition),
    ($ = U),
    hn(L),
    $
  );
}
const ki = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || mn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Hi = (e, t) => {
    const n = {};
    for (const s in e) (!is(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Ui(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: c, patchFlag: l } = t,
    a = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? Hs(s, i, a) : !!i;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const g = d[p];
        if (i[g] !== s[g] && !Rn(a, g)) return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Hs(s, i, a)
        : !0
      : !!i;
  return !1;
}
function Hs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Rn(n, o)) return !0;
  }
  return !1;
}
function Ki({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Di = (e) => e.__isSuspense;
function Wi(e, t) {
  t && t.pendingBranch
    ? N(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ji(e);
}
const sn = {};
function Nt(e, t, n) {
  return oo(e, t, n);
}
function oo(
  e,
  t,
  { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = ee
) {
  var c;
  const l = jr() === ((c = ie) == null ? void 0 : c.scope) ? ie : null;
  let a,
    d = !1,
    p = !1;
  if (
    (se(e)
      ? ((a = () => e.value), (d = dn(e)))
      : Ge(e)
      ? ((a = () => e), (s = !0))
      : N(e)
      ? ((p = !0),
        (d = e.some((j) => Ge(j) || dn(j))),
        (a = () =>
          e.map((j) => {
            if (se(j)) return j.value;
            if (Ge(j)) return mt(j);
            if (k(j)) return et(j, l, 2);
          })))
      : k(e)
      ? t
        ? (a = () => et(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return g && g(), Te(e, l, 3, [y]);
          })
      : (a = Fe),
    t && s)
  ) {
    const j = a;
    a = () => mt(j());
  }
  let g,
    y = (j) => {
      g = L.onStop = () => {
        et(j, l, 4);
      };
    },
    O;
  if (Qt)
    if (
      ((y = Fe),
      t ? n && Te(t, l, 3, [a(), p ? [] : void 0, y]) : a(),
      r === "sync")
    ) {
      const j = kl();
      O = j.__watcherHandles || (j.__watcherHandles = []);
    } else return Fe;
  let A = p ? new Array(e.length).fill(sn) : sn;
  const $ = () => {
    if (L.active)
      if (t) {
        const j = L.run();
        (s || d || (p ? j.some((X, ce) => ut(X, A[ce])) : ut(j, A))) &&
          (g && g(),
          Te(t, l, 3, [j, A === sn ? void 0 : p && A[0] === sn ? [] : A, y]),
          (A = j));
      } else L.run();
  };
  $.allowRecurse = !!t;
  let T;
  r === "sync"
    ? (T = $)
    : r === "post"
    ? (T = () => ge($, l && l.suspense))
    : (($.pre = !0), l && ($.id = l.uid), (T = () => ys($)));
  const L = new as(a, T);
  t
    ? n
      ? $()
      : (A = L.run())
    : r === "post"
    ? ge(L.run.bind(L), l && l.suspense)
    : L.run();
  const U = () => {
    L.stop(), l && l.scope && ls(l.scope.effects, L);
  };
  return O && O.push(U), U;
}
function zi(e, t, n) {
  const s = this.proxy,
    r = oe(e) ? (e.includes(".") ? io(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  k(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = ie;
  Rt(this);
  const c = oo(r, o.bind(s), n);
  return i ? Rt(i) : ct(), c;
}
function io(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function mt(e, t) {
  if (!te(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), se(e))) mt(e.value, t);
  else if (N(e)) for (let n = 0; n < e.length; n++) mt(e[n], t);
  else if (Or(e) || bt(e))
    e.forEach((n) => {
      mt(n, t);
    });
  else if (Fr(e)) for (const n in e) mt(e[n], t);
  return e;
}
function st(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let l = c.dir[s];
    l && (At(), Te(l, n, 8, [e.el, c, e, t]), Ft());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function lo(e, t) {
  return k(e) ? (() => le({ name: e.name }, t, { setup: e }))() : e;
}
const on = (e) => !!e.type.__asyncLoader,
  co = (e) => e.type.__isKeepAlive;
function qi(e, t) {
  uo(e, "a", t);
}
function Vi(e, t) {
  uo(e, "da", t);
}
function uo(e, t, n = ie) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Cn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      co(r.parent.vnode) && Qi(s, t, n, r), (r = r.parent);
  }
}
function Qi(e, t, n, s) {
  const r = Cn(t, e, s, !0);
  fo(() => {
    ls(s[t], r);
  }, n);
}
function Cn(e, t, n = ie, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          At(), Rt(n);
          const c = Te(t, n, e, i);
          return ct(), Ft(), c;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const We =
    (e) =>
    (t, n = ie) =>
      (!Qt || e === "sp") && Cn(e, (...s) => t(...s), n),
  Yi = We("bm"),
  Ji = We("m"),
  Xi = We("bu"),
  Zi = We("u"),
  Gi = We("bum"),
  fo = We("um"),
  el = We("sp"),
  tl = We("rtg"),
  nl = We("rtc");
function sl(e, t = ie) {
  Cn("ec", e, t);
}
const ao = "components";
function qn(e, t) {
  return ol(ao, e, !0, t) || e;
}
const rl = Symbol.for("v-ndc");
function ol(e, t, n = !0, s = !1) {
  const r = Re || ie;
  if (r) {
    const o = r.type;
    if (e === ao) {
      const c = Nl(o, !1);
      if (c && (c === t || c === ke(t) || c === vn(ke(t)))) return o;
    }
    const i = Us(r[e] || o[e], t) || Us(r.appContext[e], t);
    return !i && s ? o : i;
  }
}
function Us(e, t) {
  return e && (e[t] || e[ke(t)] || e[vn(ke(t))]);
}
function Ks(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (N(e) || oe(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (te(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, c) => t(i, c, void 0, o && o[c]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, l = i.length; c < l; c++) {
        const a = i[c];
        r[c] = t(e[a], a, c, o && o[c]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const Vn = (e) => (e ? (Ro(e) ? Rs(e) || e.proxy : Vn(e.parent)) : null),
  $t = le(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vn(e.parent),
    $root: (e) => Vn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => vs(e),
    $forceUpdate: (e) => e.f || (e.f = () => ys(e.update)),
    $nextTick: (e) => e.n || (e.n = bs.bind(e.proxy)),
    $watch: (e) => zi.bind(e),
  }),
  Ln = (e, t) => e !== ee && !e.__isScriptSetup && D(e, t),
  il = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: c,
        appContext: l,
      } = e;
      let a;
      if (t[0] !== "$") {
        const y = i[t];
        if (y !== void 0)
          switch (y) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (Ln(s, t)) return (i[t] = 1), s[t];
          if (r !== ee && D(r, t)) return (i[t] = 2), r[t];
          if ((a = e.propsOptions[0]) && D(a, t)) return (i[t] = 3), o[t];
          if (n !== ee && D(n, t)) return (i[t] = 4), n[t];
          Qn && (i[t] = 0);
        }
      }
      const d = $t[t];
      let p, g;
      if (d) return t === "$attrs" && me(e, "get", t), d(e);
      if ((p = c.__cssModules) && (p = p[t])) return p;
      if (n !== ee && D(n, t)) return (i[t] = 4), n[t];
      if (((g = l.config.globalProperties), D(g, t))) return g[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return Ln(r, t)
        ? ((r[t] = n), !0)
        : s !== ee && D(s, t)
        ? ((s[t] = n), !0)
        : D(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let c;
      return (
        !!n[i] ||
        (e !== ee && D(e, i)) ||
        Ln(t, i) ||
        ((c = o[0]) && D(c, i)) ||
        D(s, i) ||
        D($t, i) ||
        D(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : D(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Ds(e) {
  return N(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Qn = !0;
function ll(e) {
  const t = vs(e),
    n = e.proxy,
    s = e.ctx;
  (Qn = !1), t.beforeCreate && Ws(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: l,
    inject: a,
    created: d,
    beforeMount: p,
    mounted: g,
    beforeUpdate: y,
    updated: O,
    activated: A,
    deactivated: $,
    beforeDestroy: T,
    beforeUnmount: L,
    destroyed: U,
    unmounted: j,
    render: X,
    renderTracked: ce,
    renderTriggered: ue,
    errorCaptured: z,
    serverPrefetch: K,
    expose: ne,
    inheritAttrs: fe,
    components: _e,
    directives: Ee,
    filters: nt,
  } = t;
  if ((a && cl(a, s, null), i))
    for (const Z in i) {
      const V = i[Z];
      k(V) && (s[Z] = V.bind(n));
    }
  if (r) {
    const Z = r.call(n, n);
    te(Z) && (e.data = Jt(Z));
  }
  if (((Qn = !0), o))
    for (const Z in o) {
      const V = o[Z],
        He = k(V) ? V.bind(n, n) : k(V.get) ? V.get.bind(n, n) : Fe,
        ze = !k(V) && k(V.set) ? V.set.bind(n) : Fe,
        Me = we({ get: He, set: ze });
      Object.defineProperty(s, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (pe) => (Me.value = pe),
      });
    }
  if (c) for (const Z in c) ho(c[Z], s, n, Z);
  if (l) {
    const Z = k(l) ? l.call(n) : l;
    Reflect.ownKeys(Z).forEach((V) => {
      ln(V, Z[V]);
    });
  }
  d && Ws(d, e, "c");
  function q(Z, V) {
    N(V) ? V.forEach((He) => Z(He.bind(n))) : V && Z(V.bind(n));
  }
  if (
    (q(Yi, p),
    q(Ji, g),
    q(Xi, y),
    q(Zi, O),
    q(qi, A),
    q(Vi, $),
    q(sl, z),
    q(nl, ce),
    q(tl, ue),
    q(Gi, L),
    q(fo, j),
    q(el, K),
    N(ne))
  )
    if (ne.length) {
      const Z = e.exposed || (e.exposed = {});
      ne.forEach((V) => {
        Object.defineProperty(Z, V, {
          get: () => n[V],
          set: (He) => (n[V] = He),
        });
      });
    } else e.exposed || (e.exposed = {});
  X && e.render === Fe && (e.render = X),
    fe != null && (e.inheritAttrs = fe),
    _e && (e.components = _e),
    Ee && (e.directives = Ee);
}
function cl(e, t, n = Fe) {
  N(e) && (e = Yn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    te(r)
      ? "default" in r
        ? (o = Be(r.from || s, r.default, !0))
        : (o = Be(r.from || s))
      : (o = Be(r)),
      se(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o);
  }
}
function Ws(e, t, n) {
  Te(N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ho(e, t, n, s) {
  const r = s.includes(".") ? io(n, s) : () => n[s];
  if (oe(e)) {
    const o = t[e];
    k(o) && Nt(r, o);
  } else if (k(e)) Nt(r, e.bind(n));
  else if (te(e))
    if (N(e)) e.forEach((o) => ho(o, t, n, s));
    else {
      const o = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(o) && Nt(r, o, e);
    }
}
function vs(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    c = o.get(t);
  let l;
  return (
    c
      ? (l = c)
      : !r.length && !n && !s
      ? (l = t)
      : ((l = {}), r.length && r.forEach((a) => pn(l, a, i, !0)), pn(l, t, i)),
    te(t) && o.set(t, l),
    l
  );
}
function pn(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && pn(e, o, n, !0), r && r.forEach((i) => pn(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = ul[i] || (n && n[i]);
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ul = {
  data: zs,
  props: qs,
  emits: qs,
  methods: jt,
  computed: jt,
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  components: jt,
  directives: jt,
  watch: al,
  provide: zs,
  inject: fl,
};
function zs(e, t) {
  return t
    ? e
      ? function () {
          return le(
            k(e) ? e.call(this, this) : e,
            k(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function fl(e, t) {
  return jt(Yn(e), Yn(t));
}
function Yn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function jt(e, t) {
  return e ? le(Object.create(null), e, t) : t;
}
function qs(e, t) {
  return e
    ? N(e) && N(t)
      ? [...new Set([...e, ...t])]
      : le(Object.create(null), Ds(e), Ds(t ?? {}))
    : t;
}
function al(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(Object.create(null), e);
  for (const s in t) n[s] = he(e[s], t[s]);
  return n;
}
function po() {
  return {
    app: null,
    config: {
      isNativeTag: Ko,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let dl = 0;
function hl(e, t) {
  return function (s, r = null) {
    k(s) || (s = le({}, s)), r != null && !te(r) && (r = null);
    const o = po(),
      i = new WeakSet();
    let c = !1;
    const l = (o.app = {
      _uid: dl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Hl,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...d) {
        return (
          i.has(a) ||
            (a && k(a.install)
              ? (i.add(a), a.install(l, ...d))
              : k(a) && (i.add(a), a(l, ...d))),
          l
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), l;
      },
      component(a, d) {
        return d ? ((o.components[a] = d), l) : o.components[a];
      },
      directive(a, d) {
        return d ? ((o.directives[a] = d), l) : o.directives[a];
      },
      mount(a, d, p) {
        if (!c) {
          const g = ve(s, r);
          return (
            (g.appContext = o),
            d && t ? t(g, a) : e(g, a, p),
            (c = !0),
            (l._container = a),
            (a.__vue_app__ = l),
            Rs(g.component) || g.component.proxy
          );
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(a, d) {
        return (o.provides[a] = d), l;
      },
      runWithContext(a) {
        zt = l;
        try {
          return a();
        } finally {
          zt = null;
        }
      },
    });
    return l;
  };
}
let zt = null;
function ln(e, t) {
  if (ie) {
    let n = ie.provides;
    const s = ie.parent && ie.parent.provides;
    s === n && (n = ie.provides = Object.create(s)), (n[e] = t);
  }
}
function Be(e, t, n = !1) {
  const s = ie || Re;
  if (s || zt) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : zt._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && k(t) ? t.call(s && s.proxy) : t;
  }
}
function pl() {
  return !!(ie || Re || zt);
}
function gl(e, t, n, s = !1) {
  const r = {},
    o = {};
  un(o, On, 1), (e.propsDefaults = Object.create(null)), go(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : qr(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function ml(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    c = W(r),
    [l] = e.propsOptions;
  let a = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let g = d[p];
        if (Rn(e.emitsOptions, g)) continue;
        const y = t[g];
        if (l)
          if (D(o, g)) y !== o[g] && ((o[g] = y), (a = !0));
          else {
            const O = ke(g);
            r[O] = Jn(l, c, O, y, e, !1);
          }
        else y !== o[g] && ((o[g] = y), (a = !0));
      }
    }
  } else {
    go(e, t, r, o) && (a = !0);
    let d;
    for (const p in c)
      (!t || (!D(t, p) && ((d = Ot(p)) === p || !D(t, d)))) &&
        (l
          ? n &&
            (n[p] !== void 0 || n[d] !== void 0) &&
            (r[p] = Jn(l, c, p, void 0, e, !0))
          : delete r[p]);
    if (o !== c) for (const p in o) (!t || !D(t, p)) && (delete o[p], (a = !0));
  }
  a && De(e, "set", "$attrs");
}
function go(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    c;
  if (t)
    for (let l in t) {
      if (rn(l)) continue;
      const a = t[l];
      let d;
      r && D(r, (d = ke(l)))
        ? !o || !o.includes(d)
          ? (n[d] = a)
          : ((c || (c = {}))[d] = a)
        : Rn(e.emitsOptions, l) ||
          ((!(l in s) || a !== s[l]) && ((s[l] = a), (i = !0)));
    }
  if (o) {
    const l = W(n),
      a = c || ee;
    for (let d = 0; d < o.length; d++) {
      const p = o[d];
      n[p] = Jn(r, l, p, a[p], e, !D(a, p));
    }
  }
  return i;
}
function Jn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = D(i, "default");
    if (c && s === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && k(l)) {
        const { propsDefaults: a } = r;
        n in a ? (s = a[n]) : (Rt(r), (s = a[n] = l.call(null, t)), ct());
      } else s = l;
    }
    i[0] &&
      (o && !c ? (s = !1) : i[1] && (s === "" || s === Ot(n)) && (s = !0));
  }
  return s;
}
function mo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    c = [];
  let l = !1;
  if (!k(e)) {
    const d = (p) => {
      l = !0;
      const [g, y] = mo(p, t, !0);
      le(i, g), y && c.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l) return te(e) && s.set(e, _t), _t;
  if (N(o))
    for (let d = 0; d < o.length; d++) {
      const p = ke(o[d]);
      Vs(p) && (i[p] = ee);
    }
  else if (o)
    for (const d in o) {
      const p = ke(d);
      if (Vs(p)) {
        const g = o[d],
          y = (i[p] = N(g) || k(g) ? { type: g } : le({}, g));
        if (y) {
          const O = Js(Boolean, y.type),
            A = Js(String, y.type);
          (y[0] = O > -1),
            (y[1] = A < 0 || O < A),
            (O > -1 || D(y, "default")) && c.push(p);
        }
      }
    }
  const a = [i, c];
  return te(e) && s.set(e, a), a;
}
function Vs(e) {
  return e[0] !== "$";
}
function Qs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Ys(e, t) {
  return Qs(e) === Qs(t);
}
function Js(e, t) {
  return N(t) ? t.findIndex((n) => Ys(n, e)) : k(t) && Ys(t, e) ? 0 : -1;
}
const _o = (e) => e[0] === "_" || e === "$stable",
  Es = (e) => (N(e) ? e.map(Ne) : [Ne(e)]),
  _l = (e, t, n) => {
    if (t._n) return t;
    const s = Bi((...r) => Es(t(...r)), n);
    return (s._c = !1), s;
  },
  bo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (_o(r)) continue;
      const o = e[r];
      if (k(o)) t[r] = _l(r, o, s);
      else if (o != null) {
        const i = Es(o);
        t[r] = () => i;
      }
    }
  },
  yo = (e, t) => {
    const n = Es(t);
    e.slots.default = () => n;
  },
  bl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = W(t)), un(t, "_", n)) : bo(t, (e.slots = {}));
    } else (e.slots = {}), t && yo(e, t);
    un(e.slots, On, 1);
  },
  yl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = ee;
    if (s.shapeFlag & 32) {
      const c = t._;
      c
        ? n && c === 1
          ? (o = !1)
          : (le(r, t), !n && c === 1 && delete r._)
        : ((o = !t.$stable), bo(t, r)),
        (i = t);
    } else t && (yo(e, t), (i = { default: 1 }));
    if (o) for (const c in r) !_o(c) && i[c] == null && delete r[c];
  };
function Xn(e, t, n, s, r = !1) {
  if (N(e)) {
    e.forEach((g, y) => Xn(g, t && (N(t) ? t[y] : t), n, s, r));
    return;
  }
  if (on(s) && !r) return;
  const o = s.shapeFlag & 4 ? Rs(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: c, r: l } = e,
    a = t && t.r,
    d = c.refs === ee ? (c.refs = {}) : c.refs,
    p = c.setupState;
  if (
    (a != null &&
      a !== l &&
      (oe(a)
        ? ((d[a] = null), D(p, a) && (p[a] = null))
        : se(a) && (a.value = null)),
    k(l))
  )
    et(l, c, 12, [i, d]);
  else {
    const g = oe(l),
      y = se(l);
    if (g || y) {
      const O = () => {
        if (e.f) {
          const A = g ? (D(p, l) ? p[l] : d[l]) : l.value;
          r
            ? N(A) && ls(A, o)
            : N(A)
            ? A.includes(o) || A.push(o)
            : g
            ? ((d[l] = [o]), D(p, l) && (p[l] = d[l]))
            : ((l.value = [o]), e.k && (d[e.k] = l.value));
        } else
          g
            ? ((d[l] = i), D(p, l) && (p[l] = i))
            : y && ((l.value = i), e.k && (d[e.k] = i));
      };
      i ? ((O.id = -1), ge(O, n)) : O();
    }
  }
}
const ge = Wi;
function vl(e) {
  return El(e);
}
function El(e, t) {
  const n = Un();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: c,
      createComment: l,
      setText: a,
      setElementText: d,
      parentNode: p,
      nextSibling: g,
      setScopeId: y = Fe,
      insertStaticContent: O,
    } = e,
    A = (
      u,
      f,
      h,
      m = null,
      b = null,
      v = null,
      C = !1,
      x = null,
      w = !!f.dynamicChildren
    ) => {
      if (u === f) return;
      u && !It(u, f) && ((m = _(u)), pe(u, b, v, !0), (u = null)),
        f.patchFlag === -2 && ((w = !1), (f.dynamicChildren = null));
      const { type: E, ref: I, shapeFlag: S } = f;
      switch (E) {
        case Pn:
          $(u, f, h, m);
          break;
        case qt:
          T(u, f, h, m);
          break;
        case jn:
          u == null && L(f, h, m, C);
          break;
        case Oe:
          _e(u, f, h, m, b, v, C, x, w);
          break;
        default:
          S & 1
            ? X(u, f, h, m, b, v, C, x, w)
            : S & 6
            ? Ee(u, f, h, m, b, v, C, x, w)
            : (S & 64 || S & 128) && E.process(u, f, h, m, b, v, C, x, w, R);
      }
      I != null && b && Xn(I, u && u.ref, v, f || u, !f);
    },
    $ = (u, f, h, m) => {
      if (u == null) s((f.el = c(f.children)), h, m);
      else {
        const b = (f.el = u.el);
        f.children !== u.children && a(b, f.children);
      }
    },
    T = (u, f, h, m) => {
      u == null ? s((f.el = l(f.children || "")), h, m) : (f.el = u.el);
    },
    L = (u, f, h, m) => {
      [u.el, u.anchor] = O(u.children, f, h, m, u.el, u.anchor);
    },
    U = ({ el: u, anchor: f }, h, m) => {
      let b;
      for (; u && u !== f; ) (b = g(u)), s(u, h, m), (u = b);
      s(f, h, m);
    },
    j = ({ el: u, anchor: f }) => {
      let h;
      for (; u && u !== f; ) (h = g(u)), r(u), (u = h);
      r(f);
    },
    X = (u, f, h, m, b, v, C, x, w) => {
      (C = C || f.type === "svg"),
        u == null ? ce(f, h, m, b, v, C, x, w) : K(u, f, b, v, C, x, w);
    },
    ce = (u, f, h, m, b, v, C, x) => {
      let w, E;
      const { type: I, props: S, shapeFlag: M, transition: B, dirs: H } = u;
      if (
        ((w = u.el = i(u.type, v, S && S.is, S)),
        M & 8
          ? d(w, u.children)
          : M & 16 &&
            z(u.children, w, null, m, b, v && I !== "foreignObject", C, x),
        H && st(u, null, m, "created"),
        ue(w, u, u.scopeId, C, m),
        S)
      ) {
        for (const J in S)
          J !== "value" &&
            !rn(J) &&
            o(w, J, null, S[J], v, u.children, m, b, ae);
        "value" in S && o(w, "value", null, S.value),
          (E = S.onVnodeBeforeMount) && je(E, m, u);
      }
      H && st(u, null, m, "beforeMount");
      const G = xl(b, B);
      G && B.beforeEnter(w),
        s(w, f, h),
        ((E = S && S.onVnodeMounted) || G || H) &&
          ge(() => {
            E && je(E, m, u), G && B.enter(w), H && st(u, null, m, "mounted");
          }, b);
    },
    ue = (u, f, h, m, b) => {
      if ((h && y(u, h), m)) for (let v = 0; v < m.length; v++) y(u, m[v]);
      if (b) {
        let v = b.subTree;
        if (f === v) {
          const C = b.vnode;
          ue(u, C, C.scopeId, C.slotScopeIds, b.parent);
        }
      }
    },
    z = (u, f, h, m, b, v, C, x, w = 0) => {
      for (let E = w; E < u.length; E++) {
        const I = (u[E] = x ? Ye(u[E]) : Ne(u[E]));
        A(null, I, f, h, m, b, v, C, x);
      }
    },
    K = (u, f, h, m, b, v, C) => {
      const x = (f.el = u.el);
      let { patchFlag: w, dynamicChildren: E, dirs: I } = f;
      w |= u.patchFlag & 16;
      const S = u.props || ee,
        M = f.props || ee;
      let B;
      h && rt(h, !1),
        (B = M.onVnodeBeforeUpdate) && je(B, h, f, u),
        I && st(f, u, h, "beforeUpdate"),
        h && rt(h, !0);
      const H = b && f.type !== "foreignObject";
      if (
        (E
          ? ne(u.dynamicChildren, E, x, h, m, H, v)
          : C || V(u, f, x, null, h, m, H, v, !1),
        w > 0)
      ) {
        if (w & 16) fe(x, f, S, M, h, m, b);
        else if (
          (w & 2 && S.class !== M.class && o(x, "class", null, M.class, b),
          w & 4 && o(x, "style", S.style, M.style, b),
          w & 8)
        ) {
          const G = f.dynamicProps;
          for (let J = 0; J < G.length; J++) {
            const re = G[J],
              Pe = S[re],
              dt = M[re];
            (dt !== Pe || re === "value") &&
              o(x, re, Pe, dt, b, u.children, h, m, ae);
          }
        }
        w & 1 && u.children !== f.children && d(x, f.children);
      } else !C && E == null && fe(x, f, S, M, h, m, b);
      ((B = M.onVnodeUpdated) || I) &&
        ge(() => {
          B && je(B, h, f, u), I && st(f, u, h, "updated");
        }, m);
    },
    ne = (u, f, h, m, b, v, C) => {
      for (let x = 0; x < f.length; x++) {
        const w = u[x],
          E = f[x],
          I =
            w.el && (w.type === Oe || !It(w, E) || w.shapeFlag & 70)
              ? p(w.el)
              : h;
        A(w, E, I, null, m, b, v, C, !0);
      }
    },
    fe = (u, f, h, m, b, v, C) => {
      if (h !== m) {
        if (h !== ee)
          for (const x in h)
            !rn(x) && !(x in m) && o(u, x, h[x], null, C, f.children, b, v, ae);
        for (const x in m) {
          if (rn(x)) continue;
          const w = m[x],
            E = h[x];
          w !== E && x !== "value" && o(u, x, E, w, C, f.children, b, v, ae);
        }
        "value" in m && o(u, "value", h.value, m.value);
      }
    },
    _e = (u, f, h, m, b, v, C, x, w) => {
      const E = (f.el = u ? u.el : c("")),
        I = (f.anchor = u ? u.anchor : c(""));
      let { patchFlag: S, dynamicChildren: M, slotScopeIds: B } = f;
      B && (x = x ? x.concat(B) : B),
        u == null
          ? (s(E, h, m), s(I, h, m), z(f.children, h, I, b, v, C, x, w))
          : S > 0 && S & 64 && M && u.dynamicChildren
          ? (ne(u.dynamicChildren, M, h, b, v, C, x),
            (f.key != null || (b && f === b.subTree)) && vo(u, f, !0))
          : V(u, f, h, I, b, v, C, x, w);
    },
    Ee = (u, f, h, m, b, v, C, x, w) => {
      (f.slotScopeIds = x),
        u == null
          ? f.shapeFlag & 512
            ? b.ctx.activate(f, h, m, C, w)
            : nt(f, h, m, b, v, C, w)
          : xe(u, f, w);
    },
    nt = (u, f, h, m, b, v, C) => {
      const x = (u.component = Tl(u, m, b));
      if ((co(u) && (x.ctx.renderer = R), Il(x), x.asyncDep)) {
        if ((b && b.registerDep(x, q), !u.el)) {
          const w = (x.subTree = ve(qt));
          T(null, w, f, h);
        }
        return;
      }
      q(x, u, f, h, b, v, C);
    },
    xe = (u, f, h) => {
      const m = (f.component = u.component);
      if (Ui(u, f, h))
        if (m.asyncDep && !m.asyncResolved) {
          Z(m, f, h);
          return;
        } else (m.next = f), Li(m.update), m.update();
      else (f.el = u.el), (m.vnode = f);
    },
    q = (u, f, h, m, b, v, C) => {
      const x = () => {
          if (u.isMounted) {
            let { next: I, bu: S, u: M, parent: B, vnode: H } = u,
              G = I,
              J;
            rt(u, !1),
              I ? ((I.el = H.el), Z(u, I, C)) : (I = H),
              S && In(S),
              (J = I.props && I.props.onVnodeBeforeUpdate) && je(J, B, I, H),
              rt(u, !0);
            const re = Mn(u),
              Pe = u.subTree;
            (u.subTree = re),
              A(Pe, re, p(Pe.el), _(Pe), u, b, v),
              (I.el = re.el),
              G === null && Ki(u, re.el),
              M && ge(M, b),
              (J = I.props && I.props.onVnodeUpdated) &&
                ge(() => je(J, B, I, H), b);
          } else {
            let I;
            const { el: S, props: M } = f,
              { bm: B, m: H, parent: G } = u,
              J = on(f);
            if (
              (rt(u, !1),
              B && In(B),
              !J && (I = M && M.onVnodeBeforeMount) && je(I, G, f),
              rt(u, !0),
              S && Q)
            ) {
              const re = () => {
                (u.subTree = Mn(u)), Q(S, u.subTree, u, b, null);
              };
              J
                ? f.type.__asyncLoader().then(() => !u.isUnmounted && re())
                : re();
            } else {
              const re = (u.subTree = Mn(u));
              A(null, re, h, m, u, b, v), (f.el = re.el);
            }
            if ((H && ge(H, b), !J && (I = M && M.onVnodeMounted))) {
              const re = f;
              ge(() => je(I, G, re), b);
            }
            (f.shapeFlag & 256 ||
              (G && on(G.vnode) && G.vnode.shapeFlag & 256)) &&
              u.a &&
              ge(u.a, b),
              (u.isMounted = !0),
              (f = h = m = null);
          }
        },
        w = (u.effect = new as(x, () => ys(E), u.scope)),
        E = (u.update = () => w.run());
      (E.id = u.uid), rt(u, !0), E();
    },
    Z = (u, f, h) => {
      f.component = u;
      const m = u.vnode.props;
      (u.vnode = f),
        (u.next = null),
        ml(u, f.props, m, h),
        yl(u, f.children, h),
        At(),
        ks(),
        Ft();
    },
    V = (u, f, h, m, b, v, C, x, w = !1) => {
      const E = u && u.children,
        I = u ? u.shapeFlag : 0,
        S = f.children,
        { patchFlag: M, shapeFlag: B } = f;
      if (M > 0) {
        if (M & 128) {
          ze(E, S, h, m, b, v, C, x, w);
          return;
        } else if (M & 256) {
          He(E, S, h, m, b, v, C, x, w);
          return;
        }
      }
      B & 8
        ? (I & 16 && ae(E, b, v), S !== E && d(h, S))
        : I & 16
        ? B & 16
          ? ze(E, S, h, m, b, v, C, x, w)
          : ae(E, b, v, !0)
        : (I & 8 && d(h, ""), B & 16 && z(S, h, m, b, v, C, x, w));
    },
    He = (u, f, h, m, b, v, C, x, w) => {
      (u = u || _t), (f = f || _t);
      const E = u.length,
        I = f.length,
        S = Math.min(E, I);
      let M;
      for (M = 0; M < S; M++) {
        const B = (f[M] = w ? Ye(f[M]) : Ne(f[M]));
        A(u[M], B, h, null, b, v, C, x, w);
      }
      E > I ? ae(u, b, v, !0, !1, S) : z(f, h, m, b, v, C, x, w, S);
    },
    ze = (u, f, h, m, b, v, C, x, w) => {
      let E = 0;
      const I = f.length;
      let S = u.length - 1,
        M = I - 1;
      for (; E <= S && E <= M; ) {
        const B = u[E],
          H = (f[E] = w ? Ye(f[E]) : Ne(f[E]));
        if (It(B, H)) A(B, H, h, null, b, v, C, x, w);
        else break;
        E++;
      }
      for (; E <= S && E <= M; ) {
        const B = u[S],
          H = (f[M] = w ? Ye(f[M]) : Ne(f[M]));
        if (It(B, H)) A(B, H, h, null, b, v, C, x, w);
        else break;
        S--, M--;
      }
      if (E > S) {
        if (E <= M) {
          const B = M + 1,
            H = B < I ? f[B].el : m;
          for (; E <= M; )
            A(null, (f[E] = w ? Ye(f[E]) : Ne(f[E])), h, H, b, v, C, x, w), E++;
        }
      } else if (E > M) for (; E <= S; ) pe(u[E], b, v, !0), E++;
      else {
        const B = E,
          H = E,
          G = new Map();
        for (E = H; E <= M; E++) {
          const be = (f[E] = w ? Ye(f[E]) : Ne(f[E]));
          be.key != null && G.set(be.key, E);
        }
        let J,
          re = 0;
        const Pe = M - H + 1;
        let dt = !1,
          Ss = 0;
        const Tt = new Array(Pe);
        for (E = 0; E < Pe; E++) Tt[E] = 0;
        for (E = B; E <= S; E++) {
          const be = u[E];
          if (re >= Pe) {
            pe(be, b, v, !0);
            continue;
          }
          let Le;
          if (be.key != null) Le = G.get(be.key);
          else
            for (J = H; J <= M; J++)
              if (Tt[J - H] === 0 && It(be, f[J])) {
                Le = J;
                break;
              }
          Le === void 0
            ? pe(be, b, v, !0)
            : ((Tt[Le - H] = E + 1),
              Le >= Ss ? (Ss = Le) : (dt = !0),
              A(be, f[Le], h, null, b, v, C, x, w),
              re++);
        }
        const As = dt ? wl(Tt) : _t;
        for (J = As.length - 1, E = Pe - 1; E >= 0; E--) {
          const be = H + E,
            Le = f[be],
            Fs = be + 1 < I ? f[be + 1].el : m;
          Tt[E] === 0
            ? A(null, Le, h, Fs, b, v, C, x, w)
            : dt && (J < 0 || E !== As[J] ? Me(Le, h, Fs, 2) : J--);
        }
      }
    },
    Me = (u, f, h, m, b = null) => {
      const { el: v, type: C, transition: x, children: w, shapeFlag: E } = u;
      if (E & 6) {
        Me(u.component.subTree, f, h, m);
        return;
      }
      if (E & 128) {
        u.suspense.move(f, h, m);
        return;
      }
      if (E & 64) {
        C.move(u, f, h, R);
        return;
      }
      if (C === Oe) {
        s(v, f, h);
        for (let S = 0; S < w.length; S++) Me(w[S], f, h, m);
        s(u.anchor, f, h);
        return;
      }
      if (C === jn) {
        U(u, f, h);
        return;
      }
      if (m !== 2 && E & 1 && x)
        if (m === 0) x.beforeEnter(v), s(v, f, h), ge(() => x.enter(v), b);
        else {
          const { leave: S, delayLeave: M, afterLeave: B } = x,
            H = () => s(v, f, h),
            G = () => {
              S(v, () => {
                H(), B && B();
              });
            };
          M ? M(v, H, G) : G();
        }
      else s(v, f, h);
    },
    pe = (u, f, h, m = !1, b = !1) => {
      const {
        type: v,
        props: C,
        ref: x,
        children: w,
        dynamicChildren: E,
        shapeFlag: I,
        patchFlag: S,
        dirs: M,
      } = u;
      if ((x != null && Xn(x, null, h, u, !0), I & 256)) {
        f.ctx.deactivate(u);
        return;
      }
      const B = I & 1 && M,
        H = !on(u);
      let G;
      if ((H && (G = C && C.onVnodeBeforeUnmount) && je(G, f, u), I & 6))
        Xt(u.component, h, m);
      else {
        if (I & 128) {
          u.suspense.unmount(h, m);
          return;
        }
        B && st(u, null, f, "beforeUnmount"),
          I & 64
            ? u.type.remove(u, f, h, b, R, m)
            : E && (v !== Oe || (S > 0 && S & 64))
            ? ae(E, f, h, !1, !0)
            : ((v === Oe && S & 384) || (!b && I & 16)) && ae(w, f, h),
          m && ft(u);
      }
      ((H && (G = C && C.onVnodeUnmounted)) || B) &&
        ge(() => {
          G && je(G, f, u), B && st(u, null, f, "unmounted");
        }, h);
    },
    ft = (u) => {
      const { type: f, el: h, anchor: m, transition: b } = u;
      if (f === Oe) {
        at(h, m);
        return;
      }
      if (f === jn) {
        j(u);
        return;
      }
      const v = () => {
        r(h), b && !b.persisted && b.afterLeave && b.afterLeave();
      };
      if (u.shapeFlag & 1 && b && !b.persisted) {
        const { leave: C, delayLeave: x } = b,
          w = () => C(h, v);
        x ? x(u.el, v, w) : w();
      } else v();
    },
    at = (u, f) => {
      let h;
      for (; u !== f; ) (h = g(u)), r(u), (u = h);
      r(f);
    },
    Xt = (u, f, h) => {
      const { bum: m, scope: b, update: v, subTree: C, um: x } = u;
      m && In(m),
        b.stop(),
        v && ((v.active = !1), pe(C, u, f, h)),
        x && ge(x, f),
        ge(() => {
          u.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          u.asyncDep &&
          !u.asyncResolved &&
          u.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    ae = (u, f, h, m = !1, b = !1, v = 0) => {
      for (let C = v; C < u.length; C++) pe(u[C], f, h, m, b);
    },
    _ = (u) =>
      u.shapeFlag & 6
        ? _(u.component.subTree)
        : u.shapeFlag & 128
        ? u.suspense.next()
        : g(u.anchor || u.el),
    P = (u, f, h) => {
      u == null
        ? f._vnode && pe(f._vnode, null, null, !0)
        : A(f._vnode || null, u, f, null, null, null, h),
        ks(),
        to(),
        (f._vnode = u);
    },
    R = {
      p: A,
      um: pe,
      m: Me,
      r: ft,
      mt: nt,
      mc: z,
      pc: V,
      pbc: ne,
      n: _,
      o: e,
    };
  let F, Q;
  return t && ([F, Q] = t(R)), { render: P, hydrate: F, createApp: hl(P, F) };
}
function rt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function xl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function vo(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (N(s) && N(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) &&
          ((c = r[o] = Ye(r[o])), (c.el = i.el)),
        n || vo(i, c)),
        c.type === Pn && (c.el = i.el);
    }
}
function wl(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, c;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const a = e[s];
    if (a !== 0) {
      if (((r = n[n.length - 1]), e[r] < a)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (c = (o + i) >> 1), e[n[c]] < a ? (o = c + 1) : (i = c);
      a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
const Rl = (e) => e.__isTeleport,
  Oe = Symbol.for("v-fgt"),
  Pn = Symbol.for("v-txt"),
  qt = Symbol.for("v-cmt"),
  jn = Symbol.for("v-stc"),
  Bt = [];
let Ae = null;
function Xe(e = !1) {
  Bt.push((Ae = e ? null : []));
}
function Cl() {
  Bt.pop(), (Ae = Bt[Bt.length - 1] || null);
}
let Vt = 1;
function Xs(e) {
  Vt += e;
}
function Eo(e) {
  return (
    (e.dynamicChildren = Vt > 0 ? Ae || _t : null),
    Cl(),
    Vt > 0 && Ae && Ae.push(e),
    e
  );
}
function Et(e, t, n, s, r, o) {
  return Eo(Ce(e, t, n, s, r, o, !0));
}
function Zs(e, t, n, s, r) {
  return Eo(ve(e, t, n, s, r, !0));
}
function Zn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function It(e, t) {
  return e.type === t.type && e.key === t.key;
}
const On = "__vInternal",
  xo = ({ key: e }) => e ?? null,
  cn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? oe(e) || se(e) || k(e)
        ? { i: Re, r: e, k: t, f: !!n }
        : e
      : null
  );
function Ce(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === Oe ? 0 : 1,
  i = !1,
  c = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xo(t),
    ref: t && cn(t),
    scopeId: ro,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Re,
  };
  return (
    c
      ? (xs(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= oe(n) ? 8 : 16),
    Vt > 0 &&
      !i &&
      Ae &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      Ae.push(l),
    l
  );
}
const ve = Pl;
function Pl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === rl) && (e = qt), Zn(e))) {
    const c = wt(e, t, !0);
    return (
      n && xs(c, n),
      Vt > 0 &&
        !o &&
        Ae &&
        (c.shapeFlag & 6 ? (Ae[Ae.indexOf(e)] = c) : Ae.push(c)),
      (c.patchFlag |= -2),
      c
    );
  }
  if (($l(e) && (e = e.__vccOpts), t)) {
    t = Ol(t);
    let { class: c, style: l } = t;
    c && !oe(c) && (t.class = us(c)),
      te(l) && (Qr(l) && !N(l) && (l = le({}, l)), (t.style = St(l)));
  }
  const i = oe(e) ? 1 : Di(e) ? 128 : Rl(e) ? 64 : te(e) ? 4 : k(e) ? 2 : 0;
  return Ce(e, t, n, s, r, i, o, !0);
}
function Ol(e) {
  return e ? (Qr(e) || On in e ? le({}, e) : e) : null;
}
function wt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    c = t ? Sl(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && xo(c),
    ref:
      t && t.ref ? (n && r ? (N(r) ? r.concat(cn(t)) : [r, cn(t)]) : cn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Oe ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function wo(e = " ", t = 0) {
  return ve(Pn, null, e, t);
}
function Ne(e) {
  return e == null || typeof e == "boolean"
    ? ve(qt)
    : N(e)
    ? ve(Oe, null, e.slice())
    : typeof e == "object"
    ? Ye(e)
    : ve(Pn, null, String(e));
}
function Ye(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : wt(e);
}
function xs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (N(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), xs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(On in t)
        ? (t._ctx = Re)
        : r === 3 &&
          Re &&
          (Re.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    k(t)
      ? ((t = { default: t, _ctx: Re }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [wo(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Sl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = us([t.class, s.class]));
      else if (r === "style") t.style = St([t.style, s.style]);
      else if (mn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(N(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Te(e, t, 7, [n, s]);
}
const Al = po();
let Fl = 0;
function Tl(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || Al,
    o = {
      uid: Fl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Mr(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: mo(s, r),
      emitsOptions: so(s, r),
      emit: null,
      emitted: null,
      propsDefaults: ee,
      inheritAttrs: s.inheritAttrs,
      ctx: ee,
      data: ee,
      props: ee,
      attrs: ee,
      slots: ee,
      refs: ee,
      setupState: ee,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = $i.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ie = null,
  ws,
  ht,
  Gs = "__VUE_INSTANCE_SETTERS__";
(ht = Un()[Gs]) || (ht = Un()[Gs] = []),
  ht.push((e) => (ie = e)),
  (ws = (e) => {
    ht.length > 1 ? ht.forEach((t) => t(e)) : ht[0](e);
  });
const Rt = (e) => {
    ws(e), e.scope.on();
  },
  ct = () => {
    ie && ie.scope.off(), ws(null);
  };
function Ro(e) {
  return e.vnode.shapeFlag & 4;
}
let Qt = !1;
function Il(e, t = !1) {
  Qt = t;
  const { props: n, children: s } = e.vnode,
    r = Ro(e);
  gl(e, n, r, t), bl(e, s);
  const o = r ? Ml(e, t) : void 0;
  return (Qt = !1), o;
}
function Ml(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = xn(new Proxy(e.ctx, il)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? jl(e) : null);
    Rt(e), At();
    const o = et(s, e, 0, [e.props, r]);
    if ((Ft(), ct(), Sr(o))) {
      if ((o.then(ct, ct), t))
        return o
          .then((i) => {
            er(e, i, t);
          })
          .catch((i) => {
            wn(i, e, 0);
          });
      e.asyncDep = o;
    } else er(e, o, t);
  } else Co(e, t);
}
function er(e, t, n) {
  k(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : te(t) && (e.setupState = Zr(t)),
    Co(e, n);
}
let tr;
function Co(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && tr && !s.render) {
      const r = s.template || vs(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = s,
          a = le(le({ isCustomElement: o, delimiters: c }, i), l);
        s.render = tr(r, a);
      }
    }
    e.render = s.render || Fe;
  }
  {
    Rt(e), At();
    try {
      ll(e);
    } finally {
      Ft(), ct();
    }
  }
}
function Ll(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return me(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function jl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return Ll(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Rs(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Zr(xn(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in $t) return $t[n](e);
        },
        has(t, n) {
          return n in t || n in $t;
        },
      }))
    );
}
function Nl(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function $l(e) {
  return k(e) && "__vccOpts" in e;
}
const we = (e, t) => Ti(e, t, Qt);
function Po(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? te(t) && !N(t)
      ? Zn(t)
        ? ve(e, null, [t])
        : ve(e, t)
      : ve(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Zn(n) && (n = [n]),
      ve(e, t, n));
}
const Bl = Symbol.for("v-scx"),
  kl = () => Be(Bl),
  Hl = "3.3.7",
  Ul = "http://www.w3.org/2000/svg",
  it = typeof document < "u" ? document : null,
  nr = it && it.createElement("template"),
  Kl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t
        ? it.createElementNS(Ul, e)
        : it.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => it.createTextNode(e),
    createComment: (e) => it.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => it.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        nr.innerHTML = s ? `<svg>${e}</svg>` : e;
        const c = nr.content;
        if (s) {
          const l = c.firstChild;
          for (; l.firstChild; ) c.appendChild(l.firstChild);
          c.removeChild(l);
        }
        t.insertBefore(c, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Dl = Symbol("_vtc");
function Wl(e, t, n) {
  const s = e[Dl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const zl = Symbol("_vod");
function ql(e, t, n) {
  const s = e.style,
    r = oe(n);
  if (n && !r) {
    if (t && !oe(t)) for (const o in t) n[o] == null && Gn(s, o, "");
    for (const o in n) Gn(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      zl in e && (s.display = o);
  }
}
const sr = /\s*!important$/;
function Gn(e, t, n) {
  if (N(n)) n.forEach((s) => Gn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Vl(e, t);
    sr.test(n)
      ? e.setProperty(Ot(s), n.replace(sr, ""), "important")
      : (e[s] = n);
  }
}
const rr = ["Webkit", "Moz", "ms"],
  Nn = {};
function Vl(e, t) {
  const n = Nn[t];
  if (n) return n;
  let s = ke(t);
  if (s !== "filter" && s in e) return (Nn[t] = s);
  s = vn(s);
  for (let r = 0; r < rr.length; r++) {
    const o = rr[r] + s;
    if (o in e) return (Nn[t] = o);
  }
  return t;
}
const or = "http://www.w3.org/1999/xlink";
function Ql(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(or, t.slice(6, t.length))
      : e.setAttributeNS(or, t, n);
  else {
    const o = ei(t);
    n == null || (o && !Tr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Yl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
    e._value = n;
    const a = c === "OPTION" ? e.getAttribute("value") : e.value,
      d = n ?? "";
    a !== d && (e.value = d), n == null && e.removeAttribute(t);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean"
      ? (n = Tr(n))
      : n == null && a === "string"
      ? ((n = ""), (l = !0))
      : a === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function Jl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Xl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ir = Symbol("_vei");
function Zl(e, t, n, s, r = null) {
  const o = e[ir] || (e[ir] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [c, l] = Gl(t);
    if (s) {
      const a = (o[t] = nc(s, r));
      Jl(e, c, a, l);
    } else i && (Xl(e, c, i, l), (o[t] = void 0));
  }
}
const lr = /(?:Once|Passive|Capture)$/;
function Gl(e) {
  let t;
  if (lr.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(lr)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t];
}
let $n = 0;
const ec = Promise.resolve(),
  tc = () => $n || (ec.then(() => ($n = 0)), ($n = Date.now()));
function nc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Te(sc(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = tc()), n;
}
function sc(e, t) {
  if (N(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const cr = /^on[a-z]/,
  rc = (e, t, n, s, r = !1, o, i, c, l) => {
    t === "class"
      ? Wl(e, s, r)
      : t === "style"
      ? ql(e, n, s)
      : mn(t)
      ? is(t) || Zl(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : oc(e, t, s, r)
        )
      ? Yl(e, t, s, o, i, c, l)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Ql(e, t, s, r));
  };
function oc(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && cr.test(t) && k(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (cr.test(t) && oe(n))
    ? !1
    : t in e;
}
const ic = le({ patchProp: rc }, Kl);
let ur;
function lc() {
  return ur || (ur = vl(ic));
}
const cc = (...e) => {
  const t = lc().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = uc(s);
      if (!r) return;
      const o = t._component;
      !k(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function uc(e) {
  return oe(e) ? document.querySelector(e) : e;
}
var fc = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Oo;
const Sn = (e) => (Oo = e),
  So = Symbol();
function es(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var kt;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(kt || (kt = {}));
function ac() {
  const e = Lr(!0),
    t = e.run(() => ms({}));
  let n = [],
    s = [];
  const r = xn({
    install(o) {
      Sn(r),
        (r._a = o),
        o.provide(So, r),
        (o.config.globalProperties.$pinia = r),
        s.forEach((i) => n.push(i)),
        (s = []);
    },
    use(o) {
      return !this._a && !fc ? s.push(o) : n.push(o), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const Ao = () => {};
function fr(e, t, n, s = Ao) {
  e.push(t);
  const r = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), s());
  };
  return !n && jr() && ni(r), r;
}
function pt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const dc = (e) => e();
function ts(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n],
      r = e[n];
    es(r) && es(s) && e.hasOwnProperty(n) && !se(s) && !Ge(s)
      ? (e[n] = ts(r, s))
      : (e[n] = s);
  }
  return e;
}
const hc = Symbol();
function pc(e) {
  return !es(e) || !e.hasOwnProperty(hc);
}
const { assign: Qe } = Object;
function gc(e) {
  return !!(se(e) && e.effect);
}
function mc(e, t, n, s) {
  const { state: r, actions: o, getters: i } = t,
    c = n.state.value[e];
  let l;
  function a() {
    c || (n.state.value[e] = r ? r() : {});
    const d = Oi(n.state.value[e]);
    return Qe(
      d,
      o,
      Object.keys(i || {}).reduce(
        (p, g) => (
          (p[g] = xn(
            we(() => {
              Sn(n);
              const y = n._s.get(e);
              return i[g].call(y, y);
            })
          )),
          p
        ),
        {}
      )
    );
  }
  return (l = Fo(e, a, t, n, s, !0)), l;
}
function Fo(e, t, n = {}, s, r, o) {
  let i;
  const c = Qe({ actions: {} }, n),
    l = { deep: !0 };
  let a,
    d,
    p = [],
    g = [],
    y;
  const O = s.state.value[e];
  !o && !O && (s.state.value[e] = {}), ms({});
  let A;
  function $(z) {
    let K;
    (a = d = !1),
      typeof z == "function"
        ? (z(s.state.value[e]),
          (K = { type: kt.patchFunction, storeId: e, events: y }))
        : (ts(s.state.value[e], z),
          (K = { type: kt.patchObject, payload: z, storeId: e, events: y }));
    const ne = (A = Symbol());
    bs().then(() => {
      A === ne && (a = !0);
    }),
      (d = !0),
      pt(p, K, s.state.value[e]);
  }
  const T = o
    ? function () {
        const { state: K } = n,
          ne = K ? K() : {};
        this.$patch((fe) => {
          Qe(fe, ne);
        });
      }
    : Ao;
  function L() {
    i.stop(), (p = []), (g = []), s._s.delete(e);
  }
  function U(z, K) {
    return function () {
      Sn(s);
      const ne = Array.from(arguments),
        fe = [],
        _e = [];
      function Ee(q) {
        fe.push(q);
      }
      function nt(q) {
        _e.push(q);
      }
      pt(g, { args: ne, name: z, store: X, after: Ee, onError: nt });
      let xe;
      try {
        xe = K.apply(this && this.$id === e ? this : X, ne);
      } catch (q) {
        throw (pt(_e, q), q);
      }
      return xe instanceof Promise
        ? xe
            .then((q) => (pt(fe, q), q))
            .catch((q) => (pt(_e, q), Promise.reject(q)))
        : (pt(fe, xe), xe);
    };
  }
  const j = {
      _p: s,
      $id: e,
      $onAction: fr.bind(null, g),
      $patch: $,
      $reset: T,
      $subscribe(z, K = {}) {
        const ne = fr(p, z, K.detached, () => fe()),
          fe = i.run(() =>
            Nt(
              () => s.state.value[e],
              (_e) => {
                (K.flush === "sync" ? d : a) &&
                  z({ storeId: e, type: kt.direct, events: y }, _e);
              },
              Qe({}, l, K)
            )
          );
        return ne;
      },
      $dispose: L,
    },
    X = Jt(j);
  s._s.set(e, X);
  const ue = ((s._a && s._a.runWithContext) || dc)(() =>
    s._e.run(() => (i = Lr()).run(t))
  );
  for (const z in ue) {
    const K = ue[z];
    if ((se(K) && !gc(K)) || Ge(K))
      o ||
        (O && pc(K) && (se(K) ? (K.value = O[z]) : ts(K, O[z])),
        (s.state.value[e][z] = K));
    else if (typeof K == "function") {
      const ne = U(z, K);
      (ue[z] = ne), (c.actions[z] = K);
    }
  }
  return (
    Qe(X, ue),
    Qe(W(X), ue),
    Object.defineProperty(X, "$state", {
      get: () => s.state.value[e],
      set: (z) => {
        $((K) => {
          Qe(K, z);
        });
      },
    }),
    s._p.forEach((z) => {
      Qe(
        X,
        i.run(() => z({ store: X, app: s._a, pinia: s, options: c }))
      );
    }),
    O && o && n.hydrate && n.hydrate(X.$state, O),
    (a = !0),
    (d = !0),
    X
  );
}
function _c(e, t, n) {
  let s, r;
  const o = typeof t == "function";
  typeof e == "string" ? ((s = e), (r = o ? n : t)) : ((r = e), (s = e.id));
  function i(c, l) {
    const a = pl();
    return (
      (c = c || (a ? Be(So, null) : null)),
      c && Sn(c),
      (c = Oo),
      c._s.has(s) || (o ? Fo(s, t, r, c) : mc(s, r, c)),
      c._s.get(s)
    );
  }
  return (i.$id = s), i;
}
const An = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  },
  bc = { name: "Button", props: ["text", "bgColor", "color", "icon"] },
  yc = Ce("i", { class: "uil uil-arrow-right" }, null, -1);
function vc(e, t, n, s, r, o) {
  return (
    Xe(),
    Et(
      "button",
      {
        style: St({ backgroundColor: n.color, color: n.bgColor }),
        class: "button",
      },
      [wo(fn(n.text) + " ", 1), yc],
      4
    )
  );
}
const Ec = An(bc, [["render", vc]]);
const xc = {
    name: "Category",
    props: ["image", "bgColor", "name", "item", "group"],
  },
  wc = ["src"],
  Rc = { class: "name" },
  Cc = { class: "item" };
function Pc(e, t, n, s, r, o) {
  return (
    Xe(),
    Et(
      "div",
      { class: "color", style: St({ backgroundColor: n.bgColor }) },
      [
        Ce("img", { src: n.image }, null, 8, wc),
        Ce("p", Rc, fn(n.name), 1),
        Ce("p", Cc, fn(n.item) + " items", 1),
      ],
      4
    )
  );
}
const Oc = An(xc, [["render", Pc]]);
const Sc = {
    name: "Promotion",
    props: ["title", "bgColor", "image", "bgB"],
    components: { Button: Ec },
  },
  Ac = { class: "box3" },
  Fc = { class: "box4" },
  Tc = ["src"];
function Ic(e, t, n, s, r, o) {
  const i = qn("Button");
  return (
    Xe(),
    Et(
      "div",
      { class: "promotion", style: St({ backgroundColor: n.bgColor }) },
      [
        Ce("div", Ac, [
          Ce("p", null, fn(n.title), 1),
          ve(i, { text: "Shop now", color: n.bgB, bgColor: "#fff" }, null, 8, [
            "color",
          ]),
        ]),
        Ce("div", Fc, [Ce("img", { src: n.image }, null, 8, Tc)]),
      ],
      4
    )
  );
}
const Mc = An(Sc, [["render", Ic]]),
  Lc = _c("store", {
    state: () => ({
      groups: [
        "Milks & Diaries",
        "Coffees & Teas",
        "Pet Foods",
        "Meats",
        "Vegetable",
        "Fruit",
      ],
      categories: [
        {
          id: 1,
          group: "Milks & Diaries",
          name: "Coke & Milk",
          color: "#F2FCE4",
          image: new URL("./assets/cat-13 1-ec516ed1.png", self.location),
          item: "14",
        },
        {
          id: 2,
          group: "Fruits",
          name: "Peach",
          color: "#FFFCEB",
          image: new URL("./assets/cat-11 1-1aa65e38.png", self.location),
          item: "17",
        },
        {
          id: 3,
          group: "Fruits",
          name: "Organic Kiwi",
          color: "#ECFFEC",
          image: new URL("./assets/cat-12 1-e71a113e.png", self.location),
          item: "21",
        },
        {
          id: 4,
          group: "Fruits",
          name: "Red Apple",
          color: "#FEEFEA",
          image: new URL("./assets/cat-9 1-07924f01.png", self.location),
          item: "68",
        },
        {
          id: 5,
          group: "Coffees & Teas",
          name: "Snack",
          color: "#FFF3EB",
          image: new URL("./assets/cat-3 1-cf3d6b14.png", self.location),
          item: "34",
        },
        {
          id: 6,
          group: "Fruits",
          name: "Black plum",
          color: "#FFF3FF",
          image: new URL("./assets/cat-4 1-ac8266ea.png", self.location),
          item: "25",
        },
        {
          id: 7,
          group: "Vegetables",
          name: "Vegetables",
          color: "#F2FCE4",
          image: new URL("./assets/cat-1 4-52895297.png", self.location),
          item: "65",
        },
        {
          id: 8,
          group: "headphone",
          name: "headphone",
          color: "#FFFCEB",
          image: new URL("./assets/cat-15 1-e1f4792b.png", self.location),
          item: "33",
        },
        {
          id: 9,
          group: "cake & milk",
          name: "Cake & milke",
          color: "#F2FCE4",
          image: new URL("./assets/cat-14 1-063233d1.png", self.location),
          item: "54",
        },
        {
          id: 10,
          group: "Fuite",
          name: "Orange",
          color: "#FFF3FF",
          image: new URL("./assets/cat-7 1-54db2135.png", self.location),
          item: "63",
        },
      ],
      promotions: [
        {
          bg: "#3BB77E",
          id: 1,
          title: "Everyday Fresh & Clean with Our Products",
          color: "#F0E8D5",
          image: new URL("./assets/Cms-04 1-f4207121.png", self.location),
        },
        {
          bg: "#3BB77E",
          id: 2,
          title: "Make your Breakfast Healthy and Easy",
          color: "#F3E8E8",
          image: new URL("./assets/Cat-01 1-ed2e22c7.png", self.location),
        },
        {
          bg: "#FDC040",
          id: 3,
          title: "The best Organic Products Online",
          color: "#E7EAF3",
          image: new URL("./assets/Cms-03 1-9f3618c2.png", self.location),
        },
      ],
    }),
    getter: {},
    action: {},
  });
const jc = {
    name: "App",
    components: { Category: Oc, Promotion: Mc },
    setup() {
      return { store: Lc() };
    },
  },
  Nc = { class: "Box" },
  $c = { class: "box1" },
  Bc = { class: "box2" };
function kc(e, t, n, s, r, o) {
  const i = qn("Category"),
    c = qn("Promotion");
  return (
    Xe(),
    Et("div", Nc, [
      Ce("div", $c, [
        (Xe(!0),
        Et(
          Oe,
          null,
          Ks(
            s.store.categories,
            (l) => (
              Xe(),
              Zs(
                i,
                {
                  id: l.id,
                  image: l.image,
                  bgColor: l.color,
                  name: l.name,
                  group: l.group,
                  item: l.item,
                },
                null,
                8,
                ["id", "image", "bgColor", "name", "group", "item"]
              )
            )
          ),
          256
        )),
      ]),
      Ce("div", Bc, [
        (Xe(!0),
        Et(
          Oe,
          null,
          Ks(
            s.store.promotions,
            (l) => (
              Xe(),
              Zs(
                c,
                {
                  id: l.id,
                  image: l.image,
                  bgColor: l.color,
                  title: l.title,
                  bgB: l.bg,
                },
                null,
                8,
                ["id", "image", "bgColor", "title", "bgB"]
              )
            )
          ),
          256
        )),
      ]),
    ])
  );
}
const Hc = An(jc, [["render", kc]]);
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const gt = typeof window < "u";
function Uc(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Y = Object.assign;
function Bn(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Ie(r) ? r.map(e) : e(r);
  }
  return n;
}
const Ht = () => {},
  Ie = Array.isArray,
  Kc = /\/$/,
  Dc = (e) => e.replace(Kc, "");
function kn(e, t, n = "/") {
  let s,
    r = {},
    o = "",
    i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (o = t.slice(l + 1, c > -1 ? c : t.length)),
      (r = e(o))),
    c > -1 && ((s = s || t.slice(0, c)), (i = t.slice(c, t.length))),
    (s = Vc(s ?? t, n)),
    { fullPath: s + (o && "?") + o + i, path: s, query: r, hash: i }
  );
}
function Wc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ar(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function zc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    Ct(t.matched[s], n.matched[r]) &&
    To(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Ct(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function To(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!qc(e[n], t[n])) return !1;
  return !0;
}
function qc(e, t) {
  return Ie(e) ? dr(e, t) : Ie(t) ? dr(t, e) : e === t;
}
function dr(e, t) {
  return Ie(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function Vc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let o = n.length - 1,
    i,
    c;
  for (i = 0; i < s.length; i++)
    if (((c = s[i]), c !== "."))
      if (c === "..") o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    s.slice(i - (i === s.length ? 1 : 0)).join("/")
  );
}
var Yt;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Yt || (Yt = {}));
var Ut;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ut || (Ut = {}));
function Qc(e) {
  if (!e)
    if (gt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Dc(e);
}
const Yc = /^[^#]+#/;
function Jc(e, t) {
  return e.replace(Yc, "#") + t;
}
function Xc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const Fn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Zc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = Xc(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function hr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ns = new Map();
function Gc(e, t) {
  ns.set(e, t);
}
function eu(e) {
  const t = ns.get(e);
  return ns.delete(e), t;
}
let tu = () => location.protocol + "//" + location.host;
function Io(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let c = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = r.slice(c);
    return l[0] !== "/" && (l = "/" + l), ar(l, "");
  }
  return ar(n, e) + s + r;
}
function nu(e, t, n, s) {
  let r = [],
    o = [],
    i = null;
  const c = ({ state: g }) => {
    const y = Io(e, location),
      O = n.value,
      A = t.value;
    let $ = 0;
    if (g) {
      if (((n.value = y), (t.value = g), i && i === O)) {
        i = null;
        return;
      }
      $ = A ? g.position - A.position : 0;
    } else s(y);
    r.forEach((T) => {
      T(n.value, O, {
        delta: $,
        type: Yt.pop,
        direction: $ ? ($ > 0 ? Ut.forward : Ut.back) : Ut.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function a(g) {
    r.push(g);
    const y = () => {
      const O = r.indexOf(g);
      O > -1 && r.splice(O, 1);
    };
    return o.push(y), y;
  }
  function d() {
    const { history: g } = window;
    g.state && g.replaceState(Y({}, g.state, { scroll: Fn() }), "");
  }
  function p() {
    for (const g of o) g();
    (o = []),
      window.removeEventListener("popstate", c),
      window.removeEventListener("beforeunload", d);
  }
  return (
    window.addEventListener("popstate", c),
    window.addEventListener("beforeunload", d, { passive: !0 }),
    { pauseListeners: l, listen: a, destroy: p }
  );
}
function pr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? Fn() : null,
  };
}
function su(e) {
  const { history: t, location: n } = window,
    s = { value: Io(e, n) },
    r = { value: t.state };
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(l, a, d) {
    const p = e.indexOf("#"),
      g =
        p > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(p)) + l
          : tu() + e + l;
    try {
      t[d ? "replaceState" : "pushState"](a, "", g), (r.value = a);
    } catch (y) {
      console.error(y), n[d ? "replace" : "assign"](g);
    }
  }
  function i(l, a) {
    const d = Y({}, t.state, pr(r.value.back, l, r.value.forward, !0), a, {
      position: r.value.position,
    });
    o(l, d, !0), (s.value = l);
  }
  function c(l, a) {
    const d = Y({}, r.value, t.state, { forward: l, scroll: Fn() });
    o(d.current, d, !0);
    const p = Y({}, pr(s.value, l, null), { position: d.position + 1 }, a);
    o(l, p, !1), (s.value = l);
  }
  return { location: s, state: r, push: c, replace: i };
}
function ru(e) {
  e = Qc(e);
  const t = su(e),
    n = nu(e, t.state, t.location, t.replace);
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const r = Y(
    { location: "", base: e, go: s, createHref: Jc.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function ou(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Mo(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ve = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Lo = Symbol("");
var gr;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(gr || (gr = {}));
function Pt(e, t) {
  return Y(new Error(), { type: e, [Lo]: !0 }, t);
}
function Ue(e, t) {
  return e instanceof Error && Lo in e && (t == null || !!(e.type & t));
}
const mr = "[^/]+?",
  iu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  lu = /[.+*?^${}()[\]/\\]/g;
function cu(e, t) {
  const n = Y({}, iu, t),
    s = [];
  let r = n.start ? "^" : "";
  const o = [];
  for (const a of e) {
    const d = a.length ? [] : [90];
    n.strict && !a.length && (r += "/");
    for (let p = 0; p < a.length; p++) {
      const g = a[p];
      let y = 40 + (n.sensitive ? 0.25 : 0);
      if (g.type === 0)
        p || (r += "/"), (r += g.value.replace(lu, "\\$&")), (y += 40);
      else if (g.type === 1) {
        const { value: O, repeatable: A, optional: $, regexp: T } = g;
        o.push({ name: O, repeatable: A, optional: $ });
        const L = T || mr;
        if (L !== mr) {
          y += 10;
          try {
            new RegExp(`(${L})`);
          } catch (j) {
            throw new Error(
              `Invalid custom RegExp for param "${O}" (${L}): ` + j.message
            );
          }
        }
        let U = A ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`;
        p || (U = $ && a.length < 2 ? `(?:/${U})` : "/" + U),
          $ && (U += "?"),
          (r += U),
          (y += 20),
          $ && (y += -8),
          A && (y += -20),
          L === ".*" && (y += -50);
      }
      d.push(y);
    }
    s.push(d);
  }
  if (n.strict && n.end) {
    const a = s.length - 1;
    s[a][s[a].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function c(a) {
    const d = a.match(i),
      p = {};
    if (!d) return null;
    for (let g = 1; g < d.length; g++) {
      const y = d[g] || "",
        O = o[g - 1];
      p[O.name] = y && O.repeatable ? y.split("/") : y;
    }
    return p;
  }
  function l(a) {
    let d = "",
      p = !1;
    for (const g of e) {
      (!p || !d.endsWith("/")) && (d += "/"), (p = !1);
      for (const y of g)
        if (y.type === 0) d += y.value;
        else if (y.type === 1) {
          const { value: O, repeatable: A, optional: $ } = y,
            T = O in a ? a[O] : "";
          if (Ie(T) && !A)
            throw new Error(
              `Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`
            );
          const L = Ie(T) ? T.join("/") : T;
          if (!L)
            if ($)
              g.length < 2 &&
                (d.endsWith("/") ? (d = d.slice(0, -1)) : (p = !0));
            else throw new Error(`Missing required param "${O}"`);
          d += L;
        }
    }
    return d || "/";
  }
  return { re: i, score: s, keys: o, parse: c, stringify: l };
}
function uu(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function fu(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = uu(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (_r(s)) return 1;
    if (_r(r)) return -1;
  }
  return r.length - s.length;
}
function _r(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const au = { type: 0, value: "" },
  du = /[a-zA-Z0-9_]/;
function hu(e) {
  if (!e) return [[]];
  if (e === "/") return [[au]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(y) {
    throw new Error(`ERR (${n})/"${a}": ${y}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let o;
  function i() {
    o && r.push(o), (o = []);
  }
  let c = 0,
    l,
    a = "",
    d = "";
  function p() {
    a &&
      (n === 0
        ? o.push({ type: 0, value: a })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: a,
            regexp: d,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (a = ""));
  }
  function g() {
    a += l;
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (a && p(), i()) : l === ":" ? (p(), (n = 1)) : g();
        break;
      case 4:
        g(), (n = s);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : du.test(l)
          ? g()
          : (p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")"
          ? d[d.length - 1] == "\\"
            ? (d = d.slice(0, -1) + l)
            : (n = 3)
          : (d += l);
        break;
      case 3:
        p(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--, (d = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), p(), i(), r;
}
function pu(e, t, n) {
  const s = cu(hu(e.path), n),
    r = Y(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function gu(e, t) {
  const n = [],
    s = new Map();
  t = vr({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(d) {
    return s.get(d);
  }
  function o(d, p, g) {
    const y = !g,
      O = mu(d);
    O.aliasOf = g && g.record;
    const A = vr(t, d),
      $ = [O];
    if ("alias" in d) {
      const U = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const j of U)
        $.push(
          Y({}, O, {
            components: g ? g.record.components : O.components,
            path: j,
            aliasOf: g ? g.record : O,
          })
        );
    }
    let T, L;
    for (const U of $) {
      const { path: j } = U;
      if (p && j[0] !== "/") {
        const X = p.record.path,
          ce = X[X.length - 1] === "/" ? "" : "/";
        U.path = p.record.path + (j && ce + j);
      }
      if (
        ((T = pu(U, p, A)),
        g
          ? g.alias.push(T)
          : ((L = L || T),
            L !== T && L.alias.push(T),
            y && d.name && !yr(T) && i(d.name)),
        O.children)
      ) {
        const X = O.children;
        for (let ce = 0; ce < X.length; ce++) o(X[ce], T, g && g.children[ce]);
      }
      (g = g || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
          l(T);
    }
    return L
      ? () => {
          i(L);
        }
      : Ht;
  }
  function i(d) {
    if (Mo(d)) {
      const p = s.get(d);
      p &&
        (s.delete(d),
        n.splice(n.indexOf(p), 1),
        p.children.forEach(i),
        p.alias.forEach(i));
    } else {
      const p = n.indexOf(d);
      p > -1 &&
        (n.splice(p, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function l(d) {
    let p = 0;
    for (
      ;
      p < n.length &&
      fu(d, n[p]) >= 0 &&
      (d.record.path !== n[p].record.path || !jo(d, n[p]));

    )
      p++;
    n.splice(p, 0, d), d.record.name && !yr(d) && s.set(d.record.name, d);
  }
  function a(d, p) {
    let g,
      y = {},
      O,
      A;
    if ("name" in d && d.name) {
      if (((g = s.get(d.name)), !g)) throw Pt(1, { location: d });
      (A = g.record.name),
        (y = Y(
          br(
            p.params,
            g.keys.filter((L) => !L.optional).map((L) => L.name)
          ),
          d.params &&
            br(
              d.params,
              g.keys.map((L) => L.name)
            )
        )),
        (O = g.stringify(y));
    } else if ("path" in d)
      (O = d.path),
        (g = n.find((L) => L.re.test(O))),
        g && ((y = g.parse(O)), (A = g.record.name));
    else {
      if (((g = p.name ? s.get(p.name) : n.find((L) => L.re.test(p.path))), !g))
        throw Pt(1, { location: d, currentLocation: p });
      (A = g.record.name),
        (y = Y({}, p.params, d.params)),
        (O = g.stringify(y));
    }
    const $ = [];
    let T = g;
    for (; T; ) $.unshift(T.record), (T = T.parent);
    return { name: A, path: O, params: y, matched: $, meta: bu($) };
  }
  return (
    e.forEach((d) => o(d)),
    {
      addRoute: o,
      resolve: a,
      removeRoute: i,
      getRoutes: c,
      getRecordMatcher: r,
    }
  );
}
function br(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function mu(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: _u(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function _u(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function yr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function bu(e) {
  return e.reduce((t, n) => Y(t, n.meta), {});
}
function vr(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function jo(e, t) {
  return t.children.some((n) => n === e || jo(e, n));
}
const No = /#/g,
  yu = /&/g,
  vu = /\//g,
  Eu = /=/g,
  xu = /\?/g,
  $o = /\+/g,
  wu = /%5B/g,
  Ru = /%5D/g,
  Bo = /%5E/g,
  Cu = /%60/g,
  ko = /%7B/g,
  Pu = /%7C/g,
  Ho = /%7D/g,
  Ou = /%20/g;
function Cs(e) {
  return encodeURI("" + e)
    .replace(Pu, "|")
    .replace(wu, "[")
    .replace(Ru, "]");
}
function Su(e) {
  return Cs(e).replace(ko, "{").replace(Ho, "}").replace(Bo, "^");
}
function ss(e) {
  return Cs(e)
    .replace($o, "%2B")
    .replace(Ou, "+")
    .replace(No, "%23")
    .replace(yu, "%26")
    .replace(Cu, "`")
    .replace(ko, "{")
    .replace(Ho, "}")
    .replace(Bo, "^");
}
function Au(e) {
  return ss(e).replace(Eu, "%3D");
}
function Fu(e) {
  return Cs(e).replace(No, "%23").replace(xu, "%3F");
}
function Tu(e) {
  return e == null ? "" : Fu(e).replace(vu, "%2F");
}
function gn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Iu(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace($o, " "),
      i = o.indexOf("="),
      c = gn(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : gn(o.slice(i + 1));
    if (c in t) {
      let a = t[c];
      Ie(a) || (a = t[c] = [a]), a.push(l);
    } else t[c] = l;
  }
  return t;
}
function Er(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = Au(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ie(s) ? s.map((o) => o && ss(o)) : [s && ss(s)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function Mu(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Ie(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const Lu = Symbol(""),
  xr = Symbol(""),
  Ps = Symbol(""),
  Uo = Symbol(""),
  rs = Symbol("");
function Mt() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function Je(e, t, n, s, r) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((i, c) => {
      const l = (p) => {
          p === !1
            ? c(Pt(4, { from: n, to: t }))
            : p instanceof Error
            ? c(p)
            : ou(p)
            ? c(Pt(2, { from: t, to: p }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof p == "function" &&
                o.push(p),
              i());
        },
        a = e.call(s && s.instances[r], t, n, l);
      let d = Promise.resolve(a);
      e.length < 3 && (d = d.then(l)), d.catch((p) => c(p));
    });
}
function Hn(e, t, n, s) {
  const r = [];
  for (const o of e)
    for (const i in o.components) {
      let c = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (ju(c)) {
          const a = (c.__vccOpts || c)[t];
          a && r.push(Je(a, n, s, o, i));
        } else {
          let l = c();
          r.push(() =>
            l.then((a) => {
              if (!a)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const d = Uc(a) ? a.default : a;
              o.components[i] = d;
              const g = (d.__vccOpts || d)[t];
              return g && Je(g, n, s, o, i)();
            })
          );
        }
    }
  return r;
}
function ju(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function wr(e) {
  const t = Be(Ps),
    n = Be(Uo),
    s = we(() => t.resolve(yt(e.to))),
    r = we(() => {
      const { matched: l } = s.value,
        { length: a } = l,
        d = l[a - 1],
        p = n.matched;
      if (!d || !p.length) return -1;
      const g = p.findIndex(Ct.bind(null, d));
      if (g > -1) return g;
      const y = Rr(l[a - 2]);
      return a > 1 && Rr(d) === y && p[p.length - 1].path !== y
        ? p.findIndex(Ct.bind(null, l[a - 2]))
        : g;
    }),
    o = we(() => r.value > -1 && ku(n.params, s.value.params)),
    i = we(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        To(n.params, s.value.params)
    );
  function c(l = {}) {
    return Bu(l)
      ? t[yt(e.replace) ? "replace" : "push"](yt(e.to)).catch(Ht)
      : Promise.resolve();
  }
  return {
    route: s,
    href: we(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: c,
  };
}
const Nu = lo({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: wr,
    setup(e, { slots: t }) {
      const n = Jt(wr(e)),
        { options: s } = Be(Ps),
        r = we(() => ({
          [Cr(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Cr(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : Po(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              o
            );
      };
    },
  }),
  $u = Nu;
function Bu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ku(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Ie(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
      return !1;
  }
  return !0;
}
function Rr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Cr = (e, t, n) => e ?? t ?? n,
  Hu = lo({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Be(rs),
        r = we(() => e.route || s.value),
        o = Be(xr, 0),
        i = we(() => {
          let a = yt(o);
          const { matched: d } = r.value;
          let p;
          for (; (p = d[a]) && !p.components; ) a++;
          return a;
        }),
        c = we(() => r.value.matched[i.value]);
      ln(
        xr,
        we(() => i.value + 1)
      ),
        ln(Lu, c),
        ln(rs, r);
      const l = ms();
      return (
        Nt(
          () => [l.value, c.value, e.name],
          ([a, d, p], [g, y, O]) => {
            d &&
              ((d.instances[p] = a),
              y &&
                y !== d &&
                a &&
                a === g &&
                (d.leaveGuards.size || (d.leaveGuards = y.leaveGuards),
                d.updateGuards.size || (d.updateGuards = y.updateGuards))),
              a &&
                d &&
                (!y || !Ct(d, y) || !g) &&
                (d.enterCallbacks[p] || []).forEach((A) => A(a));
          },
          { flush: "post" }
        ),
        () => {
          const a = r.value,
            d = e.name,
            p = c.value,
            g = p && p.components[d];
          if (!g) return Pr(n.default, { Component: g, route: a });
          const y = p.props[d],
            O = y
              ? y === !0
                ? a.params
                : typeof y == "function"
                ? y(a)
                : y
              : null,
            $ = Po(
              g,
              Y({}, O, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (p.instances[d] = null);
                },
                ref: l,
              })
            );
          return Pr(n.default, { Component: $, route: a }) || $;
        }
      );
    },
  });
function Pr(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Uu = Hu;
function Ku(e) {
  const t = gu(e.routes, e),
    n = e.parseQuery || Iu,
    s = e.stringifyQuery || Er,
    r = e.history,
    o = Mt(),
    i = Mt(),
    c = Mt(),
    l = Ri(Ve);
  let a = Ve;
  gt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const d = Bn.bind(null, (_) => "" + _),
    p = Bn.bind(null, Tu),
    g = Bn.bind(null, gn);
  function y(_, P) {
    let R, F;
    return (
      Mo(_) ? ((R = t.getRecordMatcher(_)), (F = P)) : (F = _), t.addRoute(F, R)
    );
  }
  function O(_) {
    const P = t.getRecordMatcher(_);
    P && t.removeRoute(P);
  }
  function A() {
    return t.getRoutes().map((_) => _.record);
  }
  function $(_) {
    return !!t.getRecordMatcher(_);
  }
  function T(_, P) {
    if (((P = Y({}, P || l.value)), typeof _ == "string")) {
      const h = kn(n, _, P.path),
        m = t.resolve({ path: h.path }, P),
        b = r.createHref(h.fullPath);
      return Y(h, m, {
        params: g(m.params),
        hash: gn(h.hash),
        redirectedFrom: void 0,
        href: b,
      });
    }
    let R;
    if ("path" in _) R = Y({}, _, { path: kn(n, _.path, P.path).path });
    else {
      const h = Y({}, _.params);
      for (const m in h) h[m] == null && delete h[m];
      (R = Y({}, _, { params: p(h) })), (P.params = p(P.params));
    }
    const F = t.resolve(R, P),
      Q = _.hash || "";
    F.params = d(g(F.params));
    const u = Wc(s, Y({}, _, { hash: Su(Q), path: F.path })),
      f = r.createHref(u);
    return Y(
      { fullPath: u, hash: Q, query: s === Er ? Mu(_.query) : _.query || {} },
      F,
      { redirectedFrom: void 0, href: f }
    );
  }
  function L(_) {
    return typeof _ == "string" ? kn(n, _, l.value.path) : Y({}, _);
  }
  function U(_, P) {
    if (a !== _) return Pt(8, { from: P, to: _ });
  }
  function j(_) {
    return ue(_);
  }
  function X(_) {
    return j(Y(L(_), { replace: !0 }));
  }
  function ce(_) {
    const P = _.matched[_.matched.length - 1];
    if (P && P.redirect) {
      const { redirect: R } = P;
      let F = typeof R == "function" ? R(_) : R;
      return (
        typeof F == "string" &&
          ((F = F.includes("?") || F.includes("#") ? (F = L(F)) : { path: F }),
          (F.params = {})),
        Y(
          { query: _.query, hash: _.hash, params: "path" in F ? {} : _.params },
          F
        )
      );
    }
  }
  function ue(_, P) {
    const R = (a = T(_)),
      F = l.value,
      Q = _.state,
      u = _.force,
      f = _.replace === !0,
      h = ce(R);
    if (h)
      return ue(
        Y(L(h), {
          state: typeof h == "object" ? Y({}, Q, h.state) : Q,
          force: u,
          replace: f,
        }),
        P || R
      );
    const m = R;
    m.redirectedFrom = P;
    let b;
    return (
      !u && zc(s, F, R) && ((b = Pt(16, { to: m, from: F })), Me(F, F, !0, !1)),
      (b ? Promise.resolve(b) : ne(m, F))
        .catch((v) => (Ue(v) ? (Ue(v, 2) ? v : ze(v)) : V(v, m, F)))
        .then((v) => {
          if (v) {
            if (Ue(v, 2))
              return ue(
                Y({ replace: f }, L(v.to), {
                  state: typeof v.to == "object" ? Y({}, Q, v.to.state) : Q,
                  force: u,
                }),
                P || m
              );
          } else v = _e(m, F, !0, f, Q);
          return fe(m, F, v), v;
        })
    );
  }
  function z(_, P) {
    const R = U(_, P);
    return R ? Promise.reject(R) : Promise.resolve();
  }
  function K(_) {
    const P = at.values().next().value;
    return P && typeof P.runWithContext == "function"
      ? P.runWithContext(_)
      : _();
  }
  function ne(_, P) {
    let R;
    const [F, Q, u] = Du(_, P);
    R = Hn(F.reverse(), "beforeRouteLeave", _, P);
    for (const h of F)
      h.leaveGuards.forEach((m) => {
        R.push(Je(m, _, P));
      });
    const f = z.bind(null, _, P);
    return (
      R.push(f),
      ae(R)
        .then(() => {
          R = [];
          for (const h of o.list()) R.push(Je(h, _, P));
          return R.push(f), ae(R);
        })
        .then(() => {
          R = Hn(Q, "beforeRouteUpdate", _, P);
          for (const h of Q)
            h.updateGuards.forEach((m) => {
              R.push(Je(m, _, P));
            });
          return R.push(f), ae(R);
        })
        .then(() => {
          R = [];
          for (const h of u)
            if (h.beforeEnter)
              if (Ie(h.beforeEnter))
                for (const m of h.beforeEnter) R.push(Je(m, _, P));
              else R.push(Je(h.beforeEnter, _, P));
          return R.push(f), ae(R);
        })
        .then(
          () => (
            _.matched.forEach((h) => (h.enterCallbacks = {})),
            (R = Hn(u, "beforeRouteEnter", _, P)),
            R.push(f),
            ae(R)
          )
        )
        .then(() => {
          R = [];
          for (const h of i.list()) R.push(Je(h, _, P));
          return R.push(f), ae(R);
        })
        .catch((h) => (Ue(h, 8) ? h : Promise.reject(h)))
    );
  }
  function fe(_, P, R) {
    c.list().forEach((F) => K(() => F(_, P, R)));
  }
  function _e(_, P, R, F, Q) {
    const u = U(_, P);
    if (u) return u;
    const f = P === Ve,
      h = gt ? history.state : {};
    R &&
      (F || f
        ? r.replace(_.fullPath, Y({ scroll: f && h && h.scroll }, Q))
        : r.push(_.fullPath, Q)),
      (l.value = _),
      Me(_, P, R, f),
      ze();
  }
  let Ee;
  function nt() {
    Ee ||
      (Ee = r.listen((_, P, R) => {
        if (!Xt.listening) return;
        const F = T(_),
          Q = ce(F);
        if (Q) {
          ue(Y(Q, { replace: !0 }), F).catch(Ht);
          return;
        }
        a = F;
        const u = l.value;
        gt && Gc(hr(u.fullPath, R.delta), Fn()),
          ne(F, u)
            .catch((f) =>
              Ue(f, 12)
                ? f
                : Ue(f, 2)
                ? (ue(f.to, F)
                    .then((h) => {
                      Ue(h, 20) &&
                        !R.delta &&
                        R.type === Yt.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Ht),
                  Promise.reject())
                : (R.delta && r.go(-R.delta, !1), V(f, F, u))
            )
            .then((f) => {
              (f = f || _e(F, u, !1)),
                f &&
                  (R.delta && !Ue(f, 8)
                    ? r.go(-R.delta, !1)
                    : R.type === Yt.pop && Ue(f, 20) && r.go(-1, !1)),
                fe(F, u, f);
            })
            .catch(Ht);
      }));
  }
  let xe = Mt(),
    q = Mt(),
    Z;
  function V(_, P, R) {
    ze(_);
    const F = q.list();
    return (
      F.length ? F.forEach((Q) => Q(_, P, R)) : console.error(_),
      Promise.reject(_)
    );
  }
  function He() {
    return Z && l.value !== Ve
      ? Promise.resolve()
      : new Promise((_, P) => {
          xe.add([_, P]);
        });
  }
  function ze(_) {
    return (
      Z ||
        ((Z = !_),
        nt(),
        xe.list().forEach(([P, R]) => (_ ? R(_) : P())),
        xe.reset()),
      _
    );
  }
  function Me(_, P, R, F) {
    const { scrollBehavior: Q } = e;
    if (!gt || !Q) return Promise.resolve();
    const u =
      (!R && eu(hr(_.fullPath, 0))) ||
      ((F || !R) && history.state && history.state.scroll) ||
      null;
    return bs()
      .then(() => Q(_, P, u))
      .then((f) => f && Zc(f))
      .catch((f) => V(f, _, P));
  }
  const pe = (_) => r.go(_);
  let ft;
  const at = new Set(),
    Xt = {
      currentRoute: l,
      listening: !0,
      addRoute: y,
      removeRoute: O,
      hasRoute: $,
      getRoutes: A,
      resolve: T,
      options: e,
      push: j,
      replace: X,
      go: pe,
      back: () => pe(-1),
      forward: () => pe(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: q.add,
      isReady: He,
      install(_) {
        const P = this;
        _.component("RouterLink", $u),
          _.component("RouterView", Uu),
          (_.config.globalProperties.$router = P),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => yt(l),
          }),
          gt &&
            !ft &&
            l.value === Ve &&
            ((ft = !0), j(r.location).catch((Q) => {}));
        const R = {};
        for (const Q in Ve)
          Object.defineProperty(R, Q, {
            get: () => l.value[Q],
            enumerable: !0,
          });
        _.provide(Ps, P), _.provide(Uo, qr(R)), _.provide(rs, l);
        const F = _.unmount;
        at.add(_),
          (_.unmount = function () {
            at.delete(_),
              at.size < 1 &&
                ((a = Ve),
                Ee && Ee(),
                (Ee = null),
                (l.value = Ve),
                (ft = !1),
                (Z = !1)),
              F();
          });
      },
    };
  function ae(_) {
    return _.reduce((P, R) => P.then(() => K(R)), Promise.resolve());
  }
  return Xt;
}
function Du(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const c = t.matched[i];
    c && (e.matched.find((a) => Ct(a, c)) ? s.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((a) => Ct(a, l)) || r.push(l));
  }
  return [n, s, r];
}
const Wu = Ku({ history: ru("/"), routes: [] }),
  Os = cc(Hc);
Os.use(ac());
Os.use(Wu);
Os.mount("#app");
