const Vanguards = {
	Vanguards:[
		{
			id:1,
			name:'Extra Card',
			cards:1,
			life:-3,
			ability:'',
		},
		{
			id:2,
			name:'Scry',
			cards:-1,
			life:0,
			ability:'At the beginning of your upkeep, Scry 1',
		},
		{
			id:3,
			name:'Surveil',
			cards:-1,
			life:0,
			ability:'Pay 1 Life: Surveil 1. Activate this ability only once each turn',
		},
		{
			id:4,
			name:'Filter Mana',
			cards:0,
			life:3,
			ability:'(1): Add one mana of any color to your mana pool. Activate this ability only once each turn.',
		},
		{
			id:5,
			name:'Storage Mana',
			cards:1,
			life:0,
			ability:"(2): Put a counter on ~this~. Activate this ability only once each turn, and only any time you could cast a sorcery.\nRemove a counter from ~this~: Add one mana of any color to your mana pool."
		},
		{
			id:6,
			name:'Eldrazi Spawn',
			cards:1,
			life:-1,
			ability:'You go second in Game 1.\n Start the game with an eldrazi spawn.'
		},
		{
			id:7,
			name:'Double Lands',
			cards:0,
			life:-5,
			ability:'You may play 2 lands on your first turn.'
		},
		{
			id:8,
			name:'Changelings!',
			cards:-1,
			life:0,
			ability:'(2): Create a Legendary 1/1 Changeling token named Bob.'
		}
	]
}

export default Vanguards;