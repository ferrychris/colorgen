
var hexi = document.querySelectorAll('#hexi')
var copy = document.querySelectorAll("#copy")
var colbtn = document.getElementById('colorbtn')
var hexbk = document.querySelectorAll('#hexbk')
var body = document.getElementById("body")
var sharebtn = document.getElementById('share')


function generate(e) {
    hexi.forEach(box => {
        let randy = Math.floor(Math.random() * 16777215)
        var newrandy = "#" + randy.toString(16)
        console.log(newrandy)
        box.innerHTML = newrandy
        box.parentElement.style.backgroundColor = box.innerHTML
    })
    // function backchnge(){
    //     hexbk.forEach(element => {
    //         element.style.backgroundColor = element.parentElement.innerHTML
    //     });
    // }
    // backchnge()
};


copy.forEach((items) => {
    items.addEventListener("click", (e) => {
        console.log(e.target.previousElementSibling.previousElementSibling.innerHTML)
        navigator.clipboard.writeText(e.target.previousElementSibling.previousElementSibling.innerHTML)               
                 
    alert("Copied, you can now paste")
})
})
      sharebtn.addEventListener('click', ()=>{
        navigator.canShare("https://facebook.com/welcome")
      }) 
     
generate();