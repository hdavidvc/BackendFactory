"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const almacenamiento_1 = __importDefault(require("../../controllers/almacenamiento"));
const router = (0, express_1.Router)();
const almacenar = new almacenamiento_1.default();
router.get('/', almacenar.getEstanterias);
router.get('/:id', almacenar.getEstanteria);
router.post('/', almacenar.postEstanteria);
router.put('/:id', almacenar.putEstanteria);
router.delete('/:id', almacenar.deleteEstanteria);
// console.log(prueba);
exports.default = router;
