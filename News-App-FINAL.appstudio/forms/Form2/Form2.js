let newsdetails = null
const fetchNewsData = async () => {
    
    await fetch('https://newsapi.org/v2/everything?q=hacking&sortBy=popularity&apiKey=0b7904aeb82f431a82b1ae50abc19ef6')
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      console.log(res.articles)
      newsdetails = res.articles
   
    })
    .catch(err=>{
      console.log(err)
    })
    return newsdetails
}

const displayNews = async()=>{
    let newsDataArr = await fetchNewsData()
    for (let i = 0; i < 30; i++) {
    const n2 = document.getElementById('Container2')
    const newsQuery = `<div class ="jumbotron">
                        <h4> ${newsDataArr[i].title}</h4>
                        <p>by: ${newsDataArr[i].author}</p>
                        <img src=${newsDataArr[i].urlToImage} /><br>
                        <input type=button class="btn btn-primary" onClick="parent.open('${newsDataArr[i].url}')" value='Read more'>
                        </div><br>`;
    n2.innerHTML += newsQuery
    }
}
displayNews()

