import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: 'contain',
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: 18,
    marginTop: 14,
  },
  welcomeText: {
    fontSize: 40,
    paddingVertical: 60,
    fontFamily: 'MarkaziText-Medium',
    color: '#495E57',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Karla-ExtraBold',
    color: '#495E57',
  },
  inputBox: {
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    alignSelf: 'stretch',
    height: 50,
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 9,
    fontFamily: 'Karla-Medium',
    paddingLeft: 6,
  },
  btn: {
    backgroundColor: '#f4ce14',
    borderColor: '#f4ce14',
    borderRadius: 9,
    alignSelf: 'stretch',
    marginHorizontal: 18,
    marginBottom: 60,
    padding: 10,
    borderWidth: 1,
  },
  btnDisabled: {
    backgroundColor: '#f1f4f7',
  },
  halfBtn: {
    flex: 1,
    borderColor: '#f4ce14',
    backgroundColor: '#f4ce14',
    borderRadius: 9,
    alignSelf: 'stretch',
    marginRight: 18,
    padding: 10,
    borderWidth: 1,
  },
  btntext: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Karla-Bold',
    alignSelf: 'center',
  },
  heroSection: {
    flex: 1,
    maxHeight: '30%',
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
    flex: 1,
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
  btnDisabledContainer: {
    width: '92%',
    backgroundColor: 'gray',
    marginTop: 16,
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnEnabledContainer: {
    width: '92%',
    backgroundColor: 'green',
    marginTop: 16,
    borderRadius: 12,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
