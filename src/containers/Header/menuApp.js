export const adminMenu = [
    { //Quản lý người dùng
        name: 'menu.admin.manage-user', menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage',
                
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux',
                
            },
            {
                name: 'menu.admin.manage-engineer', link: '/system/user-engineer',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                 
                // ]
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin',
                
            },
            
            
        ]
    },
    { //Quản lý garage
        name: 'menu.admin.garage', menus: [
            {
                name: 'menu.admin.manage-garage', link: '/system/manage-garage',
                
            },
            
        ]
    },
    { //Quản lý dịch vụ
        name: 'menu.admin.service', menus: [
            {
                name: 'menu.admin.manage-service', link: '/system/manage-service',
                
            },
            
        ]
    },
    { //Quản lý tin tức
        name: 'menu.admin.blog', menus: [
            {
                name: 'menu.admin.manage-blog', link: '/system/manage-blog',
                
            },
            
        ]
    },
];