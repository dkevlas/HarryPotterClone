export interface Color {
    primary: string,
    secondary: string
}
const gryffindor: Color = {
    primary: '#A50000',
    secondary: '#FFC107'
}
const slytherin: Color = {
    primary: '#2A623D',
    secondary: '#C0C0C0'
}
const hufflepuff: Color = {
    primary: '#D4C34C',
    secondary: '#000000'
}
const ravenclaw: Color = {
    primary: '#003DA5',
    secondary: '#C0C0C0',
}

export const colorsHouse: Color[] = [
    gryffindor,
    slytherin,
    hufflepuff,
    ravenclaw,
]

export function changeColor(index: number){
    document.documentElement.style.setProperty('--primary-color', colorsHouse[index].primary);
    document.documentElement.style.setProperty('--secondary-color', colorsHouse[index].secondary);
}