const colors = {
  THEME_RED: "#CD0034",
  THEME_BLACK: "#23201F",
  BLUE: "#007AFF",
  WHITE: "#FFFFFF",
  OFF_WHITE: "#F8F8F8"
}

const sharedStyles = {
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'sans-serif-medium',
  },
  buttonTextStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'sans-serif-medium',
    paddingTop: 5,
    paddingBottom: 5,
  }
}

export { sharedStyles, colors }
