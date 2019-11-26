import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

AOS.init({
  disable: 'mobile',
  offset: 300,
  duration: 1000,
  easing: 'linear',
  once: true,
})

AOS.refreshHard()
