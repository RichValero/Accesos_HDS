import React, { useEffect, useRef, useState } from "react";

const AnimatedRow = ({ children, isExpanded }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(isExpanded ? contentHeight : 0);
    }
  }, [isExpanded, children]);
  return (
    <tr>
      <td
        colSpan="4"
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div ref={contentRef}>{children}</div>
      </td>
    </tr>
  );
};

export default AnimatedRow;
