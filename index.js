const navbarBtn = document.querySelector("#navbariacbtn") 
const closeBtn = document.querySelector(".fa-xmark")
console.log(closeBtn)

navbarBtn.addEventListener("click", function(){
    document.querySelector(".mobile-menu").classList.add("aktiv")
})

closeBtn.addEventListener("click", function(){
    document.querySelector(".mobile-menu").classList.remove("aktiv")
})




//AOS 3
AOS.init();


//Swiper JVc

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },


      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
      },
  });

  
  const bloqlarinYerleseceyiDiv = document.querySelector(".blog-right-side")
  console.log(bloqlarinYerleseceyiDiv)
  
window.addEventListener("DOMContentLoaded" ,getMelumatlariGetir)

 async function getMelumatlariGetir() {
const unvan = "https://jsonplaceholder.typicode.com/posts"
 
  
 try {
    const gelenCavab = await fetch(unvan)
    const postlar = await gelenCavab.json()
    console.table(postlar)


    
    for(let i=0; i<postlar.length; i++) {


        bloqlarinYerleseceyiDiv.innerHTML += `<div class="blog py-3">
        <p id="metadata">April 16, 2021.<span id="time">6 mins</span></p>
        <h2>${postlar[i].title}</h2>
        <a href="">Read the article <img src="images/Strelka2.svg" alt=""></a>
        </div> 
        `
    }
 }

 catch(xeta) {
    console.log("Serverde xeta yarandi.Bir az sonra cehd edin" + xeta.message)

 }
 }


    let proyektSwiper = new Swiper(".projectsSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
    //pagination: {
    // el: ".swiper-pagination",
    //  clickable: true,
    //},

      navigation: {
        nextEl: ".sonra",
        prevEl: ".evvel",
      },
    });

     