	/*
	 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

	 Adobe Visitor API for JavaScript version: 1.7.0
	 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
	 More info available at http://www.omniture.com
	*/
	function Visitor(o,w){if(!o)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.7.0";var m=window,l=m.Visitor;l.version=a.version;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);a._c="Visitor";a._il=m.s_c_il;a._in=m.s_c_in;a._il[a._in]=a;m.s_c_in++;a.ka={Ea:[]};var s=m.document,i=l.yb;i||(i=null);var D=l.zb;D||(D=void 0);var j=l.La;j||(j=!0);var k=l.Ja;k||(k=!1);a.ga=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.z=function(a){var c=
	"0123456789",b="",e="",f,g=8,h=10,j=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*h),b+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10),f=Math.floor(Math.random()*j),e+=c.substring(f,f+1),0==a&&9==f?j=3:(1==a||2==a)&&10!=j&&2>f?j=10:2<a&&(j=10);return b+e};a.Pa=function(){var a;!a&&m.location&&(a=m.location.hostname);
	if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
	c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+s.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
	b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(s.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.h=i;a.L=function(a,c){try{"function"==typeof a?a.apply(m,c):a[1].apply(a[0],c)}catch(b){}};a.Ua=function(d,c){c&&(a.h==i&&(a.h={}),a.h[d]==D&&(a.h[d]=[]),a.h[d].push(c))};a.q=function(d,c){if(a.h!=i){var b=a.h[d];if(b)for(;0<b.length;)a.L(b.shift(),
	c)}};a.v=function(a,c,b,e){b=encodeURIComponent(c)+"="+encodeURIComponent(b);c=B.sb(a);a=B.lb(a);if(-1===a.indexOf("?"))return a+"?"+b+c;var f=a.split("?"),a=f[0]+"?",e=B.Xa(f[1],b,e);return a+e+c};a.Oa=function(a,c){var b=RegExp("[\\?&#]"+c+"=([^&#]*)").exec(a);if(b&&b.length)return decodeURIComponent(b[1])};a.Ta=function(){var d=i,c=m.location.href;try{var b=a.Oa(c,q.aa);if(b)for(var d={},e=b.split("|"),c=0,f=e.length;c<f;c++){var g=e[c].split("=");d[g[0]]=decodeURIComponent(g[1])}return d}catch(h){}};
	a.Ma=function(){var d=a.Ta();if(d){var c=d[r],b=a.setMarketingCloudVisitorID;c&&c.match(q.u)&&b(c);a.j(t,-1);d=d[p];c=a.setAnalyticsVisitorID;d&&d.match(q.u)&&c(d)}};a.l=i;a.Ra=function(d,c,b,e){c=a.v(c,"d_fieldgroup",d,1);e.url=a.v(e.url,"d_fieldgroup",d,1);e.m=a.v(e.m,"d_fieldgroup",d,1);v.d[d]=j;e===Object(e)&&e.m&&"XMLHttpRequest"===a.ma.F.G?a.ma.hb(e,b,d):a.useCORSOnly||a.ja(d,c,b)};a.ja=function(d,c,b){var e=0,f=0,g;if(c&&s){for(g=0;!e&&2>g;){try{e=(e=s.getElementsByTagName(0<g?"HEAD":"head"))&&
	0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{s.body&&(e=s.body)}catch(k){e=0}if(e)for(g=0;!f&&2>g;){try{f=s.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,n.d[d]={requestStart:n.o(),url:c,ua:e,sa:n.xa(),ta:0},b&&(a.l==i&&(a.l={}),a.l[d]=setTimeout(function(){b(j)},e)),a.ka.Ea.push(c))};a.Na=function(d){a.l!=i&&a.l[d]&&(clearTimeout(a.l[d]),a.l[d]=0)};a.ha=k;a.ia=
	k;a.isAllowed=function(){if(!a.ha&&(a.ha=j,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.ia=j;return a.ia};a.b=i;a.e=i;var E=l.Qb;E||(E="MC");var r=l.Vb;r||(r="MCMID");var G=l.Rb;G||(G="MCCIDH");var H=l.Ub;H||(H="MCSYNCS");var I=l.Sb;I||(I="MCIDTS");var y=l.Tb;y||(y="MCOPTOUT");var C=l.Ob;C||(C="A");var p=l.Lb;p||(p="MCAID");var z=l.Pb;z||(z="AAM");var A=l.Nb;A||(A="MCAAMLH");var t=l.Mb;t||(t="MCAAMB");var u=l.Wb;u||(u="NONE");a.N=0;a.fa=function(){if(!a.N){var d=a.version;a.audienceManagerServer&&
	(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.N=a.ga(d)}return a.N};a.la=k;a.f=function(){if(!a.la){a.la=j;var d=a.fa(),c=k,b=a.cookieRead(a.cookieName),e,f,g,h,l=new Date;a.b==i&&(a.b={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=j),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)if(e=b[d].split("-"),f=e[0],g=b[d+1],1<e.length?(h=parseInt(e[1],10),e=0<e[1].indexOf("s")):(h=0,e=k),c&&(f==G&&
	(g=""),0<h&&(h=l.getTime()/1E3-60)),f&&g&&(a.c(f,g,1),0<h&&(a.b["expire"+f]=h+(e?"s":""),l.getTime()>=1E3*h||e&&!a.cookieRead(a.sessionCookieName))))a.e||(a.e={}),a.e[f]=j}if(!a.a(p)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(q.u)&&a.c(p,g))}};a.Wa=function(){var d=a.fa(),c,b;for(c in a.b)!Object.prototype[c]&&a.b[c]&&"expire"!=c.substring(0,6)&&(b=a.b[c],d+=(d?"|":"")+c+(a.b["expire"+c]?"-"+a.b["expire"+
	c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,c){return a.b!=i&&(c||!a.e||!a.e[d])?a.b[d]:i};a.c=function(d,c,b){a.b==i&&(a.b={});a.b[d]=c;b||a.Wa()};a.Qa=function(d,c){var b=a.a(d,c);return b?b.split("*"):i};a.Va=function(d,c,b){a.c(d,c?c.join("*"):"",b)};a.Fb=function(d,c){var b=a.Qa(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return i};a.Hb=function(d,c,b){var e=i,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.Va(d,e,b)};a.j=function(d,
	c,b){var e=new Date;e.setTime(e.getTime()+1E3*c);a.b==i&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(b?"s":"");0>c?(a.e||(a.e={}),a.e[d]=j):a.e&&(a.e[d]=k);b&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.ea=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=u)),!a||a!=u&&!a.match(q.u)))a="";return a};a.k=function(d,c){a.Na(d);a.i!=i&&(a.i[d]=k);n.d[d]&&(n.d[d].wb=
	n.o(),n.K(d));v.d[d]&&v.Ga(d,k);if(d==E){v.isClientSideMarketingCloudVisitorID!==j&&(v.isClientSideMarketingCloudVisitorID=k);var b=a.a(r);if(!b){b="object"==typeof c&&c.mid?c.mid:a.ea(c);if(!b){if(a.D){a.getAnalyticsVisitorID(i,k,j);return}b=a.z();v.isClientSideMarketingCloudVisitorID=j}a.c(r,b)}if(!b||b==u)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.k(z,c),a.D&&c.mid&&a.k(C,{id:c.id}));a.q(r,[b])}if(d==z&&"object"==typeof c){b=604800;c.id_sync_ttl!=D&&c.id_sync_ttl&&
	(b=parseInt(c.id_sync_ttl,10));var e=a.a(A);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.j(A,b),a.c(A,e)));e||(e="");a.q(A,[e]);e=a.a(t);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.j(t,b),a.c(t,e);e||(e="");a.q(t,[e]);!c.error_msg&&a.B&&a.c(G,a.B)}if(d==C){b=a.a(p);b||((b=a.ea(c))?b!==u&&a.j(t,-1):b=u,a.c(p,b));if(!b||b==u)b="";a.q(p,[b])}a.idSyncDisableSyncs?x.ya=j:(x.ya=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,x.tb(b));if(c===Object(c)){var f;a.isAllowed()&&(f=a.a(y));f||(f=u,c.d_optout&&c.d_optout instanceof
	Array&&(f=c.d_optout.join(",")),b=parseInt(c.d_ottl,10),isNaN(b)&&(b=7200),a.j(y,b,j),a.c(y,f));a.q(y,[f])}};a.i=i;a.r=function(d,c,b,e,f){var g="",h;if(a.isAllowed()&&(a.f(),g=a.a(d),!g&&(d==r||d==y?h=E:d==A||d==t?h=z:d==p&&(h=C),h))){if(c&&(a.i==i||!a.i[h]))a.i==i&&(a.i={}),a.i[h]=j,a.Ra(h,c,function(b,c){if(!a.a(d))if(n.d[h]&&(n.d[h].timeout=n.o(),n.d[h].mb=!!b,n.K(h)),c===Object(c)&&!a.useCORSOnly)a.ja(h,c.url,c.I);else{b&&v.Ga(h,j);var e="";d==r?(e=a.z(),v.isClientSideMarketingCloudVisitorID=
	j):h==z&&(e={error_msg:"timeout"});a.k(h,e)}},f);a.Ua(d,b);c||a.k(h,{id:u});return""}if((d==r||d==p)&&g==u)g="",e=j;b&&e&&a.L(b,[g]);return g};a._setMarketingCloudFields=function(d){a.f();a.k(E,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.D=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.D=j);var b=a.A("_setMarketingCloudFields");return a.r(r,b.url,d,c,b)}return""};a.Sa=function(){a.getAudienceManagerBlob()};
	l.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.w={};a.da=k;a.B="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=D&&(e.authState=b.authState);a.w[c]=e}else a.w[c]={id:b};var d=a.getCustomerIDs(),e=a.a(G),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.B=a.ga(f);a.B!=e&&(a.da=j,a.Sa())}};a.getCustomerIDs=
	function(){a.f();var d={},c,b;for(c in a.w)Object.prototype[c]||(b=a.w[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=b.authState!=D?b.authState:l.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.k(C,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,j)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";
	a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));var h={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),i=["s_c_il",a._in,"_set"+(b?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+e+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+
	"Fields";h.m=f+"?"+e;h.qa=i}h.url=g;return a.r(b?r:p,g,d,c,h)}}return""};a._setAudienceManagerFields=function(d){a.f();a.k(z,d)};a.A=function(d){var c=a.audienceManagerServer,b="",e=a.a(r),f=a.a(t,j),g=a.a(p),g=g&&g!=u?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,i;if(b)for(h in b)Object.prototype[h]||(i=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(i.id?i.id:"")+(i.authState?
	"%01"+i.authState:""));d||(d="_setAudienceManagerFields");c="http"+(a.loadSSL?"s":"")+"://"+c+"/id";e="d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.D?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];b=c+"?"+e+"&d_cb=s_c_il%5B"+a._in+"%5D."+d;return{url:b,m:c+"?"+e,qa:f}}return{url:b}};
	a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,j)}));if(b)return b=a.A(),a.r(A,b.url,d,c,b)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,j)})){var b=a.a(p);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,
	j)}));if(b){var b=a.A(),e=b.url;a.da&&a.j(t,-1);return a.r(t,e,d,c,b)}}return""};a.s="";a.C={};a.O="";a.P={};a.getSupplementalDataID=function(d,c){!a.s&&!c&&(a.s=a.z(1));var b=a.s;a.O&&!a.P[d]?(b=a.O,a.P[d]=j):b&&(a.C[d]&&(a.O=a.s,a.P=a.C,a.s=b=!c?a.z(1):"",a.C={}),b&&(a.C[d]=j));return b};l.OptOut={GLOBAL:"global"};a.getOptOut=function(d,c){if(a.isAllowed()){var b=a.A("_setMarketingCloudFields");return a.r(y,b.url,d,c,b)}return""};a.isOptedOut=function(d,c,b){return a.isAllowed()?(c||(c=l.OptOut.GLOBAL),
	(b=a.getOptOut(function(b){a.L(d,[b==l.OptOut.GLOBAL||0<=b.indexOf(c)])},b))?b==l.OptOut.GLOBAL||0<=b.indexOf(c):i):k};a.appendVisitorIDsTo=function(d){for(var c=q.aa,b=[[r,a.a(r)],[p,a.a(p)]],e="",f=0,g=b.length;f<g;f++){var h=b[f],j=h[0],h=h[1];h!=i&&h!==u&&(e=e?e+="|":e,e+=j+"="+encodeURIComponent(h))}try{return a.v(d,c,e)}catch(k){return d}};var q={p:!!m.postMessage,Ia:1,ca:864E5,aa:"adobe_mc",u:/^[0-9a-fA-F\-]+$/};a.Ab=q;a.oa={postMessage:function(a,c,b){var e=1;c&&(q.p?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,
	"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},W:function(a,c){var b;try{if(q.p)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var B={pa:function(){if(s.addEventListener)return function(a,c,b){a.addEventListener(c,
	function(a){"function"===typeof b&&b(a)},k)};if(s.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===i)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},gb:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)},sb:function(a){var c=
	a.indexOf("#");return 0<c?a.substr(c):""},lb:function(a){var c=a.indexOf("#");return 0<c?a.substr(0,c):a},Xa:function(a,c,b){a=a.split("&");b=b!=i?b:a.length;a.splice(b,0,c);return a.join("&")}};a.Gb=B;var J={F:function(){var a="none",c=j;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&
	XDomainRequest===Object(XDomainRequest)&&(c=k),0<Object.prototype.toString.call(window.xb).indexOf("Constructor")&&(c=k));return{G:a,Jb:c}}(),ib:function(){return"none"===this.F.G?i:new window[this.F.G]},hb:function(d,c,b){var e=this;c&&(d.I=c);try{var f=this.ib();f.open("get",d.m+"&ts="+(new Date).getTime(),j);"XMLHttpRequest"===this.F.G&&(f.withCredentials=j,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&
	200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,i,"Response is not JSON");break a}}catch(b){e.n(d,b,"Error parsing response as JSON");break a}try{for(var c=d.qa,f=window,g=0;g<c.length;g++)f=f[c[g]];f(a)}catch(j){e.n(d,j,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();n.d[b]={requestStart:n.o(),url:d.m,ua:f.timeout,sa:n.xa(),ta:1};a.ka.Ea.push(d.m)}catch(g){this.n(d,g,"try-catch")}},
	n:function(d,c,b){a.CORSErrors.push({Kb:d,error:c,description:b});d.I&&("ontimeout"===b?d.I(j):d.I(k,d))}};a.ma=J;var x={Ka:3E4,ba:649,Ha:k,id:i,T:i,wa:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},g:i,url:i,jb:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(s.location.href);this.g||(this.g="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.g+".demdex.net/dest5.html"+c;this.T=this.wa(d);
	this.id="destination_publishing_iframe_"+this.g+"_"+a.idSyncContainerID;return d},$a:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(s.location.href);"string"===typeof a.M&&a.M.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.T=this.wa(a.M),this.url=a.M+d)},ya:i,va:k,Y:k,H:i,Xb:i,rb:i,Yb:i,X:k,J:[],pb:[],qb:[],Aa:q.p?15:100,U:[],nb:[],ra:j,Da:k,Ca:function(){return!a.idSyncDisable3rdPartySyncing&&(this.va||a.Cb)&&this.g&&"nosubdomainreturned"!==
	this.g&&this.url&&!this.Y},R:function(){function a(){e=document.createElement("iframe");e.sandbox="allow-scripts allow-same-origin";e.title="Adobe ID Syncing iFrame";e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.rb=j;c();document.body.appendChild(e)}function c(){B.pa(e,"load",function(){e.className="aamIframeLoaded";b.H=j;b.t()})}this.Y=j;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.H=
	j,this.za=e,this.t()):a();this.za=e},t:function(d){var c=this;d===Object(d)&&this.U.push(d);if((this.Da||!q.p||this.H)&&this.U.length)this.K(this.U.shift()),this.t();!a.idSyncDisableSyncs&&this.H&&this.J.length&&!this.X&&(this.Ha||(this.Ha=j,setTimeout(function(){c.Aa=q.p?15:150},this.Ka)),this.X=j,this.Fa())},K:function(a){var c=encodeURIComponent,b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),B.gb(g.url||[],","),c(g.ttl||""),
	"","",g.fireURLSync?"true":"false"],this.ra?this.Q(h.join("|")):g.fireURLSync&&this.ab(g,h.join("|"));this.nb.push(a)},ab:function(d,c){a.f();var b=a.a(H),e=k,f=k,g=Math.ceil((new Date).getTime()/q.ca);if(b){if(b=b.split("*"),f=this.ub(b,d.id,g),e=f.eb,f=f.fb,!e||!f)this.Q(c),b.push(d.id+"-"+(g+Math.ceil(d.ttl/60/24))),this.ob(b),a.c(H,b.join("*"))}else this.Q(c),a.c(H,d.id+"-"+(g+Math.ceil(d.ttl/60/24)))},ub:function(a,c,b){var e=k,f=k,g,h,i;for(h=0;h<a.length;h++)g=a[h],i=parseInt(g.split("-")[1],
	10),g.match("^"+c+"-")?(e=j,b<i?f=j:(a.splice(h,1),h--)):b>=i&&(a.splice(h,1),h--);return{eb:e,fb:f}},ob:function(a){if(a.join("*").length>this.ba)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.ba;)a.shift()},Q:function(d){var c=encodeURIComponent;this.J.push((a.Db?c("---destpub-debug---"):c("---destpub---"))+d)},Fa:function(){var d=this,c;this.J.length?(c=this.J.shift(),a.oa.postMessage(c,this.url,this.za.contentWindow),this.pb.push(c),
	setTimeout(function(){d.Fa()},this.Aa)):this.X=k},W:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.ra="true"===c[1]?j:k,this.Da=j,this.t()),this.qb.push(a))},tb:function(d){if(this.url===i||d.subdomain&&"nosubdomainreturned"===this.g)this.g="string"===typeof a.na&&a.na.length?a.na:d.subdomain||"",this.url=this.jb();d.ibs instanceof Array&&d.ibs.length&&(this.va=j);this.Ca()&&(a.idSyncAttachIframeOnWindowLoad?
	(l.$||"complete"===s.readyState||"loaded"===s.readyState)&&this.R():this.Ya());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.t(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},Za:function(d,c){return a.Eb||!d||c-d>q.Ia},Ya:function(){function a(){c.Y||(document.body?c.R():setTimeout(a,30))}var c=this;a()}};a.Bb=x;a.timeoutMetricsLog=[];var n={cb:window.performance&&window.performance.timing?1:0,Ba:window.performance&&window.performance.timing?
	window.performance.timing:i,Z:i,S:i,d:{},V:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var c=[],b=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&c.push(b(e)+"="+b(d[e]));d="http"+(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+c.join("&")+"&d_orgid="+b(a.marketingCloudOrgID)+"&d_timingapi="+this.cb+"&d_winload="+this.kb()+"&d_ld="+this.o();(new Image).src=d;a.timeoutMetricsLog.push(d)}},kb:function(){this.S===i&&(this.S=
	this.Ba?this.Z-this.Ba.navigationStart:this.Z-l.bb);return this.S},o:function(){return(new Date).getTime()},K:function(a){var c=this.d[a],b={};b.d_visid_stg_timeout_captured=c.ua;b.d_visid_cors=c.ta;b.d_fieldgroup=a;b.d_settimeout_overriden=c.sa;c.timeout?c.mb?(b.d_visid_timedout=1,b.d_visid_timeout=c.timeout-c.requestStart,b.d_visid_response=-1):(b.d_visid_timedout="n/a",b.d_visid_timeout="n/a",b.d_visid_response="n/a"):(b.d_visid_timedout=0,b.d_visid_timeout=-1,b.d_visid_response=c.wb-c.requestStart);
	b.d_visid_url=c.url;l.$?this.send(b):this.V.push(b);delete this.d[a]},vb:function(){for(var a=0,c=this.V.length;a<c;a++)this.send(this.V[a])},xa:function(){return"function"===typeof setTimeout.toString?-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.Ib=n;var v={isClientSideMarketingCloudVisitorID:i,MCIDCallTimedOut:i,AnalyticsIDCallTimedOut:i,AAMIDCallTimedOut:i,d:{},Ga:function(a,c){switch(a){case E:c===k?this.MCIDCallTimedOut!==j&&(this.MCIDCallTimedOut=k):this.MCIDCallTimedOut=c;break;
	case C:c===k?this.AnalyticsIDCallTimedOut!==j&&(this.AnalyticsIDCallTimedOut=k):this.AnalyticsIDCallTimedOut=c;break;case z:c===k?this.AAMIDCallTimedOut!==j&&(this.AAMIDCallTimedOut=k):this.AAMIDCallTimedOut=c}}};a.isClientSideMarketingCloudVisitorID=function(){return v.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return v.MCIDCallTimedOut};a.AnalyticsIDCallTimedOut=function(){return v.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return v.AAMIDCallTimedOut};0>o.indexOf("@")&&
	(o+="@AdobeOrg");a.marketingCloudOrgID=o;a.cookieName="AMCV_"+o;a.sessionCookieName="AMCVS_"+o;a.cookieDomain=a.Pa();a.cookieDomain==m.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=m.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";a.Ma();if(w&&"object"==typeof w){for(var F in w)!Object.prototype[F]&&(a[F]=w[F]);a.idSyncContainerID=a.idSyncContainerID||0;a.f();J=a.a(I);F=Math.ceil((new Date).getTime()/
	q.ca);!a.idSyncDisableSyncs&&x.Za(J,F)&&(a.j(t,-1),a.c(I,F));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob()}if(!a.idSyncDisableSyncs){x.$a();B.pa(window,"load",function(){l.$=j;n.Z=n.o();n.vb();var a=x;a.Ca()&&a.R()});try{a.oa.W(function(a){x.W(a.data)},x.T)}catch(K){}}}
	Visitor.getInstance=function(o,w){var a,m=window.s_c_il,l;0>o.indexOf("@")&&(o+="@AdobeOrg");if(m)for(l=0;l<m.length;l++)if((a=m[l])&&"Visitor"==a._c&&a.marketingCloudOrgID==o)return a;return new Visitor(o,w)};(function(){function o(){w.$=a}var w=window.Visitor,a=w.La,m=w.Ja;a||(a=!0);m||(m=!1);window.addEventListener?window.addEventListener("load",o):window.attachEvent&&window.attachEvent("onload",o);w.bb=(new Date).getTime()})();

	// Put Visitor.getInstance at the end of the file, after the code library
	var visitor = Visitor.getInstance("3A4B7BAF56F01DA67F000101@AdobeOrg", {
		trackingServer: "westpacbankinggroup.sc.omtrdc.net", // same as s.trackingServer
		trackingServerSecure: "westpacbankinggroup.sc.omtrdc.net", // same as s.trackingServerSecure
		cookieDomain: (/[0-9]{1,3}$/i).test(location.hostname)? location.hostname : location.hostname.split('.').slice(1).join('.')
	}); 
	console.log('Visitor ID API - library loaded');


	//initialize AppMeasurement
	//ABU var s2 = new AppMeasurement();
	//ABU s2.account=s2_gi(s2_account)

	var s2_account="wbg-banking-dev";
	var s2=s2_gi(s2_account);
	pageDetails = window.pageDetails || {};
	
	// prod/brand/site settings etc. from analytics js files
	s2.w_config = ((window[window['WBGAnalyticsObject']] || {}).config) || {}; // leave this name as string to prevent renaming in obfuscation. do not change. confirm name if obfuscated twice.

	// test page objects
	s2.w_wtT = window.testTracking || {}; //ABU TODO

	/******** DEV defaults ********/
	s2.w_ckExt = '_' + (s2.w_config.brand ? s2.w_config.brand.replace(/^wbc$/i, 'wp') : 'wp') + '_dev'; // e.g. '_wp_dev'. '_wp' for Westpac unique cookie. this value also used in debugging logic for dev (if device has a '..._dev' cookie name extension)

	/******** PROD overrides ********/
	s2.w_prod = (/^(?:www|banking|forms|online|businessonline|search|hlc1|locator)\.westpac\.com\.au$/i).test(location.hostname) || ((/^gs.{8}net\.westpac\.com\.au$/i).test(location.hostname) && (/RM\/emulationbanking\b/i).test(location.pathname)) || s2.w_config.prod; // with emulation mode details, regex excludes SIT SameView hostname
	if (s2.w_prod) {
		s2.w_ckExt = s2.w_ckExt.replace(/_dev$/, '');
	}

	var pd = {}; //Page data
	

	/******** VISITOR ID SERVICE CONFIG - REQUIRES VisitorAPI.js ********/
	s2.visitor=Visitor.getInstance("3A4B7BAF56F01DA67F000101@AdobeOrg")

	/************************** CONFIG SECTION **************************/
	// Version = scode version, version date, scode group, collection server, override if used
	// Code group name (www/forms/online/banking) is hard-coded to assist troubleshooting
	// The site/host name value in this string tested for Oregon-specific operations in online+banking
	s2.w_codeVers = 'D="' + s2.version + ' 20151019 dev "+Host'; // TODO: Code release date and site name for each site to be updated (dev -> www/forms/online/banking/search etc).
	
	s2.w_log = function (data) {
		if (s2.Util.cookieRead('s_pers_wp_dev') || !s2.w_prod) {
			try {
				console.info('s_code: ' + data); // debug logging only when dev, or dev cookies set. this should be on for live sites for debugging
			} catch (ignore) {
				// don't log if console unavailable
			}
		}
	};

	// OTP user GUID e.g. 22604399-008a-4b20-910f-c3ad9a28518b may be in URL path like /secure/banking/overview/accountdetails/ (e.g. Term Deposit account detail page)
	s2.w_guidRgx = 	;

	// ClickMap DynamicObjectIDs config
	/*ABU find Activity map equvalent
	s.getObjectID = function (obj) {
		/ * Add code to identify whether an objectID should be created,
		 * parse the URLs and return objectID. If no objectID should be created, return ''.
		 * /

		// Use link HREF to identify links
		// consider prefixing with navigation area or similar to make clickmap reports easier to interpret and higher accuracy than URL only when links move on page.
		var objId = obj.href.replace(/^file:(\/)+/i, 'file://'); // use object href for all links by default. Fix file links to allow correct objId to be applied
		//.replace(s.w_guidRgx, ''); // remove OTP user GUID. This is included in the cleanURL function

		return s.w_lCase(s.w_cleanURL(objId, 1).replace(/\?/g, '_')); // ensure overlays work correctly (Adobe KB404)
	}; */

	
	// Navigation menu ID config. define data-attribute to identify link groups
	s2.w_getNavMenuId = function (evt) {
		var lp,
		len,
		node = s2.w_getEvtTrgt(evt),
		nav = '';

		// cycle through up to 'len' parent nodes to find a data-analytics-nav attribute
		for (lp = 0, len = 50; lp < len; lp++) {
			if (node) {
				if (node.nodeType === 1) {
					nav = node.getAttribute('data-analytics-nav');
					if (nav) {
						// set val in cookie
						//console.log('nav = ' + nav);
						s2.Util.cookieWrite('nav', nav);
						break;
					}
				}
				node = node.parentNode;
			}
		}
	};
	
	// clean and shorten the captured location and referrer URLs
	s2.w_cleanURL = function (loc, locType) {
		var cleanedUrl = (loc || '')
		.replace(/(\w)\/\/+/g, '$1/') // replace multiple slashes after a word char. with single slash (except for ://) for clean pageName (from location)
		.replace(/((?:&|\?)referrer=.*?(?=&|$))/ig, '') // always remove referrer querystring parameter - it was generated for unica
		.replace(/(^https?:.+?(?:online|banking).+\/cust\/wps\/(my)?portal\/[pw]ol\/)!ut\/.*/i, '$1oregon-application') // Oregon - portal/pol|wol. remove session ID in path
		//.replace(/(^https?:.+?(www.)?forms.+\.nsf)(?:.*\w{32}.*)/i,'$1$2'); // Remove session ID only from Domino path $1 adds www. ???
		.replace(/(^https?:.+?(forms|online)(?:\.|-).*\.nsf.*?)(?:\/\w{32}(?=\?))/i, '$1') // Remove session ID only from Domino path $1 adds www. ???
		.replace(s2.w_guidRgx, '') // remove OTP user GUID
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
	
	// return full current URL for test or prod
	s2.w_getLoc = function () {
		return s2.w_wtT.location || window.location;
	};
	
	// boolean for core first party cookie domain
	s2.w_coreDomain = /\.westpac\.com\.au$/i.test(s2.w_getLoc().hostname);

	// Suffix for non-core-domain cookie values (to split distinct data sets)
	s2.w_extCkSfx = s2.w_coreDomain ? '' : ' (ext.)';

	// default/initialised s.pageURL
	s2.pageURL = s2.w_cleanURL(s2.w_getLoc().href, 1);

	// Use secure on https:
	s2.ssl = s2.w_getLoc().protocol === 'https:';

	// pageName config
	// s.siteID set in doPlugins to allow changing to 'app' based on visitorID cookie from apps
	s2.defaultPage = /^\/+$/.test(s2.w_getLoc().pathname) ? 'home' : ''; // filename to add when none exists (www home page)
	//s.queryVarsList=''; // query parameters to keep
	s2.pathExcludeDelim = ';'; // portion of the path to exclude - was ;
	s2.pathConcatDelim = ':'; // page name component separator
	//s.pathExcludeList=''; // elements to exclude from the path - index.html? default.aspx for info?

	s2.charSet="UTF-8"
	s2.cookieDomainPeriods=3
	/* Conversion Config */
	s2.currencyCode="AUD"
	/* Link Tracking Config */
	//s2.trackDownloadLinks=true // use custom tracking for downloads and product disclosures. undeclared is false (default)
	//s2.trackExternalLinks=true // use custom tracking for social links etc. undeclared is false (default)
	// Level to set first-party (visitor data) cookies. e.g. www.westpac.asia = 2 (override set in analytics.js)
	// Overrides (if any) need to be set here before cookie operations. This setting defaults to s.cookieDomainPeriods if undefined.
	//s.fpCookieDomainPeriods = pageDetails.s_fpCookieDomainPeriods;
	//ABU REMOVE s2.fpCookieDomainPeriods = s2.w_config.fpCookieDomainPeriods; // set in analytics.js before this file loads
	
	s2.trackInlineStats=true
	s2.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
	s2.linkInternalFilters="javascript:,movingtoaustralia.westpac.asia,westpac.com.au,movingtoaustralia.westpac.co.nz,movingtoaustralia.westpac.co.uk"
	s2.linkLeaveQueryString=false
	s2.linkTrackVars="None"
	s2.linkTrackEvents="None"

	s2.w_ltv = 'server,channel,eVar7,prop15,prop25,eVar25,prop35,eVar35,prop39,prop69,eVar21'; // default vars required in all click tracking functions (linkTrackVars)

	/************************** END CONFIG SECTION **************************/
	s2.usePlugins=true
	
	function s2_doPlugins(s2) {
		
		/* Add calls to plugins here */
		//console.log('start doPlugins: '+JSON.stringify(s2.w_queue));
		//console.log('s2.eo = ' + s2.eo); // event object
		//console.log('s2.lnk = ' + s2.lnk); // link tracking
		//console.log('s2.linkType = ' + s2.linkType); // undefined on initial page load only
		//console.log('s2.linkObject = ' +s2.linkObject);
		//console.log('s2.linkLeaveQueryString = ' +s2.linkLeaveQueryString);
		//console.log('s2.linkURL = ' + s2.linkURL);

		var domClickEvent = !!s2.linkObject,  //ABU s.eo is not available in ap library useing s2.linkObject
		trackingLink = !!s2.linkURL && !domClickEvent,
		trackingPage = !trackingLink && !domClickEvent;
		//ABU var domClickEvent = !!s.eo, // any random click on page passed through s_doPlugins
		//ABU trackingLink = !!s.lnk && !domClickEvent, // represents link tracking call
		//ABU trackingPage = !trackingLink && !domClickEvent, // represents page tracking call
		//doPluginsAsPageLoad = s.linkType === undefined, // Don't use. Not required with new trackingToBeDropped var. only true on first tracking sent.
		var notSet = '(not set)', // to identify missing values
		lowerCaseVal = s2.w_lCase,
		dVar = s2.w_dVar,
		fullLocObj = s2.w_getLoc(), // update each call
		//fullLocHostname = lowerCaseVal(fullLocObj.hostname),
		evtTimer = s2.w_evtTimer,
		//getSearchTerm = s.w_srchTerm,
		cleanText = s2.w_clean,
		appendEvent = s2.w_addEvt,
		getQuerystringParam = s2.Util.getQueryParam, // local variable for frequent usage in this function
		crossVisitPrtcptn = s2.crossVisitParticipation, // local variable for frequent usage in this function
		getValueOnce = s2.getValOnce,
		getTimeToCmplt = s2.getTimeToComplete,
		//pageDetails = window.pageDetails, // local variable for frequent reference - sync method
		//pageDetails = domClickEvent ? ({}) : s.w_queue.shift() || window.pageDetails, // only shift if not domClickEvent. local variable for frequent reference - new async/timeout queue method for mktg tags and avoid Safari spinner if latency
		//pageDetails = trackingPage ? s.w_queue.shift() || window.pageDetails : (trackingLink ? s.w_tempPageDetails || window.pageDetails : ({})), // links need to get details from any previous page call if available. In OTP window.pageDetails is not necessarily what was passed to trackPage()
		//ABU complex Fix later
		pageDetails = trackingPage ? s2.w_queue.shift() || window.pageDetails : (trackingLink ? s2.w_queue.shift() || (s2.w_tempPageDetails || window.pageDetails) : {}), // links need to get details from any previous page call if available. In OTP window.pageDetails is not necessarily what was passed to trackPage()
		//trackingToBeDropped = !!pageDetails.s_abort || domClickEvent, // intitial assumption
		trackingToBeDropped = !!pageDetails._drop || domClickEvent, // intitial assumption
		pdPageName = cleanText(pageDetails.pageName),
		pdDialogTitle = cleanText(pageDetails.dialogTitle), // captures titles of dialogs in OTP and CTRT code for dynamic campaign landing page. Value is appended to end of page name.
		sPageNameTemp = '',
		pdPageType = lowerCaseVal(pageDetails.pageType), // local var reference
		pageTypeAlt, // for tracking other page types, and applying a rule to classify other pages
		pdProductID = s2.w_prodArr(pageDetails.productID || ''), // products string converted into array
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
		//pdSearchResults = s.w_cap(pageDetails.searchResults, 5000) || notSet, // reduce result counts for classification
		//pdSearchResults = s.w_cap(String(pageDetails.searchResults > -1 ? +pageDetails.searchResults : ''), 5000) || notSet, // cap to reduce result counts for classification. '0' results as string
		pdSearchResults = String((String(pageDetails.searchResults) || notSet) > -1 ? s2.w_cap(pageDetails.searchResults, 5000) : notSet), // need to differentiate between undefined, 0, '0' and ''.
		pdItemName = cleanText(pageDetails.itemName), // item name for faq and atm
		//	cssExperienceMob = s.w_isVis('.pagedetails-experience-mob') || s.w_isVis('.analytics-experience-mob'), // responsive site mobile class visible check. name changed to analytics-... to be more relevant
		//	cssExperienceTab = s.w_isVis('.pagedetails-experience-tab') || s.w_isVis('.analytics-experience-tab'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		//	cssExperienceDesktop = s.w_isVis('.analytics-experience-desktop'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		//pageExperience = cssExperienceMob === null && cssExperienceTab === null ? 'desktop' : (cssExperienceMob ? 'mob' : (cssExperienceTab ? 'tab' : 'responsive')),
		//cssExperience = cssExperienceMob ? 'mob' : (cssExperienceTab ? 'tab' : 'desktop'), // ORIG
		//	cssExperience = (cssExperienceMob || (cssExperienceMob !== false && cssExperienceDesktop === false && !cssExperienceTab)) ? 'mob' : ((cssExperienceTab || (cssExperienceTab !== false && cssExperienceDesktop === false && !cssExperienceMob)) ? 'tab' : 'desktop'), // TESTING with !desktop options etc.
		//	pageExperience,
		pageExperience = (pageDetails.experience || s2.w_getExp()).replace(/^titan$/i, 'mob'),
		//pageExperience = (pageDetails.experience || cssExperienceTab).replace(/^titan$/i, 'mob'),
		//pageExperience = (pageDetails.experience || s.w_exprnc).replace(/^titan$/i, 'mob'),
		//useMobileSuite = /^(mob|tab)/i.test(pageExperience),
		useMobileSuite,
		trackingOverrideEnabled = false, // for trackingOverride
		prpty, // local var for looping properties
		//pdModules = (pageDetails.modules || '').split(','),
		friendlyModules,
		//testTrackingObj = s.w_wtT,
		channelManagerKeywords,
		channelManagerSearchType = false,
		clickMapOid,
		visitorLifecycle,
		visitorLifecycleAware = 'Aware',
		visitorLifecycleEngaged = 'Engaged',
		visitorLifecycleConverted = 'Converted',
		visitorLifecycleRetained = 'Retained',
		pageNameDynamicVariable = 'D=pageName', // zzzzz change to D.pageName to reduce pixel
		dateZero = new Date(0), // old date used to clear cookies
		datePlusOneYear = new Date(+new Date() + 31536000000), // 31536000000 = 365*24*60*60*1000 = 1 year
		//customVisitorID,
		//customVisitorID = getQuerystringParam('s_vid', '', fullLocObj.href) || (s.c_rr('s_vid') || s.c_r('s_vid')),
		customVisitorID = getQuerystringParam('s_vid', '', fullLocObj.href) || s2.Util.cookieRead('s_vid'), // ABU MID Value ?
		pageNamePathArray,
		pageBrand = s2.w_config.brand || notSet, //notSet,
		pageSite = s2.w_config.site || notSet, //notSet,
		//pageStatus = 'unsecure',
		pdPageNumber = pageDetails.pageNumber,
		//repeatCall,
		lastSentPage = s2.Util.cookieWrite('lastPg'),
		pdSubSite = cleanText(pageDetails.subSite),
		pdPageNamePrefixPair = cleanText(pageDetails.pageNamePrefixes).split('|'),
		pdPageNamePrefix,
		formTypeOverride,
		pdPreImprs = pageDetails.preImprs,
		eventSerialisationKey,
		nativeAppVersion = s2.Util.cookieRead('AppVersion'),
		voyagerLoadBalancerID = s2.Util.cookieRead('LBWeb'), // to identify issues with load balancers in voyager/OTP not reading RESX values correctly
		pidQuerystring,
		wbcfromQuerystring,
		custTrackingId,
		custTrackingIdPrevious,
		custProfileId,
		custProfileIdPrevious,
		userSwitchedProfile,
		nativeExitToBrowser = customVisitorID && (((/\b(appAction=exit|exitapp=yes)\b/i).test(fullLocObj.href)) || s2.Util.cookieRead('s_exitapp')); // appAction=exit querystring for app safari/browser links that exit the app to desktop-style pages that should go to mob suite to retain app visitor journey

		// default to desktop each call. experience, native app, staff or visible responsive CSS class will override
		//ABU To FIX s_account = s_accts.desktop[s.w_prod ? 'prod' : 'dev'];
		//ABU TO FIX s.sa(s_account);

		//	pageExperience = (pageDetails.experience || cssExperience).replace(/^titan$/i, 'mob'); // zzzzz replace responsive with desktop? or update pages over time?
		//useMobileSuite = /^(mob|tab)/i.test(pageExperience);
		//useMobileSuite = /^(mob|tab)/i.test(pageExperience) || nativeAppVersion; // cookie e.g. iPadTablet-MobBank-WBC/2.57; set by all MAD webviews. tab browser should go to desktop.
		//useMobileSuite = pageExperience === 'mob' || nativeAppVersion; // cookie e.g. iPadTablet-MobBank-WBC/2.57; set by all MAD webviews. tab native webviews should go to mob.
		//Abu Not required useMobileSuite = pageExperience === 'mob' || (nativeAppVersion || nativeExitToBrowser); // cookie e.g. iPadTablet-MobBank-WBC/2.57; set by all MAD webviews. tab native webviews should go to mob. Also check if native app link to safari (e.g. ipad sales pathway - keep sales pathway visit in mobile suite)
		
		//console.log('pageDetails = ' + JSON.stringify(pageDetails)); // debug
		//console.log('pageExperience = ' + pageExperience); // debug

		//console.log('domClickEvent = ' + domClickEvent); // true when any random click on document
		//console.log('trackingLink = ' + trackingLink); // true when tracking a link
		//console.log('trackingPage = ' + trackingPage); // true when tracking a page
		//console.log('trackingToBeDropped = ' + trackingToBeDropped); // tracking was a random click or will be aborted. based on above booleans.

		// update s.pageURL with every call
		s2.pageURL = s2.w_cleanURL(fullLocObj.href, 1);
		
		if (!trackingToBeDropped) {
			// store copy in s object for clicks etc to refer to previous details (pageName etc.)
			s2.w_tempPageDetails = pageDetails;

			// default currency for every request. May be overwritten by different currencies in product string transaction value processing
			//s2.currencyCode = 'AUD';

			// clean short version of transactionID for purchaseID to serialise
			if (/^\[CID:.+\]/i.test(prchId)) {
				// if using CID format, take last 20 chars of CID cookie (if exists)+timestamp
				prchId = /.{1,20}(?=\])/.exec(prchId.replace(/(-|\s|:|^\[CID)/gi, ''))[0];
			}
			// always trim purchaseID to first 20 chars only
			prchId = prchId.substring(0, 20);

			// clean product details if set
			//s.products = (pageDetails.productID ? ';'+lowerCaseVal(pageDetails.productID).replace(/^,+|,+$/g,'').replace(/,+/g,',;') : ''); // legacy pageDetails.productID approach

			//pdProductID = s.w_prodArr(pdProductID);



			// variable to help exclude s_doPlugins tracking from every page click when necessary
			//s.w_nonLink=(typeof s.linkType==='undefined');
			//s.w_pgLoad=(!s.linkType&&s.linkType!=='');
			//s.w_pgLoad = s.linkType===undefined;

			// getPageName plugin settings
			// Default settings
			//s.w_site=notSet;

			// only change experience with full page loads (assists testing)
			//if(s.w_pgLoad){
			//alert('plugins = '+fullLocObj.href);
			//alert('plugins = '+pageDetails.experience);

			// getQueryParam must be first priority to override mob pages from app (hybrid views), cookies must be second so pageDetails doesnt override it
			//s.w_exprnc=(getQuerystringParam('s_experience','',fullLocObj.href)||s.c_r('s_experience')||pageDetails.experience||'none'); // priority to detail passed from app in querystring - so we know if in mob or tab experience
			//s.w_exprnc=(pageDetails.experience||'desktop').replace(/^titan$/i,'mob'); // default is desktop when no value specified. titan is Voyager mob experience

			//if(w_exprnc!=='desktop'){
			//s.c_w('s_experience',s.w_exprnc,new Date(+new Date()+365*24*60*60*1000));
			//}
			//}
			//s.w_path='';
			//s.w_pgStatus='unsecure';

			// Brand specific
			//if (/(?:^|\.)westpac\.com\.au$/i.test(fullLocHostname) || (window.s_w_wbcrgx && window.s_w_wbcrgx.test(fullLocHostname))) {
			if (/(?:^|\.)westpac\.com\.au$/i.test(fullLocObj.hostname) || s2.w_config.brand === 'wbc') {
				pageBrand = 'wbc';
				// Site, Path, Status from context -
				//s.w_site = /(.+)(?:\.westpac\.com\.au$)/i.exec(fullLocObj.hostname) || false;
				pageSite = /(.+)(?:\.westpac\.com\.au$)/i.exec(fullLocObj.hostname); // || [];
				//s.w_site = (s.w_site&&s.w_site[1]?s.w_site[1]:notSet);
				pageSite = pageSite ? pageSite[1] : notSet;
				pageSite = s2.w_config.site || pageSite;
				//s.w_site='pub';

				// OTP secure, oregon secure forms, oregon secure domino forms -
				//if(pageSite === 'banking' && /^\/+secure\/+banking(?:\/|$)/i.test(fullLocObj.pathname)){
				//if (/\bbanking\b/i.test(pageSite) && /^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/)/i.test(fullLocObj.pathname)) {
				if ((/\bbanking\b/i).test(pageSite) && (/^(?:\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(fullLocObj.pathname)) {
					pdInSession = true;
					//pageStatus = 'secure'; // extended to in/out of session for all platforms and for formType
				}

				// OTP SameView staff emulation mode
				if ((/net$/i).test(pageSite) && (/\/emulationbanking\b/i).test(fullLocObj.pathname)) {
					pdInSession = true;
					userSwitchedProfile = true; // in staff sameview, staff change between different profiles constantly

					// Change pageSite to 'banking' to consolidate OTP page names when in emulation in prod (necessary due to different domains)
					if (s2.w_prod) {
						pageSite = 'banking';
					}

					// if staff assist emulation/'SameView' mode, set event60 for segmentation and switch to staff suite
					//if (!!document.getElementById('emulation') || s.c_r('emuMod')) { // was using s.w_emulMde... and initially 'analytics-emulation-mode' ID in FiServ FBS
					//if (/^(?:\/voyagerRM\/emulationbanking\b)/i.test(fullLocObj.pathname)) {
					//s_account = useMobileSuite ? s.w_acctStfMob : s.w_acctStf;
					//ABU s_account = s_accts[useMobileSuite ? 'mob' : 'desktop'][s.w_prod ? 'staff' : 'dev'];
					//ABU s.sa(s_account);

					if (getValueOnce(s2.Util.cookieRead('s_wbc-pi'), 'emul', 30, 'm')) { // fire event once per customer profile ID, only when cookie unavailable (in session)
						appendEvent(60);
					}
					//}
				}

				//if(/online/i.test(pageSite)){
				//if(pageSite === 'online'){
				if ((/\bonline\b/i).test(pageSite) && (/^(?:\/dforms\/forms\/secure\/|\/cust\/wps\/(?:my)?portal\/wol\/|\/oregon\/[^\/]+?\/wol\/)/i).test(fullLocObj.pathname)) {
					pdInSession = true;
				}

				// zzzzz confirm if Oregon form name shortening required in this s_code version (for Oregon / online.westpac.com.au)
				// replace long names on Oregon forms
				/*
				if (/\s(online|dev)\s/i.test(s.w_codeVers)) { // if Oregon platform JS (s.w_codeVers) (used in online and banking subdomains) reduce long form names
				pdFormName = cleanText(pdFormName
				.replace(/(.*?\b.*?\b.*)\b(.*)\b\1\b/g, '$1$2') // replacing duplicate sets of words
				.replace(/\u00ae/g, '') // \u00ae = unicode Registered symbol Â® - escaped for compatibility
				.replace(/\bwestpac\b/gi, '')
				.replace(/\bsingapore airlines\b/gi, 'sg air')
				.replace(/\bbusiness\b/gi, 'bus')
				.replace(/\band\b/gi, '&')
				.replace(/\baltitude\b/gi, 'alt')
				.replace(/\bmastercard\b/gi, 'mc')
				.replace(/\bvisa card\b/gi, 'visa')
				.replace(/\bamerican express(?: cards?\b)?/gi, 'amex')
				.replace(/\bplatinum\b/gi, 'plat'));
				}
				 */
			}

			// Set values for microsites. This may be commented out for other domains
			/*
			// phase 2 microsites TBA -
			if(/(?:^|\.)rubyconnection\.com\.au$/i.test(fullLocObj.hostname)){
			s.w_brand='wbc';
			s.w_site='ruby';
			if(/^\/+forum(?:\/|$)/i.test(fullLocObj.pathname)){
			s.w_pgStatus='secure'; // Confirm
			}
			}
			if(/(?:^|\.)davidsoninstitute\.edu\.au$/i.test(fullLocObj.hostname)){
			s.w_brand='wbc';
			s.w_site='dav';
			if(/^\/+signin(?:\/|$)/i.test(fullLocObj.pathname)){
			s.w_pgStatus='secure'; // Confirm
			}
			}
			 */

			// Example code for other group domains. This would be in another scode version
			//if (s.w_config.brand === 'stg') {
			//	pageBrand = 'stg';
			//	pageSite = s.w_config.site || notSet;
			//}

			// check if analytics JS has tested current URL as authenticated location
			if (s2.w_config.authUrl) {
				pdInSession = true;
			}

			// Consider setting detected session status into property in pageDetails for reference/marketing tags? otherwise not available outside this function
			//pageDetails.inSession = pdInSession;

			// Leftmost value for getPageName plugin based on platform/experience and URL details
			// s.siteID=s.w_brand+':'+s.w_exprnc+':'+s.w_site; // with experience in pageName
			//s.siteID = pageBrand + ':' + pageSite; // without experience in pageName
			//s.siteID = pageBrand + ':' + pageSite + (pdSubSite ? ':' + pdSubSite : ''); // with subSite like COL - brand:site:subSite:section (set as colon in subSiteSeparator)
			s2.siteID = pageBrand + ':' + pageSite + (pdSubSite ? (pageDetails.subSiteSeparator || '-') + pdSubSite : ''); // with subSite like APPS - brand:site-subSite:section.



			// get s_vid (was s_visitorID) parameter passed from app wrapper
			//customVisitorID = getQuerystringParam('s_vid', '', fullLocObj.href) || (s.c_rr('s_vid') || s.c_r('s_vid')); // s_vid may be set directly in real cookie by apps
			//if (customVisitorID && customVisitorID !== '_custsvid_') { // don't set visitor ID to a generic placeholder vid from NBA links inserted in apps etc. may not need to check for _custsvid_ now that custom VID set in cookie by apps - confirm also set for e.g. NBA links from app
			if (customVisitorID) { // don't set visitor ID to a generic placeholder vid from NBA links inserted in apps etc.
				s2.visitorID = customVisitorID;
				// extend cookie for 1 year -
				s2.Util.cookieWrite('s_vid', customVisitorID, datePlusOneYear); //ABU fix for mid
			}

			if (/^dev_/.test(customVisitorID)) { // if starts with dev_ change to respective dev suite. native apps may use prod target hard-coded to dev suite for native tracking only - hybrid screen tracking then goes to prod.
				s2.w_prod = false;
				s2_account = "wbg-banking-dev";  //ABU TODO switch to Dev RS
				s2.sa(s_account);
			}

			if (nativeExitToBrowser) {
				// keep cookie for 2 hours to tie this visit to a native mobile app link to safari
				s2.Util.cookieWrite('s_exitapp', '1', new Date(+new Date() + 7200000));
			}


			// switch to timestamped suite for all mobile, tablet, app and hybrid experiences (including those not hitting JS, eg. tabapp, for clarity in testing)
			//if (/^(?:mob.*|tab.*)/i.test(pageExperience)) { // 'titan' from OTP is changed to 'mob' for consistency
			/* ABU TODO timestamp
			   if (useMobileSuite) { // 'titan' from OTP is changed to 'mob' for consistency
				// switch to timestamped suite
				if (s_accts.mob.timestamp) {
					s.timestamp = Math.round(new Date() / 1000);
				}

				// switch between dev and prod timestamped suites based on domain list in config at top
				//s_account = s.w_acctMob;
				s_account = s_accts.mob[s.w_prod ? 'prod' : 'dev'];
				s.sa(s_account);

				//if (customVisitorID) {
				//if (customVisitorID || s.c_rr('AppVersion')) { // added for Corp - if apps dont have native tracking, they should at least have this cookie. Android may sync this with browsers outside the app??
				//if (s.c_rr('AppVersion')) { // added for Corp - if apps dont have native tracking, they should at least have this cookie. Android may sync this with browsers outside the app??
				// View mode if app visitorID detected
				//s.prop12 = 'native app';
				//s.prop12 = 'D="native app:"+AppVersion'; // dynamic cookie names must start with 's_'
				//s.prop12 = nativeAppVersion ? 'native app:' + nativeAppVersion : ''; // eg. native app:iPadTablet-MobBank-WBC/2.57;
				s.prop12 = (nativeAppVersion || nativeExitToBrowser) ? 'native app:' + (nativeAppVersion || '(exit app)') : ''; // eg. native app:iPadTablet-MobBank-WBC/2.57;
				//}

				// if app/hybrid cookie has dev_ prefix, force to dev suite
				/ ABU  *
				if (/^dev_/.test(customVisitorID)) { // move this out of mobile-only condition. if starts with dev_ change to respective dev suite for current experience? Maybe object of suite names for relevant experience?
				//s_account = s.w_acctMobDev;
				s_account = s_accts[useMobileSuite ? 'mob' : 'desktop'].dev;
				s.sa(s_account);
				}
				 * ABU //
				//}

				// cookie passed from app to connect hybrid page views. now will be querystring - Android can't reliably pass cookie
				//s.visitorID=s.c_rr('s_vid');
				//alert(fullLocObj.href);
				//s.visitorID=(getQuerystringParam('s_vid','',fullLocObj.href)||s.c_r('s_vid'));
			}  */

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
					s2.Util.cookieWrite('frmTypOv', pdPageType + pdFormName + '-' + pdFormType); // prefix should also include pdSubSite to avoid clash on multi-sites?
				} else {
					formTypeOverride = /(.*)-(.*)/.exec(s2.Util.cookieRead('frmTypOv'));
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
				sPageNameTemp = s2.siteID + ':' + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : ''); // with subSite coming from s.siteID
				//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageType || notSet) + ':' + formNameAlt + (pdPageName ? ':' + pdPageName : '');
			} else {
				if (pdPageName) {
					// orig name code -
					//sPageNameTemp = s.siteID + ':' + pdPageName;
					// now with switch for in/out of session prefix -
					//sPageNameTemp = s.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
					//sPageNameTemp = s.siteID + ':' + (pdSubSite ? pdSubSite + ':' : '') + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName;
					sPageNameTemp = s2.siteID + ':' + (pdPageNamePrefix ? pdPageNamePrefix + ':' : '') + pdPageName; // with subSite coming from s.siteID
				} else {
					// else use getPageName plugin to get details directly from URL
					//sPageNameTemp = s.getPageName(s.pageURL); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
					//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
					//sPageNameTemp = decodeURIComponent(s.getPageName(s.pageURL)).replace(/^(.+?:.+?:)/, '$1' + (pdSubSite ? pdSubSite + ':' : '')); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
					sPageNameTemp = decodeURIComponent(s2.getPageName(s2.pageURL)); // may be decodeURIComponent(s.pageURL) for consistent URL format when errors/encoded chars. e.g %2F in OTP - may remove encoded chars in querystring though
					//console.log(sPageNameTemp);
				}
			}

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

			// pageName eVar
			s2.eVar21 = pageNameDynamicVariable;
			// hierarchy
			s2.hier1 = pageNameDynamicVariable;

			// common event58 for branchdetail, atmdetail, teamdetail pages
			if (/^(?:branch|atm|team)detail$/.test(pdPageType)) {
				//s.events = s.apl(s.events, 'event58', ',', 2); // using shorter function call like appendEvent(58);
				appendEvent(58);
			}


			// this should work for identifying both application and enquiry forms for serialisation
			eventSerialisationKey = ((pdProductID && pdProductID[0] && pdProductID[0].prod) || '') + pdFormName; // if the product or form name changes between start and complete steps, or journey crosses domain origin (localStorage), the serialisation won't reset at complete step in that serial range (e.g. visit).
			eventSerialisationKey = eventSerialisationKey ? eventSerialisationKey + pdFormType : false; // without formType, the same product or form name in a different journeys could be deduped, e.g. skipping some start events. If prod and form are blank, dont use only formType - it could dedupe many other forms of the same type. Would require subSite in key if same pageType + formName shouldn't be joined across different subSite + formType (e.g. should long-short form across two different subSites match?)

			// determine tracking scenario
			switch (pdPageType) {
			case 'form':
				if (pdPageStep && pdTransactionId) {
					s2.transactionID = pdPageStep + '_' + pdTransactionId;
					s2.eVar39 = 'D=xact';
				}
				if (pdPageStep === 'save') {
					//s.transactionID = pdTransactionId ? 'save_' + pdTransactionId : '';
					//s.eVar39 = 'D=xact';
					appendEvent(73);
				}
				if (pdPageStep === 'retrieve') {
					appendEvent(74);
				}
				break;
			case 'tool':
				//s.eVar23 = 'tool:'+pdFormName; // remove all these from switch cases, capture once for all forms
				//s.prop23 = 'D=v23';
				//s.eVar62 = lowerCaseVal(pdFormName,1);
				s2.eVar62 = pdFormName || notSet;
				s2.prop62 = dVar(62);
				appendEvent(68);
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
					s2.eVar28 = s2.w_fixZero(pageDetails.surveyScore) || notSet;
					appendEvent(64);
				}
				break;
			case 'selfservice':
				//s.eVar23 = 'selfserv:'+pdFormName;
				//s.prop23 = 'D=v23';
				//s.eVar38 = lowerCaseVal(pdFormName,1);
				s2.eVar38 = pdFormName || notSet;
				s2.prop38 = dVar(38);

				s2.eVar64 = lowerCaseVal(pageDetails.externalSiteName);

				switch (pdPageStep) {
				case 'start':
					appendEvent(35);
					break;
				case 'complete':
					appendEvent(36);
					if (pdSelfserviceDetails) {
						s2.eVar46 = pdSelfserviceDetails || notSet;
						s2.prop46 = dVar(46);
						// self service detail var to capture type of self service, introduced as part of Nov 16E1  Wlive release  *au
					}
					break;
				case 'forgotpasswordstart':
					appendEvent(48);
					appendEvent(35);
					break;
				case 'forgotpasswordcomplete':
					appendEvent(36);
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
				s2.eVar14 = getValueOnce(s2.w_srchTerm(pdSearchTerm), 'stv', 30, 'm'); // getValOnce after #. Hash only 5+ digits?
				if (s2.eVar14) {
					s2.prop14 = dVar(14);
					// split search term into keywords
					s2.list1 = cleanText(s2.eVar14.replace(/[^a-z]+/gi, ' ')).replace(/\s/g, ','); // ,4); // for list prop, remove all chars outside a-z
					//s.eVar15 = pageBrand + ':' + (pageSite==='banking'?'secure':'public'); // OTP doesnt have site search
					appendEvent(14);
					//s.eVar30 = 'sitesearch:' + pdSearchResults; // use pdPageType here in place of text sitesearch string
					s2.eVar30 = pdPageType + ':' + pdSearchResults;
					//if(s.eVar30==='sitesearch:0'){
					//console.log(pdSearchResults);
					//if (s.eVar30 === pdPageType + ':0') {
					if (pdSearchResults === '0') {
						appendEvent(16);
					}
				} //else{
				//	s.eVar14 = notSet;
				//}
				//}
				break;
			case 'faqsearch':
				// pageDetails passed from function call on faq search result div load
				s2.eVar58 = getValueOnce(s2.w_srchTerm(pdSearchTerm), 'faq', 30, 'm');
				if (s2.eVar58) {
					s2.prop58 = dVar(58);
					appendEvent(65);
					//s.eVar30 = 'faqsearch:' + pdSearchResults;
					s2.eVar30 = pdPageType + ':' + pdSearchResults;
				}
				break;
			case 'branchsearch':
				// pageDetails passed from function call on branch search result div load
				sPageNameTemp += ':searchresults';

				//if(s.w_pgLoad){ // getValOnce would be cleared on every page click/doPlugins in this pageType case
				//s.eVar44 = getValueOnce(lowerCaseVal(pageDetails.searchTerm,1).replace(/\d/g,'#').replace(/\s+/g,' ').replace(/^\s|\s$/g,''),'s_brnch',0); // hash numbers, postcodes
				//s.eVar44 = getValueOnce(s.w_srchTerm(),'s_brnch',0); // hash numbers, keep postcodes in function
				s2.eVar44 = s2.w_srchTerm(pdSearchTerm); // hash numbers, keep postcodes. not val once, every time
				if (s2.eVar44) {
					s2.prop44 = dVar(44);
					s2.prop45 = pageDetails.searchFilters || notSet;
					appendEvent(57);
					//s.eVar30 = 'branchsearch:' + pdSearchResults;
					s2.eVar30 = pdPageType + ':' + pdSearchResults;
					//if(s.eVar30==='branchsearch:0'){
					//if (s.eVar30 === pdPageType + ':0') {
					if (pdSearchResults === '0') {
						appendEvent(16);
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
					appendEvent(51);
					break;
				case 'complete':
					appendEvent(52);
					//appendEvent(46); // this should be set automatically by session/cookie server-side process in OTP/online banking
					break;
				}
				break;
			case 'product':
				//s.products = ';' + (pageDetails.productID||notSet).replace(/,/g,',;');
				switch (pdPageStep) {
				case 'view':
					appendEvent(13);
					break;
					//case 'selection': // product selection event/page not applicable/required
					//	appendEvent(32);
					//	break;
				case 'comparison':
					appendEvent(30);
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
					appendEvent(38);
					pdProductID = paymentProduct;
					break;
					//case 'pinauthorisation':
					//	appendEvent(42); // not used
					//	break;
				case 'complete':
					appendEvent(39);
					pdProductID = paymentProduct;

					// removed to reduce reference IDs. payment ref not required
					//s.transactionID = pdTransactionId ? 'pay_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
					//s.eVar39 = 'D=xact';

					//s.purchaseID = prchId; // serialise all events with revenue/value. confirm uniqueness. maybe only capture in transactionID/xact
					//appendEvent('purchase'); // TODO. serialise payments to de-dupe amounts?

					break;
				case 'businessstart':
					// payment submitted/created, awating approval. business OTP 1.2
					appendEvent(42);
					pdProductID = paymentProduct;
					break;
				case 'createpayment':
					// payment submitted/created, awating approval. business OTP 1.2
					appendEvent(43);
					pdProductID = paymentProduct;
					break;
				case 'authorisepayment':
					// intermediate approval step. business OTP 1.2
					//s.eVar42 = lowerCaseVal(pageDetails.businessAuthType, 1); // not used
					//s.prop42 = dVar(42);
					appendEvent(44);
					pdProductID = paymentProduct;
					break;
				case 'effectpayment':
					// final approval step, payment processed/scheduled. business OTP 1.2
					appendEvent(45);
					pdProductID = paymentProduct;
					break;
				case 'bulkpaymentapproval':
					// final bulk approval step. business OTP 1.2 step name also above, in setting paymentProduct
					appendEvent(37); // bulk payment approval completed step
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
					appendEvent(46);
				}

				break;
			case 'logout':
				//s.eVar23 = 'logout:'+s.eVar6+':'+pdFormName; // does the brand from the URL make sense here? Is it required, or should it be external site name?
				s2.eVar40 = 'logged out';
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
					appendEvent(53);
					// serialise enquiry start
					appendEvent('event28' + s2.w_serialise(eventSerialisationKey, pdPageStep));
					break;
				case 'complete':
					appendEvent(54);
					// serialise enquiry complete
					appendEvent('event29' + s2.w_serialise(eventSerialisationKey, pdPageStep));

					//s.transactionID='enq_'+pdTransactionId; // prefix to avoid duplicates with other applications etc.
					s2.transactionID = pdTransactionId ? 'enq_' + pdTransactionId : ''; // prefix to avoid duplicates with other applications etc. only capture ID if set
					s2.eVar39 = 'D=xact';

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
					s2.transactionID = pdPageStep + '_' + pdTransactionId;
					s2.eVar39 = 'D=xact';
				}

				switch (pdPageStep) {
				case 'start':
					appendEvent(21);
					appendEvent('event26' + s2.w_serialise(eventSerialisationKey, pdPageStep));

					//console.log('s.events = ' + s.events);
					//s.eVar31 = 'start';

					break;
				case 'save':
					appendEvent(24);
					break;
				case 'retrieve':
					appendEvent(23);
					break;
				case 'complete':
					appendEvent(22);
					// mark serial stamp as complete once hit. re-use same stamp if starting same form again if not completed, generate new serial if form has been completed (in the same origin)
					appendEvent('event27' + s2.w_serialise(eventSerialisationKey, pdPageStep));
					//console.log(eventSerialisationKey);

					s2.transactionID = pdTransactionId;
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

					s2.purchaseID = prchId; // confirm uniqueness
					//s.events = s.apl(s.events,'purchase',',',2);
					appendEvent('purchase'); // only when approved? (not declined, referred, customer declined). Only really used for serialising, so maybe always fire?...

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
						appendEvent(18);
					}
					//if (pdFormStatus === 'declined') {
					if (/^declined/i.test(pdFormStatus)) {
						appendEvent(19);
					}
					//if (pdFormStatus === 'referred') {
					if (/^referred/i.test(pdFormStatus)) {
						appendEvent(20);
					}
					if (pdFormStatus === 'approved:downselldeclined') {
						appendEvent(25);
					}

					break;
				}
				break;
			case 'servererror':
				// 404, 500 etc. on page load
				// align pageName for errors to correspond to similar section details of other pages
				sPageNameTemp = s2.siteID + ':err:' + lowerCaseVal(pageDetails.errorCode, 1) + ':' + s2.pageURL;
				//console.log(sPageNameTemp);
				pageNamePathArray = sPageNameTemp.split(':').slice(0, 4); // provide truncated path for section details, if error page (remove URL)
				if (String(pageDetails.errorCode) === '404') {
					s2.pageType = 'errorPage';
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
			sPageNameTemp = s2.w_valReplace(s2.w_valReplace(sPageNameTemp, s2.w_lStor('get', 'analytics_pageNameReplace')), pageDetails.pageNameReplace); // global + local replace
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
			//s.w_pathArr = pageNamePathArray; // for use outside this function
			// New version with experience removed from pageName -
			s2.eVar6 = pageNamePathArray[0]; // Brand
			s2.prop6 = dVar(6);
			//if (pageNamePathArray[1]) { // Site
			s2.eVar1 = pageNamePathArray.slice(0, 2).join(':');
			s2.prop1 = dVar(1);
			//}
			//if (pageNamePathArray[2]) { // Site section
			s2.eVar2 = pageNamePathArray.slice(0, 3).join(':');
			s2.prop2 = dVar(2);
			if (s2.eVar2 === sPageNameTemp) {
				s2.eVar2 = s2.prop2 = pageNameDynamicVariable;
			}
			//}
			//if (pageNamePathArray[3]) { // Sub section
			s2.eVar3 = pageNamePathArray.slice(0, 4).join(':');
			s2.prop3 = dVar(3);
			if (s2.eVar3 === sPageNameTemp) {
				s2.eVar3 = s2.prop3 = pageNameDynamicVariable;
			}
			//}
			//if (pageNamePathArray[4]) { // Sub sub section
			s2.eVar4 = pageNamePathArray.slice(0, 5).join(':');
			s2.prop4 = dVar(4);
			if (s2.eVar4 === sPageNameTemp) {
				s2.eVar4 = s2.prop4 = pageNameDynamicVariable;
			}
			//}
			//if (pageNamePathArray[5]) { // Sub sub sub section
			s2.eVar5 = pageNamePathArray.slice(0, 6).join(':');
			s2.prop5 = dVar(5);
			if (s2.eVar5 === sPageNameTemp) {
				s2.eVar5 = s2.prop5 = pageNameDynamicVariable;
			}
			//}


			// server from full domain
			//s.server = lowerCaseVal(fullLocObj.hostname);
			s2.server = lowerCaseVal(fullLocObj.hostname + (/\s(banking|dev)\s/i.test(s2.w_codeVers) && voyagerLoadBalancerID ? '-' + voyagerLoadBalancerID : '')); // capture server/load balancer ID R01 = Ryde, WS01 = Western Sydney

			// experience from app/pageDetails
			//s.eVar7=pageExperience; // mob/mobapp/tab/tabapp is mobile suite, everything else is desktop
			//s.eVar7 = s.linkName ? 'link' : pageExperience; // switch to 'link' for link tracking
			// switch to '(link)' for link tracking where experience may not be set/available in pageDetails?
			//s.eVar7 = s.linkName ? (pageExperience || '(link)') : pageExperience;
			s2.eVar7 = pageExperience;
			s2.channel = dVar(7);

			// standard form name details
			//formNameAlt=(pdFormName||pdTransactionType); // Payments use pdTransactionType as part of form name, not the formName from pageDetails
			if (pdPageType && formNameAlt) {
				//s.eVar23 = s.eVar6+':'+pdPageType+':'+formNameAlt; // excludes sub-domain, e.g. - wbc:application
				s2.eVar23 = s2.siteID + ':' + pdPageType + ':' + formNameAlt; // includes sub-domain, e.g. - wbc:online:application // if this matches v3, D=v3 could be used here
				s2.prop23 = dVar(23);
				if (pdPageStep === 'start') {
					appendEvent(55);
				}
				if (pdPageStep === 'complete') {
					appendEvent(56);
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
			s2.prop7 = pdPageType || pageTypeAlt;

			// track page number for search results etc.
			s2.prop8 = pdPageNumber ? ((pdPageType || notSet) + ':' + pdPageNumber) : '';

			// Visit number
			//s.eVar8 = s.w_cap(s.getVisitNum(365), 1000);
			s2.eVar8 = s2.w_cap(s2.getVisitNum(365), 1000) + s2.w_extCkSfx; // appends if external cookie data
			//if(s.eVar8>1000){
			//	s.eVar8='1000+';
			//}

			// days since last visit
			//s.eVar29=s.getDaysSinceLastVisit('s_lv',1);
			//s.eVar29=(s.eVar29==='0'?'zero':s.eVar29);
			//s.eVar29=s.w_fixZero(s.eVar29);
			s2.eVar29 = s2.w_cap(s2.w_fixZero(s2.getDaysSinceLastVisit('s_lv', 1)), 1000) + s2.w_extCkSfx; // appends if external cookie data
			//if(s.eVar29>1000){
			//	s.eVar29='1000+';
			//}

			// visitor id
			s2.eVar25 = s2.prop25 = (customVisitorID ? 'D=vid' : 'D=s_vi'); // if s.visitorID passed from mobile app to hybrid pages, variable will be vid, else use FP-cookie name
			//s.prop25 = s.eVar25;

			// generic account ID - value in cookie should have a prefix like 'corp_'. These will get overwritten through different sites, but could be tied together with visitor ID etc.
			// included for CORP and other sites that require tracking ID
			s2.eVar34 = s2.prop34 = 'D=s_wbc-gi';
			//s.prop34 = s.eVar34;

			// customer tracking ID
			s2.eVar35 = s2.prop35 = 'D=s_wbc-ti'; // cookie is set at .westpac.com.au
			//s.prop35 = s.eVar35;

			// business account ID
			//s.eVar41 = 'D=BUS-ACCOUNT-ID'; // was originally proposed for OTP 1.2. currently not required
			//s.prop41 = dVar(41);

			// customer otp profile
			//s.eVar47 = getValueOnce(s.c_rr('s_wbc-pi'), 'pi', 30, 'm'); // cookie is set at full domain - banking.westpac.com.au. Could be dynamic value if these cookies available at .westpac.com.au
			s2.eVar47 = s2.prop47 = 'D=s_wbc-pi';
			//s.prop47 = dVar(47);

			// Webseal ID proxy
			//s.eVar48 = getValueOnce(s.c_rr('s_wbc-ses'), 'ses', 30, 'm'); // cookie is set at banking.westpac.com.au. wouldnt be able to access from smetrics if was httpOnly, as set on banking.westpac.com.au ...
			//s.prop48 = dVar(48);
			s2.eVar48 = s2.prop48 = 'D=s_wbc-ses';

			// customer type segment
			//s.eVar50 = getValueOnce(s.c_rr('s_wbc-seg'), 'seg', 30, 'm'); // cookie is set at .westpac.com.au, but value is short and may be useful on page
			//s.prop50 = dVar(50);
			//s.eVar50 = s.prop50 = 'D=s_wbc-seg';
			s2.eVar50 = s2.prop50 = s2.Util.cookieRead('s_wbc-seg'); // if values are short capture as-is, else use dynamic value to get value server-side.

			// detect OTP/online banking profile switching
			custTrackingId = s2.Util.cookieRead('s_wbc-ti');
			if (custTrackingId) {
				custTrackingIdPrevious = s2.Util.cookieRead('ti');
				s2.Util.cookieWrite('ti', custTrackingId); // update to current
			}
			custProfileId = s2.Util.cookieRead('s_wbc-pi');
			if (custProfileId) {
				custProfileIdPrevious = s2.Util.cookieRead('pi');
				s2.Util.cookieWrite('pi', custProfileId); // update to current
			}
			if (custTrackingId && custTrackingId === custTrackingIdPrevious && custProfileId && custProfileIdPrevious && custProfileId !== custProfileIdPrevious) {
				userSwitchedProfile = true;
				s2.prop59 = '(switch profile)';
				//console.log('Profile switched'); // detect when only switching profiles and landing on dashboard vs. a new login to dashboard
			}

			// page status
			//s.prop40 = pageStatus;
			//s.prop40 = pdInSession ? 'secure' : 'unsecure'; // switching based on URL
			s2.prop40 = pdInSession ? 'logged in' : 'public'; // switching based on URL

			// site language from page if set
			//s.eVar63 = lowerCaseVal(pageDetails.language||'en'); // only captured in prop63
			s2.prop63 = lowerCaseVal(pageDetails.language || 'en');
			//s.prop63 = 'D=v63';

			// Day Of Week, Time Of Day
			//var s_tpA = s.getTimeParting('s','+10');
			//s.eVar10 = s_tpA[1]+'|'+s_tpA[2]; // Adobe orig converted format
			s2.eVar10 = s2.w_timePart(); // local time in shorter format
			s2.prop10 = dVar(10);

			// External Campaigns
			//if(!s.campaign){
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			s2.campaign = getValueOnce(lowerCaseVal(getQuerystringParam('cid', '', fullLocObj.href)), 's_cid', 30, 'm'); // getValueOnce only if data will be sent, else value may not be sent
			//}
			if (s2.campaign) {
				s2.eVar16 = 'D=v0';
				s2.eVar17 = 'D=v0';
				s2.eVar18 = crossVisitPrtcptn(s2.campaign, 's_ev18', '30', '5', '>', 'event22'); // this is cleared every time event22 fires. i.e. Application Complete step
			}

			//console.log('ORIG s.list2  = ' + s.list2); // impressions from banner cookie related to previous page, collected after it loaded
			//console.log('pdPreImprs    = ' + pdPreImprs); // any other impressions passed for the current page after trackPage was called, but before it completed (and scanning links)
			pdPreImprs = pdPreImprs ? pdPreImprs.split(',') : [];
			for (prpty = 0; prpty < pdPreImprs.length; prpty++) {
				//ABU cant find .apl function 
				s2.list2 = s2.apl(s2.list2, pdPreImprs[prpty], ',', 2);
			}
			//console.log('NEW s.list2   = ' + s.list2); // combined list of impressions for previous page
			if (s2.list2) {
				s2.w_addEvt(11);
			}

			// Internal banner clicks
			pidQuerystring = lowerCaseVal(getQuerystringParam('pid', '', fullLocObj.href));
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			s2.eVar22 = getValueOnce(pidQuerystring, 's_pid', 30, 'm');
			//}

			// count every pid click for comparison to getValueOnce count
			if (pidQuerystring) {
				appendEvent(10);
			}

			//if(s.eVar22&&!s.eVar65){
			if (s2.eVar22) {
				appendEvent(12);
				s2.eVar20 = crossVisitPrtcptn(s2.eVar22, 's_ev20', '30', '5', '>', 'event22');
			}
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			s2.eVar65 = getValueOnce(lowerCaseVal(getQuerystringParam('ref', '', fullLocObj.href)), 'refPrm', 30, 'm');
			//}
			// incoming links from AFS-group sites
			//if(s.eVar22&&s.eVar65){
			// ref is now just an additional parameter for tracking links from other sites
			if (s2.eVar65) {
				appendEvent(72);
			}
			//else{
			//	s.eVar65='';
			//}

			// Page modules shown on dashboard
			// refer to widget name mapping in resx to lookup friendly names
			//pdModules=lowerCaseVal((pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts'));
			//pdModules=(pageDetails.modules||'').replace(/\B[aeiou]\B|\s|widget/gi,'').replace(/accnts/gi,'acts').replace(/pymnts/gi,'pmts');
			//pdModules=(pageDetails.modules||'').split(',');
			//pdModules = pdModules.split(',');
			friendlyModules = s2.w_moduleLookup((pageDetails.modules || '').split(','), (pageDetails.moduleKey || '').split(','));

			//s.eVar55 = getValueOnce((friendlyModules ? (/:overview:dashboard$/i.test(sPageNameTemp) ? 'grid' : 'list') + ',' + friendlyModules : ''), 'mdlVar', 0); // modules will be in grid format on overview/dashboard
			s2.eVar55 = getValueOnce((pageDetails.moduleLayout || '') + (friendlyModules ? ',' + friendlyModules : ''), 'mdlVar', 30, 'm'); // modules will be in grid format on overview/dashboard

			//s.prop55 = 'D=v55';
			s2.prop55 = dVar(55);

			// call every time on dashboard page to compare current to previous modules and diff for added/removed
			// except when only switching profiles. when switching profile, modules change, but not through direct modification.
			if (userSwitchedProfile) {
				// when switching, update stored module set to current profile modules
				s2.Util.cookieWrite('mdlSet', friendlyModules);
			} else {
				// track as a module change
				s2.prop64 = s2.w_checkModuleChanges('mdlSet', friendlyModules);
				if (s2.prop64) {
					appendEvent(70);
				}
			}
			/*ABU TODO Click map to Actifity MAP
			// clear invalid clickmap values generated for custom links
			clickMapOid = (/(.*oid%3D)(.*?)(%26|$)/).exec(s.c_r('s_sq'));
			if (clickMapOid && clickMapOid[2]) {
				if (!(/_[0-9]+$/).test(clickMapOid[2])) {
					s2.Util.cookieWrite('s_sq', 0, dateZero); // remove invalid s_sq cookie
				}
			}*/

			// Featured content - fid/wbcfrom - for secondary promo tracking (Patrick)
			//if (doPluginsAsPageLoad) { // use getQueryParam to record details on page load only, else getValOnce is fired on the doPlugins calls from link clicks and prevents capture at subsequent load. (this assists with test page links)
			s2.eVar60 = getValueOnce(lowerCaseVal(getQuerystringParam('fid', '', fullLocObj.href) || getQuerystringParam('wbcfrom', '', fullLocObj.href)), 'feat', 30, 'm');
			//}
			if (s2.eVar60) {
				appendEvent(66);
				s2.prop60 = dVar(60);
			}


			// Combined Internal External Stack
			if (s2.eVar22) {
				s2.eVar19 = crossVisitPrtcptn(s2.eVar22, 's_ev19', '30', '10', '>', 'event22');
			}
			if (s2.campaign) {
				s2.eVar19 = crossVisitPrtcptn(s2.campaign, 's_ev19', '30', '10', '>', 'event22');
			}


			// Paid/Natural Search Keyword
			s2.prop18 = pageNameDynamicVariable; // set to just pageName as default

			/*ABU TODO channelManager plugin
			s._channelParameter = 'Campaign|cid';
			s.w_channelManager('cid');

			//channelManagerKeywords = cleanText(s._keywords || ''); // filter search keywords a bit - strip multiple spaces etc.
			channelManagerKeywords = cleanText(s._keywords); // filter search keywords a bit - strip multiple spaces etc.

			if (s._channel === 'Natural Search') {
				channelManagerSearchType = 'NS';
				// prop18 seo keywords and entry page
				s.prop18 = 'D="' + channelManagerKeywords + '|"+pageName';
			}
			//if(s._channel==='Campaign'&&/^sem:/i.test(s._campaign)){ // if cid param, and value starts with 'sem:' (just check for any CID). confirm identifier for PPC tracking codes
			if (s._channel === 'Campaign' && channelManagerKeywords !== 'n/a') { // only if cid param exists and keywords are found, it's paid search. We may not have keywords if they are not passed by the search engine (usually for NS)
				channelManagerSearchType = 'PS';
			}
			if (channelManagerSearchType) {
				s.eVar11 = channelManagerKeywords === 'n/a' ? 'Keyword Unavailable' : channelManagerKeywords;
				s.prop11 = dVar(11);

				s.eVar12 = crossVisitPrtcptn(channelManagerSearchType + '|' + channelManagerKeywords, 's_ev12', '30', '5', '>', 'event22');
			}
            */
			// Lifecycle. consider re-setting to avoid build up to later levels?
			visitorLifecycle = s2.Util.cookieRead('s_lfcl');
			if (visitorLifecycle === '') { // No previous lifecycle cookie
				if (!s2.Util.cookieWrite('testCkie', 'set', new Date(+new Date() + 10000))) { // test if lifecycle cookie can be set to prevent events from re-firing
					visitorLifecycle = 'No cookies';
				} else {
					s2.Util.cookieWrite('testCkie', 0, dateZero);
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
			s2.Util.cookieWrite('s_lfcl', visitorLifecycle, datePlusOneYear);
			s2.eVar36 = visitorLifecycle + s2.w_extCkSfx; // appends if external cookie data
			s2.prop36 = dVar(36);

			// search results clickthru event for auto suggest results only *au
			wbcfromQuerystring = lowerCaseVal(getQuerystringParam('wbcfrom', '', fullLocObj.href));
			if (/sitesearch:autosuggest:results/i.test(wbcfromQuerystring)) {
				s2.w_addEvt(15);
				// clickthru event from "search results page" is triggered when prop16 is set
			}

			// Previous Page name
			//s.prop15 = s.getPreviousValue(sPageNameTemp, 'gpv_p15', '');
			//if (s.prop15 === sPageNameTemp) {
			//	s.prop15 = pageNameDynamicVariable;
			//}
			// refactored and referencing lastPg cookie
			s2.prop15 = lastSentPage === sPageNameTemp ? pageNameDynamicVariable : lastSentPage;

			// Previous pixel length
			s2.prop69 = s2.w_cap(s2.Util.cookieRead('lastReqLen'), 5000);
			//if(s.prop69>5000){
			//	s.prop69='5000+';
			//}

			// capture URL
			//s.eVar26 = 'D=Referer'; // this is the full unprocessed page URL from HTTP header (excludes hash)
			//s.eVar26 = 'D=Referer' + (fullLocObj.hash ? '+"' + fullLocObj.hash + '"' : ''); // this is the full unprocessed page URL from HTTP header (includes hash)
			s2.eVar26 = 'D=Referer+"' + fullLocObj.hash.replace(s2.w_guidRgx, '(GUID)') + '"'; // this is the full unprocessed page URL from HTTP header (includes hash)

			s2.prop26 = 'D=g'; // this is the filtered page URL from JS document (will include hash if any)

			// capture user-agent
			//s.prop27 = 'D=User-Agent'; // capture with proc rule to increase capture (non-JS), reduce JS size and reduce pixel length

			// track scode version
			s2.prop39 = s2.w_codeVers;

			// track site + source data version/details + pageKey for page audit.
			// dont capture in IE - makes pixel too long
			//ABU TODO no isie (!s.isie) { // as of s_code version H.26.2, s.isie == false in IE11 due to useragent change in IE 11 to distinguish its DOM compatibility vs. older versions
				s2.prop13 = pageSite + ':' + lowerCaseVal(pageDetails.src, 1) + ':' + lowerCaseVal(pageDetails.pageKey, 1);
			//ABU TODO}

			// Site release version - set on OTP pages, apps, public? etc.
			s2.eVar52 = pageSite + ':' + lowerCaseVal(pageDetails.siteVersion, 1);
			s2.prop52 = dVar(52);

			// fid (3rd-party fallback visitor ID) not required when on first party collection domain (i.e. westpac.com.au). What if other domain? (we capture s_vi not fid)
			//if(/\.westpac\.com\.au$/i.test(location.hostname)){
			//if (/\.westpac\.com\.au$/i.test(fullLocObj.hostname)) {
			/*ABU remove not required
			if (s2.w_coreDomain) {
				s.fid = ''; // Not used for implementations that use first-party cookies.
			}
			*/
			/*ABU remove not required
			s.plugins = ''; // empty to prevent tracking plugins. not available for reporting in SC15
			*/
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
			}

			// convert product array into Omniture-format string
			//sProductsTemp = s.w_prodStr(pdProductID, pageDetails);
			// run replace function on s.products
			//console.log('ORIG s.products = ' + s.products);
			//s.products = s.w_valReplace(s.w_prodStr(pdProductID, pageDetails), 'analytics_productsReplace');  // global replace
			s2.products = s2.w_valReplace(s2.w_valReplace(s2.w_prodStr(pdProductID, pageDetails), s2.w_lStor('get', 'analytics_productsReplace')), pageDetails.productsReplace); // global + local replace
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
			s2.pageName = sPageNameTemp;

			/******** Don't set any variables after this line ********/

			// for success messages etc. option to use pageDetails process, but send as link
			//if(pageDetails.trackAsLink==='true'){
			if (/true/i.test(pageDetails.trackAsLink)) {
				//console.log('Tracking as link - '+sPageNameTemp);
				// prevent looping
				delete pageDetails.trackAsLink;

				// make tracking request as link instead of page
				// filtered pageURL or custom passed property into href of custom link 'location' object
				s2.lnk = {
					href : pageDetails.s_linkUrl || s2.pageURL
				};
				s2.w_trackLinkCustom(true, 'D="page:"+pageName', 'o', s); // default values if no overrides set in pageDetails //zzz abu

				// abort initial page tracking
				s2.abort = true;
			}


			// set override values for trackLinkCustom and 'trackAsLink' calls, before final s_ overrides
			for (prpty in pageDetails) {
				if (pageDetails.hasOwnProperty(prpty)) {
					if (/^temp_/.test(prpty)) {
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

			// change any s object values async (in order of calls)
			//s.w_changeIf(pageDetails, true); // zzzzz enable to change any values with replace etc. for weird issues that may come up.
		}
		// override s.abort directly, because s_abort'ed calls don't pass through standard s_... override process like other s... overrides (dupe calls do though)
		//s.abort = pageDetails.s_abort || s.abort;
		s2.abort = pageDetails._drop || s2.abort;

		// TNT integrations
		/*
		if (!s.abort) {
		s.tnt = s.trackTNT(); // TNT to SC integration - TNT campaign details collected in SC. zzzzz SPA pages - if pulling from querystring, more than once?
		s.eVar70 = s.tnt && window.s_tntName; // add TNT details in evar for additional reporting capability
		window.s_tntName = '';

		try {
		mboxLoadSCPlugin(s); // SC to TNT integration - SC tracking details collected in TNT. zzzzz SPA pages - fire more than once?
		} catch (ignore) {
		// don't break
		}
		}
		 */

		// pass final s object to test function if available
		//if(testTrackingFunction && typeof testTrackingFunction.complete==='function'){
		if (typeof s2.w_wtT.complete === 'function') {
			s2.w_wtT.complete(s2);
		}


		// Testing for marketing tags
		// send pageDetails object to marketing tag functions to determine tracking required.
		// s.w_prod boolean to switch dev/prod tags or pageDetails properties if reqd. e.g. switch between property names - {property-dev: 'dev val', property-prod: 'prod val'}
		// simulate marketing pixel latency/server down. Pending request activity (including Omniture pixel) causes loading spinner in Safari if not async.
		//bbb=new Image;
		//bbb.src = '//blackhole.webpagetest.org/bbb.gif?'+(+new Date());
		//bbb.src = '//blackhole.webpagetest.org/aaa.gif?'+(+new Date());
	}
	s2.doPlugins=s2_doPlugins

	/************************** PLUGINS SECTION *************************/


	// helper to do things when the page is ready (or after the load event has fired)
	// e.g. track page and apply link tracking and clickmap custom object IDs (via s.setOIDs()) when the page is ready
	s2.w_onReady = function (func) {
		//var test=[];
		//console.log(document.readyState);
		//	if(/loaded|interactive|complete/.test(document.readyState)){ // some platform page code may have attached s_code script before page complete. this would have fired func (usually tracking page and links) as soon as DOM loaded event occured, to reduce delay applying link tracking etc., but could fire before timing data available
		// regardless of s_code script attaching method, this will force waiting until complete to do tracking, to ensure timing data is available
		if (/complete/.test(document.readyState)) {
			// script was post-loaded
			func();
			//test.push('function called post-interactive, fired instantly');
		} else {
			// script was loaded inline
			s2.w_addHandler(window, 'load', function () { // fire in setTimeout to avoid spinner in Chrome continuing after assets in window loaded
				setTimeout(func, 4);
			});
			//test.push('function called before DOM interactive, attached to window load');
		}
		//console.log(test.join('\n'));
	}; 

	
	// cookie combining utility
	// read combined cookies v 0.37-Westpac append _wp for custom cookie names
	// reformatted to move functions out of conditional logic
	/*
	if(!s.__ccucr){s.c_rr=s.c_r;s.__ccucr=true;function c_r(k){k+='_wp';
	var s=this,d=new Date,v=s.c_rr(k),c=s.c_rspers(),i, m, e;
	if(v)return v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess_wp'):c;
	i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|', i);e=i<0?i:c.indexOf(';', i);
	m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length, m<0?c.length:m));
	return v;}function c_rspers(){var cv=s.c_rr('s_pers_wp');var date=new Date().getTime();var expd=null;
	var cvarr=[];var vcv="";if(!cv)return vcv;cvarr=cv.split(";");for(var i=0,l=cvarr.length;i<l;i++)
	{expd=cvarr[i].match(/\|([0-9]+)$/);if(expd && parseInt(expd[1]) >= date){vcv += cvarr[i]+";";}}return vcv;
	}s.c_rspers=c_rspers;s.c_r=c_r;}if(!s.__ccucw){s.c_wr=s.c_w;s.__ccucw=true;function c_w(k, v, e){k+='_wp';
	var s=this,d=new Date,ht=0,pn='s_pers_wp',sn='s_sess_wp',pc=0,sc=0,pv, sv, c, i, t;d.setTime(d.getTime() - 60000);
	if(s.c_rr(k))s.c_wr(k, '', d);k=s.ape(k);pv=s.c_rspers();i=pv.indexOf(' '+k+'=');if(i>-1){
	pv=pv.substring(0, i)+pv.substring(pv.indexOf(';', i)+1);pc=1;}sv=s.c_rr(sn);i=sv.indexOf(' '+k+'=');
	if(i>-1){sv=sv.substring(0, i)+sv.substring(sv.indexOf(';', i)+1);sc=1;}d=new Date;
	if(e){if(e.getTime()>d.getTime()){pv += ' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}
	else{sv += ' '+k+'='+s.ape(v)+';';sc=1;}sv=sv.replace(/%00/g, '');pv=pv.replace(/%00/g, '');
	if(sc)s.c_wr(sn, sv, 0);if(pc){t=pv;while(t && t.indexOf(';') != -1){var t1=parseInt(t.substring(t.indexOf('|')+1, t.indexOf(';')));
	t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s.c_wr(pn, pv, d);}return v==s.c_r(s.epa(k.replace(/_wp$/,'')))}s.c_w=c_w;}
	 */
	/* ABU Remove cookie combined
	s.w_ckCmbnng_c_r = function (k) {
		//k+='_wp';
		var s = this,
		v,
		c,
		i,
		m,
		e;

		if (!s.c_r) {
			s = window.s; // added alternate for when called outside of this scope
		}
		//var d = new Date(), // not used?
		v = s.c_rr(k);
		c = s.c_rspers();

		if (v) {
			return v;
		}
		k = s.ape(k);
		i = c.indexOf(' ' + k + '=');
		c = i < 0 ? s.c_rr('s_sess' + s.w_ckExt) : c;
		i = c.indexOf(' ' + k + '=');
		m = i < 0 ? i : c.indexOf('|', i);
		e = i < 0 ? i : c.indexOf(';', i);
		m = m > 0 ? m : e;
		v = i < 0 ? '' : s.epa(c.substring(i + 2 + k.length, m < 0 ? c.length : m));

		return v;
	};
	s.w_ckCmbnng_c_rspers = function () {
		var cv = s.c_rr('s_pers' + s.w_ckExt),
		date = new Date().getTime(),
		expd = null,
		cvarr = [],
		vcv = '',
		i,
		l;
		if (!cv) {
			return vcv;
		}
		cvarr = cv.split(';');
		for (i = 0, l = cvarr.length; i < l; i++) {
			expd = cvarr[i].match(/\|([0-9]+)$/);
			//console.log(parseInt(expd[1]) == parseInt(expd[1],10));
			if (expd && parseInt(expd[1], 10) >= date) {
				vcv += cvarr[i] + ';';
			}
		}
		return vcv;
	};
	s.w_ckCmbnng_c_w = function (k, v, e) {
		//k+='_wp';
		var s = this,
		d = new Date(),
		ht = 0,
		pn,
		sn,
		pc = 0,
		sc = 0,
		pv,
		sv,
		i,
		t,
		t1;
		if (!s.c_r) {
			s = window.s; // added alternate for when called outside of this scope
		}
		pn = 's_pers' + s.w_ckExt;
		sn = 's_sess' + s.w_ckExt;
		d.setTime(d.getTime() - 60000);
		if (s.c_rr(k)) {
			s.c_wr(k, '', d);
		}
		k = s.ape(k);
		pv = s.c_rspers();
		i = pv.indexOf(' ' + k + '=');
		if (i > -1) {
			pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1);
			pc = 1;
		}
		sv = s.c_rr(sn);
		i = sv.indexOf(' ' + k + '=');
		if (i > -1) {
			sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
			sc = 1;
		}
		d = new Date();
		if (e) {
			if (e.getTime() > d.getTime()) {
				pv += ' ' + k + '=' + s.ape(v) + '|' + e.getTime() + ';';
				pc = 1;
			}
		} else {
			sv += ' ' + k + '=' + s.ape(v) + ';';
			sc = 1;
		}
		sv = sv.replace(/%00/g, '');
		pv = pv.replace(/%00/g, '');
		if (sc) {
			s.c_wr(sn, sv, 0);
		}
		if (pc) {
			t = pv;
			while (t && t.indexOf(';') !== -1) {
				//console.log(parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';'))) == parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')), 10));
				t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')), 10);
				t = t.substring(t.indexOf(';') + 1);
				ht = ht < t1 ? t1 : ht;
			}
			d.setTime(ht);
			s.c_wr(pn, pv, d);
		}
		//return v == s.c_r(s.epa(k.replace(/_wp$/, '')));
		return v == s.c_r(s.epa(k));
	};
	if (!s.__ccucr) {
		s.c_rr = s.c_r;
		s.__ccucr = true;
		s.c_rspers = s.w_ckCmbnng_c_rspers;
		s.c_r = s.w_ckCmbnng_c_r; // cookie reading with the s.c_r function is only possible after the function is assigned to it here
	}
	if (!s.__ccucw) {
		s.c_wr = s.c_w;
		s.__ccucw = true;
		s.c_w = s.w_ckCmbnng_c_w; // cookie writing with the s.c_r function is only possible after the function is assigned to it here
	} ABU */
	// TODO: zzzzz review requirement if duplicate cookie issue not resolved in webseal. This removes duplicate cookies set at full path by oregon applications
	/*
	(function (doc, cookieDateZero, testCookie) {
	var cookiePath = location.pathname.replace(/\/+/g, '/'),
	cookiePathSlash = cookiePath.lastIndexOf('/'),
	arrCookies = [testCookie, 's_vi', 's_pers' + s.w_ckExt, 's_sess' + s.w_ckExt, 's_wbc-ti', 's_wbc-pi', 's_wbc-seg', 's_wbc-ses'];

	//cookiePath = cookiePathSlash ? cookiePath.slice(0, cookiePathSlash) : cookiePath;
	cookiePath = cookiePath.slice(0, cookiePathSlash || 1);

	doc.cookie = testCookie + '=1;';
	doc.cookie = testCookie + '=0; expires=' + cookieDateZero + '; path=' + cookiePath + ';';

	if (s.c_rr(testCookie)) {
	// in case of browser differences in cookie path handling
	cookiePath += '/';
	}

	if (cookiePath !== '/') {
	while (arrCookies.length) {
	doc.cookie = arrCookies.shift() + '=0; expires=' + cookieDateZero + '; path=' + cookiePath + ';';
	}
	}
	}
	(document, (new Date(0)).toUTCString(), 'analytics_ckPath'));
	 */
	// serialisation value for events
	s2.w_serial = function () {
		var serial = ('0000000' + Math.floor(Math.random() * (268435455 + 1)).toString(16)).slice(-7) + String(+new Date());
		//console.log('serial = ' + serial + ' ....... length ==== ' + serial.length);
		return String(serial).length === 20 ? serial : '';
	};

	// maintain serialisation for the same form/product/any item and reset after complete of same form
	s2.w_serialise = function (serialKey, formStep) {
		var lStorKey = 'analytics_aoSerials',
		keyName = serialKey && String(serialKey).replace(/\W/g, ''),
		serialStore = s2.w_lStor('get', lStorKey),
		dateStamp = new Date(),
		serialDay = String(dateStamp.getFullYear()) + (dateStamp.getMonth() + 1) + dateStamp.getDate(), // serial memory persists for current day
		serialVisit = s2.getVisitNum(365), // serial memory persists for current visit
		//serialRange = serialVisit >= 1 ? serialVisit : serialDay, // persist for visit if number returned, else day
		serialRange = serialDay + (serialVisit >= 1 ? serialVisit : 0), // persist for visit per day if number returned, else day + 0
		newSerial = s2.w_serial(),
		setSerial = '';

		//console.log('serialStore = ' + serialStore);
		//console.log('newSerial = ' + newSerial);
		//console.log('serialDay = ' + serialDay);
		//console.log('serialVisit = ' + serialVisit);

		if (keyName && (formStep === 'start' || formStep === 'complete')) {
			if (serialStore.indexOf(serialRange + ',') !== 0) {
				// reset the store each day or if incorrect format
				s2.w_lStor('set', lStorKey, serialRange + ',' + keyName + '=' + newSerial + formStep);
			}

			// check if localStorage is working
			serialStore = s2.w_lStor('get', lStorKey);

			if (serialStore) {
				// if storage found, check if this thing has been hit already and get the serial
				setSerial = serialStore.match(new RegExp(',' + keyName + '=(.{20}(start|complete)?)(?=,|$)'));
				setSerial = setSerial && setSerial[1] ? setSerial[1] : '';

				//console.log('setSerial 1 = ' + setSerial);

				if (!setSerial) {
					// if this thing is not serialised yet, add the details
					s2.w_lStor('set', lStorKey, serialStore + ',' + keyName + '=' + newSerial + formStep);
					setSerial = newSerial;
				} else {
					// if complete step of a serialised form, set to complete if was previously start
					if (formStep === 'complete' && setSerial.indexOf('start') === 20) {
						s2.w_lStor('set', lStorKey, serialStore.replace(new RegExp('(,' + keyName + '=.{20})(start)(?=,|$)'), '$1' + formStep));
					}
					// if start step of a previously completed serial form, set a new serial
					if (formStep === 'start' && setSerial.indexOf('complete') === 20) {
						s2.w_lStor('set', lStorKey, serialStore.replace(new RegExp('(,' + keyName + '=)(.{20})(complete)(?=,|$)'), '$1' + newSerial + formStep));
						setSerial = newSerial;
					}

					// if start/start or complete/complete, just trim the serial taken from the storage
					setSerial = setSerial.slice(0, 20);

					//console.log('setSerial 2 = ' + setSerial);
				}
			}
		}
		//console.log('setSerial 3 = ' + setSerial);
		return String(setSerial).length === 20 ? ':' + setSerial : '';
	}; 
	
	s2.w_valReplace = function (initialVal, replaceDetails) {
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
	
	
	// only set prop to dynamic copy if eVar has a value to reduce pixel length //RRR ABU:Planing to remove this function
	s2.w_dVar = function (id) {
		return s2['eVar' + id] ? 'D=v' + id : '';
	};
	
	// time to complete timer checking. now works when events are set with s.w_addEvt overrides
	s2.w_evtTimer = function (eventStart, eventStop) {
		var timerStatus = '',
		evts = s2.events;

		if (new RegExp('\\bevent' + eventStart + '\\b', 'i').test(evts)) {
			timerStatus = 'start';
		}
		if (new RegExp('\\bevent' + eventStop + '\\b', 'i').test(evts)) {
			timerStatus = 'stop';
		}
		return timerStatus;
	};
	
	// cap numbers to reduce number of items for classifactions
	s2.w_cap = function (item, cap) {
		return item >= cap ? cap + '+' : item; // if item value is greater than, or equal to cap, append '+'. event50 (page load time) removes the '+', because the event value must be numeric.
	};
	
	// Helper function for standard numeric s.apl event call to reduce frequently used code
	s2.w_addEvt = function (evt) {
		// allow text or numeric events to be passed
		s2.events = s2.apl(s2.events, isNaN(evt) ? evt || '' : 'event' + evt, ',', 2);
	};
	
	// convert prodVal into an array if it was only a string (single product or comma separated)
	s2.w_prodArr = function (prodVal) {
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
	
	// convert product array into Omniture format product string
	s2.w_prodStr = function (prodArr, details) {
		// join product object array into Omniture formatted prod string for tracking
		var prodSyntax = [],
		//pdFormStatus = pageDetails.formStatus,
		pdFormStatus = s2.w_lCase(s2.w_clean(details.formStatus)),
		pdPageType = s2.w_lCase(s2.w_clean(details.pageType)),
		lp1,
		lp2,
		prodArrLen = prodArr.length,
		prodEvents,
		prodEventDetails,
		prodMerch,
		txnType,
		txnEvt,
		txnBand,
		transactionDetails,
		currency,
		amount,
		currencySpecified = false,
		//primaryProduct,
		//primaryProductSpecified = false;
		validProductCount = 0,
		crossSellCheckLen = prodArrLen,
		crossSellProduct,
		crossSellProductSpecified = false;

		// loop through all products in the prodArr to set transaction amounts (band and average) and translate friendly transaction types into correct event numbers
		//console.log('prodArr = ' + prodArr);
		while (crossSellCheckLen--) { // loop to check if a 'crossSell' item has been explicitly defined. if so, use the details supplied, else assume all products after the first are cross-sell
			if (prodArr[crossSellCheckLen].prod && (/true/i).test(prodArr[crossSellCheckLen].crossSell)) {
				crossSellProductSpecified = true;
				break;
			}
		}


		for (lp1 = 0; lp1 < prodArrLen; lp1++) {
			if (prodArr[lp1].prod) {
				validProductCount += 1;

				if (crossSellProductSpecified) {
					crossSellProduct = /true/i.test(prodArr[lp1].crossSell); // assume crossSell will be specified correctly in details
				} else {
					crossSellProduct = validProductCount > 1 ? true : false; // if nothing specified, anything after first valid product is assumed to be cross-sell
				}

				prodEvents = prodArr[lp1].events;
				prodMerch = prodArr[lp1].merch;
				prodMerch = prodMerch === 'options=' ? '' : prodMerch; // remove redundant options if none specified

				if (prodEvents) { // only need to add transaction bands to merch vars if there is a transaction event
					prodEvents = prodEvents.split('|');
					prodMerch = prodMerch ? prodMerch.split('|') : [];

					for (lp2 = 0; lp2 < prodEvents.length; lp2++) {
						prodEventDetails = prodEvents[lp2].split('=');
						txnType = prodEventDetails[0];
						txnEvt = txnType; // default is value passed in object

						// ensure all events specified in s.products are also set in s.events
						if (/^deposit\b/.test(txnType)) { // event5 for deposit amount event
							txnEvt = 'event5';
						}
						/*else{
						if(/^event5\b/.test(txnType)){ // 'deposit' for amount band merch evar if event5 specified
						txnType='deposit';
						}
						}*/
						if (/^payment\b/.test(txnType)) {
							txnEvt = 'event40';
						}
						/*else{
						if(/^event40\b/.test(txnType)){
						txnType='payment';
						}
						}*/
						if (/^loan\b/.test(txnType)) {
							txnEvt = 'event41';
						}
						/*else{
						if(/^event41\b/.test(txnType)){
						txnType='loan';
						}
						}*/

						if ((/^(?:deposit|payment|loan|\(not\ set\))(?::|$)/).test(txnType)) {
							// values may be like 'payment:processing...', 'loan:approved...'
							// could check end of txnType for status (:processing/:approved/:declined) of individual products to set relevant events (e.g. 18, 19, 20) here, if multiple respective status of products in a form is ever required/possible.
							// pdFormStatus as the generic value could be removed from the s.w_amntBnds parameters to allow respective product values to be used instead


							// Transaction values may be like '1200', '$123.45' ($=AUD), 'USD123.45', 'EUR123' etc. default to AUD if currency missing
							transactionDetails = (prodEventDetails[1] || '').match(/^(\D*)(.*)/); // get currency and amount
							currency = (transactionDetails[1] || '$').toUpperCase(); // default to $ if currency missing
							if (currency === '$') { // Set to AUD if currency prefix was set, or defaulted to '$'
								currency = 'AUD';
							}
							if (!currencySpecified) {
								currencySpecified = true; // set base currency to first detected in product set only
								s2.currencyCode = currency;
							}
							if (currency !== s2.currencyCode) {
								// if different to 1st product currency, append '-mix' to currency. Only one currency allowed per request. keep only values matching 1st currency
								currency += '-mix';
							}
							amount = transactionDetails[2];

							// get amount band. pass status from generic pageDetails value, or use status set in txnType set against each respective product in array
							txnBand = s2.w_amntBnds(txnType + (pdFormStatus ? ':' + pdFormStatus : '') + ':' + currency, amount); // set all products in a form to the generic form status
							//txnBand=s.w_amntBnds(txnType+':'+currency, amount); // txnType passed with product array item could specify respective status for each product, like 'loan:approved=123'

							if (/^(?:\(not\ set\))(?::|$)/.test(txnType)) {
								// if application transactionType not set, we don't know which event to set the txn amount into
								prodEvents[lp2] = '';
							} else {
								// only set s.events and prod events if valid event
								prodEvents[lp2] = txnEvt + '=' + (currency === s2.currencyCode ? txnBand.avg : 0); // set value of different currency amounts to zero to avoid incorrect conversion to base currency of request (taken from first value)
								//s.events = s.apl(s.events,txnEvt,',',2);
								s2.w_addEvt(txnEvt);
							}
							// always set bands even if some values not set. Dont set transaction type and amount if both values empty
							//prodMerch.push('eVar37='+txnType); // txnType doesn't set any merch details. eVar37 now product options
							if (txnBand.avg !== 0 || txnType !== '(not set)') {
								prodMerch.push('eVar51=' + txnBand.range);
							}
						}
					}
					prodEvents = prodEvents.join('|');
					prodMerch = prodMerch.join('|');
				}

				// translate product object into an omniture-formatted string and add it to an array. set qty as 1 by default
				//console.log('prod = ' + prodArr[lp1].prod);

				prodSyntax.push(
					s2.w_lCase(prodArr[lp1].cat || '') + ';' +
					//s.w_lCase(prodArr[lp1].prod) + (pdPageType === 'application' && !primaryProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
					//s.w_lCase(s.w_clean(prodArr[lp1].prod.replace(/,/g, ' '))) + (pdPageType === 'application' && !primaryProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
					s2.w_lCase(s2.w_clean(prodArr[lp1].prod.replace(/,/g, ' '))) + (pdPageType === 'application' && crossSellProduct ? '-x' : '') + ';' + // identify primary product/s for enhanced cross-sell reporting
					(prodArr[lp1].qty || '1') + ';' + (prodArr[lp1].total || '') + ';' + (prodEvents || '') + ';' +
					//.replace(/deposit(?==)/g,'event5') // replace friendly product event names with event numbers
					//.replace(/loan(?==)/g,'event41')
					//.replace(/payment(?==)/g,'event40')+';'+
					(prodMerch || '')
					.replace(/(^|\|)options=/g, '$1eVar37=') // set product options into eVar37
					//.replace(/(^|\|)merchVar(?==)/g,'eVarX') // example only, replace friendly merchandising names with eVar numbers
				);
			}
		}
		// if only one product, or if more than one product and no primary specified, only the first product is primary.
		/*
		if (prodSyntax.length === 1 || (prodSyntax.length > 1 && !primaryProductSpecified)) {
		prodSyntax[0] = prodSyntax[0].replace(/(.*?;.*?)-x(?:;|$)/, '$1;');
		}
		 */
		return prodSyntax.join(',').replace(/;;;,/g, ',').replace(/;;;$/, ''); // join product string array and remove unnecessary delimiters to reduce pixel length
	};
	
	// clean strings - trim and remove multiple spaces for consistency
	s2.w_clean = function (str) {
		return (str ? String(str) : '').replace(/\s+/g, ' ').replace(/^\s|\s$/g, '');
	};

	// return 'zero' for '0' value to allow SAINT classification
	s2.w_fixZero = function (val) {
		return String(val) === '0' ? 'zero' : val;
	};
	
	// return filtered search terms and replace numbers if necessary
	s2.w_srchTerm = function (val) {
		var srchTerm = val,
		lp = 8,
		hashes = '########'; //,hashes=new Array(lp).join('#')

		if (srchTerm) {
			//srchTerm=s.w_clean(s.w_lCase(srchTerm));
			srchTerm = s2.w_lCase(srchTerm);
			while (lp--) {
				srchTerm = srchTerm.replace(new RegExp('(\\d{4}.?)\\d{' + (lp + 1) + ',}', 'g'), '$1' + hashes.substring(0, lp + 1));
			}
		}
		//console.log(srchTerm);
		return srchTerm;
	};
	
	// time parting
	s2.w_timePart = function () {
		var dateNow = new Date(),
		dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return dayNames[dateNow.getDay()] + ' ' + ('00' + dateNow.getHours()).slice(-2) + ':' + (dateNow.getMinutes() > 29 ? '30' : '00');
	};

	// lower case strings or (not set) if empty
	s2.w_lCase = function (val, alt) {
		var altVal = alt ? '(not set)' : '';
		return String(val || altVal).toLowerCase();
	};
	
	// cross-browser querySelectorAll
	// working, but not currently required
	s2.w_qSA = function (doc, selector, tag, attr, regex) {
		var lp,
		len,
		result = [],
		target,
		tempAttr;

		if (doc && doc.querySelectorAll) {
			result = doc.querySelectorAll(selector);
		} else {
			target = doc && doc.getElementsByTagName(tag);
			for (lp = 0, len = target.length; lp < len; lp++) {
				tempAttr = target[lp].getAttribute(attr);
				if (attr === 'class') {
					tempAttr = tempAttr || target[lp].getAttribute('className');
				}
				if (tempAttr && regex.test(tempAttr)) {
					result.push(target[lp]);
				}
			}
		}
		return result;
	};
	
	// handler functions for event listening for custom link tracking
	s2.w_getEvtTrgt = function (evt, attrRequired) {
		var evtTarget = evt || window.event,
		lp,
		max = 10; // search 10 ancestors up from clicked element to find suitable target

		evtTarget = evtTarget ? evtTarget.target || evtTarget.srcElement : 0;

		//if (evtTarget && (evtTarget.target || evtTarget.srcElement)) {
		//	evtTarget = evtTarget.target || evtTarget.srcElement; // should really just be able to use 'this' inside handler to refer to calling element, but doesn't work in older IE

		// Safari may target a non-element node, so move to parent
		for (lp = 0; evtTarget && evtTarget.nodeType !== 1 && lp <= max; lp++) {
			evtTarget = evtTarget.parentNode;
		}

		//console.log('attrRequired = ' + attrRequired + ' ================ ')
		//console.log('attrRequired = ' + attrRequired + ', nodeName = ' + evtTarget.nodeName + ', type = ' + (evtTarget.getAttribute && evtTarget.getAttribute(attrRequired)));

		if (attrRequired) {
			// find the element the handler should be referring to, in case the event target is a child node
			for (lp = 0; evtTarget && evtTarget.getAttribute && !evtTarget.getAttribute(attrRequired) && lp <= max; lp++) {
				// work up to find first parent with attrRequired - should be the el with handler attached
				evtTarget = evtTarget.parentNode;

				//console.log('attrRequired = ' + attrRequired + ', nodeName = ' + evtTarget.nodeName + ', type = ' + (evtTarget.getAttribute && evtTarget.getAttribute(attrRequired)));
			}

			// set to zero if node with required attribute not found in parents
			//if (evtTarget && evtTarget.getAttribute && !evtTarget.getAttribute(attrRequired)) {
			if ((evtTarget && !evtTarget.getAttribute) || (evtTarget && evtTarget.getAttribute && !evtTarget.getAttribute(attrRequired))) {
				evtTarget = 0;
			}
		}
		//} else {
		//	evtTarget = 0;
		//}
		//evtTarget=0; // this line only for testing if node not found. should be commented
		return evtTarget || 0;
	};
	
	s2.w_stopEvt = function (evt) {
		evt = evt || window.event;
		if (evt) {
			if (evt.preventDefault) {
				evt.preventDefault();
			} else {
				evt.returnValue = false;
			}
			//}else{
			//	evt=0;
		}
		//return evt;
	};
	
	s2.w_addHandler = function (elem, elemEvent, handler) {
		//console.log(elem);
		if (elem.addEventListener) {
			elem.addEventListener(elemEvent, handler, false);
		} else {
			if (elem.attachEvent) {
				elem.attachEvent('on' + elemEvent, handler);
			}
		}
	};
	
	/* ABU removed as we now have s2.clearVars();
	s.w_clearOmniVars = function () {
		var lp,
		len,
		//sVarArr,
		empty = '';

		for (lp = 0, len = 75; lp <= len; lp++) {
			s['prop' + lp] = empty;
			s['eVar' + lp] = empty;

			if (lp <= 5) {
				s['hier' + lp] = empty;
				s['list' + lp] = empty;
				s['pev' + lp] = empty;
			}
		}

		/*
		sVarArr = ['pageName', 'pageType', 'channel', 'products', 'productsList', 'events', 'eventList', 'campaign', 'purchaseID', 'transactionID', 'state', 'zip', 'server', 'linkName'];
		for (lp = 0, len = sVarArr.length; lp <= len; lp++) {
		s[sVarArr[lp]]= empty;
		}
		 */

		/*
		s.pageName = empty;
		s.pageType = empty;
		s.channel = empty;
		s.products = empty;
		s.productsList = empty;
		s.events = empty;
		s.eventList = empty;
		s.campaign = empty;
		s.purchaseID = empty;
		s.transactionID = empty;
		s.state = empty;
		s.zip = empty;
		s.server = empty;
		s.linkName = empty;
		 * /

		s.pageName = s.pageType = s.channel = s.products = s.productsList = s.events = s.eventList = s.campaign = s.purchaseID = s.transactionID = s.state = s.zip = s.server = s.linkName = empty;

	}; ABU */
	
	s2.w_collectStoredData = function () {
		// epoch date used to clear cookies
		var dateZero = new Date(0); //,
		//impTmp = s.c_r('impTmp'); //

		// collect pid impressions from after previous page load
		s2.list2 = s2.Util.cookieRead('banners');

		// put the temp banners into the normal cookie
		//s.c_w('banners', impTmp, impTmp ? new Date(+new Date() + (24 * 60 * 60 * 1000)) : dateZero); // store new banners from this page. keep impressions in cookie for 24 hours
		//s.c_w('impTmp', 0, dateZero); // clear banner cookie after adding to cookie for sending

		//console.log('COLLECT STORED - impTmp = ' + impTmp);

		s2.Util.cookieWrite('banners', 0, dateZero); // clear after sending
		//s.w_prevPgCkiesSent = true;

		// capture number of form validation errors from cookie
		if (s2.Util.cookieRead('errCount')) {
			s2.prop17 = s2.Util.cookieWrite('errCode');
			//s.eVar30 = (s.prop17.indexOf(s.w_inlErr+',')>-1? s.prop17 : 'defined errors') + ':' + s.c_r('errCount');
			s2.eVar30 = 'errors:' + s2.w_cap(s2.Util.cookieWrite('errCount'), 50);
			s2.Util.cookieWrite('errCode', 0, dateZero);
			s2.Util.cookieWrite('errCount', 0, dateZero);
		}

		// Navigation menu ID
		s2.prop59 = s2.Util.cookieRead('nav');
		// remove nav cookie after tracking
		s2.Util.cookieWrite('nav', 0, dateZero);

		// if search results 'click past rank' cookie has been set from result link click, track the rank and click event and delete the cookie.
		// The cookie is set on search results link clicks with the rank of the link
		s2.prop16 = s2.w_cap(s2.Util.cookieRead('cpr'), 101);
		if (s2.prop16) {
			s2.w_addEvt(15);
			// delete cookie after tracking
			s2.s2.Util.cookieWrite('cpr', 0, dateZero);
		}
	};
	
	// Do things after pixel sent
	s2.w_endTrckng = function () {
		// record length of last pixel
		//ABU: last request save as window["s_i_0_westpac"] now its save under window["s_i_wbg-banking-dev"]
		//ABU: TODO check for multiple request senario (SPA + Link tracking) 
		//var sVisitorNamespace = s2.visitorNamespace,
		//requestCount = s2.rc ? s2.rc[sVisitorNamespace] : 0,
		//lastPixel = window['s_i_' + s2._in + '_' + sVisitorNamespace + (requestCount > 1 ? '_' + (requestCount - 1) : '')],
		//var lastPixel = window['s_i_' + s2_account],
		//lastPixelSrc = lastPixel && (lastPixel.getAttribute('src')||''),
		var lastPixelLength = 0;
		var lastPixelSrc = window["s2"].kb
		
		if (lastPixelSrc) { // changed to lastPixel.getAttribute('src') to avoid invalid pointer error in IE11 when reading .src
			lastPixelLength = lastPixelSrc.length;

			// add pixels to an array to simplify testing
			s2.w_pixels = s2.w_pixels || [];
			s2.w_pixels.push(lastPixelSrc);

			// store length of the pixel just fired in a cookie, to extract on next page load
			s2.Util.cookieWrite('lastReqLen', lastPixelLength);
		}
		s2.w_log('last pixel length: ' + lastPixelLength);
		//return lastPixelLength;
	};
	
	//ZZZ ABU not tested yet
	// track a page only once per window load (for single page applications). All names sent stored in array to compare for all further calls until reset or page reloaded (array cleared)
	s2.w_pageTracked = function (pgName) {
		var lp,
		tracked = false;

		s2.w_trackedPages = s2.w_trackedPages || [];
		lp = s2.w_trackedPages.length;
		while (lp--) {
			if (s2.w_trackedPages[lp] === pgName) {
				// already been tracked this page load
				tracked = true;
				break;
			}
		}
		if (!tracked) {
			s2.w_trackedPages.push(pgName);
		}
		//console.log('tracked '+pgName+'? '+tracked + '. s.w_trackedPages = '+s.w_trackedPages);
		return tracked;
	};
	
	// function to clone pageDetails context object
	// also in analytics js
	s2.w_clone = function (oToBeCloned, clones) {
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
					oClone[prpty] = s2.w_clone(oToBeCloned[prpty], clones);
				}
			}
		}
		return oClone;
	};
	//ZZZ ABU not tested yet
	// estimate page load timing for browsers without native support
	// polyfill for page load time - requires cookie reading and s.w_onReady functions to be available
	s2.w_navtS = (+s2.Util.cookieRead('navt') || (s2.w_config.ls ? s2.w_config.ls - 50 : 0)); // get timestamp from previous click or ls (load start time) from async code in page (reliable if set in head/top of page)
	s2.Util.cookieWrite('navt', 0, new Date(0)); // remove cookie
	if (s2.w_navtS && !window.performance) {
		s2.w_onReady(function () {
			//s.w_navtS = (+s.w_navtCk) + 4; // add estimated time difference between click and typical navigationStart
			//s.w_navtE = (+new Date()) - 44; // subtract estimated time difference between onload and this line firing just after window load. note: latency in loading this script will artifically increase 'page load' time
			// get time at window load event from analytics.js onReady call loading this file
			s2.w_navtE = s2.w_config.lc || +new Date(); // note: if not using analytics async, long latency in loading this script will artifically increase 'page load' time

			/*
			console.log('==================================================');
			console.log('s.w_navtS                    = ' + s.w_navtS);
			console.log('navigationStart              = ' + (window.performance && performance.timing.navigationStart));
			console.log('s.w_navtE                    = ' + s.w_navtE); // and compensate for any differences to native
			console.log('loadEventEnd                 = ' + (window.performance && performance.timing.loadEventEnd));
			console.log('navigationStart - s.w_navtS  = ' + (window.performance && performance.timing.navigationStart - s.w_navtS));
			console.log('loadEventEnd - s.w_navtE     = ' + (window.performance && performance.timing.loadEventEnd - s.w_navtE));
			console.log('native time                  = ' + (window.performance && performance.timing.loadEventEnd - performance.timing.navigationStart));
			console.log('s.w_navtE - s.w_navtS        = ' + (s.w_navtE - s.w_navtS));
			 */

		});
	}
	
	s2.w_lStor = function (action, key, data) {
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
	
	// test global drop list to decide if the page should be aborted
	s2.w_globalDrop = function (refObj) {
		var testResult = 0,
		siteDropList = s2.w_lStor('get', 'analytics_nameKeyDrop'); //,
		//pageDropCondition = String(refObj.abortIf).split('=', 2),
		//pageDropCompare;

		// global (within origin) drops
		if (siteDropList) {
			testResult = new RegExp('(^|,)' + String(refObj._nameKey).replace(/([.*+?\^=!:${}()\|\[\]\/\\])/g, '\\$1') + '(,|$)').test(siteDropList);
		}

		//console.log('testResult = ' + testResult);

		return testResult;
	};
	
	// test specific values to decide if the pageDetails should be aborted, changed etc.
	//s.w_changeIf = function (refObj, sObjectProperties) { // dynamically change pageDetails or s object
	s2.w_changeIf = function (refObj) { // dynamically change pageDetails
		var prpty,
		expressionSet = refObj.changeIf || [],
		expressionSetLength,
		expressionItem,
		//sObjectItem,
		//getSObjectProperty = function (item) {
		//	return sObjectProperties && /^s\.(prop|eVar)/.test(item) && item.replace(/^s\./, '');
		//},
		ifItemVal,
		equalsItemVal,
		andIf,
		andEvaluation,
		dynamicItems = {
			'(lastpage)' : s2.Util.cookieRead('lastPg'),
			'(location)' : s2.w_getLoc().href,
			'(referrer)' : document.referrer,
			'(s_pers)' : s2.Util.cookieRead('s_pers' + s2.w_ckExt), // these cookie values can only be used in the if expression, not equals
			'(s_sess)' : s2.Util.cookieRead('s_sess' + s2.w_ckExt) // these cookie values can only be used in the if expression, not equals
		};
		//console.log(dynamicItems);

		try {
			if (typeof expressionSet === 'string') {
				expressionSet = JSON.parse(expressionSet);
			}
		} catch (err) {
			//s.w_log(err);
			expressionSet = [];
		}

		//console.log('expressionSet = ');
		//console.log(expressionSet);

		expressionSetLength = expressionSet.length;

		for (prpty = 0; prpty < expressionSetLength; prpty++) {
			expressionItem = expressionSet[prpty];
			//console.log(expressionItem);

			if (expressionItem.item && expressionItem.like && expressionItem.then) {
				//console.log('expressionItem = ');
				//console.log(expressionItem);
				//sObjectItem = getSObjectProperty(expressionItem.item);
				//ifItemVal = String(dynamicItems[expressionItem.item] || refObj[expressionItem.item] || (sObjectItem && window.s[sObjectItem]) || ''); // only when called from end of doPlugins, for async
				ifItemVal = String(dynamicItems[expressionItem.item] || refObj[expressionItem.item] || ''); // only when called from end of doPlugins, for async
				//console.log('ifItemVal = ');
				//console.log(ifItemVal);
				//sObjectItem = getSObjectProperty(expressionItem.equals);
				//equalsItemVal = String(dynamicItems[expressionItem.equals] || refObj[expressionItem.equals] || (sObjectItem && window.s[sObjectItem]) || expressionItem.equals || ''); // added option to set a property to one of the dynamic values
				equalsItemVal = String(dynamicItems[(expressionItem.equals || '').replace(/\((s_pers|s_sess)\)/i, '')] || refObj[expressionItem.equals] || expressionItem.equals || ''); // added option to set a property to one of the dynamic values
				//console.log('equalsItemVal = ');
				//console.log(equalsItemVal);

				andEvaluation = true;
				andIf = expressionItem.and;
				if (andIf && andIf.item && andIf.like) {
					andEvaluation = new RegExp(andIf.like, 'i').test(String(dynamicItems[andIf.item] || refObj[andIf.item] || ''));
				}

				if (new RegExp(expressionItem.like, 'i').test(ifItemVal) && andEvaluation) {
					if (expressionItem.replace) {
						//console.log('regex = ' + new RegExp(expressionItem.replace.exp, expressionItem.replace.flags || ''));
						equalsItemVal = equalsItemVal.replace(new RegExp(expressionItem.replace.exp, expressionItem.replace.flags || ''), expressionItem.replace.subs || '');
					}
					//console.log('equalsItemVal = ' + equalsItemVal);
					refObj[expressionItem.then] = equalsItemVal;
					//sObjectItem = getSObjectProperty(expressionItem.then);
					//if (sObjectItem) {
					//	window.s[sObjectItem] = equalsItemVal;
					//}
				}
			}
		}

		//console.log('refObj = ');
		//console.log(refObj);
	};
	
	s2.w_getExp = function () {
		var isVis = s2.w_isVis,
		cssExperienceMob = isVis('.pagedetails-experience-mob') || isVis('.analytics-experience-mob'), // responsive site mobile class visible check. name changed to analytics-... to be more relevant
		cssExperienceTab = isVis('.pagedetails-experience-tab') || isVis('.analytics-experience-tab'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		cssExperienceDesktop = isVis('.analytics-experience-desktop'), // responsive site tablet class visible check. name changed to analytics-... to be more relevant
		cssNotDetected = cssExperienceMob === null && cssExperienceTab === null && cssExperienceDesktop === null,
		experienceResult;

		// logic to determine experience based on elements with classes being found/hidden/visible
		experienceResult = (cssExperienceMob || (cssExperienceMob !== false && cssExperienceDesktop === false && !cssExperienceTab)) ? 'mob' : ((cssExperienceTab || (cssExperienceTab !== false && cssExperienceDesktop === false && !cssExperienceMob)) ? 'tab' : 'desktop'); // TESTING with !desktop options etc.

		// save the experience determined by the logic
		s2.w_expOrig = s2.w_expOrig || experienceResult;

		// if no elements with classes detected, use the first saved experience
		if (cssNotDetected) {
			experienceResult = s2.w_expOrig;
		}

		return experienceResult;
	};
	
	// Start with 0 offset for call delay for multiple requests
	s2.w_sendDelayOffset = 0;
	
	s2.w_queue = [];
	
	// track a page load
	s2.w_trackPage = function (details) { // details may not be passed. Data from single object in DOM may be used at runtime and be out of sync with function calls and properties being set (e.g. s_abort = true between two blank trackPage calls would have aborted the frst call without 'async' object copying)
		var referenceObj = details || pageDetails,
		detailsCopy, // to hold copy of data passed for async calls
		//trackingToBeSent = 1, // to avoid tracking processing for any conditions where not required. aborted and deduped calls can continue for debugging
		dcPageName,
		lastPredictedPageName = s2.Util.cookieRead('lppn'),
		currPredictedPageName,
		tempImpressions; //,
		// globalDrop;

		// remove this property in case it was set manually. This is for internal code logic only
		delete referenceObj._drop;

		if (referenceObj.originNameKeyDrop) {
			s2.w_lStor('set', 'analytics_nameKeyDrop', referenceObj.originNameKeyDrop);
		}
		if (referenceObj.originPageNameReplace) {
			s2.w_lStor('set', 'analytics_pageNameReplace', referenceObj.originPageNameReplace);
		}
		if (referenceObj.originProductsReplace) {
			s2.w_lStor('set', 'analytics_productsReplace', referenceObj.originProductsReplace);
		}

		// collect any data to be tracked with this call (should only happen if call will actually be sent, otherwise cookies are cleared before they can be re-sent)
		//s.w_collectStoredData(); // moved to w_sendPage function, to collect and remove data only if sending confirmed
		//	if(details){
		//if(partialDetails){
		// only partial update to any existing pageDetails object
		//	for(prpty in details){
		//		if(details.hasOwnProperty(prpty)) {
		//			window.pageDetails[prpty]=details[prpty];
		//		}
		//	}
		//}else{
		// track passed pageDetails object
		//			window.pageDetails = details; // override page details with details passed in
		//}
		//	}
		//pageDetails = window.pageDetails || {}; // if page and argument is empty, set as empty object

		//if (!details) {
		//	details = pageDetails; // if no details passed, get from default pageDetails in window
		//}

		//s.w_prevPgCkiesSent = false;
		s2.w_pgTrkStatus = referenceObj.s_abort ? 'blocked' : 'started'; // any new impressions passed should now be associated with this page if not being dropped

		// make object copy for async pageDetails delayed tracking (can't operate async on a single object)
		//detailsCopy = JSON.parse(JSON.stringify(details));
		detailsCopy = s2.w_clone(referenceObj);
		//console.log(detailsCopy === details);
		//console.log(pageDetails === details);
		//console.log(pageDetails === detailsCopy);

		// after object passed has been copied, clear window.pageDetails ready for new values
		if (/true/i.test(detailsCopy.reset)) {
			pageDetails = {};
		}

		// Always remove these page/screen specific properties from any reference object so they doesn't persist to any subsequent pages/screens if the whole context is used in the next screen/dialog in fiserv OTP code
		// s_ override keys may also need to be removed if set and persisted by single page apps etc.
		delete referenceObj.trackAsLink;
		delete referenceObj.s_linkType;
		delete referenceObj.trackOnce;
		delete referenceObj.s_abort;
		delete referenceObj.addEvents;
		delete referenceObj.sendDelay;

		// initialise siteID for consistent getPageName prediction below. Real site ID determined in doPlugins
		s2.siteID = false;

		// Predict expected pageName for dupe/trackOnce to decide whether to keep or ignore new impressions being passed
		dcPageName = detailsCopy.pageName || '0';

		currPredictedPageName = (detailsCopy.s_pageName || (detailsCopy.formName ? detailsCopy.formName + (detailsCopy.formType || '0') + dcPageName : (detailsCopy.transactionType ? detailsCopy.transactionType + dcPageName : (detailsCopy.subSite || '0') + (detailsCopy.pageName ? (detailsCopy.pageNamePrefixes || '0') + dcPageName : decodeURIComponent(s2.getPageName(s2.pageURL)))))) + (detailsCopy.pageType || '0') + (detailsCopy.dialogTitle || '0') + (detailsCopy.itemName || '0') + (detailsCopy.pageNameReplace || '0'); // replace undefined's with '0' to shorten value

		/*
		console.log('s.getPageName(s.pageURL) ' + s.getPageName(s.pageURL));
		console.log('s.getPageName(s.pageURL) ' + decodeURI(s.getPageName(s.pageURL)));
		console.log('s.getPageName(s.pageURL) ' + decodeURIComponent(s.getPageName(s.pageURL)));
		 */

		detailsCopy._nameKey = ((detailsCopy.pageKey || '0') + (detailsCopy.experience || '0') + currPredictedPageName).replace(/,/g, '_'); // replace commas with underscore (stored drop string is comma separated)

		//console.log('lastPredictedPageName = ' + lastPredictedPageName);
		//console.log('currPredictedPageName = ' + currPredictedPageName + '\n- - - -');


		/*
		if (/true/i.test(detailsCopy.trackOnce) && s.w_pageTracked(detailsCopy.pageName)) {
		trackingToBeSent = 0;
		s.w_pgTrkStatus = 'blocked';
		//s.c_w('impTmp', 0, new Date(0)); // clear any tmp banners of aborted pages
		}
		 */

		//if (/true/i.test(detailsCopy.trackOnce) && s.w_pageTracked(currPredictedPageName)) {
		// stop trackOnce calls from collecting impressions and completely skip tracking process
		//	trackingToBeSent = 0;
		//}
		// reset trackOnce data to allow SPA pages to be sent again
		if (/reset/i.test(detailsCopy.trackOnce)) {
			s2.w_trackedPages = 0;
		}

		//console.log('s.w_globalDrop(detailsCopy) = ' + s.w_globalDrop(detailsCopy));
		// replace s.w_globalDrop function call with s.w_changeIf
		// globalDrop = s.w_changeIf({
		//		'_nameKey' : detailsCopy._nameKey,
		//		'changeIf' : s.w_lStor('get', 'analytics_nameKeyDrop')
		//	}).s_abort;
		//console.log('globalDrop = ' + globalDrop);

		if (detailsCopy.s_abort || ((/true/i.test(detailsCopy.trackDedupe) && lastPredictedPageName === currPredictedPageName) || ((/true/i.test(detailsCopy.trackOnce) && s2.w_pageTracked('pre_' + currPredictedPageName)) || s2.w_globalDrop(detailsCopy)))) {
			//if (detailsCopy.s_abort || ((/true/i.test(detailsCopy.trackDedupe) && lastPredictedPageName === currPredictedPageName) || ((/true/i.test(detailsCopy.trackOnce) && s.w_pageTrackedw_pageTracked('pre_' + currPredictedPageName)) || globalDrop))) {
			// stop trackDedupe and trackOnce calls from collecting impressions
			//trackingToBeSent = 0;
			// allow trackDedupe calls to continue tracking process until accurate dedupe name is determined in doPlugins
			detailsCopy._drop = 1;
			s2.w_pgTrkStatus = 'blocked'; // don't collect banners for pages being aborted or meeting trackDedupe/trackOnce rules
		} else {
			//console.log('s.c_r(impTmp) = ' + s.c_r('impTmp'));
			// merge any previous temp impressions from cookie from last page call
			tempImpressions = s2.Util.cookieRead('impTmp');
			if (tempImpressions) {
				detailsCopy.preImprs = tempImpressions; // add any passed impressions for this page to the pageDetails
				s2.Util.cookieWrite('impTmp', 0, new Date(0));
			}

			// add any async impressions sent before very first trackPage in window load the impTmp cookie for next track (combine with other impTmp values collected after trackPage in 'started' mode)
			s2.w_trackImpression(s2.w_asyncImp);

			// set 'Last Predicted PageName' to current name being sent, to compare next call
			s2.Util.cookieWrite('lppn', currPredictedPageName, new Date(+new Date() + (30 * 60 * 1000))); // keep last page name in cookie for 24 hours for impressions etc.
		}
		// always reset after first trackPage call
		s2.w_asyncImp = '';

		//if (trackingToBeSent) {
		// track page navigation type and load time
		s2.w_onReady(function () {
			// optional variable send delay after window.load. Min. 100ms, Max. 5000ms.
			// Pages will be tracked in the order of request sending, not the order of calling trackPage. 'Previous page' tracking corresponds to sending order, not calling order.
			var sendDelayMin = s2.w_perfTracked ? 25 : 100, // first tracking after page load = 100ms to allow timing data if available. Subsequent calls faster. Delay set equally for all browsers regardless of timing support.
			sendDelayMax = 5000,
			sendDelay = parseInt(detailsCopy.sendDelay, 10) || sendDelayMin;

			// check if in min-max range
			sendDelay = sendDelay < sendDelayMin ? sendDelayMin : sendDelay > sendDelayMax ? sendDelayMax : sendDelay;

			// Keep calls in sequence by incrementing delays between each call
			s2.w_sendDelayOffset += sendDelay;
			//console.log('--- sendDelay = ' + sendDelay);

			setTimeout(function () {
				var loadTime = 0,
				perfNav,
				perfTiming,
				timeStart,
				timeEnd,
				storedEvents = s2.Util.cookieRead('addEvts'),
				storedEventsArray = storedEvents ? storedEvents.split(',') : [],
				storedEventsCount = storedEventsArray.length,
				newAddEvents,
				newAddEventsCount;

				// Reduce total delay as calls made
				s2.w_sendDelayOffset -= sendDelay;

				// Responsive pages may need to wait for document ready (or later) to be able to test experience based on CSS element visibility
				if (!detailsCopy.experience) {
					detailsCopy.experience = s2.w_getExp();
				}

				// change any pageDetails values async (in order of calls)
				s2.w_changeIf(detailsCopy);

				//s.w_queue.push(JSON.parse(JSON.stringify(pageDetails))); // copy object into queue
				s2.w_queue.push(detailsCopy); // store details in pageDetailsArray
				//console.log('1 - '+JSON.stringify(s.w_queue));

				// clear s object vars ready for new step of 1-page forms
				//s2.w_clearOmniVars();//ABU TODO new value s2.clearVars
				s2.clearVars();
				
				if (detailsCopy.s_abort) { // any value in s.abort (or s_abort) will prevent tracking from being sent
					// re-set abort details after changeIf
					detailsCopy._drop = 1;
					s2.w_pgTrkStatus = 'blocked'; // don't collect banners for pages being aborted or meeting trackDedupe/trackOnce rules

					// if any, store the addEvents that will not be sent. These will be sent with the next available call
					if (detailsCopy.addEvents) {

						//storedEventsArray.push(detailsCopy.addEvents);
						//s.c_w('addEvts', storedEventsArray.join(','));

						newAddEvents = detailsCopy.addEvents.split(',');
						newAddEventsCount = newAddEvents.length;
						while (newAddEventsCount--) {
							storedEvents = s2.apl(storedEvents, newAddEvents[newAddEventsCount], ',', 2);
						}
						s2.Util.cookieWrite('addEvts', storedEvents);

					}
				} else {
					if (!detailsCopy._drop) {
						s2.w_pgTrkStatus = 'sent'; // ok to start collecting banners for this page
						//s.w_pgCount = s.w_pgCount || 0; // zzzzz to store reference of current page for trackOnce things (that should fire again with next page, even if window has not reloaded. e.g. SPA pages)
						//s.w_pgCount++; // zzzzz compare to count set in attribute at time of trackOnce thing to see if it can track again

						// include any events that should be added to the standard events for this request
						//s.events = pageDetails.addEvents;
						//delete pageDetails.addEvents;
						s2.events = detailsCopy.addEvents; // values set in setTimeout for when tracking actually runs

						// always include a custom page view in the event list
						s2.w_addEvt(1);

						// only get/send these details if not going to be aborted
						if (!s2.w_perfTracked) { // only once per page load - dont repeat with each trackPage
							if (window.performance) { // native support
								// performance timing data from modern browsers. loadEventEnd time only available after window load
								perfNav = window.performance.navigation;
								perfTiming = window.performance.timing || {};
								timeStart = perfTiming.navigationStart;
								timeEnd = perfTiming.loadEventEnd;
								//timeEnd = perfTiming.loadEventEnd,
								//loadTimeRound,
								//redirCount;
							} else {
								perfNav = {
									type : 0,
									redirectCount : 'na'
								};
								timeStart = s2.w_navtS;
								timeEnd = s2.w_navtE;
							}

							if (timeEnd > timeStart && timeStart > 0) { // fix for IE9 cross-domain/schema issue, missing navigationStart
								loadTime = timeEnd - timeStart; // thousandths of a second
							}

							// if any loadTime
							if (loadTime) {
								//loadTimeRound=Math.round((loadTime/1000)*10)/10;
								//loadTimeRound=loadTimeRound>=10?'10+':loadTimeRound.toFixed(1);

								// zzzzz capture load time at tenths of a second instead of thousandths for smaller captured data?
								s2.eVar43 = 't:' + perfNav.type + '|r:' + s2.w_cap(perfNav.redirectCount, 5) + '|s:' + s2.w_cap((Math.round((loadTime / 1000) * 10) / 10).toFixed(1), 10); // navigation details. e.g. navigate, reload, back-forward and redirects|redirectCount|time in seconds rounded to one decimal
								s2.prop43 = 'D=v43';

								// loadTime = Math.round((timeEnd - timeStart) / 100); // tenths of a second (if required, to reduce size of integer in reports). Should be capped at 600
								s2.w_addEvt(('event50=' + s2.w_cap(loadTime, 60000)).replace(/\+$/, '')); // remove + from event50 value if capped as '60000+'.  Value must be numeric
							}
						}
						s2.w_perfTracked = true; // prevent from re-running

						/*
						console.log('=== loadTime       = ' + loadTime);
						console.log('=== native timing  = ' + (window.performance && window.performance.timing.loadEventEnd - window.performance.timing.navigationStart));
						console.log('===         diff   = ' + (s.w_navtE - s.w_navtS - (window.performance && window.performance.timing.loadEventEnd - window.performance.timing.navigationStart)));
						 */

						//console.log('___ s.events = '+s.events);
						//console.log(s.contextData.pageDetails); // testing s. changes before async. anything in the timeout will be runtime
						//s.w_sendPage(detailsCopy); // inlined this function below

						// moved this block to surrounding block to capture timing only when not s_abort
						//if (detailsCopy.s_abort) { // any value in s.abort (or s_abort) will prevent tracking from being sent
						//	// if any, store the addEvents that are not going to be sent, for the next available call
						//	detailsCopy.addEvents && storedEventsArray.push(detailsCopy.addEvents) && s.c_w('addEvts', storedEventsArray.join(','));
						//} else {


						// collect and remove data only if it is likely to actually be sent
						s2.w_collectStoredData();

						// collect any previous addEvents that were not sent, then clear the cookie
						while (storedEventsCount--) {
							s2.w_addEvt(storedEventsArray[storedEventsCount]);
						}
						s2.Util.cookieWrite('addEvts', 0, new Date(0));
					}
				}

				// debug the data about to be used in s.t
				// this may be commented in PROD after initial testing period
				if (window.JSON && (s2.Util.cookieRead('s_pers_wp_dev') || !s2.w_prod)) {
					s2.w_log(unescape(JSON.stringify(detailsCopy, null, 4).replace(/\\u([\w\d]{4})/g, '%u$1'))); // log pageDetails JSON in dev if console available
					//s.contextData.pageDetails = s.isie ? '(See console)' : JSON.stringify(detailsCopy).replace(/\./g, '.'); // replace dots here to fix bug in Omniture debugger context data display
					s2.contextData.pageDetails = s2.isie ? '' : JSON.stringify(detailsCopy).replace(/\./g, '.'); // replace dots here to fix bug in Omniture debugger context data display
				}

				//console.log('2 - '+JSON.stringify(s.w_queue));
				s2.t();
				s2.w_log(s2.pageName); // log page name in dev if console available
				s2.w_endTrckng();

				// update the last/previous page value if it was likely sent. This is used by previous page (prop15), trackDedupe
				//console.log('detailsCopy.s_abort = ' + detailsCopy.s_abort);

				//console.log('trackingToBeSent = ' + trackingToBeSent);
				//console.log('s.c_w(\'lastPg\') = ' + s.c_r('lastPg'));

				if (!detailsCopy.s_abort) {
					if (!detailsCopy._drop) {
						// if two calls are fired; the 1st with a 5 sec delay, 2nd with 1 sec delay; the 2nd call will fire before the 1st, and 'previous page' will update according to the sequence the requests are sent
						s2.Util.cookieWrite('lastPg', s2.pageName, new Date(+new Date() + (24 * 60 * 60 * 1000))); // keep last page name in cookie for 24 hours to match with impressions

						// apply link tracking after every trackPage to handle any new links added to the DOM, and collect any new impressions to send with next page load
						// assumes any page requiring link tracking will also be tracked as a page (using this function)
						// s.w_linkTracking could be used as the success callback if a page should have link tracking, but not be tracked as a page

						//s.w_linkTrackingOrig(detailsCopy); // testing moving to doPlugins for click handler

						// collect impressions after page view if not s_abort (collecting for s_abort calls may cause double counting if also tracked with same call not aborted)
						// if trackDedupe or trackOnce, accuracy of prevous page data for any impressions would be impacted, so they also don't fire this
						if (!(/false/i).test(detailsCopy.autoImpr)) {
							s2.w_trackImprs();
						}
					}

					// update for each call
					//s.trackInlineStats = !/false/i.test(detailsCopy.trackInlineStats);
					s2.trackInlineStats = !(/false/i).test(detailsCopy.trackInlineStats) && (detailsCopy.experience !== 'titan'); // too many links in Voyager Titan experience for Android devices. zzzzz Data is not sent in Titan with trackPage anyway? Compare to s object when s.t() fires and sends
					//console.info('s.trackInlineStats = ' + s.trackInlineStats);

					// for mobile/SPA pages instead of only setting once at window load.
					// run only after page to ensure pageName in ClickMap matches tracked pageName
					// Once link IDs are set on any links, they are not removed, but new IDs will not be added to new SPA page links when trackInlineStats=false
					if (s2.trackInlineStats) {
						// Need to decide which method to use before launch. www/forms/online use OnClick, OTP preference may be data-attribute
						// the version of the function not required anymore may be removed to reduce file size
						//s.setOIDsOnClick(); // legacy onclick method. 20140904: google indexing onclick details generated by this. changing to data attributes.
						//ABU TODO s2.setOIDsData(); // new data-attribute method
					}
				}

				//console.log('s.c_w(\'lastPg\') = ' + s.c_r('lastPg'));

				//}, sendDelay); // Default is 100ms. This is the time to wait after onload/trackPage call to ensure loadEventEnd measurement is available. Delay longer for Gomez
			}, s2.w_sendDelayOffset); // Default is 100ms. This is the time to wait after onload/trackPage call to ensure loadEventEnd measurement is available. Delay longer for Gomez
		});
		//}
	};
	
	s2.w_moduleLookup = function (mods, modKey) {
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
	s2.w_summarise = function (str) {
		//console.log(str);
		// function to summarise number of elements in a string to an object with the key of each item and value=count
		var lp,
		len,
		arr = str.split(','),
		sumObj = {};

		for (lp = 0, len = arr.length; lp < len; lp++) {
			sumObj[arr[lp]] = (str.match(new RegExp('(?:^|,)' + arr[lp] + '(?=,|$)', 'g')) || '').length;
		}
		return sumObj;
	};

	s2.w_checkModuleChanges = function (prevCookie, curr) {
		var prev = s2.Util.cookieRead(prevCookie),
		summary = {},
		item,
		lp,
		changes = [];

		//console.log(prev);
		//console.log(curr);

		if ((prev && curr) && (prev !== curr)) {
			// summarise the two sets into the number of each item
			summary.cur = s2.w_summarise(curr);
			summary.pre = s2.w_summarise(prev);

			for (item in summary.cur) {
				// debug cur
				//console.log('cur '+item+': cur='+summary.cur[item]+' pre='+summary.pre[item]);
				if (summary.cur.hasOwnProperty(item)) {
					for (lp = 0; lp < (summary.cur[item] - (summary.pre[item] || 0)); lp++) {
						changes.push('+' + item);
					}
				}
			}
			for (item in summary.pre) {
				// debug pre
				//console.log('pre '+item+': cur='+summary.cur[item]+' pre='+summary.pre[item]);
				if (summary.pre.hasOwnProperty(item)) {
					for (lp = 0; lp < (summary.pre[item] - (summary.cur[item] || 0)); lp++) {
						changes.push('-' + item);
					}
				}
			}
		}
		if (curr) {
			// always update to latest modules when available
			s2.Util.cookieWrite(prevCookie, curr);
		}
		// debug
		//console.log(summary);
		//if(changes.length){
		//	console.log('Changes = \n'+changes);
		//}
		// unless no difference, re-ordered only, or added/removed same module type, changeArray will be populated with details
		return changes.join(',');
	};
	
	// functions for custom link tracking
	s2.w_trackImpression = function (detail) {
		// function to store banner impressions if they are rendered post-load. updated to exclude undefined cookie read and blank values passed
		//var lp,len,target=detail.replace(/^,|,$/,'').split(',');
		var lp,
		len,
		newData,
		items,
		ckName,
		detailObj = detail,
		attrHref,
		linkHref,
		pidRecordedFlag = 'data-analytics-pid-rec';

		//console.log('==== s.c_r(banners) 1: len = ' + s.c_r('banners').split(',').length + '. ' + s.c_r('banners'));

		// only track banners if page not hidden? Prevent incorrect impression counts on wrong pages if multiple tabs, carousels scrolling, etc...
		//console.log('!s.w_pageHidden = ' + !s.w_pageHidden());
		if (!s2.w_pageHidden()) {

			if (!s2.w_pgTrkStatus && !pageDetails.s_abort) { // for imprs sent before trackPage runs first time on page
				ckName = 'asyncImp'; // impressions being collected on this page before any tracking sent. These impressions assumed to be for the current (non-SPA) page, with non-standard sequence of async calls. e.g impression, trackPage, impression
			}
			//if (!s.w_prevPgCkiesSent) {
			if (s2.w_pgTrkStatus === 'started') {
				ckName = 'impTmp'; // impressions being collected on this page before previous tracking sent
			}
			if (s2.w_pgTrkStatus === 'sent') {
				ckName = 'banners'; // from previous page, or after previous impressions have been sent
			}

			//if (s.w_pgTrkStatus === 'blocked') {
			//	newData = false;
			//}

			//console.log('s.w_trackImpression = ' + detail);
			//console.log('s.w_prevPgCkiesSent = ' + s.w_prevPgCkiesSent);
			//console.log('s.w_pgTrkStatus = ' + s.w_pgTrkStatus);

			//console.log('1. --- ' + newData);

			// allowing argument passed as link object (instead of pid string) so we can check element visibility directly, set recorded attribute to avoid double-counting.
			if (detailObj && detailObj.nodeName === 'A') {
				if (s2.w_isVis(0, detailObj) && !detailObj.getAttribute(pidRecordedFlag)) {
					attrHref = detailObj.getAttribute('href');
					linkHref = /^#/.test(attrHref) ? attrHref : detailObj.href;
					detail = s.getQueryParam('pid', '', linkHref);
					if (detail) {
						detailObj.setAttribute(pidRecordedFlag, '1');
					}
				} else {
					detail = 0;
				}
			}

			if (detail && ckName) {
				newData = String(detail || '');
				items = newData.split(',');
				newData = ckName === 'asyncImp' ? (s2.w_asyncImp || '') : (s2.Util.cookieRead(ckName) || '');
				for (lp = 0, len = items.length; lp < len; lp++) {
					if (items[lp]) {
						newData = s2.apl(newData, s2.w_lCase(items[lp]), ',', 2);
					}
				}
				// if the cookie has more than five banners send a custom request to prevent the string becoming truncated? How long are the pid's? evar=255 chars
				//s.c_w('banners',newData);
				if (ckName === 'asyncImp') {
					s2.w_asyncImp = newData; // impressions passed before trackPage has been called for the first time on a page load (to be associated with current page, sent on next page)
				} else {
					s2.Util.cookieWrite(ckName, newData, new Date(+new Date() + (24 * 60 * 60 * 1000))); // keep impressions in cookie for 24 hours
				}
			}
		}
		//console.log('==== s.c_r(impTmp) = ' + s.c_r('impTmp'));
		//console.log('==== s.c_r(banners) 2: len = ' + s.c_r('banners').split(',').length + '. ' + s.c_r('banners') + '\n===================================================');
		return newData;
	};
	//ZZZ ABU not tested yet
	s2.w_trackLinkSocial = function (evt) {
		var eTarg = s2.w_getEvtTrgt(evt, 'href');
		s2 = s2_gi(s2_account);
		//s.events = 'event71';
		s2.linkTrackEvents = s2.events = 'event71';
		//s.linkTrackVars='prop15,prop69,eVar56,prop56,events';
		s2.linkTrackVars = s2.w_ltv + ',eVar56,prop56,events'; // includes eVar21 and c39
		s2.eVar56 = s2.w_lCase(eTarg.href, 1);
		s2.prop56 = 'D=v56';
		s2.tl(eTarg || true, 'e', 'social:' + s2.w_lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
		s2.w_endTrckng();
	};
	
	//ZZZ ABU not tested yet
	s2.w_trackLinkExit = function (evt) {
		var eTarg = s2.w_getEvtTrgt(evt, 'href');
		s2 = s2_gi(s2_account);
		//s.events = ''; // no specific event for exit, but need to clear any events set by previous calls
		s2.linkTrackEvents = s2.events = '';
		//s.linkTrackVars='prop15,prop69';
		s2.linkTrackVars = s2.w_ltv;
		//eTarg.s_oid=s_objectID; // makes clickmap cookie record correct ID, but cookie shouldnt even be set - correct clickmap data sent immediately for e,o,d links
		s2.tl(eTarg || true, 'e', s2.w_lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
		s2.w_endTrckng();
	};
	
	//ZZZ ABU not tested yet
	s2.w_trackLinkDownload = function (evt) {
		var eTarg = s2.w_getEvtTrgt(evt, 'href'),
		//pd=(/(?:^|\s)disclosure(?:\s|$)/.test(eTarg.className)?'pds:':''); // class or data-attribute to identify product disclosure downloads
		pd = (((/pds\.pdf(?:\?|$)/i).test(eTarg.href) || ((/\b(terms\ and\ conditions|product\ disclosure\ statement)\b/i).test(eTarg.innerHTML) && (/\.pdf(?:\?|$)/i).test(eTarg.href))) ? 'pds:' : ''); // ...pds.pdf in href or T and C in link text to identify product disclosure downloads
		s2 = s2_gi(s2_account);
		s2.events = 'event67';
		if (pd) {
			//s.events+=',event31';
			s2.w_addEvt(31);
		}
		s2.linkTrackEvents = s2.events;
		//s.linkTrackVars='prop15,prop69,eVar61,prop61,events';
		s2.linkTrackVars = s2.w_ltv + ',eVar61,prop61,events';
		s2.eVar61 = pd + (s2.w_lCase(eTarg.href, 1).replace(/(.*\/)?(\.*?)/, '$2')); // record file name only
		s2.prop61 = 'D=v61';
		s2.tl(eTarg || true, 'd', pd + s2.w_lCase(eTarg.href, 1)); // 'eTarg' assumes this function only called from link clicks
		s2.w_endTrckng();
	};

	//ZZZ ABU not tested yet
	s2.w_trackInteraction = function (evt, args) {
		var argsObj = args || {},
		eTarg = s2.w_getEvtTrgt(evt, argsObj.detail ? 'href' : 'data-analytics-link'),
		detail = s2.w_clean(decodeURIComponent(s2.w_lCase(argsObj.detail || (eTarg && eTarg.getAttribute('data-analytics-link')), 1))); // tracks details from object passed or event target with data-analytics-link attribute

		if (detail === 'download') {
			s2.w_trackLinkDownload(evt); // Some downloads in OTP are tagged directly as a 'download' (button tags etc. instead of a href)
			return;
		}

		s2 = s2_gi(s2_account);
		//s.events = 'event69';
		s2.linkTrackEvents = s2.events = 'event69';
		//s.linkTrackVars='prop15,prop69,eVar54,prop54,events';
		s2.linkTrackVars = s2.w_ltv + ',eVar54,prop54,events';
		s2.eVar54 = detail;
		s2.prop54 = 'D=v54';
		s2.tl(eTarg || true, 'o', 'interaction:' + detail); // 'eTarg' assumes this function only called from link clicks

		if (argsObj.stopDefault) {
			// dont stop default event unless specified
			s2.w_stopEvt(evt);
		}
		s2.w_endTrckng();
	};

	//ZZZ ABU not tested yet
	s2.w_trackBannerDismiss = function (detail) {
		detail = s2.w_lCase(detail, 1); // href querystring PID value passed into this function
		s2 = s2_gi(s2_account);
		//s.events = 'event17';
		s2.linkTrackEvents = s2.events = 'event17';
		//s.linkTrackVars='prop15,prop69,eVar24,events';
		s2.linkTrackVars = s2.w_ltv + ',eVar24,events';
		s2.eVar24 = detail;
		s2.tl(true, 'o', 'internal campaign dismiss');
		s2.w_endTrckng();
	};

	//ZZZ ABU not tested yet
	s2.w_trackClickToCall = function (evt) {
		var eTarg = s2.w_getEvtTrgt(evt, 'href'),
		detail = decodeURI(s2.w_lCase(eTarg.href, 1)).replace(/^tel:|\s+/gi, ''); // Appears in the Page interactions name report (v54). custom call links may not have friendly href
		s2 = s2_gi(s2_account);
		//s.events = 'event61,event69';
		s2.linkTrackEvents = s2.events = 'event61,event69';
		//s.linkTrackVars='prop15,prop69,eVar54,prop54,eVar59,events';
		s2.linkTrackVars = s2.w_ltv + ',eVar54,prop54,eVar59,events';
		s2.eVar54 = 'call:' + detail;
		s2.prop54 = 'D=v54';
		s2.eVar59 = detail;

		//s.forcedLinkTrackingTimeout = 500;
		//s.useForcedLinkTracking = false;

		s2.tl(eTarg || true, 'o', 'interaction:call:' + detail); // 'eTarg' assumes this function only called from link clicks
		//s.tl(eTarg||true,'o','interaction:call:'+detail, null, 'navigate'); // 'eTarg' assumes this function only called from link clicks // this or 'navigate' breaks FF in test page?
		s2.w_endTrckng();
		//s.w_stopEvt(evt); // this or navigate breaks FF in test page?
	};

	//ZZZ ABU not tested yet
	s2.w_trackLiveChat = function (evt, args) {
		// this function is called directly by LivePerson code when the Interactive Chat event is fired in LivePerson
		var eTarg = s2.w_getEvtTrgt(evt),
		argsObj = args || {},
		detail = s2.w_lCase(argsObj.detail, 1); // details passed from LivePerson rule
		s2 = s2_gi(s2_account);
		//s.events = 'event63,event69';
		s2.linkTrackEvents = s2.events = 'event63,event69';
		//s.linkTrackVars='prop15,prop69,eVar54,prop54,eVar57,prop57,events';
		s2.linkTrackVars = s2.w_ltv + ',eVar54,prop54,eVar57,prop57,events';
		s2.eVar54 = 'live chat:' + detail;
		s2.prop54 = 'D=v54';
		s2.eVar57 = s.w_lCase(argsObj.session, 1);
		s2.prop57 = 'D=v57';
		s2.tl(eTarg || true, 'o', 'interaction:live chat:' + detail); // (eTarg||true) allows this function to be called from script or link clicks
		s2.w_endTrckng();
	};

	//ZZZ ABU not tested yet
	s2.w_trackRank = function (evt) {
		// Track search result rank clicks
		// this refers to data set by another script on the funnelback search results page
		var eTarg = s2.w_getEvtTrgt(evt, 'data-analytics-rank'),
		detail = s2.w_lCase(eTarg && eTarg.getAttribute('data-analytics-rank'), 1);

		s2.Util.cookieWrite('cpr', detail);
		//alert('Set cookie, rank: '+detail);
		//s.w_stopEvt(evt);
	};

	//ZZZ ABU not tested yet
	s2.w_trackErrorCount = function (count, errCodes) {
		if (count && count > s2.Util.cookieRead('errCount')) {
			if (!errCodes) {
				s2.Util.cookieWrite('errCode', s2.apl(s2.Util.cookieRead('errCode'), '(count)', ',', 2));
			}
			s2.Util.cookieWrite('errCount', count);
		}
	};
	
	//ZZZ ABU not tested yet
	s2.w_trackError = function (detail) {
		//var doc = document,
		var lp,
		len,
		target;

		// if function called with no detail passed, scan page and track errors/count of errors found by className/data-attr?
		if (!detail) {
			// capture any error message elements tagged with a data-attr or className containing the error code
			//target = s.w_qSA(doc, '[data-analytics-error]', '*', 'data-analytics-error', /.*/);
			//var target = s.w_altGetElemsByClassName(doc.body,'span','error-label'); // look for number of li in errorLinks div id
			target = document.getElementById('error-message'); //.getElementsByTagName('li'); // look for number of li in errorLinks div id
			if (target) {
				len = target.getElementsByTagName('li').length; // look for number of li in errorLinks div id
				// store number of errors if more then previously stored (capture the highest number of errors the user has seen per page)
				//if(len&&len>s.c_r('errCount')){
				//	s.c_w('errCode',s.w_inlErr); // this text is matched on page load to determine error count prefix
				//	s.c_w('errCount',len);
				//}
				s2.Util.cookieWrite('errCode', s2.apl(s2.Util.cookieRead('errCode'), '(auto)', ',', 2));
				s2.w_trackErrorCount(len, true);
			}

			// capture all error item text. put value into list? prop17?
			/*
			for(lp=0,len=target.length;lp<len;lp++){
			// store errors in var and send list to function?
			detail=s.apl(detail,(target[lp].textContent||target[lp].innerText),',',2);
			}
			 */
		}
		// send errors if any as custom link request
		/*
		if(detail){
		detail=s.w_lCase(detail,1);
		s=s_gi(s_account);
		s.linkTrackVars='prop15,prop69,prop17';
		//s.prop17=s.siteID+':'+detail;
		s.prop17=detail; // capture as list prop?
		s.tl(true,'o','page code error'); // 'true' assumes this function only called from script, not link clicks
		s.w_endTrckng();
		}
		 */

		// always store errors in cookie for next page
		else {
			// Split error fields from Domino like -
			// NumApplicants;ConfirmCompared;ConfirmResident;ReadConsent;ConfirmElectronic;Email_1;EmailConfirm_1;
			// NumApplicants,ConfirmCompared,ConfirmResident,ReadConsent,ConfirmElectronic,Email_1,EmailConfirm_1,
			//target=detail.replace(/^,|,$/,'').split(',');
			target = String(detail || '').split(',');

			detail = s2.Util.cookieRead('errCode');
			for (lp = 0, len = target.length; lp < len; lp++) {
				if (target[lp]) {
					//detail=s.apl(detail,s.w_lCase(target[lp]),',',2);
					detail = s2.apl(detail, s2.w_lCase(s2.w_clean(s2.w_clean(target[lp]).substring(0, 50))), ',', 2); // trimmed length to 50 chars to ensure useful data and minimise pixel length
				}
			}
			//s.c_w('errCode',s.apl(s.c_r('errCode'),s.w_lCase(detail),',',2));
			//s.c_w('errCount',(+s.c_r('errCount'))+1); // increment number of errors seen
			s2.Util.cookieWrite('errCode', detail);
			s2.w_trackErrorCount(detail.split(',').length, true);
		}
	};
	
	/*
	Custom link tracking function. Arguments are -
	event
	Custom link name
	Custom link type (e,o,d)
	Omniture s object of variables. e.g. {'events':'event46,event53','eVar23':'custom details','prop23':'D=v23'}
	 */
	s2.w_trackLinkCustom = function (evt, linkName, linkType, s_obj) {
		//console.log('=== 1 '+s_obj);
		var eTarg = s2.w_getEvtTrgt(evt),
		prpty,
		passedLinkTrackVars = [],
		//tempPageDetails = {};
		tempPageDetails = s2.w_tempPageDetails || {}; // to automatically get page name etc. from previous page calls. pageName can also be set in s_obj with other custom details

		s2 = s2_gi(s2_account);

		for (prpty in s_obj) {
			// allow any property set in custom link call to pass into temp details, then apply a filter only once as vars are set onto s object
			if (s_obj.hasOwnProperty(prpty) && s_obj[prpty] && typeof s_obj[prpty] !== 'function') {
				passedLinkTrackVars.push(prpty);
				//pageDetails['temp_'+prpty]=s_obj[prpty]; // set the custom link details as temp override values on the s object to bypass doPlugins rules overriding the custom values passed
				tempPageDetails['temp_' + prpty] = s_obj[prpty]; // copying details to new object for async instead of window.pageDetails
				//console.log(prpty+' = '+pageDetails['s_'+prpty]+' - '+typeof prpty);
			}
		}
		//passedLinkTrackVars.join(',');
		//console.log(passedLinkTrackVars);
		//passedLinkTrackVars+=',prop15,prop69'; // always include prev page name + req length
		//passedLinkTrackVars+=','+s.w_ltv; // always include prev page name + req length and other default linkTrackVars

		// ensure all vars set above in custom override are included in filter (also in override)
		//console.log('=== 2 '+s_obj.linkTrackVars);
		//pageDetails.temp_linkTrackVars = s.w_ltv + ',' + passedLinkTrackVars; // the array above is converted to comma-string when appended
		tempPageDetails.temp_linkTrackVars = s.w_ltv + ',' + passedLinkTrackVars; // the array above is converted to comma-string when appended
		//console.log('---'+pageDetails.temp_linkTrackVars);

		// ensure all events set above in custom override are included in filter (also in override)
		if (s_obj.events) {
			//pageDetails.temp_linkTrackEvents=s_obj.events.replace(/\=.*?(?=,|$)/g,''); // automatically track all events passed. remove value from any numeric/currency events like event5=100 or they will be filtered out
			tempPageDetails.temp_linkTrackEvents = s_obj.events.replace(/\=.*?(?=,|$)/g, ''); // automatically track all events passed. remove value from any numeric/currency events like event5=100 or they will be filtered out
		}

		//console.log(tempPageDetails);
		s2.w_queue.unshift(tempPageDetails); // unshift to insert at bottom of array for the following s.tl
		s2.tl(eTarg || true, linkType, linkName, s_obj); // (eTarg||true) allows this function to be called from script or link clicks
		s2.w_endTrckng();
	};
	
	s2.w_amntBnds = function (type, transactionValue) { // type not required? all use the same bands
		var bands,
		band = {
			'range' : type + ':NaN', // default to unknown currency/value
			'avg' : 0 // default
		},
		lp;
		//transactionDetails=(transactionValue||'').match(/(^\D*)(.*)/), // Values may be like '1200', '$123.45' ($=AUD), 'USD123.45', 'EUR123' etc.
		//currency,
		//amount;

		//currency=(transactionDetails[1]||'AUD').toUpperCase(); // default to AUD if currency missing
		//if(currency==='$'){ // default to AUD if currency prefix = $
		//	currency='AUD';
		//}
		//s.currencyCode=currency; // how to ensure reverts to AUD and any currency specified is used for all/appropriate items in request? i.e. not overwritten if set

		//amount=(transactionDetails[2]||'x'); // make amount 'x' (NaN - Not a Number) and exit function if no value set, instead of defaulting to zero and looping through bands
		//if(isNaN(amount)){
		if (isNaN(transactionValue)) {
			//band.range=type+':'+currency+':'+'NaN';
			//band.range=type+':NaN';
			//band.avg=0;
			return band;
		}
		//amount=Math.round(amount)/1000;
		transactionValue = Math.round(transactionValue) / 1000;
		/*
		if(type==='personal loan'){
		bands={
		// use same bands as car loans?
		'0-4K':[0,4],
		'4K-10K':[4,10],
		'10K-20K':[10,20],
		'20K-30K':[20,30],
		'30K-50K':[30,50],
		'50K+':[50,'+']
		};
		}
		if(type==='car loan'){
		bands={
		'0-5K':[0,5],
		'5K-10K':[5,10],
		'10K-20K':[10,20],
		'20K-30K':[20,30],
		'30K-50K':[30,50],
		'50K+':[50,'+']
		};
		}
		 */

		// all bands can use the same grouping. different payment types may only use a subset of these bands

		//if(/anyone|transfer|bpay|internat/i.test(type)){ // confirm types. Extend bands to allow for Home loans?
		/*bands_Orig={
		'0-100':[0,0.1],
		'100-500':[0.1,0.5],
		'500-1K':[0.5,1],
		'1K-2K':[1,2],
		'2K-5K':[2,5],
		'5K-10K':[5,10],
		'10K-20K':[10,20],
		'20K-30K':[20,30],
		'30K-50K':[30,50],
		'50K-100K':[50,100],
		'100K-150K':[100,150],
		'150K-200K':[150,200],
		'200K-250K':[200,250],
		'250K+':[250,'+']
		};*/

		/*
		bands = {
		'0' : [[-1, 0], 0],
		'0-100' : [[0, 0.1], 0.05],
		'100-500' : [[0.1, 0.5], 0.3],
		'500-1K' : [[0.5, 1], 0.75],
		'1K-2K' : [[1, 2], 1.5],
		'2K-5K' : [[2, 5], 3.5],
		'5K-10K' : [[5, 10], 7.5],
		'10K-20K' : [[10, 20], 15],
		'20K-30K' : [[20, 30], 25],
		'30K-50K' : [[30, 50], 40],
		'50K-100K' : [[50, 100], 75],
		'100K-150K' : [[100, 150], 125],
		'150K-200K' : [[150, 200], 175],
		'200K-250K' : [[200, 250], 225],
		'250K+' : [[250, '+'], 275]
		};
		 */

		bands = {
			'0' : {
				min : -1,
				max : 0,
				avg : 0
			},
			'0-100' : {
				min : 0,
				max : 0.1,
				avg : 0.05
			},
			'100-500' : {
				min : 0.1,
				max : 0.5,
				avg : 0.3
			},
			'500-1K' : {
				min : 0.5,
				max : 1,
				avg : 0.75
			},
			'1K-2K' : {
				min : 1,
				max : 2,
				avg : 1.5
			},
			'2K-5K' : {
				min : 2,
				max : 5,
				avg : 3.5
			},
			'5K-10K' : {
				min : 5,
				max : 10,
				avg : 7.5
			},
			'10K-20K' : {
				min : 10,
				max : 20,
				avg : 15
			},
			'20K-30K' : {
				min : 20,
				max : 30,
				avg : 25
			},
			'30K-50K' : {
				min : 30,
				max : 50,
				avg : 40
			},
			'50K-100K' : {
				min : 50,
				max : 100,
				avg : 75
			},
			'100K-150K' : {
				min : 100,
				max : 150,
				avg : 125
			},
			'150K-200K' : {
				min : 150,
				max : 200,
				avg : 175
			},
			'200K-250K' : {
				min : 200,
				max : 250,
				avg : 225
			},
			'250K+' : {
				min : 250,
				max : '+',
				avg : 275
			}
		};

		//}
		// determine band
		for (lp in bands) {
			if (bands.hasOwnProperty(lp)) {
				//if(amount>bands[lp][0] && (bands[lp][1]==='+'?true:amount<=bands[lp][1])){
				//if(amount>bands[lp][0][0] && (bands[lp][0][1]==='+'?true:amount<=bands[lp][0][1])){
				if (transactionValue > bands[lp].min && (bands[lp].max === '+' ? true : transactionValue <= bands[lp].max)) {
					//band.range=type+':'+currency+lp.replace(/-/,'-$');
					//band.range=type+':'+currency+':'+lp;
					band.range = type + ':' + lp;
					band.avg = bands[lp].avg * 1000;
					break;
				}
			}
		}
		return band;
	};
	
	// check if whole page is hidden/visible
	s2.w_pageHidden = function () {
		return document.hidden || (document.msHidden || document.webkitHidden);
	};
	
	// moved from original responsive CSS function in analytics.js
	s2.w_isVis = function (selector, element) {
		var elem = selector ? document.querySelector && document.querySelector(selector) : element,
		ieDisplayNoneBug;
		// fix for IE bug with inline and block elements stating offsets incorrectly
		ieDisplayNoneBug = elem && elem.currentStyle && elem.currentStyle.display === 'none' ? true : false;
		return elem && (elem.offsetWidth > 0 && elem.offsetHeight > 0) && !ieDisplayNoneBug; // other conditions can be added if required
	};

	s2.w_trackImprs = function () {
		var lp,
		targetSet,
		targetItem,
		linkHref,
		attrHref,
		linkPid,
		pidRecordedFlag = 'data-analytics-pid-rec',
		arrImprs = [];

		//targetSet = document.getElementsByTagName('A');
		targetSet = s2.w_qSA(document, "a[href*='pid\\=']", 'A', 'href', (/pid=/i));

		lp = targetSet.length;
		while (lp--) {
			// check for any links with pid= and add them to the impressions list
			// THIS BLOCK SHOULD RUN AFTER S.T(), ELSE DOPLUGINS WILL TRACK IMPRESSIONS WITH THE CURRENT PAGE (post-load impressions are only meaningfully reported against previous page)
			targetItem = targetSet[lp];

			// if it's an anchor link, look in the anchor only, not full URL in case already a pid click parameter in current querystring
			attrHref = targetItem.getAttribute('href');
			linkHref = /^#/.test(attrHref) ? attrHref : targetItem.href;
			linkPid = s2.getQueryParam('pid', '', linkHref);

			/*
			if (linkPid) {
			console.log(targetItem.href);
			console.log('s.w_trackImprs found pid: ' + linkPid);
			console.log('Visible size?: ' + targetItem.offsetWidth + 'x' + targetItem.offsetHeight + '. Vis test === ' + (linkPid && s.w_isVis(0, targetItem)));
			}
			 */

			// fix for IE bug with inline and block elements stating offsets incorrectly
			//ieDisplayNoneBug = target[lp].currentStyle && target[lp].currentStyle.display === 'none' ? true : false;

			// not an impression if the element is not visible
			//if (linkPid && (target[lp].offsetWidth > 0 && target[lp].offsetHeight > 0)) {
			//if (linkPid && (target[lp].offsetWidth > 0 && target[lp].offsetHeight > 0) && !ieDisplayNoneBug) {
			//if (linkPid && s.w_isVis(0, targetItem)) {
			if (linkPid && s2.w_isVis(0, targetItem) && !targetItem.getAttribute(pidRecordedFlag)) {

				// if not already collected on this window load
				//window.console && console.log(linkPid + ' collected? = ' + targetItem.getAttribute(pidRecordedFlag));

				arrImprs.push(linkPid.replace(/,/g, '%2C')); // encode commas in url pid's so they arent split into multiple impressions

				// set a flag
				targetItem.setAttribute(pidRecordedFlag, '1');
			}
		}
		if (arrImprs) {
			//window.console && console.log('s.w_trackImprs to send = ' + arrImprs.join(','));
			s2.w_trackImpression(arrImprs.join(','));
		}
	};
	
	/************************** CUSTOM CONFIG SECTION **************************/
	/* WARNING: Changing any of the below variables will cause drastic
	changes to how your visitor data is collected.  Changes should only be
	made when instructed to do so by your account manager.*/

	s2.visitorNamespace="westpacbankinggroup"
	s2.trackingServer="westpacbankinggroup.sc.omtrdc.net"
	s2.prop1 = (typeof(Visitor) != "undefined" ? "VisitorAPI Present" : "VisitorAPI Missing");



	/************************** CUSTOM FUNCTION SECTION **************************/

	//ABU Missing function

	s2.fl = function(x,l){return x?(''+x).substring(0,l):x};
    s2.pt = function(x,d,f,a){var s2=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s2[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};


	/************************** CUSTOM contextData **************************/
	pd.version = 'D="' + s2.version + ' 08092016 dev "+Host'; // TODO: Code release date and site name for each site to be updated (dev -> www/forms/online/banking/search etc).

	// Detect experience initially set on page. May come from analytics.js
	pd.experience = (pageDetails.experience || 'desktop').replace(/^titan$/i, 'mob'); // (titan is OTP mobile) // this may have been moved here to disable clickmap on mob when set by analytics.js


	/************************** PLUGINS SECTION *************************/

	// copy and paste implementation plug-ins here - See "Implementation Plug-ins" @
	// https://marketing.adobe.com/resources/help/en_US/sc/implement/#Implementation_Plugins
	// Plug-ins can then be used in the s_doPlugins(s) function above 

	// moved up for use by new setOIDs function when added to window load listener
	/*
	 * Plugin Utility: Replace v1.0
	 */
	//ZZZ ABU not tested yet
	s2.repl = function (x, o, n) {
		var i = x.indexOf(o),
		l = n.length;
		while (x && i >= 0) {
			x = x.substring(0, i) + n + x.substring(i + o.length);
			i = x.indexOf(o, i + l);
		}
		return x;
	};

	// functions to apply automatic link tracking

	/*
	 * DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
	 */

	/*
	s.setupDynamicObjectIDs=new Function("" // adds listener to call s.setOIDs at window.onload
	+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
	+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
	+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
	+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
	+"re=1}");
	 */

	// documentation says non-zero means clickmap data not yet ready to be accessed by ClickMap plugin
	//s.wd.s_semaphore = 1; // clickmap data not ready to be accessed by ClickMap plugin...

	// Original setOIDs function sets custom object IDs in onclick. Modified to add object-id attribute to provide unique clickmap ID for custom links
	/*
	s.setOIDsOnClick = function (e) {
	var z,
	s = s_c_il[window.s._in],
	b = s.eh(s.wd, 'onload'),
	o = 'onclick',
	x,
	l,
	u,
	c,
	i,
	a = [];
	if (s.doiol) {
	if (b) {
	s[b] = s.wd[b];
	}
	s.doiol(e);
	}
	if (s.d.links) {
	for (i = 0; i < s.d.links.length; i++) {
	l = s.d.links[i];
	c = l[o] ? String(l[o]) : '';
	b = s.eh(l, o);
	z = l[b] ? String(l[b]) : '';
	u = s.getObjectID(l);
	if (u && c.indexOf('s_objectID') < 0 && z.indexOf('s_objectID') < 0) {
	u = s.repl(u, '\"', '');
	u = s.repl(u, '\\n', '').substring(0, 97);
	l.s_oc = l[o];
	a[u] = a[u] ? a[u] + 1 : 1;
	x = '';
	if (c.indexOf('.t(') >= 0 || c.indexOf('.tl(') >= 0 || c.indexOf('s_gs(') >= 0) {
	x = 'var x=\".tl(\";';
	}
	x += 's_objectID=\"' + u + '_' + a[u] + '\";return this.s_oc?this.s_oc(e):true';
	if (s.isns && s.apv >= 5) {
	l.setAttribute(o, x);
	}

	// add data-attribute for clickmap (as well as onclick above), otherwise custom links don't record their respective unique link IDs
	l.setAttribute('data-s-object-id', u + '_' + a[u]);

	l[o] = new Function('e', x);
	}
	}
	}
	s.wd.s_semaphore = 0;
	return true;
	};
	 */

	// New setOIDs method to set ID in data-attribute. Requires update to ClickMap addon to recognise the data-attribute
	// Legacy clickmap addon doesn't detect these link IDs to display overlay
	//ZZZ ABU not tested yet
	s2.setOIDsData = function () { // TODO: zzzzz maybe pass in element to scan links within, instead of whole document. (e.g. maybe only current view div)
		var sObj = s_c_il[window.s2._in],
		theLink,
		uniqueId,
		loop,
		linkIdArray = [],
		docLinks = document.links,
		docLinksLen = docLinks.length;

		if (docLinks) {
			for (loop = 0; loop < docLinksLen; loop++) {
				theLink = docLinks[loop];
				uniqueId = sObj.getObjectID(theLink);
				if (uniqueId) {
					uniqueId = sObj.repl(uniqueId, '\"', '');
					uniqueId = sObj.repl(uniqueId, '\\n', '').substring(0, 97);
					linkIdArray[uniqueId] = linkIdArray[uniqueId] ? linkIdArray[uniqueId] + 1 : 1;

					theLink.setAttribute('data-s-object-id', uniqueId + '_' + linkIdArray[uniqueId]);
				}
			}
		}
		//sObj.wd.s_semaphore = 0; // old Omniture documentation says zero signals ready
		return true;
	};

	// link tracking handler
	//ZZZ ABU not tested yet
	s2.w_linkTracking = function (evt) {
		var target = s2.w_getEvtTrgt(evt, 'href'),
		linkRegexInternal = new RegExp(s2.linkInternalFilters.replace(/^,|,$/g, '').replace(/,/g, '|'), 'i'),
		linkRegexDownload = new RegExp('\\.(?:' + s2.linkDownloadFileTypes.replace(/,/g, '|') + ')(?:\\?|$)', 'i'),
		linkRegexSocial = (/(?:\/\/|\.)(?:youtube|facebook|twitter|linkedin|plus\.google)\.com/i), // need to confirm list. required to fire event71 if social exit link
		dataAnalyticsLink;

		//console.log('linkRegexDownload = ' + linkRegexDownload);

		// set custom object IDs for clickmap
		// only apply link handlers etc. if trackInlineStats is true
		//if(s.trackInlineStats){
		//	s.setOIDs(); // this probably should only be set once after window load, else link IDs generated every click on page...
		//}

		if (target.nodeName === 'A') {
			// set nav area in cookie
			s2.w_getNavMenuId(evt);

			// social link handling (social link event)
			if ((!linkRegexInternal.test(target.href)) && (linkRegexSocial.test(target.href))) {
				s2.w_trackLinkSocial(evt);
			}
			// exit link handling
			if (target.href && (!linkRegexInternal.test(target.href)) && (!linkRegexSocial.test(target.href))) {
				s2.w_trackLinkExit(evt);
			}
			// download link handling. data-analytics-link attribute used in OTP to define some download links/buttons
			if (linkRegexDownload.test(target.href)) {
				s2.w_trackLinkDownload(evt);
			}
			// site search results link tracking
			if (target.getAttribute('data-analytics-rank')) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) { // previously in selenium two commands were required to capture the rank and click-past. The listener now captures the details in the first click
				s2.w_trackRank(evt);
			}
			// Print link on branch detail page has class=print
			//if (target.getAttribute('data-analytics-link')) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) {
			dataAnalyticsLink = target.getAttribute('data-analytics-link');
			//console.log('dataAnalyticsLink = ' + dataAnalyticsLink);
			if (dataAnalyticsLink) { // && /.+/.test(target.getAttribute('data-analytics-rank'))) {
				if (!linkRegexDownload.test(target.href)) { // only if hasn't already been matched by linkRegexDownload regex above (OTP downloads may use data-attrs instead)
					s2.w_trackInteraction(evt);

					if (/^trackonce:/i.test(dataAnalyticsLink)) { // if the link name (data-analytics-link attribute value) starts with 'trackonce:', only track once, then remove the value to prevent subsequent click tracking
						target.setAttribute('data-analytics-link', '');
					}
				}
			}
			// tel: links
			if (/^tel:/i.test(target.href)) {
				s2.w_trackClickToCall(evt);
			}
			// mailto: links?
			if (/^mailto:/i.test(target.href)) {
				target.setAttribute('data-analytics-link', 'email:' + decodeURI(target.href.replace(/^mailto:/i, ''))); // added .replace(/^mailto:/i,'')
				s2.w_trackInteraction(evt);
			}

			// automatic banner dismiss auto-tracking. function for manual dismiss tracking available
			// this probably requires more than just className selection? may need to be by data-attribute?
			/*
			target = s.w_altGetElemsByClassName(doc.body,'A','pid-dismiss');
			//s.w_addHandler(target[lp],'click',function(evt){s.w_trackBannerDismiss(evt,'text',true)});
			s.w_addHandler(target[lp],'click',s.w_trackBannerDismiss);
			 */

		}

		// update time with every click
		if (!window.performance) {
			s2.Util.cookieWrite('navt',  + new Date(), new Date(+new Date() + 30000)); // cookie updated every click and only lasts for 30 seconds
		}
	};
	// attach link handler to document
	s2.w_addHandler(document, 'click', s2.w_linkTracking); // testing handler on document instead of applying directly to every link. Simulate jQuery .on()

	/*
	 * s.w_channelManager = channelManager v2.8 - Tracking External Traffic (with mod for full URL: s.w_getLoc().href)
	 */
	s2.w_channelManager = function (a, b, c, d, e, f, g) {
		var s2 = this,
		h = new Date(),
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
		S;
		h.setTime(h.getTime() + 1800000);
		if (e) {
			i = 1;
			if (s2.Util.cookieRead(e)) {
				i = 0;
			}
			if (!s2.Util.cookieWrite(e, 1, h)) {
				s2.Util.cookieWrite(e, 1, 0);
			}
			if (!s2.Util.cookieRead(e)) {
				i = 0;
			}
			if (f && s2.Util.cookieRead('s_tbm' + f)) {
				i = 0;
			}
		}
		j = s2.referrer || document.referrer;
		j = j.toLowerCase();
		if (!j) {
			k = 1;
		} else {
			l = j.indexOf('?') > -1 ? j.indexOf('?') : j.length;
			m = j.substring(0, l);
			n = s2.split(j, '/');
			o = n[2].toLowerCase();
			p = s2.linkInternalFilters.toLowerCase();
			p = s2.split(p, ',');
			for (q = 0; q < p.length; q++) {
				r = o.indexOf(p[q]) == -1 ? '' : j;
				if (r) {
					break;
				}
			}
		}
		if (!r && !k) {
			t = j;
			u = v = o;
			w = 'Other Natural Referrers';
			x = s2.seList + '>' + s2._extraSearchEngines; //ABU Find replacement
			if (d == 1) {
				m = s2.repl(m, 'oogle', '%');
				m = s2.repl(m, 'ahoo', '^');
				j = s2.repl(j, 'as_q', '*');
			}
			y = s2.split(x, '>');
			for (z = 0; z < y.length; z++) {
				A = y[z];
				A = s2.split(A, '|');
				B = s2.split(A[0], ',');
				for (C = 0; C < B.length; C++) {
					D = m.indexOf(B[C]);
					if (D > -1) {
						if (A[2]) {
							E = v = A[2];
						} else {
							E = o;
						}
						if (d == 1) {
							E = s2.repl(E, '#', ' - ');
							j = s2.repl(j, '*', 'as_q');
							E = s2.repl(E, '^', 'ahoo');
							E = s2.repl(E, '%', 'oogle');
						}
						F = s2.split(A[1], ',');
						for (G = 0; G < F.length; G++) {
							if (j.indexOf(F[G] + '=') > -1 || j.indexOf('https://www.google.') == 0) {
								H = 1;
							}
							I = s2.getQueryParam(F[G], '', j).toLowerCase();
							if (H || I) {
								break;
							}
						}
					}
					if (H || I) {
						break;
					}
				}
				if (H || I) {
					break;
				}
			}
		}
		if (!r || g != '1') {
			r = s2.getQueryParam(a, b, s2.w_getLoc().href);
			if (r) {
				v = r;
				if (E) {
					w = 'Paid Search';
				} else {
					w = 'Unknown Paid Channel';
				}
			}
			if (!r && E) {
				v = E;
				w = 'Natural Search';
			}
		}
		if (k == 1 && !r && i == 1) {
			t = u = v = w = 'Typed/Bookmarked';
		}
		J = s2._channelDomain;
		if (J && o) {
			K = s2.split(J, '>');
			for (L = 0; L < K.length; L++) {
				M = s2.split(K[L], '|');
				N = s2.split(M[1], ',');
				O = N.length;
				for (P = 0; P < O; P++) {
					Q = N[P].toLowerCase();
					R = o.indexOf(Q);
					if (R > -1) {
						w = M[0];
						break;
					}
				}
				if (R > -1) {
					break;
				}
			}
		}
		J = s2._channelParameter;
		if (J) {
			K = s2.split(J, '>');
			for (L = 0; L < K.length; L++) {
				M = s2.split(K[L], '|');
				N = s2.split(M[1], ',');
				O = N.length;
				for (P = 0; P < O; P++) {
					R = s2.getQueryParam(N[P], '', s2.w_getLoc().href);
					if (R) {
						w = M[0];
						break;
					}
				}
				if (R) {
					break;
				}
			}
		}
		J = s2._channelPattern;
		if (J) {
			K = s2.split(J, '>');
			for (L = 0; L < K.length; L++) {
				M = s2.split(K[L], '|');
				N = s2.split(M[1], ',');
				O = N.length;
				for (P = 0; P < O; P++) {
					Q = N[P].toLowerCase();
					R = r.toLowerCase();
					S = R.indexOf(Q);
					if (S == 0) {
						w = M[0];
						break;
					}
				}
				if (S == 0) {
					break;
				}
			}
		}
		S = w ? r + u + w + I : '';
		c = c || 'c_m';
		if (c != '0') {
			S = s2.getValOnce(S, c, 0);
		}
		if (S) {
			s2._campaignID = r || 'n/a';
			s2._referrer = t || 'n/a';
			s2._referringDomain = u || 'n/a';
			s2._campaign = v || 'n/a';
			s2._channel = w || 'n/a';
			s2._partner = E || 'n/a';
			s2._keywords = H ? I || 'Keyword Unavailable' : 'n/a';
			if (f && w != 'Typed/Bookmarked') {
				h.setTime(h.getTime() + f * 86400000);
				s2.Util.cookieWrite('s_tbm' + f, 1, h);
			}
		}
	};

	/*
	s.getTimeToComplete = function (v, cn, e) {
	var s = this,d = new Date(),x = d,k;
	if(!s.c_r){s=window.s;} // added alternate for when called outside of this scope
	if (!s[cn] || v == 'stop') {e = e || 0;if (v == 'start' || v == 'stop') {s[cn] = 1;}x.setTime(x.getTime() + e * 86400000);if (v == 'start') {s.c_w(cn, d.getTime(), e ? x : 0);return '';}if (v == 'stop') {k = s.c_r(cn);if (!s.c_w(cn, '', d) || !k) {return '';}v = (d.getTime() - k) / 1000;var td = 86400,th = 3600,tm = 60,r = 5,u, un;if (v > td) {u = td;un = 'days';} else {if (v > th) {u = th;un = 'hours';} else {if (v > tm) {r = 2;u = tm;un = 'minutes';} else {r = 0.2;u = 1;un = 'seconds';}}}v = v * r / u;return (Math.round(v) / r) + ' ' + un;}}return '';
	};
	 */

	/*
	 * Plugin: getTimeToComplete 0.5a Westpac - modified so it actually works... return the time from start to stop. runs once per cookie
	 */
	s2.getTimeToComplete = function (v, cn, e) {
		var s2 = this,
		d = new Date(),
		x = d,
		k,
		td = 86400,
		th = 3600,
		tm = 60,
		r = 5,
		u,
		un;
		if (!s2.Util) {
			s2 = window.s2; // added alternate for when called outside of this scope
		}
		if (!s2['getTime_' + cn] || v == 'stop') {
			e = e || 0;
			if (v == 'start' || v == 'stop') {
				s2['getTime_' + cn] = 1;
			}
			x.setTime(x.getTime() + e * 86400000);
			if (v == 'start') {
				//console.log('start...');
				s2.Util.cookieWrite(cn, d.getTime(), e ? x : 0);
				return '';
			}
			if (v == 'stop') {
				//console.log('stop...');
				k = s2.Util.cookieWrite(cn);
				//console.log('c_w = '+s.c_w(cn, '', d));
				//console.log('c_w = '+s.c_w(cn, '', new Date));
				if (!s2.Util.cookieWrite(cn, '', new Date()) || !k) {
					return '';
				}
				v = (d.getTime() - k) / 1000;
				if (v > td) {
					u = td;
					un = 'days';
				} else {
					if (v > th) {
						u = th;
						un = 'hrs';
					} else {
						if (v > tm) {
							r = 2;
							u = tm;
							un = 'mins';
						} else {
							r = 0.2;
							u = 1;
							un = 'secs';
						}
					}
				}
				v = v * r / u;
				//console.log('time = '+(Math.round(v) / r) + ' ' + un);
				return (Math.round(v) / r) + ' ' + un;
			}
		}
		return '';
	};

	/* Top 130 Search Engines - Grouped */
	s2.seList = 'google.,googlesyndication.com|q,as_q|Google>yahoo.com,yahoo.co.jp|p,va|Yahoo!>bing.com|q|Bing>altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search';

	/*
	 * Plugin Utility: apl v1.1 - append item to list
	 */
	s2.apl = function (l, v, d, u) {
		var s2 = this,
		m = 0,
		i,
		n,
		a;
		if (!l) {
			l = '';
		}
		if (u) {
			a = s2.split(l, d);
			for (i = 0; i < a.length; i++) {
				n = a[i];
				m = m || (u == 1 ? n == v : n.toLowerCase() == v.toLowerCase());
			}
		}
		if (!m) {
			l = l ? l + d + v : v;
		}
		return l;
	};

 
	/*
	 * Plug-in: crossVisitParticipation v1.7
	 */
	s2.crossVisitParticipation = function (v, cn, ex, ct, dl, ev, dv) {
		var s = this,
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
		if (!s2.Util) {
			s = window.s2; // added alternate for when called outside of this scope
		}
		if (typeof dv === 'undefined') {
			dv = 0;
		}
		if (s.events && ev) {
			ay = s.split(ev, ',');
			ea = s.split(s.events, ',');
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
				s2.Util.cookieWrite(cn, '');
			}
			return '';
		}
		v = escape(v);
		c = s2.Util.cookieWrite(cn);
		g = 0;
		if (c && c != '') {
			arry = s.split(c, '],[');
			for (q = 0; q < arry.length; q++) {
				z = arry[q];
				z = s.repl(z, '[', '');
				z = s.repl(z, ']', '');
				z = s.repl(z, '\'', '');
				arry[q] = s.split(z, ',');
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
		data = s.join(a, {
				delim : ',',
				front : '[',
				back : ']',
				wrap : '\''
			});
		s.c_w(cn, data, e);
		r = s.join(h, {
				delim : dl
			});
		if (ce) {
			s.c_w(cn, '');
		}
		return r;
	};

	/*
	 * Plugin: Days since last Visit 2.0 - capture time from last visit
	 */
	s2.getDaysSinceLastVisit = function (c, td) {
		var s2 = this,
		e = new Date(),
		es = new Date(),
		cval,
		cval_s,
		cval_ss,
		ct = e.getTime(),
		day = 24 * 60 * 60 * 1000,
		f0,
		f1,
		f2,
		f3,
		f4,
		f5,
		d,
		dsl;
		e.setTime(ct + 3 * 365 * day);
		es.setTime(ct + 30 * 60 * 1000);
		f0 = 'Cookies Not Supported';
		f1 = 'First Visit';
		f2 = 'More than 30 days';
		f3 = 'More than 7 days';
		f4 = 'Less than 7 days';
		f5 = 'Less than 1 day';
		cval = s2.Util.cookieRead(c);
		if (cval.length == 0) {
			s2.Util.cookieWrite(c, ct, e);
			s2.Util.cookieWrite(c + '_s', f1, es);
		} else {
			d = ct - cval;
			dsl = Math.floor(d / day);
			if (d > 30 * 60 * 1000) {
				if (d > 30 * day) {
					s2.Util.cookieWrite(c, ct, e);
					s2.Util.cookieWrite(c + '_s', f2 + '|' + dsl, es);
				} else {
					if (d < 30 * day + 1 && d > 7 * day) {
						s2.Util.cookieWrite(c, ct, e);
						s2.Util.cookieWrite(c + '_s', f3 + '|' + dsl, es);
					} else {
						if (d < 7 * day + 1 && d > day) {
							s2.Util.cookieWrite(c, ct, e);
							s2.Util.cookieWrite(c + '_s', f4 + '|' + dsl, es);
						} else {
							if (d < day + 1) {
								s2.Util.cookieWrite(c, ct, e);
								s2.Util.cookieWrite(c + '_s', f5 + '|' + dsl, es);
							}
						}
					}
				}
			} else {
				s2.Util.cookieWrite(c, ct, e);
				cval_ss = s2.Util.cookieRead(c + '_s');
				s2.Util.cookieWrite(c + '_s', cval_ss, es);
			}
		}
		cval_s = s2.Util.cookieRead(c + '_s');
		cval_s = cval_s.split('|');
		/*
		if (cval_s.length == 0) {
		return f0;
		} else {
		if (cval_s[0] != f1 && cval_s[0] != f2 && cval_s[0] != f3 && cval_s[0] != f4 && cval_s[0] != f5) {
		return '';
		} else {
		if (td && cval_s.length > 1) {
		return cval_s[1];
		} else {
		return cval_s[0];
		}
		}
		}
		 */
		// removed unnecessary else after each return
		if (cval_s.length == 0) {
			return f0;
		}
		if (cval_s[0] != f1 && cval_s[0] != f2 && cval_s[0] != f3 && cval_s[0] != f4 && cval_s[0] != f5) {
			return '';
		}
		if (td && cval_s.length > 1) {
			return cval_s[1];
		}
		return cval_s[0];
	};

	/*
	 * Plugin: getPageName v2.1 - parse URL and return
	 */
	s2.getPageName = function (u) {
		var s2 = this,
		v = u || String(s2.w.location),
		x = v.indexOf(':'),
		y = v.indexOf('/', x + 4),
		z = v.indexOf('?'),
		c = s2.pathConcatDelim,
		e = s2.pathExcludeDelim,
		g = s2.queryVarsList,
		d = s2.siteID,
		n = d || '',
		q = z < 0 ? '' : v.substring(z + 1),
		p = v.substring(y + 1, q ? z : v.length);
		z = p.indexOf('#');
		p = z < 0 ? p : s2.fl(p, z);
		x = e ? p.indexOf(e) : -1;
		p = x < 0 ? p : s2.fl(p, x);
		p += !p || p.charAt(p.length - 1) == '/' ? s2.defaultPage : '';
		y = c || '/';
		while (p) {
			x = p.indexOf('/');
			x = x < 0 ? p.length : x;
			z = s2.fl(p, x);
			if (!s2.pt(s2.pathExcludeList, ',', 'p_c', z)) {
				n += n ? y + z : z;
			}
			p = p.substring(x + 1);
		}
		y = c || '?';
		while (g) {
			x = g.indexOf(',');
			x = x < 0 ? g.length : x;
			z = s2.fl(g, x);
			z = s2.pt(q, '&', 'p_c', z);
			if (z) {
				n += n ? y + z : z;
				y = c || '&';
			}
			g = g.substring(x + 1);
		}
		return n;
	};
	
	/*
	 * Plugin: getQueryParam - WBC version to find parameters in mobile SPA fragment
	 */

	// Usage = s.getQueryParam(parameter(s), delimiter (if multiple params), url, search from hash onward only (1));

	// Sample =
	// s.getQueryParam('b', '', 'https://uat.banking.westpac.com.au/wbc/banking/handler?a=a1&a=a2&b=b&c=cc&s-vid=dev-2c9e8f5a01fe804b840942f0d43752830daf');
    //ABU fix if required  loc = String(url === 'f' ? s.gtfs().location : url || (s.w_getLoc().href || (s.pageURL || s.wd.location))),
	s2.getQueryParam = function (parameters, delimiter, url, startFromHash) {
		var s = this,
		params = parameters.split(','),
		delim = delimiter || '',
		loc = String(url === 'f' ? s.gtfs().location : url || (s.w_getLoc().href || (s.pageURL || s.wd.location))), // 'f' from original function - used in case of frames?
		lp = 0,
		len = params.length,
		rgx,
		rgxStart = startFromHash === 1 ? '#(?:.*?&)?' : '(?:\\?|&|;|#)',
		val,
		values = [];

		if (!s2.Util) {
			s2 = window.s2; // added alternate for when called outside of this scope
		}

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


      
	

	/*
	 * Plugin: getValOnce_v1.1
	 */
	s2.getValOnce = function (v, c, e, t) {
		// value, cookie, time amount, time type (mins/days)
		var s2 = this,
		a = new Date(),
		vv = v || '',
		cc = c || 's_gvo',
		ee = e || 0,
		i = t == 'm' ? 60000 : 86400000,
		k;
		if (!s2.Util) {
			s2 = window.s2; // added alternate for when called outside of this scope
		}
		k = s2.Util.cookieRead(c);
		if (vv) {
			a.setTime(a.getTime() + ee * i);
			s2.Util.cookieWrite(cc, vv, ee == 0 ? 0 : a);
		}
		return vv == k ? '' : vv;
	};
		


	/*
 * Plugin: getVisitNum - version 3.0
 */
	s2.getVisitNum = function (tp, c, c2) {
		var s2 = this,
		e = new Date(),
		cval,
		cvisit,
		ct = e.getTime(),
		d,
		eo,
		y,
		i,
		str,
		k;
		if (!tp) {
			tp = 'm';
		}
		if (tp == 'm' || tp == 'w' || tp == 'd') {
			eo = s2.endof(tp);
			y = eo.getTime();
			e.setTime(y);
		} else {
			d = tp * 86400000;
			e.setTime(ct + d);
		}
		if (!c) {
			c = 's_vnum';
		}
		if (!c2) {
			c2 = 's_invisit';
		}
		cval = s2.Util.cookieRead(c);
		if (cval) {
			i = cval.indexOf('&vn=');
			str = cval.substring(i + 4, cval.length);
		}
		cvisit = s2.Util.cookieRead(c2);
		if (cvisit) {
			if (str) {
				e.setTime(ct + 1800000);
				s2.Util.cookieWrite(c2, 'true', e);
				return str;
			}
			return 'unknown visit number';
		}
		if (str) {
			str++;
			k = cval.substring(0, i);
			e.setTime(k);
			s2.Util.cookieWrite(c, k + '&vn=' + str, e);
			e.setTime(ct + 1800000);
			s2.Util.cookieWrite(c2, 'true', e);
			return str;
		}
		s2.Util.cookieWrite(c, e.getTime() + '&vn=1', e);
		e.setTime(ct + 1800000);
		s2.Util.cookieWrite(c2, 'true', e);
		return 1;
	};
	s2.dimo = function (m, y) {
		var d = new Date(y, m + 1, 0);
		return d.getDate();
	};
	s2.endof = function (x) {
		var t = new Date(),
		d;
		t.setHours(0);
		t.setMinutes(0);
		t.setSeconds(0);
		if (x == 'm') {
			d = s2.dimo(t.getMonth(), t.getFullYear()) - t.getDate() + 1;
		} else if (x == 'w') {
			d = 7 - t.getDay();
		} else {
			d = 1;
		}
		t.setDate(t.getDate() + d);
		return t;
	};

	/*
	 * s.join: 1.0 - Joins an array into a string
	 */
	s2.join = function (v, p) {
		var s2 = this,
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
				str += s2.join(v[x], p);
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
	 * Utility Function: p_c
	 */
	s2.p_c = function (v, c) {
		var x = v.indexOf('=');
		return c.toLowerCase() == v.substring(0, x < 0 ? v.length : x).toLowerCase() ? v : 0;
	};

	// JS 1.1 split
	s2.split = function (l, d) {
		return l ? l.split(d) : [];
	};


	/****************************** MODULES *****************************/

	// copy and paste implementation modules (Media, Integrate) here
	// AppMeasurement_Module_Media.js - Media Module, included in AppMeasurement zip
	// AppMeasurement_Module_Integrate.js - Integrate Module, included in AppMeasurement zip
		
		
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

	AppMeasurement for JavaScript version: 1.6.4
	Copyright 1996-2016 Adobe, Inc. All Rights Reserved
	More info available at http://www.adobe.com/marketing-cloud.html
	*/
	function AppMeasurement(){var a=this;a.version="1.6.4";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var q=k.AppMeasurement.Jb;q||(q=null);var r=k,n,t;try{for(n=r.parent,t=r.location;n&&n.location&&t&&""+n.location!=""+t&&r.location&&""+n.location!=""+r.location&&n.location.host==t.host;)r=n,n=r.parent}catch(u){}a.yb=function(a){try{console.log(a)}catch(b){}};a.Ha=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
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
	function s2_gi(a){var k,q=window.s_c_il,r,n,t=a.split(","),u,s,x=0;if(q)for(r=0;!x&&r<q.length;){k=q[r];if("s_c"==k._c&&(k.account||k.oun))if(k.account&&k.account==a)x=1;else for(n=k.account?k.account:k.oun,n=k.allAccounts?k.allAccounts:n.split(","),u=0;u<t.length;u++)for(s=0;s<n.length;s++)t[u]==n[s]&&(x=1);r++}x||(k=new AppMeasurement);k.setAccount?k.setAccount(a):k.sa&&k.sa(a);return k}AppMeasurement.getInstance=s2_gi;window.s_objectID||(window.s_objectID=0);
	function s_pgicq(){var a=window,k=a.s_giq,q,r,n;if(k)for(q=0;q<k.length;q++)r=k[q],n=s2_gi(r.oun),n.setAccount(r.un),n.setTagContainer(r.tagContainerName);a.s_giq=0}s_pgicq();

	/* ABU 
	s2.contextData = pd;
	s2.t();
	s2.w_log(s2.pageName);
	s2.w_log(unescape(JSON.stringify(pd, null, 4).replace(/\\u([\w\d]{4})/g, '%u$1')));
	s2.w_endTrckng(); */
