import { RotatingLines } from 'react-loader-spinner';

export const Spiner = () => {
  return (
    // <Oval
    //   height={100}
    //   width={100}
    //   color="#0069d9"
    //   wrapperStyle={{}}
    //   wrapperClass=""
    //   visible={true}
    //   ariaLabel="oval-loading"
    //   secondaryColor="#007bff"
    //   strokeWidth={2}
    //   strokeWidthSecondary={2}
    // />
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
  );
};
