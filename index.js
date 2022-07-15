// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

//function is fetching data from server and converting into html to populate user cards
async function main() {
    //fetch user data from server
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
    //convert promise into array of users
  const usersData = await users.json();
    //access the html call user__list
  const userwrapper = document.querySelector(".user-list");
    //map a new array of html strings from the user data
  const htmlUserData = usersData.map((user) => userHTML(user));
    //pass the html user strings as one long string for html output
  userwrapper.innerHTML = htmlUserData.join("");
}

main();


function showUserPosts(id){
    localStorage.setItem("id",id);
    window.location.href =  `${window.location.origin}/user.html`;
}

//function to convert user array data into html string
function userHTML(user){
    return `<div class="user" onclick="showUserPosts(${user.id})">
    <div class="user-card">
      <div class="user-card__container">
        <h3>${user.name}</h4>
          <p><b>Email:</b>${user.email}</p>
          <p><b>Phone:</b> ${user.phone}</p>
          <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
      </div>
    </div>
    </div>`;
}