
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("admin-login-btn");
    const logoutBtn = document.getElementById("admin-logout-btn");
    const postForm = document.getElementById("post-form");
    const fotoForm = document.getElementById("foto-form");

    function showAdmin() {
        if (postForm) postForm.style.display = "block";
        if (fotoForm) fotoForm.style.display = "block";
        if (loginBtn) loginBtn.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline";
    }

    function hideAdmin() {
        if (postForm) postForm.style.display = "none";
        if (fotoForm) fotoForm.style.display = "none";
        if (loginBtn) loginBtn.style.display = "inline";
        if (logoutBtn) logoutBtn.style.display = "none";
    }

    if (localStorage.getItem("isAdmin") === "true") {
        showAdmin();
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            const pass = prompt("Senha do administrador:");
            if (pass === "efao2025") {
                localStorage.setItem("isAdmin", "true");
                showAdmin();
            } else {
                alert("Senha incorreta.");
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("isAdmin");
            hideAdmin();
        });
    }
});

function addPost() {
    const content = document.getElementById("new-post").value;
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `<p>${content}</p><hr>`;
    document.getElementById("posts").prepend(postDiv);
    document.getElementById("new-post").value = "";
}

function addFoto() {
    const url = document.getElementById("foto-url").value;
    const fotoDiv = document.createElement("div");
    fotoDiv.innerHTML = `<img src="${url}" width="100%" /><hr>`;
    document.getElementById("fotos").prepend(fotoDiv);
    document.getElementById("foto-url").value = "";
}
