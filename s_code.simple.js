var util = window.util || {},
w_wtT = window.w_wtT || {};//test environment variables
util.pathConcatDelim = ':';
util.queryVarsList= '';
util.pathExcludeList=''; // elements to exclude from the path - index.html? default.aspx for info?
util.pathExcludeDelim = ';'; // portion of the path to exclude - was ;
util.siteID= '';  //s.siteID set in doPlugins to allow changing to 'app' based on visitorID cookie from apps
util.version = 'U0.01';
util.codeVers = 'V 1.9.0'+':'+ 'AppM 1.7.0'+':'+"AMap:"+ util.version
util.location = window.location
util.addHandler = function (element, event, handler) {
	if (element.addEventListener) {
		element.addEventListener(event, handler, false);
	} else {
		if (element.attachEvent) {
			element.attachEvent('on' + event, handler);
		}
	}
}
util.onReady = function (func) {
	if (/complete/.test(document.readyState)) { // fire/attach immediately in case window load has already occured
			func();
		} else {
			util.addHandler(win, 'load', function () { // fire/attach when window loads. include a timeout to prevent Chrome/Safari spinner immediately after load
			setTimeout(func, 4); // should be 4
		});
	}
}
util.cookieRead = function (sKey) {
	return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || '';
}
util.cookieWrite = function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
	if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
		return false;
	}
	var sExpires = '';
	if (vEnd && vEnd.constructor === Date) {
		sExpires = '; expires=' + vEnd.toUTCString();
	}
	document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
	return true;
}
util.scriptElement = function (id) {
	var existing = document.getElementById(id),
	scripts = document.getElementsByTagName('script')[0],
	//sibling = scripts[scripts.length - 1],
	element;
	
	if (existing) {
		return existing;
	}
	
	element = document.createElement('script');
	element.id = id;
	//element.type = 'text/javascript';
	element.async = 1;
	//element.defer = true;
	
	//sibling.parentNode.insertBefore(element, sibling.nextSibling);
	scripts.parentNode.insertBefore(element, scripts);
	
	return element;
}
util.cloneObject=function (oToBeCloned, clones) {
	var oClone,
	Constr = oToBeCloned && oToBeCloned.constructor ? oToBeCloned.constructor : undefined,
	lp,
	len,
	cloneRef,
	alreadyCloned,
	prpty;
	
	if (!oToBeCloned || (Constr !== RegExp && Constr !== Date && Constr !== Function && Constr !== Object && Constr !== Array)) {
		return oToBeCloned;
	}
	
	switch (Constr) {
		// handle special object types
	case RegExp:
		oClone = new Constr(oToBeCloned.source, 'g'.substr(0, Number(oToBeCloned.global)) + 'i'.substr(0, Number(oToBeCloned.ignoreCase)) + 'm'.substr(0, Number(oToBeCloned.multiline)));
		break;
	case Date:
		oClone = new Constr(oToBeCloned.getTime());
		break;
	case Function:
		oClone = oToBeCloned;
		break;
	default:
		// should only be plain objects and arrays that need looping
		oClone = new Constr();
	}
	
	clones = clones || [];
	for (lp = 0, len = clones.length; lp < len; lp++) {
		cloneRef = clones[lp];
		if (cloneRef[0] === oToBeCloned) {
			alreadyCloned = cloneRef[1];
			break;
		}
	}
	if (alreadyCloned) {
		return alreadyCloned;
	}
	clones.push([oToBeCloned, oClone]); // keep track of objects we've cloned
	for (prpty in oToBeCloned) {
		if (oToBeCloned.hasOwnProperty(prpty)) {
			if (oToBeCloned[prpty] === oToBeCloned) {
				oClone[prpty] = oClone;
			} else {
				oClone[prpty] = util.cloneObject(oToBeCloned[prpty], clones);
			}
		}
	}
	return oClone;
}
util.qSA = function (doc, selector, tag, attr, regex) {
	var lp,
	len,
	result = [],
	target,
	tempAttr;
	
	if (doc && doc.querySelectorAll) {
		result = doc.querySelectorAll(selector);
	} else {
		target = doc && doc.getElementsByTagName(tag);
		if (attr && regex) {
			for (lp = 0, len = target.length; lp < len; lp++) {
				tempAttr = (attr === 'class' ? target[lp].className : target[lp].getAttribute(attr));
				if (tempAttr && regex.test(tempAttr)) {
					result.push(target[lp]);
				}
			}
		} else if (regex) {
			for (lp = 0, len = target.length; lp < len; lp++) {
				if (regex.test(target[lp].innerHTML)) {
					result.push(target[lp]);
				}
			}
		} else {
			return target || 0;
		}
	}
	return result;
}
util.getText = function (elem) {
	var elemText;
	if (elem) {
		elemText = elem.innerText || elem.textContent;
	} else {
		elemText = '';
	}
	return elemText.replace(/^\s+|\s+$/g, ''); // trim
},
util.removeNumbers = function (str) {
	return str.replace(/\s+\(\s*\d+\s*\)$/g, ''); // remove numbers and trim
}
util.addCallback = function (scriptEl, readyCheck, callback) {
	var thisFunction = helpers.addCallback;
	thisFunction.q = thisFunction.q || [];
	
	if (scriptEl.readyState) {
		thisFunction.q.push(callback); // ability to add multiple callbacks in IE
		
		scriptEl.onreadystatechange = function () {
			var callbackItem;
			
			//console.log('readyState = ' + scriptEl.readyState);
			//console.log('s = ' + win.s);
			//console.log('readyCheck IE = ' + readyCheck());
			
			if (/loaded|complete/.test(scriptEl.readyState) && readyCheck()) { // readyCheck to verify that all scripts required are actually ready (mainly to confirm IE readystate)
				scriptEl.onreadystatechange = null;
				while (thisFunction.q.length) {
					callbackItem = thisFunction.q.shift();
					callbackItem();
				}
			}
		};
	} else {
		//console.log('readyCheck non-IE = ' + readyCheck());
		helpers.addHandler(scriptEl, 'load', function () {
			if (readyCheck()) { // in case the file loaded is not actually s_code
				callback();
			}
		});
	}
}
util.guidRgx = /\b\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\b/g;
util.cleanJSON = function (JSONdata) {
	JSONdata = JSONdata.replace(/\\n/g, "\\n")  
				   .replace(/\\'/g, "\\'")
				   .replace(/\\"/g, '\\"')
				   .replace(/\\&/g, "\\&")
				   .replace(/\\r/g, "\\r")
				   .replace(/\\t/g, "\\t")
				   .replace(/\\b/g, "\\b")
				   .replace(/\\f/g, "\\f");
	// remove non-printable and other non-valid JSON chars
	JSONdata = JSONdata.replace(/[\u0000-\u0019]+/g,""); 
	return JSONdata = JSON.parse(JSONdata);
}

util.cleanURL = function (loc, locType) {
	var cleanedUrl = (loc || '')
	.replace(/(\w)\/\/+/g, '$1/') // replace multiple slashes after a word char. with single slash (except for ://) for clean pageName (from location)
	.replace(/((?:&|\?)referrer=.*?(?=&|$))/ig, '') // always remove referrer querystring parameter - it was generated for unica
	.replace(/(^https?:.+?(?:online|banking).+\/cust\/wps\/(my)?portal\/[pw]ol\/)!ut\/.*/i, '$1oregon-application') // Oregon - portal/pol|wol. remove session ID in path
	//.replace(/(^https?:.+?(www.)?forms.+\.nsf)(?:.*\w{32}.*)/i,'$1$2'); // Remove session ID only from Domino path $1 adds www. ???
	.replace(/(^https?:.+?(forms|online)(?:\.|-).*\.nsf.*?)(?:\/\w{32}(?=\?))/i, '$1') // Remove session ID only from Domino path $1 adds www. ???
	.replace(util.guidRgx, '') // remove OTP user GUID
	.replace(/#+!*$/, '') // remove hash or hashbang (or multiples of these characters) at end of loc (only) to unify URLs that would otherwise match
;

	if (locType === 1) {
		// locType 1 is page location
		// Keep querystring if it contains cid parameter for paid search detection
		// remove complete querystring for privacy/security/uniqueness/shorter request if not on Domino/oregon? form (handled separately)
		//cleanedUrl = cleanedUrl.replace(/\?(?!(?:openform|readform|opendocument|funcreqd)).*/i, '');
		//cleanedUrl = cleanedUrl.replace(/\?(?!(?:cid=.+|.*&cid=.+|openform|readform|opendocument|funcreqd)).*/i, '');
		//cleanedUrl = cleanedUrl.replace(/(\?|&)(?!(?:cid=.+|openform|readform|opendocument|funcreqd)).*/i, '');
		//cleanedUrl = cleanedUrl.replace(/((\?|&)(?!(?:cid=.+|openform|readform|opendocument|funcreqd))|#).*/i, ''); // this regex doesn't work. Still replaces if CID somewhere in querystring

		// if querystring doesn't contain things we want to keep, remove it. Remove hash and append it to eVar only.
		if (!(/(\?|&)(cid=.+|openform|readform|opendocument|funcreqd)/i).test(cleanedUrl)) {
			//cleanedUrl = cleanedUrl.replace(/(\?|&).*/, '');
			cleanedUrl = cleanedUrl.replace(/(\?|&|#).*/, '');
		}
	}

	//if (locType === 2) {
	// locType 2 is referrer.

	// truncate to avoid excessive pixel length (2047 IE limit)
	// trim to 150 chars.
	//if (cleanedUrl.length > 150) {
	//	cleanedUrl = cleanedUrl.substring(0, 150) + '...';
	//}

	// extended to 400 chars. to capture longer search referrers with q=keyword
	// standard s_code trims to 255...
	//cleanedUrl = cleanedUrl.length > 400 ? cleanedUrl.substring(0, 400) + '...' : cleanedUrl;
	//}

	return cleanedUrl;
};
util.w_wtT = window.testTracking || {};
// return full current URL for test or prod
util.getLoc = function () {
	return util.w_wtT.location || window.location;
};
util.defaultPage = /^\/+$/.test(util.getLoc.pathname) ? 'home' : ''; // filename to add when none exists (www home page)
// default/initialised s.pageURL
util.pageURL = util.cleanURL(util.getLoc().href, 1);

// Use secure on https:
util.ssl = util.getLoc().protocol === 'https:';
// time parting
util.timePart = function () {
	var dateNow = new Date(),
	dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return dayNames[dateNow.getDay()] + ' ' + ('00' + dateNow.getHours()).slice(-2) + ':' + (dateNow.getMinutes() > 29 ? '30' : '00');
};

// lower case strings or (not set) if empty
util.lCase = function (val, alt) {
	var altVal = alt ? '(not set)' : '';
	return String(val || altVal).toLowerCase();
};
// clean strings - trim and remove multiple spaces for consistency
util.clean = function (str) {
	return (str ? String(str) : '').replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
};

// return 'zero' for '0' value to allow SAINT classification
util.fixZero = function (val) {
	return String(val) === '0' ? 'zero' : val;
};
// return filtered search terms and replace numbers if necessary
util.srchTerm = function (val) {
	var srchTerm = val,
	lp = 8,
	hashes = '########'; //,hashes=new Array(lp).join('#')

	if (srchTerm) {
		//srchTerm=s.w_clean(s.w_lCase(srchTerm));
		srchTerm = util.lCase(srchTerm);
		while (lp--) {
			srchTerm = srchTerm.replace(new RegExp('(\\d{4}.?)\\d{' + (lp + 1) + ',}', 'g'), '$1' + hashes.substring(0, lp + 1));
		}
	}
	//console.log(srchTerm);
	return srchTerm;
};
// cap numbers to reduce number of items for classifactions
util.cap = function (item, cap) {
	return item >= cap ? cap + '+' : item; // if item value is greater than, or equal to cap, append '+'. event50 (page load time) removes the '+', because the event value must be numeric.
};

// Helper function for standard numeric s.apl event call to reduce frequently used code
util.addEvt = function (obj,evtName){
	// allow text or numeric events to be passed
	obj['ev_'+ evtName] = 1; 
	//s2.events = s2.apl(s2.events, isNaN(evt) ? evt || '' : 'event' + evt, ',', 2);
};
util.fl = function(x,l){
return x?(''+x).substring(0,l):x
};

util.p_c = function (v, c) {
	var x = v.indexOf('=');
	return c.toLowerCase() == v.substring(0, x < 0 ? v.length : x).toLowerCase() ? v : 0;
};

util.pt=function(x,d,f,a){
	var t=x,
	z=0,
	y,
	r;
	while (t){
		y = t.indexOf(d);
		y = y < 0 ? t.length : y;
		t = t.substring(0, y);
		r = util.p_c(t, a);
		if (r)
			return r;
		z += y + d.length;
		t = x.substring(z, x.length);
		t = z < x.length ? t : ''
	}
	return '';
}

util.getPageName = function (u) {
	var v = u || String(util.getLoc),
	x = v.indexOf(':'),
	y = v.indexOf('/', x + 4),
	z = v.indexOf('?'),
	c = util.pathConcatDelim,
	e = util.pathExcludeDelim,
	g = util.queryVarsList,
	d = util.siteID,
	n = d || '',
	q = z < 0 ? '' : v.substring(z + 1),
	p = v.substring(y + 1, q ? z : v.length);
	z = p.indexOf('#');
	p = z < 0 ? p : util.fl(p, z);
	x = e ? p.indexOf(e) : -1;
	p = x < 0 ? p : util.fl(p, x);
	p += !p || p.charAt(p.length - 1) == '/' ? util.defaultPage : '';
	y = c || '/';
	while (p) {
		x = p.indexOf('/');
		x = x < 0 ? p.length : x;
		z = util.fl(p, x);
		if (!util.pt(util.pathExcludeList, ',', 'p_c', z)) {
			n += n ? y + z : z;
		}
		p = p.substring(x + 1);
	}
	y = c || '?';
	while (g) {
		x = g.indexOf(',');
		x = x < 0 ? g.length : x;
		z = util.fl(g, x);
		z = util.pt(q, '&', 'p_c', z);
		if (z) {
			n += n ? y + z : z;
			y = c || '&';
		}
		g = g.substring(x + 1);
	}
	return n;
};

/*
 * Plugin: getValOnce_v1.1
 */
util.getValOnce = function (v, c, e, t) {
	// value, cookie, time amount, time type (mins/days)
	var a = new Date(),
	vv = v || '',
	cc = c || 'u_gvo',
	ee = e || 0,
	i = t == 'm' ? 60000 : 86400000,
	k;
	k = util.cookieRead(c);
	if (vv) {
		a.setTime(a.getTime() + ee * i);
		util.cookieWrite(cc, vv, ee == 0 ? 0 : a);
	}
	return vv == k ? '' : vv;
};

util.lStor = function (action, key, data) {
	try {
		if (action === 'set') {
			if (/^reset$/i.test(data)) {
				localStorage.removeItem(key);
				//sessionStorage.removeItem(key); // zzzzz consider session storage only
			} else {
				if (typeof data !== 'string') {
					try {
						data = JSON.stringify(data);
					} catch (err) {
						//s.w_log(err);
						data = '';
					}
				}
				localStorage.setItem(key, data);
				//sessionStorage.setItem(key, data);
			}
			return true;
		}
		if (action === 'get') {
			return localStorage.getItem(key) || '';
			//return sessionStorage.getItem(key);
		}
	} catch (err) {
		//console.log(err);
		return '';
	}
};
util.valReplace = function (initialVal, replaceDetails) {
	//console.log('initialVal = ' + initialVal);
	var prpty,
	//replaceSet = s.w_lStor('get', replaceDetails) || '[]',
	replaceSet = replaceDetails || [],
	replaceSetLength,
	replaceItem,
	resultName = initialVal;

	try {
		if (typeof replaceSet === 'string') {
			replaceSet = JSON.parse(replaceSet);
		}
	} catch (err) {
		//s.w_log(err);
		replaceSet = [];
	}
	//console.log('replaceSet = ' + replaceSet);
	//console.log(replaceSet);

	replaceSetLength = replaceSet.length;

	for (prpty = 0; prpty < replaceSetLength; prpty++) {
		//replaceItem = replaceSet[prpty].split('\r');
		replaceItem = replaceSet[prpty];

		//console.log('replaceItem = ' + replaceItem);
		//console.log('replaceItem.length = ' + replaceItem.length);

		//if (replaceItem.length === 3) {
		if (replaceItem.exp) {
			//resultName = resultName.replace(new RegExp(replaceItem[0], replaceItem[1]), replaceItem[2]);
			resultName = resultName.replace(new RegExp(replaceItem.exp, replaceItem.flags || ''), replaceItem.subs || '');

			//console.log('new RegExp(replaceItem[0], replaceItem[1]) = ' + new RegExp(replaceItem[0], replaceItem[1]));
			//console.log('re = ' + new RegExp(replaceItem.exp, replaceItem.flags || '') + ', repl = ' + replaceItem.subs || '');
			//console.log('resultName = ' + resultName);
		}
	}

	//console.log('resultName = ' + resultName);
	return resultName;
};
util.getQueryParam = function (parameters, delimiter, url, startFromHash) {
	var params = parameters.split(','),
	delim = delimiter || '',
	//ABU loc = String(url === 'f' ? s2.gtfs().location : url || (s2.w_getLoc().href || (s2.pageURL || s2.wd.location))), // 'f' from original function - used in case of frames?
	loc = String(url|| (util.getLoc().href || window.location)),
	lp = 0,
	len = params.length,
	rgx,
	rgxStart = startFromHash === 1 ? '#(?:.*?&)?' : '(?:\\?|&|;|#)',
	val,
	values = [];

	//console.log('delim = ' + delim);
	//console.log('loc = ' + loc);
	//console.log('startFromHash = ' + startFromHash);

	if (parameters) {
		for (lp = 0; lp < len; lp++) {
			rgx = new RegExp(rgxStart + params[lp] + '=(.*?)(?=\\?|&|;|#|/|$)', 'i');
			val = rgx.exec(loc);

			//console.log(params[lp] + ' = ' + (val && val[1]));

			if (val) {
				values.push(decodeURIComponent(val[1].replace(/\+/g, '%20')));
			}
		}
	}
	return values.join(delim);
};
// convert prodVal into an array if it was only a string (single product or comma separated)
util.prodArr = function (prodVal) {
	var prodTemp,
	prodArr,
	lp = 0,
	len;

	if (prodVal && typeof prodVal !== 'object') {
		//prodTemp = String(prodVal).replace(/^,+|,+$/g,'').split(',');
		prodTemp = String(prodVal).split(',');
		prodArr = [];
		for (len = prodTemp.length; lp < len; lp++) {
			// push individual product objects into prodArr array
			if (prodTemp[lp]) {
				prodArr.push({
					'prod' : prodTemp[lp]
				});
			}
		}
	} else {
		prodArr = prodVal || [];
	}
	return prodArr;
};
util.moduleLookup = function (mods, modKey) {
	// may be simpler if lookup could be passed directly as object, but following code will turn a string (key=name[,key=name]) into an object
	//var modKey = (pageDetails.moduleKey || '').split(','),
	var lp,
	len,
	moduleFriendlyLookup = {},
	moduleFriendlyNames = [];

	for (lp = 0, len = modKey.length; lp < len; lp++) {
		moduleFriendlyLookup[modKey[lp].split('=')[0]] = modKey[lp].split('=')[1];
	}
	for (lp = 0, len = mods.length; lp < len; lp++) {
		// dont add module if value is blank (key=,key=...)
		//if (moduleFriendlyLookup[mods[lp]] !== '') {
		// if key has value or is undefined, use value or default to key name
		//	moduleFriendlyNames.push(moduleFriendlyLookup[mods[lp]] || mods[lp]);
		// track modules by moduleKey opt-in only. (previously module name captured by default for modeuls without key)
		if (moduleFriendlyLookup[mods[lp]]) {
			moduleFriendlyNames.push(moduleFriendlyLookup[mods[lp]]);
		}
	}
	moduleFriendlyNames = moduleFriendlyNames.join(',');
	//console.log('moduleFriendlyNames = '+moduleFriendlyNames);
	// add ',+' to indicate more than 100 chars of module string was detected (including 'list,'/'grid,') to avoid truncating when many values
	if (moduleFriendlyNames.length > 95 && moduleFriendlyNames.indexOf(',') > -1) {
		moduleFriendlyNames = moduleFriendlyNames.substring(0, moduleFriendlyNames.lastIndexOf(',', 93)) + ',+';
	}
	return moduleFriendlyNames;
};

var _tempContext = {},
digital={},
pageBrand='',
pageSite='',
notSet = '(not set)', // to identify missing values
lowerCaseVal = util.lCase,
fullLocObj = util.getLoc(), // update each call
cleanText = util.clean,
appendEvent = util.addEvt,
// store copy in s object for clicks etc to refer to previous details (pageName etc.)
pageDetails =w_wtT.pageDetails || window.pageDetails || {},
pdPageName = cleanText(pageDetails.pageName),
pdDialogTitle = cleanText(pageDetails.dialogTitle), // captures titles of dialogs in OTP and CTRT code for dynamic campaign landing page. Value is appended to end of page name.
sPageNameTemp = '',
pdPageType = lowerCaseVal(pageDetails.pageType), // local var reference
pageTypeAlt, // for tracking other page types, and applying a rule to classify other pages
pdProductID = util.prodArr(pageDetails.productID || ''), // products string converted into array
paymentProduct, // for products string where required
pdPageStep = lowerCaseVal(pageDetails.pageStep, 1), // local var reference
pdFormName = lowerCaseVal(cleanText(pageDetails.formName)),
pdFormType = lowerCaseVal(cleanText(pageDetails.formType)),
pdInSession = false, // if page is in secure/unsecure area
pdSelfserviceDetails = lowerCaseVal(cleanText(pageDetails.selfserviceDetail)), // for selfservice details tracking
pdTransactionType = lowerCaseVal(pageDetails.transactionType), // for transactions
pdTransactionAmount = pageDetails.transactionAmount || '', // for transactions, value should be in nnnn[.nn] format - without thousand separator. decimal is optional, but should be separated by dot (period)
transactionMerch = [], // for transactions - quantity + details etc.
pdTransactionQty = pageDetails.transactionQty || '', // for transactions - multiple payments quantity
pdTransactionDetails = lowerCaseVal(cleanText(pageDetails.transactionDetails || '')), // for transactions - multiple payments quantity
formNameAlt, // Payments use pdTransactionType as part of form name, instead of formName
pdTransactionId = pageDetails.transactionID || '', // for transactions - confirm uniqueness - '[CID:...]' on Domino
prchId = pdTransactionId || '', // local copy for purchaseID manipulation
pdFormStatus = lowerCaseVal(cleanText(pageDetails.formStatus)), // local var reference
pdSearchTerm = cleanText(pageDetails.searchTerm),
pdSearchResults = String((String(pageDetails.searchResults) || notSet) > -1 ? util.cap(pageDetails.searchResults, 5000) : notSet), // need to differentiate between undefined, 0, '0' and ''.
pdItemName = cleanText(pageDetails.itemName), // item name for faq and atm
pageExperience = pageDetails.experience,
trackingOverrideEnabled = false, // for trackingOverride
prpty, // local var for looping properties
friendlyModules,
channelManagerKeywords,
channelManagerSearchType = false,
clickMapOid,
visitorLifecycle,
visitorLifecycleAware = 'Aware',
visitorLifecycleEngaged = 'Engaged',
visitorLifecycleConverted = 'Converted',
visitorLifecycleRetained = 'Retained',
dateZero = new Date(0), // old date used to clear cookies
datePlusOneYear = new Date(+new Date() + 31536000000), // 31536000000 = 365*24*60*60*1000 = 1 year
pageNamePathArray,
pdPageNumber = pageDetails.pageNumber,
pdSubSite = cleanText(pageDetails.subSite),
pdPageNamePrefixPair = cleanText(pageDetails.pageNamePrefixes).split('|'),
pdPageNamePrefix,
pdFeaturedContent,
formTypeOverride,
lastSentPage = util.cookieRead('lastPg'),
getValueOnce = util.getValOnce,
getQuerystringParam = util.getQueryParam, 
pageNameDynamicVariable = 'D=pageName'; // zzzzz change to D.pageName to reduce pixel
//pdPreImprs = cleanText(pageDetails.preImprs);

//ABU dd.brand & dd.site for each brand 
// Brand specific
if (/(?:^|\.)bankofmelbourne\.com\.au$/i.test(util.getLoc().hostname)) {
	pageBrand = 'bom';
	pageSite = /(.+)(?:\.bankofmelbourne\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
	pageSite = pageSite ? pageSite[1] : notSet;
}

// Brand specific
if (/(?:^|\.)stgeorge\.com\.au$/i.test(util.getLoc().hostname)) {
	pageBrand = 'stg';
	pageSite = /(.+)(?:\.stgeorge\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
	pageSite = pageSite ? pageSite[1] : notSet;
}
//if (/(?:^|\.)westpac\.com\.au$/i.test(fullLocHostname) || (window.s_w_wbcrgx && window.s_w_wbcrgx.test(fullLocHostname))) {
if (/(?:^|\.)westpac\.com\.au$/i.test(util.getLoc().hostname)) {
	pageBrand = 'wbc';
	pageSite = /(.+)(?:\.westpac\.com\.au$)/i.exec(util.getLoc().hostname); // || [];
	pageSite = pageSite ? pageSite[1] : notSet;

	// OTP secure, oregon secure forms, oregon secure domino forms -
	//if(pageSite === 'banking' && /^\/+secure\/+banking(?:\/|$)/i.test(fullLocObj.pathname)){
	//if (/\bbanking\b/i.test(pageSite) && /^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/)/i.test(fullLocObj.pathname)) {
	if ((/\bbanking\b/i).test(pageSite) && (/^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(util.getLoc().pathname)) {
		pdInSession = true;
		//pageStatus = 'secure'; // extended to in/out of session for all platforms and for formType
	}

	// OTP SameView staff emulation mode
	if ((/net$/i).test(pageSite) && (/\/emulationbanking\b/i).test(util.getLoc().pathname)) {
		pdInSession = true;

		// Change pageSite to 'banking' to consolidate OTP page names when in emulation in prod (necessary due to different domains)
		if (s2.w_prod) {
			pageSite = 'banking';
		}
	}

	//if(/online/i.test(pageSite)){
	//if(pageSite === 'online'){
	if ((/\bonline\b/i).test(pageSite) && (/^(?:\/dforms\/forms\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(util.getLoc().pathname)) {
		pdInSession = true;
	}
	
	var corpSubDomain = /(.+)(?:\.corp(?:.*?)\.westpac\.(?:com\.au|co\.nz)$)/i.exec(util.getLoc().hostname);
		if (corpSubDomain) {
			pageDetails.subSite = corpSubDomain[1];
			// A custom subSiteSeparator may be used for concatenating subSite into pageName in s_code (Westpac uses default value of hyphen)
			pageDetails.subSiteSeparator = ':';
		}

}

// Set values for microsites. This may be commented out for other domains
/*ABU: TODO Other domain*/
digital['dd.brand']= pageBrand
digital['dd.site'] = pageBrand + ':' + pageSite + (pdSubSite ? (pageDetails.subSiteSeparator || '-') + pdSubSite : ''); // with subSite like APPS - brand:site-subSite:section.
util.siteID = digital['dd.site'];
		// switch short/long forms based on in/out of session URLs
		if (pdFormType === 'checkurl') {
			pdFormType = pdInSession ? 'short' : 'long';
		}

		// Store formName when starting on a long version, to keep tracking as long after logging in and using short form.
		// When same form in same session, keep as 'long'. Reset at any long start step, or non-long version of the same form
		/*
		if (pdPageStep === 'start') {
		if (pdFormName && pdFormType === 'long') {
		s.c_w('frmTypOv', pdPageType + pdFormName);
		} else {
		if (s.c_r('frmTypOv') === pdPageType + pdFormName) { // only remove cookie if on same form again
		s.c_w('frmTypOv', 0, dateZero);
		}
		}
		} else {
		if (s.c_r('frmTypOv') === pdPageType + pdFormName) {
		pdFormType = 'long-' + pdFormType; // only if pdFormType is different to current...
		}
		}
		 */

		// adjusted to adapt to the journey - e.g. long-short, long-concise
		//if (pdFormType) {
		if (pdPageType && pdFormName) {
			//if (pdPageStep === 'start') {
			//if (pdPageStep === 'start' && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys
			if ((pdPageStep === 'start' || pdPageStep === 'intro') && pdPageType !== 'login') { // login form start step breaks long-short formType setting in the middle of other form journeys. intro pageStep forces any pages prior to a start step to use a static formType (not crossover like long-short etc.)
				util.cookieWrite('frmTypOv', pdPageType + pdFormName + '-' + pdFormType);  
			    //s2.c_w('frmTypOv', pdPageType + pdFormName + '-' + pdFormType); // prefix should also include pdSubSite to avoid clash on multi-sites?
			} else {
				formTypeOverride = /(.*)-(.*)/.exec(util.cookieRead('frmTypOv'));
				//formTypeOverride = /(.*)-(.*)/.exec(s2.c_r('frmTypOv'));
				//console.log('formTypeOverride[1] = ' + formTypeOverride[1]);
				//console.log('formTypeOverride[2] = ' + formTypeOverride[2]);

				// if the override matches the current form
				if (formTypeOverride && formTypeOverride[1] === pdPageType + pdFormName) { // prefix should also include pdSubSite to avoid clash on multi-sites?
					pdFormType = formTypeOverride[2] + (pdFormType && pdFormType !== formTypeOverride[2] ? '-' + pdFormType : '');
				}
			}
		}
		//console.log('pdFormType = ' + pdFormType);

		// Dynamic pageName prefix for in- and out-of-session pages to uniquely identify the page in separate path/section
		// Prefix value should be two pipe delimited values. The values can be matching, or either value may be blank.
		pdPageNamePrefix = pdPageNamePrefixPair.length === 2 ? cleanText(pdInSession ? pdPageNamePrefixPair[0] : pdPageNamePrefixPair[1]) : '';

		// Payments use pdTransactionType as part of page and form name, instead of formName
		//formNameAlt = pdFormName || pdTransactionType;
		formNameAlt = pdFormName ? (pdFormName + (pdFormType ? ':' + pdFormType : '')) : pdTransactionType; // to switch short/long form type when required


		// set pageName syntax for forms
		if (formNameAlt || (/^(?:tool|survey|selfservice|registration|payment|login|enquiry|application)$/).test(pdPageType)) { // pageType considered to be a form, use form syntax for pageName
			formNameAlt = formNameAlt || notSet;
			
			sPageNameTemp = util.siteID + ':' + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : ''); // with subSite coming from s.siteID
			//sPageNameTemp = s2.siteID + ':' + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : ''); // with subSite coming from s.siteID
			//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : '');
		} else {
			if (pdPageName) {
				// orig name code -
				//sPageNameTemp = s.siteID + ':' + pdPageName;
				// now with switch for in/out of session prefix -
				//sPageNameTemp = s.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
				//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
				//sPageNameTemp = s2.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName; // with subSite coming from s.siteID
				sPageNameTemp = util.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName; // with subSite coming from s.siteID
			} else {
				// else use getPageName plugin to get details directly from URL
				//sPageNameTemp = s.getPageName(s.pageURL); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)).replace(/^(.+?:.+?:)/, '$1' + (pdSubSite ? pdSubSite + ':' : '')); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//sPageNameTemp = decodeURIComponent(s2.getPageName(s2.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				sPageNameTemp = decodeURIComponent(util.getPageName(util.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
				//console.log(sPageNameTemp);
			}
		}
		//alert(sPageNameTemp +'||||'+ pdPageName);
		// If pageName override (overrides are any pageDetails properties named as 's_...') set, use it to replace all path and section details, else all those details must be passed as individual overrides (Individual overrides can still be set though)
		sPageNameTemp = cleanText((pageDetails.s_pageName || sPageNameTemp) + (pdDialogTitle ? ':' + pdDialogTitle : ''));

		// format pageName and replace long URL details
		sPageNameTemp = lowerCaseVal(
				sPageNameTemp.replace(/:personal-banking(\:|$)/i, ':pers$1')
				.replace(/:business-banking(\:|$)/i, ':bus$1')
				.replace(/:corporate-banking(\:|$)/i, ':corp$1')
				.replace(/:about-westpac(\:|$)/i, ':about$1')
				.replace(/:secure:banking(\:|$)/i, ':olb$1') // Abbreviate the path for olb
				.replace(/(.*:)(.*?:emulationbanking)(\:|$)/i, '$1olb$3') // Abbreviate the path for emulation
				.replace(/^((?:[\.\w\-]*?:){2})mobile$/i, '$1mobile:home') // set mobile root pages as a type of home page. mobile home page being overtaken by OTP and may be different?
				.replace(/(.+:atm:.+):-?\d+(.\d+)?:\d+(.\d+)$/i, '$1') // remove coords from atm detail pages
				//.replace(/(?:\s|%20)+/g, ' ') // replace these characters (or multiples of) with single space
				.replace(/(?:-|_)+/g, '-') // replace these characters (or multiples of) with single dash
			);
		/*ABU: TODO Dynamic variable not supported 
		// pageName eVar
		//ABU dd.pageName
		s2.eVar21 = pageNameDynamicVariable;
		
		// hierarchy
		s2.hier1 = pageNameDynamicVariable;
		*/
		
		// common event58 for branchdetail, atmdetail, teamdetail pages
		if (/^(?:branch|atm|team)detail$/.test(pdPageType)) {
			//s.events = s.apl(s.events, 'event58', ',', 2); // using shorter function call like appendEvent(58);
			appendEvent(digital,'branchATMdetail');
			//appendEvent(58);
		}

		// this should work for identifying both application and enquiry forms for serialisation
		//ABU TODO
		/*eventSerialisationKey = ((pdProductID && pdProductID[0] && pdProductID[0].prod) || '') + pdFormName; // if the product or form name changes between start and complete steps, or journey crosses domain origin (localStorage), the serialisation won't reset at complete step in that serial range (e.g. visit).
		eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : false; // without formType, the same product or form name in a different journeys could be deduped, e.g. skipping some start events. If prod and form are blank, dont use only formType - it could dedupe many other forms of the same type. Would require subSite in key if same pageType + formName shouldn't be joined across different subSite + formType (e.g. should long-short form across two different subSites match?)
		*/
		// determine tracking scenario
		switch (pdPageType) {
		case 'form':
			if (pdPageStep && pdTransactionId) {
				digital['dd.applicationID'] = digital['dd.transactionID'] = pdPageStep + '_' + pdTransactionId;
				//s2.transactionID = pdPageStep + '_' + pdTransactionId;
				//s2.eVar39 = 'D=xact';
			}
			if (pdPageStep === 'save') {
				//s.transactionID = pdTransactionId ? 'save_' + pdTransactionId : '';
				//s.eVar39 = 'D=xact';
				appendEvent(digital,'formSave');
				//appendEvent(73);
			}
			if (pdPageStep === 'retrieve') {
				appendEvent(digital,'formRetrieve');
				//appendEvent(74);
			}
			break;
		case 'tool':
			//s.eVar23 = 'tool:'+pdFormName; // remove all these from switch cases, capture once for all forms
			//s.prop23 = 'D=v23';
			//s.eVar62 = lowerCaseVal(pdFormName,1);
			digital['dd.toolName']= pdFormName || notSet;
			appendEvent(digital,'toolUsage');
			
			//s2.eVar62 = pdFormName || notSet;
			//s2.prop62 = dVar(62);
			//appendEvent(68);
			break;
		case 'survey':
			//s.eVar23 = 'survey:'+pdFormName;
			//s.prop23 = 'D=v23';
			/*
			switch(pdPageStep){
			//case 'start':
			//	appendEvent(55); // now common for all forms
			//	break;
			case 'complete':
			s.eVar28 = (pageDetails.surveyScore||notSet);
			appendEvent(64);
			break;
			}
			 */
			if (pdPageStep === 'complete') {
				digital['dd.score'] = util.fixZero(pageDetails.surveyScore) || notSet;
				appendEvent(digital,'surveyResponse');
				//s2.eVar28 = s2.w_fixZero(pageDetails.surveyScore) || notSet;
				//appendEvent(64);
			}
			break;
		case 'selfservice':
			//s.eVar23 = 'selfserv:'+pdFormName;
			//s.prop23 = 'D=v23';
			//s.eVar38 = lowerCaseVal(pdFormName,1);
			digital['dd.selfserviceName'] = pdFormName || notSet;
			//s2.eVar38 = pdFormName || notSet;
			//s2.prop38 = dVar(38);
			
			digital['dd.ExtAcct'] = lowerCaseVal(pageDetails.externalSiteName);
			//s2.eVar64 = lowerCaseVal(pageDetails.externalSiteName);

			switch (pdPageStep) {
			case 'start':
				appendEvent(digital,'selfServiceStart');
				//appendEvent(35);
				break;
			case 'complete':
				appendEvent(digital,'selfServiceComplete');
				//appendEvent(36);
				if (pdSelfserviceDetails) {
					digital['dd.selfserviceDetails']= pdSelfserviceDetails || notSet;
					//s2.eVar46 = pdSelfserviceDetails || notSet;
					//s2.prop46 = dVar(46);
					// self service detail var to capture type of self service, introduced as part of Nov 16E1  Wlive release  *au
				}
				break;
			case 'forgotpasswordstart':
				appendEvent(digital,'forgotPassword');
				appendEvent(digital,'selfServiceStart');
				//appendEvent(48);
				//appendEvent(35);
				break;
			case 'forgotpasswordcomplete':
				appendEvent(digital,'selfServiceComplete');
				//appendEvent(36);
				break;
			}
			break;
		case 'sitesearch':
			//if(s.w_pgLoad){ // getValOnce would be cleared on every page click/doPlugins in this pageType case required???? test.

			/*
			if(s.w_pgLoad){
			alert(1);
			s.w_trackLinkIntSearch(); // move to linkTracking section to run after every trackPage
			}
			 */

			//s.eVar14 = getValueOnce(lowerCaseVal(getQuerystringParam('query','',fullLocObj.href)).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_stv',0); // getValOnce after #. Hash only 5+ digits?
			//s.eVar14 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_stv',0); // getValOnce after #. Hash only 5+ digits?
			digital['dd.searchTerm'] = getValueOnce(util.srchTerm(pdSearchTerm), 'stv', 30, 'm'); // getValOnce after #. Hash only 5+ digits?
			//s2.eVar14 = getValueOnce(s2.w_srchTerm(pdSearchTerm), 'stv', 30, 'm'); // getValOnce after #. Hash only 5+ digits?
			
			if (digital['dd.searchTerm']) {
				//s2.prop14 = dVar(14); //Not required
				// split search term into keywords
				digital['dd.list1'] = cleanText(digital['dd.searchTerm'].replace(/[^a-z]+/gi, ' ')).replace(/\s/g, ','); // ,4); // for list prop, remove all chars outside a-z
				//s2.list1 = cleanText(s2.eVar14.replace(/[^a-z]+/gi, ' ')).replace(/\s/g, ','); // ,4); // for list prop, remove all chars outside a-z
				//s.eVar15 = pageBrand + ':' + (pageSite==='banking'?'secure':'public'); // OTP doesnt have site search
				appendEvent(digital,'intSearch');
				//appendEvent(14);
				//s.eVar30 = 'sitesearch:' + pdSearchResults; // use pdPageType here in place of text sitesearch string
				digital['dd.itemCount'] = pdPageType + ':' + pdSearchResults;
				//s2.eVar30 = pdPageType + ':' + pdSearchResults;
				//if(s.eVar30==='sitesearch:0'){
				//console.log(pdSearchResults);
				//if (s.eVar30 === pdPageType + ':0') {
				if (pdSearchResults === '0') {
					appendEvent(digital,'intSearchZeroResults');
					//appendEvent(16);
				}
			} //else{
			//	s.eVar14 = notSet;
			//}
			//}
			break;
		case 'faqsearch':
			// pageDetails passed from function call on faq search result div load
			digital['dd.faqSearchTerm'] = getValueOnce(util.srchTerm(pdSearchTerm), 'faq', 30, 'm');
			//s2.eVar58 = getValueOnce(s2.w_srchTerm(pdSearchTerm), 'faq', 30, 'm');
			if (digital['dd.faqSearchTerm']) {
				//s2.prop58 = dVar(58);
				appendEvent(digital,'faqSearch');
				//appendEvent(65);
				//s.eVar30 = 'faqsearch:' + pdSearchResults;
				digital['dd.itemCount'] = pdPageType + ':' + pdSearchResults;
				//s2.eVar30 = pdPageType + ':' + pdSearchResults;
			}
			break;
		case 'branchsearch':
			// pageDetails passed from function call on branch search result div load
			sPageNameTemp += ':searchresults';

			//if(s.w_pgLoad){ // getValOnce would be cleared on every page click/doPlugins in this pageType case
			//s.eVar44 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_brnch',0); // hash numbers, postcodes
			//s.eVar44 = getValueOnce(s.w_srchTerm(),'s_brnch',0); // hash numbers, keep postcodes in function
			digital['dd.branchSearchLocation'] = util.srchTerm(pdSearchTerm); // hash numbers, keep postcodes. not val once, every time
			//s2.eVar44 = s2.w_srchTerm(pdSearchTerm); // hash numbers, keep postcodes. not val once, every time
			if (digital['dd.branchSearchLocation']) {
				//s2.prop44 = dVar(44);
				digital['dd.branchSearchFilters'] = pageDetails.searchFilters || notSet;
				appendEvent(digital,'branchSearch');
				//s2.prop45 = pageDetails.searchFilters || notSet;
				//appendEvent(57);
				//s.eVar30 = 'branchsearch:' + pdSearchResults;
				digital['dd.itemCount'] = pdPageType + ':' + pdSearchResults;
				//s2.eVar30 = pdPageType + ':' + pdSearchResults;
				//if(s.eVar30==='branchsearch:0'){
				//if (s.eVar30 === pdPageType + ':0') {
				if (pdSearchResults === '0') {
					appendEvent(digital,'intSearchZeroResults');
					//appendEvent(16);
				}
			}
			//}
			break;
			//case 'branchdetail':
			//appendEvent(58);
			// common events set above
			//	break;
		case 'atmdetail':
			//sPageNameTemp=sPageNameTemp.replace(/:-?\d+(.\d+)?:\d+(.\d+)$/i,':'+lowerCaseVal(pageDetails.itemName,1));
			sPageNameTemp += ':' + lowerCaseVal(pdItemName.replace(/\s/g, ''), 1);
			// common events set above
			//appendEvent(58);
			break;
			//case 'teamdetail':
			// common events set above
			//appendEvent(58);
			//	break;
		case 'registration':
			//s.eVar23 = 'reg:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name?
			//s.prop23 = 'D=v23';
			//s.eVar45 = lowerCaseVal(pdFormName,1); // should brand and external site name be included here?
			switch (pdPageStep) {
			case 'start':
				appendEvent(digital,'registrationStart');
				//appendEvent(51);
				break;
			case 'complete':
				appendEvent(digital,'registrationComplete');
				//appendEvent(52);
				//appendEvent(46); // this should be set automatically by session/cookie server-side process in OTP/online banking
				break;
			}
			break;
		case 'product':
			//s.products = ';' + (pageDetails.productID||notSet).replace(/,/g,',;');
			switch (pdPageStep) {
			case 'view':
				appendEvent(digital,'customProdView');
				//appendEvent(13);
				break;
				//case 'selection': // product selection event/page not applicable/required
				//	appendEvent(32);
				//	break;
			case 'comparison':
				appendEvent(digital,'prodCompare');
				//appendEvent(30);
				break;
			}
			break;
		case 'payment':
			// s.eVar37 = lowerCaseVal(pdTransactionType,1);

			// payment status captured as merchandising eVar to relate to payment amount. two methods -
			//pdProductID=[{'prod':'payment:'+lowerCaseVal(pdTransactionType,1),'events':(pdPageStep==='complete'?'payment:'+lowerCaseVal(pdTransactionType,1)+(pdFormStatus?':'+pdFormStatus:'')+'='+pdTransactionAmount:'')}]; // capture status directly appended to pdTransactionType details
			//pdProductID=[{'prod':'payment:'+lowerCaseVal(pdTransactionType,1),'events':(pdPageStep==='complete'?'payment:'+lowerCaseVal(pdTransactionType,1)+'='+pdTransactionAmount:'')}]; // generic form status applied to merch in prod string processing
			// generic form status applied to merch in prod string processing

			if (pdTransactionQty) {
				transactionMerch.push('payment:qty:' + pdTransactionQty);
			}
			if (pdTransactionDetails) {
				transactionMerch.push(pdTransactionDetails);
			}

			// Currently set only for steps below. Otherwise products tracks as 'payment:(not set)' in review step etc.
			paymentProduct = [{
					'prod' : 'payment:' + (pdTransactionType || notSet),
					//'events' : ((pdPageStep === 'complete' || pdPageStep === 'effectpayment') ? 'payment:' + (pdTransactionType || notSet) + '=' + pdTransactionAmount : '') // complete or effectpayment should set the payment/product details.
					'events' : /^(complete|effectpayment|bulkpaymentapproval)$/.test(pdPageStep) ? 'payment:' + (pdTransactionType || notSet) + '=' + pdTransactionAmount : '', // complete or effectpayment should set the payment/product details.
					//'merch' : pdTransactionQty ? 'options=payment:qty:' + pdTransactionQty : ''
					'merch' : transactionMerch.length ? 'options=' + transactionMerch.join('+') : ''
				}
			];

			switch (pdPageStep) {
			case 'start':
				appendEvent(digital,'paymentStart');
				//appendEvent(38);
				pdProductID = paymentProduct;
				break;
				//case 'pinauthorisation':
				//	appendEvent(42); // not used
				//	break;
			case 'complete':
				appendEvent(digital,'paymentComplete');
				//appendEvent(39);
				pdProductID = paymentProduct;

				// removed to reduce reference IDs. payment ref not required
				//s.transactionID = pdTransactionId ? 'pay_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
				//s.eVar39 = 'D=xact';

				//s.purchaseID = prchId; // serialise all events with revenue/value. confirm uniqueness. maybe only capture in transactionID/xact
				//appendEvent('purchase'); // TODO. serialise payments to de-dupe amounts?

				break;
			case 'businessstart':
				// payment submitted/created, awating approval. business OTP 1.2
				appendEvent(digital,'busPaymentStart');
				//appendEvent(42);
				pdProductID = paymentProduct;
				break;
			case 'createpayment':
				// payment submitted/created, awating approval. business OTP 1.2
				appendEvent(digital,'busPaymentCreated');
				//appendEvent(43);
				pdProductID = paymentProduct;
				break;
			case 'authorisepayment':
				// intermediate approval step. business OTP 1.2
				//s.eVar42 = lowerCaseVal(pageDetails.businessAuthType, 1); // not used
				//s.prop42 = dVar(42);
				appendEvent(digital,'busPaymentAuthorised');
				//appendEvent(44);
				pdProductID = paymentProduct;
				break;
			case 'effectpayment':
				// final approval step, payment processed/scheduled. business OTP 1.2
				appendEvent(digital,'busPaymentEffected');
				//appendEvent(45);
				pdProductID = paymentProduct;
				break;
			case 'bulkpaymentapproval':
				// final bulk approval step. business OTP 1.2 step name also above, in setting paymentProduct
				appendEvent(digital,'busBulkApprovals');
				//appendEvent(37); // bulk payment approval completed step
				pdProductID = paymentProduct;
				break;
			}
			break;
		case 'login':
			//s.eVar23 = 'login:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name? eWise?
			//if(/^(?:firsttime|complete)$/i.test(pdPageStep)){
			//	s.eVar40 = 'logged in';
			//s.prop40 = 'D=v40';
			//}

			/*
			switch (pdPageStep) {
			case 'lockout':
			appendEvent(49);
			break;
			//case 'firsttime':
			//	appendEvent(47); // removed due to inaccurate implementation
			//appendEvent(46); // this should be set automatically by session/cookie server-side process in OTP/online banking
			//s.eVar32 = 'stop';
			//	break;
			case 'complete':
			// login complete step probably won't be used directly in OTP
			appendEvent(46);
			//	//s.eVar33 = 'start';
			break;
			}
			 */

			if (pdPageStep === 'complete') {
				appendEvent(digital,'login');
				//appendEvent(46);
			}

			break;
		case 'logout':
			//s.eVar23 = 'logout:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name?
			digital['dd.loginStatus'] = 'logged out';
			//s2.eVar40 = 'logged out';
			//s.prop40 = 'D=v40';
			break;

			/*
			case 'livechat': // triggered on live person popup window, not on page or click
			switch(pdPageStep){
			case 'start':
			s.eVar57 = (s.eVar57||'{LivePerson Session ID}'); // check value
			s.prop57 = 'D=v57';
			appendEvent(63);
			break;
			}
			break;
			 */
		case 'enquiry':
			// was 'lead'
			//s.eVar23 = 'lead:'+pdFormName;
			//s.prop23 = 'D=v23';
			//s.products = (pageDetails.productID?';' + pageDetails.productID.replace(/,/g,',;'):'');
			switch (pdPageStep) {
			case 'start':
				appendEvent(digital,'enqStart');
				//appendEvent(53);
				// serialise enquiry start
				//Abu todo serialise event ZZZZ
				//appendEvent('event28' + s2.w_serialise(eventSerialisationKey, pdPageStep));
				break;
			case 'complete':
				appendEvent(digital,'enqComplete');
				//appendEvent(54);
				// serialise enquiry complete
				//Abu todo serialise event ZZZZ
				//appendEvent('event29' + s2.w_serialise(eventSerialisationKey, pdPageStep));

				//s.transactionID='enq_'+pdTransactionId; // prefix to avoid duplicates with other applications etc.
				digital['dd.applicationID']  = digital['dd.transactionID'] = pdTransactionId ? 'enq_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
				//s2.transactionID = pdTransactionId ? 'enq_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
				//s2.eVar39 = 'D=xact'; //ABU not sure 'D=xact' replacemint  ZZZ 

				//s.purchaseID = prchId; // serialise all events like application complete. confirm uniqueness across all types and platforms
				//appendEvent('purchase');

				break;
			}
			break;
		case 'faq':
			//s.eVar58 = lowerCaseVal(pageDetails.itemName,1);
			//s.prop58 = 'D=v58';
			//appendEvent(65);
			sPageNameTemp += ':' + lowerCaseVal(pdItemName, 1);
			break;

			/*
			case 'enquiry':
			//s.eVar23 = 'enquiry:'+pdFormName;
			//s.prop23 = 'D=v23';
			s.eVar43 = lowerCaseVal(pdFormName,1);
			s.prop43 = 'D=v43';
			//s.products = ';' + (pageDetails.productID||notSet).replace(/,/g,',;');
			switch(pdPageStep){
			case 'complete':
			appendEvent(50);
			s.transactionID=pdTransactionId;
			s.eVar39='D=xact'; // for enquiry? capture whenever set?
			break;
			}
			break;
			 */

		case 'application':
			//s.eVar23 = 'appl:'+pdFormName;
			//s.prop23 = 'D=v23';
			//s.products = (pageDetails.productID?';' + pageDetails.productID.replace(/,/g,',;'):'');

			//s.prop68 = (pageDetails.businessABN||notSet); // ABN not required

			//		s.eVar37 = lowerCaseVal(pdTransactionType,1);

			/*
			if(/^(?:save|complete)$/i.test(pdPageStep)){ // different reference number specified between save and complete?
			//s.eVar39=pdTransactionId;
			//s.transactionID='D=v39';
			s.transactionID=pdTransactionId;
			s.eVar39='D=xact';
			}
			 */

			//eventSerialisationKey = (pdProductID && pdProductID[0] && pdProductID[0].prod) || pdFormName;
			//eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : 0;

			//eventSerialisationKey = ((pdProductID && pdProductID[0] && pdProductID[0].prod) || '') + pdFormName; // if the product or form name changes between start and complete steps, or journey crosses domain origin (localStorage), the serialisation won't reset at complete step in that serial range (e.g. visit).
			//eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : false; // without formType, the same product or form name in a different journeys could be deduped, e.g. skipping some start events. If prod and form are blank, dont use only formType - it could dedupe many other forms of the same type.

			if (pdPageStep && pdTransactionId) {
				digital['dd.transactionID'] = digital['dd.applicationID']  = pdPageStep + '_' + pdTransactionId;
				//s2.transactionID = pdPageStep + '_' + pdTransactionId;
				//s2.eVar39 = 'D=xact';
			}

			switch (pdPageStep) {
			case 'start':
				appendEvent(digital,'appStart');
				//appendEvent(21);
				//ABU todo serilize event ZZZZ
				//appendEvent('event26' + s2.w_serialise(eventSerialisationKey, pdPageStep));

				//console.log('s.events = ' + s.events);
				//s.eVar31 = 'start';

				break;
			case 'save':
				appendEvent(digital,'appSaved');
				//appendEvent(24);
				break;
			case 'retrieve':
				appendEvent(digital,'appRetrieved');
				//appendEvent(23);
				break;
			case 'complete':
				appendEvent(digital,'appComplete');
				//appendEvent(22);
				// mark serial stamp as complete once hit. re-use same stamp if starting same form again if not completed, generate new serial if form has been completed (in the same origin)
				//ABU todo serilize event ZZZZ
				//appendEvent('event27' + s2.w_serialise(eventSerialisationKey, pdPageStep));
				//console.log(eventSerialisationKey);
				digital['dd.transactionID'] = pdTransactionId;
				//s2.transactionID = pdTransactionId;
				//s.eVar39 = 'D=xact'; // if multiple transacation ID's, what happens on forms without productID? are there any without products? Have form txn ID + multi prod IDs?
				//s.purchaseID = 'D=v39';
				//s.purchaseID = 'D=xact';

				/*
				if(/^\[CID:.+\]/i.test(prchId)){ // updated to ignore case for some domino forms
				// if using CID format, take last 20 chars of CID cookie (if exists)+timestamp
				prchId = /.{1,20}(?=\])/.exec(prchId.replace(/(-|\s|:|^\[CID)/gi,''))[0];
				}
				// always trim purchaseID to first 20 chars only
				s.purchaseID = prchId.substring(0,20);
				 */
				digital['dd.purchaseID'] = prchId; 
				//s2.purchaseID = prchId; // confirm uniqueness
				//s.events = s.apl(s.events,'purchase',',',2);
				appendEvent(digital,'purchase');
				//appendEvent('purchase'); // only when approved? (not declined, referred, customer declined). Only really used for serialising, so maybe always fire?...

				//s.eVar31 = 'stop';
				//s.eVar32 = 'start';
				//s.eVar33 = 'stop';

				// apply transactionType and transactionAmount against first product if legacy values exist
				if (pdProductID && pdProductID[0] && !pdProductID[0].events) {
					//pdProductID[0].events=lowerCaseVal(pdTransactionType,1)+(pdFormStatus?':'+pdFormStatus:'')+'='+pdTransactionAmount; // apply status directly to first product
					//pdProductID[0].events=lowerCaseVal(pdTransactionType,1)+'='+pdTransactionAmount; // generic pdFormStatus applied during prod string processing
					pdProductID[0].events = (pdTransactionType || notSet) + '=' + pdTransactionAmount; // generic pdFormStatus applied during prod string processing
				}

				// track status of whole form submission (even though form may include multiple products)
				// pdFormStatus is applied directly to merchandising with every transaction amount band
				/*
				switch (pdFormStatus) {
				case 'approved':
				appendEvent(18);
				break;
				case 'declined':
				appendEvent(19);
				break;
				case 'referred':
				appendEvent(20);
				break;
				}
				 */

				//if (/^approved($|:upsell|:downsell$)/i.test(pdFormStatus)) {
				if (/^approved(?!:downselldeclined)/i.test(pdFormStatus)) {
					appendEvent(digital,'appApproved');
					//appendEvent(18);
				}
				//if (pdFormStatus === 'declined') {
				if (/^declined/i.test(pdFormStatus)) {
					appendEvent(digital,'appDeclined');
					//appendEvent(19);
				}
				//if (pdFormStatus === 'referred') {
				if (/^referred/i.test(pdFormStatus)) {
					appendEvent(digital,'appReferred');
					//appendEvent(20);
				}
				if (pdFormStatus === 'approved:downselldeclined') {
					appendEvent(digital,'appCustDeclined');
					//appendEvent(25);
				}

				break;
			}
			break;
		case 'servererror':
			// 404, 500 etc. on page load
			// align pageName for errors to correspond to similar section details of other pages
			sPageNameTemp = util.siteID + ':err:' + lowerCaseVal(pageDetails.errorCode, 1) + ':' + util.pageURL;
			//console.log(sPageNameTemp);
			pageNamePathArray = sPageNameTemp.split(':').slice(0, 4); // provide truncated path for section details, if error page (remove URL)
			if (String(pageDetails.errorCode) === '404') {
				digital['dd.pageType'] = 'errorPage';
				//s2.pageType = 'errorPage';
			}
			break;

			// pageerror pageType doesn't make sense - errors would usually occur on another pageType
			//case 'pageerror': // not required? always capture errors if set?
			//s.prop17=s.siteID+':'+lowerCaseVal(s.prop17||pageDetails.errorCode,1); // different approach for form errors below
			//	s.prop17=lowerCaseVal(s.prop17||pageDetails.errorCode,1); // stored in list prop
			//	break;
		}

		// apply any global pageName replace
		//sPageNameTemp = s.w_valReplace(sPageNameTemp, 'analytics_pageNameReplace');
		sPageNameTemp = util.valReplace(util.valReplace(sPageNameTemp, util.lStor('get', 'analytics_pageNameReplace')), pageDetails.pageNameReplace); // global + local replace
		//sPageNameTemp = s2.w_valReplace(s2.w_valReplace(sPageNameTemp, s2.w_lStor('get', 'analytics_pageNameReplace')), pageDetails.pageNameReplace); // global + local replace
		// standard changeIf syntax, operating on pageName property only
		//sPageNameTemp = changeIf({
		//		'pageName' : sPageNameTemp,
		//		'changeIf' : s.w_lStor('get', 'analytics_pageNameReplace')
		//	}).pageName; // analytics_pageNameReplace > analytics_pageNameChange = originPageNameChange

		// remove any detail for this page only
		//sPageNameTemp = sPageNameTemp.replace(new RegExp(pageDetails.pageNameReplace, 'gi'), ''); // remove anything matching pageNameReplace regex. if not used, use changeIf instead?
		//sPageNameTemp = changeIf({
		//		'pageName' : sPageNameTemp,
		//		'changeIf' : pageDetails.pageNameReplace
		//	}).pageName; // pageNameReplace > pageNameChange = pageNameChange

		// copy pageName details to section eVars -
		// now copying longest detail to all section vars for more accurate reporting on page views in/below that section
		// -----------------------------------------------------------------------------------------------------------------------------
		pageNamePathArray = pageNamePathArray || sPageNameTemp.split(':');
		console.log(pageNamePathArray);
		console.log(sPageNameTemp);
		//s.w_pathArr = pageNamePathArray; // for use outside this function
		// New version with experience removed from pageName -
		
		//Abu to investigate ZZZ
		//dd.brand = pageNamePathArray[0]; // Brand
		//s2.eVar6 = pageNamePathArray[0]; // Brand
		//s2.prop6 = dVar(6);
		//if (pageNamePathArray[1]) { // Site
		
		//Abu to investigate ZZZ
		//dd.site =  pageNamePathArray.slice(0, 2).join(':');
		//s2.eVar1 = pageNamePathArray.slice(0, 2).join(':');
		//s2.prop1 = dVar(1);
		//}
		//if (pageNamePathArray[2]) { // Site section


		digital['dd.section1'] = pageNamePathArray.slice(0, 3).join(':');
		//s2.eVar2 = pageNamePathArray.slice(0, 3).join(':');
		//s2.prop2 = dVar(2);
		
		//ABU Not required DynamicVariable
		//if (s2.eVar2 === sPageNameTemp) {
		//	s2.eVar2 = s2.prop2 = pageNameDynamicVariable;
		//}
		//}
		//if (pageNamePathArray[3]) { // Sub section
		digital['dd.section2'] = pageNamePathArray.slice(0, 4).join(':');
		//s2.eVar3 = pageNamePathArray.slice(0, 4).join(':');
		//s2.prop3 = dVar(3);
		//ABU Not required DynamicVariable
		//if (s2.eVar3 === sPageNameTemp) {
		//	s2.eVar3 = s2.prop3 = pageNameDynamicVariable;
		//}
		//}
		//if (pageNamePathArray[4]) { // Sub sub section
		digital['dd.section3'] = pageNamePathArray.slice(0, 5).join(':');
		//s2.eVar4 = pageNamePathArray.slice(0, 5).join(':');
		//s2.prop4 = dVar(4);
		//ABU Not required DynamicVariable
		//if (s2.eVar4 === sPageNameTemp) {
		//	s2.eVar4 = s2.prop4 = pageNameDynamicVariable;
		//}
		//}
		//if (pageNamePathArray[5]) { // Sub sub sub section
		digital['dd.section4'] = pageNamePathArray.slice(0, 6).join(':');
		//s2.eVar5 = pageNamePathArray.slice(0, 6).join(':');
		//s2.prop5 = dVar(5);
		//ABU Not required DynamicVariable
		//if (s2.eVar5 === sPageNameTemp) {
		//	s2.eVar5 = s2.prop5 = pageNameDynamicVariable;
		//}
		//}

		// server from full domain
		//s.server = lowerCaseVal(fullLocObj.hostname);
		digital['dd.server'] = lowerCaseVal(fullLocObj.hostname + (/\s(banking|dev)\s/i.test(util.codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney
		//s2.server = lowerCaseVal(fullLocObj.hostname + (/\s(banking|dev)\s/i.test(s2.w_codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney

		// experience from app/pageDetails
		//s.eVar7=pageExperience; // mob/mobapp/tab/tabapp is mobile suite, everything else is desktop
		//s.eVar7 = s.linkName ? 'link' : pageExperience; // switch to 'link' for link tracking
		// switch to '(link)' for link tracking where experience may not be set/available in pageDetails?
		//s.eVar7 = s.linkName ? (pageExperience || '(link)') : pageExperience;
		digital['dd.experience'] = digital['dd.channel'] = pageExperience;
		
		//s2.eVar7 = pageExperience;
		//s2.channel = dVar(7);

		// standard form name details
		//formNameAlt=(pdFormName||pdTransactionType); // Payments use pdTransactionType as part of form name, not the formName from pageDetails
		if (pdPageType && formNameAlt) {
			//s.eVar23 = s.eVar6+':'+pdPageType+':'+formNameAlt; // excludes sub-domain, e.g. - wbc:application

			digital['dd.formName'] =util.siteID + ':' + pdPageType + ':' + formNameAlt; // includes sub-domain, e.g. - wbc:online:application // if this matches v3, D=v3 could be used here
			//s2.eVar23 = util.siteID + ':' + pdPageType + ':' + formNameAlt; // includes sub-domain, e.g. - wbc:online:application // if this matches v3, D=v3 could be used here
			//s2.prop23 = dVar(23);

			if (pdPageStep === 'start') {
				appendEvent(digital,'formStart');
				//appendEvent(55);
			}
			if (pdPageStep === 'complete') {
				appendEvent(digital,'formComplete');
				//appendEvent(56);
			}
		}

		// details to track on full page loads only. i.e. not on every click...
		/*
		if(s.w_pgLoad){
		// if available after page load
		s.list2=s.c_r('banners'); // check suitable cookie name. this should contain a comma separated list of banners seen on previous page
		if(s.list2){
		appendEvent(11);
		s.c_w('banners',0,new Date(0));
		}

		// capture number of form validation errors from cookie
		if(s.c_r('errCount')){
		s.prop17=s.c_r('errCode');
		//s.eVar30 = (s.prop17.indexOf(s.w_inlErr+',')>-1? s.prop17 : 'defined errors') + ':' + s.c_r('errCount');
		s.eVar30 = 'errors:' + s.c_r('errCount');
		s.c_w('errCode',0,new Date(0));
		s.c_w('errCount',0,new Date(0));
		}

		// Navigation menu ID
		s.prop59=s.c_r('s_nav');
		s.c_w('s_nav','',new Date(0)); // remove s_nav cookie after tracking

		// if search results 'click past' rank cookie has been set from result link click, track the rank and click event and delete the cookie.
		s.prop16=s.c_r('cpr'); // The cookie is set on search results link clicks with the rank of the link
		if(s.prop16){
		appendEvent(15);
		s.c_w('cpr','',new Date(0)); // delete cookie after tracking
		}
		}
		 */

		// Rules to track a cross-section of key page types without pageType specified
		if (pageSite === 'www') {
			pageTypeAlt = 'www:' + notSet; // default for unspecified pages
			//if(sPageNameTemp==='wbc:www:home'){
			if (/^wbc:www:(?:mobile:)?home$/i.test(sPageNameTemp)) { // desktop or mobile home page as www:home page type
				pageTypeAlt = 'www:home';
			}
			//console.log(pageNamePathArray);
			if (/^(?:pers|bus|corp)$/.test(pageNamePathArray[2])) {
				//if (!s.eVar3) {
				if (pageNamePathArray.length === 3) {
					pageTypeAlt = 'www:section home'; // i.e. 1st directory only.
				}
				//if (!s.eVar4) {
				if (pageNamePathArray.length === 4) {
					pageTypeAlt = 'www:product home'; // i.e. to 2nd directory only.
				}
			}
		}
		/*
		if(s.w_site==='banking'){
		pageTypeAlt='banking:'+notSet; // page types on banking - can be populated in pageType key in RESX if required
		}
		if(/^(?:info|ruby|dav)$/i.test(s.w_site)){
		pageTypeAlt='microsite'; // page types for mactel etc.?
		}
		 */
		digital['dd.pageType'] = pdPageType || pageTypeAlt;
		//s2.prop7 = pdPageType || pageTypeAlt;

		// track page number for search results etc.
		digital['dd.visitNumber'] = pdPageNumber ? ((pdPageType || notSet) + ':' + pdPageNumber) : '';
		//s2.prop8 = pdPageNumber ? ((pdPageType || notSet) + ':' + pdPageNumber) : '';

		// Visit number
		//s.eVar8 = s.w_cap(s.getVisitNum(365), 1000);
		//ABU TODO   zzzz
		//s2.eVar8 = s2.w_cap(s2.getVisitNum(365), 1000) + s2.w_extCkSfx; // appends if external cookie data
		//if(s.eVar8>1000){
		//	s.eVar8='1000+';
		//}

		// days since last visit
		//s.eVar29=s.getDaysSinceLastVisit('s_lv',1);
		//s.eVar29=(s.eVar29==='0'?'zero':s.eVar29);
		//s.eVar29=s.w_fixZero(s.eVar29);
		//ABU TODO ZZZZ
		//s2.eVar29 = s2.w_cap(s2.w_fixZero(s2.getDaysSinceLastVisit('s_lv', 1)), 1000) + s2.w_extCkSfx; // appends if external cookie data
		//if(s.eVar29>1000){
		//	s.eVar29='1000+';
		//}

		// visitor id
		//ABU s2.eVar25 = s2.prop25 = (customVisitorID ? 'D=vid' : 'D=s_vi'); // if s.visitorID passed from mobile app to hybrid pages, variable will be vid, else use FP-cookie name
		
		//ABU TODO ZZZZ
		//s2.eVar25 = s2.prop25 = (customVisitorID ? 'D=vid' : 'D=s_mid');
		//s.prop25 = s.eVar25;
		


		// page status
		//s.prop40 = pageStatus;
		//s.prop40 = pdInSession ? 'secure' : 'unsecure'; // switching based on URL
		digital['dd.pageStatus'] = pdInSession ? 'logged in' : 'public'; // switching based on URL
		//s2.prop40 = pdInSession ? 'logged in' : 'public'; // switching based on URL

		// site language from page if set
		//s.eVar63 = lowerCaseVal(pageDetails.language||'en'); // only captured in prop63
		digital['dd.lang'] = lowerCaseVal(pageDetails.language || 'en');
		//s2.prop63 = lowerCaseVal(pageDetails.language || 'en');
		//s.prop63 = 'D=v63';

		// Day Of Week, Time Of Day
		//var s_tpA = s.getTimeParting('s','+10');
		//s.eVar10 = s_tpA[1]+'|'+s_tpA[2]; // Adobe orig converted format
		digital['dd.dayTime'] = util.timePart(); // local time in shorter format
		//s2.eVar10 = s2.w_timePart(); // local time in shorter format
		//s2.prop10 = dVar(10);

		// External Campaigns
		//if(!s.campaign){
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
		digital['dd.campaign'] = getValueOnce(lowerCaseVal(getQuerystringParam('cid', '', fullLocObj.href)), 's_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
		//s2.campaign = getValueOnce(lowerCaseVal(getQuerystringParam('cid', '', fullLocObj.href)), 's_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
		//}

		//ABU TODO
		/*if (s2.campaign) {
			s2.eVar16 = 'D=v0';
			s2.eVar17 = 'D=v0';
			s2.eVar18 = crossVisitPrtcptn(s2.campaign, 's_ev18', '30', '5', '>', 'event22'); // this is cleared every time event22 fires. i.e. Application Complete step
		}

		//console.log('ORIG s.list2  = ' + s.list2); // impressions from banner cookie related to previous page, collected after it loaded
		//console.log('pdPreImprs    = ' + pdPreImprs); // any other impressions passed for the current page after trackPage was called, but before it completed (and scanning links)
		pdPreImprs = pdPreImprs ? (pdPreImprs||'').split(',') : [];
		for (prpty = 0; prpty < pdPreImprs.length; prpty++) {
			digital['dd.list2'] = util.apl(digital['dd.list2'], pdPreImprs[prpty], ',', 2);
			//s2.list2 = s2.apl(s2.list2, pdPreImprs[prpty], ',', 2);
		}
		//console.log('NEW s.list2   = ' + s.list2); // combined list of impressions for previous page
		
		if (digital['dd.list2']) {
			appendEvent(digital,'intImpressions');
			//s2.w_addEvt(11);
		}

		// Internal banner clicks
		pidQuerystring = lowerCaseVal(getQuerystringParam('pid', '', fullLocObj.href));
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
		digital['dd.intCampaign']  = getValueOnce(pidQuerystring, 'u_pid', 30, 'm');
		//s2.eVar22 = getValueOnce(pidQuerystring, 's_pid', 30, 'm');
		//}

		// count every pid click for comparison to getValueOnce count
		if (pidQuerystring) {
			appendEvent(digital,'pidTotalClicks');
			//appendEvent(10);
		}

		//if(s.eVar22&&!s.eVar65){
		if (digital['dd.intCampaign']) {
			appendEvent(digital,'intClickThroughs');
			//appendEvent(12);
			//ABU todo zzz`
			//s2.eVar20 = crossVisitPrtcptn(s2.eVar22, 's_ev20', '30', '5', '>', 'event22');
		}
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
		digital['dd.extSite']  = getValueOnce(lowerCaseVal(getQuerystringParam('ref', '', fullLocObj.href)), 'refPrm', 30, 'm');
		//s2.eVar65 = getValueOnce(lowerCaseVal(getQuerystringParam('ref', '', fullLocObj.href)), 'refPrm', 30, 'm');
		//}
		// incoming links from AFS-group sites
		//if(s.eVar22&&s.eVar65){
		// ref is now just an additional parameter for tracking links from other sites
		if (digital['dd.extSite'] ) {
			appendEvent(digital,'linkClicksAFS');
			//appendEvent(72);
		}
		//else{
		//	s.eVar65='';
		//}
		*/
		// Page modules shown on dashboard
		// refer to widget name mapping in resx to lookup friendly names
		//pdModules=lowerCaseVal((pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts'));
		//pdModules=(pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts');
		//pdModules=(pageDetails.modules||'').split(',');
		//pdModules = pdModules.split(',');
		//ABU REMOVE MODULE 
		/*friendlyModules = util.moduleLookup((pageDetails.modules || '').split(','), (pageDetails.moduleKey || '').split(','));

		//s.eVar55 = getValueOnce((friendlyModules ? (/:overview:dashboard$/i.test(sPageNameTemp) ? 'grid' : 'list') + ',' + friendlyModules : ''), 'mdlVar', 0); // modules will be in grid format on overview/dashboard
		dd.pageModuleSet = getValueOnce((pageDetails.moduleLayout || '') + (friendlyModules ? ',' + friendlyModules : ''), 'mdlVar', 30, 'm'); // modules will be in grid format on overview/dashboard
		//s2.eVar55 = getValueOnce((pageDetails.moduleLayout || '') + (friendlyModules ? ',' + friendlyModules : ''), 'mdlVar', 30, 'm'); // modules will be in grid format on overview/dashboard

		//s.prop55 = 'D=v55';
		//s2.prop55 = dVar(55);

		// call every time on dashboard page to compare current to previous modules and diff for added/removed
		// except when only switching profiles. when switching profile, modules change, but not through direct modification.
		if (userSwitchedProfile) {
			// when switching, update stored module set to current profile modules
			s2.c_w('mdlSet', friendlyModules);
		} else {
			// track as a module change
			s2.prop64 = s2.w_checkModuleChanges('mdlSet', friendlyModules);
			if (s2.prop64) {
				appendEvent(70);
			}
		} */

		/*ABU TODO Click map to Actifity MAP
		// clear invalid clickmap values generated for custom links
		clickMapOid = (/(.*oid%3D)(.*?)(%26|$)/).exec(s2.c_r('s_sq'));
		if (clickMapOid && clickMapOid[2]) {
			if (!(/_[0-9]+$/).test(clickMapOid[2])) {
				s.c_w('s_sq', 0, dateZero); // remove invalid s_sq cookie
			}
		}*/

		// Featured content - fid/wbcfrom - for secondary promo tracking (Patrick)
		//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
		pdFeaturedContent = getValueOnce(lowerCaseVal(getQuerystringParam('fid', '', fullLocObj.href) || getQuerystringParam('wbcfrom', '', fullLocObj.href)), 'feat', 30, 'm');
		//s2.eVar60 = getValueOnce(lowerCaseVal(getQuerystringParam('fid', '', fullLocObj.href) || getQuerystringParam('wbcfrom', '', fullLocObj.href)), 'feat', 30, 'm');
		//}
		if (pdFeaturedContent) {
			dd.featuredContent = pdFeaturedContent;
			appendEvent(digital,'featuredContent');
			//appendEvent(66);
			//s2.prop60 = dVar(60);
		}
		
		//ABU toDO crossVisitPrtcptn 
		// Combined Internal External Stack
		/*if (s2.eVar22) {
			s2.eVar19 = crossVisitPrtcptn(s2.eVar22, 's_ev19', '30', '10', '>', 'event22');
		}
		if (s2.campaign) {
			s2.eVar19 = crossVisitPrtcptn(s2.campaign, 's_ev19', '30', '10', '>', 'event22');
		}*/

		// Paid/Natural Search Keyword
		//ABU toDO
		/*s2.prop18 = pageNameDynamicVariable; // set to just pageName as default
		s2._channelParameter = 'Campaign|cid';
		s2.w_channelManager('cid');

		//channelManagerKeywords = cleanText(s._keywords || ''); // filter search keywords a bit - strip multiple spaces etc.
		channelManagerKeywords = cleanText(s2._keywords); // filter search keywords a bit - strip multiple spaces etc.

		if (s2._channel === 'Natural Search') {
			channelManagerSearchType = 'NS';
			// prop18 seo keywords and entry page
			s2.prop18 = 'D="' + channelManagerKeywords + '|"+pageName';
		}
		//if(s._channel==='Campaign'&&/^sem:/i.test(s._campaign)){ // if cid param, and value starts with 'sem:' (just check for any CID). confirm identifier for PPC tracking codes
		if (s2._channel === 'Campaign' && channelManagerKeywords !== 'n/a') { // only if cid param exists and keywords are found, it's paid search. We may not have keywords if they are not passed by the search engine (usually for NS)
			channelManagerSearchType = 'PS';
		}
		if (channelManagerSearchType) {
			s2.eVar11 = channelManagerKeywords === 'n/a' ? 'Keyword Unavailable' : channelManagerKeywords;
			s2.prop11 = dVar(11);

			s2.eVar12 = crossVisitPrtcptn(channelManagerSearchType + '|' + channelManagerKeywords, 's_ev12', '30', '5', '>', 'event22');
		}*/

		// Lifecycle. consider re-setting to avoid build up to later levels?
		//ABU toDO
		/*visitorLifecycle = s2.c_r('s_lfcl');
		if (visitorLifecycle === '') { // No previous lifecycle cookie
			if (!s2.c_w('testCkie', 'set', new Date(+new Date() + 10000))) { // test if lifecycle cookie can be set to prevent events from re-firing
				visitorLifecycle = 'No cookies';
			} else {
				s2.c_w('testCkie', 0, dateZero);
				visitorLifecycle = visitorLifecycleAware;
				appendEvent(6);
			}
		}
		if (visitorLifecycle === visitorLifecycleAware && (/\b(event(13|21|30|31|54|61|63|68))\b/i).test(s2.events)) { // Confirm Engagement status criteria
			visitorLifecycle = visitorLifecycleEngaged;
			appendEvent(7);
		}
		if (visitorLifecycle === visitorLifecycleEngaged && (/\b(event(22))\b/i).test(s2.events)) { // Conversion status criteria
			visitorLifecycle = visitorLifecycleConverted;
			appendEvent(8);
		}
		if (visitorLifecycle === visitorLifecycleConverted && (/\b(event(46))\b/i).test(s2.events) && s2.getVisitNum(365) > 1) { // Retention status criteria
			visitorLifecycle = visitorLifecycleRetained;
			appendEvent(9);
		}
		s2.c_w('s_lfcl', visitorLifecycle, datePlusOneYear);
		s2.eVar36 = visitorLifecycle + s2.w_extCkSfx; // appends if external cookie data
		s2.prop36 = dVar(36);
		*/
		// search results clickthru event for auto suggest results only *au
		wbcfromQuerystring = lowerCaseVal(getQuerystringParam('wbcfrom', '', fullLocObj.href));
		if (/sitesearch:autosuggest:results/i.test(wbcfromQuerystring)) {
			appendEvent(digital,'intSearchClickThru');
			//s2.w_addEvt(15);
			// clickthru event from "search results page" is triggered when prop16 is set
		}

		// Previous Page name
		//s.prop15 = s.getPreviousValue(sPageNameTemp, 'gpv_p15', '');
		//if (s.prop15 === sPageNameTemp) {
		//	s.prop15 = pageNameDynamicVariable;
		//}
		// refactored and referencing lastPg cookie
		//ABU TODO
		if(lastSentPage) digital['dd.previousPage'] = lastSentPage;
		//s2.prop15 = lastSentPage === sPageNameTemp ? pageNameDynamicVariable : lastSentPage;

		// Previous pixel length
		//s2.prop69 = s2.w_cap(s2.c_r('lastReqLen'), 5000);
		//if(s.prop69>5000){
		//	s.prop69='5000+';
		//}

		// capture URL
		//s.eVar26 = 'D=Referer'; // this is the full unprocessed page URL from HTTP header (excludes hash)
		//s.eVar26 = 'D=Referer' + (fullLocObj.hash ? '+"' + fullLocObj.hash + '"' : ''); // this is the full unprocessed page URL from HTTP header (includes hash)
		//s2.eVar26 = 'D=Referer+"' + fullLocObj.hash.replace(s2.w_guidRgx, '(GUID)') + '"'; // this is the full unprocessed page URL from HTTP header (includes hash)

		//s2.prop26 = 'D=g'; // this is the filtered page URL from JS document (will include hash if any)

		// capture user-agent
		//s.prop27 = 'D=User-Agent'; // capture with proc rule to increase capture (non-JS), reduce JS size and reduce pixel length

		// track scode version
		digital['dd.analyticsVersion'] = util.codeVers;
		//s2.prop39 = s2.w_codeVers;

		// track site + source data version/details + pageKey for page audit.
		// dont capture in IE - makes pixel too long
		//ABU TODO no if (!s.isie) { // as of s_code version H.26.2, s.isie == false in IE11 due to useragent change in IE 11 to distinguish its DOM compatibility vs. older versions
			digital['dd.pageAudit']= pageSite + ':' + lowerCaseVal(pageDetails.src, 1) + ':' + lowerCaseVal(pageDetails.pageKey, 1);
			//s2.prop13 = pageSite + ':' + lowerCaseVal(pageDetails.src, 1) + ':' + lowerCaseVal(pageDetails.pageKey, 1);
		//}

		// Site release version - set on OTP pages, apps, public? etc.
		digital['dd.siteVersion'] = pageSite + ':' + lowerCaseVal(pageDetails.siteVersion, 1);
		//s2.eVar52 = pageSite + ':' + lowerCaseVal(pageDetails.siteVersion, 1);
		//s2.prop52 = dVar(52);

		// fid (3rd-party fallback visitor ID) not required when on first party collection domain (i.e. westpac.com.au). What if other domain? (we capture s_vi not fid)
		//if(/\.westpac\.com\.au$/i.test(location.hostname)){
		//if (/\.westpac\.com\.au$/i.test(fullLocObj.hostname)) {
		//if (s2.w_coreDomain) {
		//	s2.fid = ''; // Not used for implementations that use first-party cookies.
		//}

		/*s2.plugins = ''; // empty to prevent tracking plugins. not available for reporting in SC15

		// clean referrer to reduce length and remove session details (creates too many values), etc.
		//s.testRef='https://uat.banking.westpac.com.au/cust/wps/portal/wodp/c1/04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X04_SB8K8xLLM9MSSzPy8xBz9CP0os3gvRx9X';
		//s.referrer=s.w_cleanURL(s.testRef,2);
		//s.referrer=s.w_cleanURL('',2);
		//s.referrer=s.w_cleanURL(null,2);
		if (!s2.w_refSent) { // added to match adobe approach in AppMeasurement v1.4.3
			s2.w_refSent = true;

			s2.referrer = s2.w_cleanURL(document.referrer, 2);

			// set s.referrer here if able to identify sources otherwise incorrectly tracked as 'None' or 'Unspecified'. e.g. app links etc...
			// nativeAppVersion
			// file://native.app/?cid=app_abc_123

			// edm
			if (/\:edm\:/i.test(s2.campaign)) {
				s2.referrer = 'mail://edm.cid/?cid=' + cleanText(s2.campaign) + '&referrer=' + (s2.referrer || notSet); // Force any :edm: CID to Email Referrer Type
			}
		}*/

		// convert product array into Omniture-format string
		//sProductsTemp = s.w_prodStr(pdProductID, pageDetails);
		// run replace function on s.products
		//console.log('ORIG s.products = ' + s.products);
		//s.products = s.w_valReplace(s.w_prodStr(pdProductID, pageDetails), 'analytics_productsReplace');  // global replace
		//s2.products = s2.w_valReplace(s2.w_valReplace(s2.w_prodStr(pdProductID, pageDetails), s2.w_lStor('get', 'analytics_productsReplace')), pageDetails.productsReplace); // global + local replace
		//s.products = changeIf({
		//		's.products' : s.w_prodStr(pdProductID, pageDetails),
		//		'changeIf' : s.w_lStor('get', 'analytics_productsReplace')
		//	})['s.products'];
		//console.log('NEW  s.products = ' + s.products);

		// option to prevent sending two matching pageNames in a row
		//if (!pageDetails.s_abort) {
		//	clicks on page overwriting the stored value with this logic
		//
		//	repeatCall = !getValueOnce(sPageNameTemp, 'lastPg', 0); // this should prevent consecutive calls of same pageName. e.g. mobile 'select' screen nav, and confirmation screens as a way to serialise events
		//	if (/true/i.test(pageDetails.trackDedupe) && repeatCall) {
		//		s.abort = true;
		//	}
		//}


		// only compare to the cookie value that was read, don't write at the same time (with getValOnce)
		// this logic needs to match logic in trackPage function to prevent impressions being collected etc.

		//if (/true/i.test(pageDetails.trackDedupe) && lastSentPage === sPageNameTemp) {
		//if ((/true/i.test(pageDetails.trackDedupe) && lastSentPage === sPageNameTemp) || (/true/i.test(pageDetails.trackOnce) && s.w_pageTracked(sPageNameTemp))) {
		//if ((/true/i.test(pageDetails.trackDedupe) && lastSentPage === sPageNameTemp) || ((/true/i.test(pageDetails.trackOnce) && s.w_pageTracked(sPageNameTemp)) || s.w_globalDrop(pageDetails))) {
		// check if this page should be fired or has met a condition to drop
		//if (pageDetails._drop) {
		//	s.abort = true;

		//s.w_pgTrkStatus = 'blocked';
		//s.c_w('impTmp', 0, new Date(0)); // clear any tmp banners of aborted pages
		//}

		// populate s.pageName from local var
		//s2.pageName = sPageNameTemp;
		digital['dd.pageName'] = sPageNameTemp;

		/******** Don't set any variables after this line ********/

		// for success messages etc. option to use pageDetails process, but send as link
		//if(pageDetails.trackAsLink==='true'){
/*
		if (/true/i.test(pageDetails.trackAsLink)) {
			//console.log('Tracking as link - '+sPageNameTemp);
			// prevent looping
			delete pageDetails.trackAsLink;

			// make tracking request as link instead of page
			// filtered pageURL or custom passed property into href of custom link 'location' object
			s2.lnk = {
				href : pageDetails.s_linkUrl || s2.pageURL
			};
			s2.w_trackLinkCustom(true, 'D="page:"+pageName', 'o', s2); // default values if no overrides set in pageDetails

			// abort initial page tracking
			s2.abort = true;
		}

		// set override values for trackLinkCustom and 'trackAsLink' calls, before final s_ overrides
		for (prpty in pageDetails) {
			if (pageDetails.hasOwnProperty(prpty)) {
				if (/^temp_/.test(prpty)) {
					//ABU sq[prpty.replace(/^temp_/, '')] = pageDetails[prpty];
					s2[prpty.replace(/^temp_/, '')] = pageDetails[prpty];
					// always remove all temp_ overrides - they are only for s.w_trackLinkCustom and shouldnt persist on the page (in s.w_tempPageDetails)
					delete pageDetails[prpty]; // only allow overrides to fire once, otherwise they persist to all subsequent calls (links, single-page-form pages etc.) // may not need to delete these as obj is temp, not on page... Needed to delete these for normal links following full custom links (the custom _temp details remain in the temp object for page name etc.) zzzzz test this change
				}
			}
		}
		for (prpty in pageDetails) {
			if (pageDetails.hasOwnProperty(prpty)) {
				if (/^s_/.test(prpty)) {
					s2[prpty.replace(/^s_/, '')] = pageDetails[prpty];
					if (prpty !== 's_pageName') {
						// remove all overrides except s_pageName (to identify page name for custom links). Other valus may impact link tracking vars. zzzzz test this change
						delete pageDetails[prpty]; // only allow overrides (e.g. s_abort) to fire once, otherwise they persist to all subsequent calls (links, single-page-form pages etc.) // may not need to delete these as obj is temp, not on page
					}
					trackingOverrideEnabled = true;
				}
			}
		}
		if (trackingOverrideEnabled) {
			// append override when in use
			s2.prop39 += '+" (with override)"';
		}

		// set timers based on events being set/passed by logic or overrides (moved to this block to capture ALL overrides)
		s2.eVar31 = getTimeToCmplt(evtTimer(21, 22), 's_app_s_c', 365); // app start - complete
		//s.eVar32 = getTimeToCmplt(evtTimer(22, 47), 's_app_c_l', 365); // app complete - first login ... first login event removed...
		s2.eVar33 = getTimeToCmplt(evtTimer(46, 22), 's_app_l_c', 365); // login - app complete. eVar33 not required to be set - use events to determine timers

		// getTimeToComplete functions like getValOnce and will clear the timers as soon as the respective events are seen in s.events. The values should only be retrieved if they will actually be sent (i.e. not dom click or s.abort)
		//console.log('s.events = ' + s.events);
		//console.log('s.eVar32 = ' + s.eVar32);

		//s.prop31 = s.eVar31 ? 'D=v31' : '';
		//s.prop32 = s.eVar32 ? 'D=v32' : '';
		//s.prop33 = s.eVar33 ? 'D=v33' : '';
		s2.prop31 = dVar(31);
		//s.prop32 = dVar(32);
		s2.prop33 = dVar(33);

		// set logged in status based on event being set/passed by logic or override
		if (/\bevent46\b/i.test(s2.events)) {
			s2.eVar40 = 'logged in';
		}
*/
		// change any s object values async (in order of calls)
		//s.w_changeIf(pageDetails, true); // zzzzz enable to change any values with replace etc. for weird issues that may come up.
	


/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.9.0
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(q,v){if(!q)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.9.0";var m=window,l=m.Visitor;l.version=a.version;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._c="Visitor";a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=a;m.s_c_in++;a.ha={Da:[]};var t=m.document,i=l.Bb;i||(i=null);var D=l.Cb;D||(D=void 0);var j=l.La;j||(j=!0);var k=l.Ja;k||(k=!1);a.da=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.r=function(a,c){var b=
"0123456789",e="",f="",g,h,i=8,k=10,l=10;c===n&&(w.isClientSideMarketingCloudVisitorID=j);if(1==a){b+="ABCDEF";for(g=0;16>g;g++)h=Math.floor(Math.random()*i),e+=b.substring(h,h+1),h=Math.floor(Math.random()*i),f+=b.substring(h,h+1),i=16;return e+"-"+f}for(g=0;19>g;g++)h=Math.floor(Math.random()*k),e+=b.substring(h,h+1),0==g&&9==h?k=3:(1==g||2==g)&&10!=k&&2>h?k=10:2<g&&(k=10),h=Math.floor(Math.random()*l),f+=b.substring(h,h+1),0==g&&9==h?l=3:(1==g||2==g)&&10!=l&&2>h?l=10:2<g&&(l=10);return e+f};a.Pa=
function(){var a;!a&&m.location&&(a=m.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+t.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(t.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.h=i;a.J=function(a,c){try{"function"==typeof a?a.apply(m,c):a[1].apply(a[0],c)}catch(b){}};a.Va=function(d,c){c&&(a.h==i&&(a.h={}),a.h[d]==D&&(a.h[d]=[]),a.h[d].push(c))};a.q=function(d,c){if(a.h!=i){var b=a.h[d];if(b)for(;0<b.length;)a.J(b.shift(),
c)}};a.v=function(a,c,b,e){b=encodeURIComponent(c)+"="+encodeURIComponent(b);c=x.ub(a);a=x.lb(a);if(-1===a.indexOf("?"))return a+"?"+b+c;var f=a.split("?"),a=f[0]+"?",e=x.Ya(f[1],b,e);return a+e+c};a.Oa=function(a,c){var b=RegExp("[\\?&#]"+c+"=([^&#]*)").exec(a);if(b&&b.length)return decodeURIComponent(b[1])};a.Ua=function(){var d=i,c=m.location.href;try{var b=a.Oa(c,r.Y);if(b)for(var d={},e=b.split("|"),c=0,f=e.length;c<f;c++){var g=e[c].split("=");d[g[0]]=decodeURIComponent(g[1])}return d}catch(h){}};
a.Ma=function(){var d=a.Ua();if(d){var c=d[n],b=a.setMarketingCloudVisitorID;c&&c.match(r.u)&&b(c);a.j(s,-1);d=d[p];c=a.setAnalyticsVisitorID;d&&d.match(r.u)&&c(d)}};a.Ta=function(d){function c(d){x.ob(d)&&a.setCustomerIDs(d)}function b(d){d=d||{};a._supplementalDataIDCurrent=d.supplementalDataIDCurrent||"";a._supplementalDataIDCurrentConsumed=d.supplementalDataIDCurrentConsumed||{};a._supplementalDataIDLast=d.supplementalDataIDLast||"";a._supplementalDataIDLastConsumed=d.supplementalDataIDLastConsumed||
{}}d&&d[a.marketingCloudOrgID]&&(d=d[a.marketingCloudOrgID],c(d.customerIDs),b(d.sdid))};a.l=i;a.Ra=function(d,c,b,e){c=a.v(c,"d_fieldgroup",d,1);e.url=a.v(e.url,"d_fieldgroup",d,1);e.m=a.v(e.m,"d_fieldgroup",d,1);w.d[d]=j;e===Object(e)&&e.m&&"XMLHttpRequest"===a.ja.C.D?a.ja.hb(e,b,d):a.useCORSOnly||a.ga(d,c,b)};a.ga=function(d,c,b){var e=0,f=0,g;if(c&&t){for(g=0;!e&&2>g;){try{e=(e=t.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{t.body&&(e=t.body)}catch(k){e=
0}if(e)for(g=0;!f&&2>g;){try{f=t.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,o.d[d]={requestStart:o.o(),url:c,sa:e,qa:o.wa(),ra:0},b&&(a.l==i&&(a.l={}),a.l[d]=setTimeout(function(){b(j)},e)),a.ha.Da.push(c))};a.Na=function(d){a.l!=i&&a.l[d]&&(clearTimeout(a.l[d]),a.l[d]=0)};a.ea=k;a.fa=k;a.isAllowed=function(){if(!a.ea&&(a.ea=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,
"T",1)))a.fa=j;return a.fa};a.b=i;a.c=i;var E=l.Tb;E||(E="MC");var n=l.Zb;n||(n="MCMID");var G=l.Ub;G||(G="MCCIDH");var J=l.Xb;J||(J="MCSYNCS");var H=l.Yb;H||(H="MCSYNCSOP");var I=l.Vb;I||(I="MCIDTS");var A=l.Wb;A||(A="MCOPTOUT");var C=l.Rb;C||(C="A");var p=l.Ob;p||(p="MCAID");var B=l.Sb;B||(B="AAM");var y=l.Qb;y||(y="MCAAMLH");var s=l.Pb;s||(s="MCAAMB");var u=l.$b;u||(u="NONE");a.L=0;a.ca=function(){if(!a.L){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&
(d+="|"+a.audienceManagerServerSecure);a.L=a.da(d)}return a.L};a.ia=k;a.f=function(){if(!a.ia){a.ia=j;var d=a.ca(),c=k,b=a.cookieRead(a.cookieName),e,f,g,h,l=new Date;a.b==i&&(a.b={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],g=b[d+1],1<e.length?(h=parseInt(e[1],10),e=0<e[1].indexOf("s")):(h=0,e=k),c&&(f==G&&(g=""),0<h&&(h=l.getTime()/1E3-60)),f&&g&&(a.e(f,g,1),0<h&&(a.b["expire"+
f]=h+(e?"s":""),l.getTime()>=1E3*h||e&&!a.cookieRead(a.sessionCookieName))))a.c||(a.c={}),a.c[f]=j}c=a.loadSSL?!!a.trackingServerSecure:!!a.trackingServer;if(!a.a(p)&&c&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(r.u)&&a.e(p,g))}};a.Xa=function(){var d=a.ca(),c,b;for(c in a.b)!Object.prototype[c]&&a.b[c]&&"expire"!=c.substring(0,6)&&(b=a.b[c],d+=(d?"|":"")+c+(a.b["expire"+c]?"-"+a.b["expire"+c]:"")+"|"+
b);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,c){return a.b!=i&&(c||!a.c||!a.c[d])?a.b[d]:i};a.e=function(d,c,b){a.b==i&&(a.b={});a.b[d]=c;b||a.Xa()};a.Qa=function(d,c){var b=a.a(d,c);return b?b.split("*"):i};a.Wa=function(d,c,b){a.e(d,c?c.join("*"):"",b)};a.Ib=function(d,c){var b=a.Qa(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return i};a.Kb=function(d,c,b){var e=i,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.Wa(d,e,b)};a.j=function(d,c,b){var e=
new Date;e.setTime(e.getTime()+1E3*c);a.b==i&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.c||(a.c={}),a.c[d]=j):a.c&&(a.c[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.ba=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=u)),!a||a!=u&&!a.match(r.u)))a="";return a};a.k=function(d,c){a.Na(d);a.i!=i&&(a.i[d]=k);o.d[d]&&(o.d[d].zb=o.o(),
o.I(d));w.d[d]&&w.Fa(d,k);if(d==E){w.isClientSideMarketingCloudVisitorID!==j&&(w.isClientSideMarketingCloudVisitorID=k);var b=a.a(n);if(!b){b="object"==typeof c&&c.mid?c.mid:a.ba(c);if(!b){if(a.B){a.getAnalyticsVisitorID(i,k,j);return}b=a.r(0,n)}a.e(n,b)}if(!b||b==u)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.k(B,c),a.B&&c.mid&&a.k(C,{id:c.id}));a.q(n,[b])}if(d==B&&"object"==typeof c){b=604800;c.id_sync_ttl!=D&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.a(y);
e||((e=c.d_region)||(e=c.dcs_region),e&&(a.j(y,b),a.e(y,e)));e||(e="");a.q(y,[e]);e=a.a(s);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.j(s,b),a.e(s,e);e||(e="");a.q(s,[e]);!c.error_msg&&a.A&&a.e(G,a.A)}if(d==C){b=a.a(p);b||((b=a.ba(c))?b!==u&&a.j(s,-1):b=u,a.e(p,b));if(!b||b==u)b="";a.q(p,[b])}a.idSyncDisableSyncs?z.xa=j:(z.xa=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,z.vb(b));if(c===Object(c)){var f;a.isAllowed()&&(f=a.a(A));f||(f=u,c.d_optout&&c.d_optout instanceof Array&&(f=c.d_optout.join(",")),
b=parseInt(c.d_ottl,10),isNaN(b)&&(b=7200),a.j(A,b,j),a.e(A,f));a.q(A,[f])}};a.i=i;a.s=function(d,c,b,e,f){var g="",h,k=x.nb(d);if(a.isAllowed()&&(a.f(),g=a.a(d,K[d]===j),a.disableThirdPartyCalls&&!g&&(d===n?(g=a.r(0,n),a.setMarketingCloudVisitorID(g)):d===p&&!k&&(g="",a.setAnalyticsVisitorID(g))),(!g||a.c&&a.c[d])&&(!a.disableThirdPartyCalls||k)))if(d==n||d==A?h=E:d==y||d==s?h=B:d==p&&(h=C),h){if(c&&(a.i==i||!a.i[h]))a.i==i&&(a.i={}),a.i[h]=j,a.Ra(h,c,function(b,c){if(!a.a(d))if(o.d[h]&&(o.d[h].timeout=
o.o(),o.d[h].mb=!!b,o.I(h)),c===Object(c)&&!a.useCORSOnly)a.ga(h,c.url,c.G);else{b&&w.Fa(h,j);var e="";d==n?e=a.r(0,n):h==B&&(e={error_msg:"timeout"});a.k(h,e)}},f);if(g)return g;a.Va(d,b);c||a.k(h,{id:u});return""}if((d==n||d==p)&&g==u)g="",e=j;b&&e&&a.J(b,[g]);return g};a._setMarketingCloudFields=function(d){a.f();a.k(E,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.B=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&
(a.B=j);var b=a.z("_setMarketingCloudFields");return a.s(n,b.url,d,c,b)}return""};a.Sa=function(){a.getAudienceManagerBlob()};l.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.w={};a.aa=k;a.A="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=D&&(e.authState=b.authState);a.w[c]=e}else a.w[c]={id:b};var d=a.getCustomerIDs(),e=a.a(G),f="";e||(e=0);for(c in d)Object.prototype[c]||
(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.A=a.da(f);a.A!=e&&(a.aa=j,a.Sa())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.w)Object.prototype[c]||(b=a.w[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=D?b.authState:l.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.k(C,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,
j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));var h={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),i=["s_c_il",a._in,"_set"+(b?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+
e+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields";h.m=f+"?"+e;h.na=i}h.url=g;return a.s(b?n:p,g,d,c,h)}}return""};a._setAudienceManagerFields=function(d){a.f();a.k(B,d)};a.z=function(d){var c=a.audienceManagerServer,b="",e=a.a(n),f=a.a(s,j),g=a.a(p),g=g&&g!=u?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||(i=b[h],g+="&d_cid_ic="+
encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?"%01"+i.authState:""));d||(d="_setAudienceManagerFields");c="http"+(a.loadSSL?"s":"")+"://"+c+"/id";e="d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.B?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];b=c+"?"+
e+"&d_cb=s_c_il%5B"+a._in+"%5D."+d;return{url:b,m:c+"?"+e,na:f}}return{url:b}};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,j)}));if(b)return b=a.z(),a.s(y,b.url,d,c,b)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=
a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,j)}));if(b){var b=a.z(),e=b.url;a.aa&&a.j(s,-1);return a.s(s,e,d,c,b)}}return""};a._supplementalDataIDCurrent="";a._supplementalDataIDCurrentConsumed={};a._supplementalDataIDLast="";a._supplementalDataIDLastConsumed={};a.getSupplementalDataID=function(d,c){!a._supplementalDataIDCurrent&&!c&&(a._supplementalDataIDCurrent=a.r(1));var b=a._supplementalDataIDCurrent;a._supplementalDataIDLast&&!a._supplementalDataIDLastConsumed[d]?
(b=a._supplementalDataIDLast,a._supplementalDataIDLastConsumed[d]=j):b&&(a._supplementalDataIDCurrentConsumed[d]&&(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=b=!c?a.r(1):"",a._supplementalDataIDCurrentConsumed={}),b&&(a._supplementalDataIDCurrentConsumed[d]=j));return b};l.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.z("_setMarketingCloudFields");return a.s(A,
b.url,d,c,b)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=l.OptOut.GLOBAL),(b=a.getOptOut(function(b){a.J(d,[b==l.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==l.OptOut.GLOBAL||0<=b.indexOf(c):i):k};a.appendVisitorIDsTo=function(d){for(var c=r.Y,b=[[n,a.a(n)],[p,a.a(p)]],e="",f=0,g=b.length;f<g;f++){var h=b[f],j=h[0],h=h[1];h!=i&&h!==u&&(e=e?e+="|":e,e+=j+"="+encodeURIComponent(h))}try{return a.v(d,c,e)}catch(k){return d}};var r={p:!!m.postMessage,Ia:1,$:864E5,Y:"adobe_mc",u:/^[0-9a-fA-F\-]+$/};
a.Db=r;a.la={postMessage:function(a,c,b){var e=1;c&&(r.p?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},T:function(a,c){var b;try{if(r.p)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",
b)}catch(e){}}};var x={M:function(){if(t.addEventListener)return function(a,c,b){a.addEventListener(c,function(a){"function"===typeof b&&b(a)},k)};if(t.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===i)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},
gb:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)},ub:function(a){var c=a.indexOf("#");return 0<c?a.substr(c):""},lb:function(a){var c=a.indexOf("#");return 0<c?a.substr(0,c):a},Ya:function(a,c,b){a=a.split("&");b=b!=i?b:a.length;a.splice(b,0,c);return a.join("&")},nb:function(d,c,b){if(d!==p)return k;c||(c=a.trackingServer);b||(b=a.trackingServerSecure);d=a.loadSSL?b:c;return"string"===typeof d&&d.length?0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net"):k},ob:function(a){return Boolean(a&&
a===Object(a))}};a.Jb=x;var L={C:function(){var a="none",c=j;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(c=k),0<Object.prototype.toString.call(window.Ab).indexOf("Constructor")&&(c=k));return{D:a,Mb:c}}(),ib:function(){return"none"===this.C.D?
i:new window[this.C.D]},hb:function(d,c,b){var e=this;c&&(d.G=c);try{var f=this.ib();f.open("get",d.m+"&ts="+(new Date).getTime(),j);"XMLHttpRequest"===this.C.D&&(f.withCredentials=j,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,i,"Response is not JSON");break a}}catch(b){e.n(d,b,"Error parsing response as JSON");
break a}try{for(var c=d.na,f=window,g=0;g<c.length;g++)f=f[c[g]];f(a)}catch(j){e.n(d,j,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();o.d[b]={requestStart:o.o(),url:d.m,sa:f.timeout,qa:o.wa(),ra:1};a.ha.Da.push(d.m)}catch(g){this.n(d,g,"try-catch")}},n:function(d,c,b){a.CORSErrors.push({Nb:d,error:c,description:b});d.G&&("ontimeout"===b?d.G(j):d.G(k,d))}};a.ja=L;var z={Ka:3E4,Z:649,Ha:k,id:i,S:[],P:i,va:function(a){if("string"===
typeof a)return a=a.split("/"),a[0]+"//"+a[2]},g:i,url:i,jb:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(t.location.href);this.g||(this.g="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.g+".demdex.net/dest5.html"+c;this.P=this.va(d);this.id="destination_publishing_iframe_"+this.g+"_"+a.idSyncContainerID;return d},ab:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(t.location.href);"string"===
typeof a.K&&a.K.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.P=this.va(a.K),this.url=a.K+d)},xa:i,ta:k,V:k,F:i,ac:i,tb:i,bc:i,U:k,H:[],rb:[],sb:[],za:r.p?15:100,Q:[],pb:[],oa:j,Ca:k,Ba:function(){return!a.idSyncDisable3rdPartySyncing&&(this.ta||a.Fb)&&this.g&&"nosubdomainreturned"!==this.g&&this.url&&!this.V},N:function(){function a(){e=document.createElement("iframe");e.sandbox="allow-scripts allow-same-origin";e.title="Adobe ID Syncing iFrame";
e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.tb=j;c();document.body.appendChild(e)}function c(){x.M(e,"load",function(){e.className="aamIframeLoaded";b.F=j;b.t()})}this.V=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.F=j,this.ya=e,this.t()):a();this.ya=e},t:function(d){var c=this;d===Object(d)&&(this.Q.push(d),this.wb(d));if((this.Ca||!r.p||this.F)&&this.Q.length)this.I(this.Q.shift()),
this.t();!a.idSyncDisableSyncs&&this.F&&this.H.length&&!this.U&&(this.Ha||(this.Ha=j,setTimeout(function(){c.za=r.p?15:150},this.Ka)),this.U=j,this.Ea())},wb:function(a){var c,b,e;if((c=a.ibs)&&c instanceof Array&&(b=c.length))for(a=0;a<b;a++)e=c[a],e.syncOnPage&&this.pa(e,"","syncOnPage")},I:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),x.gb(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?
"true":"false"],g.syncOnPage||(this.oa?this.ma(h.join("|")):g.fireURLSync&&this.pa(g,h.join("|")));this.pb.push(a)},pa:function(d,c,b){var e=(b="syncOnPage"===b?j:k)?H:J;a.f();var f=a.a(e),g=k,h=k,i=Math.ceil((new Date).getTime()/r.$);f?(f=f.split("*"),h=this.xb(f,d.id,i),g=h.eb,h=h.fb,(!g||!h)&&this.ua(b,d,c,f,e,i)):(f=[],this.ua(b,d,c,f,e,i))},xb:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=
i&&(a.splice(h,1),h--);return{eb:e,fb:f}},qb:function(a){if(a.join("*").length>this.Z)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.Z;)a.shift()},ua:function(d,c,b,e,f,g){var h=this;if(d){if("img"===c.tag){var d=c.url,b=a.loadSSL?"https:":"http:",j,k,l;for(e=0,j=d.length;e<j;e++){k=d[e];l=/^\/\//.test(k);var m=new Image;x.M(m,"load",function(b,c,d,e){return function(){h.S[b]=i;a.f();var g=a.a(f),j=[];if(g){var g=g.split("*"),k,
l,m;for(k=0,l=g.length;k<l;k++)m=g[k],m.match("^"+c.id+"-")||j.push(m)}h.Ga(j,c,d,e)}}(this.S.length,c,f,g));m.src=(l?b:"")+k;this.S.push(m)}}}else this.ma(b),this.Ga(e,c,f,g)},ma:function(d){var c=encodeURIComponent;this.H.push((a.Gb?c("---destpub-debug---"):c("---destpub---"))+d)},Ga:function(d,c,b,e){d.push(c.id+"-"+(e+Math.ceil(c.ttl/60/24)));this.qb(d);a.e(b,d.join("*"))},Ea:function(){var d=this,c;this.H.length?(c=this.H.shift(),a.la.postMessage(c,this.url,this.ya.contentWindow),this.rb.push(c),
setTimeout(function(){d.Ea()},this.za)):this.U=k},T:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.oa="true"===c[1]?j:k,this.Ca=j,this.t()),this.sb.push(a))},vb:function(d){if(this.url===i||d.subdomain&&"nosubdomainreturned"===this.g)this.g="string"===typeof a.ka&&a.ka.length?a.ka:d.subdomain||"",this.url=this.jb();d.ibs instanceof Array&&d.ibs.length&&(this.ta=j);this.Ba()&&(a.idSyncAttachIframeOnWindowLoad?
(l.X||"complete"===t.readyState||"loaded"===t.readyState)&&this.N():this.Za());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.t(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},$a:function(d,c){return a.Hb||!d||c-d>r.Ia},Za:function(){function a(){c.V||(document.body?c.N():setTimeout(a,30))}var c=this;a()}};a.Eb=z;a.timeoutMetricsLog=[];var o={cb:window.performance&&window.performance.timing?1:0,Aa:window.performance&&window.performance.timing?
window.performance.timing:i,W:i,O:i,d:{},R:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var c=[],b=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&c.push(b(e)+"="+b(d[e]));d="http"+(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+c.join("&")+"&d_orgid="+b(a.marketingCloudOrgID)+"&d_timingapi="+this.cb+"&d_winload="+this.kb()+"&d_ld="+this.o();(new Image).src=d;a.timeoutMetricsLog.push(d)}},kb:function(){this.O===i&&(this.O=
this.Aa?this.W-this.Aa.navigationStart:this.W-l.bb);return this.O},o:function(){return(new Date).getTime()},I:function(a){var c=this.d[a],b={};b.d_visid_stg_timeout_captured=c.sa;b.d_visid_cors=c.ra;b.d_fieldgroup=a;b.d_settimeout_overriden=c.qa;c.timeout?c.mb?(b.d_visid_timedout=1,b.d_visid_timeout=c.timeout-c.requestStart,b.d_visid_response=-1):(b.d_visid_timedout="n/a",b.d_visid_timeout="n/a",b.d_visid_response="n/a"):(b.d_visid_timedout=0,b.d_visid_timeout=-1,b.d_visid_response=c.zb-c.requestStart);
b.d_visid_url=c.url;l.X?this.send(b):this.R.push(b);delete this.d[a]},yb:function(){for(var a=0,c=this.R.length;a<c;a++)this.send(this.R[a])},wa:function(){return"function"===typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.Lb=o;var w={isClientSideMarketingCloudVisitorID:i,MCIDCallTimedOut:i,AnalyticsIDCallTimedOut:i,AAMIDCallTimedOut:i,d:{},Fa:function(a,c){switch(a){case E:c===k?this.MCIDCallTimedOut!==j&&(this.MCIDCallTimedOut=k):this.MCIDCallTimedOut=c;break;
case C:c===k?this.AnalyticsIDCallTimedOut!==j&&(this.AnalyticsIDCallTimedOut=k):this.AnalyticsIDCallTimedOut=c;break;case B:c===k?this.AAMIDCallTimedOut!==j&&(this.AAMIDCallTimedOut=k):this.AAMIDCallTimedOut=c}}};a.isClientSideMarketingCloudVisitorID=function(){return w.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return w.MCIDCallTimedOut};a.AnalyticsIDCallTimedOut=function(){return w.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return w.AAMIDCallTimedOut};a.idSyncGetOnPageSyncInfo=
function(){a.f();return a.a(H)};0>q.indexOf("@")&&(q+="@AdobeOrg");a.marketingCloudOrgID=q;a.cookieName="AMCV_"+q;a.sessionCookieName="AMCVS_"+q;a.cookieDomain=a.Pa();a.cookieDomain==m.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=m.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";var K={};K[y]=j;K[s]=j;a.Ma();if(v&&"object"==typeof v){for(var F in v)!Object.prototype[F]&&(a[F]=v[F]);a.idSyncContainerID=
a.idSyncContainerID||0;a.f();L=a.a(I);F=Math.ceil((new Date).getTime()/r.$);!a.idSyncDisableSyncs&&z.$a(L,F)&&(a.j(s,-1),a.e(I,F));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob();a.Ta(a.serverState)}if(!a.idSyncDisableSyncs){z.ab();x.M(window,"load",function(){l.X=j;o.W=o.o();o.yb();var a=z;a.Ba()&&a.N()});try{a.la.T(function(a){z.T(a.data)},z.P)}catch(M){}}}
Visitor.getInstance=function(q,v){var a,m=window.s_c_il,l;0>q.indexOf("@")&&(q+="@AdobeOrg");if(m)for(l=0;l<m.length;l++)if((a=m[l])&&"Visitor"==a._c&&a.marketingCloudOrgID==q)return a;return new Visitor(q,v)};(function(){function q(){v.X=a}var v=window.Visitor,a=v.La,m=v.Ja;a||(a=!0);m||(m=!1);window.addEventListener?window.addEventListener("load",q):window.attachEvent&&window.attachEvent("onload",q);v.bb=(new Date).getTime()})();

//initialize AppMeasurement
var s3_account="wbg-banking-dev"
var s3=s3_gi(s3_account)
/******** VISITOR ID SERVICE CONFIG - REQUIRES VisitorAPI.js ********/
var visitor = Visitor.getInstance("3A4B7BAF56F01DA67F000101@AdobeOrg", {
	trackingServer: "westpacbankinggroup.sc.omtrdc.net", // same as s.trackingServer
	trackingServerSecure: "westpacbankinggroup.sc.omtrdc.net", // same as s.trackingServerSecure
	cookieDomain: (/[0-9]{1,3}$/i).test(location.hostname)? location.hostname : location.hostname.split('.').slice(1).join('.')
});
s3.visitor=Visitor.getInstance("3A4B7BAF56F01DA67F000101@AdobeOrg")
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s3.charSet="UTF-8"
s3.cookieDomainPeriods=3
/* Conversion Config */
s3.currencyCode="AUD"
/* Link Tracking Config */
s3.trackDownloadLinks=true
s3.trackExternalLinks=true
s3.trackInlineStats=true
s3.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s3.linkInternalFilters="javascript:,movingtoaustralia.westpac.asia,westpac.com.au,movingtoaustralia.westpac.co.nz,movingtoaustralia.westpac.co.uk"
s3.linkLeaveQueryString=false
s3.linkTrackVars="None"
s3.linkTrackEvents="None"

/* uncomment below to use doPlugins */
s3.usePlugins=true
function s_doPlugins(s3) {

var crossVisitPrtcptn = s3.crossVisitParticipation,
pdPreImprs = pageDetails.preImprs,
channelManagerKeywords,
channelManagerSearchType = false,
dVar = s3.w_dVar,
pidQuerystring;

s3.pageName = digital['dd.pageName'];
s3.eVar21 = pageNameDynamicVariable; // pageName eVar
// hierarchy
s3.hier1 = pageNameDynamicVariable;

s3.eVar25 = s3.marketingCloudVisitorID;

// use implementation plug-ins that are defined below
// in this section. For example, if you copied the append
// list plug-in code below, you could call:
// s.events=s.apl(s.events,"event1",",",1);

	if (typeof util.w_wtT.complete === 'function') {
		util.w_wtT.complete(s3);
	}
}
s3.doPlugins=s_doPlugins

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/

s3.visitorNamespace="westpacbankinggroup"
s3.trackingServer="westpacbankinggroup.sc.omtrdc.net"
s3.trackingServerSecure= "westpacbankinggroup.sc.omtrdc.net" // same as s.trackingServerSecure
console.log(typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");

/************************** PLUGINS SECTION *************************/

// copy and paste implementation plug-ins here - See "Implementation Plug-ins" @
// https://marketing.adobe.com/resources/help/en_US/sc/implement/#Implementation_Plugins
// Plug-ins can then be used in the s_doPlugins(s) function above 

/*
* Plugin: Compatibility v1.0.
*/
s3.wd=window;
s3.fl=new Function("x","l",""
+"return x?(''+x).substring(0,l):x;");
// JS 1.1 split
s3.split = function (l, d) {
	return l ? l.split(d) : [];
};
/*
 * Utility Function: p_c
 */
s3.p_c = function (v, c) {
	var x = v.indexOf('=');
	return c.toLowerCase() == v.substring(0, x < 0 ? v.length : x).toLowerCase() ? v : 0;
};
/*
 * s.join: 1.0 - Joins an array into a string
 */
s3.join = function (v, p) {
	var s3 = this,
	x,
	f,
	b,
	d,
	w,
	str;
	if (p) {
		f = p.front || '';
		b = p.back || '';
		d = p.delim || '';
		w = p.wrap || '';
	}
	str = '';
	for (x = 0; x < v.length; x++) {
		if (typeof(v[x]) == 'object') {
			str += s3.join(v[x], p);
		} else {
			str += w + v[x] + w;
		}
		if (x < v.length - 1) {
			str += d;
		}
	}
	return f + str + b;
};
/*
 * Plugin Utility: pt - runs function in f argument against list of
 * variables declared in x (delimited by d), with a as an optional
 * argument to be included in f function call
 */
s3.pt=new Function("x","d","f","a",""
+"var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t"
+".substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri"
+"ng(z,x.length);t=z<x.length?t:''}return'';");


// only set prop to dynamic copy if eVar has a value to reduce pixel length
s3.w_dVar = function (id) {
	return s3['eVar' + id] ? 'D=v' + id : '';
};
/*
 * Cookie Combining Utility v.5
 */

if(!s3.__ccucr)
{
    s3.c_rr = s3.c_r;
    s3.__ccucr = true;
    function c_r(k)
    {
        var s = this, d = new Date, v = s3.c_rr(k), c = s3.c_rspers(), i, m, e;
        if(v) return v; k = s3.escape ? s3.escape(k) : encodeURIComponent(k);
        i = c.indexOf(' ' + k + '='); c = i < 0 ? s3.c_rr('s_sess') : c;
        i = c.indexOf(' ' + k + '='); m = i < 0 ? i : c.indexOf('|', i);
        e = i < 0 ? i : c.indexOf(';', i); m = m > 0 ? m : e;
        v = i < 0 ? '' : s3.unescape ? s3.unescape(c.substring(i + 2 + k.length, m < 0 ? c.length : m)) : decodeURIComponent(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
        return v;
    }
    function c_rspers()
    {
        var s = this, cv = s3.c_rr("s_pers"), date = new Date().getTime(), expd = null, cvarr = [], vcv = "";
        if(!cv) return vcv; cvarr = cv.split(";"); for(var i = 0, l = cvarr.length; i < l; i++)  { expd = cvarr[i].match(/\|([0-9]+)$/);
        if(expd && parseInt(expd[1]) >= date) { vcv += cvarr[i] + ";"; } } return vcv;
    }
    s3.c_rspers = c_rspers;
    s3.c_r = s3.cookieRead = c_r;
}
if(!s3.__ccucw)
{
    s3.c_wr = s3.c_w;
    s3.__ccucw = true;
    function c_w(k, v, e)
    {
        var s3 = this, d = new Date, ht = 0, pn = 's_pers', sn = 's_sess', pc = 0, sc = 0, pv, sv, c, i, t, f;
        d.setTime(d.getTime() - 60000); if(s3.c_rr(k)) s3.c_wr(k, '', d); k = s3.escape ? s3.escape(k) : encodeURIComponent(k);
        pv = s3.c_rspers(); i = pv.indexOf(' ' + k + '='); if(i > -1) { pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1); pc = 1; }
        sv = s3.c_rr(sn); i = sv.indexOf(' ' + k + '='); if(i > -1) { sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
        sc = 1; } d = new Date; if(e) { if(e == 1) e = new Date, f = e.getYear(), e.setYear(f + 5 + (f < 1900 ? 1900 : 0));
        if(e.getTime() > d.getTime()) {  pv += ' ' + k + '=' + (s3.escape ? s3.escape(v) : encodeURIComponent(v)) + '|' + e.getTime() + ';';
        pc = 1; } } else { sv += ' ' + k + '=' + (s3.escape ? s3.escape(v) : encodeURIComponent(v)) + ';';
        sc = 1; } sv = sv.replace(/%00/g, ''); pv = pv.replace(/%00/g, ''); if(sc) s3.c_wr(sn, sv, 0);
        if(pc) { t = pv; while(t && t.indexOf(';') != -1) { var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
        t = t.substring(t.indexOf(';') + 1); ht = ht < t1 ? t1 : ht; } d.setTime(ht); s3.c_wr(pn, pv, d); }
        return v == s3.c_r(s3.unescape ? s3.unescape(k) : decodeURIComponent(k));
    }
    s3.c_w = s3.cookieWrite = c_w;
}


/*
 * Plugin channelManager v3.01 - Tracking External Traffic
 */
s3.channelManager = function (a, b, c, d, e, f, g) {
	var s3 = this,
	h = new Date,
	i = 0,
	j,
	k,
	l,
	m,
	n,
	o,
	p,
	q,
	r,
	t,
	u,
	v,
	w,
	x,
	y,
	z,
	A,
	B,
	C,
	D,
	E,
	F,
	G,
	H,
	I,
	J,
	K,
	L,
	M,
	N,
	O,
	P,
	Q,
	R,
	S,
	T,
	U,
	V;
	U = s3.getQueryParam ? 1 : 0;
	V = s3.repl ? 1 : 0;
	h.setTime(h.getTime() + 1800000);
	if (e) {
		i = 1;
		if (s3.c_r(e))
			i = 0;
		if (!s3.c_w(e, 1, h))
			s3.c_w(e, 1, 0);
		if (!s3.c_r(e))
			i = 0;
		if (f && s3.c_r('s_tbm' + f))
			i = 0;
	}
	j = s3.referrer ? s3.referrer : document.referrer;
	j = decodeURIComponent(j.toLowerCase());
	if (!j)
		k = 1;
	else {
		l = j.indexOf('?') > -1 ? j.indexOf('?') : j.length;
		m = j.substring(0, l);
		n = j.split('/');
		n = n[2].split('?');
		o = n[0].toLowerCase();
		p = s3.linkInternalFilters.toLowerCase();
		p = p.split(',');
		for (q = 0; q < p.length; q++) {
			r = o.indexOf(p[q]) == -1 ? '' : j;
			if (r)
				break;
		}
	}
	if (!r && !k) {
		t = j;
		u = o;
		w = 'Other Natural Referrers';
		v = w + ' ' + o;
		x = s3.seList + '>' + s3._extraSearchEngines;
		if (d == 1) {
			m = V ? s3.repl(m, 'oogle', '%') : s3.replace(m, 'oogle', '%');
			m = V ? s3.repl(m, 'ahoo', '^') : s3.replace(m, 'ahoo', '^');
			j = V ? s3.repl(j, 'as_q', '*') : s3.replace(j, 'as_q', '*');
		}
		y = x.split('>');
		for (z = 0; z < y.length; z++) {
			A = y[z];
			A = A.split('|');
			B = A[0].split(',');
			for (C = 0; C < B.length; C++) {
				D = m.indexOf(B[C]);
				if (D > -1) {
					if (A[2])
						E = v = A[2];
					else
						E = o;
					if (d == 1) {
						E = V ? s3.repl(E, '#', ' - ') : s3.replace(E, '#', ' - ');
						j = V ? s3.repl(j, '*', 'as_q') : s3.replace(j, '*', 'as_q');
						E = V ? s3.repl(E, '^', 'ahoo') : s3.replace(E, '^', 'ahoo');
						E = V ? s3.repl(E, '%', 'oogle') : s3.replace(E, '%', 'oogle');
					}
					F = A[1].split(',');
					for (G = 0; G < F.length; G++) {
						if (j.indexOf(F[G] + '=') > -1 || j.indexOf('https://www.google.') == 0 || j.indexOf('http://r.search.yahoo.com') == 0)
							H = 1;
						I = U ? s3.getQueryParam(F[G], '', j).toLowerCase() : s3.Util.getQueryParam(F[G], j).toLowerCase();
						if (H || I)
							break;
					}
				}
				if (H || I)
					break;
			}
			if (H || I)
				break;
		}
	}
	if (!r || g != '1') {
		J = a.split(',');
		for (var q in J) {
			if (J.hasOwnProperty(q)) {
				if (U ? s3.getQueryParam(J[q]) : s3.Util.getQueryParam(J[q])) {
					T = T ? T + b + (U ? s3.getQueryParam(J[q]) : s3.Util.getQueryParam(J[q])) : (U ? s3.getQueryParam(J[q]) : s3.Util.getQueryParam(J[q]));
				}
			}
		}
		if (T) {
			v = T;
			if (E)
				w = 'Paid Search';
			else
				w = 'Unknown Paid Channel';
		}
		if (!T && E && H) {
			w = 'Natural Search';
			v = w + ' ' + E;
		}
	}
	if (i && k && !T)
		t = u = v = w = 'Typed/Bookmarked';
	J = s3._channelDomain;
	if (J && o && !r) {
		K = J.split('>');
		for (L = 0; L < K.length; L++) {
			M = K[L] ? K[L].split('|') : '';
			N = M[1] ? M[1].split(',') : '';
			O = N.length;
			for (P = 0; P < O; P++) {
				Q = N[P].toLowerCase();
				R = ('/' + o).indexOf(Q);
				if (R > -1) {
					w = M[0];
					break;
				}
			}
			if (R > -1)
				break;
		}
	}
	J = s3._channelParameter;
	if (J) {
		K = J.split('>');
		for (L = 0; L < K.length; L++) {
			M = K[L] ? K[L].split('|') : '';
			N = M[1] ? M[1].split(',') : '';
			O = N.length;
			for (P = 0; P < O; P++) {
				R = U ? s3.getQueryParam(N[P]) : s3.Util.getQueryParam(N[P]);
				if (R) {
					w = M[0];
					break;
				}
			}
			if (R)
				break;
		}
	}
	J = s3._channelPattern;
	if (J) {
		K = J.split('>');
		for (L = 0; L < K.length; L++) {
			M = K[L] ? K[L].split('|') : '';
			N = M[1] ? M[1].split(',') : '';
			O = N.length;
			for (P = 0; P < O; P++) {
				Q = N[P].toLowerCase();
				R = T ? T.toLowerCase() : '';
				S = R.indexOf(Q);
				if (S == 0) {
					w = M[0];
					break;
				}
			}
			if (S == 0)
				break;
		}
	}
	S = w ? T + u + w + I : '';
	c = c ? c : 'c_m';
	if (c != '0')
		S = util.getValOnce(S, c, 0); //getValOnce move to util 
	if (S) {
		s3._campaignID = T ? T : 'n/a';
		s3._referrer = t ? t : 'n/a';
		s3._referringDomain = u ? u : 'n/a';
		s3._campaign = v ? v : 'n/a';
		s3._channel = w ? w : 'n/a';
		s3._partner = E ? E : 'n/a';
		s3._keywords = H ? I ? I : 'Keyword Unavailable' : 'n/a';
		if (f && w != 'Typed/Bookmarked') {
			h.setTime(h.getTime() + f * 86400000);
			s3.c_w('s_tbm' + f, 1, h);
		}
	} else
		s3._campaignID = s3._referrer = s3._referringDomain = s3._campaign = s3._channel = s3._partner = s3._keywords = '';
}
/* Top 130 - Grouped */
s3.seList="google.,googlesyndication.com,.googleadservices.com|q,as_q|"
+"Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask"
+".co|q,ask|Ask>search.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,"
+"altavista.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>w"
+"ebcrawler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>"
+"blekko.com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>goduckg"
+"o.com|q|GoDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>baid"
+"u.com|word,wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq"
+">myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Nav"
+"er>netscape.com|query,search|Netscape Search>reference.com|q|Refere"
+"nce.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.ti"
+"scali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Y"
+"andex.ru>optimum.net|q|Optimum Search>search.earthlink.net|q|Earthl"
+"ink>search.comcast.net|q|Comcast>libero.it|query|libero.it>excite.c"
+"o|search|Excite>mail.ru|q|Mail.ru>isearch.avg.com|q|AVG>msn.com|q|M"
+"SN>seznam.cz|q|seznam.cz>so.com|q|so.com>ixquick.com|query|ixquick."
+"com>sogou.com|query|sogou.com>360.cn|q|360.cn";

/*
 * Plug-in: crossVisitParticipation v1.7
 */
s3.crossVisitParticipation = function (v, cn, ex, ct, dl, ev, dv) {
	var s3 = this,
	ce,
	u,
	x,
	diff,
	q,
	z,
	ay,
	ea,
	arry = [],
	a = [],
	c,
	g,
	h = [],
	e,
	start,
	td,
	data,
	r;
	if (!s3.c_r) {
		s3 = window.s3; // added alternate for when called outside of this scope
	}
	if (typeof dv === 'undefined') {
		dv = 0;
	}
	if (s3.events && ev) {
		ay = s3.split(ev, ',');
		ea = s3.split(s3.events, ',');
		for (u = 0; u < ay.length; u++) {
			for (x = 0; x < ea.length; x++) {
				if (ay[u] == ea[x]) {
					ce = 1;
				}
			}
		}
	}
	if (!v || v == '') {
		if (ce) {
			s3.c_w(cn, '');
		}
		return '';
	}
	v = escape(v);
	c = s3.c_r(cn);
	g = 0;
	if (c && c != '') {
		arry = s3.split(c, '],[');
		for (q = 0; q < arry.length; q++) {
			z = arry[q];
			z = s3.repl(z, '[', '');
			z = s3.repl(z, ']', '');
			z = s3.repl(z, '\'', '');
			arry[q] = s3.split(z, ',');
		}
	}
	e = new Date();
	e.setFullYear(e.getFullYear() + 5);
	if (dv == 0 && arry.length > 0 && arry[arry.length - 1][0] == v) {
		arry[arry.length - 1] = [v, new Date().getTime()];
	} else {
		arry[arry.length] = [v, new Date().getTime()];
	}
	start = arry.length - ct < 0 ? 0 : arry.length - ct;
	td = new Date();
	for (x = start; x < arry.length; x++) {
		diff = Math.round((td.getTime() - arry[x][1]) / 86400000);
		if (diff < ex) {
			h[g] = unescape(arry[x][0]);
			a[g] = [arry[x][0], arry[x][1]];
			g++;
		}
	}
	data = s3.join(a, {
			delim : ',',
			front : '[',
			back : ']',
			wrap : '\''
		});
	s3.c_w(cn, data, e);
	r = s3.join(h, {
			delim : dl
		});
	if (ce) {
		s3.c_w(cn, '');
	}
	return r;
};

// track a page load
s3.w_trackPage = function (details) {
//s3.contextData = util.cleanJSON (digital);
s3.contextData = digital;
//s3.contextData['dd'] = dd;
//s3.contextData.dd = JSON.stringify(dd);
	//s3.contextData.dd = JSON.stringify(dd).replace(/\./g, '.'); // replace dots here to fix bug in Omniture debugger context data display
	s3.t();
	if (digital._drop) {
		util.cookieWrite('lastPg', s3.pageName, new Date(+new Date() + (24 * 60 * 60 * 1000))); 
	}
}

// External Campaigns
//if(!s.campaign){
//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
s3.campaign = getValueOnce(lowerCaseVal(getQuerystringParam('cid', '', fullLocObj.href)), 's3_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
//}
if (s3.campaign) {
	s3.eVar16 = 'D=v0';
	s3.eVar17 = 'D=v0';
	s3.eVar18 = s3.crossVisitParticipation(s3.campaign, 's_ev18', '30', '5', '>', 'event22'); // this is cleared every time event22 fires. i.e. Application Complete step
}

//console.log('ORIG s.list2  = ' + s.list2); // impressions from banner cookie related to previous page, collected after it loaded
//console.log('pdPreImprs    = ' + pdPreImprs); // any other impressions passed for the current page after trackPage was called, but before it completed (and scanning links)
var pdPreImprs = pageDetails.preImprs;
pdPreImprs = pdPreImprs ? pdPreImprs.split(',') : [];
for (prpty = 0; prpty < pdPreImprs.length; prpty++) {
	s3.list2 = s3.apl(s3.list2, pdPreImprs[prpty], ',', 2);
}
//console.log('NEW s.list2   = ' + s.list2); // combined list of impressions for previous page
if (s3.list2) {
	//s3.w_addEvt(11);
	appendEvent(digital,'intImpressions');
}

// Internal banner clicks
pidQuerystring = lowerCaseVal(getQuerystringParam('pid', '', fullLocObj.href));
//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
s3.eVar22 = getValueOnce(pidQuerystring, 's3_pid', 30, 'm');
//}

// count every pid click for comparison to getValueOnce count
if (pidQuerystring) {
	//appendEvent(10);
	appendEvent(digital,'pidTotalClicks');
}

//if(s.eVar22&&!s.eVar65){
if (s3.eVar22) {
	//appendEvent(12);
	appendEvent(digital,'intClickThroughs');
	s3.eVar20 = s3.crossVisitParticipation(s3.eVar22, 's3_ev20', '30', '5', '>', 'event22');
}
//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
s3.eVar65 = getValueOnce(lowerCaseVal(getQuerystringParam('ref', '', fullLocObj.href)), 'refPrm', 30, 'm');
//}
// incoming links from AFS-group sites
//if(s.eVar22&&s.eVar65){
// ref is now just an additional parameter for tracking links from other sites
if (s3.eVar65) {
	//appendEvent(72);
	appendEvent(digital,'afs-group');
}
//else{
//	s.eVar65='';
//}

// Featured content - fid/wbcfrom - for secondary promo tracking (Patrick)
//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
s3.eVar60 = getValueOnce(lowerCaseVal(getQuerystringParam('fid', '', fullLocObj.href) || getQuerystringParam('wbcfrom', '', fullLocObj.href)), 'feat', 30, 'm');
//}
if (s3.eVar60) {
	//appendEvent(66);
	appendEvent(digital,'featuredContent');
	s3.prop60 = dVar(60);
}

// Combined Internal External Stack
if (s3.eVar22) {
	s3.eVar19 = s3.crossVisitParticipation(s3.eVar22, 's3_ev19', '30', '10', '>', 'event22');
}
if (s3.campaign) {
	s3.eVar19 = s3.crossVisitParticipation(s3.campaign, 's3_ev19', '30', '10', '>', 'event22');
}

// Paid/Natural Search Keyword
s3.prop18 = pageNameDynamicVariable; // set to just pageName as default
s3._channelParameter = 'Campaign|cid';
s3.channelManager('cid');

//channelManagerKeywords = cleanText(s._keywords || ''); // filter search keywords a bit - strip multiple spaces etc.
channelManagerKeywords = cleanText(s3._keywords); // filter search keywords a bit - strip multiple spaces etc.

if (s3._channel === 'Natural Search') {
	channelManagerSearchType = 'NS';
	// prop18 seo keywords and entry page
	s3.prop18 = 'D="' + channelManagerKeywords + '|"+pageName';
}
//if(s._channel==='Campaign'&&/^sem:/i.test(s._campaign)){ // if cid param, and value starts with 'sem:' (just check for any CID). confirm identifier for PPC tracking codes
if (s3._channel === 'Campaign' && channelManagerKeywords !== 'n/a') { // only if cid param exists and keywords are found, it's paid search. We may not have keywords if they are not passed by the search engine (usually for NS)
	channelManagerSearchType = 'PS';
}
if (channelManagerSearchType) {
	s3.eVar11 = channelManagerKeywords === 'n/a' ? 'Keyword Unavailable' : channelManagerKeywords;
	s3.prop11 = dVar(11);

	s3.eVar12 = s3.crossVisitParticipation(channelManagerSearchType + '|' + channelManagerKeywords, 's3_ev12', '30', '5', '>', 'event22');
}

/****************************** MODULES *****************************/

// copy and paste implementation modules (Media, Integrate) here
// AppMeasurement_Module_Media.js - Media Module, included in AppMeasurement zip
// AppMeasurement_Module_Integrate.js - Integrate Module, included in AppMeasurement zip

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/ 


/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.7.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="1.7.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Jb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.yb=function(a){try{console.log(a)}catch(b){}};a.Ha=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.pb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.pb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ha=function(c,b,d){if(a.Aa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,m=["webkitvisibilitychange",
"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ia)for(a.ia=1,d=0;d<m.length;d++)a.d.addEventListener(m[d],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&(a.ia=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ia||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.va();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Aa=1;a[d.m].apply(a,d.a);a.Aa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ha("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,m="";e=f="";if(a.lightProfileID)d=a.O,(m=a.lightTrackVars)&&(m=","+m+","+a.ma.join(",")+",");else{d=a.g;if(a.pe||
a.linkType)m=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(m=a[e].Hb,f=a[e].Gb));m&&(m=","+m+","+a.G.join(",")+",");f&&m&&(m+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!m||0<=m.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",m,p,k,w,n=0;"contextData"==c&&(c="c");if(b){for(m in b)if(!(Object.prototype[m]||e&&m.substring(0,e.length)!=e)&&b[m]&&(!d||0<=d.indexOf(","+(f?f+
".":"")+m+","))){k=!1;if(n)for(p=0;p<n.length;p++)m.substring(0,n[p].length)==n[p]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),p=b[m],e&&(m=m.substring(e.length)),0<m.length))if(k=m.indexOf("."),0<k)p=m.substring(0,k),k=(e?e:"")+p+".",n||(n=[]),n.push(k),g+=a.r(p,b,d,f,k);else if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=m.substring(0,4),w=m.substring(4),m){case "transactionID":m="xact";break;case "channel":m="ch";break;case "campaign":m=
"v0";break;default:a.Ha(w)&&("prop"==k?m="c"+w:"eVar"==k?m="v"+w:"list"==k?m="l"+w:"hier"==k&&(m="h"+w,p=p.substring(0,255)))}g+="&"+a.escape(m)+"="+a.escape(p)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.sb=function(){var c="",b,d,f,e,g,m,p,k,n="",r="",s=e="";if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.ma.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,r=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].Hb,r=a[e].Gb));
n&&(n=","+n+","+a.G.join(",")+",");r&&(r=","+r+",",n&&(n+=",events,"));a.events2&&(s+=(""!=s?",":"")+a.events2)}if(a.visitor&&1.5<=parseFloat(a.visitor.version)&&a.visitor.getCustomerIDs){e=q;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];
g=a[e];f=e.substring(0,4);m=e.substring(4);!g&&"events"==e&&s&&(g=s,s="");if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&
(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e=
"vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":s&&
(g+=(""!=g?",":"")+s);if(r)for(m=g.split(","),g="",f=0;f<m.length;f++)p=m[f],k=p.indexOf("="),0<=k&&(p=p.substring(0,k)),k=p.indexOf(":"),0<=k&&(p=p.substring(0,k)),0<=r.indexOf(","+p+",")&&(g+=(g?",":"")+m[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;
case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],n,e));g="";break;default:a.Ha(m)&&("prop"==f?e="c"+m:"eVar"==f?e="v"+m:"list"==f?e="l"+m:"hier"==f&&(e="h"+m,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Mb||"undefined"!=""+a.Cb&&"HTML"!=(""+a.Cb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==
b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Da=function(a){var b=a.href?a.href:"",d,f,e;d=b.indexOf(":");f=b.indexOf("?");e=b.indexOf("/");b&&(0>d||0<=f&&d>f||0<=e&&d>e)&&(f=a.protocol&&1<a.protocol.length?a.protocol:l.protocol?l.protocol:"",d=l.pathname.lastIndexOf("/"),b=(f?f+"//":"")+(a.host?a.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>d?0:d)+"/":"")+b);return b};a.L=function(c){var b=a.D(c),
d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Da(c),e)?{id:e.substring(0,100),type:g}:0};a.Kb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=
a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Bb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,m;a.na=1;d||(a.na=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var p=d.onclick?""+d.onclick:"";if(0<=p.indexOf(".tl(")||0<=p.indexOf(".trackLink("))d=0}}else a.na=1;!e&&d&&
(e=a.Da(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var n=0,r=0,q;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(p=e.toLowerCase(),g=p.indexOf("?"),m=p.indexOf("#"),0<=g?0<=m&&m<g&&(g=m):g=m,0<=g&&(p=p.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),m=0;m<g.length;m++)(q=g[m])&&p.substring(p.length-(q.length+1))=="."+q&&(f="d");if(a.trackExternalLinks&&!f&&(p=e.toLowerCase(),a.Ga(p)&&(a.linkInternalFilters||(a.linkInternalFilters=
k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),n=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(m=0;m<g.length;m++)q=g[m],0<=p.indexOf(q)&&(r=1);r?n&&(f="e"):n||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+
(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.tb=function(){var c=a.na,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,m,p,k,e=0;if(g)for(m=0;m<g.length;m++)p=g[m].split("="),f=a.unescape(p[0]).split(","),
p=a.unescape(p[1]),b[p]=f;f=a.account.split(",");m={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(m[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",m)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(p in b)if(!Object.prototype[p])for(k=0;k<f.length;k++)for(e&&(g=b[p].join(","),g==a.account&&(a.e+=("&"!=p.charAt(0)?"&":"")+p,b[p]=[],d=1)),m=0;m<b[p].length;m++)g=b[p][m],g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=p.charAt(0)?"&":"")+p+"&u=0"),b[p].splice(m,
1),d=1);c||(d=1);if(d){e="";m=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),m=1);for(p in b)!Object.prototype[p]&&0<m&&0<b[p].length&&(e+=(e?"&":"")+a.escape(b[p].join(","))+"="+a.escape(p),m--);a.cookieWrite("s_sq",e)}}}return c};a.ub=function(){if(!a.Fb){var c=new Date,b=r.location,d,f,e=f=d="",g="",m="",k="1.2",n=a.cookieWrite("s_cc","true",0)?"Y":"N",q="",s="";if(c.setUTCDate&&(k="1.3",(0).toPrecision&&(k="1.5",c=[],c.forEach))){k="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(k="1.7",
c.reduce&&(k="1.8",k.trim&&(k="1.8.1",Date.parse&&(k="1.8.2",Object.create&&(k="1.8.5")))))}catch(t){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;m=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),q=a.b.Lb(b)?"Y":"N"}catch(u){}try{a.b.addBehavior("#default#clientCaps"),s=a.b.connectionType}catch(x){}a.resolution=
d;a.colorDepth=f;a.javascriptVersion=k;a.javaEnabled=e;a.cookiesEnabled=n;a.browserWidth=g;a.browserHeight=m;a.connectionType=s;a.homepage=q;a.Fb=1}};a.P={};a.loadModule=function(c,b){var d=a.P[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.P[c]=a[c]=d;d.Xa=function(){return d.ab};d.bb=function(b){if(d.ab=b)a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.Xa,set:d.bb}):d._olc=1}catch(f){d._olc=
1}}b&&(a[c+"_onLoad"]=b,a.ha(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.P)if(!Object.prototype[b]&&(d=a.P[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.wb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>v)return 0}return 1};a.Q=
function(c,b){var d,f,e,g,m,k;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)if(g=f[e],(m=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(k in a[g])m[k]||(m[k]=a[g][k]);a[g]=m}};a.Qa=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.wa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ob=function(a){var b,d,f,e,g,k=0,p,n="",q="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(p=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==
e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&p)))){if((a=p.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?n+=(n?"&":"")+e:q+=(q?"&":"")+e;n&&q?p=n+"&"+q:q=""}d=253-(p.length-q.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+p}return a};
a.Wa=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.da=!1;a.I=!1;a.eb=function(){a.I=!0;a.j()};a.ba=!1;a.U=!1;a.$a=function(c){a.marketingCloudVisitorID=c;a.U=!0;a.j()};a.ea=!1;a.V=!1;a.fb=function(c){a.visitorOptedOut=c;a.V=!0;a.j()};a.Y=!1;
a.R=!1;a.Sa=function(c){a.analyticsVisitorID=c;a.R=!0;a.j()};a.aa=!1;a.T=!1;a.Ua=function(c){a.audienceManagerLocationHint=c;a.T=!0;a.j()};a.Z=!1;a.S=!1;a.Ta=function(c){a.audienceManagerBlob=c;a.S=!0;a.j()};a.Va=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.ca=!1;a.H=!1;a.va=function(){a.H=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.da||a.I||(a.Wa(a.eb)?a.I=!0:a.da=!0);if(a.da&&!a.I)return!1;b&&b.isAllowed()&&
(a.ba||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ba=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.$a]),a.marketingCloudVisitorID&&(a.U=!0)),a.ea||a.visitorOptedOut||!b.isOptedOut||(a.ea=!0,a.visitorOptedOut=b.isOptedOut([a,a.fb]),a.visitorOptedOut!=q&&(a.V=!0)),a.Y||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Y=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Sa]),a.analyticsVisitorID&&(a.R=!0)),a.aa||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||
(a.aa=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ua]),a.audienceManagerLocationHint&&(a.T=!0)),a.Z||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.Z=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ta]),a.audienceManagerBlob&&(a.S=!0)),c=a.ba&&!a.U&&!a.marketingCloudVisitorID,b=a.Y&&!a.R&&!a.analyticsVisitorID,d=a.aa&&!a.T&&!a.audienceManagerLocationHint,f=a.Z&&!a.S&&!a.audienceManagerBlob,e=a.ea&&!a.V,c=c||b||d||f||e?!1:!0);a.ca||a.H||(a.Va(a.va)?a.H=!0:a.ca=
!0);a.ca&&!a.H&&(c=!1);return c};a.o=q;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.jb=c;f.ib=b;f.gb=d;a.o==q&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.cb(),a.o!=q))for(;0<a.o.length;)c=a.o.shift(),c.ib.apply(c.jb,c.gb)};a.cb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.Ya=function(c){var b,d,f=q,e=q;if(!a.isReadyToTrack()){b=[];if(c!=q)for(d in f={},c)f[d]=c[d];e={};a.Qa(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,
a.track,b);return!0}return!1};a.qb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+
"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&(a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState()),!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)));a.p("_s");a.Ya(c)||(b&&a.Q(b),c&&(d={},a.Qa(d,0),a.Q(c)),a.wb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=
a.qb()),a.Bb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Ra||(a.referrer=r.document.referrer),a.Ra=1,a.referrer=a.ob(a.referrer),a.p("_g")),a.tb()&&!a.abort&&(a.ub(),g+=a.sb(),a.Ab(e,g),a.p("_t"),a.referrer=""))),c&&a.Q(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=
a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==
b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.Ab=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",k=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(k||(k=a.account,f=k.indexOf(","),0<=f&&(k=k.substring(0,f)),k=k.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=k+"."+e+"."+g+d);d=a.ssl?
"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Eb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.mb(d);a.ja()};a.Pa=/{(%?)(.*?)(%?)}/;a.Ib=RegExp(a.Pa.source,"g");a.nb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)if(o=c.dests[b],"string"==
typeof o.c&&"aa."==o.id.substr(0,3))for(var d=o.c.match(a.Ib),b=0;b<d.length;++b){match=d[b];var f=match.match(a.Pa),e="";"%"==f[1]&&"timezone_offset"==f[2]?e=(new Date).getTimezoneOffset():"%"==f[1]&&"timestampz"==f[2]&&(e=a.rb());o.c=o.c.replace(match,a.escape(e))}};a.rb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+
(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.ra={};a.doPostbacks=function(c){if("object"==typeof c)if(a.nb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b)dest=
c.dests[b],"object"==typeof dest&&"string"==typeof dest.c&&"string"==typeof dest.id&&"aa."==dest.id.substr(0,3)&&(a.ra[dest.id]=new Image,a.ra[dest.id].alt="",a.ra[dest.id].src=dest.c)};a.mb=function(c){a.i||a.vb();a.i.push(c);a.la=a.C();a.Na()};a.vb=function(){a.i=a.xb();a.i||(a.i=[])};a.xb=function(){var c,b;if(a.qa()){try{(b=k.localStorage.getItem(a.oa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.qa=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};
a.Ea=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ja=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.ua(),a.q))return;a.Fa=q;if(a.pa)a.la>a.N&&a.La(a.i),a.ta(500);else{var c=a.hb();if(0<c)a.ta(c);else if(c=a.Ba())a.q=1,a.zb(c),a.Db(c)}};a.ta=function(c){a.Fa||(c||(c=0),a.Fa=setTimeout(a.ja,c))};a.hb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Ka;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ba=function(){if(0<a.i.length)return a.i.shift()};
a.zb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.yb(b)}};a.Za=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var s;try{s=JSON.parse('{"x":"y"}')}catch(x){s=null}s&&"y"==s.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.W=function(a){return k.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.Db=function(c){var b,d,f;a.Za()&&2047<c.length&&("undefined"!=
typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.xa=!0:b=0));!b&&a.Oa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",
b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||(b.abort=function(){b.src=q}));b.za=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.ua=function(){b.za();a.lb();a.fa();a.q=0;a.ja();if(b.xa){b.xa=!1;try{a.doPostbacks(a.W(b.responseText))}catch(c){}}};b.onabort=b.onerror=b.Ca=function(){b.za();(a.trackOffline||a.pa)&&a.q&&a.i.unshift(a.kb);a.q=0;a.la>a.N&&a.La(a.i);a.fa();a.ta(500)};b.onreadystatechange=function(){4==
b.readyState&&(200==b.status?b.ua():b.Ca())};a.Ka=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ia)try{f.removeChild(a.Ia)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ia=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.ua():(a.trackOffline&&b.abort&&b.abort(),b.Ca()))},5E3);a.kb=c;a.B=k["s_i_"+
a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ga=setTimeout(a.fa,a.forcedLinkTrackingTimeout)};a.lb=function(){if(a.qa()&&!(a.Ja>a.N))try{k.localStorage.removeItem(a.oa()),a.Ja=a.C()}catch(c){}};a.La=function(c){if(a.qa()){a.Na();try{k.localStorage.setItem(a.oa(),k.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Na=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>
a.offlineLimit;)a.Ba()}};a.forceOffline=function(){a.pa=!0};a.forceOnline=function(){a.pa=!1};a.oa=function(){return a.offlineFilename+"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ga=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Eb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.Q(d);if(d.lmq)for(b=
0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,
getQueryParam:function(c,b,d){var f;b||(b=a.pageURL?a.pageURL:k.location);d||(d="&");return c&&b&&(b=""+b,f=b.indexOf("?"),0<=f&&(b=d+b.substring(f+1)+d,f=b.indexOf(d+c+"="),0<=f&&(b=b.substring(f+d.length+c.length+1),f=b.indexOf(d),0<=f&&(b=b.substring(0,f)),0<b.length)))?a.unescape(b):""}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.ma="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.ma.slice(0);a.wa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks AudienceManagement".split(" ");
for(n=0;250>=n;n++)76>n&&(a.g.push("prop"+n),a.O.push("prop"+n)),a.g.push("eVar"+n),a.O.push("eVar"+n),6>n&&a.g.push("hier"+n),4>n&&a.g.push("list"+n);n="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");a.g=a.g.concat(n);a.G=a.G.concat(n);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=0;a.offlineFilename=
"AppMeasurement.offline";a.Ka=0;a.la=0;a.N=0;a.Ja=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Oa=!1,navigator){var y=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=y.indexOf("MSIE ")||0<=y.indexOf("Trident/")&&0<=y.indexOf("Windows NT 6"))a.Oa=!0}}catch(z){}a.fa=function(){a.ga&&(k.clearTimeout(a.ga),a.ga=q);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():a.l&&a.l.href&&(a.d.location=
a.l.href));a.l=a.J=a.A=0};a.Ma=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.ya)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.ya=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var m=a.M=a.clickObject;a.ka&&(clearTimeout(a.ka),a.ka=0);a.ka=setTimeout(function(){a.M==m&&(a.M=0)},1E4);f=a.Ea();a.track();if(f<a.Ea()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ga(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(n){b=new k.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(q){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(r){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&
k.MouseEvent)&&(a.ya=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ma,30)};a.Ma();a.loadModule("ActivityMap")}

/*This function is modified to support s2*/
function s3_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s3_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s3_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();

s3.w_trackPage(digital);
//s3.t();
