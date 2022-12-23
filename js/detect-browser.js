console.log(jQBrowser);

var result = document.querySelector("#result");
for(var key in jQBrowser) {
  result.innerHTML += key + ": " + jQBrowser[key] + "<br/>";
}
