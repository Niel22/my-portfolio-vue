const portfolio = {
    namespaced: true,
    state: () => ({
        project: {},
        projects: [
            {
                name: 'Blogging Platform',
                overview: 'This Blog Platform is a web application that allows users to create, read, update, and delete blog posts. It features user authentication, a rich text editor, and a clean responsive design. The platform is built using HTML, CSS, JavaScript, Bootstrap, PHP (Laravel), and MySQL.',
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
                overview: 'Shoe Showcasing Website is a dynamic and responsive web application built with Laravel, Livewire, and Bootstrap that allows users to browse and manage a variety of shoe products. It features functionalities for both customers and admins, including user authentication, product browsing, shopping cart management, order processing, and admin dashboard.',
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
                case_study: 'Shoe Making Company',
                intro: 'This web application allows users to browse and manage a wide range of shoe products, offering features for both customers and admins. Built with Laravel, Livewire, and Bootstrap, it ensures a dynamic, responsive',
                client: 'Personal Project',
                live_link: '#',
                github_link: 'https://github.com/Niel22/shoe-website',
                features: [
                    'Customer Side: User authentication, browse categories, view and filter products, color selection, adjust quantity, add to cart/wishlist, checkout, order notifications, order history, manage user profile.',
                    'Admin Side: Category, product, brand, and color management, slider management, site settings, user management, order management, and dashboard statistics.'
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