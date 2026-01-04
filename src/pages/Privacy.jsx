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
              Topiqo (« nous », « notre », « nos ») attache une grande importance à la protection de votre
              vie privée. La présente Politique de confidentialité explique comment nous collectons,
              utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez nos
              applications mobiles, notre site web et les services associés (collectivement, le « Service »).
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Éligibilité et protection des mineurs",
          body: (
            <ul>
              <li>Topiqo est destiné aux utilisateurs âgés de <strong>13 ans et plus</strong>.</li>
              <li>
                Nous ne collectons pas sciemment de données personnelles concernant des enfants de moins
                de 13 ans.
              </li>
              <li>
                Si nous découvrons qu’un utilisateur a moins de 13 ans, le compte concerné sera supprimé
                ainsi que les données associées, conformément à la loi.
              </li>
              <li>
                Les utilisateurs mineurs déclarent disposer, lorsque requis, de l’autorisation d’un parent
                ou représentant légal.
              </li>
            </ul>
          ),
        },
        {
          id: "data",
          h: "2. Données que nous collectons",
          body: (
            <>
              <ul>
                <li>
                  <strong>Données de compte</strong> : adresse e-mail, mot de passe chiffré, nom ou pseudonyme
                  (facultatif), année ou niveau scolaire.
                </li>
                <li>
                  <strong>Données d’apprentissage</strong> : progression, résultats de quiz, historique
                  d’utilisation, séries d’apprentissage, temps passé.
                </li>
                <li>
                  <strong>Contenus téléversés</strong> : notes, textes, images ou audios fournis par
                  l’utilisateur pour générer des contenus pédagogiques.
                  <br />
                  → Les fichiers bruts sont supprimés après traitement, sauf obligation légale contraire.
                </li>
                <li>
                  <strong>Contenus générés</strong> : leçons, quiz, exercices et parcours créés à partir des
                  entrées utilisateur, conservés jusqu’à suppression par l’utilisateur.
                </li>
                <li>
                  <strong>Données de paiement</strong> : gérées exclusivement par Apple App Store ou Google
                  Play Store. Topiqo ne stocke aucune donnée bancaire.
                </li>
                <li>
                  <strong>Données techniques</strong> : logs, diagnostics, données de performance et de
                  sécurité nécessaires au bon fonctionnement du Service.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "use",
          h: "3. Finalités de l’utilisation des données",
          body: (
            <ul>
              <li>Fournir l’accès au Service et à ses fonctionnalités éducatives.</li>
              <li>Créer et personnaliser les parcours d’apprentissage.</li>
              <li>Gérer les comptes utilisateurs et l’authentification.</li>
              <li>Améliorer la qualité, la sécurité et la performance du Service.</li>
              <li>Respecter nos obligations légales et réglementaires.</li>
            </ul>
          ),
        },
        {
          id: "legal",
          h: "4. Bases légales du traitement (RGPD)",
          body: (
            <ul>
              <li>L’exécution du contrat (fourniture du Service).</li>
              <li>Le consentement de l’utilisateur lorsque requis.</li>
              <li>Le respect des obligations légales applicables.</li>
              <li>Notre intérêt légitime à améliorer et sécuriser le Service.</li>
            </ul>
          ),
        },
        {
          id: "anonymized",
          h: "5. Données anonymisées et agrégées",
          body: (
            <p>
              Nous pouvons utiliser des données anonymisées et agrégées (par exemple, taux de complétion,
              temps moyen d’apprentissage) à des fins statistiques, de recherche et d’amélioration du
              Service. Ces données ne permettent en aucun cas de vous identifier.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "6. Partage des données",
          body: (
            <ul>
              <li>Vos données ne sont <strong>jamais vendues</strong>.</li>
              <li>
                Elles peuvent être partagées avec des prestataires de confiance (hébergement, analytics,
                e-mails transactionnels), strictement nécessaires au fonctionnement du Service.
              </li>
              <li>Elles peuvent être divulguées si la loi l’exige.</li>
              <li>
                En cas de fusion, acquisition ou restructuration, les données resteraient soumises à la
                présente Politique.
              </li>
            </ul>
          ),
        },
        {
          id: "retention",
          h: "7. Durée de conservation",
          body: (
            <ul>
              <li>Données conservées tant que le compte est actif.</li>
              <li>Contenus générés conservés jusqu’à suppression par l’utilisateur.</li>
              <li>Données techniques conservées selon des durées proportionnées.</li>
              <li>Données anonymisées pouvant être conservées sans limite de durée.</li>
            </ul>
          ),
        },
        {
          id: "rights",
          h: "8. Vos droits",
          body: (
            <p>
              Conformément au RGPD, vous disposez de droits d’accès, de rectification, de suppression,
              d’opposition, de limitation et de portabilité de vos données.
              <br />
              Vous pouvez exercer ces droits en écrivant à{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">
                privacy@topiqo.fr
              </a>.
              Une vérification d’identité pourra être demandée. Nous répondons dans un délai maximal d’un
              mois, prolongeable si nécessaire.
            </p>
          ),
        },
        {
          id: "security",
          h: "9. Sécurité des données",
          body: (
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées (chiffrement,
              contrôles d’accès, sauvegardes, audits). Malgré ces efforts, aucun système n’est totalement
              sécurisé et nous améliorons continuellement nos pratiques.
            </p>
          ),
        },
        {
          id: "international",
          h: "10. Transferts internationaux",
          body: (
            <p>
              Vos données peuvent être traitées en dehors de votre pays de résidence. Ces transferts sont
              encadrés par des garanties appropriées conformément au droit européen.
            </p>
          ),
        },
        {
          id: "changes",
          h: "11. Modifications de la Politique",
          body: (
            <p>
              Nous pouvons modifier cette Politique de confidentialité. En cas de changement significatif,
              nous vous en informerons via l’application ou par e-mail.
            </p>
          ),
        },
        {
          id: "contact",
          h: "12. Contact",
          body: (
            <p>
              Pour toute question relative à la protection des données, contactez-nous à{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">
                privacy@topiqo.fr
              </a>.
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
              Topiqo ("we", "our") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, store, and protect your personal data when you use our applications, website,
              and related services (the “Service”).
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Eligibility and Children’s Privacy",
          body: (
            <ul>
              <li>Topiqo is intended for users aged <strong>13 and above</strong>.</li>
              <li>We do not knowingly collect personal data from children under 13.</li>
              <li>If such data is discovered, the account and associated data will be deleted.</li>
            </ul>
          ),
        },
        {
          id: "data",
          h: "2. Data We Collect",
          body: (
            <ul>
              <li><strong>Account data</strong>: email address, encrypted password, optional name, grade level.</li>
              <li><strong>Learning data</strong>: progress, quiz results, usage history.</li>
              <li><strong>Uploaded content</strong>: notes, text, images, audio (raw uploads deleted after processing).</li>
              <li><strong>Generated content</strong>: lessons, quizzes, exercises stored until deletion.</li>
              <li><strong>Payment data</strong>: processed by Apple or Google only.</li>
              <li><strong>Technical data</strong>: logs, diagnostics, performance metrics.</li>
            </ul>
          ),
        },
        {
          id: "use",
          h: "3. How We Use Data",
          body: (
            <ul>
              <li>Provide and operate the Service.</li>
              <li>Personalize learning paths.</li>
              <li>Manage authentication and accounts.</li>
              <li>Improve security and performance.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          ),
        },
        {
          id: "legal",
          h: "4. Legal Bases (GDPR)",
          body: (
            <ul>
              <li>Contract performance.</li>
              <li>User consent where required.</li>
              <li>Legal obligations.</li>
              <li>Legitimate interests.</li>
            </ul>
          ),
        },
        {
          id: "anonymized",
          h: "5. Anonymized and Aggregated Data",
          body: (
            <p>
              We may use anonymized and aggregated data for analytics, research, and service improvement.
              This data does not identify individual users.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "6. Data Sharing",
          body: (
            <ul>
              <li>Data is <strong>never sold</strong>.</li>
              <li>Shared only with trusted service providers.</li>
              <li>Disclosed when legally required.</li>
              <li>Transferred in case of corporate transactions.</li>
            </ul>
          ),
        },
        {
          id: "retention",
          h: "7. Data Retention",
          body: (
            <ul>
              <li>Data kept while the account is active.</li>
              <li>Generated content stored until deletion.</li>
              <li>Anonymized data may be retained indefinitely.</li>
            </ul>
          ),
        },
        {
          id: "rights",
          h: "8. Your Rights",
          body: (
            <p>
              You have rights of access, correction, deletion, objection, restriction, and portability under
              GDPR. To exercise these rights, contact{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">
                privacy@topiqo.fr
              </a>.
            </p>
          ),
        },
        {
          id: "security",
          h: "9. Data Security",
          body: (
            <p>
              We use appropriate technical and organizational safeguards. However, no system is completely
              secure.
            </p>
          ),
        },
        {
          id: "international",
          h: "10. International Transfers",
          body: (
            <p>
              Your data may be processed outside your country, subject to appropriate legal safeguards.
            </p>
          ),
        },
        {
          id: "changes",
          h: "11. Changes",
          body: (
            <p>
              We may update this Policy. Significant changes will be notified.
            </p>
          ),
        },
        {
          id: "contact",
          h: "12. Contact",
          body: (
            <p>
              Contact us at{" "}
              <a href="mailto:privacy@topiqo.fr" className="link">
                privacy@topiqo.fr
              </a>.
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
