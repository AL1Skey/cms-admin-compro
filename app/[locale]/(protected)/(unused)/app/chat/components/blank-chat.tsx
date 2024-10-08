"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useChatConfig } from "@/hooks/use-chat";
import { useTranslations } from "next-intl";
const Blank = () => {
    const isLg = useMediaQuery("(max-width: 1024px)");
    const [chatConfig, setChatConfig] = useChatConfig()
    const t = useTranslations("ChatApp");
    return (
        <Card className="flex-1 h-full">
            <CardContent className="h-full flex justify-center items-center">
                <div className="text-center flex flex-col items-center">
                    <Icon icon="uiw:message" className="text-7xl text-default-300" />
                    <div className="mt-4 text-lg font-medium text-default-500">
                        {t("blankMessageTitle")}
                    </div>
                    <p className="mt-1 text-sm font-medium text-default-400">
                        {t("blankMessageDesc")}
                    </p>
                    {isLg && (
                        <Button className="mt-2" onClick={() => setChatConfig({ ...chatConfig, isOpen: true })}>
                            Start Conversation
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default Blank;
