---
layout: page
id: home
css: true
---

<section class="grid">
  <div class="grid center thirds">
    <div class="grid thirds end stack-sm profile-socials">
      <a href="https://twitter.com/{{ site.socials.twitter }}" class="icon-only-ln twitter" aria-label="Twitter">
        {% include modules/icon.html name="twitter"  %}
      </a>

      <a href="https://{{ site.socials.mastodon.instance }}/@{{ site.socials.mastodon.username }}" class="icon-only-ln mastodon" aria-label="Mastodon">
        {% include modules/icon.html name="mastodon" %}
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
      <a href="https://dribbble.com/{{ site.socials.dribbble }}" class="icon-only-ln dribbble" aria-label="Dribbble">
        {% include modules/icon.html name="dribbble" %}
      </a>

      <a href="https://codepen.io/{{ site.socials.codepen }}" class="icon-only-ln codepen" aria-label="Codepen">
        {% include modules/icon.html name="codepen" %}
      </a>

      <a href="https://github.com/{{ site.socials.github }}" class="icon-only-ln github" aria-label="GitHub">
        {% include modules/icon.html name="github" %}
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
    <a href="mailto:{{ site.email }}" class="btn primary">
      {% include modules/icon.html name="mail" %}
      Get in touch
    </a>
    <a href="/pay/" class="btn secondary">
      {% include modules/icon.html name="coffee-cup" %}
      Buy me a coffee
    </a>
  </div>
</div>
</section>

{% if site.projects.size > 0 %}
<section class="grid {% if site.projects.size > 1 %}halves{% endif %} stack-sm">
  <h2 class="accent-lined {% if site.projects.size > 1 %}span-2{% endif %} start">Latest Work{% if site.projects.size > 1 %}s{% endif %}</h2>
  {% assign projects_sort = site.projects | sort: 'date'%}
  {% assign projects = projects_sort | reverse %}
  {% for project in projects limit:2%}
  <div>
    {% include modules/project-preview.html post= project %}
  </div>
  {% endfor %}

  {% if site.projects.size > 2 %}
    <div class="grid span-2">
      <div class="grid end stretch-sm">
        <a href="/works/" class="btn tertiary">
          See more
        </a>
      </div>
    </div>
  {% endif %}
</section>
{% endif %}

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
