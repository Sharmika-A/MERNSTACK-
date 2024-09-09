import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div>
            <div id="banner">
                <p>
                    <a href="#"><img src="images/home.gif" alt="homepage" /></a> | <a href="mailto:denise@mitchinson.net"><img src="images/mail.gif" alt="contact" /></a>
                </p>
                <h1>Your Company Name ...</h1>
            </div>
            <div id="menu">
                <ul id="nav">
                    <li id="home"><a href="#">Home</a></li>
                    <li id="who" className="activelink"><a href="#">About</a></li>
                    <li id="prod"><a href="#">Product</a></li>
                    <li id="serv"><a href="#">Services</a></li>
                    <li id="cont"><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div id="container">
                <div id="content">
                    <h1>Welcome to <span style={{ fontWeight: 'bold', color: '#C4DA64' }}>StopWatch</span> Template</h1>
                    <p className="big">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent rhoncus molestie dui...</p>
                    <div id="box">
                        <h2><img src="images/last.gif" alt="ad" /> Advertise Your Site Here</h2>
                        <blockquote>
                            This template has been tested in Mozilla and IE7 and validates as HTML 4.01 Strict using valid CSS...
                        </blockquote>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat...</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent rhoncus molestie dui...</p>
                    <p>Praesent enim nulla, lacinia vel, accumsan ut, facilisis eget, ligula...</p>
                </div>
                <div id="content_right">
                    <dl className="curved">
                        <dt>RECOMMENDED LINKS</dt>
                        <dd>
                            <ul id="navlist">
                                <li><a href="#">Snapp Happy</a></li>
                                <li><a href="#">Open Designs</a></li>
                                <li><a href="#">Andreas Viklund</a></li>
                                <li><a href="#">James Koster</a></li>
                                <li><a href="#">CSS play</a></li>
                                <li><a href="#">Listamatic</a></li>
                            </ul>
                            <p className="last">&nbsp;</p>
                        </dd>
                    </dl>
                    <dl className="curved">
                        <dt>CURVED CORNERS<span className="small"> by Stu Nicholls</span></dt>
                        <dd>
                            <p>Ok, finally a four corner box with no extra markup...</p>
                            <p>No javascript and absolutely no hacks...</p>
                            <p className="last">Examples at <a href="http://www.cssplay.co.uk">&#0187; CSS Play</a></p>
                        </dd>
                    </dl>
                    <dl className="curved">
                        <dt>MORE INFORMATION</dt>
                        <dd>
                            <p> Nulla in urna eu tellus auctor convallis...</p>
                            <p className="last">Morbi sodales vehicula nisi. Donec id tortor...</p>
                        </dd>
                    </dl>
                </div>
            </div>
            <div id="footer">
                <p><a href="#">homepage</a> | <a href="mailto:denise@mitchinson.net">contact</a> | &copy; 2007 Anyone | Design by <a href="http://www.mitchinson.net"> www.mitchinson.net</a> | Licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a></p>
            </div>
        </div>
    );
}

export default Home;
