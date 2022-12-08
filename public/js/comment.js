

const commentFormHandler = async (event) => {
  event.preventDefault();
  const postId = document.querySelector("#postId").value;
  const commentContent = document.querySelector('#comment-input').value;
  if(commentContent) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        commentContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Something went wrong. Can't create comment.");
    }
  };
}

document.querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);
