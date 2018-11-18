(function(){
    function showIt(href) {
        console.log(href);
        Array.prototype.slice.call(document.getElementsByClassName("answer")).
            forEach(function(div) {
                var node=div.parentNode;
                if (node.children[0].name==href) node.classList.add("show");
            });}
    var href=document.location.href,hash=href.indexOf('#')+1;
    if (hash>0) {
        showIt(href.substring(hash));
        href=href.substring(0,hash);
    } else {href=href+"#";hash=href.length}
    Array.prototype.slice.call(document.getElementsByClassName("answer")).
        forEach(function(div) {
            var node=div.parentNode;
            node.children[0].addEventListener("click",function(e){
                e.stopPropagation();
                e.preventDefault();
                node.classList.toggle("show");
            });
        });
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
                e.preventDefault();
                console.log(e.target);
                Array.prototype.slice.call(e.target.getElementsByClassName("answer")).
        forEach(function(ul) {
                //node.classList.toggle("show");
            });
        });
})();
