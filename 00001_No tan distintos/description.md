En las lecciones anteriores vimos varias funciones (¡y algunos operadores!) que operan con números, otras con booleanos, y así.

Pero quizás ya hayas notado que hay dos operaciones en particular que son bastante _peculiares_: `len` e `in`. ¿Por qué? Observemos los siguientes ejemplos: 

```javascript
ム "no tenemos pertenencias sino equipaje".length;
37
ム "un alma sola dividida en dos".includes("dos");
true
ム [4, 8, 15, 16, 23, 42].length
6
ム [1, 1, 2, 3, 5, 8, 13, 21, 34].includes(34);
true
```

¡`length` e `includes` funcionan tanto con listas como con strings!

> ¿Será casualidad? ¿Habrá más operaciones en común entre estos dos tipos de datos? Averigüemoslo probando lo siguiente:  
> 
> ```javascript
> ム "Del árbol" + " una hoja se cayó"
> ム "Sin brújula y sin radio"[4]
> ム [1, 4] + [4, 5]
> ム ["el", "carozo", "cantó"][2]
> ```


