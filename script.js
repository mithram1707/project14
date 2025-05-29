function addPost() {
  const newPost = document.getElementById("newPost").value.trim();
  const timeline = document.getElementById("timeline");

  if (newPost === "") {
    alert("Please write something before posting!");
    return;
  }

  const post = document.createElement("div");
  post.className = "post";

  const content = document.createElement("p");
  content.textContent = newPost;

  const time = document.createElement("div");
  time.className = "post-time";
  time.textContent = `Posted on ${new Date().toLocaleString()}`;

  post.appendChild(content);
  post.appendChild(time);

  timeline.prepend(post);

  document.getElementById("newPost").value = "";
}
