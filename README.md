# Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Istruzioni

- Chiedo all'utente i kilometri che vuole percorrere
- Chiedo all'utente l'età
- Moltiplico 0.21€ (Prezzo al km) con il dato sui kilometri appena raccolto
- **SE** l'età dell'utente è inferiore a 18 anni
  - Applico uno sconto del 20&
- **Altrimenti SE** l'età dell'utente è superiore a 65 anni
  - Applico uno sconto dell 40%
- **Altrimenti** il prezzo rimarrà invariato
- Una volta ottenuto il prezzo finale lo trasformo in ''forma umana'' con massimo due decimali.
