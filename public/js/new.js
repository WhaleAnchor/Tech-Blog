// POST request function for making a new post
const newPost = async (event) => {
  event.preventDefault();
  try {
    const postTitle = document.querySelector('#postTitle').value;
    const postContent = document.querySelector('#postBody').value;
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        postTitle,
        postContent,
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response)
    if (response.ok) {
      alert("Successfully made a new post!");
      document.location.replace('/dashboard');
    } else {
      alert ("Something went wrong.")
    }
  } catch (error) {
    console.log(error)
  };
 
};

document.querySelector('#new-post-form').addEventListener('submit', newPost);