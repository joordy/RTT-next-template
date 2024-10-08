import React, { Suspense } from "react";

import type { LucideProps } from "lucide-react";
import { icons } from "lucide-react";

import { cn } from "@/lib/utils";

const fallback = <div style={{ background: "#ddd", width: 24, height: 24 }} />;

export const CustomIcons = {};

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons | keyof typeof CustomIcons;
}

const Icons = ({ name, className, ...props }: IconProps) => {
  const Icon =
    name in CustomIcons
      ? CustomIcons[name as keyof typeof CustomIcons]
      : icons[name as keyof typeof icons];

  return (
    Icon && (
      <Suspense fallback={fallback}>
        <Icon className={cn(className)} {...props} />
      </Suspense>
    )
  );
};

export default Icons;
