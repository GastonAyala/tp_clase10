const datosBicis = require('./datosBici.js');

const dhBici = {
    bicicletas: datosBicis.leerJSON(),
    buscarBici: function (id) {
        const biciEnc = this.bicicletas.filter((bici) => {
            return bici.id === id
        })[0]
        if (biciEnc.length === 0) {
            return null
        }
        return biciEnc
    },
    venderBici: function (id) {
        const biciEnc = this.buscarBici(id)
        if (biciEnc === null) {
            return "Bicicleta no encontrada"
        }
        biciEnc.vendida = true;
        return biciEnc;
    },
    biciParaLaVenta: function () {
        biciSinVender = this.bicicletas.filter((bici) => {
            return !bici.vendida
        })
        return biciSinVender
    },
    totalDeVentas: function () {
        const totalVentas = this.bicicletas.reduce((acumulador, bici) => {
            if (bici.vendida) {
                acumulador += bici.precio;
            }
            return acumulador
        }, 0)
        return totalVentas
    },
    biciPorRodado: function (numeroRodado) {
        const biciDelRodado = this.bicicletas.filter((bici) => {
            return bici.rodado === numeroRodado
        });
        return biciDelRodado
    }
};

// console.log(dhBici.buscarBici(3));
// console.log(dhBici.venderBici(2));
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas());
// console.log(dhBici.biciPorRodado(26));

const aumentoBici = (procentajeAumento) => {
    const bicisConAumento = dhBici.bicicletas.map((precioBici) => {
        let aumento = precioBici.precio * procentajeAumento / 100
        return aumento += precioBici.precio
    });
    return bicisConAumento
};
// console.log(aumentoBici(20));

const listarTodasLasBici = () => {
    console.log("Bicicletas registradas en el sistema");
    dhBici.bicicletas.forEach((bici) => {
        console.log(`${bici.id} marca: ${bici.marca} modelo: ${bici.modelo}`);
    });
};
// listarTodasLasBici()

module.exports = dhBici;
