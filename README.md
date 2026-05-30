# Andrés Aranda - Portafolio Profesional Premium

Este repositorio contiene el código fuente de mi portafolio profesional, diseñado con una estética moderna de nivel de producción, adaptabilidad completa (responsivo), soporte para temas duales (Modo Claro / Modo Oscuro) y animaciones fluidas basadas en scroll.

El sitio ha sido estructurado y optimizado con buenas prácticas de SEO y semántica web, listo para ser desplegado de manera instantánea y gratuita en **GitHub Pages**.

---

## 🚀 Tecnologías Utilizadas

*   **Estructura Semántica**: [HTML5](https://developer.mozilla.org/es/docs/HTML/HTML5)
*   **Estilos y Diseño Personalizado**: [Vanilla CSS3](https://developer.mozilla.org/es/docs/Web/CSS) con variables nativas de diseño, CSS Grid y Flexbox.
*   **Interacciones y Dinámicas**: [JavaScript (ES6+)](https://developer.mozilla.org/es/docs/Web/JavaScript) nativo para el conmutador de temas, animaciones de barra de progreso de habilidades y controles de navegación interactivos.
*   **Fuentes Web Premium**: [Google Fonts](https://fonts.google.com/) (Plus Jakarta Sans).

---

## 🛠️ Ejecución Local

Para visualizar e interactuar con el portafolio en tu entorno local:

1.  Clona o descarga este repositorio en tu computadora.
2.  Abre el archivo `index.html` directamente en tu navegador web preferido.
3.  *(Recomendado)* Ejecuta un servidor local ligero desde la terminal en el directorio del proyecto para obtener la experiencia óptima (por ejemplo, con VS Code Live Server, `npx serve` o similar):
    ```bash
    npx serve .
    ```

---

## 🌐 Despliegue en GitHub Pages

Este proyecto está configurado para ejecutarse sin necesidad de compiladores en la rama `main`. Para publicar tu sitio en GitHub Pages usando el CLI de GitHub (`gh`), sigue estos pasos:

1.  **Inicializa Git en la carpeta del proyecto** (si no se ha hecho ya):
    ```bash
    git init
    git add .
    git commit -m "feat: initial commit - portafolio premium"
    ```
2.  **Crea el repositorio remoto en GitHub** (público) utilizando el CLI de GitHub:
    ```bash
    gh repo create portfolio-andres-aranda --public --source=. --remote=origin --push
    ```
3.  **Habilita y Configura GitHub Pages** para que se sirva desde la rama `main` y la carpeta raíz (`/`):
    ```bash
    gh api --method POST -H "Accept: application/vnd.github+json" /repos/andres-aranda/portfolio-andres-aranda/pages -f source='{"branch":"main","path":"/"}'
    ```
4.  **¡Listo!** En unos minutos tu sitio web estará disponible en:  
    `https://andres-aranda.github.io/portfolio-andres-aranda/`

---

## 🎨 Personalización de Imagen de Perfil

Actualmente, el portafolio presenta una tarjeta de código interactiva e ilustrativa en el lado derecho de la sección de inicio (Hero). Si en el futuro deseas reemplazar esta tarjeta con tu foto de perfil real:

1.  Guarda tu fotografía en formato `.jpg` o `.png` en una carpeta dentro del proyecto (ej. `img/perfil.jpg`).
2.  En el archivo `index.html`, ubica el elemento `<div class="hero-visual">`.
3.  Reemplaza el contenedor `<div class="dev-card">...</div>` por una etiqueta de imagen premium:
    ```html
    <div class="profile-image-container">
        <img src="./img/perfil.jpg" alt="Andrés Aranda" class="profile-image">
    </div>
    ```
4.  Agrega estilos para tu imagen en `styles.css` (ej. bordes redondeados con gradientes, sombras suaves, etc.).
