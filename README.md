#### offset-pagination-frontend-with-nodejs

- I had troubles with implementing pagination with PREVIOUS and NEXT button while building an application
- I tried to search online but they are bringing the one from node js express skip and limit which I had already implemented
- The logic I used is first awaiting the total result in the database before implementing limiting and passing it as a variable to my pug
- if for example the whole document is 30 but I limit and skip it to 10 results per page
- Then allPaymentsResult would be 30/10 ie 3 pages use Math.ceil incase there are pages like 2.2 to make it 3

- I checked if there first page and others ie `currentpage === 1 && allPaymentsResult > 1 && getAllTransacionsTable in dom === 10` (the limit)
  - ie go to page 2 and there's no previous page
  - `${secondss}page=${getcur}` secondss is the url and page is the query eg "www.example.com/?page=2"
- I checked for last page ie `if currentpage === allPaymentsResult && allPaymentsResult > 1 && getAllTransacionsTable < 10`
  - ie you can only go back to the previous page and no next page
- I checked `if currentpage < allPaymentsResult && getAllTransacionsTable === 10` ie its in other pages that is not first or last
  - then you can go back and forth between both pages
- I checked if its only a single page result `currentpage === 1 && allPaymentsResult === 1`
  - disable both buttons
- I ran into some error whenever I go back to the first page from previous page which made me add the last condition 
  - `if  currentpage === allPaymentsResult && getAllTransacionsTable === 10` make currentpage = 1 and repeat the first condition again

- variables
  - `nowCur` is the currentpage
  - `allTransactionTable` is the element loaded for each result from the API and it is limited to 10 that is why I am using 10 in the conditions
  - `allPaymentResults` is the total results of the API coming from the database without limiting. I use this to know total of pages available
  - the last page condition is not perfect as the last results might be exactly 10... I run into bug whenever I use `<= 10`

I am not sure if I will run into any error or if this is the perfect way to do it. I am sharing this because of how frustrating it was to see no tutorial about this specific problem
