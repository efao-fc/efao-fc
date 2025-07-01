function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => window.location = "index.html")
    .catch(e => alert(e.message));
}

function register() {
  const email = document.getElementById("reg-email").value;
  const pass = document.getElementById("reg-password").value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => window.location = "index.html")
    .catch(e => alert(e.message));
}

function logout() {
  auth.signOut().then(() => window.location = "login.html");
}

function createPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const user = auth.currentUser;
  if (!user || user.email !== "efao.fc@admin.com") {
    alert("Apenas o clube pode publicar.");
    return;
  }
  db.collection("posts").add({
    title,
    content,
    author: user.email,
    timestamp: Date.now()
  }).then(() => alert("Publicado!"));
}

window.onload = () => {
  const feed = document.getElementById("feed");
  if (feed) {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      feed.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        const post = `<div class="post">
          <h3>${data.title}</h3>
          <p>${data.content}</p>
          <small>Por ${data.author}</small>
        </div>`;
        feed.innerHTML += post;
      });
    });
  }
};
