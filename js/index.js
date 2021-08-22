function select(id){
    return document.getElementById(id).value;
}

function put(id, value){
    document.getElementById(id).value = value;
}

function write(id, text){
    document.getElementById(id).innerText = text;
}

function putResults(arreglo, tipo){ //tipo = "a" si es adjunta, "t" si es transpuesta, "i" si es inversa
    let posNames = [];
    if(tipo == "def"){
        posNames = [
            "pos11","pos12","pos13",
            "pos21","pos22","pos23",
            "pos31","pos32","pos33"
        ];

        for(let i = 0; i<posNames.length; i++){
            put(posNames[i], Number(arreglo[i]));
        }
    }else{
        posNames = [
            tipo + "_pos11",tipo + "_pos12",tipo + "_pos13",
            tipo + "_pos21",tipo + "_pos22",tipo + "_pos23",
            tipo + "_pos31",tipo + "_pos32",tipo + "_pos33"
        ];

        for(let i = 0; i<posNames.length; i++){
            put(posNames[i], Number(arreglo[i]).toFixed(2));
        }
    }


    
}

function calcularInversa(){
    let elementos = [
        [Number(select("pos11")), Number(select("pos12")), Number(select("pos13"))],
        [Number(select("pos21")), Number(select("pos22")), Number(select("pos23"))],
        [Number(select("pos31")), Number(select("pos32")), Number(select("pos33"))]
    ];

    let matrizA = new Matriz3x3(elementos);
    
    if(matrizA.determinante != 0){
        let matrizAdjunta = matrizA.matrizAdjunta();
        let matrizTranspuesta = matrizAdjunta.matrizTranspuesta();
        let inversaA = matrizTranspuesta.dividirEscalar(matrizA.determinante);
        
        putResults(matrizAdjunta.convertirArreglo(), "a");
        putResults(matrizTranspuesta.convertirArreglo(), "t");
        putResults(inversaA.convertirArreglo(), "i");

        write("det01", "Determinante de A: " + Number(matrizA.determinante).toFixed(2));
        write("det02", "Determinante de A: " + Number(matrizA.determinante).toFixed(2));
        write("det03", "Determinante de A: " + Number(matrizA.determinante).toFixed(2));
        
        document.getElementById("divResultados").classList.remove("d-none");
        document.getElementById("divError").classList.add("d-none");
    }else{
        document.getElementById("divResultados").classList.add("d-none");
        document.getElementById("divError").classList.remove("d-none");
    }

}

function reiniciar(){
    document.getElementById("divResultados").classList.add("d-none");
    document.getElementById("divError").classList.add("d-none");

    putResults([0,0,0,0,0,0,0,0,0], "def");
}