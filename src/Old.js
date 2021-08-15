// // how we used to do class components; functional components are the way to do it now

// class Header extends React.Component {
//     constructor() {
//         super(props);
//         // super means to inherit everything to this class components
        
//     }
//     // render the virtual DOM
//     render() {
//         // return the render to the view
//         return(
//             <>
//                 <h1 className="primaryColor" style={{backgroundColor: "lightgrey"}}>
//                     {this.props.title}
//                 </h1>
//                 <p>
//                     {this.props.introMessage}
//                 </p>
//     </>
//         );
//     }
// }