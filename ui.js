function Ui(){
    this.btn_start = document.querySelector(".btn_start"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.score_box = document.querySelector(".score_box"),
    this.btn_next = document.querySelector(".btn_next"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second"),
    this.time_line = document.querySelector(".time_line")
}

Ui.prototype.soruGoster = function(soru) {
    let question = `<span>${quiz.soruIndex + 1}-${soru.soruMetni}</span>`;
    let options = ``;
    for (let cevap in soru.cevapSecenekleri) {
      options += `
          <div class = option>
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
          </div>
        `;
    }
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;
  
    const option = document.querySelectorAll(".option");
    for (let opt of option) {
      opt.setAttribute("onclick", "optionSelected(this)");
    }
}

Ui.prototype.soruSirasiniGoster = function(soruSirasi, toplamSoru){
    let tag = `<span class="badge bg-warning p-2">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

Ui.prototype.skoruGoster = function(toplamSoru, dogruCevap) {
  let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
}