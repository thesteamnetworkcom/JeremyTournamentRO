import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Image from '../Assets/BackgroundImages/Red_Background.jpg';
import Skyline from '../Assets/BackgroundImages/skyline.png';
import { Link } from 'react-router-dom';
import Theme from '../Theme/Theme';
import NameDisplay from '../Components/NameDisplay';

const mapStateToProps = state => {
	return { 
		players:state.players,
		steps:state.steps,
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		reset: () => dispatch({
			type:"RESET",
		})
	}
}

const styles = (Theme) => ({
	topBar:{
		height:'50%',
		width:'100%',
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		fontSize:'40px',
		position:'relative',
		overflowY:'hidden',
		background: '#0F2027',
		background: 'linear-gradient(#2C5364, #203A43, #0F2027)'

	},
	fullScreen:{
		width:'100%',
		height:'100%',
		//backgroundImage:`url(${Image})`,
		//backgroundRepeat: "no-repeat",
		//	backgroundPosition: "center center",
		//backgroundSize: "cover",
		//	backgroundAttachment: "fixed",
		display:'flex',
		'flex-direction':'column',
		'justify-content':'center',
		'align-items':'center',
		'color':'grey',
	},
	pad:{
		padding:10,
	},
	title:{
		height:'50%',
		width:'100%',
		backgroundColor:'#052429',
		'text-align':'center',
	},
	dividerColor:{
		backgroundColor:'rgba(200,200,200,.3)',
		height:5,
	},
	marginTop:{
		'margin-top':10,
	},
	thirtypx:{
		fontSize:'30px',
	},
	twentypx:{
		fontSize:'20px',
	},
	skylineimg:{
		width:'100%',
		height:'50%',
		bottom:'-20px',
		position:'absolute',
		backgroundImage: `url(${Skyline})`,
		backgroundSize: 'contain',
	},
	titlex:{
		textAlign:'center',
		[Theme.breakpoints.down('sm')]:{
			fontSize:30,
		}
	}
})

const ConnectedHome = (props) => {
	const { classes } = props;
	const [ state ] = useState({
		location:"Home",
	})
	return(
		<div className={classes.fullScreen}>
			<div className={classes.topBar}>
				<span className={classes.titlex}>Magic Bonanza Two!: Bachelor Boogaloo</span>
				<div className={classes.skylineimg} src={Skyline}></div>
				{Object.keys(props.steps).length === 0 ? "" :
					<Button 
					className={classes.marginTop} 
					variant="contained" 
					component={Link} 
					to={"/"+props.steps[props.steps[state.location].forward].name}>
						Let's Go
					</Button>
				}
			</div>
			<div className={classes.title}>
				<div>
					<span className={classes.thirtypx}>
						Featuring
					</span>
				</div>
				<Divider/>
				<div>
					{console.log(props.players)}
					{Object.keys(props.players).length === 0 ? "" :props.players.map((el,index) => (
						<NameDisplay key={index} name={el.name} />
					))}
				</div>
			</div>
		</div>
	)
}

const Home = connect(mapStateToProps, mapDispatchToProps)(ConnectedHome);

export default withStyles(styles)(Home);