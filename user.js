
async function main(){
    const id = localStorage.getItem("id");
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const postsData = await posts.json();
    console.log(postsData);

    const postsWrapper = document.querySelector(".post-list");
    console.log(postsWrapper);

    const postsHTML = postsData.map(post => htmlpost(post));
    postsWrapper.innerHTML = postsHTML.join("");
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
main();