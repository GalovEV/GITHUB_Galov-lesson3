// Модуль request

var request = require('request'),
appId="trnsl.1.1.20160905T164303Z.27b5bad5f27ebb2d.0cbb548fca018107f6d237d0179d25b8190f77cc",
lang="ru-en",
//text="привет",

args = require('minimist')(process.argv.slice(2)),
text=args['_'][0];
if (typeof text=='undefined') 
  console.log('добавьте текст для перевода после файла');
else{
// Отправка GET-запроса

request({
  method: 'get',
  uri: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='+appId+'&lang='+lang+'&text='+text,
setEncoding:"utf8"
}, function (error, response, body) {
//  console.log(response);
  if (error)
    throw error;
	
  //console.log(body+'\n');
  body=JSON.parse(body);
  console.log(body['text']);
});

}
