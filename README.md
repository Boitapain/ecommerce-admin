This is a Next.js project using Taylwind.css and MongoDB to make an e-commerce admin page. 

In case you want to run it, use `yarn dev` :) 

## Connection
This project uses NextAuth.js library to handle the connection with the Google Auth provider.

<img width="327" align="left" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/f4f69f76-edfc-45d3-a1c6-963b2744a3af">Here we are using a combination of MongoDB and nextAuth libraries to create a new account inside our MongoDB database.<br/>We send a request to use google Auth and connect to our website (only if we are inside the admin list).
<br clear="left"/>

## Front page
Here is the front page that uses elements inside the [/components] folder to display each piece 
<img width="1264" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/2124f8a2-ca6e-465e-892a-9cd950a2cb60">
There are currently 3 pages working, Products (to manage the products inside the database), Categories (to manage the Categories inside the database), and Orders (to display the orders made on the front page).

### Products page

The product page work like all other pages, using models made with Mongoose library and an API file to handle the calls made by the client.
<b>/models/Product.js</b>
<br />
<img width="215" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/be926065-da11-405e-8166-5d6a13080e68">
<br />
<b>/api/products.js</b>
<br />
<img width="345" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/22af5703-fdcc-4d24-80b2-818c29ecb70a">
<br/>The data are all sent directly to the database thanks to the `mongooseConnect()` function.
<br /><br />
<i>Image of the form to add/edit a product</i>
<img width="1050" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/7cad6464-859b-4cb3-9eee-3bfeb6b5632e">

### Categories page

This page is made to handle the categories associated with a product.

<img width="1052" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/be69f0a0-11a8-4a87-abdc-f26ed46fa332">

### Orders page

This page is here to display all the orders made by clients.

<img width="1053" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/0bd5e3c6-bc13-482a-8873-1c863baf9a15">

