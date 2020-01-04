## Carousel with Hooks Experiment

## 










## Setup and config 
1) ### Set up React app `yarn create react-app app`

2) ### Add app Dependencies  (several added for future styling)
   `yarn add reinspect antd semantic-ui-react react-rainbow-components react-router-dom styled-components react-spinners-kit react-loader-spinner axios reactn reactn-devtools` 

    - For `react-loaded-spinner`, you must also add `styled-components`
    - For `semantic-ui-react`, you must also 
        add to `index.html`  
        ~~~ html 
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm semantic-ui@2.4.2/dist/semantic.min.css" />
        ~~~
    - For `Ant Design`, you must also add add to `index.html`
        ~~~
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.min.css" />
        ~~~    
3) ### React DevTools extension `hooks` configuration        
    - To utilize the `redux devtools extension` with 'hooks, add the following to `src/index.js`
        import `StateInspector`
        ~~~ js
        import { StateInspector } from 'reinspect';
        ~~~
        Define a `Wrapper` component and wrap the `App` component 
        ~~~ js
        const AppWrap = () => {
            return (
                <StateInspector>
                    <App/>
                </StateInspector>
            )
        }

        ReactDOM.render(<AppWrap />, document.getElementById('root'));
        ~~~    