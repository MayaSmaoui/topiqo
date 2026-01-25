export default function Download({ lang = 'fr' }) {
  const T = {
    fr: {
      title: "Télécharger l’app",
      subtitle: "Disponible sur l’App Store. Version Google Play disponible bientôt.",
      store: "Télécharger sur l’App Store",
      google: "Version Google Play bientôt disponible"
    },
    en: {
      title: "Download the app",
      subtitle: "Available on the App Store. Google Play version coming soon.",
      store: "Download on the App Store",
      google: "Google Play version coming soon"
    }
  }[lang];

  const appStoreLink = "https://apps.apple.com/gb/app/topiqo/id6748356744";

  return (
    <main className="page download-page">
      <div className="page-hero">
        <span className="chip">Topiqo</span>
        <h1>{T.title}</h1>
        <p>{T.subtitle}</p>
      </div>

      <div className="download-card">
        <div className="download-button-wrapper">
          <a
            className="btn btn-primary download-btn"
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {T.store}
          </a>
        </div>

        <p className="google-coming-soon">{T.google}</p>
      </div>
    </main>
  );
}
