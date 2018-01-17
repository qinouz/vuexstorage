const Export = {
  storageKeys: [],
  // 初始化方法
  init: function (store, storageKeys) {
    this.storageKeys = storageKeys
    this.restoreStorage(store)
    const self = this
    store.subscribe(function (mutation, state) {
      self.asycStorage(mutation, state)
    })
  },
  // 同步本地存储到状态
  restoreStorage (store) {
    let storage = window.localStorage.getItem('storeAsyc')
    if (storage) {
      storage = JSON.parse(storage)
      this.storageKeys.forEach(function (val) {
        if (storage[val]) {
          store.state[val] = storage[val]
        }
      })
    }
  },
  // 状态更新，改变本地存储
  asycStorage: function (mutation, state) {
    if (!this.storageKeys || this.storageKeys.length === 0) return
    let storeSave = {}
    this.storageKeys.forEach(function (val) {
      if (state[val]) {
        storeSave[val] = state[val]
      }
    })
    window.localStorage.setItem('storeAsyc', JSON.stringify(storeSave))
  }
}

export default Export
