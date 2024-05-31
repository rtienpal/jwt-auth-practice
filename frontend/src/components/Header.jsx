import * as React from 'react';

export default function Header(props) {
    return (
        <div>
            <header className="App-header">
                <img src={props.logoSrc} className="App-logo" alt="logo"/>
                <h1 className="App-title">{props.pageTitle}</h1>
            </header>
        </div>
    )
}