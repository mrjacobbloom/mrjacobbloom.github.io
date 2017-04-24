(function() {
var doc = window.editor;
var KEYBINDINGS = {
  'CMND': {
    'CTRL': {},
    'SHIFT': {
      'Space':
        function(e) {
          doc.setCommand(false);
        },
    },
    'CTRLSHIFT': {},
    'NONE': {
      'Escape':
        function(e) {
          doc.setCommand(false);
        },
      'Backspace':
        function(e) {
          if(doc.commandinput.innerHTML.length) {
            doc.commandinput.innerHTML = doc.commandinput.innerHTML.substring(0, doc.commandinput.innerHTML.length - 1);
          } else {
            doc.setCommand(false);
          }
        },
      'Enter':
        function(e) {
          doc.commandinput.innerHTML = 'RUNNING "' + doc.commandinput.innerHTML + '"';
          setTimeout(function() {doc.setCommand(false);}, 500)
        },
      'DEFAULT':
        function(e) {
          if(e.key.length == 1) {
            doc.commandinput.innerHTML += e.key;
          }
        },
    }
  },
  'NCMND': {
    'CTRL': {
      'KeyA':
        function(e) {
          doc.caret.setSelect(doc.lines[0], 0);
          let lastLine = doc.lines[doc.lines.length - 1];
          doc.caret.setSelect(lastLine, lastLine.getLength(), true);
        },
    },
    'SHIFT': {
      'Tab':
        function(e) {
          var unTabLine = function(line) {
            if(line.getText().substring(0, doc.tab.length) == doc.tab) {
              line.setText(line.getText().substring(doc.tab.length));
              return true;
            } else {
              return false;
            }
          }
          
          if(doc.caret.range.isRange) {
            let currentline = doc.caret.range.chars[0].line;
            let lastindex = doc.caret.range.chars[doc.caret.range.chars.length - 1].line.getIndex();
            while(currentline && currentline.getIndex() <= lastindex) {
              if(unTabLine(currentline)) {
                if(currentline == doc.caret.line) {
                  doc.caret.index = Math.max(0, doc.caret.index - doc.tab.length);
                } else if( currentline == doc.caret.range.anchor.line) {
                  doc.caret.range.anchor.index = Math.max(0, doc.caret.range.anchor.index - doc.tab.length);
                }
              }
              currentline = currentline.getNextLine();
            }
            doc.caret.setSelect(doc.caret.line, doc.caret.index, true);
          } else {
            if(unTabLine(doc.caret.line)) {
              doc.caret.setSelect(doc.caret.line, Math.max(0, doc.caret.index - doc.tab.length));
            }
          }
        },
        'Space':
          function(e) {
            doc.setCommand(true);
          },
    },
    'CTRLSHIFT': {
      'KeyA':
        function(e) {
          doc.caret.setSelect(doc.caret.line, doc.caret.index);
        },
    },
    'NONE': {
      'ArrowUp':
        function(e) {
          if(doc.caret.line.getIndex() !== 0) {
            let prev = doc.caret.line.getPreviousLine();
            if(doc.caret.column > prev.getLength()) {
              doc.caret.setSelect(prev, prev.getLength(), e.shiftKey);
            } else {
              doc.caret.setSelect(prev, doc.caret.column, e.shiftKey);
            }
          } else {
            doc.caret.setSelect(doc.caret.line, 0, e.shiftKey);
            doc.caret.column = doc.caret.index;
          }
        },
      'ArrowDown':
        function(e) {
          if(doc.caret.line.getIndex() < doc.lines.length - 1) {
            let next = doc.caret.line.getNextLine();
            if(doc.caret.column > next.getLength()) {
              doc.caret.setSelect(next, next.getLength(), e.shiftKey);
            } else {
              doc.caret.setSelect(next, doc.caret.column, e.shiftKey);
            }
          } else {
            doc.caret.setSelect(doc.caret.line, doc.caret.line.getLength(), e.shiftKey);
            doc.caret.column = doc.caret.index;
          }
        },
      'ArrowLeft':
        function(e) {
          if(doc.caret.index === 0) {
            if(doc.caret.line.getIndex() !== 0) {
              let prev = doc.caret.line.getPreviousLine();
              doc.caret.setSelect(prev, prev.getLength(), e.shiftKey);
              doc.caret.column = prev.getLength();
            }
          } else {
            doc.caret.setSelect(doc.caret.line, doc.caret.column - 1, e.shiftKey);
            doc.caret.column = doc.caret.index;
          }
        },
      'ArrowRight':
        function(e) {
          if((doc.caret.line.getIndex() < doc.lines.length - 1) && doc.caret.index === doc.caret.line.getLength()) {
            let next = doc.caret.line.getNextLine();
            doc.caret.setSelect(next, 0, e.shiftKey);
            doc.caret.column = 0;
          } else {
            doc.caret.setSelect(doc.caret.line, doc.caret.column + 1, e.shiftKey);
            doc.caret.column = doc.caret.index;
          }
        },
      'Backspace':
        function(e) {
          if(doc.caret.range.isRange) {
            doc.deleteSelection();
          } else {
            if(doc.caret.index === 0) {
              let prev = doc.caret.line.getPreviousLine();
              if(!prev) {
                return;
              }
              let oldprevlength = prev.getLength();
              prev.setText(prev.getText() + doc.caret.line.getText());
              doc.caret.line.remove();
              doc.caret.setSelect(prev, oldprevlength);
            } else {
              var index = doc.caret.index;
              doc.caret.getPreviousChar().remove();
              doc.caret.setSelect(doc.caret.line, index - 1);
            }
          }
        },
      'Enter':
        function(e) {
          doc.insertAtCaret('\n');
        },
      'Tab':
        function(e) {
          if(doc.caret.range.isRange) {
            let currentline = doc.caret.range.chars[0].line;
            let lastindex = doc.caret.range.chars[doc.caret.range.chars.length - 1].line.getIndex();
            while(currentline && currentline.getIndex() <= lastindex) {
              currentline.setText(doc.tab + currentline.getText());
              currentline = currentline.getNextLine();
            }
            // re-create selection
            doc.caret.range.anchor.index += doc.tab.length;
            doc.caret.setSelect(doc.caret.line, doc.caret.index + doc.tab.length, true);
          } else {
            doc.deleteSelection();
            doc.insertAtCaret(doc.tab);
          }
        },
      'DEFAULT':
        function(e) {
          if(e.key.length == 1) {
            doc.deleteSelection();
            doc.insertAtCaret(e.key);
          }
        },
    }
  }
};

document.body.addEventListener('keydown', function(e) {
  if(document.activeElement == title) return true;
  console.log(e);
  var func = false;
  var cmnd = (doc.command ? 'CMND' : 'NCMND');
  if(e.metaKey || e.ctrlKey) {
    func =
        ((e.shiftKey) ? KEYBINDINGS[cmnd]['CTRLSHIFT'][e.code] : false)
        || KEYBINDINGS[cmnd]['CTRL'][e.code]
        || false;
  } else {
    func = 
        ((e.shiftKey) ? KEYBINDINGS[cmnd]['SHIFT'][e.code] : false)
        || KEYBINDINGS[cmnd]['NONE'][e.code]
        || KEYBINDINGS[cmnd]['NONE']['DEFAULT'];
  }
  console.log([cmnd, func ? func.name: false])
  if(func) {
    func(e);
    doc.fileSystem.saveTimer.reset()
    e.preventDefault();
    return false;
  } else {
    return true;
  }
});

})();
