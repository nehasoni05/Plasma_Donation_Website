import React from 'react';
import "./style.css";


class Footer extends React.Component 
{
    render()
    {
        return (
            <footer>
    <div className="container">
        <div className="footer-cols">
            <ul>
                <li className="listEle">Helpful Links</li>
                <li><a href="https://www.mohfw.gov.in/" target="_blank" rel="noreferrer">Ministry of Health and Family Welfare, Gov. of India</a></li>
                <li><a  href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" target="_blank" rel="noreferrer">MOHFW - HELPLINE NUMBERS [by State]</a></li>
                <li><a  href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noreferrer">WHO: COVID-19 Home Page</a></li>
                <li><a  href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="_blank" rel="noreferrer">Centers for Disease Control and Prevention (CDC)</a></li>
                <li><a  href="https://coronavirus.thebaselab.com/" target="_blank" rel="noreferrer">COVID-19 Global Tracker</a></li>
            </ul>
            <ul>
                <li className="listEle">Sources</li>
                <li><a href="https://github.com/covid19india/api" target="_blank" rel="noreferrer"> 🔗 APIs by Covid19India</a></li>
                <li><a href="https://github.com/covid19india/api" target="_blank" rel="noreferrer"> Contribute to Source Code</a></li>
                <li><a href="https://github.com/covid19india/api" target="_blank" rel="noreferrer"> Report a bug</a></li>
                <li><a href="https://github.com/covid19india/api" target="_blank" rel="noreferrer">Contact Us</a></li>
                
            </ul>
        </div>
    </div>
    <hr/>
    <p>An effort by our Team to keep our loved ones safe and informed ❤️</p>
</footer>
        )
    }
}

export default Footer