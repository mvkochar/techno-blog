type Post = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
};

const PostsArray: Post[] = [
  {
    id: 1,
    image: "./images/post1.png",
    title: "Aenean commodo ligula",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
  },
  {
    id: 2,
    image: "./images/post2.png",
    title: "Vivamus venenatis faucibus",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
  },
  {
    id: 3,
    image: "./images/post3.png",
    title: "Suspendisse commodo dignissim",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
  },
  {
    id: 4,
    image: "./images/post4.png",
    title: "Suspendisse pharetra mauris",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
  },
  {
    id: 5,
    image: "./images/post5.png",
    title: "Duis sapien arcu",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
  },
  {
    id: 6,
    image: "./images/post6.png",
    title: "Maecenas id nisi justo",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
  },
  {
  id: 7,
    image: "./images/post1.png",
    title: "Nullam vitae fringilla",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
  },
  {
    id: 8,
    image: "./images/post2.png",
    title: "Sed et nunc sed nunc",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
  },
  {
    id: 9,
    image: "./images/post3.png",
    title: "Integer id diam odio",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
  }
];

export default PostsArray;
