import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerClick} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktoOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;