Otras operaciones que listas y strings tienen en común son los _slices_, que podemos traducir como segmentos, secciones, o (de forma más literal y graciosa) rebanadas  :bread:, que nos permite obtener los elementos entre dos límites: 

```python
ム numeros = [10, 20, 30, 40, 50]
ム numeros[0:2]
[10, 20]         # es la lista conformada por el 1er y 2do elemento;
                 # ⚠️ recordemos que los índices en Python cuentan desde 0
ム numeros[2:4]
[30, 40]         # es la lista conformada por el 3er y 4to elemento
ム numeros[0:4]
[10, 20, 30, 40] # es la lista conformada 
                 # por los elementos 1 al 4
ム numeros[:4]
[10, 20, 30, 40] # equivalente al ejemplo anterior; 
                 # si no ponemos el límite inferior, 
                 # trae todos los elementos desde el principio
ム numeros[3:]
[40, 50]         # es la lista conformada 
                 # por todos los elementos partir del 4to  
                 # si no ponemos el límite superior, 
                 # trae todos los elementos hasta el final                 
```


> ¡Usemos lo aprendido para extraer segmentos de los strings! Ya cargamos en la consola una variable de tipo string  llamada `primera_estrofa`; aplicando lo visto te toca: 
> 
>  1. Averiguar cuantos caracteres tiene `primera_estrofa`
>  2. Obtener un string con los primeros 22 caracteres de `primera_estrofa`
>  3. Obtener un string con los últimos 25 caracteres de `primera_estrofa`
> 
