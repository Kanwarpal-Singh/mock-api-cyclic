// fetch(`https://wild-tan-gharial-ring.cyclic.app/cats`)
// .then((res)=>{
// return res.json()
  
// }).then((data)=>{
//   // console.log(data)
//   displaydata(data)
// }).catch((err)=>{
//   console.log(err)
// })

// displaydata=(data)=>{
//   // console.log(data)
//   let box = document.getElementById("parent");
 
//   data.map((el)=>{
//     box.innerHTML += `<h2 class="name">${el.name}</h2>`
//   })
// }

//create td

function td_fun(username,email){
  let td=document.createElement("tr")
  td.innerHTML=`<td class="px-6 py-4 whitespace-nowrap">
  <div class="flex items-center">
      <div class="flex-shrink-0 h-10 w-10">
          <img src="https://images.img.com" alt="">
      </div>
      <div class="ml-4">
          <div class="text-sm font-medium-text">
              ${username}
          </div>
          <div class="text-sm text-grey-500">${email}</div>
      </div>
  </div>
</td>`;
return td;
}
let tbody = document.getElementById("tbody");


fetch("http://localhost:3000/user")
.then(res =>res.json())
.then(json=>{
  json.map(data=>{
    console.log(data.username)
    tbody.append(td_fun(data.username,data.email))
  })
})