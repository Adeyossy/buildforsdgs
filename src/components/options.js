import React from 'react';
import values from '../values';
import appData from '../appdata';
const arrayOfValues = values.valuesArray;

class InteractiveButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            isSelected: false
        }

        this.style = {
            color: 'white',
            backgroundColor: 'var(--buildforsdgs-primary-color)',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
        }
    }

    onInteractiveButtonClick = () => {
        if (this.props.pageNumber > 0 && this.props.pageNumber < 7) arrayOfValues[this.props.pageNumber - 1] = this.props.data.value;
        if (this.props.pageNumber > 6) {
            console.log("values: ", ...arrayOfValues);
            values.result = arrayOfValues.reduce((a, b) => a + b);
            console.log("result: ", values.result);
            //TODO: include ability to send results to the backend
        }
        this.props.onClick();
        this.setState({
            value: this.props.data.value,
            isSelected: true
        });
    }

    render() {
        return (
            <button className="buildforsdgs-question-option" style={ this.props.isSelectedInParent ? this.style : { } } onClick={this.onInteractiveButtonClick.bind(this)}>{this.props.data.option} </button>
        );
    }
}

export default class Options extends React.Component {
    constructor(props) {
        super(props);

        this.optionState = Array(this.props.data.length).fill(false);
        this.allOptionStates = Array(appData.questions.length).fill(this.optionState);

        this.state = {
            allOptionStates: this.allOptionStates
        }

        this.getOptionState.bind(this);
        this.setOptionState.bind(this);
    }

    setOptionState = (index, texts, pageNumber) => {
        this.optionState = Array(texts.length).fill(false);
        // this.allOptionStates = Array(appData.questions.length).fill(this.optionState);
        // texts = texts.map((each) => each.isSelected = false);
        this.optionState[index] = true;
        this.allOptionStates[pageNumber] = this.optionState;
        
        this.setState({
            allOptionStates: this.allOptionStates
        });

        this.props.onClick();
    }

    getOptionState = (index) => {
        let optionState = this.state.allOptionStates[this.props.pageNumber];
        console.log("pageNumber", this.props.pageNumber,"optionState: ", optionState);
        return optionState[index];
    }

    render() {
        const texts = this.props.data;
        const optionsElement = texts.map((option) =>
            <InteractiveButton key={texts.indexOf(option).toString()} data={option} onClick={() => this.setOptionState(texts.indexOf(option), texts, this.props.pageNumber)} pageNumber={this.props.pageNumber} isSelectedInParent={ this.getOptionState(texts.indexOf(option)) } />
        );
        // console.log(this.state.allOptionStates[this.props.pageNumber]);
        return (
            <div className="question-options-div">{optionsElement}</div>
        );
    }
}