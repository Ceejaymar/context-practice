import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";

import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext, withLanguageContext } from './contexts/LanguageContext';

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme}  = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;

    return (
      // <LanguageContext.Consumer>
      //   {
      //     value => (
      //       <div className={classes.root}>
      //         <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
      //           <Toolbar>
      //             <IconButton className={classes.menuButton} color='inherit'>
      //               <span>🇫🇷</span>
      //             </IconButton>
      //             <Typography className={classes.title} variant='h6' color='inherit'>
      //               App Title {value.language}
      //             </Typography>
      //             <Switch onClick={toggleTheme} />
      //             <div className={classes.grow} />
      //             <div className={classes.search}>
      //               <div className={classes.searchIcon}>
      //                 <SearchIcon />
      //               </div>
      //               <InputBase
      //                 placeholder='Search...'
      //                 classes={{
      //                   root: classes.inputRoot,
      //                   input: classes.inputInput
      //                 }}
      //               />
      //             </div>
      //           </Toolbar>
      //         </AppBar>
      //       </div>
      //     )
      //   }
      // </LanguageContext.Consumer>

      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>🇫🇷</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title {language}
            </Typography>
            <Switch onClick={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search...'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));
