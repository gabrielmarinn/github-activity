"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_activity_1 = require("./fetch-activity");
const display_1 = require("./display");
const errors_1 = require("./errors");
const username = process.argv[2];
const limitArg = process.argv[3];
const limit = limitArg ? parseInt(limitArg) : 5;
if (!username) {
    console.log('Por favor, forneça o nome de usuário do GitHub como argumento.');
    process.exit(1);
}
if (isNaN(limit) || limit <= 0) {
    console.log('O segundo argumento deve ser um número inteiro positivo.');
    process.exit(1);
}
(0, fetch_activity_1.fetchActivity)(username)
    .then((events) => {
    (0, display_1.displayEvents)(username, events, limit);
})
    .catch(errors_1.handleError);
