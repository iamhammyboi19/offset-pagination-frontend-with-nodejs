// set current page
const setCurPage = (curpage) => sessionStorage.setItem("page", curpage);

// set prev and next page
const setCurNextPage = (thepage) => sessionStorage.setItem("nextpage", thepage);
const setCurPrevPage = (thepage) => sessionStorage.setItem("prevpage", thepage);

// functions to get pages saved to the sessionStorage
const getCurPage = () => +sessionStorage.getItem("page") || 1;
const getCurNextPage = () => +sessionStorage.getItem("nextpage") || 1;
const getCurPrevPage = () => +sessionStorage.getItem("prevpage") || 1;

// set previous and next page href to the sessionStorage eg www.me.com/?page=1, www.me.com/?page=3
// NOTE you're storing the numbers coming from code line 9-10
// I do this because the page refreshes when you click on links 
// and on window('load',()=>{}) I set href attribute by geting the setPrevLink and setNextLink...
// ...to something like this www.me.com/?page=1
const setPrevLink = (prev) => sessionStorage.setItem("prevv", prev);
const setNextLink = (next) => sessionStorage.setItem("nextt", next);

let currentPage;
let nextpage;
let prevpage;

// get current page
currentPage = getCurPage();

// I make the pages set themselves on first and last 
// I use clicking event on prev and next button to increment or decrement previous and next page in the sessionStorage
// and I use e.preventDefault() to make it work

  // page 1 and no other page
  if (currentPage === 1 && allPaymentResults === 1) {
    if (
      document.querySelector(".next-page") &&
      document.querySelector(".prev-page")
    ) {
      document.querySelector(".next-page").style["pointer-events"] = "none";
      document.querySelector(".prev-page").style["pointer-events"] = "none";
    }
  }

  // page 1 and other page
  if (currentPage === 1 && allPaymentResults > 1) {
    nextpage = currentPage + 1;
    setCurNextPage(nextpage);
    setCurPage(1);

    document
      .querySelector(".next-page")
      ?.setAttribute("href", `${secondss}page=${nextpage}`);

    setNextLink(`${secondss}page=${nextpage}`);

    document.querySelector(".prev-page").style["pointer-events"] = "none";
  }

  // last page
  if (currentPage === allPaymentResults && allPaymentResults > 1) {
    setCurPage(allPaymentResults);
    currentPage = getCurPage();
    prevpage = currentPage - 1;
    setCurPrevPage(prevpage);

    document
      .querySelector(".prev-page")
      ?.setAttribute("href", `${secondss}page=${prevpage}`);
    setCurPage(prevpage);

    setPrevLink(`${secondss}page=${prevpage}`);
    setNextLink(`#`);
    document.querySelector(".next-page").style["pointer-events"] = "none";
  }

  // any other page not first and last
  document.querySelector(".next-page")?.addEventListener("click", function (e) {
//    prevent page from reloading immediately you click the link
    e.preventDefault();

//    get the href which is set from sessionStorage on window load event and I load it after 1 second
    const href = document.querySelector(".next-page").getAttribute("href");

    if (currentPage <= allPaymentResults) {
      currentPage = +getCurNextPage();
      prevpage = currentPage - 1;
      nextpage = currentPage + 1;
      setCurPage(currentPage);
      setCurPrevPage(prevpage);
      setCurNextPage(nextpage);

      document
        .querySelector(".next-page")
        ?.setAttribute("href", `${secondss}page=${nextpage}`);

      setNextLink(`${secondss}page=${nextpage}`);

      document
        .querySelector(".prev-page")
        ?.setAttribute("href", `${secondss}page=${prevpage}`);

      setPrevLink(`${secondss}page=${prevpage}`);

      /////////////////////////////////////////////////////////

      document.querySelector(".next-page").style["pointer-events"] = "visible";
      document.querySelector(".prev-page").style["pointer-events"] = "visible";
    }

    setTimeout(() => {
      window.location.replace(href);
    }, 1000);
  });

  document.querySelector(".prev-page")?.addEventListener("click", function (e) {
    e.preventDefault();

    const href = document.querySelector(".prev-page").getAttribute("href");

    if (currentPage <= allPaymentResults) {
      currentPage = +getCurPrevPage();
      nextpage = currentPage + 1;
      prevpage = currentPage - 1;

      setCurPage(currentPage);
      setCurNextPage(nextpage);
      setCurPrevPage(prevpage);

      document
        .querySelector(".next-page")
        ?.setAttribute("href", `${secondss}page=${nextpage}`);

      setNextLink(`${secondss}page=${nextpage}`);

      document
        .querySelector(".prev-page")
        ?.setAttribute("href", `${secondss}page=${prevpage}`);
      setPrevLink(`${secondss}page=${prevpage}`);

      /////////////////////////////////////////////////////////

      document.querySelector(".next-page").style["pointer-events"] = "visible";
      document.querySelector(".prev-page").style["pointer-events"] = "visible";
    }

    setTimeout(() => {
      window.location.replace(href);
    }, 1000);
  });

// get the previous page link and next page link from sessionStorage on reload
  window.addEventListener("load", (e) => {
    const getnext = sessionStorage.getItem("nextt") || "#";
    const getprev = sessionStorage.getItem("prevv") || "#";
    document.querySelector(".next-page")?.setAttribute("href", getnext);
    document.querySelector(".prev-page")?.setAttribute("href", getprev);
  });
