A jQuery plugin for browser detection. jQuery v1.9.1 dropped support for browser detection, and this project aims to keep the detection up-to-date.

Detect IPv6 by CloudFlare

Detect IPv4 by DB-IP

## Usage

Alternatively, you can use the plugin without jQuery by using the global object `jQBrowser` instead of `$.browser`.

Returns true if the current useragent is some version of Microsoft's Internet Explorer. Supports all IE versions including IE 11.

    $.browser.msie;

Returns true if the current useragent is some version of a WebKit browser (Safari, Chrome and Opera 15+)

    $.browser.webkit;

Returns true if the current useragent is some version of Firefox

    $.browser.mozilla;

Reading the browser version

    $.browser.version

You can also examine arbitrary useragents

    jQBrowser.uaMatch();

## Things not included in the original jQuery $.browser implementation

- Detect specifically Windows, Mac, Linux, iPad, iPhone, iPod, Android, Kindle, BlackBerry, Chrome OS, and Windows Phone useragents

```javascript
	$.browser.android
	$.browser.blackberry
	$.browser.cros
	$.browser.ipad
	$.browser.iphone
	$.browser.ipod
	$.browser.kindle
	$.browser.linux
	$.browser.mac
	$.browser.msedge
	$.browser.playbook
	$.browser.silk
	$.browser.win
	$.browser["windows phone"]
```

Alternatively, you can detect for generic classifications such as desktop or mobile

```javascript
	$.browser.desktop
	$.browser.mobile
```

```javascript
	// User Agent for Firefox on Windows
	User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0
	
	$.browser.desktop // Returns true as a boolean
```

```javascript
	// User Agent for Safari on iPhone
	User-Agent: Mozilla/5.0(iPhone; CPU iPhone OS 7_0_3 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B508 Safari/9537.53
	
	$.browser.mobile // Returns true as a boolean
```

- Detect the browser's major version

```javascript
	// User Agent for Chrome
	// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36
	
	$.browser.versionNumber // Returns 32 as a number
```

- Support for new useragent on IE 11
- Support for Microsoft Edge
- Support for WebKit based Opera browsers
- Added testing using PhantomJS and different browser user agents
