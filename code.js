window.wordle.instant_word = function() {

let WordOfTheDay = JSON.parse(localStorage['nyt-wordle-state']).solution;

window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(0)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(1)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(2)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(3)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(4)
})); 
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': 'Enter'
}));

}
