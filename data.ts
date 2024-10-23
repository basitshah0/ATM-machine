
interface card {
    name:string
    number:number
    amount:number
    pin:string
    accountType:string
}

let Card:card [] = [
    {
        name:"Abdul Basit",
        number:1111222233334444,
        amount:100000,
        pin:"2568",
        accountType:"Current"
    },
    {
        name:"Taha",
        number:4444333322221111,
        amount:500000,
        pin:"7890",
        accountType:"Current"
    },
    {
        name:"Nimra",
        number:2222333344445555,
        amount:100000,
        pin:"4539",
        accountType:"Saving"
    },
    {
        name:"Noor Fatima",
        number:3333444455556666,
        amount:20000000,
        pin:"3257",
        accountType:"Current"
    },
    {
        name:"Shahid",
        number:4444555566667777,
        amount:1,
        pin:"3195",
        accountType:"Saving"
    }
]

export default Card