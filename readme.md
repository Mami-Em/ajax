# Structure
* html file
```html
<div id = 'change'>
    <!-- Change depending on the button clicked -->
<div>

<!-- btn that will call the contents -->
<button id = 'file-name' onclick = Ajax(this)>

<!-- scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<!-- + YOUR SCRIPT -->
```

All the changes goes here. You might insert already some content by default.


* in JS
```JavaScript
Ajax(val) {
    // define ajax
    var ajax = new XMLHttpRequest();

    // load
    ajax.onload = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            $('#change').html(ajax.responseText);
        }
    }

    // open the content to display
    ajax.open('GET', val.id + '.html', true);
    ajax.send();
}
```



