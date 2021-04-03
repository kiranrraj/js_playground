
async function getModule() {
    let modules = await import('./module_exp.js');
    modules.dispName(modules.name); //Kiran raj R.
    modules.default();              //Success
}

getModule();