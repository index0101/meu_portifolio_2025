// Portfolio Data with Video Support
const portfolioData = [
    {
        id: 1,
        category: 'uiux',
        image: 'images/missele-dashboard_01.jpg',
        tags: ['UI Design', 'UX Research', 'Figma'],
        translations: {
            pt: {
                title: 'Dashboard Analytics UI',
                description: 'Interface para dashboard de analytics com foco em usabilidade e visualização de mapa para rastreamento de mísseis.',
                category: 'UI/UX Design',
                tags: ['UI Design', 'UX Research', 'Figma'],
                client: 'Thomas Gonzalez Roberts',
                duration: '4 dias',
                tools: ['Figma', 'Adobe XD', 'CorelDraw'],
                challenge: 'Criar uma interface intuitiva para visualização de dados complexos.',
                solution: 'Desenvolvemos um sistema de design consistente com hierarquia visual clara e componentes reutilizáveis.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Dashboard Analytics UI',
                description: 'Analytics dashboard interface focused on usability and map visualization for missile tracking.',
                category: 'UI/UX Design',
                tags: ['UI Design', 'UX Research', 'Figma'],
                client: 'Thomas Gonzalez Roberts',
                duration: '4 days',
                tools: ['Figma', 'Adobe XD', 'CorelDraw'],
                challenge: 'Create an intuitive interface for complex data visualization.',
                solution: 'We developed a consistent design system with clear visual hierarchy and reusable components.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Thomas Gonzalez Roberts',
            duration: { pt: '4 dias', en: '4 days' },
            tools: ['Figma', 'Adobe XD', 'CorelDraw'],
            challenge: { pt: 'Criar uma interface intuitiva para visualização de dados complexos.', en: 'Create an intuitive interface for complex data visualization.' },
            solution: { pt: 'Desenvolvemos um sistema de design consistente com hierarquia visual clara e componentes reutilizáveis.', en: 'We developed a consistent design system with clear visual hierarchy and reusable components.' },
            images: ['images/missele-dashboard_01.jpg', 'images/missele-dashboard_02.jpg', 'images/missele-dashboard_03.jpg', 'images/missele-dashboard_04.jpg']
        }
    },
    {
        id: 2,
        category: 'uiux',
        image: 'images/uiux_example_new2.png',
        tags: ['Mobile UI', 'UX Design', 'Prototyping'],
        translations: {
            pt: {
                title: 'Coffee Mobile App',
                description: 'Aplicativo mobile para e-commerce com experiência de compra otimizada e design responsivo.',
                category: 'UI/UX Design',
                tags: ['Mobile UI', 'UX Design', 'Prototyping'],
                client: 'Yulia Coffee Shop',
                duration: '1 semana',
                tools: ['Figma', 'Illustrator', 'Photoshop', 'CorelDraw'],
                challenge: 'Melhorar a taxa de conversão do app mobile existente.',
                solution: 'Redesenhamos o fluxo de compra com foco na redução de etapas e melhoria da experiência do usuário.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Coffee Mobile App',
                description: 'Mobile commerce app with an optimized buying experience and responsive design.',
                category: 'UI/UX Design',
                tags: ['Mobile UI', 'UX Design', 'Prototyping'],
                client: 'Yulia Coffee Shop',
                duration: '1 week',
                tools: ['Figma', 'Illustrator', 'Photoshop', 'CorelDraw'],
                challenge: 'Improve conversion rates in the existing mobile app.',
                solution: 'We redesigned the purchase flow to reduce friction and enhance the user experience.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Yulia Coffee Shop',
            duration: { pt: '1 semana', en: '1 week' },
            tools: ['Figma', 'Illustrator', 'Photoshop', 'CorelDraw'],
            challenge: { pt: 'Melhorar a taxa de conversão do app mobile existente.', en: 'Improve conversion rates in the existing mobile app.' },
            solution: { pt: 'Redesenhamos o fluxo de compra com foco na redução de etapas e melhoria da experiência do usuário.', en: 'We redesigned the purchase flow to reduce friction and enhance the user experience.' },
            images: ['images/uiux_example_new2.png', 'images/uiux_example_new1.png'],
            video: 'videos/coffeeapp-Opera2025-09-1218-29-04.mp4'
        }
    },
    {
        id: 3,
        category: 'graphic',
        image: 'images/graphic_design_example_new1.jpg',
        tags: ['Branding', 'Logo Design', 'Identidade Visual'],
        translations: {
            pt: {
                title: 'Identidade Visual Ozix',
                description: 'Desenvolvimento completo de identidade visual para marca de micro SaaS, incluindo logo, paleta e aplicações.',
                category: 'Design Gráfico',
                tags: ['Branding', 'Logo Design', 'Identidade Visual'],
                client: 'Ozix Design SaaS',
                duration: '1 semana',
                tools: ['Illustrator', 'Photoshop', 'InDesign', 'CorelDRAW'],
                challenge: 'Criar uma identidade que transmitisse elegância e exclusividade.',
                solution: 'Desenvolvi uma marca sofisticada e tecnológica com tipografia elegante e paleta de cores refinada.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Ozix Visual Identity',
                description: 'Complete visual identity development for a micro SaaS brand, including logo, palette and applications.',
                category: 'Graphic Design',
                tags: ['Branding', 'Logo Design', 'Visual Identity'],
                client: 'Ozix Design SaaS',
                duration: '1 week',
                tools: ['Illustrator', 'Photoshop', 'InDesign', 'CorelDRAW'],
                challenge: 'Create an identity that conveyed elegance and exclusivity.',
                solution: 'I developed a refined, sophisticated brand with elegant typography and a polished color palette.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Ozix Design SaaS',
            duration: { pt: '1 semana', en: '1 week' },
            tools: ['Illustrator', 'Photoshop', 'InDesign', 'CorelDRAW'],
            challenge: { pt: 'Criar uma identidade que transmitisse elegância e exclusividade.', en: 'Create an identity that conveyed elegance and exclusivity.' },
            solution: { pt: 'Desenvolvi uma marca sofisticada e tecnológica com tipografia elegante e paleta de cores refinada.', en: 'I developed a refined, sophisticated brand with elegant typography and a polished color palette.' },
            images: ['images/graphic_design_example_new1.jpg', 'images/ozix_design_saas.jpg', 'images/ozix_design_saas_02.jpg']
        }
    },
    {
        id: 4,
        category: 'graphic',
        image: 'images/01.jpg',
        tags: ['Graphic Design', 'Car Design', 'Social Media'],
        translations: {
            pt: {
                title: 'Car Graphics Showcase',
                description: 'Criação de artes digitais destacando carros esportivos de forma moderna e impactante.',
                category: 'Design Gráfico',
                tags: ['Graphic Design', 'Car Design', 'Social Media'],
                client: 'Speed Car',
                duration: '1 dia',
                tools: ['Illustrator', 'Figma', 'CorelDraw'],
                challenge: 'Transmitir velocidade e elegância em imagens atrativas para portfólio e redes sociais.',
                solution: 'Desenvolvi composições dinâmicas com cores e contrastes que valorizam o design dos veículos.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Car Graphics Showcase',
                description: 'Digital art created to highlight sports cars in a modern and impactful way.',
                category: 'Graphic Design',
                tags: ['Graphic Design', 'Car Design', 'Social Media'],
                client: 'Speed Car',
                duration: '1 day',
                tools: ['Illustrator', 'Figma', 'CorelDraw'],
                challenge: 'Communicate speed and elegance through engaging visuals for portfolio and social media.',
                solution: 'I developed dynamic compositions using contrast and color to elevate the vehicle design.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Speed Car',
            duration: { pt: '1 dia', en: '1 day' },
            tools: ['Illustrator', 'Figma', 'CorelDraw'],
            challenge: { pt: 'Transmitir velocidade e elegância em imagens atrativas para portfólio e redes sociais.', en: 'Communicate speed and elegance through engaging visuals for portfolio and social media.' },
            solution: { pt: 'Desenvolvi composições dinâmicas com cores e contrastes que valorizam o design dos veículos.', en: 'I developed dynamic compositions using contrast and color to elevate the vehicle design.' },
            images: ['images/01.jpg', 'images/02.jpg', 'images/03.jpg']
        }
    },
    {
        id: 5,
        category: 'uiux',
        image: 'images/uiux_example_new1.png',
        tags: ['UX Strategy', 'Dashboard', 'Prototype'],
        translations: {
            pt: {
                title: 'Painel de Gestão SaaS',
                description: 'Experiência de usuário para painel administrativo com métricas, relatórios e visão de performance.',
                category: 'UI/UX Design',
                tags: ['UX Strategy', 'Dashboard', 'Prototype'],
                client: 'Nova Metrics',
                duration: '2 semanas',
                tools: ['Figma', 'Notion', 'Illustrator'],
                challenge: 'Organizar dados complexos em uma interface clara e estratégica.',
                solution: 'Estruturei painéis e fluxos com foco em leitura rápida e decisões inteligentes.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'SaaS Management Dashboard',
                description: 'User experience for an admin dashboard featuring metrics, reports, and performance insights.',
                category: 'UI/UX Design',
                tags: ['UX Strategy', 'Dashboard', 'Prototype'],
                client: 'Nova Metrics',
                duration: '2 weeks',
                tools: ['Figma', 'Notion', 'Illustrator'],
                challenge: 'Organize complex data in a clear and strategic interface.',
                solution: 'I structured dashboards and flows focused on quick reading and smart decision-making.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Nova Metrics',
            duration: { pt: '2 semanas', en: '2 weeks' },
            tools: ['Figma', 'Notion', 'Illustrator'],
            challenge: { pt: 'Organizar dados complexos em uma interface clara e estratégica.', en: 'Organize complex data in a clear and strategic interface.' },
            solution: { pt: 'Estruturei painéis e fluxos com foco em leitura rápida e decisões inteligentes.', en: 'I structured dashboards and flows focused on quick reading and smart decision-making.' },
            images: ['images/uiux_example_new1.png', 'images/graphic_design_example_new2.jpg']
        }
    },
    {
        id: 6,
        category: 'graphic',
        image: 'images/graphic_design_example_new2.jpg',
        tags: ['Editorial', 'Branding', 'Photography'],
        translations: {
            pt: {
                title: 'Campanha Editorial',
                description: 'Campanha visual editorial com linguagem sofisticada e direção criativa para publicação digital.',
                category: 'Design Gráfico',
                tags: ['Editorial', 'Branding', 'Photography'],
                client: 'Studio Vela',
                duration: '3 dias',
                tools: ['Photoshop', 'Illustrator', 'InDesign'],
                challenge: 'Criar um conjunto visual impactante com consistência editorial.',
                solution: 'Desenvolvi sequência visual, hierarquia e materiais que ampliaram o storytelling da marca.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Editorial Campaign',
                description: 'Visual editorial campaign with a sophisticated language and creative direction for digital publication.',
                category: 'Graphic Design',
                tags: ['Editorial', 'Branding', 'Photography'],
                client: 'Studio Vela',
                duration: '3 days',
                tools: ['Photoshop', 'Illustrator', 'InDesign'],
                challenge: 'Create a visually strong set with consistent editorial language.',
                solution: 'I developed a visual sequence, hierarchy, and assets that amplified the brand storytelling.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Studio Vela',
            duration: { pt: '3 dias', en: '3 days' },
            tools: ['Photoshop', 'Illustrator', 'InDesign'],
            challenge: { pt: 'Criar um conjunto visual impactante com consistência editorial.', en: 'Create a visually strong set with consistent editorial language.' },
            solution: { pt: 'Desenvolvi sequência visual, hierarquia e materiais que ampliaram o storytelling da marca.', en: 'I developed a visual sequence, hierarchy, and assets that amplified the brand storytelling.' },
            images: ['images/graphic_design_example_new2.jpg', 'images/02.jpg', 'images/03.jpg']
        }
    },
    {
        id: 7,
        category: 'uiux',
        image: 'images/02.png',
        tags: ['UX Writing', 'Mobile', 'Conversion'],
        translations: {
            pt: {
                title: 'App de Reservas',
                description: 'Fluxo de reserva mobile com foco em clareza, conversão e experiência emocional.',
                category: 'UI/UX Design',
                tags: ['UX Writing', 'Mobile', 'Conversion'],
                client: 'Luma Studio',
                duration: '10 dias',
                tools: ['Figma', 'Miro', 'Photoshop'],
                challenge: 'Simplificar a jornada de agendamento e aumentar a confiança do usuário.',
                solution: 'Redesenhei a experiência com menos etapas, mais clareza visual e microinterações suaves.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Booking App',
                description: 'Mobile booking flow focused on clarity, conversion, and emotional experience.',
                category: 'UI/UX Design',
                tags: ['UX Writing', 'Mobile', 'Conversion'],
                client: 'Luma Studio',
                duration: '10 days',
                tools: ['Figma', 'Miro', 'Photoshop'],
                challenge: 'Simplify the scheduling journey and increase user confidence.',
                solution: 'I redesigned the experience with fewer steps, clearer visuals, and smoother microinteractions.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Luma Studio',
            duration: { pt: '10 dias', en: '10 days' },
            tools: ['Figma', 'Miro', 'Photoshop'],
            challenge: { pt: 'Simplificar a jornada de agendamento e aumentar a confiança do usuário.', en: 'Simplify the scheduling journey and increase user confidence.' },
            solution: { pt: 'Redesenhei a experiência com menos etapas, mais clareza visual e microinterações suaves.', en: 'I redesigned the experience with fewer steps, clearer visuals, and smoother microinteractions.' },
            images: ['images/02.png', 'images/uiux_example_new2.png']
        }
    },
    {
        id: 8,
        category: 'graphic',
        image: 'images/03.png',
        tags: ['Packaging', 'Brand System', 'Print'],
        translations: {
            pt: {
                title: 'Sistema de Embalagem',
                description: 'Criação de um sistema de embalagem com linguagem premium e impacto visual funcional.',
                category: 'Design Gráfico',
                tags: ['Packaging', 'Brand System', 'Print'],
                client: 'Aster Atelier',
                duration: '5 dias',
                tools: ['Illustrator', 'Photoshop', 'InDesign'],
                challenge: 'Equilibrar identidade premium com funcionalidade e produção imprime.',
                solution: 'Desenvolvi uma identidade visual consistente para diferentes aplicações e materiais.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Packaging System',
                description: 'Packaging system development with a premium language and functional visual impact.',
                category: 'Graphic Design',
                tags: ['Packaging', 'Brand System', 'Print'],
                client: 'Aster Atelier',
                duration: '5 days',
                tools: ['Illustrator', 'Photoshop', 'InDesign'],
                challenge: 'Balance premium identity with functionality and print production.',
                solution: 'I developed a consistent visual identity for multiple applications and materials.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Aster Atelier',
            duration: { pt: '5 dias', en: '5 days' },
            tools: ['Illustrator', 'Photoshop', 'InDesign'],
            challenge: { pt: 'Equilibrar identidade premium com funcionalidade e produção imprime.', en: 'Balance premium identity with functionality and print production.' },
            solution: { pt: 'Desenvolvi uma identidade visual consistente para diferentes aplicações e materiais.', en: 'I developed a consistent visual identity for multiple applications and materials.' },
            images: ['images/03.png', 'images/graphic_design_example_new1.jpg']
        }
    },
    {
        id: 9,
        category: 'uiux',
        image: 'images/01.png',
        tags: ['Landing Page', 'UX', 'Research'],
        translations: {
            pt: {
                title: 'Landing Page de Produto',
                description: 'Página promocional para lançamento de produto com narrativa forte e conversão visual.',
                category: 'UI/UX Design',
                tags: ['Landing Page', 'UX', 'Research'],
                client: 'North Studio',
                duration: '6 dias',
                tools: ['Figma', 'Illustrator', 'Photoshop'],
                challenge: 'Criar uma experiência clara e emocionante para conversão de leads.',
                solution: 'Estruturei blocos narrativos, visuais e hierarquias que guiaram a jornada do usuário.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Product Landing Page',
                description: 'Promotional page for a product launch with a strong narrative and visual conversion.',
                category: 'UI/UX Design',
                tags: ['Landing Page', 'UX', 'Research'],
                client: 'North Studio',
                duration: '6 days',
                tools: ['Figma', 'Illustrator', 'Photoshop'],
                challenge: 'Create a clear and exciting experience to improve lead conversion.',
                solution: 'I structured narrative blocks, visuals, and hierarchy to guide the user journey.',
                button: 'View Details'
            }
        },
        details: {
            client: 'North Studio',
            duration: { pt: '6 dias', en: '6 days' },
            tools: ['Figma', 'Illustrator', 'Photoshop'],
            challenge: { pt: 'Criar uma experiência clara e emocionante para conversão de leads.', en: 'Create a clear and exciting experience to improve lead conversion.' },
            solution: { pt: 'Estruturei blocos narrativos, visuais e hierarquias que guiaram a jornada do usuário.', en: 'I structured narrative blocks, visuals, and hierarchy to guide the user journey.' },
            images: ['images/01.png', 'images/missele-dashboard_01.jpg']
        }
    },
    {
        id: 10,
        category: 'graphic',
        image: 'images/02.jpg',
        tags: ['Art Direction', 'Campaign', 'Brand'],
        translations: {
            pt: {
                title: 'Arte de Campanha',
                description: 'Direção visual para campanha digital com proposta editorial e forte presença de marca.',
                category: 'Design Gráfico',
                tags: ['Art Direction', 'Campaign', 'Brand'],
                client: 'Mira Co.',
                duration: '4 dias',
                tools: ['Photoshop', 'Illustrator', 'Figma'],
                challenge: 'Unificar identidade, narrativa e diferentes formatos em uma campanha coesa.',
                solution: 'Desenvolvi um sistema visual modular com aplicação em web, redes e materiais digitais.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Campaign Artwork',
                description: 'Visual direction for a digital campaign with an editorial approach and strong brand presence.',
                category: 'Graphic Design',
                tags: ['Art Direction', 'Campaign', 'Brand'],
                client: 'Mira Co.',
                duration: '4 days',
                tools: ['Photoshop', 'Illustrator', 'Figma'],
                challenge: 'Unify identity, narrative, and multiple formats into a cohesive campaign.',
                solution: 'I created a modular visual system with application across web, social, and digital materials.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Mira Co.',
            duration: { pt: '4 dias', en: '4 days' },
            tools: ['Photoshop', 'Illustrator', 'Figma'],
            challenge: { pt: 'Unificar identidade, narrativa e diferentes formatos em uma campanha coesa.', en: 'Unify identity, narrative, and multiple formats into a cohesive campaign.' },
            solution: { pt: 'Desenvolvi um sistema visual modular com aplicação em web, redes e materiais digitais.', en: 'I created a modular visual system with application across web, social, and digital materials.' },
            images: ['images/02.jpg', 'images/graphic_design_example_new2.jpg']
        }
    },
    {
        id: 11,
        category: 'uiux',
        image: 'images/03.jpg',
        tags: ['Interface', 'Research', 'UX'],
        translations: {
            pt: {
                title: 'Interface de Acesso',
                description: 'Design de interface para experiência de acesso e intro de produto com maior clareza e confiança.',
                category: 'UI/UX Design',
                tags: ['Interface', 'Research', 'UX'],
                client: 'Orbit Lab',
                duration: '8 dias',
                tools: ['Figma', 'Illustrator', 'Adobe XD'],
                challenge: 'Simplificar o primeiro contato do usuário com uma solução complexa.',
                solution: 'Criei uma linguagem visual coerente com navegação intuitiva e chamadas estratégicas.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Access Interface',
                description: 'Interface design for a product access experience with greater clarity and user confidence.',
                category: 'UI/UX Design',
                tags: ['Interface', 'Research', 'UX'],
                client: 'Orbit Lab',
                duration: '8 days',
                tools: ['Figma', 'Illustrator', 'Adobe XD'],
                challenge: 'Simplify the user’s first contact with a complex solution.',
                solution: 'I created a coherent visual language with intuitive navigation and strategic calls to action.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Orbit Lab',
            duration: { pt: '8 dias', en: '8 days' },
            tools: ['Figma', 'Illustrator', 'Adobe XD'],
            challenge: { pt: 'Simplificar o primeiro contato do usuário com uma solução complexa.', en: 'Simplify the user’s first contact with a complex solution.' },
            solution: { pt: 'Criei uma linguagem visual coerente com navegação intuitiva e chamadas estratégicas.', en: 'I created a coherent visual language with intuitive navigation and strategic calls to action.' },
            images: ['images/03.jpg', 'images/01.png']
        }
    },
    {
        id: 12,
        category: 'graphic',
        image: 'images/graphic_design_example_new1.jpg',
        tags: ['Poster', 'Creative', 'Art'],
        translations: {
            pt: {
                title: 'Arte de Pôster',
                description: 'Composição gráfica experimental para campanha visual com atitude contemporânea e impacto editorial.',
                category: 'Design Gráfico',
                tags: ['Poster', 'Creative', 'Art'],
                client: 'Bairro 23',
                duration: '2 dias',
                tools: ['Photoshop', 'Illustrator', 'Figma'],
                challenge: 'Criar uma peça marcante e memorável para divulgação visual.',
                solution: 'Apliquei sobreposição, contrastes e uma composição experimental para gerar atenção imediata.',
                button: 'Ver Detalhes'
            },
            en: {
                title: 'Poster Artwork',
                description: 'Experimental graphic composition for a visual campaign with a contemporary attitude and editorial impact.',
                category: 'Graphic Design',
                tags: ['Poster', 'Creative', 'Art'],
                client: 'Bairro 23',
                duration: '2 days',
                tools: ['Photoshop', 'Illustrator', 'Figma'],
                challenge: 'Create a memorable piece for visual promotion.',
                solution: 'I used overlays, contrast, and an experimental composition to create immediate attention.',
                button: 'View Details'
            }
        },
        details: {
            client: 'Bairro 23',
            duration: { pt: '2 dias', en: '2 days' },
            tools: ['Photoshop', 'Illustrator', 'Figma'],
            challenge: { pt: 'Criar uma peça marcante e memorável para divulgação visual.', en: 'Create a memorable piece for visual promotion.' },
            solution: { pt: 'Apliquei sobreposição, contrastes e uma composição experimental para gerar atenção imediata.', en: 'I used overlays, contrast, and an experimental composition to create immediate attention.' },
            images: ['images/graphic_design_example_new1.jpg', 'images/02.png']
        }
    }
];

// Language Data
const languageData = {
    pt: {
        // Navigation
        'Home': 'Home',
        'Sobre': 'Sobre',
        'Portfólio': 'Portfólio',
        'Contato': 'Contato',
        
        // Hero Section
        'Design que': 'Design que',
        'Inspira': 'Inspira',
        'Criando experiências visuais únicas através do Design Gráfico e UI/UX': 'Criando experiências visuais únicas através do Design Gráfico e UI/UX',
        'Ver Portfólio': 'Ver Portfólio',
        'Vamos Conversar': 'Vamos Conversar',
        'Role para baixo': 'Role para baixo',
        
        // About Section
        'Sobre Mim': 'Sobre Mim',
        'Paixão por design e inovação': 'Paixão por design e inovação',
        'Designer Gráfico & UI/UX | Data Science': 'Designer Gráfico & UI/UX | Data Science',
        'Habilidades & Ferramentas': 'Habilidades & Ferramentas',
        'Design & Criação': 'Design & Criação',
        'Visualização & Modelagem': 'Visualização & Modelagem',
        'Desenvolvimento & Código': 'Desenvolvimento & Código',
        
        // Portfolio Section
        'Projetos que fazem a diferença': 'Projetos que fazem a diferença',
        'Todos': 'Todos',
        'UI/UX Design': 'UI/UX Design',
        'Design Gráfico': 'Design Gráfico',
        'Logos Criadas & Revitalizadas': 'Logos Criadas & Revitalizadas',
        
        // Contact Section
        'Vamos Trabalhar Juntos': 'Vamos Trabalhar Juntos',
        'Transforme sua ideia em realidade': 'Transforme sua ideia em realidade',
        'Entre em Contato': 'Entre em Contato',
        'Estou sempre aberta a novos projetos e colaborações. Vamos conversar sobre como posso ajudar a dar vida às suas ideias.': 'Estou sempre aberta a novos projetos e colaborações. Vamos conversar sobre como posso ajudar a dar vida às suas ideias.',
        'Compartilhar Portfólio': 'Compartilhar Portfólio',
        'Nome': 'Nome',
        'E-mail': 'E-mail',
        'Mensagem': 'Mensagem',
        'Enviar Mensagem': 'Enviar Mensagem',
        
        // Footer
        '&copy; 2024 Desenvolvido com 💜 por Gessica Araujo': '&copy; 2024 Desenvolvido com 💜 por Gessica Araujo'
    },
    en: {
        // Navigation
        'Home': 'Home',
        'Sobre': 'About',
        'Portfólio': 'Portfolio',
        'Contato': 'Contact',
        
        // Hero Section
        'Design que': 'Design that',
        'Inspira': 'Inspires',
        'Criando experiências visuais únicas através do Design Gráfico e UI/UX': 'Creating unique visual experiences through Graphic Design and UI/UX',
        'Ver Portfólio': 'View Portfolio',
        'Vamos Conversar': "Let's Talk",
        'Role para baixo': 'Scroll down',
        
        // About Section
        'Sobre Mim': 'About Me',
        'Paixão por design e inovação': 'Passion for design and innovation',
        'Designer Gráfico & UI/UX | Data Science': 'Graphic Designer & UI/UX | Data Science',
        'Habilidades & Ferramentas': 'Skills & Tools',
        'Design & Criação': 'Design & Creation',
        'Visualização & Modelagem': 'Visualization & Modeling',
        'Desenvolvimento & Código': 'Development & Code',
        
        // Portfolio Section
        'Projetos que fazem a diferença': 'Projects that make a difference',
        'Todos': 'All',
        'UI/UX Design': 'UI/UX Design',
        'Design Gráfico': 'Graphic Design',
        'Logos Criadas & Revitalizadas': 'Created & Revitalized Logos',
        
        // Contact Section
        'Vamos Trabalhar Juntos': "Let's Work Together",
        'Transforme sua ideia em realidade': 'Transform your idea into reality',
        'Entre em Contato': 'Get in Touch',
        'Estou sempre aberta a novos projetos e colaborações. Vamos conversar sobre como posso ajudar a dar vida às suas ideias.': "I'm always open to new projects and collaborations. Let's talk about how I can help bring your ideas to life.",
        'Compartilhar Portfólio': 'Share Portfolio',
        'Nome': 'Name',
        'E-mail': 'Email',
        'Mensagem': 'Message',
        'Enviar Mensagem': 'Send Message',
        
        // Footer
        '&copy; 2024 Desenvolvido com 💜 por Gessica Araujo': '&copy; 2024 Developed with 💜 by Gessica Araujo'
    }
};

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const portfolioGrid = document.getElementById('portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('portfolio-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const languageButtons = document.querySelectorAll('.lang-btn');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.updateThemeIcon();
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.updateThemeIcon();
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);

        const brandLogo = document.querySelector('.brand-logo');
        if (brandLogo) {
            brandLogo.src = theme === 'dark' ? 'images/White_Vert_.png' : 'images/Black_Vert.png';
            brandLogo.alt = 'Gessica Araujo';
        }
    }

    updateThemeIcon() {
        const icon = themeToggle.querySelector('.theme-icon');
        icon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'pt';
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.updateLanguageButtons();
        
        languageButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        this.applyLanguage(lang);
        this.updateLanguageButtons();
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('data-lang', lang);
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-pt][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.innerHTML.includes('&copy;')) {
                    element.innerHTML = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        if (window.portfolio && typeof window.portfolio.renderPortfolio === 'function') {
            window.portfolio.renderPortfolio();
        }

        // Traduzir placeholders
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageTextarea = document.getElementById('message');

        if (nameInput) {
            nameInput.placeholder = this.currentLang === 'pt' ? 'Ex: João Silva' : 'Ex: John Smith';
        }
        if (emailInput) {
            emailInput.placeholder = this.currentLang === 'pt' ? 'Ex: seuemail@dominio.com' : 'Ex: youremail@domain.com';
        }
        if (messageTextarea) {
            const ptPlaceholder = messageTextarea.getAttribute('data-pt');
            const enPlaceholder = messageTextarea.getAttribute('data-en');
            messageTextarea.placeholder = this.currentLang === 'pt' ? ptPlaceholder : enPlaceholder;
        }
    }

    updateLanguageButtons() {
        languageButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
        });
    }
}

// Mobile Menu Management
class MobileMenu {
    constructor() {
        this.isOpen = false;
        this.init();
    }

    init() {
        mobileMenuToggle.addEventListener('click', () => this.toggle());
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        navMenu.classList.toggle('active', this.isOpen);
        this.updateToggleIcon();
    }

    close() {
        this.isOpen = false;
        navMenu.classList.remove('active');
        this.updateToggleIcon();
    }

    updateToggleIcon() {
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (this.isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
}

// Navigation with Road Slide Effect
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    this.roadSlideToSection(target);
                }
            });
        });

        window.addEventListener('scroll', () => this.updateActiveNav());
    }

    roadSlideToSection(target) {
        const offsetTop = target.offsetTop - 80;
        
        // Add road slide effect to target section
        target.classList.add('road-slide');
        
        // Smooth scroll to target
        window.scrollTo({ 
            top: offsetTop, 
            behavior: 'smooth' 
        });
        
        // Remove road slide class after animation
        setTimeout(() => {
            target.classList.remove('road-slide');
        }, 800);
    }

    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
}

// Portfolio with Video Support
class Portfolio {
    constructor() {
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        this.renderPortfolio();
        this.initFilters();
        this.initCarouselControls();
    }

    getLocalizedItem(item, lang = document.documentElement.getAttribute('data-lang') || 'pt') {
        const translation = item.translations?.[lang] || item.translations?.pt || item;
        return {
            ...item,
            title: translation.title || item.title,
            description: translation.description || item.description,
            category: translation.category || item.category,
            tags: translation.tags || item.tags,
            client: translation.client || item.details?.client,
            duration: translation.duration || (item.details?.duration?.[lang] || item.details?.duration?.pt || item.details?.duration),
            tools: translation.tools || item.details?.tools,
            challenge: translation.challenge || item.details?.challenge?.[lang] || item.details?.challenge,
            solution: translation.solution || item.details?.solution?.[lang] || item.details?.solution,
            button: translation.button || 'Ver Detalhes'
        };
    }

    renderPortfolio() {
        portfolioGrid.innerHTML = '';
        const lang = document.documentElement.getAttribute('data-lang') || 'pt';
        const filteredData = this.currentFilter === 'all' ? portfolioData : portfolioData.filter(item => item.category === this.currentFilter);

        filteredData.forEach((item, index) => {
            const localizedItem = this.getLocalizedItem(item, lang);
            const portfolioItem = this.createPortfolioItem(localizedItem);
            portfolioGrid.appendChild(portfolioItem);
            setTimeout(() => portfolioItem.classList.add('visible'), index * 100);
            this.observer.observe(portfolioItem);
        });
    }

    createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in glass';
        const buttonText = item.button || 'Ver Detalhes';
        portfolioItem.innerHTML = `
            <div class="portfolio-image" style="background-image: url('${item.image}')">
                <div class="portfolio-overlay">
                    <button class="btn btn-primary" type="button" onclick="portfolio.openModal(${item.id})">${buttonText}</button>
                </div>
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        return portfolioItem;
    }

    initFilters() {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.setFilter(button.getAttribute('data-filter'));
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    initCarouselControls() {
        const prevButton = document.querySelector('.portfolio-nav-prev');
        const nextButton = document.querySelector('.portfolio-nav-next');

        if (!prevButton || !nextButton) return;

        prevButton.addEventListener('click', () => {
            portfolioGrid.scrollBy({ left: -320, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            portfolioGrid.scrollBy({ left: 320, behavior: 'smooth' });
        });
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.renderPortfolio();
    }

    openModal(itemId) {
        const item = portfolioData.find(p => p.id === itemId);
        if (!item) return;

        const lang = document.documentElement.getAttribute('data-lang') || 'pt';
        const localizedItem = this.getLocalizedItem(item, lang);
        modalBody.innerHTML = this.createModalContent(localizedItem);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    createModalContent(item) {
        const lang = document.documentElement.getAttribute('data-lang') || 'pt';
        const detailTitle = lang === 'pt' ? 'Cliente' : 'Client';
        const durationTitle = lang === 'pt' ? 'Duração' : 'Duration';
        const toolsTitle = lang === 'pt' ? 'Ferramentas' : 'Tools';
        const challengeTitle = lang === 'pt' ? 'Desafio' : 'Challenge';
        const solutionTitle = lang === 'pt' ? 'Solução' : 'Solution';

        let mediaContent = '';
        if (item.details?.video) {
            mediaContent = `
                <div class="modal-video" style="margin-bottom: 1.5rem; text-align: center;">
                    <video controls style="max-width: 100%; max-height: 300px; border-radius: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                        <source src="${item.details.video}" type="video/mp4">
                        ${lang === 'pt' ? 'Seu navegador não suporta o elemento de vídeo.' : 'Your browser does not support the video element.'}
                    </video>
                </div>
            `;
        }

        mediaContent += `
            <div class="modal-images">
                ${(item.details?.images || []).map(img => `
                    <img src="${img}" alt="${item.title}" 
                         style="max-width:100%; height:auto; margin-bottom:0.75rem; border-radius:0.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                `).join('')}
            </div>
        `;

        return `
            <div class="modal-header">
                <h2 id="modal-title">${item.title}</h2>
                <div class="portfolio-tags">${(item.tags || []).map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}</div>
            </div>
            ${mediaContent}
            <div class="modal-details">
                <div class="detail-grid">
                    <div class="detail-item"><h4>${detailTitle}</h4><p>${item.client || item.details?.client}</p></div>
                    <div class="detail-item"><h4>${durationTitle}</h4><p>${item.duration || (item.details?.duration?.[lang] || item.details?.duration)}</p></div>
                    <div class="detail-item"><h4>${toolsTitle}</h4><p>${(item.tools || item.details?.tools || []).join(', ')}</p></div>
                </div>
                <div class="detail-section"><h4>${challengeTitle}</h4><p>${item.challenge || item.details?.challenge?.[lang] || item.details?.challenge}</p></div>
                <div class="detail-section"><h4>${solutionTitle}</h4><p>${item.solution || item.details?.solution?.[lang] || item.details?.solution}</p></div>
            </div>
        `;
    }

    closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const videos = modal.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
    }
}

// Contact Form
class ContactForm {
    constructor() {
        this.init();
    }

    init() {
        const sendButtons = document.querySelectorAll('.contact-option-btn');
        sendButtons.forEach(button => {
            button.addEventListener('click', () => this.handleSend(button.dataset.action));
        });
    }

    getFormData() {
        const name = document.getElementById('name')?.value?.trim() || '';
        const email = document.getElementById('email')?.value?.trim() || '';
        const message = document.getElementById('message')?.value?.trim() || '';

        return { name, email, message };
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showValidationMessage(message) {
        const existing = contactForm.querySelector('.form-feedback');
        if (existing) existing.remove();

        const feedback = document.createElement('div');
        feedback.className = 'form-feedback';
        feedback.textContent = message;
        contactForm.appendChild(feedback);

        setTimeout(() => feedback.remove(), 3000);
    }

    handleSend(action) {
        const { name, email, message } = this.getFormData();

        if (!name || !email || !message) {
            this.showValidationMessage(document.documentElement.getAttribute('data-lang') === 'en'
                ? 'Please fill in name, email and message.'
                : 'Preencha nome, e-mail e mensagem.');
            return;
        }

        if (!this.validateEmail(email)) {
            this.showValidationMessage(document.documentElement.getAttribute('data-lang') === 'en'
                ? 'Please enter a valid email address.'
                : 'Digite um e-mail válido.');
            return;
        }

        if (action === 'whatsapp') {
            const whatsappText = `Olá! Meu nome é ${name}.\n\nMeu e-mail é: ${email}\n\nMensagem:\n${message}`;
            const whatsappUrl = `https://wa.me/5551997806768?text=${encodeURIComponent(whatsappText)}`;
            window.open(whatsappUrl, '_blank');
        }

        if (action === 'email') {
            const subject = encodeURIComponent(document.documentElement.getAttribute('data-lang') === 'en' ? `New contact - ${name}` : `Novo contato - ${name}`);
            const emailBody = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
            const mailtoUrl = `mailto:simuledesign@gmail.com?subject=${subject}&body=${emailBody}`;
            window.location.href = mailtoUrl;
        }

        contactForm.reset();
    }
}

// Social Share
class SocialShare {
    constructor() {
        this.init();
    }

    init() {
        const shareButtons = {
            facebook: document.getElementById('share-facebook'),
            twitter: document.getElementById('share-twitter'),
            linkedin: document.getElementById('share-linkedin')
        };

        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent('Gessica Design - Portfólio UI/UX, Design Gráfico e Data Science');
        const description = encodeURIComponent('Portfólio profissional de Gessica Araujo - Designer UI/UX, Design Gráfico e Data Science.');

        if (shareButtons.facebook) {
            shareButtons.facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        }

        if (shareButtons.twitter) {
            shareButtons.twitter.href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        }

        if (shareButtons.linkedin) {
            shareButtons.linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        }
    }
}

// Scroll Animations with Road Slide Effect
class ScrollAnimations {
    constructor() { 
        this.init(); 
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { 
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add road slide effect when element becomes visible
                    if (entry.target.classList.contains('slide-in-left') || 
                        entry.target.classList.contains('slide-in-right')) {
                        entry.target.classList.add('road-slide');
                    }
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => observer.observe(el));

        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if(heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Enhanced navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.backdropFilter = 'var(--glass-backdrop)';
            navbar.style.borderBottom = '1px solid var(--glass-border)';
            navbar.style.boxShadow = 'var(--glass-shadow)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.borderBottom = 'none';
            navbar.style.boxShadow = 'none';
        }
    }
}

// Logo Carousel
class LogoCarousel {
    constructor() {
        this.init();
    }

    init() {
        const logoTrack = document.querySelector('.logo-track');
        if (!logoTrack) return;

        // Pause animation on hover
        logoTrack.addEventListener('mouseenter', () => {
            logoTrack.style.animationPlayState = 'paused';
        });

        logoTrack.addEventListener('mouseleave', () => {
            logoTrack.style.animationPlayState = 'running';
        });

        // Add touch support for mobile
        let startX = 0;
        let scrollLeft = 0;

        logoTrack.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            logoTrack.style.animationPlayState = 'paused';
        });

        logoTrack.addEventListener('touchend', () => {
            logoTrack.style.animationPlayState = 'running';
        });
    }
}

// App
class App {
    constructor() { 
        this.init(); 
    }

    init() {
        if(document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        this.themeManager = new ThemeManager();
        this.languageManager = new LanguageManager();
        this.mobileMenu = new MobileMenu();
        this.navigation = new Navigation();
        this.portfolio = new Portfolio();
        this.contactForm = new ContactForm();
        this.socialShare = new SocialShare();
        this.scrollAnimations = new ScrollAnimations();
        this.logoCarousel = new LogoCarousel();

        this.initModalEvents();
        this.initKeyboardNavigation();
        document.body.classList.add('loaded');
    }

    initModalEvents() {
        modalClose.addEventListener('click', () => this.portfolio.closeModal());
        modalOverlay.addEventListener('click', () => this.portfolio.closeModal());
        document.addEventListener('keydown', e => { 
            if(e.key==='Escape' && modal.classList.contains('active')) {
                this.portfolio.closeModal(); 
            }
        });
    }

    initKeyboardNavigation() {
        // Add keyboard navigation for accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
}

// Global portfolio instance
let portfolio;

// Start App
const app = new App();
document.addEventListener('DOMContentLoaded', () => { 
    portfolio = app.portfolio; 
});

// Modal styles injection
const modalStyles = `
<style>
.modal-header { margin-bottom:2rem; }
.modal-header h2 { font-size:2rem; font-weight:600; margin-bottom:1rem; color:var(--text-primary); }
.modal-video { text-align: center; }
.modal-images { margin-bottom:2rem; }
.detail-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1.5rem; margin-bottom:2rem; }
.detail-item h4, .detail-section h4 { font-size:1.1rem; font-weight:600; color:var(--accent-primary); margin-bottom:0.5rem; }
.detail-item p, .detail-section p { color:var(--text-secondary); line-height:1.6; }
.detail-section { margin-bottom:1.5rem; }

/* Keyboard navigation styles */
.keyboard-navigation *:focus {
    outline: 2px solid var(--accent-primary);
    outline-offset: 2px;
}

/* Enhanced video player styles */
video {
    transition: all 0.3s ease;
}

video:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 40px rgba(0,0,0,0.4) !important;
}

/* Road slide animation enhancement */
.road-slide {
    animation: roadSlide 0.8s ease-out;
}

@media(max-width:768px) { 
    .detail-grid { grid-template-columns:1fr; gap:1rem; }
    .modal-content { max-width: 95vw; padding: 1rem; }
    .modal-video video { max-width: 100%; }
}
</style>`;

document.head.insertAdjacentHTML('beforeend', modalStyles);

// Performance optimization
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here for PWA features
    });
}

// Preload critical images
const criticalImages = [
    'images/perfil.jpg',
    'images/01.png',
    'images/02.png',
    'images/03.png'
];

criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

console.log('🎨 Gessica Design Portfolio - Loaded successfully!');

// Função para compartilhamento nas redes sociais
function initSocialShare() {
    // Obter a URL atual da página
    const currentUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const shareText = encodeURIComponent("Confira o incrível portfólio de Gessica Araujo - Designer UI/UX, Design Gráfico e Data Science!");
    
    // Configurar URLs de compartilhamento
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`;
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
    
    // Atribuir URLs aos botões
    const facebookBtn = document.getElementById('share-facebook');
    const twitterBtn = document.getElementById('share-twitter');
    const linkedinBtn = document.getElementById('share-linkedin');
    
    if (facebookBtn) facebookBtn.href = facebookShareUrl;
    if (twitterBtn) twitterBtn.href = twitterShareUrl;
    if (linkedinBtn) linkedinBtn.href = linkedinShareUrl;
    
    // Adicionar eventos de clique para abrir em nova janela
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Abrir janela de compartilhamento
            const shareUrl = this.href;
            const windowFeatures = 'width=600,height=400,location=no,menubar=no,toolbar=no,status=no';
            window.open(shareUrl, 'Compartilhar', windowFeatures);
            
            // Feedback visual (opcional)
            showShareFeedback(this);
        });
    });
}

// Função para mostrar feedback visual ao compartilhar
function showShareFeedback(button) {
    const originalBackground = button.style.backgroundColor;
    const platform = button.classList.contains('facebook') ? 'Facebook' : 
                    button.classList.contains('twitter') ? 'Twitter' : 'LinkedIn';
    
    // Efeito visual de confirmação
    button.style.transform = 'scale(0.95)';
    button.style.backgroundColor = '#27ae60'; // Verde de confirmação
    
    setTimeout(() => {
        button.style.transform = '';
        button.style.backgroundColor = originalBackground;
    }, 300);
    
    // Log no console para debug
    console.log(`Compartilhando no ${platform}`);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initSocialShare();
});