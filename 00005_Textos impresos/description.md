:octagonal_sign: Antes de continuar vamos a hacer un alto en el camino para ver <del>una vaca :cow:</del> otra payada:

```javascript
let payadaDeLaVaca = `Dígame usted compañero
y conteste con prudencia
Cual es la mansa paciencia
que puebla nuestras praderas
Y en melancólica espera 
con abnegada paciencia
Nos da alimento y abrigo
Fingiendo indiferencia`
```

¿Comillas invertidas? ¿Es un error de tipeo? ¡No! En JavaScript podemos escribir textos de _varias líneas_ si los colocamos entre comillas invertidas o `backticks` :sunglasses:. Si bien esto funciona muy bien, tiene un pequeño problema: cuando queramos verlo en la consola, aparecerán unos muy peculiares `\n`: 

```javascript
ム payadaDeLaVaca
'Dígame usted compañero\ny conteste con prudencia\nCual es la mansa paciencia\nque puebla nuestras praderas\nY en melancólica espera \ncon abnegada paciencia\nNos da alimento y abrigo\nFingiendo indiferencia'
```

Este `\n`, llamado _salto de línea_, **representa**  que allí, antes del siguiente carácter, debe haber un enter `↵`. Perfecto, pero ¿y si queremos "escribir" el texto en la pantalla, con verdaderos enters en lugar de estos `\n`? Démosle la bienvenida a `console.log`, que imprime los textos tal como queremos que se vean:

```javascript
ム console.log(payadaDeLaVaca)

Dígame usted compañero
y conteste con prudencia
Cual es la mansa paciencia
que puebla nuestras praderas
Y en melancólica espera 
con abnegada paciencia
Nos da alimento y abrigo
Fingiendo indiferencia
```

> ¿Y qué pasará si usamos console.log con string que no contienen saltos de línea? ¿Y si imprimimos otros tipos de datos? Averigualo probando lo siguiente y comparando resultados: 
> 
> ```javascript
ム 5
```
>
> ```javascript
ム console.log(5)
```
>
> ```javascript
ム [1, 2, 3]
```
>
> ```javascript
ム console.log([1, 2, 3])
```
>
> ```javascript
ム "a la voz de aura"
```
>
> ```javascript
ム console.log("a la voz de aura")
```

