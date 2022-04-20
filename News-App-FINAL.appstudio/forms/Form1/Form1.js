Hamburger1.onclick=function(s){
  if (typeof(s) == "object") {
        return;
    }
    if (s === "Home") {
      ChangeForm(Form1);
    }
    if (s === "Hacking") {
      ChangeForm(Form2);
    }
    if (s === "Malware") {
      ChangeForm(Form3);
    }
    if (s === "Ransomware") {
      ChangeForm(Form4);
    }
    if (s === "About CSN") {
      ChangeForm(Form5);
    }    
};

Form1.onshow=function(){
  NSBPage.appendChild(HeaderGlobal)
};

let news_data = null
let getNewsData = async () => {
    
    await fetch('https://newsapi.org/v2/everything?language=en&q=cybersecurity&sortBy=publishedAt&apiKey=0b7904aeb82f431a82b1ae50abc19ef6')
    .then(res=> res.json())
    .then(res=>{
      console.log(res)
      console.log(res.articles)
      news_data = res.articles
   
    })
    .catch(err=>{
      console.log(err)
    })
    return news_data
}

let fetchNews = async()=>{
    let data = await getNewsData()
    for (let i = 0; i < 30; i++) {
    const n1 = document.getElementById('Container1')
    const newsSegment = `<div class ="jumbotron">
                        <h4> ${data[i].title}</h4>
                        <p>by: ${data[i].author}</p>
                        <img src=${data[i].urlToImage} /><br>
                        <input type=button class="btn btn-primary" onClick="parent.open('${data[i].url}')" value='Read more'>
                        </div><br>`;
    n1.innerHTML += newsSegment
    }

}
fetchNews()
