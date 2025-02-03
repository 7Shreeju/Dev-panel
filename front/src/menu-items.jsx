import {
    dashboardImg1,
    dashboardImg2,
    dashboardImg3,
    dashboardImg4,
    adminTemplate,
    createProject,
  } from "./../src/images";
  const menuItems = {
    items: [
      {
        id: "navigation",
        title: "Navigation",
        type: "group",
        icon: "icon-navigation",
        children: [
          {
            id: "dashboard",
            title: "Dashboard",
            type: "item",
            icon: "feather icon-file-text",
            src: dashboardImg4,
            url: "/company/create-new-project",
          },
          {
            id: "module",
            title: "Module",
            type: "collapse",
            icon: "feather icon-file-text",
            src: dashboardImg4,
  
            children: [
              {
                id: "module",
                title: "Add Module",
                type: "item",
                // icon: "feather icon-file-text",
                // src: dashboardImg4,
                url: "/module/add-module",
              },
              {
                id: "module",
                title: "Module List",
                type: "item",
                // icon: "feather icon-file-text",
                // src: dashboardImg4,
                url: "/module/module-list",
              },
              
            ],
          },
       
          {
            id: "product",
            title: "Product",
            type: "collapse",
            icon: "feather icon-file-text",
            src: dashboardImg4,
  
            children: [
              {
                id: "product-category",
                title: "Product Features List",
                type: "item",
                // icon: "feather icon-file-text",
                // src: dashboardImg4,
                url: "/product/product-features",
              },
            ],
          },
          {
            id: "custom",
            title: "Custom",
            type: "collapse",
            icon: "feather icon-file-text",
            src: dashboardImg4,
  
            children: [
              {
                id: "custom",
                title: "Custom List",
                type: "item",
                // icon: "feather icon-file-text",
                // src: dashboardImg4,
                url: "/custom/list",
              },
            ],
          },
          {
            id: "Theme",
            title: "Theme",
            type: "collapse",
            icon: "feather icon-file-text",
            src: dashboardImg4,
            children: [
              {
                id: "Theme",
                title: "Theme List",
                type: "item",
                // icon: "feather icon-file-text",
                // src: dashboardImg4,
                url: "/custom/theme",
              },
            ],
          },
          {
            id: "Editor",
            title: "Editor",
            type: "collapse",
            icon: "feather icon-file-text",
            src: dashboardImg4,
            children: [
              {
                id: "Editor",
                title: "Editor List",
                type: "item",
                // icon: "feather icon-file-text",
                // src: dashboardImg4,
                url: "/custom/editor",
              },
            ],
          },
          // {
          // 	id: 'auth',
          // 	title: 'Authentication',
          // 	type: 'collapse',
          // 	icon: 'feather icon-lock',
          // 	src: dashboardImg2,
          // 	badge: {
          // 		title: 'New',
          // 		type: 'label-danger'
          // 	},
          // 	children: [
          // 		{
          // 			id: 'signup-1',
          // 			title: 'Sign In',
          // 			type: 'item',
          // 			url: '/auth/signin',
          // 			target: true,
          // 			breadcrumbs: false
          // 		},
          // 		{
          // 			id: 'form',
          // 			title: 'Forgot Password',
          // 			type: 'item',
          // 			url: '/auth/forgotpassword',
          // 			target: true,
          // 			breadcrumbs: false
          // 		},
          // 		{
          // 			id: 'form',
          // 			title: 'Reset Password',
          // 			type: 'item',
          // 			url: '/auth/resetpassword',
          // 			target: true,
          // 			breadcrumbs: false
          // 		}
          // 	]
          // },
        ],
      },
    ],
  };
  
  export default menuItems;
  