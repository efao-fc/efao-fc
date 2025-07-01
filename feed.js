
function postar() {
  const author = document.getElementById("author").value;
  const file = document.getElementById("media").files[0];
  const text = document.getElementById("text").value;
  const reader = new FileReader();
  reader.onload = function () {
    const url = reader.result;
    const ext = file.type.startsWith("video") ? "video" : "img";
    const post = {
      author: author || "EFAO",
      media: url,
      text,
      ext
    };
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    render();
  };
  if (file) {
    reader.readAsDataURL(file);
  }
}
function render() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.forEach(p => {
    const div = document.createElement("div");
    div.className = "feed-post";
    div.innerHTML = `
      <div class="author">
        <img src="https://placekitten.com/40/40" alt="autor" />
        ${p.author}
      </div>
      <p>${p.text}</p>
      <div class="media">
        ${p.ext === "video" ? `<video src="${p.media}" controls width="100%"></video>` :
        `<img src="${p.media}" width="100%">`}
      </div>
      <div class="reactions">
        <button>👍 Gosto</button>
        <button>💬 Comentar</button>
        <button onclick="partilhar('${p.text}')">🔗 Partilhar</button>
      </div>
    `;
    feed.appendChild(div);
  });
}
function partilhar(msg) {
  const link = "https://efao-fc.github.io/efao-fc/";
  const texto = encodeURIComponent(msg + "\n" + link);
  window.open("https://wa.me/?text=" + texto);
}
function addStory(input) {
  const reader = new FileReader();
  reader.onload = () => {
    const img = document.createElement("img");
    img.src = reader.result;
    img.style.width = "80px";
    img.style.margin = "5px";
    document.getElementById("stories").appendChild(img);
  };
  reader.readAsDataURL(input.files[0]);
}
document.addEventListener("DOMContentLoaded", render);
