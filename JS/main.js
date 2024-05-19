

function addText() {
    var userText=["Resentment is like drinking poison and waiting for your enemies to die.","You miss 100% of the shots you don't take.","It's not what happens to you, but how you react to it that matters.","Do not take life too seriously. You will not get out alive."];
    var authorText=["--Elbert Hubbard","--Frank Sinatra","--Elbert Hubbard","--Epictetus"];
    var num= Math.floor(Math.random()*userText.length);
    // console.log(userText[num]);
    // console.log(authorText[num]);
    document.getElementById("changeText").innerHTML=userText[num]
    document.getElementById("changeAuthor").innerHTML=authorText[num]
  }