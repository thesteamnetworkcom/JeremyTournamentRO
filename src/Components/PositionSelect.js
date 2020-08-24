import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const styles = () => ({
	fullWidth:{
		width:'100%'
	},
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
})

const PositionSelect = (props) => {
	const { classes } = props;

	return(
		<FormControl variant="outlined" className={classes.fullWidth}>
			<InputLabel className={classes.setColor} id="TeamPositionSelectLabel">
				Position
			</InputLabel>
			<Select
				className={classes.setColor}
				labelId="TeamPositionSelectLabel"
				id="TeamPositionSelect"
				label="Position"
				value={props.pos}
				onChange={(event)=>props.change(props.tgt, event)}
				disabled
			>
				<MenuItem value="1">1</MenuItem>
				<MenuItem value="2">2</MenuItem>
				<MenuItem value="3">3</MenuItem>
				<MenuItem value="4">4</MenuItem>
			</Select>
		</FormControl>
	)
}

export default withStyles(styles)(PositionSelect);