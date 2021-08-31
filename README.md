# Inverse-Modulo ( b <sup>-1</sup> modulo (n) )
un simple algo de calcul de l'inverse d'un nombre
# Hypothèse
```
L'algorithme d'Euclide étendu permet de calculer l'inverse de b modulo n s'il existe.
Rappelons que l'inverse modulo n de b est le nombre entier b-1 tel que b·b-1 (mod n) = 1. Par exemple 7 est l'inverse modulo 9 de 4, car 4·7 (mod 9) = 28 (mod 9) = 1.
```
# Algorithme
```
no := n
bo := b
to := 0
t := 1
q := nombre entier immédiatement inférieur ou égal à no / bo
r := no - q · bo
Tant que r > 0 faire
   Début
      temp := to - q · t
      Si temp  0 alors temp := temp mod n, sinon temp := n - ((-temp) mod n)
      to := t
      t := temp
      no := bo
      bo := r
      q := nombre entier immédiatement inférieur ou égal à no / bo
      r := no - q · bo
   Fin
Si bo  1 alors b n'a pas d'inverse modulo n, sinon b-1 mod n = t
```
