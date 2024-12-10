// Function 2 num sum
{
function firstFun(a,b){
    let sum=a+b
    return sum
}
 let Sum=firstFun(2,3);
 console.log(Sum)
}
// Arrow function const funName=(input1, input2)=>{logic}
{
    const s=(a,b)=>{
        console.log(a+b)
    }
    // console.log(sum(1,2))
}
// Practice question: findnumber of vovels in a string:
{
    let str="Anupam"
    function count(str){
        str=str.toLowerCase()
        let v="aeiou"
        let c=0
        for (i of str){
            if (v.includes(i)){
                c+=1
            }
        }
        return c
    }
    let cnt = count(str)
    console.log(`The total number of vovels in the string ${str} is ${cnt}`)
    
    
}

// code using arrow function:
{
    // const count = (str)=>{
    //     str=str.toLowerCase()
    //     v='aeiou'
    //     cnt=0
    //     for(i of str){
    //         if (v.includes(i)){
    //             cnt+=1
    //         }
    //     }
    //     return cnt

    // }
    // let str=prompt("Enter a string")
    // console.log(`The number of vovle in the strring ${str} is ${count(str)}`)
}
{

    function vov(s){
        s=s.toLowerCase()
        const vovle="aeiou"
        c=0
        for (i of s){
            if (vovle.includes(i)){
                c+=1
            }
        }
        return c

    }
    s="Anupam"
    console.log(vov(s))
}
{
    const vovl=(s)=>{
        v="aeiou"
        s=s.toLowerCase()
        c=0
        for(i of s){
            if (v.includes(i)){
                c+=1
            }
        }
        return c
    }
    s="Shreya"
    console.log(vovl(s))
}
{
    let arr=[1,2,3,4,5]
    arr.forEach(function fun(val){
        console.log(val)
    })
}{
    let arr=[5,4,3,2,1]
    arr.forEach((val,i)=>{
        console.log(val,i)

    })
}
{
    // practice: question : pront the square of each number in an arrey 
    let arr=[1,2,3,4,5,6,7,8,9,10]
    arr.forEach((val)=>{
        console.log(`square of ${val} = ${val**2}`)
    })


}
{
    // arrey.map( function: use to create a new )
    let arr=[1,2,3,4,5,6]
    console.log("------------Map finction-----------")
    const fun=(val)=>{
        return val*val
    }
    let newArr=arr.map(fun)
    console.log(newArr)
}
{
    // filter function: arr.filter()
    let arr=[10,20,97,91,95,30,40,50,60,70,80,90,98,94,93]
    console.log("------------filter finction-----------")
    const marks=(val)=>{
        return val>=90
    }
    const topperMarks=arr.filter(marks)
    console.log(`Topper marks are [${topperMarks}]`)


}
{
    // reduce function: used when we wan to output a single interge
    let n=prompt("enter a number")
    let arr=[]
    for (i=0;i<n;i++){
        arr[i]=i+1
    }
    let sum=arr.reduce((pre,curr)=>{
        return pre+curr
    })
    console.log(`sum of all [${arr}] numbers is ${sum}`)
    let mul=arr.reduce((pre,curr)=>{
        return pre*curr
    })
    console.log(`multiplaction of all [${arr}] numbers is ${mul}`)

}