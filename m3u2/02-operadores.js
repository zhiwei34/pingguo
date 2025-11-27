// Operadores de comparación (= sólo es para asignar valor)

== // Igualdad de valor
=== // Igualdad estricta (valor y tipo)
!= // Diferente de valor
!== // Diferente estricto (valor y tipo)
> // Mayor que
< // Menor que
>= // Mayor o igual que
<= // Menor o igual que

// Operadores lógicos

&& // AND (y)
|| // OR (o)
! // NOT (no)

// Ejemplos

const a = 10;
const b = 20;
const c = "10";

a == b //false
a === b //false
a != b //true
a !== c //true
a > b //false
b < a //false
a == b && a === c //false
a != b || a === c //true
