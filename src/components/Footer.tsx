const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} SurvivalLingua. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;