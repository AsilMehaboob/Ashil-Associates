import { TEAM_CONTENT } from "@/constants";

import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

function SocialIcon({ name }: { name: string }) {
  if (name === "linkedin") {
    return <Linkedin className="w-4 h-4" strokeWidth={1.5} />;
  }
  if (name === "mail") {
    return <Mail className="w-4 h-4" strokeWidth={1.5} />;
  }
  return null;
}

export default function Team() {
  return (
    <section className="bg-[var(--color-midnight-950)] py-20 px-6 sm:px-8 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 mb-6 font-sans">
            {TEAM_CONTENT.sectionHeader}
          </h3>
          <h2 className="text-4xl sm:text-5xl font-serif text-white leading-[1.15]">
            {TEAM_CONTENT.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_CONTENT.members.map((member) => (
            <div key={member.name} className="group">
              <div className="relative w-full aspect-[4/5] bg-[var(--color-midnight-800)] mb-6 overflow-hidden">
                <Image
                  src={(member as any).image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h4 className="font-serif text-xl text-white mb-2 font-medium">
                {member.name}
              </h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-sans mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 font-sans leading-relaxed mb-6 max-w-sm">
                {member.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={member.socials.linkedin}
                  aria-label={`${member.name}'s LinkedIn`}
                  className="w-8 h-8 bg-[var(--color-midnight-800)] flex items-center justify-center rounded-sm text-gray-400 hover:bg-[var(--color-midnight-700)] hover:text-white transition-colors duration-300"
                >
                  <SocialIcon name="linkedin" />
                </a>
                <a
                  href={member.socials.mail}
                  aria-label={`Email ${member.name}`}
                  className="w-8 h-8 bg-[var(--color-midnight-800)] flex items-center justify-center rounded-sm text-gray-400 hover:bg-[var(--color-midnight-700)] hover:text-white transition-colors duration-300"
                >
                  <SocialIcon name="mail" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
