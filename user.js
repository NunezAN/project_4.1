
function main(){
    const id = localStorage.getItem("id");
    getData(id);
}

function htmlpost(post){
    return `<div class="post">
    <div class="post__title">
      ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}

function onSearchChange(event){
    const id = event.target.value;
    getData(id);
}

async function getData(id){
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json();
    const postsWrapper = document.querySelector(".post-list");

    const postsHTML = postsData.map(post => htmlpost(post));
    postsWrapper.innerHTML = postsHTML.join("");
}

main();