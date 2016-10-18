# Busskort Pseudokod
Funktion som beräknar det minsta antalet transaktioner du behöver göra för att åka buss med de pengar du har
	START
		VAR Kostnad
		VAR Valörer: Array med valörer: [500, 200, 100]
		VAR Räknare = 0
		INPUT Kostnad
		WHILE Kostnad > 0:
			FOR Valörer längd:
				Valör / Kostnad = hur många av valören går det på kostnaden
				Räknare += (Valör / Kostnad)
				Valör % Kostnad = resten av divisionen
				Kostnad = Valör % Kostnad
			IF Kostnad > 0 THEN:
				Rest + Kostnad
				Räknare = 0
				Hoppa ut till while
		RETURN ’Antal transaktioner: ' +  Räknare
	STOP

