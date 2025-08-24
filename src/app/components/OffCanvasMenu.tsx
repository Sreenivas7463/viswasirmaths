"use client";

export default function OffCanvasMenu({ isOpen, onClose, onLinkClick }: { isOpen: boolean; onClose: () => void; onLinkClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6 transform transition-transform duration-300 ease-in-out">
        <nav className="flex flex-col space-y-6 mt-12">
          <a href="#hero" onClick={(e) => { onLinkClick(e); onClose(); }} className="text-lg text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">Home</a>
          <a href="#about" onClick={(e) => { onLinkClick(e); onClose(); }} className="text-lg text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">About</a>
          <a href="#courses" onClick={(e) => { onLinkClick(e); onClose(); }} className="text-lg text-gray-900 dark:text-gray-100 hover:text-primary-500 transition">Courses</a>
        </nav>
      </div>
    </div>
  );
}