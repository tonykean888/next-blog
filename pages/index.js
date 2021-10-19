import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const DUMMY_DATA = [
  {
    title: "Cat title 1",
    image: "picture1.jpeg",
    excerpt: "the is detail for cat feature blog Dummy data for develop",
    date: "2022-02-10",
    slug: "cat-title-1",
  },
  {
    title: "Cat title 2",
    image: "picture2.jpeg",
    excerpt: "the is detail for cat feature blog Dummy data for develop",
    date: "2022-03-31",
    slug: "cat-title-2",
  },
  {
    title: "Cat title 3",
    image: "picture3.jpeg",
    excerpt: "the is detail for cat feature blog Dummy data for develop",
    date: "2022-04-01",
    slug: "cat-title-3",
  },
  {
    title: "Cat title 4",
    image: "picture4.jpeg",
    excerpt: "the is detail for cat feature blog Dummy data for develop",
    date: "2022-05-20",
    slug: "cat-title-4",
  },
  {
    title: "Cat title 5",
    image: "picture5.jpeg",
    excerpt: "the is detail for cat feature blog Dummy data for develop",
    date: "2022-03-31",
    slug: "cat-title-5",
  },
  {
    title: "Cat title 6",
    image: "picture6.jpeg",
    excerpt: "the is detail for cat feature blog Dummy data for develop",
    date: "2022-06-01",
    slug: "cat-title-6",
  },
];
export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Cat's blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
