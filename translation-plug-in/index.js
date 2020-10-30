

(() => {
    const bts = document.getElementById("Translate");
    bts.onclick = function () {

        var appid = '20201028000600641';
        var key = 'JwYo4o_VG7VOVecapszh';
        var salt = (new Date).getTime();
        var from = 'auto';
        var to = document.getElementById("language").value;



        var q = document.getElementById("query").value;

        var str1 = appid + q + salt + key;
        var sign = MD5(str1);

        $.ajax({
            url: 'https://api.fanyi.baidu.com/api/trans/vip/translate',
            type: 'get',
            dataType: 'jsonp',
            data: {
                q: q,
                appid: appid,
                salt: salt,
                from: from,
                to: to,
                sign: sign
            },
            success: function (data) {
                console.log(data);
                document.getElementById("trans_result").innerText = data.trans_result[0].dst;
            }
        });


    }

})();
chrome.storage.local.get(['iframe'], function (object) {
    const input1 = document.getElementById("query");
    input1.value = object.iframe;
})

$.getJSON("language.json", function (data) {
    const mySelect = document.getElementById("language");
    //num 是插入选项在选项数组位置，为null时添加到选项数组的末尾
    const addOption = function (select, text, value, num) {
        select.add(new Option(text, value),num);
    }
    $.each(data, function (infoIndex, info) {
        console.log(info["key"]);
        addOption(mySelect, info["key"], info["value"], null);
    })
    


})
