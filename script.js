class Carro {
    constructor(marca,fabricante) {}
        this.fabricante = fabricante;
        this.marca = marca;
    }

    mostrarMarca() {
        console.log("a maarca do carro é $(this.marca)");
    }
}

const meuCarro = new Carro("Ford");
meuCarro.mostrarMarca();
