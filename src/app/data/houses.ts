import { gryffAbout } from "./houses/gryffindor/gryffAbout"
import { gryffAchievements } from "./houses/gryffindor/gryffAchievements"
import { gryffBecomeStudent } from "./houses/gryffindor/gryffBecomeStudent"
import { gryffindor } from "./houses/gryffindor/gryffindor"
import { gryffStorie } from "./houses/gryffindor/gryffStorie"
import { huffleAbout } from "./houses/hufflepuff/huffleAbout"
import { huffleAchievements } from "./houses/hufflepuff/huffleAchievements"
import { huffleBecomeStudent } from "./houses/hufflepuff/huffleBecomeStudent"
import { hufflepuff } from "./houses/hufflepuff/hufflepuff"
import { huffleStorie } from "./houses/hufflepuff/huffleStorie"
import { ravenAbout } from "./houses/ravenclaw/ravenAbout"
import { ravenAchievements } from "./houses/ravenclaw/ravenAchievements"
import { ravenBecomeStudent } from "./houses/ravenclaw/ravenBecomeStudent"
import { ravenclaw } from "./houses/ravenclaw/ravenclaw"
import { ravenStorie } from "./houses/ravenclaw/ravenStorie"
import { slytherAbout } from "./houses/slytherin/slytherAbout"
import { slytherAchievements } from "./houses/slytherin/slytherAchievements"
import { slytherBecomeStudent } from "./houses/slytherin/slytherBecomeStudent"
import { slytherin } from "./houses/slytherin/slytherin"
import { slytherStorie } from "./houses/slytherin/slytherStorie"
import { House, houseAbout, houseAchievements, houseBecomeStudent, infoHouseNav, Storie } from "./interfaces"

export const allHouse: House[] = [
    {
        redirectHouse: 'gryffindor',
        name: 'Gryffindor',
        logo: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Gryffindor-Essence.webp',
        bgImage: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Gryffindor-Vibes-Valentia.webp',
        alt: 'Casa de Gryffindor',
        bgHouseSections: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/Sala-Comun-Gryffindor-Refugio-Valiente.webp'
    },
    {
        redirectHouse: 'slytherin',
        name: 'Slytherin',
        logo: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Slytherin-Essence.webp',
        bgImage: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Slytherin-Vibes-Astucia.webp',
        alt: 'Casa de Slytherin',
        bgHouseSections: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/Sala-Comun-Slytherin-El-Nido-de-Serpientes.webp',
    },
    {
        redirectHouse: 'hufflepuff',
        name: 'Hufflepuff',
        logo: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Hufflepuff-Essence.webp',
        bgImage: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Hufflepuff-Vibes-Lealtad.webp',
        alt: 'Casa de Hufflepuff',
        bgHouseSections: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/Sala-Comun-Hufflepuff-El-Hogar-de-los-Leales.jpg'
    },
    {
        redirectHouse: 'ravenclaw',
        name: 'Ravenclaw',
        logo: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Ravenclaw-Essence.webp',
        bgImage: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/home/Ravenclaw-Vibes-Inteligencia.webp',
        alt: 'Casa de Ravenclaw',
        bgHouseSections: 'https://global-media-repository.s3.us-east-2.amazonaws.com/clones/Harry-Potter/Sala-Comun-Ravenclaw-El-Santuario-del-Conocimiento.webp'
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
export const houseStorie: Storie[] = [
    gryffStorie,
    slytherStorie,
    huffleStorie,
    ravenStorie
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