import React from "react";
import LoadingOverlay from "react-loading-overlay";
import ClipLoader from "react-spinners/ClipLoader";

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, message, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    }
    return (
      <>
        <LoadingOverlay
          active={isLoading}
          spinner={<ClipLoader />}
          text={message}
        />
      </>
    );
  };
}
export default WithLoading;
