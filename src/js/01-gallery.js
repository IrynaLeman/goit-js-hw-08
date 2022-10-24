// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
function creareGallery(items) {
  return items
    .map(
      (item) =>
        `
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>
        `
    )
    .join('');
}

const addGallery = creareGallery(galleryItems);
galleryEl.innerHTML = addGallery;
//console.log(galleryEl);


new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});