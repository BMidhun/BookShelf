const items = [
    {
        type:'navItem',
        icon:'home',
        text:'Home',
        link:'/',
        restricted:''
    },

    {
        type:'navItem',
        icon:'user',
        text:'My Profile',
        link:'/user',
        restricted:true
    },

    {
        type:'navItem',
        icon:'user-plus',
        text:'Register',
        link:'/user/register',
        restricted:false
    },

    {
        type:'navItem',
        icon:'sign-in',
        text:'Login',
        link:'/login',
        restricted:false
    },

    {
        type:'navItem',
        icon:'sticky-note',
        text:'My Reviews',
        link:'/user/posts',
        restricted:true
    },

    {
        type:'navItem',
        icon:'sticky-note',
        text:'Add reviews',
        link:'/user/add',
        restricted:true
    },

    {
        type:'navItem',
        icon:'sign-out',
        text:'Logout',
        link:'/user/logout',
        restricted:true
    }
]

export default items