// const { links } = require("express/lib/response");

class Linked{

    constructor(data){

        this.head={
            valuie:data,
            next:null,
        }

        this.tail=this.head;

        this.size=1;

    }

    push(ui){

        const newnode={

            value:ui,
            next:null
        }

        this.tail.next=newnode;
        this.tail=newnode;
        this.size++;
    }

    unshise(ux){

        const newnode={

            value:ux,
            next:null,
        }

        newnode.next=this.head;
        this.head=newnode;
        this.size++;

    }


    //linklist ikn loop

    traversing(){

       let counter=0
       let currnet=this.head;
       while(counter<this.size){
        console.log(currnet) 
        currnet=currnet.next
        counter ++;
       }
    }


    //delete all

    delete(index){

        let counter=1;
        let lead=this.head;

        if(index===1){
            this.head=this.head.next;
        }else{
            while(counter<index-1){
                lead=lead.next;
                counter++;
            }
            let nextnode=lead.next.next;
            lead.next=nextnode;
            console.warn(lead)
        }

    }

    //search in LINKedlist


    search(data){
        let result;
        let lead=this.head;
        let loop=true;
        while(loop){
            lead=lead.next;
            loop=!!lead;
            if(loop && lead.value == data){
                loop=false;
                result=lead;
            }
        }
        console.log(result , "this is reslut")
    }

//insert node//


insert(index,Value){
    let counter=1;
    let currenode=this.head;
    while(counter>index){      
        counter++;
        currenode=currenode.next;
    }
    let nextnode=currenode.next;
    currenode.next={
        value:Value,
        next:nextnode
    }
    this.size++;
    console.log(currenode , "next")
}

}






const link=new Linked(200);
link.push(300)
link.push(400)
link.push(500)
link.unshise(100)
link.traversing()
link.delete(1);

link.search(500)
link.insert(2 , 10000010000)
console.log(link)


// class One{

//     constructor(names , gender , age , classs){


//         this.names=names;
//         this.gender=gender;
//         this.age=age;
//         this.classs=classs;
//     }

//     Age(ages){
    
    
//     // this.age+=ages

//      console.log(  this.age+=ages , "your age")
//     }
// }








// const accounts = [];
// const accountForm = document.querySelector('#accountForm');
// const name = document.querySelector('#name');
// const age= document.querySelector('#age');
// const gender=document.querySelector("#gender");
// const classs=document.querySelector("#classs");

// accountForm.addEventListener("submit" , (e)=>{

//     e.preventDefault();
//     const one=new One(name.value , gender.value , age.value , classs.value);


   
//         accounts.push(one);

//         console.log(accounts)

   
   

 

// })



// accountForm.addEventListener('submit', (e) => {

// const one=new One("jugal" , "male" , 22 , "10th");

// one.Age(10)
// console.log(one)
// });



// class Two extends One{

//     constructor(name , age , classs , gender, lang){

//         super(name , age , classs , gender)

//         this.lang=lang;
//     }

// }



// const two=new Two("kanika" , 20 , "12th" , "female" , "python");

// console.log(two)


// class Quesa{

//     constructor(){

//         this.array=[];
//     }
//     push(elemnt){

//         this.array.push(elemnt)

//     }

//     shift(){

//         if(this.array.length>0){

//             this.array.shift();
//         }
        
       

//     }


//     perrk(){

  
//   console.log(      this.array[this.array.length-1])
//     }

//     sizee(){

//     console.log(    this.array.length)
//     }

// }

// const ques=new Quesa();

// ques.push(10);
// ques.push(20);
// ques.push(30);
// ques.sizee()
// ques.perrk()
// ques.shift()
// console.log(ques)