import PostItem from "./PostItem";

function PostList({posts, title}) {
  return ( 
    <>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => <PostItem number={index} post={post} key={post.id}/>)}
    </>
   );
}

export default PostList;
