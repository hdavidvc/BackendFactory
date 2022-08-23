"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const almacenamiento_1 = __importDefault(require("../../controllers/almacenamiento"));
const router = (0, express_1.Router)();
const almacenar = new almacenamiento_1.default();
router.get('/', almacenar.getAlmacenes);
router.get('/:id', almacenar.getAlmacen);
router.post('/', almacenar.postAlmacen);
router.put('/:id', almacenar.putAlmacen);
router.put('/estado/:id', almacenar.putAlmacen2);
router.delete('/:id', almacenar.deleteAlmacen);
// console.log(prueba);
exports.default = router;
