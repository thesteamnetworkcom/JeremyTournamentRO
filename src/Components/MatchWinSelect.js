import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	setColor:{
		color:'white!important',
		borderColor:'white',
		'&:before': {
            borderColor:'white',
        },
        '&:after': {
            borderColor:'white',
        }
	},
	icon: {
        fill:'white',
    },
	
})

const MatchWinSelect = (props) => {
	const { classes } = props;
	return(
		<FormControl className={classes.setColor} variant="outlined">
			<InputLabel className={classes.setColor} id="MatchWinCountLabel">
				Wins
			</InputLabel>
			<Select
				labelId="MatchWinCountLabel"
				className={classes.setColor}
				id="MatchWinCount"
				label="Wins"
				value={props.curWins}
				onChange={(event)=>props.change(props.tgt, event)}
				disabled
			>
				<MenuItem value={0}>0</MenuItem>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
			</Select>
		</FormControl>
	)
}

export default withStyles(styles)(MatchWinSelect);