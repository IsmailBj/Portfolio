
let index = 0
export const nextImgfun = (setNext: any, status: string): void =>{

    if(status==="next" && index <=1){
        index++
    }else if(status==="prev" && index >= 1){
        index--
    }

    setNext(index)
}