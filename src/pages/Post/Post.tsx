import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import PostsArray from "../../Components/Posts/PostsArray";
import PostsListItem from "../../Components/Posts/PostsListItem";

type Props = {
  clickCategory: (name: string) => void;
  addFavouritePost: (postId: number) => void;
};

const Post = ({ clickCategory, addFavouritePost }: Props) => {
  const params = useParams();
  const postId = Number(params.id?.slice(1));
  const post = PostsArray[postId - 1];

  return (
    <div style={{ padding: "100px" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <PostsListItem
          id={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
          category={post.category}
          isViewedCategoryLink={true}
          clickCategory={clickCategory}
          isViewedRead={false}
          addFavouritePost={addFavouritePost}
          comments={post.comments}
          isViewedComments = {true}
          isFavouritePrint = {false}
        />
      </Container>
    </div>
  );
};

export default Post;
