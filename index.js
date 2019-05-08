const { prompt } = require('inquirer')
const { createConnection } = require('mysql2')

const db = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: `fghjkl;'`,
    database: 'bamazon_db'
})


async function viewProducts() {
    let response = await new Promise((res, rej) => {
        db.query('SELECT * FROM products', (e, r) => {
            if (e) {
                rej (e)
            } else{
                res (r)
            } 
           
        })
    })
       return response
}

// inquirer prompt for action
const getStart = _ => {
    prompt({
        type: 'list',
        name: 'starter',
        message: 'Welcome to bamazon! What do you like to do?',
        choices: ['View all products.', 'Search product and price.', 'Make purchase.', '--EXIT--']
    })
        .then(({ starter }) => {
            switch (starter) {
                case 'View all products.':
                    viewProducts()
                      .then(r =>{
                          console.log(r)
                      })
                      .catch( e => console.log(e))
                    break
                case 'Search product and price.':
                    // searchProductnPrice()
                    break
                case 'Make purchase.':
                    // makePurchase()
                    break
                case '--EXIT--':
                    process.exit()
                    break
                default:
                getStart()
                break
            }
        })
        .catch(e => console.log(e))
}
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

// check the storage of the products
// update remaining quality  
// calculate for total price


db.connect(e => e ? console.log(e) : getStart())

// check mysql connection
// db.connect(e => e? console.log(e):console.log('successful connection'))