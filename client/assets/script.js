const button = document.querySelector("#button1");


const search = async (e) => {

  try{
      const res = await fetch (`http://localhost:4000/ten-websites`);
      const data = await res.json();
      document.getElementById('text').innerHTML = data
      
      
  }
  catch (error){
      console.log(error)
  }
}

button.addEventListener('click', search())
