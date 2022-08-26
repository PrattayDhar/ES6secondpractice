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