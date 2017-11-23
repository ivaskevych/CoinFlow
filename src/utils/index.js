import * as R from 'ramda'

// similar to JSON.stringify, but preserves properties order
export const stringify = R.compose(
  JSON.stringify,
  R.fromPairs,
  R.sort((a, b) => a[0].localeCompare(b[0])),
  R.toPairs
)
