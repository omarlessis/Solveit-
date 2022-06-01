# Solveit-
Afin d’économiser le temps de recherche et d’améliorer la communication entre les équipes de développement et de partager leurs expériences. ETC Tunisie a proposé un projet sous le  nom de SolveIT, une plateforme dédiée seulement aux ses employées, permet de :  • Résoudre des bugs informatiques • Poser des questions  • Répondre aux questions • Valider une réponse • Consulter la liste des collègues de travail • Consulter la liste des publication (question/réponses) de chaque collègue • Chercher des questions à partir d’une base de connaissance  • Filtrer les publications selon la spécialité de l’employée  • Recevoir des notifications  • Obtenir des informations dans le domaine d’informatique.  • Voter pour des questions ou des réponses.  • Voter contre des questions ou des réponses.  • Discuter avec SolveBot (Chatbot)

# solveit


>>>>Chatbot Deployment with Flask 


This gives 2 deployment options:
- Deploy within Flask app with jinja2 template
- Serve only the Flask prediction API. The used html and javascript files can be included in any Frontend application (with only a slight modification) and can run completely separate from the Flask App then.

## Initial Setup:
This repo currently contains the starter files.

Clone repo and create a virtual environment
```
$ git clone https://github.com/python-engineer/chatbot-deployment.git
$ cd chatbot-deployment
$ python3 -m venv venv
$ . venv/bin/activate
```
Install dependencies
```
$ (venv) pip install Flask torch torchvision nltk
```
Install nltk package
```
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```
Modify `intents.json` with different intents and responses for your Chatbot

Run
```
$ (venv) python train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.
```
$ (venv) python chat.py
```
to run connect chatbot with front
```
$ (venv) python chat.py 
```

Run front-end
```
$ cd front
$ npm install
$ npm run start
```

Run back-end 
```
$ npm install 
$ npm run start

```
