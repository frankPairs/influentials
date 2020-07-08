import styled from 'styled-components';

const CardStyled = styled.li`
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 16px 0, rgba(0, 0, 0, 0.08) 0 0 1px 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::last-child {
    margin-right: 0;
  }

  .picture-wrapper {
    height: 15rem;
  }

  .picture {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
  }

  .channels-wrapper,
  .content-wrapper {
    padding: 1.25em;
  }

  .content-wrapper {
    border: 1px solid rgba(0, 0, 0, 0.05);
    align-items: flex-start;
    display: flex;
    flex: 1;
  }

  .info-wrapper {
    box-sizing: border-box;
    flex: 1;
    padding-right: 1.25rem;
  }

  .title {
    font-size: 1em;
    color: ${({ theme: { colors } }) => colors.black};
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .reward {
    font-size: 0.75em;
    color: ${({ theme: { colors } }) => colors.gray1};
  }

  .brand-logo-wrapper {
    height: 2.5rem;
    width: 2.5rem;
  }

  .brand-logo {
    width: 100%;
    height: auto;
    border-radius: 500%;
    box-sizing: border-box;
  }

  .channels-wrapper {
    display: flex;
    align-items: center;
  }

  .channel-item {
    margin-right: 1.25rem;

    &::last-child {
      margin-right: 0;
    }
  }
`;

export { CardStyled };
