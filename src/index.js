import React from 'react';
import ReactDOM from 'react-dom';

import appData from './appdata';
// import values from './values';

import NavComponent from './components/nav';
import Question from './components/question';
import BottomNavigation from './components/footer';
import PageNumberComponent from './components/footer';

const allPages = [];

const selected = {
    color: 'white',
    backgroundColor: 'var(--buildforsdgs-primary-color)',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
};

const deselected = {
    color: 'var(--buildforsdgs-primary-color)',
    backgroundColor: 'transparent'
}

let animateIn = {
    animation: '400ms ease-out animatePage'
}

let pageAnimation = {};

const animateOut = {
    animation: '400ms ease-out reverse animatePage'
}

class Interactive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            style: deselected,
            pageAnimation: animateIn,
            stateOfAllPages: []
        };
        this.stateOfAllPages = Array(appData.questions.length).fill(false);
        this.stateOfAllPages[0] = true;
        this.advancePage = this.advancePage.bind(this);
        this.comparePages = this.comparePages.bind(this);
    }

    advancePage(destinationPage, animateWhere, isOptionClicked) {
        if(isOptionClicked) this.stateOfAllPages[destinationPage] = true;

        this.setState({
            pageAnimation: animateWhere || animateIn,
            pageNumber: destinationPage,
            stateOfAllPages: this.stateOfAllPages
        });
        
        setTimeout(() => { this.setState({ pageAnimation: { } }) }, 800);
    }

    comparePages = (page) => {
        allPages.forEach((element) => {
            if (page === element) {
                // console.log("indexof page: ", allPages.indexOf(page));
                if(this.state.pageNumber > page) this.advancePage(page, animateOut);
                else this.advancePage(page, animateIn);
            }
        });
    }

    render() {
        const currentQuestion = appData.questions[this.state.pageNumber];
        const pages = [];
        
        for(let i = 1; i < appData.questions.length; i++){
            pages.push(<PageNumberComponent key={ i.toString() } value={i} isCurrent={ i === this.state.pageNumber} onClick={() => this.comparePages(i)} style={this.state.pageNumber === i ? selected : deselected } disabled={ !this.state.stateOfAllPages[i] }  />);
            allPages.push(i);
        }

        return (
            <div id="buildforsdgs-interactive-container">
                <NavComponent />
                <main>
                    <div className="container-fluid" style={ this.state.pageAnimation }>
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10">
                                <Question questionData={ currentQuestion } pageNumber={this.state.pageNumber} onClick={() => { this.state.pageNumber < appData.questions.length - 1 && this.advancePage(this.state.pageNumber + 1, animateIn, true) }} />
                            </div>
                        </div>
                    </div>
                </main>
                <section id="bottom-navigation" className="container-fluid">
                    <div className="row">
                        <div className="offset-lg-1 col-lg-10 bottom-navigation-group">
                            {pages}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    componentDidUpdate(){
        
    }
}

ReactDOM.render(<Interactive />, document.getElementById("root"));