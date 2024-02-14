console.clear();

const body=document.querySelector('body');

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
  const newPost=document.createElement('article');
  newPost.classList.add('post');
  body.appendChild(newPost);

  const newPostContent=document.createElement('p');
  newPostContent.classList.add('post__content');
  newPostContent.textContent='Ich bin ein weiterer Post, bitte ein Like da lassen :)'
  newPost.appendChild(newPostContent);

  const newFooter=document.createElement('footer');
  newFooter.classList.add('post__footer');
  newPost.appendChild(newFooter);

  const newPostUsername=document.createElement('span');
  newPostUsername.classList.add('post__username');
  newPostUsername.textContent='@new_username'
  newFooter.appendChild(newPostUsername);
  
  const newLikeButton=document.createElement('button');
  newLikeButton.classList.add('post__button');
  newLikeButton.attributes.type='button';
  newLikeButton.textContent='♥ Like';
  newFooter.appendChild(newLikeButton);
  newLikeButton.addEventListener("click", handleLikeButtonClick);
