var e = Object.defineProperty,
  t = (t, a, l) =>
    ((t, a, l) =>
      a in t
        ? e(t, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l,
          })
        : (t[a] = l))(t, "symbol" != typeof a ? a + "" : a, l);
import {
  d as a,
  h as l,
  e as s,
  ae as i,
  af as n,
  B as o,
  ah as d,
  ak as r,
  aj as c,
  u,
  ap as p,
  ai as v,
  S as m,
  av as f,
  r as h,
  ag as g,
  W as C,
  ao as y,
  F as w,
  H as b,
  R as k,
  w as x,
  X as M,
  o as S,
  au as E,
  O as L,
  k as _,
  ax as D,
  Z as O,
  ay as T,
  an as I,
  ar as F,
  V as A,
  aJ as V,
} from "./vendor-BSfPDjda.js";
import {
  _ as U,
  b as P,
  o as W,
  t as R,
  c as Z,
  E as N,
  i as B,
  L as K,
  d as z,
  e as G,
  f as J,
  g as H,
  a as j,
  h as X,
  S as Y,
  j as q,
  I as Q,
  O as $,
  k as ee,
  l as te,
  V as ae,
  m as le,
  n as se,
  u as ie,
  p as ne,
  q as oe,
  M as de,
  r as re,
  s as ce,
  v as ue,
  w as pe,
  x as ve,
  U as me,
  y as fe,
  D as he,
  z as ge,
  T as Ce,
  A as ye,
  B as we,
  C as be,
  F as ke,
  G as xe,
  H as Me,
  J as Se,
  K as Ee,
  N as Le,
  P as _e,
  Q as De,
  R as Oe,
  W as Te,
  X as Ie,
  Y as Fe,
  Z as Ae,
  $ as Ve,
  a0 as Ue,
  a1 as Pe,
  a2 as We,
  a3 as Re,
  a4 as Ze,
  a5 as Ne,
  a6 as Be,
  a7 as Ke,
  a8 as ze,
  a9 as Ge,
  aa as Je,
  ab as He,
  ac as je,
  ad as Xe,
  ae as Ye,
  af as qe,
  ag as Qe,
  ah as $e,
  ai as et,
  aj as tt,
  ak as at,
  al as lt,
  am as st,
  an as it,
  ao as nt,
  ap as ot,
  aq as dt,
  ar as rt,
  as as ct,
  at as ut,
  au as pt,
  av as vt,
  aw as mt,
  ax as ft,
  ay as ht,
  az as gt,
  aA as Ct,
  aB as yt,
  aC as wt,
  aD as bt,
  aE as kt,
} from "./index-DMzqItrl.js";
import {
  h as xt,
  i as Mt,
  T as St,
  j as Et,
  c as Lt,
  k as _t,
  m as Dt,
  n as Ot,
  o as Tt,
  F as It,
  p as Ft,
  I as At,
  d as Vt,
  f as Ut,
  B as Pt,
  q as Wt,
  R as Rt,
  r as Zt,
  s as Nt,
  b as Bt,
  t as Kt,
  S as zt,
  M as Gt,
} from "./vendor-antd-Bzq9tHUT.js";
import {
  u as Jt,
  B as Ht,
  a as jt,
  U as Xt,
  F as Yt,
  H as qt,
  b as Qt,
  c as $t,
  M as ea,
} from "./headerBox-BEeagn4k.js";
import {
  k as ta,
  r as aa,
  H as la,
  A as sa,
  _ as ia,
  s as na,
  V as oa,
} from "./vendor-gl/main-CMt4HR-W.js";
import { S as da } from "./sortable--cjsEbo_.js";
import "./vendor-axios-DMXdiZgf.js";
import "./logo-primary-CuEV4wjC.js";
const ra = {
    class: "collapse-panel-container",
  },
  ca = {
    class: "position-absolute right-extra",
  },
  ua = "1",
  pa = "collapse-panel-title",
  va = U(
    a({
      __name: "collapsePanelContainer",
      props: {
        title: {},
      },
      setup(e) {
        const t = e,
          a = l([ua]),
          h = () => {
            a.value.includes(ua) ? (a.value = []) : (a.value = [ua]);
          },
          g = s(() => a.value.includes(ua)),
          C = (e) => {
            e.target.className !== pa && e.stopPropagation();
          };
        return (e, l) => {
          const s = f("GlSvg");
          return (
            i(),
            n("div", ra, [
              o(
                u(Mt),
                {
                  onClick: l[0] || (l[0] = m(() => {}, ["stop"])),
                  ghost: "",
                  activeKey: a.value,
                },
                {
                  expandIcon: d((e) => [
                    r(
                      "span",
                      {
                        onClick: h,
                        class: c({
                          "expand-icon pointer": !0,
                          active: e.isActive,
                        }),
                      },
                      [
                        o(s, {
                          color: "var(--gl-color-text-level2)",
                          name: "gl-kvm-collapse-down",
                          size: 16,
                        }),
                      ],
                      2,
                    ),
                  ]),
                  default: d(() => [
                    o(
                      u(xt),
                      {
                        key: "1",
                      },
                      {
                        header: d(() => [
                          r(
                            "div",
                            {
                              onClick: C,
                              class: "flex-btw position-relative",
                            },
                            [
                              r(
                                "div",
                                {
                                  onClick: h,
                                  class: "pointer fw-500 flex-1 flex-start",
                                },
                                [
                                  r(
                                    "span",
                                    {
                                      class: c(pa),
                                    },
                                    p(e.$t(t.title)),
                                    1,
                                  ),
                                  v(e.$slots, "titleExtra", {}, void 0, !0),
                                ],
                              ),
                              r("div", ca, [
                                v(
                                  e.$slots,
                                  "titleRight",
                                  {
                                    opened: g.value,
                                  },
                                  void 0,
                                  !0,
                                ),
                              ]),
                            ],
                          ),
                        ]),
                        default: d(() => [
                          v(e.$slots, "default", {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ),
                  ]),
                  _: 3,
                },
                8,
                ["activeKey"],
              ),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-9b8cc447"]],
  ),
  ma = {
    class: "customize-edid bg-surface3",
  },
  fa = {
    class: "title text-ellipsis",
  },
  ha = {
    class: "content",
  },
  ga = {
    class: "flex-end",
  },
  Ca = U(
    a({
      __name: "customizeEDID",
      props: {
        defaultEditMode: {
          type: Boolean,
        },
      },
      emits: ["success"],
      setup(e, { emit: t }) {
        const a = e,
          l = t,
          s = P(),
          c = h({
            customizeEDID: "",
            editMode: a.defaultEditMode,
          }),
          v = () => {
            c.editMode = !c.editMode;
          },
          m = () => {
            W(Jt().value.edidHelpDocUrl);
          },
          y = async () => {
            if (!c.customizeEDID)
              return void Lt.error(R("settings.customizeEDIDEmpty"));
            const e = await s.setEDID(c.customizeEDID);
            ((c.editMode = !e), e && l("success"));
          };
        return (e, t) => {
          const a = f("BaseButton");
          return (
            i(),
            n("div", ma, [
              r("div", fa, [
                r("span", null, p(e.$t("settings.haveEdidTrouble")), 1),
                o(
                  u(St),
                  {
                    title: e.$t("settings.checkHelp"),
                  },
                  {
                    default: d(() => [
                      r(
                        "a",
                        {
                          onClick: m,
                          target: "_blank",
                        },
                        p(e.$t("settings.checkHelp")),
                        1,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["title"],
                ),
              ]),
              r("div", ha, [
                c.editMode
                  ? (i(),
                    g(
                      u(Et),
                      {
                        key: 0,
                        rows: 3,
                        value: c.customizeEDID,
                        "onUpdate:value":
                          t[0] || (t[0] = (e) => (c.customizeEDID = e)),
                        row: "",
                        placeholder: e.$t("settings.inputSettings"),
                      },
                      null,
                      8,
                      ["value", "placeholder"],
                    ))
                  : (i(),
                    g(
                      u(Et),
                      {
                        key: 1,
                        rows: 3,
                        value: u(s).state.EDID,
                        readonly: "",
                        disabled: "",
                        row: "",
                        placeholder: e.$t("settings.inputSettings"),
                      },
                      null,
                      8,
                      ["value", "placeholder"],
                    )),
              ]),
              r("div", ga, [
                c.editMode
                  ? (i(),
                    g(
                      a,
                      {
                        key: 0,
                        onClick: y,
                        loading: u(s).state.EDIDSetting,
                      },
                      {
                        default: d(() => [C(p(e.$t("settings.setCustom")), 1)]),
                        _: 1,
                      },
                      8,
                      ["loading"],
                    ))
                  : (i(),
                    g(
                      a,
                      {
                        key: 1,
                        onClick: v,
                      },
                      {
                        default: d(() => [C(p(e.$t("common.edit")), 1)]),
                        _: 1,
                      },
                    )),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-83680c7a"]],
  ),
  ya = {
    class: "flex",
    style: {
      "margin-left": "2px",
    },
  },
  wa = a({
    __name: "baseHelp",
    props: {
      title: {},
      placement: {
        default: "right",
      },
    },
    setup: (e) => (e, t) => {
      const a = f("GlSvg");
      return (
        i(),
        n("div", ya, [
          o(
            u(St),
            {
              placement: e.placement,
              title: e.title,
              class: "tooltip",
            },
            {
              default: d(() => [
                o(a, {
                  size: 16,
                  name: "gl-kvm-help",
                }),
              ]),
              _: 1,
            },
            8,
            ["placement", "title"],
          ),
        ])
      );
    },
  }),
  ba = {
    class: "flex-btw flex-nowrap item",
  },
  ka = {
    class: "label text-2 flex-start",
  },
  xa = {
    class: "flex-start flex-nowrap full-height",
  },
  Ma = {
    class: "select-option-label",
  },
  Sa = U(
    a({
      __name: "EDIDSettings",
      setup(e) {
        const { systemStore: t, configStore: a } = Z(),
          c = l(t.currentEDIDEnum === N.CUSTOMIZE),
          v = s(
            () =>
              a.state.leftPanelEnum === K.SETTINGS &&
              (c.value || t.currentEDIDEnum === N.CUSTOMIZE),
          ),
          m = s(() => t.currentEDIDEnum !== N.CUSTOMIZE),
          h = s({
            get: () => (c.value ? N.CUSTOMIZE : t.currentEDIDEnum),
            set(e) {
              e !== N.CUSTOMIZE
                ? ((c.value = !1), t.setEDID(z.get(e)))
                : (c.value = !0);
            },
          }),
          C = s(() =>
            G.map((e) =>
              e.value === N.CUSTOMIZE && t.currentEDIDEnum === N.CUSTOMIZE
                ? {
                    label: `${R(e.label)}(${J().resolutionTextOnly})`,
                    value: e.value,
                  }
                : {
                    label: R(e.label),
                    value: e.value,
                  },
            ),
          );
        return (e, a) => {
          const l = f("GlSvg");
          return (
            i(),
            n(
              w,
              null,
              [
                r("div", ba, [
                  r("div", ka, [
                    a[2] || (a[2] = r("span", null, "EDID", -1)),
                    o(
                      wa,
                      {
                        title: e.$t("settings.edidTip"),
                      },
                      null,
                      8,
                      ["title"],
                    ),
                  ]),
                  o(
                    u(_t),
                    {
                      popupClassName: "select-edid",
                      loading: u(t).state.EDIDSetting,
                      disabled: u(t).state.EDIDSetting,
                      style: {
                        width: "192px",
                      },
                      options: C.value,
                      value: h.value,
                      "onUpdate:value": a[0] || (a[0] = (e) => (h.value = e)),
                    },
                    {
                      option: d((t) => [
                        r("div", xa, [
                          r("span", Ma, p(t.label), 1),
                          o(
                            u(St),
                            {
                              title: e.$t("settings.noAudioEdid"),
                            },
                            {
                              default: d(() => [
                                u(B)(t.value)
                                  ? (i(),
                                    g(l, {
                                      key: 0,
                                      class: "no-audio-icon",
                                      size: 18,
                                      name: "gl-kvm-sound-off",
                                    }))
                                  : y("", !0),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["title"],
                          ),
                        ]),
                      ]),
                      _: 1,
                    },
                    8,
                    ["loading", "disabled", "options", "value"],
                  ),
                ]),
                v.value
                  ? (i(),
                    g(
                      Ca,
                      {
                        key: 0,
                        defaultEditMode: m.value,
                        onSuccess: a[1] || (a[1] = (e) => (c.value = !1)),
                      },
                      null,
                      8,
                      ["defaultEditMode"],
                    ))
                  : y("", !0),
              ],
              64,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-780679b0"]],
  ),
  Ea = (e) => {
    const { t: t } = H();
    return s(() =>
      e.map((e) => ({
        ...e,
        label: t(e.label),
      })),
    );
  },
  La = {
    class: "flex-btw flex-nowrap item",
  },
  _a = {
    class: "label text-2 flex-start",
  },
  Da = {
    class: "flex-btw flex-nowrap item",
  },
  Oa = {
    class: "label text-2",
  },
  Ta = {
    class: "flex-btw flex-nowrap item",
  },
  Ia = {
    class: "label text-2",
  },
  Fa = {
    key: 0,
    class: "flex-btw flex-nowrap item",
  },
  Aa = {
    class: "label text-2",
  },
  Va = U(
    a({
      __name: "videoSettings",
      setup(e) {
        const { configStore: t, kvmStore: a, systemStore: c } = Z(),
          v = s(() =>
            ee.map((e) => ({
              ...e,
              label: R(e.label),
            })),
          ),
          m = j(),
          f = X(Y.VIDEO_MODE),
          h = Ea(te),
          C = X(Y.VIDEO_PROCESSING),
          w = l(!1),
          x = l(!1),
          M = s({
            get: () => m.storage[Y.ORIENTATION],
            set(e) {
              m.setStorage(Y.ORIENTATION, e);
            },
          }),
          S = s({
            get: () => f.value,
            set(e) {
              ((f.value = e),
                e === ae.DIRECT_H264
                  ? ((w.value = a.configState.volumeOn),
                    (x.value = !c.state.micMuted),
                    a.setVolumeOn(!1),
                    c.setMicMuted(!0))
                  : (w.value && a.setVolumeOn(!0),
                    x.value && c.setMicMuted(!1)));
            },
          }),
          E = X(Y.STREAM_QUALITY),
          L = s({
            get: () => E.value,
            set(e) {
              e !== E.value && ((E.value = e), c.setStreamQuality(e));
            },
          }),
          _ = s({
            get: () => C.value,
            set(e) {
              e !== C.value && ((C.value = e), D(e === Q.LOW_LATENCY_FIRST));
            },
          }),
          D = async (e) => {
            try {
              await le.updateH264Args({
                zero_delay: e,
              });
            } catch (t) {
              Lt.error(R("common.settingFailed"));
            }
          },
          O = !q.is_firefox,
          T = s(() => [
            new aa(ae.WEBRTC, R("video.webRTC")),
            new aa(ae.DIRECT_H264, R("video.directH264")),
          ]);
        return (e, a) => (
          i(),
          g(
            va,
            {
              title: "settings.video",
            },
            {
              default: d(() => [
                r("div", La, [
                  r("div", _a, [
                    r("span", null, p(e.$t("settings.videoMode")), 1),
                    o(
                      wa,
                      {
                        title: e.$t("settings.processingTip"),
                      },
                      null,
                      8,
                      ["title"],
                    ),
                  ]),
                  o(
                    u(_t),
                    {
                      style: {
                        width: "192px",
                      },
                      options: u(h),
                      value: _.value,
                      "onUpdate:value": a[0] || (a[0] = (e) => (_.value = e)),
                    },
                    null,
                    8,
                    ["options", "value"],
                  ),
                ]),
                b(
                  r(
                    "div",
                    Da,
                    [
                      r("div", Oa, p(e.$t("settings.quality")), 1),
                      o(
                        u(_t),
                        {
                          style: {
                            width: "192px",
                          },
                          options: v.value,
                          value: L.value,
                          "onUpdate:value":
                            a[1] || (a[1] = (e) => (L.value = e)),
                        },
                        null,
                        8,
                        ["options", "value"],
                      ),
                    ],
                    512,
                  ),
                  [[k, _.value !== u(Q).QUALITY_FIRST]],
                ),
                r("div", Ta, [
                  r("div", Ia, p(e.$t("settings.transmission")), 1),
                  o(
                    u(_t),
                    {
                      style: {
                        width: "192px",
                      },
                      options: T.value,
                      value: S.value,
                      "onUpdate:value": a[2] || (a[2] = (e) => (S.value = e)),
                    },
                    null,
                    8,
                    ["options", "value"],
                  ),
                ]),
                O
                  ? (i(),
                    n("div", Fa, [
                      r("div", Aa, p(e.$t("settings.orient")), 1),
                      o(
                        u(ta),
                        {
                          style: {
                            width: "192px",
                          },
                          options: u($),
                          value: M.value,
                          "onUpdate:value":
                            a[3] || (a[3] = (e) => (M.value = e)),
                        },
                        null,
                        8,
                        ["options", "value"],
                      ),
                    ]))
                  : y("", !0),
                u(t).state.leftPanelEnum === u(K).SETTINGS
                  ? (i(),
                    g(Sa, {
                      key: 1,
                    }))
                  : y("", !0),
              ]),
              _: 1,
            },
          )
        );
      },
    }),
    [["__scopeId", "data-v-f0e131be"]],
  ),
  Ua = {
    class: "item flex-btw",
  },
  Pa = {
    class: "label text-2",
  },
  Wa = {
    key: 0,
    class: "item flex-btw",
  },
  Ra = {
    class: "label text-2",
  },
  Za = U(
    a({
      __name: "keyboardSettings",
      setup(e) {
        const t = se(),
          a = ie(),
          l = X(Y.KEYBOARD_CONTROL),
          d = s({
            get: () => t.virtualKeyboardFixed || t.virtualKeyboardFloat,
            set(e) {
              e
                ? a.state.fullScreenOn
                  ? t.setVirtualKeyboardStatus(ne.FLOAT)
                  : t.setVirtualKeyboardStatus(ne.FIXED)
                : t.setVirtualKeyboardStatus(ne.CLOSED);
            },
          });
        return (
          x(
            l,
            (e) => {
              e || (d.value = !1);
            },
            {
              immediate: !0,
            },
          ),
          (e, t) => (
            i(),
            n(
              w,
              null,
              [
                r("div", Ua, [
                  r("div", Pa, p(e.$t("settings.keyboard")), 1),
                  o(
                    u(Dt),
                    {
                      size: "small",
                      checked: u(l),
                      "onUpdate:checked":
                        t[0] || (t[0] = (e) => (M(l) ? (l.value = e) : null)),
                    },
                    null,
                    8,
                    ["checked"],
                  ),
                ]),
                u(l)
                  ? (i(),
                    n("div", Wa, [
                      r("div", Ra, p(e.$t("settings.showVirtualKeyboard")), 1),
                      o(
                        u(Dt),
                        {
                          size: "small",
                          checked: d.value,
                          "onUpdate:checked":
                            t[1] || (t[1] = (e) => (d.value = e)),
                        },
                        null,
                        8,
                        ["checked"],
                      ),
                    ]))
                  : y("", !0),
              ],
              64,
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-19392c59"]],
  ),
  Na = {
    class: "item flex-btw",
  },
  Ba = {
    class: "label text-2",
  },
  Ka = {
    class: "item flex-btw",
  },
  za = {
    class: "label text-2",
  },
  Ga = {
    class: "item flex-btw",
  },
  Ja = {
    class: "label text-2",
  },
  Ha = {
    class: "item flex-btw",
  },
  ja = {
    class: "label text-2",
  },
  Xa = {
    class: "flex-start",
  },
  Ya = {
    class: "text-2 slider-text",
  },
  qa = {
    class: "item select-box flex-btw",
  },
  Qa = {
    class: "label text-2",
  },
  $a = {
    class: "flex-start",
  },
  el = {
    class: "item select-box flex-btw",
  },
  tl = {
    class: "label text-2",
  },
  al = {
    class: "flex-start",
  },
  ll = {
    class: "flex-start flex-nowrap",
  },
  sl = {
    style: {
      "padding-right": "4px",
    },
  },
  il = {
    key: 0,
    class: "item flex-btw",
  },
  nl = {
    class: "label text-2",
  },
  ol = {
    class: "flex-start",
  },
  dl = {
    class: "text-2 slider-text",
  },
  rl = U(
    a({
      __name: "mouseSettings",
      setup(e) {
        const t = J(),
          a = P(),
          l = X(Y.SHOW_CURSOR),
          c = X(Y.MOUSE_CONTROL),
          v = X(Y.SCROLL_RATE),
          m = X(Y.RELATIVE_SENSE),
          C = X(Y.REVERSE_SCROLLING),
          b = X(Y.MOUSE_JIGGLE),
          k = X(Y.IS_ABSOLUTE_MOUSE),
          E = h({
            setMouseJoggleLoading: !1,
            setMouseModeLoading: !1,
          }),
          L = oe() && q.is_mac,
          _ = s({
            get: () => b.value,
            async set(e) {
              (await I(e), (b.value = e));
            },
          }),
          D = Ea(re),
          O = Ea(ce),
          T = s(() => {
            const [e, t] = O.value;
            return (L && (t.disabled = !0), [e, t]);
          }),
          I = async (e) => {
            try {
              ((E.setMouseJoggleLoading = !0),
                await le.setHidParams({
                  jiggler: e,
                }),
                (E.setMouseJoggleLoading = !1));
            } catch (t) {
              E.setMouseJoggleLoading = !1;
            }
          },
          F = s({
            get: () => (k.value ? de.ABSOLUTE : de.RELATIVE),
            async set(e) {
              try {
                2 === t.mouseMockCount
                  ? ((E.setMouseModeLoading = !0),
                    await le.setHidParams({
                      mouse_output: e === de.ABSOLUTE ? "usb" : "usb_rel",
                    }),
                    (k.value = e === de.ABSOLUTE),
                    Lt.success(R("common.settingSuccess")),
                    (E.setMouseModeLoading = !1))
                  : 1 === t.mouseMockCount &&
                    ((l = e === de.ABSOLUTE),
                    pe({
                      title: "common.info",
                      centered: !0,
                      content: "settings.rebootMouseModeTip",
                      okText: R("main.reboot"),
                      onOk: async () => {
                        try {
                          ((E.setMouseModeLoading = !0),
                            await a.setSystemParams({
                              absolute_mouse: l,
                            }),
                            await le.requestReboot(),
                            (k.value = l),
                            Lt.success(R("main.rebootSuccess")),
                            ie().setHeartbeatLost(!0),
                            (E.setMouseModeLoading = !1));
                        } catch (e) {
                          throw (
                            (E.setMouseModeLoading = !1),
                            Lt.error(R("main.rebootFailed")),
                            new Error(null == e ? void 0 : e.toString())
                          );
                        }
                      },
                      onCancel: () => {
                        E.setMouseModeLoading = !1;
                      },
                    }));
              } catch (s) {
                ((E.setMouseModeLoading = !1), new ue(s));
              }
              var l;
            },
          });
        S(() => {
          I(b.value);
        });
        let A = !1;
        return (
          x(
            () => t.mouseMockCount,
            (e) => {
              var a, l;
              if (2 === e && !A) {
                if (
                  (null == (l = null == (a = t.hidState) ? void 0 : a.mouse)
                    ? void 0
                    : l.absolute) === k.value
                )
                  return;
                (le.setHidParams({
                  mouse_output: k.value ? "usb" : "usb_rel",
                }),
                  (A = !0));
              }
            },
          ),
          (e, a) => {
            const s = f("GlSvg");
            return (
              i(),
              n(
                w,
                null,
                [
                  r("div", Na, [
                    r("div", Ba, p(e.$t("settings.mouse")), 1),
                    o(
                      u(Dt),
                      {
                        size: "small",
                        checked: u(c),
                        "onUpdate:checked":
                          a[0] || (a[0] = (e) => (M(c) ? (c.value = e) : null)),
                      },
                      null,
                      8,
                      ["checked"],
                    ),
                  ]),
                  u(c)
                    ? (i(),
                      n(
                        w,
                        {
                          key: 0,
                        },
                        [
                          r("div", Ka, [
                            r(
                              "div",
                              za,
                              p(e.$t("settings.showLocalCursor")),
                              1,
                            ),
                            o(
                              u(Dt),
                              {
                                size: "small",
                                checked: u(l),
                                "onUpdate:checked":
                                  a[1] ||
                                  (a[1] = (e) => (M(l) ? (l.value = e) : null)),
                              },
                              null,
                              8,
                              ["checked"],
                            ),
                          ]),
                          r("div", Ga, [
                            r("div", Ja, p(e.$t("settings.mouseJiggle")), 1),
                            o(
                              u(Dt),
                              {
                                loading: E.setMouseJoggleLoading,
                                size: "small",
                                checked: _.value,
                                "onUpdate:checked":
                                  a[2] || (a[2] = (e) => (_.value = e)),
                              },
                              null,
                              8,
                              ["loading", "checked"],
                            ),
                          ]),
                          r("div", Ha, [
                            r("div", ja, p(e.$t("settings.scrollRate")), 1),
                            r("div", Xa, [
                              o(
                                u(Ot),
                                {
                                  class: "slider",
                                  min: 1,
                                  size: "small",
                                  max: 25,
                                  value: u(v),
                                  "onUpdate:value":
                                    a[3] ||
                                    (a[3] = (e) =>
                                      M(v) ? (v.value = e) : null),
                                },
                                null,
                                8,
                                ["value"],
                              ),
                              r("span", Ya, p(u(v)), 1),
                            ]),
                          ]),
                          r("div", qa, [
                            r(
                              "div",
                              Qa,
                              p(e.$t("settings.reverseScrolling")),
                              1,
                            ),
                            r("div", $a, [
                              o(
                                u(_t),
                                {
                                  size: "small",
                                  popupClassName: "scroll-setting",
                                  style: {
                                    width: "140px",
                                  },
                                  value: u(C),
                                  "onUpdate:value":
                                    a[4] ||
                                    (a[4] = (e) =>
                                      M(C) ? (C.value = e) : null),
                                  options: u(D),
                                },
                                null,
                                8,
                                ["value", "options"],
                              ),
                            ]),
                          ]),
                          r("div", el, [
                            r("div", tl, p(e.$t("settings.mouseMode")), 1),
                            r("div", al, [
                              o(
                                u(_t),
                                {
                                  size: "small",
                                  popupClassName: u(L)
                                    ? "mouse-mode-setting"
                                    : null,
                                  style: {
                                    width: "140px",
                                  },
                                  loading: E.setMouseModeLoading,
                                  value: F.value,
                                  "onUpdate:value":
                                    a[5] || (a[5] = (e) => (F.value = e)),
                                  options: T.value,
                                },
                                {
                                  option: d((t) => [
                                    r("div", ll, [
                                      r("span", sl, p(t.label), 1),
                                      u(L) && t.value === u(de).RELATIVE
                                        ? (i(),
                                          g(
                                            u(St),
                                            {
                                              key: 0,
                                              title: e.$t(
                                                "settings.macClientDoesNotSupportRelative",
                                              ),
                                            },
                                            {
                                              default: d(() => [
                                                o(s, {
                                                  name: "gl-kvm-info-thin",
                                                }),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["title"],
                                          ))
                                        : y("", !0),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                [
                                  "popupClassName",
                                  "loading",
                                  "value",
                                  "options",
                                ],
                              ),
                            ]),
                          ]),
                          u(t).mouseAbsolute
                            ? y("", !0)
                            : (i(),
                              n("div", il, [
                                r(
                                  "div",
                                  nl,
                                  p(e.$t("settings.relativeSense")),
                                  1,
                                ),
                                r("div", ol, [
                                  o(
                                    u(Ot),
                                    {
                                      class: "slider",
                                      size: "small",
                                      min: 1,
                                      max: 20,
                                      tipFormatter: (e) =>
                                        `${(e / 10).toFixed(1)}`,
                                      value: u(m),
                                      "onUpdate:value":
                                        a[6] ||
                                        (a[6] = (e) =>
                                          M(m) ? (m.value = e) : null),
                                    },
                                    null,
                                    8,
                                    ["tipFormatter", "value"],
                                  ),
                                  r("span", dl, p(u(m) / 10), 1),
                                ]),
                              ])),
                        ],
                        64,
                      ))
                    : y("", !0),
                ],
                64,
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-56295705"]],
  ),
  cl = {
    class: "label text-2",
  },
  ul = {
    class: "label text-2",
  },
  pl = {
    class: "mute-checkbox",
  },
  vl = {
    class: "text-2",
  },
  ml = U(
    a({
      __name: "audioSettings",
      setup(e) {
        const { kvmStore: t, systemStore: a } = Z(),
          l = s({
            get: () => t.configState.volumeOn,
            set(e) {
              t.setVolumeOn(e);
            },
          }),
          v = s({
            get: () => a.state.micOn,
            set(e) {
              a.setMicOn(e);
            },
          }),
          m = s(() => (t.isWebrtcMode ? null : R("settings.audioDisabledTip")));
        return (e, s) => (
          i(),
          n(
            w,
            null,
            [
              o(
                u(St),
                {
                  title: m.value,
                },
                {
                  default: d(() => [
                    r(
                      "div",
                      {
                        class: c({
                          "item flex-btw": !0,
                          "audio-disabled": !u(t).isWebrtcMode,
                        }),
                      },
                      [
                        r("div", cl, p(e.$t("settings.speaker")), 1),
                        o(
                          u(Dt),
                          {
                            disabled: !u(t).isWebrtcMode,
                            size: "small",
                            checked: l.value,
                            "onUpdate:checked":
                              s[0] || (s[0] = (e) => (l.value = e)),
                          },
                          null,
                          8,
                          ["disabled", "checked"],
                        ),
                      ],
                      2,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["title"],
              ),
              o(
                u(St),
                {
                  title: m.value,
                },
                {
                  default: d(() => [
                    r(
                      "div",
                      {
                        class: c({
                          "item flex-btw": !0,
                          "audio-disabled": !u(t).isWebrtcMode,
                        }),
                      },
                      [
                        r("div", ul, p(e.$t("settings.mic")), 1),
                        o(
                          u(Dt),
                          {
                            disabled: !u(t).isWebrtcMode,
                            size: "small",
                            checked: v.value,
                            "onUpdate:checked":
                              s[1] || (s[1] = (e) => (v.value = e)),
                          },
                          null,
                          8,
                          ["disabled", "checked"],
                        ),
                      ],
                      2,
                    ),
                    r("div", pl, [
                      v.value
                        ? (i(),
                          g(
                            u(Tt),
                            {
                              key: 0,
                              checked: u(a).state.micMuted,
                              "onUpdate:checked":
                                s[2] ||
                                (s[2] = (e) => (u(a).state.micMuted = e)),
                            },
                            {
                              default: d(() => [
                                r("span", vl, p(e.$t("settings.mute")), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["checked"],
                          ))
                        : y("", !0),
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["title"],
              ),
            ],
            64,
          )
        );
      },
    }),
    [["__scopeId", "data-v-8001ff91"]],
  ),
  fl = {
    class: "remote-device-setting",
  },
  hl = U(
    a({
      __name: "remoteDeviceSettings",
      setup(e) {
        const t = ve();
        return (e, a) => (
          i(),
          n("div", fl, [
            o(
              va,
              {
                title: "settings.remoteDeviceSettings",
              },
              {
                default: d(() => [
                  u(t).isWebrtcMode
                    ? (i(),
                      n(
                        w,
                        {
                          key: 0,
                        },
                        [
                          u(t).isWebrtcMode
                            ? (i(),
                              g(ml, {
                                key: 0,
                              }))
                            : y("", !0),
                          o(Ht, {
                            horizontal: "",
                            gutter: 12,
                            secondary: "",
                          }),
                        ],
                        64,
                      ))
                    : y("", !0),
                  o(Za),
                  o(Ht, {
                    horizontal: "",
                    gutter: 12,
                    secondary: "",
                  }),
                  o(rl),
                ]),
                _: 1,
              },
            ),
          ])
        );
      },
    }),
    [["__scopeId", "data-v-e7250201"]],
  ),
  gl = {
    style: {
      "padding-right": "8px",
    },
  },
  Cl = {
    class: "flex-end",
  },
  yl = {
    class: "flex-start flex-nowrap full-height",
  },
  wl = {
    class: "select-option-label",
  },
  bl = {
    class: "flex-end",
  },
  kl = {
    style: {
      width: "292px",
    },
    class: "content",
  },
  xl = {
    class: "flex-end",
  },
  Ml = {
    class: "flex-end",
  },
  Sl = U(
    a({
      __name: "customDeviceIdentity",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = e,
          c = t,
          v = l(),
          m = P(),
          b = Ea(fe),
          k = s({
            get: () => a.open,
            set: (e) => c("update:open", e),
          }),
          x = [
            "otg_vendor_id",
            "otg_product_id",
            "otg_manufacturer",
            "otg_product",
            "otg_serial",
          ],
          M = () => {
            try {
              const e = m.currentEDIDEnum,
                t = m.currentVendorEnum,
                {
                  otg_vendor_id: a,
                  otg_product_id: l,
                  otg_manufacturer: s,
                  otg_product: i,
                  otg_serial: n,
                } = m.state.systemParams,
                o = t === me.CUSTOM;
              return {
                edid: e,
                customizeEDID: e === N.CUSTOMIZE ? m.state.EDID : "",
                vendor: t,
                otg_vendor_id: o ? a : "",
                otg_product_id: o ? l : "",
                otg_manufacturer: o ? s : "",
                otg_product: o ? i : "",
                otg_serial: o ? (n === he ? "" : n) : "",
              };
            } catch (e) {
              return null;
            }
          },
          S = h({
            formModel: M(),
          }),
          L = s(() => {
            const e = {
              edid: [
                {
                  required: !0,
                  message: R("system.selectEdid"),
                },
              ],
              vendor: [
                {
                  required: !0,
                  message: R("system.selectUsbDevice"),
                },
              ],
            };
            S.formModel.edid === N.CUSTOMIZE &&
              (e.customizeEDID = [
                {
                  required: !0,
                  message: R("settings.inputSettings"),
                },
              ]);
            const t = {
              required: !0,
              message: R("settings.inputSettings"),
            };
            return (
              S.formModel.vendor === me.CUSTOM &&
                ((e.otg_vendor_id = t),
                (e.otg_product_id = t),
                (e.otg_manufacturer = t),
                (e.otg_product = t)),
              e
            );
          }),
          _ = s(() =>
            G.map((e) =>
              e.value === N.CUSTOMIZE && m.currentEDIDEnum === N.CUSTOMIZE
                ? {
                    label: `${R(e.label)}(${J().resolutionTextOnly})`,
                    value: e.value,
                  }
                : {
                    label: R(e.label),
                    value: e.value,
                  },
            ),
          ),
          D = s(() => {
            try {
              let e = null,
                t = null;
              const {
                customizeEDID: a,
                otg_manufacturer: l,
                otg_product: s,
                otg_product_id: i,
                otg_serial: n,
                otg_vendor_id: o,
                edid: d,
                vendor: r,
              } = S.formModel;
              return (
                (e = d === N.CUSTOMIZE ? a : z.get(d)),
                (t =
                  r === me.CUSTOM
                    ? {
                        otg_vendor_id: o,
                        otg_product_id: i,
                        otg_serial: n,
                        otg_manufacturer: l,
                        otg_product: s,
                      }
                    : ge.get(r)),
                {
                  edidParams: e,
                  vendorParams: t,
                }
              );
            } catch (e) {
              return null;
            }
          }),
          O = async (e) => {
            var t;
            try {
              const a =
                S.formModel.vendor !== m.currentVendorEnum ||
                S.formModel.vendor === me.CUSTOM;
              await (null == (t = v.value) ? void 0 : t.validateFields());
              const { edidParams: l, vendorParams: s } = D.value;
              if ((s.otg_serial || (s.otg_serial = he), a))
                return void pe({
                  title: "common.info",
                  content: R("system.setSystemConfigRebootTip"),
                  async onOk() {
                    try {
                      (await m.setSystemParams(s),
                        await m.setEDID(l, !1),
                        await le.requestReboot(),
                        ie().setHeartbeatLost(!0),
                        Lt.success(R("common.settingSuccess")),
                        e(!0));
                    } catch (t) {
                      throw (
                        Lt.error(R("common.settingFailed")),
                        e(!1),
                        new Error(null == t ? void 0 : t.toString())
                      );
                    }
                  },
                  onCancel() {
                    e(!1);
                  },
                });
              (await m.setSystemParams(s),
                await m.setEDID(l, !1),
                Lt.success(R("common.settingSuccess")),
                e(!0));
            } catch (a) {
              (log(a), new ue(a), e(!1));
            }
          },
          T = () => {
            var e;
            (null == (e = v.value) || e.resetFields(), (S.formModel = M()));
          };
        return (e, t) => {
          const a = f("BaseInfo"),
            l = f("GlSvg"),
            s = f("BaseModal");
          return (
            i(),
            g(
              s,
              {
                onOpen: T,
                title: e.$t("system.customDevice"),
                open: k.value,
                "onUpdate:open": t[3] || (t[3] = (e) => (k.value = e)),
                showClose: !1,
                width: 440,
                beforeOk: O,
                contentStyle: {
                  maxHeight: "calc(100vh - 120px)",
                },
              },
              {
                default: d(() => [
                  r("div", gl, [
                    o(a, null, {
                      default: d(() => [
                        C(p(e.$t("system.customDeviceTip")), 1),
                      ]),
                      _: 1,
                    }),
                    S.formModel
                      ? (i(),
                        g(
                          u(It),
                          {
                            key: 0,
                            requiredMark: !1,
                            class: "custom-device-identity-form",
                            ref_key: "formRef",
                            ref: v,
                            rules: L.value,
                            model: S.formModel,
                            layout: "horizontal",
                            colon: !1,
                          },
                          {
                            default: d(() => [
                              o(
                                u(Ft),
                                {
                                  label: e.$t("system.display"),
                                  name: "edid",
                                },
                                {
                                  default: d(() => [
                                    r("div", Cl, [
                                      o(
                                        u(_t),
                                        {
                                          placeholder:
                                            e.$t("system.selectEdid"),
                                          options: _.value,
                                          style: {
                                            width: "292px",
                                          },
                                          value: S.formModel.edid,
                                          "onUpdate:value":
                                            t[0] ||
                                            (t[0] = (e) =>
                                              (S.formModel.edid = e)),
                                        },
                                        {
                                          option: d((t) => [
                                            r("div", yl, [
                                              r("span", wl, p(t.label), 1),
                                              o(
                                                u(St),
                                                {
                                                  title: e.$t(
                                                    "settings.noAudioEdid",
                                                  ),
                                                },
                                                {
                                                  default: d(() => [
                                                    u(B)(t.value)
                                                      ? (i(),
                                                        g(l, {
                                                          key: 0,
                                                          class:
                                                            "no-audio-icon",
                                                          size: 18,
                                                          name: "gl-kvm-sound-off",
                                                        }))
                                                      : y("", !0),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["title"],
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["placeholder", "options", "value"],
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["label"],
                              ),
                              S.formModel.edid === u(N).CUSTOMIZE
                                ? (i(),
                                  g(
                                    u(Ft),
                                    {
                                      key: 0,
                                      name: "customizeEDID",
                                      label: e.$t("system.customEdid"),
                                    },
                                    {
                                      default: d(() => [
                                        r("div", bl, [
                                          r("div", kl, [
                                            o(
                                              u(Et),
                                              {
                                                rows: 3,
                                                value:
                                                  S.formModel.customizeEDID,
                                                "onUpdate:value":
                                                  t[1] ||
                                                  (t[1] = (e) =>
                                                    (S.formModel.customizeEDID =
                                                      e)),
                                                row: "",
                                                placeholder: e.$t(
                                                  "settings.inputSettings",
                                                ),
                                              },
                                              null,
                                              8,
                                              ["value", "placeholder"],
                                            ),
                                          ]),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["label"],
                                  ))
                                : y("", !0),
                              o(
                                u(Ft),
                                {
                                  label: e.$t("settings.usbDevice"),
                                  name: "vendor",
                                },
                                {
                                  default: d(() => [
                                    r("div", xl, [
                                      o(
                                        u(_t),
                                        {
                                          placeholder: e.$t(
                                            "system.selectUsbDevice",
                                          ),
                                          style: {
                                            width: "292px",
                                          },
                                          value: S.formModel.vendor,
                                          "onUpdate:value":
                                            t[2] ||
                                            (t[2] = (e) =>
                                              (S.formModel.vendor = e)),
                                          options: u(b),
                                        },
                                        null,
                                        8,
                                        ["placeholder", "value", "options"],
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["label"],
                              ),
                              S.formModel.vendor === u(me).CUSTOM
                                ? (i(),
                                  n(
                                    w,
                                    {
                                      key: 1,
                                    },
                                    E(x, (t) =>
                                      o(
                                        u(Ft),
                                        {
                                          key: t,
                                          label: e.$t("system." + t),
                                          name: t,
                                        },
                                        {
                                          default: d(() => [
                                            r("div", Ml, [
                                              o(
                                                u(At),
                                                {
                                                  style: {
                                                    width: "292px",
                                                  },
                                                  value: S.formModel[t],
                                                  "onUpdate:value": (e) =>
                                                    (S.formModel[t] = e),
                                                  placeholder: e.$t(
                                                    "system." + t + "Tip",
                                                  ),
                                                },
                                                null,
                                                8,
                                                [
                                                  "value",
                                                  "onUpdate:value",
                                                  "placeholder",
                                                ],
                                              ),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["label", "name"],
                                      ),
                                    ),
                                    64,
                                  ))
                                : y("", !0),
                            ]),
                            _: 1,
                          },
                          8,
                          ["rules", "model"],
                        ))
                      : y("", !0),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["title", "open"],
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-4ef968e0"]],
  ),
  El = {
    class: "flex-btw flex-nowrap item",
  },
  Ll = {
    class: "label text-2 flex-start",
  },
  _l = {
    class: "flex-btw",
  },
  Dl = {
    class: "flex-btw flex-nowrap item",
  },
  Ol = {
    class: "label text-2",
  },
  Tl = {
    class: "flex-btw flex-nowrap item",
  },
  Il = {
    class: "label text-2",
  },
  Fl = {
    key: 0,
    class: "flex-btw flex-nowrap item",
  },
  Al = {
    class: "label text-2",
  },
  Vl = {
    class: "flex-btw flex-nowrap item",
  },
  Ul = {
    class: "label text-2",
  },
  Pl = U(
    a({
      __name: "systemSettings",
      setup(e) {
        const { systemStore: t, appStore: a, userStore: c } = Z(),
          { currentLang: v } = H(),
          h = Ea(ye),
          b = Ea(we),
          k = X(Y.LANGUAGE),
          x = l(!1),
          M = l(!1),
          S = l(!1),
          _ = l(!0),
          D = s({
            get: () => v.value,
            set(e) {
              ((k.value = e), c.setLanguage(e));
            },
          }),
          O = s({
            get: () => a.themeMode,
            set(e) {
              a.setThemeMode(e);
            },
          }),
          T = () => {
            setTimeout(() => {
              ((_.value = !1),
                L(() => {
                  _.value = !0;
                }));
            }, 200);
          },
          I = s({
            get: () => t.currentDeviceIdentity,
            set(e) {
              (T(),
                e === be.CUSTOM
                  ? ((M.value = !1), (S.value = !0))
                  : pe({
                      title: "common.info",
                      content: R("system.setSystemConfigRebootTip"),
                      async onOk() {
                        try {
                          (await t.setDeviceIdentityType(e),
                            await le.requestReboot(),
                            ie().setHeartbeatLost(!0));
                        } catch (a) {
                          throw new Error(null == a ? void 0 : a.toString());
                        }
                      },
                    }));
            },
          }),
          F = s({
            get() {
              var e;
              return null == (e = t.state.systemTimeInfo)
                ? void 0
                : e.time_zone;
            },
            set(e) {
              t.setSystemTime({
                time_zone: e,
              });
            },
          }),
          A = ({ key: e }) => {
            ((I.value = e), (M.value = !1));
          },
          V = async () => {
            try {
              ke({
                content: "main.resetDeviceTip",
                async onOk() {
                  (await le.resetDevice(),
                    Lt.success(R("main.resetDeviceSuccess")),
                    ie().setHeartbeatLost(!0));
                },
              });
            } catch (e) {
              new ue(e);
            }
          },
          U = () => {
            ((S.value = !0), (M.value = !1), T());
          };
        return (e, a) => {
          const l = f("GlSvg"),
            s = f("BaseButton");
          return (
            i(),
            g(
              va,
              {
                title: "settings.system",
              },
              {
                default: d(() => [
                  r("div", El, [
                    r("div", Ll, [
                      r("span", null, p(e.$t("settings.deviceIdentity")), 1),
                      o(
                        wa,
                        {
                          title: e.$t("settings.identityTip"),
                          placement: "topRight",
                        },
                        null,
                        8,
                        ["title"],
                      ),
                    ]),
                    _.value
                      ? (i(),
                        g(
                          u(_t),
                          {
                            key: 0,
                            open: M.value,
                            onDropdownVisibleChange:
                              a[0] || (a[0] = (e) => (M.value = e)),
                            popupClassName: "device-identity-setting",
                            loading: u(t).deviceIdentitySetting,
                            disabled: u(t).deviceIdentitySetting,
                            style: {
                              width: "140px",
                            },
                            options: u(b),
                            value: I.value,
                            "onUpdate:value":
                              a[1] || (a[1] = (e) => (I.value = e)),
                          },
                          {
                            dropdownRender: d(() => [
                              o(
                                u(Vt),
                                {
                                  class: "identity-select-menu",
                                  onSelect: A,
                                  style: {
                                    "border-inline-end": "none",
                                    padding: "0px",
                                  },
                                  selectedKeys: [I.value],
                                },
                                {
                                  default: d(() => [
                                    (i(!0),
                                    n(
                                      w,
                                      null,
                                      E(
                                        u(b),
                                        (t) => (
                                          i(),
                                          n(
                                            "div",
                                            {
                                              key: t.value,
                                            },
                                            [
                                              t.value === u(be).CUSTOM
                                                ? (i(),
                                                  g(Ht, {
                                                    key: 0,
                                                    secondary: "",
                                                    horizontal: "",
                                                  }))
                                                : y("", !0),
                                              (i(),
                                              g(
                                                u(Ut),
                                                {
                                                  key: t.value,
                                                  style: {
                                                    height: "36px",
                                                    "line-height": "36px",
                                                    padding: "0px 12px",
                                                    margin: "0",
                                                    width: "100%",
                                                  },
                                                },
                                                {
                                                  default: d(() => [
                                                    r("div", _l, [
                                                      r(
                                                        "span",
                                                        null,
                                                        p(t.label),
                                                        1,
                                                      ),
                                                      o(
                                                        u(St),
                                                        {
                                                          title: e.$t(
                                                            "settings.customSettings",
                                                          ),
                                                        },
                                                        {
                                                          default: d(() => [
                                                            t.value ===
                                                              u(be).CUSTOM &&
                                                            I.value ===
                                                              u(be).CUSTOM
                                                              ? (i(),
                                                                n(
                                                                  "div",
                                                                  {
                                                                    key: 0,
                                                                    onClick: m(
                                                                      U,
                                                                      ["stop"],
                                                                    ),
                                                                    class:
                                                                      "icon-container flex pointer",
                                                                  },
                                                                  [
                                                                    o(l, {
                                                                      size: 20,
                                                                      primary:
                                                                        "",
                                                                      name: "gl-kvm-setup",
                                                                    }),
                                                                  ],
                                                                ))
                                                              : y("", !0),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["title"],
                                                      ),
                                                    ]),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024,
                                              )),
                                            ],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["selectedKeys"],
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["open", "loading", "disabled", "options", "value"],
                        ))
                      : y("", !0),
                  ]),
                  r("div", Dl, [
                    r("div", Ol, p(e.$t("settings.language")), 1),
                    o(
                      u(_t),
                      {
                        loading: u(c).settingLanguage,
                        style: {
                          width: "140px",
                        },
                        options: u(la),
                        value: D.value,
                        "onUpdate:value": a[2] || (a[2] = (e) => (D.value = e)),
                      },
                      null,
                      8,
                      ["loading", "options", "value"],
                    ),
                  ]),
                  r("div", Tl, [
                    r("div", Il, p(e.$t("settings.colorMode")), 1),
                    o(
                      u(_t),
                      {
                        style: {
                          width: "140px",
                        },
                        options: u(h),
                        value: O.value,
                        "onUpdate:value": a[3] || (a[3] = (e) => (O.value = e)),
                      },
                      null,
                      8,
                      ["options", "value"],
                    ),
                  ]),
                  null !== F.value
                    ? (i(),
                      n("div", Fl, [
                        r("div", Al, p(e.$t("settings.timezoneSet")), 1),
                        o(
                          u(_t),
                          {
                            popupClassName: "timezone-setting",
                            loading: u(t).state.systemTimeSetting,
                            style: {
                              width: "140px",
                            },
                            options: u(Ce),
                            value: F.value,
                            "onUpdate:value":
                              a[4] || (a[4] = (e) => (F.value = e)),
                          },
                          null,
                          8,
                          ["loading", "options", "value"],
                        ),
                      ]))
                    : y("", !0),
                  r("div", Vl, [
                    r("div", Ul, p(e.$t("settings.resetKVM")), 1),
                    o(
                      s,
                      {
                        onClick: V,
                        loading: x.value,
                      },
                      {
                        default: d(() => [C(p(e.$t("settings.reset")), 1)]),
                        _: 1,
                      },
                      8,
                      ["loading"],
                    ),
                  ]),
                  o(
                    Sl,
                    {
                      open: S.value,
                      "onUpdate:open": a[5] || (a[5] = (e) => (S.value = e)),
                    },
                    null,
                    8,
                    ["open"],
                  ),
                ]),
                _: 1,
              },
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-b63e1831"]],
  ),
  Wl = {
    class: "paste-board",
  },
  Rl = {
    class: "input-box",
  },
  Zl = U(
    a({
      __name: "pasteboardBox",
      setup(e) {
        const t = l(),
          a = X(Y.KEYMAP),
          s = h({
            text: "",
            loading: !1,
          }),
          c = async () => {
            var e, l;
            if (s.text)
              try {
                ((s.loading = !0),
                  await le.pasteToRemote(s.text, a.value),
                  (s.loading = !1),
                  (s.text = ""),
                  null == (e = t.value) || e.handleClose());
              } catch (i) {
                (416 === (null == (l = i.response) ? void 0 : l.status)
                  ? Lt.error(R("main.pasteTextTooMany"))
                  : Lt.error(R("main.pasteFailed")),
                  (s.loading = !1));
              }
            else Lt.error(R("main.pasteTextTip"));
          };
        return (e, t) => {
          const l = f("BaseDropdownSelect");
          return (
            i(),
            g(
              va,
              {
                title: "common.pasteboard",
              },
              {
                titleRight: d(({ opened: e }) => [
                  e
                    ? (i(),
                      n(
                        "div",
                        {
                          key: 0,
                          onClick: t[1] || (t[1] = m(() => {}, ["stop"])),
                        },
                        [
                          o(
                            l,
                            {
                              value: u(a),
                              "onUpdate:value":
                                t[0] ||
                                (t[0] = (e) => (M(a) ? (a.value = e) : null)),
                              options: u(xe),
                            },
                            null,
                            8,
                            ["value", "options"],
                          ),
                        ],
                      ))
                    : y("", !0),
                ]),
                default: d(() => [
                  r("div", Wl, [
                    r("div", Rl, [
                      o(
                        u(Et),
                        {
                          style: {
                            "max-height": "400px",
                          },
                          placeholder: e.$t("main.pasteTextTip"),
                          rows: 8,
                          value: s.text,
                          "onUpdate:value":
                            t[2] || (t[2] = (e) => (s.text = e)),
                        },
                        null,
                        8,
                        ["placeholder", "value"],
                      ),
                    ]),
                    o(
                      u(Pt),
                      {
                        loading: s.loading,
                        shape: "round",
                        size: "small",
                        class: "full-width",
                        onClick: c,
                      },
                      {
                        default: d(() => [C(p(e.$t("main.pasteToDevice")), 1)]),
                        _: 1,
                      },
                      8,
                      ["loading"],
                    ),
                  ]),
                ]),
                _: 1,
              },
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-e9931f16"]],
  ),
  Nl = {
    class: "modify-shortcut",
  },
  Bl = {
    class: "item flex-btw bordered",
  },
  Kl = {
    class: "flex text-ellipsis",
  },
  zl = {
    class: "flex drag-icon",
  },
  Gl = {
    class: "label text-ellipsis",
  },
  Jl = {
    class: "flex del-icon",
  },
  Hl = U(
    a({
      __name: "modifyShortcuts",
      emits: ["addShortcut"],
      setup(e, { expose: t, emit: a }) {
        const v = l(),
          m = a,
          { value: h, setConfig: C } = Me(Y.SHORTCUTS),
          b = l([]),
          k = s(() => {
            var e;
            return (null == (e = h.value) ? void 0 : e.length) >= Se;
          }),
          M = () => {
            m("addShortcut");
          };
        S(async () => {
          (await L(),
            da.create(v.value.$el, {
              animation: 300,
              handle: ".drag-icon",
              draggable: ".draggable",
              dragClass: "drag-active",
              forceFallback: !0,
              onEnd: ({ oldIndex: e, newIndex: t }) => {
                const a = [...b.value],
                  l = a.splice(e - 1, 1)[0];
                (a.splice(t - 1, 0, l), (b.value = a));
              },
            }));
        });
        return (
          t({
            handleOk: async () => await C(b.value),
          }),
          x(
            () => h.value,
            (e) => {
              (null == e ? void 0 : e.length) && (b.value = sa(e));
            },
            {
              immediate: !0,
            },
          ),
          (e, t) => {
            const a = f("BaseButton"),
              l = f("GlSvg");
            return (
              i(),
              n("div", Nl, [
                o(
                  u(Rt),
                  {
                    ref_key: "containerRef",
                    ref: v,
                    id: "row-id",
                    gutter: [12, 10],
                  },
                  {
                    default: d(() => [
                      o(
                        u(Wt),
                        {
                          span: 12,
                        },
                        {
                          default: d(() => [
                            o(
                              u(St),
                              {
                                title:
                                  k.value && e.$t("settings.addShortcutEnough"),
                              },
                              {
                                default: d(() => [
                                  o(
                                    a,
                                    {
                                      disabled: k.value,
                                      onClick: M,
                                      class: "full-width add-btn",
                                      style: {
                                        height: "34px",
                                      },
                                      shape: "default",
                                    },
                                    {
                                      default: d(() => [
                                        r(
                                          "span",
                                          {
                                            class: c({
                                              "text-primary": !k.value,
                                            }),
                                          },
                                          p(e.$t("settings.plusAddShortcut")),
                                          3,
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["disabled"],
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["title"],
                            ),
                          ]),
                          _: 1,
                        },
                      ),
                      b.value.length
                        ? (i(!0),
                          n(
                            w,
                            {
                              key: 0,
                            },
                            E(
                              b.value,
                              (e) => (
                                i(),
                                g(
                                  u(Wt),
                                  {
                                    class: "draggable",
                                    key: e.label,
                                    span: 12,
                                  },
                                  {
                                    default: d(() => [
                                      r("div", Bl, [
                                        r("div", Kl, [
                                          r("div", zl, [
                                            o(l, {
                                              size: 16,
                                              color:
                                                "var(--gl-color-text-disabled)",
                                              name: "gl-kvm-drag",
                                              class: "pointer",
                                            }),
                                          ]),
                                          o(
                                            u(St),
                                            {
                                              title: u(Ee)(e),
                                            },
                                            {
                                              default: d(() => [
                                                r("span", Gl, p(u(Ee)(e)), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["title"],
                                          ),
                                        ]),
                                        r("div", Jl, [
                                          o(
                                            l,
                                            {
                                              onClick: (t) => {
                                                return (
                                                  (a = e),
                                                  void (b.value =
                                                    b.value.filter(
                                                      (e) =>
                                                        e.label !== a.label,
                                                    ))
                                                );
                                                var a;
                                              },
                                              size: 16,
                                              color:
                                                "var(--gl-color-text-disabled)",
                                              class: "pointer",
                                              name: "gl-kvm-xmark-solid",
                                            },
                                            null,
                                            8,
                                            ["onClick"],
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                )
                              ),
                            ),
                            128,
                          ))
                        : y("", !0),
                    ]),
                    _: 1,
                  },
                  512,
                ),
              ])
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-58689753"]],
  ),
  jl = {
    class: "text-2",
  },
  Xl = {
    key: 1,
    class: "text-2",
  },
  Yl = U(
    a({
      __name: "baseAlert",
      props: {
        error: {
          type: Boolean,
        },
      },
      setup(e) {
        const t = e;
        return (e, a) => {
          const l = f("GlSvg");
          return (
            i(),
            n(
              "div",
              {
                class: c({
                  "base-alert flex-start": !0,
                  error: t.error,
                }),
              },
              [
                t.error
                  ? (i(),
                    n(
                      w,
                      {
                        key: 0,
                      },
                      [
                        o(l, {
                          class: "error-icon",
                          error: "",
                          name: "gl-kvm-circle-exclamation",
                        }),
                        r("div", jl, [v(e.$slots, "default", {}, void 0, !0)]),
                      ],
                      64,
                    ))
                  : (i(),
                    n("div", Xl, [v(e.$slots, "default", {}, void 0, !0)])),
              ],
              2,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-4406d98a"]],
  ),
  ql = {
    class: "add-shortcut flex flex-nowrap",
  },
  Ql = {
    key: 1,
    class: "multi-operation flex flex-column",
  },
  $l = U(
    a({
      __name: "addShortcut",
      setup(e, { expose: a }) {
        const c = l(),
          v = ie(),
          b = se(),
          { setConfig: k, value: x } = Me(Y.SHORTCUTS),
          M = b.virtualKeyboardFloat || b.virtualKeyboardFixed;
        class T {
          constructor(e = D()) {
            (t(this, "code"), (this.id = e));
          }
          get title() {
            return (
              log("parseKeyboardSingleKeyLabel", this.code, _e(this.code)),
              _e(this.code)
            );
          }
        }
        const I = h({
            inputs: [new T(), new T()],
            lastFocusIndex: null,
          }),
          F = s(() => (e) => ({
            plusOnly: e < I.inputs.length - 1,
            plus: e < 3,
            minus: e > 1,
          })),
          A = () => {
            (b.setVirtualKeyboardStatus(ne.FLOAT), V());
          },
          V = async () => {
            var e;
            const t = I.inputs.findIndex((e) => !e.code);
            -1 !== t && (await ia(300), null == (e = c.value[t]) || e.focus());
          },
          U = async (e) => {
            ("plus" === e ? I.inputs.push(new T()) : I.inputs.pop(), V());
          },
          P = () => {
            M || b.setVirtualKeyboardStatus();
          };
        return (
          S(async () => {
            (await ia(300),
              c.value[0].focus(),
              v.addVirtualKeyboardListener(Le.ADD_SHORTCUTS, async (e) => {
                var t, a;
                if (null !== I.lastFocusIndex)
                  try {
                    ((I.inputs[I.lastFocusIndex].code = e),
                      await ia(150),
                      null ==
                        (a =
                          null == (t = c.value)
                            ? void 0
                            : t[I.lastFocusIndex + 1]) || a.focus());
                  } catch (l) {}
              }));
          }),
          _(() => {
            v.removeVirtualKeyboardListener(Le.ADD_SHORTCUTS);
          }),
          a({
            handleFocus: V,
            handleOk: async () => {
              if (I.inputs.some((e) => !e.code))
                return (Lt.error(R("settings.addShortcutInputEmpty")), !1);
              if (
                x.value.some(
                  (e) => e.keys.join() === I.inputs.map((e) => e.code).join(),
                )
              )
                return (Lt.error(R("settings.shortcutExist")), !1);
              const e = {
                  keys: I.inputs.map((e) => e.code),
                  label: I.inputs.map((e) => e.title).join("+"),
                },
                t = await k([e, ...O(x.value)]);
              return (t && P(), t);
            },
            closeVirtualKeyboard: P,
          }),
          (e, t) => {
            const a = f("BaseButton"),
              l = f("GlSvg");
            return (
              i(),
              n(
                w,
                null,
                [
                  o(Yl, null, {
                    default: d(() => [
                      r("span", null, p(e.$t("settings.addShortcutTip")), 1),
                      o(
                        a,
                        {
                          underline: "",
                          onClick: A,
                          type: "link",
                          noPadding: "",
                        },
                        {
                          default: d(() => [
                            C(p(e.$t("main.virtualKeyboard")), 1),
                          ]),
                          _: 1,
                        },
                      ),
                      r("span", null, p(e.$t("settings.addShortcutTipEnd")), 1),
                    ]),
                    _: 1,
                  }),
                  r("div", ql, [
                    (i(!0),
                    n(
                      w,
                      null,
                      E(
                        I.inputs,
                        (a, s) => (
                          i(),
                          n(
                            "div",
                            {
                              class: "item flex",
                              key: a.id,
                            },
                            [
                              o(
                                u(At),
                                {
                                  ref_for: !0,
                                  ref_key: "inputsRef",
                                  ref: c,
                                  readonly: "",
                                  onFocus: (e) => (I.lastFocusIndex = s),
                                  onKeydown: m(
                                    (e) =>
                                      (async (e, t, a) => {
                                        var l, s;
                                        log("handleKeydown", e.code);
                                        const i = e.code;
                                        ((t.code = i),
                                          e.target.blur(),
                                          await L(),
                                          null ==
                                            (s =
                                              null == (l = c.value)
                                                ? void 0
                                                : l[a + 1]) || s.focus());
                                      })(e, a, s),
                                    ["prevent"],
                                  ),
                                  placeholder: e.$t(
                                    "settings.addShortcutInputPlaceholder",
                                  ),
                                  value: a.title,
                                  class: "input",
                                },
                                {
                                  suffix: d(() => [
                                    a.code
                                      ? (i(),
                                        g(
                                          l,
                                          {
                                            key: 0,
                                            size: 14,
                                            color:
                                              "var(--gl-color-text-disabled)",
                                            name: "gl-kvm-error",
                                            class: "pointer",
                                            onClick: () => {
                                              a.code = void 0;
                                            },
                                          },
                                          null,
                                          8,
                                          ["onClick"],
                                        ))
                                      : y("", !0),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                [
                                  "onFocus",
                                  "onKeydown",
                                  "placeholder",
                                  "value",
                                ],
                              ),
                              F.value(s).plusOnly
                                ? (i(),
                                  g(l, {
                                    key: 0,
                                    size: 16,
                                    name: "gl-kvm-plus",
                                  }))
                                : (i(),
                                  n("div", Ql, [
                                    F.value(s).plus
                                      ? (i(),
                                        n(
                                          "div",
                                          {
                                            key: 0,
                                            onClick:
                                              t[0] || (t[0] = (e) => U("plus")),
                                            class:
                                              "flex operation-icon plus-icon pointer",
                                          },
                                          [
                                            o(l, {
                                              size: 16,
                                              name: "gl-kvm-plus",
                                              color:
                                                "var(--gl-color-text-disabled)",
                                            }),
                                          ],
                                        ))
                                      : y("", !0),
                                    F.value(s).minus
                                      ? (i(),
                                        n(
                                          "div",
                                          {
                                            key: 1,
                                            onClick:
                                              t[1] ||
                                              (t[1] = (e) => U("minus")),
                                            class:
                                              "flex operation-icon minus-icon pointer",
                                          },
                                          [
                                            o(l, {
                                              size: 16,
                                              name: "gl-kvm-minus",
                                              color:
                                                "var(--gl-color-text-disabled)",
                                            }),
                                          ],
                                        ))
                                      : y("", !0),
                                  ])),
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ],
                64,
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-6bc4735b"]],
  ),
  es = new Set(),
  ts = l(new Set()),
  as = class e {
    constructor(e) {
      ((this.el = e), this.init());
    }
    static isControlKey(t) {
      return e.ControlKeys.includes(t);
    }
    get keyboardControl() {
      return X(Y.KEYBOARD_CONTROL).value;
    }
    init() {
      (this.el.addEventListener("keydown", (t) => {
        (t.preventDefault(),
          e.onKeyDownOrUp(t.code || t.key, !0, this.keyboardControl));
      }),
        this.el.addEventListener("keyup", (t) => {
          (t.preventDefault(),
            e.onKeyDownOrUp(t.code || t.key, !1, this.keyboardControl));
        }));
    }
    static onKeyDownOrUp(t, a, l = !0, s = !1) {
      l &&
        (e.sendHidEvent(
          {
            key: t,
            state: a,
          },
          l,
        ),
        this.clearAllPressControlDownKeys(),
        a
          ? es.add(t)
          : (q.is_mac &&
              [De.MetaLeft, De.MetaRight].includes(t) &&
              e.clearAllPressDownKeys(),
            es.delete(t)));
    }
    static clearAllPressDownKeys() {
      for (const t of es)
        e.sendEvent({
          key: t,
          state: !1,
        });
      this.clearAllPressControlDownKeys();
    }
    static clearAllPressControlDownKeys() {
      for (const t of ts.value)
        this.isControlKey(t) &&
          (ts.value.delete(t),
          e.sendEvent({
            key: t,
            state: !1,
          }));
    }
    static isControlKeyDown(t) {
      return !!e.isControlKey(t) && ts.value.has(t);
    }
    static sendShortcutKey(t) {
      [!0, !1].forEach((a) => {
        for (let l = 0; l <= 1; l++)
          (t.forEach((t) => {
            e.sendEvent(
              {
                key: t,
                state: a,
              },
              !0,
            );
          }),
            l++);
      });
    }
    static sendHidEvent(t, a = !0) {
      a && e.sendEvent(t);
    }
    static sendEvent(t, a) {
      if (!ve().keyboardEnabled && !a) return;
      if (t.state) {
        if (e.downedKeys.has(t.key)) return;
        e.downedKeys.add(t.key);
      } else e.downedKeys.has(t.key) && e.downedKeys.delete(t.key);
      const l = J();
      Oe(l.sockets.apiWS, {
        event_type: "key",
        event: t,
      });
    }
  };
(t(as, "ControlKeys", [
  De.ShiftLeft,
  De.ShiftRight,
  De.ControlLeft,
  De.ControlRight,
  De.AltLeft,
  De.AltRight,
  De.MetaLeft,
  De.Win,
]),
  t(as, "downedKeys", new Set()));
let ls = as;
const ss = {
    key: 0,
    class: "flex",
  },
  is = {
    key: 0,
    class: "flex",
  },
  ns = U(
    a({
      __name: "shortcutBox",
      setup(e) {
        const t = l(),
          a = l(),
          r = se(),
          c = ie(),
          { value: v, getting: b } = Me(Y.SHORTCUTS),
          k = h({
            showAll: !1,
            loadingBtn: null,
            modifyOpen: !1,
          }),
          x = s(() => {
            var e;
            return k.showAll
              ? v.value || []
              : (null == (e = v.value) ? void 0 : e.slice(0, 4)) || [];
          }),
          M = () => {
            (c.setAddShortcutOn(!0), (k.modifyOpen = !1));
          },
          S = () => {
            var e;
            (null == (e = a.value) || e.closeVirtualKeyboard(),
              c.setAddShortcutOn(!1));
          },
          L = () => {
            k.showAll = !k.showAll;
          },
          _ = () => {
            k.modifyOpen = !0;
          },
          D = async (e) => {
            e(await t.value.handleOk());
          },
          O = async (e) => {
            e(await a.value.handleOk());
          };
        return (e, l) => {
          const s = f("BaseButton"),
            h = f("BaseModal");
          return (
            i(),
            n(
              w,
              null,
              [
                o(
                  va,
                  {
                    style: {
                      "padding-bottom": "4px",
                    },
                    title: "common.shortcut",
                  },
                  {
                    titleRight: d(({ opened: t }) => {
                      var a, l;
                      return [
                        t
                          ? (i(),
                            n("div", ss, [
                              (null == (a = u(v)) ? void 0 : a.length) > 4
                                ? (i(),
                                  n("div", is, [
                                    t
                                      ? (i(),
                                        g(
                                          s,
                                          {
                                            key: 0,
                                            noPadding: "",
                                            type: "link",
                                            onClick: m(L, ["stop"]),
                                          },
                                          {
                                            default: d(() => [
                                              C(
                                                p(
                                                  e.$t(
                                                    k.showAll
                                                      ? "common.hide"
                                                      : "common.showAll",
                                                  ),
                                                ),
                                                1,
                                              ),
                                            ]),
                                            _: 1,
                                          },
                                        ))
                                      : y("", !0),
                                    t
                                      ? (i(),
                                        g(Ht, {
                                          key: 1,
                                          horizontal: !1,
                                        }))
                                      : y("", !0),
                                  ]))
                                : y("", !0),
                              (null == (l = u(v)) ? void 0 : l.length)
                                ? (i(),
                                  g(
                                    s,
                                    {
                                      key: 1,
                                      noPadding: "",
                                      type: "link",
                                      onClick: m(_, ["stop"]),
                                    },
                                    {
                                      default: d(() => [
                                        C(p(e.$t("common.modify")), 1),
                                      ]),
                                      _: 1,
                                    },
                                  ))
                                : y("", !0),
                            ]))
                          : y("", !0),
                      ];
                    }),
                    default: d(() => [
                      u(b)
                        ? (i(),
                          g(Te, {
                            key: 0,
                            size: 20,
                            block: "",
                          }))
                        : y("", !0),
                      u(b) || x.value.length
                        ? y("", !0)
                        : (i(),
                          g(
                            s,
                            {
                              key: 1,
                              onClick: M,
                              size: "middle",
                              shape: "default",
                              class: "full-width add-shortcut-large",
                            },
                            {
                              default: d(() => [
                                C(p(e.$t("settings.plusAddShortcut")), 1),
                              ]),
                              _: 1,
                            },
                          )),
                      o(
                        u(Rt),
                        {
                          gutter: [12, 12],
                        },
                        {
                          default: d(() => [
                            (i(!0),
                            n(
                              w,
                              null,
                              E(
                                x.value,
                                (e) => (
                                  i(),
                                  g(
                                    u(Wt),
                                    {
                                      span: 12,
                                      key: e.label,
                                    },
                                    {
                                      default: d(() => [
                                        o(
                                          u(St),
                                          {
                                            title: u(Ee)(e),
                                          },
                                          {
                                            default: d(() => [
                                              o(
                                                u(Pt),
                                                {
                                                  size: "small",
                                                  class:
                                                    "full-width shortcut-item flex",
                                                  loading:
                                                    k.loadingBtn === e.label,
                                                  onClick: (t) => {
                                                    return (
                                                      (a = e),
                                                      (k.loadingBtn = a.label),
                                                      setTimeout(() => {
                                                        k.loadingBtn = null;
                                                      }, 500),
                                                      void ls.sendShortcutKey(
                                                        a.keys,
                                                      )
                                                    );
                                                    var a;
                                                  },
                                                },
                                                {
                                                  default: d(() => [
                                                    C(p(u(Ee)(e)), 1),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["loading", "onClick"],
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["title"],
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ),
                u(c).state.addShortcutOn
                  ? y("", !0)
                  : (i(),
                    g(
                      h,
                      {
                        key: 0,
                        title: "settings.modifyShortcuts",
                        open: k.modifyOpen,
                        "onUpdate:open":
                          l[1] || (l[1] = (e) => (k.modifyOpen = e)),
                        destroyOnClose: "",
                        beforeOk: D,
                        contentStyle: {
                          maxHeight: "446px",
                          paddingBottom: "12px",
                        },
                      },
                      {
                        default: d(() => [
                          o(
                            Hl,
                            {
                              ref_key: "modifyRef",
                              ref: t,
                              open: k.modifyOpen,
                              "onUpdate:open":
                                l[0] || (l[0] = (e) => (k.modifyOpen = e)),
                              onAddShortcut: M,
                            },
                            null,
                            8,
                            ["open"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["open"],
                    )),
                o(
                  h,
                  {
                    centered: !u(r).virtualKeyboardFloat,
                    width: 576,
                    title: "settings.addShortcuts",
                    open: u(c).state.addShortcutOn,
                    onClose: S,
                    destroyOnClose: "",
                    beforeOk: O,
                  },
                  {
                    default: d(() => [
                      o(
                        $l,
                        {
                          ref_key: "addShortcutRef",
                          ref: a,
                        },
                        null,
                        512,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["centered", "open"],
                ),
              ],
              64,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-5fb14677"]],
  ),
  os = {
    scanWolDevices: () => Ie.get("/api/wol/scan"),
    wakeWolDevice: (e) =>
      Ie.post("/api/wol/wake", null, {
        params: {
          mac: e,
        },
      }),
    getWolDeviceList: () => Ie.get("/api/wol/list"),
    addWolDevice: (e) =>
      Ie.post("/api/wol/add", null, {
        params: e,
      }),
    removeWolDevice: (e) =>
      Ie.post("/api/wol/remove", null, {
        params: {
          mac: e,
        },
      }),
  },
  ds = T("wakeOnLan", () => {
    const e = h({
        allWolDevices: [],
        getAllDeviceLoading: !1,
        scanWolDevices: [],
        scanWolDevicesLoading: !1,
      }),
      t = s(() => e.allWolDevices.length > 0),
      a = async () => {
        try {
          ((e.getAllDeviceLoading = !0),
            (e.allWolDevices = (await os.getWolDeviceList()).devices),
            (e.getAllDeviceLoading = !1));
        } catch (t) {
          e.getAllDeviceLoading = !1;
        }
      },
      l = s(() =>
        e.scanWolDevices.filter(
          (t) => !e.allWolDevices.some((e) => e.mac === t.mac),
        ),
      );
    return (
      a(),
      {
        state: e,
        getAllDevices: a,
        scanWolDevices: async () => {
          try {
            ((e.scanWolDevicesLoading = !0),
              (e.scanWolDevices = (await os.scanWolDevices()).devices),
              (e.scanWolDevicesLoading = !1));
          } catch (t) {
            e.scanWolDevicesLoading = !1;
          }
        },
        hasDevice: t,
        filteredScanDevices: l,
      }
    );
  }),
  rs = {
    class: "name text-ellipsis",
  },
  cs = U(
    a({
      __name: "wolDeviceItem",
      props: {
        device: {},
        contentWidth: {
          default: 80,
        },
        bordered: {
          type: Boolean,
        },
        showHover: {
          type: Boolean,
        },
        selected: {
          type: Boolean,
        },
      },
      setup(e) {
        const t = e,
          a = h({
            wakeUploading: !1,
          });
        return (e, l) => {
          const s = f("BaseButton");
          return (
            i(),
            n(
              "div",
              {
                class: c({
                  "wol-item flex-btw": !0,
                  bordered: t.bordered,
                  "show-hover": t.showHover,
                  selected: t.selected,
                }),
              },
              [
                r(
                  "div",
                  {
                    style: I(`max-width: calc(100% - ${t.contentWidth}px);`),
                  },
                  [
                    r("div", rs, [
                      o(
                        u(St),
                        {
                          title: t.device.name,
                        },
                        {
                          default: d(() => [
                            r("span", null, p(t.device.name), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["title"],
                      ),
                    ]),
                    r(
                      "div",
                      {
                        class: c({
                          "flex-start content text-2 flex-nowrap": !0,
                          "is-mac": u(q).is_mac,
                        }),
                      },
                      [
                        t.device.ip
                          ? (i(),
                            n(
                              w,
                              {
                                key: 0,
                              },
                              [
                                r("span", null, p(t.device.ip), 1),
                                l[1] ||
                                  (l[1] = r(
                                    "div",
                                    {
                                      class: "divider",
                                    },
                                    null,
                                    -1,
                                  )),
                              ],
                              64,
                            ))
                          : y("", !0),
                        r("span", null, p(t.device.mac), 1),
                      ],
                      2,
                    ),
                  ],
                  4,
                ),
                v(
                  e.$slots,
                  "default",
                  {
                    device: t.device,
                  },
                  () => [
                    o(
                      s,
                      {
                        class: "wake-btn",
                        loading: a.wakeUploading,
                        onClick:
                          l[0] ||
                          (l[0] = (e) =>
                            (async (e) => {
                              try {
                                ((a.wakeUploading = !0),
                                  await os.wakeWolDevice(e),
                                  (a.wakeUploading = !1),
                                  Lt.success(R("wol.wakeSuccess")));
                              } catch (t) {
                                (Lt.error(R("wol.wakeFailed")),
                                  (a.wakeUploading = !1));
                              }
                            })(t.device.mac)),
                      },
                      {
                        default: d(() => [C(p(e.$t("main.wake")), 1)]),
                        _: 1,
                      },
                      8,
                      ["loading"],
                    ),
                  ],
                  !0,
                ),
              ],
              2,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-29a338f6"]],
  ),
  us = a({
    __name: "baseNoData",
    props: {
      height: {
        default: 120,
      },
    },
    setup(e) {
      const t = e;
      return (e, a) => (
        i(),
        n(
          "div",
          {
            class: "no-data flex text-2",
            style: I({
              height: t.height ? t.height + "px" : void 0,
            }),
          },
          [v(e.$slots, "default", {}, () => [C(p(e.$t("common.noData")), 1)])],
          4,
        )
      );
    },
  }),
  ps = {
    key: 0,
    class: "text-2",
  },
  vs = U(
    a({
      __name: "wolAddDeviceManually",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = l(),
          r = e,
          c = t,
          v = ds(),
          m = h({
            formData: {},
            addResult: null,
          }),
          w = s(() => ({
            name: [
              {
                required: !0,
                message: R("wol.deviceNameError"),
                max: 30,
              },
            ],
            mac: [
              {
                validator: (e, t) =>
                  Fe(t) ? Promise.resolve() : Promise.reject(R("wol.macError")),
              },
            ],
          })),
          b = s({
            get: () => r.open,
            set(e) {
              var t;
              (null == (t = a.value) || t.clearValidate(), c("update:open", e));
            },
          }),
          k = async (e) => {
            try {
              (await a.value.validateFields(),
                await os.addWolDevice(m.formData),
                v.getAllDevices(),
                e(!0));
            } catch (t) {
              ((m.addResult = !1), new ue(t), e(!1));
            }
          },
          x = () => {
            var e;
            ((m.formData = {}),
              (m.addResult = void 0),
              null == (e = a.value) || e.clearValidate());
          };
        return (e, t) => {
          const l = f("BaseModal");
          return (
            i(),
            g(
              l,
              {
                onOpen: x,
                beforeOk: k,
                title: "main.addManually",
                open: b.value,
                "onUpdate:open": t[2] || (t[2] = (e) => (b.value = e)),
                width: 480,
                contentStyle: {
                  paddingBottom: "0px",
                },
              },
              {
                default: d(() => [
                  !1 === m.addResult
                    ? (i(),
                      g(
                        Yl,
                        {
                          key: 0,
                          error: "",
                          class: "error-display",
                        },
                        {
                          default: d(() => [
                            C(p(e.$t("wol.addManuallyFailed")), 1),
                          ]),
                          _: 1,
                        },
                      ))
                    : y("", !0),
                  o(
                    u(It),
                    {
                      ref_key: "formRef",
                      ref: a,
                      colon: !1,
                      requiredMark: !1,
                      labelCol: {
                        span: 3,
                      },
                      labelAlign: "left",
                      model: m.formData,
                      rules: w.value,
                    },
                    {
                      default: d(() => [
                        o(
                          u(Ft),
                          {
                            label: u(R)("main.name"),
                            name: "name",
                          },
                          {
                            default: d(() => [
                              o(
                                u(At),
                                {
                                  maxlength: 30,
                                  value: m.formData.name,
                                  "onUpdate:value":
                                    t[0] ||
                                    (t[0] = (e) => (m.formData.name = e)),
                                  placeholder: u(R)("wol.namePlaceholder"),
                                },
                                {
                                  suffix: d(() => {
                                    var e, t, a, l;
                                    return [
                                      (
                                        null ==
                                        (t =
                                          null == (e = m.formData)
                                            ? void 0
                                            : e.name)
                                          ? void 0
                                          : t.length
                                      )
                                        ? (i(),
                                          n(
                                            "span",
                                            ps,
                                            p(
                                              null ==
                                                (l =
                                                  null == (a = m.formData)
                                                    ? void 0
                                                    : a.name)
                                                ? void 0
                                                : l.length,
                                            ) +
                                              " / " +
                                              p(30),
                                            1,
                                          ))
                                        : y("", !0),
                                    ];
                                  }),
                                  _: 1,
                                },
                                8,
                                ["value", "placeholder"],
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["label"],
                        ),
                        o(
                          u(Ft),
                          {
                            label: "Mac",
                            name: "mac",
                          },
                          {
                            default: d(() => [
                              o(
                                u(At),
                                {
                                  value: m.formData.mac,
                                  "onUpdate:value":
                                    t[1] ||
                                    (t[1] = (e) => (m.formData.mac = e)),
                                  placeholder: u(R)("wol.macPlaceholder"),
                                },
                                null,
                                8,
                                ["value", "placeholder"],
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["model", "rules"],
                  ),
                ]),
                _: 1,
              },
              8,
              ["open"],
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-7335b8b4"]],
  ),
  ms = {
    class: "add-wol-device",
  },
  fs = {
    class: "title",
  },
  hs = {
    key: 1,
    class: "content",
  },
  gs = U(
    a({
      __name: "wolAddDevice",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = ds(),
          l = e,
          v = t,
          m = h({
            addManuallyModalOpen: !1,
            selectedDevice: null,
          }),
          C = s({
            get: () => l.open,
            set(e) {
              v("update:open", e);
            },
          }),
          y = () => {
            ((m.addManuallyModalOpen = !0), (C.value = !1));
          },
          b = async () => {
            (a.scanWolDevices(), (m.selectedDevice = null));
          },
          k = async (e) => {
            try {
              (await os.addWolDevice(m.selectedDevice),
                a.getAllDevices(),
                e(!0));
            } catch (t) {
              (new ue(t), e(!1));
            }
          };
        return (e, t) => {
          const l = f("BaseModal");
          return (
            i(),
            n(
              w,
              null,
              [
                o(
                  l,
                  {
                    onOpen: b,
                    beforeOk: k,
                    open: C.value,
                    "onUpdate:open": t[0] || (t[0] = (e) => (C.value = e)),
                    title: "main.addDevice",
                    width: 480,
                    okText: "common.apply",
                    okBtnProps: {
                      disabled: !m.selectedDevice,
                    },
                  },
                  {
                    default: d(() => [
                      r("div", ms, [
                        r("div", fs, [
                          r("span", null, p(e.$t("main.noWolDeviceTip")), 1),
                          r(
                            "a",
                            {
                              onClick: y,
                            },
                            p(e.$t("main.addManually")),
                            1,
                          ),
                        ]),
                      ]),
                      u(a).state.scanWolDevicesLoading
                        ? (i(),
                          g(Te, {
                            key: 0,
                            antdMode: "",
                            block: "",
                            outerHeight: 120,
                            size: 36,
                          }))
                        : u(a).filteredScanDevices.length
                          ? (i(),
                            n("div", hs, [
                              (i(!0),
                              n(
                                w,
                                null,
                                E(u(a).filteredScanDevices, (e, t) => {
                                  var a, l;
                                  return (
                                    i(),
                                    g(
                                      cs,
                                      {
                                        showHover: "",
                                        key: t,
                                        selected:
                                          (null == (a = m.selectedDevice)
                                            ? void 0
                                            : a.mac) === e.mac,
                                        contentWidth: 160,
                                        onClick: (t) => {
                                          return (
                                            (a = e),
                                            void (m.selectedDevice = a)
                                          );
                                          var a;
                                        },
                                        class: c({
                                          "device-container pointer": !0,
                                          selected:
                                            (null == (l = m.selectedDevice)
                                              ? void 0
                                              : l.mac) === e.mac,
                                        }),
                                        device: e,
                                        bordered: "",
                                      },
                                      {
                                        default: d(() => {
                                          var t;
                                          return [
                                            o(
                                              u(Zt),
                                              {
                                                checked:
                                                  (null ==
                                                  (t = m.selectedDevice)
                                                    ? void 0
                                                    : t.mac) === e.mac,
                                              },
                                              null,
                                              8,
                                              ["checked"],
                                            ),
                                          ];
                                        }),
                                        _: 2,
                                      },
                                      1032,
                                      [
                                        "selected",
                                        "onClick",
                                        "class",
                                        "device",
                                      ],
                                    )
                                  );
                                }),
                                128,
                              )),
                            ]))
                          : (i(),
                            g(us, {
                              key: 2,
                            })),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open", "okBtnProps"],
                ),
                o(
                  vs,
                  {
                    open: m.addManuallyModalOpen,
                    "onUpdate:open":
                      t[1] || (t[1] = (e) => (m.addManuallyModalOpen = e)),
                  },
                  null,
                  8,
                  ["open"],
                ),
              ],
              64,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-519cb431"]],
  ),
  Cs = {
    key: 0,
    class: "text-2",
  },
  ys = a({
    __name: "wolEditDevice",
    props: {
      open: {
        type: Boolean,
      },
      device: {},
    },
    emits: ["update:open"],
    setup(e, { emit: t }) {
      const a = l(),
        r = ds(),
        c = e,
        v = t,
        m = h({
          formData: sa(c.device),
        }),
        C = s(() => ({
          name: [
            {
              required: !0,
              message: R("wol.deviceNameError"),
              max: 30,
            },
          ],
        })),
        w = s({
          get: () => c.open,
          set: (e) => {
            v("update:open", e);
          },
        }),
        b = async (e) => {
          try {
            if (
              (await a.value.validateFields(),
              m.formData.name === c.device.name)
            )
              return (e(!1), void Lt.error(R("wol.deviceNameSame")));
            (await os.addWolDevice(m.formData), r.getAllDevices(), e(!0));
          } catch (t) {
            (e(!1), new ue(t));
          }
        };
      return (e, t) => {
        const l = f("BaseModal");
        return (
          i(),
          g(
            l,
            {
              width: 480,
              open: w.value,
              "onUpdate:open": t[1] || (t[1] = (e) => (w.value = e)),
              beforeOk: b,
              title: "main.rename",
            },
            {
              default: d(() => [
                o(
                  u(It),
                  {
                    ref_key: "formRef",
                    ref: a,
                    colon: !1,
                    requiredMark: !1,
                    labelCol: {
                      span: 3,
                    },
                    labelAlign: "left",
                    model: m.formData,
                    rules: C.value,
                  },
                  {
                    default: d(() => [
                      o(
                        u(Ft),
                        {
                          label: e.$t("main.name"),
                          name: "name",
                        },
                        {
                          default: d(() => [
                            o(
                              u(At),
                              {
                                maxlength: 30,
                                value: m.formData.name,
                                "onUpdate:value":
                                  t[0] || (t[0] = (e) => (m.formData.name = e)),
                                placeholder: e.$t("wol.namePlaceholder"),
                              },
                              {
                                suffix: d(() => {
                                  var e, t, a, l;
                                  return [
                                    (
                                      null ==
                                      (t =
                                        null == (e = m.formData)
                                          ? void 0
                                          : e.name)
                                        ? void 0
                                        : t.length
                                    )
                                      ? (i(),
                                        n(
                                          "span",
                                          Cs,
                                          p(
                                            null ==
                                              (l =
                                                null == (a = m.formData)
                                                  ? void 0
                                                  : a.name)
                                              ? void 0
                                              : l.length,
                                          ) +
                                            " / " +
                                            p(30),
                                          1,
                                        ))
                                      : y("", !0),
                                  ];
                                }),
                                _: 1,
                              },
                              8,
                              ["value", "placeholder"],
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["label"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["model", "rules"],
                ),
              ]),
              _: 1,
            },
            8,
            ["open"],
          )
        );
      };
    },
  }),
  ws = {
    key: 1,
    class: "wol-container bordered",
  },
  bs = {
    key: 1,
    class: "device-content",
  },
  ks = {
    class: "flex operation-btn",
  },
  xs = U(
    a({
      __name: "wakeOnLanBox",
      setup(e) {
        const t = ds(),
          a = h({
            modifyModalOpen: !1,
            addModalOpen: !1,
            renameModalOpen: !1,
            onEditDevice: null,
            onDeleteMac: null,
          }),
          l = () => {
            a.modifyModalOpen = !0;
          },
          s = async (e) => {
            (async (e) => {
              ke({
                content: R("wol.deleteDeviceTip"),
                async onOk() {
                  try {
                    ((a.onDeleteMac = e),
                      await os.removeWolDevice(e),
                      (a.onDeleteMac = null),
                      t.getAllDevices(),
                      Lt.success(R("common.deleteSuccess")));
                  } catch (l) {
                    throw (
                      new ue(l).hasError || Lt.error(R("common.deleteError")),
                      (a.onDeleteMac = null),
                      l
                    );
                  }
                },
              });
            })(e.mac);
          },
          c = () => {
            ((a.addModalOpen = !0), (a.modifyModalOpen = !1));
          };
        return (e, v) => {
          const h = f("BaseButton"),
            b = f("BaseModal");
          return (
            i(),
            g(
              va,
              {
                title: "main.wakeOnLan",
              },
              {
                titleRight: d(({ opened: a }) => [
                  a && u(t).hasDevice
                    ? (i(),
                      g(
                        u(Pt),
                        {
                          key: 0,
                          size: "small",
                          type: "link",
                          onClick: m(l, ["stop"]),
                        },
                        {
                          default: d(() => [C(p(e.$t("common.modify")), 1)]),
                          _: 1,
                        },
                      ))
                    : y("", !0),
                ]),
                default: d(() => [
                  u(t).state.getAllDeviceLoading
                    ? (i(),
                      g(Te, {
                        key: 0,
                        outerHeight: 120,
                        antdMode: "",
                        block: "",
                        size: 24,
                      }))
                    : u(t).hasDevice
                      ? (i(),
                        n("div", ws, [
                          (i(!0),
                          n(
                            w,
                            null,
                            E(
                              u(t).state.allWolDevices,
                              (e, t) => (
                                i(),
                                g(
                                  cs,
                                  {
                                    key: t,
                                    device: e,
                                  },
                                  null,
                                  8,
                                  ["device"],
                                )
                              ),
                            ),
                            128,
                          )),
                          r("div", null, [
                            o(
                              u(Pt),
                              {
                                onClick: c,
                                size: "small",
                                type: "link",
                              },
                              {
                                default: d(() => [
                                  C(p(e.$t("main.plusAddDevice")), 1),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                        ]))
                      : (i(),
                        g(
                          h,
                          {
                            key: 2,
                            onClick: c,
                            size: "middle",
                            shape: "default",
                            class: "full-width add-device-large",
                          },
                          {
                            default: d(() => [
                              C(p(e.$t("main.plusAddDevice")), 1),
                            ]),
                            _: 1,
                          },
                        )),
                  o(
                    b,
                    {
                      open: a.modifyModalOpen,
                      "onUpdate:open":
                        v[0] || (v[0] = (e) => (a.modifyModalOpen = e)),
                      title: "main.modifyDevice",
                      width: 480,
                      showFooter: !1,
                      contentStyle: {
                        paddingBottom: 0,
                      },
                    },
                    {
                      default: d(() => [
                        o(
                          u(Pt),
                          {
                            onClick: c,
                            type: "link",
                            class: "full-width add-device-large",
                            size: "large",
                          },
                          {
                            default: d(() => [
                              C(p(e.$t("main.plusAddDevice")), 1),
                            ]),
                            _: 1,
                          },
                        ),
                        u(t).state.getAllDeviceLoading
                          ? (i(),
                            g(Te, {
                              key: 0,
                              outerHeight: 120,
                              antdMode: "",
                              block: "",
                              size: 24,
                            }))
                          : (i(),
                            n("div", bs, [
                              (i(!0),
                              n(
                                w,
                                null,
                                E(
                                  u(t).state.allWolDevices || [],
                                  (t, l) => (
                                    i(),
                                    g(
                                      cs,
                                      {
                                        class: "device-container",
                                        key: l,
                                        contentWidth: 220,
                                        device: t,
                                        bordered: "",
                                      },
                                      {
                                        default: d(({ device: t }) => [
                                          r("div", ks, [
                                            o(
                                              u(Pt),
                                              {
                                                onClick: (e) =>
                                                  (async (e) => {
                                                    ((a.renameModalOpen = !0),
                                                      (a.onEditDevice = e));
                                                  })(t),
                                                size: "small",
                                                shape: "round",
                                              },
                                              {
                                                default: d(() => [
                                                  C(p(e.$t("main.rename")), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["onClick"],
                                            ),
                                            o(
                                              u(Pt),
                                              {
                                                loading:
                                                  a.onDeleteMac === t.mac,
                                                onClick: (e) => s(t),
                                                size: "small",
                                                shape: "round",
                                              },
                                              {
                                                default: d(() => [
                                                  C(
                                                    p(e.$t("common.delete")),
                                                    1,
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["loading", "onClick"],
                                            ),
                                          ]),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["device"],
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ])),
                      ]),
                      _: 1,
                    },
                    8,
                    ["open"],
                  ),
                  o(
                    gs,
                    {
                      open: a.addModalOpen,
                      "onUpdate:open":
                        v[1] || (v[1] = (e) => (a.addModalOpen = e)),
                    },
                    null,
                    8,
                    ["open"],
                  ),
                  a.onEditDevice
                    ? (i(),
                      g(
                        ys,
                        {
                          key: 3,
                          device: a.onEditDevice,
                          open: a.renameModalOpen,
                          "onUpdate:open": [
                            v[2] || (v[2] = (e) => (a.renameModalOpen = e)),
                            v[3] || (v[3] = (e) => (a.onEditDevice = null)),
                          ],
                        },
                        null,
                        8,
                        ["device", "open"],
                      ))
                    : y("", !0),
                ]),
                _: 1,
              },
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-a65e104e"]],
  ),
  Ms = {
    class: "flex-btw",
  },
  Ss = {
    class: "text-2",
  },
  Es = a({
    __name: "terminalBox",
    setup(e) {
      const t = () => {
        if (
          Ae({
            action: "open_webterm",
          })
        )
          return;
        const e = Ve.get(Ue.WEBTERM);
        window.open(e.path, "_blank");
      };
      return (e, a) => (
        i(),
        g(
          va,
          {
            title: "common.terminal",
          },
          {
            default: d(() => [
              r("div", Ms, [
                r("span", Ss, p(e.$t("main.accessTerminal")), 1),
                o(
                  u(Pt),
                  {
                    onClick: t,
                    shape: "round",
                    size: "small",
                  },
                  {
                    default: d(() => [C(p(e.$t("main.access")), 1)]),
                    _: 1,
                  },
                ),
              ]),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  Ls = ["src"],
  _s = {
    key: 1,
  },
  Ds = {
    class: "item flex-btw",
  },
  Os = {
    class: "text-2",
  },
  Ts = {
    class: "item flex-btw",
  },
  Is = {
    class: "text-2",
  },
  Fs = {
    class: "text-2 ask-title",
  },
  As = {
    class: "install-footer",
  },
  Vs = U(
    a({
      __name: "fingerbotControl",
      setup(e) {
        const { setValue: t, getValue: a } = Pe(We.FINGERBOT_PRESS_TIME, 500),
          c = l(),
          v = jt(),
          m = J(),
          f = [new aa(500, "0.5s"), new aa(3e3, "3s"), new aa(8e3, "8s")],
          b = X(Y.FINGERBOT_STRENGTH),
          k = h({
            fixedOptions: [...f],
            customOption: null,
            selectedPressTime: ~~a(),
            pressing: !1,
            askConfirm: !0,
            confirmOpen: !1,
            upgradeModalOpen: !1,
            percent: 0,
            searchValue: "",
          }),
          x = async () => {
            var e;
            try {
              ((k.upgradeModalOpen = !1),
                v.updateFingerbotUpgradingStatus(Yt.UPGRADING));
              const { result: t } = await le.pushFingerbotFirmware();
              t
                ? (v.updateFingerbotUpgradingStatus(Yt.SUCCESS),
                  v.getFingerbotVersion(),
                  null == (e = c.value) || e.handleReset(),
                  Lt.success(R("main.upgradeSuccess")))
                : v.updateFingerbotUpgradingStatus(Yt.FAILED);
            } catch (t) {
              (v.updateFingerbotUpgradingStatus(Yt.FAILED),
                Lt.error(R("main.upgradeFailed")));
            } finally {
              setTimeout(() => {
                v.updateFingerbotUpgradingStatus(Yt.NONE);
              }, 3e3);
            }
          },
          E = async (e) => {
            var t, a;
            if (
              "zip" !==
              (null == (a = null == (t = e.name) ? void 0 : t.split("."))
                ? void 0
                : a.pop())
            )
              return void Lt.error(R("main.fileTypeError"));
            const l = new FormData();
            l.append("file", e);
            try {
              return (
                await le.uploadFingerbotFirmware(l, (e) => {
                  const t = Math.round((e.loaded / e.total) * 100);
                  t >= 100 || (k.percent = t);
                }),
                (k.percent = 100),
                !0
              );
            } catch (s) {
              return !1;
            }
          },
          L = s(() =>
            Ze.map((e) => ({
              ...e,
              label: R(e.label),
            })),
          ),
          _ = s(() => {
            const e = [...k.fixedOptions];
            return (k.customOption && e.push(k.customOption), e);
          }),
          D = (e) => 500 === e || (e >= 1e3 && e <= 6e4),
          O = na(() => {
            Lt.error(R("main.fingerbotPressTimeInvalid"));
          }, 600);
        function T(e, t = 1) {
          const a = "string" == typeof e ? parseFloat(e) : e;
          if (isNaN(a) || isNaN(t)) return NaN;
          const l = Math.pow(10, t);
          return Math.floor(a * l) / l;
        }
        const I = (e) => {
            ((k.searchValue = e), A());
          },
          A = na(function () {
            const e = k.searchValue;
            if (Ne(e)) {
              const t = T(e),
                a = 1e3 * t;
              if (D(a)) {
                if (_.value.find((e) => e.value === a)) return;
                k.customOption = new aa(a, `${t}s`);
              } else O();
            }
          }),
          V = (e) => {
            k.fixedOptions.find((t) => t.value === e) ||
              (k.fixedOptions.push(k.customOption), (k.customOption = null));
          },
          U = (e, t) => {
            var a;
            try {
              return (
                (null == t
                  ? void 0
                  : t.label
                      .toLowerCase()
                      .indexOf(
                        null == (a = T(e))
                          ? void 0
                          : a.toString().toLowerCase(),
                      )) >= 0
              );
            } catch (l) {
              return null;
            }
          },
          P = () => {
            k.customOption = null;
          },
          W = async () => {
            ((k.pressing = !0), t(k.selectedPressTime));
            const e = await new Be(k.selectedPressTime, b.value).send();
            return (
              e
                ? Lt.success(R("main.pressSuccess"))
                : Lt.error(R("main.pressFailed")),
              (k.pressing = !1),
              e
            );
          },
          Z = () => {
            D(k.selectedPressTime)
              ? k.askConfirm
                ? ((k.confirmOpen = !0),
                  pe({
                    centered: !0,
                    content: R("main.pressFingerbotTitle"),
                    okText: R("common.apply"),
                    onOk: async () => {
                      const e = await W();
                      if (
                        (ia(100).then(() => {
                          k.confirmOpen = !1;
                        }),
                        !e)
                      )
                        throw new Error();
                    },
                    onCancel: async () => {
                      (await ia(100), (k.confirmOpen = !1));
                    },
                  }))
                : W()
              : Lt.error("Please select a number between 1 and 60");
          };
        return (
          S(() => {
            const e = ~~a();
            e &&
              !k.fixedOptions.find((t) => t.value === e) &&
              k.fixedOptions.push(new aa(e, e / 1e3 + "s"));
          }),
          (e, t) => (
            i(),
            n(
              w,
              null,
              [
                u(m).fingerbotEnabled
                  ? (i(),
                    g(
                      va,
                      {
                        key: 0,
                        title: "common.fingerbot",
                      },
                      F(
                        {
                          titleExtra: d(() => [
                            u(v).fingerbotBatteryIcon
                              ? (i(),
                                n(
                                  "img",
                                  {
                                    key: 0,
                                    style: {
                                      "margin-left": "4px",
                                      "margin-top": "2px",
                                    },
                                    src: u(v).fingerbotBatteryIcon,
                                  },
                                  null,
                                  8,
                                  Ls,
                                ))
                              : (i(), n("span", _s)),
                          ]),
                          default: d(() => [
                            r("div", Ds, [
                              r("span", Os, p(e.$t("main.time")), 1),
                              o(
                                u(_t),
                                {
                                  disabled: u(v).fingerbotUpgrading,
                                  placeholder: e.$t("common.pleaseSelect"),
                                  showSearch: "",
                                  onSearch: I,
                                  onBlur: P,
                                  onSelect: V,
                                  filterOption: U,
                                  options: _.value,
                                  value: k.selectedPressTime,
                                  "onUpdate:value":
                                    t[2] ||
                                    (t[2] = (e) => (k.selectedPressTime = e)),
                                  class: "control",
                                },
                                null,
                                8,
                                ["disabled", "placeholder", "options", "value"],
                              ),
                            ]),
                            r("div", Ts, [
                              r("span", Is, p(e.$t("main.strength")), 1),
                              o(
                                u(_t),
                                {
                                  disabled: u(v).fingerbotUpgrading,
                                  placeholder: e.$t("common.pleaseSelect"),
                                  options: L.value,
                                  value: u(b),
                                  "onUpdate:value":
                                    t[3] ||
                                    (t[3] = (e) =>
                                      M(b) ? (b.value = e) : null),
                                  class: "control",
                                },
                                null,
                                8,
                                ["disabled", "placeholder", "options", "value"],
                              ),
                            ]),
                            o(
                              u(Pt),
                              {
                                disabled: u(v).fingerbotUpgrading,
                                loading: k.pressing,
                                class: "full-width item",
                                shape: "round",
                                size: "small",
                                onClick: Z,
                              },
                              {
                                default: d(() => [C(p(e.$t("main.press")), 1)]),
                                _: 1,
                              },
                              8,
                              ["disabled", "loading"],
                            ),
                            o(
                              u(Tt),
                              {
                                disabled: u(v).fingerbotUpgrading,
                                checked: k.askConfirm,
                                "onUpdate:checked":
                                  t[4] || (t[4] = (e) => (k.askConfirm = e)),
                              },
                              {
                                default: d(() => [
                                  r(
                                    "span",
                                    Fs,
                                    p(e.$t("main.askConfirmation")),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["disabled", "checked"],
                            ),
                          ]),
                          _: 2,
                        },
                        [void 0],
                      ),
                      1024,
                    ))
                  : y("", !0),
                o(
                  Xt,
                  {
                    type: u(Re).FINGERBOT_UPGRADE,
                    id: "fingerbot-upgrade-input",
                    disabled: u(v).fingerbotUpgrading,
                    ref_key: "uploadRef",
                    ref: c,
                    beforeUpload: E,
                    open: k.upgradeModalOpen,
                    "onUpdate:open":
                      t[5] || (t[5] = (e) => (k.upgradeModalOpen = e)),
                    accept: ".zip",
                    uploadPercent: k.percent,
                  },
                  {
                    footer: d(({ config: t }) => [
                      r("div", As, [
                        t.uploadSucceed
                          ? (i(),
                            g(
                              u(Pt),
                              {
                                key: 0,
                                shape: "round",
                                onClick: x,
                                loading: u(v).fingerbotUpgrading,
                                class: "full-width",
                              },
                              {
                                default: d(() => [
                                  C(p(e.$t("common.install")), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["loading"],
                            ))
                          : y("", !0),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["type", "disabled", "open", "uploadPercent"],
                ),
              ],
              64,
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-a7a231d3"]],
  ),
  Us = {
    class: "flex-start",
  },
  Ps = {
    class: "text-2 label",
  },
  Ws = U(
    a({
      __name: "atxPowerControl",
      setup(e) {
        const t = J(),
          a = h({
            pressLoading: null,
          });
        return (e, l) => {
          const s = f("GlSvg");
          return u(t).atxPowerEnabled
            ? (i(),
              g(
                va,
                {
                  key: 0,
                  title: "main.atxPower",
                },
                {
                  default: d(() => [
                    (i(!0),
                    n(
                      w,
                      null,
                      E(
                        u(Ke),
                        (t) => (
                          i(),
                          n(
                            "div",
                            {
                              key: t.value,
                              class: "item flex-btw",
                            },
                            [
                              r("span", Us, [
                                r("span", Ps, p(e.$t(t.label)), 1),
                                t.tip
                                  ? (i(),
                                    g(
                                      u(St),
                                      {
                                        key: 0,
                                        title: t.tip,
                                        class: "tooltip",
                                      },
                                      {
                                        default: d(() => [
                                          o(s, {
                                            size: 16,
                                            name: "gl-kvm-help",
                                          }),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["title"],
                                    ))
                                  : y("", !0),
                              ]),
                              o(
                                u(Pt),
                                {
                                  onClick: (e) => {
                                    return (
                                      (l = t.value),
                                      void pe({
                                        title: "common.confirmation",
                                        content: "main.atxPowerConfirm",
                                        onOk: async () => {
                                          try {
                                            ((a.pressLoading = l),
                                              l === ze.POWER_LONG
                                                ? await Promise.all([
                                                    ia(5e3),
                                                    le.clickAtxPower(l),
                                                  ])
                                                : await le.clickAtxPower(l),
                                              Lt.success(
                                                R("common.actionSuccess"),
                                              ));
                                          } catch (e) {
                                            throw (
                                              !new ue(e).hasError &&
                                                Lt.error(
                                                  R("common.actionFailed"),
                                                ),
                                              e
                                            );
                                          } finally {
                                            a.pressLoading = null;
                                          }
                                        },
                                      })
                                    );
                                    var l;
                                  },
                                  size: "small",
                                  loading: a.pressLoading === t.value,
                                  shape: "round",
                                },
                                {
                                  default: d(() => [
                                    C(p(e.$t("main.press")), 1),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["onClick", "loading"],
                              ),
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
              ))
            : y("", !0);
        };
      },
    }),
    [["__scopeId", "data-v-d591f3a1"]],
  ),
  Rs =
    "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='%233E72F5'/%3e%3cpath%20d='M6.27964%2011.3904C6.09716%2011.593%205.9993%2011.8579%206.0062%2012.1305C6.01311%2012.4031%206.12426%2012.6626%206.31677%2012.8558C6.50928%2013.0489%206.7685%2013.1609%207.04108%2013.1686C7.31365%2013.1764%207.57884%2013.0794%207.78204%2012.8976C9.16122%2011.5234%2011.0288%2010.7519%2012.9756%2010.7519C14.9225%2010.7519%2016.7901%2011.5234%2018.1692%2012.8976C18.3724%2013.0794%2018.6376%2013.1764%2018.9102%2013.1686C19.1828%2013.1609%2019.442%2013.0489%2019.6345%2012.8558C19.827%2012.6626%2019.9382%2012.4031%2019.9451%2012.1305C19.952%2011.8579%2019.8541%2011.593%2019.6716%2011.3904C17.8944%209.61702%2015.4863%208.62109%2012.9756%208.62109C10.465%208.62109%208.05688%209.61702%206.27964%2011.3904Z'%20fill='%233E72F5'/%3e%3cpath%20d='M9.15979%2014.2655C8.96056%2014.4647%208.84863%2014.7349%208.84863%2015.0167C8.84863%2015.2984%208.96056%2015.5686%209.15979%2015.7679C9.35902%2015.9671%209.62924%2016.079%209.91099%2016.079C10.1928%2016.079%2010.463%2015.9671%2010.6622%2015.7679C11.2778%2015.1526%2012.1126%2014.807%2012.983%2014.807C13.8534%2014.807%2014.6881%2015.1526%2015.3038%2015.7679C15.4024%2015.8687%2015.52%2015.9491%2015.6497%2016.0046C15.7795%2016.06%2015.9188%2016.0893%2016.0599%2016.0909C16.201%2016.0924%2016.341%2016.0662%2016.4719%2016.0137C16.6028%2015.9611%2016.7221%2015.8833%2016.823%2015.7847C16.9238%2015.686%2017.0043%2015.5685%2017.0597%2015.4387C17.1151%2015.309%2017.1445%2015.1696%2017.146%2015.0285C17.1476%2014.8875%2017.1213%2014.7475%2017.0688%2014.6165C17.0163%2014.4856%2016.9384%2014.3663%2016.8398%2014.2655C16.3373%2013.7581%2015.7392%2013.3553%2015.08%2013.0805C14.4209%2012.8056%2013.7139%2012.6641%2012.9998%2012.6641C12.2857%2012.6641%2011.5786%2012.8056%2010.9195%2013.0805C10.2604%2013.3553%209.66233%2013.7581%209.15979%2014.2655Z'%20fill='%233E72F5'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
function Zs(e) {
  switch (e) {
    case "5g":
      return "5G";
    case "2g":
      return "2.4G";
    case "mixed":
      return "Mixed";
    default:
      return null;
  }
}
const Ns = (e) => {
  var t;
  const a = Bs(e.signal);
  if (!a)
    return "data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.4619%2017.6408C12.7634%2017.7007%2013.0414%2017.8488%2013.2587%2018.0662C13.476%2018.2835%2013.6242%2018.5605%2013.6841%2018.8619C13.7441%2019.1632%2013.7126%2019.4756%2013.5951%2019.7595C13.4775%2020.0435%2013.2788%2020.2872%2013.0232%2020.458C12.7676%2020.6287%2012.4669%2020.7193%2012.1595%2020.7193C11.7475%2020.7191%2011.3517%2020.556%2011.0603%2020.2646C10.7689%2019.9733%2010.6059%2019.5775%2010.6056%2019.1654C10.6056%2018.8581%2010.6963%2018.5573%2010.8669%2018.3017C11.0376%2018.0463%2011.2804%2017.8475%2011.5642%2017.7298C11.848%2017.6122%2012.1605%2017.581%2012.4619%2017.6408ZM13.6958%2013.3482C14.7474%2013.5996%2015.7295%2014.1078%2016.5494%2014.8365L16.5447%2014.8377C16.746%2015.0177%2016.868%2015.27%2016.8833%2015.5396C16.8987%2015.8093%2016.8063%2016.0738%2016.6267%2016.2756C16.4472%2016.4772%2016.1954%2016.5993%2015.9259%2016.6154C15.6563%2016.6314%2015.391%2016.5402%2015.1888%2016.3611C14.3532%2015.6182%2013.2741%2015.2081%2012.156%2015.208C12.0447%2015.208%2011.9335%2015.2128%2011.8232%2015.2209L13.6958%2013.3482ZM12.1583%208.97473C12.4227%208.97474%2012.686%208.98684%2012.9482%209.0052L10.8435%2011.1099C9.05412%2011.3687%207.37048%2012.1527%206.01303%2013.3763L5.98022%2013.4045C5.77146%2013.5858%205.50048%2013.6792%205.22436%2013.6646C4.94834%2013.65%204.68867%2013.5293%204.50014%2013.3271L4.43569%2013.2498C4.37505%2013.1692%204.32679%2013.0791%204.29272%2012.9838C4.2475%2012.857%204.22854%2012.722%204.23647%2012.5877C4.24446%2012.4533%204.27968%2012.3215%204.3396%2012.2009C4.39956%2012.0804%204.48337%2011.9732%204.58569%2011.8857C6.66302%2010.0123%209.36102%208.97473%2012.1583%208.97473ZM16.9841%2010.0599C17.9759%2010.5281%2018.9034%2011.1393%2019.731%2011.8857C19.7427%2011.895%2019.7543%2011.9045%2019.765%2011.915C19.8634%2012.007%2019.9414%2012.1187%2019.9958%2012.242C20.0503%2012.3653%2020.0798%2012.4986%2020.0814%2012.6334C20.083%2012.7679%2020.0576%2012.9015%2020.0064%2013.0259C19.955%2013.1506%2019.8787%2013.2643%2019.7826%2013.3588C19.5857%2013.5522%2019.3214%2013.6612%2019.0455%2013.6646C18.7695%2013.6679%2018.5028%2013.5649%2018.3013%2013.3763C17.4528%2012.6115%2016.4764%2012.0176%2015.4267%2011.6173L16.9841%2010.0599ZM1.96069%208.6009C6.07103%205.03027%2011.5868%203.97225%2016.533%205.42043L14.8513%207.10207C13.9702%206.92163%2013.0683%206.82555%2012.1572%206.82551C8.92075%206.82551%205.79205%207.99434%203.34819%2010.1162L3.31186%2010.149C3.10064%2010.324%202.82948%2010.4104%202.556%2010.3892C2.28242%2010.368%202.02758%2010.2409%201.84585%2010.0353L1.78374%209.95559C1.7257%209.87406%201.67934%209.78377%201.6478%209.6884C1.60584%209.56128%201.59021%209.42692%201.60092%209.29348C1.61166%209.15983%201.6492%209.02921%201.71108%208.91027C1.7729%208.79158%201.85764%208.68627%201.96069%208.6009ZM20.0826%206.96145C20.8752%207.4318%2021.6362%207.97764%2022.3537%208.6009L22.3513%208.59034C22.453%208.67823%2022.5355%208.78626%2022.5951%208.90675C22.6545%209.02737%2022.6903%209.15923%2022.6982%209.29348C22.706%209.42783%2022.6859%209.56277%2022.6408%209.68957C22.5956%209.81642%2022.5255%209.93368%2022.4345%2010.033C22.2487%2010.2356%2021.9906%2010.3573%2021.7162%2010.3728C21.4418%2010.3882%2021.1724%2010.2964%2020.965%2010.1162C20.2277%209.47603%2019.4273%208.92327%2018.5814%208.46262L20.0826%206.96145Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M19.6998%204.7998L5.2998%2019.1998'%20stroke='black'%20stroke-opacity='0.25'%20stroke-width='1.92'%20stroke-linecap='round'/%3e%3c/svg%3e";
  if (null == (t = e.encryption) ? void 0 : t.enabled)
    switch (a) {
      case Ge.LEVEL1:
        return "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M18.342%2010.2766C16.5174%209.0255%2014.3127%208.45201%2012.1098%208.65539C9.90683%208.85876%207.84439%209.82619%206.27964%2011.3902C6.09716%2011.5928%205.9993%2011.8577%206.0062%2012.1303C6.01311%2012.4029%206.12426%2012.6624%206.31677%2012.8556C6.50928%2013.0487%206.7685%2013.1607%207.04108%2013.1684C7.31365%2013.1762%207.57884%2013.0792%207.78204%2012.8974C8.89223%2011.7924%2010.3263%2011.0708%2011.8752%2010.8377C13.4241%2010.6045%2015.007%2010.8721%2016.3932%2011.6014C16.8906%2010.9693%2017.5713%2010.5065%2018.342%2010.2766Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M15.5726%2014.0065C15.5747%2013.7941%2015.5939%2013.5822%2015.6302%2013.3729C14.602%2012.7955%2013.4131%2012.5702%2012.2449%2012.7314C11.0767%2012.8925%209.99322%2013.4314%209.15979%2014.2657C8.96056%2014.465%208.84863%2014.7352%208.84863%2015.0169C8.84863%2015.2987%208.96056%2015.5689%209.15979%2015.7681C9.35902%2015.9674%209.62924%2016.0793%209.91099%2016.0793C10.1928%2016.0793%2010.463%2015.9674%2010.6622%2015.7681C11.1613%2015.2715%2011.807%2014.9487%2012.5037%2014.8476C13.2005%2014.7464%2013.9113%2014.8723%2014.531%2015.2065C14.7188%2014.6921%2015.0897%2014.2649%2015.5726%2014.0065Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3cpath%20d='M22.3219%2015.1779H21.9331V14.0115C21.9478%2013.6793%2021.895%2013.3476%2021.778%2013.0363C21.661%2012.7251%2021.4821%2012.4407%2021.2523%2012.2005C21.0224%2011.9602%2020.7462%2011.769%2020.4405%2011.6384C20.1347%2011.5077%2019.8056%2011.4404%2019.4731%2011.4404C19.1406%2011.4404%2018.8115%2011.5077%2018.5057%2011.6384C18.1999%2011.769%2017.9238%2011.9602%2017.6939%2012.2005C17.464%2012.4407%2017.2852%2012.7251%2017.1682%2013.0363C17.0512%2013.3476%2016.9984%2013.6793%2017.0131%2014.0115V15.1779H16.6243C16.418%2015.1779%2016.2203%2015.2598%2016.0744%2015.4056C15.9286%2015.5515%2015.8467%2015.7492%2015.8467%2015.9555V19.0659C15.8467%2019.2721%2015.9286%2019.4699%2016.0744%2019.6157C16.2203%2019.7616%2016.418%2019.8435%2016.6243%2019.8435H22.3267C22.5325%2019.8422%2022.7296%2019.7599%2022.8751%2019.6143C23.0207%2019.4688%2023.103%2019.2717%2023.1043%2019.0659V15.9555C23.103%2015.7488%2023.02%2015.551%2022.8734%2015.4053C22.7268%2015.2596%2022.5286%2015.1779%2022.3219%2015.1779ZM20.6371%2015.1779H18.3043V14.0115C18.3043%2013.7021%2018.4272%2013.4054%2018.6459%2013.1867C18.8647%2012.968%2019.1613%2012.8451%2019.4707%2012.8451C19.78%2012.8451%2020.0767%2012.968%2020.2954%2013.1867C20.5142%2013.4054%2020.6371%2013.7021%2020.6371%2014.0115V15.1779Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
      case Ge.LEVEL2:
        return "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M18.342%2010.2766C16.5174%209.0255%2014.3127%208.45201%2012.1098%208.65539C9.90683%208.85876%207.84439%209.82619%206.27964%2011.3902C6.09716%2011.5928%205.9993%2011.8577%206.0062%2012.1303C6.01311%2012.4029%206.12426%2012.6624%206.31677%2012.8556C6.50928%2013.0487%206.7685%2013.1607%207.04108%2013.1684C7.31365%2013.1762%207.57884%2013.0792%207.78204%2012.8974C8.89223%2011.7924%2010.3263%2011.0708%2011.8752%2010.8377C13.4241%2010.6045%2015.007%2010.8721%2016.3932%2011.6014C16.8906%2010.9693%2017.5713%2010.5065%2018.342%2010.2766Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M15.5726%2014.0065C15.5747%2013.7941%2015.5939%2013.5822%2015.6302%2013.3729C14.602%2012.7955%2013.4131%2012.5702%2012.2449%2012.7314C11.0767%2012.8925%209.99322%2013.4314%209.15979%2014.2657C8.96056%2014.465%208.84863%2014.7352%208.84863%2015.0169C8.84863%2015.2987%208.96056%2015.5689%209.15979%2015.7681C9.35902%2015.9674%209.62924%2016.0793%209.91099%2016.0793C10.1928%2016.0793%2010.463%2015.9674%2010.6622%2015.7681C11.1613%2015.2715%2011.807%2014.9487%2012.5037%2014.8476C13.2005%2014.7464%2013.9113%2014.8723%2014.531%2015.2065C14.7188%2014.6921%2015.0897%2014.2649%2015.5726%2014.0065Z'%20fill='%233E72F5'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3cpath%20d='M22.3219%2015.1779H21.9331V14.0115C21.9478%2013.6793%2021.895%2013.3476%2021.778%2013.0363C21.661%2012.7251%2021.4821%2012.4407%2021.2523%2012.2005C21.0224%2011.9602%2020.7462%2011.769%2020.4405%2011.6384C20.1347%2011.5077%2019.8056%2011.4404%2019.4731%2011.4404C19.1406%2011.4404%2018.8115%2011.5077%2018.5057%2011.6384C18.1999%2011.769%2017.9238%2011.9602%2017.6939%2012.2005C17.464%2012.4407%2017.2852%2012.7251%2017.1682%2013.0363C17.0512%2013.3476%2016.9984%2013.6793%2017.0131%2014.0115V15.1779H16.6243C16.418%2015.1779%2016.2203%2015.2598%2016.0744%2015.4056C15.9286%2015.5515%2015.8467%2015.7492%2015.8467%2015.9555V19.0659C15.8467%2019.2721%2015.9286%2019.4699%2016.0744%2019.6157C16.2203%2019.7616%2016.418%2019.8435%2016.6243%2019.8435H22.3267C22.5325%2019.8422%2022.7296%2019.7599%2022.8751%2019.6143C23.0207%2019.4688%2023.103%2019.2717%2023.1043%2019.0659V15.9555C23.103%2015.7488%2023.02%2015.551%2022.8734%2015.4053C22.7268%2015.2596%2022.5286%2015.1779%2022.3219%2015.1779ZM20.6371%2015.1779H18.3043V14.0115C18.3043%2013.7021%2018.4272%2013.4054%2018.6459%2013.1867C18.8647%2012.968%2019.1613%2012.8451%2019.4707%2012.8451C19.78%2012.8451%2020.0767%2012.968%2020.2954%2013.1867C20.5142%2013.4054%2020.6371%2013.7021%2020.6371%2014.0115V15.1779Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
      case Ge.LEVEL3:
        return "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M18.342%2010.2766C16.5174%209.0255%2014.3127%208.45201%2012.1098%208.65539C9.90683%208.85876%207.84439%209.82619%206.27964%2011.3902C6.09716%2011.5928%205.9993%2011.8577%206.0062%2012.1303C6.01311%2012.4029%206.12426%2012.6624%206.31677%2012.8556C6.50928%2013.0487%206.7685%2013.1607%207.04108%2013.1684C7.31365%2013.1762%207.57884%2013.0792%207.78204%2012.8974C8.89223%2011.7924%2010.3263%2011.0708%2011.8752%2010.8377C13.4241%2010.6045%2015.007%2010.8721%2016.3932%2011.6014C16.8906%2010.9693%2017.5713%2010.5065%2018.342%2010.2766Z'%20fill='%233E72F5'/%3e%3cpath%20d='M15.5726%2014.0065C15.5747%2013.7941%2015.5939%2013.5822%2015.6302%2013.3729C14.602%2012.7955%2013.4131%2012.5702%2012.2449%2012.7314C11.0767%2012.8925%209.99322%2013.4314%209.15979%2014.2657C8.96056%2014.465%208.84863%2014.7352%208.84863%2015.0169C8.84863%2015.2987%208.96056%2015.5689%209.15979%2015.7681C9.35902%2015.9674%209.62924%2016.0793%209.91099%2016.0793C10.1928%2016.0793%2010.463%2015.9674%2010.6622%2015.7681C11.1613%2015.2715%2011.807%2014.9487%2012.5037%2014.8476C13.2005%2014.7464%2013.9113%2014.8723%2014.531%2015.2065C14.7188%2014.6921%2015.0897%2014.2649%2015.5726%2014.0065Z'%20fill='%233E72F5'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3cpath%20d='M22.3219%2015.1779H21.9331V14.0115C21.9478%2013.6793%2021.895%2013.3476%2021.778%2013.0363C21.661%2012.7251%2021.4821%2012.4407%2021.2523%2012.2005C21.0224%2011.9602%2020.7462%2011.769%2020.4405%2011.6384C20.1347%2011.5077%2019.8056%2011.4404%2019.4731%2011.4404C19.1406%2011.4404%2018.8115%2011.5077%2018.5057%2011.6384C18.1999%2011.769%2017.9238%2011.9602%2017.6939%2012.2005C17.464%2012.4407%2017.2852%2012.7251%2017.1682%2013.0363C17.0512%2013.3476%2016.9984%2013.6793%2017.0131%2014.0115V15.1779H16.6243C16.418%2015.1779%2016.2203%2015.2598%2016.0744%2015.4056C15.9286%2015.5515%2015.8467%2015.7492%2015.8467%2015.9555V19.0659C15.8467%2019.2721%2015.9286%2019.4699%2016.0744%2019.6157C16.2203%2019.7616%2016.418%2019.8435%2016.6243%2019.8435H22.3267C22.5325%2019.8422%2022.7296%2019.7599%2022.8751%2019.6143C23.0207%2019.4688%2023.103%2019.2717%2023.1043%2019.0659V15.9555C23.103%2015.7488%2023.02%2015.551%2022.8734%2015.4053C22.7268%2015.2596%2022.5286%2015.1779%2022.3219%2015.1779ZM20.6371%2015.1779H18.3043V14.0115C18.3043%2013.7021%2018.4272%2013.4054%2018.6459%2013.1867C18.8647%2012.968%2019.1613%2012.8451%2019.4707%2012.8451C19.78%2012.8451%2020.0767%2012.968%2020.2954%2013.1867C20.5142%2013.4054%2020.6371%2013.7021%2020.6371%2014.0115V15.1779Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
      case Ge.LEVEL4:
        return "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='%233E72F5'/%3e%3cpath%20d='M18.342%2010.2766C16.5174%209.0255%2014.3127%208.45201%2012.1098%208.65539C9.90683%208.85876%207.84439%209.82619%206.27964%2011.3902C6.09716%2011.5928%205.9993%2011.8577%206.0062%2012.1303C6.01311%2012.4029%206.12426%2012.6624%206.31677%2012.8556C6.50928%2013.0487%206.7685%2013.1607%207.04108%2013.1684C7.31365%2013.1762%207.57884%2013.0792%207.78204%2012.8974C8.89223%2011.7924%2010.3263%2011.0708%2011.8752%2010.8377C13.4241%2010.6045%2015.007%2010.8721%2016.3932%2011.6014C16.8906%2010.9693%2017.5713%2010.5065%2018.342%2010.2766Z'%20fill='%233E72F5'/%3e%3cpath%20d='M15.5726%2014.0065C15.5747%2013.7941%2015.5939%2013.5822%2015.6302%2013.3729C14.602%2012.7955%2013.4131%2012.5702%2012.2449%2012.7314C11.0767%2012.8925%209.99322%2013.4314%209.15979%2014.2657C8.96056%2014.465%208.84863%2014.7352%208.84863%2015.0169C8.84863%2015.2987%208.96056%2015.5689%209.15979%2015.7681C9.35902%2015.9674%209.62924%2016.0793%209.91099%2016.0793C10.1928%2016.0793%2010.463%2015.9674%2010.6622%2015.7681C11.1613%2015.2715%2011.807%2014.9487%2012.5037%2014.8476C13.2005%2014.7464%2013.9113%2014.8723%2014.531%2015.2065C14.7188%2014.6921%2015.0897%2014.2649%2015.5726%2014.0065Z'%20fill='%233E72F5'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3cpath%20d='M22.3219%2015.1779H21.9331V14.0115C21.9478%2013.6793%2021.895%2013.3476%2021.778%2013.0363C21.661%2012.7251%2021.4821%2012.4407%2021.2523%2012.2005C21.0224%2011.9602%2020.7462%2011.769%2020.4405%2011.6384C20.1347%2011.5077%2019.8056%2011.4404%2019.4731%2011.4404C19.1406%2011.4404%2018.8115%2011.5077%2018.5057%2011.6384C18.1999%2011.769%2017.9238%2011.9602%2017.6939%2012.2005C17.464%2012.4407%2017.2852%2012.7251%2017.1682%2013.0363C17.0512%2013.3476%2016.9984%2013.6793%2017.0131%2014.0115V15.1779H16.6243C16.418%2015.1779%2016.2203%2015.2598%2016.0744%2015.4056C15.9286%2015.5515%2015.8467%2015.7492%2015.8467%2015.9555V19.0659C15.8467%2019.2721%2015.9286%2019.4699%2016.0744%2019.6157C16.2203%2019.7616%2016.418%2019.8435%2016.6243%2019.8435H22.3267C22.5325%2019.8422%2022.7296%2019.7599%2022.8751%2019.6143C23.0207%2019.4688%2023.103%2019.2717%2023.1043%2019.0659V15.9555C23.103%2015.7488%2023.02%2015.551%2022.8734%2015.4053C22.7268%2015.2596%2022.5286%2015.1779%2022.3219%2015.1779ZM20.6371%2015.1779H18.3043V14.0115C18.3043%2013.7021%2018.4272%2013.4054%2018.6459%2013.1867C18.8647%2012.968%2019.1613%2012.8451%2019.4707%2012.8451C19.78%2012.8451%2020.0767%2012.968%2020.2954%2013.1867C20.5142%2013.4054%2020.6371%2013.7021%2020.6371%2014.0115V15.1779Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
    }
  else
    switch (a) {
      case Ge.LEVEL1:
        return "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M6.27964%2011.3904C6.09716%2011.593%205.9993%2011.8579%206.0062%2012.1305C6.01311%2012.4031%206.12426%2012.6626%206.31677%2012.8558C6.50928%2013.0489%206.7685%2013.1609%207.04108%2013.1686C7.31365%2013.1764%207.57884%2013.0794%207.78204%2012.8976C9.16122%2011.5234%2011.0288%2010.7519%2012.9756%2010.7519C14.9225%2010.7519%2016.7901%2011.5234%2018.1692%2012.8976C18.3724%2013.0794%2018.6376%2013.1764%2018.9102%2013.1686C19.1828%2013.1609%2019.442%2013.0489%2019.6345%2012.8558C19.827%2012.6626%2019.9382%2012.4031%2019.9451%2012.1305C19.952%2011.8579%2019.8541%2011.593%2019.6716%2011.3904C17.8944%209.61702%2015.4863%208.62109%2012.9756%208.62109C10.465%208.62109%208.05688%209.61702%206.27964%2011.3904Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M9.15979%2014.2655C8.96056%2014.4647%208.84863%2014.7349%208.84863%2015.0167C8.84863%2015.2984%208.96056%2015.5686%209.15979%2015.7679C9.35902%2015.9671%209.62924%2016.079%209.91099%2016.079C10.1928%2016.079%2010.463%2015.9671%2010.6622%2015.7679C11.2778%2015.1526%2012.1126%2014.807%2012.983%2014.807C13.8534%2014.807%2014.6881%2015.1526%2015.3038%2015.7679C15.4024%2015.8687%2015.52%2015.9491%2015.6497%2016.0046C15.7795%2016.06%2015.9188%2016.0893%2016.0599%2016.0909C16.201%2016.0924%2016.341%2016.0662%2016.4719%2016.0137C16.6028%2015.9611%2016.7221%2015.8833%2016.823%2015.7847C16.9238%2015.686%2017.0043%2015.5685%2017.0597%2015.4387C17.1151%2015.309%2017.1445%2015.1696%2017.146%2015.0285C17.1476%2014.8875%2017.1213%2014.7475%2017.0688%2014.6165C17.0163%2014.4856%2016.9384%2014.3663%2016.8398%2014.2655C16.3373%2013.7581%2015.7392%2013.3553%2015.08%2013.0805C14.4209%2012.8056%2013.7139%2012.6641%2012.9998%2012.6641C12.2857%2012.6641%2011.5786%2012.8056%2010.9195%2013.0805C10.2604%2013.3553%209.66233%2013.7581%209.15979%2014.2655Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
      case Ge.LEVEL2:
        return "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M6.27964%2011.3904C6.09716%2011.593%205.9993%2011.8579%206.0062%2012.1305C6.01311%2012.4031%206.12426%2012.6626%206.31677%2012.8558C6.50928%2013.0489%206.7685%2013.1609%207.04108%2013.1686C7.31365%2013.1764%207.57884%2013.0794%207.78204%2012.8976C9.16122%2011.5234%2011.0288%2010.7519%2012.9756%2010.7519C14.9225%2010.7519%2016.7901%2011.5234%2018.1692%2012.8976C18.3724%2013.0794%2018.6376%2013.1764%2018.9102%2013.1686C19.1828%2013.1609%2019.442%2013.0489%2019.6345%2012.8558C19.827%2012.6626%2019.9382%2012.4031%2019.9451%2012.1305C19.952%2011.8579%2019.8541%2011.593%2019.6716%2011.3904C17.8944%209.61702%2015.4863%208.62109%2012.9756%208.62109C10.465%208.62109%208.05688%209.61702%206.27964%2011.3904Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M9.15979%2014.2655C8.96056%2014.4647%208.84863%2014.7349%208.84863%2015.0167C8.84863%2015.2984%208.96056%2015.5686%209.15979%2015.7679C9.35902%2015.9671%209.62924%2016.079%209.91099%2016.079C10.1928%2016.079%2010.463%2015.9671%2010.6622%2015.7679C11.2778%2015.1526%2012.1126%2014.807%2012.983%2014.807C13.8534%2014.807%2014.6881%2015.1526%2015.3038%2015.7679C15.4024%2015.8687%2015.52%2015.9491%2015.6497%2016.0046C15.7795%2016.06%2015.9188%2016.0893%2016.0599%2016.0909C16.201%2016.0924%2016.341%2016.0662%2016.4719%2016.0137C16.6028%2015.9611%2016.7221%2015.8833%2016.823%2015.7847C16.9238%2015.686%2017.0043%2015.5685%2017.0597%2015.4387C17.1151%2015.309%2017.1445%2015.1696%2017.146%2015.0285C17.1476%2014.8875%2017.1213%2014.7475%2017.0688%2014.6165C17.0163%2014.4856%2016.9384%2014.3663%2016.8398%2014.2655C16.3373%2013.7581%2015.7392%2013.3553%2015.08%2013.0805C14.4209%2012.8056%2013.7139%2012.6641%2012.9998%2012.6641C12.2857%2012.6641%2011.5786%2012.8056%2010.9195%2013.0805C10.2604%2013.3553%209.66233%2013.7581%209.15979%2014.2655Z'%20fill='%233E72F5'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
      case Ge.LEVEL3:
        return "data:image/svg+xml,%3csvg%20width='26'%20height='24'%20viewBox='0%200%2026%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6003%208.4722C20.0495%205.93499%2016.5981%204.51074%2013.0003%204.51074C9.40256%204.51074%205.9511%205.93499%203.40032%208.4722C3.23546%208.67594%203.15146%208.93329%203.16438%209.19506C3.17731%209.45683%203.28625%209.70465%203.47038%209.89116C3.65451%2010.0776%203.90092%2010.1897%204.1625%2010.206C4.42408%2010.2223%204.68249%2010.1416%204.88832%209.9794C7.03936%207.83087%209.95528%206.62406%2012.9955%206.62406C16.0358%206.62406%2018.9517%207.83087%2021.1027%209.9794C21.3023%2010.166%2021.5659%2010.2689%2021.8391%2010.2667C22.1123%2010.2645%2022.3742%2010.1575%2022.5708%209.96777C22.7674%209.77799%2022.8835%209.51996%2022.8953%209.24699C22.907%208.97402%2022.8134%208.70696%2022.6339%208.501L22.6003%208.477V8.4722Z'%20fill='black'%20fill-opacity='0.25'/%3e%3cpath%20d='M6.27964%2011.3904C6.09716%2011.593%205.9993%2011.8579%206.0062%2012.1305C6.01311%2012.4031%206.12426%2012.6626%206.31677%2012.8558C6.50928%2013.0489%206.7685%2013.1609%207.04108%2013.1686C7.31365%2013.1764%207.57884%2013.0794%207.78204%2012.8976C9.16122%2011.5234%2011.0288%2010.7519%2012.9756%2010.7519C14.9225%2010.7519%2016.7901%2011.5234%2018.1692%2012.8976C18.3724%2013.0794%2018.6376%2013.1764%2018.9102%2013.1686C19.1828%2013.1609%2019.442%2013.0489%2019.6345%2012.8558C19.827%2012.6626%2019.9382%2012.4031%2019.9451%2012.1305C19.952%2011.8579%2019.8541%2011.593%2019.6716%2011.3904C17.8944%209.61702%2015.4863%208.62109%2012.9756%208.62109C10.465%208.62109%208.05688%209.61702%206.27964%2011.3904Z'%20fill='%233E72F5'/%3e%3cpath%20d='M9.15979%2014.2655C8.96056%2014.4647%208.84863%2014.7349%208.84863%2015.0167C8.84863%2015.2984%208.96056%2015.5686%209.15979%2015.7679C9.35902%2015.9671%209.62924%2016.079%209.91099%2016.079C10.1928%2016.079%2010.463%2015.9671%2010.6622%2015.7679C11.2778%2015.1526%2012.1126%2014.807%2012.983%2014.807C13.8534%2014.807%2014.6881%2015.1526%2015.3038%2015.7679C15.4024%2015.8687%2015.52%2015.9491%2015.6497%2016.0046C15.7795%2016.06%2015.9188%2016.0893%2016.0599%2016.0909C16.201%2016.0924%2016.341%2016.0662%2016.4719%2016.0137C16.6028%2015.9611%2016.7221%2015.8833%2016.823%2015.7847C16.9238%2015.686%2017.0043%2015.5685%2017.0597%2015.4387C17.1151%2015.309%2017.1445%2015.1696%2017.146%2015.0285C17.1476%2014.8875%2017.1213%2014.7475%2017.0688%2014.6165C17.0163%2014.4856%2016.9384%2014.3663%2016.8398%2014.2655C16.3373%2013.7581%2015.7392%2013.3553%2015.08%2013.0805C14.4209%2012.8056%2013.7139%2012.6641%2012.9998%2012.6641C12.2857%2012.6641%2011.5786%2012.8056%2010.9195%2013.0805C10.2604%2013.3553%209.66233%2013.7581%209.15979%2014.2655Z'%20fill='%233E72F5'/%3e%3cpath%20d='M12.9951%2019.5019C13.7771%2019.5019%2014.4111%2018.8679%2014.4111%2018.0859C14.4111%2017.3039%2013.7771%2016.6699%2012.9951%2016.6699C12.2131%2016.6699%2011.5791%2017.3039%2011.5791%2018.0859C11.5791%2018.8679%2012.2131%2019.5019%2012.9951%2019.5019Z'%20fill='%233E72F5'/%3e%3c/svg%3e";
      case Ge.LEVEL4:
        return Rs;
    }
};
function Bs(e) {
  return e > -50
    ? Ge.LEVEL4
    : e > -75
      ? Ge.LEVEL3
      : e > -99
        ? Ge.LEVEL2
        : Ge.LEVEL1;
}
function Ks(e) {
  return e.slice().sort((e, t) => {
    const a = Bs(e.signal),
      l = Bs(t.signal);
    return a !== l ? l - a : e.ssid.localeCompare(t.ssid);
  });
}
const zs = {
    class: "flex-end",
  },
  Gs = {
    class: "flex-end",
  },
  Js = U(
    a({
      __name: "ethernetSettings",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = e,
          c = t,
          p = Ea(Je),
          v = P(),
          m = l(),
          h = s({
            get: () => a.open,
            set: (e) => c("update:open", e),
          }),
          C = l({}),
          y = s(() => {
            const e = {
                async validator(e, t) {
                  if (["0.0.0.0", "255.255.255.255", "127.0.0.1"].includes(t))
                    throw R("settings.ipAddressNotAllowed");
                },
              },
              t =
                /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
              a = {
                mode: {
                  required: !0,
                },
              };
            return (
              "static" === C.value.mode &&
                Object.assign(a, {
                  ip_address: [
                    {
                      required: !0,
                      message: R("settings.ipAddressInvalid"),
                      pattern:
                        /^(?!0\.0\.0\.0$|255\.255\.255\.255$|127\.0\.0\.1$)((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))$/,
                    },
                    e,
                  ],
                  netmask: [
                    {
                      required: !0,
                      message: R("settings.netmaskInvalid"),
                      pattern:
                        /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$/,
                    },
                    e,
                  ],
                  gateway: [
                    {
                      required: !0,
                      message: R("settings.gatewayInvalid"),
                      pattern: t,
                    },
                    e,
                  ],
                  dns_server1: [
                    {
                      required: !0,
                      message: R("settings.dnsServerInvalid"),
                      pattern: t,
                    },
                    e,
                  ],
                  dns_server2: [
                    {
                      required: !1,
                      message: R("settings.dnsServerInvalid"),
                      pattern: t,
                    },
                    e,
                  ],
                }),
              a
            );
          }),
          b = s(() => [
            {
              key: "ip_address",
              placeholder: "settings.ip_addressPlaceholder",
            },
            {
              key: "netmask",
              placeholder: "settings.netmaskPlaceholder",
            },
            {
              key: "gateway",
              placeholder: "settings.gatewayPlaceholder",
            },
            {
              key: "dns_server1",
              placeholder: "settings.dns_server1Placeholder",
            },
            {
              key: "dns_server2",
              placeholder:
                "static" === C.value.mode
                  ? "settings.dns_server2Placeholder"
                  : "",
            },
          ]),
          k = () => {
            const e = (function (e) {
                const {
                  is_dhcp: t,
                  ip_address: a,
                  netmask: l,
                  gateway: s,
                  dns_servers: i,
                } = e;
                return {
                  mode: t ? "dhcp" : "static",
                  ip_address: a,
                  netmask: l,
                  gateway: s,
                  dns_server1: null == i ? void 0 : i[0],
                  dns_server2: null == i ? void 0 : i[1],
                };
              })(sa(v.networkConfig)),
              t = e.mode,
              a = C.value.mode;
            C.value =
              t !== a && a
                ? {
                    mode: a,
                  }
                : {
                    ...e,
                    mode: t,
                  };
          },
          M = () => {
            m.value.clearValidate();
          },
          S = async (e) => {
            try {
              await m.value.validateFields();
              const t = {
                mode: C.value.mode,
              };
              ("static" === C.value.mode &&
                Object.assign(t, {
                  ...C.value,
                  dns_servers: [C.value.dns_server1, C.value.dns_server2]
                    .filter(Boolean)
                    .join(),
                }),
                delete t.dns_server1,
                delete t.dns_server2,
                await le.setNetworkConfig(t),
                await v.getNetworkConfig(),
                Lt.success(R("common.settingSuccess")),
                e(!0));
            } catch (t) {
              (e(!1), new ue(t));
            }
          },
          L = () => {
            (k(), M());
          };
        return (
          x(
            () => [a.open, v.networkConfig],
            () => {
              a.open && k();
            },
          ),
          (e, t) => {
            const a = f("BaseModal");
            return (
              i(),
              g(
                a,
                {
                  width: 440,
                  open: h.value,
                  "onUpdate:open": t[1] || (t[1] = (e) => (h.value = e)),
                  title: e.$t("settings.ethernetSettings"),
                  contentStyle: {
                    padding: "16px 0 0",
                  },
                  beforeOk: S,
                  onClose: M,
                },
                {
                  default: d(() => [
                    o(
                      u(It),
                      {
                        requiredMark: !1,
                        class: "ethernet-form",
                        ref_key: "formRef",
                        ref: m,
                        rules: y.value,
                        model: C.value,
                        layout: "horizontal",
                        colon: !1,
                      },
                      {
                        default: d(() => [
                          o(
                            u(Ft),
                            {
                              label: e.$t("settings.protocol"),
                              name: "mode",
                            },
                            {
                              default: d(() => [
                                r("div", zs, [
                                  o(
                                    u(ta),
                                    {
                                      onChange: L,
                                      value: C.value.mode,
                                      "onUpdate:value":
                                        t[0] ||
                                        (t[0] = (e) => (C.value.mode = e)),
                                      style: {
                                        width: "200px",
                                      },
                                      options: u(p),
                                    },
                                    null,
                                    8,
                                    ["value", "options"],
                                  ),
                                ]),
                              ]),
                              _: 1,
                            },
                            8,
                            ["label"],
                          ),
                          (i(!0),
                          n(
                            w,
                            null,
                            E(
                              b.value,
                              (t) => (
                                i(),
                                g(
                                  u(Ft),
                                  {
                                    key: t.key,
                                    label: e.$t("settings." + t.key),
                                    name: t.key,
                                  },
                                  {
                                    default: d(() => [
                                      r("div", Gs, [
                                        o(
                                          u(At),
                                          {
                                            style: {
                                              width: "200px",
                                            },
                                            placeholder: e.$t(t.placeholder),
                                            value: C.value[t.key],
                                            "onUpdate:value": (e) =>
                                              (C.value[t.key] = e),
                                            disabled: "dhcp" === C.value.mode,
                                          },
                                          null,
                                          8,
                                          [
                                            "placeholder",
                                            "value",
                                            "onUpdate:value",
                                            "disabled",
                                          ],
                                        ),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["label", "name"],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["rules", "model"],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["open", "title"],
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-c8b25144"]],
  );
function Hs() {
  const e = He(),
    t = s(() => e.deviceModel === je.RM1),
    a = s(() => e.deviceModel === je.RM10),
    l = s(() => e.deviceModel === je.RM1PE),
    i = s(() => e.deviceModel === je.RM10_C4),
    n = s(() => e.localVersion);
  return {
    model: e.deviceModel,
    isRM1: t,
    isRM10: a,
    isRM1PE: l,
    isRM10C4: i,
    version: n,
  };
}
const js = {
    class: "flex-btw full-width",
  },
  Xs = {
    class: "flex-start",
  },
  Ys = {
    style: {
      "margin-left": "8px",
    },
  },
  qs = {
    key: 0,
  },
  Qs = {
    class: "flex-end",
  },
  $s = {
    class: "flex-end",
  },
  ei = {
    class: "flex-end",
  },
  ti = {
    key: 1,
    class: "full-height flex",
  },
  ai = {
    class: "text-2",
  },
  li = {
    key: 2,
    class: "flex full-height",
  },
  si = {
    class: "flex",
  },
  ii = {
    style: {
      margin: "8px 0 6px",
    },
    class: "text-center text-2 fw-500",
  },
  ni = {
    class: "flex",
  },
  oi = {
    key: 3,
    class: "wifi-content",
  },
  di = {
    class: "title flex-start bg-pg",
  },
  ri = ["onClick"],
  ci = {
    class: "flex full-height",
  },
  ui = ["src"],
  pi = {
    class: "title flex-start bg-pg",
  },
  vi = ["onClick"],
  mi = {
    class: "flex full-height",
  },
  fi = ["src"],
  hi = {
    key: 0,
    class: "tag bordered flex",
  },
  gi = {
    key: 4,
  },
  Ci = {
    style: {
      "margin-bottom": "8px",
    },
  },
  yi = {
    class: "flex-btw",
  },
  wi = {
    class: "flex",
  },
  bi = U(
    a({
      __name: "wifiSettings",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = e,
          v = t,
          b = l(),
          k = l(),
          M = s({
            get: () => a.open,
            set: (e) => v("update:open", e),
          }),
          S = P(),
          L = h({
            scanning: !1,
            aps: [],
            savedAps: [],
            selectedSsid: null,
            joinFormModel: {
              password: "",
            },
            joinManuallyModel: {},
            step: 0,
            connecting: !1,
            encryptType: "none",
          }),
          _ = s(() => 0 === L.step),
          D = s(() => 1 === L.step),
          O = s(() => 2 === L.step),
          T = s(() => ({
            password: [
              {
                required: !0,
                message: R("settings.wifiPasswordPlaceholder"),
              },
              {
                min: 8,
                max: 64,
                message: R("settings.wifiPasswordLengthTip"),
              },
            ],
          })),
          I = s(() => {
            const e = {
              ssid: [
                {
                  required: !0,
                  message: R("settings.ssidPlaceholder"),
                  trigger: "blur",
                },
              ],
            };
            return (
              "none" !== L.encryptType &&
                (e.key = [
                  {
                    required: !0,
                    min: 8,
                    max: 64,
                    message: R("settings.wifiPasswordPlaceholder"),
                  },
                ]),
              e
            );
          }),
          F = s(() => {
            var e, t;
            return (
              !O.value &&
              (!L.selectedSsid ||
                !!L.scanning ||
                (!(null == (e = L.aps) ? void 0 : e.length) &&
                  !(null == (t = L.savedAps) ? void 0 : t.length)))
            );
          }),
          A = async () => {
            try {
              return await le.getApList();
            } catch (e) {
              return null;
            }
          },
          V = async () => {
            try {
              return await le.getSavedApList();
            } catch (e) {
              return null;
            }
          },
          U = async (e = !0) => {
            if (L.scanning) return;
            e && (L.scanning = !0);
            const [t, a] = await Promise.all([A(), V()]);
            log(t, a);
            const { savedApList: l, apList: s } = (function (e, t) {
              const a = [];
              sa(e).forEach((e) => {
                const t = a.find((t) => t.ssid === e.ssid);
                t ? e.band !== t.band && (t.band = "mixed") : a.push(e);
              });
              const l = a.filter(({ ssid: e }) => t.some((t) => t.ssid === e));
              return (
                l.forEach((e) => {
                  var a;
                  const l =
                    (null == (a = t.find((t) => t.ssid === e.ssid))
                      ? void 0
                      : a.key) || null;
                  e.key = l;
                }),
                t.forEach((e) => {
                  var s;
                  if (!l.some((t) => t.ssid === e.ssid)) {
                    const l =
                      (null == (s = t.find((t) => t.ssid === e.ssid))
                        ? void 0
                        : s.key) || null;
                    a.push({
                      ssid: e.ssid,
                      band: null,
                      signal: null,
                      key: l,
                    });
                  }
                }),
                {
                  apList: Ks(
                    a.filter(({ ssid: e }) => !t.some((t) => t.ssid === e)),
                  ),
                  savedApList: Ks(l),
                }
              );
            })(
              (null == t ? void 0 : t.ap_list) || [],
              (null == a ? void 0 : a.ap_list) || [],
            );
            ((L.aps = s), (L.savedAps = l), e && (L.scanning = !1));
          },
          W = (e) => {
            ((L.selectedSsid = e),
              (L.encryptType = "none"),
              (L.joinManuallyModel = {}),
              (L.joinFormModel = {
                password: "",
              }));
          },
          Z = () => {
            L.step = 0;
          },
          N = () => {
            ((L.savedAps = []),
              (L.aps = []),
              (L.selectedSsid = null),
              (M.value = !1),
              (L.connecting = !1),
              (L.step = 0),
              (L.encryptType = "none"),
              (L.joinManuallyModel = {}));
          },
          B = async () => {
            try {
              ((L.connecting = !0), await b.value.validateFields());
              const { result: e } = await le.connectAp({
                ssid: L.selectedSsid,
                key: L.joinFormModel.password,
              });
              if ("failed" === e) throw Error();
              (S.getCurrentAp(),
                (L.connecting = !1),
                Lt.success(R("settings.joinSuccess")),
                N());
            } catch (e) {
              (new ue(e, R("settings.joinFailed")), (L.connecting = !1));
            }
          },
          K = () => {
            _.value
              ? (async () => {
                  var e;
                  const t = L.savedAps.find((e) => e.ssid === L.selectedSsid),
                    a = L.aps.find((e) => e.ssid === L.selectedSsid);
                  if (!t && (null == (e = a.encryption) ? void 0 : e.enabled))
                    L.step = 1;
                  else
                    try {
                      let e;
                      if (
                        ((L.connecting = !0),
                        (e = t
                          ? (
                              await le.connectAp({
                                ssid: t.ssid,
                                key: t.key,
                              })
                            ).result
                          : (
                              await le.connectAp({
                                ssid: a.ssid,
                              })
                            ).result),
                        "failed" === e)
                      )
                        throw Error();
                      (S.getCurrentAp(),
                        (L.connecting = !1),
                        Lt.success(R("settings.joinSuccess")),
                        N());
                    } catch (l) {
                      (U(!1),
                        Lt.error(R("settings.joinFailed")),
                        (L.connecting = !1));
                    }
                })()
              : D.value
                ? B()
                : (async () => {
                    try {
                      ((L.connecting = !0), await k.value.validateFields());
                      const { result: e } = await le.connectAp({
                        ...L.joinManuallyModel,
                        manual: !0,
                      });
                      if ("failed" === e) throw Error();
                      (S.getCurrentAp(),
                        Lt.success(R("settings.joinSuccess")),
                        N(),
                        (L.connecting = !1));
                    } catch (e) {
                      (new ue(e, R("settings.joinFailed")),
                        (L.connecting = !1));
                    }
                  })();
          };
        return (
          x(
            () => a.open,
            (e) => {
              e && U();
            },
            {
              immediate: !0,
            },
          ),
          (e, t) => {
            const a = f("GlSvg"),
              l = f("BaseButton"),
              s = f("BaseModal");
            return (
              i(),
              g(
                s,
                {
                  width: 440,
                  open: M.value,
                  "onUpdate:open": t[7] || (t[7] = (e) => (M.value = e)),
                  destroyOnClose: "",
                  title: e.$t("settings.joinNetwork"),
                  onClose: N,
                  contentStyle: _.value
                    ? {
                        height: "450px",
                        maxHeight: "calc(100vh - 200px)",
                        minHeight: "200px",
                      }
                    : {
                        paddingBottom: 0,
                      },
                },
                {
                  title: d(() => [
                    r("div", js, [
                      r("div", Xs, [
                        L.scanning && !O.value
                          ? (i(),
                            g(Te, {
                              key: 0,
                              antdMode: "",
                            }))
                          : y("", !0),
                        r("div", Ys, p(e.$t("settings.connectNetwork")), 1),
                      ]),
                      _.value
                        ? (i(),
                          g(
                            u(oa),
                            {
                              key: 0,
                              onClick: U,
                              icon: "gl-kvm-refresh",
                            },
                            {
                              default: d(() => [
                                o(a, {
                                  name: "gl-kvm-refresh",
                                }),
                              ]),
                              _: 1,
                            },
                          ))
                        : y("", !0),
                    ]),
                  ]),
                  footer: d(() => [
                    r("div", yi, [
                      _.value
                        ? (i(),
                          g(
                            l,
                            {
                              key: 0,
                              type: "link",
                              noPadding: "",
                              onClick: t[6] || (t[6] = (e) => (L.step = 2)),
                            },
                            {
                              default: d(() => [
                                C(p(e.$t("settings.joinOtherNetwork")), 1),
                              ]),
                              _: 1,
                            },
                          ))
                        : (i(),
                          g(
                            l,
                            {
                              key: 1,
                              type: "link",
                              noPadding: "",
                              onClick: Z,
                            },
                            {
                              default: d(() => [C(p(e.$t("common.back")), 1)]),
                              _: 1,
                            },
                          )),
                      r("div", wi, [
                        o(
                          l,
                          {
                            disabled: L.connecting,
                            onClick: N,
                          },
                          {
                            default: d(() => [C(p(e.$t("common.cancel")), 1)]),
                            _: 1,
                          },
                          8,
                          ["disabled"],
                        ),
                        o(
                          l,
                          {
                            loading: L.connecting,
                            disabled: F.value,
                            primary: "",
                            onClick: K,
                          },
                          {
                            default: d(() => [C(p(e.$t("common.connect")), 1)]),
                            _: 1,
                          },
                          8,
                          ["loading", "disabled"],
                        ),
                      ]),
                    ]),
                  ]),
                  default: d(() => {
                    var s, v;
                    return [
                      O.value
                        ? (i(),
                          n("div", qs, [
                            o(
                              u(It),
                              {
                                requiredMark: !1,
                                class: "join-ap-form",
                                ref_key: "joinManuallyRef",
                                ref: k,
                                rules: I.value,
                                model: L.joinManuallyModel,
                                layout: "horizontal",
                                colon: !1,
                              },
                              {
                                default: d(() => [
                                  o(
                                    u(Ft),
                                    {
                                      label: "SSID",
                                      name: "ssid",
                                    },
                                    {
                                      default: d(() => [
                                        r("div", Qs, [
                                          o(
                                            u(At),
                                            {
                                              disabled: L.connecting,
                                              style: {
                                                width: "292px",
                                              },
                                              value: L.joinManuallyModel.ssid,
                                              "onUpdate:value":
                                                t[0] ||
                                                (t[0] = (e) =>
                                                  (L.joinManuallyModel.ssid =
                                                    e)),
                                              placeholder: e.$t(
                                                "settings.ssidPlaceholder",
                                              ),
                                            },
                                            null,
                                            8,
                                            [
                                              "disabled",
                                              "value",
                                              "placeholder",
                                            ],
                                          ),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                  o(
                                    u(Ft),
                                    {
                                      label: e.$t("settings.securityMethod"),
                                    },
                                    {
                                      default: d(() => [
                                        r("div", $s, [
                                          o(
                                            u(_t),
                                            {
                                              disabled: L.connecting,
                                              style: {
                                                width: "292px",
                                              },
                                              value: L.encryptType,
                                              "onUpdate:value":
                                                t[1] ||
                                                (t[1] = (e) =>
                                                  (L.encryptType = e)),
                                            },
                                            {
                                              default: d(() => [
                                                o(
                                                  u(Nt),
                                                  {
                                                    value: "wpa",
                                                  },
                                                  {
                                                    default: d(
                                                      () =>
                                                        t[8] ||
                                                        (t[8] = [
                                                          C("WPA/WPA2/WPA3"),
                                                        ]),
                                                    ),
                                                    _: 1,
                                                  },
                                                  8,
                                                  ["value"],
                                                ),
                                                o(
                                                  u(Nt),
                                                  {
                                                    value: "none",
                                                  },
                                                  {
                                                    default: d(
                                                      () =>
                                                        t[9] ||
                                                        (t[9] = [C("None")]),
                                                    ),
                                                    _: 1,
                                                  },
                                                  8,
                                                  ["value"],
                                                ),
                                              ]),
                                              _: 1,
                                            },
                                            8,
                                            ["disabled", "value"],
                                          ),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["label"],
                                  ),
                                  "wpa" === L.encryptType
                                    ? (i(),
                                      g(
                                        u(Ft),
                                        {
                                          key: 0,
                                          label: e.$t("common.password"),
                                          name: "key",
                                        },
                                        {
                                          default: d(() => [
                                            r("div", ei, [
                                              o(
                                                u(Bt),
                                                {
                                                  disabled: L.connecting,
                                                  style: {
                                                    width: "292px",
                                                  },
                                                  value:
                                                    L.joinManuallyModel.key,
                                                  "onUpdate:value":
                                                    t[2] ||
                                                    (t[2] = (e) =>
                                                      (L.joinManuallyModel.key =
                                                        e)),
                                                  placeholder: e.$t(
                                                    "settings.wifiPasswordPlaceholder",
                                                  ),
                                                },
                                                null,
                                                8,
                                                [
                                                  "disabled",
                                                  "value",
                                                  "placeholder",
                                                ],
                                              ),
                                            ]),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["label"],
                                      ))
                                    : y("", !0),
                                ]),
                                _: 1,
                              },
                              8,
                              ["rules", "model"],
                            ),
                          ]))
                        : L.scanning
                          ? (i(),
                            n("div", ti, [
                              r(
                                "div",
                                ai,
                                p(e.$t("settings.findingWifiAp")),
                                1,
                              ),
                            ]))
                          : (null == (s = L.aps) ? void 0 : s.length)
                            ? _.value
                              ? (i(),
                                n("div", oi, [
                                  (null == (v = L.savedAps) ? void 0 : v.length)
                                    ? (i(),
                                      n(
                                        w,
                                        {
                                          key: 0,
                                        },
                                        [
                                          r(
                                            "div",
                                            di,
                                            p(e.$t("settings.knownNetworks")),
                                            1,
                                          ),
                                          (i(!0),
                                          n(
                                            w,
                                            null,
                                            E(
                                              L.savedAps,
                                              (l) => (
                                                i(),
                                                n(
                                                  "div",
                                                  {
                                                    onClick: (e) => W(l.ssid),
                                                    class: c({
                                                      "wifi-item flex-btw pointer":
                                                        !0,
                                                      selected:
                                                        L.selectedSsid ===
                                                        l.ssid,
                                                    }),
                                                    key: l.ssid,
                                                  },
                                                  [
                                                    r("div", ci, [
                                                      t[10] ||
                                                        (t[10] = r(
                                                          "div",
                                                          {
                                                            class:
                                                              "left-border full-height",
                                                          },
                                                          null,
                                                          -1,
                                                        )),
                                                      r(
                                                        "img",
                                                        {
                                                          src: u(Ns)(l),
                                                          alt: "wifi ap icon",
                                                          width: "24",
                                                        },
                                                        null,
                                                        8,
                                                        ui,
                                                      ),
                                                      r(
                                                        "span",
                                                        null,
                                                        p(l.ssid),
                                                        1,
                                                      ),
                                                    ]),
                                                    o(
                                                      u(St),
                                                      {
                                                        title:
                                                          e.$t("common.remove"),
                                                      },
                                                      {
                                                        default: d(() => [
                                                          o(
                                                            u(oa),
                                                            {
                                                              icon: "delete",
                                                              onClick: m(
                                                                (e) => {
                                                                  return (
                                                                    (t = l),
                                                                    void ke({
                                                                      content:
                                                                        R(
                                                                          "settings.removeAp",
                                                                        ),
                                                                      async onOk() {
                                                                        (await le.removeSavedAp(
                                                                          t.ssid,
                                                                        ),
                                                                          U());
                                                                      },
                                                                    })
                                                                  );
                                                                  var t;
                                                                },
                                                                ["stop"],
                                                              ),
                                                            },
                                                            {
                                                              default: d(() => [
                                                                o(a, {
                                                                  size: 20,
                                                                  name: "gl-kvm-delete",
                                                                }),
                                                              ]),
                                                              _: 2,
                                                            },
                                                            1032,
                                                            ["onClick"],
                                                          ),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      ["title"],
                                                    ),
                                                  ],
                                                  10,
                                                  ri,
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ],
                                        64,
                                      ))
                                    : y("", !0),
                                  r(
                                    "div",
                                    pi,
                                    p(e.$t("settings.availableNetworks")),
                                    1,
                                  ),
                                  (i(!0),
                                  n(
                                    w,
                                    null,
                                    E(
                                      L.aps,
                                      (e) => (
                                        i(),
                                        n(
                                          "div",
                                          {
                                            onClick: (t) => W(e.ssid),
                                            class: c({
                                              "wifi-item flex-btw pointer": !0,
                                              selected:
                                                L.selectedSsid === e.ssid,
                                            }),
                                            key: e.ssid,
                                          },
                                          [
                                            r("div", mi, [
                                              t[11] ||
                                                (t[11] = r(
                                                  "div",
                                                  {
                                                    class:
                                                      "left-border full-height",
                                                  },
                                                  null,
                                                  -1,
                                                )),
                                              r(
                                                "img",
                                                {
                                                  src: u(Ns)(e),
                                                  alt: "wifi ap icon",
                                                  width: "24",
                                                },
                                                null,
                                                8,
                                                fi,
                                              ),
                                              r("span", null, p(e.ssid), 1),
                                            ]),
                                            u(Zs)(e.band)
                                              ? (i(),
                                                n(
                                                  "div",
                                                  hi,
                                                  p(u(Zs)(e.band)),
                                                  1,
                                                ))
                                              : y("", !0),
                                          ],
                                          10,
                                          vi,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]))
                              : D.value
                                ? (i(),
                                  n("div", gi, [
                                    r("div", Ci, [
                                      r(
                                        "span",
                                        null,
                                        p(e.$t("settings.networkWithMark")),
                                        1,
                                      ),
                                      r("span", null, p(L.selectedSsid), 1),
                                    ]),
                                    o(
                                      u(It),
                                      {
                                        ref_key: "formRef",
                                        ref: b,
                                        model: L.joinFormModel,
                                        rules: T.value,
                                      },
                                      {
                                        default: d(() => [
                                          o(
                                            u(Ft),
                                            {
                                              name: "password",
                                            },
                                            {
                                              default: d(() => [
                                                o(
                                                  u(Bt),
                                                  {
                                                    disabled: L.connecting,
                                                    value:
                                                      L.joinFormModel.password,
                                                    "onUpdate:value":
                                                      t[4] ||
                                                      (t[4] = (e) =>
                                                        (L.joinFormModel.password =
                                                          e)),
                                                    placeholder: e.$t(
                                                      "settings.wifiPasswordPlaceholder",
                                                    ),
                                                    maxlength: 64,
                                                    onPressEnter:
                                                      t[5] ||
                                                      (t[5] = (e) => B()),
                                                  },
                                                  null,
                                                  8,
                                                  [
                                                    "disabled",
                                                    "value",
                                                    "placeholder",
                                                  ],
                                                ),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["model", "rules"],
                                    ),
                                  ]))
                                : y("", !0)
                            : (i(),
                              n("div", li, [
                                r("div", null, [
                                  r("div", si, [
                                    o(a, {
                                      error: "",
                                      name: "gl-kvm-circle-exclamation",
                                      size: 32,
                                    }),
                                  ]),
                                  r(
                                    "div",
                                    ii,
                                    p(e.$t("settings.cantFindNetwork")),
                                    1,
                                  ),
                                  r("div", ni, [
                                    o(
                                      l,
                                      {
                                        onClick: t[3] || (t[3] = (e) => U()),
                                        type: "link",
                                        underline: "",
                                        noPadding: "",
                                      },
                                      {
                                        default: d(() => [
                                          C(p(e.$t("common.retry")), 1),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                ]),
                              ])),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["open", "title", "contentStyle"],
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-e410944b"]],
  ),
  ki = {
    class: "text-2",
  },
  xi = {
    key: 0,
  },
  Mi = {
    key: 1,
  },
  Si = {
    class: "flex-btw footer",
  },
  Ei = U(
    a({
      __name: "currentApInfo",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = e,
          l = t,
          s = [
            {
              key: "ssid",
              label: "SSID",
            },
            {
              key: "ip",
              label: "settings.ip_address",
            },
            {
              key: "gateway",
              label: "settings.gateway",
            },
            {
              key: "mac",
              label: "settings.macAddr",
            },
          ],
          c = P(),
          v = h({
            wifiSettingsOpen: !1,
            disconnecting: !1,
          }),
          m = () => {
            l("update:open", !1);
          },
          g = () => {
            ((v.wifiSettingsOpen = !0), m());
          },
          y = async () => {
            try {
              ((v.disconnecting = !0),
                await le.disconnectAp(),
                m(),
                c.getCurrentAp(),
                (v.disconnecting = !1));
            } catch (e) {
              v.disconnecting = !1;
            }
          };
        return (e, t) => {
          const l = f("BaseButton"),
            h = f("BaseModal");
          return (
            i(),
            n(
              w,
              null,
              [
                o(
                  h,
                  {
                    width: 440,
                    title: "common.modify",
                    open: a.open,
                    onClose: m,
                    showClose: "",
                  },
                  {
                    footer: d(() => [
                      r("div", Si, [
                        o(
                          l,
                          {
                            loading: v.disconnecting,
                            class: "full-width fw-500",
                            danger: "",
                            onClick: y,
                          },
                          {
                            default: d(() => [
                              C(p(e.$t("settings.disconnectWifi")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["loading"],
                        ),
                        o(
                          l,
                          {
                            style: {
                              "margin-left": "0",
                            },
                            onClick: g,
                            class: "full-width",
                          },
                          {
                            default: d(() => [
                              C(p(e.$t("settings.switchNetwork")), 1),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                    ]),
                    default: d(() => [
                      (i(),
                      n(
                        w,
                        null,
                        E(s, ({ key: t, label: a }) => {
                          var l, s;
                          return r(
                            "div",
                            {
                              key: t,
                              class: "item flex-btw",
                            },
                            [
                              r("span", ki, p(e.$t(a)), 1),
                              "ssid" === t
                                ? (i(),
                                  n(
                                    "span",
                                    xi,
                                    p(
                                      null == (l = u(c).currentAp)
                                        ? void 0
                                        : l[t],
                                    ),
                                    1,
                                  ))
                                : (i(),
                                  n(
                                    "span",
                                    Mi,
                                    p(
                                      null == (s = u(c).currentAp)
                                        ? void 0
                                        : s[t],
                                    ),
                                    1,
                                  )),
                            ],
                          );
                        }),
                        64,
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open"],
                ),
                o(
                  bi,
                  {
                    open: v.wifiSettingsOpen,
                    "onUpdate:open":
                      t[0] || (t[0] = (e) => (v.wifiSettingsOpen = e)),
                  },
                  null,
                  8,
                  ["open"],
                ),
              ],
              64,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-8fd005be"]],
  ),
  Li = {
    class: "no-card-view",
  },
  _i = {
    class: "flex-btw",
  },
  Di = {
    class: "content bordered",
  },
  Oi = {
    class: "flex",
  },
  Ti = ["src"],
  Ii = {
    class: "flex",
  },
  Fi = U(
    a({
      __name: "noCardView",
      setup(e) {
        const { cellularState: t } = Xe();
        return (e, a) => {
          const l = f("BaseText");
          return (
            i(),
            n("div", Li, [
              o(
                l,
                {
                  class: "title",
                  type: "body-m",
                },
                {
                  default: d(() => [C(p(e.$t("settings.modem")), 1)]),
                  _: 1,
                },
              ),
              r("div", _i, [
                o(
                  l,
                  {
                    type: "body-r",
                    variant: "level2",
                  },
                  {
                    default: d(() => a[0] || (a[0] = [C("IMEI")])),
                    _: 1,
                  },
                ),
                o(
                  Ye,
                  {
                    text: u(t).imei,
                  },
                  null,
                  8,
                  ["text"],
                ),
              ]),
              o(
                l,
                {
                  class: "sim-title",
                  type: "body-m",
                },
                {
                  default: d(() => [C(p(e.$t("settings.simCard")), 1)]),
                  _: 1,
                },
              ),
              r("div", Di, [
                r("div", Oi, [
                  r(
                    "img",
                    {
                      src: u(
                        "data:image/svg+xml,%3csvg%20width='61'%20height='60'%20viewBox='0%200%2061%2060'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5774_329)'%3e%3crect%20x='0.0610352'%20width='60'%20height='60'%20rx='30'%20fill='url(%23paint0_linear_5774_329)'/%3e%3cpath%20d='M38.9844%2011.5228C39.48%2011.5729%2039.9458%2011.7952%2040.2972%2012.1545L47.8888%2019.9182C48.2786%2020.3172%2048.4985%2020.8546%2048.4985%2021.4124V60.1044C48.4981%2061.283%2047.5421%2062.2406%2046.3635%2062.2412H12.196C11.017%2062.2412%2010.0615%2061.2833%2010.061%2060.1044V13.6469C10.061%2012.4675%2011.0167%2011.5118%2012.196%2011.5118H38.7701L38.9844%2011.5228Z'%20fill='white'/%3e%3cpath%20d='M46.2524%2039.8048C46.2524%2038.478%2045.1768%2037.4025%2043.85%2037.4025H15.0219C13.6951%2037.4025%2012.6196%2038.478%2012.6196%2039.8048V51.8165C12.6196%2053.1433%2013.6951%2054.2189%2015.0219%2054.2189H43.85C45.1768%2054.2189%2046.2524%2053.1433%2046.2524%2051.8165V39.8048Z'%20fill='%23EFEFEF'/%3e%3cpath%20d='M29.411%2033.1C34.2435%2033.1%2038.161%2029.1825%2038.161%2024.35C38.161%2019.5175%2034.2435%2015.6%2029.411%2015.6C24.5785%2015.6%2020.661%2019.5175%2020.661%2024.35C20.661%2029.1825%2024.5785%2033.1%2029.411%2033.1Z'%20fill='%234285F4'/%3e%3cpath%20d='M32.5046%2028.4749L29.411%2025.3813L26.3174%2028.4749L25.2862%2027.4437L28.3798%2024.3501L25.2862%2021.2565L26.3174%2020.2253L29.411%2023.3189L32.5046%2020.2253L33.5358%2021.2565L30.4422%2024.3501L33.5358%2027.4437L32.5046%2028.4749Z'%20fill='white'/%3e%3cpath%20d='M36.311%2037.5V54.2284'%20stroke='%23E3E3E3'%20stroke-width='1.25'/%3e%3cpath%20d='M36.311%2046.25H12.6267'%20stroke='%23E3E3E3'%20stroke-width='1.25'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_5774_329'%20x1='30.061'%20y1='0'%20x2='30.061'%20y2='60'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E3ECFA'/%3e%3cstop%20offset='1'%20stop-color='%23DAE7FF'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_5774_329'%3e%3crect%20x='0.0610352'%20width='60'%20height='60'%20rx='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
                      ),
                      alt: "No SIM Card",
                      width: "60",
                    },
                    null,
                    8,
                    Ti,
                  ),
                ]),
                o(
                  l,
                  {
                    type: "body-r",
                    variant: "level2",
                    center: "",
                  },
                  {
                    default: d(() => [C(p(e.$t("settings.noSimDetected")), 1)]),
                    _: 1,
                  },
                ),
                r("div", Ii, [
                  o(
                    l,
                    {
                      type: "footnote-r",
                      variant: "level3",
                      class: "subtitle",
                      center: "",
                    },
                    {
                      default: d(() => [
                        C(p(e.$t("settings.noSimDetectedTip")), 1),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-80f14982"]],
  ),
  Ai = {
    class: "with-detail-panel flex-btw pointer",
  },
  Vi = {
    class: "icon-container flex bg-surface2",
  },
  Ui = {
    class: "content flex-1",
  },
  Pi = U(
    a({
      __name: "withDetailPanel",
      props: {
        title: {},
        description: {},
        icon: {},
      },
      setup(e) {
        const t = e;
        return (e, a) => {
          const l = f("GlSvg"),
            s = f("BaseText");
          return (
            i(),
            n("div", Ai, [
              r("div", Vi, [
                o(l, {
                  primary: "",
                  size: 20,
                  name: "gl-kvm-settings",
                }),
              ]),
              r("div", Ui, [
                o(s, null, {
                  default: d(() => [C(p(t.title), 1)]),
                  _: 1,
                }),
                o(
                  s,
                  {
                    variant: "level3",
                    type: "caption-r",
                  },
                  {
                    default: d(() => [C(p(t.description), 1)]),
                    _: 1,
                  },
                ),
              ]),
              o(l, {
                class: "more-icon",
                size: 16,
                color: "var(--gl-color-text-level3)",
                name: "gl-kvm-collapse-down",
              }),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-c1ab3291"]],
  ),
  Wi = {
    key: 0,
    class: "flex",
  },
  Ri = ["src"],
  Zi = a({
    __name: "signalDisplay",
    props: {
      signal: {},
      showTitle: {
        type: Boolean,
        default: !0,
      },
    },
    setup(e) {
      const t = e,
        a = s(() => qe.get(t.signal));
      return (e, l) => {
        const s = f("BaseText");
        return a.value
          ? (i(),
            n("div", Wi, [
              r(
                "img",
                {
                  src: a.value.icon,
                  width: "16",
                  style: {
                    "margin-right": "4px",
                  },
                },
                null,
                8,
                Ri,
              ),
              t.showTitle
                ? (i(),
                  g(
                    s,
                    {
                      key: 0,
                      style: I({
                        color: a.value.color,
                      }),
                    },
                    {
                      default: d(() => [C(p(e.$t(a.value.title)), 1)]),
                      _: 1,
                    },
                    8,
                    ["style"],
                  ))
                : y("", !0),
            ]))
          : y("", !0);
      };
    },
  }),
  Ni = {
    class: "with-card",
  },
  Bi = {
    class: "flex-start",
  },
  Ki = {
    class: "flex-btw",
  },
  zi = {
    class: "info flex-btw",
  },
  Gi = {
    class: "info flex-btw",
  },
  Ji = {
    class: "info flex-btw",
  },
  Hi = {
    class: "info flex-btw",
  },
  ji = {
    class: "info flex-btw",
  },
  Xi = {
    class: "info flex-btw",
  },
  Yi = U(
    a({
      __name: "withCardView",
      emits: ["openSimSettings", "openATSettings"],
      setup(e, { emit: t }) {
        const { cellularStore: a } = Z(),
          s = l(!1),
          { cellularState: c } = a,
          v = t,
          m = () => {
            v("openSimSettings");
          },
          h = () => {
            v("openATSettings");
          },
          w = async (e) => {
            try {
              ((s.value = !0),
                await Qe.switchModemEnable(e),
                await a.getCellularState(),
                (s.value = !1));
            } catch (t) {
              s.value = !1;
            }
          };
        return (e, t) => {
          var l;
          const v = f("GlSvg"),
            b = f("BaseInfo"),
            k = f("BaseText"),
            x = f("BaseButton");
          return (
            i(),
            n("div", Ni, [
              u(a).simCardNotRegistered
                ? (i(),
                  g(
                    b,
                    {
                      key: 0,
                      warning: "",
                      style: {
                        "margin-bottom": "12px",
                      },
                    },
                    {
                      default: d(() => [
                        r("div", Bi, [
                          o(v, {
                            style: {
                              "margin-right": "4px",
                            },
                            color: "var(--gl-color-warning-primary)",
                            name: "gl-kvm-warning1",
                          }),
                          r(
                            "span",
                            null,
                            p(e.$t("settings.simCardNotRegistered")),
                            1,
                          ),
                        ]),
                      ]),
                      _: 1,
                    },
                  ))
                : y("", !0),
              o(
                k,
                {
                  class: "title",
                  type: "body-m",
                },
                {
                  default: d(() => [C(p(e.$t("settings.modem")), 1)]),
                  _: 1,
                },
              ),
              r("div", Ki, [
                o(
                  k,
                  {
                    type: "body-r",
                    variant: "level2",
                  },
                  {
                    default: d(() => t[2] || (t[2] = [C("IMEI")])),
                    _: 1,
                  },
                ),
                o(
                  Ye,
                  {
                    text: u(c).imei,
                  },
                  null,
                  8,
                  ["text"],
                ),
              ]),
              o(
                k,
                {
                  class: "item-title",
                  type: "body-m",
                },
                {
                  default: d(() => [C(p(e.$t("settings.simCard")), 1)]),
                  _: 1,
                },
              ),
              r("div", zi, [
                o(
                  k,
                  {
                    variant: "level2",
                  },
                  {
                    default: d(() => [
                      C(p(e.$t("settings.networkOperator")), 1),
                    ]),
                    _: 1,
                  },
                ),
                o(k, null, {
                  default: d(() => [C(p(u(c).operator), 1)]),
                  _: 1,
                }),
              ]),
              r("div", Gi, [
                o(
                  k,
                  {
                    variant: "level2",
                  },
                  {
                    default: d(() => [C(p(e.$t("settings.phoneNumber")), 1)]),
                    _: 1,
                  },
                ),
                u(c).msisdn
                  ? (i(),
                    g(
                      Ye,
                      {
                        key: 0,
                        text: u(c).msisdn,
                      },
                      null,
                      8,
                      ["text"],
                    ))
                  : (i(),
                    g(
                      k,
                      {
                        key: 1,
                        variant: "level2",
                      },
                      {
                        default: d(() => t[3] || (t[3] = [C("-")])),
                        _: 1,
                      },
                    )),
              ]),
              r("div", Ji, [
                o(
                  k,
                  {
                    variant: "level2",
                  },
                  {
                    default: d(() => t[4] || (t[4] = [C("ICCID")])),
                    _: 1,
                  },
                ),
                o(
                  Ye,
                  {
                    text: u(c).iccid,
                  },
                  null,
                  8,
                  ["text"],
                ),
              ]),
              r("div", Hi, [
                o(
                  k,
                  {
                    variant: "level2",
                  },
                  {
                    default: d(() => [C(p(e.$t("settings.apn")), 1)]),
                    _: 1,
                  },
                ),
                o(k, null, {
                  default: d(() => {
                    var e;
                    return [
                      C(p((null == (e = u(c).apn) ? void 0 : e.apn) || "-"), 1),
                    ];
                  }),
                  _: 1,
                }),
              ]),
              o(
                k,
                {
                  class: "item-title",
                  type: "body-m",
                },
                {
                  default: d(() => [C(p(e.$t("settings.internet")), 1)]),
                  _: 1,
                },
              ),
              r("div", ji, [
                o(
                  k,
                  {
                    variant: "level2",
                  },
                  {
                    default: d(() => [C(p(e.$t("settings.signal")), 1)]),
                    _: 1,
                  },
                ),
                o(
                  Zi,
                  {
                    signal: null == (l = u(c).signal_level) ? void 0 : l.level,
                  },
                  null,
                  8,
                  ["signal"],
                ),
              ]),
              r("div", Xi, [
                o(
                  k,
                  {
                    variant: "level2",
                  },
                  {
                    default: d(() => [C(p(e.$t("settings.ip_address")), 1)]),
                    _: 1,
                  },
                ),
                o(k, null, {
                  default: d(() => [C(p(u(c).ip_address || "-"), 1)]),
                  _: 1,
                }),
              ]),
              u(a).connected
                ? (i(),
                  g(
                    x,
                    {
                      key: 2,
                      onClick: t[1] || (t[1] = (e) => w(!1)),
                      loading: s.value,
                      class: "full-width connect-btn",
                      medium: "",
                    },
                    {
                      default: d(() => [C(p(e.$t("common.disConnect")), 1)]),
                      _: 1,
                    },
                    8,
                    ["loading"],
                  ))
                : (i(),
                  g(
                    x,
                    {
                      key: 1,
                      onClick: t[0] || (t[0] = (e) => w(!0)),
                      loading: s.value,
                      class: "full-width connect-btn",
                      medium: "",
                      primary: "",
                    },
                    {
                      default: d(() => [C(p(e.$t("common.connect")), 1)]),
                      _: 1,
                    },
                    8,
                    ["loading"],
                  )),
              o(Ht, {
                dashed: "",
                horizontal: "",
                gutter: 20,
              }),
              o(
                Pi,
                {
                  onClick: m,
                  style: {
                    "margin-bottom": "16px",
                  },
                  icon: "gl-kvm-external-device",
                  title: e.$t("settings.simSettings"),
                  description: e.$t("settings.simSettingsDescription"),
                },
                null,
                8,
                ["title", "description"],
              ),
              o(
                Pi,
                {
                  onClick: h,
                  icon: "gl-kvm-external-device",
                  title: e.$t("settings.atCommands"),
                  description: e.$t("settings.atCommandDescription"),
                },
                null,
                8,
                ["title", "description"],
              ),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-ed1ab697"]],
  ),
  qi = a({
    __name: "cellularDetailModal",
    props: {
      open: {
        type: Boolean,
      },
    },
    emits: ["update:open", "openSimSettings", "openATSettings"],
    setup(e, { emit: t }) {
      const a = e,
        l = t,
        n = () => {
          l("openSimSettings");
        },
        { cellularStore: o } = Z(),
        r = () => {
          l("openATSettings");
        },
        c = s({
          get: () => a.open,
          set(e) {
            l("update:open", e);
          },
        });
      return (e, t) => {
        const a = f("BaseModal");
        return (
          i(),
          g(
            a,
            {
              contentStyle: {
                paddingBottom: 0,
              },
              showFooter: !1,
              width: 440,
              title: e.$t("settings.cellular"),
              open: c.value,
              "onUpdate:open": t[0] || (t[0] = (e) => (c.value = e)),
            },
            {
              default: d(() => [
                u(o).simCardNotInserted
                  ? (i(),
                    g(Fi, {
                      key: 1,
                    }))
                  : (i(),
                    g(Yi, {
                      key: 0,
                      onOpenATSettings: r,
                      onOpenSimSettings: n,
                    })),
              ]),
              _: 1,
            },
            8,
            ["title", "open"],
          )
        );
      };
    },
  }),
  Qi = {
    key: 0,
    class: "enter-code",
  },
  $i = {
    class: "flex",
  },
  en = ["src"],
  tn = {
    key: 1,
    class: "code-error",
  },
  an = {
    class: "flex",
  },
  ln = ["src"],
  sn = U(
    a({
      __name: "pinCodeModal",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = e,
          l = t,
          c = Xe(),
          v = s({
            get: () => a.open,
            set(e) {
              l("update:open", e);
            },
          }),
          m = h({
            pin: "",
            loading: !1,
          }),
          w = s(() => !m.pin || m.pin.length <= 4 || !m.pin);
        const b = async () => {
          try {
            if (((e = m.pin), !/^\d{4,8}$/.test(e)))
              return void Lt.error(R("pinCodeModal.pinCodeInvalid"));
            m.loading = !0;
            const { success: t, retries: a } = await Qe.postPinCode(m.pin);
            if ((await c.getCellularState(), (m.loading = !1), t)) return;
            a > 1
              ? Lt.error(
                  R("settings.pinCodeFailed", {
                    count: 2,
                  }),
                )
              : 1 === a && Lt.error(R("settings.pinCodeFailedLast"));
          } catch (t) {
            m.loading = !1;
          }
          var e;
        };
        return (e, t) => {
          const a = f("BaseText"),
            l = f("BaseButton"),
            s = f("BaseModal");
          return (
            i(),
            g(
              s,
              {
                contentStyle: {
                  paddingBottom: 0,
                },
                showFooter: !1,
                width: 360,
                title: e.$t("settings.pinCode"),
                open: v.value,
                "onUpdate:open": t[1] || (t[1] = (e) => (v.value = e)),
              },
              {
                default: d(() => [
                  u(c).lockedPin
                    ? (i(),
                      n("div", Qi, [
                        r("div", $i, [
                          r(
                            "img",
                            {
                              src: u(
                                "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5792_5201)'%3e%3crect%20width='80'%20height='80'%20rx='40'%20fill='url(%23paint0_linear_5792_5201)'/%3e%3cpath%20d='M51.8978%2015.3638C52.5586%2015.4305%2053.1797%2015.7269%2053.6483%2016.2061L63.7703%2026.5576C64.29%2027.0895%2064.5833%2027.8061%2064.5833%2028.5498V80.1392C64.5827%2081.7106%2063.308%2082.9875%2061.7366%2082.9883H16.18C14.6079%2082.9883%2013.3339%2081.7111%2013.3333%2080.1392V18.1958C13.3333%2016.6233%2014.6075%2015.3491%2016.18%2015.3491H51.6121L51.8978%2015.3638Z'%20fill='white'/%3e%3cpath%20d='M61.5884%2052.073C61.5884%2050.304%2060.1543%2048.8699%2058.3853%2048.8699H19.9478C18.1787%2048.8699%2016.7446%2050.304%2016.7446%2052.073V68.0886C16.7446%2069.8577%2018.1787%2071.2917%2019.9478%2071.2917H58.3853C60.1543%2071.2917%2061.5884%2069.8577%2061.5884%2068.0886V52.073Z'%20fill='%23EDEDED'/%3e%3cpath%20d='M48.3335%2049V71.3045'%20stroke='%23D4D4D4'%20stroke-width='1.66667'/%3e%3cpath%20d='M48.3335%2060.6667H16.7544'%20stroke='%23D4D4D4'%20stroke-width='1.66667'/%3e%3cpath%20d='M21%2026V41'%20stroke='%23D8D8D8'%20stroke-width='4'%20stroke-linecap='round'/%3e%3cpath%20d='M31%2026V41'%20stroke='%23D8D8D8'%20stroke-width='4'%20stroke-linecap='round'/%3e%3cpath%20d='M41%2026V41'%20stroke='%23D8D8D8'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_5792_5201'%20x1='40'%20y1='0'%20x2='40'%20y2='80'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E3ECFA'/%3e%3cstop%20offset='1'%20stop-color='%23DAE7FF'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_5792_5201'%3e%3crect%20width='80'%20height='80'%20rx='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
                              ),
                              alt: "pin code",
                              width: "80",
                            },
                            null,
                            8,
                            en,
                          ),
                        ]),
                        o(
                          a,
                          {
                            class: "enter-code-tip",
                            center: "",
                          },
                          {
                            default: d(() => [
                              C(p(e.$t("settings.enterPinTip")), 1),
                            ]),
                            _: 1,
                          },
                        ),
                        o(
                          u(At),
                          {
                            maxlength: 8,
                            size: "middle",
                            placeholder: e.$t("settings.pinCodePlaceholder"),
                            value: m.pin,
                            "onUpdate:value":
                              t[0] || (t[0] = (e) => (m.pin = e)),
                            class: "text-center",
                          },
                          null,
                          8,
                          ["placeholder", "value"],
                        ),
                        o(
                          l,
                          {
                            disabled: w.value,
                            loading: m.loading,
                            primary: "",
                            class: "full-width apply-btn",
                            onClick: b,
                          },
                          {
                            default: d(() => [C(p(e.$t("common.apply")), 1)]),
                            _: 1,
                          },
                          8,
                          ["disabled", "loading"],
                        ),
                      ]))
                    : y("", !0),
                  u(c).lockedPuk
                    ? (i(),
                      n("div", tn, [
                        r("div", an, [
                          r(
                            "img",
                            {
                              src: u(
                                "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5792_5223)'%3e%3crect%20width='80'%20height='80'%20rx='40'%20fill='%23FAE1E6'/%3e%3cpath%20d='M51.8978%2015.3638C52.5586%2015.4305%2053.1798%2015.7269%2053.6483%2016.2061L63.7704%2026.5576C64.2901%2027.0895%2064.5834%2027.8061%2064.5834%2028.5498V80.1392C64.5828%2081.7106%2063.3081%2082.9875%2061.7367%2082.9883H16.1801C14.608%2082.9883%2013.334%2081.7111%2013.3334%2080.1392V18.1958C13.3334%2016.6233%2014.6076%2015.3491%2016.1801%2015.3491H51.6122L51.8978%2015.3638Z'%20fill='white'/%3e%3cpath%20d='M45.3332%2028.8889H47.5554C48.1691%2028.8889%2048.6665%2029.3863%2048.6665%2030V43.3333C48.6665%2043.947%2048.1691%2044.4444%2047.5554%2044.4444H29.7776C29.164%2044.4444%2028.6665%2043.947%2028.6665%2043.3333V30C28.6665%2029.3863%2029.164%2028.8889%2029.7776%2028.8889H31.9998V27.7778C31.9998%2024.0959%2034.9846%2021.1111%2038.6665%2021.1111C42.3484%2021.1111%2045.3332%2024.0959%2045.3332%2027.7778V28.8889ZM37.5554%2037.4804V40H39.7776V37.4804C40.4418%2037.0962%2040.8887%2036.3781%2040.8887%2035.5555C40.8887%2034.3282%2039.8938%2033.3333%2038.6665%2033.3333C37.4392%2033.3333%2036.4443%2034.3282%2036.4443%2035.5555C36.4443%2036.3781%2036.8912%2037.0962%2037.5554%2037.4804ZM43.1109%2028.8889V27.7778C43.1109%2025.3232%2041.1211%2023.3333%2038.6665%2023.3333C36.2119%2023.3333%2034.2221%2025.3232%2034.2221%2027.7778V28.8889H43.1109Z'%20fill='%23E04C7E'/%3e%3cpath%20d='M61.5885%2053.073C61.5885%2051.304%2060.1544%2049.8699%2058.3854%2049.8699H19.9479C18.1788%2049.8699%2016.7448%2051.304%2016.7448%2053.073V69.0886C16.7448%2070.8577%2018.1788%2072.2917%2019.9479%2072.2917H58.3854C60.1544%2072.2917%2061.5885%2070.8577%2061.5885%2069.0886V53.073Z'%20fill='%23EFEFEF'/%3e%3cpath%20d='M48.3334%2050V72.3045'%20stroke='%23E3E3E3'%20stroke-width='1.66667'/%3e%3cpath%20d='M48.3334%2061.6667H16.7543'%20stroke='%23E3E3E3'%20stroke-width='1.66667'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5792_5223'%3e%3crect%20width='80'%20height='80'%20rx='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
                              ),
                              alt: "pin code error",
                              width: "80",
                            },
                            null,
                            8,
                            ln,
                          ),
                        ]),
                        o(
                          a,
                          {
                            center: "",
                            type: "head-m",
                            class: "locked-tip",
                          },
                          {
                            default: d(() => [
                              C(p(e.$t("settings.simCardLocked")), 1),
                            ]),
                            _: 1,
                          },
                        ),
                        o(
                          a,
                          {
                            center: "",
                            class: "locked-sub-tip",
                            variant: "level2",
                          },
                          {
                            default: d(() => [
                              C(p(e.$t("settings.simLockedTip")), 1),
                            ]),
                            _: 1,
                          },
                        ),
                      ]))
                    : y("", !0),
                ]),
                _: 1,
              },
              8,
              ["title", "open"],
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-c9ea0400"]],
  ),
  nn = {
    class: "flex",
  },
  on = {
    class: "form-fields flex-end",
  },
  dn = {
    class: "fields",
  },
  rn = {
    class: "form-fields flex-end",
  },
  cn = {
    class: "fields",
  },
  un = {
    class: "form-fields flex-end",
  },
  pn = {
    class: "fields",
  },
  vn = {
    class: "form-fields flex-end",
  },
  mn = {
    class: "fields",
  },
  fn = {
    class: "flex",
  },
  hn = {
    class: "form-fields flex-end",
  },
  gn = {
    class: "fields",
  },
  Cn = {
    class: "form-fields flex-end",
  },
  yn = {
    class: "fields",
  },
  wn = {
    class: "form-fields flex-end",
  },
  bn = {
    class: "fields",
  },
  kn = {
    class: "form-fields flex-end",
  },
  xn = {
    class: "fields",
  },
  Mn = U(
    a({
      __name: "simSettingsModal",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = e,
          c = t,
          p = l(),
          v = Ea(at),
          m = Ea(lt),
          C = Xe(),
          b = s({
            get: () => a.open,
            set(e) {
              c("update:open", e);
            },
          }),
          k = h({
            loading: !1,
            formModel: {},
          }),
          x = s(() => {
            const e = {
              apn: {
                required: !0,
                message: R("settings.apnRequired"),
              },
              mtu: {
                required: !0,
                message: R("settings.mtuRequired"),
              },
              authentication: {
                required: !0,
                message: R("settings.authenticationRequired"),
              },
            };
            return (
              [tt.None, tt.Unknown].includes(k.formModel.authentication) ||
                ((e.username = {
                  required: !0,
                  message: R("common.usernameRequired"),
                }),
                (e.password = {
                  required: !0,
                  message: R("common.passwordRequired"),
                })),
              e
            );
          }),
          M = () => {
            (async () => {
              try {
                ((k.formModel = {}),
                  (k.loading = !0),
                  (k.formModel = await Qe.getSimConfig()),
                  await C.getCellularState(),
                  k.formModel.authentication === tt.Unknown &&
                    (k.formModel.authentication = null),
                  (k.loading = !1));
              } catch (e) {
                k.loading = !1;
              }
            })();
          },
          S = async (e) => {
            var t;
            try {
              await (null == (t = p.value) ? void 0 : t.validateFields());
              const {
                apn: a,
                username: l,
                password: s,
                authentication: i,
              } = k.formModel;
              (await Qe.setSimConfig({
                con_id: st,
                con_type: it,
                apn: a,
                username: l,
                password: s,
                authentication: i,
              }),
                e(!0));
            } catch (a) {
              (new ue(a), e(!1));
            }
          };
        return (e, t) => {
          const a = f("BaseModal");
          return (
            i(),
            g(
              a,
              {
                onOpen: M,
                contentStyle: {
                  paddingBottom: 0,
                },
                width: 440,
                okText: e.$t("common.apply"),
                title: e.$t("settings.simSettings"),
                open: b.value,
                "onUpdate:open": t[6] || (t[6] = (e) => (b.value = e)),
                beforeOk: S,
              },
              {
                default: d(() => [
                  o(
                    u(zt),
                    {
                      spinning: k.loading,
                    },
                    {
                      default: d(() => [
                        o(
                          u(It),
                          {
                            requiredMark: !1,
                            class: "sim-settings-form",
                            ref_key: "formRef",
                            ref: p,
                            rules: x.value,
                            model: k.formModel,
                            layout: "horizontal",
                            colon: !1,
                          },
                          {
                            default: d(() => [
                              o(
                                u(Ft),
                                {
                                  name: "apn",
                                },
                                {
                                  label: d(() => [
                                    r("div", nn, [
                                      t[7] ||
                                        (t[7] = r("span", null, "APN", -1)),
                                      o(
                                        wa,
                                        {
                                          title: e.$t("settings.apnTip"),
                                        },
                                        null,
                                        8,
                                        ["title"],
                                      ),
                                    ]),
                                  ]),
                                  default: d(() => [
                                    r("div", on, [
                                      r("div", dn, [
                                        o(
                                          u(At),
                                          {
                                            placeholder:
                                              e.$t("settings.apnHolder"),
                                            value: k.formModel.apn,
                                            "onUpdate:value":
                                              t[0] ||
                                              (t[0] = (e) =>
                                                (k.formModel.apn = e)),
                                          },
                                          null,
                                          8,
                                          ["placeholder", "value"],
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                              ),
                              o(
                                u(Ft),
                                {
                                  name: "ip_type",
                                  label: e.$t("settings.ipType"),
                                },
                                {
                                  default: d(() => [
                                    r("div", rn, [
                                      r("div", cn, [
                                        o(
                                          u(_t),
                                          {
                                            disabled: "",
                                            placeholder: e.$t(
                                              "settings.ipTypeHolder",
                                            ),
                                            value: k.formModel.ip_type,
                                            "onUpdate:value":
                                              t[1] ||
                                              (t[1] = (e) =>
                                                (k.formModel.ip_type = e)),
                                            options: u(v),
                                          },
                                          null,
                                          8,
                                          ["placeholder", "value", "options"],
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["label"],
                              ),
                              o(
                                u(Ft),
                                {
                                  name: "protocol",
                                  label: e.$t("settings.protocol"),
                                },
                                {
                                  default: d(() => [
                                    r("div", un, [
                                      r("div", pn, [
                                        o(
                                          u(_t),
                                          {
                                            disabled: "",
                                            value: k.formModel.protocol,
                                            "onUpdate:value":
                                              t[2] ||
                                              (t[2] = (e) =>
                                                (k.formModel.protocol = e)),
                                            options: [
                                              new (u(aa))(
                                                k.formModel.protocol,
                                                k.formModel.protocol,
                                              ),
                                            ],
                                          },
                                          null,
                                          8,
                                          ["value", "options"],
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["label"],
                              ),
                              o(
                                u(Ft),
                                {
                                  name: "port",
                                  label: e.$t("settings.port"),
                                },
                                {
                                  default: d(() => [
                                    r("div", vn, [
                                      r("div", mn, [
                                        o(
                                          u(_t),
                                          {
                                            disabled: "",
                                            value: k.formModel.port,
                                            "onUpdate:value":
                                              t[3] ||
                                              (t[3] = (e) =>
                                                (k.formModel.port = e)),
                                            options: [
                                              new (u(aa))(
                                                k.formModel.port,
                                                k.formModel.port,
                                              ),
                                            ],
                                          },
                                          null,
                                          8,
                                          ["value", "options"],
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["label"],
                              ),
                              o(
                                u(Ft),
                                {
                                  name: "mtu",
                                },
                                {
                                  label: d(() => [
                                    r("div", fn, [
                                      t[8] ||
                                        (t[8] = r("span", null, "MTU", -1)),
                                      o(
                                        wa,
                                        {
                                          title: e.$t("settings.mtuTip"),
                                        },
                                        null,
                                        8,
                                        ["title"],
                                      ),
                                    ]),
                                  ]),
                                  default: d(() => [
                                    r("div", hn, [
                                      r("div", gn, [
                                        o(
                                          u(Kt),
                                          {
                                            max: u($e),
                                            min: u(et),
                                            class: "full-width",
                                            placeholder:
                                              e.$t("settings.mtuHolder"),
                                            value: k.formModel.mtu,
                                            "onUpdate:value":
                                              t[4] ||
                                              (t[4] = (e) =>
                                                (k.formModel.mtu = e)),
                                          },
                                          null,
                                          8,
                                          [
                                            "max",
                                            "min",
                                            "placeholder",
                                            "value",
                                          ],
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                              ),
                              o(
                                u(Ft),
                                {
                                  name: "authentication",
                                  label: e.$t("settings.authentication"),
                                },
                                {
                                  default: d(() => [
                                    r("div", Cn, [
                                      r("div", yn, [
                                        o(
                                          u(_t),
                                          {
                                            placeholder: e.$t(
                                              "settings.selectAuthHolder",
                                            ),
                                            value: k.formModel.authentication,
                                            "onUpdate:value":
                                              t[5] ||
                                              (t[5] = (e) =>
                                                (k.formModel.authentication =
                                                  e)),
                                            options: u(m),
                                          },
                                          null,
                                          8,
                                          ["placeholder", "value", "options"],
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["label"],
                              ),
                              k.formModel.authentication &&
                              ![u(tt).None, u(tt).Unknown].includes(
                                k.formModel.authentication,
                              )
                                ? (i(),
                                  n(
                                    w,
                                    {
                                      key: 0,
                                    },
                                    [
                                      o(
                                        u(Ft),
                                        {
                                          name: "username",
                                          label: e.$t("cloudService.username"),
                                        },
                                        {
                                          default: d(() => [
                                            r("div", wn, [
                                              r("div", bn, [
                                                o(
                                                  u(At),
                                                  {
                                                    placeholder: e.$t(
                                                      "settings.simUsernameHolder",
                                                    ),
                                                    autocomplete: "off",
                                                  },
                                                  null,
                                                  8,
                                                  ["placeholder"],
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["label"],
                                      ),
                                      o(
                                        u(Ft),
                                        {
                                          name: "password",
                                          label: e.$t("common.password"),
                                        },
                                        {
                                          default: d(() => [
                                            r("div", kn, [
                                              r("div", xn, [
                                                o(
                                                  u(Bt),
                                                  {
                                                    placeholder: e.$t(
                                                      "settings.simPwdHolder",
                                                    ),
                                                    autocomplete:
                                                      "new-password",
                                                  },
                                                  null,
                                                  8,
                                                  ["placeholder"],
                                                ),
                                              ]),
                                            ]),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["label"],
                                      ),
                                    ],
                                    64,
                                  ))
                                : y("", !0),
                            ]),
                            _: 1,
                          },
                          8,
                          ["rules", "model"],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["spinning"],
                  ),
                ]),
                _: 1,
              },
              8,
              ["okText", "title", "open"],
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-059da1ad"]],
  ),
  Sn = {
    class: "form-fields flex-end",
  },
  En = {
    class: "fields",
  },
  Ln = {
    class: "form-fields flex-end",
  },
  _n = {
    class: "fields",
  },
  Dn = {
    class: "form-fields flex-end",
  },
  On = {
    class: "fields",
  },
  Tn = {
    class: "response-content bordered",
  },
  In = {
    class: "header flex-start",
  },
  Fn = {
    class: "content",
  },
  An = {
    key: 0,
    class: "no-data full-height",
  },
  Vn = {
    class: "text-center",
  },
  Un = ["src"],
  Pn = {
    class: "no-data-desc",
  },
  Wn = {
    key: 1,
    class: "response",
  },
  Rn = " /dev/ttyUSB2",
  Zn = U(
    a({
      __name: "atCommandModel",
      props: {
        open: {
          type: Boolean,
        },
      },
      emits: ["update:open"],
      setup(e, { emit: t }) {
        const a = e,
          c = t,
          v = s({
            get: () => a.open,
            set(e) {
              c("update:open", e);
            },
          }),
          m = l(),
          y = [new aa(Rn, Rn)],
          w = () => ({
            formModel: {
              shortcut: ot.MANUAL_COMMAND,
            },
            response: "",
          }),
          b = h(w()),
          k = s(() => ({
            command: [
              {
                required: !0,
                message: R("settings.commandRequired"),
              },
            ],
            shortcut: [
              {
                required: !0,
                message: R("settings.shortcutRequired"),
              },
            ],
          })),
          x = async (e) => {
            var t;
            try {
              (await (null == (t = m.value) ? void 0 : t.validateFields()),
                await ia(500));
              const { output: a } = await Qe.postATCommand({
                AT: b.formModel.command,
              });
              ((b.response = a), e(!1));
            } catch (a) {
              (new ue(a), e(!1));
            }
          },
          M = () => {
            b.formModel.command = dt.get(b.formModel.shortcut).cmd;
          },
          S = () => {
            Object.assign(b, w());
          };
        return (e, t) => {
          const a = f("BaseText"),
            l = f("BaseModal");
          return (
            i(),
            g(
              l,
              {
                onOpen: S,
                width: 440,
                okText: e.$t("common.send"),
                title: e.$t("settings.atCommands"),
                open: v.value,
                "onUpdate:open": t[2] || (t[2] = (e) => (v.value = e)),
                beforeOk: x,
              },
              {
                default: d(() => {
                  var l;
                  return [
                    o(
                      u(It),
                      {
                        requiredMark: !1,
                        class: "at-command-form",
                        ref_key: "formRef",
                        ref: m,
                        rules: k.value,
                        model: b.formModel,
                        layout: "horizontal",
                        colon: !1,
                      },
                      {
                        default: d(() => [
                          o(
                            u(Ft),
                            {
                              name: "port",
                              label: e.$t("settings.port"),
                            },
                            {
                              default: d(() => [
                                r("div", Sn, [
                                  r("div", En, [
                                    o(u(_t), {
                                      value: Rn,
                                      options: y,
                                    }),
                                  ]),
                                ]),
                              ]),
                              _: 1,
                            },
                            8,
                            ["label"],
                          ),
                          o(
                            u(Ft),
                            {
                              name: "shortcut",
                              label: e.$t("settings.shortcut"),
                            },
                            {
                              default: d(() => [
                                r("div", Ln, [
                                  r("div", _n, [
                                    o(
                                      u(_t),
                                      {
                                        onChange: M,
                                        value: b.formModel.shortcut,
                                        "onUpdate:value":
                                          t[0] ||
                                          (t[0] = (e) =>
                                            (b.formModel.shortcut = e)),
                                        options: u(nt),
                                      },
                                      null,
                                      8,
                                      ["value", "options"],
                                    ),
                                  ]),
                                ]),
                              ]),
                              _: 1,
                            },
                            8,
                            ["label"],
                          ),
                          o(
                            u(Ft),
                            {
                              name: "command",
                              label: e.$t("settings.atCommands"),
                            },
                            {
                              default: d(() => [
                                r("div", Dn, [
                                  r("div", On, [
                                    o(
                                      u(At),
                                      {
                                        value: b.formModel.command,
                                        "onUpdate:value":
                                          t[1] ||
                                          (t[1] = (e) =>
                                            (b.formModel.command = e)),
                                      },
                                      null,
                                      8,
                                      ["value"],
                                    ),
                                  ]),
                                ]),
                              ]),
                              _: 1,
                            },
                            8,
                            ["label"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["rules", "model"],
                    ),
                    o(Ht, {
                      dashed: "",
                      horizontal: "",
                      gutter: 16,
                    }),
                    r("div", Tn, [
                      r("div", In, [
                        o(a, null, {
                          default: d(() => [
                            C(p(e.$t("settings.response")), 1),
                          ]),
                          _: 1,
                        }),
                      ]),
                      o(Ht, {
                        horizontal: "",
                        gutter: 0,
                      }),
                      r("div", Fn, [
                        (null == (l = b.response) ? void 0 : l.length)
                          ? (i(),
                            n("div", Wn, [
                              o(
                                a,
                                {
                                  type: "caption-r",
                                  variant: "level2",
                                },
                                {
                                  default: d(() => [C(p(b.response), 1)]),
                                  _: 1,
                                },
                              ),
                            ]))
                          : (i(),
                            n("div", An, [
                              r("div", Vn, [
                                r(
                                  "img",
                                  {
                                    src: u("/assets/no-data-CjaYmTpM.svg"),
                                    alt: "No Data",
                                    width: "80",
                                  },
                                  null,
                                  8,
                                  Un,
                                ),
                              ]),
                              r("div", Pn, [
                                o(
                                  a,
                                  {
                                    center: "",
                                    variant: "level3",
                                  },
                                  {
                                    default: d(() => [
                                      C(p(e.$t("settings.noAtResDesc")), 1),
                                    ]),
                                    _: 1,
                                  },
                                ),
                              ]),
                            ])),
                      ]),
                    ]),
                  ];
                }),
                _: 1,
              },
              8,
              ["okText", "title", "open"],
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-360f6050"]],
  ),
  Nn =
    "data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.6875%2016.5H15.3125C15.6922%2016.5%2016%2016.1866%2016%2015.8V6.80962C16%206.61239%2015.9183%206.42434%2015.7749%206.29169L12.4154%203.68204C12.2889%203.5649%2012.124%203.5%2011.953%203.5H5.6875C5.3078%203.5%205%203.8134%205%204.2V15.8C5%2016.1866%205.3078%2016.5%205.6875%2016.5Z'%20stroke='%23C4C5C6'%20stroke-width='1.4'/%3e%3cpath%20d='M13%209H8C7.44772%209%207%209.44772%207%2010V14C7%2014.5523%207.44772%2015%208%2015H13C13.5523%2015%2014%2014.5523%2014%2014V10C14%209.44772%2013.5523%209%2013%209Z'%20fill='%23C4C5C6'/%3e%3cpath%20d='M17%204L4%2017'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'/%3e%3cpath%20d='M17%204L4%2017'%20stroke='%23C4C5C6'%20stroke-width='1.4'%20stroke-linecap='round'/%3e%3c/svg%3e",
  Bn = {
    key: 0,
    class: "item flex-btw",
  },
  Kn = {
    style: {
      width: "calc(100% - 86px)",
    },
  },
  zn = {
    class: "text-2",
  },
  Gn = {
    class: "flex-start flex-nowrap text-ellipsis",
  },
  Jn = ["src"],
  Hn = {
    class: "text-ellipsis",
  },
  jn = ["src"],
  Xn = {
    class: "text-ellipsis",
  },
  Yn = ["src"],
  qn = {
    class: "text-ellipsis",
  },
  Qn = a({
    __name: "cellularSettings",
    setup(e) {
      const { cellularStore: t } = Z(),
        { isRM10C4: a } = Hs(),
        l = h({
          cellularDetailOpen: !1,
          pinCodeOpen: !1,
          simSettingsOpen: !1,
          atCommandOpen: !1,
        }),
        s = () => {
          l.cellularDetailOpen = !0;
        },
        c = () => {
          ((l.cellularDetailOpen = !1), (l.simSettingsOpen = !0));
        },
        v = () => {
          ((l.cellularDetailOpen = !1), (l.atCommandOpen = !0));
        };
      return (e, m) => {
        var h, b;
        const k = f("GlSvg"),
          x = f("BaseButton");
        return (
          i(),
          n(
            w,
            null,
            [
              u(a)
                ? (i(),
                  n("div", Bn, [
                    r("div", Kn, [
                      r("div", zn, p(e.$t("settings.cellular")), 1),
                      r("div", Gn, [
                        u(t).simCardNotInserted
                          ? (i(),
                            n(
                              w,
                              {
                                key: 0,
                              },
                              [
                                r(
                                  "img",
                                  {
                                    src: u(Nn),
                                    style: {
                                      "margin-right": "4px",
                                    },
                                    alt: "sim card disconnected",
                                    width: "20",
                                  },
                                  null,
                                  8,
                                  Jn,
                                ),
                                o(
                                  u(St),
                                  {
                                    title: e.$t("settings.noSimCard"),
                                  },
                                  {
                                    default: d(() => [
                                      r(
                                        "div",
                                        Hn,
                                        p(e.$t("settings.noSimCard")),
                                        1,
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["title"],
                                ),
                              ],
                              64,
                            ))
                          : u(t).simLocked
                            ? (i(),
                              n(
                                w,
                                {
                                  key: 1,
                                },
                                [
                                  r(
                                    "img",
                                    {
                                      src: u(Nn),
                                      style: {
                                        "margin-right": "4px",
                                      },
                                      alt: "sim card disconnected",
                                      width: "20",
                                    },
                                    null,
                                    8,
                                    jn,
                                  ),
                                  o(
                                    u(St),
                                    {
                                      title: e.$t("settings.simLocked"),
                                    },
                                    {
                                      default: d(() => [
                                        r(
                                          "div",
                                          Xn,
                                          p(e.$t("settings.simLocked")),
                                          1,
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["title"],
                                  ),
                                ],
                                64,
                              ))
                            : (i(),
                              n(
                                w,
                                {
                                  key: 2,
                                },
                                [
                                  u(t).connected
                                    ? (i(),
                                      g(
                                        Zi,
                                        {
                                          key: 0,
                                          showTitle: !1,
                                          style: {
                                            "margin-right": "4px",
                                          },
                                          signal:
                                            null ==
                                            (b =
                                              null == (h = u(t).cellularState)
                                                ? void 0
                                                : h.signal_level)
                                              ? void 0
                                              : b.level,
                                        },
                                        null,
                                        8,
                                        ["signal"],
                                      ))
                                    : (i(),
                                      n(
                                        "img",
                                        {
                                          key: 1,
                                          src: u(
                                            "/assets/cellular-disconnected-signal-WhkzVmPr.svg",
                                          ),
                                          style: {
                                            "margin-right": "4px",
                                          },
                                          alt: "sim card disconnected",
                                          width: "20",
                                        },
                                        null,
                                        8,
                                        Yn,
                                      )),
                                  o(
                                    u(St),
                                    {
                                      title: u(t).cellularState.operator,
                                    },
                                    {
                                      default: d(() => [
                                        r("div", qn, [
                                          u(t).cellularState.operator
                                            ? (i(),
                                              n(
                                                w,
                                                {
                                                  key: 0,
                                                },
                                                [
                                                  C(
                                                    p(
                                                      u(t).cellularState
                                                        .operator,
                                                    ) + ", ",
                                                    1,
                                                  ),
                                                ],
                                                64,
                                              ))
                                            : y("", !0),
                                          C(
                                            " " +
                                              p(
                                                u(t).connected
                                                  ? e.$t("settings.connected")
                                                  : e.$t(
                                                      "settings.disconnected",
                                                    ),
                                              ),
                                            1,
                                          ),
                                        ]),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["title"],
                                  ),
                                  u(t).simCardNotRegistered
                                    ? (i(),
                                      g(
                                        u(St),
                                        {
                                          key: 2,
                                          title: e.$t(
                                            "settings.simCardNotRegistered",
                                          ),
                                        },
                                        {
                                          default: d(() => [
                                            o(k, {
                                              style: {
                                                "margin-left": "4px",
                                              },
                                              color:
                                                "var(--gl-color-warning-primary)",
                                              name: "gl-kvm-warning1",
                                            }),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["title"],
                                      ))
                                    : y("", !0),
                                ],
                                64,
                              )),
                      ]),
                    ]),
                    u(t).simLocked
                      ? (i(),
                        g(
                          x,
                          {
                            key: 0,
                            onClick:
                              m[0] || (m[0] = (e) => (l.pinCodeOpen = !0)),
                          },
                          {
                            default: d(() => [C(p(e.$t("common.unlock")), 1)]),
                            _: 1,
                          },
                        ))
                      : (i(),
                        g(
                          x,
                          {
                            key: 1,
                            onClick: s,
                          },
                          {
                            default: d(() => [C(p(e.$t("common.modify")), 1)]),
                            _: 1,
                          },
                        )),
                  ]))
                : y("", !0),
              o(
                qi,
                {
                  open: l.cellularDetailOpen,
                  "onUpdate:open":
                    m[1] || (m[1] = (e) => (l.cellularDetailOpen = e)),
                  onOpenSimSettings: c,
                  onOpenATSettings: v,
                },
                null,
                8,
                ["open"],
              ),
              o(
                Mn,
                {
                  open: l.simSettingsOpen,
                  "onUpdate:open":
                    m[2] || (m[2] = (e) => (l.simSettingsOpen = e)),
                },
                null,
                8,
                ["open"],
              ),
              o(
                Zn,
                {
                  open: l.atCommandOpen,
                  "onUpdate:open":
                    m[3] || (m[3] = (e) => (l.atCommandOpen = e)),
                },
                null,
                8,
                ["open"],
              ),
              o(
                sn,
                {
                  open: l.pinCodeOpen,
                  "onUpdate:open": m[4] || (m[4] = (e) => (l.pinCodeOpen = e)),
                },
                null,
                8,
                ["open"],
              ),
            ],
            64,
          )
        );
      };
    },
  }),
  $n = {
    class: "network-setting",
  },
  eo = {
    class: "item flex-btw",
  },
  to = {
    class: "full-width",
  },
  ao = {
    class: "text-2",
  },
  lo = {
    class: "flex-start",
  },
  so = {
    style: {
      "margin-right": "4px",
    },
  },
  io = {
    key: 0,
    class: "item flex-btw",
  },
  no = {
    style: {
      width: "calc(100% - 86px)",
    },
  },
  oo = {
    class: "flex-start flex-nowrap",
  },
  ro = ["src"],
  co = {
    class: "text-ellipsis",
  },
  uo = {
    class: "text-ellipsis",
  },
  po = U(
    a({
      __name: "networkSettings",
      setup(e) {
        const t = P(),
          { isRM10: a, isRM10C4: l } = Hs(),
          s = h({
            ethernetSettingsOpen: !1,
            modifyWifiOpen: !1,
            currentApInfo: null,
            cellularDetailOpen: !1,
          }),
          c = () => {
            s.ethernetSettingsOpen = !0;
          },
          v = () => {
            ((s.currentApInfo = sa(t.currentAp || {})),
              (s.modifyWifiOpen = !0));
          };
        return (e, m) => {
          const h = f("BaseTag"),
            w = f("BaseButton"),
            b = f("GlSvg");
          return (
            i(),
            n("div", $n, [
              o(
                va,
                {
                  title: e.$t("settings.networkSettings"),
                },
                {
                  default: d(() => {
                    var f, k, x, M, S, E;
                    return [
                      r("div", eo, [
                        r("div", to, [
                          r("div", ao, p(e.$t("settings.ethernet")), 1),
                          r("div", lo, [
                            r(
                              "div",
                              so,
                              p(
                                null == (f = u(t).networkConfig)
                                  ? void 0
                                  : f.ip_address,
                              ),
                              1,
                            ),
                            !1 ===
                            (null == (k = u(t).networkConfig)
                              ? void 0
                              : k.is_dhcp)
                              ? (i(),
                                g(
                                  h,
                                  {
                                    key: 0,
                                    color: "var(--gl-color-line-border2)",
                                  },
                                  {
                                    default: d(() => [
                                      C(p(e.$t("common.static")), 1),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : y("", !0),
                          ]),
                        ]),
                        o(
                          w,
                          {
                            onClick: c,
                          },
                          {
                            default: d(() => [C(p(e.$t("common.modify")), 1)]),
                            _: 1,
                          },
                        ),
                      ]),
                      u(a) || u(l)
                        ? (i(),
                          n("div", io, [
                            r("div", no, [
                              m[3] ||
                                (m[3] = r(
                                  "div",
                                  {
                                    class: "text-2",
                                  },
                                  "Wi-Fi",
                                  -1,
                                )),
                              r("div", oo, [
                                (
                                  null == (x = u(t).currentAp)
                                    ? void 0
                                    : x.connected
                                )
                                  ? (i(),
                                    n(
                                      "img",
                                      {
                                        key: 0,
                                        style: {
                                          "margin-right": "4px",
                                        },
                                        src: u(Rs),
                                        alt: "wifi icon",
                                        width: "20",
                                      },
                                      null,
                                      8,
                                      ro,
                                    ))
                                  : (i(),
                                    g(b, {
                                      key: 1,
                                      style: {
                                        "margin-right": "4px",
                                      },
                                      color: "var(--gl-color-text-disabled)",
                                      name: "gl-kvm-No-internet",
                                      size: 20,
                                    })),
                                (
                                  null == (M = u(t).currentAp)
                                    ? void 0
                                    : M.connected
                                )
                                  ? (i(),
                                    g(
                                      u(St),
                                      {
                                        key: 2,
                                        title:
                                          null == (S = u(t).currentAp)
                                            ? void 0
                                            : S.ssid,
                                      },
                                      {
                                        default: d(() => {
                                          var e;
                                          return [
                                            r(
                                              "div",
                                              co,
                                              p(
                                                null == (e = u(t).currentAp)
                                                  ? void 0
                                                  : e.ssid,
                                              ),
                                              1,
                                            ),
                                          ];
                                        }),
                                        _: 1,
                                      },
                                      8,
                                      ["title"],
                                    ))
                                  : (i(),
                                    g(
                                      u(St),
                                      {
                                        key: 3,
                                        title: e.$t("settings.noWifiConnected"),
                                      },
                                      {
                                        default: d(() => [
                                          r(
                                            "div",
                                            uo,
                                            p(e.$t("settings.noWifiConnected")),
                                            1,
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["title"],
                                    )),
                              ]),
                            ]),
                            o(
                              w,
                              {
                                onClick: v,
                              },
                              {
                                default: d(() => [
                                  C(p(e.$t("common.modify")), 1),
                                ]),
                                _: 1,
                              },
                            ),
                            (
                              null == (E = s.currentApInfo)
                                ? void 0
                                : E.connected
                            )
                              ? (i(),
                                g(
                                  Ei,
                                  {
                                    key: 0,
                                    open: s.modifyWifiOpen,
                                    "onUpdate:open":
                                      m[0] ||
                                      (m[0] = (e) => (s.modifyWifiOpen = e)),
                                  },
                                  null,
                                  8,
                                  ["open"],
                                ))
                              : (i(),
                                g(
                                  bi,
                                  {
                                    key: 1,
                                    open: s.modifyWifiOpen,
                                    "onUpdate:open":
                                      m[1] ||
                                      (m[1] = (e) => (s.modifyWifiOpen = e)),
                                  },
                                  null,
                                  8,
                                  ["open"],
                                )),
                          ]))
                        : y("", !0),
                      o(Qn),
                    ];
                  }),
                  _: 1,
                },
                8,
                ["title"],
              ),
              o(
                Js,
                {
                  open: s.ethernetSettingsOpen,
                  "onUpdate:open":
                    m[2] || (m[2] = (e) => (s.ethernetSettingsOpen = e)),
                },
                null,
                8,
                ["open"],
              ),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-52cbd459"]],
  ),
  vo = {
    class: "panel-content full-height",
  },
  mo = {
    class: "item header flex-btw",
  },
  fo = {
    class: "fw-500 text-1 flex-1",
  },
  ho = {
    class: "content-container",
  },
  go = {
    class: "content",
  },
  Co = {
    class: "content",
  },
  yo = {
    class: "content",
  },
  wo = U(
    a({
      __name: "leftPanel",
      setup(e) {
        const t = ie();
        return (e, a) => {
          const l = f("GlSvg");
          return (
            i(),
            n(
              "div",
              {
                class: c({
                  "left-panel full-height": !0,
                  "text-1": !0,
                  "panel-open": u(t).leftPanelOpen,
                  "panel-fullscreen": u(t).state.fullScreenOn,
                }),
              },
              [
                r("div", vo, [
                  r("div", mo, [
                    r("p", fo, p(e.$t(u(rt).get(u(t).state.leftPanelEnum))), 1),
                    o(
                      u(St),
                      {
                        title: e.$t("settings.closeSideBar"),
                      },
                      {
                        default: d(() => [
                          o(l, {
                            onClick:
                              a[0] ||
                              (a[0] = (e) => u(t).toggleLeftPanel(u(K).NONE)),
                            class: "close-sidebar pointer",
                            name: "gl-kvm-collapse-sidebar",
                            color: "var(--gl-color-text-level2)",
                            size: 22,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ["title"],
                    ),
                  ]),
                  r("div", ho, [
                    b(r("div", go, [o(Va), o(hl), o(Pl), o(po)], 512), [
                      [k, u(t).state.leftPanelEnum === u(K).SETTINGS],
                    ]),
                    b(r("div", Co, [o(Zl), o(ns), o(xs), o(Es)], 512), [
                      [k, u(t).state.leftPanelEnum === u(K).TOOL_BOX],
                    ]),
                    b(r("div", yo, [o(Vs), o(Ws)], 512), [
                      [k, u(t).state.leftPanelEnum === u(K).EXTERNAL_DEVICES],
                    ]),
                  ]),
                ]),
              ],
              2,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-0892d687"]],
  ),
  bo = J(),
  ko = new Map([
    [0, "left"],
    [1, "middle"],
    [2, "right"],
    [3, "up"],
    [4, "down"],
  ]),
  xo = !(q.is_firefox && !q.is_mac);
class Mo {
  constructor(e) {
    (t(this, "planned_pos", {
      x: 0,
      y: 0,
    }),
      t(this, "relative_touch_pos", null),
      t(this, "sent_pos", {
        x: 0,
        y: 0,
      }),
      t(this, "scroll_delta", {
        x: 0,
        y: 0,
      }),
      t(this, "streamHovered", !1),
      t(this, "configState"),
      t(this, "serverStorage"),
      t(this, "relative_deltas", []),
      t(this, "timer"),
      t(this, "kvmSore", ve()),
      (this.el = e),
      (this.configState = ve().configState),
      (this.serverStorage = j().storage),
      this.bindEvents(),
      this.updateRate());
  }
  get videoWrapperId() {
    return this.kvmSore.videoWrapperId;
  }
  get absolute() {
    var e, t;
    return !(
      !1 ===
      (null == (t = null == (e = bo.hidState) ? void 0 : e.mouse)
        ? void 0
        : t.absolute)
    );
  }
  get computedMousePolling() {
    return this.absolute ? ct : this.serverStorage[Y.MOUSE_POLLING];
  }
  bindEvents() {
    (this.el.addEventListener("wheel", (e) => this.onMouseWheelScroll(e)),
      this.el.addEventListener("mouseenter", (e) =>
        this.onMouseLeaveOrEnter(e, !0),
      ),
      this.el.addEventListener("mouseleave", (e) =>
        this.onMouseLeaveOrEnter(e, !1),
      ),
      this.el.addEventListener("contextmenu", (e) => e.preventDefault()),
      this.el.addEventListener("mousedown", (e) => this.onMouseDown(e)),
      this.el.addEventListener("mouseup", (e) => this.onMouseUp(e)),
      this.el.addEventListener("mousemove", (e) => this.onMouseMove(e)),
      this.el.addEventListener("touchmove", (e) => this.onTouchMove(e)),
      this.el.addEventListener("touchstart", (e) => this.onTouchStart(e)),
      this.el.addEventListener("touchend", () => this.onTouchEnd()));
  }
  onTouchStart(e) {
    1 === e.touches.length &&
      (this.absolute
        ? ((this.planned_pos = this.getTouchPosition(e.touches[0])),
          this.sendPlannedMove())
        : (this.relative_touch_pos = this.getTouchPosition(e.touches[0])));
  }
  onTouchEnd() {
    this.sendPlannedMove();
  }
  onTouchMove(e) {
    if (e.target.id === this.videoWrapperId && 1 === e.touches.length)
      if (this.absolute) this.planned_pos = this.getTouchPosition(e.touches[0]);
      else if (null === this.relative_touch_pos)
        this.relative_touch_pos = this.getTouchPosition(e.touches[0]);
      else {
        const t = this.getTouchPosition(e.touches[0]);
        (this.sendOrPlanRelativeMove({
          x: t.x - this.relative_touch_pos.x,
          y: t.y - this.relative_touch_pos.y,
        }),
          (this.relative_touch_pos = t));
      }
  }
  getTouchPosition(e) {
    var t;
    if (null == (t = e.target) ? void 0 : t.getBoundingClientRect) {
      const t = e.target.getBoundingClientRect();
      return {
        x: Math.round(e.clientX - t.left),
        y: Math.round(e.clientY - t.top),
      };
    }
    return null;
  }
  onMouseLeaveOrEnter(e, t) {
    this.streamHovered = t;
  }
  onMouseWheelScroll(e) {
    e.preventDefault();
    const t = {
      x: 0,
      y: 0,
    };
    if (xo) {
      const a = q.is_mac ? 5 : 1;
      ((this.scroll_delta.x += e.deltaX * a),
        Math.abs(this.scroll_delta.x) >= 100 &&
          ((t.x =
            (this.scroll_delta.x / Math.abs(this.scroll_delta.x)) *
            -this.serverStorage[Y.SCROLL_RATE]),
          (this.scroll_delta.x = 0)),
        (this.scroll_delta.y += e.deltaY * a),
        Math.abs(this.scroll_delta.y) >= 100 &&
          ((t.y =
            (this.scroll_delta.y / Math.abs(this.scroll_delta.y)) *
            -this.serverStorage[Y.SCROLL_RATE]),
          (this.scroll_delta.y = 0)));
    } else
      (0 !== e.deltaX &&
        (t.x =
          (e.deltaX / Math.abs(e.deltaX)) * -this.serverStorage[Y.SCROLL_RATE]),
        0 !== e.deltaY &&
          (t.y =
            (e.deltaY / Math.abs(e.deltaY)) *
            -this.serverStorage[Y.SCROLL_RATE]));
    this.sendScroll(t);
  }
  get isPointerLocked() {
    return document.pointerLockElement === this.el;
  }
  onMouseMove(e) {
    if ((e.preventDefault(), this.absolute)) {
      const t = e.target.getBoundingClientRect();
      this.planned_pos = {
        x: Math.max(Math.round(e.clientX - t.left), 0),
        y: Math.max(Math.round(e.clientY - t.top), 0),
      };
    } else if (this.isPointerLocked) {
      const { movementX: t, movementY: a } = e;
      this.sendOrPlanRelativeMove({
        x: t,
        y: a,
      });
    }
  }
  sendOrPlanRelativeMove(e) {
    ((e = {
      x: Math.min(
        Math.max(
          -127,
          Math.floor((e.x * this.serverStorage[Y.RELATIVE_SENSE]) / 10),
        ),
        127,
      ),
      y: Math.min(
        Math.max(
          -127,
          Math.floor((e.y * this.serverStorage[Y.RELATIVE_SENSE]) / 10),
        ),
        127,
      ),
    }),
      this.configState.squashRelativeMoves
        ? this.relative_deltas.push(e)
        : this.sendEvent({
            event_type: "mouse_relative",
            event: {
              delta: e,
            },
          }));
  }
  sendPlannedMove() {
    if (this.absolute) {
      if (
        this.planned_pos.x !== this.sent_pos.x ||
        this.planned_pos.y !== this.sent_pos.y
      ) {
        const { x: e, y: t } = this.planned_pos,
          a = ut(),
          l = vt(e, a.x, a.width, -32768, 32767),
          s = vt(t, a.y, a.height, -32768, 32767);
        (this.sendEvent({
          event_type: "mouse_move",
          event: {
            to: {
              x: l,
              y: s,
            },
          },
        }),
          (this.sent_pos = this.planned_pos));
      }
    } else
      this.relative_deltas.length &&
        (this.sendEvent({
          event_type: "mouse_relative",
          event: {
            delta: this.relative_deltas,
            squash: !0,
          },
        }),
        (this.relative_deltas = []));
  }
  onMouseDown(e) {
    if (
      (e.preventDefault(),
      (this.absolute && e.target.id === this.videoWrapperId) ||
        "hdmi-lost" === e.target.id)
    ) {
      const t = {
        event_type: "mouse_button",
        event: {
          button: ko.get(e.button),
          state: !0,
        },
      };
      this.sendEvent(t);
    } else if (this.isPointerLocked && "stream-box" === e.target.id) {
      const t = {
        event_type: "mouse_button",
        event: {
          button: ko.get(e.button),
          state: !0,
        },
      };
      this.sendEvent(t);
    }
  }
  onMouseUp(e) {
    e.preventDefault();
    const t = {
      event_type: "mouse_button",
      event: {
        button: ko.get(e.button),
        state: !1,
      },
    };
    this.sendEvent(t);
  }
  sendScroll(e) {
    (e.x || e.y) &&
      ([pt.BOTH, pt.VERTICAL].includes(
        this.serverStorage[Y.REVERSE_SCROLLING],
      ) && (e.y *= -1),
      [pt.BOTH, pt.HORIZONTAL].includes(
        this.serverStorage[Y.REVERSE_SCROLLING],
      ) && (e.x *= -1),
      this.sendEvent({
        event_type: "mouse_wheel",
        event: {
          delta: e,
        },
      }));
  }
  sendEvent(e) {
    this.serverStorage[Y.MOUSE_CONTROL] &&
      this.kvmSore.mouseEnabled &&
      Oe(bo.sockets.apiWS, e);
  }
  async updateRate() {
    (this.timer && clearTimeout(this.timer),
      await ia(this.computedMousePolling),
      this.sendPlannedMove(),
      this.updateRate());
  }
}
const So = (e) => {
    if ("absolute" !== e.style.position)
      try {
        const t = J(),
          a = X(Y.ORIENTATION),
          l = se(),
          s = ie();
        let i = 32,
          n = 24;
        s.state.fullScreenOn && ((i = 0), (n = 0));
        let o = 0 + i + 50;
        (l.virtualKeyboardFixed &&
          (l.virtualKeyboardAvailableWidth >= 900 ? (o += 340) : (o += 394)),
          s.state.headerCollapsed && (o = i));
        let d = 0;
        (s.state.headerCollapsed && (d = 0),
          s.leftPanelOpen && !s.state.fullScreenOn && (d += 320));
        const r = window.innerWidth - d,
          c = window.innerHeight - o;
        let { width: u, height: p } =
          t.streamerState.streamer.source.resolution;
        [mt.LEFT, mt.RIGHT].includes(a.value) && ([u, p] = [p, u]);
        const v = u / p;
        let m, f;
        (v < r / c
          ? ([m, f] = [c * v, c])
          : s.state.headerCollapsed
            ? ([m, f] = [r, r / v])
            : ([m, f] = [r - n, (r - n) / v]),
          (e.style.cssText = `width: ${m}px; height: ${f}px;`));
      } catch (t) {}
  },
  Eo = a({
    __name: "fullscreenHeaderBox",
    setup(e) {
      const t = ie(),
        a = h({
          expendedManually: !1,
          headerToolCollapsed: !1,
          autoCollapseTimer: null,
        }),
        l = () => {
          a.expendedManually = !0;
        };
      return (
        x(
          () => t.state.fullScreenOn,
          (e) => {
            e
              ? a.expendedManually ||
                (a.autoCollapseTimer = setTimeout(() => {
                  a.expendedManually || (a.headerToolCollapsed = !0);
                }, 2500))
              : a.autoCollapseTimer && clearTimeout(a.autoCollapseTimer);
          },
        ),
        (e, s) =>
          b(
            (i(),
            g(
              qt,
              {
                class: "flex-1",
                customCollapse: "",
                collapsed: a.headerToolCollapsed,
                "onUpdate:collapsed": [
                  s[0] || (s[0] = (e) => (a.headerToolCollapsed = e)),
                  l,
                ],
              },
              null,
              8,
              ["collapsed"],
            )),
            [[k, u(t).state.fullScreenOn]],
          )
      );
    },
  });
const Lo = {
    id: "hdmi-lost",
    class: "hdmi-lost flex position-absolute full-width full-height flex-wrap",
  },
  _o = {
    class: "content",
  },
  Do = {
    class: "title fw-500",
  },
  Oo = {
    class: "text",
  },
  To = U(
    a({
      __name: "noaHdmiSignalPage",
      setup(e) {
        const t = `data:image/svg+xml;base64,${btoa('<svg width="225" height="165" viewBox="0 0 225 165" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r\n<path d="M93.5602 3.98391L95.1626 3.48145L106.918 37.586L104.044 38.7867L93.5602 3.98391Z" fill="#4265B9"/>\r\n<path d="M133.934 29.6726L135.148 30.3867C135.503 29.7831 135.361 29.0102 134.814 28.5727L133.934 29.6726ZM129.486 26.1141L128.304 25.3474C127.91 25.9546 128.041 26.7618 128.606 27.214L129.486 26.1141ZM139.712 12.9435C140.136 12.291 139.95 11.4187 139.297 10.9953C138.645 10.5718 137.773 10.7575 137.349 11.41L138.531 12.1768L139.712 12.9435ZM129.486 37.2344L130.7 37.9485L135.148 30.3867L133.934 29.6726L132.72 28.9584L128.272 36.5202L129.486 37.2344ZM133.934 29.6726L134.814 28.5727L130.366 25.0142L129.486 26.1141L128.606 27.214L133.054 30.7724L133.934 29.6726ZM129.486 26.1141L130.667 26.8809L139.712 12.9435L138.531 12.1768L137.349 11.41L128.304 25.3474L129.486 26.1141Z" fill="#446BC0"/>\r\n<ellipse cx="116.172" cy="48.9905" rx="23.4254" ry="16.4739" fill="#3763C2"/>\r\n<path d="M112.5 160.067C174.632 160.067 225 155.23 225 149.264C225 143.298 174.632 138.461 112.5 138.461C50.368 138.461 0 143.298 0 149.264C0 155.23 50.368 160.067 112.5 160.067Z" fill="black" fill-opacity="0.35"/>\r\n<path d="M71.6436 149.574C72.2624 149.377 72.0561 148.776 71.3624 148.776H58.6686C34.4999 146.211 17.6155 149.649 28.2561 150.457C38.8968 151.265 27.5061 151.096 19.7343 154.046C11.9624 156.995 77.5311 157.737 83.4843 154.046C88.9593 150.645 63.0749 152.327 71.6436 149.574Z" fill="#2F56A9"/>\r\n<path d="M33.2202 145.996C31.8705 145.933 30.5522 145.566 29.3628 144.924C28.1734 144.282 27.1432 143.38 26.3483 142.285C26.3093 142.235 26.281 142.177 26.265 142.115C26.249 142.054 26.2458 141.989 26.2554 141.926C26.265 141.863 26.2874 141.803 26.321 141.749C26.3547 141.695 26.399 141.648 26.4512 141.612C26.5034 141.575 26.5625 141.55 26.6248 141.537C26.6871 141.525 26.7514 141.525 26.8137 141.538C26.876 141.55 26.935 141.576 26.9871 141.612C27.0393 141.649 27.0835 141.696 27.117 141.75C28.8702 144.286 32.742 145.629 34.4295 144.831C34.5985 144.759 34.7492 144.65 34.8701 144.512C34.0175 144.136 33.2704 143.555 32.6948 142.821C32.1193 142.087 31.733 141.222 31.5702 140.303C31.3545 139.11 31.1858 137.485 32.1608 137.278C33.5108 136.978 35.2733 140.237 35.9108 142.708C36.0262 143.117 36.0675 143.543 36.0327 143.967C36.5734 144.128 37.1421 144.173 37.7014 144.098C37.9534 144.079 38.1986 144.007 38.4214 143.887C38.6441 143.768 38.8395 143.603 38.9952 143.403C38.3782 142.937 37.8664 142.345 37.4932 141.667C37.12 140.988 36.8939 140.239 36.8295 139.467C36.4733 136.893 36.7452 136.452 37.0264 136.226C37.1175 136.156 37.2263 136.113 37.3405 136.101C37.4548 136.09 37.57 136.11 37.6733 136.16C38.6764 136.583 39.8858 140.228 40.1202 142.295C40.1482 142.51 40.1482 142.728 40.1202 142.943C40.5243 143.099 40.9528 143.181 41.3858 143.187C42.1807 143.218 42.967 143.012 43.6451 142.595C43.5139 142.511 43.392 142.417 43.2702 142.323C42.3327 141.487 41.9014 140.153 42.0701 138.255C42.2014 136.78 42.5295 135.973 43.1202 135.719C43.3107 135.642 43.5194 135.623 43.7208 135.663C43.9221 135.703 44.1076 135.801 44.2545 135.944C44.8874 136.645 45.3603 137.475 45.6404 138.377C45.9205 139.279 46.001 140.231 45.8764 141.167C45.795 141.557 45.6321 141.925 45.3983 142.248C47.1233 142.548 49.542 142.06 51.6327 141.543C51.6942 141.528 51.7581 141.526 51.8206 141.536C51.8831 141.546 51.9431 141.568 51.9971 141.601C52.051 141.634 52.098 141.678 52.1352 141.729C52.1724 141.78 52.1991 141.838 52.2139 141.9C52.2287 141.962 52.2312 142.026 52.2213 142.088C52.2114 142.151 52.1892 142.211 52.1562 142.265C52.1231 142.319 52.0797 142.366 52.0285 142.404C51.9773 142.441 51.9192 142.468 51.8577 142.483C49.317 143.112 46.5795 143.629 44.6483 143.065C43.7056 143.783 42.5512 144.166 41.367 144.155C40.8415 144.148 40.3213 144.049 39.8295 143.863C39.6114 144.201 39.3188 144.485 38.9742 144.692C38.6297 144.898 38.2423 145.023 37.842 145.056C37.1373 145.147 36.4214 145.086 35.742 144.878C35.5233 145.247 35.1958 145.539 34.8045 145.714C34.3017 145.917 33.7621 146.013 33.2202 145.996ZM32.4139 138.218C32.2842 138.856 32.3099 139.517 32.4889 140.143C32.6211 140.895 32.9322 141.603 33.3957 142.208C33.8592 142.813 34.4614 143.297 35.1514 143.619C35.1383 143.397 35.1006 143.176 35.0389 142.962C34.3076 140.275 32.9014 138.424 32.4139 138.218ZM37.6358 137.4C37.6419 138.048 37.6951 138.695 37.7952 139.336C37.8985 140.481 38.4034 141.553 39.2202 142.36C38.9894 140.626 38.453 138.947 37.6358 137.4ZM43.5327 136.583C43.5327 136.583 43.1764 136.762 43.0451 138.33C42.9139 139.899 43.1858 140.98 43.917 141.609C44.0901 141.749 44.2788 141.869 44.4795 141.966C44.7261 141.702 44.9004 141.378 44.9858 141.026C45.1528 139.548 44.7541 138.061 43.8702 136.865C43.6733 136.621 43.5608 136.583 43.5327 136.583Z" fill="#18294D"/>\r\n<path d="M162.525 153.322L58.5713 149.864C54.9134 149.743 51.9666 146.824 51.8104 143.167L47.8219 49.8159C47.6492 45.7745 50.9281 42.4283 54.9722 42.5189L177.919 45.2731L162.525 153.322Z" fill="#456FCA"/>\r\n<path d="M162.525 153.322L182.299 150.187C184.004 149.916 185.344 148.583 185.621 146.879L200.908 52.9859C201.264 50.7991 199.774 48.7395 197.586 48.3925L177.919 45.2734L162.525 153.322Z" fill="#224BA3"/>\r\n<path d="M61.5187 128.973L58.8 65.2168C58.7329 63.6418 58.989 62.0697 59.5525 60.5978C60.1159 59.1259 60.9746 57.7854 62.0756 56.6593C63.1767 55.5332 64.4965 54.6454 65.9536 54.0507C67.4106 53.456 68.974 53.1672 70.5469 53.202L153.103 55.0808C154.729 55.1176 156.328 55.4993 157.796 56.2007C159.263 56.9022 160.566 57.9074 161.617 59.1501C162.669 60.3929 163.446 61.8449 163.896 63.4104C164.347 64.9759 164.461 66.6193 164.231 68.2323L155.081 132.43C154.685 135.242 153.268 137.808 151.1 139.637C148.932 141.466 146.167 142.429 143.334 142.341L72.6563 139.992C69.7548 139.903 66.9945 138.717 64.9289 136.673C62.8633 134.63 61.6451 131.879 61.5187 128.973Z" fill="#E8E8E8"/>\r\n<mask id="mask0_5301_3013" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="58" y="53" width="107" height="90">\r\n<path d="M61.5192 128.973L58.8005 65.2168C58.7334 63.6418 58.9895 62.0697 59.5529 60.5978C60.1164 59.1259 60.9751 57.7854 62.0761 56.6593C63.1771 55.5332 64.497 54.6454 65.9541 54.0507C67.4111 53.456 68.9745 53.1672 70.5474 53.202L153.104 55.0808C154.729 55.1176 156.329 55.4993 157.796 56.2007C159.264 56.9022 160.566 57.9074 161.618 59.1501C162.669 60.3929 163.446 61.8449 163.897 63.4104C164.347 64.9759 164.461 66.6193 164.232 68.2323L155.082 132.43C154.686 135.242 153.268 137.808 151.1 139.637C148.933 141.466 146.167 142.429 143.335 142.341L72.6567 139.992C69.7553 139.903 66.995 138.717 64.9294 136.673C62.8638 134.63 61.6456 131.879 61.5192 128.973Z" fill="#E8E8E8"/>\r\n<path d="M61.5192 128.973L58.8005 65.2168C58.7334 63.6418 58.9895 62.0697 59.5529 60.5978C60.1164 59.1259 60.9751 57.7854 62.0761 56.6593C63.1771 55.5332 64.497 54.6454 65.9541 54.0507C67.4111 53.456 68.9745 53.1672 70.5474 53.202L153.104 55.0808C154.729 55.1176 156.329 55.4993 157.796 56.2007C159.264 56.9022 160.566 57.9074 161.618 59.1501C162.669 60.3929 163.446 61.8449 163.897 63.4104C164.347 64.9759 164.461 66.6193 164.232 68.2323L155.082 132.43C154.686 135.242 153.268 137.808 151.1 139.637C148.933 141.466 146.167 142.429 143.335 142.341L72.6567 139.992C69.7553 139.903 66.995 138.717 64.9294 136.673C62.8638 134.63 61.6456 131.879 61.5192 128.973Z" fill="url(#pattern0_5301_3013)"/>\r\n<path d="M61.5192 128.973L58.8005 65.2168C58.7334 63.6418 58.9895 62.0697 59.5529 60.5978C60.1164 59.1259 60.9751 57.7854 62.0761 56.6593C63.1771 55.5332 64.497 54.6454 65.9541 54.0507C67.4111 53.456 68.9745 53.1672 70.5474 53.202L153.104 55.0808C154.729 55.1176 156.329 55.4993 157.796 56.2007C159.264 56.9022 160.566 57.9074 161.618 59.1501C162.669 60.3929 163.446 61.8449 163.897 63.4104C164.347 64.9759 164.461 66.6193 164.232 68.2323L155.082 132.43C154.686 135.242 153.268 137.808 151.1 139.637C148.933 141.466 146.167 142.429 143.335 142.341L72.6567 139.992C69.7553 139.903 66.995 138.717 64.9294 136.673C62.8638 134.63 61.6456 131.879 61.5192 128.973Z" fill="url(#pattern1_5301_3013)"/>\r\n<path d="M61.5192 128.973L58.8005 65.2168C58.7334 63.6418 58.9895 62.0697 59.5529 60.5978C60.1164 59.1259 60.9751 57.7854 62.0761 56.6593C63.1771 55.5332 64.497 54.6454 65.9541 54.0507C67.4111 53.456 68.9745 53.1672 70.5474 53.202L153.104 55.0808C154.729 55.1176 156.329 55.4993 157.796 56.2007C159.264 56.9022 160.566 57.9074 161.618 59.1501C162.669 60.3929 163.446 61.8449 163.897 63.4104C164.347 64.9759 164.461 66.6193 164.232 68.2323L155.082 132.43C154.686 135.242 153.268 137.808 151.1 139.637C148.933 141.466 146.167 142.429 143.335 142.341L72.6567 139.992C69.7553 139.903 66.995 138.717 64.9294 136.673C62.8638 134.63 61.6456 131.879 61.5192 128.973Z" fill="url(#pattern2_5301_3013)"/>\r\n</mask>\r\n<g mask="url(#mask0_5301_3013)">\r\n<g opacity="0.6">\r\n<rect width="18.3904" height="89.438" transform="matrix(0.99996 -0.00891922 0.0115168 0.999934 58.3086 52.7412)" fill="#FFDC6A"/>\r\n<rect width="17.2691" height="91.9965" transform="matrix(0.999996 -0.00276607 0.00346097 0.999994 77.2485 49.667)" fill="#D9F7FF"/>\r\n<rect width="18.1028" height="91.9967" transform="matrix(0.99999 0.00457159 -0.00572006 0.999984 95.2207 49.6855)" fill="#53DDD0"/>\r\n<rect width="17.2689" height="91.9984" transform="matrix(0.99993 0.0118612 -0.0148405 0.99989 112.958 50.209)" fill="#FF96D0"/>\r\n<rect width="17.2667" height="92.0128" transform="matrix(0.999431 0.0337215 -0.0421797 0.99911 130.487 50.3965)" fill="#FF6968"/>\r\n<rect width="19.3931" height="91.717" transform="matrix(0.999192 0.0401994 -0.0502756 0.998735 147.673 53.5908)" fill="#81D2ED"/>\r\n</g>\r\n<path d="M112.502 76.5459L112.018 93.6015L108.503 93.5016L101.975 81.874L101.651 93.3069L98.1364 93.2071L98.621 76.1515L102.135 76.2513L108.674 87.8909L109 76.4463L112.502 76.5459ZM129.526 85.1657L129.503 85.9739C129.466 87.2703 129.258 88.4289 128.877 89.4497C128.496 90.4706 127.975 91.335 127.314 92.0431C126.654 92.7434 125.873 93.2722 124.971 93.6296C124.078 93.9871 123.093 94.1506 122.015 94.12C120.945 94.0896 119.97 93.8704 119.091 93.4625C118.219 93.0547 117.47 92.4824 116.842 91.7456C116.214 91.0009 115.736 90.108 115.406 89.067C115.084 88.0262 114.941 86.8576 114.978 85.5612L115.001 84.7529C115.038 83.4488 115.247 82.2902 115.627 81.2771C116.008 80.2563 116.529 79.3918 117.19 78.6838C117.859 77.9759 118.64 77.4432 119.533 77.0856C120.434 76.7282 121.42 76.5648 122.489 76.5952C123.567 76.6258 124.542 76.845 125.413 77.2527C126.293 77.6606 127.042 78.2368 127.662 78.9813C128.29 79.726 128.764 80.6187 129.087 81.6596C129.417 82.6928 129.563 83.8615 129.526 85.1657ZM125.954 85.8731L125.978 85.0414C126.003 84.1355 125.944 83.3366 125.799 82.6447C125.655 81.9528 125.429 81.3681 125.122 80.8904C124.816 80.4128 124.435 80.0502 123.981 79.8029C123.527 79.5477 123.003 79.4117 122.41 79.3948C121.816 79.3779 121.286 79.484 120.818 79.713C120.359 79.9344 119.962 80.2749 119.629 80.7343C119.303 81.194 119.048 81.7651 118.865 82.4477C118.681 83.1303 118.577 83.9245 118.551 84.8304L118.527 85.6621C118.502 86.5601 118.561 87.359 118.705 88.0587C118.85 88.7506 119.075 89.3393 119.382 89.8247C119.689 90.3024 120.069 90.6688 120.523 90.924C120.977 91.1792 121.501 91.3152 122.094 91.3321C122.688 91.3489 123.218 91.2429 123.686 91.0139C124.154 90.7849 124.55 90.4405 124.876 89.9808C125.202 89.5133 125.456 88.9383 125.64 88.2557C125.824 87.5654 125.928 86.7712 125.954 85.8731Z" fill="#0B0909"/>\r\n<path d="M77.251 113.444C77.2663 113.116 77.2292 112.821 77.1398 112.559C77.0585 112.289 76.894 112.043 76.6463 111.82C76.4068 111.59 76.0615 111.363 75.6105 111.138C75.1677 110.906 74.5926 110.661 73.8852 110.401C73.1008 110.114 72.3726 109.798 71.7004 109.454C71.0282 109.11 70.4403 108.719 69.9367 108.281C69.4409 107.843 69.0612 107.349 68.7976 106.797C68.5343 106.237 68.4194 105.598 68.4529 104.88C68.4856 104.178 68.6638 103.545 68.9872 102.981C69.3185 102.418 69.7709 101.942 70.3442 101.554C70.918 101.159 71.5847 100.865 72.3445 100.674C73.112 100.483 73.9523 100.409 74.8654 100.451C76.1296 100.51 77.2115 100.791 78.1109 101.295C79.0181 101.799 79.7069 102.456 80.1774 103.268C80.6479 104.08 80.8602 104.978 80.8144 105.961L77.6069 105.811C77.6317 105.281 77.5404 104.807 77.333 104.391C77.1334 103.975 76.8127 103.639 76.371 103.384C75.9371 103.129 75.3807 102.986 74.7017 102.954C74.0462 102.924 73.4954 102.996 73.0492 103.17C72.6109 103.345 72.2747 103.596 72.0405 103.921C71.8142 104.247 71.6913 104.617 71.672 105.03C71.6575 105.342 71.7185 105.627 71.8552 105.883C71.9921 106.132 72.2038 106.373 72.4902 106.605C72.7769 106.83 73.1344 107.046 73.5627 107.253C73.9992 107.454 74.5059 107.657 75.0828 107.864C76.0062 108.189 76.811 108.539 77.4974 108.915C78.1915 109.292 78.7626 109.709 79.2104 110.168C79.6661 110.627 79.9982 111.136 80.2069 111.693C80.4233 112.25 80.5154 112.876 80.483 113.571C80.4488 114.305 80.2738 114.953 79.9581 115.517C79.6425 116.081 79.2059 116.554 78.6485 116.934C78.0911 117.315 77.429 117.593 76.6622 117.769C75.9032 117.944 75.0593 118.011 74.1306 117.967C73.3034 117.929 72.4891 117.781 71.6877 117.525C70.8944 117.261 70.1804 116.892 69.5456 116.416C68.9112 115.933 68.4149 115.339 68.0567 114.634C67.6989 113.921 67.5416 113.1 67.5849 112.172L70.8158 112.322C70.7907 112.861 70.8551 113.325 71.0089 113.716C71.1709 114.099 71.4063 114.419 71.715 114.675C72.0318 114.925 72.4062 115.114 72.8381 115.244C73.2701 115.374 73.7397 115.45 74.2469 115.474C74.9025 115.505 75.4451 115.44 75.8749 115.28C76.3129 115.113 76.6448 114.87 76.8708 114.552C77.1046 114.235 77.2314 113.865 77.251 113.444ZM87.1695 101.26L86.3747 118.304L83.1555 118.154L83.9503 101.11L87.1695 101.26ZM103.748 110.28L103.439 116.917C103.174 117.226 102.764 117.555 102.208 117.904C101.66 118.254 100.95 118.545 100.079 118.779C99.2078 119.004 98.1481 119.087 96.8995 119.029C95.8147 118.979 94.832 118.753 93.9513 118.352C93.0709 117.943 92.3232 117.373 91.7082 116.64C91.0933 115.908 90.6338 115.026 90.33 113.995C90.0261 112.964 89.9046 111.797 89.9653 110.494L90.0177 109.37C90.0785 108.067 90.2964 106.915 90.6715 105.916C91.0544 104.917 91.5705 104.081 92.2198 103.407C92.8768 102.734 93.647 102.234 94.5304 101.908C95.4216 101.582 96.4056 101.444 97.4826 101.494C98.9263 101.562 100.101 101.855 101.008 102.374C101.922 102.894 102.61 103.583 103.07 104.441C103.531 105.292 103.799 106.259 103.873 107.341L100.736 107.195C100.678 106.598 100.53 106.071 100.294 105.614C100.057 105.149 99.7069 104.781 99.2425 104.509C98.7862 104.23 98.1835 104.073 97.4343 104.038C96.8022 104.008 96.2384 104.107 95.7429 104.334C95.2474 104.561 94.8247 104.905 94.4747 105.366C94.1247 105.827 93.8475 106.404 93.6431 107.099C93.4465 107.794 93.327 108.594 93.2848 109.499L93.2313 110.646C93.1887 111.559 93.2445 112.375 93.3987 113.094C93.5533 113.805 93.7948 114.411 94.1235 114.911C94.4602 115.404 94.8842 115.787 95.3955 116.061C95.9149 116.328 96.5101 116.477 97.1813 116.508C97.79 116.537 98.2957 116.509 98.6984 116.427C99.1093 116.336 99.4392 116.223 99.6881 116.086C99.9369 115.949 100.131 115.813 100.27 115.679L100.419 112.483L97.0361 112.325L97.1459 109.972L103.748 110.28ZM121.059 102.84L120.264 119.884L117.033 119.733L110.339 107.572L109.787 119.396L106.568 119.245L107.363 102.201L110.582 102.352L117.3 114.525L117.852 102.691L121.059 102.84ZM131.392 105.915L125.86 120.145L122.454 119.986L129.616 103.239L131.794 103.341L131.392 105.915ZM134.78 120.561L130.573 105.876L130.401 103.276L132.59 103.378L138.198 120.72L134.78 120.561ZM134.853 114.218L134.734 116.758L125.592 116.332L125.71 113.791L134.853 114.218ZM151.076 118.787L150.958 121.315L142.389 120.916L142.507 118.387L151.076 118.787ZM144.156 103.917L143.361 120.961L140.142 120.811L140.936 103.767L144.156 103.917Z" fill="#0B0909"/>\r\n</g>\r\n<path d="M212.616 148.903L210.732 145.624L212.616 142.346H214.632L213.498 145.624L214.632 148.903H212.616Z" fill="#5271EC"/>\r\n<path d="M214.5 147.334C214.735 147.351 214.97 147.32 215.191 147.242C215.413 147.165 215.616 147.042 215.788 146.882C215.96 146.722 216.097 146.528 216.191 146.312C216.285 146.097 216.333 145.864 216.333 145.629C216.333 145.394 216.285 145.161 216.191 144.946C216.097 144.73 215.96 144.536 215.788 144.376C215.616 144.216 215.413 144.093 215.191 144.015C214.97 143.938 214.735 143.907 214.5 143.924L217.707 143.285L218.56 145.878L217.135 148.067L214.5 147.334Z" fill="#5271EC"/>\r\n<path d="M214.229 142.346H217.979L219.854 145.624L217.979 148.903H214.229L212.354 145.624L214.229 142.346ZM216.104 147.334C216.441 147.336 216.772 147.237 217.054 147.05C217.336 146.864 217.556 146.597 217.687 146.285C217.817 145.973 217.852 145.629 217.788 145.296C217.723 144.964 217.561 144.659 217.323 144.419C217.084 144.179 216.78 144.015 216.449 143.948C216.118 143.881 215.774 143.915 215.462 144.044C215.15 144.173 214.883 144.392 214.695 144.673C214.507 144.955 214.407 145.286 214.407 145.624C214.405 145.849 214.449 146.072 214.534 146.28C214.619 146.488 214.745 146.677 214.904 146.836C215.062 146.995 215.251 147.121 215.458 147.206C215.666 147.292 215.888 147.335 216.113 147.334H216.104Z" fill="#263238"/>\r\n<path d="M191.764 154.555H196.001C196.532 154.552 197.039 154.339 197.414 153.963C197.788 153.586 197.998 153.076 197.998 152.544C197.998 152.013 197.788 151.503 197.414 151.126C197.039 150.75 196.532 150.537 196.001 150.534H191.764C191.231 150.534 190.721 150.746 190.345 151.123C189.969 151.5 189.757 152.011 189.757 152.544C189.757 153.078 189.969 153.589 190.345 153.966C190.721 154.343 191.231 154.555 191.764 154.555Z" fill="#263238"/>\r\n<path d="M184.948 150.76C185.341 150.043 185.935 149.458 186.657 149.075C187.378 148.693 188.196 148.53 189.008 148.608C189.821 148.685 190.593 148.999 191.229 149.511C191.866 150.023 192.339 150.71 192.59 151.489C192.841 152.267 192.86 153.101 192.643 153.89C192.427 154.679 191.985 155.386 191.372 155.926C190.759 156.466 190.001 156.814 189.193 156.928C188.385 157.041 187.561 156.915 186.823 156.565C185.809 156.042 185.043 155.137 184.692 154.05C184.341 152.962 184.433 151.78 184.948 150.76Z" fill="#5271EC"/>\r\n<path d="M186.092 156.565L187.253 157.113L191.291 148.531L190.129 147.982L186.092 156.565Z" fill="#263238"/>\r\n<circle cx="93.7904" cy="3.36123" r="3.36123" fill="#4E7ADA"/>\r\n<circle cx="139.946" cy="10.1151" r="3.36123" fill="#4F7DDF"/>\r\n<ellipse cx="105.949" cy="38.7868" rx="3.32432" ry="1.97881" transform="rotate(-27.5696 105.949 38.7868)" fill="white" fill-opacity="0.39"/>\r\n<path fill-rule="evenodd" clip-rule="evenodd" d="M47.0058 154.663C48.6615 153.663 50.9231 154.413 52.175 156.353C53.4269 158.293 53.1341 160.703 51.5187 161.713C49.9033 162.723 47.6014 161.963 46.3596 160.013C45.1077 158.063 45.35 155.663 47.0058 154.663Z" fill="#D9D9D9"/>\r\n<path fill-rule="evenodd" clip-rule="evenodd" d="M38.9583 160.549L47.8025 156.639C48.7213 156.282 49.7591 156.729 50.1196 157.639C50.4588 158.492 50.0842 159.459 49.2564 159.869L40.4122 163.779C39.5106 164.176 38.4545 163.773 38.0547 162.879C37.6963 162.079 37.982 161.14 38.7261 160.669C38.8008 160.624 38.8786 160.583 38.9583 160.549Z" fill="#18294D" stroke="#18294D" stroke-width="1.08162"/>\r\n<defs>\r\n<pattern id="pattern0_5301_3013" patternContentUnits="objectBoundingBox" width="0.994723" height="0.99835">\r\n<use xlink:href="#image0_5301_3013" transform="scale(0.00947355 0.0112174)"/>\r\n</pattern>\r\n<pattern id="pattern1_5301_3013" patternContentUnits="objectBoundingBox" width="0.994723" height="0.99835">\r\n<use xlink:href="#image1_5301_3013" transform="scale(0.00947355 0.0112174)"/>\r\n</pattern>\r\n<pattern id="pattern2_5301_3013" patternContentUnits="objectBoundingBox" width="0.994723" height="0.99835">\r\n<use xlink:href="#image1_5301_3013" transform="scale(0.00947355 0.0112174)"/>\r\n</pattern>\r\n<image id="image0_5301_3013" width="105" height="89" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>\r\n<image id="image1_5301_3013" width="105" height="89" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>\r\n</defs>\r\n</svg>\r\n')}`,
          a = ["hdmiLost1", "hdmiLost2", "hdmiLost3"];
        return (e, l) => (
          i(),
          n("div", Lo, [
            r("img", {
              src: t,
              width: "225",
              alt: "hdmi lost",
            }),
            r("div", _o, [
              r("div", Do, p(e.$t("common.hdmiLostTitle")), 1),
              (i(),
              n(
                w,
                null,
                E(a, (t) =>
                  r(
                    "div",
                    {
                      class: "list flex-start flex-nowrap",
                      key: t,
                    },
                    [
                      l[0] ||
                        (l[0] = r(
                          "span",
                          {
                            class: "dot",
                          },
                          null,
                          -1,
                        )),
                      r("div", Oo, p(e.$t("common." + t)), 1),
                    ],
                  ),
                ),
                64,
              )),
            ]),
          ])
        );
      },
    }),
    [["__scopeId", "data-v-cbf1573b"]],
  );
class Io {
  constructor(e, a) {
    (t(this, "configState"),
      t(this, "stop", !1),
      t(this, "ensuring", !1),
      t(this, "ws", null),
      t(this, "ping_timer", null),
      t(this, "missed_heartbeats", 0),
      t(this, "codec", ""),
      t(this, "decoder", null),
      t(this, "frame", null),
      t(this, "ctx"),
      t(this, "state", null),
      t(this, "fps_accum", 0),
      t(this, "activated", !0),
      t(this, "ensureMedia", (e) => {
        if (null === this.ws && !this.stop && (!this.ensuring || e)) {
          ((this.ensuring = !0),
            this.config.setInactive(),
            this.config.setInfo(!1, !1, ""));
          const e = "https:" === location.protocol ? "wss" : "ws";
          ((this.ws = new WebSocket(`${e}://${location.host}/api/media/ws`)),
            (this.ws.binaryType = "arraybuffer"),
            (this.ws.onopen = this.wsOpenHandler.bind(this)),
            (this.ws.onerror = this.wsErrorHandler.bind(this)),
            (this.ws.onclose = this.wsCloseHandler.bind(this)),
            (this.ws.onmessage = async (e) => {
              try {
                "string" == typeof e.data
                  ? ((e = JSON.parse(e.data)),
                    this.wsJsonHandler(e.event_type, e.event))
                  : await this.wsBinHandler(e.data);
              } catch (t) {
                this.wsErrorHandler(t);
              }
            }));
        }
      }),
      t(this, "ping", () => {
        try {
          if (((this.missed_heartbeats += 1), this.missed_heartbeats >= 5))
            throw new Error("Too many missed heartbeats");
          if (
            (this.ws.send(new Uint8Array([0])),
            this.decoder && "configured" === this.decoder.state)
          ) {
            const e = !(!this.state || !this.state.source.online),
              t = `${this.fps_accum} fps ${R("main.dynamic")}`;
            (this.config.setInfo(!0, e, t, {
              fps: this.fps_accum,
            }),
              (this.fps_accum = 0));
          }
        } catch (e) {
          this.wsErrorHandler(e.message);
        }
      }),
      t(this, "wsErrorHandler", (e) => {
        (this.config.setInfo(!1, !1, e), this.wsForceClose());
      }),
      t(this, "wsBinHandler", async (e) => {
        const t = new Uint8Array(e.slice(0, 2));
        if (255 === t[0]) this.missed_heartbeats = 0;
        else if (1 === t[0]) {
          const a = !!t[1];
          (await this.ensureDecoder(a)) &&
            (await this.processFrame(a, e.slice(2)));
        }
      }),
      t(this, "ensureDecoder", async (e) => {
        if ("" === this.codec) return !1;
        if (null === this.decoder || "closed" === this.decoder.state) {
          const e = "" !== this.codec,
            t = this.codec;
          (this.closeDecoder(),
            (this.codec = t),
            (this.decoder = new VideoDecoder({
              output: this.renderFrame.bind(this),
              error: (e) => log(e.message),
            })),
            e && this.ws.send(new Uint8Array([0])));
        }
        if ("configured" !== this.decoder.state) {
          if (!e) return !1;
          this.decoder.configure({
            codec: this.codec,
            optimizeForLatency: !0,
          });
        }
        return (
          "configured" === this.decoder.state &&
          (this.config.setActive(this.activated), (this.activated = !1), !0)
        );
      }),
      t(this, "processFrame", async (e, t) => {
        const a = new EncodedVideoChunk({
          timestamp: 1e3 * (performance.now() + performance.timeOrigin),
          type: e ? "key" : "delta",
          data: t,
        });
        this.decoder.decode(a);
      }),
      (this.canvas = e),
      (this.config = a),
      (this.configState = ve().configState),
      (this.ctx = this.canvas.getContext("2d")),
      this.ensureStream());
  }
  get orient() {
    return X(Y.ORIENTATION).value;
  }
  async ensureStream() {
    var e;
    if (!(null == (e = J().streamerState) ? void 0 : e.streamer))
      return (await ia(100), void this.ensureStream());
    ((this.stop = !1), this.ensureMedia(!1));
  }
  stopStream() {
    ((this.stop = !0),
      (this.ensuring = !1),
      this.wsForceClose(),
      this.config.setInfo(!1, !1, ""));
  }
  wsOpenHandler() {
    ((this.missed_heartbeats = 0),
      (this.ping_timer = setInterval(this.ping, 1e3)));
  }
  wsForceClose() {
    (this.ws && ((this.ws.onclose = null), this.ws.close()),
      this.wsCloseHandler(),
      this.config.setInactive());
  }
  wsCloseHandler() {
    (this.ping_timer &&
      (clearInterval(this.ping_timer), (this.ping_timer = null)),
      this.closeDecoder(),
      (this.missed_heartbeats = 0),
      (this.fps_accum = 0),
      (this.ws = null),
      this.stop || setTimeout(() => this.ensureMedia(!0), 1e3));
  }
  wsJsonHandler(e, t) {
    "media" === e && this.setupCodec(t.video);
  }
  setupCodec(e) {
    if ((this.closeDecoder(), void 0 !== e.h264)) {
      if (!window.VideoDecoder) {
        let e = "This browser can't handle direct H.264 stream";
        return (
          ft.isHttps || (e = "Direct H.264 requires HTTPS"),
          void this.config.setInfo(!1, !1, e)
        );
      }
      ((this.codec = `avc1.${e.h264.profile_level_id}`),
        this.ws.send(
          JSON.stringify({
            event_type: "start",
            event: {
              type: "video",
              format: "h264",
            },
          }),
        ));
    } else {
      const e = "No H.264 stream available on PiKVM";
      this.config.setInfo(!1, !1, e);
    }
  }
  closeDecoder() {
    if (null !== this.decoder)
      try {
        this.decoder.close();
      } finally {
        if (((this.codec = ""), (this.decoder = null), null !== this.frame))
          try {
            this.closeFrame(this.frame);
          } finally {
            this.frame = null;
          }
      }
  }
  renderFrame(e) {
    null === this.frame
      ? ((this.frame = e),
        window.requestAnimationFrame(
          this.drawPendingFrame.bind(this),
          this.canvas,
        ))
      : this.closeFrame(e);
  }
  getName() {
    return "Direct H.264";
  }
  drawPendingFrame() {
    if (null !== this.frame)
      try {
        let e = this.frame.displayWidth,
          t = this.frame.displayHeight;
        switch (this.orient) {
          case 90:
          case 270:
            ((e = this.frame.displayHeight), (t = this.frame.displayWidth));
        }
        if (
          ((this.canvas.width === e && this.canvas.height === t) ||
            ((this.canvas.width = e),
            (this.canvas.height = t),
            this.config.organizeHook()),
          this.orient === mt.DEFAULT)
        )
          this.ctx.drawImage(this.frame, 0, 0);
        else {
          this.ctx.save();
          try {
            switch (this.orient) {
              case mt.RIGHT:
                (this.ctx.translate(0, t), this.ctx.rotate(-Math.PI / 2));
                break;
              case mt.UPSIDE:
                (this.ctx.translate(e, t), this.ctx.rotate(-Math.PI));
                break;
              case mt.LEFT:
                (this.ctx.translate(e, 0), this.ctx.rotate(Math.PI / 2));
            }
            this.ctx.drawImage(this.frame, 0, 0);
          } finally {
            this.ctx.restore();
          }
        }
        this.fps_accum += 1;
      } finally {
        (this.closeFrame(this.frame), (this.frame = null));
      }
  }
  closeFrame(e) {
    q.is_firefox || e.close();
  }
}
const Fo = {
    class: "mic-status-icon flex position-relative pointer",
  },
  Ao = {
    class: "volume-icon-outer full-width full-height flex position-absolute",
  },
  Vo = ["src", "width", "height"],
  Uo = U(
    a({
      __name: "micStatusIcon",
      props: {
        withThemeMode: {
          type: Boolean,
          default: !0,
        },
        primary: {
          type: Boolean,
        },
        size: {
          default: 32,
        },
      },
      setup(e) {
        const t = e,
          { systemStore: a, kvmStore: l } = Z(),
          d = s(() =>
            t.withThemeMode
              ? "data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.3855%2011.5351C16.5627%2011.2692%2016.9079%2011.1556%2017.2156%2011.2803C17.5674%2011.4231%2017.7373%2011.824%2017.5945%2012.1758L17.4968%2012.4014C16.5281%2014.5221%2014.296%2016.0149%2011.6873%2016.2402V17.875C11.6871%2018.2545%2011.3793%2018.5624%2010.9998%2018.5625C10.6202%2018.5625%2010.3125%2018.2545%2010.3123%2017.875V16.2402C7.70298%2016.0151%205.46949%2014.5226%204.50076%2012.4014L4.40408%2012.1758L4.36502%2012.042C4.30657%2011.7278%204.47461%2011.4055%204.78201%2011.2803C5.08988%2011.1553%205.43584%2011.2689%205.61307%2011.5351L5.67752%2011.6582L5.75174%2011.8301C6.555%2013.586%208.56496%2014.8925%2010.991%2014.8955H11.0066C13.5114%2014.8927%2015.572%2013.5%2016.3201%2011.6582L16.3855%2011.5351Z'%20fill='%235271ec'/%3e%3cpath%20d='M14.3476%2017.6592C14.6604%2017.7236%2014.8963%2018.0012%2014.8965%2018.333C14.8965%2018.6649%2014.6605%2018.9424%2014.3476%2019.0068L14.209%2019.0205H7.792C7.41234%2019.0205%207.10352%2018.7127%207.10352%2018.333C7.10372%2017.9535%207.41246%2017.6455%207.792%2017.6455H14.209L14.3476%2017.6592Z'%20fill='%235271ec'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M11.1885%203.21289C13.1257%203.31115%2014.6659%204.91339%2014.666%206.875V10.542L14.6611%2010.7305C14.5628%2012.6676%2012.9615%2014.2078%2011%2014.208L10.8105%2014.2031C8.87352%2014.1046%207.33301%2012.5025%207.33301%2010.541V6.875C7.33314%204.85015%208.97515%203.20814%2011%203.20801L11.1885%203.21289ZM11%204.58301C9.73454%204.58314%208.70814%205.60954%208.70801%206.875V10.541C8.70801%2011.8066%209.73446%2012.8329%2011%2012.833C12.2653%2012.8328%2013.2907%2011.8073%2013.291%2010.542V6.875C13.2909%205.60957%2012.2654%204.58318%2011%204.58301Z'%20fill='%235271ec'/%3e%3cpath%20d='M4.55564%204.55515C4.79049%204.3203%205.15306%204.29124%205.41989%204.46726L5.52829%204.55515L17.4443%2016.4722L17.5332%2016.5796C17.7094%2016.8465%2017.6793%2017.2089%2017.4443%2017.4439C17.2094%2017.6788%2016.8469%2017.709%2016.5801%2017.5327L16.4726%2017.4439L4.55564%205.52781L4.46775%205.41941C4.29173%205.15258%204.32078%204.79%204.55564%204.55515Z'%20fill='%23E04C7E'/%3e%3c/svg%3e"
              : a.state.micMuted
                ? "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.5794%2018.6094C23.7953%2018.1013%2024.3828%2017.8635%2024.891%2018.0791C25.3988%2018.2951%2025.6367%2018.8825%2025.4212%2019.3906C24.1126%2022.4718%2020.8303%2024.6326%2017.0003%2024.9561V27H21.0003C21.5524%2027.0002%2022.0003%2027.4478%2022.0003%2028C22.0003%2028.5522%2021.5524%2028.9998%2021.0003%2029H11.0003C10.4482%2028.9999%2010.0003%2028.5522%2010.0003%2028C10.0003%2027.4478%2010.4482%2027.0001%2011.0003%2027H15.0003V24.9561C11.1704%2024.6326%207.88811%2022.4718%206.57944%2019.3906C6.36402%2018.8826%206.60186%2018.2951%207.10972%2018.0791C7.61789%2017.8635%208.20537%2018.1013%208.42124%2018.6094C9.47453%2021.0887%2012.4031%2023%2016.0003%2023C19.5976%2023%2022.5262%2021.0887%2023.5794%2018.6094ZM16.0003%203C19.0377%203.0001%2021.5003%205.46264%2021.5003%208.5V15.5C21.5003%2018.5374%2019.0377%2020.9999%2016.0003%2021C12.9629%2021%2010.5003%2018.5374%2010.5003%2015.5V8.5C10.5003%205.46258%2012.9629%203%2016.0003%203Z'%20fill='white'/%3e%3cpath%20d='M3.29289%203.29289C3.68342%202.90237%204.31643%202.90237%204.70696%203.29289L28.707%2027.2929C29.0975%2027.6834%2029.0975%2028.3164%2028.707%2028.707C28.3164%2029.0975%2027.6834%2029.0975%2027.2929%2028.707L3.29289%204.70696C2.90237%204.31643%202.90237%203.68342%203.29289%203.29289Z'%20fill='%23E04C7E'/%3e%3c/svg%3e"
                : "data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M23.5795%2018.6094C23.7953%2018.1013%2024.3828%2017.8635%2024.891%2018.0791C25.3988%2018.2951%2025.6367%2018.8826%2025.4212%2019.3906C24.1126%2022.4718%2020.8303%2024.6326%2017.0004%2024.9561V27H21.0004C21.5524%2027.0002%2022.0004%2027.4478%2022.0004%2028C22.0004%2028.5522%2021.5524%2028.9998%2021.0004%2029H11.0004C10.4482%2028.9999%2010.0004%2028.5522%2010.0004%2028C10.0004%2027.4478%2010.4482%2027.0001%2011.0004%2027H15.0004V24.9561C11.1704%2024.6326%207.88812%2022.4719%206.57945%2019.3906C6.36402%2018.8825%206.60185%2018.2951%207.10973%2018.0791C7.6179%2017.8635%208.20538%2018.1013%208.42125%2018.6094C9.47453%2021.0887%2012.4031%2023%2016.0004%2023C19.5976%2023%2022.5262%2021.0887%2023.5795%2018.6094ZM16.0004%203C19.0377%203.0001%2021.5004%205.46264%2021.5004%208.5V15.5C21.5004%2018.5374%2019.0377%2020.9999%2016.0004%2021C12.9629%2021%2010.5004%2018.5374%2010.5004%2015.5V8.5C10.5004%205.46258%2012.9629%203%2016.0004%203Z'%20fill='white'/%3e%3c/svg%3e",
          ),
          p = s(
            () =>
              !t.withThemeMode ||
              (!(!a.state.micOn || !a.state.micMuted) && !!a.state.micMuted),
          );
        return (e, s) => {
          const v = f("GlSvg");
          return (
            i(),
            n("div", Fo, [
              r("div", Ao, [
                u(a).state.micOn && !u(a).state.micMuted
                  ? (i(),
                    n(
                      "div",
                      {
                        key: 0,
                        class: c({
                          "volume-icon flex items-end pointer": !0,
                          small: 22 === t.size,
                        }),
                      },
                      [
                        r(
                          "div",
                          {
                            class: "inner full-width",
                            style: I({
                              height: 100 * u(l).micVolume + "%",
                            }),
                          },
                          null,
                          4,
                        ),
                      ],
                      2,
                    ))
                  : y("", !0),
              ]),
              b(
                r(
                  "img",
                  {
                    style: {
                      "user-select": "none",
                    },
                    class: "pointer",
                    src: d.value,
                    alt: "mic muted",
                    width: t.size,
                    height: t.size,
                  },
                  null,
                  8,
                  Vo,
                ),
                [[k, p.value]],
              ),
              b(
                o(
                  v,
                  {
                    size: t.size,
                    name: u(a).state.micMuted ? "gl-kvm-mic-off" : "gl-kvm-mic",
                    primary: t.primary,
                    class: "pointer",
                    color: t.withThemeMode ? void 0 : "#fff",
                  },
                  null,
                  8,
                  ["size", "name", "primary", "color"],
                ),
                [[k, !p.value]],
              ),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-afd05536"]],
  ),
  Po = {
    key: 0,
    class: c({
      "content-container": !0,
    }),
  },
  Wo = {
    class: "content",
  },
  Ro = {
    class: "flex",
  },
  Zo = {
    class: "flex title",
  },
  No = {
    class: "flex collapse-icon",
  },
  Bo = U(
    a({
      __name: "microPhoneStatus",
      setup(e) {
        const { configStore: t, systemStore: a, kvmStore: s } = Z(),
          v = l();
        Qt({
          element: v,
        });
        const h = () => {
          const e = v.value.parentElement;
          if (!e) return;
          const t = e.getBoundingClientRect(),
            a = {
              left: v.value.offsetLeft,
              top: v.value.offsetTop,
            },
            l = {
              left: a.left / t.width,
              top: a.top / t.height,
            },
            s = a.left + 84 > t.width,
            i = a.top + 84 > t.height,
            n = {
              left: s ? (t.width - 84) / t.width : l.left,
              top: i ? (t.height - 84) / t.height : l.top,
            };
          (log("checkPosition", {
            currentPositionPx: a,
            parentElSize: t,
            position: n,
          }),
            (v.value.style.cssText = `\n        left: ${100 * n.left}%;\n        top: ${100 * n.top}%;`));
        };
        return (
          ht(() => {
            setTimeout(h, 300);
          }),
          x(
            () => t.leftPanelOpen,
            () => {
              setTimeout(h, 300);
            },
          ),
          (e, l) => {
            const h = f("GlSvg");
            return b(
              (i(),
              n(
                "div",
                {
                  ref_key: "micStatusRef",
                  ref: v,
                  onMousemove: l[4] || (l[4] = m(() => {}, ["stop"])),
                  onMousedown: l[5] || (l[5] = m(() => {}, ["stop"])),
                  class: c({
                    "mic-status flex items-end full-width flex position-absolute":
                      !0,
                    hide: !u(t).state.showMute,
                  }),
                },
                [
                  u(a).state.micOn
                    ? (i(),
                      n("div", Po, [
                        r("div", Wo, [
                          r("div", Ro, [
                            o(
                              u(St),
                              {
                                title: e.$t(
                                  "settings." +
                                    (u(a).state.micMuted
                                      ? "unmuteMic"
                                      : "muteMic"),
                                ),
                              },
                              {
                                default: d(() => [
                                  o(Uo, {
                                    size: 32,
                                    onMousedown:
                                      l[0] ||
                                      (l[0] = m(
                                        () => u(a).setMicMuted(),
                                        ["stop"],
                                      )),
                                    onTouchstart:
                                      l[1] ||
                                      (l[1] = m(
                                        () => u(a).setMicMuted(),
                                        ["stop"],
                                      )),
                                    withThemeMode: !1,
                                  }),
                                ]),
                                _: 1,
                              },
                              8,
                              ["title"],
                            ),
                          ]),
                          r("div", Zo, p(e.$t("settings.mic")), 1),
                          r("div", No, [
                            o(
                              u(St),
                              {
                                title: e.$t("settings.hideMicPanel"),
                                placement: "right",
                              },
                              {
                                default: d(() => [
                                  o(h, {
                                    onTouchstart:
                                      l[2] ||
                                      (l[2] = m(
                                        (e) => u(t).toggleShowMute(!0),
                                        ["stop"],
                                      )),
                                    onMousedown:
                                      l[3] ||
                                      (l[3] = m(
                                        (e) => u(t).toggleShowMute(!1),
                                        ["stop"],
                                      )),
                                    size: 16,
                                    color: "#fff",
                                    name: "gl-kvm-collapse-down",
                                    class: "pointer",
                                  }),
                                ]),
                                _: 1,
                              },
                              8,
                              ["title"],
                            ),
                          ]),
                        ]),
                      ]))
                    : y("", !0),
                ],
                34,
              )),
              [[k, u(a).state.micOn && u(s).isWebrtcMode]],
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-0e6722ec"]],
  ),
  Ko = {
    class: "player-content full-width full-height bg-pg",
  },
  zo = ["id"],
  Go = ["id"],
  Jo = {
    key: 0,
    class: "stream-window-wrapper position-absolute bg-default",
  },
  Ho = U(
    a({
      __name: "kvmPlayer",
      setup(e) {
        const t = l(),
          a = l(),
          p = l(),
          v = l(),
          f = l(),
          C = l(),
          {
            msgStore: w,
            kvmStore: M,
            settingsStore: E,
            configStore: D,
            serverStorageStore: O,
            systemStore: T,
          } = Z(),
          { width: F, height: V } = ht(),
          { isMouseAbsolute: U } = (function (e) {
            const t = J(),
              a = ve(),
              l = h({
                relativeCaptured: !1,
              }),
              i = s(() => {
                var e, a;
                return !(
                  !1 ===
                  (null == (a = null == (e = t.hidState) ? void 0 : e.mouse)
                    ? void 0
                    : a.absolute)
                );
              }),
              n = () => {
                i.value ||
                  (e.value.requestPointerLock(),
                  a.setMouseEnabled(!0),
                  (l.relativeCaptured = !0));
              },
              o = (t) => {
                i.value ||
                  t.key !== De.Escape ||
                  document.pointerLockElement !== e.value ||
                  (document.exitPointerLock(), (l.relativeCaptured = !1));
              };
            return (
              S(() => {
                (e.value.addEventListener("mouseup", n),
                  document.addEventListener("keydown", o),
                  (document.onpointerlockchange = () => {
                    i.value || document.pointerLockElement !== e.value
                      ? (a.setMouseEnabled(!1), (l.relativeCaptured = !1))
                      : (a.setMouseEnabled(!0), (l.relativeCaptured = !0));
                  }));
              }),
              x(
                () => i.value,
                (e) => {
                  e && (document.exitPointerLock(), (l.relativeCaptured = !1));
                },
              ),
              {
                isMouseAbsolute: i,
              }
            );
          })(a),
          { computedStyle: P } = $t(v, v, ea.VIEW_PORT_IN),
          W = h({
            info: [],
            videoJanus: {},
            videoMedia: {},
            audioJanus: {},
            mouseHandler: null,
            keyboardHandler: null,
            wideScreen: !1,
            initVideoJanusFinished: !1,
            showLocalStream: !1,
          }),
          N = X(Y.ORIENTATION),
          B = s(() => ({
            "player-container full-height": !0,
            "wide-screen-player": W.wideScreen,
            "full-screen-player": D.state.fullScreenOn,
            "header-collapsed": D.state.headerCollapsed,
            "hdmi-lost": M.noHDMISignal,
          })),
          K = async (e) => {
            var t, a;
            if (
              (await w.waitForRtcConfig(),
              null ==
                (a = null == (t = W.audioJanus) ? void 0 : t.stopStream) ||
                a.call(t),
              !M.isWebrtcMode)
            )
              return void (W.audioJanus = null);
            const { micMuted: l } = T.state,
              { volumeOn: s } = M.configState;
            W.audioJanus =
              (l && !s) || "STOP_MIC_AND_SOUND" === e
                ? null
                : new gt(
                    C.value,
                    {
                      rtcConfig: w.rtcConfig,
                    },
                    M.configState,
                    s,
                    !1,
                    na(() => {
                      setTimeout(() => {
                        s && (C.value.play(), (C.value.volume = 1));
                      }, 100);
                    }),
                    void 0,
                    (t) => {
                      t ||
                        (["ENABLE_MIC", "ENABLE_MIC_AND_SOUND"].includes(e) &&
                          (Gt.info({
                            centered: !0,
                            title: R("system.micPermissionError"),
                            content: R("system.micPermissionErrorContent"),
                            okText: R("common.gotIt"),
                          }),
                          T.setMicMuted(!0)));
                    },
                  );
          },
          z = () => {
            U.value && M.setMouseEnabled(!0);
          },
          G = () => {
            U.value && M.setMouseEnabled(!1);
          },
          H = () => {
            (ls.clearAllPressDownKeys(), M.setKeyboardEnabled(!1));
          },
          j = () => {
            var e;
            (M.setKeyboardEnabled(!0), null == (e = a.value) || e.focus());
          },
          Q = (e = !1) => {
            (q.is_safari &&
              M.isWebrtcMode &&
              (M.configState.initVideoJanusFinished = !0),
              M.setStreamState(!0),
              (M.isWebrtcMode || e) && So(t.value));
          },
          $ = () => {
            M.setStreamState(!1);
          },
          ee = (...e) => {
            var t;
            ((null == (t = e[3]) ? void 0 : t.fps) &&
              (M.configState.initVideoJanusFinished = !0),
              M.isWebrtcMode || M.setStreamState(!0),
              M.setStreamInfo(e));
          },
          te = async () => {
            var e, t, a, l;
            (await w.waitForRtcConfig(),
              null ==
                (t = null == (e = W.videoJanus) ? void 0 : e.stopStream) ||
                t.call(e),
              null ==
                (l = null == (a = W.videoMedia) ? void 0 : a.stopStream) ||
                l.call(a),
              (W.showLocalStream = !1),
              (M.configState.initVideoJanusFinished = !1));
            const s = w.rtcConfig,
              i = new gt(
                p.value,
                {
                  setActive: Q,
                  setInactive: $,
                  setInfo: ee,
                  rtcConfig: s,
                },
                M.configState,
                !1,
                !0,
                async () => {
                  M.configState.initVideoJanusFinished = !0;
                },
                () => {
                  W.showLocalStream = !0;
                },
              );
            ((W.videoJanus = i), w.setVideoJanusName(i.getName()));
          },
          ae = () => {
            var e, t, a, l;
            M.isWebrtcMode
              ? te()
              : M.isDirectMode &&
                (null ==
                  (t = null == (e = W.videoMedia) ? void 0 : e.stopStream) ||
                  t.call(e),
                null ==
                  (l = null == (a = W.videoJanus) ? void 0 : a.stopStream) ||
                  l.call(a),
                (W.showLocalStream = !1),
                (M.configState.initVideoJanusFinished = !1),
                M.noHDMISignal && (M.configState.initVideoJanusFinished = !0),
                K("STOP_MIC_AND_SOUND"),
                (W.videoMedia = new Io(f.value, {
                  setActive: Q,
                  setInactive: $,
                  setInfo: ee,
                  organizeHook() {},
                })),
                w.setVideoJanusName(W.videoMedia.getName()));
          },
          le = () => {
            K("ENABLE_MIC_AND_SOUND");
          };
        S(async () => {
          (ae(),
            le(),
            (W.mouseHandler = new Mo(a.value)),
            (W.keyboardHandler = new ls(a.value)),
            So(t.value),
            D.on("reconnected", () => {
              (se(),
                ae(),
                le(),
                (!M.configState.volumeOn && T.state.micMuted) ||
                  K("ENABLE_MIC_AND_SOUND"));
            }));
        });
        const se = () => {
          var e, t, a, l;
          (null == (t = null == (e = W.videoJanus) ? void 0 : e.stopStream) ||
            t.call(e),
            null == (l = null == (a = W.videoMedia) ? void 0 : a.stopStream) ||
              l.call(a),
            K("STOP_MIC_AND_SOUND"));
        };
        _(() => {
          se();
        });
        const ie = s(() => {
          var e, t;
          return [
            null == (t = null == (e = w.streamerState) ? void 0 : e.streamer)
              ? void 0
              : t.source.resolution,
            F,
            V,
            D.state.headerCollapsed,
            D.leftPanelOpen,
            E.virtualKeyboardFixed,
            E.virtualKeyboardAvailableWidth,
          ];
        });
        return (
          x(
            ie,
            () => {
              So(t.value);
            },
            {
              deep: !0,
            },
          ),
          x(
            () => D.state.headerCollapsed,
            () => {
              setTimeout(() => {
                So(t.value);
              }, 300);
            },
          ),
          x(
            () => [N.value, M.isWebrtcMode],
            () => {
              L(() => {
                ae();
              });
            },
          ),
          x(
            () => M.configState.volumeOn,
            (e) => {
              K(e ? "ENABLE_SOUND" : "STOP_SOUND");
            },
          ),
          x(
            () => T.state.micMuted,
            (e) => {
              var t;
              (null == (t = W.audioJanus) ? void 0 : t.micTrack)
                ? W.audioJanus.setMicEnabled(!e)
                : K(e ? "STOP_MIC" : "ENABLE_MIC");
            },
          ),
          x(
            () => M.configState.cameraOn,
            () => {
              M.isWebrtcMode && te();
            },
          ),
          x(
            () => M.noHDMISignal,
            (e) => {
              e && (M.configState.initVideoJanusFinished = !0);
            },
          ),
          (e, l) => (
            i(),
            n(
              "div",
              {
                class: c(B.value),
              },
              [
                r(
                  "div",
                  {
                    class: "header-tool flex full-width",
                    onMouseup: l[0] || (l[0] = m(() => {}, ["stop"])),
                    onMousemove: l[1] || (l[1] = m(() => {}, ["stop"])),
                  },
                  [o(Eo)],
                  32,
                ),
                r("figure", null, [
                  r(
                    "audio",
                    {
                      ref_key: "audioRef",
                      ref: C,
                    },
                    null,
                    512,
                  ),
                ]),
                r("div", Ko, [
                  o(
                    u(zt),
                    {
                      spinning:
                        !u(M).configState.initVideoJanusFinished ||
                        u(T).state.streamQualitySetting,
                    },
                    {
                      default: d(() => [
                        r(
                          "div",
                          {
                            ref_key: "streamWindowRef",
                            ref: t,
                            id: "stream-window",
                            class: c({
                              "bg-default": !0,
                              "stream-window-inited":
                                u(M).configState.initVideoJanusFinished,
                            }),
                          },
                          [
                            r(
                              "div",
                              {
                                ref_key: "streamBoxRef",
                                ref: a,
                                id: "stream-box",
                                class: c({
                                  "no-cursor": !u(O).storage[u(Y).SHOW_CURSOR],
                                }),
                                tabindex: "-1",
                                onBlur: H,
                                onFocus: j,
                                onClick: j,
                                onMouseenter: z,
                                onMouseleave: G,
                              },
                              [
                                l[2] ||
                                  (l[2] = r(
                                    "div",
                                    {
                                      id: "video-wrapper",
                                      class:
                                        "full-width full-height position-absolute",
                                    },
                                    null,
                                    -1,
                                  )),
                                u(M).isWebrtcMode
                                  ? (i(),
                                    n(
                                      "video",
                                      {
                                        key: 0,
                                        id: u(M).videoElId,
                                        ref_key: "streamVideoRef",
                                        ref: p,
                                        playsinline: "",
                                        class: "position-absolute",
                                        autoplay: "",
                                        muted: "",
                                      },
                                      null,
                                      8,
                                      zo,
                                    ))
                                  : u(M).isDirectMode
                                    ? (i(),
                                      n(
                                        "canvas",
                                        {
                                          key: 1,
                                          id: u(M).videoElId,
                                          ref_key: "streamCanvasRef",
                                          ref: f,
                                        },
                                        null,
                                        8,
                                        Go,
                                      ))
                                    : y("", !0),
                                u(M).noHDMISignal
                                  ? (i(),
                                    g(To, {
                                      key: 2,
                                    }))
                                  : y("", !0),
                                u(M).isWebrtcMode && u(T).state.micOn
                                  ? (i(),
                                    g(Bo, {
                                      key: 3,
                                    }))
                                  : y("", !0),
                              ],
                              34,
                            ),
                            u(M).configState.initVideoJanusFinished
                              ? y("", !0)
                              : (i(), n("div", Jo)),
                            (i(),
                            g(
                              A,
                              {
                                to: "body",
                              },
                              [
                                b(
                                  r(
                                    "video",
                                    {
                                      ref_key: "localStreamVideoRef",
                                      ref: v,
                                      id: "local-stream-video",
                                      playsinline: "",
                                      autoplay: "",
                                      style: I(u(P)),
                                      muted: "",
                                    },
                                    null,
                                    4,
                                  ),
                                  [
                                    [
                                      k,
                                      W.showLocalStream &&
                                        u(M).configState.cameraOn,
                                    ],
                                  ],
                                ),
                              ],
                            )),
                          ],
                          2,
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["spinning"],
                  ),
                ]),
              ],
              2,
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-c78956dc"]],
  ),
  jo = {
    class: "status-container",
  },
  Xo = {
    class: "status-content flex",
  },
  Yo = {
    class: "flex icon-wrap",
  },
  qo = {
    class: "flex icon-wrap",
  },
  Qo = {
    class: "flex icon-wrap",
  },
  $o = U(
    a({
      __name: "kvmStatusDisplay",
      setup(e) {
        const t = ve();
        return (e, a) => {
          var l, s, c;
          const p = f("GlSvg");
          return (
            i(),
            n("div", jo, [
              r("div", Xo, [
                r("div", Yo, [
                  o(
                    u(St),
                    {
                      title: e.$t(
                        null == (l = u(t).kvmStatusStatistics.stream)
                          ? void 0
                          : l.text,
                      ),
                    },
                    {
                      default: d(() => {
                        var e;
                        return [
                          o(
                            p,
                            {
                              class: "status-icon",
                              color:
                                null == (e = u(t).kvmStatusStatistics.stream)
                                  ? void 0
                                  : e.color,
                              style: {
                                "margin-left": "2px",
                              },
                              name: "gl-kvm-hdmi",
                              size: 22,
                            },
                            null,
                            8,
                            ["color"],
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["title"],
                  ),
                ]),
                r("div", qo, [
                  o(
                    u(St),
                    {
                      placement: "top",
                      title: e.$t(
                        (null == (s = u(t).kvmStatusStatistics.keyboard)
                          ? void 0
                          : s.keyboardTitle) || "",
                      ),
                    },
                    {
                      default: d(() => {
                        var e;
                        return [
                          o(
                            p,
                            {
                              class: "status-icon",
                              color:
                                null == (e = u(t).kvmStatusStatistics.keyboard)
                                  ? void 0
                                  : e.color,
                              name: "gl-kvm-keyboard",
                              size: 22,
                            },
                            null,
                            8,
                            ["color"],
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["title"],
                  ),
                ]),
                r("div", Qo, [
                  o(
                    u(St),
                    {
                      title: e.$t(
                        (null == (c = u(t).kvmStatusStatistics.mouse)
                          ? void 0
                          : c.mouseTitle) || "",
                      ),
                      placement: "topRight",
                    },
                    {
                      default: d(() => {
                        var e;
                        return [
                          o(
                            p,
                            {
                              class: "status-icon",
                              color:
                                null == (e = u(t).kvmStatusStatistics.mouse)
                                  ? void 0
                                  : e.color,
                              name: "gl-kvm-mouse1",
                              size: 22,
                            },
                            null,
                            8,
                            ["color"],
                          ),
                        ];
                      }),
                      _: 1,
                    },
                    8,
                    ["title"],
                  ),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-5f8ef6ea"]],
  ),
  ed = {
    ref: "streamHeaderRef",
    class: "kvm-video-info text-2 flex-btw",
  },
  td = {
    class: "flex-start flex-nowrap text-ellipsis",
  },
  ad = {
    class: "flex-start fw-500 flex-nowrap text-ellipsis",
  },
  ld = {
    class: "text-ellipsis",
  },
  sd = {
    class: "frame-text text-ellipsis",
  },
  id = {
    key: 0,
    class: "connection-state nowrap flex color-primary border-box",
  },
  nd = {
    key: 0,
  },
  od = {
    key: 1,
  },
  dd = {
    class: "ctrol-btns position-relative flex-start flex-nowrap",
  },
  rd = {
    class: "text-2 status",
  },
  cd = {
    key: 0,
    class: "flex",
  },
  ud = {
    class: "mute-panel-tip",
  },
  pd = {
    style: {
      color: "rgba(0, 0, 0, 0.85)",
    },
  },
  vd = {
    class: "got-it flex-end",
  },
  md = {
    key: 1,
    class: "flex",
  },
  fd = {
    class: "flex",
  },
  hd = {
    style: {
      "white-space": "nowrap",
    },
  },
  gd = U(
    a({
      __name: "kvmVideoInfo",
      setup(e) {
        const {
            kvmStore: t,
            msgStore: a,
            configStore: l,
            systemStore: c,
          } = Z(),
          { isZh: v } = H(),
          h = X(Y.GOT_MUTED_PANEL_TIP),
          g = s(() => c.state.micOn),
          b = s(() => !l.state.showMute && g.value),
          k = s(() => g.value && !h.value && !l.state.showMute),
          x = s(() => (v.value ? "208px" : "288px"));
        function M() {
          g.value
            ? c.state.micMuted
              ? c.setMicMuted(!1)
              : c.setMicMuted(!0)
            : c.setMicOn();
        }
        const S = () => {
          h.value = !0;
        };
        return (e, s) => {
          const c = f("GlSvg"),
            v = f("BaseButton");
          return (
            i(),
            n(
              "div",
              ed,
              [
                r("div", td, [
                  r("div", ad, [
                    s[8] ||
                      (s[8] = r(
                        "div",
                        {
                          class: "dot",
                        },
                        null,
                        -1,
                      )),
                    r("span", ld, p(u(a).resolutionText), 1),
                    r("span", sd, p(u(t).fpsStreamInfo), 1),
                  ]),
                  u(t).isWebrtcMode && u(t).configState.initVideoJanusFinished
                    ? (i(),
                      n("div", id, [
                        "p2p" === u(t).videoRtcConnectionType
                          ? (i(), n("span", nd, "P2P"))
                          : (i(),
                            n(
                              "span",
                              od,
                              p(e.$t("main.transferConnection")),
                              1,
                            )),
                      ]))
                    : y("", !0),
                ]),
                r("div", dd, [
                  r("span", rd, p(e.$t("common.status")), 1),
                  o($o),
                  u(t).isWebrtcMode
                    ? (i(),
                      n(
                        w,
                        {
                          key: 0,
                        },
                        [
                          o(
                            u(St),
                            {
                              title: e.$t(u(t).kvmStatusStatistics.volume.text),
                            },
                            {
                              default: d(() => [
                                o(
                                  c,
                                  {
                                    onMousedown:
                                      s[0] || (s[0] = m(() => {}, ["stop"])),
                                    onTouchstart:
                                      s[1] || (s[1] = m(() => {}, ["stop"])),
                                    class: "pointer volume-icon",
                                    onClick:
                                      s[2] ||
                                      (s[2] = m(
                                        () => u(t).setVolumeOn(),
                                        ["stop"],
                                      )),
                                    primary: u(t).configState.volumeOn,
                                    name: u(t).configState.volumeOn
                                      ? "gl-kvm-sound-full"
                                      : "gl-kvm-sound-off",
                                    size: 22,
                                  },
                                  null,
                                  8,
                                  ["primary", "name"],
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["title"],
                          ),
                          k.value
                            ? (i(),
                              n("div", cd, [
                                o(
                                  u(St),
                                  {
                                    overlayInnerStyle: {
                                      width: "288px",
                                    },
                                    overlayStyle: {
                                      width: "288px",
                                      maxWidth: "288px",
                                    },
                                    getPopupContainer: (e) =>
                                      null == e ? void 0 : e.parentElement,
                                    open: "",
                                    placement: "topRight",
                                    color: "white",
                                  },
                                  {
                                    title: d(() => [
                                      r("div", ud, [
                                        r(
                                          "div",
                                          pd,
                                          p(e.$t("settings.openMutePanelTip")),
                                          1,
                                        ),
                                        r("div", vd, [
                                          o(
                                            v,
                                            {
                                              onClick: S,
                                              primary: "",
                                              size: "small",
                                            },
                                            {
                                              default: d(() => [
                                                C(p(e.$t("common.gotIt")), 1),
                                              ]),
                                              _: 1,
                                            },
                                          ),
                                        ]),
                                      ]),
                                    ]),
                                    default: d(() => [
                                      o(
                                        Uo,
                                        {
                                          onMousedown:
                                            s[3] ||
                                            (s[3] = m(() => {}, ["stop"])),
                                          onTouchstart:
                                            s[4] ||
                                            (s[4] = m(() => {}, ["stop"])),
                                          primary: g.value,
                                          size: 22,
                                          onClick: m(M, ["stop"]),
                                        },
                                        null,
                                        8,
                                        ["primary"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["getPopupContainer"],
                                ),
                              ]))
                            : (i(),
                              n("div", md, [
                                o(
                                  u(St),
                                  {
                                    overlayInnerStyle: b.value
                                      ? {
                                          width: x.value,
                                        }
                                      : void 0,
                                    overlayStyle: b.value
                                      ? {
                                          width: x.value,
                                          maxWidth: x.value,
                                        }
                                      : void 0,
                                    getPopupContainer: (e) =>
                                      null == e ? void 0 : e.parentElement,
                                    placement: "topRight",
                                  },
                                  {
                                    title: d(() => [
                                      r("div", fd, [
                                        b.value
                                          ? (i(),
                                            n(
                                              w,
                                              {
                                                key: 0,
                                              },
                                              [
                                                o(
                                                  v,
                                                  {
                                                    onClick:
                                                      s[5] ||
                                                      (s[5] = (e) =>
                                                        u(l).toggleShowMute(
                                                          !0,
                                                        )),
                                                    noPadding: "",
                                                    type: "link",
                                                    underline: "",
                                                  },
                                                  {
                                                    default: d(() => [
                                                      C(
                                                        p(
                                                          e.$t(
                                                            "settings.showPanel",
                                                          ),
                                                        ),
                                                        1,
                                                      ),
                                                    ]),
                                                    _: 1,
                                                  },
                                                ),
                                                s[9] ||
                                                  (s[9] = r(
                                                    "span",
                                                    {
                                                      style: {
                                                        padding: "0 8px",
                                                      },
                                                    },
                                                    "|",
                                                    -1,
                                                  )),
                                              ],
                                              64,
                                            ))
                                          : y("", !0),
                                        r(
                                          "span",
                                          hd,
                                          p(
                                            e.$t(
                                              u(t).kvmStatusStatistics.mic.text,
                                            ),
                                          ),
                                          1,
                                        ),
                                      ]),
                                    ]),
                                    default: d(() => [
                                      o(
                                        Uo,
                                        {
                                          onMousedown:
                                            s[6] ||
                                            (s[6] = m(() => {}, ["stop"])),
                                          onTouchstart:
                                            s[7] ||
                                            (s[7] = m(() => {}, ["stop"])),
                                          primary: g.value,
                                          size: 22,
                                          onClick: m(M, ["stop"]),
                                        },
                                        null,
                                        8,
                                        ["primary"],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  [
                                    "overlayInnerStyle",
                                    "overlayStyle",
                                    "getPopupContainer",
                                  ],
                                ),
                              ])),
                        ],
                        64,
                      ))
                    : y("", !0),
                ]),
              ],
              512,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-70d93329"]],
  ),
  Cd = {
    class: "title",
  },
  yd = {
    class: "title",
  },
  wd = {
    key: 2,
    class: "title",
  },
  bd = {
    key: 3,
    class: "subtitle",
  },
  kd = U(
    a({
      __name: "keyboardItem",
      props: {
        keyItem: {},
        pressed: {
          type: Boolean,
        },
        float: {
          type: Boolean,
        },
      },
      emits: ["customKeydown", "customKeyup"],
      setup(e, { emit: t }) {
        const a = e,
          o = t,
          d = Ct(),
          u = se(),
          v = l(!1),
          m = s(() => u.virtualKeyboardAvailableWidth <= 500),
          f = s(() => {
            const e = {
              "key-item-inner": !a.keyItem.isGutter,
              "space-only": a.keyItem.isGutter,
              flex: !0,
              "flex-column": !0,
              dark: d.isDarkMode,
            };
            return (
              (e["items-end"] = "right" === a.keyItem.titlePosition),
              (e["items-start"] = "left" === a.keyItem.titlePosition),
              (e.pressed = a.pressed || v.value),
              (e["is-control-key-down"] = ls.isControlKeyDown(a.keyItem.code)),
              e
            );
          }),
          h = () => {
            ((v.value = !0), o("customKeydown", a.keyItem.code));
          },
          g = () => {
            ((v.value = !1), o("customKeyup", a.keyItem.code));
          },
          C = () => {
            v.value && g();
          };
        return (e, t) => (
          i(),
          n(
            "div",
            {
              class: c({
                "key-item": !a.keyItem.isGutter,
                flex: !0,
              }),
              style: I({
                flex: !e.float && m.value ? 1 : a.keyItem.shrink,
              }),
            },
            [
              r(
                "div",
                {
                  class: c(f.value),
                  onMousedown: h,
                  onMouseup: g,
                  onMouseleave: C,
                },
                [
                  a.keyItem.withLock
                    ? (i(),
                      n(
                        "div",
                        {
                          key: 0,
                          class: c({
                            "lock-container": !0,
                            "lock-right-container":
                              "right" === a.keyItem.ledPosition,
                          }),
                        },
                        [
                          r(
                            "span",
                            {
                              class: c({
                                lock: !0,
                                active: !0 === a.keyItem.lockStatus,
                              }),
                            },
                            null,
                            2,
                          ),
                        ],
                        2,
                      ))
                    : y("", !0),
                  a.keyItem.shortcutTitle && m.value
                    ? (i(),
                      n(
                        w,
                        {
                          key: 1,
                        },
                        [
                          r("div", Cd, p(a.keyItem.shortcutTitle[0]), 1),
                          r("div", yd, p(a.keyItem.shortcutTitle[1]), 1),
                        ],
                        64,
                      ))
                    : (i(), n("div", wd, p(a.keyItem.title), 1)),
                  a.keyItem.subtitle
                    ? (i(), n("div", bd, p(a.keyItem.subtitle), 1))
                    : y("", !0),
                ],
                34,
              ),
            ],
            6,
          )
        );
      },
    }),
    [["__scopeId", "data-v-75c6cbff"]],
  ),
  xd = {
    class: "header-inner flex-btw",
  },
  Md = U(
    a({
      __name: "virtualKeyboardHeader",
      props: {
        float: {
          type: Boolean,
        },
      },
      setup(e) {
        const t = e,
          a = se(),
          l = ie(),
          { height: s } = ht(),
          m = () => {
            a.setVirtualKeyboardStatus(ne.FIXED);
          },
          h = () => {
            a.setVirtualKeyboardStatus(ne.FLOAT);
          },
          y = () => {
            a.setVirtualKeyboardStatus();
          };
        return (e, w) => {
          const b = f("BaseButton");
          return (
            i(),
            n(
              "div",
              {
                ref: "keyboardRef",
                class: c({
                  "vk-header full-width flex bordered bg-surface1": !0,
                  "zoomed-vk-header": e.float && u(a).zoomVirtualKeyboard,
                }),
              },
              [
                r("div", xd, [
                  u(l).state.addShortcutOn || u(s) <= u(yt)
                    ? (i(),
                      g(
                        b,
                        {
                          key: 0,
                          disabled: "",
                        },
                        {
                          default: d(() => [C(p(e.$t("settings.fix")), 1)]),
                          _: 1,
                        },
                      ))
                    : t.float && u(l).state.fullScreenOn
                      ? (i(),
                        g(
                          u(St),
                          {
                            key: 1,
                            title: e.$t("settings.virtualKeyboardFixDisabled"),
                          },
                          {
                            default: d(() => [
                              o(
                                b,
                                {
                                  disabled: "",
                                },
                                {
                                  default: d(() => [
                                    C(p(e.$t("settings.fix")), 1),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["title"],
                        ))
                      : t.float && !u(l).state.fullScreenOn
                        ? (i(),
                          g(
                            b,
                            {
                              key: 2,
                              onClick: m,
                            },
                            {
                              default: d(() => [C(p(e.$t("settings.fix")), 1)]),
                              _: 1,
                            },
                          ))
                        : (i(),
                          g(
                            b,
                            {
                              key: 3,
                              onClick: h,
                            },
                            {
                              default: d(() => [
                                C(p(e.$t("settings.float")), 1),
                              ]),
                              _: 1,
                            },
                          )),
                  v(e.$slots, "default", {}, void 0, !0),
                  o(
                    b,
                    {
                      onClick: y,
                    },
                    {
                      default: d(() => [C(p(e.$t("settings.close")), 1)]),
                      _: 1,
                    },
                  ),
                ]),
              ],
              2,
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-700f8d9f"]],
  ),
  Sd = {
    key: 0,
    class: "flex-btw flex-nowrap bottom-container",
  },
  Ed = a({
    __name: "virtualKeyboard",
    props: {
      float: {
        type: Boolean,
      },
    },
    setup(e) {
      const t = e,
        a = ve(),
        d = J(),
        u = Ct(),
        p = se(),
        m = l([]),
        f = l(),
        h = ie(),
        { height: C } = ht(),
        b = Me(Y.KEYBOARD_CONTROL).value,
        k = s(() => !t.float && p.virtualKeyboardAvailableWidth < 900),
        M = s(() => {
          const e = p.virtualKeyboardAvailableWidth;
          return {
            float: t.float,
            "virtual-keyboard-container": !0,
            "virtual-keyboard-container-middle": e > 899 && e < 1200,
            "virtual-keyboard-container-small": k.value,
            "virtual-keyboard-container-x-small": e <= 390,
            "zoomed-vk": p.zoomVirtualKeyboard,
            "bg-default": !0,
            dark: u.isDarkMode,
            opened: p.virtualKeyboardFixed,
          };
        }),
        _ = s(() =>
          k.value
            ? {
                left: {
                  width: "100%",
                },
                right: {
                  width: "100%",
                },
                bottomLeft: {
                  width: (14 / 17) * 100 + "%",
                },
                bottomRight: {
                  width: (3 / 17) * 100 + "%",
                },
              }
            : {
                left: {
                  width: (14 / 17) * 100 + "%",
                },
                right: {
                  width: (3 / 17) * 100 + "%",
                },
              },
        ),
        D = s(() => {
          var e;
          return wt(null == (e = d.hidState) ? void 0 : e.keyboard.leds);
        }),
        O = (e) => {
          (e.preventDefault(), F(e.code || e.key, !1));
        },
        T = (e) => {
          (e.preventDefault(), A(e.code || e.key, !1));
        },
        F = (e, t = !0) => {
          (h.onVirtualKeyboardKeydown(e),
            bt() ||
              (m.value.includes(e) || m.value.push(e),
              ls.onKeyDownOrUp(e, !0, b.value, t)));
        },
        A = (e, t = !0) => {
          ((m.value = m.value.filter((t) => t !== e)),
            ls.onKeyDownOrUp(e, !1, b.value, t));
        },
        V = () => {
          var e;
          (ls.clearAllPressDownKeys(),
            (m.value = []),
            h.state.pasteboardOpen ||
            p.virtualKeyboardFloat ||
            !p.virtualKeyboardFixed
              ? a.setKeyboardEnabled(!1)
              : p.virtualKeyboardFixed &&
                (a.setKeyboardEnabled(!0), null == (e = f.value) || e.focus()));
        },
        U = () => {
          bt() || a.setKeyboardEnabled(!0);
        };
      return (
        x(
          () => p.state.virtualKeyboardStatus,
          async (e) => {
            var l, s, i;
            e === ne.FIXED
              ? (await L(),
                null == (l = f.value) || l.focus(),
                a.setKeyboardEnabled(!0))
              : t.float && e === ne.FLOAT
                ? (await L(),
                  null == (s = f.value) || s.focus(),
                  a.setKeyboardEnabled(!0))
                : null == (i = f.value) || i.blur();
          },
          {
            immediate: !0,
          },
        ),
        x(C, () => {
          C.value <= yt &&
            p.virtualKeyboardFixed &&
            p.setVirtualKeyboardStatus(ne.FLOAT);
        }),
        S(() => {
          var e;
          t.float &&
            (null == (e = f.value) || e.focus(), a.setKeyboardEnabled(!0));
        }),
        (e, t) => (
          i(),
          n(
            "div",
            {
              class: c(M.value),
            },
            [
              r(
                "div",
                {
                  class: c({
                    "virtual-keyboard full-height": !0,
                  }),
                  tabindex: "-1",
                  ref_key: "keyboardRef",
                  ref: f,
                  onKeydown: O,
                  onKeyup: T,
                  onBlur: V,
                  onFocus: U,
                },
                [
                  v(e.$slots, "header", {}, () => [
                    o(
                      Md,
                      {
                        float: e.float,
                      },
                      null,
                      8,
                      ["float"],
                    ),
                  ]),
                  r(
                    "div",
                    {
                      class: c({
                        "vk-content flex-btw items-start": !0,
                        "flex-wrap": k.value,
                      }),
                    },
                    [
                      r(
                        "div",
                        {
                          class: "left",
                          style: I(_.value.left),
                        },
                        [
                          (i(!0),
                          n(
                            w,
                            null,
                            E(
                              D.value.left,
                              (t, a) => (
                                i(),
                                n(
                                  "div",
                                  {
                                    key: a,
                                    class: "flex-btw item-list",
                                  },
                                  [
                                    (i(!0),
                                    n(
                                      w,
                                      null,
                                      E(
                                        t,
                                        (t, a) => (
                                          i(),
                                          n(
                                            w,
                                            null,
                                            [
                                              !e.float && k.value && t.isGutter
                                                ? y("", !0)
                                                : (i(),
                                                  g(
                                                    kd,
                                                    {
                                                      float: e.float,
                                                      key: a,
                                                      pressed: m.value.includes(
                                                        t.code,
                                                      ),
                                                      onCustomKeyup: A,
                                                      onCustomKeydown: F,
                                                      keyItem: t,
                                                    },
                                                    null,
                                                    8,
                                                    [
                                                      "float",
                                                      "pressed",
                                                      "keyItem",
                                                    ],
                                                  )),
                                            ],
                                            64,
                                          )
                                        ),
                                      ),
                                      256,
                                    )),
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                          k.value
                            ? (i(),
                              n("div", Sd, [
                                r(
                                  "div",
                                  {
                                    class: "flex-btw item-list",
                                    style: I(_.value.bottomLeft),
                                  },
                                  [
                                    (i(!0),
                                    n(
                                      w,
                                      null,
                                      E(
                                        D.value.bottom[0],
                                        (t, a) => (
                                          i(),
                                          g(
                                            kd,
                                            {
                                              float: e.float,
                                              key: a,
                                              pressed: m.value.includes(t.code),
                                              onCustomKeyup: A,
                                              onCustomKeydown: F,
                                              keyItem: t,
                                            },
                                            null,
                                            8,
                                            ["float", "pressed", "keyItem"],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                  4,
                                ),
                                r(
                                  "div",
                                  {
                                    class: "item-list",
                                    style: I(_.value.bottomRight),
                                  },
                                  [
                                    (i(!0),
                                    n(
                                      w,
                                      null,
                                      E(
                                        D.value.bottomRight,
                                        (t, a) => (
                                          i(),
                                          n(
                                            "div",
                                            {
                                              class:
                                                "flex-btw item-list bottom-right",
                                              key: a,
                                            },
                                            [
                                              (i(!0),
                                              n(
                                                w,
                                                null,
                                                E(
                                                  t,
                                                  (t, a) => (
                                                    i(),
                                                    g(
                                                      kd,
                                                      {
                                                        float: e.float,
                                                        style: {
                                                          "min-width": "30%",
                                                        },
                                                        key: a,
                                                        pressed:
                                                          m.value.includes(
                                                            t.code,
                                                          ),
                                                        onCustomKeyup: A,
                                                        onCustomKeydown: F,
                                                        keyItem: t,
                                                      },
                                                      null,
                                                      8,
                                                      [
                                                        "float",
                                                        "pressed",
                                                        "keyItem",
                                                      ],
                                                    )
                                                  ),
                                                ),
                                                128,
                                              )),
                                            ],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                  4,
                                ),
                              ]))
                            : y("", !0),
                        ],
                        4,
                      ),
                      k.value
                        ? y("", !0)
                        : (i(),
                          n(
                            "div",
                            {
                              key: 0,
                              class: "right",
                              style: I(_.value.right),
                            },
                            [
                              (i(!0),
                              n(
                                w,
                                null,
                                E(
                                  D.value.right,
                                  (t, a) => (
                                    i(),
                                    n(
                                      "div",
                                      {
                                        key: a,
                                        class: "flex-btw item-list",
                                      },
                                      [
                                        (i(!0),
                                        n(
                                          w,
                                          null,
                                          E(
                                            t,
                                            (t, a) => (
                                              i(),
                                              g(
                                                kd,
                                                {
                                                  float: e.float,
                                                  key: a,
                                                  pressed: m.value.includes(
                                                    t.code,
                                                  ),
                                                  onCustomKeyup: A,
                                                  onCustomKeydown: F,
                                                  keyItem: t,
                                                },
                                                null,
                                                8,
                                                ["float", "pressed", "keyItem"],
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ],
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ],
                            4,
                          )),
                    ],
                    2,
                  ),
                ],
                544,
              ),
            ],
            2,
          )
        )
      );
    },
  }),
  Ld = U(
    a({
      __name: "floatVirtualKeyboard",
      setup(e) {
        const t = l(),
          a = l(),
          s = se(),
          { computedStyle: p, setPosition: v } = $t(t, a, ea.HANDLER_STAYED);
        return (
          S(() => {
            const e = kt(t.value);
            v(e);
          }),
          (e, l) => (
            i(),
            n(
              "div",
              {
                class: c({
                  "float-virtual-keyboard bordered": !0,
                  zoomed: u(s).zoomVirtualKeyboard,
                }),
                ref_key: "keyboardRef",
                ref: t,
                style: I(u(p)),
              },
              [
                o(
                  Ed,
                  {
                    float: "",
                  },
                  {
                    header: d(() => [
                      r(
                        "div",
                        {
                          ref_key: "headerRef",
                          ref: a,
                        },
                        [
                          o(Md, {
                            float: "",
                          }),
                        ],
                        512,
                      ),
                    ]),
                    _: 1,
                  },
                ),
              ],
              6,
            )
          )
        );
      },
    }),
    [["__scopeId", "data-v-1b91a55b"]],
  ),
  _d = {
    class: "kvm-page-container full-height",
  },
  Dd = {
    class: "kvm-page-content full-width full-height",
  },
  Od = {
    class: "keyboard-container",
  },
  Td = U(
    a({
      __name: "kvmPage",
      setup(e) {
        V((e) => ({
          d06e100a: v.value,
        }));
        const {
            configStore: t,
            settingsStore: a,
            msgStore: d,
            kvmStore: p,
          } = Z(),
          v = s(() =>
            a.virtualKeyboardAvailableWidth >= 900 ? "340px" : "392px",
          ),
          m = l(!0);
        return (
          d.on("turn_change", () => {
            p.isWebrtcMode &&
              ((m.value = !1),
              L(() => {
                m.value = !0;
              }));
          }),
          (e, l) => (
            i(),
            n("div", _d, [
              r(
                "div",
                {
                  class: c({
                    "kvm-page flex-start items-start flex-nowrap": !0,
                    "without-footer": u(t).state.fullScreenOn,
                  }),
                },
                [
                  o(wo),
                  r("div", Dd, [
                    r(
                      "div",
                      {
                        class: c({
                          "player-outer": !0,
                          "keyboard-opened": u(a).virtualKeyboardFixed,
                        }),
                      },
                      [
                        m.value
                          ? (i(),
                            g(Ho, {
                              key: 0,
                            }))
                          : y("", !0),
                      ],
                      2,
                    ),
                    r("div", Od, [o(Ed)]),
                  ]),
                ],
                2,
              ),
              u(t).state.fullScreenOn
                ? y("", !0)
                : (i(),
                  g(gd, {
                    key: 0,
                  })),
              u(a).virtualKeyboardFloat
                ? (i(),
                  g(
                    A,
                    {
                      key: 1,
                      to: "body",
                    },
                    [o(Ld)],
                  ))
                : y("", !0),
            ])
          )
        );
      },
    }),
    [["__scopeId", "data-v-def32eb6"]],
  );
export { Td as default };
