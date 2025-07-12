# Hamaiketako Bilbao - Aplicación Web de Rutas de Pintxos

![Status](https://img.shields.io/badge/status-active-success.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Redux](https://img.shields.io/badge/Redux-4.0.5-purple.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple.svg)
![Webpack](https://img.shields.io/badge/Webpack-5.100.1-lightblue.svg)

## 📋 Descripción

**Hamaiketako** es una aplicación web desarrollada como proyecto Capstone para Bottega Code School que promueve la cultura gastronómica de Bilbao a través de las famosas rutas de pintxos. La aplicación permite a los usuarios explorar diferentes rutas, leer opiniones en el blog y gestionar sus propias recomendaciones de bares.

> **¿Qué significa "Hamaiketako"?** 
> La traducción literal es "lo de las once", refiriéndose a la costumbre de tomar algo al mediodía. Se ha transformado en la tradición de "ir de pintxos" por las zonas de Bilbao.

🌐 **Sitio web en vivo**: [hamaiketako.netlify.app](https://hamaiketako.netlify.app/)

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico
- **Frontend**: React 18.2.0 con Hooks
- **Estado Global**: Redux 4.0.5
- **Routing**: React Router DOM 6.8.0
- **UI Framework**: Bootstrap 5.3.3 + Reactstrap 8.9.0
- **Bundler**: Webpack 5.100.1
- **Estilos**: SASS/SCSS
- **HTTP Client**: Axios 1.8.3

### Estructura de Directorios
```
src/
├── components/
│   ├── pages/           # Páginas principales
│   │   ├── home.js      # Página de inicio con carousel e info
│   │   ├── rutas.js     # Rutas de pintxos
│   │   └── blog.js      # Blog con API externa
│   ├── navigation/      # Componentes de navegación
│   │   ├── navbar.js    # Barra de navegación responsive
│   │   ├── footer.js    # Pie de página
│   │   └── carousel.js  # Carousel de imágenes
│   ├── formulario.js    # CRUD de bares y opiniones
│   └── app.js          # Componente raíz
├── reducers/           # Reducers de Redux
├── actions/            # Actions de Redux
├── style/              # Estilos SCSS modulares
└── bootstrap.js        # Punto de entrada
```

## 🚀 Funcionalidades

### 1. **Página de Inicio (Home)**
- **Carousel interactivo** con imágenes emblemáticas de Bilbao
- **Información cultural** sobre la tradición del Hamaiketako
- **Galería de imágenes** de bares representativos
- **Formulario CRUD** para gestionar lista personal de bares

### 2. **Rutas de Pintxos**
- **3 rutas principales** con información detallada:
  - Casco Viejo
  - Diputación y Gran Vía  
  - Zona de Pozas
- **Enlaces externos** al portal oficial de turismo de Bilbao
- **Imágenes representativas** de cada zona

### 3. **Blog Dinámico**
- **Integración con API externa** (DevCamp Space)
- **Carga asíncrona** de artículos con estados de loading/error
- **Diseño responsivo** tipo tarjetas

### 4. **Sistema CRUD de Bares**
- **Gestión completa** de lista personal de bares
- **Modales de Bootstrap** para añadir/editar
- **Validaciones** y confirmaciones
- **Datos persistentes** en estado local

## 🎨 Diseño y UX

### Características del Diseño
- **Diseño totalmente responsivo** con breakpoints móvil/tablet/desktop
- **Navegación hamburguesa** para dispositivos móviles
- **Esquema de colores** inspirado en la identidad vasca
- **Tipografías personalizadas** (Montserrat, Tilt Neon)
- **Componentes reutilizables** con Bootstrap/Reactstrap

### Experiencia de Usuario
- **Navegación intuitiva** con rutas claramente diferenciadas
- **Feedback visual** en interacciones (botones, modales)
- **Estados de carga** para contenido asíncrono
- **Mensajes de confirmación** para acciones destructivas

## 📊 Análisis y Mejoras Propuestas

### ✅ Fortalezas Actuales
1. **Arquitectura sólida** con separación clara de responsabilidades
2. **Diseño responsivo** bien implementado
3. **Integración exitosa** de múltiples tecnologías
4. **Funcionalidad CRUD completa** y funcional
5. **Uso correcto** de Hooks de React

### 🔧 Mejoras Recomendadas

#### 1. **✅ Modernización del Stack Tecnológico - COMPLETADO**
```json
// ✅ Actualizaciones implementadas exitosamente
{
  "react": "^18.2.0",           // ✅ Actualizado desde 16.14.0
  "react-dom": "^18.2.0",       // ✅ Migrado a createRoot API
  "react-router-dom": "^6.8.0", // ✅ API moderna implementada
  "webpack": "^5.100.1",        // ✅ Mejor rendimiento y características
  "eslint": "^8.57.0",          // ✅ Sin vulnerabilidades
  "@babel/core": "^7.22.0"      // ✅ Migrado desde Babel 6
}
```
**Estado**: ✅ **COMPLETADO** - Compilación exitosa sin warnings.

#### 6. **Mejoras en Estado y Datos**
- **Implementar Context API** o **Zustand** para reemplazar Redux (overkill para este proyecto)
- **LocalStorage/SessionStorage** para persistir datos del formulario
- **React Query** para manejo avanzado de estado del servidor
- **Validación con Formik + Yup** en formularios

#### 3. **✅ Performance y Optimización - COMPLETADO**
```javascript
// ✅ Lazy loading implementado
const Home = lazy(() => import('./pages/home'));
const Rutas = lazy(() => import('./pages/rutas'));
const Blog = lazy(() => import('./pages/blog'));

// ✅ Memorización de componentes aplicada
const Navbar = memo(() => { /* componente */ });
const Footer = memo(() => { /* componente */ });
const Tarjetas = memo(() => { /* componente */ });

// ✅ Code splitting avanzado configurado
// - Chunks separados para React, Redux, vendors
// - Runtime chunk para mejor caching
// - Assets optimizados por tipo

// ✅ Optimización de imágenes
// - Compresión automática en producción
// - Lazy loading de imágenes grandes
// - Formatos WebP para mejor compresión
```
**Estado**: ✅ **COMPLETADO** - Lazy loading, code splitting y memorización implementados.

#### 4. **✅ SEO y Optimización Web - COMPLETADO**
```html
<!-- ✅ Meta tags SEO implementados -->
<meta name="description" content="Hamaiketako Bilbao - La ruta imprescindible para ir de pintxos por Bilbao">
<meta name="keywords" content="pintxos, Bilbao, gastronomía, bares, euskadi, hamaiketako">

<!-- ✅ Preload de recursos críticos -->
<link rel="preload" href="https://fonts.googleapis.com/css?family=Montserrat" as="style">

<!-- ✅ Lazy loading de fuentes -->
<link rel="preload" href="..." as="style" onload="this.onload=null;this.rel='stylesheet'">
```
**Estado**: ✅ **COMPLETADO** - SEO básico y preload implementados.

#### 5. **Mejoras de UX/UI**
- **Dark mode** toggle
- **Skeleton loaders** durante cargas
- **Animaciones CSS** suaves con Framer Motion
- **PWA** capabilities (offline access, instalable)
- **Geolocalización** para mostrar bares cercanos

#### 5. **SEO y Accesibilidad**
- **React Helmet** para meta tags dinámicos
- **Atributos ARIA** mejorados
- **Alt texts** descriptivos en todas las imágenes
- **Estructura semántica** HTML mejorada

#### 7. **Testing y Calidad**
```javascript
// Testing suite propuesto
"devDependencies": {
  "@testing-library/react": "^13.4.0",
  "@testing-library/jest-dom": "^5.16.5",
  "jest": "^29.4.0",
  "cypress": "^12.5.0"
}
```

#### 8. **Backend y Datos**
- **Base de datos real** (Firebase/Supabase)
- **Autenticación** de usuarios
- **Comentarios y ratings** por bar
- **Upload de imágenes** de usuarios
- **API propia** para gestión de rutas

#### 9. **Funcionalidades Adicionales**
- **Mapa interactivo** con Leaflet/Google Maps
- **Sistema de favoritos**
- **Filtros avanzados** (precio, tipo cocina, horarios)
- **Compartir en redes sociales**
- **Notificaciones push** para eventos especiales

## 🚀 Scripts de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm start                    # Servidor de desarrollo en http://localhost:9000

# Producción
npm run build               # Build optimizado para producción
npm run prod                # Servidor de producción
npm run server              # Servidor Express

# Calidad de código
npm run precommit           # Linting con ESLint
```

## 📱 Responsive Design

La aplicación está optimizada para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Tu Nombre** - Proyecto Capstone Bottega Code School 2024

---

**Hamaiketako Bilbao** - Conectando tradición y tecnología para promover la rica cultura gastronómica vasca 🥘🍷
