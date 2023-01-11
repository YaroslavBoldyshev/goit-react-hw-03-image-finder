import { MagnifyingGlass } from "react-loader-spinner";
import styled from "styled-components";

export const Loader = () => {
  return (
    <LoaderImg>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </LoaderImg>
  );
};

const LoaderImg = styled.div`
  margin: 0 auto;
`;
