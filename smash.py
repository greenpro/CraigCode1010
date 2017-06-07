main       = open("main.pt",       "r").read();
menu       = open("menu.pt",       "r").read();
sac        = open("sac.pt",        "r").read();
craigCode  = open("craigCode.pt",  "r").read();
about      = open("about.pt",      "r").read();
home       = open("home.pt",       "r").read();
header     = open("header.pt",     "r").read();
footer     = open("footer.pt",     "r").read();
scripts    = open("scripts.pt",    "r").read();

main = main.replace("{{menu}}",      menu     );
main = main.replace("{{sac}}",       sac      );
main = main.replace("{{craigCode}}", craigCode);
main = main.replace("{{about}}",     about    );
main = main.replace("{{home}}",      home     );
main = main.replace("{{header}}",    header   );
main = main.replace("{{footer}}",    footer   );
main = main.replace("{{scripts}}",   scripts  );

main = main.replace("{{menu}}", menu);

open("index.html", "w").write(main);
