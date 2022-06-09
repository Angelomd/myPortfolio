
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}
 
 
 
 
 
 let themeDots = document.getElementsByClassName('theme-dot')

 for(var i=0; themeDots.length>i; i++){
     themeDots[i].addEventListener('click', function(){
         let mode = this.dataset.mode
         console.log('option clicked:', mode)
         setTheme(mode)
     })
 }

 function setTheme(mode){
     if(mode == 'light'){
         document.getElementById('theme-style').href = './css/admin.css'
     }

     if(mode == 'blue'){
        document.getElementById('theme-style').href = './css/bluetheme.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = './css/greentheme.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = './css/purpletheme.css'
    }
    if(mode == 'favblue'){
        document.getElementById('theme-style').href = './css/favblue.css'
    }
    if(mode == 'favgreen'){
        document.getElementById('theme-style').href = './css/favgreen.css'
    }
    localStorage.setItem('theme', mode)
    
 }