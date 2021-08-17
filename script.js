
const apikey = "g8JFlzSvYEA_1eR5hq_8UCLmXA6w7wRKi36nLfFawac";
const count = 10;

const apiurl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


async function fetchphotos()
{
  try {
    const response = await fetch(apiurl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    
  }
}

//fetchphotos();