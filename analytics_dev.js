// prod = use production suite for domains in following sections
// brand = brand for pageName. e.g. 'wbc'. Subdomains of westpac.com.au are always 'wbc' brand
// site = site for pageName. e.g. 'www'. Subdomains of westpac.com.au are used automatically as site name

(function (win, doc) {
    var trackingObjectName = win['WBGAnalyticsObject'], // Do not change this name.
        pageConfig = win[trackingObjectName].config,
        testTracking = win.testTracking || {}, // test page objects
        helpers;

    // defaults for s_code. customisations below.
    pageConfig.prod = 0;
    pageConfig.brand = 0;
    pageConfig.site = 0;

    helpers = {
        location: testTracking.location || win.location,
        addHandler: function (element, event, handler) {
            if (element.addEventListener) {
                element.addEventListener(event, handler, false);
            } else {
                if (element.attachEvent) {
                    element.attachEvent('on' + event, handler);
                }
            }
        },
        // use onReady to attach at window.load (or later) if required to reduce impact on load time (delay load script), or to track navigation timing data
        onReady: function (func) {
            if (/complete/.test(doc.readyState)) { // fire/attach immediately in case window load has already occured
                func();
            } else {
                helpers.addHandler(win, 'load', function () { // fire/attach when window loads. include a timeout to prevent Chrome/Safari spinner immediately after load
                    setTimeout(func, 4); // should be 4
                });
            }
        },
        scriptElement: function (id) {
            var existing = doc.getElementById(id),
                scripts = doc.getElementsByTagName('script')[0],
                //sibling = scripts[scripts.length - 1],
                element;

            if (existing) {
                return existing;
            }

            element = doc.createElement('script');
            element.id = id;
            //element.type = 'text/javascript';
            element.async = 1;
            //element.defer = true;

            //sibling.parentNode.insertBefore(element, sibling.nextSibling);
            scripts.parentNode.insertBefore(element, scripts);

            return element;
        },
        cookieRead: function (sKey) {
            return decodeURIComponent(doc.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || '';
        },
        cookieWrite: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || (/^(?:expires|max-age|path|domain|secure)$/i).test(sKey)) {
                return false;
            }
            var sExpires = '';
            if (vEnd && vEnd.constructor === Date) {
                sExpires = '; expires=' + vEnd.toUTCString();
            }
            doc.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
            return true;
        },
        cloneObject: function (oToBeCloned, clones) {
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
                        oClone[prpty] = helpers.cloneObject(oToBeCloned[prpty], clones);
                    }
                }
            }
            return oClone;
        },
        addCallback: function (scriptEl, readyCheck, callback) {
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
        },
        tracker: function () {
            var args = Array.prototype.slice.call(arguments),
                method = args.shift();
            if (method) {
                if (typeof method === 'function') {
                    method();
                } else {
                    // can do something special based on method name here if required
                    if (helpers.send[method]) {
                        helpers.send[method].apply(win, args);
                    }
                }
            }
        },
        processQueue: function () {
            var queue = win[trackingObjectName].q,
                realTrackingFunction = helpers.tracker;
            realTrackingFunction.config = pageConfig;
            while (queue && queue.length) {
                realTrackingFunction.apply(win, queue.shift());
            }
            win[trackingObjectName] = realTrackingFunction;
        },
        pageSetup: function () {
            // config for initial page defaults/s_code load only
            //alert('running analytics.js pageSetup');

            var omnitureScriptElement = helpers.scriptElement('omniture-scode'),
                omnitureScriptSource = testTracking.location ? 'app_measurement_dev.js' : '//info.westpac.com.au/furniture/scripts/app_measurement.js',
                omnitureScriptReady = function () {
                    return win.s3 && win.s3.w_trackPage;
                },
                // customisations for sites using this file
                btRegex,
                btMicrositeRegex,
                //btSflRegex,
                wbcGroupRegex,
                movingtoaustraliaRegex,
                wbcMicrositeRegex,
                wbcPartnerRegex;

            // standard mactel subdomains of westpac.com.au that should be prod
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // to switch on live host only
            if (/^(?:info|explore|wib|help|ww2|appointments)\.westpac\.com\.au$/i.test(location.hostname)) { // help and ww2 due to incorrect links in COL pages (should link to www)
                pageConfig.prod = true;
            }

            // BT sites (BT Super For Life)
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            btRegex = /^(www|btsfl|search|insights)\.bt\.com\.au$/i;
            //btSflRegex = /^btsfl\.bt\.com\.au$/i;
            // to switch on live host only
            //if (btRegex.test(location.hostname) || btSflRegex.test(location.hostname)) {
            if (btRegex.test(location.hostname)) {
                pageConfig.prod = true;
            }
            // for live host and test page
            if (btRegex.test(helpers.location.hostname)) {
                pageConfig.brand = 'bt';
                //pageConfig.site = 'www';
                pageConfig.site = helpers.location.hostname.match(btRegex)[1];
            }
            //if (btSflRegex.test(helpers.location.hostname)) {
            //	pageConfig.brand = 'bt';
            //	pageConfig.site = 'btsfl';
            //}

            // BT External (non bt.com.au) Microsite super.towerswatson.com
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            btMicrositeRegex = /^(super)\.towerswatson\.com$/i;
            if (btMicrositeRegex.test(location.hostname)) {
                pageConfig.prod = true;
            }
            // for live host and test page
            if (btMicrositeRegex.test(helpers.location.hostname)) {
                pageConfig.brand = 'bt';
                pageConfig.site = 'towerswatson';
            }

            // WestpacGroup sites
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            wbcGroupRegex = /^(info|bump|helpmechoose|rewardscalculator|businessfocus|hybrideducation|comparebusinesscreditcards)\.westpacgroup\.com\.au$/i;
            // to switch on live host only
            if (wbcGroupRegex.test(location.hostname)) {
                pageConfig.prod = true;
            }
            // for live host and test page
            if (wbcGroupRegex.test(helpers.location.hostname)) {
                pageConfig.brand = 'wbcgroup';
                pageConfig.site = helpers.location.hostname.match(wbcGroupRegex)[1];
            }

            // movingtoaustralia microsites
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            movingtoaustraliaRegex = /^(www\.)?movingtoaustralia(|\.westpac)\.(?:com\.au|co\.nz|co\.uk|asia)$/i;
            // to switch on live host only
            if (movingtoaustraliaRegex.test(location.hostname)) {
                pageConfig.prod = true;
            }
            // for live host and test page
            if (movingtoaustraliaRegex.test(helpers.location.hostname)) {
                pageConfig.brand = 'wbc';
                pageConfig.site = helpers.location.hostname.replace(/^(www\.)?(movingtoaustralia)(\.westpac)?(\.com?)?/i, '$2');
            }
            if (/^movingtoaustralia\.westpac\.asia$/i.test(helpers.location.hostname)) {
                pageConfig.fpCookieDomainPeriods = 2;
            }

            // westpac.com.au microsites
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            wbcMicrositeRegex = /^(merchantapplication)\.westpac\.com\.au$/i;
            // to switch on live host only
            if (wbcMicrositeRegex.test(location.hostname)) {
                pageConfig.prod = true;
            }
            // westpac partner sites (external domains)
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            //wbcPartnerRegex = /(|^www\.)(einsure|fxmoneyonline)\.com\.au$/i;
            wbcPartnerRegex = /^(|^\bwww\b\.|^elevate\.)(einsure|fxmoneyonline|agatravelinsurance)\.com\.au$/i;

            // to switch on live host only
            if (wbcPartnerRegex.test(location.hostname)) {
                pageConfig.prod = true;
            }
            // for live host and test page
            if (wbcPartnerRegex.test(helpers.location.hostname)) {
                pageConfig.brand = 'wbc';
                //edit 1908206: added fxmoneyonline site within partnerregex
                //eidt 230117 added agatravelinsurance and fixed einsure uat data into prod issues

                var wbcPartner = helpers.location.hostname.replace(/(?:|^www\.|^elevate\.)(einsure|fxmoneyonline|agatravelinsurance)(?:\.com)(?:\.au$)/i, '$1');
                switch (wbcPartner) {
                    case 'einsure':
                        pageConfig.site = 'einsure';
                        break;
                    case 'fxmoneyonline':
                        pageConfig.site = 'travelex';
                        break;
                    case 'agatravelinsurance':
                        pageConfig.site = 'agatravel';
                        break;
                    default:
                    // should there be a default? may be notset
                }
            }
            // westpac 200 year anniversary site
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            wbcAnniversaryMicrosite = /^(|^www\.)(businessesoftomorrow)\.com\.au$/i;
            // to switch on live host only
            if (wbcAnniversaryMicrosite.test(location.hostname)) {
                pageConfig.prod = true;
            }
            if (wbcAnniversaryMicrosite.test(helpers.location.hostname)) {
                pageConfig.brand = 'wbc';
                pageConfig.site = 'businessesoftomorrow';
            }
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

            //BT Panorama direct Westpac hosted micro site
            //to switch on live host only
            if (/\/ng\/public\//i.test(location.href)) {
                pageConfig.brand = 'bt';
                pageConfig.site = 'panoramadirect';
            }

            // add files to attach to page (based on conditions if required)
            helpers.onReady(function () { // i.e. wait until window load to attach script. avoid gomez measurement + browser loading spinner.
                pageConfig.lc = (+new Date()); // lc = load complete time for browsers without native support

                // load any script required and check if required functions are ready
                omnitureScriptElement.src = omnitureScriptSource;

                // can add the process callback straight away
                helpers.addCallback(omnitureScriptElement, omnitureScriptReady, function () {
                    helpers.processQueue();
                });
            });
        },
        send: {
            livechat: function (details) {
                s.w_trackLiveChat(true, details);
            },
            impression: function (impressions) {
                s.w_trackImpression(impressions);
            },
            page: function (details) {
                var pageDetails = helpers.cloneObject(details || {}); // copy object passed to leave original as-is

                // set this file date for version monitoring across all sites using this file
                if (!pageDetails.siteVersion) {
                    pageDetails.siteVersion = 'analytics_info.js:20170131'; // TODO: ------ Code release date to be updated with changes
                }
                // completely override report suite if required for testing
                //pageDetails.s_un = 'westpac-dev-b'; // TODO: ------ confirm if override should be used


                // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

                //if (/^info\.westpac\.com\.au$/i.test(helpers.location.hostname) && (/\/m\//i.test(helpers.location.pathname) || /\/mobile\//i.test(helpers.location.pathname))) {
                //	if (!pageDetails.experience) {
                //		pageDetails.experience = 'mob';
                //	}
                //}

                if (/^movingtoaustralia\.westpac\.asia$/i.test(helpers.location.hostname)) {
                    pageDetails.language = 'cn';
                }

                // businessfocus.westpacgroup.com.au - blog URL customisation
                if ((/^businessfocus$/i).test(pageConfig.site)) {
                    (function () {
                        var locPath = helpers.location.pathname,
                            locSearch = helpers.location.search.replace(/&([cp]id|utm_.+)=?.*/, ''), // remove cid/pid or utm_ with or without following '='
                            locFull = locPath + locSearch,
                            cleanPageName = locFull,
                            searchKeywords = locSearch.match(/^\?+keywords=+(.*?)(?=&|$)/i),
                            pageNumber = locSearch.match(/[\?&]+page=+(.*?)(?=&|$)/);

                        searchKeywords = searchKeywords ? searchKeywords[1] : '';
                        pageNumber = pageNumber ? pageNumber[1] : '';

                        if (searchKeywords) {
                            cleanPageName = 'searchresults';
                        }
                        if (!(/^\?+(page|keywords)/i).test(locSearch)) {
                            cleanPageName = locPath;
                        }
                        if ((/^\/blog\/*\?+(label|tag)=/i).test(locFull)) {
                            cleanPageName = locFull;
                        }
                        if (locPath === '/') {
                            cleanPageName = (pageNumber > 1 ? 'home:page:' + pageNumber : '');
                        }

                        pageDetails.pageName = decodeURIComponent(cleanPageName.replace(/[=\/&\?]+/g, ':').replace(/[\-+]+/g, ' ').replace(/^:+|:+$/g, '')).toLowerCase();
                        if (searchKeywords) {
                            pageDetails.pageType = 'sitesearch';
                            pageDetails.searchTerm = decodeURIComponent(searchKeywords).toLowerCase();
                            pageDetails.pageNumber = pageNumber || 1;
                        }
                    }
                        ());
                }

                s.w_trackPage(pageDetails);
            }
        }
    };

    if (trackingObjectName) {
        helpers.pageSetup();
    }
}
    (window, document));