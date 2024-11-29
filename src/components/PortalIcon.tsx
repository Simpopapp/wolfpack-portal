import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortalIconProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  onClick?: () => void;
}

const PortalIcon = ({ icon: Icon, label, className, onClick }: PortalIconProps) => {
  return (
    <div className="group relative" onClick={onClick}>
      <div className={cn("portal-icon-container", className)}>
        <Icon className="w-8 h-8 text-forest-accent group-hover:text-forest-light transition-colors" />
      </div>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-forest-light opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </div>
  );
};

export default PortalIcon;