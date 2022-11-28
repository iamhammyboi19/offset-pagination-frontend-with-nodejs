// THIS SHOULD BE OUTSIDE AND SEPERATED FROM THE CODE BELOW starting from let nowCur
const currentPage = 1;

const setCurPage = (curpage) => sessionStorage.setItem("page", curpage);

const getCurPage = () => +sessionStorage.getItem("page") || 1;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nowCur = +getCurPage();

// get all contents on each page 
// if the API is limited to bringing 10 results from the server get the dom element for all the pages available at the moment
 const getAllTransacionsTable = document.querySelectorAll(
    ".trans-table-content"
  );

  // first page and others
  if (
    nowCur === 1 &&
    allPaymentResults > 1 &&
    [...getAllTransacionsTable].length === 10
  ) {
    let getcur = +getCurPage();
    getcur++;
    document
      .querySelector(".next-page")
      ?.setAttribute("href", `${secondss}page=${getcur}`);
    setCurPage(getcur);
    console.log("first case 2", getCurPage());
    
    document.querySelector(".prev-page").style["pointer-events"] = "none";

    // last page
  } else if (
    nowCur === allPaymentResults &&
    allPaymentResults > 1 &&
    [...getAllTransacionsTable].length < 10
  ) {
    console.log("second case");
    let getcur = +getCurPage();
    getcur--;
    document
      .querySelector(".prev-page")
      ?.setAttribute("href", `${secondss}page=${getcur}`);
    setCurPage(getcur);
    document.querySelector(".next-page").style["pointer-events"] = "none";

    // any other pages that is not first or last
  } else if (
    nowCur < allPaymentResults &&
    [...getAllTransacionsTable].length === 10
  ) {
    console.log("third case");
    let getcur = +getCurPage();
    getcur++;
    document
      .querySelector(".next-page")
      ?.setAttribute("href", `${secondss}page=${getcur}`);
    // getcur--;
    setCurPage(getcur);

    let getcur2 = +getCurPage();
    getcur2 = getcur2 - 2;
    document
      .querySelector(".prev-page")
      ?.setAttribute("href", `${secondss}page=${getcur2}`);
    // setCurPage(getcur);
    document.querySelector(".next-page").style["pointer-events"] = "visible";
    document.querySelector(".prev-page").style["pointer-events"] = "visible";
    
//     only one page
  } else if (nowCur === 1 && allPaymentResults === 1) {
    console.log("last case");
    document.querySelector(".next-page").style["pointer-events"] = "none";
    document.querySelector(".prev-page").style["pointer-events"] = "none";
    
//     when you go back to the first page you want to reinitialize the whole event
  } else if (
    nowCur === allPaymentResults &&
    [...getAllTransacionsTable].length === 10
  ) {
    nowCur = 1;
    let getcur = +getCurPage();
    getcur--;
    document
      .querySelector(".next-page")
      ?.setAttribute("href", `${secondss}page=${getcur}`);
    setCurPage(getcur);
    // console.log("first case 2", getCurPage());
    document.querySelector(".prev-page").style["pointer-events"] = "none";
  }
