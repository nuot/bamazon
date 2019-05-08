const { prompt } = require('inquirer')
const { createConnection } = require('mysql2')

const db = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: `fghjkl;'`,
    database:'bamazon_db'
})

// inquirer prompt for action
// search a product by ID
const searchProductnPrice = _ =>{
    prompt([{
        type: 'input',
        name: 'itemid',
        message:'Search a product by ID:'
    },
    {
        type: 'input',
        name: 'quality',
        message:'How many items do you like to buy?'
    }
])
    .then(({ react }) => {
        var itemRequest = itemid;
        var qualityRequest = quality;
        yourOrder(itemid, quality)
    })
    
}

const yourOrder = _ =>{
    db.query('SELECT * FROM products', (e ,r )=>{
        if (e) throw e
        console.log(r)
    })
}
// how many units to purchase
// check the storage of the products
// update remaining quality
// calculate for total price


db.connect(e => e ? console.log(e): yourOrder())

// check mysql connection
// db.connect(e => e? console.log(e):console.log('successful connection'))