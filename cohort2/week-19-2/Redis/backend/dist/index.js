"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = (0, redis_1.createClient)();
client.on('error', (err) => console.log('Redis Client Error', err));
app.post('/submit', (req, res) => {
    const { problemId, userId, code, language } = req.body;
    try {
        client.lPush('submissions', JSON.stringify({ problemId, userId, code, language }));
        res.json({
            message: 'Submission Received'
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error in Submission'
        });
    }
});
