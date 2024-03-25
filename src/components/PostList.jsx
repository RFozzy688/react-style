import PostItem from "./PostItem";

function PostList({posts, title, remove}) {
  if (!posts.length){
    return (
      <h1 style={{textAlign: "center"}}>
        Посты не найдены
      </h1>
    )
  }
  return ( 
    <>
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => <PostItem 
          remove={remove} 
          number={index} 
          post={post} 
          key={post.id}/>
        )}
    </>
   );
}

export default PostList;
