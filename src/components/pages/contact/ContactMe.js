import React, { Component } from 'react';
import './ContactMe.css';

export default class ContactMe extends Component {
    render() {
        return (
            <div className="contactme-form">
                <form name="contact" method="POST" data-netlify="true">
                <input type='hidden' name='form-netlify' value='contact' />
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <div className="form-recaptcha" data-netlify-recaptcha="true"></div>
                <p className="last-row">
                <button type="submit">Submit</button>
                </p>
            </form>
            </div>
        )
    }
}
