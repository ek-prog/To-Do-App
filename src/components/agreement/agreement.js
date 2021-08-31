import React, {Component} from "react";
import "./agreement.css";

export default class Agreement extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            isAgreeWithTerms: false,
        };
        this.emailRef = React.createRef();
    }


    handleChange = (event) => {
        this.setState({ email: event.target.value });
    };
    handleCheckbox  = (event) => {
        this.setState({ isAgreeWithTerms: event.target.checked });
    };

    componentDidMount() {
        this.emailRef.current.focus();
    }

    validateSubmit = () => {
        const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            this.state.email.toLocaleLowerCase()
        );

        const isValidCheckBox = this.state.isAgreeWithTerms;


        if (!isValidEmail) {
            alert('Your email is not valid');
            return;
        }
        if(!isValidCheckBox){
            alert('You should accept all terms and conditions');
            return;
        }
        this.setState({
            email: '',
            isAgreeWithTerms: false
        });
        alert('Thank you for subscription!');
    };


    render() {
        const {email, isAgreeWithTerms} = this.state;
        return (
            <form onSubmit={this.validateSubmit} className="d-flex-column">
                <label>
                    Email:
                    <input className="elem" type="email"
                           placeholder="Ivan325@gmail.com"
                           name="email"
                           value={email}
                           onChange={this.handleChange}
                           ref={this.emailRef}
                          />
                </label>
                <label>
                    I agree with terms and conditions
                    <input className="elem"
                           type="checkbox"
                            name='isAgreeWithTerms'
                           checked={isAgreeWithTerms}
                           onChange={this.handleCheckbox}
                    />
                </label>
                <button className="elem ">Send</button>
            </form>
        );
    };
};