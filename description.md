Como te contábamos cuando empezaste, programar nos da un gran poder: **nos permite automatizar tareas repetitivas y tediosas**.

¿Y qué quiere decir eso de "repetitivas"? Pensemos, por ejemplo, ¿cómo haríamos una función que sume los primeros 5 elementos de una lista? 

```python
def sumar_los_primeros_5(una_lista):
  return una_lista[0] + una_lista[1] + una_lista[2] + una_lista[3] + una_lista[4]
```

¿Notás qué es lo que se repite? Sí, estamos haciendo 4 veces lo mismo: _acceder a un elemento por índice y luego sumarlo_. Sin dudas, sería mucho más interesante que la computadora hiciera eso por nosotros... ¡o si no te estaríamos mintiendo con lo de automatizar! :expressionless:

En esta guía vamos a aprender cómo decirle a la computadora que repita varias veces lo mismo, y también algunos trucos más.