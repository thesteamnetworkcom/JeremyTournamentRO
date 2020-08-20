const Steps = {
	Steps:{
		Home:{
			name:'home',
			displayName:'Home',
			prev:'',
			forward:'Names',
		},
		Names:{
			name:'names',
			displayName:'Names',
			prev:'Home',
			forward:'Vanguards',
		},
		Vanguards:{
			name:'vanguards',
			displayName:'Vanguards',
			prev:'Names',
			forward:'JumpstartDraft',
		},
		JumpstartDraft:{
			name:'jumpstartdraft',
			displayName:'Jumpstart Draft',
			prev:'Vanguards',
			forward:'MatchOne',
		},
		MatchOne:{
			name:'matchone',
			displayName:'Match One',
			prev:'JumpstartDraft',
			forward:'TeamDraft',
		},
		TeamDraft:{
			name:'teamdraft',
			displayName:'Team Draft',
			prev:'MatchOne',
			forward:'MatchTwo',
		},
		MatchTwo:{
			name:'matchtwo',
			displayName:'Match Two',
			prev:'TeamDraft',
			forward:'MysteryDraft',
		},
		MysteryDraft:{
			name:'mysterydraft',
			displayName:'Mystery Draft',
			prev:'MatchTwo',
			forward:'MatchThree',
		},
		MatchThree:{
			name:'matchthree',
			displayName:'Match Three',
			prev:'MysteryDraft',
			forward:'MatchFour',
		},
		MatchFour:{
			name:'matchfour',
			displayName:'Match Four',
			prev:'MatchThree',
			forward:'DeckBuildingOne',
		},
		DeckBuildingOne:{
			name:'deckbuildingone',
			displayName:'Deck Building',
			prev:'MatchFour',
			forward:'MatchFive',
		},
		MatchFive:{
			name:'matchfive',
			displayName:'Match Five',
			prev:'DeckBuildingOne',
			forward:'MatchSix',
		},
		MatchSix:{
			name:'matchsix',
			displayName:'Match Six',
			prev:'MatchFive',
			forward:'ConspiracyDraft',
		},
		ConspiracyDraft:{
			name:'conspiracydraft',
			displayName:'Conspiracy Draft',
			prev:'MatchSix',
			forward:'ConspiracyPod',
		},
		ConspiracyPod:{
			name:'conspiracypod',
			displayName:'Conspiracy Pod',
			prev:'ConspiracyDraft',
			forward:'Conspiracy4v4',
		},
		Conspiracy4v4:{
			name:'conspiracy4v4',
			displayName:'Conspiracy 4v4',
			prev:'ConspiracyPod',
			forward:'DeckBuildingTwo',
		},
		DeckBuildingTwo:{
			name:'deckbuildingtwo',
			displayName:'Deck Building',
			prev:'Conspiracy4v4',
			forward:'MatchSeven',
		},
		MatchSeven:{
			name:'matchseven',
			displayName:'Match Seven',
			prev:'DeckBuildingTwo',
			forward:'DeckBuildingThree',
		},
		DeckBuildingThree:{
			name:'deckbuildingthree',
			displayName:'Deck Building',
			prev:'MatchSeven',
			forward:'FinalRound1',
		},
		FinalRound1:{
			name:'finalround1',
			displayName:'Finals Round 1',
			prev:'DeckBuildingThree',
			forward:'FinalRound2',
		},
		FinalRound2:{
			name:'finalround2',
			displayName:'Finals Round 2',
			prev:'FinalRound1',
			forward:'FinalRound3',
		},
		FinalRound3:{
			name:'finalround3',
			displayName:'Finals Round 3',
			prev:'FinalRound2',
			forward:'Podium',
		},
		Podium:{
			name:'podium',
			displayName:'Podium',
			prev:'FinalRound3',
			forward:'Home',
		}
	}
}

export default Steps;