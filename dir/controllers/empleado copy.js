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
exports.deleteEmpleado = exports.putEmpleado = exports.postEmpleado = exports.getEmpleado = exports.getEmpleados = void 0;
const connetion_1 = __importDefault(require("../db/connetion"));
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    connetion_1.default.query('SELECT * FROM `persona` as p, empleado as e WHERE e.id_persona = p.id and estado = 1', (error, resuls) => {
        res.json({ msg: 'varios',
            resuls });
    });
});
exports.getEmpleados = getEmpleados;
//TODO falta por nombre o id
const getEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        connetion_1.default.query('SELECT * FROM empleado WHERE id = ? ', id, (error, resuls) => {
            res.json(resuls);
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getEmpleado = getEmpleado;
const postEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { cargo } = _a, perso = __rest(_a, ["cargo"]);
    try {
        yield connetion_1.default.query('INSERT INTO persona set ?', [perso], (error, resuls) => {
            const idPer = resuls.insertId;
            const { cargo } = req.body;
            connetion_1.default.query(`INSERT INTO empleado ( cargo, id_persona) VALUES ('${cargo}', ${idPer})`);
            res.json({ msg: 'empleado creado' });
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.postEmpleado = postEmpleado;
const putEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { cargo } = _b, perso = __rest(_b, ["cargo"]);
    try {
        yield connetion_1.default.query('UPDATE persona set ? WHERE id = ?', [perso, id], (error, resuls) => {
            const prueba = connetion_1.default.query('UPDATE empleado set ? WHERE id_persona = ?', [{ cargo }, id]);
            res.json({
                msg: 'Empleado actualidado',
            });
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.putEmpleado = putEmpleado;
const deleteEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _c = req.body, { cargo } = _c, perso = __rest(_c, ["cargo"]);
    try {
        yield connetion_1.default.query('UPDATE persona set estado = 0 WHERE id = ?', [id], (error, resuls) => {
            res.json({
                msg: 'Empleado eliminado',
            });
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.deleteEmpleado = deleteEmpleado;
