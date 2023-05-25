import { useState, useEffect, useRef } from "react";

const HookPlayGround = () => {
  const [dropdown, setDropDown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [dropdown]);

  return (
    <li ref={ref}>
      <button onClick={() => setDropDown((prev) => !prev)}>
        Services <span>&#8595;</span>
      </button>
      {dropdown && (
        <ul>
          <li>Design</li>
          <li>Development</li>
        </ul>
      )}
      <img src="https://picsum.photos/200" alt="" />
    </li>
  );
};

export default HookPlayGround;
