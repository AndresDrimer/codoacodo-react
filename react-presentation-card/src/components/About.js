import data from "../data"
export default function About(){
    return(
        <div className="--about-cont">
            
      
        <h3>About</h3>
        <p>{data.aboutContent}</p>
        <h3>Interest</h3>
        <p>{data.interestContent}</p>
          </div>
    )
}