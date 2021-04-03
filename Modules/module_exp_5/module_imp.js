import ( './module_exp.js').then((result)=> {
    console.log("Module loaded");
    let name = result.name;
    console.log(name.lname, name.fname);
    result.default(name)
})
