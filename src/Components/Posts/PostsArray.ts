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
    title: "Aenean commodo ligula eget dolor. Aenean massa",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
  },
  {
    id: 2,
    image: "./images/post2.png",
    title: "Vivamus venenatis faucibus orci. Nam tincidunt, quam.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
  },
  {
    id: 3,
    image: "./images/post3.png",
    title: "Suspendisse commodo dignissim tellus, ac consequat ligula",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
  },
  {
    id: 4,
    image: "./images/post4.png",
    title: "Suspendisse pharetra mauris at ultricies maximus. Suspendisse.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
  },
  {
    id: 5,
    image: "./images/post5.png",
    title: "Duis sapien arcu, auctor vel commodo id.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
  },
  {
    id: 6,
    image: "./images/post6.png",
    title: "Maecenas id nisi justo. Morbi tincidunt luctus.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
  },
  {
  id: 7,
    image: "./images/post1.png",
    title: "Nullam vitae fringilla nisl. Quisque.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
  },
  {
    id: 8,
    image: "./images/post2.png",
    title: "Sed et nunc sed nunc venenatis luctus.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
  },
  {
    id: 9,
    image: "./images/post3.png",
    title: "Integer id diam odio. Ut metus orci.",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
  }
];

export default PostsArray;
