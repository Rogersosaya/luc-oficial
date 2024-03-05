"use client";
import ReactSpeedometer from "react-d3-speedometer";

function Velocimeter({}) {
  return (
    <div>
      <ReactSpeedometer
        minValue={0}
        maxValue={5}
        width={230}
        height={140}
        needleTransitionDuration={1500}
        needleColor="steelblue"
        value={2.5}
        segments={5}
        segmentColors={["#00FF00", "#ADFF2F", "#FFFF00", "#FFA500", "#FF0000"]}
        customSegmentLabels={[
          {
            text: "",
          
          },
          {
            text: "",
            
          },
          {
            text: "",
            
          },
          {
            text: "",
            
          },
          {
            text: "",
            
          },
        ]}
        
      />
    </div>
  );
}

export default Velocimeter;
