var quoteBookAuthorSeries = [
    ["I don’t know half of you half as well as I should like; and I like less than half of you half as well as you deserve.", "Lord of the Rings", "JRR Tolkien", ""],
    ["It is useless to meet revenge with revenge: it will heal nothing.", "Lord of the Rings", "JRR Tolkien", ""],
    ["Ender’s anger was cold, and he could use it. Bonzo’s was hot, and so it used him.", "Ender\'s Game", "Orson Scott Card", "Ender Quartet Book 1"],
    ["\'What man among you, if his son asks for bread, gives him a stone?\'", "Speaker for the Dead", "Orson Scott Card", "Ender Quartet Book 2"],
    ["\'Sickness and healing are in every heart. Death and deliverance are in every hand.\'", "Speaker for the Dead", "Orson Scott Card", "Ender Quartet Book 2"]
];

//document.getElementById("quoteJS").onload = function() {randQuote()};

/*
 * This event pulls a random quote and its associated book, author, and series from the quotes[] array
 * after the full web page has been loaded
 */
window.onload = (event) => {
    var randNum = Math.floor(Math.random() * quoteBookAuthorSeries.length);
    var quote  = quoteBookAuthorSeries[randNum][0];
    var book   = quoteBookAuthorSeries[randNum][1];
    var author = quoteBookAuthorSeries[randNum][2];
    var series = quoteBookAuthorSeries[randNum][3];
    
    console.log("<blockquote><p>"+quote+"</p><p>~ "+author+", <cite>"+book+", "+series+"</cite></p></blockquote>");
    
    var quoteElement = document.createElement('div');
    quoteElement.innerHTML = "<blockquote><p>"+quote+"</p><p>~ "+author+", <cite>"+book+", "+series+"</cite></p></blockquote>";
    document.getElementById("quoteJS").appendChild(quoteElement);
};// end randQuote()