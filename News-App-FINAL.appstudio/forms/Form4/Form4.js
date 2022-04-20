let newsd = null
const fetchN = async () => {
    
    await fetch('https://newsapi.org/v2/everything?q=ransomware&sortBy=popularity&apiKey=0b7904aeb82f431a82b1ae50abc19ef6')
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      console.log(res.articles)
      newsd = res.articles
   
    })
    .catch(err=>{
      console.log(err)
    })
    return newsd
}

const displayN = async()=>{
    let newsDatas = await fetchN()
    for (let i = 0; i < 30; i++) {
    const n4 = document.getElementById('Container4')
    const newsArti = `<div class ="jumbotron">
                        <h4> ${newsDatas[i].title}</h4>
                        <p>by: ${newsDatas[i].author}</p>
                        <img src=${newsDatas[i].urlToImage} /><br>
                        <input type=button class="btn btn-primary" onClick="parent.open('${newsDatas[i].url}')" value='Read more'>
                        </div><br>`;
    n4.innerHTML += newsArti
    }
}
displayN()