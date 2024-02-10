"use client";
import { PlayCircle, PauseCircle } from "lucide-react";
import WithTooltip from "./Tooltip";

export default function AudioPlayer({
  play,
  handleAudio,
  id,
}: {
  play: boolean;
  id: number;
  handleAudio: (id: number) => void;
}) {
  return (
    <>
      {play ? (
        <WithTooltip text="Pause Audio">
          <PauseCircle strokeWidth={1.5} onClick={() => handleAudio(id - 1)} />
        </WithTooltip>
      ) : (
        <WithTooltip text="Play Audio">
          <PlayCircle strokeWidth={1.5} onClick={() => handleAudio(id - 1)} />
        </WithTooltip>
      )}
    </>
  );
}
