---
layout: post
title:  "Webkit Gradients to Transparent"
description: "Finding and working around a render issue in webkit."
image: /assets/images/posts/webkit-gradients-to-transparent/preview.png
tags:
  - code
---

<span class="first-letter">R</span>ecently on this site I spent a little too long trying to figure out why my colors on webkit were darker and muddy compared to Firefox, or Chrome. So I figured I would write about it in hopes that someone else is spared the hunt. In webkit there is a rendering bug that turns all gradients to transparent to color shift to black before getting to transparent. The result is darker muddy colors. Basically if I wanted a gradient from red to transparent, instead of the gradient rendering to something like this:

`linear-gradient(rgba(255,0,0,1), rgba(255,0,0,0))`

it would render like:

`linear-gradient(rgba(255,0,0,1), rgba(0,0,0,0))`

This might not seem like a big deal but what it does, on Safari and Webkit-GTK based browsers, is cause your red as it fades to get darker and muddier. Look at the difference when comparing them side by side:

<section class="constrained" markdown="1">
  ![webkit gradient](/assets/images/posts/webkit-gradients-to-transparent/webkit-gradient-to-transparent.png)
</section>

To work around this I switched from using `transparent` to the color as rgba with 0 as the alpha value.
