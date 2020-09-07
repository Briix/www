{% render 'partials/header', title: title, css: 'text.css' %}

<a href="/">&#8592; Back</a>

<h1 class="title">{{title}}</h1>
{{date | date: "%b %d, %Y"}}

{{content}}

{% render 'partials/footer' %}
