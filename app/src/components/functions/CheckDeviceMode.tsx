export const CheckDeviceMode = (setDevice: any): void =>{
    if(window.innerWidth >= 1444){
        setDevice("dektop")
    } else if(window.innerWidth >= 900){
        setDevice("laptop")
    } else if(window.innerWidth >= 600){
        setDevice("tablet")
    } else  if(window.innerWidth < 600){
        setDevice("mobile")
    }
   
}