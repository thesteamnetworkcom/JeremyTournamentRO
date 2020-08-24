import React from 'react';
import Theme from '../Theme/Theme';
import { withStyles } from '@material-ui/core/styles';

const styles = (Theme) => ({
	nameText:{
		fontSize:20,
		fontWeight:400,
		color:'white',
	},
	wrapper:{
		backgroundColor:'#42475a',
		padding:5,
		borderBottomStyle:'solid',
		borderColor:'#d9c8a9',
		borderBottomWidth:2,
	}
})

const NameDisplay = (props) => {
	const { classes } = props;
	return(
		<div className={classes.wrapper}>
			<span className={classes.nameText}>{props.name}</span>
		</div>
	)
}

export default withStyles(styles)(NameDisplay);