_¡Y llegamos al plato fuerte de la lección :spaghetti:!_

De todas las cosas interesantes que podemos hacer con las secuencias de cosas, probablemente la más poderosa sea la de _recorrer_ **cada uno** de sus elementos :person_walking:, utilizando la estructura de control `for`: 

```python
def imprimir_cada_elemento(elementos): 
  for elemento in elementos: 
    print(elemento)
```

Esta estructura de control nos permitirá...

> ...no, mejor no te contamos qué hace exactamente `for` :smiling_imp:. Descubrilo probando el **procedimiento** `imprimir_cada_elemento` en la consola: 
> 
> ```python
> ム imprimir_cada_elemento(["Violeta", "Mercedes", "Natalia", "Charo", "María Elena"])
> ム imprimir_cada_elemento([True, False, False, True])
> ム imprimir_cada_elemento("adivinador")
> ム imprimir_cada_elemento(range(1, 10))    # range en inglés significa rango
> ム imprimir_cada_elemento(range(5, 30, 2)) # prestá atención al tercer argumento de range
> ```
> 
> Cuando termines, escribí `listo()`