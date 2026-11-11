/* @ds-bundle: {"format":4,"namespace":"BackedDesignSystem_3d5478","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/core/CodeBlock.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"DISCLOSURES","sourcePath":"components/patterns/Disclosure.jsx"},{"name":"Disclosure","sourcePath":"components/patterns/Disclosure.jsx"},{"name":"FeatureRow","sourcePath":"components/patterns/FeatureRow.jsx"},{"name":"INSURERS","sourcePath":"components/patterns/InsurerWall.jsx"},{"name":"InsurerWall","sourcePath":"components/patterns/InsurerWall.jsx"},{"name":"PolicyRow","sourcePath":"components/patterns/PolicyRow.jsx"},{"name":"QuoteCard","sourcePath":"components/patterns/QuoteCard.jsx"},{"name":"SectionHeading","sourcePath":"components/patterns/SectionHeading.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"7871b24ffffb","components/brand/Icon.jsx":"e677ce4bc16a","components/brand/Logo.jsx":"fc2424323960","components/core/Badge.jsx":"2aaccdd3f2c2","components/core/Button.jsx":"dc9f0851b093","components/core/Card.jsx":"d586d3be78d4","components/core/CodeBlock.jsx":"840f0c549fde","components/core/IconButton.jsx":"24a228ef7fac","components/core/Stat.jsx":"b31f77ff3b63","components/core/Tag.jsx":"9dd4285803de","components/feedback/Alert.jsx":"d1958291cb47","components/feedback/Dialog.jsx":"12d58001958d","components/feedback/Toast.jsx":"70d52eab315c","components/feedback/Tooltip.jsx":"f126c1fba5aa","components/forms/Checkbox.jsx":"386335535dfb","components/forms/Input.jsx":"080e291ccbbd","components/forms/Radio.jsx":"87451cdd3ba4","components/forms/Select.jsx":"8a2bd1ce62ce","components/forms/Switch.jsx":"b0a9812c9451","components/navigation/Tabs.jsx":"09136eb8e7f3","components/patterns/Disclosure.jsx":"231841192d53","components/patterns/FeatureRow.jsx":"fb3cb508491a","components/patterns/InsurerWall.jsx":"34a8fe10979e","components/patterns/PolicyRow.jsx":"a979bc63f33e","components/patterns/QuoteCard.jsx":"9226750ed597","components/patterns/SectionHeading.jsx":"17e5f8379a9b","ui_kits/console/ConsoleShell.jsx":"f0891a3ff988","ui_kits/console/NewQuote.jsx":"a2a36968a615","ui_kits/console/Overview.jsx":"543abfc4f8e1","ui_kits/console/Policies.jsx":"f6094aba40cc","ui_kits/website/DarkSections.jsx":"232e9912d471","ui_kits/website/Hero.jsx":"fc731f016810","ui_kits/website/RailSection.jsx":"8ac1abe4da56","ui_kits/website/SiteNav.jsx":"6d9a25a9f9da","ui_kits/website/ValueSection.jsx":"ec51b0fb93d5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BackedDesignSystem_3d5478 = window.BackedDesignSystem_3d5478 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The small caps label above a heading — the only place Backed sets type in caps. */
function Eyebrow({
  children,
  tone = 'muted',
  rule = false,
  style,
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--text-accent)' : tone === 'inverse' ? 'var(--on-ink-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      borderRadius: 2,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      lineHeight: 'var(--lh-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'assets/icons/';

/** Lucide icon rendered as a masked shape so it always inherits currentColor. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    role: "img",
    "aria-hidden": rest['aria-label'] ? undefined : 'true',
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      background: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARK = (ink, coral) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 32 32",
  width: "100%",
  height: "100%",
  "aria-hidden": "true",
  style: {
    display: 'block'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M4.5 6.5 V17 a6.5 6.5 0 0 0 6.5 6.5 h10 a6.5 6.5 0 0 0 6.5-6.5 V6.5",
  fill: "none",
  stroke: ink,
  strokeWidth: "4.5",
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("rect", {
  x: "11",
  y: "12.5",
  width: "10",
  height: "8.5",
  rx: "2.5",
  fill: coral
}));

/** Backed logo. Wordmark is live type (Space Grotesk 700) so it stays crisp at any size. */
function Logo({
  variant = 'horizontal',
  tone = 'default',
  size: sizeProp = 32,
  bar = false,
  style,
  ...rest
}) {
  const size = Number(sizeProp) || 32; // may arrive as a string from an <x-import> literal
  const ink = tone === 'white' ? 'var(--backed-paper)' : tone === 'onAccent' ? 'var(--backed-paper)' : 'var(--backed-ink-800)';
  const coral = tone === 'onAccent' ? 'var(--backed-ink-800)' : tone === 'mono' ? ink : 'var(--backed-coral-500)';
  const mono = tone === 'mono' || tone === 'monoWhite';
  const wordColor = tone === 'monoWhite' ? 'var(--backed-paper)' : ink;
  const dotColor = mono ? wordColor : coral;
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.72,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: wordColor,
      whiteSpace: 'nowrap',
      display: 'inline-block'
    }
  }, "Backed", /*#__PURE__*/React.createElement("span", {
    style: {
      color: dotColor
    }
  }, "."));
  const wordBlock = bar ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: size * 0.13
    }
  }, word, /*#__PURE__*/React.createElement("span", {
    style: {
      height: Math.max(3, size * 0.11),
      borderRadius: 999,
      background: dotColor,
      display: 'block'
    }
  })) : word;
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      flex: '0 0 auto'
    }
  }, MARK(tone === 'monoWhite' ? 'var(--backed-paper)' : ink, mono ? wordColor : coral));
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    ...style
  };
  if (variant === 'mark') return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      ...base,
      width: size,
      height: size
    }
  }), mark);
  if (variant === 'wordmark') return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: base
  }), wordBlock);
  if (variant === 'stacked') return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      ...base,
      flexDirection: 'column',
      gap: size * 0.28,
      alignItems: 'center'
    }
  }), mark, wordBlock);
  if (variant === 'appIcon') return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      ...base,
      width: size,
      height: size,
      borderRadius: size * 0.25,
      background: tone === 'onAccent' ? 'var(--backed-coral-500)' : 'var(--backed-ink-800)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size * 0.62,
      height: size * 0.62
    }
  }, MARK('var(--backed-paper)', tone === 'onAccent' ? 'var(--backed-ink-800)' : 'var(--backed-coral-500)')));
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      ...base,
      gap: size * 0.34
    }
  }), mark, wordBlock);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--bg-inset)',
    fg: 'var(--text-body)',
    bd: 'var(--border-subtle)'
  },
  ink: {
    bg: 'var(--backed-ink-800)',
    fg: 'var(--backed-paper)',
    bd: 'transparent'
  },
  accent: {
    bg: 'var(--accent-faint)',
    fg: 'var(--text-accent)',
    bd: 'var(--accent-soft)'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success)',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: 'var(--warning)',
    bd: 'transparent'
  },
  error: {
    bg: 'var(--error-bg)',
    fg: 'var(--error)',
    bd: 'transparent'
  },
  info: {
    bg: 'var(--info-bg)',
    fg: 'var(--info)',
    bd: 'transparent'
  }
};

/** Status pill. Semantic tones only — never use accent to mean "success". */
function Badge({
  tone = 'neutral',
  size = 'md',
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: sm ? 22 : 26,
      padding: sm ? '0 8px' : '0 10px',
      fontFamily: 'var(--font-body)',
      fontSize: sm ? 11 : 12,
      fontWeight: 700,
      letterSpacing: '0.01em',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 14,
    gap: 6
  },
  md: {
    h: 44,
    px: 22,
    fs: 15,
    gap: 8
  },
  lg: {
    h: 52,
    px: 28,
    fs: 16,
    gap: 10
  }
};

/** Pill button. Primary = coral, secondary = ink, tertiary = ghost, outline = hairline. */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const on = !disabled && !loading;
  const skins = {
    primary: {
      bg: press ? 'var(--accent-press)' : hover ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--on-accent)',
      bd: 'transparent',
      sh: hover && on ? 'var(--shadow-accent)' : 'var(--shadow-xs)'
    },
    secondary: {
      bg: press ? 'var(--backed-ink-600)' : hover ? 'var(--backed-ink-700)' : 'var(--backed-ink-800)',
      fg: 'var(--backed-paper)',
      bd: 'transparent',
      sh: 'var(--shadow-xs)'
    },
    outline: {
      bg: hover ? 'var(--bg-alt)' : 'transparent',
      fg: 'var(--text-strong)',
      bd: hover ? 'var(--border-strong)' : 'var(--border-subtle)',
      sh: 'none'
    },
    tertiary: {
      bg: hover ? 'var(--bg-alt)' : 'transparent',
      fg: 'var(--text-strong)',
      bd: 'transparent',
      sh: 'none'
    },
    accentGhost: {
      bg: hover ? 'var(--accent-soft)' : 'var(--accent-faint)',
      fg: 'var(--text-accent)',
      bd: 'transparent',
      sh: 'none'
    },
    link: {
      bg: 'transparent',
      fg: hover ? 'var(--text-link-hover)' : 'var(--text-link)',
      bd: 'transparent',
      sh: 'none'
    }
  };
  const k = skins[variant] || skins.primary;
  const isLink = variant === 'link';
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled || loading,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: full ? 'flex' : 'inline-flex',
      width: full ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: isLink ? 'auto' : s.h,
      padding: isLink ? 0 : `0 ${s.px}px`,
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 700,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      textDecoration: isLink && hover ? 'underline' : 'none',
      textUnderlineOffset: 3,
      color: k.fg,
      background: k.bg,
      border: `1px solid ${k.bd}`,
      borderRadius: 'var(--radius-pill)',
      boxShadow: k.sh,
      cursor: on ? 'pointer' : 'not-allowed',
      opacity: disabled ? 0.42 : 1,
      transform: press && on && !isLink ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-instant) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.fs,
      height: s.fs,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'backed-spin .7s linear infinite',
      opacity: .9
    }
  }), !loading && iconLeft, children, !loading && iconRight, /*#__PURE__*/React.createElement("style", null, '@keyframes backed-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const PADS = {
  sm: 16,
  md: 24,
  lg: 32
};

/** The Backed surface: hairline border, 16px radius, soft low shadow. */
function Card({
  tone = 'paper',
  pad = 'md',
  interactive = false,
  radius = 'lg',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const tones = {
    paper: {
      bg: 'var(--surface-card)',
      bd: 'var(--border-subtle)',
      fg: 'var(--text-body)'
    },
    warm: {
      bg: 'var(--surface-card-alt)',
      bd: 'var(--border-subtle)',
      fg: 'var(--text-body)'
    },
    ink: {
      bg: 'var(--backed-ink-800)',
      bd: 'var(--on-ink-line)',
      fg: 'var(--on-ink-body)'
    },
    accent: {
      bg: 'var(--accent)',
      bd: 'transparent',
      fg: 'var(--on-accent)'
    },
    outline: {
      bg: 'transparent',
      bd: 'var(--border-subtle)',
      fg: 'var(--text-body)'
    }
  };
  const t = tones[tone] || tones.paper;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      borderRadius: `var(--radius-${radius})`,
      padding: PADS[pad] ?? PADS.md,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : tone === 'outline' ? 'none' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : undefined,
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Docs-style snippet. The developer-credibility surface — always ink, always mono. */
function CodeBlock({
  code = '',
  language = 'bash',
  filename,
  copyable = true,
  style,
  ...rest
}) {
  const [copied, setCopied] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--backed-ink-900)',
      border: '1px solid rgba(247,246,242,.10)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '10px 14px',
      borderBottom: '1px solid rgba(247,246,242,.08)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'rgba(247,246,242,.42)'
    }
  }, filename || language), copyable && /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    },
    style: {
      background: 'transparent',
      border: '1px solid rgba(247,246,242,.14)',
      borderRadius: 'var(--radius-xs)',
      color: copied ? 'var(--backed-coral-500)' : 'rgba(247,246,242,.6)',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 8px',
      cursor: 'pointer',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: '16px 18px',
      overflowX: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      lineHeight: 1.7,
      color: '#E4E3DE'
    }
  }, code));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SZ = {
  sm: 32,
  md: 40,
  lg: 44
};

/** Square-round icon-only control. Always give it an aria-label. */
function IconButton({
  variant = 'tertiary',
  size = 'md',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const d = SZ[size] || SZ.md;
  const skins = {
    primary: {
      bg: hover ? 'var(--accent-hover)' : 'var(--accent)',
      fg: 'var(--on-accent)',
      bd: 'transparent'
    },
    secondary: {
      bg: hover ? 'var(--backed-ink-700)' : 'var(--backed-ink-800)',
      fg: 'var(--backed-paper)',
      bd: 'transparent'
    },
    outline: {
      bg: hover ? 'var(--bg-alt)' : 'transparent',
      fg: 'var(--text-strong)',
      bd: 'var(--border-subtle)'
    },
    tertiary: {
      bg: hover ? 'var(--bg-alt)' : 'transparent',
      fg: 'var(--text-muted)',
      bd: 'transparent'
    }
  };
  const k = skins[variant] || skins.tertiary;
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      color: k.fg,
      background: k.bg,
      border: `1px solid ${k.bd}`,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      padding: 0,
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A single figure with a label. Money and percentages always render tabular. */
function Stat({
  label,
  value,
  prefix,
  suffix,
  note,
  tone = 'default',
  size = 'md',
  style,
  ...rest
}) {
  const S = {
    sm: {
      v: 28,
      l: 12
    },
    md: {
      v: 40,
      l: 13
    },
    lg: {
      v: 60,
      l: 13
    }
  };
  const s = S[size] || S.md;
  const color = tone === 'accent' ? 'var(--text-accent)' : tone === 'inverse' ? 'var(--on-ink)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.v,
      lineHeight: 1.02,
      letterSpacing: '-0.03em',
      color,
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62em',
      fontWeight: 600,
      verticalAlign: '0.22em',
      marginRight: 2,
      opacity: .8
    }
  }, prefix), value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5em',
      fontWeight: 600,
      marginLeft: 3,
      letterSpacing: '0'
    }
  }, suffix)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: s.l,
      fontWeight: 600,
      color: tone === 'inverse' ? 'var(--on-ink-muted)' : 'var(--text-muted)'
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: tone === 'inverse' ? 'var(--on-ink-faint)' : 'var(--text-faint)'
    }
  }, note));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Selectable / removable chip. Used for product filters and insurer classes. */
function Tag({
  selected = false,
  onRemove,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const interactive = !!rest.onClick;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: '0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: selected ? 'var(--backed-paper)' : 'var(--text-body)',
      background: selected ? 'var(--backed-ink-800)' : hover && interactive ? 'var(--bg-inset)' : 'var(--bg-alt)',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), icon, children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      marginRight: -2,
      opacity: .6,
      cursor: 'pointer',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: 'var(--info-bg)',
    fg: 'var(--info)',
    bd: 'transparent'
  },
  success: {
    bg: 'var(--success-bg)',
    fg: 'var(--success)',
    bd: 'transparent'
  },
  warning: {
    bg: 'var(--warning-bg)',
    fg: 'var(--warning)',
    bd: 'transparent'
  },
  error: {
    bg: 'var(--error-bg)',
    fg: 'var(--error)',
    bd: 'transparent'
  },
  neutral: {
    bg: 'var(--bg-alt)',
    fg: 'var(--text-strong)',
    bd: 'var(--border-subtle)'
  }
};

/** Inline message block. Semantic colour only — the brand accent never appears here. */
function Alert({
  tone = 'info',
  title,
  icon,
  action,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: tone === 'error' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      display: 'flex',
      flex: '0 0 auto',
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      color: t.fg
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, children)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, action));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Centred modal on a dimmed ink scrim. 20px radius, generous padding. */
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)'
    }
  }), /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 20,
      lineHeight: 1,
      padding: 2,
      marginTop: -2
    }
  }, "\xD7")), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 4
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ink toast. Backed's transient confirmation — one line, no title, dismisses itself. */
function Toast({
  message,
  tone = 'default',
  icon,
  onDismiss,
  visible = true,
  style,
  ...rest
}) {
  const accent = tone === 'success' ? 'var(--backed-success)' : tone === 'error' ? 'var(--backed-error)' : 'var(--backed-coral-500)';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 14px 12px 16px',
      background: 'var(--backed-ink-800)',
      color: 'var(--backed-paper)',
      border: '1px solid rgba(247,246,242,.12)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: accent,
      flex: '0 0 auto'
    }
  }), icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600
    }
  }, message), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'transparent',
      border: 'none',
      color: 'rgba(247,246,242,.5)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1,
      padding: '0 2px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Hover/focus tooltip. Ink bubble, no arrow, 8px offset. */
function Tooltip({
  content,
  side = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      padding: '6px 10px',
      background: 'var(--backed-ink-800)',
      color: 'var(--backed-paper)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden',
      transition: 'opacity var(--dur-fast) var(--ease-out)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox. Ink when checked — coral is reserved for actions, not selection. */
function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || `cb-${label ? label.replace(/\W+/g, '-').toLowerCase() : 'x'}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: '0 0 auto',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      margin: 0,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${checked ? 'var(--backed-ink-800)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--backed-ink-800)' : 'var(--surface-card)',
      cursor: 'inherit',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  })), checked && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "20",
    height: "20",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 10.5 L8.5 13.5 L14.5 7",
    fill: "none",
    stroke: "var(--backed-paper)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Text field. 12px radius, hairline border, ink focus ring. */
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  size = 'md',
  money = false,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const uid = id || `in-${label ? label.replace(/\W+/g, '-').toLowerCase() : 'field'}`;
  const h = size === 'sm' ? 38 : size === 'lg' ? 52 : 44;
  const border = error ? 'var(--error)' : focus ? 'var(--border-ink)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? `0 0 0 3px ${error ? 'var(--error-bg)' : 'var(--accent-faint)'}` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: uid
  }, rest, {
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 14 : 15,
      fontWeight: 500,
      color: 'var(--text-strong)',
      fontVariantNumeric: money ? 'tabular-nums lining-nums' : undefined,
      ...style
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      lineHeight: 1.45,
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio row. Use RadioGroup-style by rendering several with the same `name`. */
function Radio({
  label,
  description,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const uid = id || `rd-${name || 'g'}-${value || label}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: '0 0 auto',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      margin: 0,
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--backed-ink-800)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      cursor: 'inherit',
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  })), checked && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 6,
      left: 6,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--backed-ink-800)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Native select wrapped to match Input. */
function Select({
  label,
  hint,
  error,
  options = [],
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const uid = id || `sel-${label ? label.replace(/\W+/g, '-').toLowerCase() : 'field'}`;
  const h = size === 'sm' ? 38 : size === 'lg' ? 52 : 44;
  const border = error ? 'var(--error)' : focus ? 'var(--border-ink)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid
  }, rest, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 38px 0 14px',
      background: 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 14 : 15,
      fontWeight: 500,
      color: 'var(--text-strong)',
      outline: 'none',
      cursor: 'pointer',
      boxShadow: focus ? '0 0 0 3px var(--accent-faint)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      width: 0,
      height: 0,
      borderLeft: '4.5px solid transparent',
      borderRight: '4.5px solid transparent',
      borderTop: '5px solid var(--text-muted)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle for live/sandbox and feature flags. Coral when on — this one is an action. */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  size = 'md',
  id,
  style,
  ...rest
}) {
  const uid = id || `sw-${label ? label.replace(/\W+/g, '-').toLowerCase() : 'x'}`;
  const wpx = size === 'sm' ? 36 : 44;
  const hpx = size === 'sm' ? 20 : 26;
  const knob = hpx - 6;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: wpx,
      height: hpx,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      margin: 0,
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--border-strong)',
      cursor: 'inherit',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? wpx - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: 'var(--backed-paper)',
      boxShadow: '0 1px 2px rgba(20,22,26,.24)',
      pointerEvents: 'none',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Underline tab bar. The coral rule is the foundation-bar device at small scale. */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const [internal, setInternal] = useState(items[0]?.value);
  const active = value !== undefined ? value : internal;
  const set = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: pill ? 4 : 26,
      alignItems: 'center',
      padding: pill ? 4 : 0,
      background: pill ? 'var(--bg-inset)' : 'transparent',
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      borderBottom: pill ? 'none' : '1px solid var(--border-subtle)',
      ...style
    }
  }), items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => set(it.value),
      style: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        background: pill ? on ? 'var(--surface-card)' : 'transparent' : 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: pill ? '7px 14px' : '0 0 13px',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 700,
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)'
      }
    }, it.icon, it.label, it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: '1px 6px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--bg-inset)',
        color: 'var(--text-muted)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, it.count), !pill && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: on ? 'var(--accent)' : 'transparent',
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Disclosure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The approved regulatory wordings. Edit these in one place, never inline at the call site. */
const DISCLOSURES = {
  short: 'Backed is not an insurer. Backed is an insurance broker licensed by the National Insurance Commission (NAICOM); every policy is underwritten and issued by a NAICOM-licensed insurance company.',
  footer: 'Backed is an insurance broker licensed by the National Insurance Commission (NAICOM), licence no. {licence}. Backed is not an insurer and does not underwrite, carry or bear insurance risk. Acting as your broker, Backed arranges cover on your behalf with insurance companies licensed by NAICOM, and the contract of insurance is between you and that insurer. Premium you pay is received by Backed in its capacity as your broker, held in a designated clients’ account separate from Backed’s own funds, and remitted to the underwriting insurer within the period required by the Nigerian Insurance Industry Reform Act 2025. Claims are assessed, approved and paid by the underwriting insurer; as your broker, Backed will help you file and pursue a claim. Backed maintains professional indemnity cover as required by NAICOM.',
  quote: 'This cover is underwritten by {insurer}, licensed by NAICOM. Your contract of insurance is with {insurer}. Backed acts as your insurance broker in arranging it, and is paid a commission by {insurer}. {insurer}’s policy wording, terms, conditions and exclusions apply — read them before you buy.',
  remuneration: 'Backed is remunerated by commission paid by the underwriting insurer out of the premium. You pay no separate fee to Backed unless that fee is disclosed to you before you buy.',
  distributor: 'Backed does not sell insurance to policyholders. Backed is the licensed insurance broker of record for every policy placed through the rail. As a distributor you introduce your customers to cover that Backed arranges; you do not underwrite it, and you must not advise on it, recommend a particular product, or describe it as your own. At the point of sale your customer must be shown the underwriting insurer and Backed’s role as broker.',
  claims: 'Claims are assessed, approved and paid by the underwriting insurer. As your broker, Backed will help you file and pursue the claim and will hold the insurer to the settlement timelines set out in the Nigerian Insurance Industry Reform Act 2025. If your claim or complaint is not resolved, you may escalate it to the NAICOM Complaints Bureau at complaints@naicom.gov.ng.',
  premium: 'Premium is received by Backed in its capacity as your insurance broker, held in a designated clients’ account separate from Backed’s own funds, and remitted to the underwriting insurer within the period required by the Nigerian Insurance Industry Reform Act 2025.'
};

/**
 * The regulatory disclosure block. Backed's compliance position is a brand asset, not
 * small print to hide, so it is a real component with approved wordings baked in.
 *
 * Fails loudly rather than substituting: an unknown variant renders NOTHING. Silently showing
 * a different legal statement under the wrong heading is worse than showing none at all.
 */
function Disclosure({
  variant = 'footer',
  insurer,
  licence,
  text,
  tone = 'default',
  icon,
  style,
  ...rest
}) {
  const source = text || DISCLOSURES[variant];
  if (!source) {
    console.error('<Disclosure variant="' + variant + '"> is not an approved wording, so nothing was rendered. ' + 'Legal copy is never substituted. Approved variants: ' + Object.keys(DISCLOSURES).join(', ') + '.');
    return null;
  }
  if (variant === 'footer' && !licence && !text) {
    console.error('<Disclosure variant="footer"> is missing the `licence` prop. Pass the real NAICOM broker licence number before this ships.');
  }
  const body = source.replace(/\{insurer\}/g, insurer || 'the underwriting insurer').replace(/\{licence\}/g, licence || '[LICENCE NUMBER REQUIRED]');
  const inverse = tone === 'inverse';
  const inline = variant === 'quote' || variant === 'short' || variant === 'remuneration';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: inline ? '10px 12px' : '16px 18px',
      background: inverse ? 'rgba(247,246,242,.05)' : 'var(--bg-alt)',
      border: `1px solid ${inverse ? 'var(--on-ink-line)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      marginTop: 1,
      color: inverse ? 'var(--on-ink-faint)' : 'var(--text-faint)'
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: inline ? 12 : 12.5,
      lineHeight: 1.6,
      fontWeight: 500,
      color: inverse ? 'var(--on-ink-muted)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, body));
}
Object.assign(__ds_scope, { DISCLOSURES, Disclosure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Disclosure.jsx", error: String((e && e.message) || e) }); }

// components/patterns/FeatureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon-plus-copy block used across marketing sections. Icon sits in a tinted square. */
function FeatureRow({
  icon,
  title,
  children,
  tone = 'default',
  layout = 'stack',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: layout === 'row' ? 'row' : 'column',
      gap: layout === 'row' ? 14 : 14,
      alignItems: layout === 'row' ? 'flex-start' : 'stretch',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: inverse ? 'rgba(255,90,54,.16)' : 'var(--accent-faint)',
      color: inverse ? 'var(--backed-coral-500)' : 'var(--text-accent)',
      border: `1px solid ${inverse ? 'rgba(255,90,54,.22)' : 'var(--accent-soft)'}`
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h4)',
      lineHeight: 'var(--lh-h4)',
      letterSpacing: 'var(--ls-h4)',
      fontWeight: 700,
      color: inverse ? 'var(--on-ink)' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.62,
      color: inverse ? 'var(--on-ink-muted)' : 'var(--text-muted)'
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/InsurerWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const BASE = 'assets/insurers/';
const INSURERS = [{
  name: 'NEM Insurance Plc',
  short: 'NEM',
  logo: 'nem-insurance.jpg'
}, {
  name: 'Heirs Insurance Group',
  short: 'Heirs Insurance',
  logo: 'heirs-insurance-group.png'
}, {
  name: 'Leadway Assurance',
  short: 'Leadway',
  logo: 'leadway-assurance.webp'
}, {
  name: 'Consolidated Hallmark Insurance',
  short: 'Consolidated Hallmark',
  logo: 'consolidated-hallmark.png'
}, {
  name: 'Capital Express Indemnity',
  short: 'Capital Express',
  logo: 'capital-express-indemnity.png'
}, {
  name: 'SUNU Assurances Nigeria',
  short: 'SUNU Assurances',
  logo: 'sunu-assurances.jpg'
}, {
  name: 'Noor Takaful',
  short: 'Noor Takaful',
  logo: 'noor-takaful.svg'
}, {
  name: 'Mutual Benefits Assurance',
  short: 'Mutual Benefits',
  logo: null
}, {
  name: 'Sovereign Trust Insurance',
  short: 'Sovereign Trust',
  logo: null
}, {
  name: 'Zenith General Insurance',
  short: 'Zenith General',
  logo: null
}];

/**
 * Optical normalisation. Partner logos arrive at wildly different aspect ratios —
 * a portrait stacked lockup at 0.79 next to a hairline wordmark at 9.5 — so matching
 * their heights or their widths both look broken. Instead every mark is rendered at a
 * constant optical AREA, then clamped, which is how a real logo wall is set.
 */
function opticalHeight(ratio, area, minH, maxH, boxW) {
  if (!ratio || !isFinite(ratio)) return minH;
  let h = Math.sqrt(area / ratio);
  h = Math.min(maxH, Math.max(minH, h));
  if (h * ratio > boxW) h = boxW / ratio; // never overflow the tile
  return h;
}
function LogoTile({
  insurer,
  assetBase,
  tileHeight,
  area,
  minH,
  maxH,
  inverse
}) {
  const [ratio, setRatio] = useState(null);
  const [failed, setFailed] = useState(false);
  const boxW = 999; // real cap comes from maxWidth:100% below
  const h = opticalHeight(ratio, area, minH, maxH, boxW);
  const showType = !insurer.logo || failed;
  return /*#__PURE__*/React.createElement("div", {
    title: insurer.name,
    style: {
      height: tileHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      background: 'var(--backed-paper)',
      border: `1px solid ${inverse ? 'var(--on-ink-line)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, showType ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--backed-ink-800)',
      textAlign: 'center',
      lineHeight: 1.2,
      textWrap: 'balance'
    }
  }, insurer.short) : /*#__PURE__*/React.createElement("img", {
    src: assetBase + insurer.logo,
    alt: insurer.name,
    onLoad: e => {
      const w = e.target.naturalWidth,
        nh = e.target.naturalHeight;
      if (w && nh) setRatio(w / nh);else setFailed(true);
    },
    onError: () => setFailed(true),
    style: {
      height: h,
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
      display: 'block',
      opacity: ratio ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }));
}

/**
 * The insurers-on-the-rail wall. Every logo sits on its own paper tile so third-party
 * marks keep their own background and the wall works on paper, warm and ink alike.
 */
function InsurerWall({
  insurers = INSURERS,
  assetBase = BASE,
  columns = 4,
  tileHeight = 92,
  area = 1100,
  minLogoHeight = 22,
  maxLogoHeight = 40,
  label = 'Underwritten by NAICOM-licensed insurers',
  tone = 'default',
  style,
  ...rest
}) {
  // Numbers may arrive as strings (e.g. from an <x-import> literal attribute).
  const cols = Number(columns) || 4;
  const th = Number(tileHeight) || 92;
  const a = Number(area) || 1100;
  const minH = Number(minLogoHeight) || 22;
  const maxH = Number(maxLogoHeight) || 40;
  const list = Array.isArray(insurers) ? insurers : INSURERS;
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      ...style
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      borderRadius: 2,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: inverse ? 'var(--on-ink-muted)' : 'var(--text-muted)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols},minmax(0,1fr))`,
      gap: 12
    }
  }, list.map(i => /*#__PURE__*/React.createElement(LogoTile, {
    key: i.name,
    insurer: i,
    assetBase: assetBase,
    tileHeight: th,
    area: a,
    minH: minH,
    maxH: maxH,
    inverse: inverse
  }))));
}
Object.assign(__ds_scope, { INSURERS, InsurerWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/InsurerWall.jsx", error: String((e && e.message) || e) }); }

// components/patterns/PolicyRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const TONE = {
  issued: {
    bg: 'var(--success-bg)',
    fg: 'var(--success)'
  },
  pending: {
    bg: 'var(--warning-bg)',
    fg: 'var(--warning)'
  },
  lapsed: {
    bg: 'var(--bg-inset)',
    fg: 'var(--text-muted)'
  },
  claimed: {
    bg: 'var(--info-bg)',
    fg: 'var(--info)'
  }
};

/** One line in a policy ledger. Money columns are tabular so they align down the table. */
function PolicyRow({
  id,
  customer,
  product,
  premium,
  commission,
  status = 'issued',
  date,
  currency = '₦',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const t = TONE[status] || TONE.issued;
  const num = v => currency + v.toLocaleString('en-NG', {
    maximumFractionDigits: 0
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '112px 1.4fr 1fr 96px 104px 92px',
      alignItems: 'center',
      gap: 16,
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-subtle)',
      background: hover && onClick ? 'var(--bg-alt)' : 'transparent',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, id), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, customer), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, product), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-body)',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, num(premium)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-accent)',
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, num(commission)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 22,
      padding: '0 8px',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'capitalize',
      borderRadius: 'var(--radius-pill)',
      background: t.bg,
      color: t.fg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), status)), date && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'none'
    }
  }, date));
}
Object.assign(__ds_scope, { PolicyRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/PolicyRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/QuoteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const money = n => (Number(n) || 0).toLocaleString('en-NG', {
  maximumFractionDigits: 0
});
// <x-import> literal attributes arrive as strings; keep numeric widths usable as CSS.
const px = v => typeof v === 'number' ? v : /^\d+(\.\d+)?$/.test(String(v)) ? Number(v) : v;

/**
 * Backed's signature brand moment: a live quote, the premium, the distributor's
 * commission in coral, and one button that issues the policy.
 */
function QuoteCard({
  product = 'Device cover',
  insurer = 'Leadway Assurance',
  insuredLabel = 'Insured value',
  insuredValue = 250000,
  premium = 4200,
  commission = 1850,
  term = 'per month',
  currency = '₦',
  policyId = 'BK-40219',
  state,
  onIssue,
  width,
  style,
  ...rest
}) {
  const [internal, setInternal] = useState('quote');
  const phase = state || internal;
  const issued = phase === 'issued';
  const issuing = phase === 'issuing';
  const issue = () => {
    if (onIssue) return onIssue();
    setInternal('issuing');
    setTimeout(() => setInternal('issued'), 620);
  };
  const row = (label, value, opts = {}) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 16,
      padding: '11px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 600,
      color: opts.accent ? 'var(--text-accent)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: opts.big ? 26 : 16,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      color: opts.accent ? 'var(--text-accent)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, value));
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width: px(width) || 380,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-md)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, product), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, "Underwritten by ", insurer)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 9px',
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 700,
      borderRadius: 'var(--radius-pill)',
      background: issued ? 'var(--success-bg)' : 'var(--bg-inset)',
      color: issued ? 'var(--success)' : 'var(--text-muted)',
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), issued ? 'Issued' : 'Quote')), row(insuredLabel, currency + money(insuredValue)), row('Premium ' + term, currency + money(premium)), row('Your commission', currency + money(commission), {
    accent: true,
    big: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      marginTop: 12,
      paddingTop: 16
    }
  }, issued ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      animation: 'backed-issued var(--dur-issue) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--success-bg)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 20 20",
    width: "18",
    height: "18",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 10.4 L8.3 13.7 L15 6.8",
    fill: "none",
    stroke: "var(--success)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      strokeDasharray: 22,
      strokeDashoffset: 0,
      animation: 'backed-tick var(--dur-issue) var(--ease-out)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Policy issued"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, policyId))) : /*#__PURE__*/React.createElement("button", {
    onClick: issue,
    disabled: issuing,
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: 48,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--on-accent)',
      background: 'var(--accent)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: issuing ? 'wait' : 'pointer',
      opacity: issuing ? 0.72 : 1,
      boxShadow: 'var(--shadow-accent)',
      transition: 'opacity var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)'
    }
  }, issuing && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'backed-spin .7s linear infinite'
    }
  }), issuing ? 'Issuing…' : 'Issue policy')), /*#__PURE__*/React.createElement("style", null, '@keyframes backed-spin{to{transform:rotate(360deg)}}@keyframes backed-tick{from{stroke-dashoffset:22}to{stroke-dashoffset:0}}@keyframes backed-issued{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}'));
}
Object.assign(__ds_scope, { QuoteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/QuoteCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + display heading + lead paragraph, with the alignment rules baked in. */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'default',
  size = 'md',
  action,
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  const S = {
    sm: {
      t: 'var(--fs-h2)',
      lh: 'var(--lh-h2)',
      ls: 'var(--ls-h2)'
    },
    md: {
      t: 'var(--fs-display-m)',
      lh: 'var(--lh-display-m)',
      ls: 'var(--ls-display-m)'
    },
    lg: {
      t: 'var(--fs-display-l)',
      lh: 'var(--lh-display-l)',
      ls: 'var(--ls-display-l)'
    }
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      maxWidth: align === 'center' ? 720 : 640,
      ...style
    }
  }), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      borderRadius: 2,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: inverse ? 'var(--on-ink-muted)' : 'var(--text-muted)'
    }
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: S.t,
      lineHeight: S.lh,
      letterSpacing: S.ls,
      fontWeight: 700,
      margin: 0,
      color: inverse ? 'var(--on-ink)' : 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-l)',
      lineHeight: 'var(--lh-body-l)',
      margin: 0,
      color: inverse ? 'var(--on-ink-muted)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, lead), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 10
    }
  }, action));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleShell.jsx
try { (() => {
const {
  Logo,
  Icon,
  Switch,
  Badge
} = window.BackedDesignSystem_3d5478;
const NAV = [['home', 'Overview', 'overview'], ['file-text', 'Policies', 'policies'], ['zap', 'New quote', 'quote'], ['banknote', 'Settlements', 'settlements'], ['package', 'Products', 'products'], ['code', 'API keys', 'keys']];
function ConsoleShell({
  view,
  onNavigate,
  live,
  onToggleLive,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '244px 1fr',
      minHeight: '100vh',
      background: 'var(--bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--backed-ink-900)',
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px',
      gap: 26,
      position: 'sticky',
      top: 0,
      height: '100vh',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    size: 24,
    tone: "white"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(([icon, label, key]) => {
    const on = view === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onNavigate(key),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '10px 10px',
        border: 'none',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        textAlign: 'left',
        background: on ? 'rgba(255,90,54,.14)' : 'transparent',
        color: on ? '#FF7A5C' : 'rgba(247,246,242,.62)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: on ? 700 : 600,
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 17
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    checked: live,
    onChange: onToggleLive
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'rgba(247,246,242,.82)'
    }
  }, live ? 'Live mode' : 'Sandbox')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      paddingTop: 14,
      borderTop: '1px solid rgba(247,246,242,.10)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: '#2A2E35',
      color: '#F7F6F2',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 700
    }
  }, "KB"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 700,
      color: '#F7F6F2'
    }
  }, "Kuda Bank"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'rgba(247,246,242,.44)'
    }
  }, "mch_8Zq1vT"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, children));
}
function ConsoleHeader({
  title,
  subtitle,
  live,
  action
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--bg-page)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '22px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-h3)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 700,
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), !live && /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    size: "sm"
  }, "Sandbox")), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, subtitle)), action);
}
Object.assign(window, {
  ConsoleShell,
  ConsoleHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/NewQuote.jsx
try { (() => {
const {
  Card,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  QuoteCard,
  Icon,
  Dialog,
  Eyebrow,
  Disclosure
} = window.BackedDesignSystem_3d5478;
function NewQuote({
  onIssued
}) {
  const [value, setValue] = React.useState(250000);
  const [tenor, setTenor] = React.useState('monthly');
  const [consent, setConsent] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [phase, setPhase] = React.useState('quote');
  const premium = tenor === 'monthly' ? Math.round(value * 0.0168) : Math.round(value * 0.168);
  const commission = Math.round(premium * 0.44);
  const doIssue = () => {
    setConfirm(false);
    setPhase('issuing');
    setTimeout(() => {
      setPhase('issued');
      onIssued && onIssued();
    }, 620);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 400px',
      gap: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Step 1 \xB7 Price it"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Product",
    options: [{
      value: 'device',
      label: 'Device cover — Leadway Assurance'
    }, {
      value: 'health',
      label: 'Health basic — Hygeia HMO'
    }, {
      value: 'credit',
      label: 'Credit life — AIICO'
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Insured value",
    prefix: "\u20A6",
    money: true,
    value: value.toLocaleString('en-NG'),
    onChange: e => setValue(Number(e.target.value.replace(/\D/g, '')) || 0),
    hint: "What the device is worth today"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Customer name",
    defaultValue: "Amara Nwosu"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Customer phone",
    prefix: "+234",
    money: true,
    defaultValue: "803 411 9022"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Payment"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "tenor",
    value: "monthly",
    label: "Monthly",
    checked: tenor === 'monthly',
    onChange: setTenor
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "tenor",
    value: "annual",
    label: "Annual",
    description: "Two months free",
    checked: tenor === 'annual',
    onChange: setTenor
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingTop: 20,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "The customer consented to this cover",
    description: "Required before a policy can be issued",
    checked: consent,
    onChange: setConsent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: !consent || phase !== 'quote',
    onClick: () => setConfirm(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Review and issue"), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary"
  }, "Save as draft")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      position: 'sticky',
      top: 28
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    width: "100%",
    state: phase,
    insuredValue: value,
    premium: premium,
    commission: commission,
    term: tenor === 'monthly' ? 'per month' : 'per year',
    onIssue: () => setConfirm(true)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      paddingLeft: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh-cw",
    size: 13
  }), " Repriced live as you type"), /*#__PURE__*/React.createElement(Disclosure, {
    variant: "quote",
    insurer: "Leadway Assurance",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 14
    })
  }), /*#__PURE__*/React.createElement(Disclosure, {
    variant: "remuneration"
  })), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    title: "Issue this policy?",
    description: `The customer is charged ₦${premium.toLocaleString('en-NG')} ${tenor === 'monthly' ? 'per month' : 'per year'} immediately. You earn ₦${commission.toLocaleString('en-NG')}.`,
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: doIssue
    }, "Issue policy"))
  }));
}
Object.assign(window, {
  NewQuote
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/NewQuote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Overview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  Stat,
  Icon,
  Button,
  Tabs,
  PolicyRow,
  Alert,
  Badge
} = window.BackedDesignSystem_3d5478;
function Overview({
  live,
  onNewQuote,
  rows
}) {
  const [range, setRange] = React.useState('30');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, !live && /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "You are in sandbox",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "triangle-alert",
      size: 18
    }),
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline"
    }, "Go live")
  }, "Policies issued here are not real and commission is not settled."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: range,
    onChange: setRange,
    items: [{
      value: '7',
      label: '7 days'
    }, {
      value: '30',
      label: '30 days'
    }, {
      value: '90',
      label: '90 days'
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })
  }, "Export")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "1,284",
    label: "Policies issued",
    note: "+18% vs previous 30 days"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(Stat, {
    prefix: "\u20A6",
    value: "8.7",
    suffix: "m",
    label: "Premium collected",
    note: "Gross written"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "md",
    style: {
      borderColor: 'var(--accent-soft)',
      background: 'var(--accent-faint)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "accent",
    prefix: "\u20A6",
    value: "2.41",
    suffix: "m",
    label: "Your commission",
    note: "Settles Friday, 31 Jul"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: "md"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "6.2",
    suffix: "%",
    label: "Attach rate",
    note: "Of eligible checkouts"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.55fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "sm",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, "Recent policies"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm"
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '112px 1.4fr 1fr 96px 104px 92px',
      gap: 16,
      padding: '9px 20px',
      background: 'var(--bg-alt)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, ['Policy', 'Customer', 'Product', 'Premium', 'Commission', 'Status'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      textAlign: i > 2 ? 'right' : 'left'
    }
  }, h))), rows.map(r => /*#__PURE__*/React.createElement(PolicyRow, _extends({
    key: r.id
  }, r, {
    onClick: () => {}
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, "Issue a policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, "Price a product and issue in the same session. Your commission is shown before you sell."), /*#__PURE__*/React.createElement(Button, {
    full: true,
    onClick: onNewQuote,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "New quote")), /*#__PURE__*/React.createElement(Card, {
    pad: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, "Live products"), [['Device cover', 'Leadway Assurance', '₦1,850'], ['Health · basic', 'Hygeia HMO', '₦9,500'], ['Credit life', 'AIICO', '₦620']].map(([n, i, c]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, i)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--text-accent)',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, c)))))));
}
Object.assign(window, {
  Overview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Policies.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Card,
  Tabs,
  Tag,
  Button,
  Icon,
  Input,
  PolicyRow,
  Badge
} = window.BackedDesignSystem_3d5478;
function Policies({
  rows
}) {
  const [tab, setTab] = React.useState('all');
  const [product, setProduct] = React.useState('all');
  const filtered = rows.filter(r => (tab === 'all' || r.status === tab) && (product === 'all' || r.product.toLowerCase().includes(product)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'all',
      label: 'All',
      count: rows.length
    }, {
      value: 'issued',
      label: 'Issued'
    }, {
      value: 'pending',
      label: 'Pending'
    }, {
      value: 'claimed',
      label: 'Claimed'
    }, {
      value: 'lapsed',
      label: 'Lapsed'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search policy id or customer",
    size: "sm",
    containerStyle: {
      width: 280
    }
  }), [['all', 'All products'], ['device', 'Device'], ['health', 'Health'], ['credit', 'Credit life']].map(([k, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    selected: product === k,
    onClick: () => setProduct(k)
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })
  }, "Export CSV"))), /*#__PURE__*/React.createElement(Card, {
    pad: "sm",
    style: {
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '112px 1.4fr 1fr 96px 104px 92px',
      gap: 16,
      padding: '10px 20px',
      background: 'var(--bg-alt)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, ['Policy', 'Customer', 'Product', 'Premium', 'Commission', 'Status'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      textAlign: i > 2 ? 'right' : 'left'
    }
  }, h))), filtered.map(r => /*#__PURE__*/React.createElement(PolicyRow, _extends({
    key: r.id
  }, r, {
    onClick: () => {}
  }))), !filtered.length && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Nothing here yet"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, "No policies match that filter.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 20px',
      background: 'var(--bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "Showing ", filtered.length, " of ", rows.length), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    disabled: true
  }, "Previous"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline"
  }, "Next")))));
}
Object.assign(window, {
  Policies
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Policies.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DarkSections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  Stat,
  Card,
  Icon,
  Button,
  Logo,
  FeatureRow,
  Disclosure
} = window.BackedDesignSystem_3d5478;
function TwoSidedSection() {
  return /*#__PURE__*/React.createElement("section", {
    "data-theme": "dark",
    style: {
      background: 'var(--backed-ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '104px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    align: "center",
    eyebrow: "Two sides, one rail",
    title: "Distributors get revenue. Insurers get reach.",
    lead: "Backed sits between the businesses your customers already use and the carriers licensed to take the risk.",
    style: {
      margin: '0 auto 60px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, [['users', 'For distributors', 'Sell cover inside the flow your customer is already in — a checkout, a loan, a top-up.', [{
    to: 1284,
    label: 'policies / month'
  }, {
    to: 2.4,
    prefix: '₦',
    suffix: 'm',
    decimals: 1,
    label: 'commission earned'
  }]], ['building-2', 'For insurers', 'Reach millions of customers through channels you could never build a branch network for.', [{
    to: 38,
    label: 'live distributors'
  }, {
    to: 4,
    suffix: 'days',
    label: 'to launch a product'
  }]]].map(([icon, title, body, stats]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    tone: "ink",
    pad: "lg",
    style: {
      background: 'var(--surface-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    tone: "inverse",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    }),
    title: title
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 44,
      paddingTop: 24,
      borderTop: '1px solid var(--on-ink-line)'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(CountUpStat, _extends({
    key: s.label
  }, s)))))))));
}
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-m)',
      lineHeight: 'var(--lh-display-m)',
      letterSpacing: 'var(--ls-display-m)',
      color: 'var(--backed-paper)',
      margin: 0
    }
  }, "Start selling this week."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,.86)',
      margin: 0
    }
  }, "Sandbox keys are instant. No contract until your first live policy.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Get API keys"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "tertiary",
    style: {
      color: 'var(--backed-paper)',
      border: '1px solid rgba(255,255,255,.4)'
    }
  }, "Book a call"))));
}
function SiteFooter() {
  const cols = [['Products', ['Device cover', 'Health', 'Credit life', 'Travel', 'Motor']], ['Platform', ['Docs', 'API reference', 'Sandbox', 'Status', 'Changelog']], ['Company', ['About', 'Insurer partners', 'Careers', 'Press', 'Contact']], ['Legal', ['Terms', 'Privacy', 'Licensing', 'Complaints']]];
  return /*#__PURE__*/React.createElement("footer", {
    "data-theme": "dark",
    style: {
      background: 'var(--backed-ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px 40px',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    size: 34,
    bar: true,
    tone: "white"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--on-ink-muted)',
      margin: 0,
      maxWidth: 260
    }
  }, "The insurance distribution rail for Africa.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--on-ink-faint)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--on-ink-muted)',
      textDecoration: 'none'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px 28px'
    }
  }, /*#__PURE__*/React.createElement(Disclosure, {
    variant: "footer",
    tone: "inverse",
    licence: "NAICOM/BRK/2026/0141"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '22px 32px 40px',
      borderTop: '1px solid var(--on-ink-line)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--on-ink-muted)'
    }
  }, "\xA9 2026 Backed. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--on-ink-faint)'
    }
  }, "backed.insure")));
}
Object.assign(window, {
  TwoSidedSection,
  CtaBand,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DarkSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Icon,
  QuoteCard,
  Eyebrow,
  InsurerWall,
  INSURERS,
  Disclosure,
  Tag
} = window.BackedDesignSystem_3d5478;
const PRODUCTS = [{
  key: 'device',
  label: 'Device cover',
  insurer: 'Leadway Assurance',
  insuredLabel: 'Insured value',
  value: 250000,
  rate: 0.0168,
  cut: 0.44,
  term: 'per month'
}, {
  key: 'health',
  label: 'Health',
  insurer: 'Heirs Insurance Group',
  insuredLabel: 'Annual cover limit',
  value: 1500000,
  rate: 0.0253,
  cut: 0.25,
  term: 'per month'
}, {
  key: 'credit',
  label: 'Credit life',
  insurer: 'NEM Insurance Plc',
  insuredLabel: 'Loan value',
  value: 120000,
  rate: 0.0175,
  cut: 0.30,
  term: 'per month'
}];

/** Cursor-tracked 3D tilt. Small range, damped by a CSS transition — no spring, no overshoot. */
function TiltStage({
  children,
  max = 7
}) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({
    x: 0,
    y: 0,
    on: false
  });
  const reduce = React.useRef(false);
  React.useEffect(() => {
    reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);
  const move = e => {
    if (reduce.current) return;
    const r = ref.current.getBoundingClientRect();
    setT({
      x: ((e.clientY - r.top) / r.height - 0.5) * -2 * max,
      y: ((e.clientX - r.left) / r.width - 0.5) * 2 * max,
      on: true
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onPointerMove: move,
    onPointerLeave: () => setT({
      x: 0,
      y: 0,
      on: false
    }),
    style: {
      perspective: 1400,
      perspectiveOrigin: '50% 40%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: `rotateX(${t.x}deg) rotateY(${t.y}deg)`,
      transformStyle: 'preserve-3d',
      transition: `transform ${t.on ? 'var(--dur-base)' : 'var(--dur-slow)'} var(--ease-out)`
    }
  }, children));
}

/** The foundation device at hero scale: the quote card visibly resting on layers beneath it. */
function BackedStack({
  product
}) {
  const layer = (i, bg, bd) => /*#__PURE__*/React.createElement("div", {
    key: i,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: i * 10,
      right: i * 10,
      top: i * 13,
      height: 190,
      background: bg,
      border: `1px solid ${bd}`,
      borderRadius: 'var(--radius-2xl)',
      transform: `translateZ(${-40 * i}px)`,
      boxShadow: 'var(--shadow-sm)'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 392,
      transformStyle: 'preserve-3d'
    }
  }, layer(2, 'var(--bg-inset)', 'var(--border-subtle)'), layer(1, 'var(--bg-alt)', 'var(--border-subtle)'), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      transformStyle: 'preserve-3d',
      transform: 'translateZ(28px)'
    }
  }, /*#__PURE__*/React.createElement(QuoteCard, {
    key: product.key,
    width: 392,
    product: product.label,
    insurer: product.insurer,
    insuredLabel: product.insuredLabel,
    insuredValue: product.value,
    premium: Math.round(product.value * product.rate),
    commission: Math.round(product.value * product.rate * product.cut),
    term: product.term
  })));
}
function Hero() {
  const [p, setP] = React.useState(PRODUCTS[0]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '88px 32px 104px',
      display: 'grid',
      gridTemplateColumns: '1.02fr 0.98fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "The insurance distribution rail"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-xl)',
      lineHeight: 'var(--lh-display-xl)',
      letterSpacing: 'var(--ls-display-xl)',
      color: 'var(--text-strong)',
      margin: '22px 0 0',
      maxWidth: 600
    }
  }, "Sell insurance", /*#__PURE__*/React.createElement("br", null), "like airtime."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 6,
      borderRadius: 6,
      background: 'var(--accent)',
      margin: '26px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-l)',
      lineHeight: 'var(--lh-body-l)',
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 520
    }
  }, "One API lets any digital business in Africa sell cover from real, licensed insurers \u2014 and earn a commission on every policy. You keep the customer. We handle the carrier."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 34,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Get API keys"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "Talk to us")), /*#__PURE__*/React.createElement(InsurerWall, {
    style: {
      marginTop: 44,
      width: '100%',
      maxWidth: 520
    },
    columns: 4,
    tileHeight: 66,
    area: 620,
    minLogoHeight: 16,
    maxLogoHeight: 30,
    insurers: (INSURERS || []).slice(0, 4),
    assetBase: "../../assets/insurers/",
    label: "Underwritten by NAICOM-licensed insurers"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-end',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -56,
      right: -72,
      bottom: -56,
      left: -24,
      background: 'var(--bg-alt)',
      borderRadius: 'var(--radius-2xl)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 8,
      alignSelf: 'flex-start'
    }
  }, PRODUCTS.map(x => /*#__PURE__*/React.createElement(Tag, {
    key: x.key,
    selected: x.key === p.key,
    onClick: () => setP(x)
  }, x.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(TiltStage, null, /*#__PURE__*/React.createElement(BackedStack, {
    product: p
  }))), /*#__PURE__*/React.createElement(Disclosure, {
    variant: "quote",
    insurer: p.insurer,
    style: {
      width: 392,
      position: 'relative'
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 14
    })
  }))));
}
Object.assign(window, {
  Hero,
  TiltStage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RailSection.jsx
try { (() => {
const {
  Eyebrow,
  Stat,
  Icon
} = window.BackedDesignSystem_3d5478;
const STEPS = [['Distributors', 'Banks, fintechs, lenders and mobility platforms — the businesses your customers already open every day.'], ['The rail', 'One API. Quote, issue, settle. Backed is broker of record on every policy that moves along it.'], ['Insurers', 'NAICOM-licensed carriers who price the risk, write the paper and pay the claim.']];

/** The 3D rail. Backed's core metaphor, built rather than described. */
function RailSection() {
  const host = React.useRef(null);
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    let dispose;
    let cancelled = false;
    const start = () => {
      if (cancelled || !host.current) return true;
      if (!window.BackedRail) return false;
      try {
        dispose = window.BackedRail.mount(host.current);
      } catch (e) {
        console.error(e);
        setFailed(true);
      }
      return true;
    };
    if (!start()) {
      const onReady = () => start();
      window.addEventListener('backed-rail-ready', onReady, {
        once: true
      });
      // If WebGL or the module never arrives, fall back rather than showing a hole.
      const t = setTimeout(() => {
        if (!window.BackedRail) setFailed(true);
      }, 4000);
      return () => {
        cancelled = true;
        clearTimeout(t);
        window.removeEventListener('backed-rail-ready', onReady);
        if (dispose) dispose();
      };
    }
    return () => {
      cancelled = true;
      if (dispose) dispose();
    };
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    "data-theme": "dark",
    style: {
      background: 'var(--backed-ink-900)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse",
    rule: true
  }, "How it moves"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-display-m)',
      lineHeight: 'var(--lh-display-m)',
      letterSpacing: 'var(--ls-display-m)',
      color: 'var(--on-ink)',
      margin: 0,
      maxWidth: 680
    }
  }, "A rail, not a marketplace."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-l)',
      lineHeight: 'var(--lh-body-l)',
      color: 'var(--on-ink-muted)',
      margin: 0,
      maxWidth: 600,
      textWrap: 'pretty'
    }
  }, "Policies travel one way: from the businesses your customers already use, along the rail, to the carrier that writes them. Drag your cursor across it.")), /*#__PURE__*/React.createElement("div", {
    ref: host,
    "aria-hidden": "true",
    style: {
      position: 'relative',
      height: 340,
      marginTop: 12,
      cursor: 'grab',
      display: failed ? 'none' : 'block'
    }
  }), failed && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      marginTop: 32,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '72%',
      height: 10,
      borderRadius: 999,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '84%',
      height: 10,
      borderRadius: 999,
      background: 'var(--backed-ink-600)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '96%',
      height: 10,
      borderRadius: 999,
      background: 'var(--backed-ink-700)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 28
    }
  }, STEPS.map(([title, body], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 22,
      borderTop: `1px solid ${i === 1 ? 'var(--accent)' : 'var(--on-ink-line)'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: i === 1 ? 'var(--accent)' : 'var(--on-ink-faint)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: 'var(--on-ink)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.62,
      color: 'var(--on-ink-muted)'
    }
  }, body))))));
}

/** Counts a figure up when it scrolls into view. Tabular figures, so nothing reflows. */
function CountUpStat({
  to,
  prefix,
  suffix,
  decimals = 0,
  label,
  tone = 'inverse',
  size = 'sm'
}) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to);
      return;
    }
    let raf, t0;
    const io = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const step = t => {
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / 1100);
        setN(to * (1 - Math.pow(1 - p, 3))); // ease-out cubic, matches --ease-out
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);
  const shown = n.toLocaleString('en-NG', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, /*#__PURE__*/React.createElement(Stat, {
    size: size,
    tone: tone,
    prefix: prefix,
    suffix: suffix,
    value: shown,
    label: label
  }));
}
Object.assign(window, {
  RailSection,
  CountUpStat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RailSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteNav.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon
} = window.BackedDesignSystem_3d5478;
function SiteNav({
  theme,
  onToggleTheme
}) {
  const links = ['Products', 'For distributors', 'For insurers', 'Docs', 'Pricing'];
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'color-mix(in srgb, var(--bg-page) 88%, transparent)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: stuck ? 'var(--shadow-sm)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: stuck ? 60 : 72,
      transition: 'height var(--dur-base) var(--ease-out)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    size: 26,
    tone: theme === 'dark' ? 'white' : 'default'
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flex: 1,
      marginLeft: 12
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: i === 0 ? 'var(--text-strong)' : 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleTheme,
    "aria-label": "Toggle theme",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'dark' ? 'sun' : 'moon',
    size: 17
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Get API keys"))));
}
Object.assign(window, {
  SiteNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ValueSection.jsx
try { (() => {
const {
  SectionHeading,
  FeatureRow,
  Card,
  Icon,
  Button,
  CodeBlock,
  InsurerWall,
  Disclosure,
  DISCLOSURES
} = window.BackedDesignSystem_3d5478;
function InsurerSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '72px 32px',
      display: 'grid',
      gridTemplateColumns: '0.66fr 1.34fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      lineHeight: 'var(--lh-h2)',
      letterSpacing: 'var(--ls-h2)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, "Real carriers. Named, every time."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, (DISCLOSURES || {}).short, " As broker of record Backed places the risk and stands with the customer on a claim \u2014 and the customer always sees whose paper they are on.")), /*#__PURE__*/React.createElement(InsurerWall, {
    columns: 4,
    tileHeight: 92,
    assetBase: "../../assets/insurers/",
    label: null
  })));
}
const FEATURES = [['plug', 'One integration', 'Every product on the rail ships from a single set of keys. Add a new insurer without touching your code.'], ['banknote', 'Commission on every policy', 'Your cut is returned in the quote, before you sell. Settlement lands every Friday.'], ['shield-check', 'Real licensed insurers', 'Cover is written by named Nigerian carriers. Backed is the NAICOM-licensed broker of record, never the risk.'], ['zap', 'Live in four days', 'Sandbox keys in minutes. Median time from first call to first live policy is four days.'], ['file-text', 'Policy documents handled', 'Certificates, receipts and renewals are generated and delivered for you.'], ['trending-up', 'Priced for take-up', 'Micro-premiums built for airtime-sized baskets, not annual invoices.']];
function ValueSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-alt)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "For distributors",
    title: "Everything a carrier does, minus the carrier.",
    lead: "Banks, fintechs, lenders and mobility platforms plug in once and start earning on cover their customers already want."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20,
      marginTop: 56
    }
  }, FEATURES.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    pad: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    }),
    title: title
  }, body))))));
}
function DeveloperSection() {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm",
    eyebrow: "Built like a rail",
    title: "Two calls to a live policy.",
    lead: "Quote, then issue. Idempotent, versioned, documented, and the same in sandbox as in production.",
    action: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-right",
        size: 16
      })
    }, "Read the docs"), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary"
    }, "API reference"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "1 \xB7 quote",
    code: 'curl https://api.backed.insure/v1/quotes \\\n  -H "Authorization: Bearer sk_live_4kQ…" \\\n  -d product=device \\\n  -d insured_value=250000'
  }), /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "2 \xB7 issue",
    code: 'curl https://api.backed.insure/v1/policies \\\n  -H "Authorization: Bearer sk_live_4kQ…" \\\n  -d quote=qt_8Zq1vT \\\n  -d customer=cus_31mB9k'
  }))));
}
Object.assign(window, {
  InsurerSection,
  ValueSection,
  DeveloperSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ValueSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.DISCLOSURES = __ds_scope.DISCLOSURES;

__ds_ns.Disclosure = __ds_scope.Disclosure;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.INSURERS = __ds_scope.INSURERS;

__ds_ns.InsurerWall = __ds_scope.InsurerWall;

__ds_ns.PolicyRow = __ds_scope.PolicyRow;

__ds_ns.QuoteCard = __ds_scope.QuoteCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
