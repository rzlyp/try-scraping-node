var Xray = require('x-ray');
const osmosis = require('osmosis');
var google = require('google');
var ig = require('instagram-tagscrape');

var x = Xray();

function Scraping(){
	this.yahuu = (req, res, next)=>{
		// x("https://news.ycombinator.com/", {
		//     title: ["tr.athing"],
		//     link : ["a.storylink@href"],
		//     comments: ["tr.athing + tr"]
		// })(function (err, obj) {
		   
		//     var result = obj.comments.map(function (elm, index) {
		//         var match = elm.match(/(\d+) comments?/);
		//         return {
		//             title: obj.title[index],
		//             link: obj.link[index]
		//         };
		//     });
		//     res.json(result);
		// });

 
		
		google.resultsPerPage = 25
		var nextCounter = 0

		google('UNIKOM', function (err, response){
		  if (err) console.error(err)

		  // for (var i = 0; i < response.links.length; ++i) {
		  //   var link = response.links[i];
		  //   console.log(link.title + ' - ' + link.href)
		  //   console.log(link.description + "\n")
		  // }

		  // if (nextCounter < 4) {
		  //   nextCounter += 1
		  //   if (res.next) res.next()
		  // }
		  res.json(response.links);
		})
	}	
	this.getIg = (req, res, next) =>{
		ig.scrapeTagPage('unikom').then(function(result){
		    res.json(result);
		})
	}
}

module.exports = new Scraping();
