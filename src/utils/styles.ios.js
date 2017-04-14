const colors = {
  THEME_RED: "#CD0034",
  THEME_BLACK: "#23201F",
  THEME_GRAY: '#343434',
  LIGHT_GRAY: '#CDCDCD',
  BLUE: "#007AFF",
  WHITE: "#FFFFFF",
  OFF_WHITE: "#F8F8F8"
}

const sharedStyles = {
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Arial Rounded MT Bold',
  },
  smallFontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'ArialMT',
    color: colors.THEME_GRAY,
    fontSize: 12
  },
  buttonTextStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Arial Rounded MT Bold',
    paddingTop: 5,
    paddingBottom: 5,
  }
}

export { sharedStyles, colors }
