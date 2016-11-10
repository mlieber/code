
# Overview 

 Used as part of IoT hackaton.
Hackaton for Green Trash Can application:  monitor compostable trash bin to ensure only compost is there; if not, notify someone about the issue .

# Architecture

Code that interacts with Tessel.io micro controller and camera sensor, in Javascript.
Controller takes picture when trash can bin door is opened, and sends off the picture to API for analysis of whether what was just trashed in is indeed compost.
Sends a status reply as a boolean yes/no (using a standard machine learning supervised linear regression algorithm).
