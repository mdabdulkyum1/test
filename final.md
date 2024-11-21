## Assignment Category: 001
## Winter Clothing Donation Website
## Project Theme
The Winter Donation web application is a simple and easy-to-use platform that helps people donate winter clothing to those in need across Bangladesh. 
When the weather gets colder, thousands of vulnerable people, especially in rural and low-income areas, struggle to stay warm because they don’t have enough warm clothing. 
This website will connect donors with volunteers for these people, making it easy for users to donate clothes and bring warmth to those who need it most. Users will see the donation campaign and browse details after login and can donate via the form. 

## Key Things You must do

## GitHub Commits: 
- Include at least 10 meaningful commits with descriptive messages.✅
Readme.md: Include a README file with the project name, purpose, live URL, key features, and any npm packages you have used.
## ❌❌❌Responsiveness: Ensure the website is fully responsive on mobile, tablet, and desktop. ❌❌❌

Environment Variables: Secure Firebase configuration keys using environment variables.✅
Unique Design:  Create a winter-themed, division-focused design that encourages local support. You can use this blog for these kinds of resources ✅
Host your Application:  You can choose deployment systems like Netlify, Surge, and Firebase for hosting. As you are developing a single-page application 
⚠️ ensure that the page doesn't throw any error on reloading from any routes.  ✅
⚠️ Add your domain for authorization to Firebase if you use Netlify / surge ✅
⚠️ Logged in User must not  redirect to Login on reloading any private route ✅ 

## Main Requirements
## Layout Structure
The whole application will be on a single-page layout. With the following components.✅

## Navbar: The design of the Navbar is Flexible.  ✅
You have to add the Site Logo,  Display the nav links  
( Home, Donation Campaigns, “How to Help,” and “Dashboard” )  ✅
Show the user’s profile photo if logged in; otherwise, display a login button.✅

## Footer: The design of the Footer is also flexible. You have to show  Contact information, social media links, and a copyright notice with your own design. ✅
### JSON Data Generation
Create a JSON data (array of objects)  with the following keys and data types for each donation campaign:
id: number✅
title: string✅
image: string✅
description: string✅
status: ✅
contactInfo: string✅
division: string✅
JSON data should include at least 2 donation Campaigns based on division.✅
You need a minimum of 6 JSON data in the array.  But it is recommended to generate as much as you can.✅ 
## Home
You have to show the following section in the default route.✅

Banner/Slider Section: Use winter-themed images with a slider (e.g., Daisy UI or Swiper) to showcase donation campaigns or local community support.✅

About Section: Explain the website’s mission and how users can contribute.✅

How It Works Section: Provide instructions for donation, information about collection points, and list supported divisions.✅

## 2  extra sections: Add 2  extra sections with your own design.✅

## 4. Donation Campaigns Page ✅
This page will show all the campaigns running on your application ✅ 
Display donation cards from your JSON data. ✅
Each card should include image, title, description, division, and a “Donate Now” button.✅
The “Donate Now” button should navigate to this details page ✅✅

Donation Details Page (Private):✅
This page is only accessible after login; redirect to the login page if the user is not authenticated. ✅
show all data available for a donation campaign on the details page. ✅
After that show a Donation Form Field:✅
Quantity of items (e.g., 2 jackets, 3 blankets) ✅
Item type (e.g., blanket, jacket, sweater)✅.
Pickup location(e.g. House 12, Road 5, Dhanmondi, Dhaka)✅
Additional notes (optional).✅
Upon submission, Display a Toast message “ Thank you ! We will reach your destination soon”. ✅
( You don't need to store the submission anywhere. Just show a toast and clear form after submitting)✅

## 6. Authentication System ✅
On Clicking the Login Button / browsing any private Route user will be redirected to this route.✅
User Login
The user will show a Login page with a form, so that the user can Log in this application. ✅
Show a Title for Login.  & Form with the following fields ✅
( Email, Password, Forget Password, Login button ) ✅

If the user logs in successfully then navigate him to his desired Route / Home page. If not, show him an error with a toast/error message anywhere in the form.✅

-- There will be some other options like ✅
Show the user a Link for Register so that he can go to the register page. ✅
Show users a Social Login Button ( Google only ) . on Clicking it ✅
user authenticates with Google✅
 Navigate him to his desired Route / Home page.✅
 
## User Registration✅
Create a register page with a form, so that the user can register himself in this application. ✅
Show a Title for registration and a Form with the following fields✅
( Name, Email, Photo-URL, Password & Register Button ) ✅

If the user registers successfully then navigate him to his Home page. If not, show him an error with a toast/error message anywhere in the form.✅

Implement password validation For password validation you need to follow the below criteria. Show a password error in the form, and don't Register for an invalid password✅
Must have an Uppercase letter in the password ✅
Must have a Lowercase letter in the password  ✅
Length must be at least 6 character ✅


There will be some other options like ✅
Show the user a Link for Login so that he can go to the Login page. ✅
Show users a Social Login Button ( Google only ) . on Clicking it ✅
user authenticates with Google ✅
 Navigate the user to the Home page.✅

 💡Don’t implement email verification method as it will inconvenience the examiner. If you want, you can add these after receiving the assignment result.✅

⚠️ Logged in User must not  redirect to Login on reloading any private route ✅

## 7. Dashboard (Private Route)  ✅
On Clicking on Dashboard,  the user will see this page.  The user will see all his Profile Information Here 
Show a welcome Title with the user name.✅
Show the user All profile information on this page such as image, email, name, and an update Button which will redirect the user to update profile route.✅
See challenges for updating profile features.✅
## Error Page ✅
404 Page: If user wants to visit invalid routes Show user a Not Found Page with a button so that user can go back to home route. ✅

## Challenges ✅✅

Implement any One Animation package on the Home Page ✅✅
AOS Package, ✅
Animate.css, 

## Forget Password ✅
Make your forgot password feature functional. Redirect the user to forget password route by clicking forget password, which will contain a form with an email field and a reset password button.✅
If a user fills in the email input on the login page. Show the email also in the forget password form.
On clicking the reset button. Redirect the user to Gmail.✅
 
## Update Information Feature
In the dashboard route, there will be an update button on Clicking it.  Take the user to update profile route. ✅
Show the user a form with 2 input fields ( photo-URL  and Name ) ✅
An Update Information button.✅
On Clicking update, update the user profile from Firebase and navigate the user to the dashboard Route✅
## Password Toggling 
Implement show and hide passwords on the registration page. ✅
By default it won’t show the password when you click on the “Eye” ✅
icon it will show the password. In this way, you need to toggle.  ✅

 ## ⚠️ Before you submit, check carefully-> you did the things mentioned in the 'Key Things You Must Do”
What to Submit
Assignment Category:
GitHub Repo Link:
Live Link:
