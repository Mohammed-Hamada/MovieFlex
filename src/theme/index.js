const colors = {
  main: '#242A32',
  mainText: '#FFFFFF',
  secondText: '#92929D',
  mainRating: '#FF8700',
  userRating: '#0296E5',
  activeTab: '#0296E5',
  nonActiveTab: '#67686D',
  detailsText: '#EEEEEE',
  searchBarBackground: '#3A3F47',
};

const sizes = {
  mainMargin: 10,
  mainMarginHorizontal: 15,
  mainMarginVertical: 10,
  mainRadius: 16,
  mainMarginTop: 50,
  cardsMarginTop: 20,
  tabsMarginLeft: 10,
  fonts: {
    titles: 18,
    subTitles: 16,
    tabs: 14,
    details: 12,
  },
};

const MyTheme = {
  dark: false,
  colors: {
    primary: colors.mainText,
    background: colors.main,
    card: colors.main,
    text: colors.mainText,
    border: colors.main,
  },
};

export { colors, sizes, MyTheme };
