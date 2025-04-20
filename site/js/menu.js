function createMenu(){
    const menuoK=document.createElement('div');
    menuoK.classList.add("openMenu");
    menuoK.innerHTML=`<a href='/'>home</a><a href='#about'>About</a><a href='https://madness.qucu.ru/commercialOffer#invoicing'>Price</a><a href='#footer'>Footer</a>`;
    document.querySelector('main').prepend(menuoK);
    let linkA=document.querySelectorAll('.openMenu > a');
    setTimeout(()=>{
        document.querySelector('.openMenu').style.height="100vh";
        document.querySelector('.openMenu').style.opacity="1";
        for(let i=0;i<linkA.length;i++){
            linkA[i].style.fontSize="30px";
        }
    },100)
    closeMenu();
};//createMenu
function closeMenu(){
    document.querySelector(".openMenu").addEventListener('click',()=>{
        document.querySelector(".openMenu").style.cssText=`
        bottom:0;
        height:0;
        opacity:0;
        `;
        let linkA=document.querySelectorAll(".openMenu > a");
        for(let j=0;j<linkA.length;j++){
            linkA[j].style.fontSize="0";
        }
        setTimeout(()=>{
            document.querySelector(".openMenu").remove();
        },777);
    })
};//closeMenu
document.querySelector('.menu').addEventListener('click',()=>{
    createMenu();
    // console.log('oK menu!!!');
});
