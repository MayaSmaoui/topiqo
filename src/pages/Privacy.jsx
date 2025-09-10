// src/pages/Privacy.jsx
import React from "react";

export default function Privacy({ lang = "fr" }) {
  const i18n = {
    fr: {
      brand: "Topiqo",
      title: "Politique de confidentialité",
      subtitle:
        "Comment nous collectons, utilisons et protégeons vos données personnelles.",
      updated: "Dernière mise à jour : 10 septembre 2025",
      effective: "Date d’entrée en vigueur : 10 septembre 2025",
      toc: "Sommaire",
      sections: [
        {
          id: "intro",
          h: "Introduction",
          body: (
            <p>
              Topiqo (« nous », « notre », « nos ») valorise votre vie privée et
              s’engage à protéger vos informations personnelles. Cette Politique
              explique comment nous collectons, utilisons, stockons et partageons
              vos informations lorsque vous utilisez nos applications mobiles,
              notre site web et nos services associés (collectivement, le «
              Service »).
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Éligibilité et confidentialité des enfants",
          body: (
            <>
              <ul>
                <li>Topiqo est destiné aux utilisateurs âgés de <strong>13 ans et plus</strong>.</li>
                <li>
                  Nous ne collectons pas sciemment d’informations personnelles
                  auprès d’enfants de moins de 13 ans. Si un compte est créé par
                  un utilisateur de moins de 13 ans, il sera supprimé
                  immédiatement avec ses données.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "data",
          h: "2. Informations que nous collectons",
          body: (
            <>
              <ul>
                <li><strong>Informations de compte</strong> : nom (facultatif), e-mail, mot de passe, année scolaire.</li>
                <li><strong>Données d’apprentissage</strong> : progression, historique, quiz, séries, temps passé.</li>
                <li><strong>Contenu téléchargé</strong> : notes, images, audios soumis. 
                  <br />→ Les fichiers bruts sont supprimés immédiatement après traitement ; 
                  seuls les contenus générés (quiz, exercices, leçons) sont stockés.
                </li>
                <li><strong>Fonctionnalités de concentration</strong> : statistiques Pomodoro et blocages d’apps (données locales ; si synchronisées, elles sont anonymisées).</li>
                <li><strong>Informations de paiement</strong> : gérées par Apple/Google ; nous ne stockons pas les données bancaires.</li>
                <li><strong>Données techniques</strong> : diagnostics, logs, performances, via outils internes ou prestataires.</li>
              </ul>
            </>
          ),
        },
        {
          id: "use",
          h: "3. Comment nous utilisons vos informations",
          body: (
            <ul>
              <li>Fournir l’accès aux leçons, quiz et fonctionnalités.</li>
              <li>Personnaliser le contenu en fonction de l’année scolaire et progression.</li>
              <li>Gérer votre compte et connexion.</li>
              <li>Améliorer nos services et surveiller la performance.</li>
              <li>Assurer la conformité légale et la sécurité.</li>
            </ul>
          ),
        },
        {
          id: "anonymized",
          h: "4. Données anonymisées et agrégées",
          body: (
            <p>
              Nous pouvons conserver et analyser des données anonymisées et agrégées 
              (ex. temps de réponse aux quiz, taux de complétion) afin d’améliorer 
              nos services, mener des recherches et publier des tendances 
              éducatives. Ces données ne permettent pas de vous identifier.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "5. Partage d’informations",
          body: (
            <ul>
              <li><strong>Jamais vendues</strong>.</li>
              <li>Avec des prestataires de confiance (hébergement, analytics, emailing).</li>
              <li>Si requis légalement (loi, justice).</li>
              <li>En cas de fusion/acquisition (toujours selon cette Politique).</li>
              <li>Avec votre consentement explicite.</li>
            </ul>
          ),
        },
        {
          id: "retention",
          h: "6. Conservation des données",
          body: (
            <ul>
              <li>Données conservées tant que le compte est actif.</li>
              <li>Contenus générés stockés jusqu’à suppression volontaire.</li>
              <li>Fichiers bruts supprimés après traitement immédiat.</li>
              <li>Données anonymisées conservées indéfiniment.</li>
            </ul>
          ),
        },
        {
          id: "rights",
          h: "7. Vos droits",
          body: (
            <p>
              Vous pouvez exercer vos droits d’accès, rectification, suppression,
              portabilité, objection ou restriction en écrivant à{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">privacy@topiqo.fr</a>.  
              Nous pouvons vérifier votre identité avant de répondre.  
              Réponse sous 1 mois (prolongeable).
            </p>
          ),
        },
        {
          id: "security",
          h: "8. Sécurité des données",
          body: (
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              adaptées (chiffrement TLS, contrôles d’accès, sauvegardes, audits).
              Aucun système n’étant invulnérable, nous améliorons en continu nos
              pratiques de sécurité.
            </p>
          ),
        },
        {
          id: "international",
          h: "9. Utilisateurs internationaux",
          body: (
            <p>
              Vos données peuvent être stockées et traitées hors de votre pays
              de résidence. En utilisant Topiqo, vous consentez à ces transferts,
              soumis à des garanties appropriées.
            </p>
          ),
        },
        {
          id: "changes",
          h: "10. Modifications",
          body: (
            <p>
              Nous pouvons mettre à jour cette Politique. Les changements
              importants seront communiqués dans l’app ou par e-mail.
            </p>
          ),
        },
        {
          id: "contact",
          h: "11. Contact",
          body: (
            <p>
              Pour toute question :{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">privacy@topiqo.fr</a>
            </p>
          ),
        },
      ],
    },
    en: {
      brand: "Topiqo",
      title: "Privacy Policy",
      subtitle: "How we collect, use, and protect your personal data.",
      updated: "Last updated: September 10, 2025",
      effective: "Effective date: September 10, 2025",
      toc: "Contents",
      sections: [
        {
          id: "intro",
          h: "Introduction",
          body: (
            <p>
              Topiqo ("we", "our") values your privacy and is committed to
              protecting your personal data. This Policy explains how we collect,
              use, store, and share information when you use our mobile apps,
              website, and related services (collectively, the "Service").
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Eligibility & Children’s Privacy",
          body: (
            <ul>
              <li>Topiqo is intended for users aged <strong>13 and above</strong>.</li>
              <li>
                We do not knowingly collect data from children under 13. If such
                an account is found, it will be deleted immediately along with
                its data.
              </li>
            </ul>
          ),
        },
        {
          id: "data",
          h: "2. Information We Collect",
          body: (
            <ul>
              <li><strong>Account info</strong>: name (optional), email, password, grade level.</li>
              <li><strong>Learning data</strong>: progress, history, quizzes, streaks, study time.</li>
              <li><strong>Uploaded content</strong>: notes, images, audio.
                <br />→ Raw uploads are deleted immediately after processing;
                only generated study materials (quizzes, lessons) are stored.
              </li>
              <li><strong>Focus features</strong>: Pomodoro or app-blocking stats (local; anonymized if synced).</li>
              <li><strong>Payment info</strong>: managed by Apple/Google; we never store card details.</li>
              <li><strong>Device & usage data</strong>: diagnostics, crash logs, performance metrics.</li>
            </ul>
          ),
        },
        {
          id: "use",
          h: "3. How We Use Your Information",
          body: (
            <ul>
              <li>Deliver lessons, quizzes, and focus tools.</li>
              <li>Personalize content based on grade and progress.</li>
              <li>Manage accounts and logins.</li>
              <li>Improve features and monitor performance.</li>
              <li>Ensure compliance with law and security.</li>
            </ul>
          ),
        },
        {
          id: "anonymized",
          h: "4. Anonymized & Aggregated Data",
          body: (
            <p>
              We may retain and analyze anonymized and aggregated data (e.g.,
              quiz response times, completion rates) to improve services, conduct
              research, and publish insights. This data cannot be used to
              identify you.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "5. Information Sharing",
          body: (
            <ul>
              <li><strong>Never sold</strong>.</li>
              <li>Shared only with trusted providers (hosting, analytics, transactional email).</li>
              <li>Disclosed when legally required.</li>
              <li>Transferred in case of merger/acquisition, under this Policy.</li>
              <li>With your explicit consent.</li>
            </ul>
          ),
        },
        {
          id: "retention",
          h: "6. Data Retention",
          body: (
            <ul>
              <li>Kept while your account is active.</li>
              <li>Generated study content stored until you delete it.</li>
              <li>Raw uploads deleted after immediate processing.</li>
              <li>Anonymized data may be retained indefinitely.</li>
            </ul>
          ),
        },
        {
          id: "rights",
          h: "7. Your Rights",
          body: (
            <p>
              Depending on your location, you may have GDPR/CCPA rights
              (access, correction, deletion, portability, objection, restriction).
              To exercise them, email{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">privacy@topiqo.fr</a>.  
              We may request identity verification.  
              Response within 1 month (extendable).
            </p>
          ),
        },
        {
          id: "security",
          h: "8. Data Security",
          body: (
            <p>
              We implement appropriate safeguards (TLS encryption, access
              controls, backups, audits). No system is fully secure, but we
              continuously improve our practices.
            </p>
          ),
        },
        {
          id: "international",
          h: "9. International Users",
          body: (
            <p>
              Your data may be processed outside your country of residence. By
              using Topiqo, you consent to such transfers, subject to adequate
              safeguards.
            </p>
          ),
        },
        {
          id: "changes",
          h: "10. Changes",
          body: (
            <p>
              We may update this Policy. Significant changes will be notified
              within the app or via email.
            </p>
          ),
        },
        {
          id: "contact",
          h: "11. Contact",
          body: (
            <p>
              Questions? Contact us at{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">privacy@topiqo.fr</a>.
            </p>
          ),
        },
      ],
    },
  }[lang];

  const T = i18n;

  const Section = ({ id, title, children }) => (
    <section id={id} className="privacy-card">
      <h3 className="privacy-card-title">{title}</h3>
      <div className="privacy-card-body">{children}</div>
    </section>
  );

  const ToC = () => (
    <aside className="privacy-toc" aria-label={T.toc}>
      <div className="privacy-toc-inner">
        <div className="privacy-toc-label">{T.toc}</div>
        <nav className="privacy-toc-links">
          {T.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="privacy-toc-link">
              {s.h}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );

  return (
    <main className="privacy page">
      <div className="privacy-hero">
        <div className="privacy-meta">
          <span className="privacy-chip">{T.brand}</span>
          <span className="dot" aria-hidden>•</span>
          <span className="updated">{T.updated}</span>
        </div>
        <h1 className="privacy-title">{T.title}</h1>
        <p className="privacy-subtitle">{T.subtitle}</p>
        <p className="privacy-effective">{T.effective}</p>
      </div>

      <div className="privacy-layout">
        <div className="privacy-content">
          {T.sections.map((s) => (
            <Section key={s.id} id={s.id} title={s.h}>
              {s.body}
            </Section>
          ))}
        </div>

        <ToC />
      </div>

      <footer className="privacy-note">
        <p>
          {lang === "fr"
            ? "En cas de divergence linguistique, la version française prévaut."
            : "In case of linguistic differences, the French version shall prevail."}
        </p>
      </footer>
    </main>
  );
}
