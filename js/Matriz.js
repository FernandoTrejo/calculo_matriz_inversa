class Matriz3x3{
    constructor(elementos){
        this.pos11 = elementos[0][0];
        this.pos12 = elementos[0][1];
        this.pos13 = elementos[0][2];
        this.pos21 = elementos[1][0];
        this.pos22 = elementos[1][1];
        this.pos23 = elementos[1][2];
        this.pos31 = elementos[2][0];
        this.pos32 = elementos[2][1];
        this.pos33 = elementos[2][2];

        this.determinante = this.calcularDeterminanteSarrus();
    }

    calcularDeterminanteSarrus(){
        let diagonalPrincipal = this.pos11 * this.pos22 * this.pos33;
        let triangulo1 = this.pos21 * this.pos32 * this.pos13;
        let triangulo2 = this.pos12 * this.pos23 * this.pos31;

        let diagonalSecundaria = this.pos31 * this.pos22 * this.pos13;
        let triangulo3 = this.pos11 * this.pos32 * this.pos23;
        let triangulo4 = this.pos21 * this.pos12 * this.pos33;

        let determinante = diagonalPrincipal + triangulo1 + triangulo2 - diagonalSecundaria - triangulo3 - triangulo4;
        
        return determinante;
    }

    matrizAdjunta(){
        let cofactores = this.matrizCofactores();

        let elementos = [
            [cofactores.pos11, cofactores.pos12 * -1, cofactores.pos13],
            [cofactores.pos21 * -1, cofactores.pos22, cofactores.pos23 * -1],
            [cofactores.pos31, cofactores.pos32 * -1, cofactores.pos33]
        ];

        return new Matriz3x3(elementos);
    }

    matrizCofactores(){
        let cof11 = (this.pos22 * this.pos33) - (this.pos32 * this.pos23);
        let cof12 = (this.pos21 * this.pos33) - (this.pos31 * this.pos23);
        let cof13 = (this.pos21 * this.pos32) - (this.pos31 * this.pos22);
        let cof21 = (this.pos12 * this.pos33) - (this.pos32 * this.pos13);
        let cof22 = (this.pos11 * this.pos33) - (this.pos31 * this.pos13);
        let cof23 = (this.pos11 * this.pos32) - (this.pos31 * this.pos12);
        let cof31 = (this.pos12 * this.pos23) - (this.pos22 * this.pos13);
        let cof32 = (this.pos11 * this.pos23) - (this.pos21 * this.pos13);
        let cof33 = (this.pos11 * this.pos22) - (this.pos21 * this.pos12);

        let elementos = [
            [cof11, cof12, cof13],
            [cof21, cof22, cof23],
            [cof31, cof32, cof33]
        ];

        return new Matriz3x3(elementos);
    }

    matrizTranspuesta(){
        let elementos = [
            [this.pos11, this.pos21, this.pos31],
            [this.pos12, this.pos22, this.pos32],
            [this.pos13, this.pos23, this.pos33]
        ];

        return new Matriz3x3(elementos);
    }

    matrizInversa(){
        let adjunta = this.matrizAdjunta();
        let transpuesta = adjunta.matrizTranspuesta();

        let inversa = transpuesta.dividirEscalar(this.determinante);
        return inversa;
    }
    
    dividirEscalar(numero){
        let elementos = [
            [this.pos11 / numero, this.pos12 / numero, this.pos13 / numero],
            [this.pos21 / numero, this.pos22 / numero, this.pos23 / numero],
            [this.pos31 / numero, this.pos32 / numero, this.pos33 / numero]
        ];

        return new Matriz3x3(elementos);
    }

    convertirArreglo(){
        return [
            this.pos11, this.pos12, this.pos13,
            this.pos21, this.pos22, this.pos23,
            this.pos31, this.pos32, this.pos33
        ];
    }

}
