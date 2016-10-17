# Busskort Pseudokod
	VAR Kostnad
	VAR Valörer: Array med valörer: [500, 200, 100]
	VAR Räknare = 0
	START
		INPUT Kostnad
		FOR Valörer längd:
			Valör / Kostnad = hur många går valör på kostnaden
			Räknare += Valör / Kostnad
			Valör % Kostnad = det som blir kvar efter divisionen
			Kostnad = Valör % Kostnad
		RETURN ’Antal transaktioner: ' +  Räknare
	STOP

