import React from 'react';

const numberedToTen = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

class PageNumberComponent extends React.Component{
    render(){
        return(
            <button className="buildforsdgs-nav-button">{ this.props.value }</button>
        );
    }
}

export default class BottomNavigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: null,
        }
    }

    render() {
        const pages = numberedToTen.map((page) => <PageNumberComponent value={ page } isCurrent={ page === this.props.currentPage } />);
        return (
            <section id="bottom-navigation" className="container-fluid">
                <div className="row">
                    <div className="offset-lg-1 col-lg-10 bottom-navigation-group">
                        { pages }
                    </div>
                </div>
            </section>
        )
    }
}