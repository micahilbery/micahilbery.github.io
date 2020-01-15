---
layout: page
id: home
css: true
---

<section class="grid">
  <div class="grid center thirds">
    <div class="grid thirds end stack-sm profile-socials">
      <a href="https://twitter.com/{{ site.socials.twitter }}" class="icon-only-ln twitter" aria-label="Twitter">
        {% include modules/icon.html name="twitter" | relative_url  %}
      </a>

      <a href="https://{{ site.socials.mastodon.instance }}/@{{ site.socials.mastodon.username }}" class="icon-only-ln mastodon" aria-label="Mastodon">
        {% include modules/icon.html name="mastodon" | relative_url %}
      </a>

      <a href="mailto:{{ site.email }}" class="icon-only-ln protonmail" aria-label="Mail">
        {% include modules/icon.html name="mail" | relative_url %}
      </a>
    </div>

    <div class="avatar center">
      <picture>
        <source srcset="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" type="image/jpeg">
        <img src="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" alt="Micah Ilbery">
      </picture>
    </div>

    <div class="grid thirds h-start v-end stack-sm profile-socials">
      <a href="https://dribbble.com/{{ site.socials.dribbble }}" class="icon-only-ln dribbble" aria-label="Dribbble">
        {% include modules/icon.html name="dribbble" | relative_url %}
      </a>

      <a href="https://codepen.io/{{ site.socials.codepen }}" class="icon-only-ln codepen" aria-label="Codepen">
        {% include modules/icon.html name="codepen" | relative_url %}
      </a>

      <a href="https://github.com/{{ site.socials.github }}" class="icon-only-ln github" aria-label="GitHub">
        {% include modules/icon.html name="github" | relative_url %}
      </a>
    </div>
  </div>
</section>

<section>
  <h1 class="accent-lined">A little about me.</h1>
  <h2 class="subheading">What's my deal?</h2>

  <p><span class="first-letter">H</span>ello, I'm Micah, a UX/UI/front-end designer and developer currently living in <a href="https://www.google.com/maps/place/Edwardsville,+IL/">Edwardsville.</a> My passion is working to solve real problems for real people using design, code, empathy, and understanding both as an individual and doing so collaboratively with a team of people of diverse perspectives but a common goal. There is always room to improve and I have a lot to learn still but I love learning new things and taking on new challenges. I also love open-source and contribute to projects that I love most where and when I can whether it be through code, design, or something else. You can find most of my contributions on my <a href="https://github.com/micahilbery">GitHub</a>.</p>

<div class="grid">
  <div class="grid halves end stretch-sm stack-sm">
    <a href="/contact/" class="btn primary">
      {% include modules/icon.html name="mail" | relative_url %}
      Get in touch
    </a>
    <a href="/pay/" class="btn secondary">
      {% include modules/icon.html name="coffee-cup" | relative_url %}
      Buy me a coffee
    </a>
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
  <div class="grid thirds stack-sm sm-preview">
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
