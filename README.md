# Sergio Ramos Villena - Portafolio

Un portafolio moderno, responsive y bilingüe construido con **Astro** y **Tailwind CSS**. Presenta experiencia profesional, habilidades y proyectos como Desarrollador Full Stack.

🌐 **Sitio en vivo:** [Ver Portafolio](https://sergioramos.com)

## ✨ Características

- 🌍 **Soporte Bilingüe** - Inglés y Español con cambio de idioma fluido
- 🌙 **Modo Oscuro** - Toggle de tema claro/oscuro con persistencia en localStorage
- 📱 **Totalmente Responsivo** - Diseño mobile-first con menú hamburguesa para navegación móvil
- ⚡ **Alto Rendimiento** - Construido con Astro para generación de sitios estáticos optimizada
- 🎨 **Diseño Moderno** - Tailwind CSS con animaciones personalizadas y efectos de gradiente
- 🌈 **Animaciones Arcoíris** - Efectos de borde animado en elementos interactivos
- ♿ **Accesible** - HTML semántico y etiquetas ARIA para mejor accesibilidad
- 📊 **Línea de Tiempo Laboral** - Experiencia profesional con descripciones multilingües
- 🔗 **Integración Social** - Enlaces a GitHub, LinkedIn, Email y Teléfono (SMS)

## 🏗️ Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navegación con toggles de idioma/tema
│   │   ├── Footer.astro      # Pie de página con tech stack
│   ├── layouts/
│   │   └── Layout.astro      # Layout base con scripts globales
│   ├── pages/
│   │   ├── index.astro       # Página de inicio con perfil
│   │   ├── work.astro        # Línea de tiempo de experiencia laboral
│   │   ├── projects.astro    # Vitrina de proyectos
│   │   └── contact.astro     # Información de contacto
│   ├── assets/
│   │   ├── photo.jpeg        # Foto de perfil
│   │   ├── Astro_dark.svg    # Logo de Astro
│   │   ├── Astro_light.svg   # Logo de Astro (claro)
│   │   └── tailwindcss.svg   # Logo de Tailwind CSS
│   └── styles/
│       └── global.css        # Animaciones y utilidades personalizadas
├── public/
│   └── favicon.svg           # Favicon del sitio
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.mjs       # Configuración de Tailwind CSS
├── tsconfig.json             # Configuración de TypeScript
└── package.json              # Dependencias del proyecto

```

## 🚀 Primeros Pasos

### Requisitos Previos

- Node.js 16+ 
- npm o yarn

## 🛠️ Stack de Tecnología

**Frontend:**
- Astro
- React (opcional, para componentes dinámicos)
- TypeScript
- Tailwind CSS

**Características:**
- Diseño Responsivo (Mobile-First)
- Soporte Dark Mode
- Multilingüe (i18n)
- Animaciones CSS Personalizadas

## 📝 Configuración

### Sistema de Idioma

El portafolio utiliza un sistema de idioma personalizado con atributos `data-en` y `data-es`. La preferencia de idioma se almacena en localStorage.

Para agregar traducciones:
1. Añade atributos `data-en` y `data-es` a los elementos
2. La función `updatePageContent()` maneja la visualización según el idioma actual

### Sistema de Tema

El toggle de modo oscuro/claro está disponible en el encabezado. La preferencia de tema se persiste en localStorage y se sincroniza entre cargas de página.

## 🔧 Comandos Disponibles

| Comando | Propósito |
|---------|-----------|
| `npm run dev` | Inicia el servidor de desarrollo local |
| `npm run build` | Compila el sitio para producción |
| `npm run preview` | Visualiza la compilación de producción |
| `npm run astro add` | Añade integraciones de Astro |
| `npm run astro check` | Verifica tipos en tu código |

## 📧 Contacto

- **Email:** slrv.ramosv@gmail.com
- **LinkedIn:** [sergioramosvillena](https://www.linkedin.com/in/sergio-leandro-ramos-villena-45b0bb270/)
- **Celular:** +51 3932416666

## 🙏 Reconocimientos

- [Astro](https://astro.build) - Generador de sitios estáticos
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS orientado a utilidades
- Inspirado en principios modernos de diseño web

---

**Hecho con ❤️ por Sergio Ramos | 2026**
