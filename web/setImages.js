var setImages = function(oFile, year){
    let elmString = oFile[year  | "2016" ].imgs.map(img=> `<div class='one_img' style='background-image: url(../${year}/800/${img})'></div>`).join("")
    window.ImageBox.innerHTML =`<div class="img_wrap">${elmString}</div>` 
}