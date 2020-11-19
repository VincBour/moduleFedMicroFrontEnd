import * as React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TocIcon from '@material-ui/icons/Toc';
import { useStyles } from './style';

const menutListItems: {icon: JSX.Element, label: string}[] = [
    {icon: <DashboardIcon />, label: "Home"},
    {icon: <TocIcon />, label: "Offres"},
    {icon: <DashboardIcon />, label: "CV"},
    {icon: <DashboardIcon />, label: "Alert"},
]

const createMenuListItem = (Icon: JSX.Element, label: string) => (
    <ListItem button>
        <ListItemIcon>
            {Icon}
        </ListItemIcon>
        <ListItemText primary={label}/>
    </ListItem>
)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export  const MySpace = () =>   {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{menutListItems.map((i, key) => <React.Fragment key={key}>{createMenuListItem(i.icon, i.label)}</React.Fragment>)}</List>
        <Divider />
        <List></List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
               
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default MySpace;