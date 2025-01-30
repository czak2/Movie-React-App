import React from "react";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const location = useLocation();
  return <div>SearchPage {location.search}</div>;
}

export default SearchPage;
