export interface House {
    redirectHouse: string,
    logo: string,
    name: string,
    bgImage: string,
    alt: string
}

export interface infoHouseNav {
    pathHouse: string,
    logoNav?: string,
    alt?: string,
}

export interface houseAbout {
    titleDescription?: string,
    description?: string,
    nameHouse?: string
}

export interface houseAchievements {
    storieField?: string,
}

export interface houseBecomeStudent {
    welcome?: string
}