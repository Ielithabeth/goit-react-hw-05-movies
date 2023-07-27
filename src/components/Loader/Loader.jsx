import { Rings } from  'react-loader-spinner'
import { Wrapper } from './Loader.styled';

const Loader = () => {
    return (
        <Wrapper>
            <Rings
              height="200"
              width="200"

              color="#ff007b"
              radius="6"

              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
        </Wrapper>
    )
}

export default Loader;