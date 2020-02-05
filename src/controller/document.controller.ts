import jwt from 'express-jwt';
import express, { Application, Router } from 'express';
import multer from 'multer';
import { commonController } from '../core/common.controller';
import { env } from '../core/environnement';
import { UserFunction } from '../core/user-function.enum';
import { attachUser } from './../core/attach-user.middleware';
import { checkFunction as checkFunction } from './../core/check-role-middleware';
import { connected } from './../core/connected-middleware';
import { DocumentService } from './../services/document.service';

const app = express();
// Le controller vous servira à réceptionner les requêtes associées aux documents
// @param app l'application express

export const DocumentController = (app: Application) => {
  let router = Router();
  const service = new DocumentService();

  router.get('/accueil', async (req, res, next) => {
    try {
      const result = await service.getAll();
      res.send(result);
    } catch (error) {
      res.status(404).send('Récupération impossible');
    }
  });

  router.get('/validations', async (req, res) => {
    try {
        const result = await service.getValide();
        res.send(result);
    } catch (error) {
        res.status(404).send('source non trouvée');
    }
});

  router.get('/recherche/:word', async (req, res) => {
      const word = req.params.word;
      try {
          const result = await service.getBySearch(word);
          res.send(result);
      } catch (error) {
          res.status(404).send('La recherche n\'a rien donné');
      }
});

  const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
      cb(null, env.uploadFolder + '/');
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.pdf' );
    },
  });
  const upload = multer({ storage,
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(pdf)$/)) {
        return cb(new Error('Seul les formats PDF sont acceptés'), false);
      }
      cb(null, true);
    },
  });
//   Ici, au lieu d'avoir un middleware par role (admin / user ... ) Vous pouvez faire un middleware paramétrable:
//    checkRole
//   On pourra regarder ensemble pour la mise en place si vous voulez
  router.use(connected());
  router.use(attachUser());

  router.post('/file', checkFunction(UserFunction.ADMIN), upload.single('file'), async (req, res, next) => {
      const file = req.file;
      if (!file) {
        const error = new Error('Please upload a file');
        res.sendStatus(400);
        return next(error);
      }
      console.log(req.file);
      // const document = new Document();
      req.body.link = req.file.filename;
      const result = await service.create(req.body);
      res.send(result);
  });

  router = commonController(app, service, router);
  app.use('/document', router);
};
