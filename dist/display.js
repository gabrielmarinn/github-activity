"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayEvents = displayEvents;
function displayEvents(username, events, limit) {
    if (events.length === 0) {
        console.log('Nenhuma atividade recente encontrada.');
    }
    else {
        console.log(`Atividades recentes de ${username} (exibindo até ${limit}):\n`);
        events.slice(0, limit).forEach((event, index) => {
            console.log(`${index + 1}. [${event.type}] em ${event.repo.name}`);
        });
    }
}
