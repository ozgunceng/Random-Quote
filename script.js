/* image paths have been defined into a javascript list */
var images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
    "img/9.jpg",
    "img/10.jpg",
    "img/11.jpg",
    "img/12.jpg",
    "img/13.jpg",
    "img/14.jpg"];

/* quotes have been defined into a javascript list */

var quotes = [
    "A man who doesn't think differently from his time and environment can't grow beyond his time and environment.    (M.K. Ataturk)",
    "Be yourself; everyone else is already taken.  	 (Oscar Wilde)",
    "Be the change that you wish to see in the world. (Mahatma Gandhi)",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.			(Albert Einstein)",
    "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. 			(Bill Keane)",
    "I have not failed. I've just found 10,000 ways that won't work.			(Thomas A. Edison)",
    "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world 		 (Albert Einstein)",
    "Sometimes life hits you in the head with a brick. Don't lose faith. 		 (Steve Jobs)",
    "Great things in business are never done by one person. They're done by a team of people.		(Steve Jobs)",
    "If opportunity doesn't knock, build a door. (Milton Berle)",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.  (Jimmy Dean)",
    "No act of kindness, no matter how small, is ever wasted. (Aesop)",
    "There is nothing stronger in the world than gentleness. (Han Suyin)",
    "Ideas shape the course of history. (John Maynard Keynes)"

    ];

/* RandomQuote function defined to call quotes.  */
function randQuote(){
	/* quote length defined into size variable*/
	var size = quotes.length
	/* with math random function, a random number assigned into x variable between zero and size length */
	var x = Math.floor(size * Math.random())
	/* random quote has been sent to the html tag with ID*/
	document.getElementById('quotes').innerText=quotes[x];
}

/* RandomImage function defined to call images. Everything is same until calling randomQuote function inside of it.  */
function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
    /* Random quote function is called when a random image is loaded*/
    randQuote();
}





