import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Verdict(props) {
    if (props.temp >= 100) {
        return <p>The water will boil!!</p>
    } else {
        return <p>The water wont boil!!</p>
    }
}


class Boiler_verdict extends React.Component {
    constructor() {
        super();
        this.state = {
            Fartemp: '',
            Celtemp: ''
        }
        this.calculate = this.calculate.bind(this)
        this.changeTemp = this.changeTemp.bind(this)
    }

    changeTemp(tempinfar, tempincel) {
        this.setState({Celtemp: tempinfar}, {Fartemp: tempincel})

    }


    calculate(e) {
        if (e.target.name === 'C') {
            this.setState({Celtemp: e.target.value});
            this.setState({Fartemp:(e.target.value * 9 / 5) + 32})
        } else {
            this.setState({Fartemp: e.target.value});
            this.setState({Celtemp:(e.target.value - 32) * 5 / 9});
        }

    }


    render() {
        return (
            <div>
                <form>
                    <label>
                        Temp in Cel.
                    </label>
                    <input value={this.state.Celtemp} onChange={this.calculate} name="C"/>
                    <br/>
                    <label>
                        Temp in Far.
                    </label>
                    <input value={this.state.Fartemp} onChange={this.calculate} name="F"/>
                </form>
                <Verdict temp={parseFloat(this.state.Celtemp)} />
            </div>
        )
    }
}

ReactDOM.render(<Boiler_verdict />, document.getElementById('root'));
