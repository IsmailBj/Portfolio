

export const displayimg = (project: string, device: string = 'desktop', next: number = 0): any =>{
console.log(`../../assets/img/projects/${project}/${device}/${device}`)
    const nextArray = ['one','two','three']
    let index = 0
    if(next >= 0 && next <=3) index = next
    return require(`../../assets/img/projects/${project}/${device}/${device + "-" + nextArray[index] + ".png"}`)
 }