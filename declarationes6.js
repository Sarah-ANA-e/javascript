function exempleVar(){
    var x = 5;
    if(true){
        var x = 10
        console.log(x, "la valeur de x a linterieur de la condition");
    }
    console.log(x, "la valeur de x a lesterieur de la condition");
}
exempleVar();

function exempleLet(){
    let y = 5;
    if(true){
        let y = 10;
        console.log(y, "la valeur de y est a linterieur de la conditon ");
    }
       console.log(y, "la valeur de y est a lexterieur de la condition ")
}
exempleLet();
