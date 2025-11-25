document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.getElementById('likeBtn');
  const bookmarkBtn = document.getElementById('bookmarkBtn');

  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
    likeBtn.classList.toggle('fa-regular');
    likeBtn.classList.toggle('fa-solid');
  });

  bookmarkBtn.addEventListener('click', () => {
    bookmarkBtn.classList.toggle('marked');
    bookmarkBtn.classList.toggle('fa-regular');
    bookmarkBtn.classList.toggle('fa-solid');
  });
});
