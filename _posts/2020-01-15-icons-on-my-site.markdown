---
layout: post
title:  "Icons on my site"
description: "How I tackle the icon problem"
image: /assets/images/posts/icons-on-my-site/icons-on-my-site.jpg
tags:
  - code
---

<span class="first-letter">L</span>et's talk about icons on the web for a second. There are several ways to go about adding icons to your website, some better than others, some more accessible, some less so, but icons are pretty big part of modern websites. Icons are used to convey information, or add a little more context, or to set a tone or style, sometimes we just use them because they're pretty. But regardless a lot of websites use them. A pretty common way that we've used them in the past and still today are through icon fonts. Now, I have a couple issues with icon fonts. Most of them you've heard before and can be summed up pretty well by [Chris Coyier's post on the topic](https://css-tricks.com/icon-fonts-vs-svg/). Another way is through Sprite sheets whether they be big PNG files with all your icons in them or symbols inside of an svg file like you can read about in [another of Chris Coyier's posts](https://css-tricks.com/svg-sprites-use-better-icon-fonts/). But probably the most accessible way to add icons to your website is just directly embedding the files into HTML whether that's PNGs, SVGs, or even JPEGs. This has [many other benefits](https://css-tricks.com/pretty-good-svg-icon-system/) as well. But it's kind of a pain in the bum.

So first let's look at the structure of an SVG. The code for an SVG looks something like this:

```html
<svg class="icon x2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16px" width="16px">
  <title>Alert</title>
  <path d="M5 1L1 5v6l4 4h6l4-4V5l-4-4H8z" opacity=".2"/>
  <path d="M4.5 0L0 4.5v7L4.5 16h7l4.5-4.5v-7L11.5 0H8zM5 1h6l4 4v6l-4 4H5l-4-4V5l4-4zm2 1.992V9h2V7l.002-.008v-4h-2zM7 10v2h2v-.93a.999.999 0 000-.125V10z"/>
</svg>
```
<p>That gives us this icon here:
 {% include /modules/icon.html name= "alert" class="x2" %}</p>

This is where the problem of copy pasting icons directly into the html lies. That's a lot of markup that makes things harder to read and understand.

So this was the kind of issue I was trying to solve whenever I was working on a redesign of my website. I wanted that acessibility and that speed of directly embedding into the HTML, but I also wanted an easier way to just get an icon on to the page. Something simple like an icon font where I can just either set a class or set a name or something. There are several ways to go about this too. Some icon projects use JavaScript to replace certain elements/attributes with the icon file. I believe this is similar to how [Feather Icons](https://feathericons.com/) and new versions of [Font Awesome](https://fontawesome.com/) handle this. That definitely works, but I have a personal goal of avoiding JavaScript unless it's necessary. Since I'm not a large company and/or don't have a large project I could definitely just get away with copy pasting my icons into my HTML but I had a different idea.

I, like a lot of sites now, use a static site generator to build my site. Static site generators are great for sites like mine that are relatively simple but want certain more advanced functions like a blog or pagenation but really don't want to or can't go with a <abbr title="Content Management System">CMS</abbr> like WordPress or something. <abbr title="Static Site Generator">SSG</abbr>s allow for us to have our cake and eat it too. You may be asking, "why does this matter for icons?" Well, most (if not all) SSGs use templating engines like Liquid or handlebars (or whatever) and those have the concept of includes or partials. So you can write a partial HTML file once and insert it in multiple places wherever you need it. Also most SSGs have some form of conditional statements like if/else or case statements. This way you can choose to use certain HTML or variables on a situational basis.

This is where the icons come in. We can use these two things from our SSG to make an icon system similar to the sprite sheets or icon fonts we're all used to. The SSG I use is Jekyll, which uses the Liquid templating, so the examples I'm going to make below are specific to that (but your SSG probably has something very similar). Also I'm going to be working with SVGs (and recommend you use them as well) but the process would be similar with whatever your chosen format.

So, I want to make a single file I can call on, give it the name of the icon I want, and have it return that icon as an SVG embedded in the HTML. let's call that file `icon.html`.

Here's what that code looks like:

{% raw %}
```html
<svg class="icon {% if include.class %}{{include.class}}{% endif %}" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="16px" width="16px">
{% assign name = include.name %}
{% case name %}
  {% when "alert" %}
    <title>Alert</title>
    <path d="M5 1L1 5v6l4 4h6l4-4V5l-4-4H8z" opacity=".2"/>
    <path d="M4.5 0L0 4.5v7L4.5 16h7l4.5-4.5v-7L11.5 0H8zM5 1h6l4 4v6l-4 4H5l-4-4V5l4-4zm2 1.992V9h2V7l.002-.008v-4h-2zM7 10v2h2v-.93a.999.999 0 000-.125V10z"/>
  {% when "arrow-left" %}
  ...
  {% else %}
    <title>SVG ERROR</title>
    <desc>SVG ERROR: Icon name not found or undefined. Check Jekyll include declaration.</desc>
    <path d="M2 2V9.832l2.54-3.176 1.985 2.975 2.924-3.89 2.053 2.052L14 5.295V2.002zm12 4.709l-2.498 2.5-1.95-1.95-3.077 4.104-2.016-3.017L2 11.424V14h12V8.123z" opacity=".2" fill="red"/>
    <path d="M0 0v12.326l.893-1.115.107-.135 1-1.252V8.23L1 9.48V1h14v1.885l-1 1V2.002L2.025 2V9.832L3 8.613V3h10v3.32l1-1V5.3l1.855-1.855-.003-.004.148-.148V0zm7.959 4a2.997 2.997 0 00-2.998 2.998c0 .102.02.198.03.297l1.556 2.332.006.002L9.475 5.74l1.46 1.461c.005-.068.02-.133.02-.203A2.997 2.997 0 007.96 4zM16 4.71l-.85.85-.002-.001L14 6.707V6.734l-1 1V13h-1v-1c0-1.108-.892-2-2-2H7.523L6.5 11.363l-.885-1.324A1.993 1.993 0 004 12v1H3v-2.797l-.975 1.22V14H14V8.123l1-1V15H1v-.734l1-1.252V11.42l-1 1.25-.889 1.111L0 13.92V16h16zM9.578 7.26L7.557 9.953c.133.018.264.041.402.041a2.988 2.988 0 002.678-1.676z" fill="red"/>
{% endcase %}
</svg>
  </svg>
```
{% endraw %}

That file is called into the html like this:

{% raw %}
```html
{% include icon.html name= "alert" class="x2" %}
```
{% endraw %}

You can see here that I call the partial html file **icon.html** and pass it the parameters of **name** and **class**. This says I want an icon with the name **alert** and the added class of **x2**. If you look at the `icon.html` file we created above, you can see that it starts with the `<svg>` tag. Inside that tag we have a class of `icon` and some templating that says **if we pass in a class** to add that to the list of classes. That is how we got the `x2` class which makes our icon twice it's normal size. Now let's look at how we got the alert icon. Under the `<svg>` tag we have some more templating. The first line assigns whatever name we passed in to a variable to check against. The second line starts a case statement. We then use that case statement to compare the name we passed in with the names of the icons in our file. If it finds an icon of the same name, it then spits out the `title` and `path`(s) of our svg icon. The case statement then ends and closes off the file with a ending `</svg>` tag. This gives us our full svg icon.

However, if it doesn't find an icon with a name that matches whatever we passed in, you can see after the {% raw %}`{% else %}`{% endraw %} we gave it an icon to default to. You wouldn't have to have an icon to fall back to, but I chose to do so because I think it makes it easier to see where things go wrong, and I chose to make it overwrite to red so that it would be easier to spot.

<p>That icon looks like this:
 {% include /modules/icon.html name= "404" class="x2" %}</p>

As I mentioned before there are several ways to get icons on to your website, but this is how I chose to tackle it. I hope that this post was informative (or at least mildly entertaining). Maybe you've done something similar, or maybe you know a better way to tackle this problem. Either way, I'd love to hear from you and know what you think.
