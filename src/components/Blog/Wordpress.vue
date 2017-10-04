<template lang="html">
  <section class="blog-item" id="custom-wordpress-plugin">
    <h2>Custom Wordpress Themes: The complete how-to.</h2>
    <time>4th Oct 2017</time>
    <div class="tags">
      <div class="tag">Wordpress</div>
      <div class="tag">Theming</div>
      <div class="tag">PHP</div>
      <div class="tag">Tutorial</div>
      <div class="tag">CSS</div>
    </div>
    <p>Recently I received a design specification to help develop a brand from the ground-up. The core user-stories were there (allow user to edit content easily) but the design needed to be a little more custom. This meant that using Wordpress on the backend was a no-brainer, but left questions on whether to use an existing theme or build one from scratch.</p>
    <p>I decided to go with the former, as there was thousands and thousands out there. However it soon became apparant that substantially tweaking/removing/adding elements became the CSS equivalent of putting a bandage on a shotgun wound.</p>
    <p>Using <code>display:none</code> to hide elements that are still present in the DOM just feels nasty, and the CSS files are already monolithic. The other option was needed.</p>
    <p>It's surprisingly straightforward to install a development version of WP, install your theme and tweak it until you're happy and it's receiving data from the backend.</p>
    <h3>Overview of steps</h3>
    <ol>
      <li>Install Wamp</li>
      <li>Add Database</li>
      <li>Install Wordpress</li>
      <li>Create your Theme folder</li>
      <li>Create files</li>
      <li>Configure style.css</li>
      <li>Set up the loop.</li>
      <li>Add header &amp; footer.</li>
      <li>Inject Wordpress files.</li>
      <li>Deploy</li>
      <li>Done!</li>
    </ol>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">1</span>
        <h3>Install Wamp</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">2</span>
        <h3>Add Database</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">3</span>
        <h3>Install Wordpress</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">4</span>
        <h3>Create your Theme folder</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">5</span>
        <h3>Create files</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">6</span>
        <h3>Configure style.css</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">7</span>
        <h3>Set up the loop.</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">8</span>
        <h3>Add header &amp; footer.</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">9</span>
        <h3>Inject Wordpress files.</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
    <section class="step-section">
      <div class="step-header">
        <span class="step-number">10</span>
        <h3>Deploy</h3>
      </div>
      <div class="step-body">
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
        <p>ugieufgwuiegfeuwgfuiegfiuwegfwegfuewguifewiufw</p>
        <p>fgweioufgeiuofeoifioegfoiegfgefoiegfiefioegfioegfoiegfoegfeofgweoifoiewfewfgeoifgieofgweifgweoifgiw</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
