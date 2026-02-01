console.log("hii")


let timer = setInterval(()=>{

let dat = new Date()
console.log(dat.toLocaleTimeString());

}, 1000);

setTimeout(()=>{
	clearInterval(timer);
},6000)