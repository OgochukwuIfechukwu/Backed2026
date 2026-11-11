const { Logo, Button, Icon } = window.BackedDesignSystem_3d5478;

function SiteNav({ theme, onToggleTheme }) {
  const links = ['Products', 'For distributors', 'For insurers', 'Docs', 'Pricing'];
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header style={{position:'sticky', top:0, zIndex:30, background:'color-mix(in srgb, var(--bg-page) 88%, transparent)',
      backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)',
      borderBottom:'1px solid var(--border-subtle)',
      boxShadow: stuck ? 'var(--shadow-sm)' : 'none',
      transition:'box-shadow var(--dur-base) var(--ease-out)'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'0 32px', height: stuck ? 60 : 72,
        transition:'height var(--dur-base) var(--ease-out)',
        display:'flex', alignItems:'center', justifyContent:'space-between', gap:32}}>
        <Logo variant="horizontal" size={26} tone={theme === 'dark' ? 'white' : 'default'}/>
        <nav style={{display:'flex', alignItems:'center', gap:28, flex:1, marginLeft:12}}>
          {links.map((l, i) => (
            <a key={l} href="#" style={{fontFamily:'var(--font-body)', fontSize:14, fontWeight:600,
              color: i === 0 ? 'var(--text-strong)' : 'var(--text-muted)', textDecoration:'none'}}>{l}</a>
          ))}
        </nav>
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <button onClick={onToggleTheme} aria-label="Toggle theme"
            style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:36, height:36,
              background:'transparent', border:'1px solid var(--border-subtle)', borderRadius:'var(--radius-md)',
              color:'var(--text-muted)', cursor:'pointer'}}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17}/>
          </button>
          <a href="#" style={{fontFamily:'var(--font-body)', fontSize:14, fontWeight:700, color:'var(--text-strong)', textDecoration:'none'}}>Sign in</a>
          <Button size="sm" iconRight={<Icon name="arrow-right" size={15}/>}>Get API keys</Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { SiteNav });
