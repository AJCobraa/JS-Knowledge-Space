// comditional statement
{let age=19
let votingAge=18
if (age>=votingAge){
    console.log("yes you can vote as you age is:", age)
}else{
    console.log("No you cannot vote as your age is:",age)
}
}

// using tirtary operator 
{
    let age=20
    let votingAge=18
    let yes = "yes you can vote"
    let no= "No you cannot vote"
    age>=votingAge ? console.log(yes,":", age):console.log(no,":",age)
}
{
    let age=prompt("Enter your age")
    age%5==0 ? console.log("Yes you can vote"):console.log("No you cannot vote")
}