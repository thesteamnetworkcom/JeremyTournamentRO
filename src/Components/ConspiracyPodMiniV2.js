import React from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
	}
}

const useStyles = makeStyles({
	podWrapper:{
		width:'50%',
		flex:'1 0 50%',
		padding:'5px',
	},
	top:{
		height:'50%',
		width:'100%',
		display:'flex',
	},
	playerName1:{
		'flex-grow':1,
		flex:'0 0 50%',
		transform:'skewX(20deg)',
		backgroundColor:'rgba(255,255,255,.5)',
	},
	unSkew1:{
		transform:'skewX(-20deg)',
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
		height:'100%',
		width:'100%',
	},
	playerName2:{
		'flex-grow':1,
		flex:'0 0 50%',
		transform:'skewX(-20deg)',
		backgroundColor:'rgba(255,255,255,.5)',
	},
	unSkew2:{
		transform:'skewX(20deg)',
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
		height:'100%',
		width:'100%',
	},
	bottom:{
		height:'50%',
		width:'100%',
		display:'flex',
	}
})

function getPlayer(players, id){
	for(let i = 0; i < players.length; i++){
		if(players[i].id === id){
			return(<>{players[i].name}</>)
		}
	}
}
				   
const ConnectedConspiracyPodMiniV2 = (props) => {
	const classes = useStyles(props);
	return(
		<div className={classes.podWrapper}>
			<div className={classes.top}>
				<div className={classes.playerName1}>
					<div className={classes.unSkew1}>
						<span>
							{getPlayer(props.players, props.group[0])}
						</span>
					</div>
				</div>
				<div className={classes.playerName2}>
					<div className={classes.unSkew2}>
						<span>
							{getPlayer(props.players, props.group[1])}
						</span>
					</div>
				</div>
			</div>
			<div className={classes.bottom}>
				<div className={classes.playerName2}>
					<div className={classes.unSkew2}>
						<span>
							{getPlayer(props.players, props.group[2])}
						</span>
					</div>
				</div>
				<div className={classes.playerName1}>
					<div className={classes.unSkew1}>
						<span>
							{getPlayer(props.players, props.group[3])}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

const ConspiracyPodMiniV2 = connect(mapStateToProps)(ConnectedConspiracyPodMiniV2);

export default ConspiracyPodMiniV2;