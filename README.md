# ReactVR

Welcome to this ReactVR course 👀. This course will help you understand the most basics elements of ReactVR. Please follow the guide and answer the questions. A proposed solutions for every task is found in **/solutions** folder, but we highly recommend you to try without peeking 😉✌🏼! 

## Getting Started
This course requires that you have node installed. Please follow the next steps if you have not installed node before. 
- ✅ Download the latest stable version from https://nodejs.org. 
- ✅ To verify, write ```node -v``` in the terminal / console application. You should see a version number returned in your terminal / console application.
- ✅ To verify that npm is also installed, write ```npm -v``` in the terminal / console application.
- ✅ After cloning this project, remember to run ```npm install``` before you start this course. 

👉 **Tips:** If you like to create your own reactVR app, install ReactVR Cli by typing ```npm install react-vr-cli -g``` and then run ```react-vr init [name of your reactVR project]``` to create a new reactVR project! We highly recommend you to clone this project when completing this course 😉 - just because we added some static assets to this project, that will not be included if you decide to create a new project from scratch! 

## Task 1 - Init your ReactVR project ☝️
This task will explain how you initialize your ReactVR project. Open up the **reactVR_Course** folder and look at the **index.vr.js** file and take a brief look inside it. This will be the main file we are going to work with. But first, let's take a look into the file **/vr/client.js**. Above line 11 ```...options,``` add ```enableHotReload: true,``` and hit save. This will enable the hot reloader. That is, our application will automatically relode its view whenever we save a change inside our code! 

➡️ Now go back to your terminal / console application and write ```npm start```. 

Ooops! Remember to ```cd``` into the Basic folder, if you have not done so yet! (Psst. ```cd``` stand for change directory and is the same as opening the folder in the finder app or directory on you mac/computer). When the terminal / console is done building your reactVR project go ahead and open http://localhost:8081/vr/. By the way, loading the page can take some time, expesially the first time you are doing it 🕑 😅...

Open up the **index.vr.js** file, and as you see there are three components inside the reactVR_course React Component. View, Pano and Text. 
- ```<View>```: This component determinates the view, and you define whatever you want to include inside your view by putting it inside this component. 
- ```<Pano>```: Pano is short for panorama. In this component you can select the background image. We have added some more pano images (jpgs) for you in the **/static_assets** folder. 
- ```<Text>```: This is one of the most simpliest components that is included in react-vr. The text component will simply add a text to your view. There are many other components supported by the react-vr package. For example: ```<Box/>```, ```<Plane/>```, ```<Cylinder>``` and even ```<Image/>``` and ```<Video/>```! We will come back to what all the props inside the compoents means later in this course. 

❓ Go ahead and try to change the pano image to something else! **Hint** : Look into **/static_assets** folder 😉. 
❓ Try to change the text from 'hello' to something else. 

## Task 2 - Add your first ReactVR component! 👊
Okay, so this task is going to give you an introduction to placing a react-vr component into your view. Go ahead and remove the text component from the **index.vr.js** file, because we are not going to use this element for this task. Instead .... 

❓ Import the Box element from react-vr and add a ```<Box/>``` inside your view. 

Did you try to refresh the page? Do you see it? 😜

No! 😱 And there is a simple explaination to this. You cannot see the ```<Box/>``` component inside your view yet because you havn´t told the size and placing of it! Make sense? 🤔

Okay, so the next step is to tell your view how big you want your ```<Box/>``` component. 

❓ Add these four props to your ```<Box/>``` component and set a value:
- ```dimWidth```
- ```dimHeight```
- ```dimDepth```
- ```wireframe = {true} ```

These three first values determinates the width, height and depth of the ```<Box/>``` component. Set each of the values to be equal to something between 0 and 1, because we don't want the box to be too big 😉. In ReactVR the dimention is measured in meters, therefore it is often seen values between 0 and 1 in reactVR projects. ```wireframe = {true} ``` is just to see the outline of the box, and has the only purpose of helping us see the dimention of the ```<Box/>``` component. 

Try to reload the page and see what happens. 

😨???

ReactVR default coordinates are [0,0,0], i.e. [x,y,z] coordinates. 
- X coordinate: a positive value brings the component to the right, and a negative value brings the component to the left. 
- Y coordinate: a positive value brings the component up, and a negative value brings the component down.
- Z coordinate: a positive value brings the component behind you and a negative value brings the component in front of you **(❗️❗️)** .

In order to tell the component it's position, you need to add a style prop, and use the ```transform``` inside it. Something like this: 
```
style={{
    transform: [
        {translate: [0, 0, -3]}, // x = 0, y=0, z= -3
    ]
}}
```

➡️ If you like to manually change one coordinate, you can add ```translateY```, ```transalteX``` and ```translateZ``` into the ```transform```. 
And also, if you like to rotate your component, you can use ```rotateY```, ```rotateX``` and ```rotateZ```. Remember, when you are rotating components, their value should be in degrees. So if you like to rotate Y-axsis 45 degrees: you simply set ```{rotateY: 45}``` 🙌. 

❓ Try to translate the box in both Y and X direction.

❓ Then, try rotating the ```<Box/>``` component 45 degrees both in Y and Z direction! 

## Task 3 - Add a 3D model! 


## Task 4 - Add animation to your 3D Model! 


## Task X - Deploy your project! 


