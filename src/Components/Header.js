import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import Skyline from '../Assets/BackgroundImages/skyline.png';
import Theme from '../Theme/Theme';

const mapStateToProps = state => {
	return {
		steps:state.steps,
	}
};

const styles = (Theme) => ({
	headerWrapper:{
		display:'flex',
		'flex-direction':'column',
		'& > *':{
			'text-align':'center',
		},
		height:'30%',
		width:'100%',
		position:'relative',
		overflowY:'hidden',
		background: '#0F2027',
		background: 'linear-gradient(#2C5364, #203A43, #0F2027)',
	},
	linksWrapper:{
		display:'flex',
		'justify-content':'space-between',
	},
	centeredLabel:{
		width:'100%',
		'text-align':'center',
		color:'white',
	},
	fullWidth:{
		width:'100%',	
	},
	skylineimg:{
		width:'100%',
		height:'50%',
		bottom:'-100px',
		position:'absolute',
		backgroundImage: `url(${Skyline})`,
		backgroundSize: 'contain',
		[Theme.breakpoints.down('sm')]:{
			bottom:'0px',
		}
	},
	centerCont:{
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
	},
	linkhover:{
		color:'white',
		minWidth:'15%',
		[Theme.breakpoints.down('sm')]:{
			width:'25%',
		}
	},
	linkColor:{
		color:'white',
	},
	RoundMenu:{
		padding:'20px',
		fontSize:'40px',
		borderStyle:'solid',
		borderRadius:'10px',
		color:'white',
		borderWidth:'1px',
		[Theme.breakpoints.down('sm')]:{
			fontSize:'20px',
		}
	},
	stepSkip:{
		'border-radius':0,
		width:'25%',
		display:'inline-block',
		height:'10%',
		display:'inline-flex',
		'justify-content':'center',
		'align-items':'center',
	}
});

const ConnectedHeader = (props) => {
	const { classes } = props;
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
    	setOpen(true);
  	};  
	const handleClose = () => {
  		setOpen(false);
  	};
	return(
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<>
				{Object.keys(props.steps).map((key,index) => 
					<Card className={classes.stepSkip} component={Link} to={"/"+props.steps[key].name}  key={index}>
						{props.steps[key].displayName}
					</Card>
				)}
				<Card className={classes.stepSkip} component={Link} to={"/standings"}>
					Standings
				</Card>
				</>
			</Modal>

			<div className={classes.headerWrapper}>
				<div className={classes.skylineimg} src={Skyline}></div>
				<div className={classes.linksWrapper}>
					{props.steps[props.loc] !== undefined ? 
						<>
							<div className={classes.centerCont + ' ' + classes.linkhover}>
								<Link className={classes.linkColor} to={"/"+props.steps[props.steps[props.loc].prev].name}>
									<h2>Back</h2>
									<h5>({props.steps[props.steps[props.loc].prev].displayName})</h5>
								</Link>
							</div>
							<div className={classes.centerCont}>
								<div className={classes.RoundMenu} onClick={handleOpen}>Round Menu</div>
							</div>
							<div className={classes.centerCont + ' ' + classes.linkhover}>
								<Link className={classes.linkColor} to={"/"+props.steps[props.steps[props.loc].forward].name}>
									<h2>Advance</h2>
									<h5>({props.steps[props.steps[props.loc].forward].displayName})</h5>
								</Link>
							</div>
						</> :
					''}
				</div>
				<div className={classes.centeredLabel}>
					<h2>{props.loc}</h2>
				</div>
			</div>
		</>
	)
}

const Header = connect(mapStateToProps)(ConnectedHeader);

export default withStyles(styles)(Header);