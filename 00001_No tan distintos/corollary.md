Como vemos, las listas y los strings, si bien _no son lo mismo_, son más parecidos de lo que pensábamos: ambos tipos de datos representan _secuencias_.

* los strings son secuencias de caracteres, como `'a'`, `'b'`, `'#'`, etc;
* las listas son secuencias de cualquier tipo de dato: números, booleanos, strings, o incluso otras listas. 

Sin embargo, en nuestros ejemplos hay una pequeña diferencia... ¡la concatenación! :face_with_hand_over_mouth:

Si bien `concat` funciona para listas y strings no sucede lo mismo con `+`:

```javascript
ム "Del árbol".concat(" una hoja se cayó")
"Del árbol una hoja se cayó"

ム [1, 4] + [4, 5]
"1,44,5"
```