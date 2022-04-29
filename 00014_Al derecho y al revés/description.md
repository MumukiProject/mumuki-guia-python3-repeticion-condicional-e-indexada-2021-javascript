¡Los segmentos `[:]` y el operador de indexación `[]` no serían tan útiles si no pudieramos contar también de atrás para adelante! :arrow_left: Por eso es que Python nos permite utilizar:

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

```python
ム "hola mundo"[:4] # los primeros 4 caracteres, como ya conocemos
"hola" 
ム "hola mundo"[:-1] # todos los caracteres salvo el último
"hola mund" 
ム "hola mundo"[-5:] # los último 5 caracteres
"mundo"
ム "hola mundo"[0] # primer carácter, como ya conocemos
"h" 
ム "hola mundo"[-1] # último carácter
"o"                 
ム "hola mundo"[-2] # anteúltimo carácter
"d"
```

> ¡Pongamos todo lo visto en práctica! Definí: 
> 
>  * una función `sin_extremos` que tome una lista y devuelva otra igual pero sin su primer y último elemento;
>  * una función `extremos` que haga exactamente lo contrario, es decir, tome una lista y devuelva otra con solamente el primer y último elemento. 
> 
> ```python
> ム sin_extremos([4, 5, 10, 2, 3])
> [5, 10, 2]
> ム extremos([4, 5, 10, 2, 3])
> [4, 3]
> ```