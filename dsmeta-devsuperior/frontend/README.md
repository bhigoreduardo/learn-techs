<h1 align="center">
  💻<br>Front-End Spring Boot
</h1>

Este projeto foi gerado com `Vite-TS`.

✅ API Rest.

## ✨ Criação do React Vite:

- Criar o projeto: `yarn create vite frontend --template react-ts`
- Instalar as dependências: `yarn`
- Rodar o projeto (development): `yarn dev`
- Aplicação rodando no server: `http:localhost:5173`

- Ferramentas:

  - VSCode
    - IntelliCode
    - ESLint
    - JSX HTML

## 🗓️ Importação Date Picker:

- Instalação: `yarn add react-datepicker@4.8.0 @types/react-datepicker@4.4.2`

- Importação:

```
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
```

## 🗂️ Importação Axios:

- Instalação: `yarn add axios@0.27.2`

## 🧲 Set BaseURL:

- package: utils
- request: `export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"`

## 📜 Criar Model Sales:

- package: models

## 📥 Importação Toastity Message:

- Instalação: `yarn add react-toastify@9.0.5`

- Deploy Netlify:
  - Base directory: dsmeta-devsuperior/frontend
  - Build command: yarn build
  - Publish directory: dsmeta-devsuperior/frontend/dist
  - Variáveis de ambiente: VITE_BACKEND_URL `https://dashboard-dsmeta-higor.herokuapp.com`
  - Site settings: Domain Management