# PEC 3

## Entrega de la PEC

Una vez hayas realizado las actividades propuestas en este enunciado, la entrega de la PEC se realizará de forma doble:

- Enviar tu PEC 3 al Registro de Evaluación Continua (REC) del campus virtual de la UOC.
  Deberás crear un archivo ZIP con el contenido del repositorio (recuerda **NO** incluir las carpetas `.git` y `node_modules` en el ZIP) y subir dicho fichero al REC.
  Puedes poner cualquier nombre que sea identificativo al fichero, por ejemplo, el nombre del repositorio en GitHub.
- Enviar los cambios de tu repositorio a GitHub Classroom, para ello debes añadir y enviar tus cambios a GitHub, utilizando los comandos add, commit y push.
  Si no recuerdas cómo ejecutar estos comandos, puedes revisarlos en el enunciado de la PEC 0.

Recuerda que este repositorio lo has clonado del repositorio en GitHub. Cuando trabajes en tu sistema, todos los cambios los harás en tus ficheros locales, los cuales tendrás que añadir y _comitear_ en tu repositorio Git. Estos cambios estarán en tu sistema hasta que hagas _push_ y los envíes al repositorio en GitHub. Puedes hacer varios envíos.

## Preguntas prácticas (3p)

### PP1: Selectores 1.5p

En este primer ejercicio vamos a implementar una función `pp1()` que nos devuelva una lista de nombres y avatares de estudiantes.

![/img/pp1.png](/img/pp1.png)

La función debe devolver un array de objetos que tienen solamente dos campos.

- `name`: El nombre del alumno.
- `src`: La url del avatar del alumno.

Esta función recibe un parámetro booleano; en función del valor de este parámetro:

- true: Devolver una lista de estudiantes conectados.
- false: Devolver una lista de estudiantes desconectados.
- undefined: Devolver la lista de todos los estudiantes.

> Es probable que necesitéis hacer uso de expresiones regulares para extraer la url de la imagen:
>
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
> - https://stackoverflow.com/questions/12059284/get-text-between-two-rounded-brackets

### PP2: Eventos 1.5p

Vamos a implementar una Web muy sencilla con un contador y dos botones: uno para incrementar el contador y otro para decrementarlo.

El código de la web es el siguiente:

```html
<h1 id="js-counter"> 0 </h1>
<button id="btn_decrement" type="button"> Decrement </button>
<button id="btn_increment" type="button"> Increment </button>

<label for="cb_enabled">
  Enable/Disable counter
  <input id="cb_enabled" type="checkbox" checked />
</label>
```

El objetivo de esta práctica es implementar una función `pp2()`, que al ser llamada le añada la interactividad necesaria a la Web.

- Cuando el checkbox está habilitado (checked):
  - Debe incrementar el contador en una unidad al pulsar el boton "Increment".
  - Debe decrementar el contador en una unidad al pulsar el botón "Decrement".
- Cuando el checkbox está deshabilitado (unchecked):
  - Los botones no deben responder a eventos.

## Caso de estudio (7p)

En este caso de estudio vamos a poner en práctica todo lo aprendido durante la asignatura.

Para ello vamos a realizar un caso práctico utilizando la API de carreras de Fórmula 1 que ya hemos utilizado en las PECs anteriores.
Para realizar estos ejercicios os facilitamos el esqueleto de la Web sobre la que trabajaremos, de esta forma podréis concentraros en la implementación del código JavaScript.

![/img/cp1.png](/img/cp1.png)

### Búsqueda usando la API (3.5p)

El objetivo es implementar un pequeño buscador de resultados de Fórmula 1 dado un año y una etapa. El proceso de búsqueda es el siguiente:

1. El usuario selecciona un año y una etapa, y hace click en _Buscar_. Esto provoca una llama a la API para recuperar los datos. Mientras se espera la respuesta, se debe mostrar el texto _Loading..._:

![/img/cp3.png](/img/cp4.png)

2. Al recibir los datos de la API, se muestra un listado con los datos, siguiendo este formato:

![/img/cp2.png](/img/cp2.png)

Si el piloto no acaba la carrera, la columna "Time" debe mostrar el motivo de abandono.

### Consultar detalles de un piloto (3.5p)

Una vez hemos mostrado los datos, al hacer click en las filas de la tabla, queremos mostrar un modal con el nombre del piloto:

![/img/cp3.png](/img/cp3.png)

Este modal debe cerrarse al hacer click de nuevo en la zona oscurecida de la pantalla **pero debe mantenerse abierto cuando el usuario hace click en la zona blanca del modal**.

### Guías para el desarrollo de la práctica.

Se os ofrecen varios comandos de npm para ayudaros a desarrollar la práctica.

- `npm start` lanza un servidor de desarrollo en localhost:3000.
- `npm run test:e2e:watch` Lanza una serie de tests end to end para comprobar la correcta realización de la práctica, de forma interactiva.
- `test:e2e` Lanza una serie de tests end to end para comprobar la correcta realización de la práctica, de forma automática.

También se os da una pequeña estructura para que no tengáis que montar el proyecto desde cero.

- `index.js` es el punto de entrada de la aplicación. Carga los estilos y la aplicación. No deberíais modificar este archivo.

Dentro de la carpeta app existen varios archivos:

- `api_client.js` Donde se deben de poner las funciones encargadas de comunicarse con el servidor.
- `domain` Una carpeta que contiene las entidades de nuestra aplicación.
- `view.js` Contiene las funciones encargadas de modificar la vista y el DOM.
- `model.js` Se encarga de construir las entidades a partir de las respuestas del servidor.
- `controller.js` Conecta la vista con el modelo.

Todos estos archivos contienen la arquitectura general de la aplicación, por lo que solo debéis preocuparos de la implementación de las funciones, que para mayor claridad las veréis indicadas con `TODO`.

También se dará por válido si decidís no utilizar la arquitectura propuesta y implementar vuestra propia solución, pero se tendrá en cuenta la calidad del código y de la arquitectura propuesta.

Siguiendo con la arquitectura, la propuesta se basa en un patrón **MVC** (Modelo-Vista-Controlador).
Aunque no es el objetivo de esta asignatura, consideramos importante que os adaptéis a esta estructura, puesto que os será muy útil en asignaturas posteriores.
Podéis obtener más información sobre el patrón de arquitectura MVC en los siguientes enlaces:

- https://desarrolloweb.com/articulos/que-es-mvc.html
- https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm
- https://blog.codinghorror.com/understanding-model-view-controller/
