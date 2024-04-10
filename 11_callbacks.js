

//Jenny : Solve the Homework by own
function jennyHomeWork(callbacks){
    
    console.log(`jenny started home work..........`);
    console.log(`Jenny took sometime let's consider 2 hours....`);
    console.log(`Finally Jenny Completed homework...`);
    callbacks();
}


//Elon : Copy homework from Jenny
let elonCopyHomeWork = function(){
    console.log(`Playing cricket`);
    console.log(`Copying homework....`);
    console.log(`After 10 mins, Elon copied all homework...`);
}
jennyHomeWork(elonCopyHomeWork);    //passing complete function as a value.









