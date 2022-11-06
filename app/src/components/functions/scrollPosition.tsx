
export const scrollCenter = (element: string, isMobile?: String, setIsMenu?: any): void => {
    if(isMobile === "mobile"){
        setIsMenu(false)
    }
    document.querySelector("." + element)?.scrollIntoView({behavior: "smooth"})
}