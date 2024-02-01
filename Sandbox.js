// practise arrow fuctions 

const great = function(){
    return 'hello world';
};

const graet /*greet*/ = () => 'hello, world';
const result = graet()/*greet*/;
console.log(result);

const bill = function(products, tax)
{
    let total = 0;
    for(let i=0; i<products.length; i++)
    {
        total += products[i] + products[i] * tax;
    }
    return total;
}

const name = 'shaun';

 //functions

 const greeat1 = () => 'hello';

 let resultOne = greet1();
 console.log(resultOne);


 //methods

 let resultTwo = name1.toUpperCase();
 console.log(resultTwo);


 // callbacks & foreach

 const muFunc = (callbackFunc) =>
 {
    let value = 50;
    callbackFunc(value);
 };


muFunc(function(value){
    console.log(value);
});

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const logPerson = (person, index) => {
    console.log(`${index} - heelo ${person}`);
};

people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelecter('.people');
const people1 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;
people.forEach(function(person){
    // create html template 
    html += `<li style = "color': purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
