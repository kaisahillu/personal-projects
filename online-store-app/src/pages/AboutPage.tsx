import '../styles/QaPage.css'
import AboutUsPic from '../images/about-us.jpg'

export function AboutPage(){

    return(
        <>
            <div className='banner'>
                <h1>About Us</h1>
            </div>

            <div className='container'>
                <div className='pic-body'>
                    <img src={AboutUsPic} />
                </div>

                <div className='text-body'>
                    <h2>Who are we?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia dignissimos in, 
                        aut maxime consectetur nam adipisci pariatur molestias facere temporibus voluptatum quos, 
                        dolore aspernatur suscipit quia provident dolor neque exercitationem.</p>
                    <h2>What's our mission?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia dignissimos in, 
                        aut maxime consectetur nam adipisci pariatur molestias facere temporibus voluptatum quos, 
                        dolore aspernatur suscipit quia provident dolor neque exercitationem.</p>
                    <h2>Where can you find us?</h2>    
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia dignissimos in, 
                        aut maxime consectetur nam adipisci pariatur molestias facere temporibus voluptatum quos, 
                        dolore aspernatur suscipit quia provident dolor neque exercitationem.</p>
                </div>    
            </div>
        </>
    );
}