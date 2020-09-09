import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg height={100} viewBox="0 0 512 512" width={100} {...props}>
      <Path d="M494.5 208.5H482V158c0-11.855-9.645-21.5-21.5-21.5h-32c-2.265 0-4.448.357-6.5 1.01v-3.01c0-16.266-13.234-29.5-29.5-29.5h-40c-16.266 0-29.5 13.234-29.5 29.5v88.291H189V134.5c0-16.266-13.234-29.5-29.5-29.5h-40c-16.266 0-29.5 13.234-29.5 29.5v3.01a21.398 21.398 0 00-6.5-1.01h-32c-11.855 0-21.5 9.645-21.5 21.5v9.687a7.5 7.5 0 0015 0V158c0-3.584 2.916-6.5 6.5-6.5h32c3.584 0 6.5 2.916 6.5 6.5v196c0 3.584-2.916 6.5-6.5 6.5h-32A6.508 6.508 0 0145 354V199.779a7.5 7.5 0 00-15 0v8.721H17.5C7.851 208.5 0 216.351 0 226v60c0 9.649 7.851 17.5 17.5 17.5H30V354c0 11.855 9.645 21.5 21.5 21.5h32c2.265 0 4.448-.357 6.5-1.01v3.01c0 16.266 13.234 29.5 29.5 29.5h40c16.266 0 29.5-13.234 29.5-29.5v-88.291h10.916a7.5 7.5 0 000-15H189v-36.418h134v36.418h-90.572a7.5 7.5 0 000 15H323V377.5c0 16.266 13.234 29.5 29.5 29.5h40c16.266 0 29.5-13.234 29.5-29.5v-3.01a21.398 21.398 0 006.5 1.01h32c11.855 0 21.5-9.645 21.5-21.5v-10.128a7.5 7.5 0 00-15 0V354c0 3.584-2.916 6.5-6.5 6.5h-32a6.508 6.508 0 01-6.5-6.5V158c0-3.584 2.916-6.5 6.5-6.5h32c3.584 0 6.5 2.916 6.5 6.5v153.5a7.5 7.5 0 0015 0v-8h12.5c9.649 0 17.5-7.851 17.5-17.5v-60c0-9.649-7.851-17.5-17.5-17.5zm-477 80A2.503 2.503 0 0115 286v-60c0-1.378 1.122-2.5 2.5-2.5H30v65zm156.5 89c0 7.995-6.505 14.5-14.5 14.5h-40c-7.995 0-14.5-6.505-14.5-14.5v-243c0-7.995 6.505-14.5 14.5-14.5h40c7.995 0 14.5 6.505 14.5 14.5zm233 0c0 7.995-6.505 14.5-14.5 14.5h-40c-7.995 0-14.5-6.505-14.5-14.5v-243c0-7.995 6.505-14.5 14.5-14.5h40c7.995 0 14.5 6.505 14.5 14.5zm90-91.5c0 1.378-1.122 2.5-2.5 2.5H482v-65h12.5c1.378 0 2.5 1.122 2.5 2.5z" />
    </Svg>
  )
}

export default SvgComponent
