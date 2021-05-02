'use strict';

const result = document.getElementById('result');
const filter = document.getElementById('filter');

const url = 'https://randomuser.me/api/?results=5';
let allLi = [];

async function fetchData(link) {
  const res = await fetch(link);
  const data = await res.json();

  displayData(data.results);
}

fetchData(url);

function displayData(datas) {
  result.innerHTML = '';

  datas.forEach((data) => {
    const li = document.createElement('li');

    li.innerHTML = `
		  <img
				src="${data.picture.large}"
				alt="${data.gender}" />
			<div class="user-info">
				<h4>${data.name.first} ${data.name.last}</h4>
				<p>${data.location.city}, ${data.location.country}</p>
			</div>
		`;

    allLi.push(li.innerText);

    result.appendChild(li);
  });
}

function search() {
  const allLi = result.querySelectorAll('li');

  allLi.forEach((li) => {
    if (
      li.textContent.toLowerCase().trim().includes(filter.value.toLowerCase())
    ) {
      li.classList.remove('hide');
    } else {
      li.classList.add('hide');
    }
  });
}

filter.addEventListener('input', search);
