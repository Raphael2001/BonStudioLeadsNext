import React from "react";

type Props = {
  route?: string;
};

function MetaTagsData({ route = "" }: Props) {
  return (
    <>
      <link
        rel="canonical"
        href={`https://studio.boncafe.co.il/${route}`}
        key="canonical"
      />
    </>
  );
}

export default MetaTagsData;
