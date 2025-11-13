# Carta de cumpleanos interactiva

Aplicacion Next.js que genera una carta de cumpleanos con efectos visuales, linea del tiempo, fotos laterales y reproductor de audio. Todo el contenido vive en un unico archivo (`src/data/content.ts`), lo que permite personalizarlo sin tocar componentes.

## Requisitos

- Node.js 18.17+ (recomendado LTS mas reciente)
- npm 9+ o el gestor equivalente (yarn, pnpm, bun)

## Instalacion

1. Clona o descarga este repositorio.
2. Instala dependencias:
   ```bash
   npm install
   ```

## Uso basico

1. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre `http://localhost:3000` en el navegador.
3. Ajusta el contenido en `src/data/content.ts`. Cambia textos, imagenes y toggles (`sections`) segun necesites.
4. El sitio se actualiza automaticamente al guardar.

## Demo guiada

1. Arranca el modo desarrollo (`npm run dev`).
2. Al cargar la pagina deberias ver:
   - Encabezado con el titulo "Feliz cumple, Demo".
   - Efecto de confeti/corazones si la seccion de efectos esta activa.
   - Carta con efecto maquina de escribir (puedes pausar/reproducir audio demo).
   - Rieles de fotos y linea del tiempo con informacion generica.
3. Desplazate hasta el mosaico de memorias y verifica el boton de compartir.
4. Opcional: modifica valores en `sections` para ocultar/mostrar bloques y recarga para comprobarlos.

## Personalizar contenido

1. Abre `src/data/content.ts`.
2. Reemplaza textos de `hero`, `letter`, `timeline`, `photos`, `memories` y `loveMessage`.
3. Cambia rutas de imagen por archivos propios dentro de `public/`.
4. Ajusta los toggles en `sections` para activar solo lo necesario.
5. Si necesitas otra combinacion cromatica, crea un nuevo valor en `theme.palette` y actualiza el tema en tu capa de estilos.

## Construir y desplegar

```bash
npm run build
npm run start
```

Deploy sugerido: Vercel (importa el repo y establece `npm run build` como comando). Cualquier plataforma compatible con Next.js 14 funcionara.

## Limpieza de datos

El archivo de contenido ya esta "blanqueado" con datos demo. Antes de compartir una version publica, revisa nuevamente textos, imagenes y audios para evitar referencias personales.
