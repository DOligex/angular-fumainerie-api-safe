import { AuthController } from './controller/auth.controller';
import express from 'express';
import loaders from './loaders';

import { WitnessController } from './controller/wildness.controller';
import { EventController } from './controller/event.controller';
import { DocumentController } from './controller/document.controller';
import { SportController } from './controller/sport.controller';
import { UserController } from './controller/user.controller';
import { HomeController } from './controller/home.controller';
import { DrainingController } from './controller/draining.controller';
import { QuestionController } from './controller/question.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différent loader
    await loaders(app);

    // Ajout des différentes route de votre application
    const doc = new DocumentController(app); // a reproduire
    HomeController(app);
    SportController(app);
    UserController(app);
    EventController(app);
    WitnessController(app);
    DrainingController(app);
    AuthController(app);
    QuestionController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server is running'));
  }

startServer();
