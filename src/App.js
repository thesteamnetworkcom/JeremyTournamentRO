import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Standings from './Pages/Standings';
import Names from './Pages/Names';
import Home from './Pages/Home';
import Vanguards from './Pages/Vanguards';
import Conspiracy4v4 from './Pages/Conspiracy4v4';
import ConspiracyDraft from './Pages/ConspiracyDraft';
import ConspiracyPod from './Pages/ConspiracyPod';
import DeckBuildingOne from './Pages/DeckBuildingOne';
import DeckBuildingThree from './Pages/DeckBuildingThree';
import DeckBuildingTwo from './Pages/DeckBuildingTwo';
import FinalRound1 from './Pages/FinalRound1';
import FinalRound2 from './Pages/FinalRound2';
import FinalRound3 from './Pages/FinalRound3';
import JumpstartDraft from './Pages/JumpstartDraft';
import MatchFive from './Pages/MatchFive';
import MatchFour from './Pages/MatchFour';
import MatchOne from './Pages/MatchOne';
import MatchSeven from './Pages/MatchSeven';
import MatchSix from './Pages/MatchSix';
import MatchThree from './Pages/MatchThree';
import MatchTwo from './Pages/MatchTwo';
import MysteryDraft from './Pages/MysteryDraft';
import Podium from './Pages/Podium';
import TeamDraft from './Pages/TeamDraft';
import fetchNames from './Store/Actions/PlayerActions';
import fetchSteps from './Store/Actions/StepsActions';
import fetchVanguards from './Store/Actions/VanguardActions';
import fetchMatches from './Store/Actions/MatchActions';
import VanguardViewer from './Pages/VanguardViewer';

const styles = () => ({
	fullScreen:{
		width:'100%',
		height:'100%',
	},
})

const mapDispatchToProps = (dispatch) => {
	return {
		getNames:()=>dispatch(fetchNames()),
		getSteps:()=>dispatch(fetchSteps()),
		getVanguards:()=>dispatch(fetchVanguards()),
		getMatches:()=>dispatch(fetchMatches())
	}
}

const App = (props) => {
	const { classes } = props;
	useEffect(()=>{
		props.getNames();
		props.getSteps();
		props.getVanguards();
		props.getMatches();
	},[props]);
  	return (
		<Router>
    		<div className={classes.fullScreen + " App "}>
      			<Switch>
					<Route path="/names">
						<Names />
					</Route>
					<Route path="/vanguards">
						<Vanguards />
					</Route>
					<Route path="/jumpstartdraft">
						<JumpstartDraft />
					</Route>
					<Route path="/matchone">
						<MatchOne />
					</Route>
					<Route path="/teamdraft">
						<TeamDraft />
					</Route>
					<Route path="/matchtwo">
						<MatchTwo />
					</Route>
					<Route path="/mysterydraft">
						<MysteryDraft />
					</Route>
					<Route path="/matchthree">
						<MatchThree />
					</Route>
					<Route path="/matchfour">
						<MatchFour />
					</Route>
					<Route path="/deckbuildingone">
						<DeckBuildingOne />
					</Route>
					<Route path="/matchfive">
						<MatchFive />
					</Route>
					<Route path="/matchsix">
						<MatchSix />
					</Route>
					<Route path="/conspiracydraft">
						<ConspiracyDraft />
					</Route>
					<Route path="/conspiracypod">
						<ConspiracyPod />
					</Route>
					<Route path="/conspiracy4v4">
						<Conspiracy4v4 />
					</Route>
					<Route path="/deckbuildingtwo">
						<DeckBuildingTwo />
					</Route>
					<Route path="/matchseven">
						<MatchSeven />
					</Route>
					<Route path="/deckbuildingthree">
						<DeckBuildingThree />
					</Route>
					<Route path="/finalround1">
						<FinalRound1 />
					</Route>
					<Route path="/finalround2">
						<FinalRound2 />
					</Route>
					<Route path="/finalround3">
						<FinalRound3 />
					</Route>
					<Route path="/podium">
						<Podium />
					</Route>
					<Route path="/standings">
						<Standings />
					</Route>
					<Route path="/vanguardviewer">
						<VanguardViewer />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
   			</div>
		</Router>
  	);
}

export default withStyles(styles)(connect(null,mapDispatchToProps)(App));
