var baseUrl;
var curPage = "pages_home";
var curMenu = "menus_home";
var curLevel = 0
var curSubMenu = null;
var curSubSubMenu = null;
var curSubSubSubMenu = null;
var randShown = false;

function setInitPage()
{
    var url = location.href.split("#");
    baseUrl = url[0];

    if (url.length == 1)
    {
        showPage(curPage);
        return;
    }

    curPage = url[1]
    switch (curPage)
    {
        case "pages_home":
            break;

        case "pages_projects":
            showMenu("menus_projects", 0, true);
            break;
        case "pages_projects_sac":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_structure":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_ik":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_install":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            showMenu("menus_projects_sac_install", 2);
            break;
        case "pages_projects_sac_install_latest":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            showMenu("menus_projects_sac_install", 2);
            break;
        case "pages_projects_sac_install_lunar":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            showMenu("menus_projects_sac_install", 2);
            break;
        case "pages_projects_sac_install_kinetic":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            showMenu("menus_projects_sac_install", 2);
            break;
        case "pages_projects_sac_building":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_running":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_design":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_contributing":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_issues":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_sac_downloads":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_sac", 1);
            break;
        case "pages_projects_cc":
            showMenu("menus_projects", 0);
            break;

        case "pages_projects_htmlsmash":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_htmlsmash", 1);
            break;
        case "pages_projects_htmlsmash_installandrun":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_htmlsmash", 1);
            break;
        case "pages_projects_htmlsmash_setup":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_htmlsmash", 1);
            break;
        case "pages_projects_htmlsmash_contributing":
            showMenu("menus_projects", 0);
            showMenu("menus_projects_htmlsmash", 1);
            break;

        case "pages_about":
            break;

        case "pages_rand":
        case "rand":
	    randShown = true;
            showMenu("menus_rand", 0);
            break;

        //case default:
        //    // TODO :: Make this page and add it to the system.
        //    curPage = "pages_not_found";
        //    break;
    }

    showPage(curPage);
}

function showPage(page)
{
    location.href = baseUrl + "#" + page;

    var oldpage = document.getElementById(curPage);
    oldpage.style.display = "none";

    var newpage = document.getElementById(page);
    newpage.style.display = "block";
    
    curPage = page;
}

function showMenu(subMenu, level)
{
    console.log(curMenu)
    console.log(subMenu)
    if (curMenu == subMenu)
    {
        return;
    }

    curMenu = subMenu;
    curLevel = level;
    // display the sub menu
    if (curSubMenu && level == 0)
        document.getElementById(curSubMenu).style.display = "none";

    if (curSubSubMenu && level <= 1)
        document.getElementById(curSubSubMenu).style.display = "none";

    if (curSubSubSubMenu && level <= 2)
        document.getElementById(curSubSubSubMenu).style.display = "none";

    if (subMenu)
        document.getElementById(subMenu).style.display = "block";

    if (level == 0)
    {
        curSubMenu = subMenu;
        curSubSubMenu = null;
        curSubSubSubMenu = null;
    }
    else if (level == 1)
    {
        curSubSubMenu = subMenu;
        curSubSubSubMenu = null;
    }
    else if (level == 2)
    {
        curSubSubSubMenu = subMenu;
    }
}

setInitPage();
