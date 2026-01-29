# Nuxt 4 Prueba Técnica

Este proyecto es un ejemplo de una aplicación Nuxt 4 que muestra una lista de artículos y permite ver los detalles de cada uno.
Incluye funcionalidades como búsqueda, paginación y selección de artículos, usando Pinia como store y TailwindCSS para estilos.

---

## Demo

* Lista de artículos paginada y con buscador.
* Vista de detalle de artículo con botón "Volver".
* Estilos con TailwindCSS.
* Configuración de API y límite de artículos mediante variables de entorno.

---

## Tecnologías usadas

* [Nuxt 4](https://nuxt.com/)
* [Pinia](https://pinia.vuejs.org/)
* [Axios](https://axios-http.com/)
* [TailwindCSS v4](https://tailwindcss.com/)

---

## Requisitos

* Node.js >= 18
* npm o yarn

---

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/fberr/test-nuxt.git
cd nuxt4-prueba-tecnica
```

2. Instala dependencias:

```bash
npm install
# o
yarn install
```

3. Crea un archivo `.env` en la raíz del proyecto:

```env
# URL base de la API de posts
NUXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com

# Cantidad de posts a traer
NUXT_PUBLIC_POSTS_LIMIT=25

# Puerto del servidor Nuxt
NUXT_PUBLIC_NUXT_PORT=3000

# Modo de ejecución: 'development' o 'production'
NUXT_PUBLIC_ENV=development
```

> Puedes cambiar `NUXT_PUBLIC_API_URL` si quieres usar otra API de posts, y `NUXT_PUBLIC_POSTS_LIMIT` para limitar la cantidad de artículos.

---

## Ejecución

### Modo desarrollo

```bash
npm run dev
# o
yarn dev
```

Luego abre en tu navegador:

```
http://localhost:3000
```

### Generar build para producción

```bash
npm run build
npm run preview
```

---

## Estructura del proyecto

```
nuxt4-prueba-tecnica/
│
├─ pages/
│   └─ index.vue       # Página principal con lista de artículos y detalle
│
├─ stores/
│   └─ articles.ts     # Store de Pinia para manejar artículos
│
├─ assets/
│   └─ main.css        # TailwindCSS y estilos globales
│
├─ .env               # Variables de entorno
├─ nuxt.config.ts      # Configuración de Nuxt 4
└─ package.json
```

---

## Variables de entorno

Crea un archivo .env en la raíz del proyecto:

# URL base de la API de posts (frontend y backend)
NUXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com

# Cantidad de posts a traer
NUXT_PUBLIC_POSTS_LIMIT=25

# Puerto del servidor Nuxt (opcional)
NUXT_PORT=3000

# Modo de ejecución: 'development' o 'production'
NUXT_PUBLIC_ENV=development


Nota: Las variables que comienzan con NUXT_PUBLIC_ estarán disponibles tanto en frontend como en backend. Esto es necesario para acceder desde stores, componentes y páginas.                      |

---

## Uso

1. Ejecuta `npm run dev`.
2. La lista de artículos aparecerá en la página principal.
3. Usa el buscador para filtrar artículos por título.
4. Haz clic en "Ver más detalles" para abrir la vista de detalle de un artículo.
5. Pulsa "Volver" para regresar a la lista.

---

## Notas

* TailwindCSS está configurado en `assets/main.css`.
* La paginación y búsqueda se manejan en el store `articles.ts`.

