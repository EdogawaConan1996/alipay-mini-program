App({
  // 定义常量
  name: "imooc",
  age: 18,
  isBoy: true,
  // 定义对象
  course: {
    lesson: "小程序",
    teacherName: "Dyna",
  },
  // 定义自定义方法
  cartItem(itemId,counts,isSelected) {
    var cartItem = new Object();
    cartItem.id = itemId
    cartItem.counts = counts
    cartItem.isSelected = isSelected
    return cartItem;
  },

  findCartItemById(cartItemArray, itemId) {
    for (let i = 0; i < cartItemArray.length; i++) {
      if (cartItemArray[i].id === itemId) {
        return cartItemArray[i]
      }
    }
    return null
  },

  onLaunch(options) {
    // 小程序启动
    console.info('App onLaunch');
  },
  onShow(options) {
    // 小程序显示
    console.log('App Onshow')
  },
  onHide() {
    // 小程序隐藏
    console.log('App OnHide')
  },
  onError() {
    // 小程序发生错误
    console.log('App OnError')
  } 
});
