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

function circuitDraw()
{
    var c = document.getElementById("circuit");
    c.width = screen.width;
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 10);
    ctx.lineTo(100, 10);
    ctx.lineTo(110, 0);

    ctx.moveTo(0, 15);
    ctx.lineTo(102.5, 15);
    ctx.lineTo(117.5, 0);

    ctx.moveTo(0, 20);
    ctx.lineTo(105, 20);
    ctx.lineTo(125, 0);

    ctx.moveTo(0, 25);
    ctx.lineTo(107.5, 25);
    ctx.lineTo(132.5, 0);

    ctx.moveTo(0, 30);
    ctx.lineTo(110, 30);
    ctx.lineTo(140, 0);

    ctx.moveTo(0, 35);
    ctx.lineTo(112.5, 35);
    ctx.lineTo(137.5, 10);
    ctx.lineTo(500, 10);
    ctx.lineTo(500, 20);

    ctx.moveTo(510, 0);
    ctx.lineTo(510, 20);

    ctx.moveTo(520, 0);
    ctx.lineTo(520, 20);

    ctx.moveTo(530, 0);
    ctx.lineTo(530, 20);

    ctx.moveTo(500, 50);
    ctx.lineTo(500, 75);

    ctx.moveTo(510, 50);
    ctx.lineTo(510, 75);

    ctx.moveTo(520, 50);
    ctx.lineTo(520, 75);

    ctx.moveTo(530, 50);
    ctx.lineTo(530, 65);
    ctx.lineTo(545, 65);

    ctx.moveTo(335, 60);
    ctx.lineTo(330, 60);
    ctx.lineTo(325, 55);
    ctx.lineTo(200, 55);
    ctx.lineTo(200, 75);

    ctx.moveTo(315, 65);
    ctx.lineTo(310, 65);
    ctx.lineTo(305, 60);
    ctx.lineTo(205, 60);
    ctx.lineTo(205, 75);

    ctx.moveTo(295, 70);
    ctx.lineTo(290, 70);
    ctx.lineTo(285, 65);
    ctx.lineTo(210, 65);
    ctx.lineTo(210, 75);

    ctx.moveTo(150, 75);
    ctx.lineTo(150, 30);
    ctx.lineTo(450, 30);
    ctx.lineTo(450, 75);

    ctx.moveTo(155, 75);
    ctx.lineTo(155, 35);
    ctx.lineTo(445, 35);
    ctx.lineTo(445, 75);

    ctx.moveTo(160, 75);
    ctx.lineTo(160, 40);
    ctx.lineTo(425, 40);
    ctx.lineTo(425, 75);

    ctx.moveTo(435, 65);
    ctx.lineTo(435, 75);

    ctx.moveTo(1390, 40);
    ctx.lineTo(1350, 0);

    ctx.moveTo(1399, 35);
    ctx.lineTo(1364, 0);

    ctx.moveTo(1403, 25);
    ctx.lineTo(1378, 0);

    ctx.moveTo(1407, 15);
    ctx.lineTo(1392, 0);

    ctx.moveTo(1390, 56);
    ctx.lineTo(1300, 56);
    ctx.lineTo(1300, 75);

    ctx.moveTo(1395, 63);
    ctx.lineTo(1305, 63);
    ctx.lineTo(1305, 75);

    ctx.moveTo(1400, 70);
    ctx.lineTo(1310, 70);
    ctx.lineTo(1310, 75);

    ctx.moveTo(1434, 71);
    ctx.lineTo(1438, 75);

    ctx.moveTo(1439, 62);
    ctx.lineTo(1443, 66);

    ctx.moveTo(1444, 53);
    ctx.lineTo(1466, 75);

    ctx.moveTo(1428, 15);
    ctx.lineTo(1438, 5);
    ctx.lineTo(1500, 5);

    ctx.moveTo(1431, 25);
    ctx.lineTo(1446, 10);
    ctx.lineTo(1510, 10);

    ctx.moveTo(1437, 35);
    ctx.lineTo(1457, 15);
    ctx.lineTo(1513, 15);
    ctx.lineTo(1513, 35);

    ctx.moveTo(1445, 41);
    ctx.lineTo(1466, 20);
    ctx.lineTo(1510, 20);

    ctx.moveTo(1503, 2);
    ctx.lineTo(1503, 0);

    ctx.moveTo(1513, 7);
    ctx.lineTo(1513, 0);

    ctx.moveTo(1520, 35);
    ctx.lineTo(1520, 75);

    ctx.moveTo(1527, 35);
    ctx.lineTo(1527, 0);

    ctx.moveTo(1534, 35);
    ctx.lineTo(1534, 75);

    ctx.moveTo(1541, 35);
    ctx.lineTo(1541, 0);

    ctx.moveTo(1548, 35);
    ctx.lineTo(1548, 75);

    ctx.moveTo(1195, 0);
    ctx.lineTo(1195, 75);

    ctx.moveTo(1200, 0);
    ctx.lineTo(1200, 75);

    ctx.moveTo(1205, 0);
    ctx.lineTo(1205, 35);
    ctx.lineTo(1250, 35);
    ctx.lineTo(1250, 75);

    ctx.moveTo(1210, 0);
    ctx.lineTo(1210, 30);
    ctx.lineTo(1255, 30);
    ctx.lineTo(1255, 75);

    ctx.moveTo(1215, 0);
    ctx.lineTo(1215, 25);
    ctx.lineTo(1260, 25);
    ctx.lineTo(1260, 75);

    ctx.moveTo(1000, 15);
    ctx.lineTo(1000, 0);

    ctx.moveTo(1000, 30);
    ctx.lineTo(985, 15);
    ctx.lineTo(985, 0);

    ctx.moveTo(1015, 30);
    ctx.lineTo(1007, 22);
    ctx.lineTo(998, 22);
    ctx.lineTo(993, 17);
    ctx.lineTo(993, 0);

    ctx.moveTo(1015, 15);
    ctx.lineTo(1015, 0);

    ctx.moveTo(1030, 15);
    ctx.lineTo(1030, 0);

    ctx.moveTo(1045, 15);
    ctx.lineTo(1045, 0);

    ctx.moveTo(1030, 30);
    ctx.lineTo(1038, 23);
    ctx.lineTo(1038, 0);

    ctx.moveTo(1045, 30);
    ctx.lineTo(1053, 23);
    ctx.lineTo(1053, 3);
    ctx.lineTo(1190, 3);
    ctx.lineTo(1190, 75);

    ctx.moveTo(1060, 15);
    ctx.lineTo(1060, 8);
    ctx.lineTo(1185, 8);
    ctx.lineTo(1185, 75);

    ctx.moveTo(1060, 30);
    ctx.lineTo(1075, 15);
    ctx.lineTo(1180, 15);
    ctx.lineTo(1180, 75);

    ctx.moveTo(1075, 30);
    ctx.lineTo(1068, 38);
    ctx.lineTo(980, 38);
    ctx.lineTo(980, 75);

    ctx.moveTo(1000, 45);
    ctx.lineTo(985, 45);
    ctx.lineTo(985, 75);

    ctx.moveTo(1015, 45);
    ctx.lineTo(1007, 53);
    ctx.lineTo(990, 53);
    ctx.lineTo(990, 75);

    ctx.moveTo(1075, 45);
    ctx.lineTo(1175, 45);
    ctx.lineTo(1175, 75);

    ctx.moveTo(1060, 45);
    ctx.lineTo(1066, 51);
    ctx.lineTo(1170, 51);
    ctx.lineTo(1170, 75);

    ctx.moveTo(1030, 45);
    ctx.lineTo(1036, 51);
    ctx.lineTo(1036, 75);

    ctx.moveTo(1045, 45);
    ctx.lineTo(1039, 52);
    ctx.lineTo(1039, 75);

    ctx.moveTo(1030, 60);
    ctx.lineTo(1023, 68);
    ctx.lineTo(1023, 75);

    ctx.moveTo(1015, 60);
    ctx.lineTo(1009, 67);
    ctx.lineTo(1009, 75);

    ctx.moveTo(1000, 60);
    ctx.lineTo(1006, 67);
    ctx.lineTo(1006, 75);

    ctx.moveTo(1045, 60);
    ctx.lineTo(1051, 54);
    ctx.lineTo(1165, 54);
    ctx.lineTo(1165, 75);

    ctx.moveTo(1060, 75);
    ctx.lineTo(1075, 60);
    ctx.lineTo(1160, 60);
    ctx.lineTo(1160, 75);

    ctx.moveTo(1345, 30);
    ctx.lineTo(1305, 30);

    ctx.moveTo(1297, 32);
    ctx.lineTo(1278, 52);

    ctx.moveTo(800, 75);
    ctx.lineTo(800, 20);
    ctx.lineTo(700, 20);
    ctx.lineTo(700, 0);

    ctx.moveTo(790, 75);
    ctx.lineTo(790, 25);
    ctx.lineTo(690, 25);
    ctx.lineTo(690, 0);

    ctx.moveTo(780, 75);
    ctx.lineTo(780, 30);
    ctx.lineTo(680, 30);
    ctx.lineTo(680, 0);

    ctx.moveTo(770, 75);
    ctx.lineTo(770, 35);
    ctx.lineTo(575, 35);
    ctx.lineTo(575, 75);

    ctx.moveTo(760, 75);
    ctx.lineTo(760, 40);
    ctx.lineTo(585, 40);
    ctx.lineTo(585, 75);

    ctx.moveTo(750, 75);
    ctx.lineTo(750, 45);
    ctx.lineTo(595, 45);
    ctx.lineTo(595, 75);

    ctx.moveTo(800, 55);
    ctx.lineTo(980, 55);

    ctx.moveTo(900, 0);
    ctx.lineTo(900, 20);

    ctx.moveTo(910, 0);
    ctx.lineTo(910, 20);

    ctx.moveTo(920, 0);
    ctx.lineTo(920, 30);
    ctx.lineTo(905, 30);

    ctx.moveTo(930, 0);
    ctx.lineTo(930, 20);

    ctx.moveTo(940, 0);
    ctx.lineTo(940, 20);

    ctx.moveTo(920, 30);
    ctx.lineTo(935, 30);

    ctx.moveTo(1600, 0);
    ctx.lineTo(1675, 75);
    ctx.lineTo(2000, 75);
    ctx.lineTo(2075, 0);

    ctx.moveTo(1610, 0);
    ctx.lineTo(1675, 65);
    ctx.lineTo(2000, 65);
    ctx.lineTo(2065, 0);

    ctx.moveTo(1620, 0);
    ctx.lineTo(1675, 55);
    ctx.lineTo(2000, 55);
    ctx.lineTo(2055, 0);

    ctx.moveTo(1630, 0);
    ctx.lineTo(1675, 45);
    ctx.lineTo(2000, 45);
    ctx.lineTo(2045, 0);

    ctx.moveTo(1640, 0);
    ctx.lineTo(1675, 35);
    ctx.lineTo(2000, 35);
    ctx.lineTo(2035, 0);

    // draw the lines
    ctx.strokeStyle = "#30F030";
    ctx.fillStyle = "#30F030";
    ctx.stroke();

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(1447, 69, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(435, 60, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(550, 65, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(340, 60, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(320, 65, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300, 70, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1513, 40, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1520, 30, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1527, 40, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1534, 30, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1541, 40, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1548, 30, 4, 0, 2*Math.PI);
    ctx.stroke();

    // IC
    ctx.beginPath();
    ctx.arc(1000, 15, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1000, 30, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1000, 45, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1000, 60, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1000, 75, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1015, 15, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1015, 30, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1015, 45, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1015, 60, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1015, 75, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1030, 15, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1030, 30, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1030, 45, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1030, 60, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1030, 75, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1045, 15, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1045, 30, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1045, 45, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1045, 60, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1045, 75, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1060, 15, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1060, 30, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1060, 45, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1060, 60, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1060, 75, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1075, 15, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1075, 30, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1075, 45, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1075, 60, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1075, 75, 4, 0, 2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(1350, 30, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1300, 30, 4, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1275, 55, 4, 0, 2*Math.PI);
    ctx.stroke();

    // horizontal IC
    ctx.fillRect(497, 40, 6, 10);
    ctx.fillRect(507, 40, 6, 10);
    ctx.fillRect(517, 40, 6, 10);
    ctx.fillRect(527, 40, 6, 10);
    ctx.fillRect(497, 20, 6, 10);
    ctx.fillRect(507, 20, 6, 10);
    ctx.fillRect(517, 20, 6, 10);
    ctx.fillRect(527, 20, 6, 10);

    ctx.rotate(Math.PI / 4);
    // rotated IC
    ctx.fillRect(1017, -950, 6, 10);
    ctx.fillRect(1027, -950, 6, 10);
    ctx.fillRect(1037, -950, 6, 10);
    ctx.fillRect(1047, -950, 6, 10);

    ctx.fillRect(1017, -1000, 6, 10);
    ctx.fillRect(1027, -1000, 6, 10);
    ctx.fillRect(1037, -1000, 6, 10);
    ctx.fillRect(1047, -1000, 6, 10);

    ctx.fillRect(1055, -957, 10, 6);
    ctx.fillRect(1055, -967, 10, 6);
    ctx.fillRect(1055, -977, 10, 6);
    ctx.fillRect(1055, -987, 10, 6);

    ctx.fillRect(1005, -957, 10, 6);
    ctx.fillRect(1005, -967, 10, 6);
    ctx.fillRect(1005, -977, 10, 6);
    ctx.fillRect(1005, -987, 10, 6);

    ctx.rotate(-Math.PI / 4);

    // capacitors
    ctx.fillRect(1500, 2, 5, 5);
    ctx.fillRect(1510, 7, 5, 5);
    ctx.fillRect(1500, 12, 5, 5);
    ctx.fillRect(1510, 17, 5, 5);

    // transistors
    ctx.fillRect(898, 20, 5, 5);
    ctx.fillRect(903, 27, 5, 5);
    ctx.fillRect(908, 20, 5, 5);

    ctx.fillRect(928, 20, 5, 5);
    ctx.fillRect(933, 27, 5, 5);
    ctx.fillRect(938, 20, 5, 5);
}

var curPage = "pages_home";
var curMenu = "menus_home";
var curLevel = 0
var curSubMenu = null;
var curSubSubMenu = null;
var curSubSubSubMenu = null;
function setInitPage()
{
    var url = location.href.split("#");

    if (url.includes("rand"))
    {
        curPage = "pages_rand";
        showMenu("menus_rand", 0);
        showMenu("menus_rand_salsa", 0);
    }

    if (url.includes("salsa"))
    {
        curPage = "pages_rand_salsa";
        showMenu("menus_rand", 0);
        showMenu("menus_rand_salsa", 1);
    }

    showPage(curPage);
}

function showPage(page)
{
    var oldpage = document.getElementById(curPage);
    oldpage.style.display = "none";

    var newpage = document.getElementById(page);
    newpage.style.display = "block";
    
    curPage = page;
}

function showMenu(subMenu, level)
{
    if (subMenu == null || curMenu == subMenu)
    {
        return;
    }

    curMenu = subMenu;
    curLevel = level;
    // display the sub menu
    if (curSubMenu && level == 0 && curLevel != 0)
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

// TODO :: move this to draw dynamically to when the page is shown.
brainDraw();
circuitDraw();
setInitPage();
