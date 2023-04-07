import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

export const Skeleton = (
  props: JSX.IntrinsicAttributes & IContentLoaderProps
) => (
  <ContentLoader
    speed={2}
    width={354}
    height={161}
    viewBox="0 0 354 161"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="58" y="111" rx="3" ry="3" width="88" height="6" />
    <rect x="55" y="181" rx="3" ry="3" width="52" height="6" />
    <rect x="-46" y="108" rx="3" ry="3" width="225" height="11" />
    <rect x="22" y="135" rx="3" ry="3" width="113" height="8" />
    <rect x="-3" y="124" rx="3" ry="3" width="178" height="6" />
    <rect x="31" y="3" rx="0" ry="0" width="80" height="96" />
    <rect x="24" y="20" rx="0" ry="0" width="2" height="0" />
    <rect x="28" y="17" rx="0" ry="0" width="0" height="2" />
  </ContentLoader>
);

export default Skeleton;
