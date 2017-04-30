const colors = {
  THEME_RED: '#CD0034',
  THEME_RED_LIGHT: '#D15776',
  THEME_BLACK: '#23201F',
  BLACK_RED: '#870D2B',
  DARK_GREY: '#343434',
  LIGHT_GREY: '#CDCDCD',
  WHITE: '#FFFFFF',
  OFF_WHITE: '#F8F8F8'
}

const sharedStyles = {
  fontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Arial Rounded MT Bold',
  },
  simpleFontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'ArialMT',
  },
  smallFontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'ArialMT',
    color: colors.DARK_GREY,
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
  },
  bodyStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    marginTop: 0
  },
  tabBarIconStyle: {
    width: 25,
    height: 25,
  }
}

export { sharedStyles, colors }
