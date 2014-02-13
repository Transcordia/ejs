{% for post in site.categories.ejs %}
	<p>
		<a href="{{ post.url }}">{{ post.title }}</a> 
	</p>
{% endfor %}
