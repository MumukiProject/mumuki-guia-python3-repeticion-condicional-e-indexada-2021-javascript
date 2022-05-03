¡Acaban de pasar varias cosas! Acabamos de descubrir que el `for ... of` nos permite "visitar" a cada elemento de una lista o string y hacer algo con éste. Para ello, esta estructura tiene tres partes:

 1. `for` es la estructura principal; 
 2. `let` nos permite declarar una variable con el nombre que usaremos para referirnos a cada elemento de la secuencia;
 3. `of` nos permite especificar qué secuencia de elementos vamos a recorrer;
 4. y entre las llaves `{ }` tendremos una o más acciones que ejecutaremos al visitar cada elemento.

En este caso, en `imprimirCadaElemento` elegimos: 

 1. recorrer cada elemento del parámetro `elementos`:
 2. llamar a cada uno de esos elementos `elemento`;
 3. imprimir cada uno de esos elementos usando `console.log`.

Muy interesante, pero no parece que hayamos hecho nada muy útil :confused:. ¿Podremos hacer cosas más que sólo mostrar elementos? 