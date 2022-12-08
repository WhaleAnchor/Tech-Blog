// DOM var 
const postId = document.querySelector('#postId').value;

// POST request function to edit a posts' title and content
const editFormHandler = async (event) => {
  event.preventDefault();
  
  // DOM var
  const postTitle = document.querySelector('#postTitle').value;
  const postContent = document.querySelector('#postBody').value;

  const response = await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {'Content-Type': 'application/json' }
  });

  if (response.ok) {
    alert("Post updated!");
    document.location.replace('/dashboard');
  } else {
    alert("Something went wrong. Can't edit post.");
  }
  document.location.replace('/dashboard');
};

// DELETE request function to delete a post.
const deleteHandler = async () => {
  const response = await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    alert("Message deleted.");
    document.location.replace('/dashboard');
  } else {
    alert('Something went wrong.');
  }
};

document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteHandler);
