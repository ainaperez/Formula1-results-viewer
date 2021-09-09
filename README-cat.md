# PAC 3

## Lliurament de la PAC

Un cop hagis realitzat les activitats proposades en aquest enunciat, el lliurament de la PAC es realitzarà de forma doble:

- Enviar la teva PAC 3 al Registre d'Avaluació Contínua (RAC) de campus virtual de la UOC.
   Hauràs crear un arxiu ZIP amb el contingut del repositori (recorda **NO** incloure les carpetes `.git` i` node_modules` al ZIP) i pujar aquest fitxer al RAC.
   Pots posar qualsevol nom que sigui identificatiu a el fitxer, per exemple, el nom del repositori en GitHub.
- Enviar els canvis del teu repositori a GitHub Classroom, per fer-ho has d'afegir i enviar els teus canvis a GitHub, utilitzant les ordres add, commit i push.
   Si no recordes com executar aquestes comandes, pots revisar-les a l'enunciat de la PAC 0.

Recorda que aquest repositori l'has clonat del repositori en GitHub. Quan treballis al teu sistema, tots els canvis els faràs als teus fitxers locals, els quals hauràs d'afegir i _comitejar_ al teu repositori Git. Aquests canvis estaran en el teu sistema fins que facis _push_ i els enviïs al repositori en GitHub. Pots fer diversos enviaments.

## Preguntes pràctiques (3p)

### PP1: Selectors 1.5p

En aquest primer exercici implementarem una funció `pp1()` que ens retorni una llista de noms i avatars d'estudiants.

![/img/pp1.png](/img/pp1.png)

La funció ha de retornar un array d'objectes que tenen tant sols dos camps.

- `name`: El nom de l'alumne.
- `src`: La url de l'avatar de l'alumne.

Aquesta funció rep un paràmetre booleà; en funció del valor d'aquest paràmetre:

- true: Retornar una llista d'estudiants connectats.
- false: Retornar una llista d'estudiants desconnectats.
- undefined: Retornar la llista de tots els estudiants.

> És probable que necessiteu fer ús d'expressions regulars per extreure la url de la imatge:
>
> - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
> - https://stackoverflow.com/questions/12059284/get-text-between-two-rounded-brackets

### PP2: Events 1.5p

Anem a implementar un Web molt senzill amb un comptador i dos botons: un per incrementar el comptador i un altre per decrementarlo.

El codi del Web és el següent:

```html
<h1 id="js-counter"> 0 </h1>
<button id="btn_decrement" type="button"> Decrement </button>
<button id="btn_increment" type="button"> Increment </button>

<label for="cb_enabled">
  Enable/Disable counter
  <input id="cb_enabled" type="checkbox" checked />
</label>
```

L'objectiu d'aquesta pràctica és implementar una funció `pp2()`, que al ser cridada li afegeixi la interactivitat necessària al Web.

- Quan el checkbox està habilitat (checked):
   - Ha d'incrementar el comptador en una unitat al prémer el botó "Increment".
   - Ha de decrementar el comptador en una unitat al prémer el botó "Decrement".
- Quan el checkbox aquesta deshabilitat (unchecked):
   - Els botons no han de respondre a esdeveniments.

## Cas d'estudi (7p)

En aquest cas d'estudi posarem en pràctica tot l'après durant l'assignatura.

Per a això realitzarem un cas pràctic utilitzant l'API de carreres de Fórmula 1 que ja hem utilitzat a les PACs anteriors.
Per realitzar aquests exercicis us facilitem l'esquelet del Web sobre la qual treballarem, d'aquesta manera us podreu concentrar en la implementació del codi JavaScript.

![/img/cp1.png](/img/cp1.png)

### Cercar utilitzant la API (3.5p)

L'objectiu és implementar un petit cercador de resultats de Fórmula 1 donat un any i una etapa. El procés de recerca és el següent:

1. L'usuari selecciona un any i una etapa, i fa clic a _Buscar_. Això provoca una crida a l'API per recuperar les dades. Mentre s'espera la resposta, s'ha de mostrar el text _Loading ..._:

![/img/cp3.png](/img/cp4.png)

2. Al rebre les dades de l'API, es mostra un llistat amb les dades, seguint aquest format:

![/img/cp2.png](/img/cp2.png)

Si el pilot no acaba la cursa, la columna "Time" ha de mostrar el motiu pel qual s'ha abandonat.

### Consultar detalls d'un pilot (3.5p)

Un cop hem mostrat les dades, al fer clic a les files de la taula, volem mostrar un modal amb el nom del pilot:

![/img/cp3.png](/img/cp3.png)

Aquest modal s'ha de tancar al fer clic de nou a la zona enfosquida de la pantalla **però s'ha de mantenir obert quan l'usuari fa clic a la zona blanca del modal**.

### Guies per al desenvolupament de la pràctica.

Se us ofereixen diversos comandaments d'npm per ajudar-vos a desenvolupar la pràctica.

- `npm start` llança un servidor de desenvolupament a localhost:3000.
- `npm run test:e2e:watch` Llança una sèrie de tests end to end per comprovar la correcta realització de la pràctica, de forma interactiva.
- `test:e2e` Llança una sèrie de tests end to end per comprovar la correcta realització de la pràctica, de forma automàtica.

També se us dóna una petita estructura perquè no tingueu que muntar el projecte des de zero.

- `index.js` és el punt d'entrada de l'aplicació. Carrega els estils i l'aplicació. No hauríeu modificar aquest arxiu.

Dins de la carpeta app existeixen diversos arxius:

- `api_client.js` On s'han de posar les funcions encarregades de comunicar-se amb el servidor.
- `domain` Una carpeta que conté les entitats de la nostra aplicació.
- `view.js` Conté les funcions encarregades de modificar la vista i el DOM.
- `model.js` S'encarrega de construir les entitats a partir de les respostes del servidor.
- `controller.js` Connecta la vista amb el model.

Tots aquests arxius contenen l'arquitectura general de l'aplicació, de manera que només heu de preocupar-vos de la implementació de les funcions, que per a més claredat les veureu indicades amb `TODO`.

També es donarà per vàlid si decidiu no utilitzar l'arquitectura proposada i implementar la vostra pròpia solució, però es tindrà en compte la qualitat del codi i de l'arquitectura proposada.

Seguint amb l'arquitectura, la proposta es basa en un patró **MVC** (Model-Vista-Controlador).
Tot i que no és l'objectiu d'aquesta assignatura, considerem important que us adapteu a aquesta estructura, ja que us serà molt útil en assignatures posteriors.
Podeu obtenir més informació sobre el patró d'arquitectura MVC als següents enllaços:

- https://desarrolloweb.com/articulos/que-es-mvc.html
- https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm
- https://blog.codinghorror.com/understanding-model-view-controller/
