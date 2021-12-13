const dummyData = [{
        url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }, 
    {
        url: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        url: 'https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE='
    },
]

const dummtyHotelData = [
    {
        id: '1',
        title: 'The Hotel Bay',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2iuNYYkhi71S5BFbUH6TagHaE8%26pid%3DApi&f=1',
        address: '69 victoria Rd, Camps Bay, Cape Town, South Africa',
        mobile: '+27 (0)21 430 4100',
        headerInfo: 'Camps Bay’s Luxury Beachfront Escape',
        sectionA: 'On the doorstep of the Atlantic, The Bay Hotel is an exclusive members-only hotel where our mission is to provide excellent service and unforgettable experiences.',
        sectionB: 'With our membership program, regular patrons will have the opportunity to become members of this exclusive hotel too, and enjoy exceptional benefits including access to our stunning co-working space and business facilities, gym, sauna and steam room, pools and membership to our fabulous Sandy B Private Beach Club.',
        sectionC: 'For membership applications, please contact our Host Manager, Sean O\'Brien at ',
        sectionD: 'We invite you to rediscover fun at The Bay Hotel',
        mail: 'hostmanager@thebayhotel.com.',
    },
    {
        id: '2',
        title: 'Hotel Sky Cape Town',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kBziGrMnv6bzofnZmVvzTAHaFj%26pid%3DApi&f=1',
        address: '69 victoria Rd, Camps Bay, Cape Town, South Africa',
        mobile: '+27 (0)21 430 4100',
        hotelinfo: 'Sky hotel info',
    },
    {
        id: '3',
        title: 'The Capital Mirage',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2iuNYYkhi71S5BFbUH6TagHaE8%26pid%3DApi&f=1',
        address: '69 victoria Rd, Camps Bay, Cape Town, South Africa',
        mobile: '+27 (0)21 430 4100',
        hotelinfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Praesent semper feugiat nibh sed. Nisi porta lorem mollis aliquam ut. Eget lorem dolor sed viverra ipsum nunc. Molestie at elementum eu facilisis sed odio morbi quis commodo. Facilisis leo vel fringilla est ullamcorper eget. Dapibus ultrices in iaculis nunc sed augue lacus. Vel fringilla est ullamcorper eget nulla. Ante in nibh mauris cursus mattis. Volutpat commodo sed egestas egestas fringilla. Elit duis tristique sollicitudin nibh. Proin sed libero enim sed faucibus turpis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Mi eget mauris pharetra et ultrices. Massa ultricies mi quis hendrerit dolor magna eget est. Odio facilisis mauris sit amet.',
    },
    {
        id: '4',
        title: 'Capetonion',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2iuNYYkhi71S5BFbUH6TagHaE8%26pid%3DApi&f=1',
        address: '69 victoria Rd, Camps Bay, Cape Town, South Africa',
        mobile: '+27 (0)21 430 4100'
    },
    {
        id: '5',
        title: 'President Hotel',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2iuNYYkhi71S5BFbUH6TagHaE8%26pid%3DApi&f=1',
        address: '69 victoria Rd, Camps Bay, Cape Town, South Africa',
        mobile: '+27 (0)21 430 4100'
    },
    {
        id: '6',
        title: 'Grande Kloof Boutique Hotel',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kBziGrMnv6bzofnZmVvzTAHaFj%26pid%3DApi&f=1',
        address: '69 victoria Rd, Camps Bay, Cape Town, South Africa',
        mobile: '+27 (0)21 430 4100',
        hotelinfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Praesent semper feugiat nibh sed. Nisi porta lorem mollis aliquam ut. Eget lorem dolor sed viverra ipsum nunc. Molestie at elementum eu facilisis sed odio morbi quis commodo. Facilisis leo vel fringilla est ullamcorper eget. Dapibus ultrices in iaculis nunc sed augue lacus. Vel fringilla est ullamcorper eget nulla. Ante in nibh mauris cursus mattis. Volutpat commodo sed egestas egestas fringilla. Elit duis tristique sollicitudin nibh. Proin sed libero enim sed faucibus turpis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Mi eget mauris pharetra et ultrices. Massa ultricies mi quis hendrerit dolor magna eget est. Odio facilisis mauris sit amet.',
    },
    {
        id: '7',
        title: 'Vrede self Catering',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kBziGrMnv6bzofnZmVvzTAHaFj%26pid%3DApi&f=1',
        address: '69 victoria Rd, Camps Bay, Cape Town, South Africa',
        mobile: '+27 (0)21 430 4100',
        hotelinfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Praesent semper feugiat nibh sed. Nisi porta lorem mollis aliquam ut. Eget lorem dolor sed viverra ipsum nunc. Molestie at elementum eu facilisis sed odio morbi quis commodo. Facilisis leo vel fringilla est ullamcorper eget. Dapibus ultrices in iaculis nunc sed augue lacus. Vel fringilla est ullamcorper eget nulla. Ante in nibh mauris cursus mattis. Volutpat commodo sed egestas egestas fringilla. Elit duis tristique sollicitudin nibh. Proin sed libero enim sed faucibus turpis. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Mi eget mauris pharetra et ultrices. Massa ultricies mi quis hendrerit dolor magna eget est. Odio facilisis mauris sit amet.',
    },
] 

const bayHotelDummyData = [
    {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cometocapetown.com%2Fwp-content%2Fgallery%2Fthe-bay-hotel-new%2Fd6b0540.jpg&f=1&nofb=1',
    },
    {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.south-african-hotels.com%2Fmedia%2Fthe-bay-hotel-camps-bay.jpg&f=1&nofb=1',
    },
    {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.classicresorts.ie%2Fimages%2Fthe_bay_hotel__camps_bay1_1&f=1&nofb=1',
    },
    {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cometocapetown.com%2Fwp-content%2Fgallery%2Fthe-bay-hotel-new%2Fbay-0072633.jpg&f=1&nofb=1',
    },
    {
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cometocapetown.com%2Fwp-content%2Fgallery%2Fthe-bay-hotel-new%2Fd6b05248.jpg&f=1&nofb=1',
    },
]

const bayHotelRooms = [
    {
        id: '1',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '40m² • Mountain view • Non-smoking • Wireless Internet • Smart TV • Bath • Air conditioned • Cots Available • Mini Bar • Hairdryer • Bathrobes Provided • Free Toiletries • Linen and Towels Provided • Housekeeping • Shower - separate • Television • Room Service • Telephone • Desk • Tea/Coffee Maker • Room Safe Breathtaking views of Table Mountain and the Twelve Apostles mountain range. One additional child age (3-14 years) can be accommodated in a daybed or in a cot (0-3 years), at an additional cost.',
        price: 'R2,312.00', 
    },
    {
        id: '2',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Pool Club',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '40m² • Mountain view • Non-smoking • Wireless Internet • Smart TV • Bath • Air conditioned • Cots Available • Mini Bar • Hairdryer • Bathrobes Provided • Free Toiletries • Linen and Towels Provided • Housekeeping • Shower - separate • Television • Room Service • Telephone • Desk • Tea/Coffee Maker • Room Safe Breathtaking views of Table Mountain and the Twelve Apostles mountain range. One additional child age (3-14 years) can be accommodated in a daybed or in a cot (0-3 years), at an additional cost.',
        price: 'R2,312.00',  
    },
    {
        id: '3',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Sea and Mountain Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '4',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain Spa Suites',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '5',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Sea and Pool',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '6',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Cabana Pool Club',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '7',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Sea View',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '8',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Sky Panorametic Suite',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '9',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Corner Sea Spa Suites',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '10',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Wellness Pool Club',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
]

const tableBayRooms = [
    {
        id: '1',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '40m² • Mountain view • Non-smoking • Wireless Internet • Smart TV • Bath • Air conditioned • Cots Available • Mini Bar • Hairdryer • Bathrobes Provided • Free Toiletries • Linen and Towels Provided • Housekeeping • Shower - separate • Television • Room Service • Telephone • Desk • Tea/Coffee Maker • Room Safe Breathtaking views of Table Mountain and the Twelve Apostles mountain range. One additional child age (3-14 years) can be accommodated in a daybed or in a cot (0-3 years), at an additional cost.',
        price: 'R2,312.00', 
    },
    {
        id: '2',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '40m² • Mountain view • Non-smoking • Wireless Internet • Smart TV • Bath • Air conditioned • Cots Available • Mini Bar • Hairdryer • Bathrobes Provided • Free Toiletries • Linen and Towels Provided • Housekeeping • Shower - separate • Television • Room Service • Telephone • Desk • Tea/Coffee Maker • Room Safe Breathtaking views of Table Mountain and the Twelve Apostles mountain range. One additional child age (3-14 years) can be accommodated in a daybed or in a cot (0-3 years), at an additional cost.',
        price: 'R2,312.00',  
    },
    {
        id: '3',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '4',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '5',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '6',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '7',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '8',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '9',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
    {
        id: '10',
        url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thebayhotel.net%2Fresources%2Fimages%2Fgallery%2Fguest_rooms_6.jpg&f=1&nofb=1',
        roomTitle: 'Mountain View Room',
        shortDescription: 'Breathtaking views of Table Mountain and the Twlve Apostle Mountain Range.....',
        longDescription: '',
        price: 'R2,312.00',  
    },
]

const payemnt = [
    {
        id: '1',
        method: require('../assets/visa.jpg'),
    },
    {
        id: '2',
        method: require('../assets/mastercard.jpg'),
    },
    {
        id: '3',
        method: require('../assets/paypal.png'),
    },
]

export { dummyData, dummtyHotelData, bayHotelDummyData, bayHotelRooms, payemnt };