import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import MatchLarge from '../Components/MatchLarge';
import Theme from '../Theme/Theme';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		matches:state.matches,
	}
}

const styles = (Theme) => ({
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
		[Theme.breakpoints.down('sm')]:{
			'flex-direction':'column',
		}
	},
	leftSide:{
		width:'50%',
		padding:5,
		[Theme.breakpoints.down('sm')]:{
			paddingBottom:0,
			width:'100%',
			'flex-grow':1,
		}
	},
	rightSide:{
		width:'50%',
		padding:5,
		[Theme.breakpoints.down('sm')]:{
			paddingTop:0,
			width:'100%',
			'flex-grow':1,
		}
	},
})


const ConnectedMatchSix = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"MatchSix",
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.largeMatches}>
				<div className={classes.leftSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchSix.Matches.map((el,index)=>
							index < 2 ?
								<MatchLarge key={index} match={el} index={index} group="matchSix" /> : ''
						)
					}
				</div>
				<div className={classes.rightSide}>
					{Object.keys(props.matches).length === 0 ? "" :
						props.matches.matchSix.Matches.map((el,index)=>
							index > 1 ?
								<MatchLarge key={index} match={el} index={index} group="matchSix" /> : ''
						)
					}
				</div>
			</div>
		</div>
	)
}

const MatchSix = connect(mapStateToProps)(ConnectedMatchSix);

export default withStyles(styles)(MatchSix);