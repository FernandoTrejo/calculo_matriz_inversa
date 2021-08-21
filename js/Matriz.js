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

    convertirModoArreglo(){
        return [
            [this.pos11, this.pos12, this.pos13],
            [this.pos21, this.pos22, this.pos23],
            [this.pos31, this.pos32, this.pos33]
        ];
    }

    matrizAdjunta(){
        let cofactores = this.matrizCofactores();

        //multiplicar por matriz signos
        let matrizSignos = this.obtenerMatrizSignos();

        let elementos = [
            
        ];
        let matrizAdjunta = {
            pos11: cofactores.cof11 * matrizSignos.sig11,
            pos12: cofactores.cof12 * matrizSignos.sig12,
            pos13: cofactores.cof13 * matrizSignos.sig13,
            pos21: cofactores.cof21 * matrizSignos.sig21,
            pos22: cofactores.cof22 * matrizSignos.sig22,
            pos23: cofactores.cof23 * matrizSignos.sig23,
            pos31: cofactores.cof31 * matrizSignos.sig31,
            pos32: cofactores.cof32 * matrizSignos.sig32,
            pos33: cofactores.cof33 * matrizSignos.sig33
        };


        return matrizAdjunta;
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

    obtenerMatrizSignos(){
        return {
            sig11: 1,
            sig12: -1,
            sig13: 1,
            sig21: -1,
            sig22: 1,
            sig23: -1,
            sig31: 1,
            sig32: -1,
            sig33: 1,
        }
    }

    getDeterminante(){
        return this.determinante;
    }

}
