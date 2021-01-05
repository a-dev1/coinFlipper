# Inspiration
It's a new year and everyone has resolutions/plans made for the entire year. We wanted to do something not so normal and hence decided to add a virtual dimension to flipping (tossing) a coin but with a real coin. We didn't know until yesterday that such a method is really used in services like Cloudflare for generating random numbers since simulating random numbers through code is not random at all and can be predicted so they depend on external methods to generate randomness (src). So we made a hardware project that flips a coin and recognizes the output via a web interface. So the next time you are stuck to decide upon anything and are out of coins Don't worry just flip a real coin virtually!  

## What it does
We have a flipper machine built using a Raspberry Pi. A **flask server runs on the raspberry pi**. When a user presses the flip button via the web interface. The machine flips the coin and ***recognizes whether it's head/tail using a TensorFlow model.*** The webstream from the hardware is also shown on the website


