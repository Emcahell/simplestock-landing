# Política de Privacidad — SimpleStock

**Última actualización:** {{ULTIMA_ACTUALIZACION}}

Esta Política de Privacidad explica qué información maneja **SimpleStock** ("la
App"), dónde se almacena y por qué puedes confiar en que tu información
permanece **exclusivamente en tu dispositivo**.

## Resumen

- **No recopilamos datos personales.**
- **No hay servidores**: la App no envía tu información a ningún lugar.
- **No hay cuentas, inicio de sesión, correo ni teléfono.**
- **No hay analíticas, rastreadores, publicidad ni SDKs de seguimiento.**
- **Todo se guarda localmente** en el almacenamiento privado de la App dentro de
  tu teléfono.
- El desarrollador **no puede ver** tu nombre, tus productos, tus ventas ni tus
  ingresos, porque esa información nunca sale de tu dispositivo.

## 1. Qué información maneja la App

La App funciona **100% offline** y almacena en el propio dispositivo:

| Dato | Descripción | ¿Es personal? |
| --- | --- | --- |
| **Nombre** | Se pide una vez, al iniciar. **Puede ser cualquier nombre** (no tiene que ser tu nombre real). | Opcional / a elección del usuario |
| **Productos** | Nombre, descripción, categoría, precio, stock, código SKU e imagen. | No |
| **Surtidos** | Ingresos de mercancía (producto, cantidad, descripción, stock resultante). | No |
| **Ventas** | Código, fecha, productos, cantidades, precio unitario y total. | No |
| **Historial de actividad** | Registro interno de lo que hiciste (producto creado, venta registrada, etc.). | No |
| **Preferencias** | Ajustes como el tema claro/oscuro y el modo de vista. | No |

Todos estos datos se guardan en una base de datos **SQLite local** dentro del
espacio privado de la App. Ver [`/datos`](./datos).

> El nombre es el **único** dato que podría considerarse personal, y se guarda
> solo en tu teléfono. Se recomienda no usar tu nombre legal si no lo deseas:
> cualquier apodo o etiqueta es válido.

## 2. Qué NO hace la App

- **No envía datos a ningún servidor** ni a terceros.
- **No recopila** correo electrónico, número de teléfono, ubicación, contactos,
  calendario, mensajes ni identificadores publicitarios.
- **No usa** analíticas (Google Analytics, Firebase, Sentry, etc.), rastreadores
  ni publicidad.
- **No crea** perfiles de usuario ni estadísticas que salgan del dispositivo.
- **No comparte ni vende** información, porque no la posee.
- **No requiere** conexión a Internet para funcionar.

## 3. Permisos del dispositivo

La App solicita acceso a **imágenes/fotos** únicamente para que puedas elegir la
foto de un producto. La App **no** accede de forma arbitraria ni recorre tu
galería: solo recibe la imagen concreta que tú seleccionas. El detalle está en
[`/permisos`](./permisos).

## 4. Dónde se almacenan los datos

Todos los datos permanecen en el teléfono, en el almacenamiento privado de la
App. No se suben a la nube del desarrollador (que no existe). Para más detalle,
incluidas las consideraciones sobre las copias de seguridad del sistema
operativo, ver [`/datos`](./datos).

## 5. Seguridad

- Tus datos se guardan en el área privada de la App, protegida por el propio
  sistema operativo (cada app tiene su espacio aislado / *sandbox*).
- La App **no aplica un cifrado adicional propio** a la base de datos: la
  protección depende sobre todo del cifrado y bloqueo del dispositivo que
  configures (PIN, patrón, biometría, cifrado del teléfono).
- Si tu dispositivo es comprometido (por ejemplo, *malware*, *root*/jailbreak,
  acceso físico sin bloqueo), un tercero podría acceder a los datos almacenados.
  Eso está fuera del control de la App y es responsabilidad del usuario. Ver
  [`/responsabilidad`](./responsabilidad).

## 6. Privacidad de menores

La App no está dirigida a menores de edad ni recopila información de menores.
Como no se recopilan datos en servidores, no se realiza ningún tratamiento de
datos de menores.

## 7. Conservación y eliminación

- Los datos permanecen en tu teléfono hasta que tú los borres.
- Puedes eliminar registros desde la propia App (productos, ventas, surtidos).
- Al **desinstalar la App**, el sistema operativo elimina su almacenamiento
  privado y, con ello, todos los datos. Esta acción es irreversible: la App no
  tiene copia en la nube.

## 8. Tus derechos y control

Como toda la información está en tu dispositivo y no sale de él:

- Tienes **control total** sobre ella.
- No necesitas solicitar acceso, rectificación ni eliminación a nadie, porque
  nadie más la tiene.
- Puedes exportarla o respaldarla manualmente según los medios que ofrece tu
  sistema operativo.

## 9. Terceros y componentes de código abierto

La App está construida sobre tecnologías de código abierto (por ejemplo, Expo,
React Native y SQLite). Estos componentes **funcionan localmente** dentro de la
App y no transmiten datos a sus autores en el uso normal de SimpleStock. No se
incluyen SDKs de terceros con fines de publicidad o analítica. Ver
[`/licencia`](./licencia).

## 10. Cambios en esta política

Podemos actualizar esta política para reflejar cambios en la App. Publicaremos
la versión vigente con su fecha de actualización. Los cambios significativos se
destacarán en la web del proyecto.
