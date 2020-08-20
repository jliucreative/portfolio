import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*----------------------------------------------------------------------------*/
//Square:props from board
function Square(props){
  return(
    <button className="square" onClick=
     {props.onClick}>
     {props.value}
     </button>
  );
}
/*----------------------------------------------------------------------------*/
//you can click the same star twice and it will count it as hte
class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
		  squares: Array(100).fill(null),
      isBlue: true,
      orangeCount: 0,
      blueCount: 0,
      stars: Array(10).fill(null),//holds the array or hidden star nums
    };
    //square is an Array
    //isBlue is true or false, starts with blue
    //orangeCount is how many stars orange has
    //blueCount is how many stars blue has

    this.handleClick= this.handleClick.bind(this);
    this.renderSquare=this.renderSquare.bind(this);
    this.randomStar=this.randomStar.bind(this);
    this.createTable=this.createTable.bind(this);
    this.hideStars=this.hideStars.bind(this);
    this.calculateWinner=this.calculateWinner.bind(this);
    this.endofGame=this.endofGame.bind(this);
  }//CONSTRUCTOR END
  
  //when a user clicks on the square
  //updates what the status is (how many stars, if they won, if they found a star)
  handleClick(i){
    const squares = this.state.squares.slice();
    if(squares[i] != null){
    	return;
    }
  var rowNum =0;
  // find row number
  if(i <=10){
    rowNum= 1;
  }else if(i>10 && i<=20){
    rowNum=2;
  }else if(i>20 && i<=30){
    rowNum=3;
  }else if(i>30 && i<=40){
    rowNum=4;
  }else if(i>40 && i<=50){
    rowNum=5;
  }else if(i>50 && i<=60){
    rowNum=6;
  }else if(i>60 && i<=70){
    rowNum=7;
  }else if(i>70 && i<=80){
    rowNum=8;
  }else if(i>80 && i<=90){
    rowNum=9;
  }else{ // i>90
    rowNum = 10;
  }

console.log("row num " + rowNum);
  //check stars of rowNum
  if(i === this.state.stars[rowNum]){
    var bluedot= <span className='blue'>✶</span>; //coloring = "blue";
    var orangedot = <span className='orange'>✶</span>;
    var temp=1;
    var temp2 =1;
    if(this.state.isBlue === true){
      temp= this.state.blueCount;
      temp++;
      this.setState({blueCount: temp});
      squares[i]= bluedot;
    }
    // is orange
    else{
      temp2= this.state.orangeCount;
      temp2++;
      this.setState({orangeCount: temp2});
      squares[i]= orangedot;
    }
    //squares[i]= bluedot;
  }
  else{
    if(i> this.state.stars[rowNum]){
      squares[i]="⇠";
    }else{
      squares[i]="⇢"
    }
  }
    this.setState({
      squares: squares,
      isBlue : !this.state.isBlue,
    });
    //console.log(this.state.isBlue);
  }

  renderSquare(i) {
    return (
      <Square
      value={this.state.squares[i]}
      onClick={()=> this.handleClick(i)}
      />
    );
  }

  createTable(){
  //generates grid
    let table =[];
      for(let i=1;i <101; i++){
        table.push(<div key ={i} className="box">{this.renderSquare(i)}</div>)
	   	}
	   return(table);
	}

	randomStar(min,max){
    	var starLocation = Math.floor(Math.random()*(max-min)+min); //star location in the row calling it (in createTable)
    	//return num to hidestar
    	return starLocation;

  }

  hideStars(){
		var starSpots=[10]; // array of 10 to hold each hidden num
      	//make 100 squares, make grid in css
	    for(var j=1; j<=10;j++){ // step through star spots array

        	var i= (j*10)-9
        	starSpots[j]=this.randomStar(i,(i+10));//max num not included in random num generation


        const squaresCopy = this.state.squares.slice();
    	this.setState({squares:squaresCopy});
    	console.log("Row "+ j +": "+ starSpots[j]);
    	}
    	this.setState({stars:starSpots});
	}

	componentDidMount(){
	this.hideStars();
	}

  calculateWinner(){
    const bluewinner = <span className="blue">Blue Wins!</span>;
    const orangewinner = <span className="orange">Orange Wins!</span>;
    const tie = <span className="black">Its a Tie!</span>;
    if(this.state.orangeCount > this.state.blueCount){// change color in css to winner color
      return orangewinner;
    }
    else if(this.state.orangeCount < this.state.blueCount){
      return bluewinner;
    }
    else{
      return tie;
    }
  }

  //endofGame function to check the scores and return who won
  endofGame(){
    var done = false;
    var starCount = this.state.orangeCount + this.state.blueCount;
    if(starCount === 10){
      done = true;
    }
    return done;
  }

  render(){
    let status;
    var turn;
    let colored;

    console.log("Blue: " + this.state.isBlue);
    if(this.state.isBlue === true){
      turn =  "✶";
      colored='#42b0f4';
    }
    else{
      turn = "✶";
      colored= 'orange';
    }

    var endGame = this.endofGame();
    if(endGame === true){// if the game is over, declare a winner
      const winner= this.calculateWinner(this.state.orangeCount, this.state.blueCount);
      status = winner;
    }
    else{
      status = "TURN: " + turn;
    }

    let score1;
    let score2;
    score1 = "✶:" + this.state.blueCount;
    score2 = "✶:" + this.state.orangeCount;

    return(
	    <div>
        <h1>STAR HUNTER</h1>
        <h2>HOW TO PLAY</h2>
        <p>Compete with other player to find the most stars. There is one in each row, everytime you click, theres a hint!</p>
        <div>
        <h2 className="status" style={{color: colored}}>{status}</h2>
        <a className="button" href="index.html">RESTART</a>

          <div className= "scoreBoard">
            <h2 className="bluescore">{score1}</h2>
            <h2 className="orangescore">{score2}</h2>
          </div>
        </div>
        <div className='gridBox'>
        <div className="grid"> {this.createTable()} </div></div>
		</div>
    );
  }
}

/*----------------------------------------------------------------------------*/
ReactDOM.render(
  <Board/>,
  document.getElementById('root')
);
