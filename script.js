var wrapper= document.body;
var store =[
      {
        brand:"Fender",
        name: "Brad Paisley Esquire",
        type:"Guitar",
        price:1399.99,
        img:""
      
      },
       {
        brand:"Yamaha",
        name: "GB1K Series",
        type:" Grand Piano",
        price:14999.00,
        img:""
        
      },
      {
        brand:"Maton",
        name: "BB1200",
        type:"Electric Guitar",
        price:2999.00,
        img:""
      },
      {
        brand:"Fender",
        name: "Parallel Universe Volume II Maverick Dorado",
        type:"Guitar",
        price:2499.99,
        img:""
      },
      {
        brand:"Yamaha",
        name: "S7X Series",
        type:"Grand Piano",
        price:104999,
        img:""
      },
      {
        brand:"Maton",
        name: "The Maton EBG Series",
        type:"Acoustic Guitar",
        price:2799.00,
        img: ""
      }
];

var more=[];
function cover(name, type, brand,img){
  var that=this;
  this.name= name;
  this.tpye= type;
  this.brand= brand;
  this.img =img;
  this.ele= document.createElement("div");
  this.buttonEle= document.createElement('button');
  this.ele.className="instrument";
  this.nameEle=document.createElement('div');
  this.imgEle=document.createElement('img');
  
  this.nameEle.style.fontSize="18px";
  this.nameEle.style.color="black";
   this.nameEle.innerHTML="Name: "+this.name;
  this.nameEle.style.justifyContent="center"; 
  this.buttonEle.style.alignItems="center";
  this.buttonEle.style.justifyContent="center";
  this.buttonEle.innerHTML = "Add to Cart";
 
  this.ele.appendChild(this.imgEle);
  this.ele.appendChild(this.nameEle);
  this.ele.appendChild(this.buttonEle);
  
  this.ele.addEventListener("mouseover", function(){
    that.Color();
    
  })
  this.ele.addEventListener("mouseout", function(){
    that.Back();
  })
  this.ele.addEventListener("click", function(){
    
    that.Show();
  })
  this.buttonEle.addEventListener("click", function(){
    
  })
  wrapper.appendChild(this.ele);
}

cover.prototype.Color=function(){
  if(this.brand == "Fender"){
    this.ele.style.backgroundColor="red";
    this.nameEle.style.color="white";
  }else if
    (this.brand == "Yamaha"){
     this.ele.style.backgroundColor="green";
    }else{
     this.nameEle.style.color="white";
     this.ele.style.backgroundColor="blue";
     this.nameEle.style.color="white";
    }
  
}
cover.prototype.Back= function(){
  this.ele.style.backgroundColor="white";
  this.nameEle.style.color="black";
}


cover.prototype.Show= function(name, brand, type, price){
  var that=this;
  this.popEle=document.createElement("div");
  this.popEle.className="PopDiv";
  this.name= name;
  this.brand= brand;
  this.type = type;
  this.price= price;
  this.nameEle= document.createElement("h3");
  this.brandEle= document.createElement('h3');
  this.typeEle= document.createElement("h3");
  this.priceEle= document.createElement("h3");
       this.buttonEle=document.createElement('button');
  this.exitEle=document.createElement("button");
  
  this.exitEle.innerHTML="X";
  this.nameEle.innerHTML= "Name: " + this.name;
  this.brandEle.innerHTML="Brand: " + this.brand;
  this.typeEle.innerHTML="Instrument Type: " +this.type;
  this.priceEle.innerHTML= "Price:$ " + this.price;  
  this.buttonEle.innerHTML= "Add to Cart";
  
  this.popEle.appendChild(this.exitEle);
  this.popEle.appendChild(this.nameEle);
  this.popEle.appendChild(this.brandEle);
  this.popEle.appendChild(this.typeEle);
  this.popEle.appendChild(this.priceEle);
   this.popEle.appendChild(this.buttonEle);
  
 
  wrapper.appendChild(this.popEle);
  
  
}


  
  






for(var i=0; i<store.length; i++){
  more.push(new cover(store[i].name))
}