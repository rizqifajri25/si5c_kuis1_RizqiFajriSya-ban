const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', menuController.getAll);
router.get('/:id', menuController.getById);
router.post('/', cekApiKey, menuController.create);
router.put('/:id', cekApiKey, menuController.update);
router.delete('/:id', cekApiKey, menuController.remove);

module.exports = router;