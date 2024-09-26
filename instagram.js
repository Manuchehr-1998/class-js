// class Instagram {
//   static totalStories = 0;

//   constructor(title, views) {
//     this.#title = title;
//     this.#views = 0;
//     Instagram.totalStories++;
//   }

//   #title;
//   #views;

//   addView() {
//     this.#views++;
//     console.log(
//       `История "${this.#title}" просмотрена! Общее количество просмотров: ${
//         this.#views
//       }`
//     );
//   }

//   static getTotalStories() {
//     return `Общее количество созданных историй: ${Instagram.totalStories}`;
//   }

//   getInfo() {
//     return `${this.#title} ${this.#views}`;
//   }
// }

// const story1 = new Instagram("Мой первый день на море");
// const story2 = new Instagram("Закат на пляже");

// story1.addView();

// story2.getInfo();

// console.log(story1.getInfo());

// console.log(Instagram.getTotalStories());
