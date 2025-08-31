export default function Help({ lang='fr' }){
  const T = {
    fr: { title:'Aide', subtitle:'Questions fréquentes', q:[
      ['Topiqo, c’est quoi ?', 'Bientôt disponible'],
      ['L’IA marche comment ?', 'Bientôt disponible'],
      ['Puis-je utiliser Topiqo gratuitement ?', 'Bientôt disponible'],
      ['Comment annuler ?', 'Bientôt disponible']
    ] },
    en: { title:'Help', subtitle:'Frequently asked questions', q:[
      ['What is Topiqo?', 'Coming Soon'],
      ['How does AI work?', 'Coming Soon'],
      ['Is there a free plan?', 'Coming Soon'],
      ['How to cancel?', 'Coming Soon']
    ] }
  }[lang];

  return (
    <main className="page">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <div className="faq">
        {T.q.map(([q,a],i)=> (
          <details key={i} className="faq-item">
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
