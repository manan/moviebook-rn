import { HEADER_HEIGHT } from './constants'; // eslint-disable-line

const colors = {
  THEME_RED: '#CD0034',
  THEME_RED_LIGHT: '#D15776',
  THEME_BLACK: '#23201F',
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
    fontFamily: 'sans-serif-medium',
  },
  simpleFontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'sans-serif-small',
  },
  smallFontStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
    color: colors.DARK_GREY,
    fontSize: 12
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
  },
  bodyStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    marginTop: 0
  }
}

export { sharedStyles, colors }
