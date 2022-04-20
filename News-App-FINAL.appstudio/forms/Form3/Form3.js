let newsdets = null
const fetchNewsD = async () => {
    
    await fetch('https://newsapi.org/v2/everything?q=malware&sortBy=popularity&apiKey=0b7904aeb82f431a82b1ae50abc19ef6')
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      console.log(res.articles)
      newsdets = res.articles
   
    })
    .catch(err=>{
      console.log(err)
    })
    return newsdets
}

const displayNewsData = async()=>{
    let newsData = await fetchNewsD()
    for (let i = 0; i < 30; i++) {
    const n3 = document.getElementById('Container3')
    const newsSign = `<div class ="jumbotron">
                        <h4> ${newsData[i].title}</h4>
                        <p>by: ${newsData[i].author}</p>
                        <img src=${newsData[i].urlToImage} /><br>
                        <input type=button class="btn btn-primary" onClick="parent.open('${newsData[i].url}')" value='Read more'>
                        </div><br>`;
    n3.innerHTML += newsSign
    }
}
displayNewsData()