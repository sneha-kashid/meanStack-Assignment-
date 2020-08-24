window.addEventListener("load",()=>{
    let a=document.querySelector("#parentContainer");

    for(let i=0 ; i<10 ; i++)
    {
        let newdiv=a.children[0].cloneNode(true);
    
        newdiv.style.display="flex";
        newdiv.children[0].innerHTML="sneha"+i;
        a.insertBefore(newdiv,a.children[0]);
    }

})

/*
window.addEventListener("load",()=>{
   
    
    let pbc = document.querySelector("#parentBlockContainer");
    

    for(let i=0 ; i < 20 ; i++){
    let newElement = pbc.children[0].cloneNode(true);
    newElement.style.display ="flex";
    newElement.children[0].innerHTML="sneha"+i;
    pbc.insertBefore(newElement,pbc.children[0]);
}
})*/