# Adnan-Lab02   
**Name:** Adnan Sheet

**URL:**` https://adnan-lab02.herokuapp.com/`

**Name of the Endpoint:**

**Addition** 

`https://adnan-lab02.herokuapp.com/calc?operation=add&numberone=1&numbertwo=2`

**Substraction**

`https://adnan-lab02.herokuapp.com/calc?operation=sub&numberone=1&numbertwo=2`
 
 **Division**

`https://adnan-lab02.herokuapp.com/calc?operation=div&numberone=1&numbertwo=2`

**Multiplication**

`https://adnan-lab02.herokuapp.com/calc?operation=mul&numberone=1&numbertwo=2`


In this lab we are going to create an application using node.js with express and it will initially have four functions. Those are addition, subtraction, multiplication and division. A client will pass two numbers and operation type using the browser and this application will return a response according to the operation. For this we have an index.js file in which all codes are written. To create the application we installed express using npm install and imported it in our index.js file. Express will help to run our server on port 3000. And it will return a response on /calc route. So if a client passes a proper operation type (stated above) and two numbers then this application will return a response to the browser. So in the browser we are passing the values in the url so we can access it from our backend using the query string. We are extracting two numbers and operation using req.query and then converting the numbers into integers as browsers pass the numbers as string value. Then we used an if-else conditional block to handle each operation and stored the result in a variable called result. Finally we returned the result variable to the browser. I used heroku to host this application which can be found on `https://adnan-lab02-herokuapp.com` route.
