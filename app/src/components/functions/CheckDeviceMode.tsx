export const CheckDeviceMode = (setDevice: any): void =>{
    if(window.innerWidth >= 1444){
        setDevice("dektop")
    } else if(window.innerWidth >= 1200){
        setDevice("laptop")
    } else if(window.innerWidth >= 800){
        setDevice("tablet")
    } else  if(window.innerWidth < 800){
        setDevice("mobile")
    }
   
}