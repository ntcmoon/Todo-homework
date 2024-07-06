import { useEffect } from "react";

export default function BannerItem(props) {
    useEffect(() =>{
        
    })
  return (
    <>
      <div style={{display : 'block', border: '1px solid black'}}>Banner {props.name}</div>
    </>
  );
}
