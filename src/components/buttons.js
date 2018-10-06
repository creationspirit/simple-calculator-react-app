import React, { Component } from 'react';
import Button from './button';

class Buttons extends Component {

    render() {
        return (
            <div className="button-panel">
                <div>
                    <Button name="AC" handleClick={this.props.handleClick} />
                    <Button name="C" handleClick={this.props.handleClick} />
                </div>
                <div>
                    <Button name="7" handleClick={this.props.handleClick} />
                    <Button name="8" handleClick={this.props.handleClick} />
                    <Button name="9" handleClick={this.props.handleClick} />
                    <Button name="/" handleClick={this.props.handleClick} />
                </div>
                <div>
                    <Button name="4" handleClick={this.props.handleClick} />
                    <Button name="5" handleClick={this.props.handleClick} />
                    <Button name="6" handleClick={this.props.handleClick} />
                    <Button name="*" handleClick={this.props.handleClick} />
                </div>
                <div>
                    <Button name="1" handleClick={this.props.handleClick} />
                    <Button name="2" handleClick={this.props.handleClick} />
                    <Button name="3" handleClick={this.props.handleClick} />
                    <Button name="-" handleClick={this.props.handleClick} />
                </div>
                <div>
                    <Button name="0" handleClick={this.props.handleClick} />
                    <Button name="." handleClick={this.props.handleClick} />
                    <Button name="=" handleClick={this.props.handleClick} />
                    <Button name="+" handleClick={this.props.handleClick} />
                </div>
            </div>
        );
    }
}

export default Buttons;