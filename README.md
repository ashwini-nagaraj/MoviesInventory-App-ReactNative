# Movies inventory app using react-native
In this simple react-native app created using expo, mocks a movie DB/Inventory app. Movies are fetched using OMDb API, with unique API Key. 
It has two simple screens where top 10 movies among search result of API are displayed and upon clicking on these items, you are navigated 
to a description screen where movie details are dispalyed.


### The site is live at ### 
[&lt;Link to the site&gt;](https://moviesinventory.netlify.app/)  

### How to run the project ###

Download the folder,

Go to run "npm install yarn" then "yarn start". Also download and install other essential extensions and modules like, expo and react-native

### Let's begin !! ###
                        
![image](https://user-images.githubusercontent.com/97677773/151613289-858e077b-6ccb-4c39-b938-de26be546803.png)

#### Initial screen - type in the search bar and hit ENTER ####


![image](https://user-images.githubusercontent.com/97677773/151613352-7716b615-8155-436c-8947-1eb37f20a24a.png)

####  You can see the search results containing top 10 movies returned by the API ####

![image](https://user-images.githubusercontent.com/97677773/151250553-51cf0a6a-f301-4004-94bc-499d99ad7a2b.png)

#### Default error screen on wrong movie name search ####

![image](https://user-images.githubusercontent.com/97677773/151613460-c34af964-62ad-456d-8c7c-1dd4bde51c37.png)

#### Default error screen when no movie selected and navigate to movie details screen ####

![image](https://user-images.githubusercontent.com/97677773/151613565-1b744b9f-81d1-4ebc-8648-8925a96b7e77.png)

#### On clicking one of the movies, navigates you to description/details screen ####

#### Also to run on ios or android, install the expo app on your phone, scan the QR code generated while running the application in terminal and test it!

### Future Improvements ###


* Real time search and debouncing. Currently it's displayed only on ENTER
* Include pagination to display all the search results instead of just 1 page by API
* Of course more UI related changes. There is always room for making it more interactive and responsive!!

### Feedback about exercise ###
This task was fun and informative since had never worked on react-native apps. It will be great to work on other features like filtering by language etc. Over all it was a great experience and learning opportunity!!


