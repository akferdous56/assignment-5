   document.getElementById("btn-1").addEventListener("click",function(){
    
    alert("bord update sucessfully")
 const count = document.getElementById("count-num").innerText
 const sub = count - 1
 document.getElementById("count-num").innerText = sub


 const add = document.getElementById("count-add").innerText
 const convertNum = parseInt(add)
 const sum = convertNum +1
 document.getElementById("count-add").innerText = sum
  
 const container = document.getElementById("trans-data")
 
 const now = new Date();
    const time =now.toLocaleTimeString();
 
 const paid = document.createElement("p")
 paid.classList.add("bg-gray-100")
 paid.classList.add("m-2")
 paid.classList.add("rounded-xl")
 paid.classList.add("p-2")
 paid.classList.add("bg-gray-100")
 paid.innerText=` You have Complete The Fix Mobile Button Issue at ${time} 
 `
 
container.appendChild(paid)

document.getElementById("btn-1").disabled = true

})

// button 2 


document.getElementById("btn-2").addEventListener("click" , function(){
    alert("bord update sucessfully")
    const count = document.getElementById("count-num").innerText
    const sub = count - 1
    document.getElementById("count-num").innerText = sub
   
   
    const add = document.getElementById("count-add").innerText
    const convertNum = parseInt(add)
    const sum = convertNum +1
    document.getElementById("count-add").innerText = sum

    
    
    const container = document.getElementById("trans-data")
    const now = new Date();
    const time =now.toLocaleTimeString();
 
 const paid = document.createElement("p")
 paid.classList.add("bg-gray-100")
 paid.classList.add("m-2")
 paid.classList.add("rounded-xl")
 paid.classList.add("p-2")
 paid.classList.add("bg-gray-100")
 paid.innerText=` You have Complete The Task Add Dark Mode at ${time}  
 `
 
container.appendChild(paid)

    document.getElementById("btn-2").disabled = true
})


// button----3

document.getElementById("btn-3").addEventListener("click" , function(){
    alert("bord update sucessfully")
    const count = document.getElementById("count-num").innerText
    const sub = count - 1
    document.getElementById("count-num").innerText = sub
   
   
    const add = document.getElementById("count-add").innerText
    const convertNum = parseInt(add)
    const sum = convertNum +1
    document.getElementById("count-add").innerText = sum

    const container = document.getElementById("trans-data")
    const now = new Date();
    const time =now.toLocaleTimeString();
 
 
     const paid = document.createElement("p")
     paid.classList.add("bg-gray-100")
     paid.classList.add("m-2")
     paid.classList.add("rounded-xl")
     paid.classList.add("p-2")
     paid.classList.add("bg-gray-100")
     paid.innerText=` You have Complete The Optimize Home page at ${time} 
     `
 
    container.appendChild(paid)

    document.getElementById("btn-3").disabled = true
  })


// btton----4

 document.getElementById("btn-4").addEventListener("click" , function(){
    alert("bord update sucessfully")
    
    const count = document.getElementById("count-num").innerText
    const sub = count - 1
    document.getElementById("count-num").innerText = sub
   
   
    const add = document.getElementById("count-add").innerText
    const convertNum = parseInt(add)
    const sum = convertNum +1
    document.getElementById("count-add").innerText = sum
    const container = document.getElementById("trans-data")
    const now = new Date();
    const time =now.toLocaleTimeString();
 
 
 const paid = document.createElement("p")
 paid.classList.add("bg-gray-100")
 paid.classList.add("m-2")
 paid.classList.add("rounded-xl")
 paid.classList.add("p-2")
 paid.classList.add("bg-gray-100")
 paid.innerText=` You have Complete The Add new emoji 🤲at ${time} 
 `
 
container.appendChild(paid)

    document.getElementById("btn-4").disabled = true
  })

//   btn----5

 document.getElementById("btn-5").addEventListener("click" , function(){
    alert("bord update sucessfully")
    const count = document.getElementById("count-num").innerText
    const sub = count - 1
    document.getElementById("count-num").innerText = sub
   
   
    const add = document.getElementById("count-add").innerText
    const convertNum = parseInt(add)
    const sum = convertNum +1
    document.getElementById("count-add").innerText = sum
    const container = document.getElementById("trans-data")
    const now = new Date();
    const time =now.toLocaleTimeString();
 
 
 const paid = document.createElement("p")
 paid.classList.add("bg-gray-100")
 paid.classList.add("m-2")
 paid.classList.add("rounded-xl")
 paid.classList.add("p-2")
 paid.classList.add("bg-gray-100")
 paid.innerText=` You have Complete Integrate OpenAI API at ${time} 
 `
 
container.appendChild(paid)

    document.getElementById("btn-5").disabled = true
  })
     
//   btn----6

 document.getElementById("btn-6").addEventListener("click" , function(){
    alert("bord update sucessfully")
    alert("sucessfully")
    const count = document.getElementById("count-num").innerText
    const sub = count - 1
    document.getElementById("count-num").innerText = sub
   
   
    const add = document.getElementById("count-add").innerText
    const convertNum = parseInt(add)
    const sum = convertNum +1
    document.getElementById("count-add").innerText = sum
    const container = document.getElementById("trans-data")
    const now = new Date();
    const time =now.toLocaleTimeString();
 
 
 const paid = document.createElement("p")
 paid.classList.add("bg-gray-100")
 paid.classList.add("m-2")
 paid.classList.add("rounded-xl")
 paid.classList.add("p-2")
 paid.classList.add("bg-gray-100")
 paid.innerText=` You have Complete The Improve Job searching at ${time} 
 `
 
container.appendChild(paid)

    document.getElementById("btn-6").disabled = true
  })

  document.getElementById("theme").addEventListener("click", function(){
   const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
   document.body.style.backgroundColor = randomColor;

 

  });

  

  
  