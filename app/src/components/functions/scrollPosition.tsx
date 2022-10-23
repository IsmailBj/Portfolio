
export const scrollCenter = (element: string): void => {
    document.querySelector("." + element)?.scrollIntoView({behavior: "smooth"})
}