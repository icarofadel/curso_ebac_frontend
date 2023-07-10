document.addEventListener('DOMContentLoaded',function (){
    const endpoint = `https://api.github.com/users/RedSkull7`;

    const name = document.querySelector('#name');
    const usarname = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const reposi = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch(endpoint)
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        name.innerText = json.name;
        username.innerText = json.login;
        avatar.src = json.avatar_url;
        followers.innerText = json.followers;
        following.innerText = json.following;
        reposi.innerText = json.public_repos;
        link.href = json.html_url;
    })
})