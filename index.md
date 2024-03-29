---
layout: page
id: home
page_id: home
css: true
---

<section class="grid">
  <div class="grid center thirds">
    <div class="grid thirds end stack-sm profile-socials">
      <a href="https://twitter.com/{{ site.socials.twitter }}" class="icon-only-ln twitter" aria-label="Twitter">
        <span class="icon">{% include icon/brands/twitter.svg  %}</span>
      </a>

      <a href="https://instagram.com/{{ site.socials.instagram }}" class="icon-only-ln instagram" aria-label="Instagram">
        <span class="icon">{% include icon/brands/instagram.svg %}</span>
      </a>

      <a href="https://koicoffee.co/" class="icon-only-ln koicoffee" aria-label="Koi Coffee">
        <span class="icon">{% include icon/brands/koi-coffee.svg %}</span>
      </a>
    </div>

    <div class="avatar micah center"></div>

    <div class="grid thirds h-start v-end stack-sm profile-socials">
      <a href="https://twitch.tv/{{ site.socials.twitch }}" class="icon-only-ln twitch" aria-label="Twitch">
        <span class="icon">{% include icon/brands/twitch.svg %}</span>
      </a>

      <a href="https://tiktok.com/@{{ site.socials.tiktok }}" class="icon-only-ln tiktok" aria-label="TikTok">
        <span class="icon">{% include icon/brands/tiktok.svg %}</span>
      </a>

      <a href="https://github.com/{{ site.socials.github }}" class="icon-only-ln github" aria-label="github">
        <span class="icon">{% include icon/brands/github.svg %}</span>
      </a>
    </div>
  </div>
  <div class="center text-center">
    <h5>just your friendly neighborhood coffee nerd</h5>
  </div>
</section>

<section class="grid">
  <div>
    <h1 class="accent-lined">About Me</h1>
  </div>
  <div class="grid center thirds stack-lg">
    <div class="info-panel panel">
      <h2>What I work on.</h2>
      <p>My passion is coffee, so to share that passion with others I started my own coffee company, <strong>Koi Coffee</strong>, and am the head roaster of that company. That's my day job and what I enjoy.</p>
      <ul class="ln-list v-end">
        <li>
          <a href="https://koicoffee.co" class="icon-ln koicoffee">
            <span class="icon">{% include icon/brands/koi-coffee.svg %}</span>
            Website
          </a>
        </li>
        <li>
          <a href="https://twitter.com/koi_coffee" class="icon-ln twitter">
            <span class="icon">{% include icon/brands/twitter.svg %}</span>
            Twitter
          </a>
        </li>
        <li>
          <a href="https://instagram.com/koicoffeecompany" class="icon-ln instagram">
            <span class="icon">{% include icon/brands/instagram.svg %}</span>
            Instagram
          </a>
        </li>
        <li>
          <a href="https://facebook.com/koicoffeecompany" class="icon-ln facebook">
            <span class="icon">{% include icon/brands/facebook.svg %}</span>
            Facebook
          </a>
        </li>
      </ul>
    </div>
    <div class="info-panel panel">
      <h2>What I do for fun.</h2>
      <p>I like to create and entertain, be that streaming on Twitch, making videos on TikTok, sharing latte art on Instagram, or coding / designing on Github.</p>
      <ul class="ln-list v-end">
        <li>
          <a href="https://twitch.tv/{{ site.socials.twitch }}" class="icon-ln twitch">
            <span class="icon">{% include icon/brands/twitch.svg %}</span>
            Twitch
          </a>
        </li>
        <li>
          <a href="https://instagram.com/{{site.socials.instagram}}" class="icon-ln instagram">
            <span class="icon">{% include icon/brands/instagram.svg %}</span>
            Instagram
          </a>
        </li>
        <li>
          <a href="https://tiktok.com/@{{ site.socials.tiktok }}" class="icon-ln tiktok">
            <span class="icon">{% include icon/brands/tiktok.svg %}</span>
            TikTok
          </a>
        </li>
        <li>
          <a href="https://github.com/{{ site.socials.github }}" class="icon-ln github">
            <span class="icon">{% include icon/brands/github.svg %}</span>
            Github
          </a>
        </li>
      </ul>
    </div>
    <div class="info-panel panel">
      <h2>What's in my brain.</h2>
      <p>Well… not much but whenever I do have a thought worth sharing I usually write a blog post about it or post it to my social media.</p>
      <ul class="ln-list v-end">
        <li>
          <a href="/blog/" class="icon-ln rss">
            <span class="icon">{% include icon/pencil.svg %}</span>
            Blog
          </a>
        </li>
        <li>
          <a href="https://twitter.com/{{ site.socials.twitter }}" class="icon-ln twitter">
            <span class="icon">{% include icon/brands/twitter.svg %}</span>
            Twitter
          </a>
        </li>
        {%- if site.rss -%}
        <li>
          <a href="{{ 'feed.xml' | relative_url }}" class="icon-ln rss">
            <span class="icon">{% include icon/rss.svg %}</span>
            RSS
          </a>
        </li>
        {%- endif -%}
      </ul>
    </div>
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="grid">
  {% for post in site.posts limit:1%}
  <div>
    <h2 class="accent-lined">Latest Post{% if site.posts.size > 3 %}s{% endif %}</h2>
    {% include modules/post-preview.html post= post %}
  </div>
  {% endfor %}

  {% if site.posts.size > 3 %}
  <div class="grid thirds stack-md sm-preview">
  {% for post in site.posts offset:1 limit:3 %}
    {% include modules/post-preview.html post= post preview-size= 'small' %}
  {% endfor %}

  {% if site.posts.size > 4 %}
    <div class="grid span-3">
      <div class="grid end stretch-sm">
        <a href="/blog/" class="btn tertiary">
          Read more on the blog
        </a>
      </div>
    </div>
  {% endif %}
  </div>
  {% elsif site.posts.size > 1 and site.posts.size < 4 %}
  <div class="grid">
    <div class="grid end stretch-sm">
      <a href="/blog/" class="btn tertiary">
        Read more on the blog
      </a>
    </div>
  </div>
  {% endif %}
</section>
{% endif %}
