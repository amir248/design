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
async function main(){
    await include();
    await first();
    await menu();
}
main();