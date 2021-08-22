const imagecontainer = document.getElementById('image_container');
const loader = document.getElementById('loader');

let photosarray = [];

const apikey = config.SECRET_API_KEY;
const count = 30;

let ready = false;
let noofimageloaded =0 ;
let totalimages =0 ;

const apiurl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


function imageloaded()
{
  noofimageloaded++;
  if(noofimageloaded === totalimages)
  {
    ready =true;
    loader.hidden = true;
    fetchphotos();
    //console.log('ready:' , ready);
  }
}

function displayphotos()
{
  noofimageloaded = 0;
  totalimages = photosarray.length;
  //console.log('totalimages:' , totalimages);
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
      img.addEventListener('load' , imageloaded)
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

//check if our scroll is near bottom and load more photos
window.addEventListener('scroll' , ()=>
{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight-1000 && ready)
  {
    ready = false;
    //console.log('more photos loaded');
    displayphotos();
  }
  
})

fetchphotos();