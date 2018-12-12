const Game = () => {
  }

  Game.prototype.winAcross= function () {
    const div1 = document.getElementById(0);
    const div2 = document.getElementById(1);
    const div3 = document.getElementById(2);
    const div4 = document.getElementById(3);
    const div5 = document.getElementById(4);
    const div6 = document.getElementById(5);
    const div7 = document.getElementById(6);
    const div8 = document.getElementById(7);
    const div9 = document.getElementById(8);

    if(div1.className === "clicked" && div2.className === "clicked" && div3.className === "clicked" ){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div4.className === "clicked" && div5.className === "clicked" && div6.className === "clicked" ){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div7.className === "clicked" && div8.className === "clicked" && div9.className === "clicked" ){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div1.className === "clicked1" && div2.className === "clicked1" && div3.className === "clicked1" ){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
    if(div4.className === "clicked1" && div5.className === "clicked1" && div6.className === "clicked1" ){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
    if(div7.className === "clicked1" && div8.className === "clicked1" && div9.className === "clicked1" ){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
  }

  Game.prototype.winDown= function () {
    const div1 = document.getElementById(0);
    const div2 = document.getElementById(1);
    const div3 = document.getElementById(2);
    const div4 = document.getElementById(3);
    const div5 = document.getElementById(4);
    const div6 = document.getElementById(5);
    const div7 = document.getElementById(6);
    const div8 = document.getElementById(7);
    const div9 = document.getElementById(8);

    if(div1.className === "clicked" && div4.className === "clicked" && div7.className === "clicked"){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div2.className === "clicked" && div5.className === "clicked" && div8.className === "clicked"){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div3.className === "clicked" && div6.className === "clicked" && div9.className === "clicked"){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div1.className === "clicked1" && div4.className === "clicked1" && div7.className === "clicked1"){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
    if(div2.className === "clicked1" && div5.className === "clicked1" && div8.className === "clicked1"){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
    if(div3.className === "clicked1" && div6.className === "clicked1" && div9.className === "clicked1"){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
  }

  Game.prototype.winDiagonal= function () {
    const div1 = document.getElementById(0);
    const div3 = document.getElementById(2);
    const div5 = document.getElementById(4);
    const div7 = document.getElementById(6);
    const div9 = document.getElementById(8);

    if(div1.className === "clicked" && div5.className === "clicked" && div9.className === "clicked"){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div3.className === "clicked" && div7.className === "clicked" && div5.className === "clicked"){
      setTimeout(function(){ alert("Player 1 wins"); }, 200)
    }
    if(div1.className === "clicked1" && div5.className === "clicked1" && div9.className === "clicked1"){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
    if(div3.className === "clicked1" && div7.className === "clicked1" && div5.className === "clicked1"){
      setTimeout(function(){ alert("Player 2 wins"); }, 200)
    }
}

export default Game
