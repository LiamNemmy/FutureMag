import { Article, Category } from '../types';

export const categories: Category[] = [
  { id: 'technology', name: 'Technology', color: 'bg-cyan-500' },
  { id: 'culture', name: 'Culture', color: 'bg-purple-500' },
  { id: 'design', name: 'Design', color: 'bg-pink-500' },
  { id: 'architecture', name: 'Architecture', color: 'bg-amber-500' },
  { id: 'fashion', name: 'Fashion', color: 'bg-emerald-500' },
  { id: 'music', name: 'Music', color: 'bg-blue-500' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Urban Transportation',
    excerpt: 'How electric vertical takeoff vehicles are reshaping city mobility',
    content: `
      <p>The urban landscape is on the cusp of a revolutionary transformation as electric vertical takeoff and landing (eVTOL) vehicles prepare to take flight over our congested streets. This isn't science fiction—it's the imminent future of urban transportation.</p>
      
      <p>Major companies from Joby Aviation to Lilium are racing to bring the first commercial air taxis to market, with some projecting commercial operations as early as 2024. These electric flying vehicles promise to reduce commute times from hours to minutes while producing zero direct emissions.</p>
      
      <p>But the revolution goes beyond just the vehicles themselves. Cities are already planning for a three-dimensional transportation network, with "vertiports" integrated into existing infrastructure. These air taxi hubs will connect with ground transportation, creating a seamless multimodal network.</p>
      
      <p>The implications for urban design are profound. As mobility shifts to the skies, cities may gradually reclaim streets for pedestrians, green spaces, and community use. The very fabric of urban planning could be rewoven around these new mobility patterns.</p>
      
      <p>Of course, challenges remain. Regulatory frameworks are still catching up, battery technology continues to evolve, and public acceptance will be crucial. But the trajectory is clear: our urban mobility is about to gain a new dimension.</p>
      
      <p>For city dwellers accustomed to gridlock, the promise of soaring above traffic in an electric air taxi isn't just appealing—it represents a fundamental shift in how we conceptualize urban movement. The sky is no longer the limit; it's the new frontier for city transportation.</p>
    `,
    category: 'technology',
    author: 'Alex Rivera',
    date: 'May 15, 2025',
    readTime: 6,
    imageUrl: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg',
    featured: true,
  },
  {
    id: '2',
    title: 'Algorithmic Architecture: When AI Designs Our Spaces',
    excerpt: 'The emerging collaboration between artificial intelligence and architectural design',
    content: `
      <p>In the heart of Tokyo's Shibuya district stands a structure that defies conventional architectural wisdom. Its fluid form, reminiscent of both organic growth patterns and mathematical precision, wasn't designed by a human architect—at least not entirely. It represents the vanguard of algorithmic architecture, where artificial intelligence plays a crucial role in the design process.</p>
      
      <p>This new paradigm in architectural design leverages machine learning algorithms that can analyze vast datasets of spatial configurations, material properties, environmental factors, and human behavioral patterns. The result is a new architectural language that optimizes for both functionality and aesthetic innovation in ways humans alone might never conceive.</p>
      
      <p>Leading architectural firms are increasingly incorporating these AI co-designers into their workflow. "The relationship is symbiotic," explains renowned architect Mia Chen. "The algorithm proposes solutions we might never have imagined, while we provide the critical human element—the cultural context, the emotional resonance, the ethical framework."</p>
      
      <p>Critics worry about the potential homogenization of architectural styles as algorithms converge on optimal solutions. Others raise concerns about the black-box nature of some AI systems, where the rationale behind design decisions becomes opaque.</p>
      
      <p>Yet proponents argue that algorithmic architecture actually enables greater diversity and customization. "These tools allow us to create spaces that respond more precisely to specific human needs and environmental contexts," says computational designer Jordan Meyers. "It's not about replacing human creativity but augmenting it."</p>
      
      <p>As we move into this new era, our cityscapes may increasingly reflect this human-machine collaboration—spaces designed not just for us, but with an intelligence that complements our own.</p>
    `,
    category: 'architecture',
    author: 'Sophia Wong',
    date: 'May 10, 2025',
    readTime: 5,
    imageUrl: 'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg',
    trending: true,
  },
  {
    id: '3',
    title: 'Neuromorphic Fashion: Clothing That Responds to Thought',
    excerpt: 'The emerging trend of garments that adapt based on neural activity',
    content: `
      <p>The runway lights dim. A model emerges wearing what appears to be a flowing white dress. As she walks, ripples of color pulse across the fabric, shifting from cool blues to warm reds seemingly in rhythm with her movements. But it's not motion sensors controlling these changes—it's her thoughts.</p>
      
      <p>Welcome to the world of neuromorphic fashion, where clothing connects directly to neural activity through lightweight, wireless EEG sensors discreetly woven into headbands or earpieces. These garments translate basic emotional states and thought patterns into visual or structural changes in the fabric.</p>
      
      <p>Designer Yohji Yamamoto's latest collection, "Synapse," has pioneered this technology in high fashion, but the applications are rapidly expanding beyond the catwalk. "We're creating garments that serve as a visual extension of your emotional state," explains tech-fashion pioneer Aditi Mukerjee. "It's the ultimate form of self-expression."</p>
      
      <p>The technology relies on recent breakthroughs in textile engineering—specifically, fabrics embedded with microscopic LEDs or color-changing polymers that can respond to electrical signals within milliseconds. When paired with increasingly sophisticated neural interfaces, the result is clothing that blurs the line between technology and fashion, mind and material.</p>
      
      <p>Early adopters describe the experience as profoundly intimate yet performative. "Wearing my thoughts visibly on my sleeve—literally—felt vulnerable at first," says lifestyle influencer Julian Kim. "But it's also incredibly freeing. It's like your clothing becomes another channel of communication."</p>
      
      <p>As with any technology that interfaces with our mental activity, neuromorphic fashion raises important questions about privacy and autonomy. Developers are working on features that allow wearers to maintain control over what aspects of their mental state are expressed and when.</p>
      
      <p>Whether neuromorphic fashion becomes mainstream or remains an avant-garde curiosity will depend not just on technological refinement but on our collective comfort with wearing our emotions for all to see.</p>
    `,
    category: 'fashion',
    author: 'Marcus Chen',
    date: 'May 7, 2025',
    readTime: 7,
    imageUrl: 'https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg',
    trending: true,
  },
  {
    id: '4',
    title: 'Biophilic Soundscapes: The New Urban Music',
    excerpt: 'How composers are integrating natural sounds into electronic music',
    content: `
      <p>In a converted warehouse in Brooklyn, hundreds of people sway to what at first sounds like conventional electronic dance music. But listen closer, and you'll notice something unusual—the rhythmic foundation isn't purely synthetic. The beats incorporate the patterned dripping of cave water, the resonant creaking of bamboo, and the synchronized chirping of cicadas, all meticulously recorded and subtly processed.</p>
      
      <p>This is biophilic sound design, a growing movement at the intersection of electronic music, environmental science, and neurology. Its practitioners create compositions that maintain the structural complexity and patterns found in natural soundscapes while blending them with electronic elements to create something entirely new.</p>
      
      <p>"We've evolved over millions of years to process and find meaning in natural sound patterns," explains Dr. Nina Rodriguez, a neuroacoustic researcher. "When we strip that away and replace it with purely synthetic sounds, something gets lost. Biophilic sound design is about reconnecting those neural pathways while creating fresh, contemporary music."</p>
      
      <p>Leading this movement are artists like Kai Forest, whose album "Emergent Patterns" uses hydrophone recordings from coral reefs as core elements, and the producer duo Mycelium, who incorporate the ultrasonic communications of fungi, slowed down to human auditory range.</p>
      
      <p>Beyond the club scene, biophilic sound design is finding applications in architectural acoustics, where buildings are being designed with sound environments that mimic the complexity and restorative qualities of natural settings. Urban planners are also exploring how these principles might counteract the psychological impacts of noise pollution in cities.</p>
      
      <p>"We're not just making music with nature sounds as novelty samples," emphasizes composer Leila Hassan. "We're learning from the temporal structures and informational density of natural soundscapes to create something that speaks to both our contemporary experiences and our evolutionary past."</p>
      
      <p>As our cities grow denser and our lives increasingly digital, this sonic movement offers a subtle but meaningful reconnection to the natural rhythms our bodies and minds instinctively understand.</p>
    `,
    category: 'music',
    author: 'Devon Taylor',
    date: 'May 5, 2025',
    readTime: 6,
    imageUrl: 'https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg',
  },
  {
    id: '5',
    title: 'Digital Memorials: Preserving Consciousness Beyond Death',
    excerpt: 'How new technologies are changing our relationship with mortality',
    content: `
      <p>Sarah Jensen visits her late grandfather every Sunday. She sits in a specially designed immersion booth, puts on a lightweight headset, and suddenly she's in his workshop—a perfect digital recreation of the space where he spent much of his life. Her grandfather's digital avatar greets her warmly, his movements, expressions, and conversation generated by an AI trained on decades of videos, audio recordings, written correspondence, and detailed interviews conducted before his death.</p>
      
      <p>This is a digital memorial, an emerging technology that's transforming how we remember and continue relationships with the deceased. Far beyond static photographs or video recordings, these interactive systems use advanced machine learning to create dynamic representations of individuals that can engage in meaningful ways with the living.</p>
      
      <p>"This isn't about denying death," explains Dr. Aiden Nakamura, chief ethicist at AfterImage, one of several companies offering these services. "It's about creating new forms of legacy and memory that reflect our increasingly digital existence."</p>
      
      <p>The technology exists on a spectrum. Basic versions function as interactive oral histories, while the most sophisticated systems attempt to model the personality, knowledge base, and conversational style of the deceased so convincingly that interactions feel genuinely authentic.</p>
      
      <p>Psychologists remain divided on the implications. "These memorials can provide comfort and may help some people process grief in healthy ways," says clinical psychologist Dr. Maya Hendricks. "But they also risk complicating the natural grieving process if people become too attached to what is, ultimately, a simulation."</p>
      
      <p>Legal and ethical questions abound as well. Who owns a person's digital likeness after death? How accurately can and should these systems represent the deceased? What happens to these digital entities over generations?</p>
      
      <p>Despite these open questions, the adoption of digital memorials continues to grow. For many, they represent not just a new way to remember loved ones, but a reimagining of what it means to leave a legacy in the digital age.</p>
    `,
    category: 'culture',
    author: 'Jason Kim',
    date: 'May 3, 2025',
    readTime: 8,
    imageUrl: 'https://images.pexels.com/photos/4144230/pexels-photo-4144230.jpeg',
  },
  {
    id: '6',
    title: 'Haptic Typography: When Text Touches Back',
    excerpt: 'The revolutionary interface design that engages our sense of touch',
    content: `
      <p>Imagine running your finger across a digital screen and feeling the serifs of a font, the texture of embossed lettering, or the subtle vibrational pattern that distinguishes one typeface from another. This is the promise of haptic typography, a rapidly evolving field at the intersection of interface design, neuroscience, and typography.</p>
      
      <p>Using advanced micro-actuators, ultrasonic vibrations, and electrostatic forces, designers can now create text that engages our sense of touch in precise and meaningful ways. "Typography has always been visual first, but humans are multisensory creatures," explains type designer Maria Gonzalez. "Haptic typography completes the experience by engaging our most emotionally resonant sense."</p>
      
      <p>The implications extend far beyond simply making digital reading more pleasurable. For people with visual impairments, haptic typography offers new dimensions of information. Different textures can convey emphasis, headings, or emotional tone without requiring sight. For readers with dyslexia, certain haptic patterns have shown promise in improving reading comprehension and speed.</p>
      
      <p>Designers are just beginning to develop the grammar of this tactile language. Should a serious news article feel different from a playful blog post? How might legal text communicate its importance through touch? These questions are driving a new field of study called "tactile semantics."</p>
      
      <p>Major technology companies are investing heavily in the hardware to support these experiences, with the next generation of tablets and phones expected to feature high-definition haptic displays as standard. Meanwhile, a growing community of independent designers is creating haptic typefaces that push the boundaries of what's possible.</p>
      
      <p>"We're moving beyond the flat glass world that has dominated digital interfaces for decades," says Dr. Hiroshi Tanaka, who leads haptic research at a major technology firm. "When text can touch you back, it fundamentally changes your relationship with digital content."</p>
    `,
    category: 'design',
    author: 'Leila Rodriguez',
    date: 'April 29, 2025',
    readTime: 5,
    imageUrl: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg',
  },
  {
    id: '7',
    title: 'Quantum Computing and the End of Material Scarcity',
    excerpt: 'How next-generation computing could revolutionize molecular manufacturing',
    content: `
      <p>In a laboratory outside of Zurich, a machine the size of a small car hums quietly. Kept at a temperature colder than deep space, shielded from electromagnetic interference, this quantum computer is designing new molecular structures atom by atom—structures that could never be discovered by human scientists in a thousand years of experimentation.</p>
      
      <p>This represents the convergence of two transformative technologies: quantum computing and molecular manufacturing. Together, they promise nothing less than an end to material scarcity as we've known it throughout human history.</p>
      
      <p>"Traditional computers simulate chemistry using approximations," explains Dr. Eliza Fernandez, quantum chemistry lead at the Institute for Advanced Materials. "Quantum computers can model electron interactions directly because they operate according to the same quantum mechanical principles. This means we can design new materials with unprecedented precision."</p>
      
      <p>The implications are staggering. Researchers have already used quantum computing to design room-temperature superconductors, ultra-efficient solar cells that double current energy conversion rates, and biodegradable plastics that break down precisely when triggered.</p>
      
      <p>As these molecular blueprints move from simulation to physical manufacturing, we're entering an era where materials can be designed for exact purposes with minimal environmental impact and maximum efficiency.</p>
      
      <p>"The historical problem with resource scarcity isn't just about the quantity of materials on Earth—it's about having the right materials with the right properties in the right places," notes economist Dr. Kwame Osei. "Quantum-designed molecular manufacturing addresses this by allowing us to create ideal materials from abundant feedstocks."</p>
      
      <p>This doesn't mean we can violate the laws of thermodynamics—energy will still be required for manufacturing, and some elements will remain naturally scarce. But our relationship with material resources may be fundamentally altered within a decade.</p>
      
      <p>The societal impacts could be as profound as the technological ones. Industries built around material scarcity—from mining to commodity trading—face disruption, while new opportunities emerge in molecular design, precision manufacturing, and material programming. Our economies, built on assumptions of scarcity, may need to find new organizing principles in a world of material abundance.</p>
    `,
    category: 'technology',
    author: 'Sanjay Mehta',
    date: 'April 25, 2025',
    readTime: 7,
    imageUrl: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
  },
  {
    id: '8',
    title: 'Generative Brutalism: The Architectural Rebellion',
    excerpt: 'How young architects are combining AI with raw materials to create a new design language',
    content: `
      <p>On the outskirts of Rotterdam stands a structure that seems to defy categorization. Its massive concrete elements appear to have grown organically rather than been constructed. Irregular openings punctuate its surface, their placement determined not by human aesthetics but by complex algorithms optimizing for light, air flow, and structural integrity. Welcome to Generative Brutalism, architecture's newest rebellion.</p>
      
      <p>This movement, led primarily by architects under 35, represents a dramatic reaction against both the sleek minimalism that has dominated contemporary architecture and the parametric smoothness of earlier algorithm-driven design. It embraces raw, unfinished materials—concrete, exposed brick, weathered steel—but deploys them according to rules generated by artificial intelligence.</p>
      
      <p>"Traditional brutalism was human-designed but celebrated raw materials. Parametricism was computer-designed but favored smooth, continuous forms," explains architect Julian Torres. "Generative brutalism combines the computational power of AI with the honesty of unfinished materials. The computer determines the form, but the physical reality of the materials is never disguised."</p>
      
      <p>The results are buildings that feel simultaneously primitive and futuristic. Structural elements that a human architect would never conceive—shaped by evolutionary algorithms that optimize for factors ranging from energy efficiency to emotional response—are rendered in materials that show every imperfection and mark of their making.</p>
      
      <p>Critics have called these buildings "hostile" and "deliberately alienating," but proponents argue they represent a necessary correction in architectural thinking. "For too long, we've tried to deny the reality of how buildings actually exist in time and space," says theorist Maya Kwon. "They weather, they show their construction, they impose their materiality. Generative brutalism acknowledges this while using the most advanced computational methods to make these buildings perform better than ever before."</p>
      
      <p>As climate considerations become increasingly central to architecture, the movement's emphasis on thermal mass, passive systems, and reduced finishing materials also represents a more sustainable approach to building—one that celebrates rather than conceals the environmental trade-offs inherent in construction.</p>
      
      <p>Whether Generative Brutalism becomes a passing provocation or a lasting influence, it has already succeeded in challenging assumptions about the relationship between digital design and physical construction.</p>
    `,
    category: 'architecture',
    author: 'Olivia James',
    date: 'April 20, 2025',
    readTime: 6,
    imageUrl: 'https://images.pexels.com/photos/3038740/pexels-photo-3038740.jpeg',
  },
];