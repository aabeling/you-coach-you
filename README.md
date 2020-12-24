![CI](https://github.com/aabeling/you-coach-you/workflows/CI/badge.svg?branch=main)

# Motivation 

I started this project to coach me with my exercises to strengthen my back.     
My orthopedist gave me a paper with twelve exercises and I wanted an app which guided me through them.    
I thought it would be fine if everyone could define their own exercises, tailored to everyone's own needs. So the app should use some language to define exercises and the possibility to load such programs into the app.    
My twelve exercises can now be found in    
[rueckentraining.yaml](examples/rueckentraining.yaml).

It would be great if a lot of people would contribute by defining their exercises.

# The program language

Currently a program consists of operations which are executed in sequence.    
The supported operations are:

* say: instructs the app to say something using text-to-speech
* wait: delays for some seconds until the next operation is executed
* display: displays some information, a header and a description. This can be used to show additional information about the exercise.

Further ideas for operations or program flows (not implemented yet):

* image: show some image, e.g. to explain the exercise
* timer: show a timer displaying the remaining seconds
* loops: instead of repeating operations several times it would be nice to define loops
* variables: define global variables which e.g. to control delays or repeats

# Technical details

This project uses tns 6.5.0 since ``tns preview`` did not work for the latest version.
