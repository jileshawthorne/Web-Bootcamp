 //This is the Goal: <p>This is Jiles paragraph.</p>
 ////Create a h1 tag and append to the dom that you are sending to your server
  
  let body = document.getElementById('content')
  
  let header = document.createElement('h1')
  header.innerHTML = 'Get Money'
  body.append(header)
  
  let subHeader = document.createElement('h2')
  subHeader.innerHTML = 'H to the Izzo'
  body.append(subHeader)

  let paragraph = document.createElement('p')
  paragraph.innerHTML = 'This is a javascript generated paragraph tag'
 
 
  body.append(paragraph) 
