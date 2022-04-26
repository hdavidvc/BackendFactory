"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const almacenamiento_1 = __importDefault(require("../../controllers/almacenamiento"));
const router = (0, express_1.Router)();
const almacenar = new almacenamiento_1.default();
router.get('/', almacenar.getUbicaciones);
router.get('/:id', almacenar.getUbicacion);
router.post('/', almacenar.postUbicacion);
router.put('/:id', almacenar.putUbicacion);
router.delete('/:id', almacenar.deleteUbicacion);
exports.default = router;
