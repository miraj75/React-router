

const Blog = () => {
  const posts = [
    { title: 'First Blog Post', date: 'October 10, 2024', excerpt: 'This is the first blog post...' },
    { title: 'Second Blog Post', date: 'October 15, 2024', excerpt: 'This is the second blog post...' },
    { title: 'Third Blog Post', date: 'October 20, 2024', excerpt: 'This is the third blog post...' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Blog</h1>
      <div className="max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
