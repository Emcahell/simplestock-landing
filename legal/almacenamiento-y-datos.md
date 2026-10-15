# Almacenamiento y datos — SimpleStock

**Última actualización:** {{ULTIMA_ACTUALIZACION}}

Este documento describe, a nivel técnico, **dónde y cómo** la App guarda tu
información. La idea central: **todo vive dentro de tu teléfono** y nada se
transmite a servidores.

## 1. Base de datos local (SQLite)

La App usa **SQLite** (mediante `expo-sqlite`) para persistir los datos en un
archivo local llamado `simplestock.db`, ubicado en el **almacenamiento privado de
la aplicación** (sandbox) dentro de tu dispositivo.

Este almacenamiento:

- Es **privado de la App**: otras aplicaciones no pueden leerlo directamente.
- **No requiere conexión a Internet**.
- **No se sincroniza** con ningún servidor del desarrollador.

### Qué se guarda (tablas)

| Tabla | Contenido |
| --- | --- |
| `products` | Productos: nombre, descripción, categoría, precio, stock, SKU, referencia de imagen, fechas. |
| `categories` | Categorías de productos. |
| `restocks` | Surtidos/ingresos de mercancía y stock resultante. |
| `sales` | Ventas: código, total y fecha. |
| `sale_items` | Detalle de cada venta: producto, cantidad y precio unitario. |
| `activities` | Historial interno de actividad (producto creado, venta registrada, etc.). |
| `settings` | Preferencias, incluido el **nombre** del usuario y el tema. |

## 2. Imágenes de productos

Cuando eliges una foto para un producto:

1. La App solicita permiso para acceder a tus **imágenes** (ver
   [`/permisos`](./permisos)).
2. Tú seleccionas **manualmente** una imagen concreta.
3. La App guarda una **referencia local** (ruta/URI) a esa imagen; la imagen
   **permanece en tu dispositivo** y **no se sube a ningún lado**.

La App **no** escanea ni lee tu galería de forma automática: solo recibe la
imagen que tú eliges.

## 3. Sin red

- La App **no realiza llamadas de red** para su funcionamiento: no hay `fetch`,
  APIs propias ni servicios externos.
- No hay inicio de sesión ni sincronización.
- El permiso de Internet que pueda aparecer en el paquete de Android es estándar
  del entorno de desarrollo y **no se usa para enviar tus datos**. Ver
  [`/permisos`](./permisos).

## 4. Copias de seguridad del sistema operativo (importante)

La App **no crea copias de seguridad en la nube**. Sin embargo, el **sistema
operativo** del teléfono puede incluir los datos de las apps en sus propias
copias de seguridad (por ejemplo, **Android Auto Backup** hacia tu cuenta de
Google, o **iCloud** en iOS), **según tu configuración y la del dispositivo**.
Ese comportamiento lo controla el sistema operativo y tu cuenta, no la App.

Si te preocupa que el respaldo del sistema incluya estos datos:

- En Android: revisa *Ajustes → Google → Copia de seguridad* (o los ajustes de
  respaldo del fabricante).
- En iOS: revisa *Ajustes → [tu cuenta] → iCloud → Copia de seguridad de
  iCloud* y la gestión de datos por app.

## 5. Eliminación de datos

- Puedes borrar registros individuales desde la App.
- Al **desinstalar la App**, el sistema operativo elimina su almacenamiento
  privado y, por tanto, la base de datos `simplestock.db` y las preferencias.
- Esta eliminación es **definitiva**: al no haber copia en la nube del
  desarrollador, no se puede restaurar desde ningún servidor.

> Recomendación: si necesitas conservar tu información, haz respaldos periódicos
> por los medios que ofrezca tu dispositivo (por ejemplo, la propia copia de
> seguridad del sistema).

## 6. Cifrado

- La App **no aplica cifrado propio** a la base de datos local.
- La protección depende del **cifrado del dispositivo** y del **bloqueo de
  pantalla** (PIN, patrón, contraseña o biometría) que tengas configurados.
- Se recomienda mantener el cifrado del teléfono activado.

## 7. Entorno web (si aplica)

Si en el futuro se usa la versión web, esta no emplea SQLite nativo sino el
almacenamiento local del navegador (*localStorage*) como respaldo de la misma
API de ajustes. En ese caso, los datos seguirían guardándose **solo en tu
navegador**, sin enviarse a servidores.
