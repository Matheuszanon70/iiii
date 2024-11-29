async function populate() {

    const requestURL = 'https://gist.github.com/gledsoncruz/8454e3b7eb29374ba998';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const sproducts = await response.json();
  
    populateproducts(products);
    populateproducts(products);
  
  }
  
  function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.name;
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${obj.description} // Formed: ${obj.price}`;
    header.appendChild(myPara);
  }
  
  function populateProducts(obj) {
    const section = document.querySelector('section');
    const products = obj.avaiable;
  
    for (const product of products) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = products.name;
      myPara1.textContent = `description: ${product.description}`;
      myPara2.textContent = `price: ${product.price}`;
      myPara3.textContent = 'avaiable:';
  
      const avaiable = product.avaiable;
      for (const avaiable of avaiable) {
        const listItem = document.createElement('li');
        listItem.textContent = avaiable;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
  
  populate();
  