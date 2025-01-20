import React from 'react'
import { FlipWords, StickyScroll } from './ui/AllUi'
const Experience = () => {
  const content = [
    {
      title: "Shadows Behind the Play",
      description:
        "Three soundless shots that none but the officials would notice was fired, and there he was. Dressed in a long black velvet coat over a white silk shirt, he skated through the glass tunnel with his lavish footwear. BGbots are guarding him towards the entrance. The moment his feet touched the carpet, fireworks erupted and I think I'm the only one in the crowd who hates his face. When I was younger, I used to throw bottles at him, but they'd just disappear into the crowd. I cursed him a lot, too. But he was too rich to listen. I never went to any of his programs—unless my friends dragged me along. I can't do those childish acts now, of course. Because, I will soon work for him, and I’m always being watched. Who would want to die with the next soundless shot? 'Long live the President! We owe you our lives!' the crowd chants...",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-green font-bold">
          The Story of a silent witness
        </div>
      ),
    },
    {
      title: "Evolution: From Bits to Qubits",
      description:
        "You might've heard a little of a device called 'Computer'. But did you know it all started with humanity's obsession with calculation? The desire to calculate and compute led to the birth of this gadget. And you might not know this, but today, that very device has become the most important tool for navigating both the mammoths and the miniatures. Yes, I'm talking about stuffs beyond normal human reach. Overtime, the size of a computer (it used to be the size of a one-story building!) has shrunk to become the nightmare of every parent and the thing to which I’m now addicted. Surprising right? I know...",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-black font-bold">
          Article on Quantum Computer
        </div>
      ),
    },
    {
      title: "PastField",
      description:
        "....“Woah… where are we?” “We’re in the thalamus—the part of our brain responsible for relaying consciousness, memory, sensations and all those fun stuff. Look, the lower-left corner of your glass mentions that,” I say. “Okay, but… why can’t I touch anything?” “That’s because we’re here with our consciousness. What we’re seeing is real, and we’re like, mentally present too; but we can’t feel, smell, or make any changes in the real world.” “You mean like Tris? We’re in a simulation?”—Well, there are some good effects of watching movies, I guess. “Yeah, sort of,” I reply. “Now, try thinking about something. We’re basically going to see what’s inside your head and what you’ve been thinking about lately,” I say. “My head?!”...",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-bold">
          A Quantum Theory Story
        </div>
      ),
    },
    {
      title: "Rubber Sheet Geometry",
      description:
        "What if we can’t see ghosts because they’re from different worlds? Ever wondered about their shapes? Or what they might look like? Add a spoonful of braincells and that's what my shower thoughts might look. I would pretend it's a way of asking whether we can know anything about the shapes of higher-dimensional objects (yes, considering ghosts as one). Even though they’re invisible. Now, imagine this strange scenario: Tom, living in a 2D world, can’t see me as I'm 3D, but I can still see him teasing Jerry... duh! But here's the kicker—Tom can only see Jerry as a tiny line zipping across in front of him, not the full cute Jerry visible to us...",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-slate-900 font-bold">
          Article on Topology
        </div>
      ),
    },
    {
      title: "The Drowning Light",
      description:
        "You watch them— the waves— dancing beautifully, up and down, up then down. At first, it seems graceful, like a performance. But then, it hits you; it's not dancing. It's struggling. The waves try to rise, only to fall again, defeated by the weight of the sea. I lower my hands and wonder, why? Why is it that even the water can't find a way to simply stop? I laugh rembering that high-school slogan: Water is life...",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--pink-500))] flex items-center justify-center text-black font-bold">
          The Story of an eyewitness
        </div>
      ),
    },
  ];
  const words = ['Appetizers', 'Jottings', 'Writings', 'Whatevers'];
  return (
    <div className='py-32'>
      <div>
        <h2 className="heading">
          The
          <FlipWords words={words} />
        </h2>
      </div>
      <div className="flex flex-col items-center pt-20">
        <StickyScroll content={content} />
      </div>
    </div>
  )
}
export default Experience