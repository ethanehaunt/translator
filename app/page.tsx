"use client";
import "@/styles/global.css";
import { Tooltip } from "react-tooltip";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import "react-tooltip/dist/react-tooltip.css";
import "material-icons/iconfont/material-icons.css";
import { translationOptions } from "@/constants/common";

export default function Home() {
  const router = useRouter();

  const navigateTranslator = (trans: any) => {
    trans?.path && router.push(trans.path);
  };

  return (
    <div>
      <Header headerText="Language Translation App" />
      <div className="translation-picker">
        {translationOptions.map((trans: any) => (
          <div
            key={trans.label}
            onClick={() => navigateTranslator(trans)}
            className="translation-picker-item"
          >
            {trans.label}
          </div>
        ))}
      </div>
      <Tooltip id="tooltip" />
    </div>
  );
}
