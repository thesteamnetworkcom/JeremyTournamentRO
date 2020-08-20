import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Header from '../Components/Header';
import Button from '@material-ui/core/Button';
import produce from 'immer';
import Theme from '../Theme/Theme';

const mapStateToProps = state => {
  return { 
	  players:state.players, 
	  steps:state.steps,
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		submit: names => dispatch({
			type: "SUBMITNAMES",
			names: names
		})
	}
}

const styles = (Theme) => ({
	playerCard:{
		'margin-bottom':10,
		padding:10,
		display:'flex',
		'&> div':{
			'flex-grow':1
		},
		'&> span':{
			'width':80,
		},
		[Theme.breakpoints.down('sm')]:{
			height:'25%',
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
	nameWrapper:{
		'flex-grow':1,
		display:'flex',
		[Theme.breakpoints.down('sm')]:{
			'flex-direction':'column',
			position:'relative',
			top:'-50px',
		}
	},
	leftSide:{
		'flex-grow':1,
		padding:10,
		'padding-bottom':0,
		[Theme.breakpoints.down('sm')]:{
			backgroundColor:'#052429'
		}
	},
	rightSide:{
		'flex-grow':1,
		padding:10,
		'padding-top':0,
		[Theme.breakpoints.down('sm')]:{
			backgroundColor:'#052429'
		}
	}
})
const ConnectedNames = (props) => {
	const { classes } = props;
	const [ state, setState ] = useState({
		location:"Names",
		players:props.players,
	})
	useEffect(()=>{
		setState(
			produce(draft=>{
				draft.players = props.players
			})
		)
	},[props.players])
	const handleChange = (id, event) => {
		event.persist();
		setState(
			produce(draft => {
				for(let i = 0; i < draft.players.length; i++){
					if(draft.players[i].id === id){
						draft.players[i].charName = event.target.value;
					}
				}
			})
		);
	}
	return(
		<div className={classes.fullScreen}>
			<Header loc={state.location}/>
			<div className={classes.nameWrapper}>
				<div className={classes.leftSide}>
					{Array.isArray(state.players) !== false ? 
						state.players.map((el,index) => 
							index < 4 ? 
								<Card height={1/4} className={classes.playerCard} key={index}>
									<span>{el.name}</span>
									<TextField 
									label="Character Name" 
									variant="outlined" 
									value={
										el.charName !== undefined ? el.charName : ''
									}
									onChange={(event)=>handleChange(el.id, event)}
									disabled
									/>
								</Card> : 
							''
						) : 
					'' }
				</div>
				<div className={classes.rightSide}>
					{Array.isArray(state.players) !== false ?
						state.players.map((el,index) => 
							index > 3 ? 
								<Card className={classes.playerCard} key={index}>
									<span>{el.name}</span>
									<TextField 
									label="Character Name" 
									variant="outlined" 
									value={
										el.charName !== undefined ? el.charName : ''
									}
									onChange={(event)=>handleChange(el.id, event)}
									disabled
									/>
								</Card> : 
							''
						) : 
					'' }
				</div>
			</div>
		</div>
	)
}

const Names = connect(mapStateToProps, mapDispatchToProps)(ConnectedNames);

export default withStyles(styles)(Names);
