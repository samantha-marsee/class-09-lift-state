// source: https://react.dev/learn/sharing-state-between-components
export default function AccordionPanel({
  title,
  children,
  isExpanded
}) {

  return (
    <section className="panel">
      <button /* onClick={() => setIsExpanded(!isExpanded)}*/ >
        <h3>{title}</h3>
      </button>
      {isExpanded &&
        <div className="content">{children}</div>}
    </section>
  );
}
