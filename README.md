# GitHub Activity CLI

Uma interface de linha de comando (CLI) desenvolvida com **TypeScript** e **Node.js**, que busca e exibe a atividade pública recente de um usuário do GitHub diretamente no terminal, utilizando apenas módulos nativos do Node.js (sem bibliotecas externas).

## 🚀 Funcionalidades

- Executa a partir da linha de comando.
- Aceita o nome de usuário do GitHub como argumento.
- Busca eventos públicos recentes da conta informada.
- Exibe os eventos no terminal de forma clara e formatada.
- Permite definir a quantidade de eventos exibidos (opcional).
- Trata erros comuns como usuário inexistente ou limite de requisições da API.

## 🛠️ Tecnologias Utilizadas

- Node.js (módulo nativo `https`)
- TypeScript

## 📁 Estrutura do Projeto

```
src/
├── display.ts         # Responsável por exibir os eventos no terminal
├── errors.ts          # Lida com erros de forma padronizada
├── fetchActivity.ts   # Faz requisição à API do GitHub
└── index.ts           # Ponto de entrada da aplicação CLI
```

## ⚙️ Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/github-activity-cli.git
cd github-activity-cli
```

### 2. Instale as dependências de desenvolvimento

```bash
npm install
```

### 3. Compile o TypeScript

```bash
npx tsc
```

### 4. Execute a CLI

```bash
node dist/index.js <nome-de-usuario> [quantidade]
```

#### Exemplos:

```bash
node dist/index.js gabrielmarinn
node dist/index.js torvalds 10
```

> O segundo argumento (`quantidade`) é opcional e define o número de eventos a serem exibidos. O padrão é 5.

## ✅ Comportamento Esperado

- Caso o usuário exista e tenha atividades recentes: serão exibidos até `n` eventos.
- Caso não existam atividades recentes: uma mensagem informativa será mostrada.
- Caso o nome de usuário não seja informado: a aplicação exibirá uma instrução.
- Caso o nome de usuário seja inválido: uma mensagem de erro será exibida.

## 📌 Observações

- A API pública do GitHub impõe limites de requisições por IP. Se você receber um erro como `API rate limit exceeded`, aguarde alguns minutos antes de tentar novamente.
