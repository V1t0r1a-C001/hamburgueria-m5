const img1 = require("../images/slider/slide_1.png").default
const img2 = require("../images/slider/slide_2.png").default
const img3 = require("../images/slider/slide_3.png").default

const heroSliderData = [
    {
        title: "QUAL É O TAMANHO DA SUA FOME?",
        description: "A fome, ela que te move! E aqui você escolhe o tamanho da sua.",
        img: img1,
        color: "yellow",
        path: "/catalog/populares-lanche1"
    },
    {
        title: "EXPERIMENTE NOSSA VARIEDADE DE MOLHOS!",
        description: "Escolha o seu molho favorito, e faça novas combinações.",
        img: img2,
        path: "/catalog/maiscaros-lanche2",
        color: "pink"
    },
    {
        title: "CONFIRA O MAIS PEDIDO, E SE SURPREENDA!",
        description: " Na dúvida do que comer hoje? A GENTE TE DÁ UMA MÃOZINHA.",
        img: img3,
        path: "/catalog/populares-lanche3",
        color: "orange"
    }
]

export default heroSliderData