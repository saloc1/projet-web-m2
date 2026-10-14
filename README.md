# README

**Pitch** 

> De nombreux étudiants et jeunes actifs font face à des contraintes d’espace dans leur logement. Notre application permettra de d’aménager en quelques clics votre intérieur et de résoudre tous vos problèmes d’aménagement en moins de dix minutes. 
>
> Le principe est simple : L'utilisateur renseigne les dimensions de son logement et place ses meubles dans un plan à l'échelle. L'outil résout les contraintes d'agencement avant d'acheter ou de tout déménager.

Code source : [https\://github.com/saloc1/projet-web-m2](https://github.com/saloc1/projet-web-m2) 

**Liste des fonctionnalités**

* Aménagement 2D de pièces d’une maison   
* Personnalisation des meubles, des pièces  
* Création de comptes pour sauvegarder, partager les créations  
* Templates d’aménagements

**Lot 1**

* Page d’accueil  
  * Nouveau projet  
    * Nombre de pièces  
    * Nom, longueur et largeur de chaque pièce, rectangulaires uniquement  
    * Sélection d’un template d’aménagements prédéfinis

* Page d’édition  
  * Catégories d’objets :   
    * Mobilier salon  
    * Mobilier chambre  
    * Mobilier cuisine  
    * Mobilier salle de bain  
    * Portes, fenêtres, radiateurs  
  * Placement des objets dans la pièce, vue du dessus 2D  
  * Rotation des objets  
  * Sauvegarde du projet dans la base de données

* Page aide  
  * Documentation sur l’utilisation de l’appli

**Lot 2**

* Page de connexion  
  * Système de comptes permettant de sauvegarder les projets

* Page d’accueil  
  * Projets enregistrés sur le compte

* Page d’édition  
  * Plus de paramétrage des objets placés  
    * Couleurs  
    * Choix des dimensions libres  
    * Opacité  
  * Personnalisation de la pièce avec différents sols  
  * Partager le projet  
  * Exporter le projet en images

**Lot 3**

* Page d’édition  
  * Plus de diversité d’objets   
  * Pièces de formes différentes (Polygones…)  
  * Plus d’option de personnalisation des pièces

Scénario d’utilisation : 

1. L’utilisateur se connecte à son profil ou crée un compte à la première utilisation.  
2. Un tableau de bord lui permet de consulter l’historique de ses réalisations ou de démarrer un nouveau projet en appuyant sur le bouton “Création de projet”.   
3. Une page de configuration permet de préciser les caractéristiques de son logement : nombre de pièces, surface des pièces. Il peut également choisir de démarrer à partir de configurations prédéfinies (presets).  
4. L'éditeur permet à l’utilisateur de créer les plans de son appartement. Il aménage son espace en y ajoutant du mobilier

Enfin, l'utilisateur peut cliquer à tout moment sur l'icône « i » située en haut à gauche de l'écran pour accéder au centre d'aide. Cette page regroupe une fiche d’aide des astuces, renseignements, questions-réponses avec textes, visuels et schémas explicatifs.