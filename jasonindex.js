function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

function  loaduser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}
function loaduser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => displayuser(data))
}

function displayuser(data){
    for(const user of data){
        console.log(user.name);
       console.log(user.email);
    }
    
}
