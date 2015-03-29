/*!
 * Copyright (c) 2015 Anton Fedulov <afedulov.geekiam@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


;(function () {

  function QTree (data) {
    this.questions = data.questions;
    this.conclusions = data.conclusions;

    this.current = nodeData(data.entry, this.questions[data.entry]);
  }

  QTree.prototype.next = function (answer) {
    var goto = parseTemplate(this.questions[this.current.id].answers[answer]);

    this.current = nodeData(
      goto.content,
      this[goto.type + 's'][goto.content],
      (goto.type !== 'conclusion')
    );
  };


  // Helpers (private)
  // ===========================================

  function nodeData (name, node, isQuestion) {
    isQuestion = typeof isQuestion !== 'undefined' ? isQuestion : true;

    var result = {};

    if (node.hasOwnProperty('representation')) {
      result.id = name;
      result.representation = node.representation;
    } else {
      result.id = result.representation = name;
    }
    if (isQuestion) {
      result.answers = Object.keys(node.answers);
    }
    result.isQuestion = isQuestion;

    return result;
  }

  function parseTemplate (template) {
    var conclusion  = /^=={{(.*)}}$/,
        question    = /^=>{{(.*)}}$/,
        content     = /{{(.*)}}/;

    var result = {};

    if (conclusion.test(template)) {
      result.type = 'conclusion';
    } else if (question.test(template)) {
      result.type = 'question';
    } else {
      throw new Error('Undefined type of template:' + template);
    }
    result.content = template.match(content)[1];

    return result;
  }


  window.QTree = QTree;
})();