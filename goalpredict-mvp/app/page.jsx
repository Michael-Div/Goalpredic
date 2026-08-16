import { ArrowRight, BarChart3, CalendarDays, CheckCircle2, ChevronRight, Clock3, Flame, ShieldCheck, TrendingUp } from 'lucide-react';
import { getContent } from '../lib/content';

function confidenceLabel(n){ return n >= 75 ? 'High confidence' : n >= 65 ? 'Good confidence' : 'Watch'; }

export default function Home(){
  const c = getContent();
  return (
    <main>
      <nav className="nav shell">
        <div className="brand"><span className="brand-mark">G</span><span>Goal<span>Predict</span></span></div>
        <div className="nav-links"><a href="#predictions">Predictions</a><a href="#news">News</a><a href="#method">How it works</a></div>
        <a className="nav-cta" href="#predictions">Today's picks <ArrowRight size={16}/></a>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> {c.hero.eyebrow}</div>
          <h1>{c.hero.title.split('\n').map((x,i)=><span key={x} className={i===1?'accent':''}>{x}</span>)}</h1>
          <p>{c.hero.subtitle}</p>
          <div className="hero-actions"><a className="primary" href="#predictions">{c.hero.cta}<ArrowRight size={18}/></a><a className="secondary" href="#method">Our methodology</a></div>
          <div className="trust-row"><span><ShieldCheck size={17}/> Independent analysis</span><span><BarChart3 size={17}/> Data-led insights</span></div>
        </div>
        <div className="hero-card">
          <div className="card-top"><span>Prediction pulse</span><span className="live-dot">LIVE</span></div>
          <div className="hero-score"><div><small>Today's featured pick</small><strong>Liverpool</strong><em>vs Bournemouth</em></div><div className="score-badge">78%<span>confidence</span></div></div>
          <div className="meter"><span style={{width:'78%'}}/></div>
          <div className="hero-mini"><span><TrendingUp size={15}/> Home Win</span><span>Strong</span></div>
        </div>
      </section>

      <section id="predictions" className="section shell">
        <div className="section-head"><div><div className="kicker">MATCH CENTRE</div><h2>Featured predictions</h2></div><a href="#all">View all <ChevronRight size={16}/></a></div>
        <div className="prediction-grid">
          {c.featured.map((m)=><article className="match-card" key={m.home+m.away}>
            <div className="match-meta"><span>{m.league}</span><span><CalendarDays size={14}/> {m.date} · {m.time}</span></div>
            <div className="teams"><div><div className="crest">{m.home[0]}</div><strong>{m.home}</strong></div><span className="vs">VS</span><div><div className="crest away">{m.away[0]}</div><strong>{m.away}</strong></div></div>
            <div className="prediction-row"><div><small>Prediction</small><strong>{m.tip}</strong></div><div className="confidence"><span>{m.confidence}%</span><small>{confidenceLabel(m.confidence)}</small></div></div>
            <p className="reason"><Flame size={15}/> {m.reason}</p>
          </article>)}
        </div>
      </section>

      <section id="news" className="news-section"><div className="shell"><div className="section-head"><div><div className="kicker">FOOTBALL DESK</div><h2>Latest football news</h2></div><a href="#news">More stories <ChevronRight size={16}/></a></div><div className="news-grid">{c.news.map((n)=><article className="news-card" key={n.title}><div className="news-image"><span>{n.tag}</span><div className="image-mark">GP</div></div><div className="news-body"><div className="news-date"><Clock3 size={13}/> {n.date}</div><h3>{n.title}</h3><p>{n.excerpt}</p><a href="#">Read story <ArrowRight size={15}/></a></div></article>)}</div></div></section>

      <section id="method" className="method shell"><div className="method-copy"><div className="kicker">OUR EDGE</div><h2>Predictions built around evidence, not hype.</h2><p>GoalPredict turns fixture context, recent performance and tactical signals into clear match insights. Confidence is a probability signal — never a guarantee.</p></div><div className="method-grid">{c.methodology.map((x,i)=><div className="method-item" key={x}><span>0{i+1}</span><div><CheckCircle2 size={18}/><strong>{x}</strong></div></div>)}</div></section>

      <footer><div className="shell footer-inner"><div className="brand"><span className="brand-mark">G</span><span>Goal<span>Predict</span></span></div><div>Football intelligence for the new season.</div><div>© 2026 GoalPredict</div></div></footer>
    </main>
  );
}
