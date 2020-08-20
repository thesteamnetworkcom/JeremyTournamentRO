import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = state => {
	return {
		players:state.players,
		matches:state.matches,
	}
}

const styles = () => ({
	fullScreen:{
		width:'100%',
		height:'100%',
		'text-align':'center',
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		color:'black',
		fontSize:40,
	},
})

const ConnectedStandings = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"Standings",
		players:props.players
	})
	return(
		<div className={classes.fullScreen}>				{Object.keys(props.players).length === 0 || Object.keys(props.matches).length === 0 ? "" :
			<table>
				<tbody>
					{props.players.slice().sort(function(a,b){return b.points-a.points}).map((el,index) => 
						<tr key={index}>
							<td>{el.name}</td>
							<td>{el.points}</td>
						</tr>
					)}
				</tbody>
			</table>
		}
		</div>
	)
}

const Standings = connect(mapStateToProps)(ConnectedStandings);

export default withStyles(styles)(Standings);