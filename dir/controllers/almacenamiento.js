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
class Almacenamiento {
    constructor() {
        this.data = [];
        this.getAlmacenes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            connetion_1.default.query('SELECT * FROM almacen', (error, resuls) => {
                resuls.forEach((element) => {
                    const { id } = element, demas = __rest(element, ["id"]);
                    this.data.push(demas);
                });
                res.json(resuls);
            });
            this.data = [];
        });
        //TODO falta por nombre o id
        this.getAlmacen = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                connetion_1.default.query('SELECT * FROM Almacen WHERE id = ? and estado = "Disponible" ', id, (error, resuls) => {
                    res.json(resuls);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.postAlmacen = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const almac = req.body;
            try {
                const query = yield connetion_1.default.query('INSERT INTO almacen set ?', [almac], (error, resuls) => {
                    res.json({ msg: 'almacen registrado' });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.putAlmacen = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const perso = req.body;
            try {
                yield connetion_1.default.query('UPDATE almacen set ? WHERE id = ?', [perso, id], (error, resuls) => {
                    res.json({
                        msg: 'Almacen actualidado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.putAlmacen2 = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const perso = req.body;
            try {
                yield connetion_1.default.query('UPDATE almacen set estado = "ocupado" WHERE id = ?', [id], (error, resuls) => {
                    res.json({
                        msg: 'Almacen actualidado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.deleteAlmacen = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { cargo } = _a, perso = __rest(_a, ["cargo"]);
            try {
                yield connetion_1.default.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls) => {
                    res.json({
                        msg: 'Almacen eliminado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        //ESTANTERIAS
        this.getEstanterias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('res');
            connetion_1.default.query('SELECT * FROM estanteria', (error, resuls) => {
                res.json(resuls);
            });
        });
        //TODO falta por nombre o id
        this.getEstanteria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                connetion_1.default.query('SELECT * FROM estanteria WHERE id_almacen = ? ', id, (error, resuls) => {
                    res.json(resuls);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.postEstanteria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const estan = req.body;
            try {
                yield connetion_1.default.query('INSERT INTO estanteria set ?', [estan], (error, resuls) => {
                    res.json({ msg: 'Estanteria creada' });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.putEstanteria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const perso = req.body;
            try {
                yield connetion_1.default.query('UPDATE estanteria set ? WHERE id = ?', [perso, id], (error, resuls) => {
                    res.json({
                        msg: 'Estanteria actualidado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.deleteEstanteria = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _b = req.body, { cargo } = _b, perso = __rest(_b, ["cargo"]);
            try {
                yield connetion_1.default.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls) => {
                    res.json({
                        msg: 'Almacen eliminado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        //UBICACION
        this.getUbicaciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('res');
            connetion_1.default.query('SELECT * FROM ubicacion', (error, resuls) => {
                res.json(resuls);
            });
        });
        //TODO falta por nombre
        this.getUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                connetion_1.default.query('SELECT a.id, a.descripcion from almacen as a, materia_prima as ma, ubicacion as ubi where ma.id = ? and ubi.id_almacen = a.id and ma.id_ubicacion = ubi.id and a.estado="Disponible"', id, (error, resuls) => {
                    res.json(resuls);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
        this.postUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const ubi = req.body;
            try {
                yield connetion_1.default.query('INSERT INTO ubicacion set ?', [ubi], (error, resuls) => {
                    res.json({ msg: 'Ubicacion creada',
                        id: resuls.insertId
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.putUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const perso = req.body;
            try {
                yield connetion_1.default.query('UPDATE persona set ? WHERE id = ?', [perso, id], (error, resuls) => {
                    res.json({
                        msg: 'Almacen actualidado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
        this.deleteUbicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _c = req.body, { cargo } = _c, perso = __rest(_c, ["cargo"]);
            try {
                yield connetion_1.default.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls) => {
                    res.json({
                        msg: 'Almacen eliminado',
                    });
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
exports.default = Almacenamiento;
