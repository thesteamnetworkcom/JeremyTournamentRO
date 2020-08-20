import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import Conspiracy4v4Large from '../Components/Conspiracy4v4Large';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const styles = () => ({
	fullScreen:{
		width:'100%',
		height:'100%',
		backgroundColor:'#052429',
		'text-align':'center',
		display:'flex',
		'flex-direction':'column',
	},
	pad:{
		padding:10,
	}
})

const ConnectedConspiracy4v4 = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"Conspiracy4v4",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			{Object.keys(props.players).length === 0 || Object.keys(props.matches).length === 0 ? "" :
			<>
			<Conspiracy4v4Large players={props.players} 
				team1={[
					props.matches.conspiracy4v4.Matches[0].player1,
					props.matches.conspiracy4v4.Matches[0].player2,
					props.matches.conspiracy4v4.Matches[0].player3,
					props.matches.conspiracy4v4.Matches[0].player4,
				]}
				team2={[
					props.matches.conspiracy4v4.Matches[0].player5,
					props.matches.conspiracy4v4.Matches[0].player6,
					props.matches.conspiracy4v4.Matches[0].player7,
					props.matches.conspiracy4v4.Matches[0].player8,
				]}
			/> 
			</>
			}
		</div>
	)
}

const Conspiracy4v4 = connect(mapStateToProps)(ConnectedConspiracy4v4);

export default withStyles(styles)(Conspiracy4v4);