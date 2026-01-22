// src/pages/Home.jsx
import FeaturesShowcase from '../FeaturesShowcase';
import topiGif from '../assets/topiqo-wave-blank.gif';

export default function Home({ t, lang }) {
  const appStoreLink = "https://apps.apple.com/gb/app/topiqo/id6748356744";

  return (
    <>
      {/* HERO */}
      <main className="hero">
        <div className="hero-inner">
          <img src={topiGif} alt="Topi animé" className="topi-img" />
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>

          <a
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            {t.download}
          </a>
        </div>
        <div className="hero-bg" aria-hidden="true"></div>
      </main>

      {/* SECTION IMMERSIVE */}
      <FeaturesShowcase lang={lang} key={lang} />
    </>
  );
}
