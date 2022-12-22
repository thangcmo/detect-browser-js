function getBrowserName() {
	let userAgent = navigator.userAgent;
  let browserName;

	if(userAgent.match(/chrome|chromium|crios/i) && !!window.chrome){
  	browserName = "Chrome";
  }else if(userAgent.match(/edg/i)){
  	browserName = "Edge";
  }else if(userAgent.match(/trident/i)){
  	browserName = "IE";
  }else if(userAgent.match(/firefox|fxios/i)){
  	browserName = "Firefox";
  }else if(userAgent.match(/safari/i)){
  	browserName = "Safari";
  }else if(userAgent.match(/opr\//i) && !!window.opr){
    browserName = "Opera";
  }else{
    browserName="Unknown browser";
  }
  return browserName;
}

// test
document.body.innerHTML = getBrowserName();
