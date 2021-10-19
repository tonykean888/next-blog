import { Fragment } from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All cat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
