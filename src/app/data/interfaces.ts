export interface House {
    redirectHouse: string,
    logo: string,
    name: string,
    bgImage: string,
    alt: string,
    bgHouseSections: string
}

export interface infoHouseNav {
    pathHouse: string,
    logoNav?: string,
    alt?: string,
}

//SECTION ABOUT
export interface houseAbout {
    titleDescription?: string,
    description?: string,
    nameHouse?: string,
    imgAnimal?: string,
    bgHouse?: string,
}

//SECTION ACHIEVEMENTS
export interface Character {
    name: string,
    description: string,
    photos: string[],
    descriptionFull: string
}
export interface houseAchievements {
    storieField?: string,
    characters : Character[]
}

//SECTION BECOME STUDENT
export interface houseBecomeStudent {
    welcome?: string,
    title: string,
    description: string,
    list: string[],
    cita: string,
}