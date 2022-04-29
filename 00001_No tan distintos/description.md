En las lecciones anteriores vimos varias funciones (¡y algunos operadores!) que operan con números, otras con booleanos, y así.

Pero quizás ya hayas notado que hay dos operaciones en particular que son bastante _peculiares_: `len` e `in`. ¿Por qué? Observemos los siguientes ejemplos: 

```python
ム len("no tenemos pertenencias sino equipaje")
37
ム "en" in "un alma sola dividida en dos"
True
ム len([4, 8, 15, 16, 23, 42])
6
ム 34 in [1, 1, 2, 3, 5, 8, 13, 21, 34]
True
```

¡`len` e `in` funcionan tanto con listas como con strings!

> ¿Será casualidad? ¿Habrá más operaciones en común entre estos dos tipos de datos? Averigüemoslo probando lo siguiente:  
> 
> ```python
> ム "Del árbol" + " una hoja se cayó"
> ム "Sin brújula y sin radio"[4]
> ム [1, 4] + [4, 5]
> ム ["el", "carozo", "cantó"][2]
> ```


