---
layout: page
title: Works
permalink: /works/
id: works
css: false
---

{% if site.projects.size > 0 %}
<section class="grid post-preview{% if site.projects.size > 1 %}sm-preview halves{% endif %} stack-sm">
  <h2 class="accent-lined {% if site.projects.size > 1 %}span-2{% endif %} start">Work{% if site.projects.size > 1 %}s{% endif %}</h2>
  {% assign projects_sort = site.projects | sort: 'date'%}
  {% assign projects = projects_sort | reverse %}
  {% for project in projects %}
  <div>
    {% include modules/project-preview.html project= project %}
  </div>
  {% endfor %}
</section>
{% endif %}


<a href="/assets/images/projects/MicahIlbery-Resume.pdf" class="grid text-center">Download my Résumé</a>
