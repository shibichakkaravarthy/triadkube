var granimInstance = new Granim({
   element: '#banner',
   name: 'granim',
   opacity: [1, 1],
   states : {
       "default-state": {
           gradients: [
               ['#6dd5ed', '#2193b0'],
               ['#000046', '#1CB5E0'],
               ['#2c3e50', '#3498db'],
               ['#5C258D', '#4389A2']
           ],

           transitionSpeed: 2500
       }
   }
});