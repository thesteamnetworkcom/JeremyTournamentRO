import React from 'react';
import Header from '../Components/Header';
import Theme from '../Theme/Theme';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		vanguards:state.vanguards,
	}
}

const styles = () => ({
	fullScreen:{
		width:'100%',
		'text-align':'center',
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		color:'black',
		fontSize:40,
	},
	middleUp:{
		'text-align':'center',
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		color:'black',
		width:'100%',
	},
	smaller:{
		fontSize:20,
	},
	width:{
		width:'100%',
	}
})

const ConnectedVanguardViewer = (props) => {
	const { classes } = props;
	return(
		<div className={classes.fullScreen}>
			{Array.isArray(props.vanguards) !== false ? 
				props.vanguards.length > 0 ?
					props.vanguards.map((el, index) => 
						<div key={index} className={classes.middleUp}>
							<span>{el.name}</span>
							<span className={classes.smaller}>Cards: {el.cards}</span>
							<span className={classes.smaller}>Life: {el.life}</span>
							<span className={classes.smaller}>Ability: {el.ability}</span>
							<Divider className={classes.width}/>
						</div>
					)
				:""
			:""}	
		</div>
	)
}

const VanguardViewer = connect(mapStateToProps)(ConnectedVanguardViewer);

export default withStyles(styles)(VanguardViewer);