const usersData = JSON.parse(jsonData);

usersData.forEach(user => {
  const divEl = document.createElement('div');
  divEl.classList.add('product');

  const imgEl = document.createElement('img');
  imgEl.classList.add('product__img');
  imgEl.src = user.imageUrl;

  const titleEl = document.createElement('h1');
  titleEl.textContent = user.company;

  const userEl = document.createElement('h2');
  userEl.textContent = `User: ${user.username}, have role - ${user.role}.`;

  const phoneNumberEl = document.createElement('p');
  phoneNumberEl.classList.add('product__phone');
  phoneNumberEl.textContent = user.phone;


  divEl.appendChild(imgEl);
  divEl.appendChild(titleEl);
  divEl.appendChild(userEl);
  divEl.appendChild(phoneNumberEl);
  document.querySelector('.wrapper').appendChild(divEl);
});