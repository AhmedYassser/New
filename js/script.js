var ADDQ = document.getElementById("addQ");

var quotess = [
  '“Be yourself; everyone else is already taken.”― Oscar Wilde',
  'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst then you sure as hell do not deserve me at my best.― Marilyn Monroe',
  'Two things are infinite: the universe and human stupidity and Im not sure about the universe.― Albert Einstein',
  '“So many books, so little time.”― Frank Zappa',
  '“A room without books is like a body without a soul.”― Marcus Tullius Cicero',
  '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”― Bernard M. Baruch',
  '“Youve gotta dance like theres nobody watching,Love like you will never be hurt,Sing like there is nobody listening,And live like it is heaven on earth.”― William W. Purkey',
  '“You only live once, but if you do it right, once is enough.”― Mae West',
  '“Be the change that you wish to see in the world.”― Mahatma Gandhi',
];

if ((localStorage.getItem("quote")) != null) {
   
    quotess= JSON.parse(localStorage.getItem("quote")) 
}

function addquote() {

  var random_quote = Math.floor(Math.random() * (quotess.length)); // random number .
  document.getElementById('quotes').innerHTML = quotess[random_quote]; // quote number in my array .

}

function AddYourquote() {

  quotess.push(ADDQ.value);
  localStorage.setItem("quote", JSON.stringify(quotess));
  console.log(quotess);
  clear();
}

function clear() {

  ADDQ.value = "";
}