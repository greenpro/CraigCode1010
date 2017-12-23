function brainDraw()
{
    var wid1 = 3;
    var col1 = "#000000";
    var wid2 = 2;
    var col2 = "#000000";
    var wid3 = 1;
    var col3 = "#000000";
    var c = document.getElementById("mind").getContext("2d");

    c.beginPath();

    // Shell
    c.moveTo(  5, 193);
    c.lineTo( 25, 135);
    c.lineTo( 77,  70);
    c.lineTo(170,  20);
    c.lineTo(270,   2);
    c.lineTo(360,  25);
    c.lineTo(435,  80);
    c.lineTo(490, 175);
    c.lineTo(486, 190);
    c.lineTo(497, 230);
    c.lineTo(465, 293);
    c.lineTo(443, 293);
    c.lineTo(420, 315);
    c.lineTo(400, 320);
    c.lineTo(370, 315);
    c.lineTo(360, 335);
    c.lineTo(350, 340);
    c.lineTo(378, 383);
    c.lineTo(365, 395);
    c.lineTo(350, 395);
    c.lineTo(290, 335);
    c.lineTo(265, 335);
    c.lineTo(205, 350);
    c.lineTo(140, 330);
    c.lineTo(135, 295);
    c.lineTo( 80, 297);
    c.lineTo( 78, 292);
    c.lineTo( 35, 275);
    c.lineTo(  5, 193);

    c.strokeStyle = col1;
    c.lineWidth = wid1;
    c.stroke();
    c.beginPath();

    // Front top
    c.moveTo(135, 295);
    c.lineTo(110, 280);
    c.lineTo(115, 270);
    c.lineTo(100, 210);
    c.lineTo(130, 170);
    c.lineTo(160, 150);
    c.lineTo(200, 135);
    c.lineTo(195, 130);
    c.lineTo(210, 115);
    c.lineTo(230, 100);
    c.lineTo(265,  90);
    c.lineTo(295,  60);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
    c.beginPath();

    c.moveTo(110, 280);
    c.lineTo( 75, 285);

    c.moveTo(115, 270);
    c.lineTo(100, 245);
    c.lineTo( 85, 240);

    c.moveTo(100, 245);
    c.lineTo( 80, 265);

    c.moveTo(100, 210);
    c.lineTo( 80, 210);
    c.lineTo( 60, 215);
    c.lineTo( 65, 170);
    c.lineTo( 47, 150);
    c.lineTo( 25, 180);
    c.lineTo( 15, 175);

    c.moveTo( 80, 210);
    c.lineTo( 80, 220);
    c.lineTo(100, 235);

    c.moveTo( 80, 220);
    c.lineTo( 45, 255);

    c.moveTo( 50, 220);
    c.lineTo( 30, 190);

    c.moveTo(130, 170);
    c.lineTo( 90, 150);

    c.moveTo(160, 150);
    c.lineTo(135, 100);
    c.lineTo(120,  90);

    c.moveTo(195, 130);
    c.lineTo(175, 140);
    c.lineTo(165, 135);

    c.moveTo(210, 115);
    c.lineTo(190,  95);

    c.moveTo(230, 100);
    c.lineTo(220,  70);

    c.moveTo(265,  90);
    c.lineTo(285, 110);
    
    c.strokeStyle = col3;
    c.lineWidth = wid3;
    c.stroke();
    c.beginPath();

    c.moveTo(170,  20);
    c.lineTo(150,  75);
    c.lineTo(120,  79);
    c.lineTo( 97, 100);
    c.lineTo( 97, 125);
    c.lineTo( 70, 133);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
    c.beginPath();

    c.moveTo(150,  75);
    c.lineTo(160,  85);
    c.lineTo(168, 110);

    c.moveTo(120,  79);
    c.lineTo(118,  60);
    
    c.moveTo( 97, 100);
    c.lineTo( 75,  90);

    c.strokeStyle = col3;
    c.lineWidth = wid3;
    c.stroke();
    c.beginPath();

    c.moveTo( 25, 135);
    c.lineTo( 75, 110);

    c.moveTo(270,   2);
    c.lineTo(240,  30);
    c.lineTo(195,  35);
    c.lineTo(200,  70);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
    c.beginPath();

    c.moveTo(240,  30);
    c.lineTo(240,  65);

    c.moveTo(195,  35);
    c.lineTo(210,  25);

    c.strokeStyle = col3;
    c.lineWidth = wid3;
    c.stroke();
    c.beginPath();

    c.moveTo(360,  25);
    c.lineTo(330,  40);
    c.lineTo(280,  35);
    c.lineTo(255,  60);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
    c.beginPath();

    c.moveTo(330,  40);
    c.lineTo(330,  70);

    c.moveTo(280,  35);
    c.lineTo(280,  15);

    c.strokeStyle = col3;
    c.lineWidth = wid3;
    c.stroke();
    c.beginPath();

    // middle
    c.moveTo(435,  80);
    c.lineTo(405,  90);
    c.lineTo(360,  75);
    c.lineTo(310, 140);
    c.lineTo(280, 143);
    c.lineTo(240, 155);
    c.lineTo(190, 185);
    c.lineTo(150, 208);
    c.lineTo(145, 248);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
    c.beginPath();

    c.moveTo(405,  90);
    c.lineTo(395, 125);
    c.lineTo(375, 130);
    c.lineTo(365, 155);
    c.lineTo(350, 158);

    c.moveTo(360,  75);
    c.lineTo(370,  55);

    c.moveTo(310, 140);
    c.lineTo(320, 160);

    c.moveTo(280, 143);
    c.lineTo(250, 110);

    c.moveTo(240, 155);
    c.lineTo(250, 180);

    c.moveTo(190, 185);
    c.lineTo(180, 160);

    c.moveTo(150, 208);
    c.lineTo(140, 190);
    c.lineTo(140, 180);

    c.strokeStyle = col3;
    c.lineWidth = wid3;
    c.stroke();
    c.beginPath();

    c.moveTo(490, 175);
    c.lineTo(410, 145);
    c.lineTo(360, 190);
    c.lineTo(320, 180);
    c.lineTo(270, 185);
    c.lineTo(200, 230);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
    c.beginPath();

    c.moveTo(410, 145);
    c.lineTo(415, 180);

    c.moveTo(360, 190);
    c.lineTo(410, 210);

    c.moveTo(320, 180);
    c.lineTo(320, 210);

    c.moveTo(270, 185);
    c.lineTo(270, 165);

    c.strokeStyle = col3;
    c.lineWidth = wid3;
    c.stroke();
    c.beginPath();

    c.moveTo(486, 190);
    c.lineTo(440, 210);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
    c.beginPath();

    // bottom
    c.moveTo(443, 293);
    c.lineTo(450, 280);
    c.lineTo(450, 270);
    c.lineTo(430, 240);
    c.lineTo(350, 215);
    c.lineTo(310, 225);
    c.lineTo(280, 260);
    c.lineTo(290, 300);
    c.lineTo(370, 315);

    c.strokeStyle = col1;
    c.lineWidth = wid1;
    c.stroke();
    c.beginPath();

    c.moveTo(310, 225);
    c.lineTo(290, 200);

    c.strokeStyle = col3;
    c.lineWidth = wid3;
    c.stroke();
    c.beginPath();

    c.moveTo(280, 260);
    c.lineTo(230, 270);
    c.lineTo(200, 300);
    c.lineTo(135, 295);

    c.strokeStyle = col1;
    c.lineWidth = wid1;
    c.stroke();
    c.beginPath();

    c.moveTo(230, 270);
    c.lineTo(240, 240);

    c.moveTo(200, 300);
    c.lineTo(180, 260);
    c.lineTo(185, 240);

    c.strokeStyle = col2;
    c.lineWidth = wid2;
    c.stroke();
}

brainDraw();
