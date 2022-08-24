

const search = async (e) => {
    try{
        const res = await fetch (`http://localhost:4000/ten-websites`);
        const data = await res.json();
        data.forEach(element => {
            var newDiv = document.createElement('div');
            newDiv.textContent = element.title
            const mainDiv = document.querySelector('#text1')
            newDiv.append(element.link)
            newDiv.append(element.description)
            mainDiv.append(newDiv)
        });   
  
        
        
    }
    catch (error){
        console.log(error)
    }
  }

  search();
