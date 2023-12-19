function getPreviousPage(){
  if(pageContext.previousPage) {
    fetchCharactersByPage(pageContext.previousPage);
  }
}

function getNextPage(){
  if(pageContext.nextPage) {
    fetchCharactersByPage(pageContext.nextPage);
  }
}

function addNumberPages(){
  pages.innerHTML = '';
  pageContext.pagesToShow.forEach(pageNumber => {
    if(pageNumber === pageContext.currentPage) {
      pages.innerHTML += 
      `<button class="button-page current-page" type="button" onclick="getSpecificPage(event)" value="${pageNumber}">${pageNumber}</button>`;  
      return;
    } 
    pages.innerHTML += 
      `<button class="button-page" type="button" onclick="getSpecificPage(event)" value="${pageNumber}">${pageNumber}</button>`;
  });
}

function getSpecificPage(e) {
  const page = e.target.value;
  fetchCharactersByPage(`https://rickandmortyapi.com/api/character/?page=${page}`);
}