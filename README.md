# Parfüm webáruház
## Specifikáció:
Készíts "webáruházat" tetszőleges témában. 

Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen!

Az adatokat jelenítsd meg egy táblázatban!
A formázáshoz bootstrap-et használj! A design eltérhet a képen látottól!
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!

## Publikus megjelenítendő felület:
A publikus felületen div-ekben jelenítsük meg az adatokat. (az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
++ Lehet, hogy szükséged lesz a localStorage használatára. 
++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.



## Függvények:

htmlCardOsszeallit(termekekLista) -> visszatérési értéke : txt, összeállítja a cardokat.

htmlKosarOsszeallit(kosarLista) -> visszatérési értéke : txt, összeállítja a kosár táblázatot, saját divben, a megadott elemekkel.

megjelenit(txt, divElem) -> megjeleníti a megfogott txt értékét, a korábban elkészített függvények szerint. 


parfumLISTA = [ termekek ] -> létrehozza az adott termékeket, amiket különböző- egyedi adatokkal lát el.  

kosarLista = [ kosarba helyezett termekek ] -> egy üres listát hoz létre, mely később kerül majd feltöltésre.


kosarbaTesz(lista1, lista2, id) -> Az eleinte üres kosár listának a végéhez adja hozzá az adott id-val rendelkező elemet, gombnyomás hatására fut le.

torol(lista, id) -> A kosarLista adott elemét "vágja le", visszatérési értéke lista. Gombnyomás hatására fut le.


### RENDEZES KATEGORIAK SZERINT:
szures(lista, keresoSzoveg) -> Létrehozza a szurtLista-t.A kereses class megfogásával és egy eseménykezelő segítségével vizsgáljuk a beírt szöveget a termék neve alapján. Visszatérési értéke: szurtLista, parfum.termekNeve.toUpperCase().includes(keresoSzoveg.toUpperCase())

rendez(lista, irany) -> a termékek neveit vizsgáljuk abc sorrend szerint. Az eseményt gombnyomás váltja ki, aminek hatására adott paraméter alapján fut le.


### Készítette: Baksa Bence