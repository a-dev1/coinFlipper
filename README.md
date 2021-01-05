# Inspiration
It's a new year and everyone has resolutions/plans made for the entire year. We wanted to do something not so normal and hence decided to add a virtual dimension to flipping (tossing) a coin but with a real coin. We didn't know until yesterday that such a method is really used in services like Cloudflare for generating random numbers since simulating random numbers through code is not random at all and can be predicted so they depend on external methods to generate randomness (src). So we made a hardware project that flips a coin and recognizes the output via a web interface. So the next time you are stuck to decide upon anything and are out of coins Don't worry just flip a real coin virtually!  

## What it does
We have a flipper machine built using a Raspberry Pi. A **flask server runs on the raspberry pi**. When a user presses the flip button via the web interface. The machine flips the coin and ***recognizes whether it's head/tail using a TensorFlow model.*** The webstream from the hardware is also shown on the website  

## How we built it
Well, this was indeed a crafty hack for us. We took a **pen stand** and attached it to a **servo motor**. So this acts as a ***flipper machine.*** So we also hooked up a **webcam under the flipper cylinder** so that the stream can be viewed on the website and also image recognition could also be done. For the image recognition part. We **trained a TensorFlow model using the teachable machine**. So that the output is recognized using our model  

## Challenges we ran into
📌 Creating a tf model was not familiar to us until discovering a teachable machine.<br>
📌  The recognition was not perfect due to poor camera quality and the shiny nature of the coin.<br>
📌  Creating support for the flipper was a tricky part.<br>  

## Accomplishments that we are proud of
✅  Used teachable Machine to create a tf model and used it in our code.<br>
✅ Painted both sides of the coin so that recognition happens faster since the probability of each side remains unaltered.<br>
✅  Could come out with a working flipper machine as planned !<br>

## What we had learned
⭐  Using TensorFlow for the first time<br>
⭐  Using OpenCV to stream camera output to the website.<br>
⭐ Creating animations on Website<br>  

## What's next for Flip Your Vibe
📍  Find a way to handle concurrent requests and queue them.<br>
📍  Build something similar for randomizing another property<br>
📍  Currently, this project works in my local network. We could not make it public owing to risk factors of port forwarding my local network.<br>
📍  Find a way to make this public.<br>

http://flipwith.us
