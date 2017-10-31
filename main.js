var news = '';

//BBC NEWS
document.getElementById('bbc').addEventListener('click', function() {
  output = '';
  news = 'bbc-news';
  fetchnews();
});

//AL JAZEERA
document.getElementById('aljazeera').addEventListener('click', function() {
  output = '';
  news = 'al-jazeera-english';
  fetchnews();
});

//DAILY MAIL
document.getElementById('dailymail').addEventListener('click', function() {
  output = '';
  news = 'daily-mail';
  fetchnews();
});

//INDEPENDENT
document.getElementById('independent').addEventListener('click', function() {
  output = '';
  news = 'independent';
  fetchnews();
});

//THE GUARDIAN
document.getElementById('theguardian').addEventListener('click', function() {
  output = '';
  news = 'the-guardian-uk';
  fetchnews();
});

//THE TELEGRAPGH
document.getElementById('thetelegraph').addEventListener('click', function() {
  output = '';
  news = 'the-telegraph';
  fetchnews();
});

const apiKey = '08e7cd8aae2a4738a6484a90adda8b82'

function fetchnews() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://newsapi.org/v1/articles?source=${news}&sortBy=top&apiKey=${apiKey}`, true);

  xhr.onload = function() {
    var news = JSON.parse(this.response);
    var title = news.articles;

    for (var i = 0; i < title.length; i++) {
      output +=
      `
      <div class="col-xs-6 col-sm-6 col-md-6 clear">
        <div class="card">
          <div class="card-body">
              <img src=${title[i].urlToImage} alt="">
              <h4 class="card-title">${title[i].title}</h4>
              <p class="card-text">${title[i].description}</p>
              <a href=${title[i].url} class="card-link">Read More</a>
          </div>
       </div>
      </div>
      `
    }
      document.getElementById('output').innerHTML = output;
  }
  xhr.send();
}
