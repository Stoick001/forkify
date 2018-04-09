export default class Lieks {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, autor, image) {
    const like = {id, title, autor, image}

    this.likes.push(like);

    this.persistData();
    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(el => el.id === id);
    this.likes.splice(index, 1);

    this.persistData();
  }

  isLiked(id) {
    return this.likes.findIndex(el => el.id === id) !== -1;
  }

  getNumLikes() {
    return this.likes.length;
  }

  persistData() {
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }

  readStorage() {
    const storage = JSON.parse(localStorage.getItem('likes'));

    if (storage) {
      this.likes = storage;
    }
  }
}
