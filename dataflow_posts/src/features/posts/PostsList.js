import { useSelector, useDispatch } from "react-redux";
import { selectPostIds, getPostsError, fetchPosts, getPostStatus } from "./postsSlice";
import React, { useEffect } from 'react';
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const postStatus = useSelector(getPostStatus);
  const postError = useSelector(getPostsError);
  const orderedPostIds = useSelector(selectPostIds)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postStatus === 'succeeded') {
      content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
  } else if (postStatus === 'failed') {
    content = <p>{postError}</p>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostsList;
