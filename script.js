const container = document.getElementById("user-container");
const filterInput = document.getElementById("filter");

let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    displayUsers(users);
  });

function displayUsers(userList) {
    container.innerHTML="";
    for (let i=0; i<userList.length; i++) {
        const user=userList[i];

        const card=document.createElement("div");
        card.className="user-card";
        card.innerHTML=`
            <h3>${user.name}</h3>
            <p><strong>Username: </strong> ${user.username}</p>
            <p><strong>Email: </strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
            `;
        container.appendChild(card);
    }
}

filter.addEventListener("input", () => {
    const keyword=filter.value.toLowerCase();
    const filtered=users.filter(user =>
        user.address.city.toLowerCase().includes(keyword) ||
        user.company.name.toLowerCase().includes(keyword)
    );
    displayUsers(filtered);
});