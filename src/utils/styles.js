const colors = {
  THEME_RED: "#CD0034",
  THEME_BLACK: "#23201F",
  BLUE: "#007AFF",
  WHITE: "#FFFFFF"
}

const sharedStyles = {
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Arial Rounded MT Bold',
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
