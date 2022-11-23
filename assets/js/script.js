const btnMobile = document.getElementById('btn-mobile');

const toggleMenu =  () =>{
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

async function getData(){
    const res = await fetch('https://stark-cove-48986.herokuapp.com/seguros/motivos');
    const data = await res.json();
    return data;
}

document.addEventListener('DOMContentLoaded', async () =>{
    let data = [];
    try{
        data = await getData();
        criarAccord(data);      

    } catch (e){
        console.log('Error!')
        console.log(e);
    }    
})

const criarAccord = (accords) =>{
    let accordContent = "";
    for(accord of accords){
        accordContent += `
        <button class="accordion">${accord.title}</button>
        <div class="accordion-content">
            <p>${accord.text}</p>
        </div> 
        `
    }
    document.querySelector('.accordeon').innerHTML = accordContent;
    
    const accordionBtns = document.querySelectorAll(".accordion");

    accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.style.maxHeight);
        }
    };
    });
}

   




  



