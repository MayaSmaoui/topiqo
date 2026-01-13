// src/pages/DeleteAccount.jsx
import React from "react";
import "./DeleteAccount.css";

function DeleteAccount({ lang = "fr" }) {
  const isFr = lang === "fr";

  return (
    <main className="page delete-page">
      <section className="delete-card">
        <h1>
          {isFr ? "Suppression de compte – Topiqo" : "Account Deletion – Topiqo"}
        </h1>

        {/* FR / EN intro */}
        <p className="delete-intro">
          {isFr
            ? "Les utilisateurs de l’application Topiqo peuvent demander la suppression de leur compte et des données associées à tout moment."
            : "Users of the Topiqo app can request the deletion of their account and associated data at any time."}
        </p>

        <section className="delete-section">
          <h2>{isFr ? "Comment procéder" : "How to proceed"}</h2>
          <p>
            {isFr
              ? "Envoyez un email à l’adresse suivante en précisant l’adresse email associée à votre compte Topiqo :"
              : "Send an email to the following address, specifying the email address linked to your Topiqo account:"}
          </p>
          <p className="delete-email">
            <a href="mailto:contact@topiqo.fr">contact@topiqo.fr</a>
          </p>
        </section>

        <section className="delete-section">
          <h2>{isFr ? "Données supprimées" : "Data that will be deleted"}</h2>
          <ul>
            <li>{isFr ? "Compte utilisateur" : "User account"}</li>
            <li>
              {isFr
                ? "Progression d’apprentissage"
                : "Learning progress"}
            </li>
            <li>
              {isFr
                ? "Contenus fournis par l’utilisateur (texte, cours, images, audio)"
                : "Content provided by the user (text, courses, images, audio)"}
            </li>
            <li>
              {isFr
                ? "Identifiants internes"
                : "Internal identifiers"}
            </li>
          </ul>
        </section>

        <section className="delete-section">
          <h2>{isFr ? "Délai de traitement" : "Processing time"}</h2>
          <p>
            {isFr
              ? "La suppression est effectuée dans un délai maximal de 30 jours."
              : "Deletion is processed within a maximum of 30 days."}
          </p>
        </section>

        <section className="delete-section">
          <h2>{isFr ? "Données conservées" : "Data kept after deletion"}</h2>
          <p>
            {isFr
              ? "Aucune donnée personnelle n’est conservée après la suppression du compte, sauf obligation légale."
              : "No personal data is kept after account deletion, except where retention is required by law."}
          </p>
        </section>
      </section>
    </main>
  );
}

export default DeleteAccount;

