// Simulated database of posts
let posts = [];

// Function to display posts on the page
function displayPosts() {
  const forumPosts = document.querySelector('.forum-posts');
  forumPosts.innerHTML = '';

  posts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="deletePost(${index})">Delete</button>
    `;
    forumPosts.appendChild(postElement);
  });
}

// Function to add a new post
function addPost(title, content) {
  posts.push({ title, content });
  displayPosts();
}

// Function to delete a post
function deletePost(index) {
  posts.splice(index, 1);
  displayPosts();
}

document.getElementById('post-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;

  if (title && content) {
    addPost(title, content);
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
  } else {
    alert('Please fill in both title and content.');
  }
});

// Initial display of posts
displayPosts();
