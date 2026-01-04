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
              Topiqo (« nous », « notre », « nos ») accorde une importance
              particulière à la protection de votre vie privée. La présente
              Politique de confidentialité décrit la manière dont nous
              collectons, utilisons, stockons et protégeons vos données
              personnelles lorsque vous utilisez nos applications mobiles,
              notre site web et nos services associés (le « Service »).
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Éligibilité et protection des mineurs",
          body: (
            <ul>
              <li>
                Topiqo est accessible à un large public. Toutefois, la création
                d’un compte et l’utilisation des fonctionnalités personnalisées
                nécessitent que l’utilisateur ait <strong>au moins 13 ans</strong>.
              </li>
              <li>
                Nous ne collectons pas sciemment de données personnelles
                concernant des enfants de moins de 13 ans.
              </li>
              <li>
                Si nous découvrons qu’un compte appartient à un utilisateur de
                moins de 13 ans, ce compte sera supprimé ainsi que les données
                associées, conformément à la loi.
              </li>
              <li>
                Les utilisateurs mineurs déclarent disposer, lorsque requis, de
                l’autorisation d’un parent ou représentant légal.
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
                  <strong>Données de compte</strong> : adresse e-mail, mot de
                  passe chiffré, nom ou pseudonyme (facultatif), niveau ou année
                  scolaire.
                </li>
                <li>
                  <strong>Données d’apprentissage</strong> : progression,
                  résultats de quiz, historique d’étude, séries, temps passé.
                </li>
                <li>
                  <strong>Contenus téléversés par l’utilisateur</strong> :
                  documents, notes, textes, images ou fichiers audio soumis afin
                  de générer des parcours d’apprentissage personnalisés.
                  <br />
                  → Les fichiers bruts sont traités de manière automatisée puis
                  supprimés après traitement, sauf obligation légale contraire.
                </li>
                <li>
                  <strong>Contenus générés</strong> : leçons, quiz, exercices et
                  parcours d’apprentissage personnalisés, stockés dans le
                  compte utilisateur jusqu’à suppression par celui-ci.
                </li>
                <li>
                  <strong>Données de paiement</strong> : les paiements et
                  abonnements sont gérés exclusivement par Apple App Store ou
                  Google Play Store. Topiqo ne stocke aucune donnée bancaire.
                  <br />
                  → Nous pouvons conserver l’<strong>identifiant de transaction</strong>{" "}
                  (Apple Transactional ID) associé à vos achats et abonnements
                  afin de traiter la gestion des abonnements, vérifier les reçus,
                  détecter la fraude et gérer le support client.
                </li>
                <li>
                  <strong>Données techniques</strong> : journaux techniques,
                  diagnostics, données de performance et de sécurité nécessaires
                  au bon fonctionnement du Service.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "ai",
          h: "3. Traitement des contenus téléversés et intelligence artificielle",
          body: (
            <p>
              Lorsque vous téléversez des documents, notes ou autres contenus,
              ceux-ci sont utilisés <strong>uniquement</strong> afin de générer,
              à votre demande, des parcours d’apprentissage et contenus
              pédagogiques personnalisés.
              <br />
              <br />
              Ces contenus peuvent être traités par des technologies
              d’intelligence artificielle afin de fournir les fonctionnalités
              du Service. Les documents téléversés sont traités de manière
              automatisée, <strong>ne sont pas utilisés pour entraîner des
              modèles d’intelligence artificielle</strong>, et sont supprimés
              après traitement, sauf obligation légale contraire.
            </p>
          ),
        },
        {
          id: "use",
          h: "4. Finalités de l’utilisation des données",
          body: (
            <ul>
              <li>Fournir et exploiter le Service.</li>
              <li>Générer et personnaliser les parcours d’apprentissage.</li>
              <li>Gérer les comptes et l’authentification.</li>
              <li>Améliorer la qualité, la sécurité et la performance du Service.</li>
              <li>Respecter nos obligations légales et réglementaires.</li>
            </ul>
          ),
        },
        {
          id: "legal",
          h: "5. Bases légales du traitement (RGPD)",
          body: (
            <ul>
              <li>L’exécution du contrat (fourniture du Service).</li>
              <li>Le consentement de l’utilisateur lorsque requis.</li>
              <li>Le respect des obligations légales.</li>
              <li>Notre intérêt légitime à améliorer et sécuriser le Service.</li>
            </ul>
          ),
        },
        {
          id: "anonymized",
          h: "6. Données anonymisées et agrégées",
          body: (
            <p>
              Nous pouvons utiliser des données anonymisées et agrégées à des
              fins statistiques, de recherche et d’amélioration du Service.
              Ces données ne permettent pas de vous identifier.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "7. Partage des données",
          body: (
            <ul>
              <li>Vos données ne sont <strong>jamais vendues</strong>.</li>
              <li>
                Elles peuvent être partagées avec des prestataires de confiance
                strictement nécessaires au fonctionnement du Service.
              </li>
              <li>Elles peuvent être divulguées si la loi l’exige.</li>
              <li>
                En cas de fusion ou acquisition, les données resteraient
                soumises à la présente Politique.
              </li>
            </ul>
          ),
        },
        {
          id: "retention",
          h: "8. Durée de conservation",
          body: (
            <ul>
              <li>Données conservées tant que le compte est actif.</li>
              <li>Contenus générés conservés jusqu’à suppression par l’utilisateur.</li>
              <li>Données techniques conservées pour des durées proportionnées.</li>
              <li>Données anonymisées pouvant être conservées sans limite.</li>
            </ul>
          ),
        },
        {
          id: "rights",
          h: "9. Vos droits",
          body: (
            <p>
              Conformément au RGPD, vous disposez de droits d’accès,
              de rectification, de suppression, d’opposition, de limitation et
              de portabilité.
              <br />
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@topiqo.fr" className="link">
                contact@topiqo.fr
              </a>.
              Une vérification d’identité pourra être demandée. Nous répondons
              dans un délai maximal d’un mois.
            </p>
          ),
        },
        {
          id: "security",
          h: "10. Sécurité des données",
          body: (
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées.
              Aucun système n’étant totalement sécurisé, nous améliorons
              continuellement nos pratiques.
            </p>
          ),
        },
        {
          id: "international",
          h: "11. Transferts internationaux",
          body: (
            <p>
              Vos données peuvent être traitées en dehors de votre pays de
              résidence, sous réserve de garanties appropriées conformément
              au droit applicable.
            </p>
          ),
        },
        {
          id: "changes",
          h: "12. Modifications",
          body: (
            <p>
              Nous pouvons modifier cette Politique de confidentialité.
              Les changements significatifs seront communiqués via
              l’application ou par e-mail.
            </p>
          ),
        },
        {
          id: "contact",
          h: "13. Contact",
          body: (
            <p>
              Pour toute question relative à la protection des données,
              contactez-nous à{" "}
              <a href="mailto:contact@topiqo.fr" className="link">
                contact@topiqo.fr
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
              Topiqo ("we", "our") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, store, and
              protect your personal data when you use our services.
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Eligibility and Children’s Privacy",
          body: (
            <ul>
              <li>
                Topiqo is accessible to a broad audience; however, account
                creation and personalized features require users to be at
                least <strong>13 years old</strong>.
              </li>
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
              <li><strong>Account data</strong>: email, encrypted password, optional name, grade level.</li>
              <li><strong>Learning data</strong>: progress, quiz results, study history.</li>
              <li>
                <strong>User uploads</strong>: documents, notes, text, images, or audio submitted to generate
                personalized learning paths.
                <br />
                → Raw uploads are deleted after processing unless legal obligations require otherwise.
              </li>
              <li><strong>Generated content</strong>: lessons, quizzes, exercises stored until deletion.</li>
              <li>
                <strong>Payment data</strong>: purchases are processed by Apple App Store or Google Play.
                We do not store card details.
                <br />
                → We may store the <strong>transaction identifier</strong> (Apple Transactional ID) associated
                with purchases/subscriptions to manage subscriptions, validate receipts, prevent fraud, and
                provide customer support.
              </li>
              <li><strong>Technical data</strong>: logs, diagnostics, performance and security data.</li>
            </ul>
          ),
        },
        {
          id: "ai",
          h: "3. Uploaded Content and Artificial Intelligence",
          body: (
            <p>
              Uploaded documents and materials are used solely to generate personalized learning paths and
              content at the user’s request. They may be processed using artificial intelligence technologies
              to provide the Service.
              <br />
              <br />
              Uploaded materials are processed automatically, are not used to train artificial intelligence
              models, and are deleted after processing unless legal obligations require otherwise.
            </p>
          ),
        },
        {
          id: "use",
          h: "4. How We Use Data",
          body: (
            <ul>
              <li>Provide and operate the Service.</li>
              <li>Personalize learning experiences.</li>
              <li>Manage accounts and authentication.</li>
              <li>Improve security and performance.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          ),
        },
        {
          id: "legal",
          h: "5. Legal Bases",
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
          h: "6. Anonymized Data",
          body: (
            <p>
              We may use anonymized and aggregated data for analytics and service improvement purposes.
              This data does not identify individual users.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "7. Data Sharing",
          body: (
            <ul>
              <li>Data is never sold.</li>
              <li>Shared only with trusted service providers as needed to run the Service.</li>
              <li>Disclosed when legally required.</li>
              <li>Transferred in case of corporate transactions under this Policy.</li>
            </ul>
          ),
        },
        {
          id: "retention",
          h: "8. Data Retention",
          body: (
            <ul>
              <li>Data retained while the account is active.</li>
              <li>Generated content stored until deletion.</li>
              <li>Anonymized data may be retained indefinitely.</li>
            </ul>
          ),
        },
        {
          id: "rights",
          h: "9. Your Rights",
          body: (
            <p>
              You have rights under GDPR including access, correction, deletion, objection, restriction,
              and portability. Contact{" "}
              <a href="mailto:contact@topiqo.fr" className="link">
                contact@topiqo.fr
              </a>{" "}
              to exercise your rights.
            </p>
          ),
        },
        {
          id: "security",
          h: "10. Data Security",
          body: (
            <p>
              We implement appropriate safeguards, but no system is completely secure.
            </p>
          ),
        },
        {
          id: "international",
          h: "11. International Transfers",
          body: (
            <p>
              Data may be processed outside your country, subject to appropriate safeguards.
            </p>
          ),
        },
        {
          id: "changes",
          h: "12. Changes",
          body: (
            <p>
              We may update this Policy and will notify users of significant changes.
            </p>
          ),
        },
        {
          id: "contact",
          h: "13. Contact",
          body: (
            <p>
              Contact us at{" "}
              <a href="mailto:contact@topiqo.fr" className="link">
                contact@topiqo.fr
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
