const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "LANCHE 1",
        price: '50',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "populares",
        colors: ["white", "black"],
        slug: "populares-lanche1",
        size: ["P", "M", "G"],
        description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 2",
        price: '75',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "maiscaros",
        colors: ["white", "pink", "black"],
        slug: "maiscaros-lanche2",
        size: ["P", "M"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 3",
        price: '55',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "populares",
        colors: ["white", "pink", "black"],
        slug: "populares-lanche3",
        size: ["M"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 4",
        price: '65',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "populares",
        colors: ["white", "pink", "black"],
        slug: "populares-lanche4",
        size: ["G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 5",
        price: '85',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "populares",
        colors: ["white", "pink", "black"],
        slug: "populares-lanche5",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 6",
        price: '55',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "populares",
        colors: ["white", "pink", "black"],
        slug: "populares-lanche6",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 7",
        price: '34',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "maisbaratos",
        colors: ["white", "pink", "black"],
        slug: "maisbaratos-lanche7",
        size: ["P", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 8",
        price: '29',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "maisbaratos",
        colors: ["white", "pink", "black"],
        slug: "maisbaratos-lanche8",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 9",
        price: '45',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "maisbaratos",
        colors: ["white", "pink", "black"],
        slug: "maisbaratos-lanche9",
        size: ["M"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 10",
        price: '27',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "maisbaratos",
        colors: ["white", "pink", "black"],
        slug: "maisbaratos-lanche10",
        size: ["P"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 11",
        price: '35',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "maisbaratos",
        colors: ["white", "pink", "black"],
        slug: "maisbaratos-lanche11",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 12",
        price: '33',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "maisbaratos",
        colors: ["white", "pink", "black"],
        slug: "maisbaratos-lanche12",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 13",
        price: '85',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "populares",
        colors: ["white", "pink", "black"],
        slug: "populares-lanche13",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 14",
        price: '25',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "populares",
        colors: ["white", "pink", "black"],
        slug: "populares-lanche14",
        size: ["P", "M"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 15",
        price: '49',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "populares",
        colors: ["white", "pink", "black"],
        slug: "populares-lanche15",
        size: ["G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 16",
        price: '86',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "maiscaros",
        colors: ["white", "red", "black"],
        slug: "maiscaros-lanche16",
        size: ["M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    {
        title: "LANCHE 17",
        price: '46',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "maisbaratos",
        colors: ["white", "pink", "black"],
        slug: "maisbaratos-lanche17",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"    },
    {
        title: "LANCHE 18",
        price: '95',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "maiscaros",
        colors: ["white", "pink", "black"],
        slug: "maiscaros-lanche18",
        size: ["P", "M", "G"],
        description: "boriipsun Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...!"
    },
    // 18 LANCHES
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData