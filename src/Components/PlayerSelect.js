import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	selectSize:{
		transform:props=>props.skewPos ? 'skewX(-20deg)' : 'skewX(20deg)',
		padding:10,
		color:'white',
		borderColor:'white',
		'&:before': {
            borderColor:'white',
        },
        '&:after': {
           borderColor:'white',
        },
	},	
})

const PlayerSelect = (props) => {
	const classes = useStyles(props);
	function checkForVal(){
		for(let i = 0; i < props.players.length; i++){
			if(props.players[i].selected === props.val){
				return props.players[i].id;
			}
		}
		return '';
	}
	return(
		<FormControl className={classes.selectSize}>
			<Select
				className={classes.setColor}
				labelId={"PlayerSelectLabel"+props.val}
				id={"PlayerSelect"+props.val}
				label="Player"
				value={checkForVal()}
				onChange={(event)=>props.change(event, checkForVal(), props.val)}
				disabled
			>
				{props.players.map((el,index)=>{
					if(el.selected === undefined || el.selected === 0){
						return(
							<MenuItem key={index} value={el.id}>
								{el.name}
							</MenuItem>
						)
					}else{
						return(
							<MenuItem key={index} value={el.id} disabled selected>
								{el.name}
							</MenuItem>
						)
					}
				})}
				<MenuItem value=''></MenuItem>
			</Select>
		</FormControl>
	)
}

export default PlayerSelect;