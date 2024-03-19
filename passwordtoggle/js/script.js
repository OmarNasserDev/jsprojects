let passinp = document.querySelector('.passinp');
let showbtn = document.querySelector('.showbtn');


showbtn.addEventListener('click', () => {
if(showbtn.getAttribute('status')=="show"){
    passinp.type="text";
    showbtn.innerHTML="Hide";
    showbtn.setAttribute('status','hide');
}else{
    passinp.type="password";
    showbtn.innerHTML="Show";
    showbtn.setAttribute('status','show');
}

})