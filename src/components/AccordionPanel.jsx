// source: https://react.dev/learn/sharing-state-between-components
export default function AccordionPanel({
  title,
  children
}) {

  return (
    <section className="panel">
      <button onClick={() => setExpandedPanel(!expandedPanel)}>
        <h3>{title}</h3>
      </button>
      {expandedPanel &&
        <div className="content">{children}</div>}
    </section>
  );
}
