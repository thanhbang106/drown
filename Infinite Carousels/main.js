const carousels=document.querySelectorAll(".infinite-carousel");

carousels.forEach(carousel=>{
    
    const carouselInner=carousel.querySelector(".infinite-carousel div");
    const carouselContent=Array.from(carouselInner.children);

    carouselContent.forEach(item=>{

        const duplicatedItem=item.cloneNode(true);
        carouselInner.appendChild(duplicatedItem);
        carouselInner.style.animation="move 12s linear infinite";
    });
});