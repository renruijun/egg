<html>
    <head>
        <title>news</title>
        <link rel="stylesheet" href="/public/css/news.css"/>
    </head>
    <body>
        <ul class="news-list-wrap">
            {% for item in list %}
                <li>
                    <a href="{{item.url}}">{{item.title}}</a>
                </li>
            {% endfor %}
        </ul>
    </body>
</html>