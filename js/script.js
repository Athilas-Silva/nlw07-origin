const links = {
    github: "Athilas-Silva",
    facebook: "athilassilva",
    instagram: "athilassilva"
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute("class")
        li.children[0].href= `http://${social}.com/${links[social]}`;
    }
}

changeSocialMediaLinks();

//API do github para pegar algumas informações e introduzir via JavaScript
function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${links.github}`;

    fetch(url).then(res => res.json()).then(data => {
        userName.textContent = data.name //nome
        userBio.textContent = data.bio //biografia
        userLink.href = data.html_url //link do perfil
        userImage.src = data.avatar_url //foto de perfil
        userLogin.textContent = data.login // nome da url
    })
}

getGithubProfileInfos();