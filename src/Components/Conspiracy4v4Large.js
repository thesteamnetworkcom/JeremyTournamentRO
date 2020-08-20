import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TeamWinSelect from './TeamWinSelect';
import Divider from '@material-ui/core/Divider';

const mapStateToProps = state => {
	return { 
		matches:state.matches,
		players:state.players
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateCon4v4: (match, index, group, target, wins) =>
		dispatch({
			type: "UPDATEMATCHM",
			details:{
				match:match,
				index:index,
				group:group,
				target:target,
				wins:wins,
			}
		})
	}
}

const styles = () => ({
	team:{
		display:'flex',
		'justify-content':'space-between',
		'align-items':'center',
		height:'50%',
	},
	plyr:{
		width:'20%',
	},
	wrapper:{
		display:'flex',
		'flex-direction':'column',
		'flex-grow':1,
		color:'white',
		padding:10
	},
	setColor:{
		color:'white',
		borderColor:'white',
		'&:before': {
            borderColor:'white',
        },
        '&:after': {
            borderColor:'white',
        }
	},
})

function getPlayer(players, id){
	for(let i = 0; i < players.length; i++){
		if(players[i].id === id){
			return (<>{players[i].name}</>)
		}
	}
}

const ConnectedConspiracy4v4Large = (props) => {
	const { classes } = props;
	const handleChange = (tgt, event) => {
		let tgtVal;
		if(event.target.value==="yes"){
			tgtVal = 1
		}else{
			tgtVal = 0
		}
		props.updateCon4v4(
			props.match,
			0,
			"conspiracy4v4",
			tgt,
			tgtVal
		)
	}
	return(
		<div className={classes.wrapper}>
			<div className={classes.team}>
				<div className={classes.plyr}>{getPlayer(props.players, props.team1[0])}</div>
				<div className={classes.plyr}>{getPlayer(props.players, props.team1[1])}</div>
				<div className={classes.plyr}>{getPlayer(props.players, props.team1[2])}</div>
				<div className={classes.plyr}>{getPlayer(props.players, props.team1[3])}</div>
				<TeamWinSelect tgt={1} change={handleChange} />
			</div>
			<Divider/>
			<div className={classes.team}>
				<div className={classes.plyr}>{getPlayer(props.players, props.team2[0])}</div>
				<div className={classes.plyr}>{getPlayer(props.players, props.team2[1])}</div>
				<div className={classes.plyr}>{getPlayer(props.players, props.team2[2])}</div>
				<div className={classes.plyr}>{getPlayer(props.players, props.team2[3])}</div>
				<TeamWinSelect tgt={2} change={handleChange}/>
			</div>
		</div>
	)
}

const Conspiracy4v4Large = connect(mapStateToProps, mapDispatchToProps)(ConnectedConspiracy4v4Large);

export default withStyles(styles)(Conspiracy4v4Large);

