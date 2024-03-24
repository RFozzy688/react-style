import PostItem from "./PostItem";

function PostList({posts, title, remove}) {
  return ( 
    <>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => {
        return (
          <PostItem 
          remove={remove} 
          number={index} 
          post={post} 
          key={post.id}/>
        )})}
    </>
   );
}

export default PostList;
