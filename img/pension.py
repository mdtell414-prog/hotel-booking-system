print("Välkommen till denna pensionssimulator")

namn = input("Vad heter du i förnamn? ")
ålder = int(input("Hur gammal är du? "))

pensions_ålder = 65
är_kvar = pensions_ålder - ålder

if är_kvar > 0:
    print(f"Hej {namn}. Du har {är_kvar} år kvar till pension.")
else:
    print(f"Hej {namn}. Du har redan gått i pension!")

input("Tryck på valfri tangent för att fortsätta")