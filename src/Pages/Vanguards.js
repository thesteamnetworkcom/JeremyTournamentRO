import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Header from '../Components/Header';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import produce from 'immer';

const mapStateToProps = state => {
	return {
		players:state.players,
		steps:state.steps,
		vanguards:state.vanguards,
	}
}
const mapDispatchToProps = (dispatch) => {
	return { 
		submit: vanguards => dispatch({
			type: "SUBMITVANGUARDS",
			vanguards: vanguards
		})
	}
}

const styles = () => ({
	playerCard:{
		'margin-bottom':10,
		padding:10,
		display:'flex',
		'&> div':{
			'flex-grow':1
		},
		'&> span':{
			'width':80,
		}
	},
	fullScreen:{
		width:'100%',
		height:'100%',
		backgroundColor:'#052429',
	},
	pad:{
		padding:10,
	},
	fullWidth:{
		'width':'100%'
	},
	vanguardWrapper:{
		'flex-grow':1,
		display:'flex',
	},
	leftSide:{
		'flex-grow':1,
		padding:10,
	},
	rightSide:{
		'flex-grow':1,
		padding:10,
	}
})

const ConnectedVanguards = (props) => {
	const { classes } = props;
	const [ state, setState ] = useState({
		location:"Vanguards",
		players:props.players,
		vanguards:props.vanguards,
	})
	useEffect(()=>{
		setState(
			produce(draft=>{
				draft.players = props.players;
				draft.vanguards = props.vanguards;
			})
		)
	},[props.players, props.vanguards])
	const handleChange = (id, event) => {
		event.persist();
		setState(
			produce(draft => {
				for(let i = 0; i < draft.players.length; i++){
					if(draft.players[i].id === id){
						draft.players[i].vanguardID = event.target.value;
					}
				}	 
			})
		);
	}
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.vanguardWrapper}>
				<div className={classes.leftSide}>
					{Array.isArray(state.players) & Array.isArray(state.vanguards) !== false ? 
						state.players.map((el, index) => index < 4 ?
							<Card className={classes.playerCard} key={index}>
								<span>{el.name}</span>
								<FormControl variant="outlined">
									<InputLabel id={el.name + "-Vanguard-Label"}>Vanguard</InputLabel>
									<Select
									labelId={el.name + "-Vanguard-Label"}
									id={el.name+"-Vanguard"}
									label="Vanguard"
									value={el.vanguardID === undefined ? '' : el.vanguardID}
									onChange={(event)=>handleChange(el.id,event)}
									disabled
									>
										{props.vanguards.map((vl, index) => (
											<MenuItem key={index} value={vl.id}>
												{vl.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Card> : 
						'' ) :
					'' }
				</div>
				<div className={classes.leftSide}>
					{Array.isArray(state.players) & Array.isArray(state.vanguards) !== false ? 
						state.players.map((el, index) => index > 3 ?
							<Card className={classes.playerCard} key={index}>
								<span>{el.name}</span>
								<FormControl variant="outlined">
									<InputLabel id={el.name + "-Vanguard-Label"}>Vanguard</InputLabel>
									<Select
									labelId={el.name + "-Vanguard-Label"}
									id={el.name+"-Vanguard"}
									label="Vanguard"
									value={el.vanguardID === undefined ? '' : el.vanguardID}
									onChange={(event)=>handleChange(el.id,event)}
									disabled
									>
										{props.vanguards.map((vl, index) => (
											<MenuItem key={index} value={vl.id}>
												{vl.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Card> : 
						'' ) :
					'' }
				</div>
			</div>
		</div>
	)
}

const Vanguards = connect(mapStateToProps, mapDispatchToProps)(ConnectedVanguards);

export default withStyles(styles)(Vanguards);