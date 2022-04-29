Las cosas se ponen aún más interesantes cuando combinamos todo lo anterior. Por ejemplo, esta función `sumatoria`...

```python
def sumatoria(numeros):
  suma = 0
  
  for numero in numeros: 
    suma += numero
    
  return suma
```

... calcula la suma de todos los elementos de una lista de números...

```python
ム sumatoria([10, 5, 20])
35 # porque es 10 + 5 + 20
ム sumatoria([])
0 # porque la sumatoria de una lista vacía es 0

```

...o incluso de un rango: 

```python
ム sumatoria(range(1, 6))
15 # porque es 1 + 2 + 3 + 4 + 5
```

> Veamos si va entendiendo: completá la definición de la función `productoria` que, al igual que `sumatoria`, toma una secuencia de números, pero en lugar de sumarlos a todos, los multiplica: 
> 
> ```python
> productoria([10, 2, 3])
> 60 # porque es 10 * 2 * 3
> productoria([3, 3, 2, 4])
> 72 # porque es 3 * 3 * 2 * 4
> productoria([8])
> 8 # porque la productoria de un número es ese mismo número
> productoria([])
> 1 # porque la productoria de un una lista vacía es 1
> ```
> 




