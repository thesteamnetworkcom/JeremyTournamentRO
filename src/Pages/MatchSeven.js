import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import MatchLarge from '../Components/MatchLarge';

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
	largeMatches:{
		'flex-grow':1,
		display:'flex',
		fontSize:20,
		color:'white',
	},
	leftSide:{
		width:'50%',
		padding:5,
	},
	rightSide:{
		width:'50%',
		padding:5,
	},
})

const ConnectedMatchSeven = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"MatchSeven",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.largeMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchSeven.Matches.map((el,index)=>
							index < 2 ?
								<MatchLarge key={index} match={el} index={index} group="matchSeven" /> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchSeven.Matches.map((el,index)=>
							index > 1 ?
								<MatchLarge key={index} match={el} index={index} group="matchSeven" /> : ''
						)
					}
				</div>
			</div>
		</div>
	)
}

const MatchSeven = connect(mapStateToProps)(ConnectedMatchSeven);

export default withStyles(styles)(MatchSeven);