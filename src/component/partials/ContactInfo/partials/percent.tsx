export const Percent = ({percent}:{percent:string}) => {
  return (
    <span className="percent">
      <div className={percent}></div>
    </span>
  );
};
