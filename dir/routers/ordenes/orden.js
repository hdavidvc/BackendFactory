"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenes_1 = __importDefault(require("../../controllers/ordenes"));
const router = (0, express_1.Router)();
const orden = new ordenes_1.default();
router.get('/', orden.getordenes);
router.get('/:id', orden.getorden);
router.post('/', orden.postorden);
router.put('/:id', orden.putorden);
router.delete('/:id', orden.deleteorden);
exports.default = router;
