import React, { useEffect } from "react";


export const GoogleAd = ({
}) => {
  useEffect(() => {
    try {
        window.onload = function() {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    } catch (e) {
      if (process.env.NODE_ENV !== "production") {
        console.error("AdvertiseError", e);
      }
    }
  }, []);
  //production이 아닌 경우 대체 컴포넌트 표시
  if (process.env.NODE_ENV !== "production")
    return (
      <div
        style={{
          background: "#e9e9e9",
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "16px"
        }}
      >
        광고 표시 영역
      </div>
    );
  //production인 경우 구글 광고 표시
  return (
    <ins class="adsbygoogle"
     style={{display: "block"}}
     data-ad-client="ca-pub-5574929848052748"
     data-ad-slot="6277759154"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
};
