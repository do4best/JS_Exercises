const customer_name=[
    {name:"Meer Afzal",
contact:"0320-4522701",
email:"do4best@gmail.com",
age:45}
,
{name:"JanSher",
contact:"0320-4522700",
email:"jansher567@gmail.com",
age:30}

,
{name:"Jhon Wick",
contact:"0320-4522702",
email:"jhonwhick1122@gmail.com",
age:55}
,]
// ];
// const names=customer_name.map(name=>name.contact); // declarative
// // for(let i=0; i<customer_name.length; i++){ // imperative 
// //     names.push(customer_name[i].email)
// // }
// // console.log("Email ", names)
// // customer_name.forEach(name=>{
// //     names.push(name.email)
// // })
// // console.log(names)
// // console.log(names)
// let find =customer_name.sort((user1,user2)=>(user1.age<user2.age?-1:1))
// console.log(find)
let names=[];

for(let i=0; i<customer_name.length; i++){
    names.push(customer_name[i].email)
}
console.log("Email",names)

customer_name.forEach(name=>{
    names.push(name.email)
})
console.log(names)

let find = customer_name.map((name)=>name.contact)
console.log(find)