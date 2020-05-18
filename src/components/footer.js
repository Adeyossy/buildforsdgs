import React from 'react';

const numberedToTen = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

export default class PageNumberComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style: {}
        }
    }

    render(){
        return(
            <button className="buildforsdgs-nav-button" style={ this.props.style } onClick={ () => this.props.onClick() } disabled={ this.props.disabled }>{ this.props.value }</button>
        );
    }
}

class BottomNavigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: null,
        }
        this.comparePages = this.comparePages.bind(this);
    }

    comparePages = (page) => {
        numberedToTen.forEach((element) => {
            if(page === element) {
                console.log("indexof page: ", numberedToTen.indexOf(page));
            }
            else console.log("element not found!");
        });
        // this.props.onClick();
    }

    render() {
        const pages = numberedToTen.map((page) => <PageNumberComponent value={ page } isCurrent={ page === this.props.currentPage } onClick={ () => this.comparePages(page) } />);
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