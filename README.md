# ReactVR

Welcome to this ReactVR course. This course will help you understand the most basics elements of ReactVR. Please follow the guide and answer the questions. A proposed solutions for every task is found in X/Y folder. 

## Getting Started
This course requires that you have node installed. Please follow the next steps if you have not installed node before. 
- Download the latest stable version from node.org. 
- To verify, write ```node -v``` in the terminal / console application. 
- To verify that npm is also installed, write ```npm -v``` in the terminal / console application.
- After cloning this project, remember to ```npm install``` before you start this course.

## Task 1 - Init you ReactVR project
This task will explain how you init your ReactVR project. Open up the **Basics/index.vr.js** file and take a brief look inside it. This will be the main file we are going to work with. But first, let's take a look into the file **Basics/vr/client.js**. Above line 12 ```...options,``` add ```enableHotReload: true,``` and hit save. This will enable the hot reloader. That is, our application will automatically change it's view whenever we save a change inside our code! 

Now go back to your terminal / console application and write ```npm start```. Ooops! Remember du ```cd``` into the Basic folder, if you have not done so yet! (Psst. ```cd``` stand for change directory and is the same as opening the folder in the finder app or directory on you mac/computer). When the terminal / console is done building your reactVR project go ahead and open http://localhost:8081/vr/. By the way, loading the page can take some time, expesially the first time you are doing it. 

Open up the **Basics/index.vr.js** file, and as you see there are three compoenets inside the Basics React Component. View, Pano and Text. 
- ```<View>```: You only need one View component for an ReactVR project. This component determinates the view, and you define whatever you want to include inside your view by putting it inside this component. 
- ```<Pano>```: Pano is short for panorama. In this component you can select the background image. We have added some more pano pictures for you in the folder **Basics/static_assets/**. Go ahead and try to change the pano image to something else in this folder!
- ```<Text>```: This is one of the most simpliest components that is included in react-vr. The text component will simply add a text to your view. There are many other components supported by the react-vr package. For example: Box, Circle, Sylinder and even Image and Video! We will come back to what all the props inside the compoents means later in this course. 
