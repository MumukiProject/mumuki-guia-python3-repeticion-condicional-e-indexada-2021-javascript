¡Los segmentos (o `slice`s) y el operador de indexación (`[]`) no serían tan útiles si no pudieramos contar también de atrás para adelante! :arrow_left: Por eso es que JavaScript nos permite utilizar:

 * índices positivos: empiezan en `0` y cuentan los elementos desde la primera posición hasta la última;
 * índices negativos: empiezan en `-1` y cuentan los elementos desde la última posición hasta la primera.

Por ejemplo, esto nos permitirá entender al string `"hola mundo"` de dos formas diferentes...

<table class="table table-bordered">
<thead>
  <tr>
    <th></th>
    <th>h</th>
    <th>o</th>
    <th>l</th>
    <th>a</th>
    <th></th>
    <th>m</th>
    <th>u</th>
    <th>n</th>
    <th>d</th>
    <th>o</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>➡️</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
  </tr>
  <tr>
    <td>⬅️</td>
    <td>-10</td>
    <td>-9</td>
    <td>-8</td>
    <td>-7</td>
    <td>-6</td>
    <td>-5</td>
    <td>-4</td>
    <td>-3</td>
    <td>-2</td>
    <td>-1</td>
  </tr>
</tbody>
</table>


... y hacer operaciones como las siguientes: 

```javascript
ム "hola mundo".slice(0,4) // los primeros 4 caracteres, como ya conocemos
"hola" 
ム "hola mundo".slice(0,1) // primer carácter, como ya conocemos
"h" 
ム "hola mundo".slice(0,-1) // todos los caracteres salvo el último
"hola mund" 
ム "hola mundo".slice(-2, -1) // anteúltimo carácter
"d"
```

Es interesante destacar que también podemos invocar `slice` con solo un argumento para obtener los elementos desde ese valor hasta el final. Por ejemplo:

```javascript
ム "hola mundo".slice(-5) // los caracteres desde la posición -5 hasta el final, es decir, los últimos 5 caracteres
"mundo"
ム "hola mundo".slice(2) // los caracteres desde la posición 2 hasta el final
"la mundo"
ム "hola mundo".slice(-1) // solo el último carácter
"o"
```

> ¡Pongamos todo lo visto en práctica! Definí: 
> 
>  * una función `sinExtremos` que tome una lista y devuelva otra igual pero sin su primer y último elemento;
>  * una función `extremos` que haga exactamente lo contrario, es decir, tome una lista y devuelva otra con solamente el primer y último elemento. 
> 
> ```javascript
> ム sinExtremos([4, 5, 10, 2, 3])
> [5, 10, 2]
> ム extremos([4, 5, 10, 2, 3])
> [4, 3]
> ```