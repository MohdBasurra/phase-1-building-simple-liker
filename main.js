// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.like span').forEach(item => {
    item.addEventListener('click', event => {
      mimicServerCall().then(() => {
        event.target.classList.toggle('activated-heart');
        if(event.target.textContent === `${EMPTY_HEART}`)
        // event.target.className === "like-glyph activated-heart"
          event.target.innerHTML = FULL_HEART;
        else
          event.target.innerHTML = EMPTY_HEART;
      }).catch(error => {
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
        const modal_msg = document.getElementById('modal-message');
        modal_msg.innerHTML = `${error}`;
        setTimeout(()=>{
          modal.classList.add('hidden');
        }, 3000)
      })
    }); 
  });
});




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