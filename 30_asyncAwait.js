
// ज्या  function सोबत  आपण  async लिहिणार ते आपल्याला "Promise" return  करणार .
// async means Result  kab milega pata nahi.

async function data(){
    return "Hello - This is data";
}
const result = data();
result.then(function(success){
    console.log(success);
});


async function getData(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('fetch data.....');
            resolve ('Resolve- Fetch data Promise...');
            // reject('Reject - Error while fetching data.....')
        }, 3000);
    });
}


async function main(){
    try{                                        // try ke andar aisa code hota hai jo aapko error de skta hai
        const result = await getData();
        console.log(result);
    }catch(error){
        console.log(error);
    }

//     result.then(function(success){
//         console.log(success);
//     }). catch(function(reject){
//         console.log(reject);
//     });
}
main();




