---
layout: page
title: Pay
permalink: /pay/
id: pay
page_id: pay
css: true
---
<section>
  <h1 class="accent-lined">Support Me</h1>
  <p>Want to buy me a drink/food, like what I do and want to support it, or just want to throw money at me? You've come to the right place.</p>
  <div class="constrained grid pay-grid">
    {% if site.support_options.ko-fi %}
    <div>
      <h3>
        &nbsp;
        {% include modules/icon.html name="ko-fi" class="x2" %}
        <span class="accent-lined">Ko-fi</span>
      </h3>
      <p>You can support me on <a href="https://ko-fi.com/{{ site.support_options.ko-fi }}" class="ko-fi">Ko-fi</a>.</p>
    </div>
    {% endif %}

    {% if site.support_options.patreon %}
    <div>
      <h3>
        &nbsp;
        {% include modules/icon.html name="patreon" class="x2" %}
        <span class="accent-lined">Patreon
      </h3>
      <p>You can support me on <a href="https://patreon.com/{{ site.support_options.patreon }}" class="patreon">Patreon</a></p>
    </div>
    {% endif %}

    {% if site.support_options.paypal %}
    <div>
      <h3>
        &nbsp;
        {% include modules/icon.html name="paypal" class="x2" %}
        <span class="accent-lined">PayPal</span>
      </h3>
      <div class="grid qr-grid">
        <div class="qr-code grid itms-center">
          <img src="/assets/images/pay/paypal-qr.jpg" alt="paypal qr code">
        </div>
        <p class="span-2">Scan the QR code, <a href="https://paypal.me/{{ site.support_options.paypal }}" class="paypal">Use Paypal.me</a>, or send to micah.ilbery@protonmail.com.</p>
      </div>
    </div>
    {% endif %}

    {% if site.support_options.squarecash %}
    <div>
      <h3>
        &nbsp;
        {% include modules/icon.html name="squarecash" class="x2" %}
        <span class="accent-lined">Square Cash</span>
      </h3>
      <div class="grid qr-grid">
        <div class="qr-code grid itms-center">
          <img src="/assets/images/pay/squarecash-qr.jpg" alt="squarecash qr code">
        </div>
        <p class="span-2">Scan the QR code, <a href="https://cash.app/${{ site.support_options.squarecash }}" class="squarecash">Use Square Cash</a>, or send to ${{ site.support_options.squarecash }}.</p>
      </div>
    </div>
    {% endif %}

    {% if site.support_options.venmo %}
    <div>
      <h3>
        &nbsp;
        {% include modules/icon.html name="venmo" class="x2" %}
        <span class="accent-lined">Venmo</span>
      </h3>
      <div class="grid qr-grid">
        <div class="qr-code grid itms-center">
          <img src="/assets/images/pay/venmo-qr.jpg" alt="venmo qr code">
        </div>
        <p class="span-2">Scan the QR code, <a href="https://venmo.com/{{ site.support_options.venmo }}" class="venmo">Use Venmo</a>, or send to @{{ site.support_options.venmo }}.</p>
      </div>
    </div>
    {% endif %}

    {% if site.support_options.google-pay %}
    <div>
      <h3>
        &nbsp;
        {% include modules/icon.html name="google" class="x2" %}
        <span class="accent-lined">Google Pay</span>
      </h3>
      <p>Send to {{ site.support_options.google-pay }}.</p>
    </div>
    {% endif %}
  </div>
</section>
