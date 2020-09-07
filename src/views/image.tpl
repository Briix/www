{% render 'partials/header', title: title, css: 'image.css' %}

<a href="/">&#8592; Back</a>

<img src={{image}} />
{{title}} — {{date | date: "%b %d, %Y"}}
<a href={{imageUrl}} target="_blank" rel="noopener noreferrer">(Hi res)</a>

{% render 'partials/footer' %}

