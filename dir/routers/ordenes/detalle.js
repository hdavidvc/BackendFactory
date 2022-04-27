"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenes_1 = __importDefault(require("../../controllers/ordenes"));
const router = (0, express_1.Router)();
const orden = new ordenes_1.default();
router.get('/', orden.getdetalles);
router.get('/:id', orden.getdetalle);
router.post('/', orden.postdetalle);
router.put('/:id', orden.putdetalle);
router.delete('/:id', orden.deletedetalle);
exports.default = router;
