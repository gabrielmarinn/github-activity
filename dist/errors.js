"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
function handleError(error) {
    if (error instanceof Error) {
        console.error('❌ Erro:', error.message);
    }
    else {
        console.error('❌ Erro desconhecido:', error);
    }
}
