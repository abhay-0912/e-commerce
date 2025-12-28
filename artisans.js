// ==================== ARTISANS PAGE ==================== //

// Sample artisan data (can be expanded or connected to backend)
const artisansData = [
    {
        id: 1,
        name: 'Asha Sharma',
        craft: 'Banarasi Textiles',
        region: 'Varanasi, Uttar Pradesh',
        emoji: '🧵',
        story: {
            intro: 'Asha learned the art of Banarasi weaving from her grandmother at age 8.',
            experience: '32 years of practice',
            technique: 'Traditional jacquard loom weaving with silk and zari (gold thread).',
            quote: 'I learned this craft from my grandmother. Every motif has meaning — it tells the stories of our ancestors.',
            process: 'Each piece takes 15-20 days of careful work. The patterns are created by hand, thread by thread.',
            values: 'Asha believes that true beauty is in patience and authenticity.'
        }
    },
    {
        id: 2,
        name: 'Rajesh Kumar',
        craft: 'Lucknow Chikankari',
        region: 'Lucknow, Uttar Pradesh',
        emoji: '🧵',
        story: {
            intro: 'Rajesh is a master of chikankari, the delicate hand-embroidery that has defined Lucknow for centuries.',
            experience: '28 years of practice',
            technique: 'Hand embroidery on cotton and silk using traditional motifs.',
            quote: 'Chikankari is not just embroidery—it\'s a way of preserving our culture. Every stitch counts.',
            process: 'A single piece can involve 200+ hours of meticulous hand embroidery. The craftsmanship is in the details.',
            values: 'Rajesh is committed to training the next generation of artisans.'
        }
    },
    {
        id: 3,
        name: 'Priya Devi',
        craft: 'Natural Dye Textiles',
        region: 'Bihar',
        emoji: '🎨',
        story: {
            intro: 'Priya specializes in natural dyes, sourced from plants, minerals, and ancient recipes passed down through families.',
            experience: '18 years of practice',
            technique: 'Indigo, madder, turmeric, and walnut-based dyes applied to handwoven fabrics.',
            quote: 'Natural dyes connect us to the earth. Every color tells the story of a plant, a season, a generation.',
            process: 'Dyeing with natural materials takes time—sometimes weeks. But the colors last forever and feel alive.',
            values: 'Priya is passionate about sustainable, chemical-free production.'
        }
    },
    {
        id: 4,
        name: 'Deepak Singh',
        craft: 'Pottery & Ceramics',
        region: 'Odisha',
        emoji: '🏺',
        story: {
            intro: 'Deepak comes from a family of potters. He works with clay sourced from the rivers of Odisha.',
            experience: '25 years of practice',
            technique: 'Hand-thrown pottery using traditional wheel and kiln-fired techniques.',
            quote: 'Clay teaches you patience. You can\'t rush it—it has to be ready on its own time.',
            process: 'From clay to finished piece, each pot is shaped by hand. No two are identical.',
            values: 'Deepak preserves ancient pottery traditions while creating for modern homes.'
        }
    },
    {
        id: 5,
        name: 'Meera Nair',
        craft: 'Kashmiri Papier-Mâché',
        region: 'Kashmir',
        emoji: '🎨',
        story: {
            intro: 'Meera is an artist in papier-mâché, a craft that requires immense skill and attention to detail.',
            experience: '22 years of practice',
            technique: 'Hand-crafted papier-mâché with intricate hand-painted designs.',
            quote: 'Every piece is a story. The patterns are inspired by our mountains, our history, our love for beauty.',
            process: 'A single decorative box can involve 30+ layers of papier-mâché and weeks of hand-painting.',
            values: 'Meera is dedicated to keeping Kashmiri handicrafts alive.'
        }
    },
    {
        id: 6,
        name: 'Suresh Das',
        craft: 'Rajasthani Block Printing',
        region: 'Rajasthan',
        emoji: '🖨️',
        story: {
            intro: 'Suresh is a master of block printing, an ancient technique that transforms fabric into art.',
            experience: '35 years of practice',
            technique: 'Hand-carved wooden blocks used to print patterns on cotton and silk.',
            quote: 'Block printing is an art that demands precision and soul. You can\'t fake it—the hands know the truth.',
            process: 'Each color requires a separate hand-carved block. A single piece can use 5-10 different blocks.',
            values: 'Suresh trains young artisans to ensure this art survives.'
        }
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderArtisansGrid();
    attachModalHandlers();
    checkUrlForAutoOpenStory();
});

function checkUrlForAutoOpenStory() {
    const params = new URLSearchParams(window.location.search);
    const artisanId = params.get('artisanId');
    if (artisanId) {
        const id = parseInt(artisanId);
        setTimeout(() => openStory(id), 300); // Small delay to ensure DOM is ready
    }
}

function renderArtisansGrid() {
    const grid = document.getElementById('artisansGrid');
    grid.innerHTML = artisansData.map(artisan => `
        <div class="artisan-card" onclick="openStory(${artisan.id})">
            <div class="artisan-portrait">${artisan.emoji}</div>
            <div class="artisan-info">
                <div class="artisan-name">${artisan.name}</div>
                <div class="artisan-craft">${artisan.craft}</div>
                <div class="artisan-region">📍 ${artisan.region}</div>
                <div class="artisan-cta">
                    <button type="button">👉 View Story</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openStory(id) {
    const artisan = artisansData.find(a => a.id === id);
    if (!artisan) return;

    const storyContent = document.getElementById('storyContent');
    const story = artisan.story;

    storyContent.innerHTML = `
        <div class="story-portrait">${artisan.emoji}</div>
        <div class="story-header">
            <div class="story-name">${artisan.name}</div>
            <div class="story-craft">${artisan.craft}</div>
            <div class="story-region">📍 ${artisan.region}</div>
        </div>

        <div class="story-section">
            <p>${story.intro}</p>
        </div>

        <div class="story-section">
            <h4>Experience</h4>
            <p>${story.experience}</p>
        </div>

        <div class="story-section">
            <h4>Technique</h4>
            <p>${story.technique}</p>
        </div>

        <div class="story-quote">"${story.quote}"</div>

        <div class="story-section">
            <h4>The Process</h4>
            <p>${story.process}</p>
        </div>

        <div class="story-section">
            <h4>Our Values</h4>
            <p>${story.values}</p>
        </div>
    `;

    document.getElementById('storyModal').classList.remove('hidden');
}

function attachModalHandlers() {
    const modal = document.getElementById('storyModal');
    const closeBtn = document.getElementById('closeStory');

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    });
}
