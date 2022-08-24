const query = document.querySelector('#query')

document.getElementById("button1").onclick = function (e) {
  e.preventDefault()
  if (!query.value) {
    location.href = "http://localhost:8000/results.html?";
  } else {
    window.open('https://www.google.com/search?q='+query.value)
  }
};


    
const random = async (e) => {
  try{
      const res = await fetch (`http://localhost:4000/ten-websites/random`);
      const data = await res.text();
      location.href = data;

      
      
  }
  catch (error){
      console.log(error)
  }
}

document.getElementById("button2").onclick = function (e) {
  e.preventDefault()
  random()
}
    
