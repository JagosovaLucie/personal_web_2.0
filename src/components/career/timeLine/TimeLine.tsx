import { useState } from "react";
import TimelineRow from "./row/TimeLineRow";
import "./TimeLine.scss";

export type JobPosition = {
  id: string;
  year: number;
  job: boolean;
};

const TIMELINE_POSITIONS: JobPosition[] = [
  { id: "job3", year: 2026, job: false },
  { id: "job2", year: 2025, job: true },
  { id: "job1", year: 2023, job: true },
];

const TimeLine = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="timeline">
      {TIMELINE_POSITIONS.map((onePosition) => (
        <TimelineRow
          key={onePosition.id}
          onePosition={onePosition}
          opened={onePosition.id === openId}
          onToggle={() => handleToggle(onePosition.id)}
        />
      ))}
    </section>
  );
};

export default TimeLine;
