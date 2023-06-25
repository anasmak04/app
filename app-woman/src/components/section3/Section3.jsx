import acti from "../../assets/acti.png";
import child from "../../assets/child.jpg";
import "./Section3.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Section3() {
  return (
    <div>
      <div className="sec">
        <img src={acti} alt="" />
        <h1>activities for your baby:</h1>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            Here are some suggested activities for babies from 1 month to 3
            months old: <br />
            Tummy Time: Place your baby on their tummy for short periods (3-5
            minutes) to help develop neck and upper body strength.
            <br />
            Gentle Music: Play soft, calming music or nursery rhymes to soothe
            and entertain your baby.
            <br /> You can also sing or hum to them. Mirror Play: Show your baby
            their reflection in a baby-safe mirror. <br />
            This can be fascinating for them and helps with their
            self-awareness.
            <br />
            Talking and Singing: Engage in conversation with your baby and
            respond to their sounds and coos.
            <br /> Sing lullabies or nursery rhymes to promote language
            development. Baby Massage: Gently massage your baby's arms, legs,
            and tummy using baby-safe oil. This can promote relaxation and
            bonding.
          </SwiperSlide>
          <SwiperSlide>
            Here are some suggested activities for babies from 4 months to 6
            months old:
            <br />
            Rolling and Crawling: Encourage your baby to roll from back to tummy
            and tummy to back. Place toys just out of their reach to motivate
            them to move. Provide a safe space for crawling or scooting. <br />
            Sitting Practice: Support your baby in a seated position using
            pillows or a baby seat. This helps them strengthen their core
            muscles and develop balance. <br />
            Baby Gym and Activity Center: Use a baby gym or activity center with
            hanging toys, buttons, and textures for your baby to interact with.{" "}
            <br />
            This encourages reaching, grasping, and hand-eye coordination.
            <br />
            Introduce Solid Foods: Consult with your pediatrician and start
            introducing solid foods as per their recommendations. <br />
            Begin with single-grain cereals or pureed fruits and vegetables,
            following proper feeding guidelines.{" "}
          </SwiperSlide>
          <SwiperSlide>
            Here are some suggested activities for babies from 7 months to 9
            months old:
            <br />
            Crawling Obstacle Course: Create a safe crawling space with pillows,
            tunnels, and cushions. Encourage your baby to crawl through and
            explore different obstacles.
            <br />
            Encourage Standing: Provide a stable surface, such as a low table or
            sofa, for your baby to pull up and stand. Assist them as needed and
            ensure their safety.
            <br />
            Introduce Finger Foods: Offer a variety of soft finger foods, such
            as small pieces of fruits, vegetables, or cooked pasta. Allow your
            baby to practice self-feeding and develop their fine motor skills.{" "}
            <br />
            Water Play: Allow your baby to play with water in a safe
            environment, such as a shallow basin or bathtub. Provide cups,
            spoons, and bath toys for them to pour and splash.
            <br />
            Mirror Play: Encourage your baby to interact with their reflection
            in a mirror.
            <br /> Make faces, wave, or play peek-a-boo. This promotes
            self-awareness and social interaction. Nursery Rhymes and Action
            Songs: Sing nursery rhymes or action songs with hand gestures and
            movements. Encourage your baby to imitate the actions and engage
            with the music.
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Section3;
