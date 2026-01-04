// src/pages/Terms.jsx
import React from "react";

export default function Terms({ lang = "fr" }) {
  const i18n = {
    fr: {
      brand: "Topiqo",
      title: "Conditions d’utilisation",
      subtitle:
        "Les règles encadrant l’accès et l’usage de l’app et du site Topiqo.",
      updated: "Dernière mise à jour : 9 septembre 2025",
      toc: "Sommaire",
      sections: [
        {
          id: "acceptance",
          h: "1. Acceptation des conditions",
          body: (
            <p>
              En créant un compte ou en utilisant l’application mobile Topiqo et les services associés (le
              « Service »), vous acceptez d’être lié·e par les présentes Conditions d’utilisation ainsi que par
              notre <a className="link" href="/privacy">Politique de confidentialité</a>. Si vous n’êtes pas
              d’accord, vous ne pouvez pas utiliser le Service.
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "2. Éligibilité et inscription au compte",
          body: (
            <>
              <ul>
                <li>Vous devez avoir au moins <strong>13 ans</strong> pour utiliser Topiqo.</li>
                <li>En vous inscrivant, vous confirmez satisfaire à cette condition d’âge.</li>
                <li>
                  Si vous êtes mineur·e, vous déclarez disposer, lorsque requis par la loi, de l’autorisation
                  d’un parent ou représentant légal.
                </li>
                <li>
                  Si nous découvrons que vous avez moins de 13 ans ou que votre âge a été{" "}
                  <em>mal déclaré</em>, nous pouvons <strong>résilier</strong> immédiatement votre compte.
                </li>
                <li>
                  Vous êtes responsable de la <strong>confidentialité</strong> de vos identifiants et de toute
                  activité réalisée avec votre compte.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "use",
          h: "3. Utilisation du Service",
          body: (
            <>
              <p>
                Topiqo fournit des outils éducatifs, notamment des notes générées par IA, des quiz, des
                exercices et des feuilles de route d’étude (parcours). Le Service est destiné à un{" "}
                <strong>usage éducatif personnel et non commercial</strong>.
              </p>

              <p>
                <strong>Important :</strong> les contenus proposés (y compris ceux générés par des technologies
                d’intelligence artificielle) sont fournis à titre d’aide à l’apprentissage. Ils ne constituent
                ni des réponses officielles, ni une correction certifiée, ni un conseil professionnel, et ne
                garantissent pas la réussite à un examen.
              </p>

              <p>Vous vous engagez à ne pas&nbsp;:</p>
              <ul>
                <li>Copier, distribuer, revendre ou monétiser les contenus de Topiqo sans autorisation.</li>
                <li>Utiliser des outils automatisés (bots, scrapers, crawlers) pour accéder au Service.</li>
                <li>Téléverser des contenus illégaux, nuisibles, trompeurs ou contrefaisants.</li>
                <li>
                  Utiliser Topiqo pour faciliter la <strong>malhonnêteté académique</strong> (par ex. tricher
                  à un examen, plagier, ou diffuser des sujets d’examen).
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "billing",
          h: "4. Abonnements et paiements",
          body: (
            <>
              <ul>
                <li>
                  Certaines fonctionnalités peuvent être gratuites ; d’autres nécessitent un abonnement
                  <strong> Premium</strong>.
                </li>
                <li>
                  Les abonnements sont gérés via <strong>Apple App Store</strong> ou{" "}
                  <strong>Google Play Store</strong> et se <strong>renouvellent automatiquement</strong> sauf
                  annulation dans les réglages de votre compte store.
                </li>
                <li>
                  Les paiements sont traités par Apple/Google ; Topiqo ne stocke pas les données de carte.
                </li>
                <li>Les remboursements suivent les politiques d’Apple/Google.</li>
              </ul>
            </>
          ),
        },
        {
          id: "ugc",
          h: "5. Contenu utilisateur",
          body: (
            <>
              <ul>
                <li>
                  Vous pouvez téléverser des notes, textes, images, ou autres entrées («{" "}
                  <em>Contenu utilisateur</em> ») pour générer du matériel d’étude.
                </li>
                <li>
                  Les <strong>téléversements bruts</strong> (notes, images, audio) sont traités en temps réel
                  puis <strong>supprimés définitivement</strong> après traitement,{" "}
                  <strong>sauf obligation légale contraire</strong>.
                </li>
                <li>
                  Les <strong>sorties générées</strong> (quiz, leçons, exercices) peuvent être enregistrées
                  dans votre compte jusqu’à suppression par vos soins.
                </li>
                <li>
                  Vous garantissez que votre contenu ne porte pas atteinte aux droits de tiers (dont droit
                  d’auteur) et que vous disposez des autorisations nécessaires pour le téléverser.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "privacy",
          h: "6. Données personnelles (RGPD) et confidentialité",
          body: (
            <>
              <p>
                Topiqo traite des données personnelles conformément au RGPD et aux lois applicables. Pour
                comprendre quelles données sont collectées, à quelles fins, et pendant combien de temps, veuillez
                consulter notre <a className="link" href="/privacy">Politique de confidentialité</a>.
              </p>
              <ul>
                <li>
                  Les traitements peuvent être fondés notamment sur l’exécution du contrat (fourniture du Service),
                  votre consentement, et le respect de nos obligations légales.
                </li>
                <li>
                  Vous disposez de droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de
                  portabilité, dans les conditions prévues par la loi.
                </li>
                <li>
                  Pour exercer vos droits ou poser une question, contactez-nous via{" "}
                  <a className="link" href="mailto:legal@topiqo.fr">legal@topiqo.fr</a>.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "dmca",
          h: "7. Droit d’auteur et procédure de notification (DMCA)",
          body: (
            <>
              <p>
                Topiqo respecte les droits de propriété intellectuelle et attend des utilisateurs qu’ils en
                fassent de même. Si vous pensez qu’un contenu disponible via Topiqo porte atteinte à vos droits,
                envoyez une <strong>notification DMCA</strong> à{" "}
                <a className="link" href="mailto:legal@topiqo.fr">legal@topiqo.fr</a> contenant&nbsp;:
              </p>
              <ol>
                <li>Votre signature physique/électronique (ou celle du représentant autorisé).</li>
                <li>L’identification de l’œuvre protégée prétendument contrefaite.</li>
                <li>
                  L’identification du contenu litigieux (avec assez de détails pour le localiser dans Topiqo).
                </li>
                <li>Vos nom, adresse postale, e-mail et numéro de téléphone.</li>
                <li>
                  Une déclaration de bonne foi indiquant que l’usage contesté n’est pas autorisé par le
                  titulaire, son agent ou la loi.
                </li>
                <li>
                  Une déclaration sous peine de parjure attestant l’exactitude des informations fournies et
                  votre qualité pour agir.
                </li>
              </ol>
              <p>
                Après réception d’un avis valide, nous pourrons retirer ou désactiver l’accès au contenu
                contesté. Les récidivistes peuvent voir leur compte suspendu ou résilié.
              </p>
            </>
          ),
        },
        {
          id: "ip",
          h: "8. Propriété intellectuelle",
          body: (
            <p>
              Tous les droits, titres et intérêts sur le Service et ses contenus (hors Contenu utilisateur)
              appartiennent à Topiqo et ses concédants. Une licence{" "}
              <strong>limitée, non exclusive et non transférable</strong> vous est concédée pour un usage d’étude
              personnelle.
            </p>
          ),
        },
        {
          id: "integrity",
          h: "9. Intégrité académique",
          body: (
            <ul>
              <li>Topiqo est conçu pour <strong>apprendre</strong>, pas pour tricher.</li>
              <li>
                Est interdite toute utilisation visant à partager des sujets d’examen, plagier ou violer les
                politiques d’honnêteté académique.
              </li>
              <li>Nous pouvons suspendre/résilier les comptes impliqués dans de tels agissements.</li>
            </ul>
          ),
        },
        {
          id: "termination",
          h: "10. Résiliation",
          body: (
            <p>
              Nous pouvons suspendre ou résilier votre accès au Service en cas de violation des présentes,
              d’abus du Service ou d’activité illégale. En cas de suppression du compte (par vous ou par nous),
              les données personnelles sont supprimées ou anonymisées conformément à notre{" "}
              <a className="link" href="/privacy">Politique de confidentialité</a> et aux obligations légales
              applicables.
            </p>
          ),
        },
        {
          id: "warranty",
          h: "11. Exclusion de garanties",
          body: (
            <p>
              Le Service est fourni « <em>en l’état</em> » sans garantie d’aucune sorte, expresse ou
              implicite, y compris, sans s’y limiter, les garanties de qualité marchande, d’adéquation à un
              usage particulier ou d’absence de contrefaçon.
            </p>
          ),
        },
        {
          id: "liability",
          h: "12. Limitation de responsabilité",
          body: (
            <p>
              Dans toute la mesure permise par la loi, Topiqo ne pourra être tenue responsable des dommages
              indirects, accessoires, consécutifs, ni des pertes de données, de profits ou d’atteinte à la
              réputation résultant de votre utilisation du Service.
            </p>
          ),
        },
        {
          id: "law",
          h: "13. Droit applicable",
          body: (
            <p>
              Les présentes sont régies par le droit français et le droit de l’Union européenne applicable.
              Tout litige relève des tribunaux compétents de <strong>Paris (France)</strong>, sauf dispositions
              légales impératives contraires.
            </p>
          ),
        },
        {
          id: "changes",
          h: "14. Modifications des conditions",
          body: (
            <p>
              Nous pouvons mettre à jour ces Conditions périodiquement. En cas de changement important, nous
              informerons les utilisateurs dans l’app ou par e-mail. La poursuite d’utilisation vaut
              acceptation des Conditions révisées.
            </p>
          ),
        },
        {
          id: "contact",
          h: "15. Nous contacter",
          body: (
            <p>
              Topiqo — Équipe juridique •{" "}
              <a className="link" href="mailto:legal@topiqo.fr">legal@topiqo.fr</a>
            </p>
          ),
        },
      ],
    },

    en: {
      brand: "Topiqo",
      title: "Terms of Use",
      subtitle: "Rules governing access to and use of the Topiqo app and website.",
      updated: "Last updated: September 9, 2025",
      toc: "Contents",
      sections: [
        {
          id: "acceptance",
          h: "1. Acceptance of the Terms",
          body: (
            <p>
              By creating an account or using the Topiqo mobile application and related services (the
              “Service”), you agree to be bound by these Terms of Use and our{" "}
              <a className="link" href="/privacy">Privacy Policy</a>. If you do not agree, you may not use
              the Service.
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "2. Eligibility & Account Registration",
          body: (
            <>
              <ul>
                <li>You must be at least <strong>13 years old</strong> to use Topiqo.</li>
                <li>By registering, you confirm you meet this minimum age requirement.</li>
                <li>
                  If you are a minor, you represent that you have permission from a parent or legal guardian
                  where required by law.
                </li>
                <li>
                  If we discover you are under 13 or misrepresented your age, we may <strong>terminate</strong>{" "}
                  your account.
                </li>
                <li>You are responsible for keeping your login credentials confidential.</li>
              </ul>
            </>
          ),
        },
        {
          id: "use",
          h: "3. Use of the Service",
          body: (
            <>
              <p>
                Topiqo provides educational tools, including AI-generated notes, quizzes, exercises, and study
                roadmaps (learning paths). The Service is for{" "}
                <strong> personal, non-commercial educational use</strong> only.
              </p>

              <p>
                <strong>Important:</strong> Content provided through Topiqo (including content generated using AI)
                is offered as learning support only. It is not official exam material, not a certified answer key,
                and does not guarantee exam results.
              </p>

              <p>You agree not to:</p>
              <ul>
                <li>Copy, distribute, resell, or monetize Topiqo content without authorization.</li>
                <li>Use automated tools (bots, scrapers, crawlers) to access the Service.</li>
                <li>Upload illegal, harmful, misleading, or infringing content.</li>
                <li>
                  Use Topiqo to facilitate <strong>academic dishonesty</strong> (e.g., cheating, plagiarism, or
                  sharing exam prompts).
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "billing",
          h: "4. Subscriptions & Payments",
          body: (
            <>
              <ul>
                <li>Some features may be free; premium features require a paid <strong>Premium</strong> subscription.</li>
                <li>
                  Subscriptions are managed via the <strong>Apple App Store</strong> or{" "}
                  <strong>Google Play Store</strong> and <strong>auto-renew</strong> unless cancelled in your
                  store account settings.
                </li>
                <li>Payments are processed by Apple/Google; Topiqo does not store card details.</li>
                <li>Refunds are subject to Apple/Google policies.</li>
              </ul>
            </>
          ),
        },
        {
          id: "ugc",
          h: "5. User Content",
          body: (
            <>
              <ul>
                <li>
                  You may upload notes, text, images, audio, or other inputs (“<em>User Content</em>”) to
                  generate study materials.
                </li>
                <li>
                  <strong>Raw uploads</strong> are processed in real time and then <strong>permanently deleted</strong>{" "}
                  after processing, <strong>unless legal obligations require otherwise</strong>.
                </li>
                <li>
                  <strong>Generated outputs</strong> (quizzes, lessons, exercises) may be stored in your
                  account until you delete them.
                </li>
                <li>
                  You remain responsible for ensuring your content does not infringe third-party rights
                  (including copyright) and that you have the necessary permissions to upload it.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "privacy",
          h: "6. Personal Data (GDPR) & Privacy",
          body: (
            <>
              <p>
                Topiqo processes personal data in accordance with the GDPR and applicable laws. To understand what
                data is collected, for what purposes, and how long it is retained, please consult our{" "}
                <a className="link" href="/privacy">Privacy Policy</a>.
              </p>
              <ul>
                <li>
                  Processing may rely on contract performance (providing the Service), your consent, and compliance
                  with legal obligations.
                </li>
                <li>
                  You may have rights of access, rectification, erasure, restriction, objection, and portability,
                  as provided by law.
                </li>
                <li>
                  To exercise your rights or ask questions, contact{" "}
                  <a className="link" href="mailto:legal@topiqo.fr">legal@topiqo.fr</a>.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "dmca",
          h: "7. Copyright & DMCA Notice",
          body: (
            <>
              <p>
                Topiqo respects intellectual property rights and expects users to do the same. If you believe
                content available through Topiqo infringes your copyright, send a <strong>DMCA Notice</strong>{" "}
                to <a className="link" href="mailto:legal@topiqo.fr">legal@topiqo.fr</a> including:
              </p>
              <ol>
                <li>Your physical/electronic signature (or that of an authorized representative).</li>
                <li>Identification of the copyrighted work claimed to have been infringed.</li>
                <li>
                  Identification of the material that is claimed to be infringing (with enough detail to
                  locate it within Topiqo).
                </li>
                <li>Your name, mailing address, e-mail, and telephone number.</li>
                <li>
                  A good-faith statement that the disputed use is not authorized by the copyright owner, its
                  agent, or the law.
                </li>
                <li>
                  A statement under penalty of perjury that the information is accurate and that you are the
                  copyright owner or authorized to act on their behalf.
                </li>
              </ol>
              <p>
                Upon a valid notice, we may remove or disable access to the disputed content. Repeat infringers
                may have their accounts suspended or terminated.
              </p>
            </>
          ),
        },
        {
          id: "ip",
          h: "8. Intellectual Property",
          body: (
            <p>
              All rights, title, and interest in the Service and its content (excluding User Content) remain
              with Topiqo and its licensors. You are granted a{" "}
              <strong>limited, non-exclusive, non-transferable</strong> license for personal study purposes only.
            </p>
          ),
        },
        {
          id: "integrity",
          h: "9. Academic Integrity",
          body: (
            <ul>
              <li>Topiqo is designed to help you <strong>learn</strong>, not to cheat.</li>
              <li>
                Using the Service to share exam content, plagiarize, or violate academic honesty policies is
                strictly prohibited.
              </li>
              <li>We may suspend or terminate accounts engaged in academic dishonesty.</li>
            </ul>
          ),
        },
        {
          id: "termination",
          h: "10. Termination",
          body: (
            <p>
              We may suspend or terminate your access to the Service if you violate these Terms, abuse the
              Service, or engage in illegal activity. If an account is deleted (by you or by us), personal data
              is deleted or anonymized in accordance with our{" "}
              <a className="link" href="/privacy">Privacy Policy</a> and applicable legal obligations.
            </p>
          ),
        },
        {
          id: "warranty",
          h: "11. Disclaimer of Warranties",
          body: (
            <p>
              The Service is provided <em>“as is”</em> without warranties of any kind, express or implied,
              including but not limited to merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          ),
        },
        {
          id: "liability",
          h: "12. Limitation of Liability",
          body: (
            <p>
              To the fullest extent permitted by law, Topiqo shall not be liable for any indirect, incidental,
              or consequential damages, or any loss of data, profits, or goodwill arising from your use of the
              Service.
            </p>
          ),
        },
        {
          id: "law",
          h: "13. Governing Law",
          body: (
            <p>
              These Terms are governed by French law and applicable EU law. Any dispute shall be submitted to
              the exclusive jurisdiction of the courts of <strong>Paris, France</strong>, unless mandatory law
              provides otherwise.
            </p>
          ),
        },
        {
          id: "changes",
          h: "14. Changes to the Terms",
          body: (
            <p>
              We may update these Terms from time to time. For material changes, we will notify users in-app
              or by e-mail. Continued use after changes take effect constitutes acceptance of the revised
              Terms.
            </p>
          ),
        },
        {
          id: "contact",
          h: "15. Contact us",
          body: (
            <p>
              Topiqo — Legal Team •{" "}
              <a className="link" href="mailto:legal@topiqo.fr">legal@topiqo.fr</a>
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

  const ToC = () => (
    <aside className="legal-toc" aria-label={T.toc}>
      <div className="legal-toc-inner">
        <div className="legal-toc-label">{T.toc}</div>
        <nav className="legal-toc-links">
          {T.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="legal-toc-link">
              {s.h}
            </a>
          ))}
        </nav>
      </div>
    </aside>
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

      <div className="legal-layout">
        <div className="legal-content">
          {T.sections.map((s) => (
            <Section key={s.id} id={s.id} title={s.h}>
              {s.body}
            </Section>
          ))}
        </div>

        <ToC />
      </div>

      <footer className="legal-note">
        <p>
          Ces conditions complètent nos <a className="link" href="/legal">Mentions légales</a> et notre{" "}
          <a className="link" href="/privacy">Politique de confidentialité</a>.
        </p>
      </footer>
    </main>
  );
}
