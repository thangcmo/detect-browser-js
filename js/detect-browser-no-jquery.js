//console.log(jQBrowser);
// same
//console.log(jQBrowser.uaMatch())

var browser = document.querySelector("#browser");
for(var key in jQBrowser) {
  if (key != 'uaMatch') {
    browser.innerHTML += "<strong>" + key + "</strong>: " + jQBrowser[key] + "<br/>";
  }
}

//----------------------
fetch('https://ipinfo.io/json')
.then(response => response.json())
.then(data => {
  console.log(`IP: ${data.ip}`);
  console.log(`City: ${data.city}`);
  console.log(`Region: ${data.region}`);
  console.log(`Country: ${data.country}`);
  console.log(`Location: ${data.loc}`);
  console.log(`Org: ${data.org}`);
  console.log(`Timezone: ${data.timezone}`);
})
.catch(error => {
  console.error('Error fetching country info:', error);
});

//----------------------
fetch('https://api.db-ip.com/v2/free/self')
.then(response => response.json())
.then(data => {
  //console.log(JSON.stringify(data, null, 2));
  var ipv4 = document.querySelector("#ipv4");
  for(var key in data) {
    ipv4.innerHTML += "<strong>" + key + "</strong>: " + data[key] + "<br/>";
  }
})
.catch(error => {
  console.error('Error fetching country info:', error);
});

//----------------------
fetch('https://www.cloudflare.com/cdn-cgi/trace')
.then(data => {
  // Convert key-value pairs to JSON
  // https://stackoverflow.com/a/39284735/452587
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  //console.log(data);
  var ipv6 = document.querySelector("#ipv6");
  for(var key in data) {
    ipv6.innerHTML += "<strong>" + key + "</strong>: " + data[key] + "<br/>";
  }
})
.catch(error => {
  console.error('Error fetching country info:', error);
});