fetchData();

const logo= document.querySelector(".logo");

logo.addEventListener("click", ()=>{
    location.reload();
})

const news1 = document.querySelector('.news1');
const news2 = document.querySelector('.news2');
const news3 = document.querySelector('.news3');
const news4 = document.querySelector('.news4');
const tagline1 = document.getElementById('showline1');
const tagline2 = document.getElementById('showline2');
const tagline3 = document.getElementById('showline3');
const tagline4 = document.getElementById('showline4');
const author1 = document.getElementById('author-name1');
const author2 = document.getElementById('author-name2');
const author3 = document.getElementById('author-name3');
const author4 = document.getElementById('author-name4');
const date1 = document.getElementById('dated1');
const date2 = document.getElementById('dated2');
const date3 = document.getElementById('dated3');
const date4 = document.getElementById('dated4');
const tag1 = document.getElementById('tag1');
const tag2 = document.getElementById('tag2');
const tag3 = document.getElementById('tag3');
const tag4 = document.getElementById('tag4');
const sideNewsContainer = document.getElementById('side-container');
const sideNewsTemplate = document.getElementById('template-card');
const breakingNews = document.getElementById('breaking-news');
const dedNewsType = document.querySelector('.news-type');
const dedNewsHeadline = document.querySelector('.news-headline');
const dedNewsContent= document.querySelector('.news-content');
const dedNewsDate = document.querySelector('.news-date');

async function fetchData(){
    try{
        const response = await fetch("https://coding-week-2024-api.onrender.com/api/data");

        if(!response.ok){
            throw new Error("Couldn't fetch data")
        }

        const data = await response.json();

        breakingNews.innerHTML = `${data[0].headline}`;

        news1.style.backgroundImage = `url(${data[0].image})`;
        tagline1.innerHTML = `${data[0].headline}`;
        author1.innerHTML = `${data[0].author}`;
        date1.innerHTML = `${data[0].date}`;
        tag1.innerHTML = `${data[0].type}`;

        news2.style.backgroundImage = `url(${data[1].image})`;
        tagline2.innerHTML = `${data[1].headline}`;
        author2.innerHTML = `${data[1].author}`;
        date2.innerHTML = `${data[1].date}`;
        tag2.innerHTML = `${data[1].type}`;

        news3.style.backgroundImage = `url(${data[2].image})`;
        tagline3.innerHTML = `${data[2].headline}`;
        author3.innerHTML = `${data[2].author}`;
        date3.innerHTML = `${data[2].date}`;
        tag3.innerHTML = `${data[2].type}`;

        news4.style.backgroundImage = `url(${data[3].image})`;
        tagline4.innerHTML = `${data[3].headline}`;
        author4.innerHTML = `${data[3].author}`;
        date4.innerHTML = `${data[3].date}`;
        tag4.innerHTML = `${data[3].type}`;

        data.forEach(sideNewsData => {
            if(sideNewsData.id<=4){return};
            const cardClone = sideNewsTemplate.content.cloneNode(true);
            sideDataFill(cardClone, sideNewsData);
            sideNewsContainer.appendChild(cardClone);
        });
    }

    catch(error){
        console.log(error);
    }
}

function sideDataFill(cardClone, sideNewsData) {
    const sideNewsImage = cardClone.querySelector('#news-image');
    const sideNewsHeadline = cardClone.querySelector('.side-news-tagline');
    const sideNewsDate = cardClone.querySelector('#side-news-date');

    sideNewsImage.src = sideNewsData.image;
    sideNewsHeadline.innerHTML = sideNewsData.headline;
    sideNewsDate.innerHTML = sideNewsData.date;
}



