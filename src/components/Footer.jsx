import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2">
      <div className="flex items-center gap-4 justify-center">
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <p className="text-sm">Created By Zak</p>
    </footer>
  );
}

export default Footer;
