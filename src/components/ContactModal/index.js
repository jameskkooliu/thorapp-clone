import React from "react";
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
	newPosOfDialog: {
		left: "60%",
		float: "right !important",
		height: '100%',
		width: '50%',
		background: 'rgb(98, 1, 255) !important'
	}
});



function ContactModal ({ open, onClose, ransitionComponent}) {
	
	const classes = useStyles();
    return (
		<Dialog classes={{
			paper: classes.newPosOfDialog
		  }}
		fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={ransitionComponent}>
			<div className="contact-modal">
			<Toolbar>
				<IconButton
					// edge="start"
					// color="inherit"
					onClick={onClose}
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>
			</Toolbar>

			<DialogTitle><p className="contact-modal-title">AWESOME!</p></DialogTitle>

			<DialogContentText>
				<div className="contact-modal-content">Get in touch to learn more about our annual plans for Online Apps:</div>
			</DialogContentText>
			<DialogContent>
				<form>
					<div className="d-flex justify-content-between">
						<input type="text" className="contact-input form-control" placeholder="First Name" required/>
						<input type="text" className="contact-input form-control" placeholder="Last Name" required/>
					</div>
					<div className="d-flex">
						<input type="email" className="contact-input form-control" placeholder="Email" required/>
					</div>
					<div className="d-flex justify-content-between">
						<input type="text" className="contact-input form-control" placeholder="Job Title" required/>
						<input type="text" className="contact-input form-control" placeholder="Phone" required/>
					</div>
					<div className="d-flex justify-content-between">
						<input type="text" className="contact-input form-control" placeholder="Company" required/>
						<input type="text" className="contact-input form-control" placeholder="Country" required/>
					</div>
					
					<div className="d-flex">
						<input type="text" className="contact-input contact-message form-control" placeholder="Message" required/>
					</div>
					<input type="submit" className="submit-btn form-control" value="SUBMIT" />
				</form>
			</DialogContent>
			</div>
		</Dialog>
    )
}

export default ContactModal