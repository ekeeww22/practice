var UI_GUIDE = UI_GUIDE || {}; 

var gnbDom = document.querySelector('.guide-gnb');

UI_GUIDE.GNB = {
    init : function(){
        this.setButton();
    },
    reset : function(){
        console.log('reset:')
    },
    setButton: function(){
        var _self = this;
        console.log('setButton:')
        var gnbDom = document.getElementsByClassName('guide-gnb')[0];
        var gnbLi = gnbDom.children;
        var gnbBtn = gnbLi.children;

        console.log('gnbLi:');
        console.log(gnbLi);
        console.log(gnbLi.length);
        console.log(gnbLi[0]);
        console.log(typeof gnbLi);


        for (var i=0; i < gnbLi.length; i++) {
            if ( gnbLi[i].getAttribute('id') === 'component' ){
                console.log('component');
            } else if ( gnbLi[i].getAttribute('id') === 'template' ){
                console.log('component');
            } else if ( gnbLi[i].getAttribute('id') === 'template' ){
                console.log('component');
            }
        }
        

        gnbDom.addEventListener('click',function(e){
            console.log('e:')
            console.log(e)
        })

    }
    
}