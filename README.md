This is a Next.js project using Taylwind.css and MongoDB to make an e-commerce admin page.
This project was made to learn Next.js using an online tutorial : [Build a Fullstack E-commerce using Next.js ](https://www.youtube.com/watch?v=dTFXufTgfOE)
> A big thanks to Dawid for providing this tutorial and explanations!

In case you want to run it, use `yarn dev` :) 

## Connection
This project uses NextAuth.js library to handle the connection with the Google Auth provider.

<img width="327" alt="image" align="left" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/0e980325-ce7d-42c1-82e0-26fe364ada66">
Here we are using a combination of MongoDB and nextAuth libraries to create a new account inside our MongoDB database.<br/>We send a request to use google Auth and connect to our website (only if we are inside the admin list).
<br clear="left"/>

## Front page
Here is the front page that uses elements inside the [/components] folder to display each piece 
<img width="1264" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/a962bf84-3ffa-40d5-afed-aca0352ad69b">
There are currently 3 pages working, Products (to manage the products inside the database), Categories (to manage the Categories inside the database), and Orders (to display the orders made on the front page).

### Products page

The product page work like all other pages, using models made with Mongoose library and an API file to handle the calls made by the client.
<b>/models/Product.js</b>
<br />
<img width="215" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/8e418607-3930-4401-be08-f2cc2299bb0c">
<br />
<b>/api/products.js</b>
<br />
<img width="345" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/6e14dcc4-1e7f-4185-a9bd-ab6b33b9cdcd">
<br/>The data are all sent directly to the database thanks to the `mongooseConnect()` function.
<br /><br />
<i>Image of the form to add/edit a product</i>
<img width="1050" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/47593348-7536-4d88-9678-bfa92aa29381">


### Categories page

This page is made to handle the categories associated with a product. It works like the products page but is using Categorie model instead.

<img width="1055" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/e8e03c77-f7b2-4ae1-8fa7-f917ca05ba35">

### Orders page

This page is here to display all the orders made by clients. It works like the products and categories page but is using Order model instead.

<img width="1056" alt="image" src="https://github.com/Boitapain/ecommerce-admin/assets/108083652/e371c8d7-794e-4702-b5bd-80105a775483">
