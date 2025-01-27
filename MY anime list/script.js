Shery.imageEffect("#back", {style: 3, config: {"uFrequencyX":{"value":58.06,"range":[0,100]},"uFrequencyY":{"value":20.16,"range":[0,100]},"uFrequencyZ":{"value":9.68,"range":[0,100]},"geoVertex":{"range":[1,64],"value":36.56},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.3697184491455516},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":0.89,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0.06,"range":[0,0.1]},"noise_height":{"value":0.14,"range":[0,2]},"noise_scale":{"value":35.11,"range":[0,100]}}, gooey: true});

var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    
    document.querySelector("#main")
    .addEventListener("click", function(){
  if(!animating){
    animating = true;
    gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function() {
           gsap.set(this._targets[0], {top: "100%"});
           animating = false;
        },
    });
    
    index === h1s.length - 1 ? (index = 0) : index++;
    
    gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
    });
});
