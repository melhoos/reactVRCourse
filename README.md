# ReactVR 👀

Welcome to our ReactVR course 🙌. This course will help you understand the most basics elements of ReactVR. Please follow the guide and answer the questions. A proposed solution for every task is found in **/solutions** folder, but we highly recommend you to try without peeking 😜✌🏼!

## Getting Started

### Node and npm:
This course requires that you have node installed. Please follow the next steps if you have not installed node before.
- ✅ Download the latest stable version from https://nodejs.org.
- ✅ To verify, write `node -v` in the console application. You should see a version number returned in your console application.
- ✅ To verify that npm is also installed, write `npm -v` in the console application.

### Git:
Another requirement for running this project is Git. Please follow the guide [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git if you have not already.

### Init the project:
- ✅ Direct yourself to the folder you want to include this project and then clone this project by typing `git clone <link to repo>` in your console application.
- ✅ After cloning this project, remember to `cd` into the project folder and run `npm install` (Psst. `cd` stand for change directory and is the same as opening the folder in the finder app or directory on your mac/computer).

👉 **Tip if you later want to create your own application:** It is possible to create a new clean ReactVR project template by using ReactVR Cli tool. First install the tool by typing `npm install react-vr-cli -g` and then create a project by running `react-vr init [name of your reactVR project]`. This is perfect for new projects, but for this course we have added our own static assets and boilerplate code, therefore you should clone our repository instead.

## Task 1 - Init your ReactVR project ☝️
This task will explain how you initialize your ReactVR project. Open up the **reactVR_Course** folder and take a look at the **index.vr.js** file. This file is the entry point for this course.

❓ Before we start the application we should make a small change to the file **/vr/client.js**. Above the `...options,` line add `enableHotReload: true,` and hit save. This will enable the hot reloader. That is, our application will automatically reload its view whenever we save a change in our code! 👍🏼

➡️ Now go back to your console application and write `npm start`.

When the console is done building your ReactVR project you can open the application in a browser at http://localhost:8081/vr/. Be aware that it could take some time to load the page, especially on the first load 🕑 😅...

Open up the **index.vr.js** file again, here you can see a View and Pano component inside our main IteraGame Component.
- `<View>`: This component is a container for other components, you can put whatever you want to inside it and add styling to it. This component is similiar to a div in html.
- `<Pano>`: Pano is short for a panorama. In this component you can set a 360&deg; background panorama image. We have added some more different pano images (jpg) for you to use in the **/static_assets** folder.

❓ Go ahead and try to change the pano image to something else! **Hint** : Look into **/static_assets** folder 😉.

## Task 2 - Test your project on your phone! 📱 💻
You probably can't wait to get the application up and running on your phone, so that you can use your awesome new Itera Google Cardboard! 🤓❤️ For this to work, we need to expose the port where we are running our application locally (8081), to a public URL that we can reach from our phone. A popular tool for accomplishing this is *ngrok*.

First, open a new command line window. Install ngrok globally on your computer like this:
```
npm install ngrok -g
```

Now, run the following command to expose port 8081 to the world 🌎🌍🌏:
```
ngrok http 8081
```

You should get an output looking somewhat like this, with a forwarding URL containing a random ID:

![ngrok](http://preview.ibb.co/chfHtS/image.png)

⚠️ *Note that this ID will change every time you rerun the ngrok command.*

Open up the browser on your phone (preferably Chrome, but Safari works fine too ✌🏼) and type in the following address, replacing the random ID with the ID of your ouput:
```
http://<ID>.ngrok.io/vr/
```

🎉🎉🎉🎉🎉

Put your phone in your Google Cardboard and explore the VR-world 😄✌🏼 Be careful not to let your phone fall out off the sides!! 😅

## Task 3 - Get to know react-vr!
Before we go ahead and start creating the game, we should get a little bit familiar with the react-vr library. In this task, we will explain how to add different ReactVR components to your view!

❓ Start by importing the **IntroText** component from **components/introduction/IntroText.vr.js** into your **index.vr.js** file and add it in your view.

The IntroText file contains one of the simplest components in the react-vr library, the `<Text>` component. This component simply adds a specified text with some styling at the set location.

❓ Try to change the text from 'Velkommen til ReactVR kurs! ' to something else.

There are many other components supported by the react-vr package. For example: `<Box/>`, `<Plane/>`, `<Cylinder>` and even `<Image/>` and `<Video/>`! We have added a file named **IntroBox.vr.js** inside the **components/introduction** folder that contains a `<Box/>` component.

❓ Import the **IntroBox** to your **index.vr.js** file, as you did with **IntroText**, and add in the view.

Do you see the box? No? 😱 

There is a simple explanation for this! Take a look at the **components/introduction/IntroBox.vr.js** file. Do you see what is missing? 🤔 You cannot see the `<Box/>` component inside your view yet because you haven't set the size and styling yet! Makes sense? 😜

Okay, so the next step is to tell your view the size your `<Box/>` component. Note that the allowed props differ a little bit from those on the Text component.

❓ Add these four props to your `<Box/>` component and set a value:
- `dimWidth={value}`
- `dimHeight={value}`
- `dimDepth={value}`
- `wireframe = {true} `

The three first props determinate the width, height, and depth of the `<Box/>` component. Set each of the values to be equal to something between 0 and 1 because we don't want the box to be too big 😉. In ReactVR the dimension is measured in meters, therefore we often see size values between 0 and 1. `wireframe = {true} ` is just to see the outline of the box, and has the only purpose of helping us see the dimension of the `<Box/>` component.

Did you check the page? 😨??? Still no box?

We have not told the view **where** to place to `<Box/>` component yet 😜. Let us introduce you to the ReactVR coordinates:

ReactVR default coordinates are [0,0,0], i.e. [x,y,z] coordinates.
- X coordinate: a positive value brings the component to the right, and a negative value brings the component to the left.
- Y coordinate: a positive value brings the component up, and a negative value brings the component down.
- Z coordinate: a positive value brings the component behind you and a negative value brings the component in front of you **(❗️❗️)**.

In order to tell the component, it's position, you need to add a styling prop, and use the `transform` inside it. Something like this:

```
style={{
    transform: [
        {translate: [?, ?, ?]},
    ]
}}
```

❓ Add the transform prop and coordinates to the Box component inside the **IntroBox** component. Ops! If you place the `<Box/>`  component the same place or close to the `<Text/>`  component it may be hard to see 😜. Make sure that they don't collide ✌🏼.

➡️ If you like to manually change one coordinate at the time, you can add `translateY`, `transalteX` and `translateZ` inside the `transform`.

❓ Try to translate the box in both Y and X direction.  

And also, if you like to rotate your component, you can use `rotateY`, `rotateX` and `rotateZ`. Remember, when you are rotating components, their value should be in degrees. So if you like to rotate Y-axis 45 degrees: you simply set `{rotateY: 45}` 🙌.

❓ Then, try rotating the `<Box/>` component 45 degrees both in Y and Z direction!

![Box with rotation](https://preview.ibb.co/k71AXc/Screen_Shot_2018_02_24_at_21_01_18.png)

## Task 4 - Add a 3D model! 🤓 🌎
Okay, great! Now you know how to add basic ReactVR components, but let's be fair, it is not that interesting! In this task, we will introduce you to how to add a 3D object component inside your ReactVR app!

You might already notice that we have added a **death-star.obj** inside the **/static_assets** folder. Now we are going to use this .obj file and add it to our view. Psst. It is okay to remove the `<IntroText/>` and `<IntroBox/>` from the **index.vr.js** file 😉.

👉 **Tips:** We recommend that you select the `space.jpg` file as pano for this task 🌝. Why? Because it looks cool! 🤓 🌎

❓ Guess what! We need to import the  `<Intro3DModel/> ` component to our **index.vr.js** file and add it in the View. Go ahead and do it! 👊

❓ Go to the **components/introduction/intro3DModel.vr.js** file and import the `Model` from the react-vr. Change the `<div/>` to `<Model/>`.

❓ Then we need to tell the `<Model/>` component to use the **death-star.obj** as its source. Add a `source` prop inside your `<Model/>` component and define the obj file.

```
source={{
        obj: asset('objFileNameHere'),
    }}
```

❓ In addition, add the transform styling, as you did for the `<Box/>` component in the previous task. If you don't do this, the ReactVR will use it's default coordinates. Do you remember what it was? 😜

❓ Include the prop `wireframe` and set its value to `true` inside your `<Model/>` component.

![Death star 3D model with wireframe](https://image.ibb.co/nJxT87/Screen_Shot_2018_02_18_at_10_53_33.png)

👉 **Tips:** If you like to add your own 3D object, https://clara.io/library has a wide variety of 3D models and formats for exporting 3D models. Remember to download the .obj format (this is the only format ReactVR support at the moment 🙁) and add it to your **/static_assets** folder 😉. Sometimes you get both .obj and .mtl file when downloading a 3D model. I like to think of the .obj file as "the container" and the .mtl file as "the fill" 🙃.

Another way to fill your 3D component is to add a texture! A texture is used for defining the texture of the Model 😝. The `<Model/>` component uses the texture if mtl is not specified.

We found a proper texture for the **death-star.obj** here:
https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png

❓ Add a `texture` prop inside your `<Model/>`, and define it as the url above. Remember, the texture prop always takes its argument as a string 😉. Ops! You should also set the `wireframe` equal to false. When the `wireframe` is true, it will overwrite the texture 😬.

## Task 5 - Add animation to your 3D Model! 💥
Now, lets add some animation to our 3D component 🤓! In this task, we will learn how to make the **death-star.obj** spin itself and play a sound whenever clicking on it!

❓ In file **components/introduction/intro3dModel.vr.js** import `Animated` and convert your Model to an `AnimatedModel` by defining it as described below inside your `render` function. Change the `Model` to `AnimatedModel`.

`
const AnimatedModel = Animated.createAnimatedComponent(Model);
`

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

❓ Next go ahead and bind the `spin` you declared inside the state to the styling of our `AnimatedModel`. **Hint:** use the `rotateY` 😜.

Is it spinning? 🤔

Nope 👻! We need to do a little more coding before it actually spins! We need to tell the React Component it should start spinning when it renders! In order to this, we are going to use `componentDidMount()` function. `componentDidMount()` function is one of React's lifecycles methods and it is invoked immediately after a component is mounted.

❓ Define the `componentDidMount()` function inside your React component. Use the `Animated.timing` in order to specify the rotation value from 0 to 1 in 5 seconds. Ops. Remember that the duration is measured in ms 😇.

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

This is because according to the [React VR official documentation](https://facebook.github.io/react-vr/docs/transforms.html#props) rotate transformations have to be strings and not an `Animated.Value` as we have set in our state.

![Transformation documentation from ReactVR](https://image.ibb.co/in6o87/Screen_Shot_2018_02_18_at_11_55_23.png)

Inside our `componentDidMount()` function we are changing the value from 0 to 1, but the `rotateY` prop expects is a rotation value as degree or as a string of "0deg" to "360deg". How can we reinterpreted the value 0 to 1 as the string "0deg" to "360deg"? 🤔

Luckily we can achieve this using _interpolate_ 🤗.

❓ Instead of using `rotateY: this.state.spin`, change it to `rotateY: this.state.spin.interpolate()`.

❓ The `interpolate()` function takes one argument. This argument should be an object that looks like this:

```
{
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
}
```

It spins! 🎉🎈😄

❓ Let's clean up our code a little bit and move the right side of the `rotateY:` into a separate constant inside our render function and call it for `spinYValue`. So the `rotateY` should look something like this:

```
    {rotateY: spinYValue}
```

But the **death-star.obj** only spins one time 🤔. We want to make it loop! 😁

❓ Move everything that is inside the `componentDidMount()` function into a separate function. Name the function for `spinAnimation()` and call it from the `componentDidMount()` function. Remember to write `this` in front the functio-name in order to call it!

❓ In order for us to repeat the function, we must call the `this.spinAnimation()` repeatedly. Add the following code inside your `spinAnimation()`.

```
).start( () => this.spinAnimation());
```

Still not spinning more than one time? 😧

The explanation to this is that the `this.state.spin` value is already equal to 1 when we redo the `spinAnimation()` function. Therefore we need to set the `this.state.spin` value back to value 0.

❓ Set `this.state.spin` value to 0 in the beginning of the `spinAimation()` function.

Hurray! It is spinning! 😃 👏

But as you may see, the spinning slows down at the end of the rotation. If you don't want it to slow down, we can change the easing of the rotation.

❓ Import `Easing` from `react-native` and add `easing` property to the `Animated.timing` and set the value to `Easing.linear`.

Congratulations! You now have a 3D model that animates! 🎉🌟

## Task 6 - Get to know the VrButton and sound effects! 😁
EyHey! We are soon finished with the introduction part! 👏 The last two things we want to show you is the VRbutton and how to add sound effects to your ReactVR app!

### Let's start with the VrButton.

➡️️️ VrButton is a helper for managing interaction and has no appearance by default. It only acts as a wrapper and can wrap other components.

❓ In **components/introduction/Intro3DModel** import `VrButton` and wrap the `<AnimatedModel/>` component.

VrButton has many different types of props, some of them are:

- `onClick`
- `onLongClick`
- `onClickSound`
- `onEnter`
- `onExit`

Please see [documentation](https://facebook.github.io/react-vr/docs/vrbutton.html) for more.

❓ Let's try to add some interaction with our VrButton! Start by declaring a `onClickDeathStar()` function. Inside this function, we want to update the xCoordinate to the death-star. We like to make the death-star move from one xCoordinate to another whenever we click on it. Make the logic for toggle the xCoordinate between 0 and 1 whenever we click on the death-star. **Hint** Create a xCoordinate inside the state and update it with `this.setState()` 😉.

❓ Bind the function you just created to the `onClick` prop!

```
onClick={() => this.onEnterDeathStar()}
```

### Add Cursor! 🐭 👆

You haven't forgotten about the Google Cardboard?! To make the interactions a little bit more mobile friendly, we should add a cursor that follows your movements and trigger whenever you touch the screen!

❓ We have added `raycasters` and `cursorVisibility` inside the  **vr/client.js** file. Please remove the block comments from both of them.

Great! 😄 Now you will see a white dot in the middle of your screen. This dot will represent your trigger point. If you like to click on something, you need to make sure that your white dot is hovering over it ✌🏼😜.

### Next step: Sound Effect!

Now we are going to add a sound effect whenever we click on the death-star. Can you guess which prop we are going to use? 😝😏

❓ Go ahead and add the `onClickSound` prop to your `VrButton`.

In order to trigger the sound effect, we need to define the sound. In **static_assets** folder, we have added one .mp3 file.

❓ Define the sound! **Hint** `onClickSound` takes one argument, and an argument is an object. In this object, you define the type of audio format and where you can find it. Since we added a .mp3 file in the **static_assets** folder, the object should look similar to this:  

```
{
    mp3: //mp3 file
}
```

## Task 7 - Let's make a VR game! 🎮 🎲 👾
Finally! You are done with the introduction part. Let's go ahead and start creating a ReactVR game!

In this game, you will get the chance to walk in Luke Skywalker's footsteps and destroy the Death Star in order to restore peace to the galaxy 🙏 The problem is that the Galactic Empire will have built another Death Star as soon as you destroy the first one.. 😒🤷

Your goal will be to destroy as many Death Stars as possible before the time runs out. May the force be with you! ✨

Before we begin, import the **components/game/Game.vr.js** file in **index.vr.js**, render it, and set the Pano to show `space.jpg`. We are going to do most of our game inside the **components/game/Game.vr.js** file.

### First step: Help build more Death Stars

We want new Death Stars to appear whenever an old one is destroyed. But!! If they were to appear in the same place every time, the game would be too easy 😅. Therefore, we want each new Death Star to appear at a random location in space.

❓ Import the `getRandomCoordinates` function from `ComponentGenerator` in the helpers folder. We won't worry too much about how the coordinates are generated, but feel free to check out the function yourself to see how its done.

Currently, we only update the x-coordinate whenever the Death Star is hit. We want to update the position in all three directions, and therefore we need to store the x-, y- and z-coordinates in the state.

❓ Alter the state of the `Intro3DModel` component so that it stores all three coordinates in an array instead of only the x-coordinate. You can set its initial state to [0, 0, -3] for an easy start to the game 😉.

What should we now do with the coordinates in the `onClickDeathStar` method? Remember that we want the new Death Star to appear at a random location when we destroy the old one.

❓ Use the imported `getRandomCoordinates` function to set the location of the new Death Star. We don't want the Death Star to appear too close or too far away, so set the minimum and maximum value to, for instance, -5 and 5 respectively.

Try to click the first Death Star that appears in front of you when starting your application. Nice job, you destroyed it! 😎🎇 But, wait?! It's not over yet. Move the screen around to find another Death Star at a different location! 😰

### Add score board

We want to be able to view how much time we got left and our score in the game. For that we are going to add a sticky panel which follows our movements in the 3D world. This is done by adding a Native React Module that lives in the 2D world. All native modules are registered in the `nativeModules` field within **vr/client.js**, which holds all Native Modules we want to register.

❓ We have already made a native module helper for you called `StickyPanel`, so all we need to do is enable it! 😉 Please remove the comments inside **vr/client.js** to register our Native Module

❓ Initialize the `StickyPanel` within the render method within **index.vr.js** file by adding the line `NativeModules.DomOverlayModule.openOverlay({time: 30, score: 0})`

You should now see a score board! ✌🏼

### Add game score

We have a sticky score board, great! However, it doesn't update when we destroy death stars. It's time to add some the state to our game. First, we need add an on click handler to update our `score` every time we destroy a death star.

❓ Add an `onClick` method to the `Intro3DModel` component and call it every time a death star is clicked. Also, create a method in **components/game/Game.vr.js** which increments the global game score

❓ Pass the method as props into the `Intro3DModel` component and be sure to our score into the game panel

Superb! Now our score updates every time we destroy a death star

### Add obstacles

To make the game a little more difficult, we are going to add obstacles which appear at random positions and flies through space along a single axis. The obstacles are going to be malicious objects, which steals points from us when clicked on. To save you some time, we have already created a `ComponentGenerator` component inside **helpers/ComponentGenerator**. For now, the generator assumes that we are only moving the objects in the Y direction. The generator can be used in the following way:

```javascript
<ComponentGenerator yPosition={4} numberOfComponents={10} onClick={() => {console.log("Woops, don't shoot me!")}}/>
```
❓ Add the above snippet inside the render method of **Game.vr.js** to take a look at the how the Obstacles are created

❓ In the constructor of **Game.vr.js**, add `Obstacles: () => <ComponentGenerator numberOfComponents={10} .../>`

Great! But we are missing some state handling to complete our game

❓ Add animation to move the obstacles along the Y by adding `globalYPosition` to state which holds the Animated value. Use Animated.timing and move all objects along the Y axis from 8 to -8 over 15 seconds

❓ Add an on click handler to the component generator that decrements our game score by one

Almost done! Notice that the animation does not reset when finished, so we need to add that as well

❓ Make the animation restart when finished, as well as regenerate a new set of Obstacles

Our game is as good as done, but if you got any spare time be sure to try solve the extra tasks.

### Extra tasks:
  - Add start and stop game states to our game and with menus ✌🏼
  - Generate more random components over time ✌🏼
  - Extends or create your own ComponentGenerator to make the random components move in random directions ✌🏼
