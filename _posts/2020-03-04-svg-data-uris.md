---
layout: post
title:  "SVG data URIs and Sass functions"
description: "How I tackle svg background images on this site"
image: /assets/images/posts/svg-data-uris/svg-data-uris.jpg
post_id: svg-data-uris
css: true
tags:
  - code
---

On my site all of my iconography is done by directly placing the svg into my html. (Well kinda you can read my post [Icons on my site](https://micahilbery.com/2020/01/15/icons-on-my-site.html) for more on this.) This is great for a lot of reasons but there are a couple places where it wasn't possible/practical to do this. For those situations I use an svg data URI to set the desired svg as the background image. Here's where I ran into problems. I use a fill of `currentColor` for all my svgs. My site supports the `prefer-color-scheme` media query and changes it's colors accordingly. By using `currentColor` no matter what the preferred color scheme is the icons will automatically change color too. The problem is that svgs in background images don't support `currentColor` as a fill. I could have solved this several ways but the way I chose to solve it was by writing a Sass function that accepted name, color and alpha parameters and would spit out the svg I wanted in the color and opacity I wanted it. This way I didn't have to manually change fill values or keep multiple copies of the svg in the colors I needed. Let's have a look at what that looks like.

First I needed the function to spit out the svg. Here's what that looks like:

```scss
@function bg-img-svg($name, $fill : 'black', $alpha : 1.0) {
  @if ( $name == 'svg-name' ) {
    @return(url('data:image/svg+xml;utf8,<svg fill="#{real-rgba($fill,$alpha)}"><path/></svg>'));
  } @else {
    @return(none);
  }
}
```

So you can see we're declaring the function `bg-img-svg()` and accepting the parameters name, fill, and alpha with defaults set on the fill and alpha just to try and ward off errors. Then we look to see if the name matches any of our svg's names, place our color and alpha in our fill, and return that svg. You might have noticed that in the fill property on the svg that we call another function called `real-rgba()` This is a function to workaround Sass turning every color it can into HEX. For our svg to work it needs to be in rgba. That function looks like this:

```scss
@function real-rgba($color : black, $alpha : 1.0) {
  @return unquote("rgba(#{red($color)}, #{green($color)}, #{blue($color)}, #{$alpha})");
}
```

This allows me to set an svg of whatever color and opacity I need as a background image. Now let's look at a few use cases for this. The first one is for my contact page background. For it I have an svg pattern that is repeated. for the dark theme i needed a dark grey colored pattern and for the light theme I needed a light grey pattern and both have different opacities. The scss to achieve this looks like this:

```scss
body {
  background: {
    color: var(--bg-alt);
    image: bg-img-svg('contact-pattern', $light-grey-500, 0.3);
    repeat: repeat;
  }
  @media( prefers-color-scheme: dark ) {
    background-image: bg-img-svg('contact-pattern', $dark-grey-700, 0.5);
  }
}
```

that spits out a background image that looks something like this:

<div class="preview-image contact-background-demo"></div>
<br>

Let's look at another use case. Let's look at checkboxes and radio buttons. I want to put a checkmark as the background image of checked radio buttons and checkboxes. Again here's the scss:

```scss
--checked: #{bg-img-svg('check', $light-grey-100)};

@media( prefers-color-scheme: dark ) {
  --checked: #{bg-img-svg('check', $pink-900)};
}

input[type="radio"]:checked,
input[type="checkbox"]:checked {
  background: {
    color: var(--accent-color);
    image: var(--checked)
    size: 1rem;
    position: center;
    repeat: no-repeat;
  }
}
```

And that produces something like this:

<form class="grid halves stack-sm panel">
  <div class="input-container">
    <fieldset class="grid">
      <legend>
        {% include modules/icon.html name="pizza" %}
        <span>Pizza Toppings</span>
      </legend>
      <div>
        <input id="pepperoni" name="toppings" type="checkbox" value="pepperoni" checked>
        <label for="pepperoni">Pepperoni</label>
      </div>
      <div>
        <input id="sausage" name="toppings" type="checkbox" value="sausage">
        <label for="sausage">Sausage</label>
      </div>
      <div>
        <input id="bacon" name="toppings" type="checkbox" value="bacon">
        <label for="bacon">Bacon</label>
      </div>
    </fieldset>
  </div>
  <div class="input-container">
    <fieldset class="grid">
      <legend>
        {% include modules/icon.html name="pizza" %}
        <span>Pizza Crust</span>
      </legend>
      <div>
        <input id="thin" name="crust" type="radio" value="thin">
        <label for="thin">Thin</label>
      </div>
      <div>
        <input id="handtossed" name="crust" type="radio" value="handtossed" checked>
        <label for="handtossed">Hand Tossed</label>
      </div>
      <div>
        <input id="pan" name="crust" type="radio" value="pan">
        <label for="pan">Pan</label>
      </div>
    </fieldset>
  </div>
  <button type="reset" class="btn success span-2 end">
    {% include modules/icon.html name="send" %}
    Send
  </button>
</form>
<br>

Anyway that's how I chose to solve this problem but maybe you know a better way. I'd love to hear about it if you do. I'm always looking for cleaner code.
