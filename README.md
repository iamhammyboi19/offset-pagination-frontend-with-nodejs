#### offset-pagination-frontend-with-nodejs

- I had troubles with implementing pagination with PREVIOUS and NEXT button while building an application
- I tried to search online but they are bringing the one from node js express skip and limit which I had already implemented
- The logic I used is first awaiting the total result in the database before implementing limiting and passing it as a variable to my pug
- if for example the whole document is 30 but I limit and skip it to 10 results per page
- Then allPaymentsResult would be 30/10 ie 3 pages use Math.ceil incase there are pages like 2.2 to make it 3

- conditions to check 
  - if page === 1 and allpages > 1 `ie page one and there is other pages`
  - if page === 1 and allpages === 1 `ie theres is only one page available disable prev and next button`
  - if page === allpages and allpages > 1 `ie you are in the last page`
 
- Methods
  - if page 1 loads and allpages > 1 
    - `nextpage = currentPage + 1`
    - `set nextpage in sessionStorage and also set currentPage in sessionStorage`
    - `disable previous button`
    
  - if you click on next page check `(if currentpage <= allpages)` then
    - `get nextpage from sesssionStorage and set in sessionStorage currentPage = nextpage`
    - `set previous page to nextpage - 1`
    - `set nextpage = currentPage + 1`
    
  - if you click on previous page check `(if currentpage <= allpages)` then
    - `get previous page and make it current`
    - `set nextpage to previousPage + 1`
    - `set previous page to currentPage - 1`

I am not sure if I will run into any error or if this is the perfect way to do it. I am sharing this because of how frustrating it was to see no tutorial about this specific problem
