¡Acaban de pasar varias cosas! Primero, han entrado en escena los _rangos_, que son otro tipo de dato de Python que representa una secuencia de números, que puede ser: 

* continua, como en `range(1, 10)`, que no es nada más y nada menos que la secuencia de los números del `1` al `9` (sí, el último no entra :exclamation:)
* con saltos, como en `range(0, 10, 3)`, que son los números del `0` al `9` dando saltos de a 3: `0`, `3`, `6`, `9`

Por otro lado, acabamos de ver también que el `for ... in` nos permite "visitar" a cada elemento de una lista, string o rango de números, y hacer algo con éste. Para ello, esta estructura tiene tres partes:

 1. `in` nos permite especificar qué secuencia de elementos vamos a recorrer;
 2. `for` nos permite elegir un nombre con el que nos referiremos a cada elemento de la secuencia;
 3. y después del `:` tendremos una o más acciones que ejecutaremos al visitar cada elemento. :warning: ¡Cuidado! Tienen que estar tabuladas respecto de la línea del `for` 


En este caso, en `imprimir_cada_elemento` elegimos: 

 1. recorrer cada elemento del parámetro `elementos`:
 2. llamar a cada uno de esos elementos `elemento`;
 3. imprimir cada uno de esos elementos usando `print`.


Muy interesante, pero no parece que hayamos hecho nada muy útil :confused:. ¿Podremos hacer cosas más que sólo mostrar elementos? 

