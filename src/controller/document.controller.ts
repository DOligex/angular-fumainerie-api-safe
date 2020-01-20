import { DocumentService } from './../services/document.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';
import { adminMiddleware } from '../core/admin.middleware';
import express from 'express';
import multer from 'multer';

const app = express();
// Le controller vous servira à réceptionner les requêtes associées aux documents
// @param app l'application express

export const DocumentController = (app: Application) => {
    const service = new DocumentService();
    const router = commonController(app, service);

    router.use(adminMiddleware); // appel du middleware vérifiant le role du user

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    const storage = multer.diskStorage({
        destination: (req, file, cb ) => {
          cb(null, 'uploads/');
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

    router.post('/file', upload.single('document'), async (req, res, next) => {
          const files = req.files;
          if (!files) {
            const error = new Error('Please upload a file');
            res.sendStatus(400);
            return next(error);
          }
          res.send(files);
        });

    app.use('/document', router);
};
