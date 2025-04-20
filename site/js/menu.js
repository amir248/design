function createMenu(){
    const menuoK=document.createElement('div');
    menuoK.classList.add("openMenu");
    menuoK.innerHTML=`<a href='/'>home</a><a href='#about'>About</a><a href='https://madness.qucu.ru/commercialOffer#invoicing'>Price</a><a href='#footer'>Footer</a>`;
    document.querySelector('main').prepend(menuoK);
    let linkA=document.querySelectorAll('.openMenu > a');
    setTimeout(()=>{
        for(let i=0;i<linkA.length;i++){
            linkA[i].style.fontSize="30px";
        }
        // document.querySelector('.openMenu > a').style.fontSize="30px";
    })
    closeMenu();
};//createMenu
function closeMenu(){
    document.querySelector(".openMenu").addEventListener('click',()=>{
        document.querySelector(".openMenu").remove();
    })
};//closeMenu
document.querySelector('.menu').addEventListener('click',()=>{
    createMenu();
    console.log('oK menu!!!');
});
