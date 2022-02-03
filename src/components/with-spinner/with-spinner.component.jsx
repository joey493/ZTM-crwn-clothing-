import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner =
    (WrappedComponent) =>
    ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer></SpinnerContainer>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };

export default withSpinner;
