function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const pets = [
  {
    id: 1,
    name: 'Nina',
    img: '../assets/nina.png' 
  },
  {
    id: 2,
    name: 'Félix',
    img: '../assets/felix.png' 
  },
  {
    id: 3,
    name: 'Mingau',
    img: '../assets/mingau.png' 
  },
  {
    id: 4,
    name: 'Bolt',
    img: '../assets/bolt.png' 
  }
]

const id = getIdFromUrl();
const pet = pets.find(pet => pet.id == id);

const imgPet = document.getElementById('pet-image');
imgPet.src = pet.img;

document.getElementById('pet-name').innerText = pet.name;

