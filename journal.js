// ==================== JOURNAL / BLOG SYSTEM ==================== //

const articlesDatabase = [
    {
        id: 1,
        slug: 'authentic-banarasi-silk',
        title: 'How to Identify Authentic Banarasi Silk',
        excerpt: 'Learn the markers of genuine Banarasi weaving and avoid counterfeit fabrics.',
        category: 'guides',
        readTime: 5,
        date: 'Dec 15, 2024',
        emoji: '👗',
        hero: 'linear-gradient(135deg, #8b4789 0%, #4a2454 100%)',
        content: `
            <div class="article-section">
                <h2>Understanding Banarasi Authenticity</h2>
                <p>Banarasi silk is one of the world's most imitated textiles. With demand high and supply constrained by handloom limitations, the market is flooded with machine-made "Banarasi-style" fabrics. Knowing the difference matters—not just for authenticity, but for honoring the artisans who create the real thing.</p>
            </div>

            <div class="article-section">
                <h2>The Weight & Feel Test</h2>
                <p><strong>Authentic Banarasi is heavy.</strong> A genuine saree weighs 700-900 grams. Machine-made imitations are often lighter (400-500g) because they use less thread and thinner zari.</p>
                <p>When you hold a real Banarasi, you feel the density of handwork. The fabric has a substantial, luxurious weight that reflects the labor invested in creating it. Drape it—it should flow with a specific gravity that no machine can replicate.</p>
            </div>

            <div class="article-section">
                <h2>The Zari Test: Real Gold vs. Fake</h2>
                <p>Traditional Banarasi weaving uses <strong>zari</strong>—gold and silver thread made from pure metallic coating on silk core. Real zari does not tarnish and maintains its luster for generations.</p>
                <ul class="article-list">
                    <li><strong>Authentic zari:</strong> Soft to touch, bends without breaking, maintains shine under light.</li>
                    <li><strong>Fake zari:</strong> Rough, stiff, tarnishes or discolors, breaks easily when bent.</li>
                </ul>
                <p>Rub the zari gently between your fingers. If the gold coating comes off on your skin, it's artificial zari. Real zari adheres permanently.</p>
            </div>

            <div class="article-section">
                <h2>The Weave Pattern Test</h2>
                <p>Machine looms create perfect, identical repeats. Handlooms create slight, beautiful variations.</p>
                <p>Look closely at the pattern. In authentic Banarasi:</p>
                <ul class="article-list">
                    <li>Motifs vary slightly in size and spacing</li>
                    <li>Some silk threads may be slightly thicker or thinner (natural variation)</li>
                    <li>The weave structure is visible up close—you can see individual threads</li>
                    <li>The pallu (decorative end) is often slightly different from the body (characteristic of handweaving)</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Speed of Production Reality</h2>
                <p>A genuine Banarasi saree takes 2-3 weeks to weave. If someone is selling authentic Banarasi in bulk at low prices, that's impossible—it violates the physics of handloom weaving.</p>
                <p>Authentic = slow. Slow = expensive. If the price seems too good, the saree almost certainly is too.</p>
            </div>

            <div class="article-section">
                <h2>Ask About the Weaver</h2>
                <p>A reputable seller should know who wove the saree and where. They should have:</p>
                <ul class="article-list">
                    <li>Stories about the artisan or workshop</li>
                    <li>Information about the region and weaving technique</li>
                    <li>Transparency about pricing and production time</li>
                </ul>
                <p>If a seller can't tell you anything about who made it, question its authenticity.</p>
            </div>

            <div class="article-section">
                <h2>The Care Test</h2>
                <p>Authentic Banarasi requires careful handwashing and delicate handling. If the seller recommends machine-washing or doesn't provide care instructions, it's not a real Banarasi—real handwoven silk demands respect.</p>
            </div>

            <div class="article-section">
                <h2>Final Thought</h2>
                <p>Authenticity is not just a feature—it's a responsibility. When you buy a real Banarasi, you're investing in continuity of a 300-year-old craft and supporting the livelihood of master weavers. The extra cost is not markup; it's payment for genuine skill.</p>
            </div>
        `
    },
    {
        id: 2,
        slug: 'chikankari-care-guide',
        title: 'Caring for Chikankari Embroidery',
        excerpt: 'How to preserve delicate hand embroidery for generations.',
        category: 'care',
        readTime: 6,
        date: 'Dec 10, 2024',
        emoji: '🧵',
        hero: 'linear-gradient(135deg, #f5d5b8 0%, #d4a574 100%)',
        content: `
            <div class="article-section">
                <h2>The Delicacy of Chikankari</h2>
                <p>Chikankari embroidery is ethereal—thousands of hand stitches creating patterns so intricate they appear almost painted. This delicacy is its beauty and its vulnerability. Proper care ensures your piece lasts lifetimes.</p>
            </div>

            <div class="article-section">
                <h2>Washing: The Golden Rules</h2>
                <p><strong>Rule 1: Hand-wash only.</strong> Never use a washing machine. The agitation will damage the embroidery threads and loosen the stitches.</p>
                <p><strong>Rule 2: Use cold water.</strong> Hot water can affect the dyes and weaken the fabric fibers.</p>
                <p><strong>Rule 3: Use mild soap.</strong> Organic, fragrance-free soap is best. Avoid bleach, strong detergents, and fabric softeners.</p>
            </div>

            <div class="article-section">
                <h2>The Washing Process</h2>
                <ol class="article-numbered-list">
                    <li>Fill a basin with cold water and add a pinch of mild soap.</li>
                    <li>Gently submerge the chikankari garment. Do not scrub or wring.</li>
                    <li>Let it soak for 10-15 minutes maximum.</li>
                    <li>Gently agitate the water with your hands—do not rub the embroidery.</li>
                    <li>Rinse thoroughly in cold water until soap residue is gone.</li>
                    <li>Gently press out water with your palms. Never wring.</li>
                </ol>
            </div>

            <div class="article-section">
                <h2>Drying: Patience Is Essential</h2>
                <p>Spread the chikankari on a clean, dry, white cloth (to prevent color transfer). Air-dry in shade—never in direct sunlight, which fades colors and weakens threads.</p>
                <p>Drying can take 24-48 hours. Don't rush it by wringing or machine-drying. Let gravity and air do the work.</p>
            </div>

            <div class="article-section">
                <h2>Ironing & Storage</h2>
                <p><strong>Ironing:</strong> If needed, iron on the reverse side only. Use a low-heat setting. Place a thin cloth between the iron and the fabric to protect the embroidery.</p>
                <p><strong>Storage:</strong> Keep in a cool, dry place away from sunlight. Store in acid-free tissue (not plastic, which traps moisture). Fold gently to avoid creases that stress the fabric. Check periodically for moths or moisture.</p>
            </div>

            <div class="article-section">
                <h2>What to Avoid</h2>
                <ul class="article-list">
                    <li>Bleach or whitening agents</li>
                    <li>Fabric softeners (they coat and damage the embroidery)</li>
                    <li>Dry cleaning (harsh chemicals damage delicate threads)</li>
                    <li>Direct sunlight (fades colors)</li>
                    <li>Tight elastic or pressure (wrinkles delicate fabric)</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>Professional Care</h2>
                <p>For heavily soiled or stained chikankari, consult a professional fabric conservator experienced with hand embroidery—not a standard dry cleaner. The investment in professional care is worth it for heirloom pieces.</p>
            </div>

            <div class="article-section">
                <h2>A Thought on Wear</h2>
                <p>The paradox of fine textiles: they're made to be worn, yet wearing causes wear. The goal isn't never to use your chikankari—it's to wear it with awareness. Each wearing, followed by gentle care, honors the artisan and the craft.</p>
            </div>
        `
    },
    {
        id: 3,
        slug: 'madhubani-symbolism',
        title: 'The Symbolism of Madhubani Motifs',
        excerpt: "'Decode the meanings behind Bihar's ancient folk painting patterns.'",
        category: 'culture',
        readTime: 7,
        date: 'Dec 5, 2024',
        emoji: '🎨',
        hero: 'linear-gradient(135deg, #f4e4c1 0%, #e8d4a8 100%)',
        content: `
            <div class="article-section">
                <h2>More Than Decoration</h2>
                <p>Madhubani painting is visual language. Every line, every motif, every color choice communicates meaning—cultural, spiritual, or narrative. To appreciate Madhubani is to learn to read a tradition.</p>
            </div>

            <div class="article-section">
                <h2>The Peacock: Beauty & Grace</h2>
                <p>The peacock (mor) is the most revered motif in Madhubani. It represents:</p>
                <ul class="article-list">
                    <li><strong>Beauty:</strong> The peacock's vibrant plumage symbolizes aesthetic perfection</li>
                    <li><strong>Divine presence:</strong> Associated with Lord Krishna in Hindu mythology</li>
                    <li><strong>Femininity:</strong> Often painted as a symbol of feminine grace and allure</li>
                    <li><strong>Auspiciousness:</strong> Considered a harbinger of good fortune</li>
                </ul>
                <p>In Madhubani tradition, the peacock is never painted realistically. Instead, it's stylized—with geometric patterns filling its body, emphasizing its role as a symbolic form rather than a literal bird.</p>
            </div>

            <div class="article-section">
                <h2>The Fish: Fertility & Prosperity</h2>
                <p>Fish (meen) represent:</p>
                <ul class="article-list">
                    <li><strong>Fertility:</strong> Fish lay thousands of eggs, symbolizing abundant progeny</li>
                    <li><strong>Prosperity:</strong> In Mithila tradition, fish symbolize wealth and abundance</li>
                    <li><strong>Life force:</strong> Movement of fish represents the flow of life energy</li>
                </ul>
                <p>Fish are often paired with water imagery and appear prominently in marriage paintings, where they bless the union with fecundity and good fortune.</p>
            </div>

            <div class="article-section">
                <h2>The Lotus: Purity & Transcendence</h2>
                <p>The lotus (kamal) is sacred across Indian traditions, and Madhubani honors this:</p>
                <ul class="article-list">
                    <li><strong>Purity:</strong> Lotus blooms despite growing in murky water—symbol of transcending impurity</li>
                    <li><strong>Enlightenment:</strong> Associated with Buddha and spiritual awakening</li>
                    <li><strong>Divine beauty:</strong> Sacred offering to gods and goddesses</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>Geometric Patterns: Order & Balance</h2>
                <p>Madhubani employs intricate geometric patterns—diamonds, stars, lattices—to represent:</p>
                <ul class="article-list">
                    <li><strong>Cosmic order:</strong> Geometric shapes reflect the structure of the universe</li>
                    <li><strong>Protection:</strong> Patterns act as symbolic barriers against evil</li>
                    <li><strong>Harmony:</strong> Balanced patterns express equilibrium in life</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>Colors: The Language of Emotion</h2>
                <p><strong>Red:</strong> Auspiciousness, fertility, celebration. Used in wedding scenes.</p>
                <p><strong>Yellow:</strong> Associated with Lord Krishna and spring. Represents joy and prosperity.</p>
                <p><strong>Green:</strong> Nature, growth, prosperity. Often used in scenes of abundance.</p>
                <p><strong>Black:</strong> Used for outlines and to create contrast. Represents stability and grounding.</p>
                <p>In traditional Madhubani, colors were derived from natural sources—turmeric (yellow), indigo (blue), coal (black)—each carrying its own cultural weight.</p>
            </div>

            <div class="article-section">
                <h2>Narrative Paintings: Visual Storytelling</h2>
                <p>Many Madhubani pieces depict scenes from Hindu mythology:</p>
                <ul class="article-list">
                    <li><strong>Radha-Krishna scenes:</strong> Depict love, devotion, divine romance</li>
                    <li><strong>Wedding scenes:</strong> Celebrate marriage and fertility blessings</li>
                    <li><strong>Nature scenes:</strong> Forest episodes, tree worship, seasonal cycles</li>
                    <li><strong>Daily life:</strong> Women bathing, festivals, household activities—elevating the mundane to the sacred</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Border: Framing Significance</h2>
                <p>Madhubani paintings are always bordered. These borders serve multiple purposes:</p>
                <ul class="article-list">
                    <li>Create a sacred boundary containing the painting's energy</li>
                    <li>Often feature repeated motifs (flowers, birds, geometric patterns)</li>
                    <li>Reflect meticulous craftsmanship and respect for the art</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>Reading Your Madhubani</h2>
                <p>When you look at a Madhubani piece, ask:</p>
                <ul class="article-list">
                    <li>What animals or plants are depicted? What do they symbolize?</li>
                    <li>What colors dominate? What emotions or occasions do they suggest?</li>
                    <li>Are there narrative elements? What story is being told?</li>
                    <li>How do the geometric patterns balance the organic elements?</li>
                </ul>
                <p>Understanding these symbols transforms Madhubani from beautiful decoration into profound cultural expression.</p>
            </div>
        `
    },
    {
        id: 4,
        slug: 'handloom-vs-machine',
        title: 'Handloom vs Machine-Made: What\'s the Real Difference?',
        excerpt: 'Understanding the differences that justify the cost of handcrafted textiles.',
        category: 'guides',
        readTime: 8,
        date: 'Nov 28, 2024',
        emoji: '⚙️',
        hero: 'linear-gradient(135deg, #8b7969 0%, #5c4e42 100%)',
        content: `
            <div class="article-section">
                <h2>Why the Price Difference?</h2>
                <p>A handloom saree costs 10-50x more than a machine-made "saree-style" fabric. This isn't markup. It's the reflection of fundamentally different production methods, material quality, and cultural value.</p>
            </div>

            <div class="article-section">
                <h2>Production Speed</h2>
                <p><strong>Handloom:</strong> A Banarasi saree takes 18-21 days of full-time work by a skilled weaver.</p>
                <p><strong>Machine loom:</strong> A machine produces the same linear footage in 2-3 hours.</p>
                <p>Speed alone explains price. When a weaver works 8-10 hours daily for 3 weeks on a single saree, their labor cost is substantial. There's no way around this without compromising the artisan's livelihood.</p>
            </div>

            <div class="article-section">
                <h2>Material Quality</h2>
                <p><strong>Handloom textiles:</strong></p>
                <ul class="article-list">
                    <li>Use premium materials: 100% pure silk, fine cotton, quality zari</li>
                    <li>The weaver selects materials carefully for each piece</li>
                    <li>Higher fiber count results in durability and longevity</li>
                </ul>
                <p><strong>Machine textiles:</strong></p>
                <ul class="article-list">
                    <li>Often blend silk with polyester or use synthetic zari</li>
                    <li>Lower fiber count to reduce production costs</li>
                    <li>Designed for shorter lifespan and replacement cycles</li>
                </ul>
                <p>A real Banarasi saree lasts 20-30 years with proper care. A machine-made imitation often shows wear within 2-3 years.</p>
            </div>

            <div class="article-section">
                <h2>Pattern & Artistry</h2>
                <p><strong>Handloom:</strong></p>
                <ul class="article-list">
                    <li>Weaver creates patterns by hand using thousands of individual thread selections</li>
                    <li>Patterns are original—each saree is unique</li>
                    <li>Weaver has creative input and can improvise or customize</li>
                    <li>Pattern complexity is limited only by the weaver's imagination</li>
                </ul>
                <p><strong>Machine loom:</strong></p>
                <ul class="article-list">
                    <li>Patterns are programmed once and repeated identically</li>
                    <li>Complex patterns require expensive setup; simpler patterns dominate</li>
                    <li>No customization without reprogram—expensive for small runs</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Human Factor</h2>
                <p>A handloom weaver:</p>
                <ul class="article-list">
                    <li>Brings decades of training and intuition to every piece</li>
                    <li>Can adjust tension, thread thickness, and pattern on the fly</li>
                    <li>Creates pieces that respond to the specific materials and conditions</li>
                    <li>Develops relationships with customers who commission custom work</li>
                </ul>
                <p>A machine operator:</p>
                <ul class="article-list">
                    <li>Loads settings and monitors the machine</li>
                    <li>Has little creative input in the finished product</li>
                    <li>Is replaceable—the skill lies in the machine, not the person</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>Environmental Impact</h2>
                <p><strong>Handlooms:</strong></p>
                <ul class="article-list">
                    <li>Use only the materials needed—zero waste</li>
                    <li>No chemical processing or dyeing (if natural dyes are used)</li>
                    <li>Powered by human effort, not electricity</li>
                </ul>
                <p><strong>Machine looms:</strong></p>
                <ul class="article-list">
                    <li>Operate at high speed, consuming significant electricity</li>
                    <li>Often use synthetic dyes and chemical treatments</li>
                    <li>Production at scale creates waste and water pollution</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>Durability & Longevity</h2>
                <p><strong>A handloom textile:</strong> Strengthens with age and use. Proper care means it lasts 20-30+ years and becomes more beautiful.</p>
                <p><strong>Machine-made imitation:</strong> Often designed for obsolescence. The fabric degrades, colors fade, and seams weaken within a few years, creating demand for replacement.</p>
            </div>

            <div class="article-section">
                <h2>The True Cost of "Cheap"</h2>
                <p>When you buy a machine-made "Banarasi-style" fabric for 1/10th the price:</p>
                <ul class="article-list">
                    <li>You're not getting the same product at a discount—you're getting an inferior alternative</li>
                    <li>You support a system that pays weavers pennies while capturing the value</li>
                    <li>You participate in the decline of a 300-year-old craft</li>
                    <li>You buy a product designed to fail, contributing to textile waste</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Real Value Proposition</h2>
                <p>Handloom textiles cost more because they represent:</p>
                <ul class="article-list">
                    <li><strong>Genuine skill:</strong> Decades of training</li>
                    <li><strong>Time:</strong> Weeks of focused, skilled labor</li>
                    <li><strong>Quality materials:</strong> Premium fibers and dyes</li>
                    <li><strong>Uniqueness:</strong> Your piece is one-of-a-kind</li>
                    <li><strong>Longevity:</strong> An investment that lasts lifetimes</li>
                    <li><strong>Cultural continuity:</strong> Support for living traditions</li>
                    <li><strong>Fair labor:</strong> Equitable compensation for artisans</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Choice Is Yours</h2>
                <p>We don't argue that everyone should buy handloom. But we ask that you understand what you're choosing. If you choose machine-made, own it. If you choose handloom, know that every rupee supports not just a product, but a living tradition and a skilled human being.</p>
            </div>
        `
    },
    {
        id: 5,
        slug: 'artisan-story-asha',
        title: 'The Artisan Behind Your Banarasi: Asha Sharma\'s Story',
        excerpt: 'Meet the master weaver who creates the pieces you wear.',
        category: 'stories',
        readTime: 6,
        date: 'Nov 20, 2024',
        emoji: '👩‍🎨',
        hero: 'linear-gradient(135deg, #8b4789 0%, #4a2454 100%)',
        content: `
            <div class="article-section">
                <h2>From Grandmother's Hands to Yours</h2>
                <p>Asha Sharma was eight years old when her grandmother first placed a small thread in her hands and showed her the motions of the loom. She didn't know then that she would spend the next 32 years perfecting this single craft, or that pieces she would create would find homes across the world.</p>
            </div>

            <div class="article-section">
                <h2>Growing Up in Varanasi</h2>
                <p>Varanasi is not just a city—it's a living museum of weaving. Entire neighborhoods are dedicated to handlooms. Children grow up hearing the rhythmic clack of looms, the language of threads, the conversations between weavers that span generations.</p>
                <p>For Asha, the loom was not a choice—it was inheritance. Her grandmother wove. Her mother wove. The tools, the knowledge, the philosophy of how to create beauty from thread—all passed through the women of her family.</p>
            </div>

            <div class="article-section">
                <h2>The Training Years</h2>
                <p>There is no school for Banarasi weaving. Learning happens through observation, repetition, and correction. Asha's grandmother would sit beside her for hours, watching her hands, adjusting the tension, demonstrating the proper way to pass thread.</p>
                <p>"I must have made the same pattern 1,000 times before my grandmother nodded with approval," Asha recalls. "There is no shortcut. Your hands must know the way, not just your mind."</p>
                <p>By her late teens, Asha was weaving sarees with her grandmother. Not just helping—actually creating pieces sold to customers. The responsibility was enormous. Every thread counted. Every motif had to be perfect.</p>
            </div>

            <div class="article-section">
                <h2>Marriage & Continuity</h2>
                <p>At 22, Asha married another weaver's son. It might have been the end of her weaving career—many women stop when they marry and take on household responsibilities. But Asha's mother-in-law was also a weaver, and together they created space for Asha to continue her craft.</p>
                <p>"My children grew up in the sound of the loom," she says. "It was their lullaby."</p>
            </div>

            <div class="article-section">
                <h2>The Changing Market</h2>
                <p>By the 1990s, the handloom market was collapsing. Cheap machine-made imitations flooded the market. Middlemen began paying less for sarees while selling them for the same price. Younger weavers left for factory jobs that paid more for less labor.</p>
                <p>Asha's own daughter chose not to learn weaving. "I wanted her to have choices," Asha says. "But part of me grieved."</p>
                <p>Yet Asha continued. Why? "Because my grandmother's hands taught my hands. I cannot abandon this without abandoning them."</p>
            </div>

            <div class="article-section">
                <h2>A Day in Asha's Life</h2>
                <p>Asha wakes at 5 AM. She drinks tea, says prayers, and sits at her loom by 6 AM. She weaves for 8-10 hours, sometimes more if she's close to finishing a piece. The work is repetitive yet demanding. Her hands must make thousands of precise movements with absolute consistency. A single mistake means unraveling hours of work.</p>
                <p>Between looms, she eats, spends time with grandchildren, and teaches a young apprentice—a girl from a neighboring family who wants to learn, despite knowing the market is uncertain.</p>
                <p>"This girl has talent," Asha says. "Maybe she will teach her own children, maybe not. But I will give her the choice that comes from knowing the craft."</p>
            </div>

            <div class="article-section">
                <h2>What She Creates</h2>
                <p>Asha specializes in classical Banarasi patterns—the traditional designs that have been woven for 300 years. Each saree takes 18-20 days. She creates about 20 sarees per year—not a high volume, but each one is a masterpiece.</p>
                <p>Her favorite pattern is the "tilla," a small floral motif that fills the entire saree in carefully balanced arrangement. Creating tilla requires the weaver to be present with every single motif. There's no autopilot. Every flower matters.</p>
            </div>

            <div class="article-section">
                <h2>The Philosophy Behind Her Work</h2>
                <p>"I think about who will wear this saree," Asha says. "I imagine her—perhaps a bride, perhaps a woman celebrating a festival. I imagine her happiness, her pride in wearing something handmade, something that took me three weeks. This imagining keeps me focused. This saree is not just fabric—it is a gift to a stranger."</p>
                <p>This philosophy—weaving for the imagined wearer—is what separates craft from labor. It's why her sarees have a presence that no machine can create.</p>
            </div>

            <div class="article-section">
                <h2>Looking Forward</h2>
                <p>Asha is in her 60s now. At an age when many in her profession have retired (or been forced out), she continues. Her hands, weathered by five decades of work, still know the way. Her eyes, with glasses now, still see the patterns clearly.</p>
                <p>"How long will I weave?" she asks. "Until my hands cannot. And when I cannot, I hope someone remembers what these hands created."</p>
            </div>

            <div class="article-section">
                <h2>A Note to Wearers</h2>
                <p>When Asha's saree comes to you, it carries three weeks of her life. It carries the knowledge of her grandmother, her mother, and decades of her own skill. Care for it, wear it with pride, and if you can, tell its story. Because the saree is not just yours—it belongs also to the hands that created it.</p>
            </div>
        `
    },
    {
        id: 6,
        slug: 'natural-dyes-colors',
        title: 'Natural Dyes: Colors Drawn from the Earth',
        excerpt: 'Discover the ancient art of deriving colors from plants, minerals, and tradition.',
        category: 'culture',
        readTime: 7,
        date: 'Nov 12, 2024',
        emoji: '🎨',
        hero: 'linear-gradient(135deg, #d4a574 0%, #b8956f 100%)',
        content: `
            <div class="article-section">
                <h2>Before Chemistry, There Was Nature</h2>
                <p>For thousands of years, humans dyed textiles using materials from the earth: indigo plants, madder roots, turmeric, walnut shells, pomegranate leaves. Each region developed its own palette based on what grew locally and what knowledge had accumulated through generations.</p>
                <p>In the modern era of synthetic dyes, these natural methods feel archaic. But they're making a quiet comeback—not out of nostalgia, but because they produce colors that chemicals cannot: depth, vibrancy, and longevity that improve with age.</p>
            </div>

            <div class="article-section">
                <h2>Indigo: The King of Blues</h2>
                <p>Indigo has been the most celebrated natural dye for over 4,000 years. Ancient Egyptians used it. Indian merchants traded it for centuries. It became such a valuable commodity that colonial powers went to war over it.</p>
                <p><strong>How it works:</strong> Indigo is derived from indigofera plant leaves. The leaves are fermented, oxidized, and processed into a powder. When applied to fabric, indigo creates the deepest, most stable blue known.</p>
                <p><strong>The magic:</strong> Unlike chemical dyes, indigo improves with age. The blue deepens, becoming richer and more complex. A 20-year-old indigo garment is more beautiful than a new one.</p>
            </div>

            <div class="article-section">
                <h2>Madder: The Reds of History</h2>
                <p>Madder root has been used to dye fabric since ancient times. Archaeological evidence shows madder-dyed fabrics from 2000 BCE. European traders called it "the red gold" because of its value and rarity.</p>
                <p><strong>How it works:</strong> The root is dried, crushed, and used to dye fabrics over several days of careful heating and cooling. The red that emerges is luminous—not the flat red of synthetic dyes, but layered, almost glowing.</p>
                <p><strong>The color:</strong> Madder produces a range from orange-red to deep burgundy depending on the iron content in water, temperature, and other factors. This variability is part of its charm—no two batches are identical.</p>
            </div>

            <div class="article-section">
                <h2>Turmeric: The Yellow of Joy</h2>
                <p>Turmeric, the same spice used in cooking, creates a brilliant yellow dye. In Indian tradition, turmeric has both sacred and practical significance—used in ceremonies and on fabric.</p>
                <p><strong>Limitation:</strong> Turmeric yellow is not lightfast on cotton unless combined with other mordants. This is why you'll see turmeric used primarily on silk or in combination with indigo (creating greens).</p>
            </div>

            <div class="article-section">
                <h2>Walnut & Pomegranate: The Browns</h2>
                <p>Browns are created from walnut husks and pomegranate leaves—materials that would otherwise be waste. These produce rich, warm browns that age beautifully.</p>
                <p>In Bihar's natural dye traditions, walnut brown is mixed with indigo at different stages to create a range of colors from green-brown to deep bronze.</p>
            </div>

            <div class="article-section">
                <h2>Cochineal: The Crimson</h2>
                <p>Cochineal is derived from insects—specifically, the scale insect that lives on cactus plants. When crushed, these insects yield an intensely crimson dye. While not local to India, cochineal was historically traded and used in luxury fabrics.</p>
                <p>It takes 70,000 insects to produce one pound of dye—a reminder of the cost and scarcity of truly fine color.</p>
            </div>

            <div class="article-section">
                <h2>The Process: Chemistry Without Chemistry</h2>
                <p>Natural dyeing involves steps:</p>
                <ol class="article-numbered-list">
                    <li><strong>Preparation:</strong> Fabric is cleaned thoroughly to remove oils and impurities.</li>
                    <li><strong>Mordanting:</strong> Fabric is treated with natural mordants (alum, tannin) that help dye adhere to fibers. This is crucial—without mordants, natural dyes wash out.</li>
                    <li><strong>Dyeing:</strong> Fabric is slowly immersed in dye vat at specific temperatures, sometimes for days.</li>
                    <li><strong>Oxidation:</strong> For some dyes (especially indigo), the dyed fabric is oxidized in air, which deepens the color.</li>
                    <li><strong>Rinsing & drying:</strong> Careful rinsing removes excess dye. Drying is slow, in shade.</li>
                </ol>
            </div>

            <div class="article-section">
                <h2>Why Natural Dyes Cost More</h2>
                <ul class="article-list">
                    <li><strong>Time:</strong> A single dye batch can take weeks to prepare and apply.</li>
                    <li><strong>Labor:</strong> Each step requires attention and skill.</li>
                    <li><strong>Unpredictability:</strong> Weather, water chemistry, plant variety—all affect the outcome. There is less control, more risk.</li>
                    <li><strong>Yield:</strong> You get less usable dye per plant than synthetic equivalents.</li>
                    <li><strong>Knowledge:</strong> Master dyers are rare and their expertise is valuable.</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Sustainability Story</h2>
                <p>Natural dyes are biodegradable and non-toxic—they don't create the chemical waste that synthetic dyes do. Wastewater from natural dye facilities poses no pollution risk. The process is circular: plant waste becomes dye, dye becomes fabric, fabric eventually decomposes.</p>
                <p>Synthetic dyes, meanwhile, are a major source of water pollution in textile regions. The cost of cheap synthetic color is borne by ecosystems and communities downstream.</p>
            </div>

            <div class="article-section">
                <h2>Choosing Natural Dyes</h2>
                <p>When buying a naturally dyed fabric, expect:</p>
                <ul class="article-list">
                    <li><strong>Subtle variation:</strong> No two pieces will be identical—that's proof of natural origin.</li>
                    <li><strong>Deeper color over time:</strong> The color becomes richer, not fades.</li>
                    <li><strong>Complex undertones:</strong> Colors have depth and character.</li>
                    <li><strong>Higher price:</strong> But also greater longevity.</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Future of Natural Dyes</h2>
                <p>As awareness of synthetic dye pollution grows, interest in natural dyes is reviving. Young dyers are learning the craft. Brands are sourcing naturally dyed fabrics. It's a quiet movement, but it's real.</p>
                <p>The irony: what was abandoned as "outdated" is now recognized as "sustainable." Sometimes the old way is the wise way.</p>
            </div>
        `
    },
    {
        id: 7,
        slug: 'handcraft-cost-justification',
        title: 'Why Handcrafted Costs What It Costs',
        excerpt: 'Breaking down the true economics of artisan-made goods.',
        category: 'culture',
        readTime: 5,
        date: 'Nov 1, 2024',
        emoji: '💰',
        hero: 'linear-gradient(135deg, #6b4423 0%, #3d2817 100%)',
        content: `
            <div class="article-section">
                <h2>The Uncomfortable Question</h2>
                <p>If a handwoven saree takes three weeks and costs ₹8,500, is it reasonable? Consumers often compare to machine-made alternatives costing ₹800-1,500 and question the math. This is a fair question. Let's do the numbers.</p>
            </div>

            <div class="article-section">
                <h2>The Weaver's Time</h2>
                <p>A Banarasi weaver works 8-10 hours per day, 6 days a week, for 3 weeks to complete one saree.</p>
                <p><strong>Total work hours: 168 hours</strong></p>
                <p>For this work, the weaver receives approximately ₹5,000-6,000 in direct payment. This is NOT the retail price—this is what the artisan actually gets.</p>
                <p><strong>Hourly wage: ₹30-35</strong></p>
                <p>Is this fair? Context: the Indian minimum wage varies by state but averages around ₹350-400 per day for unskilled work. A skilled weaver earning ₹30-35/hour is barely above minimum wage, despite 30+ years of training.</p>
            </div>

            <div class="article-section">
                <h2>Why the Gap Between Artisan Payment & Retail Price?</h2>
                <p>If the weaver receives ₹5,000 and you pay ₹8,500, where does the ₹3,500 go?</p>
                <ul class="article-list">
                    <li><strong>Material cost:</strong> ₹1,200-1,500 (silk thread, zari, etc.)</li>
                    <li><strong>Middleman/dealer:</strong> ₹800-1,000 (broker fee)</li>
                    <li><strong>Transport & logistics:</strong> ₹300-400</li>
                    <li><strong>Seller margin:</strong> ₹500-700 (retailer profit)</li>
                </ul>
                <p>This is a healthier distribution, but it shows why at-scale middlemen are so destructive. The weaver is the one producing 100% of the value but receiving 60% of the price.</p>
            </div>

            <div class="article-section">
                <h2>The Real Cost of Weaving</h2>
                <p>What else is embedded in that ₹5,000?</p>
                <ul class="article-list">
                    <li><strong>Tool maintenance & replacement:</strong> The loom is expensive. Repairs are costly. No paid maintenance budget exists.</li>
                    <li><strong>Downtime:</strong> Not every week yields a finished saree. There are setups, restarts, failed experiments. The ₹5,000 is for finished pieces, not total time spent.</li>
                    <li><strong>Apprenticeship (unpaid):</strong> Weavers teach young people—weeks of training that generate zero income but cost time.</li>
                    <li><strong>Health costs:</strong> Eye strain, repetitive stress injuries, back pain—occupational hazards without insurance.</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Hidden Subsidy</h2>
                <p>When you buy from Sanskriti at ₹8,500:</p>
                <ul class="article-list">
                    <li>You pay for the material (real cost)</li>
                    <li>You pay for the artisan's skilled labor at a fair rate</li>
                    <li>You allow the weaver to maintain dignity and investment in their craft</li>
                    <li>You participate in the continuity of a 300-year tradition</li>
                </ul>
                <p>When you buy a ₹1,000 "Banarasi" from a discount site:</p>
                <ul class="article-list">
                    <li>The artisan received ₹200-300 (or possibly made nothing—it's machine-made)</li>
                    <li>The middleman and retailer split ₹700-800</li>
                    <li>You subsidized the retailer's profit, not the artisan's livelihood</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>Capacity & Economics</h2>
                <p>A weaver can produce ~20 sarees per year. At ₹5,000 per saree, annual income is ₹100,000. For a family of 4-5, this is survival-level income in many regions.</p>
                <p>To increase production, a weaver would need to:</p>
                <ul class="article-list">
                    <li>Work faster (impossible—quality would suffer)</li>
                    <li>Work longer hours (unsustainable—already 10-hour days)</li>
                    <li>Hire and train assistants (expensive, requires capital they don't have)</li>
                </ul>
                <p>Handcraft economics don't scale. There's a reason why handcrafted goods are expensive—you cannot make them cheaper without destroying them.</p>
            </div>

            <div class="article-section">
                <h2>The Comparison Trap</h2>
                <p>You cannot compare handloom to machine-made on price. They are fundamentally different products:</p>
                <table class="article-table">
                    <tr>
                        <td><strong>Factor</strong></td>
                        <td><strong>Handloom</strong></td>
                        <td><strong>Machine-Made</strong></td>
                    </tr>
                    <tr>
                        <td>Production time</td>
                        <td>3 weeks</td>
                        <td>2 hours</td>
                    </tr>
                    <tr>
                        <td>Material quality</td>
                        <td>Premium, pure</td>
                        <td>Often blended, synthetic</td>
                    </tr>
                    <tr>
                        <td>Lifespan</td>
                        <td>20-30 years</td>
                        <td>2-3 years</td>
                    </tr>
                    <tr>
                        <td>Uniqueness</td>
                        <td>One-of-a-kind</td>
                        <td>Mass replicated</td>
                    </tr>
                    <tr>
                        <td>Cost per wear (over lifespan)</td>
                        <td>₹15-20</td>
                        <td>₹100-150</td>
                    </tr>
                </table>
            </div>

            <div class="article-section">
                <h2>What Fair Pricing Looks Like</h2>
                <p>At Sanskriti, we aim for a distribution that respects the artisan:</p>
                <ul class="article-list">
                    <li>Weaver receives 60%+ of retail price (the creator captures the majority)</li>
                    <li>Materials cost is paid in full (no corners cut)</li>
                    <li>Operational costs (logistics, platform) are minimized</li>
                    <li>Margin is modest but sufficient to invest in artisan relationships and growth</li>
                </ul>
            </div>

            <div class="article-section">
                <h2>The Bottom Line</h2>
                <p>Handcrafted costs what it costs because:</p>
                <ul class="article-list">
                    <li>The creator is compensated fairly for 3 weeks of skilled labor</li>
                    <li>Materials are authentic and durable</li>
                    <li>The product will last decades, not years</li>
                    <li>You preserve a living tradition and support a human being</li>
                </ul>
                <p>This is not greed. This is respect.</p>
            </div>
        `
    }
];

// ==================== JOURNAL LANDING PAGE ==================== //
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('articlesGrid')) {
        renderArticleGrid('all');
        attachFilterHandlers();
    } else if (document.getElementById('articleBody')) {
        loadArticle();
    }
});

// ==================== RENDER ARTICLE GRID ==================== //
function renderArticleGrid(category) {
    const grid = document.getElementById('articlesGrid');
    
    let filtered = articlesDatabase;
    if (category !== 'all') {
        filtered = articlesDatabase.filter(a => a.category === category);
    }

    grid.innerHTML = filtered.map(article => `
        <article class="article-card">
            <a href="article.html?slug=${article.slug}">
                <div class="article-card-image" style="background: ${article.hero};">
                    <span class="article-emoji">${article.emoji}</span>
                </div>
                <div class="article-card-content">
                    <div class="article-card-category">${getCategoryLabel(article.category)}</div>
                    <h3 class="article-card-title">${article.title}</h3>
                    <p class="article-card-excerpt">${article.excerpt}</p>
                    <div class="article-card-meta">
                        <span>${article.date}</span>
                        <span class="separator">•</span>
                        <span>${article.readTime} min read</span>
                    </div>
                </div>
            </a>
        </article>
    `).join('');
}

// ==================== FILTER HANDLERS ==================== //
function attachFilterHandlers() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderArticleGrid(category);
        });
    });
}

// ==================== LOAD INDIVIDUAL ARTICLE ==================== //
function loadArticle() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    if (!slug) {
        document.getElementById('articleBody').innerHTML = '<p>Article not found</p>';
        return;
    }

    const article = articlesDatabase.find(a => a.slug === slug);
    
    if (!article) {
        document.getElementById('articleBody').innerHTML = '<p>Article not found</p>';
        return;
    }

    // Update page title
    document.title = `${article.title} | Sanskriti Traditional`;

    // Update breadcrumb
    document.getElementById('breadcrumbArticle').textContent = article.title;

    // Update hero
    document.getElementById('articleHero').style.background = article.hero;
    document.getElementById('articleCategory').textContent = getCategoryLabel(article.category);
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleDate').textContent = article.date;
    document.getElementById('articleReadTime').textContent = `${article.readTime} min read`;

    // Update article body
    document.getElementById('articleBody').innerHTML = article.content;

    // Load related articles
    loadRelatedArticles(article.id);
}

// ==================== LOAD RELATED ARTICLES ==================== //
function loadRelatedArticles(currentId) {
    const current = articlesDatabase.find(a => a.id === currentId);
    const related = articlesDatabase
        .filter(a => a.id !== currentId && a.category === current.category)
        .slice(0, 3);

    const container = document.getElementById('relatedArticles');
    container.innerHTML = related.map(article => `
        <article class="related-article-card">
            <a href="article.html?slug=${article.slug}">
                <div class="related-article-image" style="background: ${article.hero};">
                    <span>${article.emoji}</span>
                </div>
                <h4>${article.title}</h4>
                <p class="related-article-meta">${article.readTime} min read</p>
            </a>
        </article>
    `).join('');
}

// ==================== UTILITY: Get Category Label ==================== //
function getCategoryLabel(category) {
    const labels = {
        guides: 'Craft Guides',
        culture: 'Culture & History',
        care: 'Care Instructions',
        stories: 'Artisan Stories'
    };
    return labels[category] || category;
}

// ==================== FOOTER SUBSCRIBE ==================== //
document.addEventListener('DOMContentLoaded', () => {
    const subscribeBtn = document.querySelector('.footer-subscribe');
    const emailInput = document.querySelector('.footer-email');

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            if (email && email.includes('@')) {
                alert('Thank you for subscribing! 🙏');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });

        emailInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }
});
