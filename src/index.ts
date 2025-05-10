import { fetchActivity } from './fetch-activity'
import { displayEvents } from './display'
import { handleError } from './errors'

const username = process.argv[2]
const limitArg = process.argv[3]
const limit = limitArg ? parseInt(limitArg) : 5

if (!username) {
  console.log('Por favor, forneça o nome de usuário do GitHub como argumento.')
  process.exit(1)
}

if (isNaN(limit) || limit <= 0) {
  console.log('O segundo argumento deve ser um número inteiro positivo.')
  process.exit(1)
}

fetchActivity(username)
  .then((events) => {
    displayEvents(username, events, limit)
  })
  .catch(handleError)
