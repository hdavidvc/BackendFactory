"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connetion_1 = __importDefault(require("../db/connetion"));
class Orden {
    constructor() {
        this.getdetalles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            connetion_1.default.query('SELECT * FROM `detalle_orden_compra`', (error, resuls) => {
                res.json(resuls);
            });
        });
        //TODO falta por nombre o id
        this.getdetalle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                connetion_1.default.query('SELECT m.id, m.descripcion, deta.cantidad from materia_prima as m, detalle_orden_compra as deta, orden_compra as orden where deta.id_materia = m.id and deta.id_orden = orden.id and orden.id = ? ', id, (error, resuls) => {
                    res.json(resuls);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.postdetalle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const Dorden = req.body;
            try {
                yield connetion_1.default.query('INSERT INTO detalle_orden_compra set ?', [Dorden], (error, resuls) => {
                    res.json({ resuls });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.putdetalle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { cargo } = _a, perso = __rest(_a, ["cargo"]);
            try {
                yield connetion_1.default.query('UPDATE persona set ? WHERE id = ?', [perso, id], (error, resuls) => {
                    const prueba = connetion_1.default.query('UPDATE orden set ? WHERE id_persona = ?', [{ cargo }, id]);
                    res.json({
                        msg: 'orden actualidado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.deletedetalle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _b = req.body, { cargo } = _b, perso = __rest(_b, ["cargo"]);
            try {
                yield connetion_1.default.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls) => {
                    res.json({
                        msg: 'orden eliminado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        //ORDENES
        this.getordenes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            connetion_1.default.query('SELECT * FROM `orden_compra` ', (error, resuls) => {
                resuls.forEach((element, i) => {
                    // resuls[i].fecha = resuls[i].fecha.toLocaleDateString("es-ES")                
                });
                res.json(resuls);
            });
        });
        this.getordenesP = (req, res) => __awaiter(this, void 0, void 0, function* () {
            connetion_1.default.query('SELECT * FROM `orden_compra` where estado = "Pendiente" ', (error, resuls) => {
                resuls.forEach((element, i) => {
                    resuls[i].fecha = resuls[i].fecha.toLocaleDateString("es-ES");
                });
                res.json(resuls);
            });
        });
        this.getordenesR = (req, res) => __awaiter(this, void 0, void 0, function* () {
            connetion_1.default.query('SELECT * FROM `orden_compra` where estado = "Recibida" ', (error, resuls) => {
                resuls.forEach((element, i) => {
                    resuls[i].fecha = resuls[i].fecha.toLocaleDateString("es-ES");
                });
                res.json(resuls);
            });
        });
        //TODO falta por nombre o id
        this.getorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                connetion_1.default.query('SELECT * FROM orden_compra WHERE id = ? and estado = "Pendiente" ', id, (error, resuls) => {
                    res.json(resuls);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.postorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const orden = req.body;
            try {
                yield connetion_1.default.query('INSERT INTO orden_compra set ?', [orden], (error, resuls) => {
                    res.json({ id: resuls.insertId });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.putorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // const {id} = req.params;
            const { id, estado } = req.body;
            try {
                yield connetion_1.default.query('UPDATE orden_compra set estado = ? WHERE id = ?', [estado, id], (error, resuls) => {
                    res.json({
                        msg: 'orden actualidada',
                        resuls
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.deleteorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _c = req.body, { cargo } = _c, perso = __rest(_c, ["cargo"]);
            try {
                yield connetion_1.default.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls) => {
                    res.json({
                        msg: 'orden eliminado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
exports.default = Orden;
