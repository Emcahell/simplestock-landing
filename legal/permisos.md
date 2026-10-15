# Permisos del dispositivo — SimpleStock

**Última actualización:** {{ULTIMA_ACTUALIZACION}}

Este documento lista los permisos que la App **usa realmente**, para qué, y los
que **no** usa. El objetivo es la transparencia: la App está diseñada para no
tocar tu información personal más allá de lo estrictamente necesario para su
función.

## Resumen

| Función | Permiso | ¿Se usa? |
| --- | --- | --- |
| Elegir la foto de un producto | **Imágenes / Fotos** (galería) | **Sí** |
| Cámara | Cámara | No |
| Micrófono / grabación de audio | Micrófono | No |
| Ubicación | Ubicación (aprox./precisa) | No |
| Contactos | Contactos | No |
| Calendario | Calendario | No |
| Mensajes (SMS/MMS) | SMS | No |
| Registro de llamadas | Teléfono | No |
| Bluetooth / dispositivos cercanos | Bluetooth | No |
| Salud / actividad física | Salud | No |
| Datos biométricos | Biometría | No |

## 1. Imágenes / Fotos (único permiso funcional)

**Para qué:** poder elegir una imagen para un producto (por ejemplo, la foto de
un artículo del inventario).

**Cómo funciona:**

- La App **solo** accede a la imagen que **tú seleccionas manualmente**.
- **No** abre, escanea ni lee el resto de tu galería.
- **No** modifica ni borra tus fotos.
- La imagen queda en tu dispositivo; la App guarda solo una referencia local a
  ella.

**Nombres técnicos por plataforma:**

- **Android 13+**: selección de imágenes mediante el selector del sistema
  (`READ_MEDIA_IMAGES` / selector seguro). En versiones con Foto Picker del
  sistema puede no requerir permiso amplio: solo compartes la imagen elegida.
- **Android 12 o inferior**: `READ_EXTERNAL_STORAGE` (limitado a `maxSdkVersion`
  ≤ 32).
- **iOS**: `NSPhotoLibraryUsageDescription` (acceso a la fototeca).

**Control:** puedes revocar este permiso en cualquier momento desde los ajustes
de tu teléfono (*Ajustes → Aplicaciones → SimpleStock → Permisos*, o
*Ajustes → SimpleStock → Fotos* en iOS). Si lo revocas, no podrás elegir fotos
para los productos, pero el resto de la App seguirá funcionando.

## 2. Permisos que la App NO usa

La App **no** solicita ni utiliza:

- **Cámara** (no toma fotos directamente).
- **Micrófono** (no graba audio).
- **Ubicación**.
- **Contactos**, **calendario**, **SMS** ni **registro de llamadas**.
- **Bluetooth** ni dispositivos cercanos.
- **Datos de salud**, **actividad física** ni sensores corporales.
- **Publicidad / identificador de seguimiento** (no hay rastreo).

Tampoco incluye SDKs de terceros con fines de publicidad o analítica.

## 3. Permiso de Internet

En el paquete de Android puede aparecer el permiso estándar `INTERNET`. Es parte
del entorno de desarrollo de la plataforma y **no se utiliza para enviar tus
datos**: la App no realiza llamadas a servidores y funciona sin conexión.

## 4. Nota para el desarrollador (minimizar permisos)

Los proyectos creados con plantillas de Expo suelen traer permisos y textos de
permiso **por defecto** que la plantilla incluye aunque no se usen (por ejemplo,
cámara, micrófono o `VIBRATE`/`SYSTEM_ALERT_WINDOW` en el entorno de desarrollo).

Antes de publicar en las tiendas, se recomienda **revisar y minimizar** los
permisos declarados, de modo que la ficha de la tienda refleje solo lo necesario
(idealmente, solo el acceso a imágenes). Esto se configura en `app.json`
(plugin `expo-image-picker` y, si aplica, bloqueo de permisos no deseados) y se
regenera con *Continuous Native Generation* (nunca editando `android/` o `ios/`
a mano).

Puntos a verificar en la versión de publicación:

- Que **no** se declaren permisos de cámara, micrófono, ubicación, contactos,
  etc. si no se usan.
- Que los **textos de permiso** (descripciones) sean claros y en el idioma de
  publicación.
- Que el único permiso necesario sea el de **imágenes/fotos**.

## 5. Cómo revisar los permisos que pide una app

- **Android:** *Ajustes → Aplicaciones → SimpleStock → Permisos*.
- **iOS:** *Ajustes → SimpleStock* (sección de permisos).

Ahí puedes ver y revocar cualquier permiso concedido.
