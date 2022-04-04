import styled from "styled-components";

function ArrowAnimation() {
  return (
    <ArrowAnim>
      <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1">
        <g>
          <polygon
            class="arrow"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
          ></polygon>
          <polygon
            class="arrow-fixed"
            points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"
          ></polygon>
          <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
        </g>
      </svg>
    </ArrowAnim>
  );
}

export default ArrowAnimation;

const ArrowAnim = styled.div`
  width: 50px;
  transform: rotate(90deg);
  margin: auto;

  svg {
    width: 50px;
    height: auto;
    margin: 0 1rem;
    cursor: pointer;
    overflow: visible;
    fill: #ffffff;
    polygon,
    path {
      transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
    }
    &:hover polygon,
    &:hover path {
      transition: all 1s cubic-bezier(0.2, 1, 0.3, 1);
      fill: #a7a5a5;
    }

    &:hover .arrow {
      animation: arrow-anim 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
    }
    &:hover .arrow-fixed {
      animation: arrow-fixed-anim 2.5s cubic-bezier(0.2, 1, 0.3, 1) infinite;
    }
  }

  @keyframes arrow-anim {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    5% {
      transform: translateX(-0.1rem);
    }
    100% {
      transform: translateX(1rem);
      opacity: 0;
    }
  }

  @keyframes arrow-fixed-anim {
    5% {
      opacity: 0;
    }
    20% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
