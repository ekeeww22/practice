var UI_GUIDE = UI_GUIDE || {}; 

UI_GUIDE.GNB = {
    init : function(){
        this.reset();
        this.setButton();
    },
    reset : function(){
        var _ulDom = document.querySelector('.guide-gnb')
        var _liObj = _ulDom.children;
        console.log(_ulDom)
        console.log(_liObj)

        for (var i=0; i<_liObj.length; i++) {
            console.log(_liObj[i])
            _liObj[i].querySelector('button').classList.remove('on')
        }
    },
    setButton: function(){
        var _self = this;
        var gnbDom = document.getElementsByClassName('guide-gnb')[0];
        var iframeDom = document.getElementById('router');

        gnbDom.addEventListener('click',function(e){
            var _id = e.target.closest('li').getAttribute('id');
            _self.reset();

            if ( _id === 'component' ){
                console.log(e.target)
                e.target.classList.add('on')
                iframeDom.setAttribute('src','./component/component.html')
            } else if ( _id === 'template' ){
                e.target.classList.add('on')
                iframeDom.setAttribute('src','./template/template.html')
            } else if ( _id === 'page' ){
                e.target.classList.add('on')
                iframeDom.setAttribute('src','./pages/pageList.html')
            }
        })
    }
}