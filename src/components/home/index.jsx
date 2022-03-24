import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { MENU_PATH } from './const'

class Home extends Component {
    render() {
        const style = {
            display: 'flex',
            gap: '48px',
        }

        return (
            <div style={style} >
                <ul>
                    {Object.keys(MENU_PATH).map(name=>
                        <li key={name}><NavLink to={MENU_PATH[name]}>{name}</NavLink></li>
                    )}
                </ul>
                {this.props.children}
            </div>
        );
    }
}

export default Home;
