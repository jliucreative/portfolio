import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import logo from '../src/img/jliuLogo.png';
import email from '../src/img/email.png';
import linkedin from '../src/img/linkedIn.png';
import {ButtonW, NewWebComponent} from './buttons/buttonW.js'
import {ButtonG, NewGComponent} from './buttons/buttonG.js'
import {ButtonM, NewMobComponent} from './buttons/buttonM.js'
import './css/main.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component{

  constructor(props){
    super(props)
    this.scrollRef = React.createRef()
    this.arrow1Ref = React.createRef()
    this.state ={
      showW: true,
      showM: false,
      showG: false,
    };

    this.handleClickW= this.handleClickW.bind(this);
    this.handleClickG= this.handleClickG.bind(this);
    this.handleClickM= this.handleClickM.bind(this);
  }

  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll);
    console.log("mounted");
  };

  copyMessage(){
    console.log("boop");
    document.getElementById("toast").style.display = "block";
    setTimeout(function(){ document.getElementById("toast").style.display = "none"}, 1000);
  }

  handleClickW(){
    console.log("SHOWINGW");
    this.setState({
      showW:true,
      showG:false,
      showM:false,
    })
      new NewWebComponent()
      document.getElementById("wSelected").style.textDecoration = "line-through";
      document.getElementById("wSelected").style.textDecorationColor = "maroon";
      document.getElementById("mSelected").style.textDecoration = "none";
      document.getElementById("gSelected").style.textDecoration = "none";
  }

  handleClickM(){
    console.log("SHOWINGM");
    this.setState({
      showM:true,
      showW:false,
      showG:false
    })
    new NewMobComponent()
    document.getElementById("mSelected").style.textDecoration = "line-through";
    document.getElementById("mSelected").style.textDecorationColor = "maroon";
    document.getElementById("gSelected").style.textDecoration = "none";
    document.getElementById("wSelected").style.textDecoration = "none";
  }

  handleClickG(){
    this.setState({
      showG:true,
      showW:false,
      showM: false
    })
    console.log("SHOWINGG");
    document.getElementById("gSelected").style.textDecoration = "line-through";
    document.getElementById("gSelected").style.textDecorationColor = "maroon";
    document.getElementById("mSelected").style.textDecoration = "none";
    document.getElementById("wSelected").style.textDecoration = "none";
  }

  handleScroll = () => {
    if (window.scrollY < 100){
      document.getElementById("scroll1").style.display = "block";
      document.getElementById("scroll2").style.display = "none";
      document.getElementById("wButton").style.textDecoration = "none";
    }
    if (window.scrollY > 100 && window.scrollY < 400){
      document.getElementById("scroll1").style.display = "none";
      document.getElementById("scroll2").style.display = "block";
      document.getElementById("wButton").style.textDecoration = "line-through";
      document.getElementById("wButton").style.textDecorationColor = "maroon";
    }
    if(window.scrollY > 400){
      document.getElementById("scroll1").style.display = "none";
      document.getElementById("scroll2").style.display = "none";
      document.getElementById("scroll3").style.display = "block";
      document.getElementById("wButton").style.textDecoration = "none";
      document.getElementById("rButton").style.textDecoration = "line-through";
      document.getElementById("rButton").style.textDecorationColor = "maroon";
    }
    else {
      document.getElementById("scroll3").style.display = "none";
      document.getElementById("rButton").style.textDecoration = "none";
    }
  }

  display1(){
    document.getElementById("expand1").style.display="block";
    document.getElementById("expand2").style.display="none";
    document.getElementById("expand3").style.display="none";
    document.getElementById("button1").style.textDecoration = "line-through";
    document.getElementById("button1").style.textDecorationColor = "maroon";
    document.getElementById("button2").style.textDecoration = "none";
    document.getElementById("button3").style.textDecoration = "none";
  }

  display2(){
    document.getElementById("expand2").style.display="block";
    document.getElementById("expand1").style.display="none";
    document.getElementById("expand3").style.display="none";
    document.getElementById("button2").style.textDecoration = "line-through";
    document.getElementById("button2").style.textDecorationColor = "maroon";
    document.getElementById("button1").style.textDecoration = "none";
    document.getElementById("button3").style.textDecoration = "none";
  }

  display3(){
    document.getElementById("expand3").style.display="block";
    document.getElementById("expand2").style.display="none";
    document.getElementById("expand1").style.display="none";
    document.getElementById("button3").style.textDecoration = "line-through";
    document.getElementById("button3").style.textDecorationColor = "maroon";
    document.getElementById("button2").style.textDecoration = "none";
    document.getElementById("button1").style.textDecoration = "none";
  }

  componentWillUnmount(){
    document.removeEventListener('scroll', this.handleScroll);
    console.log("unmounted");
    };

  render(){
    const {a={}

    } = this.state
    return (
      <div className="App" ref={this.scrollRef}>
        <header className="App-header">

        <div id="test"></div>
        <hr id="lineL"/>
        <hr id="line"/>
        <hr id="lineR"/>
        </header>

        <nav>
          <ul>
                <li><a id="hButton" href="#top"><img src={logo} alt="jliu logo"/></a></li>
                <li><a id="wButton" href="#works">works</a></li>
                <li><a id="rButton" href="#resume">resume</a></li>
              </ul>

              <ul>
                <li id="toast">copied</li>
                <li id="Email-button"><CopyToClipboard text="jliucreativeco@gmail.com"><button id="Email-button" onClick={this.copyMessage}><img src={email} alt="copy jliu email"/></button></CopyToClipboard></li>
                <li id="LI-button"><a href="https://www.linkedin.com/in/7joanneliu/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="joanne liu's linked in"/></a></li>
              </ul>
        </nav>

        <div id="scroll1">
        <h1>joanne liu</h1>

        <ul>
          <li>Frontend Development</li>
          <li>Mobile Development</li>
          <li>UI/UX Development</li>
          <li>Graphic Design</li>
        </ul>

        <a href="#works"><button id="arrow1">
          <hr className="arrowL"/>
          <hr className="arrow"/>
          <hr className="arrowR"/>
          </button></a>
        </div>

        <div id="scroll2">
          <h1>works.</h1>
          <ul>
          <li><ButtonW onClick={this.handleClickW}/>{this.state.showW ? <NewWebComponent/> : null}</li>
          <li><ButtonG onClick={this.handleClickG}/>{this.state.showG ? <NewGComponent/> : null}</li>
          <li><ButtonM onClick={this.handleClickM}/>{this.state.showM ? <NewMobComponent/> : null}</li>
          </ul>

          <a href="#resume"><button id="arrow2">
            <hr className="arrowL"/>
            <hr className="arrow"/>
            <hr className="arrowR"/>
            </button></a>
        </div>

        <div id="scroll3">
          <h1>resume.</h1>
          <a id="rdown" href="https://github.com/jliucreative/portfolio/blob/source/public/pdf/joanneliuResume.pdf" target="_blank">download</a>

          <div id="rText">
          <button id="button1" onClick={() => this.display1()}>EDUCATION</button>
          <div id="expand1" className="bottom">
          <h3>University of Colorado Boulder | 2019</h3>
          <h4>Bachelors |  Computer Science + Studio Arts</h4>
          <h4>Minor | Technology Arts in the Media</h4>
          </div>

          <button id= "button2" onClick={() => this.display2()}> EXPERIENCE</button>
          <div id="expand2" className="bottom">
          <h3>Brand Identity Developer</h3>
          <h4>Freelance | June 2019 - Current</h4>
          <ul>
          <li>Rebranded products, website, brand identity, and brand image for The Adeptist resulting in a contract with Urban Outfiters. </li>
          <li>Implemented and built cohesive branding across custom website, menus, gift certificate, and storefront signs for Nori Maki Bar.</li>
          <li>Designed, developed, and deployed a website with unified digital and print graphics for White Space.</li>
          <li>Collaborate with clients to compose any web and print content with brand coherance.</li></ul>

          <h3>Graphic Designer</h3>
          <h4>ALTEC (CU Boulder) | April 2018 - May 2019</h4>
          <ul>
          <li>Invented new cohesive ALTEC Brand Identity.</li>
          <li>Designed for emails, prints, social media, and web marketing.</li>
          <li>Worked closely with supervisors and director to convey important information with design and practicality.</li></ul>

          <h3>Graphic Design Intern</h3>
          <h4>Shanao Cacao Collective | Feb 2018 - Aug 2018</h4>
          <ul>
          <li>Designed pitch-deck and product packaging.</li>
          <li>Collaborated with founders to create a plan for success.</li>
          <li>Researched Marketing tactics to be applied to all distributions.</li></ul>

          <h3 className="hide">Student Ambassador</h3>
          <h4 className="hide">JILA (CU Boulder) | July 2016 – Aug 2018</h4>
          <ul className="hide">
          <li>Executed, designed, and produced JILA Calendar, posters, invitations, and all print materials while maintaining weekly JILA Times newsletter and website.</li>
          <li>Organized and oriented 25+ new employees each semester along with welcoming and hosting international visiting fellows.</li>
          <li>Daily responsibilities of administering events, bookkeeping, inventory, maintenance, and planning along with facilitating interdepartmental communications throughout the campus.</li></ul>
          </div>

          <button id="button3" onClick={() => this.display3()}>EXPERTISE</button>
          <div id="expand3" className="bottom">
          <h3>frontend</h3>
          <ul><li>HTML5 + CSS</li>
          <li>Vanila JS + JQuery</li>
          <li>SASS + Bootstrap</li>
          <li>React js + Vue js</li>
          </ul>

          <h3>graphic</h3>
          <ul><li>Adobe Illustrator + Indesign</li>
          <li>Adobe Photoshop + Lightroom</li>
          <li>Procreate</li>
          </ul>

          <h3>backend</h3>
          <ul><li>Java</li>
          <li>Swift</li>
          <li>Python</li>
          <li>Version Control</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>C++</li>
          <li>C</li>
          </ul>
          </div>{/*expand3*/}
          </div>{/*expertise*/}

          <a href="#top"><button id="arrow3">
            <hr className="arrowL" id="topLeft"/>
            <hr className="arrow"/>
            <hr className="arrowR" id="topRight"/>
            </button></a>
        </div>

        <span id="top"></span>
        <span id="works"></span>
        <span id="resume"></span>

      </div> //App end
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
