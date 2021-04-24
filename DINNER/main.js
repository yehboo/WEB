window.onload = function(){
    var imgs = new Array("ramen.jpg", "rice.jpg", "d.jpg")
    $(function(){
        $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        $("img").attr("src", imgs[randomChildNumber]);
        });
        });
}