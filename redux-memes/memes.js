

window.onload = function() {
    const photo = document.querySelector("#photo");
    const top = document.querySelector("#top");
    const bottom = document.querySelector("#bottom");
    const addButton = document.querySelector(".addMeme");
    const memeBoard = document.querySelector(".meme-board");
    console.log(store);
    
    addButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(e.target);
        memeBoard.innerHTML = "";
        let _photo_url = photo.value;
        let _top = top.value;
        let _bottom = bottom.value;
          store.dispatch({ type: "ADD", payload : {photo_url : _photo_url, top : _top, bottom : _bottom} });
          const currentMemes = store.getState().memes;
          renderMemes(currentMemes,memeBoard);
    });

    memeBoard.addEventListener("click", function(e) {
        e.preventDefault();
        if(e.target.classList.contains("delete")){
            let position = parseInt(e.target.parentNode.dataset.key);
            store.dispatch({ type : "DELETE", payload : {position : position}});
            const currentMemes = store.getState().memes;
            memeBoard.innerHTML = "";
            renderMemes(currentMemes,memeBoard);
        }
    })
  
  }

  function memeHTML(meme, key){
      const html = `
      <div class="meme" data-key="${key}" style="background-image:url(${meme.photo_url})">
      <span class="delete">X</span>
      <span class="meme-top"> ${meme.top} </span>
      <span class="meme-bottom"> ${meme.bottom} </span>
      </div>
      `;
      return html;
  }

  function renderMemes( memes, board ) {
    for(let i = 0; i < memes.length; i++){
        board.innerHTML += memeHTML(memes[i], i);
    }
  }