import React from 'react';
import values from '../values';
const arrayOfValues = values.valuesArray;

class InteractiveButton extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            value: null,
            isSelected: false
        }
    }

    onInteractiveButtonClick = () => {
        if(this.props.pageNumber > 0 && this.props.pageNumber < 7) arrayOfValues[this.props.pageNumber - 1] = this.props.data.value;
        if(this.props.pageNumber > 6) {
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
            <button className="buildforsdgs-question-option" onClick={ this.onInteractiveButtonClick.bind(this) }>{ this.props.data.option } </button>
        );
    }
}

export default class Options extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const texts = this.props.optionTexts;
        const optionsElement = texts.map((option) => 
            <InteractiveButton data={ option } onClick={() => this.props.onClick() } pageNumber={ this.props.pageNumber }/>
        );
        return (
            <div className="question-options-div">{ optionsElement }</div>
        );
    }
}