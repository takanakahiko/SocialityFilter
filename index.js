document.getElementById('button').addEventListener('click',function(){
    document.getElementById('button').value="読み込み中...";
    var text = document.getElementById("text").value;
    requestJsonP(text);
});

function requestJsonP(text) {
    var requestUrl = "https:/socialityfilter.takanakahiko.me/?text=" + text + "&callback=cb";
    var s = document.createElement('script');
    s.charset = 'utf-8';
    s.type = "text/javascript";
    s.src = requestUrl;
    document.body.appendChild(s);
}

function cb(json){
    var url = "https://twitter.com/share?text="+ json.response +"&hashtags=社会性ツイートボタン&url=http://jsrun.it/Nakahiko/Ms9H"; // 通常の遷移
    try{
        //window.open(url, '_blank');
        window.location = url;
    }catch(e){
        window.location = url;
    }
}