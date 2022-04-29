const p = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("success")
    },2000);
})

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("success eh")
    },2000);
})

Promise.race([p, p1]).then(console.log).catch(console.log)

Promise.all([p, p1]).then(console.log).catch(console.log)

Promise.allSettled([p, p1]).then(console.log).catch(console.log)