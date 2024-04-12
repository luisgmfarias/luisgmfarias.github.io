interface IGradientSVG {
  firstColor: string
  secondColor: string
}

export const GradientSVG = ({ firstColor, secondColor }: IGradientSVG) => {
  return (
    <svg id="support" width="0" height="0">
      <linearGradient id="gold-yellow" x1="50%" y1="50%" x2="100%" y2="50%">
        <stop stopColor={firstColor} offset="0%" />
        <stop stopColor={secondColor} offset="100%" />
      </linearGradient>
    </svg>
  )
}
