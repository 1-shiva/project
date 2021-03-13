const panels = document.querySelectorAll('.panel')
//here the query selector selescts all the panels in html
panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
})
function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}