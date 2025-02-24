// source: https://react.dev/learn/sharing-state-between-components
import { useState } from 'react';

export default function AccordionPanel({
  title,
  children
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="panel">
      <button onClick={() => setIsExpanded(!isExpanded)}>
        <h3>{title}</h3>
      </button>
      {isExpanded &&
        <div className="content">{children}</div>}
    </section>
  );
}
