const { Eyebrow, Stat, Icon } = window.BackedDesignSystem_3d5478;

const STEPS = [
  ['Distributors', 'Banks, fintechs, lenders and mobility platforms — the businesses your customers already open every day.'],
  ['The rail', 'One API. Quote, issue, settle. Backed is broker of record on every policy that moves along it.'],
  ['Insurers', 'NAICOM-licensed carriers who price the risk, write the paper and pay the claim.']
];

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
      try { dispose = window.BackedRail.mount(host.current); } catch (e) { console.error(e); setFailed(true); }
      return true;
    };
    if (!start()) {
      const onReady = () => start();
      window.addEventListener('backed-rail-ready', onReady, { once: true });
      // If WebGL or the module never arrives, fall back rather than showing a hole.
      const t = setTimeout(() => { if (!window.BackedRail) setFailed(true); }, 4000);
      return () => { cancelled = true; clearTimeout(t); window.removeEventListener('backed-rail-ready', onReady); if (dispose) dispose(); };
    }
    return () => { cancelled = true; if (dispose) dispose(); };
  }, []);

  return (
    <section data-theme="dark" style={{background:'var(--backed-ink-900)', overflow:'hidden'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'96px 32px 88px'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:16, textAlign:'center'}}>
          <Eyebrow tone="inverse" rule>How it moves</Eyebrow>
          <h2 style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-display-m)',
            lineHeight:'var(--lh-display-m)', letterSpacing:'var(--ls-display-m)', color:'var(--on-ink)',
            margin:0, maxWidth:680}}>A rail, not a marketplace.</h2>
          <p style={{fontFamily:'var(--font-body)', fontSize:'var(--fs-body-l)', lineHeight:'var(--lh-body-l)',
            color:'var(--on-ink-muted)', margin:0, maxWidth:600, textWrap:'pretty'}}>
            Policies travel one way: from the businesses your customers already use, along the rail, to the
            carrier that writes them. Drag your cursor across it.
          </p>
        </div>

        <div ref={host} aria-hidden="true"
          style={{position:'relative', height:340, marginTop:12, cursor:'grab',
            display: failed ? 'none' : 'block'}}/>

        {failed && (
          <div style={{height:220, marginTop:32, display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center', gap:14}}>
            <span style={{width:'72%', height:10, borderRadius:999, background:'var(--accent)'}}/>
            <span style={{width:'84%', height:10, borderRadius:999, background:'var(--backed-ink-600)'}}/>
            <span style={{width:'96%', height:10, borderRadius:999, background:'var(--backed-ink-700)'}}/>
          </div>
        )}

        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, marginTop:28}}>
          {STEPS.map(([title, body], i) => (
            <div key={title} style={{display:'flex', flexDirection:'column', gap:10,
              paddingTop:22, borderTop:`1px solid ${i===1 ? 'var(--accent)' : 'var(--on-ink-line)'}`}}>
              <span style={{fontFamily:'var(--font-body)', fontSize:'var(--fs-eyebrow)',
                letterSpacing:'var(--ls-eyebrow)', textTransform:'uppercase', fontWeight:700,
                color: i===1 ? 'var(--accent)' : 'var(--on-ink-faint)'}}>0{i+1}</span>
              <span style={{fontFamily:'var(--font-display)', fontSize:20, fontWeight:700,
                letterSpacing:'-0.01em', color:'var(--on-ink)'}}>{title}</span>
              <span style={{fontFamily:'var(--font-body)', fontSize:14.5, lineHeight:1.62,
                color:'var(--on-ink-muted)'}}>{body}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Counts a figure up when it scrolls into view. Tabular figures, so nothing reflows. */
function CountUpStat({ to, prefix, suffix, decimals = 0, label, tone = 'inverse', size = 'sm' }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return; }
    let raf, t0;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const step = (t) => {
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / 1100);
        setN(to * (1 - Math.pow(1 - p, 3)));   // ease-out cubic, matches --ease-out
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  const shown = n.toLocaleString('en-NG', {minimumFractionDigits:decimals, maximumFractionDigits:decimals});
  return <span ref={ref}><Stat size={size} tone={tone} prefix={prefix} suffix={suffix} value={shown} label={label}/></span>;
}

Object.assign(window, { RailSection, CountUpStat });
