import React from 'react';

const Footer = () =>  {

    const d = new Date();
    const y = d.getFullYear()
    console.log(y);

    return (
        <footer className="header">
            <div class="footer-logo"></div>
            <p>&copy; 2020 MVDB all rights reserved.</p>
            <p>Created by Zahra Fatemi, Kyungmi Moon, Kay Watanabe</p>
        </footer>
    );
}

export default Footer;