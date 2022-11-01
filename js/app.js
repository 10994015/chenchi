const header = document.getElementById('header');
const headerLink = document.getElementsByClassName('headerLink');

const chineName = document.getElementById('chineName');
const englishName = document.getElementById('englishName');

const toBottom = document.getElementById('toBottom');

const html = document.getElementById('html');let htmlNum = 0;
const css = document.getElementById('css');let cssNum = 0;
const js = document.getElementById('js');let jsNum = 0;
const java = document.getElementById('java');let javaNum = 0;
const python = document.getElementById('python');let pythonNum = 0;
const net = document.getElementById('net');let netNum = 0;
const back =  document.getElementById('back')
const photoModal = document.getElementById('photoModal');
const modalPhoto = document.getElementById('modalPhoto');
const photo = document.getElementsByClassName('photo');
const closeModal = document.getElementById('closeModal');
const h_home = document.getElementById('h_home');
const h_about = document.getElementById('h_about');
const h_skills = document.getElementById('h_skills');
const h_edu = document.getElementById('h_edu');
const h_life = document.getElementById('h_life');

const about = document.getElementById('about');
const skills = document.getElementById('skills');
const education = document.getElementById('education');
const life = document.getElementById('life');
const toTop = document.getElementById('toTop');
h_home.classList.add('focus');
window.addEventListener("scroll",()=>{
    
    if(this.scrollY > 0){
        header.classList.add('active');
        for(let i=0;i<headerLink.length;i++){
            headerLink[i].classList.add('active');
        }
    }else{
        header.classList.remove('active');
        for(let i=0;i<headerLink.length;i++){
            headerLink[i].classList.remove('active');
        }
    }
    if(this.scrollY >= 300){
        toTop.classList.add('open');
    }else{
        toTop.classList.remove('open');
    }
    if(this.scrollY >= 300){
        about.classList.add('in')
    }
    if(this.scrollY >= 1300){
        skills.classList.add('in')
    }
    if(this.scrollY >= 1900){
        education.classList.add('in')
    }
    if(this.scrollY >= 2600){
        life.classList.add('in')
    }
    
    if(this.scrollY >=0 && this.scrollY < 500){
        clearBorderFn();
        h_home.classList.add('focus');
    }
    if(this.scrollY >= 700  && this.scrollY < 1300){
        clearBorderFn();
        h_about.classList.add('focus');
    }
    if(this.scrollY >=1300 && this.scrollY <1900){
        clearBorderFn();
        h_skills.classList.add('focus');
    }
    if(this.scrollY >=1900 && this.scrollY <2700){
        clearBorderFn();
        h_edu.classList.add('focus');
    }
    if(this.scrollY >=2700 ){
        clearBorderFn();
        h_life.classList.add('focus');
    }
})
function clearBorderFn(){
    h_home.classList.remove('focus');
    h_about.classList.remove('focus');
    h_skills.classList.remove('focus');
    h_edu.classList.remove('focus');
    h_life.classList.remove('focus');
}
h_home.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
h_about.addEventListener('click',()=>{
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700;
})
h_skills.addEventListener('click',()=>{
    document.body.scrollTop = 1500;
    document.documentElement.scrollTop = 1500;
})
h_edu.addEventListener('click',()=>{
    document.body.scrollTop = 2050;
    document.documentElement.scrollTop = 2050;
})
h_life.addEventListener('click',()=>{
    document.body.scrollTop = 2900;
    document.documentElement.scrollTop = 2900;
})
toTop.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
let nameNum = 0;
setInterval(()=>{
    nameNum++;
    if(nameNum%2==0){
        chineName.style.opacity=  "1";
        englishName.style.opacity=  "0";
    }else{
        chineName.style.opacity=  "0";
        englishName.style.opacity=  "1";
    }
},4000)

toBottom.addEventListener('click',()=>{
    document.body.scrollTop = 700;
    document.documentElement.scrollTop = 700;
})





let htmlTimer =null;
htmlTimer = setInterval(()=>{
    htmlNum++;
    html.innerHTML = htmlNum + "%";
    if(htmlNum == 90){
        clearInterval(htmlTimer);
    }
},16)

let cssTimer =null;
cssTimer = setInterval(()=>{
    cssNum++;
    css.innerHTML = cssNum + "%";
    if(cssNum == 85){
        clearInterval(cssTimer);
    }
},17)

let jsTimer =null;
jsTimer = setInterval(()=>{
    jsNum++;
    js.innerHTML = jsNum + "%";
    if(jsNum == 100){
        clearInterval(jsTimer);
    }
},15)

let javaTimer =null;
javaTimer = setInterval(()=>{
    javaNum++;
    java.innerHTML = javaNum + "%";
    if(javaNum == 10){
        clearInterval(javaTimer);
    }
},150)

let pythonTimer =null;
pythonTimer = setInterval(()=>{
    pythonNum++;
    python.innerHTML = pythonNum + "%";
    if(pythonNum == 30){
        clearInterval(pythonTimer);
    }
},50)

let netTimer =null;
netTimer = setInterval(()=>{
    netNum++;
    net.innerHTML = netNum + "%";
    if(netNum == 3){
        clearInterval(netTimer);
    }
},500)


for(let i=0;i<photo.length;i++){
    photo[i].addEventListener('click',openModalFn)
}

function openModalFn(){
    photoModal.style.display = "flex";
    modalPhoto.src = this.getElementsByClassName('lifePhoto')[0].src;
}
closeModal.addEventListener('click',()=>{
    photoModal.style.display = "none";
    modalPhoto.src = "";
})
back.addEventListener('click',()=>{
    photoModal.style.display = "none";
    modalPhoto.src = "";
})