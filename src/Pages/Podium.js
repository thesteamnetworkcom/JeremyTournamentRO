import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';

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
	standings:{
		'flex-grow':1,
		display:'flex',
		fontSize:20,
		color:'white',
		'justify-content':'center',
		'align-items':'center',
	},
	table:{
			
	},
	pad:{
		padding:10,
	},
	row:{
		'&:nth-child(1)':{
			fontSize:50,
			color:'gold'
		},
		'&:nth-child(2)':{
			fontSize:40,
			color:'silver',
		},
		'&:nth-child(3)':{
			fontSize:30,
			color:'#cd7f32',
		},
		'& > td':{
			padding:5,
		},
		fontSize:20,
		color:'white',
	}
})

const ConnectedPodium = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"Podium",
		players:props.players
	})
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			{Object.keys(props.players).length === 0 || Object.keys(props.matches).length === 0 ? "" :
			<>
			<div className={classes.standings}>
				<table className={classes.table}>
					<tbody>
						{props.players.slice().sort(function(a,b){return b.points-a.points}).map((el,index)=>
							<tr className={classes.row} key={index}>
								<td>{index+1}</td>
								<td>{el.name}</td>
								<td>{el.points}</td>
							</tr>				  
						)}
					</tbody>
				</table>
			</div>
			</>
			}
		</div>
	)
}

const Podium = connect(mapStateToProps)(ConnectedPodium);

export default withStyles(styles)(Podium);