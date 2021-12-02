# [Bubble 3D]( https://ranibitwin.github.io/Bubble-3D/)
- This app is a demonstration of using the [3d.js library](https://d3js.org/).
- When hovering over the balloon indicated by 'Mouse Over', bubbles appear at the bottom of the page towards the top, where the pin tips pop.

```<script>
    var links = document.querySelectorAll( '.post-content a' );  
    for (var i = 0, length = links.length; i < length; i++) {  
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }
</script>
```


