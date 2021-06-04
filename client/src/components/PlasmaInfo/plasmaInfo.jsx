import React from 'react';
import styles from './plasma.module.css';
import plasma from './images/plasma.jpg';
import donation from './images/donation.png';
import validate from './images/youcan.png';
import notable from './images/youcannot.png';
import remember from './images/remember.jpg';

export default function PlasmaInfo() {
    return (
      <div className={styles.container}>

            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>What is plasma</p>
                <img src={plasma} className={styles.image} alt="Avatar"/>
                </div>
                <div className={styles.flipcardback}>
                <p className={styles.content}>Plasma is the clear, straw-colored liquid portion of blood that remains after red blood cells, white blood cells, platelets 
                    and other cellular components are removed. It is the single largest component of human blood, comprising about 55 percent,
                    and contains water, salts, enzymes, antibodies and other proteins.</p>
                </div>
            </div>
            </div>
            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>Importance of Donation</p>
                <img src={donation} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p className={styles.content}>
                "<span className={styles.quote}> DONATE PLASMA SAVE LIVES❤️ </span>"<br></br>
                Donating plasma can save lives. Your antibodies can help someone fight the infection and emerge victoriously. If your COVID
                symptoms have been absent for more than 14 days, kindly consider donating as a service to humanity. Just like during any 
                regular blood donation session, blood will be drawn from your arm. It will be sent through special tubes that will separate the
                plasma from the blood.</p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>You CAN donate plasma if</p>
                <img src={validate} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul className={styles.ulcontent}>
                    <li className={styles.licontent}>✅ You were tested positive for COVID-19.</li>
                    <li className={styles.licontent}>✅ You are between 18-60 years old.</li>
                    <li className={styles.licontent}>✅ You have fully recovered.</li>
                    <li className={styles.licontent}>✅ You are free of symptoms for 14 days.</li>
                    <li className={styles.licontent}>✅ You have tested positive before 28 days.</li>
                    <li className={styles.licontent}>✅ In case you have already donated plasma, you are still eligible to donate again after every 14 days or as recommended
                        by your doctor.
                    </li>
                </ul>
                </p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>You CANNOT donate plasma if</p>
                <img src={notable} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul>
                    <li className={styles.licontent}>🚫 Your weight is less than 50 kg..</li>
                    <li className={styles.licontent}>🚫 You have ever been pregnant.</li>
                    <li className={styles.licontent}>🚫 You are diabetic on insulin.</li>
                    <li className={styles.licontent}>🚫 Your Blood Pressure is more than 140 and diastolic less than 60 or more than 90.</li>
                    <li className={styles.licontent}>🚫 You have uncontrolled diabetes or hypertension with change in medication in last 28 days.</li>
                    <li className={styles.licontent}>🚫 You are a Cancer Survivor.</li>
                    <li className={styles.licontent}>🚫 You have chronic kidney/heart/lung or liver disease.</li>
                </ul>
                </p>
                </div>
            </div>
            </div>

            <br/><br/><br/><br/>
            <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <p className={styles.heading}>Things to remember before you donate plasma</p>
                <img src={remember} className={styles.image} alt="Avatar"/>
                </div> 
                <div className={styles.flipcardback}>
                    
                <p>
                <ul>
                    <li className={styles.licontent}>📌 Do not drink alcohol for at least 24 hours before you donate blood. Alcohol remains in your system for about a day
                        and so could end up in the blood that is collected from you. Besides alcohol acts as a blood thinner, so there
                        could be a lot of bleeding when you are hooked to the blood extraction device.
                    </li>
                    <li className={styles.licontent}>📌 Do not smoke or consume heavy meals/greasy foods before plasma donation.</li>
                    <li className={styles.licontent}>📌 Do not pop an aspirin or any kind of pain-relieving medication for 48 hours before the donation. These medicines 
                     affect your blood’s platelets.
                     </li>
                </ul>
                </p>
                </div>
            </div>
            </div>
      </div>
    );
  }