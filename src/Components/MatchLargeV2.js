import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Theme from '../Theme/Theme';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
		vanguards:state.vanguards,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateMatch: (match, index, group, target, wins) => dispatch({
			type: "UPDATEMATCHM",
			details:{
				match:match,
				index:index,
				group:group,
				target:target,
				wins:wins
			}
		})
	}
}

const styles = (Theme) => ({
	matchup:{
		width:'100%',
		height:'50%',
		padding:5,
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
		position:'relative',
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
		},
		position:'relative',
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
		fontSize:14,
	},
	fontLarge:{
		fontSize:20,
	},
	winsBackgroundLeft:{
		position:'absolute',
		top:0,
		left:'57%'
	},
	winsBackgroundRight:{
		position:'absolute',
		top:0,
	},
	winsForeground:{
		position:'absolute',
		width:'100%',
		height:'100%',
		display:'flex',
		'flex-direction':'column',
	},
	plus:{
		width:'100%',
		'flex-grow':1
	},
	minus:{
		width:'100%',
		'flex-grow':1,
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

const ConnectedMatchLargeV2 = (props) => {
	const { classes } = props;
	const [state, setState] = useState({
		player1wins:props.match.player1wins,
		player2wins:props.match.player2wins
	})
	const handleChange = (tgt, changeDir) => {
		let value;
		if(changeDir==="plus"){
			value = state[tgt]+1
		}else{
			value = state[tgt]-1
		}
		props.updateMatch(
			props.match,
			props.index,
			props.group,
			tgt,
			value
		)
		setState({
			...state,
			[tgt]:value
		})
	}
	const player1 = getPlayer(props.match.player1, props)
	const player2 = getPlayer(props.match.player2, props)
	return(
		<div className={classes.matchup}>
			<div className={classes.teams}>
				<div className={classes.team + ' ' + classes.padright}>
					<div className={classes.winsBackgroundLeft}>
						{state.player1wins}
					</div>
					<span className={classes.fontSmall}>{player1.charName}</span>
					<span className={classes.fontLarge}>{player1.name}</span>
					<span className={classes.fontSmall}>{getVanguard(player1.vanguardID, props.vanguards)}</span>
					<div className={classes.winsForeground}>
						<div className={classes.plus} onClick={null/*(event)=>handleChange("player1wins","plus")*/}></div>
						<div className={classes.minus} onClick={null/*(event)=>handleChange("player1wins","minus")*/}></div>
					</div>
				</div>
				<div className={classes.team + ' ' + classes.padleft}>
					<div className={classes.winsBackgroundRight}>
						{state.player2wins}
					</div>
					<span className={classes.fontSmall}>{player2.charName}</span>
					<span className={classes.fontLarge}>{player2.name}</span>
					<span className={classes.fontSmall}>{getVanguard(player2.vanguardID, props.vanguards)}</span>
					<div className={classes.winsForeground}>
						<div className={classes.plus} onClick={null/*(event)=>handleChange("player2wins","plus")*/}></div>
						<div className={classes.minus} onClick={null/*(event)=>handleChange("player2wins","minus")*/}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

const MatchLargeV2 = connect(mapStateToProps, mapDispatchToProps)(ConnectedMatchLargeV2);

export default withStyles(styles)(MatchLargeV2);