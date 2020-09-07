{% render 'partials/header', title: 'S. Brix', css: 'index.css' %}

<h2>Simon::Brix</h2>

<p>
Building unremarkable interfaces for <a href="https://play.eslgaming.com/" target="_blank" rel="noopener noreferrer">ESL</a>.
UI/UX and web development to make the interface disappear.
</p>

<section>
  {% for text in texts %}
    <a href={{text.url}}>{{forloop.index}}. {{text.title}}</a>
  {% endfor %}
</section>

{% render 'partials/footer' %}
