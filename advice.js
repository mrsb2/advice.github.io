function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
async function advice(){
    let ran=getRandomInt(100);
    console.log(ran);
    const res = await fetch(" 	https://api.adviceslip.com/advice/"+ran);
    const data = await res.json();
    document.getElementById('adviceMSG').innerHTML='"' + data.slip.advice + '"';
    document.getElementById('adviceID').innerHTML="A D V I S E # " +data.slip.id;
    
}