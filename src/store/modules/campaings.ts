import { Module } from "vuex";

const store: Module<any, any> = {
  namespaced: true,
  state: {
    campImgs:  [
      {
        name: "Break The Chains",
        imgs: "img1.jpg",
        url: "/Break-The-Chains",
      },
      {
        name: "Carnivores Anonymous",
        imgs: "img2.jpg",
        url: "/Carnivores-Anonymous",
      },
      {
        name: "Cetaceans",
        imgs: "img3.jpg",
        url: "/Cetaceans",
      },
      {
        name: "Community Cats",
        imgs: "img4.jpg",
        url: "/Community-Cats",
      },
      {
        name: "Dog Meat",
        imgs: "img5.png",
        url: "/Dog-Meat",
      },
      {
        name: "Elephants",
        imgs: "img6.jpg",
        url: "/Elephants",
      },
      {
        name: "Farmed Animals",
        imgs: "img7.png",
        url: "/Farmed-Animals",
      },
      {
        name: "Fish Abuse",
        imgs: "img8.jpg",
        url: "/Fish-Abuse",
      },
      {
        name: "Fur",
        imgs: "img9.png",
        url: "/Fur",
      },
      {
        name: "Geese",
        imgs: "img10.png",
        url: "/Geese",
      },
      {
        name: "Guardians",
        imgs: "img11.jpg",
        url: "/Guardians",
      },
      {
        name: "Justice for Animals",
        imgs: "img12.jpg",
        url: "/Justice-For-Animals",
      },
      {
        name: "Puppy Mills",
        imgs: "img13.jpg",
        url: "/Puppy-Mills",
      },
      {
        name: "Sustainable Activism",
        imgs: "img14.jpg",
        url: "/Sustainable-Activism",
      },
      {
        name: "Tule Elk",
        imgs: "img15.jpg",
        url: "/Tule-Elk",
      },
      {
        name: "Vivisection",
        imgs: "img16.jpg",
        url: "/Vivisection",
      },
      {
        name: "Wild and Free",
        imgs: "img17.jpg",
        url: "/Wild-And-Free",
      },
      {
        name: "Wild Horses & Burros",
        imgs: "img16.jpg",
        url: "/Wild-Horses-&-Burros",
      },
    ],
  },
};
export default store;
