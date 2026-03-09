exports.showMarketPage = (req,res)=>{
    res.render("market/market",{result:null})
}

exports.getMarketPrice = (req,res)=>{

const {crop,state} = req.body

const marketData = {

rice:{minPrice:1800,maxPrice:2200,avgPrice:2000},
wheat:{minPrice:2000,maxPrice:2400,avgPrice:2200},
maize:{minPrice:1500,maxPrice:1900,avgPrice:1700},
cotton:{minPrice:5500,maxPrice:6200,avgPrice:5900},
onion:{minPrice:1200,maxPrice:1800,avgPrice:1500}

}

const data = marketData[crop]

const result = {
crop,
state,
minPrice:data.minPrice,
maxPrice:data.maxPrice,
avgPrice:data.avgPrice
}

res.render("market/market",{result})

}