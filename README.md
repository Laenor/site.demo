# Installation et test de site.demo

## Installation de l'application

- Créez l'image docker en utilisant **docker-compose.yml** à la racine du projet.

- Installez les dépendances **composer** grace à la commande `php composer.phar install`.

- Dans le fichier **etc/hosts**, ajoutez `127.0.0.1 site.demo` pour faire la redirection.

## Test de l'application

- Accedez au site via l'adresse [site.demo](http://site.demo).

- Comparez les données affichées entre [api.demo:8181](http://api.demo:8181) et [site.demo](http://site.demo).