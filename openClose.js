(function(){
    function showIt(href) {
        console.log(href);
        Array.prototype.slice.call(document.getElementsByClassName("answer")).
            forEach(function(div) {
                var node=div.parentNode;
                if (node.children[0].name==href) node.classList.add("show");
            });
        return true;
    }
    var href=document.location.href,hash=href.indexOf('#')+1;
    if (hash>0) {
        showIt(href.substring(hash));
        href=href.substring(0,hash);
    } else {href=href+"#";hash=href.length}
    Array.prototype.slice.call(document.getElementsByTagName("a")).
        forEach(function(a) {
            if (a.href.substring(0,hash)==href) {
                console.log(a.href);
                a.addEventListener("click",function(e){
                    showIt(a.href.substring(hash));
                });
            }});
    Array.prototype.slice.call(document.getElementsByClassName("openClose")).
        forEach(function(ul) {
            ul.addEventListener("click",function(e){
                e.stopPropagation();
                if (e.target.tagName=='LI') {
                    e.preventDefault();
                    e.target.classList.toggle("show");
                } else if (e.target.parentNode.tagName=='LI') {
                    e.preventDefault();
                    e.target.parentNode.classList.toggle("show");
                }
                return true;
            });
        });
})();
