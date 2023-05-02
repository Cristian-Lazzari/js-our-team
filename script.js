/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
SAngela Lopez	Developer	scott-estrada-developer.jpg
BAngela Lopez	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
const elegrid = document.querySelector(".grid")
const myArr = [
    {
        nome:'Wayne Barnett',
        ruolo:'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Caroll',
        ruolo:'Chief Editor',
        img:'angela-caroll-chief-editor.jpg'
    },
    {
        nome:'Walter Gordon',
        ruolo:'Office Manager',
        img:'walter-gordon-office-manager.jpg'
    },
    {
        nome:'WAngela Lopez',
        ruolo:'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'Angela Lopez',
        ruolo:'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome:'WAngela Lopez',
        ruolo:'Founder & CEO',
        img:'wayne-barnett-founder-ceo.jpg'
    },
]
 for(let i = 0;i < myArr.length; i++){
    console.log(myArr[i].nome, myArr[i].ruolo, myArr[i].img, )
    elegrid.innerHTML += `<div class="card"><h3>${myArr[i].nome}</h3><h5>${myArr[i].ruolo}</h5><img src="img/${myArr[i].img}" alt=""></div>`

 }