// For loop
// sum of first n numbers
// const n=prompt("Enter a number")
{let n=5
let sum=0
for (i=1;i<=n;i++){
    sum+=i;
}
console.log("the sum for first",n ,"number is:",sum)
}
// for-of code used for strings and arreys it acccesses all the variables from the string and arrey
{str="This is a string"
for(i of str){
    console.log("i:",i)
} 
}
// for-in loop is use for accessing the element in the object or arrey
{let student={
fullName:"Anupam Jose",
age:25,
CGPA:8.5,
isPass:true
}
for(key in student){
    console.log(key,":",student[key])
}
}
// Practice question: pront all even number from 0 to 100:
{for(i=0;i<=100;i++){
i%2==0? console.log(i):null
}}
// Practice question: gussing the correct number:
{
    let gameNumber=9
    let n=prompt("guess the number:")
    while(n!=gameNumber){
        n=prompt("guess the number again:")
    }
    console.log("you guessed the correct number")
}

// Strings Literals: it is a way to include expression in a string:
let info={
    fullName:"Anupam jose",
    age:25,
}
console.log(`My nanme is ${info.fullName} and my age is ${info.age}`)
 
// Practice question: create a user name that atarts with @ and ends witht the length of the full name
{
    let fullName=prompt("Enter your full name:")
    fullName=fullName.toLowerCase()
    fullName=fullName.replace(" ","_")
    let userName=`@${fullName}${fullName.length}`
    console.log(`your username is: ${userName}`)
}