# Hiero Todolist

## Backend

### Installation du serveur

Installer le package npm 'json-server' en global :
- `npm i -g json-server`

Lancer le serveur depuis le répertoire 'votreRépertoire/hiero_todolist/backend' :
- `json-server --watch db.json`

Le serveur est disponible dans l'url <a href=''>http://localhost:3000</a>

### Fonctionnement des routes

- Liste des tâches `/tasks` [GET]
- Créer une tâche `/tasks` [POST]
- Détails d'une tâche `/task/:id` [GET]
- Modifier une tâche `/task/:id` [PUT]
- Supprimer une tâche `/task/:id` [DELETE]
