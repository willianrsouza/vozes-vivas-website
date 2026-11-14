# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Rodar localmente

Instale as dependências e inicie o servidor de desenvolvimento:

```sh
npm install
npm run dev
```

O site ficará disponível em `http://localhost:8080`. Para validar o build de
produção localmente:

```sh
npm run build
npm run preview
```

Para executar os testes:

```sh
npm test
```

## Subir para o GitHub

Crie um repositório vazio no GitHub e associe-o ao projeto local:

```sh
git init
git add .
git commit -m "Initial project setup"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
