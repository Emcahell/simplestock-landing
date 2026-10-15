# Licencia y Código Abierto — SimpleStock

**Última actualización:** {{ULTIMA_ACTUALIZACION}}

## Código abierto

SimpleStock es un proyecto de **código abierto**. Todo el código está publicado y
cualquier persona puede:

- **Leer y auditar** el código para verificar exactamente qué hace la App
  (incluido que no envía datos a ningún servidor).
- **Reportar errores** (bugs) abriendo un *issue*.
- **Sugerir mejoras** o proponer cambios mediante *issues* y *pull requests*.

Repositorio: `{{REPOSITORIO_URL}}`

### Cómo contribuir

1. Abre un **issue** describiendo el problema o la mejora (revisa primero que no
   exista uno igual).
2. Si vas a enviar código, abre un **pull request** con una descripción clara de
   los cambios.
3. Se agradece incluir pasos para reproducir y, si aplica, pruebas.

Las contribuciones aceptadas se incorporan bajo la misma licencia (MIT).

## Licencia MIT

La App se distribuye bajo la **Licencia MIT**, una licencia permisiva que permite
usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
copias del software, siempre que se conserve el aviso de copyright y esta
licencia.

```
MIT License

Copyright (c) {{TITULAR}}

Por la presente se concede permiso, libre de cargos, a cualquier persona que
obtenga una copia de este software y de los archivos de documentación asociados
(el "Software"), para usar el Software sin restricciones, incluyendo sin
limitación los derechos de usar, copiar, modificar, fusionar, publicar,
distribuir, sublicenciar y/o vender copias del Software, y permitir a las
personas a las que se les proporcione el Software que lo hagan, con sujeción a
las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las
copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
IMPLÍCITA, INCLUYENDO PERO NO LIMITÁNDOSE A LAS GARANTÍAS DE COMERCIABILIDAD,
IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN,
DAÑOS U OTRA RESPONSABILIDAD, YA SEA EN UNA ACCIÓN CONTRACTUAL, EXTRACONTRACTUAL
O DE OTRO TIPO, QUE SURJA DE, FUERA DE O RELACIONADA CON EL SOFTWARE O EL USO U
OTRAS OPERACIONES EN EL SOFTWARE.
```

> **Nota importante sobre el titular del copyright:** la plantilla inicial del
> proyecto incluye un archivo `LICENSE` con el copyright de la plantilla de
> origen (Expo / 650 Industries). Si el proyecto se publica como MIT propio,
> **reemplaza el titular** por `{{TITULAR}}` en el archivo `LICENSE` del
> repositorio y en el texto de arriba, para evitar ambigüedad. Verifica también
> que los componentes de terceros conserven sus propias licencias.

## Componentes de terceros

SimpleStock se construye sobre tecnologías de código abierto, entre ellas:

- **Expo / React Native** — entorno y framework.
- **expo-sqlite** — base de datos local SQLite.
- **expo-image** y **expo-image-picker** — mostrar y elegir imágenes.
- **Expo Router** — navegación entre pantallas.
- **phosphor-react-native** — iconografía.
- **nativewind / tailwindcss** — estilos.
- y demás dependencias listadas en `package.json`.

Cada componente conserva su propia licencia; se recomienda revisar
`package.json` y los avisos de licencia de cada dependencia al redistribuir la
App. Estos componentes **funcionan localmente** y no transmiten tus datos a sus
autores en el uso normal de la App.

## Aviso de marcas

El nombre y el logotipo de SimpleStock pertenecen a `{{TITULAR}}`. El uso del
código bajo la licencia MIT no otorga derechos sobre las marcas del proyecto más
allá de lo permitido por la ley.
