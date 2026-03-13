import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { FadeIn } from "@/src/components/FadeIn";
import { VideoPlayer } from "@/src/components/VideoPlayer";
import { ProjectGantt } from "@/src/components/ProjectGantt";
import { ProjectSection } from "@/src/components/ProjectSection";

export function Animation3D() {
  return (
    <ProjectLayout
      subtitle="Animation & 3D Explorations"
      title="MOTION & 3D"
      tagline="A collection of animation tests, character movements, and Unreal Engine environments."
    >
      <ProjectSection title="Project Scope">
        <ScopeGrid
          items={[
            { label: "Project Type", value: "Animation & 3D Exploration" },
            { label: "Duration", value: "Ongoing" },
            { label: "Team Size", value: "Individual" },
            { label: "Role", value: "Animator & 3D Artist" },
          ]}
        />
        <div className="mt-8 text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            This project serves as a continuous exploration of motion, character dynamics, and real-time environment building. It encompasses various tests and studies aimed at refining technical skills and artistic expression in both 2D and 3D spaces.
          </p>
          <p>
            The scope includes creating fluid character animations, mechanical walk cycles, and immersive, atmospheric environments using industry-standard tools like Unreal Engine.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Creative Objective">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            The primary objective is to push the boundaries of personal technical capabilities in animation and 3D world-building.
          </p>
          <p>
            For character animations, the goal is to master weight, timing, and expressive movement. For 3D environments, the focus shifts to lighting, texturing, and spatial design to evoke specific moods and atmospheres, creating compelling real-time experiences.
          </p>
        </div>
      </ProjectSection>

      <ProjectSection title="Roles & Responsibilities">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p><strong className="text-white">My Role:</strong> Sole Animator & 3D Artist</p>
          <p>Responsibilities included:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Conceptualizing and executing animation sequences</li>
            <li>Modeling, rigging, and animating 3D characters and assets</li>
            <li>Designing and constructing real-time environments in Unreal Engine</li>
            <li>Managing the entire pipeline from ideation to final render</li>
          </ul>
        </div>
      </ProjectSection>

      <ProjectSection title="Production Timeline & Pipeline">
        <div className="mb-8">
          <h4 className="text-xl font-bold text-white mb-4">Pipeline</h4>
          <div className="flex flex-wrap items-center gap-2 text-primary font-mono text-sm md:text-base">
            <span>Concept/Reference</span>
            <span>&darr;</span>
            <span>Modeling/Rigging</span>
            <span>&darr;</span>
            <span>Blocking & Animation</span>
            <span>&darr;</span>
            <span>Environment Setup</span>
            <span>&darr;</span>
            <span>Lighting & Texturing</span>
            <span>&darr;</span>
            <span>Rendering</span>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white mb-4">Timeline (Typical Workflow)</h4>
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg mb-8">
          <div>
            <strong className="text-white block mb-2">Phase 1 – Asset Creation</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Gathering references and conceptualizing the scene or movement</li>
              <li>Modeling base meshes and setting up character rigs</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Phase 2 – Animation & Environment</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Blocking out key poses and refining animation timing</li>
              <li>Constructing the 3D environment and placing assets</li>
            </ul>
          </div>
          <div>
            <strong className="text-white block mb-2">Phase 3 – Polish & Render</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Applying textures, setting up lighting, and adding atmospheric effects</li>
              <li>Final rendering and post-processing</li>
            </ul>
          </div>
        </div>

        <ProjectGantt 
          totalWeeks={4}
          tasks={[
            { name: "Asset Creation", startWeek: 0, durationWeeks: 1.5 },
            { name: "Animation & Env Setup", startWeek: 1.5, durationWeeks: 1.5 },
            { name: "Polish & Render", startWeek: 3, durationWeeks: 1 }
          ]} 
        />
      </ProjectSection>

      <ProjectSection title="Deliverables">
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          A series of video renderings showcasing character animation, mechanical walk cycles, and immersive Unreal Engine environments.
        </p>
        <div className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Animation Work</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Exploring fluid motion and character dynamics through 2D and 3D animation techniques. This piece focuses on weight, timing, and expressive movement.
              </p>
            </div>
            <div className="lg:col-span-2 rounded-xl overflow-hidden border border-white/10">
              <VideoPlayer url="https://www.youtube.com/embed/5ViDti_Ly4k" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1 rounded-xl overflow-hidden border border-white/10">
              <VideoPlayer url="https://www.youtube.com/embed/4V5Iz99Qpks" />
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Bot Walk Cycle</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                A mechanical walk cycle study. The goal was to convey a sense of heavy machinery while maintaining a smooth, rhythmic gait.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Unreal Engine</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Building immersive, real-time environments in Unreal Engine. This project highlights lighting, texturing, and spatial design to create a compelling atmosphere.
              </p>
            </div>
            <div className="lg:col-span-2 rounded-xl overflow-hidden border border-white/10">
              <VideoPlayer url="https://www.youtube.com/embed/MEz3UtzaGJM" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <img src="https://i.postimg.cc/xcdKnmyy/06ce643d-2496-4fad-bc90-22ce80299ef2.jpg" alt="Unreal Engine Environment 1" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/jLjztfQX/0fd31a2d-cb69-4a5e-bd80-a76925b5ddd4.jpg" alt="Unreal Engine Environment 2" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/0bNpPSdn/23cc8bb3-a7f4-43cc-a901-0774d07ddb07.jpg" alt="Unreal Engine Environment 3" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/LJcftbKm/72db15c2-42cf-4a5e-8195-00d902a2ae76.jpg" alt="Unreal Engine Environment 4" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/9rfGC9tG/ae9b58c3-ad84-4d9a-94db-aec56c2fc580.jpg" alt="Unreal Engine Environment 5" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/ZWG38MtS/b55c653b-001d-4663-a511-e6a057dd89be.jpg" alt="Unreal Engine Environment 6" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/JGhbMXcF/c4823395-9f53-47c2-bd5c-7476fa450071.jpg" alt="Unreal Engine Environment 7" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300 lg:col-span-3 md:col-span-2" referrerPolicy="no-referrer" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Tools & Software Used">
        <ul className="list-disc list-inside text-gray-400 leading-relaxed text-lg space-y-2">
          <li><strong className="text-white">Unreal Engine</strong> – Real-time environment building, lighting, and rendering</li>
          <li><strong className="text-white">Autodesk Maya / Blender</strong> – 3D modeling, rigging, and character animation</li>
          <li><strong className="text-white">Substance Painter</strong> – Texturing and material creation</li>
        </ul>
      </ProjectSection>

      <ProjectSection title="Challenges & Solutions">
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
          <div>
            <strong className="text-white block mb-2">Challenge 1</strong>
            <p>Achieving realistic weight and momentum in mechanical walk cycles without making the movement feel stiff.</p>
            <strong className="text-white block mt-2 mb-2">Solution</strong>
            <p>Extensive study of reference footage of heavy machinery and iterative adjustments to the animation curves to emphasize the follow-through and overlapping action.</p>
          </div>
          <div>
            <strong className="text-white block mb-2">Challenge 2</strong>
            <p>Optimizing high-fidelity assets for real-time rendering in Unreal Engine while maintaining visual quality.</p>
            <strong className="text-white block mt-2 mb-2">Solution</strong>
            <p>Utilizing efficient retopology techniques and baking high-resolution details onto low-poly meshes, alongside careful management of lighting complexity.</p>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection title="Final Outcome">
        <div className="text-gray-400 leading-relaxed text-lg space-y-4">
          <p>
            The final outcomes are a collection of polished animation sequences and high-quality real-time environment renders.
          </p>
          <p>
            These explorations have significantly broadened my technical skill set, providing a deeper understanding of the 3D production pipeline, from initial modeling and rigging to final lighting and real-time rendering in Unreal Engine.
          </p>
        </div>
      </ProjectSection>
    </ProjectLayout>
  );
}
