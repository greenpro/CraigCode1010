mainfd = open("content/main.pt", "r")
main   = mainfd.read()
mainfd.close()

parts = [
    [
        "pages/home",
        "templates/page.pt",
        "content/pages/home.pt",
        [
            ["id",    "pages_home"],
            ["title", "Home"]
        ]
    ],
    [
        "pages/projects",
        "templates/page.pt",
        "content/pages/projects.pt",
        [
            ["id",    "pages_projects"],
            ["title", "Projects"]
        ]
    ],
    [
        "pages/projects/sac",
        "templates/page.pt",
        "content/pages/projects/sac.pt",
        [
            ["id",    "pages_projects_sac"],
            ["title", "Southern Arm Control"]
        ]
    ],
    [
        "pages/projects/sac/structure",
        "templates/page.pt",
        "content/pages/projects/sac/structure.pt",
        [
            ["id",    "pages_projects_sac_structure"],
            ["title", "Structure"]
        ]
    ],
    [
        "pages/projects/sac/ik",
        "templates/page.pt",
        "content/pages/projects/sac/ik.pt",
        [
            ["id",    "pages_projects_sac_ik"],
            ["title", "Inverse Kinematics"]
        ]
    ],
    [
        "pages/projects/sac/install",
        "templates/page.pt",
        "content/pages/projects/sac/install.pt",
        [
            ["id",    "pages_projects_sac_install"],
            ["title", "Installation"]
        ]
    ],
    [
        "pages/projects/sac/install/latest",
        "templates/page.pt",
        "content/pages/projects/sac/install/latest.pt",
        [
            ["id",    "pages_projects_sac_install_latest"],
            ["title", "Latest"]
        ]
    ],
    [
        "pages/projects/sac/install/lunar",
        "templates/page.pt",
        "content/pages/projects/sac/install/lunar.pt",
        [
            ["id",    "pages_projects_sac_install_lunar"],
            ["title", "Lunar"]
        ]
    ],
    [
        "pages/projects/sac/install/kinetic",
        "templates/page.pt",
        "content/pages/projects/sac/install/kinetic.pt",
        [
            ["id",    "pages_projects_sac_install_kinetic"],
            ["title", "Kinetic"]
        ]
    ],
    [
        "pages/projects/sac/building",
        "templates/page.pt",
        "content/pages/projects/sac/building.pt",
        [
            ["id",    "pages_projects_sac_building"],
            ["title", "Building"]
        ]
    ],
    [
        "pages/projects/sac/running",
        "templates/page.pt",
        "content/pages/projects/sac/running.pt",
        [
            ["id",    "pages_projects_sac_running"],
            ["title", "Running"]
        ]
    ],
    [
        "pages/projects/sac/design",
        "templates/page.pt",
        "content/pages/projects/sac/design.pt",
        [
            ["id",    "pages_projects_sac_design"],
            ["title", "Design Guidlines"]
        ]
    ],
    [
        "pages/projects/sac/contributing",
        "templates/page.pt",
        "content/pages/projects/sac/contributing.pt",
        [
            ["id",    "pages_projects_sac_contributing"],
            ["title", "Contributing"]
        ]
    ],
    [
        "pages/projects/sac/issues",
        "templates/page.pt",
        "content/pages/projects/sac/issues.pt",
        [
            ["id",    "pages_projects_sac_issues"],
            ["title", "Known Issues"]
        ]
    ],
    [
        "pages/projects/sac/downloads",
        "templates/page.pt",
        "content/pages/projects/sac/downloads.pt",
        [
            ["id",    "pages_projects_sac_downloads"],
            ["title", "Downloads"]
        ]
    ],
    [
        "pages/projects/cc",
        "templates/page.pt",
        "content/pages/projects/cc.pt",
        [
            ["id",    "pages_projects_cc"],
            ["title", "CraigCode1010"]
        ]
    ],
    [
        "pages/about",
        "templates/page.pt",
        "content/pages/about.pt",
        [
            ["id",    "pages_about"],
            ["title", "About"]
        ]
    ],
    [
        "pages/rand",
        "templates/page.pt",
        "content/pages/rand.pt",
        [
            ["id",    "pages_rand"],
            ["title", "Rand()"]
        ]
    ],
    [
        "pages/rand/salsa",
        "templates/page.pt",
        "content/pages/rand/salsa.pt",
        [
            ["id",    "pages_rand_salsa"],
            ["title", "Habanero Serrano Salsa"]
        ]
    ],
    [
        "menus/home",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       ""],
            ["page_link",       "'pages_home'"],
            ["menu_link",       "null"],
            ["menu_link_level", "0"],
            ["h_size",          "2"],
            ["text",            "Home"]
        ]
    ],
    [
        "menus/projects",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       ""],
            ["page_link",       "'pages_projects'"],
            ["menu_link",       "'menus_projects'"],
            ["menu_link_level", "0"],
            ["h_size",          "2"],
            ["text",            "Projects"]
        ]
    ],
    [
        "menus/projects/sac",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-topic"],
            ["page_link",       "'pages_projects_sac'"],
            ["menu_link",       "'menus_projects_sac'"],
            ["menu_link_level", "1"],
            ["h_size",          "3"],
            ["text",            "Southern Arm Control"]
        ]
    ],
    [
        "menus/projects/sac/structure",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_structure'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Structure"]
        ]
    ],
    [
        "menus/projects/sac/ik",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_ik'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Inverse Kinematics"]
        ]
    ],
    [
        "menus/projects/sac/install",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_install'"],
            ["menu_link",       "'menus_projects_sac_install'"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Installation and Upgrading"]
        ]
    ],
    [
        "menus/projects/sac/install/latest",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_install_latest'"],
            ["menu_link",       "null"],
            ["menu_link_level", "3"],
            ["h_size",          "5"],
            ["text",            "Latest"]
        ]
    ],
    [
        "menus/projects/sac/install/lunar",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_install_lunar'"],
            ["menu_link",       "null"],
            ["menu_link_level", "3"],
            ["h_size",          "5"],
            ["text",            "Lunar"]
        ]
    ],
    [
        "menus/projects/sac/install/kinetic",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_install_kinetic'"],
            ["menu_link",       "null"],
            ["menu_link_level", "3"],
            ["h_size",          "5"],
            ["text",            "Kinetic"]
        ]
    ],
    [
        "menus/projects/sac/building",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_building'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Building"]
        ]
    ],
    [
        "menus/projects/sac/running",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_running'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Running"]
        ]
    ],
    [
        "menus/projects/sac/design",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_design'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Design"]
        ]
    ],
    [
        "menus/projects/sac/contributing",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_contributing'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Contributing"]
        ]
    ],
    [
        "menus/projects/sac/issues",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_issues'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Known Issues"]
        ]
    ],
    [
        "menus/projects/sac/downloads",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-sub-topic"],
            ["page_link",       "'pages_projects_sac_downloads'"],
            ["menu_link",       "null"],
            ["menu_link_level", "2"],
            ["h_size",          "4"],
            ["text",            "Downloads"]
        ]
    ],
    [
        "menus/projects/cc",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-topic"],
            ["page_link",       "'pages_projects_cc'"],
            ["menu_link",       "null"],
            ["menu_link_level", "1"],
            ["h_size",          "3"],
            ["text",            "CraigCode1010"]
        ]
    ],
    [
        "menus/about",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       ""],
            ["page_link",       "'pages_about'"],
            ["menu_link",       "null"],
            ["menu_link_level", "0"],
            ["h_size",          "2"],
            ["text",            "About"]
        ]
    ],
    [
        "menus/rand",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       ""],
            ["page_link",       "'pages_rand'"],
            ["menu_link",       "'menus_rand_salsa'"],
            ["menu_link_level", "0"],
            ["h_size",          "2"],
            ["text",            "Rand()"]
        ]
    ],
    [
        "menus/rand/salsa",
        "templates/menu_item.pt",
        None,
        [
            ["sub_class",       "sub-topic"],
            ["page_link",       "'pages_rand_salsa'"],
            ["menu_link",       "null"],
            ["menu_link_level", "1"],
            ["h_size",          "3"],
            ["text",            "Habanero-Serrano Salsa"]
        ]
    ]]

# Extract and fill the pages
for part in parts:
    mainTag  = "{{" + part[0] + "}}"
    template = part[1]
    content  = part[2]
    tags     = part[3]

    # Open the files and extract the contents
    fd = open(template, "r")
    template = fd.read()
    fd.close()

    if content != None:
        fd = open(content, "r")
        content = fd.read()
        fd.close()

        template = template.replace("{{content}}", content)

    # Fill out the snippet
    for tag in tags:
        template = template.replace("{{" + tag[0] + "}}", tag[1])

    if mainTag in main:
        # Add to the main page
        main = main.replace(mainTag, template)
    else:
        print("Tag " + mainTag + " not found.")

# Write the final file
fd = open("index.html", "w")
fd.write(main)
fd.close()
