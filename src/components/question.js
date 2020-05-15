import Options from './options';
import React from 'react';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            isAnswered: false
        }
    }

    render() {
        const { keyword } = this.props.questionData;
        const myQuestionData = this.props.questionData;

        let text = "";
        let header = "";

        if(this.props.pageNumber === 0 || this.props.pageNumber > 6){
            header = <h2 className="buildforsdgs-question-header">{ myQuestionData.title}</h2>;
            const textData = myQuestionData.text;
            text = textData.map((element) => <p className="buildforsdgs-question-text" style={{textAlign: 'start'}}>{element}</p>);
        }else{
            header = <h2 className="buildforsdgs-question-header">Question { this.props.pageNumber }</h2>;
            text = <p className="buildforsdgs-question-text">During the past 30 days, about how often did you feel <span className="primary-color-text">{ keyword }</span>?</p>;
        }
        return (
            <div id="buildforsdgs-screening-content">
                <div id="header-div">
                    {header}
                </div>
                <div id="question-text-div">
                    {text}
                </div>
                <Options optionTexts={ this.props.questionData.options } onClick={() => this.props.onClick() } pageNumber={ this.props.pageNumber }/>
            </div>
        );
    }
}