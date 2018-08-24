

### How to Develop

#### It's a pure component?
1. Create a component folder in /src/commons.
2. Use one index.js file to export your view.
3. Go to your page, import this component and add to page component.


#### It's a service component?
1. Create component foler in /src/services.
2. Use one index.js file to export your view.
3. Go to your page, import this component and add to page component.

4. Create your service file.
    * What's your default data structure? for example: 

            {
                "hotSearch": ["loading", "loading"]
            }

    * What's your action types? for example:

    
            export const GET_HOT_SEARCH  = 'GET_HOT_SEARCH';

            export const GET_HOT_SEARCH_START = 'GET_HOT_SEARCH_START';

            export const GET_HOT_SEARCH_SUCCESS = 'GET_HOT_SEARCH_SUCCESS';

            export const GET_HOT_SEARCH_FAIL = 'GET_HOT_SEARCH_FAIL';

    * What's your actions? for exmaple:


        

            import * as actionTypes from './actionTypes';

            export const getHotSearch = (data) => {
                return {
                    type: actionTypes.GET_HOT_SEARCH,
                    data
                }
            }

            export const getHotSearchStart = (data) => {
                return {
                    type: actionTypes.GET_HOT_SEARCH_START,
                    data
                }
            }

            export const getHotSearchSuccess = (data) => {
                return {
                    type: actionTypes.GET_HOT_SEARCH_SUCCESS,
                    data
                }
            }

            export const getHotSearchFail = (data) => {
                return {
                    type: actionTypes.GET_HOT_SEARCH_FAIL,
                    data
                }
            }

    * What's your component? 
    * What's your container?
    * What's your reducer?
    * What's your sagas?

5. Once finish above, go to /src/utils/ foler, register your reducer, sagas and default state.

6. Create your new page, import your new page by asyncComponent util, then you can add a route for your new page.