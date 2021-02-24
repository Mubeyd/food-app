const Images = [
    { image: require('../assets/banners/food-banner1.jpg') },
    { image: require('../assets/banners/food-banner2.jpg') },
    { image: require('../assets/banners/food-banner3.jpg') },
    { image: require('../assets/banners/food-banner4.jpg') },
    { image: require('../assets/banners/food-banner5.jpg') },
];

export const cardData = [
    {
        coordinate: {
            latitude: 37.03137,
            longitude: 37.32139,
        },
        title: 'Arroz con Pollo',
        description1: 'I can paint your home while you spend your vacation',
        description2: 'Also I will make a discount up 30% on price of paint.',
        image: Images[0].image,
        rating: 4,
        reviews: 99,
        price: 75,
        orderState: 'done',
        logo: 'github',
    },
    {
        coordinate: {
            latitude: 37.032924,
            longitude: 37.319036,
        },
        title: 'Aji de Gallina',
        description1: 'I can paint your home while you spend your vacation',
        description2: 'Also I will make a discount up 30% on price',
        image: Images[1].image,
        rating: 5,
        reviews: 36,
        price: 75,
        orderState: 'waiting',
        logo: 'github',
    },
    {
        coordinate: {
            latitude: 37.034341,
            longitude: 37.320393,
        },
        title: 'Lomo Saltado',
        description1: 'I can paint your home while you spend your vacation',
        description2: 'Also I will make a discount up 30% on price of paint.',
        image: Images[2].image,
        rating: 3,
        reviews: 54,
        price: 75,
        orderState: 'processing',
        logo: 'github',
    },
    {
        coordinate: {
            latitude: 37.035137,
            longitude: 37.319047,
        },
        title: 'Bisteck a Lo Pobre',
        description1: 'I can paint your home while you spend your vacation',
        description2: 'Also I will make a discount up 30% on price of paint.',
        image: Images[3].image,
        rating: 4,
        reviews: 48,
        price: 75,
        orderState: 'cancelled',
        logo: 'github',
    },
    {
        coordinate: {
            latitude: 37.035942,
            longitude: 37.320769,
        },
        title: 'Tallarin Verdes',
        description1: 'I can paint your home while you spend your vacation',
        description2: 'Also I will make a discount up 30% on price of paint.',
        image: Images[4].image,
        rating: 4,
        reviews: 87,
        price: 75,
        orderState: 'cancelled',
        logo: 'github',
    },
];
