var sheetUrl = 'https://docs.google.com/spreadsheets/d/1YiRX97kCwcqjd567IP9GTd358sdMW6ltXS_OeY4bGjg/pubhtml';

function init() {
  Tabletop.init({ key: sheetUrl,
                       callback: showInfo,
                       simpleSheet: true });
}

function showInfo(data, tabletop) {
  console.log(data);
}

window.addEventListener('DOMContentLoaded', init)
