let pageContext = {
  currentPage: 1,
  totalPages: 0,
  previousPage: null,
  nextPage: null,
  pagesToShow: [],
  setCurrentPage () {
    if(!this.previousPage) {
      this.currentPage = 1;
      return;
    }
    if(!this.nextPage) {
      this.currentPage = this.totalPages;
      return;
    } 
    const indexPrev = this.previousPage.indexOf("=");
    const numberOfNextPage = Number(this.previousPage.slice(indexPrev +1));

    this.currentPage = numberOfNextPage + 1
  }
}

function changePageContextData(total, previous, next) {
  pageContext.totalPages = total;
  pageContext.previousPage = previous;
  pageContext.nextPage = next;
  pageContext.setCurrentPage();
}

function changePagesToShow() {
  if(pageContext.currentPage <= pageContext.totalPages){
    pageContext.pagesToShow = [];

    let keepLooping = true 
    let number = 1
    while(keepLooping) {
      let multiple = number * 10;
      if(multiple > pageContext.currentPage) {
        keepLooping = false;
        number = multiple;
        continue;
      }
      number++;
    }

    while(pageContext.pagesToShow.length < 11 && pageContext.pagesToShow[pageContext.pagesToShow.length - 1] !== pageContext.totalPages) {
      if(pageContext.pagesToShow.length) {
        const num = pageContext.pagesToShow[0] - 1;
          pageContext.pagesToShow.unshift(num);
      } else {
        pageContext.pagesToShow.push(number);
      }
    }
    if(pageContext.pagesToShow.includes(0)) {
      pageContext.pagesToShow.shift()
    }
    if(pageContext.pagesToShow.some(num => num > pageContext.totalPages)){
      pageContext.pagesToShow = pageContext.pagesToShow
        .filter(num => num <= pageContext.totalPages);
    }
    return;
  }
}