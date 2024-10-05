function addPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") return;  // Ignore empty posts

    const postContainer = document.getElementById('posts');
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerText = postContent;

    postContainer.prepend(newPost);  // Add new post to the top

    document.getElementById('post-content').value = "";  // Clear input after posting
}

function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((sec) => sec.style.display = 'none');

    // Show selected section
    document.getElementById(section).style.display = 'block';
}

// Show the "Home" section by default
document.getElementById('home').style.display = 'block';
