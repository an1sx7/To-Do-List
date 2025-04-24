let inp=document.getElementById('inp')
let list=document.getElementById('un')
let list2=document.getElementById('ch')
new Sortable(list,{
  group:"shared",
  animation:150,
  onEnd:function(){
    save()
  }
})
new Sortable(list2,{
  group:"shared",
  animation:150,
  onEnd:function(){
    save()
  }
})
function add(){
  if(inp.value!=""){
    let li=document.createElement('li')
    li.innerHTML=inp.value
    list.appendChild(li)
    inp.value=""
    save()
  }
  else{
    swal.fire({
      title:"Warning",
      text:"Enter Something to add",
      icon:"warning",
      backdrop:false,
      width:"90%",
      confirmButtonColor:"orange"
    })
  }
}

function save() {
  localStorage.setItem("un",list.innerHTML)
  localStorage.setItem("ch",list2.innerHTML)
}

function got() {
  list.innerHTML=localStorage.getItem("un")
  list2.innerHTML=localStorage.getItem("ch")
}
got()

function clearAll(){
  list2.innerHTML=""
  localStorage.removeItem("ch")
}

let delay=7* 24 * 60 * 60 * 1000
setTimeout(()=>{
  list2.innerHTML=""
  localStorage.removeItem("ch")
},delay)
