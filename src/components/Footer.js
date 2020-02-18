import React from 'react';

const Footer = () =>  {

    const iconPath = process.env.PUBLIC_URL + '/assets/images/';

    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={`${iconPath}mvdb_logo.svg`} alt="MVDB logo" />
            </div>
            <div className="footer-text">
                <p>&copy; 2020 MVDB all rights reserved.</p>
                <p>Created by Zahra Fatemi, Kyungmi Moon, Kay Watanabe</p>
            </div>
        </footer>
    );
}

export default Footer;