# Documentación legal — SimpleStock

Este directorio reúne los textos legales y de transparencia de **SimpleStock** para
usarlos en el sitio web del proyecto. **No forman parte del código de la app**
(la aplicación no muestra estas pantallas; solo se publican en la web).

> **Aviso:** estos documentos son borradores redactados con base en el
> funcionamiento real de la app. No constituyen asesoría legal. Antes de
> publicarlos, revísalos (idealmente con un profesional) y ajusta la legislación
> aplicable a tu país.

## Archivos

| Archivo | Contenido |
| --- | --- |
| [`terminos-y-condiciones.md`](./terminos-y-condiciones.md) | Términos y condiciones de uso. |
| [`politica-de-/privacidad`](./politica-de-/privacidad) | Política de privacidad: qué datos se manejan y por qué no se recopilan. |
| [`/datos`](.//datos) | Detalle técnico de dónde y cómo se guardan los datos en el teléfono. |
| [`/permisos`](.//permisos) | Permisos del sistema que usa la app y los que **no** usa. |
| [`/licencia`](.//licencia) | Licencia MIT, código abierto y cómo contribuir. |
| [`descargo-de-/responsabilidad`](./descargo-de-/responsabilidad) | Limitación de responsabilidad (seguridad del dispositivo, pérdida de datos, etc.). |
| [`preguntas-frecuentes.md`](/preguntas-frecuentes) | Preguntas frecuentes sobre privacidad y datos. |

## Resumen en una frase

**SimpleStock es 100% local y offline**: no hay servidores, cuentas, analíticas ni
publicidad; todos los datos (tu nombre, productos, ventas, surtidos e historial)
se guardan únicamente dentro del teléfono, en el almacenamiento privado de la app,
y el código fuente es abierto bajo licencia MIT para que cualquiera pueda
auditarlo, reportar problemas o proponer mejoras.

## Puntos clave

- **Sin recolección de datos personales.** No se piden correo, teléfono, ubicación
  ni contactos.
- **El único dato "personal" es un nombre** que escribe el usuario al iniciar y
  que **puede ser cualquier nombre**, no necesariamente el real.
- **Nada sale del dispositivo.** No hay conexiones a servidores ni envío de
  información.
- **Sin analíticas, sin rastreadores, sin anuncios, sin SDKs de terceros** que
  recopilen datos.
- **El desarrollador no puede ver tus datos**, porque nunca llegan a ningún
  lugar fuera de tu teléfono.
- **Código abierto (MIT).** El código es público y auditable; las mejoras y
  reportes van por los *issues* del repositorio en GitHub.
- **Único permiso funcional:** acceso a **imágenes/fotos** del dispositivo, y
  solo para elegir la foto de un producto. No se recorre ni se accede de forma
  arbitraria al contenido personal.

## Marcadores a reemplazar

Sustituye estos marcadores antes de publicar:

- `{{REPOSITORIO_URL}}` → URL del repositorio en GitHub
  (p. ej. `https://github.com/tu-usuario/simplestock`).
- `https://github.com/Emcahell/simplestock/issues` → correo de contacto para temas legales.
- `{{TITULAR}}` → tu nombre o el de tu organización (titular del copyright).
- `{{PAIS_O_JURISDICCION}}` → país/ciudad cuya legislación aplica.
- `{{ULTIMA_ACTUALIZACION}}` → fecha de última actualización (redactados el
  **14 de octubre de 2026**).
- `{{NOMBRE_APP}}` → se usó **SimpleStock**; cámbialo si el nombre comercial
  difiere.
