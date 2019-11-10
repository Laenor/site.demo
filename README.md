# Installation et test de site.demo

## Installation de l'application

- Créez l'image docker en utilisant **docker-compose.yml** à la racine du projet.

- Installez **composer** grace à la commande `php composer.phar install`.

- Créez l'hote virtuel suivant dans le fichier **etc/hosts**:`127.0.0.1 site.demo`.

## Test de l'application

- Accedez au site via l'adresse [site.demo](http://site.demo).

- Comparez les données affichées entre [api.demo:8181](http://api.demo:8181) et [site.demo](http://site.demo).