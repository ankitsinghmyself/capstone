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
    backgroundColor: '#dee3e9',
  },
  logo: {
    height: 50,
    width: 150,
    resizeMode: 'contain',
  },
  viewScroll: {
    flex: 1,
    padding: 10,
  },
  headertext: {
    fontSize: 22,
    paddingBottom: 10,
    fontFamily: 'Karla-ExtraBold',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Karla-Medium',
  },
  inputBox: {
    alignSelf: 'stretch',
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 9,
    borderColor: '#dfdfe5',
  },
  btn: {
    backgroundColor: '#f4ce14',
    borderRadius: 9,
    alignSelf: 'stretch',
    marginVertical: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cc9a22',
  },
  btnDisabled: {
    backgroundColor: '#98b3aa',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: '#495e57',
    borderRadius: 9,
    alignSelf: 'stretch',
    padding: 10,
    borderWidth: 1,
    borderColor: '#3f554d',
  },
  saveBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontFamily: 'Karla-Bold',
  },
  discardBtn: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    alignSelf: 'stretch',
    marginRight: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#83918c',
  },
  discardBtnText: {
    fontSize: 18,
    color: '#3e524b',
    alignSelf: 'center',
    fontFamily: 'Karla-Bold',
  },
  btntext: {
    fontSize: 22,
    color: '#3e524b',
    fontFamily: 'Karla-Bold',
    alignSelf: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  error: {
    color: '#d14747',
    fontWeight: 'bold',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarEmpty: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#0b9a6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmptyText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  avatarButtons: {
    flexDirection: 'row',
  },
  changeBtn: {
    backgroundColor: '#495e57',
    borderRadius: 9,
    marginHorizontal: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#3f554d',
  },
  removeBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    padding: 10,
    borderWidth: 1,
    borderColor: '#83918c',
  },
});
