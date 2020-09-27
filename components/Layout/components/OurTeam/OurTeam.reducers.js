//action

const initialState =[
    {
        name : "Williamson1",
        designation : "Web Developer",
        image : "images/img-1.jpg",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. "
    },

    {
        name : "Williamson2",
        designation : "Web Developer",
        image : "images/img-2.jpg",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. "
    },

    {
        name : "Williamson3",
        designation : "Web Developer",
        image : "images/img-3.jpg",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. "
    },

    {
        name : "Williamson4",
        designation : "Web Developer",
        image : "images/img-1.jpg",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. "
    },
]


// it's one way of function - but it's now it's simply variable 
export const OurTeamReducer = (state=initialState, action ) =>{
    switch (action.type) {
        default:
            return state;
    }
};