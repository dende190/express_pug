# Guía de estilo JavaScript

Guia de estilos que se debe cumplir al crear archivos JS para el front, se debe
separar cada archivo de JS por cada vista que se tenga en la aplicacion.

# Tabla de contenido

[[_TOC_]]

# Archivos

- Codificación UTF-8 sin BOM
- Una única línea vacía al final
- Ninguna línea del archivo debe tener espacios al final
- Inician con `'use strict';`, de manera tal que el navegador haga una revisión
de JavaScript estricto y evite la ejecución de código con malas prácticas
- Se debe usar ES6 o posterior

# Idioma

las funciones, variables deben ir en ingles, mientras se construye un
controlador de lenguajes los texto mostrados al cliente debe ir en espanol.
Los nombres de las variables se deben crear con el elemento que tenga mas peso
primero en el nombre y con camelCase por ejemplo `cursoId` en lugar de `idCurso`

# Sangría

- Espacios en lugar de tabuladores
- Cada nivel de sangría debe tener 2N espacios al inicio, donde N es el nivel
(contando desde cero)
- El nivel de sangría comienza a contar por cada archivo, si mueven código de un
archivo a otro deben revisar que coincida con el nivel del nuevo archivo

## Correcto

```javascript
if (userData) {
  for (user in userData) {
    document.body.appendChild(user);
  }
}
```

## Incorrecto

```javascript
if (userData) {
    for (user in userData) { /*4 espacios*/
        document.body.appendChild(user);
    }
}
```

# Comillas

Simples `'` en lugar de dobles `"`, y únicamente cuando sean necesarias

# Concatenar texto

Como se usara ES6 se debe usar por medio de comillas especiales "\`" para
concatenar texto

## Correcto

```javascript
const saludo = `hola ${userName}`;
```

## Incorrecto
```javascript
const saludo = 'hola ' + userName;
```

# Validación de errores

Siempre debe ocurrir al inicio de las funciones, si les hace falta un dato se
acabó (`return`), sino continúan con la creación de lo que necesiten

# Creacion de variables

- Siempre deben tener punto y coma al final de la linea `;`
- Siempre se debe declarar una variable en una linea unica asi existan varias
con el mismo valor
- se debe usar `const` en todo lo que se pueda, en caso de no poderse se debe
usar `let`, nunca usar `var` ni crear variables globales

## Correcto

```javascript
const nombre = 'Prueba';
const estudiante = 'Prueba';
```

## Incorrecto

```javascript
var nombre = 'Prueba'; /*NO usar var*/
const estudiante, nuevoEstudiante = 'Prueba'; /*No declarar variables en la misma linea*/
```

# Funciones `function`

## Nombradas

- Paréntesis que inicia los parámetros en la misma línea del nombre, sin
espacios de lo que preceda
- Parámetros separados por una coma y un espacio
- Si un parámetro tiene un valor por defecto, el signo igual debe tener un
espacio a ambos lados
- Llave de apertura en la misma línea del nombre, con un espacio de lo que la
precede
- Llave de cierre en una línea a parte completamente solita
- Si los parametros pasan los 80 caracteres deben tener linea nueva
por parametro

### Correcto

```javascript
function cambiar(lugar, posicion = 1) {
  // ...
}

function conMuchosParametros(
  parametro1,
  parametro2,
  parametro3,
  parametro4,
  parametro5
) {
  // ...
}
```

### Incorrecto

```javascript
function cambiar(lugar,posicion){ // Faltan espacios de separación
  // ...
}

function conMuchosParametros(parametro1, parametro2, parametro3, parametro4, parametro5) { /*mas de 80 caracteres*/
  // ...
}
```

## Anónimas

- Paréntesis que inicia los parámetros en la misma línea de `function`, sin
espacios de lo que preceda
- Parámetros separados por una coma y un espacio
- Llave de apertura en la misma línea del nombre, con un espacio de lo que la
precede
- Llave de cierre en una línea a parte completamente solita, o en la misma línea
si el bloque no es extiende

### Correcto

```javascript
document.body.addEventListener('click', function() {console.log('hola');});
```

### Incorrecto

```javascript
document.body.addEventListener('click', function() {console.log('hola');});
```

## Funciones flecha

- Si tiene solo un parametro no se debe usar parentesis
- Si solo va a retornar un valor no deberia tener parentesis
- Debe tener un espacio entre los parametros y la flecha, y tambien entre la
flecha y el contenido de la funcion asi sea solo un return

```javascript
document.body.addEventListener('click', () => console.log('hola'));
document.body.addEventListener('click', evento => console.log('hola'));

document.body.addEventListener('click', () => {
  // ...
});
```
### Incorrecto

```javascript
document.body.addEventListener('click', () => {return console.log('hola')}); //Solo va a retornar algo, no deberia tener llaves y solo deberia tener el valor a retornar
document.body.addEventListener('click', (evento) => console.log('hola')); /*No deberia tener parentesis porque solo hay un parametro*/

document.body.addEventListener('click', ()=>{ /*No tiene los espacios correctos*/
  // ...
});
```

## Retorno

Siempre deben retornar el mismo tipo de datos la funcion, si retorna un string
siempre debe retornar un string

### Correcto

```javascript
function cambiar(lugar, posicion) {
  if (posicion === 1) {
    return true;
  }

  return false;
}
```

### Incorrecto

```javascript
function cambiar(lugar, posicion) {
  if (posicion === 1) {
    return true;
  }

  return 0; /*No deberia retonar un numero sino un booleano*/
}
```

# Condicionales `if`

- Paréntesis que inicia la condición separada del `if` por un espacio
- Operandos y operadores separados por un espacio
- Llave de apertura en la misma línea, dejando un espacio del último paréntesis
- Llave de cierre en una línea a parte completamente solita
- uso de tres iguales al comparar valores `===`
- No se deben comprar con `true` o `false` si no es necesario:
  `if (usuarioRegistrado === true)`, esto deberia ser `if (usuarioRegistrado)`
  `if (usuarioRegistrado === false)`, esto deberia ser `if (!usuarioRegistrado)`

## Correcto

```javascript
if (identificador === 1) {
  // ...
} else if (usuarioRegistrado) {
  // ...
} else {
  // ...
}
```

## Incorrecto

```javascript
if(identificador==1){ // Faltan espacios de separación
  // ...
} else if (usuarioRegistrado === true) {
  // ...
}
else { // El 'else' debe estar en la misma línea que la llave de cierre del bloque anterior
  // ...
}
```
# Equivalencias

## Múltiples comparaciones

`x === 69 || x === 68` es lo mismo que `[69, 68].indexOf(x) >= 0`. Utilizar
`Array.indexOf` facilita la modificación del código en el futuro, así cómo la
lectura del mismo

# Caracteres por línea

No debe haber más de 80 caracteres en una línea, a menos que separar los
componentes afecte el contenido de la misma y/o no permita entender claramente
lo que hace. Al separar, se debe tener en cuenta que todos los elementos
"hermanos" deben quedar en una nueva línea, bien sean selectores o valores

## Correcto

```javascript
(
  document
  .querySelector('.classroom-arrows a.right-arrow')
  .style
  .cssText = 'display: block !important'
);
```

## Incorrecto

```javascript
document.querySelector('.classroom-arrows a.right-arrow').style.cssText = 'display: block !important'; // Tiene más de 80 caracteres, y se puede separar
```
