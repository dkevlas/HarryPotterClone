import { gryffAbout } from "./houses/gryffindor/gryffAbout"
import { gryffAchievements } from "./houses/gryffindor/gryffAchievements"
import { gryffBecomeStudent } from "./houses/gryffindor/gryffBecomeStudent"
import { gryffindor } from "./houses/gryffindor/gryffindor"
import { huffleAbout } from "./houses/hufflepuff/huffleAbout"
import { huffleAchievements } from "./houses/hufflepuff/huffleAchievements"
import { huffleBecomeStudent } from "./houses/hufflepuff/huffleBecomeStudent"
import { hufflepuff } from "./houses/hufflepuff/hufflepuff"
import { ravenAbout } from "./houses/ravenclaw/ravenAbout"
import { ravenAchievements } from "./houses/ravenclaw/ravenAchievements"
import { ravenBecomeStudent } from "./houses/ravenclaw/ravenBecomeStudent"
import { ravenclaw } from "./houses/ravenclaw/ravenclaw"
import { slytherAbout } from "./houses/slytherin/slytherAbout"
import { slytherAchievements } from "./houses/slytherin/slytherAchievements"
import { slytherBecomeStudent } from "./houses/slytherin/slytherBecomeStudent"
import { slytherin } from "./houses/slytherin/slytherin"
import { House, houseAbout, houseAchievements, houseBecomeStudent, infoHouseNav } from "./interfaces"

export const allHouse: House[] = [
    {
        redirectHouse: 'gryffindor',
        name: 'Gryffindor',
        logo: 'https://www.rollingstone.com/wp-content/uploads/2024/06/lisa-new-solo-music.jpg?w=1581&h=1054&crop=1',
        bgImage: 'https://es.rollingstone.com/wp-content/uploads/2024/08/LISA-min.jpg',
        alt: 'Casa de Gryffindor'
    },
    {
        redirectHouse: 'slytherin',
        name: 'Slytherin',
        logo: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/RHP76QC6UJF5NN52BOPJBTS2WM.png',
        bgImage: 'https://media.glamour.mx/photos/66bba0a49f7f2fc7495a54e6/4:3/w_2664,h_1998,c_limit/Ros%C3%A9-de-%20BLACKPINK-peinadojpg.jpg',
        alt: 'Casa de Slytherin'
    },
    {
        redirectHouse: 'hufflepuff',
        name: 'Hufflepuff',
        logo: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Jennie-Kim-2023-Met-Gala-getty-1486924742-H-2023.jpg?w=1296&h=730&crop=1',
        bgImage: 'https://hips.hearstapps.com/hmg-prod/images/jennie-ruby-jane-attends-the-idol-photocall-at-the-76th-news-photo-1684928482.jpg',
        alt: 'Casa de Hufflepuff'
    },
    {
        redirectHouse: 'ravenclaw',
        name: 'Ravenclaw',
        logo: 'https://www.gala.fr/imgre/fit/~1~gal~2021~10~08~3e991429-fc9a-4e1b-9d1a-099cc0c98eb2.jpeg/3219x2335/quality/80/jisoo.jpeg',
        bgImage: 'https://external-preview.redd.it/blackpinks-jisoo-will-reportedly-join-her-brothers-company-v0-x4PHMfEUKELYylJIeLxREVdMxCI0GadHcS2Uxm6dycw.jpg?auto=webp&s=a1cd966b5962842eb9228637e48db9d1cd8edc34',
        alt: 'Casa de Ravenclaw'
    }
]

export const infoNav: infoHouseNav[] = [
    gryffindor,
    slytherin,
    hufflepuff,
    ravenclaw
]

export const houseInfoAbout: houseAbout[] = [
    gryffAbout,
    slytherAbout,
    huffleAbout,
    ravenAbout
]

export const houseInfoAchievements: houseAchievements[] = [
    gryffAchievements,
    slytherAchievements,
    huffleAchievements,
    ravenAchievements,
]

export const houseInfoBecomeStudent: houseBecomeStudent[] = [
    gryffBecomeStudent,
    slytherBecomeStudent,
    huffleBecomeStudent,
    ravenBecomeStudent
]