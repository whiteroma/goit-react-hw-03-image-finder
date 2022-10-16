import { Bars } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => (
  <LoaderWrapper>
    <Bars
  height="80"
  width="80"
  color="#3f51b5"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  </LoaderWrapper>
);

export default Loader;
