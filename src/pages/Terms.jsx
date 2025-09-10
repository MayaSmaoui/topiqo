// src/pages/Terms.jsx
import React from "react";

export default function Terms({ lang = "fr" }) {
  const i18n = {
    fr: {
      brand: "Topiqo",
      title: "Conditions générales d’utilisation",
      subtitle:
        "Les règles encadrant l’accès et l’usage de l’application et du site Topiqo.",
      updated: "Dernière mise à jour : 9 septembre 2025",
      sections: [
        {
          id: "object",
          h: "Objet",
          body: (
            <p>
              Les présentes conditions générales d’utilisation (CGU) définissent les modalités d’accès et
              d’utilisation du site web et de l’application Topiqo. En accédant ou en utilisant le Service,
              l’utilisateur accepte sans réserve ces CGU.
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "Éligibilité",
          body: (
            <p>
              Le Service est destiné aux utilisateurs âgés de 13 ans et plus. Les mineurs doivent obtenir
              l’autorisation de leurs parents ou tuteurs légaux pour utiliser Topiqo.
            </p>
          ),
        },
        {
          id: "account",
          h: "Compte utilisateur",
          body: (
            <p>
              Pour accéder à certaines fonctionnalités, l’utilisateur doit créer un compte en fournissant des
              informations exactes et à jour. L’utilisateur est responsable de la confidentialité de ses
              identifiants.
            </p>
          ),
        },
        {
          id: "use",
          h: "Utilisation du service",
          body: (
            <ul>
              <li>Ne pas utiliser le Service à des fins frauduleuses, illégales ou nuisibles.</li>
              <li>Ne pas perturber le fonctionnement du Service ou porter atteinte à sa sécurité.</li>
              <li>Respecter les droits de propriété intellectuelle liés aux contenus de Topiqo.</li>
            </ul>
          ),
        },
        {
          id: "intellectual",
          h: "Propriété intellectuelle",
          body: (
            <p>
              Tous les contenus de Topiqo (textes, logos, illustrations, code, bases de données) sont protégés
              par le droit d’auteur et le droit des marques. Toute reproduction sans autorisation est interdite.
            </p>
          ),
        },
        {
          id: "liability",
          h: "Responsabilité",
          body: (
            <p>
              Topiqo fournit le Service « en l’état » et ne garantit pas l’absence totale d’erreurs. La
              responsabilité de Topiqo ne peut être engagée qu’en cas de faute prouvée et directe. Topiqo ne
              saurait être tenue responsable des dommages indirects.
            </p>
          ),
        },
        {
          id: "termination",
          h: "Résiliation",
          body: (
            <p>
              L’utilisateur peut à tout moment supprimer son compte. Topiqo se réserve le droit de suspendre ou
              résilier un compte en cas de violation des présentes CGU.
            </p>
          ),
        },
        {
          id: "law",
          h: "Droit applicable",
          body: (
            <p>
              Les présentes CGU sont régies par le droit français. En cas de litige, et sauf disposition
              légale impérative contraire, les tribunaux compétents seront ceux du ressort du siège de Topiqo.
            </p>
          ),
        },
      ],
    },
    en: {
      brand: "Topiqo",
      title: "Terms of Use",
      subtitle:
        "Rules governing access and use of the Topiqo app and website.",
      updated: "Last updated: September 9, 2025",
      sections: [
        {
          id: "object",
          h: "Purpose",
          body: (
            <p>
              These Terms of Use (ToU) define the conditions of access and use of the Topiqo website and
              application. By accessing or using the Service, the user accepts these ToU without reservation.
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "Eligibility",
          body: (
            <p>
              The Service is intended for users aged 13 and older. Minors must obtain parental or legal guardian
              consent before using Topiqo.
            </p>
          ),
        },
        {
          id: "account",
          h: "User account",
          body: (
            <p>
              To access certain features, the user must create an account with accurate and up-to-date
              information. The user is responsible for keeping their login details confidential.
            </p>
          ),
        },
        {
          id: "use",
          h: "Use of the service",
          body: (
            <ul>
              <li>Do not use the Service for fraudulent, illegal, or harmful purposes.</li>
              <li>Do not disrupt the Service or compromise its security.</li>
              <li>Respect intellectual property rights related to Topiqo content.</li>
            </ul>
          ),
        },
        {
          id: "intellectual",
          h: "Intellectual property",
          body: (
            <p>
              All Topiqo content (texts, logos, illustrations, code, databases) is protected by copyright and
              trademark law. Any reproduction without prior authorization is prohibited.
            </p>
          ),
        },
        {
          id: "liability",
          h: "Liability",
          body: (
            <p>
              Topiqo provides the Service “as is” and does not guarantee the complete absence of errors.
              Topiqo’s liability can only be engaged in cases of proven and direct fault. Topiqo shall not be
              held liable for indirect damages.
            </p>
          ),
        },
        {
          id: "termination",
          h: "Termination",
          body: (
            <p>
              The user may delete their account at any time. Topiqo reserves the right to suspend or terminate
              an account in case of violation of these ToU.
            </p>
          ),
        },
        {
          id: "law",
          h: "Governing law",
          body: (
            <p>
              These ToU are governed by French law. In case of a dispute, and unless mandatory law provides
              otherwise, competent courts shall be those of Topiqo’s registered office.
            </p>
          ),
        },
      ],
    },
  }[lang];

  const T = i18n;

  const Section = ({ id, title, children }) => (
    <section id={id} className="legal-card">
      <h3 className="legal-card-title">{title}</h3>
      <div className="legal-card-body">{children}</div>
    </section>
  );

  return (
    <main className="legal-page page">
      <div className="legal-hero">
        <div className="legal-meta">
          <span className="legal-chip">{T.brand}</span>
          <span className="dot" aria-hidden>•</span>
          <span className="updated">{T.updated}</span>
        </div>
        <h1 className="legal-title">{T.title}</h1>
        <p className="legal-subtitle">{T.subtitle}</p>
      </div>

      <div className="legal-content">
        {T.sections.map((s) => (
          <Section key={s.id} id={s.id} title={s.h}>
            {s.body}
          </Section>
        ))}
      </div>
    </main>
  );
}
