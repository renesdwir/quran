import { Copy } from "lucide-react";
import WithTooltip from "../Tooltip";
import copy from "copy-to-clipboard";
import { useToast } from "../ui/use-toast";
interface CopyAyahProps {
  textArab: string;
  textIndo: string;
  noSurah: number;
  nameSurah: string;
  noAyah: number;
}

export default function CopyAyah({
  textArab,
  textIndo,
  noSurah,
  nameSurah,
  noAyah,
}: CopyAyahProps) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    let text = `Allah Subhanahu wa Ta'ala berfirman:

${textArab}

${textIndo}

${nameSurah} [${noSurah}]:${noAyah}
`;
    copy(text);
    toast({
      description: "Text berhasil disalin. Semoga bermanfaat",
    });
  };

  return (
    <>
      <WithTooltip text="Copy">
        <Copy onClick={copyToClipboard} strokeWidth={1.5} />
      </WithTooltip>
    </>
  );
}
