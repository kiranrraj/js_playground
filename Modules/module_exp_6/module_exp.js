export let name = {fname : "Kiran", lname: "raj", initials: "R"};
export function dispName(name){
    console.log(`${name.fname} ${name.lname} ${name.initials}.`)
}

export default function(){
    console.log("Success");
}