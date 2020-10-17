import React from 'react';
import jsonData from "../data/data.json";

class NewGComponent extends React.Component{

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
      document.getElementById("pLink").style.display="inline";
      document.getElementById("pLink").href= jsonData[numb].link;
    }

    displayProjectGraphic(numb){
      document.getElementById("project").style.display = "block";
      document.getElementById("pTitle").innerHTML= jsonData[numb].title;
      document.getElementById("pDesc").innerHTML= jsonData[numb].desc;
      document.getElementById("pImg").src= jsonData[numb].img;
      document.getElementById("pTools").innerHTML=jsonData[numb].tools;
      document.getElementById("pLink").style.display="none";
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
      <img id="pImg" src="https://via.placeholder.com/150" alt="test"></img>
      <p id="pDesc">lorem ipsumasodifjsj</p>
      <p><a id="pLink" href="" target="_blank">link</a></p>
      </div>

        <div id="graphicProjects">
        <ul>
          <li><button onClick={() => this.displayProject(2)}>The Adeptist</button></li>
          <li><button onClick={() => this.displayProject(1)}>Nori Maki Bar</button></li>
          <li><button onClick={() => this.displayProject(4)}>ALTEC</button></li>
          <li><button onClick={() => this.displayProject(3)}>White Space</button></li>
          <li><button onClick={() => this.displayProjectGraphic(5)}>Shanao Cacao</button></li>
        </ul>
        </div>
      </div>
    );
  }
};

class ButtonG extends React.Component {
  render() {
    return (
      <button id="gSelected" {...this.props}>
        brand dev
      </button>
    );
  }
}

export {ButtonG, NewGComponent};
