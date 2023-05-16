import { useState, useEffect, useRef } from "react";

const HookPlayGround = () => {
  const [dropdown, setDropDown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if(dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false)
      }
    }
    document.addEventListener("mousedown", handler);
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
    </li>
  );
}
 
export default HookPlayGround;