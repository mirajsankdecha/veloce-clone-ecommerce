import Card from './ProductCard'
const data = [
    {
        title: 'Disenthrall Tee',
        price: 1999,
        src: ["https://www.velocefashion.in/cdn/shop/files/image.png", "https://www.velocefashion.in/cdn/shop/files/image_901dfa4e-c8f0-4126-a61c-ad9ff4f80679.png?v=1684263097&amp;width=580"]
    },
    {
        title: 'VELOCE BASIC Tee - castleton green',
        price: 1790,
        src: ["https://www.velocefashion.in/cdn/shop/products/IMG_2626.png?v=1682323796&width=580", "https://www.velocefashion.in/cdn/shop/products/IMG_2627.png?v=1682323796&width=580"]
    },
    {
        title: 'VELOCE BASIC Tee - Beige',
        price: 1790,
        src: ['https://www.velocefashion.in/cdn/shop/products/IMG_2620.png?v=1682324000&width=580', 'https://www.velocefashion.in/cdn/shop/products/IMG_2621.png?v=1682324000&width=580']
    },
    {
        title: 'COLD WORLD Tee',
        price: 1990,
        src: ['https://www.velocefashion.in/cdn/shop/products/59FE3BB4-555B-4086-92DD-15B962BADEFD.png?v=1679262651&width=580', 'https://www.velocefashion.in/cdn/shop/products/D3288E6F-5AC3-4279-B1BB-4AF572F07D5B.png?v=1679262650&width=580']
    },
    {
        title: 'VARSITY Polo Tee',
        price: 1990,
        src: ['https://www.velocefashion.in/cdn/shop/products/IMG_2066.png?v=1678631691&width=580', 'https://www.velocefashion.in/cdn/shop/products/IMG_2065.png?v=1678631691&width=580']
    },
    {
        title: 'RETRO Tee',
        price: 1990,
        src: ['https://www.velocefashion.in/cdn/shop/products/IMG_1607.png?v=1676906778&width=580', 'https://www.velocefashion.in/cdn/shop/products/IMG_1608.png?v=1676906777&width=580']
    }
]


const MainSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto max-w-[75em] gap-10">
            {
                data?.map((item, index) => {
                    return <Card key={index} {...item} />
                })
            }
        </div>
    )
}

export default MainSection;