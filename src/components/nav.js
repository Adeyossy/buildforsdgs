import React from 'react';

export default class NavComponent extends React.Component {
    render() {
        return (
            <nav id="buildforsdgs-nav">
                <div className="buildforsdgs-nav-brand"></div>
                <div className="buildforsdgs-nav-links">
                    <a href="/about" className="nav-link">About</a>
                    <a href="/emergency"><span></span>Emergency</a>
                    <a href="#" className="nav-link">End Screening</a>
                </div>
            </nav>
        );
    }
}