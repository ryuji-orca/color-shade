import { FC } from "react";

type Props = {
  [K in "bgCopyBlockItem" | "textCopyBlockItem"]: JSX.Element;
};

export const CopyBlockList: FC<Props> = ({
  bgCopyBlockItem,
  textCopyBlockItem,
}) => {
  return (
    <div className="flex gap-4">
      <>{bgCopyBlockItem}</>
      <>{textCopyBlockItem}</>
    </div>
  );
};
