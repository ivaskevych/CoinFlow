import RNFS from 'react-native-fs'

// err.code === 'ENOENT' no file code

const filepath = RNFS.DocumentDirectoryPath + '/CoinFlowStore.json'

// Create copy of Redux store
/*
const storeJson = {
  settings: {
    locale: ['uk-UA']
  }
}

const CoinFlowStore = JSON.stringify(storeJson)
*/

// Return Promise with true/false value for fileExist
RNFS.exists(filepath)

// Delete file, throw if file not exist
/*
RNFS.unlink(filepath)
    .then(() => {
    console.log('FILE DELETED')
    })
    .catch((err) => {
    console.log(err.message, err.code)
    })
*/

// Read file by path
/*
RNFS.readFile(filepath, 'utf8')
    .then((contents) => {
    console.log('contents', contents)
    })
    .catch((err) => {
    console.log(err.message, err.code)
    })
*/

// Write file
/*
RNFS.writeFile(filepath, CoinFlowStore, 'utf8')
    .then((success) => {
    console.log('FILE WRITTEN!')
    })
    .catch((err) => {
    console.log(err.message)
    })
*/
