export interface House {
    logo: string,
    name: string,
    bgImage: string,
    alt: string
}

export const allHouse: House[] = [
    {
        name: 'Gryffindor',
        logo: 'https://www.rollingstone.com/wp-content/uploads/2024/06/lisa-new-solo-music.jpg?w=1581&h=1054&crop=1',
        bgImage: 'https://elfinanciero.com.mx/resizer/v2/KHJWFNUC4FFHTAS7FD56E6N2SI.jpg?smart=true&auth=c446be5733ba2507e479f8b12ba1369704d2cfd1799b028dcdea9130f57fca06&width=1776&height=999',
        alt: 'Casa de Gryffindor'
    },
    {
        name: 'Slytherin',
        logo: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/RHP76QC6UJF5NN52BOPJBTS2WM.png',
        bgImage: 'https://media.glamour.mx/photos/66bba0a49f7f2fc7495a54e6/4:3/w_2664,h_1998,c_limit/Ros%C3%A9-de-%20BLACKPINK-peinadojpg.jpg',
        alt: 'Casa de Slytherin'
    },
    {
        name: 'Hufflepuff',
        logo: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Jennie-Kim-2023-Met-Gala-getty-1486924742-H-2023.jpg?w=1296&h=730&crop=1',
        bgImage: 'https://hips.hearstapps.com/hmg-prod/images/jennie-ruby-jane-attends-the-idol-photocall-at-the-76th-news-photo-1684928482.jpg',
        alt: 'Casa de Hufflepuff'
    },
    {
        name: 'Ravenclaw',
        logo: 'https://www.gala.fr/imgre/fit/~1~gal~2021~10~08~3e991429-fc9a-4e1b-9d1a-099cc0c98eb2.jpeg/3219x2335/quality/80/jisoo.jpeg',
        bgImage: 'https://rollingstone.com.br/media/_versions/2023/01/jisoo-blackpink-foto-divulgacao_widelg.jpg',
        alt: 'Casa de Ravenclaw'
    }
]