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
        {% include modules/icon.html name="twitter"  %}
      </a>

      <a href="https://github.com/{{ site.socials.github }}" class="icon-only-ln github" aria-label="GitHub">
        {% include modules/icon.html name="github" %}
      </a>

      <a href="mailto:{{ site.email }}" class="icon-only-ln protonmail" aria-label="Mail">
        {% include modules/icon.html name="mail" %}
      </a>
    </div>

    <div class="avatar center">
      <picture>
        <source srcset="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" type="image/jpeg">
        <img src="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" alt="Micah Ilbery">
      </picture>
    </div>

    <div class="grid thirds h-start v-end stack-sm profile-socials">
      <a href="https://twitch.tv/{{ site.socials.twitch }}" class="icon-only-ln twitch" aria-label="Twitch">
        {% include modules/icon.html name="twitch" %}
      </a>

      <a href="https://youtube.com/c/{{ site.socials.youtube }}" class="icon-only-ln youtube" aria-label="YouTube">
        {% include modules/icon.html name="youtube" %}
      </a>

      <a href="https://discord.gg/{{ site.discord-invite }}" class="icon-only-ln discord" aria-label="Discord">
        {% include modules/icon.html name="discord" %}
      </a>
    </div>
  </div>
  <div class="center text-center">
    <h5>designer, developer, coffee nerd, casual gamer, and sporadic streamer</h5>
  </div>
</section>

<section class="grid">
  <div>
    <h1 class="accent-lined">About Me</h1>
  </div>
  <div class="grid center thirds stack-lg">
    <div class="grid gapless panel">
      <h3>What I work on.</h3>
      <p>My passion is working to solve real problems for real people using design and code. I also love open-source and contribute where, when, and how I can.</p>
      <ul class="ln-list v-end">
        <li>
          <a href="https://github.com/{{ site.socials.github }}" class="icon-ln github">
            {% include modules/icon.html name="github" %}
            Github
          </a>
        </li>
        <li>
          <a href="/portfolio/" class="icon-ln alt-ln purple">
            {% include modules/icon.html name="pen-display" %}
            Portfolio
          </a>
        </li>
        <li>
          <a href="/resume/" class="icon-ln alt-ln blue">
            {% include modules/icon.html name="file" %}
            Résumé
          </a>
        </li>
      </ul>
    </div>
    <div class="grid gapless panel">
      <h3>What I do for fun.</h3>
      <p>I like to create and entertain, be that streaming on Twitch or making videos on YouTube, and use discord to build and interact with those communities.</p>
      <ul class="ln-list v-end">
        <li>
          <a href="https://twitch.tv/{{ site.socials.twitch }}" class="icon-ln twitch">
            {% include modules/icon.html name="twitch" %}
            Twitch
          </a>
        </li>
        <li>
          <a href="https://youtube.com/c/{{ site.socials.youtube }}" class="icon-ln youtube">
            {% include modules/icon.html name="youtube" %}
            YouTube
          </a>
        </li>
        <li>
          <a href="https://discord.gg/{{ site.discord-invite }}" class="icon-ln discord">
            {% include modules/icon.html name="discord" %}
            Discord
          </a>
        </li>
      </ul>
    </div>
    <div class="grid gapless panel">
      <h3>What's in my brain.</h3>
      <p>Well… not much but whenever I do have a thought worth sharing I usually write a blog post about it or post it to my social media.</p>
      <ul class="ln-list v-end">
        <li>
          <a href="/blog/" class="icon-ln rss">
            {% include modules/icon.html name="writing" %}
            Blog
          </a>
        </li>
        <li>
          <a href="https://twitter.com/{{ site.socials.twitter }}" class="icon-ln twitter">
            {% include modules/icon.html name="twitter" %}
            Twitter
          </a>
        </li>
        <li>
          <a href="https://{{ site.socials.mastodon.instance }}/@{{ site.socials.mastodon.username }}}" class="icon-ln mastodon">
            {% include modules/icon.html name="mastodon" %}
            Mastodon
          </a>
        </li>
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
          See more
        </a>
      </div>
    </div>
  {% endif %}
  </div>
  {% elsif site.posts.size > 1 and site.posts.size < 4 %}
  <div class="grid">
    <div class="grid end stretch-sm">
      <a href="/blog/" class="btn tertiary">
        See more
      </a>
    </div>
  </div>
  {% endif %}
</section>
{% endif %}
