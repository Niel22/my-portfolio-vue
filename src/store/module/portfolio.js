const portfolio = {
    namespaced: true,
    state: () => ({
        project: {},
        projects: [
            {
                name: 'Blogging Platform',
                overview: 'The Blog Platform is a project I developed to create an easy-to-use blogging system where users can create, manage, and share posts. This platform includes features such as content management, user profiles, and a clean, modern UI. I built it using Laravel for the backend and MySQL for data management, allowing me to demonstrate my skills in Backend development, database management, and system design. It is designed to be scalable and user-friendly.',
                image: [
                    {
                        src: '/assets/images/portfolio/blog-admin.png',
                        alt: 'Project Screenshot 1'
                    },
                    {
                        src: '/assets/images/portfolio/blog.png',
                        alt: 'Project Screenshot 2'
                    }
                ],
                slug: 'blog-platform',
                tech: ['Laravel', 'Livewire', 'MySQL'],
                intro: 'This Blog Platform is a web application that allows users to create, read, update, and delete blog posts. It features user authentication, a rich text editor, and a clean, responsive design. The platform is built using HTML, CSS, JavaScript, Bootstrap, PHP (Laravel), and MySQL.',
                client: 'Personal Project',
                live_link: '#',
                github_link: 'https://github.com/Niel22/blog',
                features: [
                    'Edit profile details (name, bio, avatar).',
                    'Change passwords and account deletion option.',
                    'Integration with social media (Twitter, Facebook, Instagram).',
                    'Filter content (posts, users) by categories or tags.',
                    'Pagination on post and user pages for easier navigation.',
                    'View user growth and post performance metrics.',
                    'Role-based access control (RBAC) and multi-role permissions.',
                    'Track user actions with audit logs.',
                    'Filter posts by status and filter users by roles, activity, etc.',
                    'Admin can manage social media integrations.'
                ],
                service: 'Full Stack Development'
            },
            {
                name: 'Shoe Showcasing Website',
                overview: 'This is a website I built to showcase various shoe collections. The platform allows users to browse through different categories, filter products, and view detailed information about each shoe. Built with Laravel and integrated with a MySQL database, this project demonstrates my skills in backend development, clean code, and system design. It is fully responsive and includes features such as product search, user authentication, and a seamless shopping experience..',
                image: [
                    {
                        src: '/assets/images/portfolio/shoe-admin.png',
                        alt: 'shoe Project Screenshot'
                    },
                    {
                        src: '/assets/images/portfolio/shoe.png',
                        alt: 'shoe Project Screenshot'
                    }
                ],
                slug: 'shoe-showcasing-website',
                tech: ['Laravel', 'Livewire', 'MySQL', 'Paystack Payment Gateway'],
                intro: 'This web application allows users to browse and manage a wide range of shoe products, offering features for both customers and admins. Built with Laravel, Livewire, and Bootstrap, it ensures a dynamic, responsive',
                client: 'Personal Project',
                live_link: '#',
                github_link: 'https://github.com/Niel22/shoe-website',
                features: [
                    'Customer Side: User authentication, browse categories, view and filter products, color selection, adjust quantity, add to cart/wishlist, checkout, order notifications, order history, manage user profile.',
                    'Admin Side: Category, product, brand, and color management, slider management, site settings, user management, order management, and dashboard statistics.'
                ]
            },
            {
                name: 'Website For Finding And Reviewing Local Mechanics In Your Area',
                overview: 'This project focuses on the design and implementation of a website that enables users to find and review local mechanics. The platform allows users to register, search for mechanics based on specific criteria like location and service type, and share their feedback through reviews. The website aims to offer a centralized hub for individuals seeking trustworthy, reliable mechanics by leveraging community input.',
                image: [
                    {
                        src: '/assets/images/portfolio/mechanics.png',
                        alt: 'shoe Project Screenshot'
                    },
                    {
                        src: '/assets/images/portfolio/mechanic.png',
                        alt: 'shoe Project Screenshot'
                    }
                ],
                slug: 'website-for-finding-and-reviewing-local-mechanics-in-your-area',
                tech: ['Laravel', 'Livewire', 'MySQL'],
                intro: 'MEchanic finder in your area',
                client: 'Personal Project',
                live_link: '#',
                github_link: 'https://github.com/Niel22/mechanic-finder',
                features: [
                    'Users can register and log in to access platform features.',
                    'A search function allows filtering mechanics by location, service, and rating',
                    'Users can submit reviews and ratings based on their experiences with mechanics, helping others make informed decisions.'
                ]
            },
        ]
    }),
    mutations: {
        setProject(state, project){
            state.project = project;
        }
    },
    actions: {
        getProject(context, slug){
            const project = context.state.projects.find(project => project.slug === slug);
            context.commit('setProject', project);
        }
    }
}

export default portfolio;