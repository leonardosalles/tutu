var fields = null,
    count = 1,
    randoms = [],
    randomsBg = [],
    prefix = 'https://scontent-atl3-1.cdninstagram.com/',
    bgs = [
        {url: 't51.2885-15/e35/11848870_994628747298879_97269782_n.jpg?ig_cache_key=MTIwMTU5MTYyMjc2MDExNDYxOA%3D%3D.2'},
        {url: 't51.2885-15/e35/12751519_983584308345828_220372398_n.jpg?ig_cache_key=MTE5NTc0NTQ5MjU4MzI5NTIyMg%3D%3D.2'},
        {url: 't51.2885-15/e35/12534558_1745628825658356_2103269036_n.jpg?ig_cache_key=MTE3OTkyNzUzMDc3NzU4NjUyMQ%3D%3D.2', style: 'background-position: center -205px'},
        {url: 't51.2885-15/e35/12750372_943917942360296_1563582640_n.jpg?ig_cache_key=MTE5MTMyODU2NzY2OTI3MTQ0MA%3D%3D.2', style: 'background-position: center -171px'},
        {url: 't51.2885-15/e35/12547665_816787578467538_475197688_n.jpg?ig_cache_key=MTE3Nzg0MzMxODQ5MDYzODY2OA%3D%3D.2', style: 'background-position: center -171px'},
        {url: 't51.2885-15/s750x750/sh0.08/e35/12446013_561776823999235_858563241_n.jpg?ig_cache_key=MTE1ODMwMjE5MjIwMTA4MzE4MQ%3D%3D.2', style: 'background-position: center -111px'},
        {url: 't51.2885-15/e35/12331463_146838889013946_1919484155_n.jpg?ig_cache_key=MTEzNzc3NjA0NDA2OTMzMzEwNw%3D%3D.2', style: 'background-position: center -200px'},
        {url: 't51.2885-15/e35/11925723_814441315343967_1309267185_n.jpg?ig_cache_key=MTA4NTg2OTQyNDQxNDc5NjM2OQ%3D%3D.2', style: 'background-position: center -80px'},
        {url: 't51.2885-15/e35/11821772_546844075471582_1934526757_n.jpg?ig_cache_key=MTA3NTcyMDQ2NzI5NDQzMTk1Mg%3D%3D.2', style: 'background-position: center -400px'},
        {url: 't51.2885-15/e35/11282199_1626384577600959_353918449_n.jpg?ig_cache_key=MTA0MzA4NDQwMjMyMjgxMTI2OA%3D%3D.2', style: 'background-position: center -130px'},
        {url: 't51.2885-15/e35/11421961_921110681288011_714459576_n.jpg?ig_cache_key=MTA0MTUyMTkwMDIzMzQwMzE5OQ%3D%3D.2', style: 'background-position: center -190px'},
        {url: 't51.2885-15/e35/11356738_1436300676697924_247232843_n.jpg?ig_cache_key=MTAzNDIzNzIwMjY1NDI3NjEyNQ%3D%3D.2', style: 'background-position: center -190px;bacgkround-size: contain;'},
        {url: 't51.2885-15/e15/11417401_995655620466989_230718073_n.jpg?ig_cache_key=MTAwMzAxMjkwMTY2MjA3NTQ2Nw%3D%3D.2', style: 'background-position: center -190px'},
        {url: 't51.2885-15/e15/11326816_919885188068950_81017398_n.jpg?ig_cache_key=OTk4ODY3ODA3MTc0MzcyMDYy.2'},
        {url: 't51.2885-15/e15/1391215_1125609267454414_2004086177_n.jpg?ig_cache_key=OTg2OTM0NTQwMTU4MzQ3Nzk1.2'},
        {url: 't51.2885-15/e15/11256286_1426739680968279_807293611_n.jpg?ig_cache_key=OTc5OTk0ODk1MjY4OTQ4MDg1.2'},
        {url: 't51.2885-15/e15/11123896_1424193161217284_1670120515_n.jpg?ig_cache_key=OTYzMjg1MDY4NDcxODM5NTIw.2'},
        {url: 't51.2885-15/e15/11092993_786696368083295_390778183_n.jpg?ig_cache_key=OTYyMjc3Mjk4NDUyODAyNTQx.2'},
        {url: 't51.2885-15/e15/10979617_929299750434152_101492164_n.jpg?ig_cache_key=OTMwNTIyNjIxOTgxOTkzOTE0.2'},
        {url: 't51.2885-15/e15/10895089_697294260388699_2135686981_n.jpg?ig_cache_key=ODk3MjQ0MjExNzc2MzAxNDQ4.2'},
        {url: 't51.2885-15/e15/10838294_298877550308290_291932422_n.jpg?ig_cache_key=ODgxODg0NjkzODkwNTc1MTg4.2'},
        {url: 't51.2885-15/e15/10424479_1395353920687074_118999648_n.jpg?ig_cache_key=NzQ4MTUyNDg2NTA5MTI3ODEy.2'},
        {url: 't51.2885-15/e15/927947_1380468345571291_498746680_n.jpg?ig_cache_key=NzA0NjUwNDA1NTY3NzY4ODA2.2'},
        {url: 't51.2885-15/e15/10009214_431781210291500_366796738_n.jpg?ig_cache_key=NjkzMDM1NTkwNjA0Nzk0NTgw.2'},
        {url: 't51.2885-15/e35/12599304_962604513786704_603559002_n.jpg?ig_cache_key=MTIxNzQ2NzY1NjAxODc3NjI0NQ%3D%3D.2', style: 'background-position: center -130px;'},
        {url: 't51.2885-15/e35/12797799_482353055287302_877847743_n.jpg?ig_cache_key=MTE5NTI2ODczODAwNjgzMTcxMA%3D%3D.2'},
        {url: 't51.2885-15/e35/10731861_920151731410491_1183376729_n.jpg?ig_cache_key=MTE1Mzc4NTY1MDAzOTE0ODg5MA%3D%3D.2', style: 'background-position: center -80px;'},
        {url: 't51.2885-15/e35/11376206_694193047381045_845652053_n.jpg?ig_cache_key=MTAzODU3MzQ2ODI2NDA5MjYxNw%3D%3D.2', style: 'background-position: center -140px;'},
        {url: 't51.2885-15/e35/11352088_872303616183856_825715794_n.jpg?ig_cache_key=MTAzNjM4ODA4MjAwNzg1NTE0NA%3D%3D.2', style: 'background-position: center -140px;'},
        {url: 't51.2885-15/e35/11374112_100636050288467_540410137_n.jpg?ig_cache_key=MTAzNjM3MDc5MzQ3MjY0MzY1Nw%3D%3D.2', style: '    background-position: center -170px;'}
    ];

function salvar (text, bg, bgStyle) {
    var items = localStorage.getItem('savedTexts'),
        arr = [];

    if (items) {
        arr = JSON.parse(items);
    }

    var date = new Date(),
        formattedDate = (date.getDay() < 9 ? '0' + date.getDay() : date.getDay()) + '/' + (date.getMonth() < 9 ? '0' + date.getMonth() : date.getMonth()) + '/' + (date.getFullYear()),
        formattedHour = (date.getHours() < 9 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 9 ? '0' + date.getSeconds() : date.getSeconds());

    arr.push({id: arr.length || 0, text: text, bg: bg, date: formattedDate + ' - ' + formattedHour, bgStyle: bgStyle});
    localStorage.setItem('savedTexts', JSON.stringify(arr));

    var dialogSaved = document.querySelector('#dialog-saved');
    if (! dialogSaved.showModal) {
        dialogPolyfill.registerDialog(dialogSaved);
    }

    dialogSaved.showModal();
}

function generateRandom () {
    var random = Math.floor(Math.random() * 6);

    while (randoms.indexOf(random) > -1) {
        random = Math.floor(Math.random() * 6);
    }

    return random;
}

function generateRandomBg () {
    var random = Math.floor(Math.random() * 31);

    while (randomsBg.indexOf(random) > -1) {
        random = Math.floor(Math.random() * 31);
    }

    return random;
}

function generate () {
    var dialog = document.querySelector('#dialog-length');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    if (!fields) {
        dialog.showModal();
        return;
    }

    if (fields && fields.length < 5) {
        dialog.showModal();
        return;
    }

    if (count >= 4) {
        var dialogResults = document.querySelector('#dialog-results');
        if (! dialogResults.showModal) {
            dialogPolyfill.registerDialog(dialogResults);
        }
        dialogResults.showModal();
        return;
    }

    var wishList = [];

    if (fields.length < 6) {
        fields = document.querySelectorAll('.mdl-textfield');
    }

    for (var i=0,n=fields.length; i<n; i++) {
        wishList.push(fields[i].querySelector('input').value);
    }

    for (var j=0,k=wishList.length; j<k; j++) {
        var item = wishList[j];

        if (!item) {
            var dialogInput = document.querySelector('#dialog-input');
            if (! dialogInput.showModal) {
                dialogPolyfill.registerDialog(dialogInput);
            }
            dialogInput.showModal();
            return;
        }
    }

    var layout = document.querySelector('.mdl-layout__content');
    layout.scrollTop = 0;

    var results = document.querySelector('.results');

    var tpls = [
        'Pimero',
        'Segudu',
        'Teceru'
    ];

    var ramdomBg = generateRandomBg();
    var ramdom = generateRandom();

    var obj = {text: wishList[ramdom], bg: prefix + bgs[ramdomBg].url, style: bgs[ramdomBg].style || ''};

    var tplCard = '<div class="demo-card-wide mdl-card mdl-shadow--2dp">'+
                    '<div class="mdl-card__title" style="background-image: url(' + prefix + obj.bg + ');' + (obj.style || '') +'">'+
               '     <h2 class="mdl-card__title-text">' + tpls[count - 1] + '</h2>'+
                '</div>'+
                '<div class="mdl-card__supporting-text">' + obj.text + '</div>'+
                '<div class="mdl-card__actions mdl-card--border">'+
               '     <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="salvar(\'' + obj.text + '\', \'' + obj.bg + + '\', \'' + obj.style + '\')">'+
               '         Salvar'+
               '     </a>'+
               ' </div>'+
               ' <div class="mdl-card__menu">'+
               '     <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">'+
               '         <i class="material-icons">favorite</i>'+
               '     </button>'+
              '  </div>'+
            '</div>';

    results.insertAdjacentHTML('afterBegin', tplCard);

    var buttonDescobir = document.querySelector('#cal');

    if (tpls[count]) {
        buttonDescobir.innerHTML = tpls[count];
    } else {
        buttonDescobir.parentElement.innerHTML = '<span id="cal">Poti!</span>';
    }

    randoms.push(ramdom);
    randomsBg.push(ramdomBg);
    count++;
}

function addField () {
    fields = document.querySelectorAll('.mdl-textfield');

    var wrapper = document.querySelector('.field-wrapper');
    if (wrapper) {
        var index = (fields.length + 1);

        if (index === 7) {
            var dialog = document.querySelector('dialog');

            if (! dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }

            dialog.showModal();
            return;
        }

        var div = document.createElement('div');
        div.className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label';

        var label = document.createElement('label');
        label.className = 'mdl-textfield__label';
        label.attributes.for = 'coisinha' + index;
        label.innerHTML = 'Coisinha ' + index + '...';

        var input = document.createElement('input');
        input.appendChild(label);
        input.className = 'mdl-textfield__input';
        input.attributes.type = 'text';
        input.attributes.id = 'coisinha' + index;

        div.appendChild(input);
        div.appendChild(label);

        componentHandler.upgradeElement(div);
        wrapper.appendChild(div);

        input.focus();
    }
}