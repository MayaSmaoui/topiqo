export default function Contact({ lang = 'fr' }) {
  const T = {
    fr: {
      title: 'Contact',
      subtitle: 'Une question ou besoin d’aide ?',
      text: 'Vous pouvez nous contacter à l’adresse suivante :',
      email: 'contact@topiqo.fr',
    },
    en: {
      title: 'Contact',
      subtitle: 'Have a question or need help?',
      text: 'You can reach us at the following email address:',
      email: 'contact@topiqo.fr',
    },
  }[lang];

  return (
    <main className="page">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <div className="card" style={{ textAlign: 'center' }}>
        <p>{T.text}</p>
        <p style={{ marginTop: 12 }}>
          <a
            href={`mailto:${T.email}`}
            className="link"
            style={{ fontWeight: 600, fontSize: '1.1em' }}
          >
            {T.email}
          </a>
        </p>
      </div>
    </main>
  );
}
