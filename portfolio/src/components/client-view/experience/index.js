"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Experience".split(" ").map((item, index) => (
                  <span
                    className={`${index === 1 ? "text-orange-500 " : "text-[#000]"
                      }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem) => (
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot className="text-orange-500" />
                          <TimelineConnector className="text-orange-500" />
                        </TimelineSeparator>
                        <TimelineContent>
                          <div className="border-[2px] p-4 rounded-[8px] border-orange-500 mt-[14px] ml-[16px]">
                            <p className="font-bold mt-2">
                            <span className="font-extrabold"> Position: </span>{experienceItem.position}
                            </p>

                            <p className="font-bold">
                            <span className="font-extrabold"> Duration: </span>{experienceItem.duration} years
                            </p>

                            <h3 className="font-bold mt-2">
                            <span className="font-extrabold"> Company: </span> {experienceItem.company},{" "}
                             <div className="font-bold mt-2"> 
                            <span className="font-extrabold"> Location: </span>{experienceItem.location} 
                             </div> 
                            </h3>

                            <p className="font-bold mt-2">
                            <span className="font-extrabold"> Description: </span>  {experienceItem.jobprofile}
                            </p>



                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    className={`${index === 1 ? "text-orange-500" : "text-[#000]"
                      }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {educationData && educationData.length
                    ? educationData.map((educationItem) => (
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot className="bg-orange-500" />
                          <TimelineConnector className="bg-orange-500" />
                        </TimelineSeparator>
                        <TimelineContent>
                          <div className="border-[2px] p-4 rounded-[8px] border-orange-500 mt-[14px] ml-[16px]">
                            <p className="font-bold">
                            <span className="font-bold"> Year: </span> {educationItem.year}
                            </p>
                            <h3 className="font-bold mt-2">
                            <span className="font-bold"> College: </span>{educationItem.college}
                            </h3>
                            <p className="font-bold mt-2">
                            <span className="font-bold"> Degree: </span> {educationItem.degree}
                            </p>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}