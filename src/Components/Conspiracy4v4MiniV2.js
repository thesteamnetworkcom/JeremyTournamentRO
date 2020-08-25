import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
	return {
		matches:state.matches,
		players:state.players,
	}
}

const styles = () => ({
	matchMini:{
		width:'100%',
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		fontSize:20,
		position:'relative',
	},
	top:{
		display:'flex',
		height:'50%',
		width:'100%',
		borderBottomStyle:'solid',
	},
	bottom:{
		display:'flex',
		height:'50%',
		width:'100%',
	},
	team:{
		flex:'0 0 25%',
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
		backgroundColor:'rgba(255,255,255,.5)',
	},
	vs:{
		position:'absolute',
		fontSize:40,
		left:'50%',
		top:'50%',
		transform:'translate(-50%, -50%)',
		backgroundColor:'rgba(255,255,255,1)',
		paddingLeft:10,
		paddingRight:10,
	}
})

function getPlayer(players, id){
	for(let i = 0; i < players.length; i++){
		if(players[i].id===id){
			return(<>{players[i].name}</>)
		}
	}
}

const ConnectedConspiracy4v4MiniV2 = (props) => {
	const { classes } = props;
	return(
		<div className={classes.matchMini}>
			<div className={classes.vs}>
				<span>VS</span>
			</div>
			<div className={classes.top}>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team1[0])}</span>
				</div>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team1[1])}</span>
				</div>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team1[2])}</span>
				</div>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team1[3])}</span>
				</div>
			</div>
			<div className={classes.bottom}>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team2[0])}</span>
				</div>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team2[1])}</span>
				</div>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team2[2])}</span>
				</div>
				<div className={classes.team}>
					<span>{getPlayer(props.players, props.team2[3])}</span>
				</div>
			</div>
		</div>
	)
}

const Conspiracy4v4MiniV2 = connect(mapStateToProps)(ConnectedConspiracy4v4MiniV2);

export default withStyles(styles)(Conspiracy4v4MiniV2);