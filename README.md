# 🚀 Dev.to Clone (Frontend)

Este es un clon funcional de la plataforma [DEV.to](https://dev.to), construido con **React.js**. El objetivo del proyecto es replicar una red social para desarrolladores, donde los usuarios puedan registrarse, iniciar sesión, publicar contenido y visualizar publicaciones en tiempo real.

---

## 🧩 Funcionalidades

- 🔐 Autenticación con JWT (login y registro)
- 🏠 Página principal con publicaciones
- ✍️ Creación de nuevos posts
- 🔎 Filtros por fecha y búsqueda por palabras clave
- 🧑‍💻 Vista de perfil con publicaciones del usuario
- 💅 Estilos personalizados inspirados en la estética de DEV.to

---

## 📦 Tecnologías utilizadas

- **React.js**
- **React Router DOM**
- **Context API** para manejar la autenticación
- **Axios** para conectar con el backend
- **CSS modularizado**
- **Backend separado** con Express + MongoDB

---

## 📁 Estructura del proyecto
devto-clone-react/
│
├── public/
│
├── src/
│ ├── assets/ # Imágenes y recursos estáticos
│ ├── components/ # Componentes reutilizables (Header, PostCard, etc.)
│ ├── context/ # Contexto de autenticación
│ ├── pages/ # Páginas como Home, Login, Register, Profile
│ ├── services/ # Funciones de conexión a la API
│ ├── utils/ # Filtros, helpers, etc.
│ └── App.jsx # Enrutamiento principal
│
└── .gitignore
└── package.json
└── README.md

Este frontend está conectado a una API construida en **Express.js** con autenticación JWT, conexión a MongoDB y endpoints REST. Puedes ver el repositorio del backend aquí:

👉 [Ver backend](https://github.com/braian24xd/devto-clone-api)

---

## ✅ Próximas mejoras

- Reacciones y comentarios en publicaciones
- Sistema de etiquetas y hashtags
- Mejoras de SEO y performance

---

## 🧑 Autor

Desarrollado por [Brayan Almora Méndez](https://github.com/braian24xd) ✨  
**Sígueme para más proyectos de desarrollo fullstack.**
