require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
// const host =' 192.168.1.94';
const authRoute = require("./router/auth-router");
const customerRoute = require("./router/customer-router");
const profileRoute = require("./router/profile-router");
const productRoute = require("./router/product-router");
const privilegeRoute = require("./router/privilege-router");
const csvRoute = require("./router/csv-router");
const customerloginRoute = require("./router/customerauth-router");
const formmoduleRoute = require("./router/formmodule-router");
const crudRoute = require("./router/crud-router");
const domainRoute = require("./router/domain-router.js");


const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/validate-middleware");
const errorMiddleware1 = require("./middlewares/error-middleware");


// handling cors
const corsoptions = {
    origin:'http://localhost:3000', 
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true  
}; 
app.use(cors(corsoptions)); 

app.use(express.json());
app.use('/sidebar', express.static(path.join(__dirname, 'public/sidebar')));

app.use("/api/auth", authRoute);
// app.use("/api/data", authRoute);
app.use("/api/customer", customerRoute);
app.use("/api/profile", profileRoute);
app.use("/api/product", productRoute);
app.use("/api/pri",privilegeRoute);
app.use("/api/upload", csvRoute);    
app.use("/api/customerauth", customerloginRoute);
app.use("/api/form",formmoduleRoute);
app.use("/api/crud", crudRoute);
app.use("/api/dns", domainRoute);



// otp
app.use(errorMiddleware);
app.use(errorMiddleware1);
connectDB().then( ()=>{
    app.listen(port, () =>{
        console.log(`server is running at port no ${port}`);
    });
});
