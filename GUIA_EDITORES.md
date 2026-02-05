# Guía para Editores de la Web RomaNET

Esta guía explica cómo funciona la web de RomaNET y cómo los socios del proyecto pueden editar contenido.

---

## 📋 Índice

1. [Requisitos](#-requisitos)
2. [Crear cuenta de GitHub](#-crear-cuenta-de-github)
3. [Recibir invitación](#-recibir-invitación)
4. [Acceder al panel de administración](#-acceder-al-panel-de-administración)
5. [Cómo editar contenido](#-cómo-editar-contenido)
6. [Gestión de idiomas](#-gestión-de-idiomas)
7. [Arquitectura de la web](#-arquitectura-de-la-web)
8. [Preguntas frecuentes](#-preguntas-frecuentes)

---

## 📱 Requisitos

- Un ordenador con conexión a internet
- Una cuenta de GitHub (gratuita)
- Un navegador web moderno (Chrome, Firefox, Edge, Safari)

**No necesitas instalar ningún programa.** Todo funciona desde el navegador.

---

## 👤 Crear cuenta de GitHub

> Solo necesitas hacer esto la primera vez.

1. Ve a **[github.com/signup](https://github.com/signup)**
2. Introduce tu email
3. Crea una contraseña segura
4. Elige un nombre de usuario
5. Verifica tu email (recibirás un código)

**⏱️ Tiempo: 2-3 minutos**

### ¿Por qué GitHub?

GitHub es una plataforma donde se guarda el código de la web de forma segura. Tu cuenta te permite:
- Hacer cambios de forma controlada
- Ver el historial de todos los cambios
- Colaborar con otros socios del proyecto

---

## 📧 Recibir invitación

El administrador del proyecto te enviará una invitación por email para ser colaborador.

1. Abre el email de GitHub (revisa también la carpeta de spam)
2. Haz clic en **"View invitation"** (Ver invitación)
3. Haz clic en **"Accept invitation"** (Aceptar invitación)

Una vez aceptada, ya puedes acceder al panel de administración.

---

## 🔑 Acceder al panel de administración

### Primera vez (registro):

1. Abre tu navegador
2. Ve a: **https://romanet.netlify.app/admin/**
3. Haz clic en **"Login with GitHub"**
4. Si te lo pide, autoriza la aplicación
5. ¡Ya estás dentro!

### Siguientes veces:

1. Ve a: **https://romanet.netlify.app/admin/**
2. Si ya estás logueado en GitHub, entrarás automáticamente
3. Si no, haz clic en "Login with GitHub"

---

## ✏️ Cómo editar contenido

### Panel de administración

Al entrar verás el menú lateral con las diferentes secciones:

| Sección | Qué contiene |
|---------|--------------|
| **Pages** | Páginas principales de la web (Home, About, etc.) |
| **News (EN/ES/IT/GR)** | Noticias en cada idioma |
| **Partners** | Información de los socios del proyecto |

### Editar una página existente:

1. En el menú izquierdo, haz clic en **"Pages"**
2. Selecciona el idioma (ej: "EN" para inglés, "ES" para español)
3. Haz clic en la página que quieres editar
4. Modifica el contenido usando el editor visual
5. Haz clic en **"Save"** (Guardar) arriba a la derecha
6. Haz clic en **"Publish"** para que se vea en la web

### Añadir una noticia:

1. En el menú izquierdo, haz clic en **"News (EN)"** (o el idioma deseado)
2. Haz clic en **"New News"** (Nueva noticia)
3. Rellena los campos:
   - **Title**: Título de la noticia
   - **Date**: Fecha de publicación
   - **Category**: Categoría (Project News, Events, etc.)
   - **Excerpt**: Resumen breve
   - **Body**: Contenido completo
4. Haz clic en **"Save"** y luego **"Publish"**

### Categorías de noticias disponibles:

- **Project News**: Noticias generales del proyecto
- **Events & Trainings**: Eventos y formaciones
- **Roundtables**: Mesas redondas
- **Calls to Action**: Llamadas a la acción

---

## 🌍 Gestión de idiomas

La web está disponible en **4 idiomas**:

| Código | Idioma | Bandera |
|--------|--------|---------|
| EN | English | 🇬🇧 |
| ES | Español | 🇪🇸 |
| IT | Italiano | 🇮🇹 |
| GR | Ελληνικά | 🇬🇷 |

### ¿Cómo funcionan las traducciones?

- Cada página y noticia existe **de forma independiente** en cada idioma
- Si creas una noticia en español, debes crearla también en inglés, italiano y griego para que aparezca en todos los idiomas
- Las URLs siguen el patrón: `/es/pagina`, `/en/page`, etc.

### Ejemplo de estructura:

```
Noticia: "Lanzamiento del proyecto"
├── /en/news/2025-01-20-project-launch  (inglés)
├── /es/news/2025-01-20-project-launch  (español)
├── /it/news/2025-01-20-project-launch  (italiano)
└── /gr/news/2025-01-20-project-launch  (griego)
```

> **Importante**: El nombre del archivo (slug) debe ser el mismo en todos los idiomas para que el cambio de idioma funcione correctamente.

---

## 🏗️ Arquitectura de la web

### Tecnologías utilizadas:

| Tecnología | Para qué se usa |
|------------|-----------------|
| **Astro** | Framework para generar la web |
| **Decap CMS** | Panel de administración de contenido |
| **Netlify** | Hosting y despliegue automático |
| **GitHub** | Almacenamiento del código y control de versiones |

### Flujo de cambios:

```
1. Editas contenido en el CMS (/admin)
         ↓
2. Se guarda automáticamente en GitHub
         ↓
3. Netlify detecta el cambio
         ↓
4. Se reconstruye la web automáticamente
         ↓
5. Los cambios aparecen en la web (1-2 minutos)
```

### Estructura de páginas:

| URL | Página |
|-----|--------|
| `/en` | Inicio (inglés) |
| `/en/about` | Sobre RomaNET |
| `/en/hate-speech` | Sobre discurso de odio |
| `/en/report` | Denuncia y apoyo |
| `/en/ai-against-hate` | IA contra el odio |
| `/en/news` | Noticias |
| `/en/partners` | Socios y red |

---

## ❓ Preguntas frecuentes

### ¿Cuánto tarda en verse el cambio?
Los cambios tardan **1-2 minutos** en aparecer en la web pública después de hacer "Publish".

### ¿Puedo romper la web?
No te preocupes. Todos los cambios se guardan con historial completo en GitHub, así que siempre se puede volver atrás si hay algún problema.

### ¿Necesito saber programar?
No. El panel de administración tiene un editor visual tipo Word, no necesitas conocimientos técnicos.

### ¿Puedo subir imágenes?
Sí. En el editor hay un botón para añadir imágenes. Se guardan automáticamente en la carpeta del proyecto.

### ¿Qué pasa si dos personas editan a la vez?
GitHub detectará el conflicto y te avisará. En general, evitad editar el mismo contenido al mismo tiempo.

### ¿Cómo veo los cambios antes de publicar?
Cuando guardas con "Save" pero no haces "Publish", el cambio queda como borrador. Puedes verlo en el panel pero no se publicará hasta que hagas "Publish".

### ¿Puedo deshacer un cambio?
Sí. Contacta al administrador para restaurar una versión anterior desde GitHub.

### ¿La web funciona en móviles?
Sí. La web está diseñada para funcionar en cualquier dispositivo (ordenador, tablet, móvil).

---

## 📞 Contacto y soporte

Si tienes problemas o dudas:

1. **Problemas técnicos**: Contacta al administrador del proyecto
2. **Dudas sobre contenido**: Consulta con el equipo de comunicación

---

## 🔗 Enlaces útiles

- **Web pública**: https://romanet.netlify.app
- **Panel de administración**: https://romanet.netlify.app/admin/
- **GitHub del proyecto**: https://github.com/sergiovs6/web-romanet
- **Instagram**: [@project_romanet](https://www.instagram.com/project_romanet)
- **TikTok**: [@romanet.project](https://www.tiktok.com/@romanet.project)
- **Facebook**: [RomaNET Project](https://www.facebook.com/share/1HLpAtArtH/)

---

**Proyecto financiado por la Unión Europea** bajo el programa CERV-2024-CHAR-LITI-SPEECH.
