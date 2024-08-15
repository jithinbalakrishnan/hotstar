import {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";


const WarningLayout = () => {
  const [show, setShow] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const [showLayout, setShowLayout] = useState(false);
  const [showWarningLayout, setShowWarningLayout] = useState(false);

  const [test, setTest] = useState(false);

  const buttonRef = useRef();

  useEffect(() => {
    console.log('useEffect')
    setShowWarning(!showWarning);
  }, [show]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    setShowWarningLayout(!showWarningLayout);
  }, [showLayout]);

//   useEffect(()=> {
//     console.log('use effect test button click')
//   },[test])
  useLayoutEffect(()=> {
    console.log('use Layout test button click')
  },[test])

  const handleClick = () => {
    setShow(!show);
  };
  const handleClickLayout = ()=> {
    setShowLayout(prevState => !prevState)
  }
  const handleTestClick = () => {
    setTest(!test)
  }
  return (
    <>
    {console.log('render')}
      <div style={{height: '100px'}}>
        <button onClick={handleClick}>
          UseEffect Click
        </button>
        {show && <p>Button Clicked</p>}
        {showWarning && <p>Warning message</p>}
      </div>
      <div>
        <button onClick={handleClickLayout}>
          UseLayout Click
        </button>
        {showLayout && <p>Button Clicked</p>}
        {showWarningLayout && <p>Warning message</p>}
      </div>
      <div>
        <button onClick={handleTestClick}>Test Click</button>
      </div>
    </>
  );
};

export default WarningLayout;


