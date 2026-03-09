exports.showSchemesPage = (req,res)=>{
res.render("scheme/schemes",{result:null})
}

exports.getSchemeDetails = (req,res)=>{

const {scheme} = req.body

const schemeData = {

pmkisan:{
name:"PM Kisan Samman Nidhi",
description:"Provides income support to farmers.",
benefits:"₹6000 per year given in 3 installments.",
eligibility:"Small and marginal farmers."
},

pmfby:{
name:"PM Fasal Bima Yojana",
description:"Crop insurance scheme.",
benefits:"Protection against crop loss due to natural disasters.",
eligibility:"Farmers growing notified crops."
},

kcc:{
name:"Kisan Credit Card",
description:"Provides easy credit to farmers.",
benefits:"Low interest agricultural loans.",
eligibility:"Farmers with cultivable land."
},

soil:{
name:"Soil Health Card",
description:"Provides soil nutrient status.",
benefits:"Helps farmers choose proper fertilizers.",
eligibility:"All farmers."
},

sinchai:{
name:"PM Krishi Sinchai Yojana",
description:"Improves irrigation facilities.",
benefits:"Financial support for irrigation systems.",
eligibility:"Farmers and agriculture groups."
}

}

const result = schemeData[scheme]

res.render("scheme/schemes",{result})

}