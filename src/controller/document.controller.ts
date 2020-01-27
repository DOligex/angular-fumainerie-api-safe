import { adminMiddleware } from './../core/admin.middleware';
import { DocumentService } from './../services/document.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import express from 'express';
import multer from 'multer';
import { env } from '../core/environnement';
import jwt from 'express-jwt';

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

  router.post('/file', adminMiddleware, upload.single('file'), async (req, res, next) => {
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

