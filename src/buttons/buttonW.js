import React from 'react';
import jsonData from "../data/data.json";
// import adeptist from '../../src/img/adeptist.png';

class NewWebComponent extends React.Component{
  constructor (){
    super();
    this.displayProject = this.displayProject.bind(this);
  }

  displayProject(numb){
    document.getElementById("project").style.display = "block";
    document.getElementById("pTitle").innerHTML= jsonData[numb].title;
    document.getElementById("pDesc").innerHTML= jsonData[numb].desc;
    document.getElementById("pImg").src= jsonData[numb].img;
    document.getElementById("pTools").innerHTML=jsonData[numb].tools;
    document.getElementById("pLink").href= jsonData[numb].link;
  }

    hideProject(){
      document.getElementById("project").style.display = "none";
    }


  render() {
    return (
      <div className="projects"{...this.props}>
      <div id="project">
      <button onClick={this.hideProject}>X</button>
      <span><h2 id="pTitle">""</h2><h4 id="pTools">tools:</h4></span>
      <img id="pImg" src={jsonData[2].img} alt="test"></img>
      <p id="pDesc">project description loading...</p>
      <p><a id="pLink" href="" target="_blank">link</a></p>
      </div>

      <ul>
        <li><button onClick={() => this.displayProject(0)}>Jliu Creative</button></li>
        <li><button onClick={() => this.displayProject(1)}>Nori Maki Bar</button></li>
        <li><button onClick={() => this.displayProject(2)}>The Adeptist</button></li>
        <li><button onClick={() => this.displayProject(3)}>White Space</button></li>
        <li><button onClick={() => this.displayProject(9)}> FWD Class Portal</button></li>
      </ul>
      </div>
    );
  }
};


class ButtonW extends React.Component {

  render() {
    const line = {
      textDecoration: 'line-through',
      textDecorationColor: 'maroon'};
    return (
      <button id="wSelected"{...this.props} style={line}>
        web
      </button>
    );
  }
}

export {ButtonW, NewWebComponent};
