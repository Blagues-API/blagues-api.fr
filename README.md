# Blagues-api.fr

Site de l'API de Blagues françaises collaborative et Open Source

[![Jokes](https://img.shields.io/badge/dynamic/json?color=informational&label=jokes%20&query=%24.count&suffix=%20&url=https%3A%2F%2Fwww.blagues-api.fr%2Fapi%2Fcount)](https://www.blagues-api.fr)
[![Contributeurs](https://img.shields.io/github/contributors/Blagues-API/blagues-api.fr?style=flat)](https://github.com/Blagues-API/blagues-api.fr/graphs/contributors)
[![Stars](https://img.shields.io/github/stars/Blagues-API/blagues-api.fr?style=flat)](https://github.com/Blagues-API/blagues-api.fr/stargazers)
[![Licence](https://img.shields.io/github/license/Blagues-API/blagues-api.fr?style=flat)](https://github.com/Blagues-API/blagues-api.fr/blob/master/LICENCE)

---
## Utilisation

Retrouvez la documentation de l'API ainsi des modules directement sur le site [blagues-api.fr](https://www.blagues-api.fr).

## Contribuer

Le projet est open-source ce qui signifie que vous pouvez contribuer et faire évoluer le projet.<br>
Rendez-vous sur la page des [issues](https://github.com/Blagues-API/blagues-api.fr/issues), sélectionnez une issue qui vous intéresse et faites une demande pour y être assigné.
> Les issues ayant le label `good first issue` sont les plus simples.

### Installation de Docker

Le projet fonctionne avec Docker, il vous permettra d'obtenir le même environnement qu'en production.<br>
Si vous êtes sous Windows ou Mac, il vous faudra installer [Docker Desktop](https://www.docker.com/products/docker-desktop).

⚠️ Si vous souhaitez tout de même contribuer au projet sans utiliser Docker qui n'est absolument pas recommandé, lancez l'instance de développement avec la commande `yarn dev`.

### Installation des dépendances du projet

```bash
yarn install # npm install
```

### Configuration de l'api

Pour lancer le site avec Docker il vous faut cloner le [repo principal](https://github.com/Blagues-API/blagues-api) dans le meme dossier ou vous avez cloner le site puis activer le service api comme ci-dessous dans votre .env

```
api-service=true
```

---
⚠️ Les commandes suivantes sont a faire dans le dossier principal de l'api

### Génération de l'image de développement Docker

```bash
yarn run dev:build # npm run dev:build
```

### Lancement de l'instance de développement

```bash
yarn dev # npm run dev
```

🎉 Votre instance est lancée, vous pouvez dès à présent vous lancer dans le développement de l'issue choisie

---

## Support

Voici quelques liens pour obtenir de l'aide :

- Site web:
  <a href="https://www.blagues-api.fr" target="_blank">`www.blagues-api.fr`</a>
- Discord:
  <a href="https://discord.gg/PPNpVaF" target="_blank">`Blagues API`</a>
- Twitter:
  <a href="http://twitter.com/DraftMan_Dev" target="_blank">`@DraftMan_Dev`</a>

---

## Licence

[![Licence](https://img.shields.io/github/license/Blagues-API/api?style=flat)](https://github.com/Blagues-API/api/blob/master/LICENCE)

Copyright 2020-2023 ©
<a href="https://www.draftman.fr" target="_blank">DraftMan</a>.
