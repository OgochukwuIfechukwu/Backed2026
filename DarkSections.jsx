const { SectionHeading, Stat, Card, Icon, Button, Logo, FeatureRow, Disclosure } = window.BackedDesignSystem_3d5478;

function TwoSidedSection() {
  return (
    <section data-theme="dark" style={{background:'var(--backed-ink-900)'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'104px 32px'}}>
        <SectionHeading tone="inverse" align="center" eyebrow="Two sides, one rail"
          title="Distributors get revenue. Insurers get reach."
          lead="Backed sits between the businesses your customers already use and the carriers licensed to take the risk."
          style={{margin:'0 auto 60px'}}/>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
          {[['users','For distributors','Sell cover inside the flow your customer is already in — a checkout, a loan, a top-up.',
             [{to:1284, label:'policies / month'},{to:2.4, prefix:'₦', suffix:'m', decimals:1, label:'commission earned'}]],
            ['building-2','For insurers','Reach millions of customers through channels you could never build a branch network for.',
             [{to:38, label:'live distributors'},{to:4, suffix:'days', label:'to launch a product'}]]].map(([icon,title,body,stats]) => (
            <Card key={title} tone="ink" pad="lg" style={{background:'var(--surface-card)', display:'flex', flexDirection:'column', gap:28}}>
              <FeatureRow tone="inverse" icon={<Icon name={icon} size={20}/>} title={title}>{body}</FeatureRow>
              <div style={{display:'flex', gap:44, paddingTop:24, borderTop:'1px solid var(--on-ink-line)'}}>
                {stats.map(s => <CountUpStat key={s.label} {...s}/>)}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{background:'var(--accent)'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'80px 32px',
        display:'flex', alignItems:'center', justifyContent:'space-between', gap:48, flexWrap:'wrap'}}>
        <div style={{display:'flex', flexDirection:'column', gap:12, maxWidth:620}}>
          <h2 style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-display-m)',
            lineHeight:'var(--lh-display-m)', letterSpacing:'var(--ls-display-m)', color:'var(--backed-paper)', margin:0}}>
            Start selling this week.
          </h2>
          <p style={{fontFamily:'var(--font-body)', fontSize:17, lineHeight:1.6, color:'rgba(255,255,255,.86)', margin:0}}>
            Sandbox keys are instant. No contract until your first live policy.
          </p>
        </div>
        <div style={{display:'flex', gap:12}}>
          <Button size="lg" variant="secondary" iconRight={<Icon name="arrow-right" size={18}/>}>Get API keys</Button>
          <Button size="lg" variant="tertiary" style={{color:'var(--backed-paper)', border:'1px solid rgba(255,255,255,.4)'}}>Book a call</Button>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const cols = [
    ['Products', ['Device cover', 'Health', 'Credit life', 'Travel', 'Motor']],
    ['Platform', ['Docs', 'API reference', 'Sandbox', 'Status', 'Changelog']],
    ['Company', ['About', 'Insurer partners', 'Careers', 'Press', 'Contact']],
    ['Legal', ['Terms', 'Privacy', 'Licensing', 'Complaints']]
  ];
  return (
    <footer data-theme="dark" style={{background:'var(--backed-ink-900)'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'72px 32px 40px',
        display:'grid', gridTemplateColumns:'1.4fr repeat(4,1fr)', gap:40}}>
        <div style={{display:'flex', flexDirection:'column', gap:18, alignItems:'flex-start'}}>
          <Logo variant="wordmark" size={34} bar tone="white"/>
          <p style={{fontFamily:'var(--font-body)', fontSize:14, lineHeight:1.6, color:'var(--on-ink-muted)', margin:0, maxWidth:260}}>
            The insurance distribution rail for Africa.
          </p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h} style={{display:'flex', flexDirection:'column', gap:12}}>
            <span style={{fontFamily:'var(--font-body)', fontSize:'var(--fs-eyebrow)', letterSpacing:'var(--ls-eyebrow)',
              textTransform:'uppercase', fontWeight:700, color:'var(--on-ink-faint)'}}>{h}</span>
            {items.map(i => <a key={i} href="#" style={{fontFamily:'var(--font-body)', fontSize:14, fontWeight:500,
              color:'var(--on-ink-muted)', textDecoration:'none'}}>{i}</a>)}
          </div>
        ))}
      </div>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'0 32px 28px'}}>
        <Disclosure variant="footer" tone="inverse" licence="NAICOM/BRK/2026/0141"/>
      </div>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'22px 32px 40px', borderTop:'1px solid var(--on-ink-line)',
        display:'flex', justifyContent:'space-between', gap:20, flexWrap:'wrap'}}>
        <span style={{fontFamily:'var(--font-body)', fontSize:12.5, color:'var(--on-ink-muted)'}}>© 2026 Backed. All rights reserved.</span>
        <span style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--on-ink-faint)'}}>backed.insure</span>
      </div>
    </footer>
  );
}
Object.assign(window, { TwoSidedSection, CtaBand, SiteFooter });
