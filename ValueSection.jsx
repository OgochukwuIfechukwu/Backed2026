const { SectionHeading, FeatureRow, Card, Icon, Button, CodeBlock, InsurerWall, Disclosure, DISCLOSURES } = window.BackedDesignSystem_3d5478;

function InsurerSection() {
  return (
    <section style={{borderTop:'1px solid var(--border-subtle)', background:'var(--bg-page)'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'72px 32px',
        display:'grid', gridTemplateColumns:'0.66fr 1.34fr', gap:48, alignItems:'center'}}>
        <div style={{display:'flex', flexDirection:'column', gap:14}}>
          <h2 style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:'var(--fs-h2)',
            lineHeight:'var(--lh-h2)', letterSpacing:'var(--ls-h2)', color:'var(--text-strong)', margin:0}}>
            Real carriers. Named, every time.
          </h2>
          <p style={{fontFamily:'var(--font-body)', fontSize:15.5, lineHeight:1.65, color:'var(--text-muted)', margin:0}}>
            {(DISCLOSURES || {}).short} As broker of record Backed places the risk and stands with the customer on a claim — and the customer always sees whose paper they are on.
          </p>
        </div>
        <InsurerWall columns={4} tileHeight={92} assetBase="assets/insurers/" label={null}/>
      </div>
    </section>
  );
}

const FEATURES = [
  ['plug', 'One integration', 'Every product on the rail ships from a single set of keys. Add a new insurer without touching your code.'],
  ['banknote', 'Commission on every policy', 'Your cut is returned in the quote, before you sell. Settlement lands every Friday.'],
  ['shield-check', 'Real licensed insurers', 'Cover is written by named Nigerian carriers. Backed is the NAICOM-licensed broker of record, never the risk.'],
  ['zap', 'Live in four days', 'Sandbox keys in minutes. Median time from first call to first live policy is four days.'],
  ['file-text', 'Policy documents handled', 'Certificates, receipts and renewals are generated and delivered for you.'],
  ['trending-up', 'Priced for take-up', 'Micro-premiums built for airtime-sized baskets, not annual invoices.']
];

function ValueSection() {
  return (
    <section style={{background:'var(--bg-alt)', borderTop:'1px solid var(--border-subtle)', borderBottom:'1px solid var(--border-subtle)'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'96px 32px'}}>
        <SectionHeading eyebrow="For distributors"
          title="Everything a carrier does, minus the carrier."
          lead="Banks, fintechs, lenders and mobility platforms plug in once and start earning on cover their customers already want."/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, marginTop:56}}>
          {FEATURES.map(([icon, title, body]) => (
            <Card key={title} pad="lg" interactive>
              <FeatureRow icon={<Icon name={icon} size={20}/>} title={title}>{body}</FeatureRow>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'96px 32px',
        display:'grid', gridTemplateColumns:'0.9fr 1.1fr', gap:72, alignItems:'center'}}>
        <SectionHeading size="sm" eyebrow="Built like a rail"
          title="Two calls to a live policy."
          lead="Quote, then issue. Idempotent, versioned, documented, and the same in sandbox as in production."
          action={<><Button variant="secondary" iconRight={<Icon name="arrow-up-right" size={16}/>}>Read the docs</Button><Button variant="tertiary">API reference</Button></>}/>
        <div style={{display:'flex', flexDirection:'column', gap:14}}>
          <CodeBlock filename="1 · quote" code={'curl https://api.backed.insure/v1/quotes \\\n  -H "Authorization: Bearer sk_live_4kQ…" \\\n  -d product=device \\\n  -d insured_value=250000'}/>
          <CodeBlock filename="2 · issue" code={'curl https://api.backed.insure/v1/policies \\\n  -H "Authorization: Bearer sk_live_4kQ…" \\\n  -d quote=qt_8Zq1vT \\\n  -d customer=cus_31mB9k'}/>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { InsurerSection, ValueSection, DeveloperSection });
