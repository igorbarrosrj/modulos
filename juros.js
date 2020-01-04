const montanteJurosCompostos = (C, i, t) => C * Math.pow((1+i), t)

const jurosCompostos = ({montanteJurosCompostos})=> (C, i, t) => montanteJurosCompostos(C, i, t) - C

const montanteSimples = ({jurosSimples})=> (C, i, t)=> C + jurosSimples(C, i, t)
const jurosSimples = (C, i, t) => C * i* t

module.exports ={
    jurosSimples,
    montanteJurosCompostos,
    montanteSimples: montanteSimples({jurosSimples}),
    pure: {
        montanteSimples,
        jurosCompostos
    }

}