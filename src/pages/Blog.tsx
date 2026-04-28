import React from "react";
import { Link } from "react-router-dom";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Behind the Scenes: How Our Signature Dish is Made",
    date: "Feb 5, 2025",
    author: "Admin",
    image: "/farmresort/blog/blog1.jpg",
    excerpt:
      "At P.K. Farm and Resort, every dish has a story—but one dish stands out as our true signature: Goan Fish Curry. Guests love it for its authentic flavor, and today, we’re taking you behind the scenes to show how it’s crafted with passion and care.",
    content:
      "Full blog content here..."
  },
  {
    id: 2,
    title: "Top 10 Must-Try Dishes at Spice by the Bay",
    date: "Jan 20, 2025",
    author: "Admin",
    image: "/farmresort/blog/seafood1.jpg",
    excerpt:
      "At P.K. Farm and Resort, every dish tells a story of flavor, tradition, and passion. Whether you’re a first-time guest or a loyal customer, these signature dishes are the heart of our menu and the ones we recommend you don’t miss!",
    content: "Full blog content here..."
  },
  {
    id: 3,
    title: "The History of Goan Cuisine and Its Influence on Our Menu",
    date: "Dec 10, 2024",
    author: "Admin",
    image: "/farmresort/blog/rcc2.jpg",
    excerpt:
      "Sustainability is key in construction today. Discover how RCC structures are evolving to meet eco-friendly standards.",
    content: "Full blog content here..."
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-yellow-700">Blog</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {post.date} • {post.author}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-green-700 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
