const express = require('express');
const createBoardingRoomsController = require('../controllers/kandidatController');
const createkandidatV2Router = require('./wakil');
const cekApiKey = require('../middlewares/cekApiKey');

function createkandidatRouter({ apiKey, roomModel } = {}) {
  const router = express.Router();
  const controller = createkandidatController(roomModel);

  router.use(cekApiKey(apiKey));
  router.get('/', controller.list);
  router.use('/summary', createkandidatV2Router({
    getRooms: controller.getRooms,
  }));
  router.get('/:id', controller.getById);
  router.post('/', controller.create);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
}

module.exports = createBoardingRoomsRouter;
