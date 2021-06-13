// timeline for border animation
let tl = gsap.timeline({default: {duration: 3}});

tl.to('.card', {borderTopColor: '#bad', delay: 0.3})
  .to('.card', {borderRightColor: '#bad'}, '-=0.2')
  .to('.card', {borderBottomColor: '#bad'}, '-=0.2')
  .to('.card', {borderLeftColor: '#bad'}, '-=0.2')

// animation for img-wrapper 
gsap.fromTo('.img-wrapper', {height: 0, backgroundColor: 'transparent'}, {delay: 1, duration: 1, height: '500px', backgroundColor: '#bad'})

// animation cat
gsap.to('.img', {delay: 2, duration: 0.5, opacity: 1})