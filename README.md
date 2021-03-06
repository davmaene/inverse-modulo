# Inverse-Modulo ( b <sup>-1</sup> modulo (n) )
``` 
Un simple algo de calcul de l'inverse modulo d'un nombre 

```
# Hypothèse
```
L'algorithme d'Euclide étendu permet de calculer l'inverse de b modulo n s'il existe.
Rappelons que l'inverse modulo n de b est le nombre entier b-1 tel que b·b-1 (mod n) = 1. 
Par exemple 7 est l'inverse modulo 9 de 4, car 4·7 (mod 9) = 28 (mod 9) = 1.

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
# Preview
```
Exemple de previsualisation, 
```
![Exemple sur la page HTML](./img/img.png)
# Demo en ligne
<a href="https://rawcdn.githack.com/davmaene/inverse-modulo/c077b5f91cb2db47eb8b105e4c736819d0fd4ee8/index.html">
Pour une prévisualisation en ligne 
</a>
<br><br>
<a href="https://raw.githack.com/davmaene/inverse-modulo/main/index.html">
Ou cette URL pour la prévisualisation en ligne 
</a>


