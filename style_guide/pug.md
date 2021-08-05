# Guía de estilo PUG

Guia de estilos que se debe cumplir al crear archivos PUG, cada archivo PUG debe
ser creado en `views` y debe tener una carpeta que corresponda a la ruta donde
se va a mostrar

# Tabla de contenido

[[_TOC_]]

# Archivos

- Codificación UTF-8 sin BOM
- Una única línea vacía al final
- Ninguna línea del archivo debe tener espacios al final

# Idioma

las clases deben ir en ingles, mientras se construye un controlador de lenguajes
el texto mostrado al cliente debe ir en espanol.

# Elementos
# Etiquetas

- Debe ir una por linea por propiedades de pug
- No debe abrirse ni cerrarse como etiqueta HTML
 - No usar `<` ni `>` solo el nombre de la etiqueta
- No debe tener etiqueta de cierre
 - Solo se debe crear `p` no se debe cerrar
- Se debe seguir la guia de sangria para que cierre correctamente las etiquetas

## Correcto

```pug
section
  p Hola
  p
    | Este es otro parrafo
    br
  p
    | Otro con
    a(href="http://example.com")
      enlace
  span Texto nuevo
  div
    h3 Titulo
    p Parrafo
```

## Incorrecto

```pug
<section>
  p Hola
  p
    | Este es otro parrafo <br />
  p
    | Otro con
    a(href="http://example.com")
      enlace
    a
  p
  span Texto nuevo
  div
    h3 Titulo
    p Parrafo
</section>
```

# Atributos

- Los atributos de cada etiqueta deben ir entre parentesis `()`
  - Se deben separar con espacio
  - No debe existir ningun atributo vacio
- Si el elemento solo tiene clases debe ir escrito junto con la etiqueta
- Si el atributo tiene un valor vacio como un `checked=""` se debe agregar un
valor `checked="checked"`
- Se debe crear el atributo con el nombre del atributo seguido de un igual `=` y
seguido el valor
- Si sobrepasa los 80 caracteres se deben colocar los atributos en una nueva
linea
- Los valores de los atributos siempre deben ir con comilla doble
- No debe tener espacios antes del parentesis de los atributos ni despues

## Correcto

```pug
form(
  class="form_login text_red text_uppercase"
  action="iniciar-sesion"
  method="post"
)
  input.form_login-content.text-blue
  label
    yes
    input(checked="checked")
```

## Incorrecto

```pug
form(class="form_login text_red text_uppercase" action="iniciar-sesion" method="post" ) /*Mas de 80 caracteres*/
  input(class="form_login-content text-blue") /*etiqueta clase unica*/
  label(class='') /*atributo vacio que no se usa y comillas sencillas*/
    yes
    input(checked="") /*atributo vacio*/
```

# Sangría

- Espacios en lugar de tabuladores
- Cada nivel de sangría debe tener 2N espacios al inicio, donde N es el nivel
(contando desde cero)
- El nivel de sangría comienza a contar por cada archivo, si mueven código de un
archivo a otro deben revisar que coincida con el nivel del nuevo archivo
- Cuando se mezcla con PHP, se comparten niveles entre ambos

## Correcto

```pug
html
  body
    section
      p Hola
```

## Incorrecto

```pug
html
    body /*Uso de 4 espacios*/
        section
            p Hola
```

# Formularios

Se debe garantizar que funcionen sin JavaScript, es decir, cada elemento tiene
su atributo `name` y su valor

# Clases para uso con JavaScript

No utilizar las clases o elementos creados, para uso en JavaScript siempre se
deben utilizar clases que comiencen con `js`

## Correcto

```pug
button.btn-success.jsSaveUser Guardar
```

# Mezcla con CSS y JavaScript

Nunca debe ocurrir. Si se deben utilizar estilos, se deben cargar desde otro
archivo, por medio de la etiqueta `link`. Si se debe utilizar JavaScript, se
debe cargar desde otro archivo, por medio de la etiqueta `script`

# Mezcla con JS

- Debe ocurrir únicamente en los archivos de las vistas
- No debe tener lógica de JS (creación de variables y etcétera), únicamente
se debe utilizar para imprimir información
- Para el resto de lineamientos, se debe revisar la guía para
[PHP](/style_guide/node.md)

## Correcto

```pug
div
  if email
    h1 Hola #{email}
  else if user
    ul
      each userData in user
        li= userData
  else
    h1 Iniciar sesion
```

## Incorrecto

```pug
- var email = 'admin@example.com' /*Creacion de variables en vista*/
div
  if email
    h1 Hola #{email}
  else if user
    ul
      each userData in user
      li= userData /*Mala sangria*/
  else
    h1 Iniciar sesion
```

# Caracteres por línea

- No debe haber más de 80 caracteres en una línea cuando sean textos
- Si estan dentro de un atributo no deberian separarse asi pasen los 80
caracteres
- Los enlaces deben ser enviados desde el controlador para no crearlos en la
vista cuando son elementos de base de datos
- Los textos deben bajar cuando exita un atributo o una clase en el elemento
- Si los textos pasan los 80 caractedes se deben separar con `|` dando siempre
un espacio
## Correcto

```pug
link(
  type="text/css"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
)
span.class1.class2.class3.class4.class5.class6.class7.class8.class9.class10.class11.class12
  Hola
a(href="#{courseLink}")
  Enlace
p
  | Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  | tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  | quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  | consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  | cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no
  | proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

## Incorrecto

```html
link(type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css") /*mas de 80 caractereds*/
span.class1.class2.class3.class4.class5.class6.class7.class8.class9.class10.class11.class12 Hola /*texto seguido de una etiqueta con atributos*/
a(href="http://cursolink.com") /*enalce que debe venir de base de datos quemado*/
  Enlace
p
  |Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  |tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  |quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo /*no tiene espacio entre el | */
  |consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt in culpa qui officia deserunt mollit anim id est laborum. /*mas de 80 caracteres*/
```

# Espacios entre lineas

No deberia existir espacio entre lineas en las vistas, siempre deben ir juntas

## Correcto

```pug
h3 Titutlo
p Texto1
p Texto2
div
  p Otro texto
```

## Incorrecto

```pug
h3 Titutlo
  /*espacio vacio*/
p Texto1
p Texto2
  /*espacio vacio*/
div
  /*espacio vacio*/
  p Otro texto
```

# Usar siempre las etiquetas que correspondan

Se debe usar las etiquetas para lo que fueron creadas, segun su uso se deberia
implementar en la vista y no usar otras etiquetas para esto

## Correcto

```pug
p Esto es un parrafo
div
  p Esto es otro parrafo dentro de un contenedor
a(href="http://example.com") Esto es un enlace
button Esto es un boton y se usa para cciones dentro de la pagina
```

## Incorrecto

```pug
div esto no es un parrafo pero lo uso como uno
div
  h6.parrafo Esto tampoco es un parrafo pero lo uso como uno
a(href="#") esto deberia ser un enalce pero se usa para una accion en la pagina
button Esto es un boton
```
