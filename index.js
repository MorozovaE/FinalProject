var root = document.createElement('div');
root.id = 'root';
document.body.append(root);

const arrow = document.createElement('span');
const icon = document.createElement('div');
const btnS_In = document.createElement('button');
const btnS_UP = document.createElement('button');

arrow.setAttribute('class','arrow');

icon.className = 'img';
root.append(icon);

const img = document.createElement('img');
img.className = 'icon';
icon.append(img);
img.src = 'img/icon.jpg'

const divForm = document.createElement('div');
divForm.className = 'form';
const form = document.createElement('form')
divForm.appendChild(form);

let div1 = document.createElement('div');
let labelEmail = document.createElement('label');
labelEmail.setAttribute('for','mail');
labelEmail.prepend('Email');
let inputEmail = document.createElement('input');
inputEmail.setAttribute('type','email');
inputEmail.setAttribute('id','mail');
inputEmail.setAttribute('name','user_email');
inputEmail.setAttribute('placeholder','Enter your email...');


let div2 = document.createElement('div');
let labelPass = document.createElement('label');
labelPass.setAttribute('for','passw');
labelPass.append('Password');
let inputPass = document.createElement('input');
inputPass.setAttribute('type','password');
inputPass.setAttribute('id','passw');
inputPass.setAttribute('name','user_password');
inputPass.setAttribute('minlength',"6");
inputPass.setAttribute('placeholder',"Enter your password...");

let div4 = document.createElement('div');
div4.setAttribute('class','div4')
let labelRepeatPass = document.createElement('label');
labelRepeatPass.setAttribute('for','repPass');
labelRepeatPass.prepend('Repeat password');
let inputRepeat = document.createElement('input');
inputRepeat.setAttribute('type','password');
inputRepeat.setAttribute('id','repPass');
inputRepeat.setAttribute('name','repeatPass');
inputRepeat.setAttribute('placeholder','Repeat your password...');



form>div1.append(labelEmail,inputEmail);
form>div2.append(labelPass,inputPass);
form>div4.append(labelRepeatPass,inputRepeat);

let a = document.createElement('a');
a.className = "create-acc" ;
a.append('Create new a account?');

btnS_UP.style.display = 'none';

a.addEventListener('click', function CreateNewAcc(){
  div4.style.display = 'block';
  a.style.display = 'none';
  arrow.style.display = 'inline-block';
  btnS_UP.style.display = 'inline-block';
  btnS_In.style.display = 'none';

});


arrow.addEventListener('click',function hideArrow(){
  arrow.style.display = 'none';
  div4.style.display = 'none';
  btnS_UP.style.display = 'none';
  btnS_In.style.display = 'inline-block';
  a.style.display = 'inline-block';

})


let div3 = document.createElement('div');


btnS_In.append('Sign in');
btnS_UP.append('Sign up');


btnS_In.setAttribute('type','button');
btnS_UP.setAttribute('type','button');


div3.append(arrow,btnS_In,btnS_UP);



form.append(div1,div2,div4);
form.append(a);
form.append(div3);

const menu = ['Terms','Privacy','Security','Conctacts'];
let menuList = document.createElement('div');

menuList.className = 'menu';

menu.forEach(el => {
  let p = document.createElement('p');
  p.append(el);
  menuList.append(p);
});


btnS_In.addEventListener('click',() =>{
  validate();
});

btnS_UP.addEventListener('click',() => {
  validateUP();
})

function validate(){
    var form = document.getElementById("form");
    var email = document.getElementById("mail").value;
    var password = document.getElementById('passw').value;


    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    console.log(email);
    console.log(password);

    if (email == "" || password == "" ) {

      alert('Enter your details, please');
    
  }

  if(email.match(pattern)){

    alert('Валидация пройдена');

      store();
  }
  else{
    alert(' Email entered incorrectly\n Example:name@gmail.com');
    
  }
}

function validateUP(){
  var email = document.getElementById("mail").value;
  var password = document.getElementById('passw').value;
  var repPass = document.getElementById('repPass').value;


  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  console.log(email);
  console.log(password);

  if (email == "" || password == "" || repPass == "" ) {

    alert('Enter your details, please');
}
if(password !== repPass){
  alert('Password mismatch')
}else {

  if(email.match(pattern)){

    alert('Валидация пройдена');
  
    storeUp();
  }
  else{
    alert(' Email entered incorrectly\n Example:name@gmail.com');
  
  }
}

}

function storeUp() {
   let usersString = localStorage.users;

  var inpEmail = document.getElementById("mail").value;
  var inpPass = document.getElementById("passw").value;

  
  var userObject = {
    'mail' : inpEmail,
    'pass' : inpPass
  };

  if (usersString == undefined) {
    localStorage.setItem("users", JSON.stringify([userObject]));
  } else {

  console.log(userObject);
  var users = JSON.parse(usersString);
  users.push(userObject);
  localStorage.setItem('users',JSON.stringify(users))
  console.log(users);

  openToDoList();
  }
}

function store(){

  let usersString = localStorage.users;

  let l = JSON.stringify('string',usersString);
  var inpEmail = document.getElementById("mail").value;
  var inpPass = document.getElementById("passw").value;

  let userObject = {
    'mail' : inpEmail,
    'pass' : inpPass
  }

  if (usersString == undefined) {
    localStorage.setItem("users", JSON.stringify([userObject]));
  } else {

    var users = JSON.parse(usersString);
    console.log('users',users);

    var flag = false;
      for (var user of users) {

      if (inpEmail == user['mail']) {

        alert("Success!");

        flag = true;
        openToDoList()
    }
  }
  if (!flag) {
    alert("Need to register new user!");

  }
}
};
function openToDoList(){
        form.style.display === 'none' ? form.style.display = 'block' : form.style.display = 'none';
        img.style.display === 'none' ? img.style.display = 'block' : img.style.display = 'none';
        menuList.style.display === 'none' ? menuList.style.display = 'block' : menuList.style.display = 'none';
        divToDO.style.display === 'flex' ? divToDO.style.display = 'none' : divToDO.style.display = 'flex';
        ulToDo.style.display === 'flex' ? ulToDo.style.display = 'none' : ulToDo.style.display = 'flex';
}


let divTwo = document.createElement('div');

const divToDO = document.createElement('div');
divToDO.setAttribute('id','to_do');

const caption = document.createElement('h2')
caption.append('My to-do list');

let inpText = document.createElement('input');
inpText.setAttribute('type','text');
inpText.setAttribute('id','inputText');
inpText.setAttribute('placeholder','Name...');

let spanToDo = document.createElement('span');
spanToDo.setAttribute('class','addBtn');
spanToDo.append('Add');

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputText").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    alert("Вы должны что-то написать!");
  } else {
   document.getElementById("ulToDo").appendChild(li);
  }

 document.getElementById("inputText").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");

span.className = "close";
span.appendChild(txt);
li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
     var div = this.parentElement;
      div.style.display = "none";
    }
  }
 
}
spanToDo.setAttribute('onclick','newElement()') ;

let ulToDo = document.createElement('ul');
ulToDo.setAttribute('id','ulToDo')

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
 var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


divTwo.append(inpText,spanToDo)
divToDO.append(caption,divTwo)

root.append(divForm);
root.append(menuList);
root.append(divToDO,ulToDo);
