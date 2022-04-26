"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materia_1 = __importDefault(require("../controllers/materia"));
const router = (0, express_1.Router)();
const materia = new materia_1.default();
router.get('/', materia.getMaterias);
router.get('/:id', materia.getMateria);
router.post('/', materia.postMateria);
router.put('/:id', materia.putMateria);
router.delete('/:id', materia.deleteMateria);
// console.log(prueba);
exports.default = router;
