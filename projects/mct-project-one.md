---
title: MCT Project One
description: My first IoT project in MCT at Howest Kortrijk. This was my first touches in the IT world.
coverImage: https://cdn.bandithemepark.net/DebaveyeElias/MCTProjectOne.png
publishDate: "22-06-2020"
tags: ["HTML", "CSS", "Javascript", "MYSQL", "Python", "Websockets", "Raspberry Pi"]
---

# The first project of my MCT school carreer

Every semester of the [MCT course at Howest](https://www.mct.be), we have to create and realise a full stack project.
In the second semester of my first year, I had my first Project: **AquaStats**.

The general idea of this project was that every student had to 'invent' and create a device with 3 sensors and 1 actuator that are connected to the internet. We also had to show the data from the sensors on a self-made website.

# What was my project?

I created a device that was able to meassure chlorine, acidity and temperature from a typical Intex pool.
This data was periodically stored in a **Mysql** database and given to the frontend by a **python** backend.

The frontend was made in typical **HTML**, **CSS** and **JavaScript**. This is because I did not know any frameworks yet. So oldschool it is! It was a pretty simple yet informational website.

It could be used to read all historic data but alse manually start a reading of the poolwater.
When manually starting a reading of the poolwater, you ofcourse want to see the data as soon as the reading has been done. This was done with the help of websockets.

I used SocketIO in Python to setup a socket server where the webclient could subscribe to and listen to messages. As soon a message has been received, the data could be updated.

![Website AquaStats](https://cdn.bandithemepark.net/DebaveyeElias/desktopAquaStats.png "Website AquaStats")

# My experience

It definitely wasn't an easy task to start from scratch, but a lot of us made it through the first year with ease!

With the support of all our teachers, and I think I can speak for a lot of people, did help a lot when something went wrong. If I may be honest, this project was the start of everything. Without the things I have learned at MCT, I think I wasn't able to make full stack applications like I do now (Hello this is future me 👋).

A great start to a hopefully successful future.