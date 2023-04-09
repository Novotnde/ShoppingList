const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shoppingList',
{   
    useNewUrlParser:true, 
    useUnifiedTopology: true    
}).then(()=> {
    console.log('connection succesful');
}).catch((error)=> {
    console.log('something happened', error);
})

