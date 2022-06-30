var setImages = function(oFile, year){
    let elmString = oFile[year  | "2016" ].imgs.map(img=> `<div class='one_img'><a download="${img}" href="../${year}/${img}"><img src="../${year}/800/${img}"/></a></div>`).join("")
    // Promise.all(oFile[year  | "2016" ].imgs.map(img=> {
    //     return new Promise((resolve,reject)=>{
    //         let elm = new Image()
    //         // elm.style.display = "none"
    //         // elm.style.width = "100%"
    //         // elm.style.height = "100%"
    //         // document.body.appendChild(elm)
    //         elm.onload = ()=>{
    //             console.log(elm)
    //             console.log(elm.clientWidth)
    //         }
    //         elm.src = `../${year}/800/${img}`

    //         resolve(`<div class='one_img' style='background-image: url(../${year}/800/${img})'></div>`)
    //     })
    // })).then(rz=>{
    //     console.log(rz)
    // })
    window.ImageBox.innerHTML =`<div class="img_wrap">${elmString}</div>` 
}