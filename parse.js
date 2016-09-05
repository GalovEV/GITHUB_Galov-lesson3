// Парсинг данных внешнего ресурса, используя модуль cheerio

var request = require('request');
var cheerio = require('cheerio');

// Запрос ресурса
request('http://www.mail.ru/', function (error, response, html) {
  if (error)
    throw error;

  if ( response.statusCode !== 200 )
    return console.log('incorrect statusCode: ', response.statusCode);

  var $ = cheerio.load(html),news={};

  $('.news__list__item').each(function(i, element) {
    news[i]=($(element).text().trim());
    //console.log($(element).text().trim());
	//console.log('\n')
  });
  console.log(news);
});
