# Elevator Rush
<!-- TODO: Mejorar readme -->

Para ejecutar el proyecto, son necesarios: Node.js y Yarn.

Para crear ramas, es muy recomendable usar [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.es_ES.html).

Para ejecutar el proyecto:
```
yarn dev
```

Para construir el proyecto:
```
yarn build
```

## Uso de los assets
Para usar los assets hay varias clases en el archivo `Assets.ts`.

Debemos importar la clase que vayamos a usar con `import {Clase} from Assets`.
Luego podemos usar los assets con `Clase.NombreAsset.key`

Para añadir un asset, debemos añadirlo como `public static readonly`, y en el método `toArray` para que
se añada automágicamente al método que autocarga los assets.
