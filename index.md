Hello world!
<h2>{{ site.data.samplelist.docs_list_title }}</h2>
<ul>
   {% for item in site.data.pages.docs %}
      <li><a href="{{ item.url }}" alt="{{ item.title }}">{{ item.title }}</a></li>
   {% endfor %}
</ul>
