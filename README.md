# ReactVR 👀

Welcome to this ReactVR course 🙌. This course will help you understand the most basics elements of ReactVR. Please follow the guide and answer the questions. A proposed solutions for every task is found in **/solutions** folder, but we highly recommend you to try without peeking 😉✌🏼! _Comment: Remove this? - Add the solution folder after the course is finished??_

## Getting Started
This course requires that you have node installed. Please follow the next steps if you have not installed node before. 
- ✅ Download the latest stable version from https://nodejs.org. 
- ✅ To verify, write ```node -v``` in the terminal / console application. You should see a version number returned in your terminal / console application.
- ✅ To verify that npm is also installed, write ```npm -v``` in the terminal / console application.
- ✅ After cloning this project, remember to run ```npm install``` before you start this course. 

👉 **Tips:** If you like to create your own ReactVR app, install ReactVR Cli by typing ```npm install react-vr-cli -g``` and then run ```react-vr init [name of your reactVR project]``` to create a new ReactVR project! 😄 We highly recommend you to clone this project when completing this course 😉 - just because we added some static assets to this project, that will not be included if you decide to create a new project from scratch! 

## Task 1 - Init your ReactVR project ☝️
This task will explain how you initialize your ReactVR project. Open up the **reactVR_Course** folder and look at the **index.vr.js** file and take a brief look inside it. This will be the main file we are going to work with. But first, let's take a look into the file **/vr/client.js**. Above line 11 ```...options,``` add ```enableHotReload: true,``` and hit save. This will enable the hot reloader. That is, our application will automatically relode its view whenever we save a change inside our code! 👍🏼 

➡️ Now go back to your terminal / console application and write ```npm start```. 

Ooops! Remember to ```cd``` into the Basic folder, if you have not done so yet! (Psst. ```cd``` stand for change directory and is the same as opening the folder in the finder app or directory on you mac/computer). When the terminal / console is done building your ReactVR project go ahead and open http://localhost:8081/vr/. By the way, loading the page can take some time, expesially the first time you are doing it 🕑 😅...

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

These three first values determinates the width, height and depth of the ```<Box/>``` component. Set each of the values to be equal to something between 0 and 1, because we don't want the box to be too big 😉. In ReactVR the dimention is measured in meters, therefore it is often seen values between 0 and 1 in ReactVR projects. ```wireframe = {true} ``` is just to see the outline of the box, and has the only purpose of helping us see the dimention of the ```<Box/>``` component. 

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

❓ Add a ```<Cylinder>``` component and place it inside your view! 

## Task 3 - Add a 3D model! 🤓 🌎
Okay, great! Now you know how to add a ReactVR component, but lets be fair, it is not that interesting! In this task we will introduce you to how to add a 3D component inside your ReactVR app! 

You might already noticed that we have added a **death-star.obj** inside the **/static_assets** folder. Now we are going to use this .obj file and add it to our view. 

❓ First, remove the ```<Box/>``` and ```<Cylinder>``` components (don't worry we are going to use what we learned in the previous task later) and change the pano soruce to ```space.jpg```. 

❓ Import and add ```<Model/>``` component to the view and define the style, as you did in the previous task. 

❓ We need to tell the ```<Model/>``` component to use the **death-star.obj** as its source. Add a ```source``` prop inside your ```<Model/>``` component and define the obj file. 

```
source={{
        obj: asset('objFileNameHere'),
    }}
```

❓ Include the prop ```wireframe``` and set its value to ```true``` inside your ```<Model/>``` component. 

![Death star 3D model with wireframe](https://image.ibb.co/nJxT87/Screen_Shot_2018_02_18_at_10_53_33.png)

👉 **Tips:** If you like to add your own 3D object, https://clara.io/library has a wide varety of 3D models and formats for exporting 3D models. Remember to download the .obj format and add it in your **/static_assets** folder 😉. Sometimes you get both .obj and .mtl file when downloading a 3D model. I like to think of the .obj file as "the container" and the .mtl file as "the fill" 🙃. 

Another way to fill your 3D component is to add a texture! A texture is used for defining the texture to the Model. It is a http address and the Model uses this if mtl is not specified. 

We found a proper texture for the **death-star.obj** here: 
https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png

❓ Add a ```texture``` prop inside your ```<Model/>```, and define it as the url above. Remember, the texture prop always take its argument as a string 😉. Ops! You should also set the ```wireframe``` equal to false. When the ```wireframe``` is true, it will overwrite the texture 😬. 

## Task 4 - Add animation to your 3D Model! 😵 🔄
Now lets add some animation to our 3D component! In this task we will learn how to make the **death-star.obj** spin itself in y-direction. 

❓ Import ```Animated``` and convert your Model to an ```AnimatedModel``` by defining it as described below inside your ```render``` function. Change the ```Model``` to ```AnimatedModel```.

```
const AnimatedModel = Animated.createAnimatedComponent(Model);
```

❓ In order to make the **death-star.obj** spin we need to define its local state when first load the app. This state should be an Animated.Value Lets define the components state:

```
export default class reactVR_course extends React.Component {
  constructor() {
    super();
    this.state = { 
      spin: new Animated.Value(0)
    };
  }
  //more stuff
}
```

❓ Next go ahead and bind the ```spin``` inside the styling of our ```AnimatedModel```. **Hint:** use the ```rotateY``` 😜. 

Is it spinning? 🤔

Nope 👻! We need to do a little more coding before it actually spins! We need to tell the React Component it should start spinning when it reloads the code! In order to this, we are going to use ```componentDidMount()``` function. ```componentDidMount()``` function is one of React's lifecyscles methods and it is invoked immediately after a component is mounted. 

❓ Define the componentDidMount() function insde your React component. Use the ```Animated.timing``` in order to specify the rotation value from 0 to 1 in 5 seconds. Ops. Remember that the duration is measured in ms 😇.

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

This is because rotate transformations have to be strings and not an ```Animated.Value``` as we have set in our state according to the [React VR official documentation](https://facebook.github.io/react-vr/docs/transforms.html#props).

![Transformation documentation from ReactVR](https://image.ibb.co/in6o87/Screen_Shot_2018_02_18_at_11_55_23.png)

Inside our ```componentDidMount()``` function we are changing the value from 0 to 1, but the ```rotateY``` prop expects is a rotation value as string of "0deg" to "360deg". How can we reinterpreted the value 0 to 1 as the string "0deg" to "360deg"? 🤔 

Luckly we can achieve this using _interpolate_ 🤗.

❓ Instead of using ```rotateY: this.state.spin```, change it to ```rotateY: this.state.spin.interpolate()```.

❓ The ```interpolate()``` function takes one arguement. This argument should be an object that looks like this: 

```
{
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
}
```

It is spins! 🎉🎈😄
![Death-star spinning](https://cdn-images-1.medium.com/max/1600/1*5PQi0QMqTVgQxnwxXgrsCw.gif)

❓ Lets clean up our code a little bit and move the right side of the ```rotateY:``` into a separate constant inside our render function and call it for ```spin```. So the the ```AnimatedModel``` should look something like this: 

```
<AnimatedModel
    wireframe={false}
    source={{
        obj: asset('death-star.obj'),
    }}
    style={{
        transform: [
            {translate: [2,0,-4]},
            {rotateY: spin}
        ]
    }}
    texture={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/death-star.png"}
    />
```

But the **death-star.obj** only spins one time 🤔. We want to make it loop! 😁

❓ Move everything that is inside the ```componentDidMount()``` function to a separate function. Name the function for ```spinAnimation()``` and call it from the ```componentDidMount()``` function. Remember to write ```this.spinAnimation()``` in order to call it! 

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

## Task 5 - 


## Task X - Deploy your project! 

### Mac:

#### Option 1

- Connect both your laptop and mobile to the same network. 
- Hold "alt" button and press the wifi icon in upper right corner. Then you see something like this:




not finished!! 
cd into your react vr project

run npm run bundle - This will create a production version of your application. It can take some time to complete. 

Now we have a build folder inside or vr folder. 

go ahead and look into build/index.html file and change line 9 

from 
    <script src="./client.bundle?platform=vr"></script>

to 
    <script src="./client.bundle.js"></script>

and line 15 from

        '../index.vr.bundle?platform=vr&dev=true',

to 
        '../index.bundle.js',


If you use any external assets (asset()), you'll also want to copy your static_assets directory alongside your files so that they can be referenced by your application. At this point, your directory structure should resemble the following:

