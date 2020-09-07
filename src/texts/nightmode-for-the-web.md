---
type: text
title: "Nightmode for the web"
date: 2016-07-15
---

(Originally posted on 24/11/2015)

Night mode is an early example of an adaptive feature found on GPS Navigators.
More specifically, the device knows your current latitude/longitude and the
position of the sun, and by knowing this it turns on a low contrast map when
you either drive through a tunnel or drive at night. This is done as to not
blind the driver and thus it adapts to your needs through knowledge of your
environment.

### Night mode on the computer?
We've established that night mode exists on GPS Navigators as to not blind the
drivers and potentially end up in a car accident. That is an excellent feature,
but what about the place where we spent most of our time? The majority of our
time is spent either in front of our phone or computer, both at day and night.
So is night mode a thing on those devices too? No.


Work has been done and the amazing team behind [f.lux](f.lux) has created a
program that adjusts the colour temperatur of your screen at night as to not
blind you or damage your eyes. This is great progress and I recommend everyone
to use it on their computer (although watching movies and editing photos can be
a strange experience if you forget it's on) and on their mobile devices too
when companies like Apple decides it's allowed in the App Store. But what about
all the people that aren't using [f.lux](f.lux)? They seem to have been left
behind.

### NightMode.js
This is exactly why I have created NightMode.js. It is a small script that
allows you to specify css that will only be applied if the sun is down at the
time the user loads the website. You can read more about it at
[https://briix.github.io/NightModejs/](https://briix.github.io/NightModejs/).
You definitely shouldn't use it yet as there are still some quirks that needs
to be worked out.

Right now it works by requesting the user's location and then send the
latitude/longitude to an api that returns the sunset and sunrise times for the
specific location. This works and it does apply the correct css based on time
of day, but it is slow. Right now it takes several seconds from the website has
loaded till the api returns the sunset/sunrise times. That leaves enough time
for the user to still be blinded by the websites colours before night mode is
applied.

### Where to go from here
This was a very short introduction to the topic and the script. It might be a
small step in the right direction, but I think it is an important one and one
that leads towards a more adaptive web and ultimately one with better UX.
Bramstein wrote an
[article](https://www.bramstein.com/writing/preload-hints-for-web-fonts.html)
back in August about preloading web fonts. If the same thing could be applied
to something like NightMode.js we might be able to know enough about the user's
environment to apply the correct css before loading the page. An even better
solution would be if it was possible to specify two CSS files. One with the
standard CSS and one with the CSS that should be applied when the sun is down.

The script is still in its very early phase and can definitely be improved.
This isn't something that's going to blow people's mind and in the best case
they won't even notice it is there, but if you want to help out, please don't
hesitate to do so. You can either fork my repo or do something on your own.
Regardless of what it is, any work done on this topic right now is better than
the no work that was done before.

I'm excited for what this could bring to the web and I hope you are too.
