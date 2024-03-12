'use client'
import { Features } from "@/components/features";
import Image from "next/image";
import React from "react";
import { FaCrown, FaStar, FaUser } from "react-icons/fa";

interface Valoration{
  id: string,
}
interface Teacher {
  averageRating: number,
  url:string,
  name:string,
  valorations: Valoration[],
}
interface Props {
  topTeachers: Teacher[],
}

function FeatureCommentFast({topTeachers}:Props) {
  const top1 = topTeachers[0];
  const top2 = topTeachers[1];
  const top3 = topTeachers[2];
  
  const array = [...Array(5)];
  return (
    
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          
        }
        
        
      />
    </Features>
  );
}

export default FeatureCommentFast;
