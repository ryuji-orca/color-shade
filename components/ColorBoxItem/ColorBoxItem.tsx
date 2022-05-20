import { FC } from "react";
import { useColorBoxItem } from "../../hooks/useColorBoxItem";
import { ColorBoxData } from "../../types/ColorBoxData";

type Props = {
  [K in keyof ColorBoxData]: ColorBoxData[K];
};

export const ColorBoxItem: FC<Props> = ({ title, tint, shade, index }) => {
  const { hex, TextBgColor, ChengeTextColor } = useColorBoxItem({
    tint,
    shade,
  });

  return (
    <div key={index}>
      {typeof hex === "string"
        ? hex && (
            <div className="text-sm text-center text-gray-300">
              {index === 0 ? 0 + "%" : index * 10 + "%"}
            </div>
          )
        : null}
      <div
        className="my-3 w-full h-16 cursor-pointer"
        style={
          typeof hex === "string"
            ? {
                backgroundColor: "#" + hex,
              }
            : undefined
        }
        onClick={(e) => {
          title == "Background Color" ? TextBgColor(e) : ChengeTextColor(e);
        }}
      >
        <span
          style={typeof hex === "string" ? { color: "#" + hex } : undefined}
        >
          {hex}
        </span>
      </div>
      <span className="text-sm text-center text-gray-300">{hex}</span>
    </div>
  );
};
