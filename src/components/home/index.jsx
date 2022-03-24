import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { MENU_PATH } from './const';
import styles from './index.module.less';

class Home extends Component {
    render() {
        return (
            <main className={styles.main}>
                <ul>
                    {Object.keys(MENU_PATH).map(name=>
                        <li key={name}><NavLink to={MENU_PATH[name]}>{name}</NavLink></li>
                    )}
                </ul>
                {this.props.children}
            </main>
        );
    }
}

export default Home;
