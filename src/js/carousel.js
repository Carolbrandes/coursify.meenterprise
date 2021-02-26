export default function carousel() {
  const carouselItems = [...document.querySelectorAll("[carouselItem]")];

  const inserirDots = (array, dotsWrapper) => {
    
    let qtdItensArray = array.length;
    const wrapper = document.querySelector(dotsWrapper);

    for(let i = 1; i <= qtdItensArray; i++){
      let dot =  i === 1 ? `<span class="dot ativo"></span>` : `<span class="dot"></span>`;
        wrapper.insertAdjacentHTML('beforeend', dot);
    }   
  }

  inserirDots(carouselItems, ".dots-carousel");

  const dotsChild = [...document.querySelectorAll(".dot")];

  const removeClassAtivo = (array, classe) => array.forEach((e) => e.classList.contains(classe) && e.classList.remove(classe));

  const classeAtiva = "ativo";

  setInterval(() => {
      carouselItems.forEach((item, index, array) => {
        removeClassAtivo(array, classeAtiva);
        item.classList.add(classeAtiva);
        
        removeClassAtivo(dotsChild, classeAtiva);
        dotsChild[index].classList.add(classeAtiva);
  
      });
      carouselItems.reverse();
      dotsChild.reverse();
  }, 15000);

}