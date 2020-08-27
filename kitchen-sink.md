---
layout: page
title: Kitchen Sink
permalink: /kitchen-sink/
id: kitchen-sink
css: true
---

<section>
  <h1 class="accent-lined">Everything but the kitchen sink</h1>

  <p>The purpose of this page is to showcase all the elements at my disposal for building this site. Things like typography, form elements, buttons, widgets, ect. A lot of what's here isn't used anywhere on my site <small>(...yet)</small> but are things I've styled and prepared incase I want to use them in the future.</p>
</section>

<section id="type">
  <h3>Typography</h3>
  <div class="accordian-list">
    <details>
      <summary><h5>Text Styles</h5></summary>
      <div class="accordian-content">
        <div class="grid">
          <div><b>Bold</b> / <strong>Strong</strong></div>
          <div><i>Italic</i> / <em>Emphasis</em></div>
          <div><del>Delete</del> / <strike>Strikethrough</strike></div>
          <div><small>small</small></div>
          <div class="fine-print">fine-print</div>
          <div><mark>Mark</mark></div>
          <div><kbd>kbd</kbd></div>
          <div><code>code</code></div>
          <div><span class="first-letter">F</span>irst letter</div>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Headings</h5></summary>
      <div class="accordian-content">
        <div class="constrained grid halves stack-sm">
          <div class="span-2">
            <h1 class="accent-lined">Accent-Lined Heading</h1>
            <h2 class="subheading">With Subheading</h2>
          </div>
          <div>
            <h1>Heading 1</h1>
            <h1 class="subheading">Subheading 1</h1>
          </div>
          <div>
            <h2>Heading 2</h2>
            <h2 class="subheading">Subheading 2</h2>
          </div>
          <div>
            <h3>Heading 3</h3>
            <h3 class="subheading">Subheading 3</h3>
          </div>
          <div>
            <h4>Heading 4</h4>
            <h4 class="subheading">Subheading 4</h4>
          </div>
          <div>
            <h5>Heading 5</h5>
            <h5 class="subheading">Subheading 5</h5>
          </div>
          <div>
            <h6>Heading 6</h6>
            <h6 class="subheading">Subheading 6</h6>
          </div>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Lists</h5></summary>
      <div class="accordian-content">
        <div class="grid thirds stack-sm itms-center">
          <div>
            <h6>Unordered Lists</h6>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
          <div>
            <h6>Ordered Lists</h6>
            <ol>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ol>
          </div>
          <div>
            <h6>Link Lists</h6>
            <ul class="ln-list">
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </details>


    <details>
      <summary><h5>Code Blocks</h5></summary>
      <div class="accordian-content">
<div markdown="1">
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
</div>
      </div>
    </details>

    <details>
      <summary><h5>Blockquotes</h5></summary>
      <div class="accordian-content">
        <blockquote>
          <p>This cosmic dance of bursting decadence and withheld permissions twists all our arms collectively, but if sweetness can win, and it can, then I'll still be here tomorrow to high-five you yesterday, my friend. Peace.</p>
          <span class="attrib">Tart Toter</span>
        </blockquote>
      </div>
    </details>
  </div>
</section>

<section id="forms">
  <h3>Forms</h3>
  <div class="accordian-list">
    <details>
      <summary><h5>Inputs</h5></summary>
      <div class="accordian-content">
        <div class="grid halves stack-sm">
          <div class="input-container">
            <input id="name" name="name" type="text" placeholder="Jane Doe" required>
            <label for="name">
              {% include modules/icon.html name="user" %}
              <span>Full Name</span>
            </label>
          </div>

          <div class="input-container">
            <input id="email" name="email" type="email" placeholder="jane@example.com" required>
            <label for="email">
              {% include modules/icon.html name="mail" %}
              <span>Email</span>
            </label>
          </div>

          <div class="input-container">
            <input id="tel" name="tel" type="tel" placeholder="555-555-5555" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
            <label for="tel">
              {% include modules/icon.html name="phone" %}
              <span>Phone</span>
            </label>
          </div>

          <div class="input-container">
            <input id="zip" name="zip" type="number" placeholder="62025" pattern="[0-9]{5}" min="00000" required>
            <label for="zip">
              {% include modules/icon.html name="location" %}
              <span>Zip</span>
            </label>
          </div>

          <div class="input-container">
            <input id="date" name="date" type="date" placeholder="mm/dd/yyyy" required>
            <label for="date">
              {% include modules/icon.html name="calendar" %}
              <span>Date</span>
            </label>
          </div>

          <div class="input-container">
            <input id="url" name="url" type="url" placeholder="example.com" required>
            <label for="url">
              {% include modules/icon.html name="globe" %}
              <span>URL</span>
            </label>
          </div>

          <div class="input-container">
            <input id="password" name="password" type="password" required>
            <label for="password">
              {% include modules/icon.html name="lock" %}
              <span>Password</span>
            </label>
          </div>
          
          <div class="input-container">
            <input id="search" name="search" type="search" placeholder="Search..." required>
            <label for="search">
              {% include modules/icon.html name="zoom" %}
              <span>Search</span>
            </label>
          </div>
          
          <div class="input-container span-2">
            <textarea id="message" name="message" placeholder="Hello, Let's work together!" required></textarea>
            <label for="message">
              {% include modules/icon.html name="message" %}
              <span>Message</span>
            </label>
          </div>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Selects</h5></summary>
      <div class="accordian-content">
        <div class="input-container">
          <select name="subject">
            <option value="Hello">Just Saying Hi.</option>
            <option value="Buisness Inquiry">Buisness Inquiry</option>
            <option value="Other">Other</option>
          </select>
          <label for="subject">
            {% include modules/icon.html name="info" %}
            <span>Subject</span>
          </label>
        </div>
      </div>
    </details>


    <details>
      <summary><h5>Checkboxes & Radios</h5></summary>
      <div class="accordian-content">
        <div class="grid halves stack-sm">
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
        </div>
      </div>
    </details>
  </div>
</section>

<section id="widgets">
  <h3>Widgets</h3>
    <div class="accordian-list">
    <details>
      <summary><h5>Accordians</h5></summary>
      <div class="accordian-content">
        <div class="accordian-list">
          <details>
            <summary><h6>Item 1</h6></summary>
            <div class="accordian-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </details>

          <details>
            <summary><h6>Item 2</h6></summary>
            <div class="accordian-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </details>

          <details>
            <summary><h6>Item 3</h6></summary>
            <div class="accordian-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </details>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Avatars</h5></summary>
      <div class="accordian-content">
        <div class="grid constrained halves stack-sm">
          <div class="avatar v-center h-end center-sm">
            <picture>
              <source srcset="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" type="image/jpeg">
              <img src="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" alt="Micah Ilbery">
            </picture>
          </div>
          <div class="avatar-sm v-center h-start center-sm">
            <picture>
              <source srcset="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" type="image/jpeg">
              <img src="https://gravatar.com/avatar/{{ site.gravatar_hash }}?s=200" alt="Micah Ilbery">
            </picture>
          </div>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Badges</h5></summary>
      <div class="accordian-content">
        <div class="grid constrained thirds center">
          <a href="#" class="badge pink center text-center">Pink</a>
          <a href="#" class="badge purple center text-center">Purple</a>
          <a href="#" class="badge cyan center text-center">Cyan</a>
          <a href="#" class="badge blue center text-center">Blue</a>
          <a href="#" class="badge green center text-center">Green</a>
          <a href="#" class="badge yellow center text-center">Yellow</a>
          <a href="#" class="badge orange center text-center">Orange</a>
          <a href="#" class="badge red center text-center">Red</a>
          <a href="#" class="badge center text-center">Default</a>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Buttons</h5></summary>
      <div class="accordian-content">
        <div class="grid constrained thirds center stack-sm">
          <a href="#" class="btn pink">Pink</a>
          <a href="#" class="btn purple">Purple</a>
          <a href="#" class="btn cyan">Cyan</a>
          <a href="#" class="btn blue">Blue</a>
          <a href="#" class="btn green">Green</a>
          <a href="#" class="btn yellow">Yellow</a>
          <a href="#" class="btn orange">Orange</a>
          <a href="#" class="btn red">Red</a>
          <a href="#" class="btn">Default</a>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Panels</h5></summary>
      <div class="accordian-content">
        <div class="grid thirds center stack-sm">
          <div class="panel pink text-center">Pink</div>
          <div class="panel purple text-center">Purple</div>
          <div class="panel cyan text-center">Cyan</div>
          <div class="panel blue text-center">Blue</div>
          <div class="panel green text-center">Green</div>
          <div class="panel yellow text-center">Yellow</div>
          <div class="panel orange text-center">Orange</div>
          <div class="panel red text-center">Red</div>
          <div class="panel text-center">Default</div>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Progress Bars</h5></summary>
      <div class="accordian-content">
        <div class="grid">
        
          <div>
            <h6>Pink</h6>
            <div class="progress-bar">
              <div class="progress-fill pink" style="width: 90%"></div>
            </div>
          </div>

          <div>
            <h6>Purple</h6>
            <div class="progress-bar">
              <div class="progress-fill purple" style="width: 50%"></div>
            </div>
          </div>

          <div>
            <h6>Cyan</h6>
            <div class="progress-bar">
              <div class="progress-fill cyan" style="width: 70%"></div>
            </div>
          </div>

          <div>
            <h6>Blue</h6>
            <div class="progress-bar">
              <div class="progress-fill blue" style="width: 30%"></div>
            </div>
          </div>

          <div>
            <h6>Green</h6>
            <div class="progress-bar">
              <div class="progress-fill green" style="width: 80%"></div>
            </div>
          </div>

          <div>
            <h6>Yellow</h6>
            <div class="progress-bar">
              <div class="progress-fill yellow" style="width: 60%"></div>
            </div>
          </div>

          <div>
            <h6>Orange</h6>
            <div class="progress-bar">
              <div class="progress-fill orange" style="width: 20%"></div>
            </div>
          </div>

          <div>
            <h6>Red</h6>
            <div class="progress-bar">
              <div class="progress-fill red" style="width: 10%"></div>
            </div>
          </div>

          <div>
            <h6>Default</h6>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 90%"></div>
            </div>
          </div>

        </div>
      </div>
    </details>

    <details>
      <summary><h5>Notifications</h5></summary>
      <div class="accordian-content">
        <div class="grid">
          <div class="notification pink">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Pink Notification</div>
            <button class="notification-btn v-center h-end">Call to action</button>
          </div>
          <div class="notification purple">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Purple Notification</div>
            <a href="#" class="purple v-center h-end">Learn more...</a>
          </div>
          <div class="notification cyan">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Cyan Notification</div>
            <div>
              <button class="notification-btn v-center h-end">Secondary action</button>
              <button class="notification-btn pink v-center h-end">Primary action</button>
            </div>
          </div>
          <div class="notification blue">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Blue Notification</div>
          </div>
          <div class="notification green">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Green Notification</div>
          </div>
          <div class="notification yellow">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Yellow Notification</div>
          </div>
          <div class="notification orange">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Orange Notification</div>
          </div>
          <div class="notification red">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Red Notification</div>
          </div>
          <div class="notification">
            <button class="close-btn start">{% include modules/icon.html name="close" %}</button>
            <div>Default Notification</div>
          </div>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Switches</h5></summary>
      <div class="accordian-content">
        <div class="grid constrained thirds center">
          <input id="pink-switch" type="checkbox" class="switch pink" checked>
          <input id="purple-switch" type="checkbox" class="switch purple" checked>
          <input id="cyan-switch" type="checkbox" class="switch cyan" checked>
          <input id="blue-switch" type="checkbox" class="switch blue" checked>
          <input id="green-switch" type="checkbox" class="switch green" checked>
          <input id="yellow-switch" type="checkbox" class="switch yellow" checked>
          <input id="orange-switch" type="checkbox" class="switch orange" checked>
          <input id="red-switch" type="checkbox" class="switch red" checked>
          <input id="default-switch" type="checkbox" class="switch" checked>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Tags</h5></summary>
      <div class="accordian-content">
        <div class="grid constrained thirds center">
          <a href="#" class="tag coffee center text-center">
            {% include modules/icon.html name="coffee-cup" %}
            #coffee
          </a>
          <a href="#" class="tag code center text-center">
            {% include modules/icon.html name="laptop" %}
            #code
          </a>
          <a href="#" class="tag life center text-center">
            {% include modules/icon.html name="user" %}
            #life
          </a>
          <a href="#" class="tag pink center text-center">Pink</a>
          <a href="#" class="tag purple center text-center">Purple</a>
          <a href="#" class="tag cyan center text-center">Cyan</a>
          <a href="#" class="tag blue center text-center">Blue</a>
          <a href="#" class="tag green center text-center">Green</a>
          <a href="#" class="tag yellow center text-center">Yellow</a>
          <a href="#" class="tag orange center text-center">Orange</a>
          <a href="#" class="tag red center text-center">Red</a>
          <a href="#" class="tag center text-center">Default</a>
        </div>
      </div>
    </details>

    <details>
      <summary><h5>Video Embeds</h5></summary>
      <div class="accordian-content">
        <div class="video-embed v-center" style="background-image: url('https://img.youtube.com/vi/K2Dj8jdEs_4/maxresdefault.jpg')">
          <iframe src="https://www.youtube.com/embed/K2Dj8jdEs_4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </details>
  </div>
</section>

<section id="grids">
  <h3>Grids</h3>
  <div class="grid panel">
    <div class="grid panel pink text-center">Full</div>
    <div class="grid constrained panel pink text-center">Constrained</div>
    
    <div class="grid halves">
      <div class="grid panel purple text-center">Half</div>
      <div class="grid panel purple text-center">Half</div>
    </div>

    <div class="grid thirds">
      <div class="grid panel cyan text-center">Third</div>
      <div class="grid panel cyan text-center">Third</div>
      <div class="grid panel cyan text-center">Third</div>
      <div class="grid span-2 panel cyan text-center">Two Thirds</div>
      <div class="grid panel cyan text-center">Third</div>
    </div>
    
    <div class="grid fourths">
      <div class="grid panel blue text-center">Fourth</div>
      <div class="grid panel blue text-center">Fourth</div>
      <div class="grid panel blue text-center">Fourth</div>
      <div class="grid panel blue text-center">Fourth</div>
      <div class="grid span-2 panel blue text-center">Half</div>
      <div class="grid panel blue text-center">Fourth</div>
      <div class="grid panel blue text-center">Fourth</div>
      <div class="grid span-3 panel blue text-center">Three Fourths</div>
      <div class="grid panel blue text-center">Fourth</div>
    </div>
  </div>
</section>

<section>
  <h3>Colors</h3>
  <div class="grid thirds stack-sm">
    <div class="swatch">
      <div class="swatch-top" style="background: var(--pink-500); color: #fff;">
        <h3>Pink</h3>
      </div>
      <div class="swatch-color" style="background: var(--pink-100); color: var(--pink-900);">
        <span>100</span>
        <span class="hex">fcb4d9</span>
      </div>
      <div class="swatch-color" style="background: var(--pink-300); color: var(--pink-900);">
        <span>300</span>
        <span class="hex">ec7cbd</span>
      </div>
      <div class="swatch-color" style="background: var(--pink-500); color: #fff;">
        <span>500</span>
        <span class="hex">e03c9e</span>
      </div>
      <div class="swatch-color" style="background: var(--pink-700); color: #fff;">
        <span>700</span>
        <span class="hex">c8107c</span>
      </div>
      <div class="swatch-color" style="background: var(--pink-900); color: #fff;">
        <span>900</span>
        <span class="hex">9d135d</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--purple-500); color: #fff;">
        <h3>Purple</h3>
      </div>
      <div class="swatch-color" style="background: var(--purple-100); color: var(--purple-900);">
        <span>100</span>
        <span class="hex">c7b1ff</span>
      </div>
      <div class="swatch-color" style="background: var(--purple-300); color: var(--secondary-900);">
        <span>300</span>
        <span class="hex">ac7afa</span>
      </div>
      <div class="swatch-color" style="background: var(--purple-500); color: #fff;">
        <span>500</span>
        <span class="hex">8439d1</span>
      </div>
      <div class="swatch-color" style="background: var(--purple-700); color: #fff;">
        <span>700</span>
        <span class="hex">6b15bb</span>
      </div>
      <div class="swatch-color" style="background: var(--purple-900); color: #fff;">
        <span>900</span>
        <span class="hex">460696</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--cyan-500); color: var(--cyan-900);">
        <h3>Cyan</h3>
      </div>
      <div class="swatch-color" style="background: var(--cyan-100); color: var(--cyan-900);">
        <span>100</span>
        <span class="hex">b9fff2</span>
      </div>
      <div class="swatch-color" style="background: var(--cyan-300); color: var(--cyan-900);">
        <span>300</span>
        <span class="hex">70f8e4</span>
      </div>
      <div class="swatch-color" style="background: var(--cyan-500); color: var(--cyan-900);">
        <span>500</span>
        <span class="hex">00dccf</span>
      </div>
      <div class="swatch-color" style="background: var(--cyan-700); color: #fff;">
        <span>700</span>
        <span class="hex">00a099</span>
      </div>
      <div class="swatch-color" style="background: var(--cyan-900); color: #fff;">
        <span>900</span>
        <span class="hex">007876</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--blue-500); color: #fff;">
        <h3>Blue</h3>
      </div>
      <div class="swatch-color" style="background: var(--blue-100); color: var(--blue-900);">
        <span>100</span>
        <span class="hex">97c9fb</span>
      </div>
      <div class="swatch-color" style="background: var(--blue-300); color: var(--blue-900);">
        <span>300</span>
        <span class="hex">7eb3fa</span>
      </div>
      <div class="swatch-color" style="background: var(--blue-500); color: #fff;">
        <span>500</span>
        <span class="hex">4288f4</span>
      </div>
      <div class="swatch-color" style="background: var(--blue-700); color: #fff;">
        <span>700</span>
        <span class="hex">3266e2</span>
      </div>
      <div class="swatch-color" style="background: var(--blue-900); color: #fff;">
        <span>900</span>
        <span class="hex">0b2c9e</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--green-500); color: #fff;">
        <h3>Green</h3>
      </div>
      <div class="swatch-color" style="background: var(--green-100); color: var(--green-900);">
        <span>100</span>
        <span class="hex">b9edbd</span>
      </div>
      <div class="swatch-color" style="background: var(--green-300); color: var(--green-900);">
        <span>300</span>
        <span class="hex">73df8e</span>
      </div>
      <div class="swatch-color" style="background: var(--green-500); color: #fff;">
        <span>500</span>
        <span class="hex">2bc15f</span>
      </div>
      <div class="swatch-color" style="background: var(--green-700); color: #fff;">
        <span>700</span>
        <span class="hex">049042</span>
      </div>
      <div class="swatch-color" style="background: var(--green-900); color: #fff;">
        <span>900</span>
        <span class="hex">006c30</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--yellow-500); color: var(--yellow-900);">
        <h3>Yellow</h3>
      </div>
      <div class="swatch-color" style="background: var(--yellow-100); color: var(--yellow-900);">
        <span>100</span>
        <span class="hex">fff4c3</span>
      </div>
      <div class="swatch-color" style="background: var(--yellow-300); color: var(--yellow-900);">
        <span>300</span>
        <span class="hex">fee07b</span>
      </div>
      <div class="swatch-color" style="background: var(--yellow-500); color: var(--yellow-900);">
        <span>500</span>
        <span class="hex">f8c822</span>
      </div>
      <div class="swatch-color" style="background: var(--yellow-700); color: #fff;">
        <span>700</span>
        <span class="hex">d4a000</span>
      </div>
      <div class="swatch-color" style="background: var(--yellow-900); color: #fff;">
        <span>900</span>
        <span class="hex">986100</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--orange-500); color: #fff;">
        <h3>Orange</h3>
      </div>
      <div class="swatch-color" style="background: var(--orange-100); color: var(--orange-900);">
        <span>100</span>
        <span class="hex">feab7e</span>
      </div>
      <div class="swatch-color" style="background: var(--orange-300); color: var(--orange-900);">
        <span>300</span>
        <span class="hex">fe8855</span>
      </div>
      <div class="swatch-color" style="background: var(--orange-500); color: #fff;">
        <span>500</span>
        <span class="hex">f2592a</span>
      </div>
      <div class="swatch-color" style="background: var(--orange-700); color: #fff;">
        <span>700</span>
        <span class="hex">c22d0c</span>
      </div>
      <div class="swatch-color" style="background: var(--orange-900); color: #fff;">
        <span>900</span>
        <span class="hex">99140d</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--red-500); color: #fff;">
        <h3>Red</h3>
      </div>
      <div class="swatch-color" style="background: var(--red-100); color: var(--red-900);">
        <span>100</span>
        <span class="hex">ffabab</span>
      </div>
      <div class="swatch-color" style="background: var(--red-300); color: var(--red-900);">
        <span>300</span>
        <span class="hex">f68487</span>
      </div>
      <div class="swatch-color" style="background: var(--red-500); color: #fff;">
        <span>500</span>
        <span class="hex">ee445b</span>
      </div>
      <div class="swatch-color" style="background: var(--red-700); color: #fff;">
        <span>700</span>
        <span class="hex">c91f44</span>
      </div>
      <div class="swatch-color" style="background: var(--red-900); color: #fff;">
        <span>900</span>
        <span class="hex">941630</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--light-grey-500); color: var(--light-grey-900);">
        <h3>Light Grey</h3>
      </div>
      <div class="swatch-color" style="background: var(--light-grey-100); color: var(--light-grey-900);">
        <span>100</span>
        <span class="hex">fdfdff</span>
      </div>
      <div class="swatch-color" style="background: var(--light-grey-300); color: var(--light-grey-900);">
        <span>300</span>
        <span class="hex">f0f2f8</span>
      </div>
      <div class="swatch-color" style="background: var(--light-grey-500); color: var(--light-grey-900);">
        <span>500</span>
        <span class="hex">cdd0d9</span>
      </div>
      <div class="swatch-color" style="background: var(--light-grey-700); color: #fff;">
        <span>700</span>
        <span class="hex">a5acb7</span>
      </div>
      <div class="swatch-color" style="background: var(--light-grey-900); color: #fff;">
        <span>900</span>
        <span class="hex">6f7681</span>
      </div>
  </div>

  <div class="swatch">
      <div class="swatch-top" style="background: var(--dark-grey-500); color: #fff;">
        <h3>Dark Grey</h3>
      </div>
      <div class="swatch-color" style="background: var(--dark-grey-100); color: #fff;">
        <span>100</span>
        <span class="hex">898a97</span>
      </div>
      <div class="swatch-color" style="background: var(--dark-grey-300); color: #fff;">
        <span>300</span>
        <span class="hex">696b77</span>
      </div>
      <div class="swatch-color" style="background: var(--dark-grey-500); color: #fff;">
        <span>500</span>
        <span class="hex">42434a</span>
      </div>
      <div class="swatch-color" style="background: var(--dark-grey-700); color: #fff;">
        <span>700</span>
        <span class="hex">2f3033</span>
      </div>
      <div class="swatch-color" style="background: var(--dark-grey-900); color: #fff;">
        <span>900</span>
        <span class="hex">1a1b1e</span>
      </div>
    </div>
  </div>
</section>
