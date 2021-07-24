---
layout: page
title: Portfolio
permalink: /portfolio/
id: portfolio
css: false
---

{% if site.projects.size > 0 %}
<section class="grid post-preview{% if site.projects.size > 1 %}sm-preview thirds{% endif %} stack-sm">
  <h2 class="accent-lined {% if site.projects.size > 1 %}span-3{% endif %} start">Portfolio</h2>
  {% assign projects_sort = site.projects | sort: 'date'%}
  {% assign projects = projects_sort | reverse %}
  {% for project in projects %}
  <div>
    {% include modules/project-preview.html project= project %}
  </div>
  {% endfor %}
</section>
{% endif %}
