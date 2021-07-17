# Guía de estilo CSS

Guia de estilos que se debe cumplir al crear archivos CSS, se debe separar cada
hoja de estilos por cada vista que se tenga en la aplicacion, se va a usar una
metodoligia BEM modificada que se explicara acontinuacion.

# Tabla de contenido

[[_TOC_]]

# Archivos

- Codificación UTF-8 sin BOM
- Una única línea vacía al final
- Ninguna línea del archivo debe tener espacios al final

# Sangría

- Espacios en lugar de tabuladores
- Cada nivel de sangría debe tener 2N espacios al inicio, donde N es el nivel
(contando desde cero)

## Correcto

```css
@media print {
  .menu {
    display: none;
  }
}
```

## Incorrecto

```css
@media print {
    .menu { /* Cuatro espacios en lugar de dos */
        display: none; /* Utiliza tabulador */
    }
}
```

# Nombres de clases

Deben ser en ingles usando BEM, deben ser claros con el estilo que realizan o
el elemento que abarcan.
No se deben usar atributos de HTML, solo deberian existir clases para que sean
unicas y tengan claridad con lo que hacen o lo que modifican.

## BEM Modificado

Se va a usar la metodologia BEM modificando algunas cosas para mejorar su uso,
se va a separar con dos guiones entre la B y la E `B--E`, para crear propiedades
se van a crear separadas de la clase y se va a crear con un guion `-M`, para
separar los nombres que tengan espacios se va a hacer con guion bajo
`elemento_padre`
1. B -> Va a ser el contenedor padre
2. E -> Va a ser el elemento que se va a estar usando
3. M -> Va a ser la propiedad que se va a modificar

### Correcto

```html
<section class="container_form">
  <form class="login">
    <input class="login--email" />
    <button class="login--email -disabled"></button>
  </form>
</section>

```

```css
.login--email .-disabled {
  opacity: 0.5;
  color: grey;
}
```

# Comillas

Simples `'` en lugar de dobles `"`, y únicamente cuando sean necesarias

## Correcto

```css
font-family: 'courier new';
background: url(ruta/de/la/imagen.png);
```

## Incorrecto

```css
font-family: "courier new"; /* Utiliza comillas dobles */
background: url('ruta/de/la/imagen.png'); /* Las comillas no son necesarias */
```

# Separar clases

No se deben usar clases separadas por coma `,` para darle estilos iguales a
varias clases, se debe crear una clase que use las dos o separarlas

## Correcto

```css
.boton {
  cursor: pointer;
}
.enlace {
  cursor: pointer;
}
```
## Correcto
```css
.cursor_pointer {
  cursos: pointer;
}

```

## Incorrecto

```css
.boton, .enlace { /* Dos selectores utilizan un mismo bloque */
  cursor: pointer;
}
```

# Bloques

- Deben tener la llave de apertura `{` en la misma línea del código que la
precede, con un único espacio entre dicho código y la llave
- Deben tener la llave de cierre `}` en una línea a parte, al mismo nivel de
sangría de la línea que abre el bloque

## Correcto

```css
.boton {
  cursor: pointer;
}
.enlace {
  cursor: pointer;
}
```

## Incorrecto

```css
.boton{ /* No tiene el espacio entre el código y la llave */
  cursor: pointer;
}
.enlace
{ /* Debería ir luego del código, separada por un espacio */
  cursor: pointer; } /* La llave de cierre debe estar en una línea aparte */
```

# Propiedades

- Lleva los dos puntos `:` inmediatamente después del nombre, sin espacios
- El nombre se separa del valor por un espacio
- Siempre deben tener el punto y coma `;` luego del valor, así sea la última
propiedad, sin espacios

## Correcto

```css
.boton {
  cursor: pointer;
}
.enlace {
  cursor: pointer;
}
```

## Incorrecto

```css
.boton {
  cursor:pointer; /* Falta el espacio entre los dos puntos (:) y el valor */
}
.enlace {
  cursor: pointer /* Falta el punto y coma luego del valor */
}
```

# Mezcla con HTML

Nunca debe ocurrir. No se debe utilizar `style` cómo atributo ni cómo
etiqueta.

# Caracteres por línea

No debe haber más de 80 caracteres en una línea, a menos que separar los
componentes afecte el contenido de la misma y/o no permita entender claramente
lo que hace. Al separar, se debe tener en cuenta que todos los elementos
"hermanos" deben quedar en una nueva línea, bien sean selectores o valores

## Correcto

```css
@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);
.pagina
.articulo
.encabezado
.navegacion
.elemento
.subelemento
.parrafo
.imagen {
  border: 1px solid black;
}
.pagina {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}
```

## Incorrecto

```css
.pagina .articulo .encabezado .navegacion .elemento .subelemento .parrafo .imagen { /* Tiene más de 80 caracteres, y se puede separar */
  border: 1px solid black;
}
.pagina {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); /* Tiene más de 80 caracteres, y se puede separar */
}
```

# Uso de !important

No se debe usar !important en el CSS, se debe ser especifico con las clases para
que no se sobrepongan los estilos entre clases

## Correcto

```css
.container .element .children {
  color: red;
}
```

## Incorrecto

```css
.children {
  color: red !important;
}
```
