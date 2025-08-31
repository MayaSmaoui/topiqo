// src/FeaturesShowcase.jsx
import { useEffect, useRef } from 'react';
import Maths from './assets/icone1.png';
import Philo from './assets/Philo.png';
import SVT from './assets/Booste.png';

const FEATURES_BY_LANG = {
  fr: [
    {
      title: "Bientot Disponible",
      text: "Bientot Disponible",
      img: Maths,
      color: "#fccc2d",
      reverse: false
    },
    {
      title:"Bientot Disponible",
      text: "Bientot Disponible",
      img: Philo,
      color: "#58cc02",
      reverse: true
    },
    {
      title: "Bientot Disponible",
      text: "Bientot Disponible",
      img: SVT,
      color: "#7aa2ff",
      reverse: false
    }
  ],
  en: [
    {
      title: "Bientot Disponible",
      text: "Bientot Disponible",
      img: Maths,
      color: "#fccc2d",
      reverse: false
    },
    {
      title: "Bientot Disponible",
      text: "Bientot Disponible",
      img: Philo,
      color: "#58cc02",
      reverse: true
    },
    {
      title: "Bientot Disponible",
      text: "Bientot Disponible",
      img: SVT,
      color: "#7aa2ff",
      reverse: false
    }
  ]
};

export default function FeaturesShowcase({ lang = 'fr' }) {
  const refs = useRef([]);
  const FEATURES = FEATURES_BY_LANG[lang] || FEATURES_BY_LANG.fr;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-showcase" id="features">
      {FEATURES.map((feat, index) => (
        <div
          key={`${lang}-${index}`}
          ref={el => (refs.current[index] = el)}
          className={`feature-block ${feat.reverse ? "reverse" : ""}`}
          style={{ "--accent": feat.color }}
        >
          <div className="feature-text">
            <h2>{feat.title}</h2>
            <p>{feat.text}</p>
          </div>
          <div className="feature-image">
            <img src={feat.img} alt={feat.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
