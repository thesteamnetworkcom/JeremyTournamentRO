import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PlayerSelect from '../Components/PlayerSelect';

const useStyles = makeStyles({
	rowWrapper:{
		display:'flex',
		'justify-content':'space-between',
		marginTop:5,
		marginBottom:5,
		
	},
	rowLabel:{
		flex:1,
		backgroundColor:'white',
		transform:props=>props.skewPos ? 'skewX(20deg)' : 'skewX(-20deg)',
		'& > div':{
			transform:props=>props.skewPos ? 'skewX(-20deg)' : 'skewX(20deg)',
			display:'flex',
			height:'100%',
			width:'100%',
			'justify-content':'center',
			'align-items':'center',
		},
		'&::before':{
			content:'""',
			backgroundColor:'white',
			height:'100%',
			width:'100%',
			position:'absolute',
			left:'-99%',
		},
		marginRight:5,
	},
	selectWrapper:{
		flex:1,
		backgroundColor:'#42475a',
		transform:props=>props.skewPos ? 'skewX(20deg)' : 'skewX(-20deg)',
		marginLeft:5,
		marginRight:5,
		boxShadow:props=>props.handleChange !== null ? '0 0px 7px rgba(255,255,255,1)': '0 0 0',
	},
	selectWrapper2:{
		flex:1,
		backgroundColor:'#42475a',
		transform:props=>props.skewPos ? 'skewX(20deg)' : 'skewX(-20deg)',
		'&::after':{
			content:'""',
			backgroundColor:'#42475a',
			width:'100%',
			height:'100%',
			position:'absolute',
		},
		marginLeft:5,
		boxShadow:props=>props.handleChange2 !== null ? '0 0px 7px rgba(255,255,255,1)': '0 0 0',
	}
})

const TeamDraftRow = (props) => {
	const classes = useStyles(props);
	return(
		<div className={classes.rowWrapper}>
			<div className={classes.rowLabel}>
				<div><span>{props.label}</span></div>
			</div>
			<div className={classes.selectWrapper}>
				<PlayerSelect change={props.handleChange} val={props.val} players={props.players} skewPos={props.skewPos}/>
			</div>
			<div className={classes.selectWrapper2}>
				<PlayerSelect change={props.handleChange2} val={props.val2} players={props.players} skewPos={props.skewPos}/>
			</div>
		</div>
	)
}

export default TeamDraftRow;