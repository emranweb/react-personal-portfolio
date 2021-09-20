import React from "react";
import BlogWrapper from "./blog.style";

const BlogData = [
  {
    id: 1,
    title: "What is the Difference between Web and Brand Design be",
    details:
      "As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. We encounter professionals with careers to covet and lives to write books about. As Vintage decided to have a closer look into fast-paced New York web design realm in person, we get to acquaint with most diverse and exceptionally captivating personalities. We encounter professionals with careers to covet and lives to write books about. We thought a book is quite a wait away and decided to share some of the notes from his New York business meetings meanwhile.",
    gallery: [
      {
        source: "http://placehold.it/300x300",
      },
    ],
    readmore: "Read More",
    tags: [],
    Category: [{}],
  },
];

const Blog = () => {
  return (
    <BlogWrapper>
      <img
        className="img-fluid rounded"
        src="http://placehold.it/500x400"
        alt="blog"
      />
      <h4>What is the Difference between Web and Brand Design be.</h4>
      <a href="">Read More</a>
    </BlogWrapper>
  );
};
export default Blog;
