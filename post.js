class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.likes = 0;
  }

  updateContent(newContent) {
    this.content = newContent;
    console.log(`Текст поста обновлен: ${this.content}`);
  }

  addLike() {
    this.likes += 1;
    console.log(`Посту добавлен лайк. Всего лайков: ${this.likes}`);
  }

  deletePost() {
    this.title = "";
    this.content = "";
    this.author = "";
    this.likes = 0;
    console.log("Пост был удален.");
  }

  displayPost() {
    if (this.title === "" && this.content === "" && this.author === "") {
      console.log("Пост был удален.");
    } else {
      console.log(`Пост: ${this.title}`);
      console.log(`Автор: ${this.author}`);
      console.log(`Текст: ${this.content}`);
      console.log(`Лайков: ${this.likes}`);
    }
  }
}

const post = new Post(
  "Мой первый пост",
  "Это мой первый пост в социальной сети!",
  "Иван Иванов"
);

post.displayPost();
post.addLike();
post.updateContent("Обновленный текст моего первого поста.");
post.displayPost();
post.deletePost();
post.displayPost();
