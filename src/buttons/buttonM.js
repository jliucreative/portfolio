import React from 'react';
import jsonData from "../data/data.json";

class NewMobComponent extends React.Component{

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
      document.getElementById("pCode").href= jsonData[numb].code;
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
      <img id="pImg"src="https://via.placeholder.com/150" alt="test"></img>
      <p id="pDesc">lorem ipsumasodifjsj</p>
      <p><a id="pCode" href="" target="_blank">code</a></p>
      </div>

        <div id="mobileProjects">
        <ul>
          <li><button onClick={() => this.displayProject(6)}>Wonderlist</button></li>
          <li><button onClick={() => this.displayProject(7)}>Cheaper</button></li>
          <li><button onClick={() => this.displayProject(8)}>Convert</button></li>
        </ul>
        </div>
      </div>
    );
  }
};

class ButtonM extends React.Component {
  render() {
    return (
      <button id="mSelected"{...this.props}>
        mobile
      </button>
    );
  }
}

export {ButtonM, NewMobComponent};
