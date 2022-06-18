// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHeart = document.querySelectorAll('.like-glyph');

for(const glyph of likeHeart){
  glyph.addEventListener('click', likeCallHeart)
};

function likeCallHeart(event){
  const heart = event.target;
  event.preventDefault();
  mimicServerCall() //Acts as fetch
  .then(function(){
    if(heart.textContent === EMPTY_HEART){
      heart.textContent = FULL_HEART;
      heart.className = 'activated-heart'
    }
    else{
      event.target.innerText = EMPTY_HEART,
      event.target.className = ` `;
    }
  })
  .catch(function(){
    const modal = document.getElementById('modal');
    modal.className = " ";
    modal.innerHTML = error;
    setTimeout(() => modal.className = 'hidden', 3000)
  });
};




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
