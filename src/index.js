import React from 'react';
import ReactDOM from 'react-dom';

import appData from './appdata';
import values from './values';

import NavComponent from './components/nav';
import Question from './components/question';
import BottomNavigation from './components/footer';

class Interactive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            que1: null,
            que2: null,
            que3: null,
            que4: null,
            que5: null,
            que6: null,
            result: null
        };
    }

    advancePage = () => {
        // console.log("question.length: ", appData.questions.length);
        const currentData = appData.questions[this.state.pageNumber];
        // console.log("")
        let nextPage = this.state.pageNumber + 1;
        this.setState({
            pageNumber: nextPage
        });
        console.log("pageNumber: ", this.state.pageNumber);
    }

    render() {
        console.log("pageNumber in render(): ", this.state.pageNumber);
        return (
            <div id="buildforsdgs-interactive-container">
                <NavComponent />
                <main>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 offset-lg-1 col-lg-10">
                                <Question questionData={appData.questions[this.state.pageNumber]} pageNumber={this.state.pageNumber} onClick={() => { this.state.pageNumber < appData.questions.length - 1 && this.advancePage() }} />
                            </div>
                        </div>
                    </div>
                </main>
                <BottomNavigation currentPage={this.state.pageNumber} />
            </div>
        );
    }
}

ReactDOM.render(<Interactive />, document.getElementById("root"));