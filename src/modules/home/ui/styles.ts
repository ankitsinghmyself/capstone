import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop: Constants.statusBarHeight,
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#dee3e9',
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: 'contain',
  },
  sectionList: {
    paddingHorizontal: 16,
  },
  searchBar: {
    marginTop: 15,
    backgroundColor: '#e4e4e4',
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingVertical: 10,
  },
  itemBody: {
    flex: 1,
  },
  itemHeader: {
    fontSize: 24,
    paddingVertical: 8,
    color: '#495e57',
    backgroundColor: '#fff',
    fontFamily: 'Karla-ExtraBold',
  },
  name: {
    fontSize: 20,
    color: '#000000',
    paddingBottom: 5,
    fontFamily: 'Karla-Bold',
  },
  description: {
    color: '#495e57',
    paddingRight: 5,
    fontFamily: 'Karla-Medium',
  },
  price: {
    fontSize: 20,
    color: '#EE9972',
    paddingTop: 5,
    fontFamily: 'Karla-Medium',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  avatar: {
    flex: 1,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avatarEmpty: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0b9a6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroSection: {
    backgroundColor: '#495e57',
    padding: 15,
  },
  heroHeader: {
    color: '#f4ce14',
    fontSize: 54,
    fontFamily: 'MarkaziText-Medium',
  },
  heroHeader2: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'MarkaziText-Medium',
  },
  heroText: {
    color: '#fff',
    fontFamily: 'Karla-Medium',
    fontSize: 14,
  },
  heroBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroContent: {
    flex: 1,
  },
  heroImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  delivery: {
    fontSize: 18,
    padding: 15,
    fontFamily: 'Karla-ExtraBold',
  },
});
