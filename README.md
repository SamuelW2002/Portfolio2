#My Three JS Journey

In this documentation I will use screenshots I collected throughout my journey while learning Three.js, React-Three-Fiber and Blender.
The documentation is not ment to be one comprehensive guide but more of a things I discovered and roadblocks I had journal.
The journey began months ago when I made my first developer portfolio, I wanted something unique.
When searching for ideas i stumbled upon Three.js and that is the moment i knew i had to use it.

I then spend three days reading guides and watching videos on three.js failling to even make a cube have images display on its sides.
During my search i saw recommendations online about React-Three-Fiber making Three.js more beginner friendly.

I thought it would be a cool idea to have multiple 3D objects displaying all of the tech i am familiar with.
This might not be the most readable way but my portfolio is ment to be flashy and cool and less for information transfering, for that a interview is more suitable.

#The Cube
The cube is the easiest of the figures, this is because a simple cube has a build in implementation inside of React-Three-Fiber making it easy to use.
Using the BoxGemotry class all i had to do was add materials to the cube and light to the canvas and voila.
To get the images on the cube with a nice background that flows over into the other sides i did it the most basic way.
I used draw.io and made a folded out cube over the background images and manually positioned the icons.
I then used the snipping tool to cut out the images and added them to the sides of the cube.
I must say i was very suprised with how good the result was first try.

![image](https://github.com/user-attachments/assets/ea0cfdda-12e2-4f41-a7cd-ac894ad91d4f)

However this is, like i said, the simple one.

#The Pentagonal Prism

Next up i wanted a Pentagonal Prism, well that was a big step up from a cube.
The pentagonal prism does not have an implemented base class in React-Three-Fiber, wich means we will need to learn Three.Js and draw the shape ourselves.
To create a shape in three.js first u need vertices, these are points in 3D space.
a pentagonal prism has 5 points on the top face and 5 points on the bottom face wich get connected.
So we create an array with 30 points, each set of 3 points represents the x y z coordinates for a point in 3d space.

![image](https://github.com/user-attachments/assets/abc80892-5712-446b-a245-72ab659bf841)

We now have our 10 points, now we need to tell Three.js how to connect these points to create faces.
However Three.js is just a simple computer program, to make it easy for it to understand how to connect points it can only work with triangles.
Given 3 points in space there is only 1 possible combination of connections wich forms a triangle, any more points and they can have multiple ways of being connected.
However in geometry every shape can be made from triangles, so a triangle is the perfect shape for a computer program.

To create a face we once again define an array of faces, this time each set of 3 defines 3 points in x y z space that need to be connected.
A point is defined by a whole number, 0 for the first vertex in the array, 1 for the second, and so on ...
A pentagon can be drawn by combining 3 triangles, so to create the top side of the prism we give 9 points that form 3 triangles that when combined make a pentagon.
For the sides, wich are rectangles, we only need 2 triangles.
However i will show an example where i use 3 triangles to draw a rectangle, this shows that there is no fixed way of using Three.js



