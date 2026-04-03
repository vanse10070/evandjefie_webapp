import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, GraduationCap } from 'lucide-react';

interface TimelineItemData {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    skills?: string[];
}

interface TimelineItemProps extends TimelineItemData {
    isLast?: boolean;
    isDark: boolean;
    side: 'left' | 'right';
    type: 'work' | 'education';
}

const TimelineItem = ({ title, company, period, location, description, skills, isLast, isDark, side, type }: TimelineItemProps) => {
    return (
        <div className="relative mb-16 last:mb-0">
            {/* Timeline line - vertical */}
            {!isLast && (
                <div className="absolute left-1/2 top-4 bottom-[-64px] w-0.5 -ml-[1px] bg-gradient-to-b from-[#19a89e] to-[#19a89e]/20 hidden md:block"></div>
            )}
            
            <div className={`flex flex-col md:flex-row items-start justify-between w-full ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Card */}
                <motion.div 
                    initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`w-full md:w-[45%] p-6 rounded-2xl border ${
                        isDark 
                        ? 'bg-gray-800/40 border-gray-700 hover:border-[#19a89e]/50' 
                        : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                    } transition-all duration-300 relative`}
                >
                    <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-[#014a74]'}`}>
                        {title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1 font-medium">
                            {type === 'work' ? (
                                <Briefcase size={14} className="text-[#19a89e]" />
                            ) : (
                                <GraduationCap size={14} className="text-[#19a89e]" />
                            )}
                            {company}
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-[#19a89e]" />
                            {location}
                        </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                        {description.map((item, idx) => (
                            <li key={idx} className={`text-sm flex gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                <span className="text-[#19a89e] shrink-0">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    {skills && skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, idx) => (
                                <span key={idx} className={`text-[10px] px-2 py-0.5 rounded ${
                                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                                } border ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Dot on the line */}
                <div className="absolute left-1/2 top-8 -ml-2 w-4 h-4 rounded-full bg-[#19a89e] border-4 border-white dark:border-gray-900 z-10 hidden md:block shadow-[0_0_10px_rgba(25,168,158,0.5)]"></div>

                {/* Date/Period on the other side */}
                <motion.div 
                    initial={{ opacity: 0, x: side === 'left' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`hidden md:flex w-[45%] pt-7 ${side === 'left' ? 'justify-start pl-8' : 'justify-end pr-8'}`}
                >
                    <span className={`px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-sm ${
                        isDark 
                        ? 'bg-gray-800 text-[#19a89e] border border-gray-700' 
                        : 'bg-white text-[#19a89e] border border-gray-100'
                    }`}>
                        {period}
                    </span>
                </motion.div>

                {/* Mobile Period */}
                <div className="md:hidden mt-2 mb-4 px-2">
                    <span className="text-xs font-bold text-[#19a89e] uppercase tracking-wider">
                        {period}
                    </span>
                </div>
            </div>
        </div>
    );
};

interface TimelineProps {
    isDark: boolean;
    title: string;
    subtitle: string;
    items: TimelineItemData[];
    type: 'work' | 'education';
}

const Timeline = ({ isDark, title, subtitle, items, type }: TimelineProps) => {
    return (
        <section className={`py-20 px-4 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto relative">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#014a74]'}`}
                    >
                        {title}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="relative">
                    {/* The center line for desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -ml-[1px] bg-gradient-to-b from-[#19a89e] via-[#19a89e]/20 to-transparent hidden md:block"></div>
                    
                    <div className="space-y-8 md:space-y-0">
                        {items.map((item, idx) => (
                            <TimelineItem 
                                key={idx}
                                {...item}
                                isDark={isDark}
                                isLast={idx === items.length - 1}
                                side={idx % 2 === 0 ? 'left' : 'right'}
                                type={type}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
