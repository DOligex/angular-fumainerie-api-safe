import { SlotController } from './controller/slot.controller';
import { AuthController } from './controller/auth.controller';
import express from 'express';
import loaders from './loaders';

import { WitnessController } from './controller/witness.controller';
import { EventController } from './controller/event.controller';
import { DocumentController } from './controller/document.controller';
import { UserController } from './controller/user.controller';
import { HomeController } from './controller/home.controller';
import { DrainingController } from './controller/draining.controller';
import { QuestionController } from './controller/question.controller';
import { DrainingRequestController } from './controller/draining-request.controller';
import { OccupantController } from './controller/occupant.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différents loader
    await loaders(app);

    // Ajout des différentes route de votre application
    DocumentController(app);
    DrainingController(app);
    DrainingRequestController(app);
    EventController(app);
    HomeController(app);
    OccupantController(app);
    QuestionController(app);
    SlotController(app);
    UserController(app);
    WitnessController(app);
    AuthController(app);

    // Démarrage du serveur une fois que tout est correctement init
    // tslint:disable-next-line: no-console
    app.listen(3000, () => console.log('Express server is running'));
  }

startServer();
