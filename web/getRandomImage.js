var getRandomImage = function(oFile){
    let years = [2016,2017,2018,2019,2020,2021,2022]
    let year = years[Math.random()*years.length | 0]
    let imgs = oFile[year]["800"]
    let img = imgs[Math.random()*imgs.length | 0]
    return `${year}/800/${img}`
}