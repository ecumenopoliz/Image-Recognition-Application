# Object-Recognition-Application
Object recognition application

This is an Object recognition application that can use multiple machine learning models, which are added via server updates.
It was made by Eivind Hagtvedt and Maris Uzuls as part of a Bachelor project spring 2022.

## Running frontend code

###Launch Application 
---------------------------------------
Frontend can be launched using an android studio emulator:<br />
in command line interface:<br />
npx react-native start<br />
<br />
in another command line interface:<br />
npx react-native run-android<br />

--------------------------------------
to run on android phone:<br />
enable developer mode on android phone.<br />
allow usb-debugging in the developer options.<br />
connect phone to computer with usb.<br />
check for devices in command line with 'adb devices'<br />
<br />
then follow the same instructions for android studio emulator above.<br />

--------------------------------------
more information can be found on https://reactnative.dev/docs/environment-setup

--------------------------------------
Application can be published to google play store by following the instructions found on https://reactnative.dev/docs/signed-apk-android

## Running main backend code

We expect a user to have python3, pip, GitBash, and python IDE like PyCharm installed on their device before going further with instructions. 
Using git from a library containing requirements.txt:
Run the command under to install necessary modules for running the backend code.

`pip3 install -r requirements.txt`

Afterwards project can be opened via users prefered IDE and started, otherwise simply navigate to Object-Recognition-Application/Backend/ClientServer/ and run the main.py code.



## Starting docker-compose services

Directory Object-Recognition-Application/Backend/ also containts docker-compose.yml file, requires prior Docker and docker-compose installed on their device. If both are installed simply run following command in git while located in the directory containing docker-compose.yml 

`docker-compose up -d`

The command will start the containers for both MySQL database and RabbitMQ queue system.

--------------------------------------
more information can be found on https://docs.docker.com/compose/install/ and https://docs.docker.com/compose/reference/up/

--------------------------------------
