import React, {Component} from 'react';
import {TopNav} from './topNav.component';

export default class Container extends React.Component {
    render() {
        return (
            <div>
                <TopNav/> {this.props.children}
            </div>
        )
    }
}

// const Container = (props) => <div>     <TopNav/> {this.props.children} </div>
// export default Container;