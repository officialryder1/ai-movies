import { writable } from "svelte/store"

let initialTheme = 'light'
if(typeof window !== "undefined"){
    const savedTheme = localStorage.getItem('theme')
    initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

}
export const theme = writable(initialTheme)

if(typeof window !== 'undefined'){
    theme.subscribe((value) => {
        document.documentElement.classList.toggle('dark', value === 'dark')
        localStorage.setItem('theme', value)
    })
}