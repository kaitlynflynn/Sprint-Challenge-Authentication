<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Middleware is code between frameworks which sends a request (req). Then the framework can create a response (res). This provides your third party extension point. 

    Sessions allow your server to store data about your client and cab be accessed across requests. 

    Bcrypt is a hashing algorithm used for password encryption. It protects us from brute-force and rainbow table attacks by slowing down hackers from as little as minutes, to days, months or even years and centuries! 

    JWT (also known as JSON Web Tokens) carries information via JSON.  They work across many different languages (node.js, JavaScript and Python to name a few) and transmit info, a payload and signature. Since these are self-contained they work great inside HTTP headers when authenticating an API. 

2.  What does bcrypt do in order to prevent attacks?
    As mentioned above, it slows hackers down a lot by taking anywhere from minutes to centuries in order to hack a password. It basically converts your password into a bunch of random characters making it near impossible to reverse. 

3.  What are the three parts of the JSON Web Token?
    Header, Payload and Signature