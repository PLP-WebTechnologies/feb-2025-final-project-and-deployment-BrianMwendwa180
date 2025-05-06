import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();

  const renderContent = () => {
    switch (category) {
      case "technology":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Latest in Technology</h2>
            <img
              src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Technology"
              className="w-full h-auto rounded-md mb-4"
              loading="lazy"
            />
            <p className="mb-4">
              Discover the emerging trends and technologies that will shape the web development landscape in the coming years.
            </p>
          </>
        );
      case "design":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Design Inspirations</h2>
            <img
              src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Design"
              className="w-full h-auto rounded-md mb-4"
              loading="lazy"
            />
            <p className="mb-4">
              Explore creative design patterns and principles that enhance user experience and visual appeal.
            </p>
          </>
        );
      case "development":
        return (
          <>
            <h2 className="text-2xl font-semibold mb-2">Development Insights</h2>
            <img
              src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Development"
              className="w-full h-auto rounded-md mb-4"
              loading="lazy"
            />
            <p className="mb-4">
              Dive into best practices, tools, and techniques for efficient and scalable software development.
            </p>
          </>
        );
      default:
        return <p>Category not found.</p>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">{category}</h1>
      {renderContent()}
    </div>
  );
};

export default CategoryPage;
