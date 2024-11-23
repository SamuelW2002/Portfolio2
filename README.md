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

![image](https://github.com/user-attachments/assets/01f95e71-a529-43b8-8f5b-2dfb33283166)

I circled the face i will be demonstrating, to create one of the sides i told three.js to connect vertice 0,1 and 5 to make a triangle, then connect 0,1 and 6, and lastly 0,6 and 5. And yes there is no order in how u define each triangle, u can put them in random orders since all it is is an array of numbers.

Here i made 3 screenshots of the object and edited them in paint to give a clear example of the 3 triangles we just drew.
![image](https://github.com/user-attachments/assets/afadcce5-3755-4a18-afba-85df993cbb9a)
![image](https://github.com/user-attachments/assets/63f42cf2-e680-40b7-9f82-386c479feb5f)
![image](https://github.com/user-attachments/assets/ecd50e72-6218-4b9a-9986-3de548786d3e)

So in this example, 0, 1 and 6 + 0, 5 and 6 would have also made the same rectangle.

Now i made a hole in the object so we could see the inside, when looking at the side from the inside we can no longer see it because the orders of the vertices on a face actually decides how the face it turned.
In our example 0, 6 and 5 connects the vertices clock-wise wich makes the face point outwards.
Now if we switch the order to 0, 5, 6 and have the vertices connect counter clockwise and look at the face from the outside we see a hole:

![image](https://github.com/user-attachments/assets/0722bf82-68f1-467a-9349-903fda8554e4)

This is because the face is now turning to the inside and is no longer visible from the outide, if we look from the inside of the figure we see this:

![image](https://github.com/user-attachments/assets/599b1ad8-b90c-41c7-845e-af386737ada5)

Combining these 3 fundamentals i was able to create the perfect Pentagonal Prism.
Now it is time to apply textures... after doing some in depth studying on UV maps i realised some very advanced math was needed to manually aplly UV maps in a way that i have a flowing background and the icons perfectly on all sides. So i gave up.
But not completely, as a developer u need to be able to adapt and realise that sometimes there has to be a better way to do something. And there is, using blender, the 3D modeling program.

First i will explain how UV maps works using an example in blender:
On top of XYZ coordinates to create the shape there are also UV coordinates, UV coordinates are applied to a folder out version of the 3D figure, every pixel get a uv coordinate between 0, 1 for U and V that tell the pixel where to position itself on the 3D figure using 2D space:

![image](https://github.com/user-attachments/assets/f8359c01-4c0d-4f2b-99c1-7178f7609314)

Using blender made it very easy to create a 3D shape, u can then export it as a GLTF file and import it in React-Three-Fiber and to make it even easier, the little code needed to use the model can be generated using this website: https://gltf.pmnd.rs/

Now, applying a background texture on the shape is easy, but how do apply the icons aswell? Simply just import them and use the XYZ coordinates to position them on the faces right?
Well then u get this mess:

![image](https://github.com/user-attachments/assets/c2a10c28-fb91-4913-9588-da35adab753a)

The screenshot is not very readable but that is okay because this is not a good way to do it.
On the screenshot on the right we have the output node that decides what is shown

All the brown nodes are texture nodes where we add each icon and the background, we then use the green nodes to mix them with the next image to all have them on them mixed and applied to the output node, i also gave each texture it's own UV map, yes this does not make sense, wich is normal, because this is not the best way to do it.
Ontop of being messy, because i needed to apply each icon manually it's not perfectly on the background and u get this effect where the edges just stick out and float next to the figure:

![image](https://github.com/user-attachments/assets/1f6e36af-80b9-48be-9508-11c70c1b0d29)

Lastly this way also tanks the performance since the GLTF file contains more images.

#The Triangle

For the third figure i learned a better way to utilize UV maps, firstly I used GIMP to out all of the icons on one transparent background PNG:

![image](https://github.com/user-attachments/assets/28880d52-b3de-4bfc-9e54-4404a360a01f)

I then used the folowing setup, firstly i made the pyramid and then i applied the background texture using a UV map.
Then i created a second UV map and selected all sides of the triangle and told it to fold out another UV map, in this UV map i applied the PNG i just created and then i moved around the UV map a bit to position the icons. Then i used nodes ad shown at the bottom to apply the right UV maps to the right tectuxture node, mixed them and put them on the output node.

![image](https://github.com/user-attachments/assets/f0abdb65-b96d-486d-aefc-e72550898405)

Then using the conversion website i get this output:

![image](https://github.com/user-attachments/assets/538216d7-30e3-4bc7-b445-46779ccc3900)

Hmm this is not correct... It took me a while to figure out this problem but what ended up happening is that u can only  have 1 UV map in React-Three-Fiber. Now u might think but did u not use multiple in the previous example? No, i used multiple nodes wich all had the same UV map, yes it does not make sense, like i said it was my first try and will be revised later on.

So we can only have a single UV map, to still have all our textures we need to bake. Baking means mixing all of the textures into eachother to create 1 single PNG that can be used with 1 UV map  to create the entire object.

For baking the folowing setup is used, Create a new image texture node and click on new to add an empty image, bind it to the UV map from the icons, in my experience this gives the best result.

![image](https://github.com/user-attachments/assets/95a1fb2b-82ea-4c2d-8911-c08728b6e26e)

Next in the Object screen make sure u are in editing mode:

![image](https://github.com/user-attachments/assets/bf219e6e-14ce-4633-88c2-9c03435e06fd)

Then select the new empty image node so that it gets a white border, selecting this marks it as our output for the baked image:

![image](https://github.com/user-attachments/assets/dac70a91-70a7-4cf6-8c2d-545be729bedc)

Now at the top of the blender screen on the menu bar go to the rendering tab:

![image](https://github.com/user-attachments/assets/22b52258-5ebc-48e0-bbe1-0f22ff271b05)

For the rendering engine select cycles:

![image](https://github.com/user-attachments/assets/45b64ce8-6ff7-4fb8-82b3-3cce6c460579)

Select bake type: Emit

![image](https://github.com/user-attachments/assets/0279f9b7-cc1b-48c9-baa8-1642074c7182)


Then after baking u get the folowing image:

![image](https://github.com/user-attachments/assets/f910adad-9b97-4084-8a89-6ad7de81c5bc)

Now we have a single image with both the images and the background that perfectly fits the icons UV map.

So now we connect the newly baked image and it's UV map to the output node like this:

![image](https://github.com/user-attachments/assets/216adb47-1271-4142-a2ce-1d0770c7ed0c)

Now we can export the model as a GLTF with the current node configuration and we can generate the code using the external website:

![image](https://github.com/user-attachments/assets/c9162775-05a5-47b5-ae6e-0681a95c08f6)

And now we get out result, voila:

![image](https://github.com/user-attachments/assets/dfbc1a97-fd1a-4b33-bd31-cbe617dc8a4a)

Oh....
The problem here took a very long time to figure out and happened to be the simplest solution, the version of Three.Js and React-Three-Fiber i was using was way to old so i simply had to:

npm remove three @react-three/fiber @react-three/drei
npm add three @react-three/fiber @react-three/drei

#MSP skills object

For the last object i repeated all the same steps as above however i got this result:

![image](https://github.com/user-attachments/assets/3f6b5273-36bb-467f-8741-17a845b18b99)







