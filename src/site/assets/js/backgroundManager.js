// Create a more efficient image preloader
class BackgroundManager {
    constructor() {
        this.backgrounds = [
            '/assets/js/backgrounds/image (1).jpeg',
        '/assets/js/backgrounds/image (2).jpeg',
        '/assets/js/backgrounds/image (3).jpeg',
        '/assets/js/backgrounds/image (4).jpeg',
        '/assets/js/backgrounds/image (5).jpeg',
        '/assets/js/backgrounds/image (6).jpeg',
        '/assets/js/backgrounds/image (7).jpeg',
        '/assets/js/backgrounds/image (8).jpeg',
        '/assets/js/backgrounds/image (9).jpeg',
        '/assets/js/backgrounds/image (10).jpeg',
        '/assets/js/backgrounds/image (11).jpeg',
        '/assets/js/backgrounds/image (12).jpeg',
        '/assets/js/backgrounds/image (13).jpeg',
        '/assets/js/backgrounds/image (14).jpeg',
        '/assets/js/backgrounds/image (15).jpeg',
        '/assets/js/backgrounds/image (16).jpeg',
        '/assets/js/backgrounds/image (17).jpeg',
        '/assets/js/backgrounds/image (18).jpeg',
        '/assets/js/backgrounds/image (19).jpeg',
        '/assets/js/backgrounds/image (20).jpeg',
        '/assets/js/backgrounds/image (21).jpeg',
        '/assets/js/backgrounds/image (22).jpeg',
        '/assets/js/backgrounds/image (23).jpeg',
        '/assets/js/backgrounds/image (24).jpeg',
        '/assets/js/backgrounds/image (25).jpeg',
        '/assets/js/backgrounds/image (26).jpeg',
        '/assets/js/backgrounds/image (27).jpeg',
        '/assets/js/backgrounds/image (28).jpeg',
        '/assets/js/backgrounds/image (29).jpeg',
        '/assets/js/backgrounds/image (30).jpeg',
        '/assets/js/backgrounds/image (31).jpeg',
        '/assets/js/backgrounds/image (32).jpeg',
        '/assets/js/backgrounds/image (33).jpeg',
        '/assets/js/backgrounds/image (34).jpeg',
        '/assets/js/backgrounds/image (35).jpeg',
        '/assets/js/backgrounds/image (36).jpeg',
        '/assets/js/backgrounds/image (37).jpeg',
        '/assets/js/backgrounds/image (38).jpeg',
        '/assets/js/backgrounds/image (39).jpeg',
        '/assets/js/backgrounds/image (40).jpeg',
        '/assets/js/backgrounds/image (41).jpeg',
        '/assets/js/backgrounds/image (42).jpeg',
        '/assets/js/backgrounds/image (43).jpeg',
        '/assets/js/backgrounds/image (44).jpeg',
        '/assets/js/backgrounds/image (45).jpeg',
        '/assets/js/backgrounds/image (46).jpeg', 
        '/assets/js/backgrounds/image (47).jpeg',
        '/assets/js/backgrounds/image (48).jpeg',
        '/assets/js/backgrounds/image (49).jpeg',
        '/assets/js/backgrounds/image (50).jpeg',
        '/assets/js/backgrounds/image (51).jpeg',
        '/assets/js/backgrounds/image (52).jpeg',
        '/assets/js/backgrounds/image (53).jpeg',
        '/assets/js/backgrounds/image (54).jpeg',
        '/assets/js/backgrounds/image (55).jpeg',
        '/assets/js/backgrounds/image (56).jpeg',
        '/assets/js/backgrounds/image (57).jpeg',
        '/assets/js/backgrounds/image (58).jpeg',
        '/assets/js/backgrounds/image (59).jpeg',
        '/assets/js/backgrounds/image (60).jpeg',
        '/assets/js/backgrounds/image (61).jpeg',
        '/assets/js/backgrounds/image (62).jpeg',
        '/assets/js/backgrounds/image (63).jpeg',
        '/assets/js/backgrounds/image (64).jpeg',
        '/assets/js/backgrounds/image (65).jpeg',
        '/assets/js/backgrounds/image (66).jpeg',
        '/assets/js/backgrounds/image (67).jpeg',
        '/assets/js/backgrounds/image (68).jpeg',
        '/assets/js/backgrounds/image (69).jpeg',
        '/assets/js/backgrounds/image (70).jpeg',
        '/assets/js/backgrounds/image (71).jpeg',
        '/assets/js/backgrounds/image (72).jpeg',
        '/assets/js/backgrounds/image (73).jpeg',
        '/assets/js/backgrounds/image (74).jpeg',
        '/assets/js/backgrounds/image (75).jpeg',
        '/assets/js/backgrounds/image (76).jpeg',
        '/assets/js/backgrounds/image (77).jpeg',
        '/assets/js/backgrounds/image (78).jpeg',
        '/assets/js/backgrounds/image (79).jpeg',
        '/assets/js/backgrounds/image (80).jpeg', 
        '/assets/js/backgrounds/image (81).jpeg',
        '/assets/js/backgrounds/image (82).jpeg',
        '/assets/js/backgrounds/image (83).jpeg',
        '/assets/js/backgrounds/image (84).jpeg',
        '/assets/js/backgrounds/image (85).jpeg',
        '/assets/js/backgrounds/image (86).jpeg',
        '/assets/js/backgrounds/image (87).jpeg',
        '/assets/js/backgrounds/image (88).jpeg',
        '/assets/js/backgrounds/image (89).jpeg',
        '/assets/js/backgrounds/image (90).jpeg', 
        '/assets/js/backgrounds/image (91).jpeg',
        '/assets/js/backgrounds/image (92).jpeg',
        '/assets/js/backgrounds/image (93).jpeg',
        '/assets/js/backgrounds/image (94).jpeg',
        '/assets/js/backgrounds/image (95).jpeg',
        '/assets/js/backgrounds/image (96).jpeg',
        '/assets/js/backgrounds/image (97).jpeg',
        '/assets/js/backgrounds/image (98).jpeg',
        '/assets/js/backgrounds/image (99).jpeg',
        '/assets/js/backgrounds/image (100).jpeg',
        '/assets/js/backgrounds/image (101).jpeg',
        '/assets/js/backgrounds/image (102).jpeg',
        '/assets/js/backgrounds/image (103).jpeg',
        '/assets/js/backgrounds/image (104).jpeg',
        '/assets/js/backgrounds/image (105).jpeg',
        '/assets/js/backgrounds/image (106).jpeg',
        '/assets/js/backgrounds/image (107).jpeg',
        '/assets/js/backgrounds/image (108).jpeg',
        '/assets/js/backgrounds/image (109).jpeg',
        '/assets/js/backgrounds/image (110).jpeg',
        '/assets/js/backgrounds/image (111).jpeg',
        '/assets/js/backgrounds/image (112).jpeg',
        '/assets/js/backgrounds/image (113).jpeg',
        '/assets/js/backgrounds/image (114).jpeg',
        '/assets/js/backgrounds/image (115).jpeg',
        '/assets/js/backgrounds/image (116).jpeg',
        '/assets/js/backgrounds/image (117).jpeg',
        '/assets/js/backgrounds/image (118).jpeg',
        '/assets/js/backgrounds/image (119).jpeg',
        '/assets/js/backgrounds/image (120).jpeg',
        '/assets/js/backgrounds/image (121).jpeg',
        '/assets/js/backgrounds/image (122).jpeg',
        '/assets/js/backgrounds/image (123).jpeg',
        '/assets/js/backgrounds/image (124).jpeg',
        '/assets/js/backgrounds/image (125).jpeg',
        '/assets/js/backgrounds/image (126).jpeg',
        '/assets/js/backgrounds/image (127).jpeg',
        '/assets/js/backgrounds/image (128).jpeg',
        '/assets/js/backgrounds/image (129).jpeg',
        '/assets/js/backgrounds/image (130).jpeg',
        '/assets/js/backgrounds/image (131).jpeg',
        '/assets/js/backgrounds/image (132).jpeg',
        '/assets/js/backgrounds/image (133).jpeg',
        '/assets/js/backgrounds/image (134).jpeg',
        '/assets/js/backgrounds/image (135).jpeg',
        '/assets/js/backgrounds/image (136).jpeg',
        '/assets/js/backgrounds/image (137).jpeg',
        '/assets/js/backgrounds/image (138).jpeg',
        '/assets/js/backgrounds/image (139).jpeg',
        '/assets/js/backgrounds/image (140).jpeg',
        '/assets/js/backgrounds/image (141).jpeg',
        '/assets/js/backgrounds/image (142).jpeg',
        '/assets/js/backgrounds/image (143).jpeg',
        '/assets/js/backgrounds/image (144).jpeg',
        '/assets/js/backgrounds/image (145).jpeg',
        '/assets/js/backgrounds/image (146).jpeg',
        '/assets/js/backgrounds/image (147).jpeg',
        '/assets/js/backgrounds/image (148).jpeg',
        '/assets/js/backgrounds/image (149).jpeg',
        '/assets/js/backgrounds/image (150).jpeg',
        '/assets/js/backgrounds/image (151).jpeg',
        '/assets/js/backgrounds/image (152).jpeg',
        '/assets/js/backgrounds/image (153).jpeg',
        '/assets/js/backgrounds/image (154).jpeg',
        '/assets/js/backgrounds/image (155).jpeg',
        '/assets/js/backgrounds/image (156).jpeg',
        '/assets/js/backgrounds/image (157).jpeg',
        '/assets/js/backgrounds/image (158).jpeg',
        '/assets/js/backgrounds/image (159).jpeg',
        '/assets/js/backgrounds/image (160).jpeg',
        '/assets/js/backgrounds/image (161).jpeg',
        '/assets/js/backgrounds/image (162).jpeg',
        '/assets/js/backgrounds/image (163).jpeg',
        '/assets/js/backgrounds/image (164).jpeg',
        '/assets/js/backgrounds/image (165).jpeg',
        '/assets/js/backgrounds/image (166).jpeg',
        '/assets/js/backgrounds/image (167).jpeg',
        '/assets/js/backgrounds/image (168).jpeg',
        '/assets/js/backgrounds/image (169).jpeg',
        '/assets/js/backgrounds/image (170).jpeg',
        '/assets/js/backgrounds/image (171).jpeg',
        '/assets/js/backgrounds/image (172).jpeg',
        '/assets/js/backgrounds/image (173).jpeg',
        '/assets/js/backgrounds/image (174).jpeg',
        '/assets/js/backgrounds/image (175).jpeg',
        '/assets/js/backgrounds/image (176).jpeg',
        '/assets/js/backgrounds/image (177).jpeg',
        '/assets/js/backgrounds/image (178).jpeg',
        '/assets/js/backgrounds/image (179).jpeg',
        '/assets/js/backgrounds/image (180).jpeg',
        '/assets/js/backgrounds/image (181).jpeg',
        '/assets/js/backgrounds/image (182).jpeg',
        '/assets/js/backgrounds/image (183).jpeg',
        '/assets/js/backgrounds/image (184).jpeg',
        '/assets/js/backgrounds/image (185).jpeg',
        '/assets/js/backgrounds/image (186).jpeg',
        '/assets/js/backgrounds/image (187).jpeg',
        '/assets/js/backgrounds/image (188).jpeg',
        '/assets/js/backgrounds/image (189).jpeg',
        '/assets/js/backgrounds/image (190).jpeg',
        '/assets/js/backgrounds/image (191).jpeg',
        '/assets/js/backgrounds/image (192).jpeg',
        '/assets/js/backgrounds/image (193).jpeg',
        '/assets/js/backgrounds/image (194).jpeg',
        '/assets/js/backgrounds/image (195).jpeg',
        '/assets/js/backgrounds/image (196).jpeg',
        '/assets/js/backgrounds/image (197).jpeg',
        '/assets/js/backgrounds/image (198).jpeg',
        '/assets/js/backgrounds/image (199).jpeg',
        '/assets/js/backgrounds/image (200).jpeg',
        '/assets/js/backgrounds/image (201).jpeg',
        '/assets/js/backgrounds/image (202).jpeg',
        '/assets/js/backgrounds/image (203).jpeg',
        '/assets/js/backgrounds/image (204).jpeg',
        '/assets/js/backgrounds/image (205).jpeg',
        '/assets/js/backgrounds/image (206).jpeg',
        ];
        this.preloadedImages = new Map();
        this.currentIndex = Math.floor(Math.random() * this.backgrounds.length);
        this.preloadBatch = 5; // Number of images to preload at a time
    }

    preloadImage(url) {
        if (this.preloadedImages.has(url)) {
            return Promise.resolve(this.preloadedImages.get(url));
        }

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                this.preloadedImages.set(url, img);
                resolve(img);
            };
            img.onerror = reject;
            img.src = url;
        });
    }

    async preloadNextBatch() {
        const startIdx = this.currentIndex;
        const promises = [];

        for (let i = 0; i < this.preloadBatch; i++) {
            const idx = (startIdx + i) % this.backgrounds.length;
            promises.push(this.preloadImage(this.backgrounds[idx]));
        }

        try {
            await Promise.all(promises);
        } catch (error) {
            console.error('Error preloading images:', error);
        }
    }

    getRandomBackground() {
        return this.backgrounds[this.currentIndex];
    }

    async setBackground() {
        const backgroundWrapper = document.querySelector('.background-wrapper');
        if (!backgroundWrapper) {
            console.error('Background wrapper not found');
            return;
        }

        try {
            // Reset the animation by removing and re-adding the element
            backgroundWrapper.style.animation = 'none';
            backgroundWrapper.offsetHeight; // Trigger reflow
            backgroundWrapper.style.animation = null;
            
            // Add loading class
            backgroundWrapper.classList.add('loading');
            
            // Preload current image
            const currentBackground = this.getRandomBackground();
            await this.preloadImage(currentBackground);
            
            // Set the background and trigger animation
            backgroundWrapper.style.backgroundImage = `url('${currentBackground}')`;
            backgroundWrapper.classList.remove('loading');
            
            // Force animation restart
            backgroundWrapper.style.animation = 'none';
            backgroundWrapper.offsetHeight; // Trigger reflow
            backgroundWrapper.style.animation = 'fadeIn 1.5s ease-in-out forwards';

            // Preload next batch in the background
            this.preloadNextBatch();

        } catch (error) {
            console.error('Failed to load background:', error);
            backgroundWrapper.classList.remove('loading');
        }
    }
}

// Initialize and use the background manager
const bgManager = new BackgroundManager();

// Set initial background when page loads
document.addEventListener('DOMContentLoaded', () => {
    bgManager.setBackground();
});

// Optional: Preload more images when the user is idle
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        bgManager.preloadNextBatch();
    });
}