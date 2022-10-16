
export const scrollCenter = (element: string) => {
    document.querySelector("." + element)?.scrollIntoView({behavior: "smooth"})
}