# Guía de estilo Node

Guia de estilos que se debe cumplir al crear archivos JS para el Back, se debe
separar cada archivo de JS por cada vista que se tenga en la aplicacion.

# Tabla de contenido

[[_TOC_]]

# Archivos

- Codificación UTF-8 sin BOM
- Una única línea vacía al final
- Ninguna línea del archivo debe tener espacios al final

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

Simples `'` en lugar de dobles `"`

# Validación de errores

- Debe ocurrir al inicio de las funciones, si les hace falta un dato o no llega
cómo lo esperan, finalicen la ejecución (`return`) y devuelvan el error. De lo
contrario, continúan con la creación de lo que necesiten

# Nombres

## Claridad

Claros y directos, con la intención de lo que quieren lograr

### Correcto

```javascript
const courseName = 'Castillo';
```

### Incorrecto

```javascript
const c = []; // No se entiende qué es lo que guarda 'c'
```

## Constantes

Deben ir en el archivo .env y en el archivo .env.example, la llave debe ir en
mayuscula con snake_case, si son datos de prueba debe ir solo en .env si son
datos que siempre van a estar asi deben ir los valores tambien en .env.example,
debe ir la llave seguido de un igual seguido del valor sin espacios, el valor
no debe tener comillas

### Correcto

```javascript
USUARIO_NOMBRE=prueba
```

### Incorrecto

```javascript
USUARIO_NOMBRE = prueba /*No puede tener espacios*/
USUARIOAPELLIDO=prueba /*Tiene que ir con snake_case*/
```

## Todo lo demás

Debe ir con camelCase, siempre debe ir con espacios entre el igual y el nombre
de variable y su valor, si se usan clases debe comenzar con mayuscula la primera
letra, y siempre debe ir con espacio entre los nombres y sus llaves.

### Correcto

```javascript
const numeroPequeno = 1;
class Carro {
  // ...
}
```

### Incorrecto

```javascript
const numero_pequeno = 1; // No se deben usar rayas al piso para separar las palabras
class carro{ // Las clases comienzan con letra mayúscula
  // ...
}
```

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

# Clases `class`

- Llave de apertura en la misma línea del nombre, con un espacio de lo que la
precede
- Llave de cierre en una línea a parte completamente solita

## Correcto

```javascript
class Carro {
  // ...
}
```

## Incorrecto

```javascript
class Carro
{ // La llave de apertura del bloque debe ir en la misma línea del código que la precede
  // ...
}
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

## Invocación

Se debe invocar con paretesis pegados al nombre de la funcion y con espacio
entre los parametros, si los parametros exeden los 80 caracteres colocarlos en
nuevas lineas

### Correcto

```javascript
cambiar($lugar, $posicion);
```

### Incorrecto

```javascript
cambiar ($lugar,$posicion); // No debe haber espacio entre el nombre de la función y el paréntesis que abre la lista de argumentos
cambiar($lugar,$posicion); // Falta espacio luego de la coma
cambiar( $lugar, $posicion ); // No debe haber espacios entre los paréntesis y los argumentos
```

# Ciclos `for`

- Paréntesis que inicia la sentencia separado del `for` por un espacio
- Siempre se deben declarar con `let` la variable de iteracion
- Operandos y operadores separados por un espacio
- Cada punto y coma `;` de la sentencia debe ir junto a lo que lo precede (sin
espacios) y con un espacio después
- Llave de apertura en la misma línea, dejando un espacio del último paréntesis
- Llave de cierre en una línea a parte completamente solita

## Correcto

```javascript
for (let iterador = 0; iterador < 10; iterador++) {
  // ...
}
```

## Incorrecto

```javascript
for(var iterador=0;iterador<10;iterador++){ // Faltan espacios de separación
  // ...
}
```
# Ciclos `while`

- Paréntesis que inicia la condición separada del `while` por un espacio
- Operandos y operadores separados por un espacio
- Llave de apertura en la misma línea, dejando un espacio del último paréntesis
- Llave de cierre en una línea a parte completamente solita

## Correcto

```javascript
while (iterador > 10) {
  // ...
}
```

## Incorrecto

```javascript
while(iterador>69){ // Faltan espacios de separación
  // ...
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

# Operaciones

- Encerradas entre paréntesis `()`
- Operandos y operadores separados por un espacio

## Correcto

```javascript
const suma = (1 + 1);
```

## Incorrecto

```javascript
const suma = 1 + 1; // Faltan paréntesis que encierran la operación, y espacios de separación
```

# Operador ternario `?:`

- Encerrados entre paréntesis `()`
- Operandos y operadores separados por un espacio

## Correcto

```javascript
const usuario = (autenticado ? true : false);
```

## Incorrecto

```javascript
const usuario = autenticado ? true : false; // Faltan paréntesis que encierran el operador completo, y espacios de separación
```

# Objetos

- Se debe usar destructuracion cuando se vayan a traer propiedades del objeto

```javascript
const usuario = {
  nombre: 'prueba',
  correo: 'prueba@prueba.com',
}
const {nombre, correo} = usuario;
```

## Uso de valores posiblemente inexistentes

Se debe utilizar `const puerto = process.env.port || 8081`

# Archivos

## routes

Deben ir las rutas, aqui es donde se van a crear los archivos padres que definen
que va a mostrar y tener la aplicacion

## services

Van a ser los controladores que van a tener el flujo de ir a la base de datos o
solicitar apis para realizar una accion que va a ser enviada a la ruta

## lib

Van a ser las librerias creadas por los desarrolladores con funcionalidades que
se van a usar a lo largo de la plataforma como conexiones a base de datos

## utils

contiene los middleware y los archivos que van a servir para realizar una tarea
en especifico
