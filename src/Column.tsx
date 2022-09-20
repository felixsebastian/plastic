const roundDown = (n: number, precision: number) => {
  const coeff = 10 ** precision;
  return Math.floor(n * coeff) / coeff;
};

const formatPercentage = (n: number) => n * 100 + "%";

const Column = ({ width = "0%", grow = 1, ...props }: any) => {
  if (typeof width === "number") width = formatPercentage(roundDown(width, 5));

  return (
    <div
      css={{
        flexGrow: grow ? 1 : 0,
        flexShrink: 0,
        flexBasis: width,
      }}
    >
      {props.children}
    </div>
  );
};

export default Column;
