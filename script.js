const imagecontainer = document.getElementById('image_container');
const loader = document.getElementById('loader');

let photosarray = [];

const apikey = config.SECRET_API_KEY;
const count = 10;

const apiurl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


function displayphotos()
{
  //running dunction for each object to create and append in dom
  photosarray.forEach(photo=>
    {
      const item = document.createElement('a');
      item.setAttribute('href' , photo.links.html );
      item.setAttribute('target' , '_blank')

      // creating image tag
      const img = document.createElement('img');
      img.setAttribute('src' , photo.urls.regular);
      img.setAttribute('title' , photo.alt_description);
      img.className= "photosize"

      item.appendChild(img);
      imagecontainer.appendChild(item);
    });
}


async function fetchphotos()
{
  try {
    const response = await fetch(apiurl);
    photosarray = await response.json();
    displayphotos();
  } catch (error) {
    
  }
}

fetchphotos();