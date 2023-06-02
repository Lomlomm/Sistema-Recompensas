
import React, { useState } from "react";
import ReactModal from "react-modal";

import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";

import recompensa1 from '../img/recompensa1.png'
import recompensa2 from '../img/recompensa2.png'
import recompensa3 from '../img/recompensa3.png'
import recompensa4 from '../img/recompensa4.png'


const data = [
  {
    cover: recompensa1,
    title: "Lleva 3, compra 2",
    descripcion: "Compra 2 bebidas cualesquiera y llévate la tercera gratis!",
    qr:'',
  },
  {
    cover: recompensa2,
    title: "20% off",
    descripcion: "Lleva un latte con el 20% de descuento",
    qr:'',
  },
  {
    cover: recompensa3,
    title: "Americano 2x1",
    descripcion: "Lunes y martes de americanos 2x1",
    qr:'',

  },
  {
    cover: recompensa4,
    title: "Sólo $99", 
    descripcion: "El antojo perfecto, lleva 1 latte helado y un muffin por solo $99!", 
    qr:'',
  },
];

export default function Recompensas() {
  const ref = React.useRef();
  return (
    <ResponsiveContainer
      carouselRef={ref}
      render={(parentWidth, carouselRef) => {
        let currentVisibleSlide = 5;
        if (parentWidth <= 1440) currentVisibleSlide = 3;
        else if (parentWidth <= 1080) currentVisibleSlide = 1;
        return (
          <StackedCarousel
            ref={carouselRef}
            data={data}
            carouselWidth={parentWidth}
            slideWidth={350}
            height={516}
            slideComponent={Slide}
            maxVisibleSlide={5}
            currentVisibleSlide={currentVisibleSlide}
            useGrabCursor={true}
          />
        );
      }}
    />
  );
}

const Slide = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover, title, descripcion } = data[dataIndex];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flyer" onClick={setIsOpen}>
      
      <img
        style={{
          borderRadius: 10,
          width: 250,
          height: 236,
          margin: "10px 42px",
          display: "inline-block",
          backgroundColor: "#C4C4C4"
        }}
        draggable={false}
        src={cover}
      />
      <p className="titulo-recompensa">{title}</p>
      <p className="descripcion-recompensa">{descripcion}</p>
      {/* <ReactModal 
        isOpen={isOpen} 
        contentLabel={title}
        onRequestClose={() => setIsOpen(false)}
        style={{width:'200px'}}>
        {descripcion}
      </ReactModal> */}
    </div>
  );
});
