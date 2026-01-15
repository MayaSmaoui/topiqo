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
              Topiqo (« <strong>Topiqo</strong> », « nous », « notre », « nos »)
              accorde une importance particulière à la protection de votre vie
              privée. La présente Politique de confidentialité explique{" "}
              <strong>quelles données personnelles</strong> nous collectons,
              <strong>pourquoi</strong> nous les collectons, <strong>comment</strong> nous les utilisons
              et <strong>quels sont vos droits</strong>, conformément au Règlement
              général sur la protection des données (« RGPD ») et au droit français
              applicable.
              <br />
              <br />
              Topiqo agit en qualité de{" "}
              <strong>responsable de traitement</strong> pour les données
              personnelles collectées via nos applications mobiles, notre site web
              et nos services associés (le « Service »).
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Éligibilité et protection des mineurs",
          body: (
            <ul>
              <li>
                La création d’un compte et l’utilisation des fonctionnalités
                personnalisées de Topiqo nécessitent que l’utilisateur ait{" "}
                <strong>au moins 13 ans</strong>.
              </li>
              <li>
                Nous ne collectons pas sciemment de données personnelles concernant
                des enfants de <strong>moins de 13 ans</strong>. Si nous apprenons
                qu’un utilisateur a moins de 13 ans, nous supprimerons son compte
                ainsi que les données associées dans les meilleurs délais.
              </li>
              <li>
                Les utilisateurs mineurs (par exemple, de moins de 18 ans) déclarent
                disposer, lorsque la loi l’exige, de l’autorisation d’un parent ou
                représentant légal pour utiliser le Service.
              </li>
              <li>
                Si vous pensez qu’un enfant de moins de 13 ans nous a fourni des
                données personnelles, veuillez nous contacter à{" "}
                <a href="mailto:contact@topiqo.fr" className="link">
                  contact@topiqo.fr
                </a>{" "}
                afin que nous puissions prendre les mesures appropriées.
              </li>
            </ul>
          ),
        },
        {
          id: "data",
          h: "2. Données que nous collectons",
          body: (
            <>
              <p>
                Nous collectons uniquement les données nécessaires au bon
                fonctionnement du Service, à la personnalisation de votre
                expérience d’apprentissage et au respect de nos obligations
                légales. Les catégories de données suivantes peuvent être
                collectées&nbsp;:
              </p>
              <ul>
                <li>
                  <strong>Données de compte</strong> : adresse e-mail, mot de passe
                  chiffré, nom ou pseudonyme (facultatif), niveau ou année scolaire,
                  paramètres de langue, préférences de profil.
                </li>
                <li>
                  <strong>Données d’apprentissage</strong> : progression, résultats
                  de quiz, historique d’étude, parcours complétés, temps passé,
                  matières suivies, réponses aux exercices, ainsi que les
                  statistiques d’utilisation du Service nécessaires pour vous
                  proposer une expérience adaptée.
                </li>
                <li>
                  <strong>Contenus téléversés par l’utilisateur</strong> : documents,
                  notes, textes, images ou fichiers audio soumis afin de générer des
                  parcours d’apprentissage personnalisés, des fiches ou des quiz.
                  <br />
                  → Les fichiers bruts sont traités de manière automatisée puis{" "}
                  <strong>supprimés après traitement</strong>, sauf obligation légale
                  contraire.
                </li>
                <li>
                  <strong>Contenus générés</strong> : leçons, quiz, exercices et
                  parcours d’apprentissage personnalisés générés à partir de vos
                  entrées et stockés dans votre compte jusqu’à suppression par vos
                  soins.
                </li>
                <li>
                  <strong>Données de paiement</strong> : les paiements et
                  abonnements sont gérés exclusivement par l’{" "}
                  <strong>Apple App Store</strong> ou le{" "}
                  <strong>Google Play Store</strong>. Topiqo ne stocke{" "}
                  <strong>aucune donnée bancaire</strong> (numéro de carte, CVV, etc.).
                  <br />
                  → Nous pouvons conserver l’{" "}
                  <strong>identifiant de transaction</strong> (par exemple Apple
                  Transaction ID ou équivalent) associé à vos achats et abonnements
                  afin de vérifier les reçus, gérer les abonnements, traiter le
                  support client et lutter contre la fraude.
                </li>
                <li>
                  <strong>Données techniques</strong> : informations relatives à
                  l’appareil (modèle, système d’exploitation), identifiants
                  techniques, journaux d’erreurs, données de performance, adresses
                  IP, ainsi que certaines données de navigation nécessaires à la
                  sécurité, à la prévention des abus et à l’amélioration du Service.
                </li>
                <li>
                  <strong>Données de communication</strong> : contenu des messages
                  envoyés à notre support, demandes d’aide, informations échangées
                  avec nous par e-mail ou via l’application.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "ai",
          h: "3. Contenus téléversés et intelligence artificielle",
          body: (
            <p>
              Lorsque vous téléversez des documents, notes ou autres contenus, ces
              éléments sont utilisés <strong>uniquement</strong> pour fournir les
              fonctionnalités du Service, notamment la génération de parcours
              d’apprentissage, de fiches, de quiz ou d’explications personnalisées,
              à votre demande.
              <br />
              <br />
              Ces contenus peuvent être traités par des{" "}
              <strong>technologies d’intelligence artificielle</strong> (IA) afin de
              produire les résultats que vous sollicitez. Les documents téléversés
              sont traités de manière automatisée,{" "}
              <strong>ne sont pas utilisés pour entraîner nos modèles d’IA ni pour
              entraîner des modèles de tiers de manière identifiante</strong>, et
              sont supprimés après traitement, sauf obligation légale contraire.
              <br />
              <br />
              Nous ne vendons pas vos contenus ni vos données à des tiers. Nous
              pouvons toutefois partager certaines données strictement nécessaires
              avec des prestataires techniques agissant en qualité de{" "}
              <strong>sous-traitants</strong>, dans le seul but de fournir le
              Service.
            </p>
          ),
        },
        {
          id: "use",
          h: "4. Finalités de l’utilisation des données",
          body: (
            <>
              <p>Nous utilisons vos données personnelles pour les finalités suivantes&nbsp;:</p>
              <ul>
                <li>
                  <strong>Fournir et exploiter le Service</strong> : création et
                  gestion de votre compte, accès aux fonctionnalités, génération de
                  contenus pédagogiques personnalisés.
                </li>
                <li>
                  <strong>Personnaliser votre apprentissage</strong> : adapter le
                  niveau, le rythme et le contenu des exercices, parcours et
                  recommandations selon votre progression et votre profil.
                </li>
                <li>
                  <strong>Assurer la sécurité</strong> : détection et prévention des
                  abus, fraudes, accès non autorisés, et protection de l’intégrité
                  du Service.
                </li>
                <li>
                  <strong>Améliorer le Service</strong> : analyses statistiques,
                  mesures d’audience, tests de nouvelles fonctionnalités, afin
                  d’optimiser l’ergonomie, les performances et la qualité des
                  contenus.
                </li>
                <li>
                  <strong>Support client</strong> : réponse à vos questions,
                  assistance technique, gestion des demandes d’exercice de droits
                  (RGPD).
                </li>
                <li>
                  <strong>Respect de nos obligations légales</strong> : gestion des
                  demandes des autorités, conformité fiscale et comptable,
                  conservation de certaines données lorsque la loi l’exige.
                </li>
              </ul>
              <p>
                Nous ne procédons pas à de{" "}
                <strong>décisions automatisées produisant des effets juridiques</strong> à votre égard (par
                exemple, aucune décision juridique ou similaire n’est prise
                uniquement par un algorithme sur la base de vos données).
              </p>
            </>
          ),
        },
        {
          id: "legal",
          h: "5. Bases légales du traitement (RGPD)",
          body: (
            <>
              <p>
                Conformément au RGPD, nous nous appuyons sur les bases légales
                suivantes pour traiter vos données&nbsp;:
              </p>
              <ul>
                <li>
                  <strong>Exécution du contrat</strong> : le traitement est
                  nécessaire pour fournir le Service, créer et gérer votre compte,
                  générer des contenus pédagogiques et assurer le bon
                  fonctionnement de l’application.
                </li>
                <li>
                  <strong>Consentement</strong> : dans certains cas (par exemple,
                  pour certaines communications ou certaines fonctionnalités
                  optionnelles), nous pouvons vous demander votre consentement,
                  que vous pouvez retirer à tout moment sans affecter la licéité du
                  traitement antérieur.
                </li>
                <li>
                  <strong>Obligations légales</strong> : nous pouvons être amenés à
                  conserver ou communiquer certaines données pour répondre à des
                  obligations légales, réglementaires ou à des demandes
                  d’autorités.
                </li>
                <li>
                  <strong>Intérêts légitimes</strong> : amélioration et sécurisation
                  du Service, prévention de la fraude, défense de nos droits en
                  justice, dans la mesure où ces intérêts ne prévalent pas sur vos
                  droits et libertés.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "anonymized",
          h: "6. Données anonymisées et agrégées",
          body: (
            <p>
              Nous pouvons utiliser des données <strong>anonymisées</strong> ou{" "}
              <strong>agrégées</strong> (qui ne permettent pas de vous identifier)
              à des fins de statistiques, de recherche, de reporting ou
              d’amélioration du Service. Ces données peuvent être conservées sans
              limite de durée, dès lors qu’elles ne permettent pas de vous
              identifier directement ou indirectement.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "7. Partage des données et destinataires",
          body: (
            <>
              <p>
                Nous ne vendons <strong>jamais</strong> vos données personnelles.
                Vos données peuvent toutefois être partagées avec les catégories de
                destinataires suivantes&nbsp;:
              </p>
              <ul>
                <li>
                  <strong>Prestataires techniques et sous-traitants</strong> :
                  hébergeurs, outils d’analytique, prestataires de sécurité,
                  services de messagerie ou de support, qui traitent vos données
                  pour notre compte et selon nos instructions.
                </li>
                <li>
                  <strong>Plateformes de paiement</strong> : Apple App Store et
                  Google Play Store, qui gèrent vos paiements et abonnements selon
                  leurs propres conditions d’utilisation et politiques de
                  confidentialité.
                </li>
                <li>
                  <strong>Autorités administratives ou judiciaires</strong> :
                  lorsque la loi l’exige ou pour faire valoir nos droits, répondre
                  à une injonction, à une requête ou à une procédure légale.
                </li>
                <li>
                  <strong>Opérations de restructuration</strong> : en cas de
                  fusion, acquisition ou cession d’activité, vos données pourraient
                  être transférées au nouvel exploitant, dans le respect de la
                  présente Politique.
                </li>
              </ul>
              <p>
                Dans tous les cas, nous veillons à ne partager que les données{" "}
                <strong>strictement nécessaires</strong> à la finalité poursuivie,
                et à ce que les destinataires offrent des garanties appropriées en
                matière de sécurité et de confidentialité.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          h: "8. Durée de conservation",
          body: (
            <>
              <p>
                Nous conservons vos données personnelles pendant une durée
                limitée, proportionnée aux finalités pour lesquelles elles sont
                traitées&nbsp;:
              </p>
              <ul>
                <li>
                  <strong>Compte utilisateur</strong> : les données de compte sont
                  conservées tant que votre compte est actif. En cas de
                  suppression, certaines données peuvent être archivées
                  temporairement pour respecter nos obligations légales ou
                  résoudre d’éventuels litiges.
                </li>
                <li>
                  <strong>Contenus générés</strong> : les leçons, quiz, exercices et
                  parcours sont conservés dans votre compte jusqu’à ce que vous les
                  supprimiez ou supprimiez votre compte.
                </li>
                <li>
                  <strong>Données techniques et journaux</strong> : conservés pour
                  une durée limitée nécessaire à la sécurité, à la maintenance, à
                  la détection de fraude et au bon fonctionnement du Service.
                </li>
                <li>
                  <strong>Données anonymisées</strong> : pouvant être conservées
                  sans limite de durée, puisqu’elles ne permettent plus de vous
                  identifier.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "rights",
          h: "9. Vos droits (RGPD)",
          body: (
            <>
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos
                données personnelles&nbsp;:
              </p>
              <ul>
                <li>
                  <strong>Droit d’accès</strong> : obtenir la confirmation que des
                  données vous concernant sont traitées et en recevoir une copie.
                </li>
                <li>
                  <strong>Droit de rectification</strong> : demander la correction
                  de données inexactes ou incomplètes.
                </li>
                <li>
                  <strong>Droit à l’effacement</strong> (« droit à l’oubli ») :
                  demander la suppression de vos données, dans les limites prévues
                  par la loi.
                </li>
                <li>
                  <strong>Droit à la limitation</strong> : demander la limitation
                  temporaire du traitement de vos données dans certaines
                  situations.
                </li>
                <li>
                  <strong>Droit d’opposition</strong> : vous opposer, pour des
                  raisons tenant à votre situation particulière, à certains
                  traitements fondés sur notre intérêt légitime.
                </li>
                <li>
                  <strong>Droit à la portabilité</strong> : recevoir les données
                  que vous nous avez fournies dans un format structuré, couramment
                  utilisé et lisible par machine, et les transmettre à un autre
                  responsable de traitement lorsque c’est techniquement possible.
                </li>
                <li>
                  <strong>Droit de retirer votre consentement</strong> : lorsque le
                  traitement est fondé sur votre consentement, vous pouvez le
                  retirer à tout moment, sans affecter la licéité du traitement
                  déjà effectué.
                </li>
              </ul>
              <p>
                Pour exercer vos droits, vous pouvez nous contacter à{" "}
                <a href="mailto:contact@topiqo.fr" className="link">
                  contact@topiqo.fr
                </a>
                . Une vérification d’identité pourra être demandée. Nous
                répondrons à votre demande dans un délai d’environ{" "}
                <strong>un mois</strong>, prolongeable si nécessaire conformément
                au RGPD.
                <br />
                <br />
                Vous disposez également du droit d’introduire une réclamation
                auprès d’une <strong>autorité de contrôle</strong>, par exemple la{" "}
                <strong>CNIL</strong> en France (<em>www.cnil.fr</em>), si vous
                estimez que vos droits ne sont pas respectés.
              </p>
            </>
          ),
        },
        {
          id: "security",
          h: "10. Sécurité des données",
          body: (
            <p>
              Nous mettons en œuvre des <strong>mesures techniques et organisationnelles appropriées</strong>
              pour protéger vos données contre la perte, l’accès non autorisé, la
              divulgation, l’altération ou la destruction. Cela inclut notamment
              le chiffrement des données en transit, des contrôles d’accès et des
              procédures internes de sécurité.
              <br />
              <br />
              Aucun système n’étant totalement sécurisé, nous ne pouvons pas
              garantir une sécurité absolue, mais nous nous engageons à{" "}
              <strong>améliorer en continu</strong> nos pratiques et à réagir
              rapidement en cas d’incident de sécurité.
            </p>
          ),
        },
        {
          id: "international",
          h: "11. Transferts internationaux",
          body: (
            <p>
              Vos données peuvent être traitées ou hébergées en dehors de votre
              pays de résidence, notamment dans l’Espace économique européen
              (EEE) ou, dans certains cas, dans des pays tiers. Dans ce cas, nous
              mettons en place des <strong>garanties appropriées</strong> (telles
              que des clauses contractuelles types approuvées par la Commission
              européenne ou des mécanismes équivalents) afin d’assurer un niveau
              de protection équivalent à celui exigé par le droit européen.
            </p>
          ),
        },
        {
          id: "changes",
          h: "12. Modifications de la Politique",
          body: (
            <p>
              Nous pouvons mettre à jour la présente Politique de confidentialité
              afin de refléter des évolutions légales, techniques ou
              organisationnelles. En cas de changement important, nous vous
              informerons via l’application, par e-mail ou par un message
              clairement visible. La version la plus récente est toujours
              disponible sur notre site.
            </p>
          ),
        },
        {
          id: "contact",
          h: "13. Contact",
          body: (
            <p>
              Pour toute question ou demande relative à la protection de vos
              données personnelles, vous pouvez nous contacter à&nbsp;:
              <br />
              <a href="mailto:contact@topiqo.fr" className="link">
                contact@topiqo.fr
              </a>
              .
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
              Topiqo (<strong>“Topiqo”</strong>, “we”, “us”, “our”) is committed
              to protecting your privacy. This Privacy Policy explains{" "}
              <strong>what personal data</strong> we collect,{" "}
              <strong>why</strong> we collect it, <strong>how</strong> we use it,
              and <strong>what rights you have</strong> under the EU General Data
              Protection Regulation (“GDPR”) and applicable laws.
              <br />
              <br />
              Topiqo acts as the <strong>data controller</strong> for personal
              data processed through our mobile applications, website, and related
              services (the “Service”).
            </p>
          ),
        },
        {
          id: "eligibility",
          h: "1. Eligibility and Children’s Privacy",
          body: (
            <ul>
              <li>
                Account creation and the use of personalized features require
                users to be at least <strong>13 years old</strong>.
              </li>
              <li>
                We do not knowingly collect personal data from children under{" "}
                <strong>13</strong>. If we become aware that a user is under 13,
                we will delete their account and associated data as soon as
                reasonably possible.
              </li>
              <li>
                Minors (for example, under 18) represent that they have obtained
                parental or guardian consent where required by law to use the
                Service.
              </li>
              <li>
                If you believe a child under 13 has provided us with personal
                data, please contact us at{" "}
                <a href="mailto:contact@topiqo.fr" className="link">
                  contact@topiqo.fr
                </a>{" "}
                so we can take appropriate action.
              </li>
            </ul>
          ),
        },
        {
          id: "data",
          h: "2. Data We Collect",
          body: (
            <>
              <p>
                We collect only the data necessary to operate the Service, provide
                personalized learning, and comply with our legal obligations. The
                categories of data we may collect include:
              </p>
              <ul>
                <li>
                  <strong>Account data</strong>: email address, encrypted password,
                  optional name or nickname, grade level or academic stage,
                  language settings, and basic profile preferences.
                </li>
                <li>
                  <strong>Learning data</strong>: progress, quiz results, study
                  history, completed paths, time spent, subjects studied, answers
                  to exercises, and usage statistics needed to adapt your learning
                  experience.
                </li>
                <li>
                  <strong>User uploads</strong>: documents, notes, text, images, or
                  audio files that you submit in order to generate personalized
                  learning paths, summaries, or quizzes.
                  <br />
                  → Raw uploads are processed automatically and{" "}
                  <strong>deleted after processing</strong>, unless we are legally
                  required to retain them.
                </li>
                <li>
                  <strong>Generated content</strong>: lessons, quizzes, exercises,
                  and study paths that are generated from your inputs and stored in
                  your account until you delete them.
                </li>
                <li>
                  <strong>Payment data</strong>: purchases and subscriptions are
                  handled exclusively by the <strong>Apple App Store</strong> or{" "}
                  <strong>Google Play Store</strong>. Topiqo{" "}
                  <strong>does not store card details</strong> (card number, CVV,
                  etc.).
                  <br />
                  → We may store a <strong>transaction identifier</strong> (such as
                  the Apple Transaction ID or similar) linked to your purchases and
                  subscriptions, in order to validate receipts, manage
                  subscriptions, prevent fraud, and provide customer support.
                </li>
                <li>
                  <strong>Technical data</strong>: device information (model,
                  operating system), technical identifiers, error logs, performance
                  metrics, IP addresses, and limited usage data required for
                  security, abuse prevention, and service improvement.
                </li>
                <li>
                  <strong>Communication data</strong>: content of messages you send
                  to our support team, help requests, and other information you
                  choose to share with us via email or in-app contact.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "ai",
          h: "3. Uploaded Content and Artificial Intelligence",
          body: (
            <p>
              When you upload documents, notes, or other materials, they are used{" "}
              <strong>solely</strong> to provide the Service, in particular to
              generate learning paths, summaries, quizzes, and explanations at
              your request.
              <br />
              <br />
              These materials may be processed using{" "}
              <strong>artificial intelligence (AI)</strong> technologies to
              produce the outputs you ask for. Uploaded content is processed
              automatically, <strong>is not used to train our AI models or third-party models in an identifiable way</strong>, and is
              deleted after processing unless we are required by law to retain it.
              <br />
              <br />
              We do not sell your content or your data. We may, however, share
              certain data strictly necessary with technical service providers
              acting as <strong>processors</strong>, solely for the purpose of
              delivering the Service.
            </p>
          ),
        },
        {
          id: "use",
          h: "4. How We Use Data",
          body: (
            <>
              <p>We use your personal data for the following purposes:</p>
              <ul>
                <li>
                  <strong>To provide and operate the Service</strong>: create and
                  manage your account, deliver core features, and generate
                  personalized educational content.
                </li>
                <li>
                  <strong>To personalize your learning experience</strong>: adapt
                  the level, pace, and topics of exercises, paths, and
                  recommendations based on your progress and profile.
                </li>
                <li>
                  <strong>To ensure security</strong>: detect and prevent abuse,
                  fraud, unauthorized access, and protect the integrity of the
                  Service.
                </li>
                <li>
                  <strong>To improve the Service</strong>: perform analytics,
                  measure usage, test new features, and optimize usability,
                  performance, and content quality.
                </li>
                <li>
                  <strong>To provide support</strong>: respond to your questions,
                  offer technical assistance, and handle data protection requests.
                </li>
                <li>
                  <strong>To comply with legal obligations</strong>: respond to
                  requests from authorities, meet accounting and tax obligations,
                  and retain certain data as required by law.
                </li>
              </ul>
              <p>
                We do not engage in{" "}
                <strong>automated decision-making that produces legal or similarly
                significant effects</strong> solely based on your data (for example,
                no fully automated legal decisions).
              </p>
            </>
          ),
        },
        {
          id: "legal",
          h: "5. Legal Bases for Processing",
          body: (
            <>
              <p>
                Under the GDPR, we rely on the following legal bases to process
                your data:
              </p>
              <ul>
                <li>
                  <strong>Contract performance</strong>: processing is necessary to
                  provide the Service, manage your account, and generate
                  educational content at your request.
                </li>
                <li>
                  <strong>Consent</strong>: in some cases (for example, certain
                  communications or optional features), we may ask for your
                  consent. You can withdraw your consent at any time without
                  affecting the lawfulness of prior processing.
                </li>
                <li>
                  <strong>Legal obligations</strong>: we may process or retain
                  certain data to comply with legal, regulatory, or law-enforcement
                  requirements.
                </li>
                <li>
                  <strong>Legitimate interests</strong>: improving and securing the
                  Service, preventing fraud, and defending our legal rights, to the
                  extent that such interests are not overridden by your rights and
                  freedoms.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "anonymized",
          h: "6. Anonymized and Aggregated Data",
          body: (
            <p>
              We may use <strong>anonymized</strong> or{" "}
              <strong>aggregated</strong> data (which does not identify you) for
              statistics, research, reporting, or to improve the Service. Such
              data may be retained indefinitely, as long as it does not allow you
              to be identified directly or indirectly.
            </p>
          ),
        },
        {
          id: "sharing",
          h: "7. Data Sharing and Recipients",
          body: (
            <>
              <p>
                We <strong>do not sell</strong> your personal data. Your data may
                be shared with the following categories of recipients:
              </p>
              <ul>
                <li>
                  <strong>Technical service providers and processors</strong>:
                  hosting providers, analytics tools, security services, messaging
                  and support platforms, which process data on our behalf and in
                  accordance with our instructions.
                </li>
                <li>
                  <strong>Payment platforms</strong>: Apple App Store and Google
                  Play Store, which process your purchases and subscriptions under
                  their own terms and privacy policies.
                </li>
                <li>
                  <strong>Public authorities</strong>: where required by law or to
                  protect our rights, respond to legal requests, or comply with
                  judicial or administrative orders.
                </li>
                <li>
                  <strong>Corporate transactions</strong>: in the event of a
                  merger, acquisition, or transfer of business, your data may be
                  transferred to the new operator, subject to this Privacy Policy.
                </li>
              </ul>
              <p>
                In all cases, we share only the data{" "}
                <strong>strictly necessary</strong> for the relevant purpose and
                require recipients to provide appropriate security and
                confidentiality safeguards.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          h: "8. Data Retention",
          body: (
            <>
              <p>
                We retain your personal data only for as long as necessary for the
                purposes described in this Policy:
              </p>
              <ul>
                <li>
                  <strong>Account data</strong>: kept while your account is active.
                  If you delete your account, some data may be archived for a
                  limited period to comply with legal requirements or resolve
                  disputes.
                </li>
                <li>
                  <strong>Generated content</strong>: lessons, quizzes, exercises,
                  and paths are kept in your account until you delete them or
                  delete your account.
                </li>
                <li>
                  <strong>Technical and log data</strong>: retained for a limited
                  period necessary for security, maintenance, fraud detection, and
                  service operation.
                </li>
                <li>
                  <strong>Anonymized data</strong>: may be kept indefinitely, as it
                  no longer identifies you.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "rights",
          h: "9. Your Rights (GDPR)",
          body: (
            <>
              <p>
                Under the GDPR, you have the following rights regarding your
                personal data:
              </p>
              <ul>
                <li>
                  <strong>Right of access</strong>: obtain confirmation that we
                  process your data and receive a copy of such data.
                </li>
                <li>
                  <strong>Right to rectification</strong>: request correction of
                  inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Right to erasure</strong> (“right to be forgotten”):
                  request deletion of your data, subject to legal limitations.
                </li>
                <li>
                  <strong>Right to restriction</strong>: request temporary
                  restriction of processing in certain situations.
                </li>
                <li>
                  <strong>Right to object</strong>: object, on grounds relating to
                  your particular situation, to certain processing activities based
                  on our legitimate interests.
                </li>
                <li>
                  <strong>Right to data portability</strong>: receive the data you
                  provided to us in a structured, commonly used, and
                  machine-readable format, and transmit it to another controller
                  where technically feasible.
                </li>
                <li>
                  <strong>Right to withdraw consent</strong>: where processing is
                  based on your consent, you may withdraw it at any time, without
                  affecting the lawfulness of prior processing.
                </li>
              </ul>
              <p>
                To exercise your rights, please contact us at{" "}
                <a href="mailto:contact@topiqo.fr" className="link">
                  contact@topiqo.fr
                </a>
                . We may need to verify your identity before responding. We will
                respond within approximately <strong>one month</strong>, which may
                be extended as allowed by the GDPR.
                <br />
                <br />
                You also have the right to lodge a complaint with a{" "}
                <strong>supervisory authority</strong> (for example, the{" "}
                <strong>CNIL</strong> in France – <em>www.cnil.fr</em>) if you
                believe your rights have not been respected.
              </p>
            </>
          ),
        },
        {
          id: "security",
          h: "10. Data Security",
          body: (
            <p>
              We implement <strong>appropriate technical and organizational
              measures</strong> to protect your data against loss, unauthorized
              access, disclosure, alteration, or destruction. This includes
              encryption of data in transit, access controls, and internal
              security procedures.
              <br />
              <br />
              No system is completely secure, but we are committed to{" "}
              <strong>continuous improvement</strong> of our security practices and to
              responding quickly in case of a security incident.
            </p>
          ),
        },
        {
          id: "international",
          h: "11. International Transfers",
          body: (
            <p>
              Your data may be processed or hosted outside your country of
              residence, including within the European Economic Area (EEA) or, in
              some cases, in other countries. Where data is transferred outside
              the EEA, we implement <strong>appropriate safeguards</strong> (such
              as EU Standard Contractual Clauses or equivalent mechanisms) to
              ensure a level of protection essentially equivalent to that required
              under EU law.
            </p>
          ),
        },
        {
          id: "changes",
          h: "12. Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time to reflect legal,
              technical, or business developments. When changes are material, we
              will notify you via the app, by email, or through a prominent notice.
              The most recent version will always be available on our website.
            </p>
          ),
        },
        {
          id: "contact",
          h: "13. Contact",
          body: (
            <p>
              If you have any questions or requests regarding this Privacy Policy
              or our data protection practices, you can contact us at:
              <br />
              <a href="mailto:contact@topiqo.fr" className="link">
                contact@topiqo.fr
              </a>
              .
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
          <span className="dot" aria-hidden>
            •
          </span>
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
