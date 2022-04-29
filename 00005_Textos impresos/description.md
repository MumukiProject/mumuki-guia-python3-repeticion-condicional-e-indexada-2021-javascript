:octagonal_sign: Antes de continuar vamos a hacer un alto en el camino para ver <del>una vaca :cow:</del> otra payada:

```python
payada_de_la_vaca = """
Dígame usted compañero
y conteste con prudencia
Cual es la mansa paciencia
que puebla nuestras praderas
Y en melancólica espera 
con abnegada paciencia
Nos da alimento y abrigo
Fingiendo indiferencia
"""
```

¿Tres comillas? ¿Es un error de tipeo? ¡No! En Python podemos escribir textos de _varias líneas_ si los colocamos entre triples comillas dobles :sunglasses:. Si bien esto funciona muy bien, tiene un pequeño problema: cuando queramos verlo en la consola, aparecerán unos muy peculiares `\n`: 

```python
ム payada_de_la_vaca
'\nDígame usted compañero\ny conteste con prudencia\nCual es la mansa paciencia\nque puebla nuestras praderas\nY en melancólica espera \ncon abnegada paciencia\nNos da alimento y abrigo\nFingiendo indiferencia\n'
```

Este `\n`, llamado _salto de línea_, **representa**  que allí, antes del siguiente carácter, debe haber un enter `↵`. Perfecto, pero ¿y si queremos "escribir" el texto en la pantalla, con verdaderos enters en lugar de estos `\n`? Démosle la bienvenida al procedimiento `print`, que imprime los textos tal como queremos que se vean:

```python
> print(payada_de_la_vaca)

Dígame usted compañero
y conteste con prudencia
Cual es la mansa paciencia
que puebla nuestras praderas
Y en melancólica espera 
con abnegada paciencia
Nos da alimento y abrigo
Fingiendo indiferencia
```

> ¿Y qué pasará si usamos print con string que no contienen saltos de línea? ¿Y si imprimimos otros tipos de datos? Averigualo probando lo siguiente y comparando resultados: 
> 
> ```python
> ム 5
> ム print(5)
> ム [1, 2, 3]
> ム print([1, 2, 3])
> ム "a la voz de aura"
> ム print("a la voz de aura")
> ```

