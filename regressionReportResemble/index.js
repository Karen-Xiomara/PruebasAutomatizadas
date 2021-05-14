const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, escenarios, options, pasos } = config;

async function executeTest(){
    if(escenarios.length === 0){
      return;
    }
    let resultInfo = {}
    let resultTotal = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    for (a of escenarios){
      for(b of pasos){
        if(!b in ['01', '02', '00', '03', '04', '05','06', '07', '08','09']){
            return;
        }
        if (!fs.existsSync(`./report/${datetime}`)){
            fs.mkdirSync(`./report/${datetime}`, { recursive: true });
        }
        
        //Inicializando valores a presentar para cuando no existan archivos en alguna de las rutas ( before ó after)
        
        resultInfo[b] = {
          isSameDimensions: true,
          dimensionDifference: {"width":0,"height":0},
          rawMisMatchPercentage: 0,
          misMatchPercentage: "0.00",
          diffBounds: {"top":660,"left":1000,"bottom":0,"right":0},
          analysisTime: 0
        }
        
        if (fs.existsSync(`./report/before/before-escenario${a}Paso${b}.png`)) {
          resultInfo[b] = {
            isSameDimensions: false,
            dimensionDifference: {"width":0,"height":0},
            rawMisMatchPercentage: 100,
            misMatchPercentage: "100.00",
            diffBounds: {"top":660,"left":1000,"bottom":0,"right":0},
            analysisTime: 0
          }
          if (fs.existsSync(`./report/after/after-escenario${a}Paso${b}.png`)) {
            const data = await compareImages(
         
            //Leyendo archivos correspondientes a Screenshots guardados en carpetas Con version previa y nueva de Ghost
              fs.readFileSync(`./report/before/before-escenario${a}Paso${b}.png`),
              fs.readFileSync(`./report/after/after-escenario${a}Paso${b}.png`),
              options
            );
            resultInfo[b] = {
              isSameDimensions: data.isSameDimensions,
              dimensionDifference: data.dimensionDifference,
              rawMisMatchPercentage: data.rawMisMatchPercentage,
              misMatchPercentage: data.misMatchPercentage,
              diffBounds: data.diffBounds,
              analysisTime: data.analysisTime
            }
        
            fs.writeFileSync(`./report/${datetime}/compare-escenario${a}Paso${b}.png`, data.getBuffer());
          }
        }
      }
      
      //Cada vez que se verifica un nuevo escenario se adiciona el contenido al reporte
      fs.appendFileSync(`./report/${datetime}/report.html`, createReport(datetime, resultInfo));
      fs.copyFileSync('./index.css', `./report/${datetime}/index.css`);
    }

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")

    
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Escenario: ${a}</h2>
        <h2>Paso: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-escenario${a}Paso${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-escenario${a}Paso${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-escenario${a}Paso${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.pasos.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}