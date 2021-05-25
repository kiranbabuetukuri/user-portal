import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function TopNav(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Link to='/'>
                            Home</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link to='/dashboard'>
                            Dashboard</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <a style={{ display: props.getLogin ? 'none' : 'block' }} href="#" onClick={(event) => { event.preventDefault() }} >Login</a>   <a style={{ display: props.getLogin ? 'block' : 'none' }} href="#" onClick={(event) => { event.preventDefault() }}  >Logout</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        getLogin: state.is_logged_in
    }
}
export default connect(mapStateToProps)(TopNav)