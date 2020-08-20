import React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
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

const TeamWinSelect = (props) => {
	const { classes } = props;
	return(
		<FormControl className={classes.setColor} variant="outlined">
			<InputLabel className={classes.setColor} id="TeamWinSelectLabel">
				Win?
			</InputLabel>
			<Select
				 className={classes.setColor}
				labelId="TeamWinSelectLabel"
				id="TeamWinSelect"
				label="Win?"
				value={props.pos}
				onChange={(event)=>props.change(props.tgt, event)}
				disabled
			>
				<MenuItem value="yes">Yes</MenuItem>
				<MenuItem value="no">No</MenuItem>
			</Select>
		</FormControl>
	)
}

export default withStyles(styles)(TeamWinSelect);