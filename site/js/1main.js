function first(){
    return new Promise((resolve)=>{
        function goFirst(){
            const f=document.createElement('script');
            f.src="site/js/first.js";
            document.querySelector('body').append(f);
        }
        setTimeout(()=>{
            resolve(goFirst());
            // console.log('first OK');
        },0);
    });
};//first
function menu(){
    return new Promise((resolve)=>{
        function goMenu(){
            const t=document.createElement('script');
            t.src="site/js/menu.js";
            document.querySelector('body').append(t);
        }
        setTimeout(()=>{
            resolve(goMenu());
        },700);
    });
};//menu
function include(){
    return new Promise((resolve)=>{
        function inc(){
            const incl=document.createElement('script');
            incl.src="site/js/includeHtml.js";
            document.querySelector('body').append(incl);
        }
        resolve(inc());
    })
};//include
function onClickToButton(){
    return new Promise((resolve)=>{
        function call(){
            document.querySelector(".firstButton").addEventListener('click',()=>{
                window.location.href="tel:+79528885656";
            });
            document.querySelector('.secondButton').addEventListener('click',()=>{
                window.location.href="https://api.whatsapp.com/send?phone=79528885656";
            });
        }
        resolve(call());
    })
};
function year(){
    return new Promise((resolve)=>{
        function goYear(){
            const d = new Date();
            let year = d.getFullYear();
            console.log(year);
            document.querySelector("#data").innerHTML=`${year}`;
        }
        setTimeout(()=>{
            resolve(goYear());
        },1500)
    });
};//year
async function main(){
    await include();
    await first();
    await menu();
    await onClickToButton();
    await year();
}
main();