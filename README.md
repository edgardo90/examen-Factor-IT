# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# examen-Factor-IT
---

## 🚀 **Tecnologías usadas**

* **React + Vite**
* **TypeScript**
* **React Router DOM**
* **Redux Toolkit** (manejo de estado global)
* **TailwindCSS** (para la parte deestilos)
* **Material UI**

---

## ⚙️ **Requisitos previos**

Antes de ejecutar el proyecto, asegurate de tener instalado:

* **Node.js** ( se puede descargar en https://nodejs.org/en/download , para ver version de node es node -v )
* **npm**(para ver opcion de npm es npm -v)
* **TypeScript** (opcional, ya viene como dependencia pero podés verificar con `npx tsc --version`)

---

## 🛠️ **Instalación y ejecución**

Cloná el repositorio:

```bash
git clone https://github.com/edgardo90/examen-Factor-IT.git
cd examen-Factor-IT
```

Instalá las dependencias:

```bash
npm install
```

Ejecutá el proyecto en modo desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en:

```
http://localhost:5173/
```

---

## 🔑 **Credenciales de acceso**

Usuario de prueba:

* **Email**: `user@gmail.com`
* **Password**: `user1234`



---

## 🌐 **Version Deploy**


[**Demo Online**](https://examen-factor-it.vercel.app//)

