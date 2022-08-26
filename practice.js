// 31 - 2 Access Value, nested object Optional chaining c

const user= [{id:12,name:'hasan', job:'ghum'}]
// console.log(user[0].name);
const data ={
    count :5000,
    data:[
        {id:358, name:'Shithi',job:'centy'},
        {id:063, name:'MIM',job:'bbs'},

    ]
}
// console.log(data.data[0].name);


// 3 Array map to do one line loop magic
const numbers =[2,8,4,6,3];
const output =[];
for(const number of numbers){
    const double =number*2;
    output.push(double);
}
// console.log(output);

function getdouble(numbers){
    const output= [];
    for (const number of numbers){
        const double=number*2
        output.push(double);
    }
    return output;
}
const result =getdouble(numbers);
// console.log(result);

// Make it easy by map 

const dobbl =num=>num*2;
const makedbl =numbers.map(dobbl);
// console.log(makedbl); 

const makedbl2= numbers.map(x=>x*2);
// console.log(makedbl2);
const fivetimes =[1,2,3,4,5].map(x=>x*3);
// console.log(fivetimes);

// 31 - 4 Map string array, array of objects map, foreach

const objecttypearry = [
    {id :21, name: 'hasan', job:'ghum'},
    {id :21, name: 'mim', job:'ghum'},
    {id :21, name: 'shihi', job:'ghum'},
];
const items = objecttypearry.map(ob=>ob.name);
// console.log(items);
 
// Foreach also work like map but its not give return///***/

// mplement filter, find on an array of objects

const numb = [12,10,20,21,32,43,141];
const bignuim = numb.filter(numer=> numer>20)
// console.log(bignuim);

// find only take 1st condition 

const numberee = [12,4,14,15,18,20]
const findruse = numberee.find(num=>num%5 ===0)
console.log(findruse);

// Class, constructor, method, create object from class


class instractor{
    name;
    designation='web devoloper'
    team= 'devoloper'
    location;

    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    starttime(time){
        console.log(`Strat time ${time}`)

    }
    quizmodule(module){
        console.log( `craet module ${module}`);

    }
}


const hasan = new instractor('hasan','uganda');
console.log(hasan);
hasan.starttime('9')
hasan.quizmodule(30)