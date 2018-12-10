class Storage {
  static set (key, value) {
    return localStorage.setItem(key, value)
  }

  static get(key){
    return localStorage.getItem(key)
  }
}

export default Storage
