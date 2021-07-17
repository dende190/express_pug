# Gade Academy

Proyecto enfocado en clases virtuales para todas las edades enfocadas en el uso
de minecraft para multiples estilos de clases.
La rama principal para despliegues del proyecto es `master`

# Tabla de contenido

[[_TOC_]]

# Ramas

La rama principal es `master` donde se realizaran todos los despliegues, las
ramas de desarrollo va a ser una nueva para cada cambio que se va a realizar
con el nombre del cambio que se realizara `creacion_estudiantes`,
`modificar_controlador_usuarios` para tener claridad que hace cada rama,
cada rama que se cree debe estar clonada de master que sera la rama padre que
tiene todo el codigo correcto y funcional.

# Guías de estilos

El codigo debe desarrollarse siguiendo los siguientes estilos, cualquier cambio
se debe debatir y llegar a un consenso para saber que es lo mejor y lo que mejor
corresponda a las guias de estilos de las empresas grandes.

## Para el código en general

Se debe seguir estos lineamientos en cualquier archivo que se cree sin importar
su funcionaidad o lenguaje

### Idioma

Todo debe ir en ingles, cada clase, funcion, variable, tabla en la base de datos
debe ir en ingles y debe tener un nombre claro con lo que va a hacer, para no
tener que usar comentarios en el codigo.

### Archivos

- Codificación UTF-8 sin BOM
- Una única línea vacía al final
- Ninguna línea del archivo debe tener espacios al final
- Uso de espacios
- Uso de comillas sencillas

### Sangría

- Espacios en lugar de tabuladores
- Cada nivel de sangría debe tener 2N espacios al inicio, donde N es el nivel
(contando desde cero)

```javascript
// Nivel 0 de sangría, 0 espacios
function crear() {
  // Nivel 1 de sangría, 2 espacios
  const nombre = '';
  if (nombre) {
    // Nivel 2 de sangría, 4 espacios
    return ':)';
  }
}
```

### Código comentado

Si el codigo esta comentado es porque no sirve asi que se debe remover, si
llega a necesitarse GIT guardara todo en su repositorio para recuperarlo o
volverlo a crear cuando se vaya a usar.

### Caracteres por línea

No debe haber más de 80 caracteres en una línea, a menos que la guía
específica de cada lenguaje indique lo contrario

## Código CSS

Se puede ver en [/style_guide/css.md](/style_guide/css.md)

## Código PUG

Se puede ver en [/style_guide/html.md](/style_guide/pug.md)

## Código JavaScript Front

Se puede ver en [/style_guide/javascript.md](/style_guide/js.md)

## Código JavaScript Back

Se puede ver en [/style_guide/php.md](/style_guide/node.md)
