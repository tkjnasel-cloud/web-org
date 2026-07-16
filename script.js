// ==============================
// SWIPER
// ==============================

var swiper = new Swiper(".anggotaSwiper", {

    slidesPerView:1,

    spaceBetween:25,

    loop:true,

    centeredSlides:false,

    autoplay:{

        delay:2500,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },

    breakpoints:{

        640:{

            slidesPerView:2,

        },

        1024:{

            slidesPerView:3,

        }

    }

});

const images = document.querySelectorAll(".gallery-item img");

images.forEach(img=>{
    img.onclick=()=>{
        const popup=document.createElement("div");
        popup.className="popup";

        popup.innerHTML=`
            <span>&times;</span>
            <img src="${img.src}">
        `;

        document.body.appendChild(popup);

        popup.querySelector("span").onclick=()=>{
            popup.remove();
        };

        popup.onclick=(e)=>{
            if(e.target===popup) popup.remove();
        };
    }
});