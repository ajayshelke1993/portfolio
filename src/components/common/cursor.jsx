import React, { useEffect } from 'react';
import Kinet from 'kinet'; // Make sure to import Kinet library if not already done
import "./styles/cursor.css";

function CircleComponent() {
  useEffect(() => {
    // Initialize Kinet
    const kinet = new Kinet({
      acceleration: 0.06,
      friction: 0.20,
      names: ["x", "y"],
    });

    // Select circle element
    const circle = document.getElementById('circle');

    // Set handler on kinet tick event
    kinet.on('tick', function(instances) {
      circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
    });

    // Call kinet animate method on mousemove
    function handleMouseMove(event) {
      kinet.animate('x', event.clientX - window.innerWidth / 2);
      kinet.animate('y', event.clientY - window.innerHeight / 2);
    }
    document.addEventListener('mousemove', handleMouseMove);

    // Log start and end events
    kinet.on('start', function() {
      console.log('start');
    });

    kinet.on('end', function() {
      console.log('end');
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Your JSX code for rendering the circle element */}
      <div id="circle" style={{ width: '20px', height: '20px', background: 'blue' }}></div>
    </div>
  );
}

export default CircleComponent;
