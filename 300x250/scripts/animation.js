var tl = new TimelineMax({repeat:-1});
tl.to("#image1", 1, {
  left: 0,
  ease: Power1.easeinOut
},"+=1")
  .to("#text1", 0, {autoAlpha:0})
  .to("#text2", 0, {autoAlpha:1})
  .to("#image1", 1, {left:-350, ease: Power1.easeinOut}, "+=0.5")
  .to("#image2", 1, {left:0, ease: Power1.easeinOut})
  .to("#page1,#text2", 0, {autoAlpha:0})
  .to("#logo", 0, {autoAlpha:1})
  .to("#image2", 1, {left:350, ease: Power1.easeinOut},"+=0.5")
  .to("#logo", 0, {autoAlpha:0},"+=1")
  .to("#experience", 0, {autoAlpha:1})
  .to("#b1", 0, {autoAlpha:1}, "+=0.25")
  .to("#b2", 0, {autoAlpha:1}, "+=0.25")
  .to("#b3", 0, {autoAlpha:1}, "+=0.25")
  .to("#b1,#b2,#b3", 0, {autoAlpha:0}, "+=0.25")
  .to("#b1", 0, {autoAlpha:1}, "+=0.25")
  .to("#b2", 0, {autoAlpha:1}, "+=0.25")
  .to("#b3", 0, {autoAlpha:1}, "+=0.25")
  .to("#experience,#b1,#b2,#b3", 0, {autoAlpha:0}, "+=0.25")
  .to("#page1,#text1", 0, {autoAlpha:1}, "+=0.25");