# Hiero Todolist

## Pré-requis

#### ⚠ Il faut les serveurs back-end et front-end avant de continuer.

## Backend (json-server)

### Installation du serveur

Installer les packages npm du projet (en se plaçant dans le dossier votreRépertoire/hiero_todolist/backend):
- `npm i`

Dans le même dossier, lancer le serveur :
- `npm start`

Le serveur est disponible dans l'url <a href='http://localhost:3000'>http://localhost:3000</a>

### Fonctionnement des routes

- Liste des tâches `/tasks` [GET]
- Créer une tâche `/tasks` [POST]
- Modifier une tâche `/tasks/:id` [PUT]
- Supprimer une tâche `/tasks/:id` [DELETE]


## Frontend (Angular)

Installer les packages npm du projet (en se plaçant dans le dossier votreRépertoire/hiero_todolist/frontend):
- `npm i`

Dans le même dossier, lancer le serveur :
- `npm start`

Le serveur est disponible dans l'url <a href='http://localhost:4200'>http://localhost:4200</a>

### Fonctionnement des routes

- Liste des tâches `/tasks`
- Créer une tâche `/tasks/create`
- Modifier une tâche `/tasks/:id`
- Supprimer une tâche `/tasks/:id`

