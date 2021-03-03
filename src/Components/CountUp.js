import { Component } from 'react';

export default class CountUp extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState({ number: this.state.number + 1 });
    // }

    handleClick = () => {
        this.setState({ number: this.state.number + 1 });
    }

    render() {
        return (
            <section>
                <p onClick={this.handleClick}>The count is: {this.state.number}</p>
                <p>Have a nice day!</p>
            </section>
        )
    }
}