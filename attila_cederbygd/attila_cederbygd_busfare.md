# Busskort Pseudokod
	VAR Kostnad
	VAR Valörer: Array med valörer: [500, 200, 100]
	VAR Räknare = 0
	START
		INPUT Kostnad
		FOR Valörer längd:
			Valör / Kostnad = hur många av valören går det på kostnaden
			Räknare += (Valör / Kostnad)
			Valör % Kostnad = resten av divisionen
			Kostnad = Valör % Kostnad
		RETURN ’Antal transaktioner: ' +  Räknare
	STOP

