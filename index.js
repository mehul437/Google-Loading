const caller=(fn,d)=>{
    return function(...el){
    document.getElementById('buf').disabled=true;
    setTimeout(()=>{
    fn();
    },d)
}
}
    
    const myfun=caller(()=>{
        document.getElementById('buf').disabled=true;
        console.log("work")
},4000)