import styled from 'styled-components';

const ChannelStyled = styled.div`
  display: flex;
  align-items: center;

  .logo-img {
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 0.625rem;
  }

  .text {
    color: ${({ theme: { colors } }) => colors.black};
    font-size: 0.75em;
  }
`;

export { ChannelStyled };
