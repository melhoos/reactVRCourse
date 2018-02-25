# ReactVR 👀

Welcome to this ReactVR course 🙌. This course will help you understand the most basics elements of ReactVR. Please follow the guide and answer the questions. A proposed solution for every task is found in **/solutions** folder, but we highly recommend you to try without peeking 😜✌🏼!

## Getting Started

### Node and npm:
This course requires that you have node installed. Please follow the next steps if you have not installed node before.
- ✅ Download the latest stable version from https://nodejs.org.
- ✅ To verify, write ```node -v``` in the console application. You should see a version number returned in your console application.
- ✅ To verify that npm is also installed, write ```npm -v``` in the console application.

### Git:
Another requirement for running this project is Git. Please follow the guide [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git if you have not already.

### Init the project:
- ✅ Direct yourself to the folder you want to include this project and then clone this project by typing ```git clone <link to repo>``` in your console application.
- ✅ After cloning this project, remember to ```cd``` into the folder (Psst. ```cd``` stand for change directory and is the same as opening the folder in the finder app or directory on your mac/computer) and run ```npm install``` before you start this course 😉.

👉 **Tips:** If you like to create your own ReactVR app, install ReactVR Cli by typing ```npm install react-vr-cli -g``` and then run ```react-vr init [name of your reactVR project]``` to create a new ReactVR project! 😄 We highly recommend you to clone this project when completing this course 😉 - just because we added some static assets to this project, that will not be included if you decide to create a new project from scratch!

## Task 1 - Init your ReactVR project ☝️
This task will explain how you initialize your ReactVR project. Open up the **reactVR_Course** folder and look at the **index.vr.js** file and take a brief look at it. This file is the entry point for this course.

❓ But first, let's take a look at the file **/vr/client.js**. Above ```...options,``` add ```enableHotReload: true,``` and hit save. This will enable the hot reloader. That is, our application will automatically reload its view whenever we save a change in our code! 👍🏼

➡️ Now go back to your console application and write ```npm start```.

Oops 😮! Remember to ```cd``` into the reactVR_course folder, if you have not done so yet! When the console is done building your ReactVR project go ahead and open http://localhost:8081/vr/. By the way, loading the page can take some time, especially the first time 🕑 😅...

Open up the **index.vr.js** file, there are two components inside the IteraGame React Component. View and Pano.
- ```<View>```: This component determinates the view, and you define whatever you want to include inside your view by putting it inside this component.
- ```<Pano>```: Pano is short for a panorama. In this component, you can select the background image. We have added some more pano images (jpg) for you in the **/static_assets** folder.

❓ Go ahead and try to change the pano image to something else! **Hint** : Look into **/static_assets** folder 😉.

## Task 2 - Get to know react-vr!
Before we go ahead and start creating the game, we should get a little bit familiar with the react-vr library. In this task, we will explain how to add different ReactVR components to your view!

❓ Start by importing **IntroText** from **introduction/IntroText.vr.js** into your **index.vr.js** file and include this in your view.

This file includes one of the simplest components in the react-vr library. The ``<Text>`` component will simply add a text inside and view.

❓ Try to change the text from 'Velkommen til ReactVR kurs! ' to something else.

There are many other components supported by the react-vr package. For example: ```<Box/>```, ```<Plane/>```, ```<Cylinder>``` and even ```<Image/>``` and ```<Video/>```! We have added a file named **IntroBox.vr.js** inside the **introduction** folder.

❓ Import the **IntroBox** to your **index.vr.js** file, as you did with **IntroText**.

Do you see the box? 😜

No! 😱 And there is a simple explanation for this! Take a look at the **introduction/IntroBox.vr.js** file. Do you see what is missing? 🤔 You cannot see the ```<Box/>``` component inside your view yet because you haven't included the styling yet! Make sense? 😜

Since a ```<Box/>``` is not exactly the same as a ```<Text/>``` component, the props will, therefore, be a little different from the Text pros.

Okay, so the next step is to tell your view how big you want your ```<Box/>``` component.

❓ Add these four props to your ```<Box/>``` component and set a value:
- ```dimWidth```
- ```dimHeight```
- ```dimDepth```
- ```wireframe = {true} ```

These three first values determinate the width, height, and depth of the ```<Box/>``` component. Set each of the values to be equal to something between 0 and 1 because we don't want the box to be too big 😉. In ReactVR the dimension is measured in meters, therefore it is often seen values between 0 and 1 in ReactVR projects. ```wireframe = {true} ``` is just to see the outline of the box, and has the only purpose of helping us see the dimension of the ```<Box/>``` component.

Did you check the page? 😨???

We have not told the view **where** to place to ```<Box/>``` component yet 😜. Let us introduce you to the ReactVR coordinates:

ReactVR default coordinates are [0,0,0], i.e. [x,y,z] coordinates.
- X coordinate: a positive value brings the component to the right, and a negative value brings the component to the left.
- Y coordinate: a positive value brings the component up, and a negative value brings the component down.
- Z coordinate: a positive value brings the component behind you and a negative value brings the component in front of you **(❗️❗️)**.

In order to tell the component, it's position, you need to add a styling prop, and use the ```transform``` inside it. Something like this:
```
style={{
    transform: [
        {translate: [?, ?, ?]},
    ]
}}
```

❓ Add the transform prop and coordinates to the Box component inside the **IntroBox** component. Ops! If you place the ```<Box/>```  component the same place or close to the ```<Text/>```  component it may be hard to see 😜. Make sure that they don't collide ✌🏼.

➡️ If you like to manually change one coordinate at the time, you can add ```translateY```, ```transalteX``` and ```translateZ``` inside the ```transform```.

❓ Try to translate the box in both Y and X direction.  

And also, if you like to rotate your component, you can use ```rotateY```, ```rotateX``` and ```rotateZ```. Remember, when you are rotating components, their value should be in degrees. So if you like to rotate Y-axis 45 degrees: you simply set ```{rotateY: 45}``` 🙌.

❓ Then, try rotating the ```<Box/>``` component 45 degrees both in Y and Z direction!

![Box with rotation](https://preview.ibb.co/k71AXc/Screen_Shot_2018_02_24_at_21_01_18.png)

## Task 3 - Add a 3D model! 🤓 🌎
Okay, great! Now you know how to add a ReactVR component, but let's be fair, it is not that interesting! In this task, we will introduce you to how to add a 3D component inside your ReactVR app!

You might already notice that we have added a **death-star.obj** inside the **/static_assets** folder. Now we are going to use this .obj file and add it to our view. Psst. It is okay to remove the ```<IntroText/>``` and ```<IntroBox/>``` from the **index.vr.js** file 😉.

👉 **Tips:** We recommend you to select the ```space.jpg``` file as pano for this task 🌝. Because it looks cool! 🤓 🌎

❓ Guess what! We need to import the  ```<Intro3DModel/> ``` component to our **index.vr.js** file. Go ahead and do it! 👊

❓ Go to the **introduction/intro3DModel.vr.js** file and import the ```Model``` from the react-vr. Change the ```<div/>``` to ```<Model/>```.

❓ Then we need to tell the ```<Model/>``` component to use the **death-star.obj** as its source. Add a ```source``` prop inside your ```<Model/>``` component and define the obj file.

```
source={{
        obj: asset('objFileNameHere'),
    }}
```

❓ In addition, add the transform styling, as you did for the ```<Box/``` component in the previous task. If you don't do this, the ReactVR will use it's default coordinates. Do you remember what it was? 😜

❓ Include the prop ```wireframe``` and set its value to ```true``` inside your ```<Model/>``` component.

![Death star 3D model with wireframe](https://image.ibb.co/nJxT87/Screen_Shot_2018_02_18_at_10_53_33.png)

👉 **Tips:** If you like to add your own 3D object, https://clara.io/library has a wide variety of 3D models and formats for exporting 3D models. Remember to download the .obj format (this is the only format ReactVR support at the moment 🙁) and add it to your **/static_assets** folder 😉. Sometimes you get both .obj and .mtl file when downloading a 3D model. I like to think of the .obj file as "the container" and the .mtl file as "the fill" 🙃.

Another way to fill your 3D component is to add a texture! A texture is used for defining the texture of the Model 😝. The ```<Model/>``` component uses the texture if mtl is not specified.

We found a proper texture for the **death-star.obj** here:
https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png

❓ Add a ```texture``` prop inside your ```<Model/>```, and define it as the url above. Remember, the texture prop always takes its argument as a string 😉. Ops! You should also set the ```wireframe``` equal to false. When the ```wireframe``` is true, it will overwrite the texture 😬.

## Task 4 - Add animation to your 3D Model! 💥
Now, lets add some animation to our 3D component 🤓! In this task, we will learn how to make the **death-star.obj** spin itself and play a sound whenever clicking on it!

❓ In file **introduction/intro3dModel.vr.js** import ```Animated``` and convert your Model to an ```AnimatedModel``` by defining it as described below inside your ```render``` function. Change the ```Model``` to ```AnimatedModel```.

```
const AnimatedModel = Animated.createAnimatedComponent(Model);
```

❓ In order to make the **death-star.obj** spin we need to define its local state when first load the app. This state should be an Animated.Value. Lets define the components state:

```
export default class Intro3DModel extends React.Component {
  constructor() {
    super();
    this.state = {
      spin: new Animated.Value(0)
    };
  }
  //more stuff
}
```

❓ Next go ahead and bind the ```spin``` you declared inside the state to the styling of our ```AnimatedModel```. **Hint:** use the ```rotateY``` 😜.

Is it spinning? 🤔

Nope 👻! We need to do a little more coding before it actually spins! We need to tell the React Component it should start spinning when it renders! In order to this, we are going to use ```componentDidMount()``` function. ```componentDidMount()``` function is one of React's lifecycles methods and it is invoked immediately after a component is mounted.

❓ Define the ```componentDidMount()``` function inside your React component. Use the ```Animated.timing``` in order to specify the rotation value from 0 to 1 in 5 seconds. Ops. Remember that the duration is measured in ms 😇.

```
  componentDidMount() {
    Animated.timing(
      this.state.spin,
      {
       toValue: //your value here,
       duration: //your value here
      }
    ).start();
  }
```

Is it still not working? 😳

This is because according to the [React VR official documentation](https://facebook.github.io/react-vr/docs/transforms.html#props) rotate transformations have to be strings and not an ```Animated.Value``` as we have set in our state.

![Transformation documentation from ReactVR](https://image.ibb.co/in6o87/Screen_Shot_2018_02_18_at_11_55_23.png)

Inside our ```componentDidMount()``` function we are changing the value from 0 to 1, but the ```rotateY``` prop expects is a rotation value as degree or as a string of "0deg" to "360deg". How can we reinterpreted the value 0 to 1 as the string "0deg" to "360deg"? 🤔

Luckily we can achieve this using _interpolate_ 🤗.

❓ Instead of using ```rotateY: this.state.spin```, change it to ```rotateY: this.state.spin.interpolate()```.

❓ The ```interpolate()``` function takes one argument. This argument should be an object that looks like this:

```
{
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
}
```

It spins! 🎉🎈😄

❓ Let's clean up our code a little bit and move the right side of the ```rotateY:``` into a separate constant inside our render function and call it for ```spinYValue```. So the ```rotateY``` should look something like this:

```
    {rotateY: spinYValue}
```

But the **death-star.obj** only spins one time 🤔. We want to make it loop! 😁

❓ Move everything that is inside the ```componentDidMount()``` function into a separate function. Name the function for ```spinAnimation()``` and call it from the ```componentDidMount()``` function. Remember to write ```this``` in front the functio-name in order to call it!

❓ In order for us to repeat the function, we must call the ```this.spinAnimation()``` repeatedly. Add the following code inside your ```spinAnimation()```.

```
).start( () => this.spinAnimation());
```

Still not spinning more than one time? 😧

The explanation to this is that the ```this.state.spin``` value is already equal to 1 when we redo the ```spinAnimation()``` function. Therefore we need to set the ```this.state.spin``` value back to value 0.

❓ Set ```this.state.spin``` value to 0 in the beginning of the ```spinAimation()``` function.

Hurray! It is spinning! 😃 👏

But as you may see, the spinning slows down at the end of the rotation. If you don't want it to slow down, we can change the easing of the rotation.

❓ Import ```Easing``` from ```react-native``` and add ```easing``` property to the ```Animated.timing``` and set the value to ```Easing.linear```.

Congratulations! You now have a 3D model that animates! 🎉🌟

## Task 5 - Get to know the VrButton and sound effects! 😁
EyHey! We are soon finished with the introduction part! 👏 The last two things we want to show you is the VRbutton and how to add sound effects to your ReactVR app!

### Let's start with the VrButton.

➡️️️ VrButton is a helper for managing interaction and has no appearance by default. It only acts as a wrapper and can wrap other components.

❓ In **introduction/Intro3DModel** import ```VrButton``` and wrap the ```<AnimatedModel/>``` component.

VrButton has many different types of props, some of them are:

- ```onClick```
- ```onLongClick```
- ```onClickSound```
- ```onEnter```
- ```onExit```

Please see [documentation](https://facebook.github.io/react-vr/docs/vrbutton.html) for more.

❓ Let's try to add some interaction with our VrButton! Start by declaring a ```onClickDeathStar()``` function. Inside this function, we want to update the xCoordinate to the death-star. We like to make the death-star move from one xCoordinate to another whenever we click on it. Make the logic for toggle the xCoordinate between 0 and 1 whenever we click on the death-star. **Hint** Create a xCoordinate inside the state and update it with ```this.setState()``` 😉.

❓ Bind the function you just created to the ```onClick``` prop!

```
onClick={() => this.onEnterDeathStar()}
```

### Next step: Sound Effect!

Now we are going to add a sound effect whenever we click on the death-star. Can you guess which prop we are going to use? 😝😏

❓ Go ahead and add the ```onClickSound``` prop to your ```VrButton```.

In order to trigger the sound effect, we need to define the sound. In **static_assets** folder, we have added one .mp3 file.

❓ Define the sound! **Hint** ```onClickSound``` takes one argument, and an argument is an object. In this object, you define the type of audio format and where you can find it. Since we added a .mp3 file in the **static_assets** folder, the object should look similar to this:  

```
{
    mp3: //mp3 file
}
```

## Task 6 - Let's make a VR game! 🎮 🎲 👾
Finally! You are done with the introduction part. Let's go ahead and start creating a ReactVR game!

In this game, you will get the chance to walk in Luke Skywalker's footsteps and destroy the Death Star in order to restore peace to the galaxy 🙏 The problem is that the Galactic Empire will have built another Death Star as soon as you destroy the first one.. 😒🤷

Your goal will be to destroy as many Death Stars as possible before the time runs out. May the force be with you! ✨

### First step: Help build more Death Stars

We want new Death Stars to appear whenever an old one is destroyed. But!! If they were to appear in the same place every time, the game would be too easy 😅. Therefore, we want each new Death Star to appear at a random location in space.

❓ Import the `getRandomCoordinates` function from `ComponentGenerator` in the helpers folder. We won't worry too much about how the coordinates are generated, but feel free to check out the function yourself to see how its done.

Currently, we only update the x-coordinate whenever the Death Star is hit. We want to update the position in all three directions, and therefore we need to store the x-, y- and z-coordinates in the state.

❓ Alter the state of the `Intro3DModel` component so that it stores all three coordinates in an array instead of only the x-coordinate. You can set its initial state to [0, 0, -3] for an easy start to the game 😉.

What should we now do with the coordinates in the `onClickDeathStar` method? Remember that we want the new Death Star to appear at a random location when we destroy the old one.

❓ Use the imported `getRandomCoordinates` function to set the location of the new Death Star. We don't want the Death Star to appear too close or too far away, so set the minimum and maximum value to, for instance, 1 and 5 respectively.

Try to click the first Death Star that appears in front of you when starting your application. Nice job, you destroyed it! 😎🎇 But, wait?! It's not over yet. Move the screen around to find another Death Star at a different location! 😰

### Add a score

### Add a timer

### Add more components to make the game more difficult


### Add Cursor / Gaze Button!

// more stuff

## Task X - Test your project on your phone! 📱 💻
In order to test this on our phone, we need to connect both our phone and computer on the same network! Please follow the steps below.

- We need to get a hold of your IP address. The simplest way to this on a Mac is to press "alt" button and the wifi icon in the upper right corner. Then you will see something like this:

![IP](https://preview.ibb.co/nxQXvx/Screen_Shot_2018_02_20_at_18_14_34.png)

- If you don't have a Mac, another way to get ahold of your IP is to type ```ifconfig``` (or is it ```ipconfig``` 🤔) in your console application.

- Open up the browser (preferably Chrome) on your phone and type in: ```http://<Your.IP.Address>:8081/vr/ ```

🎉🎉🎉🎉🎉  

Try your Google Cardboard and explore the VR-world! 😄✌🏼
