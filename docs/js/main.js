function fullScreen(){
  document.documentElement.requestFullscreen();
}
function include(a,b){
	document.getElementById(b).src=a;
}
function speak(a) {
  let x = new webkitSpeechRecognition();
  x.lang = 'zh-CN'; 
  x.interimResult = false; 

  x.start();

  x.onresult = function(ccy) {
    let xu= ccy.results[0][0].transcript; 
    document.getElementById(a).value = xu;
  };
}
function said(a,b){
	let c=new SpeechSynthesisUtterance();
	c.lang=a;
	c.text=b;
	speechSynthesis.speak(c);
}
