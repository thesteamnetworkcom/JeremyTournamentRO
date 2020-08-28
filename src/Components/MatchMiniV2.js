import React from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
		vanguards:state.vanguards,
	}
};

const useStyles = makeStyles({
	matchup:{
		width:'100%',
		height:props=> props.quarter ? '25%' : '50%',
		padding:5,
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
	},
	teams:{
		width:'120%',
		display:'flex',
		backgroundColor:'#052429',
		padding:5,
		height:'100%',
		'justify-content':'center',
		'align-items':'center',
		'overflow-x':'hidden',
	},
	team:{
		backgroundColor:'#42475a',
		transform:'skewX(20deg)',
		height:'100%',
		flex:'1 0 100%',
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		'& > span':{
			transform:'skewX(-20deg)',
			position:'relative',
		}
	},
	padright:{
		marginRight:6,
		'& > span':{
			left:'25%',
		}
	},
	padleft:{
		marginLeft:6,
		'& > span':{
			right:'25%',
		}
	},
	fontSmall:{
		fontSize:props=> props.smallText ? 10 : 14,
	},
	fontLarge:{
		fontSize:props=> props.smallText ? 14 : 20,
	}
})

function getPlayer(id, props){
	for(let i = 0; i < props.players.length; i++){
		if(id===props.players[i].id){
			return props.players[i]
		}
	}
}
function getVanguard(vanguardID, vanguards){
	for(let i = 0; i < vanguards.length; i++){
		if(vanguards[i].id === vanguardID){
			return vanguards[i].name;
		}
	}
}
const ConnectedMatchMiniV2 = (props) => {
	const classes = useStyles(props);
	const player1 = getPlayer(props.matches[props.matchRound].Matches[props.nmb].player1, props)
	const player2 =  getPlayer(props.matches[props.matchRound].Matches[props.nmb].player2, props)
	return(
		<div className={classes.matchup}>
			<div className={classes.teams}>
				<div className={classes.team + ' ' + classes.padright}>
					<span className={classes.fontSmall}>{player1.charName}</span>
					<span className={classes.fontLarge}>{player1.name}</span>
					<span className={classes.fontSmall}>{getVanguard(player1.vanguardID, props.vanguards)}</span>
				</div>
				<div className={classes.team + ' ' + classes.padleft}>
					<span className={classes.fontSmall}>{player2.charName}</span>
					<span className={classes.fontLarge}>{player2.name}</span>
					<span className={classes.fontSmall}>{getVanguard(player2.vanguardID, props.vanguards)}</span>
				</div>
			</div>
		</div>
	)
}

const MatchMiniV2 = connect(mapStateToProps)(ConnectedMatchMiniV2);

export default MatchMiniV2