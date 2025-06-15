const memebtn = document.getElementById("meme-btn");
const memeimg = document.getElementById("memeimg");
const authorName= document.getElementById("author-name");
const memetitle = document.getElementById("meme-title")

const updateDetails = (url,title,author) =>{
    memeimg.setAttribute("src",url);
    memetitle.innerHTML= title;
    authorName.innerHTML=`Meme by: ${author}`
};

const generateMeme = ()=>{
    fetch(" https://meme-api.com/gimme/wholesomememes")
    .then((Response) => Response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author);
    });
}
memebtn.addEventListener("click", generateMeme);