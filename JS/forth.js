// Practice Question arrey: given a marks of students find the average marks:
{
    let marks=[85,97,44,37,76,60]
    let sum=0
    for (mark of marks){
        sum+=mark
    }
    let avg=sum/marks.length
    console.log(`The average of the class is: ${avg} `)
}
// Practice question 2: arrey has proces of five items  adn each item has a off of 10% changethe arrey to store the final proce after applying discount:
{
    let price=[250,645,300,900,50]
    for(let i=0;i<price.length;i++){
        let offer=price[i]*0.1
        price[i]-=offer
    }
    console.log(`New updated price is: ${price}`)
}

//  Arrey methords: Push() : Pop() : toString() : Concat() : Unshift():: it add elements at the start of the arrey : shift():: delete from the start of an arrey : slice(start,end) : splice():: change the pregina l arrrey (add, remove,replace)
// Splice example 
{let arr=[1,2,3,4,5,6,7]
arr.splice(2,0,101,102)
console.log(arr)}

// Practice Question: 
{
    let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
    companies.shift()
    companies.splice(1,1,"Ola")
    companies.push("Amazon")
    console.log(companies)

}