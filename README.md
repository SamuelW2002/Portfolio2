# My Three.js Journey

Welcome to the documentation of my journey learning **Three.js**, **React-Three-Fiber**, and **Blender**. This document is not meant to be a comprehensive guide but rather a journal of discoveries and roadblocks I encountered along the way.

## The Beginning

Months ago, I set out to create a unique developer portfolio. While searching for ideas, I stumbled upon **Three.js**. The moment I saw its capabilities, I knew I had to use it.

After spending three days poring over guides and videos, I couldn't even get a cube to display images correctly on its sides. During my research, I came across **React-Three-Fiber**, a framework that promised to make **Three.js** more beginner-friendly.

I envisioned a portfolio featuring multiple 3D objects, each representing the tech I am familiar with. While it might not be the most practical format for information sharing, I wanted something visually striking and fun. For details, I figured an interview would be more suitable.

---

## The Cube

Creating a cube is straightforward thanks to the built-in **BoxGeometry** class in React-Three-Fiber. All I needed was to add materials to the cube and light to the canvas—voilà!

To apply images on the cube seamlessly, I used **draw.io** to create a flattened cube template. I manually positioned icons over a background, then used the snipping tool to crop and map the images onto the cube. Surprisingly, the results were fantastic on the first try.

![image](https://github.com/user-attachments/assets/ea0cfdda-12e2-4f41-a7cd-ac894ad91d4f)

However, this was the simplest figure to create.

---

## The Pentagonal Prism

Moving on, I attempted a pentagonal prism. Unlike the cube, this shape lacks a built-in class in React-Three-Fiber. This meant diving into **Three.js** to define the shape manually.

### Defining Vertices
A pentagonal prism has 10 vertices: 5 for the top face and 5 for the bottom. Each vertex requires three coordinates (x, y, z) in 3D space, resulting in an array of 30 points that. Each set of 3 points are seen as the x, y and z coordinates of a single vertice.

![image](https://github.com/user-attachments/assets/abc80892-5712-446b-a245-72ab659bf841)

### Creating Faces
Three.js uses **triangles** to construct faces, as triangles are the simplest shapes for a computer to process. If we use more than 3 points there are multiple ways to connect them wich cannot be defined, however 3 points only have a single solution when connecting them all. By connecting three vertices at a time, I defined triangular faces for the pentagonal base and top and rectangular sides.

Here’s an example of how triangles form a single rectangular side:

![image](https://github.com/user-attachments/assets/01f95e71-a529-43b8-8f5b-2dfb33283166)

I have highlighted the face I will be demonstrating. To create one of the sides, I instructed Three.js to connect vertices 0, 1, and 5 to form a triangle, then vertices 0, 1, and 6, and finally vertices 0, 6, and 5. The order of defining each triangle does not matter—you can specify the vertices in any sequence, as it is simply an array of numbers.

To illustrate this clearly, I created three screenshots of the object and edited them in Paint to show the three triangles we just defined.

![image](https://github.com/user-attachments/assets/afadcce5-3755-4a18-afba-85df993cbb9a)

![image](https://github.com/user-attachments/assets/63f42cf2-e680-40b7-9f82-386c479feb5f)

![image](https://github.com/user-attachments/assets/ecd50e72-6218-4b9a-9986-3de548786d3e)

In this example, 0, 1, and 6 combined with 0, 5, and 6 would also form the same rectangle.

Next, I created a hole in the object to reveal the inside. When viewing the side from the inside, it becomes invisible because the order of the vertices for a face determines its orientation. In our example, connecting vertices 0, 6, and 5 in a clockwise order makes the face point outward. If we reverse the order to 0, 5, and 6 (counterclockwise), the face will now point inward. As a result, when viewed from the outside, we see a hole.

![image](https://github.com/user-attachments/assets/0722bf82-68f1-467a-9349-903fda8554e4)

This is because the face is now turning to the inside and is no longer visible from the outide, if we look from the inside of the figure we see this:

![image](https://github.com/user-attachments/assets/599b1ad8-b90c-41c7-845e-af386737ada5)

Combining these 3 fundamentals i was able to create the perfect Pentagonal Prism.

### UV map in Three.js

Now it’s time to apply textures. After delving into UV maps, I realized that manually creating them to achieve a seamless background with perfectly aligned icons on all sides requires advanced math. So, I decided to step back.

But giving up entirely wasn’t an option. As a developer, it’s essential to adapt and recognize when there’s a better way to achieve a goal. In this case, the solution was using Blender, a powerful 3D modeling program.

## Blender

First, I’ll explain how UV maps work using an example in Blender:

In addition to XYZ coordinates used to define the shape, there are also UV coordinates. These coordinates are applied to an unfolded version of the 3D figure. Every pixel is assigned a UV coordinate between 0 and 1 for both U and V, which determines where the pixel is positioned on the 3D figure using a 2D space:

![image](https://github.com/user-attachments/assets/f8359c01-4c0d-4f2b-99c1-7178f7609314)

Using Blender makes it very easy to create a 3D shape. Once the shape is ready, you can export it as a GLTF file and import it into React-Three-Fiber. To simplify the process further, the minimal code required to use the model can be generated using this website: https://gltf.pmnd.rs/.

Applying a background texture to the shape is straightforward, but what about adding the icons? You might think you can simply import them and use XYZ coordinates to position them on the faces, right? Well, that approach results in a mess:

![image](https://github.com/user-attachments/assets/c2a10c28-fb91-4913-9588-da35adab753a)

The screenshot may not be very clear, but that’s fine because this is not an ideal way to achieve the desired result.

In the screenshot on the right, you can see the output node, which determines what is displayed.

The brown nodes represent texture nodes where we add each icon and the background. The green nodes are used to blend these textures together so they can all be applied to the output node. I also gave each texture its own UV map. Yes, this setup seems nonsensical—and that’s expected because this isn’t the best method.

Beyond being messy, this approach has other flaws. Since I had to apply each icon manually, they don’t align perfectly with the background, creating an effect where the edges stick out and appear to float next to the figure:

![image](https://github.com/user-attachments/assets/1f6e36af-80b9-48be-9508-11c70c1b0d29)

Lastly this way also lowers the performance of the website since the GLTF or GLB file contains more images.

### The Triangle

For the third figure, I learned a better way to utilize UV maps. First, I used GIMP to arrange all the icons onto a single transparent background PNG:

![image](https://github.com/user-attachments/assets/28880d52-b3de-4bfc-9e54-4404a360a01f)

I then used the following setup: First, I created the pyramid and applied the background texture using a UV map. Next, I created a second UV map, selected all the sides of the pyramid, and unfolded them into another UV map. On this second map, I applied the PNG I had just created and adjusted the UV coordinates to position the icons correctly. Finally, I used nodes, as shown below, to assign the appropriate UV maps to their corresponding texture nodes, blended them together, and connected them to the output node.

![image](https://github.com/user-attachments/assets/f0abdb65-b96d-486d-aefc-e72550898405)

Then using the conversion website I got this output:

![image](https://github.com/user-attachments/assets/538216d7-30e3-4bc7-b445-46779ccc3900)

Hmm, this isn’t correct... It took me a while to figure out the problem, but it turns out that React-Three-Fiber only supports a single UV map per object. You might wonder, didn’t I use multiple UV maps in the previous example? No, I used multiple texture nodes, all relying on the same UV map. Yes, it’s a bit confusing—it was my first attempt and will be improved later.

Since we can only use one UV map, we need to combine all the textures into a single image. This process is called baking. Baking merges all the textures into one PNG file that can be applied to the object using a single UV map.

For baking, the following setup is used: create a new image texture node, click New to add an empty image, and link it to the UV map used for the icons. In my experience, this approach gives the best results.

![image](https://github.com/user-attachments/assets/95a1fb2b-82ea-4c2d-8911-c08728b6e26e)

Next in the Object screen make sure editing mode is selected

![image](https://github.com/user-attachments/assets/bf219e6e-14ce-4633-88c2-9c03435e06fd)

Then select the new empty image node so that it gets a white border, selecting this marks it as our output for the baking process.

![image](https://github.com/user-attachments/assets/dac70a91-70a7-4cf6-8c2d-545be729bedc)

Now at the top of the blender screen on the menu bar navigate to the rendering tab.

![image](https://github.com/user-attachments/assets/22b52258-5ebc-48e0-bbe1-0f22ff271b05)

For the rendering engine select "Cycles".

![image](https://github.com/user-attachments/assets/45b64ce8-6ff7-4fb8-82b3-3cce6c460579)

Select bake type "Emit".

![image](https://github.com/user-attachments/assets/0279f9b7-cc1b-48c9-baa8-1642074c7182)

After baking u get an image as shown below.

![image](https://github.com/user-attachments/assets/f910adad-9b97-4084-8a89-6ad7de81c5bc)

Now we have a single image with both the icons and the background that perfectly fits the icons UV map.
Next we connect the newly baked image and the UV map to the output node like this.

![image](https://github.com/user-attachments/assets/216adb47-1271-4142-a2ce-1d0770c7ed0c)

Now we can export the model as a GLTF or GLB file with the current node configuration and we can generate the code using the external website:

![image](https://github.com/user-attachments/assets/c9162775-05a5-47b5-ae6e-0681a95c08f6)

And now we get our desired result.

![image](https://github.com/user-attachments/assets/dfbc1a97-fd1a-4b33-bd31-cbe617dc8a4a)

Oh...

The issue here took me a long time to figure out, and it turned out to be the simplest solution. The version of Three.js and React-Three-Fiber I was using was outdated because I had initialized the project quite a while ago. To fix it, I just had to run the following commands.

```bash
npm remove three @react-three/fiber @react-three/drei
npm add three @react-three/fiber @react-three/drei
```

This updated the packages to the latest versions and resolved the problem.

### MSP skills object

For the last object I repeated all the same steps as above however I got this result.

![image](https://github.com/user-attachments/assets/3f6b5273-36bb-467f-8741-17a845b18b99)

I used the folowing UV map to get this outcome.

![image](https://github.com/user-attachments/assets/a0881b88-87e6-40ba-9bb8-bb89907e6400)

The issue arises because the figure is so complex and the UV map is so large that the textures end up getting distorted. I received advice that altering the UV map to fit the texture is poor practice. Instead, I need to learn to create the texture in a way that fits the UV map.

To resolve this, I need to create a UV map that is easier to work with. By using different methods to unfold the figure, I was able to generate this UV map.

![image](https://github.com/user-attachments/assets/ff86f520-952a-4f33-acea-1e7fda7c4e8d)

I exported this UV map and put the it into draw.io, this allowed me to put the icons ontop of the UV map to position them correctly.

![image](https://github.com/user-attachments/assets/ef5e7238-1b58-40c9-97bd-54f03bbceca6)

Next I need the exported PNG to keep the same dimensions as the UV map so I drew a rectangle over the UV map and made the inside invisible:

![image](https://github.com/user-attachments/assets/4c2ee6d2-5874-4d4b-ab68-94c526d27802)

Then I deleted the UV map PNG.

![image](https://github.com/user-attachments/assets/17918f45-7632-42f2-9e1a-a2c49597ebfe)

Lastly I made the sides of the rectangle invisible and exported the PNG, because the rectangle was still present the PNG keeps the perfect dimensions.
Importing it into blender gives the folowing result.

![image](https://github.com/user-attachments/assets/d133f61a-98f7-4c29-97b2-94e962ab5807)

Then by using baking I created the desired figure.

### Pyramid and Prism remake

Now I will repeat this process for the pyramid and pentagonal prism so they look better.

Export UV layout.

![image](https://github.com/user-attachments/assets/a2ee5ad7-29c9-4af5-8395-fa0fe7be2ddf)

In draw.io add the icons and the square.

![image](https://github.com/user-attachments/assets/1ac3e34a-1193-44e6-a5d1-7b1dc4dfbd21)

Delete the background, make square invisible, export from draw.io with transparent background, import into blender and lastly edit the UV map SLIGHTLY to get the desired result.

![image](https://github.com/user-attachments/assets/2a820f7a-bdd0-4476-8ffb-ab75140a7956)

Now for the background we can use a completely different UV map so we can fold the object differently, usually the cube projection gives the best flow effect on the background but experimenting may be required.

![image](https://github.com/user-attachments/assets/1f60c36d-d60b-4cf4-9f94-d3e2f266b28d)

Bake the images together like before.

![image](https://github.com/user-attachments/assets/3fdc7f54-c09a-48ee-8601-47e0161d15b3)

![image](https://github.com/user-attachments/assets/9a777ec7-4d23-4e1b-95cc-4f8cfbfdf5ae)

## Deploying app

After everything is finished we can deploy the react website to the cloud and relax, oh wait... there is another error.

![image](https://github.com/user-attachments/assets/da0fee06-a91b-4fe5-8f78-4c5ee9710874)

![image](https://github.com/user-attachments/assets/94267bff-a626-42da-8794-002dec05001b)

Why does this happen when deployed but everything works fine locally? This has to be one of the most frustrating problems I’ve faced.

So, what's different? When deploying an app, the code gets built and packaged, and the 'dist' folder is deployed. However, when running locally, this step doesn't occur.

So, why is it failing? It's actually quite simple: when the code is built, it can't access the GLTF or GLB files in the assets folder because it doesn’t recognize the format. This causes the GLTF or GLB files to not be moved to the dist folder. To fix this, the GLTF or GLB files need to be moved to the 'public' folder, located directly under the root folder (create the folder if it doesn’t exist)

![image](https://github.com/user-attachments/assets/23bb3540-c2b3-4b56-a596-9a661d67a2d8)

And now, it works!

Voila! This is a somewhat detailed guide on the biggest issues I faced during my Three.js journey. I hope this documentation helps someone overcome the challenges I encountered.
