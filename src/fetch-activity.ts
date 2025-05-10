import https from 'https'

export function fetchActivity(username: string): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/users/${username}/events/public`,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js CLI',
        Accept: 'application/vnd.github.v3+json',
      },
    }

    const req = https.request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        try {
          const parsed = JSON.parse(data)

          if (res.statusCode === 200) {
            if (Array.isArray(parsed)) {
              resolve(parsed)
            } else {
              reject(
                new Error(
                  `Resposta inesperada da API: ${JSON.stringify(parsed)}`
                )
              )
            }
          } else if (res.statusCode === 404) {
            reject(new Error('Usuário não encontrado.'))
          } else {
            reject(
              new Error(
                `Erro da API: ${res.statusCode} - ${
                  parsed.message || 'Erro desconhecido'
                }`
              )
            )
          }
        } catch (err) {
          reject(new Error('Erro ao processar os dados da resposta.'))
        }
      })
    })

    req.on('error', (err) => {
      reject(new Error(`Erro na requisição: ${err.message}`))
    })

    req.end()
  })
}
