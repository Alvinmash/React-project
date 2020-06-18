const reformatName = (pokemonName) => {
  const hyphenInsteadOfSpace = (pokemonName.includes(' '))
    ? pokemonName.replace(' ', '-')
    : pokemonName

  const hyphenInsteadOfSpaceAndNoPeriod = hyphenInsteadOfSpace.includes('.')
    ? hyphenInsteadOfSpace.replace('.', '')
    : hyphenInsteadOfSpace

  const replaceFemaleSymbolWithWord = (hyphenInsteadOfSpaceAndNoPeriod.includes('♀'))
    ? hyphenInsteadOfSpaceAndNoPeriod.replace('♀', '-female')
    : hyphenInsteadOfSpaceAndNoPeriod

  const replaceMaleSymbolWithWord = (replaceFemaleSymbolWithWord.includes('♂'))
    ? replaceFemaleSymbolWithWord.replace('♂', '-male')
    : replaceFemaleSymbolWithWord

  const formattedName = (replaceMaleSymbolWithWord.includes('\''))
    ? replaceMaleSymbolWithWord.replace('\'', '')
    : replaceMaleSymbolWithWord

  return formattedName
}

const returnImagePathString = (genNumber, pokemonName) => {
  const name = reformatName(pokemonName)

  const filePathString = `images/gen${genNumber}/${name}.png`

  return filePathString
}

export default returnImagePathString
