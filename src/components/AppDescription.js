import React, { Component } from 'react';

//un testo non racchiuso trea tag genera errore
//Benvenuto nella mia prima applicazione React!
//<div>Benvenuto nella mia prima applicazione React!</div>

class AppDescription extends Component {
    render() {
        return (
            <div>{this.props.text}</div>
        );
    }
}

export default AppDescription;
