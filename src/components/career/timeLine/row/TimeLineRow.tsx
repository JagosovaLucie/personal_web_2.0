import TimelineItemCard from "./card/TimelineItemCard";
import type { JobPosition } from "../TimeLine";
import "./TimeLineRow.scss";

type Props = {
  onePosition: JobPosition;
  opened: boolean;
  onToggle: () => void;
};

const TimelineRow = ({ onePosition, opened, onToggle }: Props) => {
  return (
    <div className="timeline-row">
      {/* 1) levý sloupec – rok */}
      <div className="timeline-year-cell">
        <span className="timeline-year">{onePosition.year}</span>
      </div>

      {/* 2) prostřední sloupec – kulička */}
      <div className="timeline-axis-cell">
        <div className="timeline-dot" />
      </div>

      {/* 3) pravý sloupec – karta */}
      <div className="timeline-card-cell">
        <TimelineItemCard
          id={onePosition.id}
          job={onePosition.job}
          opened={opened}
          handleToggle={onToggle}
        />
      </div>
    </div>
  );
};

export default TimelineRow;
