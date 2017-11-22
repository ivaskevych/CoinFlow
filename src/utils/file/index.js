import RNFS from 'react-native-fs'

const filepath = RNFS.DocumentDirectoryPath + '/CoinFlowStore.json'

// Create copy of Redux store
const storeJson = {
  settings: {
    locale: ['uk-UA']
  }
}
const CoinFlowStore = JSON.stringify(storeJson)

const exist = (path = filepath) =>
  RNFS.exists(path)

const del = (path = filepath) =>
  RNFS.unlink(path)
    .then(() => {
      console.log('FILE DELETED')
      return true
    })
    .catch((err) => {
      console.log(err.message, err.code)
      return err
    })

const read = (path = filepath) =>
  RNFS.readFile(path, 'utf8')
    .then((contents) => contents)
    .catch((err) => {
      console.log(err.message, err.code)
      return err
    })

const write = (path = filepath, content = CoinFlowStore) =>
  RNFS.writeFile(path, content, 'utf8')
    .then(() => {
      console.log('FILE WRITTEN!')
      return true
    })
    .catch((err) => {
      console.log(err.message)
      return false
    })

export default {
  exist,
  del,
  read,
  write
}
