import { AuthController } from './controller/auth.controller';
import express from 'express';
import loaders from './loaders';

import { WitnessController } from './controller/wildness.controller';
import { EventController } from './controller/event.controller';
import { DocumentController } from './controller/document.controller';
import { UserController } from './controller/user.controller';
import { HomeController } from './controller/home.controller';
import { DrainingController } from './controller/draining.controller';
import { QuestionController } from './controller/question.controller';
import { DrainingRequestController } from './controller/draining-request.controller';
import { OccupantController } from './controller/occupant.controller';
import { SlotController } from './controller/slot.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();

    // Chargement des différents loader
    await loaders(app);

    // Ajout des différentes route de votre application
    const doc = new DocumentController(app);
    const drain = new DrainingController(app);
    const drainingRequest = new DrainingRequestController(app);
    const event = new EventController(app);
    const home = new HomeController(app);
    const occupant = new OccupantController(app);
    const question = new QuestionController(app);
    const slot = new SlotController(app);
    const use = new UserController(app);
    // UserController(app);
    // const witness = new WitnessController(app);
    WitnessController(app);
    AuthController(app);

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server is running'));
  }

startServer();
