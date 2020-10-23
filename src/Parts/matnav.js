import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

const drawerWidth = 200

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:'blue'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width:drawerWidth,
    backgroundColor:'whitesmoke'

  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Prudential  &nbsp;    |    
          </Typography>
          <Typography variant="h6" noWrap>
              &nbsp;    Participant
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        
      >
        {/* <div className={classes.toolbar} /> */}
        <List>
          {
          [
            {
                title: 'Dashboard',
                path: '/',
               
            },
            {
                title: 'Accounts',
                path: '/accounts',
               
            },
            {
                title: 'Profile',
                path: '/profile',
               
            },
            {
                title: 'Activity',
                path: '/activity',
               
            },

            {
                title: 'Support',
                path: '/support',
               
            },
            {
                title: 'Add Cash',
                path: '/addcash',
               
            },
            {
                title: 'Get Cash',
                path: '/getcash',
               
            },
        ].map((text, index) => (
            <ListItem button key={text}>
               <Link to={text.path} style={{ color: "black",textDecoration:"none"}}>
              <ListItemText primary={text.title}  style={{marginLeft:'4rem'}} />
                </Link>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    /</div> 
  );
}
