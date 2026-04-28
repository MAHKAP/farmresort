import React from "react";
import { useParams, Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Behind the Scenes: How Our Restaurant Dish is Made",
    date: "Feb 5, 2025",
    author: "Admin",
    image: "/farmresort/blog/blog1.jpg",
    content:
      "Every great dish starts with quality ingredients. At our farm resort, we believe in using fresh, locally sourced produce, often grown right on our own farm. From handpicked vegetables to carefully selected spices, every ingredient is chosen to ensure authenticity and taste. Our cook follow traditional cooking methods that preserve the true essence of local flavors. Whether it’s a slow-cooked curry or a freshly prepared thali, we focus on techniques that enhance taste while keeping it natural and wholesome. The use of fresh coconut, aromatic spices, and time-tested recipes gives our dishes their unique and rich flavor."
  },
  {
    id: 2,
    title: "Top 10 Must-Try Dishes at P.K. Farm and Resort",
    date: "Jan 20, 2025",
    author: "Admin",
    image: "/farmresort/blog/seafood1.jpg",
    content: "Detailed blog content for mistakes to avoid..."
  },
  {
    id: 3,
    title: "The History of Goan Cuisine and Its Influence on Our Menu",
    date: "Dec 10, 2024",
    author: "Admin",
    image: "/farmresort/blog/rcc2.jpg",
    content: "Detailed blog content for sustainable construction..."
  }
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-red-600">Post not found</h2>
        <Link to="/blog" className="text-green-700 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-6">
          {post.date} • {post.author}
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">{post.content}</p>
        <Link
          to="/blog"
          className="inline-block bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </section>
  );
};

export default BlogDetail;
