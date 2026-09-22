"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface DeepTechnicalExpertiseProps {
  onOpenConsultation?: () => void;
}

const EXPERTISE_ITEMS = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "AI only creates value when it fits into how an organization actually works. We help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and support operations at scale.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.28565 15.1426H1.16327" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.8364 15.1426H19.7141" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.28565 8.85742H1.16327" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.8364 8.85742H19.7141" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.8573 4.28547V1.16309" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.8573 22.8363V19.7139" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.1427 4.28547V1.16309" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.1427 22.8363V19.7139" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 4.28613H5.99999C5.05323 4.28613 4.28571 5.05365 4.28571 6.00042V18.0004C4.28571 18.9472 5.05323 19.7147 5.99999 19.7147H18C18.9468 19.7147 19.7143 18.9472 19.7143 18.0004V6.00042C19.7143 5.05365 18.9468 4.28613 18 4.28613Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.00042 12.4299C7.51818 12.346 7.51816 11.6537 8.00042 11.5698C9.74752 11.2658 11.1371 9.9351 11.5163 8.20278L11.5454 8.06999C11.6497 7.59339 12.3283 7.59042 12.4368 8.0661L12.4721 8.22085C12.8654 9.94499 14.2553 11.2645 15.9976 11.5676C16.4823 11.6519 16.4823 12.3477 15.9976 12.4321C14.2553 12.7352 12.8654 14.0547 12.4721 15.7788L12.4368 15.9335C12.3283 16.4092 11.6497 16.4063 11.5454 15.9297L11.5163 15.7969C11.1371 14.0645 9.74752 12.7338 8.00042 12.4299Z" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "genai",
    title: "Generative AI",
    description:
      "Gen AI is most useful when it becomes part of everyday work. We integrate it into internal knowledge systems, customer interactions, and operational tools, with the controls and governance enterprises expect.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.4429 6.80963C0.841301 6.70496 0.841301 5.84135 1.44289 5.73669C3.62237 5.35751 5.35582 3.69746 5.8289 1.53643L5.86515 1.37078C5.9953 0.77621 6.8419 0.772509 6.97724 1.36592L7.02127 1.55897C7.51185 3.70981 9.24578 5.35583 11.4192 5.73395C12.0239 5.83914 12.0239 6.70717 11.4192 6.81236C9.24578 7.19048 7.51185 8.8365 7.02127 10.9873L6.97724 11.1804C6.8419 11.7738 5.9953 11.7701 5.86515 11.1755L5.8289 11.0099C5.35582 8.84884 3.62237 7.1888 1.4429 6.80963Z" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5822 18.1075C11.9806 18.0028 11.9806 17.1392 12.5822 17.0345C14.7617 16.6554 16.4951 14.9953 16.9682 12.8343L17.0044 12.6686C17.1346 12.0741 17.9812 12.0704 18.1165 12.6638L18.1605 12.8568C18.6512 15.0077 20.385 16.6537 22.5585 17.0318C23.1632 17.137 23.1632 18.005 22.5585 18.1103C20.385 18.4883 18.6512 20.1343 18.1605 22.2853L18.1165 22.4783C17.9812 23.0716 17.1346 23.068 17.0044 22.4733L16.9682 22.3077C16.4951 20.1467 14.7617 18.4866 12.5822 18.1075Z" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description:
      "We work with organizations exploring autonomous systems, helping them introduce AI agents that can take action across processes while remaining transparent, supervised, and accountable.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.74963 14.2047C5.84367 12.7401 7.59091 11.792 9.55958 11.792C10.961 11.792 12.2503 12.2725 13.2715 13.0777" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.70244 18.221H2.70244C2.24779 18.221 1.81174 18.0403 1.49026 17.7189C1.16877 17.3974 0.988159 16.9613 0.988159 16.5067V2.79242C0.988159 2.33775 1.16877 1.90173 1.49026 1.58023C1.81174 1.25874 2.24779 1.07812 2.70244 1.07812H16.4167C16.8714 1.07812 17.3074 1.25874 17.629 1.58023C17.9504 1.90173 18.1311 2.33775 18.1311 2.79242V7.93527" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.55959 9.22098C10.9798 9.22098 12.131 8.0697 12.131 6.64955C12.131 5.22939 10.9798 4.07812 9.55959 4.07812C8.13944 4.07812 6.98816 5.22939 6.98816 6.64955C6.98816 8.0697 8.13944 9.22098 9.55959 9.22098Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5822 18.1075C11.9806 18.0028 11.9806 17.1392 12.5822 17.0345C14.7617 16.6554 16.4951 14.9953 16.9682 12.8343L17.0044 12.6686C17.1346 12.0741 17.9812 12.0704 18.1165 12.6638L18.1605 12.8568C18.6512 15.0077 20.385 16.6537 22.5585 17.0318C23.1632 17.137 23.1632 18.005 22.5585 18.1103C20.385 18.4883 18.6512 20.1343 18.1605 22.2853L18.1165 22.4783C17.9812 23.0716 17.1346 23.068 17.0044 22.4733L16.9682 22.3077C16.4951 20.1467 14.7617 18.4866 12.5822 18.1075Z" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "ml",
    title: "Machine Learning",
    description:
      "ML in enterprise environments is less about experimentation and more about reliability. We develop models that adapt over time and continue to perform as data, demand, and conditions change.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9997 11.0281L11.9996 17.8345C11.9996 20.4135 9.90882 22.5042 7.32976 22.5042C4.75071 22.5042 2.65996 20.4135 2.65996 17.8345C2.65996 17.7023 2.66545 17.5715 2.67621 17.4421C1.70433 16.398 1.09113 14.3557 1.09113 12.6517C1.09113 10.3297 2.22968 8.07209 3.86289 7.18467C3.84723 7.03937 3.83919 6.8918 3.83919 6.74235C3.83919 4.4889 5.66598 2.66211 7.91942 2.66211C8.92286 2.66211 9.84169 3.02434 10.5523 3.62514" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.0191 9.958C5.41999 9.82143 4.06238 8.93108 3.85754 7.19531" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.92485 14.9951C3.31531 15.4764 2.82933 16.5671 2.67188 17.4408" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17.8356C12 20.4146 14.0907 22.5053 16.6698 22.5053C19.2488 22.5053 21.3395 20.4146 21.3395 17.8356C21.3395 17.7035 21.3341 17.5727 21.3233 17.4432C22.2953 16.3992 22.9085 14.3568 22.9085 12.6528C22.9085 11.9087 22.7915 11.1713 22.5788 10.4834" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.0748 14.9951C20.6843 15.4764 21.1703 16.5671 21.3278 17.4408" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.1103 7.38384C11.5087 7.27919 11.5087 6.41556 12.1103 6.31091C14.2898 5.93174 16.0233 4.27168 16.4963 2.11065L16.5326 1.945C16.6627 1.35043 17.5094 1.34673 17.6446 1.94015L17.6887 2.13317C18.1793 4.28402 19.9132 5.93006 22.0867 6.30816C22.6913 6.41337 22.6913 7.28138 22.0867 7.38657C19.9132 7.76469 18.1793 9.41073 17.6887 11.5616L17.6446 11.7546C17.5094 12.348 16.6627 12.3443 16.5326 11.7498L16.4963 11.5841C16.0233 9.42305 14.2898 7.76301 12.1103 7.38384Z" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "vision",
    title: "Computer Vision",
    description:
      "In environments where speed and accuracy matter, vision-based systems can remove friction. We apply computer vision to automate inspection, monitoring, and visual analysis across real operational settings.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.1429 18V21.4286C23.1429 21.8832 22.9622 22.3193 22.6407 22.6407C22.3193 22.9622 21.8832 23.1429 21.4286 23.1429H18" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 0.857422H21.4286C21.8832 0.857422 22.3193 1.03803 22.6407 1.35952C22.9622 1.68102 23.1429 2.11704 23.1429 2.57171V6.00028" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0.857178 6.00028V2.57171C0.857178 2.11704 1.03779 1.68102 1.35928 1.35952C1.68077 1.03803 2.1168 0.857422 2.57146 0.857422H6.00003" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.00003 23.1429H2.57146C2.1168 23.1429 1.68077 22.9622 1.35928 22.6407C1.03779 22.3193 0.857178 21.8832 0.857178 21.4286V18" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.7177 10.7463C18.8835 10.953 18.9753 11.2216 18.9753 11.5001C18.9753 11.7785 18.8835 12.0471 18.7177 12.2538C17.6677 13.5251 15.2776 16.0001 12.4876 16.0001C9.69764 16.0001 7.30764 13.5251 6.25764 12.2538C6.0918 12.0471 6 11.7785 6 11.5001C6 11.2216 6.0918 10.953 6.25764 10.7463C7.30764 9.47503 9.69764 7 12.4876 7C15.2776 7 17.6677 9.47503 18.7177 10.7463Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.4877 13.5C13.5922 13.5 14.4877 12.6046 14.4877 11.5C14.4877 10.3954 13.5922 9.5 12.4877 9.5C11.3831 9.5 10.4877 10.3954 10.4877 11.5C10.4877 12.6046 11.3831 13.5 12.4877 13.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Cloud modernization is not a lift-and-shift exercise. We help enterprises rethink how applications and infrastructure are structured so systems remain secure, resilient, and ready to scale over time.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2.12364C16.1012 1.32213 14.061 0.90918 12 0.90918C9.93897 0.90918 7.89881 1.32213 6 2.12364" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.7714 5.72364C13.3479 4.90071 10.7206 4.90071 8.29712 5.72364" stroke="#1163FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.6331 14.9252C18.5651 14.9049 18.5044 14.8656 18.4579 14.8119C18.4116 14.7582 18.3816 14.6924 18.3713 14.6221C18.2496 13.2886 17.6745 12.0371 16.7418 11.0763C15.809 10.1155 14.5751 9.50348 13.2458 9.34236C11.9164 9.18121 10.572 9.48068 9.43672 10.1908C8.30145 10.9009 7.44393 11.9788 7.00717 13.2447C6.97826 13.3037 6.93308 13.3532 6.87695 13.3874C6.82081 13.4216 6.75606 13.4389 6.69035 13.4375C6.05723 13.48 5.43866 13.6468 4.87 13.9284C4.30134 14.2099 3.7937 14.6007 3.37607 15.0785C2.53264 16.0433 2.10702 17.3037 2.19287 18.5824C2.27874 19.8611 2.86902 21.0532 3.83387 21.8966C4.79872 22.7401 6.05912 23.1657 7.33777 23.0798H17.7101C18.7214 23.0738 19.6953 22.6972 20.4475 22.0213C21.1997 21.3453 21.678 20.417 21.7917 19.4123C21.9053 18.4074 21.6467 17.3958 21.0647 16.5688C20.4825 15.7419 19.6175 15.1571 18.6331 14.9252Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function DeepTechnicalExpertise({
  onOpenConsultation,
}: DeepTechnicalExpertiseProps) {
  return (
    <section className="scroll-mt-24 pt-24 sm:pt-32 pb-24 sm:pb-32 bg-[#000000] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-b border-white/[0.08]">
      {/* Subtle modern radial ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none rounded-full blur-[160px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(17, 99, 251, 0.45) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.14]">
            <span>Deep Technical Expertise,</span>
            <br />
            <span>Supporting Modern Systems</span>
          </h2>
        </div>

        {/* 6 Expertise Cards Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {EXPERTISE_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={onOpenConsultation}
              className="group cursor-pointer flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#0c1017]/80 hover:bg-[#121722] border border-white/[0.08] hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(17,99,251,0.12)] hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-[#1163FB]/40 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105">
                  {item.icon}
                </div>

                {/* Title */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight group-hover:text-[#1163FB] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#1163FB] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 opacity-0 group-hover:opacity-100" />
                </div>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] text-slate-400 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
