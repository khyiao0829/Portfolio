function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 text-sm py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <p>© {new Date().getFullYear()} Hayeong Kim. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;  