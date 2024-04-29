const base = require('@playwright/test')

exports.customTest = base.test.extend(
    {
    testdataForContactUs:{
        firstName :"suvarna",
        lastName:"chaskar",
        email:"suvarnarahane@gmail.com",
        msg:"I am learning JavaScript"
    }
})