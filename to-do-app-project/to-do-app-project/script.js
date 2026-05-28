function addTask(){
    let task=document.getElementById('task').value;
    let li=document.createElement('li');
    li.innerText=task;
    document.getElementById('list').appendChild(li);
    document.getElementById('task').value='';
}