const newsL = document.getElementById('news-l');
const newsR = document.getElementById('news-r');
const date = document.getElementById('date')
fetch('https://newsapi.org/v2/top-headlines?country=in&pageSize=20&apiKey=18b659acc342401fbf8eacde63895e08')
  .then(response => response.json())
  .then(data => {
    const titleEl = ['h1','h2','h3'];
    const classes = ['','','','','', 'border']
    for(let i = 0; i<10; i++ ){
        let h = titleEl[Math.floor(Math.random() * titleEl.length)];
        let c = classes[Math.floor(Math.random() * classes.length)];
        let article = data.articles[i];
        let articleTitle
        let articleImg
        let articleDesc
        let articleEnd
        let newsBox = document.createElement('div');
        newsBox.className = 'news-box'
        articleTitle = document.createElement(h);
        articleTitle.textContent = article.title;
        newsBox.appendChild(articleTitle)
        if(article.urlToImage){
            articleImg = document.createElement('img');
            articleImg.src = article.urlToImage;
            newsBox.appendChild(articleImg)
        }
        if(article.description){
            articleDesc = document.createElement('p');
            articleDesc.textContent = article.description;
            newsBox.appendChild(articleDesc);
        }
        if(c == "border"){
            newsBox.classList.add(c)
        } 
        newsL.appendChild(newsBox);
        articleEnd = document.createElement('hr');
        newsL.appendChild(articleEnd);
    }
    for(let i = 10; i<20; i++ ){
        let h = titleEl[Math.floor(Math.random() * titleEl.length)];
        let c = classes[Math.floor(Math.random() * classes.length)];
        let article = data.articles[i];
        let articleTitle
        let articleImg
        let articleDesc
        let articleEnd
        let newsBox = document.createElement('div');
        newsBox.className = 'news-box'
        articleTitle = document.createElement(h);
        articleTitle.textContent = article.title;
        newsBox.appendChild(articleTitle)
        if(article.urlToImage){
            articleImg = document.createElement('img');
            articleImg.src = article.urlToImage;
            newsBox.appendChild(articleImg)
        }
        if(article.description){
            articleDesc = document.createElement('p');
            articleDesc.textContent = article.description;
            newsBox.appendChild(articleDesc)
        }
        if(c == "border"){
            newsBox.classList.add(c)
        } 
        newsR.appendChild(newsBox)
        articleEnd = document.createElement('hr')
        newsR.appendChild(articleEnd)
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  function getCurrentDate() {
    const currentDate = new Date();
    
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const year = currentDate.getFullYear();
  
    // Ensure that the day and month are formatted with leading zeros if needed
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
  
    // Format the date as "DD/MM/YYYY"
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
  
    return formattedDate;
  }
  
  const currentDateFormatted = getCurrentDate();
  date.innerHTML = `Date: ${currentDateFormatted}`
