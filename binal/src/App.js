import logo from './logo.svg';
import './App.css';

function App() {

  // var x=10;
  // {
  //   var x=20;
  // }
  // console.log(x);

  // let x=10;
  // {
  //   let x=20;
  // }
  // console.log(x);

  // const x=10;
  // {
  //   const x=20;
  // }
  // console.log(x);

  // let y=5;
  // y= y + 2;
  // console.log(y);

  // const z=5;
  // z= z + 2;
  // console.log(z);

  // const a;
  // a=50;
  // console.log(a);

  // let b;
  // b=50;
  // console.log(b);

  // let arr =[10,20,30,40,50];
  // arr.map((a ,i) => console.log(a));

  // let intro = () =>{
  //   console.log("binal bodar")
  // }
  // intro();

  //map
  // const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => number * 2);
  // console.log(doubled);

  //array
  // let arr = [10,"Binal",20,30,40,50];
  // console.log(arr[4]);

  //object
  // let obj={
  //   id:10,
  //   age:20,
  //   per:30
  // }
  // console.log(obj.age);

  //push
  // let arr=[10,"Binal",20,30,40,50];
  // arr.push(99);
  // console.log(arr);

  //unshift
  // let arr=[10,"Binal",20,30,40,50];
  // arr.unshift(99);
  // console.log(arr);


  //pop
  // let arr=[10,"Binal",20,30,40,50];
  // arr.pop();
  // console.log(arr);

  //shift
  // let arr=[10,"Binal",20,30,40,50];
  // arr.shift();
  // console.log(arr);

  //splice
  // let arr=[10,"Binal",20,30,40,50];
  // arr.splice(3,0,99);//add element at specific position
  // console.log(arr);

  //splice
  // let arr=[10,"Binal",20,30,40,50];
  // arr.splice(2,1);//remove 1 element frome 2nd index
  // console.log(arr);

  //toString
  // let arr=[10,"Binal",20,30,40,50];
  // console.log(arr.toString());

  //some
  // let arr=[10,"Binal",20,30,40,50];
  // let res=arr.some((a)=>a>100);//10
  // console.log(res);

  //find
  // let arr=[10,"Binal",20,30,40,50];
  // let res=arr.find((a)=>a>10);
  // console.log(res);

  //isArray
  // let arr=[10,"Binal",20,30,40,50];
  // let res=Array.isArray(arr);
  // console.log(res);

  //   //map
  //   let array = [
  //   {id:101, name:'abacavir', quantity:25, price: 150, expiry: 2022, status: true},
  //   {id:102, name:'Eltrombopag', quantity:90, price:550, expiry:2021, status:true},
  //   {id: 103, name: 'Meloxicam', quantity: 85, price: 450, expiry: 2025, status: false},
  //   {id: 104, name: 'Allopurinol', quantity: 50, price: 600, expiry: 2023, status: true},
  //   {id: 105, name: 'Phenytoin', quantity: 63, price: 250, expiry: 2021, status: false},
  // ];
  //   let map = array.map(x => console.log(x.id, x.name, x.quantity, x.price, x.expiry, x.status));

  //   //filter
  //   function xdate(expiry){
  //     return expiry > 2022;
  //   }
  //   function func(){
  //     var filtered=[2022,2021,2025,2023,2021].filter(xdate);
  //     console.log(filtered);
  //   }
  //   func();

  //   //reduse
  //   let array1=[150,550,450,600,250];
  //   let ini=0;
  //   let sum=array1.reduce(
  //     (pre,cur)=>pre+cur,
  //     ini
  //   );
  //   console.log(sum);

  const data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  //map
  //data.map((value, index) => console.log(value.id, value.name));

  //filter
  //let filterData = data.filter((d, i) => d.expiry >=2022);
  //console.log(filterData);

  //reduce
  //let ans = filterData.reduce((acc, d, i)=>acc+d.price, 0);
  //console.log(ans);

  //filter&reduce
  //let abc=data
  //.filter((d, i)=>d.expiry>=2022)
  //.reduce((acc,d,i)=>acc+d.price,0);
  //console.log(abc);

  //[array satart]

  //let arr=[10,20,30,40,50];

  //copy
  //let arr1=[...arr];
  //console.log(arr1);

  //merge
  //let arr2=[99,...arr,100];
  //console.log(arr2);

  //destructure
  //let[maths,eng,guj,ss,sci]=arr;
  //console.log(sci);

  //[array end]

  //[object start]

  let obj ={
    id:101,
    name:"amit"
  };

  //copy
  let obj1={...obj};
  console.log(obj1);

  //merge
  let obj2={
    ...obj,
    place:"surat",
    name:"mansi"
  };
  console.log(obj2);

  //destructure
  let {id,name}=obj;
  console.log(id,name);

  //[object end]

  return (
    <>
      {/* <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Expiry</td>
          <td>Total</td>
        </tr>
        {
          data.map((value, index) => {
            return(
              <tr>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.quantity}</td>
              <td>{value.price}</td>
              <td>{value.expiry}</td>
              {index === 0 ?<td rowspan={data.length}>{abc}</td> :null}
            </tr>
            )
          })
        }
      </table> */}
    </>
  );
}

export default App;
