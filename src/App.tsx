import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import GiftCard from "./pages/GiftCard";
import SpecialDeal from "./pages/SpecialDeal";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedPostSlug]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    if (page !== "blog-post") {
      setSelectedPostSlug(null);
    }
  };

  const handleBlogPostClick = (slug: string) => {
    setSelectedPostSlug(slug);
    setCurrentPage("blog-post");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onPageChange={handlePageChange} />;
      case "menu":
        return <Menu />;
      case "blog":
        return <Blog onPostClick={handleBlogPostClick} />;
      case "blog-post":
        return selectedPostSlug ? (
          <BlogPost slug={selectedPostSlug} onBack={() => handlePageChange("blog")} />
        ) : (
          <Blog onPostClick={handleBlogPostClick} />
        );
      case "gift-card":
        return <GiftCard />;
      case "special-deal":
        return <SpecialDeal />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      {/* Page transition: opacity only — `transform` (e.g. y) on a parent breaks `position: sticky` (menu category bar). */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + (selectedPostSlug || "")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onPageChange={handlePageChange} />
    </div>
  );
}
