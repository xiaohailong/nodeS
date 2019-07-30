const tabSwitch = {
  init:function(){
    this.initUI();
    this.navClick();
  },
  initUI:function(){
    this.tabWraper = document.querySelectorAll('.wraper');
    this.tab = document.querySelector('.nav-items');
  },
  navClick:function(){
    let self = this;
    this.tab.addEventListener('click',function(e){
      let event = e || window.event;
      let target = event.target || event.srcElement;
      if(target.classList.contains('nav-item')){
        self.showTab(target.getAttribute('data-nav'))
      }
    },false);
  },
  showTab:function(index){
     for(let item of this.tabWraper){
       item.style.display = 'none';
     }
     for(let key of this.tabWraper){
      if(key.getAttribute('data-nav') == index){
        key.style.display = 'block';
      }
    }
  }
}
module.exports = tabSwitch.init();
