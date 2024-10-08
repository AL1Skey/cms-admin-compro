"use client";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMailConfig } from "@/hooks/use-mail";
import { Menu } from "lucide-react";
import React from "react";

const ToggleMailSidebar = () => {
  const isTablet = useMediaQuery("(min-width: 1024px)");
  const [mailConfig, setMailConfig] = useMailConfig();
  if (isTablet) return null;

  return (
    <Button
      size="icon"
      color="secondary"
      onClick={() =>
        setMailConfig({ ...mailConfig, isOpen: !mailConfig.isOpen })
      }
    >
      <Menu className=" h-5 w-5" />
    </Button>
  );
};

export default ToggleMailSidebar;
