import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { Timeline } from "@/src/components/Timeline";
import { WorkflowDiagram } from "@/src/components/WorkflowDiagram";
import { FadeIn } from "@/src/components/FadeIn";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { ProjectGantt } from "@/src/components/ProjectGantt";
import { ProjectSection } from "@/src/components/ProjectSection";

export function Nivara() {
  return (
    <ProjectLayout
      subtitle="Interdisciplinary World-Building Project"
      title="NIVARA"
      tagline="Designing a civilization from a Ludo-inspired game mechanics."
    >
      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Project Type", value: "World-Building & Installation" },
            { label: "Duration", value: "3 Weeks" },
            { label: "Team Size", value: "5 Members" },
            { label: "Role", value: "Concept & World Design Lead" },
          ]}
        />
        <div className="mt-8 text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            Nivara was an interdisciplinary project that challenged us to create a comprehensive fictional world based on the mechanics of a traditional board game. We chose Ludo as our foundation.
          </p>
          <p>
            The project required developing the lore, culture, architecture, and visual identity of this world, culminating in a physical installation and a detailed "World Bible" documenting our creation.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Creative Objective">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p>
              The primary objective was to transform the abstract rules and mechanics of Ludo into a believable, structured civilization.
            </p>
            <p>
              We conceptualized a world consisting of four distinct elemental cities (representing the four colors in Ludo) surrounding a central, sacred arena called Niveth (the "home" square). The gameplay of Ludo was re-imagined as a vital cultural ritual performed by the inhabitants to maintain balance and harmony within their universe.
            </p>
          </div>
          <img src="https://i.postimg.cc/hfKSNbnw/34d6ae1a-4f66-46ef-ae35-3f06c99f8eb3.jpg" alt="Nivara Objective" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Roles & Responsibilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p><strong className="text-white">My Role:</strong> Concept & World Design Lead</p>
            <p>Responsibilities included:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Leading the narrative development and lore creation</li>
              <li>Designing the structural layout of the cities and the central arena</li>
              <li>Generating concept art using AI tools to establish the visual aesthetic</li>
              <li>Collaborating with team members from diverse disciplines (fashion, product design) to ensure a cohesive world design</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://i.postimg.cc/BXNq3LQK/831bcc3c-bdee-463a-8df9-37756666b3d2.jpg" alt="Team Work 1" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/YLzthjNw/92b5bb14-0b78-4b56-976b-f9be6aa253f6.jpg" alt="Team Work 2" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Production Timeline & Pipeline">
        <div className="mb-8">
          <h4 className="text-xl font-bold text-white mb-4">Pipeline</h4>
          <div className="flex flex-wrap items-center gap-2 text-primary font-mono text-sm md:text-base">
            <span>Game Analysis</span>
            <span>&darr;</span>
            <span>Lore & World Building</span>
            <span>&darr;</span>
            <span>Visual Concepting</span>
            <span>&darr;</span>
            <span>Physical Installation Build</span>
            <span>&darr;</span>
            <span>Documentation (World Bible)</span>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Timeline</h4>
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-8">
          <div>
            <strong className="text-white block mb-2">Week 1 – Concept & Lore</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Analyzing Ludo mechanics and translating them into societal rules</li>
              <li>Developing the core lore, history, and culture of Nivara</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Week 2 – Visuals & Prototyping</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Generating concept art for environments and characters</li>
              <li>Planning the physical installation and sourcing materials</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Week 3 – Execution & Documentation</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Constructing the physical model of Niveth</li>
              <li>Compiling and designing the final World Bible</li>
            </ul>
          </div>
        </div>

        <ProjectGantt 
          totalWeeks={3}
          tasks={[
            { name: "World Concept & Lore", startWeek: 0, durationWeeks: 1 },
            { name: "Concept Art & Visuals", startWeek: 0.5, durationWeeks: 1.5 },
            { name: "Installation Building", startWeek: 1.5, durationWeeks: 1.5 },
            { name: "Documentation", startWeek: 2, durationWeeks: 1 }
          ]} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <img src="https://i.postimg.cc/7JkxHS25/95e01a1b-2bda-4442-b942-8de0b7191e18.jpg" alt="Process 1" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          <img src="https://i.postimg.cc/1fy9bcSH/9756f0ba-5391-4779-b1a4-2c693132d2cd.jpg" alt="Process 2" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
          <img src="https://i.postimg.cc/GHzcR8hs/a7e78613-2ba6-4882-9975-b6517326748f.jpg" alt="Process 3" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Deliverables">
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          A comprehensive World Bible detailing the lore, physical installation model of the central arena, and visual concept assets.
        </p>
        <div className="mb-12">
          <VideoPlayer url="https://www.youtube.com/embed/JFzLTv7bhSY" />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="relative rounded-xl overflow-hidden border border-white/10 group">
            <img 
              src="https://i.postimg.cc/ppP23YvB/f091c2b9-9e8d-45b3-978e-8ef02a741082.jpg" 
              alt="Nivara final output" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Tools & Software Used">
        <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2">
          <li><strong className="text-white">Physical Materials</strong> – Thermocol, jute, wires, craft paper for the installation</li>
          <li><strong className="text-white">Adobe Creative Suite</strong> – Photoshop and Illustrator for documentation and asset design</li>
          <li><strong className="text-white">AI Image Generators</strong> – Midjourney/DALL-E for rapid concept art generation and visual exploration</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Challenges & Solutions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <div>
              <strong className="text-white block mb-2">Challenge 1</strong>
              <p>Delays in getting concept approvals from faculty slowed down the initial production phase.</p>
              <strong className="text-white block mt-2 mb-2">Solution</strong>
              <p>I took the initiative to refine ideas independently and present more polished concepts, which helped accelerate the approval process and keep the project moving.</p>
            </div>
            <div>
              <strong className="text-white block mb-2">Challenge 2</strong>
              <p>The 3-week timeline was extremely tight for both world-building and physical construction.</p>
              <strong className="text-white block mt-2 mb-2">Solution</strong>
              <p>We prioritized the core deliverables—the physical model of Niveth and the World Bible—over secondary assets to ensure a high-quality final presentation.</p>
            </div>
          </div>
          <img src="https://i.postimg.cc/RJLvNq1x/ca7d86e9-fe37-4fbe-ae64-1ff5ec6159ad.jpg" alt="Challenges" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>

      <ProjectSection title="Final Outcome">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-400 leading-relaxed text-lg space-y-4">
            <p>
              The final outcome was a fully realized fictional universe presented through a detailed World Bible and a physical installation.
            </p>
            <p>
              This project significantly enhanced my skills in narrative design, world-building, and interdisciplinary collaboration. It demonstrated the ability to translate abstract game mechanics into tangible, cohesive design elements across various media.
            </p>
          </div>
          <img src="https://i.postimg.cc/JHL1rjkt/e38e8351-c536-4360-b763-95fc129d3f77.jpg" alt="Reflection" className="w-full rounded-xl border border-white/10" referrerPolicy="no-referrer" />
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
