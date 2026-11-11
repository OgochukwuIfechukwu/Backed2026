const { Button, Icon, QuoteCard, Eyebrow, InsurerWall, INSURERS, Disclosure, Tag } = window.BackedDesignSystem_3d5478;

const PRODUCTS = [
  {key:'device', label:'Device cover', insurer:'Leadway Assurance', insuredLabel:'Insured value', value:250000, rate:0.0168, cut:0.44, term:'per month'},
  {key:'health', label:'Health', insurer:'Heirs Insurance Group', insuredLabel:'Annual cover limit', value:1500000, rate:0.0253, cut:0.25, term:'per month'},
  {key:'credit', label:'Credit life', insurer:'NEM Insurance Plc', insuredLabel:'Loan value', value:120000, rate:0.0175, cut:0.30, term:'per month'}
];

/** Cursor-tracked 3D tilt. Small range, damped by a CSS transition — no spring, no overshoot. */
function TiltStage({ children, max = 7 }) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({x:0, y:0, on:false});
  const reduce = React.useRef(false);
  React.useEffect(() => { reduce.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches; }, []);

  const move = (e) => {
    if (reduce.current) return;
    const r = ref.current.getBoundingClientRect();
    setT({x:((e.clientY - r.top) / r.height - 0.5) * -2 * max,
          y:((e.clientX - r.left) / r.width - 0.5) * 2 * max, on:true});
  };
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={() => setT({x:0, y:0, on:false})}
      style={{perspective:1400, perspectiveOrigin:'50% 40%'}}>
      <div style={{transform:`rotateX(${t.x}deg) rotateY(${t.y}deg)`, transformStyle:'preserve-3d',
        transition:`transform ${t.on ? 'var(--dur-base)' : 'var(--dur-slow)'} var(--ease-out)`}}>
        {children}
      </div>
    </div>
  );
}

/** The foundation device at hero scale: the quote card visibly resting on layers beneath it. */
function BackedStack({ product }) {
  const layer = (i, bg, bd) => (
    <div key={i} aria-hidden="true" style={{position:'absolute', left:i*10, right:i*10, top:i*13,
      height:190, background:bg, border:`1px solid ${bd}`, borderRadius:'var(--radius-2xl)',
      transform:`translateZ(${-40*i}px)`, boxShadow:'var(--shadow-sm)'}}/>
  );
  return (
    <div style={{position:'relative', width:392, transformStyle:'preserve-3d'}}>
      {layer(2, 'var(--bg-inset)', 'var(--border-subtle)')}
      {layer(1, 'var(--bg-alt)', 'var(--border-subtle)')}
      <div style={{position:'relative', transformStyle:'preserve-3d', transform:'translateZ(28px)'}}>
        <QuoteCard key={product.key} width={392} product={product.label} insurer={product.insurer}
          insuredLabel={product.insuredLabel} insuredValue={product.value}
          premium={Math.round(product.value * product.rate)}
          commission={Math.round(product.value * product.rate * product.cut)}
          term={product.term}/>
      </div>
    </div>
  );
}

function Hero() {
  const [p, setP] = React.useState(PRODUCTS[0]);
  return (
    <section style={{position:'relative', overflow:'hidden'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'88px 32px 104px',
        display:'grid', gridTemplateColumns:'1.02fr 0.98fr', gap:64, alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
          <Eyebrow rule>The insurance distribution rail</Eyebrow>
          <h1 style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-display-xl)',
            lineHeight:'var(--lh-display-xl)', letterSpacing:'var(--ls-display-xl)', color:'var(--text-strong)',
            margin:'22px 0 0', maxWidth:600}}>
            Sell insurance<br/>like airtime.
          </h1>
          <div style={{width:96, height:6, borderRadius:6, background:'var(--accent)', margin:'26px 0'}}/>
          <p style={{fontFamily:'var(--font-body)', fontSize:'var(--fs-body-l)', lineHeight:'var(--lh-body-l)',
            color:'var(--text-muted)', margin:0, maxWidth:520}}>
            One API lets any digital business in Africa sell cover from real, licensed insurers — and earn
            a commission on every policy. You keep the customer. We handle the carrier.
          </p>
          <div style={{display:'flex', gap:12, marginTop:34, flexWrap:'wrap'}}>
            <Button size="lg" iconRight={<Icon name="arrow-right" size={18}/>}>Get API keys</Button>
            <Button size="lg" variant="secondary">Talk to us</Button>
          </div>
          <InsurerWall style={{marginTop:44, width:'100%', maxWidth:520}} columns={4} tileHeight={66}
            area={620} minLogoHeight={16} maxLogoHeight={30}
            insurers={(INSURERS || []).slice(0,4)} assetBase="assets/insurers/"
            label="Underwritten by NAICOM-licensed insurers"/>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:16, alignItems:'flex-end', position:'relative'}}>
          <div aria-hidden="true" style={{position:'absolute', top:-56, right:-72, bottom:-56, left:-24,
            background:'var(--bg-alt)', borderRadius:'var(--radius-2xl)'}}/>
          <div style={{position:'relative', display:'flex', gap:8, alignSelf:'flex-start'}}>
            {PRODUCTS.map(x => (
              <Tag key={x.key} selected={x.key === p.key} onClick={() => setP(x)}>{x.label}</Tag>
            ))}
          </div>
          <div style={{position:'relative'}}>
            <TiltStage><BackedStack product={p}/></TiltStage>
          </div>
          <Disclosure variant="quote" insurer={p.insurer} style={{width:392, position:'relative'}}
            icon={<Icon name="info" size={14}/>}/>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero, TiltStage });
