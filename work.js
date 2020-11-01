var contentid = "b";
var newstate = false;
var stated = ["Painting, Artist", "Mona Lisa, Leonardo da Vinci", "Last Supper, Leonardo da Vinci", "Starry Nights, Van Gogh"];
var pointer = 0;
var state = ["Famous%20Art.png", "https://psmag.com/.image/t_share/MTI3NTgyMzc4NTMyMzUwNTk1/monalisa-2times.jpg", "https://www.discoverwalks.com/blog/wp-content/uploads/2020/05/the-last-supper-restored-da-vinci_32x16-scaled-1280x720.jpg", "https://oceanmhs.org/wp-content/uploads/2018/01/starrynight.jpg"];
var count = 0;
function change1() {  
if (contentid == "a"){
    contentid = "b";
    document.getElementById("q1").innerHTML = "What is drawing?";
    document.getElementById("details1").innerHTML = "Drawing is a form of visual art in which one uses various drawing instruments to mark paper or another two-dimensional medium. Instruments include graphite pencils, pen and ink, various kinds of paints, inked brushes, colored pencils, crayons, charcoal, chalk, pastels, various kinds of erasers, markers, styluses, and various metals (such as silverpoint). Digital drawing is the act of using a computer to draw. Common methods of digital drawing include a stylus or finger on a touchscreen device, stylus- or finger-to-touchpad, or in some cases, a mouse. There are many digital art programs and devices.<br><br>A drawing instrument releases a small amount of material onto a surface, leaving a visible mark. The most common support for drawing is paper, although other materials, such as cardboard, wood, plastic, leather, canvas, and board, may be used. Temporary drawings may be made on a blackboard or whiteboard or indeed almost anything. The medium has been a popular and fundamental means of public expression throughout human history. It is one of the simplest and most efficient means of communicating visual ideas. The wide availability of drawing instruments makes drawing one of the most common artistic activities.<br><br>Today, drawing skills are recognised as an important developmental milestone in healthy children, coming both earlier and more naturally to us than reading and writing (Dosman, Andrews, and Goulden, 2012). This means drawing has evolved as an innate skill for visual communication that we all share.";
    document.getElementById("img").src = "https://data.ac-illust.com/data/thumbnails/b6/b6910a43e078af8185ce40d9c369cd1e_t.jpeg";
} else {
    contentid = "a";
    document.getElementById("q1").innerHTML = "Can I draw differently?";
    document.getElementById("details1").innerHTML = "Yes! Drawing is a varied topic. Here are a few types of drawing methods. <br> <br>Illustration Drawing-<br>These are drawings that are created to represent the lay-out of a particular document. They include all the basic details of the project concerned clearly stating its purpose, style, size, color, character, and effect.<br><br><br>Life Drawing-<br>Drawings that result from direct or real observations are life drawings. Life drawing, also known as still-life drawing or figure drawing, portrays all the expressions that are viewed by the artist and captured in the picture. The human figure forms one of the most enduring themes in life drawing that is applied to portraiture, sculpture, medical illustration, cartooning and comic book illustration, and other fields.<br><br><br>Analytic Drawing-<br>Sketches that are created for clear understanding and representation of observations made by an artist are called analytic drawings. In simple words, analytic drawing is undertaken to divide observations into small parts for a better perspective.";
}
}
function scrolldoc() {
    window.scrollTo(0, 1270);
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
    document.getElementById("switch").src= state[count];
    document.getElementById("details124").innerHTML = stated[pointer];
if (count==3){
  count= 0;
};
if (pointer==3){
  pointer= 0;
}
count++
pointer++
}
function ins10() {
    newstate = true;
    document.getElementById("inspiration12345").style.display= "block";
    window.scrollTo(0, 2600);
    document.getElementById("linking").style.display= "block";
    document.getElementById("continue").style.display= "none";
}
function newcode() {
    window.scroll(0, 1850);
}
function runcode2() {
    window.scroll(0, 2660)
        document.getElementById("MapBM").style.display= "block";
        document.getElementById("button123").style.display= "block";
        document.getElementById("button456").style.display= "block";

}