# lab4

¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?
JavaScript permite hacer operaciones como sumar números con texto porque convierte automáticamente los valores según lo que haya, no es estricto con los tipos. También respeta la prioridad de los operadores: primero paréntesis, luego multiplicación/división, luego suma/resta, y la exponenciación se hace de derecha a izquierda. Con var puedo usar una variable antes de declararla, pero con let y const eso da error.

¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
Sí, funciona igual que en otros lenguajes: el if ejecuta su bloque si la condición es verdadera, else if sirve para condiciones intermedias y else para lo que no cumple ninguna. La diferencia es que JS compara valores de forma flexible, por eso == a veces da resultados inesperados si no usamos ===.
